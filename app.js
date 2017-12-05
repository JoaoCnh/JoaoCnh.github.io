webpackJsonp([1],{

/***/ "./public/img/cubes/code.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "code.93b9404b.png";

/***/ }),

/***/ "./public/img/cubes/design.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "design.0da24a32.png";

/***/ }),

/***/ "./public/img/cubes/github.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "github.dd24e5cb.png";

/***/ }),

/***/ "./public/img/cubes/muhface.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "muhface.391eb239.jpg";

/***/ }),

/***/ "./public/img/social/github.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "github.71edeaef.svg";

/***/ }),

/***/ "./public/img/social/linkedin.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "linkedin.6c302067.svg";

/***/ }),

/***/ "./public/img/social/so.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "so.6a47c615.svg";

/***/ }),

/***/ "./public/img/social/twitter.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "twitter.eec4e2d8.svg";

/***/ }),

/***/ "./src/App.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Animation__ = __webpack_require__("./src/components/Animation.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  App.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "div",
      { className: "App" },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Animation__["a" /* default */], null)
    );
  };

  return App;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),

/***/ "./src/components/Animation.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Animation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_media__ = __webpack_require__("./node_modules/react-media/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_media___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_media__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Cubes__ = __webpack_require__("./src/components/Cubes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__HomeTitle__ = __webpack_require__("./src/components/HomeTitle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Background__ = __webpack_require__("./src/components/Background.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_Relative__ = __webpack_require__("./src/components/common/Relative.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_Fullscreen__ = __webpack_require__("./src/components/common/Fullscreen.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_flex_Centered__ = __webpack_require__("./src/components/common/flex/Centered.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_flex_MaxWidth__ = __webpack_require__("./src/components/common/flex/MaxWidth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages__ = __webpack_require__("./src/pages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils_scroll__ = __webpack_require__("./src/utils/scroll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utils_media__ = __webpack_require__("./src/utils/media.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__theme__ = __webpack_require__("./src/theme/index.js");
var _templateObject = _taggedTemplateLiteralLoose(["\n  position: relative;\n  width: 100%;\n  height: 100vh;\n  flex: auto;\n  flex-direction: row;\n  margin: 0 auto;\n  max-width: 1280px;\n  padding: 0px 1.0875rem 1.45rem;\n  padding-top: 0;\n  ", ";\n"], ["\n  position: relative;\n  width: 100%;\n  height: 100vh;\n  flex: auto;\n  flex-direction: row;\n  margin: 0 auto;\n  max-width: 1280px;\n  padding: 0px 1.0875rem 1.45rem;\n  padding-top: 0;\n  ", ";\n"]),
    _templateObject2 = _taggedTemplateLiteralLoose(["\n  display: block;\n  flex-direction: column;\n  margin-top: 6rem;\n  margin-bottom: 8rem;\n  height: initial;\n  "], ["\n  display: block;\n  flex-direction: column;\n  margin-top: 6rem;\n  margin-bottom: 8rem;\n  height: initial;\n  "]);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }



















var Container = __WEBPACK_IMPORTED_MODULE_8__common_flex_Centered__["a" /* default */].extend(_templateObject, __WEBPACK_IMPORTED_MODULE_12__utils_media__["a" /* default */].tablet(_templateObject2));

var Animation = function (_React$PureComponent) {
  _inherits(Animation, _React$PureComponent);

  function Animation() {
    var _temp, _this, _ret;

    _classCallCheck(this, Animation);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args))), _this), _this.state = {
      pages: Object.keys(__WEBPACK_IMPORTED_MODULE_10__pages__).filter(function (k) {
        return k !== "default" && k !== "__esModule";
      }).map(function (page) {
        return __WEBPACK_IMPORTED_MODULE_10__pages__[page];
      }).filter(function (page) {
        return page.Icon;
      }),
      pageIndex: 0,
      pageSelected: false,
      canvas: undefined
    }, _this.startTimer = function () {
      _this.timeout = setTimeout(function () {
        if (!_this.state.pageSelected) {
          if (!window.scrolling && Object(__WEBPACK_IMPORTED_MODULE_11__utils_scroll__["a" /* default */])().y < window.innerHeight) {
            _this.setState({
              pageIndex: (_this.state.pageIndex + 1) % _this.state.pages.length
            });
          }

          _this.startTimer();
        }
      }, 60000);
    }, _this.setCanvas = function (canvas) {
      _this.setState({ canvas: canvas });
    }, _this.selectPage = function (page) {
      _this.setState({
        pageIndex: _this.state.pages.indexOf(page),
        pageSelected: true
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Animation.prototype.componentDidMount = function componentDidMount() {
    this.startTimer();
  };

  Animation.prototype.componentWillUnmount = function componentWillUnmount() {
    clearTimeout(this.timeout);
  };

  Animation.prototype.render = function render() {
    var page = this.state.pages[this.state.pageIndex];

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_6__common_Relative__["a" /* default */],
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_7__common_Fullscreen__["a" /* default */],
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Background__["a" /* default */], {
          pageIndex: this.state.pageIndex,
          page: page,
          setCanvas: this.setCanvas
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          Container,
          { horizontal: true },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__HomeTitle__["a" /* default */], { page: page }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_react_media___default.a,
            { query: "(min-width: 1280px)" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Cubes__["a" /* default */], {
              canvas: this.state.canvas,
              pages: this.state.pages,
              page: page,
              setPage: this.selectPage
            })
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_9__common_flex_MaxWidth__["a" /* default */],
        { width: 1280 },
        page.render(page)
      )
    );
  };

  return Animation;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent);



/***/ }),

/***/ "./src/components/Background.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Background; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_canvas__ = __webpack_require__("./src/utils/canvas/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_animations__ = __webpack_require__("./src/utils/animations/index.js");
var _templateObject = _taggedTemplateLiteralLoose(["\n  transition: 0.8s ease background-color;\n  transition-delay: 1s;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  pointer-events: none;\n  ", ";\n"], ["\n  transition: 0.8s ease background-color;\n  transition-delay: 1s;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  pointer-events: none;\n  ", ";\n"]);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }







var delay = Object(__WEBPACK_IMPORTED_MODULE_3__utils_animations__["a" /* default */])(0);

var Container = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div(_templateObject, delay);

var Background = function (_React$PureComponent) {
  _inherits(Background, _React$PureComponent);

  function Background() {
    var _temp, _this, _ret;

    _classCallCheck(this, Background);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args))), _this), _this.startCanvas = function (el) {
      _this.canvas = Object(__WEBPACK_IMPORTED_MODULE_2__utils_canvas__["a" /* default */])(el);

      _this.props.setCanvas(_this.canvas);
    }, _this.colors = {
      "about-me": "#1E2428",
      "my-projects": "#3E3F40",
      "my-experience": "#1D2525",
      "this-design": "#261700"
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  // Use solid colors for perf


  Background.prototype.render = function render() {
    var page = this.props.page;


    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Container,
      {
        style: {
          backgroundColor: this.colors[page.name] || page.color.clearer(0.97)()
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("canvas", {
        style: {
          position: "absolute",
          top: 0,
          left: 0
        },
        ref: this.startCanvas
      })
    );
  };

  return Background;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent);



/***/ }),

/***/ "./src/components/Cube.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlowCube; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.es.js");
var _templateObject = _taggedTemplateLiteralLoose(["\n  width: ", "px;\n  height: ", "px;\n\n  * {\n    position: absolute;\n    width: ", "px;\n    height: ", "px;\n  }\n"], ["\n  width: ", "px;\n  height: ", "px;\n\n  * {\n    position: absolute;\n    width: ", "px;\n    height: ", "px;\n  }\n"]),
    _templateObject2 = _taggedTemplateLiteralLoose(["\n  0% {\n    transform: rotateY(", "deg) rotateX(", "deg);\n  }\n  100% {\n    transform: rotateY(", "deg) rotateX(", "deg);\n  }\n"], ["\n  0% {\n    transform: rotateY(", "deg) rotateX(", "deg);\n  }\n  100% {\n    transform: rotateY(", "deg) rotateX(", "deg);\n  }\n"]),
    _templateObject3 = _taggedTemplateLiteralLoose(["\n  ", ";\n  transform-style: preserve-3d;\n  will-change: transform;\n\n  * {\n    box-sizing: border-box;\n    background-color: ", ";\n    border: ", "px solid rgba(255, 255, 255, 0.4);\n  }\n"], ["\n  ", ";\n  transform-style: preserve-3d;\n  will-change: transform;\n\n  * {\n    box-sizing: border-box;\n    background-color: ", ";\n    border: ", "px solid rgba(255, 255, 255, 0.4);\n  }\n"]),
    _templateObject4 = _taggedTemplateLiteralLoose(["\n  transform-origin: 50% 50%;\n  will-change: transform;\n  transform: ", " translateZ(", "px);\n  ", ";\n"], ["\n  transform-origin: 50% 50%;\n  will-change: transform;\n  transform: ", " translateZ(", "px);\n  ", ";\n"]);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }




