import React from 'react'
import { connect } from 'react-redux'
import { formatDate } from '../utils/helpers'
import { postCard } from '../styles/post'
import { upVotePostScore, downVotePostScore } from '../actions/shared';
import { Link } from 'react-router-dom'

// material design
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import ThumbUp from '@material-ui/icons/ThumbUp'
import ThumbDown from '@material-ui/icons/ThumbDown'
import Comment from '@material-ui/icons/Comment'
import Button from '@material-ui/core/Button'

class Posts extends React.Component {

    upVote = (id) => {
        this.props.dispatch(upVotePostScore(id))
    }

    downVote = (id) => {
        this.props.dispatch(downVotePostScore(id))
    }

    render() {
        return (
            <div className="postsContainer">
                {this.props.posts.map(post => (
                    <Card style={postCard} key={post.id}>
                        <CardHeader
                            title={post.title}
                            subheader={formatDate(post.timestamp)}>
                        </CardHeader>
                        <CardContent>
                            <div className="postInfo">
                                <span className="postAuthor">
                                    {post.author}
                                </span>
                                <span className="postCategory">
                                    --{post.category}--
                                </span>
                            </div>
                            <Typography component="p">
                                {post.body}
                            </Typography>
                        </CardContent>
                        <CardActions
                            className='postCardAction'
                            disableActionSpacing>
                            <IconButton
                                aria-label="Add to favorites"
                                onClick={() => this.upVote(post.id)}
                            >
                                <ThumbUp />
                            </IconButton> {post.voteScore}
                            <IconButton
                                aria-label="Share"
                                onClick={() => this.downVote(post.id)}>
                                <ThumbDown />
                            </IconButton>
                            <IconButton aria-label="Comments">
                                <Comment />
                            </IconButton> {post.commentCount}
                            <Link to={`/post/${post.id}`}>
                                <Button
                                    variant="outlined"
                                    color="secondary">
                                    Edit
                                </Button>
                            </Link>
                            {(this.props.deleteBtn === true)
                                ?
                                <Button variant="outlined">
                                    Delete
                                    </Button>

                                : <Link to={`${post.category}/${post.id}`}>
                                    <Button variant="outlined">
                                        more
                                        </Button>
                                </Link>
                            }
                        </CardActions>
                    </Card>
                ))}
            </div>
        )
    }
}

export default connect()(Posts)