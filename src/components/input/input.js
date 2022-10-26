import React from "react";
import BasicDateRangePicker from "../../components/daterangepicker/DateRangePicker"
export default function Input({type, identifier, tittle, placeholder, required, value, onChange}){
    return (
        <>
            <label htmlFor={ identifier } className="block mb-2 text-base font-medium text-mercury-600 dark:text-gray-300">{ tittle } {required ? <s className="text-radical-red-600">*</s> : null}</label>
            { type==="date" ? 
            <BasicDateRangePicker required={required} value={ value } onChange={ onChange }/>
            : <input type={ type } id={ identifier } className="shadow-sm bg-blue-dark border border-mercury-600 text-mercury-600 text-base rounded-lg focus:ring-bright-turquoise-400 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder={ placeholder } required={ required }/>
            }
        </>
    )
}