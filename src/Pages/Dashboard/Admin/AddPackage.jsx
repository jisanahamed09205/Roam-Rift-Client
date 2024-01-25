import { Helmet } from "react-helmet-async";
import AddPackageForm from '../../../Components/Form/AddPackageForm'
import useAuth from "../../../Hook/useAuth";
import { imageUpload } from "../../../api/utils";

const AddPackage = () => {
    const {user} = useAuth()
    const handleAddPackage = async(e) =>{
        e.preventDefault();
        const form = e.target;
        const title = form.serviceName.value;
        // const service_provider_email = user?.email;
        // const service_provider_name = user?.displayName;
        // const service_provider_img = user?.photoURL;
        const location = form.area.value;
        const description = form.serviceDetails.value;
        const price = form.price.value;
        const host = {
            service_provider_img : user?.photoURL,
            service_provider_name : user?.displayName,
            service_provider_email : user?.email
        }
        const image = form.image.files[0];
        const img = await imageUpload(image)
        const newPackage ={
            title,
            host,
            location,
            description,
            price,
            img,
        }
        console.log(newPackage);
    }
    return (
        <div>
            <Helmet>
                <title>Add Package | Dashboard</title>
            </Helmet>
            <AddPackageForm user={user} handleAddPackage={handleAddPackage}/>
        </div>
    );
};

export default AddPackage;