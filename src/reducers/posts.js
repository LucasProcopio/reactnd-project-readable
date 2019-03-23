import { RECEIVE_POSTS, GET_POSTS_BY_CATEGORY, INCREMENT_VOTE_SCORE, DECREMENT_VOTE_SCORE } from '../actions/posts'


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

        default:
            return state

    }
}