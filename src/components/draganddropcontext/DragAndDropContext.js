import { DragDropContext } from 'react-beautiful-dnd';
import DroppableColumn from '../droppableColumn/DroppableColumn';
export default function DragAndDropColumn({data}){
    return(
    <DragDropContext>
        <DroppableColumn data={data}/>
    </DragDropContext>)
}
