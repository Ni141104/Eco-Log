import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './MarketPlace.css'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom';
import Home from '../marketplace/pages/Home'
import Cart from '../marketplace/pages/Cart'
function MarketPlace() {

  return (
    <>
      {/* <div className='bg-[#74512D] w-full flex' >
        <NavBar />
      </div> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </>
  )
}

export default MarketPlace
