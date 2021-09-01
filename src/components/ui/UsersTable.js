import React from 'react'
import { users, TableHeading } from '../../data/UserData';
import { Icon } from '@iconify/react';


const UsersTable = () => {
    return (
        <div class="bg-white dark:bg-shark-500 mt-8 border border-shark-200 dark:border-shark-600 rounded-sm shadow-lg">
            <div className="py-6 px-4">
                <div class="mb-4 flex justify-between items-center w-full" >
                    <div className="flex items-center justify-start w-36">
                        <Icon className="fext-shark-700 dark:text-shark-400 stroke-current w-8 h-8" icon="tabler:table" />
                        <h2 className="text-shark-700 dark:text-shark-400 ">Users</h2>
                    </div>

                    <div class="">
                        <div class="relative">
                            <input type="search"
                                class=" pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 text-gray-600 font-medium"
                                placeholder="Search..." />
                            <div class="absolute top-0 left-0 inline-flex items-center p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-400" viewBox="0 0 24 24"
                                    stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <rect x="0" y="0" width="24" height="24" stroke="none"></rect>
                                    <circle cx="10" cy="10" r="7" />
                                    <line x1="21" y1="21" x2="15" y2="15" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="overflow-x-auto bg-white dark:bg-shark-500  overflow-y-auto relative"
                style={{ height: "405px" }}>
                <table class="border-collapse table-auto w-full whitespace-no-wrap bg-white dark:bg-shark-500 table-striped relative">
                    <thead>
                        <tr class="text-left">
                            <th class="py-2 px-3 sticky top-0 border-b border-gray-200 bg-gray-100 dark:bg-shark-400">
                                <label
                                    class="text-teal-500 inline-flex justify-between items-center bg-opacity-50 hover:bg-shark-300 px-2 py-2 rounded-lg cursor-pointer">
                                    <input type="checkbox" class="form-checkbox rounded-lg focus:outline-none focus:ring-4 focus:ring-shark-400 focus:ring-opacity-50" />
                                </label>
                            </th >
                            {TableHeading.map((item) => {
                                return (
                                    <th
                                        class="bg-gray-100 dark:bg-shark-400 sticky top-0 border-b dark:text-shark-200 border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs"
                                    > {item}</th>
                                );
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => {
                            return (
                                <tr>
                                    <td class=" border-t border-gray-200 px-3">
                                        <label
                                            class="text-teal-500 inline-flex justify-between items-center  bg-opacity-50 hover:bg-shark-200 px-2 py-2 rounded-lg cursor-pointer">
                                            <input type="checkbox" class="form-checkbox rounded-lg rowCheckbox focus:outline-none focus:ring-4 focus:ring-shark-300 focus:ring-opacity-50" />
                                        </label>
                                    </td>
                                    <td class="border-t border-gray-200 userId">
                                        <span class="text-gray-700 px-6 py-3 flex items-center" >{user.userId}</span>
                                    </td>
                                    <td class="border-t border-gray-200 firstName">
                                        <span class="text-gray-700 px-6 py-3 flex items-center" >{user.firstName}</span>
                                    </td>
                                    <td class="border-t border-gray-200 lastName">
                                        <span class="text-gray-700 px-6 py-3 flex items-center" >{user.lastName}</span>
                                    </td>
                                    <td class="border-t border-gray-200 emailAddress">
                                        <span class="text-gray-700 px-6 py-3 flex items-center"
                                        >{user.emailAddress}</span>
                                    </td>
                                    <td class="border-t border-gray-200 gender">
                                        <span class="text-gray-700 px-6 py-3 flex items-center"
                                        >{user.gender}</span>
                                    </td>
                                    <td class="border-t border-gray-200 phoneNumber">
                                        <span class="text-gray-700 px-6 py-3 flex items-center"
                                        >{user.phoneNumber}</span>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UsersTable
