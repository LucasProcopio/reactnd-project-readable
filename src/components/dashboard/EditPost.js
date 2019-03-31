import React from 'react'
import NavigationBar from './NavigationBar'
import { handleEditPost } from '../../actions/shared'
import { connect } from 'react-redux'
import PostForm from './PostForm'

class EditPost extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            id: '',
            author: '',
            body: '',
            category: '',
            commentCount: 0,
            deleted: false,
            timestamp: 0,
            title: '',
            voteScore: 0
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        const postID = this.props.match.params.post_id
        const post = this.props.posts.filter(post => post.id === postID)
        this.setState({ ...post[0] })
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault()
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <NavigationBar />
                <p>**Edit post**</p>
                <PostForm
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    post={this.state}
                    categories={this.props.categories}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    posts: Object.keys(state.posts).map(key => state.posts[key]),
    categories: Object.keys(state.categories).map(key => state.categories[key])
})
export default connect(mapStateToProps)(EditPost)