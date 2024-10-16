
//Import Defualt 
//import anyname from "./Components/Practice";
// //OR
// import Practice from "./Components/Practice";

// function App() {
//   return (
//     <>
//       <h1>Vite + React</h1>
//       <Practice></Practice>
//     </>
//   );
// }

// export default App;
//Exact name will necessary


import Header, {Practice,Practice1} from "./Components/Practice";

function App() {
  return (
    <>
      <h1>Vite + React</h1>

      <Practice></Practice>
      <Header></Header>
    </>
  );
}

export default App;
