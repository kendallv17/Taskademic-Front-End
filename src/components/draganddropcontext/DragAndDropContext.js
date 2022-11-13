import { DragDropContext } from 'react-beautiful-dnd';
import DroppableColumn from '../droppableColumn/DroppableColumn';
import { updateTaskStatus, deleteTask } from '../../services/TaskService'
import { Store } from 'react-notifications-component';
import NotificationBuilder from '../../utils/NotificationBuilder';
export default function DragAndDropContext({columData, setData, SupabaseClient}){
    const onDragEnd = async(result) => {
        const { source, destination, draggableId } = result;
        if (!destination || (destination.droppableId === source.droppableId && destination.index === source.index)) return
        else {
            const sourceCol = columData[source.droppableId]
            const destinationCol = columData[destination.droppableId]
            let newSourceTasks = Array.from(sourceCol.tasks)
            if (sourceCol === destinationCol){ //Misma columna
                newSourceTasks.splice(source.index, 1)
                newSourceTasks.splice(destination.index, 0, Number(draggableId))
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
                newDestinationTasks.splice(destination.index, 0, Number(draggableId))
                setData({
                    ...columData,
                    [source.droppableId]: {
                        ...sourceCol,
                        'tasks': newSourceTasks
                    },
                    [destination.droppableId]: {
                        ...destinationCol,
                        'tasks': newDestinationTasks

                    }
                })
            }
            await updateTaskStatus(SupabaseClient, draggableId, destination.droppableId)
            Store.addNotification(NotificationBuilder("Task status updated", '', 'warning'));
        }
    }
    const deleteTaskHandler = async(id, colId) => {
        try{
            let newTaskArray = Array.from(columData.tasks)
            let newColumnTasks = Array.from(columData[colId].tasks);
            await deleteTask(SupabaseClient, id)
            setData({
                ...columData,
                tasks: newTaskArray.filter(({task_id}) => task_id !== id),
                [colId]: {
                    columnId:colId,
                    tasks: newColumnTasks.filter(task_id => task_id !== id)
                }
            })
            Store.addNotification(NotificationBuilder("Task deleted", "Your task has been deleted", 'default'));
        } catch(error) {
            Store.addNotification(NotificationBuilder("An error has occurred", error.message, 'danger'));
        }
    }

    return(
    <DragDropContext onDragEnd={ onDragEnd }>
        <div className="sm:grid md:flex justify-center pt-5">
                <DroppableColumn data={ columData['todo'].tasks.map( taskId => columData.tasks.find( ({ task_id }) => task_id === taskId)) } id={ columData.todo.columnId } deleteTaskHandler={ deleteTaskHandler } tittle="To Do"/>
                <DroppableColumn data={ columData['inProgress'].tasks.map( taskId => columData.tasks.find( ({ task_id }) => task_id === taskId)) } id={ columData.inProgress.columnId  } deleteTaskHandler={ deleteTaskHandler } tittle="In Progress"/>
                <DroppableColumn data={ columData['reviewing'].tasks.map( taskId => columData.tasks.find( ({ task_id }) => task_id === taskId)) } id={ columData.reviewing.columnId  } deleteTaskHandler={ deleteTaskHandler } tittle="Reviewing"/>
                <DroppableColumn data={ columData['done'].tasks.map( taskId => columData.tasks.find( ({ task_id }) => task_id === taskId)) } id={ columData.done.columnId  } deleteTaskHandler={ deleteTaskHandler } tittle="Done"/>
        </div>
    </DragDropContext>)
}
