import React, { useState } from 'react'
import Person from './components/Person'


const App = (props) => {
  const [ newName, setNewName ] = useState('yeet')
  const [ newNumber, setNewNumber ] = useState('')
  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
        name: newName,
        id: persons.length + 1,
        number: newNumber,
    }
    setPersons(persons.concat(personObject))
    setNewName('')  
    setNewNumber ('')
  } 
 
  const rows = () => persons.map(person => 
    <Person key={person.id} person = {person} number = {person.number}/>
  )
  const [ persons, setPersons] = useState(props.persons) 
  const handleNumberChange = (event) => {
      console.log(event.target.value)
      setNewNumber(event.target.value)
  }
  const handleNameChange = (event) => {
      console.log(event.target.value)
      setNewName(event.target.value)
  }
  return (
    <div>
      <h2>Puhelinluettelo</h2>
      <form onSubmit={addPerson}>
        <div>
         nimi: 
          <input value={newName} onChange={handleNameChange}/>
          <p></p>
          numero:
          <input value ={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
        <button type="submit">lisää</button>
        </div>
      </form>
      <h2>Numerot</h2>
      <ul>{rows()}</ul>
      
    
    </div>
  )

}

export default App