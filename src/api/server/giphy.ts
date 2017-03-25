import 'whatwg-fetch';

export const BASE_URL = 'http://api.giphy.com/v1/gifs'; 

export function get(path): any {
  return fetch(BASE_URL + path, {
    method: 'get',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json());
}
