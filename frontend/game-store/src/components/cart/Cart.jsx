import { useState } from "react";
import CartCard from "./CartCard";


export default function Cart({loggedInUser, setCounterItems}) {
  const [user, setUser] = useState(loggedInUser)

  const totalCost = loggedInUser.cart.reduce((total, item) => total + item.price * item.quantity, 0)

  const handleQuantityChange = (index, newQuantity) => {
    const updatedUser = {...user}
    updatedUser.cart[index].quantity = newQuantity
    setUser(updatedUser)
  }

  const handleRemoveItem = (index) => {
    const updatedUser = {...user}
    updatedUser.cart.splice(index, 1)
    setUser(updatedUser)
  }

  return (
    <>
      {loggedInUser.cart.length > 0 ? 
        (
          <div className="h-screen w-full mt-20 flex flex-col justify-start items-center">
          <h1 className="font-bold text-2xl">Your Cart has {loggedInUser.cart.length} items</h1>
          <div className="flex w-full mt-10 justify-between items-center px-5 md:px-10 lg:px-20">
              <h2 className="font-bold text-xl">Item</h2>
              <h2 className="font-bold text-xl">Price</h2>
              <h2 className="font-bold text-xl">Quantity</h2>
              <h2 className="font-bold text-xl">Total</h2>
          </div>
          <div className=" w-full">
              {loggedInUser.cart.map((item, index) => 
                (
                  <CartCard key={index} name={item.name} price={item.price} quantity={item.quantity} loggedInUser={user} index={index} onQuantityChange={handleQuantityChange} onRemoveItem={handleRemoveItem} setCounterItems={setCounterItems}/>
                ))}            
          </div>
          <div className="mt-20 self-end w-[300px] flex justify-between items-center">
              <h2 className="font-bold text-xl">Total:</h2>
              <p className="text-lg">${totalCost}</p>
          </div>
          <button className="self-end p-4 mt-10 bg-cyan-500 rounded-lg text-white">Checkout</button>
      </div>
        ) 
        : 
        (
          <div className="flex h-screen w-full justify-center items-center font-bold text-4xl">Your cart is empty</div>
        ) }
    </>    
  )
}
