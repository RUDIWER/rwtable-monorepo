import { ref as m, computed as k, watch as H, nextTick as ae, onBeforeUnmount as Vl, openBlock as c, createElementBlock as b, normalizeClass as j, normalizeStyle as N, createElementVNode as s, Fragment as T, renderList as X, toDisplayString as g, withModifiers as Ne, createCommentVNode as _, createBlock as hr, Teleport as wl, createTextVNode as U, onMounted as Is, unref as kt, withDirectives as Se, vModelText as Ur, vModelSelect as ft, vModelCheckbox as Gr } from "vue";
import { usePage as Rs, router as js } from "@inertiajs/vue3";
const rb = {
  source: {
    project: "ml-ware",
    componentPath: "resources/js/Components/RwTable.vue",
    extractedAt: "2026-03-18"
  },
  publicApi: {
    props: [
      "data",
      "columns",
      "tableId",
      "idKey",
      "initialHeight",
      "horizontalScroll",
      "checkboxColumn",
      "checkedRows",
      "globalSearch",
      "showRecordCount",
      "rowQuantitySelect",
      "rowOptions",
      "menuItems",
      "inlineUpdateRoute",
      "inlineDeleteRoute",
      "beforeInlineDelete",
      "charts",
      "excel",
      "cellStyle",
      "cellClass",
      "startOnMount",
      "initialData",
      "autoEditLastRowFirstField",
      "inlineCreate",
      "inlineCreateRoute",
      "inlineCreateButton",
      "inlineCreateDefaults",
      "manualOrdering",
      "manualOrderField",
      "rowMenu",
      "rowMenuItems",
      "managed",
      "dataSource",
      "urlSync",
      "columnsParamMode",
      "paramMap",
      "responseMap",
      "options",
      "serverSide",
      "sortField",
      "sortOrder",
      "i18n"
    ],
    emits: [
      "on-cell-click",
      "on-menu-item-click",
      "on-row-menu-item-click",
      "change",
      "update:checkedRows"
    ]
  },
  requestProtocol: {
    defaults: {
      page: "page",
      rowsPerPage: "rowsPerPage",
      sortField: "sortField",
      sortOrder: "sortOrder",
      global: "global",
      filters: "filters",
      filterModes: "filterModes",
      filterTypes: "filterTypes",
      selectionFilter: "selectionFilter",
      selectedRowIds: "selectedRowIds",
      columns: "columns"
    }
  },
  responseProtocol: {
    defaults: {
      data: "data",
      total: "total",
      current: "current_page",
      last: "last_page"
    }
  }
}, nb = {
  phase0: {
    baselineParityTarget: !0,
    featureGroups: [
      "core-table-rendering",
      "sorting-and-filtering",
      "managed-mode-inertia-axios",
      "infinite-scroll",
      "column-config-and-resize",
      "inline-editing",
      "inline-create-delete",
      "row-menu-and-keyboard-navigation",
      "chart-config-and-rendering",
      "excel-config-and-export",
      "localstorage-persistence"
    ]
  }
};
var Xr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function As(d) {
  return d && d.__esModule && Object.prototype.hasOwnProperty.call(d, "default") ? d.default : d;
}
var zn, kl;
function zl() {
  if (kl) return zn;
  kl = 1;
  function d(C) {
    var l = typeof C;
    return C != null && (l == "object" || l == "function");
  }
  return zn = d, zn;
}
var Ln, Cl;
function Es() {
  if (Cl) return Ln;
  Cl = 1;
  var d = typeof Xr == "object" && Xr && Xr.Object === Object && Xr;
  return Ln = d, Ln;
}
var Dn, Sl;
function Ll() {
  if (Sl) return Dn;
  Sl = 1;
  var d = Es(), C = typeof self == "object" && self && self.Object === Object && self, l = d || C || Function("return this")();
  return Dn = l, Dn;
}
var Nn, _l;
function $s() {
  if (_l) return Nn;
  _l = 1;
  var d = Ll(), C = function() {
    return d.Date.now();
  };
  return Nn = C, Nn;
}
var Pn, Ml;
function Ts() {
  if (Ml) return Pn;
  Ml = 1;
  var d = /\s/;
  function C(l) {
    for (var v = l.length; v-- && d.test(l.charAt(v)); )
      ;
    return v;
  }
  return Pn = C, Pn;
}
var Bn, Fl;
function Vs() {
  if (Fl) return Bn;
  Fl = 1;
  var d = Ts(), C = /^\s+/;
  function l(v) {
    return v && v.slice(0, d(v) + 1).replace(C, "");
  }
  return Bn = l, Bn;
}
var Kn, Ol;
function Dl() {
  if (Ol) return Kn;
  Ol = 1;
  var d = Ll(), C = d.Symbol;
  return Kn = C, Kn;
}
var qn, Il;
function zs() {
  if (Il) return qn;
  Il = 1;
  var d = Dl(), C = Object.prototype, l = C.hasOwnProperty, v = C.toString, S = d ? d.toStringTag : void 0;
  function $(ee) {
    var J = l.call(ee, S), A = ee[S];
    try {
      ee[S] = void 0;
      var o = !0;
    } catch {
    }
    var E = v.call(ee);
    return o && (J ? ee[S] = A : delete ee[S]), E;
  }
  return qn = $, qn;
}
var Wn, Rl;
function Ls() {
  if (Rl) return Wn;
  Rl = 1;
  var d = Object.prototype, C = d.toString;
  function l(v) {
    return C.call(v);
  }
  return Wn = l, Wn;
}
var Hn, jl;
function Ds() {
  if (jl) return Hn;
  jl = 1;
  var d = Dl(), C = zs(), l = Ls(), v = "[object Null]", S = "[object Undefined]", $ = d ? d.toStringTag : void 0;
  function ee(J) {
    return J == null ? J === void 0 ? S : v : $ && $ in Object(J) ? C(J) : l(J);
  }
  return Hn = ee, Hn;
}
var Un, Al;
function Ns() {
  if (Al) return Un;
  Al = 1;
  function d(C) {
    return C != null && typeof C == "object";
  }
  return Un = d, Un;
}
var Gn, El;
function Ps() {
  if (El) return Gn;
  El = 1;
  var d = Ds(), C = Ns(), l = "[object Symbol]";
  function v(S) {
    return typeof S == "symbol" || C(S) && d(S) == l;
  }
  return Gn = v, Gn;
}
var Xn, $l;
function Bs() {
  if ($l) return Xn;
  $l = 1;
  var d = Vs(), C = zl(), l = Ps(), v = NaN, S = /^[-+]0x[0-9a-f]+$/i, $ = /^0b[01]+$/i, ee = /^0o[0-7]+$/i, J = parseInt;
  function A(o) {
    if (typeof o == "number")
      return o;
    if (l(o))
      return v;
    if (C(o)) {
      var E = typeof o.valueOf == "function" ? o.valueOf() : o;
      o = C(E) ? E + "" : E;
    }
    if (typeof o != "string")
      return o === 0 ? o : +o;
    o = d(o);
    var x = $.test(o);
    return x || ee.test(o) ? J(o.slice(2), x ? 2 : 8) : S.test(o) ? v : +o;
  }
  return Xn = A, Xn;
}
var Jn, Tl;
function Ks() {
  if (Tl) return Jn;
  Tl = 1;
  var d = zl(), C = $s(), l = Bs(), v = "Expected a function", S = Math.max, $ = Math.min;
  function ee(J, A, o) {
    var E, x, le, Te, ie, be, pe = 0, Y = !1, W = !1, Be = !0;
    if (typeof J != "function")
      throw new TypeError(v);
    A = l(A) || 0, d(o) && (Y = !!o.leading, W = "maxWait" in o, le = W ? S(l(o.maxWait) || 0, A) : le, Be = "trailing" in o ? !!o.trailing : Be);
    function Oe(D) {
      var ce = E, re = x;
      return E = x = void 0, pe = D, Te = J.apply(re, ce), Te;
    }
    function V(D) {
      return pe = D, ie = setTimeout(ve, A), Y ? Oe(D) : Te;
    }
    function Ye(D) {
      var ce = D - be, re = D - pe, oe = A - ce;
      return W ? $(oe, le - re) : oe;
    }
    function Ie(D) {
      var ce = D - be, re = D - pe;
      return be === void 0 || ce >= A || ce < 0 || W && re >= le;
    }
    function ve() {
      var D = C();
      if (Ie(D))
        return $e(D);
      ie = setTimeout(ve, Ye(D));
    }
    function $e(D) {
      return ie = void 0, Be && E ? Oe(D) : (E = x = void 0, Te);
    }
    function Ke() {
      ie !== void 0 && clearTimeout(ie), pe = 0, E = be = x = ie = void 0;
    }
    function te() {
      return ie === void 0 ? Te : $e(C());
    }
    function ge() {
      var D = C(), ce = Ie(D);
      if (E = arguments, x = this, be = D, ce) {
        if (ie === void 0)
          return V(be);
        if (W)
          return clearTimeout(ie), ie = setTimeout(ve, A), Oe(be);
      }
      return ie === void 0 && (ie = setTimeout(ve, A)), Te;
    }
    return ge.cancel = Ke, ge.flush = te, ge;
  }
  return Jn = ee, Jn;
}
var qs = Ks();
const Ws = /* @__PURE__ */ As(qs), Nl = (d, C) => {
  const l = d.__vccOpts || d;
  for (const [v, S] of C)
    l[v] = S;
  return l;
}, Hs = { class: "flex w-full flex-wrap items-center gap-1" }, Us = { class: "truncate" }, Gs = ["disabled", "onClick"], Xs = {
  key: 0,
  class: "inline-flex items-center rounded-full border border-slate-300 bg-slate-100 px-2 py-0.5 text-xs text-slate-600"
}, Js = ["name", "aria-label", "aria-invalid", "aria-expanded", "data-create-field", "disabled", "value"], Ys = ["name", "aria-label", "aria-invalid", "aria-expanded", "data-create-field", "disabled", "value"], Qs = ["disabled"], Zs = ["onClick"], eu = { class: "inline-flex items-center gap-2" }, tu = {
  key: 1,
  class: "px-2 py-1.5 text-xs text-slate-500"
}, ru = {
  __name: "RwAutocompleteInput",
  props: {
    modelValue: {
      type: [String, Number, Boolean, Object, Array],
      default: null
    },
    items: {
      type: Array,
      default: () => []
    },
    itemTitle: {
      type: [String, Function],
      default: "title"
    },
    itemValue: {
      type: [String, Function],
      default: "value"
    },
    searchFields: {
      type: Array,
      default: () => []
    },
    displayValue: {
      type: [String, Number, Array],
      default: null
    },
    allowCustom: {
      type: Boolean,
      default: !1
    },
    customTrim: {
      type: Boolean,
      default: !0
    },
    customMinLength: {
      type: Number,
      default: 0
    },
    name: {
      type: String,
      default: ""
    },
    ariaLabel: {
      type: String,
      default: ""
    },
    dataCreateField: {
      type: String,
      default: ""
    },
    invalid: {
      type: Boolean,
      default: !1
    },
    errorMessage: {
      type: String,
      default: ""
    },
    requiredMissing: {
      type: Boolean,
      default: !1
    },
    requiredHighlightColor: {
      type: String,
      default: "rgba(59, 130, 246, 0.1)"
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    multiple: {
      type: Boolean,
      default: !1
    },
    showCheckboxes: {
      type: Boolean,
      default: !1
    },
    selectionChips: {
      type: Boolean,
      default: !0
    },
    maxSelectionChips: {
      type: Number,
      default: 3
    },
    closeOnSelect: {
      type: Boolean,
      default: !0
    },
    messages: {
      type: Object,
      default: () => ({})
    }
  },
  emits: [
    "update:modelValue",
    "keydown",
    "blur",
    "focus",
    "resolve"
  ],
  setup(d, { expose: C, emit: l }) {
    const v = d, S = l, $ = m(null), ee = m(null), J = m(null), A = m(!1), o = m(!1), E = m(""), x = m(-1), le = m(!1), Te = m(224), ie = m(null), be = m(!1), pe = m(!1), Y = m({
      left: "0px",
      top: "0px",
      maxWidth: "280px",
      transform: "none"
    }), W = m({
      left: "0px",
      top: "0px",
      width: "0px",
      maxHeight: "224px",
      transform: "none"
    });
    function Be(f, h) {
      return !f || typeof f != "object" ? null : String(h || "").split(".").filter((M) => M !== "").reduce((M, I) => !M || typeof M != "object" || !Object.prototype.hasOwnProperty.call(M, I) ? null : M[I], f);
    }
    function Oe(f, h = "", M = {}) {
      const I = Be(v.messages, f), Q = typeof I == "string" ? I : h || f;
      return Object.entries(M).reduce(
        (Fe, [Ge, Ae]) => Fe.replaceAll(`:${Ge}`, String(Ae ?? "")),
        Q
      );
    }
    function V(f) {
      return typeof v.itemValue == "function" ? v.itemValue(f) : f !== null && typeof f == "object" ? f?.[v.itemValue] : f;
    }
    function Ye(f) {
      if (typeof v.itemTitle == "function") {
        const h = v.itemTitle(f);
        return h == null ? "" : String(h);
      }
      if (f !== null && typeof f == "object") {
        const h = f?.[v.itemTitle];
        return h == null ? "" : String(h);
      }
      return f == null ? "" : String(f);
    }
    function Ie(f) {
      return String(f ?? "").toLowerCase();
    }
    function ve(f) {
      return Array.isArray(f) ? [...f] : f == null || f === "" ? [] : [f];
    }
    function $e(f, h) {
      return f.some((M) => String(M) === String(h));
    }
    function Ke(f, h) {
      return f.filter((M) => String(M) !== String(h));
    }
    const te = k(() => v.multiple ? ve(v.modelValue) : []), ge = k(() => v.multiple ? null : v.items.find(
      (f) => String(V(f)) === String(v.modelValue)
    ) ?? null), D = k(() => v.multiple ? v.items.filter(
      (f) => $e(te.value, V(f))
    ) : []), ce = k(() => ge.value ? Ye(ge.value) : v.allowCustom && typeof v.modelValue == "string" && v.modelValue !== null && v.modelValue !== void 0 ? String(v.modelValue) : ""), re = k(() => v.multiple ? "" : v.displayValue !== null && v.displayValue !== void 0 ? String(v.displayValue) : ce.value), oe = k(() => {
      const f = Ie(E.value).trim();
      return f ? v.items.filter((h) => {
        const M = [Ye(h)];
        return h && typeof h == "object" && v.searchFields.forEach((I) => {
          M.push(h?.[I]);
        }), M.some(
          (I) => Ie(I).includes(f)
        );
      }) : v.items;
    }), Qe = k(() => v.multiple || o.value ? E.value : re.value), Ct = k(() => {
      const f = Number(v.maxSelectionChips || 0);
      return !Number.isFinite(f) || f <= 0 ? 3 : Math.max(1, Math.floor(f));
    }), ot = k(() => !v.multiple || v.selectionChips !== !0 ? [] : D.value.slice(0, Ct.value)), Yt = k(() => !v.multiple || v.selectionChips !== !0 ? 0 : Math.max(
      0,
      D.value.length - Ct.value
    )), qe = k(() => v.invalid ? {
      borderColor: "rgb(239 68 68)",
      boxShadow: "0 0 0 1px rgba(239, 68, 68, 0.2)"
    } : v.requiredMissing ? {
      backgroundColor: v.requiredHighlightColor
    } : null), _e = k(() => v.invalid ? "h-8 w-full rounded border bg-white px-2 pr-7 text-sm outline-none focus:border-red-500 focus:outline-none focus:ring-0 focus-visible:border-red-500 focus-visible:outline-none focus-visible:ring-0" : "h-8 w-full rounded border border-slate-300 bg-white px-2 pr-7 text-sm outline-none focus:border-slate-300 focus:outline-none focus:ring-0 focus-visible:border-slate-300 focus-visible:outline-none focus-visible:ring-0"), Ze = k(() => v.invalid ? "min-h-8 w-full rounded border bg-white px-2 py-1 pr-7 text-sm" : "min-h-8 w-full rounded border border-slate-300 bg-white px-2 py-1 pr-7 text-sm"), Me = k(() => "basis-full w-full min-w-0 flex-none appearance-none border-0 bg-transparent p-0 text-sm leading-6 text-slate-700 shadow-none outline-none ring-0 focus:border-0 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:text-slate-400 caret-slate-500"), St = k(() => ({
      border: "0",
      outline: "none",
      boxShadow: "none",
      background: "transparent"
    })), et = k(() => v.invalid === !0 && typeof v.errorMessage == "string" && v.errorMessage.trim() !== "");
    H(oe, (f) => {
      if (!A.value) {
        x.value = -1;
        return;
      }
      if (f.length === 0) {
        x.value = -1;
        return;
      }
      if (v.allowCustom && !v.multiple && ne(E.value) !== "") {
        (x.value < 0 || x.value >= f.length) && (x.value = -1);
        return;
      }
      (x.value < 0 || x.value >= f.length) && (x.value = 0);
    }), H(
      () => v.modelValue,
      () => {
        o.value || (E.value = "");
      }
    );
    function Ve() {
      v.disabled || (A.value = !0, oe.value.length > 0 && x.value < 0 && !(v.allowCustom && !v.multiple && ne(E.value) !== "") && (x.value = 0), ae(() => {
        requestAnimationFrame(() => {
          P();
        });
      }));
    }
    function z() {
      A.value = !1, x.value = -1;
    }
    function P() {
      if (!A.value || typeof window > "u")
        return;
      const f = ee.value?.getBoundingClientRect?.();
      if (!f)
        return;
      const h = window.innerHeight || document.documentElement?.clientHeight || 0, M = window.innerWidth || document.documentElement?.clientWidth || 0, I = 8, Q = Math.max(0, h - f.bottom - I), Fe = Math.max(0, f.top - I), Ge = Math.min(260, J.value?.scrollHeight ?? 224), Ae = 120, Ft = Math.min(180, Ge), Ot = f.bottom + Ge > h - I, he = Math.max(
        Ae,
        Math.min(Ge, 220)
      ), Yr = Fe >= he, tt = Q >= he, xe = f.top > h * 0.6 && Fe > Q;
      le.value = !tt && Fe > 0 || Ot && Fe > 0 || xe && Yr || Q < Ft && Fe > Q || Q <= 0 && Fe > 0;
      const st = le.value ? Fe : Q;
      Te.value = Math.max(
        Ae,
        Math.min(Math.max(st, Ae), Ge)
      );
      const It = Math.max(220, Math.round(f.width)), Xe = Math.max(8, Math.min(f.left, M - It - 8)), we = le.value ? Math.max(8, f.top - I) : Math.min(h - 8, f.bottom + I);
      W.value = {
        left: `${Math.round(Xe)}px`,
        top: `${Math.round(we)}px`,
        width: `${Math.round(It)}px`,
        maxHeight: `${Math.round(Te.value)}px`,
        transform: le.value ? "translateY(-100%)" : "none"
      };
    }
    function B() {
      P(), be.value && se();
    }
    function se() {
      if (!be.value || typeof window > "u")
        return;
      const f = $.value?.getBoundingClientRect?.();
      if (!f)
        return;
      const h = window.innerHeight || document.documentElement?.clientHeight || 0, M = window.innerWidth || document.documentElement?.clientWidth || 0, I = 8, Q = Math.max(
        36,
        Number(ie.value?.offsetHeight || 44)
      ), Fe = Math.max(
        180,
        Math.min(320, Number(ie.value?.offsetWidth || 240))
      ), Ge = Math.max(0, h - f.bottom - I), Ae = Math.max(0, f.top - I);
      pe.value = Ge < Q + 10 && Ae > 0 || f.top > h * 0.6 && Ae > Ge;
      const Ft = Math.max(
        8,
        Math.min(
          f.left + f.width / 2 - Fe / 2,
          M - Fe - 8
        )
      ), Ot = pe.value ? Math.max(8, f.top - I) : Math.min(h - 8, f.bottom + I);
      Y.value = {
        left: `${Math.round(Ft)}px`,
        top: `${Math.round(Ot)}px`,
        maxWidth: `${Math.round(Fe)}px`,
        transform: pe.value ? "translateY(-100%)" : "none"
      };
    }
    function ye() {
      et.value && (be.value = !0, ae(() => {
        requestAnimationFrame(() => {
          se();
        });
      }));
    }
    function Re() {
      be.value = !1;
    }
    function wr() {
      ye();
    }
    function Lt() {
      Re();
    }
    function _t(f) {
      if (v.multiple) {
        Dt(f);
        return;
      }
      const h = V(f), M = Ye(f);
      S("update:modelValue", h), S("resolve", {
        kind: "item",
        value: h,
        label: M,
        item: f
      }), E.value = M, z();
    }
    function We(f) {
      return v.multiple ? $e(te.value, V(f)) : !1;
    }
    function He(f, h = null) {
      const M = v.items.filter(
        (I) => $e(f, V(I))
      );
      S("update:modelValue", f), S("resolve", {
        kind: "multiple",
        values: f,
        items: M,
        item: h
      });
    }
    function Dt(f) {
      const h = V(f), M = ve(v.modelValue), Q = $e(M, h) ? Ke(M, h) : [...M, h];
      He(Q, f), v.closeOnSelect ? z() : ae(() => {
        requestAnimationFrame(() => {
          P();
        });
      });
    }
    function G(f) {
      if (!v.multiple)
        return;
      const h = ve(v.modelValue), M = Ke(h, f);
      He(M);
    }
    function ne(f) {
      const h = f == null ? "" : String(f);
      return v.customTrim ? h.trim() : h;
    }
    function je(f) {
      if (!v.allowCustom || v.multiple)
        return !1;
      const h = ne(f);
      return h.length < Math.max(0, Number(v.customMinLength || 0)) || h === "" ? !1 : (S("update:modelValue", h), S("resolve", {
        kind: "custom",
        value: h,
        label: h,
        input: h
      }), E.value = h, z(), !0);
    }
    function ue(f) {
      const h = oe.value;
      if (h.length === 0) {
        x.value = -1;
        return;
      }
      if (x.value < 0) {
        x.value = f > 0 ? 0 : h.length - 1;
        return;
      }
      const M = x.value + f;
      if (M < 0) {
        x.value = h.length - 1;
        return;
      }
      if (M >= h.length) {
        x.value = 0;
        return;
      }
      x.value = M;
    }
    function bt(f) {
      v.disabled || (o.value = !0, E.value = v.multiple ? "" : re.value, S("focus", f), ye(), ae(() => {
        typeof $.value?.select == "function" && $.value.select();
      }));
    }
    function Mt(f) {
      const h = ne(E.value), M = ne(ce.value);
      !v.multiple && v.allowCustom && h !== "" && h !== M && je(E.value), o.value = !1, E.value = "", z(), S("blur", f), ae(() => {
        requestAnimationFrame(() => {
          if (et.value) {
            ye();
            return;
          }
          Re();
        });
      });
    }
    function fe(f) {
      E.value = f.target.value, v.allowCustom && !v.multiple && (x.value = -1), Ve(), ae(() => {
        requestAnimationFrame(() => {
          P();
        });
      });
    }
    function K(f) {
      if (v.disabled) {
        S("keydown", f);
        return;
      }
      if (f.altKey && f.key === "ArrowDown") {
        f.preventDefault(), Ve(), S("keydown", f);
        return;
      }
      if (f.altKey && f.key === "ArrowUp") {
        f.preventDefault(), A.value && z(), S("keydown", f);
        return;
      }
      if (f.key === "ArrowDown") {
        A.value && (f.preventDefault(), ue(1)), S("keydown", f);
        return;
      }
      if (f.key === "ArrowUp") {
        A.value && (f.preventDefault(), ue(-1)), S("keydown", f);
        return;
      }
      if (f.key === "Enter") {
        if (A.value) {
          if (f.preventDefault(), v.allowCustom && !v.multiple && E.value !== "" && x.value < 0) {
            je(E.value), S("keydown", f);
            return;
          }
          const h = oe.value[x.value] ?? oe.value[0] ?? null;
          h && _t(h);
        }
        S("keydown", f);
        return;
      }
      if (f.key === "Escape") {
        if (A.value) {
          f.preventDefault(), E.value = "", z(), S("keydown", f);
          return;
        }
        S("keydown", f);
        return;
      }
      if (f.key === "Tab") {
        if (A.value) {
          if (v.allowCustom && !v.multiple && E.value !== "" && x.value < 0) {
            je(E.value), S("keydown", f);
            return;
          }
          const h = oe.value[x.value] ?? null;
          h && _t(h);
        }
        S("keydown", f);
        return;
      }
      S("keydown", f);
    }
    function Nt() {
      if (A.value) {
        z();
        return;
      }
      !o.value && typeof $.value?.focus == "function" && $.value.focus(), Ve();
    }
    H(A, (f) => {
      if (!(typeof window > "u")) {
        if (!f) {
          window.removeEventListener("resize", B), window.removeEventListener("scroll", B, !0);
          return;
        }
        window.addEventListener("resize", B), window.addEventListener("scroll", B, !0), ae(() => {
          requestAnimationFrame(() => {
            P();
          });
        });
      }
    }), H(et, (f) => {
      if (!f) {
        Re();
        return;
      }
      ye();
    }), H(
      () => v.invalid,
      () => {
        if (et.value) {
          ye();
          return;
        }
        Re();
      }
    ), H(be, (f) => {
      if (!(typeof window > "u")) {
        if (!f) {
          A.value || (window.removeEventListener("resize", B), window.removeEventListener("scroll", B, !0));
          return;
        }
        window.addEventListener("resize", B), window.addEventListener("scroll", B, !0), ae(() => {
          requestAnimationFrame(() => {
            se();
          });
        });
      }
    }), Vl(() => {
      typeof window > "u" || (window.removeEventListener("resize", B), window.removeEventListener("scroll", B, !0));
    });
    function F() {
      $.value?.focus?.();
    }
    function Ue() {
      $.value?.select?.();
    }
    function me(f) {
      $.value?.scrollIntoView?.(f);
    }
    return C({
      focus: F,
      select: Ue,
      scrollIntoView: me
    }), (f, h) => (c(), b("div", {
      ref_key: "rootRef",
      ref: ee,
      class: j(["relative min-w-0", A.value ? "z-[220]" : ""]),
      onMouseenter: wr,
      onMouseleave: Lt
    }, [
      d.multiple ? (c(), b("div", {
        key: 0,
        class: j(Ze.value),
        style: N(qe.value),
        onClick: F
      }, [
        s("div", Hs, [
          d.selectionChips && D.value.length > 0 ? (c(), b(T, { key: 0 }, [
            (c(!0), b(T, null, X(ot.value, (M, I) => (c(), b("span", {
              key: `chip-${V(M)}-${I}`,
              class: "inline-flex max-w-full items-center gap-1 rounded-full border border-slate-300 bg-slate-100 px-2 py-0.5 text-xs text-slate-700"
            }, [
              s("span", Us, g(Ye(M)), 1),
              s("button", {
                type: "button",
                class: "inline-flex h-4 w-4 items-center justify-center rounded text-slate-500 hover:bg-slate-200",
                disabled: d.disabled,
                onMousedown: h[0] || (h[0] = Ne(() => {
                }, ["prevent"])),
                onClick: (Q) => G(V(M))
              }, [...h[4] || (h[4] = [
                s("i", { class: "mdi mdi-close text-[11px] leading-none" }, null, -1)
              ])], 40, Gs)
            ]))), 128)),
            Yt.value > 0 ? (c(), b("span", Xs, " +" + g(Yt.value) + " " + g(Oe("autocomplete.more", "meer")), 1)) : _("", !0)
          ], 64)) : _("", !0),
          s("input", {
            ref_key: "inputRef",
            ref: $,
            name: d.name,
            "aria-label": d.ariaLabel,
            "aria-invalid": d.invalid ? "true" : "false",
            "aria-expanded": A.value ? "true" : "false",
            "data-rw-autocomplete-input": "true",
            "data-rw-autocomplete-multiple-input": "true",
            "data-create-field": d.dataCreateField || null,
            disabled: d.disabled,
            value: Qe.value,
            type: "text",
            autocomplete: "off",
            class: j(Me.value),
            style: N(St.value),
            onFocus: bt,
            onBlur: Mt,
            onInput: fe,
            onKeydown: K
          }, null, 46, Js)
        ])
      ], 6)) : (c(), b("input", {
        key: 1,
        ref_key: "inputRef",
        ref: $,
        name: d.name,
        "aria-label": d.ariaLabel,
        "aria-invalid": d.invalid ? "true" : "false",
        "aria-expanded": A.value ? "true" : "false",
        "data-rw-autocomplete-input": "true",
        "data-create-field": d.dataCreateField || null,
        disabled: d.disabled,
        value: Qe.value,
        type: "text",
        autocomplete: "off",
        class: j(_e.value),
        style: N(qe.value),
        onFocus: bt,
        onBlur: Mt,
        onInput: fe,
        onKeydown: K
      }, null, 46, Ys)),
      s("button", {
        type: "button",
        class: "absolute right-0 top-1/2 inline-flex h-8 w-7 -translate-y-1/2 items-center justify-center text-slate-500",
        disabled: d.disabled,
        tabindex: "-1",
        onMousedown: h[1] || (h[1] = Ne(() => {
        }, ["prevent"])),
        onClick: Nt
      }, [
        s("i", {
          class: j(["mdi text-base leading-none", A.value ? "mdi-menu-up" : "mdi-menu-down"])
        }, null, 2)
      ], 40, Qs),
      (c(), hr(wl, { to: "body" }, [
        A.value ? (c(), b("div", {
          key: 0,
          ref_key: "menuRef",
          ref: J,
          class: "fixed z-[2147483000] overflow-auto rounded-md border border-slate-200 bg-white p-1 shadow-lg",
          style: N(W.value),
          onMousedown: h[3] || (h[3] = Ne(() => {
          }, ["prevent"]))
        }, [
          (c(!0), b(T, null, X(oe.value, (M, I) => (c(), b("button", {
            key: `${V(M)}-${I}`,
            type: "button",
            class: j([
              "w-full rounded px-2 py-1.5 text-left text-sm text-slate-700",
              I === x.value ? "bg-slate-100" : "hover:bg-slate-50"
            ]),
            onClick: (Q) => _t(M)
          }, [
            s("span", eu, [
              d.multiple && d.showCheckboxes ? (c(), b("i", {
                key: 0,
                class: j([
                  "mdi text-base leading-none text-slate-600",
                  We(M) ? "mdi-checkbox-marked" : "mdi-checkbox-blank-outline"
                ])
              }, null, 2)) : _("", !0),
              s("span", null, g(Ye(M)), 1)
            ])
          ], 10, Zs))), 128)),
          d.allowCustom && !d.multiple && ne(E.value) !== "" ? (c(), b("button", {
            key: 0,
            type: "button",
            class: "w-full rounded border border-dashed border-slate-200 px-2 py-1.5 text-left text-sm text-slate-700 hover:bg-slate-50",
            onClick: h[2] || (h[2] = (M) => je(E.value))
          }, g(Oe(
            "autocomplete.use_custom_value",
            "Gebruik vrije waarde:"
          )) + ' "' + g(ne(E.value)) + '" ', 1)) : _("", !0),
          oe.value.length === 0 ? (c(), b("p", tu, g(Oe("autocomplete.no_results", "Geen resultaten")), 1)) : _("", !0)
        ], 36)) : _("", !0)
      ])),
      (c(), hr(wl, { to: "body" }, [
        be.value && et.value ? (c(), b("div", {
          key: 0,
          ref_key: "errorTooltipRef",
          ref: ie,
          class: "rw-error-tooltip fixed z-[2147483500]",
          style: N(Y.value),
          role: "alert"
        }, [
          U(g(d.errorMessage) + " ", 1),
          s("span", {
            class: j([
              "rw-error-tooltip-arrow",
              pe.value ? "rw-error-tooltip-arrow-top" : "rw-error-tooltip-arrow-bottom"
            ])
          }, null, 2)
        ], 4)) : _("", !0)
      ]))
    ], 34));
  }
}, Yn = /* @__PURE__ */ Nl(ru, [["__scopeId", "data-v-deb4fd80"]]);
function nu(d) {
  return d == null ? !0 : typeof d == "string" ? d.trim() === "" : Array.isArray(d) ? d.length === 0 : !1;
}
function Jr(d) {
  if (typeof d == "number")
    return Number.isFinite(d) ? d : null;
  if (typeof d == "string") {
    const C = d.trim();
    if (C === "")
      return null;
    const l = Number(C);
    return Number.isFinite(l) ? l : null;
  }
  return null;
}
function au(d) {
  const C = Jr(d);
  return C === null ? null : Number.isInteger(C) ? C : null;
}
function lu(d) {
  return typeof d == "string" ? d.split("|").map((C) => C.trim()).filter((C) => C !== "") : [];
}
function Pl(d) {
  return d ? Array.isArray(d) ? d.flatMap((C) => Pl(C)) : typeof d == "string" ? lu(d) : [] : [];
}
function Bl(d) {
  const [C, ...l] = String(d).split(":");
  return {
    name: String(C || "").trim().toLowerCase(),
    parameters: l.join(":").split(",").map((v) => v.trim())
  };
}
function Pe(d, C, l = []) {
  const v = C || "Dit veld";
  return d === "required" ? `${v} is verplicht.` : d === "string" ? `${v} moet tekst zijn.` : d === "numeric" ? `${v} moet een getal zijn.` : d === "integer" ? `${v} moet een geheel getal zijn.` : d === "boolean" ? `${v} moet een geldige ja/nee waarde zijn.` : d === "array" ? `${v} moet een lijst zijn.` : d === "min" ? `${v} moet minimaal ${l[0] ?? 0} zijn.` : d === "max" ? `${v} mag maximaal ${l[0] ?? 0} zijn.` : d === "in" ? `Kies een geldige waarde voor ${v.toLowerCase()}.` : `${v} is ongeldig.`;
}
function xr(d, C) {
  return d.some((l) => Bl(l).name === C);
}
function iu(d, C, l, v, S) {
  const $ = Jr(l[0]);
  if ($ === null)
    return null;
  const ee = xr(v, "numeric") || xr(v, "integer");
  if (xr(v, "array")) {
    if (!Array.isArray(C))
      return null;
    const o = C.length;
    return d === "min" && o < $ ? Pe(d, S, [$]) : d === "max" && o > $ ? Pe(d, S, [$]) : null;
  }
  if (ee) {
    const o = Jr(C);
    return o === null ? null : d === "min" && o < $ ? Pe(d, S, [$]) : d === "max" && o > $ ? Pe(d, S, [$]) : null;
  }
  const A = String(C ?? "").length;
  return d === "min" && A < $ ? Pe(d, S, [$]) : d === "max" && A > $ ? Pe(d, S, [$]) : null;
}
function ou(d, C, l = {}) {
  const v = Pl(C);
  if (v.length === 0)
    return null;
  const S = l.fieldLabel || "Dit veld", $ = nu(d), ee = xr(v, "required"), J = xr(v, "nullable");
  if ($) {
    if (ee)
      return Pe("required", S);
    if (J || !ee)
      return null;
  }
  for (const A of v) {
    const { name: o, parameters: E } = Bl(A);
    if (!(o === "" || o === "required" || o === "nullable")) {
      if (o === "string" && typeof d != "string" || o === "numeric" && Jr(d) === null || o === "integer" && au(d) === null)
        return Pe(o, S);
      if (o === "boolean") {
        const x = String(d).trim().toLowerCase();
        if (!(typeof d == "boolean" || x === "1" || x === "0" || x === "true" || x === "false"))
          return Pe(o, S);
      }
      if (o === "array" && !Array.isArray(d))
        return Pe(o, S);
      if (o === "min" || o === "max") {
        const x = iu(
          o,
          d,
          E,
          v,
          S
        );
        if (x)
          return x;
      }
      if (o === "in" && !E.map((le) => String(le)).includes(String(d)))
        return Pe(o, S);
    }
  }
  return null;
}
const su = ["for"], uu = ["id", "name", "aria-label", "placeholder"], du = ["aria-label"], cu = { class: "ml-auto flex items-center gap-2" }, fu = {
  key: 0,
  class: "flex items-center gap-2"
}, bu = ["id", "name", "aria-label"], pu = ["value"], vu = {
  key: 2,
  class: "relative"
}, gu = ["title"], yu = { class: "flex min-h-11 items-center justify-between bg-sky-700 px-4 text-sm font-semibold text-white" }, mu = ["aria-label"], hu = { class: "flex items-center gap-2 border-b border-slate-200 bg-white px-3 pb-2 pt-2" }, xu = ["disabled"], wu = ["disabled"], ku = ["disabled"], Cu = ["disabled"], Su = {
  key: 0,
  class: "border-b border-emerald-200 bg-emerald-50 px-4 py-2 text-sm text-emerald-800"
}, _u = {
  key: 1,
  class: "border-b border-amber-200 bg-amber-50 px-4 py-2 text-sm text-amber-800"
}, Mu = {
  key: 2,
  class: "min-h-0 flex-1 overflow-auto",
  style: { maxHeight: "calc(100vh - 240px)" }
}, Fu = { class: "w-full border-collapse text-sm" }, Ou = { class: "bg-white text-slate-600" }, Iu = { class: "w-16 border-b border-r border-slate-200 px-3 py-2 text-left font-medium" }, Ru = { class: "border-b border-r border-slate-200 px-3 py-2 text-left font-medium" }, ju = { class: "w-28 border-b border-slate-200 px-3 py-2 text-right font-medium" }, Au = { key: 0 }, Eu = {
  colspan: "3",
  class: "px-3 py-8 text-center text-slate-500"
}, $u = { class: "border-r border-slate-100 px-3 py-2" }, Tu = ["disabled", "onClick"], Vu = { class: "border-r border-slate-100 px-3 py-2" }, zu = { class: "px-3 py-2 text-right" }, Lu = ["disabled", "title", "onClick"], Du = {
  key: 3,
  class: "min-h-0 flex-1 overflow-auto p-4",
  style: { maxHeight: "calc(100vh - 240px)" }
}, Nu = { class: "space-y-4" }, Pu = {
  key: 0,
  class: "space-y-4"
}, Bu = ["for"], Ku = ["id", "name", "placeholder"], qu = { class: "grid gap-3 md:grid-cols-3" }, Wu = ["for"], Hu = ["id", "name"], Uu = ["value"], Gu = ["for"], Xu = ["id", "name"], Ju = ["value"], Yu = ["for"], Qu = ["id", "name"], Zu = ["value"], ed = { class: "grid gap-3 md:grid-cols-2" }, td = ["for"], rd = ["id", "name"], nd = { value: "" }, ad = ["value"], ld = ["for"], id = ["id", "name"], od = ["value"], sd = { class: "grid gap-3 md:grid-cols-3" }, ud = ["for"], dd = ["id", "name", "disabled"], cd = { value: "" }, fd = ["value"], bd = ["for"], pd = ["id", "name"], vd = { value: "" }, gd = ["value"], yd = ["for"], md = ["id", "name"], hd = { class: "grid gap-2 md:grid-cols-2" }, xd = { class: "inline-flex items-center gap-2 text-sm text-slate-700" }, wd = ["name"], kd = { class: "inline-flex items-center gap-2 text-sm text-slate-700" }, Cd = ["name"], Sd = { class: "inline-flex items-center gap-2 text-sm text-slate-700" }, _d = ["name"], Md = {
  key: 0,
  class: "rounded border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-800"
}, Fd = {
  key: 1,
  class: "max-w-xs"
}, Od = ["for"], Id = ["id", "name"], Rd = ["value"], jd = {
  key: 2,
  class: "rounded border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-800"
}, Ad = {
  key: 3,
  class: "rounded border border-slate-200 bg-slate-50 px-3 py-4 text-sm text-slate-600"
}, Ed = {
  key: 4,
  class: "rounded border border-slate-200 bg-slate-50 px-3 py-4 text-sm text-slate-600"
}, $d = {
  key: 5,
  class: "rounded border border-slate-200 bg-white p-2"
}, Td = {
  key: 4,
  class: "flex items-center border-t border-slate-200 bg-white px-3 py-2"
}, Vd = ["disabled"], zd = {
  key: 3,
  class: "relative"
}, Ld = ["title"], Dd = { class: "flex min-h-11 items-center justify-between bg-emerald-700 px-4 text-sm font-semibold text-white" }, Nd = ["aria-label"], Pd = { class: "flex items-center gap-2 border-b border-slate-200 bg-white px-3 pb-2 pt-2" }, Bd = ["disabled"], Kd = ["disabled"], qd = {
  key: 0,
  class: "border-b border-emerald-200 bg-emerald-50 px-4 py-2 text-sm text-emerald-800"
}, Wd = {
  key: 1,
  class: "border-b border-amber-200 bg-amber-50 px-4 py-2 text-sm text-amber-800"
}, Hd = {
  key: 2,
  class: "max-h-[calc(100vh-220px)] min-h-0 flex-1 overflow-auto"
}, Ud = { class: "w-full border-collapse text-sm" }, Gd = { class: "bg-white text-slate-600" }, Xd = { class: "w-16 border-b border-r border-slate-200 px-3 py-2 text-left font-medium" }, Jd = { class: "border-b border-r border-slate-200 px-3 py-2 text-left font-medium" }, Yd = { class: "w-28 border-b border-slate-200 px-3 py-2 text-right font-medium" }, Qd = { key: 0 }, Zd = {
  colspan: "3",
  class: "px-3 py-8 text-center text-slate-500"
}, ec = { class: "border-r border-slate-100 px-3 py-2" }, tc = ["disabled", "onClick"], rc = { class: "border-r border-slate-100 px-3 py-2" }, nc = { class: "px-3 py-2 text-right" }, ac = ["disabled", "title", "onClick"], lc = {
  key: 3,
  class: "max-h-[calc(100vh-220px)] min-h-0 flex-1 overflow-auto p-4"
}, ic = { class: "space-y-4" }, oc = ["for"], sc = ["id", "name", "placeholder"], uc = { class: "mb-2 text-sm font-medium text-slate-700" }, dc = { class: "max-h-[420px] overflow-y-auto rounded border border-slate-200" }, cc = ["onDragover", "onDrop"], fc = ["aria-label", "onDragstart"], bc = ["name", "aria-label", "onUpdate:modelValue"], pc = { class: "min-w-0 flex-1 truncate text-sm" }, vc = { class: "flex items-center gap-1" }, gc = ["disabled", "onClick"], yc = ["disabled", "onClick"], mc = {
  key: 4,
  class: "flex items-center border-t border-slate-200 bg-white px-3 py-2"
}, hc = ["disabled"], xc = {
  key: 4,
  class: "relative"
}, wc = ["onClick"], kc = { class: "relative" }, Cc = { class: "border-b border-slate-100 px-2 pb-2 pt-2" }, Sc = { class: "min-h-0 flex-1 space-y-2 overflow-y-auto pr-1" }, _c = {
  key: 0,
  class: "mb-3 mt-2 space-y-3 rounded border border-slate-200 bg-slate-50 p-3"
}, Mc = { class: "flex cursor-pointer items-center gap-2 text-xs text-slate-700" }, Fc = ["name", "checked"], Oc = { class: "flex cursor-pointer items-center gap-2 text-xs text-slate-700" }, Ic = ["name", "checked"], Rc = { class: "flex cursor-pointer items-center gap-2 text-xs text-slate-700" }, jc = ["name", "checked", "disabled"], Ac = { class: "flex cursor-pointer items-center gap-2 text-xs text-slate-700" }, Ec = ["name", "checked"], $c = { class: "space-y-1" }, Tc = ["for"], Vc = ["id", "name", "aria-label", "value"], zc = { class: "space-y-1 pb-1 pt-1" }, Lc = ["onDragover", "onDrop"], Dc = ["aria-label", "onDragstart"], Nc = ["name", "aria-label", "checked", "onChange"], Pc = { class: "min-w-0 flex-1 truncate text-sm text-slate-700" }, Bc = { class: "flex items-center gap-1" }, Kc = ["disabled", "onClick"], qc = ["disabled", "onClick"], Wc = ["name", "aria-label", "checked"], Hc = { class: "relative flex w-full min-w-0 items-center gap-0.5 pr-1" }, Uc = ["title", "onClick"], Gc = { class: "truncate" }, Xc = { class: "ml-auto inline-flex shrink-0 items-center gap-0" }, Jc = ["aria-label", "onClick"], Yc = ["aria-label", "onClick"], Qc = { class: "flex items-center gap-2 border-b border-slate-200 bg-white px-2 pb-2 pt-2" }, Zc = ["onClick"], ef = { class: "grid gap-2 p-3" }, tf = ["name", "aria-label", "value", "onChange"], rf = ["value"], nf = { class: "text-xs text-slate-500" }, af = ["name", "aria-label", "value", "onInput"], lf = { class: "text-xs text-slate-500" }, of = ["name", "aria-label", "value", "onInput"], sf = { class: "text-xs text-slate-500" }, uf = ["name", "aria-label", "value", "onChange"], df = { value: "" }, cf = { value: "true" }, ff = { value: "false" }, bf = { class: "text-xs text-slate-500" }, pf = ["name", "aria-label", "type", "value", "onInput"], vf = ["aria-label", "onMousedown"], gf = { key: 0 }, yf = ["colspan"], mf = { key: 1 }, hf = ["colspan"], xf = { class: "inline-flex items-center justify-center gap-2" }, wf = {
  key: 0,
  class: "border-t border-blue-200 bg-blue-50/40"
}, kf = ["aria-label"], Cf = { class: "min-w-0 flex-1" }, Sf = ["data-create-field", "name", "aria-label", "title", "checked", "onChange", "onBlur"], _f = ["data-create-field", "type", "name", "aria-label", "value", "aria-invalid", "title", "onInput", "onBlur"], Mf = {
  key: 1,
  class: "text-xs text-slate-400"
}, Ff = ["onClick", "onMouseover", "onMouseleave"], Of = ["name", "aria-label", "checked", "onChange"], If = ["onClick"], Rf = {
  key: 0,
  class: "absolute left-2 top-1/2 z-10 -translate-y-1/2"
}, jf = ["onClick"], Af = { class: "flex items-center justify-start border-b border-slate-200 bg-white px-2 pb-2 pt-2" }, Ef = { class: "p-1" }, $f = ["disabled", "onClick"], Tf = ["name", "aria-label", "title", "checked", "onChange", "onBlur"], Vf = ["type", "name", "aria-label", "value", "aria-invalid", "title", "onInput", "onBlur"], zf = { class: "truncate" }, Lf = {
  key: 2,
  class: "inline-flex max-w-full flex-wrap items-center gap-1"
}, Df = { class: "truncate" }, Nf = {
  key: 0,
  class: "inline-flex items-center rounded-full border border-slate-300 bg-slate-100 px-2 py-0.5 text-xs font-medium leading-5 text-slate-600"
}, Pf = {
  key: 2,
  class: "border-t border-blue-200 bg-blue-50/40"
}, Bf = ["aria-label"], Kf = { class: "min-w-0 flex-1" }, qf = ["data-create-field", "name", "aria-label", "title", "checked", "onChange", "onBlur"], Wf = ["data-create-field", "type", "name", "aria-label", "value", "aria-invalid", "title", "onInput", "onBlur"], Hf = {
  key: 1,
  class: "text-xs text-slate-400"
}, Uf = { class: "flex flex-wrap items-center justify-between gap-2 border-x border-b border-slate-200 bg-white px-3 py-2" }, Gf = {
  key: 0,
  class: "flex items-center"
}, Xf = ["disabled", "onClick"], Jf = { class: "ml-auto flex items-center gap-2" }, Yf = {
  key: 0,
  class: "text-xs text-slate-500"
}, Qf = 80, mr = 40, Zf = {
  __name: "RwTable",
  props: {
    data: { type: Object, required: !0 },
    columns: { type: Array, required: !0 },
    tableId: { type: String, default: null },
    idKey: { type: String, default: "id" },
    initialHeight: { type: String, default: "520px" },
    horizontalScroll: { type: Boolean, default: !0 },
    checkboxColumn: { type: Boolean, default: !1 },
    checkedRows: { type: Array, default: () => [] },
    globalSearch: { type: Boolean, default: !0 },
    searchFieldWidth: { type: [String, Number], default: null },
    searchFieldMinWidth: { type: [String, Number], default: null },
    showRecordCount: { type: Boolean, default: !0 },
    rowQuantitySelect: { type: Boolean, default: !0 },
    rowOptions: { type: Array, default: () => [10, 25, 50, 100] },
    menuItems: { type: Array, default: () => [] },
    inlineUpdateRoute: { type: [String, Function], default: null },
    inlineDeleteRoute: { type: [String, Function], default: null },
    beforeInlineDelete: { type: Function, default: null },
    charts: { type: String, default: "false" },
    excel: { type: String, default: "false" },
    cellStyle: { type: Function, default: null },
    cellClass: { type: Function, default: null },
    startOnMount: { type: Boolean, default: !0 },
    initialData: { type: Object, default: null },
    autoEditLastRowFirstField: { type: Boolean, default: !1 },
    inlineCreate: { type: Boolean, default: !1 },
    inlineCreateRoute: { type: [String, Function], default: null },
    inlineCreateButton: { type: Boolean, default: !1 },
    inlineCreateDefaults: { type: [Object, Function], default: () => ({}) },
    manualOrdering: { type: Boolean, default: !1 },
    manualOrderField: { type: String, default: "index" },
    rowMenu: { type: Boolean, default: !1 },
    rowMenuItems: { type: [Array, Function], default: null },
    managed: { type: Boolean, default: !1 },
    serverSide: { type: Boolean, default: !1 },
    dataSource: {
      type: Object,
      default: () => ({
        type: "inertia",
        path: null,
        method: "get",
        data: null,
        params: {},
        preserve: !0
      })
    },
    urlSync: { type: String, default: "auto" },
    columnsParamMode: { type: String, default: "full" },
    paramMap: {
      type: Object,
      default: () => ({
        page: "page",
        rowsPerPage: "rowsPerPage",
        sortField: "sortField",
        sortOrder: "sortOrder",
        global: "global",
        columns: "columns",
        filters: "filters",
        filterModes: "filterModes",
        filterTypes: "filterTypes",
        selectionFilter: "selectionFilter",
        selectedRowIds: "selectedRowIds",
        manualOrdering: "manualOrdering",
        manualOrderField: "manualOrderField"
      })
    },
    responseMap: {
      type: Object,
      default: () => ({
        data: "data",
        total: "total",
        current: "current_page",
        last: "last_page"
      })
    },
    options: { type: Object, default: () => ({}) },
    sortField: { type: String, default: "id" },
    sortOrder: { type: String, default: "asc" },
    i18n: { type: Object, default: () => ({}) },
    validationMode: { type: String, default: "both" },
    clientValidationOn: {
      type: [Array, String],
      default: () => ["tab", "blur", "save"]
    },
    validationAdapter: { type: Function, default: null }
  },
  emits: [
    "on-cell-click",
    "on-menu-item-click",
    "on-row-menu-item-click",
    "change",
    "update:checkedRows"
  ],
  setup(d, { emit: C }) {
    const l = d, v = C, S = Rs();
    function $(e, t) {
      return !e || typeof e != "object" ? null : String(t || "").split(".").filter((r) => r !== "").reduce((r, a) => !r || typeof r != "object" || !Object.prototype.hasOwnProperty.call(r, a) ? null : r[a], e);
    }
    function ee(e, t = {}) {
      return typeof e != "string" ? e : Object.entries(t).reduce(
        (r, [a, n]) => r.replaceAll(`:${a}`, String(n ?? "")),
        e
      );
    }
    const J = k(() => {
      const e = l.i18n?.messages;
      if (e && typeof e == "object")
        return e;
      const t = S?.props?.rwtable?.translations;
      return t && typeof t == "object" ? t : {};
    }), A = k(() => {
      const e = String(l.i18n?.locale || "").trim().toLowerCase();
      if (e !== "")
        return e;
      const t = String(S?.props?.rwtable?.locale || "").trim().toLowerCase();
      return t !== "" ? t : "en";
    });
    function o(e, t = "", r = {}) {
      const a = $(J.value, e);
      return ee(typeof a == "string" ? a : t || e, r);
    }
    function E(e) {
      if (!e || typeof e != "object")
        return null;
      const t = String(A.value || "").toLowerCase();
      if (t !== "" && typeof e[t] == "string")
        return e[t];
      const r = t.includes("-") ? t.split("-")[0] : t;
      return r !== "" && typeof e[r] == "string" ? e[r] : typeof e.default == "string" ? e.default : null;
    }
    function x(e) {
      const t = String(
        e?.label ?? e?.key ?? o("common.dash", "-")
      ), r = E(e?.labelTranslations);
      if (typeof r == "string" && r.trim() !== "")
        return r;
      const a = String(e?.labelKey || "").trim();
      if (a === "") {
        const u = String(e?.key || "").trim();
        if (u !== "") {
          const i = l.columns.find(
            (p) => String(p?.key || "").trim() === u && p !== e
          );
          if (i)
            return x(i);
        }
        return t;
      }
      const n = a.includes(".") ? [a] : [`columns.${a}`];
      for (const u of n) {
        const i = $(J.value, u);
        if (typeof i == "string" && i.trim() !== "")
          return i;
      }
      return t;
    }
    const le = m(null), Te = m(null), ie = m(null), be = m(null), pe = m(""), Y = m(1), W = m(Number(l.rowOptions[0] ?? 25)), Be = m(l.sortField || l.idKey), Oe = m(l.sortOrder === "desc" ? "desc" : "asc"), V = m([]), Ye = m({ total: 0, current: 1, last: 1 }), Ie = m([]), ve = m(W.value), $e = m(!1), Ke = m(!1), te = m(""), ge = m({}), D = m({}), ce = m(!1), re = m(!1), oe = m(null), Qe = m(null), Ct = m(null), ot = m(!1), Yt = m(!1), qe = m(0), _e = m(null), Ze = m(null), Me = m(""), St = m({}), et = m(null), Ve = m(!1), z = m({}), P = m(null), B = m([]), se = m({}), ye = m({}), Re = m({}), wr = m("none"), Lt = m(null), _t = m(null), We = m(!1), He = m("list"), Dt = m([]), G = m({
      id: null,
      description: "",
      columns: []
    }), ne = m(!1), je = m(""), ue = m(""), bt = m(null), Mt = m(null), fe = m(!1), K = m("list"), Nt = m([]), F = m({
      id: null,
      description: "",
      config: null
    }), Ue = m(!1), me = m(""), f = m(""), h = m([]), M = m(!1), I = m(""), Q = m(""), Fe = m(null), Ge = m(null), Ae = m(!1), Ft = /* @__PURE__ */ new Map(), Ot = /* @__PURE__ */ new Map(), he = Object.freeze({
      toolbar: 50,
      toolbarOverlay: 60,
      stickyHeader: 40,
      stickyUtilityHeader: 36,
      stickyDataHeader: 32,
      rowMenuOverlay: 120,
      headerFilterOverlay: 30,
      stickyUtilityBody: 18,
      stickyDataBody: 16,
      resizeHandle: 38
    }), Yr = Object.freeze([
      "tab",
      "blur",
      "save"
    ]), tt = m({}), xe = m(0), st = m(!1), It = m(0), Xe = m(l.options?.scrollMode !== "infinite"), we = m(!!l.horizontalScroll), Rt = m(!!l.rowQuantitySelect), jt = m(!!l.showRecordCount), at = m(String(l.initialHeight || "520px"));
    let pt = null, vt = null;
    const Qt = k(() => l.serverSide || l.managed), ze = k(() => !Xe.value), O = k(() => Tn(Xt())), Qr = k(
      () => `${O.value}-global-search`
    ), Qn = k(
      () => `${O.value}-rows-per-page`
    ), Kl = k(() => {
      let e = 0;
      return l.checkboxColumn && (e += mr), q.value.forEach((t) => {
        e += xt(t.key);
      }), e;
    }), ql = k(() => we.value ? {
      width: `max(100%, ${Kl.value}px)`
    } : {
      width: "100%"
    }), Wl = k(
      () => yr(at.value)
    ), Hl = Object.freeze({ zIndex: he.toolbar }), Zn = Object.freeze({ zIndex: he.toolbarOverlay }), Ul = k(() => {
      const e = {
        ...Zn
      };
      return It.value > 0 && (e.maxHeight = `${It.value}px`), e;
    }), Gl = Object.freeze({
      zIndex: he.stickyHeader,
      boxShadow: "inset 0 -1px 0 rgb(203 213 225)"
    }), Xl = Object.freeze({
      zIndex: he.headerFilterOverlay
    }), Jl = Object.freeze({ zIndex: he.rowMenuOverlay }), Zr = k(
      () => gl(l.searchFieldWidth)
    ), en = k(
      () => gl(l.searchFieldMinWidth)
    ), Yl = k(
      () => Zr.value ? "min-w-0 flex-none" : en.value ? "flex-1" : "min-w-56 flex-1"
    ), Ql = k(() => {
      const e = {};
      return Zr.value && (e.width = Zr.value, e.maxWidth = "100%"), en.value && (e.minWidth = en.value), Object.keys(e).length > 0 ? e : null;
    }), ea = k(() => Array.isArray(l.menuItems) ? l.menuItems : []), kr = k(() => [
      { value: "bar", label: o("charts.type_items.bar", "Staaf") },
      { value: "line", label: o("charts.type_items.line", "Lijn") },
      { value: "pie", label: o("charts.type_items.pie", "Taart") },
      { value: "doughnut", label: o("charts.type_items.doughnut", "Donut") },
      { value: "bar3d", label: o("charts.type_items.bar3d", "Staaf 3D") },
      { value: "line3d", label: o("charts.type_items.line3d", "Lijn 3D") },
      {
        value: "bar3d_webgl",
        label: o("charts.type_items.bar3d_webgl", "Staaf 3D (WebGL)")
      },
      {
        value: "line3d_webgl",
        label: o("charts.type_items.line3d_webgl", "Lijn 3D (WebGL)")
      }
    ]), ta = k(() => [
      {
        value: "count",
        label: o("charts.aggregate_items.count", "Aantal (count)")
      },
      { value: "sum", label: o("charts.aggregate_items.sum", "Som (sum)") },
      {
        value: "avg",
        label: o("charts.aggregate_items.avg", "Gemiddelde (avg)")
      },
      { value: "min", label: o("charts.aggregate_items.min", "Minimum (min)") },
      { value: "max", label: o("charts.aggregate_items.max", "Maximum (max)") }
    ]), Zl = k(() => [
      { value: "desc", label: o("charts.sort_direction_items.desc", "Aflopend") },
      { value: "asc", label: o("charts.sort_direction_items.asc", "Oplopend") }
    ]), ei = k(() => [
      {
        value: "vertical",
        label: o("charts.orientation_items.vertical", "Verticaal")
      },
      {
        value: "horizontal",
        label: o("charts.orientation_items.horizontal", "Horizontaal")
      }
    ]), lt = Object.freeze([
      "#2563eb",
      "#16a34a",
      "#dc2626",
      "#d97706",
      "#0891b2",
      "#7c3aed",
      "#db2777",
      "#475569"
    ]);
    let Zt = null, ra = !1, Le = null, Cr = null;
    function na() {
      return {
        version: 1,
        builder: {
          dataset: {
            x_field: "",
            metric_field: "",
            aggregate: "count",
            series_field: "",
            limit: 25,
            sort_direction: "desc"
          },
          chart: {
            type: "bar",
            orientation: "vertical",
            stacked: !1,
            show_legend: !0
          },
          presentation: {
            allow_chart_type_change: !1
          }
        }
      };
    }
    const ti = k(() => String(l.excel) === "true"), ri = k(() => String(l.charts) === "true"), tn = k(() => {
      if (typeof l.tableId == "string" && l.tableId.trim() !== "")
        return Tn(l.tableId.trim());
      const e = l.columns.map((t) => String(t?.key ?? "col")).join("-");
      return Tn(e);
    }), Sr = k(() => {
      const t = String(l.dataSource?.path || "").trim().match(/^\/?([^/?#]+)/);
      return t?.[1] ? `/${t[1]}` : "/admin";
    }), aa = k(
      () => (G.value.columns || []).filter((e) => e.selected)
    ), la = k(() => String(G.value.description || "").trim() !== "" && aa.value.length > 0), rn = k(() => (Array.isArray(l.columns) ? l.columns : []).map((e) => {
      const t = String(e?.key ?? "");
      return {
        value: t,
        label: String(e?.label ?? t ?? "-")
      };
    })), nn = k(() => F.value.config?.builder?.dataset || {}), it = k(() => F.value.config?.builder?.chart || {}), ni = k(() => F.value.config?.builder?.presentation || {}), ai = k(() => String(nn.value.aggregate || "count")), ia = k(() => ai.value !== "count");
    k(() => ni.value.allow_chart_type_change === !0);
    const _r = k(() => K.value === "view" && Q.value ? Q.value : String(it.value.type || "bar")), an = k(() => {
      const e = String(F.value.description || "").trim(), t = String(nn.value.x_field || "").trim(), r = String(
        nn.value.metric_field || ""
      ).trim();
      return !(e === "" || t === "" || ia.value && r === "");
    }), er = k(() => Wi(h.value, F.value.config)), Mr = k(() => Array.isArray(er.value?.labels) && er.value.labels.length > 0 && Array.isArray(er.value?.series) && er.value.series.length > 0), q = k(() => B.value.filter((e) => e.selected !== !1)), At = k(() => q.value.filter((e) => !!e.editable)), li = k(() => Object.keys(gt.value).length > 0), gt = k(() => {
      const e = {};
      return Object.entries(se.value).forEach(([t, r]) => {
        yi(r) || (e[t] = r);
      }), e;
    }), ln = k(() => {
      const e = {};
      return Object.keys(gt.value).forEach((t) => {
        e[t] = ye.value[t] ?? rr(Re.value[t]);
      }), e;
    }), on = k(() => {
      const e = {};
      return Object.keys(gt.value).forEach((t) => {
        e[t] = Re.value[t] ?? "text";
      }), e;
    }), Pt = k(() => {
      let e = [...V.value];
      if (pe.value.trim() !== "") {
        const a = pe.value.trim().toLowerCase();
        e = e.filter((n) => q.value.some((u) => {
          const i = n[u.key];
          return i == null ? !1 : String(i).toLowerCase().includes(a);
        }));
      }
      e = e.filter((a) => Object.keys(gt.value).every((n) => {
        const u = ln.value[n], i = on.value[n], p = gt.value[n];
        return gi(a[n], u, i, p);
      }));
      const t = l.manualOrdering ? l.manualOrderField : Be.value, r = l.manualOrdering ? "asc" : Oe.value;
      return e.sort((a, n) => {
        const u = a[t], i = n[t];
        if (u === i)
          return 0;
        const p = String(u ?? "").localeCompare(
          String(i ?? ""),
          void 0,
          {
            numeric: !0,
            sensitivity: "base"
          }
        );
        return r === "asc" ? p : -p;
      }), e;
    }), Z = k(() => {
      if (Qt.value)
        return ze.value ? Ie.value : V.value;
      if (ze.value)
        return Pt.value.slice(0, ve.value);
      const e = (Y.value - 1) * W.value, t = e + W.value;
      return Pt.value.slice(e, t);
    }), oa = k(() => {
      if (Qt.value) {
        const e = ze.value ? Ie.value.length : V.value.length;
        return Number(Ye.value.total ?? e);
      }
      return Pt.value.length;
    }), Bt = k(() => Qt.value ? Number(Ye.value.last ?? 1) : Math.max(1, Math.ceil(oa.value / W.value))), ii = k(() => {
      const e = Math.max(1, Number(Bt.value || 1)), t = Math.min(
        Math.max(1, Number(Y.value || 1)),
        e
      ), r = 2, a = [], n = [];
      for (let i = 1; i <= e; i += 1)
        (i <= 2 || i >= e - 1 || Math.abs(i - t) <= r) && a.push(i);
      let u = null;
      return a.forEach((i) => {
        u && i - u > 1 && n.push("..."), n.push(i), u = i;
      }), n;
    }), oi = k(() => P.value === null || P.value === void 0 ? !1 : Z.value.some(
      (e) => e?.[l.idKey] === P.value
    )), sa = k(() => Ve.value ? P.value === null || P.value === void 0 ? !0 : !oi.value : !1), si = k(() => {
      const e = Z.value.map((t) => t[l.idKey]).filter((t) => t != null);
      return e.length === 0 ? !1 : e.every((t) => l.checkedRows.includes(t));
    }), ui = k(() => JSON.stringify({
      global: pe.value,
      rowsPerPage: W.value,
      sortField: Be.value,
      sortOrder: Oe.value,
      columns: q.value.map((e) => e.key),
      filters: gt.value,
      modes: ln.value,
      types: on.value,
      selectionFilter: wr.value,
      checkedRows: l.checkedRows,
      manualOrdering: l.manualOrdering,
      manualOrderField: l.manualOrderField
    })), sn = Ws(() => {
      l.managed && Kt({ append: !1 });
    }, 250);
    H(
      () => l.columns,
      () => {
        ca(), ci(), dn();
      },
      { immediate: !0, deep: !0 }
    ), H(
      () => l.data,
      (e) => {
        l.managed || ar(e, { append: !1 });
      },
      { deep: !0, immediate: !0 }
    ), H(
      () => l.initialData,
      (e) => {
        e && (l.managed && Yt.value || (ar(e, { append: !1 }), Yt.value = !0));
      },
      { deep: !0, immediate: !0 }
    ), H(W, () => {
      W.value = Wr(W.value), ze.value && (ve.value = W.value), Y.value = 1, xl();
    }), H(ui, () => {
      if (v("change", jr(1)), ze.value && Ua(), l.managed) {
        if (ze.value) {
          Kt({ append: !1, pageOverride: 1 });
          return;
        }
        sn();
      }
    }), H(Y, () => {
      v("change", jr()), l.managed && !ze.value && sn();
    }), H(Xe, async (e, t) => {
      e !== t && (Y.value = 1, e || Ua(), l.managed && await Kt({ append: !1, pageOverride: 1 }), await ae(), Cn());
    }), H(
      [
        Xe,
        we,
        Rt,
        jt,
        at
      ],
      () => {
        xl();
      },
      { deep: !0 }
    ), H(
      () => Z.value.length,
      async () => {
        no(), await ae(), Ve.value && sa.value && (ol(), sl()), Cn();
      }
    ), H(B, Fs, { deep: !0 }), H(
      () => q.value.length,
      (e) => {
        const t = Math.max(0, e), r = Math.min(Math.max(xe.value, 0), t);
        r !== xe.value && (xe.value = r, Hr()), un(!0);
      }
    ), H(
      () => we.value,
      () => {
        un(!0);
      }
    ), H(Ve, (e) => {
      if (!e) {
        P.value = null, z.value = {}, fr();
        return;
      }
      te.value = "", fr(), fi(), sl();
    });
    function ua() {
      if (typeof window > "u" || !re.value)
        return;
      const e = be.value;
      if (!e)
        return;
      const t = window.innerHeight || document.documentElement?.clientHeight || 0;
      if (t <= 0)
        return;
      const r = e.getBoundingClientRect(), n = Math.floor(
        t - r.top - 12
      ), u = Math.floor(t * 0.8);
      It.value = Math.max(
        240,
        n > 0 ? n : u
      );
    }
    function da() {
      ae(() => {
        requestAnimationFrame(() => {
          ua();
        });
      });
    }
    function Fr() {
      re.value && ua(), fe.value && Ra();
    }
    H(re, (e) => {
      if (!e) {
        It.value = 0;
        return;
      }
      da();
    }), H(st, () => {
      re.value && da();
    }), H(We, (e) => {
      if (!e) {
        je.value = "", ue.value = "", bt.value = null, Mt.value = null;
        return;
      }
      He.value = "list", je.value = "", ue.value = "", bn();
    }), H(fe, (e) => {
      if (!e) {
        f.value = "", me.value = "", I.value = "", Ae.value = !1, Q.value = "", yt();
        return;
      }
      K.value = "list", f.value = "", me.value = "", I.value = "", Ae.value = !1, Q.value = "", vn();
    }), H(
      () => K.value,
      () => {
        if (I.value = "", K.value === "list") {
          Ae.value = !1, yt();
          return;
        }
        Ni();
      }
    ), H(
      () => F.value.config,
      () => {
        !fe.value || K.value === "list" || (I.value = "", lr());
      },
      { deep: !0 }
    ), H(
      () => Q.value,
      () => {
        !fe.value || K.value !== "view" || (I.value = "", lr());
      }
    ), H(
      () => h.value,
      () => {
        !fe.value || K.value === "list" || (I.value = "", lr());
      },
      { deep: !0 }
    ), Is(async () => {
      Ms(), ca(), di(), dn(), l.startOnMount && l.managed && Kt({ append: !1, pageOverride: 1 }), l.autoEditLastRowFirstField && ae(() => {
        bi();
      }), window.addEventListener("keydown", vl, { capture: !0 }), window.addEventListener("pointerdown", bl, {
        capture: !0
      }), window.addEventListener("focusin", pl, { capture: !0 }), window.addEventListener("resize", Fr), window.addEventListener("scroll", Fr), await ae(), Cn();
    }), Vl(() => {
      pt && (pt.disconnect(), pt = null), sn.cancel(), wn(), window.removeEventListener("keydown", vl, { capture: !0 }), window.removeEventListener("pointerdown", bl, {
        capture: !0
      }), window.removeEventListener("focusin", pl, {
        capture: !0
      }), window.removeEventListener("resize", Fr), window.removeEventListener("scroll", Fr), yt();
    });
    function ca() {
      const e = l.columns.map((i) => ({
        ...i,
        selected: i.selected !== !1
      })), t = ks();
      if (!t) {
        B.value = e;
        return;
      }
      const r = t.selected ?? {}, a = Array.isArray(t.order) ? t.order : [], n = /* @__PURE__ */ new Map();
      e.forEach((i) => {
        const p = Object.prototype.hasOwnProperty.call(
          r,
          i.key
        ) ? !!r[i.key] : i.selected !== !1;
        n.set(i.key, {
          ...i,
          selected: p
        });
      });
      const u = [];
      a.forEach((i) => {
        n.has(i) && (u.push(n.get(i)), n.delete(i));
      }), n.forEach((i) => u.push(i)), B.value = u;
    }
    function di() {
      const e = Cs(), t = {};
      l.columns.forEach((u) => {
        const i = String(u.key), p = Number(e?.[i]), y = tr(i);
        if (Number.isFinite(p) && p > 0) {
          t[i] = Math.max(y, Math.round(p));
          return;
        }
        t[i] = Or(u);
      }), tt.value = t;
      const r = Ss(), a = Math.max(0, q.value.length), n = Math.min(
        Math.max(r, 0),
        a
      );
      xe.value = n, n !== r && Hr();
    }
    function ci() {
      const e = {};
      l.columns.forEach((a) => {
        const n = String(a.key), u = Number(tt.value?.[n]), i = tr(n);
        if (Number.isFinite(u) && u > 0) {
          e[n] = Math.max(i, Math.round(u));
          return;
        }
        e[n] = Or(a);
      }), tt.value = e;
      const t = Math.max(0, q.value.length), r = Math.min(
        Math.max(xe.value, 0),
        t
      );
      r !== xe.value && (xe.value = r, Hr());
    }
    function Or(e) {
      const t = ba(e), r = Number(e?.width);
      return Number.isFinite(r) && r > 0 ? Math.max(t, Math.round(r)) : e?.type === "boolean" ? Math.max(t, 90) : e?.type === "number" ? Math.max(t, 110) : e?.type === "date" || e?.type === "datetime" ? Math.max(t, 140) : Math.max(t, 180);
    }
    function fa(e) {
      return l.columns.find(
        (t) => String(t.key) === String(e)
      ) || null;
    }
    function ba(e, t = null) {
      const r = String(t ?? e?.key ?? ""), a = Number(e?.minWidth), n = q.value.findIndex(
        (de) => String(de.key) === r
      ), u = we.value && n >= 0 && !!Nr(n);
      let i = Qf;
      const p = (e?.sortable !== !1 ? 1 : 0) + (e?.filterable ? 1 : 0) + (u ? 1 : 0), y = String(e?.label ?? "").trim().length, w = Math.min(24, Math.max(8, y * 3)), R = p * 20;
      return i = Math.max(
        i,
        R + w + 10
      ), Number.isFinite(a) && a > 0 && (i = Math.max(i, Math.round(a))), i;
    }
    function tr(e) {
      const t = fa(e);
      return ba(t, e);
    }
    function un(e = !1) {
      const t = { ...tt.value };
      let r = !1;
      l.columns.forEach((a) => {
        const n = String(a.key), u = Number(t[n]), i = tr(n);
        if (!Number.isFinite(u) || u <= 0) {
          t[n] = Math.max(i, Or(a)), r = !0;
          return;
        }
        const p = Math.max(i, Math.round(u));
        p !== Math.round(u) && (t[n] = p, r = !0);
      }), r && (tt.value = t, e && hl());
    }
    function dn() {
      const e = { ...Re.value }, t = { ...ye.value };
      l.columns.forEach((r) => {
        const a = pi(r.type);
        e[r.key] = a, t[r.key] || (t[r.key] = rr(a));
      }), Re.value = e, ye.value = t;
    }
    function fi() {
      const e = {};
      q.value.forEach((r) => {
        if (!r.editable)
          return;
        const a = r.editField || r.key;
        if (Object.prototype.hasOwnProperty.call(r, "defaultInsertValue")) {
          e[a] = r.defaultInsertValue;
          return;
        }
        if (r.type === "boolean") {
          e[a] = !1;
          return;
        }
        if (r.editMultiple === !0) {
          e[a] = [];
          return;
        }
        e[a] = "";
      });
      const t = typeof l.inlineCreateDefaults == "function" ? l.inlineCreateDefaults() : l.inlineCreateDefaults;
      z.value = {
        ...e,
        ...t || {}
      };
    }
    function bi() {
      if (At.value.length === 0 || Z.value.length === 0)
        return;
      const e = Z.value.length - 1, t = Z.value[e];
      qe.value = e, Tt(t, At.value[0]);
    }
    function pi(e) {
      return e && ["number", "date", "datetime", "boolean"].includes(e) ? e : "text";
    }
    function rr(e) {
      return e === "text" ? "bevat" : "=";
    }
    function vi(e) {
      return e === "text" ? [
        { value: "bevat", label: o("filters.modes.contains", "Bevat") },
        {
          value: "bevat niet",
          label: o("filters.modes.not_contains", "Bevat niet")
        },
        { value: "=", label: o("filters.modes.equals", "Is gelijk aan") },
        {
          value: "!=",
          label: o("filters.modes.not_equals", "Is niet gelijk aan")
        }
      ] : e === "date" || e === "datetime" ? [
        { value: "=", label: o("filters.modes.equals", "Is gelijk aan") },
        {
          value: "!=",
          label: o("filters.modes.not_equals", "Is niet gelijk aan")
        },
        { value: ">", label: o("filters.modes.after", "Na") },
        { value: "<", label: o("filters.modes.before", "Voor") },
        { value: "tussen", label: o("filters.modes.between", "Tussen") }
      ] : [
        { value: "=", label: o("filters.modes.equals", "Is gelijk aan") },
        {
          value: "!=",
          label: o("filters.modes.not_equals", "Is niet gelijk aan")
        },
        { value: ">", label: o("filters.modes.greater_than", "Groter dan") },
        { value: "<", label: o("filters.modes.less_than", "Kleiner dan") }
      ];
    }
    function gi(e, t, r, a) {
      if (r === "date" || r === "datetime") {
        const i = Ir(e);
        if (!i)
          return !1;
        if (t === "tussen") {
          const y = Ir(a?.from), w = Ir(a?.to);
          return !y || !w ? !0 : i >= y && i <= w;
        }
        const p = Ir(a);
        return p ? t === "=" ? i === p : t === "!=" ? i !== p : t === ">" ? i > p : t === "<" ? i < p : !0 : !0;
      }
      if (r === "number") {
        const i = Number(e), p = Number(a);
        return Number.isNaN(p) ? !0 : t === "=" ? i === p : t === "!=" ? i !== p : t === ">" ? i > p : t === "<" ? i < p : !0;
      }
      if (r === "boolean") {
        const i = Rr(e), p = Rr(a);
        return p === null ? !0 : t === "!=" ? i !== p : i === p;
      }
      const n = String(e ?? "").toLowerCase(), u = String(a ?? "").toLowerCase();
      return t === "bevat" ? n.includes(u) : t === "bevat niet" ? !n.includes(u) : t === "=" ? n === u : t === "!=" ? n !== u : !0;
    }
    function Ir(e) {
      return e ? typeof e == "string" ? e.slice(0, 10) : e instanceof Date ? e.toISOString().slice(0, 10) : null : null;
    }
    function Rr(e) {
      return e === !0 || e === 1 || e === "1" || e === "true" ? !0 : e === !1 || e === 0 || e === "0" || e === "false" ? !1 : null;
    }
    function yi(e) {
      if (e == null || e === "")
        return !0;
      if (typeof e == "object") {
        const t = !!e.from, r = !!e.to;
        return !t || !r;
      }
      return !1;
    }
    function nr(e) {
      if (!e)
        return [];
      if (Array.isArray(e))
        return e;
      if (Array.isArray(e.data))
        return e.data;
      const t = e?.[l.responseMap.data];
      return Array.isArray(t) ? t : [];
    }
    function ar(e, t = { append: !1, targetPage: null }) {
      const r = nr(e), a = e?.[l.responseMap.total] ?? e?.total ?? r.length, n = e?.[l.responseMap.current] ?? e?.current_page ?? t.targetPage ?? 1, u = e?.[l.responseMap.last] ?? e?.last_page ?? Math.max(1, Math.ceil((a || r.length) / W.value));
      Ye.value = {
        total: Number(a ?? r.length),
        current: Number(n ?? 1),
        last: Number(u ?? 1)
      }, V.value = r, ze.value && t.append ? mi(r) : Ie.value = [...r], l.managed && (Y.value = Number(n ?? 1));
    }
    function mi(e) {
      const t = [...Ie.value], r = new Set(
        t.map((a) => a[l.idKey]).filter((a) => a != null)
      );
      e.forEach((a) => {
        const n = a[l.idKey];
        if (n == null) {
          t.push(a);
          return;
        }
        r.has(n) || (r.add(n), t.push(a));
      }), Ie.value = t;
    }
    function jr(e = null) {
      const t = e ?? Y.value, r = {
        [l.paramMap.page]: t,
        [l.paramMap.rowsPerPage]: W.value,
        [l.paramMap.sortField]: Be.value,
        [l.paramMap.sortOrder]: Oe.value,
        [l.paramMap.global]: pe.value,
        [l.paramMap.filters]: gt.value,
        [l.paramMap.filterModes]: ln.value,
        [l.paramMap.filterTypes]: on.value,
        [l.paramMap.selectionFilter]: wr.value,
        [l.paramMap.selectedRowIds]: l.checkedRows
      };
      return l.paramMap.manualOrdering && (r[l.paramMap.manualOrdering] = l.manualOrdering ? 1 : 0), l.paramMap.manualOrderField && (r[l.paramMap.manualOrderField] = l.manualOrderField), l.columnsParamMode === "keys" ? r[l.paramMap.columns] = q.value.map(
        (a) => a.key
      ) : l.columnsParamMode === "full" && (r[l.paramMap.columns] = q.value), r;
    }
    async function Kt(e = { append: !1, pageOverride: null }) {
      if (!l.dataSource?.path)
        return;
      const t = !!e.append, r = e.pageOverride ?? Y.value;
      $e.value = !0;
      const a = {
        ...jr(r),
        ...pa()
      };
      try {
        if ((l.dataSource.type || "inertia") === "axios") {
          const n = rt(), u = (l.dataSource.method || "get").toLowerCase(), i = await n({
            method: u,
            url: l.dataSource.path,
            params: u === "get" ? a : void 0,
            data: u !== "get" ? a : void 0
          });
          ar(i.data, { append: t, targetPage: r }), $e.value = !1;
          return;
        }
        js.visit(l.dataSource.path, {
          method: l.dataSource.method || "get",
          data: a,
          preserveState: l.dataSource.preserve ?? !0,
          preserveScroll: !0,
          replace: l.urlSync === "none",
          only: l.dataSource.data ? [l.dataSource.data] : void 0,
          onSuccess: (n) => {
            if (l.dataSource.data) {
              ar(n.props[l.dataSource.data], {
                append: t,
                targetPage: r
              });
              return;
            }
            ar(n.props, { append: t, targetPage: r });
          },
          onFinish: () => {
            $e.value = !1;
          }
        });
      } catch (n) {
        throw $e.value = !1, n;
      }
    }
    function pa() {
      return typeof l.dataSource?.params == "function" ? l.dataSource.params() || {} : l.dataSource?.params || {};
    }
    function va() {
      return `${Sr.value}/rw-table-exports/${encodeURIComponent(tn.value)}`;
    }
    function ga() {
      return `${Sr.value}/rw-table-charts/${encodeURIComponent(tn.value)}`;
    }
    function hi() {
      const e = !We.value;
      We.value = e, e && (fe.value = !1);
    }
    function xi() {
      const e = !fe.value;
      fe.value = e, e && (We.value = !1);
    }
    function ya(e) {
      const t = String(e || "bar").toLowerCase();
      return kr.value.map((a) => a.value).includes(t) ? t : "bar";
    }
    function ma(e) {
      const t = String(e || "count").toLowerCase();
      return ta.value.map((a) => a.value).includes(t) ? t : "count";
    }
    function ha(e) {
      return String(e || "desc").toLowerCase() === "asc" ? "asc" : "desc";
    }
    function cn(e) {
      return String(e || "vertical").toLowerCase() === "horizontal" ? "horizontal" : "vertical";
    }
    function xa(e) {
      const t = Number(e);
      return Number.isFinite(t) ? Math.min(500, Math.max(1, Math.round(t))) : 25;
    }
    function wi(e) {
      const t = ya(e);
      return kr.value.find(
        (a) => a.value === t
      )?.label || t;
    }
    function ki() {
      return `${String(F.value?.description || "").trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || o("charts.pdf.default_filename", "grafiek")}.pdf`;
    }
    function fn(e) {
      return String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
    }
    function Ar(e) {
      const t = na(), r = e && typeof e == "object" && !Array.isArray(e) ? e : {}, a = r.builder && typeof r.builder == "object" && !Array.isArray(r.builder) ? r.builder : {}, n = a.dataset && typeof a.dataset == "object" && !Array.isArray(a.dataset) ? a.dataset : {}, u = a.chart && typeof a.chart == "object" && !Array.isArray(a.chart) ? a.chart : {}, i = a.presentation && typeof a.presentation == "object" && !Array.isArray(a.presentation) ? a.presentation : {}, p = {
        x_field: r.xAxis,
        metric_field: r.yAxis,
        aggregate: r.operation,
        series_field: r.seriesField || r.series,
        limit: r.limit,
        sort_direction: r.sortDirection
      }, y = {
        type: r.type,
        orientation: r.orientation,
        stacked: r.stacked,
        show_legend: r.showLegend
      }, w = {
        allow_chart_type_change: r.allowViewerChartTypeChange ?? r.allow_chart_type_change
      }, R = {
        ...t.builder.dataset,
        ...p,
        ...n
      }, L = {
        ...t.builder.chart,
        ...y,
        ...u
      }, de = {
        ...t.builder.presentation,
        ...w,
        ...i
      };
      return {
        version: 1,
        builder: {
          dataset: {
            x_field: String(R.x_field || "").trim(),
            metric_field: String(
              R.metric_field || ""
            ).trim(),
            aggregate: ma(R.aggregate),
            series_field: String(
              R.series_field || ""
            ).trim(),
            limit: xa(R.limit),
            sort_direction: ha(
              R.sort_direction
            )
          },
          chart: {
            type: ya(L.type),
            orientation: cn(
              L.orientation
            ),
            stacked: !!L.stacked,
            show_legend: L.show_legend !== !1
          },
          presentation: {
            allow_chart_type_change: de.allow_chart_type_change === !0
          }
        }
      };
    }
    function Ci() {
      const e = new Map(
        l.columns.map((t) => [String(t.key), t])
      );
      return B.value.map((t) => {
        const r = String(t.key), a = e.get(r);
        return {
          key: r,
          label: a ? x(a) : t.label ?? r,
          selected: t.selected !== !1,
          width: xt(r)
        };
      });
    }
    function Si() {
      G.value = {
        id: null,
        description: "",
        columns: Ci()
      }, je.value = "", ue.value = "", He.value = "edit";
    }
    function wa(e) {
      const t = new Map(
        l.columns.map((u) => [String(u.key), u])
      ), r = Array.isArray(e?.config) ? e.config : Array.isArray(e?.columns) ? e.columns : [], a = [], n = /* @__PURE__ */ new Set();
      r.forEach((u) => {
        const i = String(u?.key ?? "");
        if (!i || n.has(i))
          return;
        n.add(i);
        const p = t.get(i);
        a.push({
          key: i,
          label: u?.label ?? (p ? x(p) : i),
          selected: !!u?.selected,
          width: Number(u?.width) || xt(i)
        });
      }), l.columns.forEach((u) => {
        const i = String(u.key);
        n.has(i) || a.push({
          key: i,
          label: x(u),
          selected: !1,
          width: xt(i)
        });
      }), G.value = {
        id: e?.id ?? null,
        description: String(e?.description ?? ""),
        columns: a
      }, je.value = "", ue.value = "";
    }
    function _i(e) {
      wa(e), He.value = "edit";
    }
    async function bn() {
      try {
        const t = await rt().get(va());
        Dt.value = Array.isArray(t?.data?.exports) ? t.data.exports : [], ue.value = "";
      } catch {
        Dt.value = [], ue.value = o(
          "excel.messages.load_failed",
          "Kon opgeslagen exports niet laden voor deze tabel."
        );
      }
    }
    async function Mi() {
      if (la.value) {
        ne.value = !0;
        try {
          const e = rt(), t = {
            id: G.value.id,
            description: String(G.value.description || "").trim(),
            config: G.value.columns
          }, r = await e.post(va(), t);
          r?.data?.export?.id && (G.value.id = r.data.export.id), await bn();
          const a = o(
            "excel.messages.saved",
            "Export configuratie opgeslagen."
          );
          je.value = a, ue.value = "", setTimeout(() => {
            je.value === a && (je.value = "");
          }, 2500);
        } catch {
          ue.value = o(
            "excel.messages.save_failed",
            "Opslaan van de export configuratie is mislukt."
          );
        } finally {
          ne.value = !1;
        }
      }
    }
    async function Fi(e) {
      ne.value = !0;
      try {
        await rt().delete(
          `${Sr.value}/rw-table-exports/${Number(e)}`
        ), await bn(), ue.value = "", G.value.id === e && (He.value = "list");
      } catch {
        ue.value = o(
          "excel.messages.delete_failed",
          "Verwijderen van de export is mislukt."
        );
      } finally {
        ne.value = !1;
      }
    }
    function pn(e, t) {
      if (!e || !t || e === t)
        return;
      const r = G.value.columns.findIndex(
        (i) => i.key === e
      ), a = G.value.columns.findIndex(
        (i) => i.key === t
      );
      if (r < 0 || a < 0 || r === a)
        return;
      const n = [...G.value.columns], [u] = n.splice(r, 1);
      n.splice(a, 0, u), G.value.columns = n;
    }
    function ka(e) {
      if (typeof document > "u" || !e?.dataTransfer || !e?.currentTarget)
        return;
      const t = e.currentTarget, r = t?.closest?.('[data-drag-preview-row="true"]') || t;
      if (!(r instanceof HTMLElement))
        return;
      const a = r.cloneNode(!0);
      if (!(a instanceof HTMLElement))
        return;
      const n = r.getBoundingClientRect();
      a.style.position = "fixed", a.style.top = "-9999px", a.style.left = "-9999px", a.style.width = `${Math.max(260, Math.round(n.width))}px`, a.style.pointerEvents = "none", a.style.background = "#ffffff", a.style.border = "1px solid rgb(148 163 184)", a.style.borderRadius = "8px", a.style.boxShadow = "0 12px 28px rgba(15, 23, 42, 0.18)", a.style.opacity = "0.96", a.style.transform = "none", a.style.zIndex = "2147483647", document.body.appendChild(a);
      try {
        e.dataTransfer.setDragImage(a, 20, 16);
      } catch {
        a.remove();
        return;
      }
      requestAnimationFrame(() => {
        a.remove();
      });
    }
    function Oi(e, t) {
      if (bt.value = e, t?.dataTransfer) {
        t.dataTransfer.effectAllowed = "move";
        try {
          t.dataTransfer.setData("text/plain", String(e)), ka(t);
        } catch {
          return;
        }
      }
    }
    function Ii(e, t) {
      bt.value && (t.preventDefault(), Mt.value = e, t?.dataTransfer && (t.dataTransfer.dropEffect = "move"));
    }
    function Ri(e, t) {
      t.preventDefault();
      const r = t?.dataTransfer?.getData?.("text/plain") || null, a = bt.value || r;
      pn(a, e), Ca();
    }
    function Ca() {
      bt.value = null, Mt.value = null;
    }
    function ji(e, t) {
      if (hn(t))
        return Vr(t, e) ?? "";
      if (t.type === "boolean")
        return Ea(t, e[t.key]);
      const r = yn(e, t);
      return r === "-" && (e[t.key] === null || e[t.key] === void 0 || e[t.key] === "") ? "" : r;
    }
    async function Sa() {
      if (!Qt.value)
        return Pt.value;
      const e = {
        ...jr(1),
        ...pa()
      };
      e[l.paramMap.page] = 1, e[l.paramMap.rowsPerPage] = 1e5;
      const t = rt(), r = (l.dataSource?.method || "get").toLowerCase();
      if ((l.dataSource?.type || "inertia") === "axios") {
        const i = await t({
          method: r,
          url: l.dataSource.path,
          params: r === "get" ? e : void 0,
          data: r !== "get" ? e : void 0
        });
        return nr(i.data);
      }
      const a = {
        "X-Inertia": "true"
      };
      S?.version && (a["X-Inertia-Version"] = S.version), S?.component && (a["X-Inertia-Partial-Component"] = S.component, l.dataSource?.data && (a["X-Inertia-Partial-Data"] = l.dataSource.data));
      const n = await t({
        method: r,
        url: l.dataSource.path,
        params: r === "get" ? e : void 0,
        data: r !== "get" ? e : void 0,
        headers: a
      }), u = n?.data?.props;
      return u ? l.dataSource?.data && u[l.dataSource.data] ? nr(u[l.dataSource.data]) : nr(u) : nr(n?.data);
    }
    function Ai() {
      const e = `export-${tn.value}`;
      return `${String(G.value.description || e).trim().replace(/[\\/:*?"<>|]+/g, "-").replace(/\s+/g, " ").slice(0, 120) || e}.xlsx`;
    }
    async function Ei() {
      if (!ne.value) {
        ne.value = !0, je.value = "", ue.value = "";
        try {
          const e = await Sa();
          if (!Array.isArray(e) || e.length === 0) {
            ue.value = o(
              "excel.messages.no_data",
              "Geen data gevonden om te exporteren."
            );
            return;
          }
          const t = aa.value;
          if (t.length === 0) {
            ue.value = o(
              "excel.messages.no_columns_selected",
              "Selecteer minstens één kolom voor export."
            );
            return;
          }
          const r = await import("exceljs"), a = r.default || r, n = new a.Workbook(), u = n.addWorksheet("Export");
          u.columns = t.map((L) => ({
            header: x(L),
            key: L.key,
            width: Math.max((Number(L.width) || 100) / 7, 10)
          }));
          const i = e.map((L) => {
            const de = {};
            return t.forEach((Je) => {
              de[Je.key] = ji(L, Je);
            }), de;
          });
          u.addRows(i), u.getRow(1).font = { bold: !0 };
          const p = await n.xlsx.writeBuffer(), y = new Blob([p], {
            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          }), w = window.URL.createObjectURL(y), R = document.createElement("a");
          R.href = w, R.setAttribute("download", Ai()), document.body.appendChild(R), R.click(), document.body.removeChild(R), window.URL.revokeObjectURL(w);
        } catch {
          ue.value = o(
            "excel.messages.download_failed",
            "Er is een fout opgetreden bij het genereren van de Excel export."
          );
        } finally {
          ne.value = !1;
        }
      }
    }
    async function $i(e) {
      wa(e), await Ei();
    }
    function Ti() {
      F.value = {
        id: null,
        description: "",
        config: Ar(na())
      }, f.value = "", me.value = "", I.value = "", Q.value = F.value.config.builder.chart.type || "bar", K.value = "edit";
    }
    function _a(e) {
      const t = Ar(e?.config || {});
      F.value = {
        id: e?.id ?? null,
        description: String(e?.description || ""),
        config: t
      }, f.value = "", me.value = "", I.value = "", Q.value = t.builder.chart.type || "bar";
    }
    function Vi(e) {
      _a(e), K.value = "edit";
    }
    function zi(e) {
      _a(e), K.value = "view";
    }
    async function vn() {
      try {
        const t = await rt().get(ga());
        Nt.value = Array.isArray(t?.data?.charts) ? t.data.charts : [], me.value = "";
      } catch {
        Nt.value = [], me.value = o(
          "charts.messages.load_failed",
          "Kon opgeslagen grafieken niet laden voor deze tabel."
        );
      }
    }
    async function Li() {
      if (an.value) {
        Ue.value = !0;
        try {
          const e = rt(), t = {
            id: F.value.id,
            description: String(F.value.description || "").trim(),
            config: Ar(F.value.config)
          }, r = await e.post(ga(), t);
          r?.data?.chart?.id && (F.value.id = r.data.chart.id), await vn();
          const a = o(
            "charts.messages.saved",
            "Grafiekconfiguratie opgeslagen."
          );
          f.value = a, me.value = "", setTimeout(() => {
            f.value === a && (f.value = "");
          }, 2500);
        } catch {
          me.value = o(
            "charts.messages.save_failed",
            "Opslaan van de grafiekconfiguratie is mislukt."
          );
        } finally {
          Ue.value = !1;
        }
      }
    }
    async function Di(e) {
      Ue.value = !0;
      try {
        await rt().delete(
          `${Sr.value}/rw-table-charts/${Number(e)}`
        ), await vn(), F.value.id === e && (K.value = "list"), me.value = "";
      } catch {
        me.value = o(
          "charts.messages.delete_failed",
          "Verwijderen van de grafiekconfiguratie is mislukt."
        );
      } finally {
        Ue.value = !1;
      }
    }
    async function Ni() {
      if (K.value === "list")
        return;
      M.value = !0, I.value = "";
      let e = null;
      try {
        e = await Sa();
      } catch {
        h.value = [], I.value = o(
          "charts.messages.source_load_failed",
          "Kon brondata voor de grafiek niet laden."
        ), yt();
      } finally {
        M.value = !1;
      }
      I.value || (h.value = Array.isArray(e) ? e : [], await lr());
    }
    async function Pi() {
      if (M.value || !Mr.value)
        return;
      Ae.value = !0;
      let e = null;
      try {
        if (await ae(), Le || await lr(), !Le) {
          me.value = o(
            "charts.messages.pdf_not_available",
            "Kan de PDF niet genereren omdat de grafiek nog niet beschikbaar is."
          );
          return;
        }
        Le.resize();
        const t = Le.getDataURL({
          type: "png",
          pixelRatio: 2,
          backgroundColor: "#ffffff"
        }), r = String(F.value?.description || "").trim() || o("charts.pdf.default_title", "Grafiek"), a = `${wi(_r.value)} - ${(/* @__PURE__ */ new Date()).toLocaleString(A.value)}`;
        e = document.createElement("div"), e.className = "rw-chart-pdf-export", e.innerHTML = `
            <div style="width: 1080px; background: #ffffff; padding: 24px 28px 18px; box-sizing: border-box; font-family: Arial, sans-serif;">
                <div style="font-size: 22px; font-weight: 700; color: #0f172a; line-height: 1.35; margin-bottom: 4px;">${fn(r)}</div>
                <div style="font-size: 14px; color: #64748b; line-height: 1.4; margin-bottom: 18px;">${fn(a)}</div>
                <div style="width: 100%; display: flex; justify-content: center; align-items: center; overflow: hidden;">
                    <img src="${t}" alt="${fn(o("charts.pdf.image_alt", "Grafiek export"))}" style="display: block; width: 100%; height: auto; object-fit: contain;" />
                </div>
            </div>
        `, document.body.appendChild(e), await (await Ui())().set({
          margin: [10, 10, 10, 10],
          filename: ki(),
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: {
            scale: 2,
            useCORS: !0,
            backgroundColor: "#ffffff"
          },
          jsPDF: {
            unit: "mm",
            format: "a4",
            orientation: "landscape"
          },
          pagebreak: { mode: ["css", "legacy"] }
        }).from(e).save(), me.value = "";
      } catch {
        me.value = o(
          "charts.messages.pdf_failed",
          "PDF afdrukken van de grafiek is mislukt."
        );
      } finally {
        e && e.remove(), Ae.value = !1;
      }
    }
    function Ma(e) {
      return e == null || e === "" ? "(Leeg)" : String(e);
    }
    function Bi(e) {
      const t = Number(e);
      return Number.isFinite(t) ? t : 0;
    }
    function Ki() {
      return {
        count: 0,
        sum: 0,
        min: null,
        max: null
      };
    }
    function qi(e, t, r) {
      e.count += 1, t !== "count" && (e.sum += r, (e.min === null || r < e.min) && (e.min = r), (e.max === null || r > e.max) && (e.max = r));
    }
    function Fa(e, t) {
      if (!e)
        return 0;
      switch (t) {
        case "sum":
          return e.sum;
        case "avg":
          return e.count > 0 ? e.sum / e.count : 0;
        case "min":
          return e.min ?? 0;
        case "max":
          return e.max ?? 0;
        default:
          return e.count;
      }
    }
    function Wi(e, t) {
      const r = Array.isArray(e) ? e : [], n = Ar(t).builder.dataset, u = String(n.x_field || "").trim(), i = String(n.metric_field || "").trim(), p = String(n.series_field || "").trim(), y = ma(n.aggregate);
      if (!u)
        return { labels: [], series: [] };
      if (y !== "count" && i === "")
        return { labels: [], series: [] };
      const w = /* @__PURE__ */ new Map(), R = [];
      r.forEach((Ce) => {
        const Ee = Ma(Ce?.[u]), De = p ? Ma(Ce?.[p]) : o("charts.series.total", "Totaal");
        w.has(Ee) || w.set(Ee, /* @__PURE__ */ new Map());
        const ct = w.get(Ee);
        ct.has(De) || (ct.set(De, Ki()), R.includes(De) || R.push(De));
        const Jt = y === "count" ? 0 : Bi(Ce?.[i]);
        qi(
          ct.get(De),
          y,
          Jt
        );
      });
      const L = ha(n.sort_direction), de = xa(n.limit), Je = [...w.entries()].map(([Ce, Ee]) => {
        let De = 0;
        return Ee.forEach((ct) => {
          De += Fa(ct, y);
        }), {
          label: Ce,
          total: De
        };
      }).sort((Ce, Ee) => Ce.total === Ee.total ? Ce.label.localeCompare(Ee.label, void 0, {
        numeric: !0,
        sensitivity: "base"
      }) : L === "asc" ? Ce.total - Ee.total : Ee.total - Ce.total).slice(0, de).map((Ce) => Ce.label);
      if (Je.length === 0)
        return { labels: [], series: [] };
      const zt = (p ? R : [o("charts.series.total", "Totaal")]).map((Ce) => {
        const Ee = Je.map((De) => {
          const ct = w.get(De)?.get(Ce), Jt = Fa(ct, y);
          return Number.isFinite(Jt) ? Number(Jt) : 0;
        });
        return {
          name: Ce,
          data: Ee
        };
      });
      return {
        labels: Je,
        series: zt
      };
    }
    function Oa() {
      return K.value === "view" ? Ge.value : K.value === "edit" ? Fe.value : null;
    }
    function Hi() {
      try {
        const e = document.createElement("canvas");
        return e ? !!(e.getContext("webgl2") || e.getContext("webgl") || e.getContext("experimental-webgl")) : !1;
      } catch {
        return !1;
      }
    }
    async function Ia() {
      if (Zt)
        return Zt;
      const [e] = await Promise.all([
        import("echarts"),
        import("echarts-gl")
      ]);
      return Zt = e, ra = !0, Zt;
    }
    async function Ui() {
      if (Cr)
        return Cr;
      const e = await import("html2pdf.js");
      return Cr = e.default || e, Cr;
    }
    async function Gi() {
      ra || await Ia();
    }
    function yt() {
      Le && (Le.dispose(), Le = null);
    }
    function Xi(e) {
      const t = Array.isArray(e?.labels) ? e.labels : [], r = Array.isArray(e?.series) ? e.series : [], a = String(_r.value || "pie"), n = t.map((u, i) => {
        const p = r.reduce((y, w) => {
          const R = Array.isArray(w.data) ? Number(w.data[i] || 0) : 0;
          return y + (Number.isFinite(R) ? R : 0);
        }, 0);
        return {
          name: String(u),
          value: p
        };
      });
      return {
        color: lt,
        tooltip: {
          trigger: "item"
        },
        legend: {
          show: it.value.show_legend !== !1,
          bottom: 0
        },
        series: [
          {
            type: "pie",
            radius: a === "doughnut" ? ["45%", "72%"] : ["0%", "72%"],
            data: n,
            label: { formatter: "{b}: {d}%" }
          }
        ]
      };
    }
    function Ji(e, t = "bar") {
      const r = Array.isArray(e?.labels) ? e.labels : [], a = Array.isArray(e?.series) ? e.series : [], n = cn(
        it.value.orientation
      ) === "horizontal", u = n && t === "line" ? "bar" : String(t || "bar");
      return {
        color: lt,
        tooltip: {
          trigger: "axis",
          axisPointer: { type: "shadow" }
        },
        legend: {
          show: it.value.show_legend !== !1,
          top: 8
        },
        grid: {
          top: 48,
          left: 32,
          right: 16,
          bottom: 40,
          containLabel: !0
        },
        xAxis: n ? { type: "value" } : { type: "category", data: r },
        yAxis: n ? { type: "category", data: r } : { type: "value" },
        series: a.map((i) => ({
          name: String(i.name || o("charts.series.total", "Totaal")),
          type: u,
          stack: it.value.stacked ? "total" : null,
          smooth: u === "line",
          data: Array.isArray(i.data) ? i.data.map((p) => Number(p || 0)) : []
        }))
      };
    }
    function Yi(e, t = "bar3d") {
      const r = Zt, a = Array.isArray(e?.labels) ? e.labels : [], n = Array.isArray(e?.series) ? e.series : [], u = cn(
        it.value.orientation
      ) === "horizontal";
      return String(t || "bar3d") === "line3d" ? {
        color: lt,
        tooltip: { trigger: "item" },
        legend: {
          show: it.value.show_legend !== !1,
          top: 8
        },
        grid: {
          top: 48,
          left: 32,
          right: 16,
          bottom: 40,
          containLabel: !0
        },
        xAxis: u ? { type: "value" } : { type: "category", data: a },
        yAxis: u ? { type: "category", data: a } : { type: "value" },
        series: n.map((p, y) => ({
          name: String(p.name || `Reeks ${y + 1}`),
          type: "line",
          smooth: !0,
          symbolSize: 8,
          lineStyle: {
            width: 4,
            shadowBlur: 12,
            shadowOffsetY: 8,
            shadowColor: "rgba(15, 23, 42, 0.3)"
          },
          areaStyle: {
            opacity: 0.14,
            color: r?.graphic?.LinearGradient ? new r.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: lt[y % lt.length]
              },
              { offset: 1, color: "#0f172a" }
            ]) : lt[y % lt.length]
          },
          data: Array.isArray(p.data) ? p.data.map((w) => Number(w || 0)) : []
        }))
      } : {
        color: lt,
        tooltip: {
          trigger: "axis",
          axisPointer: { type: "shadow" }
        },
        legend: {
          show: it.value.show_legend !== !1,
          top: 8
        },
        grid: {
          top: 48,
          left: 32,
          right: 16,
          bottom: 40,
          containLabel: !0
        },
        xAxis: u ? { type: "value" } : { type: "category", data: a },
        yAxis: u ? { type: "category", data: a } : { type: "value" },
        series: n.map((p, y) => ({
          name: String(p.name || `Reeks ${y + 1}`),
          type: "bar",
          stack: it.value.stacked ? "total" : null,
          barMaxWidth: 48,
          itemStyle: {
            color: lt[y % lt.length],
            borderColor: "#0f172a",
            borderWidth: 0.6,
            shadowBlur: 10,
            shadowOffsetY: 8,
            shadowColor: "rgba(15, 23, 42, 0.25)"
          },
          data: Array.isArray(p.data) ? p.data.map((w) => Number(w || 0)) : []
        }))
      };
    }
    function Qi(e, t = "bar3d_webgl") {
      const r = Array.isArray(e?.labels) ? e.labels : [], a = Array.isArray(e?.series) ? e.series : [], n = String(t || "bar3d_webgl"), u = a.map(
        (y, w) => String(y.name || `Reeks ${w + 1}`)
      ), i = a.reduce((y, w) => {
        const R = Array.isArray(w.data) ? w.data : [], L = Math.max(
          0,
          ...R.map((de) => Number(de || 0))
        );
        return Math.max(y, L);
      }, 0);
      if (n === "line3d_webgl")
        return {
          tooltip: {},
          legend: {
            show: it.value.show_legend !== !1,
            top: 8
          },
          xAxis3D: {
            type: "category",
            data: r
          },
          yAxis3D: {
            type: "category",
            data: u
          },
          zAxis3D: {
            type: "value",
            min: 0,
            max: i > 0 ? i : 10
          },
          grid3D: {
            boxWidth: 120,
            boxDepth: Math.max(40, u.length * 14),
            viewControl: {
              alpha: 22,
              beta: 38,
              distance: 220
            }
          },
          series: a.map((y, w) => ({
            name: String(y.name || `Reeks ${w + 1}`),
            type: "line3D",
            lineStyle: {
              width: 4
            },
            data: (Array.isArray(y.data) ? y.data : []).map(
              (R, L) => [
                L,
                w,
                Number(R || 0)
              ]
            )
          }))
        };
      const p = [];
      return a.forEach((y, w) => {
        (Array.isArray(y.data) ? y.data : []).forEach((L, de) => {
          p.push({
            value: [de, w, Number(L || 0)]
          });
        });
      }), {
        tooltip: {},
        visualMap: {
          max: i > 0 ? i : 10,
          calculable: !0,
          orient: "horizontal",
          left: "center",
          bottom: 10,
          inRange: {
            color: ["#93c5fd", "#3b82f6", "#1d4ed8"]
          }
        },
        xAxis3D: {
          type: "category",
          data: r
        },
        yAxis3D: {
          type: "category",
          data: u
        },
        zAxis3D: {
          type: "value",
          min: 0,
          max: i > 0 ? i : 10
        },
        grid3D: {
          boxWidth: 120,
          boxDepth: Math.max(40, u.length * 14),
          viewControl: {
            alpha: 22,
            beta: 32,
            distance: 220
          }
        },
        series: [
          {
            type: "bar3D",
            data: p,
            shading: "lambert"
          }
        ]
      };
    }
    function Zi(e) {
      const t = String(_r.value || "bar");
      return t === "pie" || t === "doughnut" ? Xi(e) : t === "bar3d_webgl" || t === "line3d_webgl" ? Qi(e, t) : t === "bar3d" || t === "line3d" ? Yi(e, t) : Ji(
        e,
        t === "line" ? "line" : "bar"
      );
    }
    function Ra() {
      Le && Le.resize();
    }
    async function lr() {
      if (!fe.value || K.value === "list") {
        yt();
        return;
      }
      if (await ae(), !Oa() || !Mr.value) {
        yt();
        return;
      }
      const t = String(_r.value || "bar");
      if ((t === "bar3d_webgl" || t === "line3d_webgl") && !Hi()) {
        I.value = o(
          "charts.messages.webgl_unsupported",
          "WebGL wordt niet ondersteund in deze browser of op deze GPU. Kies een niet-WebGL grafiektype."
        ), yt();
        return;
      }
      const r = await Ia();
      (t === "bar3d_webgl" || t === "line3d_webgl") && await Gi();
      const a = Oa();
      if (a) {
        (!Le || Le.getDom() !== a) && (yt(), Le = r.init(a));
        try {
          Le.setOption(Zi(er.value), !0), Ra();
        } catch {
          I.value = o(
            "charts.messages.render_failed",
            "Kon de grafiek niet renderen met de huidige instellingen."
          );
        }
      }
    }
    function eo(e) {
      if (!l.manualOrdering) {
        if (Be.value === e) {
          Oe.value = Oe.value === "asc" ? "desc" : "asc";
          return;
        }
        Be.value = e, Oe.value = "asc";
      }
    }
    function gn(e) {
      return !l.manualOrdering && e?.sortable !== !1;
    }
    function to(e) {
      if (ze.value || e === "...")
        return;
      const t = Number(e);
      if (!Number.isFinite(t))
        return;
      const r = Math.round(t);
      r < 1 || r > Bt.value || r !== Y.value && (Y.value = r);
    }
    async function ro(e, t, r, a) {
      ir(r);
      const n = Br(t, e);
      if (_e.value !== null && Ze.value !== null && !n && !await qr("blur"))
        return;
      if (e.editable) {
        if (n)
          return;
        Tt(t, e);
        return;
      }
      if (!e.clickable)
        return;
      const u = hn(e) ? Vr(e, t) : t[e.key];
      v("on-cell-click", e.key, t[l.idKey], u), typeof l.cellStyle == "function" && l.cellStyle({
        row: t,
        col: e,
        value: t[e.key],
        rowId: t[l.idKey],
        rowIndex: r,
        colIndex: a
      });
    }
    function ir(e) {
      if (Z.value.length === 0) {
        qe.value = 0;
        return;
      }
      const t = Math.max(
        0,
        Math.min(e, Z.value.length - 1)
      );
      qe.value = t;
    }
    function no() {
      ir(qe.value);
    }
    function ao(e) {
      v("on-menu-item-click", {
        item: e,
        selectedRowIds: l.checkedRows
      }), ce.value = !1;
    }
    function lo(e) {
      const t = [...l.checkedRows], r = t.indexOf(e);
      r >= 0 ? t.splice(r, 1) : t.push(e), v("update:checkedRows", t);
    }
    function io(e) {
      const t = Z.value.map((a) => a[l.idKey]).filter((a) => a != null);
      if (!e) {
        const a = l.checkedRows.filter(
          (n) => !t.includes(n)
        );
        v("update:checkedRows", a);
        return;
      }
      const r = Array.from(/* @__PURE__ */ new Set([...l.checkedRows, ...t]));
      v("update:checkedRows", r);
    }
    function Er(e) {
      if (Array.isArray(e))
        return [...e];
      if (e == null || e === "")
        return [];
      if (typeof e == "string") {
        const t = e.trim();
        if (t.startsWith("[") && t.endsWith("]"))
          try {
            const r = JSON.parse(t);
            if (Array.isArray(r))
              return r;
          } catch {
            return [e];
          }
      }
      return [e];
    }
    function $r(e, t) {
      if (e?.editMultiple !== !0)
        return [];
      const r = e.editItemValue || "value", a = e.editItemTitle || "title", n = e.editField || e.key, u = t?.[n] !== void 0 ? t?.[n] : t?.[e.key], i = Er(u);
      return i.length === 0 ? [] : !Array.isArray(e.editItems) || e.editItems.length === 0 ? i.map((p) => String(p)) : i.map((p) => {
        const y = e.editItems.find(
          (w) => String(w?.[r]) === String(p)
        );
        return y && Object.prototype.hasOwnProperty.call(y, a) ? String(y[a] ?? p) : String(p);
      });
    }
    function yn(e, t) {
      const r = e[t.key];
      if (t.editMultiple === !0) {
        const a = $r(t, e);
        if (a.length > 0)
          return a.join(", ");
        const n = e?.[t.editField || t.key] !== void 0 ? e?.[t.editField || t.key] : e?.[t.key];
        if (Er(n).length === 0)
          return "-";
      }
      if ((t.editInput === "select" || t.editInput === "autocomplete") && Array.isArray(t.editItems)) {
        const a = t.editItemValue || "value", n = t.editItemTitle || "title", u = t.editField || t.key, i = t.editItems.find(
          (p) => String(p?.[a]) === String(e[u])
        );
        if (i && Object.prototype.hasOwnProperty.call(i, n))
          return i[n] ?? "-";
      }
      return r == null || r === "" ? "-" : t.type === "boolean" ? Ea(t, r) : r;
    }
    function mt(e, t) {
      return !!(e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, t));
    }
    function oo(e, t) {
      const r = t == null ? "" : String(t);
      return e?.editCustomTrim === !1 ? r : r.trim();
    }
    function ja(e, t, r) {
      const a = e.editField || e.key, n = typeof e.editCustomField == "string" && e.editCustomField !== "" ? e.editCustomField : null, u = mt(
        e,
        "editCustomSentinelValue"
      ), p = (typeof e.editCustomSentinelField == "string" && e.editCustomSentinelField !== "" ? e.editCustomSentinelField : null) || (u ? a : null), y = {
        primaryValue: r,
        extraUpdates: {}
      };
      if (t?.kind === "multiple")
        return y.primaryValue = Er(t.values), y;
      if (t?.kind === "item")
        return y.primaryValue = t.value, e.editSelectExtraUpdates && typeof e.editSelectExtraUpdates == "object" && t.item && typeof t.item == "object" && Object.entries(e.editSelectExtraUpdates).forEach(
          ([L, de]) => {
            typeof L != "string" || L === "" || typeof de != "string" || de === "" || (y.extraUpdates[L] = t.item[de]);
          }
        ), n && e.editCustomClearOnSelect !== !1 && (y.extraUpdates[n] = ""), p && p !== a && mt(e, "editCustomResetValueOnSelect") && (y.extraUpdates[p] = e.editCustomResetValueOnSelect), y;
      if (t?.kind !== "custom" || e.editAutocompleteAllowCustom !== !0)
        return y;
      const w = oo(
        e,
        t.input ?? t.value ?? t.label ?? ""
      ), R = Math.max(0, Number(e.editCustomMinLength || 0));
      if (w === "" || w.length < R)
        return y;
      if (n && (y.extraUpdates[n] = w), p) {
        const L = u ? e.editCustomSentinelValue : null;
        return p === a ? y.primaryValue = L : y.extraUpdates[p] = L, y;
      }
      return n && n !== a ? (mt(e, "editCustomPrimaryValueOnCustom") ? y.primaryValue = e.editCustomPrimaryValueOnCustom : y.primaryValue = null, y) : (y.primaryValue = w, y);
    }
    function so(e, t) {
      const r = _e.value, a = e.editField || e.key, n = ja(
        e,
        t,
        Me.value
      );
      Me.value = n.primaryValue, St.value = n.extraUpdates, r != null && (Pr(r, e), On(r, a)), te.value = "";
    }
    function Aa(e, t) {
      const r = e.editField || e.key, a = z.value[r] ?? null, n = ja(e, t, a);
      z.value = {
        ...z.value,
        [r]: n.primaryValue,
        ...n.extraUpdates
      }, $t(e), br(r), te.value = "";
    }
    function mn(e, t) {
      if (!t || typeof t != "object" || e?.editMultiple === !0)
        return null;
      if (e.editAutocompleteAllowCustom === !0) {
        const r = typeof e.editCustomField == "string" && e.editCustomField !== "" ? e.editCustomField : null;
        if (r && t[r] !== void 0 && t[r] !== null)
          return t[r];
      }
      return t[e.key] !== void 0 && t[e.key] !== null ? t[e.key] : null;
    }
    function uo(e, t) {
      if (!t || Object.keys(t).length === 0)
        return {};
      const r = {};
      e.editExtraValidationRules && typeof e.editExtraValidationRules == "object" && Object.entries(t).forEach(([n]) => {
        Object.prototype.hasOwnProperty.call(
          e.editExtraValidationRules,
          n
        ) && (r[n] = e.editExtraValidationRules[n]);
      }), typeof e.editCustomField == "string" && e.editCustomField !== "" && Object.prototype.hasOwnProperty.call(
        t,
        e.editCustomField
      ) && mt(e, "editCustomFieldValidationRules") && (r[e.editCustomField] = e.editCustomFieldValidationRules);
      const a = typeof e.editCustomSentinelField == "string" && e.editCustomSentinelField !== "" ? e.editCustomSentinelField : null;
      return a && Object.prototype.hasOwnProperty.call(t, a) && mt(e, "editCustomSentinelValidationRules") && (r[a] = e.editCustomSentinelValidationRules), r;
    }
    function Tr(e, t) {
      !t || typeof t != "object" || Object.entries(t).forEach(([r, a]) => {
        e[r] = a;
      });
    }
    function Ea(e, t) {
      const r = Rr(t), a = e?.booleanLabels, n = a?.true ?? a?.yes ?? e?.booleanTrueLabel ?? o("common.yes", "Ja"), u = a?.false ?? a?.no ?? e?.booleanFalseLabel ?? o("common.no", "Nee");
      return r === !0 ? n : r === !1 ? u : t ?? o("common.dash", "-");
    }
    function hn(e) {
      return e?.type === "icon" ? !0 : e?.type !== "boolean" ? !1 : e?.booleanDisplay === "icon" || e?.booleanAsIcon === !0;
    }
    function Vr(e, t) {
      return typeof e?.iconValue == "function" ? e.iconValue(t) : t?.[e?.key];
    }
    function zr(e) {
      const t = Rr(e);
      return t !== null ? t : !!e;
    }
    function co(e, t) {
      const r = Vr(e, t);
      if (e?.iconMap && typeof e.iconMap == "object") {
        const a = r ?? "default";
        return e.iconMap[a] ?? e.iconMap.default ?? (zr(r) ? e?.iconTrue || "mdi-check-circle" : e?.iconFalse || "mdi-close-circle");
      }
      return zr(r) ? e?.iconTrue || "mdi-check-circle" : e?.iconFalse || "mdi-close-circle";
    }
    function fo(e, t) {
      const r = Vr(e, t);
      if (e?.iconColorMap && typeof e.iconColorMap == "object") {
        const a = r ?? "default";
        return e.iconColorMap[a] ?? e.iconColorMap.default ?? (zr(r) ? e?.iconTrueColor || "#16a34a" : e?.iconFalseColor || "#ef4444");
      }
      return zr(r) ? e?.iconTrueColor || "#16a34a" : e?.iconFalseColor || "#ef4444";
    }
    const $a = Object.freeze({
      slate: Object.freeze({
        borderColor: "#cbd5e1",
        backgroundColor: "#f1f5f9",
        color: "#334155"
      }),
      blue: Object.freeze({
        borderColor: "#bfdbfe",
        backgroundColor: "#dbeafe",
        color: "#1d4ed8"
      }),
      green: Object.freeze({
        borderColor: "#bbf7d0",
        backgroundColor: "#dcfce7",
        color: "#15803d"
      }),
      emerald: Object.freeze({
        borderColor: "#a7f3d0",
        backgroundColor: "#d1fae5",
        color: "#047857"
      }),
      amber: Object.freeze({
        borderColor: "#fde68a",
        backgroundColor: "#fef3c7",
        color: "#92400e"
      }),
      red: Object.freeze({
        borderColor: "#fecaca",
        backgroundColor: "#fee2e2",
        color: "#b91c1c"
      }),
      orange: Object.freeze({
        borderColor: "#fed7aa",
        backgroundColor: "#ffedd5",
        color: "#c2410c"
      }),
      yellow: Object.freeze({
        borderColor: "#fde047",
        backgroundColor: "#fef9c3",
        color: "#854d0e"
      }),
      teal: Object.freeze({
        borderColor: "#99f6e4",
        backgroundColor: "#ccfbf1",
        color: "#0f766e"
      }),
      cyan: Object.freeze({
        borderColor: "#a5f3fc",
        backgroundColor: "#cffafe",
        color: "#0e7490"
      }),
      indigo: Object.freeze({
        borderColor: "#c7d2fe",
        backgroundColor: "#e0e7ff",
        color: "#4338ca"
      }),
      purple: Object.freeze({
        borderColor: "#e9d5ff",
        backgroundColor: "#f3e8ff",
        color: "#7e22ce"
      }),
      pink: Object.freeze({
        borderColor: "#fbcfe8",
        backgroundColor: "#fce7f3",
        color: "#be185d"
      }),
      rose: Object.freeze({
        borderColor: "#fecdd3",
        backgroundColor: "#ffe4e6",
        color: "#be123c"
      }),
      gray: Object.freeze({
        borderColor: "#d1d5db",
        backgroundColor: "#f3f4f6",
        color: "#374151"
      }),
      grey: Object.freeze({
        borderColor: "#d1d5db",
        backgroundColor: "#f3f4f6",
        color: "#374151"
      })
    }), Ta = Object.freeze({
      slate: Object.freeze({
        borderColor: "#475569",
        backgroundColor: "#475569",
        color: "#ffffff"
      }),
      blue: Object.freeze({
        borderColor: "#2563eb",
        backgroundColor: "#2563eb",
        color: "#ffffff"
      }),
      green: Object.freeze({
        borderColor: "#16a34a",
        backgroundColor: "#16a34a",
        color: "#ffffff"
      }),
      emerald: Object.freeze({
        borderColor: "#059669",
        backgroundColor: "#059669",
        color: "#ffffff"
      }),
      amber: Object.freeze({
        borderColor: "#f59e0b",
        backgroundColor: "#f59e0b",
        color: "#111827"
      }),
      red: Object.freeze({
        borderColor: "#dc2626",
        backgroundColor: "#dc2626",
        color: "#ffffff"
      }),
      orange: Object.freeze({
        borderColor: "#ea580c",
        backgroundColor: "#ea580c",
        color: "#ffffff"
      }),
      yellow: Object.freeze({
        borderColor: "#facc15",
        backgroundColor: "#facc15",
        color: "#111827"
      }),
      teal: Object.freeze({
        borderColor: "#0d9488",
        backgroundColor: "#0d9488",
        color: "#ffffff"
      }),
      cyan: Object.freeze({
        borderColor: "#0891b2",
        backgroundColor: "#0891b2",
        color: "#ffffff"
      }),
      indigo: Object.freeze({
        borderColor: "#4f46e5",
        backgroundColor: "#4f46e5",
        color: "#ffffff"
      }),
      purple: Object.freeze({
        borderColor: "#9333ea",
        backgroundColor: "#9333ea",
        color: "#ffffff"
      }),
      pink: Object.freeze({
        borderColor: "#db2777",
        backgroundColor: "#db2777",
        color: "#ffffff"
      }),
      rose: Object.freeze({
        borderColor: "#e11d48",
        backgroundColor: "#e11d48",
        color: "#ffffff"
      }),
      gray: Object.freeze({
        borderColor: "#4b5563",
        backgroundColor: "#4b5563",
        color: "#ffffff"
      }),
      grey: Object.freeze({
        borderColor: "#4b5563",
        backgroundColor: "#4b5563",
        color: "#ffffff"
      })
    });
    function ht(e) {
      return e == null ? !1 : String(e).trim() !== "";
    }
    function Va(e, t) {
      const r = yn(t, e);
      return r === "-" && (t?.[e?.key] === null || t?.[e?.key] === void 0 || t?.[e?.key] === "") ? "" : r;
    }
    function bo(e, t) {
      return e?.colorKey && ht(t?.[e.colorKey]) ? t[e.colorKey] : ht(e?.chipDefaultColor) ? e.chipDefaultColor : "slate";
    }
    function po(e, t) {
      return e?.type !== "chip" || !ht(Va(e, t)) ? !1 : e?.chipOnlyWhenColor ? e?.colorKey ? ht(t?.[e.colorKey]) : !1 : !0;
    }
    function za(e) {
      const t = Number(e?.editMaxSelectionChips || 0);
      return !Number.isFinite(t) || t <= 0 ? 3 : Math.max(1, Math.floor(t));
    }
    function vo(e, t) {
      const r = $r(e, t);
      return r.length === 0 ? [] : r.slice(0, za(e));
    }
    function La(e, t) {
      const r = $r(e, t);
      return r.length === 0 ? 0 : Math.max(0, r.length - za(e));
    }
    function go(e, t) {
      return e?.editMultiple !== !0 ? !1 : $r(e, t).length > 0;
    }
    function xn(e) {
      return String(e?.chipVariant || "solid").toLowerCase() === "tonal" ? "tonal" : "solid";
    }
    function Da(e, t) {
      const r = ht(t) ? String(t).trim().toLowerCase() : "", a = xn(e) === "tonal" ? $a : Ta;
      return a[r] || a.slate;
    }
    function yo(e, t) {
      const r = bo(e, t), a = ht(r) ? String(r).trim().toLowerCase() : "", n = xn(e);
      return ht(a) && (Object.prototype.hasOwnProperty.call(
        $a,
        a
      ) || Object.prototype.hasOwnProperty.call(
        Ta,
        a
      )) ? Da(e, r) : ht(r) ? n === "tonal" ? {
        borderColor: String(r),
        backgroundColor: "transparent",
        color: String(r)
      } : {
        backgroundColor: String(r),
        borderColor: "transparent",
        color: "#ffffff"
      } : Da(e, "slate");
    }
    function mo(e, t) {
      return [
        "inline-flex max-w-full items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium leading-5",
        xn(e) === "solid" ? "shadow-sm" : "",
        e?.clickable ? "transition-colors group-hover:brightness-95" : ""
      ];
    }
    function xt(e) {
      const t = Number(tt.value?.[e]), r = tr(e);
      if (Number.isFinite(t) && t > 0)
        return Math.max(r, Math.round(t));
      const a = fa(e);
      return Or(a || { key: e });
    }
    function Lr(e) {
      return e === "right" || e === "center" ? e : "left";
    }
    function ho(e) {
      const t = Lr(e?.align);
      return t === "center" ? "justify-center" : t === "right" ? "justify-end" : "justify-start";
    }
    function xo(e, t) {
      return t && Lr(e?.align) === "left" ? "pl-9" : "";
    }
    function wo(e) {
      const t = String(e?.key ?? "").toLowerCase(), r = String(e?.label ?? "").toLowerCase(), a = String(l.idKey ?? "").toLowerCase();
      return t ? t === a || t === "id" || t.endsWith("_id") ? !0 : r === "id" || r.endsWith(" id") : !1;
    }
    function ko(e, t) {
      if (wo(e))
        return !0;
      const r = String(e?.key ?? "").toLowerCase(), a = String(e?.label ?? "").toLowerCase(), n = t?.[e?.key], u = t?.[l.idKey];
      return r.includes("id") || a.includes("id") || n != null && u !== void 0 && u !== null && String(n) === String(u) ? !0 : r.includes("nummer") || r.includes("number") || r.endsWith("_nr") || r.includes("code") ? typeof n == "string" || typeof n == "number" || typeof n == "bigint" : !1;
    }
    function Co(e) {
      return e?.clickable ? "cursor-pointer" : "";
    }
    function So(e, t) {
      return e?.clickable ? ko(e, t) ? "rw-id-hover inline-flex max-w-full items-center rounded-full px-2 py-0.5 font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300" : "truncate text-blue-700 hover:underline" : "truncate";
    }
    function _o() {
      let e = 0;
      return l.checkboxColumn && (e += mr), e;
    }
    function Na(e) {
      let t = _o();
      for (let r = 0; r < e; r += 1) {
        const a = q.value[r];
        a && (t += xt(a.key));
      }
      return t;
    }
    function Dr(e, t = !1) {
      return we.value ? {
        position: "sticky",
        left: "0px",
        width: `${mr}px`,
        minWidth: `${mr}px`,
        maxWidth: `${mr}px`,
        zIndex: t ? he.stickyUtilityHeader : he.stickyUtilityBody,
        backgroundColor: t ? "rgb(248 250 252)" : "inherit"
      } : null;
    }
    function Mo(e, t) {
      const r = xt(e.key), a = {
        width: `${r}px`,
        minWidth: `${r}px`,
        maxWidth: `${r}px`,
        textAlign: Lr(e.align)
      };
      return !we.value || t >= xe.value ? a : {
        ...a,
        position: "sticky",
        left: `${Na(t)}px`,
        zIndex: he.stickyDataHeader,
        backgroundColor: "rgb(248 250 252)"
      };
    }
    function Pa(e, t) {
      const r = xt(e.key), a = {
        width: `${r}px`,
        minWidth: `${r}px`,
        maxWidth: `${r}px`,
        textAlign: Lr(e.align)
      };
      return !we.value || t >= xe.value ? a : {
        ...a,
        position: "sticky",
        left: `${Na(t)}px`,
        zIndex: he.stickyDataBody,
        backgroundColor: "inherit"
      };
    }
    function Fo(e, t, r, a) {
      const n = Pa(t, a);
      if (typeof l.cellStyle != "function")
        return n;
      const u = l.cellStyle({
        row: e,
        col: t,
        value: e[t.key],
        rowId: e[l.idKey],
        rowIndex: r,
        colIndex: a
      });
      return !u || typeof u != "object" ? n : {
        ...n,
        ...u
      };
    }
    function Oo(e, t, r, a) {
      const n = Fo(e, t, r, a);
      return Br(e, t) ? {
        ...n,
        zIndex: he.rowMenuOverlay + 5
      } : $n(e, a) && En(e[l.idKey]) ? {
        ...n,
        zIndex: he.rowMenuOverlay + 1
      } : n;
    }
    function Ba(e, t) {
      return Pa(e, t);
    }
    function Nr(e) {
      return e < xe.value ? "mdi-lock" : e === xe.value ? "mdi-lock-open-variant" : "";
    }
    function Io(e) {
      if (!we.value)
        return;
      const t = Math.max(0, q.value.length), r = e === xe.value ? xe.value + 1 : e;
      xe.value = Math.min(Math.max(r, 0), t), Hr(), un(!0);
    }
    function Ka(e) {
      if (!vt)
        return;
      const t = e.clientX - vt.startX, r = Math.max(
        vt.minWidth,
        Math.round(vt.startWidth + t)
      );
      tt.value = {
        ...tt.value,
        [vt.key]: r
      };
    }
    function Ro(e, t) {
      vt = {
        key: t,
        startX: e.clientX,
        startWidth: xt(t),
        minWidth: tr(t)
      }, window.addEventListener("mousemove", Ka), window.addEventListener("mouseup", wn);
    }
    function wn() {
      vt && (window.removeEventListener("mousemove", Ka), window.removeEventListener("mouseup", wn), vt = null, hl());
    }
    function jo(e, t, r, a) {
      return typeof l.cellClass != "function" ? null : l.cellClass({
        row: e,
        col: t,
        value: e[t.key],
        rowId: e[l.idKey],
        rowIndex: r,
        colIndex: a
      });
    }
    function Ao(e) {
      const t = B.value.find((r) => r.key === e);
      t && (t.selected = !t.selected);
    }
    function qa(e, t) {
      const r = B.value.findIndex(
        (i) => i.key === e
      );
      if (r < 0)
        return;
      const a = r + t;
      if (a < 0 || a >= B.value.length)
        return;
      const n = [...B.value], [u] = n.splice(r, 1);
      n.splice(a, 0, u), B.value = n;
    }
    function Eo(e, t) {
      if (!e || !t || e === t)
        return;
      const r = B.value.findIndex(
        (i) => i.key === e
      ), a = B.value.findIndex(
        (i) => i.key === t
      );
      if (r < 0 || a < 0 || r === a)
        return;
      const n = [...B.value], [u] = n.splice(r, 1);
      n.splice(a, 0, u), B.value = n;
    }
    function $o(e, t) {
      if (Lt.value = e, t?.dataTransfer) {
        t.dataTransfer.effectAllowed = "move";
        try {
          t.dataTransfer.setData("text/plain", String(e)), ka(t);
        } catch {
          return;
        }
      }
    }
    function To(e, t) {
      Lt.value && (t.preventDefault(), _t.value = e, t?.dataTransfer && (t.dataTransfer.dropEffect = "move"));
    }
    function Vo(e, t) {
      t.preventDefault();
      const r = t?.dataTransfer?.getData?.("text/plain") || null, a = Lt.value || r;
      Eo(a, e), kn();
    }
    function kn() {
      Lt.value = null, _t.value = null;
    }
    function zo(e) {
      oe.value = oe.value === e ? null : e, ye.value[e] || (ye.value[e] = rr(
        Re.value[e]
      ));
    }
    function Lo(e) {
      return Object.prototype.hasOwnProperty.call(
        gt.value,
        e
      );
    }
    function Do(e) {
      delete se.value[e], delete ye.value[e], oe.value = null;
    }
    function No(e, t) {
      if (ye.value[e] = t, t === "tussen") {
        const r = se.value[e];
        (!r || typeof r != "object") && (se.value[e] = { from: "", to: "" });
        return;
      }
      typeof se.value[e] == "object" && (se.value[e] = "");
    }
    function Wa(e, t) {
      se.value[e] = t;
    }
    function Ha(e, t, r) {
      const a = se.value[e];
      (!a || typeof a != "object") && (se.value[e] = { from: "", to: "" }), se.value[e] = {
        ...se.value[e],
        [t]: r
      };
    }
    function Po() {
      se.value = {}, ye.value = {}, oe.value = null, dn();
    }
    function Bo(e, t) {
      return t === "tussen" ? "date" : e === "number" ? "number" : e === "date" || e === "datetime" ? "date" : "text";
    }
    function Ua() {
      Y.value = 1, ve.value = W.value, Ie.value = [];
    }
    function Ko(e) {
      const [t] = e;
      if (!(!t?.isIntersecting || $e.value)) {
        if (Qt.value) {
          if (Y.value >= Bt.value)
            return;
          const r = Y.value + 1;
          if (l.managed) {
            Kt({ append: !0, pageOverride: r });
            return;
          }
          Y.value = r;
          return;
        }
        ve.value >= Pt.value.length || (ve.value = Math.min(
          ve.value + W.value,
          Pt.value.length
        ));
      }
    }
    function Cn() {
      pt && (pt.disconnect(), pt = null), !(!ze.value || !ie.value) && (pt = new IntersectionObserver(Ko, {
        root: Te.value,
        rootMargin: "200px",
        threshold: 0
      }), pt.observe(ie.value));
    }
    function Et(e = null) {
      if (!l.inlineCreate)
        return;
      const t = e == null;
      t && !ze.value && (Y.value = Bt.value), P.value = e, Ve.value = !0, Qe.value = null, te.value = "", fr(), t && ae(() => {
        ol();
      });
    }
    function qo(e) {
      return !Ve.value || P.value === null || P.value === void 0 ? !1 : e?.[l.idKey] === P.value;
    }
    function qt() {
      if (!ze.value)
        return;
      const e = V.value.length;
      ve.value = Math.max(
        W.value,
        Math.min(Math.max(ve.value, e), e)
      );
    }
    function or(e) {
      if (!e || typeof e != "object")
        return;
      if (P.value === null || P.value === void 0) {
        V.value = [...V.value, e], qt();
        return;
      }
      const t = V.value.findIndex(
        (a) => a?.[l.idKey] === P.value
      );
      if (t < 0) {
        V.value = [...V.value, e];
        return;
      }
      const r = [...V.value];
      r.splice(t, 0, e), V.value = r, qt();
    }
    function Wo(e, t) {
      if (e == null || !t || typeof t != "object")
        return;
      const r = V.value.findIndex(
        (n) => n?.[l.idKey] === e
      );
      if (r < 0) {
        or(t);
        return;
      }
      const a = [...V.value];
      a[r] = {
        ...a[r],
        ...t
      }, V.value = a, qt();
    }
    function Ho(e) {
      e != null && (V.value = V.value.filter(
        (t) => t?.[l.idKey] !== e
      ), qt());
    }
    function wt() {
      Ve.value = !1, fr();
    }
    function Sn() {
      const e = V.value.map((t) => Number(t?.[l.idKey])).filter((t) => Number.isFinite(t));
      return e.length > 0 ? Math.max(...e) + 1 : Date.now();
    }
    function Uo() {
      const e = l.manualOrderField;
      if (!e)
        return null;
      const t = V.value.map((r) => Number(r?.[e])).filter((r) => Number.isFinite(r));
      return t.length > 0 ? Math.max(...t) + 1e3 : 1e3;
    }
    function Ga(e, t, r) {
      const a = /* @__PURE__ */ new Set([
        "validationType",
        "manualOrdering",
        "manualOrderField",
        "insertAboveId"
      ]), i = {
        ...Object.entries(t || {}).reduce(
          (y, [w, R]) => (a.has(w) || (y[w] = R), y),
          {}
        ),
        ...e && typeof e == "object" ? e : {}
      }, p = r?.[l.idKey] ?? r?.id;
      if ((i[l.idKey] === void 0 || i[l.idKey] === null) && p !== void 0 && p !== null && (i[l.idKey] = p), (i[l.idKey] === void 0 || i[l.idKey] === null) && (i[l.idKey] = Sn()), l.manualOrdering && (P.value === null || P.value === void 0)) {
        const y = l.manualOrderField;
        if (y && (i[y] === void 0 || i[y] === null)) {
          const w = Uo();
          w !== null && (i[y] = w);
        }
      }
      return (!Object.prototype.hasOwnProperty.call(i, l.idKey) || i[l.idKey] === void 0 || i[l.idKey] === null) && (i[l.idKey] = Sn()), i;
    }
    function Go(e) {
      return Array.isArray(e) ? e.length > 0 ? String(e[0]) : "" : e == null ? "" : String(e);
    }
    function Xa(e) {
      const t = e?.response?.data ?? {}, r = t?.errors, a = {};
      return r && typeof r == "object" && Object.entries(r).forEach(([n, u]) => {
        const i = String(n || "").trim();
        if (i === "")
          return;
        const p = Go(u);
        p !== "" && (a[i] = p);
      }), {
        status: Number(e?.response?.status || 0),
        message: typeof t?.message == "string" ? t.message : "",
        errors: a
      };
    }
    function Xo(e) {
      return e ? typeof e == "string" ? e.split("|").map((r) => r.trim()).includes("required") : Array.isArray(e) ? e.some((t) => typeof t == "string" ? t.split(":")[0] === "required" : !1) : !1 : !1;
    }
    function sr(e) {
      return !e || typeof e != "object" ? !1 : e.required === !0 ? !0 : e.required === !1 ? !1 : Xo(e.validationRules);
    }
    function ur(e) {
      return e == null ? !0 : typeof e == "string" ? e.trim() === "" : Array.isArray(e) ? e.length === 0 : !1;
    }
    function dr(e) {
      if (typeof e?.requiredHighlightColor == "string") {
        const t = e.requiredHighlightColor.trim();
        if (t !== "")
          return t;
      }
      return "rgba(59, 130, 246, 0.1)";
    }
    function ut() {
      te.value = "";
    }
    function _n() {
      const e = String(l.validationMode || "both").trim().toLowerCase();
      return e === "client" || e === "server" || e === "both" ? e : "both";
    }
    function Ja(e, t = []) {
      const r = e == null || e === "" ? t : e, n = (Array.isArray(r) ? r : [r]).map(
        (u) => String(u || "").trim().toLowerCase()
      ).filter((u) => u !== "");
      return n.length > 0 ? n : [...t];
    }
    function Jo(e) {
      return Ja(
        e?.clientValidationOn,
        Ja(
          l.clientValidationOn,
          Yr
        )
      );
    }
    function Yo(e, t) {
      if (_n() === "server")
        return !1;
      const a = String(t || "save").toLowerCase();
      return Jo(e).includes(a) ? !!(typeof l.validationAdapter == "function" || typeof e?.clientValidate == "function" || e?.validationRules || e?.required === !0) : !1;
    }
    function Qo(e, t) {
      const r = String(e?.editField || e?.key || "");
      return typeof e?.editCustomField == "string" && e.editCustomField === t && Object.prototype.hasOwnProperty.call(
        e,
        "editCustomFieldValidationRules"
      ) ? e.editCustomFieldValidationRules : typeof e?.editCustomSentinelField == "string" && e.editCustomSentinelField === t && Object.prototype.hasOwnProperty.call(
        e,
        "editCustomSentinelValidationRules"
      ) ? e.editCustomSentinelValidationRules : t === r || t === String(e?.key || "") ? e?.validationRules ? e.validationRules : e?.required === !0 ? "required" : null : e?.editExtraValidationRules && typeof e.editExtraValidationRules == "object" && Object.prototype.hasOwnProperty.call(
        e.editExtraValidationRules,
        t
      ) ? e.editExtraValidationRules[t] : null;
    }
    function Ya(e) {
      if (e == null || e === !0)
        return null;
      if (e === !1)
        return o("validation.invalid_value", "Ongeldige waarde.");
      if (typeof e == "string")
        return e.trim() === "" ? null : e;
      if (typeof e == "object") {
        if (e.valid === !0)
          return null;
        if (typeof e.message == "string" && e.message.trim() !== "")
          return e.message;
      }
      return null;
    }
    function Qa({
      column: e,
      field: t,
      value: r,
      trigger: a,
      contextMode: n,
      row: u,
      draft: i
    }) {
      const p = String(a || "save").toLowerCase();
      if (!Yo(e, p))
        return null;
      const y = {
        value: r,
        field: t,
        column: e,
        row: u,
        draft: i,
        trigger: p,
        mode: n,
        rules: Qo(e, t)
      };
      if (typeof l.validationAdapter == "function") {
        const R = l.validationAdapter(y), L = Ya(R);
        if (L)
          return L;
      }
      if (typeof e?.clientValidate == "function") {
        const R = e.clientValidate(y), L = Ya(R);
        if (L)
          return L;
      }
      const w = y.rules;
      return w ? ou(r, w, {
        fieldLabel: String(
          e?.label || t || o("validation.this_field", "Dit veld")
        )
      }) : null;
    }
    function $t(e) {
      cr(e, !0).forEach((r) => {
        br(r);
      }), br(e?.key);
    }
    function Pr(e, t) {
      cr(t, !0).forEach((a) => {
        On(e, a);
      }), On(e, t?.key);
    }
    function cr(e, t = !1) {
      const r = String(e?.editField || e?.key || ""), a = [];
      if (r !== "" && a.push(r), !t)
        return a;
      const n = typeof e?.editCustomField == "string" ? e.editCustomField : "";
      n !== "" && !a.includes(n) && a.push(n);
      const u = typeof e?.editCustomSentinelField == "string" ? e.editCustomSentinelField : "";
      return u !== "" && !a.includes(u) && a.push(u), e?.editExtraValidationRules && typeof e.editExtraValidationRules == "object" && Object.keys(e.editExtraValidationRules).forEach((i) => {
        const p = String(i || "").trim();
        p !== "" && !a.includes(p) && a.push(p);
      }), a;
    }
    function Za(e, t, r = !1) {
      const a = cr(e, r), n = {};
      return a.forEach((u) => {
        const i = z.value[u], p = Qa({
          column: e,
          field: u,
          value: i,
          trigger: t,
          contextMode: "create",
          row: null,
          draft: z.value
        });
        p && (n[u] = p);
      }), n;
    }
    function Zo(e, t, r, a = !1) {
      const n = String(e?.editField || e?.key || ""), i = (a ? cr(e, !0) : [n]).filter((w) => w !== ""), p = {
        [n]: Me.value,
        ...St.value
      }, y = {};
      return i.forEach((w) => {
        const R = Qa({
          column: e,
          field: w,
          value: p[w],
          trigger: r,
          contextMode: "edit",
          row: t,
          draft: p
        });
        R && (y[w] = R);
      }), y;
    }
    function el(e, t, r = !1) {
      const a = Za(e, t, r);
      return cr(e, r).forEach((u) => {
        br(u);
      }), br(e.key), Object.keys(a).length === 0 ? !0 : (Mn({
        ...ge.value,
        ...a
      }), te.value = o(
        "validation.not_saved_check_fields",
        "Niet bewaard. Controleer de rood gemarkeerde velden."
      ), !1);
    }
    function fr() {
      ge.value = {};
    }
    function br(e) {
      const t = String(e || "");
      if (t === "" || !ge.value[t])
        return;
      const r = { ...ge.value };
      delete r[t], ge.value = r;
    }
    function Mn(e) {
      ge.value = e && typeof e == "object" ? e : {};
    }
    function ke(e) {
      const t = String(e?.editField || e?.key || ""), r = typeof e?.editCustomField == "string" ? e.editCustomField : "", a = typeof e?.editCustomSentinelField == "string" ? e.editCustomSentinelField : "";
      return ge.value[t] || ge.value[String(e?.key || "")] || (r ? ge.value[r] : "") || (a ? ge.value[a] : "") || "";
    }
    function Fn(e) {
      const t = String(e ?? "");
      if (t === "" || !D.value[t])
        return;
      const r = { ...D.value };
      delete r[t], D.value = r;
    }
    function tl(e, t) {
      const r = String(e ?? "");
      r !== "" && (D.value = {
        ...D.value,
        [r]: t && typeof t == "object" ? t : {}
      });
    }
    function On(e, t) {
      const r = String(e ?? ""), a = String(t || "");
      if (r === "" || a === "")
        return;
      const n = D.value[r];
      if (!n || !n[a])
        return;
      const u = { ...n };
      delete u[a], D.value = {
        ...D.value,
        [r]: u
      };
    }
    function dt(e, t) {
      const r = String(e ?? "");
      if (r === "")
        return "";
      const a = D.value[r] || {}, n = String(t?.editField || t?.key || ""), u = typeof t?.editCustomField == "string" ? t.editCustomField : "", i = typeof t?.editCustomSentinelField == "string" ? t.editCustomSentinelField : "";
      return a[n] || a[String(t?.key || "")] || (u ? a[u] : "") || (i ? a[i] : "") || "";
    }
    function rl(e) {
      const t = String(e?.editField || e?.key || "");
      if (!sr(e) || e?.requiredHighlight === !1 || ke(e))
        return null;
      const r = z.value[t];
      return ur(r) ? {
        backgroundColor: dr(e)
      } : null;
    }
    function es(e, t) {
      return !sr(t) || t?.requiredHighlight === !1 || dt(e?.[l.idKey], t) || !ur(Me.value) ? null : {
        backgroundColor: dr(t)
      };
    }
    async function nl(e = "save") {
      if (!l.inlineCreate || Ke.value)
        return !1;
      const t = ts(), r = {
        ...z.value,
        validationType: "model"
      };
      te.value = "", fr();
      const a = {};
      if (vr().forEach((i) => {
        const p = Za(
          i,
          e,
          e === "save" || e === "tab" || e === "blur"
        );
        Object.entries(p).forEach(([y, w]) => {
          a[y] || (a[y] = w);
        });
      }), Object.keys(a).length > 0)
        return Mn(a), te.value = o(
          "validation.not_saved_check_fields",
          "Niet bewaard. Controleer de rood gemarkeerde velden."
        ), !1;
      if (_n() === "client") {
        const i = {
          ...z.value,
          [l.idKey]: Sn()
        };
        return or(i), wt(), !0;
      }
      if (l.manualOrdering && (r.manualOrdering = !0, r.manualOrderField = l.manualOrderField), P.value !== null && P.value !== void 0 && (r.insertAboveId = P.value), !t) {
        const i = {
          ...z.value,
          [l.idKey]: Date.now()
        };
        return or(i), wt(), !0;
      }
      let u = null;
      if (!l.managed) {
        const i = Ga({}, r, {});
        or(i), u = i?.[l.idKey] ?? null;
      }
      Ke.value = !0;
      try {
        const y = (await rt().post(t, r))?.data ?? {}, w = Ga(
          y?.data ?? y,
          r,
          y
        );
        return l.managed ? await Kt({
          append: !1,
          pageOverride: Y.value
        }) : w && (u != null ? Wo(u, w) : or(w), (P.value === null || P.value === void 0) && (Y.value = Bt.value)), wt(), !0;
      } catch (i) {
        u != null && Ho(u);
        const p = Xa(i);
        return Object.keys(p.errors).length > 0 ? (Mn(p.errors), te.value = o(
          "validation.not_saved_check_fields",
          "Niet bewaard. Controleer de rood gemarkeerde velden."
        )) : p.message ? te.value = p.message : te.value = o(
          "validation.not_saved_unexpected",
          "Niet bewaard door een onverwachte fout."
        ), !1;
      } finally {
        Ke.value = !1;
      }
    }
    function ts() {
      return typeof l.inlineCreateRoute == "function" ? l.inlineCreateRoute() : typeof l.inlineCreateRoute == "string" && l.inlineCreateRoute ? l.inlineCreateRoute : typeof l.dataSource?.path == "string" && l.dataSource.path ? `${l.dataSource.path.replace(/\/$/, "")}/inline-create` : null;
    }
    function Tt(e, t) {
      if (!t?.editable)
        return;
      const r = e?.[l.idKey];
      r != null && (Ve.value || (_e.value = r, Ze.value = t.key, Me.value = t.editMultiple === !0 ? Er(e[t.editField || t.key]) : e[t.editField || t.key] ?? "", St.value = {}, te.value = "", Fn(r), fs(r, t.key)));
    }
    function Vt(e, t) {
      return e == null || t === null || t === void 0 ? !1 : String(e) === String(t);
    }
    function Br(e, t) {
      return Vt(_e.value, e?.[l.idKey]) && Ze.value === t?.key;
    }
    function Kr(e, t) {
      return Vt(_e.value, e) && Ze.value === t;
    }
    function Wt() {
      _e.value !== null && _e.value !== void 0 && Fn(_e.value), _e.value = null, Ze.value = null, Me.value = "", St.value = {};
    }
    async function qr(e = "save") {
      if (_e.value === null || Ze.value === null)
        return !1;
      if (et.value)
        return et.value;
      const t = _e.value, r = Ze.value, a = Me.value, n = { ...St.value }, u = (async () => {
        const i = bs(t), p = q.value.find(
          (Je) => Je.key === r
        );
        if (!i || !p)
          return Kr(t, r) && Wt(), !1;
        const y = p.editField || p.key, w = a, R = { ...n }, L = rs(t);
        te.value = "", Fn(t);
        const de = Zo(
          p,
          i,
          e,
          e === "save"
        );
        if (Object.keys(de).length > 0)
          return tl(t, de), te.value = o(
            "validation.not_saved_check_fields",
            "Niet bewaard. Controleer de rood gemarkeerde velden."
          ), !1;
        if (_n() === "client" || !L)
          return In(i, p, w), Tr(i, R), Kr(t, r) && Wt(), !0;
        Ke.value = !0;
        try {
          const Je = rt(), nt = {
            field: y,
            value: w,
            validationType: p.validationType || "model"
          };
          if (Object.keys(R).length > 0) {
            nt.extraUpdates = Object.entries(R).map(
              ([ct, Jt]) => ({
                field: ct,
                value: Jt
              })
            );
            const De = uo(
              p,
              R
            );
            Object.keys(De).length > 0 && (nt.extraValidationRules = De);
          }
          nt.validationType === "client" && p.validationRules && (nt.validationRules = p.validationRules);
          const zt = await Je.patch(L, nt), Ce = zt?.data?.value !== void 0 ? zt.data.value : w, Ee = zt?.data?.updated && typeof zt.data.updated == "object" ? zt.data.updated : null;
          return In(i, p, Ce), Ee ? Tr(i, Ee) : Tr(i, R), Kr(t, r) && Wt(), !0;
        } catch (Je) {
          const nt = Xa(Je);
          return Object.keys(nt.errors).length > 0 ? (tl(t, nt.errors), te.value = o(
            "validation.not_saved_check_fields",
            "Niet bewaard. Controleer de rood gemarkeerde velden."
          )) : nt.message ? te.value = nt.message : te.value = o(
            "validation.not_saved_unexpected",
            "Niet bewaard door een onverwachte fout."
          ), !1;
        } finally {
          Ke.value = !1;
        }
      })();
      et.value = u;
      try {
        return await u;
      } finally {
        et.value === u && (et.value = null);
      }
    }
    function In(e, t, r) {
      const a = t.editField || t.key;
      if (e[a] = r, a !== t.key) {
        const n = t.editDisplayFields;
        if (n && typeof n == "object") {
          const u = t.editItemValue || "value", i = Array.isArray(t.editItems) ? t.editItems.find(
            (p) => String(p?.[u]) === String(r)
          ) : null;
          i && Object.entries(n).forEach(
            ([p, y]) => {
              e[p] = i[y];
            }
          );
        }
      }
      e[t.key] = e[t.key] ?? r;
    }
    function rs(e) {
      return typeof l.inlineUpdateRoute == "function" ? l.inlineUpdateRoute(e) : typeof l.inlineUpdateRoute == "string" && l.inlineUpdateRoute ? l.inlineUpdateRoute.includes(":id") ? l.inlineUpdateRoute.replace(":id", String(e)) : l.inlineUpdateRoute.includes("{id}") ? l.inlineUpdateRoute.replace("{id}", String(e)) : `${l.inlineUpdateRoute.replace(/\/$/, "")}/${e}/inline` : typeof l.dataSource?.path == "string" && l.dataSource.path ? `${l.dataSource.path.replace(/\/$/, "")}/${e}/inline` : null;
    }
    function ns(e) {
      return typeof l.inlineDeleteRoute == "function" ? l.inlineDeleteRoute(e) : typeof l.inlineDeleteRoute == "string" && l.inlineDeleteRoute ? l.inlineDeleteRoute.includes(":id") ? l.inlineDeleteRoute.replace(":id", String(e)) : l.inlineDeleteRoute.includes("{id}") ? l.inlineDeleteRoute.replace("{id}", String(e)) : `${l.inlineDeleteRoute.replace(/\/$/, "")}/${e}` : typeof l.dataSource?.path == "string" && l.dataSource.path ? `${l.dataSource.path.replace(/\/$/, "")}/${e}` : null;
    }
    async function as(e) {
      const t = e?.[l.idKey];
      if (t == null)
        return;
      let r = {};
      if (typeof l.beforeInlineDelete == "function") {
        const n = await l.beforeInlineDelete({ id: t, row: e });
        if (n === !1)
          return;
        if (n && typeof n == "object") {
          if (n.proceed === !1)
            return;
          n.payload && typeof n.payload == "object" && (r = n.payload);
        }
      }
      const a = ns(t);
      if (!a) {
        V.value = V.value.filter(
          (n) => n[l.idKey] !== t
        ), qt();
        return;
      }
      Ke.value = !0;
      try {
        await rt().delete(a, { data: r }), V.value = V.value.filter(
          (u) => u[l.idKey] !== t
        ), qt(), Ie.value = Ie.value.filter(
          (u) => u[l.idKey] !== t
        );
      } finally {
        Ke.value = !1;
      }
    }
    function ls(e) {
      if (typeof l.rowMenuItems == "function") {
        const r = l.rowMenuItems(e);
        if (Array.isArray(r))
          return r;
      }
      if (Array.isArray(l.rowMenuItems) && l.rowMenuItems.length)
        return l.rowMenuItems;
      const t = [
        {
          key: "edit",
          label: o("actions.edit", "Bewerken"),
          icon: "mdi-pencil",
          disabled: At.value.length === 0
        }
      ];
      return l.inlineCreate && l.manualOrdering && t.push({
        key: "insertAbove",
        label: o("actions.insert_above", "Invoegen boven"),
        icon: "mdi-arrow-up-bold-box-outline"
      }), l.inlineCreate && t.push({
        key: "insert",
        label: o("actions.new_row", "Nieuwe rij"),
        icon: "mdi-plus-box-outline"
      }), t.push({
        key: "delete",
        label: o("actions.delete", "Verwijderen"),
        icon: "mdi-delete-outline"
      }), t;
    }
    async function is(e, t) {
      if (v("on-row-menu-item-click", { item: e, row: t }), Qe.value = null, !(!e || e.disabled)) {
        if (e.key === "edit") {
          const r = At.value[0];
          r && Tt(t, r);
          return;
        }
        if (e.key === "insertAbove") {
          Et(t[l.idKey]);
          return;
        }
        if (e.key === "insert") {
          Et(null);
          return;
        }
        e.key === "delete" && await as(t);
      }
    }
    function Ht(e) {
      e?.editable && el(e, "blur", !0);
    }
    async function Rn(e, t) {
      !t?.editable || !Br(e, t) || await qr("blur");
    }
    async function jn(e) {
      if (!e.defaultPrevented) {
        if (e.key === "Enter") {
          e.preventDefault(), await qr();
          return;
        }
        if (e.key === "Escape") {
          e.preventDefault(), Wt();
          return;
        }
        if (e.key === "Tab") {
          e.preventDefault(), await pr(e.shiftKey ? -1 : 1, !1, "tab");
          return;
        }
        if (e.key === "ArrowLeft") {
          e.preventDefault(), await pr(-1, !1);
          return;
        }
        if (e.key === "ArrowRight") {
          e.preventDefault(), await pr(1, !1);
          return;
        }
        if (e.key === "ArrowUp") {
          e.preventDefault(), await pr(-1, !0);
          return;
        }
        e.key === "ArrowDown" && (e.preventDefault(), await pr(1, !0));
      }
    }
    function os(e, t, r) {
      const a = us(), n = a.findIndex(
        (i) => Vt(i.rowId, t) && i.columnKey === r
      );
      if (n < 0)
        return { target: null, boundary: !1 };
      const u = n + e;
      return u < 0 || u >= a.length ? { target: null, boundary: !0 } : { target: a[u], boundary: !1 };
    }
    function ss(e, t, r) {
      if (!r)
        return null;
      const a = Z.value.findIndex(
        (p) => Vt(p[l.idKey], t)
      );
      if (a < 0)
        return null;
      const n = a + e;
      if (n < 0 || n >= Z.value.length)
        return null;
      const u = Z.value[n], i = q.value.find(
        (p) => p.key === r
      );
      return !u || !i || !i.editable ? null : {
        row: u,
        column: i
      };
    }
    async function pr(e, t = !1, r = "save") {
      if (_e.value === null || Ze.value === null)
        return;
      const a = _e.value, n = Ze.value, u = t ? ss(e, a, n) : null, i = t ? { target: null, boundary: !1 } : os(e, a, n);
      if (await qr(r)) {
        if (t) {
          if (u) {
            Tt(u.row, u.column);
            return;
          }
          if (e > 0 && l.inlineCreate) {
            const y = q.value.find(
              (w) => w.key === n && w.editable
            );
            if (!y)
              return;
            Et(null), await ae(), gr(y);
          }
          return;
        }
        if (!i.target) {
          i.boundary && e > 0 && l.inlineCreate && Et(null);
          return;
        }
        Tt(i.target.row, i.target.column);
      }
    }
    async function Ut(e) {
      if (!e.defaultPrevented) {
        if (e.key === "Enter") {
          e.preventDefault(), await nl();
          return;
        }
        if (e.key === "Escape") {
          e.preventDefault(), wt();
          return;
        }
        if (e.key === "Tab") {
          e.preventDefault();
          const t = vr(), r = document.activeElement?.getAttribute("data-create-field"), a = t.find(
            (u) => (u.editField || u.key) === r
          ) ?? null;
          if (a && !el(a, "tab", !0))
            return;
          if (e.shiftKey) {
            if (t.findIndex(
              (i) => (i.editField || i.key) === r
            ) <= 0) {
              const i = cs();
              await ll(i);
              return;
            }
            il(-1);
            return;
          }
          if (t.length === 0)
            return;
          const n = t.findIndex(
            (u) => (u.editField || u.key) === r
          );
          if (n < 0) {
            gr(t[0]);
            return;
          }
          if (n >= t.length - 1) {
            const u = P.value === null || P.value === void 0;
            await nl("tab") && u && (await ae(), Et(null));
            return;
          }
          il(1);
          return;
        }
        if (e.key === "ArrowUp" || e.key === "ArrowDown") {
          e.preventDefault();
          const t = document.activeElement?.getAttribute("data-create-field");
          if (!t)
            return;
          const r = ds(
            e.key === "ArrowUp" ? -1 : 1,
            t
          );
          await ll(r);
        }
      }
    }
    function us() {
      const e = [];
      return Z.value.forEach((t) => {
        q.value.forEach((r) => {
          r.editable && e.push({
            rowId: t[l.idKey],
            columnKey: r.key,
            row: t,
            column: r
          });
        });
      }), e;
    }
    function vr() {
      return q.value.filter((e) => e.editable);
    }
    function al() {
      if (!Ve.value)
        return null;
      if (P.value === null || P.value === void 0)
        return Z.value.length;
      const e = Z.value.findIndex(
        (t) => Vt(t?.[l.idKey], P.value)
      );
      return e < 0 ? Z.value.length : e;
    }
    function ds(e, t) {
      const r = vr().find(
        (p) => (p.editField || p.key) === t
      );
      if (!r)
        return null;
      const a = al();
      if (a === null)
        return null;
      const n = e < 0 ? a - 1 : a;
      if (n < 0 || n >= Z.value.length)
        return null;
      const u = Z.value[n];
      if (!u)
        return null;
      const i = q.value.find(
        (p) => p.key === r.key && p.editable
      );
      return i ? {
        row: u,
        column: i
      } : null;
    }
    function cs() {
      const e = al();
      if (e === null)
        return null;
      const t = e - 1;
      if (t < 0 || t >= Z.value.length)
        return null;
      const r = Z.value[t], a = At.value[At.value.length - 1];
      return !r || !a ? null : {
        row: r,
        column: a
      };
    }
    async function ll(e) {
      !e?.row || !e?.column || (wt(), await ae(), Tt(e.row, e.column));
    }
    function il(e) {
      const t = vr();
      if (t.length === 0)
        return;
      const a = document.activeElement?.getAttribute("data-create-field"), n = t.findIndex(
        (i) => (i.editField || i.key) === a
      );
      if (n < 0) {
        gr(t[0]);
        return;
      }
      const u = n + e;
      u < 0 || u >= t.length || gr(t[u]);
    }
    function gr(e) {
      const t = e.editField || e.key, r = Ot.get(t);
      r && (typeof r.scrollIntoView == "function" && r.scrollIntoView({ block: "nearest", inline: "nearest" }), r.focus(), typeof r.select == "function" && r.select());
    }
    function ol() {
      const e = Te.value;
      if (e) {
        if (typeof e.scrollTo == "function") {
          e.scrollTo({ top: e.scrollHeight, behavior: "smooth" });
          return;
        }
        e.scrollTop = e.scrollHeight;
      }
    }
    function sl() {
      ae(() => {
        const e = vr();
        e.length !== 0 && gr(e[0]);
      });
    }
    function An(e, t, r) {
      const a = `${String(e)}::${t}`;
      if (!r) {
        Ft.delete(a);
        return;
      }
      Ft.set(a, r);
    }
    function Gt(e, t) {
      if (!t) {
        Ot.delete(e);
        return;
      }
      Ot.set(e, t);
    }
    function fs(e, t) {
      ae(() => {
        const r = `${String(e)}::${t}`, a = Ft.get(r);
        a && (a.focus(), typeof a.select == "function" && a.select());
      });
    }
    function bs(e) {
      const t = V.value.find(
        (r) => Vt(r[l.idKey], e)
      );
      return t || Ie.value.find(
        (r) => Vt(r[l.idKey], e)
      );
    }
    function rt() {
      if (!window?.axios)
        throw new Error("window.axios is not available.");
      return window.axios;
    }
    function ul(e) {
      Qe.value = Qe.value === e ? null : e;
    }
    function En(e) {
      return Qe.value === e;
    }
    function $n(e, t) {
      return !l.rowMenu || t !== 0 ? !1 : e?.[l.idKey] !== void 0 && e?.[l.idKey] !== null;
    }
    function dl(e) {
      const t = e?.[l.idKey];
      return t == null ? !1 : Ct.value === t;
    }
    function ps(e) {
      const t = e?.[l.idKey];
      return t == null ? !1 : En(t) || dl(e);
    }
    function vs(e, t) {
      return "border-b border-slate-100 last:border-b-0";
    }
    function gs(e, t) {
      return dl(e) ? "rgb(241 245 249)" : ot.value && t === qe.value ? "rgb(245 247 250)" : null;
    }
    function cl(e, t, r) {
      const a = gs(t, r);
      return a ? {
        ...e || {},
        backgroundColor: a
      } : e;
    }
    function ys(e) {
      const t = e?.[l.idKey];
      Ct.value = t ?? null;
    }
    function ms(e) {
      const t = e?.[l.idKey];
      t != null && Ct.value === t && (Ct.value = null);
    }
    function hs(e) {
      ir(e), ot.value = !0;
    }
    function fl() {
      ce.value = !1, re.value = !1, st.value = !1, We.value = !1, fe.value = !1, oe.value = null, Qe.value = null, kn();
    }
    function bl(e) {
      if (!le.value)
        return;
      const t = e.target;
      if (!(t instanceof HTMLElement))
        return;
      if (!le.value.contains(t)) {
        fl(), ot.value = !1;
        return;
      }
      ot.value = !0;
    }
    function pl(e) {
      if (!le.value)
        return;
      const t = e.target;
      t instanceof HTMLElement && (ot.value = le.value.contains(t));
    }
    function vl(e) {
      if (!le.value)
        return;
      const t = e.target;
      if (!(t instanceof HTMLElement))
        return;
      const r = le.value.contains(t);
      if (r && (ot.value = !0), !(!r && !ot.value)) {
        if (e.key === "Escape") {
          if (xs(t))
            return;
          if (fe.value) {
            e.preventDefault(), fe.value = !1;
            return;
          }
          if (We.value) {
            e.preventDefault(), We.value = !1;
            return;
          }
          if (Qe.value !== null || oe.value !== null || re.value || ce.value) {
            e.preventDefault(), fl();
            return;
          }
          if (Ve.value) {
            e.preventDefault(), wt();
            return;
          }
          _e.value !== null && (e.preventDefault(), Wt());
          return;
        }
        if (!ws(t)) {
          if (e.key === "Insert" && l.inlineCreate) {
            e.preventDefault(), Et(null);
            return;
          }
          if (e.altKey && e.key.toLowerCase() === "m" && l.rowMenu) {
            e.preventDefault();
            const a = Z.value[qe.value];
            a && ul(a[l.idKey]);
            return;
          }
          if (e.key === "ArrowDown") {
            e.preventDefault(), ir(qe.value + 1);
            return;
          }
          if (e.key === "ArrowUp") {
            e.preventDefault(), ir(qe.value - 1);
            return;
          }
          if (e.key === "Enter") {
            const a = Z.value[qe.value], n = At.value[0];
            a && n && (e.preventDefault(), Tt(a, n));
          }
        }
      }
    }
    function xs(e) {
      const t = e.closest("[data-rw-autocomplete-input]");
      return t ? t.getAttribute("aria-expanded") === "true" : !1;
    }
    function ws(e) {
      const t = e.tagName;
      return ["INPUT", "TEXTAREA", "SELECT"].includes(t) ? !0 : e.isContentEditable;
    }
    function Tn(e) {
      return String(e ?? "rwtable").toLowerCase().replace(/[^a-z0-9_-]+/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "") || "rwtable";
    }
    function yr(e) {
      const t = String(e ?? "").trim();
      return t === "" ? "520px" : /^\d+$/.test(t) ? `${t}px` : t;
    }
    function gl(e) {
      if (e == null)
        return null;
      const t = String(e).trim();
      return t === "" ? null : /^\d+(\.\d+)?$/.test(t) ? `${t}px` : t;
    }
    function Wr(e) {
      const t = Number(l.rowOptions?.[0] ?? 25), r = Number.isFinite(t) && t > 0 ? Math.round(t) : 25, a = Number(e);
      if (!Number.isFinite(a) || a <= 0)
        return r;
      const n = Math.round(a), u = Array.isArray(l.rowOptions) ? l.rowOptions.map((i) => Number(i)).filter((i) => Number.isFinite(i) && i > 0).map((i) => Math.round(i)) : [];
      return u.length === 0 || u.includes(n) ? n : r;
    }
    function Xt() {
      return `rwtable:columns:${typeof l.tableId == "string" && l.tableId.trim() !== "" ? l.tableId.trim() : l.columns.map((t) => String(t.key)).join("|")}`;
    }
    function yl() {
      return `${Xt()}:widths`;
    }
    function ml() {
      return `${Xt()}:lockCount`;
    }
    function Vn() {
      return `${Xt()}:config`;
    }
    function ks() {
      if (typeof window > "u")
        return null;
      try {
        const e = window.localStorage.getItem(Xt());
        if (!e)
          return null;
        const t = JSON.parse(e);
        return !t || typeof t != "object" ? null : t;
      } catch {
        return null;
      }
    }
    function Cs() {
      if (typeof window > "u")
        return null;
      try {
        const e = window.localStorage.getItem(yl());
        if (!e)
          return null;
        const t = JSON.parse(e);
        return !t || typeof t != "object" ? null : t;
      } catch {
        return null;
      }
    }
    function Ss() {
      if (typeof window > "u")
        return 0;
      try {
        const e = window.localStorage.getItem(ml()), t = Number(e);
        return Number.isFinite(t) ? Math.max(0, Math.round(t)) : 0;
      } catch {
        return 0;
      }
    }
    function _s() {
      if (typeof window > "u")
        return null;
      try {
        const e = window.localStorage.getItem(Vn());
        if (!e)
          return null;
        const t = JSON.parse(e);
        return !t || typeof t != "object" ? null : t;
      } catch {
        return null;
      }
    }
    function Ms() {
      const e = _s();
      if (!e) {
        at.value = yr(at.value);
        return;
      }
      typeof e.usePagination == "boolean" && (Xe.value = e.usePagination), typeof e.horizontalScroll == "boolean" && (we.value = e.horizontalScroll), typeof e.rowQuantitySelect == "boolean" && (Rt.value = e.rowQuantitySelect), e.rowsPerPage !== void 0 && e.rowsPerPage !== null && (W.value = Wr(e.rowsPerPage)), typeof e.showRecordCount == "boolean" && (jt.value = e.showRecordCount), at.value = yr(
        e.height ?? at.value
      );
    }
    function Fs() {
      if (!(typeof window > "u"))
        try {
          const e = {
            order: B.value.map((t) => t.key),
            selected: B.value.reduce((t, r) => (t[r.key] = r.selected !== !1, t), {})
          };
          window.localStorage.setItem(Xt(), JSON.stringify(e));
        } catch {
          return;
        }
    }
    function hl() {
      if (!(typeof window > "u"))
        try {
          window.localStorage.setItem(
            yl(),
            JSON.stringify(tt.value)
          );
        } catch {
          return;
        }
    }
    function Hr() {
      if (!(typeof window > "u"))
        try {
          window.localStorage.setItem(
            ml(),
            String(xe.value)
          );
        } catch {
          return;
        }
    }
    function xl() {
      if (!(typeof window > "u"))
        try {
          const e = {
            usePagination: Xe.value,
            horizontalScroll: we.value,
            rowQuantitySelect: Rt.value,
            rowsPerPage: Wr(W.value),
            showRecordCount: jt.value,
            height: yr(at.value)
          };
          window.localStorage.setItem(
            Vn(),
            JSON.stringify(e)
          );
        } catch {
          return;
        }
    }
    function Os() {
      if (Xe.value = l.options?.scrollMode !== "infinite", we.value = !!l.horizontalScroll, Rt.value = !!l.rowQuantitySelect, W.value = Wr(l.rowOptions?.[0] ?? 25), jt.value = !!l.showRecordCount, at.value = yr(l.initialHeight), typeof window < "u")
        try {
          window.localStorage.removeItem(Vn());
        } catch {
          return;
        }
    }
    return (e, t) => (c(), b("div", {
      ref_key: "rootRef",
      ref: le,
      class: "rw-table w-full min-w-0 max-w-full space-y-0"
    }, [
      s("div", {
        class: "relative flex flex-wrap items-center gap-2 rounded-none border-x border-t border-slate-200 bg-white px-3 py-2",
        style: N(kt(Hl))
      }, [
        d.globalSearch ? (c(), b("div", {
          key: 0,
          class: j(Yl.value),
          style: N(Ql.value)
        }, [
          s("label", {
            for: Qr.value,
            class: "sr-only"
          }, g(o("search.all_columns", "Zoeken in alle kolommen")), 9, su),
          Se(s("input", {
            id: Qr.value,
            name: Qr.value,
            "aria-label": o("search.all_columns", "Zoeken in alle kolommen"),
            "onUpdate:modelValue": t[0] || (t[0] = (r) => pe.value = r),
            type: "text",
            placeholder: o("search.all_columns", "Zoeken in alle kolommen"),
            class: "h-9 w-full rounded-md border border-slate-300 px-3 text-sm outline-none focus:border-slate-300"
          }, null, 8, uu), [
            [Ur, pe.value]
          ])
        ], 6)) : _("", !0),
        li.value ? (c(), b("button", {
          key: 1,
          type: "button",
          class: "inline-flex h-9 w-9 items-center justify-center rounded-md border border-red-200 text-red-600 hover:bg-red-50",
          "aria-label": o("filters.clear_all", "Filters wissen"),
          onClick: Po
        }, [...t[39] || (t[39] = [
          s("i", { class: "mdi mdi-filter-off text-base leading-none" }, null, -1)
        ])], 8, du)) : _("", !0),
        s("div", cu, [
          Rt.value && Xe.value ? (c(), b("div", fu, [
            Se(s("select", {
              id: Qn.value,
              name: Qn.value,
              "aria-label": o("table.rows_per_page", "Aantal rijen per pagina"),
              "onUpdate:modelValue": t[1] || (t[1] = (r) => W.value = r),
              class: "h-9 w-28 rounded-md border border-slate-300 bg-white pl-3 pr-8 text-sm"
            }, [
              (c(!0), b(T, null, X(d.rowOptions, (r) => (c(), b("option", {
                key: r,
                value: r
              }, g(r), 9, pu))), 128))
            ], 8, bu), [
              [
                ft,
                W.value,
                void 0,
                { number: !0 }
              ]
            ])
          ])) : _("", !0),
          d.inlineCreate && d.inlineCreateButton ? (c(), b("button", {
            key: 1,
            type: "button",
            class: "rw-btn-hover inline-flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background text-slate-600 shadow-sm",
            onClick: t[2] || (t[2] = (r) => Et(null))
          }, [...t[40] || (t[40] = [
            s("i", { class: "mdi mdi-plus text-lg leading-none" }, null, -1)
          ])])) : _("", !0),
          ri.value ? (c(), b("div", vu, [
            s("button", {
              type: "button",
              class: "rw-btn-hover inline-flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background text-sky-700 shadow-sm",
              title: o("charts.manage_title", "Grafiekbeheer"),
              onClick: xi
            }, [...t[41] || (t[41] = [
              s("i", { class: "mdi mdi-chart-bar text-lg leading-none" }, null, -1)
            ])], 8, gu),
            fe.value ? (c(), b("div", {
              key: 0,
              class: "absolute right-0 top-11 mt-3 flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-xl",
              style: N({
                zIndex: kt(he).toolbarOverlay + 30,
                width: "min(96vw, 960px)",
                maxWidth: "calc(100vw - 1rem)",
                maxHeight: "calc(100vh - 120px)"
              })
            }, [
              s("div", yu, [
                s("span", null, g(K.value === "list" ? o(
                  "charts.dialog.title_list",
                  "Grafieken Beheer"
                ) : K.value === "view" ? F.value.description || o(
                  "charts.dialog.title_view",
                  "Grafiek bekijken"
                ) : F.value.id ? o(
                  "charts.dialog.title_edit",
                  "Grafiek Bewerken"
                ) : o(
                  "charts.dialog.title_new",
                  "Nieuwe Grafiek"
                )), 1),
                s("button", {
                  type: "button",
                  class: "inline-flex h-7 w-7 items-center justify-center rounded text-sky-100 hover:bg-sky-600",
                  "aria-label": o("actions.close", "Sluiten"),
                  onClick: t[3] || (t[3] = (r) => fe.value = !1)
                }, [...t[42] || (t[42] = [
                  s("i", { class: "mdi mdi-close text-base leading-none" }, null, -1)
                ])], 8, mu)
              ]),
              s("div", hu, [
                K.value === "list" ? (c(), b(T, { key: 0 }, [
                  s("button", {
                    type: "button",
                    class: "rw-btn-hover inline-flex h-8 items-center rounded border border-input bg-background px-2 text-sm text-slate-700 shadow-sm",
                    onClick: t[4] || (t[4] = (r) => fe.value = !1)
                  }, [
                    t[43] || (t[43] = s("i", { class: "mdi mdi-arrow-left-circle mr-1 text-base leading-none" }, null, -1)),
                    U(" " + g(o("actions.back", "Terug")), 1)
                  ]),
                  t[45] || (t[45] = s("div", { class: "ml-auto" }, null, -1)),
                  s("button", {
                    type: "button",
                    class: "rw-btn-hover-tone-blue inline-flex h-8 items-center rounded border border-blue-200 bg-blue-50 px-2 text-sm text-blue-700",
                    disabled: Ue.value,
                    onClick: Ti
                  }, [
                    t[44] || (t[44] = s("i", { class: "mdi mdi-plus-circle mr-1 text-base leading-none" }, null, -1)),
                    U(" " + g(o("actions.new", "Nieuw")), 1)
                  ], 8, xu)
                ], 64)) : (c(), b(T, { key: 1 }, [
                  s("button", {
                    type: "button",
                    class: "rw-btn-hover inline-flex h-8 items-center rounded border border-input bg-background px-2 text-sm text-slate-700 shadow-sm",
                    disabled: Ue.value,
                    onClick: t[5] || (t[5] = (r) => K.value = "list")
                  }, [
                    t[46] || (t[46] = s("i", { class: "mdi mdi-arrow-left-circle mr-1 text-base leading-none" }, null, -1)),
                    U(" " + g(o("actions.back", "Terug")), 1)
                  ], 8, wu),
                  t[49] || (t[49] = s("div", { class: "ml-auto" }, null, -1)),
                  K.value === "view" ? (c(), b("button", {
                    key: 0,
                    type: "button",
                    class: "rw-btn-hover inline-flex h-8 items-center rounded border border-red-200 bg-red-50 px-2 text-sm text-red-700 disabled:opacity-60",
                    disabled: Ae.value || M.value || !Mr.value || !!I.value,
                    onClick: Pi
                  }, [
                    t[47] || (t[47] = s("i", { class: "mdi mdi-file-pdf-box mr-1 text-base leading-none" }, null, -1)),
                    U(" " + g(o(
                      "charts.actions.print_pdf",
                      "PDF afdrukken"
                    )), 1)
                  ], 8, ku)) : _("", !0),
                  K.value === "edit" ? (c(), b("button", {
                    key: 1,
                    type: "button",
                    class: "rw-btn-hover-tone-teal inline-flex h-8 items-center rounded border border-teal-200 bg-teal-50 px-2 text-sm text-teal-700 disabled:opacity-60",
                    disabled: Ue.value || !an.value,
                    onClick: Li
                  }, [
                    t[48] || (t[48] = s("i", { class: "mdi mdi-content-save mr-1 text-base leading-none" }, null, -1)),
                    U(" " + g(o("actions.save", "Bewaren")), 1)
                  ], 8, Cu)) : _("", !0)
                ], 64))
              ]),
              f.value ? (c(), b("p", Su, g(f.value), 1)) : _("", !0),
              me.value ? (c(), b("p", _u, g(me.value), 1)) : _("", !0),
              K.value === "list" ? (c(), b("div", Mu, [
                s("table", Fu, [
                  s("thead", Ou, [
                    s("tr", null, [
                      s("th", Iu, g(o("table.id", "Id")), 1),
                      s("th", Ru, g(o(
                        "table.description",
                        "Omschrijving"
                      )), 1),
                      s("th", ju, g(o("table.actions", "Acties")), 1)
                    ])
                  ]),
                  s("tbody", null, [
                    Nt.value.length === 0 ? (c(), b("tr", Au, [
                      s("td", Eu, g(o(
                        "charts.messages.none_saved",
                        "Geen opgeslagen grafieken gevonden."
                      )), 1)
                    ])) : _("", !0),
                    (c(!0), b(T, null, X(Nt.value, (r) => (c(), b("tr", {
                      key: r.id,
                      class: "border-b border-slate-100"
                    }, [
                      s("td", $u, [
                        s("button", {
                          type: "button",
                          class: "rw-id-hover inline-flex h-7 items-center justify-center rounded-full px-2 font-semibold transition-colors",
                          disabled: Ue.value,
                          onClick: (a) => Vi(r)
                        }, g(r.id), 9, Tu)
                      ]),
                      s("td", Vu, g(r.description), 1),
                      s("td", zu, [
                        s("button", {
                          type: "button",
                          class: "rw-btn-hover inline-flex h-8 w-8 items-center justify-center rounded border border-input bg-background text-blue-700 shadow-sm disabled:opacity-50",
                          disabled: Ue.value,
                          title: o(
                            "actions.view",
                            "Bekijken"
                          ),
                          onClick: (a) => zi(r)
                        }, [...t[50] || (t[50] = [
                          s("i", { class: "mdi mdi-eye text-lg leading-none" }, null, -1)
                        ])], 8, Lu)
                      ])
                    ]))), 128))
                  ])
                ])
              ])) : (c(), b("div", Du, [
                s("div", Nu, [
                  K.value === "edit" ? (c(), b("div", Pu, [
                    s("div", null, [
                      s("label", {
                        for: `${O.value}-chart-description`,
                        class: "mb-1 block text-xs text-slate-600"
                      }, g(o(
                        "common.description_title",
                        "Omschrijving / Titel"
                      )), 9, Bu),
                      Se(s("input", {
                        id: `${O.value}-chart-description`,
                        name: `${O.value}-chart-description`,
                        "onUpdate:modelValue": t[6] || (t[6] = (r) => F.value.description = r),
                        type: "text",
                        class: "h-9 w-full rounded border border-slate-300 px-3 text-sm",
                        maxlength: "255",
                        placeholder: o(
                          "charts.placeholders.description",
                          "Bijvoorbeeld: Inschrijvingen per schooljaar"
                        )
                      }, null, 8, Ku), [
                        [Ur, F.value.description]
                      ])
                    ]),
                    s("div", qu, [
                      s("div", null, [
                        s("label", {
                          for: `${O.value}-chart-type`,
                          class: "mb-1 block text-xs text-slate-600"
                        }, g(o(
                          "charts.fields.type",
                          "Grafiektype"
                        )), 9, Wu),
                        Se(s("select", {
                          id: `${O.value}-chart-type`,
                          name: `${O.value}-chart-type`,
                          "onUpdate:modelValue": t[7] || (t[7] = (r) => F.value.config.builder.chart.type = r),
                          class: "h-9 w-full rounded border border-slate-300 bg-white px-2 text-sm"
                        }, [
                          (c(!0), b(T, null, X(kr.value, (r) => (c(), b("option", {
                            key: r.value,
                            value: r.value
                          }, g(r.label), 9, Uu))), 128))
                        ], 8, Hu), [
                          [
                            ft,
                            F.value.config.builder.chart.type
                          ]
                        ])
                      ]),
                      s("div", null, [
                        s("label", {
                          for: `${O.value}-chart-sort`,
                          class: "mb-1 block text-xs text-slate-600"
                        }, g(o(
                          "charts.fields.sort",
                          "Sortering"
                        )), 9, Gu),
                        Se(s("select", {
                          id: `${O.value}-chart-sort`,
                          name: `${O.value}-chart-sort`,
                          "onUpdate:modelValue": t[8] || (t[8] = (r) => F.value.config.builder.dataset.sort_direction = r),
                          class: "h-9 w-full rounded border border-slate-300 bg-white px-2 text-sm"
                        }, [
                          (c(!0), b(T, null, X(Zl.value, (r) => (c(), b("option", {
                            key: r.value,
                            value: r.value
                          }, g(r.label), 9, Ju))), 128))
                        ], 8, Xu), [
                          [
                            ft,
                            F.value.config.builder.dataset.sort_direction
                          ]
                        ])
                      ]),
                      s("div", null, [
                        s("label", {
                          for: `${O.value}-chart-orientation`,
                          class: "mb-1 block text-xs text-slate-600"
                        }, g(o(
                          "charts.fields.orientation",
                          "Orientatie"
                        )), 9, Yu),
                        Se(s("select", {
                          id: `${O.value}-chart-orientation`,
                          name: `${O.value}-chart-orientation`,
                          "onUpdate:modelValue": t[9] || (t[9] = (r) => F.value.config.builder.chart.orientation = r),
                          class: "h-9 w-full rounded border border-slate-300 bg-white px-2 text-sm"
                        }, [
                          (c(!0), b(T, null, X(ei.value, (r) => (c(), b("option", {
                            key: r.value,
                            value: r.value
                          }, g(r.label), 9, Zu))), 128))
                        ], 8, Qu), [
                          [
                            ft,
                            F.value.config.builder.chart.orientation
                          ]
                        ])
                      ])
                    ]),
                    s("div", ed, [
                      s("div", null, [
                        s("label", {
                          for: `${O.value}-chart-x-field`,
                          class: "mb-1 block text-xs text-slate-600"
                        }, g(o(
                          "charts.fields.x_field",
                          "X-veld"
                        )), 9, td),
                        Se(s("select", {
                          id: `${O.value}-chart-x-field`,
                          name: `${O.value}-chart-x-field`,
                          "onUpdate:modelValue": t[10] || (t[10] = (r) => F.value.config.builder.dataset.x_field = r),
                          class: "h-9 w-full rounded border border-slate-300 bg-white px-2 text-sm"
                        }, [
                          s("option", nd, g(o(
                            "common.choose_field",
                            "-- Kies veld --"
                          )), 1),
                          (c(!0), b(T, null, X(rn.value, (r) => (c(), b("option", {
                            key: r.value,
                            value: r.value
                          }, g(r.label), 9, ad))), 128))
                        ], 8, rd), [
                          [
                            ft,
                            F.value.config.builder.dataset.x_field
                          ]
                        ])
                      ]),
                      s("div", null, [
                        s("label", {
                          for: `${O.value}-chart-aggregate`,
                          class: "mb-1 block text-xs text-slate-600"
                        }, g(o(
                          "charts.fields.aggregate",
                          "Berekening (aggregatie)"
                        )), 9, ld),
                        Se(s("select", {
                          id: `${O.value}-chart-aggregate`,
                          name: `${O.value}-chart-aggregate`,
                          "onUpdate:modelValue": t[11] || (t[11] = (r) => F.value.config.builder.dataset.aggregate = r),
                          class: "h-9 w-full rounded border border-slate-300 bg-white px-2 text-sm"
                        }, [
                          (c(!0), b(T, null, X(ta.value, (r) => (c(), b("option", {
                            key: r.value,
                            value: r.value
                          }, g(r.label), 9, od))), 128))
                        ], 8, id), [
                          [
                            ft,
                            F.value.config.builder.dataset.aggregate
                          ]
                        ])
                      ])
                    ]),
                    s("div", sd, [
                      s("div", null, [
                        s("label", {
                          for: `${O.value}-chart-metric-field`,
                          class: "mb-1 block text-xs text-slate-600"
                        }, g(o(
                          "charts.fields.metric_field",
                          "Metric veld"
                        )), 9, ud),
                        Se(s("select", {
                          id: `${O.value}-chart-metric-field`,
                          name: `${O.value}-chart-metric-field`,
                          "onUpdate:modelValue": t[12] || (t[12] = (r) => F.value.config.builder.dataset.metric_field = r),
                          disabled: !ia.value,
                          class: "h-9 w-full rounded border border-slate-300 bg-white px-2 text-sm disabled:bg-slate-100"
                        }, [
                          s("option", cd, g(o(
                            "common.choose_field",
                            "-- Kies veld --"
                          )), 1),
                          (c(!0), b(T, null, X(rn.value, (r) => (c(), b("option", {
                            key: r.value,
                            value: r.value
                          }, g(r.label), 9, fd))), 128))
                        ], 8, dd), [
                          [
                            ft,
                            F.value.config.builder.dataset.metric_field
                          ]
                        ])
                      ]),
                      s("div", null, [
                        s("label", {
                          for: `${O.value}-chart-series-field`,
                          class: "mb-1 block text-xs text-slate-600"
                        }, g(o(
                          "charts.fields.series_field_optional",
                          "Series veld (optioneel)"
                        )), 9, bd),
                        Se(s("select", {
                          id: `${O.value}-chart-series-field`,
                          name: `${O.value}-chart-series-field`,
                          "onUpdate:modelValue": t[13] || (t[13] = (r) => F.value.config.builder.dataset.series_field = r),
                          class: "h-9 w-full rounded border border-slate-300 bg-white px-2 text-sm"
                        }, [
                          s("option", vd, g(o(
                            "charts.fields.no_series",
                            "-- Geen series --"
                          )), 1),
                          (c(!0), b(T, null, X(rn.value, (r) => (c(), b("option", {
                            key: r.value,
                            value: r.value
                          }, g(r.label), 9, gd))), 128))
                        ], 8, pd), [
                          [
                            ft,
                            F.value.config.builder.dataset.series_field
                          ]
                        ])
                      ]),
                      s("div", null, [
                        s("label", {
                          for: `${O.value}-chart-limit`,
                          class: "mb-1 block text-xs text-slate-600"
                        }, g(o(
                          "charts.fields.limit",
                          "Top N (1-500)"
                        )), 9, yd),
                        Se(s("input", {
                          id: `${O.value}-chart-limit`,
                          name: `${O.value}-chart-limit`,
                          "onUpdate:modelValue": t[14] || (t[14] = (r) => F.value.config.builder.dataset.limit = r),
                          type: "number",
                          min: "1",
                          max: "500",
                          class: "h-9 w-full rounded border border-slate-300 px-2 text-sm"
                        }, null, 8, md), [
                          [
                            Ur,
                            F.value.config.builder.dataset.limit,
                            void 0,
                            { number: !0 }
                          ]
                        ])
                      ])
                    ]),
                    s("div", hd, [
                      s("label", xd, [
                        Se(s("input", {
                          type: "checkbox",
                          name: `${O.value}-chart-show-legend`,
                          "onUpdate:modelValue": t[15] || (t[15] = (r) => F.value.config.builder.chart.show_legend = r)
                        }, null, 8, wd), [
                          [
                            Gr,
                            F.value.config.builder.chart.show_legend
                          ]
                        ]),
                        U(" " + g(o(
                          "charts.fields.show_legend",
                          "Toon legenda"
                        )), 1)
                      ]),
                      s("label", kd, [
                        Se(s("input", {
                          type: "checkbox",
                          name: `${O.value}-chart-stacked`,
                          "onUpdate:modelValue": t[16] || (t[16] = (r) => F.value.config.builder.chart.stacked = r)
                        }, null, 8, Cd), [
                          [
                            Gr,
                            F.value.config.builder.chart.stacked
                          ]
                        ]),
                        U(" " + g(o(
                          "charts.fields.stacked",
                          "Stapelen"
                        )), 1)
                      ]),
                      s("label", Sd, [
                        Se(s("input", {
                          type: "checkbox",
                          name: `${O.value}-chart-allow-type-change`,
                          "onUpdate:modelValue": t[17] || (t[17] = (r) => F.value.config.builder.presentation.allow_chart_type_change = r)
                        }, null, 8, _d), [
                          [
                            Gr,
                            F.value.config.builder.presentation.allow_chart_type_change
                          ]
                        ]),
                        U(" " + g(o(
                          "charts.fields.allow_type_change",
                          "Grafiektype aanpassen in viewer"
                        )), 1)
                      ])
                    ]),
                    an.value ? _("", !0) : (c(), b("p", Md, g(o(
                      "charts.validation.minimum_required",
                      "Vul minstens Omschrijving, X-veld en indien nodig een Metric veld in."
                    )), 1))
                  ])) : _("", !0),
                  K.value === "view" ? (c(), b("div", Fd, [
                    s("label", {
                      for: `${O.value}-chart-view-type`,
                      class: "mb-1 block text-xs text-slate-600"
                    }, g(o(
                      "charts.fields.viewer_type",
                      "Grafiektype in viewer"
                    )), 9, Od),
                    Se(s("select", {
                      id: `${O.value}-chart-view-type`,
                      name: `${O.value}-chart-view-type`,
                      "onUpdate:modelValue": t[18] || (t[18] = (r) => Q.value = r),
                      class: "h-9 w-full rounded border border-slate-300 bg-white px-2 text-sm"
                    }, [
                      (c(!0), b(T, null, X(kr.value, (r) => (c(), b("option", {
                        key: r.value,
                        value: r.value
                      }, g(r.label), 9, Rd))), 128))
                    ], 8, Id), [
                      [ft, Q.value]
                    ])
                  ])) : _("", !0),
                  I.value ? (c(), b("p", jd, g(I.value), 1)) : _("", !0),
                  M.value ? (c(), b("div", Ad, g(o(
                    "charts.messages.loading_data",
                    "Grafiekdata laden..."
                  )), 1)) : Mr.value ? (c(), b("div", $d, [
                    K.value === "view" ? (c(), b("div", {
                      key: 0,
                      ref_key: "chartStageViewRef",
                      ref: Ge,
                      class: "w-full",
                      style: {
                        height: "52vh",
                        minHeight: "360px"
                      }
                    }, null, 512)) : (c(), b("div", {
                      key: 1,
                      ref_key: "chartStageEditRef",
                      ref: Fe,
                      class: "w-full",
                      style: {
                        height: "42vh",
                        minHeight: "300px"
                      }
                    }, null, 512))
                  ])) : (c(), b("div", Ed, g(o(
                    "charts.messages.no_renderable_data",
                    "Geen renderbare grafiekdata gevonden voor de huidige instellingen."
                  )), 1))
                ])
              ])),
              K.value === "edit" ? (c(), b("div", Td, [
                F.value.id ? (c(), b("button", {
                  key: 0,
                  type: "button",
                  class: "inline-flex h-8 items-center rounded border border-red-200 bg-red-50 px-2 text-sm text-red-700 hover:bg-red-100 disabled:opacity-50",
                  disabled: Ue.value,
                  onClick: t[19] || (t[19] = (r) => Di(F.value.id))
                }, [
                  t[51] || (t[51] = s("i", { class: "mdi mdi-delete mr-1 text-base leading-none" }, null, -1)),
                  U(" " + g(o("actions.delete", "Verwijderen")), 1)
                ], 8, Vd)) : _("", !0),
                t[52] || (t[52] = s("div", { class: "ml-auto" }, null, -1))
              ])) : _("", !0)
            ], 4)) : _("", !0)
          ])) : _("", !0),
          ti.value ? (c(), b("div", zd, [
            s("button", {
              type: "button",
              class: "rw-btn-hover inline-flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background text-emerald-700 shadow-sm",
              title: o("excel.dialog.title_button", "Excel export"),
              onClick: hi
            }, [...t[53] || (t[53] = [
              s("i", { class: "mdi mdi-microsoft-excel text-lg leading-none" }, null, -1)
            ])], 8, Ld),
            We.value ? (c(), b("div", {
              key: 0,
              class: "absolute right-0 top-11 z-[80] mt-3 flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-xl",
              style: N({
                zIndex: kt(he).toolbarOverlay + 20,
                width: "min(90vw, 375px)",
                maxWidth: "calc(100vw - 2rem)",
                minWidth: "320px"
              })
            }, [
              s("div", Dd, [
                s("span", null, g(He.value === "list" ? o(
                  "excel.dialog.title_list",
                  "Excel Export Beheer"
                ) : G.value.id ? o(
                  "excel.dialog.title_edit",
                  "Export Bewerken"
                ) : o(
                  "excel.dialog.title_new",
                  "Nieuwe Export"
                )), 1),
                s("button", {
                  type: "button",
                  class: "inline-flex h-7 w-7 items-center justify-center rounded text-emerald-100 hover:bg-emerald-600",
                  "aria-label": o("actions.close", "Sluiten"),
                  onClick: t[20] || (t[20] = (r) => We.value = !1)
                }, [...t[54] || (t[54] = [
                  s("i", { class: "mdi mdi-close text-base leading-none" }, null, -1)
                ])], 8, Nd)
              ]),
              s("div", Pd, [
                He.value === "list" ? (c(), b(T, { key: 0 }, [
                  s("button", {
                    type: "button",
                    class: "rw-btn-hover inline-flex h-8 items-center rounded border border-input bg-background px-2 text-sm text-slate-700 shadow-sm",
                    onClick: t[21] || (t[21] = (r) => We.value = !1)
                  }, [
                    t[55] || (t[55] = s("i", { class: "mdi mdi-arrow-left-circle mr-1 text-base leading-none" }, null, -1)),
                    U(" " + g(o("actions.back", "Terug")), 1)
                  ]),
                  t[57] || (t[57] = s("div", { class: "ml-auto" }, null, -1)),
                  s("button", {
                    type: "button",
                    class: "rw-btn-hover-tone-blue inline-flex h-8 items-center rounded border border-blue-200 bg-blue-50 px-2 text-sm text-blue-700",
                    disabled: ne.value,
                    onClick: Si
                  }, [
                    t[56] || (t[56] = s("i", { class: "mdi mdi-plus-circle mr-1 text-base leading-none" }, null, -1)),
                    U(" " + g(o("actions.new", "Nieuw")), 1)
                  ], 8, Bd)
                ], 64)) : (c(), b(T, { key: 1 }, [
                  s("button", {
                    type: "button",
                    class: "rw-btn-hover inline-flex h-8 items-center rounded border border-input bg-background px-2 text-sm text-slate-700 shadow-sm",
                    disabled: ne.value,
                    onClick: t[22] || (t[22] = (r) => He.value = "list")
                  }, [
                    t[58] || (t[58] = s("i", { class: "mdi mdi-arrow-left-circle mr-1 text-base leading-none" }, null, -1)),
                    U(" " + g(o("actions.back", "Terug")), 1)
                  ], 8, Kd),
                  t[60] || (t[60] = s("div", { class: "ml-auto" }, null, -1)),
                  !ne.value && la.value ? (c(), b("button", {
                    key: 0,
                    type: "button",
                    class: "rw-btn-hover-tone-teal inline-flex h-8 items-center rounded border border-teal-200 bg-teal-50 px-2 text-sm text-teal-700",
                    onClick: Mi
                  }, [
                    t[59] || (t[59] = s("i", { class: "mdi mdi-content-save mr-1 text-base leading-none" }, null, -1)),
                    U(" " + g(o("actions.save", "Bewaren")), 1)
                  ])) : _("", !0)
                ], 64))
              ]),
              je.value ? (c(), b("p", qd, g(je.value), 1)) : _("", !0),
              ue.value ? (c(), b("p", Wd, g(ue.value), 1)) : _("", !0),
              He.value === "list" ? (c(), b("div", Hd, [
                s("table", Ud, [
                  s("thead", Gd, [
                    s("tr", null, [
                      s("th", Xd, g(o("table.id", "Id")), 1),
                      s("th", Jd, g(o(
                        "table.description",
                        "Omschrijving"
                      )), 1),
                      s("th", Yd, g(o("table.actions", "Acties")), 1)
                    ])
                  ]),
                  s("tbody", null, [
                    Dt.value.length === 0 ? (c(), b("tr", Qd, [
                      s("td", Zd, g(o(
                        "excel.messages.none_saved",
                        "Geen opgeslagen exports gevonden."
                      )), 1)
                    ])) : _("", !0),
                    (c(!0), b(T, null, X(Dt.value, (r) => (c(), b("tr", {
                      key: r.id,
                      class: "border-b border-slate-100"
                    }, [
                      s("td", ec, [
                        s("button", {
                          type: "button",
                          class: "rw-id-hover inline-flex h-7 items-center justify-center rounded-full px-2 font-semibold transition-colors",
                          disabled: ne.value,
                          onClick: (a) => _i(r)
                        }, g(r.id), 9, tc)
                      ]),
                      s("td", rc, g(r.description), 1),
                      s("td", nc, [
                        s("button", {
                          type: "button",
                          class: "rw-btn-hover inline-flex h-8 w-8 items-center justify-center rounded border border-input bg-background text-emerald-700 shadow-sm disabled:opacity-50",
                          disabled: ne.value,
                          title: o(
                            "excel.actions.download_direct",
                            "Direct downloaden"
                          ),
                          onClick: (a) => $i(r)
                        }, [...t[61] || (t[61] = [
                          s("i", { class: "mdi mdi-download text-lg leading-none" }, null, -1)
                        ])], 8, ac)
                      ])
                    ]))), 128))
                  ])
                ])
              ])) : (c(), b("div", lc, [
                s("div", ic, [
                  s("div", null, [
                    s("label", {
                      for: `${O.value}-export-description`,
                      class: "mb-1 block text-xs text-slate-600"
                    }, g(o(
                      "common.description_title",
                      "Omschrijving / Titel"
                    )), 9, oc),
                    Se(s("input", {
                      id: `${O.value}-export-description`,
                      name: `${O.value}-export-description`,
                      "onUpdate:modelValue": t[23] || (t[23] = (r) => G.value.description = r),
                      type: "text",
                      class: "h-9 w-full rounded border border-slate-300 px-3 text-sm",
                      maxlength: "255",
                      placeholder: o(
                        "excel.placeholders.description",
                        "Bijvoorbeeld: Overzicht actieve records"
                      )
                    }, null, 8, sc), [
                      [Ur, G.value.description]
                    ])
                  ]),
                  s("div", null, [
                    s("p", uc, g(o(
                      "excel.fields.select_sort_columns",
                      "Selecteer en sorteer kolommen"
                    )), 1),
                    s("div", dc, [
                      (c(!0), b(T, null, X(G.value.columns, (r, a) => (c(), b("div", {
                        key: r.key,
                        "data-drag-preview-row": "true",
                        class: j([
                          "flex items-center gap-2 border-b border-slate-100 px-3 py-2 last:border-b-0",
                          Mt.value === r.key ? "bg-blue-50" : "bg-white"
                        ]),
                        onDragover: (n) => Ii(
                          r.key,
                          n
                        ),
                        onDrop: (n) => Ri(
                          r.key,
                          n
                        )
                      }, [
                        s("span", {
                          class: "inline-flex h-6 w-6 cursor-move items-center justify-center rounded text-slate-500 hover:bg-slate-100",
                          draggable: "true",
                          "aria-label": `Versleep export kolom ${x(r)}`,
                          onDragstart: (n) => Oi(
                            r.key,
                            n
                          ),
                          onDragend: Ca
                        }, [...t[62] || (t[62] = [
                          s("i", { class: "mdi mdi-drag text-sm leading-none" }, null, -1)
                        ])], 40, fc),
                        Se(s("input", {
                          type: "checkbox",
                          name: `export-column-${r.key}`,
                          "aria-label": `Neem kolom ${x(r)} op in export`,
                          "onUpdate:modelValue": (n) => r.selected = n
                        }, null, 8, bc), [
                          [Gr, r.selected]
                        ]),
                        s("span", pc, g(x(r)), 1),
                        s("div", vc, [
                          s("button", {
                            type: "button",
                            class: "inline-flex h-6 w-6 items-center justify-center rounded border border-slate-200 text-slate-500 disabled:opacity-30",
                            disabled: a === 0,
                            onClick: (n) => pn(
                              r.key,
                              G.value.columns[a - 1]?.key
                            )
                          }, [...t[63] || (t[63] = [
                            s("i", { class: "mdi mdi-chevron-up text-sm leading-none" }, null, -1)
                          ])], 8, gc),
                          s("button", {
                            type: "button",
                            class: "inline-flex h-6 w-6 items-center justify-center rounded border border-slate-200 text-slate-500 disabled:opacity-30",
                            disabled: a >= G.value.columns.length - 1,
                            onClick: (n) => pn(
                              r.key,
                              G.value.columns[a + 1]?.key
                            )
                          }, [...t[64] || (t[64] = [
                            s("i", { class: "mdi mdi-chevron-down text-sm leading-none" }, null, -1)
                          ])], 8, yc)
                        ])
                      ], 42, cc))), 128))
                    ])
                  ])
                ])
              ])),
              He.value === "edit" ? (c(), b("div", mc, [
                G.value.id ? (c(), b("button", {
                  key: 0,
                  type: "button",
                  class: "inline-flex h-8 items-center rounded border border-red-200 bg-red-50 px-2 text-sm text-red-700 hover:bg-red-100 disabled:opacity-50",
                  disabled: ne.value,
                  onClick: t[24] || (t[24] = (r) => Fi(G.value.id))
                }, [
                  t[65] || (t[65] = s("i", { class: "mdi mdi-delete mr-1 text-base leading-none" }, null, -1)),
                  U(" " + g(o("actions.delete", "Verwijderen")), 1)
                ], 8, hc)) : _("", !0),
                t[66] || (t[66] = s("div", { class: "ml-auto" }, null, -1))
              ])) : _("", !0)
            ], 4)) : _("", !0)
          ])) : _("", !0),
          ea.value.length ? (c(), b("div", xc, [
            s("button", {
              type: "button",
              class: "rw-btn-hover inline-flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background text-slate-600 shadow-sm",
              onClick: t[25] || (t[25] = (r) => ce.value = !ce.value)
            }, [...t[67] || (t[67] = [
              s("i", { class: "mdi mdi-dots-vertical text-lg leading-none" }, null, -1)
            ])]),
            ce.value ? (c(), b("div", {
              key: 0,
              class: "absolute right-0 top-11 min-w-44 rounded-md border border-slate-200 bg-white p-1 shadow-lg",
              style: N(kt(Zn))
            }, [
              (c(!0), b(T, null, X(ea.value, (r, a) => (c(), b("button", {
                key: a,
                type: "button",
                class: "flex w-full items-center gap-2 rounded px-2 py-1.5 text-left text-sm text-slate-700 hover:bg-slate-50",
                onClick: (n) => ao(r)
              }, [
                r.icon ? (c(), b("i", {
                  key: 0,
                  class: j(["mdi text-base leading-none", r.icon])
                }, null, 2)) : _("", !0),
                U(" " + g(r.label), 1)
              ], 8, wc))), 128))
            ], 4)) : _("", !0)
          ])) : _("", !0),
          s("div", kc, [
            s("button", {
              type: "button",
              class: j([
                "rw-btn-hover inline-flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background shadow-sm",
                re.value ? "border-blue-300 bg-blue-50 text-blue-600" : "text-slate-600"
              ]),
              onClick: t[26] || (t[26] = (r) => re.value = !re.value)
            }, [
              s("i", {
                class: "mdi mdi-cog text-lg leading-none",
                style: N({
                  color: re.value ? "#2563eb" : "#475569"
                })
              }, null, 4)
            ], 2),
            re.value ? (c(), b("div", {
              key: 0,
              ref_key: "columnMenuRef",
              ref: be,
              class: "absolute right-2 top-full mt-3 flex w-72 flex-col overflow-hidden rounded-md border border-slate-200 bg-white p-2 shadow-lg",
              style: N(Ul.value)
            }, [
              s("div", Cc, [
                s("button", {
                  type: "button",
                  class: "rw-btn-hover inline-flex h-8 items-center rounded border border-input bg-background px-2 text-sm text-slate-700 shadow-sm",
                  onClick: t[27] || (t[27] = (r) => re.value = !1)
                }, [
                  t[68] || (t[68] = s("i", { class: "mdi mdi-arrow-left-circle mr-1 text-base leading-none" }, null, -1)),
                  U(" " + g(o("actions.back", "Terug")), 1)
                ])
              ]),
              s("div", Sc, [
                s("button", {
                  type: "button",
                  class: j([
                    "rw-btn-hover inline-flex w-full items-center justify-center rounded border border-input bg-background px-2 py-1.5 text-xs font-medium shadow-sm",
                    st.value ? "border-blue-200 bg-blue-50" : "text-slate-700"
                  ]),
                  style: N({
                    color: st.value ? "#1d4ed8" : "#334155"
                  }),
                  onClick: t[28] || (t[28] = (r) => st.value = !st.value)
                }, g(o("table.config.title", "Configuratie")), 7),
                st.value ? (c(), b("div", _c, [
                  s("label", Mc, [
                    s("input", {
                      type: "checkbox",
                      name: `${O.value}-cfg-pagination`,
                      checked: Xe.value,
                      onChange: t[29] || (t[29] = (r) => Xe.value = r.target.checked)
                    }, null, 40, Fc),
                    U(" " + g(o(
                      "table.config.use_pagination",
                      "Gebruik paginering i.p.v. infinite scroll"
                    )), 1)
                  ]),
                  s("label", Oc, [
                    s("input", {
                      type: "checkbox",
                      name: `${O.value}-cfg-hscroll`,
                      checked: we.value,
                      onChange: t[30] || (t[30] = (r) => we.value = r.target.checked)
                    }, null, 40, Ic),
                    U(" " + g(o(
                      "table.config.enable_horizontal_scroll",
                      "Horizontale scroll inschakelen"
                    )), 1)
                  ]),
                  s("label", Rc, [
                    s("input", {
                      type: "checkbox",
                      name: `${O.value}-cfg-row-select`,
                      checked: Rt.value,
                      disabled: !Xe.value,
                      onChange: t[31] || (t[31] = (r) => Rt.value = r.target.checked)
                    }, null, 40, jc),
                    U(" " + g(o(
                      "table.config.show_row_quantity_select",
                      "Toon aantal rijen-selectie"
                    )), 1)
                  ]),
                  s("label", Ac, [
                    s("input", {
                      type: "checkbox",
                      name: `${O.value}-cfg-record-count`,
                      checked: jt.value,
                      onChange: t[32] || (t[32] = (r) => jt.value = r.target.checked)
                    }, null, 40, Ec),
                    U(" " + g(o(
                      "table.config.show_record_count",
                      "Toon aantal records"
                    )), 1)
                  ]),
                  s("div", $c, [
                    s("label", {
                      for: `${O.value}-cfg-height`,
                      class: "block text-xs text-slate-600"
                    }, g(o(
                      "table.config.height",
                      "Hoogte van de tabel"
                    )), 9, Tc),
                    s("input", {
                      id: `${O.value}-cfg-height`,
                      name: `${O.value}-cfg-height`,
                      "aria-label": o(
                        "table.config.height",
                        "Hoogte van de tabel"
                      ),
                      value: at.value,
                      class: "h-8 w-full rounded border border-slate-300 bg-white px-2 text-xs",
                      onInput: t[33] || (t[33] = (r) => at.value = r.target.value)
                    }, null, 40, Vc)
                  ]),
                  s("button", {
                    type: "button",
                    class: "rw-btn-hover inline-flex h-7 items-center rounded border border-input bg-background px-2 text-xs text-slate-700 shadow-sm",
                    onClick: Os
                  }, g(o(
                    "table.config.restore_default",
                    "Herstel standaard"
                  )), 1)
                ])) : _("", !0),
                s("div", zc, [
                  (c(!0), b(T, null, X(B.value, (r, a) => (c(), b("div", {
                    key: r.key,
                    "data-drag-preview-row": "true",
                    class: j([
                      "flex items-center gap-2 rounded border px-2 py-1.5",
                      _t.value === r.key ? "border-blue-300 bg-blue-50/60" : "border-slate-100"
                    ]),
                    onDragover: (n) => To(r.key, n),
                    onDrop: (n) => Vo(r.key, n)
                  }, [
                    s("span", {
                      class: "inline-flex h-6 w-6 cursor-move items-center justify-center rounded text-slate-500 hover:bg-slate-100",
                      draggable: "true",
                      "aria-label": o(
                        "table.column.aria.drag_column",
                        "Versleep kolom :label",
                        { label: x(r) }
                      ),
                      onDragstart: (n) => $o(
                        r.key,
                        n
                      ),
                      onDragend: kn
                    }, [...t[69] || (t[69] = [
                      s("i", { class: "mdi mdi-drag text-sm leading-none" }, null, -1)
                    ])], 40, Dc),
                    s("input", {
                      type: "checkbox",
                      name: `column-toggle-${r.key}`,
                      "aria-label": o(
                        "table.column.aria.toggle_column",
                        "Toon kolom :label",
                        { label: x(r) }
                      ),
                      checked: r.selected !== !1,
                      onChange: (n) => Ao(r.key)
                    }, null, 40, Nc),
                    s("span", Pc, g(x(r)), 1),
                    s("div", Bc, [
                      s("button", {
                        type: "button",
                        class: "rw-btn-hover inline-flex h-6 w-6 items-center justify-center rounded border border-input bg-background text-slate-500 shadow-sm disabled:opacity-30",
                        disabled: a === 0,
                        onClick: (n) => qa(r.key, -1)
                      }, [...t[70] || (t[70] = [
                        s("i", { class: "mdi mdi-chevron-up text-sm leading-none" }, null, -1)
                      ])], 8, Kc),
                      s("button", {
                        type: "button",
                        class: "rw-btn-hover inline-flex h-6 w-6 items-center justify-center rounded border border-input bg-background text-slate-500 shadow-sm disabled:opacity-30",
                        disabled: a === B.value.length - 1,
                        onClick: (n) => qa(r.key, 1)
                      }, [...t[71] || (t[71] = [
                        s("i", { class: "mdi mdi-chevron-down text-sm leading-none" }, null, -1)
                      ])], 8, qc)
                    ])
                  ], 42, Lc))), 128))
                ])
              ])
            ], 4)) : _("", !0)
          ])
        ])
      ], 4),
      s("div", {
        ref_key: "containerRef",
        ref: Te,
        class: j([
          "w-full min-w-0 max-w-full rounded-none border-x border-b border-t border-slate-200 bg-white",
          we.value ? "overflow-x-auto overflow-y-auto" : "overflow-hidden"
        ]),
        style: N({ height: Wl.value })
      }, [
        s("table", {
          class: "table-fixed border-collapse border-spacing-0 text-sm",
          style: N(ql.value)
        }, [
          s("thead", {
            class: "sticky top-0 bg-slate-50 text-slate-600",
            style: N(kt(Gl))
          }, [
            s("tr", null, [
              d.checkboxColumn ? (c(), b("th", {
                key: 0,
                class: "w-10 border-b border-r border-slate-200 px-3 py-2 text-left",
                style: N(Dr("checkbox", !0))
              }, [
                s("input", {
                  type: "checkbox",
                  name: `${O.value}-select-all-visible`,
                  "aria-label": o(
                    "table.aria.select_all_visible_rows",
                    "Selecteer alle zichtbare rijen"
                  ),
                  checked: si.value,
                  onChange: t[34] || (t[34] = (r) => io(r.target.checked))
                }, null, 40, Wc)
              ], 4)) : _("", !0),
              (c(!0), b(T, null, X(q.value, (r, a) => (c(), b("th", {
                key: r.key,
                class: j([
                  "group relative whitespace-nowrap border-b border-slate-200 px-2 py-2 text-left font-medium",
                  a < q.value.length - 1 ? "border-r border-slate-200" : ""
                ]),
                style: N(Mo(r, a))
              }, [
                s("div", Hc, [
                  s("button", {
                    type: "button",
                    class: j([
                      "inline-flex min-w-0 flex-1 items-center gap-0.5",
                      gn(r) ? "cursor-pointer" : "cursor-default"
                    ]),
                    title: l.manualOrdering ? o(
                      "table.manual_ordering_active",
                      "Manuele volgorde actief"
                    ) : void 0,
                    onClick: (n) => gn(r) ? eo(r.key) : void 0
                  }, [
                    s("span", Gc, g(x(r)), 1),
                    gn(r) ? (c(), b("i", {
                      key: 0,
                      class: j([
                        "mdi shrink-0 text-base leading-none",
                        Be.value === r.key ? Oe.value === "asc" ? "mdi-arrow-up" : "mdi-arrow-down" : "mdi-unfold-more-horizontal"
                      ])
                    }, null, 2)) : _("", !0)
                  ], 10, Uc),
                  s("div", Xc, [
                    we.value && Nr(a) ? (c(), b("button", {
                      key: 0,
                      type: "button",
                      class: "rw-btn-hover inline-flex h-6 w-6 items-center justify-center rounded",
                      "aria-label": o(
                        "table.column.aria.pin_column",
                        "Vastzetten kolom :label",
                        { label: x(r) }
                      ),
                      onClick: Ne((n) => Io(a), ["stop"])
                    }, [
                      s("i", {
                        class: j(["mdi text-sm leading-none", Nr(a)]),
                        style: N({
                          color: Nr(a) === "mdi-lock" ? "#2563eb" : "#64748b"
                        })
                      }, null, 6)
                    ], 8, Jc)) : _("", !0),
                    r.filterable ? (c(), b("button", {
                      key: 1,
                      type: "button",
                      class: j([
                        "rw-btn-hover inline-flex h-6 w-6 items-center justify-center rounded",
                        Lo(r.key) ? "text-green-600" : "text-slate-500"
                      ]),
                      "aria-label": o(
                        "filters.aria.filter_column",
                        "Filter kolom :label",
                        { label: x(r) }
                      ),
                      onClick: (n) => zo(r.key)
                    }, [...t[72] || (t[72] = [
                      s("i", { class: "mdi mdi-filter text-sm leading-none" }, null, -1)
                    ])], 10, Yc)) : _("", !0)
                  ])
                ]),
                oe.value === r.key ? (c(), b("div", {
                  key: 0,
                  class: "absolute left-0 top-full mt-1 min-w-72 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-xl",
                  style: N(kt(Xl))
                }, [
                  s("div", Qc, [
                    s("button", {
                      type: "button",
                      class: "rw-btn-hover inline-flex h-8 items-center rounded border border-input bg-background px-2 text-sm text-slate-700 shadow-sm",
                      onClick: t[35] || (t[35] = (n) => oe.value = null)
                    }, [
                      t[73] || (t[73] = s("i", { class: "mdi mdi-arrow-left-circle mr-1 text-base leading-none" }, null, -1)),
                      U(" " + g(o("actions.back", "Terug")), 1)
                    ]),
                    t[75] || (t[75] = s("div", { class: "ml-auto" }, null, -1)),
                    s("button", {
                      type: "button",
                      class: "inline-flex h-8 items-center rounded border border-red-200 bg-red-50 px-2 text-sm text-red-700 hover:bg-red-100",
                      onClick: (n) => Do(r.key)
                    }, [
                      t[74] || (t[74] = s("i", { class: "mdi mdi-delete mr-1 text-base leading-none" }, null, -1)),
                      U(" " + g(o("actions.clear", "Wissen")), 1)
                    ], 8, Zc)
                  ]),
                  s("div", ef, [
                    s("select", {
                      name: `filter-mode-${r.key}`,
                      "aria-label": o(
                        "filters.aria.operator_for",
                        "Filter operator voor :label",
                        { label: x(r) }
                      ),
                      value: ye.value[r.key] || rr(
                        Re.value[r.key]
                      ),
                      class: "h-8 rounded-md border border-slate-300 bg-white px-2 text-xs",
                      onChange: (n) => No(
                        r.key,
                        n.target.value
                      )
                    }, [
                      (c(!0), b(T, null, X(vi(
                        Re.value[r.key]
                      ), (n) => (c(), b("option", {
                        key: n.value,
                        value: n.value
                      }, g(n.label), 9, rf))), 128))
                    ], 40, tf),
                    (ye.value[r.key] || rr(
                      Re.value[r.key]
                    )) === "tussen" ? (c(), b(T, { key: 0 }, [
                      s("label", nf, g(o("filters.from", "Van")), 1),
                      s("input", {
                        type: "date",
                        name: `filter-from-${r.key}`,
                        "aria-label": o(
                          "filters.aria.from_date_for",
                          "Filter vanaf datum voor :label",
                          {
                            label: x(
                              r
                            )
                          }
                        ),
                        value: se.value[r.key]?.from || "",
                        class: "h-8 rounded-md border border-slate-300 px-2 text-xs",
                        onInput: (n) => Ha(
                          r.key,
                          "from",
                          n.target.value
                        )
                      }, null, 40, af),
                      s("label", lf, g(o("filters.to", "Tot")), 1),
                      s("input", {
                        type: "date",
                        name: `filter-to-${r.key}`,
                        "aria-label": o(
                          "filters.aria.to_date_for",
                          "Filter tot datum voor :label",
                          {
                            label: x(
                              r
                            )
                          }
                        ),
                        value: se.value[r.key]?.to || "",
                        class: "h-8 rounded-md border border-slate-300 px-2 text-xs",
                        onInput: (n) => Ha(
                          r.key,
                          "to",
                          n.target.value
                        )
                      }, null, 40, of)
                    ], 64)) : Re.value[r.key] === "boolean" ? (c(), b(T, { key: 1 }, [
                      s("label", sf, g(o("filters.value", "Waarde")), 1),
                      s("select", {
                        name: `filter-value-${r.key}`,
                        "aria-label": o(
                          "filters.aria.value_for",
                          "Filter waarde voor :label",
                          {
                            label: x(
                              r
                            )
                          }
                        ),
                        value: se.value[r.key] ?? "",
                        class: "h-8 rounded-md border border-slate-300 bg-white px-2 text-xs",
                        onChange: (n) => Wa(
                          r.key,
                          n.target.value
                        )
                      }, [
                        s("option", df, g(o(
                          "filters.choose_value",
                          "Kies waarde"
                        )), 1),
                        s("option", cf, g(o("common.yes", "Ja")), 1),
                        s("option", ff, g(o("common.no", "Nee")), 1)
                      ], 40, uf)
                    ], 64)) : (c(), b(T, { key: 2 }, [
                      s("label", bf, g(o("filters.value", "Waarde")), 1),
                      s("input", {
                        name: `filter-value-${r.key}`,
                        "aria-label": o(
                          "filters.aria.value_for",
                          "Filter waarde voor :label",
                          {
                            label: x(
                              r
                            )
                          }
                        ),
                        type: Bo(
                          Re.value[r.key],
                          ye.value[r.key]
                        ),
                        value: se.value[r.key] ?? "",
                        class: "h-8 rounded-md border border-slate-300 px-2 text-xs",
                        onInput: (n) => Wa(
                          r.key,
                          n.target.value
                        )
                      }, null, 40, pf)
                    ], 64))
                  ])
                ], 4)) : _("", !0),
                s("button", {
                  type: "button",
                  class: "bg-transparent p-0",
                  "aria-label": o(
                    "table.column.aria.resize_column",
                    "Wijzig breedte van :label",
                    { label: x(r) }
                  ),
                  style: N({
                    position: "absolute",
                    top: "0",
                    bottom: "0",
                    right: "-6px",
                    width: "12px",
                    zIndex: kt(he).resizeHandle,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "stretch",
                    cursor: "col-resize"
                  }),
                  onMousedown: Ne((n) => Ro(n, r.key), ["stop", "prevent"]),
                  onClick: t[36] || (t[36] = Ne(() => {
                  }, ["stop", "prevent"]))
                }, [...t[76] || (t[76] = [
                  s("span", {
                    "aria-hidden": "true",
                    class: "h-full rounded transition-colors group-hover:bg-blue-500",
                    style: {
                      width: "1px",
                      backgroundColor: "transparent"
                    }
                  }, null, -1)
                ])], 44, vf)
              ], 6))), 128))
            ])
          ], 4),
          s("tbody", null, [
            $e.value ? (c(), b("tr", gf, [
              s("td", {
                colspan: q.value.length + (d.checkboxColumn ? 1 : 0),
                class: "px-3 py-4 text-center text-slate-500"
              }, g(o("table.loading", "Laden...")), 9, yf)
            ])) : Z.value.length === 0 ? (c(), b("tr", mf, [
              s("td", {
                colspan: q.value.length + (d.checkboxColumn ? 1 : 0),
                class: "px-3 py-4 text-center text-slate-500"
              }, [
                s("span", xf, [
                  t[77] || (t[77] = s("i", {
                    class: "mdi mdi-emoticon-confused text-base leading-none",
                    "aria-hidden": "true"
                  }, null, -1)),
                  U(" " + g(o(
                    "table.no_records",
                    "Geen records gevonden."
                  )), 1)
                ])
              ], 8, hf)
            ])) : _("", !0),
            (c(!0), b(T, null, X(Z.value, (r, a) => (c(), b(T, {
              key: `${r[d.idKey] ?? "row"}-${a}`
            }, [
              qo(r) ? (c(), b("tr", wf, [
                d.checkboxColumn ? (c(), b("td", {
                  key: 0,
                  class: "border-r border-slate-200 px-3 py-2",
                  style: N(Dr())
                }, null, 4)) : _("", !0),
                (c(!0), b(T, null, X(q.value, (n, u) => (c(), b("td", {
                  key: `create-above-${r[d.idKey]}-${n.key}`,
                  class: j([
                    "px-3 py-2",
                    u < q.value.length - 1 ? "border-r border-slate-200" : ""
                  ]),
                  style: N(Ba(n, u))
                }, [
                  s("div", {
                    class: j(["flex items-center", u === 0 ? "gap-2" : ""])
                  }, [
                    u === 0 ? (c(), b("button", {
                      key: 0,
                      type: "button",
                      class: "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded border border-red-200 text-red-600 hover:bg-red-50",
                      "aria-label": o(
                        "actions.cancel_new_row",
                        "Annuleer nieuwe rij"
                      ),
                      onClick: Ne(wt, ["stop"])
                    }, [...t[78] || (t[78] = [
                      s("i", { class: "mdi mdi-delete text-base leading-none" }, null, -1)
                    ])], 8, kf)) : _("", !0),
                    s("div", Cf, [
                      n.editable ? (c(), b(T, { key: 0 }, [
                        (n.editInput === "select" || n.editInput === "autocomplete") && Array.isArray(
                          n.editItems
                        ) ? (c(), hr(Yn, {
                          key: 0,
                          ref_for: !0,
                          ref: (i) => Gt(
                            n.editField || n.key,
                            i
                          ),
                          name: `create-${n.editField || n.key}`,
                          "aria-label": o(
                            "table.aria.new_value_for",
                            "Nieuwe waarde voor :label",
                            {
                              label: x(
                                n
                              )
                            }
                          ),
                          "data-create-field": n.editField || n.key,
                          "model-value": z.value[n.editField || n.key],
                          "display-value": mn(
                            n,
                            z.value
                          ),
                          items: n.editItems,
                          "item-title": n.editItemTitle || "title",
                          "item-value": n.editItemValue || "value",
                          "search-fields": Array.isArray(
                            n.editSearchFields
                          ) ? n.editSearchFields : [],
                          "allow-custom": n.editInput === "autocomplete" && n.editAutocompleteAllowCustom === !0,
                          "custom-trim": n.editCustomTrim !== !1,
                          "custom-min-length": Number(
                            n.editCustomMinLength || 0
                          ),
                          multiple: n.editMultiple === !0,
                          "show-checkboxes": n.editShowCheckboxes === !0,
                          "selection-chips": n.editSelectionChips !== !1,
                          "max-selection-chips": Number(
                            n.editMaxSelectionChips || 3
                          ),
                          "close-on-select": mt(
                            n,
                            "editCloseOnSelect"
                          ) ? n.editCloseOnSelect === !0 : n.editMultiple !== !0,
                          invalid: !!ke(
                            n
                          ),
                          "error-message": ke(
                            n
                          ),
                          "required-missing": sr(n) && ur(
                            z.value[n.editField || n.key]
                          ) && !ke(
                            n
                          ),
                          "required-highlight-color": dr(
                            n
                          ),
                          messages: J.value,
                          "onUpdate:modelValue": (i) => {
                            z.value[n.editField || n.key] = i, $t(
                              n
                            ), ut();
                          },
                          onResolve: (i) => Aa(
                            n,
                            i
                          ),
                          onBlur: (i) => Ht(n),
                          onKeydown: Ut
                        }, null, 8, ["name", "aria-label", "data-create-field", "model-value", "display-value", "items", "item-title", "item-value", "search-fields", "allow-custom", "custom-trim", "custom-min-length", "multiple", "show-checkboxes", "selection-chips", "max-selection-chips", "close-on-select", "invalid", "error-message", "required-missing", "required-highlight-color", "messages", "onUpdate:modelValue", "onResolve", "onBlur"])) : n.type === "boolean" ? (c(), b("input", {
                          key: 1,
                          ref_for: !0,
                          ref: (i) => Gt(
                            n.editField || n.key,
                            i
                          ),
                          "data-create-field": n.editField || n.key,
                          type: "checkbox",
                          name: `create-${n.editField || n.key}`,
                          "aria-label": o(
                            "table.aria.new_value_for",
                            "Nieuwe waarde voor :label",
                            {
                              label: x(
                                n
                              )
                            }
                          ),
                          title: ke(
                            n
                          ),
                          class: j(
                            ke(
                              n
                            ) ? "rounded ring-2 ring-red-400" : ""
                          ),
                          checked: !!z.value[n.editField || n.key],
                          onChange: (i) => {
                            z.value[n.editField || n.key] = i.target.checked, $t(
                              n
                            ), ut();
                          },
                          onBlur: (i) => Ht(n),
                          onKeydown: Ut
                        }, null, 42, Sf)) : (c(), b("input", {
                          key: 2,
                          ref_for: !0,
                          ref: (i) => Gt(
                            n.editField || n.key,
                            i
                          ),
                          "data-create-field": n.editField || n.key,
                          type: n.type === "number" ? "number" : "text",
                          name: `create-${n.editField || n.key}`,
                          "aria-label": o(
                            "table.aria.new_value_for",
                            "Nieuwe waarde voor :label",
                            {
                              label: x(
                                n
                              )
                            }
                          ),
                          value: z.value[n.editField || n.key] ?? "",
                          "aria-invalid": ke(
                            n
                          ) ? "true" : "false",
                          title: ke(
                            n
                          ),
                          class: j([
                            "h-8 w-full rounded border px-2 text-sm",
                            ke(
                              n
                            ) ? "border-red-400 bg-red-50" : "border-slate-300"
                          ]),
                          style: N(
                            rl(
                              n
                            )
                          ),
                          onInput: (i) => {
                            z.value[n.editField || n.key] = i.target.value, $t(
                              n
                            ), ut();
                          },
                          onBlur: (i) => Ht(n),
                          onKeydown: Ut
                        }, null, 46, _f))
                      ], 64)) : (c(), b("span", Mf, "-"))
                    ])
                  ], 2)
                ], 6))), 128))
              ])) : _("", !0),
              s("tr", {
                class: j(["group hover:bg-slate-100/90", vs()]),
                onClick: (n) => hs(a),
                onMouseover: (n) => ys(r),
                onMouseleave: (n) => ms(r)
              }, [
                d.checkboxColumn ? (c(), b("td", {
                  key: 0,
                  class: "border-r border-slate-200 px-3 py-2",
                  style: N(
                    cl(
                      Dr(),
                      r,
                      a
                    )
                  )
                }, [
                  s("input", {
                    type: "checkbox",
                    name: `row-select-${r[d.idKey]}`,
                    "aria-label": o(
                      "table.aria.select_row",
                      "Selecteer rij :id",
                      { id: r[d.idKey] }
                    ),
                    checked: d.checkedRows.includes(r[d.idKey]),
                    onChange: (n) => lo(r[d.idKey]),
                    onClick: t[37] || (t[37] = Ne(() => {
                    }, ["stop"]))
                  }, null, 40, Of)
                ], 4)) : _("", !0),
                (c(!0), b(T, null, X(q.value, (n, u) => (c(), b("td", {
                  key: `${r[d.idKey] ?? a}-${n.key}`,
                  class: j(["relative px-3 py-2 text-slate-700", [
                    Co(n),
                    u < q.value.length - 1 ? "border-r border-slate-200" : "",
                    jo(
                      r,
                      n,
                      a,
                      u
                    )
                  ]]),
                  style: N(
                    cl(
                      Oo(
                        r,
                        n,
                        a,
                        u
                      ),
                      r,
                      a
                    )
                  ),
                  onClick: Ne((i) => ro(
                    n,
                    r,
                    a,
                    u
                  ), ["stop"])
                }, [
                  $n(r, u) ? (c(), b("div", Rf, [
                    s("button", {
                      type: "button",
                      class: j([
                        "rw-btn-hover inline-flex h-7 w-7 items-center justify-center rounded border border-input bg-background text-slate-600 shadow-sm transition-opacity",
                        ps(r) ? "opacity-100" : "opacity-0 focus:opacity-100 group-hover:opacity-100"
                      ]),
                      onClick: Ne((i) => ul(r[d.idKey]), ["stop"])
                    }, [...t[79] || (t[79] = [
                      s("i", { class: "mdi mdi-dots-vertical text-base leading-none" }, null, -1)
                    ])], 10, jf),
                    En(r[d.idKey]) ? (c(), b("div", {
                      key: 0,
                      class: "absolute left-full top-0 ml-1 min-w-56 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-xl",
                      style: N(kt(Jl))
                    }, [
                      s("div", Af, [
                        s("button", {
                          type: "button",
                          class: "rw-btn-hover inline-flex h-8 items-center rounded border border-input bg-background px-2 text-sm text-slate-700 shadow-sm",
                          onClick: t[38] || (t[38] = Ne((i) => Qe.value = null, ["stop"]))
                        }, [
                          t[80] || (t[80] = s("i", { class: "mdi mdi-arrow-left-circle mr-1 text-base leading-none" }, null, -1)),
                          U(" " + g(o("actions.back", "Terug")), 1)
                        ])
                      ]),
                      s("div", Ef, [
                        (c(!0), b(T, null, X(ls(r), (i, p) => (c(), b("button", {
                          key: `${r[d.idKey]}-${p}`,
                          type: "button",
                          disabled: i.disabled,
                          class: "rw-btn-hover flex w-full items-center gap-2 whitespace-nowrap rounded px-2 py-1.5 text-left text-sm text-slate-700 disabled:opacity-40",
                          onClick: Ne((y) => is(i, r), ["stop"])
                        }, [
                          i.icon ? (c(), b("i", {
                            key: 0,
                            class: j(["mdi text-base leading-none", i.icon])
                          }, null, 2)) : _("", !0),
                          U(" " + g(i.label), 1)
                        ], 8, $f))), 128))
                      ])
                    ], 4)) : _("", !0)
                  ])) : _("", !0),
                  Br(r, n) ? (c(), b(T, { key: 1 }, [
                    (n.editInput === "select" || n.editInput === "autocomplete") && Array.isArray(n.editItems) ? (c(), hr(Yn, {
                      key: 0,
                      ref_for: !0,
                      ref: (i) => An(
                        r[d.idKey],
                        n.key,
                        i
                      ),
                      name: `edit-${r[d.idKey]}-${n.editField || n.key}`,
                      "aria-label": o(
                        "table.aria.edit_field",
                        "Bewerk :label",
                        { label: x(n) }
                      ),
                      "model-value": Me.value,
                      "display-value": mn(
                        n,
                        r
                      ),
                      items: n.editItems,
                      "item-title": n.editItemTitle || "title",
                      "item-value": n.editItemValue || "value",
                      "search-fields": Array.isArray(
                        n.editSearchFields
                      ) ? n.editSearchFields : [],
                      "allow-custom": n.editInput === "autocomplete" && n.editAutocompleteAllowCustom === !0,
                      "custom-trim": n.editCustomTrim !== !1,
                      "custom-min-length": Number(
                        n.editCustomMinLength || 0
                      ),
                      multiple: n.editMultiple === !0,
                      "show-checkboxes": n.editShowCheckboxes === !0,
                      "selection-chips": n.editSelectionChips !== !1,
                      "max-selection-chips": Number(
                        n.editMaxSelectionChips || 3
                      ),
                      "close-on-select": mt(
                        n,
                        "editCloseOnSelect"
                      ) ? n.editCloseOnSelect === !0 : n.editMultiple !== !0,
                      invalid: !!dt(
                        r[d.idKey],
                        n
                      ),
                      "error-message": dt(
                        r[d.idKey],
                        n
                      ),
                      "required-missing": sr(n) && ur(Me.value) && !dt(
                        r[d.idKey],
                        n
                      ),
                      "required-highlight-color": dr(n),
                      messages: J.value,
                      "onUpdate:modelValue": (i) => {
                        Me.value = i, Pr(
                          r[d.idKey],
                          n
                        ), ut();
                      },
                      onResolve: (i) => so(
                        n,
                        i
                      ),
                      onBlur: (i) => Rn(r, n),
                      onKeydown: jn
                    }, null, 8, ["name", "aria-label", "model-value", "display-value", "items", "item-title", "item-value", "search-fields", "allow-custom", "custom-trim", "custom-min-length", "multiple", "show-checkboxes", "selection-chips", "max-selection-chips", "close-on-select", "invalid", "error-message", "required-missing", "required-highlight-color", "messages", "onUpdate:modelValue", "onResolve", "onBlur"])) : n.type === "boolean" ? (c(), b("input", {
                      key: 1,
                      ref_for: !0,
                      ref: (i) => An(
                        r[d.idKey],
                        n.key,
                        i
                      ),
                      type: "checkbox",
                      name: `edit-${r[d.idKey]}-${n.editField || n.key}`,
                      "aria-label": o(
                        "table.aria.edit_field",
                        "Bewerk :label",
                        { label: x(n) }
                      ),
                      title: dt(
                        r[d.idKey],
                        n
                      ),
                      class: j(
                        dt(
                          r[d.idKey],
                          n
                        ) ? "rounded ring-2 ring-red-400" : ""
                      ),
                      checked: !!Me.value,
                      onChange: (i) => {
                        Me.value = i.target.checked, Pr(
                          r[d.idKey],
                          n
                        ), ut();
                      },
                      onBlur: (i) => Rn(r, n),
                      onKeydown: jn
                    }, null, 42, Tf)) : (c(), b("input", {
                      key: 2,
                      ref_for: !0,
                      ref: (i) => An(
                        r[d.idKey],
                        n.key,
                        i
                      ),
                      type: n.type === "number" ? "number" : "text",
                      name: `edit-${r[d.idKey]}-${n.editField || n.key}`,
                      "aria-label": o(
                        "table.aria.edit_field",
                        "Bewerk :label",
                        { label: x(n) }
                      ),
                      value: Me.value,
                      "aria-invalid": dt(
                        r[d.idKey],
                        n
                      ) ? "true" : "false",
                      title: dt(
                        r[d.idKey],
                        n
                      ),
                      class: j([
                        "h-8 w-full rounded border px-2 text-sm",
                        dt(
                          r[d.idKey],
                          n
                        ) ? "border-red-400 bg-red-50" : "border-slate-300"
                      ]),
                      style: N(
                        es(r, n)
                      ),
                      onInput: (i) => {
                        Me.value = i.target.value, Pr(
                          r[d.idKey],
                          n
                        ), ut();
                      },
                      onBlur: (i) => Rn(r, n),
                      onKeydown: jn
                    }, null, 46, Vf))
                  ], 64)) : (c(), b("div", {
                    key: 2,
                    class: j(["flex w-full min-w-0 items-center", [
                      ho(n),
                      xo(
                        n,
                        $n(
                          r,
                          u
                        )
                      )
                    ]])
                  }, [
                    hn(n) ? (c(), b("i", {
                      key: 0,
                      class: j([
                        "mdi text-base leading-none",
                        co(n, r)
                      ]),
                      style: N({
                        color: fo(
                          n,
                          r
                        )
                      })
                    }, null, 6)) : po(n, r) ? (c(), b("span", {
                      key: 1,
                      class: j(mo(n)),
                      style: N(yo(n, r))
                    }, [
                      n.chipPrependIcon ? (c(), b("i", {
                        key: 0,
                        class: j([
                          "mdi text-[14px] leading-none",
                          n.chipPrependIcon
                        ])
                      }, null, 2)) : _("", !0),
                      s("span", zf, g(Va(
                        n,
                        r
                      )), 1)
                    ], 6)) : go(
                      n,
                      r
                    ) ? (c(), b("span", Lf, [
                      (c(!0), b(T, null, X(vo(
                        n,
                        r
                      ), (i, p) => (c(), b("span", {
                        key: `multi-chip-${p}`,
                        class: "inline-flex max-w-full items-center rounded-full border border-slate-300 bg-slate-100 px-2 py-0.5 text-xs font-medium leading-5 text-slate-700"
                      }, [
                        s("span", Df, g(i), 1)
                      ]))), 128)),
                      La(
                        n,
                        r
                      ) > 0 ? (c(), b("span", Nf, " +" + g(La(
                        n,
                        r
                      )), 1)) : _("", !0)
                    ])) : (c(), b("span", {
                      key: 3,
                      class: j(
                        So(
                          n,
                          r
                        )
                      )
                    }, g(yn(r, n)), 3))
                  ], 2))
                ], 14, If))), 128))
              ], 42, Ff)
            ], 64))), 128)),
            sa.value ? (c(), b("tr", Pf, [
              d.checkboxColumn ? (c(), b("td", {
                key: 0,
                class: "border-r border-slate-200 px-3 py-2",
                style: N(Dr())
              }, null, 4)) : _("", !0),
              (c(!0), b(T, null, X(q.value, (r, a) => (c(), b("td", {
                key: `create-${r.key}`,
                class: j([
                  "px-3 py-2",
                  a < q.value.length - 1 ? "border-r border-slate-200" : ""
                ]),
                style: N(Ba(r, a))
              }, [
                s("div", {
                  class: j(["flex items-center", a === 0 ? "gap-2" : ""])
                }, [
                  a === 0 ? (c(), b("button", {
                    key: 0,
                    type: "button",
                    class: "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded border border-red-200 text-red-600 hover:bg-red-50",
                    "aria-label": o(
                      "actions.cancel_new_row",
                      "Annuleer nieuwe rij"
                    ),
                    onClick: Ne(wt, ["stop"])
                  }, [...t[81] || (t[81] = [
                    s("i", { class: "mdi mdi-delete text-base leading-none" }, null, -1)
                  ])], 8, Bf)) : _("", !0),
                  s("div", Kf, [
                    r.editable ? (c(), b(T, { key: 0 }, [
                      (r.editInput === "select" || r.editInput === "autocomplete") && Array.isArray(r.editItems) ? (c(), hr(Yn, {
                        key: 0,
                        ref_for: !0,
                        ref: (n) => Gt(
                          r.editField || r.key,
                          n
                        ),
                        name: `create-${r.editField || r.key}`,
                        "aria-label": o(
                          "table.aria.new_value_for",
                          "Nieuwe waarde voor :label",
                          {
                            label: x(
                              r
                            )
                          }
                        ),
                        "data-create-field": r.editField || r.key,
                        "model-value": z.value[r.editField || r.key],
                        "display-value": mn(
                          r,
                          z.value
                        ),
                        items: r.editItems,
                        "item-title": r.editItemTitle || "title",
                        "item-value": r.editItemValue || "value",
                        "search-fields": Array.isArray(
                          r.editSearchFields
                        ) ? r.editSearchFields : [],
                        "allow-custom": r.editInput === "autocomplete" && r.editAutocompleteAllowCustom === !0,
                        "custom-trim": r.editCustomTrim !== !1,
                        "custom-min-length": Number(
                          r.editCustomMinLength || 0
                        ),
                        multiple: r.editMultiple === !0,
                        "show-checkboxes": r.editShowCheckboxes === !0,
                        "selection-chips": r.editSelectionChips !== !1,
                        "max-selection-chips": Number(
                          r.editMaxSelectionChips || 3
                        ),
                        "close-on-select": mt(
                          r,
                          "editCloseOnSelect"
                        ) ? r.editCloseOnSelect === !0 : r.editMultiple !== !0,
                        invalid: !!ke(
                          r
                        ),
                        "error-message": ke(r),
                        "required-missing": sr(r) && ur(
                          z.value[r.editField || r.key]
                        ) && !ke(r),
                        "required-highlight-color": dr(r),
                        messages: J.value,
                        "onUpdate:modelValue": (n) => {
                          z.value[r.editField || r.key] = n, $t(
                            r
                          ), ut();
                        },
                        onResolve: (n) => Aa(
                          r,
                          n
                        ),
                        onBlur: (n) => Ht(r),
                        onKeydown: Ut
                      }, null, 8, ["name", "aria-label", "data-create-field", "model-value", "display-value", "items", "item-title", "item-value", "search-fields", "allow-custom", "custom-trim", "custom-min-length", "multiple", "show-checkboxes", "selection-chips", "max-selection-chips", "close-on-select", "invalid", "error-message", "required-missing", "required-highlight-color", "messages", "onUpdate:modelValue", "onResolve", "onBlur"])) : r.type === "boolean" ? (c(), b("input", {
                        key: 1,
                        ref_for: !0,
                        ref: (n) => Gt(
                          r.editField || r.key,
                          n
                        ),
                        "data-create-field": r.editField || r.key,
                        type: "checkbox",
                        name: `create-${r.editField || r.key}`,
                        "aria-label": o(
                          "table.aria.new_value_for",
                          "Nieuwe waarde voor :label",
                          {
                            label: x(
                              r
                            )
                          }
                        ),
                        title: ke(r),
                        class: j(
                          ke(r) ? "rounded ring-2 ring-red-400" : ""
                        ),
                        checked: !!z.value[r.editField || r.key],
                        onChange: (n) => {
                          z.value[r.editField || r.key] = n.target.checked, $t(
                            r
                          ), ut();
                        },
                        onBlur: (n) => Ht(r),
                        onKeydown: Ut
                      }, null, 42, qf)) : (c(), b("input", {
                        key: 2,
                        ref_for: !0,
                        ref: (n) => Gt(
                          r.editField || r.key,
                          n
                        ),
                        "data-create-field": r.editField || r.key,
                        type: r.type === "number" ? "number" : "text",
                        name: `create-${r.editField || r.key}`,
                        "aria-label": o(
                          "table.aria.new_value_for",
                          "Nieuwe waarde voor :label",
                          {
                            label: x(
                              r
                            )
                          }
                        ),
                        value: z.value[r.editField || r.key] ?? "",
                        "aria-invalid": ke(r) ? "true" : "false",
                        title: ke(r),
                        class: j([
                          "h-8 w-full rounded border px-2 text-sm",
                          ke(r) ? "border-red-400 bg-red-50" : "border-slate-300"
                        ]),
                        style: N(
                          rl(r)
                        ),
                        onInput: (n) => {
                          z.value[r.editField || r.key] = n.target.value, $t(
                            r
                          ), ut();
                        },
                        onBlur: (n) => Ht(r),
                        onKeydown: Ut
                      }, null, 46, Wf))
                    ], 64)) : (c(), b("span", Hf, "-"))
                  ])
                ], 2)
              ], 6))), 128))
            ])) : _("", !0)
          ])
        ], 4),
        s("div", {
          ref_key: "infiniteSentinelRef",
          ref: ie,
          class: "h-1 w-full"
        }, null, 512)
      ], 6),
      s("div", Uf, [
        !ze.value && Bt.value > 1 ? (c(), b("div", Gf, [
          (c(!0), b(T, null, X(ii.value, (r, a) => (c(), b("button", {
            key: `pagination-${a}-${r}`,
            type: "button",
            class: j(["inline-flex h-8 min-w-8 items-center justify-center border border-input bg-background px-2 text-xs text-slate-700 shadow-sm", [
              a > 0 ? "-ml-px" : "",
              r === Y.value ? "z-10 bg-blue-50 font-semibold text-blue-700" : "rw-btn-hover",
              r === "..." ? "cursor-default text-slate-400 hover:bg-white" : ""
            ]]),
            disabled: r === "...",
            onClick: (n) => to(r)
          }, g(r), 11, Xf))), 128))
        ])) : _("", !0),
        s("div", Jf, [
          jt.value ? (c(), b("p", Yf, g(o("table.record_count", "Aantal rijen: :count", {
            count: oa.value
          })), 1)) : _("", !0)
        ])
      ])
    ], 512));
  }
}, ab = /* @__PURE__ */ Nl(Zf, [["__scopeId", "data-v-8d5214fa"]]);
export {
  ab as RwTable,
  rb as rwTableContract,
  nb as rwTableFeatureMatrix
};
//# sourceMappingURL=index.js.map
