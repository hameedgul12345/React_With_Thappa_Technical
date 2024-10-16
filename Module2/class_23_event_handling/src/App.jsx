import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  //Simple Function
  function clickButton() {
    alert("Button clicked Simple");
  }
  {/* Arrow Function */}
  const clickButtonArrow=()=>{
    alert("Button clicked Arrow");
  }
   {/* Rendering Arrow Function without Calling */}
  const clickButtonArrowWithoutClick=()=>{
    alert("Button clicked Arrow Without Click");
  }
  //Simple Function Rendering from arrow 
  function clickButtonWithArrowFun(event) {
    alert("Button clicked Simple");
  }
  return (
    <>
      <h1>Event Handling</h1>
      {/* Simple Function */}
      <button onClick={clickButton}>Click Me Simple</button>
      {/* Arrow Function */}
      <button onClick={clickButtonArrow}>Click Me Arrow</button>
       {/* Rendering Arrow Function without Calling */}
       <button onClick={clickButtonArrowWithoutClick()}>Rendering Arrow Function without Calling</button>
       {/* Rendering Function within Arrow Function  */}
       <button onClick={()=>{clickButtonWithArrowFun(event)}}>Rendering Function within Arrow Function </button>
       
      
    </>
  );
}

export default App;
