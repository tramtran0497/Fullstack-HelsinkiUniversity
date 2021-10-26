import React, { useState } from 'react';

const App = () =>{
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone]= useState('')
  const [search, setSearch] = useState('')

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
      // create new id??
        name: newName,
        number: newPhone
    }
    setPersons(persons.concat(newObj))
    setNewName('Adding new name!')
  }
  const handleChangeSearch = (event) =>{
    setSearch(event.target.value)
  }
  
  return(
    <div>
      <h2>Phonebook</h2>
      <div>
        <form>
          <div>
            filter shown with <input value = {search} onChange={handleChangeSearch}/>
            {persons
              .filter(person => {
                if(search === ""){
                  return ""
                } else if(person.name.toLowerCase().includes(search.toLowerCase())){
                  return persons
                }
                return false
              })
              .map(person => <p key={person.id}>{person.name}</p>)
            }
          </div>
        </form>
      </div>
      <h2>add a new</h2>
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
      {persons.map(person => <p key = {person.id} >{person.name} {person.number}</p>)}
    </div>
  )
}



export default App;
