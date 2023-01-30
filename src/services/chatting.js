import axios from 'axios'
const baseUrl = '/api/messages'

const getAll = () => {
  return axios.get(baseUrl)
}

const sendMessage = async message => {
  console.log(message)
  const res = await axios.post(baseUrl,message)
  return res.data
}

export default { getAll,sendMessage }