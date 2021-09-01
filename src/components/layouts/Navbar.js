import React, { useState } from 'react'
import ThemeToggle from '../ui/ThemeToggle'

const Navbar = ({show, setShow}) => {
    const [openProfileMenu, setOpenProfileMenu] = useState(false);
    return (

        <header className="px-4 py-2 bg-white dark:bg-shark-700 border-b border-shark-100 dark:border-shark-600">
            <div className="flex items-center justify-between h-16">
                <div className="flex">
                    <button className="text-shark-500 hover:text-shark-600 lg:hidden" aria-controls="sidebar"
                        onClick={()=> setShow(true)}
                    >
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <rect x="4" y="5" width="16" height="2"></rect>
                            <rect x="4" y="11" width="16" height="2"></rect>
                            <rect x="4" y="17" width="16" height="2"></rect>
                        </svg>
                    </button>
                </div>
                <div className="flex items-center">
                    <div className="flex items-center justify-center space-x-2">
                        <div className="flex items-center justify-center space-x-4">
                            <button
                                className="flex items-center justify-center w-8 h-8 ml-3 transition duration-150 bg-shark-100 rounded-full hover:bg-shark-200 false dark:bg-shark-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-shark-500 dark:text-shark-300"
                                    viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        clipRule="evenodd" />
                                </svg>
                            </button>

                            <button
                                className="flex items-center justify-center w-8 h-8 ml-3 transition duration-150 bg-shark-100 rounded-full hover:bg-shark-200 false dark:bg-shark-500  ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-shark-500 dark:text-shark-300 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>

                            </button>

                            <button
                                className="relative flex items-center justify-center w-8 h-8 ml-3 transition duration-150 bg-shark-100 rounded-full hover:bg-shark-200 false dark:bg-shark-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-shark-500 dark:text-shark-300"
                                    viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd"
                                        d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                                        clipRule="evenodd" />
                                </svg>
                                <div
                                    className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full">
                                </div>
                            </button>
                            <ThemeToggle />
                        </div>
                        <div className="w-4 h-8 mx-4 border-r"></div>
                        <div>
                            <div className="ml-2 hover:bg-shark-100 dark:bg-shark-700 dark:hover:bg-shark-600" >
                                <button className="flex items-center px-2 py-2" onClick={() => setOpenProfileMenu(!openProfileMenu)}>
                                    <img className="w-10 h-10 rounded-full" className="w-10 h-10 ml-2 rounded-full"
                                        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=3&w=144&q=144"
                                        alt="" srcSet="" />
                                    <span
                                        className="hidden px-3 py-2 text-sm font-medium tracking-tight text-shark-500 dark:text-shark-300 lg:block">
                                        Hassan Kotti</span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-shark-500 dark:text-shark-300"
                                            viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clipRule="evenodd" />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                            <div
                                className={`${openProfileMenu ? '' : 'hidden'} absolute z-40 w-40 mt-1 overflow-hidden bg-white dark:bg-shark-700 border border-shark-100 dark:border-shark-600 divide-shark-300 rounded shadow-lg right-2 divide-y-1 divide-solid `}>
                                <ul className="w-40">
                                    <li
                                        className="flex items-center px-4 py-3 space-x-2 text-shark-500 transition duration-200 ease-in-out hover:bg-green-600 hover:text-white dark:hover:text-shark-300 dark:text-shark-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5"
                                            viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                                                clipRule="evenodd" />
                                        </svg><a href="#_" className="text-sm tracking-tight dark:text-shark-300">

                                            Profile</a>
                                    </li>
                                    <li
                                        className="flex items-center px-4 py-3 space-x-2 text-shark-500 transition duration-200 ease-in-out hover:bg-green-500 hover:text-white dark:hover:text-shark-300 dark:text-shark-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5"
                                            viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z"
                                                clipRule="evenodd" />
                                        </svg>
                                        <a href="#_" className="text-sm font-medium tracking-tight">
                                            Account</a>
                                    </li>
                                    <li
                                        className="flex items-center px-4 py-3 space-x-2 text-shark-500 transition duration-200 ease-in-out hover:bg-green-500 hover:text-white dark:hover:text-shark-300 dark:text-shark-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5"
                                            viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                                                clipRule="evenodd" />
                                        </svg>
                                        <a href="#_" className="text-sm tracking-tight ">
                                            Settings</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar
