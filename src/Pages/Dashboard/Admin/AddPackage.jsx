import { Helmet } from "react-helmet-async";
import AddPackageForm from '../../../Components/Form/AddPackageForm'
import useAuth from "../../../Hook/useAuth";
import { imageUpload } from "../../../api/utils";
import { useState } from "react";
import { addPackage } from "../../../api/servicePackage";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const AddPackage = () => {
    const {user} = useAuth()
    const navigate = useNavigate()
    const [loading,setLoading] = useState(false)
    const [uploadButtonText,setUploadButtonText] = useState('Package Image Upload')
    const handleAddPackage = async(e) =>{
        setLoading(true)
        e.preventDefault();
        const form = e.target;
        const title = form.serviceName.value;
        const location = form.area.value;
        const description = form.serviceDetails.value;
        const price = form.price.value;
        const tour_type = form.tour_type.value;
        const host = {
            service_provider_img : user?.photoURL,
            service_provider_name : user?.displayName,
            service_provider_email : user?.email,
            phone: form.phone.value,
            experience: form.experience.value,
            description:form.service_provider_des.value
        };
        const tourPlan = [
            form.day1.value,
            form.day2.value,
            form.day3.value,
            form.day4.value,
            form.day5.value,
        ]
        const image = form.image.files[0];
        const image2 = await imageUpload(image)
        const img = image2.data?.display_url 
        const newPackage ={
            img,
            tour_type,
            title,
            price,
            location,
            host,
            tourPlan,
            description, 
        }
        try{
            const data = await addPackage(newPackage)
            console.log(data);
            setUploadButtonText('Uploaded!!')
            swal("Added!", "Service Added Successfully!", "success")
            // navigate('/dashboard/assigned-tours')
            navigate('/allPackages')
            // form.reset();
        }catch(err){
            console.log(err);
            swal("Error!", "Service Added an error!", "error")
        }finally{
            setLoading(false)
        }
        console.table(newPackage);
    }
    //handle image button text
    const handleImgChange=(image)=>{
        setUploadButtonText(image.name)
    }
    return (
        <div>
            <Helmet>
                <title>Add Package | Dashboard</title>
            </Helmet>
            <AddPackageForm user={user} 
            handleAddPackage={handleAddPackage}
            handleImgChange={handleImgChange}
            loading={loading}
            uploadButtonText={uploadButtonText}
            />
        </div>
    );
};

export default AddPackage;