import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Parent from "./Components/Parent";
import Child from "./Components/Child";

function App() {
  const [inputValue, setInputValue] = useState();

  return (
    <>
      <h1>Lifting State up</h1>
      <Parent inputValue={inputValue} setInputValue={setInputValue}/>
      <Child inputValue={inputValue}/>
    </>
  );
}

export default App;
