import {
  RECEIVE_POSTS,
  GET_POSTS_BY_CATEGORY,
  INCREMENT_VOTE_SCORE,
  DECREMENT_VOTE_SCORE,
  ADD_NEW_POST,
  GET_POST,
  EDIT_POST,
  DELETE_POST,
  SORT_BY_DATE,
  SORT_BY_SCORE
} from "./actionTypes";

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

export function sortByDate(posts) {
  return {
    type: SORT_BY_DATE,
    posts
  };
}

export function sortByScore(posts) {
  return {
    type: SORT_BY_SCORE,
    posts
  };
}
