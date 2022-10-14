import { DragDropContext } from 'react-beautiful-dnd';
import DroppableColumn from '../droppableColumn/DroppableColumn';
export default function DragAndDropContext({columData}){
    const onDragEnd = result => {
        const { source, destination, draggableId } = result;
        if (!destination || (destination.droppableId === source.droppableId && destination.index === source.index)) return
        else {
            const column = columData[source.droppableId]
            let newTasks = Array.from(column.tasks)
            newTasks.splice(source.index, 1)
            newTasks.splice(destination.index, 0, draggableId)
            
            const newColumn = {
                ...column,
                tasks: newTasks
            }
            
            //console.table(newTasksColumn)
        }
    } 

    return(
    <DragDropContext onDragEnd={ onDragEnd }>
        <div className="flex justify-center h-auto">
                <DroppableColumn data={ columData.todoData.tasks } id={ columData.todoData.columnId } tittle="To Do"/>
                <DroppableColumn data={ columData.inProgressData.tasks } id={ columData.inProgressData.columnId  } tittle="In Progress"/>
                <DroppableColumn data={ columData.reviewingData.tasks } id={ columData.reviewingData.columnId  } tittle="Reviewing"/>
                <DroppableColumn data={ columData.doneData.tasks } id={ columData.doneData.columnId  } tittle="Done"/>
        </div>
    </DragDropContext>)
}