var Cube = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div(_templateObject, function (props) {
  return props.size + 1;
}, function (props) {
  return props.size + 1;
}, function (props) {
  return props.size + 1;
}, function (props) {
  return props.size + 1;
});

var getAnimation = function getAnimation() {
  var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  return Object(__WEBPACK_IMPORTED_MODULE_1_styled_components__["c" /* keyframes */])(_templateObject2, 45 + offset, -37.5 + offset, 45 + offset + 360, -37.5 + offset + 360);
};

var Sides = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div(_templateObject3, function (_ref) {
  var noAnimation = _ref.noAnimation,
      offset = _ref.offset,
      speed = _ref.speed;
  return !noAnimation && "animation: " + getAnimation(offset) + " " + speed + "s linear infinite;";
}, function (_ref2) {
  var color = _ref2.color;
  return color.clearer(0.2);
}, function (_ref3) {
  var size = _ref3.size;
  return size / 70;
});

var Side = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div(_templateObject4, function (_ref4) {
  var rotate = _ref4.rotate;
  return rotate;
}, function (_ref5) {
  var size = _ref5.size;
  return size / 2;
}, function (_ref6) {
  var image = _ref6.image,
      size = _ref6.size;
  return image && "\n    background-image: url(" + image + ");\n    background-repeat: no-repeat;\n    background-size: " + size * 0.75 + "px " + size * 0.75 + "px;\n    background-position: center;\n  ";
});

var isSafari = typeof navigator !== "undefined" && /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
var SHADOW_SIZE = isSafari ? 100 : 150;

var GlowCube = function (_React$PureComponent) {
  _inherits(GlowCube, _React$PureComponent);

  function GlowCube() {
    _classCallCheck(this, GlowCube);

    return _possibleConstructorReturn(this, _React$PureComponent.apply(this, arguments));
  }

  GlowCube.prototype.render = function render() {
    var _props = this.props,
        _props$size = _props.size,
        size = _props$size === undefined ? 150 : _props$size,
        _props$color = _props.color,
        color = _props$color === undefined ? "rgba(242,119,119,0.5)" : _props$color,
        image = _props.image,
        _props$speed = _props.speed,
        speed = _props$speed === undefined ? 1 : _props$speed,
        _props$offset = _props.offset,
        offset = _props$offset === undefined ? 0 : _props$offset,
        noAnimation = _props.noAnimation,
        className = _props.className,
        ref = _props.ref,
        id = _props.id;


    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Cube,
      { id: id, innerRef: ref, className: className, size: size },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        Sides,
        {
          color: color,
          offset: offset,
          speed: speed,
          noAnimation: noAnimation,
          size: size
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Side, {
          image: image,
          style: { boxShadow: "0px 0px " + SHADOW_SIZE + "px " + color() },
          rotate: "rotateX(90deg)",
          size: size
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Side, {
          image: image,
          style: { boxShadow: "0px 0px " + SHADOW_SIZE + "px " + color() },
          rotate: "rotateX(-90deg)",
          size: size
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Side, {
          image: image,
          style: { boxShadow: "0px 0px " + SHADOW_SIZE + "px " + color() },
          rotate: "rotateY(0deg)",
          size: size
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Side, {
          image: image,
          style: { boxShadow: "0px 0px " + SHADOW_SIZE + "px " + color() },
          rotate: "rotateY(-180deg)",
          size: size
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Side, {
          image: image,
          style: { boxShadow: "0px 0px " + SHADOW_SIZE + "px " + color() },
          rotate: "rotateY(-90deg)",
          size: size
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Side, {
          image: image,
          style: { boxShadow: "0px 0px " + SHADOW_SIZE + "px " + color() },
          rotate: "rotateY(90deg)",
          size: size
        })
      )
    );
  };

  return GlowCube;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent);



/***/ }),

/***/ "./src/components/Cubes.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cubes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_gsap__ = __webpack_require__("./node_modules/gsap/TweenMax.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_gsap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_gsap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Cube__ = __webpack_require__("./src/components/Cube.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_animations__ = __webpack_require__("./src/utils/animations/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_media__ = __webpack_require__("./src/utils/media.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_scroll__ = __webpack_require__("./src/utils/scroll.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(["\n  flex: 2;\n  position: relative;\n  transform: translateX(", "px) translateY(125px);\n  ", ";\n  ", ";\n"], ["\n  flex: 2;\n  position: relative;\n  transform: translateX(", "px) translateY(125px);\n  ", ";\n  ", ";\n"]),
    _templateObject2 = _taggedTemplateLiteralLoose(["\n  flex: 2;\n  width: 100%;\n  transform: translateX(", "px) translateY(400px);\n  justify-content: center;\n  align-items: center;\n"], ["\n  flex: 2;\n  width: 100%;\n  transform: translateX(", "px) translateY(400px);\n  justify-content: center;\n  align-items: center;\n"]),
    _templateObject3 = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  cursor: pointer;\n  transform: scale(0.4, 0.4);\n  will-change: transform;\n"], ["\n  position: absolute;\n  cursor: pointer;\n  transform: scale(0.4, 0.4);\n  will-change: transform;\n"]);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }











var RADIUS = 250;

var Container = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div(_templateObject, RADIUS, Object(__WEBPACK_IMPORTED_MODULE_4__utils_animations__["a" /* default */])(0), __WEBPACK_IMPORTED_MODULE_5__utils_media__["a" /* default */].tablet(_templateObject2, RADIUS));

var SmallCube = Object(__WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */])(function (_React$Component) {
  _inherits(SmallCubeInner, _React$Component);

  function SmallCubeInner() {
    _classCallCheck(this, SmallCubeInner);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  SmallCubeInner.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
    return false;
  };

  SmallCubeInner.prototype.render = function render() {
    var _props = this.props,
        cubeRef = _props.cubeRef,
        props = _objectWithoutProperties(_props, ["cubeRef"]);

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", _extends({ style: { willChange: "transform" }, ref: cubeRef }, props));
  };

  return SmallCubeInner;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component))(_templateObject3);

var OFFSETS = [84, 32, 54, 110];

// eslint-disable-next-line react/no-multi-comp

var Cubes = function (_React$PureComponent) {
  _inherits(Cubes, _React$PureComponent);

  function Cubes(props) {
    _classCallCheck(this, Cubes);

    var _this2 = _possibleConstructorReturn(this, _React$PureComponent.call(this, props));

    _this2.els = {};

    _this2.animate = function () {
      var delta = Date.now() - _this2.lastTick;

      if (delta < 0.3) {
        requestAnimationFrame(_this2.animate);
        return;
      }

      _this2.lastTick = Date.now();
      _this2.time = _this2.time + delta / 16000;

      _this2.state.pages.forEach(function (page, i) {
        if (page.page === _this2.props.page) {
          return;
        }

        var angle = Math.PI * 2 / _this2.state.pages.length * i + _this2.time;
        var x = RADIUS * Math.cos(angle);
        var y = RADIUS * Math.sin(angle);

        var isLastPage = _this2.state.lastPage === page;

        __WEBPACK_IMPORTED_MODULE_2_gsap__["TweenMax"].to(_this2.els[page.page.name], isLastPage ? 0.8 : 0.3, {
          left: x,
          bottom: y
        });
      });

      requestAnimationFrame(_this2.animate);
    };

    _this2.updateCubePos = function () {
      if (_this2.props.canvas) {
        var pos = _this2.els[_this2.props.page.name].getBoundingClientRect();
        _this2.props.canvas.setCubePos(pos.x + 50, pos.y + 70 + Object(__WEBPACK_IMPORTED_MODULE_6__utils_scroll__["a" /* default */])().y);
      }
    };

    _this2.growTimelines = {};
    _this2.shrinkTimelines = {};

    _this2.growCube = function (page, canvas) {
      var el = _this2.els[page.name];
      var rgb = page.color.lighten(0)().match(/rgb\((.*)\)/)[1].split(",");

      var _this2$state$pages$_t = _this2.state.pages[_this2.state.pages.map(function (_ref) {
        var page = _ref.page;
        return page;
      }).indexOf(page)],
          x = _this2$state$pages$_t.x,
          y = _this2$state$pages$_t.y;

      _this2.growTimelines[page.name] = _this2.growTimelines[page.name] || new __WEBPACK_IMPORTED_MODULE_2_gsap__["TimelineMax"]({ paused: true }).to(el, 0.8, { x: -x, y: y, ease: __WEBPACK_IMPORTED_MODULE_2_gsap__["Power3"].easeIn }).to(el, 0.7, {
        scale: 1,
        ease: __WEBPACK_IMPORTED_MODULE_2_gsap__["Elastic"].easeOut
      }).add(function () {
        if (canvas) {
          canvas.makeWave(canvas.cubeX, canvas.cubeY, rgb);
        }
      }, "-=.8");

      return _this2.growTimelines[page.name].restart();
    };

    _this2.shrinkCube = function (page) {
      var el = _this2.els[page.page.name];

      if (_this2.animating) {
        new __WEBPACK_IMPORTED_MODULE_2_gsap__["TimelineMax"]().to(el, 0.7, { scale: 0.4, ease: __WEBPACK_IMPORTED_MODULE_2_gsap__["Power2"].easeOut });
      } else {
        _this2.shrinkTimelines[page.page.name] = _this2.shrinkTimelines[page.page.name] || new __WEBPACK_IMPORTED_MODULE_2_gsap__["TimelineMax"]().to(el, 0.8, { x: 0, y: 0 }).to(el, 0.7, { scale: 0.4, ease: __WEBPACK_IMPORTED_MODULE_2_gsap__["Power2"].easeOut }, "-=0.7");

        return _this2.shrinkTimelines[page.page.name].restart();
      }
    };

    _this2.hoverCube = function (page) {
      var el = _this2.els[page.page.name];

      if (page.page === _this2.props.page) {
        return;
      }

      __WEBPACK_IMPORTED_MODULE_2_gsap__["TweenMax"].to(el, 0.3, {
        scale: 0.5
      });
    };

    _this2.unhoverCube = function (page) {
      var el = _this2.els[page.page.name];

      if (page.page === _this2.props.page) {
        return;
      }

      __WEBPACK_IMPORTED_MODULE_2_gsap__["TweenMax"].to(el, 0.3, {
        scale: 0.4
      });
    };

    _this2.state = {
      pages: props.pages.map(function (page, i) {
        var angle = Math.PI * 2 / props.pages.length * i;
        var x = RADIUS * Math.cos(angle);
        var y = RADIUS * Math.sin(angle);

        return {
          page: page,
          x: x,
          y: y,
          offset: OFFSETS[i]
        };
      }),
      canvas: null
    };
    return _this2;
  }

  Cubes.prototype.componentDidMount = function componentDidMount() {
    var _this3 = this;

    requestAnimationFrame(function () {
      _this3.growCube(_this3.props.page, _this3.props.canvas).add(_this3.updateCubePos, "-=.7");
    });

    this.lastTick = Date.now();
    this.time = 0;

    this.animating = false && window.innerWidth > 1600;

    if (this.animating) {
      this.animate();
    }
  };

  Cubes.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var nextPage = nextProps.page;
    var pages = this.state.pages;

    var currentPage = pages[pages.map(function (p) {
      return p.page;
    }).indexOf(this.props.page)];

    if (nextPage !== currentPage.page) {
      this.shrinkCube(currentPage);
      this.growCube(nextPage, nextProps.canvas);
    }
  };

  Cubes.prototype.render = function render() {
    var _this4 = this;

    var page = this.props.page;


    if (typeof window === "undefined") {
      return null;
    }

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Container,
      null,
      this.state.pages.map(function (page, i) {
        var selected = page === page.page;

        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          SmallCube,
          {
            cubeRef: function cubeRef(el) {
              _this4.els[page.page.name] = el;
            },
            style: { bottom: page.y, left: page.x },
            key: page.page.name,
            selected: selected,
            i: i,
            onMouseEnter: function onMouseEnter() {
              return _this4.hoverCube(page);
            },
            onMouseLeave: function onMouseLeave() {
              return _this4.unhoverCube(page);
            },
            onClick: function onClick() {
              return _this4.props.setPage(page.page);
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Cube__["a" /* default */], {
            image: page.page.Icon,
            color: page.page.color,
            offset: page.offset,
            speed: 120,
            size: 170
          })
        );
      })
    );
  };

  return Cubes;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent);



