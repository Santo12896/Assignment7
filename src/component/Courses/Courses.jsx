import { useEffect, useState } from "react";
import Course from "../Course/Course";


const Courses = ({handleAddBookmarks,handlePrice,handlecredit}) => {
    const [courses,setCousrses] = useState([])

    useEffect(() =>{
        fetch('courses.json')
        .then(res => res.json())
        .then(data => setCousrses(data))
    },[])
    return (
        <div className="md:w-3/4 grid grid-cols-3 gap-5">
            {/* <h1>course:{courses.length}</h1> */}
            {
                courses.map(course => <Course 
                    key={course.id} 
                    course={course} 
                    handleAddBookmarks={handleAddBookmarks}
                    handlePrice={handlePrice}
                    handlecredit={handlecredit}
                    ></Course>)
            }
        </div>
    );
};

export default Courses;