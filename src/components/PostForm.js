import React from "react";

export default function PostForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <label>
        Category:
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
      </label>
      <label>
        Author:
        <input
          name="author"
          type="text"
          placeholder="Author"
          value={props.post.author}
          onChange={props.handleChange}
        />
      </label>
      <label>
        Title:
        <input
          name="title"
          type="text"
          placeholder="Title"
          value={props.post.title}
          onChange={props.handleChange}
        />
      </label>
      <label>
        Body:
        <textarea
          name="body"
          value={props.post.body}
          placeholder="Body of the post"
          onChange={props.handleChange}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