/***/ }),

/***/ "./src/components/HomeTitle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_media__ = __webpack_require__("./src/utils/media.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_animations__ = __webpack_require__("./src/utils/animations/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_RollingText__ = __webpack_require__("./src/components/common/RollingText.js");
var _templateObject = _taggedTemplateLiteralLoose(["\n  color: white;\n  flex: 2;\n\n  ", ";\n"], ["\n  color: white;\n  flex: 2;\n\n  ", ";\n"]),
    _templateObject2 = _taggedTemplateLiteralLoose(["\n    flex: 1;\n    transform: none;\n  "], ["\n    flex: 1;\n    transform: none;\n  "]),
    _templateObject3 = _taggedTemplateLiteralLoose(["\n  font-weight: 300;\n  font-size: 4rem;\n  text-shadow: 0 0 3px rgba(0, 0, 0, 0.6);\n  ", ";\n\n  ", ";\n"], ["\n  font-weight: 300;\n  font-size: 4rem;\n  text-shadow: 0 0 3px rgba(0, 0, 0, 0.6);\n  ", ";\n\n  ", ";\n"]),
    _templateObject4 = _taggedTemplateLiteralLoose(["\n    text-align: center;\n  "], ["\n    text-align: center;\n  "]),
    _templateObject5 = _taggedTemplateLiteralLoose(["\n    font-size: 3rem;\n  "], ["\n    font-size: 3rem;\n  "]),
    _templateObject6 = _taggedTemplateLiteralLoose(["\n  font-weight: 300;\n  font-size: 2.5rem;\n  line-height: 1.2;\n  padding-bottom: 2rem;\n\n  color: rgba(255, 255, 255, 0.9);\n\n  ", ";\n\n  ", ";\n\n  ", ";\n"], ["\n  font-weight: 300;\n  font-size: 2.5rem;\n  line-height: 1.2;\n  padding-bottom: 2rem;\n\n  color: rgba(255, 255, 255, 0.9);\n\n  ", ";\n\n  ", ";\n\n  ", ";\n"]),
    _templateObject7 = _taggedTemplateLiteralLoose(["\n    font-size: 1.5rem;\n  "], ["\n    font-size: 1.5rem;\n  "]),
    _templateObject8 = _taggedTemplateLiteralLoose(["\n  display: flex;\n  width: 550px;\n  ", ";\n  font-size: 1.25rem;\n\n  a {\n    margin-right: 1rem;\n\n    ", ";\n  }\n\n  ", ";\n\n  ", ";\n"], ["\n  display: flex;\n  width: 550px;\n  ", ";\n  font-size: 1.25rem;\n\n  a {\n    margin-right: 1rem;\n\n    ", ";\n  }\n\n  ", ";\n\n  ", ";\n"]),
    _templateObject9 = _taggedTemplateLiteralLoose(["\n      margin: 0;\n      text-align: center;\n      margin-right: 0;\n    "], ["\n      margin: 0;\n      text-align: center;\n      margin-right: 0;\n    "]),
    _templateObject10 = _taggedTemplateLiteralLoose(["\n    margin: 0 1rem;\n    justify-content: space-around;\n    width: 100%;\n    text-align: center;\n  "], ["\n    margin: 0 1rem;\n    justify-content: space-around;\n    width: 100%;\n    text-align: center;\n  "]),
    _templateObject11 = _taggedTemplateLiteralLoose(["\n    font-size: .875rem;\n\n    a {\n      width: inherit;\n    }\n  "], ["\n    font-size: .875rem;\n\n    a {\n      width: inherit;\n    }\n  "]),
    _templateObject12 = _taggedTemplateLiteralLoose(["\n  display: inline-block;\n  ", ";\n  color: ", ";\n"], ["\n  display: inline-block;\n  ", ";\n  color: ", ";\n"]),
    _templateObject13 = _taggedTemplateLiteralLoose(["\n  transition: 0.3s ease color;\n  display: inline-block;\n  ", ";\n"], ["\n  transition: 0.3s ease color;\n  display: inline-block;\n  ", ";\n"]);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }









var Container = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div(_templateObject, __WEBPACK_IMPORTED_MODULE_2__utils_media__["a" /* default */].tablet(_templateObject2));

var Title = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].h1(_templateObject3, __WEBPACK_IMPORTED_MODULE_2__utils_media__["a" /* default */].tablet(_templateObject4), __WEBPACK_IMPORTED_MODULE_2__utils_media__["a" /* default */].phone(_templateObject5));

var SubTitle = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].h2(_templateObject6, Object(__WEBPACK_IMPORTED_MODULE_3__utils_animations__["b" /* fadeIn */])(0.4), __WEBPACK_IMPORTED_MODULE_2__utils_media__["a" /* default */].tablet(_templateObject4), __WEBPACK_IMPORTED_MODULE_2__utils_media__["a" /* default */].phone(_templateObject7));

var Buttons = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div(_templateObject8, Object(__WEBPACK_IMPORTED_MODULE_3__utils_animations__["b" /* fadeIn */])(0.5), __WEBPACK_IMPORTED_MODULE_2__utils_media__["a" /* default */].tablet(_templateObject9), __WEBPACK_IMPORTED_MODULE_2__utils_media__["a" /* default */].tablet(_templateObject10), __WEBPACK_IMPORTED_MODULE_2__utils_media__["a" /* default */].phone(_templateObject11));

