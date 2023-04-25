export default function loginFetch(){
    return fetch('http://localhost:5050/users/getUserInfo', {
        method: 'GET',
        credentials:"include",
        headers: {
        'Content-Type': 'application/json'
        }
    })};