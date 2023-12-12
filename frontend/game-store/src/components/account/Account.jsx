import { useNavigate } from "react-router-dom"


export default function Account({setLoggedIn}) {
    const navigate = useNavigate()

    const handleSignOut = () =>{
        localStorage.removeItem('token')
        localStorage.removeItem('loggedIn')
        setLoggedIn(false)
        navigate('/signin')
    }

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center ">
        <button onClick={handleSignOut} className="hover:underline hover:text-cyan-500">Sign Out</button>
        Account
    </div>
  )
}
