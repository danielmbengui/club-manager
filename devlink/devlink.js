/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

var CE = Object.create;
var mt = Object.defineProperty;
var PE = Object.getOwnPropertyDescriptor;
var NE = Object.getOwnPropertyNames;
var LE = Object.getPrototypeOf,
  DE = Object.prototype.hasOwnProperty;
var D = (e, t) => () => (e && (t = e((e = 0))), t);
var c = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
  B = (e, t) => {
    for (var r in t) mt(e, r, { get: t[r], enumerable: !0 });
  },
  Uo = (e, t, r, n) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let o of NE(t))
        !DE.call(e, o) &&
          o !== r &&
          mt(e, o, {
            get: () => t[o],
            enumerable: !(n = PE(t, o)) || n.enumerable,
          });
    return e;
  };
var C = (e, t, r) => (
    (r = e != null ? CE(LE(e)) : {}),
    Uo(
      t || !e || !e.__esModule
        ? mt(r, "default", { value: e, enumerable: !0 })
        : r,
      e
    )
  ),
  $ = (e) => Uo(mt({}, "__esModule", { value: !0 }), e);
var Pr = c((YD, Bo) => {
  var ME =
    typeof global == "object" && global && global.Object === Object && global;
  Bo.exports = ME;
});
var j = c((QD, Ho) => {
  var FE = Pr(),
    wE = typeof self == "object" && self && self.Object === Object && self,
    qE = FE || wE || Function("return this")();
  Ho.exports = qE;
});
var me = c(($D, Wo) => {
  var GE = j(),
    XE = GE.Symbol;
  Wo.exports = XE;
});
var zo = c((ZD, jo) => {
  var ko = me(),
    Ko = Object.prototype,
    VE = Ko.hasOwnProperty,
    UE = Ko.toString,
    Ke = ko ? ko.toStringTag : void 0;
  function BE(e) {
    var t = VE.call(e, Ke),
      r = e[Ke];
    try {
      e[Ke] = void 0;
      var n = !0;
    } catch {}
    var o = UE.call(e);
    return n && (t ? (e[Ke] = r) : delete e[Ke]), o;
  }
  jo.exports = BE;
});
var Qo = c((JD, Yo) => {
  var HE = Object.prototype,
    WE = HE.toString;
  function kE(e) {
    return WE.call(e);
  }
  Yo.exports = kE;
});
var ue = c((eM, Jo) => {
  var $o = me(),
    KE = zo(),
    jE = Qo(),
    zE = "[object Null]",
    YE = "[object Undefined]",
    Zo = $o ? $o.toStringTag : void 0;
  function QE(e) {
    return e == null
      ? e === void 0
        ? YE
        : zE
      : Zo && Zo in Object(e)
      ? KE(e)
      : jE(e);
  }
  Jo.exports = QE;
});
var Nr = c((tM, ei) => {
  function $E(e, t) {
    return function (r) {
      return e(t(r));
    };
  }
  ei.exports = $E;
});
var Lr = c((rM, ti) => {
  var ZE = Nr(),
    JE = ZE(Object.getPrototypeOf, Object);
  ti.exports = JE;
});
var ne = c((nM, ri) => {
  function eg(e) {
    return e != null && typeof e == "object";
  }
  ri.exports = eg;
});
var Dr = c((oM, oi) => {
  var tg = ue(),
    rg = Lr(),
    ng = ne(),
    og = "[object Object]",
    ig = Function.prototype,
    ag = Object.prototype,
    ni = ig.toString,
    sg = ag.hasOwnProperty,
    ug = ni.call(Object);
  function cg(e) {
    if (!ng(e) || tg(e) != og) return !1;
    var t = rg(e);
    if (t === null) return !0;
    var r = sg.call(t, "constructor") && t.constructor;
    return typeof r == "function" && r instanceof r && ni.call(r) == ug;
  }
  oi.exports = cg;
});
var ii = c((Mr) => {
  "use strict";
  Object.defineProperty(Mr, "__esModule", { value: !0 });
  Mr.default = lg;
  function lg(e) {
    var t,
      r = e.Symbol;
    return (
      typeof r == "function"
        ? r.observable
          ? (t = r.observable)
          : ((t = r("observable")), (r.observable = t))
        : (t = "@@observable"),
      t
    );
  }
});
var ai = c((wr, Fr) => {
  "use strict";
  Object.defineProperty(wr, "__esModule", { value: !0 });
  var fg = ii(),
    pg = dg(fg);
  function dg(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var he;
  typeof self < "u"
    ? (he = self)
    : typeof window < "u"
    ? (he = window)
    : typeof global < "u"
    ? (he = global)
    : typeof Fr < "u"
    ? (he = Fr)
    : (he = Function("return this")());
  var Eg = (0, pg.default)(he);
  wr.default = Eg;
});
var qr = c((je) => {
  "use strict";
  je.__esModule = !0;
  je.ActionTypes = void 0;
  je.default = li;
  var gg = Dr(),
    yg = ci(gg),
    _g = ai(),
    si = ci(_g);
  function ci(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var ui = (je.ActionTypes = { INIT: "@@redux/INIT" });
  function li(e, t, r) {
    var n;
    if (
      (typeof t == "function" && typeof r > "u" && ((r = t), (t = void 0)),
      typeof r < "u")
    ) {
      if (typeof r != "function")
        throw new Error("Expected the enhancer to be a function.");
      return r(li)(e, t);
    }
    if (typeof e != "function")
      throw new Error("Expected the reducer to be a function.");
    var o = e,
      i = t,
      a = [],
      s = a,
      u = !1;
    function l() {
      s === a && (s = a.slice());
    }
    function p() {
      return i;
    }
    function d(g) {
      if (typeof g != "function")
        throw new Error("Expected listener to be a function.");
      var I = !0;
      return (
        l(),
        s.push(g),
        function () {
          if (I) {
            (I = !1), l();
            var m = s.indexOf(g);
            s.splice(m, 1);
          }
        }
      );
    }
    function f(g) {
      if (!(0, yg.default)(g))
        throw new Error(
          "Actions must be plain objects. Use custom middleware for async actions."
        );
      if (typeof g.type > "u")
        throw new Error(
          'Actions may not have an undefined "type" property. Have you misspelled a constant?'
        );
      if (u) throw new Error("Reducers may not dispatch actions.");
      try {
        (u = !0), (i = o(i, g));
      } finally {
        u = !1;
      }
      for (var I = (a = s), _ = 0; _ < I.length; _++) I[_]();
      return g;
    }
    function E(g) {
      if (typeof g != "function")
        throw new Error("Expected the nextReducer to be a function.");
      (o = g), f({ type: ui.INIT });
    }
    function y() {
      var g,
        I = d;
      return (
        (g = {
          subscribe: function (m) {
            if (typeof m != "object")
              throw new TypeError("Expected the observer to be an object.");
            function v() {
              m.next && m.next(p());
            }
            v();
            var h = I(v);
            return { unsubscribe: h };
          },
        }),
        (g[si.default] = function () {
          return this;
        }),
        g
      );
    }
    return (
      f({ type: ui.INIT }),
      (n = { dispatch: f, subscribe: d, getState: p, replaceReducer: E }),
      (n[si.default] = y),
      n
    );
  }
});
var Xr = c((Gr) => {
  "use strict";
  Gr.__esModule = !0;
  Gr.default = Ig;
  function Ig(e) {
    typeof console < "u" &&
      typeof console.error == "function" &&
      console.error(e);
    try {
      throw new Error(e);
    } catch {}
  }
});
var di = c((Vr) => {
  "use strict";
  Vr.__esModule = !0;
  Vr.default = vg;
  var fi = qr(),
    Tg = Dr(),
    uM = pi(Tg),
    mg = Xr(),
    cM = pi(mg);
  function pi(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function hg(e, t) {
    var r = t && t.type,
      n = (r && '"' + r.toString() + '"') || "an action";
    return (
      "Given action " +
      n +
      ', reducer "' +
      e +
      '" returned undefined. To ignore an action, you must explicitly return the previous state.'
    );
  }
  function Ag(e) {
    Object.keys(e).forEach(function (t) {
      var r = e[t],
        n = r(void 0, { type: fi.ActionTypes.INIT });
      if (typeof n > "u")
        throw new Error(
          'Reducer "' +
            t +
            '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
        );
      var o =
        "@@redux/PROBE_UNKNOWN_ACTION_" +
        Math.random().toString(36).substring(7).split("").join(".");
      if (typeof r(void 0, { type: o }) > "u")
        throw new Error(
          'Reducer "' +
            t +
            '" returned undefined when probed with a random type. ' +
            ("Don't try to handle " +
              fi.ActionTypes.INIT +
              ' or other actions in "redux/*" ') +
            "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined."
        );
    });
  }
  function vg(e) {
    for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
      var o = t[n];
      typeof e[o] == "function" && (r[o] = e[o]);
    }
    var i = Object.keys(r);
    if (!1) var a;
    var s;
    try {
      Ag(r);
    } catch (u) {
      s = u;
    }
    return function () {
      var l =
          arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0],
        p = arguments[1];
      if (s) throw s;
      if (!1) var d;
      for (var f = !1, E = {}, y = 0; y < i.length; y++) {
        var g = i[y],
          I = r[g],
          _ = l[g],
          m = I(_, p);
        if (typeof m > "u") {
          var v = hg(g, p);
          throw new Error(v);
        }
        (E[g] = m), (f = f || m !== _);
      }
      return f ? E : l;
    };
  }
});
var gi = c((Ur) => {
  "use strict";
  Ur.__esModule = !0;
  Ur.default = Sg;
  function Ei(e, t) {
    return function () {
      return t(e.apply(void 0, arguments));
    };
  }
  function Sg(e, t) {
    if (typeof e == "function") return Ei(e, t);
    if (typeof e != "object" || e === null)
      throw new Error(
        "bindActionCreators expected an object or a function, instead received " +
          (e === null ? "null" : typeof e) +
          '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
      );
    for (var r = Object.keys(e), n = {}, o = 0; o < r.length; o++) {
      var i = r[o],
        a = e[i];
      typeof a == "function" && (n[i] = Ei(a, t));
    }
    return n;
  }
});
var Hr = c((Br) => {
  "use strict";
  Br.__esModule = !0;
  Br.default = Og;
  function Og() {
    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    if (t.length === 0)
      return function (i) {
        return i;
      };
    if (t.length === 1) return t[0];
    var n = t[t.length - 1],
      o = t.slice(0, -1);
    return function () {
      return o.reduceRight(function (i, a) {
        return a(i);
      }, n.apply(void 0, arguments));
    };
  }
});
var yi = c((Wr) => {
  "use strict";
  Wr.__esModule = !0;
  var Rg =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r)
          Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    };
  Wr.default = Pg;
  var bg = Hr(),
    xg = Cg(bg);
  function Cg(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function Pg() {
    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return function (n) {
      return function (o, i, a) {
        var s = n(o, i, a),
          u = s.dispatch,
          l = [],
          p = {
            getState: s.getState,
            dispatch: function (f) {
              return u(f);
            },
          };
        return (
          (l = t.map(function (d) {
            return d(p);
          })),
          (u = xg.default.apply(void 0, l)(s.dispatch)),
          Rg({}, s, { dispatch: u })
        );
      };
    };
  }
});
var kr = c((K) => {
  "use strict";
  K.__esModule = !0;
  K.compose =
    K.applyMiddleware =
    K.bindActionCreators =
    K.combineReducers =
    K.createStore =
      void 0;
  var Ng = qr(),
    Lg = Ae(Ng),
    Dg = di(),
    Mg = Ae(Dg),
    Fg = gi(),
    wg = Ae(Fg),
    qg = yi(),
    Gg = Ae(qg),
    Xg = Hr(),
    Vg = Ae(Xg),
    Ug = Xr(),
    EM = Ae(Ug);
  function Ae(e) {
    return e && e.__esModule ? e : { default: e };
  }
  K.createStore = Lg.default;
  K.combineReducers = Mg.default;
  K.bindActionCreators = wg.default;
  K.applyMiddleware = Gg.default;
  K.compose = Vg.default;
});
var z,
  Kr,
  Z,
  Bg,
  Hg,
  ht,
  Wg,
  jr = D(() => {
    "use strict";
    (z = {
      NAVBAR_OPEN: "NAVBAR_OPEN",
      NAVBAR_CLOSE: "NAVBAR_CLOSE",
      TAB_ACTIVE: "TAB_ACTIVE",
      TAB_INACTIVE: "TAB_INACTIVE",
      SLIDER_ACTIVE: "SLIDER_ACTIVE",
      SLIDER_INACTIVE: "SLIDER_INACTIVE",
      DROPDOWN_OPEN: "DROPDOWN_OPEN",
      DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
      MOUSE_CLICK: "MOUSE_CLICK",
      MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
      MOUSE_DOWN: "MOUSE_DOWN",
      MOUSE_UP: "MOUSE_UP",
      MOUSE_OVER: "MOUSE_OVER",
      MOUSE_OUT: "MOUSE_OUT",
      MOUSE_MOVE: "MOUSE_MOVE",
      MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
      SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
      SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
      SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
      ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
      ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
      PAGE_START: "PAGE_START",
      PAGE_FINISH: "PAGE_FINISH",
      PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
      PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
      PAGE_SCROLL: "PAGE_SCROLL",
    }),
      (Kr = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" }),
      (Z = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" }),
      (Bg = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" }),
      (Hg = {
        CHILDREN: "CHILDREN",
        SIBLINGS: "SIBLINGS",
        IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
      }),
      (ht = {
        FADE_EFFECT: "FADE_EFFECT",
        SLIDE_EFFECT: "SLIDE_EFFECT",
        GROW_EFFECT: "GROW_EFFECT",
        SHRINK_EFFECT: "SHRINK_EFFECT",
        SPIN_EFFECT: "SPIN_EFFECT",
        FLY_EFFECT: "FLY_EFFECT",
        POP_EFFECT: "POP_EFFECT",
        FLIP_EFFECT: "FLIP_EFFECT",
        JIGGLE_EFFECT: "JIGGLE_EFFECT",
        PULSE_EFFECT: "PULSE_EFFECT",
        DROP_EFFECT: "DROP_EFFECT",
        BLINK_EFFECT: "BLINK_EFFECT",
        BOUNCE_EFFECT: "BOUNCE_EFFECT",
        FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
        FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
        RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
        JELLO_EFFECT: "JELLO_EFFECT",
        GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
        SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
        PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
      }),
      (Wg = {
        LEFT: "LEFT",
        RIGHT: "RIGHT",
        BOTTOM: "BOTTOM",
        TOP: "TOP",
        BOTTOM_LEFT: "BOTTOM_LEFT",
        BOTTOM_RIGHT: "BOTTOM_RIGHT",
        TOP_RIGHT: "TOP_RIGHT",
        TOP_LEFT: "TOP_LEFT",
        CLOCKWISE: "CLOCKWISE",
        COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
      });
  });
var X,
  kg,
  At = D(() => {
    "use strict";
    (X = {
      TRANSFORM_MOVE: "TRANSFORM_MOVE",
      TRANSFORM_SCALE: "TRANSFORM_SCALE",
      TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
      TRANSFORM_SKEW: "TRANSFORM_SKEW",
      STYLE_OPACITY: "STYLE_OPACITY",
      STYLE_SIZE: "STYLE_SIZE",
      STYLE_FILTER: "STYLE_FILTER",
      STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
      STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
      STYLE_BORDER: "STYLE_BORDER",
      STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
      OBJECT_VALUE: "OBJECT_VALUE",
      PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
      PLUGIN_SPLINE: "PLUGIN_SPLINE",
      PLUGIN_RIVE: "PLUGIN_RIVE",
      PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
      GENERAL_DISPLAY: "GENERAL_DISPLAY",
      GENERAL_START_ACTION: "GENERAL_START_ACTION",
      GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
      GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
      GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
      GENERAL_LOOP: "GENERAL_LOOP",
      STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
    }),
      (kg = {
        ELEMENT: "ELEMENT",
        ELEMENT_CLASS: "ELEMENT_CLASS",
        TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
      });
  });
var Kg,
  _i = D(() => {
    "use strict";
    Kg = {
      MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
      MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
      MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
      SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
      SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
      MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
      PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
      PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
      PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
      NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
      DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
      ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
      TAB_INTERACTION: "TAB_INTERACTION",
      SLIDER_INTERACTION: "SLIDER_INTERACTION",
    };
  });
var jg,
  zg,
  Yg,
  Qg,
  $g,
  Zg,
  Jg,
  zr,
  Ii = D(() => {
    "use strict";
    At();
    ({
      TRANSFORM_MOVE: jg,
      TRANSFORM_SCALE: zg,
      TRANSFORM_ROTATE: Yg,
      TRANSFORM_SKEW: Qg,
      STYLE_SIZE: $g,
      STYLE_FILTER: Zg,
      STYLE_FONT_VARIATION: Jg,
    } = X),
      (zr = {
        [jg]: !0,
        [zg]: !0,
        [Yg]: !0,
        [Qg]: !0,
        [$g]: !0,
        [Zg]: !0,
        [Jg]: !0,
      });
  });
var w = {};
B(w, {
  IX2_ACTION_LIST_PLAYBACK_CHANGED: () => yy,
  IX2_ANIMATION_FRAME_CHANGED: () => ly,
  IX2_CLEAR_REQUESTED: () => sy,
  IX2_ELEMENT_STATE_CHANGED: () => gy,
  IX2_EVENT_LISTENER_ADDED: () => uy,
  IX2_EVENT_STATE_CHANGED: () => cy,
  IX2_INSTANCE_ADDED: () => py,
  IX2_INSTANCE_REMOVED: () => Ey,
  IX2_INSTANCE_STARTED: () => dy,
  IX2_MEDIA_QUERIES_DEFINED: () => Iy,
  IX2_PARAMETER_CHANGED: () => fy,
  IX2_PLAYBACK_REQUESTED: () => iy,
  IX2_PREVIEW_REQUESTED: () => oy,
  IX2_RAW_DATA_IMPORTED: () => ey,
  IX2_SESSION_INITIALIZED: () => ty,
  IX2_SESSION_STARTED: () => ry,
  IX2_SESSION_STOPPED: () => ny,
  IX2_STOP_REQUESTED: () => ay,
  IX2_TEST_FRAME_RENDERED: () => Ty,
  IX2_VIEWPORT_WIDTH_CHANGED: () => _y,
});
var ey,
  ty,
  ry,
  ny,
  oy,
  iy,
  ay,
  sy,
  uy,
  cy,
  ly,
  fy,
  py,
  dy,
  Ey,
  gy,
  yy,
  _y,
  Iy,
  Ty,
  Ti = D(() => {
    "use strict";
    (ey = "IX2_RAW_DATA_IMPORTED"),
      (ty = "IX2_SESSION_INITIALIZED"),
      (ry = "IX2_SESSION_STARTED"),
      (ny = "IX2_SESSION_STOPPED"),
      (oy = "IX2_PREVIEW_REQUESTED"),
      (iy = "IX2_PLAYBACK_REQUESTED"),
      (ay = "IX2_STOP_REQUESTED"),
      (sy = "IX2_CLEAR_REQUESTED"),
      (uy = "IX2_EVENT_LISTENER_ADDED"),
      (cy = "IX2_EVENT_STATE_CHANGED"),
      (ly = "IX2_ANIMATION_FRAME_CHANGED"),
      (fy = "IX2_PARAMETER_CHANGED"),
      (py = "IX2_INSTANCE_ADDED"),
      (dy = "IX2_INSTANCE_STARTED"),
      (Ey = "IX2_INSTANCE_REMOVED"),
      (gy = "IX2_ELEMENT_STATE_CHANGED"),
      (yy = "IX2_ACTION_LIST_PLAYBACK_CHANGED"),
      (_y = "IX2_VIEWPORT_WIDTH_CHANGED"),
      (Iy = "IX2_MEDIA_QUERIES_DEFINED"),
      (Ty = "IX2_TEST_FRAME_RENDERED");
  });
var G = {};
B(G, {
  ABSTRACT_NODE: () => __,
  AUTO: () => a_,
  BACKGROUND: () => e_,
  BACKGROUND_COLOR: () => Jy,
  BAR_DELIMITER: () => c_,
  BORDER_COLOR: () => t_,
  BOUNDARY_SELECTOR: () => Sy,
  CHILDREN: () => l_,
  COLON_DELIMITER: () => u_,
  COLOR: () => r_,
  COMMA_DELIMITER: () => s_,
  CONFIG_UNIT: () => Ly,
  CONFIG_VALUE: () => xy,
  CONFIG_X_UNIT: () => Cy,
  CONFIG_X_VALUE: () => Oy,
  CONFIG_Y_UNIT: () => Py,
  CONFIG_Y_VALUE: () => Ry,
  CONFIG_Z_UNIT: () => Ny,
  CONFIG_Z_VALUE: () => by,
  DISPLAY: () => n_,
  FILTER: () => Yy,
  FLEX: () => o_,
  FONT_VARIATION_SETTINGS: () => Qy,
  HEIGHT: () => Zy,
  HTML_ELEMENT: () => g_,
  IMMEDIATE_CHILDREN: () => f_,
  IX2_ID_DELIMITER: () => my,
  OPACITY: () => zy,
  PARENT: () => d_,
  PLAIN_OBJECT: () => y_,
  PRESERVE_3D: () => E_,
  RENDER_GENERAL: () => T_,
  RENDER_PLUGIN: () => h_,
  RENDER_STYLE: () => m_,
  RENDER_TRANSFORM: () => I_,
  ROTATE_X: () => By,
  ROTATE_Y: () => Hy,
  ROTATE_Z: () => Wy,
  SCALE_3D: () => Uy,
  SCALE_X: () => Gy,
  SCALE_Y: () => Xy,
  SCALE_Z: () => Vy,
  SIBLINGS: () => p_,
  SKEW: () => ky,
  SKEW_X: () => Ky,
  SKEW_Y: () => jy,
  TRANSFORM: () => Dy,
  TRANSLATE_3D: () => qy,
  TRANSLATE_X: () => My,
  TRANSLATE_Y: () => Fy,
  TRANSLATE_Z: () => wy,
  WF_PAGE: () => hy,
  WIDTH: () => $y,
  WILL_CHANGE: () => i_,
  W_MOD_IX: () => vy,
  W_MOD_JS: () => Ay,
});
var my,
  hy,
  Ay,
  vy,
  Sy,
  Oy,
  Ry,
  by,
  xy,
  Cy,
  Py,
  Ny,
  Ly,
  Dy,
  My,
  Fy,
  wy,
  qy,
  Gy,
  Xy,
  Vy,
  Uy,
  By,
  Hy,
  Wy,
  ky,
  Ky,
  jy,
  zy,
  Yy,
  Qy,
  $y,
  Zy,
  Jy,
  e_,
  t_,
  r_,
  n_,
  o_,
  i_,
  a_,
  s_,
  u_,
  c_,
  l_,
  f_,
  p_,
  d_,
  E_,
  g_,
  y_,
  __,
  I_,
  T_,
  m_,
  h_,
  mi = D(() => {
    "use strict";
    (my = "|"),
      (hy = "data-wf-page"),
      (Ay = "w-mod-js"),
      (vy = "w-mod-ix"),
      (Sy = ".w-dyn-item"),
      (Oy = "xValue"),
      (Ry = "yValue"),
      (by = "zValue"),
      (xy = "value"),
      (Cy = "xUnit"),
      (Py = "yUnit"),
      (Ny = "zUnit"),
      (Ly = "unit"),
      (Dy = "transform"),
      (My = "translateX"),
      (Fy = "translateY"),
      (wy = "translateZ"),
      (qy = "translate3d"),
      (Gy = "scaleX"),
      (Xy = "scaleY"),
      (Vy = "scaleZ"),
      (Uy = "scale3d"),
      (By = "rotateX"),
      (Hy = "rotateY"),
      (Wy = "rotateZ"),
      (ky = "skew"),
      (Ky = "skewX"),
      (jy = "skewY"),
      (zy = "opacity"),
      (Yy = "filter"),
      (Qy = "font-variation-settings"),
      ($y = "width"),
      (Zy = "height"),
      (Jy = "backgroundColor"),
      (e_ = "background"),
      (t_ = "borderColor"),
      (r_ = "color"),
      (n_ = "display"),
      (o_ = "flex"),
      (i_ = "willChange"),
      (a_ = "AUTO"),
      (s_ = ","),
      (u_ = ":"),
      (c_ = "|"),
      (l_ = "CHILDREN"),
      (f_ = "IMMEDIATE_CHILDREN"),
      (p_ = "SIBLINGS"),
      (d_ = "PARENT"),
      (E_ = "preserve-3d"),
      (g_ = "HTML_ELEMENT"),
      (y_ = "PLAIN_OBJECT"),
      (__ = "ABSTRACT_NODE"),
      (I_ = "RENDER_TRANSFORM"),
      (T_ = "RENDER_GENERAL"),
      (m_ = "RENDER_STYLE"),
      (h_ = "RENDER_PLUGIN");
  });
var hi = {};
B(hi, {
  ActionAppliesTo: () => kg,
  ActionTypeConsts: () => X,
  EventAppliesTo: () => Kr,
  EventBasedOn: () => Z,
  EventContinuousMouseAxes: () => Bg,
  EventLimitAffectedElements: () => Hg,
  EventTypeConsts: () => z,
  IX2EngineActionTypes: () => w,
  IX2EngineConstants: () => G,
  InteractionTypeConsts: () => Kg,
  QuickEffectDirectionConsts: () => Wg,
  QuickEffectIds: () => ht,
  ReducedMotionTypes: () => zr,
});
var H = D(() => {
  "use strict";
  jr();
  At();
  _i();
  Ii();
  Ti();
  mi();
  At();
  jr();
});
var A_,
  Ai,
  vi = D(() => {
    "use strict";
    H();
    ({ IX2_RAW_DATA_IMPORTED: A_ } = w),
      (Ai = (e = Object.freeze({}), t) => {
        switch (t.type) {
          case A_:
            return t.payload.ixData || Object.freeze({});
          default:
            return e;
        }
      });
  });
var ve = c((M) => {
  "use strict";
  Object.defineProperty(M, "__esModule", { value: !0 });
  var v_ =
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? function (e) {
          return typeof e;
        }
      : function (e) {
          return e &&
            typeof Symbol == "function" &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? "symbol"
            : typeof e;
        };
  M.clone = St;
  M.addLast = Ri;
  M.addFirst = bi;
  M.removeLast = xi;
  M.removeFirst = Ci;
  M.insert = Pi;
  M.removeAt = Ni;
  M.replaceAt = Li;
  M.getIn = Ot;
  M.set = Rt;
  M.setIn = bt;
  M.update = Mi;
  M.updateIn = Fi;
  M.merge = wi;
  M.mergeDeep = qi;
  M.mergeIn = Gi;
  M.omit = Xi;
  M.addDefaults = Vi;
  var Si = "INVALID_ARGS";
  function Oi(e) {
    throw new Error(e);
  }
  function Yr(e) {
    var t = Object.keys(e);
    return Object.getOwnPropertySymbols
      ? t.concat(Object.getOwnPropertySymbols(e))
      : t;
  }
  var S_ = {}.hasOwnProperty;
  function St(e) {
    if (Array.isArray(e)) return e.slice();
    for (var t = Yr(e), r = {}, n = 0; n < t.length; n++) {
      var o = t[n];
      r[o] = e[o];
    }
    return r;
  }
  function W(e, t, r) {
    var n = r;
    n == null && Oi(Si);
    for (
      var o = !1, i = arguments.length, a = Array(i > 3 ? i - 3 : 0), s = 3;
      s < i;
      s++
    )
      a[s - 3] = arguments[s];
    for (var u = 0; u < a.length; u++) {
      var l = a[u];
      if (l != null) {
        var p = Yr(l);
        if (p.length)
          for (var d = 0; d <= p.length; d++) {
            var f = p[d];
            if (!(e && n[f] !== void 0)) {
              var E = l[f];
              t && vt(n[f]) && vt(E) && (E = W(e, t, n[f], E)),
                !(E === void 0 || E === n[f]) &&
                  (o || ((o = !0), (n = St(n))), (n[f] = E));
            }
          }
      }
    }
    return n;
  }
  function vt(e) {
    var t = typeof e > "u" ? "undefined" : v_(e);
    return e != null && (t === "object" || t === "function");
  }
  function Ri(e, t) {
    return Array.isArray(t) ? e.concat(t) : e.concat([t]);
  }
  function bi(e, t) {
    return Array.isArray(t) ? t.concat(e) : [t].concat(e);
  }
  function xi(e) {
    return e.length ? e.slice(0, e.length - 1) : e;
  }
  function Ci(e) {
    return e.length ? e.slice(1) : e;
  }
  function Pi(e, t, r) {
    return e
      .slice(0, t)
      .concat(Array.isArray(r) ? r : [r])
      .concat(e.slice(t));
  }
  function Ni(e, t) {
    return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1));
  }
  function Li(e, t, r) {
    if (e[t] === r) return e;
    for (var n = e.length, o = Array(n), i = 0; i < n; i++) o[i] = e[i];
    return (o[t] = r), o;
  }
  function Ot(e, t) {
    if ((!Array.isArray(t) && Oi(Si), e != null)) {
      for (var r = e, n = 0; n < t.length; n++) {
        var o = t[n];
        if (((r = r?.[o]), r === void 0)) return r;
      }
      return r;
    }
  }
  function Rt(e, t, r) {
    var n = typeof t == "number" ? [] : {},
      o = e ?? n;
    if (o[t] === r) return o;
    var i = St(o);
    return (i[t] = r), i;
  }
  function Di(e, t, r, n) {
    var o = void 0,
      i = t[n];
    if (n === t.length - 1) o = r;
    else {
      var a = vt(e) && vt(e[i]) ? e[i] : typeof t[n + 1] == "number" ? [] : {};
      o = Di(a, t, r, n + 1);
    }
    return Rt(e, i, o);
  }
  function bt(e, t, r) {
    return t.length ? Di(e, t, r, 0) : r;
  }
  function Mi(e, t, r) {
    var n = e?.[t],
      o = r(n);
    return Rt(e, t, o);
  }
  function Fi(e, t, r) {
    var n = Ot(e, t),
      o = r(n);
    return bt(e, t, o);
  }
  function wi(e, t, r, n, o, i) {
    for (
      var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
      u < a;
      u++
    )
      s[u - 6] = arguments[u];
    return s.length
      ? W.call.apply(W, [null, !1, !1, e, t, r, n, o, i].concat(s))
      : W(!1, !1, e, t, r, n, o, i);
  }
  function qi(e, t, r, n, o, i) {
    for (
      var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
      u < a;
      u++
    )
      s[u - 6] = arguments[u];
    return s.length
      ? W.call.apply(W, [null, !1, !0, e, t, r, n, o, i].concat(s))
      : W(!1, !0, e, t, r, n, o, i);
  }
  function Gi(e, t, r, n, o, i, a) {
    var s = Ot(e, t);
    s == null && (s = {});
    for (
      var u = void 0, l = arguments.length, p = Array(l > 7 ? l - 7 : 0), d = 7;
      d < l;
      d++
    )
      p[d - 7] = arguments[d];
    return (
      p.length
        ? (u = W.call.apply(W, [null, !1, !1, s, r, n, o, i, a].concat(p)))
        : (u = W(!1, !1, s, r, n, o, i, a)),
      bt(e, t, u)
    );
  }
  function Xi(e, t) {
    for (var r = Array.isArray(t) ? t : [t], n = !1, o = 0; o < r.length; o++)
      if (S_.call(e, r[o])) {
        n = !0;
        break;
      }
    if (!n) return e;
    for (var i = {}, a = Yr(e), s = 0; s < a.length; s++) {
      var u = a[s];
      r.indexOf(u) >= 0 || (i[u] = e[u]);
    }
    return i;
  }
  function Vi(e, t, r, n, o, i) {
    for (
      var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
      u < a;
      u++
    )
      s[u - 6] = arguments[u];
    return s.length
      ? W.call.apply(W, [null, !0, !1, e, t, r, n, o, i].concat(s))
      : W(!0, !1, e, t, r, n, o, i);
  }
  var O_ = {
    clone: St,
    addLast: Ri,
    addFirst: bi,
    removeLast: xi,
    removeFirst: Ci,
    insert: Pi,
    removeAt: Ni,
    replaceAt: Li,
    getIn: Ot,
    set: Rt,
    setIn: bt,
    update: Mi,
    updateIn: Fi,
    merge: wi,
    mergeDeep: qi,
    mergeIn: Gi,
    omit: Xi,
    addDefaults: Vi,
  };
  M.default = O_;
});
var Bi,
  R_,
  b_,
  x_,
  C_,
  P_,
  Ui,
  Hi,
  Wi = D(() => {
    "use strict";
    H();
    (Bi = C(ve())),
      ({
        IX2_PREVIEW_REQUESTED: R_,
        IX2_PLAYBACK_REQUESTED: b_,
        IX2_STOP_REQUESTED: x_,
        IX2_CLEAR_REQUESTED: C_,
      } = w),
      (P_ = { preview: {}, playback: {}, stop: {}, clear: {} }),
      (Ui = Object.create(null, {
        [R_]: { value: "preview" },
        [b_]: { value: "playback" },
        [x_]: { value: "stop" },
        [C_]: { value: "clear" },
      })),
      (Hi = (e = P_, t) => {
        if (t.type in Ui) {
          let r = [Ui[t.type]];
          return (0, Bi.setIn)(e, [r], { ...t.payload });
        }
        return e;
      });
  });
var V,
  N_,
  L_,
  D_,
  M_,
  F_,
  w_,
  q_,
  G_,
  X_,
  V_,
  ki,
  U_,
  Ki,
  ji = D(() => {
    "use strict";
    H();
    (V = C(ve())),
      ({
        IX2_SESSION_INITIALIZED: N_,
        IX2_SESSION_STARTED: L_,
        IX2_TEST_FRAME_RENDERED: D_,
        IX2_SESSION_STOPPED: M_,
        IX2_EVENT_LISTENER_ADDED: F_,
        IX2_EVENT_STATE_CHANGED: w_,
        IX2_ANIMATION_FRAME_CHANGED: q_,
        IX2_ACTION_LIST_PLAYBACK_CHANGED: G_,
        IX2_VIEWPORT_WIDTH_CHANGED: X_,
        IX2_MEDIA_QUERIES_DEFINED: V_,
      } = w),
      (ki = {
        active: !1,
        tick: 0,
        eventListeners: [],
        eventState: {},
        playbackState: {},
        viewportWidth: 0,
        mediaQueryKey: null,
        hasBoundaryNodes: !1,
        hasDefinedMediaQueries: !1,
        reducedMotion: !1,
      }),
      (U_ = 20),
      (Ki = (e = ki, t) => {
        switch (t.type) {
          case N_: {
            let { hasBoundaryNodes: r, reducedMotion: n } = t.payload;
            return (0, V.merge)(e, { hasBoundaryNodes: r, reducedMotion: n });
          }
          case L_:
            return (0, V.set)(e, "active", !0);
          case D_: {
            let {
              payload: { step: r = U_ },
            } = t;
            return (0, V.set)(e, "tick", e.tick + r);
          }
          case M_:
            return ki;
          case q_: {
            let {
              payload: { now: r },
            } = t;
            return (0, V.set)(e, "tick", r);
          }
          case F_: {
            let r = (0, V.addLast)(e.eventListeners, t.payload);
            return (0, V.set)(e, "eventListeners", r);
          }
          case w_: {
            let { stateKey: r, newState: n } = t.payload;
            return (0, V.setIn)(e, ["eventState", r], n);
          }
          case G_: {
            let { actionListId: r, isPlaying: n } = t.payload;
            return (0, V.setIn)(e, ["playbackState", r], n);
          }
          case X_: {
            let { width: r, mediaQueries: n } = t.payload,
              o = n.length,
              i = null;
            for (let a = 0; a < o; a++) {
              let { key: s, min: u, max: l } = n[a];
              if (r >= u && r <= l) {
                i = s;
                break;
              }
            }
            return (0, V.merge)(e, { viewportWidth: r, mediaQueryKey: i });
          }
          case V_:
            return (0, V.set)(e, "hasDefinedMediaQueries", !0);
          default:
            return e;
        }
      });
  });
var Yi = c((MM, zi) => {
  function B_() {
    (this.__data__ = []), (this.size = 0);
  }
  zi.exports = B_;
});
var xt = c((FM, Qi) => {
  function H_(e, t) {
    return e === t || (e !== e && t !== t);
  }
  Qi.exports = H_;
});
var ze = c((wM, $i) => {
  var W_ = xt();
  function k_(e, t) {
    for (var r = e.length; r--; ) if (W_(e[r][0], t)) return r;
    return -1;
  }
  $i.exports = k_;
});
var Ji = c((qM, Zi) => {
  var K_ = ze(),
    j_ = Array.prototype,
    z_ = j_.splice;
  function Y_(e) {
    var t = this.__data__,
      r = K_(t, e);
    if (r < 0) return !1;
    var n = t.length - 1;
    return r == n ? t.pop() : z_.call(t, r, 1), --this.size, !0;
  }
  Zi.exports = Y_;
});
var ta = c((GM, ea) => {
  var Q_ = ze();
  function $_(e) {
    var t = this.__data__,
      r = Q_(t, e);
    return r < 0 ? void 0 : t[r][1];
  }
  ea.exports = $_;
});
var na = c((XM, ra) => {
  var Z_ = ze();
  function J_(e) {
    return Z_(this.__data__, e) > -1;
  }
  ra.exports = J_;
});
var ia = c((VM, oa) => {
  var eI = ze();
  function tI(e, t) {
    var r = this.__data__,
      n = eI(r, e);
    return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
  }
  oa.exports = tI;
});
var Ye = c((UM, aa) => {
  var rI = Yi(),
    nI = Ji(),
    oI = ta(),
    iI = na(),
    aI = ia();
  function Se(e) {
    var t = -1,
      r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
      var n = e[t];
      this.set(n[0], n[1]);
    }
  }
  Se.prototype.clear = rI;
  Se.prototype.delete = nI;
  Se.prototype.get = oI;
  Se.prototype.has = iI;
  Se.prototype.set = aI;
  aa.exports = Se;
});
var ua = c((BM, sa) => {
  var sI = Ye();
  function uI() {
    (this.__data__ = new sI()), (this.size = 0);
  }
  sa.exports = uI;
});
var la = c((HM, ca) => {
  function cI(e) {
    var t = this.__data__,
      r = t.delete(e);
    return (this.size = t.size), r;
  }
  ca.exports = cI;
});
var pa = c((WM, fa) => {
  function lI(e) {
    return this.__data__.get(e);
  }
  fa.exports = lI;
});
var Ea = c((kM, da) => {
  function fI(e) {
    return this.__data__.has(e);
  }
  da.exports = fI;
});
var J = c((KM, ga) => {
  function pI(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function");
  }
  ga.exports = pI;
});
var Qr = c((jM, ya) => {
  var dI = ue(),
    EI = J(),
    gI = "[object AsyncFunction]",
    yI = "[object Function]",
    _I = "[object GeneratorFunction]",
    II = "[object Proxy]";
  function TI(e) {
    if (!EI(e)) return !1;
    var t = dI(e);
    return t == yI || t == _I || t == gI || t == II;
  }
  ya.exports = TI;
});
var Ia = c((zM, _a) => {
  var mI = j(),
    hI = mI["__core-js_shared__"];
  _a.exports = hI;
});
var ha = c((YM, ma) => {
  var $r = Ia(),
    Ta = (function () {
      var e = /[^.]+$/.exec(($r && $r.keys && $r.keys.IE_PROTO) || "");
      return e ? "Symbol(src)_1." + e : "";
    })();
  function AI(e) {
    return !!Ta && Ta in e;
  }
  ma.exports = AI;
});
var Zr = c((QM, Aa) => {
  var vI = Function.prototype,
    SI = vI.toString;
  function OI(e) {
    if (e != null) {
      try {
        return SI.call(e);
      } catch {}
      try {
        return e + "";
      } catch {}
    }
    return "";
  }
  Aa.exports = OI;
});
var Sa = c(($M, va) => {
  var RI = Qr(),
    bI = ha(),
    xI = J(),
    CI = Zr(),
    PI = /[\\^$.*+?()[\]{}|]/g,
    NI = /^\[object .+?Constructor\]$/,
    LI = Function.prototype,
    DI = Object.prototype,
    MI = LI.toString,
    FI = DI.hasOwnProperty,
    wI = RegExp(
      "^" +
        MI.call(FI)
          .replace(PI, "\\$&")
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            "$1.*?"
          ) +
        "$"
    );
  function qI(e) {
    if (!xI(e) || bI(e)) return !1;
    var t = RI(e) ? wI : NI;
    return t.test(CI(e));
  }
  va.exports = qI;
});
var Ra = c((ZM, Oa) => {
  function GI(e, t) {
    return e?.[t];
  }
  Oa.exports = GI;
});
var ce = c((JM, ba) => {
  var XI = Sa(),
    VI = Ra();
  function UI(e, t) {
    var r = VI(e, t);
    return XI(r) ? r : void 0;
  }
  ba.exports = UI;
});
var Ct = c((eF, xa) => {
  var BI = ce(),
    HI = j(),
    WI = BI(HI, "Map");
  xa.exports = WI;
});
var Qe = c((tF, Ca) => {
  var kI = ce(),
    KI = kI(Object, "create");
  Ca.exports = KI;
});
var La = c((rF, Na) => {
  var Pa = Qe();
  function jI() {
    (this.__data__ = Pa ? Pa(null) : {}), (this.size = 0);
  }
  Na.exports = jI;
});
var Ma = c((nF, Da) => {
  function zI(e) {
    var t = this.has(e) && delete this.__data__[e];
    return (this.size -= t ? 1 : 0), t;
  }
  Da.exports = zI;
});
var wa = c((oF, Fa) => {
  var YI = Qe(),
    QI = "__lodash_hash_undefined__",
    $I = Object.prototype,
    ZI = $I.hasOwnProperty;
  function JI(e) {
    var t = this.__data__;
    if (YI) {
      var r = t[e];
      return r === QI ? void 0 : r;
    }
    return ZI.call(t, e) ? t[e] : void 0;
  }
  Fa.exports = JI;
});
var Ga = c((iF, qa) => {
  var eT = Qe(),
    tT = Object.prototype,
    rT = tT.hasOwnProperty;
  function nT(e) {
    var t = this.__data__;
    return eT ? t[e] !== void 0 : rT.call(t, e);
  }
  qa.exports = nT;
});
var Va = c((aF, Xa) => {
  var oT = Qe(),
    iT = "__lodash_hash_undefined__";
  function aT(e, t) {
    var r = this.__data__;
    return (
      (this.size += this.has(e) ? 0 : 1),
      (r[e] = oT && t === void 0 ? iT : t),
      this
    );
  }
  Xa.exports = aT;
});
var Ba = c((sF, Ua) => {
  var sT = La(),
    uT = Ma(),
    cT = wa(),
    lT = Ga(),
    fT = Va();
  function Oe(e) {
    var t = -1,
      r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
      var n = e[t];
      this.set(n[0], n[1]);
    }
  }
  Oe.prototype.clear = sT;
  Oe.prototype.delete = uT;
  Oe.prototype.get = cT;
  Oe.prototype.has = lT;
  Oe.prototype.set = fT;
  Ua.exports = Oe;
});
var ka = c((uF, Wa) => {
  var Ha = Ba(),
    pT = Ye(),
    dT = Ct();
  function ET() {
    (this.size = 0),
      (this.__data__ = {
        hash: new Ha(),
        map: new (dT || pT)(),
        string: new Ha(),
      });
  }
  Wa.exports = ET;
});
var ja = c((cF, Ka) => {
  function gT(e) {
    var t = typeof e;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean"
      ? e !== "__proto__"
      : e === null;
  }
  Ka.exports = gT;
});
var $e = c((lF, za) => {
  var yT = ja();
  function _T(e, t) {
    var r = e.__data__;
    return yT(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
  }
  za.exports = _T;
});
var Qa = c((fF, Ya) => {
  var IT = $e();
  function TT(e) {
    var t = IT(this, e).delete(e);
    return (this.size -= t ? 1 : 0), t;
  }
  Ya.exports = TT;
});
var Za = c((pF, $a) => {
  var mT = $e();
  function hT(e) {
    return mT(this, e).get(e);
  }
  $a.exports = hT;
});
var es = c((dF, Ja) => {
  var AT = $e();
  function vT(e) {
    return AT(this, e).has(e);
  }
  Ja.exports = vT;
});
var rs = c((EF, ts) => {
  var ST = $e();
  function OT(e, t) {
    var r = ST(this, e),
      n = r.size;
    return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
  }
  ts.exports = OT;
});
var Pt = c((gF, ns) => {
  var RT = ka(),
    bT = Qa(),
    xT = Za(),
    CT = es(),
    PT = rs();
  function Re(e) {
    var t = -1,
      r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
      var n = e[t];
      this.set(n[0], n[1]);
    }
  }
  Re.prototype.clear = RT;
  Re.prototype.delete = bT;
  Re.prototype.get = xT;
  Re.prototype.has = CT;
  Re.prototype.set = PT;
  ns.exports = Re;
});
var is = c((yF, os) => {
  var NT = Ye(),
    LT = Ct(),
    DT = Pt(),
    MT = 200;
  function FT(e, t) {
    var r = this.__data__;
    if (r instanceof NT) {
      var n = r.__data__;
      if (!LT || n.length < MT - 1)
        return n.push([e, t]), (this.size = ++r.size), this;
      r = this.__data__ = new DT(n);
    }
    return r.set(e, t), (this.size = r.size), this;
  }
  os.exports = FT;
});
var Jr = c((_F, as) => {
  var wT = Ye(),
    qT = ua(),
    GT = la(),
    XT = pa(),
    VT = Ea(),
    UT = is();
  function be(e) {
    var t = (this.__data__ = new wT(e));
    this.size = t.size;
  }
  be.prototype.clear = qT;
  be.prototype.delete = GT;
  be.prototype.get = XT;
  be.prototype.has = VT;
  be.prototype.set = UT;
  as.exports = be;
});
var us = c((IF, ss) => {
  var BT = "__lodash_hash_undefined__";
  function HT(e) {
    return this.__data__.set(e, BT), this;
  }
  ss.exports = HT;
});
var ls = c((TF, cs) => {
  function WT(e) {
    return this.__data__.has(e);
  }
  cs.exports = WT;
});
var ps = c((mF, fs) => {
  var kT = Pt(),
    KT = us(),
    jT = ls();
  function Nt(e) {
    var t = -1,
      r = e == null ? 0 : e.length;
    for (this.__data__ = new kT(); ++t < r; ) this.add(e[t]);
  }
  Nt.prototype.add = Nt.prototype.push = KT;
  Nt.prototype.has = jT;
  fs.exports = Nt;
});
var Es = c((hF, ds) => {
  function zT(e, t) {
    for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
      if (t(e[r], r, e)) return !0;
    return !1;
  }
  ds.exports = zT;
});
var ys = c((AF, gs) => {
  function YT(e, t) {
    return e.has(t);
  }
  gs.exports = YT;
});
var en = c((vF, _s) => {
  var QT = ps(),
    $T = Es(),
    ZT = ys(),
    JT = 1,
    em = 2;
  function tm(e, t, r, n, o, i) {
    var a = r & JT,
      s = e.length,
      u = t.length;
    if (s != u && !(a && u > s)) return !1;
    var l = i.get(e),
      p = i.get(t);
    if (l && p) return l == t && p == e;
    var d = -1,
      f = !0,
      E = r & em ? new QT() : void 0;
    for (i.set(e, t), i.set(t, e); ++d < s; ) {
      var y = e[d],
        g = t[d];
      if (n) var I = a ? n(g, y, d, t, e, i) : n(y, g, d, e, t, i);
      if (I !== void 0) {
        if (I) continue;
        f = !1;
        break;
      }
      if (E) {
        if (
          !$T(t, function (_, m) {
            if (!ZT(E, m) && (y === _ || o(y, _, r, n, i))) return E.push(m);
          })
        ) {
          f = !1;
          break;
        }
      } else if (!(y === g || o(y, g, r, n, i))) {
        f = !1;
        break;
      }
    }
    return i.delete(e), i.delete(t), f;
  }
  _s.exports = tm;
});
var Ts = c((SF, Is) => {
  var rm = j(),
    nm = rm.Uint8Array;
  Is.exports = nm;
});
var hs = c((OF, ms) => {
  function om(e) {
    var t = -1,
      r = Array(e.size);
    return (
      e.forEach(function (n, o) {
        r[++t] = [o, n];
      }),
      r
    );
  }
  ms.exports = om;
});
var vs = c((RF, As) => {
  function im(e) {
    var t = -1,
      r = Array(e.size);
    return (
      e.forEach(function (n) {
        r[++t] = n;
      }),
      r
    );
  }
  As.exports = im;
});
var xs = c((bF, bs) => {
  var Ss = me(),
    Os = Ts(),
    am = xt(),
    sm = en(),
    um = hs(),
    cm = vs(),
    lm = 1,
    fm = 2,
    pm = "[object Boolean]",
    dm = "[object Date]",
    Em = "[object Error]",
    gm = "[object Map]",
    ym = "[object Number]",
    _m = "[object RegExp]",
    Im = "[object Set]",
    Tm = "[object String]",
    mm = "[object Symbol]",
    hm = "[object ArrayBuffer]",
    Am = "[object DataView]",
    Rs = Ss ? Ss.prototype : void 0,
    tn = Rs ? Rs.valueOf : void 0;
  function vm(e, t, r, n, o, i, a) {
    switch (r) {
      case Am:
        if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
          return !1;
        (e = e.buffer), (t = t.buffer);
      case hm:
        return !(e.byteLength != t.byteLength || !i(new Os(e), new Os(t)));
      case pm:
      case dm:
      case ym:
        return am(+e, +t);
      case Em:
        return e.name == t.name && e.message == t.message;
      case _m:
      case Tm:
        return e == t + "";
      case gm:
        var s = um;
      case Im:
        var u = n & lm;
        if ((s || (s = cm), e.size != t.size && !u)) return !1;
        var l = a.get(e);
        if (l) return l == t;
        (n |= fm), a.set(e, t);
        var p = sm(s(e), s(t), n, o, i, a);
        return a.delete(e), p;
      case mm:
        if (tn) return tn.call(e) == tn.call(t);
    }
    return !1;
  }
  bs.exports = vm;
});
var Lt = c((xF, Cs) => {
  function Sm(e, t) {
    for (var r = -1, n = t.length, o = e.length; ++r < n; ) e[o + r] = t[r];
    return e;
  }
  Cs.exports = Sm;
});
var q = c((CF, Ps) => {
  var Om = Array.isArray;
  Ps.exports = Om;
});
var rn = c((PF, Ns) => {
  var Rm = Lt(),
    bm = q();
  function xm(e, t, r) {
    var n = t(e);
    return bm(e) ? n : Rm(n, r(e));
  }
  Ns.exports = xm;
});
var Ds = c((NF, Ls) => {
  function Cm(e, t) {
    for (var r = -1, n = e == null ? 0 : e.length, o = 0, i = []; ++r < n; ) {
      var a = e[r];
      t(a, r, e) && (i[o++] = a);
    }
    return i;
  }
  Ls.exports = Cm;
});
var nn = c((LF, Ms) => {
  function Pm() {
    return [];
  }
  Ms.exports = Pm;
});
var on = c((DF, ws) => {
  var Nm = Ds(),
    Lm = nn(),
    Dm = Object.prototype,
    Mm = Dm.propertyIsEnumerable,
    Fs = Object.getOwnPropertySymbols,
    Fm = Fs
      ? function (e) {
          return e == null
            ? []
            : ((e = Object(e)),
              Nm(Fs(e), function (t) {
                return Mm.call(e, t);
              }));
        }
      : Lm;
  ws.exports = Fm;
});
var Gs = c((MF, qs) => {
  function wm(e, t) {
    for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
    return n;
  }
  qs.exports = wm;
});
var Vs = c((FF, Xs) => {
  var qm = ue(),
    Gm = ne(),
    Xm = "[object Arguments]";
  function Vm(e) {
    return Gm(e) && qm(e) == Xm;
  }
  Xs.exports = Vm;
});
var Ze = c((wF, Hs) => {
  var Us = Vs(),
    Um = ne(),
    Bs = Object.prototype,
    Bm = Bs.hasOwnProperty,
    Hm = Bs.propertyIsEnumerable,
    Wm = Us(
      (function () {
        return arguments;
      })()
    )
      ? Us
      : function (e) {
          return Um(e) && Bm.call(e, "callee") && !Hm.call(e, "callee");
        };
  Hs.exports = Wm;
});
var ks = c((qF, Ws) => {
  function km() {
    return !1;
  }
  Ws.exports = km;
});
var Dt = c((Je, xe) => {
  var Km = j(),
    jm = ks(),
    zs = typeof Je == "object" && Je && !Je.nodeType && Je,
    Ks = zs && typeof xe == "object" && xe && !xe.nodeType && xe,
    zm = Ks && Ks.exports === zs,
    js = zm ? Km.Buffer : void 0,
    Ym = js ? js.isBuffer : void 0,
    Qm = Ym || jm;
  xe.exports = Qm;
});
var Mt = c((GF, Ys) => {
  var $m = 9007199254740991,
    Zm = /^(?:0|[1-9]\d*)$/;
  function Jm(e, t) {
    var r = typeof e;
    return (
      (t = t ?? $m),
      !!t &&
        (r == "number" || (r != "symbol" && Zm.test(e))) &&
        e > -1 &&
        e % 1 == 0 &&
        e < t
    );
  }
  Ys.exports = Jm;
});
var Ft = c((XF, Qs) => {
  var eh = 9007199254740991;
  function th(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= eh;
  }
  Qs.exports = th;
});
var Zs = c((VF, $s) => {
  var rh = ue(),
    nh = Ft(),
    oh = ne(),
    ih = "[object Arguments]",
    ah = "[object Array]",
    sh = "[object Boolean]",
    uh = "[object Date]",
    ch = "[object Error]",
    lh = "[object Function]",
    fh = "[object Map]",
    ph = "[object Number]",
    dh = "[object Object]",
    Eh = "[object RegExp]",
    gh = "[object Set]",
    yh = "[object String]",
    _h = "[object WeakMap]",
    Ih = "[object ArrayBuffer]",
    Th = "[object DataView]",
    mh = "[object Float32Array]",
    hh = "[object Float64Array]",
    Ah = "[object Int8Array]",
    vh = "[object Int16Array]",
    Sh = "[object Int32Array]",
    Oh = "[object Uint8Array]",
    Rh = "[object Uint8ClampedArray]",
    bh = "[object Uint16Array]",
    xh = "[object Uint32Array]",
    L = {};
  L[mh] = L[hh] = L[Ah] = L[vh] = L[Sh] = L[Oh] = L[Rh] = L[bh] = L[xh] = !0;
  L[ih] =
    L[ah] =
    L[Ih] =
    L[sh] =
    L[Th] =
    L[uh] =
    L[ch] =
    L[lh] =
    L[fh] =
    L[ph] =
    L[dh] =
    L[Eh] =
    L[gh] =
    L[yh] =
    L[_h] =
      !1;
  function Ch(e) {
    return oh(e) && nh(e.length) && !!L[rh(e)];
  }
  $s.exports = Ch;
});
var eu = c((UF, Js) => {
  function Ph(e) {
    return function (t) {
      return e(t);
    };
  }
  Js.exports = Ph;
});
var ru = c((et, Ce) => {
  var Nh = Pr(),
    tu = typeof et == "object" && et && !et.nodeType && et,
    tt = tu && typeof Ce == "object" && Ce && !Ce.nodeType && Ce,
    Lh = tt && tt.exports === tu,
    an = Lh && Nh.process,
    Dh = (function () {
      try {
        var e = tt && tt.require && tt.require("util").types;
        return e || (an && an.binding && an.binding("util"));
      } catch {}
    })();
  Ce.exports = Dh;
});
var wt = c((BF, iu) => {
  var Mh = Zs(),
    Fh = eu(),
    nu = ru(),
    ou = nu && nu.isTypedArray,
    wh = ou ? Fh(ou) : Mh;
  iu.exports = wh;
});
var sn = c((HF, au) => {
  var qh = Gs(),
    Gh = Ze(),
    Xh = q(),
    Vh = Dt(),
    Uh = Mt(),
    Bh = wt(),
    Hh = Object.prototype,
    Wh = Hh.hasOwnProperty;
  function kh(e, t) {
    var r = Xh(e),
      n = !r && Gh(e),
      o = !r && !n && Vh(e),
      i = !r && !n && !o && Bh(e),
      a = r || n || o || i,
      s = a ? qh(e.length, String) : [],
      u = s.length;
    for (var l in e)
      (t || Wh.call(e, l)) &&
        !(
          a &&
          (l == "length" ||
            (o && (l == "offset" || l == "parent")) ||
            (i && (l == "buffer" || l == "byteLength" || l == "byteOffset")) ||
            Uh(l, u))
        ) &&
        s.push(l);
    return s;
  }
  au.exports = kh;
});
var qt = c((WF, su) => {
  var Kh = Object.prototype;
  function jh(e) {
    var t = e && e.constructor,
      r = (typeof t == "function" && t.prototype) || Kh;
    return e === r;
  }
  su.exports = jh;
});
var cu = c((kF, uu) => {
  var zh = Nr(),
    Yh = zh(Object.keys, Object);
  uu.exports = Yh;
});
var Gt = c((KF, lu) => {
  var Qh = qt(),
    $h = cu(),
    Zh = Object.prototype,
    Jh = Zh.hasOwnProperty;
  function eA(e) {
    if (!Qh(e)) return $h(e);
    var t = [];
    for (var r in Object(e)) Jh.call(e, r) && r != "constructor" && t.push(r);
    return t;
  }
  lu.exports = eA;
});
var de = c((jF, fu) => {
  var tA = Qr(),
    rA = Ft();
  function nA(e) {
    return e != null && rA(e.length) && !tA(e);
  }
  fu.exports = nA;
});
var rt = c((zF, pu) => {
  var oA = sn(),
    iA = Gt(),
    aA = de();
  function sA(e) {
    return aA(e) ? oA(e) : iA(e);
  }
  pu.exports = sA;
});
var Eu = c((YF, du) => {
  var uA = rn(),
    cA = on(),
    lA = rt();
  function fA(e) {
    return uA(e, lA, cA);
  }
  du.exports = fA;
});
var _u = c((QF, yu) => {
  var gu = Eu(),
    pA = 1,
    dA = Object.prototype,
    EA = dA.hasOwnProperty;
  function gA(e, t, r, n, o, i) {
    var a = r & pA,
      s = gu(e),
      u = s.length,
      l = gu(t),
      p = l.length;
    if (u != p && !a) return !1;
    for (var d = u; d--; ) {
      var f = s[d];
      if (!(a ? f in t : EA.call(t, f))) return !1;
    }
    var E = i.get(e),
      y = i.get(t);
    if (E && y) return E == t && y == e;
    var g = !0;
    i.set(e, t), i.set(t, e);
    for (var I = a; ++d < u; ) {
      f = s[d];
      var _ = e[f],
        m = t[f];
      if (n) var v = a ? n(m, _, f, t, e, i) : n(_, m, f, e, t, i);
      if (!(v === void 0 ? _ === m || o(_, m, r, n, i) : v)) {
        g = !1;
        break;
      }
      I || (I = f == "constructor");
    }
    if (g && !I) {
      var h = e.constructor,
        O = t.constructor;
      h != O &&
        "constructor" in e &&
        "constructor" in t &&
        !(
          typeof h == "function" &&
          h instanceof h &&
          typeof O == "function" &&
          O instanceof O
        ) &&
        (g = !1);
    }
    return i.delete(e), i.delete(t), g;
  }
  yu.exports = gA;
});
var Tu = c(($F, Iu) => {
  var yA = ce(),
    _A = j(),
    IA = yA(_A, "DataView");
  Iu.exports = IA;
});
var hu = c((ZF, mu) => {
  var TA = ce(),
    mA = j(),
    hA = TA(mA, "Promise");
  mu.exports = hA;
});
var vu = c((JF, Au) => {
  var AA = ce(),
    vA = j(),
    SA = AA(vA, "Set");
  Au.exports = SA;
});
var un = c((ew, Su) => {
  var OA = ce(),
    RA = j(),
    bA = OA(RA, "WeakMap");
  Su.exports = bA;
});
var Xt = c((tw, Nu) => {
  var cn = Tu(),
    ln = Ct(),
    fn = hu(),
    pn = vu(),
    dn = un(),
    Pu = ue(),
    Pe = Zr(),
    Ou = "[object Map]",
    xA = "[object Object]",
    Ru = "[object Promise]",
    bu = "[object Set]",
    xu = "[object WeakMap]",
    Cu = "[object DataView]",
    CA = Pe(cn),
    PA = Pe(ln),
    NA = Pe(fn),
    LA = Pe(pn),
    DA = Pe(dn),
    Ee = Pu;
  ((cn && Ee(new cn(new ArrayBuffer(1))) != Cu) ||
    (ln && Ee(new ln()) != Ou) ||
    (fn && Ee(fn.resolve()) != Ru) ||
    (pn && Ee(new pn()) != bu) ||
    (dn && Ee(new dn()) != xu)) &&
    (Ee = function (e) {
      var t = Pu(e),
        r = t == xA ? e.constructor : void 0,
        n = r ? Pe(r) : "";
      if (n)
        switch (n) {
          case CA:
            return Cu;
          case PA:
            return Ou;
          case NA:
            return Ru;
          case LA:
            return bu;
          case DA:
            return xu;
        }
      return t;
    });
  Nu.exports = Ee;
});
var Xu = c((rw, Gu) => {
  var En = Jr(),
    MA = en(),
    FA = xs(),
    wA = _u(),
    Lu = Xt(),
    Du = q(),
    Mu = Dt(),
    qA = wt(),
    GA = 1,
    Fu = "[object Arguments]",
    wu = "[object Array]",
    Vt = "[object Object]",
    XA = Object.prototype,
    qu = XA.hasOwnProperty;
  function VA(e, t, r, n, o, i) {
    var a = Du(e),
      s = Du(t),
      u = a ? wu : Lu(e),
      l = s ? wu : Lu(t);
    (u = u == Fu ? Vt : u), (l = l == Fu ? Vt : l);
    var p = u == Vt,
      d = l == Vt,
      f = u == l;
    if (f && Mu(e)) {
      if (!Mu(t)) return !1;
      (a = !0), (p = !1);
    }
    if (f && !p)
      return (
        i || (i = new En()),
        a || qA(e) ? MA(e, t, r, n, o, i) : FA(e, t, u, r, n, o, i)
      );
    if (!(r & GA)) {
      var E = p && qu.call(e, "__wrapped__"),
        y = d && qu.call(t, "__wrapped__");
      if (E || y) {
        var g = E ? e.value() : e,
          I = y ? t.value() : t;
        return i || (i = new En()), o(g, I, r, n, i);
      }
    }
    return f ? (i || (i = new En()), wA(e, t, r, n, o, i)) : !1;
  }
  Gu.exports = VA;
});
var gn = c((nw, Bu) => {
  var UA = Xu(),
    Vu = ne();
  function Uu(e, t, r, n, o) {
    return e === t
      ? !0
      : e == null || t == null || (!Vu(e) && !Vu(t))
      ? e !== e && t !== t
      : UA(e, t, r, n, Uu, o);
  }
  Bu.exports = Uu;
});
var Wu = c((ow, Hu) => {
  var BA = Jr(),
    HA = gn(),
    WA = 1,
    kA = 2;
  function KA(e, t, r, n) {
    var o = r.length,
      i = o,
      a = !n;
    if (e == null) return !i;
    for (e = Object(e); o--; ) {
      var s = r[o];
      if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
    }
    for (; ++o < i; ) {
      s = r[o];
      var u = s[0],
        l = e[u],
        p = s[1];
      if (a && s[2]) {
        if (l === void 0 && !(u in e)) return !1;
      } else {
        var d = new BA();
        if (n) var f = n(l, p, u, e, t, d);
        if (!(f === void 0 ? HA(p, l, WA | kA, n, d) : f)) return !1;
      }
    }
    return !0;
  }
  Hu.exports = KA;
});
var yn = c((iw, ku) => {
  var jA = J();
  function zA(e) {
    return e === e && !jA(e);
  }
  ku.exports = zA;
});
var ju = c((aw, Ku) => {
  var YA = yn(),
    QA = rt();
  function $A(e) {
    for (var t = QA(e), r = t.length; r--; ) {
      var n = t[r],
        o = e[n];
      t[r] = [n, o, YA(o)];
    }
    return t;
  }
  Ku.exports = $A;
});
var _n = c((sw, zu) => {
  function ZA(e, t) {
    return function (r) {
      return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
    };
  }
  zu.exports = ZA;
});
var Qu = c((uw, Yu) => {
  var JA = Wu(),
    ev = ju(),
    tv = _n();
  function rv(e) {
    var t = ev(e);
    return t.length == 1 && t[0][2]
      ? tv(t[0][0], t[0][1])
      : function (r) {
          return r === e || JA(r, e, t);
        };
  }
  Yu.exports = rv;
});
var nt = c((cw, $u) => {
  var nv = ue(),
    ov = ne(),
    iv = "[object Symbol]";
  function av(e) {
    return typeof e == "symbol" || (ov(e) && nv(e) == iv);
  }
  $u.exports = av;
});
var Ut = c((lw, Zu) => {
  var sv = q(),
    uv = nt(),
    cv = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    lv = /^\w*$/;
  function fv(e, t) {
    if (sv(e)) return !1;
    var r = typeof e;
    return r == "number" ||
      r == "symbol" ||
      r == "boolean" ||
      e == null ||
      uv(e)
      ? !0
      : lv.test(e) || !cv.test(e) || (t != null && e in Object(t));
  }
  Zu.exports = fv;
});
var tc = c((fw, ec) => {
  var Ju = Pt(),
    pv = "Expected a function";
  function In(e, t) {
    if (typeof e != "function" || (t != null && typeof t != "function"))
      throw new TypeError(pv);
    var r = function () {
      var n = arguments,
        o = t ? t.apply(this, n) : n[0],
        i = r.cache;
      if (i.has(o)) return i.get(o);
      var a = e.apply(this, n);
      return (r.cache = i.set(o, a) || i), a;
    };
    return (r.cache = new (In.Cache || Ju)()), r;
  }
  In.Cache = Ju;
  ec.exports = In;
});
var nc = c((pw, rc) => {
  var dv = tc(),
    Ev = 500;
  function gv(e) {
    var t = dv(e, function (n) {
        return r.size === Ev && r.clear(), n;
      }),
      r = t.cache;
    return t;
  }
  rc.exports = gv;
});
var ic = c((dw, oc) => {
  var yv = nc(),
    _v =
      /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    Iv = /\\(\\)?/g,
    Tv = yv(function (e) {
      var t = [];
      return (
        e.charCodeAt(0) === 46 && t.push(""),
        e.replace(_v, function (r, n, o, i) {
          t.push(o ? i.replace(Iv, "$1") : n || r);
        }),
        t
      );
    });
  oc.exports = Tv;
});
var Tn = c((Ew, ac) => {
  function mv(e, t) {
    for (var r = -1, n = e == null ? 0 : e.length, o = Array(n); ++r < n; )
      o[r] = t(e[r], r, e);
    return o;
  }
  ac.exports = mv;
});
var pc = c((gw, fc) => {
  var sc = me(),
    hv = Tn(),
    Av = q(),
    vv = nt(),
    Sv = 1 / 0,
    uc = sc ? sc.prototype : void 0,
    cc = uc ? uc.toString : void 0;
  function lc(e) {
    if (typeof e == "string") return e;
    if (Av(e)) return hv(e, lc) + "";
    if (vv(e)) return cc ? cc.call(e) : "";
    var t = e + "";
    return t == "0" && 1 / e == -Sv ? "-0" : t;
  }
  fc.exports = lc;
});
var Ec = c((yw, dc) => {
  var Ov = pc();
  function Rv(e) {
    return e == null ? "" : Ov(e);
  }
  dc.exports = Rv;
});
var ot = c((_w, gc) => {
  var bv = q(),
    xv = Ut(),
    Cv = ic(),
    Pv = Ec();
  function Nv(e, t) {
    return bv(e) ? e : xv(e, t) ? [e] : Cv(Pv(e));
  }
  gc.exports = Nv;
});
var Ne = c((Iw, yc) => {
  var Lv = nt(),
    Dv = 1 / 0;
  function Mv(e) {
    if (typeof e == "string" || Lv(e)) return e;
    var t = e + "";
    return t == "0" && 1 / e == -Dv ? "-0" : t;
  }
  yc.exports = Mv;
});
var Bt = c((Tw, _c) => {
  var Fv = ot(),
    wv = Ne();
  function qv(e, t) {
    t = Fv(t, e);
    for (var r = 0, n = t.length; e != null && r < n; ) e = e[wv(t[r++])];
    return r && r == n ? e : void 0;
  }
  _c.exports = qv;
});
var Ht = c((mw, Ic) => {
  var Gv = Bt();
  function Xv(e, t, r) {
    var n = e == null ? void 0 : Gv(e, t);
    return n === void 0 ? r : n;
  }
  Ic.exports = Xv;
});
var mc = c((hw, Tc) => {
  function Vv(e, t) {
    return e != null && t in Object(e);
  }
  Tc.exports = Vv;
});
var Ac = c((Aw, hc) => {
  var Uv = ot(),
    Bv = Ze(),
    Hv = q(),
    Wv = Mt(),
    kv = Ft(),
    Kv = Ne();
  function jv(e, t, r) {
    t = Uv(t, e);
    for (var n = -1, o = t.length, i = !1; ++n < o; ) {
      var a = Kv(t[n]);
      if (!(i = e != null && r(e, a))) break;
      e = e[a];
    }
    return i || ++n != o
      ? i
      : ((o = e == null ? 0 : e.length),
        !!o && kv(o) && Wv(a, o) && (Hv(e) || Bv(e)));
  }
  hc.exports = jv;
});
var Sc = c((vw, vc) => {
  var zv = mc(),
    Yv = Ac();
  function Qv(e, t) {
    return e != null && Yv(e, t, zv);
  }
  vc.exports = Qv;
});
var Rc = c((Sw, Oc) => {
  var $v = gn(),
    Zv = Ht(),
    Jv = Sc(),
    eS = Ut(),
    tS = yn(),
    rS = _n(),
    nS = Ne(),
    oS = 1,
    iS = 2;
  function aS(e, t) {
    return eS(e) && tS(t)
      ? rS(nS(e), t)
      : function (r) {
          var n = Zv(r, e);
          return n === void 0 && n === t ? Jv(r, e) : $v(t, n, oS | iS);
        };
  }
  Oc.exports = aS;
});
var Wt = c((Ow, bc) => {
  function sS(e) {
    return e;
  }
  bc.exports = sS;
});
var mn = c((Rw, xc) => {
  function uS(e) {
    return function (t) {
      return t?.[e];
    };
  }
  xc.exports = uS;
});
var Pc = c((bw, Cc) => {
  var cS = Bt();
  function lS(e) {
    return function (t) {
      return cS(t, e);
    };
  }
  Cc.exports = lS;
});
var Lc = c((xw, Nc) => {
  var fS = mn(),
    pS = Pc(),
    dS = Ut(),
    ES = Ne();
  function gS(e) {
    return dS(e) ? fS(ES(e)) : pS(e);
  }
  Nc.exports = gS;
});
var le = c((Cw, Dc) => {
  var yS = Qu(),
    _S = Rc(),
    IS = Wt(),
    TS = q(),
    mS = Lc();
  function hS(e) {
    return typeof e == "function"
      ? e
      : e == null
      ? IS
      : typeof e == "object"
      ? TS(e)
        ? _S(e[0], e[1])
        : yS(e)
      : mS(e);
  }
  Dc.exports = hS;
});
var hn = c((Pw, Mc) => {
  var AS = le(),
    vS = de(),
    SS = rt();
  function OS(e) {
    return function (t, r, n) {
      var o = Object(t);
      if (!vS(t)) {
        var i = AS(r, 3);
        (t = SS(t)),
          (r = function (s) {
            return i(o[s], s, o);
          });
      }
      var a = e(t, r, n);
      return a > -1 ? o[i ? t[a] : a] : void 0;
    };
  }
  Mc.exports = OS;
});
var An = c((Nw, Fc) => {
  function RS(e, t, r, n) {
    for (var o = e.length, i = r + (n ? 1 : -1); n ? i-- : ++i < o; )
      if (t(e[i], i, e)) return i;
    return -1;
  }
  Fc.exports = RS;
});
var qc = c((Lw, wc) => {
  var bS = /\s/;
  function xS(e) {
    for (var t = e.length; t-- && bS.test(e.charAt(t)); );
    return t;
  }
  wc.exports = xS;
});
var Xc = c((Dw, Gc) => {
  var CS = qc(),
    PS = /^\s+/;
  function NS(e) {
    return e && e.slice(0, CS(e) + 1).replace(PS, "");
  }
  Gc.exports = NS;
});
var kt = c((Mw, Bc) => {
  var LS = Xc(),
    Vc = J(),
    DS = nt(),
    Uc = 0 / 0,
    MS = /^[-+]0x[0-9a-f]+$/i,
    FS = /^0b[01]+$/i,
    wS = /^0o[0-7]+$/i,
    qS = parseInt;
  function GS(e) {
    if (typeof e == "number") return e;
    if (DS(e)) return Uc;
    if (Vc(e)) {
      var t = typeof e.valueOf == "function" ? e.valueOf() : e;
      e = Vc(t) ? t + "" : t;
    }
    if (typeof e != "string") return e === 0 ? e : +e;
    e = LS(e);
    var r = FS.test(e);
    return r || wS.test(e) ? qS(e.slice(2), r ? 2 : 8) : MS.test(e) ? Uc : +e;
  }
  Bc.exports = GS;
});
var kc = c((Fw, Wc) => {
  var XS = kt(),
    Hc = 1 / 0,
    VS = 17976931348623157e292;
  function US(e) {
    if (!e) return e === 0 ? e : 0;
    if (((e = XS(e)), e === Hc || e === -Hc)) {
      var t = e < 0 ? -1 : 1;
      return t * VS;
    }
    return e === e ? e : 0;
  }
  Wc.exports = US;
});
var vn = c((ww, Kc) => {
  var BS = kc();
  function HS(e) {
    var t = BS(e),
      r = t % 1;
    return t === t ? (r ? t - r : t) : 0;
  }
  Kc.exports = HS;
});
var zc = c((qw, jc) => {
  var WS = An(),
    kS = le(),
    KS = vn(),
    jS = Math.max;
  function zS(e, t, r) {
    var n = e == null ? 0 : e.length;
    if (!n) return -1;
    var o = r == null ? 0 : KS(r);
    return o < 0 && (o = jS(n + o, 0)), WS(e, kS(t, 3), o);
  }
  jc.exports = zS;
});
var Sn = c((Gw, Yc) => {
  var YS = hn(),
    QS = zc(),
    $S = YS(QS);
  Yc.exports = $S;
});
var Zc = {};
B(Zc, {
  ELEMENT_MATCHES: () => ZS,
  FLEX_PREFIXED: () => On,
  IS_BROWSER_ENV: () => Y,
  TRANSFORM_PREFIXED: () => fe,
  TRANSFORM_STYLE_PREFIXED: () => jt,
  withBrowser: () => Kt,
});
var $c,
  Y,
  Kt,
  ZS,
  On,
  fe,
  Qc,
  jt,
  zt = D(() => {
    "use strict";
    ($c = C(Sn())),
      (Y = typeof window < "u"),
      (Kt = (e, t) => (Y ? e() : t)),
      (ZS = Kt(() =>
        (0, $c.default)(
          [
            "matches",
            "matchesSelector",
            "mozMatchesSelector",
            "msMatchesSelector",
            "oMatchesSelector",
            "webkitMatchesSelector",
          ],
          (e) => e in Element.prototype
        )
      )),
      (On = Kt(() => {
        let e = document.createElement("i"),
          t = [
            "flex",
            "-webkit-flex",
            "-ms-flexbox",
            "-moz-box",
            "-webkit-box",
          ],
          r = "";
        try {
          let { length: n } = t;
          for (let o = 0; o < n; o++) {
            let i = t[o];
            if (((e.style.display = i), e.style.display === i)) return i;
          }
          return r;
        } catch {
          return r;
        }
      }, "flex")),
      (fe = Kt(() => {
        let e = document.createElement("i");
        if (e.style.transform == null) {
          let t = ["Webkit", "Moz", "ms"],
            r = "Transform",
            { length: n } = t;
          for (let o = 0; o < n; o++) {
            let i = t[o] + r;
            if (e.style[i] !== void 0) return i;
          }
        }
        return "transform";
      }, "transform")),
      (Qc = fe.split("transform")[0]),
      (jt = Qc ? Qc + "TransformStyle" : "transformStyle");
  });
