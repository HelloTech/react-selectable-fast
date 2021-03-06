!(function(e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t(require('react')))
    : 'function' == typeof define && define.amd
      ? define(['react'], t)
      : 'object' == typeof exports
        ? (exports['React-Selectable-Fast'] = t(require('react')))
        : (e['React-Selectable-Fast'] = t(e.React))
})(window, function(e) {
  return (function(e) {
    var t = {}
    function o(n) {
      if (t[n]) return t[n].exports
      var r = (t[n] = { i: n, l: !1, exports: {} })
      return e[n].call(r.exports, r, r.exports, o), (r.l = !0), r.exports
    }
    return (
      (o.m = e),
      (o.c = t),
      (o.d = function(e, t, n) {
        o.o(e, t) || Object.defineProperty(e, t, { configurable: !1, enumerable: !0, get: n })
      }),
      (o.r = function(e) {
        Object.defineProperty(e, '__esModule', { value: !0 })
      }),
      (o.n = function(e) {
        var t =
          e && e.__esModule
            ? function() {
                return e.default
              }
            : function() {
                return e
              }
        return o.d(t, 'a', t), t
      }),
      (o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
      }),
      (o.p = ''),
      o((o.s = 14))
    )
  })([
    function(t, o) {
      t.exports = e
    },
    function(e, t, o) {
      e.exports = o(12)()
    },
    function(e, t, o) {
      'use strict'
      function n() {
        return {
          documentScrollTop: Math.max(
            window.pageYOffset,
            document.documentElement.scrollTop,
            document.body.scrollTop
          ),
          documentScrollLeft: Math.max(
            window.pageXOffset,
            document.documentElement.scrollLeft,
            document.body.scrollLeft
          )
        }
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.getDocumentScroll = n),
        (t.default = function(e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : { scrollTop: 0, scrollLeft: 0 },
            o = t.scrollTop,
            r = t.scrollLeft,
            s = n(),
            l = s.documentScrollTop,
            i = s.documentScrollLeft,
            c = e.getBoundingClientRect()
          return {
            top: c.top + l + o,
            left: c.left + i + r,
            offsetWidth: e.offsetWidth,
            offsetHeight: e.offsetHeight,
            computedWidth: c.width,
            computedHeight: c.height
          }
        })
    },
    function(e, t, o) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n,
        r = (function() {
          function e(e, t) {
            for (var o = 0; o < t.length; o++) {
              var n = t[o]
              ;(n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                'value' in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
          }
          return function(t, o, n) {
            return o && e(t.prototype, o), n && e(t, n), t
          }
        })(),
        s = o(0),
        l = (n = s) && n.__esModule ? n : { default: n },
        i = o(1)
      function c(e, t) {
        if (!e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
      }
      var a = (function(e) {
        function t() {
          var e, o, n
          !(function(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, t)
          for (var r = arguments.length, s = Array(r), l = 0; l < r; l++) s[l] = arguments[l]
          return (
            (o = n = c(
              this,
              (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(s))
            )),
            (n.getRootRef = function(e) {
              return (n.root = e)
            }),
            c(n, o)
          )
        }
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function, not ' + typeof t
              )
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
            })),
              t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
          })(t, s.Component),
          r(t, [
            {
              key: 'componentDidMount',
              value: function() {
                this.root.addEventListener('mousedown', function(e) {
                  return e.stopPropagation()
                })
              }
            },
            {
              key: 'render',
              value: function() {
                return l.default.createElement(
                  this.props.component,
                  {
                    ref: this.getRootRef,
                    onClick: this.context.selectable.clearSelection,
                    className: 'selectable-deselect-all ' + this.props.className
                  },
                  this.props.children
                )
              }
            }
          ]),
          t
        )
      })()
      ;(a.defaultProps = { component: 'div' }),
        (a.contextTypes = { selectable: i.object }),
        (t.default = a)
    },
    function(e, t, o) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n,
        r = (function() {
          function e(e, t) {
            for (var o = 0; o < t.length; o++) {
              var n = t[o]
              ;(n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                'value' in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
          }
          return function(t, o, n) {
            return o && e(t.prototype, o), n && e(t, n), t
          }
        })(),
        s = o(0),
        l = (n = s) && n.__esModule ? n : { default: n },
        i = o(1)
      function c(e, t) {
        if (!e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
      }
      var a = (function(e) {
        function t() {
          var e, o, n
          !(function(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, t)
          for (var r = arguments.length, s = Array(r), l = 0; l < r; l++) s[l] = arguments[l]
          return (
            (o = n = c(
              this,
              (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(s))
            )),
            (n.getRootRef = function(e) {
              return (n.root = e)
            }),
            c(n, o)
          )
        }
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function, not ' + typeof t
              )
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
            })),
              t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
          })(t, s.Component),
          r(t, [
            {
              key: 'componentDidMount',
              value: function() {
                this.root.addEventListener('mousedown', function(e) {
                  return e.stopPropagation()
                })
              }
            },
            {
              key: 'render',
              value: function() {
                return l.default.createElement(
                  this.props.component,
                  {
                    ref: this.getRootRef,
                    className: 'selectable-select-all ' + this.props.className,
                    onClick: this.context.selectable.selectAll
                  },
                  this.props.children
                )
              }
            }
          ]),
          t
        )
      })()
      ;(a.defaultProps = { component: 'div' }),
        (a.contextTypes = { selectable: i.object }),
        (t.default = a)
    },
    function(e, t, o) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var o = arguments[t]
              for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
            }
            return e
          },
        r = (function() {
          function e(e, t) {
            for (var o = 0; o < t.length; o++) {
              var n = t[o]
              ;(n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                'value' in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
          }
          return function(t, o, n) {
            return o && e(t.prototype, o), n && e(t, n), t
          }
        })(),
        s = o(0),
        l = a(s),
        i = o(1),
        c = a(o(2))
      function a(e) {
        return e && e.__esModule ? e : { default: e }
      }
      function u(e, t) {
        if (!e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
      }
      t.default = function(e) {
        var t, o
        return (
          (o = t = (function(t) {
            function o() {
              var e, t, n
              !(function(e, t) {
                if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
              })(this, o)
              for (var r = arguments.length, s = Array(r), l = 0; l < r; l++) s[l] = arguments[l]
              return (
                (t = n = u(
                  this,
                  (e = o.__proto__ || Object.getPrototypeOf(o)).call.apply(e, [this].concat(s))
                )),
                (n.state = { selected: n.props.selected, selecting: !1 }),
                (n.registerSelectable = function(e) {
                  ;(n.bounds = (0, c.default)(n.node, e)), n.context.selectable.register(n)
                }),
                (n.selectableRef = function(e) {
                  return (n.node = e)
                }),
                u(n, t)
              )
            }
            return (
              (function(e, t) {
                if ('function' != typeof t && null !== t)
                  throw new TypeError(
                    'Super expression must either be null or a function, not ' + typeof t
                  )
                ;(e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
                })),
                  t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
              })(o, s.Component),
              r(o, [
                {
                  key: 'componentDidMount',
                  value: function() {
                    this.registerSelectable()
                  }
                },
                {
                  key: 'componentWillUnmount',
                  value: function() {
                    this.context.selectable.unregister(this)
                  }
                },
                {
                  key: 'render',
                  value: function() {
                    return l.default.createElement(
                      e,
                      n({}, this.props, {
                        selected: this.state.selected,
                        selecting: this.state.selecting,
                        selectableRef: this.selectableRef
                      })
                    )
                  }
                }
              ]),
              o
            )
          })()),
          (t.defaultProps = { selected: !1 }),
          (t.contextTypes = { selectable: i.object }),
          o
        )
      }
    },
    function(e, t, o) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n,
        r = (function() {
          function e(e, t) {
            for (var o = 0; o < t.length; o++) {
              var n = t[o]
              ;(n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                'value' in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
          }
          return function(t, o, n) {
            return o && e(t.prototype, o), n && e(t, n), t
          }
        })(),
        s = o(0),
        l = (n = s) && n.__esModule ? n : { default: n }
      function i(e, t) {
        if (!e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
      }
      var c = (function(e) {
        function t() {
          var e, o, n
          !(function(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, t)
          for (var r = arguments.length, s = Array(r), l = 0; l < r; l++) s[l] = arguments[l]
          return (
            (o = n = i(
              this,
              (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(s))
            )),
            (n.state = { boxTop: 0, boxLeft: 0, boxWidth: 0, boxHeight: 0, isBoxSelecting: !1 }),
            (n.getRef = function() {
              return n.selectbox
            }),
            (n.getSelectboxRef = function(e) {
              return (n.selectbox = e)
            }),
            i(n, o)
          )
        }
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function, not ' + typeof t
              )
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
            })),
              t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
          })(t, s.Component),
          r(t, [
            {
              key: 'render',
              value: function() {
                var e = {
                  left: this.state.boxLeft,
                  top: this.state.boxTop,
                  width: this.state.boxWidth,
                  height: this.state.boxHeight,
                  zIndex: 9e3,
                  position: this.props.fixedPosition ? 'fixed' : 'absolute',
                  cursor: 'default'
                }
                return l.default.createElement(
                  'div',
                  null,
                  this.state.isBoxSelecting &&
                    l.default.createElement('div', {
                      ref: this.getSelectboxRef,
                      style: e,
                      className: this.props.className
                    })
                )
              }
            }
          ]),
          t
        )
      })()
      ;(c.defaultProps = { className: 'selectable-selectbox' }), (t.default = c)
    },
    function(e, t, o) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n,
        r = o(2),
        s = (n = r) && n.__esModule ? n : { default: n }
      var l = function(e, t, o, n, r, s, l, i, c) {
        return (
          void 0 === c && (c = 0),
          !(e + s - c < o || e + c > o + i || t + r - c < n || t + c > n + l)
        )
      }
      t.default = function(e, t, o, n) {
        void 0 === n && (n = 1)
        var r = e instanceof HTMLElement ? (0, s.default)(e) : e,
          i = t instanceof HTMLElement ? (0, s.default)(t) : t
        return 1 === n
          ? l(
              r.top,
              r.left,
              i.top,
              i.left,
              r.offsetWidth,
              r.offsetHeight,
              i.offsetWidth,
              i.offsetHeight,
              o
            )
          : l(
              r.top,
              r.left,
              i.top,
              i.left,
              r.computedWidth,
              r.computedHeight,
              i.computedWidth,
              i.computedHeight,
              o
            )
      }
    },
    function(e, t, o) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          for (; e; ) {
            if (e === t) return !0
            e = e.parentNode
          }
          return !1
        })
    },
    function(e, t, o) {
      'use strict'
      e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
    },
    function(e, t, o) {
      'use strict'
      var n = function(e) {}
      e.exports = function(e, t, o, r, s, l, i, c) {
        if ((n(t), !e)) {
          var a
          if (void 0 === t)
            a = new Error(
              'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.'
            )
          else {
            var u = [o, r, s, l, i, c],
              f = 0
            ;(a = new Error(
              t.replace(/%s/g, function() {
                return u[f++]
              })
            )).name =
              'Invariant Violation'
          }
          throw ((a.framesToPop = 1), a)
        }
      }
    },
    function(e, t, o) {
      'use strict'
      function n(e) {
        return function() {
          return e
        }
      }
      var r = function() {}
      ;(r.thatReturns = n),
        (r.thatReturnsFalse = n(!1)),
        (r.thatReturnsTrue = n(!0)),
        (r.thatReturnsNull = n(null)),
        (r.thatReturnsThis = function() {
          return this
        }),
        (r.thatReturnsArgument = function(e) {
          return e
        }),
        (e.exports = r)
    },
    function(e, t, o) {
      'use strict'
      var n = o(11),
        r = o(10),
        s = o(9)
      e.exports = function() {
        function e(e, t, o, n, l, i) {
          i !== s &&
            r(
              !1,
              'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
            )
        }
        function t() {
          return e
        }
        e.isRequired = e
        var o = {
          array: e,
          bool: e,
          func: e,
          number: e,
          object: e,
          string: e,
          symbol: e,
          any: e,
          arrayOf: t,
          element: e,
          instanceOf: t,
          node: e,
          objectOf: t,
          oneOf: t,
          oneOfType: t,
          shape: t,
          exact: t
        }
        return (o.checkPropTypes = n), (o.PropTypes = o), o
      }
    },
    function(e, t, o) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var o = arguments[t]
              for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
            }
            return e
          },
        r = (function() {
          function e(e, t) {
            for (var o = 0; o < t.length; o++) {
              var n = t[o]
              ;(n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                'value' in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
          }
          return function(t, o, n) {
            return o && e(t.prototype, o), n && e(t, n), t
          }
        })(),
        s = o(0),
        l = p(s),
        i = o(1),
        c = p(o(8)),
        a = o(2),
        u = p(a),
        f = p(o(7)),
        d = p(o(6))
      function p(e) {
        return e && e.__esModule ? e : { default: e }
      }
      function h(e) {
        if (Array.isArray(e)) {
          for (var t = 0, o = Array(e.length); t < e.length; t++) o[t] = e[t]
          return o
        }
        return Array.from(e)
      }
      var m = function() {},
        v = (function(e) {
          function t(e) {
            !(function(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
            })(this, t)
            var o = (function(e, t) {
              if (!e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                )
              return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
            })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
            return (
              (o.setScollTop = function(e) {
                var t = o.scrollContainer.scrollTop
                o.checkScrollTop(e, t), o.checkScrollBottom(e, t)
              }),
              (o.checkScrollTop = function(e, t) {
                var n = o.props,
                  r = n.minimumSpeedFactor,
                  s = n.scrollSpeed,
                  l = o.scrollBounds.top - e.clientY
                if (l > 0 || e.clientY < 0) {
                  var i = t - Math.max(l, r) * s
                  o.scrollContainer.scrollTop = i
                }
              }),
              (o.checkScrollBottom = function(e, t) {
                var n = o.props,
                  r = n.minimumSpeedFactor,
                  s = n.scrollSpeed,
                  l = e.clientY - o.scrollBounds.bottom
                if (l > 0 || e.clientY > window.innerHeight) {
                  var i = t + Math.max(l, r) * s
                  o.scrollContainer.scrollTop = Math.min(i, o.maxScroll)
                }
              }),
              (o.updateRegistry = function() {
                var e = {
                    scrollTop: o.scrollContainer.scrollTop,
                    scrollLeft: o.scrollContainer.scrollLeft
                  },
                  t = !0,
                  n = !1,
                  r = void 0
                try {
                  for (
                    var s, l = o.registry.values()[Symbol.iterator]();
                    !(t = (s = l.next()).done);
                    t = !0
                  ) {
                    s.value.registerSelectable(e)
                  }
                } catch (e) {
                  ;(n = !0), (r = e)
                } finally {
                  try {
                    !t && l.return && l.return()
                  } finally {
                    if (n) throw r
                  }
                }
              }),
              (o.registerSelectable = function(e) {
                o.registry.add(e)
              }),
              (o.unregisterSelectable = function(e) {
                o.registry.delete(e),
                  o.selectedItems.delete(e),
                  o.selectingItems.delete(e),
                  o.deselectedItems.delete(e)
              }),
              (o.applyContainerScroll = function(e, t) {
                return e + t
              }),
              (o.openSelectbox = function(e) {
                var t = o.desktopEventCoords(e)
                if ((o.setScollTop(t), !o.mouseMoveStarted)) {
                  ;(o.mouseMoveStarted = !0), (o.mouseMoved = !0)
                  var n = o.scrollContainer.scrollTop,
                    r = t.pageY,
                    s = t.pageX,
                    l = (0, a.getDocumentScroll)(),
                    i = l.documentScrollTop,
                    c = l.documentScrollLeft,
                    u = o.applyContainerScroll(r - o.scrollBounds.top, n - i),
                    f = o.applyContainerScroll(
                      o.mouseDownData.boxTop - o.scrollBounds.top,
                      o.mouseDownData.scrollTop - i
                    ),
                    d = f - u
                  f = Math.min(f - d, f)
                  var p = o.mouseDownData.boxLeft - s,
                    m = o.mouseDownData.boxLeft - o.scrollBounds.left,
                    v = o.applyContainerScroll(Math.min(m - p, m), -c)
                  o.selectbox.setState(
                    {
                      isBoxSelecting: !0,
                      boxWidth: Math.abs(p),
                      boxHeight: Math.abs(d),
                      boxLeft: v,
                      boxTop: f
                    },
                    function() {
                      o.updateSelecting(),
                        o.props.duringSelection([].concat(h(o.selectingItems))),
                        (o.mouseMoveStarted = !1)
                    }
                  )
                }
              }),
              (o.updateSelecting = function() {
                var e = o.selectbox.getRef()
                if (e) {
                  var t = (0, u.default)(e)
                  o.selectItems(
                    n({}, t, { offsetWidth: t.offsetWidth || 1, offsetHeight: t.offsetHeight || 1 })
                  )
                }
              }),
              (o.selectItems = function(e) {
                var t = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).click,
                  n = o.props,
                  r = n.tolerance,
                  s = n.enableDeselect,
                  l = n.mixedDeselect
                ;(e.top += o.scrollContainer.scrollTop), (e.left += o.scrollContainer.scrollLeft)
                var i = !0,
                  c = !1,
                  a = void 0
                try {
                  for (
                    var u, f = o.registry.values()[Symbol.iterator]();
                    !(i = (u = f.next()).done);
                    i = !0
                  ) {
                    var d = u.value
                    o.processItem(d, r, e, t, s, l)
                  }
                } catch (e) {
                  ;(c = !0), (a = e)
                } finally {
                  try {
                    !i && f.return && f.return()
                  } finally {
                    if (c) throw a
                  }
                }
              }),
              (o.clearSelection = function() {
                var e = !0,
                  t = !1,
                  n = void 0
                try {
                  for (
                    var r, s = o.selectedItems.values()[Symbol.iterator]();
                    !(e = (r = s.next()).done);
                    e = !0
                  ) {
                    var l = r.value
                    l.setState({ selected: !1 }), o.selectedItems.delete(l)
                  }
                } catch (e) {
                  ;(t = !0), (n = e)
                } finally {
                  try {
                    !e && s.return && s.return()
                  } finally {
                    if (t) throw n
                  }
                }
                o.setState({ selectionMode: !1 }),
                  o.props.onSelectionFinish([].concat(h(o.selectedItems))),
                  o.props.onSelectionClear()
              }),
              (o.selectAll = function() {
                o.updateWhiteListNodes()
                var e = !0,
                  t = !1,
                  n = void 0
                try {
                  for (
                    var r, s = o.registry.values()[Symbol.iterator]();
                    !(e = (r = s.next()).done);
                    e = !0
                  ) {
                    var l = r.value
                    o.inIgnoreList(l.node) ||
                      l.state.selected ||
                      (l.setState({ selected: !0 }), o.selectedItems.add(l))
                  }
                } catch (e) {
                  ;(t = !0), (n = e)
                } finally {
                  try {
                    !e && s.return && s.return()
                  } finally {
                    if (t) throw n
                  }
                }
                o.setState({ selectionMode: !0 }),
                  o.props.onSelectionFinish([].concat(h(o.selectedItems)))
              }),
              (o.mouseDown = function(e) {
                if (!o.mouseDownStarted && !o.props.disabled)
                  if ((o.updateWhiteListNodes(), o.inIgnoreList(e.target))) o.mouseDownStarted = !1
                  else {
                    if (
                      (o.props.resetOnStart && o.clearSelection(),
                      (o.mouseDownStarted = !0),
                      (o.mouseUpStarted = !1),
                      (e = o.desktopEventCoords(e)),
                      !o.props.globalMouse && !(0, c.default)(e.target, o.selectableGroup))
                    ) {
                      var t = (0, u.default)(o.selectableGroup)
                      if (
                        !(0, f.default)(
                          {
                            top: t.top,
                            left: t.left,
                            bottom: t.offsetHeight,
                            right: t.offsetWidth
                          },
                          { top: e.pageY, left: e.pageX, offsetWidth: 0, offsetHeight: 0 }
                        )
                      )
                        return
                    }
                    o.updateRootBounds(),
                      o.updateRegistry(),
                      (o.mouseDownData = {
                        boxLeft: e.pageX,
                        boxTop: e.pageY,
                        scrollTop: o.scrollContainer.scrollTop,
                        scrollLeft: o.scrollContainer.scrollLeft,
                        target: e.target
                      }),
                      e.preventDefault(),
                      document.addEventListener('mousemove', o.openSelectbox),
                      document.addEventListener('touchmove', o.openSelectbox),
                      document.addEventListener('mouseup', o.mouseUp),
                      document.addEventListener('touchend', o.mouseUp)
                  }
              }),
              (o.mouseUp = function(e) {
                if (
                  !o.mouseUpStarted &&
                  ((o.mouseUpStarted = !0),
                  (o.mouseDownStarted = !1),
                  o.removeTempEventListeners(),
                  o.mouseDownData)
                ) {
                  var t = o.desktopEventCoords(e),
                    n = t.pageY,
                    r = t.pageX
                  if (!o.mouseMoved && (0, c.default)(t.target, o.rootNode)) o.handleClick(t, n, r)
                  else {
                    var s = !0,
                      l = !1,
                      i = void 0
                    try {
                      for (
                        var a, u = o.selectingItems.values()[Symbol.iterator]();
                        !(s = (a = u.next()).done);
                        s = !0
                      ) {
                        a.value.setState({ selected: !0, selecting: !1 })
                      }
                    } catch (e) {
                      ;(l = !0), (i = e)
                    } finally {
                      try {
                        !s && u.return && u.return()
                      } finally {
                        if (l) throw i
                      }
                    }
                    ;(o.selectedItems = new Set([].concat(h(o.selectingItems)))),
                      o.selectingItems.clear(),
                      1 === t.which &&
                        o.mouseDownData.target === t.target &&
                        o.preventEvent(t.target, 'click'),
                      o.selectbox.setState({ isBoxSelecting: !1, boxWidth: 0, boxHeight: 0 }),
                      o.props.onSelectionFinish(
                        [].concat(h(o.selectedItems)),
                        [].concat(h(o.deselectedItems))
                      )
                  }
                  o.deselectedItems.clear(),
                    o.selectedItems.clear(),
                    o.selectingItems.clear(),
                    o.toggleSelectionMode(),
                    o.cleanUp(),
                    (o.mouseMoved = !1)
                }
              }),
              (o.keyListener = function(e) {
                e.ctrlKey || e.metaKey || (27 === e.keyCode && o.clearSelection())
              }),
              (o.getGroupRef = function(e) {
                return (o.selectableGroup = e)
              }),
              (o.getSelectboxRef = function(e) {
                return (o.selectbox = e)
              }),
              (o.state = { selectionMode: !1 }),
              (o.mouseDownStarted = !1),
              (o.mouseMoveStarted = !1),
              (o.mouseUpStarted = !1),
              (o.mouseDownData = null),
              (o.registry = new Set()),
              (o.selectedItems = new Set()),
              (o.selectingItems = new Set()),
              (o.deselectedItems = new Set()),
              (o.ignoreCheckCache = new Map()),
              (o.ignoreList = o.props.ignoreList.concat([
                '.selectable-select-all',
                '.selectable-deselect-all'
              ])),
              o
            )
          }
          return (
            (function(e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' + typeof t
                )
              ;(e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
              })),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
            })(t, s.Component),
            r(t, [
              {
                key: 'getChildContext',
                value: function() {
                  var e = this
                  return {
                    selectable: {
                      register: this.registerSelectable,
                      unregister: this.unregisterSelectable,
                      selectAll: this.selectAll,
                      clearSelection: this.clearSelection,
                      getScrolledContainer: function() {
                        return e.scrollContainer
                      }
                    }
                  }
                }
              },
              {
                key: 'componentDidMount',
                value: function() {
                  ;(this.rootNode = this.selectableGroup),
                    (this.scrollContainer =
                      document.querySelector(this.props.scrollContainer) || this.rootNode),
                    this.rootNode.addEventListener('mousedown', this.mouseDown),
                    this.rootNode.addEventListener('touchstart', this.mouseDown),
                    this.props.deselectOnEsc &&
                      (document.addEventListener('keydown', this.keyListener),
                      document.addEventListener('keyup', this.keyListener))
                }
              },
              {
                key: 'componentWillUnmount',
                value: function() {
                  this.rootNode.removeEventListener('mousedown', this.mouseDown),
                    this.rootNode.removeEventListener('touchstart', this.mouseDown),
                    this.props.deselectOnEsc &&
                      (document.removeEventListener('keydown', this.keyListener),
                      document.removeEventListener('keyup', this.keyListener)),
                    this.removeTempEventListeners()
                }
              },
              {
                key: 'removeTempEventListeners',
                value: function() {
                  document.removeEventListener('mousemove', this.openSelectbox),
                    document.removeEventListener('touchmove', this.openSelectbox),
                    document.removeEventListener('mouseup', this.mouseUp),
                    document.removeEventListener('touchend', this.mouseUp)
                }
              },
              {
                key: 'updateRootBounds',
                value: function() {
                  ;(this.scrollBounds = this.scrollContainer.getBoundingClientRect()),
                    (this.maxScroll =
                      this.scrollContainer.scrollHeight - this.scrollContainer.clientHeight)
                }
              },
              {
                key: 'toggleSelectionMode',
                value: function() {
                  var e = this.selectedItems,
                    t = this.state.selectionMode
                  e.size && !t && this.setState({ selectionMode: !0 }),
                    !e.size && t && this.setState({ selectionMode: !1 })
                }
              },
              {
                key: 'processItem',
                value: function(e, t, o, n, r, s) {
                  if (this.inIgnoreList(e.node)) return null
                  var l = (0, f.default)(o, e.bounds, t, this.props.delta),
                    i = e.state,
                    c = i.selecting,
                    a = i.selected
                  if (n && l)
                    return (
                      a
                        ? (this.selectedItems.delete(e), this.deselectedItems.add(e))
                        : (this.selectedItems.add(e), this.deselectedItems.delete(e)),
                      e.setState({ selected: !a }),
                      (this.clickedItem = e)
                    )
                  if (!n && l) {
                    if (a && r && (!this.selectionStarted || s))
                      return (
                        e.setState({ selected: !1 }),
                        (e.deselected = !0),
                        (this.deselectionStarted = !0),
                        this.deselectedItems.add(e),
                        this.selectedItems.delete(e)
                      )
                    var u = s ? !e.deselected : !this.deselectionStarted
                    if (!c && !a && u)
                      return (
                        e.setState({ selecting: !0 }),
                        (this.selectionStarted = !0),
                        this.selectingItems.add(e),
                        this.deselectedItems.delete(e),
                        { updateSelecting: !0 }
                      )
                  }
                  return !n && !l && c && this.selectingItems.has(e)
                    ? (e.setState({ selecting: !1 }),
                      this.selectingItems.delete(e),
                      this.deselectedItems.add(e),
                      { updateSelecting: !0 })
                    : null
                }
              },
              {
                key: 'inIgnoreList',
                value: function(e) {
                  if (void 0 !== this.ignoreCheckCache.get(e)) return this.ignoreCheckCache.get(e)
                  var t = this.ignoreListNodes.some(function(t) {
                    return e === t || t.contains(e)
                  })
                  return this.ignoreCheckCache.set(e, t), t
                }
              },
              {
                key: 'updateWhiteListNodes',
                value: function() {
                  this.ignoreListNodes = [].concat(
                    h(document.querySelectorAll(this.ignoreList.join(', ')))
                  )
                }
              },
              {
                key: 'preventEvent',
                value: function(e, t) {
                  e.addEventListener(
                    t,
                    function o(n) {
                      e.removeEventListener(t, o, !0), n.preventDefault(), n.stopPropagation()
                    },
                    !0
                  )
                }
              },
              {
                key: 'handleClick',
                value: function(e, t, o) {
                  var n =
                    [].concat(h(e.target.classList || [])).indexOf(this.props.clickClassName) > -1
                  ;(this.props.allowClickWithoutSelected ||
                    this.selectedItems.size ||
                    n ||
                    this.ctrlPressed) &&
                    (this.selectItems(
                      { top: t, left: o, offsetWidth: 0, offsetHeight: 0 },
                      { click: !0 }
                    ),
                    this.props.onSelectionFinish(
                      [].concat(h(this.selectedItems)),
                      [].concat(h(this.deselectedItems))
                    ),
                    1 === e.which && this.preventEvent(e.target, 'click'),
                    (2 !== e.which && 3 !== e.which) || this.preventEvent(e.target, 'contextmenu'))
                }
              },
              {
                key: 'cleanUp',
                value: function() {
                  if (
                    ((this.deselectionStarted = !1),
                    (this.selectionStarted = !1),
                    this.props.mixedDeselect)
                  ) {
                    var e = !0,
                      t = !1,
                      o = void 0
                    try {
                      for (
                        var n, r = this.registry.values()[Symbol.iterator]();
                        !(e = (n = r.next()).done);
                        e = !0
                      ) {
                        n.value.deselected = !1
                      }
                    } catch (e) {
                      ;(t = !0), (o = e)
                    } finally {
                      try {
                        !e && r.return && r.return()
                      } finally {
                        if (t) throw o
                      }
                    }
                  }
                }
              },
              {
                key: 'desktopEventCoords',
                value: function(e) {
                  return (
                    (void 0 !== e.pageX && void 0 !== e.pageY) ||
                      (void 0 !== e.targetTouches[0] && void 0 !== e.targetTouches[0].pageX
                        ? ((e.pageX = e.targetTouches[0].pageX),
                          (e.pageY = e.targetTouches[0].pageY))
                        : void 0 !== e.changedTouches[0] &&
                          void 0 !== e.changedTouches[0].pageX &&
                          ((e.pageX = e.changedTouches[0].pageX),
                          (e.pageY = e.changedTouches[0].pageY))),
                    e
                  )
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = Object.assign({}, { position: 'relative' }, this.props.style)
                  return l.default.createElement(
                    this.props.component,
                    {
                      ref: this.getGroupRef,
                      style: e,
                      className:
                        this.props.className +
                        ' ' +
                        (this.state.selectionMode ? this.props.selectionModeClass : '')
                    },
                    l.default.createElement(d.default, {
                      ref: this.getSelectboxRef,
                      fixedPosition: this.props.fixedPosition,
                      className: this.props.selectboxClassName
                    }),
                    this.props.children
                  )
                }
              }
            ]),
            t
          )
        })()
      ;(v.defaultProps = {
        component: 'div',
        tolerance: 0,
        globalMouse: !1,
        ignoreList: [],
        scrollSpeed: 0.25,
        minimumSpeedFactor: 60,
        duringSelection: m,
        onSelectionFinish: m,
        onSelectionClear: m,
        allowClickWithoutSelected: !0,
        selectionModeClass: 'in-selection-mode',
        resetOnStart: !1,
        disabled: !1,
        deselectOnEsc: !0,
        delta: 1
      }),
        (v.childContextTypes = { selectable: i.object }),
        (t.default = v)
    },
    function(e, t, o) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.DeselectAll = t.SelectAll = t.createSelectable = t.SelectableGroup = void 0)
      var n = i(o(13)),
        r = i(o(5)),
        s = i(o(4)),
        l = i(o(3))
      function i(e) {
        return e && e.__esModule ? e : { default: e }
      }
      ;(t.SelectableGroup = n.default),
        (t.createSelectable = r.default),
        (t.SelectAll = s.default),
        (t.DeselectAll = l.default)
    }
  ])
})
//# sourceMappingURL=react-selectable-fast.js.map
