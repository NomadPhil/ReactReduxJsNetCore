import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteComment } from '../actions';

class Comment extends Component {
    
    constructor(props) {
        super(props);
        this.handleCommentDelete = this.handleCommentDelete.bind(this);
    }

    handleCommentDelete (e) {
        e.preventDefault();
        this.props.dispatch(deleteComment(this.props.id));
    }
    render() {
        return (
            <div className="comment">
            <dl>
                <dt className="commentAuthor">
                    {this.props.author}
                </dt>
                <dd>
                    {this.props.children}
                    <br />
                    <input type="button" value="Delete" className="btn btn-danger" onClick={this.handleCommentDelete} />
                </dd>              
            </dl>              
            </div>
        );
    }
};
export default connect()(Comment);
