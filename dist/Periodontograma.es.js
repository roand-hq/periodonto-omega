import le, { useState as H } from "react";
var D = { exports: {} }, Y = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Q;
function oe() {
  if (Q) return Y;
  Q = 1;
  var f = Symbol.for("react.transitional.element"), j = Symbol.for("react.fragment");
  function d(m, A, v) {
    var E = null;
    if (v !== void 0 && (E = "" + v), A.key !== void 0 && (E = "" + A.key), "key" in A) {
      v = {};
      for (var b in A)
        b !== "key" && (v[b] = A[b]);
    } else v = A;
    return A = v.ref, {
      $$typeof: f,
      type: m,
      key: E,
      ref: A !== void 0 ? A : null,
      props: v
    };
  }
  return Y.Fragment = j, Y.jsx = d, Y.jsxs = d, Y;
}
var M = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var K;
function ce() {
  return K || (K = 1, process.env.NODE_ENV !== "production" && function() {
    function f(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === F ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case I:
          return "Fragment";
        case l:
          return "Profiler";
        case T:
          return "StrictMode";
        case i:
          return "Suspense";
        case N:
          return "SuspenseList";
        case g:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case P:
            return "Portal";
          case o:
            return (e.displayName || "Context") + ".Provider";
          case t:
            return (e._context.displayName || "Context") + ".Consumer";
          case c:
            var a = e.render;
            return e = e.displayName, e || (e = a.displayName || a.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case n:
            return a = e.displayName || null, a !== null ? a : f(e.type) || "Memo";
          case s:
            a = e._payload, e = e._init;
            try {
              return f(e(a));
            } catch {
            }
        }
      return null;
    }
    function j(e) {
      return "" + e;
    }
    function d(e) {
      try {
        j(e);
        var a = !1;
      } catch {
        a = !0;
      }
      if (a) {
        a = console;
        var u = a.error, p = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return u.call(
          a,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          p
        ), j(e);
      }
    }
    function m(e) {
      if (e === I) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === s)
        return "<...>";
      try {
        var a = f(e);
        return a ? "<" + a + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function A() {
      var e = G.A;
      return e === null ? null : e.getOwner();
    }
    function v() {
      return Error("react-stack-top-frame");
    }
    function E(e) {
      if (X.call(e, "key")) {
        var a = Object.getOwnPropertyDescriptor(e, "key").get;
        if (a && a.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function b(e, a) {
      function u() {
        V || (V = !0, console.error(
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
      return $[e] || ($[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function w(e, a, u, p, k, y, z, U) {
      return u = y.ref, e = {
        $$typeof: S,
        type: e,
        key: a,
        props: y,
        _owner: k
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
        value: z
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: U
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function h(e, a, u, p, k, y, z, U) {
      var x = a.children;
      if (x !== void 0)
        if (p)
          if (ne(x)) {
            for (p = 0; p < x.length; p++)
              _(x[p]);
            Object.freeze && Object.freeze(x);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else _(x);
      if (X.call(a, "key")) {
        x = f(e);
        var O = Object.keys(a).filter(function(se) {
          return se !== "key";
        });
        p = 0 < O.length ? "{key: someKey, " + O.join(": ..., ") + ": ...}" : "{key: someKey}", L[x + p] || (O = 0 < O.length ? "{" + O.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          p,
          x,
          O,
          x
        ), L[x + p] = !0);
      }
      if (x = null, u !== void 0 && (d(u), x = "" + u), E(a) && (d(a.key), x = "" + a.key), "key" in a) {
        u = {};
        for (var W in a)
          W !== "key" && (u[W] = a[W]);
      } else u = a;
      return x && b(
        u,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), w(
        e,
        x,
        y,
        k,
        A(),
        u,
        z,
        U
      );
    }
    function _(e) {
      typeof e == "object" && e !== null && e.$$typeof === S && e._store && (e._store.validated = 1);
    }
    var C = le, S = Symbol.for("react.transitional.element"), P = Symbol.for("react.portal"), I = Symbol.for("react.fragment"), T = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), t = Symbol.for("react.consumer"), o = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), i = Symbol.for("react.suspense"), N = Symbol.for("react.suspense_list"), n = Symbol.for("react.memo"), s = Symbol.for("react.lazy"), g = Symbol.for("react.activity"), F = Symbol.for("react.client.reference"), G = C.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, X = Object.prototype.hasOwnProperty, ne = Array.isArray, B = console.createTask ? console.createTask : function() {
      return null;
    };
    C = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var V, $ = {}, J = C["react-stack-bottom-frame"].bind(
      C,
      v
    )(), q = B(m(v)), L = {};
    M.Fragment = I, M.jsx = function(e, a, u, p, k) {
      var y = 1e4 > G.recentlyCreatedOwnerStacks++;
      return h(
        e,
        a,
        u,
        !1,
        p,
        k,
        y ? Error("react-stack-top-frame") : J,
        y ? B(m(e)) : q
      );
    }, M.jsxs = function(e, a, u, p, k) {
      var y = 1e4 > G.recentlyCreatedOwnerStacks++;
      return h(
        e,
        a,
        u,
        !0,
        p,
        k,
        y ? Error("react-stack-top-frame") : J,
        y ? B(m(e)) : q
      );
    };
  }()), M;
}
var Z;
function ie() {
  return Z || (Z = 1, process.env.NODE_ENV === "production" ? D.exports = oe() : D.exports = ce()), D.exports;
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
], ee = (f) => ({
  furca: f === "palatina" ? ["0", "0"] : ["0"],
  sangrado: [!1, !1, !1],
  placa: [!1, !1, !1],
  anchuraEncia: "",
  margenGingival: [0, 0, 0],
  profundidadSondaje: [0, 0, 0]
}), ue = (f) => {
  const j = f[0], m = j === "1" || j === "2" ? "palatina" : "lingual";
  return {
    implante: !1,
    movilidad: 0,
    // solo valores entre -3 y +3
    pronostico: "",
    caras: {
      vestibular: ee("vestibular"),
      [m]: ee(m)
    }
  };
};
function fe(f = null) {
  const j = () => Object.fromEntries(de.map((b) => [b, ue(b)])), [d, m] = H(j() || f);
  return H(() => {
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
      m((h) => ({
        ...h,
        [b]: {
          ...h[b],
          caras: {
            ...h[b].caras,
            [R]: {
              ...h[b].caras[R],
              ...w
            }
          }
        }
      }));
    },
    resetearDientes: () => {
      m(j());
    }
  };
}
const re = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAIGNIUk0AAHolAACAgwAA+f8AAIDoAABSCAABFVgAADqXAAAXb9daH5AAAAEiSURBVHjapNTLKgRwFMfxT9MoKxtFJJLI0gplpYgkG4VXwBMoezasxNJaap7AAyBk4RJFYWUxlIQmGZszNS5z/9Z/c875//6Xc+F/hrCJS7zjE/dIYQ71StCGXWRjnWAbW9jDa9jPMVJIpC9OzWIDvf/ENGIR6Yhb+B3Qige8YVJpOrAfYtP5jlQYJ5RPI27xhGYYDJEtlTMae1eEwBe6VMcxruEqslMtS3hNoB2nNQidIZlAHT5qEMogm8AjemoQ6oQEjtCPhiqFxvAMs4WqtMzCzERbqY/MpaPXKiFXyAM5w3AYDtBUpshq7Fn/7ZgPxw3Giwh0502I3cj6H2byOvsQy5iKD13Ie0oWa0gWu3JL9M4FXmKwvcW6w04Mvh98DwBUVk3PjjjwlAAAAABJRU5ErkJggg==", te = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAIGNIUk0AAHolAACAgwAA+f8AAIDoAABSCAABFVgAADqXAAAXb9daH5AAAAEXSURBVHjapNO/K0VxGMfxl9NVBotuUQbc5G+QTIoMd7SYlE2M/ggW/Ac2g+gOymJXFlmuxaCkxIDBj0I5lufU6XTvUfd86tup5/mc93nO5/v90lnz2EcbL/jCPVpYxoB/NIkTpLn1iwOc4T1q1/GxjprBQwGS4g1D4aljA8/RWy9CGnjqAEljirGCfxwX0V/Kin047QLpBsqmu40MR2CuBFIGgoXwbInd6RUEl7hJIuQqOsZoguGKoDZqSYRdRd9Ik8igihqQxGhVtIjXBEcVIONo4hwG42D1sv2t8ExnhWYPoO3o7xYbmyWges43FXGk8ezvNOpq7mZn6wcrWMv9Sood1MoCnMAervAY4A984g6HmC2+9DcA99V0nm6yLEsAAAAASUVORK5CYII=", ae = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAIGNIUk0AAHolAACAgwAA+f8AAIDoAABSCAABFVgAADqXAAAXb9daH5AAAADYSURBVHjarNQ9SkNBGAXQk1HBYC8mZhHp/OuCCNZCSOEGFLdiStcgpBAXYR0UbYONhQjWgolJM08eSUzie3Phg2nmMMxcpmJ+jtDBARrYwDuecId7fFmQBm4xXjJ9HP+FNDFYAclmiMtppI7XfyD5OctDvYLION7dzhr20VU8W/gOOFc+pwGHCaDtgN0EUDVgPQEk4COBMwx4TgB9htihsunDJl5KFPIHe5nYwqggdD19vIsCSC9+MTNp420FYBRP8ludyhyshiucxHU1e+JYlUfc4CG/aTIATpd8yNrLF8cAAAAASUVORK5CYII=";
function be({ savedState: f, onSave: j }) {
  const { dientes: d, actualizarDiente: m, actualizarCara: A, resetearDientes: v } = fe(f), E = (l, t) => {
    if (t === "" || t === "-") {
      m(l, { movilidad: t });
      return;
    }
    const o = Number(t);
    if (isNaN(o))
      return;
    let c = o;
    o < -3 && (c = -3), o > 3 && (c = 3), m(l, { movilidad: c });
  }, b = (l, t, o, c) => {
    if (c === "" || c === "-") {
      h(l, t, "profundidadSondaje", o, c);
      return;
    }
    const i = Number(c);
    if (isNaN(i)) return;
    const N = Math.max(0, Math.min(15, i));
    h(l, t, "profundidadSondaje", o, N);
  }, R = (l, t, o, c) => {
    if (c === "" || c === "-") {
      const F = [...d[l].caras[t].margenGingival || []];
      F[o] = c, A(l, t, { margenGingival: F });
      return;
    }
    const i = Number(c);
    if (isNaN(i)) return;
    let N = i;
    i < -5 && (N = -5), i > 5 && (N = 5);
    const s = [...d[l].caras[t].margenGingival || []];
    s[o] = N, A(l, t, { margenGingival: s });
  }, w = (l, t, o) => {
    m(l, { [t]: o });
  }, h = (l, t, o, c, i) => {
    const N = d[l].caras[t];
    let n = {};
    if (Array.isArray(N[o])) {
      const s = [...N[o]];
      s[c] = i, n[o] = s;
    } else
      n[o] = i;
    A(l, t, n);
  }, _ = (l, t, o) => {
    const c = d[l]?.caras?.[t]?.furca?.[o] || "";
    let i;
    c === "" ? i = "1" : c === "1" ? i = "2" : c === "2" ? i = "3" : i = "", h(l, t, "furca", o, i);
  }, C = () => {
    console.log(d);
  }, S = [
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
  ], P = [
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
  ], I = (l) => /* @__PURE__ */ r.jsx("div", { className: "bg-white rounded-2xl shadow-2xl overflow-x-auto mb-6 p-4", children: /* @__PURE__ */ r.jsxs("table", { className: "w-full border-collapse border border-gray-300 text-xs", children: [
    /* @__PURE__ */ r.jsx("thead", { children: /* @__PURE__ */ r.jsxs("tr", { children: [
      /* @__PURE__ */ r.jsx("th", { className: "border border-gray-300 bg-gray-100 p-2 sticky left-0 z-10 min-w-[150px]", children: "Parámetro" }),
      l.map((t) => /* @__PURE__ */ r.jsx(
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
        l.map((t) => /* @__PURE__ */ r.jsx(
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
        l.map((t) => /* @__PURE__ */ r.jsx(
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
        l.map((t) => /* @__PURE__ */ r.jsx(
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
  ] }) }), T = (l, t, o, c, i) => {
    const N = t === "palatina";
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
          l.map((n) => /* @__PURE__ */ r.jsx(
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
            l.map((n) => /* @__PURE__ */ r.jsx("td", { className: "border p-2 text-center", children: N ? /* @__PURE__ */ r.jsx("div", { className: "flex justify-center gap-1", children: [0, 1].map((s) => /* @__PURE__ */ r.jsx(
              "div",
              {
                onClick: () => _(n, t, s),
                className: "w-10 h-10 flex items-center justify-center border border-gray-300 rounded cursor-pointer hover:ring focus:outline-none",
                children: (() => {
                  const g = d[n]?.caras?.[t]?.furca?.[s];
                  return g === "1" ? /* @__PURE__ */ r.jsx(
                    "img",
                    {
                      src: re,
                      alt: "Furca 1",
                      className: "w-5 h-5 select-none pointer-events-none"
                    }
                  ) : g === "2" ? /* @__PURE__ */ r.jsx(
                    "img",
                    {
                      src: te,
                      alt: "Furca 2",
                      className: "w-5 h-5 select-none pointer-events-none"
                    }
                  ) : g === "3" ? /* @__PURE__ */ r.jsx(
                    "img",
                    {
                      src: ae,
                      alt: "Furca 3",
                      className: "w-5 h-5 select-none pointer-events-none"
                    }
                  ) : null;
                })()
              },
              s
            )) }) : (
              // Un solo input para furca si es vestibular (índice 1)
              /* @__PURE__ */ r.jsx(
                "div",
                {
                  onClick: () => _(n, t, 1),
                  className: "w-full h-10 flex items-center justify-center border border-gray-300 rounded cursor-pointer hover:ring focus:outline-none",
                  children: (() => {
                    const s = d[n]?.caras?.[t]?.furca?.[1];
                    return s === "1" ? /* @__PURE__ */ r.jsx(
                      "img",
                      {
                        src: re,
                        alt: "Furca 1",
                        className: "w-5 h-5 select-none pointer-events-none"
                      }
                    ) : s === "2" ? /* @__PURE__ */ r.jsx(
                      "img",
                      {
                        src: te,
                        alt: "Furca 2",
                        className: "w-5 h-5 select-none pointer-events-none"
                      }
                    ) : s === "3" ? /* @__PURE__ */ r.jsx(
                      "img",
                      {
                        src: ae,
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
            l.map((n) => /* @__PURE__ */ r.jsx("td", { className: "border p-2 text-center", children: /* @__PURE__ */ r.jsx("div", { className: "flex gap-1 justify-center", children: [0, 1, 2].map((s) => /* @__PURE__ */ r.jsxs(
              "label",
              {
                className: "inline-block w-4 h-4 cursor-pointer relative",
                children: [
                  /* @__PURE__ */ r.jsx(
                    "input",
                    {
                      type: "checkbox",
                      checked: d[n]?.caras?.[t]?.sangrado?.[s] || !1,
                      onChange: (g) => h(
                        n,
                        t,
                        "sangrado",
                        s,
                        g.target.checked
                      ),
                      className: "peer appearance-none w-full h-full border border-gray-400 rounded-sm"
                    }
                  ),
                  /* @__PURE__ */ r.jsx("span", { className: "absolute inset-0 rounded-sm border border-gray-400 peer-checked:bg-red-600" })
                ]
              },
              s
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
            l.map((n) => /* @__PURE__ */ r.jsx("td", { className: "border p-2 text-center", children: /* @__PURE__ */ r.jsx("div", { className: "flex gap-1 justify-center", children: [0, 1, 2].map((s) => /* @__PURE__ */ r.jsxs(
              "label",
              {
                className: "inline-block w-4 h-4 cursor-pointer relative",
                children: [
                  /* @__PURE__ */ r.jsx(
                    "input",
                    {
                      type: "checkbox",
                      checked: d[n]?.caras?.[t]?.placa?.[s] || !1,
                      onChange: (g) => h(
                        n,
                        t,
                        "placa",
                        s,
                        g.target.checked
                      ),
                      className: "peer appearance-none w-full h-full border border-gray-400 rounded-sm"
                    }
                  ),
                  /* @__PURE__ */ r.jsx("span", { className: "absolute inset-0 rounded-sm border border-gray-400 peer-checked:bg-blue-600" })
                ]
              },
              s
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
            l.map((n) => /* @__PURE__ */ r.jsx("td", { className: "border p-2 text-center", children: /* @__PURE__ */ r.jsx(
              "input",
              {
                type: "text",
                value: d[n]?.caras?.[t]?.anchuraEncia || "",
                onChange: (s) => h(
                  n,
                  t,
                  "anchuraEncia",
                  0,
                  s.target.value
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
            l.map((n) => /* @__PURE__ */ r.jsx("td", { className: "border p-2 text-center", children: /* @__PURE__ */ r.jsx("div", { className: "flex gap-1 justify-center", children: [0, 1, 2].map((s) => /* @__PURE__ */ r.jsx(
              "input",
              {
                type: "text",
                value: d[n]?.caras?.[t]?.margenGingival?.[s] ?? "",
                onChange: (g) => R(
                  n,
                  t,
                  s,
                  g.target.value
                ),
                className: "w-6 h-6 text-center text-xs border border-gray-300 rounded focus:ring focus:outline-none"
              },
              s
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
            l.map((n) => /* @__PURE__ */ r.jsx("td", { className: "border p-2 text-center", children: /* @__PURE__ */ r.jsx("div", { className: "flex gap-1 justify-center", children: [0, 1, 2].map((s) => /* @__PURE__ */ r.jsx(
              "input",
              {
                type: "text",
                value: d[n]?.caras?.[t]?.profundidadSondaje?.[s] ?? "",
                onChange: (g) => b(
                  n,
                  t,
                  s,
                  g.target.value
                ),
                className: "w-6 h-6 text-center text-xs border border-gray-300 rounded focus:ring focus:outline-none"
              },
              s
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
          onClick: v,
          className: "bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl",
          children: "Resetear todos los dientes"
        }
      ),
      /* @__PURE__ */ r.jsx(
        "button",
        {
          onClick: C,
          className: "ml-4 bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl",
          children: "Guardar"
        }
      )
    ] }),
    /* @__PURE__ */ r.jsxs("section", { className: "mb-12", children: [
      /* @__PURE__ */ r.jsx("h2", { className: "text-3xl font-bold mb-6 text-center text-indigo-700", children: "SUPERIOR" }),
      I(S),
      T(
        S,
        "vestibular",
        "Cara Vestibular",
        "bg-blue-50",
        "text-blue-700"
      ),
      T(
        S,
        "palatina",
        "Cara Palatina",
        "bg-purple-50",
        "text-purple-700"
      )
    ] }),
    /* @__PURE__ */ r.jsxs("section", { className: "mb-12", children: [
      /* @__PURE__ */ r.jsx("h2", { className: "text-3xl font-bold mb-6 text-center text-red-700", children: "INFERIOR" }),
      I(P),
      T(
        P,
        "vestibular",
        "Cara Vestibular",
        "bg-green-50",
        "text-green-700"
      ),
      T(
        P,
        "lingual",
        "Cara Lingual",
        "bg-pink-50",
        "text-pink-700"
      )
    ] })
  ] }) });
}
const Ae = ({ savedState: f, onSave: j }) => /* @__PURE__ */ r.jsx(r.Fragment, { children: /* @__PURE__ */ r.jsx(be, { savedState: f, onSave: j }) });
export {
  Ae as default
};
