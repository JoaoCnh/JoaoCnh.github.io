webpackJsonp([1],{

/***/ "./public/img/me.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "me.f26f4c8d.jpg";

/***/ }),

/***/ "./public/img/mesmall.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "mesmall.d8e44bdb.jpg";

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
    // this.startTimer();
  };

  Animation.prototype.componentWillUnmount = function componentWillUnmount() {
    // clearTimeout(this.timeout);
  };

  Animation.prototype.render = function render() {
    var page = this.state.pages[this.state.pageIndex];

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "div",
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
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
        )
      ),
      page.render(page)
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

var Container = __WEBPACK_IMPORTED_MODULE_1_styled_components__["default"].div(_templateObject, delay);

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
var _templateObject = _taggedTemplateLiteralLoose(["\n  width: ", "px;\n  height: ", "px;\n\n  div {\n    position: absolute;\n    width: ", "px;\n    height: ", "px;\n  }\n"], ["\n  width: ", "px;\n  height: ", "px;\n\n  div {\n    position: absolute;\n    width: ", "px;\n    height: ", "px;\n  }\n"]),
    _templateObject2 = _taggedTemplateLiteralLoose(["\n  0% {\n    transform: rotateY(", "deg) rotateX(", "deg);\n  }\n  100% {\n    transform: rotateY(", "deg) rotateX(", "deg);\n  }\n"], ["\n  0% {\n    transform: rotateY(", "deg) rotateX(", "deg);\n  }\n  100% {\n    transform: rotateY(", "deg) rotateX(", "deg);\n  }\n"]),
    _templateObject3 = _taggedTemplateLiteralLoose(["\n  ", ";\n  transform-style: preserve-3d;\n  will-change: transform;\n\n  div {\n    box-sizing: border-box;\n    background-color: ", ";\n    border: ", "px solid rgba(255, 255, 255, 0.4);\n  }\n"], ["\n  ", ";\n  transform-style: preserve-3d;\n  will-change: transform;\n\n  div {\n    box-sizing: border-box;\n    background-color: ", ";\n    border: ", "px solid rgba(255, 255, 255, 0.4);\n  }\n"]),
    _templateObject4 = _taggedTemplateLiteralLoose(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transform-origin: 50% 50%;\n  will-change: transform;\n  transform: ", " translateZ(", "px);\n\n  svg {\n    width: ", "px;\n    height: ", "px;\n    ", ";\n  }\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transform-origin: 50% 50%;\n  will-change: transform;\n  transform: ", " translateZ(", "px);\n\n  svg {\n    width: ", "px;\n    height: ", "px;\n    ", ";\n  }\n"]);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }




var Cube = __WEBPACK_IMPORTED_MODULE_1_styled_components__["default"].div(_templateObject, function (props) {
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

  return Object(__WEBPACK_IMPORTED_MODULE_1_styled_components__["keyframes"])(_templateObject2, 45 + offset, -37.5 + offset, 45 + offset + 360, -37.5 + offset + 360);
};

var Sides = __WEBPACK_IMPORTED_MODULE_1_styled_components__["default"].div(_templateObject3, function (_ref) {
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

var Side = __WEBPACK_IMPORTED_MODULE_1_styled_components__["default"].div(_templateObject4, function (_ref4) {
  var rotate = _ref4.rotate;
  return rotate;
}, function (_ref5) {
  var size = _ref5.size;
  return size / 2;
}, function (_ref6) {
  var size = _ref6.size;
  return size * 0.75;
}, function (_ref7) {
  var size = _ref7.size;
  return size * 0.75;
}, function (_ref8) {
  var inverse = _ref8.inverse;
  return !inverse && "fill: white;";
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
        icon = _props.icon,
        inverse = _props.inverse,
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
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          Side,
          {
            style: { boxShadow: "0px 0px " + SHADOW_SIZE + "px " + color() },
            rotate: "rotateX(90deg)",
            size: size,
            inverse: inverse
          },
          icon
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          Side,
          {
            style: { boxShadow: "0px 0px " + SHADOW_SIZE + "px " + color() },
            rotate: "rotateX(-90deg)",
            size: size,
            inverse: inverse
          },
          icon
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          Side,
          {
            style: { boxShadow: "0px 0px " + SHADOW_SIZE + "px " + color() },
            rotate: "rotateY(0deg)",
            size: size,
            inverse: inverse
          },
          icon
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          Side,
          {
            style: { boxShadow: "0px 0px " + SHADOW_SIZE + "px " + color() },
            rotate: "rotateY(-180deg)",
            size: size,
            inverse: inverse
          },
          icon
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          Side,
          {
            style: { boxShadow: "0px 0px " + SHADOW_SIZE + "px " + color() },
            rotate: "rotateY(-90deg)",
            size: size,
            inverse: inverse
          },
          icon
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          Side,
          {
            style: { boxShadow: "0px 0px " + SHADOW_SIZE + "px " + color() },
            rotate: "rotateY(90deg)",
            size: size,
            inverse: inverse
          },
          icon
        )
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

var Container = __WEBPACK_IMPORTED_MODULE_1_styled_components__["default"].div(_templateObject, RADIUS, Object(__WEBPACK_IMPORTED_MODULE_4__utils_animations__["a" /* default */])(0), __WEBPACK_IMPORTED_MODULE_5__utils_media__["a" /* default */].tablet(_templateObject2, RADIUS));

var SmallCube = Object(__WEBPACK_IMPORTED_MODULE_1_styled_components__["default"])(function (_React$Component) {
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
            icon: page.page.Icon,
            inverse: page.page.inverse,
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









var Container = __WEBPACK_IMPORTED_MODULE_1_styled_components__["default"].div(_templateObject, __WEBPACK_IMPORTED_MODULE_2__utils_media__["a" /* default */].tablet(_templateObject2));

var Title = __WEBPACK_IMPORTED_MODULE_1_styled_components__["default"].h1(_templateObject3, __WEBPACK_IMPORTED_MODULE_2__utils_media__["a" /* default */].tablet(_templateObject4), __WEBPACK_IMPORTED_MODULE_2__utils_media__["a" /* default */].phone(_templateObject5));

var SubTitle = __WEBPACK_IMPORTED_MODULE_1_styled_components__["default"].h2(_templateObject6, Object(__WEBPACK_IMPORTED_MODULE_3__utils_animations__["b" /* fadeIn */])(0.4), __WEBPACK_IMPORTED_MODULE_2__utils_media__["a" /* default */].tablet(_templateObject4), __WEBPACK_IMPORTED_MODULE_2__utils_media__["a" /* default */].phone(_templateObject7));

var Buttons = __WEBPACK_IMPORTED_MODULE_1_styled_components__["default"].div(_templateObject8, Object(__WEBPACK_IMPORTED_MODULE_3__utils_animations__["b" /* fadeIn */])(0.5), __WEBPACK_IMPORTED_MODULE_2__utils_media__["a" /* default */].tablet(_templateObject9), __WEBPACK_IMPORTED_MODULE_2__utils_media__["a" /* default */].tablet(_templateObject10), __WEBPACK_IMPORTED_MODULE_2__utils_media__["a" /* default */].phone(_templateObject11));

var Primary = __WEBPACK_IMPORTED_MODULE_1_styled_components__["default"].div(_templateObject12, Object(__WEBPACK_IMPORTED_MODULE_3__utils_animations__["b" /* fadeIn */])(0.3), function (props) {
  return props.theme.primary;
});

var Secondary = __WEBPACK_IMPORTED_MODULE_1_styled_components__["default"].div(_templateObject13, Object(__WEBPACK_IMPORTED_MODULE_3__utils_animations__["b" /* fadeIn */])(0.2));

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



/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_styled_components__["default"].div(_templateObject));

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
    _templateObject3 = _taggedTemplateLiteralLoose(["\n  font-size: 1.25rem;\n  text-align: center;\n  font-weight: 200;\n  line-height: 1.4;\n  max-width: 100rem;\n  color: rgba(255, 255, 255, 0.8);\n"], ["\n  font-size: 1.25rem;\n  text-align: center;\n  font-weight: 200;\n  line-height: 1.4;\n  max-width: 100rem;\n  color: rgba(255, 255, 255, 0.8);\n"]);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }






var Heading = __WEBPACK_IMPORTED_MODULE_1_styled_components__["default"].h2(_templateObject, __WEBPACK_IMPORTED_MODULE_2__utils_media__["a" /* default */].phone(_templateObject2), function (_ref) {
  var color = _ref.color;
  return color();
}, function (_ref2) {
  var color = _ref2.color;
  return color.clearer(0.6);
});

var SubHeading = __WEBPACK_IMPORTED_MODULE_1_styled_components__["default"].p(_templateObject3);



/***/ }),

/***/ "./src/components/common/Relative.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.es.js");
var _templateObject = _taggedTemplateLiteralLoose(["\n  position: relative;\n"], ["\n  position: relative;\n"]);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }



/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_styled_components__["default"].div(_templateObject));

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



/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_styled_components__["default"].div(_templateObject, function (props) {
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



/* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0_styled_components__["default"].div(_templateObject, function (props) {
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




var Container = __WEBPACK_IMPORTED_MODULE_1_styled_components__["default"].div(_templateObject);

var InnerContainer = __WEBPACK_IMPORTED_MODULE_1_styled_components__["default"].div(_templateObject2, function (props) {
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

/***/ "./src/components/common/langs/Android.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === undefined ? 35 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === undefined ? 35 : _ref$height,
      className = _ref.className;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "svg",
    {
      className: className,
      width: width + "px",
      height: height + "px",
      viewBox: "0 0 128 128"
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { id: "a", d: "M18.8 1h90.5v126h-90.5z" }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      fill: "#F6D2A2",
      d: "M21.1 68.7c.2 3.5 3.7 1.9 5.3.8 1.5-1.1 2-.2 2.1-2.3.1-1.4.2-2.7.2-4.1-2.3-.2-4.8.3-6.7 1.7-.9.7-2.8 3-.9 3.9",
      "clip-path": "url(#b)"
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      d: "M23 71.2c-.7 0-2-.3-2.2-2.3-.6-.4-.8-.9-.8-1.2-.1-1.2 1.2-2.6 1.9-3.1 1.6-1.2 3.7-1.8 5.9-1.8h1.3v.3c.1 1.1 0 2.2-.1 3.2 0 .3 0 .6-.1.9-.1 1.5-.4 1.7-1.1 2-.3.1-.6.2-1.1.6-.5.3-2.2 1.4-3.7 1.4zm4.8-7.8c-2.1 0-4 .6-5.5 1.7-.7.5-1.7 1.7-1.6 2.5 0 .3.2.6.6.8l.2.1v.2c.1 1.6.9 1.8 1.5 1.8 1 0 2.4-.7 3.3-1.3.6-.4 1-.5 1.3-.6.5-.2.6-.2.7-1.4 0-.3 0-.6.1-.9.1-.9.1-1.9.1-2.8-.3-.1-.5-.1-.7-.1z",
      "clip-path": "url(#b)"
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      fill: "#C6B198",
      d: "M21.1 68.7c.5-.2 1.1-.3 1.4-.8",
      "clip-path": "url(#b)"
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      d: "M21.1 69c-.1 0-.3-.1-.3-.2-.1-.2 0-.4.2-.4.1 0 .2-.1.2-.1.4-.2.8-.3 1-.6.1-.1.3-.2.5-.1.1.1.2.3.1.5-.4.5-.9.7-1.3.8l-.2.1h-.2z",
      "clip-path": "url(#b)"
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      fill: "#6AD7E5",
      d: "M29.3 26.4c-13.6-3.8-3.5-21.1 7.4-14l-7.4 14z",
      "clip-path": "url(#b)"
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      d: "M29.5 26.8l-.3-.1c-7-2-6.9-7-6.7-8.5.5-3.8 4.1-7.8 8.9-7.8 1.9 0 3.7.6 5.5 1.8l.3.2-7.7 14.4zm1.9-15.7c-4.5 0-7.8 3.7-8.3 7.2-.5 3.6 1.7 6.4 6 7.7l7.1-13.5c-1.5-.9-3.1-1.4-4.8-1.4z",
      "clip-path": "url(#b)"
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      fill: "#6AD7E5",
      d: "M89.6 11.1c10.7-7.5 20.5 9.5 8 13.8l-8-13.8z",
      "clip-path": "url(#b)"
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      d: "M97.5 25.3l-8.3-14.3.3-.2c1.9-1.3 3.8-2 5.7-2 4.6 0 7.9 3.8 8.6 7.5.3 1.5.6 6.6-6 8.8l-.3.2zm-7.4-14l7.7 13.3c3.9-1.4 5.9-4.4 5.3-8-.6-3.4-3.7-6.9-7.9-6.9-1.7-.1-3.4.4-5.1 1.6z",
      "clip-path": "url(#b)"
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      fill: "#F6D2A2",
      d: "M92 112.3c2.7 1.7 7.7 6.8 3.6 9.3-3.9 3.6-6.1-4-9.6-5 1.5-2 3.4-3.9 6-4.3",
      "clip-path": "url(#b)"
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      d: "M93.5 122.9c-1.6 0-3-1.6-4.2-3.1-1.1-1.2-2.2-2.5-3.4-2.9l-.5-.1.3-.4c1.2-1.7 3.2-3.9 6.2-4.4h.1l.1.1c1.7 1.1 5.4 4.2 5.3 7.1 0 1.1-.6 2-1.7 2.7-.7.7-1.4 1-2.2 1zm-7-6.5c1.2.5 2.2 1.8 3.2 2.9 1.2 1.5 2.4 2.8 3.7 2.8.6 0 1.2-.3 1.8-.9h.1c.9-.6 1.4-1.3 1.4-2.2 0-2.3-2.9-5.2-4.9-6.5-1.8.5-3.6 1.7-5.3 3.9zM95.6 121.9c-.1 0-.2-.1-.3-.2-.2-.4-.4-.9-.5-1.3-.3-.8-.6-1.6-1.2-2.2-.1-.1-.1-.3 0-.5.1-.1.3-.1.5 0 .7.7 1.1 1.6 1.4 2.5l.5 1.2c.1.2 0 .4-.1.5h-.3z",
      "clip-path": "url(#b)"
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      fill: "#F6D2A2",
      d: "M43.2 118.1c-3.2.5-5 3.4-7.7 4.9-2.5 1.5-3.5-.5-3.7-.9-.4-.2-.4.2-1-.4-2.3-3.7 2.4-6.4 4.9-8.2 3.5-.8 5.7 2.2 7.5 4.6",
      "clip-path": "url(#b)"
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      d: "M33.8 123.8c-1.3 0-2-1.1-2.2-1.5h-.1c-.3 0-.5-.1-.9-.5v-.1c-2.2-3.5 1.6-6.2 4.1-8l.9-.6h.2c.4-.1.7-.1 1.1-.1 3 0 4.9 2.6 6.5 4.7l.5.7-.6.1c-1.9.3-3.3 1.5-4.7 2.7-.9.8-1.8 1.5-2.8 2.1-.8.3-1.4.5-2 .5zm-2.2-2.1c.1 0 .2 0 .4.1h.1l.1.1c.2.3.7 1.2 1.7 1.2.5 0 1-.2 1.5-.5 1-.5 1.9-1.3 2.7-2 1.3-1.1 2.7-2.3 4.5-2.8-1.5-2-3.3-4.2-5.8-4.2-.3 0-.6 0-.9.1l-.8.6c-2.6 1.8-5.8 4.1-3.9 7.1.1.2.2.3.4.3zM31.8 122.4c-.2 0-.4-.2-.3-.4.1-1 .6-1.7 1.1-2.5.3-.4.5-.8.7-1.2.1-.2.3-.2.4-.2.2.1.2.3.2.4-.2.5-.5.9-.8 1.3-.5.7-.9 1.3-1 2.1 0 .4-.1.5-.3.5z",
      "clip-path": "url(#b)"
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M29.9 21.7c-1.8-.9-3.1-2.2-2-4.3 1-1.9 2.9-1.7 4.7-.8l-2.7 5.1zM94.8 19.9c1.8-.9 3.1-2.2 2-4.3-1-1.9-2.9-1.7-4.7-.8l2.7 5.1z",
      "clip-path": "url(#b)"
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      fill: "#F6D2A2",
      d: "M107.1 68.2c-.2 3.5-3.7 1.9-5.3.8-1.5-1.1-2-.2-2.1-2.3-.1-1.4-.2-2.7-.2-4.1 2.3-.2 4.8.3 6.7 1.7 1 .8 2.8 3 .9 3.9",
      "clip-path": "url(#b)"
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      d: "M105.3 70.7c-1.5 0-3.2-1.1-3.7-1.4-.5-.3-.8-.5-1.1-.6-.8-.3-1-.5-1.1-2 0-.3 0-.6-.1-.9-.1-1-.2-2.1-.1-3.2v-.3h1.3c2.2 0 4.3.6 5.9 1.8.7.5 2 1.9 1.9 3.1 0 .4-.2.9-.8 1.2-.2 2-1.5 2.3-2.2 2.3zm-5.5-7.7c0 .9 0 1.9.1 2.8 0 .3 0 .6.1.9.1 1.2.2 1.2.7 1.4.3.1.7.3 1.3.6.9.6 2.3 1.3 3.3 1.3.6 0 1.4-.2 1.5-1.8v-.2l.2-.1c.4-.2.6-.4.6-.8.1-.8-.9-2-1.6-2.5-1.5-1.1-3.5-1.7-5.5-1.7-.2.1-.4.1-.7.1z",
      "clip-path": "url(#b)"
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      fill: "#C6B198",
      d: "M107.1 68.2c-.5-.2-1.1-.3-1.4-.8",
      "clip-path": "url(#b)"
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      d: "M107.1 68.6h-.1l-.2-.1c-.5-.2-1-.3-1.3-.8-.1-.1-.1-.4.1-.5.1-.1.4-.1.5.1.2.3.6.4 1 .6.1 0 .2.1.2.1.2.1.3.3.2.4-.1.1-.3.2-.4.2z",
      "clip-path": "url(#b)"
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      fill: "#6AD7E5",
      d: "M62.8 4c13.6 0 26.3 1.9 33 15 6 14.6 3.8 30.4 4.8 45.9.8 13.3 2.5 28.6-3.6 40.9-6.5 12.9-22.7 16.2-36 15.7-10.5-.4-23.1-3.8-29.1-13.4-6.9-11.2-3.7-27.9-3.2-40.4.6-14.8-4-29.7.9-44.1 4.9-15.1 18.5-18.5 33.2-19.6",
      "clip-path": "url(#b)"
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      d: "M63.3 121.9h-2.5c-4.1-.1-10.3-.8-16.4-3.3-5.9-2.4-10.2-5.8-13-10.3-5.6-9.1-4.6-21.6-3.7-32.7.2-2.8.4-5.4.5-7.9.2-5.2-.2-10.6-.7-15.7-.8-9.4-1.6-19.1 1.5-28.5 2.4-7 6.7-12 13.2-15.2 5.1-2.5 11.4-3.9 20.4-4.6 13.4-.1 26.7 1.8 33.4 15.1 4.4 10.7 4.4 22.2 4.5 33.3 0 4.2 0 8.5.3 12.7.1 1.3.2 2.6.2 3.9.8 12.2 1.7 26-3.9 37.2-2.8 5.7-7.7 9.9-14.4 12.6-5.4 2.2-12.2 3.4-19.4 3.4zm-.5-117.6c-14.1 1.1-27.9 4.2-33 19.4-3.1 9.3-2.3 18.9-1.5 28.2.4 5.2.9 10.5.7 15.8-.1 2.5-.3 5.1-.5 7.9-.9 11-1.9 23.4 3.6 32.3 2.3 3.7 9.7 12.5 28.8 13.2h2.5c22.1 0 30.3-9.8 33.3-15.6 5.5-11 4.6-24.8 3.9-36.9-.1-1.3-.2-2.6-.2-3.9-.2-4.2-.3-8.5-.3-12.7-.1-11-.1-22.5-4.4-33.1-3-5.9-7.5-9.9-13.7-12.2-6.4-2.1-13.6-2.4-19.2-2.4z",
      "clip-path": "url(#b)"
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      fill: "#fff",
      d: "M65.2 22.2c2.4 14.2 25.6 10.4 22.3-3.9-3-12.8-23.1-9.2-22.3 3.9",
      "clip-path": "url(#b)"
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      d: "M76.2 31.5c-4.5 0-10.2-2.4-11.4-9.2-.2-3.2.8-6.1 2.9-8.3 2.3-2.5 5.8-3.9 9.4-3.9 4.2 0 9.2 2.2 10.6 8.3.8 3.4.2 6.4-1.7 8.8-2.1 2.6-5.8 4.3-9.8 4.3zm-10.7-9.3c.5 2.8 1.8 5 3.9 6.6 1.8 1.4 4.3 2.1 6.8 2.1 3.7 0 7.3-1.6 9.3-4.1 1.8-2.2 2.3-5.1 1.6-8.3-1.3-5.7-6-7.7-10-7.7-3.4 0-6.7 1.4-8.9 3.7-1.9 2-2.9 4.7-2.7 7.7z",
      "clip-path": "url(#b)"
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      fill: "#fff",
      d: "M37.5 24.5c3.2 12.3 22.9 9.2 22.2-3.2-.9-14.8-25.3-12-22.2 3.2",
      "clip-path": "url(#b)"
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      d: "M48 32.7c-4.3 0-9.3-2.1-10.9-8.1-.7-3.5 0-6.7 2-9.1 2.2-2.7 5.8-4.3 9.7-4.3 5.2 0 10.7 3.1 11.1 10.1.2 2.9-.7 5.5-2.7 7.6-2.1 2.3-5.6 3.8-9.2 3.8zm.8-20.8c-3.7 0-7.1 1.5-9.2 4-1.9 2.3-2.5 5.2-1.8 8.5 1.4 5.6 6.2 7.6 10.2 7.6 3.4 0 6.7-1.3 8.8-3.6 1.8-1.9 2.7-4.4 2.5-7.1-.2-4.3-3.1-9.4-10.5-9.4z",
      "clip-path": "url(#b)"
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      fill: "#fff",
      d: "M68 39.2c0 1.8.4 3.9.1 5.9-.5.9-1.4 1-2.2 1.3-1.1-.2-2-.9-2.5-1.9-.3-2.2.1-4.4.2-6.6l4.4 1.3z",
      "clip-path": "url(#b)"
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      d: "M65.9 46.8c-1.3-.2-2.3-1-2.8-2.1-.2-1.6-.1-3.1 0-4.6.1-.7.1-1.4.1-2.1v-.4l5.1 1.6v.2c0 .6.1 1.2.1 1.9.1 1.3.2 2.7 0 4v.1c-.4.8-1.1 1-1.8 1.3-.2-.1-.4 0-.7.1zm-2.2-2.4c.4.9 1.2 1.5 2.1 1.7.2-.1.4-.1.5-.2.6-.2 1.1-.4 1.4-.9.2-1.2.1-2.5 0-3.8 0-.6-.1-1.2-.1-1.7l-3.8-1.2c0 .6-.1 1.2-.1 1.7-.1 1.6-.2 3 0 4.4z",
      "clip-path": "url(#b)"
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M46.3 22.5c0 2-1.5 3.6-3.3 3.6-1.8 0-3.3-1.6-3.3-3.6s1.5-3.6 3.3-3.6c1.8 0 3.3 1.6 3.3 3.6",
      "clip-path": "url(#b)"
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      fill: "#fff",
      d: "M45.2 23.3c0 .5-.4.9-.8.9s-.8-.4-.8-.9.4-.9.8-.9c.5 0 .8.4.8.9",
      "clip-path": "url(#b)"
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M74.2 21.6c0 2-1.5 3.6-3.3 3.6-1.8 0-3.3-1.6-3.3-3.6s1.5-3.6 3.3-3.6c1.8 0 3.3 1.6 3.3 3.6",
      "clip-path": "url(#b)"
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      fill: "#fff",
      d: "M73.2 22.4c0 .5-.3.9-.8.9-.4 0-.8-.4-.8-.9s.3-.9.8-.9c.4 0 .8.4.8.9",
      "clip-path": "url(#b)"
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      fill: "#fff",
      d: "M58.4 39c-1.5 3.5.8 10.6 4.8 5.4-.3-2.2.1-4.4.2-6.6l-5 1.2z",
      "clip-path": "url(#b)"
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      d: "M60.5 46.6c-.7 0-1.4-.4-1.9-1.2-1.1-1.6-1.3-4.6-.5-6.5l.1-.2 5.5-1.4v.4l-.1 2.2c-.1 1.5-.2 2.9 0 4.4v.1l-.1.1c-1 1.4-2 2.1-3 2.1zm-1.8-7.3c-.6 1.7-.4 4.4.5 5.7.4.6.8.9 1.3.9.7 0 1.5-.6 2.3-1.6-.2-1.5-.1-3 .1-4.4l.1-1.7-4.3 1.1z",
      "clip-path": "url(#b)"
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      fill: "#F6D2A2",
      d: "M58.9 32.2c-2.7.2-4.9 3.5-3.5 6 1.9 3.4 6-.3 8.6 0 3 .1 5.4 3.2 7.8.6 2.7-2.9-1.2-5.7-4.1-7l-8.8.4z",
      "clip-path": "url(#b)"
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      fill: "#231F20",
      d: "M69.7 40.2c-.9 0-1.8-.4-2.7-.8-.9-.4-1.9-.8-3-.8h-.3c-.8 0-1.7.3-2.7.7-1.1.4-2.2.7-3.2.7-1.2 0-2.1-.5-2.7-1.6-.7-1.2-.6-2.6.1-3.9.8-1.5 2.2-2.4 3.7-2.6l8.9-.4h.1c2.2.9 4.7 2.6 5.2 4.6.2 1-.1 2-.9 2.9-.8.9-1.6 1.2-2.5 1.2zm-5.6-2.2c1.1 0 2.2.5 3.2.9.9.4 1.7.7 2.5.7.7 0 1.3-.3 1.9-.9.7-.7.9-1.5.8-2.3-.4-1.7-2.8-3.3-4.7-4.1l-8.7.4c-1.3.1-2.5 1-3.2 2.2-.6 1.1-.6 2.3-.1 3.3.5.9 1.1 1.3 2.1 1.3.9 0 1.9-.4 2.9-.7 1.1-.4 2-.7 3-.7 0-.2.1-.2.3-.1z",
      "clip-path": "url(#b)"
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M58.6 32.1c-.2-4.7 8.8-5.3 9.8-1.4 1.1 4-9.4 4.9-9.8 1.4",
      "clip-path": "url(#b)"
    })
  );
});