var Primary = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div(_templateObject12, Object(__WEBPACK_IMPORTED_MODULE_3__utils_animations__["b" /* fadeIn */])(0.3), function (props) {
  return props.theme.primary;
});

var Secondary = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div(_templateObject13, Object(__WEBPACK_IMPORTED_MODULE_3__utils_animations__["b" /* fadeIn */])(0.2));

var isBot = function isBot() {
  return (/google|baidu|bing|msn|duckduckgo|teoma|slurp|yandex/i.test(navigator.userAgent)
  );
};

/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var page = _ref.page;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    Container,
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Title,
      { title: "Jo\xE3o Cunha" },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        Primary,
        null,
        "I'm"
      ),
      " ",
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        Secondary,
        { style: { color: page.color() } },
        "Jo\xE3o Cunha"
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      SubTitle,
      { title: "I code and stuff" },
      typeof window === "undefined" || isBot() ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "span",
        null,
        "I code and stuff"
      ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "span",
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4__common_RollingText__["a" /* default */],
          { updateCheck: page.name, width: "12rem" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "span",
            { style: { color: page.color() } },
            page.niceName
          )
        )
      )
    )
  );
});

/***/ }),

/***/ "./src/components/common/Fullscreen.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.es.js");
var _templateObject = _taggedTemplateLiteralLoose(["\n  display: flex;\n  flex: auto;\n  width: 100%;\n  height: 100%;\n"], ["\n  display: flex;\n  flex: auto;\n  width: 100%;\n  height: 100%;\n"]);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }



/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_styled_components__["b" /* default */].div(_templateObject));

/***/ }),

/***/ "./src/components/common/Headings.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Heading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SubHeading; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_media__ = __webpack_require__("./src/utils/media.js");
var _templateObject = _taggedTemplateLiteralLoose(["\n  text-align: center;\n  font-weight: 300;\n  font-size: 2.5rem;\n  margin-top: 6rem;\n  margin-bottom: 1rem;\n  text-transform: uppercase;\n  ", ";\n  color: ", ";\n  text-shadow: 0 0 50px ", ";\n"], ["\n  text-align: center;\n  font-weight: 300;\n  font-size: 2.5rem;\n  margin-top: 6rem;\n  margin-bottom: 1rem;\n  text-transform: uppercase;\n  ", ";\n  color: ", ";\n  text-shadow: 0 0 50px ", ";\n"]),
    _templateObject2 = _taggedTemplateLiteralLoose(["\nmargin-top: 3rem;\nmargin-bottom: 0;\n"], ["\nmargin-top: 3rem;\nmargin-bottom: 0;\n"]),
    _templateObject3 = _taggedTemplateLiteralLoose(["\n  font-size: 1.25rem;\n  text-align: center;\n  font-weight: 200;\n  line-height: 1.4;\n  max-width: 40rem;\n  color: rgba(255, 255, 255, 0.8);\n"], ["\n  font-size: 1.25rem;\n  text-align: center;\n  font-weight: 200;\n  line-height: 1.4;\n  max-width: 40rem;\n  color: rgba(255, 255, 255, 0.8);\n"]);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }






var Heading = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].h2(_templateObject, __WEBPACK_IMPORTED_MODULE_2__utils_media__["a" /* default */].phone(_templateObject2), function (_ref) {
  var color = _ref.color;
  return color();
}, function (_ref2) {
  var color = _ref2.color;
  return color.clearer(0.6);
});

var SubHeading = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].p(_templateObject3);



/***/ }),

/***/ "./src/components/common/Relative.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.es.js");
var _templateObject = _taggedTemplateLiteralLoose(["\n  position: relative;\n"], ["\n  position: relative;\n"]);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }



/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_styled_components__["b" /* default */].div(_templateObject));

/***/ }),

/***/ "./src/components/common/RollingText.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RollingText; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_gsap__ = __webpack_require__("./node_modules/gsap/TweenMax.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_gsap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_gsap__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var RollingText = function (_React$Component) {
  _inherits(RollingText, _React$Component);

  function RollingText() {
    var _temp, _this, _ret;

    _classCallCheck(this, RollingText);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      oldChildren: null
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  RollingText.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    return !this.props.updateCheck || nextProps.updateCheck !== this.props.updateCheck;
  };

  RollingText.prototype.componentDidMount = function componentDidMount() {
    this.fadeInTL = new __WEBPACK_IMPORTED_MODULE_1_gsap__["TimelineMax"]({ paused: true });
    this.fadeInTL.fromTo(this.fadein, 0.8, { opacity: 0, y: 20 }, { opacity: 1, y: 0 });

    this.fadeOutTL = new __WEBPACK_IMPORTED_MODULE_1_gsap__["TimelineMax"]({ paused: true });
    this.fadeOutTL.fromTo(this.fadeout, 0.8, { opacity: 1, y: 0 }, { opacity: 0, y: -20 });

    __WEBPACK_IMPORTED_MODULE_1_gsap__["TweenMax"].set(this.fadein, { opacity: 1, y: 0 });
  };

  RollingText.prototype.componentDidUpdate = function componentDidUpdate(nextProps) {
    if (nextProps.children !== this.props.children) {
      this.oldChildren = this.props.children;
      this.fadeInTL.restart();
      this.fadeOutTL.restart();
    }
  };

  RollingText.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        children = _props.children,
        className = _props.className,
        style = _props.style;

    var oldChildren = this.oldChildren;

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "div",
      {
        className: className,
        style: _extends({ display: "inline-block", position: "relative" }, style)
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        {
          style: { position: "absolute", left: 0 },
          ref: function ref(el) {
            _this2.fadeout = el;
          }
        },
        oldChildren
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        {
          style: { display: "inline-block", width: "inherit" },
          ref: function ref(el) {
            _this2.fadein = el;
          }
        },
        children
      )
    );
  };

  return RollingText;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ }),

/***/ "./src/components/common/flex/Centered.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.es.js");
var _templateObject = _taggedTemplateLiteralLoose(["\n  position: relative;\n  display: flex;\n  ", " ", " flex-direction: column;\n  width: 100%;\n"], ["\n  position: relative;\n  display: flex;\n  ", " ", " flex-direction: column;\n  width: 100%;\n"]);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }



/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_styled_components__["b" /* default */].div(_templateObject, function (props) {
  return props.vertical && "justify-content: center;";
}, function (props) {
  return props.horizontal && "align-items: center;";
}));

/***/ }),

/***/ "./src/components/common/flex/Column.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.es.js");
var _templateObject = _taggedTemplateLiteralLoose(["\n  display: flex;\n  flex-direction: column;\n  ", ";\n  justify-content: ", ";\n  align-items: ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  ", ";\n  justify-content: ", ";\n  align-items: ", ";\n"]);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }



/* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0_styled_components__["b" /* default */].div(_templateObject, function (props) {
  return props.flex && "flex: " + props.flex;
}, function (props) {
  return props.justifyContent;
}, function (props) {
  return props.alignItems;
}));

/***/ }),

/***/ "./src/components/common/flex/MaxWidth.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.es.js");
var _templateObject = _taggedTemplateLiteralLoose(["\n  display: flex;\n  padding: 0 2rem;\n  width: 100%;\n  justify-content: center;\n"], ["\n  display: flex;\n  padding: 0 2rem;\n  width: 100%;\n  justify-content: center;\n"]),
    _templateObject2 = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  max-width: ", "px;\n"], ["\n  width: 100%;\n  max-width: ", "px;\n"]);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }




var Container = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div(_templateObject);

var InnerContainer = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div(_templateObject2, function (props) {
  return props.width;
});

/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var children = _ref.children,
      _ref$width = _ref.width,
      width = _ref$width === undefined ? 1280 : _ref$width,
      className = _ref.className;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    Container,
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      InnerContainer,
      { className: className, width: width },
      children
    )
  );
});

/***/ }),

/***/ "./src/components/common/links/Link.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkIcon; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_icons_lib_md_link__ = __webpack_require__("./node_modules/react-icons/lib/md/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_icons_lib_md_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_icons_lib_md_link__);
var _templateObject = _taggedTemplateLiteralLoose(["\n  color: ", ";\n  text-shadow: 0 0 50px ", ";\n  text-decoration: none;\n"], ["\n  color: ", ";\n  text-shadow: 0 0 50px ", ";\n  text-decoration: none;\n"]),
    _templateObject2 = _taggedTemplateLiteralLoose(["\n  margin-right: 5px;\n"], ["\n  margin-right: 5px;\n"]);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }





var Link = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].a(_templateObject, function (_ref) {
  var color = _ref.color;
  return color();
}, function (_ref2) {
  var color = _ref2.color;
  return color.clearer(0.6);
});

/* harmony default export */ __webpack_exports__["b"] = (Link);
var LinkIcon = Object(__WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */])(__WEBPACK_IMPORTED_MODULE_2_react_icons_lib_md_link___default.a)(_templateObject2);

/***/ }),

