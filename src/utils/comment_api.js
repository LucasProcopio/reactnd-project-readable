// get comments for a single post
export const getComments = id =>
  fetch(`https://lu-readable-backend.herokuapp.com/posts/${id}/comments`, {
    headers: { Authorization: "whatever-you-want" }
  })
    .then(data => data.json())
    .then(data => data);

// edit comment
export const editComment = (data, id) =>
  fetch(`https://lu-readable-backend.herokuapp.com/comments/${id}`, {
    method: "PUT",
    headers: {
      Authorization: "whatever-you-want",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(data => data.json());

// Add new post
export const addComment = data =>
  fetch(`https://lu-readable-backend.herokuapp.com/comments`, {
    method: "POST",
    headers: {
      Authorization: "whatever-you-want",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(data => data.json());

// Change voteScore for a comment
export const voteComment = (id, vote) =>
  fetch(`https://lu-readable-backend.herokuapp.com/comments/${id}`, {
    method: "POST",
    headers: {
      Authorization: "whatever-you-want",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ option: vote })
  }).then(data => data.json());

// Delete a Comment
export const deleteComment = id =>
  fetch(`https://lu-readable-backend.herokuapp.com/comments/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: "whatever-you-want"
    }
  }).then(data => data.json());
