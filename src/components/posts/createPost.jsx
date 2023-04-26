export default function createdPostFetch(postContent, link){
    return fetch('http://localhost:5050/posts/create', {
        method: 'POST',
        body: JSON.stringify({ postContent, link }),
        credentials:"include",
        headers: {
        'Content-Type': 'application/json'
    }
})};