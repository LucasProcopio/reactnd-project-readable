import React from "react";
import { connect } from "react-redux";
import { handlePostsData } from "../actions/shared";
import NavigationBar from "./NavigationBar";
import LoadingBar from "react-redux-loading-bar";
import { Link } from "react-router-dom";
import ListPosts from "./ListPosts";

class Home extends React.Component {
  componentDidMount() {
    this.props.dispatch(handlePostsData());
  }

  render() {
    return (
      <div className="main">
        <LoadingBar />
        <NavigationBar />
        <div className="posts">
          <div>Category > All</div>
          <div>
            <Link className="new-post-btn" to="/new/post">
              Add new post
            </Link>
          </div>
        </div>
        <ListPosts posts={this.props.posts} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: Object.keys(state.posts).map(key => state.posts[key])
});

export default connect(mapStateToProps)(Home);
