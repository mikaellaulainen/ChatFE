import { Link, Navigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import loginService from '../services/login'
import { useState } from 'react'
const Home = ({ username,handleUsername, password, handlePassword }) => {
  const [user,setUser] = useState(null)
  const login = async (e) => {
    e.preventDefault()
    console.log(`Logging in as ${username}`)
    try {
      const user = await loginService.login({
        username, password
      })
      setUser(user)
    } catch(exception) {
      console.log('Wrong username or password')
    }
  }
  if(user){
    return(
      <Navigate to="/logged" replace/>
    )
  }else{
    return (
      <>
        <Form className='mx-auto mt-3 p-3 border col-6' onSubmit={login}>
          <Form.Group className='mb-3'>
            <Form.Control type="text" placeholder="Username" value={username} onChange={handleUsername}/>
          </Form.Group>
          <Form.Group>
            <Form.Control type="password" placeholder='Password' value={password} onChange={handlePassword}/>
          </Form.Group>
          <div className='text-center'>
            <Button type='submit' className='mt-3 w-75'>Login</Button>
            <Link className='no-account' to="/register">
              <p className='mt-3'>Dont have account? Register!</p>
            </Link>
          </div>
        </Form>
      </>
    )
  }
}

export default Home