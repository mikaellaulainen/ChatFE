import { Link } from 'react-router-dom'

const Home = ({ user,handleUser }) => {
  return (
    <>
      <form>
        <input type="text" placeholder="Username" value={user} onChange={handleUser}/>
        <input type="password" placeholder='Password'/>
        <Link to="/logged">
          <button>Login</button>
        </Link>
        <Link to="/register">
          <p>Dont have account? register</p>
        </Link>
      </form>
    </>
  )
}

export default Home