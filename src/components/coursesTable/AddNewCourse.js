export default function AddNewCourse({handler, }){
    return (
        <form className="flex w-full" onSubmit={ handler }>
            <div className="flex-1 px-5">
                <input type="text" placeholder="Course" name="course"  className="border-b-2 border-b-bright-turquoise-600 text-center w-full h-full invalid:border-radical-red-500" required/>
            </div>
            <div className="flex-1 px-5">
                <input type="text" placeholder="Professor" name="professor" className="border-b-2 border-b-bright-turquoise-600 text-center w-full h-full invalid:border-radical-red-500" required/>
            </div>
        <div className="flex-0">
            <button type=" submit" 
            className="flex-1 text-mercury-600 bg-radical-red-700 hover:bg-radical-red-600 rounded-lg text-sm px-5 py-2.5 text-center"
            >Add course</button>
        </div>
    </form>
    )
}