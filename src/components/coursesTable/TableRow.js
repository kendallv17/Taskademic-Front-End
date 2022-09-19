export default function TableRow({name, professor, action}){
    return (
        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <th scope="row" className="py-4 px-3 font-medium text-gray-900">
                {name}
            </th>
            <td className="py-4 px-3">
                {professor}
            </td>
            <td>
                <div className="container" onClick={ action }>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
            </td>
        </tr>
    )
}