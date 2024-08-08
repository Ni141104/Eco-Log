import { useState } from 'react'
import Game from './Game'
// import './Quiz.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Quiz() {


  return (
    <>
      <ToastContainer />
      <Game></Game>
    </>
  )
}

export default Quiz;
