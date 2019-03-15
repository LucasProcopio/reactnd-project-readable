/**
 * Ation types
 */
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const GET_POSTS_BY_CATEGORY = 'GET_POSTS_BY_CATEGORY'

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