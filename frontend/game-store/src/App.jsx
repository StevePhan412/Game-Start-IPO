import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/commons/navbar/navbar'
import LandingPage from './components/landingpage/LandingPage'
import SideBar from './components/sidebar/SideBar'
import SignIn from './components/signin/SignIn'
import SignUp from './components/signin/SignUp'
import ChangePassword from './components/signin/changepassword/changepassword'
import ResetPassword from './components/signin/changepassword/ResetPassword'
import Cart from './components/cart/Cart'
import Wishlist from './components/wishlist/Wishlist'
import Account from './components/account/Account'

function App() {
  const location = useLocation()
  const [triggerSiderBar, setTriggerSideBar] = useState(false)
  const [counterItems, setCounterItems] = useState(0)
  const [userName, setUserName] = useState()
  const [search, setSearch] = useState('')
  const [selectedPrice, setSelectedPrice] = useState('none')
  const [loggedIn, setLoggedIn] = useState(false)
  const [loggedInUser, setLoggedInUser] = useState()
  const [wallet, setWallet] = useState(0)
  console.log(loggedInUser)

  const isSignIn = location.pathname.includes('/signin')
  const isSingnUp = location.pathname.includes('/signup')

  useEffect(() => {
    const updateLoggedInState = () => {
      const storedValue = localStorage.getItem('loggedIn');
      if (storedValue === 'true') {
        setLoggedIn(true);
        // Set loggedInUser from localStorage or an API call
        const storedUser = JSON.parse(localStorage.getItem('loggedInUser'));
        setLoggedInUser(storedUser); // Make sure loggedInUser is set correctly
      } else {
        setLoggedIn(false);
      }
    };
  
    updateLoggedInState();
  
    const handleStorageChange = (e) => {
      if (e.key === 'loggedIn') {
        updateLoggedInState();
      }
    };
  
    window.addEventListener('storage', handleStorageChange);
  
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <>
    <div className='relative min-w-[400px] select-none'>
    {(!isSignIn && !isSingnUp) && 
      (
        <Navbar setTriggerSideBar={setTriggerSideBar} counterItems={counterItems} search={search} setSearch={setSearch} isLoggedIn={loggedIn} wallet={wallet}/>
      )
    }
      <SideBar triggerSiderBar={triggerSiderBar} setTriggerSideBar={setTriggerSideBar} selectedPrice={selectedPrice} setSelectedPrice={setSelectedPrice}/>
      <div className='flex justify-center items-center '>
        <div className='w-[1500px] '>
        <Routes>
            <Route path='/' element={<LandingPage search={search} setCounterItems={setCounterItems} selectedPrice={selectedPrice} isLoggedIn={loggedIn} loggedInUser={loggedInUser}/>}/>
            <Route path='/signin' element={<SignIn setLoggedIn={setLoggedIn} setLoggedInUser={setLoggedInUser} setUserName={setUserName} setWallet={setWallet}/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/signin/changepassword' element={<ChangePassword/>}/>
            <Route path='/signin/resetpassword' element={<ResetPassword/>}/>
            <Route path='/cart' element={<Cart loggedInUser={loggedInUser} setCounterItems={setCounterItems} wallet={wallet} setWallet={setWallet}/>}/>
            <Route path='/wishlist' element={<Wishlist loggedInUser={loggedInUser} setCounterItems={setCounterItems}/>}/>
            <Route path='/account' element={<Account setLoggedIn={setLoggedIn} userName={userName} loggedInUser={loggedInUser} setWallet={setWallet}/>}/>
          </Routes>
        </div>
      </div> 
    </div>
    </>
  )
}

export default App