/***/ }),

/***/ "./src/components/common/langs/Bootstrap.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === undefined ? 35 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === undefined ? 35 : _ref$height,
      className = _ref.className;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "svg",
    {
      className: className,
      width: width + "px",
      height: height + "px",
      viewBox: "0 0 128 128"
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      fill: "#5B4282",
      d: "M75.701 65.603c-2.334-.768-5.694-.603-10.08-.603h-17.621v23h18.844c2.944 0 5.012-.315 6.203-.535 2.099-.376 3.854-1.104 5.264-1.982 1.409-.876 2.568-2.205 3.478-3.881.908-1.676 1.363-3.637 1.363-5.83 0-2.568-.658-4.54-1.975-6.436-1.316-1.896-3.141-2.965-5.476-3.733zM73.282 55.087c2.317-.688 4.064-1.89 5.239-3.487 1.176-1.598 1.763-3.631 1.763-6.044 0-2.286-.549-4.314-1.646-6.054s-2.662-2.413-4.699-3.056c-2.037-.641-5.53-.446-10.48-.446h-15.459v20h16.587c4.042 0 6.939-.38 8.695-.913zM126 18.625c0-9.182-7.443-16.625-16.625-16.625h-91.75c-9.182 0-16.625 7.443-16.625 16.625v91.75c0 9.182 7.443 16.625 16.625 16.625h91.75c9.182 0 16.625-7.443 16.625-16.625v-91.75zm-35.447 66.12c-1.362 2.773-3.047 4.911-5.052 6.415-2.006 1.504-4.521 2.78-7.544 3.548-3.022.769-6.728 1.292-11.113 1.292h-27.844v-69h27.42c5.264 0 9.485.609 12.665 2.002 3.181 1.395 5.671 3.497 7.474 6.395 1.801 2.898 2.702 5.907 2.702 9.071 0 2.945-.8 5.708-2.397 8.308-1.598 2.602-4.011 4.694-7.237 6.292 4.166 1.222 7.37 3.304 9.61 6.248 2.24 2.945 3.36 6.422 3.36 10.432 0 3.227-.681 6.225-2.044 8.997z"
    })
  );
});

/***/ }),

/***/ "./src/components/common/langs/Csharp.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === undefined ? 35 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === undefined ? 35 : _ref$height,
      className = _ref.className;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "svg",
    {
      className: className,
      width: width + "px",
      height: height + "px",
      viewBox: "0 0 128 128"
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M109 50h-4.8l-1.2 6h-3.8l1.2-6h-4.9l-1.2 6h-5.3v5h4.4l-.9 4h-3.5v5h2.5l-1.2 6h4.8l1.2-6h3.8l-1.2 6h4.9l1.2-6h5v-5h-4.1l.9-4h3.2v-5h-2.2l1.2-6zm-7.9 15h-3.8l.9-4h3.8l-.9 4zM116.5 32.3c-.6-1.1-1.4-2.1-2.3-2.6l-48.1-27.8c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48.5 27.8c-1.7 1-3.4 3.5-3.4 5.4v55.7c0 1.1.7 2.3 1.4 3.4l.1.1c.5.8 1.3 1.5 2 1.9l48.3 27.9c.8.5 2 .7 3.2.7 1.2 0 2.3-.3 3.1-.7l47.5-27.9c1.7-1 2.4-3.5 2.4-5.4v-55.7c0-.8.4-1.8 0-2.6l.5-.2zm-4.2 2.1c0 .3-.3.5-.3.7v55.7c0 .8-.2 1.7-.4 2l-47.6 27.8c-.1.1-.5.2-1.1.2-.6 0-1-.1-1.1-.2l-48.2-27.8s-.1-.1-.2-.1l-.6-.6c-.4-.7.2-1.1-.8-1.2v-55.7c1-.5.9-1.7 1.4-1.9l48.3-27.9c.1 0 .6-.2 1.2-.2s1 .1 1.1.2l48 27.7.4.9c.1.1-.1.3-.1.4zM63 87.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6c-4.2 7.4-12.2 12.4-21.3 12.4z" })
  );
});

/***/ }),

/***/ "./src/components/common/langs/Css3.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === undefined ? 35 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === undefined ? 35 : _ref$height,
      className = _ref.className;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "svg",
    {
      className: className,
      width: width + "px",
      height: height + "px",
      viewBox: "0 0 128 128"
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      fill: "#1572B6",
      d: "M8.76 1l10.055 112.883 45.118 12.58 45.244-12.626 10.063-112.837h-110.48zm89.591 25.862l-3.347 37.605.01.203-.014.467v-.004l-2.378 26.294-.262 2.336-28.36 7.844v.001l-.022.019-28.311-7.888-1.917-21.739h13.883l.985 11.054 15.386 4.17-.004.008v-.002l15.443-4.229 1.632-18.001h-32.282999999999994l-.277-3.043-.631-7.129-.331-3.828h34.748999999999995l1.264-14h-52.926l-.277-3.041-.63-7.131-.332-3.828h69.281l-.331 3.862z"
    })
  );
});

/***/ }),

/***/ "./src/components/common/langs/DotNet.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === undefined ? 35 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === undefined ? 35 : _ref$height,
      className = _ref.className;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "svg",
    {
      className: className,
      width: width + "px",
      height: height + "px",
      viewBox: "0 0 128 128"
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      fill: "#1384C8",
      d: "M40.335 78.188h-1.685v-9.65c0-.762.05-1.69.14-2.785h-.038c-.158.64-.303 1.104-.43 1.391l-4.902 11.044h-.821l-4.911-10.964c-.138-.306-.283-.799-.43-1.471h-.036c.052.576.081 1.509.081 2.804v9.631h-1.626v-14.371h2.225l4.409 10.021c.332.754.547 1.328.651 1.72h.069c.288-.785.517-1.375.688-1.762l4.505-9.979h2.11v14.371h.001zM45.523 78.188h-1.639v-10.263h1.639v10.263zm.283-13.942c0 .303-.106.555-.317.763-.207.208-.464.312-.764.312-.293 0-.548-.101-.757-.301-.209-.201-.313-.458-.313-.774 0-.296.104-.549.313-.754s.464-.305.757-.305c.3 0 .557.099.764.305.211.205.317.458.317.754"
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      fill: "#1384C8",
      d: "M55.764 77.713c-.786.483-1.726.722-2.812.722-1.472 0-2.655-.488-3.561-1.464-.879-.947-1.321-2.169-1.321-3.667 0-1.681.48-3.042 1.45-4.077.964-1.036 2.261-1.553 3.892-1.553.892 0 1.683.174 2.375.521v1.687c-.766-.538-1.576-.805-2.445-.805-1.045 0-1.896.365-2.555 1.093-.687.745-1.034 1.742-1.034 2.985 0 1.194.317 2.14.948 2.837.633.694 1.476 1.042 2.538 1.042.897 0 1.738-.295 2.524-.882v1.561h.001zM63.604 69.59c-.289-.223-.706-.331-1.255-.331-.668 0-1.229.298-1.683.901-.516.673-.771 1.604-.771 2.795v5.232h-1.644v-10.262h1.644v2.116h.039c.241-.749.614-1.325 1.112-1.733.466-.373.992-.561 1.572-.561.438 0 .762.047.984.14l.002 1.703zM72.758 73.075c0-1.313-.296-2.317-.89-3.006-.575-.662-1.38-.992-2.416-.992-1.021 0-1.841.334-2.453 1.003-.647.715-.971 1.725-.971 3.035 0 1.228.308 2.192.93 2.879.618.692 1.45 1.039 2.494 1.039 1.08 0 1.907-.352 2.474-1.051.555-.684.832-1.652.832-2.907m1.685-.057c0 1.635-.462 2.949-1.382 3.934-.924.989-2.167 1.483-3.73 1.483-1.54 0-2.767-.494-3.665-1.483-.881-.953-1.323-2.211-1.323-3.776 0-1.786.5-3.162 1.503-4.139.929-.906 2.17-1.363 3.726-1.363 1.53 0 2.726.477 3.587 1.422.853.95 1.284 2.258 1.284 3.922M82.589 75.442c0 .84-.313 1.536-.942 2.091-.687.601-1.63.901-2.816.901-.971 0-1.822-.203-2.545-.618v-1.766c.804.654 1.692.983 2.667.983 1.301 0 1.952-.479 1.952-1.434 0-.401-.143-.734-.431-.991-.289-.262-.851-.576-1.685-.943-.859-.376-1.472-.762-1.833-1.163-.434-.476-.652-1.093-.652-1.854 0-.852.341-1.561 1.014-2.125.675-.567 1.542-.85 2.606-.85.815 0 1.546.159 2.194.481v1.654c-.677-.488-1.451-.732-2.329-.732-.544 0-.981.136-1.307.399-.329.27-.494.614-.494 1.034 0 .455.138.808.412 1.061.244.233.761.519 1.541.852.876.367 1.509.748 1.895 1.137.5.494.753 1.121.753 1.883M92.629 73.075c0-1.313-.297-2.317-.892-3.006-.575-.662-1.381-.992-2.415-.992-1.021 0-1.841.334-2.456 1.003-.646.715-.969 1.725-.969 3.035 0 1.228.309 2.192.924 2.879.626.692 1.459 1.039 2.501 1.039 1.082 0 1.906-.352 2.474-1.051.555-.684.833-1.652.833-2.907m1.688-.057c0 1.635-.466 2.949-1.388 3.934-.92.989-2.163 1.483-3.727 1.483-1.542 0-2.768-.494-3.667-1.483-.881-.953-1.323-2.211-1.323-3.776 0-1.786.504-3.162 1.502-4.139.928-.906 2.171-1.363 3.728-1.363 1.531 0 2.725.477 3.584 1.422.855.95 1.291 2.258 1.291 3.922"
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      fill: "#1384C8",
      d: "M101.555 64.438c-.323-.179-.682-.27-1.091-.27-1.15 0-1.721.724-1.721 2.175v1.582h2.405v1.392h-2.405v8.871h-1.645v-8.871h-1.745v-1.392h1.745v-1.664c0-1.129.346-2.016 1.05-2.654.603-.555 1.34-.831 2.217-.831.508 0 .902.061 1.189.178v1.484zM108.039 78.085c-.388.222-.904.333-1.543.333-1.791 0-2.687-1.01-2.687-3.029v-6.07h-1.761v-1.394h1.761v-2.504l1.646-.533v3.037h2.583v1.394h-2.583v5.791c0 .688.112 1.18.348 1.465.237.295.625.439 1.173.439.409 0 .763-.109 1.063-.331v1.402zM19.237 118.242c0 .805-.286 1.5-.867 2.087-.577.585-1.278.88-2.102.88-.805 0-1.489-.295-2.05-.88-.562-.587-.841-1.283-.841-2.087 0-.827.279-1.525.841-2.103.561-.58 1.245-.867 2.05-.867.823 0 1.524.292 2.102.878.581.588.867 1.286.867 2.092"
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      fill: "#1384C8",
      d: "M56.018 120.606h-5.358l-19.448-30.034c-.454-.723-.847-1.508-1.179-2.365h-.16c.139.804.209 2.531.209 5.175v27.224h-4.416v-37.68h5.732l18.865 29.56c.751 1.173 1.265 2.013 1.525 2.519h.104c-.175-1.083-.266-2.932-.266-5.54v-26.539h4.39v37.68h.002zM84.332 120.606h-19.971v-37.68h19.104v3.993h-14.69v12.534h13.612v3.995h-13.613v13.164h15.558v3.994zM114.623 86.919h-10.854v33.688h-4.415v-33.688h-10.875v-3.995h26.144v3.995z"
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      fill: "#1384C8",
      d: "M82.108 46.33c.479-1.232 1.022-2.445 1.427-3.701 2.288-7.097 4.554-14.2 6.805-21.309.865-2.731 1.813-5.42 3.515-7.767 2.692-3.709 6.442-5.652 10.88-6.331 1.741-.266 3.518-.389 5.28-.406 5.267-.05 10.536-.015 15.804-.01.28 0 .56.029.957.052-.129.304-.199.525-.311.724-1.955 3.494-3.872 7.009-5.885 10.468-3.505 6.022-7.016 12.042-10.631 17.998-2.319 3.819-4.834 7.52-7.687 10.974-2.105 2.548-4.321 4.984-7.146 6.77-1.925 1.217-3.981 1.929-6.315 1.917-8.278-.045-16.556-.012-24.834-.024-2.461-.004-4.568-.941-6.356-2.603-2.563-2.381-4.093-5.412-5.345-8.608-2.284-5.835-3.563-11.951-5.031-18.014-.688-2.838-1.47-5.654-2.215-8.478-.048-.183-.142-.354-.25-.617l-.577.542c-3.228 3.207-6.071 6.741-8.615 10.498-.693 1.024-.926 2.374-1.313 3.591-1.424 4.47-2.722 8.983-4.264 13.411-1.477 4.242-4.125 7.616-8.264 9.61-2.42 1.165-5.004 1.795-7.689 1.855-3.98.088-7.962.098-11.943.134-.952.009-.996-.069-.748-.99 1.707-6.338 3.87-12.514 6.58-18.492 2.794-6.167 6.085-12.048 10.231-17.419 2.823-3.657 5.941-7.031 9.843-9.582 1.979-1.293 4.083-2.315 6.477-2.584.394-.045.793-.073 1.189-.073 8.478-.004 16.956.082 25.433-.039 4.547-.065 7.839 1.855 10.304 5.515 1.533 2.276 2.63 4.761 3.553 7.328 1.861 5.178 3.018 10.547 4.325 15.878.748 3.051 1.581 6.081 2.379 9.12.06.228.157.446.238.668l.199-.006z"
    })
  );
});

