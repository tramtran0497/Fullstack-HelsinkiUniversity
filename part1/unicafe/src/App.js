import { useState } from 'react';
import './App.css';

const App = ()=>{
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  
  const calNeutral = neutral * 0
  const calBad = bad * -1
  const all = good + neutral + bad

  return(
    <div>
      <h2>give feedback</h2>
      <button onClick = {()=>setGood(good+1)}>good</button>
      <button onClick = {()=>setNeutral(neutral+1)}>neutral</button>
      <button onClick = {()=>setBad(bad+1)}>bad</button>
      <br />
      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {(good+ calNeutral + calBad)/all}</p>
      <p>positive {(good/all)*100} %</p>
    </div>
  )
}

export default App;
