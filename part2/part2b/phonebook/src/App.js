import React, { useState } from 'react';

const App = () =>{
  const [persons, setPersons] = useState([
    {name: "Arto Hellas",
     number: '040-1234567'}
  ])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone]= useState('')

  const handleChangeName = (event)=>{
    setNewName(event.target.value)
  }
  const handleChangePhone = (event)=>{
    setNewPhone(event.target.value)
  }

  const addNewInfo = (event)=>{
    event.preventDefault()
    if(persons.find(person => person.name === newName)){
      console.log(persons.indexOf(newName))
      return alert(`${newName} is already added to phonebook`)
    } 
    const newObj = {
        name: newName,
        number: newPhone
    }
    setPersons(persons.concat(newObj))
    setNewName('Adding new name!')
  }
  return(
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewInfo}>
        <div>
          name: <input value={newName} onChange={handleChangeName}/>
        </div>
        <div>
          number: <input value={newPhone} onChange={handleChangePhone}/>
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <p>{person.name} {person.number}</p>)}
    </div>
  )
}



export default App;
