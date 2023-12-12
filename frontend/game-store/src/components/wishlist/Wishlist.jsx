import WishlistCard from "./WishlistCard";

export default function Wishlist({loggedInUser}) {
  return (
    <div className="h-screen w-full mt-20 flex flex-col justify-start items-center">
        <h1 className="font-bold text-2xl">Your have {loggedInUser.wishlist.length} items in your wishlist</h1>
        <div className="flex flex-col w-full mt-10 justify-between items-center px-5 md:px-10 lg:px-20">
            {loggedInUser.wishlist.map((item, index) => 
              (
                <WishlistCard key={index} name={item.name} price={item.price}/>
              ))}
            
        </div>
    </div>
  )
}
