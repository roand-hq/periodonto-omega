import se, { useState as le } from "react";
var Y = { exports: {} }, O = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var q;
function oe() {
  if (q) return O;
  q = 1;
  var c = Symbol.for("react.transitional.element"), h = Symbol.for("react.fragment");
  function b(y, p, g) {
    var f = null;
    if (g !== void 0 && (f = "" + g), p.key !== void 0 && (f = "" + p.key), "key" in p) {
      g = {};
      for (var j in p)
        j !== "key" && (g[j] = p[j]);
    } else g = p;
    return p = g.ref, {
      $$typeof: c,
      type: y,
      key: f,
      ref: p !== void 0 ? p : null,
      props: g
    };
  }
  return O.Fragment = h, O.jsx = b, O.jsxs = b, O;
}
var _ = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var L;
function ce() {
  return L || (L = 1, process.env.NODE_ENV !== "production" && function() {
    function c(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === te ? null : e.displayName || e.name || null;
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
        case x:
          return "SuspenseList";
        case re:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case s:
            return "Portal";
          case v:
            return (e.displayName || "Context") + ".Provider";
          case d:
            return (e._context.displayName || "Context") + ".Consumer";
          case n:
            var a = e.render;
            return e = e.displayName, e || (e = a.displayName || a.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case P:
            return a = e.displayName || null, a !== null ? a : c(e.type) || "Memo";
          case z:
            a = e._payload, e = e._init;
            try {
              return c(e(a));
            } catch {
            }
        }
      return null;
    }
    function h(e) {
      return "" + e;
    }
    function b(e) {
      try {
        h(e);
        var a = !1;
      } catch {
        a = !0;
      }
      if (a) {
        a = console;
        var u = a.error, m = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return u.call(
          a,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          m
        ), h(e);
      }
    }
    function y(e) {
      if (e === t) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === z)
        return "<...>";
      try {
        var a = c(e);
        return a ? "<" + a + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function p() {
      var e = M.A;
      return e === null ? null : e.getOwner();
    }
    function g() {
      return Error("react-stack-top-frame");
    }
    function f(e) {
      if (U.call(e, "key")) {
        var a = Object.getOwnPropertyDescriptor(e, "key").get;
        if (a && a.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function j(e, a) {
      function u() {
        W || (W = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          a
        ));
      }
      u.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: u,
        configurable: !0
      });
    }
    function N() {
      var e = c(this.type);
      return X[e] || (X[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function E(e, a, u, m, R, w, D, B) {
      return u = w.ref, e = {
        $$typeof: C,
        type: e,
        key: a,
        props: w,
        _owner: R
      }, (u !== void 0 ? u : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: N
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
        value: D
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: B
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function S(e, a, u, m, R, w, D, B) {
      var A = a.children;
      if (A !== void 0)
        if (m)
          if (ae(A)) {
            for (m = 0; m < A.length; m++)
              I(A[m]);
            Object.freeze && Object.freeze(A);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else I(A);
      if (U.call(a, "key")) {
        A = c(e);
        var T = Object.keys(a).filter(function(ne) {
          return ne !== "key";
        });
        m = 0 < T.length ? "{key: someKey, " + T.join(": ..., ") + ": ...}" : "{key: someKey}", J[A + m] || (T = 0 < T.length ? "{" + T.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          m,
          A,
          T,
          A
        ), J[A + m] = !0);
      }
      if (A = null, u !== void 0 && (b(u), A = "" + u), f(a) && (b(a.key), A = "" + a.key), "key" in a) {
        u = {};
        for (var G in a)
          G !== "key" && (u[G] = a[G]);
      } else u = a;
      return A && j(
        u,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), E(
        e,
        A,
        w,
        R,
        p(),
        u,
        D,
        B
      );
    }
    function I(e) {
      typeof e == "object" && e !== null && e.$$typeof === C && e._store && (e._store.validated = 1);
    }
    var k = se, C = Symbol.for("react.transitional.element"), s = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), d = Symbol.for("react.consumer"), v = Symbol.for("react.context"), n = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), x = Symbol.for("react.suspense_list"), P = Symbol.for("react.memo"), z = Symbol.for("react.lazy"), re = Symbol.for("react.activity"), te = Symbol.for("react.client.reference"), M = k.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, U = Object.prototype.hasOwnProperty, ae = Array.isArray, F = console.createTask ? console.createTask : function() {
      return null;
    };
    k = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var W, X = {}, V = k["react-stack-bottom-frame"].bind(
      k,
      g
    )(), $ = F(y(g)), J = {};
    _.Fragment = t, _.jsx = function(e, a, u, m, R) {
      var w = 1e4 > M.recentlyCreatedOwnerStacks++;
      return S(
        e,
        a,
        u,
        !1,
        m,
        R,
        w ? Error("react-stack-top-frame") : V,
        w ? F(y(e)) : $
      );
    }, _.jsxs = function(e, a, u, m, R) {
      var w = 1e4 > M.recentlyCreatedOwnerStacks++;
      return S(
        e,
        a,
        u,
        !0,
        m,
        R,
        w ? Error("react-stack-top-frame") : V,
        w ? F(y(e)) : $
      );
    };
  }()), _;
}
var H;
function ie() {
  return H || (H = 1, process.env.NODE_ENV === "production" ? Y.exports = oe() : Y.exports = ce()), Y.exports;
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
], Q = (c) => ({
  furca: c === "palatina" ? ["", ""] : [""],
  sangrado: [!1, !1, !1],
  placa: [!1, !1, !1],
  anchuraEncia: "",
  margenGingival: [0, 0, 0],
  profundidadSondaje: [0, 0, 0]
}), ue = (c) => {
  const h = c[0], y = h === "1" || h === "2" ? "palatina" : "lingual";
  return {
    implante: !1,
    movilidad: 0,
    // solo valores entre -3 y +3
    pronostico: "",
    caras: {
      vestibular: Q("vestibular"),
      [y]: Q(y)
    }
  };
};
function fe() {
  const c = () => Object.fromEntries(de.map((f) => [f, ue(f)])), [h, b] = le(c());
  return {
    dientes: h,
    actualizarDiente: (f, j) => {
      b((N) => ({
        ...N,
        [f]: {
          ...N[f],
          ...j
        }
      }));
    },
    actualizarCara: (f, j, N) => {
      b((E) => ({
        ...E,
        [f]: {
          ...E[f],
          caras: {
            ...E[f].caras,
            [j]: {
              ...E[f].caras[j],
              ...N
            }
          }
        }
      }));
    },
    resetearDientes: () => {
      b(c());
    }
  };
}
const K = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAIGNIUk0AAHolAACAgwAA+f8AAIDoAABSCAABFVgAADqXAAAXb9daH5AAAAEiSURBVHjapNTLKgRwFMfxT9MoKxtFJJLI0gplpYgkG4VXwBMoezasxNJaap7AAyBk4RJFYWUxlIQmGZszNS5z/9Z/c875//6Xc+F/hrCJS7zjE/dIYQ71StCGXWRjnWAbW9jDa9jPMVJIpC9OzWIDvf/ENGIR6Yhb+B3Qige8YVJpOrAfYtP5jlQYJ5RPI27xhGYYDJEtlTMae1eEwBe6VMcxruEqslMtS3hNoB2nNQidIZlAHT5qEMogm8AjemoQ6oQEjtCPhiqFxvAMs4WqtMzCzERbqY/MpaPXKiFXyAM5w3AYDtBUpshq7Fn/7ZgPxw3Giwh0502I3cj6H2byOvsQy5iKD13Ie0oWa0gWu3JL9M4FXmKwvcW6w04Mvh98DwBUVk3PjjjwlAAAAABJRU5ErkJggg==", Z = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAIGNIUk0AAHolAACAgwAA+f8AAIDoAABSCAABFVgAADqXAAAXb9daH5AAAAEXSURBVHjapNO/K0VxGMfxl9NVBotuUQbc5G+QTIoMd7SYlE2M/ggW/Ac2g+gOymJXFlmuxaCkxIDBj0I5lufU6XTvUfd86tup5/mc93nO5/v90lnz2EcbL/jCPVpYxoB/NIkTpLn1iwOc4T1q1/GxjprBQwGS4g1D4aljA8/RWy9CGnjqAEljirGCfxwX0V/Kin047QLpBsqmu40MR2CuBFIGgoXwbInd6RUEl7hJIuQqOsZoguGKoDZqSYRdRd9Ik8igihqQxGhVtIjXBEcVIONo4hwG42D1sv2t8ExnhWYPoO3o7xYbmyWges43FXGk8ezvNOpq7mZn6wcrWMv9Sood1MoCnMAervAY4A984g6HmC2+9DcA99V0nm6yLEsAAAAASUVORK5CYII=", ee = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAIGNIUk0AAHolAACAgwAA+f8AAIDoAABSCAABFVgAADqXAAAXb9daH5AAAADYSURBVHjarNQ9SkNBGAXQk1HBYC8mZhHp/OuCCNZCSOEGFLdiStcgpBAXYR0UbYONhQjWgolJM08eSUzie3Phg2nmMMxcpmJ+jtDBARrYwDuecId7fFmQBm4xXjJ9HP+FNDFYAclmiMtppI7XfyD5OctDvYLION7dzhr20VU8W/gOOFc+pwGHCaDtgN0EUDVgPQEk4COBMwx4TgB9htihsunDJl5KFPIHe5nYwqggdD19vIsCSC9+MTNp420FYBRP8ludyhyshiucxHU1e+JYlUfc4CG/aTIATpd8yNrLF8cAAAAASUVORK5CYII=";
function me() {
  const { dientes: c, actualizarDiente: h, actualizarCara: b, resetearDientes: y } = fe(), p = (s, t) => {
    if (t === "" || t === "-") {
      h(s, { movilidad: t });
      return;
    }
    const o = Number(t);
    if (isNaN(o))
      return;
    let i = o;
    o < -3 && (i = -3), o > 3 && (i = 3), h(s, { movilidad: i });
  }, g = (s, t, o, i) => {
    if (i === "" || i === "-") {
      N(s, t, "profundidadSondaje", o, i);
      return;
    }
    const d = Number(i);
    if (isNaN(d)) return;
    const v = Math.max(0, Math.min(15, d));
    N(s, t, "profundidadSondaje", o, v);
  }, f = (s, t, o, i) => {
    if (i === "" || i === "-") {
      const P = [...c[s].caras[t].margenGingival || []];
      P[o] = i, b(s, t, { margenGingival: P });
      return;
    }
    const d = Number(i);
    if (isNaN(d)) return;
    let v = d;
    d < -5 && (v = -5), d > 5 && (v = 5);
    const l = [...c[s].caras[t].margenGingival || []];
    l[o] = v, b(s, t, { margenGingival: l });
  }, j = (s, t, o) => {
    h(s, { [t]: o });
  }, N = (s, t, o, i, d) => {
    const v = c[s].caras[t];
    let n = {};
    if (Array.isArray(v[o])) {
      const l = [...v[o]];
      l[i] = d, n[o] = l;
    } else
      n[o] = d;
    b(s, t, n);
  }, E = (s, t, o) => {
    const i = c[s]?.caras?.[t]?.furca?.[o] || "";
    let d;
    i === "1" ? d = "2" : i === "2" ? d = "3" : d = "1", N(s, t, "furca", o, d);
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
  ], k = (s) => /* @__PURE__ */ r.jsx("div", { className: "bg-white rounded-2xl shadow-2xl overflow-x-auto mb-6 p-4", children: /* @__PURE__ */ r.jsxs("table", { className: "w-full border-collapse border border-gray-300 text-xs", children: [
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
                  onChange: (o) => j(t, "implante", o.target.checked),
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
                onChange: (o) => j(t, "pronostico", o.target.value),
                className: "w-full px-1 py-1 text-center border border-gray-300 rounded focus:border-purple-500 focus:ring-purple-200"
              }
            )
          },
          t
        ))
      ] })
    ] })
  ] }) }), C = (s, t, o, i, d) => {
    const v = t === "palatina";
    return /* @__PURE__ */ r.jsxs("div", { className: "bg-white rounded-2xl shadow-2xl overflow-x-auto mb-6 p-4", children: [
      /* @__PURE__ */ r.jsx(
        "h3",
        {
          className: `text-xl font-bold mb-4 text-center  rounded py-2 ${i} ${d}`,
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
                className: `border p-3 font-semibold sticky left-0 z-10 ${i} ${d} select-none`,
                style: { minWidth: "150px" },
                children: "Furca"
              }
            ),
            s.map((n) => /* @__PURE__ */ r.jsx("td", { className: "border p-2 text-center", children: v ? /* @__PURE__ */ r.jsx("div", { className: "flex justify-center gap-1", children: [0, 1].map((l) => /* @__PURE__ */ r.jsx(
              "div",
              {
                onClick: () => E(n, t, l),
                className: "w-10 h-10 flex items-center justify-center border border-gray-300 rounded cursor-pointer hover:ring focus:outline-none",
                children: (() => {
                  const x = c[n]?.caras?.[t]?.furca?.[l];
                  return x === "1" ? /* @__PURE__ */ r.jsx(
                    "img",
                    {
                      src: K,
                      alt: "Furca 1",
                      className: "w-5 h-5 select-none pointer-events-none"
                    }
                  ) : x === "2" ? /* @__PURE__ */ r.jsx(
                    "img",
                    {
                      src: Z,
                      alt: "Furca 2",
                      className: "w-5 h-5 select-none pointer-events-none"
                    }
                  ) : x === "3" ? /* @__PURE__ */ r.jsx(
                    "img",
                    {
                      src: ee,
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
                  onClick: () => E(n, t, 1),
                  className: "w-full h-10 flex items-center justify-center border border-gray-300 rounded cursor-pointer hover:ring focus:outline-none",
                  children: (() => {
                    const l = c[n]?.caras?.[t]?.furca?.[1];
                    return l === "1" ? /* @__PURE__ */ r.jsx(
                      "img",
                      {
                        src: K,
                        alt: "Furca 1",
                        className: "w-5 h-5 select-none pointer-events-none"
                      }
                    ) : l === "2" ? /* @__PURE__ */ r.jsx(
                      "img",
                      {
                        src: Z,
                        alt: "Furca 2",
                        className: "w-5 h-5 select-none pointer-events-none"
                      }
                    ) : l === "3" ? /* @__PURE__ */ r.jsx(
                      "img",
                      {
                        src: ee,
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
                className: `border p-3 font-semibold sticky left-0 z-10 ${i} ${d} select-none`,
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
                      onChange: (x) => N(
                        n,
                        t,
                        "sangrado",
                        l,
                        x.target.checked
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
                className: `border p-3 font-semibold sticky left-0 z-10 ${i} ${d} select-none`,
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
                      onChange: (x) => N(
                        n,
                        t,
                        "placa",
                        l,
                        x.target.checked
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
                className: `border p-3 font-semibold sticky left-0 z-10 ${i} ${d} select-none`,
                style: { minWidth: "150px" },
                children: "Anchura encía"
              }
            ),
            s.map((n) => /* @__PURE__ */ r.jsx("td", { className: "border p-2 text-center", children: /* @__PURE__ */ r.jsx(
              "input",
              {
                type: "text",
                value: c[n]?.caras?.[t]?.anchuraEncia || "",
                onChange: (l) => N(
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
                className: `border p-3 font-semibold sticky left-0 z-10  ${i} ${d} select-none`,
                style: { minWidth: "150px" },
                children: "Margen gingival"
              }
            ),
            s.map((n) => /* @__PURE__ */ r.jsx("td", { className: "border p-2 text-center", children: /* @__PURE__ */ r.jsx("div", { className: "flex gap-1 justify-center", children: [0, 1, 2].map((l) => /* @__PURE__ */ r.jsx(
              "input",
              {
                type: "text",
                value: c[n]?.caras?.[t]?.margenGingival?.[l] ?? "",
                onChange: (x) => f(
                  n,
                  t,
                  l,
                  x.target.value
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
                className: `border p-3 font-semibold sticky left-0 z-10  ${i} ${d} select-none`,
                style: { minWidth: "150px" },
                children: "Profundidad de sondaje"
              }
            ),
            s.map((n) => /* @__PURE__ */ r.jsx("td", { className: "border p-2 text-center", children: /* @__PURE__ */ r.jsx("div", { className: "flex gap-1 justify-center", children: [0, 1, 2].map((l) => /* @__PURE__ */ r.jsx(
              "input",
              {
                type: "text",
                value: c[n]?.caras?.[t]?.profundidadSondaje?.[l] ?? "",
                onChange: (x) => g(
                  n,
                  t,
                  l,
                  x.target.value
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
          onClick: y,
          className: "bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl",
          children: "Resetear todos los dientes"
        }
      )
    ] }),
    /* @__PURE__ */ r.jsxs("section", { className: "mb-12", children: [
      /* @__PURE__ */ r.jsx("h2", { className: "text-3xl font-bold mb-6 text-center text-indigo-700", children: "SUPERIOR" }),
      k(S),
      C(
        S,
        "vestibular",
        "Cara Vestibular",
        "bg-blue-50",
        "text-blue-700"
      ),
      C(
        S,
        "palatina",
        "Cara Palatina",
        "bg-purple-50",
        "text-purple-700"
      )
    ] }),
    /* @__PURE__ */ r.jsxs("section", { className: "mb-12", children: [
      /* @__PURE__ */ r.jsx("h2", { className: "text-3xl font-bold mb-6 text-center text-red-700", children: "INFERIOR" }),
      k(I),
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
const be = () => /* @__PURE__ */ r.jsx(r.Fragment, { children: /* @__PURE__ */ r.jsx(me, {}) });
export {
  be as default
};
