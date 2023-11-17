import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, useLocation } from 'react-router-dom'
import {useLayoutEffect} from 'react'

const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
} 


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Wrapper>
        <App />
      </Wrapper>  
    </BrowserRouter>    
  </React.StrictMode>,
)
