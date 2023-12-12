import { useEffect, useState } from 'react';
import axios from '../../api/axios'

import { Link } from "react-router-dom";

export default function SignUp() {
  const [users, setUsers] = useState([])
  const [email, setEmail] = useState('')
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [reEnteredPassword, setReEnteredPassword] = useState('')

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get('api/users')
      setUsers(res.data)
    }

    fetchUsers()
  },[])

  const handleSubmit = async (e) =>{
    e.preventDefault();

    if(password !== reEnteredPassword){
      alert('Password does not match. Please try again.') 
      return;
    }  

    try{
      const existEmail = users.find((user) => user.email === email)

      if(existEmail){
        alert('Email already in use. Try logging in')
      }
      else
      {
        const signUpResponse = await axios.post('/api/users', {
          email: email,
          username: username,
          password: password,
        })
    
        alert('User signed up:', signUpResponse.data)
        setEmail('')
        setUserName('')
        setPassword('')
        setReEnteredPassword('')
      }  
    }
    catch(error){
      alert('Error signing up:', error)
    }
    
  }

  return (
    <div className="w-full h-screen flex justify-center items-start md:items-center ">
        <div className="w-[32rem] flex flex-col justify-start items-center p-5 mt-10 rounded-xl ">
            <Link to={'/'}><h1 className="font-bold text-5xl hover:underline">Game Store</h1></Link>
          <form onSubmit={handleSubmit}>
            <input
              className="mt-10 p-4 outline outline-2 outline-gray-500 rounded-xl w-full"
              type="email"
              required
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="mt-5 p-4 outline outline-2 outline-gray-500 rounded-xl w-full"
              type="text"
              required
              placeholder="UserName"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              className="mt-5 p-4 outline outline-2 outline-gray-500 rounded-xl w-full"
              type="password"
              required
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className="mt-5 p-4 outline outline-2 outline-gray-500 rounded-xl w-full"
              type="password"
              required
              placeholder="Re-Enter Password"
              value={reEnteredPassword}
              onChange={(e) => setReEnteredPassword(e.target.value)}
            />
            <button type="submit" className="w-full h-[50px] bg-cyan-500 text-white mt-5 rounded-xl">
              Sign Up
            </button>
          </form>
            <div className="w-full h-[1px] bg-gray-500 mt-10 rounded-xl"></div>
            <Link className="text-lg mt-10 text-gray-400 hover:underline" to={'/signin'}>Sign In</Link>
        </div>
    
    </div>
  )
}
