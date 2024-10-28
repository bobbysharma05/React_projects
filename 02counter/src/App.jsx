import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setcounter] = useState(5)
  
  const addValue = () => {
    if(counter < 20) setcounter(counter + 1)
  }
  const removeValue = () => {
    if(counter > 0) setcounter(counter - 1)
  }
  return (
    <>
      <h1>Project Counter</h1>
      <h2>counter value: {counter}</h2>

      <button onClick={addValue}>Add Value</button><br/><br/>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