/***/ }),

/***/ "./src/components/common/langs/Express.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === undefined ? 35 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === undefined ? 35 : _ref$height,
      className = _ref.className;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "svg",
    {
      className: className,
      width: width + "px",
      height: height + "px",
      viewBox: "0 0 128 128"
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M40.53,77.82V50.74H42V55a5.57,5.57,0,0,0,.48-.6,7.28,7.28,0,0,1,6.64-4.12c3.35-.1,6.07,1.14,7.67,4.12a13.24,13.24,0,0,1,.32,12.14c-1.49,3.34-5.17,5-9.11,4.39a7.37,7.37,0,0,1-5.88-3.88V77.82ZM42,60.32c.13,1.32.18,2.26.33,3.18.58,3.62,2.72,5.77,6.08,6.16A6.91,6.91,0,0,0,56,65.27a11.77,11.77,0,0,0-.26-9.68,6.77,6.77,0,0,0-7.13-3.94,6.59,6.59,0,0,0-5.89,4.87A33.4,33.4,0,0,0,42,60.32Z" }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M88.41,64A7.92,7.92,0,0,1,80.67,71c-6.16.31-9.05-3.78-9.51-8.5A13.62,13.62,0,0,1,72.36,55a8.37,8.37,0,0,1,8.71-4.67,8,8,0,0,1,7.1,6.09,41.09,41.09,0,0,1,.69,4.5H72.67c-.3,4.28,2,7.72,5.26,8.55,4.06,1,7.53-.76,8.79-4.62C87,63.86,87.51,63.72,88.41,64ZM72.67,59.55H87.14c-.09-4.56-2.93-7.86-6.78-7.91C76,51.57,72.86,54.75,72.67,59.55Z" }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M91.39,64.1h1.42A5.69,5.69,0,0,0,96.15,69a8.73,8.73,0,0,0,7.58-.2,3.41,3.41,0,0,0,2-3.35,3.09,3.09,0,0,0-2.08-3.09c-1.56-.58-3.22-.9-4.81-1.41A35.25,35.25,0,0,1,94,59.18c-2.56-1.25-2.72-6.12.18-7.66a10.21,10.21,0,0,1,9.76-.15,5.14,5.14,0,0,1,2.6,5.24h-1.22c0-.06-.11-.11-.11-.17-.15-3.89-3.41-5.09-6.91-4.75a9.17,9.17,0,0,0-3,.91,3,3,0,0,0-1.74,3,3,3,0,0,0,2,2.82c1.54.56,3.15.92,4.73,1.36,1.27.35,2.59.58,3.82,1a4.51,4.51,0,0,1,3.1,4.07,4.81,4.81,0,0,1-2.59,5c-3.34,1.89-8.84,1.39-11.29-1A6.67,6.67,0,0,1,91.39,64.1Z" }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M125.21,56.61h-1.33c0-.18-.07-.34-.09-.49a4.35,4.35,0,0,0-3.54-4.18,8.73,8.73,0,0,0-5.61.27,3.41,3.41,0,0,0-2.47,3.25,3.14,3.14,0,0,0,2.4,3.16c2,.62,4.05,1,6.08,1.56a17,17,0,0,1,1.94.59,5,5,0,0,1,.27,9.31,11.13,11.13,0,0,1-9,.09,6.24,6.24,0,0,1-3.76-6.06l.56,0h.74a7.29,7.29,0,0,0,11.1,4.64,3.57,3.57,0,0,0,1.92-3.34,3.09,3.09,0,0,0-2.11-3.07c-1.56-.58-3.22-.89-4.81-1.4a35.43,35.43,0,0,1-4.87-1.75c-2.5-1.23-2.7-6.06.15-7.6a10.07,10.07,0,0,1,9.92-.11A5.23,5.23,0,0,1,125.21,56.61Z" }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M38.1,70.51a2.29,2.29,0,0,1-2.84-1.08c-1.63-2.44-3.43-4.77-5.16-7.15l-.75-1c-2.06,2.76-4.12,5.41-6,8.16a2.2,2.2,0,0,1-2.7,1.06l7.73-10.37-7.19-9.37a2.39,2.39,0,0,1,2.85,1c1.67,2.44,3.52,4.77,5.36,7.24,1.85-2.45,3.68-4.79,5.39-7.21a2.15,2.15,0,0,1,2.68-1l-2.79,3.7c-1.25,1.65-2.48,3.31-3.78,4.92a1,1,0,0,0,0,1.49C33.29,64.07,35.66,67.25,38.1,70.51Z" }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M70.92,50.66v1.4a7.25,7.25,0,0,0-7.72,7.49q0,4.94,0,9.88c0,.35,0,.7,0,1.12H61.77V50.74h1.4V54.8C64.9,51.84,67.57,50.74,70.92,50.66Z" }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M2.13,60c.21-1,.34-2.09.63-3.11,1.73-6.15,8.78-8.71,13.63-4.9,2.84,2.23,3.55,5.39,3.41,8.95h-16C3.54,67.3,8.13,71.14,14,69.18a6.09,6.09,0,0,0,3.87-4.31c.31-1,.81-1.17,1.76-.88a8.12,8.12,0,0,1-3.88,5.93,9.4,9.4,0,0,1-10.95-1.4,9.85,9.85,0,0,1-2.46-5.78c0-.34-.13-.68-.2-1Q2.13,60.85,2.13,60Zm1.69-.43H18.29c-.09-4.61-3-7.88-6.88-7.91C7.09,51.6,4,54.8,3.81,59.55Z" })
  );
});

/***/ }),

/***/ "./src/components/common/langs/Golang.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === undefined ? 35 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === undefined ? 35 : _ref$height,
      className = _ref.className;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "svg",
    {
      className: className,
      width: width + "px",
      height: height + "px",
      viewBox: "0 0 128 128"
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { id: "a", d: "M18.8 1h90.5v126h-90.5z" }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      fill: "#F6D2A2",
      d: "M21.1 68.7c.2 3.5 3.7 1.9 5.3.8 1.5-1.1 2-.2 2.1-2.3.1-1.4.2-2.7.2-4.1-2.3-.2-4.8.3-6.7 1.7-.9.7-2.8 3-.9 3.9",
      "clip-path": "url(#b)"
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      d: "M23 71.2c-.7 0-2-.3-2.2-2.3-.6-.4-.8-.9-.8-1.2-.1-1.2 1.2-2.6 1.9-3.1 1.6-1.2 3.7-1.8 5.9-1.8h1.3v.3c.1 1.1 0 2.2-.1 3.2 0 .3 0 .6-.1.9-.1 1.5-.4 1.7-1.1 2-.3.1-.6.2-1.1.6-.5.3-2.2 1.4-3.7 1.4zm4.8-7.8c-2.1 0-4 .6-5.5 1.7-.7.5-1.7 1.7-1.6 2.5 0 .3.2.6.6.8l.2.1v.2c.1 1.6.9 1.8 1.5 1.8 1 0 2.4-.7 3.3-1.3.6-.4 1-.5 1.3-.6.5-.2.6-.2.7-1.4 0-.3 0-.6.1-.9.1-.9.1-1.9.1-2.8-.3-.1-.5-.1-.7-.1z",
      "clip-path": "url(#b)"
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      fill: "#C6B198",
      d: "M21.1 68.7c.5-.2 1.1-.3 1.4-.8",
      "clip-path": "url(#b)"
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      d: "M21.1 69c-.1 0-.3-.1-.3-.2-.1-.2 0-.4.2-.4.1 0 .2-.1.2-.1.4-.2.8-.3 1-.6.1-.1.3-.2.5-.1.1.1.2.3.1.5-.4.5-.9.7-1.3.8l-.2.1h-.2z",
      "clip-path": "url(#b)"
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      fill: "#6AD7E5",
      d: "M29.3 26.4c-13.6-3.8-3.5-21.1 7.4-14l-7.4 14z",
      "clip-path": "url(#b)"
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      d: "M29.5 26.8l-.3-.1c-7-2-6.9-7-6.7-8.5.5-3.8 4.1-7.8 8.9-7.8 1.9 0 3.7.6 5.5 1.8l.3.2-7.7 14.4zm1.9-15.7c-4.5 0-7.8 3.7-8.3 7.2-.5 3.6 1.7 6.4 6 7.7l7.1-13.5c-1.5-.9-3.1-1.4-4.8-1.4z",
      "clip-path": "url(#b)"
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      fill: "#6AD7E5",
      d: "M89.6 11.1c10.7-7.5 20.5 9.5 8 13.8l-8-13.8z",
      "clip-path": "url(#b)"
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      d: "M97.5 25.3l-8.3-14.3.3-.2c1.9-1.3 3.8-2 5.7-2 4.6 0 7.9 3.8 8.6 7.5.3 1.5.6 6.6-6 8.8l-.3.2zm-7.4-14l7.7 13.3c3.9-1.4 5.9-4.4 5.3-8-.6-3.4-3.7-6.9-7.9-6.9-1.7-.1-3.4.4-5.1 1.6z",
      "clip-path": "url(#b)"
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      fill: "#F6D2A2",
      d: "M92 112.3c2.7 1.7 7.7 6.8 3.6 9.3-3.9 3.6-6.1-4-9.6-5 1.5-2 3.4-3.9 6-4.3",
      "clip-path": "url(#b)"
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      d: "M93.5 122.9c-1.6 0-3-1.6-4.2-3.1-1.1-1.2-2.2-2.5-3.4-2.9l-.5-.1.3-.4c1.2-1.7 3.2-3.9 6.2-4.4h.1l.1.1c1.7 1.1 5.4 4.2 5.3 7.1 0 1.1-.6 2-1.7 2.7-.7.7-1.4 1-2.2 1zm-7-6.5c1.2.5 2.2 1.8 3.2 2.9 1.2 1.5 2.4 2.8 3.7 2.8.6 0 1.2-.3 1.8-.9h.1c.9-.6 1.4-1.3 1.4-2.2 0-2.3-2.9-5.2-4.9-6.5-1.8.5-3.6 1.7-5.3 3.9zM95.6 121.9c-.1 0-.2-.1-.3-.2-.2-.4-.4-.9-.5-1.3-.3-.8-.6-1.6-1.2-2.2-.1-.1-.1-.3 0-.5.1-.1.3-.1.5 0 .7.7 1.1 1.6 1.4 2.5l.5 1.2c.1.2 0 .4-.1.5h-.3z",
      "clip-path": "url(#b)"
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      fill: "#F6D2A2",
      d: "M43.2 118.1c-3.2.5-5 3.4-7.7 4.9-2.5 1.5-3.5-.5-3.7-.9-.4-.2-.4.2-1-.4-2.3-3.7 2.4-6.4 4.9-8.2 3.5-.8 5.7 2.2 7.5 4.6",
      "clip-path": "url(#b)"
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      d: "M33.8 123.8c-1.3 0-2-1.1-2.2-1.5h-.1c-.3 0-.5-.1-.9-.5v-.1c-2.2-3.5 1.6-6.2 4.1-8l.9-.6h.2c.4-.1.7-.1 1.1-.1 3 0 4.9 2.6 6.5 4.7l.5.7-.6.1c-1.9.3-3.3 1.5-4.7 2.7-.9.8-1.8 1.5-2.8 2.1-.8.3-1.4.5-2 .5zm-2.2-2.1c.1 0 .2 0 .4.1h.1l.1.1c.2.3.7 1.2 1.7 1.2.5 0 1-.2 1.5-.5 1-.5 1.9-1.3 2.7-2 1.3-1.1 2.7-2.3 4.5-2.8-1.5-2-3.3-4.2-5.8-4.2-.3 0-.6 0-.9.1l-.8.6c-2.6 1.8-5.8 4.1-3.9 7.1.1.2.2.3.4.3zM31.8 122.4c-.2 0-.4-.2-.3-.4.1-1 .6-1.7 1.1-2.5.3-.4.5-.8.7-1.2.1-.2.3-.2.4-.2.2.1.2.3.2.4-.2.5-.5.9-.8 1.3-.5.7-.9 1.3-1 2.1 0 .4-.1.5-.3.5z",
      "clip-path": "url(#b)"
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M29.9 21.7c-1.8-.9-3.1-2.2-2-4.3 1-1.9 2.9-1.7 4.7-.8l-2.7 5.1zM94.8 19.9c1.8-.9 3.1-2.2 2-4.3-1-1.9-2.9-1.7-4.7-.8l2.7 5.1z",
      "clip-path": "url(#b)"
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      fill: "#F6D2A2",
      d: "M107.1 68.2c-.2 3.5-3.7 1.9-5.3.8-1.5-1.1-2-.2-2.1-2.3-.1-1.4-.2-2.7-.2-4.1 2.3-.2 4.8.3 6.7 1.7 1 .8 2.8 3 .9 3.9",
      "clip-path": "url(#b)"
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      d: "M105.3 70.7c-1.5 0-3.2-1.1-3.7-1.4-.5-.3-.8-.5-1.1-.6-.8-.3-1-.5-1.1-2 0-.3 0-.6-.1-.9-.1-1-.2-2.1-.1-3.2v-.3h1.3c2.2 0 4.3.6 5.9 1.8.7.5 2 1.9 1.9 3.1 0 .4-.2.9-.8 1.2-.2 2-1.5 2.3-2.2 2.3zm-5.5-7.7c0 .9 0 1.9.1 2.8 0 .3 0 .6.1.9.1 1.2.2 1.2.7 1.4.3.1.7.3 1.3.6.9.6 2.3 1.3 3.3 1.3.6 0 1.4-.2 1.5-1.8v-.2l.2-.1c.4-.2.6-.4.6-.8.1-.8-.9-2-1.6-2.5-1.5-1.1-3.5-1.7-5.5-1.7-.2.1-.4.1-.7.1z",
      "clip-path": "url(#b)"
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      fill: "#C6B198",
      d: "M107.1 68.2c-.5-.2-1.1-.3-1.4-.8",
      "clip-path": "url(#b)"
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      d: "M107.1 68.6h-.1l-.2-.1c-.5-.2-1-.3-1.3-.8-.1-.1-.1-.4.1-.5.1-.1.4-.1.5.1.2.3.6.4 1 .6.1 0 .2.1.2.1.2.1.3.3.2.4-.1.1-.3.2-.4.2z",
      "clip-path": "url(#b)"
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      fill: "#6AD7E5",
      d: "M62.8 4c13.6 0 26.3 1.9 33 15 6 14.6 3.8 30.4 4.8 45.9.8 13.3 2.5 28.6-3.6 40.9-6.5 12.9-22.7 16.2-36 15.7-10.5-.4-23.1-3.8-29.1-13.4-6.9-11.2-3.7-27.9-3.2-40.4.6-14.8-4-29.7.9-44.1 4.9-15.1 18.5-18.5 33.2-19.6",
      "clip-path": "url(#b)"
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      d: "M63.3 121.9h-2.5c-4.1-.1-10.3-.8-16.4-3.3-5.9-2.4-10.2-5.8-13-10.3-5.6-9.1-4.6-21.6-3.7-32.7.2-2.8.4-5.4.5-7.9.2-5.2-.2-10.6-.7-15.7-.8-9.4-1.6-19.1 1.5-28.5 2.4-7 6.7-12 13.2-15.2 5.1-2.5 11.4-3.9 20.4-4.6 13.4-.1 26.7 1.8 33.4 15.1 4.4 10.7 4.4 22.2 4.5 33.3 0 4.2 0 8.5.3 12.7.1 1.3.2 2.6.2 3.9.8 12.2 1.7 26-3.9 37.2-2.8 5.7-7.7 9.9-14.4 12.6-5.4 2.2-12.2 3.4-19.4 3.4zm-.5-117.6c-14.1 1.1-27.9 4.2-33 19.4-3.1 9.3-2.3 18.9-1.5 28.2.4 5.2.9 10.5.7 15.8-.1 2.5-.3 5.1-.5 7.9-.9 11-1.9 23.4 3.6 32.3 2.3 3.7 9.7 12.5 28.8 13.2h2.5c22.1 0 30.3-9.8 33.3-15.6 5.5-11 4.6-24.8 3.9-36.9-.1-1.3-.2-2.6-.2-3.9-.2-4.2-.3-8.5-.3-12.7-.1-11-.1-22.5-4.4-33.1-3-5.9-7.5-9.9-13.7-12.2-6.4-2.1-13.6-2.4-19.2-2.4z",
      "clip-path": "url(#b)"
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      fill: "#fff",
      d: "M65.2 22.2c2.4 14.2 25.6 10.4 22.3-3.9-3-12.8-23.1-9.2-22.3 3.9",
      "clip-path": "url(#b)"
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      d: "M76.2 31.5c-4.5 0-10.2-2.4-11.4-9.2-.2-3.2.8-6.1 2.9-8.3 2.3-2.5 5.8-3.9 9.4-3.9 4.2 0 9.2 2.2 10.6 8.3.8 3.4.2 6.4-1.7 8.8-2.1 2.6-5.8 4.3-9.8 4.3zm-10.7-9.3c.5 2.8 1.8 5 3.9 6.6 1.8 1.4 4.3 2.1 6.8 2.1 3.7 0 7.3-1.6 9.3-4.1 1.8-2.2 2.3-5.1 1.6-8.3-1.3-5.7-6-7.7-10-7.7-3.4 0-6.7 1.4-8.9 3.7-1.9 2-2.9 4.7-2.7 7.7z",
      "clip-path": "url(#b)"
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      fill: "#fff",
      d: "M37.5 24.5c3.2 12.3 22.9 9.2 22.2-3.2-.9-14.8-25.3-12-22.2 3.2",
      "clip-path": "url(#b)"
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      d: "M48 32.7c-4.3 0-9.3-2.1-10.9-8.1-.7-3.5 0-6.7 2-9.1 2.2-2.7 5.8-4.3 9.7-4.3 5.2 0 10.7 3.1 11.1 10.1.2 2.9-.7 5.5-2.7 7.6-2.1 2.3-5.6 3.8-9.2 3.8zm.8-20.8c-3.7 0-7.1 1.5-9.2 4-1.9 2.3-2.5 5.2-1.8 8.5 1.4 5.6 6.2 7.6 10.2 7.6 3.4 0 6.7-1.3 8.8-3.6 1.8-1.9 2.7-4.4 2.5-7.1-.2-4.3-3.1-9.4-10.5-9.4z",
      "clip-path": "url(#b)"
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      fill: "#fff",
      d: "M68 39.2c0 1.8.4 3.9.1 5.9-.5.9-1.4 1-2.2 1.3-1.1-.2-2-.9-2.5-1.9-.3-2.2.1-4.4.2-6.6l4.4 1.3z",
      "clip-path": "url(#b)"
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      d: "M65.9 46.8c-1.3-.2-2.3-1-2.8-2.1-.2-1.6-.1-3.1 0-4.6.1-.7.1-1.4.1-2.1v-.4l5.1 1.6v.2c0 .6.1 1.2.1 1.9.1 1.3.2 2.7 0 4v.1c-.4.8-1.1 1-1.8 1.3-.2-.1-.4 0-.7.1zm-2.2-2.4c.4.9 1.2 1.5 2.1 1.7.2-.1.4-.1.5-.2.6-.2 1.1-.4 1.4-.9.2-1.2.1-2.5 0-3.8 0-.6-.1-1.2-.1-1.7l-3.8-1.2c0 .6-.1 1.2-.1 1.7-.1 1.6-.2 3 0 4.4z",
      "clip-path": "url(#b)"
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M46.3 22.5c0 2-1.5 3.6-3.3 3.6-1.8 0-3.3-1.6-3.3-3.6s1.5-3.6 3.3-3.6c1.8 0 3.3 1.6 3.3 3.6",
      "clip-path": "url(#b)"
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      fill: "#fff",
      d: "M45.2 23.3c0 .5-.4.9-.8.9s-.8-.4-.8-.9.4-.9.8-.9c.5 0 .8.4.8.9",
      "clip-path": "url(#b)"
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M74.2 21.6c0 2-1.5 3.6-3.3 3.6-1.8 0-3.3-1.6-3.3-3.6s1.5-3.6 3.3-3.6c1.8 0 3.3 1.6 3.3 3.6",
      "clip-path": "url(#b)"
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      fill: "#fff",
      d: "M73.2 22.4c0 .5-.3.9-.8.9-.4 0-.8-.4-.8-.9s.3-.9.8-.9c.4 0 .8.4.8.9",
      "clip-path": "url(#b)"
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      fill: "#fff",
      d: "M58.4 39c-1.5 3.5.8 10.6 4.8 5.4-.3-2.2.1-4.4.2-6.6l-5 1.2z",
      "clip-path": "url(#b)"
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      d: "M60.5 46.6c-.7 0-1.4-.4-1.9-1.2-1.1-1.6-1.3-4.6-.5-6.5l.1-.2 5.5-1.4v.4l-.1 2.2c-.1 1.5-.2 2.9 0 4.4v.1l-.1.1c-1 1.4-2 2.1-3 2.1zm-1.8-7.3c-.6 1.7-.4 4.4.5 5.7.4.6.8.9 1.3.9.7 0 1.5-.6 2.3-1.6-.2-1.5-.1-3 .1-4.4l.1-1.7-4.3 1.1z",
      "clip-path": "url(#b)"
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      fill: "#F6D2A2",
      d: "M58.9 32.2c-2.7.2-4.9 3.5-3.5 6 1.9 3.4 6-.3 8.6 0 3 .1 5.4 3.2 7.8.6 2.7-2.9-1.2-5.7-4.1-7l-8.8.4z",
      "clip-path": "url(#b)"
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      fill: "#231F20",
      d: "M69.7 40.2c-.9 0-1.8-.4-2.7-.8-.9-.4-1.9-.8-3-.8h-.3c-.8 0-1.7.3-2.7.7-1.1.4-2.2.7-3.2.7-1.2 0-2.1-.5-2.7-1.6-.7-1.2-.6-2.6.1-3.9.8-1.5 2.2-2.4 3.7-2.6l8.9-.4h.1c2.2.9 4.7 2.6 5.2 4.6.2 1-.1 2-.9 2.9-.8.9-1.6 1.2-2.5 1.2zm-5.6-2.2c1.1 0 2.2.5 3.2.9.9.4 1.7.7 2.5.7.7 0 1.3-.3 1.9-.9.7-.7.9-1.5.8-2.3-.4-1.7-2.8-3.3-4.7-4.1l-8.7.4c-1.3.1-2.5 1-3.2 2.2-.6 1.1-.6 2.3-.1 3.3.5.9 1.1 1.3 2.1 1.3.9 0 1.9-.4 2.9-.7 1.1-.4 2-.7 3-.7 0-.2.1-.2.3-.1z",
      "clip-path": "url(#b)"
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M58.6 32.1c-.2-4.7 8.8-5.3 9.8-1.4 1.1 4-9.4 4.9-9.8 1.4",
      "clip-path": "url(#b)"
    })
  );
});

