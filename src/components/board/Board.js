import DragAndDropContext from "../draganddropcontext/DragAndDropContext"

export default function Board({data}){
    
    return (
        <DragAndDropContext columData={ data }/>
    )
}