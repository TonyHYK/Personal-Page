/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Li = exports.Code = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"prop-types\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var link = {
  normal: {
    borderBottom: '1px dotted rgb(0, 168, 0)'
  },
  hover: {
    borderBottom: '1px solid rgb(0, 168, 0)',
    color: 'black'
  },
  active: 'hover',
  touchActive: {
    borderBottom: '1px dashed rgb(0, 168, 0)',
    color: 'black'
  },
  focusFromTab: {
    outline: '2px solid rgb(0, 152, 0)',
    outlineOffset: '2px',
    color: 'black'
  },
  touchActiveTapOnly: true
};

var childLink = {};
Object.keys(link).forEach(function (key) {
  if (key !== 'touchActiveTapOnly') {
    childLink['onParent' + key.slice(0, 1).toUpperCase() + key.slice(1)] = link[key];
  }
});

exports.default = {
  link: link,
  childLink: childLink,
  p: {
    margin: '3vh 0',
    lineHeight: '1.4'
  }
};
var Code = exports.Code = function Code(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'code',
    {
      style: {
        fontFamily: 'monospace',
        fontSize: '15px',
        paddingLeft: '2px'
      }
    },
    children
  );
};

Code.propTypes = {
  children: _propTypes2.default.string.isRequired
};

var Li = function Li(_ref2) {
  var children = _ref2.children,
      rest = _objectWithoutProperties(_ref2, ['children']);

  return _react2.default.createElement(
    'li',
    _extends({
      style: {
        paddingLeft: '18px',
        textIndent: '-15px',
        margin: '0.5vh 0',
        listStyle: 'none'
      }
    }, rest),
    _react2.default.createElement(
      'span',
      { style: { paddingRight: '7px' } },
      '\u2013'
    ),
    children
  );
};

