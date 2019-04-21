import React from "react";
import NavigationBar from "./NavigationBar";
import { handlePostsData } from "../actions/shared";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading-bar";
import { Link } from "react-router-dom";
import ListPosts from "./ListPosts";

class Category extends React.Component {
  componentDidMount() {
    this.props.dispatch(handlePostsData());
  }

  render() {
    return (
      <div>
        <LoadingBar />
        <NavigationBar />
        <div>Category > {this.props.match.params.category}</div>
        <div>
          <Link className="new-post-btn" to="/new/post">
            Add new post
          </Link>
        </div>
        <ListPosts
          posts={this.props.posts.filter(post => {
            return post.category === this.props.match.params.category;
          })}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: Object.keys(state.posts).map(key => state.posts[key])
});

export default connect(mapStateToProps)(Category);
