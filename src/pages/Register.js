import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Navigate } from 'react-router-dom'
import registerService from '../services/register'



const Register = () => {
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const [email,setEmail] = useState('')
  const [registered,setRegistered] = useState(false)
  const registerNewAcc = (e) => {
    e.preventDefault()
    const user = {
      username: username,
      password:password,
      email:email
    }
    registerService.createAcc(user).then(res => {
      console.log(res)
      setRegistered(true)
    })
      .catch(error => {
        alert(error.response.data.error)
      })
  }
  if(registered){
    return(
      <Navigate to="/" replace/>
    )
  }
  return (
    <>
      <p className='text-center'>Register new account!</p>
      <Form className='mx-auto border col-6 p-3' onSubmit={registerNewAcc}>
        <Form.Label htmlFor='uname'>Username:</Form.Label>
        <Form.Control value={username} onChange={({ target }) => setUsername(target.value)} type="text" placeholder='Username'/>
        <Form.Label htmlFor='email'>Email:</Form.Label>
        <Form.Control value={email} onChange={({ target }) => setEmail(target.value)} type="email" placeholder='Email'/>
        <Form.Label htmlFor='pword'>Password:</Form.Label>
        <Form.Control value={password} onChange={({ target }) => setPassword(target.value)} type="password" placeholder="password"/>
        <Button className='mt-3' variant='dark' type='submit'>Register</Button>
      </Form>
    </>
  )
}

export default Register