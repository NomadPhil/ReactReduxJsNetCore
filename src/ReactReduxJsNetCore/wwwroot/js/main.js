webpackJsonp([0],{

/***/ 0:
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 32);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 179);
	
	var _App = __webpack_require__(/*! ./components/App */ 221);
	
	var _App2 = _interopRequireDefault(_App);
	
	var _configureStore = __webpack_require__(/*! ./configureStore */ 230);
	
	var _configureStore2 = _interopRequireDefault(_configureStore);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var store = (0, _configureStore2.default)();
	
	(0, _reactDom.render)(_react2.default.createElement(
	  _reactRedux.Provider,
	  { store: store },
	  _react2.default.createElement(_App2.default, null)
	), document.getElementById('content'));

/***/ },

/***/ 221:
/*!*******************************!*\
  !*** ./app/components/App.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _VisibleCommentBox = __webpack_require__(/*! ../containers/VisibleCommentBox */ 222);
	
	var _VisibleCommentBox2 = _interopRequireDefault(_VisibleCommentBox);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var App = function App() {
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(_VisibleCommentBox2.default, null)
	  );
	};
	
	exports.default = App;

/***/ },

/***/ 222:
/*!*********************************************!*\
  !*** ./app/containers/VisibleCommentBox.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 179);
	
	var _actions = __webpack_require__(/*! ../actions */ 223);
	
	var actions = _interopRequireWildcard(_actions);
	
	var _CommentBox = __webpack_require__(/*! ../components/CommentBox */ 226);
	
	var _CommentBox2 = _interopRequireDefault(_CommentBox);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var mapStateToProps = function mapStateToProps(state) {
	    return {
	        loading: state.commentBoxApp.loading,
	        error: state.commentBoxApp.error,
	        comments: state.commentBoxApp.comments
	    };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	    return {
	        loadComments: function loadComments() {
	            dispatch(actions.loadComments());
	        },
	        addComment: function addComment(comment) {
	            dispatch(actions.addComment(comment));
	        }
	    };
	};
	
	var VisibleCommentBox = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_CommentBox2.default);
	
	exports.default = VisibleCommentBox;

/***/ },

