export default function getAllUsers() {
    return fetch('http://localhost:5050/users/allUsers', {
        method: 'GET',
        credentials: "include",
        headers: {
            'Content-Type': 'application/json'
        }
    })
};