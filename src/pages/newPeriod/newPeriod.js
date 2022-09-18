import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Input from "../../components/input/Input"
import { useState, useEffect } from "react"
export default function NewPeriod(){
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
        <div className="flex h-fit">
            <Sidebar hidden={ hidden }></Sidebar>
            <div className="flex-auto flex-col h-full">
                <Navbar hidden={ hidden } setHidden={ setHidden }/>
                {windowSize.innerWidth < 768 && !hidden ?    
                    null:
                    <div className={`p-6 space-y-4 md:space-y-6 sm:p-8 max-h-fit`}>
                        <form method="POST" className="bg-blue-dark px-4 ">
                            <Input type="date" identifier="Date range" tittle="Period start and end date" required={true}/>
                            <Input type="text" identifier="period-name" tittle="Period description" placeholder="e.g. 2nd Semester" required={true}/>
                            <div className="flex py-10">
                                <a type="button" href="/login" className="flex-1 mr-2 text-mercury-600 bg-radical-red-800 hover:bg-radical-red-600 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cancel</a>
                                <button type="submit" className="flex-1 text-mercury-600 bg-bright-turquoise-700 hover:bg-bright-turquoise-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign up</button>
                            </div>
                        </form>
                    </div>
                }
            </div>
        </div>
    ) 
}