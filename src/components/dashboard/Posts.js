import React from 'react'
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
import { formatDate } from '../../utils/helpers'
import { postCard } from '../../styles/post'

class Posts extends React.Component {
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
                                <span className="postAuthor">{post.author}</span>
                                <span className="postCategory">--{post.category}--</span>
                            </div>
                            <Typography component="p">
                                {post.body}
                            </Typography>
                        </CardContent>
                        <CardActions
                            className='postCardAction'
                            disableActionSpacing>
                            <IconButton aria-label="Add to favorites">
                                <ThumbUp />
                            </IconButton> {post.voteScore}
                            <IconButton aria-label="Share">
                                <ThumbDown />
                            </IconButton>
                            <IconButton aria-label="Comments">
                                <Comment />
                            </IconButton> {post.commentCount}
                            <Button
                                variant="outlined"
                                href="#link"
                                color="secondary">
                                Edit
                            </Button>
                            <Button
                                variant="outlined"
                                href="#link">
                                more
                            </Button>
                        </CardActions>
                    </Card>
                ))}
            </div>
        )
    }
}

export default Posts