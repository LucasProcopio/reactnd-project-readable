import {
    receivePosts,
    getPostsByCategory,
    decrementVoteScore,
    incrementVoteScore,
    addNewPost,
    editPost,
    getPost
} from './posts'

import {
    fetchPosts,
    fetchPostsByCategory,
    vote,
    addPost,
    fetchPost,
    editPostApi
} from '../utils/post_api'

import {
    fetchComments,
    incrementCommentScore,
    decrementCommentScore ,
    editCommentBody
} from './comments'

import { getComments, voteComment, editComment } from '../utils/comment_api'
import { receiveCategories } from './categories'
import { fetchCategories } from '../utils/category_api'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export function handlePostsData() {
    return (dispatch) => {
        dispatch(showLoading())
        return fetchPosts()
            .then((posts) => {
                dispatch(receivePosts(posts))
                dispatch(hideLoading())
            })
    }
}

export function handleCategoryData() {
    return (dispatch) => {
        return fetchCategories()
            .catch((e) => {
                alert('Error', e)
            })
            .then((categories) => {
                dispatch(receiveCategories(categories))
            })
    }
}

export function handlePostsByCategory(category) {
    return dispatch => {
        dispatch(showLoading())
        if (category === 'all') {
            return fetchPosts()
                .then(posts => {
                    dispatch(receivePosts(posts))
                    dispatch(hideLoading())
                })
        }
        return fetchPostsByCategory(category)
            .then(posts => {
                dispatch(getPostsByCategory(posts))
                dispatch(hideLoading())
            })
    }
}

export function upVotePostScore(postID) {
    return dispatch => {
        return vote(postID, 'upVote')
            .then((post) => {
                dispatch(incrementVoteScore(post.id))
            })
    }
}

export function downVotePostScore(postID) {
    return dispatch => {
        return vote(postID, 'downVote')
            .then(post => {
                dispatch(decrementVoteScore(post.id))
            })
    }
}

export function createNewPost(post) {
    return dispatch => {
        return addPost(post)
            .then(post => {
                dispatch(addNewPost(post))
            })
    }
}
export function getPostbyId(postId) {
    return dispatch => {
        dispatch(showLoading())
        return fetchPost(postId)
            .then(post => {
                dispatch(getPost(post))
                dispatch(hideLoading())
            })
    }
}
export function handleEditPost(post) {
    return dispatch => {
        return editPostApi(post, post.id)
            .then(post => {
                dispatch(editPost(post))
            })
    }
}

export function getPostComments(postId) {
    return dispatch => {
        dispatch(showLoading())
        return getComments(postId)
            .then(comments => {
                dispatch(fetchComments(comments))
                dispatch(hideLoading())
            })
    }
}

export function upVoteCommentScore(commentId) {
    return dispatch => {
        return voteComment(commentId, "upVote")
            .then(comment => {
                dispatch(incrementCommentScore(comment.id))
            })
    }
}

export function downVoteCommentScore(commentId) {
    return dispatch => {
        return voteComment(commentId, "downVote")
            .then(comment => {
                dispatch(decrementCommentScore(comment.id))
            })
    }
}

export function handleEditComment(comment){
    return dispatch => {
        return editComment(comment, comment.id)
            .then(comment => {
                dispatch(editCommentBody(comment))
            })
    }
}