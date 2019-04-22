//  Get all posts
export const fetchPosts = () =>
  fetch("https://lu-readable-backend.herokuapp.com/posts", {
    headers: { Authorization: "whatever-you-want" }
  }).then(data => data.json());

// Get all posts in a category
export const fetchPostsByCategory = category =>
  fetch(`https://lu-readable-backend.herokuapp.com/${category}/posts`, {
    headers: { Authorization: "whatever-you-want" }
  }).then(data => data.json());

// Get a single post based on id
export const fetchPost = id =>
  fetch(`https://lu-readable-backend.herokuapp.com/posts/${id}`, {
    headers: { Authorization: "whatever-you-want" }
  }).then(data => data.json());

// Delete post
export const deletePost = id =>
  fetch(`https://lu-readable-backend.herokuapp.com/posts/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: "whatever-you-want"
    }
  }).then(data => data.json());

// Change voteScore for a post
export const vote = (id, vote) =>
  fetch(`https://lu-readable-backend.herokuapp.com/posts/${id}`, {
    method: "POST",
    headers: {
      Authorization: "whatever-you-want",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ option: vote })
  }).then(data => data.json());

// Add new post
export const addPost = data =>
  fetch(`https://lu-readable-backend.herokuapp.com/posts`, {
    method: "POST",
    headers: {
      Authorization: "whatever-you-want",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(data => data.json());

// Edit post
export const editPostApi = (data, id) =>
  fetch(`https://lu-readable-backend.herokuapp.com/posts/${id}`, {
    method: "PUT",
    headers: {
      Authorization: "whatever-you-want",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(data => data.json());
