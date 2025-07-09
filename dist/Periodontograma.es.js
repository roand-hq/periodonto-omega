import te, { useState as ae } from "react";
var z = { exports: {} }, A = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var X;
function ne() {
  if (X) return A;
  X = 1;
  var c = Symbol.for("react.transitional.element"), g = Symbol.for("react.fragment");
  function x(w, p, j) {
    var f = null;
    if (j !== void 0 && (f = "" + j), p.key !== void 0 && (f = "" + p.key), "key" in p) {
      j = {};
      for (var v in p)
        v !== "key" && (j[v] = p[v]);
    } else j = p;
    return p = j.ref, {
      $$typeof: c,
      type: w,
      key: f,
      ref: p !== void 0 ? p : null,
      props: j
    };
  }
  return A.Fragment = g, A.jsx = x, A.jsxs = x, A;
}
var O = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var H;
function se() {
  return H || (H = 1, process.env.NODE_ENV !== "production" && function() {
    function c(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === B ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case t:
          return "Fragment";
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case l:
          return "Suspense";
        case h:
          return "SuspenseList";
        case K:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case s:
            return "Portal";
          case N:
            return (e.displayName || "Context") + ".Provider";
          case d:
            return (e._context.displayName || "Context") + ".Consumer";
          case n:
            var a = e.render;
            return e = e.displayName, e || (e = a.displayName || a.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case $:
            return a = e.displayName || null, a !== null ? a : c(e.type) || "Memo";
          case W:
            a = e._payload, e = e._init;
            try {
              return c(e(a));
            } catch {
            }
        }
      return null;
    }
    function g(e) {
      return "" + e;
    }
    function x(e) {
      try {
        g(e);
        var a = !1;
      } catch {
        a = !0;
      }
      if (a) {
        a = console;
        var u = a.error, b = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return u.call(
          a,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          b
        ), g(e);
      }
    }
    function w(e) {
      if (e === t) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === W)
        return "<...>";
      try {
        var a = c(e);
        return a ? "<" + a + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function p() {
      var e = F.A;
      return e === null ? null : e.getOwner();
    }
    function j() {
      return Error("react-stack-top-frame");
    }
    function f(e) {
      if (G.call(e, "key")) {
        var a = Object.getOwnPropertyDescriptor(e, "key").get;
        if (a && a.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function v(e, a) {
      function u() {
        L || (L = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          a
        ));
      }
      u.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: u,
        configurable: !0
      });
    }
    function y() {
      var e = c(this.type);
      return U[e] || (U[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function k(e, a, u, b, R, E, M, Y) {
      return u = E.ref, e = {
        $$typeof: T,
        type: e,
        key: a,
        props: E,
        _owner: R
      }, (u !== void 0 ? u : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: y
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
        value: M
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Y
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function C(e, a, u, b, R, E, M, Y) {
      var m = a.children;
      if (m !== void 0)
        if (b)
          if (ee(m)) {
            for (b = 0; b < m.length; b++)
              S(m[b]);
            Object.freeze && Object.freeze(m);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else S(m);
      if (G.call(a, "key")) {
        m = c(e);
        var P = Object.keys(a).filter(function(re) {
          return re !== "key";
        });
        b = 0 < P.length ? "{key: someKey, " + P.join(": ..., ") + ": ...}" : "{key: someKey}", J[m + b] || (P = 0 < P.length ? "{" + P.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          b,
          m,
          P,
          m
        ), J[m + b] = !0);
      }
      if (m = null, u !== void 0 && (x(u), m = "" + u), f(a) && (x(a.key), m = "" + a.key), "key" in a) {
        u = {};
        for (var D in a)
          D !== "key" && (u[D] = a[D]);
      } else u = a;
      return m && v(
        u,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), k(
        e,
        m,
        E,
        R,
        p(),
        u,
        M,
        Y
      );
    }
    function S(e) {
      typeof e == "object" && e !== null && e.$$typeof === T && e._store && (e._store.validated = 1);
    }
    var _ = te, T = Symbol.for("react.transitional.element"), s = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), d = Symbol.for("react.consumer"), N = Symbol.for("react.context"), n = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), $ = Symbol.for("react.memo"), W = Symbol.for("react.lazy"), K = Symbol.for("react.activity"), B = Symbol.for("react.client.reference"), F = _.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, G = Object.prototype.hasOwnProperty, ee = Array.isArray, I = console.createTask ? console.createTask : function() {
      return null;
    };
    _ = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var L, U = {}, V = _["react-stack-bottom-frame"].bind(
      _,
      j
    )(), q = I(w(j)), J = {};
    O.Fragment = t, O.jsx = function(e, a, u, b, R) {
      var E = 1e4 > F.recentlyCreatedOwnerStacks++;
      return C(
        e,
        a,
        u,
        !1,
        b,
        R,
        E ? Error("react-stack-top-frame") : V,
        E ? I(w(e)) : q
      );
    }, O.jsxs = function(e, a, u, b, R) {
      var E = 1e4 > F.recentlyCreatedOwnerStacks++;
      return C(
        e,
        a,
        u,
        !0,
        b,
        R,
        E ? Error("react-stack-top-frame") : V,
        E ? I(w(e)) : q
      );
    };
  }()), O;
}
var Z;
function le() {
  return Z || (Z = 1, process.env.NODE_ENV === "production" ? z.exports = ne() : z.exports = se()), z.exports;
}
var r = le();
const oe = [
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
], Q = (c) => ({
  furca: c === "palatina" ? ["", ""] : [""],
  sangrado: [!1, !1, !1],
  placa: [!1, !1, !1],
  anchuraEncia: "",
  margenGingival: [0, 0, 0],
  profundidadSondaje: [0, 0, 0]
}), ce = (c) => {
  const g = c[0], w = g === "1" || g === "2" ? "palatina" : "lingual";
  return {
    implante: !1,
    movilidad: 0,
    // solo valores entre -3 y +3
    pronostico: "",
    caras: {
      vestibular: Q("vestibular"),
      [w]: Q(w)
    }
  };
};
function ie() {
  const c = () => Object.fromEntries(oe.map((f) => [f, ce(f)])), [g, x] = ae(c());
  return {
    dientes: g,
    actualizarDiente: (f, v) => {
      x((y) => ({
        ...y,
        [f]: {
          ...y[f],
          ...v
        }
      }));
    },
    actualizarCara: (f, v, y) => {
      x((k) => ({
        ...k,
        [f]: {
          ...k[f],
          caras: {
            ...k[f].caras,
            [v]: {
              ...k[f].caras[v],
              ...y
            }
          }
        }
      }));
    },
    resetearDientes: () => {
      x(c());
    }
  };
}
function de() {
  const { dientes: c, actualizarDiente: g, actualizarCara: x, resetearDientes: w } = ie(), p = (s, t) => {
    if (t === "" || t === "-") {
      g(s, { movilidad: t });
      return;
    }
    const o = Number(t);
    if (isNaN(o))
      return;
    let i = o;
    o < -3 && (i = -3), o > 3 && (i = 3), g(s, { movilidad: i });
  }, j = (s, t, o, i) => {
    if (i === "" || i === "-") {
      y(s, t, "profundidadSondaje", o, i);
      return;
    }
    const d = Number(i);
    if (isNaN(d)) return;
    const N = Math.max(0, Math.min(15, d));
    y(s, t, "profundidadSondaje", o, N);
  }, f = (s, t, o, i) => {
    if (i === "" || i === "-") {
      const $ = [...c[s].caras[t].margenGingival || []];
      $[o] = i, x(s, t, { margenGingival: $ });
      return;
    }
    const d = Number(i);
    if (isNaN(d)) return;
    let N = d;
    d < -5 && (N = -5), d > 5 && (N = 5);
    const l = [...c[s].caras[t].margenGingival || []];
    l[o] = N, x(s, t, { margenGingival: l });
  }, v = (s, t, o) => {
    g(s, { [t]: o });
  }, y = (s, t, o, i, d) => {
    const N = c[s].caras[t];
    let n = {};
    if (Array.isArray(N[o])) {
      const l = [...N[o]];
      l[i] = d, n[o] = l;
    } else
      n[o] = d;
    x(s, t, n);
  }, k = (s, t, o) => {
    const i = c[s]?.caras?.[t]?.furca?.[o] || "";
    let d;
    i === "1" ? d = "2" : i === "2" ? d = "3" : d = "1", y(s, t, "furca", o, d);
  }, C = [
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
  ], S = [
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
  ], _ = (s) => /* @__PURE__ */ r.jsx("div", { className: "bg-white rounded-2xl shadow-2xl overflow-x-auto mb-6 p-4", children: /* @__PURE__ */ r.jsxs("table", { className: "w-full border-collapse border border-gray-300 text-xs", children: [
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
                  checked: c[t]?.implante || !1,
                  onChange: (o) => v(t, "implante", o.target.checked),
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
                value: c[t]?.movilidad ?? "",
                min: -3,
                max: 3,
                onChange: (o) => p(t, o.target.value),
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
                value: c[t]?.pronostico || "",
                onChange: (o) => v(t, "pronostico", o.target.value),
                className: "w-full px-1 py-1 text-center border border-gray-300 rounded focus:border-purple-500 focus:ring-purple-200"
              }
            )
          },
          t
        ))
      ] })
    ] })
  ] }) }), T = (s, t, o, i, d) => {
    const N = t === "palatina";
    return /* @__PURE__ */ r.jsxs("div", { className: "bg-white rounded-2xl shadow-2xl overflow-x-auto mb-6 p-4", children: [
      /* @__PURE__ */ r.jsx(
        "h3",
        {
          className: `text-xl font-bold mb-4 text-center text-white rounded py-2 bg-gradient-to-r ${i}`,
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
                className: `border p-3 font-semibold sticky left-0 z-10 bg-gradient-to-r ${i} ${d} select-none`,
                style: { minWidth: "150px" },
                children: "Furca"
              }
            ),
            s.map((n) => /* @__PURE__ */ r.jsx("td", { className: "border p-2 text-center", children: N ? /* @__PURE__ */ r.jsx("div", { className: "flex justify-center gap-1", children: [0, 1].map((l) => /* @__PURE__ */ r.jsx(
              "div",
              {
                onClick: () => k(n, t, l),
                className: "w-10 h-10 flex items-center justify-center border border-gray-300 rounded cursor-pointer hover:ring focus:outline-none",
                children: (() => {
                  const h = c[n]?.caras?.[t]?.furca?.[l];
                  return h === "1" ? /* @__PURE__ */ r.jsx(
                    "img",
                    {
                      src: "src\\assets\\vacio.png",
                      alt: "Furca 1",
                      className: "w-5 h-5 select-none pointer-events-none"
                    }
                  ) : h === "2" ? /* @__PURE__ */ r.jsx(
                    "img",
                    {
                      src: "src\\assets\\mediolleno.png",
                      alt: "Furca 2",
                      className: "w-5 h-5 select-none pointer-events-none"
                    }
                  ) : h === "3" ? /* @__PURE__ */ r.jsx(
                    "img",
                    {
                      src: "src\\assets\\lleno.png",
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
                  onClick: () => k(n, t, 1),
                  className: "w-full h-10 flex items-center justify-center border border-gray-300 rounded cursor-pointer hover:ring focus:outline-none",
                  children: (() => {
                    const l = c[n]?.caras?.[t]?.furca?.[1];
                    return l === "1" ? /* @__PURE__ */ r.jsx(
                      "img",
                      {
                        src: "src\\assets\\vacio.png",
                        alt: "Furca 1",
                        className: "w-5 h-5 select-none pointer-events-none"
                      }
                    ) : l === "2" ? /* @__PURE__ */ r.jsx(
                      "img",
                      {
                        src: "src\\assets\\mediolleno.png",
                        alt: "Furca 2",
                        className: "w-5 h-5 select-none pointer-events-none"
                      }
                    ) : l === "3" ? /* @__PURE__ */ r.jsx(
                      "img",
                      {
                        src: "src\\assets\\lleno.png",
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
                className: `border p-3 font-semibold sticky left-0 z-10 bg-gradient-to-r ${i} ${d} select-none`,
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
                      checked: c[n]?.caras?.[t]?.sangrado?.[l] || !1,
                      onChange: (h) => y(
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
                className: `border p-3 font-semibold sticky left-0 z-10  bg-gradient-to-r ${i} ${d} select-none`,
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
                      checked: c[n]?.caras?.[t]?.placa?.[l] || !1,
                      onChange: (h) => y(
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
                className: `border p-3 font-semibold sticky left-0 z-10 bg-gradient-to-r ${i} ${d} select-none`,
                style: { minWidth: "150px" },
                children: "Anchura encía"
              }
            ),
            s.map((n) => /* @__PURE__ */ r.jsx("td", { className: "border p-2 text-center", children: /* @__PURE__ */ r.jsx(
              "input",
              {
                type: "text",
                value: c[n]?.caras?.[t]?.anchuraEncia || "",
                onChange: (l) => y(
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
                className: `border p-3 font-semibold sticky left-0 z-10 bg-gradient-to-r ${i} ${d} select-none`,
                style: { minWidth: "150px" },
                children: "Margen gingival"
              }
            ),
            s.map((n) => /* @__PURE__ */ r.jsx("td", { className: "border p-2 text-center", children: /* @__PURE__ */ r.jsx("div", { className: "flex gap-1 justify-center", children: [0, 1, 2].map((l) => /* @__PURE__ */ r.jsx(
              "input",
              {
                type: "text",
                value: c[n]?.caras?.[t]?.margenGingival?.[l] ?? "",
                onChange: (h) => f(
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
                className: `border p-3 font-semibold sticky left-0 z-10 bg-gradient-to-r ${i} ${d} select-none`,
                style: { minWidth: "150px" },
                children: "Profundidad de sondaje"
              }
            ),
            s.map((n) => /* @__PURE__ */ r.jsx("td", { className: "border p-2 text-center", children: /* @__PURE__ */ r.jsx("div", { className: "flex gap-1 justify-center", children: [0, 1, 2].map((l) => /* @__PURE__ */ r.jsx(
              "input",
              {
                type: "text",
                value: c[n]?.caras?.[t]?.profundidadSondaje?.[l] ?? "",
                onChange: (h) => j(
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
  return /* @__PURE__ */ r.jsx("div", { className: "p-6 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen", children: /* @__PURE__ */ r.jsxs("div", { className: "max-w-full mx-auto", children: [
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
          onClick: w,
          className: "bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl",
          children: "Resetear todos los dientes"
        }
      )
    ] }),
    /* @__PURE__ */ r.jsxs("section", { className: "mb-12", children: [
      /* @__PURE__ */ r.jsx("h2", { className: "text-3xl font-bold mb-6 text-center text-indigo-700", children: "SUPERIOR" }),
      _(C),
      T(
        C,
        "vestibular",
        "Cara Vestibular",
        "from-blue-600 to-indigo-700",
        "text-white"
      ),
      T(
        C,
        "palatina",
        "Cara Palatina",
        "from-teal-600 to-green-700",
        "text-white"
      )
    ] }),
    /* @__PURE__ */ r.jsxs("section", { className: "mb-12", children: [
      /* @__PURE__ */ r.jsx("h2", { className: "text-3xl font-bold mb-6 text-center text-red-700", children: "INFERIOR" }),
      _(S),
      T(
        S,
        "vestibular",
        "Cara Vestibular",
        "from-orange-500 to-red-600",
        "text-white"
      ),
      T(
        S,
        "lingual",
        "Cara Lingual",
        "from-yellow-600 to-orange-700",
        "text-white"
      )
    ] })
  ] }) });
}
const fe = () => /* @__PURE__ */ r.jsx(r.Fragment, { children: /* @__PURE__ */ r.jsx(de, {}) });
export {
  fe as default
};
