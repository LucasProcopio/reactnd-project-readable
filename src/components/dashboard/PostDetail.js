import React from 'react'
import NavigationBar from './NavigationBar'
import { connect } from 'react-redux'

class PostDetail extends React.Component {

    componentDidMount() {
        const postID = this.props.match.params.post_id
        const post = this.props.posts.filter(post => post.id === postID)
        console.log(post)
    }

    render() {
        return (
            // todo: program the post detail page.
            <div>
                <NavigationBar />
                <p>** Post Detail **</p>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    'posts': Object.keys(state.posts).map(key => state.posts[key])
})

export default connect(mapStateToProps)(PostDetail)