var Rn = c((Xw, nl) => {
  var JS = 4,
    eO = 0.001,
    tO = 1e-7,
    rO = 10,
    it = 11,
    Yt = 1 / (it - 1),
    nO = typeof Float32Array == "function";
  function Jc(e, t) {
    return 1 - 3 * t + 3 * e;
  }
  function el(e, t) {
    return 3 * t - 6 * e;
  }
  function tl(e) {
    return 3 * e;
  }
  function Qt(e, t, r) {
    return ((Jc(t, r) * e + el(t, r)) * e + tl(t)) * e;
  }
  function rl(e, t, r) {
    return 3 * Jc(t, r) * e * e + 2 * el(t, r) * e + tl(t);
  }
  function oO(e, t, r, n, o) {
    var i,
      a,
      s = 0;
    do (a = t + (r - t) / 2), (i = Qt(a, n, o) - e), i > 0 ? (r = a) : (t = a);
    while (Math.abs(i) > tO && ++s < rO);
    return a;
  }
  function iO(e, t, r, n) {
    for (var o = 0; o < JS; ++o) {
      var i = rl(t, r, n);
      if (i === 0) return t;
      var a = Qt(t, r, n) - e;
      t -= a / i;
    }
    return t;
  }
  nl.exports = function (t, r, n, o) {
    if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
      throw new Error("bezier x values must be in [0, 1] range");
    var i = nO ? new Float32Array(it) : new Array(it);
    if (t !== r || n !== o)
      for (var a = 0; a < it; ++a) i[a] = Qt(a * Yt, t, n);
    function s(u) {
      for (var l = 0, p = 1, d = it - 1; p !== d && i[p] <= u; ++p) l += Yt;
      --p;
      var f = (u - i[p]) / (i[p + 1] - i[p]),
        E = l + f * Yt,
        y = rl(E, t, n);
      return y >= eO ? iO(u, E, t, n) : y === 0 ? E : oO(u, l, l + Yt, t, n);
    }
    return function (l) {
      return t === r && n === o
        ? l
        : l === 0
        ? 0
        : l === 1
        ? 1
        : Qt(s(l), r, o);
    };
  };
});
var st = {};
B(st, {
  bounce: () => UO,
  bouncePast: () => BO,
  ease: () => aO,
  easeIn: () => sO,
  easeInOut: () => cO,
  easeOut: () => uO,
  inBack: () => LO,
  inCirc: () => xO,
  inCubic: () => dO,
  inElastic: () => FO,
  inExpo: () => OO,
  inOutBack: () => MO,
  inOutCirc: () => PO,
  inOutCubic: () => gO,
  inOutElastic: () => qO,
  inOutExpo: () => bO,
  inOutQuad: () => pO,
  inOutQuart: () => IO,
  inOutQuint: () => hO,
  inOutSine: () => SO,
  inQuad: () => lO,
  inQuart: () => yO,
  inQuint: () => TO,
  inSine: () => AO,
  outBack: () => DO,
  outBounce: () => NO,
  outCirc: () => CO,
  outCubic: () => EO,
  outElastic: () => wO,
  outExpo: () => RO,
  outQuad: () => fO,
  outQuart: () => _O,
  outQuint: () => mO,
  outSine: () => vO,
  swingFrom: () => XO,
  swingFromTo: () => GO,
  swingTo: () => VO,
});
function lO(e) {
  return Math.pow(e, 2);
}
function fO(e) {
  return -(Math.pow(e - 1, 2) - 1);
}
function pO(e) {
  return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2);
}
function dO(e) {
  return Math.pow(e, 3);
}
function EO(e) {
  return Math.pow(e - 1, 3) + 1;
}
function gO(e) {
  return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 3) : 0.5 * (Math.pow(e - 2, 3) + 2);
}
function yO(e) {
  return Math.pow(e, 4);
}
function _O(e) {
  return -(Math.pow(e - 1, 4) - 1);
}
function IO(e) {
  return (e /= 0.5) < 1
    ? 0.5 * Math.pow(e, 4)
    : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
}
function TO(e) {
  return Math.pow(e, 5);
}
function mO(e) {
  return Math.pow(e - 1, 5) + 1;
}
function hO(e) {
  return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 5) : 0.5 * (Math.pow(e - 2, 5) + 2);
}
function AO(e) {
  return -Math.cos(e * (Math.PI / 2)) + 1;
}
function vO(e) {
  return Math.sin(e * (Math.PI / 2));
}
function SO(e) {
  return -0.5 * (Math.cos(Math.PI * e) - 1);
}
function OO(e) {
  return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
}
function RO(e) {
  return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
}
function bO(e) {
  return e === 0
    ? 0
    : e === 1
    ? 1
    : (e /= 0.5) < 1
    ? 0.5 * Math.pow(2, 10 * (e - 1))
    : 0.5 * (-Math.pow(2, -10 * --e) + 2);
}
function xO(e) {
  return -(Math.sqrt(1 - e * e) - 1);
}
function CO(e) {
  return Math.sqrt(1 - Math.pow(e - 1, 2));
}
function PO(e) {
  return (e /= 0.5) < 1
    ? -0.5 * (Math.sqrt(1 - e * e) - 1)
    : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
}
function NO(e) {
  return e < 1 / 2.75
    ? 7.5625 * e * e
    : e < 2 / 2.75
    ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
    : e < 2.5 / 2.75
    ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
    : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
}
function LO(e) {
  let t = oe;
  return e * e * ((t + 1) * e - t);
}
function DO(e) {
  let t = oe;
  return (e -= 1) * e * ((t + 1) * e + t) + 1;
}
function MO(e) {
  let t = oe;
  return (e /= 0.5) < 1
    ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
    : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
}
function FO(e) {
  let t = oe,
    r = 0,
    n = 1;
  return e === 0
    ? 0
    : e === 1
    ? 1
    : (r || (r = 0.3),
      n < 1
        ? ((n = 1), (t = r / 4))
        : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
      -(
        n *
        Math.pow(2, 10 * (e -= 1)) *
        Math.sin(((e - t) * (2 * Math.PI)) / r)
      ));
}
function wO(e) {
  let t = oe,
    r = 0,
    n = 1;
  return e === 0
    ? 0
    : e === 1
    ? 1
    : (r || (r = 0.3),
      n < 1
        ? ((n = 1), (t = r / 4))
        : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
      n * Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / r) + 1);
}
function qO(e) {
  let t = oe,
    r = 0,
    n = 1;
  return e === 0
    ? 0
    : (e /= 1 / 2) === 2
    ? 1
    : (r || (r = 0.3 * 1.5),
      n < 1
        ? ((n = 1), (t = r / 4))
        : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
      e < 1
        ? -0.5 *
          (n *
            Math.pow(2, 10 * (e -= 1)) *
            Math.sin(((e - t) * (2 * Math.PI)) / r))
        : n *
            Math.pow(2, -10 * (e -= 1)) *
            Math.sin(((e - t) * (2 * Math.PI)) / r) *
            0.5 +
          1);
}
function GO(e) {
  let t = oe;
  return (e /= 0.5) < 1
    ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
    : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
}
function XO(e) {
  let t = oe;
  return e * e * ((t + 1) * e - t);
}
function VO(e) {
  let t = oe;
  return (e -= 1) * e * ((t + 1) * e + t) + 1;
}
function UO(e) {
  return e < 1 / 2.75
    ? 7.5625 * e * e
    : e < 2 / 2.75
    ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
    : e < 2.5 / 2.75
    ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
    : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
}
function BO(e) {
  return e < 1 / 2.75
    ? 7.5625 * e * e
    : e < 2 / 2.75
    ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
    : e < 2.5 / 2.75
    ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
    : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
}
var at,
  oe,
  aO,
  sO,
  uO,
  cO,
  bn = D(() => {
    "use strict";
    (at = C(Rn())),
      (oe = 1.70158),
      (aO = (0, at.default)(0.25, 0.1, 0.25, 1)),
      (sO = (0, at.default)(0.42, 0, 1, 1)),
      (uO = (0, at.default)(0, 0, 0.58, 1)),
      (cO = (0, at.default)(0.42, 0, 0.58, 1));
  });
