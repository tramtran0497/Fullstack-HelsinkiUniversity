import React from 'react';
import Course from './Course'

const Total = (props)=>{
  return(
    <div>
      <p><strong>Total of {props.exercises.reduce((sum,item)=> sum + item)} exercises</strong></p>
    </div>
  );
}

function App() {
  const course = [
  {
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
    },
    {
    name: 'Redux',
    exercises:11,
    id:4
    }]
  },
  {
    name: 'Node.js',
    id: 2,
    parts: [
      {
        name: 'Routing',
        exercises: 3,
        id: 1
      },
      {
        name: 'Middlewares',
        exercises: 7,
        id: 2
      }
    ]
  }

]
  return (
    <div>
      {/* <Header course={course.name} />
      {course.parts.map(part => {
        return <Content part={part.name} exercise = {part.exercises}/>
      })} */}
      <h1>Web development curriculum</h1>
      {course.map(each => {
        return(
          <div key={each.id}>
            <Course  name={each.name} parts={each.parts} />
            <Total  exercises={each.parts.map(part => part.exercises)} />
          </div>
        )
      })}
      {/* <Course key={course.id} course={course} /> */}
      {/* {course.map(each =>{
        return <Total exercises={each.parts.map(part => part.exercises)} />
      })} */}
      {/* <Total exercises={course.parts.map(part => part.exercises)} /> */}
    </div>
  );
}
  

export default App;
