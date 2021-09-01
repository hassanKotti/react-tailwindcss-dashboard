import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import { NavLink, useRouteMatch } from "react-router-dom";
import Chevron from '../ui/Chevron';
import Submenu from './Submenu';

const SidebarLink = ({ item }) => {
    let match = useRouteMatch({
        path: item.link,
        exact: item.activeOnlyWhenExact
    });
    const [isOpen, setIsOpen] = useState(false);
    return (
        <li onClick={() => setIsOpen(!isOpen)} className={` ${match ? 'dark:bg-shark-500 bg-shark-100' : ''}  px-3 py-2 rounded-sm mb-0.5 last:mb-0 dark:hover:bg-shark-500 hover:bg-shark-300 `} >
            <div className="flex items-center justify-between">
                <NavLink to={item.link} key={item.id} className="flex items-center space-x-4 text-shark-500  dark:text-shark-300" >
                    <Icon icon={item.icon} className="w-8 h-8 text-shark-500 dark:text-shark-300" />
                    <span className="text-sm font-medium ">{item.label}</span>
                </NavLink>
                {(item.sub) ? <Chevron isOpen={isOpen} /> : ''}
            </div>
            {(item.sub) ?
                (
                    <Submenu isOpen={isOpen} submenu={item.sub} className="px-1 py-2"/>

                ) : console.log(item)
            }
        </li>
    )
}

export default SidebarLink
