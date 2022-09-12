import React, { useState } from "react"
import SidebarItem from "../sidebarItem/SidebarItem"
export default function Sidebar(){
    const [hidden, setHidden] = useState(false)
    return (
        <aside className="w-64" aria-label="Sidebar">
            <div className="overflow-y-auto min-h-full py-4 px-3 bg-blue-dark relative">
                <ul className="space-y-2">
                    <li className="border-b border-mercury-600">
                        <a href="/" className="flex items-center py-4 text-base text-center font-normal text-mercury-600">
                            <span className="self-center text-xl flex-auto font-semibold dark:text-white">Taskademic Board</span>
                        </a>
                    </li>
                    <SidebarItem href={"/"} text={ "Manage my tasks on the current period" }/>
                    <SidebarItem href={"/"} text={ "Create new college period" }/>
                    <SidebarItem href={"/"} text={ "Check past college periods" }/>
                    <SidebarItem href={"/"} text={ "Manage my account" }/>
                    <SidebarItem href={"/"} text={ "About" }/>
                    <li className="absolute bottom-2 right-0 text-mercury-600 border-t border-mercury-600 flex-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                        </svg>
                    </li>
                </ul>
            </div>
        </aside>
    )
}