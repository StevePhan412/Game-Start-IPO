import { faCircleUser, faHeart,} from "@fortawesome/free-regular-svg-icons";
import { faBars, faCartShopping, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, useLocation} from "react-router-dom";



export default function Navbar({setTriggerSideBar, counterItems, search, setSearch, isLoggedIn, wallet}) {
    const location = useLocation()

    const isCart = location.pathname.includes('/cart')
    const isWishlist = location.pathname.includes('/wishlist')
    const isAccount = location.pathname.includes('/account')
    const cartOrWishlistClass = isCart || isWishlist || isAccount ? 'justify-end' : 'justify-between';
    const navigateTo = isLoggedIn ? '/account' : '/signin'

    const handleKeyDown = (e) => {
        if(e.key === 'Enter'){
            const trimmedValue = e.target.value.trim()
            setSearch(trimmedValue)
        }
    
    }

    const handlingChange = (e) => {
        if(e.target.value === ''){
            setSearch('')
        }
    }

    const handlingClickingCart = (e) =>{
        if(!isLoggedIn){
            e.preventDefault()
            alert('Please Log In to access your cart')
        }
    }

    const handlingClickingHeart = (e) =>{
        if(!isLoggedIn){
            e.preventDefault()
            alert('Please Log In to access your wishlist')
        }
    }
  return (
    <>
        <nav className="flex justify-center items-center p-3 border-b-2 border-gray-200 shadow-sm">  
            <div className={`flex ${cartOrWishlistClass} w-[1500px] min-w-[400px]`}>    
                {(!isCart && !isWishlist && !isAccount) && 
                (
                <div className="flex justify-center items-center w-1/2 pr-10">
                    <FontAwesomeIcon onClick={() => setTriggerSideBar(true)} className="h-6 w-6 hover:cursor-pointer p-3" icon={faBars}/>
                    <input onChange={handlingChange} onKeyDown={handleKeyDown} className="outline w-full outline-2 rounded-xl p-3 outline-gray-400"  type="text" placeholder="Search Game..."/>
                </div>
                )}             
                
                <div className="flex justify-center items-center ">
                    <div className="font-bold h-full text-xl flex justify-center items-center p-3 ">${wallet}</div>
                    <Link className={`${isCart || isWishlist || isAccount? 'flex justify-center items-center' : 'hidden'} `} to={'/'}><FontAwesomeIcon className="h-6 w-6 hover:cursor-pointer p-3" icon={faHouse}/></Link>
                    <Link onClick={handlingClickingHeart} className="flex justify-center items-center" to={'/wishlist'}><FontAwesomeIcon className="h-6 w-6 hover:cursor-pointer p-3" icon={faHeart}/></Link>
                    <Link to={navigateTo}><FontAwesomeIcon className="h-6 w-6 hover:cursor-pointer p-3 flex justify-center items-center" icon={faCircleUser}/></Link>
                    <div className="relative flex justify-center items-center">
                        <Link onClick={handlingClickingCart} className="flex justify-center items-center" to={'/cart'}><FontAwesomeIcon className="h-6 w-6 p-3 hover:cursor-pointer" icon={faCartShopping} /></Link>
                        <div className={`absolute ${counterItems === 0 || !isLoggedIn ? 'hidden' : 'flex'} select-none h-6 w-6 rounded-full outline outline-2 outline-slate-400 bottom-[0px] -right-[5px] text-black text-sm flex justify-center items-center`}>{counterItems <= 20 ? (counterItems) : ('20+')}</div>
                    </div>
                </div>
            </div>    
        </nav>
    </>
  )
}