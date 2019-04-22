import React from "react";
import NavigationBar from "./NavigationBar";
import { handleEditPost } from "../actions/shared";
import { connect } from "react-redux";
import PostForm from "./PostForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

class EditPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      author: "",
      body: "",
      category: "",
      commentCount: 0,
      deleted: false,
      timestamp: 0,
      title: "",
      voteScore: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const postID = this.props.match.params.post_id;
    const post = this.props.posts.filter(post => post.id === postID);
    this.setState({ ...post[0] });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  notifyEditPost = () => {
    toast("Post successfully edited !", {
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
    this.props.dispatch(handleEditPost(this.state));
    this.notifyEditPost();
  }

  render() {
    return (
      <div>
        <NavigationBar />
        <ToastContainer />
        <PostForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          post={this.state}
          categories={this.props.categories}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: Object.keys(state.posts).map(key => state.posts[key]),
  categories: Object.keys(state.categories).map(key => state.categories[key])
});
export default connect(mapStateToProps)(EditPost);
