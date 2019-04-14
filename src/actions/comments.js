/**
 * action types
 */
export const FETCH_COMMENTS = 'FETCH_COMMENTS'
export const INCREMENT_COMMENT_SCORE = 'INCREMENT_COMMENT_SCORE'
export const DECREMENT_COMMENT_SCORE = 'DECREMENT_COMMENT_SCORE'
export const EDIT_COMMENT_BODY = 'EDIT_COMMENT_BODY'

/**
 * Action creators
 */
export function fetchComments(comments) {
    return {
        type: FETCH_COMMENTS,
        comments
    }
}

export function incrementCommentScore(commentId) {
    return {
        type: INCREMENT_COMMENT_SCORE,
        commentId
    }
}

export function decrementCommentScore(commentId) {
    return {
        type: DECREMENT_COMMENT_SCORE,
        commentId
    }
}

export function editCommentBody(comment){
    return {
        type: EDIT_COMMENT_BODY,
        comment
    }
}