/***/ "./src/components/common/spacing/Padding.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__spacing__ = __webpack_require__("./src/components/common/spacing/spacing.js");
var _templateObject = _taggedTemplateLiteralLoose(["\n  padding: ", ";\n  box-sizing: border-box;\n"], ["\n  padding: ", ";\n  box-sizing: border-box;\n"]);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }




/* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0_styled_components__["b" /* default */].div(_templateObject, __WEBPACK_IMPORTED_MODULE_1__spacing__["a" /* default */]));

/***/ }),

/***/ "./src/components/common/spacing/spacing.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var margin = _ref.margin,
      top = _ref.top,
      right = _ref.right,
      left = _ref.left,
      bottom = _ref.bottom,
      horizontal = _ref.horizontal,
      vertical = _ref.vertical;

  var topMargin = top || vertical || margin || 0;
  var rightMargin = right || horizontal || margin || 0;
  var bottomMargin = bottom || vertical || margin || 0;
  var leftMargin = left || horizontal || margin || 0;

  return topMargin + "rem " + rightMargin + "rem " + bottomMargin + "rem " + leftMargin + "rem";
});

/***/ }),

/***/ "./src/components/pages/AboutMe/SocialNetworks.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialNetworks; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_flex_MaxWidth__ = __webpack_require__("./src/components/common/flex/MaxWidth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_flex_Centered__ = __webpack_require__("./src/components/common/flex/Centered.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_flex_Column__ = __webpack_require__("./src/components/common/flex/Column.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_spacing_Padding__ = __webpack_require__("./src/components/common/spacing/Padding.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_RollingText__ = __webpack_require__("./src/components/common/RollingText.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_links_Link__ = __webpack_require__("./src/components/common/links/Link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__theme__ = __webpack_require__("./src/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_media__ = __webpack_require__("./src/utils/media.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__icons__ = __webpack_require__("./src/components/pages/AboutMe/icons.js");
var _templateObject = _taggedTemplateLiteralLoose(["\n  transition: 0.3s ease box-shadow;\n  border-radius: 2px;\n  background-color: ", ";\n  box-shadow: 0 3px 200px ", ";\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n  padding: 15px;\n  ", ";\n  ", ";\n"], ["\n  transition: 0.3s ease box-shadow;\n  border-radius: 2px;\n  background-color: ", ";\n  box-shadow: 0 3px 200px ", ";\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n  padding: 15px;\n  ", ";\n  ", ";\n"]),
    _templateObject2 = _taggedTemplateLiteralLoose(["\n  margin-top: 1rem;\n  height: 320px;\n"], ["\n  margin-top: 1rem;\n  height: 320px;\n"]),
    _templateObject3 = _taggedTemplateLiteralLoose(["\n  margin-top: 1rem;\n  height: 280px;\n"], ["\n  margin-top: 1rem;\n  height: 280px;\n"]),
    _templateObject4 = _taggedTemplateLiteralLoose(["\n  color: rgba(255, 255, 255, 0.8);\n  font-weight: 400;\n  font-size: 1.125rem;\n  line-height: 1.4;\n  border-radius: 4px;\n  margin-top: 4rem;\n  margin-bottom: 8rem;\n  z-index: 2;\n"], ["\n  color: rgba(255, 255, 255, 0.8);\n  font-weight: 400;\n  font-size: 1.125rem;\n  line-height: 1.4;\n  border-radius: 4px;\n  margin-top: 4rem;\n  margin-bottom: 8rem;\n  z-index: 2;\n"]),
    _templateObject5 = _taggedTemplateLiteralLoose(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  ", ";\n"], ["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  ", ";\n"]),
    _templateObject6 = _taggedTemplateLiteralLoose(["\n  flex-direction: column;\n"], ["\n  flex-direction: column;\n"]),
    _templateObject7 = _taggedTemplateLiteralLoose(["\n  display: flex;\n  justify-content: space-around;\n  margin-top: 1rem;\n  margin-bottom: 4rem;\n  flex: 1;\n  min-width: 100%;\n  ", ";\n"], ["\n  display: flex;\n  justify-content: space-around;\n  margin-top: 1rem;\n  margin-bottom: 4rem;\n  flex: 1;\n  min-width: 100%;\n  ", ";\n"]),
    _templateObject8 = _taggedTemplateLiteralLoose(["\n  margin: 2rem 0;\n"], ["\n  margin: 2rem 0;\n"]),
    _templateObject9 = _taggedTemplateLiteralLoose(["\n  transition: 0.3s ease background-color;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  width: 128px;\n  height: 128px;\n  ", ";\n  border-radius: 2px;\n  &:hover {\n    background-color: rgba(0, 0, 0, 0.1);\n  }\n  ", ";\n"], ["\n  transition: 0.3s ease background-color;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  width: 128px;\n  height: 128px;\n  ", ";\n  border-radius: 2px;\n  &:hover {\n    background-color: rgba(0, 0, 0, 0.1);\n  }\n  ", ";\n"]),
    _templateObject10 = _taggedTemplateLiteralLoose(["\n  width: 96px;\n  height: 96px;\n  svg {\n    width: 60px;\n    height: 60px;\n  }\n"], ["\n  width: 96px;\n  height: 96px;\n  svg {\n    width: 60px;\n    height: 60px;\n  }\n"]),
    _templateObject11 = _taggedTemplateLiteralLoose(["\n      background-color: ", ";\n      &:hover {\n        background-color: ", ";\n      }\n    "], ["\n      background-color: ", ";\n      &:hover {\n        background-color: ", ";\n      }\n    "]),
    _templateObject12 = _taggedTemplateLiteralLoose(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-weight: 300;\n  font-size: 2rem;\n  padding: 2rem;\n  border-radius: 2px;\n  color: white;\n  img {\n    display: block;\n  }\n  h4 {\n    margin-bottom: 0;\n    margin-top: 1rem;\n    font-weight: 200;\n    font-size: 2rem;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-weight: 300;\n  font-size: 2rem;\n  padding: 2rem;\n  border-radius: 2px;\n  color: white;\n  img {\n    display: block;\n  }\n  h4 {\n    margin-bottom: 0;\n    margin-top: 1rem;\n    font-weight: 200;\n    font-size: 2rem;\n  }\n"]);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }















var Container = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div(_templateObject, function (_ref) {
  var theme = _ref.theme;
  return theme.background;
}, function (_ref2) {
  var color = _ref2.color;
  return color.clearer(0.8);
}, __WEBPACK_IMPORTED_MODULE_9__utils_media__["a" /* default */].tablet(_templateObject2), __WEBPACK_IMPORTED_MODULE_9__utils_media__["a" /* default */].phone(_templateObject3));

var Pane = Object(__WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */])(__WEBPACK_IMPORTED_MODULE_2__common_flex_MaxWidth__["a" /* default */])(_templateObject4);

var Flex = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div(_templateObject5, __WEBPACK_IMPORTED_MODULE_9__utils_media__["a" /* default */].phone(_templateObject6));

var Icons = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div(_templateObject7, __WEBPACK_IMPORTED_MODULE_9__utils_media__["a" /* default */].phone(_templateObject8));

var IconContainer = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div(_templateObject9, __WEBPACK_IMPORTED_MODULE_9__utils_media__["a" /* default */].phone(_templateObject10), function (_ref3) {
  var selected = _ref3.selected,
      template = _ref3.template;
  return selected && Object(__WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* css */])(_templateObject11, template.color.clearer(0.9), template.color.clearer(0.9));
});

var TemplateName = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div(_templateObject12);

var SocialNetworks = function (_React$Component) {
  _inherits(SocialNetworks, _React$Component);

  function SocialNetworks() {
    var _temp, _this, _ret;

    _classCallCheck(this, SocialNetworks);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = { socialIndex: 0 }, _this.setSocialNet = function (socialIndex) {
      _this.setState({ socialIndex: socialIndex });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  SocialNetworks.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    return nextState.socialIndex !== this.state.socialIndex;
  };

  SocialNetworks.prototype.render = function render() {
    var _this2 = this;

    var network = __WEBPACK_IMPORTED_MODULE_10__icons__["a" /* icons */][this.state.socialIndex];

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Pane,
      { width: 1280 },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        Flex,
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          Icons,
          null,
          __WEBPACK_IMPORTED_MODULE_10__icons__["a" /* icons */].map(function (_ref4, i) {
            var Icon = _ref4.Icon;
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              IconContainer,
              {
                key: i,
                selected: i === _this2.state.socialIndex,
                template: network,
                onClick: function onClick() {
                  _this2.setSocialNet(i);
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: Icon, width: 80, height: 80 })
            );
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          Container,
          { color: network.color },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3__common_flex_Centered__["a" /* default */],
            { horizontal: true },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6__common_RollingText__["a" /* default */],
              {
                style: {
                  display: "flex",
                  height: "100%",
                  alignItems: "center"
                },
                updateCheck: network
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_7__common_links_Link__["b" /* default */],
                { color: network.color, href: network.link, target: "_blank" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__common_links_Link__["a" /* LinkIcon */], null),
                network.value
              )
            )
          )
        )
      )
    );
  };

  return SocialNetworks;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ }),

/***/ "./src/components/pages/AboutMe/icons.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return icons; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_animations__ = __webpack_require__("./src/utils/animations/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theme__ = __webpack_require__("./src/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__public_img_social_linkedin_svg__ = __webpack_require__("./public/img/social/linkedin.svg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__public_img_social_linkedin_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__public_img_social_linkedin_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__public_img_social_twitter_svg__ = __webpack_require__("./public/img/social/twitter.svg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__public_img_social_twitter_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__public_img_social_twitter_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__public_img_social_github_svg__ = __webpack_require__("./public/img/social/github.svg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__public_img_social_github_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__public_img_social_github_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__public_img_social_so_svg__ = __webpack_require__("./public/img/social/so.svg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__public_img_social_so_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__public_img_social_so_svg__);
var _templateObject = _taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n  ", ";\n  img {\n    display: inline-block;\n    margin-bottom: 0;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  ", ";\n  img {\n    display: inline-block;\n    margin-bottom: 0;\n  }\n"]);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }







// images





var Container = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div(_templateObject, function (props) {
  return Object(__WEBPACK_IMPORTED_MODULE_2__utils_animations__["b" /* fadeIn */])(props.i * 0.1);
});

/* unused harmony default export */ var _unused_webpack_default_export = (function (_ref) {
  var iconSrc = _ref.iconSrc,
      title = _ref.title,
      extension = _ref.extension,
      props = _objectWithoutProperties(_ref, ["iconSrc", "title", "extension"]);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    Container,
    props,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { width: 20, height: 20, src: iconSrc, alt: title }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "span",
      null,
      ".",
      extension
    )
  );
});

var icons = [{
  Icon: __WEBPACK_IMPORTED_MODULE_4__public_img_social_linkedin_svg___default.a,
  title: "Linked In",
  value: "João Cunha",
  link: "https://www.linkedin.com/in/joao-cunha-6a98a29b/",
  color: Object(__WEBPACK_IMPORTED_MODULE_3__theme__["a" /* decorateSelector */])(function () {
    return "#0077B5";
  })
}, {
  Icon: __WEBPACK_IMPORTED_MODULE_5__public_img_social_twitter_svg___default.a,
  title: "Twitter",
  value: "@lokuzt",
  link: "https://twitter.com/lokuzt",
  color: Object(__WEBPACK_IMPORTED_MODULE_3__theme__["a" /* decorateSelector */])(function () {
    return "#1DA1F2";
  })
}, {
  Icon: __WEBPACK_IMPORTED_MODULE_6__public_img_social_github_svg___default.a,
  title: "Github",
  value: "JoaoCnh",
  link: "https://github.com/JoaoCnh",
  color: Object(__WEBPACK_IMPORTED_MODULE_3__theme__["a" /* decorateSelector */])(function () {
    return "#F9FBFF";
  })
}, {
  Icon: __WEBPACK_IMPORTED_MODULE_7__public_img_social_so_svg___default.a,
  title: "Stack Overflow",
  value: "lokuzt",
  link: "https://stackoverflow.com/users/3154167/lokuzt",
  color: Object(__WEBPACK_IMPORTED_MODULE_3__theme__["a" /* decorateSelector */])(function () {
    return "#F48024";
  })
}];

/***/ }),

/***/ "./src/components/pages/AboutMe/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_media__ = __webpack_require__("./node_modules/react-media/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_media___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_media__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SocialNetworks__ = __webpack_require__("./src/components/pages/AboutMe/SocialNetworks.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_flex_Centered__ = __webpack_require__("./src/components/common/flex/Centered.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_Headings__ = __webpack_require__("./src/components/common/Headings.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_links_Link__ = __webpack_require__("./src/components/common/links/Link.js");
var _templateObject = _taggedTemplateLiteralLoose(["\n  color: ", ";\n  text-shadow: 0 0 50px ", ";\n"], ["\n  color: ", ";\n  text-shadow: 0 0 50px ", ";\n"]),
    _templateObject2 = _taggedTemplateLiteralLoose(["\n  flex: 1;\n  display: flex;\n  margin-right: 2rem;\n  flex-direction: column;\n"], ["\n  flex: 1;\n  display: flex;\n  margin-right: 2rem;\n  flex-direction: column;\n"]),
    _templateObject3 = _taggedTemplateLiteralLoose(["\n  display: flex;\n  position: relative;\n  margin-right: 2rem;\n  flex-direction: row;\n  flex-wrap: wrap;\n"], ["\n  display: flex;\n  position: relative;\n  margin-right: 2rem;\n  flex-direction: row;\n  flex-wrap: wrap;\n"]),
    _templateObject4 = _taggedTemplateLiteralLoose(["\n  color: ", ";\n  text-shadow: 0 0 50px ", ";\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  padding-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  margin-bottom: 1.0875rem;\n  text-rendering: optimizeLegibility;\n  font-size: 2.35824rem;\n  line-height: 1.1;\n"], ["\n  color: ", ";\n  text-shadow: 0 0 50px ", ";\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  padding-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  margin-bottom: 1.0875rem;\n  text-rendering: optimizeLegibility;\n  font-size: 2.35824rem;\n  line-height: 1.1;\n"]),
    _templateObject5 = _taggedTemplateLiteralLoose(["\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  padding-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  margin-bottom: 1.0875rem;\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 1.8rem;\n"], ["\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  padding-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  margin-bottom: 1.0875rem;\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 1.8rem;\n"]);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }










var Text = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].span(_templateObject, function (_ref) {
  var color = _ref.color;
  return color();
}, function (_ref2) {
  var color = _ref2.color;
  return color.clearer(0.6);
});

var Column = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div(_templateObject2);

var Row = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div(_templateObject3);

var ColumnHeading = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].h3(_templateObject4, function (_ref3) {
  var color = _ref3.color;
  return color();
}, function (_ref4) {
  var color = _ref4.color;
  return color.clearer(0.6);
});

