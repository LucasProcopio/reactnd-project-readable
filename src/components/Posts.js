import React from "react";
import { connect } from "react-redux";
import { formatDate } from "../utils/helpers";
import {
  upVotePostScore,
  downVotePostScore,
  handleDeletePost
} from "../actions/shared";
import { Link, Redirect } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import {
  FaRegThumbsDown,
  FaRegThumbsUp,
  FaRegComments,
  FaRegEdit,
  FaRegArrowAltCircleRight,
  FaRegTrashAlt
} from "react-icons/fa";

import "../styles/posts.scss";

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
      <div className="post-container">
        {this.renderRedirect()}
        {this.props.posts.map(post => (
          <div className="post-wrapper" key={post.id}>
            <div className="post-header">
              <span className="post-category">{post.category}</span>
              <span className="post-author">Posted by: {post.author}</span>
              <span className="post-date">{formatDate(post.timestamp)}</span>
            </div>
            <div className="post-body-wrapper">
              <div className="post-body">
                <span className="post-title">{post.title}</span>
                <div className="post-body-content">{post.body}</div>
              </div>
            </div>
            <div className="post-footer-wrapper">
              <div className="post-score-count">
                <FaRegThumbsUp
                  className="vote-score-btn"
                  onClick={() => this.upVote(post.id)}
                />
                <span className="vote-score">{post.voteScore}</span>
                <FaRegThumbsDown
                  className="vote-score-btn"
                  onClick={() => this.downVote(post.id)}
                />
                <FaRegComments className="comment-score-icon" />
                <div className="post-comment-count">{post.commentCount}</div>
              </div>
              <div className="post-actions">
                <Link to={`/post/${post.id}`}>
                  <FaRegEdit className="edit-post-btn" />
                </Link>
                {this.props.deleteBtn === true ? (
                  <FaRegTrashAlt
                    onClick={() => this.handleDeletePost(post.id)}
                    className="delete-post-btn"
                  />
                ) : (
                  <Link to={`${post.category}/${post.id}`}>
                    <FaRegArrowAltCircleRight className="know-more-btn" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default connect()(Posts);
