import axios from '~/plugins/axios'

export const getPeople = async (total = 10) =>
  (await axios.get('/random-data.json')).data.slice(0, total)
