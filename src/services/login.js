import axios from 'axios'
const baseUrl = '/api/login'

const login = async details => {
  const res = await axios.post(baseUrl,details)
  return res.data
}

export default { login }