var il = {};
B(il, {
  applyEasing: () => WO,
  createBezierEasing: () => HO,
  optimizeFloat: () => ut,
});
function ut(e, t = 5, r = 10) {
  let n = Math.pow(r, t),
    o = Number(Math.round(e * n) / n);
  return Math.abs(o) > 1e-4 ? o : 0;
}
function HO(e) {
  return (0, ol.default)(...e);
}
function WO(e, t, r) {
  return t === 0
    ? 0
    : t === 1
    ? 1
    : ut(r ? (t > 0 ? r(t) : t) : t > 0 && e && st[e] ? st[e](t) : t);
}
var ol,
  xn = D(() => {
    "use strict";
    bn();
    ol = C(Rn());
  });
var ul = {};
B(ul, {
  createElementState: () => sl,
  ixElements: () => oR,
  mergeActionState: () => Cn,
});
function sl(e, t, r, n, o) {
  let i = r === kO ? (0, Le.getIn)(o, ["config", "target", "objectId"]) : null;
  return (0, Le.mergeIn)(e, [n], { id: n, ref: t, refId: i, refType: r });
}
function Cn(e, t, r, n, o) {
  let i = aR(o);
  return (0, Le.mergeIn)(e, [t, nR, r], n, i);
}
function aR(e) {
  let { config: t } = e;
  return iR.reduce((r, n) => {
    let o = n[0],
      i = n[1],
      a = t[o],
      s = t[i];
    return a != null && s != null && (r[i] = s), r;
  }, {});
}
var Le,
  Uw,
  kO,
  Bw,
  KO,
  jO,
  zO,
  YO,
  QO,
  $O,
  ZO,
  JO,
  eR,
  tR,
  rR,
  al,
  nR,
  oR,
  iR,
  cl = D(() => {
    "use strict";
    Le = C(ve());
    H();
    ({
      HTML_ELEMENT: Uw,
      PLAIN_OBJECT: kO,
      ABSTRACT_NODE: Bw,
      CONFIG_X_VALUE: KO,
      CONFIG_Y_VALUE: jO,
      CONFIG_Z_VALUE: zO,
      CONFIG_VALUE: YO,
      CONFIG_X_UNIT: QO,
      CONFIG_Y_UNIT: $O,
      CONFIG_Z_UNIT: ZO,
      CONFIG_UNIT: JO,
    } = G),
      ({
        IX2_SESSION_STOPPED: eR,
        IX2_INSTANCE_ADDED: tR,
        IX2_ELEMENT_STATE_CHANGED: rR,
      } = w),
      (al = {}),
      (nR = "refState"),
      (oR = (e = al, t = {}) => {
        switch (t.type) {
          case eR:
            return al;
          case tR: {
            let {
                elementId: r,
                element: n,
                origin: o,
                actionItem: i,
                refType: a,
              } = t.payload,
              { actionTypeId: s } = i,
              u = e;
            return (
              (0, Le.getIn)(u, [r, n]) !== n && (u = sl(u, n, a, r, i)),
              Cn(u, r, s, o, i)
            );
          }
          case rR: {
            let {
              elementId: r,
              actionTypeId: n,
              current: o,
              actionItem: i,
            } = t.payload;
            return Cn(e, r, n, o, i);
          }
          default:
            return e;
        }
      });
    iR = [
      [KO, QO],
      [jO, $O],
      [zO, ZO],
      [YO, JO],
    ];
  });
