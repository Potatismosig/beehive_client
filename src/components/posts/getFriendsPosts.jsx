export default function getFriendsPosts(){
    return fetch('http://localhost:5050/posts/friendsPosts', {
        method: 'GET',
        credentials:"include",
        headers: {
        'Content-Type': 'application/json'
        }
    })};