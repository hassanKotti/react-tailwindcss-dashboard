import React from 'react'

const GreetingCard = () => {
    return (
        <div className="relative p-4 mb-8 overflow-hidden bg-green-200 dark:bg-green-500 rounded-sm sm:p-6">
        <div className="absolute top-0 right-0 hidden mr-16 -mt-4 pointer-events-none xl:block"
            aria-hidden="true">
            <svg width="319" height="198" xmlnsXlink="http://www.w3.org/1999/xlink">
                <defs>
                    <path id="welcome-a" d="M64 0l64 128-64-20-64 20z"></path>
                    <path id="welcome-e" d="M40 0l40 80-40-12.5L0 80z"></path>
                    <path id="welcome-g" d="M40 0l40 80-40-12.5L0 80z"></path>
                    <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="welcome-b">
                        <stop stopColor="#4ade80" offset="0%"></stop>
                        <stop stopColor="#3b82f6" offset="100%"></stop>
                    </linearGradient>
                    <linearGradient x1="50%" y1="24.537%" x2="50%" y2="100%" id="welcome-c">
                        <stop stopColor="#3b82f6" offset="0%"></stop>
                        <stop stopColor="#4ade80" stopOpacity="0" offset="100%"></stop>
                    </linearGradient>
                </defs>
                <g fill="none" fillRule="evenodd">
                    <g transform="rotate(64 36.592 105.604)">
                        <mask id="welcome-d" fill="#fff">
                            <use xlinkHref="#welcome-a"></use>
                        </mask>
                        <use fill="url(#welcome-b)" xlinkHref="#welcome-a"></use>
                        <path fill="url(#welcome-c)" mask="url(#welcome-d)" d="M64-24h80v152H64z">
                        </path>
                    </g>
                    <g transform="rotate(-51 91.324 -105.372)">
                        <mask id="welcome-f" fill="#fff">
                            <use xlinkHref="#welcome-e"></use>
                        </mask>
                        <use fill="url(#welcome-b)" xlinkHref="#welcome-e"></use>
                        <path fill="url(#welcome-c)" mask="url(#welcome-f)"
                            d="M40.333-15.147h50v95h-50z">
                        </path>
                    </g>
                    <g transform="rotate(44 61.546 392.623)">
                        <mask id="welcome-h" fill="#fff">
                            <use xlinkHref="#welcome-g"></use>
                        </mask>
                        <use fill="url(#welcome-b)" xlinkHref="#welcome-g"></use>
                        <path fill="url(#welcome-c)" mask="url(#welcome-h)"
                            d="M40.333-15.147h50v95h-50z">
                        </path>
                    </g>
                </g>
            </svg>
        </div>
        <div className="relative">
            <h1 className="mb-1 text-2xl font-bold text-shark-800 md:text-3xl">
                Good afternoon, Acme Inc. 👋
            </h1>
            <p className="text-sm font-medium">Here is what’s happening with your projects today:</p>
        </div>
    </div>
    )
}

export default GreetingCard
