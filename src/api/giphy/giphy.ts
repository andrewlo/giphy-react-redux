import { get } from '../server/giphy';

const publicKey = 'dc6zaTOxFJmzC';
const pageSize = 10;

export function search(term: string, pageNum: number = 0) {
  const offset = pageNum * pageSize;
  return new Promise((resolve, reject) => {
    return get(`/search?q=${term}&offset=${offset}&limit=${pageSize}&api_key=${publicKey}`)
      .then(json => resolve(json))
      .then(null, (err) => reject(new Error()));
  });
}

export function details(id: string) {
  return new Promise((resolve, reject) => {
    return get(`/${id}?api_key=${publicKey}`)
      .then(json => resolve(json))
      .then(null, (err) => reject(new Error()));
  });
}

export function trending(pageNum: number = 0) {
  const offset = pageNum * pageSize;
  return new Promise((resolve, reject) => {
    return get(`/trending?api_key=${publicKey}&offset=${offset}&limit=${pageSize}`)
      .then(json => resolve(json))
      .then(null, (err) => reject(new Error()));
  });
}