/***/ }),

/***/ "./src/components/common/langs/Gulp.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === undefined ? 35 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === undefined ? 35 : _ref$height,
      className = _ref.className;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "svg",
    {
      className: className,
      width: width + "px",
      height: height + "px",
      viewBox: "0 0 128 128"
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      fill: "#EB4A4B",
      d: "M36.965 35.459c.877 9.232 1.747 18.412 2.637 27.798 1.451-2.495 2.501-4.888 4.085-6.848 1.475-1.826 3.334-3.511 5.357-4.678 2.641-1.524 6.104-.089 6.96 2.614.23.725-.319 1.697-.511 2.556-.646-.341-1.479-.529-1.901-1.051-1.793-2.217-2.873-2.479-4.856-.563-3.699 3.576-5.779 8.056-6.573 13.091-.153.974.456 2.067.713 3.105 1.011-.348 2.185-.476 3.002-1.084 2.656-1.977 4.302-4.666 5.21-7.88.197-.696 1.265-1.145 1.933-1.708.32.658 1.05 1.433.897 1.954-1.407 4.84-2.934 9.649-4.536 14.429-.162.484-1.051.725-1.604 1.079-.223-.636-.692-1.302-.617-1.901.168-1.358.605-2.683.91-3.927l-7.24 3.333c.405 4.622.825 9.807 1.323 14.985.382 3.954 1.029 4.978 4.923 5.728 4.544.875 9.173 1.434 13.792 1.774 6.825.503 13.59-.119 20.23-1.904 2.472-.664 3.458-2.29 3.635-4.717.162-2.235.524-4.456.775-6.685.493-4.391.972-8.783 1.476-13.358-1.667 1.056-2.978 2.238-4.511 2.739-1.116.365-2.524-.169-3.803-.303.245-1.174.23-2.497.796-3.487.922-1.618 2.224-3.021 3.364-4.515l-.491-.591c-.817.483-1.832.8-2.413 1.485-1.182 1.394-2.339 2.886-3.13 4.52-1.324 2.735-2.333 5.622-3.518 8.426-.515 1.216-.959 3.076-2.684 2.366-1.845-.761-.547-2.386-.114-3.542.689-1.844 1.599-3.606 2.215-4.962-1.746.208-3.516.459-5.294.614-.752.064-1.646-.348-2.261-.07-2.045.924-3.341.553-3.766-1.711-.947.615-1.749 1.448-2.694 1.672-1.147.273-2.703.452-3.543-.121-.673-.459-.918-2.184-.688-3.196.457-2.012 1.311-3.946 2.122-5.859.502-1.185 1.007-3.077 2.701-2.253 1.674.813.154 2.185-.232 3.286-.599 1.702-1.209 3.401-1.813 5.101l.96.58c.914-.794 2.053-1.441 2.693-2.415 1.048-1.592 1.681-3.452 2.673-5.086.411-.677 1.296-1.065 1.967-1.584.136.862.462 1.748.354 2.58-.107.841-.698 1.61-.981 2.442-.425 1.246-.768 2.52-1.2 3.969 2.043.078 2.918-.782 3.495-2.299 1.826-4.793 3.672-9.581 5.679-14.3.343-.808 1.509-1.264 2.296-1.884.091.974.525 2.078.216 2.899-1.645 4.349-3.492 8.62-5.228 12.935-.293.727-.387 1.534-.572 2.304 3.059-1.375 5.612-2.895 6.544-6.146.228-.79 1.162-1.377 1.771-2.058l1.416 1.5c.43-.362.824-.774 1.291-1.075 1.47-.947 3.053-1.782 4.603-.315 1.604 1.517.39 2.995-.448 4.307-.912 1.431-2.029 2.73-3.057 4.086 2.312-1.49 5.469-2.158 5.889-5.378 1.024-7.865 1.924-15.746 2.837-23.625.271-2.332.416-4.679.627-7.109-18.21 4.409-36.029 4.436-54.088-.069zM44.781 96.828c.877 2.317 2.209 4.593 2.558 7.011.737 5.147.924 10.372 1.446 15.554.076.755.565 1.792 1.175 2.124 8.98 4.88 18.047 5.726 27.209.389 1.367-.796 1.62-1.847 1.797-3.325.857-7.181-1.051-14.798 3.54-21.56-12.856 3.189-25.403 3.288-37.725-.193zM75.772 36.748c4.362-.421 8.671-1.445 12.985-2.291.813-.159 1.535-.778 2.299-1.185-1.007-.885-1.878-1.311-2.788-1.418-4.53-.535-9.076-.947-13.603-1.508-.684-.085-1.905-.929-1.854-1.083 1.321-3.98 1.256-8.485 4.254-11.839 3.789-4.24 7.617-8.443 11.416-12.648-2.826-3.04-2.864-3.044-5.425-.383-1.448 1.504-2.771 3.15-4.342 4.512-5.813 5.038-9.896 11.005-10.692 18.872-.183 1.805-1.174 2.457-3.069 2.485-6.256.091-12.519.263-18.761.674-3.093.203-6.148.997-9.221 1.523l-.028 1.149c1.923.593 3.809 1.372 5.773 1.749 10.944 2.098 21.991 2.458 33.056 1.391zm-3.496-2.748c-2.477 2-4.524 2-6.501 0h6.501z"
    })
  );
});

/***/ }),

/***/ "./src/components/common/langs/Html5.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === undefined ? 35 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === undefined ? 35 : _ref$height,
      className = _ref.className;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "svg",
    {
      className: className,
      width: width + "px",
      height: height + "px",
      viewBox: "0 0 128 128"
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      fill: "#E44D26",
      d: "M9.032 2l10.005 112.093 44.896 12.401 45.02-12.387 10.015-112.107h-109.936zm89.126 26.539l-.627 7.172-.276 3.289h-52.665000000000006l1.257 14h50.156000000000006l-.336 3.471-3.233 36.119-.238 2.27-28.196 7.749v.002l-.034.018-28.177-7.423-1.913-21.206h13.815000000000001l.979 10.919 15.287 4.081h.043v-.546l15.355-3.875 1.604-17.579h-47.698l-3.383-38.117-.329-3.883h68.939l-.33 3.539z"
    })
  );
});

/***/ }),

/***/ "./src/components/common/langs/Java.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === undefined ? 35 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === undefined ? 35 : _ref$height,
      className = _ref.className;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "svg",
    {
      className: className,
      width: width + "px",
      height: height + "px",
      viewBox: "0 0 128 128"
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      fill: "#0074BD",
      d: "M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zM44.629 84.455s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      fill: "#EA2D2E",
      d: "M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z"
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      fill: "#0074BD",
      d: "M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zM90.609 93.041c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.359-.327.468-.617z"
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      fill: "#EA2D2E",
      d: "M76.491 1.587s12.968 12.976-12.303 32.923c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815 8.548-12.834 32.229-19.059 26.998-39.667z"
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      fill: "#0074BD",
      d: "M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z"
    })
  );
});

/***/ }),

/***/ "./src/components/common/langs/Javascript.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === undefined ? 35 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === undefined ? 35 : _ref$height,
      className = _ref.className;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "svg",
    {
      className: className,
      width: width + "px",
      height: height + "px",
      viewBox: "0 0 128 128"
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      fill: "#F0DB4F",
      d: "M2 1v125h125v-125h-125zm66.119 106.513c-1.845 3.749-5.367 6.212-9.448 7.401-6.271 1.44-12.269.619-16.731-2.059-2.986-1.832-5.318-4.652-6.901-7.901l9.52-5.83c.083.035.333.487.667 1.071 1.214 2.034 2.261 3.474 4.319 4.485 2.022.69 6.461 1.131 8.175-2.427 1.047-1.81.714-7.628.714-14.065-.001-10.115.046-20.188.046-30.188h11.709c0 11 .06 21.418 0 32.152.025 6.58.596 12.446-2.07 17.361zm48.574-3.308c-4.07 13.922-26.762 14.374-35.83 5.176-1.916-2.165-3.117-3.296-4.26-5.795 4.819-2.772 4.819-2.772 9.508-5.485 2.547 3.915 4.902 6.068 9.139 6.949 5.748.702 11.531-1.273 10.234-7.378-1.333-4.986-11.77-6.199-18.873-11.531-7.211-4.843-8.901-16.611-2.975-23.335 1.975-2.487 5.343-4.343 8.877-5.235l3.688-.477c7.081-.143 11.507 1.727 14.756 5.355.904.916 1.642 1.904 3.022 4.045-3.772 2.404-3.76 2.381-9.163 5.879-1.154-2.486-3.069-4.046-5.093-4.724-3.142-.952-7.104.083-7.926 3.403-.285 1.023-.226 1.975.227 3.665 1.273 2.903 5.545 4.165 9.377 5.926 11.031 4.474 14.756 9.271 15.672 14.981.882 4.916-.213 8.105-.38 8.581z"
    })
  );
});

/***/ }),

/***/ "./src/components/common/langs/Lang.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === undefined ? 35 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === undefined ? 35 : _ref$height,
      className = _ref.className;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "svg",
    {
      className: className,
      width: width + "px",
      height: height + "px",
      viewBox: "0 0 128 128"
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      "class": "cls-2",
      d: "M105.72,54.9,73.14,39.42l-1.83-.9-1.12,2.28L64,53.41V68.3l9.15-18.08,21.5,9.57L71.56,70.16l-.87.47,0,1.56v6.18l0,3.14L73,80.38l32.78-15.69a2,2,0,0,0,.92-2V56.91A2,2,0,0,0,105.72,54.9Z"
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      "class": "cls-1",
      d: "M56,69.39l-21.79-9.6L57.51,49.42l1.76-.7,0-1.33V37.76L55.87,39.2,21.94,54.89a2.26,2.26,0,0,0-1.28,2v5.77a2.22,2.22,0,0,0,1.24,2L55.34,80.18l2,.9,1.21-2.26L64,68.3V53.41Z"
    })
  );
});

/***/ }),

