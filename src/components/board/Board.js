import DragAndDropContext from "../draganddropcontext/DragAndDropContext"

export default function Board({data, setData}){
    
    return (
        <DragAndDropContext columData={ data } setData={ setData }/>
    )
}