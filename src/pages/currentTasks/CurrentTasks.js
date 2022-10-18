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
                {id:"1", tittle:"Task 01", course:"Informatica y Suciedad"},
                {id:"2", tittle:"Task 02", course:"Informatica y Suciedad"}
            ]
        },
        "inProgressData":{
            columnId: "inProgressData",
            tasks:[        
                {id:"3", tittle:"Task 03", course:"Robotica"},
                {id:"4", tittle:"Task 04", course:"PPS"}
            ]
        },
        "reviewingData":{
            columnId:"reviewingData",
            tasks:[
                {id:"5", tittle:"Task 05", course:"Gobierno electronico"}
            ]
        },
        "doneData":{
            columnId:"doneData",
            tasks:[
                {id:"6", tittle:"Task 06", course:"PPS"}
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
                <Board className="space-y-4 md:space-y-6 sm:p-8 border-2 px-4" data={data} setData={ setData }/>
            }
        </div>
    </div>
    )
}