import React from 'react'
import Crazy from '../components/charts/Crazy'
import DoughnutChart from '../components/charts/DoughnutChart'
import LineChart from '../components/charts/LineChart'
import GreetingCard from '../components/ui/GreetingCard'
import StatCard from '../components/ui/StatCard'
import UsersTable from '../components/ui/UsersTable'

const Home = () => {
    return (
        <>
            <GreetingCard />
            <div class="flex-wrap items-center justify-between mb-8 -ml-px -space-x-3 sm:flex sm:mb-0">
                <div class="flex items-center justify-center pl-5 mt-3 -ml-px -space-x-3">
                    <img class="w-10 h-10 rounded-full"
                        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=3&w=144&h=144"
                        alt="" />
                    <img class="w-10 h-10 rounded-full"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=3&w=144&h=144"
                        alt="" />
                    <img class="w-10 h-10 rounded-full"
                        src="https://images.unsplash.com/photo-1623330188314-8f4645626731?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGF2YXRhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.2&w=144&h=144"
                        alt="" />
                    <img class="w-10 h-10 rounded-full"
                        src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=144&h=144"
                        alt="" />
                    <button
                        class="flex items-center justify-center w-10 h-10 rounded-full shadow-md bg-shark-50 dark:bg-shark-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 dark:text-shark-300 text-blue-500"
                            viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
                <div class="flex items-center justify-around mt-6 space-x-2 sm:mt-3">
                    <button
                        class="px-3 py-3 bg-white  border-shark-200 rounded-md hover:border-shark-300 hover:text-shark-600 dark:bg-shark-500 border dark:border-shark-600">
                        <svg class="w-4 h-4 text-shark-500 dark:text-shark-300" viewBox="0 0 16 16">
                            <path fill="currentColor"
                                d="M9 15H7a1 1 0 010-2h2a1 1 0 010 2zM11 11H5a1 1 0 010-2h6a1 1 0 010 2zM13 7H3a1 1 0 010-2h10a1 1 0 010 2zM15 3H1a1 1 0 010-2h14a1 1 0 010 2z">
                            </path>
                        </svg>
                    </button>

                    <div
                        class="flex items-center justify-between px-3 py-2 space-x-2 bg-white dark:bg-shark-500 border dark:border-shark-600 border-shark-300 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-shark-500 dark:text-shark-300" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2"
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span
                            class="hidden text-xs font-medium text-shark-500 truncate leading-3-tight xs:block">
                            Jul 21, 2021 - Jul 27, 2021
                        </span>
                    </div>

                    <button
                        class="flex items-center px-3 py-3 text-white bg-green-500 rounded-md hover:bg-green-600"
                        style={{ outline: 'none' }}>
                        <svg class="flex-shrink-0 w-4 h-4 opacity-50 fill-current" viewBox="0 0 16 16">
                            <path
                                d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z">
                            </path>
                        </svg>
                        <span
                            class="hidden ml-2 font-medium truncate overflow-clip xs:block text-md xs:text-xs">Add
                            view</span>
                    </button>

                </div>
            </div>
            <div class="grid grid-cols-12 gap-6 mt-6">
                <StatCard>
                    <LineChart />
                </StatCard>
                <StatCard>
                    <Crazy />
                </StatCard>
                <StatCard>
                    <DoughnutChart />
                </StatCard>
            </div>
            <UsersTable />
        </>
    )
}

export default Home
