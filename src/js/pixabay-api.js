import axios from 'axios';

const API_KEY = '56208412-7d6dcb228c67b365f0b5ce0be';
const BASE_URL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 12,
      },
    })
    .then(response => response.data);
}
