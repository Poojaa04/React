import { useState } from 'react'
import './App.css'

function App() {
  
  const [counter, setCounter] = useState(10)

  const addValue = ()=>{
    if(counter<20)
     setCounter(counter + 1)
    // else
    // setCounter(counter)
  }

  const removeValue = ()=>{
    if(counter>0)
    setCounter(counter - 1)
  
  }
   
  return (
    <>
      <h1>Chai aur react | 31st december 2024 | video 5</h1>
      <h2>Counter {counter}</h2>
      <button
      onClick={addValue}>Add value</button>
      <br />
      <button
      onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
