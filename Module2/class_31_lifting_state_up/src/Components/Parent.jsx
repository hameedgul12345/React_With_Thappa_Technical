import React from 'react'

function Parent({inputValue,setInputValue}) {
    
  return (
    <input type="text" placeholder='Enter Text' value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
  )
}

export default Parent