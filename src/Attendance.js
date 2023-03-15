import Home from "./Home";
import Sidebar from "./Sidebar";


function Attendance() {
  return (
    <div>
      <Home/>
      <div className="flex">
       <Sidebar/>
       <h1 className="mx-auto my-auto text-4xl font-extrabold">Attendance here</h1>
      </div>
    </div>
  )
}

export default Attendance;
