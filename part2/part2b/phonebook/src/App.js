import React, { useState } from 'react';
import Person from './Person'
import Filter from './Filter';
import PersonForm from './PersonForm';

const App = (props) =>{
  const [persons, setPersons] = useState(props.persons)
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
      return alert(`${newName} is already added to phonebook`)
    } 
    // finding max id
    let max = 0
    const findMax = () =>{
      for(let i=0; i< persons.length; i++){
        if(persons[i].id > max){
          console.log("id", persons[i].id)
          max = persons[i].id
        } 
      }
      return max
    }
    const newObj = {
      // plus 1 for new info
        id: findMax() + 1,
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
      <Filter value={search} onChange={handleChangeSearch} />
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
      <h3>add a new</h3>
      <PersonForm onSubmit={addNewInfo} valueName={newName} onChangeName={handleChangeName} valuePhone={newPhone} onChangePhone={handleChangePhone} />
      <h3>Numbers</h3>
      {persons.map(person => <Person key={person.id} name={person.name} number={person.number} />)}
    </div>
  )
}



export default App;
