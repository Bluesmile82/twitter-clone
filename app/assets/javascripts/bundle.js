/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _tweet_box = __webpack_require__(1);

	var _tweet_box2 = _interopRequireDefault(_tweet_box);

	var _tweet_list = __webpack_require__(2);

	var _tweet_list2 = _interopRequireDefault(_tweet_list);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var mockTweets = [{ id: 1, name: 'Samer Buna', title: 'Sdk', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus.' }, { id: 2, name: 'Buna lala', title: 'Sasd', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus.' }, { id: 3, name: 'Kjhsdkj kjs', title: 'Sasd', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus.' }];

	var Main = function (_React$Component) {
	  _inherits(Main, _React$Component);

	  function Main(props) {
	    _classCallCheck(this, Main);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Main).call(this, props));

	    _this.state = { tweetList: mockTweets };
	    return _this;
	  }

	  _createClass(Main, [{
	    key: 'addTweet',
	    value: function addTweet(tweetToAdd) {
	      var newTweetList = this.state.tweetList;
	      newTweetList.unshift({ id: Date.now(), title: 'Guest', content: tweetToAdd });
	      this.setState({ tweetList: newTweetList });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        { className: 'container' },
	        React.createElement(_tweet_box2.default, { sendTweet: this.addTweet.bind(this) }),
	        React.createElement(_tweet_list2.default, { tweets: this.state.tweetList })
	      );
	    }
	  }]);

	  return Main;
	}(React.Component);

	exports.default = Main;


	var documentReady = function documentReady() {
	  var reactNode = document.getElementById('react');

	  if (reactNode) {
	    React.render(React.createElement(Main, null), reactNode);
	  }
	};

	$(documentReady);

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TweetBox = function (_React$Component) {
	  _inherits(TweetBox, _React$Component);

	  function TweetBox(props) {
	    _classCallCheck(this, TweetBox);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TweetBox).call(this, props));

	    _this.state = { content: '' };
	    return _this;
	  }

	  _createClass(TweetBox, [{
	    key: "sendTweet",
	    value: function sendTweet(event) {
	      event.preventDefault();
	      if (this.state.content != "") {
	        this.props.sendTweet(this.state.content);
	      }
	    }
	  }, {
	    key: "handleContentChange",
	    value: function handleContentChange(e) {
	      this.setState({ content: e.target.value });
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return React.createElement(
	        "div",
	        { className: "card" },
	        React.createElement(
	          "div",
	          { className: "card-content" },
	          React.createElement(
	            "form",
	            { onSubmit: this.sendTweet.bind(this) },
	            React.createElement(
	              "div",
	              { className: "input-field" },
	              React.createElement("textarea", { ref: "tweetTextArea", className: "materialize-textarea",
	                value: this.state.value, onChange: this.handleContentChange.bind(this) }),
	              React.createElement(
	                "label",
	                null,
	                "Whats up?"
	              ),
	              React.createElement(
	                "button",
	                { type: "submit", className: "waves-effect waves-light btn" },
	                "Go!"
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return TweetBox;
	}(React.Component);

	exports.default = TweetBox;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _tweet = __webpack_require__(3);

	var _tweet2 = _interopRequireDefault(_tweet);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TweetList = function (_React$Component) {
	  _inherits(TweetList, _React$Component);

	  function TweetList() {
	    _classCallCheck(this, TweetList);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(TweetList).apply(this, arguments));
	  }

	  _createClass(TweetList, [{
	    key: "render",
	    value: function render() {
	      var tweets = this.props.tweets.map(function (tweet) {
	        return React.createElement(_tweet2.default, _extends({ key: tweet.id }, tweet));
	      });
	      return React.createElement(
	        "ul",
	        { className: "collection" },
	        tweets
	      );
	    }
	  }]);

	  return TweetList;
	}(React.Component);

	exports.default = TweetList;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Tweet = function (_React$Component) {
	  _inherits(Tweet, _React$Component);

	  function Tweet() {
	    _classCallCheck(this, Tweet);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Tweet).apply(this, arguments));
	  }

	  _createClass(Tweet, [{
	    key: "render",
	    value: function render() {
	      return React.createElement(
	        "li",
	        { className: "collection-item avatar" },
	        React.createElement("i", { className: "material-icons circle" }),
	        React.createElement(
	          "span",
	          { className: "title" },
	          " ",
	          this.props.title,
	          " "
	        ),
	        React.createElement(
	          "p",
	          null,
	          this.props.content
	        )
	      );
	    }
	  }]);

	  return Tweet;
	}(React.Component);

	exports.default = Tweet;

/***/ }
/******/ ]);