/***/ 223:
/*!******************************!*\
  !*** ./app/actions/index.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.deleteCommentError = exports.deleteCommentSuccess = exports.deleteCommentRequest = exports.deleteComment = exports.addCommentError = exports.addCommentSuccess = exports.addCommentRequest = exports.addComment = exports.loadCommentsError = exports.loadCommentsSuccess = exports.loadCommentsRequest = exports.DELETE_COMMENT_ERROR = exports.DELETE_COMMENT_SUCCESS = exports.DELETE_COMMENT_REQUEST = exports.ADD_COMMENT_ERROR = exports.ADD_COMMENT_SUCCESS = exports.ADD_COMMENT_REQUEST = exports.LOAD_COMMENTS_ERROR = exports.LOAD_COMMENTS_SUCCESS = exports.LOAD_COMMENTS_REQUEST = undefined;
	exports.loadComments = loadComments;
	
	var _isomorphicFetch = __webpack_require__(/*! isomorphic-fetch */ 224);
	
	var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var LOAD_COMMENTS_REQUEST = exports.LOAD_COMMENTS_REQUEST = 'LOAD_COMMENTS_REQUEST';
	var LOAD_COMMENTS_SUCCESS = exports.LOAD_COMMENTS_SUCCESS = 'LOAD_COMMENTS_SUCCESS';
	var LOAD_COMMENTS_ERROR = exports.LOAD_COMMENTS_ERROR = 'LOAD_COMMENTS_ERROR';
	var ADD_COMMENT_REQUEST = exports.ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
	var ADD_COMMENT_SUCCESS = exports.ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
	var ADD_COMMENT_ERROR = exports.ADD_COMMENT_ERROR = 'ADD_COMMENT_ERROR';
	var DELETE_COMMENT_REQUEST = exports.DELETE_COMMENT_REQUEST = 'DELETE_COMMENT_REQUEST';
	var DELETE_COMMENT_SUCCESS = exports.DELETE_COMMENT_SUCCESS = 'DELETE_COMMENT_SUCCESS';
	var DELETE_COMMENT_ERROR = exports.DELETE_COMMENT_ERROR = 'DELETE_COMMENTS_ERROR';
	
	var nextCommentId = 0;
	
	var url = 'api/Comment';
	
	function loadComments() {
	    return function (dispatch) {
	        dispatch(loadCommentsRequest());
	        return (0, _isomorphicFetch2.default)(url).then(function (response) {
	            return response.json();
	        }).then(function (json) {
	            return dispatch(loadCommentsSuccess(json));
	        }).catch(function (error) {
	            return dispatch(loadCommentsError(error));
	        });
	    };
	}
	
	var loadCommentsRequest = exports.loadCommentsRequest = function loadCommentsRequest() {
	    return {
	        type: LOAD_COMMENTS_REQUEST
	    };
	};
	
	var loadCommentsSuccess = exports.loadCommentsSuccess = function loadCommentsSuccess(data) {
	    return {
	        type: LOAD_COMMENTS_SUCCESS,
	        data: data
	    };
	};
	
	var loadCommentsError = exports.loadCommentsError = function loadCommentsError(error) {
	    return {
	        type: LOAD_COMMENTS_ERROR,
	        error: error
	    };
	};
	
	var addComment = exports.addComment = function addComment(comment) {
	    return function (dispatch) {
	        dispatch(addCommentRequest());
	        return (0, _isomorphicFetch2.default)(url, {
	            method: 'POST',
	            mode: 'cors',
	            headers: {
	                'Accept': 'application/json',
	                'Content-Type': 'application/json'
	            },
	            body: JSON.stringify(comment)
	        }).then(function (response) {
	            return response.json();
	        }).then(function (json) {
	            return dispatch(addCommentSuccess(json));
	        }).catch(function (error) {
	            return dispatch(addCommentError(error));
	        });
	    };
	};
	
	var addCommentRequest = exports.addCommentRequest = function addCommentRequest() {
	    return {
	        type: ADD_COMMENT_REQUEST
	    };
	};
	
	var addCommentSuccess = exports.addCommentSuccess = function addCommentSuccess(comment) {
	    return {
	        type: ADD_COMMENT_SUCCESS,
	        id: nextCommentId++,
	        comment: comment
	    };
	};
	
	var addCommentError = exports.addCommentError = function addCommentError(error) {
	    return {
	        type: ADD_COMMENT_ERROR,
	        error: error
	    };
	};
	
	var deleteComment = exports.deleteComment = function deleteComment(id) {
	    return function (dispatch) {
	        dispatch(deleteCommentRequest());
	        return (0, _isomorphicFetch2.default)(url + '/' + id, {
	            method: 'DELETE'
	        }).then(function (response) {
	            return response.json();
	        }).then(function (json) {
	            return dispatch(deleteCommentSuccess(json));
	        }).catch(function (error) {
	            return dispatch(deleteCommentError(error));
	        });
	    };
	};
	
	var deleteCommentRequest = exports.deleteCommentRequest = function deleteCommentRequest() {
	    return {
	        type: DELETE_COMMENT_REQUEST
	    };
	};
	
	var deleteCommentSuccess = exports.deleteCommentSuccess = function deleteCommentSuccess(id) {
	    return {
	        type: DELETE_COMMENT_SUCCESS,
	        id: id
	    };
	};
	
	var deleteCommentError = exports.deleteCommentError = function deleteCommentError(error) {
	    return {
	        type: DELETE_COMMENT_ERROR,
	        error: error
	    };
	};

/***/ },

