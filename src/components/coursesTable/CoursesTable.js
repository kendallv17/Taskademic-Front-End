import AddNewCourse from "./AddNewCourse"
import TableRow from "./TableRow"
export default function CoursesTable({courses, setCourses}){
    const handleDeleteCourse = (key) => {
        setCourses(courses.filter(course => course.key !== key))
    }
    const clearCourseArray = () => setCourses([]);
    const handleAddNewCourse = (event) => { 
        event.preventDefault();
        setCourses([...courses, {key: courses.length, name : event.target.elements.course.value, professor:event.target.elements.professor.value}]) 
        event.target.reset();
    }
    return (
        <div className="bg-mercury-100 mt-5 rounded-lg overflow-x-auto relative">
            <AddNewCourse handler={ handleAddNewCourse }></AddNewCourse>
            <table className="w-full text-xs text-gray-500 mt-2 uppercase">
                <thead className="text-gray-700 uppercase border-b border-blue-dark">
                    <tr>
                        <th scope="col" className="py-3 px-3 w-1/2">
                            Course
                        </th>
                        <th scope="col" className="py-3 px-3 w-1/2">
                            Professor
                        </th>
                        <th onClick={ clearCourseArray } className="py-3 px-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 right-">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map(course => <TableRow key={course.key} name={course.name} professor={course.professor} action={ () => handleDeleteCourse(course.key) }/>)}
                </tbody>
            </table>
        </div>
    )
}