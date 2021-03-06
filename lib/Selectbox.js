'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _createClass = (function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i]
      descriptor.enumerable = descriptor.enumerable || false
      descriptor.configurable = true
      if ('value' in descriptor) descriptor.writable = true
      Object.defineProperty(target, descriptor.key, descriptor)
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps)
    if (staticProps) defineProperties(Constructor, staticProps)
    return Constructor
  }
})()

var _react = require('react')

var _react2 = _interopRequireDefault(_react)

var _propTypes = require('prop-types')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function')
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
  }
  return call && (typeof call === 'object' || typeof call === 'function') ? call : self
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError(
      'Super expression must either be null or a function, not ' + typeof superClass
    )
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, enumerable: false, writable: true, configurable: true }
  })
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass)
}

var Selectbox = (function(_Component) {
  _inherits(Selectbox, _Component)

  function Selectbox() {
    var _ref

    var _temp, _this, _ret

    _classCallCheck(this, Selectbox)

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key]
    }

    return (
      (_ret = ((_temp = ((_this = _possibleConstructorReturn(
        this,
        (_ref = Selectbox.__proto__ || Object.getPrototypeOf(Selectbox)).call.apply(
          _ref,
          [this].concat(args)
        )
      )),
      _this)),
      (_this.state = {
        boxTop: 0,
        boxLeft: 0,
        boxWidth: 0,
        boxHeight: 0,
        isBoxSelecting: false
      }),
      (_this.getRef = function() {
        return _this.selectbox
      }),
      (_this.getSelectboxRef = function(c) {
        return (_this.selectbox = c)
      }),
      _temp)),
      _possibleConstructorReturn(_this, _ret)
    )
  }

  _createClass(Selectbox, [
    {
      key: 'render',
      value: function render() {
        var boxStyle = {
          left: this.state.boxLeft,
          top: this.state.boxTop,
          width: this.state.boxWidth,
          height: this.state.boxHeight,
          zIndex: 9000,
          position: this.props.fixedPosition ? 'fixed' : 'absolute',
          cursor: 'default'
        }

        return _react2.default.createElement(
          'div',
          null,
          this.state.isBoxSelecting &&
            _react2.default.createElement('div', {
              ref: this.getSelectboxRef,
              style: boxStyle,
              className: this.props.className
            })
        )
      }
    }
  ])

  return Selectbox
})(_react.Component)

Selectbox.propTypes = {
  fixedPosition: _propTypes.bool,
  className: _propTypes.string
}
Selectbox.defaultProps = {
  className: 'selectable-selectbox'
}
exports.default = Selectbox