/***/ "./src/components/common/langs/Node.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === undefined ? 35 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === undefined ? 35 : _ref$height,
      className = _ref.className;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "svg",
    {
      className: className,
      width: width + "px",
      height: height + "px",
      viewBox: "0 0 128 128"
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      fill: "#83CD29",
      d: "M112.678 30.334l-44.143-25.605c-2.781-1.584-6.424-1.584-9.227 0l-44.488 25.605c-2.869 1.651-4.82 4.754-4.82 8.073v51.142c0 3.319 1.992 6.423 4.862 8.083l11.729 6.688c5.627 2.772 7.186 2.772 9.746 2.772 8.334 0 12.662-5.039 12.662-13.828v-50.49c.001-.713.446-1.774-.255-1.774h-5.622c-.712 0-2.122 1.061-2.122 1.773v50.49c0 3.896-3.616 7.773-10.202 4.48l-12.122-7.013c-.422-.23-.676-.693-.676-1.181v-51.142c0-.482.463-.966.891-1.213l44.378-25.561c.415-.235 1.002-.235 1.415 0l43.963 25.555c.421.253.354.722.354 1.219v51.142c0 .488.092.963-.323 1.198l-44.133 25.576c-.378.227-.87.227-1.285 0l-11.317-6.749c-.341-.198-.752-.269-1.08-.086-3.145 1.783-3.729 2.02-6.679 3.043-.727.253-1.799.692.408 1.929l14.798 8.754c1.416.82 3.027 1.246 4.647 1.246 1.642 0 3.249-.426 4.666-1.246l43.976-25.582c2.871-1.672 4.322-4.764 4.322-8.083v-51.142c-.001-3.319-1.452-6.414-4.323-8.073zM77.727 81.445c-11.727 0-14.309-3.235-15.17-9.066-.102-.628-.634-1.379-1.274-1.379h-5.73c-.709 0-1.28.86-1.28 1.566 0 7.466 4.06 16.512 23.454 16.512 14.038 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.104 0 12.46 1.954 13.841 8.091.119.577.646.991 1.241.991h5.754c.354 0 .691-.143.939-.396.241-.272.367-.613.336-.979-.893-10.569-7.913-15.494-22.112-15.494-12.632 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.956-3.978 7.067-13.308 7.067z"
    })
  );
});

/***/ }),

/***/ "./src/components/common/langs/PgSql.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === undefined ? 35 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === undefined ? 35 : _ref$height,
      className = _ref.className;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "svg",
    {
      className: className,
      width: width + "px",
      height: height + "px",
      viewBox: "0 0 128 128"
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      fill: "#336791",
      d: "M123.258 76.784c-.45-2.918-2.901-4.829-5.752-4.958-1.032-.047-2.08.061-3.109.192-1.243.158-2.471.438-3.711.623-.857.128-1.726.187-2.582.275l-.021-.111c1.598-3.018 3.263-6.003 4.775-9.064 1.159-2.348 2.151-4.781 3.176-7.194 1.696-3.998 3.051-8.12 4.173-12.309 1.075-4.011 1.995-8.066 2.284-12.227.116-1.662.196-3.331.187-4.995-.008-1.327-.151-2.656-.284-3.979-.15-1.516-.608-2.953-1.242-4.336-.836-1.822-2.132-3.317-3.496-4.737-1.092-1.137-2.293-2.173-3.484-3.208-1.698-1.477-3.607-2.656-5.59-3.703-2.253-1.19-4.621-2.121-7.09-2.75-1.493-.381-3.02-.664-4.532-.966-.544-.11-1.089-.337-1.633-.337h-10.241c-.37 0-.737.191-1.11.233-2.452.273-4.875.735-7.228 1.464-.88.273-1.684.101-2.52.024-.641-.059-1.271-.231-1.912-.263-2.442-.122-4.887-.301-7.328-.275-2.339.024-4.654.409-6.918 1.052-1.895.538-3.749 1.195-5.447 2.191-.727.426-1.303.346-2.055.129-2.527-.729-5.072-1.414-7.639-1.989-1.6-.358-3.245-.536-4.879-.707-1.566-.163-3.144-.261-4.718-.294-1.538-.033-3.087-.032-4.618.104-2.439.217-4.832.713-7.158 1.513-2.583.888-4.951 2.175-7.086 3.865-2.167 1.715-3.905 3.809-5.303 6.2-1.473 2.523-2.483 5.224-3.111 8.061-.34 1.537-.555 3.117-.788 4.678-.073.486.732.972-.268 1.456v6.794c1 .452.208.903.266 1.356.139 1.089.262 2.187.446 3.268.291 1.711.636 3.417.988 5.117.491 2.375 1.002 4.748 1.546 7.111.396 1.72.847 3.43 1.319 5.131.721 2.598 1.431 5.201 2.246 7.77.757 2.387 1.624 4.74 2.484 7.093 1.191 3.255 2.617 6.405 4.327 9.424 1.479 2.614 3.169 5.062 5.436 7.076 1.494 1.327 3.157 2.347 5.093 2.857 1.521.4 3.067.448 4.624.129 1.805-.37 3.403-1.147 4.824-2.311.163-.134.342-.236.535.01.735.931 1.719 1.552 2.748 2.089 2.777 1.448 5.803 1.882 8.877 2.059.744.043 1.496-.064 2.246-.085 1.461-.04 2.881-.325 4.278-.729.732-.212 1.447-.481 2.192-.732.039.793.089 1.557.112 2.321l.104 4.166c.019.634.044 1.27.103 1.901.151 1.627.299 3.255.493 4.877.135 1.118.275 2.245.538 3.336.529 2.203 1.246 4.348 2.158 6.428.895 2.041 2.182 3.764 3.9 5.185 2.22 1.836 4.822 2.619 7.632 2.764 1.162.061 2.357.004 3.501-.204 1.813-.329 3.622-.743 5.387-1.275 3.591-1.084 6.695-2.956 9.014-5.981 1.32-1.724 2.404-3.589 3.1-5.648.574-1.701 1.115-3.419 1.545-5.16.34-1.372.508-2.787.715-4.188.137-.927.219-1.863.305-2.797.14-1.517.283-3.033.384-4.553.07-1.058.067-2.121.109-3.181.013-.323.065-.644.095-.966.028-.298.178-.401.482-.396 1.071.016 2.144.044 3.212-.004 1.197-.054 2.405-.105 3.583-.303 1.677-.281 3.346-.636 4.99-1.067 1.943-.508 3.725-1.418 5.44-2.455 1.998-1.207 3.819-2.623 5.297-4.447 1.285-1.591 1.894-3.43 1.584-5.438zm-3.412.982c-.066.915-.485 1.699-1.093 2.369-2.869 3.163-6.468 5.082-10.585 6.027-1.564.358-3.178.544-4.779.692-1.363.126-2.746.147-4.114.097-1.006-.038-2.004-.268-3.032-.416-.103.94-.201 1.919-.32 2.896l-.479 3.745c-.145 1.187-.258 2.378-.407 3.564-.146 1.151-.328 2.298-.481 3.449-.143 1.072-.248 2.149-.407 3.219-.245 1.64-.479 3.284-.799 4.911-.384 1.945-.973 3.829-1.934 5.583-1.172 2.141-2.834 3.772-4.949 4.98-2.18 1.246-4.563 1.894-6.979 2.436-1.71.384-3.472.447-5.204.291-3.004-.272-5.568-1.557-7.506-3.886-1.85-2.223-3.102-4.771-3.55-7.655-.214-1.371-.368-2.754-.491-4.136-.136-1.537-.229-3.079-.299-4.62-.089-1.957-.154-3.914-.197-5.871-.053-2.406-.07-4.812-.104-7.218l-.006-.092c-1.224.734-2.427 1.538-3.703 2.2-1.494.776-3.117 1.226-4.798 1.353-1.318.1-2.653.191-3.965.086-2.151-.173-4.3-.51-6.226-1.569-.781-.43-1.596-.953-2.134-1.64-1.29-1.646-.672-3.726 1.273-4.727 1.344-.693 2.811-.982 4.268-1.319 1.266-.293 2.526-.626 3.761-1.029 1.222-.4 1.993-1.391 2.754-2.363l1.206-1.551c-.503-.053-.977-.107-1.451-.151-1.439-.136-2.812-.532-4.125-1.114-1.124-.497-1.141-.551-1.965.343-1.376 1.494-2.714 3.023-4.062 4.542-.992 1.117-1.978 2.241-2.965 3.361-.978 1.108-1.894 2.279-2.947 3.31-1.564 1.531-3.449 2.452-5.698 2.348-1.443-.066-2.764-.572-3.952-1.399-2.452-1.708-4.104-4.097-5.608-6.606-1.927-3.215-3.406-6.64-4.672-10.159-.876-2.432-1.756-4.866-2.521-7.333-.831-2.681-1.56-5.396-2.277-8.11-.542-2.048-1.023-4.113-1.482-6.182-.521-2.353-1.022-4.71-1.464-7.079-.298-1.599-.471-3.221-.712-4.831-.325-2.17-.385-4.36-.267-6.539.105-1.963.387-3.921.667-5.871.388-2.698 1.277-5.244 2.556-7.648.783-1.473 1.755-2.812 2.879-4.056 1.845-2.042 4.078-3.518 6.562-4.626 1.736-.774 3.57-1.24 5.439-1.604 2.774-.54 5.573-.519 8.373-.461 1.224.025 2.443.248 3.666.369 2.633.262 5.214.816 7.762 1.5 1.857.498 3.676 1.143 5.518 1.703.185.056.456.051.607-.048 2.496-1.629 5.224-2.704 8.125-3.319 1.101-.233 2.237-.335 3.363-.407 1.369-.087 2.749-.167 4.115-.088 1.642.094 3.276.336 4.908.56.792.108 1.565.383 2.359.458.38.036.783-.242 1.185-.335 2.049-.473 4.089-1 6.156-1.374 1.539-.278 3.111-.409 4.676-.499 1.745-.1 3.503-.173 5.247-.089 2.205.106 4.394.42 6.555.923 2.677.623 5.245 1.528 7.686 2.784 1.824.938 3.558 2.026 5.119 3.364 1.023.878 2.07 1.745 2.994 2.723 1.14 1.206 2.303 2.413 3.018 3.958.538 1.165.922 2.371 1.028 3.647.132 1.586.292 3.178.277 4.766-.014 1.519-.221 3.037-.368 4.552-.334 3.454-1.085 6.833-1.997 10.167-.754 2.754-1.635 5.478-2.589 8.17-.879 2.481-1.893 4.917-2.918 7.343-.757 1.794-1.572 3.569-2.458 5.303-1.677 3.286-3.421 6.538-5.438 9.633-.348.535-.678 1.083-1.018 1.629.88.594 1.877.803 2.881.911.955.104 1.929.166 2.883.095 1.527-.113 3.049-.331 4.567-.544 1.504-.21 2.978-.638 4.522-.525 1.542.112 2.645 1.284 2.54 2.729zM97.833 74.413c-.655-.846-1.323-1.682-1.964-2.538-1.006-1.344-1.729-2.845-2.455-4.353-.688-1.429-1.532-2.782-2.257-4.195-1.265-2.465-2.553-4.922-3.718-7.435-1.465-3.157-2.62-6.426-2.984-9.923-.154-1.48-.193-2.958.106-4.424.479-2.341 1.702-4.172 3.758-5.428 1.907-1.165 4.032-1.541 6.209-1.659 1.351-.073 2.708-.013 4.11-.013l-.047-.237c-.872-1.823-1.687-3.677-2.641-5.457-1.346-2.512-3.068-4.777-4.986-6.877-1.421-1.555-2.96-2.998-4.646-4.273-1.658-1.255-3.405-2.376-5.269-3.293-2.223-1.093-4.538-1.938-6.967-2.477-2.334-.518-4.683-.835-7.077-.861-2.042-.022-4.071.07-6.06.531-3.002.695-5.748 1.931-8.137 3.933-1.334 1.118-2.498 2.373-3.517 3.77-1.196 1.643-2.161 3.417-2.986 5.277-1.132 2.552-1.909 5.208-2.44 7.938-.266 1.361-.474 2.734-.686 4.106-.074.48-.08.971-.123 1.521.369-.192.635-.34.907-.472l.885-.397c2.993-1.369 6.094-2.25 9.427-2.149 1.416.043 2.771.323 4.03.943 2.415 1.191 3.828 3.216 4.442 5.779.424 1.769.714 3.573.996 5.372.221 1.405.447 2.825.473 4.242.037 2.071-.068 4.146-.181 6.216-.096 1.764-.464 3.5-1.08 5.146-1.12 2.993-2.368 5.937-3.534 8.913-.385.983-.681 2.001-1.045 3.082.562 0 1.018-.004 1.474.002.178.003.36.008.532.049 1.34.316 2.502.923 3.455 1.954 1.271 1.372 1.938 2.973 1.972 4.826.019 1.027-.089 2.057-.084 3.084.021 4.786.057 9.572.097 14.357.007.782.046 1.565.102 2.346.117 1.635.235 3.271.395 4.902.112 1.157.268 2.312.451 3.461.259 1.628 1 3.077 1.841 4.462.724 1.191 1.665 2.203 2.905 2.901 2.107 1.186 4.376 1.285 6.663.848 1.545-.295 3.062-.769 4.562-1.258 1.479-.481 2.815-1.269 3.937-2.354 1.051-1.019 1.797-2.261 2.3-3.632.976-2.659 1.28-5.459 1.684-8.237.151-1.04.282-2.083.42-3.125.157-1.186.316-2.371.468-3.556.112-.883.214-1.768.322-2.651.154-1.268.317-2.535.464-3.804.113-.981.209-1.966.309-2.949.129-1.256.268-2.512.379-3.77.086-.955.051-1.927.22-2.864.311-1.718 1.123-3.18 2.646-4.125.637-.395 1.356-.655 2.063-.989l-.12-.186zM40.236 67.361c-.761-1.802-1.218-3.68-1.354-5.622-.128-1.825.089-3.643.276-5.46.182-1.76.333-3.528.386-5.296.088-2.906-.108-5.808-.247-8.712-.084-1.729.117-3.479.271-5.212.139-1.561.312-3.126.607-4.664.495-2.581 1.152-5.125 2.086-7.591.887-2.338 1.906-4.615 3.345-6.665.986-1.406 2.105-2.72 3.18-4.094l-.319-.113c-3.498-1.111-7.053-1.979-10.709-2.358-1.729-.179-3.464-.284-5.198-.387-.532-.032-1.072.04-1.606.091-1.322.126-2.66.176-3.961.424-2.214.421-4.338 1.129-6.305 2.282-1.766 1.035-3.249 2.373-4.491 3.978-1.372 1.772-2.295 3.776-2.958 5.913-.783 2.521-1.156 5.115-1.257 7.733-.088 2.295-.132 4.603.264 6.889.295 1.702.492 3.422.817 5.117.443 2.311.918 4.617 1.467 6.904.785 3.274 1.569 6.553 2.499 9.787.89 3.099 1.894 6.17 2.982 9.204.89 2.476 1.919 4.906 3.003 7.304.706 1.562 1.561 3.065 2.457 4.528.953 1.553 2.037 3.027 3.508 4.154 1.856 1.423 3.293 1.644 5.179.083.808-.669 1.491-1.495 2.194-2.282 1.117-1.25 2.195-2.534 3.307-3.788 1.416-1.598 2.85-3.179 4.273-4.769.301-.336.59-.682.883-1.022l-.484-.425c-1.769-1.699-3.139-3.669-4.095-5.931zM93.924 19.792c1.156 1.356 2.275 2.752 3.309 4.204 2 2.809 3.598 5.842 4.775 9.087.521 1.43.937 2.874.751 4.439-.129 1.096-.118 2.208-.215 3.31-.081.917-.226 1.829-.345 2.743-.178 1.378-.436 2.752-.513 4.136-.073 1.317.003 2.648.086 3.968.084 1.341.265 2.676.388 4.015.139 1.518.326 3.036.369 4.557.035 1.249-.076 2.506-.185 3.753-.13 1.502-.511 2.956-1.079 4.351-.399.982-.876 1.934-1.327 2.917l.181.192.275.213.277-.496c2.339-3.688 4.42-7.518 6.222-11.493 1.159-2.56 2.245-5.156 3.287-7.766 1.624-4.064 2.909-8.242 3.903-12.503.446-1.913.787-3.855 1.09-5.797.236-1.518.433-3.054.477-4.586.047-1.625-.043-3.263-.193-4.884-.112-1.224-.414-2.456-1.181-3.451-1.233-1.602-2.564-3.134-4.201-4.346-1.378-1.021-2.751-2.068-4.23-2.927-2.345-1.36-4.883-2.266-7.535-2.883-2.588-.603-5.21-.863-7.849-.918-1.556-.033-3.119.134-4.672.28-1.407.132-2.805.357-4.222.543 1.52.855 3.019 1.615 4.433 2.511 2.973 1.883 5.637 4.149 7.924 6.831zM55.299 72.514c.961-3.073 2.27-6.007 3.538-8.959 1.028-2.394 1.59-4.916 1.777-7.506.093-1.277.067-2.57.004-3.851-.071-1.423-.185-2.85-.392-4.259-.266-1.801-.569-3.603-.995-5.371-.462-1.913-1.627-3.245-3.623-3.736-1.216-.299-2.424-.287-3.653-.093-3.002.473-5.75 1.579-8.31 3.199-.515.326-.798.589-.709 1.328.188 1.565.229 3.155.222 4.735-.01 2.236-.105 4.472-.19 6.707-.028.728-.133 1.452-.211 2.177-.12 1.11-.351 2.219-.344 3.327.007 1.142.124 2.311.401 3.417.88 3.507 2.744 6.377 5.799 8.402 1.879 1.245 3.958 1.873 6.24 1.992.155-.524.293-1.019.446-1.509zm-3.586-30.087c-.402-.844-.172-1.543.76-1.867.227-.08.461-.165.697-.188.324-.032.654-.008.982-.008 1.182.006 2.319.171 3.295.923.626.482.794 1.122.389 1.779-.575.932-1.452 1.4-2.529 1.49-1.697.141-2.888-.65-3.594-2.129zM98.753 42.119c.136-1.124.245-2.251.384-3.375.056-.452-.182-.574-.561-.585-1.192-.033-2.384-.075-3.576-.097-1.344-.024-2.652.192-3.896.703-1.38.568-2.431 1.478-2.86 2.98-.32 1.12-.406 2.239-.293 3.41.172 1.785.568 3.517 1.193 5.176.834 2.221 1.707 4.441 2.75 6.569 1.413 2.881 3.012 5.67 4.513 8.507.401.757.738 1.547 1.156 2.431.875-1.853 1.302-3.708 1.351-5.622.041-1.61-.088-3.227-.182-4.838-.059-.986-.198-1.966-.294-2.95-.134-1.371-.337-2.741-.368-4.115-.031-1.397.068-2.802.188-4.197.113-1.338.334-2.665.495-3.997zm-2.689-1.082c-.443 1.223-1.39 1.913-2.618 2.116-1.145.188-2.148-.235-2.894-1.148-.531-.65-.328-1.42.468-1.859.914-.506 1.919-.634 3.104-.711.322.059.807.108 1.268.24.669.189.916.692.672 1.362zM60.642 78.697c-.655-.535-1.521-.566-2.144.021-.773.73-1.453 1.565-2.133 2.388-.785.951-1.521 1.94-2.534 2.677-1.474 1.071-3.192 1.515-4.919 1.935-1.373.334-2.752.644-4.129.965l-.017.178c.409.189.805.425 1.231.56 2.1.665 4.236.996 6.455.808 1.602-.136 3.128-.485 4.574-1.171 1.99-.943 3.521-2.437 4.823-4.175.218-.29.317-.719.343-1.093.089-1.321-.582-2.303-1.55-3.093zM112.393 79.223c-1.69.181-3.382.373-5.077.47-.818.047-1.648-.109-2.474-.176-1.385-.112-2.737-.42-3.908-1.16-.678-.427-1.241-.475-1.961-.233-1.028.346-1.867.872-2.115 1.986-.169.753-.23 1.533-.298 2.304-.013.136.157.386.287.42.793.209 1.59.456 2.401.529.996.09 2.01.061 3.013.011 1.083-.054 2.173-.124 3.24-.304 2.515-.422 4.948-1.11 7.109-2.536.779-.515 1.551-1.041 2.325-1.562l-.064-.11c-.826.123-1.648.273-2.478.361z"
    })
  );
});

