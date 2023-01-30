import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
const Home = ({ user,handleUser }) => {
  return (
    <>
      <Form className='mx-auto mt-3 p-3 border col-6'>
        <Form.Group className='mb-3'>
          <Form.Control type="text" placeholder="Username" value={user} onChange={handleUser}/>
        </Form.Group>
        <Form.Group>
          <Form.Control type="password" placeholder='Password'/>
        </Form.Group>
        <div className='text-center'>
          <Button className='mt-3 w-75'>Login</Button>
          <Link className='no-account' to="/register">
            <p className='mt-3'>Dont have account? Register!</p>
          </Link>
        </div>
      </Form>
    </>
  )
}

export default Home