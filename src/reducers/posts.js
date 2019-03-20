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
            console.log('CURRENT STATE >>>', state)
            console.log('ACTION <<<<<<', action)
            return {
                ...state,
                [state.posts]: Object.keys(state).map(key => {
                    if (state[key].id === action.postID) {
                        state[key].voteScore++
                    }
                    return state[key]
                })

            }
        default:
            return state

    }
}