var ll = c((Pn) => {
  "use strict";
  Object.defineProperty(Pn, "__esModule", { value: !0 });
  function sR(e, t) {
    for (var r in t) Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
  }
  sR(Pn, {
    clearPlugin: function () {
      return ER;
    },
    createPluginInstance: function () {
      return pR;
    },
    getPluginConfig: function () {
      return uR;
    },
    getPluginDestination: function () {
      return fR;
    },
    getPluginDuration: function () {
      return cR;
    },
    getPluginOrigin: function () {
      return lR;
    },
    renderPlugin: function () {
      return dR;
    },
  });
  var uR = (e) => e.value,
    cR = (e, t) => {
      if (t.config.duration !== "auto") return null;
      let r = parseFloat(e.getAttribute("data-duration"));
      return r > 0
        ? r * 1e3
        : parseFloat(e.getAttribute("data-default-duration")) * 1e3;
    },
    lR = (e) => e || { value: 0 },
    fR = (e) => ({ value: e.value }),
    pR = (e) => {
      let t = window.Webflow.require("lottie").createInstance(e);
      return t.stop(), t.setSubframe(!0), t;
    },
    dR = (e, t, r) => {
      if (!e) return;
      let n = t[r.actionTypeId].value / 100;
      e.goToFrame(e.frames * n);
    },
    ER = (e) => {
      window.Webflow.require("lottie").createInstance(e).stop();
    };
});
var pl = c((Nn) => {
  "use strict";
  Object.defineProperty(Nn, "__esModule", { value: !0 });
  function gR(e, t) {
    for (var r in t) Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
  }
  gR(Nn, {
    clearPlugin: function () {
      return OR;
    },
    createPluginInstance: function () {
      return vR;
    },
    getPluginConfig: function () {
      return TR;
    },
    getPluginDestination: function () {
      return AR;
    },
    getPluginDuration: function () {
      return mR;
    },
    getPluginOrigin: function () {
      return hR;
    },
    renderPlugin: function () {
      return SR;
    },
  });
  var yR = (e) => document.querySelector(`[data-w-id="${e}"]`),
    _R = () => window.Webflow.require("spline"),
    IR = (e, t) => e.filter((r) => !t.includes(r)),
    TR = (e, t) => e.value[t],
    mR = () => null,
    fl = Object.freeze({
      positionX: 0,
      positionY: 0,
      positionZ: 0,
      rotationX: 0,
      rotationY: 0,
      rotationZ: 0,
      scaleX: 1,
      scaleY: 1,
      scaleZ: 1,
    }),
    hR = (e, t) => {
      let r = t.config.value,
        n = Object.keys(r);
      if (e) {
        let i = Object.keys(e),
          a = IR(n, i);
        return a.length ? a.reduce((u, l) => ((u[l] = fl[l]), u), e) : e;
      }
      return n.reduce((i, a) => ((i[a] = fl[a]), i), {});
    },
    AR = (e) => e.value,
    vR = (e, t) => {
      let r = t?.config?.target?.pluginElement;
      return r ? yR(r) : null;
    },
    SR = (e, t, r) => {
      let n = _R(),
        o = n.getInstance(e),
        i = r.config.target.objectId,
        a = (s) => {
          if (!s) throw new Error("Invalid spline app passed to renderSpline");
          let u = i && s.findObjectById(i);
          if (!u) return;
          let { PLUGIN_SPLINE: l } = t;
          l.positionX != null && (u.position.x = l.positionX),
            l.positionY != null && (u.position.y = l.positionY),
            l.positionZ != null && (u.position.z = l.positionZ),
            l.rotationX != null && (u.rotation.x = l.rotationX),
            l.rotationY != null && (u.rotation.y = l.rotationY),
            l.rotationZ != null && (u.rotation.z = l.rotationZ),
            l.scaleX != null && (u.scale.x = l.scaleX),
            l.scaleY != null && (u.scale.y = l.scaleY),
            l.scaleZ != null && (u.scale.z = l.scaleZ);
        };
      o ? a(o.spline) : n.setLoadHandler(e, a);
    },
    OR = () => null;
});
var dl = c((Mn) => {
  "use strict";
  Object.defineProperty(Mn, "__esModule", { value: !0 });
  function RR(e, t) {
    for (var r in t) Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
  }
  RR(Mn, {
    clearPlugin: function () {
      return FR;
    },
    createPluginInstance: function () {
      return DR;
    },
    getPluginConfig: function () {
      return CR;
    },
    getPluginDestination: function () {
      return LR;
    },
    getPluginDuration: function () {
      return PR;
    },
    getPluginOrigin: function () {
      return NR;
    },
    renderPlugin: function () {
      return MR;
    },
  });
  var Ln = "--wf-rive-fit",
    Dn = "--wf-rive-alignment",
    bR = (e) => document.querySelector(`[data-w-id="${e}"]`),
    xR = () => window.Webflow.require("rive"),
    CR = (e, t) => e.value.inputs[t],
    PR = () => null,
    NR = (e, t) => {
      if (e) return e;
      let r = {},
        { inputs: n = {} } = t.config.value;
      for (let o in n) n[o] == null && (r[o] = 0);
      return r;
    },
    LR = (e) => e.value.inputs ?? {},
    DR = (e, t) => {
      if ((t.config?.target?.selectorGuids || []).length > 0) return e;
      let n = t?.config?.target?.pluginElement;
      return n ? bR(n) : null;
    },
    MR = (e, { PLUGIN_RIVE: t }, r) => {
      let n = xR(),
        o = n.getInstance(e),
        i = n.rive.StateMachineInputType,
        { name: a, inputs: s = {} } = r.config.value || {};
      function u(l) {
        if (l.loaded) p();
        else {
          let d = () => {
            p(), l?.off("load", d);
          };
          l?.on("load", d);
        }
        function p() {
          let d = l.stateMachineInputs(a);
          if (d != null) {
            if ((l.isPlaying || l.play(a, !1), Ln in s || Dn in s)) {
              let f = l.layout,
                E = s[Ln] ?? f.fit,
                y = s[Dn] ?? f.alignment;
              (E !== f.fit || y !== f.alignment) &&
                (l.layout = f.copyWith({ fit: E, alignment: y }));
            }
            for (let f in s) {
              if (f === Ln || f === Dn) continue;
              let E = d.find((y) => y.name === f);
              if (E != null)
                switch (E.type) {
                  case i.Boolean: {
                    if (s[f] != null) {
                      let y = !!s[f];
                      E.value = y;
                    }
                    break;
                  }
                  case i.Number: {
                    let y = t[f];
                    y != null && (E.value = y);
                    break;
                  }
                  case i.Trigger: {
                    s[f] && E.fire();
                    break;
                  }
                }
            }
          }
        }
      }
      o?.rive ? u(o.rive) : n.setLoadHandler(e, u);
    },
    FR = (e, t) => null;
});
var wn = c((Fn) => {
  "use strict";
  Object.defineProperty(Fn, "__esModule", { value: !0 });
  Object.defineProperty(Fn, "normalizeColor", {
    enumerable: !0,
    get: function () {
      return wR;
    },
  });
  var El = {
    aliceblue: "#F0F8FF",
    antiquewhite: "#FAEBD7",
    aqua: "#00FFFF",
    aquamarine: "#7FFFD4",
    azure: "#F0FFFF",
    beige: "#F5F5DC",
    bisque: "#FFE4C4",
    black: "#000000",
    blanchedalmond: "#FFEBCD",
    blue: "#0000FF",
    blueviolet: "#8A2BE2",
    brown: "#A52A2A",
    burlywood: "#DEB887",
    cadetblue: "#5F9EA0",
    chartreuse: "#7FFF00",
    chocolate: "#D2691E",
    coral: "#FF7F50",
    cornflowerblue: "#6495ED",
    cornsilk: "#FFF8DC",
    crimson: "#DC143C",
    cyan: "#00FFFF",
    darkblue: "#00008B",
    darkcyan: "#008B8B",
    darkgoldenrod: "#B8860B",
    darkgray: "#A9A9A9",
    darkgreen: "#006400",
    darkgrey: "#A9A9A9",
    darkkhaki: "#BDB76B",
    darkmagenta: "#8B008B",
    darkolivegreen: "#556B2F",
    darkorange: "#FF8C00",
    darkorchid: "#9932CC",
    darkred: "#8B0000",
    darksalmon: "#E9967A",
    darkseagreen: "#8FBC8F",
    darkslateblue: "#483D8B",
    darkslategray: "#2F4F4F",
    darkslategrey: "#2F4F4F",
    darkturquoise: "#00CED1",
    darkviolet: "#9400D3",
    deeppink: "#FF1493",
    deepskyblue: "#00BFFF",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1E90FF",
    firebrick: "#B22222",
    floralwhite: "#FFFAF0",
    forestgreen: "#228B22",
    fuchsia: "#FF00FF",
    gainsboro: "#DCDCDC",
    ghostwhite: "#F8F8FF",
    gold: "#FFD700",
    goldenrod: "#DAA520",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#ADFF2F",
    grey: "#808080",
    honeydew: "#F0FFF0",
    hotpink: "#FF69B4",
    indianred: "#CD5C5C",
    indigo: "#4B0082",
    ivory: "#FFFFF0",
    khaki: "#F0E68C",
    lavender: "#E6E6FA",
    lavenderblush: "#FFF0F5",
    lawngreen: "#7CFC00",
    lemonchiffon: "#FFFACD",
    lightblue: "#ADD8E6",
    lightcoral: "#F08080",
    lightcyan: "#E0FFFF",
    lightgoldenrodyellow: "#FAFAD2",
    lightgray: "#D3D3D3",
    lightgreen: "#90EE90",
    lightgrey: "#D3D3D3",
    lightpink: "#FFB6C1",
    lightsalmon: "#FFA07A",
    lightseagreen: "#20B2AA",
    lightskyblue: "#87CEFA",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#B0C4DE",
    lightyellow: "#FFFFE0",
    lime: "#00FF00",
    limegreen: "#32CD32",
    linen: "#FAF0E6",
    magenta: "#FF00FF",
    maroon: "#800000",
    mediumaquamarine: "#66CDAA",
    mediumblue: "#0000CD",
    mediumorchid: "#BA55D3",
    mediumpurple: "#9370DB",
    mediumseagreen: "#3CB371",
    mediumslateblue: "#7B68EE",
    mediumspringgreen: "#00FA9A",
    mediumturquoise: "#48D1CC",
    mediumvioletred: "#C71585",
    midnightblue: "#191970",
    mintcream: "#F5FFFA",
    mistyrose: "#FFE4E1",
    moccasin: "#FFE4B5",
    navajowhite: "#FFDEAD",
    navy: "#000080",
    oldlace: "#FDF5E6",
    olive: "#808000",
    olivedrab: "#6B8E23",
    orange: "#FFA500",
    orangered: "#FF4500",
    orchid: "#DA70D6",
    palegoldenrod: "#EEE8AA",
    palegreen: "#98FB98",
    paleturquoise: "#AFEEEE",
    palevioletred: "#DB7093",
    papayawhip: "#FFEFD5",
    peachpuff: "#FFDAB9",
    peru: "#CD853F",
    pink: "#FFC0CB",
    plum: "#DDA0DD",
    powderblue: "#B0E0E6",
    purple: "#800080",
    rebeccapurple: "#663399",
    red: "#FF0000",
    rosybrown: "#BC8F8F",
    royalblue: "#4169E1",
    saddlebrown: "#8B4513",
    salmon: "#FA8072",
    sandybrown: "#F4A460",
    seagreen: "#2E8B57",
    seashell: "#FFF5EE",
    sienna: "#A0522D",
    silver: "#C0C0C0",
    skyblue: "#87CEEB",
    slateblue: "#6A5ACD",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#FFFAFA",
    springgreen: "#00FF7F",
    steelblue: "#4682B4",
    tan: "#D2B48C",
    teal: "#008080",
    thistle: "#D8BFD8",
    tomato: "#FF6347",
    turquoise: "#40E0D0",
    violet: "#EE82EE",
    wheat: "#F5DEB3",
    white: "#FFFFFF",
    whitesmoke: "#F5F5F5",
    yellow: "#FFFF00",
    yellowgreen: "#9ACD32",
  };
  function wR(e) {
    let t,
      r,
      n,
      o = 1,
      i = e.replace(/\s/g, "").toLowerCase(),
      s = (typeof El[i] == "string" ? El[i].toLowerCase() : null) || i;
    if (s.startsWith("#")) {
      let u = s.substring(1);
      u.length === 3 || u.length === 4
        ? ((t = parseInt(u[0] + u[0], 16)),
          (r = parseInt(u[1] + u[1], 16)),
          (n = parseInt(u[2] + u[2], 16)),
          u.length === 4 && (o = parseInt(u[3] + u[3], 16) / 255))
        : (u.length === 6 || u.length === 8) &&
          ((t = parseInt(u.substring(0, 2), 16)),
          (r = parseInt(u.substring(2, 4), 16)),
          (n = parseInt(u.substring(4, 6), 16)),
          u.length === 8 && (o = parseInt(u.substring(6, 8), 16) / 255));
    } else if (s.startsWith("rgba")) {
      let u = s.match(/rgba\(([^)]+)\)/)[1].split(",");
      (t = parseInt(u[0], 10)),
        (r = parseInt(u[1], 10)),
        (n = parseInt(u[2], 10)),
        (o = parseFloat(u[3]));
    } else if (s.startsWith("rgb")) {
      let u = s.match(/rgb\(([^)]+)\)/)[1].split(",");
      (t = parseInt(u[0], 10)),
        (r = parseInt(u[1], 10)),
        (n = parseInt(u[2], 10));
    } else if (s.startsWith("hsla")) {
      let u = s.match(/hsla\(([^)]+)\)/)[1].split(","),
        l = parseFloat(u[0]),
        p = parseFloat(u[1].replace("%", "")) / 100,
        d = parseFloat(u[2].replace("%", "")) / 100;
      o = parseFloat(u[3]);
      let f = (1 - Math.abs(2 * d - 1)) * p,
        E = f * (1 - Math.abs(((l / 60) % 2) - 1)),
        y = d - f / 2,
        g,
        I,
        _;
      l >= 0 && l < 60
        ? ((g = f), (I = E), (_ = 0))
        : l >= 60 && l < 120
        ? ((g = E), (I = f), (_ = 0))
        : l >= 120 && l < 180
        ? ((g = 0), (I = f), (_ = E))
        : l >= 180 && l < 240
        ? ((g = 0), (I = E), (_ = f))
        : l >= 240 && l < 300
        ? ((g = E), (I = 0), (_ = f))
        : ((g = f), (I = 0), (_ = E)),
        (t = Math.round((g + y) * 255)),
        (r = Math.round((I + y) * 255)),
        (n = Math.round((_ + y) * 255));
    } else if (s.startsWith("hsl")) {
      let u = s.match(/hsl\(([^)]+)\)/)[1].split(","),
        l = parseFloat(u[0]),
        p = parseFloat(u[1].replace("%", "")) / 100,
        d = parseFloat(u[2].replace("%", "")) / 100,
        f = (1 - Math.abs(2 * d - 1)) * p,
        E = f * (1 - Math.abs(((l / 60) % 2) - 1)),
        y = d - f / 2,
        g,
        I,
        _;
      l >= 0 && l < 60
        ? ((g = f), (I = E), (_ = 0))
        : l >= 60 && l < 120
        ? ((g = E), (I = f), (_ = 0))
        : l >= 120 && l < 180
        ? ((g = 0), (I = f), (_ = E))
        : l >= 180 && l < 240
        ? ((g = 0), (I = E), (_ = f))
        : l >= 240 && l < 300
        ? ((g = E), (I = 0), (_ = f))
        : ((g = f), (I = 0), (_ = E)),
        (t = Math.round((g + y) * 255)),
        (r = Math.round((I + y) * 255)),
        (n = Math.round((_ + y) * 255));
    }
    if (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n))
      throw new Error(
        `Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`
      );
    return { red: t, green: r, blue: n, alpha: o };
  }
});
var gl = c((qn) => {
  "use strict";
  Object.defineProperty(qn, "__esModule", { value: !0 });
  function qR(e, t) {
    for (var r in t) Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
  }
  qR(qn, {
    clearPlugin: function () {
      return KR;
    },
    createPluginInstance: function () {
      return HR;
    },
    getPluginConfig: function () {
      return XR;
    },
    getPluginDestination: function () {
      return BR;
    },
    getPluginDuration: function () {
      return VR;
    },
    getPluginOrigin: function () {
      return UR;
    },
    renderPlugin: function () {
      return kR;
    },
  });
  var GR = wn(),
    XR = (e, t) => e.value[t],
    VR = () => null,
    UR = (e, t) => {
      if (e) return e;
      let r = t.config.value,
        n = t.config.target.objectId,
        o = getComputedStyle(document.documentElement).getPropertyValue(n);
      if (r.size != null) return { size: parseInt(o, 10) };
      if (r.unit === "%" || r.unit === "-") return { size: parseFloat(o) };
      if (r.red != null && r.green != null && r.blue != null)
        return (0, GR.normalizeColor)(o);
    },
    BR = (e) => e.value,
    HR = () => null,
    WR = {
      color: {
        match: ({ red: e, green: t, blue: r, alpha: n }) =>
          [e, t, r, n].every((o) => o != null),
        getValue: ({ red: e, green: t, blue: r, alpha: n }) =>
          `rgba(${e}, ${t}, ${r}, ${n})`,
      },
      size: {
        match: ({ size: e }) => e != null,
        getValue: ({ size: e }, t) => {
          switch (t) {
            case "-":
              return e;
            default:
              return `${e}${t}`;
          }
        },
      },
    },
    kR = (e, t, r) => {
      let {
          target: { objectId: n },
          value: { unit: o },
        } = r.config,
        i = t.PLUGIN_VARIABLE,
        a = Object.values(WR).find((s) => s.match(i, o));
      a && document.documentElement.style.setProperty(n, a.getValue(i, o));
    },
    KR = (e, t) => {
      let r = t.config.target.objectId;
      document.documentElement.style.removeProperty(r);
    };
});
var _l = c((Gn) => {
  "use strict";
  Object.defineProperty(Gn, "__esModule", { value: !0 });
  Object.defineProperty(Gn, "pluginMethodMap", {
    enumerable: !0,
    get: function () {
      return $R;
    },
  });
  var $t = (H(), $(hi)),
    jR = Zt(ll()),
    zR = Zt(pl()),
    YR = Zt(dl()),
    QR = Zt(gl());
  function yl(e) {
    if (typeof WeakMap != "function") return null;
    var t = new WeakMap(),
      r = new WeakMap();
    return (yl = function (n) {
      return n ? r : t;
    })(e);
  }
  function Zt(e, t) {
    if (!t && e && e.__esModule) return e;
    if (e === null || (typeof e != "object" && typeof e != "function"))
      return { default: e };
    var r = yl(t);
    if (r && r.has(e)) return r.get(e);
    var n = { __proto__: null },
      o = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var i in e)
      if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
        var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
        a && (a.get || a.set) ? Object.defineProperty(n, i, a) : (n[i] = e[i]);
      }
    return (n.default = e), r && r.set(e, n), n;
  }
  var $R = new Map([
    [$t.ActionTypeConsts.PLUGIN_LOTTIE, { ...jR }],
    [$t.ActionTypeConsts.PLUGIN_SPLINE, { ...zR }],
    [$t.ActionTypeConsts.PLUGIN_RIVE, { ...YR }],
    [$t.ActionTypeConsts.PLUGIN_VARIABLE, { ...QR }],
  ]);
});
var Il = {};
B(Il, {
  clearPlugin: () => Wn,
  createPluginInstance: () => JR,
  getPluginConfig: () => Vn,
  getPluginDestination: () => Bn,
  getPluginDuration: () => ZR,
  getPluginOrigin: () => Un,
  isPluginType: () => ge,
  renderPlugin: () => Hn,
});
function ge(e) {
  return Xn.pluginMethodMap.has(e);
}
var Xn,
  ye,
  Vn,
  Un,
  ZR,
  Bn,
  JR,
  Hn,
  Wn,
  kn = D(() => {
    "use strict";
    zt();
    Xn = C(_l());
    (ye = (e) => (t) => {
      if (!Y) return () => null;
      let r = Xn.pluginMethodMap.get(t);
      if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
      let n = r[e];
      if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
      return n;
    }),
      (Vn = ye("getPluginConfig")),
      (Un = ye("getPluginOrigin")),
      (ZR = ye("getPluginDuration")),
      (Bn = ye("getPluginDestination")),
      (JR = ye("createPluginInstance")),
      (Hn = ye("renderPlugin")),
      (Wn = ye("clearPlugin"));
  });
