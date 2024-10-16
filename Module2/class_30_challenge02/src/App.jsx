import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const users=[
    {
      name:'Hameed gul',
      age:'23',
    },
    {
      name:'Hameed gul',
      age:'23',
    },
    {
      name:'Hameed gul',
      age:'23',
    }
  ]     
  return (
    <>
{
  users.map((item,index)=>{
    return(
      <>
      <h1 key={index}>{item.name}</h1>
      <h2 key={index}>{item.age}</h2>
      </>
    )
  })
}
      
    </>
  )
}

export default App
