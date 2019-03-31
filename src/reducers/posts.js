import { RECEIVE_POSTS, GET_POSTS_BY_CATEGORY, INCREMENT_VOTE_SCORE, DECREMENT_VOTE_SCORE, ADD_NEW_POST, GET_POST } from '../actions/posts'


/**
 *  posts reducer
 */
export default function posts(state = {}, action) {
    switch (action.type) {
        case RECEIVE_POSTS:
            return {
                ...state,
                ...action.posts
            }
        case GET_POSTS_BY_CATEGORY:
            return {
                ...action.posts
            }
        case INCREMENT_VOTE_SCORE:
            const upVotePosts = Object.keys(state)
            for (let i of upVotePosts) {
                if (state[i].id === action.postID) {
                    state[i].voteScore++
                }
            }
            return {
                ...state,
            }
        case DECREMENT_VOTE_SCORE:
            const downVotePosts = Object.keys(state)
            for (let i of downVotePosts) {
                if (state[i].id === action.postID) {
                    state[i].voteScore--
                }
            }
            return {
                ...state,
            }
        case ADD_NEW_POST:
            Object.assign(state, { [Object.keys(state).length]: action.post })
            return {
                ...state,
            }
        case GET_POST:
            return {
                ...state,
                ...action.post
            }
        default:
            return state

    }
}