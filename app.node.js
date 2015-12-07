module.exports =
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
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _this = this;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _reactDom = __webpack_require__(5);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _fbjsLibExecutionEnvironment = __webpack_require__(4);

  var _coreLocation = __webpack_require__(12);

  var _coreLocation2 = _interopRequireDefault(_coreLocation);

  var _componentsLayout = __webpack_require__(7);

  var _componentsLayout2 = _interopRequireDefault(_componentsLayout);

  var routes = {
    '/404': function _() {
      return __webpack_require__(13);
    }, '/500': function _() {
      return __webpack_require__(14);
    }, '/about': function about() {
      return __webpack_require__(15);
    }, '/blog': function blog() {
      return __webpack_require__(16);
    }, '/blog/test-article-one': function blogTestArticleOne() {
      return __webpack_require__(17);
    }, '/blog/test-article-two': function blogTestArticleTwo() {
      return __webpack_require__(18);
    }, '/': function _() {
      return __webpack_require__(19);
    } }; // Auto-generated on build. See tools/lib/routes-loader.js

  var route = function route(path, callback) {
    var handler, component;
    return regeneratorRuntime.async(function route$(context$1$0) {
      while (1) switch (context$1$0.prev = context$1$0.next) {
        case 0:
          handler = routes[path] || routes['/404'];
          context$1$0.next = 3;
          return regeneratorRuntime.awrap(handler());

        case 3:
          component = context$1$0.sent;
          context$1$0.next = 6;
          return regeneratorRuntime.awrap(callback(_react2['default'].createElement(
            _componentsLayout2['default'],
            null,
            _react2['default'].createElement(component)
          )));

        case 6:
        case 'end':
          return context$1$0.stop();
      }
    }, null, _this);
  };

  function run() {
    var _this2 = this;

    var container = document.getElementById('app');
    _coreLocation2['default'].listen(function (location) {
      route(location.pathname, function callee$2$0(component) {
        return regeneratorRuntime.async(function callee$2$0$(context$3$0) {
          while (1) switch (context$3$0.prev = context$3$0.next) {
            case 0:
              return context$3$0.abrupt('return', _reactDom2['default'].render(component, container, function () {
                // Track the page view event via Google Analytics
                window.ga('send', 'pageview');
              }));

            case 1:
            case 'end':
              return context$3$0.stop();
          }
        }, null, _this2);
      });
    });
  }

  if (_fbjsLibExecutionEnvironment.canUseDOM) {
    // Run the application when both DOM is ready and page content is loaded
    if (['complete', 'loaded', 'interactive'].includes(document.readyState) && document.body) {
      run();
    } else {
      document.addEventListener('DOMContentLoaded', run, false);
    }
  }

  exports['default'] = { route: route, routes: routes };
  module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

  module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports) {

  /*
  	MIT License http://www.opensource.org/licenses/mit-license.php
  	Author Tobias Koppers @sokra
  */
  // css base code, injected by the css-loader
  module.exports = function() {
  	var list = [];

  	// return the list of modules as css string
  	list.toString = function toString() {
  		var result = [];
  		for(var i = 0; i < this.length; i++) {
  			var item = this[i];
  			if(item[2]) {
  				result.push("@media " + item[2] + "{" + item[1] + "}");
  			} else {
  				result.push(item[1]);
  			}
  		}
  		return result.join("");
  	};

  	// import a list of modules into the list
  	list.i = function(modules, mediaQuery) {
  		if(typeof modules === "string")
  			modules = [[null, modules, ""]];
  		var alreadyImportedModules = {};
  		for(var i = 0; i < this.length; i++) {
  			var id = this[i][0];
  			if(typeof id === "number")
  				alreadyImportedModules[id] = true;
  		}
  		for(i = 0; i < modules.length; i++) {
  			var item = modules[i];
  			// skip already imported module
  			// this implementation is not 100% perfect for weird media query combinations
  			//  when a module is imported multiple times with different media queries.
  			//  I hope this will never occur (Hey this way we have smaller bundles)
  			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
  				if(mediaQuery && !item[2]) {
  					item[2] = mediaQuery;
  				} else if(mediaQuery) {
  					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
  				}
  				list.push(item);
  			}
  		}
  	};
  	return list;
  };


