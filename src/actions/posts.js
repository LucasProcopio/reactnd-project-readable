/**
 * Ation types
 */
export const RECEIVE_POSTS = 'RECEIVE_POSTS'


/**
 * Action creators
 */
export function receivePosts(posts) {
    return {
        type: RECEIVE_POSTS,
        posts
    }
}