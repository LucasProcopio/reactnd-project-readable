import { receivePosts, getPostsByCategory, decrementVoteScore, incrementVoteScore, addNewPost, editPost, getPost } from './posts'
import { receiveCategories } from './categories'
import { fetchPosts, fetchPostsByCategory, vote, addPost, fetchPost } from '../utils/post_api'
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
export function getPostbyID(postID) {
    return dispatch => {
        dispatch(showLoading())
        return fetchPost(postID)
            .then(post => {
                dispatch(getPost(post))
                dispatch(hideLoading())
            })
    }
}
export function handleEditPost(postID) {
    return dispatch => {
        return fetchPost(postID)
            .then(post => {
                dispatch(editPost(post))
            })
    }
}