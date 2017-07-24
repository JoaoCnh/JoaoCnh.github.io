'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Footer = require('../components/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/joao/wm/github/JoaoCnh.github.io/layouts/main.js';

exports.default = function (_ref) {
	var children = _ref.children;
	return _react2.default.createElement('div', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 8
		}
	}, _react2.default.createElement(_head2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 9
		}
	}, _react2.default.createElement('meta', { charset: 'utf-8', __source: {
			fileName: _jsxFileName,
			lineNumber: 10
		}
	}), _react2.default.createElement('meta', { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge', __source: {
			fileName: _jsxFileName,
			lineNumber: 11
		}
	}), _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', __source: {
			fileName: _jsxFileName,
			lineNumber: 12
		}
	}), _react2.default.createElement('meta', { name: 'description', content: 'My online portfolio', __source: {
			fileName: _jsxFileName,
			lineNumber: 13
		}
	}), _react2.default.createElement('meta', { name: 'author', content: 'Jo\xE3o Cunha', __source: {
			fileName: _jsxFileName,
			lineNumber: 14
		}
	}), _react2.default.createElement('title', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 16
		}
	}, 'Jo\xE3o Cunha - Web Enthusiast'), _react2.default.createElement('link', { href: '/static/css/bootstrap.min.css', rel: 'stylesheet', __source: {
			fileName: _jsxFileName,
			lineNumber: 18
		}
	}), _react2.default.createElement('link', { href: '/static/css/theme.css', rel: 'stylesheet', __source: {
			fileName: _jsxFileName,
			lineNumber: 19
		}
	}), _react2.default.createElement('link', { href: '/static/css/font-awesome.min.css', rel: 'stylesheet', type: 'text/css', __source: {
			fileName: _jsxFileName,
			lineNumber: 20
		}
	}), _react2.default.createElement('link', { href: 'http://fonts.googleapis.com/css?family=Montserrat:400,700', rel: 'stylesheet', type: 'text/css', __source: {
			fileName: _jsxFileName,
			lineNumber: 21
		}
	})), _react2.default.createElement(_Header2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 23
		}
	}), children, _react2.default.createElement(_Footer2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 25
		}
	}));
};