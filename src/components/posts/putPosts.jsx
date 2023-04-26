export default function putPosts(postId, newContent) {
    return fetch('http://localhost:5050/posts/update', {
        method: 'PUT',
        credentials: 'include',
        body: JSON.stringify({ postId, newContent }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

