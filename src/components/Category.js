import React from "react";
import NavigationBar from "./NavigationBar";
import { handlePostsData } from "../actions/shared";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading-bar";
import { Link } from "react-router-dom";
import ListPosts from "./ListPosts";
import { sortByDate, sortByScore } from "../actions/posts";
import { FaHotjar, FaRegCalendarAlt, FaPlusCircle } from "react-icons/fa";

class Category extends React.Component {
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
      <div className="main-category">
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
        <div className="top">
          <div className="category-name">
            {this.props.match.params.category}
          </div>
          <div>
            <Link className="new-post-btn" to="/new/post">
              <FaPlusCircle /> New Post
            </Link>
          </div>
        </div>
        <ListPosts
          posts={this.props.posts.filter(post => {
            return post.category === this.props.match.params.category;
          })}
          showMore={true}
        />
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
)(Category);
