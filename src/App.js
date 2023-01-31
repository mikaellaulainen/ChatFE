import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Logged from './pages/Logged'
import Register from './pages/Register'

const App = () => {
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home username={username} handleUsername={({ target }) => setUsername(target.value)} password={password} handlePassword= {({ target }) => setPassword(target.value)}/>}/>
          <Route path="logged" element={<Logged username={username}/>}/>
          <Route path="register" element={<Register/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App