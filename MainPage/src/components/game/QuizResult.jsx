import React from 'react'
import './QuizResult.css';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function QuizResult(props) {
  useEffect(() => {
    const pointsEarned = props.score * 10;
    toast.success(`Congratulations! You earned ${pointsEarned} points!`);
  }
    , []);
  return (
    <>
      <div className='show-score'>
        Your Score:{props.score}<br />
        Total Score:{props.totalScore}
      </div>
      <button id="next-button" onClick={props.tryAgain}>Try Again</button>
    </>
  )
}

export default QuizResult;