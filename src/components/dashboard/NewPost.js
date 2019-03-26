import React from 'react'
import { connect } from 'react-redux'
import { handleCategoryData } from '../../actions/shared'

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
        // todo: create an ID and a timecreated for the post
        // todo: use the UUID (Universal unique identifier ) to generate IDS  https://github.com/kelektiv/node-uuid
        // todo: dispatch an action creator to add new post

        console.log('Author > ', this.state.author, 'title >', this.state.title, 'Body > ', this.state.body, ' Category > ', this.state.category)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Category:
                        <select
                            name="category"
                            onChange={this.handleChange}
                            value={this.state.category}
                        >
                            {this.props.categories.map(category => (
                                <option
                                    key={category.path}
                                    value={category.name}
                                >
                                    {category.name}
                                </option>
                            ))}
                        </select>
                    </label>
                    <label>
                        Author:
                        <input
                            name="author"
                            type="text"
                            placeholder="Author"
                            value={this.state.author}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        Title:
                        <input
                            name="title"
                            type="text"
                            placeholder="Title"
                            value={this.state.title}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        Body:
                        <textarea
                            name="body"
                            value={this.state.body}
                            placeholder="Body of the post"
                            onChange={this.handleChange}>
                        </textarea>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { categories: Object.keys(state.categories).map(key => state.categories[key]) }
}
export default connect(mapStateToProps)(NewPost)