import { faCircleMinus, faCirclePlus, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CartCard() {
  return (
    <div className="flex justify-between items-center rounded-xl bg-cyan-500 my-5 py-5 px-5">
        <h2 className="font-bold text-xl">Game Name</h2>
        <h2 className="font-bold text-xl">$469.99</h2>
        {/*Quantity*/}
        <div className="flex justify-center items-center">
            <FontAwesomeIcon className="text-xl h-6 w-6 hover:cursor-pointer" icon={faCircleMinus}/>
            <div className="font-bold text-xl ml-5 mr-5 flex justify-center items-center">25</div>
            <FontAwesomeIcon className="text-xl h-6 w-6 hover:cursor-pointer" icon={faCirclePlus} />
        </div>
        <div className="flex justify-center items-center">
            <h2 className="font-bold text-xl">$469.99</h2>
            <FontAwesomeIcon className="ml-2 text-xl h-6 w-6 hover:cursor-pointer" icon={faCircleXmark} />
        </div>
    </div>
  )
}
