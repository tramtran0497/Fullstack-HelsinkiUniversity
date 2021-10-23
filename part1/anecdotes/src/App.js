import React, { useEffect, useState } from "react";

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
  const [point, setPoint] = useState({
    0:1,
    1:3,
    2:4,
    3:2,
    4:1,
    5:3,
    6:9
  })
  const [maxVotePos, setMaxVotePos] = useState(0);
  const handleVote = ()=>{
    const newValue = {
      ...point,
      [selected]: point[selected]+1
    } 
    setPoint(newValue)

    const maxPos = findMaxVotePos()
    setMaxVotePos(maxPos)

  }
  const [selected, setSelected] = useState(0)
  const random = Math.round(Math.random()*6)

  useEffect(() => {
    const maxPos = findMaxVotePos()
    setMaxVotePos(maxPos)  
  })
  const findMaxVotePos = () => {
    const _newArr = Object.entries(point)
    let _maxPos = 0
    let _maxVote = _newArr[_maxPos][1]
    // let num = 0
    for(let i = 1; i < _newArr.length; i++){
      if(_newArr[i][1] > _maxVote){
        _maxVote = _newArr[i][1]
        _maxPos = i
      }  
    }
    return _maxPos;
  }
  return(
    <div>
      <h4>Anecdote of tha day</h4>
      <p>{anecdotes[selected]}</p>
      <p>has {point[selected]} votes </p>
      <button onClick={handleVote}>vote</button>
      <button onClick={()=> setSelected(random)}>next anecdotes</button>
      <h4>Anecdote with most votes</h4>
      <p>{anecdotes[maxVotePos]}</p>
      <p>has {point[maxVotePos]} votes</p>
    </div>
  )
}
export default App;
