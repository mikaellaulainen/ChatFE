import axios from 'axios'
const baseUrl = '/api/users'

const createAcc = async user => {
  const res  = await axios.post(baseUrl, user)
  return res.data
}

export default {
  createAcc
}