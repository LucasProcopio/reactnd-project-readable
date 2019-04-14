import React from 'react'
import NavigationBar from './NavigationBar'
import { connect } from 'react-redux'
import CommentForm from './CommentForm'
import { handleEditComment } from '../actions/shared'

class EditComment extends React.Component {

	constructor(props){
		super(props)
		this.state = {
			id: '',
			parentId: '',
            author: '',
            body: '',
            deleted: false,
            parentDeleted: false,
            timestamp: 0,
            voteScore: 0
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
	}

	componentDidMount(){
		const commentId = this.props.match.params.comment_id
		const comment = this.props.comments.filter(
			comment => comment.id === commentId
		)
		this.setState({...comment[0]})
	}

	handleChange(event) {
		this.setState({[event.target.name]: event.target.value })
	}

	handleSubmit(event) {
		event.preventDefault()
		this.props.dispatch(handleEditComment(this.state))
	}

    render() {
        return (
            <div>
            	<NavigationBar />
            	<p>** Edit Comment **</p>
            	<CommentForm
            		handleChange={this.handleChange}
            		handleSubmit={this.handleSubmit}
            		comment={this.state}
            	/>

            </div>
        )
    }
}

const mapStateToProps = state => ({
	comments: Object.keys(state.comments).map(key => state.comments[key])
})

export default connect(mapStateToProps)(EditComment)