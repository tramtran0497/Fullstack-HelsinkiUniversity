import { useState } from 'react';
import './App.css';

const Statistics = ({good,neutral,bad,all,ave,pos})=>{
  if(!good && !neutral && !bad){
    return (
      <p>No feedback given</p>
    )
  } 
  return(
    <div>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      <p>All {all}</p>
      <p>Average {ave}</p>
      <p>Positive {pos} %</p>
    </div>
    
  )
}

const App = ()=>{
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  
  
  const all = good + neutral + bad
  const ave = (good + bad * -1)/all
  const pos = (good/all)*100

  return(
    <div>
      <h2>give feedback</h2>
      <button onClick = {()=>setGood(good+1)}>good</button>
      <button onClick = {()=>setNeutral(neutral+1)}>neutral</button>
      <button onClick = {()=>setBad(bad+1)}>bad</button>
      <br />
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} ave={ave} pos={pos} />
    </div>
  )
}

export default App;
