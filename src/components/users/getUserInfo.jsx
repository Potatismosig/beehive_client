export default function getUserInfo() {
    return fetch('http://localhost:5050/users/user', {
        method: 'GET',
        credentials: "include",
        headers: {
            'Content-Type': 'application/json'
        }
    })
};