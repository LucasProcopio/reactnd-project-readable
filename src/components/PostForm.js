import React from "react";
import "../styles/newpost.scss";
import { FaRocket } from "react-icons/fa";
export default function PostForm(props) {
  return (
    <div className="form-wrapper">
      <form className="form-post" onSubmit={props.handleSubmit}>
        <div className="form-itens">
          <select
            name="category"
            onChange={props.handleChange}
            value={props.post.category}
          >
            {props.categories.map(category => (
              <option key={category.path} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
          <input
            name="author"
            type="text"
            placeholder="Author"
            value={props.post.author}
            onChange={props.handleChange}
          />
          <input
            name="title"
            type="text"
            placeholder="Title"
            value={props.post.title}
            onChange={props.handleChange}
          />
          <textarea
            name="body"
            value={props.post.body}
            placeholder="Body of the post"
            onChange={props.handleChange}
            rows="8"
            cols="80"
          />
          <div className="form-submit">
            <FaRocket />
            <input className="form-submit-btn" type="submit" value="Submit" />
          </div>
        </div>
      </form>
    </div>
  );
}
