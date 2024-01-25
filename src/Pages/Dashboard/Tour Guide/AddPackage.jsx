import { Helmet } from "react-helmet-async";
import AddPackageForm from '../../../Components/Form/AddPackageForm'

const AddPackage = () => {
    return (
        <div>
            <Helmet>
                <title>Add Package | Dashboard</title>
            </Helmet>
            <AddPackageForm/>
        </div>
    );
};

export default AddPackage;