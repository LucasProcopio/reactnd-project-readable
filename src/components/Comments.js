import React from "react";
import { connect } from "react-redux";
import { formatDate } from "../utils/helpers";
import { Link } from "react-router-dom";
import {
  upVoteCommentScore,
  downVoteCommentScore,
  handleDeleteComment
} from "../actions/shared";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import {
  FaRegThumbsUp,
  FaRegThumbsDown,
  FaRegEdit,
  FaRegTrashAlt
} from "react-icons/fa";
import "../styles/comments.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Comments extends React.Component {
  upVote = id => {
    this.props.upVote(id);
  };

  downVote = id => {
    this.props.downVote(id);
  };

  delComment = comment => {
    confirmAlert({
      title: "Comfirm Delete",
      message: "Are you sure you want to delete ?",
      buttons: [
        {
          label: "Delete",
          onClick: () => this.handleDelete(comment)
        },
        {
          label: "Keep",
          onClick: () => null
        }
      ]
    });
  };

  notifyDeleteComment = () => {
    toast("Comment successfully deleted!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    });
  };

  handleDelete = comment => {
    this.props.deleteComment(comment.id);
    this.props.getPost(comment.parentId);
    this.notifyDeleteComment();
  };

  render() {
    return (
      <div className="comment-container">
        <ToastContainer />
        {this.props.comments.map(comment => (
          <div className="comment-wrapper" key={comment.id}>
            <div className="comment-body-wrapper">
              <div className="comment-info">
                <span className="comment-author">
                  Posted by: {comment.author}
                </span>
                <span className="comment-date">
                  {formatDate(comment.timestamp)}
                </span>
                <div className="comment-body">{comment.body}</div>
              </div>
            </div>
            <div className="comment-footer">
              <div className="comment-score-count">
                <FaRegThumbsUp
                  className="vote-score-btn"
                  onClick={() => this.upVote(comment.id)}
                />
                <span className="vote-score">{comment.voteScore}</span>
                <FaRegThumbsDown
                  className="vote-score-btn"
                  onClick={() => this.downVote(comment.id)}
                />
              </div>
              <div className="comments-actions">
                <Link to={`/comment/${comment.id}`}>
                  <FaRegEdit className="edit-post-btn" />
                </Link>
                <FaRegTrashAlt
                  onClick={() => this.delComment(comment)}
                  className="delete-post-btn"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  upVote: commentId => dispatch(upVoteCommentScore(commentId)),
  downVote: commentId => dispatch(downVoteCommentScore(commentId)),
  deleteComment: commentId => dispatch(handleDeleteComment(commentId))
});
export default connect(
  null,
  mapDispatchToProps
)(Comments);
