'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _extends =
  Object.assign ||
  function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i]
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key]
        }
      }
    }
    return target
  }

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

var _getBoundsForNode = require('./getBoundsForNode')

var _getBoundsForNode2 = _interopRequireDefault(_getBoundsForNode)

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

var createSelectable = function createSelectable(WrappedComponent) {
  var _class, _temp2

  return (
    (_temp2 = _class = (function(_Component) {
      _inherits(SelectableItem, _Component)

      function SelectableItem() {
        var _ref

        var _temp, _this, _ret

        _classCallCheck(this, SelectableItem)

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key]
        }

        return (
          (_ret = ((_temp = ((_this = _possibleConstructorReturn(
            this,
            (_ref = SelectableItem.__proto__ || Object.getPrototypeOf(SelectableItem)).call.apply(
              _ref,
              [this].concat(args)
            )
          )),
          _this)),
          (_this.state = {
            selected: _this.props.selected,
            selecting: false
          }),
          (_this.registerSelectable = function(containerScroll) {
            _this.bounds = (0, _getBoundsForNode2.default)(_this.node, containerScroll)
            _this.context.selectable.register(_this)
          }),
          (_this.selectableRef = function(ref) {
            return (_this.node = ref)
          }),
          _temp)),
          _possibleConstructorReturn(_this, _ret)
        )
      }

      _createClass(SelectableItem, [
        {
          key: 'componentDidMount',
          value: function componentDidMount() {
            this.registerSelectable()
          }
        },
        {
          key: 'componentWillUnmount',
          value: function componentWillUnmount() {
            this.context.selectable.unregister(this)
          }
        },
        {
          key: 'render',
          value: function render() {
            return _react2.default.createElement(
              WrappedComponent,
              _extends({}, this.props, {
                selected: this.state.selected,
                selecting: this.state.selecting,
                selectableRef: this.selectableRef
              })
            )
          }
        }
      ])

      return SelectableItem
    })(_react.Component)),
    (_class.propTypes = {
      selected: _propTypes.bool
    }),
    (_class.defaultProps = {
      selected: false
    }),
    (_class.contextTypes = {
      selectable: _propTypes.object
    }),
    _temp2
  )
}

exports.default = createSelectable
