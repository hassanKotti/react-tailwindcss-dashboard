import React from 'react'
import { style } from './Style'
/* You can wrap the a tag with Link and pass href prop to Link if you are using either Create-React-App, Next.js or Gatsby */

const DropdownItem = ({ children }) => {
    return (
        <a tabIndex={0} className={style.item} role="menuitem">
            {children}
        </a>
    )
}

export default DropdownItem
