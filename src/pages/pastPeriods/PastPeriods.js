import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useEffect, useState } from "react";
import { fetchAllPeriods } from "../../services/PeriodService"
import { Store } from "react-notifications-component";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";
import NotificationBuilder from "../../utils/NotificationBuilder";
import { readSession } from "../../utils/SessionManager";
export default function PastPeriods({ SupabaseClient }){
    const [loading, setLoading] = useState(true)
    const [periodsData, setPeriodsData] = useState()
    useEffect(()=>{
        const fetchPeriodsdata = async() => {
            try{
                const data = await fetchAllPeriods(SupabaseClient, readSession().user.id);
                setPeriodsData(data)
                setLoading(false)
            } catch(error) {
                Store.addNotification(NotificationBuilder("An error has occurred", error.message, 'danger'));
            }
        }
        fetchPeriodsdata();
    }, [])
    const [hidden, setHidden] = useState(true)
    function getWindowSize() {
        const {innerWidth, innerHeight} = window;
        return {innerWidth, innerHeight};
    }
    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
      function handleWindowResize() {
        setWindowSize(getWindowSize());
      }
  
      window.addEventListener('resize', handleWindowResize);
  
      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    }, []);
    return (
        (!loading) ? 
    <div className="flex h-fit">
        <Sidebar hidden={ hidden }></Sidebar>
        <div className="flex-auto flex-col h-full">
            <Navbar hidden={ hidden } setHidden={ setHidden }/>
            {windowSize.innerWidth < 768 && !hidden ?    
                <></>:
                <div className="w-full rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl">
                    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="py-3 px-6">
                                            Semester description
                                        </th>
                                        <th scope="col" className="py-3 px-6">
                                            Status
                                        </th>
                                        <th scope="col" className="py-3 px-6">
                                            Start Date
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { periodsData.map((period, idx) => 
                                        <tr key={idx} className="border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-radical-red-400 hover:text-white">
                                            <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap">
                                                { period.period_description }
                                            </th>
                                            <td className="py-4 px-6">
                                                { period.is_active ? "Active" : "Archive" }
                                            </td>
                                            <td className="py-4 px-6">
                                                { period.start_date }
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                </div>
            }
        </div>
    </div> :
    <div className="pt-10"><LoadingSpinner/></div>
    )
}