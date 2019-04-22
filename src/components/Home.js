import React from "react";
import { connect } from "react-redux";
import { handlePostsData } from "../actions/shared";
import NavigationBar from "./NavigationBar";
import LoadingBar from "react-redux-loading-bar";
import { Link } from "react-router-dom";
import ListPosts from "./ListPosts";
import { sortByDate, sortByScore } from "../actions/posts";
import { FaHotjar, FaRegCalendarAlt, FaPlusCircle } from "react-icons/fa";

import "../styles/home.scss";

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
        <div className="sort">
          <div className="sort-wrapper">
            <span className="sort-title">SORT:</span>
            <div
              className="date-sort"
              onClick={() => this.sortDate(this.props.posts)}
            >
              <FaRegCalendarAlt /> DATE
            </div>
            <div
              className="hot-sort"
              onClick={() => this.sortHot(this.props.posts)}
            >
              <FaHotjar /> HOT
            </div>
          </div>
        </div>
        <div className="posts">
          <div className="top">
            <div className="category-name">Home</div>
            <div>
              <Link className="new-post-btn" to="/new/post">
                <FaPlusCircle /> New Post
              </Link>
            </div>
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