var ColumnSubHeading = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].p(_templateObject5);

/* harmony default export */ __webpack_exports__["a"] = (function (_ref5) {
  var page = _ref5.page;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "div",
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_4__common_flex_Centered__["a" /* default */],
      { horizontal: true },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_5__common_Headings__["a" /* Heading */],
        { color: page.color },
        "Hello! My name is Jo\xE3o Cunha"
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_5__common_Headings__["b" /* SubHeading */],
        null,
        "I'm a Full-Stack developer working",
        " ",
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_6__common_links_Link__["b" /* default */],
          {
            color: page.color,
            href: "https://www.wiremaze.com/",
            target: "_blank"
          },
          "@Wiremaze"
        ),
        " ",
        "in Porto, Portugal.",
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null),
        "I love ",
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          Text,
          { color: page.color },
          "Music"
        ),
        ",",
        " ",
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          Text,
          { color: page.color },
          "Movies"
        ),
        ",",
        " ",
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          Text,
          { color: page.color },
          "Sports"
        ),
        ",",
        " ",
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          Text,
          { color: page.color },
          "Video-Games"
        ),
        " and",
        " ",
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          Text,
          { color: page.color },
          "Programming"
        ),
        "."
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_react_media___default.a,
      { query: "(min-width: 1280px)" },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        Row,
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          Column,
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            ColumnHeading,
            { color: page.color },
            "setup img"
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          Column,
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            ColumnHeading,
            { color: page.color },
            "Welcome to my page"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            ColumnSubHeading,
            null,
            "I hope you enjoy your stay and please feel free to get to know me more and connect with me in the following social networks"
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_react_media___default.a,
      { query: "(max-width: 1280px)" },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_0_react__["Fragment"],
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          Row,
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            ColumnHeading,
            { color: page.color },
            "setup img"
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          Row,
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            ColumnHeading,
            { color: page.color },
            "Welcome to my page"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            ColumnSubHeading,
            null,
            "I hope you enjoy your stay and please feel free to get to know me more and connect with me in the following social networks"
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__SocialNetworks__["a" /* default */], null)
  );
});

/***/ }),

/***/ "./src/index.css":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_css__ = __webpack_require__("./src/index.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__("./node_modules/react-dom/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__App__ = __webpack_require__("./src/App.js");







Object(__WEBPACK_IMPORTED_MODULE_2_react_dom__["render"])(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__App__["a" /* default */], null), document.querySelector("#app"));

/***/ }),

