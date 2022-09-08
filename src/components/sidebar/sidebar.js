import React, { useState } from "react"
export default function Sidebar(){
    const [hidden, setHidden] = useState(false)
    return (
        <aside className="w-64" aria-label="Sidebar">
            <div className="relative">
                <button type="button" className="absolute top-0 -right-0 text-mercury-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
            </div>
            <div className="overflow-y-auto min-h-full py-4 px-3 bg-blue-dark">
                <ul className="space-y-2">
                    <li className="border-b border-mercury-600">
                        <a href="/" className="flex items-center py-4 text-base text-center font-normal text-mercury-600">
                            <span className="self-center text-xl flex-auto font-semibold dark:text-white">Taskademic Board</span>
                        </a>
                    </li>
                    <li className="border-b border-mercury-600">
                        <a href="#" className="flex items-center py-2 text-base text-center font-normal text-mercury-600 rounded-lg hover:bg-bright-turquoise-700">
                        <span className="ml-3">Manage my tasks on the current period</span>
                        </a>
                    </li>
                    <li className="border-b border-mercury-600">
                        <a href="#" className="flex items-center py-2 text-base text-center font-normal text-mercury-600 rounded-lg hover:bg-bright-turquoise-700">
                        <span className="flex-1 ml-3 whitespace-nowrap">Create new college period</span>
                        </a>
                    </li>
                    <li className="border-b border-mercury-600">
                        <a href="#" className="flex items-center py-2 text-base text-center font-normal text-mercury-600 rounded-lg hover:bg-bright-turquoise-700">
                        <span className="flex-1 ml-3 whitespace-nowrap">Check past college periods</span>
                        </a>
                    </li>
                    <li className="border-b border-mercury-600">
                        <a href="#" className="flex items-center py-2 text-base text-center font-normal text-mercury-600 rounded-lg hover:bg-bright-turquoise-700">
                        <span className="flex-1 ml-3 whitespace-nowrap">Manage my account</span>
                        </a>
                    </li>
                    <li className="border-b border-mercury-600">
                        <a href="#" className="flex items-center py-2 text-base text-center font-normal text-mercury-600 rounded-lg hover:bg-bright-turquoise-700">
                        <span className="flex-1 ml-3 whitespace-nowrap">About</span>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    )
}