exports.Li = Li;
Li.propTypes = {
  children: _propTypes2.default.string.isRequired
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PageNotFound;

var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"prop-types\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _propTypes2 = _interopRequireDefault(_propTypes);

var _style = __webpack_require__(0);

var _pageNotFound = __webpack_require__(12);

var _pageNotFound2 = _interopRequireDefault(_pageNotFound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  location: _propTypes2.default.object.isRequired
};

function PageNotFound(_ref) {
  var location = _ref.location;

  return _react2.default.createElement(
    'p',
    { style: _pageNotFound2.default.p },
    'Page not found - the path, ',
    _react2.default.createElement(
      _style.Code,
      null,
      location.pathname
    ),
    ', did not match any React Router routes.'
  );
}

PageNotFound.propTypes = propTypes;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;

var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-router-dom\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _Home = __webpack_require__(6);

var _Home2 = _interopRequireDefault(_Home);

var _ExampleComponent = __webpack_require__(4);

var _ExampleComponent2 = _interopRequireDefault(_ExampleComponent);

var _PageNotFound = __webpack_require__(1);

var _PageNotFound2 = _interopRequireDefault(_PageNotFound);

var _Breadcrumbs = __webpack_require__(3);

var _Breadcrumbs2 = _interopRequireDefault(_Breadcrumbs);

var _app = __webpack_require__(8);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App() {
  return _react2.default.createElement(
    'div',
    { style: _app2.default.root },
    _react2.default.createElement(
      'h1',
      { style: _app2.default.title },
      'TonyHYK Personal Page Stub'
    )
  );
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Breadcrumbs;

var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"prop-types\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-router-dom\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _reactInteractive = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-interactive\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _reactInteractive2 = _interopRequireDefault(_reactInteractive);

var _style = __webpack_require__(0);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var breadCrumbTitles = {
  '': 'Home',
  example: 'Example',
  'two-deep': 'Two Deep'
};

function BreadcrumbsItem(_ref) {
  var match = _ref.match;

  var title = breadCrumbTitles[match.url.split('/').slice(-1)];
  var to = title === undefined ? '/' : match.url;

  return _react2.default.createElement(
    'span',
    null,
    _react2.default.createElement(
      _reactInteractive2.default,
      _extends({
        as: _reactRouterDom.Link
      }, _style2.default.link, {
        to: to
      }),
      title || 'Page Not Found'
    ),
    !match.isExact && title && ' / ',
    title && _react2.default.createElement(_reactRouterDom.Route, { path: (match.url === '/' ? '' : match.url) + '/:path', component: BreadcrumbsItem })
  );
}

BreadcrumbsItem.propTypes = {
  match: _propTypes2.default.object.isRequired
};

function Breadcrumbs() {
  return _react2.default.createElement(_reactRouterDom.Route, { path: '/', component: BreadcrumbsItem });
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = ExampleComponent;

var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _react2 = _interopRequireDefault(_react);

var _reactInteractive = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-interactive\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _reactInteractive2 = _interopRequireDefault(_reactInteractive);

var _reactRouterDom = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-router-dom\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _ExampleTwoDeepComponent = __webpack_require__(5);

var _ExampleTwoDeepComponent2 = _interopRequireDefault(_ExampleTwoDeepComponent);

var _PageNotFound = __webpack_require__(1);

var _PageNotFound2 = _interopRequireDefault(_PageNotFound);

var _exampleComponent = __webpack_require__(9);

var _exampleComponent2 = _interopRequireDefault(_exampleComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ExamplePageText = function ExamplePageText() {
  return _react2.default.createElement(
    'p',
    { style: _exampleComponent2.default.p },
    'This is an example page. Refresh the page or copy/paste the url to test out the redirect functionality (this same page should load after the redirect).'
  );
};

function ExampleComponent() {
  return _react2.default.createElement(
    _reactRouterDom.Switch,
    null,
    _react2.default.createElement(_reactRouterDom.Route, {
      exact: true, path: '/example/two-deep',
      render: function render(_ref) {
        var location = _ref.location;
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(ExamplePageText, null),
          _react2.default.createElement(_ExampleTwoDeepComponent2.default, { location: location })
        );
      }
    }),
    _react2.default.createElement(_reactRouterDom.Route, {
      exact: true, path: '/example',
      render: function render() {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(ExamplePageText, null),
          _react2.default.createElement(
            'div',
            { style: _exampleComponent2.default.pageLinkContainer },
            _react2.default.createElement(
              _reactInteractive2.default,
              _extends({
                as: _reactRouterDom.Link
              }, _exampleComponent2.default.link, {
                to: '/example/two-deep?field1=foo&field2=bar#boom!'
              }),
              'Example two deep with query and hash'
            )
          )
        );
      }
    }),
    _react2.default.createElement(_reactRouterDom.Route, { component: _PageNotFound2.default })
  );
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = ExampleTwoDeepComponent;

var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"prop-types\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactInteractive = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-interactive\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _reactInteractive2 = _interopRequireDefault(_reactInteractive);

var _reactRouterDom = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-router-dom\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _style = __webpack_require__(0);

var _exampleTwoDeepComponent = __webpack_require__(10);

var _exampleTwoDeepComponent2 = _interopRequireDefault(_exampleTwoDeepComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  location: _propTypes2.default.object.isRequired
};

function ExampleTwoDeepComponent(_ref) {
  var location = _ref.location;

  var queryPresent = location.search !== '';
  var hashPresent = location.hash !== '';

  function queryStringTitle() {
    if (queryPresent) return 'The query string field-value pairs are:';
    return 'No query string in the url';
  }

  function hashFragmentTitle() {
    if (hashPresent) return 'The hash fragment is:';
    return 'No hash fragment in the url';
  }

  function linkToShowQueryAndOrHash() {
    if (queryPresent && hashPresent) return null;

    var queryString = queryPresent ? location.search : '?field1=foo&field2=bar';
    var hashFragment = hashPresent ? location.hash : '#boom!';

    var linkText = '';
    if (queryPresent && !hashPresent) linkText = 'Show with hash fragment';
    if (!queryPresent && hashPresent) linkText = 'Show with query string';
    if (!queryPresent && !hashPresent) linkText = 'Show with query string and hash fragment';

    return _react2.default.createElement(
      'div',
      { style: _exampleTwoDeepComponent2.default.lineContainer },
      _react2.default.createElement(
        _reactInteractive2.default,
        _extends({
          as: _reactRouterDom.Link,
          to: '/example/two-deep' + queryString + hashFragment
        }, _exampleTwoDeepComponent2.default.link),
        linkText
      )
    );
  }

  function parseQueryString() {
    if (!queryPresent) return [];
    return location.search.replace('?', '').split('&').map(function (fvPair) {
      return fvPair.split('=');
    }).map(function (pair) {
      return [pair[0], pair.slice(1).join('=')];
    });
  }

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      { style: _exampleTwoDeepComponent2.default.lineContainer },
      _react2.default.createElement(
        'div',
        null,
        queryStringTitle()
      ),
      _react2.default.createElement(
        'ul',
        null,
        parseQueryString().map(function (pair, index) {
          return _react2.default.createElement(
            _style.Li,
            { key: '' + pair[0] + pair[1] + index },
            pair[0] + ': ' + pair[1]
          );
        })
      )
    ),
    _react2.default.createElement(
      'div',
      { style: _exampleTwoDeepComponent2.default.lineContainer },
      _react2.default.createElement(
        'div',
        null,
        hashFragmentTitle()
      ),
      _react2.default.createElement(
        'ul',
        null,
        hashPresent && _react2.default.createElement(
          _style.Li,
          null,
          location.hash.slice(1)
        )
      )
    ),
    linkToShowQueryAndOrHash()
  );
}

ExampleTwoDeepComponent.propTypes = propTypes;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Home;

var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _react2 = _interopRequireDefault(_react);

var _reactInteractive = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-interactive\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _reactInteractive2 = _interopRequireDefault(_reactInteractive);

var _reactRouterDom = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-router-dom\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _style = __webpack_require__(0);

var _home = __webpack_require__(11);

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Home() {
  var repoReadmeLink = function repoReadmeLink(text) {
    return _react2.default.createElement(
      _reactInteractive2.default,
      _extends({
        as: 'a'
      }, _home2.default.link, {
        href: 'https://github.com/rafrex/spa-github-pages#readme'
      }),
      text
    );
  };

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'p',
      { style: _home2.default.p },
      'This is an example single page app built with React and React\xA0Router using ',
      ' ',
      _react2.default.createElement(
        _style.Code,
        null,
        'BrowserRouter'
      ),
      '. Navigate with the links below and refresh the page or copy/paste the url to test out the redirect functionality deployed to overcome GitHub\xA0Pages incompatibility with single page apps (like this one).'
    ),
    _react2.default.createElement(
      'p',
      { style: _home2.default.p },
      'Please see the ',
      repoReadmeLink('repo readme'),
      ' for instructions on how to use this boilerplate to deploy your own single page app using GitHub Pages.'
    ),
    _react2.default.createElement(
      'div',
      { style: _home2.default.pageLinkContainer },
      _react2.default.createElement(
        _reactInteractive2.default,
        _extends({
          as: _reactRouterDom.Link
        }, _home2.default.link, {
          to: '/example'
        }),
        'Example page'
      )
    ),
    _react2.default.createElement(
      'div',
      { style: _home2.default.pageLinkContainer },
      _react2.default.createElement(
        _reactInteractive2.default,
        _extends({
          as: _reactRouterDom.Link
        }, _home2.default.link, {
          to: '/example/two-deep?field1=foo&field2=bar#boom!'
        }),
        'Example two deep with query and hash'
      )
    )
  );
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-dom\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-router-dom\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _App = __webpack_require__(2);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(
  _reactRouterDom.BrowserRouter,
  null,
  _react2.default.createElement(_App2.default, null)
), document.getElementById('root'));

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(0);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var s = Object.create(_style2.default);

