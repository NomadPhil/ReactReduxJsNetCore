import fetch from 'isomorphic-fetch';

export const LOAD_COMMENTS_REQUEST = 'LOAD_COMMENTS_REQUEST';
export const LOAD_COMMENTS_SUCCESS = 'LOAD_COMMENTS_SUCCESS';
export const LOAD_COMMENTS_ERROR = 'LOAD_COMMENTS_ERROR';
export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_ERROR = 'ADD_COMMENT_ERROR';
export const DELETE_COMMENT_REQUEST = 'DELETE_COMMENT_REQUEST';
export const DELETE_COMMENT_SUCCESS = 'DELETE_COMMENT_SUCCESS';
export const DELETE_COMMENT_ERROR = 'DELETE_COMMENTS_ERROR';

let nextCommentId = 0;

const url = 'api/Comment';

export function loadComments() {
    return function (dispatch) {
        dispatch(loadCommentsRequest());
        return fetch(url)
            .then(response => response.json())
            .then(json => dispatch(loadCommentsSuccess(json)))
            .catch(error => dispatch(loadCommentsError(error)));
    }
}


export const loadCommentsRequest = () => {
    return {
        type:LOAD_COMMENTS_REQUEST
    };
}

export const loadCommentsSuccess = (data) => {
    return {
        type:LOAD_COMMENTS_SUCCESS,
        data
    };
}

export const loadCommentsError = (error) => {
    return {
        type:LOAD_COMMENTS_ERROR,
        error
    };
}

export const addComment = (comment) => {
    return dispatch => {
        dispatch(addCommentRequest());
        return fetch(url, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(comment)
             })
            .then(response => response.json())
            .then(json => dispatch(addCommentSuccess(json)))
            .catch(error => dispatch(addCommentError(error)));
    }
}

export const addCommentRequest = () => {
    return {
        type: ADD_COMMENT_REQUEST
    }
}

export const addCommentSuccess = (comment) => {
    return {
        type: ADD_COMMENT_SUCCESS,  
        id: nextCommentId++,
        comment
    }
}

export const addCommentError = (error) => {
    return {
        type: ADD_COMMENT_ERROR,  
        error
    }
}

export const deleteComment = (id) => {
    return dispatch => {
        dispatch(deleteCommentRequest());
        return fetch(url + "/" + id, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(json => dispatch(deleteCommentSuccess(json)))
        .catch(error => dispatch(deleteCommentError(error)));
    }
}

export const deleteCommentRequest = () => {
    return {
        type: DELETE_COMMENT_REQUEST
    }
}

export const deleteCommentSuccess = (id) => {
    return {
        type: DELETE_COMMENT_SUCCESS,  
        id
    }
}

export const deleteCommentError = (error) => {
    return {
        type: DELETE_COMMENT_ERROR,  
        error
    }
}
