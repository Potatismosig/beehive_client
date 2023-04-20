export default function registerFetch(username, password) {
    return fetch('http://localhost:5050/auth/register', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}