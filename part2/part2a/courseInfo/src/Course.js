import React from "react";

const Header = (props)=>{
    return(
      <div>
        <h2>{props.course}</h2>
      </div>
    );
  }
  
  const Part = ({name, exercise})=>{
    return(
      <div>
        <p>{name} {exercise}</p>
      </div>
    );
  }
  
  const Content = ({part})=>{
    return(
      <div>
        <Part name={part.name} exercise = {part.exercise} />
      </div>
    );
  }
  
  const Course = ({name, parts})=>{
    return(
      <div>
        <Header course={name} />
        {parts.map(part =><Content key={part.id} part={part} />)}
      </div>
    )
  }

  export default Course