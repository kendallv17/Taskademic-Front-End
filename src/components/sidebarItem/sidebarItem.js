import React from "react";
import { Link } from "react-router-dom";
export default function SidebarItem({href, text, icon}){
    const uriLocation = window.location.pathname;
    console.log(uriLocation)
    return (
        <li className="border-b border-mercury-600">
            <Link to={href} className={`flex items-center py-2 text-base text-center font-normal rounded-lg hover:bg-bright-turquoise-700 ${ uriLocation === href ? 'bg-bright-turquoise-700' : null}`}>
                <div className="flex">
                    <span className="self-center text-base flex-auto text-mercury-600">{text}</span>
                    <div className="flex-1 absolute right-3 text-mercury-600">{icon}</div>
                </div>
            </Link>
        </li>
    )
}