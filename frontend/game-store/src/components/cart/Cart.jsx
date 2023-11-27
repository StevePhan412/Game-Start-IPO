import CartCard from "./CartCard";


export default function Cart() {
  return (
    <div className="h-screen w-full mt-20 flex flex-col justify-start items-center">
        <h1 className="font-bold text-2xl">Your Cart has 5 items</h1>
        <div className="flex w-full mt-10 justify-between items-center px-5 md:px-10 lg:px-20">
            <h2 className="font-bold text-xl">Item</h2>
            <h2 className="font-bold text-xl">Price</h2>
            <h2 className="font-bold text-xl">Quantity</h2>
            <h2 className="font-bold text-xl">Total</h2>
        </div>
        <div className=" w-full">
            <CartCard/>
        </div>
        <div className="mt-20 self-end w-[300px] flex justify-between items-center">
            <h2 className="font-bold text-xl">Total:</h2>
            <p className="text-lg">$1000</p>
        </div>
        <button className="self-end p-4 mt-10 bg-cyan-500 rounded-lg text-white">Checkout</button>
    </div>
  )
}
