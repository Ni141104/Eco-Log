import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import SignUp from './pages/SignUp'
import NavBar from './components/NavBar'
import PrivateRoute from './components/PrivateRoute1'
import Education from './components/Education'
import Campaign from './components/Campaign'
import Market from './components/Tour'
import Quiz from './components/Quiz'

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
 
  return (
    <>
  
      <div className=' border  w-[1518px] font-serif  min-h-screen  '>
   
          <NavBar isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />
    

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Login' element={<Login setIsLoggedIn={setLoggedIn} />} />
          <Route path='/Dashboard' element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Dashboard />
            </PrivateRoute>
          } />
          <Route path='/SignUp' element={<SignUp setIsLoggedIn={setLoggedIn} />} />
          <Route path='/Education' element={<Education/>} />
          <Route path='/Event' element={<Campaign/>}/>
          <Route path='/Market' element={<Market/>}/>
          <Route path='/Quiz' element={<Quiz/>}></Route>
        </Routes>


      </div>
    </>
  )
}

export default App
