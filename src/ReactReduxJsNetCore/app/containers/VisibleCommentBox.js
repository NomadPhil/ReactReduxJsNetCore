import { connect } from 'react-redux'; 
import * as actions from '../actions';
import CommentBox from '../components/CommentBox'

const mapStateToProps = (state) => {
    return {
        loading: state.commentBoxApp.loading,
        error: state.commentBoxApp.error,
        comments: state.commentBoxApp.comments
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadComments: () => {
            dispatch(actions.loadComments());
        },
        addComment: (comment) => {
            dispatch(actions.addComment(comment));
        }
    }
}

const VisibleCommentBox = connect(
   mapStateToProps, 
   mapDispatchToProps
)(CommentBox);

export default VisibleCommentBox;