var ml = c((Qw, Tl) => {
  function eb(e, t) {
    return e == null || e !== e ? t : e;
  }
  Tl.exports = eb;
});
var Al = c(($w, hl) => {
  function tb(e, t, r, n) {
    var o = -1,
      i = e == null ? 0 : e.length;
    for (n && i && (r = e[++o]); ++o < i; ) r = t(r, e[o], o, e);
    return r;
  }
  hl.exports = tb;
});
var Sl = c((Zw, vl) => {
  function rb(e) {
    return function (t, r, n) {
      for (var o = -1, i = Object(t), a = n(t), s = a.length; s--; ) {
        var u = a[e ? s : ++o];
        if (r(i[u], u, i) === !1) break;
      }
      return t;
    };
  }
  vl.exports = rb;
});
var Rl = c((Jw, Ol) => {
  var nb = Sl(),
    ob = nb();
  Ol.exports = ob;
});
var Kn = c((eq, bl) => {
  var ib = Rl(),
    ab = rt();
  function sb(e, t) {
    return e && ib(e, t, ab);
  }
  bl.exports = sb;
});
var Cl = c((tq, xl) => {
  var ub = de();
  function cb(e, t) {
    return function (r, n) {
      if (r == null) return r;
      if (!ub(r)) return e(r, n);
      for (
        var o = r.length, i = t ? o : -1, a = Object(r);
        (t ? i-- : ++i < o) && n(a[i], i, a) !== !1;

      );
      return r;
    };
  }
  xl.exports = cb;
});
var jn = c((rq, Pl) => {
  var lb = Kn(),
    fb = Cl(),
    pb = fb(lb);
  Pl.exports = pb;
});
var Ll = c((nq, Nl) => {
  function db(e, t, r, n, o) {
    return (
      o(e, function (i, a, s) {
        r = n ? ((n = !1), i) : t(r, i, a, s);
      }),
      r
    );
  }
  Nl.exports = db;
});
var Ml = c((oq, Dl) => {
  var Eb = Al(),
    gb = jn(),
    yb = le(),
    _b = Ll(),
    Ib = q();
  function Tb(e, t, r) {
    var n = Ib(e) ? Eb : _b,
      o = arguments.length < 3;
    return n(e, yb(t, 4), r, o, gb);
  }
  Dl.exports = Tb;
});
var wl = c((iq, Fl) => {
  var mb = An(),
    hb = le(),
    Ab = vn(),
    vb = Math.max,
    Sb = Math.min;
  function Ob(e, t, r) {
    var n = e == null ? 0 : e.length;
    if (!n) return -1;
    var o = n - 1;
    return (
      r !== void 0 && ((o = Ab(r)), (o = r < 0 ? vb(n + o, 0) : Sb(o, n - 1))),
      mb(e, hb(t, 3), o, !0)
    );
  }
  Fl.exports = Ob;
});
var Gl = c((aq, ql) => {
  var Rb = hn(),
    bb = wl(),
    xb = Rb(bb);
  ql.exports = xb;
});
function Xl(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Cb(e, t) {
  if (Xl(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  let r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (let o = 0; o < r.length; o++)
    if (!Object.hasOwn(t, r[o]) || !Xl(e[r[o]], t[r[o]])) return !1;
  return !0;
}
var zn,
  Vl = D(() => {
    "use strict";
    zn = Cb;
  });
var of = {};
B(of, {
  cleanupHTMLElement: () => Rx,
  clearAllStyles: () => Ox,
  clearObjectCache: () => Kb,
  getActionListProgress: () => xx,
  getAffectedElements: () => Jn,
  getComputedStyle: () => ex,
  getDestinationValues: () => sx,
  getElementId: () => Qb,
  getInstanceId: () => zb,
  getInstanceOrigin: () => nx,
  getItemConfigByKey: () => ax,
  getMaxDurationItemIndex: () => nf,
  getNamespacedParameterId: () => Nx,
  getRenderType: () => ef,
  getStyleProp: () => ux,
  mediaQueriesEqual: () => Dx,
  observeStore: () => Jb,
  reduceListToGroup: () => Cx,
  reifyState: () => $b,
  renderHTMLElement: () => cx,
  shallowEqual: () => zn,
  shouldAllowMediaQuery: () => Lx,
  shouldNamespaceEventParameter: () => Px,
  stringifyTarget: () => Mx,
});
function Kb() {
  Jt.clear();
}
function zb() {
  return "i" + jb++;
}
function Qb(e, t) {
  for (let r in e) {
    let n = e[r];
    if (n && n.ref === t) return n.id;
  }
  return "e" + Yb++;
}
function $b({ events: e, actionLists: t, site: r } = {}) {
  let n = (0, nr.default)(
      e,
      (a, s) => {
        let { eventTypeId: u } = s;
        return a[u] || (a[u] = {}), (a[u][s.id] = s), a;
      },
      {}
    ),
    o = r && r.mediaQueries,
    i = [];
  return (
    o
      ? (i = o.map((a) => a.key))
      : ((o = []), console.warn("IX2 missing mediaQueries in site data")),
    {
      ixData: {
        events: e,
        actionLists: t,
        eventTypeMap: n,
        mediaQueries: o,
        mediaQueryKeys: i,
      },
    }
  );
}
function Jb({ store: e, select: t, onChange: r, comparator: n = Zb }) {
  let { getState: o, subscribe: i } = e,
    a = i(u),
    s = t(o());
  function u() {
    let l = t(o());
    if (l == null) {
      a();
      return;
    }
    n(l, s) || ((s = l), r(s, e));
  }
  return a;
}
function Hl(e) {
  let t = typeof e;
  if (t === "string") return { id: e };
  if (e != null && t === "object") {
    let {
      id: r,
      objectId: n,
      selector: o,
      selectorGuids: i,
      appliesTo: a,
      useEventTarget: s,
    } = e;
    return {
      id: r,
      objectId: n,
      selector: o,
      selectorGuids: i,
      appliesTo: a,
      useEventTarget: s,
    };
  }
  return {};
}
function Jn({
  config: e,
  event: t,
  eventTarget: r,
  elementRoot: n,
  elementApi: o,
}) {
  if (!o) throw new Error("IX2 missing elementApi");
  let { targets: i } = e;
  if (Array.isArray(i) && i.length > 0)
    return i.reduce(
      (P, N) =>
        P.concat(
          Jn({
            config: { target: N },
            event: t,
            eventTarget: r,
            elementRoot: n,
            elementApi: o,
          })
        ),
      []
    );
  let {
      getValidDocument: a,
      getQuerySelector: s,
      queryDocument: u,
      getChildElements: l,
      getSiblingElements: p,
      matchSelector: d,
      elementContains: f,
      isSiblingNode: E,
    } = o,
    { target: y } = e;
  if (!y) return [];
  let {
    id: g,
    objectId: I,
    selector: _,
    selectorGuids: m,
    appliesTo: v,
    useEventTarget: h,
  } = Hl(y);
  if (I) return [Jt.has(I) ? Jt.get(I) : Jt.set(I, {}).get(I)];
  if (v === Kr.PAGE) {
    let P = a(g);
    return P ? [P] : [];
  }
  let T = (t?.action?.config?.affectedElements ?? {})[g || _] || {},
    S = !!(T.id || T.selector),
    A,
    R,
    b,
    x = t && s(Hl(t.target));
  if (
    (S
      ? ((A = T.limitAffectedElements), (R = x), (b = s(T)))
      : (R = b = s({ id: g, selector: _, selectorGuids: m })),
    t && h)
  ) {
    let P = r && (b || h === !0) ? [r] : u(x);
    if (b) {
      if (h === Hb) return u(b).filter((N) => P.some((F) => f(N, F)));
      if (h === Ul) return u(b).filter((N) => P.some((F) => f(F, N)));
      if (h === Bl) return u(b).filter((N) => P.some((F) => E(F, N)));
    }
    return P;
  }
  return R == null || b == null
    ? []
    : Y && n
    ? u(b).filter((P) => n.contains(P))
    : A === Ul
    ? u(R, b)
    : A === Bb
    ? l(u(R)).filter(d(b))
    : A === Bl
    ? p(u(R)).filter(d(b))
    : u(b);
}
function ex({ element: e, actionItem: t }) {
  if (!Y) return {};
  let { actionTypeId: r } = t;
  switch (r) {
    case qe:
    case Ge:
    case Xe:
    case Ve:
    case ir:
      return window.getComputedStyle(e);
    default:
      return {};
  }
}
function nx(e, t = {}, r = {}, n, o) {
  let { getStyle: i } = o,
    { actionTypeId: a } = n;
  if (ge(a)) return Un(a)(t[a], n);
  switch (n.actionTypeId) {
    case Me:
    case Fe:
    case we:
    case pt:
      return t[n.actionTypeId] || eo[n.actionTypeId];
    case dt:
      return tx(t[n.actionTypeId], n.config.filters);
    case Et:
      return rx(t[n.actionTypeId], n.config.fontVariations);
    case $l:
      return { value: (0, ie.default)(parseFloat(i(e, tr)), 1) };
    case qe: {
      let s = i(e, ee),
        u = i(e, te),
        l,
        p;
      return (
        n.config.widthUnit === pe
          ? (l = Wl.test(s) ? parseFloat(s) : parseFloat(r.width))
          : (l = (0, ie.default)(parseFloat(s), parseFloat(r.width))),
        n.config.heightUnit === pe
          ? (p = Wl.test(u) ? parseFloat(u) : parseFloat(r.height))
          : (p = (0, ie.default)(parseFloat(u), parseFloat(r.height))),
        { widthValue: l, heightValue: p }
      );
    }
    case Ge:
    case Xe:
    case Ve:
      return Ax({
        element: e,
        actionTypeId: n.actionTypeId,
        computedStyle: r,
        getStyle: i,
      });
    case ir:
      return { value: (0, ie.default)(i(e, rr), r.display) };
    case kb:
      return t[n.actionTypeId] || { value: 0 };
    default:
      return;
  }
}
function sx({ element: e, actionItem: t, elementApi: r }) {
  if (ge(t.actionTypeId)) return Bn(t.actionTypeId)(t.config);
  switch (t.actionTypeId) {
    case Me:
    case Fe:
    case we:
    case pt: {
      let { xValue: n, yValue: o, zValue: i } = t.config;
      return { xValue: n, yValue: o, zValue: i };
    }
    case qe: {
      let { getStyle: n, setStyle: o, getProperty: i } = r,
        { widthUnit: a, heightUnit: s } = t.config,
        { widthValue: u, heightValue: l } = t.config;
      if (!Y) return { widthValue: u, heightValue: l };
      if (a === pe) {
        let p = n(e, ee);
        o(e, ee, ""), (u = i(e, "offsetWidth")), o(e, ee, p);
      }
      if (s === pe) {
        let p = n(e, te);
        o(e, te, ""), (l = i(e, "offsetHeight")), o(e, te, p);
      }
      return { widthValue: u, heightValue: l };
    }
    case Ge:
    case Xe:
    case Ve: {
      let {
        rValue: n,
        gValue: o,
        bValue: i,
        aValue: a,
        globalSwatchId: s,
      } = t.config;
      if (s && s.startsWith("--")) {
        let { getStyle: u } = r,
          l = u(e, s),
          p = (0, jl.normalizeColor)(l);
        return {
          rValue: p.red,
          gValue: p.green,
          bValue: p.blue,
          aValue: p.alpha,
        };
      }
      return { rValue: n, gValue: o, bValue: i, aValue: a };
    }
    case dt:
      return t.config.filters.reduce(ox, {});
    case Et:
      return t.config.fontVariations.reduce(ix, {});
    default: {
      let { value: n } = t.config;
      return { value: n };
    }
  }
}
function ef(e) {
  if (/^TRANSFORM_/.test(e)) return Yl;
  if (/^STYLE_/.test(e)) return $n;
  if (/^GENERAL_/.test(e)) return Qn;
  if (/^PLUGIN_/.test(e)) return Ql;
}
function ux(e, t) {
  return e === $n ? t.replace("STYLE_", "").toLowerCase() : null;
}
function cx(e, t, r, n, o, i, a, s, u) {
  switch (s) {
    case Yl:
      return Ex(e, t, r, o, a);
    case $n:
      return vx(e, t, r, o, i, a);
    case Qn:
      return Sx(e, o, a);
    case Ql: {
      let { actionTypeId: l } = o;
      if (ge(l)) return Hn(l)(u, t, o);
    }
  }
}
function Ex(e, t, r, n, o) {
  let i = dx
      .map((s) => {
        let u = eo[s],
          {
            xValue: l = u.xValue,
            yValue: p = u.yValue,
            zValue: d = u.zValue,
            xUnit: f = "",
            yUnit: E = "",
            zUnit: y = "",
          } = t[s] || {};
        switch (s) {
          case Me:
            return `${Lb}(${l}${f}, ${p}${E}, ${d}${y})`;
          case Fe:
            return `${Db}(${l}${f}, ${p}${E}, ${d}${y})`;
          case we:
            return `${Mb}(${l}${f}) ${Fb}(${p}${E}) ${wb}(${d}${y})`;
          case pt:
            return `${qb}(${l}${f}, ${p}${E})`;
          default:
            return "";
        }
      })
      .join(" "),
    { setStyle: a } = o;
  _e(e, fe, o), a(e, fe, i), _x(n, r) && a(e, jt, Gb);
}
function gx(e, t, r, n) {
  let o = (0, nr.default)(t, (a, s, u) => `${a} ${u}(${s}${px(u, r)})`, ""),
    { setStyle: i } = n;
  _e(e, ct, n), i(e, ct, o);
}
function yx(e, t, r, n) {
  let o = (0, nr.default)(t, (a, s, u) => (a.push(`"${u}" ${s}`), a), []).join(
      ", "
    ),
    { setStyle: i } = n;
  _e(e, lt, n), i(e, lt, o);
}
function _x({ actionTypeId: e }, { xValue: t, yValue: r, zValue: n }) {
  return (
    (e === Me && n !== void 0) ||
    (e === Fe && n !== void 0) ||
    (e === we && (t !== void 0 || r !== void 0))
  );
}
function hx(e, t) {
  let r = e.exec(t);
  return r ? r[1] : "";
}
function Ax({ element: e, actionTypeId: t, computedStyle: r, getStyle: n }) {
  let o = Zn[t],
    i = n(e, o),
    a = Tx.test(i) ? i : r[o],
    s = hx(mx, a).split(ft);
  return {
    rValue: (0, ie.default)(parseInt(s[0], 10), 255),
    gValue: (0, ie.default)(parseInt(s[1], 10), 255),
    bValue: (0, ie.default)(parseInt(s[2], 10), 255),
    aValue: (0, ie.default)(parseFloat(s[3]), 1),
  };
}
function vx(e, t, r, n, o, i) {
  let { setStyle: a } = i;
  switch (n.actionTypeId) {
    case qe: {
      let { widthUnit: s = "", heightUnit: u = "" } = n.config,
        { widthValue: l, heightValue: p } = r;
      l !== void 0 && (s === pe && (s = "px"), _e(e, ee, i), a(e, ee, l + s)),
        p !== void 0 && (u === pe && (u = "px"), _e(e, te, i), a(e, te, p + u));
      break;
    }
    case dt: {
      gx(e, r, n.config, i);
      break;
    }
    case Et: {
      yx(e, r, n.config, i);
      break;
    }
    case Ge:
    case Xe:
    case Ve: {
      let s = Zn[n.actionTypeId],
        u = Math.round(r.rValue),
        l = Math.round(r.gValue),
        p = Math.round(r.bValue),
        d = r.aValue;
      _e(e, s, i),
        a(e, s, d >= 1 ? `rgb(${u},${l},${p})` : `rgba(${u},${l},${p},${d})`);
      break;
    }
    default: {
      let { unit: s = "" } = n.config;
      _e(e, o, i), a(e, o, r.value + s);
      break;
    }
  }
}
function Sx(e, t, r) {
  let { setStyle: n } = r;
  switch (t.actionTypeId) {
    case ir: {
      let { value: o } = t.config;
      o === Xb && Y ? n(e, rr, On) : n(e, rr, o);
      return;
    }
  }
}
function _e(e, t, r) {
  if (!Y) return;
  let n = Jl[t];
  if (!n) return;
  let { getStyle: o, setStyle: i } = r,
    a = o(e, De);
  if (!a) {
    i(e, De, n);
    return;
  }
  let s = a.split(ft).map(Zl);
  s.indexOf(n) === -1 && i(e, De, s.concat(n).join(ft));
}
function tf(e, t, r) {
  if (!Y) return;
  let n = Jl[t];
  if (!n) return;
  let { getStyle: o, setStyle: i } = r,
    a = o(e, De);
  !a ||
    a.indexOf(n) === -1 ||
    i(
      e,
      De,
      a
        .split(ft)
        .map(Zl)
        .filter((s) => s !== n)
        .join(ft)
    );
}
function Ox({ store: e, elementApi: t }) {
  let { ixData: r } = e.getState(),
    { events: n = {}, actionLists: o = {} } = r;
  Object.keys(n).forEach((i) => {
    let a = n[i],
      { config: s } = a.action,
      { actionListId: u } = s,
      l = o[u];
    l && kl({ actionList: l, event: a, elementApi: t });
  }),
    Object.keys(o).forEach((i) => {
      kl({ actionList: o[i], elementApi: t });
    });
}
function kl({ actionList: e = {}, event: t, elementApi: r }) {
  let { actionItemGroups: n, continuousParameterGroups: o } = e;
  n &&
    n.forEach((i) => {
      Kl({ actionGroup: i, event: t, elementApi: r });
    }),
    o &&
      o.forEach((i) => {
        let { continuousActionGroups: a } = i;
        a.forEach((s) => {
          Kl({ actionGroup: s, event: t, elementApi: r });
        });
      });
}
function Kl({ actionGroup: e, event: t, elementApi: r }) {
  let { actionItems: n } = e;
  n.forEach((o) => {
    let { actionTypeId: i, config: a } = o,
      s;
    ge(i)
      ? (s = (u) => Wn(i)(u, o))
      : (s = rf({ effect: bx, actionTypeId: i, elementApi: r })),
      Jn({ config: a, event: t, elementApi: r }).forEach(s);
  });
}
function Rx(e, t, r) {
  let { setStyle: n, getStyle: o } = r,
    { actionTypeId: i } = t;
  if (i === qe) {
    let { config: a } = t;
    a.widthUnit === pe && n(e, ee, ""), a.heightUnit === pe && n(e, te, "");
  }
  o(e, De) && rf({ effect: tf, actionTypeId: i, elementApi: r })(e);
}
function bx(e, t, r) {
  let { setStyle: n } = r;
  tf(e, t, r), n(e, t, ""), t === fe && n(e, jt, "");
}
function nf(e) {
  let t = 0,
    r = 0;
  return (
    e.forEach((n, o) => {
      let { config: i } = n,
        a = i.delay + i.duration;
      a >= t && ((t = a), (r = o));
    }),
    r
  );
}
function xx(e, t) {
  let { actionItemGroups: r, useFirstGroupAsInitialState: n } = e,
    { actionItem: o, verboseTimeElapsed: i = 0 } = t,
    a = 0,
    s = 0;
  return (
    r.forEach((u, l) => {
      if (n && l === 0) return;
      let { actionItems: p } = u,
        d = p[nf(p)],
        { config: f, actionTypeId: E } = d;
      o.id === d.id && (s = a + i);
      let y = ef(E) === Qn ? 0 : f.duration;
      a += f.delay + y;
    }),
    a > 0 ? ut(s / a) : 0
  );
}
function Cx({ actionList: e, actionItemId: t, rawData: r }) {
  let { actionItemGroups: n, continuousParameterGroups: o } = e,
    i = [],
    a = (s) => (
      i.push((0, or.mergeIn)(s, ["config"], { delay: 0, duration: 0 })),
      s.id === t
    );
  return (
    n && n.some(({ actionItems: s }) => s.some(a)),
    o &&
      o.some((s) => {
        let { continuousActionGroups: u } = s;
        return u.some(({ actionItems: l }) => l.some(a));
      }),
    (0, or.setIn)(r, ["actionLists"], {
      [e.id]: { id: e.id, actionItemGroups: [{ actionItems: i }] },
    })
  );
}
function Px(e, { basedOn: t }) {
  return (
    (e === z.SCROLLING_IN_VIEW && (t === Z.ELEMENT || t == null)) ||
    (e === z.MOUSE_MOVE && t === Z.ELEMENT)
  );
}
function Nx(e, t) {
  return e + Wb + t;
}
function Lx(e, t) {
  return t == null ? !0 : e.indexOf(t) !== -1;
}
function Dx(e, t) {
  return zn(e && e.sort(), t && t.sort());
}
function Mx(e) {
  if (typeof e == "string") return e;
  if (e.pluginElement && e.objectId) return e.pluginElement + Yn + e.objectId;
  if (e.objectId) return e.objectId;
  let { id: t = "", selector: r = "", useEventTarget: n = "" } = e;
  return t + Yn + r + Yn + n;
}
var ie,
  nr,
  er,
  or,
  jl,
  Pb,
  Nb,
  Lb,
  Db,
  Mb,
  Fb,
  wb,
  qb,
  Gb,
  Xb,
  tr,
  ct,
  lt,
  ee,
  te,
  zl,
  Vb,
  Ub,
  Ul,
  Bb,
  Bl,
  Hb,
  rr,
  De,
  pe,
  ft,
  Wb,
  Yn,
  Yl,
  Qn,
  $n,
  Ql,
  Me,
  Fe,
  we,
  pt,
  $l,
  dt,
  Et,
  qe,
  Ge,
  Xe,
  Ve,
  ir,
  kb,
  Zl,
  Zn,
  Jl,
  Jt,
  jb,
  Yb,
  Zb,
  Wl,
  tx,
  rx,
  ox,
  ix,
  ax,
  eo,
  lx,
  fx,
  px,
  dx,
  Ix,
  Tx,
  mx,
  rf,
  af = D(() => {
    "use strict";
    (ie = C(ml())), (nr = C(Ml())), (er = C(Gl())), (or = C(ve()));
    H();
    Vl();
    xn();
    jl = C(wn());
    kn();
    zt();
    ({
      BACKGROUND: Pb,
      TRANSFORM: Nb,
      TRANSLATE_3D: Lb,
      SCALE_3D: Db,
      ROTATE_X: Mb,
      ROTATE_Y: Fb,
      ROTATE_Z: wb,
      SKEW: qb,
      PRESERVE_3D: Gb,
      FLEX: Xb,
      OPACITY: tr,
      FILTER: ct,
      FONT_VARIATION_SETTINGS: lt,
      WIDTH: ee,
      HEIGHT: te,
      BACKGROUND_COLOR: zl,
      BORDER_COLOR: Vb,
      COLOR: Ub,
      CHILDREN: Ul,
      IMMEDIATE_CHILDREN: Bb,
      SIBLINGS: Bl,
      PARENT: Hb,
      DISPLAY: rr,
      WILL_CHANGE: De,
      AUTO: pe,
      COMMA_DELIMITER: ft,
      COLON_DELIMITER: Wb,
      BAR_DELIMITER: Yn,
      RENDER_TRANSFORM: Yl,
      RENDER_GENERAL: Qn,
      RENDER_STYLE: $n,
      RENDER_PLUGIN: Ql,
    } = G),
      ({
        TRANSFORM_MOVE: Me,
        TRANSFORM_SCALE: Fe,
        TRANSFORM_ROTATE: we,
        TRANSFORM_SKEW: pt,
        STYLE_OPACITY: $l,
        STYLE_FILTER: dt,
        STYLE_FONT_VARIATION: Et,
        STYLE_SIZE: qe,
        STYLE_BACKGROUND_COLOR: Ge,
        STYLE_BORDER: Xe,
        STYLE_TEXT_COLOR: Ve,
        GENERAL_DISPLAY: ir,
        OBJECT_VALUE: kb,
      } = X),
      (Zl = (e) => e.trim()),
      (Zn = Object.freeze({ [Ge]: zl, [Xe]: Vb, [Ve]: Ub })),
      (Jl = Object.freeze({
        [fe]: Nb,
        [zl]: Pb,
        [tr]: tr,
        [ct]: ct,
        [ee]: ee,
        [te]: te,
        [lt]: lt,
      })),
      (Jt = new Map());
    jb = 1;
    Yb = 1;
    Zb = (e, t) => e === t;
    (Wl = /px/),
      (tx = (e, t) =>
        t.reduce(
          (r, n) => (r[n.type] == null && (r[n.type] = lx[n.type]), r),
          e || {}
        )),
      (rx = (e, t) =>
        t.reduce(
          (r, n) => (
            r[n.type] == null &&
              (r[n.type] = fx[n.type] || n.defaultValue || 0),
            r
          ),
          e || {}
        ));
    (ox = (e, t) => (t && (e[t.type] = t.value || 0), e)),
      (ix = (e, t) => (t && (e[t.type] = t.value || 0), e)),
      (ax = (e, t, r) => {
        if (ge(e)) return Vn(e)(r, t);
        switch (e) {
          case dt: {
            let n = (0, er.default)(r.filters, ({ type: o }) => o === t);
            return n ? n.value : 0;
          }
          case Et: {
            let n = (0, er.default)(r.fontVariations, ({ type: o }) => o === t);
            return n ? n.value : 0;
          }
          default:
            return r[t];
        }
      });
    (eo = {
      [Me]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
      [Fe]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
      [we]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
      [pt]: Object.freeze({ xValue: 0, yValue: 0 }),
    }),
      (lx = Object.freeze({
        blur: 0,
        "hue-rotate": 0,
        invert: 0,
        grayscale: 0,
        saturate: 100,
        sepia: 0,
        contrast: 100,
        brightness: 100,
      })),
      (fx = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 })),
      (px = (e, t) => {
        let r = (0, er.default)(t.filters, ({ type: n }) => n === e);
        if (r && r.unit) return r.unit;
        switch (e) {
          case "blur":
            return "px";
          case "hue-rotate":
            return "deg";
          default:
            return "%";
        }
      }),
      (dx = Object.keys(eo));
    (Ix = "\\(([^)]+)\\)"), (Tx = /^rgb/), (mx = RegExp(`rgba?${Ix}`));
    rf =
      ({ effect: e, actionTypeId: t, elementApi: r }) =>
      (n) => {
        switch (t) {
          case Me:
          case Fe:
          case we:
          case pt:
            e(n, fe, r);
            break;
          case dt:
            e(n, ct, r);
            break;
          case Et:
            e(n, lt, r);
            break;
          case $l:
            e(n, tr, r);
            break;
          case qe:
            e(n, ee, r), e(n, te, r);
            break;
          case Ge:
          case Xe:
          case Ve:
            e(n, Zn[t], r);
            break;
          case ir:
            e(n, rr, r);
            break;
        }
      };
  });
var Ie = c((to) => {
  "use strict";
  Object.defineProperty(to, "__esModule", { value: !0 });
  function Fx(e, t) {
    for (var r in t) Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
  }
  Fx(to, {
    IX2BrowserSupport: function () {
      return wx;
    },
    IX2EasingUtils: function () {
      return Gx;
    },
    IX2Easings: function () {
      return qx;
    },
    IX2ElementsReducer: function () {
      return Xx;
    },
    IX2VanillaPlugins: function () {
      return Vx;
    },
    IX2VanillaUtils: function () {
      return Ux;
    },
  });
  var wx = Ue((zt(), $(Zc))),
    qx = Ue((bn(), $(st))),
    Gx = Ue((xn(), $(il))),
    Xx = Ue((cl(), $(ul))),
    Vx = Ue((kn(), $(Il))),
    Ux = Ue((af(), $(of)));
  function sf(e) {
    if (typeof WeakMap != "function") return null;
    var t = new WeakMap(),
      r = new WeakMap();
    return (sf = function (n) {
      return n ? r : t;
    })(e);
  }
  function Ue(e, t) {
    if (!t && e && e.__esModule) return e;
    if (e === null || (typeof e != "object" && typeof e != "function"))
      return { default: e };
    var r = sf(t);
    if (r && r.has(e)) return r.get(e);
    var n = { __proto__: null },
      o = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var i in e)
      if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
        var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
        a && (a.get || a.set) ? Object.defineProperty(n, i, a) : (n[i] = e[i]);
      }
    return (n.default = e), r && r.set(e, n), n;
  }
});
var sr,
  ae,
  Bx,
  Hx,
  Wx,
  kx,
  Kx,
  jx,
  ar,
  uf,
  zx,
  Yx,
  ro,
  Qx,
  $x,
  Zx,
  Jx,
  cf,
  lf = D(() => {
    "use strict";
    H();
    (sr = C(Ie())),
      (ae = C(ve())),
      ({
        IX2_RAW_DATA_IMPORTED: Bx,
        IX2_SESSION_STOPPED: Hx,
        IX2_INSTANCE_ADDED: Wx,
        IX2_INSTANCE_STARTED: kx,
        IX2_INSTANCE_REMOVED: Kx,
        IX2_ANIMATION_FRAME_CHANGED: jx,
      } = w),
      ({
        optimizeFloat: ar,
        applyEasing: uf,
        createBezierEasing: zx,
      } = sr.IX2EasingUtils),
      ({ RENDER_GENERAL: Yx } = G),
      ({
        getItemConfigByKey: ro,
        getRenderType: Qx,
        getStyleProp: $x,
      } = sr.IX2VanillaUtils),
      (Zx = (e, t) => {
        let {
            position: r,
            parameterId: n,
            actionGroups: o,
            destinationKeys: i,
            smoothing: a,
            restingValue: s,
            actionTypeId: u,
            customEasingFn: l,
            skipMotion: p,
            skipToValue: d,
          } = e,
          { parameters: f } = t.payload,
          E = Math.max(1 - a, 0.01),
          y = f[n];
        y == null && ((E = 1), (y = s));
        let g = Math.max(y, 0) || 0,
          I = ar(g - r),
          _ = p ? d : ar(r + I * E),
          m = _ * 100;
        if (_ === r && e.current) return e;
        let v, h, O, T;
        for (let A = 0, { length: R } = o; A < R; A++) {
          let { keyframe: b, actionItems: x } = o[A];
          if ((A === 0 && (v = x[0]), m >= b)) {
            v = x[0];
            let P = o[A + 1],
              N = P && m !== b;
            (h = N ? P.actionItems[0] : null),
              N && ((O = b / 100), (T = (P.keyframe - b) / 100));
          }
        }
        let S = {};
        if (v && !h)
          for (let A = 0, { length: R } = i; A < R; A++) {
            let b = i[A];
            S[b] = ro(u, b, v.config);
          }
        else if (v && h && O !== void 0 && T !== void 0) {
          let A = (_ - O) / T,
            R = v.config.easing,
            b = uf(R, A, l);
          for (let x = 0, { length: P } = i; x < P; x++) {
            let N = i[x],
              F = ro(u, N, v.config),
              Cr = (ro(u, N, h.config) - F) * b + F;
            S[N] = Cr;
          }
        }
        return (0, ae.merge)(e, { position: _, current: S });
      }),
      (Jx = (e, t) => {
        let {
            active: r,
            origin: n,
            start: o,
            immediate: i,
            renderType: a,
            verbose: s,
            actionItem: u,
            destination: l,
            destinationKeys: p,
            pluginDuration: d,
            instanceDelay: f,
            customEasingFn: E,
            skipMotion: y,
          } = e,
          g = u.config.easing,
          { duration: I, delay: _ } = u.config;
        d != null && (I = d),
          (_ = f ?? _),
          a === Yx ? (I = 0) : (i || y) && (I = _ = 0);
        let { now: m } = t.payload;
        if (r && n) {
          let v = m - (o + _);
          if (s) {
            let A = m - o,
              R = I + _,
              b = ar(Math.min(Math.max(0, A / R), 1));
            e = (0, ae.set)(e, "verboseTimeElapsed", R * b);
          }
          if (v < 0) return e;
          let h = ar(Math.min(Math.max(0, v / I), 1)),
            O = uf(g, h, E),
            T = {},
            S = null;
          return (
            p.length &&
              (S = p.reduce((A, R) => {
                let b = l[R],
                  x = parseFloat(n[R]) || 0,
                  N = (parseFloat(b) - x) * O + x;
                return (A[R] = N), A;
              }, {})),
            (T.current = S),
            (T.position = h),
            h === 1 && ((T.active = !1), (T.complete = !0)),
            (0, ae.merge)(e, T)
          );
        }
        return e;
      }),
      (cf = (e = Object.freeze({}), t) => {
        switch (t.type) {
          case Bx:
            return t.payload.ixInstances || Object.freeze({});
          case Hx:
            return Object.freeze({});
          case Wx: {
            let {
                instanceId: r,
                elementId: n,
                actionItem: o,
                eventId: i,
                eventTarget: a,
                eventStateKey: s,
                actionListId: u,
                groupIndex: l,
                isCarrier: p,
                origin: d,
                destination: f,
                immediate: E,
                verbose: y,
                continuous: g,
                parameterId: I,
                actionGroups: _,
                smoothing: m,
                restingValue: v,
                pluginInstance: h,
                pluginDuration: O,
                instanceDelay: T,
                skipMotion: S,
                skipToValue: A,
              } = t.payload,
              { actionTypeId: R } = o,
              b = Qx(R),
              x = $x(b, R),
              P = Object.keys(f).filter(
                (F) => f[F] != null && typeof f[F] != "string"
              ),
              { easing: N } = o.config;
            return (0, ae.set)(e, r, {
              id: r,
              elementId: n,
              active: !1,
              position: 0,
              start: 0,
              origin: d,
              destination: f,
              destinationKeys: P,
              immediate: E,
              verbose: y,
              current: null,
              actionItem: o,
              actionTypeId: R,
              eventId: i,
              eventTarget: a,
              eventStateKey: s,
              actionListId: u,
              groupIndex: l,
              renderType: b,
              isCarrier: p,
              styleProp: x,
              continuous: g,
              parameterId: I,
              actionGroups: _,
              smoothing: m,
              restingValue: v,
              pluginInstance: h,
              pluginDuration: O,
              instanceDelay: T,
              skipMotion: S,
              skipToValue: A,
              customEasingFn:
                Array.isArray(N) && N.length === 4 ? zx(N) : void 0,
            });
          }
          case kx: {
            let { instanceId: r, time: n } = t.payload;
            return (0, ae.mergeIn)(e, [r], {
              active: !0,
              complete: !1,
              start: n,
            });
          }
          case Kx: {
            let { instanceId: r } = t.payload;
            if (!e[r]) return e;
            let n = {},
              o = Object.keys(e),
              { length: i } = o;
            for (let a = 0; a < i; a++) {
              let s = o[a];
              s !== r && (n[s] = e[s]);
            }
            return n;
          }
          case jx: {
            let r = e,
              n = Object.keys(e),
              { length: o } = n;
            for (let i = 0; i < o; i++) {
              let a = n[i],
                s = e[a],
                u = s.continuous ? Zx : Jx;
              r = (0, ae.set)(r, a, u(s, t));
            }
            return r;
          }
          default:
            return e;
        }
      });
  });
