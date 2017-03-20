import { get } from '../server/giphy';

const publicKey = 'dc6zaTOxFJmzC';

export function search(term: string) {
  return new Promise((resolve, reject) => {
    return get(`/search?q=${term}&api_key=${publicKey}`)
      .then(json => resolve(json.data))
      .then(null, (err) => reject(new Error()));
  });
}
