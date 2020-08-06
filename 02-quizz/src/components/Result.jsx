import React from 'react'

export default function Result (props) {


    return (
        <div className="container p-4 w-25 rounded-sm justify-content-center text-center my-4 bg-warning">
  <h2>You scored {props.score} out of 5 correct answers!</h2>
  <button type="button" className="btn btn-success" onClick={props.playAgain}>Play again! </button>
  </div>
    )
}