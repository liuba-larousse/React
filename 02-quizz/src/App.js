import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header'
import Card from './components/Card'
import Result from './components/Result'
import qBank from './components/qBank'



function App() {

  const [questions, setQuestions] =useState([])
  const [score, setScore] =useState(0)
  const [responses,setResponses] = useState(0)

  useEffect(() => {
    // Render 5 questions from API
    qBank().then(newQuestions => {
setQuestions(
  newQuestions
)})
  },[]);

  function computeAnswer(answer, correctAnswer) {
    if (answer===correctAnswer) {
setScore(score + 1)
    }
    setResponses(responses < 5 ? responses +1 : 5)
  }

  function playAgain() {
    console.log("click")
    qBank().then(newQuestions => {
      setQuestions(
        newQuestions
      )})
      setScore(0)
      setResponses(0)
  }


  return (
    <div className="App">
    <Header />
    <ul className="list-group my-4">
    {(questions.length > 0 &&
    responses <5 ) &&
    questions.map(q=>{
      return(
      <Card 
        key= {q.questionId}
        question={q.question}
        answers={q.answers}
        selected={ans=>computeAnswer(ans, q.correct)}
      />)
    })
    }
  </ul>

  {responses=== 5 ? 
    <Result 
score={score}
playAgain={playAgain}
    />
: null}
  
    </div>
  );
}

export default App;
