export default function followUser(followUsername) {
    return fetch('http://localhost:5050/users/follow', {
        method: 'POST',
        body: JSON.stringify({ followUsername }),
        credentials: "include",
        headers: {
            'Content-Type': 'application/json'
        }
    })
};