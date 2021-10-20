import React from 'react';

const Header = (props)=>{
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  );
}

const Part = (props)=>{
  return(
    <div>
      <p>{props.part} {props.exercise}</p>
    </div>
  );
}

const Content = (props)=>{
  return(
    <div>
      <Part part={props.part} exercise = {props.exercise} />
    </div>
  );
}

const Total = (props)=>{
  return(
    <div>
      <p>Number of exercises {props.exercises.reduce((sum,item)=> sum + item)}</p>
    </div>
  );
}

function App() {
  const course = 'Half Stack application development'
  const parts= [
  {
    name: 'Fundamentals of React',
    exercises:10
  },
  {
    name: 'Using props to pass data',
    exercises:7
  },
  {
    name: 'State of a component',
    exercises:14
  }
]
  return (
    <div>
      <Header course={course} />
      {parts.map(part => {
        return <Content part={part.name} exercise = {part.exercises}/>
      })}
      <Total exercises={parts.map(part => part.exercises)} />
    </div>
  );
}

export default App;
