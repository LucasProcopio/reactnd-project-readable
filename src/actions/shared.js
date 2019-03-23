import { receivePosts, getPostsByCategory, decrementVoteScore, incrementVoteScore } from './posts'
import { receiveCategories } from './categories'
import { fetchPosts, fetchPostsByCategory, vote } from '../utils/post_api'
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
        console.log(category)
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