import Card from 'react-bootstrap/Card'
const Message = ({ data }) => {
  return (
    <Card className="message mx-auto col-11 border mt-2 p-2">
      <p>{data.user}</p>
      <p>{data.createdAt}</p>
      <p className="text">{data.message}</p>
    </Card>
  )
}

export default Message