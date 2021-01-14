
// const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';


//   export function getEvents () {
//     return fetchRequest(`posts`);
//   };

//   export function postEvents (body) {
//     return fetchRequest(`events`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
//       body: JSON.stringify(body)
//     });
//   };

//   function fetchRequest (url, options) {
//     return fetch(`${BASE_URL}${url}`, options)
//       .then(res => res.status < 400 ? res : Promise.reject(res))
//       .then(res => res.status !== 204 ? res.json() : res)
//       .catch(err => {
//         console.log(`${err.message} while fetching /${url}`)
//       });
//   };




// export default ApiService;
