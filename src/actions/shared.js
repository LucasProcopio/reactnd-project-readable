import { receivePosts } from './posts'
import { fetchPosts } from '../utils/post_api'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export default function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        return fetchPosts()
            .then((posts) => {
                dispatch(receivePosts(posts))
                dispatch(hideLoading())
            })
    }
}