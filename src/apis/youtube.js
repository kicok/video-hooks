import axios from 'axios';
const KEY = 'AIzaSyDbBYAt3YqU9bvbG-d3PrBoLYw5z3VGJUw';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