/***/ 226:
/*!**************************************!*\
  !*** ./app/components/CommentBox.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _CommentList = __webpack_require__(/*! ./CommentList */ 227);
	
	var _CommentList2 = _interopRequireDefault(_CommentList);
	
	var _CommentForm = __webpack_require__(/*! ./CommentForm */ 229);
	
	var _CommentForm2 = _interopRequireDefault(_CommentForm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CommentBox = function (_Component) {
	    _inherits(CommentBox, _Component);
	
	    function CommentBox(props) {
	        _classCallCheck(this, CommentBox);
	
	        var _this = _possibleConstructorReturn(this, (CommentBox.__proto__ || Object.getPrototypeOf(CommentBox)).call(this, props));
	
	        _this.handleCommentSubmit = _this.handleCommentSubmit.bind(_this);
	        return _this;
	    }
	
	    _createClass(CommentBox, [{
	        key: 'handleCommentSubmit',
	        value: function handleCommentSubmit(comment) {
	            this.props.addComment(comment);
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.props.loadComments();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var loading = _props.loading;
	            var comments = _props.comments;
	
	
	            return _react2.default.createElement(
	                'div',
	                { className: 'commentBox' },
	                loading ? _react2.default.createElement(
	                    'p',
	                    null,
	                    'Loading...'
	                ) : null,
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement(
	                        'h2',
	                        null,
	                        'Comments'
	                    ),
	                    _react2.default.createElement(_CommentList2.default, { comments: comments }),
	                    _react2.default.createElement(_CommentForm2.default, { onCommentSubmit: this.handleCommentSubmit })
	                )
	            );
	        }
	    }]);
	
	    return CommentBox;
	}(_react.Component);
	
	CommentBox.propTypes = {
	    loading: _react.PropTypes.bool.isRequired,
	    comments: _react.PropTypes.array.isRequired
	};
	
	exports.default = CommentBox;

/***/ },

/***/ 227:
/*!***************************************!*\
  !*** ./app/components/CommentList.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Comment = __webpack_require__(/*! ./Comment */ 228);
	
	var _Comment2 = _interopRequireDefault(_Comment);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var CommentList = function CommentList(props) {
	    var commentNodes = [];
	
	    Object.keys(props.comments).forEach(function (key) {
	        commentNodes.push(_react2.default.createElement(
	            _Comment2.default,
	            { author: props.comments[key].author, key: key, id: key },
	            props.comments[key].text
	        ));
	    });
	
	    return _react2.default.createElement(
	        'div',
	        { className: 'commentList' },
	        commentNodes
	    );
	};
	
	exports.default = CommentList;

/***/ },

/***/ 228:
/*!***********************************!*\
  !*** ./app/components/Comment.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 179);
	
	var _actions = __webpack_require__(/*! ../actions */ 223);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Comment = function (_Component) {
	    _inherits(Comment, _Component);
	
	    function Comment(props) {
	        _classCallCheck(this, Comment);
	
	        var _this = _possibleConstructorReturn(this, (Comment.__proto__ || Object.getPrototypeOf(Comment)).call(this, props));
	
	        _this.handleCommentDelete = _this.handleCommentDelete.bind(_this);
	        return _this;
	    }
	
	    _createClass(Comment, [{
	        key: 'handleCommentDelete',
	        value: function handleCommentDelete(e) {
	            e.preventDefault();
	            this.props.dispatch((0, _actions.deleteComment)(this.props.id));
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'comment' },
	                _react2.default.createElement(
	                    'dl',
	                    null,
	                    _react2.default.createElement(
	                        'dt',
	                        { className: 'commentAuthor' },
	                        this.props.author
	                    ),
	                    _react2.default.createElement(
	                        'dd',
	                        null,
	                        this.props.children,
	                        _react2.default.createElement('br', null),
	                        _react2.default.createElement('input', { type: 'button', value: 'Delete', className: 'btn btn-danger', onClick: this.handleCommentDelete })
	                    )
	                )
	            );
	        }
	    }]);
	
	    return Comment;
	}(_react.Component);
	
	;
	exports.default = (0, _reactRedux.connect)()(Comment);

/***/ },

/***/ 229:
/*!***************************************!*\
  !*** ./app/components/CommentForm.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 179);
	
	var _actions = __webpack_require__(/*! ../actions */ 223);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var CommentForm = function CommentForm(_ref) {
	    var dispatch = _ref.dispatch;
	
	
	    var author = void 0,
	        text = void 0;
	
	    return _react2.default.createElement(
	        'div',
	        { className: 'commentForm' },
	        _react2.default.createElement(
	            'form',
	            { className: 'commentForm form-inline', role: 'form', onSubmit: function onSubmit(e) {
	                    e.preventDefault();
	                    if (!author.value.trim() || !author.value.trim()) {
	                        return;
	                    }
	                    dispatch((0, _actions.addComment)({ author: author.value, text: text.value }));
	                    author.value = '', text.value = '';
	                } },
	            _react2.default.createElement('input', { type: 'text', placeholder: 'Your name', ref: function ref(node) {
	                    author = node;
	                }, className: 'form-control' }),
	            _react2.default.createElement('input', { type: 'text', placeholder: 'Say something...', ref: function ref(node) {
	                    text = node;
	                }, className: 'form-control' }),
	            _react2.default.createElement('input', { type: 'submit', value: 'Post', className: 'btn btn-primary' })
	        )
	    );
	};
	CommentForm = (0, _reactRedux.connect)()(CommentForm);
	
	exports.default = CommentForm;

