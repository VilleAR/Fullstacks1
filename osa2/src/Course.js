import React from 'react'


const Header = props =>
  <h1>{props.course.name}</h1>

const Total = props => {
  var total = props.parts.reduce(function(sum, part) {
    console.log("hello", sum, "+", part.exercises)
    return sum + part.exercises
  }, 0)
  
  
  return <p>yhteensä {total} tehtävää</p>
}
const Course = ({ course, parts }) => (
    <div>
     <Header course={course} />
     <Content parts ={parts}/>
     <Total parts={parts}/>
    </div>
  )

const Part = props =>
  <p>{props.part.name}, {props.part.exercises}</p>

const Content = props => (
    <div>
    {props.parts.map((part, i) => {
        return (<Part key={i} part={part} />) 
     })}
    </div>
)
export default Course
