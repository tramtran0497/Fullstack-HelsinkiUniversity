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

const Course = ({course})=>{
  return(
    <div>
      <Header course={course.name} />
      {course.parts.map(part =><Content key={part.id} part={part.name} exercise={part.exercises} />)}
    </div>
  )
}

const Total = (props)=>{
  return(
    <div>
      <p>Number of exercises {props.exercises.reduce((sum,item)=> sum + item)}</p>
    </div>
  );
}

function App() {
  const course = {
    id:1,
    name:'Half Stack application development',
    parts: [
  {
    name: 'Fundamentals of React',
    exercises:10,
    id:1
  },
  {
    name: 'Using props to pass data',
    exercises:7,
    id:2
  },
  {
    name: 'State of a component',
    exercises:14,
    id:3
  }
]}
  return (
    <div>
      {/* <Header course={course.name} />
      {course.parts.map(part => {
        return <Content part={part.name} exercise = {part.exercises}/>
      })} */}
      <Course key={course.id} course={course} />
      {/* <Total exercises={course.parts.map(part => part.exercises)} /> */}
    </div>
  );
}

export default App;
