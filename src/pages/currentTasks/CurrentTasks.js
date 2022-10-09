import DragAndDropColumn from "../../components/draganddropcontext/DragAndDropContext"
export default function CurrentTasks(){
    const data = [
        {id:"1", tittle:"Task 01", description:"Do a flip 1"},
        {id:"2", tittle:"Task 02", description:"Do a flip 2"},
        {id:"3", tittle:"Task 03", description:"Do a flip 3"},
        {id:"4", tittle:"Task 04", description:"Do a flip 4"},
        {id:"5", tittle:"Task 05", description:"Do a flip 5"},
        {id:"6", tittle:"Task 06", description:"Do a flip 6"}
    ]
    return (
        <DragAndDropColumn data={data}>
        </DragAndDropColumn>
    )
}