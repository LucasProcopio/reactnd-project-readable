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
} from "../actions/actionTypes";
import _ from "lodash";

/**
 *  posts reducer
 */
export default function posts(state = {}, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return {
        ...state,
        ...action.posts
      };
    case GET_POSTS_BY_CATEGORY:
      return {
        ...action.posts
      };
    case INCREMENT_VOTE_SCORE:
      const upVotePosts = Object.keys(state);
      for (let i of upVotePosts) {
        if (state[i].id === action.postID) {
          state[i].voteScore++;
        }
      }
      return {
        ...state
      };
    case DECREMENT_VOTE_SCORE:
      const downVotePosts = Object.keys(state);
      for (let i of downVotePosts) {
        if (state[i].id === action.postID) {
          state[i].voteScore--;
        }
      }
      return {
        ...state
      };
    case ADD_NEW_POST:
      Object.assign(state, { [Object.keys(state).length]: action.post });
      return {
        ...state
      };
    case GET_POST:
      if (typeof action.post.id === "undefined") {
        state = {};
      } else {
        state = Object.assign({}, [action.post]);
      }
      return {
        ...state
      };
    case EDIT_POST:
      Object.keys(state).map(key =>
        state[key].id === action.post.id ? (state[key] = action.post) : null
      );
      return {
        ...state
      };
    case DELETE_POST:
      let posts = Object.keys(state).map(key => state[key]);
      posts = posts.filter(post => post.id !== action.post.id);
      return {
        ...posts
      };
    case SORT_BY_DATE:
      const postsByDate = _.sortBy(action.posts, [
        function(post) {
          return post.timestamp;
        }
      ]).reverse();
      return {
        ...postsByDate
      };
    case SORT_BY_SCORE:
      const postsByScore = _.sortBy(action.posts, [
        function(post) {
          return post.voteScore;
        }
      ]).reverse();
      return {
        ...postsByScore
      };
    default:
      return state;
  }
}
