import le, { useState as L } from "react";
var F = { exports: {} }, _ = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var H;
function oe() {
  if (H) return _;
  H = 1;
  var f = Symbol.for("react.transitional.element"), g = Symbol.for("react.fragment");
  function d(m, A, N) {
    var E = null;
    if (N !== void 0 && (E = "" + N), A.key !== void 0 && (E = "" + A.key), "key" in A) {
      N = {};
      for (var b in A)
        b !== "key" && (N[b] = A[b]);
    } else N = A;
    return A = N.ref, {
      $$typeof: f,
      type: m,
      key: E,
      ref: A !== void 0 ? A : null,
      props: N
    };
  }
  return _.Fragment = g, _.jsx = d, _.jsxs = d, _;
}
var P = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Q;
function ce() {
  return Q || (Q = 1, process.env.NODE_ENV !== "production" && function() {
    function f(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === ae ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case C:
          return "Fragment";
        case t:
          return "Profiler";
        case s:
          return "StrictMode";
        case v:
          return "Suspense";
        case n:
          return "SuspenseList";
        case M:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case Y:
            return "Portal";
          case c:
            return (e.displayName || "Context") + ".Provider";
          case o:
            return (e._context.displayName || "Context") + ".Consumer";
          case i:
            var a = e.render;
            return e = e.displayName, e || (e = a.displayName || a.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case l:
            return a = e.displayName || null, a !== null ? a : f(e.type) || "Memo";
          case h:
            a = e._payload, e = e._init;
            try {
              return f(e(a));
            } catch {
            }
        }
      return null;
    }
    function g(e) {
      return "" + e;
    }
    function d(e) {
      try {
        g(e);
        var a = !1;
      } catch {
        a = !0;
      }
      if (a) {
        a = console;
        var u = a.error, x = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return u.call(
          a,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          x
        ), g(e);
      }
    }
    function m(e) {
      if (e === C) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === h)
        return "<...>";
      try {
        var a = f(e);
        return a ? "<" + a + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function A() {
      var e = D.A;
      return e === null ? null : e.getOwner();
    }
    function N() {
      return Error("react-stack-top-frame");
    }
    function E(e) {
      if (W.call(e, "key")) {
        var a = Object.getOwnPropertyDescriptor(e, "key").get;
        if (a && a.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function b(e, a) {
      function u() {
        X || (X = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          a
        ));
      }
      u.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: u,
        configurable: !0
      });
    }
    function R() {
      var e = f(this.type);
      return V[e] || (V[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function w(e, a, u, x, S, y, B, z) {
      return u = y.ref, e = {
        $$typeof: I,
        type: e,
        key: a,
        props: y,
        _owner: S
      }, (u !== void 0 ? u : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: R
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: B
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: z
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function j(e, a, u, x, S, y, B, z) {
      var p = a.children;
      if (p !== void 0)
        if (x)
          if (ne(p)) {
            for (x = 0; x < p.length; x++)
              O(p[x]);
            Object.freeze && Object.freeze(p);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else O(p);
      if (W.call(a, "key")) {
        p = f(e);
        var T = Object.keys(a).filter(function(se) {
          return se !== "key";
        });
        x = 0 < T.length ? "{key: someKey, " + T.join(": ..., ") + ": ...}" : "{key: someKey}", q[p + x] || (T = 0 < T.length ? "{" + T.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          x,
          p,
          T,
          p
        ), q[p + x] = !0);
      }
      if (p = null, u !== void 0 && (d(u), p = "" + u), E(a) && (d(a.key), p = "" + a.key), "key" in a) {
        u = {};
        for (var U in a)
          U !== "key" && (u[U] = a[U]);
      } else u = a;
      return p && b(
        u,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), w(
        e,
        p,
        y,
        S,
        A(),
        u,
        B,
        z
      );
    }
    function O(e) {
      typeof e == "object" && e !== null && e.$$typeof === I && e._store && (e._store.validated = 1);
    }
    var k = le, I = Symbol.for("react.transitional.element"), Y = Symbol.for("react.portal"), C = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), t = Symbol.for("react.profiler"), o = Symbol.for("react.consumer"), c = Symbol.for("react.context"), i = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), n = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), M = Symbol.for("react.activity"), ae = Symbol.for("react.client.reference"), D = k.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, W = Object.prototype.hasOwnProperty, ne = Array.isArray, G = console.createTask ? console.createTask : function() {
      return null;
    };
    k = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var X, V = {}, $ = k["react-stack-bottom-frame"].bind(
      k,
      N
    )(), J = G(m(N)), q = {};
    P.Fragment = C, P.jsx = function(e, a, u, x, S) {
      var y = 1e4 > D.recentlyCreatedOwnerStacks++;
      return j(
        e,
        a,
        u,
        !1,
        x,
        S,
        y ? Error("react-stack-top-frame") : $,
        y ? G(m(e)) : J
      );
    }, P.jsxs = function(e, a, u, x, S) {
      var y = 1e4 > D.recentlyCreatedOwnerStacks++;
      return j(
        e,
        a,
        u,
        !0,
        x,
        S,
        y ? Error("react-stack-top-frame") : $,
        y ? G(m(e)) : J
      );
    };
  }()), P;
}
var K;
function ie() {
  return K || (K = 1, process.env.NODE_ENV === "production" ? F.exports = oe() : F.exports = ce()), F.exports;
}
var r = ie();
const de = [
  "1.8",
  "1.7",
  "1.6",
  "1.5",
  "1.4",
  "1.3",
  "1.2",
  "1.1",
  "2.1",
  "2.2",
  "2.3",
  "2.4",
  "2.5",
  "2.6",
  "2.7",
  "2.8",
  "3.8",
  "3.7",
  "3.6",
  "3.5",
  "3.4",
  "3.3",
  "3.2",
  "3.1",
  "4.1",
  "4.2",
  "4.3",
  "4.4",
  "4.5",
  "4.6",
  "4.7",
  "4.8"
], Z = (f) => ({
  furca: f === "palatina" ? ["0", "0"] : ["0"],
  sangrado: [!1, !1, !1],
  placa: [!1, !1, !1],
  anchuraEncia: "",
  margenGingival: [0, 0, 0],
  profundidadSondaje: [0, 0, 0]
}), ue = (f) => {
  const g = f[0], m = g === "1" || g === "2" ? "palatina" : "lingual";
  return {
    implante: !1,
    movilidad: 0,
    // solo valores entre -3 y +3
    pronostico: "",
    caras: {
      vestibular: Z("vestibular"),
      [m]: Z(m)
    }
  };
};
function fe(f = null) {
  const g = () => Object.fromEntries(de.map((b) => [b, ue(b)])), [d, m] = L(g() || f);
  return L(() => {
    f && m(f);
  }, [f]), {
    dientes: d,
    actualizarDiente: (b, R) => {
      m((w) => ({
        ...w,
        [b]: {
          ...w[b],
          ...R
        }
      }));
    },
    actualizarCara: (b, R, w) => {
      m((j) => ({
        ...j,
        [b]: {
          ...j[b],
          caras: {
            ...j[b].caras,
            [R]: {
              ...j[b].caras[R],
              ...w
            }
          }
        }
      }));
    },
    resetearDientes: () => {
      m(g());
    }
  };
}
const ee = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAIGNIUk0AAHolAACAgwAA+f8AAIDoAABSCAABFVgAADqXAAAXb9daH5AAAAEiSURBVHjapNTLKgRwFMfxT9MoKxtFJJLI0gplpYgkG4VXwBMoezasxNJaap7AAyBk4RJFYWUxlIQmGZszNS5z/9Z/c875//6Xc+F/hrCJS7zjE/dIYQ71StCGXWRjnWAbW9jDa9jPMVJIpC9OzWIDvf/ENGIR6Yhb+B3Qige8YVJpOrAfYtP5jlQYJ5RPI27xhGYYDJEtlTMae1eEwBe6VMcxruEqslMtS3hNoB2nNQidIZlAHT5qEMogm8AjemoQ6oQEjtCPhiqFxvAMs4WqtMzCzERbqY/MpaPXKiFXyAM5w3AYDtBUpshq7Fn/7ZgPxw3Giwh0502I3cj6H2byOvsQy5iKD13Ie0oWa0gWu3JL9M4FXmKwvcW6w04Mvh98DwBUVk3PjjjwlAAAAABJRU5ErkJggg==", re = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAIGNIUk0AAHolAACAgwAA+f8AAIDoAABSCAABFVgAADqXAAAXb9daH5AAAAEXSURBVHjapNO/K0VxGMfxl9NVBotuUQbc5G+QTIoMd7SYlE2M/ggW/Ac2g+gOymJXFlmuxaCkxIDBj0I5lufU6XTvUfd86tup5/mc93nO5/v90lnz2EcbL/jCPVpYxoB/NIkTpLn1iwOc4T1q1/GxjprBQwGS4g1D4aljA8/RWy9CGnjqAEljirGCfxwX0V/Kin047QLpBsqmu40MR2CuBFIGgoXwbInd6RUEl7hJIuQqOsZoguGKoDZqSYRdRd9Ik8igihqQxGhVtIjXBEcVIONo4hwG42D1sv2t8ExnhWYPoO3o7xYbmyWges43FXGk8ezvNOpq7mZn6wcrWMv9Sood1MoCnMAervAY4A984g6HmC2+9DcA99V0nm6yLEsAAAAASUVORK5CYII=", te = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAIGNIUk0AAHolAACAgwAA+f8AAIDoAABSCAABFVgAADqXAAAXb9daH5AAAADYSURBVHjarNQ9SkNBGAXQk1HBYC8mZhHp/OuCCNZCSOEGFLdiStcgpBAXYR0UbYONhQjWgolJM08eSUzie3Phg2nmMMxcpmJ+jtDBARrYwDuecId7fFmQBm4xXjJ9HP+FNDFYAclmiMtppI7XfyD5OctDvYLION7dzhr20VU8W/gOOFc+pwGHCaDtgN0EUDVgPQEk4COBMwx4TgB9htihsunDJl5KFPIHe5nYwqggdD19vIsCSC9+MTNp420FYBRP8ludyhyshiucxHU1e+JYlUfc4CG/aTIATpd8yNrLF8cAAAAASUVORK5CYII=";
function be({ savedState: f, onSave: g }) {
  const { dientes: d, actualizarDiente: m, actualizarCara: A, resetearDientes: N } = fe(f), E = (s, t) => {
    if (t === "" || t === "-") {
      m(s, { movilidad: t });
      return;
    }
    const o = Number(t);
    if (isNaN(o))
      return;
    let c = o;
    o < -3 && (c = -3), o > 3 && (c = 3), m(s, { movilidad: c });
  }, b = (s, t, o, c) => {
    if (c === "" || c === "-") {
      j(s, t, "profundidadSondaje", o, c);
      return;
    }
    const i = Number(c);
    if (isNaN(i)) return;
    const v = Math.max(0, Math.min(15, i));
    j(s, t, "profundidadSondaje", o, v);
  }, R = (s, t, o, c) => {
    if (c === "" || c === "-") {
      const M = [...d[s].caras[t].margenGingival || []];
      M[o] = c, A(s, t, { margenGingival: M });
      return;
    }
    const i = Number(c);
    if (isNaN(i)) return;
    let v = i;
    i < -5 && (v = -5), i > 5 && (v = 5);
    const l = [...d[s].caras[t].margenGingival || []];
    l[o] = v, A(s, t, { margenGingival: l });
  }, w = (s, t, o) => {
    m(s, { [t]: o });
  }, j = (s, t, o, c, i) => {
    const v = d[s].caras[t];
    let n = {};
    if (Array.isArray(v[o])) {
      const l = [...v[o]];
      l[c] = i, n[o] = l;
    } else
      n[o] = i;
    A(s, t, n);
  }, O = (s, t, o) => {
    const c = d[s]?.caras?.[t]?.furca?.[o] || "";
    let i;
    c === "" ? i = "1" : c === "1" ? i = "2" : c === "2" ? i = "3" : i = "", j(s, t, "furca", o, i);
  }, k = [
    "1.8",
    "1.7",
    "1.6",
    "1.5",
    "1.4",
    "1.3",
    "1.2",
    "1.1",
    "2.1",
    "2.2",
    "2.3",
    "2.4",
    "2.5",
    "2.6",
    "2.7",
    "2.8"
  ], I = [
    "4.8",
    "4.7",
    "4.6",
    "4.5",
    "4.4",
    "4.3",
    "4.2",
    "4.1",
    "3.1",
    "3.2",
    "3.3",
    "3.4",
    "3.5",
    "3.6",
    "3.7",
    "3.8"
  ], Y = (s) => /* @__PURE__ */ r.jsx("div", { className: "bg-white rounded-2xl shadow-2xl overflow-x-auto mb-6 p-4", children: /* @__PURE__ */ r.jsxs("table", { className: "w-full border-collapse border border-gray-300 text-xs", children: [
    /* @__PURE__ */ r.jsx("thead", { children: /* @__PURE__ */ r.jsxs("tr", { children: [
      /* @__PURE__ */ r.jsx("th", { className: "border border-gray-300 bg-gray-100 p-2 sticky left-0 z-10 min-w-[150px]", children: "Parámetro" }),
      s.map((t) => /* @__PURE__ */ r.jsx(
        "th",
        {
          className: "border border-gray-300 bg-gray-100 p-2 min-w-[60px]",
          children: t
        },
        t
      ))
    ] }) }),
    /* @__PURE__ */ r.jsxs("tbody", { children: [
      /* @__PURE__ */ r.jsxs("tr", { children: [
        /* @__PURE__ */ r.jsx("td", { className: "border border-gray-300 bg-blue-50 p-3 font-semibold sticky left-0 z-10 text-blue-700", children: "Implante" }),
        s.map((t) => /* @__PURE__ */ r.jsx(
          "td",
          {
            className: "border border-gray-300 p-2 text-center",
            children: /* @__PURE__ */ r.jsxs("label", { className: "inline-block w-5 h-5 cursor-pointer relative", children: [
              /* @__PURE__ */ r.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: d[t]?.implante || !1,
                  onChange: (o) => w(t, "implante", o.target.checked),
                  className: "peer appearance-none w-full h-full border border-gray-400 rounded-sm checked:bg-blue-600"
                }
              ),
              /* @__PURE__ */ r.jsx("span", { className: "absolute inset-0 rounded-sm border border-gray-400 peer-checked:bg-black" })
            ] })
          },
          t
        ))
      ] }),
      /* @__PURE__ */ r.jsxs("tr", { children: [
        /* @__PURE__ */ r.jsx("td", { className: "border border-gray-300 bg-green-50 p-3 font-semibold sticky left-0 z-10 text-green-700", children: "Movilidad" }),
        s.map((t) => /* @__PURE__ */ r.jsx(
          "td",
          {
            className: "border border-gray-300 p-2 text-center",
            children: /* @__PURE__ */ r.jsx(
              "input",
              {
                type: "text",
                value: d[t]?.movilidad ?? "",
                min: -3,
                max: 3,
                onChange: (o) => E(t, o.target.value),
                className: "w-full px-1 py-1 text-center border border-gray-300 rounded focus:border-green-500 focus:ring-green-200"
              }
            )
          },
          t
        ))
      ] }),
      /* @__PURE__ */ r.jsxs("tr", { children: [
        /* @__PURE__ */ r.jsx("td", { className: "border border-gray-300 bg-purple-50 p-3 font-semibold sticky left-0 z-10 text-purple-700", children: "Pronóstico individual" }),
        s.map((t) => /* @__PURE__ */ r.jsx(
          "td",
          {
            className: "border border-gray-300 p-2 text-center",
            children: /* @__PURE__ */ r.jsx(
              "input",
              {
                type: "text",
                value: d[t]?.pronostico || "",
                onChange: (o) => w(t, "pronostico", o.target.value),
                className: "w-full px-1 py-1 text-center border border-gray-300 rounded focus:border-purple-500 focus:ring-purple-200"
              }
            )
          },
          t
        ))
      ] })
    ] })
  ] }) }), C = (s, t, o, c, i) => {
    const v = t === "palatina";
    return /* @__PURE__ */ r.jsxs("div", { className: "bg-white rounded-2xl shadow-2xl overflow-x-auto mb-6 p-4", children: [
      /* @__PURE__ */ r.jsx(
        "h3",
        {
          className: `text-xl font-bold mb-4 text-center  rounded py-2 ${c} ${i}`,
          children: o
        }
      ),
      /* @__PURE__ */ r.jsx("div", { className: "bg-white rounded-2xl shadow-2xl overflow-x-auto mb-6 p-4", children: /* @__PURE__ */ r.jsxs("table", { className: "w-full border-collapse border border-gray-300 text-xs", children: [
        /* @__PURE__ */ r.jsx("thead", { children: /* @__PURE__ */ r.jsxs("tr", { children: [
          /* @__PURE__ */ r.jsx("th", { className: "border border-gray-300 bg-gray-100 p-2 sticky left-0 z-10 min-w-[150px]", children: "Parámetro" }),
          s.map((n) => /* @__PURE__ */ r.jsx(
            "th",
            {
              className: "border border-gray-300 bg-gray-100 p-2 min-w-[60px]",
              children: n
            },
            n
          ))
        ] }) }),
        /* @__PURE__ */ r.jsxs("tbody", { children: [
          /* @__PURE__ */ r.jsxs("tr", { children: [
            /* @__PURE__ */ r.jsx(
              "td",
              {
                className: `border p-3 font-semibold sticky left-0 z-10 ${c} ${i} select-none`,
                style: { minWidth: "150px" },
                children: "Furca"
              }
            ),
            s.map((n) => /* @__PURE__ */ r.jsx("td", { className: "border p-2 text-center", children: v ? /* @__PURE__ */ r.jsx("div", { className: "flex justify-center gap-1", children: [0, 1].map((l) => /* @__PURE__ */ r.jsx(
              "div",
              {
                onClick: () => O(n, t, l),
                className: "w-10 h-10 flex items-center justify-center border border-gray-300 rounded cursor-pointer hover:ring focus:outline-none",
                children: (() => {
                  const h = d[n]?.caras?.[t]?.furca?.[l];
                  return h === "1" ? /* @__PURE__ */ r.jsx(
                    "img",
                    {
                      src: ee,
                      alt: "Furca 1",
                      className: "w-5 h-5 select-none pointer-events-none"
                    }
                  ) : h === "2" ? /* @__PURE__ */ r.jsx(
                    "img",
                    {
                      src: re,
                      alt: "Furca 2",
                      className: "w-5 h-5 select-none pointer-events-none"
                    }
                  ) : h === "3" ? /* @__PURE__ */ r.jsx(
                    "img",
                    {
                      src: te,
                      alt: "Furca 3",
                      className: "w-5 h-5 select-none pointer-events-none"
                    }
                  ) : null;
                })()
              },
              l
            )) }) : (
              // Un solo input para furca si es vestibular (índice 1)
              /* @__PURE__ */ r.jsx(
                "div",
                {
                  onClick: () => O(n, t, 1),
                  className: "w-full h-10 flex items-center justify-center border border-gray-300 rounded cursor-pointer hover:ring focus:outline-none",
                  children: (() => {
                    const l = d[n]?.caras?.[t]?.furca?.[1];
                    return l === "1" ? /* @__PURE__ */ r.jsx(
                      "img",
                      {
                        src: ee,
                        alt: "Furca 1",
                        className: "w-5 h-5 select-none pointer-events-none"
                      }
                    ) : l === "2" ? /* @__PURE__ */ r.jsx(
                      "img",
                      {
                        src: re,
                        alt: "Furca 2",
                        className: "w-5 h-5 select-none pointer-events-none"
                      }
                    ) : l === "3" ? /* @__PURE__ */ r.jsx(
                      "img",
                      {
                        src: te,
                        alt: "Furca 3",
                        className: "w-5 h-5 select-none pointer-events-none"
                      }
                    ) : null;
                  })()
                }
              )
            ) }, n))
          ] }),
          /* @__PURE__ */ r.jsxs("tr", { children: [
            /* @__PURE__ */ r.jsx(
              "td",
              {
                className: `border p-3 font-semibold sticky left-0 z-10 ${c} ${i} select-none`,
                style: { minWidth: "150px" },
                children: "Sangrado"
              }
            ),
            s.map((n) => /* @__PURE__ */ r.jsx("td", { className: "border p-2 text-center", children: /* @__PURE__ */ r.jsx("div", { className: "flex gap-1 justify-center", children: [0, 1, 2].map((l) => /* @__PURE__ */ r.jsxs(
              "label",
              {
                className: "inline-block w-4 h-4 cursor-pointer relative",
                children: [
                  /* @__PURE__ */ r.jsx(
                    "input",
                    {
                      type: "checkbox",
                      checked: d[n]?.caras?.[t]?.sangrado?.[l] || !1,
                      onChange: (h) => j(
                        n,
                        t,
                        "sangrado",
                        l,
                        h.target.checked
                      ),
                      className: "peer appearance-none w-full h-full border border-gray-400 rounded-sm"
                    }
                  ),
                  /* @__PURE__ */ r.jsx("span", { className: "absolute inset-0 rounded-sm border border-gray-400 peer-checked:bg-red-600" })
                ]
              },
              l
            )) }) }, n))
          ] }),
          /* @__PURE__ */ r.jsxs("tr", { children: [
            /* @__PURE__ */ r.jsx(
              "td",
              {
                className: `border p-3 font-semibold sticky left-0 z-10 ${c} ${i} select-none`,
                style: { minWidth: "150px" },
                children: "Placa"
              }
            ),
            s.map((n) => /* @__PURE__ */ r.jsx("td", { className: "border p-2 text-center", children: /* @__PURE__ */ r.jsx("div", { className: "flex gap-1 justify-center", children: [0, 1, 2].map((l) => /* @__PURE__ */ r.jsxs(
              "label",
              {
                className: "inline-block w-4 h-4 cursor-pointer relative",
                children: [
                  /* @__PURE__ */ r.jsx(
                    "input",
                    {
                      type: "checkbox",
                      checked: d[n]?.caras?.[t]?.placa?.[l] || !1,
                      onChange: (h) => j(
                        n,
                        t,
                        "placa",
                        l,
                        h.target.checked
                      ),
                      className: "peer appearance-none w-full h-full border border-gray-400 rounded-sm"
                    }
                  ),
                  /* @__PURE__ */ r.jsx("span", { className: "absolute inset-0 rounded-sm border border-gray-400 peer-checked:bg-blue-600" })
                ]
              },
              l
            )) }) }, n))
          ] }),
          /* @__PURE__ */ r.jsxs("tr", { children: [
            /* @__PURE__ */ r.jsx(
              "td",
              {
                className: `border p-3 font-semibold sticky left-0 z-10 ${c} ${i} select-none`,
                style: { minWidth: "150px" },
                children: "Anchura encía"
              }
            ),
            s.map((n) => /* @__PURE__ */ r.jsx("td", { className: "border p-2 text-center", children: /* @__PURE__ */ r.jsx(
              "input",
              {
                type: "text",
                value: d[n]?.caras?.[t]?.anchuraEncia || "",
                onChange: (l) => j(
                  n,
                  t,
                  "anchuraEncia",
                  0,
                  l.target.value
                ),
                className: "w-full px-1 py-1 text-center border border-gray-300 rounded focus:ring focus:outline-none"
              }
            ) }, n))
          ] }),
          /* @__PURE__ */ r.jsxs("tr", { children: [
            /* @__PURE__ */ r.jsx(
              "td",
              {
                className: `border p-3 font-semibold sticky left-0 z-10  ${c} ${i} select-none`,
                style: { minWidth: "150px" },
                children: "Margen gingival"
              }
            ),
            s.map((n) => /* @__PURE__ */ r.jsx("td", { className: "border p-2 text-center", children: /* @__PURE__ */ r.jsx("div", { className: "flex gap-1 justify-center", children: [0, 1, 2].map((l) => /* @__PURE__ */ r.jsx(
              "input",
              {
                type: "text",
                value: d[n]?.caras?.[t]?.margenGingival?.[l] ?? "",
                onChange: (h) => R(
                  n,
                  t,
                  l,
                  h.target.value
                ),
                className: "w-6 h-6 text-center text-xs border border-gray-300 rounded focus:ring focus:outline-none"
              },
              l
            )) }) }, n))
          ] }),
          /* @__PURE__ */ r.jsxs("tr", { children: [
            /* @__PURE__ */ r.jsx(
              "td",
              {
                className: `border p-3 font-semibold sticky left-0 z-10  ${c} ${i} select-none`,
                style: { minWidth: "150px" },
                children: "Profundidad de sondaje"
              }
            ),
            s.map((n) => /* @__PURE__ */ r.jsx("td", { className: "border p-2 text-center", children: /* @__PURE__ */ r.jsx("div", { className: "flex gap-1 justify-center", children: [0, 1, 2].map((l) => /* @__PURE__ */ r.jsx(
              "input",
              {
                type: "text",
                value: d[n]?.caras?.[t]?.profundidadSondaje?.[l] ?? "",
                onChange: (h) => b(
                  n,
                  t,
                  l,
                  h.target.value
                ),
                className: "w-6 h-6 text-center text-xs border border-gray-300 rounded focus:ring focus:outline-none"
              },
              l
            )) }) }, n))
          ] })
        ] })
      ] }) })
    ] });
  };
  return /* @__PURE__ */ r.jsx("div", { className: "p-6 bg-[#f9fafb] min-h-screen", children: /* @__PURE__ */ r.jsxs("div", { className: "max-w-full mx-auto", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "text-center mb-8", children: [
      /* @__PURE__ */ r.jsxs("h1", { className: "text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-4", children: [
        /* @__PURE__ */ r.jsx(
          "svg",
          {
            className: "w-10 h-10 text-blue-600",
            fill: "currentColor",
            viewBox: "0 0 24 24",
            children: /* @__PURE__ */ r.jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" })
          }
        ),
        "Sistema de Registro Dental"
      ] }),
      /* @__PURE__ */ r.jsx(
        "button",
        {
          onClick: N,
          className: "bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl",
          children: "Resetear todos los dientes"
        }
      ),
      /* @__PURE__ */ r.jsx(
        "button",
        {
          onClick: g,
          className: "ml-4 bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl",
          children: "Guardar"
        }
      )
    ] }),
    /* @__PURE__ */ r.jsxs("section", { className: "mb-12", children: [
      /* @__PURE__ */ r.jsx("h2", { className: "text-3xl font-bold mb-6 text-center text-indigo-700", children: "SUPERIOR" }),
      Y(k),
      C(
        k,
        "vestibular",
        "Cara Vestibular",
        "bg-blue-50",
        "text-blue-700"
      ),
      C(
        k,
        "palatina",
        "Cara Palatina",
        "bg-purple-50",
        "text-purple-700"
      )
    ] }),
    /* @__PURE__ */ r.jsxs("section", { className: "mb-12", children: [
      /* @__PURE__ */ r.jsx("h2", { className: "text-3xl font-bold mb-6 text-center text-red-700", children: "INFERIOR" }),
      Y(I),
      C(
        I,
        "vestibular",
        "Cara Vestibular",
        "bg-green-50",
        "text-green-700"
      ),
      C(
        I,
        "lingual",
        "Cara Lingual",
        "bg-pink-50",
        "text-pink-700"
      )
    ] })
  ] }) });
}
const Ae = ({ savedState: f, onSave: g }) => /* @__PURE__ */ r.jsx(r.Fragment, { children: /* @__PURE__ */ r.jsx(be, { savedState: f, onSave: g }) });
export {
  Ae as default
};