s.root = {
  fontFamily: 'helvetica, sans-serif',
  fontWeight: '300',
  fontSize: '16px',
  letterSpacing: '0.025em',
  padding: '3vh 0 12vh 0',
  width: '500px',
  // use responsive max-width to simulate padding/margin to allow
  // space for vertical scroll bar without creating horizontal scroll bar
  // (if there is padding, the window will scroll horizontally to show the padding)
  maxWidth: 'calc(100vw - 40px)',

  // center based on vw to prevent content jump when vertical scroll bar show/hide
  // note: vw/vh include the width of scroll bars. Note that centering using margin auto
  // or % (which doesn't include scroll bars, so changes when scroll bars shown) causes a page jump
  position: 'relative',
  left: '50vw',
  WebkitTransform: 'translate(-50%, 0)',
  MozTransform: 'translate(-50%, 0)',
  msTransform: 'translate(-50%, 0)',
  OTransform: 'translate(-50%, 0)',
  transform: 'translate(-50%, 0)',

  WebkitTextSizeAdjust: 'none',
  MozTextSizeAdjust: 'none',
  msTextSizeAdjust: 'none',
  textSizeAdjust: 'none'
};

s.title = {
  fontSize: '20px',
  marginBottom: '0.5vh'
};

s.repoLink = {
  fontSize: '14px'
};

s.breadcrumbs = {
  margin: '3vh 0'
};

s.creditLine = {
  color: '#A0A0A0',
  fontSize: '14px',
  marginTop: '50px'
};

exports.default = s;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(0);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var s = Object.create(_style2.default);

s.pageLinkContainer = {
  margin: '1vh 0'
};

exports.default = s;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(0);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var s = Object.create(_style2.default);

s.lineContainer = {
  margin: '3vh 0'
};

exports.default = s;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(0);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var s = Object.create(_style2.default);

s.pageLinkContainer = {
  margin: '1vh 0'
};

exports.default = s;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(0);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var s = Object.create(_style2.default);

exports.default = s;

/***/ })
/******/ ]);