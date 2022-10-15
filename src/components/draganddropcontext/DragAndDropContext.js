import { useState } from 'react';
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
            if (sourceCol === destinationCol){
                const selectedItem = sourceCol.tasks.find( ({ id }) => id === draggableId)
                newSourceTasks.splice(source.index, 1)
                newSourceTasks.splice(destination.index, 0, selectedItem)

                setData({
                    ...columData,
                    [source.droppableId]: {
                        ...sourceCol,
                        'tasks': newSourceTasks
                    }
                })
            } else {
                let newDestinationTasks = Array.from(destinationCol.tasks)
                const selectedItem = sourceCol.tasks.find( ({ id }) => id === draggableId)
                newSourceTasks.splice(source.index, 1)
                newDestinationTasks.splice(destination.index, 0, selectedItem)

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
        <div className="flex justify-center h-auto">
                <DroppableColumn data={ columData.todoData.tasks } id={ columData.todoData.columnId } tittle="To Do"/>
                <DroppableColumn data={ columData.inProgressData.tasks } id={ columData.inProgressData.columnId  } tittle="In Progress"/>
                <DroppableColumn data={ columData.reviewingData.tasks } id={ columData.reviewingData.columnId  } tittle="Reviewing"/>
                <DroppableColumn data={ columData.doneData.tasks } id={ columData.doneData.columnId  } tittle="Done"/>
        </div>
    </DragDropContext>)
}
