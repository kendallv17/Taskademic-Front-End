import { useState } from "react"
import TableRow from "./TableRow"
export default function CoursesTable(){
    const [courses, setCourses] = useState([
        {key:1, name:"Fundamentos de informatica", professor:"Sonia Mora"},
        {key:2, name:"Estructuras Discretas", professor:"Carlos Loria"}
    ])
    return (        
        <div className="bg-mercury-100 mt-5 rounded-lg">
            <table className="md:w-full sm:w-96 text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase border-b border-blue-dark">
                    <tr>
                        <th scope="col" className="py-3 px-3">
                            Course name
                        </th>
                        <th scope="col" className="py-3 px-3">
                            Professor
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map(course => <TableRow key={course.key} name={course.name} professor={course.professor} action={console.log("Hello from action")}/>)}
                </tbody>
            </table>
        </div>
    )
}