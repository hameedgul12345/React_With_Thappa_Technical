import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  const countIcnrement=()=>{
    setCount(count+1)
  }
  return (
    <>
      
      <h1>State Hook in React</h1>
      <h1>{count}</h1>
      <button onClick={countIcnrement}>Start</button>
    </>
  )
}

export default App
// State 