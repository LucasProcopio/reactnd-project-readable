import { RECEIVE_POSTS, GET_POSTS_BY_CATEGORY } from '../actions/posts'


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
            console.log('CURRENT STATE>>>', { ...state })
            console.log('ACTION BEIGN PASSED^^^', action)
            return {
                ...action.posts
            }
        default:
            return state

    }
}