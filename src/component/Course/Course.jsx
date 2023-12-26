import { IoBookOutline } from "react-icons/io5";
import { PiCurrencyDollarLight } from "react-icons/pi";
const Course = ({ course,handleAddBookmarks,handlePrice,handlecredit }) => {
    const { cover, course_name, course_title, price, credit } = course;
    return (
        <div >

            <div className="card p-4 bg-base-100 shadow-xl">
                <figure><img className="w-full rounded-md" src={cover} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className=" my-4 font-semibold text-lg">{course_name}</h2>
                    <p className="text-sm">{course_title}</p>
                    <div className="flex justify-between text-slate-500 my-5">
                        <div className="flex gap-1">
                            <button className="text-2xl"><PiCurrencyDollarLight /></button>
                            <p className="">Price:{price}</p>
                        </div>
                        <div className="flex gap-3">
                            <button><IoBookOutline /></button>
                            <p> Credit: {credit}hr</p>
                        </div>
                    </div>
                    <button onClick={() => {handleAddBookmarks(course); handlePrice(course.price); handlecredit(course.credit)}} className="btn bg-[#2F80ED] w-full text-center p-3 rounded-md text-lg font-semibold text-white">Select</button>
                </div>
            </div>

        </div>
    );
};

export default Course;