import { Link } from "react-router-dom";

function Home() {
    return (
        <nav className="bg-gray-200 flex border-gray-200 m-3 pt-3 rounded-xl">
  <div className="pb-3 pl-6">
    <h1 className="font-bold text-4xl text-gray-500">Start Smart</h1>
    <p className="text-xs pl-6">Dedicated To Excellence</p>
  </div>
  <div className="ml-auto">
    <ul className="flex mr-2">
      <Link to="/sidebar" className=" mr-4 hover:bg-gray-400 mb-3 bg-gray-300 hover:text-white text-lg text-gray-500 p-4 rounded-xl">Home</Link>
      <Link to="/get-started" className=" mr-4 hover:bg-gray-400 mb-3 bg-gray-300 hover:text-white text-lg text-gray-500 p-4 rounded-xl">Get Started</Link>
      <Link to="/contact" className=" mr-4 hover:bg-gray-400 mb-3 bg-gray-300 hover:text-white text-lg text-gray-500 p-4 rounded-xl">Contact</Link>
      <Link to="/signup" className=" mr-4 hover:bg-gray-400 mb-3 bg-gray-300 hover:text-white text-lg text-gray-500 p-4 rounded-xl">Help</Link>
      <Link to="/login" className=" mr-4 hover:bg-gray-400 mb-3 bg-gray-300 hover:text-white text-lg text-gray-500 p-4 rounded-xl">Sign Out</Link>
    </ul>
  </div>
</nav>
    )
}

export default Home;