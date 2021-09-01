import React from 'react'
import { Icon } from '@iconify/react';

const Chevron = ({ isOpen }) => {
    return (

        isOpen ?
            (<Icon icon="tabler:chevron-down" className="ext-shark-500 dark:text-shark-300" />)
            :
            (<Icon icon="tabler:chevron-left" className="ext-shark-500 dark:text-shark-300" />)

    )
}

export default Chevron
