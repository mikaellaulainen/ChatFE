import React, { useState } from 'react'
import registerService from '../services/register'



const Register = () => {
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const [email,setEmail] = useState('')
  const registerNewAcc = (e) => {
    e.preventDefault()
    const user = {
      username: username,
      password:password,
      email:email
    }
    registerService.createAcc(user).then(res => {
      console.log(res)
    })
      .catch(error => {
        alert(error.response.data.error)
      })
  }

  return (
    <>
      <p>Register</p>
      <form onSubmit={registerNewAcc}>
        <label htmlFor='uname'>Username:</label>
        <input value={username} onChange={({ target }) => setUsername(target.value)} type="text" placeholder='Username'/>
        <label htmlFor='email'>Email:</label>
        <input value={email} onChange={({ target }) => setEmail(target.value)} type="email" placeholder='Email'/>
        <label htmlFor='pword'>Password:</label>
        <input value={password} onChange={({ target }) => setPassword(target.value)} type="password" placeholder="password"/>
        <button>Register</button>
      </form>
    </>
  )
}

export default Register