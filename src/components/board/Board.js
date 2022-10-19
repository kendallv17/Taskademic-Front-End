import DragAndDropContext from "../draganddropcontext/DragAndDropContext"
import { useState } from "react"
import { Button, Modal } from "flowbite-react"
export default function Board({data, setData}){
    const [showModal, setShowModal] = useState(false)
    const handleOnSubmit = (e)=> {
        e.preventDefault()
        let newData = { ...data }
        newData.tasks.push({id:`${data.tasks.length + 1}`, tittle:e.target.taskname.value, course:e.target.courses.value, state:"todo"})
        newData.todo.tasks.push(`${newData.tasks.length}`)
        setData(newData)
        console.log(data)
        alert("New Task added")
        setShowModal(false)
        e.target.reset();
    }
    return (
        <div>
            <div className="flex flex-col">
                <div className="flex flex-row-reverse pr-2 pt-3">
                    <Button class="flex-0 bg-bright-turquoise-700 hover:bg-bright-turquoise-800 rounded text-base hover:text-lg text-mercury-50" onClick={ () => setShowModal(true) }>
                        Add new task
                    </Button>
                </div>
                <DragAndDropContext columData={ data } setData={ setData }/>
            </div>
              <Modal show={ showModal } onClose={ () => setShowModal(false)}
              >
                <Modal.Header>
                  Pls fill in the required information
                </Modal.Header>
                <form onSubmit={ handleOnSubmit }>
                    <Modal.Body>
                    <div className="space-y-6">
                        <label htmlFor="courses" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Please select the course</label>
                        <select id="courses" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        {data.courses.map(course => <option key={ course.id } value={ course.name }>{ course.name }</option>)}
                        </select>
                    </div>
                    <div class="mb-6">
                        <label htmlFor="taskname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Base input</label>
                        <input type="text" id="taskname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    </div>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button class="bg-radical-red-400 rounded text-base hover:text-lg text-mercury-50" onClick={ () => setShowModal(false)}>
                        Cancel
                    </Button>
                    <Button type="submit" class="bg-bright-turquoise-700 rounded text-base hover:text-lg text-mercury-50">
                        Add new task
                    </Button>
                    </Modal.Footer>
                </form>
              </Modal>
        </div>
    )
}