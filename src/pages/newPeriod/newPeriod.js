import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Input from "../../components/input/Input"
import CoursesTable from "../../components/coursesTable/CoursesTable"
import { createPeriod, createCourses, fetchCurrentPeriod, deactivatePeriod } from "../../services/PeriodService"
import { readSession } from "../../utils/SessionManager"
import { useState, useEffect } from "react"
import { Store } from "react-notifications-component"
import NotificationBuilder from "../../utils/NotificationBuilder"
import GetWindowSize from "../../utils/GetWindowSize"
export default function NewPeriod( { SupabaseClient } ){
    const [hidden, setHidden] = useState(true)
    const [windowSize, setWindowSize] = useState(GetWindowSize());
    const [courses, setCourses] = useState([])
    const [datesValues, setDatesValues] = useState([new Date(), new Date()]);

    const [currentPeriod, setCurrentPeriod] = useState(async()=> {
        try{
            const data = await fetchCurrentPeriod(SupabaseClient, readSession().user.id);
            setCurrentPeriod(data[0])
            return data[0];
        }catch(error) {
            Store.addNotification(NotificationBuilder("An error has occurred", error.message, 'danger'));
            return null;
        }
    })

    useEffect(() => {
      function handleWindowResize() {
        setWindowSize(GetWindowSize());
      }
      window.addEventListener('resize', handleWindowResize);
  
      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    }, []);
    const handleNewPeriodSubmit = async(event) => {
        try{
            event.preventDefault();
            if (courses.length < 1) throw new Error("No courses were added to the period, please add some");
            let periodDetails = {
                period_description: event.target.period_desc.value,
                start_date: datesValues[0].toISOString().slice(0, 10),
                end_date: datesValues[1].toISOString().slice(0, 10),
                owner: readSession().user.id
            };
            if(currentPeriod == null){
                let newPeriodId = await createPeriod( SupabaseClient,periodDetails);
                let coursesData = courses.map( ({name, professor}) => ({Course_Name:name , Course_Professor:professor, Period_id:newPeriodId[0].id }) )
                await createCourses( SupabaseClient, coursesData );
            } else if( window.confirm("You have an active semester, do you want to overwrite it?") === true){
                await deactivatePeriod( SupabaseClient, currentPeriod.id)
                let newPeriodId = await createPeriod( SupabaseClient,periodDetails);
                let coursesData = courses.map( ({name, professor}) => ({Course_Name:name , Course_Professor:professor, Period_id:newPeriodId[0].id }) )
                await createCourses( SupabaseClient, coursesData );
            }
            alert('Your semester was registered successfully')
        } catch(error) {
            alert(error)
        }
    }
    return (
        <div className="flex h-fit">
            <Sidebar hidden={ hidden }></Sidebar>
            <div className="flex-auto flex-col h-full">
                <Navbar hidden={ hidden } setHidden={ setHidden }/>
                {windowSize.innerWidth < 768 && !hidden ?    
                    <></>:
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8 border-2 px-4">
                        <div className="bg-blue-dark px-3 rounded-lg">
                            <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-xl text-radical-red-500 py-5"> Please fill all the necesary information</h2>
                            <CoursesTable courses={ courses } setCourses={setCourses}/>
                            <form className="pt-2" onSubmit={ handleNewPeriodSubmit }>
                                <Input type="date" identifier="date_range" tittle="Period start and end date" value={ datesValues } onChange={ setDatesValues }  required={true}/>
                                <Input type="text" identifier="period_desc" tittle="Period description" placeholder="e.g. 2nd Semester" required={true}/>
                                <div className="flex py-10">
                                    <a type="button" href="/" className="flex-1 mr-2 text-mercury-600 bg-radical-red-800 hover:bg-radical-red-600 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cancel</a>
                                    <button type="submit" className="flex-1 text-mercury-600 bg-bright-turquoise-700 hover:bg-bright-turquoise-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create the new semester</button>
                                </div>
                            </form>
                        </div>
                    </div>
                }
            </div>
        </div>
    ) 
}