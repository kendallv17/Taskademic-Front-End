import { Droppable } from "react-beautiful-dnd"
import ColumnItem from "../columnItem/ColumnItem"
export default function DroppableColumn({ id, data, tittle, deleteTaskHandler }){
    return (
        <Droppable droppableId={id}>
        {
            (provided, snapshot) => (
            <div ref={ provided.innerRef } { ...provided.droppableProps } className={ `container max-w-full px-2 md:mx-2 rounded-lg flex-1 mb-5 min-h-[10rem]  ${snapshot.isDraggingOver ? 'border-2 border-dotted border-bright-turquoise-600' : 'border border-blue-dark-600 border-dotted'}` }
            >
                <h6 className={ `mb-4 ml-1 sm:text-[8px] md:text-[18px] font-bold tracking-tight`}>{tittle}</h6>
                { data.map( (task, idx) => ( <ColumnItem key={idx} id={task.task_id} index={idx} tittle={task.tittle} course={task.course} colId={id} deleteTaskHandler={ deleteTaskHandler }/>)) }
                { provided.placeholder }
            </div>)
        }
    </Droppable>
    )
}