/***/ }),

/***/ "./src/components/common/langs/Php.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === undefined ? 35 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === undefined ? 35 : _ref$height,
      className = _ref.className;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "svg",
    {
      className: className,
      width: width + "px",
      height: height + "px",
      viewBox: "0 0 128 128"
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      fill: "#6181B6",
      d: "M64 33.039c-33.74 0-61.094 13.862-61.094 30.961s27.354 30.961 61.094 30.961 61.094-13.862 61.094-30.961-27.354-30.961-61.094-30.961zm-15.897 36.993c-1.458 1.364-3.077 1.927-4.86 2.507-1.783.581-4.052.461-6.811.461h-6.253l-1.733 10h-7.301l6.515-34h14.04c4.224 0 7.305 1.215 9.242 3.432 1.937 2.217 2.519 5.364 1.747 9.337-.319 1.637-.856 3.159-1.614 4.515-.759 1.357-1.75 2.624-2.972 3.748zm21.311 2.968l2.881-14.42c.328-1.688.208-2.942-.361-3.555-.57-.614-1.782-1.025-3.635-1.025h-5.79l-3.731 19h-7.244l6.515-33h7.244l-1.732 9h6.453c4.061 0 6.861.815 8.402 2.231s2.003 3.356 1.387 6.528l-3.031 15.241h-7.358zm40.259-11.178c-.318 1.637-.856 3.133-1.613 4.488-.758 1.357-1.748 2.598-2.971 3.722-1.458 1.364-3.078 1.927-4.86 2.507-1.782.581-4.053.461-6.812.461h-6.253l-1.732 10h-7.301l6.514-34h14.041c4.224 0 7.305 1.215 9.241 3.432 1.935 2.217 2.518 5.418 1.746 9.39zM95.919 54h-5.001l-2.727 14h4.442c2.942 0 5.136-.29 6.576-1.4 1.442-1.108 2.413-2.828 2.918-5.421.484-2.491.264-4.434-.66-5.458-.925-1.024-2.774-1.721-5.548-1.721zM38.934 54h-5.002l-2.727 14h4.441c2.943 0 5.136-.29 6.577-1.4 1.441-1.108 2.413-2.828 2.917-5.421.484-2.491.264-4.434-.66-5.458s-2.772-1.721-5.546-1.721z"
    })
  );
});

/***/ }),

/***/ "./src/components/common/langs/Rails.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === undefined ? 35 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === undefined ? 35 : _ref$height,
      className = _ref.className;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "svg",
    {
      className: className,
      width: width + "px",
      height: height + "px",
      viewBox: "0 0 128 128"
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      fill: "#A62C46",
      d: "M109.682 14.737c-12.206-6.023-24.708-6.636-37.508-2.111-11.779 4.164-21.175 11.615-28.16 21.763-11.819 17.172-20.404 35.909-25.215 56.263-2.464 10.417-4.06 21.466-3.631 32.224.035.873.165 1.124.251 3.124h60.366c-.173-2-.287-1.416-.437-1.797-3.175-8.106-5.689-16.666-7.428-25.198-2.498-12.251-3.806-24.729-1.226-37.093 3.611-17.313 13.48-29.805 30.117-36.283 9.424-3.667 18.369-2.624 26.214 4.262.072.063.22.025.412.056l2.565-3.883c-4.94-4.703-10.368-8.389-16.32-11.327zM3.336 94.394c-.46 3.923-.89 7.596-1.34 11.451l11.132 1.336 2.039-11.893c-4.055-.307-7.906-.598-11.831-.894zM25.186 60.208l-10.471-4.097-3.384 9.607 10.671 3.42c1.08-3.031 2.096-5.882 3.184-8.93zM74.605 113.867c3.575.266 7.157.449 11.103.679-1.433-2.979-2.706-5.673-4.039-8.335-.146-.289-.639-.568-.974-.573-3.033-.044-6.068-.025-9.291-.025.726 2.628 1.357 5.053 2.096 7.443.111.361.707.782 1.105.811zM42.933 31.103l-7.955-5.268c-2.132 2.383-4.188 4.68-6.359 7.105l8.178 5.496 6.136-7.333zM68.267 84.472c-.013.321.276.832.558.959 2.865 1.288 5.76 2.515 8.912 3.873-.131-2.492-.219-4.575-.368-6.654-.027-.374-.203-.912-.48-1.066-2.631-1.456-5.299-2.847-8.216-4.395-.159 2.665-.321 4.972-.406 7.283zM65.91 12.3l-5.446-6.181-7.499 3.898c1.876 2.286 3.647 4.443 5.455 6.644l7.49-4.361zM69.325 61.476c-.163.374.052 1.167.373 1.456 2.175 1.962 4.424 3.84 6.926 5.981.573-2.4 1.113-4.539 1.571-6.693.081-.383-.032-1.016-.298-1.23-1.946-1.569-3.955-3.063-6.037-4.651-.915 1.815-1.802 3.443-2.535 5.137zM81.775 9.052c2.78.075 5.563.042 8.499.042-.293-2.044-.433-3.593-.782-5.092-.104-.446-.775-1.04-1.228-1.078-2.787-.226-5.585-.313-8.651-.459.409 2.063.721 3.881 1.162 5.668.093.379.647.909 1 .919zM85.16 44.727c.142-.266.178-.749.029-.981-1.366-2.137-2.785-4.241-4.254-6.455l-4.76 4.372 6.582 7.294c.884-1.539 1.675-2.868 2.403-4.23zM90.295 30.2l2.843 5.281c4.449-2.438 4.875-3.32 3.3-6.834l-6.143 1.553zM111.582 13.927c1.851 1.142 3.806 2.115 5.792 3.185l1.33-2.07c-2.422-1.771-4.76-3.484-7.413-5.426-.104 1.104-.259 1.875-.219 2.637.032.581.129 1.44.51 1.674zM109 30.646c2 .217 5 .424 7 .643v-2.718c-2-.438-5-.872-7-1.323v3.398z"
    })
  );
});

/***/ }),

/***/ "./src/components/common/langs/React.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === undefined ? 35 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === undefined ? 35 : _ref$height,
      className = _ref.className;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "svg",
    {
      className: className,
      width: width + "px",
      height: height + "px",
      viewBox: "0 0 128 128"
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3-12.5 4.8-19.3 11.4-19.3 18.8s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zm-14.8-30.5c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zm-11.2 59.3c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zm-25.6 27.1c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zm25.6-27.1c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zm-54.5-16.2c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zm-24.7 29c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5-13.8-4-22.1-10-22.1-15.6zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zm60.8-20.3c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z" })
  );
});

/***/ }),

/***/ "./src/components/common/langs/Ruby.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === undefined ? 35 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === undefined ? 35 : _ref$height,
      className = _ref.className;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "svg",
    {
      className: className,
      width: width + "px",
      height: height + "px",
      viewBox: "0 0 128 128"
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      fill: "#D91404",
      d: "M35.971 111.33c27.466 3.75 54.444 7.433 81.958 11.188-9.374-15.606-18.507-30.813-27.713-46.144l-54.245 34.956zM125.681 24.947c-2.421 3.636-4.847 7.269-7.265 10.907-8.304 12.493-16.607 24.986-24.903 37.485-.462.696-1.061 1.248-.41 2.321 8.016 13.237 15.969 26.513 23.942 39.777 1.258 2.095 2.53 4.182 4.157 6.192 1.612-32.193 3.223-64.387 4.834-96.58l-.355-.102zM16.252 66.22c.375.355 1.311.562 1.747.347 7.689-3.779 15.427-7.474 22.948-11.564 2.453-1.333 4.339-3.723 6.452-5.661 6.997-6.417 13.983-12.847 20.966-19.278.427-.395.933-.777 1.188-1.275 2.508-4.902 4.973-9.829 7.525-14.898-3.043-1.144-5.928-2.263-8.849-3.281-.396-.138-1.02.136-1.449.375-6.761 3.777-13.649 7.353-20.195 11.472-3.275 2.061-5.943 5.098-8.843 7.743-4.674 4.266-9.342 8.542-13.948 12.882-1.222 1.152-2.336 2.468-3.288 3.854-3.15 4.587-6.206 9.24-9.402 14.025 1.786 1.847 3.41 3.613 5.148 5.259zM44.354 59.949c-3.825 16.159-7.627 32.227-11.556 48.823 18.423-11.871 36.421-23.468 54.3-34.987-14.228-4.605-28.41-9.196-42.744-13.836zM120.985 25.103c-15.566 2.601-30.76 5.139-46.15 7.71 5.242 12.751 10.379 25.246 15.662 38.096 10.221-15.359 20.24-30.41 30.488-45.806zM44.996 56.644c14.017 4.55 27.755 9.01 41.892 13.6-5.25-12.79-10.32-25.133-15.495-37.737-8.815 8.059-17.498 15.999-26.397 24.137zM16.831 75.643c-4.971 11.883-9.773 23.362-14.662 35.048 9.396-.278 18.504-.547 27.925-.825-4.423-11.412-8.759-22.6-13.263-34.223zM30.424 101.739l.346-.076c3.353-13.941 6.754-27.786 10.177-42.272-7.636 3.969-14.92 7.754-22.403 11.644 3.819 9.926 7.891 20.397 11.88 30.704zM115.351 22.842c-4.459-1.181-8.918-2.366-13.379-3.539-6.412-1.686-12.829-3.351-19.237-5.052-.801-.213-1.38-.352-1.851.613-2.265 4.64-4.6 9.245-6.901 13.868-.071.143-.056.328-.111.687 13.886-2.104 27.679-4.195 41.47-6.285l.009-.292zM89.482 12.288l36.343 10.054c-2.084-5.939-4.017-11.446-6.005-17.11l-30.285 6.715-.053.341zM33.505 114.007c-4.501-.519-9.122-.042-13.687.037-3.75.063-7.5.206-11.25.323-.386.012-.771.09-1.156.506 31.003 2.866 62.005 5.732 93.007 8.6l.063-.414c-9.938-1.357-19.877-2.714-29.815-4.07-12.384-1.691-24.747-3.551-37.162-4.982zM2.782 99.994c3.995-9.27 7.973-18.546 11.984-27.809.401-.929.37-1.56-.415-2.308-1.678-1.597-3.237-3.318-5.071-5.226-2.479 12.24-4.897 24.177-7.317 36.113l.271.127c.185-.297.411-.578.548-.897zM81.522 9.841c6.737-1.738 13.572-3.097 20.367-4.613.44-.099.87-.244 1.303-.368l-.067-.332c-9.571 1.287-19.141 2.575-29.194 3.928 2.741 1.197 4.853 2.091 7.591 1.385z"
    })
  );
});

/***/ }),

/***/ "./src/components/common/langs/Sass.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === undefined ? 35 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === undefined ? 35 : _ref$height,
      className = _ref.className;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "svg",
    {
      className: className,
      width: width + "px",
      height: height + "px",
      viewBox: "0 0 128 128"
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      fill: "#CB6699",
      d: "M1.219 56.156c0 .703.207 1.167.323 1.618.756 2.933 2.381 5.45 4.309 7.746 2.746 3.272 6.109 5.906 9.554 8.383 2.988 2.148 6.037 4.248 9.037 6.38.515.366 1.002.787 1.561 1.236-.481.26-.881.489-1.297.7-3.959 2.008-7.768 4.259-11.279 6.986-2.116 1.644-4.162 3.391-5.607 5.674-2.325 3.672-3.148 7.584-1.415 11.761.506 1.22 1.278 2.274 2.367 3.053.353.252.749.502 1.162.6 1.058.249 2.136.412 3.207.609l3.033-.002c3.354-.299 6.407-1.448 9.166-3.352 4.312-2.976 7.217-6.966 8.466-12.087.908-3.722.945-7.448-.125-11.153-.099-.344-.224-.681-.354-1.014-.13-.333-.283-.657-.463-1.072l6.876-3.954.103.088c-.125.409-.258.817-.371 1.23-.817 2.984-1.36 6.02-1.165 9.117.208 3.3 1.129 6.389 3.061 9.146 1.562 2.23 5.284 2.313 6.944.075.589-.795 1.16-1.626 1.589-2.513 1.121-2.315 2.159-4.671 3.23-7.011l.187-.428c-.077 1.108-.167 2.081-.208 3.055-.064 1.521.025 3.033.545 4.48.445 1.238 1.202 2.163 2.62 2.326.97.111 1.743-.333 2.456-.896 1.114-.879 2.019-1.965 2.691-3.199 1.901-3.491 3.853-6.961 5.576-10.54 1.864-3.871 3.494-7.855 5.225-11.792l.286-.698c.409 1.607.694 3.181 1.219 4.671.61 1.729 1.365 3.417 2.187 5.058.389.775.344 1.278-.195 1.928-2.256 2.72-4.473 5.473-6.692 8.223-.491.607-.98 1.225-1.389 1.888-.247.403-.411.894-.48 1.364-.133.898.422 1.764 1.383 1.971.878.189 1.813.259 2.708.193 3.097-.228 5.909-1.315 8.395-3.157 3.221-2.386 4.255-5.642 3.475-9.501-.211-1.047-.584-2.065-.947-3.074-.163-.455-.174-.774.123-1.198 2.575-3.677 4.775-7.578 6.821-11.569.081-.157.164-.314.306-.482.663 3.45 1.661 6.775 3.449 9.792-.912.879-1.815 1.676-2.632 2.554-1.799 1.934-3.359 4.034-4.173 6.595-.35 1.104-.619 2.226-.463 3.405.242 1.831 1.742 3.021 3.543 2.604 3.854-.892 7.181-2.708 9.612-5.925 1.636-2.166 1.785-4.582 1.1-7.113-.188-.688-.411-1.365-.651-2.154.951-.295 1.878-.649 2.837-.868 4.979-1.136 9.904-.938 14.702.86 2.801 1.05 5.064 2.807 6.406 5.571 1.639 3.379.733 6.585-2.452 8.721-.297.199-.637.356-.883.605-.151.153-.242.459-.205.67.021.123.346.277.533.275 1.047-.008 1.896-.557 2.711-1.121 2.042-1.413 3.532-3.314 3.853-5.817l.063-.188-.077-1.63c-.031-.094.023-.187.016-.258-.434-3.645-2.381-6.472-5.213-8.688-3.28-2.565-7.153-3.621-11.249-3.788-3.338-.136-6.619.36-9.765 1.503-.897.325-1.786.71-2.688 1.073-.121-.219-.251-.429-.358-.646-.926-1.896-2.048-3.708-2.296-5.882-.176-1.544-.392-3.086-.025-4.613.353-1.469.813-2.913 1.246-4.362.223-.746.066-1.164-.646-1.5-.248-.117-.518-.219-.786-.258-1.75-.254-3.476-.109-5.171.384-.6.175-1.036.511-1.169 1.175-.076.381-.231.746-.339 1.122-.443 1.563-.757 3.156-1.473 4.645-1.794 3.735-3.842 7.329-5.938 10.897-.227.385-.466.763-.752 1.23-.736-1.54-1.521-2.922-1.759-4.542-.269-1.832-.481-3.661-.025-5.479.339-1.356.782-2.687 1.19-4.025.193-.636.104-.97-.472-1.305-.291-.169-.62-.319-.948-.368-1.815-.269-3.603-.128-5.354.438-.543.176-.828.527-.994 1.087-.488 1.652-.904 3.344-1.589 4.915-2.774 6.36-5.628 12.687-8.479 19.013-.595 1.321-1.292 2.596-1.963 3.882-.17.326-.418.613-.63.919-.17-.201-.236-.339-.235-.477.005-.813-.092-1.65.063-2.436.469-2.378 1.009-4.743 1.578-7.099.47-1.946 1.017-3.874 1.538-5.807.175-.647.178-1.252-.287-1.796-.781-.911-2.413-1.111-3.381-.409l-.428.242.083-.69c.204-1.479.245-2.953-.161-4.41-.506-1.816-1.802-2.861-3.686-2.803-.878.027-1.8.177-2.613.497-3.419 1.34-6.048 3.713-8.286 6.568-.203.259-.471.495-.757.654-2.893 1.604-5.795 3.188-8.696 4.778l-3.229 1.769c-.866-.826-1.653-1.683-2.546-2.41-2.727-2.224-5.498-4.393-8.244-6.592-2.434-1.949-4.792-3.979-6.596-6.56-1.342-1.92-2.207-4.021-2.29-6.395-.105-3.025.753-5.789 2.293-8.362 1.97-3.292 4.657-5.934 7.611-8.327 3.125-2.53 6.505-4.678 10.008-6.639 4.901-2.743 9.942-5.171 15.347-6.774 5.542-1.644 11.165-2.585 16.965-1.929 2.28.258 4.494.78 6.527 1.895 1.557.853 2.834 1.97 3.428 3.716.586 1.718.568 3.459.162 5.204-.825 3.534-2.76 6.447-5.195 9.05-3.994 4.267-8.866 7.172-14.351 9.091-3.165 1.107-6.421 1.802-9.765 2.083-2.729.229-5.401-.013-7.985-.962-1.711-.629-3.201-1.591-4.399-2.987-.214-.25-.488-.521-.887-.287-.391.23-.46.602-.329.979.219.626.421 1.278.762 1.838.857 1.405 2.107 2.424 3.483 3.298 2.643 1.681 5.597 2.246 8.66 2.377 4.648.201 9.183-.493 13.654-1.74 6.383-1.78 11.933-4.924 16.384-9.884 3.706-4.13 6.353-8.791 6.92-14.419.277-2.747-.018-5.438-1.304-7.944-1.395-2.715-3.613-4.734-6.265-6.125-3.862-2.025-8.03-3.204-12.332-3.204h-4.31c-5.21 0-10.247 1.493-15.143 3.274-3.706 1.349-7.34 2.941-10.868 4.703-7.683 3.839-14.838 8.468-20.715 14.833-2.928 3.171-5.407 6.67-6.833 10.79-.417 1.206-.813 2.499-1.111 3.746m27.839 36.013c-.333 4.459-2.354 8.074-5.657 11.002-1.858 1.646-3.989 2.818-6.471 3.23-.9.149-1.821.185-2.694-.188-1.245-.532-1.524-1.637-1.548-2.814-.037-1.876.62-3.572 1.521-5.186 1.176-2.104 2.9-3.708 4.741-5.206 2.9-2.361 6.046-4.359 9.268-6.245l.243-.1c.498 1.84.735 3.657.597 5.507zm25.158-19.379c-.235 1.424-.529 2.849-.945 4.229-1.438 4.777-3.285 9.406-5.282 13.973-.369.845-.906 1.616-1.373 2.417-.072.124-.179.231-.283.334-.578.571-1.126.541-1.418-.206-.34-.868-.549-1.797-.729-2.716-.121-.617-.092-1.265-.13-1.897.039-4.494 1.41-8.578 3.736-12.38.959-1.568 2.003-3.062 3.598-4.054.49-.305 1.04-.55 1.595-.706.85-.239 1.372.154 1.231 1.006zm17.164 21.868l6.169-7.203c.257 2.675-4.29 8.015-6.169 7.203zm19.703-4.847c-.436.25-.911.43-1.358.661-.409.212-.544-.002-.556-.354-.008-.239.027-.489.093-.721.833-2.938 2.366-5.446 4.647-7.486l.16-.082c1.085 3.035-.169 6.368-2.986 7.982z"
    })
  );
});

