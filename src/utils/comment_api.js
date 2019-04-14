// get comments for a single post
export const getComments = (id) =>
    fetch(
        `http://localhost:3001/posts/${id}/comments`,
        { headers: { 'Authorization': 'whatever-you-want' } }
    )
        .then(data => data.json())
        .then(data => data)

// edit comment
export const editComment = (data, id) =>
    fetch(`http://localhost:3001/comments/${id}`,
        {
            method: 'PUT',
            headers: {
                'Authorization': 'whatever-you-want',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(data => data.json())

// Add new post
export const addComment = (data) =>
    fetch(`http://localhost:3001/comments`,
        {
            method: 'POST',
            headers: {
                'Authorization': 'whatever-you-want',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(data => data.json())

// Change voteScore for a comment
export const voteComment = (id, vote) =>
    fetch(`http://localhost:3001/comments/${id}`,
        {
            method: 'POST',
            headers: {
                'Authorization': 'whatever-you-want',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ option: vote })
        })
        .then(data => data.json())

// Delete post
export const deleteComment = (id) =>
    fetch(`http://localhost:3001/comments/${id}`,
        {
            method: 'DELETE',
            headers: {
                'Authorization': 'whatever-you-want',
            }
        })
        .then(data => data.json())
