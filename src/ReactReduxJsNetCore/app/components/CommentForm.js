import React from 'react';
import { connect } from 'react-redux'; 
import { addComment } from '../actions'

let CommentForm = ({ dispatch }) => {

    let author, text;

    return (
        <div className="commentForm">
        <form className="commentForm form-inline" role="form" onSubmit={e => {
            e.preventDefault();
    if (!author.value.trim() || !author.value.trim()) {
        return;
    }
    dispatch(addComment({ author: author.value, text: text.value }));
    author.value = '', text.value = '';
}}>
        <input type="text" placeholder="Your name" ref={node => {author = node;}} className = "form-control" />
        <input type="text" placeholder="Say something..." ref={node => { text = node;}} className = "form-control" />
        <input type="submit" value="Post" className = "btn btn-primary" />
        </form>
        </div>
    );
}
CommentForm = connect()(CommentForm);

export default CommentForm;