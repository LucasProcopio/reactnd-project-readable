import React from "react";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading-bar";
import NavigationBar from "./NavigationBar";
import Comments from "./Comments";
import NotFound from "./NotFound";

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
        {console.log(this.props.post)}
        <p>** Post Details **</p>
        <p>Category: {this.props.match.params.category}</p>
        <ListPosts posts={this.props.post} deleteBtn={true} />
        <p>** Add a comment **</p>
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