/***/ }),

/***/ "./src/components/common/langs/Webpack.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === undefined ? 35 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === undefined ? 35 : _ref$height,
      className = _ref.className;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "svg",
    {
      className: className,
      width: width + "px",
      height: height + "px",
      viewBox: "0 0 128 128"
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M117.29,98.1,66.24,127V104.49L98,87,117.29,98.1Zm3.5-3.16V34.55L102.11,45.35V84.16l18.67,10.77ZM10.71,98.1l51,28.88V104.49L29.94,87Zm-3.5-3.16V34.55L25.89,45.35V84.16Zm2.19-64.3L61.76,1V22.76L28.21,41.21l-.27.15Zm109.18,0L66.24,1V22.76L99.79,41.2l.27.15,18.54-10.71Z" }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M61.76,99.37,30.37,82.1V47.92L61.76,66Zm4.48,0L97.63,82.12V47.92L66.24,66ZM32.5,44,64,26.66,95.5,44,64,62.16,32.5,44Z" })
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





var Link = __WEBPACK_IMPORTED_MODULE_1_styled_components__["default"].a(_templateObject, function (_ref) {
  var color = _ref.color;
  return color();
}, function (_ref2) {
  var color = _ref2.color;
  return color.clearer(0.6);
});

/* harmony default export */ __webpack_exports__["b"] = (Link);
var LinkIcon = Object(__WEBPACK_IMPORTED_MODULE_1_styled_components__["default"])(__WEBPACK_IMPORTED_MODULE_2_react_icons_lib_md_link___default.a)(_templateObject2);

/***/ }),

/***/ "./src/components/common/spacing/Padding.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__spacing__ = __webpack_require__("./src/components/common/spacing/spacing.js");
var _templateObject = _taggedTemplateLiteralLoose(["\n  padding: ", ";\n  box-sizing: border-box;\n"], ["\n  padding: ", ";\n  box-sizing: border-box;\n"]);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }




/* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0_styled_components__["default"].div(_templateObject, __WEBPACK_IMPORTED_MODULE_1__spacing__["a" /* default */]));

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
    _templateObject9 = _taggedTemplateLiteralLoose(["\n  transition: 0.3s ease background-color;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  width: 128px;\n  height: 128px;\n\n  svg {\n    width: 80px;\n    height: 80px;\n  }\n\n  ", ";\n\n  border-radius: 2px;\n  &:hover {\n    background-color: rgba(0, 0, 0, 0.1);\n  }\n  ", ";\n"], ["\n  transition: 0.3s ease background-color;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  width: 128px;\n  height: 128px;\n\n  svg {\n    width: 80px;\n    height: 80px;\n  }\n\n  ", ";\n\n  border-radius: 2px;\n  &:hover {\n    background-color: rgba(0, 0, 0, 0.1);\n  }\n  ", ";\n"]),
    _templateObject10 = _taggedTemplateLiteralLoose(["\n    width: 96px;\n    height: 96px;\n    svg {\n      width: 60px;\n      height: 60px;\n    }\n  "], ["\n    width: 96px;\n    height: 96px;\n    svg {\n      width: 60px;\n      height: 60px;\n    }\n  "]),
    _templateObject11 = _taggedTemplateLiteralLoose(["\n      background-color: ", ";\n      &:hover {\n        background-color: ", ";\n      }\n    "], ["\n      background-color: ", ";\n      &:hover {\n        background-color: ", ";\n      }\n    "]),
    _templateObject12 = _taggedTemplateLiteralLoose(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-weight: 300;\n  font-size: 2rem;\n  padding: 2rem;\n  border-radius: 2px;\n  color: white;\n\n  img {\n    display: block;\n  }\n\n  h4 {\n    margin-bottom: 0;\n    margin-top: 1rem;\n    font-weight: 200;\n    font-size: 2rem;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-weight: 300;\n  font-size: 2rem;\n  padding: 2rem;\n  border-radius: 2px;\n  color: white;\n\n  img {\n    display: block;\n  }\n\n  h4 {\n    margin-bottom: 0;\n    margin-top: 1rem;\n    font-weight: 200;\n    font-size: 2rem;\n  }\n"]);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }















var Container = __WEBPACK_IMPORTED_MODULE_1_styled_components__["default"].div(_templateObject, function (_ref) {
  var theme = _ref.theme;
  return theme.background;
}, function (_ref2) {
  var color = _ref2.color;
  return color.clearer(0.8);
}, __WEBPACK_IMPORTED_MODULE_9__utils_media__["a" /* default */].tablet(_templateObject2), __WEBPACK_IMPORTED_MODULE_9__utils_media__["a" /* default */].phone(_templateObject3));

var Pane = Object(__WEBPACK_IMPORTED_MODULE_1_styled_components__["default"])(__WEBPACK_IMPORTED_MODULE_2__common_flex_MaxWidth__["a" /* default */])(_templateObject4);

var Flex = __WEBPACK_IMPORTED_MODULE_1_styled_components__["default"].div(_templateObject5, __WEBPACK_IMPORTED_MODULE_9__utils_media__["a" /* default */].phone(_templateObject6));

var Icons = __WEBPACK_IMPORTED_MODULE_1_styled_components__["default"].div(_templateObject7, __WEBPACK_IMPORTED_MODULE_9__utils_media__["a" /* default */].phone(_templateObject8));

var IconContainer = __WEBPACK_IMPORTED_MODULE_1_styled_components__["default"].div(_templateObject9, __WEBPACK_IMPORTED_MODULE_9__utils_media__["a" /* default */].phone(_templateObject10), function (_ref3) {
  var selected = _ref3.selected,
      template = _ref3.template;
  return selected && Object(__WEBPACK_IMPORTED_MODULE_1_styled_components__["css"])(_templateObject11, template.color.clearer(0.9), template.color.clearer(0.9));
});

var TemplateName = __WEBPACK_IMPORTED_MODULE_1_styled_components__["default"].div(_templateObject12);

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
              Icon
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_icons_lib_fa_linkedin__ = __webpack_require__("./node_modules/react-icons/lib/fa/linkedin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_icons_lib_fa_linkedin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_icons_lib_fa_linkedin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_icons_lib_fa_twitter__ = __webpack_require__("./node_modules/react-icons/lib/fa/twitter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_icons_lib_fa_twitter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_icons_lib_fa_twitter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_icons_lib_fa_github__ = __webpack_require__("./node_modules/react-icons/lib/fa/github.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_icons_lib_fa_github___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_icons_lib_fa_github__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_icons_lib_fa_stack_overflow__ = __webpack_require__("./node_modules/react-icons/lib/fa/stack-overflow.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_icons_lib_fa_stack_overflow___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_icons_lib_fa_stack_overflow__);
var _templateObject = _taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n  ", ";\n\n  img {\n    display: inline-block;\n    margin-bottom: 0;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  ", ";\n\n  img {\n    display: inline-block;\n    margin-bottom: 0;\n  }\n"]);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }







// images





var Container = __WEBPACK_IMPORTED_MODULE_1_styled_components__["default"].div(_templateObject, function (props) {
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
  Icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_icons_lib_fa_linkedin___default.a, null),
  title: "Linked In",
  value: "João Cunha",
  link: "https://www.linkedin.com/in/joao-cunha-6a98a29b/",
  color: Object(__WEBPACK_IMPORTED_MODULE_3__theme__["a" /* decorateSelector */])(function () {
    return "#0077B5";
  })
}, {
  Icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_icons_lib_fa_twitter___default.a, null),
  title: "Twitter",
  value: "@lokuzt",
  link: "https://twitter.com/lokuzt",
  color: Object(__WEBPACK_IMPORTED_MODULE_3__theme__["a" /* decorateSelector */])(function () {
    return "#1DA1F2";
  })
}, {
  Icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_icons_lib_fa_github___default.a, null),
  title: "Github",
  value: "JoaoCnh",
  link: "https://github.com/JoaoCnh",
  color: Object(__WEBPACK_IMPORTED_MODULE_3__theme__["a" /* decorateSelector */])(function () {
    return "#F9FBFF";
  })
}, {
  Icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_icons_lib_fa_stack_overflow___default.a, null),
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_progressive_bg_image__ = __webpack_require__("./node_modules/react-progressive-bg-image/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_progressive_bg_image___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_progressive_bg_image__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__SocialNetworks__ = __webpack_require__("./src/components/pages/AboutMe/SocialNetworks.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_flex_Centered__ = __webpack_require__("./src/components/common/flex/Centered.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_flex_MaxWidth__ = __webpack_require__("./src/components/common/flex/MaxWidth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_Headings__ = __webpack_require__("./src/components/common/Headings.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_links_Link__ = __webpack_require__("./src/components/common/links/Link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__public_img_me_jpg__ = __webpack_require__("./public/img/me.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__public_img_me_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__public_img_me_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__public_img_mesmall_jpg__ = __webpack_require__("./public/img/mesmall.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__public_img_mesmall_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__public_img_mesmall_jpg__);
var _templateObject = _taggedTemplateLiteralLoose(["\n  color: ", ";\n  text-shadow: 0 0 50px ", ";\n"], ["\n  color: ", ";\n  text-shadow: 0 0 50px ", ";\n"]),
    _templateObject2 = _taggedTemplateLiteralLoose(["\n  flex: 1;\n  display: flex;\n  margin-right: 2rem;\n  flex-direction: column;\n"], ["\n  flex: 1;\n  display: flex;\n  margin-right: 2rem;\n  flex-direction: column;\n"]),
    _templateObject3 = _taggedTemplateLiteralLoose(["\n  display: flex;\n  position: relative;\n  margin-right: 2rem;\n  flex-direction: row;\n  flex-wrap: wrap;\n"], ["\n  display: flex;\n  position: relative;\n  margin-right: 2rem;\n  flex-direction: row;\n  flex-wrap: wrap;\n"]),
    _templateObject4 = _taggedTemplateLiteralLoose(["\n  color: ", ";\n  text-shadow: 0 0 50px ", ";\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  padding-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  margin-bottom: 1.0875rem;\n  text-rendering: optimizeLegibility;\n  font-size: 2.35824rem;\n  line-height: 1.1;\n"], ["\n  color: ", ";\n  text-shadow: 0 0 50px ", ";\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  padding-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  margin-bottom: 1.0875rem;\n  text-rendering: optimizeLegibility;\n  font-size: 2.35824rem;\n  line-height: 1.1;\n"]),
    _templateObject5 = _taggedTemplateLiteralLoose(["\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  padding-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  margin-bottom: 1.0875rem;\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 1.8rem;\n"], ["\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  padding-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  margin-bottom: 1.0875rem;\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 1.8rem;\n"]),
    _templateObject6 = _taggedTemplateLiteralLoose(["\n  height: 500px;\n  background-size: contain;\n  background-position: center center;\n"], ["\n  height: 500px;\n  background-size: contain;\n  background-position: center center;\n"]);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }















var Text = __WEBPACK_IMPORTED_MODULE_1_styled_components__["default"].span(_templateObject, function (_ref) {
  var color = _ref.color;
  return color();
}, function (_ref2) {
  var color = _ref2.color;
  return color.clearer(0.6);
});

var Column = __WEBPACK_IMPORTED_MODULE_1_styled_components__["default"].div(_templateObject2);

var Row = __WEBPACK_IMPORTED_MODULE_1_styled_components__["default"].div(_templateObject3);

var ColumnHeading = __WEBPACK_IMPORTED_MODULE_1_styled_components__["default"].h3(_templateObject4, function (_ref3) {
  var color = _ref3.color;
  return color();
}, function (_ref4) {
  var color = _ref4.color;
  return color.clearer(0.6);
});

var ColumnSubHeading = __WEBPACK_IMPORTED_MODULE_1_styled_components__["default"].p(_templateObject5);

var StyledProgressiveImage = Object(__WEBPACK_IMPORTED_MODULE_1_styled_components__["default"])(__WEBPACK_IMPORTED_MODULE_3_react_progressive_bg_image___default.a)(_templateObject6);

/* harmony default export */ __webpack_exports__["a"] = (function (_ref5) {
  var page = _ref5.page;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_5__common_flex_Centered__["a" /* default */],
    { horizontal: true },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_6__common_flex_MaxWidth__["a" /* default */],
      { width: 1280 },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_7__common_Headings__["a" /* Heading */],
        { color: page.color },
        "Hello! My name is Jo\xE3o Cunha"
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_7__common_Headings__["b" /* SubHeading */],
        null,
        "I'm a Full-Stack developer working",
        " ",
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_8__common_links_Link__["b" /* default */],
          {
            color: page.color,
            href: "https://www.wiremaze.com/",
            target: "_blank"
          },
          "@Wiremaze"
        ),
        " ",
        "in Porto, Portugal."
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_7__common_Headings__["b" /* SubHeading */],
        null,
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
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(StyledProgressiveImage, {
                src: __WEBPACK_IMPORTED_MODULE_9__public_img_me_jpg___default.a,
                placeholder: __WEBPACK_IMPORTED_MODULE_10__public_img_mesmall_jpg___default.a,
                transition: "all 1s linear"
              })
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
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              ColumnSubHeading,
              null,
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(StyledProgressiveImage, {
                src: __WEBPACK_IMPORTED_MODULE_9__public_img_me_jpg___default.a,
                placeholder: __WEBPACK_IMPORTED_MODULE_10__public_img_mesmall_jpg___default.a,
                transition: "all 1s linear"
              })
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
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              ColumnSubHeading,
              null,
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__SocialNetworks__["a" /* default */], null)
    )
  );
});

/***/ }),

