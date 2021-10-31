import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import axios from 'axios';

// const persons =[
//   { name: 'Arto Hellas', number: '040-123456', id: 1 },
//   { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
//   { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
//   { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
// ]

// const promise = axios.get("http://localhost:3001/persons")
// promise
//   .then(response => 
//     console.log("FFFFFFF",response.data))

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
