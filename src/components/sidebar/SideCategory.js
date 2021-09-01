import React from 'react'
import SidebarLink from './SidebarLink';

const SideCategory = ({ item }) => {
    let data =[]
    return (
        <>
            <span className="block pl-3 my-2 text-xs font-semibold text-shark-400 uppercase dark:text-shark-300">{item.category}</span>
            {
                 data = Array.from(item.menu),
                 data.map((x, index) => {
                     return (
                        <SidebarLink item={x} menu={x} key={index} />
                     )
                 })
            }

        </>
    )
}

export default SideCategory

