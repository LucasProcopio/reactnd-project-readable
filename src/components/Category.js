import React from "react";
import NavigationBar from "./NavigationBar";
import { handlePostsData } from "../actions/shared";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading-bar";
import { Link } from "react-router-dom";
import ListPosts from "./ListPosts";
import { sortByDate, sortByScore } from "../actions/posts";

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
      <div>
        <LoadingBar />
        <NavigationBar />
        <div>Category > {this.props.match.params.category}</div>
        <div>
          <Link className="new-post-btn" to="/new/post">
            Add new post
          </Link>
        </div>
        <div className="sort-posts">
          <button onClick={() => this.sortDate(this.props.posts)}>
            SORT BY DATE
          </button>
          <button onClick={() => this.sortHot(this.props.posts)}>HOT</button>
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

const mapDispatchToProps = dispatch => ({
  sortByDate: posts => dispatch(sortByDate(posts)),
  sortByScore: posts => dispatch(sortByScore(posts)),
  getPosts: () => dispatch(handlePostsData())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Category);
