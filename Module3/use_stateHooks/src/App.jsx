import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);
  function takeInput(event) {
    console.log(typeof event.target.value);
    const newValue = event.target.value;
    console.log(typeof Number(newValue));
    setInput(Number(newValue));
  }
  return (
    <>
      <div
        style={{
          margin: "0px auto",
          width: "100%",
          backgroundColor: "white",
          padding: "15px 15px",
          borderRadius: "10px",
        }}
      >
        <h1>Use State Challenge</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "15px 10px",
            justifyContent: "space-around",
            alignItems: "start",
            border: "1px solid black",
            marginBottom: "10px",
            borderRadius: "8px",
          }}
        >
          <h3>Count:{count}</h3>
          <div
            className="input"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <label>Steps</label>
            <input type="number" value={input} onChange={(e) => takeInput(e)} />
          </div>
        </div>
        <div
          className="btns"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <button
            onClick={() => setCount(input > 0 ? count + input : count + 1)}
            style={{
              backgroundColor: "#5224fa",
              border: "none",
              color: "white",
            }}
          >
            Increment
          </button>
          <button
            onClick={() => setCount(input > 0 ? count - input : count - 1)}
            style={{
              backgroundColor: "#5224fa",
              border: "none",
              color: "white",
            }}
            disabled={count <= 0}
          >
            Decrement
          </button>
          <button
            onClick={() => {
              setCount(0);
              setInput(0);
            }}
            style={{
              backgroundColor: "#5224fa",
              border: "none",
              color: "white",
            }}
          >
            Reset
          </button>
        </div>
      </div>

      <h3>Use State in React</h3>
     
    </>
  );
}

export default App;
