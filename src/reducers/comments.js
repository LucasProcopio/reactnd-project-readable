import {
    FETCH_COMMENTS,
    INCREMENT_COMMENT_SCORE,
    DECREMENT_COMMENT_SCORE,
    EDIT_COMMENT_BODY,
    ADD_NEW_COMMENT
} from '../actions/comments'

export default function comments(state = {}, action) {
    switch (action.type) {
        case FETCH_COMMENTS:
            return {
                ...Object.assign({}, [...action.comments])
            }
        case INCREMENT_COMMENT_SCORE:
            const upVoteComment = Object.keys(state)
            for (let i of upVoteComment) {
                if (state[i].id === action.commentId) {
                    state[i].voteScore++
                }
            }
            return {
                ...state
            }
        case DECREMENT_COMMENT_SCORE:
            const downVoteComment = Object.keys(state)
            for (let i of downVoteComment) {
                if (state[i].id === action.commentId) {
                    state[i].voteScore--
                }
            }
            return {
                ...state
            }
        case ADD_NEW_COMMENT:
            const newComment = Object.assign(state, [...action.comment])
            console.log('>>>>>NEW', newComment)
            return {
                newComment
            }
        case EDIT_COMMENT_BODY:
            Object.keys(state).map(key =>
                (state[key].id === action.comment.id)
                    ? state[key] = action.comment
                    : null
            )
            return {
                ...state
            }
        default:
            return state


    }
}