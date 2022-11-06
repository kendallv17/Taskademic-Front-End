import { Draggable } from "react-beautiful-dnd"
export default function ColumnItem({id, index, tittle, course}){
    return (
    <Draggable draggableId={`${id}`} index={index} key={id}>
        {
            (provided, snapshot) => 
                <div className={`p-6 mx-2 bg-mercury-500 rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 my-2 ${snapshot.isDragging ? 'bg-radical-red-700 text-mercury-500': null}`}
                     { ...provided.draggableProps }
                     { ...provided.dragHandleProps } 
                     ref={ provided.innerRef }
                    >
                        <h6 className="mb-2 sm:text-[14px] md:text-[18px] font-bold tracking-tight text- dark:text-white">{tittle}</h6>
                        <p className="font-normal sm:text-[12px] md:text-[18-px]">{course}</p>
                </div>
        }
    </Draggable>
    )
}