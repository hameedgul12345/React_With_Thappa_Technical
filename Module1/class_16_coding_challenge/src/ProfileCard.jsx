import React from 'react'

function ProfileCard(props) {
  return (
    <div> 
        <h1>{props.name}</h1>
        <h3>{props.age}</h3>
        <h3>{props.contact}</h3>
    <h1>{props.greeting}</h1>
    <h1>{props.children}</h1>
    </div>
  )
}

export default ProfileCard