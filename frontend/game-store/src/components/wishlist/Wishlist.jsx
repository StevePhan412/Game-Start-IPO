import WishlistCard from "./WishlistCard";

export default function Wishlist() {
  return (
    <div className="h-screen w-full mt-20 flex flex-col justify-start items-center">
        <h1 className="font-bold text-2xl">Your have 5 items in your wishlist</h1>
        <div className="flex w-full mt-10 justify-between items-center px-5 md:px-10 lg:px-20">
            <WishlistCard/>
        </div>
    </div>
  )
}
