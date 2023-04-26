export default function likePost(postId){
    return fetch('http://localhost:5050/posts/likePost', {
        method: 'PATCH',
        body: JSON.stringify({ postId }),
        credentials:"include",
        headers: {
        'Content-Type': 'application/json'
        }
    })};