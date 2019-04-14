import React from 'react'
import { connect } from 'react-redux'
import { formatDate } from '../utils/helpers'
import { Link } from 'react-router-dom'
import { upVoteCommentScore, downVoteCommentScore } from '../actions/shared'

// material design
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import ThumbUp from '@material-ui/icons/ThumbUp'
import ThumbDown from '@material-ui/icons/ThumbDown'
import Button from '@material-ui/core/Button'

//css
import '../styles/comments.css'

class Comments extends React.Component {

    upVote = (id) => {
        this.props.dispatch(upVoteCommentScore(id))
    }

    downVote = (id) => {
        this.props.dispatch(downVoteCommentScore(id))
    }

    render() {

        return (
            <div className="comment-container">
                {this.props.comments.map(comment => (
                    <Card className="comment-card" key={comment.id}>
                        <CardContent>
                            <div className="comment-info">
                                <span className="comment-author">
                                    {comment.author}
                                </span>
                                <span className="comment-date">
                                    {formatDate(comment.timestamp)}
                                </span>
                            </div>
                            <Typography component="p">
                                {comment.body}
                            </Typography>
                        </CardContent>
                        <CardActions
                            className='comment-card-action'
                            disableActionSpacing>
                            <IconButton
                                aria-label="Add to favorites"
                                onClick={() => this.upVote(comment.id)}
                            >
                                <ThumbUp />
                            </IconButton> {comment.voteScore}
                            <IconButton
                                aria-label="Share"
                                onClick={() => this.downVote(comment.id)}>
                                <ThumbDown />
                            </IconButton>
                            <Link to={`/comment/${comment.id}`}>
                                <Button
                                    variant="outlined"
                                    color="secondary">
                                    Edit
                                </Button>
                            </Link>
                            <Button variant="outlined">
                                Delete
                                 </Button>
                        </CardActions>
                    </Card>
                ))}
            </div>
        )
    }
}


export default connect()(Comments)