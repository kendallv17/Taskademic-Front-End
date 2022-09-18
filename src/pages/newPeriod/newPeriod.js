import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Input from "../../components/input/Input"
import { useState } from "react"
export default function NewPeriod(){
    const [hidden, setHidden] = useState(true)
    return (
        <div className="flex min-h-screen bg-mercury-500">
            <Sidebar hidden={ hidden } className="flex-auto"></Sidebar>
            <div className="h-fit flex-1 flex-col">
                <Navbar hidden={ hidden } setHidden={ setHidden }></Navbar>
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <form method="POST" className="space-y-4 md:space-y-6 bg-blue-dark px-4">
                        <div className="flex mb-3 pt-5 flex-col">
                            <Input type="date" identifier="Date range" tittle="Period start and end date" required={true}/>
                        </div>
                        <div className="mb-3">
                            <Input type="text" identifier="period-name" tittle="Period description" placeholder="e.g. 2nd Semester" required={true}/>
                        </div>
                        <div className="flex pb-10">
                            <a type="button" href="/login" className="flex-1 mr-2 text-mercury-600 bg-radical-red-800 hover:bg-radical-red-600 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cancel</a>
                            <button type="submit" className="flex-1 text-mercury-600 bg-bright-turquoise-700 hover:bg-bright-turquoise-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}