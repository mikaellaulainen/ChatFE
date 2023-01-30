const Message = ({ data }) => {
  return (
    <div className="message">
      <p>{data.user} said: {data.message}</p>
    </div>
  )
}

export default Message