// import { useState } from 'react'
import './App.css'
import EmployeeForm from './components/employee-form/EmployeeForm'
import Employee from './model/Employee'

// import Coffee from './model/Coffee'
// import CoffeeForm from './components/coffee-form/CoffeeForm'

function App() {
  return (
    <EmployeeForm submitter={(empl: Employee) => console.log(empl)}/>
    //<CoffeeForm submitter={(cafe1: Coffee) => console.log(cafe1)}/>
  )
}

export default App
