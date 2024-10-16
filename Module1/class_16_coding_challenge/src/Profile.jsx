import React from 'react'
import ProfileCard from './ProfileCard'

function Profile() {
  return (
    <div>
   <ProfileCard 
   name="Hameed"
   age={25}
   contact={999998989890}
   greeting={
    <h1>Passing jsx as Props</h1>
   }
   >
  <h1>Passing Nested Elements</h1>
   </ProfileCard>
    </div>
  )
}

export default Profile