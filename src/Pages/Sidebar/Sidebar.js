import React from 'react';
import {Link} from 'react-router-dom';
import {
    ProSidebar,
    SidebarHeader,
    SidebarContent,
    SidebarFooter,
    Menu,
    MenuItem,
    SubMenu
} from 'react-pro-sidebar';
import {
    EmailIcon,
    FacebookIcon,
    LinkedinIcon,
    TwitterIcon,
    PinterestIcon
} from 'react-share';

import {AiFillDashboard} from 'react-icons/ai';
import {FaGraduationCap} from 'react-icons/fa';
import {GiSkills} from 'react-icons/gi';
import {MdSettingsInputComponent} from 'react-icons/md'
import 'react-pro-sidebar/dist/css/styles.css';
import './Styles/Styles.css'
export default function Sidebar(){
    const shareUrl="https://facebook.com"
    return(
        <>
            <ProSidebar className="sidebar bg-green-500 overflow-hidden" style={{height:"100vh !important"}}>
                <SidebarHeader className="text-center">
                    <div className="rounded-full px-6 py-3 text-center items-center justify-center">
                        <img className="w-48 h-48 border-4 m-auto border-gray-200 text-center items-center justify-center rounded-full" src="images/cdn.jpg" alt="My identite"/>
                    </div>
                    <div className="block pb-4">
                        <p className="font-bold uppercase text-gray-50">NARISOA HARILALA</p>
                        <p className="font-bold Capitalize">Freddy Michel</p>
                    </div>
                </SidebarHeader>
                <SidebarContent>
                    <Menu iconShape="square">
                        <MenuItem icon={<AiFillDashboard />} className="font-bold uppercase">
                            Accueil
                            <Link to='/'/>
                        </MenuItem>
                        
                        <MenuItem icon={<GiSkills />} className="font-bold uppercase">
                            Competences
                            <Link to='/competences'/>
                        </MenuItem>
                        <MenuItem icon={<FaGraduationCap />} className="font-bold uppercase">
                            Formations
                            <Link to='/formations'/>
                        </MenuItem>
                        
                        <MenuItem icon={<MdSettingsInputComponent />} className="font-bold uppercase">
                            Experiences/projets
                            <Link to='/experience'/>
                        </MenuItem>
                        <MenuItem icon={<GiSkills />} className="font-bold uppercase">
                            autres
                            <Link to='/other'/>
                        </MenuItem>
                    </Menu>
                </SidebarContent>
                <SidebarFooter className="m-auto border-0 ">
                    <div className="flex m-auto space-x-2 py-2 items-center text-center">
                        <a href="https://www.linkedin.com/in/narisoa-harilala-freddy-michel-49aa031a1/">
                            <LinkedinIcon size={32} round={true}  className="text-center"/>
                        </a>
                        <a href="https://pinterest.com">
                            <PinterestIcon size={32} round={true} />
                        </a>
                        <a href="https://google.email.com">
                        <EmailIcon size={32} round={true} />
                        </a>
                        <a href="https://twitter.com">
                        <TwitterIcon size={32} round={true} />
                        </a>
                        <a href="https://facebook.com">
                            <FacebookIcon size={32} round={true} url={shareUrl}/>
                        </a>
                    </div>
                </SidebarFooter>
            </ProSidebar>
        </>
    )
}