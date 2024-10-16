import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
 

  return (
    <>
      {
        // cars.map((item,index)=>{
        //   <div key={index} style={{width:'33%', borderRadius: '5px',border:'2px solid grey' }}>
        //   <img style={{width:'100%' }} src="https://media.architecturaldigest.com/photos/63079fc7b4858efb76814bd2/16:9/w_4000,h_2250,c_limit/9.%20DeLorean-Alpha-5%20%5BDeLorean%5D.jpg" alt="" />

        //    <h1 style={{ color: 'darkblue', fontSize: '24px' }}>{item.name}</h1>
        //    <p style={{ fontStyle: 'italic', margin: '10px 0' }}>{item.model}</p>
        //  </div>
        // })
        <div>
          {cars.map((item, index) => {
            return(
            <div
              key={index}
              style={{
                width: "33%",
                borderRadius: "5px",
                border: "2px solid grey",
              }}
            >
              <img
                style={{ width: "100%" }}
                src="https://media.architecturaldigest.com/photos/63079fc7b4858efb76814bd2/16:9/w_4000,h_2250,c_limit/9.%20DeLorean-Alpha-5%20%5BDeLorean%5D.jpg"
                alt=""
              />

              <h1 style={{ color: "darkblue", fontSize: "24px" }}>
                {item.name}
              </h1>
              <p style={{ fontStyle: "italic", margin: "10px 0" }}>
                {item.model}
              </p>
            </div>
            )
          })}
        </div>
      }
    </>
  );
}

export default App;
