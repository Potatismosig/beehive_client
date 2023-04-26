export default function friendsProfileFetch(profileUsername){
    return fetch('http://localhost:5050/users/profile', {
        method: 'POST',
        body: JSON.stringify({ profileUsername }),
        credentials:"include",
        headers: {
        'Content-Type': 'application/json'
    }
})};