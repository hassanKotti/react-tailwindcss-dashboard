import React from 'react'

const Footer = () => {
  return (
    <footer className="relative bottom-0 bg-white text-shark-700 dark:text-shark-200 dark:bg-shark-800 body-font hero">
      <div className="container flex flex-col items-center px-8 py-8 mx-auto max-w-7xl sm:flex-row ">
        <a
          href="/"
          className="text-xl font-black leading-none select-none text-shark-400 hover:text-shark-500 "
        >
          <button className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 mr-2 text-shark-500 dark:text-shark-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
            </svg>
            <span className="hidden ml-2 text-lg font-bold uppercase lg:block text-shark-500 dark:text-shark-400">HK Dashbord</span>
          </button>
        </a>
        <span className="inline-flex justify-center mt-4 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start">

          <p className="mt-4 text-sm text-shark-500 sm:mr-2 sm:pr-4 sm:border-r sm:border-shark-200 sm:mt-0 dark:text-shark-400 dark:border-shark-400">
            © {new Date().getFullYear()} HK Dashbord  All rights reserved. Made with
            love by{' '} Hassan Kotti
          </p>
        </span>
        <p className="mt-4 text-sm text-shark-500 sm:ml-2 sm:pl-2 sm:mt-0 dark:text-shark-400">
          MIT License
        </p>
      </div>
    </footer>
  )
}

export default Footer
