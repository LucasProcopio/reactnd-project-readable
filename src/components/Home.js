import React from "react";
import { connect } from "react-redux";
import { handlePostsData } from "../actions/shared";
import NavigationBar from "./NavigationBar";
import LoadingBar from "react-redux-loading-bar";
import { Link } from "react-router-dom";
import ListPosts from "./ListPosts";
import { sortByDate, sortByScore } from "../actions/posts";

class Home extends React.Component {
  componentDidMount() {
    this.props.getPosts();
  }

  sortDate = posts => {
    this.props.sortByDate(posts);
  };

  sortHot = posts => {
    this.props.sortByScore(posts);
  };

  render() {
    return (
      <div className="main">
        <LoadingBar />
        <NavigationBar />
        <button onClick={() => this.sortDate(this.props.posts)}>
          SORT BY DATE
        </button>
        <button onClick={() => this.sortHot(this.props.posts)}>HOT</button>
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

const mapDispatchToProps = dispatch => ({
  sortByDate: posts => dispatch(sortByDate(posts)),
  sortByScore: posts => dispatch(sortByScore(posts)),
  getPosts: () => dispatch(handlePostsData())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
