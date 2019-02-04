import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) =>
    <button onClick={props.handleClick}>{props.text}</button>

const Statistics = (props) => {
    if ((props.v1 + props.v2 + props.v3) === 0) {
        return (
            <div>
                <h1>statistiikka</h1>
                <p> Ei yhtään palautetta annettu</p>
            </div>
            
           
        )
    }
    return (
        <div>
            <h1>statistiikka </h1>
            <p>hyvä {props.v1}</p>
            <p>neutraali {props.v2}</p>
            <p>huono {props.v3}</p>
            <p>yhteensä {props.v1 + props.v2 + props.v3}</p>
            <p>keskiarvo {(props.v1 + props.v2+ props.v3)/3}</p>
            <p>positiivisia {props.v1/(props.v1 + props.v2 + props.v3)}</p>
        </div>
    )
}
const App = (props) => {
    const [value1, setValue] = useState(0)
    const [value2, setValue2] = useState(0)
    const [value3, setValue3] = useState(0)
   
  
    const setToValue = (newValue) => {
        setValue(newValue)
    }
    const setToValue2 = (newValue) => {
        setValue2(newValue)
    }
    const setToValue3 = (newValue) => {
        setValue3(newValue)
    }
  
    return (
      <div>
        <h1>anna palautetta</h1>
        
        <p></p>
        <Button handleClick={() => setToValue(value1 + 1)} text ='hyvä' />
        <Button handleClick={() => setToValue2(value2 + 1)} text ='neutraali' />
        <Button handleClick={() => setToValue3(value3 + 1)} text ='huono' />
 
        <p></p>
        <Statistics v1 = {value1} v2 = {value2} v3 = {value3}/>
      </div>
    )
  }

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)