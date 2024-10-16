import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AcceptEventAsProps from './AcceptEventAsProps'

function App() {
  const [count, setCount] = useState(0)
  const clickHandle=()=>{
    alert('Clicked')
  }
  return (
    <>
      <h1>Passing Event As Props</h1>   
      <button onClick={clickHandle}>Click</button> 
      <AcceptEventAsProps onClick={clickHandle}/>
      {/* <AcceptEventAsProps/>
       */}
    </>
  )
}

export default App
