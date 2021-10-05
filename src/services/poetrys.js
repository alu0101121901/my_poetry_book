import axios from 'axios'
const baseUrl = 'https://radiant-plains-06983.herokuapp.com/api/poetryArray'
// const baseUrl = 'http://localhost:3001/api/poetryArray'

export const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then((response) => response.data)
}

// Solo se debe modificar el campo likes
export const modifyLike = () => {}

export default { getAll }
