import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useNavigate } from "react-router-dom"
import OrderCard from "./OrderCard"
import { useState } from "react"


export default function Account({setLoggedIn, userName, loggedInUser, setWallet}) {
    const [user, setUser] = useState(loggedInUser)
    const navigate = useNavigate()

    const handleSignOut = () =>{
        localStorage.removeItem('token')
        localStorage.removeItem('loggedIn')        
        setLoggedIn(false)
        setWallet(0)
        navigate('/signin')
    }

    const handleKeyDown = (e) =>{
      if(e.key === 'Enter'){
        loggedInUser.addToWallet(e.target.value)
        setWallet(loggedInUser.wallet) 
      }
    }

  return (
    <div className="h-screen w-full flex flex-col justify-start items-center ">
        <div className="w-full flex justify-between items-center mt-10">
          <h1 className="text-6xl text-start  ">Welcome <span className="font-bold text-6xl">{userName}</span></h1>
          <div className="flex justify-center items-center h-full">
          <FontAwesomeIcon className="h-8 w-8" icon={faRightFromBracket}/>
          <button onClick={handleSignOut} className="hover:underline flex justify-center items-center hover:text-cyan-500 ml-5 text-2xl">Sign Out</button>
          </div>
        </div>
        <div className="flex w-full justify-start items-center mt-20">
          <h1 className="font-bold text-xl">Fund account</h1>
          <input onKeyDown={handleKeyDown} className="ml-5 border rounded-lg h-10 border-1 border-cyan-500" type="number" placeholder="$0.00"/>
        </div>
        <div className="flex flex-col h-full justify-center items-center mt-10 text-2xl w-full">
          Purchase History
          <div className="flex flex-col justify-start items-center mt-5 h-full w-full">
            {user.order.map((item, index) => 
              (
                <OrderCard key={index} date={item.orderDate} products={item.products} total={item.totalAmount}/>
              ))}
          </div>
        </div>
    </div>
  )
}
