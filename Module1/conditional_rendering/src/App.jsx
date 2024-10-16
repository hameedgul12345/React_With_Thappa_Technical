import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  var age = 16;
  // First Method
  // if (age >= 18) {
  //   return (
  //     <>
  //       <h1>You Are Eligible</h1>
  //     </>
  //   );
  // } else {
  //   return (
  //     <>
  //       <h1>You Are Not Eligible</h1>
  //     </>
  //   );
  // }
  //Secod Method
  <h1>{age >= 18 ? "You Are Eligible" : "You Are Not Eligible"}</h1>;
}

export default App;
