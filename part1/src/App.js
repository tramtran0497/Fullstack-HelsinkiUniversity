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
      <p>Number of exercises {props.exercises}</p>
    </div>
  );
}

function App() {
  const course = 'Half Stack application development'
  const part1= {
    name: 'Fundamentals of React',
    exercises:10
  }
  const part2= {
    name: 'Using props to pass data',
    exercises:7
  }
  const part3= {
    name: 'State of a component',
    exercises:14
  }
  return (
    <div>
      <Header course={course} />
      <Content part={part1.name} exercise = {part1.exercises}/>
      <Content part={part2.name} exercise = {part2.exercises}/>
      <Content part={part3.name} exercise = {part3.exercises}/>
      <Total exercises={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  );
}

export default App;
