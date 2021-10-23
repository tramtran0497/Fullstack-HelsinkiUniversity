import React, { useState } from "react";

const App = () =>{
  const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  // const point = [
  //   0,0,0,0,0,0,0
  // ]
  // const point = {
  //   0:1,
  //   1:3,
  //   2:4,
  //   3:2,
  //   4:1,
  //   5:3,
  //   6:2
  // }
  // const copy = {...point}
  // const handleVote = ()=>{
  //   return copy[selected]+=1
  // }
  const [point, setPoint] = useState({
    0:1,
    1:3,
    2:4,
    3:2,
    4:1,
    5:3,
    6:2
  })
  const handleVote = ()=>{
    const newValue = {
      ...point,
      [selected]: point[selected]+1,
      // 0: point[0] + 1
    }
    setPoint(newValue)
  }
  const [selected, setSelected] = useState(0)
  const random = Math.round(Math.random()*6)
  console.log(random,selected,point)
  
  return(
    <div>
      <p>{anecdotes[selected]}</p>
      <p>has {point[selected]} votes </p>
      <button onClick={handleVote}>vote</button>
      <button onClick={()=> setSelected(random)}>next anecdotes</button>
    </div>
  )
}
export default App;
