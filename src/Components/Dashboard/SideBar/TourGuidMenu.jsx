import MenuItem from "../../../Pages/Dashboard/SideBar/MenuItem";
import { LuPackagePlus } from "react-icons/lu";
import { MdAssignmentTurnedIn, MdChecklistRtl} from "react-icons/md";

const TourGuidMenu = () => {
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
                icon={MdAssignmentTurnedIn}
                label='My Assigned Tours'
                address='assigned-tours'
              />
        </>
    );
};

export default TourGuidMenu;