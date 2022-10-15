import Board from "../../components/board/Board";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useEffect, useState } from "react";
export default function CurrentTasks(){
    const [hidden, setHidden] = useState(true)
    const [data,setData] = useState({
        "todoData": {
            columnId: "todoData", 
            tasks:[
                {id:"1", tittle:"Task 01", description:"Do a flip 1"},
                {id:"2", tittle:"Task 02", description:"Do a flip 2"}
            ]
        },
        "inProgressData":{
            columnId: "inProgressData",
            tasks:[        
                {id:"3", tittle:"Task 03", description:"Do a flip 3"},
                {id:"4", tittle:"Task 04", description:"Do a flip 4"}
            ]
        },
        "reviewingData":{
            columnId:"reviewingData",
            tasks:[
                {id:"5", tittle:"Task 05", description:"Do a flip 5"}
            ]
        },
        "doneData":{
            columnId:"doneData",
            tasks:[
                {id:"6", tittle:"Task 06", description:"Do a flip 6"}
            ]
        }
    })
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
                <Board data={data} setData={ setData } className="p-6 space-y-4 md:space-y-6 sm:p-8 border-2 px-4"></Board>
            }
        </div>
    </div>
    )
}