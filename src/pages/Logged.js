import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link, Navigate } from 'react-router-dom'
import Message from '../components/Message'
import chatService from '../services/chatting'

const Logged = ({ username }) => {
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
      user: username,
      message: messageToSend
    }
    chatService.sendMessage(messageObject).then(res => {
      console.log(res)
      setMessages(messages.concat(res))
      setMessageToSend('')
    })
  }
  if (username === '') {
    return <Navigate to="/"/>
  }
  return (
    <div className="App">
      <p>Hello {username}!</p>
      <Link to="/">
        <Button>Logout</Button>
      </Link>
      <div className='message-box'>
        {messages.map(data => (
          <Message key={data._id} data={data}/>
        ))}
      </div>
      <Form className='mx-auto border p-3 col-12 bg-dark chat-input' onSubmit={sendMessage}>
        <Form.Control type="text" value={messageToSend} onChange={({ target }) => setMessageToSend(target.value)}/>
        <Button type="submit" className='my-3'>Send</Button>
      </Form>
    </div>
  )
}

export default Logged