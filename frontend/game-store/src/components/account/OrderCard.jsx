import { useState } from "react"


export default function OrderCard({date, products, total}) {
  return (
    <div className="flex flex-col justify-start items-center w-full">
        <h1 className="font-bold text-xl text-start w-full">Date: {date}</h1>
        <div className="bg-cyan-500 outline-2 outline-black w-full justify-between p-4">
        {products.map((item, index) => 
            (
                <div className="flex justify-between items-center p-3" key={index}>
                    <h1 className="font-bold text-xl">Name: {item.name}</h1>
                    <h1  className="font-bold text-xl">Quantity: {item.description}</h1>
                    <h1 className="font-bold text-xl">Price: {item.price}</h1>
                </div>
            ))}            
        </div>
        <div className="flex justify-end items-center w-full">
            <h1 className="font-bold text-xl">Total: {total}</h1>
        </div>
    </div>
  )
}
