import { RECEIVE_POSTS, GET_POSTS_BY_CATEGORY, INCREMENT_VOTE_SCORE } from '../actions/posts'


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
            // create an action creator to update the score
            const keys = Object.keys(state)
            for (let key of keys) {
                if (state[key].id === action.postID) {
                    state[key].voteScore++
                }
            }
            return {
                ...state
            }

        default:
            return state

    }
}