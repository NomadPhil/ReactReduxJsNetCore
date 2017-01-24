import React from 'react';
import Comment from './Comment';

const CommentList = (props) =>  {
    let commentNodes = [];

    Object.keys(props.comments).forEach(function (key) {
        commentNodes.push(
            <Comment author={props.comments[key].author} key={key} id={key}>
                {props.comments[key].text}
            </Comment>
        );
    });

    return (
        <div className="commentList">
            {commentNodes}
        </div>
    );
}

export default CommentList;