import { Link, Navigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import loginService from '../services/login'
import { useState } from 'react'
import { BsChatRightText } from 'react-icons/bs'
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
      <div className='home'>
        <Form className='login-form mx-auto p-3 col-12 col-sm-9 col-md-6' onSubmit={login}>
          <div className='text-center'>
            <BsChatRightText size={80}/>
            <p>ChatDat</p>
          </div>
          <Form.Group className='mb-3'>
            <Form.Control type="text" placeholder="Username" value={username} onChange={handleUsername}/>
          </Form.Group>
          <Form.Group>
            <Form.Control type="password" placeholder='Password' value={password} onChange={handlePassword}/>
          </Form.Group>
          <div className='text-center'>
            <Button type='submit' variant='dark' className='login-btn mt-3 w-75'>Login</Button>
            <Link className='no-account' to="/register">
              <p className='mt-3'>Dont have account? Register!</p>
            </Link>
          </div>
        </Form>
      </div>
    )
  }
}

export default Home