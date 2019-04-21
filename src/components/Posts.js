import React from "react";
import { connect } from "react-redux";
import { formatDate } from "../utils/helpers";
import { postCard } from "../styles/post";
import {
  upVotePostScore,
  downVotePostScore,
  handleDeletePost
} from "../actions/shared";
import { Link, Redirect } from "react-router-dom";

// material design
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ThumbUp from "@material-ui/icons/ThumbUp";
import ThumbDown from "@material-ui/icons/ThumbDown";
import Comment from "@material-ui/icons/Comment";
import Button from "@material-ui/core/Button";
import { confirmAlert } from "react-confirm-alert";

class Posts extends React.Component {
  state = {
    redirect: false
  };

  upVote = postId => {
    this.props.dispatch(upVotePostScore(postId));
  };

  downVote = postId => {
    this.props.dispatch(downVotePostScore(postId));
  };

  deletePost = postId => {
    this.props.dispatch(handleDeletePost(postId));
    this.setRedirect();
  };

  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };

  //redirects the user if the post is deleted
  renderRedirect = () => {
    if (this.state.redirect === true) {
      return <Redirect to="/" />;
    }
  };

  handleDeletePost = postId => {
    confirmAlert({
      title: "Confirm Delete",
      message: "Are you sure you want to delete ?",
      buttons: [
        {
          label: "Delete",
          onClick: () => this.deletePost(postId)
        },
        {
          label: "Keep",
          onClick: () => null
        }
      ]
    });
  };

  render() {
    return (
      <div className="postsContainer">
        {this.renderRedirect()}
        {this.props.posts.map(post => (
          <Card style={postCard} key={post.id}>
            <CardHeader
              title={post.title}
              subheader={formatDate(post.timestamp)}
            />
            <CardContent>
              <div className="postInfo">
                <span className="postAuthor">{post.author}</span>
                <span className="postCategory">--{post.category}--</span>
              </div>
              <Typography component="p">{post.body}</Typography>
            </CardContent>
            <CardActions className="postCardAction" disableActionSpacing>
              <IconButton
                aria-label="Add to favorites"
                onClick={() => this.upVote(post.id)}
              >
                <ThumbUp />
              </IconButton>{" "}
              {post.voteScore}
              <IconButton
                aria-label="Share"
                onClick={() => this.downVote(post.id)}
              >
                <ThumbDown />
              </IconButton>
              <IconButton aria-label="Comments">
                <Comment />
              </IconButton>{" "}
              {post.commentCount}
              <Link to={`/post/${post.id}`}>
                <Button variant="outlined" color="secondary">
                  Edit
                </Button>
              </Link>
              {this.props.deleteBtn === true ? (
                <Button
                  onClick={() => this.handleDeletePost(post.id)}
                  variant="outlined"
                >
                  Delete
                </Button>
              ) : (
                <Link to={`${post.category}/${post.id}`}>
                  <Button variant="outlined">More</Button>
                </Link>
              )}
            </CardActions>
          </Card>
        ))}
      </div>
    );
  }
}

export default connect()(Posts);
