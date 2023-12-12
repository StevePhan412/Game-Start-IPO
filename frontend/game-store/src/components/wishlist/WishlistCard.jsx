import { faCartPlus, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function WishlistCard({name, price}) {
  return (
    <div className='w-full p-5 my-5 bg-cyan-500 rounded-xl flex justify-between items-center'>
        <h2 className="font-bold text-xl">{name}</h2>
        <div className="flex justify-center items-center">
            <h2 className="font-bold text-xl">${price}</h2>
            <FontAwesomeIcon className='ml-5 text-xl h-6 w-6 hover:cursor-pointer' icon={faCartPlus}/>
            <FontAwesomeIcon className="ml-5 text-xl h-6 w-6 hover:cursor-pointer" icon={faCircleXmark} />
        </div>
    </div>
  )
}
