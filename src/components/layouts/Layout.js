import React, { useState } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Sidebar from '../sidebar/Sidebar'
import Overlay from '../ui/Overlay'

const Layout = ({ children }) => {
    const [show, setShow] = useState(true);

    return (
        <div className="flex items-center bg-white dark:bg-shark-800 hero">
            <Overlay show={show} setShow={setShow} />
            <Sidebar show={show} setShow={setShow} />
            <div
                className="relative flex flex-col flex-1 h-screen overflow-y-auto overflow-x-hidden bg-blue-50 dark:bg-shark-700">
                <Navbar show={show} setShow={setShow} />
                <div className="w-full px-4 py-8 mx-auto sm:px-6 lg:px-8 max-w-9xl">{children}</div>
                <Footer />
            </div>
        </div>
    )
}

export default Layout
