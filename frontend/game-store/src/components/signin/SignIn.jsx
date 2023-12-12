import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import User from './User';

export default function SignIn({setLoggedIn, setLoggedInUser}) {
  const [users, setUsers] = useState([])
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()

  useEffect(() => {
    const fetchUsers = async () =>{
      const response = await axios.get('/api/users')
      setUsers(response.data)
    }
    fetchUsers()
  }, [])

  const handleSignIn = async (e) =>{
    e.preventDefault()

    try{
      //Send request to your backend to authenticate the user  
      const user = users.find((user) => user.email === email && user.password === password)

      if(user){
        const {token} = user
        localStorage.setItem('token', token)
        localStorage.setItem('loggedIn', true)
        const loggedInUser = new User(user.id)
        setLoggedIn(true)
        setLoggedInUser(loggedInUser)
        navigate('/account')
      }
      else{
        alert('Invalid email or password')
      }
      
    }
    catch(error){
      alert('Error signing in. Please try again')
      console.log(error)
    }
  }

  return (
    <div className="w-full h-screen flex justify-center items-start md:items-center ">
        <div className="w-[32rem] flex flex-col justify-start items-center p-5 mt-10 rounded-xl ">
            <Link to={'/'}><h1 className="font-bold text-5xl hover:underline">Game Store</h1></Link>
            <form onSubmit={handleSignIn}>
          <input
            className="mt-10 p-4 outline outline-2 outline-gray-500 rounded-xl w-full"
            type="text"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="mt-5 p-4 outline outline-2 outline-gray-500 rounded-xl w-full"
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex justify-end items-center w-full mt-[10px]">
            <Link className="text-lg text-gray-400 hover:underline" to={'/signin/changepassword'}>
              Forgot Password?
            </Link>
          </div>
          <button type="submit" className="w-full h-[50px] bg-cyan-500 text-white mt-5 rounded-xl">
            Sign In
          </button>
        </form>
            <div className="w-full h-[1px] bg-gray-500 mt-10 rounded-xl"></div>
            <Link className="text-lg mt-10 text-gray-400 hover:underline" to={'/signup'}>Sign Up</Link>
        </div>
    
    </div>
  )
}