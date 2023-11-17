import { faCircleUser, faHeart,} from "@fortawesome/free-regular-svg-icons";
import { faBars, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";



export default function Navbar({setTriggerSideBar, counterItems, search, setSearch}) {

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

  return (
    <>
        <nav className="flex justify-center items-center p-3 border-b-2 border-gray-200 shadow-sm">  
            <div className="flex justify-between w-[1500px] min-w-[400px]">                 
                <div className="flex justify-center items-center w-1/2 pr-10">
                    <FontAwesomeIcon onClick={() => setTriggerSideBar(true)} className="h-6 w-6 hover:cursor-pointer p-3" icon={faBars}/>
                    <input onChange={handlingChange} onKeyDown={handleKeyDown} className="outline w-full outline-2 rounded-xl p-3 outline-gray-400"  type="text" placeholder="Search Game..."/>
                </div>
                <div className="flex justify-center items-center ">
                    <FontAwesomeIcon className="h-6 w-6 hover:cursor-pointer p-3" icon={faHeart}/>
                    <Link to={'/signin'}><FontAwesomeIcon className="h-6 w-6 hover:cursor-pointer p-3 flex justify-center items-center" icon={faCircleUser}/></Link>
                    <div className="relative flex justify-center items-center">
                        <FontAwesomeIcon className="h-6 w-6 p-3 hover:cursor-pointer" icon={faCartShopping} />
                        <div className={`absolute ${counterItems === 0 ? 'hidden' : 'flex'} select-none h-6 w-6 rounded-full outline outline-2 outline-slate-400 bottom-[0px] -right-[5px] text-black text-sm flex justify-center items-center`}>{counterItems <= 20 ? (counterItems) : ('20+')}</div>
                    </div>
                </div>
            </div>    
        </nav>
    </>
  )
}