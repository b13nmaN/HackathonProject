import {  FiActivity, FiClock, FiGrid, FiFileText,FiMail} from "react-icons/fi";
import './Sidebar.css'


function Sidebar() {

        return (
        <div className='Sidebar'>
                <div id="Home">
                    <FiGrid className='HomeIcon'/>
                </div>
                <div id='Plus'>
                    <FiClock className='PlusIcon'/>
                </div>
                <div id='Folder'>
                    <FiActivity className='FolderIcon'/>
                </div>
            <div id='Clock'>
                <FiFileText className='ClockIcon'/>
            </div>
            <div id='Share'>
                <FiMail className='ShareIcon'/>
            </div>
        </div>
    )
}

export default Sidebar;
