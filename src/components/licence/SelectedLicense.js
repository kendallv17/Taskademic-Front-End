import { licenseOptions, licenseBenefits } from '../../Globals'
export default function SelectedLicense({ licenseName }){
    const userLicense = licenseOptions.find(license => license.name === licenseName)
    return (
        <div className="mt-2 space-y-0">
        <div className="max-w-sm mx-auto border rounded-lg md:mx-4 dark:border-gray-700">
            <div className="p-0">
                <h1 className="text-xl font-medium text-gray-700 capitalize lg:text-3xl dark:text-white text-center">{ userLicense.name } license</h1>
            </div>
            <hr className="border-gray-200 dark:border-gray-700"/>
            <div className="p-6">
                <h1 className="text-lg font-medium text-gray-700 capitalize lg:text-xl dark:text-white">What’s included:</h1>
                <div className="mt-8 space-y-4">
                { licenseBenefits.map((benefit, idx) => userLicense.benefits.includes(benefit) ? 
                    <div key={idx} className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="mx-4 text-gray-700 dark:text-gray-300">{ benefit }</span>
                    </div>:
                    <div key={idx} className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd" />
                        </svg>
                        <span className="mx-4 text-gray-700 dark:text-gray-300">{ benefit }</span>
                    </div>) 
                }
                </div>
            </div>
        </div>
    </div>
    )
}