/**
 * Ation types
 */
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const GET_POSTS_BY_CATEGORY = "GET_POSTS_BY_CATEGORY";
export const INCREMENT_VOTE_SCORE = "INCREMENT_VOTE_SCORE";
export const DECREMENT_VOTE_SCORE = "DECREMENT_VOTE_SCORE";
export const ADD_NEW_POST = "ADD_NEW_POST";
export const GET_POST = "GET_POST";
export const EDIT_POST = "EDIT_POST";
export const DELETE_POST = "DELETE_POST";

/**
 * Action creators
 */
export function receivePosts(posts) {
  return {
    type: RECEIVE_POSTS,
    posts
  };
}

export function getPostsByCategory(posts) {
  return {
    type: GET_POSTS_BY_CATEGORY,
    posts
  };
}

export function incrementVoteScore(postID) {
  return {
    type: INCREMENT_VOTE_SCORE,
    postID
  };
}

export function decrementVoteScore(postID) {
  return {
    type: DECREMENT_VOTE_SCORE,
    postID
  };
}

export function addNewPost(post) {
  return {
    type: ADD_NEW_POST,
    post
  };
}

export function getPost(post) {
  return {
    type: GET_POST,
    post
  };
}

export function editPost(post) {
  return {
    type: EDIT_POST,
    post
  };
}

export function delPost(post) {
  return {
    type: DELETE_POST,
    post
  };
}
