import { Draggable } from "react-beautiful-dnd"
export default function ColumnItem({id, index, tittle, description}){
    return (
    <Draggable draggableId={id} index={index} key={id}>
        {
            provided => 
                <div className="p-6 mx-2 bg-mercury-500 rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 my-2" 
                     { ...provided.draggableProps }
                     { ...provided.dragHandleProps } 
                     ref={ provided.innerRef }
                    >
                        <h6 className="mb-2 sm:text-[6px] md:text-[18px] font-bold tracking-tight text-gray-900 dark:text-white">{tittle}</h6>
                        <p className="font-normal sm:text-[4px] md:text-[18px]">{description}</p>
                </div>
        }
    </Draggable>
    )
}