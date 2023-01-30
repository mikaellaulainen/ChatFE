import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Logged from './pages/Logged'
import Register from './pages/Register'

const App = () => {
  const [user,setUser] = useState('')
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home user={user} handleUser={({ target }) => setUser(target.value)}/>}/>
          <Route path="logged" element={<Logged user={user}/>}/>
          <Route path="register" element={<Register/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App