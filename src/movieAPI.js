import axios from 'axios';

const API_KEY = '23b3c4e39459843debead29811db638b';
const BASE_URL = 'https://api.themoviedb.org/3/';
axios.defaults.baseURL = BASE_URL;

export default async function getMovie(path, params = '') {
  try {
    if (params === '') {
      console.log(`${path}?api_key=${API_KEY}${params}`);
      const response = await axios.get(`${path}?api_key=${API_KEY}${params}`);
      return response.data;
    }
    console.log(`${path}?api_key=${API_KEY}&${params}`);
    const response = await axios.get(`${path}?api_key=${API_KEY}&${params}`);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
}
