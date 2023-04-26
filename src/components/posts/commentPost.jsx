export default function commentPostFetch(postId, comments){
    return fetch('http://localhost:5050/posts/comment', {
        method: 'POST',
        body: JSON.stringify({ postId, comments }),
        credentials:"include",
        headers: {
        'Content-Type': 'application/json'
    }
})};