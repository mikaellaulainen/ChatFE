import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
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
        <Button>Logout</Button>
      </Link>
      <Form className='my-3 mx-auto border p-3 col-11 bg-dark' onSubmit={sendMessage}>
        <Form.Control as="textarea" rows={2} type="text" value={messageToSend} onChange={({ target }) => setMessageToSend(target.value)}/>
        <Button type="submit" className='my-3'>Send</Button>
      </Form>
      {messages.map(data => (
        <Message key={data._id} data={data}/>
      ))}
    </div>
  )
}

export default Logged