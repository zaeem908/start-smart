import { Link } from "react-router-dom";

function Sidebar() {
    return (
        
     <div className="flex">
        <aside className="w-44 flex flex-col p-5 m-3 mt-0 left-0 top-0 rounded-xl bg-gray-200">
            <Link to={"/attendance"} className="hover:bg-gray-400 mb-3  bg-gray-300 hover:text-white text-lg text-gray-500 p-4 rounded-xl">Attendance</Link>
            <Link className="hover:bg-gray-400 mb-3  bg-gray-300 hover:text-white text-lg text-gray-500 p-4 rounded-xl">Periods</Link>
            <Link to={"/teachers"} className="hover:bg-gray-400 mb-3  bg-gray-300 hover:text-white text-lg text-gray-500 p-4 rounded-xl">Teachers</Link> 
            <Link className="hover:bg-gray-400 mb-3  bg-gray-300 hover:text-white text-lg text-gray-500 p-4 rounded-xl">Schedule</Link>
            <Link className="hover:bg-gray-400 mb-3  bg-gray-300 hover:text-white text-lg text-gray-500 p-4 rounded-xl">Home Work</Link>
        </aside>
    </div>
    )
}

export default Sidebar;