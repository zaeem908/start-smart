import { Link } from "react-router-dom";

function SignUp() {
    return(
        <form class="bg-gray-200 text-center m-auto w-1/3 px-3 py-4 text-white mx-auto rounded-xl mt-[5%]">
    <h3 className="text-4xl text-gray-400 font-extrabold p-5 mb-5">SignUp</h3>
  	<input type="text" placeholder="Username" class="block w-full mx-auto text-sm py-2 px-3 rounded" />
    <input type="text" placeholder="Password" class="block w-full mx-auto text-sm py-2 px-3 rounded my-3"/>
    <button class="bg-gray-400 my-3 text-white font-bold py-2 px-4 rounded-lg border block mx-auto w-full">
      Save
    </button>
    <button className="text-gray-500 bg-gray-200">Already have an account? <Link to={'/'}>Login</Link></button>
  </form>
    )
}

export default SignUp;