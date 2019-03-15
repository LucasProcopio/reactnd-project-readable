import { receivePosts, getPostsByCategory } from './posts'
import { receiveCategories } from './categories'
import { fetchPosts, fetchPostsByCategory } from '../utils/post_api'
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
        return fetchPostsByCategory(category)
            .then(posts => {
                dispatch(getPostsByCategory(posts))
                dispatch(hideLoading())
            })
    }
}