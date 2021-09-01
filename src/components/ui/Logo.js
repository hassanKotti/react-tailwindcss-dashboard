import React from 'react'

const Logo = ({ setShow }) => {
    return (
        <div className="border-b dark:border-shark-600 py-2 mb-10">
            <div className="flex items-center justify-between space-x-2 p-3">
                <button
                    onClick={() => setShow(false)}
                    className=" text-shark-700 hover:text-shark-400 lg:hidden dark:text-shark-400" 
                    aria-controls="sidebar"
                    aria-expanded="true"
                    id="close_sidebar"
                >
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z"></path>
                    </svg>
                </button>

                <button className="flex justify-center items-center ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-10 h-10 text-shark-500 mr-2 dark:text-shark-300"
                        fill="none"
                        viewBox="0 0 24 24"

                    >
                        <defs>
                            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#4ade80" />
                                <stop offset="100%" stopColor="#3b82f6" />
                            </linearGradient>
                        </defs>
                        <path stroke="url(#grad1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                    </svg>
                    <span className="ml-2 hidden lg:block text-shark-500 font-mono text-2xl dark:text-shark-300 uppercase">
                        <span className="bg-clip-text text-transparent font-bold font-sans bg-gradient-to-r from-green-400 to-blue-500">HK </span>
                        Dashbord</span>
                </button>
            </div>
        </div>
    )
}

export default Logo
