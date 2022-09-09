import React from "react";
import { Link } from "react-router-dom";
export default function SidebarItem({href, text}){
    return (
        <li className="border-b border-mercury-600">
            <Link to={href} className="flex items-center py-2 text-base text-center font-normal text-mercury-600 rounded-lg hover:bg-bright-turquoise-700">
                <span className="self-center text-base flex-auto">{text}</span>
            </Link>
        </li>
    )
}