import axios from "~plugins/axios"

async function getPeople() {
  const response = await axios.get('/random-data.json')
  const people = response.data.slice(0, 10)
  return { people }
}
