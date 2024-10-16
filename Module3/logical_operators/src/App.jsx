import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const[islogin,setupIslogin]=useState(true)

  return (
    <>
     
      <h1>Short Circut Evaluation</h1>
      <button onClick={()=>{
        setupIslogin(!islogin)
        console.log(islogin)
      }}>Toggle Login State</button>
      <p>{islogin&&'loging'}</p>
    </>
  )
}

export default App