/***/ "./src/pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aboutMe", function() { return aboutMe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myProjects", function() { return myProjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyExperience", function() { return MyExperience; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whateverMe", function() { return whateverMe; });
/* harmony export (immutable) */ __webpack_exports__["default"] = getDefinition;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_pages_AboutMe__ = __webpack_require__("./src/components/pages/AboutMe/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme__ = __webpack_require__("./src/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__public_img_cubes_muhface_jpg__ = __webpack_require__("./public/img/cubes/muhface.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__public_img_cubes_muhface_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__public_img_cubes_muhface_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__public_img_cubes_github_png__ = __webpack_require__("./public/img/cubes/github.png");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__public_img_cubes_github_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__public_img_cubes_github_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__public_img_cubes_code_png__ = __webpack_require__("./public/img/cubes/code.png");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__public_img_cubes_code_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__public_img_cubes_code_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__public_img_cubes_design_png__ = __webpack_require__("./public/img/cubes/design.png");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__public_img_cubes_design_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__public_img_cubes_design_png__);





// images





var aboutMe = {
  name: "about-me",
  niceName: "About me",
  Icon: __WEBPACK_IMPORTED_MODULE_3__public_img_cubes_muhface_jpg___default.a,
  color: Object(__WEBPACK_IMPORTED_MODULE_2__theme__["a" /* decorateSelector */])(function () {
    return "#6CAEDD";
  }),
  render: function render(page) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_pages_AboutMe__["a" /* default */], { page: page });
  }
};

var myProjects = {
  name: "my-projects",
  niceName: "My projects",
  Icon: __WEBPACK_IMPORTED_MODULE_4__public_img_cubes_github_png___default.a,
  color: Object(__WEBPACK_IMPORTED_MODULE_2__theme__["a" /* decorateSelector */])(function () {
    return "#F9FBFF";
  }),
  render: function render(page) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_pages_AboutMe__["a" /* default */], { page: page });
  }
};

var MyExperience = {
  name: "my-experience",
  niceName: "My experience",
  Icon: __WEBPACK_IMPORTED_MODULE_5__public_img_cubes_code_png___default.a,
  color: Object(__WEBPACK_IMPORTED_MODULE_2__theme__["a" /* decorateSelector */])(function () {
    return "#41B883";
  }),
  render: function render(page) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_pages_AboutMe__["a" /* default */], { page: page });
  }
};

var whateverMe = {
  name: "this-design",
  niceName: "This design",
  Icon: __WEBPACK_IMPORTED_MODULE_6__public_img_cubes_design_png___default.a,
  color: Object(__WEBPACK_IMPORTED_MODULE_2__theme__["a" /* decorateSelector */])(function () {
    return "#FF9800";
  }),
  render: function render(page) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_pages_AboutMe__["a" /* default */], { page: page });
  }
};

function getDefinition(theme) {
  if (!theme) {
    return aboutMe;
  }

  switch (theme) {
    default:
    case aboutMe.name:
      return aboutMe;
    case myProjects.name:
      return myProjects;
    case MyExperience.name:
      return MyExperience;
    case whateverMe.name:
      return whateverMe;
  }
}

/***/ }),

/***/ "./src/theme/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return decorateSelector; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_color__ = __webpack_require__("./node_modules/color/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_color___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_color__);



var colorMethods = ["negate", // rgb(0, 100, 255) -> rgb(255, 155, 0)

"lighten", // hsl(100, 50%, 50%) -> hsl(100, 50%, 75%)
"darken", // hsl(100, 50%, 50%) -> hsl(100, 50%, 25%)

"saturate", // hsl(100, 50%, 50%) -> hsl(100, 75%, 50%)
"desaturate", // hsl(100, 50%, 50%) -> hsl(100, 25%, 50%)
"greyscale", // #5CBF54 -> #969696

"whiten", // hwb(100, 50%, 50%) -> hwb(100, 75%, 50%)
"blacken", // hwb(100, 50%, 50%) -> hwb(100, 50%, 75%)

"clearer", // rgba(10, 10, 10, 0.8) -> rgba(10, 10, 10, 0.4)
"opaquer", // rgba(10, 10, 10, 0.8) -> rgba(10, 10, 10, 1.0)

"rotate" // hsl(60, 20%, 20%) -> hsl(330, 20%, 20%)
];

/**
 * Takes a selector that returns a color string and returns new decorated selector that calls the
 * original function to get the color and then modifies that color, ultimately returning another
 * color string.
 */
var addModifier = function addModifier(fn, method) {
  for (var _len = arguments.length, modifierArgs = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    modifierArgs[_key - 2] = arguments[_key];
  }

  return function () {
    var _ref;

    return (_ref = new __WEBPACK_IMPORTED_MODULE_1_color___default.a(fn.apply(undefined, arguments)))[method].apply(_ref, modifierArgs).rgbString();
  };
};
/**
 * Add useful methods directly to selector function, as well as put an rgbString() call at the end
 * @param selector
 */
var decorateSelector = function decorateSelector(selector) {
  // add member functions to our selector
  colorMethods.forEach(function (method) {
    selector[method] = Object(__WEBPACK_IMPORTED_MODULE_0_lodash__["memoize"])(function () {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return decorateSelector(addModifier.apply(undefined, [selector, method].concat(args)));
    });
  });
  return selector;
};

var createTheme = function createTheme(colors) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_lodash__["mapValues"])(colors, function (result) {
    return decorateSelector(function () {
      return result;
    });
  });
};

var theme = createTheme({
  background: "#24282A",
  background2: "#1C2022",
  background3: "#374140",
  primary: "#FFD399",
  primaryText: "#7F694C",
  secondary: "#6CAEDD",
  white: "#E0E0E0",
  gray: "#C0C0C0",
  black: "#74757D",
  green: "#5da700",
  redBackground: "#400000",
  red: "#F27777"
});

/* unused harmony default export */ var _unused_webpack_default_export = (theme);

/***/ }),

/***/ "./src/utils/animations/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return fadeIn; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.es.js");
var _templateObject = _taggedTemplateLiteralLoose(["\n  0%   { opacity: 0; }\n  100% { opacity: 1; }\n"], ["\n  0%   { opacity: 0; }\n  100% { opacity: 1; }\n"]),
    _templateObject2 = _taggedTemplateLiteralLoose(["\n  0%   { opacity: 0; transform: translateY(10px); }\n  100% { opacity: 1; transform: translateY(0px); }\n  "], ["\n  0%   { opacity: 0; transform: translateY(10px); }\n  100% { opacity: 1; transform: translateY(0px); }\n  "]),
    _templateObject3 = _taggedTemplateLiteralLoose(["\n  animation: ", " 0.5s;\n  animation-fill-mode: forwards;\n  animation-delay: ", "s;\n  opacity: 0;\n"], ["\n  animation: ", " 0.5s;\n  animation-fill-mode: forwards;\n  animation-delay: ", "s;\n  opacity: 0;\n"]);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }



var animation = Object(__WEBPACK_IMPORTED_MODULE_0_styled_components__["c" /* keyframes */])(_templateObject);

/* harmony default export */ __webpack_exports__["a"] = (function (delay) {
  return "\n    animation: " + animation + " 0.3s;\n    animation-delay: " + delay + "s;\n    animation-fill-mode: forwards;\n    opacity: 0;\n  ";
});

var animIn = Object(__WEBPACK_IMPORTED_MODULE_0_styled_components__["c" /* keyframes */])(_templateObject2);

var fadeIn = function fadeIn() {
  var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return Object(__WEBPACK_IMPORTED_MODULE_0_styled_components__["a" /* css */])(_templateObject3, animIn, delay);
};

/***/ }),

/***/ "./src/utils/canvas/Dot.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dot; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PositionedElement__ = __webpack_require__("./src/utils/canvas/PositionedElement.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Dot = function (_PositionedElement) {
  _inherits(Dot, _PositionedElement);

  function Dot(x, y, color, alpha) {
    _classCallCheck(this, Dot);

    var _this = _possibleConstructorReturn(this, _PositionedElement.call(this, x, y));

    _this.vAlpha = 0;
    _this.dvAlpha = -0.1;
    _this.size = 1;
    _this.minAlpha = 0.2;
    _this.minSize = 1;


    _this.color = color;
    _this.alpha = alpha;
    var r = Math.random();
    _this.minAlpha = 0.1 + r * 0.2;
    _this.minSize = 0.5 + r * 2;
    return _this;
  }

  Dot.prototype.draw = function draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = "rgba(" + this.color.join(",") + ", " + this.alpha + ")";
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI, false);
    ctx.closePath();
    ctx.fill();
  };

  Dot.prototype.setAlpha = function setAlpha(alpha) {
    this.alpha = Math.max(this.minAlpha, alpha);
  };

  Dot.prototype.setSize = function setSize(size) {
    this.size = Math.max(this.minSize, size);
  };

  Dot.prototype.setColor = function setColor(color) {
    this.color = color;
  };

  return Dot;
}(__WEBPACK_IMPORTED_MODULE_0__PositionedElement__["a" /* default */]);



/***/ }),

