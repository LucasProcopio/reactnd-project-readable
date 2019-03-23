/**
 * Ation types
 */
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const GET_POSTS_BY_CATEGORY = 'GET_POSTS_BY_CATEGORY'
export const INCREMENT_VOTE_SCORE = 'INCREMENT_VOTE_SCORE'
export const DECREMENT_VOTE_SCORE = 'DECREMENT_VOTE_SCORE'

/**
 * Action creators
 */
export function receivePosts(posts) {
    return {
        type: RECEIVE_POSTS,
        posts
    }
}

export function getPostsByCategory(posts) {
    return {
        type: GET_POSTS_BY_CATEGORY,
        posts
    }
}

export function incrementVoteScore(postID) {
    return {
        type: INCREMENT_VOTE_SCORE,
        postID
    }
}

export function decrementVoteScore(postID) {
    return {
        type: DECREMENT_VOTE_SCORE,
        postID
    }
}