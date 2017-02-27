import React, { Component, PropTypes } from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

class CommentBox extends Component {
    
    constructor(props) {
        super(props);
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    }

    handleCommentSubmit (comment) {
        this.props.addComment(comment);
    }
    componentDidMount() {
        this.props.loadComments();
    }
    render() {

        const { loading, comments } = this.props;

        return (
            
            <div className="commentBox">
                {loading  ? <p>Loading...</p> : null }                
                <div>
                    <h2>Comments</h2>
                    <CommentList comments = {comments} />
                    <CommentForm onCommentSubmit={this.handleCommentSubmit} />
                </div>
            </div>
        );
        }
    }

CommentBox.propTypes = {
    loading: PropTypes.bool.isRequired,
    comments: PropTypes.array.isRequired
}

export default CommentBox;
