import { licenseOptions } from "../../Globals"
export default function License({ selectedLicense, setSelectedLicense }){
    return (
        <div class="bg-white rounded-lg mb-2">
        <div class="container px-6 py-8 mx-auto">
            <div class="flex flex-col items-center justify-center space-y-8 lg:-mx-4 lg:flex-row lg:items-stretch lg:space-y-0">
            { licenseOptions.map(license => 
                <div class="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border-2 border-gray-200 rounded-lg lg:mx-4 dark:bg-gray-900 dark:border-gray-700">
                    <div class="flex-shrink-0">
                        <h2 class="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-blue-400 uppercase rounded-lg bg-gray-50 dark:bg-gray-700">
                            { license.name }
                        </h2>
                    </div>

                    <div class="flex-shrink-0">
                        <span class="pt-2 text-4xl font-bold text-gray-800 uppercase dark:text-gray-100">
                            { license.price }
                        </span>
                    </div>
                    <ul class="flex-1 space-y-4">
                        { license.benefits.map(benefit => 
                        <li class="text-gray-500 dark:text-gray-400">
                            { benefit }
                        </li>)}
                    </ul>
                    { selectedLicense ?
                    <button type="button" class={`inline-flex items-center justify-center px-4 py-1 font-medium text-white uppercase transition-colors ${selectedLicense.name === license.name ?  "bg-bright-turquoise-600 rounded-lg hover:bg-bright-turquoise-800" : "bg-blue-500 rounded-lg hover:bg-blue-700" } focus:outline-none`} onClick={ ()=>setSelectedLicense(license) }>
                        { selectedLicense.name === license.name ? "Selected": "Select" }
                    </button>:
                    <button type="button" class={`inline-flex items-center justify-center px-4 py-1 font-medium text-white uppercase transition-colors bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none`} onClick={ ()=>setSelectedLicense(license) }>
                    Select
                    </button>}
                </div>
            )}
            </div>
        </div>
    </div>
    )
}