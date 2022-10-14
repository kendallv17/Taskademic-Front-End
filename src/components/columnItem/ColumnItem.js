import { Draggable } from "react-beautiful-dnd"
export default function ColumnItem({id, index, tittle, description}){
    return (
    <Draggable draggableId={id} index={index}>
        {
            provided => 
                <div className="block p-6 mx-2 bg-mercury-500 rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 my-2" 
                     { ...provided.draggableProps }
                     { ...provided.dragHandleProps } 
                     ref={ provided.innerRef }
                    >
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{tittle}</h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">{description}</p>
                </div>
        }
    </Draggable>
    )
}