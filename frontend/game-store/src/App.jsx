import { useState } from 'react'
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

function App() {
  const location = useLocation()
  const [triggerSiderBar, setTriggerSideBar] = useState(false)
  const [counterItems, setCounterItems] = useState(0)
  const [search, setSearch] = useState('')
  const [selectedPrice, setSelectedPrice] = useState('none')

  const isSignIn = location.pathname.includes('/signin')
  const isSingnUp = location.pathname.includes('/signup')

  return (
    <>
    <div className='relative min-w-[400px] select-none'>
    {(!isSignIn && !isSingnUp) && 
      (
        <Navbar setTriggerSideBar={setTriggerSideBar} counterItems={counterItems} search={search} setSearch={setSearch}/>
      )
    }
      <SideBar triggerSiderBar={triggerSiderBar} setTriggerSideBar={setTriggerSideBar} selectedPrice={selectedPrice} setSelectedPrice={setSelectedPrice}/>
      <div className='flex justify-center items-center '>
        <div className='w-[1500px] '>
        <Routes>
            <Route path='/' element={<LandingPage search={search} setCounterItems={setCounterItems} selectedPrice={selectedPrice}/>}/>
            <Route path='/signin' element={<SignIn/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/signin/changepassword' element={<ChangePassword/>}/>
            <Route path='/signin/resetpassword' element={<ResetPassword/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/wishlist' element={<Wishlist/>}/>
          </Routes>
        </div>
      </div> 
    </div>
    </>
  )
}

export default App
