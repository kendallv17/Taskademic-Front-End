import Board from "../../components/board/Board";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useEffect, useState } from "react";
export default function CurrentTasks(){
    const [hidden, setHidden] = useState(true)

    const [data,setData] = useState({
        "courses":[
            {id:"11", name:"Informatica y Suciedad"},
            {id:"22", name:"Robotica"},
            {id:"33", name:"PPS"},
            {id:"44", name:"Gobierno electronico"}
        ],
        "tasks":[
            {id:"1", tittle:"Task 01", course:"Informatica y Suciedad", status:"todo"},
            {id:"2", tittle:"Task 02", course:"Informatica y Suciedad", status:"todo"},
            {id:"3", tittle:"Task 03", course:"Robotica", status:"inProgress"},
            {id:"4", tittle:"Task 04", course:"PPS", status:"reviewing"},
            {id:"5", tittle:"Task 05", course:"Gobierno electronico", status:"reviewing"},
            {id:"6", tittle:"Task 06", course:"PPS", status:"done"}
        ],
        "todo": {
            columnId: "todo",
            tasks:[
                "1",
                "2"
            ]
        },
        "inProgress":{
            columnId: "inProgress",
            tasks:[        
                "3"
            ]
        },
        "reviewing":{
            columnId:"reviewing",
            tasks:[
                "4",
                "5"
            ]
        },
        "done":{
            columnId:"done",
            tasks:[
                "6"
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