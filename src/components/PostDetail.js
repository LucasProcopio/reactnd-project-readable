import React from "react";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading-bar";
import NavigationBar from "./NavigationBar";
import Comments from "./Comments";
import NotFound from "./NotFound";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import {
  getPostComments,
  getPostbyId,
  handleNewComment
} from "../actions/shared";

import { NewCommentForm } from "./CommentForm";
import ListPosts from "./ListPosts";

class PostDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      parentId: props.match.params.post_id,
      author: "",
      body: "",
      timestamp: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const postId = this.props.match.params.post_id;
    this.props.getPost(postId);
    this.props.getComments(postId);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  notify = () => {
    toast("Comment successfully posted!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    });
  };

  handleSubmit(event) {
    event.preventDefault();
    const comment = {
      id: Math.random()
        .toString(36)
        .substr(2, 10),
      timestamp: Date.now(),
      body: this.state.body,
      author: this.state.author,
      parentId: this.state.parentId
    };

    this.props.newComment(comment);
    this.props.getPost(comment.parentId);
    this.notify();
  }

  render() {
    if (this.props.post.length === 0) {
      return (
        <div>
          <NavigationBar />
          <NotFound />
        </div>
      );
    }

    return (
      <div>
        <LoadingBar />
        <NavigationBar />
        <ToastContainer />
        <ListPosts posts={this.props.post} deleteBtn={true} />
        <NewCommentForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          comment={this.state}
        />
        <hr />
        <Comments
          comments={this.props.comments}
          getPost={id => this.props.getPost(id)}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  post: Object.keys(state.posts).map(key => state.posts[key]),
  comments: Object.keys(state.comments).map(key => state.comments[key])
});

const mapDispatchToProps = dispatch => ({
  newComment: comment => dispatch(handleNewComment(comment)),
  getPost: postId => dispatch(getPostbyId(postId)),
  getComments: postId => dispatch(getPostComments(postId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetail);
