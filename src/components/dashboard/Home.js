import React from 'react'
import { connect } from 'react-redux'
import Posts from './Posts'
import { handlePostsData } from '../../actions/shared'
import NavigationBar from './NavigationBar'
import LoadingBar from 'react-redux-loading-bar'

class Home extends React.Component {

    componentDidMount() {
        this.props.dispatch(handlePostsData())
    }

    render() {
        return (
            <div className="main-home">
                <LoadingBar />
                <NavigationBar />
                <div>
                    Category > All
                </div>
                <div>
                    <button>
                        Add  new post
                    </button>
                </div>
                {this.props.loading === true
                    ? null
                    : <div className="posts">
                        <Posts posts={this.props.posts} />
                    </div>}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loading: Object.keys(state.posts).length === 0,
    posts: Object.keys(state.posts).map(key => state.posts[key]),
})

export default connect(mapStateToProps)(Home)