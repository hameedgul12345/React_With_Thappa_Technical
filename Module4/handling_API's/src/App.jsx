import { useEffect, useState } from 'react'
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [api, setAPI] = useState([]);
  useEffect(() => {
    // const headers = new Headers({
    //   "Content-Type": "application/json",
    //   "x-api-key": "DEMO-API-KEY"
    // });

    // var requestOptions = {
    //   method: 'GET',
    //   headers: headers,
    //   redirect: 'follow'
    // };

    //fetch("https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=10")
    // fetch("//fetch("https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=10")
    fetch("https://api.thedogapi.com/v1/images/search?limit=100&has_breeds=true")
      .then((response) => response.json())
       .then((result) => setAPI(result))
      //.then((result) => console.log(result))
      
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <>
      <h1>Handle API's</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {api.map((dog, index) => (
                    <img
                        key={index} // Use index as key; consider a unique identifier in real apps
                        src={dog.url}
                        alt="A random dog"
                        style={{ width: '300px', margin: '10px' }}
                    />
                ))}
            </div>
      
    </>
  );
}

export default App;
// import React, { useEffect, useState } from 'react';

// function App() {
//     const [dogData, setDogData] = useState([]); // State to hold the dog data

//     useEffect(() => {
//         fetch("https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=10")
//             .then(response => response.json())
//             .then(data => {
//                 const dogsWithBreed = data.map(
//                   (dog,index)=> ({
//                     url: dog.url,
//                     breed: dog.breeds[index] ? dog.breeds[index].name : 'Unknown Breed', // Get breed name if available
//                 }));
//                 setDogData(dogsWithBreed); // Store the formatted data in state
//             })
//             .catch(error => console.error('Error fetching data:', error));
//     }, []);

//     return (
//         <div>
//             <h1>Random Dog Images</h1>
//             <div style={{ display: 'flex', flexWrap: 'wrap' }}>
//                 {dogData.map((dog, index) => (
//                     <div key={index} style={{ margin: '10px', textAlign: 'center' }}>
//                         <img
//                             src={dog.url}
//                             alt={`A random ${dog.breed}`}
//                             style={{ width: '300px' }}
//                         />
//                         <p>{dog.breed}</p> {/* Display breed name */}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default App;
