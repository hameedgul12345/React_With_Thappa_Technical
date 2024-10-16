import React from 'react'
import './Register.css'
function Register() {
  return (
    <section className="wrapper">
    <div className="form signup">
      <header>Signup</header>
      <form action="#">
        <input type="text" placeholder="Full name" required="" />
        <input type="text" placeholder="Email address" required="" />
        <input type="password" placeholder="Password" required="" />
        <div className="checkbox">
          <input type="checkbox" id="signupCheck" />
          <label htmlFor="signupCheck">
            I accept all terms &amp; conditions
          </label>
        </div>
        <input type="submit" defaultValue="Signup" />
      </form>
    </div>
    <div className="form login">
      <header>Login</header>
      
    </div>
  </section>
  )
}

export default Register