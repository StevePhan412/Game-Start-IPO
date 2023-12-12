import WishlistCard from "./WishlistCard";
import { useState } from "react";

export default function Wishlist({loggedInUser, setCounterItems}) {
  const [user, setUser] = useState(loggedInUser)

  const handleRemoveItem = (index) => {
    const updatedUser = {...user}
    updatedUser.wishlist.splice(index, 1)
    setUser(updatedUser)
  }

  return (
    <div className="h-screen w-full mt-20 flex flex-col justify-start items-center">
        <h1 className="font-bold text-2xl">Your have {loggedInUser.wishlist.length} items in your wishlist</h1>
        <div className="flex flex-col w-full mt-10 justify-between items-center px-5 md:px-10 lg:px-20">
            {loggedInUser.wishlist.map((item, index) => 
              (
                <WishlistCard key={index} name={item.name} price={item.price} setCounterItems={setCounterItems} loggedInUser={loggedInUser} onRemoveItem={handleRemoveItem} index={index}/>
              ))}
            
        </div>
    </div>
  )
}
