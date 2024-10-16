import React from 'react'

function AcceptEventAsProps(props) {
  return (
   <button onClick={props.onClick}>Child Click</button>
  )
}

export default AcceptEventAsProps