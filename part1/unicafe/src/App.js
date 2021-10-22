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
      <table>
        <tr>
          <td><StatisticLine text='Good' /></td>
          <td><StatisticLine value={good} /></td>
        </tr>
        <tr>
          <td><StatisticLine text='Neutral' /></td>
          <td><StatisticLine value={neutral} /></td>
        </tr>
        <tr>
          <td><StatisticLine text='Bad' /></td>
          <td><StatisticLine value={bad} /></td>
        </tr>
        <tr>
          <td><StatisticLine text='All' /></td>
          <td><StatisticLine value={all} /></td>
        </tr>
        <tr>
          <td><StatisticLine text='Average' /></td>
          <td><StatisticLine value={ave} /></td>
        </tr>
        <tr>
          <td><StatisticLine text='Positive' /></td>
          <td><StatisticLine value={pos} /></td>
          <td>%</td>
        </tr>
          {/* <StatisticLine text='Good' value={good} />
          <StatisticLine text='Neutral' value={neutral} />
          <StatisticLine text='Bad' value={bad} />
          <StatisticLine text='All' value={all} />
          <StatisticLine text='Average' value={ave} />
          <StatisticLine text='Positive' value={pos} /> */}
      </table>
     
    </div>
    
  )
}

const App = ()=>{
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  
  
  const all = good + neutral + bad
  const ave = Math.round(((good + bad * -1)/all)*10)/10
  const pos = ((good/all)*100).toFixed(1)
  

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
