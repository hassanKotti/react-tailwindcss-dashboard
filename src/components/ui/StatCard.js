import React from 'react'
import LineChart from '../charts/LineChart'

const StatCard = ({ children }) => {
    return (
        <div className="flex flex-col bg-white dark:bg-shark-600 border border-shark-200 dark:border-shark-600 rounded-sm shadow-lg col-span-full sm:col-span-6 xl:col-span-4">
            <div className="flex items-center justify-between px-5 py-3">
                <span>

                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                </span>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-shark-500 dark:text-shark-300" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2"
                            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                    </svg>
                </span>
            </div>

            <div className="px-5 py-3">
                <h2 className="mb-2 text-lg font-semibold text-shark-800 dark:text-shark-300">Acme Plus</h2>
                <div className="text-xs font-semibold text-shark-300 dark:text-shark-200 uppercase">sales</div>
                <div className="flex items-center mt-3 flex-start">
                    <span className="mr-2 text-4xl font-bold text-shark-800 dark:text-shark-100">$7,335</span>
                    <div className="px-2 py-1 text-sm font-semibold text-shark-100 bg-red-500 rounded-full">
                        -29%</div>
                </div>
            </div>
            <div>
              
                {children}
            </div>
        </div>

    )
}

export default StatCard
