import React from 'react'

const Alert = () => {
    return (
        <div x-show="selectedRows.length" class="bg-green-200 relative top-0 left-0 right-0 z-40 w-full shadow rounded-md mb-3">
            <div class="container mx-auto px-4 py-4">
                <div class="flex md:items-center">
                    <div class="mr-4 flex-shrink-0">
                        <svg class="h-8 w-8 text-green-600" viewBox="0 0 20 20" fill="currentColor">  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" /></svg>
                    </div>
                    <div x-html="selectedRows.length + ' rows are selected'" class="text-teal-800 text-lg"></div>
                </div>
            </div>
        </div>
    )
}

export default Alert
