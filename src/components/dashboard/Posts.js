import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import ThumbUp from '@material-ui/icons/ThumbUp'
import ThumbDown from '@material-ui/icons/ThumbDown'
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
                            <span className="postAuthor">
                                {post.author}
                            </span>
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
                            </IconButton> {post.commentCount}
                        </CardActions>
                    </Card>
                ))}
            </div>
        )
    }
}

export default Posts