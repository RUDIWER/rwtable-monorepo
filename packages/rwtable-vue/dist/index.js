import { ref as h, computed as k, watch as G, nextTick as re, onBeforeUnmount as pl, openBlock as c, createElementBlock as f, normalizeStyle as V, normalizeClass as A, createElementVNode as s, Fragment as R, renderList as X, toDisplayString as g, withModifiers as Ne, createCommentVNode as C, createBlock as er, Teleport as Ji, createTextVNode as Y, onMounted as ku, unref as _t, withDirectives as ke, vModelText as rn, vModelSelect as bt, vModelCheckbox as nn } from "vue";
import { usePage as Cu, router as _u } from "@inertiajs/vue3";
const pb = {
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
}, bb = {
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
var an = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Su(d) {
  return d && d.__esModule && Object.prototype.hasOwnProperty.call(d, "default") ? d.default : d;
}
var Zn, Qi;
function bl() {
  if (Qi) return Zn;
  Qi = 1;
  function d(_) {
    var i = typeof _;
    return _ != null && (i == "object" || i == "function");
  }
  return Zn = d, Zn;
}
var ea, Zi;
function Mu() {
  if (Zi) return ea;
  Zi = 1;
  var d = typeof an == "object" && an && an.Object === Object && an;
  return ea = d, ea;
}
var ta, el;
function vl() {
  if (el) return ta;
  el = 1;
  var d = Mu(), _ = typeof self == "object" && self && self.Object === Object && self, i = d || _ || Function("return this")();
  return ta = i, ta;
}
var ra, tl;
function Fu() {
  if (tl) return ra;
  tl = 1;
  var d = vl(), _ = function() {
    return d.Date.now();
  };
  return ra = _, ra;
}
var na, rl;
function Ou() {
  if (rl) return na;
  rl = 1;
  var d = /\s/;
  function _(i) {
    for (var v = i.length; v-- && d.test(i.charAt(v)); )
      ;
    return v;
  }
  return na = _, na;
}
var aa, nl;
function Iu() {
  if (nl) return aa;
  nl = 1;
  var d = Ou(), _ = /^\s+/;
  function i(v) {
    return v && v.slice(0, d(v) + 1).replace(_, "");
  }
  return aa = i, aa;
}
var ia, al;
function gl() {
  if (al) return ia;
  al = 1;
  var d = vl(), _ = d.Symbol;
  return ia = _, ia;
}
var la, il;
function Au() {
  if (il) return la;
  il = 1;
  var d = gl(), _ = Object.prototype, i = _.hasOwnProperty, v = _.toString, S = d ? d.toStringTag : void 0;
  function $(ne) {
    var J = i.call(ne, S), E = ne[S];
    try {
      ne[S] = void 0;
      var o = !0;
    } catch {
    }
    var T = v.call(ne);
    return o && (J ? ne[S] = E : delete ne[S]), T;
  }
  return la = $, la;
}
var oa, ll;
function Ru() {
  if (ll) return oa;
  ll = 1;
  var d = Object.prototype, _ = d.toString;
  function i(v) {
    return _.call(v);
  }
  return oa = i, oa;
}
var sa, ol;
function Eu() {
  if (ol) return sa;
  ol = 1;
  var d = gl(), _ = Au(), i = Ru(), v = "[object Null]", S = "[object Undefined]", $ = d ? d.toStringTag : void 0;
  function ne(J) {
    return J == null ? J === void 0 ? S : v : $ && $ in Object(J) ? _(J) : i(J);
  }
  return sa = ne, sa;
}
var ua, sl;
function Tu() {
  if (sl) return ua;
  sl = 1;
  function d(_) {
    return _ != null && typeof _ == "object";
  }
  return ua = d, ua;
}
var da, ul;
function ju() {
  if (ul) return da;
  ul = 1;
  var d = Eu(), _ = Tu(), i = "[object Symbol]";
  function v(S) {
    return typeof S == "symbol" || _(S) && d(S) == i;
  }
  return da = v, da;
}
var ca, dl;
function $u() {
  if (dl) return ca;
  dl = 1;
  var d = Iu(), _ = bl(), i = ju(), v = NaN, S = /^[-+]0x[0-9a-f]+$/i, $ = /^0b[01]+$/i, ne = /^0o[0-7]+$/i, J = parseInt;
  function E(o) {
    if (typeof o == "number")
      return o;
    if (i(o))
      return v;
    if (_(o)) {
      var T = typeof o.valueOf == "function" ? o.valueOf() : o;
      o = _(T) ? T + "" : T;
    }
    if (typeof o != "string")
      return o === 0 ? o : +o;
    o = d(o);
    var x = $.test(o);
    return x || ne.test(o) ? J(o.slice(2), x ? 2 : 8) : S.test(o) ? v : +o;
  }
  return ca = E, ca;
}
var fa, cl;
function zu() {
  if (cl) return fa;
  cl = 1;
  var d = bl(), _ = Fu(), i = $u(), v = "Expected a function", S = Math.max, $ = Math.min;
  function ne(J, E, o) {
    var T, x, de, Te, ce, he, be = 0, Q = !1, q = !1, je = !0;
    if (typeof J != "function")
      throw new TypeError(v);
    E = i(E) || 0, d(o) && (Q = !!o.leading, q = "maxWait" in o, de = q ? S(i(o.maxWait) || 0, E) : de, je = "trailing" in o ? !!o.trailing : je);
    function Ce(N) {
      var le = T, oe = x;
      return T = x = void 0, be = N, Te = J.apply(oe, le), Te;
    }
    function z(N) {
      return be = N, ce = setTimeout(me, E), Q ? Ce(N) : Te;
    }
    function Ge(N) {
      var le = N - he, oe = N - be, se = E - le;
      return q ? $(se, de - oe) : se;
    }
    function Oe(N) {
      var le = N - he, oe = N - be;
      return he === void 0 || le >= E || le < 0 || q && oe >= de;
    }
    function me() {
      var N = _();
      if (Oe(N))
        return Ie(N);
      ce = setTimeout(me, Ge(N));
    }
    function Ie(N) {
      return ce = void 0, je && T ? Ce(N) : (T = x = void 0, Te);
    }
    function Be() {
      ce !== void 0 && clearTimeout(ce), be = 0, T = he = x = ce = void 0;
    }
    function ae() {
      return ce === void 0 ? Te : Ie(_());
    }
    function xe() {
      var N = _(), le = Oe(N);
      if (T = arguments, x = this, he = N, le) {
        if (ce === void 0)
          return z(he);
        if (q)
          return clearTimeout(ce), ce = setTimeout(me, E), Ce(he);
      }
      return ce === void 0 && (ce = setTimeout(me, E)), Te;
    }
    return xe.cancel = Be, xe.flush = ae, xe;
  }
  return fa = ne, fa;
}
var Vu = zu();
const Lu = /* @__PURE__ */ Su(Vu), yl = (d, _) => {
  const i = d.__vccOpts || d;
  for (const [v, S] of _)
    i[v] = S;
  return i;
}, Du = { class: "flex w-full flex-wrap items-center gap-1" }, Nu = { class: "truncate" }, Pu = ["disabled", "onClick"], Bu = {
  key: 0,
  class: "inline-flex items-center rounded-full border border-slate-300 bg-slate-100 px-2 py-0.5 text-xs text-slate-600"
}, Ku = ["name", "aria-label", "aria-invalid", "aria-expanded", "data-create-field", "disabled", "value"], Uu = ["name", "aria-label", "aria-invalid", "aria-expanded", "data-create-field", "disabled", "value"], qu = ["disabled"], Hu = ["onClick"], Wu = { class: "inline-flex items-center gap-2" }, Gu = {
  key: 1,
  class: "px-2 py-1.5 text-xs text-slate-500"
}, Yu = {
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
  setup(d, { expose: _, emit: i }) {
    const v = d, S = i, $ = h(null), ne = h(null), J = h(null), E = h(!1), o = h(!1), T = h(""), x = h(-1), de = h(!1), Te = h(224), ce = h(null), he = h(!1), be = h(!1), Q = h({
      left: "0px",
      top: "0px",
      maxWidth: "280px",
      transform: "none"
    }), q = h({
      left: "0px",
      top: "0px",
      width: "0px",
      maxHeight: "224px",
      transform: "none"
    });
    function je(p, m) {
      return !p || typeof p != "object" ? null : String(m || "").split(".").filter((M) => M !== "").reduce((M, D) => !M || typeof M != "object" || !Object.prototype.hasOwnProperty.call(M, D) ? null : M[D], p);
    }
    function Ce(p, m = "", M = {}) {
      const D = je(v.messages, p), K = typeof D == "string" ? D : m || p;
      return Object.entries(M).reduce((te, [qe, et]) => te.replaceAll(`:${qe}`, String(et ?? "")), K);
    }
    function z(p) {
      return typeof v.itemValue == "function" ? v.itemValue(p) : p !== null && typeof p == "object" ? p?.[v.itemValue] : p;
    }
    function Ge(p) {
      if (typeof v.itemTitle == "function") {
        const m = v.itemTitle(p);
        return m == null ? "" : String(m);
      }
      if (p !== null && typeof p == "object") {
        const m = p?.[v.itemTitle];
        return m == null ? "" : String(m);
      }
      return p == null ? "" : String(p);
    }
    function Oe(p) {
      return String(p ?? "").toLowerCase();
    }
    function me(p) {
      return Array.isArray(p) ? [...p] : p == null || p === "" ? [] : [p];
    }
    function Ie(p, m) {
      return p.some((M) => String(M) === String(m));
    }
    function Be(p, m) {
      return p.filter((M) => String(M) !== String(m));
    }
    const ae = k(() => v.multiple ? me(v.modelValue) : []), xe = k(() => v.multiple ? null : v.items.find(
      (p) => String(z(p)) === String(v.modelValue)
    ) ?? null), N = k(() => v.multiple ? v.items.filter(
      (p) => Ie(ae.value, z(p))
    ) : []), le = k(() => xe.value ? Ge(xe.value) : v.allowCustom && typeof v.modelValue == "string" && v.modelValue !== null && v.modelValue !== void 0 ? String(v.modelValue) : ""), oe = k(() => v.multiple ? "" : v.displayValue !== null && v.displayValue !== void 0 ? String(v.displayValue) : le.value), se = k(() => {
      const p = Oe(T.value).trim();
      return p ? v.items.filter((m) => {
        const M = [Ge(m)];
        return m && typeof m == "object" && v.searchFields.forEach((D) => {
          M.push(m?.[D]);
        }), M.some(
          (D) => Oe(D).includes(p)
        );
      }) : v.items;
    }), Ye = k(() => v.multiple || o.value ? T.value : oe.value), St = k(() => {
      const p = Number(v.maxSelectionChips || 0);
      return !Number.isFinite(p) || p <= 0 ? 3 : Math.max(1, Math.floor(p));
    }), ut = k(() => !v.multiple || v.selectionChips !== !0 ? [] : N.value.slice(0, St.value)), tr = k(() => !v.multiple || v.selectionChips !== !0 ? 0 : Math.max(
      0,
      N.value.length - St.value
    )), Ke = k(() => v.invalid ? {
      borderColor: "rgb(239 68 68)",
      boxShadow: "0 0 0 1px rgba(239, 68, 68, 0.2)"
    } : v.requiredMissing ? {
      backgroundColor: v.requiredHighlightColor
    } : null), _e = k(() => v.invalid ? "h-8 w-full rounded border bg-white px-2 pr-7 text-sm outline-none focus:border-red-500 focus:outline-none focus:ring-0 focus-visible:border-red-500 focus-visible:outline-none focus-visible:ring-0" : "h-8 w-full rounded border border-slate-300 bg-white px-2 pr-7 text-sm outline-none focus:border-slate-300 focus:outline-none focus:ring-0 focus-visible:border-slate-300 focus-visible:outline-none focus-visible:ring-0"), Xe = k(() => v.invalid ? "min-h-8 w-full rounded border bg-white px-2 py-1 pr-7 text-sm" : "min-h-8 w-full rounded border border-slate-300 bg-white px-2 py-1 pr-7 text-sm"), Se = k(() => "basis-full w-full min-w-0 flex-none appearance-none border-0 bg-transparent p-0 text-sm leading-6 text-slate-700 shadow-none outline-none ring-0 focus:border-0 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:text-slate-400 caret-slate-500"), Mt = k(() => ({
      border: "0",
      outline: "none",
      boxShadow: "none",
      background: "transparent"
    })), Je = k(() => v.invalid === !0 && typeof v.errorMessage == "string" && v.errorMessage.trim() !== "");
    G(se, (p) => {
      if (!E.value) {
        x.value = -1;
        return;
      }
      if (p.length === 0) {
        x.value = -1;
        return;
      }
      if (v.allowCustom && !v.multiple && B(T.value) !== "") {
        (x.value < 0 || x.value >= p.length) && (x.value = -1);
        return;
      }
      (x.value < 0 || x.value >= p.length) && (x.value = 0);
    }), G(
      () => v.modelValue,
      () => {
        o.value || (T.value = "");
      }
    );
    function $e() {
      v.disabled || (E.value = !0, se.value.length > 0 && x.value < 0 && !(v.allowCustom && !v.multiple && B(T.value) !== "") && (x.value = 0), re(() => {
        requestAnimationFrame(() => {
          P();
        });
      }));
    }
    function L() {
      E.value = !1, x.value = -1;
    }
    function P() {
      if (!E.value || typeof window > "u")
        return;
      const p = ne.value?.getBoundingClientRect?.();
      if (!p)
        return;
      const m = window.innerHeight || document.documentElement?.clientHeight || 0, M = window.innerWidth || document.documentElement?.clientWidth || 0, D = 8, K = Math.max(0, m - p.bottom - D), te = Math.max(0, p.top - D), qe = Math.min(260, J.value?.scrollHeight ?? 224), et = 120, at = Math.min(180, qe), It = p.bottom + qe > m - D, Bt = Math.max(
        et,
        Math.min(qe, 220)
      ), ar = te >= Bt, At = K >= Bt, Me = p.top > m * 0.6 && te > K;
      de.value = !At && te > 0 || It && te > 0 || Me && ar || K < at && te > K || K <= 0 && te > 0;
      const un = de.value ? te : K;
      Te.value = Math.max(
        et,
        Math.min(Math.max(un, et), qe)
      );
      const He = Math.max(220, Math.round(p.width)), ye = Math.max(8, Math.min(p.left, M - He - 8)), dt = de.value ? Math.max(8, p.top - D) : Math.min(m - 8, p.bottom + D);
      q.value = {
        left: `${Math.round(ye)}px`,
        top: `${Math.round(dt)}px`,
        width: `${Math.round(He)}px`,
        maxHeight: `${Math.round(Te.value)}px`,
        transform: de.value ? "translateY(-100%)" : "none"
      };
    }
    function H() {
      P(), he.value && ie();
    }
    function ie() {
      if (!he.value || typeof window > "u")
        return;
      const p = $.value?.getBoundingClientRect?.();
      if (!p)
        return;
      const m = window.innerHeight || document.documentElement?.clientHeight || 0, M = window.innerWidth || document.documentElement?.clientWidth || 0, D = 8, K = Math.max(
        36,
        Number(ce.value?.offsetHeight || 44)
      ), te = Math.max(
        180,
        Math.min(320, Number(ce.value?.offsetWidth || 240))
      ), qe = Math.max(0, m - p.bottom - D), et = Math.max(0, p.top - D);
      be.value = qe < K + 10 && et > 0 || p.top > m * 0.6 && et > qe;
      const at = Math.max(
        8,
        Math.min(
          p.left + p.width / 2 - te / 2,
          M - te - 8
        )
      ), It = be.value ? Math.max(8, p.top - D) : Math.min(m - 8, p.bottom + D);
      Q.value = {
        left: `${Math.round(at)}px`,
        top: `${Math.round(It)}px`,
        maxWidth: `${Math.round(te)}px`,
        transform: be.value ? "translateY(-100%)" : "none"
      };
    }
    function ve() {
      Je.value && (he.value = !0, re(() => {
        requestAnimationFrame(() => {
          ie();
        });
      }));
    }
    function Ee() {
      he.value = !1;
    }
    function Qe() {
      ve();
    }
    function rr() {
      Ee();
    }
    function vt(p) {
      if (v.multiple) {
        Ze(p);
        return;
      }
      const m = z(p), M = Ge(p);
      S("update:modelValue", m), S("resolve", {
        kind: "item",
        value: m,
        label: M,
        item: p
      }), T.value = M, L();
    }
    function nr(p) {
      return v.multiple ? Ie(ae.value, z(p)) : !1;
    }
    function Ae(p, m = null) {
      const M = v.items.filter(
        (D) => Ie(p, z(D))
      );
      S("update:modelValue", p), S("resolve", {
        kind: "multiple",
        values: p,
        items: M,
        item: m
      });
    }
    function Ze(p) {
      const m = z(p), M = me(v.modelValue), K = Ie(M, m) ? Be(M, m) : [...M, m];
      Ae(K, p), v.closeOnSelect ? L() : re(() => {
        requestAnimationFrame(() => {
          P();
        });
      });
    }
    function Pt(p) {
      if (!v.multiple)
        return;
      const m = me(v.modelValue), M = Be(m, p);
      Ae(M);
    }
    function B(p) {
      const m = p == null ? "" : String(p);
      return v.customTrim ? m.trim() : m;
    }
    function ge(p) {
      if (!v.allowCustom || v.multiple)
        return !1;
      const m = B(p);
      return m.length < Math.max(0, Number(v.customMinLength || 0)) || m === "" ? !1 : (S("update:modelValue", m), S("resolve", {
        kind: "custom",
        value: m,
        label: m,
        input: m
      }), T.value = m, L(), !0);
    }
    function ze(p) {
      const m = se.value;
      if (m.length === 0) {
        x.value = -1;
        return;
      }
      if (x.value < 0) {
        x.value = p > 0 ? 0 : m.length - 1;
        return;
      }
      const M = x.value + p;
      if (M < 0) {
        x.value = m.length - 1;
        return;
      }
      if (M >= m.length) {
        x.value = 0;
        return;
      }
      x.value = M;
    }
    function pe(p) {
      v.disabled || (o.value = !0, T.value = v.multiple ? "" : oe.value, S("focus", p), ve(), re(() => {
        typeof $.value?.select == "function" && $.value.select();
      }));
    }
    function gt(p) {
      const m = B(T.value), M = B(le.value);
      !v.multiple && v.allowCustom && m !== "" && m !== M && ge(T.value), o.value = !1, T.value = "", L(), S("blur", p), re(() => {
        requestAnimationFrame(() => {
          if (Je.value) {
            ve();
            return;
          }
          Ee();
        });
      });
    }
    function Ft(p) {
      T.value = p.target.value, v.allowCustom && !v.multiple && (x.value = -1), $e(), re(() => {
        requestAnimationFrame(() => {
          P();
        });
      });
    }
    function fe(p) {
      if (v.disabled) {
        S("keydown", p);
        return;
      }
      if (p.altKey && p.key === "ArrowDown") {
        p.preventDefault(), $e(), S("keydown", p);
        return;
      }
      if (p.altKey && p.key === "ArrowUp") {
        p.preventDefault(), E.value && L(), S("keydown", p);
        return;
      }
      if (p.key === "ArrowDown") {
        E.value && (p.preventDefault(), ze(1)), S("keydown", p);
        return;
      }
      if (p.key === "ArrowUp") {
        E.value && (p.preventDefault(), ze(-1)), S("keydown", p);
        return;
      }
      if (p.key === "Enter") {
        if (E.value) {
          if (p.preventDefault(), v.allowCustom && !v.multiple && T.value !== "" && x.value < 0) {
            ge(T.value), S("keydown", p);
            return;
          }
          const m = se.value[x.value] ?? se.value[0] ?? null;
          m && vt(m);
        }
        S("keydown", p);
        return;
      }
      if (p.key === "Escape") {
        if (E.value) {
          p.preventDefault(), T.value = "", L(), S("keydown", p);
          return;
        }
        S("keydown", p);
        return;
      }
      if (p.key === "Tab") {
        if (E.value) {
          if (v.allowCustom && !v.multiple && T.value !== "" && x.value < 0) {
            ge(T.value), S("keydown", p);
            return;
          }
          const m = se.value[x.value] ?? null;
          m && vt(m);
        }
        S("keydown", p);
        return;
      }
      S("keydown", p);
    }
    function W() {
      if (E.value) {
        L();
        return;
      }
      !o.value && typeof $.value?.focus == "function" && $.value.focus(), $e();
    }
    G(E, (p) => {
      if (!(typeof window > "u")) {
        if (!p) {
          window.removeEventListener("resize", H), window.removeEventListener("scroll", H, !0);
          return;
        }
        window.addEventListener("resize", H), window.addEventListener("scroll", H, !0), re(() => {
          requestAnimationFrame(() => {
            P();
          });
        });
      }
    }), G(Je, (p) => {
      if (!p) {
        Ee();
        return;
      }
      ve();
    }), G(
      () => v.invalid,
      () => {
        if (Je.value) {
          ve();
          return;
        }
        Ee();
      }
    ), G(he, (p) => {
      if (!(typeof window > "u")) {
        if (!p) {
          E.value || (window.removeEventListener("resize", H), window.removeEventListener("scroll", H, !0));
          return;
        }
        window.addEventListener("resize", H), window.addEventListener("scroll", H, !0), re(() => {
          requestAnimationFrame(() => {
            ie();
          });
        });
      }
    }), pl(() => {
      typeof window > "u" || (window.removeEventListener("resize", H), window.removeEventListener("scroll", H, !0));
    });
    function Ot() {
      $.value?.focus?.();
    }
    function O() {
      $.value?.select?.();
    }
    function Ue(p) {
      $.value?.scrollIntoView?.(p);
    }
    return _({
      focus: Ot,
      select: O,
      scrollIntoView: Ue
    }), (p, m) => (c(), f("div", {
      ref_key: "rootRef",
      ref: ne,
      class: "relative min-w-0",
      style: V(E.value ? { zIndex: 2147482e3 } : null),
      onMouseenter: Qe,
      onMouseleave: rr
    }, [
      d.multiple ? (c(), f("div", {
        key: 0,
        class: A(Xe.value),
        style: V(Ke.value),
        onClick: Ot
      }, [
        s("div", Du, [
          d.selectionChips && N.value.length > 0 ? (c(), f(R, { key: 0 }, [
            (c(!0), f(R, null, X(ut.value, (M, D) => (c(), f("span", {
              key: `chip-${z(M)}-${D}`,
              class: "inline-flex max-w-full items-center gap-1 rounded-full border border-slate-300 bg-slate-100 px-2 py-0.5 text-xs text-slate-700"
            }, [
              s("span", Nu, g(Ge(M)), 1),
              s("button", {
                type: "button",
                class: "inline-flex h-4 w-4 items-center justify-center rounded text-slate-500 hover:bg-slate-200",
                disabled: d.disabled,
                onMousedown: m[0] || (m[0] = Ne(() => {
                }, ["prevent"])),
                onClick: (K) => Pt(z(M))
              }, [...m[4] || (m[4] = [
                s("i", { class: "mdi mdi-close text-[11px] leading-none" }, null, -1)
              ])], 40, Pu)
            ]))), 128)),
            tr.value > 0 ? (c(), f("span", Bu, " +" + g(tr.value) + " " + g(Ce("autocomplete.more", "meer")), 1)) : C("", !0)
          ], 64)) : C("", !0),
          s("input", {
            ref_key: "inputRef",
            ref: $,
            name: d.name,
            "aria-label": d.ariaLabel,
            "aria-invalid": d.invalid ? "true" : "false",
            "aria-expanded": E.value ? "true" : "false",
            "data-rw-autocomplete-input": "true",
            "data-rw-autocomplete-multiple-input": "true",
            "data-create-field": d.dataCreateField || null,
            disabled: d.disabled,
            value: Ye.value,
            type: "text",
            autocomplete: "off",
            class: A(Se.value),
            style: V(Mt.value),
            onFocus: pe,
            onBlur: gt,
            onInput: Ft,
            onKeydown: fe
          }, null, 46, Ku)
        ])
      ], 6)) : (c(), f("input", {
        key: 1,
        ref_key: "inputRef",
        ref: $,
        name: d.name,
        "aria-label": d.ariaLabel,
        "aria-invalid": d.invalid ? "true" : "false",
        "aria-expanded": E.value ? "true" : "false",
        "data-rw-autocomplete-input": "true",
        "data-create-field": d.dataCreateField || null,
        disabled: d.disabled,
        value: Ye.value,
        type: "text",
        autocomplete: "off",
        class: A(_e.value),
        style: V(Ke.value),
        onFocus: pe,
        onBlur: gt,
        onInput: Ft,
        onKeydown: fe
      }, null, 46, Uu)),
      s("button", {
        type: "button",
        class: "absolute right-0 top-1/2 inline-flex h-8 w-7 -translate-y-1/2 items-center justify-center text-slate-500",
        disabled: d.disabled,
        tabindex: "-1",
        onMousedown: m[1] || (m[1] = Ne(() => {
        }, ["prevent"])),
        onClick: W
      }, [
        s("i", {
          class: A(["mdi text-base leading-none", E.value ? "mdi-menu-up" : "mdi-menu-down"])
        }, null, 2)
      ], 40, qu),
      (c(), er(Ji, { to: "body" }, [
        E.value ? (c(), f("div", {
          key: 0,
          ref_key: "menuRef",
          ref: J,
          class: "fixed overflow-auto rounded-md border border-slate-200 bg-white p-1 shadow-lg",
          "data-rw-autocomplete-portal": "true",
          style: V({ ...q.value, zIndex: 2147483e3 }),
          onMousedown: m[3] || (m[3] = Ne(() => {
          }, ["prevent"]))
        }, [
          (c(!0), f(R, null, X(se.value, (M, D) => (c(), f("button", {
            key: `${z(M)}-${D}`,
            type: "button",
            class: A([
              "w-full rounded px-2 py-1.5 text-left text-sm text-slate-700",
              D === x.value ? "bg-slate-100" : "hover:bg-slate-50"
            ]),
            onClick: (K) => vt(M)
          }, [
            s("span", Wu, [
              d.multiple && d.showCheckboxes ? (c(), f("i", {
                key: 0,
                class: A([
                  "mdi text-base leading-none text-slate-600",
                  nr(M) ? "mdi-checkbox-marked" : "mdi-checkbox-blank-outline"
                ])
              }, null, 2)) : C("", !0),
              s("span", null, g(Ge(M)), 1)
            ])
          ], 10, Hu))), 128)),
          d.allowCustom && !d.multiple && B(T.value) !== "" ? (c(), f("button", {
            key: 0,
            type: "button",
            class: "w-full rounded border border-dashed border-slate-200 px-2 py-1.5 text-left text-sm text-slate-700 hover:bg-slate-50",
            onClick: m[2] || (m[2] = (M) => ge(T.value))
          }, g(Ce("autocomplete.use_custom_value", "Gebruik vrije waarde:")) + ' "' + g(B(T.value)) + '" ', 1)) : C("", !0),
          se.value.length === 0 ? (c(), f("p", Gu, g(Ce("autocomplete.no_results", "Geen resultaten")), 1)) : C("", !0)
        ], 36)) : C("", !0)
      ])),
      (c(), er(Ji, { to: "body" }, [
        he.value && Je.value ? (c(), f("div", {
          key: 0,
          ref_key: "errorTooltipRef",
          ref: ce,
          class: "rw-error-tooltip fixed",
          style: V({ ...Q.value, zIndex: 2147483500 }),
          role: "alert"
        }, [
          Y(g(d.errorMessage) + " ", 1),
          s("span", {
            class: A([
              "rw-error-tooltip-arrow",
              be.value ? "rw-error-tooltip-arrow-top" : "rw-error-tooltip-arrow-bottom"
            ])
          }, null, 2)
        ], 4)) : C("", !0)
      ]))
    ], 36));
  }
}, ln = /* @__PURE__ */ yl(Yu, [["__scopeId", "data-v-f1fa37bf"]]);
function Xu(d) {
  return d == null ? !0 : typeof d == "string" ? d.trim() === "" : Array.isArray(d) ? d.length === 0 : !1;
}
function sn(d) {
  if (typeof d == "number")
    return Number.isFinite(d) ? d : null;
  if (typeof d == "string") {
    const _ = d.trim();
    if (_ === "")
      return null;
    const i = Number(_);
    return Number.isFinite(i) ? i : null;
  }
  return null;
}
function Ju(d) {
  const _ = sn(d);
  return _ === null ? null : Number.isInteger(_) ? _ : null;
}
function Qu(d) {
  return typeof d == "string" ? d.split("|").map((_) => _.trim()).filter((_) => _ !== "") : [];
}
function hl(d) {
  return d ? Array.isArray(d) ? d.flatMap((_) => hl(_)) : typeof d == "string" ? Qu(d) : [] : [];
}
function ml(d) {
  const [_, ...i] = String(d).split(":");
  return {
    name: String(_ || "").trim().toLowerCase(),
    parameters: i.join(":").split(",").map((v) => v.trim())
  };
}
function Pe(d, _, i = []) {
  const v = _ || "Dit veld";
  return d === "required" ? `${v} is verplicht.` : d === "string" ? `${v} moet tekst zijn.` : d === "numeric" ? `${v} moet een getal zijn.` : d === "integer" ? `${v} moet een geheel getal zijn.` : d === "boolean" ? `${v} moet een geldige ja/nee waarde zijn.` : d === "array" ? `${v} moet een lijst zijn.` : d === "min" ? `${v} moet minimaal ${i[0] ?? 0} zijn.` : d === "max" ? `${v} mag maximaal ${i[0] ?? 0} zijn.` : d === "in" ? `Kies een geldige waarde voor ${v.toLowerCase()}.` : `${v} is ongeldig.`;
}
function Mr(d, _) {
  return d.some((i) => ml(i).name === _);
}
function Zu(d, _, i, v, S) {
  const $ = sn(i[0]);
  if ($ === null)
    return null;
  const ne = Mr(v, "numeric") || Mr(v, "integer");
  if (Mr(v, "array")) {
    if (!Array.isArray(_))
      return null;
    const o = _.length;
    return d === "min" && o < $ ? Pe(d, S, [$]) : d === "max" && o > $ ? Pe(d, S, [$]) : null;
  }
  if (ne) {
    const o = sn(_);
    return o === null ? null : d === "min" && o < $ ? Pe(d, S, [$]) : d === "max" && o > $ ? Pe(d, S, [$]) : null;
  }
  const E = String(_ ?? "").length;
  return d === "min" && E < $ ? Pe(d, S, [$]) : d === "max" && E > $ ? Pe(d, S, [$]) : null;
}
function ed(d, _, i = {}) {
  const v = hl(_);
  if (v.length === 0)
    return null;
  const S = i.fieldLabel || "Dit veld", $ = Xu(d), ne = Mr(v, "required"), J = Mr(v, "nullable");
  if ($) {
    if (ne)
      return Pe("required", S);
    if (J || !ne)
      return null;
  }
  for (const E of v) {
    const { name: o, parameters: T } = ml(E);
    if (!(o === "" || o === "required" || o === "nullable")) {
      if (o === "string" && typeof d != "string" || o === "numeric" && sn(d) === null || o === "integer" && Ju(d) === null)
        return Pe(o, S);
      if (o === "boolean") {
        const x = String(d).trim().toLowerCase();
        if (!(typeof d == "boolean" || x === "1" || x === "0" || x === "true" || x === "false"))
          return Pe(o, S);
      }
      if (o === "array" && !Array.isArray(d))
        return Pe(o, S);
      if (o === "min" || o === "max") {
        const x = Zu(
          o,
          d,
          T,
          v,
          S
        );
        if (x)
          return x;
      }
      if (o === "in" && !T.map((de) => String(de)).includes(String(d)))
        return Pe(o, S);
    }
  }
  return null;
}
const td = ["for"], rd = ["id", "name", "aria-label", "placeholder"], nd = ["aria-label"], ad = { class: "ml-auto flex items-center gap-2" }, id = {
  key: 0,
  class: "flex items-center gap-2"
}, ld = ["id", "name", "aria-label"], od = ["value"], sd = {
  key: 2,
  class: "relative"
}, ud = ["title"], dd = { class: "flex min-h-11 items-center justify-between bg-sky-700 px-4 text-sm font-semibold text-white" }, cd = ["aria-label"], fd = { class: "flex items-center gap-2 border-b border-slate-200 bg-white px-3 pb-2 pt-2" }, pd = ["disabled"], bd = ["disabled"], vd = ["disabled"], gd = ["disabled"], yd = {
  key: 0,
  class: "border-b border-emerald-200 bg-emerald-50 px-4 py-2 text-sm text-emerald-800"
}, hd = {
  key: 1,
  class: "border-b border-amber-200 bg-amber-50 px-4 py-2 text-sm text-amber-800"
}, md = {
  key: 2,
  class: "min-h-0 flex-1 overflow-auto",
  style: { maxHeight: "calc(100vh - 240px)" }
}, xd = { class: "w-full border-collapse text-sm" }, wd = { class: "bg-white text-slate-600" }, kd = { class: "w-16 border-b border-r border-slate-200 px-3 py-2 text-left font-medium" }, Cd = { class: "border-b border-r border-slate-200 px-3 py-2 text-left font-medium" }, _d = { class: "w-28 border-b border-slate-200 px-3 py-2 text-right font-medium" }, Sd = { key: 0 }, Md = {
  colspan: "3",
  class: "px-3 py-8 text-center text-slate-500"
}, Fd = { class: "border-r border-slate-100 px-3 py-2" }, Od = ["disabled", "onClick"], Id = { class: "border-r border-slate-100 px-3 py-2" }, Ad = { class: "px-3 py-2 text-right" }, Rd = ["disabled", "title", "onClick"], Ed = {
  key: 3,
  class: "min-h-0 flex-1 overflow-auto p-4",
  style: { maxHeight: "calc(100vh - 240px)" }
}, Td = { class: "space-y-4" }, jd = {
  key: 0,
  class: "space-y-4"
}, $d = ["for"], zd = ["id", "name", "placeholder"], Vd = { class: "grid gap-3 md:grid-cols-3" }, Ld = ["for"], Dd = ["id", "name"], Nd = ["value"], Pd = ["for"], Bd = ["id", "name"], Kd = ["value"], Ud = ["for"], qd = ["id", "name"], Hd = ["value"], Wd = { class: "grid gap-3 md:grid-cols-2" }, Gd = ["for"], Yd = ["id", "name"], Xd = { value: "" }, Jd = ["value"], Qd = ["for"], Zd = ["id", "name"], ec = ["value"], tc = { class: "grid gap-3 md:grid-cols-3" }, rc = ["for"], nc = ["id", "name", "disabled"], ac = { value: "" }, ic = ["value"], lc = ["for"], oc = ["id", "name"], sc = { value: "" }, uc = ["value"], dc = ["for"], cc = ["id", "name"], fc = { class: "grid gap-2 md:grid-cols-2" }, pc = { class: "inline-flex items-center gap-2 text-sm text-slate-700" }, bc = ["name"], vc = { class: "inline-flex items-center gap-2 text-sm text-slate-700" }, gc = ["name"], yc = { class: "inline-flex items-center gap-2 text-sm text-slate-700" }, hc = ["name"], mc = {
  key: 0,
  class: "rounded border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-800"
}, xc = {
  key: 1,
  class: "max-w-xs"
}, wc = ["for"], kc = ["id", "name"], Cc = ["value"], _c = {
  key: 2,
  class: "rounded border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-800"
}, Sc = {
  key: 3,
  class: "rounded border border-slate-200 bg-slate-50 px-3 py-4 text-sm text-slate-600"
}, Mc = {
  key: 4,
  class: "rounded border border-slate-200 bg-slate-50 px-3 py-4 text-sm text-slate-600"
}, Fc = {
  key: 5,
  class: "rounded border border-slate-200 bg-white p-2"
}, Oc = {
  key: 4,
  class: "flex items-center border-t border-slate-200 bg-white px-3 py-2"
}, Ic = ["disabled"], Ac = {
  key: 3,
  class: "relative"
}, Rc = ["title"], Ec = { class: "flex min-h-11 items-center justify-between bg-emerald-700 px-4 text-sm font-semibold text-white" }, Tc = ["aria-label"], jc = { class: "flex items-center gap-2 border-b border-slate-200 bg-white px-3 pb-2 pt-2" }, $c = ["disabled"], zc = ["disabled"], Vc = {
  key: 0,
  class: "border-b border-emerald-200 bg-emerald-50 px-4 py-2 text-sm text-emerald-800"
}, Lc = {
  key: 1,
  class: "border-b border-amber-200 bg-amber-50 px-4 py-2 text-sm text-amber-800"
}, Dc = {
  key: 2,
  class: "max-h-[calc(100vh-220px)] min-h-0 flex-1 overflow-auto"
}, Nc = { class: "w-full border-collapse text-sm" }, Pc = { class: "bg-white text-slate-600" }, Bc = { class: "w-16 border-b border-r border-slate-200 px-3 py-2 text-left font-medium" }, Kc = { class: "border-b border-r border-slate-200 px-3 py-2 text-left font-medium" }, Uc = { class: "w-28 border-b border-slate-200 px-3 py-2 text-right font-medium" }, qc = { key: 0 }, Hc = {
  colspan: "3",
  class: "px-3 py-8 text-center text-slate-500"
}, Wc = { class: "border-r border-slate-100 px-3 py-2" }, Gc = ["disabled", "onClick"], Yc = { class: "border-r border-slate-100 px-3 py-2" }, Xc = { class: "px-3 py-2 text-right" }, Jc = ["disabled", "title", "onClick"], Qc = {
  key: 3,
  class: "max-h-[calc(100vh-220px)] min-h-0 flex-1 overflow-auto p-4"
}, Zc = { class: "space-y-4" }, ef = ["for"], tf = ["id", "name", "placeholder"], rf = { class: "mb-2 text-sm font-medium text-slate-700" }, nf = { class: "max-h-[420px] overflow-y-auto rounded border border-slate-200" }, af = ["onDragover", "onDrop"], lf = ["aria-label", "onDragstart"], of = ["name", "aria-label", "onUpdate:modelValue"], sf = { class: "min-w-0 flex-1 truncate text-sm" }, uf = { class: "flex items-center gap-1" }, df = ["disabled", "onClick"], cf = ["disabled", "onClick"], ff = {
  key: 4,
  class: "flex items-center border-t border-slate-200 bg-white px-3 py-2"
}, pf = ["disabled"], bf = {
  key: 4,
  class: "relative"
}, vf = { class: "border-b border-slate-100 px-2 pb-2 pt-2" }, gf = { class: "p-1" }, yf = ["onClick"], hf = { class: "relative" }, mf = { class: "border-b border-slate-100 px-2 pb-2 pt-2" }, xf = { class: "min-h-0 flex-1 space-y-2 overflow-y-auto pr-1" }, wf = {
  key: 0,
  class: "mb-3 mt-2 space-y-3 rounded border border-slate-200 bg-slate-50 p-3"
}, kf = { class: "rw-config-checkbox-row flex cursor-pointer items-center gap-3 rounded px-1 py-1 text-xs text-slate-700" }, Cf = ["name", "checked"], _f = { class: "rw-config-checkbox-row flex cursor-pointer items-center gap-3 rounded px-1 py-1 text-xs text-slate-700" }, Sf = ["name", "checked"], Mf = { class: "rw-config-checkbox-row flex cursor-pointer items-center gap-3 rounded px-1 py-1 text-xs text-slate-700" }, Ff = ["name", "checked", "disabled"], Of = { class: "rw-config-checkbox-row flex cursor-pointer items-center gap-3 rounded px-1 py-1 text-xs text-slate-700" }, If = ["name", "checked"], Af = { class: "space-y-1" }, Rf = ["for"], Ef = ["id", "name", "aria-label", "value"], Tf = { class: "space-y-1 pb-1 pt-1" }, jf = ["onDragover", "onDrop"], $f = ["aria-label", "onDragstart"], zf = ["name", "aria-label", "checked", "onChange"], Vf = { class: "min-w-0 flex-1 truncate text-sm text-slate-700" }, Lf = { class: "flex items-center gap-1" }, Df = ["disabled", "onClick"], Nf = ["disabled", "onClick"], Pf = ["name", "aria-label", "checked"], Bf = { class: "relative flex w-full min-w-0 items-center gap-0.5 pr-1" }, Kf = ["title", "onClick"], Uf = { class: "truncate" }, qf = { class: "ml-auto inline-flex shrink-0 items-center gap-0" }, Hf = ["aria-label", "onClick"], Wf = ["aria-label", "onClick"], Gf = { class: "flex items-center gap-2 border-b border-slate-200 bg-white px-2 pb-2 pt-2" }, Yf = ["onClick"], Xf = { class: "grid gap-2 p-3" }, Jf = ["name", "aria-label", "value", "onChange"], Qf = ["value"], Zf = { class: "text-xs text-slate-500" }, ep = ["name", "aria-label", "value", "onInput"], tp = { class: "text-xs text-slate-500" }, rp = ["name", "aria-label", "value", "onInput"], np = { class: "text-xs text-slate-500" }, ap = ["name", "aria-label", "value", "onChange"], ip = { value: "" }, lp = { value: "true" }, op = { value: "false" }, sp = { class: "text-xs text-slate-500" }, up = ["name", "aria-label", "value", "multiple", "onChange"], dp = {
  key: 0,
  value: ""
}, cp = ["value"], fp = { class: "text-xs text-slate-500" }, pp = ["name", "aria-label", "type", "value", "onInput"], bp = ["aria-label", "onMousedown"], vp = { key: 0 }, gp = ["colspan"], yp = { key: 1 }, hp = ["colspan"], mp = { class: "inline-flex items-center justify-center gap-2" }, xp = {
  key: 0,
  class: "border-t border-blue-200 bg-blue-50/40"
}, wp = ["aria-label"], kp = { class: "min-w-0 flex-1" }, Cp = {
  key: 1,
  class: "rw-input-with-tooltip"
}, _p = ["data-create-field", "name", "aria-label", "checked", "onChange", "onBlur"], Sp = {
  key: 0,
  class: "rw-inline-error-tooltip"
}, Mp = {
  key: 2,
  class: "rw-input-with-tooltip"
}, Fp = ["data-create-field", "type", "name", "aria-label", "value", "aria-invalid", "onInput", "onBlur"], Op = {
  key: 0,
  class: "rw-inline-error-tooltip"
}, Ip = {
  key: 1,
  class: "text-xs text-slate-400"
}, Ap = ["onClick", "onMouseover", "onMouseleave"], Rp = ["name", "aria-label", "checked", "onChange"], Ep = ["onClick"], Tp = {
  key: 0,
  class: "absolute left-2 top-1/2 z-10 -translate-y-1/2"
}, jp = ["onClick"], $p = { class: "flex items-center justify-start border-b border-slate-200 bg-white px-2 pb-2 pt-2" }, zp = { class: "p-1" }, Vp = ["disabled", "onClick"], Lp = {
  key: 1,
  class: "rw-input-with-tooltip"
}, Dp = ["name", "aria-label", "checked", "onChange", "onBlur"], Np = {
  key: 0,
  class: "rw-inline-error-tooltip"
}, Pp = {
  key: 2,
  class: "rw-input-with-tooltip"
}, Bp = ["type", "name", "aria-label", "value", "aria-invalid", "onInput", "onBlur"], Kp = {
  key: 0,
  class: "rw-inline-error-tooltip"
}, Up = { class: "truncate" }, qp = {
  key: 2,
  class: "inline-flex max-w-full flex-wrap items-center gap-1"
}, Hp = { class: "truncate" }, Wp = {
  key: 0,
  class: "inline-flex items-center rounded-full border border-slate-300 bg-slate-100 px-2 py-0.5 text-xs font-medium leading-5 text-slate-600"
}, Gp = {
  key: 2,
  class: "border-t border-blue-200 bg-blue-50/40"
}, Yp = ["aria-label"], Xp = { class: "min-w-0 flex-1" }, Jp = {
  key: 1,
  class: "rw-input-with-tooltip"
}, Qp = ["data-create-field", "name", "aria-label", "checked", "onChange", "onBlur"], Zp = {
  key: 0,
  class: "rw-inline-error-tooltip"
}, eb = {
  key: 2,
  class: "rw-input-with-tooltip"
}, tb = ["data-create-field", "type", "name", "aria-label", "value", "aria-invalid", "onInput", "onBlur"], rb = {
  key: 0,
  class: "rw-inline-error-tooltip"
}, nb = {
  key: 1,
  class: "text-xs text-slate-400"
}, ab = { class: "flex flex-wrap items-center justify-between gap-2 border-x border-b border-slate-200 bg-white px-3 py-2" }, ib = {
  key: 0,
  class: "flex items-center"
}, lb = ["disabled", "onClick"], ob = { class: "ml-auto flex items-center gap-2" }, sb = {
  key: 0,
  class: "text-xs text-slate-500"
}, ub = 80, Sr = 40, pa = "option_contains", on = "option_equals", fl = "rgb(255 255 255)", ba = "rgb(239 246 255)", db = {
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
  setup(d, { emit: _ }) {
    const i = d, v = _, S = Cu();
    function $(e, t) {
      return !e || typeof e != "object" ? null : String(t || "").split(".").filter((r) => r !== "").reduce((r, a) => !r || typeof r != "object" || !Object.prototype.hasOwnProperty.call(r, a) ? null : r[a], e);
    }
    function ne(e, t = {}) {
      return typeof e != "string" ? e : Object.entries(t).reduce((r, [a, n]) => r.replaceAll(`:${a}`, String(n ?? "")), e);
    }
    const J = k(() => {
      const e = i.i18n?.messages;
      if (e && typeof e == "object")
        return e;
      const t = S?.props?.rwtable?.translations;
      return t && typeof t == "object" ? t : {};
    }), E = k(() => {
      const e = String(i.i18n?.locale || "").trim().toLowerCase();
      if (e !== "")
        return e;
      const t = String(S?.props?.rwtable?.locale || "").trim().toLowerCase();
      return t !== "" ? t : "en";
    });
    function o(e, t = "", r = {}) {
      const a = $(J.value, e);
      return ne(typeof a == "string" ? a : t || e, r);
    }
    function T(e) {
      if (!e || typeof e != "object")
        return null;
      const t = String(E.value || "").toLowerCase();
      if (t !== "" && typeof e[t] == "string")
        return e[t];
      const r = t.includes("-") ? t.split("-")[0] : t;
      return r !== "" && typeof e[r] == "string" ? e[r] : typeof e.default == "string" ? e.default : null;
    }
    function x(e) {
      const t = String(
        e?.label ?? e?.key ?? o("common.dash", "-")
      ), r = T(e?.labelTranslations);
      if (typeof r == "string" && r.trim() !== "")
        return r;
      const a = String(e?.labelKey || "").trim();
      if (a === "") {
        const u = String(e?.key || "").trim();
        if (u !== "") {
          const l = i.columns.find(
            (b) => String(b?.key || "").trim() === u && b !== e
          );
          if (l)
            return x(l);
        }
        return t;
      }
      const n = a.includes(".") ? [a] : [`columns.${a}`];
      for (const u of n) {
        const l = $(J.value, u);
        if (typeof l == "string" && l.trim() !== "")
          return l;
      }
      return t;
    }
    const de = h(null), Te = h(null), ce = h(null), he = h(null), be = h(""), Q = h(1), q = h(Number(i.rowOptions[0] ?? 25)), je = h(i.sortField || i.idKey), Ce = h(i.sortOrder === "desc" ? "desc" : "asc"), z = h([]), Ge = h({ total: 0, current: 1, last: 1 }), Oe = h([]), me = h(q.value), Ie = h(!1), Be = h(!1), ae = h(""), xe = h({}), N = h({}), le = h(!1), oe = h(!1), se = h(null), Ye = h(null), St = h(null), ut = h(!1), tr = h(!1), Ke = h(0), _e = h(null), Xe = h(null), Se = h(""), Mt = h({}), Je = h(null), $e = h(!1), L = h({}), P = h(null), H = h([]), ie = h({}), ve = h({}), Ee = h({}), Qe = h({}), rr = h("none"), vt = h(null), nr = h(null), Ae = h(!1), Ze = h("list"), Pt = h([]), B = h({
      id: null,
      description: "",
      columns: []
    }), ge = h(!1), ze = h(""), pe = h(""), gt = h(null), Ft = h(null), fe = h(!1), W = h("list"), Ot = h([]), O = h({
      id: null,
      description: "",
      config: null
    }), Ue = h(!1), p = h(""), m = h(""), M = h([]), D = h(!1), K = h(""), te = h(""), qe = h(null), et = h(null), at = h(!1), It = /* @__PURE__ */ new Map(), Bt = /* @__PURE__ */ new Map(), ar = /* @__PURE__ */ new Map(), At = h(null), Me = Object.freeze({
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
    }), un = Object.freeze([
      "tab",
      "blur",
      "save"
    ]), He = h({}), ye = h(0), dt = h(!1), Fr = h(0), it = h(i.options?.scrollMode !== "infinite"), Fe = h(!!i.horizontalScroll), Rt = h(!!i.rowQuantitySelect), Et = h(!!i.showRecordCount), lt = h(String(i.initialHeight || "520px"));
    let yt = null, ht = null;
    const ir = k(() => i.serverSide || i.managed), Ve = k(() => !it.value), I = k(() => Jn(Qt())), dn = k(
      () => `${I.value}-global-search`
    ), va = k(
      () => `${I.value}-rows-per-page`
    ), xl = k(() => {
      let e = 0;
      return i.checkboxColumn && (e += Sr), U.value.forEach((t) => {
        e += kt(t.key);
      }), e;
    }), wl = k(() => Fe.value ? {
      width: `max(100%, ${xl.value}px)`
    } : {
      width: "100%"
    }), kl = k(
      () => _r(lt.value)
    ), Cl = Object.freeze({ zIndex: Me.toolbar }), ga = Object.freeze({ zIndex: Me.toolbarOverlay }), _l = k(() => {
      const e = {
        ...ga
      };
      return Fr.value > 0 && (e.maxHeight = `${Fr.value}px`), e;
    }), Sl = Object.freeze({
      zIndex: Me.stickyHeader,
      boxShadow: "inset 0 -1px 0 rgb(203 213 225)"
    }), Ml = Object.freeze({
      zIndex: Me.headerFilterOverlay
    }), Fl = Object.freeze({ zIndex: Me.rowMenuOverlay }), cn = k(
      () => Hi(i.searchFieldWidth)
    ), fn = k(
      () => Hi(i.searchFieldMinWidth)
    ), Ol = k(
      () => cn.value ? "min-w-0 flex-none" : fn.value ? "flex-1" : "min-w-56 flex-1"
    ), Il = k(() => {
      const e = {};
      return cn.value && (e.width = cn.value, e.maxWidth = "100%"), fn.value && (e.minWidth = fn.value), Object.keys(e).length > 0 ? e : null;
    }), ya = k(() => Array.isArray(i.menuItems) ? i.menuItems : []), Or = k(() => [
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
    ]), ha = k(() => [
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
    ]), Al = k(() => [
      { value: "desc", label: o("charts.sort_direction_items.desc", "Aflopend") },
      { value: "asc", label: o("charts.sort_direction_items.asc", "Oplopend") }
    ]), Rl = k(() => [
      {
        value: "vertical",
        label: o("charts.orientation_items.vertical", "Verticaal")
      },
      {
        value: "horizontal",
        label: o("charts.orientation_items.horizontal", "Horizontaal")
      }
    ]), ot = Object.freeze([
      "#2563eb",
      "#16a34a",
      "#dc2626",
      "#d97706",
      "#0891b2",
      "#7c3aed",
      "#db2777",
      "#475569"
    ]);
    let lr = null, ma = !1, Le = null, Ir = null;
    function xa() {
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
    const El = k(() => String(i.excel) === "true"), Tl = k(() => String(i.charts) === "true"), pn = k(() => {
      if (typeof i.tableId == "string" && i.tableId.trim() !== "")
        return Jn(i.tableId.trim());
      const e = i.columns.map((t) => String(t?.key ?? "col")).join("-");
      return Jn(e);
    }), Ar = k(() => {
      const t = String(i.dataSource?.path || "").trim().match(/^\/?([^/?#]+)/);
      return t?.[1] ? `/${t[1]}` : "/admin";
    }), wa = k(
      () => (B.value.columns || []).filter((e) => e.selected)
    ), ka = k(() => String(B.value.description || "").trim() !== "" && wa.value.length > 0), bn = k(() => (Array.isArray(i.columns) ? i.columns : []).map((e) => {
      const t = String(e?.key ?? "");
      return {
        value: t,
        label: String(e?.label ?? t ?? "-")
      };
    })), vn = k(() => O.value.config?.builder?.dataset || {}), st = k(() => O.value.config?.builder?.chart || {}), jl = k(() => O.value.config?.builder?.presentation || {}), $l = k(() => String(vn.value.aggregate || "count")), Ca = k(() => $l.value !== "count");
    k(() => jl.value.allow_chart_type_change === !0);
    const Rr = k(() => W.value === "view" && te.value ? te.value : String(st.value.type || "bar")), gn = k(() => {
      const e = String(O.value.description || "").trim(), t = String(vn.value.x_field || "").trim(), r = String(
        vn.value.metric_field || ""
      ).trim();
      return !(e === "" || t === "" || Ca.value && r === "");
    }), or = k(() => jo(M.value, O.value.config)), Er = k(() => Array.isArray(or.value?.labels) && or.value.labels.length > 0 && Array.isArray(or.value?.series) && or.value.series.length > 0), U = k(() => H.value.filter((e) => e.selected !== !1)), Tt = k(() => U.value.filter((e) => !!e.editable)), zl = k(() => Object.keys(mt.value).length > 0), mt = k(() => {
      const e = {};
      return (/* @__PURE__ */ new Set([
        ...Object.keys(ie.value),
        ...Object.keys(ve.value),
        ...Object.keys(Ee.value)
      ])).forEach((r) => {
        const a = jt(r), n = qt(a) ? ve.value[r] : ie.value[r];
        Dr(n) || (e[r] = n);
      }), e;
    }), yn = k(() => {
      const e = {};
      return Object.keys(mt.value).forEach((t) => {
        e[t] = jt(t);
      }), e;
    }), hn = k(() => {
      const e = {};
      return Object.keys(mt.value).forEach((t) => {
        e[t] = Qe.value[t] ?? "text";
      }), e;
    }), _a = k(() => {
      const e = {};
      return Object.entries(mt.value).forEach(([t, r]) => {
        const a = Cn(t);
        e[a] = r;
      }), e;
    }), Sa = k(() => {
      const e = {};
      return Object.entries(yn.value).forEach(
        ([t, r]) => {
          const a = Cn(t);
          e[a] = r;
        }
      ), e;
    }), Ma = k(() => {
      const e = {};
      return Object.entries(hn.value).forEach(
        ([t, r]) => {
          const a = Cn(t);
          e[a] = r;
        }
      ), e;
    }), Kt = k(() => {
      let e = [...z.value];
      if (be.value.trim() !== "") {
        const a = be.value.trim().toLowerCase();
        e = e.filter((n) => U.value.some((u) => {
          const l = n[u.key];
          return l == null ? !1 : String(l).toLowerCase().includes(a);
        }));
      }
      e = e.filter((a) => Object.keys(mt.value).every((n) => {
        const u = yn.value[n], l = hn.value[n], b = mt.value[n], y = Ql(a, n, u);
        return eo(y, u, l, b);
      }));
      const t = i.manualOrdering ? i.manualOrderField : je.value, r = i.manualOrdering ? "asc" : Ce.value;
      return e.sort((a, n) => {
        const u = a[t], l = n[t];
        if (u === l)
          return 0;
        const b = String(u ?? "").localeCompare(
          String(l ?? ""),
          void 0,
          {
            numeric: !0,
            sensitivity: "base"
          }
        );
        return r === "asc" ? b : -b;
      }), e;
    }), Z = k(() => {
      if (ir.value)
        return Ve.value ? Oe.value : z.value;
      if (Ve.value)
        return Kt.value.slice(0, me.value);
      const e = (Q.value - 1) * q.value, t = e + q.value;
      return Kt.value.slice(e, t);
    }), Fa = k(() => {
      if (ir.value) {
        const e = Ve.value ? Oe.value.length : z.value.length;
        return Number(Ge.value.total ?? e);
      }
      return Kt.value.length;
    }), Ut = k(() => ir.value ? Number(Ge.value.last ?? 1) : Math.max(1, Math.ceil(Fa.value / q.value))), Vl = k(() => {
      const e = Math.max(1, Number(Ut.value || 1)), t = Math.min(Math.max(1, Number(Q.value || 1)), e), r = 2, a = [], n = [];
      for (let l = 1; l <= e; l += 1)
        (l <= 2 || l >= e - 1 || Math.abs(l - t) <= r) && a.push(l);
      let u = null;
      return a.forEach((l) => {
        u && l - u > 1 && n.push("..."), n.push(l), u = l;
      }), n;
    }), Ll = k(() => P.value === null || P.value === void 0 ? !1 : Z.value.some(
      (e) => e?.[i.idKey] === P.value
    )), Oa = k(() => $e.value ? P.value === null || P.value === void 0 ? !0 : !Ll.value : !1), Dl = k(() => {
      const e = Z.value.map((t) => t[i.idKey]).filter((t) => t != null);
      return e.length === 0 ? !1 : e.every((t) => i.checkedRows.includes(t));
    }), Nl = k(() => JSON.stringify({
      global: be.value,
      rowsPerPage: q.value,
      sortField: je.value,
      sortOrder: Ce.value,
      columns: U.value.map((e) => e.key),
      filters: mt.value,
      modes: yn.value,
      types: hn.value,
      selectionFilter: rr.value,
      checkedRows: i.checkedRows,
      manualOrdering: i.manualOrdering,
      manualOrderField: i.manualOrderField
    })), mn = Lu(() => {
      i.managed && Ht({ append: !1 });
    }, 250);
    G(
      () => i.columns,
      () => {
        Ra(), Bl(), wn();
      },
      { immediate: !0, deep: !0 }
    ), G(
      () => i.data,
      (e) => {
        i.managed || cr(e, { append: !1 });
      },
      { deep: !0, immediate: !0 }
    ), G(
      () => i.initialData,
      (e) => {
        e && (i.managed && tr.value || (cr(e, { append: !1 }), tr.value = !0));
      },
      { deep: !0, immediate: !0 }
    ), G(q, () => {
      q.value = en(q.value), Ve.value && (me.value = q.value), Q.value = 1, Xi();
    }), G(Nl, () => {
      if (v("change", Nr(1)), Ve.value && Ci(), i.managed) {
        if (Ve.value) {
          Ht({ append: !1, pageOverride: 1 });
          return;
        }
        mn();
      }
    }), G(Q, () => {
      v("change", Nr()), i.managed && !Ve.value && mn();
    }), G(Ie, (e) => {
      e || re(() => {
        xi();
      });
    }), G(it, async (e, t) => {
      e !== t && (Q.value = 1, e || Ci(), i.managed && await Ht({ append: !1, pageOverride: 1 }), await re(), Dn());
    }), G(
      [
        it,
        Fe,
        Rt,
        Et,
        lt
      ],
      () => {
        Xi();
      },
      { deep: !0 }
    ), G(
      () => Z.value.length,
      async () => {
        Ho(), await re(), $e.value && Oa.value && (Vi(), Li()), Dn();
      }
    ), G(H, xu, { deep: !0 }), G(
      () => U.value.length,
      (e) => {
        const t = Math.max(0, e), r = Math.min(Math.max(ye.value, 0), t);
        r !== ye.value && (ye.value = r, tn()), xn(!0);
      }
    ), G(
      () => Fe.value,
      () => {
        xn(!0);
      }
    ), G($e, (e) => {
      if (!e) {
        P.value = null, L.value = {}, mr();
        return;
      }
      ae.value = "", mr(), Kl(), Li();
    });
    function Ia() {
      if (typeof window > "u" || !oe.value)
        return;
      const e = he.value;
      if (!e)
        return;
      const t = window.innerHeight || document.documentElement?.clientHeight || 0;
      if (t <= 0)
        return;
      const r = e.getBoundingClientRect(), n = Math.floor(t - r.top - 12), u = Math.floor(t * 0.8);
      Fr.value = Math.max(
        240,
        n > 0 ? n : u
      );
    }
    function Aa() {
      re(() => {
        requestAnimationFrame(() => {
          Ia();
        });
      });
    }
    function Tr() {
      oe.value && Ia(), fe.value && ii();
    }
    G(oe, (e) => {
      if (!e) {
        Fr.value = 0;
        return;
      }
      Aa();
    }), G(dt, () => {
      oe.value && Aa();
    }), G(Ae, (e) => {
      if (!e) {
        ze.value = "", pe.value = "", gt.value = null, Ft.value = null;
        return;
      }
      Ze.value = "list", ze.value = "", pe.value = "", On();
    }), G(fe, (e) => {
      if (!e) {
        m.value = "", p.value = "", K.value = "", at.value = !1, te.value = "", xt();
        return;
      }
      W.value = "list", m.value = "", p.value = "", K.value = "", at.value = !1, te.value = "", An();
    }), G(
      () => W.value,
      () => {
        if (K.value = "", W.value === "list") {
          at.value = !1, xt();
          return;
        }
        Io();
      }
    ), G(
      () => O.value.config,
      () => {
        !fe.value || W.value === "list" || (K.value = "", fr());
      },
      { deep: !0 }
    ), G(
      () => te.value,
      () => {
        !fe.value || W.value !== "view" || (K.value = "", fr());
      }
    ), G(
      () => M.value,
      () => {
        !fe.value || W.value === "list" || (K.value = "", fr());
      },
      { deep: !0 }
    ), ku(async () => {
      mu(), Ra(), Pl(), wn(), i.startOnMount && i.managed && Ht({ append: !1, pageOverride: 1 }), i.autoEditLastRowFirstField && re(() => {
        Ul();
      }), window.addEventListener("keydown", qi, { capture: !0 }), window.addEventListener("pointerdown", Ki, {
        capture: !0
      }), window.addEventListener("focusin", Ui, { capture: !0 }), window.addEventListener("resize", Tr), window.addEventListener("scroll", Tr), await re(), Dn();
    }), pl(() => {
      yt && (yt.disconnect(), yt = null), mn.cancel(), zn(), window.removeEventListener("keydown", qi, { capture: !0 }), window.removeEventListener("pointerdown", Ki, {
        capture: !0
      }), window.removeEventListener("focusin", Ui, {
        capture: !0
      }), window.removeEventListener("resize", Tr), window.removeEventListener("scroll", Tr), xt();
    });
    function Ra() {
      const e = i.columns.map((l) => ({
        ...l,
        selected: l.selected !== !1
      })), t = vu();
      if (!t) {
        H.value = e;
        return;
      }
      const r = t.selected ?? {}, a = Array.isArray(t.order) ? t.order : [], n = /* @__PURE__ */ new Map();
      e.forEach((l) => {
        const b = Object.prototype.hasOwnProperty.call(
          r,
          l.key
        ) ? !!r[l.key] : l.selected !== !1;
        n.set(l.key, {
          ...l,
          selected: b
        });
      });
      const u = [];
      a.forEach((l) => {
        n.has(l) && (u.push(n.get(l)), n.delete(l));
      }), n.forEach((l) => u.push(l)), H.value = u;
    }
    function Pl() {
      const e = gu(), t = {};
      i.columns.forEach((u) => {
        const l = String(u.key), b = Number(e?.[l]), y = sr(l);
        if (Number.isFinite(b) && b > 0) {
          t[l] = Math.max(y, Math.round(b));
          return;
        }
        t[l] = jr(u);
      }), He.value = t;
      const r = yu(), a = Math.max(0, U.value.length), n = Math.min(Math.max(r, 0), a);
      ye.value = n, n !== r && tn();
    }
    function Bl() {
      const e = {};
      i.columns.forEach((a) => {
        const n = String(a.key), u = Number(He.value?.[n]), l = sr(n);
        if (Number.isFinite(u) && u > 0) {
          e[n] = Math.max(l, Math.round(u));
          return;
        }
        e[n] = jr(a);
      }), He.value = e;
      const t = Math.max(0, U.value.length), r = Math.min(Math.max(ye.value, 0), t);
      r !== ye.value && (ye.value = r, tn());
    }
    function jr(e) {
      const t = Ta(e), r = Number(e?.width);
      return Number.isFinite(r) && r > 0 ? Math.max(t, Math.round(r)) : e?.type === "boolean" ? Math.max(t, 90) : e?.type === "number" ? Math.max(t, 110) : e?.type === "date" || e?.type === "datetime" ? Math.max(t, 140) : Math.max(t, 180);
    }
    function Ea(e) {
      return i.columns.find((t) => String(t.key) === String(e)) || null;
    }
    function Ta(e, t = null) {
      const r = String(t ?? e?.key ?? ""), a = Number(e?.minWidth), n = U.value.findIndex(
        (ee) => String(ee.key) === r
      ), u = Fe.value && n >= 0 && !!Gr(n);
      let l = ub;
      const b = (e?.sortable !== !1 ? 1 : 0) + (e?.filterable ? 1 : 0) + (u ? 1 : 0), y = String(e?.label ?? "").trim().length, w = Math.min(24, Math.max(8, y * 3)), F = b * 20;
      return l = Math.max(l, F + w + 10), Number.isFinite(a) && a > 0 && (l = Math.max(l, Math.round(a))), l;
    }
    function sr(e) {
      const t = Ea(e);
      return Ta(t, e);
    }
    function xn(e = !1) {
      const t = { ...He.value };
      let r = !1;
      i.columns.forEach((a) => {
        const n = String(a.key), u = Number(t[n]), l = sr(n);
        if (!Number.isFinite(u) || u <= 0) {
          t[n] = Math.max(l, jr(a)), r = !0;
          return;
        }
        const b = Math.max(l, Math.round(u));
        b !== Math.round(u) && (t[n] = b, r = !0);
      }), r && (He.value = t, e && Yi());
    }
    function wn() {
      const e = { ...Qe.value }, t = { ...Ee.value };
      i.columns.forEach((r) => {
        const a = $r(r.type);
        e[r.key] = a, t[r.key] || (t[r.key] = kn(a));
      }), Qe.value = e, Ee.value = t;
    }
    function Kl() {
      const e = {};
      U.value.forEach((r) => {
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
      const t = typeof i.inlineCreateDefaults == "function" ? i.inlineCreateDefaults() : i.inlineCreateDefaults;
      L.value = {
        ...e,
        ...t || {}
      };
    }
    function Ul() {
      if (Tt.value.length === 0 || Z.value.length === 0)
        return;
      const e = Z.value.length - 1, t = Z.value[e];
      Ke.value = e, Lt(t, Tt.value[0]);
    }
    function $r(e) {
      return e && ["number", "date", "datetime", "boolean"].includes(e) ? e : "text";
    }
    function kn(e) {
      return e === "text" ? "bevat" : "=";
    }
    function ql(e) {
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
    function zr(e) {
      return U.value.find((t) => t.key === e) || i.columns.find((t) => t.key === e) || null;
    }
    function Hl(e) {
      return Sn(e) ? pa : "=";
    }
    function qt(e) {
      return e === pa || e === on;
    }
    function Wl(e) {
      const t = Qe.value[e.key] ?? $r(e.type), r = [...ql(t)];
      return t !== "text" || !Va(e) || (r.push({
        value: pa,
        label: e.editMultiple === !0 ? o("filters.modes.contains_option_all", "Bevat optie (alle gekozen)") : o("filters.modes.contains_option", "Bevat optie")
      }), r.push({
        value: on,
        label: e.editMultiple === !0 ? o(
          "filters.modes.equals_option_exact",
          "Is gelijk aan optie (exacte set)"
        ) : o("filters.modes.equals_option", "Is gelijk aan optie")
      })), r;
    }
    function jt(e) {
      const t = Ee.value[e];
      if (typeof t == "string" && t !== "")
        return t;
      const r = zr(e);
      if (r && !Dr(ve.value[e]))
        return Hl(r);
      const a = Qe.value[e] ?? $r(r?.type);
      return kn(a);
    }
    function Cn(e) {
      const t = zr(e), r = jt(e);
      return !t || !qt(r) ? e : typeof t.filterField == "string" && t.filterField.trim() !== "" ? t.filterField.trim() : typeof t.editField == "string" && t.editField.trim() !== "" ? t.editField.trim() : e;
    }
    function Gl(e) {
      return Va(e) && qt(jt(e.key));
    }
    function ja(e, t) {
      return e?.editMultiple === !0 ? $t(t).map((r) => r ?? "").filter((r) => String(r).trim() !== "") : Array.isArray(t) ? t.length > 0 ? t[0] : "" : t ?? "";
    }
    function $a(e, t) {
      const r = e.filterItemValue || e.editItemValue || "value", a = e.filterItemTitle || e.editItemTitle || "title";
      if (t !== null && typeof t == "object") {
        const n = t?.[r] ?? t?.value ?? t?.id ?? t?.[a] ?? t?.label, u = t?.[a] ?? t?.label ?? t?.title ?? t?.[r] ?? n;
        return n == null || n === "" ? null : {
          value: n,
          title: String(u ?? n)
        };
      }
      return t == null || t === "" ? null : {
        value: t,
        title: String(t)
      };
    }
    function Yl(e, t) {
      return t == null || t === "" ? [] : e?.editMultiple === !0 || Array.isArray(t) ? $t(t) : [t];
    }
    function za(e) {
      const t = [], r = /* @__PURE__ */ new Set();
      return e.forEach((a) => {
        const n = String(a.value);
        r.has(n) || (r.add(n), t.push(a));
      }), t;
    }
    function Xl(e) {
      return za(
        z.value.flatMap((r) => Yl(e, r?.[e.key])).map((r) => $a(e, r)).filter((r) => r !== null)
      ).sort((r, a) => String(r.title).localeCompare(String(a.title)));
    }
    function _n(e) {
      const t = Array.isArray(e?.filterItems) ? e.filterItems : Array.isArray(e?.editItems) ? e.editItems : [], r = za(
        t.map((a) => $a(e, a)).filter((a) => a !== null)
      );
      return r.length > 0 ? r : Xl(e);
    }
    function Sn(e) {
      if (!e || typeof e != "object")
        return !1;
      const t = Qe.value[e.key] ?? $r(e.type);
      return t === "boolean" || t === "date" || t === "datetime" ? !1 : Array.isArray(e.filterItems) || e.editInput === "select" || e.editInput === "autocomplete";
    }
    function Jl(e) {
      return Sn(e) ? e.filterInput === "autocomplete" ? !0 : e.editInput === "autocomplete" : !1;
    }
    function Va(e) {
      return Sn(e) ? _n(e).length > 0 : !1;
    }
    function La(e) {
      return !Dr(ve.value[e]);
    }
    function Da(e) {
      return !Dr(ie.value[e]);
    }
    function Ql(e, t, r) {
      const a = zr(t);
      if (!a || !qt(r))
        return e?.[t];
      const n = typeof a.filterField == "string" && a.filterField.trim() !== "" ? a.filterField.trim() : typeof a.editField == "string" && a.editField.trim() !== "" ? a.editField.trim() : t;
      return Object.prototype.hasOwnProperty.call(e || {}, n) ? e?.[n] : e?.[t];
    }
    function Na(e) {
      return String(e ?? "").trim().toLowerCase();
    }
    function Pa(e) {
      return Array.from(
        new Set(
          $t(e).map((t) => Na(t)).filter((t) => t !== "")
        )
      );
    }
    function Zl(e, t, r) {
      const a = Pa(r);
      if (a.length === 0)
        return !0;
      if (Array.isArray(e) || typeof e == "string" && e.trim().startsWith("[") && e.trim().endsWith("]")) {
        const l = Pa(e);
        return t === on ? l.length !== a.length ? !1 : a.every((b) => l.includes(b)) : a.every((b) => l.includes(b));
      }
      const u = Na(e);
      return t === on ? a.length === 1 && u === a[0] : a.every((l) => u.includes(l));
    }
    function eo(e, t, r, a) {
      if (qt(t))
        return Zl(e, t, a);
      if (r === "date" || r === "datetime") {
        const l = Vr(e);
        if (!l)
          return !1;
        if (t === "tussen") {
          const y = Vr(a?.from), w = Vr(a?.to);
          return !y || !w ? !0 : l >= y && l <= w;
        }
        const b = Vr(a);
        return b ? t === "=" ? l === b : t === "!=" ? l !== b : t === ">" ? l > b : t === "<" ? l < b : !0 : !0;
      }
      if (r === "number") {
        const l = Number(e), b = Number(a);
        return Number.isNaN(b) ? !0 : t === "=" ? l === b : t === "!=" ? l !== b : t === ">" ? l > b : t === "<" ? l < b : !0;
      }
      if (r === "boolean") {
        const l = Lr(e), b = Lr(a);
        return b === null ? !0 : t === "!=" ? l !== b : l === b;
      }
      const n = String(e ?? "").toLowerCase(), u = String(a ?? "").toLowerCase();
      return t === "bevat" ? n.includes(u) : t === "bevat niet" ? !n.includes(u) : t === "=" ? n === u : t === "!=" ? n !== u : !0;
    }
    function Vr(e) {
      return e ? typeof e == "string" ? e.slice(0, 10) : e instanceof Date ? e.toISOString().slice(0, 10) : null : null;
    }
    function Ba(e) {
      const t = String(e?.dateAssumeTimezone || "auto").trim().toLowerCase();
      return t === "utc" || t === "local" ? t : "auto";
    }
    function to(e) {
      if (Object.prototype.hasOwnProperty.call(e || {}, "dateDisplayFallback")) {
        const t = e?.dateDisplayFallback;
        return t == null || t === "" ? "-" : String(t);
      }
      return "-";
    }
    function ro(e) {
      const t = String(e).trim().match(
        /^(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2})(?::(\d{2}))?(?:\.(\d{1,3}))?)?$/
      );
      if (!t)
        return null;
      const r = Number(t[1]), a = Number(t[2]), n = Number(t[3]), u = Number(t[4] || 0), l = Number(t[5] || 0), b = Number(t[6] || 0), y = Number((t[7] || "").padEnd(3, "0") || 0);
      return {
        year: r,
        month: a,
        day: n,
        hour: u,
        minute: l,
        second: b,
        millisecond: y
      };
    }
    function no(e, t) {
      if (!e)
        return null;
      const r = t === "utc" ? new Date(
        Date.UTC(
          e.year,
          e.month - 1,
          e.day,
          e.hour,
          e.minute,
          e.second,
          e.millisecond
        )
      ) : new Date(
        e.year,
        e.month - 1,
        e.day,
        e.hour,
        e.minute,
        e.second,
        e.millisecond
      );
      return Number.isFinite(r.getTime()) ? t === "utc" ? r.getUTCFullYear() !== e.year || r.getUTCMonth() + 1 !== e.month || r.getUTCDate() !== e.day || r.getUTCHours() !== e.hour || r.getUTCMinutes() !== e.minute || r.getUTCSeconds() !== e.second ? null : r : r.getFullYear() !== e.year || r.getMonth() + 1 !== e.month || r.getDate() !== e.day || r.getHours() !== e.hour || r.getMinutes() !== e.minute || r.getSeconds() !== e.second ? null : r : null;
    }
    function ao(e, t) {
      const r = Ba(t);
      if (e instanceof Date)
        return Number.isFinite(e.getTime()) ? new Date(e.getTime()) : null;
      if (typeof e == "number") {
        const b = new Date(e);
        return Number.isFinite(b.getTime()) ? b : null;
      }
      if (typeof e != "string")
        return null;
      const a = e.trim();
      if (a === "")
        return null;
      const n = /(?:Z|[+\-]\d{2}:?\d{2})$/i.test(a), u = ro(a);
      if (u && !n) {
        const y = no(u, r === "utc" ? "utc" : "local");
        if (y)
          return y;
      }
      const l = new Date(a);
      if (Number.isFinite(l.getTime()))
        return l;
      if (a.includes(" ")) {
        const b = a.replace(" ", "T"), y = new Date(b);
        if (Number.isFinite(y.getTime()))
          return y;
      }
      return null;
    }
    function ur(e) {
      return String(e).padStart(2, "0");
    }
    function io(e, t, r = "auto") {
      const a = r === "utc", n = a ? e.getUTCFullYear() : e.getFullYear(), u = (a ? e.getUTCMonth() : e.getMonth()) + 1, l = a ? e.getUTCDate() : e.getDate(), b = a ? e.getUTCHours() : e.getHours(), y = a ? e.getUTCMinutes() : e.getMinutes(), w = a ? e.getUTCSeconds() : e.getSeconds(), F = {
        yyyy: String(n),
        yy: String(n).slice(-2),
        MM: ur(u),
        M: String(u),
        dd: ur(l),
        d: String(l),
        HH: ur(b),
        H: String(b),
        mm: ur(y),
        m: String(y),
        ss: ur(w),
        s: String(w)
      };
      return Object.keys(F).sort((j, ee) => ee.length - j.length).reduce(
        (j, ee) => j.replaceAll(ee, F[ee]),
        t
      );
    }
    function Lr(e) {
      return e === !0 || e === 1 || e === "1" || e === "true" ? !0 : e === !1 || e === 0 || e === "0" || e === "false" ? !1 : null;
    }
    function Dr(e) {
      if (e == null || e === "")
        return !0;
      if (Array.isArray(e))
        return e.length === 0 ? !0 : e.every((t) => t == null || String(t).trim() === "");
      if (typeof e == "object") {
        const t = !!e.from, r = !!e.to;
        return !t || !r;
      }
      return !1;
    }
    function dr(e) {
      if (!e)
        return [];
      if (Array.isArray(e))
        return e;
      if (Array.isArray(e.data))
        return e.data;
      const t = e?.[i.responseMap.data];
      return Array.isArray(t) ? t : [];
    }
    function cr(e, t = { append: !1, targetPage: null }) {
      const r = dr(e), a = e?.[i.responseMap.total] ?? e?.total ?? r.length, n = e?.[i.responseMap.current] ?? e?.current_page ?? t.targetPage ?? 1, u = e?.[i.responseMap.last] ?? e?.last_page ?? Math.max(1, Math.ceil((a || r.length) / q.value));
      Ge.value = {
        total: Number(a ?? r.length),
        current: Number(n ?? 1),
        last: Number(u ?? 1)
      }, z.value = r, Ve.value && t.append ? lo(r) : Oe.value = [...r], i.managed && (Q.value = Number(n ?? 1));
    }
    function lo(e) {
      const t = [...Oe.value], r = new Set(
        t.map((a) => a[i.idKey]).filter((a) => a != null)
      );
      e.forEach((a) => {
        const n = a[i.idKey];
        if (n == null) {
          t.push(a);
          return;
        }
        r.has(n) || (r.add(n), t.push(a));
      }), Oe.value = t;
    }
    function Nr(e = null) {
      const t = e ?? Q.value, r = {
        [i.paramMap.page]: t,
        [i.paramMap.rowsPerPage]: q.value,
        [i.paramMap.sortField]: je.value,
        [i.paramMap.sortOrder]: Ce.value,
        [i.paramMap.global]: be.value,
        [i.paramMap.filters]: _a.value,
        [i.paramMap.filterModes]: Sa.value,
        [i.paramMap.filterTypes]: Ma.value,
        [i.paramMap.selectionFilter]: rr.value,
        [i.paramMap.selectedRowIds]: i.checkedRows
      };
      return i.paramMap.manualOrdering && (r[i.paramMap.manualOrdering] = i.manualOrdering ? 1 : 0), i.paramMap.manualOrderField && (r[i.paramMap.manualOrderField] = i.manualOrderField), i.columnsParamMode === "keys" ? r[i.paramMap.columns] = U.value.map(
        (a) => a.key
      ) : i.columnsParamMode === "full" && (r[i.paramMap.columns] = U.value), r;
    }
    async function Ht(e = { append: !1, pageOverride: null }) {
      if (!i.dataSource?.path)
        return;
      const t = !!e.append, r = e.pageOverride ?? Q.value;
      Ie.value = !0;
      const a = {
        ...Nr(r),
        ...Ka()
      };
      try {
        if ((i.dataSource.type || "inertia") === "axios") {
          const n = rt(), u = (i.dataSource.method || "get").toLowerCase(), l = await n({
            method: u,
            url: i.dataSource.path,
            params: u === "get" ? a : void 0,
            data: u !== "get" ? a : void 0
          });
          cr(l.data, { append: t, targetPage: r }), Ie.value = !1;
          return;
        }
        _u.visit(i.dataSource.path, {
          method: i.dataSource.method || "get",
          data: a,
          preserveState: i.dataSource.preserve ?? !0,
          preserveScroll: !0,
          replace: i.urlSync === "none",
          only: i.dataSource.data ? [i.dataSource.data] : void 0,
          onSuccess: (n) => {
            if (i.dataSource.data) {
              cr(n.props[i.dataSource.data], {
                append: t,
                targetPage: r
              });
              return;
            }
            cr(n.props, { append: t, targetPage: r });
          },
          onFinish: () => {
            Ie.value = !1;
          }
        });
      } catch (n) {
        throw Ie.value = !1, n;
      }
    }
    function Ka() {
      return typeof i.dataSource?.params == "function" ? i.dataSource.params() || {} : i.dataSource?.params || {};
    }
    function Ua() {
      return `${Ar.value}/rw-table-exports/${encodeURIComponent(pn.value)}`;
    }
    function qa() {
      return `${Ar.value}/rw-table-charts/${encodeURIComponent(pn.value)}`;
    }
    function oo() {
      const e = !Ae.value;
      Ae.value = e, e && (fe.value = !1);
    }
    function so() {
      const e = !fe.value;
      fe.value = e, e && (Ae.value = !1);
    }
    function Ha(e) {
      const t = String(e || "bar").toLowerCase();
      return Or.value.map((a) => a.value).includes(t) ? t : "bar";
    }
    function Wa(e) {
      const t = String(e || "count").toLowerCase();
      return ha.value.map((a) => a.value).includes(t) ? t : "count";
    }
    function Ga(e) {
      return String(e || "desc").toLowerCase() === "asc" ? "asc" : "desc";
    }
    function Mn(e) {
      return String(e || "vertical").toLowerCase() === "horizontal" ? "horizontal" : "vertical";
    }
    function Ya(e) {
      const t = Number(e);
      return Number.isFinite(t) ? Math.min(500, Math.max(1, Math.round(t))) : 25;
    }
    function uo(e) {
      const t = Ha(e);
      return Or.value.find(
        (a) => a.value === t
      )?.label || t;
    }
    function co() {
      return `${String(O.value?.description || "").trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || o("charts.pdf.default_filename", "grafiek")}.pdf`;
    }
    function Fn(e) {
      return String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
    }
    function Pr(e) {
      const t = xa(), r = e && typeof e == "object" && !Array.isArray(e) ? e : {}, a = r.builder && typeof r.builder == "object" && !Array.isArray(r.builder) ? r.builder : {}, n = a.dataset && typeof a.dataset == "object" && !Array.isArray(a.dataset) ? a.dataset : {}, u = a.chart && typeof a.chart == "object" && !Array.isArray(a.chart) ? a.chart : {}, l = a.presentation && typeof a.presentation == "object" && !Array.isArray(a.presentation) ? a.presentation : {}, b = {
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
      }, F = {
        ...t.builder.dataset,
        ...b,
        ...n
      }, j = {
        ...t.builder.chart,
        ...y,
        ...u
      }, ee = {
        ...t.builder.presentation,
        ...w,
        ...l
      };
      return {
        version: 1,
        builder: {
          dataset: {
            x_field: String(F.x_field || "").trim(),
            metric_field: String(F.metric_field || "").trim(),
            aggregate: Wa(F.aggregate),
            series_field: String(F.series_field || "").trim(),
            limit: Ya(F.limit),
            sort_direction: Ga(
              F.sort_direction
            )
          },
          chart: {
            type: Ha(j.type),
            orientation: Mn(j.orientation),
            stacked: !!j.stacked,
            show_legend: j.show_legend !== !1
          },
          presentation: {
            allow_chart_type_change: ee.allow_chart_type_change === !0
          }
        }
      };
    }
    function fo() {
      const e = new Map(
        i.columns.map((t) => [String(t.key), t])
      );
      return H.value.map((t) => {
        const r = String(t.key), a = e.get(r);
        return {
          key: r,
          label: a ? x(a) : t.label ?? r,
          selected: t.selected !== !1,
          width: kt(r)
        };
      });
    }
    function po() {
      B.value = {
        id: null,
        description: "",
        columns: fo()
      }, ze.value = "", pe.value = "", Ze.value = "edit";
    }
    function Xa(e) {
      const t = new Map(
        i.columns.map((u) => [String(u.key), u])
      ), r = Array.isArray(e?.config) ? e.config : Array.isArray(e?.columns) ? e.columns : [], a = [], n = /* @__PURE__ */ new Set();
      r.forEach((u) => {
        const l = String(u?.key ?? "");
        if (!l || n.has(l))
          return;
        n.add(l);
        const b = t.get(l);
        a.push({
          key: l,
          label: u?.label ?? (b ? x(b) : l),
          selected: !!u?.selected,
          width: Number(u?.width) || kt(l)
        });
      }), i.columns.forEach((u) => {
        const l = String(u.key);
        n.has(l) || a.push({
          key: l,
          label: x(u),
          selected: !1,
          width: kt(l)
        });
      }), B.value = {
        id: e?.id ?? null,
        description: String(e?.description ?? ""),
        columns: a
      }, ze.value = "", pe.value = "";
    }
    function bo(e) {
      Xa(e), Ze.value = "edit";
    }
    async function On() {
      try {
        const t = await rt().get(Ua());
        Pt.value = Array.isArray(t?.data?.exports) ? t.data.exports : [], pe.value = "";
      } catch {
        Pt.value = [], pe.value = o(
          "excel.messages.load_failed",
          "Kon opgeslagen exports niet laden voor deze tabel."
        );
      }
    }
    async function vo() {
      if (ka.value) {
        ge.value = !0;
        try {
          const e = rt(), t = {
            id: B.value.id,
            description: String(B.value.description || "").trim(),
            config: B.value.columns
          }, r = await e.post(Ua(), t);
          r?.data?.export?.id && (B.value.id = r.data.export.id), await On();
          const a = o(
            "excel.messages.saved",
            "Export configuratie opgeslagen."
          );
          ze.value = a, pe.value = "", setTimeout(() => {
            ze.value === a && (ze.value = "");
          }, 2500);
        } catch {
          pe.value = o(
            "excel.messages.save_failed",
            "Opslaan van de export configuratie is mislukt."
          );
        } finally {
          ge.value = !1;
        }
      }
    }
    async function go(e) {
      ge.value = !0;
      try {
        await rt().delete(
          `${Ar.value}/rw-table-exports/${Number(e)}`
        ), await On(), pe.value = "", B.value.id === e && (Ze.value = "list");
      } catch {
        pe.value = o(
          "excel.messages.delete_failed",
          "Verwijderen van de export is mislukt."
        );
      } finally {
        ge.value = !1;
      }
    }
    function In(e, t) {
      if (!e || !t || e === t)
        return;
      const r = B.value.columns.findIndex(
        (l) => l.key === e
      ), a = B.value.columns.findIndex(
        (l) => l.key === t
      );
      if (r < 0 || a < 0 || r === a)
        return;
      const n = [...B.value.columns], [u] = n.splice(r, 1);
      n.splice(a, 0, u), B.value.columns = n;
    }
    function Ja(e) {
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
    function yo(e, t) {
      if (gt.value = e, t?.dataTransfer) {
        t.dataTransfer.effectAllowed = "move";
        try {
          t.dataTransfer.setData("text/plain", String(e)), Ja(t);
        } catch {
          return;
        }
      }
    }
    function ho(e, t) {
      gt.value && (t.preventDefault(), Ft.value = e, t?.dataTransfer && (t.dataTransfer.dropEffect = "move"));
    }
    function mo(e, t) {
      t.preventDefault();
      const r = t?.dataTransfer?.getData?.("text/plain") || null, a = gt.value || r;
      In(a, e), Qa();
    }
    function Qa() {
      gt.value = null, Ft.value = null;
    }
    function xo(e, t) {
      if (jn(t))
        return Ur(t, e) ?? "";
      if (t.type === "boolean")
        return si(t, e[t.key]);
      const r = En(e, t);
      return r === "-" && (e[t.key] === null || e[t.key] === void 0 || e[t.key] === "") ? "" : r;
    }
    async function Za() {
      if (!ir.value)
        return Kt.value;
      const e = {
        ...Nr(1),
        ...Ka()
      };
      e[i.paramMap.page] = 1, e[i.paramMap.rowsPerPage] = 1e5;
      const t = rt(), r = (i.dataSource?.method || "get").toLowerCase();
      if ((i.dataSource?.type || "inertia") === "axios") {
        const l = await t({
          method: r,
          url: i.dataSource.path,
          params: r === "get" ? e : void 0,
          data: r !== "get" ? e : void 0
        });
        return dr(l.data);
      }
      const a = {
        "X-Inertia": "true"
      };
      S?.version && (a["X-Inertia-Version"] = S.version), S?.component && (a["X-Inertia-Partial-Component"] = S.component, i.dataSource?.data && (a["X-Inertia-Partial-Data"] = i.dataSource.data));
      const n = await t({
        method: r,
        url: i.dataSource.path,
        params: r === "get" ? e : void 0,
        data: r !== "get" ? e : void 0,
        headers: a
      }), u = n?.data?.props;
      return u ? i.dataSource?.data && u[i.dataSource.data] ? dr(u[i.dataSource.data]) : dr(u) : dr(n?.data);
    }
    function wo() {
      const e = `export-${pn.value}`;
      return `${String(B.value.description || e).trim().replace(/[\\/:*?"<>|]+/g, "-").replace(/\s+/g, " ").slice(0, 120) || e}.xlsx`;
    }
    async function ko() {
      if (!ge.value) {
        ge.value = !0, ze.value = "", pe.value = "";
        try {
          const e = await Za();
          if (!Array.isArray(e) || e.length === 0) {
            pe.value = o(
              "excel.messages.no_data",
              "Geen data gevonden om te exporteren."
            );
            return;
          }
          const t = wa.value;
          if (t.length === 0) {
            pe.value = o(
              "excel.messages.no_columns_selected",
              "Selecteer minstens één kolom voor export."
            );
            return;
          }
          const r = await import("exceljs"), a = r.default || r, n = new a.Workbook(), u = n.addWorksheet("Export");
          u.columns = t.map((j) => ({
            header: x(j),
            key: j.key,
            width: Math.max((Number(j.width) || 100) / 7, 10)
          }));
          const l = e.map((j) => {
            const ee = {};
            return t.forEach((We) => {
              ee[We.key] = xo(j, We);
            }), ee;
          });
          u.addRows(l), u.getRow(1).font = { bold: !0 };
          const b = await n.xlsx.writeBuffer(), y = new Blob([b], {
            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          }), w = window.URL.createObjectURL(y), F = document.createElement("a");
          F.href = w, F.setAttribute("download", wo()), document.body.appendChild(F), F.click(), document.body.removeChild(F), window.URL.revokeObjectURL(w);
        } catch {
          pe.value = o(
            "excel.messages.download_failed",
            "Er is een fout opgetreden bij het genereren van de Excel export."
          );
        } finally {
          ge.value = !1;
        }
      }
    }
    async function Co(e) {
      Xa(e), await ko();
    }
    function _o() {
      O.value = {
        id: null,
        description: "",
        config: Pr(xa())
      }, m.value = "", p.value = "", K.value = "", te.value = O.value.config.builder.chart.type || "bar", W.value = "edit";
    }
    function ei(e) {
      const t = Pr(e?.config || {});
      O.value = {
        id: e?.id ?? null,
        description: String(e?.description || ""),
        config: t
      }, m.value = "", p.value = "", K.value = "", te.value = t.builder.chart.type || "bar";
    }
    function So(e) {
      ei(e), W.value = "edit";
    }
    function Mo(e) {
      ei(e), W.value = "view";
    }
    async function An() {
      try {
        const t = await rt().get(qa());
        Ot.value = Array.isArray(t?.data?.charts) ? t.data.charts : [], p.value = "";
      } catch {
        Ot.value = [], p.value = o(
          "charts.messages.load_failed",
          "Kon opgeslagen grafieken niet laden voor deze tabel."
        );
      }
    }
    async function Fo() {
      if (gn.value) {
        Ue.value = !0;
        try {
          const e = rt(), t = {
            id: O.value.id,
            description: String(O.value.description || "").trim(),
            config: Pr(O.value.config)
          }, r = await e.post(qa(), t);
          r?.data?.chart?.id && (O.value.id = r.data.chart.id), await An();
          const a = o(
            "charts.messages.saved",
            "Grafiekconfiguratie opgeslagen."
          );
          m.value = a, p.value = "", setTimeout(() => {
            m.value === a && (m.value = "");
          }, 2500);
        } catch {
          p.value = o(
            "charts.messages.save_failed",
            "Opslaan van de grafiekconfiguratie is mislukt."
          );
        } finally {
          Ue.value = !1;
        }
      }
    }
    async function Oo(e) {
      Ue.value = !0;
      try {
        await rt().delete(
          `${Ar.value}/rw-table-charts/${Number(e)}`
        ), await An(), O.value.id === e && (W.value = "list"), p.value = "";
      } catch {
        p.value = o(
          "charts.messages.delete_failed",
          "Verwijderen van de grafiekconfiguratie is mislukt."
        );
      } finally {
        Ue.value = !1;
      }
    }
    async function Io() {
      if (W.value === "list")
        return;
      D.value = !0, K.value = "";
      let e = null;
      try {
        e = await Za();
      } catch {
        M.value = [], K.value = o(
          "charts.messages.source_load_failed",
          "Kon brondata voor de grafiek niet laden."
        ), xt();
      } finally {
        D.value = !1;
      }
      K.value || (M.value = Array.isArray(e) ? e : [], await fr());
    }
    async function Ao() {
      if (D.value || !Er.value)
        return;
      at.value = !0;
      let e = null;
      try {
        if (await re(), Le || await fr(), !Le) {
          p.value = o(
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
        }), r = String(O.value?.description || "").trim() || o("charts.pdf.default_title", "Grafiek"), a = `${uo(Rr.value)} - ${(/* @__PURE__ */ new Date()).toLocaleString(E.value)}`;
        e = document.createElement("div"), e.className = "rw-chart-pdf-export", e.innerHTML = `
            <div style="width: 1080px; background: #ffffff; padding: 24px 28px 18px; box-sizing: border-box; font-family: Arial, sans-serif;">
                <div style="font-size: 22px; font-weight: 700; color: #0f172a; line-height: 1.35; margin-bottom: 4px;">${Fn(r)}</div>
                <div style="font-size: 14px; color: #64748b; line-height: 1.4; margin-bottom: 18px;">${Fn(a)}</div>
                <div style="width: 100%; display: flex; justify-content: center; align-items: center; overflow: hidden;">
                    <img src="${t}" alt="${Fn(o("charts.pdf.image_alt", "Grafiek export"))}" style="display: block; width: 100%; height: auto; object-fit: contain;" />
                </div>
            </div>
        `, document.body.appendChild(e), await (await zo())().set({
          margin: [10, 10, 10, 10],
          filename: co(),
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
        }).from(e).save(), p.value = "";
      } catch {
        p.value = o(
          "charts.messages.pdf_failed",
          "PDF afdrukken van de grafiek is mislukt."
        );
      } finally {
        e && e.remove(), at.value = !1;
      }
    }
    function ti(e) {
      return e == null || e === "" ? "(Leeg)" : String(e);
    }
    function Ro(e) {
      const t = Number(e);
      return Number.isFinite(t) ? t : 0;
    }
    function Eo() {
      return {
        count: 0,
        sum: 0,
        min: null,
        max: null
      };
    }
    function To(e, t, r) {
      e.count += 1, t !== "count" && (e.sum += r, (e.min === null || r < e.min) && (e.min = r), (e.max === null || r > e.max) && (e.max = r));
    }
    function ri(e, t) {
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
    function jo(e, t) {
      const r = Array.isArray(e) ? e : [], n = Pr(t).builder.dataset, u = String(n.x_field || "").trim(), l = String(n.metric_field || "").trim(), b = String(n.series_field || "").trim(), y = Wa(n.aggregate);
      if (!u)
        return { labels: [], series: [] };
      if (y !== "count" && l === "")
        return { labels: [], series: [] };
      const w = /* @__PURE__ */ new Map(), F = [];
      r.forEach((we) => {
        const Re = ti(we?.[u]), De = b ? ti(we?.[b]) : o("charts.series.total", "Totaal");
        w.has(Re) || w.set(Re, /* @__PURE__ */ new Map());
        const pt = w.get(Re);
        pt.has(De) || (pt.set(De, Eo()), F.includes(De) || F.push(De));
        const Zt = y === "count" ? 0 : Ro(we?.[l]);
        To(
          pt.get(De),
          y,
          Zt
        );
      });
      const j = Ga(n.sort_direction), ee = Ya(n.limit), We = [...w.entries()].map(([we, Re]) => {
        let De = 0;
        return Re.forEach((pt) => {
          De += ri(pt, y);
        }), {
          label: we,
          total: De
        };
      }).sort((we, Re) => we.total === Re.total ? we.label.localeCompare(Re.label, void 0, {
        numeric: !0,
        sensitivity: "base"
      }) : j === "asc" ? we.total - Re.total : Re.total - we.total).slice(0, ee).map((we) => we.label);
      if (We.length === 0)
        return { labels: [], series: [] };
      const Nt = (b ? F : [o("charts.series.total", "Totaal")]).map((we) => {
        const Re = We.map((De) => {
          const pt = w.get(De)?.get(we), Zt = ri(pt, y);
          return Number.isFinite(Zt) ? Number(Zt) : 0;
        });
        return {
          name: we,
          data: Re
        };
      });
      return {
        labels: We,
        series: Nt
      };
    }
    function ni() {
      return W.value === "view" ? et.value : W.value === "edit" ? qe.value : null;
    }
    function $o() {
      try {
        const e = document.createElement("canvas");
        return e ? !!(e.getContext("webgl2") || e.getContext("webgl") || e.getContext("experimental-webgl")) : !1;
      } catch {
        return !1;
      }
    }
    async function ai() {
      if (lr)
        return lr;
      const [e] = await Promise.all([
        import("echarts"),
        import("echarts-gl")
      ]);
      return lr = e, ma = !0, lr;
    }
    async function zo() {
      if (Ir)
        return Ir;
      const e = await import("html2pdf.js");
      return Ir = e.default || e, Ir;
    }
    async function Vo() {
      ma || await ai();
    }
    function xt() {
      Le && (Le.dispose(), Le = null);
    }
    function Lo(e) {
      const t = Array.isArray(e?.labels) ? e.labels : [], r = Array.isArray(e?.series) ? e.series : [], a = String(Rr.value || "pie"), n = t.map((u, l) => {
        const b = r.reduce((y, w) => {
          const F = Array.isArray(w.data) ? Number(w.data[l] || 0) : 0;
          return y + (Number.isFinite(F) ? F : 0);
        }, 0);
        return {
          name: String(u),
          value: b
        };
      });
      return {
        color: ot,
        tooltip: {
          trigger: "item"
        },
        legend: {
          show: st.value.show_legend !== !1,
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
    function Do(e, t = "bar") {
      const r = Array.isArray(e?.labels) ? e.labels : [], a = Array.isArray(e?.series) ? e.series : [], n = Mn(st.value.orientation) === "horizontal", u = n && t === "line" ? "bar" : String(t || "bar");
      return {
        color: ot,
        tooltip: {
          trigger: "axis",
          axisPointer: { type: "shadow" }
        },
        legend: {
          show: st.value.show_legend !== !1,
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
        series: a.map((l) => ({
          name: String(l.name || o("charts.series.total", "Totaal")),
          type: u,
          stack: st.value.stacked ? "total" : null,
          smooth: u === "line",
          data: Array.isArray(l.data) ? l.data.map((b) => Number(b || 0)) : []
        }))
      };
    }
    function No(e, t = "bar3d") {
      const r = lr, a = Array.isArray(e?.labels) ? e.labels : [], n = Array.isArray(e?.series) ? e.series : [], u = Mn(st.value.orientation) === "horizontal";
      return String(t || "bar3d") === "line3d" ? {
        color: ot,
        tooltip: { trigger: "item" },
        legend: {
          show: st.value.show_legend !== !1,
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
        series: n.map((b, y) => ({
          name: String(b.name || `Reeks ${y + 1}`),
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
                color: ot[y % ot.length]
              },
              { offset: 1, color: "#0f172a" }
            ]) : ot[y % ot.length]
          },
          data: Array.isArray(b.data) ? b.data.map((w) => Number(w || 0)) : []
        }))
      } : {
        color: ot,
        tooltip: {
          trigger: "axis",
          axisPointer: { type: "shadow" }
        },
        legend: {
          show: st.value.show_legend !== !1,
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
        series: n.map((b, y) => ({
          name: String(b.name || `Reeks ${y + 1}`),
          type: "bar",
          stack: st.value.stacked ? "total" : null,
          barMaxWidth: 48,
          itemStyle: {
            color: ot[y % ot.length],
            borderColor: "#0f172a",
            borderWidth: 0.6,
            shadowBlur: 10,
            shadowOffsetY: 8,
            shadowColor: "rgba(15, 23, 42, 0.25)"
          },
          data: Array.isArray(b.data) ? b.data.map((w) => Number(w || 0)) : []
        }))
      };
    }
    function Po(e, t = "bar3d_webgl") {
      const r = Array.isArray(e?.labels) ? e.labels : [], a = Array.isArray(e?.series) ? e.series : [], n = String(t || "bar3d_webgl"), u = a.map(
        (y, w) => String(y.name || `Reeks ${w + 1}`)
      ), l = a.reduce((y, w) => {
        const F = Array.isArray(w.data) ? w.data : [], j = Math.max(0, ...F.map((ee) => Number(ee || 0)));
        return Math.max(y, j);
      }, 0);
      if (n === "line3d_webgl")
        return {
          tooltip: {},
          legend: {
            show: st.value.show_legend !== !1,
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
            max: l > 0 ? l : 10
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
              (F, j) => [j, w, Number(F || 0)]
            )
          }))
        };
      const b = [];
      return a.forEach((y, w) => {
        (Array.isArray(y.data) ? y.data : []).forEach((j, ee) => {
          b.push({
            value: [ee, w, Number(j || 0)]
          });
        });
      }), {
        tooltip: {},
        visualMap: {
          max: l > 0 ? l : 10,
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
          max: l > 0 ? l : 10
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
            data: b,
            shading: "lambert"
          }
        ]
      };
    }
    function Bo(e) {
      const t = String(Rr.value || "bar");
      return t === "pie" || t === "doughnut" ? Lo(e) : t === "bar3d_webgl" || t === "line3d_webgl" ? Po(e, t) : t === "bar3d" || t === "line3d" ? No(e, t) : Do(
        e,
        t === "line" ? "line" : "bar"
      );
    }
    function ii() {
      Le && Le.resize();
    }
    async function fr() {
      if (!fe.value || W.value === "list") {
        xt();
        return;
      }
      if (await re(), !ni() || !Er.value) {
        xt();
        return;
      }
      const t = String(Rr.value || "bar");
      if ((t === "bar3d_webgl" || t === "line3d_webgl") && !$o()) {
        K.value = o(
          "charts.messages.webgl_unsupported",
          "WebGL wordt niet ondersteund in deze browser of op deze GPU. Kies een niet-WebGL grafiektype."
        ), xt();
        return;
      }
      const r = await ai();
      (t === "bar3d_webgl" || t === "line3d_webgl") && await Vo();
      const a = ni();
      if (a) {
        (!Le || Le.getDom() !== a) && (xt(), Le = r.init(a));
        try {
          Le.setOption(Bo(or.value), !0), ii();
        } catch {
          K.value = o(
            "charts.messages.render_failed",
            "Kon de grafiek niet renderen met de huidige instellingen."
          );
        }
      }
    }
    function Ko(e) {
      if (!i.manualOrdering) {
        if (je.value === e) {
          Ce.value = Ce.value === "asc" ? "desc" : "asc";
          return;
        }
        je.value = e, Ce.value = "asc";
      }
    }
    function Rn(e) {
      return !i.manualOrdering && e?.sortable !== !1;
    }
    function Uo(e) {
      if (Ve.value || e === "...")
        return;
      const t = Number(e);
      if (!Number.isFinite(t))
        return;
      const r = Math.round(t);
      r < 1 || r > Ut.value || r !== Q.value && (Q.value = r);
    }
    async function qo(e, t, r, a) {
      pr(r);
      const n = Jr(t, e);
      if (_e.value !== null && Xe.value !== null && !n && !await Zr("blur"))
        return;
      if (e.editable) {
        if (n)
          return;
        Lt(t, e);
        return;
      }
      if (!e.clickable)
        return;
      const u = jn(e) ? Ur(e, t) : t[e.key];
      v("on-cell-click", e.key, t[i.idKey], u), typeof i.cellStyle == "function" && i.cellStyle({
        row: t,
        col: e,
        value: t[e.key],
        rowId: t[i.idKey],
        rowIndex: r,
        colIndex: a
      });
    }
    function pr(e) {
      if (Z.value.length === 0) {
        Ke.value = 0;
        return;
      }
      const t = Math.max(0, Math.min(e, Z.value.length - 1));
      Ke.value = t;
    }
    function Ho() {
      pr(Ke.value);
    }
    function Wo(e) {
      return {
        item: e,
        filters: { ..._a.value },
        filterModes: { ...Sa.value },
        filterTypes: { ...Ma.value },
        global: be.value,
        selectionFilter: rr.value,
        selectedRowIds: [...i.checkedRows],
        sortField: je.value,
        sortOrder: Ce.value,
        page: Q.value,
        rowsPerPage: q.value
      };
    }
    function Go(e) {
      v("on-menu-item-click", Wo(e)), le.value = !1;
    }
    function Yo(e) {
      const t = [...i.checkedRows], r = t.indexOf(e);
      r >= 0 ? t.splice(r, 1) : t.push(e), v("update:checkedRows", t);
    }
    function Xo(e) {
      const t = Z.value.map((a) => a[i.idKey]).filter((a) => a != null);
      if (!e) {
        const a = i.checkedRows.filter(
          (n) => !t.includes(n)
        );
        v("update:checkedRows", a);
        return;
      }
      const r = Array.from(/* @__PURE__ */ new Set([...i.checkedRows, ...t]));
      v("update:checkedRows", r);
    }
    function $t(e) {
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
    function Br(e, t) {
      if (e?.editMultiple !== !0)
        return [];
      const r = e.editItemValue || "value", a = e.editItemTitle || "title", n = e.editField || e.key, u = t?.[n] !== void 0 ? t?.[n] : t?.[e.key], l = $t(u);
      return l.length === 0 ? [] : !Array.isArray(e.editItems) || e.editItems.length === 0 ? l.map((b) => String(b)) : l.map((b) => {
        const y = e.editItems.find(
          (w) => String(w?.[r]) === String(b)
        );
        return y && Object.prototype.hasOwnProperty.call(y, a) ? String(y[a] ?? b) : String(b);
      });
    }
    function En(e, t) {
      const r = e[t.key];
      if (t.editMultiple === !0) {
        const a = Br(t, e);
        if (a.length > 0)
          return a.join(", ");
        const n = e?.[t.editField || t.key] !== void 0 ? e?.[t.editField || t.key] : e?.[t.key];
        if ($t(n).length === 0)
          return "-";
      }
      if ((t.editInput === "select" || t.editInput === "autocomplete") && Array.isArray(t.editItems)) {
        const a = t.editItemValue || "value", n = t.editItemTitle || "title", u = t.editField || t.key, l = t.editItems.find(
          (b) => String(b?.[a]) === String(e[u])
        );
        if (l && Object.prototype.hasOwnProperty.call(l, n))
          return l[n] ?? "-";
      }
      if (r == null || r === "")
        return "-";
      if ((t.type === "date" || t.type === "datetime") && typeof t.dateDisplayFormat == "string" && t.dateDisplayFormat.trim() !== "") {
        const a = ao(r, t);
        return a ? io(
          a,
          t.dateDisplayFormat.trim(),
          Ba(t)
        ) : to(t);
      }
      return t.type === "boolean" ? si(t, r) : r;
    }
    function ct(e, t) {
      return !!(e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, t));
    }
    function Jo(e, t) {
      const r = t == null ? "" : String(t);
      return e?.editCustomTrim === !1 ? r : r.trim();
    }
    function li(e, t, r) {
      const a = e.editField || e.key, n = typeof e.editCustomField == "string" && e.editCustomField !== "" ? e.editCustomField : null, u = ct(e, "editCustomSentinelValue"), b = (typeof e.editCustomSentinelField == "string" && e.editCustomSentinelField !== "" ? e.editCustomSentinelField : null) || (u ? a : null), y = {
        primaryValue: r,
        extraUpdates: {}
      };
      if (t?.kind === "multiple")
        return y.primaryValue = $t(t.values), y;
      if (t?.kind === "item")
        return y.primaryValue = t.value, e.editSelectExtraUpdates && typeof e.editSelectExtraUpdates == "object" && t.item && typeof t.item == "object" && Object.entries(e.editSelectExtraUpdates).forEach(
          ([j, ee]) => {
            typeof j != "string" || j === "" || typeof ee != "string" || ee === "" || (y.extraUpdates[j] = t.item[ee]);
          }
        ), n && e.editCustomClearOnSelect !== !1 && (y.extraUpdates[n] = ""), b && b !== a && ct(e, "editCustomResetValueOnSelect") && (y.extraUpdates[b] = e.editCustomResetValueOnSelect), y;
      if (t?.kind !== "custom" || e.editAutocompleteAllowCustom !== !0)
        return y;
      const w = Jo(
        e,
        t.input ?? t.value ?? t.label ?? ""
      ), F = Math.max(0, Number(e.editCustomMinLength || 0));
      if (w === "" || w.length < F)
        return y;
      if (n && (y.extraUpdates[n] = w), b) {
        const j = u ? e.editCustomSentinelValue : null;
        return b === a ? y.primaryValue = j : y.extraUpdates[b] = j, y;
      }
      return n && n !== a ? (ct(e, "editCustomPrimaryValueOnCustom") ? y.primaryValue = e.editCustomPrimaryValueOnCustom : y.primaryValue = null, y) : (y.primaryValue = w, y);
    }
    function Qo(e, t) {
      const r = _e.value, a = e.editField || e.key, n = li(
        e,
        t,
        Se.value
      );
      Se.value = n.primaryValue, Mt.value = n.extraUpdates, r != null && (Xr(r, e), Un(r, a)), ae.value = "";
    }
    function oi(e, t) {
      const r = e.editField || e.key, a = L.value[r] ?? null, n = li(e, t, a);
      L.value = {
        ...L.value,
        [r]: n.primaryValue,
        ...n.extraUpdates
      }, Vt(e), xr(r), ae.value = "";
    }
    function Tn(e, t) {
      if (!t || typeof t != "object" || e?.editMultiple === !0)
        return null;
      if (e.editAutocompleteAllowCustom === !0) {
        const r = typeof e.editCustomField == "string" && e.editCustomField !== "" ? e.editCustomField : null;
        if (r && t[r] !== void 0 && t[r] !== null)
          return t[r];
      }
      return t[e.key] !== void 0 && t[e.key] !== null ? t[e.key] : null;
    }
    function Zo(e, t) {
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
      ) && ct(e, "editCustomFieldValidationRules") && (r[e.editCustomField] = e.editCustomFieldValidationRules);
      const a = typeof e.editCustomSentinelField == "string" && e.editCustomSentinelField !== "" ? e.editCustomSentinelField : null;
      return a && Object.prototype.hasOwnProperty.call(t, a) && ct(e, "editCustomSentinelValidationRules") && (r[a] = e.editCustomSentinelValidationRules), r;
    }
    function Kr(e, t) {
      !t || typeof t != "object" || Object.entries(t).forEach(([r, a]) => {
        e[r] = a;
      });
    }
    function si(e, t) {
      const r = Lr(t), a = e?.booleanLabels, n = a?.true ?? a?.yes ?? e?.booleanTrueLabel ?? o("common.yes", "Ja"), u = a?.false ?? a?.no ?? e?.booleanFalseLabel ?? o("common.no", "Nee");
      return r === !0 ? n : r === !1 ? u : t ?? o("common.dash", "-");
    }
    function jn(e) {
      return e?.type === "icon" ? !0 : e?.type !== "boolean" ? !1 : e?.booleanDisplay === "icon" || e?.booleanAsIcon === !0;
    }
    function Ur(e, t) {
      return typeof e?.iconValue == "function" ? e.iconValue(t) : t?.[e?.key];
    }
    function qr(e) {
      const t = Lr(e);
      return t !== null ? t : !!e;
    }
    function es(e, t) {
      const r = Ur(e, t);
      if (e?.iconMap && typeof e.iconMap == "object") {
        const a = r ?? "default";
        return e.iconMap[a] ?? e.iconMap.default ?? (qr(r) ? e?.iconTrue || "mdi-check-circle" : e?.iconFalse || "mdi-close-circle");
      }
      return qr(r) ? e?.iconTrue || "mdi-check-circle" : e?.iconFalse || "mdi-close-circle";
    }
    function ts(e, t) {
      const r = Ur(e, t);
      if (e?.iconColorMap && typeof e.iconColorMap == "object") {
        const a = r ?? "default";
        return e.iconColorMap[a] ?? e.iconColorMap.default ?? (qr(r) ? e?.iconTrueColor || "#16a34a" : e?.iconFalseColor || "#ef4444");
      }
      return qr(r) ? e?.iconTrueColor || "#16a34a" : e?.iconFalseColor || "#ef4444";
    }
    const ui = Object.freeze({
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
    }), di = Object.freeze({
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
    function wt(e) {
      return e == null ? !1 : String(e).trim() !== "";
    }
    function ci(e, t) {
      const r = En(t, e);
      return r === "-" && (t?.[e?.key] === null || t?.[e?.key] === void 0 || t?.[e?.key] === "") ? "" : r;
    }
    function rs(e, t) {
      return e?.colorKey && wt(t?.[e.colorKey]) ? t[e.colorKey] : wt(e?.chipDefaultColor) ? e.chipDefaultColor : "slate";
    }
    function ns(e, t) {
      return e?.type !== "chip" || !wt(ci(e, t)) ? !1 : e?.chipOnlyWhenColor ? e?.colorKey ? wt(t?.[e.colorKey]) : !1 : !0;
    }
    function fi(e) {
      const t = Number(e?.editMaxSelectionChips || 0);
      return !Number.isFinite(t) || t <= 0 ? 3 : Math.max(1, Math.floor(t));
    }
    function as(e, t) {
      const r = Br(e, t);
      return r.length === 0 ? [] : r.slice(0, fi(e));
    }
    function pi(e, t) {
      const r = Br(e, t);
      return r.length === 0 ? 0 : Math.max(0, r.length - fi(e));
    }
    function is(e, t) {
      return e?.editMultiple !== !0 ? !1 : Br(e, t).length > 0;
    }
    function $n(e) {
      return String(e?.chipVariant || "solid").toLowerCase() === "tonal" ? "tonal" : "solid";
    }
    function bi(e, t) {
      const r = wt(t) ? String(t).trim().toLowerCase() : "", a = $n(e) === "tonal" ? ui : di;
      return a[r] || a.slate;
    }
    function ls(e, t) {
      const r = rs(e, t), a = wt(r) ? String(r).trim().toLowerCase() : "", n = $n(e);
      return wt(a) && (Object.prototype.hasOwnProperty.call(ui, a) || Object.prototype.hasOwnProperty.call(di, a)) ? bi(e, r) : wt(r) ? n === "tonal" ? {
        borderColor: String(r),
        backgroundColor: "transparent",
        color: String(r)
      } : {
        backgroundColor: String(r),
        borderColor: "transparent",
        color: "#ffffff"
      } : bi(e, "slate");
    }
    function os(e, t) {
      return [
        "inline-flex max-w-full items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium leading-5",
        $n(e) === "solid" ? "shadow-sm" : "",
        e?.clickable ? "transition-colors group-hover:brightness-95" : ""
      ];
    }
    function kt(e) {
      const t = Number(He.value?.[e]), r = sr(e);
      if (Number.isFinite(t) && t > 0)
        return Math.max(r, Math.round(t));
      const a = Ea(e);
      return jr(a || { key: e });
    }
    function Hr(e) {
      return e === "right" || e === "center" ? e : "left";
    }
    function ss(e) {
      const t = Hr(e?.align);
      return t === "center" ? "justify-center" : t === "right" ? "justify-end" : "justify-start";
    }
    function us(e, t) {
      return t && Hr(e?.align) === "left" ? "pl-9" : "";
    }
    function ds(e) {
      const t = String(e?.key ?? "").toLowerCase(), r = String(e?.label ?? "").toLowerCase(), a = String(i.idKey ?? "").toLowerCase();
      return t ? t === a || t === "id" || t.endsWith("_id") ? !0 : r === "id" || r.endsWith(" id") : !1;
    }
    function cs(e, t) {
      if (ds(e))
        return !0;
      const r = String(e?.key ?? "").toLowerCase(), a = String(e?.label ?? "").toLowerCase(), n = t?.[e?.key], u = t?.[i.idKey];
      return r.includes("id") || a.includes("id") || n != null && u !== void 0 && u !== null && String(n) === String(u) ? !0 : r.includes("nummer") || r.includes("number") || r.endsWith("_nr") || r.includes("code") ? typeof n == "string" || typeof n == "number" || typeof n == "bigint" : !1;
    }
    function fs(e) {
      return !e?.clickable && e?.editable !== !0 ? "" : "rw-cell-clickable";
    }
    function ps(e, t) {
      return e?.clickable ? cs(e, t) ? "rw-id-hover inline-flex max-w-full items-center rounded-full px-2 py-0.5 font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300" : "truncate text-blue-700 hover:underline" : e?.editable === !0 ? "rw-cell-editable truncate" : "truncate";
    }
    function bs(e) {
      const t = Z.value.length;
      if (t <= 0)
        return "top-0";
      const r = Math.max(0, t - 3);
      return e >= r ? "bottom-0" : "top-0";
    }
    function vs() {
      let e = 0;
      return i.checkboxColumn && (e += Sr), e;
    }
    function vi(e) {
      let t = vs();
      for (let r = 0; r < e; r += 1) {
        const a = U.value[r];
        a && (t += kt(a.key));
      }
      return t;
    }
    function Wr(e, t = !1, r = null) {
      return Fe.value ? {
        position: "sticky",
        left: "0px",
        width: `${Sr}px`,
        minWidth: `${Sr}px`,
        maxWidth: `${Sr}px`,
        zIndex: t ? Me.stickyUtilityHeader : Me.stickyUtilityBody,
        backgroundColor: t ? "rgb(248 250 252)" : r || fl
      } : null;
    }
    function gs(e, t) {
      const r = kt(e.key), a = {
        width: `${r}px`,
        minWidth: `${r}px`,
        maxWidth: `${r}px`,
        textAlign: Hr(e.align)
      };
      return !Fe.value || t >= ye.value ? a : {
        ...a,
        position: "sticky",
        left: `${vi(t)}px`,
        zIndex: Me.stickyDataHeader,
        backgroundColor: "rgb(248 250 252)"
      };
    }
    function gi(e, t, r = null) {
      const a = kt(e.key), n = {
        width: `${a}px`,
        minWidth: `${a}px`,
        maxWidth: `${a}px`,
        textAlign: Hr(e.align)
      };
      return !Fe.value || t >= ye.value ? n : {
        ...n,
        position: "sticky",
        left: `${vi(t)}px`,
        zIndex: Me.stickyDataBody,
        backgroundColor: r || fl
      };
    }
    function ys(e, t, r, a) {
      const n = gi(t, a);
      if (typeof i.cellStyle != "function")
        return n;
      const u = i.cellStyle({
        row: e,
        col: t,
        value: e[t.key],
        rowId: e[i.idKey],
        rowIndex: r,
        colIndex: a
      });
      return !u || typeof u != "object" ? n : {
        ...n,
        ...u
      };
    }
    function hs(e, t, r, a) {
      const n = ys(e, t, r, a);
      return Jr(e, t) ? Fe.value && a < ye.value ? {
        ...n,
        zIndex: Me.stickyDataBody + 2
      } : {
        ...n
      } : Xn(e, a) && Yn(e[i.idKey]) ? {
        ...n,
        zIndex: Me.rowMenuOverlay + 1
      } : n;
    }
    function yi(e, t) {
      return gi(e, t, ba);
    }
    function Gr(e) {
      return e < ye.value ? "mdi-lock" : e === ye.value ? "mdi-lock-open-variant" : "";
    }
    function ms(e) {
      if (!Fe.value)
        return;
      const t = Math.max(0, U.value.length), r = e === ye.value ? ye.value + 1 : e;
      ye.value = Math.min(Math.max(r, 0), t), tn(), xn(!0);
    }
    function hi(e) {
      if (!ht)
        return;
      const t = e.clientX - ht.startX, r = Math.max(
        ht.minWidth,
        Math.round(ht.startWidth + t)
      );
      He.value = {
        ...He.value,
        [ht.key]: r
      };
    }
    function xs(e, t) {
      ht = {
        key: t,
        startX: e.clientX,
        startWidth: kt(t),
        minWidth: sr(t)
      }, window.addEventListener("mousemove", hi), window.addEventListener("mouseup", zn);
    }
    function zn() {
      ht && (window.removeEventListener("mousemove", hi), window.removeEventListener("mouseup", zn), ht = null, Yi());
    }
    function ws(e, t, r, a) {
      return typeof i.cellClass != "function" ? null : i.cellClass({
        row: e,
        col: t,
        value: e[t.key],
        rowId: e[i.idKey],
        rowIndex: r,
        colIndex: a
      });
    }
    function ks(e) {
      const t = H.value.find((r) => r.key === e);
      t && (t.selected = !t.selected);
    }
    function mi(e, t) {
      const r = H.value.findIndex(
        (l) => l.key === e
      );
      if (r < 0)
        return;
      const a = r + t;
      if (a < 0 || a >= H.value.length)
        return;
      const n = [...H.value], [u] = n.splice(r, 1);
      n.splice(a, 0, u), H.value = n;
    }
    function Cs(e, t) {
      if (!e || !t || e === t)
        return;
      const r = H.value.findIndex(
        (l) => l.key === e
      ), a = H.value.findIndex(
        (l) => l.key === t
      );
      if (r < 0 || a < 0 || r === a)
        return;
      const n = [...H.value], [u] = n.splice(r, 1);
      n.splice(a, 0, u), H.value = n;
    }
    function _s(e, t) {
      if (vt.value = e, t?.dataTransfer) {
        t.dataTransfer.effectAllowed = "move";
        try {
          t.dataTransfer.setData("text/plain", String(e)), Ja(t);
        } catch {
          return;
        }
      }
    }
    function Ss(e, t) {
      vt.value && (t.preventDefault(), nr.value = e, t?.dataTransfer && (t.dataTransfer.dropEffect = "move"));
    }
    function Ms(e, t) {
      t.preventDefault();
      const r = t?.dataTransfer?.getData?.("text/plain") || null, a = vt.value || r;
      Cs(a, e), Vn();
    }
    function Vn() {
      vt.value = null, nr.value = null;
    }
    function Fs(e) {
      se.value = se.value === e ? null : e, U.value.find((r) => r.key === e) && (Ee.value[e] || (Ee.value[e] = kn(
        Qe.value[e]
      )));
    }
    function Os(e) {
      return Object.prototype.hasOwnProperty.call(
        mt.value,
        e
      );
    }
    function Is(e) {
      delete ie.value[e], delete ve.value[e], delete Ee.value[e], se.value = null;
    }
    function As(e, t) {
      const r = e.key;
      if (Ee.value[r] = t, qt(t)) {
        Da(r) && Yr(r, ""), ve.value[r] = ja(
          e,
          ve.value[r]
        );
        return;
      }
      if (La(r) && Ln(r, e.editMultiple === !0 ? [] : ""), t === "tussen") {
        const a = ie.value[r];
        (!a || typeof a != "object") && (ie.value[r] = { from: "", to: "" });
        return;
      }
      typeof ie.value[r] == "object" && (ie.value[r] = "");
    }
    function Yr(e, t) {
      ie.value[e] = t;
    }
    function Ln(e, t) {
      ve.value[e] = t;
    }
    function Rs(e, t) {
      if (!(t instanceof HTMLInputElement)) {
        ar.delete(e);
        return;
      }
      ar.set(e, t);
    }
    function xi() {
      const e = At.value;
      if (!e || se.value !== e.columnKey)
        return;
      const t = ar.get(e.columnKey);
      if (!(t instanceof HTMLInputElement))
        return;
      const r = document.activeElement;
      if (r && r !== document.body && r !== t) {
        At.value = null;
        return;
      }
      if (t.focus({ preventScroll: !0 }), Number.isInteger(e.selectionStart) && Number.isInteger(e.selectionEnd))
        try {
          t.setSelectionRange(e.selectionStart, e.selectionEnd);
        } catch {
        }
      At.value = null;
    }
    function Es(e, t) {
      const r = t?.target, a = r?.value ?? "";
      Yr(e, a), La(e) && Ln(e, ""), r instanceof HTMLInputElement && (At.value = {
        columnKey: e,
        selectionStart: r.selectionStart,
        selectionEnd: r.selectionEnd
      }, i.managed || re(() => {
        xi();
      }));
    }
    function wi(e, t) {
      const r = zr(e);
      Ln(
        e,
        ja(r, t)
      ), Da(e) && Yr(e, "");
    }
    function Ts(e, t) {
      return e instanceof HTMLSelectElement ? t?.editMultiple === !0 ? Array.from(e.selectedOptions).map((r) => r.value) : e.value : t?.editMultiple === !0 ? [] : "";
    }
    function ki(e, t, r) {
      const a = ie.value[e];
      (!a || typeof a != "object") && (ie.value[e] = { from: "", to: "" }), ie.value[e] = {
        ...ie.value[e],
        [t]: r
      };
    }
    function js() {
      ie.value = {}, ve.value = {}, Ee.value = {}, se.value = null, wn();
    }
    function $s(e, t) {
      return t === "tussen" ? "date" : e === "number" ? "number" : e === "date" || e === "datetime" ? "date" : "text";
    }
    function Ci() {
      Q.value = 1, me.value = q.value, Oe.value = [];
    }
    function zs(e) {
      const [t] = e;
      if (!(!t?.isIntersecting || Ie.value)) {
        if (ir.value) {
          if (Q.value >= Ut.value)
            return;
          const r = Q.value + 1;
          if (i.managed) {
            Ht({ append: !0, pageOverride: r });
            return;
          }
          Q.value = r;
          return;
        }
        me.value >= Kt.value.length || (me.value = Math.min(
          me.value + q.value,
          Kt.value.length
        ));
      }
    }
    function Dn() {
      yt && (yt.disconnect(), yt = null), !(!Ve.value || !ce.value) && (yt = new IntersectionObserver(zs, {
        root: Te.value,
        rootMargin: "200px",
        threshold: 0
      }), yt.observe(ce.value));
    }
    function zt(e = null) {
      if (!i.inlineCreate)
        return;
      const t = e == null;
      t && !Ve.value && (Q.value = Ut.value), P.value = e, $e.value = !0, Ye.value = null, ae.value = "", mr(), t && re(() => {
        Vi();
      });
    }
    function Vs(e) {
      return !$e.value || P.value === null || P.value === void 0 ? !1 : e?.[i.idKey] === P.value;
    }
    function Wt() {
      if (!Ve.value)
        return;
      const e = z.value.length;
      me.value = Math.max(
        q.value,
        Math.min(Math.max(me.value, e), e)
      );
    }
    function br(e) {
      if (!e || typeof e != "object")
        return;
      if (P.value === null || P.value === void 0) {
        z.value = [...z.value, e], Wt();
        return;
      }
      const t = z.value.findIndex(
        (a) => a?.[i.idKey] === P.value
      );
      if (t < 0) {
        z.value = [...z.value, e];
        return;
      }
      const r = [...z.value];
      r.splice(t, 0, e), z.value = r, Wt();
    }
    function Ls(e, t) {
      if (e == null || !t || typeof t != "object")
        return;
      const r = z.value.findIndex(
        (n) => n?.[i.idKey] === e
      );
      if (r < 0) {
        br(t);
        return;
      }
      const a = [...z.value];
      a[r] = {
        ...a[r],
        ...t
      }, z.value = a, Wt();
    }
    function Ds(e) {
      e != null && (z.value = z.value.filter(
        (t) => t?.[i.idKey] !== e
      ), Wt());
    }
    function Ct() {
      $e.value = !1, mr();
    }
    function Nn() {
      const e = z.value.map((t) => Number(t?.[i.idKey])).filter((t) => Number.isFinite(t));
      return e.length > 0 ? Math.max(...e) + 1 : Date.now();
    }
    function Ns() {
      const e = i.manualOrderField;
      if (!e)
        return null;
      const t = z.value.map((r) => Number(r?.[e])).filter((r) => Number.isFinite(r));
      return t.length > 0 ? Math.max(...t) + 1e3 : 1e3;
    }
    function _i(e, t, r) {
      const a = /* @__PURE__ */ new Set([
        "validationType",
        "manualOrdering",
        "manualOrderField",
        "insertAboveId"
      ]), l = {
        ...Object.entries(t || {}).reduce(
          (y, [w, F]) => (a.has(w) || (y[w] = F), y),
          {}
        ),
        ...e && typeof e == "object" ? e : {}
      }, b = r?.[i.idKey] ?? r?.id;
      if ((l[i.idKey] === void 0 || l[i.idKey] === null) && b !== void 0 && b !== null && (l[i.idKey] = b), (l[i.idKey] === void 0 || l[i.idKey] === null) && (l[i.idKey] = Nn()), i.manualOrdering && (P.value === null || P.value === void 0)) {
        const y = i.manualOrderField;
        if (y && (l[y] === void 0 || l[y] === null)) {
          const w = Ns();
          w !== null && (l[y] = w);
        }
      }
      return (!Object.prototype.hasOwnProperty.call(l, i.idKey) || l[i.idKey] === void 0 || l[i.idKey] === null) && (l[i.idKey] = Nn()), l;
    }
    function Ps(e) {
      return Array.isArray(e) ? e.length > 0 ? String(e[0]) : "" : e == null ? "" : String(e);
    }
    function Si(e) {
      const t = e?.response?.data ?? {}, r = t?.errors, a = {};
      return r && typeof r == "object" && Object.entries(r).forEach(([n, u]) => {
        const l = String(n || "").trim();
        if (l === "")
          return;
        const b = Ps(u);
        b !== "" && (a[l] = b);
      }), {
        status: Number(e?.response?.status || 0),
        message: typeof t?.message == "string" ? t.message : "",
        errors: a
      };
    }
    function Bs(e) {
      return e ? typeof e == "string" ? e.split("|").map((r) => r.trim()).includes("required") : Array.isArray(e) ? e.some((t) => typeof t == "string" ? t.split(":")[0] === "required" : !1) : !1 : !1;
    }
    function vr(e) {
      return !e || typeof e != "object" ? !1 : e.required === !0 ? !0 : e.required === !1 ? !1 : Bs(e.validationRules);
    }
    function gr(e) {
      return e == null ? !0 : typeof e == "string" ? e.trim() === "" : Array.isArray(e) ? e.length === 0 : !1;
    }
    function yr(e) {
      if (typeof e?.requiredHighlightColor == "string") {
        const t = e.requiredHighlightColor.trim();
        if (t !== "")
          return t;
      }
      return "rgba(59, 130, 246, 0.1)";
    }
    function ft() {
      ae.value = "";
    }
    function Pn() {
      const e = String(i.validationMode || "both").trim().toLowerCase();
      return e === "client" || e === "server" || e === "both" ? e : "both";
    }
    function Mi(e, t = []) {
      const r = e == null || e === "" ? t : e, n = (Array.isArray(r) ? r : [r]).map(
        (u) => String(u || "").trim().toLowerCase()
      ).filter((u) => u !== "");
      return n.length > 0 ? n : [...t];
    }
    function Ks(e) {
      return Mi(
        e?.clientValidationOn,
        Mi(
          i.clientValidationOn,
          un
        )
      );
    }
    function Us(e, t) {
      if (Pn() === "server")
        return !1;
      const a = String(t || "save").toLowerCase();
      return Ks(e).includes(a) ? !!(typeof i.validationAdapter == "function" || typeof e?.clientValidate == "function" || e?.validationRules || e?.required === !0) : !1;
    }
    function qs(e, t) {
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
    function Fi(e) {
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
    function Oi({
      column: e,
      field: t,
      value: r,
      trigger: a,
      contextMode: n,
      row: u,
      draft: l
    }) {
      const b = String(a || "save").toLowerCase();
      if (!Us(e, b))
        return null;
      const y = {
        value: r,
        field: t,
        column: e,
        row: u,
        draft: l,
        trigger: b,
        mode: n,
        rules: qs(e, t)
      };
      if (typeof i.validationAdapter == "function") {
        const F = i.validationAdapter(y), j = Fi(F);
        if (j)
          return j;
      }
      if (typeof e?.clientValidate == "function") {
        const F = e.clientValidate(y), j = Fi(F);
        if (j)
          return j;
      }
      const w = y.rules;
      return w ? ed(r, w, {
        fieldLabel: String(
          e?.label || t || o("validation.this_field", "Dit veld")
        )
      }) : null;
    }
    function Vt(e) {
      hr(e, !0).forEach((r) => {
        xr(r);
      }), xr(e?.key);
    }
    function Xr(e, t) {
      hr(t, !0).forEach((a) => {
        Un(e, a);
      }), Un(e, t?.key);
    }
    function hr(e, t = !1) {
      const r = String(e?.editField || e?.key || ""), a = [];
      if (r !== "" && a.push(r), !t)
        return a;
      const n = typeof e?.editCustomField == "string" ? e.editCustomField : "";
      n !== "" && !a.includes(n) && a.push(n);
      const u = typeof e?.editCustomSentinelField == "string" ? e.editCustomSentinelField : "";
      return u !== "" && !a.includes(u) && a.push(u), e?.editExtraValidationRules && typeof e.editExtraValidationRules == "object" && Object.keys(e.editExtraValidationRules).forEach((l) => {
        const b = String(l || "").trim();
        b !== "" && !a.includes(b) && a.push(b);
      }), a;
    }
    function Ii(e, t, r = !1) {
      const a = hr(e, r), n = {};
      return a.forEach((u) => {
        const l = L.value[u], b = Oi({
          column: e,
          field: u,
          value: l,
          trigger: t,
          contextMode: "create",
          row: null,
          draft: L.value
        });
        b && (n[u] = b);
      }), n;
    }
    function Hs(e, t, r, a = !1) {
      const n = String(e?.editField || e?.key || ""), l = (a ? hr(e, !0) : [n]).filter((w) => w !== ""), b = {
        [n]: Se.value,
        ...Mt.value
      }, y = {};
      return l.forEach((w) => {
        const F = Oi({
          column: e,
          field: w,
          value: b[w],
          trigger: r,
          contextMode: "edit",
          row: t,
          draft: b
        });
        F && (y[w] = F);
      }), y;
    }
    function Ai(e, t, r = !1) {
      const a = Ii(e, t, r);
      return hr(e, r).forEach((u) => {
        xr(u);
      }), xr(e.key), Object.keys(a).length === 0 ? !0 : (Bn({
        ...xe.value,
        ...a
      }), ae.value = o(
        "validation.not_saved_check_fields",
        "Niet bewaard. Controleer de rood gemarkeerde velden."
      ), !1);
    }
    function mr() {
      xe.value = {};
    }
    function xr(e) {
      const t = String(e || "");
      if (t === "" || !xe.value[t])
        return;
      const r = { ...xe.value };
      delete r[t], xe.value = r;
    }
    function Bn(e) {
      xe.value = e && typeof e == "object" ? e : {};
    }
    function ue(e) {
      const t = String(e?.editField || e?.key || ""), r = typeof e?.editCustomField == "string" ? e.editCustomField : "", a = typeof e?.editCustomSentinelField == "string" ? e.editCustomSentinelField : "";
      return xe.value[t] || xe.value[String(e?.key || "")] || (r ? xe.value[r] : "") || (a ? xe.value[a] : "") || "";
    }
    function Kn(e) {
      const t = String(e ?? "");
      if (t === "" || !N.value[t])
        return;
      const r = { ...N.value };
      delete r[t], N.value = r;
    }
    function Ri(e, t) {
      const r = String(e ?? "");
      r !== "" && (N.value = {
        ...N.value,
        [r]: t && typeof t == "object" ? t : {}
      });
    }
    function Un(e, t) {
      const r = String(e ?? ""), a = String(t || "");
      if (r === "" || a === "")
        return;
      const n = N.value[r];
      if (!n || !n[a])
        return;
      const u = { ...n };
      delete u[a], N.value = {
        ...N.value,
        [r]: u
      };
    }
    function tt(e, t) {
      const r = String(e ?? "");
      if (r === "")
        return "";
      const a = N.value[r] || {}, n = String(t?.editField || t?.key || ""), u = typeof t?.editCustomField == "string" ? t.editCustomField : "", l = typeof t?.editCustomSentinelField == "string" ? t.editCustomSentinelField : "";
      return a[n] || a[String(t?.key || "")] || (u ? a[u] : "") || (l ? a[l] : "") || "";
    }
    function Ei(e) {
      const t = String(e?.editField || e?.key || "");
      if (!vr(e) || e?.requiredHighlight === !1 || ue(e))
        return null;
      const r = L.value[t];
      return gr(r) ? {
        backgroundColor: yr(e)
      } : null;
    }
    function Ws(e, t) {
      return !vr(t) || t?.requiredHighlight === !1 || tt(e?.[i.idKey], t) || !gr(Se.value) ? null : {
        backgroundColor: yr(t)
      };
    }
    async function Ti(e = "save") {
      if (!i.inlineCreate || Be.value)
        return !1;
      const t = Gs(), r = {
        ...L.value,
        validationType: "model"
      };
      ae.value = "", mr();
      const a = {};
      if (kr().forEach((l) => {
        const b = Ii(
          l,
          e,
          e === "save" || e === "tab" || e === "blur"
        );
        Object.entries(b).forEach(([y, w]) => {
          a[y] || (a[y] = w);
        });
      }), Object.keys(a).length > 0)
        return Bn(a), ae.value = o(
          "validation.not_saved_check_fields",
          "Niet bewaard. Controleer de rood gemarkeerde velden."
        ), !1;
      if (Pn() === "client") {
        const l = {
          ...L.value,
          [i.idKey]: Nn()
        };
        return br(l), Ct(), !0;
      }
      if (i.manualOrdering && (r.manualOrdering = !0, r.manualOrderField = i.manualOrderField), P.value !== null && P.value !== void 0 && (r.insertAboveId = P.value), !t) {
        const l = {
          ...L.value,
          [i.idKey]: Date.now()
        };
        return br(l), Ct(), !0;
      }
      let u = null;
      if (!i.managed) {
        const l = _i({}, r, {});
        br(l), u = l?.[i.idKey] ?? null;
      }
      Be.value = !0;
      try {
        const y = (await rt().post(t, r))?.data ?? {}, w = _i(
          y?.data ?? y,
          r,
          y
        );
        return i.managed ? await Ht({
          append: !1,
          pageOverride: Q.value
        }) : w && (u != null ? Ls(u, w) : br(w), (P.value === null || P.value === void 0) && (Q.value = Ut.value)), Ct(), !0;
      } catch (l) {
        u != null && Ds(u);
        const b = Si(l);
        return Object.keys(b.errors).length > 0 ? (Bn(b.errors), ae.value = o(
          "validation.not_saved_check_fields",
          "Niet bewaard. Controleer de rood gemarkeerde velden."
        )) : b.message ? ae.value = b.message : ae.value = o(
          "validation.not_saved_unexpected",
          "Niet bewaard door een onverwachte fout."
        ), !1;
      } finally {
        Be.value = !1;
      }
    }
    function Gs() {
      return typeof i.inlineCreateRoute == "function" ? i.inlineCreateRoute() : typeof i.inlineCreateRoute == "string" && i.inlineCreateRoute ? i.inlineCreateRoute : typeof i.dataSource?.path == "string" && i.dataSource.path ? `${i.dataSource.path.replace(/\/$/, "")}/inline-create` : null;
    }
    function Lt(e, t) {
      if (!t?.editable)
        return;
      const r = e?.[i.idKey];
      r != null && ($e.value || (_e.value = r, Xe.value = t.key, Se.value = t.editMultiple === !0 ? $t(e[t.editField || t.key]) : e[t.editField || t.key] ?? "", Mt.value = {}, ae.value = "", Kn(r), iu(r, t.key)));
    }
    function Dt(e, t) {
      return e == null || t === null || t === void 0 ? !1 : String(e) === String(t);
    }
    function Jr(e, t) {
      return Dt(_e.value, e?.[i.idKey]) && Xe.value === t?.key;
    }
    function Qr(e, t) {
      return Dt(_e.value, e) && Xe.value === t;
    }
    function Gt() {
      _e.value !== null && _e.value !== void 0 && Kn(_e.value), _e.value = null, Xe.value = null, Se.value = "", Mt.value = {};
    }
    async function Zr(e = "save") {
      if (_e.value === null || Xe.value === null)
        return !1;
      if (Je.value)
        return Je.value;
      const t = _e.value, r = Xe.value, a = Se.value, n = { ...Mt.value }, u = (async () => {
        const l = lu(t), b = U.value.find(
          (We) => We.key === r
        );
        if (!l || !b)
          return Qr(t, r) && Gt(), !1;
        const y = b.editField || b.key, w = a, F = { ...n }, j = Ys(t);
        ae.value = "", Kn(t);
        const ee = Hs(
          b,
          l,
          e,
          e === "save"
        );
        if (Object.keys(ee).length > 0)
          return Ri(t, ee), ae.value = o(
            "validation.not_saved_check_fields",
            "Niet bewaard. Controleer de rood gemarkeerde velden."
          ), !1;
        if (Pn() === "client" || !j)
          return qn(l, b, w), Kr(l, F), Qr(t, r) && Gt(), !0;
        Be.value = !0;
        try {
          const We = rt(), nt = {
            field: y,
            value: w,
            validationType: b.validationType || "model"
          };
          if (Object.keys(F).length > 0) {
            nt.extraUpdates = Object.entries(F).map(
              ([pt, Zt]) => ({
                field: pt,
                value: Zt
              })
            );
            const De = Zo(
              b,
              F
            );
            Object.keys(De).length > 0 && (nt.extraValidationRules = De);
          }
          nt.validationType === "client" && b.validationRules && (nt.validationRules = b.validationRules);
          const Nt = await We.patch(j, nt), we = Nt?.data?.value !== void 0 ? Nt.data.value : w, Re = Nt?.data?.updated && typeof Nt.data.updated == "object" ? Nt.data.updated : null;
          return qn(l, b, we), Re ? Kr(l, Re) : Kr(l, F), Qr(t, r) && Gt(), !0;
        } catch (We) {
          const nt = Si(We);
          return Object.keys(nt.errors).length > 0 ? (Ri(t, nt.errors), ae.value = o(
            "validation.not_saved_check_fields",
            "Niet bewaard. Controleer de rood gemarkeerde velden."
          )) : nt.message ? ae.value = nt.message : ae.value = o(
            "validation.not_saved_unexpected",
            "Niet bewaard door een onverwachte fout."
          ), !1;
        } finally {
          Be.value = !1;
        }
      })();
      Je.value = u;
      try {
        return await u;
      } finally {
        Je.value === u && (Je.value = null);
      }
    }
    function qn(e, t, r) {
      const a = t.editField || t.key;
      if (e[a] = r, a !== t.key) {
        const n = t.editDisplayFields;
        if (n && typeof n == "object") {
          const u = t.editItemValue || "value", l = Array.isArray(t.editItems) ? t.editItems.find(
            (b) => String(b?.[u]) === String(r)
          ) : null;
          l && Object.entries(n).forEach(([b, y]) => {
            e[b] = l[y];
          });
        }
      }
      e[t.key] = e[t.key] ?? r;
    }
    function Ys(e) {
      return typeof i.inlineUpdateRoute == "function" ? i.inlineUpdateRoute(e) : typeof i.inlineUpdateRoute == "string" && i.inlineUpdateRoute ? i.inlineUpdateRoute.includes(":id") ? i.inlineUpdateRoute.replace(":id", String(e)) : i.inlineUpdateRoute.includes("{id}") ? i.inlineUpdateRoute.replace("{id}", String(e)) : `${i.inlineUpdateRoute.replace(/\/$/, "")}/${e}/inline` : typeof i.dataSource?.path == "string" && i.dataSource.path ? `${i.dataSource.path.replace(/\/$/, "")}/${e}/inline` : null;
    }
    function Xs(e) {
      return typeof i.inlineDeleteRoute == "function" ? i.inlineDeleteRoute(e) : typeof i.inlineDeleteRoute == "string" && i.inlineDeleteRoute ? i.inlineDeleteRoute.includes(":id") ? i.inlineDeleteRoute.replace(":id", String(e)) : i.inlineDeleteRoute.includes("{id}") ? i.inlineDeleteRoute.replace("{id}", String(e)) : `${i.inlineDeleteRoute.replace(/\/$/, "")}/${e}` : typeof i.dataSource?.path == "string" && i.dataSource.path ? `${i.dataSource.path.replace(/\/$/, "")}/${e}` : null;
    }
    async function Js(e) {
      const t = e?.[i.idKey];
      if (t == null)
        return;
      let r = {};
      if (typeof i.beforeInlineDelete == "function") {
        const n = await i.beforeInlineDelete({ id: t, row: e });
        if (n === !1)
          return;
        if (n && typeof n == "object") {
          if (n.proceed === !1)
            return;
          n.payload && typeof n.payload == "object" && (r = n.payload);
        }
      }
      const a = Xs(t);
      if (!a) {
        z.value = z.value.filter(
          (n) => n[i.idKey] !== t
        ), Wt();
        return;
      }
      Be.value = !0;
      try {
        await rt().delete(a, { data: r }), z.value = z.value.filter(
          (u) => u[i.idKey] !== t
        ), Wt(), Oe.value = Oe.value.filter(
          (u) => u[i.idKey] !== t
        );
      } finally {
        Be.value = !1;
      }
    }
    function Qs(e) {
      if (typeof i.rowMenuItems == "function") {
        const r = i.rowMenuItems(e);
        if (Array.isArray(r))
          return r;
      }
      if (Array.isArray(i.rowMenuItems) && i.rowMenuItems.length)
        return i.rowMenuItems;
      const t = [
        {
          key: "edit",
          label: o("actions.edit", "Bewerken"),
          icon: "mdi-pencil",
          disabled: Tt.value.length === 0
        }
      ];
      return i.inlineCreate && i.manualOrdering && t.push({
        key: "insertAbove",
        label: o("actions.insert_above", "Invoegen boven"),
        icon: "mdi-arrow-up-bold-box-outline"
      }), i.inlineCreate && t.push({
        key: "insert",
        label: o("actions.new_row", "Nieuwe rij"),
        icon: "mdi-plus-box-outline"
      }), t.push({
        key: "delete",
        label: o("actions.delete", "Verwijderen"),
        icon: "mdi-delete-outline"
      }), t;
    }
    async function Zs(e, t) {
      if (v("on-row-menu-item-click", { item: e, row: t }), Ye.value = null, !(!e || e.disabled)) {
        if (e.key === "edit") {
          const r = Tt.value[0];
          r && Lt(t, r);
          return;
        }
        if (e.key === "insertAbove") {
          zt(t[i.idKey]);
          return;
        }
        if (e.key === "insert") {
          zt(null);
          return;
        }
        e.key === "delete" && await Js(t);
      }
    }
    function Yt(e) {
      e?.editable && Ai(e, "blur", !0);
    }
    async function Hn(e, t) {
      !t?.editable || !Jr(e, t) || await Zr("blur");
    }
    async function Wn(e) {
      if (!e.defaultPrevented) {
        if (e.key === "Enter") {
          e.preventDefault(), await Zr();
          return;
        }
        if (e.key === "Escape") {
          e.preventDefault(), Gt();
          return;
        }
        if (e.key === "Tab") {
          e.preventDefault(), await wr(e.shiftKey ? -1 : 1, !1, "tab");
          return;
        }
        if (e.key === "ArrowLeft") {
          e.preventDefault(), await wr(-1, !1);
          return;
        }
        if (e.key === "ArrowRight") {
          e.preventDefault(), await wr(1, !1);
          return;
        }
        if (e.key === "ArrowUp") {
          e.preventDefault(), await wr(-1, !0);
          return;
        }
        e.key === "ArrowDown" && (e.preventDefault(), await wr(1, !0));
      }
    }
    function eu(e, t, r) {
      const a = ru(), n = a.findIndex(
        (l) => Dt(l.rowId, t) && l.columnKey === r
      );
      if (n < 0)
        return { target: null, boundary: !1 };
      const u = n + e;
      return u < 0 || u >= a.length ? { target: null, boundary: !0 } : { target: a[u], boundary: !1 };
    }
    function tu(e, t, r) {
      if (!r)
        return null;
      const a = Z.value.findIndex(
        (b) => Dt(b[i.idKey], t)
      );
      if (a < 0)
        return null;
      const n = a + e;
      if (n < 0 || n >= Z.value.length)
        return null;
      const u = Z.value[n], l = U.value.find(
        (b) => b.key === r
      );
      return !u || !l || !l.editable ? null : {
        row: u,
        column: l
      };
    }
    async function wr(e, t = !1, r = "save") {
      if (_e.value === null || Xe.value === null)
        return;
      const a = _e.value, n = Xe.value, u = t ? tu(e, a, n) : null, l = t ? { target: null, boundary: !1 } : eu(e, a, n);
      if (await Zr(r)) {
        if (t) {
          if (u) {
            Lt(u.row, u.column);
            return;
          }
          if (e > 0 && i.inlineCreate) {
            const y = U.value.find(
              (w) => w.key === n && w.editable
            );
            if (!y)
              return;
            zt(null), await re(), Cr(y);
          }
          return;
        }
        if (!l.target) {
          l.boundary && e > 0 && i.inlineCreate && zt(null);
          return;
        }
        Lt(l.target.row, l.target.column);
      }
    }
    async function Xt(e) {
      if (!e.defaultPrevented) {
        if (e.key === "Enter") {
          e.preventDefault(), await Ti();
          return;
        }
        if (e.key === "Escape") {
          e.preventDefault(), Ct();
          return;
        }
        if (e.key === "Tab") {
          e.preventDefault();
          const t = kr(), r = document.activeElement?.getAttribute("data-create-field"), a = t.find(
            (u) => (u.editField || u.key) === r
          ) ?? null;
          if (a && !Ai(a, "tab", !0))
            return;
          if (e.shiftKey) {
            if (t.findIndex(
              (l) => (l.editField || l.key) === r
            ) <= 0) {
              const l = au();
              await $i(l);
              return;
            }
            zi(-1);
            return;
          }
          if (t.length === 0)
            return;
          const n = t.findIndex(
            (u) => (u.editField || u.key) === r
          );
          if (n < 0) {
            Cr(t[0]);
            return;
          }
          if (n >= t.length - 1) {
            const u = P.value === null || P.value === void 0;
            await Ti("tab") && u && (await re(), zt(null));
            return;
          }
          zi(1);
          return;
        }
        if (e.key === "ArrowUp" || e.key === "ArrowDown") {
          e.preventDefault();
          const t = document.activeElement?.getAttribute("data-create-field");
          if (!t)
            return;
          const r = nu(
            e.key === "ArrowUp" ? -1 : 1,
            t
          );
          await $i(r);
        }
      }
    }
    function ru() {
      const e = [];
      return Z.value.forEach((t) => {
        U.value.forEach((r) => {
          r.editable && e.push({
            rowId: t[i.idKey],
            columnKey: r.key,
            row: t,
            column: r
          });
        });
      }), e;
    }
    function kr() {
      return U.value.filter((e) => e.editable);
    }
    function ji() {
      if (!$e.value)
        return null;
      if (P.value === null || P.value === void 0)
        return Z.value.length;
      const e = Z.value.findIndex(
        (t) => Dt(t?.[i.idKey], P.value)
      );
      return e < 0 ? Z.value.length : e;
    }
    function nu(e, t) {
      const r = kr().find(
        (b) => (b.editField || b.key) === t
      );
      if (!r)
        return null;
      const a = ji();
      if (a === null)
        return null;
      const n = e < 0 ? a - 1 : a;
      if (n < 0 || n >= Z.value.length)
        return null;
      const u = Z.value[n];
      if (!u)
        return null;
      const l = U.value.find(
        (b) => b.key === r.key && b.editable
      );
      return l ? {
        row: u,
        column: l
      } : null;
    }
    function au() {
      const e = ji();
      if (e === null)
        return null;
      const t = e - 1;
      if (t < 0 || t >= Z.value.length)
        return null;
      const r = Z.value[t], a = Tt.value[Tt.value.length - 1];
      return !r || !a ? null : {
        row: r,
        column: a
      };
    }
    async function $i(e) {
      !e?.row || !e?.column || (Ct(), await re(), Lt(e.row, e.column));
    }
    function zi(e) {
      const t = kr();
      if (t.length === 0)
        return;
      const a = document.activeElement?.getAttribute("data-create-field"), n = t.findIndex(
        (l) => (l.editField || l.key) === a
      );
      if (n < 0) {
        Cr(t[0]);
        return;
      }
      const u = n + e;
      u < 0 || u >= t.length || Cr(t[u]);
    }
    function Cr(e) {
      const t = e.editField || e.key, r = Bt.get(t);
      r && (typeof r.scrollIntoView == "function" && r.scrollIntoView({ block: "nearest", inline: "nearest" }), r.focus(), typeof r.select == "function" && r.select());
    }
    function Vi() {
      const e = Te.value;
      if (e) {
        if (typeof e.scrollTo == "function") {
          e.scrollTo({ top: e.scrollHeight, behavior: "smooth" });
          return;
        }
        e.scrollTop = e.scrollHeight;
      }
    }
    function Li() {
      re(() => {
        const e = kr();
        e.length !== 0 && Cr(e[0]);
      });
    }
    function Gn(e, t, r) {
      const a = `${String(e)}::${t}`;
      if (!r) {
        It.delete(a);
        return;
      }
      It.set(a, r);
    }
    function Jt(e, t) {
      if (!t) {
        Bt.delete(e);
        return;
      }
      Bt.set(e, t);
    }
    function iu(e, t) {
      re(() => {
        const r = `${String(e)}::${t}`, a = It.get(r);
        a && (a.focus(), typeof a.select == "function" && a.select());
      });
    }
    function lu(e) {
      const t = z.value.find(
        (r) => Dt(r[i.idKey], e)
      );
      return t || Oe.value.find(
        (r) => Dt(r[i.idKey], e)
      );
    }
    function rt() {
      if (!window?.axios)
        throw new Error("window.axios is not available.");
      return window.axios;
    }
    function Di(e) {
      Ye.value = Ye.value === e ? null : e;
    }
    function Yn(e) {
      return Ye.value === e;
    }
    function Xn(e, t) {
      return !i.rowMenu || t !== 0 ? !1 : e?.[i.idKey] !== void 0 && e?.[i.idKey] !== null;
    }
    function Ni(e) {
      const t = e?.[i.idKey];
      return t == null ? !1 : St.value === t;
    }
    function ou(e) {
      const t = e?.[i.idKey];
      return t == null ? !1 : Yn(t) || Ni(e);
    }
    function su(e, t) {
      return "border-b border-slate-100 last:border-b-0";
    }
    function uu(e, t) {
      return Ni(e) ? "rgb(241 245 249)" : ut.value && t === Ke.value ? "rgb(245 247 250)" : null;
    }
    function Pi(e, t, r) {
      const a = uu(t, r);
      return a ? {
        ...e || {},
        backgroundColor: a
      } : e;
    }
    function du(e) {
      const t = e?.[i.idKey];
      St.value = t ?? null;
    }
    function cu(e) {
      const t = e?.[i.idKey];
      t != null && St.value === t && (St.value = null);
    }
    function fu(e) {
      pr(e), ut.value = !0;
    }
    function Bi() {
      le.value = !1, oe.value = !1, dt.value = !1, Ae.value = !1, fe.value = !1, se.value = null, At.value = null, Ye.value = null, Vn();
    }
    function Ki(e) {
      if (!de.value)
        return;
      const t = e.target;
      if (!(t instanceof HTMLElement))
        return;
      const r = de.value.contains(t), a = !!t.closest('[data-rw-autocomplete-portal="true"]');
      if (!r && !a) {
        Bi(), ut.value = !1;
        return;
      }
      ut.value = !0;
    }
    function Ui(e) {
      if (!de.value)
        return;
      const t = e.target;
      t instanceof HTMLElement && (ut.value = de.value.contains(t));
    }
    function qi(e) {
      if (!de.value)
        return;
      const t = e.target;
      if (!(t instanceof HTMLElement))
        return;
      const r = de.value.contains(t);
      if (r && (ut.value = !0), !(!r && !ut.value)) {
        if (e.key === "Escape") {
          if (pu(t))
            return;
          if (fe.value) {
            e.preventDefault(), fe.value = !1;
            return;
          }
          if (Ae.value) {
            e.preventDefault(), Ae.value = !1;
            return;
          }
          if (Ye.value !== null || se.value !== null || oe.value || le.value) {
            e.preventDefault(), Bi();
            return;
          }
          if ($e.value) {
            e.preventDefault(), Ct();
            return;
          }
          _e.value !== null && (e.preventDefault(), Gt());
          return;
        }
        if (!bu(t)) {
          if (e.key === "Insert" && i.inlineCreate) {
            e.preventDefault(), zt(null);
            return;
          }
          if (e.altKey && e.key.toLowerCase() === "m" && i.rowMenu) {
            e.preventDefault();
            const a = Z.value[Ke.value];
            a && Di(a[i.idKey]);
            return;
          }
          if (e.key === "ArrowDown") {
            e.preventDefault(), pr(Ke.value + 1);
            return;
          }
          if (e.key === "ArrowUp") {
            e.preventDefault(), pr(Ke.value - 1);
            return;
          }
          if (e.key === "Enter") {
            const a = Z.value[Ke.value], n = Tt.value[0];
            a && n && (e.preventDefault(), Lt(a, n));
          }
        }
      }
    }
    function pu(e) {
      const t = e.closest("[data-rw-autocomplete-input]");
      return t ? t.getAttribute("aria-expanded") === "true" : !1;
    }
    function bu(e) {
      const t = e.tagName;
      return ["INPUT", "TEXTAREA", "SELECT"].includes(t) ? !0 : e.isContentEditable;
    }
    function Jn(e) {
      return String(e ?? "rwtable").toLowerCase().replace(/[^a-z0-9_-]+/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "") || "rwtable";
    }
    function _r(e) {
      const t = String(e ?? "").trim();
      return t === "" ? "520px" : /^\d+$/.test(t) ? `${t}px` : t;
    }
    function Hi(e) {
      if (e == null)
        return null;
      const t = String(e).trim();
      return t === "" ? null : /^\d+(\.\d+)?$/.test(t) ? `${t}px` : t;
    }
    function en(e) {
      const t = Number(i.rowOptions?.[0] ?? 25), r = Number.isFinite(t) && t > 0 ? Math.round(t) : 25, a = Number(e);
      if (!Number.isFinite(a) || a <= 0)
        return r;
      const n = Math.round(a), u = Array.isArray(i.rowOptions) ? i.rowOptions.map((l) => Number(l)).filter((l) => Number.isFinite(l) && l > 0).map((l) => Math.round(l)) : [];
      return u.length === 0 || u.includes(n) ? n : r;
    }
    function Qt() {
      return `rwtable:columns:${typeof i.tableId == "string" && i.tableId.trim() !== "" ? i.tableId.trim() : i.columns.map((t) => String(t.key)).join("|")}`;
    }
    function Wi() {
      return `${Qt()}:widths`;
    }
    function Gi() {
      return `${Qt()}:lockCount`;
    }
    function Qn() {
      return `${Qt()}:config`;
    }
    function vu() {
      if (typeof window > "u")
        return null;
      try {
        const e = window.localStorage.getItem(Qt());
        if (!e)
          return null;
        const t = JSON.parse(e);
        return !t || typeof t != "object" ? null : t;
      } catch {
        return null;
      }
    }
    function gu() {
      if (typeof window > "u")
        return null;
      try {
        const e = window.localStorage.getItem(Wi());
        if (!e)
          return null;
        const t = JSON.parse(e);
        return !t || typeof t != "object" ? null : t;
      } catch {
        return null;
      }
    }
    function yu() {
      if (typeof window > "u")
        return 0;
      try {
        const e = window.localStorage.getItem(Gi()), t = Number(e);
        return Number.isFinite(t) ? Math.max(0, Math.round(t)) : 0;
      } catch {
        return 0;
      }
    }
    function hu() {
      if (typeof window > "u")
        return null;
      try {
        const e = window.localStorage.getItem(Qn());
        if (!e)
          return null;
        const t = JSON.parse(e);
        return !t || typeof t != "object" ? null : t;
      } catch {
        return null;
      }
    }
    function mu() {
      const e = hu();
      if (!e) {
        lt.value = _r(lt.value);
        return;
      }
      typeof e.usePagination == "boolean" && (it.value = e.usePagination), typeof e.horizontalScroll == "boolean" && (Fe.value = e.horizontalScroll), typeof e.rowQuantitySelect == "boolean" && (Rt.value = e.rowQuantitySelect), e.rowsPerPage !== void 0 && e.rowsPerPage !== null && (q.value = en(e.rowsPerPage)), typeof e.showRecordCount == "boolean" && (Et.value = e.showRecordCount), lt.value = _r(e.height ?? lt.value);
    }
    function xu() {
      if (!(typeof window > "u"))
        try {
          const e = {
            order: H.value.map((t) => t.key),
            selected: H.value.reduce((t, r) => (t[r.key] = r.selected !== !1, t), {})
          };
          window.localStorage.setItem(Qt(), JSON.stringify(e));
        } catch {
          return;
        }
    }
    function Yi() {
      if (!(typeof window > "u"))
        try {
          window.localStorage.setItem(
            Wi(),
            JSON.stringify(He.value)
          );
        } catch {
          return;
        }
    }
    function tn() {
      if (!(typeof window > "u"))
        try {
          window.localStorage.setItem(Gi(), String(ye.value));
        } catch {
          return;
        }
    }
    function Xi() {
      if (!(typeof window > "u"))
        try {
          const e = {
            usePagination: it.value,
            horizontalScroll: Fe.value,
            rowQuantitySelect: Rt.value,
            rowsPerPage: en(q.value),
            showRecordCount: Et.value,
            height: _r(lt.value)
          };
          window.localStorage.setItem(Qn(), JSON.stringify(e));
        } catch {
          return;
        }
    }
    function wu() {
      if (it.value = i.options?.scrollMode !== "infinite", Fe.value = !!i.horizontalScroll, Rt.value = !!i.rowQuantitySelect, q.value = en(i.rowOptions?.[0] ?? 25), Et.value = !!i.showRecordCount, lt.value = _r(i.initialHeight), typeof window < "u")
        try {
          window.localStorage.removeItem(Qn());
        } catch {
          return;
        }
    }
    return (e, t) => (c(), f("div", {
      ref_key: "rootRef",
      ref: de,
      class: "rw-table w-full min-w-0 max-w-full space-y-0"
    }, [
      s("div", {
        class: "relative flex flex-wrap items-center gap-2 rounded-none border-x border-t border-slate-200 bg-white px-3 py-2",
        style: V(_t(Cl))
      }, [
        d.globalSearch ? (c(), f("div", {
          key: 0,
          class: A(Ol.value),
          style: V(Il.value)
        }, [
          s("label", {
            for: dn.value,
            class: "sr-only"
          }, g(o("search.all_columns", "Zoeken in alle kolommen")), 9, td),
          ke(s("input", {
            id: dn.value,
            name: dn.value,
            "aria-label": o("search.all_columns", "Zoeken in alle kolommen"),
            "onUpdate:modelValue": t[0] || (t[0] = (r) => be.value = r),
            type: "text",
            placeholder: o("search.all_columns", "Zoeken in alle kolommen"),
            class: "h-9 w-full rounded-md border border-slate-300 px-3 text-sm outline-none focus:border-slate-300"
          }, null, 8, rd), [
            [rn, be.value]
          ])
        ], 6)) : C("", !0),
        zl.value ? (c(), f("button", {
          key: 1,
          type: "button",
          class: "inline-flex h-9 w-9 items-center justify-center rounded-md border border-red-200 text-red-600 hover:bg-red-50",
          "aria-label": o("filters.clear_all", "Filters wissen"),
          onClick: js
        }, [...t[40] || (t[40] = [
          s("i", { class: "mdi mdi-filter-off text-base leading-none" }, null, -1)
        ])], 8, nd)) : C("", !0),
        s("div", ad, [
          Rt.value && it.value ? (c(), f("div", id, [
            ke(s("select", {
              id: va.value,
              name: va.value,
              "aria-label": o("table.rows_per_page", "Aantal rijen per pagina"),
              "onUpdate:modelValue": t[1] || (t[1] = (r) => q.value = r),
              class: "h-9 w-28 rounded-md border border-slate-300 bg-white pl-3 pr-8 text-sm"
            }, [
              (c(!0), f(R, null, X(d.rowOptions, (r) => (c(), f("option", {
                key: r,
                value: r
              }, g(r), 9, od))), 128))
            ], 8, ld), [
              [
                bt,
                q.value,
                void 0,
                { number: !0 }
              ]
            ])
          ])) : C("", !0),
          d.inlineCreate && d.inlineCreateButton ? (c(), f("button", {
            key: 1,
            type: "button",
            class: "rw-btn-hover inline-flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background text-slate-600 shadow-sm",
            onClick: t[2] || (t[2] = (r) => zt(null))
          }, [...t[41] || (t[41] = [
            s("i", { class: "mdi mdi-plus text-lg leading-none" }, null, -1)
          ])])) : C("", !0),
          Tl.value ? (c(), f("div", sd, [
            s("button", {
              type: "button",
              class: A([
                "rw-btn-hover inline-flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background shadow-sm",
                fe.value ? "border-blue-300 bg-blue-50 text-blue-600" : "text-slate-600"
              ]),
              title: o("charts.manage_title", "Grafiekbeheer"),
              onClick: so
            }, [
              s("i", {
                class: "mdi mdi-chart-bar text-lg leading-none",
                style: V({
                  color: fe.value ? "#2563eb" : "#475569"
                })
              }, null, 4)
            ], 10, ud),
            fe.value ? (c(), f("div", {
              key: 0,
              class: "absolute right-0 top-11 mt-3 flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-xl",
              style: V({
                zIndex: _t(Me).toolbarOverlay + 30,
                width: "min(96vw, 960px)",
                maxWidth: "calc(100vw - 1rem)",
                maxHeight: "calc(100vh - 120px)"
              })
            }, [
              s("div", dd, [
                s("span", null, g(W.value === "list" ? o("charts.dialog.title_list", "Grafieken Beheer") : W.value === "view" ? O.value.description || o("charts.dialog.title_view", "Grafiek bekijken") : O.value.id ? o("charts.dialog.title_edit", "Grafiek Bewerken") : o("charts.dialog.title_new", "Nieuwe Grafiek")), 1),
                s("button", {
                  type: "button",
                  class: "inline-flex h-7 w-7 items-center justify-center rounded text-sky-100 hover:bg-sky-600",
                  "aria-label": o("actions.close", "Sluiten"),
                  onClick: t[3] || (t[3] = (r) => fe.value = !1)
                }, [...t[42] || (t[42] = [
                  s("i", { class: "mdi mdi-close text-base leading-none" }, null, -1)
                ])], 8, cd)
              ]),
              s("div", fd, [
                W.value === "list" ? (c(), f(R, { key: 0 }, [
                  s("button", {
                    type: "button",
                    class: "rw-btn-hover inline-flex h-8 items-center rounded border border-input bg-background px-2 text-sm text-slate-700 shadow-sm",
                    onClick: t[4] || (t[4] = (r) => fe.value = !1)
                  }, [
                    t[43] || (t[43] = s("i", { class: "mdi mdi-arrow-left-circle mr-1 text-base leading-none" }, null, -1)),
                    Y(" " + g(o("actions.back", "Terug")), 1)
                  ]),
                  t[45] || (t[45] = s("div", { class: "ml-auto" }, null, -1)),
                  s("button", {
                    type: "button",
                    class: "rw-btn-hover-tone-blue inline-flex h-8 items-center rounded border border-blue-200 bg-blue-50 px-2 text-sm text-blue-700",
                    disabled: Ue.value,
                    onClick: _o
                  }, [
                    t[44] || (t[44] = s("i", { class: "mdi mdi-plus-circle mr-1 text-base leading-none" }, null, -1)),
                    Y(" " + g(o("actions.new", "Nieuw")), 1)
                  ], 8, pd)
                ], 64)) : (c(), f(R, { key: 1 }, [
                  s("button", {
                    type: "button",
                    class: "rw-btn-hover inline-flex h-8 items-center rounded border border-input bg-background px-2 text-sm text-slate-700 shadow-sm",
                    disabled: Ue.value,
                    onClick: t[5] || (t[5] = (r) => W.value = "list")
                  }, [
                    t[46] || (t[46] = s("i", { class: "mdi mdi-arrow-left-circle mr-1 text-base leading-none" }, null, -1)),
                    Y(" " + g(o("actions.back", "Terug")), 1)
                  ], 8, bd),
                  t[49] || (t[49] = s("div", { class: "ml-auto" }, null, -1)),
                  W.value === "view" ? (c(), f("button", {
                    key: 0,
                    type: "button",
                    class: "rw-btn-hover inline-flex h-8 items-center rounded border border-input bg-background px-2 text-sm text-slate-700 shadow-sm disabled:opacity-60",
                    disabled: at.value || D.value || !Er.value || !!K.value,
                    onClick: Ao
                  }, [
                    t[47] || (t[47] = s("i", { class: "mdi mdi-file-pdf-box mr-1 text-base leading-none" }, null, -1)),
                    Y(" " + g(o("charts.actions.print_pdf", "PDF afdrukken")), 1)
                  ], 8, vd)) : C("", !0),
                  W.value === "edit" ? (c(), f("button", {
                    key: 1,
                    type: "button",
                    class: "rw-btn-hover-tone-teal inline-flex h-8 items-center rounded border border-teal-200 bg-teal-50 px-2 text-sm text-teal-700 disabled:opacity-60",
                    disabled: Ue.value || !gn.value,
                    onClick: Fo
                  }, [
                    t[48] || (t[48] = s("i", { class: "mdi mdi-content-save mr-1 text-base leading-none" }, null, -1)),
                    Y(" " + g(o("actions.save", "Bewaren")), 1)
                  ], 8, gd)) : C("", !0)
                ], 64))
              ]),
              m.value ? (c(), f("p", yd, g(m.value), 1)) : C("", !0),
              p.value ? (c(), f("p", hd, g(p.value), 1)) : C("", !0),
              W.value === "list" ? (c(), f("div", md, [
                s("table", xd, [
                  s("thead", wd, [
                    s("tr", null, [
                      s("th", kd, g(o("table.id", "Id")), 1),
                      s("th", Cd, g(o("table.description", "Omschrijving")), 1),
                      s("th", _d, g(o("table.actions", "Acties")), 1)
                    ])
                  ]),
                  s("tbody", null, [
                    Ot.value.length === 0 ? (c(), f("tr", Sd, [
                      s("td", Md, g(o(
                        "charts.messages.none_saved",
                        "Geen opgeslagen grafieken gevonden."
                      )), 1)
                    ])) : C("", !0),
                    (c(!0), f(R, null, X(Ot.value, (r) => (c(), f("tr", {
                      key: r.id,
                      class: "border-b border-slate-100"
                    }, [
                      s("td", Fd, [
                        s("button", {
                          type: "button",
                          class: "rw-id-hover inline-flex h-7 items-center justify-center rounded-full px-2 font-semibold transition-colors",
                          disabled: Ue.value,
                          onClick: (a) => So(r)
                        }, g(r.id), 9, Od)
                      ]),
                      s("td", Id, g(r.description), 1),
                      s("td", Ad, [
                        s("button", {
                          type: "button",
                          class: "rw-btn-hover inline-flex h-8 w-8 items-center justify-center rounded border border-input bg-background text-blue-700 shadow-sm disabled:opacity-50",
                          disabled: Ue.value,
                          title: o("actions.view", "Bekijken"),
                          onClick: (a) => Mo(r)
                        }, [...t[50] || (t[50] = [
                          s("i", { class: "mdi mdi-eye text-lg leading-none" }, null, -1)
                        ])], 8, Rd)
                      ])
                    ]))), 128))
                  ])
                ])
              ])) : (c(), f("div", Ed, [
                s("div", Td, [
                  W.value === "edit" ? (c(), f("div", jd, [
                    s("div", null, [
                      s("label", {
                        for: `${I.value}-chart-description`,
                        class: "mb-1 block text-xs text-slate-600"
                      }, g(o("common.description_title", "Omschrijving / Titel")), 9, $d),
                      ke(s("input", {
                        id: `${I.value}-chart-description`,
                        name: `${I.value}-chart-description`,
                        "onUpdate:modelValue": t[6] || (t[6] = (r) => O.value.description = r),
                        type: "text",
                        class: "h-9 w-full rounded border border-slate-300 px-3 text-sm",
                        maxlength: "255",
                        placeholder: o(
                          "charts.placeholders.description",
                          "Bijvoorbeeld: Inschrijvingen per schooljaar"
                        )
                      }, null, 8, zd), [
                        [rn, O.value.description]
                      ])
                    ]),
                    s("div", Vd, [
                      s("div", null, [
                        s("label", {
                          for: `${I.value}-chart-type`,
                          class: "mb-1 block text-xs text-slate-600"
                        }, g(o("charts.fields.type", "Grafiektype")), 9, Ld),
                        ke(s("select", {
                          id: `${I.value}-chart-type`,
                          name: `${I.value}-chart-type`,
                          "onUpdate:modelValue": t[7] || (t[7] = (r) => O.value.config.builder.chart.type = r),
                          class: "h-9 w-full rounded border border-slate-300 bg-white px-2 text-sm"
                        }, [
                          (c(!0), f(R, null, X(Or.value, (r) => (c(), f("option", {
                            key: r.value,
                            value: r.value
                          }, g(r.label), 9, Nd))), 128))
                        ], 8, Dd), [
                          [bt, O.value.config.builder.chart.type]
                        ])
                      ]),
                      s("div", null, [
                        s("label", {
                          for: `${I.value}-chart-sort`,
                          class: "mb-1 block text-xs text-slate-600"
                        }, g(o("charts.fields.sort", "Sortering")), 9, Pd),
                        ke(s("select", {
                          id: `${I.value}-chart-sort`,
                          name: `${I.value}-chart-sort`,
                          "onUpdate:modelValue": t[8] || (t[8] = (r) => O.value.config.builder.dataset.sort_direction = r),
                          class: "h-9 w-full rounded border border-slate-300 bg-white px-2 text-sm"
                        }, [
                          (c(!0), f(R, null, X(Al.value, (r) => (c(), f("option", {
                            key: r.value,
                            value: r.value
                          }, g(r.label), 9, Kd))), 128))
                        ], 8, Bd), [
                          [
                            bt,
                            O.value.config.builder.dataset.sort_direction
                          ]
                        ])
                      ]),
                      s("div", null, [
                        s("label", {
                          for: `${I.value}-chart-orientation`,
                          class: "mb-1 block text-xs text-slate-600"
                        }, g(o("charts.fields.orientation", "Orientatie")), 9, Ud),
                        ke(s("select", {
                          id: `${I.value}-chart-orientation`,
                          name: `${I.value}-chart-orientation`,
                          "onUpdate:modelValue": t[9] || (t[9] = (r) => O.value.config.builder.chart.orientation = r),
                          class: "h-9 w-full rounded border border-slate-300 bg-white px-2 text-sm"
                        }, [
                          (c(!0), f(R, null, X(Rl.value, (r) => (c(), f("option", {
                            key: r.value,
                            value: r.value
                          }, g(r.label), 9, Hd))), 128))
                        ], 8, qd), [
                          [bt, O.value.config.builder.chart.orientation]
                        ])
                      ])
                    ]),
                    s("div", Wd, [
                      s("div", null, [
                        s("label", {
                          for: `${I.value}-chart-x-field`,
                          class: "mb-1 block text-xs text-slate-600"
                        }, g(o("charts.fields.x_field", "X-veld")), 9, Gd),
                        ke(s("select", {
                          id: `${I.value}-chart-x-field`,
                          name: `${I.value}-chart-x-field`,
                          "onUpdate:modelValue": t[10] || (t[10] = (r) => O.value.config.builder.dataset.x_field = r),
                          class: "h-9 w-full rounded border border-slate-300 bg-white px-2 text-sm"
                        }, [
                          s("option", Xd, g(o("common.choose_field", "-- Kies veld --")), 1),
                          (c(!0), f(R, null, X(bn.value, (r) => (c(), f("option", {
                            key: r.value,
                            value: r.value
                          }, g(r.label), 9, Jd))), 128))
                        ], 8, Yd), [
                          [bt, O.value.config.builder.dataset.x_field]
                        ])
                      ]),
                      s("div", null, [
                        s("label", {
                          for: `${I.value}-chart-aggregate`,
                          class: "mb-1 block text-xs text-slate-600"
                        }, g(o(
                          "charts.fields.aggregate",
                          "Berekening (aggregatie)"
                        )), 9, Qd),
                        ke(s("select", {
                          id: `${I.value}-chart-aggregate`,
                          name: `${I.value}-chart-aggregate`,
                          "onUpdate:modelValue": t[11] || (t[11] = (r) => O.value.config.builder.dataset.aggregate = r),
                          class: "h-9 w-full rounded border border-slate-300 bg-white px-2 text-sm"
                        }, [
                          (c(!0), f(R, null, X(ha.value, (r) => (c(), f("option", {
                            key: r.value,
                            value: r.value
                          }, g(r.label), 9, ec))), 128))
                        ], 8, Zd), [
                          [bt, O.value.config.builder.dataset.aggregate]
                        ])
                      ])
                    ]),
                    s("div", tc, [
                      s("div", null, [
                        s("label", {
                          for: `${I.value}-chart-metric-field`,
                          class: "mb-1 block text-xs text-slate-600"
                        }, g(o("charts.fields.metric_field", "Metric veld")), 9, rc),
                        ke(s("select", {
                          id: `${I.value}-chart-metric-field`,
                          name: `${I.value}-chart-metric-field`,
                          "onUpdate:modelValue": t[12] || (t[12] = (r) => O.value.config.builder.dataset.metric_field = r),
                          disabled: !Ca.value,
                          class: "h-9 w-full rounded border border-slate-300 bg-white px-2 text-sm disabled:bg-slate-100"
                        }, [
                          s("option", ac, g(o("common.choose_field", "-- Kies veld --")), 1),
                          (c(!0), f(R, null, X(bn.value, (r) => (c(), f("option", {
                            key: r.value,
                            value: r.value
                          }, g(r.label), 9, ic))), 128))
                        ], 8, nc), [
                          [
                            bt,
                            O.value.config.builder.dataset.metric_field
                          ]
                        ])
                      ]),
                      s("div", null, [
                        s("label", {
                          for: `${I.value}-chart-series-field`,
                          class: "mb-1 block text-xs text-slate-600"
                        }, g(o(
                          "charts.fields.series_field_optional",
                          "Series veld (optioneel)"
                        )), 9, lc),
                        ke(s("select", {
                          id: `${I.value}-chart-series-field`,
                          name: `${I.value}-chart-series-field`,
                          "onUpdate:modelValue": t[13] || (t[13] = (r) => O.value.config.builder.dataset.series_field = r),
                          class: "h-9 w-full rounded border border-slate-300 bg-white px-2 text-sm"
                        }, [
                          s("option", sc, g(o("charts.fields.no_series", "-- Geen series --")), 1),
                          (c(!0), f(R, null, X(bn.value, (r) => (c(), f("option", {
                            key: r.value,
                            value: r.value
                          }, g(r.label), 9, uc))), 128))
                        ], 8, oc), [
                          [
                            bt,
                            O.value.config.builder.dataset.series_field
                          ]
                        ])
                      ]),
                      s("div", null, [
                        s("label", {
                          for: `${I.value}-chart-limit`,
                          class: "mb-1 block text-xs text-slate-600"
                        }, g(o("charts.fields.limit", "Top N (1-500)")), 9, dc),
                        ke(s("input", {
                          id: `${I.value}-chart-limit`,
                          name: `${I.value}-chart-limit`,
                          "onUpdate:modelValue": t[14] || (t[14] = (r) => O.value.config.builder.dataset.limit = r),
                          type: "number",
                          min: "1",
                          max: "500",
                          class: "h-9 w-full rounded border border-slate-300 px-2 text-sm"
                        }, null, 8, cc), [
                          [
                            rn,
                            O.value.config.builder.dataset.limit,
                            void 0,
                            { number: !0 }
                          ]
                        ])
                      ])
                    ]),
                    s("div", fc, [
                      s("label", pc, [
                        ke(s("input", {
                          type: "checkbox",
                          name: `${I.value}-chart-show-legend`,
                          "onUpdate:modelValue": t[15] || (t[15] = (r) => O.value.config.builder.chart.show_legend = r)
                        }, null, 8, bc), [
                          [nn, O.value.config.builder.chart.show_legend]
                        ]),
                        Y(" " + g(o("charts.fields.show_legend", "Toon legenda")), 1)
                      ]),
                      s("label", vc, [
                        ke(s("input", {
                          type: "checkbox",
                          name: `${I.value}-chart-stacked`,
                          "onUpdate:modelValue": t[16] || (t[16] = (r) => O.value.config.builder.chart.stacked = r)
                        }, null, 8, gc), [
                          [nn, O.value.config.builder.chart.stacked]
                        ]),
                        Y(" " + g(o("charts.fields.stacked", "Stapelen")), 1)
                      ]),
                      s("label", yc, [
                        ke(s("input", {
                          type: "checkbox",
                          name: `${I.value}-chart-allow-type-change`,
                          "onUpdate:modelValue": t[17] || (t[17] = (r) => O.value.config.builder.presentation.allow_chart_type_change = r)
                        }, null, 8, hc), [
                          [
                            nn,
                            O.value.config.builder.presentation.allow_chart_type_change
                          ]
                        ]),
                        Y(" " + g(o(
                          "charts.fields.allow_type_change",
                          "Grafiektype aanpassen in viewer"
                        )), 1)
                      ])
                    ]),
                    gn.value ? C("", !0) : (c(), f("p", mc, g(o(
                      "charts.validation.minimum_required",
                      "Vul minstens Omschrijving, X-veld en indien nodig een Metric veld in."
                    )), 1))
                  ])) : C("", !0),
                  W.value === "view" ? (c(), f("div", xc, [
                    s("label", {
                      for: `${I.value}-chart-view-type`,
                      class: "mb-1 block text-xs text-slate-600"
                    }, g(o("charts.fields.viewer_type", "Grafiektype in viewer")), 9, wc),
                    ke(s("select", {
                      id: `${I.value}-chart-view-type`,
                      name: `${I.value}-chart-view-type`,
                      "onUpdate:modelValue": t[18] || (t[18] = (r) => te.value = r),
                      class: "h-9 w-full rounded border border-slate-300 bg-white px-2 text-sm"
                    }, [
                      (c(!0), f(R, null, X(Or.value, (r) => (c(), f("option", {
                        key: r.value,
                        value: r.value
                      }, g(r.label), 9, Cc))), 128))
                    ], 8, kc), [
                      [bt, te.value]
                    ])
                  ])) : C("", !0),
                  K.value ? (c(), f("p", _c, g(K.value), 1)) : C("", !0),
                  D.value ? (c(), f("div", Sc, g(o("charts.messages.loading_data", "Grafiekdata laden...")), 1)) : Er.value ? (c(), f("div", Fc, [
                    W.value === "view" ? (c(), f("div", {
                      key: 0,
                      ref_key: "chartStageViewRef",
                      ref: et,
                      class: "w-full",
                      style: {
                        height: "52vh",
                        minHeight: "360px"
                      }
                    }, null, 512)) : (c(), f("div", {
                      key: 1,
                      ref_key: "chartStageEditRef",
                      ref: qe,
                      class: "w-full",
                      style: {
                        height: "42vh",
                        minHeight: "300px"
                      }
                    }, null, 512))
                  ])) : (c(), f("div", Mc, g(o(
                    "charts.messages.no_renderable_data",
                    "Geen renderbare grafiekdata gevonden voor de huidige instellingen."
                  )), 1))
                ])
              ])),
              W.value === "edit" ? (c(), f("div", Oc, [
                O.value.id ? (c(), f("button", {
                  key: 0,
                  type: "button",
                  class: "inline-flex h-8 items-center rounded border border-red-200 bg-red-50 px-2 text-sm text-red-700 hover:bg-red-100 disabled:opacity-50",
                  disabled: Ue.value,
                  onClick: t[19] || (t[19] = (r) => Oo(O.value.id))
                }, [
                  t[51] || (t[51] = s("i", { class: "mdi mdi-delete mr-1 text-base leading-none" }, null, -1)),
                  Y(" " + g(o("actions.delete", "Verwijderen")), 1)
                ], 8, Ic)) : C("", !0),
                t[52] || (t[52] = s("div", { class: "ml-auto" }, null, -1))
              ])) : C("", !0)
            ], 4)) : C("", !0)
          ])) : C("", !0),
          El.value ? (c(), f("div", Ac, [
            s("button", {
              type: "button",
              class: A([
                "rw-btn-hover inline-flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background shadow-sm",
                Ae.value ? "border-emerald-300 bg-emerald-50 text-emerald-600" : "text-slate-600"
              ]),
              title: o("excel.dialog.title_button", "Excel export"),
              onClick: oo
            }, [
              s("i", {
                class: "mdi mdi-microsoft-excel text-lg leading-none",
                style: V({
                  color: Ae.value ? "#047857" : "#475569"
                })
              }, null, 4)
            ], 10, Rc),
            Ae.value ? (c(), f("div", {
              key: 0,
              class: "absolute right-0 top-11 z-[80] mt-3 flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-xl",
              style: V({
                zIndex: _t(Me).toolbarOverlay + 20,
                width: "min(90vw, 375px)",
                maxWidth: "calc(100vw - 2rem)",
                minWidth: "320px"
              })
            }, [
              s("div", Ec, [
                s("span", null, g(Ze.value === "list" ? o("excel.dialog.title_list", "Excel Export Beheer") : B.value.id ? o("excel.dialog.title_edit", "Export Bewerken") : o("excel.dialog.title_new", "Nieuwe Export")), 1),
                s("button", {
                  type: "button",
                  class: "inline-flex h-7 w-7 items-center justify-center rounded text-emerald-100 hover:bg-emerald-600",
                  "aria-label": o("actions.close", "Sluiten"),
                  onClick: t[20] || (t[20] = (r) => Ae.value = !1)
                }, [...t[53] || (t[53] = [
                  s("i", { class: "mdi mdi-close text-base leading-none" }, null, -1)
                ])], 8, Tc)
              ]),
              s("div", jc, [
                Ze.value === "list" ? (c(), f(R, { key: 0 }, [
                  s("button", {
                    type: "button",
                    class: "rw-btn-hover inline-flex h-8 items-center rounded border border-input bg-background px-2 text-sm text-slate-700 shadow-sm",
                    onClick: t[21] || (t[21] = (r) => Ae.value = !1)
                  }, [
                    t[54] || (t[54] = s("i", { class: "mdi mdi-arrow-left-circle mr-1 text-base leading-none" }, null, -1)),
                    Y(" " + g(o("actions.back", "Terug")), 1)
                  ]),
                  t[56] || (t[56] = s("div", { class: "ml-auto" }, null, -1)),
                  s("button", {
                    type: "button",
                    class: "rw-btn-hover-tone-blue inline-flex h-8 items-center rounded border border-blue-200 bg-blue-50 px-2 text-sm text-blue-700",
                    disabled: ge.value,
                    onClick: po
                  }, [
                    t[55] || (t[55] = s("i", { class: "mdi mdi-plus-circle mr-1 text-base leading-none" }, null, -1)),
                    Y(" " + g(o("actions.new", "Nieuw")), 1)
                  ], 8, $c)
                ], 64)) : (c(), f(R, { key: 1 }, [
                  s("button", {
                    type: "button",
                    class: "rw-btn-hover inline-flex h-8 items-center rounded border border-input bg-background px-2 text-sm text-slate-700 shadow-sm",
                    disabled: ge.value,
                    onClick: t[22] || (t[22] = (r) => Ze.value = "list")
                  }, [
                    t[57] || (t[57] = s("i", { class: "mdi mdi-arrow-left-circle mr-1 text-base leading-none" }, null, -1)),
                    Y(" " + g(o("actions.back", "Terug")), 1)
                  ], 8, zc),
                  t[59] || (t[59] = s("div", { class: "ml-auto" }, null, -1)),
                  !ge.value && ka.value ? (c(), f("button", {
                    key: 0,
                    type: "button",
                    class: "rw-btn-hover-tone-teal inline-flex h-8 items-center rounded border border-teal-200 bg-teal-50 px-2 text-sm text-teal-700",
                    onClick: vo
                  }, [
                    t[58] || (t[58] = s("i", { class: "mdi mdi-content-save mr-1 text-base leading-none" }, null, -1)),
                    Y(" " + g(o("actions.save", "Bewaren")), 1)
                  ])) : C("", !0)
                ], 64))
              ]),
              ze.value ? (c(), f("p", Vc, g(ze.value), 1)) : C("", !0),
              pe.value ? (c(), f("p", Lc, g(pe.value), 1)) : C("", !0),
              Ze.value === "list" ? (c(), f("div", Dc, [
                s("table", Nc, [
                  s("thead", Pc, [
                    s("tr", null, [
                      s("th", Bc, g(o("table.id", "Id")), 1),
                      s("th", Kc, g(o("table.description", "Omschrijving")), 1),
                      s("th", Uc, g(o("table.actions", "Acties")), 1)
                    ])
                  ]),
                  s("tbody", null, [
                    Pt.value.length === 0 ? (c(), f("tr", qc, [
                      s("td", Hc, g(o(
                        "excel.messages.none_saved",
                        "Geen opgeslagen exports gevonden."
                      )), 1)
                    ])) : C("", !0),
                    (c(!0), f(R, null, X(Pt.value, (r) => (c(), f("tr", {
                      key: r.id,
                      class: "border-b border-slate-100"
                    }, [
                      s("td", Wc, [
                        s("button", {
                          type: "button",
                          class: "rw-id-hover inline-flex h-7 items-center justify-center rounded-full px-2 font-semibold transition-colors",
                          disabled: ge.value,
                          onClick: (a) => bo(r)
                        }, g(r.id), 9, Gc)
                      ]),
                      s("td", Yc, g(r.description), 1),
                      s("td", Xc, [
                        s("button", {
                          type: "button",
                          class: "rw-btn-hover inline-flex h-8 w-8 items-center justify-center rounded border border-input bg-background text-emerald-700 shadow-sm disabled:opacity-50",
                          disabled: ge.value,
                          title: o(
                            "excel.actions.download_direct",
                            "Direct downloaden"
                          ),
                          onClick: (a) => Co(r)
                        }, [...t[60] || (t[60] = [
                          s("i", { class: "mdi mdi-download text-lg leading-none" }, null, -1)
                        ])], 8, Jc)
                      ])
                    ]))), 128))
                  ])
                ])
              ])) : (c(), f("div", Qc, [
                s("div", Zc, [
                  s("div", null, [
                    s("label", {
                      for: `${I.value}-export-description`,
                      class: "mb-1 block text-xs text-slate-600"
                    }, g(o("common.description_title", "Omschrijving / Titel")), 9, ef),
                    ke(s("input", {
                      id: `${I.value}-export-description`,
                      name: `${I.value}-export-description`,
                      "onUpdate:modelValue": t[23] || (t[23] = (r) => B.value.description = r),
                      type: "text",
                      class: "h-9 w-full rounded border border-slate-300 px-3 text-sm",
                      maxlength: "255",
                      placeholder: o(
                        "excel.placeholders.description",
                        "Bijvoorbeeld: Overzicht actieve records"
                      )
                    }, null, 8, tf), [
                      [rn, B.value.description]
                    ])
                  ]),
                  s("div", null, [
                    s("p", rf, g(o(
                      "excel.fields.select_sort_columns",
                      "Selecteer en sorteer kolommen"
                    )), 1),
                    s("div", nf, [
                      (c(!0), f(R, null, X(B.value.columns, (r, a) => (c(), f("div", {
                        key: r.key,
                        "data-drag-preview-row": "true",
                        class: A([
                          "flex items-center gap-2 border-b border-slate-100 px-3 py-2 last:border-b-0",
                          Ft.value === r.key ? "bg-blue-50" : "bg-white"
                        ]),
                        onDragover: (n) => ho(r.key, n),
                        onDrop: (n) => mo(r.key, n)
                      }, [
                        s("span", {
                          class: "inline-flex h-6 w-6 cursor-move items-center justify-center rounded text-slate-500 hover:bg-slate-100",
                          draggable: "true",
                          "aria-label": `Versleep export kolom ${x(r)}`,
                          onDragstart: (n) => yo(r.key, n),
                          onDragend: Qa
                        }, [...t[61] || (t[61] = [
                          s("i", { class: "mdi mdi-drag text-sm leading-none" }, null, -1)
                        ])], 40, lf),
                        ke(s("input", {
                          type: "checkbox",
                          name: `export-column-${r.key}`,
                          "aria-label": `Neem kolom ${x(r)} op in export`,
                          "onUpdate:modelValue": (n) => r.selected = n
                        }, null, 8, of), [
                          [nn, r.selected]
                        ]),
                        s("span", sf, g(x(r)), 1),
                        s("div", uf, [
                          s("button", {
                            type: "button",
                            class: "inline-flex h-6 w-6 items-center justify-center rounded border border-slate-200 text-slate-500 disabled:opacity-30",
                            disabled: a === 0,
                            onClick: (n) => In(
                              r.key,
                              B.value.columns[a - 1]?.key
                            )
                          }, [...t[62] || (t[62] = [
                            s("i", { class: "mdi mdi-chevron-up text-sm leading-none" }, null, -1)
                          ])], 8, df),
                          s("button", {
                            type: "button",
                            class: "inline-flex h-6 w-6 items-center justify-center rounded border border-slate-200 text-slate-500 disabled:opacity-30",
                            disabled: a >= B.value.columns.length - 1,
                            onClick: (n) => In(
                              r.key,
                              B.value.columns[a + 1]?.key
                            )
                          }, [...t[63] || (t[63] = [
                            s("i", { class: "mdi mdi-chevron-down text-sm leading-none" }, null, -1)
                          ])], 8, cf)
                        ])
                      ], 42, af))), 128))
                    ])
                  ])
                ])
              ])),
              Ze.value === "edit" ? (c(), f("div", ff, [
                B.value.id ? (c(), f("button", {
                  key: 0,
                  type: "button",
                  class: "inline-flex h-8 items-center rounded border border-red-200 bg-red-50 px-2 text-sm text-red-700 hover:bg-red-100 disabled:opacity-50",
                  disabled: ge.value,
                  onClick: t[24] || (t[24] = (r) => go(B.value.id))
                }, [
                  t[64] || (t[64] = s("i", { class: "mdi mdi-delete mr-1 text-base leading-none" }, null, -1)),
                  Y(" " + g(o("actions.delete", "Verwijderen")), 1)
                ], 8, pf)) : C("", !0),
                t[65] || (t[65] = s("div", { class: "ml-auto" }, null, -1))
              ])) : C("", !0)
            ], 4)) : C("", !0)
          ])) : C("", !0),
          ya.value.length ? (c(), f("div", bf, [
            s("button", {
              type: "button",
              class: A([
                "rw-btn-hover inline-flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background shadow-sm",
                le.value ? "border-red-300 bg-red-50 text-red-600" : "text-slate-600"
              ]),
              onClick: t[25] || (t[25] = (r) => le.value = !le.value)
            }, [
              s("i", {
                class: "mdi mdi-dots-vertical text-lg leading-none",
                style: V({
                  color: le.value ? "#dc2626" : "#475569"
                })
              }, null, 4)
            ], 2),
            le.value ? (c(), f("div", {
              key: 0,
              class: "absolute right-0 top-11 mt-3 flex w-max max-w-[90vw] flex-col overflow-hidden rounded-md border border-slate-200 bg-white shadow-lg",
              style: V(_t(ga))
            }, [
              s("div", vf, [
                s("button", {
                  type: "button",
                  class: "rw-btn-hover inline-flex h-8 items-center rounded border border-input bg-background px-2 text-sm text-slate-700 shadow-sm",
                  onClick: t[26] || (t[26] = (r) => le.value = !1)
                }, [
                  t[66] || (t[66] = s("i", { class: "mdi mdi-arrow-left-circle mr-1 text-base leading-none" }, null, -1)),
                  Y(" " + g(o("actions.back", "Terug")), 1)
                ])
              ]),
              s("div", gf, [
                (c(!0), f(R, null, X(ya.value, (r, a) => (c(), f("button", {
                  key: a,
                  type: "button",
                  class: "rw-btn-hover flex w-full items-center gap-2 whitespace-nowrap rounded px-2 py-1.5 text-left text-sm text-slate-700",
                  onClick: (n) => Go(r)
                }, [
                  r.icon ? (c(), f("i", {
                    key: 0,
                    class: A(["mdi text-base leading-none", r.icon])
                  }, null, 2)) : C("", !0),
                  Y(" " + g(r.label), 1)
                ], 8, yf))), 128))
              ])
            ], 4)) : C("", !0)
          ])) : C("", !0),
          s("div", hf, [
            s("button", {
              type: "button",
              class: A([
                "rw-btn-hover inline-flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background shadow-sm",
                oe.value ? "border-blue-300 bg-blue-50 text-blue-600" : "text-slate-600"
              ]),
              onClick: t[27] || (t[27] = (r) => oe.value = !oe.value)
            }, [
              s("i", {
                class: "mdi mdi-cog text-lg leading-none",
                style: V({
                  color: oe.value ? "#2563eb" : "#475569"
                })
              }, null, 4)
            ], 2),
            oe.value ? (c(), f("div", {
              key: 0,
              ref_key: "columnMenuRef",
              ref: he,
              class: "absolute right-2 top-full mt-3 flex w-72 flex-col overflow-hidden rounded-md border border-slate-200 bg-white p-2 shadow-lg",
              style: V(_l.value)
            }, [
              s("div", mf, [
                s("button", {
                  type: "button",
                  class: "rw-btn-hover inline-flex h-8 items-center rounded border border-input bg-background px-2 text-sm text-slate-700 shadow-sm",
                  onClick: t[28] || (t[28] = (r) => oe.value = !1)
                }, [
                  t[67] || (t[67] = s("i", { class: "mdi mdi-arrow-left-circle mr-1 text-base leading-none" }, null, -1)),
                  Y(" " + g(o("actions.back", "Terug")), 1)
                ])
              ]),
              s("div", xf, [
                s("button", {
                  type: "button",
                  class: A([
                    "rw-btn-hover inline-flex w-full items-center justify-center rounded border border-input bg-background px-2 py-1.5 text-xs font-medium shadow-sm",
                    dt.value ? "border-blue-200 bg-blue-50" : "text-slate-700"
                  ]),
                  style: V({
                    color: dt.value ? "#1d4ed8" : "#334155"
                  }),
                  onClick: t[29] || (t[29] = (r) => dt.value = !dt.value)
                }, g(o("table.config.title", "Configuratie")), 7),
                dt.value ? (c(), f("div", wf, [
                  s("label", kf, [
                    s("input", {
                      type: "checkbox",
                      class: "rw-config-checkbox-input h-4 w-4 shrink-0",
                      name: `${I.value}-cfg-pagination`,
                      checked: it.value,
                      onChange: t[30] || (t[30] = (r) => it.value = r.target.checked)
                    }, null, 40, Cf),
                    Y(" " + g(o(
                      "table.config.use_pagination",
                      "Gebruik paginering i.p.v. infinite scroll"
                    )), 1)
                  ]),
                  s("label", _f, [
                    s("input", {
                      type: "checkbox",
                      class: "rw-config-checkbox-input h-4 w-4 shrink-0",
                      name: `${I.value}-cfg-hscroll`,
                      checked: Fe.value,
                      onChange: t[31] || (t[31] = (r) => Fe.value = r.target.checked)
                    }, null, 40, Sf),
                    Y(" " + g(o(
                      "table.config.enable_horizontal_scroll",
                      "Horizontale scroll inschakelen"
                    )), 1)
                  ]),
                  s("label", Mf, [
                    s("input", {
                      type: "checkbox",
                      class: "rw-config-checkbox-input h-4 w-4 shrink-0",
                      name: `${I.value}-cfg-row-select`,
                      checked: Rt.value,
                      disabled: !it.value,
                      onChange: t[32] || (t[32] = (r) => Rt.value = r.target.checked)
                    }, null, 40, Ff),
                    Y(" " + g(o(
                      "table.config.show_row_quantity_select",
                      "Toon aantal rijen-selectie"
                    )), 1)
                  ]),
                  s("label", Of, [
                    s("input", {
                      type: "checkbox",
                      class: "rw-config-checkbox-input h-4 w-4 shrink-0",
                      name: `${I.value}-cfg-record-count`,
                      checked: Et.value,
                      onChange: t[33] || (t[33] = (r) => Et.value = r.target.checked)
                    }, null, 40, If),
                    Y(" " + g(o("table.config.show_record_count", "Toon aantal records")), 1)
                  ]),
                  s("div", Af, [
                    s("label", {
                      for: `${I.value}-cfg-height`,
                      class: "block text-xs text-slate-600"
                    }, g(o("table.config.height", "Hoogte van de tabel")), 9, Rf),
                    s("input", {
                      id: `${I.value}-cfg-height`,
                      name: `${I.value}-cfg-height`,
                      "aria-label": o("table.config.height", "Hoogte van de tabel"),
                      value: lt.value,
                      class: "h-8 w-full rounded border border-slate-300 bg-white px-2 text-xs",
                      onInput: t[34] || (t[34] = (r) => lt.value = r.target.value)
                    }, null, 40, Ef)
                  ]),
                  s("button", {
                    type: "button",
                    class: "rw-btn-hover inline-flex h-7 items-center rounded border border-input bg-background px-2 text-xs text-slate-700 shadow-sm",
                    onClick: wu
                  }, g(o("table.config.restore_default", "Herstel standaard")), 1)
                ])) : C("", !0),
                s("div", Tf, [
                  (c(!0), f(R, null, X(H.value, (r, a) => (c(), f("div", {
                    key: r.key,
                    "data-drag-preview-row": "true",
                    class: A([
                      "flex items-center gap-2 rounded border px-2 py-1.5",
                      nr.value === r.key ? "border-blue-300 bg-blue-50/60" : "border-slate-100"
                    ]),
                    onDragover: (n) => Ss(r.key, n),
                    onDrop: (n) => Ms(r.key, n)
                  }, [
                    s("span", {
                      class: "inline-flex h-6 w-6 cursor-move items-center justify-center rounded text-slate-500 hover:bg-slate-100",
                      draggable: "true",
                      "aria-label": o(
                        "table.column.aria.drag_column",
                        "Versleep kolom :label",
                        { label: x(r) }
                      ),
                      onDragstart: (n) => _s(r.key, n),
                      onDragend: Vn
                    }, [...t[68] || (t[68] = [
                      s("i", { class: "mdi mdi-drag text-sm leading-none" }, null, -1)
                    ])], 40, $f),
                    s("input", {
                      type: "checkbox",
                      name: `column-toggle-${r.key}`,
                      "aria-label": o(
                        "table.column.aria.toggle_column",
                        "Toon kolom :label",
                        { label: x(r) }
                      ),
                      checked: r.selected !== !1,
                      onChange: (n) => ks(r.key)
                    }, null, 40, zf),
                    s("span", Vf, g(x(r)), 1),
                    s("div", Lf, [
                      s("button", {
                        type: "button",
                        class: "rw-btn-hover inline-flex h-6 w-6 items-center justify-center rounded border border-input bg-background text-slate-500 shadow-sm disabled:opacity-30",
                        disabled: a === 0,
                        onClick: (n) => mi(r.key, -1)
                      }, [...t[69] || (t[69] = [
                        s("i", { class: "mdi mdi-chevron-up text-sm leading-none" }, null, -1)
                      ])], 8, Df),
                      s("button", {
                        type: "button",
                        class: "rw-btn-hover inline-flex h-6 w-6 items-center justify-center rounded border border-input bg-background text-slate-500 shadow-sm disabled:opacity-30",
                        disabled: a === H.value.length - 1,
                        onClick: (n) => mi(r.key, 1)
                      }, [...t[70] || (t[70] = [
                        s("i", { class: "mdi mdi-chevron-down text-sm leading-none" }, null, -1)
                      ])], 8, Nf)
                    ])
                  ], 42, jf))), 128))
                ])
              ])
            ], 4)) : C("", !0)
          ])
        ])
      ], 4),
      s("div", {
        ref_key: "containerRef",
        ref: Te,
        class: A([
          "w-full min-w-0 max-w-full rounded-none border-x border-b border-t border-slate-200 bg-white",
          Fe.value ? "overflow-x-auto overflow-y-auto" : "overflow-hidden"
        ]),
        style: V({ height: kl.value })
      }, [
        s("table", {
          class: "table-fixed border-collapse border-spacing-0 text-sm",
          style: V(wl.value)
        }, [
          s("thead", {
            class: "sticky top-0 bg-slate-50 text-slate-600",
            style: V(_t(Sl))
          }, [
            s("tr", null, [
              d.checkboxColumn ? (c(), f("th", {
                key: 0,
                class: "w-10 border-b border-r border-slate-200 px-3 py-2 text-left",
                style: V(Wr("checkbox", !0))
              }, [
                s("input", {
                  type: "checkbox",
                  name: `${I.value}-select-all-visible`,
                  "aria-label": o(
                    "table.aria.select_all_visible_rows",
                    "Selecteer alle zichtbare rijen"
                  ),
                  checked: Dl.value,
                  onChange: t[35] || (t[35] = (r) => Xo(r.target.checked))
                }, null, 40, Pf)
              ], 4)) : C("", !0),
              (c(!0), f(R, null, X(U.value, (r, a) => (c(), f("th", {
                key: r.key,
                class: A([
                  "group relative whitespace-nowrap border-b border-slate-200 px-2 py-2 text-left font-medium",
                  a < U.value.length - 1 ? "border-r border-slate-200" : ""
                ]),
                style: V(gs(r, a))
              }, [
                s("div", Bf, [
                  s("button", {
                    type: "button",
                    class: A([
                      "inline-flex min-w-0 flex-1 items-center gap-0.5",
                      Rn(r) ? "cursor-pointer" : "cursor-default"
                    ]),
                    title: i.manualOrdering ? o(
                      "table.manual_ordering_active",
                      "Manuele volgorde actief"
                    ) : void 0,
                    onClick: (n) => Rn(r) ? Ko(r.key) : void 0
                  }, [
                    s("span", Uf, g(x(r)), 1),
                    Rn(r) ? (c(), f("i", {
                      key: 0,
                      class: A([
                        "mdi shrink-0 text-base leading-none",
                        je.value === r.key ? Ce.value === "asc" ? "mdi-arrow-up" : "mdi-arrow-down" : "mdi-unfold-more-horizontal"
                      ])
                    }, null, 2)) : C("", !0)
                  ], 10, Kf),
                  s("div", qf, [
                    Fe.value && Gr(a) ? (c(), f("button", {
                      key: 0,
                      type: "button",
                      class: "rw-btn-hover inline-flex h-6 w-6 items-center justify-center rounded",
                      "aria-label": o(
                        "table.column.aria.pin_column",
                        "Vastzetten kolom :label",
                        { label: x(r) }
                      ),
                      onClick: Ne((n) => ms(a), ["stop"])
                    }, [
                      s("i", {
                        class: A(["mdi text-sm leading-none", Gr(a)]),
                        style: V({
                          color: Gr(a) === "mdi-lock" ? "#2563eb" : "#64748b"
                        })
                      }, null, 6)
                    ], 8, Hf)) : C("", !0),
                    r.filterable ? (c(), f("button", {
                      key: 1,
                      type: "button",
                      class: A([
                        "rw-btn-hover inline-flex h-6 w-6 items-center justify-center rounded",
                        Os(r.key) ? "text-green-600" : "text-slate-500"
                      ]),
                      "aria-label": o("filters.aria.filter_column", "Filter kolom :label", {
                        label: x(r)
                      }),
                      onClick: (n) => Fs(r.key)
                    }, [...t[71] || (t[71] = [
                      s("i", { class: "mdi mdi-filter text-sm leading-none" }, null, -1)
                    ])], 10, Wf)) : C("", !0)
                  ])
                ]),
                se.value === r.key ? (c(), f("div", {
                  key: 0,
                  class: "absolute left-0 top-full mt-1 min-w-72 overflow-visible rounded-lg border border-slate-200 bg-white shadow-xl",
                  style: V(_t(Ml))
                }, [
                  s("div", Gf, [
                    s("button", {
                      type: "button",
                      class: "rw-btn-hover inline-flex h-8 items-center rounded border border-input bg-background px-2 text-sm text-slate-700 shadow-sm",
                      onClick: t[36] || (t[36] = (n) => se.value = null)
                    }, [
                      t[72] || (t[72] = s("i", { class: "mdi mdi-arrow-left-circle mr-1 text-base leading-none" }, null, -1)),
                      Y(" " + g(o("actions.back", "Terug")), 1)
                    ]),
                    t[74] || (t[74] = s("div", { class: "ml-auto" }, null, -1)),
                    s("button", {
                      type: "button",
                      class: "inline-flex h-8 items-center rounded border border-red-200 bg-red-50 px-2 text-sm text-red-700 hover:bg-red-100",
                      onClick: (n) => Is(r.key)
                    }, [
                      t[73] || (t[73] = s("i", { class: "mdi mdi-delete mr-1 text-base leading-none" }, null, -1)),
                      Y(" " + g(o("actions.clear", "Wissen")), 1)
                    ], 8, Yf)
                  ]),
                  s("div", Xf, [
                    s("select", {
                      name: `filter-mode-${r.key}`,
                      "aria-label": o(
                        "filters.aria.operator_for",
                        "Filter operator voor :label",
                        { label: x(r) }
                      ),
                      value: jt(r.key),
                      class: "h-8 rounded-md border border-slate-300 bg-white px-2 text-xs",
                      onChange: (n) => As(r, n.target.value)
                    }, [
                      (c(!0), f(R, null, X(Wl(r), (n) => (c(), f("option", {
                        key: n.value,
                        value: n.value
                      }, g(n.label), 9, Qf))), 128))
                    ], 40, Jf),
                    jt(r.key) === "tussen" ? (c(), f(R, { key: 0 }, [
                      s("label", Zf, g(o("filters.from", "Van")), 1),
                      s("input", {
                        type: "date",
                        name: `filter-from-${r.key}`,
                        "aria-label": o(
                          "filters.aria.from_date_for",
                          "Filter vanaf datum voor :label",
                          {
                            label: x(r)
                          }
                        ),
                        value: ie.value[r.key]?.from || "",
                        class: "h-8 rounded-md border border-slate-300 px-2 text-xs",
                        onInput: (n) => ki(
                          r.key,
                          "from",
                          n.target.value
                        )
                      }, null, 40, ep),
                      s("label", tp, g(o("filters.to", "Tot")), 1),
                      s("input", {
                        type: "date",
                        name: `filter-to-${r.key}`,
                        "aria-label": o(
                          "filters.aria.to_date_for",
                          "Filter tot datum voor :label",
                          {
                            label: x(r)
                          }
                        ),
                        value: ie.value[r.key]?.to || "",
                        class: "h-8 rounded-md border border-slate-300 px-2 text-xs",
                        onInput: (n) => ki(
                          r.key,
                          "to",
                          n.target.value
                        )
                      }, null, 40, rp)
                    ], 64)) : Qe.value[r.key] === "boolean" ? (c(), f(R, { key: 1 }, [
                      s("label", np, g(o("filters.value", "Waarde")), 1),
                      s("select", {
                        name: `filter-value-${r.key}`,
                        "aria-label": o(
                          "filters.aria.value_for",
                          "Filter waarde voor :label",
                          {
                            label: x(r)
                          }
                        ),
                        value: ie.value[r.key] ?? "",
                        class: "h-8 rounded-md border border-slate-300 bg-white px-2 text-xs",
                        onChange: (n) => Yr(r.key, n.target.value)
                      }, [
                        s("option", ip, g(o("filters.choose_value", "Kies waarde")), 1),
                        s("option", lp, g(o("common.yes", "Ja")), 1),
                        s("option", op, g(o("common.no", "Nee")), 1)
                      ], 40, ap)
                    ], 64)) : (c(), f(R, { key: 2 }, [
                      Gl(r) ? (c(), f(R, { key: 0 }, [
                        s("label", sp, g(o("filters.option_value", "Waarde uit lijst")), 1),
                        Jl(r) ? (c(), er(ln, {
                          key: 0,
                          name: `filter-option-value-${r.key}`,
                          "aria-label": o(
                            "filters.aria.value_for",
                            "Filter waarde voor :label",
                            {
                              label: x(r)
                            }
                          ),
                          "model-value": ve.value[r.key] ?? "",
                          "display-value": ve.value[r.key] ?? "",
                          items: _n(r),
                          "item-title": "title",
                          "item-value": "value",
                          "search-fields": ["title", "value"],
                          "allow-custom": r.editAutocompleteAllowCustom === !0,
                          "custom-trim": r.editCustomTrim !== !1,
                          "custom-min-length": Number(r.editCustomMinLength || 0),
                          multiple: r.editMultiple === !0,
                          "show-checkboxes": r.editShowCheckboxes === !0 || r.editMultiple === !0,
                          "selection-chips": r.editSelectionChips !== !1,
                          "max-selection-chips": Number(r.editMaxSelectionChips || 3),
                          "close-on-select": ct(r, "editCloseOnSelect") ? r.editCloseOnSelect === !0 : r.editMultiple !== !0,
                          messages: J.value,
                          "onUpdate:modelValue": (n) => wi(r.key, n)
                        }, null, 8, ["name", "aria-label", "model-value", "display-value", "items", "allow-custom", "custom-trim", "custom-min-length", "multiple", "show-checkboxes", "selection-chips", "max-selection-chips", "close-on-select", "messages", "onUpdate:modelValue"])) : (c(), f("select", {
                          key: 1,
                          name: `filter-option-value-${r.key}`,
                          "aria-label": o(
                            "filters.aria.value_for",
                            "Filter waarde voor :label",
                            {
                              label: x(r)
                            }
                          ),
                          value: ve.value[r.key] ?? "",
                          class: A([
                            "rounded-md border border-slate-300 bg-white px-2 text-xs",
                            r.editMultiple === !0 ? "min-h-[120px] py-1" : "h-8"
                          ]),
                          multiple: r.editMultiple === !0,
                          onChange: (n) => wi(
                            r.key,
                            Ts(n.target, r)
                          )
                        }, [
                          r.editMultiple !== !0 ? (c(), f("option", dp, g(o("filters.choose_value", "Kies waarde")), 1)) : C("", !0),
                          (c(!0), f(R, null, X(_n(r), (n) => (c(), f("option", {
                            key: `${r.key}-filter-option-${n.value}`,
                            value: n.value
                          }, g(n.title), 9, cp))), 128))
                        ], 42, up))
                      ], 64)) : (c(), f(R, { key: 1 }, [
                        s("label", fp, g(o("filters.free_text", "Vrije tekst")), 1),
                        s("input", {
                          ref_for: !0,
                          ref: (n) => Rs(r.key, n),
                          name: `filter-value-${r.key}`,
                          "aria-label": o(
                            "filters.aria.value_for",
                            "Filter waarde voor :label",
                            {
                              label: x(r)
                            }
                          ),
                          type: $s(
                            Qe.value[r.key],
                            jt(r.key)
                          ),
                          value: ie.value[r.key] ?? "",
                          class: "h-8 rounded-md border border-slate-300 px-2 text-xs",
                          onInput: (n) => Es(r.key, n)
                        }, null, 40, pp)
                      ], 64))
                    ], 64))
                  ])
                ], 4)) : C("", !0),
                s("button", {
                  type: "button",
                  class: "bg-transparent p-0",
                  "aria-label": o(
                    "table.column.aria.resize_column",
                    "Wijzig breedte van :label",
                    { label: x(r) }
                  ),
                  style: V({
                    position: "absolute",
                    top: "0",
                    bottom: "0",
                    right: "-6px",
                    width: "12px",
                    zIndex: _t(Me).resizeHandle,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "stretch",
                    cursor: "col-resize"
                  }),
                  onMousedown: Ne((n) => xs(n, r.key), ["stop", "prevent"]),
                  onClick: t[37] || (t[37] = Ne(() => {
                  }, ["stop", "prevent"]))
                }, [...t[75] || (t[75] = [
                  s("span", {
                    "aria-hidden": "true",
                    class: "h-full rounded transition-colors group-hover:bg-blue-500",
                    style: {
                      width: "1px",
                      backgroundColor: "transparent"
                    }
                  }, null, -1)
                ])], 44, bp)
              ], 6))), 128))
            ])
          ], 4),
          s("tbody", null, [
            Ie.value ? (c(), f("tr", vp, [
              s("td", {
                colspan: U.value.length + (d.checkboxColumn ? 1 : 0),
                class: "px-3 py-4 text-center text-slate-500"
              }, g(o("table.loading", "Laden...")), 9, gp)
            ])) : Z.value.length === 0 ? (c(), f("tr", yp, [
              s("td", {
                colspan: U.value.length + (d.checkboxColumn ? 1 : 0),
                class: "px-3 py-4 text-center text-slate-500"
              }, [
                s("span", mp, [
                  t[76] || (t[76] = s("i", {
                    class: "mdi mdi-emoticon-confused text-base leading-none",
                    "aria-hidden": "true"
                  }, null, -1)),
                  Y(" " + g(o("table.no_records", "Geen records gevonden.")), 1)
                ])
              ], 8, hp)
            ])) : C("", !0),
            (c(!0), f(R, null, X(Z.value, (r, a) => (c(), f(R, {
              key: `${r[d.idKey] ?? "row"}-${a}`
            }, [
              Vs(r) ? (c(), f("tr", xp, [
                d.checkboxColumn ? (c(), f("td", {
                  key: 0,
                  class: "border-r border-slate-200 px-3 py-2",
                  style: V(
                    Wr(
                      "checkbox",
                      !1,
                      ba
                    )
                  )
                }, null, 4)) : C("", !0),
                (c(!0), f(R, null, X(U.value, (n, u) => (c(), f("td", {
                  key: `create-above-${r[d.idKey]}-${n.key}`,
                  class: A([
                    "px-3 py-2",
                    u < U.value.length - 1 ? "border-r border-slate-200" : ""
                  ]),
                  style: V(yi(n, u))
                }, [
                  s("div", {
                    class: A(["flex items-center", u === 0 ? "gap-2" : ""])
                  }, [
                    u === 0 ? (c(), f("button", {
                      key: 0,
                      type: "button",
                      class: "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded border border-red-200 text-red-600 hover:bg-red-50",
                      "aria-label": o("actions.cancel_new_row", "Annuleer nieuwe rij"),
                      onClick: Ne(Ct, ["stop"])
                    }, [...t[77] || (t[77] = [
                      s("i", { class: "mdi mdi-delete text-base leading-none" }, null, -1)
                    ])], 8, wp)) : C("", !0),
                    s("div", kp, [
                      n.editable ? (c(), f(R, { key: 0 }, [
                        (n.editInput === "select" || n.editInput === "autocomplete") && Array.isArray(n.editItems) ? (c(), er(ln, {
                          key: 0,
                          ref_for: !0,
                          ref: (l) => Jt(
                            n.editField || n.key,
                            l
                          ),
                          name: `create-${n.editField || n.key}`,
                          "aria-label": o(
                            "table.aria.new_value_for",
                            "Nieuwe waarde voor :label",
                            {
                              label: x(n)
                            }
                          ),
                          "data-create-field": n.editField || n.key,
                          "model-value": L.value[n.editField || n.key],
                          "display-value": Tn(n, L.value),
                          items: n.editItems,
                          "item-title": n.editItemTitle || "title",
                          "item-value": n.editItemValue || "value",
                          "search-fields": Array.isArray(n.editSearchFields) ? n.editSearchFields : [],
                          "allow-custom": n.editInput === "autocomplete" && n.editAutocompleteAllowCustom === !0,
                          "custom-trim": n.editCustomTrim !== !1,
                          "custom-min-length": Number(n.editCustomMinLength || 0),
                          multiple: n.editMultiple === !0,
                          "show-checkboxes": n.editShowCheckboxes === !0,
                          "selection-chips": n.editSelectionChips !== !1,
                          "max-selection-chips": Number(n.editMaxSelectionChips || 3),
                          "close-on-select": ct(n, "editCloseOnSelect") ? n.editCloseOnSelect === !0 : n.editMultiple !== !0,
                          invalid: !!ue(n),
                          "error-message": ue(n),
                          "required-missing": vr(n) && gr(
                            L.value[n.editField || n.key]
                          ) && !ue(n),
                          "required-highlight-color": yr(n),
                          messages: J.value,
                          "onUpdate:modelValue": (l) => {
                            L.value[n.editField || n.key] = l, Vt(n), ft();
                          },
                          onResolve: (l) => oi(n, l),
                          onBlur: (l) => Yt(n),
                          onKeydown: Xt
                        }, null, 8, ["name", "aria-label", "data-create-field", "model-value", "display-value", "items", "item-title", "item-value", "search-fields", "allow-custom", "custom-trim", "custom-min-length", "multiple", "show-checkboxes", "selection-chips", "max-selection-chips", "close-on-select", "invalid", "error-message", "required-missing", "required-highlight-color", "messages", "onUpdate:modelValue", "onResolve", "onBlur"])) : n.type === "boolean" ? (c(), f("div", Cp, [
                          s("input", {
                            ref_for: !0,
                            ref: (l) => Jt(
                              n.editField || n.key,
                              l
                            ),
                            "data-create-field": n.editField || n.key,
                            type: "checkbox",
                            name: `create-${n.editField || n.key}`,
                            "aria-label": o(
                              "table.aria.new_value_for",
                              "Nieuwe waarde voor :label",
                              {
                                label: x(n)
                              }
                            ),
                            class: A(
                              ue(n) ? "rounded ring-2 ring-red-400" : ""
                            ),
                            checked: !!L.value[n.editField || n.key],
                            onChange: (l) => {
                              L.value[n.editField || n.key] = l.target.checked, Vt(n), ft();
                            },
                            onBlur: (l) => Yt(n),
                            onKeydown: Xt
                          }, null, 42, _p),
                          ue(n) ? (c(), f("span", Sp, g(ue(n)), 1)) : C("", !0)
                        ])) : (c(), f("div", Mp, [
                          s("input", {
                            ref_for: !0,
                            ref: (l) => Jt(
                              n.editField || n.key,
                              l
                            ),
                            "data-create-field": n.editField || n.key,
                            type: n.type === "number" ? "number" : "text",
                            name: `create-${n.editField || n.key}`,
                            "aria-label": o(
                              "table.aria.new_value_for",
                              "Nieuwe waarde voor :label",
                              {
                                label: x(n)
                              }
                            ),
                            value: L.value[n.editField || n.key] ?? "",
                            "aria-invalid": ue(n) ? "true" : "false",
                            class: A([
                              "h-8 w-full rounded border px-2 text-sm",
                              ue(n) ? "border-red-400 bg-red-50" : "border-slate-300"
                            ]),
                            style: V(Ei(n)),
                            onInput: (l) => {
                              L.value[n.editField || n.key] = l.target.value, Vt(n), ft();
                            },
                            onBlur: (l) => Yt(n),
                            onKeydown: Xt
                          }, null, 46, Fp),
                          ue(n) ? (c(), f("span", Op, g(ue(n)), 1)) : C("", !0)
                        ]))
                      ], 64)) : (c(), f("span", Ip, "-"))
                    ])
                  ], 2)
                ], 6))), 128))
              ])) : C("", !0),
              s("tr", {
                class: A(["group hover:bg-slate-100/90", su()]),
                onClick: (n) => fu(a),
                onMouseover: (n) => du(r),
                onMouseleave: (n) => cu(r)
              }, [
                d.checkboxColumn ? (c(), f("td", {
                  key: 0,
                  class: "border-r border-slate-200 px-3 py-2",
                  style: V(
                    Pi(
                      Wr(),
                      r,
                      a
                    )
                  )
                }, [
                  s("input", {
                    type: "checkbox",
                    name: `row-select-${r[d.idKey]}`,
                    "aria-label": o("table.aria.select_row", "Selecteer rij :id", {
                      id: r[d.idKey]
                    }),
                    checked: d.checkedRows.includes(r[d.idKey]),
                    onChange: (n) => Yo(r[d.idKey]),
                    onClick: t[38] || (t[38] = Ne(() => {
                    }, ["stop"]))
                  }, null, 40, Rp)
                ], 4)) : C("", !0),
                (c(!0), f(R, null, X(U.value, (n, u) => (c(), f("td", {
                  key: `${r[d.idKey] ?? a}-${n.key}`,
                  class: A(["relative px-3 py-2 text-slate-700", [
                    fs(n),
                    u < U.value.length - 1 ? "border-r border-slate-200" : "",
                    ws(r, n, a, u)
                  ]]),
                  style: V(
                    Pi(
                      hs(r, n, a, u),
                      r,
                      a
                    )
                  ),
                  onClick: Ne((l) => qo(n, r, a, u), ["stop"])
                }, [
                  Xn(r, u) ? (c(), f("div", Tp, [
                    s("button", {
                      type: "button",
                      class: A([
                        "rw-btn-hover inline-flex h-7 w-7 items-center justify-center rounded border border-input bg-background text-slate-600 shadow-sm transition-opacity",
                        ou(r) ? "opacity-100" : "opacity-0 focus:opacity-100 group-hover:opacity-100"
                      ]),
                      onClick: Ne((l) => Di(r[d.idKey]), ["stop"])
                    }, [...t[78] || (t[78] = [
                      s("i", { class: "mdi mdi-dots-vertical text-base leading-none" }, null, -1)
                    ])], 10, jp),
                    Yn(r[d.idKey]) ? (c(), f("div", {
                      key: 0,
                      class: A(["absolute left-full ml-1 min-w-56 max-h-72 overflow-y-auto rounded-lg border border-slate-200 bg-white shadow-xl", bs(a)]),
                      style: V(_t(Fl))
                    }, [
                      s("div", $p, [
                        s("button", {
                          type: "button",
                          class: "rw-btn-hover inline-flex h-8 items-center rounded border border-input bg-background px-2 text-sm text-slate-700 shadow-sm",
                          onClick: t[39] || (t[39] = Ne((l) => Ye.value = null, ["stop"]))
                        }, [
                          t[79] || (t[79] = s("i", { class: "mdi mdi-arrow-left-circle mr-1 text-base leading-none" }, null, -1)),
                          Y(" " + g(o("actions.back", "Terug")), 1)
                        ])
                      ]),
                      s("div", zp, [
                        (c(!0), f(R, null, X(Qs(r), (l, b) => (c(), f("button", {
                          key: `${r[d.idKey]}-${b}`,
                          type: "button",
                          disabled: l.disabled,
                          class: "rw-btn-hover flex w-full items-center gap-2 whitespace-nowrap rounded px-2 py-1.5 text-left text-sm text-slate-700 disabled:opacity-40",
                          onClick: Ne((y) => Zs(l, r), ["stop"])
                        }, [
                          l.icon ? (c(), f("i", {
                            key: 0,
                            class: A(["mdi text-base leading-none", l.icon])
                          }, null, 2)) : C("", !0),
                          Y(" " + g(l.label), 1)
                        ], 8, Vp))), 128))
                      ])
                    ], 6)) : C("", !0)
                  ])) : C("", !0),
                  Jr(r, n) ? (c(), f(R, { key: 1 }, [
                    (n.editInput === "select" || n.editInput === "autocomplete") && Array.isArray(n.editItems) ? (c(), er(ln, {
                      key: 0,
                      ref_for: !0,
                      ref: (l) => Gn(r[d.idKey], n.key, l),
                      name: `edit-${r[d.idKey]}-${n.editField || n.key}`,
                      "aria-label": o("table.aria.edit_field", "Bewerk :label", {
                        label: x(n)
                      }),
                      "model-value": Se.value,
                      "display-value": Tn(n, r),
                      items: n.editItems,
                      "item-title": n.editItemTitle || "title",
                      "item-value": n.editItemValue || "value",
                      "search-fields": Array.isArray(n.editSearchFields) ? n.editSearchFields : [],
                      "allow-custom": n.editInput === "autocomplete" && n.editAutocompleteAllowCustom === !0,
                      "custom-trim": n.editCustomTrim !== !1,
                      "custom-min-length": Number(n.editCustomMinLength || 0),
                      multiple: n.editMultiple === !0,
                      "show-checkboxes": n.editShowCheckboxes === !0,
                      "selection-chips": n.editSelectionChips !== !1,
                      "max-selection-chips": Number(n.editMaxSelectionChips || 3),
                      "close-on-select": ct(n, "editCloseOnSelect") ? n.editCloseOnSelect === !0 : n.editMultiple !== !0,
                      invalid: !!tt(r[d.idKey], n),
                      "error-message": tt(r[d.idKey], n),
                      "required-missing": vr(n) && gr(Se.value) && !tt(r[d.idKey], n),
                      "required-highlight-color": yr(n),
                      messages: J.value,
                      "onUpdate:modelValue": (l) => {
                        Se.value = l, Xr(r[d.idKey], n), ft();
                      },
                      onResolve: (l) => Qo(n, l),
                      onBlur: (l) => Hn(r, n),
                      onKeydown: Wn
                    }, null, 8, ["name", "aria-label", "model-value", "display-value", "items", "item-title", "item-value", "search-fields", "allow-custom", "custom-trim", "custom-min-length", "multiple", "show-checkboxes", "selection-chips", "max-selection-chips", "close-on-select", "invalid", "error-message", "required-missing", "required-highlight-color", "messages", "onUpdate:modelValue", "onResolve", "onBlur"])) : n.type === "boolean" ? (c(), f("div", Lp, [
                      s("input", {
                        ref_for: !0,
                        ref: (l) => Gn(r[d.idKey], n.key, l),
                        type: "checkbox",
                        name: `edit-${r[d.idKey]}-${n.editField || n.key}`,
                        "aria-label": o("table.aria.edit_field", "Bewerk :label", {
                          label: x(n)
                        }),
                        class: A(
                          tt(r[d.idKey], n) ? "rounded ring-2 ring-red-400" : ""
                        ),
                        checked: !!Se.value,
                        onChange: (l) => {
                          Se.value = l.target.checked, Xr(r[d.idKey], n), ft();
                        },
                        onBlur: (l) => Hn(r, n),
                        onKeydown: Wn
                      }, null, 42, Dp),
                      tt(r[d.idKey], n) ? (c(), f("span", Np, g(tt(r[d.idKey], n)), 1)) : C("", !0)
                    ])) : (c(), f("div", Pp, [
                      s("input", {
                        ref_for: !0,
                        ref: (l) => Gn(r[d.idKey], n.key, l),
                        type: n.type === "number" ? "number" : "text",
                        name: `edit-${r[d.idKey]}-${n.editField || n.key}`,
                        "aria-label": o("table.aria.edit_field", "Bewerk :label", {
                          label: x(n)
                        }),
                        value: Se.value,
                        "aria-invalid": tt(r[d.idKey], n) ? "true" : "false",
                        class: A([
                          "h-8 w-full rounded border px-2 text-sm",
                          tt(r[d.idKey], n) ? "border-red-400 bg-red-50" : "border-slate-300"
                        ]),
                        style: V(Ws(r, n)),
                        onInput: (l) => {
                          Se.value = l.target.value, Xr(r[d.idKey], n), ft();
                        },
                        onBlur: (l) => Hn(r, n),
                        onKeydown: Wn
                      }, null, 46, Bp),
                      tt(r[d.idKey], n) ? (c(), f("span", Kp, g(tt(r[d.idKey], n)), 1)) : C("", !0)
                    ]))
                  ], 64)) : (c(), f("div", {
                    key: 2,
                    class: A(["flex w-full min-w-0 items-center", [
                      ss(n),
                      us(
                        n,
                        Xn(r, u)
                      )
                    ]])
                  }, [
                    jn(n) ? (c(), f("i", {
                      key: 0,
                      class: A(["mdi text-base leading-none", es(n, r)]),
                      style: V({
                        color: ts(n, r)
                      })
                    }, null, 6)) : ns(n, r) ? (c(), f("span", {
                      key: 1,
                      class: A(os(n)),
                      style: V(ls(n, r))
                    }, [
                      n.chipPrependIcon ? (c(), f("i", {
                        key: 0,
                        class: A(["mdi text-[14px] leading-none", n.chipPrependIcon])
                      }, null, 2)) : C("", !0),
                      s("span", Up, g(ci(n, r)), 1)
                    ], 6)) : is(n, r) ? (c(), f("span", qp, [
                      (c(!0), f(R, null, X(as(
                        n,
                        r
                      ), (l, b) => (c(), f("span", {
                        key: `multi-chip-${b}`,
                        class: "inline-flex max-w-full items-center rounded-full border border-slate-300 bg-slate-100 px-2 py-0.5 text-xs font-medium leading-5 text-slate-700"
                      }, [
                        s("span", Hp, g(l), 1)
                      ]))), 128)),
                      pi(n, r) > 0 ? (c(), f("span", Wp, " +" + g(pi(n, r)), 1)) : C("", !0)
                    ])) : (c(), f("span", {
                      key: 3,
                      class: A(ps(n, r))
                    }, g(En(r, n)), 3))
                  ], 2))
                ], 14, Ep))), 128))
              ], 42, Ap)
            ], 64))), 128)),
            Oa.value ? (c(), f("tr", Gp, [
              d.checkboxColumn ? (c(), f("td", {
                key: 0,
                class: "border-r border-slate-200 px-3 py-2",
                style: V(
                  Wr(
                    "checkbox",
                    !1,
                    ba
                  )
                )
              }, null, 4)) : C("", !0),
              (c(!0), f(R, null, X(U.value, (r, a) => (c(), f("td", {
                key: `create-${r.key}`,
                class: A([
                  "px-3 py-2",
                  a < U.value.length - 1 ? "border-r border-slate-200" : ""
                ]),
                style: V(yi(r, a))
              }, [
                s("div", {
                  class: A(["flex items-center", a === 0 ? "gap-2" : ""])
                }, [
                  a === 0 ? (c(), f("button", {
                    key: 0,
                    type: "button",
                    class: "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded border border-red-200 text-red-600 hover:bg-red-50",
                    "aria-label": o("actions.cancel_new_row", "Annuleer nieuwe rij"),
                    onClick: Ne(Ct, ["stop"])
                  }, [...t[80] || (t[80] = [
                    s("i", { class: "mdi mdi-delete text-base leading-none" }, null, -1)
                  ])], 8, Yp)) : C("", !0),
                  s("div", Xp, [
                    r.editable ? (c(), f(R, { key: 0 }, [
                      (r.editInput === "select" || r.editInput === "autocomplete") && Array.isArray(r.editItems) ? (c(), er(ln, {
                        key: 0,
                        ref_for: !0,
                        ref: (n) => Jt(
                          r.editField || r.key,
                          n
                        ),
                        name: `create-${r.editField || r.key}`,
                        "aria-label": o(
                          "table.aria.new_value_for",
                          "Nieuwe waarde voor :label",
                          {
                            label: x(r)
                          }
                        ),
                        "data-create-field": r.editField || r.key,
                        "model-value": L.value[r.editField || r.key],
                        "display-value": Tn(r, L.value),
                        items: r.editItems,
                        "item-title": r.editItemTitle || "title",
                        "item-value": r.editItemValue || "value",
                        "search-fields": Array.isArray(r.editSearchFields) ? r.editSearchFields : [],
                        "allow-custom": r.editInput === "autocomplete" && r.editAutocompleteAllowCustom === !0,
                        "custom-trim": r.editCustomTrim !== !1,
                        "custom-min-length": Number(r.editCustomMinLength || 0),
                        multiple: r.editMultiple === !0,
                        "show-checkboxes": r.editShowCheckboxes === !0,
                        "selection-chips": r.editSelectionChips !== !1,
                        "max-selection-chips": Number(r.editMaxSelectionChips || 3),
                        "close-on-select": ct(r, "editCloseOnSelect") ? r.editCloseOnSelect === !0 : r.editMultiple !== !0,
                        invalid: !!ue(r),
                        "error-message": ue(r),
                        "required-missing": vr(r) && gr(
                          L.value[r.editField || r.key]
                        ) && !ue(r),
                        "required-highlight-color": yr(r),
                        messages: J.value,
                        "onUpdate:modelValue": (n) => {
                          L.value[r.editField || r.key] = n, Vt(r), ft();
                        },
                        onResolve: (n) => oi(r, n),
                        onBlur: (n) => Yt(r),
                        onKeydown: Xt
                      }, null, 8, ["name", "aria-label", "data-create-field", "model-value", "display-value", "items", "item-title", "item-value", "search-fields", "allow-custom", "custom-trim", "custom-min-length", "multiple", "show-checkboxes", "selection-chips", "max-selection-chips", "close-on-select", "invalid", "error-message", "required-missing", "required-highlight-color", "messages", "onUpdate:modelValue", "onResolve", "onBlur"])) : r.type === "boolean" ? (c(), f("div", Jp, [
                        s("input", {
                          ref_for: !0,
                          ref: (n) => Jt(
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
                              label: x(r)
                            }
                          ),
                          class: A(
                            ue(r) ? "rounded ring-2 ring-red-400" : ""
                          ),
                          checked: !!L.value[r.editField || r.key],
                          onChange: (n) => {
                            L.value[r.editField || r.key] = n.target.checked, Vt(r), ft();
                          },
                          onBlur: (n) => Yt(r),
                          onKeydown: Xt
                        }, null, 42, Qp),
                        ue(r) ? (c(), f("span", Zp, g(ue(r)), 1)) : C("", !0)
                      ])) : (c(), f("div", eb, [
                        s("input", {
                          ref_for: !0,
                          ref: (n) => Jt(
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
                              label: x(r)
                            }
                          ),
                          value: L.value[r.editField || r.key] ?? "",
                          "aria-invalid": ue(r) ? "true" : "false",
                          class: A([
                            "h-8 w-full rounded border px-2 text-sm",
                            ue(r) ? "border-red-400 bg-red-50" : "border-slate-300"
                          ]),
                          style: V(Ei(r)),
                          onInput: (n) => {
                            L.value[r.editField || r.key] = n.target.value, Vt(r), ft();
                          },
                          onBlur: (n) => Yt(r),
                          onKeydown: Xt
                        }, null, 46, tb),
                        ue(r) ? (c(), f("span", rb, g(ue(r)), 1)) : C("", !0)
                      ]))
                    ], 64)) : (c(), f("span", nb, "-"))
                  ])
                ], 2)
              ], 6))), 128))
            ])) : C("", !0)
          ])
        ], 4),
        s("div", {
          ref_key: "infiniteSentinelRef",
          ref: ce,
          class: "h-1 w-full"
        }, null, 512)
      ], 6),
      s("div", ab, [
        !Ve.value && Ut.value > 1 ? (c(), f("div", ib, [
          (c(!0), f(R, null, X(Vl.value, (r, a) => (c(), f("button", {
            key: `pagination-${a}-${r}`,
            type: "button",
            class: A(["inline-flex h-8 min-w-8 items-center justify-center border border-input bg-background px-2 text-xs text-slate-700 shadow-sm", [
              a > 0 ? "-ml-px" : "",
              r === Q.value ? "z-10 bg-blue-50 font-semibold text-blue-700" : "rw-btn-hover",
              r === "..." ? "cursor-default text-slate-400 hover:bg-white" : ""
            ]]),
            disabled: r === "...",
            onClick: (n) => Uo(r)
          }, g(r), 11, lb))), 128))
        ])) : C("", !0),
        s("div", ob, [
          Et.value ? (c(), f("p", sb, g(o("table.record_count", "Aantal rijen: :count", {
            count: Fa.value
          })), 1)) : C("", !0)
        ])
      ])
    ], 512));
  }
}, vb = /* @__PURE__ */ yl(db, [["__scopeId", "data-v-a7bbb342"]]);
export {
  vb as RwTable,
  pb as rwTableContract,
  bb as rwTableFeatureMatrix
};
//# sourceMappingURL=index.js.map
