export default function deletePosts(postId) {
    return fetch('http://localhost:5050/posts/delete', {
        method: 'DELETE',
        credentials: 'include',
        body: JSON.stringify({ postId }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