var eC,
  tC,
  rC,
  ff,
  pf = D(() => {
    "use strict";
    H();
    ({
      IX2_RAW_DATA_IMPORTED: eC,
      IX2_SESSION_STOPPED: tC,
      IX2_PARAMETER_CHANGED: rC,
    } = w),
      (ff = (e = {}, t) => {
        switch (t.type) {
          case eC:
            return t.payload.ixParameters || {};
          case tC:
            return {};
          case rC: {
            let { key: r, value: n } = t.payload;
            return (e[r] = n), e;
          }
          default:
            return e;
        }
      });
  });
var gf = {};
B(gf, { default: () => oC });
var df,
  Ef,
  nC,
  oC,
  yf = D(() => {
    "use strict";
    df = C(kr());
    vi();
    Wi();
    ji();
    Ef = C(Ie());
    lf();
    pf();
    ({ ixElements: nC } = Ef.IX2ElementsReducer),
      (oC = (0, df.combineReducers)({
        ixData: Ai,
        ixRequest: Hi,
        ixSession: Ki,
        ixElements: nC,
        ixInstances: cf,
        ixParameters: ff,
      }));
  });
var If = c((Sq, _f) => {
  var iC = ue(),
    aC = q(),
    sC = ne(),
    uC = "[object String]";
  function cC(e) {
    return typeof e == "string" || (!aC(e) && sC(e) && iC(e) == uC);
  }
  _f.exports = cC;
});
var mf = c((Oq, Tf) => {
  var lC = mn(),
    fC = lC("length");
  Tf.exports = fC;
});
var Af = c((Rq, hf) => {
  var pC = "\\ud800-\\udfff",
    dC = "\\u0300-\\u036f",
    EC = "\\ufe20-\\ufe2f",
    gC = "\\u20d0-\\u20ff",
    yC = dC + EC + gC,
    _C = "\\ufe0e\\ufe0f",
    IC = "\\u200d",
    TC = RegExp("[" + IC + pC + yC + _C + "]");
  function mC(e) {
    return TC.test(e);
  }
  hf.exports = mC;
});
var Nf = c((bq, Pf) => {
  var Sf = "\\ud800-\\udfff",
    hC = "\\u0300-\\u036f",
    AC = "\\ufe20-\\ufe2f",
    vC = "\\u20d0-\\u20ff",
    SC = hC + AC + vC,
    OC = "\\ufe0e\\ufe0f",
    RC = "[" + Sf + "]",
    no = "[" + SC + "]",
    oo = "\\ud83c[\\udffb-\\udfff]",
    bC = "(?:" + no + "|" + oo + ")",
    Of = "[^" + Sf + "]",
    Rf = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    bf = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    xC = "\\u200d",
    xf = bC + "?",
    Cf = "[" + OC + "]?",
    CC = "(?:" + xC + "(?:" + [Of, Rf, bf].join("|") + ")" + Cf + xf + ")*",
    PC = Cf + xf + CC,
    NC = "(?:" + [Of + no + "?", no, Rf, bf, RC].join("|") + ")",
    vf = RegExp(oo + "(?=" + oo + ")|" + NC + PC, "g");
  function LC(e) {
    for (var t = (vf.lastIndex = 0); vf.test(e); ) ++t;
    return t;
  }
  Pf.exports = LC;
});
var Df = c((xq, Lf) => {
  var DC = mf(),
    MC = Af(),
    FC = Nf();
  function wC(e) {
    return MC(e) ? FC(e) : DC(e);
  }
  Lf.exports = wC;
});
var Ff = c((Cq, Mf) => {
  var qC = Gt(),
    GC = Xt(),
    XC = de(),
    VC = If(),
    UC = Df(),
    BC = "[object Map]",
    HC = "[object Set]";
  function WC(e) {
    if (e == null) return 0;
    if (XC(e)) return VC(e) ? UC(e) : e.length;
    var t = GC(e);
    return t == BC || t == HC ? e.size : qC(e).length;
  }
  Mf.exports = WC;
});
var qf = c((Pq, wf) => {
  var kC = "Expected a function";
  function KC(e) {
    if (typeof e != "function") throw new TypeError(kC);
    return function () {
      var t = arguments;
      switch (t.length) {
        case 0:
          return !e.call(this);
        case 1:
          return !e.call(this, t[0]);
        case 2:
          return !e.call(this, t[0], t[1]);
        case 3:
          return !e.call(this, t[0], t[1], t[2]);
      }
      return !e.apply(this, t);
    };
  }
  wf.exports = KC;
});
var io = c((Nq, Gf) => {
  var jC = ce(),
    zC = (function () {
      try {
        var e = jC(Object, "defineProperty");
        return e({}, "", {}), e;
      } catch {}
    })();
  Gf.exports = zC;
});
var ao = c((Lq, Vf) => {
  var Xf = io();
  function YC(e, t, r) {
    t == "__proto__" && Xf
      ? Xf(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
      : (e[t] = r);
  }
  Vf.exports = YC;
});
var Bf = c((Dq, Uf) => {
  var QC = ao(),
    $C = xt(),
    ZC = Object.prototype,
    JC = ZC.hasOwnProperty;
  function e0(e, t, r) {
    var n = e[t];
    (!(JC.call(e, t) && $C(n, r)) || (r === void 0 && !(t in e))) &&
      QC(e, t, r);
  }
  Uf.exports = e0;
});
var kf = c((Mq, Wf) => {
  var t0 = Bf(),
    r0 = ot(),
    n0 = Mt(),
    Hf = J(),
    o0 = Ne();
  function i0(e, t, r, n) {
    if (!Hf(e)) return e;
    t = r0(t, e);
    for (var o = -1, i = t.length, a = i - 1, s = e; s != null && ++o < i; ) {
      var u = o0(t[o]),
        l = r;
      if (u === "__proto__" || u === "constructor" || u === "prototype")
        return e;
      if (o != a) {
        var p = s[u];
        (l = n ? n(p, u, s) : void 0),
          l === void 0 && (l = Hf(p) ? p : n0(t[o + 1]) ? [] : {});
      }
      t0(s, u, l), (s = s[u]);
    }
    return e;
  }
  Wf.exports = i0;
});
var jf = c((Fq, Kf) => {
  var a0 = Bt(),
    s0 = kf(),
    u0 = ot();
  function c0(e, t, r) {
    for (var n = -1, o = t.length, i = {}; ++n < o; ) {
      var a = t[n],
        s = a0(e, a);
      r(s, a) && s0(i, u0(a, e), s);
    }
    return i;
  }
  Kf.exports = c0;
});
var Yf = c((wq, zf) => {
  var l0 = Lt(),
    f0 = Lr(),
    p0 = on(),
    d0 = nn(),
    E0 = Object.getOwnPropertySymbols,
    g0 = E0
      ? function (e) {
          for (var t = []; e; ) l0(t, p0(e)), (e = f0(e));
          return t;
        }
      : d0;
  zf.exports = g0;
});
var $f = c((qq, Qf) => {
  function y0(e) {
    var t = [];
    if (e != null) for (var r in Object(e)) t.push(r);
    return t;
  }
  Qf.exports = y0;
});
var Jf = c((Gq, Zf) => {
  var _0 = J(),
    I0 = qt(),
    T0 = $f(),
    m0 = Object.prototype,
    h0 = m0.hasOwnProperty;
  function A0(e) {
    if (!_0(e)) return T0(e);
    var t = I0(e),
      r = [];
    for (var n in e) (n == "constructor" && (t || !h0.call(e, n))) || r.push(n);
    return r;
  }
  Zf.exports = A0;
});
var tp = c((Xq, ep) => {
  var v0 = sn(),
    S0 = Jf(),
    O0 = de();
  function R0(e) {
    return O0(e) ? v0(e, !0) : S0(e);
  }
  ep.exports = R0;
});
var np = c((Vq, rp) => {
  var b0 = rn(),
    x0 = Yf(),
    C0 = tp();
  function P0(e) {
    return b0(e, C0, x0);
  }
  rp.exports = P0;
});
var ip = c((Uq, op) => {
  var N0 = Tn(),
    L0 = le(),
    D0 = jf(),
    M0 = np();
  function F0(e, t) {
    if (e == null) return {};
    var r = N0(M0(e), function (n) {
      return [n];
    });
    return (
      (t = L0(t)),
      D0(e, r, function (n, o) {
        return t(n, o[0]);
      })
    );
  }
  op.exports = F0;
});
var sp = c((Bq, ap) => {
  var w0 = le(),
    q0 = qf(),
    G0 = ip();
  function X0(e, t) {
    return G0(e, q0(w0(t)));
  }
  ap.exports = X0;
});
var cp = c((Hq, up) => {
  var V0 = Gt(),
    U0 = Xt(),
    B0 = Ze(),
    H0 = q(),
    W0 = de(),
    k0 = Dt(),
    K0 = qt(),
    j0 = wt(),
    z0 = "[object Map]",
    Y0 = "[object Set]",
    Q0 = Object.prototype,
    $0 = Q0.hasOwnProperty;
  function Z0(e) {
    if (e == null) return !0;
    if (
      W0(e) &&
      (H0(e) ||
        typeof e == "string" ||
        typeof e.splice == "function" ||
        k0(e) ||
        j0(e) ||
        B0(e))
    )
      return !e.length;
    var t = U0(e);
    if (t == z0 || t == Y0) return !e.size;
    if (K0(e)) return !V0(e).length;
    for (var r in e) if ($0.call(e, r)) return !1;
    return !0;
  }
  up.exports = Z0;
});
var fp = c((Wq, lp) => {
  var J0 = ao(),
    eP = Kn(),
    tP = le();
  function rP(e, t) {
    var r = {};
    return (
      (t = tP(t, 3)),
      eP(e, function (n, o, i) {
        J0(r, o, t(n, o, i));
      }),
      r
    );
  }
  lp.exports = rP;
});
var dp = c((kq, pp) => {
  function nP(e, t) {
    for (
      var r = -1, n = e == null ? 0 : e.length;
      ++r < n && t(e[r], r, e) !== !1;

    );
    return e;
  }
  pp.exports = nP;
});
var gp = c((Kq, Ep) => {
  var oP = Wt();
  function iP(e) {
    return typeof e == "function" ? e : oP;
  }
  Ep.exports = iP;
});
var _p = c((jq, yp) => {
  var aP = dp(),
    sP = jn(),
    uP = gp(),
    cP = q();
  function lP(e, t) {
    var r = cP(e) ? aP : sP;
    return r(e, uP(t));
  }
  yp.exports = lP;
});
var Tp = c((zq, Ip) => {
  var fP = j(),
    pP = function () {
      return fP.Date.now();
    };
  Ip.exports = pP;
});
var Ap = c((Yq, hp) => {
  var dP = J(),
    so = Tp(),
    mp = kt(),
    EP = "Expected a function",
    gP = Math.max,
    yP = Math.min;
  function _P(e, t, r) {
    var n,
      o,
      i,
      a,
      s,
      u,
      l = 0,
      p = !1,
      d = !1,
      f = !0;
    if (typeof e != "function") throw new TypeError(EP);
    (t = mp(t) || 0),
      dP(r) &&
        ((p = !!r.leading),
        (d = "maxWait" in r),
        (i = d ? gP(mp(r.maxWait) || 0, t) : i),
        (f = "trailing" in r ? !!r.trailing : f));
    function E(T) {
      var S = n,
        A = o;
      return (n = o = void 0), (l = T), (a = e.apply(A, S)), a;
    }
    function y(T) {
      return (l = T), (s = setTimeout(_, t)), p ? E(T) : a;
    }
    function g(T) {
      var S = T - u,
        A = T - l,
        R = t - S;
      return d ? yP(R, i - A) : R;
    }
    function I(T) {
      var S = T - u,
        A = T - l;
      return u === void 0 || S >= t || S < 0 || (d && A >= i);
    }
    function _() {
      var T = so();
      if (I(T)) return m(T);
      s = setTimeout(_, g(T));
    }
    function m(T) {
      return (s = void 0), f && n ? E(T) : ((n = o = void 0), a);
    }
    function v() {
      s !== void 0 && clearTimeout(s), (l = 0), (n = u = o = s = void 0);
    }
    function h() {
      return s === void 0 ? a : m(so());
    }
    function O() {
      var T = so(),
        S = I(T);
      if (((n = arguments), (o = this), (u = T), S)) {
        if (s === void 0) return y(u);
        if (d) return clearTimeout(s), (s = setTimeout(_, t)), E(u);
      }
      return s === void 0 && (s = setTimeout(_, t)), a;
    }
    return (O.cancel = v), (O.flush = h), O;
  }
  hp.exports = _P;
});
var Sp = c((Qq, vp) => {
  var IP = Ap(),
    TP = J(),
    mP = "Expected a function";
  function hP(e, t, r) {
    var n = !0,
      o = !0;
    if (typeof e != "function") throw new TypeError(mP);
    return (
      TP(r) &&
        ((n = "leading" in r ? !!r.leading : n),
        (o = "trailing" in r ? !!r.trailing : o)),
      IP(e, t, { leading: n, maxWait: t, trailing: o })
    );
  }
  vp.exports = hP;
});
var Rp = {};
B(Rp, {
  actionListPlaybackChanged: () => He,
  animationFrameChanged: () => cr,
  clearRequested: () => KP,
  elementStateChanged: () => yo,
  eventListenerAdded: () => ur,
  eventStateChanged: () => po,
  instanceAdded: () => Eo,
  instanceRemoved: () => go,
  instanceStarted: () => lr,
  mediaQueriesDefined: () => Io,
  parameterChanged: () => Be,
  playbackRequested: () => WP,
  previewRequested: () => HP,
  rawDataImported: () => uo,
  sessionInitialized: () => co,
  sessionStarted: () => lo,
  sessionStopped: () => fo,
  stopRequested: () => kP,
  testFrameRendered: () => jP,
  viewportWidthChanged: () => _o,
});
var Op,
  AP,
  vP,
  SP,
  OP,
  RP,
  bP,
  xP,
  CP,
  PP,
  NP,
  LP,
  DP,
  MP,
  FP,
  wP,
  qP,
  GP,
  XP,
  VP,
  UP,
  BP,
  uo,
  co,
  lo,
  fo,
  HP,
  WP,
  kP,
  KP,
  ur,
  jP,
  po,
  cr,
  Be,
  Eo,
  lr,
  go,
  yo,
  He,
  _o,
  Io,
  fr = D(() => {
    "use strict";
    H();
    (Op = C(Ie())),
      ({
        IX2_RAW_DATA_IMPORTED: AP,
        IX2_SESSION_INITIALIZED: vP,
        IX2_SESSION_STARTED: SP,
        IX2_SESSION_STOPPED: OP,
        IX2_PREVIEW_REQUESTED: RP,
        IX2_PLAYBACK_REQUESTED: bP,
        IX2_STOP_REQUESTED: xP,
        IX2_CLEAR_REQUESTED: CP,
        IX2_EVENT_LISTENER_ADDED: PP,
        IX2_TEST_FRAME_RENDERED: NP,
        IX2_EVENT_STATE_CHANGED: LP,
        IX2_ANIMATION_FRAME_CHANGED: DP,
        IX2_PARAMETER_CHANGED: MP,
        IX2_INSTANCE_ADDED: FP,
        IX2_INSTANCE_STARTED: wP,
        IX2_INSTANCE_REMOVED: qP,
        IX2_ELEMENT_STATE_CHANGED: GP,
        IX2_ACTION_LIST_PLAYBACK_CHANGED: XP,
        IX2_VIEWPORT_WIDTH_CHANGED: VP,
        IX2_MEDIA_QUERIES_DEFINED: UP,
      } = w),
      ({ reifyState: BP } = Op.IX2VanillaUtils),
      (uo = (e) => ({ type: AP, payload: { ...BP(e) } })),
      (co = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
        type: vP,
        payload: { hasBoundaryNodes: e, reducedMotion: t },
      })),
      (lo = () => ({ type: SP })),
      (fo = () => ({ type: OP })),
      (HP = ({ rawData: e, defer: t }) => ({
        type: RP,
        payload: { defer: t, rawData: e },
      })),
      (WP = ({
        actionTypeId: e = X.GENERAL_START_ACTION,
        actionListId: t,
        actionItemId: r,
        eventId: n,
        allowEvents: o,
        immediate: i,
        testManual: a,
        verbose: s,
        rawData: u,
      }) => ({
        type: bP,
        payload: {
          actionTypeId: e,
          actionListId: t,
          actionItemId: r,
          testManual: a,
          eventId: n,
          allowEvents: o,
          immediate: i,
          verbose: s,
          rawData: u,
        },
      })),
      (kP = (e) => ({ type: xP, payload: { actionListId: e } })),
      (KP = () => ({ type: CP })),
      (ur = (e, t) => ({
        type: PP,
        payload: { target: e, listenerParams: t },
      })),
      (jP = (e = 1) => ({ type: NP, payload: { step: e } })),
      (po = (e, t) => ({ type: LP, payload: { stateKey: e, newState: t } })),
      (cr = (e, t) => ({ type: DP, payload: { now: e, parameters: t } })),
      (Be = (e, t) => ({ type: MP, payload: { key: e, value: t } })),
      (Eo = (e) => ({ type: FP, payload: { ...e } })),
      (lr = (e, t) => ({ type: wP, payload: { instanceId: e, time: t } })),
      (go = (e) => ({ type: qP, payload: { instanceId: e } })),
      (yo = (e, t, r, n) => ({
        type: GP,
        payload: { elementId: e, actionTypeId: t, current: r, actionItem: n },
      })),
      (He = ({ actionListId: e, isPlaying: t }) => ({
        type: XP,
        payload: { actionListId: e, isPlaying: t },
      })),
      (_o = ({ width: e, mediaQueries: t }) => ({
        type: VP,
        payload: { width: e, mediaQueries: t },
      })),
      (Io = () => ({ type: UP }));
  });
