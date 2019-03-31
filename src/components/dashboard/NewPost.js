import React from 'react'
import { connect } from 'react-redux'
import { handleCategoryData, createNewPost } from '../../actions/shared'
import PostForm from './PostForm'

class NewPost extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            title: '',
            author: '',
            body: '',
            category: 'react'
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.props.dispatch(handleCategoryData())
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault()
        // todo: post validation.
        // todo: display character count validation
        const post = {
            id: Math.random().toString(36).substr(2, 9),
            timestamp: Date.now(),
            title: this.state.title,
            body: this.state.body,
            owner: this.state.author,
            category: this.state.category
        }

        this.props.dispatch(createNewPost(post))
    }

    render() {
        return (
            <div>
                <PostForm
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    post={this.state}
                    categories={this.props.categories} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { categories: Object.keys(state.categories).map(key => state.categories[key]) }
}
export default connect(mapStateToProps)(NewPost)