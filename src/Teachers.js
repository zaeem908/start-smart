import teacher1 from "./teacher1.jpg"
import teacher6 from "./teacher6.jpg"
import teacher7 from "./teacher7.jpg"
import teacher4 from "./teacher4.jpg"
import teacher5 from "./teacher5.jpg"
import Home from "./Home"
import Sidebar from "./Sidebar"


function Teachers() {
    return (
<div>
    <Home/>
    <div className="flex">
    <Sidebar/>
<main className="flex-1 ml-auto rounded-lg">
        <div className="text-center">
            <h1 className="text-3xl mb-4 font-bold text-gray-500">Choose your Teachers</h1>
        </div>

<div className="flex flex-row">
    <div class="w-[20%] m-4 bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700">
            <img class="p-2" src={teacher1} alt="product image" />
        <div class="p-2">
                <h5 class="text-lg text-center font-semibold tracking-tight text-gray-900 dark:text-white">Mam Sophia</h5>
                <h4 className="px-[20%] text-xs">Subject: Science</h4>
            <div><button className="px-3 py-1 bg-gray-300 hover:bg-gray-500 hover:text-white m-2 mx-[30%] rounded-xl">Add</button></div>
        </div>
    </div>
    <div class="w-[20%] m-4 bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700">
            <img class="p-2" src={teacher7} alt="product image" />
        <div class="p-2">
                <h5 class="text-lg text-center font-semibold tracking-tight text-gray-900 dark:text-white">Mam Alia</h5>
                <h4 className="px-[20%] text-xs">Subject: English</h4>
                <div><button className="px-3 py-1 bg-gray-300 hover:bg-gray-500 hover:text-white m-2 mx-[30%] rounded-xl">Add</button></div>
        </div>
    </div>
   
    <div class="w-[20%] m-4 bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700">
            <img class="p-2" src={teacher5} alt="product image" />
        <div class="p-2">
                <h5 class="text-lg text-center font-semibold tracking-tight text-gray-900 dark:text-white">Mam Alyx</h5>
                <h4 className="px-[20%] text-xs">Subject: Physics</h4>
                <div><button className="px-3 py-1 bg-gray-300 hover:bg-gray-500 hover:text-white m-2 mx-[30%] rounded-xl">Add</button></div>        </div>
    </div>
   
    <div class="w-[20%] m-4 bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700">
            <img class="p-2" src={teacher6} alt="product image" />
        <div class="p-2">
                <h5 class="text-lg text-center font-semibold tracking-tight text-gray-900 dark:text-white">Sir Ali</h5>
                <h4 className="px-[10%] text-xs">Subject: Economics</h4>
                <div><button className="px-3 py-1 bg-gray-300 hover:bg-gray-500 hover:text-white m-2 mx-[30%] rounded-xl">Add</button></div>        </div>
    </div>
   
    <div class="w-[20%] m-4 bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700">
            <img class="p-2" src={teacher4} alt="product image" />
        <div class="p-2">
                <h5 class="text-lg text-center font-semibold tracking-tight text-gray-900 dark:text-white">Sir Rehman</h5>
                <h4 className="px-[10%] text-xs">Subject: Mathematics</h4>
                <div><button className="px-3 py-1 bg-gray-300 hover:bg-gray-500 hover:text-white m-2 mx-[30%] rounded-xl">Add</button></div>        </div>
    </div>
   
</div>  
</main>
</div>
</div>
    )
}

export default Teachers