/***/ },

/***/ 230:
/*!*******************************!*\
  !*** ./app/configureStore.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = configureStore;
	
	var _redux = __webpack_require__(/*! redux */ 190);
	
	var _reduxThunk = __webpack_require__(/*! redux-thunk */ 231);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	var _reduxLogger = __webpack_require__(/*! redux-logger */ 232);
	
	var _reduxLogger2 = _interopRequireDefault(_reduxLogger);
	
	var _reducers = __webpack_require__(/*! ./reducers */ 238);
	
	var _reducers2 = _interopRequireDefault(_reducers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var loggerMiddleware = (0, _reduxLogger2.default)();
	
	function configureStore(preloadedState) {
	    return (0, _redux.createStore)(_reducers2.default, preloadedState, (0, _redux.applyMiddleware)(_reduxThunk2.default, loggerMiddleware));
	}

/***/ },

/***/ 238:
/*!*******************************!*\
  !*** ./app/reducers/index.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _redux = __webpack_require__(/*! redux */ 190);
	
	var _CommentBox = __webpack_require__(/*! ./CommentBox */ 239);
	
	var _CommentBox2 = _interopRequireDefault(_CommentBox);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var app = (0, _redux.combineReducers)({
	    commentBoxApp: _CommentBox2.default
	});
	
	exports.default = app;

/***/ },

/***/ 239:
/*!************************************!*\
  !*** ./app/reducers/CommentBox.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _actions = __webpack_require__(/*! ../actions */ 223);
	
	var initState = {
	    loading: false,
	    error: null,
	    comments: [],
	    currentComment: { author: '', text: '' }
	};
	
	var commentBoxApp = function commentBoxApp() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? initState : arguments[0];
	    var action = arguments[1];
	
	    switch (action.type) {
	
	        case _actions.LOAD_COMMENTS_REQUEST:
	        case _actions.ADD_COMMENT_REQUEST:
	        case _actions.DELETE_COMMENT_REQUEST:
	            {
	                return _extends({}, state, {
	                    loading: true
	                });
	            }
	
	        case _actions.LOAD_COMMENTS_SUCCESS:
	            {
	
	                var comments = [];
	
	                var _iteratorNormalCompletion = true;
	                var _didIteratorError = false;
	                var _iteratorError = undefined;
	
	                try {
	                    for (var _iterator = action.data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                        var comment = _step.value;
	
	                        comments[comment.id] = { author: comment.author, text: comment.text };
	                    }
	                } catch (err) {
	                    _didIteratorError = true;
	                    _iteratorError = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion && _iterator.return) {
	                            _iterator.return();
	                        }
	                    } finally {
	                        if (_didIteratorError) {
	                            throw _iteratorError;
	                        }
	                    }
	                }
	
	                return _extends({}, state, {
	                    loading: false,
	                    error: null,
	                    comments: comments
	                });
	            }
	
	        case _actions.ADD_COMMENT_SUCCESS:
	            {
	                var _comments = state.comments;
	                _comments[action.comment.id] = { author: action.comment.author, text: action.comment.text };
	
	                return _extends({}, state, {
	                    loading: false,
	                    error: null,
	                    comments: _comments
	                });
	            }
	
	        case _actions.DELETE_COMMENT_SUCCESS:
	            {
	
	                var _comments2 = state.comments;
	
	                delete _comments2[action.id];
	
	                return _extends({}, state, {
	                    loading: false,
	                    error: null,
	                    comments: _comments2
	                });
	            }
	
	        case _actions.LOAD_COMMENTS_ERROR:
	        case _actions.ADD_COMMENT_ERROR:
	        case _actions.DELETE_COMMENT_ERROR:
	            {
	                return _extends({}, state, {
	                    loading: false,
	                    error: action.error
	                });
	            }
	
	        default:
	            {
	                return state;
	            }
	    }
	};
	
	exports.default = commentBoxApp;

/***/ }

});
//# sourceMappingURL=main.js.map