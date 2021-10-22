import { useState } from 'react';
import './App.css';

const Button = ({onClick, text})=>{
  return(
      <button onClick={onClick}>{text}</button>
  )
}

const StatisticLine = ({text, value})=>{
  return(
    <p>{text} {value}</p>
  )
}

const Statistics = ({good,neutral,bad,all,ave,pos})=>{
  if(!good && !neutral && !bad){
    return (
      <p>No feedback given</p>
    )
  } 
  return(
    <div>
      <StatisticLine text='Good' value={good} />
      <StatisticLine text='Neutral' value={neutral} />
      <StatisticLine text='Bad' value={bad} />
      <StatisticLine text='All' value={all} />
      <StatisticLine text='Average' value={ave} />
      <StatisticLine text='Positive' value={pos} />
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
      <Button onClick={()=>setGood(good+1)} text='Good' />
      <Button onClick={()=>setNeutral(neutral+1)} text='Neutral' />
      <Button onClick={()=>setBad(bad+1)} text='Bad' />
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} ave={ave} pos={pos} />
    </div>
  )
}

export default App;
