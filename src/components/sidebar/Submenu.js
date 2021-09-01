import React from 'react'
import { Icon } from '@iconify/react';

const Submenu = ({ isOpen, submenu }) => {
    return (
        <ul className={`${isOpen ? '' : 'hidden'}`}>
            {submenu.map((x) => {
                return (
                    <li key={x.id} className="px-3 py-3 mt-3 ml-4 flex items-center space-x-4 text-shark-400  dark:text-shark-400 rounded-sm mb-0.5 last:mb-0 dark:hover:bg-shark-500 hover:bg-shark-200 " >
                        <a href={x.link} className="flex items-center justify-between space-x-4">
                            <Icon icon={x.icon} className="w-6 h-6 text-shark-400 dark:text-shark-300" />
                            <span className="text-sm font-medium ">{x.label}</span>
                        </a>
                    </li>
                )

            })}
        </ul>
    )
}

export default Submenu
