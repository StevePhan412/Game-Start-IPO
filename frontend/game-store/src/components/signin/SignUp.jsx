

import { Link } from "react-router-dom";


export default function SignUp() {
  return (
    <div className="w-full h-screen flex justify-center items-start md:items-center ">
        <div className="w-[32rem] flex flex-col justify-start items-center p-5 mt-10 rounded-xl ">
            <Link to={'/'}><h1 className="font-bold text-5xl hover:underline">Game Store</h1></Link>
            <input className="mt-10 p-4 outline outline-2 outline-gray-500 rounded-xl w-full" type="text" placeholder="Email"/>
            <input className="mt-5 p-4 outline outline-2 outline-gray-500 rounded-xl w-full" type="password" placeholder="Password"/>
            <input className="mt-5 p-4 outline outline-2 outline-gray-500 rounded-xl w-full" type="password" placeholder="Re-Enter Password"/>
            <button className="w-full h-[50px] bg-cyan-500 text-white mt-5 rounded-xl">Sign Up</button>
            <div className="w-full h-[1px] bg-gray-500 mt-10 rounded-xl"></div>
            <Link className="text-lg mt-10 text-gray-400 hover:underline" to={'/signin'}>Sign In</Link>
        </div>
    
    </div>
  )
}
