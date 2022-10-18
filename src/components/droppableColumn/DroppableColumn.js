import { Droppable } from "react-beautiful-dnd"
import ColumnItem from "../columnItem/ColumnItem"
export default function DroppableColumn({id, data, tittle}){
    return (
        <div className="container max-w-xs mx-2 border rounded-lg flex-1 mb-2 sm:min-h-50">
            <h6 className="mb-4 ml-1 sm:text-[8px] md:text-[18px] font-bold tracking-tight text-gray-900 dark:text-white">{tittle}</h6>
            <Droppable droppableId={id}>
                {
                    provided => (
                    <div ref={ provided.innerRef } { ...provided.droppableProps }
                    >
                        { data.map( (task, idx) => ( <ColumnItem key={idx} id={task.id} index={idx} tittle={task.tittle} description={task.description}/>)) }
                        { provided.placeholder }
                    </div>)
                }
            </Droppable>
        </div>
    )
}