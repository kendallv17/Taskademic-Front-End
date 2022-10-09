import { Droppable } from "react-beautiful-dnd"
import ColumnItem from "../columnItem/ColumnItem"
export default function DroppableColumn({data}){
    return (
        <div>
            <Droppable droppableId={"Oscar"}>
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