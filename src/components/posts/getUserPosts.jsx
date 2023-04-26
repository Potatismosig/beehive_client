export default function getUserPosts() {
    return fetch('http://localhost:5050/posts/userposts', {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
