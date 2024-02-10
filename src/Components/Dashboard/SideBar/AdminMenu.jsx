import MenuItem from "../../../Pages/Dashboard/SideBar/MenuItem";
import { LuPackagePlus } from "react-icons/lu";
import { MdChecklistRtl } from "react-icons/md";
import { FcSettings } from "react-icons/fc";

const AdminMenu = () => {
    return (
        <>
              <MenuItem
                icon={LuPackagePlus}
                label='Add Package'
                address='add-package'
              />
              <MenuItem
                icon={MdChecklistRtl}
                label='My Listing'
                address='my-listing'
              />
              <MenuItem
                icon={FcSettings}
                label='Manage Users'
                address='manage-users'
              />
        </>
    );
};

export default AdminMenu;