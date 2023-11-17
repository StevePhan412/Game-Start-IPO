import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState, useEffect } from "react"

export default function SideBar({triggerSiderBar, setTriggerSideBar, selectedPrice, setSelectedPrice}) {

  useEffect(() =>{
    if(triggerSiderBar){
      document.body.style.overflow = 'hidden'
    }
    else{
      document.body.style.overflow = 'unset'
    }

    return () =>{
      document.body.style.overflow = 'unset'
    }

  },[triggerSiderBar])


  const handlePriceChange = (price) =>{
    setSelectedPrice(price)
  }

  return (
    <>
    {triggerSiderBar && 
        (
            <div className="absolute top-0 left-0 h-screen w-full bg-black bg-opacity-30 z-50 overflow-hidden">                
                <div className="relative w-[400px] bg-white h-screen flex flex-col justify-start items-start p-5">
                  <FontAwesomeIcon onClick={() => setTriggerSideBar(false)} className="absolute top-0 right-0 h-6 w-6 hover:cursor-pointer p-3" icon={faXmark}/>                    
                    <div className="flex flex-col justify-start items-start w-full mt-10">
                    <h2 className="font-bold text-xl">Search game by price</h2>
                      <div className="flex justify-center items-center mt-5 w-full">
                        <input className="h-5 w-6" type="radio" id="none" value='none' checked={selectedPrice === 'none'} onChange={() => handlePriceChange('none')}/>
                        <label htmlFor='none' className="pl-5 w-full">No price range</label>
                      </div>
                      <div className="flex justify-center items-center mt-5 w-full">
                        <input className="h-5 w-6" type="radio" id="0-20" value='0-20' checked={selectedPrice === '0-20'} onChange={() => handlePriceChange('0-20')}/>
                        <label htmlFor='0-20' className="pl-5 w-full">$0 - $20</label>
                      </div>
                      <div className="flex justify-start items-center mt-5 w-full">
                        <input className="h-5 w-6" type="radio" id="20-60" value='20-60' checked={selectedPrice === '20-60'} onChange={() => handlePriceChange('20-60')}/>
                        <label htmlFor='20-60' className="pl-5 w-full">$20 - $60</label>
                      </div>
                      <div className="flex justify-start items-center mt-5 w-full">
                        <input className="h-5 w-6" type="radio" id="60-100" value='60-100' checked={selectedPrice === '60-100'} onChange={() => handlePriceChange('60-100')}/>
                        <label htmlFor='60-100' className="pl-5 w-full">$60 - $100</label>
                      </div>
                      <div className="flex justify-start items-center mt-5 w-full">
                        <input className="h-5 w-6" type="radio" id="100-plus" value='100-plus' checked={selectedPrice === '100-plus'} onChange={() => handlePriceChange('100-plus')}/>
                        <label htmlFor="100-plus" className="pl-5 w-full">100 +</label>
                      </div>
                    </div>
                </div>
            </div>
        )
    }
    </>
    
  )
}
