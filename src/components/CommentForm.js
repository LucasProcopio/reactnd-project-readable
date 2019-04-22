import React from "react";
import "../styles/commentForm.scss";
import { FaRocket, FaPlusCircle, FaRegEdit } from "react-icons/fa";

export function CommentForm(props) {
  return (
    <div className="comment-form-wrapper">
      <form className="comment-form" onSubmit={props.handleSubmit}>
        <div className="add-comment-header">
          <FaRegEdit /> Edit comment
        </div>
        <textarea
          name="body"
          value={props.comment.body}
          placeholder="Body of the comment"
          onChange={props.handleChange}
        />
        <div className="form-submit">
          <FaRocket />
          <input className="form-submit-btn" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

export function NewCommentForm(props) {
  return (
    <div className="comment-form-wrapper">
      <form className="comment-form" onSubmit={props.handleSubmit}>
        <div className="add-comment-header">
          <FaPlusCircle /> Add a comment
        </div>
        <input
          type="text"
          name="author"
          value={props.comment.author}
          placeholder="author"
          onChange={props.handleChange}
        />
        <textarea
          name="body"
          value={props.comment.body}
          placeholder="comment"
          onChange={props.handleChange}
        />
        <div className="form-submit">
          <FaRocket />
          <input className="form-submit-btn" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}
