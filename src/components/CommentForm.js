import React from 'react'

export default function CommentForm(props){

	return(
		<form onSubmit={props.handleSubmit}>
            <label>
                Body:
                <textarea
                    name="body"
                    value={props.comment.body}
                    placeholder="Body of the post"
                    onChange={props.handleChange}>
                </textarea>
            </label>
            <input type="submit" value="Submit" />
		</form>
	)
}