import { DragDropContext } from 'react-beautiful-dnd';
import DroppableColumn from '../droppableColumn/DroppableColumn';
export default function DragAndDropContext({columData, setData}){
    const onDragEnd = result => {
        const { source, destination, draggableId } = result;
        if (!destination || (destination.droppableId === source.droppableId && destination.index === source.index)) return
        else {
            const sourceCol = columData[source.droppableId]
            const destinationCol = columData[destination.droppableId]
            let newSourceTasks = Array.from(sourceCol.tasks)
            if (sourceCol === destinationCol){ //Misma columna
                newSourceTasks.splice(source.index, 1)
                newSourceTasks.splice(destination.index, 0, draggableId)
                setData({
                    ...columData,
                    [source.droppableId]: {
                        ...sourceCol, 
                        'tasks': newSourceTasks
                    }
                })
            } else {//Diferente columna
                let newDestinationTasks = Array.from(destinationCol.tasks)
                newSourceTasks.splice(source.index, 1)
                newDestinationTasks.splice(destination.index, 0, draggableId)

                setData({
                    ...columData,
                    [source.droppableId]: {
                        ...sourceCol,
                        'tasks': newSourceTasks
                    },
                    [destination.droppableId]: {
                        ...destinationCol,
                        'tasks':newDestinationTasks

                    }
                })
            }
        }
    } 

    return(
    <DragDropContext onDragEnd={ onDragEnd }>
        <div className="sm:grid md:flex justify-center pt-5">
                <DroppableColumn data={ columData['todo'].tasks.map( taskId => columData.tasks.find( ({ id }) => id === taskId)) } id={ columData.todo.columnId } tittle="To Do"/>
                <DroppableColumn data={ columData['inProgress'].tasks.map( taskId => columData.tasks.find( ({ id }) => id === taskId)) } id={ columData.inProgress.columnId  } tittle="In Progress"/>
                <DroppableColumn data={ columData['reviewing'].tasks.map( taskId => columData.tasks.find( ({ id }) => id === taskId)) } id={ columData.reviewing.columnId  } tittle="Reviewing"/>
                <DroppableColumn data={ columData['done'].tasks.map( taskId => columData.tasks.find( ({ id }) => id === taskId)) } id={ columData.done.columnId  } tittle="Done"/>
        </div>
    </DragDropContext>)
}
