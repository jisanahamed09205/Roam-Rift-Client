import { MdCollectionsBookmark } from "react-icons/md";
import MenuItem from "../../../Pages/Dashboard/SideBar/MenuItem";
import { IoBookmarksOutline } from "react-icons/io5";
import useRole from '../../../Hook/useRole';
import { GrUserAdmin } from 'react-icons/gr'
import { useState } from "react";
import useAuth from "../../../Hook/useAuth";
import HostModal from "../../Modal/HostRequestModal";
import { becomeHost } from "../../../api/auth";
import swal from "sweetalert";


const TouristMenu = () => {

    const [role] = useRole()
    const {user} = useAuth()
    const [isOpen,setIsOpen] = useState(false)
    const closeModal = ()=>{
        setIsOpen(false)
    }
    const modalHandler =async () =>{
        //request to be a host
        // console.log('request to be a host');
        try{
          const data = await becomeHost(user?.email)
          console.log(data);
          if(data.modifiedCount > 0){
            swal("Success!", "Please Wait for Admin Confirmation!", "success");
          }else{
            swal("Warning!", "Please Wait for Admin Approval!", "warning");
          }
        }catch(err){
            console.log(err);
        }finally{
            setIsOpen(false)
        }
    }

    return (
        <>
            <MenuItem
                icon={MdCollectionsBookmark}
                label='My Bookings'
                address='my-bookings'
            />
            <MenuItem
                icon={IoBookmarksOutline}
                label='My Wishlist'
                address='my-wishlist'
            />
            {role === 'Tourist' && (
                <div onClick={()=>setIsOpen(true)} className='flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform text-gray-600  hover:bg-gray-300   hover:text-gray-700 cursor-pointer'>
                    <GrUserAdmin className='w-5 h-5' />

                    <span className='mx-4 font-medium'>Become Tour Guide</span>
                </div>
            )}
            <HostModal isOpen={isOpen} modalHandler={modalHandler} closeModal={closeModal}></HostModal>
        </>
    );
};

export default TouristMenu;