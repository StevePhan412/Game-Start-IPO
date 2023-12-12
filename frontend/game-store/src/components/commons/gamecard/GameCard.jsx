import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";


export default function GameCard({name, description, price, setCounterItems, imageUrl, isLoggedIn, loggedInUser}) {
    const [quantity, setQuantity] = useState(1)

    const handleAddToCart = (e) =>{
        if(!isLoggedIn){
            e.preventDefault()
            alert('Please Log In in order to add to the Shopping Cart')
        }
        else{       
            const isItemInCart = loggedInUser.cart.findIndex((item) => item.name === name)
            
            if(isItemInCart !== -1){
                const updatedCart = [...loggedInUser.cart]
                updatedCart[isItemInCart].quantity += 1;

                loggedInUser.cart(updatedCart)
                
            }
            else{
                loggedInUser.addToCart(
                    {
                        name: name,
                        price: price,
                        quantity: quantity,
        
                    })  
                setCounterItems(prevCounter => prevCounter + 1)
            }  
            setQuantity(prevQuantity => prevQuantity + 1)               
        }

    }

    const handleAddToWishlist = (e) =>{
        if(!isLoggedIn){
            e.preventDefault()
            alert('Please Log In in order to add to the Wishlist')
        }
    }

  return (
    <div className="relative bg-slate-300 h-[450px] w-[350px] hover:outline hover:outline-2 hover:outline-blue-500 rounded-xl flex flex-col justify-start shadow-md p-1">
        <div className=" ">
            <img className="w-full h-[210px] rounded-t-md object-fill object-center" src={imageUrl} alt="image" />
        </div>
        <div className="flex flex-col w-full h-[240px] p-4 justify-between">
            <div>
                <h1 className="text-xl">{name}</h1>
                <p className="text-sm mt-2">{description}</p>
            </div>
            <div className="flex justify-between items-center">
                <p className="font-bold text-xl">${price}</p>
                <div>
                    <FontAwesomeIcon onClick={handleAddToCart} className="h-6 w-6 hover:cursor-pointer p-3" icon={faCartPlus} />
                    <FontAwesomeIcon onClick={handleAddToWishlist} className="h-6 w-6 hover:cursor-pointer p-3" icon={faHeart}/>
                </div>
            </div>
        </div>
        
    </div>
  )
}