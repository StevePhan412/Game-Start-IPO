import { useState } from "react";
import CartCard from "./CartCard";
import axios from "../../api/axios";


export default function Cart({loggedInUser, setCounterItems, wallet, setWallet}) {
  const[user, setUser] = useState(loggedInUser)
  const totalCost = user.cart.reduce((total, item) => total + item.price * item.quantity, 0)

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

  const handleCheckOut = (e) =>{
    e.preventDefault()
    if(wallet !== 0 && (wallet - totalCost > 0)){

      try{

        const productsToPost = loggedInUser.cart.map(item => ({
          name: item.name,
          description: item.quantity,
          price: item.price
        }))    
        
        console.log(productsToPost)

        const formattedDate = new Date().toLocaleDateString('en-US', {
          year: '2-digit',
          month: '2-digit',
          day: '2-digit'
        })

        const postPurchase = async () => {
          const res = await axios.post('/api/orders/create', {
            orderDate: formattedDate,
            products: productsToPost,
            totalAmount: totalCost
          })
        }

        const products = (
          {
            orderDate: formattedDate,
            products: productsToPost,
            totalAmount: totalCost
          })

        loggedInUser.substractFromWallet(totalCost)
        setWallet(wallet - totalCost)
        loggedInUser.addToOrder(products)
        setCounterItems(0)

        user.cart = []
        
        alert('Successful Purchase!')
      }
      catch(error){
        console.log(error)
      }
    }
    else{
      alert('Insufficient funds, please fund your account to continue')
    }
  }

  return (
    <>
      {user.cart.length > 0 ? 
        (
          <div className="h-screen w-full mt-20 flex flex-col justify-start items-center">
          <h1 className="font-bold text-2xl">Your Cart has {user.cart.length} items</h1>
          <div className="flex w-full mt-10 justify-between items-center px-5 md:px-10 lg:px-20">
              <h2 className="font-bold text-xl">Item</h2>
              <h2 className="font-bold text-xl">Price</h2>
              <h2 className="font-bold text-xl">Quantity</h2>
              <h2 className="font-bold text-xl">Total</h2>
          </div>
          <div className=" w-full">
              {user.cart.map((item, index) => 
                (
                  <CartCard key={index} name={item.name} price={item.price} quantity={item.quantity} loggedInUser={user} index={index} onQuantityChange={handleQuantityChange} onRemoveItem={handleRemoveItem} setCounterItems={setCounterItems}/>
                ))}            
          </div>
          <div className="mt-20 self-end w-[300px] flex justify-between items-center">
              <h2 className="font-bold text-xl">Total:</h2>
              <p className="text-lg">${totalCost}</p>
          </div>
          <button onClick={handleCheckOut} className="self-end p-4 mt-10 bg-cyan-500 rounded-lg text-white">Checkout</button>
      </div>
        ) 
        : 
        (
          <div className="flex h-screen w-full justify-center items-center font-bold text-4xl">Your cart is empty</div>
        ) }
    </>    
  )
}
