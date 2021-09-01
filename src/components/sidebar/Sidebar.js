import React from 'react'
import Logo from '../ui/Logo';
import SideCategory from './SideCategory';
import sideBarMenuData from "../../data/SidebarData";

const Sidebar = ({ show, setShow }) => {

    return (
        <div
            className={` ${show ? '' : 'hidden'} border-r dark:border-shark-600  absolute top-0 left-0 z-40 flex-shrink-0 w-64 h-screen p-0 overflow-y-scroll ease-in-out bg-white dark:bg-shark-700 transition lg:overflow-hidden  lg:static lg:left-auto lg:top-auto }`}>
            <div>
                <Logo setShow={setShow} />
                <div className="p-4">

                    <ul className="mt-4">
                        {
                            sideBarMenuData.map((item ,index) => {
                                return (
                                    <SideCategory item={item} key={index} />
                                )

                            })
                        }
                    </ul>
                </div>
            </div>
        </div >
    );
}

export default Sidebar
