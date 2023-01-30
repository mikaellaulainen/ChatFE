import React, { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import Message from '../components/Message'
import chatService from '../services/chatting'

const Logged = ({ user }) => {
  const [messageToSend,setMessageToSend] = useState('')
  const [messages,setMessages] = useState([])
  useEffect(() => {
    chatService.getAll().then(res => {
      console.log(res.data)
      setMessages(res.data)
    })
  }, [])

  const sendMessage = (e) => {
    e.preventDefault()
    console.log(`Sending message ${messageToSend}`)
    const messageObject = {
      user: user,
      message: messageToSend
    }
    chatService.sendMessage(messageObject).then(res => {
      console.log(res)
      setMessages(messages.concat(res))
      setMessageToSend('')
    })
  }
  if (user === '') {
    return <Navigate to="/"/>
  }
  return (
    <div className="App">
      <p>Hello {user}!</p>
      <Link to="/">
        <button>Logout</button>
      </Link>
      <form onSubmit={sendMessage} action="submit">
        <input type="text" value={messageToSend} onChange={({ target }) => setMessageToSend(target.value)}/>
        <button>submit</button>
      </form>
      {messages.map(data => (
        <Message key={data._id} data={data}/>
      ))}
    </div>
  )
}

export default Logged