/***/ },
/* 3 */
/***/ function(module, exports) {

  module.exports = require("react-icons/lib/md");

/***/ },
/* 4 */
/***/ function(module, exports) {

  module.exports = require("fbjs/lib/ExecutionEnvironment");

/***/ },
/* 5 */
/***/ function(module, exports) {

  module.exports = require("react-dom");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(20);

  var _reactAvatarEditor = __webpack_require__(28);

  var _reactAvatarEditor2 = _interopRequireDefault(_reactAvatarEditor);

  var _RangeInput = __webpack_require__(11);

  var _RangeInput2 = _interopRequireDefault(_RangeInput);

  var _PersonOverlay = __webpack_require__(8);

  var _PersonOverlay2 = _interopRequireDefault(_PersonOverlay);

  var _lodash = __webpack_require__(27);

  var _reactIconsLibMd = __webpack_require__(3);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default(props) {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).call(this, props);
      this.state = {
        scale: 1
      };
      this.changeScale = this.changeScale.bind(this);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        var _props = this.props;
        var sizes = _props.sizes;
        var sourceImage = _props.sourceImage;

        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'div',
            { className: 'sizer-container', style: { width: sizes.picWidth } },
            _react2['default'].createElement(_reactAvatarEditor2['default'], {
              image: sourceImage,
              width: sizes.picWidth,
              height: sizes.picHeight,
              border: sizes.border,
              ref: 'editor',
              scale: this.state.scale }),
            _react2['default'].createElement(_PersonOverlay2['default'], { style: { position: 'absolute', top: 0, left: 0 } }),
            _react2['default'].createElement(_reactIconsLibMd.MdRemoveCircleOutline, {
              size: '100',
              onClick: (0, _lodash.partial)(this.changeScale, -0.1),
              className: 'zoom-overlay-button',
              style: { top: 30, left: 30 } }),
            _react2['default'].createElement(_reactIconsLibMd.MdAddCircleOutline, {
              size: '100',
              onClick: (0, _lodash.partial)(this.changeScale, 0.1),
              className: 'zoom-overlay-button',
              style: { top: 30, right: 30 } })
          ),
          _react2['default'].createElement(
            'div',
            { className: 'zoom-controls' },
            _react2['default'].createElement(
              'div',
              { className: 'zoom-out', onClick: (0, _lodash.partial)(this.changeScale, -0.1) },
              _react2['default'].createElement(_reactIconsLibMd.MdRemoveCircleOutline, null)
            ),
            _react2['default'].createElement(
              'div',
              { className: 'slider' },
              _react2['default'].createElement(_RangeInput2['default'], {
                min: 0.1,
                max: 5,
                step: 0.1,
                defaultValue: this.state.scale,
                value: this.state.scale,
                onChange: this.handleRangeChange.bind(this) })
            ),
            _react2['default'].createElement(
              'div',
              { className: 'zoom-in', onClick: (0, _lodash.partial)(this.changeScale, 0.1) },
              _react2['default'].createElement(_reactIconsLibMd.MdAddCircleOutline, null)
            )
          ),
          _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(
              'button',
              { onClick: this.handleProcessImage.bind(this), className: 'btn btn-green', style: { width: 200 } },
              this.props.isProcessing ? 'Processing...' : 'Process'
            )
          )
        );
      }
    }, {
      key: 'handleProcessImage',
      value: function handleProcessImage() {
        var dataUrl = this.refs.editor.getImage();
        this.props.processImage(dataUrl);
      }
    }, {
      key: 'handleRangeChange',
      value: function handleRangeChange(e) {
        this.setState({ scale: parseFloat(e.target.value) });
      }
    }, {
      key: 'changeScale',
      value: function changeScale(delta) {
        var scale = this.state.scale + delta;
        this.setState({ scale: scale });
      }
    }], [{
      key: 'getImage',
      value: function getImage() {
        return this.refs.editor.getImage();
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(21);

  // import Navigation from '../Navigation';

  function Layout(_ref) {
    var children = _ref.children;

    return _react2['default'].createElement(
      'div',
      { className: 'Layout' },
      _react2['default'].createElement(
        'h1',
        { className: 'title' },
        'Passport Ready Photo'
      ),
      _react2['default'].createElement(
        'div',
        { className: 'container' },
        children
      ),
      _react2['default'].createElement(
        'footer',
        { className: 'footer' },
        'Crafted by ',
        _react2['default'].createElement(
          'a',
          { href: 'https://twitter.com/patmood', target: '_blank' },
          'patmood'
        ),
        ' - Tweet me yo feedback!'
      )
    );
  }

  Layout.propTypes = {
    children: _react.PropTypes.element.isRequired
  };

  exports['default'] = Layout;
  module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  exports['default'] = function (props) {
    var customStyles = Object.assign({ pointerEvents: 'none' }, props.style);
    return _react2['default'].createElement(
      'svg',
      { width: '600', height: '600', xmlns: 'http://www.w3.org/2000/svg', style: customStyles },
      _react2['default'].createElement(
        'g',
        null,
        _react2['default'].createElement('ellipse', { stroke: '#000', fillOpacity: '0', ry: '205.999995', rx: '164', id: 'svg_1', cy: '235.499995', cx: '296.5', strokeWidth: '4', fill: 'url(#svg_3)' }),
        _react2['default'].createElement('ellipse', { stroke: '#000', ry: '147.499995', rx: '119', id: 'svg_4', cy: '235.999995', cx: '296.5', fillOpacity: '0', strokeOpacity: 'null', strokeWidth: '4', fill: 'url(#svg_3)' }),
        _react2['default'].createElement('path', { id: 'svg_16', fillOpacity: '0', strokeOpacity: 'null', strokeWidth: '4', stroke: '#000', fill: 'url(#svg_3)' }),
        _react2['default'].createElement('path', { stroke: '#000', d: 'm582.52655,616.917908l0,-42.137756c0,-44.341003 -51.596863,-80.288147 -115.312317,-80.288147l-335.942657,0c-63.686569,0 -115.317162,35.947144 -115.317162,80.288147l0,42.137756c-0.115271,0.960693 -0.187414,1.942566 -0.187414,2.935181l0,242.743774c0,18.860291 21.944902,34.145142 49.035818,34.145142c27.047943,0 49.050323,-15.284851 49.050323,-34.145142l0,-239.143433l32.881264,0l0,273.306152l0.245041,0l0,386.180359c0,25.114502 29.272491,45.513062 65.368393,45.513062c36.114838,0 65.373199,-20.377319 65.373199,-45.513062l0,-386.180359l43.130219,0l0,386.180359c0,25.114502 29.296783,45.513062 65.373352,45.513062c36.11496,0 65.373047,-20.377319 65.373047,-45.513062l0,-386.180359l0.201813,0l0,-273.306152l32.881287,0l0,239.136353c0,18.857056 22.002289,34.152222 49.054962,34.152222c27.086426,0 49.031311,-15.295166 49.031311,-34.152222l0,-242.747253c-0.014648,-1.006592 -0.129944,-1.963928 -0.240479,-2.924622l0,0z', id: 'svg_17', fillOpacity: '0', strokeOpacity: 'null', strokeWidth: '4', fill: 'none' })
      )
    );
  };

  module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _reactIconsLibMd = __webpack_require__(3);

  exports['default'] = function (props) {
    if (!props.image) return _react2['default'].createElement('div', null);
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(
        'p',
        null,
        'Print this image at your local photo kiosk or pharmacy as a standard size photo. A single photo should cost $0.10-0.30'
      ),
      _react2['default'].createElement(
        'p',
        null,
        'This is standard photo print size in US, Canada, Australia and India. Called "10 × 15 cm" worldwide.'
      ),
      _react2['default'].createElement(
        'a',
        { href: props.image, download: 'passport-photo-set.jpg' },
        _react2['default'].createElement('img', {
          src: props.image,
          style: { width: 600, margin: 'auto' } }),
        _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'button',
            { className: 'btn' },
            _react2['default'].createElement(_reactIconsLibMd.MdFileDownload, null),
            ' Download Photo Set'
          )
        )
      )
    );
  };

  module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _reactIconsLibMd = __webpack_require__(3);

  exports['default'] = function (props) {
    if (!props.image) return _react2['default'].createElement('div', null);
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(
        'p',
        null,
        'This is the single cropped image in JPEG format'
      ),
      _react2['default'].createElement(
        'a',
        { href: props.image, download: 'passport-photo.jpg' },
        _react2['default'].createElement('img', {
          src: props.image,
          style: { width: 300, margin: 'auto' } }),
        _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'button',
            { className: 'btn' },
            _react2['default'].createElement(_reactIconsLibMd.MdFileDownload, null),
            ' Download Single Photo'
          )
        )
      )
    );
  };

  module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(22);

  exports['default'] = function (props) {
    return _react2['default'].createElement('input', _extends({}, props, { type: 'range' }));
  };

  module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _fbjsLibExecutionEnvironment = __webpack_require__(4);

  var _historyLibCreateBrowserHistory = __webpack_require__(24);

  var _historyLibCreateBrowserHistory2 = _interopRequireDefault(_historyLibCreateBrowserHistory);

  var _historyLibCreateMemoryHistory = __webpack_require__(25);

  var _historyLibCreateMemoryHistory2 = _interopRequireDefault(_historyLibCreateMemoryHistory);

  var _historyLibUseQueries = __webpack_require__(26);

  var _historyLibUseQueries2 = _interopRequireDefault(_historyLibUseQueries);

  var location = (0, _historyLibUseQueries2['default'])(_fbjsLibExecutionEnvironment.canUseDOM ? _historyLibCreateBrowserHistory2['default'] : _historyLibCreateMemoryHistory2['default'])();

  exports['default'] = location;
  module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Not Found'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'The page you\'re looking for was not found.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Error'
          ),
          _react2['default'].createElement(
            'pre',
            null,
            this.props.error ? this.props.error.message + '\n\n' + this.props.error.stack : 'A critical error occurred.'
          )
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        error: _react.PropTypes.instanceOf(Error)
      },
      enumerable: true
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'About Us'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Coming soon.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Blog'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Coming soon.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Test Article 1'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Coming soon.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Test Article 2'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Coming soon.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _reactDom = __webpack_require__(5);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  __webpack_require__(23);

  var _componentsPhotoSingle = __webpack_require__(10);

  var _componentsPhotoSingle2 = _interopRequireDefault(_componentsPhotoSingle);

  var _componentsPhotoSet = __webpack_require__(9);

  var _componentsPhotoSet2 = _interopRequireDefault(_componentsPhotoSet);

  var _componentsImageSizer = __webpack_require__(6);

  var _componentsImageSizer2 = _interopRequireDefault(_componentsImageSizer);

  var sizes = {
    picHeight: 600,
    picWidth: 600,
    border: 0
  };

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default(props) {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).call(this, props);
      this.state = {
        scale: 1,
        photoSet: null,
        photoSingle: null,
        sourceImage: 'http://i.imgur.com/y7yZHAF.jpg',
        isProcessing: false
      };
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: 'Index' },
          _react2['default'].createElement(
            'p',
            null,
            'Photo shops charge around $20 for a set of passport photos!'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Make your own and print them at a standard photo kiosk for as little as $0.10'
          ),
          _react2['default'].createElement(
            'div',
            { className: 'upload-box' },
            _react2['default'].createElement(
              'p',
              null,
              'Upload your photo:'
            ),
            _react2['default'].createElement('input', {
              type: 'file',
              onChange: this.getSourceImage.bind(this)
            })
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Zoom and crop your photo below:'
          ),
          _react2['default'].createElement(_componentsImageSizer2['default'], {
            sizes: sizes,
            ref: 'imageSizer',
            isProcessing: this.state.isProcessing,
            processImage: this.processImage.bind(this),
            sourceImage: this.state.sourceImage }),
          _react2['default'].createElement(_componentsPhotoSet2['default'], { image: this.state.photoSet }),
          _react2['default'].createElement(_componentsPhotoSingle2['default'], { image: this.state.photoSingle })
        );
      }
    }, {
      key: 'processImage',
      value: function processImage(dataUrl) {
        this.setState({ isProcessing: true });
        this.drawCanvas(dataUrl);
      }
    }, {
      key: 'drawCanvas',
      value: function drawCanvas(dataUrl) {
        var _this = this;

        this.setState({ photoSingle: dataUrl });
        var canvas = document.createElement('canvas');
        if (!canvas) return console.log('Canvas not supported');

        canvas.width = sizes.picWidth * 3;
        canvas.height = sizes.picHeight * 2;

        var ctx = canvas.getContext('2d');
        var img = new Image();

        img.onload = function () {
          // Images in grid
          for (var x = 0; x <= 3; x++) {
            for (var y = 0; y <= 2; y++) {
              ctx.drawImage(img, x * canvas.width / 3, y * canvas.height / 2);
            }
          }

          // Draw gridlines
          ctx.strokeStyle = '#333';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(0, canvas.height / 2);
          ctx.lineTo(canvas.width, canvas.height / 2);
          ctx.moveTo(canvas.width / 3, 0);
          ctx.lineTo(canvas.width / 3, canvas.height);
          ctx.moveTo(2 * canvas.width / 3, 0);
          ctx.lineTo(2 * canvas.width / 3, canvas.height);
          ctx.closePath();
          ctx.stroke();

          _this.setState({
            photoSet: canvas.toDataURL('image/jpg'),
            isProcessing: false
          });

          var node = _reactDom2['default'].findDOMNode(_this.refs.imageSizer);
          if (window) window.scrollTo(0, node.scrollHeight + node.offsetHeight);
        };

        img.src = dataUrl;
      }
    }, {
      key: 'getSourceImage',
      value: function getSourceImage(e) {
        var _this2 = this;

        var file = e.target.files[0];
        var reader = new FileReader();

        if (!file.type.match('image')) return alert('Must be an image :}');

        reader.onloadend = function () {
          _this2.setState({
            sourceImage: reader.result,
            photoSet: null,
            photoSingle: null
          });
        };

        if (file) {
          reader.readAsDataURL(file);
        } else {
          new Error('No file detected');
        }
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, ".sizer-container {\n  position: relative;\n  margin: auto;\n  border: 3px solid #666;\n  border-radius: 10px;\n}\n\n.zoom-controls {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 600px;\n  margin: 10px auto;\n}\n\n.zoom-controls .slider {\n  -webkit-box-flex: 1;\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n\n.zoom-controls .zoom-in, .zoom-controls .zoom-out {\n  display: inline-block;\n  padding: 10px;\n  font-size: 32px;\n  cursor: pointer;\n}\n", ""]);

  // exports


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\nhtml, body {\n  margin: 0;\n  padding: 0;\n  background-color: #f7f7f7;\n  color: #333;\n  font-family: 'Roboto','Helvetica',sans-serif;\n}\n\na {\n  color: #428bca;\n  text-decoration: none;\n}\n\na:hover, a:focus {\n  color: #005580;\n  text-decoration: underline;\n}\n\n.title {\n  text-align: center;\n}\n\n.Layout {\n  margin: 0 auto;\n  max-width: 800px;\n  margin-bottom: 40px;\n  min-width: 640px;\n}\n\n.container {\n  border: 1px solid #999;\n  border-radius: 5px;\n  padding: 20px;\n  background-color: #fff;\n  margin: 20px 0;\n}\n\n.footer {\n  text-align: center;\n  margin: 20px 0;\n}\n", ""]);

  // exports


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "input[type=range] {\n  -webkit-appearance: none;\n  width: 100%;\n  margin: 13.8px 0;\n}\n\ninput[type=range]:focus {\n  outline: none;\n}\n\ninput[type=range]::-webkit-slider-runnable-track {\n  width: 100%;\n  height: 8.4px;\n  cursor: pointer;\n  -webkit-box-shadow: 1px 1px 1px #250000, 0px 0px 1px #3f0000;\n          box-shadow: 1px 1px 1px #250000, 0px 0px 1px #3f0000;\n  background: rgb(210, 210, 210);\n  border-radius: 1.3px;\n  border: 0.2px solid #010101;\n}\n\ninput[type=range]::-webkit-slider-thumb {\n  -webkit-box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n          box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n  border: 1px solid #000000;\n  height: 36px;\n  width: 20px;\n  border-radius: 3px;\n  background: rgb(16, 127, 230);\n  cursor: pointer;\n  -webkit-appearance: none;\n  margin-top: -14px;\n}\n\ninput[type=range]:focus::-webkit-slider-runnable-track {\n  background: #8eb9df;\n}\n\ninput[type=range]::-moz-range-track {\n  width: 100%;\n  height: 8.4px;\n  cursor: pointer;\n  box-shadow: 1px 1px 1px #250000, 0px 0px 1px #3f0000;\n  background: rgb(210, 210, 210);\n  border-radius: 1.3px;\n  border: 0.2px solid #010101;\n}\n\ninput[type=range]::-moz-range-thumb {\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n  border: 1px solid #000000;\n  height: 36px;\n  width: 16px;\n  border-radius: 3px;\n  background: rgb(16, 127, 230);\n  cursor: pointer;\n}\n\ninput[type=range]::-ms-track {\n  width: 100%;\n  height: 8.4px;\n  cursor: pointer;\n  background: transparent;\n  border-color: transparent;\n  color: transparent;\n}\n\ninput[type=range]::-ms-fill-lower {\n  background: #0f2436;\n  border: 0.2px solid #010101;\n  border-radius: 2.6px;\n  box-shadow: 1px 1px 1px #250000, 0px 0px 1px #3f0000;\n}\n\ninput[type=range]::-ms-fill-upper {\n  background: rgb(210, 210, 210);\n  border: 0.2px solid #010101;\n  border-radius: 2.6px;\n  box-shadow: 1px 1px 1px #250000, 0px 0px 1px #3f0000;\n}\n\ninput[type=range]::-ms-thumb {\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n  border: 1px solid #000000;\n  height: 36px;\n  width: 16px;\n  border-radius: 3px;\n  background: rgb(16, 127, 230);\n  cursor: pointer;\n  height: 8.4px;\n}\n\ninput[type=range]:focus::-ms-fill-lower {\n  background: rgb(210, 210, 210);\n}\n\ninput[type=range]:focus::-ms-fill-upper {\n  background: #8eb9df;\n}\n", ""]);

  // exports


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n.btn, .btn-green {\n  background-color: #3498db;\n  color: #fff;\n  text-align: center;\n  font-size: 18px;\n  border: none;\n  border-radius: 3px;\n  position: relative;\n  padding: 0.6em 1.2em;\n  cursor: pointer;\n}\n\n.btn:hover, .btn-green:hover {\n  background-color: #2980b9;\n}\n\n.btn-green {\n  background-color: #2ecc71;\n}\n\n.btn-green:hover {\n  background-color: #27ae60;\n}\n\n.Index {\n  text-align: center;\n}\n\n.upload-box {\n  display: inline-block;\n  width: 350px;\n  margin: 10px auto;\n  background-color: #eee;\n  border: 3px solid #666;\n  border-radius: 10px;\n  padding: 10px;\n}\n\n.upload-box input {\n  margin-bottom: 16px;\n}\n\n.zoom-overlay-button {\n  position: absolute;\n  font-size: 104px;\n  cursor: pointer;\n}\n", ""]);

  // exports


/***/ },
/* 24 */
/***/ function(module, exports) {

  module.exports = require("history/lib/createBrowserHistory");

/***/ },
/* 25 */
/***/ function(module, exports) {

  module.exports = require("history/lib/createMemoryHistory");

/***/ },
/* 26 */
/***/ function(module, exports) {

  module.exports = require("history/lib/useQueries");

/***/ },
/* 27 */
/***/ function(module, exports) {

  module.exports = require("lodash");

/***/ },
/* 28 */
/***/ function(module, exports) {

  module.exports = require("react-avatar-editor");

/***/ }
/******/ ]);