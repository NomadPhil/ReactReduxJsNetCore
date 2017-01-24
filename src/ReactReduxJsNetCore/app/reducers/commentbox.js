

import {
    LOAD_COMMENTS_REQUEST,
    LOAD_COMMENTS_ERROR,
    LOAD_COMMENTS_SUCCESS,
    ADD_COMMENT_REQUEST,
    ADD_COMMENT_ERROR,
    ADD_COMMENT_SUCCESS,
    DELETE_COMMENT_REQUEST,
    DELETE_COMMENT_ERROR,
    DELETE_COMMENT_SUCCESS} from '../actions';

const initState = {
    loading: false,
    error: null,
    comments: [],
    currentComment: { author: '', text: '' }
};

const commentBoxApp = (state = initState, action) => {
    switch(action.type) {
        
        case LOAD_COMMENTS_REQUEST:
        case ADD_COMMENT_REQUEST:
        case DELETE_COMMENT_REQUEST: {
            return {
              ...state,
                loading: true
            };
        }

        case LOAD_COMMENTS_SUCCESS:
        {

            let comments = [];
           
            for (var comment of action.data) {
                comments[comment.id] = { author: comment.author, text: comment.text }
            }
            

            return {
              ...state,
                loading: false,
                error: null,
                comments: comments
            };
        }

        case ADD_COMMENT_SUCCESS:
        {
            let comments = state.comments;
            comments[action.comment.id] = { author: action.comment.author, text: action.comment.text }

            return {
                ...state,
                loading: false,
                error: null,
                comments: comments
        };
        }

        case DELETE_COMMENT_SUCCESS: {

            let comments = state.comments;

            delete comments[action.id];

            return {
              ...state,
                loading: false,
                error: null,
                comments: comments
            };
        }

        case LOAD_COMMENTS_ERROR:
        case ADD_COMMENT_ERROR:
        case DELETE_COMMENT_ERROR: {
            return {
              ...state,
                loading: false,
                error: action.error
            };
        }    

        default: {
            return state;
        }
    }
}

export default commentBoxApp;