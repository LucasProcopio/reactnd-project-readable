import React from 'react'

export function CommentForm(props) {

    return (
        <form className="comment-form" onSubmit={props.handleSubmit}>
            <label>
                Body:
                <textarea
                    name="body"
                    value={props.comment.body}
                    placeholder="Body of the comment"
                    onChange={props.handleChange}>
                </textarea>
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}

export function NewCommentForm(props) {
    return (
        <form className="new-comment-form" onSubmit={props.handleSubmit}>
            <label>
                author
                <input
                    type="text"
                    name="author"
                    value={props.comment.author}
                    placeholder="name of the author"
                    onChange={props.handleChange}
                />
            </label>
            <label>
                <textarea
                    name="body"
                    value={props.comment.body}
                    placeholder="Body of the comment"
                    onChange={props.handleChange}>
                </textarea>
                <input type="submit" value="Submit" />
            </label>
        </form>
    )
}