/***/ "./src/components/pages/MyProjects/Project.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_icons_lib_fa_github__ = __webpack_require__("./node_modules/react-icons/lib/fa/github.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_icons_lib_fa_github___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_icons_lib_fa_github__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_icons_lib_fa_star_o__ = __webpack_require__("./node_modules/react-icons/lib/fa/star-o.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_icons_lib_fa_star_o___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_icons_lib_fa_star_o__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__theme__ = __webpack_require__("./src/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_media__ = __webpack_require__("./src/utils/media.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_lang__ = __webpack_require__("./src/utils/lang.js");
var _templateObject = _taggedTemplateLiteralLoose(["\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  align-items: center;\n  text-align: center;\n  color: #1c2022;\n  margin: 0.5rem;\n  width: calc(25% - 2rem);\n  -moz-box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);\n  -webkit-box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);\n  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);\n  padding: 0.5rem;\n\n  ", ";\n  ", ";\n\n  svg {\n    font-size: 2rem;\n    color: #1c2022;\n    font-weight: 400;\n    line-height: 1.4;\n    text-shadow: 0 1px 0px rgba(0, 0, 0, 0.3);\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  align-items: center;\n  text-align: center;\n  color: #1c2022;\n  margin: 0.5rem;\n  width: calc(25% - 2rem);\n  -moz-box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);\n  -webkit-box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);\n  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);\n  padding: 0.5rem;\n\n  ", ";\n  ", ";\n\n  svg {\n    font-size: 2rem;\n    color: #1c2022;\n    font-weight: 400;\n    line-height: 1.4;\n    text-shadow: 0 1px 0px rgba(0, 0, 0, 0.3);\n  }\n"]),
    _templateObject2 = _taggedTemplateLiteralLoose(["\n  width: calc(50% - 2rem);\n"], ["\n  width: calc(50% - 2rem);\n"]),
    _templateObject3 = _taggedTemplateLiteralLoose(["\n  width: 100%;\n"], ["\n  width: 100%;\n"]),
    _templateObject4 = _taggedTemplateLiteralLoose(["\n  font-size: 1.125rem;\n  margin: 0.5rem 0;\n  text-decoration: none;\n  color: ", ";\n"], ["\n  font-size: 1.125rem;\n  margin: 0.5rem 0;\n  text-decoration: none;\n  color: ", ";\n"]),
    _templateObject5 = _taggedTemplateLiteralLoose(["\n  color: #1c2022;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.4;\n  text-shadow: 0 1px 0px rgba(0, 0, 0, 0.3);\n  max-width: 100%; /* IE11 */\n"], ["\n  color: #1c2022;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.4;\n  text-shadow: 0 1px 0px rgba(0, 0, 0, 0.3);\n  max-width: 100%; /* IE11 */\n"]),
    _templateObject6 = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  top: 0.5rem;\n  right: 0.5rem;\n"], ["\n  position: absolute;\n  top: 0.5rem;\n  right: 0.5rem;\n"]),
    _templateObject7 = _taggedTemplateLiteralLoose(["\n  display: block;\n  position: absolute;\n  top: 0.5rem;\n  left: 0.5rem;\n\n  svg {\n    fill: #ffeb3b;\n  }\n"], ["\n  display: block;\n  position: absolute;\n  top: 0.5rem;\n  left: 0.5rem;\n\n  svg {\n    fill: #ffeb3b;\n  }\n"]);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }






// I should really put this in a provider but I'm lazy af




var Container = __WEBPACK_IMPORTED_MODULE_1_styled_components__["default"].div(_templateObject, __WEBPACK_IMPORTED_MODULE_5__utils_media__["a" /* default */].tablet(_templateObject2), __WEBPACK_IMPORTED_MODULE_5__utils_media__["a" /* default */].phone(_templateObject3));

var Title = __WEBPACK_IMPORTED_MODULE_1_styled_components__["default"].a(_templateObject4, function (props) {
  return props.theme.secondary;
});

var Description = __WEBPACK_IMPORTED_MODULE_1_styled_components__["default"].div(_templateObject5);

var Lang = __WEBPACK_IMPORTED_MODULE_1_styled_components__["default"].div(_templateObject6);

var Stars = __WEBPACK_IMPORTED_MODULE_1_styled_components__["default"].div(_templateObject7);

/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var project = _ref.project;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    Container,
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_icons_lib_fa_github___default.a, null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Title,
      { href: project.html_url, target: "_blank", theme: __WEBPACK_IMPORTED_MODULE_4__theme__["b" /* default */] },
      project.name
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Lang,
      null,
      Object(__WEBPACK_IMPORTED_MODULE_6__utils_lang__["a" /* langIcon */])(project.language)
    ),
    parseInt(project.stargazers_count) > 0 && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Stars,
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_icons_lib_fa_star_o___default.a, null),
      project.stargazers_count
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Description,
      { theme: __WEBPACK_IMPORTED_MODULE_4__theme__["b" /* default */] },
      project.description
    )
  );
});

/***/ }),

/***/ "./src/components/pages/MyProjects/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyProjects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_joao_wm_github_JoaoCnh_github_io_node_modules_babel_runtime_regenerator__ = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_joao_wm_github_JoaoCnh_github_io_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_joao_wm_github_JoaoCnh_github_io_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_icons_lib_fa_circle_o_notch__ = __webpack_require__("./node_modules/react-icons/lib/fa/circle-o-notch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_icons_lib_fa_circle_o_notch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_icons_lib_fa_circle_o_notch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_icons_lib_fa_github__ = __webpack_require__("./node_modules/react-icons/lib/fa/github.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_icons_lib_fa_github___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_icons_lib_fa_github__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_icons_lib_fa_fire__ = __webpack_require__("./node_modules/react-icons/lib/fa/fire.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_icons_lib_fa_fire___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_icons_lib_fa_fire__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_flex_MaxWidth__ = __webpack_require__("./src/components/common/flex/MaxWidth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_flex_Centered__ = __webpack_require__("./src/components/common/flex/Centered.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Project__ = __webpack_require__("./src/components/pages/MyProjects/Project.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_media__ = __webpack_require__("./src/utils/media.js");


var _templateObject = _taggedTemplateLiteralLoose(["\n  background-color: ", ";\n"], ["\n  background-color: ", ";\n"]),
    _templateObject2 = _taggedTemplateLiteralLoose(["\n  text-align: center;\n  font-weight: 200;\n  font-size: 2.5rem;\n  margin-top: 6rem;\n  margin-bottom: 1rem;\n  text-transform: uppercase;\n  color: #1c2022;\n  text-shadow: 0 0 100px #3c4244;\n  ", ";\n"], ["\n  text-align: center;\n  font-weight: 200;\n  font-size: 2.5rem;\n  margin-top: 6rem;\n  margin-bottom: 1rem;\n  text-transform: uppercase;\n  color: #1c2022;\n  text-shadow: 0 0 100px #3c4244;\n  ", ";\n"]),
    _templateObject3 = _taggedTemplateLiteralLoose(["margin-top: 3rem; margin-bottom: 0; "], ["margin-top: 3rem; margin-bottom: 0; "]),
    _templateObject4 = _taggedTemplateLiteralLoose(["\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 2rem;\n  margin-bottom: 6rem;\n"], ["\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 2rem;\n  margin-bottom: 6rem;\n"]),
    _templateObject5 = _taggedTemplateLiteralLoose(["\n  color: #1c2022;\n  font-size: 2rem;\n  margin-top: 5rem;\n  margin-bottom: 5rem;\n  margin-right: 1rem;\n  -webkit-animation: icon-spin 2s infinite linear;\n  animation: icon-spin 2s infinite linear;\n\n  @-webkit-keyframes icon-spin {\n    0% {\n      -webkit-transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n    100% {\n      -webkit-transform: rotate(359deg);\n      transform: rotate(359deg);\n    }\n  }\n\n  @keyframes icon-spin {\n    0% {\n      -webkit-transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n    100% {\n      -webkit-transform: rotate(359deg);\n      transform: rotate(359deg);\n    }\n  }\n"], ["\n  color: #1c2022;\n  font-size: 2rem;\n  margin-top: 5rem;\n  margin-bottom: 5rem;\n  margin-right: 1rem;\n  -webkit-animation: icon-spin 2s infinite linear;\n  animation: icon-spin 2s infinite linear;\n\n  @-webkit-keyframes icon-spin {\n    0% {\n      -webkit-transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n    100% {\n      -webkit-transform: rotate(359deg);\n      transform: rotate(359deg);\n    }\n  }\n\n  @keyframes icon-spin {\n    0% {\n      -webkit-transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n    100% {\n      -webkit-transform: rotate(359deg);\n      transform: rotate(359deg);\n    }\n  }\n"]),
    _templateObject6 = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  position: relative;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 5rem;\n  border: 1px solid transparent;\n  color: #721c24;\n  background-color: #f8d7da;\n  border-color: #f5c6cb;\n\n  h4 {\n    color: inherit;\n  }\n\n  p {\n    margin-top: 0;\n    margin-bottom: 1rem;\n  }\n"], ["\n  width: 100%;\n  position: relative;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 5rem;\n  border: 1px solid transparent;\n  color: #721c24;\n  background-color: #f8d7da;\n  border-color: #f5c6cb;\n\n  h4 {\n    color: inherit;\n  }\n\n  p {\n    margin-top: 0;\n    margin-bottom: 1rem;\n  }\n"]);

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }













var Background = __WEBPACK_IMPORTED_MODULE_2_styled_components__["default"].div(_templateObject, function (props) {
  return props.color();
});

var Heading = __WEBPACK_IMPORTED_MODULE_2_styled_components__["default"].h2(_templateObject2, __WEBPACK_IMPORTED_MODULE_9__utils_media__["a" /* default */].phone(_templateObject3));

var Projects = __WEBPACK_IMPORTED_MODULE_2_styled_components__["default"].div(_templateObject4);

var Loader = Object(__WEBPACK_IMPORTED_MODULE_2_styled_components__["default"])(__WEBPACK_IMPORTED_MODULE_3_react_icons_lib_fa_circle_o_notch___default.a)(_templateObject5);

var NotMyFaultM8 = __WEBPACK_IMPORTED_MODULE_2_styled_components__["default"].div(_templateObject6);

var MyProjects = function (_React$Component) {
  _inherits(MyProjects, _React$Component);

  function MyProjects() {
    var _this2 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, MyProjects);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      init: true,
      loading: false,
      projects: [],
      error: false
    }, _this.fetchProjects = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_joao_wm_github_JoaoCnh_github_io_node_modules_babel_runtime_regenerator___default.a.mark(function _callee() {
      var res, json;
      return __WEBPACK_IMPORTED_MODULE_0__home_joao_wm_github_JoaoCnh_github_io_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return fetch("https://api.github.com/users/JoaoCnh/repos");

            case 3:
              res = _context.sent;
              _context.next = 6;
              return res.json();

            case 6:
              json = _context.sent;


              _this.setState({ error: false, loading: false, projects: json });
              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);

              _this.setState({ error: true, loading: false });

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this2, [[0, 10]]);
    })), _temp), _possibleConstructorReturn(_this, _ret);
  }

  MyProjects.prototype.componentDidMount = function componentDidMount() {
    this.setState({ init: false, loading: true }, this.fetchProjects.bind(this));
  };

  MyProjects.prototype.render = function render() {
    var page = this.props.page;
    var _state = this.state,
        init = _state.init,
        loading = _state.loading,
        projects = _state.projects,
        error = _state.error;


    if (init) {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", null);
    }

    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      Background,
      { color: page.color },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_6__common_flex_MaxWidth__["a" /* default */],
        { width: 1280 },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_7__common_flex_Centered__["a" /* default */],
          { horizontal: true },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            Heading,
            null,
            "These are my OS projects on Github"
          ),
          loading && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Loader, null),
          error && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            NotMyFaultM8,
            null,
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "h4",
              null,
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_icons_lib_fa_fire___default.a, null),
              "Something at Github must be brewing"
            )
          )
        ),
        !error && projects.length > 0 && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          Projects,
          null,
          projects.map(function (project) {
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__Project__["a" /* default */], { key: project.id, project: project });
          })
        )
      )
    );
  };

  return MyProjects;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_pages_MyProjects__ = __webpack_require__("./src/components/pages/MyProjects/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theme__ = __webpack_require__("./src/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_icons_lib_md_fingerprint__ = __webpack_require__("./node_modules/react-icons/lib/md/fingerprint.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_icons_lib_md_fingerprint___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_icons_lib_md_fingerprint__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_icons_lib_fa_github__ = __webpack_require__("./node_modules/react-icons/lib/fa/github.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_icons_lib_fa_github___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_icons_lib_fa_github__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_icons_lib_fa_code__ = __webpack_require__("./node_modules/react-icons/lib/fa/code.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_icons_lib_fa_code___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_icons_lib_fa_code__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_icons_lib_fa_html5__ = __webpack_require__("./node_modules/react-icons/lib/fa/html5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_icons_lib_fa_html5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_icons_lib_fa_html5__);







// images





var aboutMe = {
  name: "about-me",
  niceName: "About me",
  Icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_icons_lib_md_fingerprint___default.a, null),
  color: Object(__WEBPACK_IMPORTED_MODULE_3__theme__["a" /* decorateSelector */])(function () {
    return "#6CAEDD";
  }),
  render: function render(page) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_pages_AboutMe__["a" /* default */], { page: page });
  }
};

var myProjects = {
  name: "my-projects",
  niceName: "My projects",
  Icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_icons_lib_fa_github___default.a, null),
  inverse: true,
  color: Object(__WEBPACK_IMPORTED_MODULE_3__theme__["a" /* decorateSelector */])(function () {
    return "#F9FBFF";
  }),
  render: function render(page) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_pages_MyProjects__["a" /* default */], { page: page });
  }
};

var MyExperience = {
  name: "my-experience",
  niceName: "My experience",
  Icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_icons_lib_fa_code___default.a, null),
  color: Object(__WEBPACK_IMPORTED_MODULE_3__theme__["a" /* decorateSelector */])(function () {
    return "#41B883";
  }),
  render: function render(page) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_pages_AboutMe__["a" /* default */], { page: page });
  }
};

var whateverMe = {
  name: "this-design",
  niceName: "This design",
  Icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_icons_lib_fa_html5___default.a, null),
  color: Object(__WEBPACK_IMPORTED_MODULE_3__theme__["a" /* decorateSelector */])(function () {
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

/* harmony default export */ __webpack_exports__["b"] = (theme);

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



var animation = Object(__WEBPACK_IMPORTED_MODULE_0_styled_components__["keyframes"])(_templateObject);

/* harmony default export */ __webpack_exports__["a"] = (function (delay) {
  return "\n    animation: " + animation + " 0.3s;\n    animation-delay: " + delay + "s;\n    animation-fill-mode: forwards;\n    opacity: 0;\n  ";
});

var animIn = Object(__WEBPACK_IMPORTED_MODULE_0_styled_components__["keyframes"])(_templateObject2);

var fadeIn = function fadeIn() {
  var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return Object(__WEBPACK_IMPORTED_MODULE_0_styled_components__["css"])(_templateObject3, animIn, delay);
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

/***/ "./src/utils/lang.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return langIcon; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_common_langs_Php__ = __webpack_require__("./src/components/common/langs/Php.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_common_langs_Lang__ = __webpack_require__("./src/components/common/langs/Lang.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_common_langs_Ruby__ = __webpack_require__("./src/components/common/langs/Ruby.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_common_langs_Java__ = __webpack_require__("./src/components/common/langs/Java.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_common_langs_Css3__ = __webpack_require__("./src/components/common/langs/Css3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_common_langs_Sass__ = __webpack_require__("./src/components/common/langs/Sass.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_common_langs_Gulp__ = __webpack_require__("./src/components/common/langs/Gulp.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_common_langs_Node__ = __webpack_require__("./src/components/common/langs/Node.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_common_langs_Rails__ = __webpack_require__("./src/components/common/langs/Rails.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_common_langs_Html5__ = __webpack_require__("./src/components/common/langs/Html5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_common_langs_PgSql__ = __webpack_require__("./src/components/common/langs/PgSql.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_common_langs_Csharp__ = __webpack_require__("./src/components/common/langs/Csharp.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_common_langs_DotNet__ = __webpack_require__("./src/components/common/langs/DotNet.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_common_langs_Golang__ = __webpack_require__("./src/components/common/langs/Golang.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_common_langs_Express__ = __webpack_require__("./src/components/common/langs/Express.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_common_langs_Android__ = __webpack_require__("./src/components/common/langs/Android.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_common_langs_Webpack__ = __webpack_require__("./src/components/common/langs/Webpack.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_common_langs_Bootstrap__ = __webpack_require__("./src/components/common/langs/Bootstrap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_common_langs_Javascript__ = __webpack_require__("./src/components/common/langs/Javascript.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_common_langs_React__ = __webpack_require__("./src/components/common/langs/React.js");























/**
|--------------------------------------------------
| This is like this because webpack inline svg loaders
| are not working for me for some reason. Icons from Devicon
|--------------------------------------------------
*/

var langIcon = function langIcon(lang, props) {
  switch (lang.toLowerCase()) {
    // Javascript
    case "javascript":
    case "js":
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_19__components_common_langs_Javascript__["a" /* default */], props);
    // React
    case "jsx":
    case "react":
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_20__components_common_langs_React__["a" /* default */], props);
    // Ruby
    case "ruby":
    case "rb":
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_common_langs_Ruby__["a" /* default */], props);
    // Ruby on Rails
    case "rails":
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_common_langs_Rails__["a" /* default */], props);
    // Java
    case "java":
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_common_langs_Java__["a" /* default */], props);
    // Css
    case "css":
    case "css3":
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_common_langs_Css3__["a" /* default */], props);
    // Sass
    case "scss":
    case "sass":
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_common_langs_Sass__["a" /* default */], props);
    // Gulp
    case "gulp":
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_common_langs_Gulp__["a" /* default */], props);
    // Html
    case "html":
    case "html5":
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_common_langs_Html5__["a" /* default */], props);
    // Android
    case "android":
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__components_common_langs_Android__["a" /* default */], props);
    // Bootstrap
    case "bootstrap":
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_18__components_common_langs_Bootstrap__["a" /* default */], props);
    // C#
    case "csharp":
    case "c#":
    case "cs":
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_common_langs_Csharp__["a" /* default */], props);
    // .NET
    case "dotnet":
    case ".net":
    case "asp.net":
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__components_common_langs_DotNet__["a" /* default */], props);
    // Express JS
    case "express":
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__components_common_langs_Express__["a" /* default */], props);
    // Go
    case "go":
    case "golang":
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__components_common_langs_Golang__["a" /* default */], props);
    // Node
    case "node":
    case "nodejs":
    case "node.js":
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_common_langs_Node__["a" /* default */], props);
    // PostgreSQL
    case "postgresql":
    case "pgsql":
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_common_langs_PgSql__["a" /* default */], props);
    // PHP
    case "php":
    case "shit":
      // AIR HORN SOUND!!!! PS: It's a fokin joke
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_common_langs_Php__["a" /* default */], props);
    // Webpack
    case "webpack":
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_17__components_common_langs_Webpack__["a" /* default */], props);
    // DEFAULT
    default:
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_common_langs_Lang__["a" /* default */], props);
  }
};

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
    return Object(__WEBPACK_IMPORTED_MODULE_0_styled_components__["css"])(_templateObject, __WEBPACK_IMPORTED_MODULE_0_styled_components__["css"].apply(undefined, arguments));
  },

  phone: function phone() {
    return Object(__WEBPACK_IMPORTED_MODULE_0_styled_components__["css"])(_templateObject2, __WEBPACK_IMPORTED_MODULE_0_styled_components__["css"].apply(undefined, arguments));
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