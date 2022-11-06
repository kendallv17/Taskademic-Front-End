import Board from "../../components/board/Board";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useEffect, useState } from "react";
export default function CurrentTasks({SupabaseClient}){
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
                <></>:
                <Board className="space-y-4 md:space-y-6 sm:p-8 border-2 px-4" SupabaseClient={ SupabaseClient }/>
            }
        </div>
    </div>
    )
}