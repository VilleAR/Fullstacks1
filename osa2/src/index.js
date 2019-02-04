import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const persons = [
  {
    id: 1,
    name: 'Ville Puurunen',
    number: '0940'
 
  }
]

ReactDOM.render(
  <App persons={persons} />,
  document.getElementById('root')
)
