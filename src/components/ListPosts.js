import React from "react";
import Posts from "./Posts";
import NotFound from "./NotFound";

class ListPosts extends React.Component {
  renderPosts = () => {
    const posts = this.props.posts;
    if (posts.length > 0) {
      return <Posts posts={posts} showMore={this.props.showMore} />;
    } else {
      return <NotFound />;
    }
  };

  render() {
    return <div>{this.renderPosts()}</div>;
  }
}

export default ListPosts;
