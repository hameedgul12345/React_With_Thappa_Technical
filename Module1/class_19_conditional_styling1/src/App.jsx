import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const obj=[
   {
    h:1,
    htext:'Heading 1',
    hColor:'Blue'
   },
   {
    h:2,
    htext:'Heading 2',
    hColor:'Green'
   },
   {
    h:3,
    htext:'Heading 3',
    hColor:'Blue'
   },
   {
    h:4,
    htext:'Heading 4',
    hColor:'Green'
   },
   {
    h:5,
    htext:'Heading 5',
    hColor:'Blue'
   },
   {
    h:6,
    htext:'Heading 6',
    hColor:'Green'
   },
   
  ]
  return (
    <>
     {
      obj.map((item,index)=>{
        return(
        
           <h1 key={index}>{obj.htext}</h1>
        
        )
      })
     }
    </>
  )
}

export default App
