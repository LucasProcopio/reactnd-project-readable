import React from "react";
import { connect } from "react-redux";
import { handleCategoryData, createNewPost } from "../actions/shared";
import PostForm from "./PostForm";
import NavigationBar from "./NavigationBar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

class NewPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
      body: "",
      category: "react"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(handleCategoryData());
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  notifyNewPost = () => {
    toast("Post successfully created !", {
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
    // todo: post validation.
    // todo: display character count validation
    const post = {
      id: Math.random()
        .toString(36)
        .substr(2, 9),
      timestamp: Date.now(),
      title: this.state.title,
      body: this.state.body,
      author: this.state.author,
      category: this.state.category
    };

    this.props.dispatch(createNewPost(post));
    this.notifyNewPost();
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

const mapStateToProps = state => {
  return {
    categories: Object.keys(state.categories).map(key => state.categories[key])
  };
};
export default connect(mapStateToProps)(NewPost);
