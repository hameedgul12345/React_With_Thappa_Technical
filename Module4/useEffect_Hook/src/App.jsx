import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
 

  useEffect(() => {
    if (count < 5) {
      setCount(prevCount => prevCount + 1);
    }
  }, [count]); 
  return (
    <>
  
      <h1>Use Effect Hooks{count}</h1>
      <button onClick={()=>setCount(count+1)}>Click</button>
      
    </>
  )
}

export default App
