import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartPlus } from "@fortawesome/free-solid-svg-icons";


export default function GameCard({name, description, price, setCounterItems}) {
    
    const handleAddCart = () =>{
        setCounterItems(prevCounter => prevCounter + 1)
    }

  return (
    <div className="relative bg-slate-300 h-[450px] w-[350px] hover:outline hover:outline-2 hover:outline-blue-500 rounded-xl flex flex-col justify-start shadow-md p-1">
        <div className="w-full h-[210px] bg-gamesImage bg-cover bg-center bg-no-repeat rounded-t-md"></div>
        <div className="flex flex-col w-full h-[240px] p-4 justify-between">
            <div>
                <h1 className="text-2xl">{name}</h1>
                <p className="text-md mt-2">{description}</p>
            </div>
            <div className="flex justify-between items-center">
                <p className="font-bold text-xl">{price}</p>
                <div>
                    <FontAwesomeIcon onClick={handleAddCart} className="h-6 w-6 hover:cursor-pointer p-3" icon={faCartPlus} />
                    <FontAwesomeIcon className="h-6 w-6 hover:cursor-pointer p-3" icon={faHeart}/>
                </div>
            </div>
        </div>
        
    </div>
  )
}