/***/ "./src/utils/canvas/PositionedElement.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PositionedElement; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PositionedElement = function () {
  function PositionedElement(x, y) {
    _classCallCheck(this, PositionedElement);

    this.vx = 0;
    this.vy = 0;

    this.x = x;
    this.y = y;
  }

  PositionedElement.prototype.setSpeed = function setSpeed(vx, vy) {
    this.vx = vx;
    this.vy = vy;
  };

  PositionedElement.prototype.update = function update(delta) {
    this.x += this.vx * delta;
    this.y += this.vy * delta;
  };

  return PositionedElement;
}();



/***/ }),

/***/ "./src/utils/canvas/Wave.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Wave; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PositionedElement__ = __webpack_require__("./src/utils/canvas/PositionedElement.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Wave = function (_PositionedElement) {
  _inherits(Wave, _PositionedElement);

  function Wave(x, y, color) {
    _classCallCheck(this, Wave);

    var _this = _possibleConstructorReturn(this, _PositionedElement.call(this, x, y));

    _this.waveRadius = 0;
    _this.vR = 4;
    _this.waveWidth = 500;


    _this.color = color;
    return _this;
  }

  Wave.prototype.update = function update(delta) {
    _PositionedElement.prototype.update.call(this, delta);

    this.waveRadius += delta * this.vR;
    this.waveWidth = Math.max(500, this.waveRadius * 0.4);
  };

  return Wave;
}(__WEBPACK_IMPORTED_MODULE_0__PositionedElement__["a" /* default */]);



/***/ }),

/***/ "./src/utils/canvas/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = start;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scroll__ = __webpack_require__("./src/utils/scroll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Dot__ = __webpack_require__("./src/utils/canvas/Dot.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Wave__ = __webpack_require__("./src/utils/canvas/Wave.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }






var Canvas = function () {
  function Canvas(el) {
    var _this = this;

    _classCallCheck(this, Canvas);

    this.dots = [];
    this.wave = null;
    this.lastDelta = Date.now();
    this.cubeX = 1300;
    this.cubeY = 500;
    this.lowPerf = false;
    this.toggle = false;

    this.loop = function () {
      var now = Date.now();
      var delta = 33;
      var renderDelta = (now - _this.lastDelta) * 2;
      if (window.scrolling || Object(__WEBPACK_IMPORTED_MODULE_0__scroll__["a" /* default */])(now).y > _this.stage.height) {
        _this.lastDelta = now;
        requestAnimationFrame(_this.loop);
        return;
      }

      if (renderDelta > 4000) {
        _this.lowPerf = true;
      }

      var distX = void 0;
      var distY = void 0;
      var power = 0.2;

      var startRadius = void 0;
      var endRadius = void 0;
      var middle = void 0;
      var top = void 0;

      _this.toggle = !_this.toggle;
      if (_this.toggle) {
        if (_this.wave) {
          var radius = _this.wave.waveWidth;

          _this.wave.update(delta);

          startRadius = _this.wave.waveRadius - radius / 2 - radius;
          endRadius = _this.wave.waveRadius + radius / 2 - radius;
          middle = startRadius + (endRadius - startRadius) / 2;
          top = -(middle - startRadius) * (middle - endRadius);

          if (startRadius > _this.stage.width + 200) {
            _this.wave = null;
          }
        }

        for (var i = 0; i < _this.dots.length; i++) {
          distX = Math.abs(_this.dots[i].x - _this.cubeX);
          distY = Math.abs(_this.dots[i].y - _this.cubeY);
          var distance = Math.sqrt(distX * distX + distY * distY);

          _this.dots[i].setAlpha(Math.max(0.2, (1 - distance / 300) * 2));
          _this.dots[i].setSize(Math.max(1.5, (1 - distance / 300) * 4));
          _this.dots[i].update(delta);

          if (_this.wave) {
            var dirX = _this.dots[i].x - _this.wave.x;
            var dirY = _this.dots[i].y - _this.wave.y;
            var waveDistance = Math.sqrt(dirX * dirX + dirY * dirY);

            if (waveDistance < middle) {
              _this.dots[i].setColor(_this.wave.color);
            }
            if (waveDistance > startRadius && waveDistance < endRadius) {
              power = Math.max(0, -((waveDistance - startRadius) * (waveDistance - endRadius)) / top);

              _this.dots[i].x += (power - 0.5) * (dirX / waveDistance) * 5;
              _this.dots[i].y += (power - 0.5) * (dirY / waveDistance) * 5;

              _this.dots[i].alpha *= Math.pow(power + 1, 4);
              _this.dots[i].size *= power * 0.5 + 1;
            }
          }
        }
      } else {
        if (!_this.lowPerf) {
          _this.ctx.clearRect(0, 0, _this.stage.width, _this.stage.height);

          for (var _i = 0; _i < _this.dots.length; _i++) {
            _this.dots[_i].draw(_this.ctx);
          }
        }
      }

      _this.lastDelta = now;

      requestAnimationFrame(_this.loop);
    };

    this.calibrated = false;

    this.stage = el;
    this.ctx = el.getContext("2d");

    this.stage.height = window.innerHeight;
    this.stage.width = window.innerWidth;

    window.onfocus = function () {
      // So we don't think there are performance problems if user moves away from tab
      _this.lastDelta = Date.now();
    };
  }

  Canvas.prototype.init = function init() {
    var gridSize = 80;
    var dotAmountHeight = Math.floor(this.stage.height / gridSize);
    var dotAmountWidth = Math.floor(this.stage.width / gridSize);

    for (var i = 0; i < dotAmountHeight; i++) {
      for (var j = 0; j < dotAmountWidth; j++) {
        // Create a dot
        var x = j * gridSize + gridSize * Math.random();
        var y = i * gridSize + gridSize * Math.random();
        var dot = new __WEBPACK_IMPORTED_MODULE_1__Dot__["a" /* default */](x, y, [108, 174, 221], 1);

        // Push to into an array of dots
        this.dots.push(dot);

        dot.setSpeed(Math.random() / 200, Math.random() / 200);
      }
    }
  };

  Canvas.prototype.setParticleColor = function setParticleColor(color) {
    var _this2 = this;

    requestAnimationFrame(function () {
      _this2.dots.forEach(function (d) {
        return d.setColor(color);
      });
    });
  };

  Canvas.prototype.makeWave = function makeWave(x, y, color) {
    this.wave = new __WEBPACK_IMPORTED_MODULE_2__Wave__["a" /* default */](x, y, color);
  };

  Canvas.prototype.setCubePos = function setCubePos(x, y) {
    this.cubeX = x;
    this.cubeY = y;

    if (!this.calibrated) {
      for (var i = 0; i < this.dots.length; i++) {
        var distX = this.cubeX - this.dots[i].x;
        var distY = this.cubeY - this.dots[i].y;

        var distance = Math.sqrt(distX * distX + distY * distY);

        this.dots[i].setSpeed(distX / distance / 20 * ((Math.random() + 0.1) * 0.2), distY / distance / 20 * ((Math.random() + 0.1) * 0.2));
      }
      this.calibrated = true;
    }
  };

  return Canvas;
}();

function start(el) {
  var c = new Canvas(el);

  c.init();
  c.loop();
  return c;
}

/***/ }),

/***/ "./src/utils/media.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.es.js");
var _templateObject = _taggedTemplateLiteralLoose(["\n    @media (max-width: 1279px) {\n      ", ";\n    }\n  "], ["\n    @media (max-width: 1279px) {\n      ", ";\n    }\n  "]),
    _templateObject2 = _taggedTemplateLiteralLoose(["\n    @media (max-width: 660px) {\n      ", ";\n    }\n  "], ["\n    @media (max-width: 660px) {\n      ", ";\n    }\n  "]);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }



/* harmony default export */ __webpack_exports__["a"] = ({
  tablet: function tablet() {
    return Object(__WEBPACK_IMPORTED_MODULE_0_styled_components__["a" /* css */])(_templateObject, __WEBPACK_IMPORTED_MODULE_0_styled_components__["a" /* css */].apply(undefined, arguments));
  },

  phone: function phone() {
    return Object(__WEBPACK_IMPORTED_MODULE_0_styled_components__["a" /* css */])(_templateObject2, __WEBPACK_IMPORTED_MODULE_0_styled_components__["a" /* css */].apply(undefined, arguments));
  }
});

/***/ }),

/***/ "./src/utils/scroll.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getScrollPos;
var cache = null;

function getScrollPos() {
  var now = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Date.now();

  if (cache && now - cache.now < 100) {
    return cache.result;
  }

  if (window.pageYOffset !== undefined) {
    cache = {
      now: now,
      result: { x: pageXOffset, y: pageYOffset }
    };
    return cache.result;
  }

  var d = document;
  var r = d.documentElement;
  var b = d.body;
  var sx = r.scrollLeft || b.scrollLeft || 0;
  var sy = r.scrollTop || b.scrollTop || 0;

  cache = {
    now: now,
    result: { x: sx, y: sy }
  };
  return cache.result;
}

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/nwb/polyfills.js");
module.exports = __webpack_require__("./src/index.js");


/***/ })

},[0]);
//# sourceMappingURL=app.js.map