var U = {};
B(U, {
  elementContains: () => ho,
  getChildElements: () => nN,
  getClosestElement: () => gt,
  getProperty: () => ZP,
  getQuerySelector: () => mo,
  getRefType: () => Ao,
  getSiblingElements: () => oN,
  getStyle: () => $P,
  getValidDocument: () => eN,
  isSiblingNode: () => rN,
  matchSelector: () => JP,
  queryDocument: () => tN,
  setStyle: () => QP,
});
function QP(e, t, r) {
  e.style[t] = r;
}
function $P(e, t) {
  return t.startsWith("--")
    ? window.getComputedStyle(document.documentElement).getPropertyValue(t)
    : e.style[t];
}
function ZP(e, t) {
  return e[t];
}
function JP(e) {
  return (t) => t[To](e);
}
function mo({ id: e, selector: t }) {
  if (e) {
    let r = e;
    if (e.indexOf(bp) !== -1) {
      let n = e.split(bp),
        o = n[0];
      if (((r = n[1]), o !== document.documentElement.getAttribute(Cp)))
        return null;
    }
    return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`;
  }
  return t;
}
function eN(e) {
  return e == null || e === document.documentElement.getAttribute(Cp)
    ? document
    : null;
}
function tN(e, t) {
  return Array.prototype.slice.call(
    document.querySelectorAll(t ? e + " " + t : e)
  );
}
function ho(e, t) {
  return e.contains(t);
}
function rN(e, t) {
  return e !== t && e.parentNode === t.parentNode;
}
function nN(e) {
  let t = [];
  for (let r = 0, { length: n } = e || []; r < n; r++) {
    let { children: o } = e[r],
      { length: i } = o;
    if (i) for (let a = 0; a < i; a++) t.push(o[a]);
  }
  return t;
}
function oN(e = []) {
  let t = [],
    r = [];
  for (let n = 0, { length: o } = e; n < o; n++) {
    let { parentNode: i } = e[n];
    if (!i || !i.children || !i.children.length || r.indexOf(i) !== -1)
      continue;
    r.push(i);
    let a = i.firstElementChild;
    for (; a != null; )
      e.indexOf(a) === -1 && t.push(a), (a = a.nextElementSibling);
  }
  return t;
}
function Ao(e) {
  return e != null && typeof e == "object"
    ? e instanceof Element
      ? zP
      : YP
    : null;
}
var xp,
  To,
  bp,
  zP,
  YP,
  Cp,
  gt,
  Pp = D(() => {
    "use strict";
    xp = C(Ie());
    H();
    ({ ELEMENT_MATCHES: To } = xp.IX2BrowserSupport),
      ({
        IX2_ID_DELIMITER: bp,
        HTML_ELEMENT: zP,
        PLAIN_OBJECT: YP,
        WF_PAGE: Cp,
      } = G);
    gt = Element.prototype.closest
      ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
      : (e, t) => {
          if (!document.documentElement.contains(e)) return null;
          let r = e;
          do {
            if (r[To] && r[To](t)) return r;
            r = r.parentNode;
          } while (r != null);
          return null;
        };
  });
var vo = c((Jq, Lp) => {
  var iN = J(),
    Np = Object.create,
    aN = (function () {
      function e() {}
      return function (t) {
        if (!iN(t)) return {};
        if (Np) return Np(t);
        e.prototype = t;
        var r = new e();
        return (e.prototype = void 0), r;
      };
    })();
  Lp.exports = aN;
});
var pr = c((e2, Dp) => {
  function sN() {}
  Dp.exports = sN;
});
var Er = c((t2, Mp) => {
  var uN = vo(),
    cN = pr();
  function dr(e, t) {
    (this.__wrapped__ = e),
      (this.__actions__ = []),
      (this.__chain__ = !!t),
      (this.__index__ = 0),
      (this.__values__ = void 0);
  }
  dr.prototype = uN(cN.prototype);
  dr.prototype.constructor = dr;
  Mp.exports = dr;
});
var Gp = c((r2, qp) => {
  var Fp = me(),
    lN = Ze(),
    fN = q(),
    wp = Fp ? Fp.isConcatSpreadable : void 0;
  function pN(e) {
    return fN(e) || lN(e) || !!(wp && e && e[wp]);
  }
  qp.exports = pN;
});
var Up = c((n2, Vp) => {
  var dN = Lt(),
    EN = Gp();
  function Xp(e, t, r, n, o) {
    var i = -1,
      a = e.length;
    for (r || (r = EN), o || (o = []); ++i < a; ) {
      var s = e[i];
      t > 0 && r(s)
        ? t > 1
          ? Xp(s, t - 1, r, n, o)
          : dN(o, s)
        : n || (o[o.length] = s);
    }
    return o;
  }
  Vp.exports = Xp;
});
var Hp = c((o2, Bp) => {
  var gN = Up();
  function yN(e) {
    var t = e == null ? 0 : e.length;
    return t ? gN(e, 1) : [];
  }
  Bp.exports = yN;
});
var kp = c((i2, Wp) => {
  function _N(e, t, r) {
    switch (r.length) {
      case 0:
        return e.call(t);
      case 1:
        return e.call(t, r[0]);
      case 2:
        return e.call(t, r[0], r[1]);
      case 3:
        return e.call(t, r[0], r[1], r[2]);
    }
    return e.apply(t, r);
  }
  Wp.exports = _N;
});
var zp = c((a2, jp) => {
  var IN = kp(),
    Kp = Math.max;
  function TN(e, t, r) {
    return (
      (t = Kp(t === void 0 ? e.length - 1 : t, 0)),
      function () {
        for (
          var n = arguments, o = -1, i = Kp(n.length - t, 0), a = Array(i);
          ++o < i;

        )
          a[o] = n[t + o];
        o = -1;
        for (var s = Array(t + 1); ++o < t; ) s[o] = n[o];
        return (s[t] = r(a)), IN(e, this, s);
      }
    );
  }
  jp.exports = TN;
});
var Qp = c((s2, Yp) => {
  function mN(e) {
    return function () {
      return e;
    };
  }
  Yp.exports = mN;
});
var Jp = c((u2, Zp) => {
  var hN = Qp(),
    $p = io(),
    AN = Wt(),
    vN = $p
      ? function (e, t) {
          return $p(e, "toString", {
            configurable: !0,
            enumerable: !1,
            value: hN(t),
            writable: !0,
          });
        }
      : AN;
  Zp.exports = vN;
});
var td = c((c2, ed) => {
  var SN = 800,
    ON = 16,
    RN = Date.now;
  function bN(e) {
    var t = 0,
      r = 0;
    return function () {
      var n = RN(),
        o = ON - (n - r);
      if (((r = n), o > 0)) {
        if (++t >= SN) return arguments[0];
      } else t = 0;
      return e.apply(void 0, arguments);
    };
  }
  ed.exports = bN;
});
var nd = c((l2, rd) => {
  var xN = Jp(),
    CN = td(),
    PN = CN(xN);
  rd.exports = PN;
});
var id = c((f2, od) => {
  var NN = Hp(),
    LN = zp(),
    DN = nd();
  function MN(e) {
    return DN(LN(e, void 0, NN), e + "");
  }
  od.exports = MN;
});
var ud = c((p2, sd) => {
  var ad = un(),
    FN = ad && new ad();
  sd.exports = FN;
});
var ld = c((d2, cd) => {
  function wN() {}
  cd.exports = wN;
});
var So = c((E2, pd) => {
  var fd = ud(),
    qN = ld(),
    GN = fd
      ? function (e) {
          return fd.get(e);
        }
      : qN;
  pd.exports = GN;
});
var Ed = c((g2, dd) => {
  var XN = {};
  dd.exports = XN;
});
var Oo = c((y2, yd) => {
  var gd = Ed(),
    VN = Object.prototype,
    UN = VN.hasOwnProperty;
  function BN(e) {
    for (
      var t = e.name + "", r = gd[t], n = UN.call(gd, t) ? r.length : 0;
      n--;

    ) {
      var o = r[n],
        i = o.func;
      if (i == null || i == e) return o.name;
    }
    return t;
  }
  yd.exports = BN;
});
var yr = c((_2, _d) => {
  var HN = vo(),
    WN = pr(),
    kN = 4294967295;
  function gr(e) {
    (this.__wrapped__ = e),
      (this.__actions__ = []),
      (this.__dir__ = 1),
      (this.__filtered__ = !1),
      (this.__iteratees__ = []),
      (this.__takeCount__ = kN),
      (this.__views__ = []);
  }
  gr.prototype = HN(WN.prototype);
  gr.prototype.constructor = gr;
  _d.exports = gr;
});
var Td = c((I2, Id) => {
  function KN(e, t) {
    var r = -1,
      n = e.length;
    for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
    return t;
  }
  Id.exports = KN;
});
var hd = c((T2, md) => {
  var jN = yr(),
    zN = Er(),
    YN = Td();
  function QN(e) {
    if (e instanceof jN) return e.clone();
    var t = new zN(e.__wrapped__, e.__chain__);
    return (
      (t.__actions__ = YN(e.__actions__)),
      (t.__index__ = e.__index__),
      (t.__values__ = e.__values__),
      t
    );
  }
  md.exports = QN;
});
var Sd = c((m2, vd) => {
  var $N = yr(),
    Ad = Er(),
    ZN = pr(),
    JN = q(),
    eL = ne(),
    tL = hd(),
    rL = Object.prototype,
    nL = rL.hasOwnProperty;
  function _r(e) {
    if (eL(e) && !JN(e) && !(e instanceof $N)) {
      if (e instanceof Ad) return e;
      if (nL.call(e, "__wrapped__")) return tL(e);
    }
    return new Ad(e);
  }
  _r.prototype = ZN.prototype;
  _r.prototype.constructor = _r;
  vd.exports = _r;
});
var Rd = c((h2, Od) => {
  var oL = yr(),
    iL = So(),
    aL = Oo(),
    sL = Sd();
  function uL(e) {
    var t = aL(e),
      r = sL[t];
    if (typeof r != "function" || !(t in oL.prototype)) return !1;
    if (e === r) return !0;
    var n = iL(r);
    return !!n && e === n[0];
  }
  Od.exports = uL;
});
var Pd = c((A2, Cd) => {
  var bd = Er(),
    cL = id(),
    lL = So(),
    Ro = Oo(),
    fL = q(),
    xd = Rd(),
    pL = "Expected a function",
    dL = 8,
    EL = 32,
    gL = 128,
    yL = 256;
  function _L(e) {
    return cL(function (t) {
      var r = t.length,
        n = r,
        o = bd.prototype.thru;
      for (e && t.reverse(); n--; ) {
        var i = t[n];
        if (typeof i != "function") throw new TypeError(pL);
        if (o && !a && Ro(i) == "wrapper") var a = new bd([], !0);
      }
      for (n = a ? n : r; ++n < r; ) {
        i = t[n];
        var s = Ro(i),
          u = s == "wrapper" ? lL(i) : void 0;
        u &&
        xd(u[0]) &&
        u[1] == (gL | dL | EL | yL) &&
        !u[4].length &&
        u[9] == 1
          ? (a = a[Ro(u[0])].apply(a, u[3]))
          : (a = i.length == 1 && xd(i) ? a[s]() : a.thru(i));
      }
      return function () {
        var l = arguments,
          p = l[0];
        if (a && l.length == 1 && fL(p)) return a.plant(p).value();
        for (var d = 0, f = r ? t[d].apply(this, l) : p; ++d < r; )
          f = t[d].call(this, f);
        return f;
      };
    });
  }
  Cd.exports = _L;
});
var Ld = c((v2, Nd) => {
  var IL = Pd(),
    TL = IL();
  Nd.exports = TL;
});
var Md = c((S2, Dd) => {
  function mL(e, t, r) {
    return (
      e === e &&
        (r !== void 0 && (e = e <= r ? e : r),
        t !== void 0 && (e = e >= t ? e : t)),
      e
    );
  }
  Dd.exports = mL;
});
var wd = c((O2, Fd) => {
  var hL = Md(),
    bo = kt();
  function AL(e, t, r) {
    return (
      r === void 0 && ((r = t), (t = void 0)),
      r !== void 0 && ((r = bo(r)), (r = r === r ? r : 0)),
      t !== void 0 && ((t = bo(t)), (t = t === t ? t : 0)),
      hL(bo(e), t, r)
    );
  }
  Fd.exports = AL;
});
var kd,
  Kd,
  jd,
  zd,
  vL,
  SL,
  OL,
  RL,
  bL,
  xL,
  CL,
  PL,
  NL,
  LL,
  DL,
  ML,
  FL,
  wL,
  qL,
  Yd,
  Qd,
  GL,
  XL,
  VL,
  $d,
  UL,
  BL,
  Zd,
  HL,
  xo,
  Jd,
  qd,
  Gd,
  eE,
  _t,
  WL,
  re,
  tE,
  kL,
  k,
  Q,
  It,
  rE,
  Co,
  Xd,
  Po,
  KL,
  yt,
  jL,
  zL,
  YL,
  nE,
  Vd,
  QL,
  Ud,
  $L,
  ZL,
  JL,
  Bd,
  Ir,
  Tr,
  Hd,
  Wd,
  oE,
  iE = D(() => {
    "use strict";
    (kd = C(Ld())), (Kd = C(Ht())), (jd = C(wd()));
    H();
    No();
    fr();
    (zd = C(Ie())),
      ({
        MOUSE_CLICK: vL,
        MOUSE_SECOND_CLICK: SL,
        MOUSE_DOWN: OL,
        MOUSE_UP: RL,
        MOUSE_OVER: bL,
        MOUSE_OUT: xL,
        DROPDOWN_CLOSE: CL,
        DROPDOWN_OPEN: PL,
        SLIDER_ACTIVE: NL,
        SLIDER_INACTIVE: LL,
        TAB_ACTIVE: DL,
        TAB_INACTIVE: ML,
        NAVBAR_CLOSE: FL,
        NAVBAR_OPEN: wL,
        MOUSE_MOVE: qL,
        PAGE_SCROLL_DOWN: Yd,
        SCROLL_INTO_VIEW: Qd,
        SCROLL_OUT_OF_VIEW: GL,
        PAGE_SCROLL_UP: XL,
        SCROLLING_IN_VIEW: VL,
        PAGE_FINISH: $d,
        ECOMMERCE_CART_CLOSE: UL,
        ECOMMERCE_CART_OPEN: BL,
        PAGE_START: Zd,
        PAGE_SCROLL: HL,
      } = z),
      (xo = "COMPONENT_ACTIVE"),
      (Jd = "COMPONENT_INACTIVE"),
      ({ COLON_DELIMITER: qd } = G),
      ({ getNamespacedParameterId: Gd } = zd.IX2VanillaUtils),
      (eE = (e) => (t) => typeof t == "object" && e(t) ? !0 : t),
      (_t = eE(({ element: e, nativeEvent: t }) => e === t.target)),
      (WL = eE(({ element: e, nativeEvent: t }) => e.contains(t.target))),
      (re = (0, kd.default)([_t, WL])),
      (tE = (e, t) => {
        if (t) {
          let { ixData: r } = e.getState(),
            { events: n } = r,
            o = n[t];
          if (o && !KL[o.eventTypeId]) return o;
        }
        return null;
      }),
      (kL = ({ store: e, event: t }) => {
        let { action: r } = t,
          { autoStopEventId: n } = r.config;
        return !!tE(e, n);
      }),
      (k = ({ store: e, event: t, element: r, eventStateKey: n }, o) => {
        let { action: i, id: a } = t,
          { actionListId: s, autoStopEventId: u } = i.config,
          l = tE(e, u);
        return (
          l &&
            We({
              store: e,
              eventId: u,
              eventTarget: r,
              eventStateKey: u + qd + n.split(qd)[1],
              actionListId: (0, Kd.default)(l, "action.config.actionListId"),
            }),
          We({
            store: e,
            eventId: a,
            eventTarget: r,
            eventStateKey: n,
            actionListId: s,
          }),
          Tt({
            store: e,
            eventId: a,
            eventTarget: r,
            eventStateKey: n,
            actionListId: s,
          }),
          o
        );
      }),
      (Q = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n),
      (It = { handler: Q(re, k) }),
      (rE = { ...It, types: [xo, Jd].join(" ") }),
      (Co = [
        { target: window, types: "resize orientationchange", throttle: !0 },
        {
          target: document,
          types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
          throttle: !0,
        },
      ]),
      (Xd = "mouseover mouseout"),
      (Po = { types: Co }),
      (KL = { PAGE_START: Zd, PAGE_FINISH: $d }),
      (yt = (() => {
        let e = window.pageXOffset !== void 0,
          r =
            document.compatMode === "CSS1Compat"
              ? document.documentElement
              : document.body;
        return () => ({
          scrollLeft: e ? window.pageXOffset : r.scrollLeft,
          scrollTop: e ? window.pageYOffset : r.scrollTop,
          stiffScrollTop: (0, jd.default)(
            e ? window.pageYOffset : r.scrollTop,
            0,
            r.scrollHeight - window.innerHeight
          ),
          scrollWidth: r.scrollWidth,
          scrollHeight: r.scrollHeight,
          clientWidth: r.clientWidth,
          clientHeight: r.clientHeight,
          innerWidth: window.innerWidth,
          innerHeight: window.innerHeight,
        });
      })()),
      (jL = (e, t) =>
        !(
          e.left > t.right ||
          e.right < t.left ||
          e.top > t.bottom ||
          e.bottom < t.top
        )),
      (zL = ({ element: e, nativeEvent: t }) => {
        let { type: r, target: n, relatedTarget: o } = t,
          i = e.contains(n);
        if (r === "mouseover" && i) return !0;
        let a = e.contains(o);
        return !!(r === "mouseout" && i && a);
      }),
      (YL = (e) => {
        let {
            element: t,
            event: { config: r },
          } = e,
          { clientWidth: n, clientHeight: o } = yt(),
          i = r.scrollOffsetValue,
          u = r.scrollOffsetUnit === "PX" ? i : (o * (i || 0)) / 100;
        return jL(t.getBoundingClientRect(), {
          left: 0,
          top: u,
          right: n,
          bottom: o - u,
        });
      }),
      (nE = (e) => (t, r) => {
        let { type: n } = t.nativeEvent,
          o = [xo, Jd].indexOf(n) !== -1 ? n === xo : r.isActive,
          i = { ...r, isActive: o };
        return ((!r || i.isActive !== r.isActive) && e(t, i)) || i;
      }),
      (Vd = (e) => (t, r) => {
        let n = { elementHovered: zL(t) };
        return (
          ((r ? n.elementHovered !== r.elementHovered : n.elementHovered) &&
            e(t, n)) ||
          n
        );
      }),
      (QL = (e) => (t, r) => {
        let n = { ...r, elementVisible: YL(t) };
        return (
          ((r ? n.elementVisible !== r.elementVisible : n.elementVisible) &&
            e(t, n)) ||
          n
        );
      }),
      (Ud =
        (e) =>
        (t, r = {}) => {
          let { stiffScrollTop: n, scrollHeight: o, innerHeight: i } = yt(),
            {
              event: { config: a, eventTypeId: s },
            } = t,
            { scrollOffsetValue: u, scrollOffsetUnit: l } = a,
            p = l === "PX",
            d = o - i,
            f = Number((n / d).toFixed(2));
          if (r && r.percentTop === f) return r;
          let E = (p ? u : (i * (u || 0)) / 100) / d,
            y,
            g,
            I = 0;
          r &&
            ((y = f > r.percentTop),
            (g = r.scrollingDown !== y),
            (I = g ? f : r.anchorTop));
          let _ = s === Yd ? f >= I + E : f <= I - E,
            m = {
              ...r,
              percentTop: f,
              inBounds: _,
              anchorTop: I,
              scrollingDown: y,
            };
          return (r && _ && (g || m.inBounds !== r.inBounds) && e(t, m)) || m;
        }),
      ($L = (e, t) =>
        e.left > t.left &&
        e.left < t.right &&
        e.top > t.top &&
        e.top < t.bottom),
      (ZL = (e) => (t, r) => {
        let n = { finished: document.readyState === "complete" };
        return n.finished && !(r && r.finshed) && e(t), n;
      }),
      (JL = (e) => (t, r) => {
        let n = { started: !0 };
        return r || e(t), n;
      }),
      (Bd =
        (e) =>
        (t, r = { clickCount: 0 }) => {
          let n = { clickCount: (r.clickCount % 2) + 1 };
          return (n.clickCount !== r.clickCount && e(t, n)) || n;
        }),
      (Ir = (e = !0) => ({
        ...rE,
        handler: Q(
          e ? re : _t,
          nE((t, r) => (r.isActive ? It.handler(t, r) : r))
        ),
      })),
      (Tr = (e = !0) => ({
        ...rE,
        handler: Q(
          e ? re : _t,
          nE((t, r) => (r.isActive ? r : It.handler(t, r)))
        ),
      })),
      (Hd = {
        ...Po,
        handler: QL((e, t) => {
          let { elementVisible: r } = t,
            { event: n, store: o } = e,
            { ixData: i } = o.getState(),
            { events: a } = i;
          return !a[n.action.config.autoStopEventId] && t.triggered
            ? t
            : (n.eventTypeId === Qd) === r
            ? (k(e), { ...t, triggered: !0 })
            : t;
        }),
      }),
      (Wd = 0.05),
      (oE = {
        [NL]: Ir(),
        [LL]: Tr(),
        [PL]: Ir(),
        [CL]: Tr(),
        [wL]: Ir(!1),
        [FL]: Tr(!1),
        [DL]: Ir(),
        [ML]: Tr(),
        [BL]: { types: "ecommerce-cart-open", handler: Q(re, k) },
        [UL]: { types: "ecommerce-cart-close", handler: Q(re, k) },
        [vL]: {
          types: "click",
          handler: Q(
            re,
            Bd((e, { clickCount: t }) => {
              kL(e) ? t === 1 && k(e) : k(e);
            })
          ),
        },
        [SL]: {
          types: "click",
          handler: Q(
            re,
            Bd((e, { clickCount: t }) => {
              t === 2 && k(e);
            })
          ),
        },
        [OL]: { ...It, types: "mousedown" },
        [RL]: { ...It, types: "mouseup" },
        [bL]: {
          types: Xd,
          handler: Q(
            re,
            Vd((e, t) => {
              t.elementHovered && k(e);
            })
          ),
        },
        [xL]: {
          types: Xd,
          handler: Q(
            re,
            Vd((e, t) => {
              t.elementHovered || k(e);
            })
          ),
        },
        [qL]: {
          types: "mousemove mouseout scroll",
          handler: (
            {
              store: e,
              element: t,
              eventConfig: r,
              nativeEvent: n,
              eventStateKey: o,
            },
            i = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
          ) => {
            let {
                basedOn: a,
                selectedAxis: s,
                continuousParameterGroupId: u,
                reverse: l,
                restingState: p = 0,
              } = r,
              {
                clientX: d = i.clientX,
                clientY: f = i.clientY,
                pageX: E = i.pageX,
                pageY: y = i.pageY,
              } = n,
              g = s === "X_AXIS",
              I = n.type === "mouseout",
              _ = p / 100,
              m = u,
              v = !1;
            switch (a) {
              case Z.VIEWPORT: {
                _ = g
                  ? Math.min(d, window.innerWidth) / window.innerWidth
                  : Math.min(f, window.innerHeight) / window.innerHeight;
                break;
              }
              case Z.PAGE: {
                let {
                  scrollLeft: h,
                  scrollTop: O,
                  scrollWidth: T,
                  scrollHeight: S,
                } = yt();
                _ = g ? Math.min(h + E, T) / T : Math.min(O + y, S) / S;
                break;
              }
              case Z.ELEMENT:
              default: {
                m = Gd(o, u);
                let h = n.type.indexOf("mouse") === 0;
                if (h && re({ element: t, nativeEvent: n }) !== !0) break;
                let O = t.getBoundingClientRect(),
                  { left: T, top: S, width: A, height: R } = O;
                if (!h && !$L({ left: d, top: f }, O)) break;
                (v = !0), (_ = g ? (d - T) / A : (f - S) / R);
                break;
              }
            }
            return (
              I && (_ > 1 - Wd || _ < Wd) && (_ = Math.round(_)),
              (a !== Z.ELEMENT || v || v !== i.elementHovered) &&
                ((_ = l ? 1 - _ : _), e.dispatch(Be(m, _))),
              { elementHovered: v, clientX: d, clientY: f, pageX: E, pageY: y }
            );
          },
        },
        [HL]: {
          types: Co,
          handler: ({ store: e, eventConfig: t }) => {
            let { continuousParameterGroupId: r, reverse: n } = t,
              { scrollTop: o, scrollHeight: i, clientHeight: a } = yt(),
              s = o / (i - a);
            (s = n ? 1 - s : s), e.dispatch(Be(r, s));
          },
        },
        [VL]: {
          types: Co,
          handler: (
            { element: e, store: t, eventConfig: r, eventStateKey: n },
            o = { scrollPercent: 0 }
          ) => {
            let {
                scrollLeft: i,
                scrollTop: a,
                scrollWidth: s,
                scrollHeight: u,
                clientHeight: l,
              } = yt(),
              {
                basedOn: p,
                selectedAxis: d,
                continuousParameterGroupId: f,
                startsEntering: E,
                startsExiting: y,
                addEndOffset: g,
                addStartOffset: I,
                addOffsetValue: _ = 0,
                endOffsetValue: m = 0,
              } = r,
              v = d === "X_AXIS";
            if (p === Z.VIEWPORT) {
              let h = v ? i / s : a / u;
              return (
                h !== o.scrollPercent && t.dispatch(Be(f, h)),
                { scrollPercent: h }
              );
            } else {
              let h = Gd(n, f),
                O = e.getBoundingClientRect(),
                T = (I ? _ : 0) / 100,
                S = (g ? m : 0) / 100;
              (T = E ? T : 1 - T), (S = y ? S : 1 - S);
              let A = O.top + Math.min(O.height * T, l),
                b = O.top + O.height * S - A,
                x = Math.min(l + b, u),
                N = Math.min(Math.max(0, l - A), x) / x;
              return (
                N !== o.scrollPercent && t.dispatch(Be(h, N)),
                { scrollPercent: N }
              );
            }
          },
        },
        [Qd]: Hd,
        [GL]: Hd,
        [Yd]: {
          ...Po,
          handler: Ud((e, t) => {
            t.scrollingDown && k(e);
          }),
        },
        [XL]: {
          ...Po,
          handler: Ud((e, t) => {
            t.scrollingDown || k(e);
          }),
        },
        [$d]: {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: Q(_t, ZL(k)),
        },
        [Zd]: {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: Q(_t, JL(k)),
        },
      });
  });
var AE = {};
B(AE, {
  observeRequests: () => TD,
  startActionGroup: () => Tt,
  startEngine: () => Or,
  stopActionGroup: () => We,
  stopAllActionGroups: () => TE,
  stopEngine: () => Rr,
});
function TD(e) {
  Te({ store: e, select: ({ ixRequest: t }) => t.preview, onChange: AD }),
    Te({ store: e, select: ({ ixRequest: t }) => t.playback, onChange: vD }),
    Te({ store: e, select: ({ ixRequest: t }) => t.stop, onChange: SD }),
    Te({ store: e, select: ({ ixRequest: t }) => t.clear, onChange: OD });
}
function mD(e) {
  Te({
    store: e,
    select: ({ ixSession: t }) => t.mediaQueryKey,
    onChange: () => {
      Rr(e),
        gE({ store: e, elementApi: U }),
        Or({ store: e, allowEvents: !0 }),
        yE();
    },
  });
}
function hD(e, t) {
  let r = Te({
    store: e,
    select: ({ ixSession: n }) => n.tick,
    onChange: (n) => {
      t(n), r();
    },
  });
}
function AD({ rawData: e, defer: t }, r) {
  let n = () => {
    Or({ store: r, rawData: e, allowEvents: !0 }), yE();
  };
  t ? setTimeout(n, 0) : n();
}
function yE() {
  document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
}
function vD(e, t) {
  let {
      actionTypeId: r,
      actionListId: n,
      actionItemId: o,
      eventId: i,
      allowEvents: a,
      immediate: s,
      testManual: u,
      verbose: l = !0,
    } = e,
    { rawData: p } = e;
  if (n && o && p && s) {
    let d = p.actionLists[n];
    d && (p = uD({ actionList: d, actionItemId: o, rawData: p }));
  }
  if (
    (Or({ store: t, rawData: p, allowEvents: a, testManual: u }),
    (n && r === X.GENERAL_START_ACTION) || Lo(r))
  ) {
    We({ store: t, actionListId: n }),
      IE({ store: t, actionListId: n, eventId: i });
    let d = Tt({
      store: t,
      eventId: i,
      actionListId: n,
      immediate: s,
      verbose: l,
    });
    l && d && t.dispatch(He({ actionListId: n, isPlaying: !s }));
  }
}
function SD({ actionListId: e }, t) {
  e ? We({ store: t, actionListId: e }) : TE({ store: t }), Rr(t);
}
function OD(e, t) {
  Rr(t), gE({ store: t, elementApi: U });
}
function Or({ store: e, rawData: t, allowEvents: r, testManual: n }) {
  let { ixSession: o } = e.getState();
  t && e.dispatch(uo(t)),
    o.active ||
      (e.dispatch(
        co({
          hasBoundaryNodes: !!document.querySelector(hr),
          reducedMotion:
            document.body.hasAttribute("data-wf-ix-vacation") &&
            window.matchMedia("(prefers-reduced-motion)").matches,
        })
      ),
      r &&
        (ND(e), RD(), e.getState().ixSession.hasDefinedMediaQueries && mD(e)),
      e.dispatch(lo()),
      bD(e, n));
}
function RD() {
  let { documentElement: e } = document;
  e.className.indexOf(aE) === -1 && (e.className += ` ${aE}`);
}
function bD(e, t) {
  let r = (n) => {
    let { ixSession: o, ixParameters: i } = e.getState();
    o.active && (e.dispatch(cr(n, i)), t ? hD(e, r) : requestAnimationFrame(r));
  };
  r(window.performance.now());
}
function Rr(e) {
  let { ixSession: t } = e.getState();
  if (t.active) {
    let { eventListeners: r } = t;
    r.forEach(xD), pD(), e.dispatch(fo());
  }
}
function xD({ target: e, listenerParams: t }) {
  e.removeEventListener.apply(e, t);
}
function CD({
  store: e,
  eventStateKey: t,
  eventTarget: r,
  eventId: n,
  eventConfig: o,
  actionListId: i,
  parameterGroup: a,
  smoothing: s,
  restingValue: u,
}) {
  let { ixData: l, ixSession: p } = e.getState(),
    { events: d } = l,
    f = d[n],
    { eventTypeId: E } = f,
    y = {},
    g = {},
    I = [],
    { continuousActionGroups: _ } = a,
    { id: m } = a;
  cD(E, o) && (m = lD(t, m));
  let v = p.hasBoundaryNodes && r ? gt(r, hr) : null;
  _.forEach((h) => {
    let { keyframe: O, actionItems: T } = h;
    T.forEach((S) => {
      let { actionTypeId: A } = S,
        { target: R } = S.config;
      if (!R) return;
      let b = R.boundaryMode ? v : null,
        x = dD(R) + Do + A;
      if (((g[x] = PD(g[x], O, S)), !y[x])) {
        y[x] = !0;
        let { config: P } = S;
        Ar({
          config: P,
          event: f,
          eventTarget: r,
          elementRoot: b,
          elementApi: U,
        }).forEach((N) => {
          I.push({ element: N, key: x });
        });
      }
    });
  }),
    I.forEach(({ element: h, key: O }) => {
      let T = g[O],
        S = (0, se.default)(T, "[0].actionItems[0]", {}),
        { actionTypeId: A } = S,
        b = (
          A === X.PLUGIN_RIVE
            ? (S.config?.target?.selectorGuids || []).length === 0
            : Sr(A)
        )
          ? Fo(A)(h, S)
          : null,
        x = Mo({ element: h, actionItem: S, elementApi: U }, b);
      wo({
        store: e,
        element: h,
        eventId: n,
        actionListId: i,
        actionItem: S,
        destination: x,
        continuous: !0,
        parameterId: m,
        actionGroups: T,
        smoothing: s,
        restingValue: u,
        pluginInstance: b,
      });
    });
}
function PD(e = [], t, r) {
  let n = [...e],
    o;
  return (
    n.some((i, a) => (i.keyframe === t ? ((o = a), !0) : !1)),
    o == null && ((o = n.length), n.push({ keyframe: t, actionItems: [] })),
    n[o].actionItems.push(r),
    n
  );
}
function ND(e) {
  let { ixData: t } = e.getState(),
    { eventTypeMap: r } = t;
  _E(e),
    (0, ke.default)(r, (o, i) => {
      let a = oE[i];
      if (!a) {
        console.warn(`IX2 event type not configured: ${i}`);
        return;
      }
      qD({ logic: a, store: e, events: o });
    });
  let { ixSession: n } = e.getState();
  n.eventListeners.length && DD(e);
}
function DD(e) {
  let t = () => {
    _E(e);
  };
  LD.forEach((r) => {
    window.addEventListener(r, t), e.dispatch(ur(window, [r, t]));
  }),
    t();
}
function _E(e) {
  let { ixSession: t, ixData: r } = e.getState(),
    n = window.innerWidth;
  if (n !== t.viewportWidth) {
    let { mediaQueries: o } = r;
    e.dispatch(_o({ width: n, mediaQueries: o }));
  }
}
function qD({ logic: e, store: t, events: r }) {
  GD(r);
  let { types: n, handler: o } = e,
    { ixData: i } = t.getState(),
    { actionLists: a } = i,
    s = MD(r, wD);
  if (!(0, cE.default)(s)) return;
  (0, ke.default)(s, (d, f) => {
    let E = r[f],
      { action: y, id: g, mediaQueries: I = i.mediaQueryKeys } = E,
      { actionListId: _ } = y.config;
    ED(I, i.mediaQueryKeys) || t.dispatch(Io()),
      y.actionTypeId === X.GENERAL_CONTINUOUS_ACTION &&
        (Array.isArray(E.config) ? E.config : [E.config]).forEach((v) => {
          let { continuousParameterGroupId: h } = v,
            O = (0, se.default)(a, `${_}.continuousParameterGroups`, []),
            T = (0, uE.default)(O, ({ id: R }) => R === h),
            S = (v.smoothing || 0) / 100,
            A = (v.restingState || 0) / 100;
          T &&
            d.forEach((R, b) => {
              let x = g + Do + b;
              CD({
                store: t,
                eventStateKey: x,
                eventTarget: R,
                eventId: g,
                eventConfig: v,
                actionListId: _,
                parameterGroup: T,
                smoothing: S,
                restingValue: A,
              });
            });
        }),
      (y.actionTypeId === X.GENERAL_START_ACTION || Lo(y.actionTypeId)) &&
        IE({ store: t, actionListId: _, eventId: g });
  });
  let u = (d) => {
      let { ixSession: f } = t.getState();
      FD(s, (E, y, g) => {
        let I = r[y],
          _ = f.eventState[g],
          { action: m, mediaQueries: v = i.mediaQueryKeys } = I;
        if (!vr(v, f.mediaQueryKey)) return;
        let h = (O = {}) => {
          let T = o(
            {
              store: t,
              element: E,
              event: I,
              eventConfig: O,
              nativeEvent: d,
              eventStateKey: g,
            },
            _
          );
          gD(T, _) || t.dispatch(po(g, T));
        };
        m.actionTypeId === X.GENERAL_CONTINUOUS_ACTION
          ? (Array.isArray(I.config) ? I.config : [I.config]).forEach(h)
          : h();
      });
    },
    l = (0, dE.default)(u, ID),
    p = ({ target: d = document, types: f, throttle: E }) => {
      f.split(" ")
        .filter(Boolean)
        .forEach((y) => {
          let g = E ? l : u;
          d.addEventListener(y, g), t.dispatch(ur(d, [y, g]));
        });
    };
  Array.isArray(n) ? n.forEach(p) : typeof n == "string" && p(e);
}
function GD(e) {
  if (!_D) return;
  let t = {},
    r = "";
  for (let n in e) {
    let { eventTypeId: o, target: i } = e[n],
      a = mo(i);
    t[a] ||
      ((o === z.MOUSE_CLICK || o === z.MOUSE_SECOND_CLICK) &&
        ((t[a] = !0),
        (r += a + "{cursor: pointer;touch-action: manipulation;}")));
  }
  if (r) {
    let n = document.createElement("style");
    (n.textContent = r), document.body.appendChild(n);
  }
}
function IE({ store: e, actionListId: t, eventId: r }) {
  let { ixData: n, ixSession: o } = e.getState(),
    { actionLists: i, events: a } = n,
    s = a[r],
    u = i[t];
  if (u && u.useFirstGroupAsInitialState) {
    let l = (0, se.default)(u, "actionItemGroups[0].actionItems", []),
      p = (0, se.default)(s, "mediaQueries", n.mediaQueryKeys);
    if (!vr(p, o.mediaQueryKey)) return;
    l.forEach((d) => {
      let { config: f, actionTypeId: E } = d,
        y =
          f?.target?.useEventTarget === !0 && f?.target?.objectId == null
            ? { target: s.target, targets: s.targets }
            : f,
        g = Ar({ config: y, event: s, elementApi: U }),
        I = Sr(E);
      g.forEach((_) => {
        let m = I ? Fo(E)(_, d) : null;
        wo({
          destination: Mo({ element: _, actionItem: d, elementApi: U }, m),
          immediate: !0,
          store: e,
          element: _,
          eventId: r,
          actionItem: d,
          actionListId: t,
          pluginInstance: m,
        });
      });
    });
  }
}
function TE({ store: e }) {
  let { ixInstances: t } = e.getState();
  (0, ke.default)(t, (r) => {
    if (!r.continuous) {
      let { actionListId: n, verbose: o } = r;
      qo(r, e), o && e.dispatch(He({ actionListId: n, isPlaying: !1 }));
    }
  });
}
function We({
  store: e,
  eventId: t,
  eventTarget: r,
  eventStateKey: n,
  actionListId: o,
}) {
  let { ixInstances: i, ixSession: a } = e.getState(),
    s = a.hasBoundaryNodes && r ? gt(r, hr) : null;
  (0, ke.default)(i, (u) => {
    let l = (0, se.default)(u, "actionItem.config.target.boundaryMode"),
      p = n ? u.eventStateKey === n : !0;
    if (u.actionListId === o && u.eventId === t && p) {
      if (s && l && !ho(s, u.element)) return;
      qo(u, e), u.verbose && e.dispatch(He({ actionListId: o, isPlaying: !1 }));
    }
  });
}
function Tt({
  store: e,
  eventId: t,
  eventTarget: r,
  eventStateKey: n,
  actionListId: o,
  groupIndex: i = 0,
  immediate: a,
  verbose: s,
}) {
  let { ixData: u, ixSession: l } = e.getState(),
    { events: p } = u,
    d = p[t] || {},
    { mediaQueries: f = u.mediaQueryKeys } = d,
    E = (0, se.default)(u, `actionLists.${o}`, {}),
    { actionItemGroups: y, useFirstGroupAsInitialState: g } = E;
  if (!y || !y.length) return !1;
  i >= y.length && (0, se.default)(d, "config.loop") && (i = 0),
    i === 0 && g && i++;
  let _ =
      (i === 0 || (i === 1 && g)) && Lo(d.action?.actionTypeId)
        ? d.config.delay
        : void 0,
    m = (0, se.default)(y, [i, "actionItems"], []);
  if (!m.length || !vr(f, l.mediaQueryKey)) return !1;
  let v = l.hasBoundaryNodes && r ? gt(r, hr) : null,
    h = iD(m),
    O = !1;
  return (
    m.forEach((T, S) => {
      let { config: A, actionTypeId: R } = T,
        b = Sr(R),
        { target: x } = A;
      if (!x) return;
      let P = x.boundaryMode ? v : null;
      Ar({
        config: A,
        event: d,
        eventTarget: r,
        elementRoot: P,
        elementApi: U,
      }).forEach((F, Vo) => {
        let xr = b ? Fo(R)(F, T) : null,
          Cr = b ? yD(R)(F, T) : null;
        O = !0;
        let RE = h === S && Vo === 0,
          bE = aD({ element: F, actionItem: T }),
          xE = Mo({ element: F, actionItem: T, elementApi: U }, xr);
        wo({
          store: e,
          element: F,
          actionItem: T,
          eventId: t,
          eventTarget: r,
          eventStateKey: n,
          actionListId: o,
          groupIndex: i,
          isCarrier: RE,
          computedStyle: bE,
          destination: xE,
          immediate: a,
          verbose: s,
          pluginInstance: xr,
          pluginDuration: Cr,
          instanceDelay: _,
        });
      });
    }),
    O
  );
}
function wo(e) {
  let { store: t, computedStyle: r, ...n } = e,
    {
      element: o,
      actionItem: i,
      immediate: a,
      pluginInstance: s,
      continuous: u,
      restingValue: l,
      eventId: p,
    } = n,
    d = !u,
    f = nD(),
    { ixElements: E, ixSession: y, ixData: g } = t.getState(),
    I = rD(E, o),
    { refState: _ } = E[I] || {},
    m = Ao(o),
    v = y.reducedMotion && zr[i.actionTypeId],
    h;
  if (v && u)
    switch (g.events[p]?.eventTypeId) {
      case z.MOUSE_MOVE:
      case z.MOUSE_MOVE_IN_VIEWPORT:
        h = l;
        break;
      default:
        h = 0.5;
        break;
    }
  let O = sD(o, _, r, i, U, s);
  if (
    (t.dispatch(
      Eo({
        instanceId: f,
        elementId: I,
        origin: O,
        refType: m,
        skipMotion: v,
        skipToValue: h,
        ...n,
      })
    ),
    mE(document.body, "ix2-animation-started", f),
    a)
  ) {
    XD(t, f);
    return;
  }
  Te({ store: t, select: ({ ixInstances: T }) => T[f], onChange: hE }),
    d && t.dispatch(lr(f, y.tick));
}
function qo(e, t) {
  mE(document.body, "ix2-animation-stopping", {
    instanceId: e.id,
    state: t.getState(),
  });
  let { elementId: r, actionItem: n } = e,
    { ixElements: o } = t.getState(),
    { ref: i, refType: a } = o[r] || {};
  a === EE && fD(i, n, U), t.dispatch(go(e.id));
}
function mE(e, t, r) {
  let n = document.createEvent("CustomEvent");
  n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n);
}
function XD(e, t) {
  let { ixParameters: r } = e.getState();
  e.dispatch(lr(t, 0)), e.dispatch(cr(performance.now(), r));
  let { ixInstances: n } = e.getState();
  hE(n[t], e);
}
function hE(e, t) {
  let {
      active: r,
      continuous: n,
      complete: o,
      elementId: i,
      actionItem: a,
      actionTypeId: s,
      renderType: u,
      current: l,
      groupIndex: p,
      eventId: d,
      eventTarget: f,
      eventStateKey: E,
      actionListId: y,
      isCarrier: g,
      styleProp: I,
      verbose: _,
      pluginInstance: m,
    } = e,
    { ixData: v, ixSession: h } = t.getState(),
    { events: O } = v,
    T = O && O[d] ? O[d] : {},
    { mediaQueries: S = v.mediaQueryKeys } = T;
  if (vr(S, h.mediaQueryKey) && (n || r || o)) {
    if (l || (u === tD && o)) {
      t.dispatch(yo(i, s, l, a));
      let { ixElements: A } = t.getState(),
        { ref: R, refType: b, refState: x } = A[i] || {},
        P = x && x[s];
      (b === EE || Sr(s)) && oD(R, x, P, d, a, I, U, u, m);
    }
    if (o) {
      if (g) {
        let A = Tt({
          store: t,
          eventId: d,
          eventTarget: f,
          eventStateKey: E,
          actionListId: y,
          groupIndex: p + 1,
          verbose: _,
        });
        _ && !A && t.dispatch(He({ actionListId: y, isPlaying: !1 }));
      }
      qo(e, t);
    }
  }
}
var uE,
  se,
  cE,
  lE,
  fE,
  pE,
  ke,
  dE,
  mr,
  eD,
  Lo,
  Do,
  hr,
  EE,
  tD,
  aE,
  Ar,
  rD,
  Mo,
  Te,
  nD,
  oD,
  gE,
  iD,
  aD,
  sD,
  uD,
  cD,
  lD,
  vr,
  fD,
  pD,
  dD,
  ED,
  gD,
  Sr,
  Fo,
  yD,
  sE,
  _D,
  ID,
  LD,
  MD,
  FD,
  wD,
  No = D(() => {
    "use strict";
    (uE = C(Sn())),
      (se = C(Ht())),
      (cE = C(Ff())),
      (lE = C(sp())),
      (fE = C(cp())),
      (pE = C(fp())),
      (ke = C(_p())),
      (dE = C(Sp()));
    H();
    mr = C(Ie());
    fr();
    Pp();
    iE();
    (eD = Object.keys(ht)),
      (Lo = (e) => eD.includes(e)),
      ({
        COLON_DELIMITER: Do,
        BOUNDARY_SELECTOR: hr,
        HTML_ELEMENT: EE,
        RENDER_GENERAL: tD,
        W_MOD_IX: aE,
      } = G),
      ({
        getAffectedElements: Ar,
        getElementId: rD,
        getDestinationValues: Mo,
        observeStore: Te,
        getInstanceId: nD,
        renderHTMLElement: oD,
        clearAllStyles: gE,
        getMaxDurationItemIndex: iD,
        getComputedStyle: aD,
        getInstanceOrigin: sD,
        reduceListToGroup: uD,
        shouldNamespaceEventParameter: cD,
        getNamespacedParameterId: lD,
        shouldAllowMediaQuery: vr,
        cleanupHTMLElement: fD,
        clearObjectCache: pD,
        stringifyTarget: dD,
        mediaQueriesEqual: ED,
        shallowEqual: gD,
      } = mr.IX2VanillaUtils),
      ({
        isPluginType: Sr,
        createPluginInstance: Fo,
        getPluginDuration: yD,
      } = mr.IX2VanillaPlugins),
      (sE = navigator.userAgent),
      (_D = sE.match(/iPad/i) || sE.match(/iPhone/)),
      (ID = 12);
    LD = ["resize", "orientationchange"];
    (MD = (e, t) => (0, lE.default)((0, pE.default)(e, t), fE.default)),
      (FD = (e, t) => {
        (0, ke.default)(e, (r, n) => {
          r.forEach((o, i) => {
            let a = n + Do + i;
            t(o, n, a);
          });
        });
      }),
      (wD = (e) => {
        let t = { target: e.target, targets: e.targets };
        return Ar({ config: t, elementApi: U });
      });
  });
var OE = c((Xo) => {
  "use strict";
  Object.defineProperty(Xo, "__esModule", { value: !0 });
  function VD(e, t) {
    for (var r in t) Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
  }
  VD(Xo, {
    actions: function () {
      return HD;
    },
    destroy: function () {
      return SE;
    },
    init: function () {
      return jD;
    },
    setEnv: function () {
      return KD;
    },
    store: function () {
      return br;
    },
  });
  var UD = kr(),
    BD = WD((yf(), $(gf))),
    Go = (No(), $(AE)),
    HD = kD((fr(), $(Rp)));
  function WD(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function vE(e) {
    if (typeof WeakMap != "function") return null;
    var t = new WeakMap(),
      r = new WeakMap();
    return (vE = function (n) {
      return n ? r : t;
    })(e);
  }
  function kD(e, t) {
    if (!t && e && e.__esModule) return e;
    if (e === null || (typeof e != "object" && typeof e != "function"))
      return { default: e };
    var r = vE(t);
    if (r && r.has(e)) return r.get(e);
    var n = { __proto__: null },
      o = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var i in e)
      if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
        var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
        a && (a.get || a.set) ? Object.defineProperty(n, i, a) : (n[i] = e[i]);
      }
    return (n.default = e), r && r.set(e, n), n;
  }
  var br = (0, UD.createStore)(BD.default);
  function KD(e) {
    e() && (0, Go.observeRequests)(br);
  }
  function jD(e) {
    SE(), (0, Go.startEngine)({ store: br, rawData: e, allowEvents: !0 });
  }
  function SE() {
    (0, Go.stopEngine)(br);
  }
});
function F2() {
  let e = OE();
  return e.setEnv(() => !0), e;
}
export { F2 as createIX2Engine };
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
