import { faCircleMinus, faCirclePlus, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function CartCard({name, price, quantity, loggedInUser, index, onQuantityChange, onRemoveItem, setCounterItems}) {
  const [itemQuantity, setItemQuantity] = useState(quantity)
 
  const handleMinusItem = () => {
    if (itemQuantity > 1) {
      const newQuantity = itemQuantity - 1;
      setItemQuantity(newQuantity);
      onQuantityChange(index, newQuantity);
    }
  }

  const handlePlusItem = () => {
    const newQuantity = itemQuantity + 1;
    setItemQuantity(newQuantity);
    onQuantityChange(index, newQuantity);
  }

  const handleRemove = () => {
    onRemoveItem(index)
    setCounterItems(prevCounter => prevCounter -= 1)
  }

  return (
    <div className="flex justify-between items-center rounded-xl bg-cyan-500 my-5 py-5 px-5">
        <h2 className="font-bold text-xl">{name}</h2>
        <h2 className="font-bold text-xl">${price}</h2>
        {/*Quantity*/}
        <div className="flex justify-center items-center">
            <FontAwesomeIcon onClick={handleMinusItem} className={`text-xl h-6 w-6 hover:cursor-pointer ${itemQuantity === 1 ? 'hidden' : 'flex' }`} icon={faCircleMinus}/>
            <div className="font-bold text-xl ml-5 mr-5 flex justify-center items-center">{itemQuantity}</div>
            <FontAwesomeIcon onClick={handlePlusItem} className="text-xl h-6 w-6 hover:cursor-pointer" icon={faCirclePlus} />
        </div>
        <div className="flex justify-center items-center">
            <h2 className="font-bold text-xl">${price * itemQuantity}</h2>
            <FontAwesomeIcon onClick={handleRemove} className="ml-2 text-xl h-6 w-6 hover:cursor-pointer" icon={faCircleXmark} />
        </div>
    </div>
  )
}
