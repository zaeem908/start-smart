import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";



function Login() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();

const handleSubmit = e => {
  e.preventDefault();
  navigate("/signup")
}

    return (
  <div>
  <form onSubmit={handleSubmit} className="bg-gray-200 text-center m-auto w-1/3 px-3 py-4 text-white mx-auto rounded-xl mt-[5%]">
    <h3 className="text-4xl text-gray-400 font-extrabold p-5 mb-5">Login</h3>
  	<input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" className="block w-full mx-auto text-sm py-2 px-3 rounded"/>
    <input type="password" placeholder="Password" className="block w-full mx-auto text-sm py-2 px-3 rounded my-3"/>
    <button className="text-gray-500 bg-gray-200">Forgot Password?</button>
    <button className="bg-gray-400 my-3 text-white font-bold py-2 px-4 rounded-lg border block mx-auto w-full">
      Login
    </button>
    <button className="text-gray-500 bg-gray-200">Don't have an account? <Link to={'/signup'}>Sign up</Link></button>
  </form>
  </div>
    )
}

export default Login;

