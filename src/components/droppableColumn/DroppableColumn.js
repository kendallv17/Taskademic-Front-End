import { Droppable } from "react-beautiful-dnd"
import ColumnItem from "../columnItem/ColumnItem"
export default function DroppableColumn({id, data, tittle}){
    return (
        <Droppable droppableId={id}>
        {
            (provided, snapshot) => (
            <div ref={ provided.innerRef } { ...provided.droppableProps } className={ `container max-w-full mx-2 rounded-lg flex-1 mb-2 min-h-[10rem] ${snapshot.isDraggingOver ? 'border-2 border-dotted border-bright-turquoise-600' : 'border-2'}` }
            >
                <h6 className="mb-4 ml-1 sm:text-[8px] md:text-[18px] font-bold tracking-tight text-gray-900 dark:text-white">{tittle}</h6>
                { data.map( (task, idx) => ( <ColumnItem key={idx} id={task.id} index={idx} tittle={task.tittle} course={task.course}/>)) }
                { provided.placeholder }
            </div>)
        }
    </Droppable>
    )
}