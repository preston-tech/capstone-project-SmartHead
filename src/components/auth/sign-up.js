import React, { useState } from 'react';
import '../../styles/signup.css';
import axios from "axios";

export default function SignUp() {

  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")

  function createAdmin(e) {
    e.preventDefault()

    axios.post("https://localhost:5000", {
      email,  
      password
    })
    .then(response => {
      console.log(response)
      setDidCreate(false)
    }).catch(error => {
      console.log(error)  
    })
    return <div>Welcome Smart Head!</div>
  }

  return (
    <div className="signup-wrapper">
        {didCreate ?
        <form className="create-admin-form">
          <input 
            type="text"
            placeholder="email"
            onChange={e => setEmail(e.target.value)}
            value={email}
          />

          <input 
            type="text"
            placeholder="password"
            onChange={e => setPassword(e.target.value)}
            value={password}
          />
          <button onClick={e => createAdmin(e)}>Create Admin</button>
        </form> : <div className="form-wrapper">Account created, welcome</div>}
    </div>
  )
}