const Message = ({ data }) => {
  return (
    <div className="mx-auto col-11 border mt-2">
      <p>{data.user}</p>
      <p>{data.message}</p>
    </div>
  )
}

export default Message