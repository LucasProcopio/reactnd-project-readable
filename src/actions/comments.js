import {
  FETCH_COMMENTS,
  INCREMENT_COMMENT_SCORE,
  DECREMENT_COMMENT_SCORE,
  EDIT_COMMENT_BODY,
  ADD_NEW_COMMENT,
  DELETE_COMMENT
} from "./actionTypes";
/**
 * Action creators
 */
export function fetchComments(comments) {
  return {
    type: FETCH_COMMENTS,
    comments
  };
}

export function incrementCommentScore(commentId) {
  return {
    type: INCREMENT_COMMENT_SCORE,
    commentId
  };
}

export function decrementCommentScore(commentId) {
  return {
    type: DECREMENT_COMMENT_SCORE,
    commentId
  };
}

export function editCommentBody(comment) {
  return {
    type: EDIT_COMMENT_BODY,
    comment
  };
}

export function addNewComment(comment) {
  return {
    type: ADD_NEW_COMMENT,
    comment
  };
}

export function deletePostComment(commentId) {
  return {
    type: DELETE_COMMENT,
    commentId
  };
}
