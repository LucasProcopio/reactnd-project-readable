import React from 'react'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading-bar'
import NavigationBar from './NavigationBar'
import Posts from './Posts'
import Comments from './Comments'

import { getPostbyId } from '../actions/shared'
import { getPostComments } from '../actions/shared';

class PostDetail extends React.Component {

    componentDidMount() {
        const postId = this.props.match.params.post_id
        this.props.dispatch(getPostbyId(postId))
        this.props.dispatch(getPostComments(postId))

    }

    render() {
        if (this.props.loading === true) {
            return (
                <LoadingBar />
            )
        }

        return (
            <div>

                <NavigationBar />
                <p>** Post Details **</p>
                <p>Category: {this.props.match.params.category}</p>
                <Posts posts={this.props.post} deleteBtn={true} />
                <button>Add a comment</button>
                <hr />
                <Comments comments={this.props.comments} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    'post': Object.keys(state.posts).map(key => state.posts[key]),
    'comments': Object.keys(state.comments).map(key => state.comments[key]),
    'loading': Object.keys(state.posts).length === 0
})

export default connect(mapStateToProps)(PostDetail)