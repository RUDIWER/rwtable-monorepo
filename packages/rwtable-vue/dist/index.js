import { ref as h, computed as S, watch as X, nextTick as ne, onBeforeUnmount as pl, openBlock as c, createElementBlock as f, normalizeStyle as z, normalizeClass as E, createElementVNode as o, Fragment as T, renderList as J, toDisplayString as g, withModifiers as Pe, createCommentVNode as F, createBlock as tr, Teleport as Ji, createTextVNode as Z, onMounted as _u, unref as _t, withDirectives as Ce, vModelText as rn, vModelSelect as vt, vModelCheckbox as nn } from "vue";
import { usePage as Mu, router as Fu } from "@inertiajs/vue3";
const yp = {
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
}, mp = {
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
function Ou(d) {
  return d && d.__esModule && Object.prototype.hasOwnProperty.call(d, "default") ? d.default : d;
}
var ea, Qi;
function vl() {
  if (Qi) return ea;
  Qi = 1;
  function d(m) {
    var i = typeof m;
    return m != null && (i == "object" || i == "function");
  }
  return ea = d, ea;
}
var ta, el;
function Iu() {
  if (el) return ta;
  el = 1;
  var d = typeof an == "object" && an && an.Object === Object && an;
  return ta = d, ta;
}
var ra, tl;
function gl() {
  if (tl) return ra;
  tl = 1;
  var d = Iu(), m = typeof self == "object" && self && self.Object === Object && self, i = d || m || Function("return this")();
  return ra = i, ra;
}
var na, rl;
function Au() {
  if (rl) return na;
  rl = 1;
  var d = gl(), m = function() {
    return d.Date.now();
  };
  return na = m, na;
}
var aa, nl;
function Ru() {
  if (nl) return aa;
  nl = 1;
  var d = /\s/;
  function m(i) {
    for (var v = i.length; v-- && d.test(i.charAt(v)); )
      ;
    return v;
  }
  return aa = m, aa;
}
var ia, al;
function Eu() {
  if (al) return ia;
  al = 1;
  var d = Ru(), m = /^\s+/;
  function i(v) {
    return v && v.slice(0, d(v) + 1).replace(m, "");
  }
  return ia = i, ia;
}
var la, il;
function yl() {
  if (il) return la;
  il = 1;
  var d = gl(), m = d.Symbol;
  return la = m, la;
}
var oa, ll;
function Tu() {
  if (ll) return oa;
  ll = 1;
  var d = yl(), m = Object.prototype, i = m.hasOwnProperty, v = m.toString, w = d ? d.toStringTag : void 0;
  function V(D) {
    var P = i.call(D, w), _ = D[w];
    try {
      D[w] = void 0;
      var s = !0;
    } catch {
    }
    var M = v.call(D);
    return s && (P ? D[w] = _ : delete D[w]), M;
  }
  return oa = V, oa;
}
var sa, ol;
function ju() {
  if (ol) return sa;
  ol = 1;
  var d = Object.prototype, m = d.toString;
  function i(v) {
    return m.call(v);
  }
  return sa = i, sa;
}
var ua, sl;
function $u() {
  if (sl) return ua;
  sl = 1;
  var d = yl(), m = Tu(), i = ju(), v = "[object Null]", w = "[object Undefined]", V = d ? d.toStringTag : void 0;
  function D(P) {
    return P == null ? P === void 0 ? w : v : V && V in Object(P) ? m(P) : i(P);
  }
  return ua = D, ua;
}
var da, ul;
function zu() {
  if (ul) return da;
  ul = 1;
  function d(m) {
    return m != null && typeof m == "object";
  }
  return da = d, da;
}
var ca, dl;
function Vu() {
  if (dl) return ca;
  dl = 1;
  var d = $u(), m = zu(), i = "[object Symbol]";
  function v(w) {
    return typeof w == "symbol" || m(w) && d(w) == i;
  }
  return ca = v, ca;
}
var fa, cl;
function Du() {
  if (cl) return fa;
  cl = 1;
  var d = Eu(), m = vl(), i = Vu(), v = NaN, w = /^[-+]0x[0-9a-f]+$/i, V = /^0b[01]+$/i, D = /^0o[0-7]+$/i, P = parseInt;
  function _(s) {
    if (typeof s == "number")
      return s;
    if (i(s))
      return v;
    if (m(s)) {
      var M = typeof s.valueOf == "function" ? s.valueOf() : s;
      s = m(M) ? M + "" : M;
    }
    if (typeof s != "string")
      return s === 0 ? s : +s;
    s = d(s);
    var k = V.test(s);
    return k || D.test(s) ? P(s.slice(2), k ? 2 : 8) : w.test(s) ? v : +s;
  }
  return fa = _, fa;
}
var ba, fl;
function Lu() {
  if (fl) return ba;
  fl = 1;
  var d = vl(), m = Au(), i = Du(), v = "Expected a function", w = Math.max, V = Math.min;
  function D(P, _, s) {
    var M, k, fe, je, de, he, ve = 0, Q = !1, W = !1, $e = !0;
    if (typeof P != "function")
      throw new TypeError(v);
    _ = i(_) || 0, d(s) && (Q = !!s.leading, W = "maxWait" in s, fe = W ? w(i(s.maxWait) || 0, _) : fe, $e = "trailing" in s ? !!s.trailing : $e);
    function Se(B) {
      var le = M, oe = k;
      return M = k = void 0, ve = B, je = P.apply(oe, le), je;
    }
    function $(B) {
      return ve = B, de = setTimeout(xe, _), Q ? Se(B) : je;
    }
    function Ye(B) {
      var le = B - he, oe = B - ve, se = _ - le;
      return W ? V(se, fe - oe) : se;
    }
    function Ie(B) {
      var le = B - he, oe = B - ve;
      return he === void 0 || le >= _ || le < 0 || W && oe >= fe;
    }
    function xe() {
      var B = m();
      if (Ie(B))
        return Ae(B);
      de = setTimeout(xe, Ye(B));
    }
    function Ae(B) {
      return de = void 0, $e && M ? Se(B) : (M = k = void 0, je);
    }
    function Be() {
      de !== void 0 && clearTimeout(de), ve = 0, M = he = k = de = void 0;
    }
    function ae() {
      return de === void 0 ? je : Ae(m());
    }
    function we() {
      var B = m(), le = Ie(B);
      if (M = arguments, k = this, he = B, le) {
        if (de === void 0)
          return $(he);
        if (W)
          return clearTimeout(de), de = setTimeout(xe, _), Se(he);
      }
      return de === void 0 && (de = setTimeout(xe, _)), je;
    }
    return we.cancel = Be, we.flush = ae, we;
  }
  return ba = D, ba;
}
var Nu = Lu();
const Pu = /* @__PURE__ */ Ou(Nu), ml = (d, m) => {
  const i = d.__vccOpts || d;
  for (const [v, w] of m)
    i[v] = w;
  return i;
}, Bu = { class: "flex w-full flex-wrap items-center gap-1" }, Ku = { class: "truncate" }, Uu = ["disabled", "onClick"], qu = {
  key: 0,
  class: "inline-flex items-center rounded-full border border-slate-300 bg-slate-100 px-2 py-0.5 text-xs text-slate-600"
}, Hu = ["name", "aria-label", "aria-invalid", "aria-expanded", "data-create-field", "disabled", "value"], Wu = ["name", "aria-label", "aria-invalid", "aria-expanded", "data-create-field", "disabled", "value"], Gu = ["disabled"], Yu = ["onClick"], Xu = { class: "inline-flex items-center gap-2" }, Zu = {
  key: 1,
  class: "px-2 py-1.5 text-xs text-slate-500"
}, Ju = {
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
  setup(d, { expose: m, emit: i }) {
    const v = d, w = i, V = h(null), D = h(null), P = h(null), _ = h(!1), s = h(!1), M = h(""), k = h(-1), fe = h(!1), je = h(224), de = h(null), he = h(!1), ve = h(!1), Q = h({
      left: "0px",
      top: "0px",
      maxWidth: "280px",
      transform: "none"
    }), W = h({
      left: "0px",
      top: "0px",
      width: "0px",
      maxHeight: "224px",
      transform: "none"
    });
    function $e(b, x) {
      return !b || typeof b != "object" ? null : String(x || "").split(".").filter((O) => O !== "").reduce((O, N) => !O || typeof O != "object" || !Object.prototype.hasOwnProperty.call(O, N) ? null : O[N], b);
    }
    function Se(b, x = "", O = {}) {
      const N = $e(v.messages, b), q = typeof N == "string" ? N : x || b;
      return Object.entries(O).reduce((re, [qe, tt]) => re.replaceAll(`:${qe}`, String(tt ?? "")), q);
    }
    function $(b) {
      return typeof v.itemValue == "function" ? v.itemValue(b) : b !== null && typeof b == "object" ? b?.[v.itemValue] : b;
    }
    function Ye(b) {
      if (typeof v.itemTitle == "function") {
        const x = v.itemTitle(b);
        return x == null ? "" : String(x);
      }
      if (b !== null && typeof b == "object") {
        const x = b?.[v.itemTitle];
        return x == null ? "" : String(x);
      }
      return b == null ? "" : String(b);
    }
    function Ie(b) {
      return String(b ?? "").toLowerCase();
    }
    function xe(b) {
      return Array.isArray(b) ? [...b] : b == null || b === "" ? [] : [b];
    }
    function Ae(b, x) {
      return b.some((O) => String(O) === String(x));
    }
    function Be(b, x) {
      return b.filter((O) => String(O) !== String(x));
    }
    const ae = S(() => v.multiple ? xe(v.modelValue) : []), we = S(() => v.multiple ? null : v.items.find(
      (b) => String($(b)) === String(v.modelValue)
    ) ?? null), B = S(() => v.multiple ? v.items.filter(
      (b) => Ae(ae.value, $(b))
    ) : []), le = S(() => we.value ? Ye(we.value) : v.allowCustom && typeof v.modelValue == "string" && v.modelValue !== null && v.modelValue !== void 0 ? String(v.modelValue) : ""), oe = S(() => v.multiple ? "" : v.displayValue !== null && v.displayValue !== void 0 ? String(v.displayValue) : le.value), se = S(() => {
      const b = Ie(M.value).trim();
      return b ? v.items.filter((x) => {
        const O = [Ye(x)];
        return x && typeof x == "object" && v.searchFields.forEach((N) => {
          O.push(x?.[N]);
        }), O.some(
          (N) => Ie(N).includes(b)
        );
      }) : v.items;
    }), Xe = S(() => v.multiple || s.value ? M.value : oe.value), Mt = S(() => {
      const b = Number(v.maxSelectionChips || 0);
      return !Number.isFinite(b) || b <= 0 ? 3 : Math.max(1, Math.floor(b));
    }), dt = S(() => !v.multiple || v.selectionChips !== !0 ? [] : B.value.slice(0, Mt.value)), rr = S(() => !v.multiple || v.selectionChips !== !0 ? 0 : Math.max(
      0,
      B.value.length - Mt.value
    )), Ke = S(() => v.invalid ? {
      borderColor: "rgb(239 68 68)",
      boxShadow: "0 0 0 1px rgba(239, 68, 68, 0.2)"
    } : v.requiredMissing ? {
      backgroundColor: v.requiredHighlightColor
    } : null), _e = S(() => v.invalid ? "h-8 w-full rounded border bg-white px-2 pr-7 text-sm outline-none focus:border-red-500 focus:outline-none focus:ring-0 focus-visible:border-red-500 focus-visible:outline-none focus-visible:ring-0" : "h-8 w-full rounded border border-slate-300 bg-white px-2 pr-7 text-sm outline-none focus:border-slate-300 focus:outline-none focus:ring-0 focus-visible:border-slate-300 focus-visible:outline-none focus-visible:ring-0"), Ze = S(() => v.invalid ? "min-h-8 w-full rounded border bg-white px-2 py-1 pr-7 text-sm" : "min-h-8 w-full rounded border border-slate-300 bg-white px-2 py-1 pr-7 text-sm"), Me = S(() => "basis-full w-full min-w-0 flex-none appearance-none border-0 bg-transparent p-0 text-sm leading-6 text-slate-700 shadow-none outline-none ring-0 focus:border-0 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:text-slate-400 caret-slate-500"), Ft = S(() => ({
      border: "0",
      outline: "none",
      boxShadow: "none",
      background: "transparent"
    })), Je = S(() => v.invalid === !0 && typeof v.errorMessage == "string" && v.errorMessage.trim() !== "");
    X(se, (b) => {
      if (!_.value) {
        k.value = -1;
        return;
      }
      if (b.length === 0) {
        k.value = -1;
        return;
      }
      if (v.allowCustom && !v.multiple && U(M.value) !== "") {
        (k.value < 0 || k.value >= b.length) && (k.value = -1);
        return;
      }
      (k.value < 0 || k.value >= b.length) && (k.value = 0);
    }), X(
      () => v.modelValue,
      () => {
        s.value || (M.value = "");
      }
    );
    function ze() {
      v.disabled || (_.value = !0, se.value.length > 0 && k.value < 0 && !(v.allowCustom && !v.multiple && U(M.value) !== "") && (k.value = 0), ne(() => {
        requestAnimationFrame(() => {
          K();
        });
      }));
    }
    function L() {
      _.value = !1, k.value = -1;
    }
    function K() {
      if (!_.value || typeof window > "u")
        return;
      const b = D.value?.getBoundingClientRect?.();
      if (!b)
        return;
      const x = window.innerHeight || document.documentElement?.clientHeight || 0, O = window.innerWidth || document.documentElement?.clientWidth || 0, N = 8, q = Math.max(0, x - b.bottom - N), re = Math.max(0, b.top - N), qe = Math.min(260, P.value?.scrollHeight ?? 224), tt = 120, it = Math.min(180, qe), At = b.bottom + qe > x - N, Kt = Math.max(
        tt,
        Math.min(qe, 220)
      ), ir = re >= Kt, Rt = q >= Kt, Fe = b.top > x * 0.6 && re > q;
      fe.value = !Rt && re > 0 || At && re > 0 || Fe && ir || q < it && re > q || q <= 0 && re > 0;
      const dn = fe.value ? re : q;
      je.value = Math.max(
        tt,
        Math.min(Math.max(dn, tt), qe)
      );
      const He = Math.max(220, Math.round(b.width)), me = Math.max(8, Math.min(b.left, O - He - 8)), ct = fe.value ? Math.max(8, b.top - N) : Math.min(x - 8, b.bottom + N);
      W.value = {
        left: `${Math.round(me)}px`,
        top: `${Math.round(ct)}px`,
        width: `${Math.round(He)}px`,
        maxHeight: `${Math.round(je.value)}px`,
        transform: fe.value ? "translateY(-100%)" : "none"
      };
    }
    function G() {
      K(), he.value && ie();
    }
    function ie() {
      if (!he.value || typeof window > "u")
        return;
      const b = V.value?.getBoundingClientRect?.();
      if (!b)
        return;
      const x = window.innerHeight || document.documentElement?.clientHeight || 0, O = window.innerWidth || document.documentElement?.clientWidth || 0, N = 8, q = Math.max(
        36,
        Number(de.value?.offsetHeight || 44)
      ), re = Math.max(
        180,
        Math.min(320, Number(de.value?.offsetWidth || 240))
      ), qe = Math.max(0, x - b.bottom - N), tt = Math.max(0, b.top - N);
      ve.value = qe < q + 10 && tt > 0 || b.top > x * 0.6 && tt > qe;
      const it = Math.max(
        8,
        Math.min(
          b.left + b.width / 2 - re / 2,
          O - re - 8
        )
      ), At = ve.value ? Math.max(8, b.top - N) : Math.min(x - 8, b.bottom + N);
      Q.value = {
        left: `${Math.round(it)}px`,
        top: `${Math.round(At)}px`,
        maxWidth: `${Math.round(re)}px`,
        transform: ve.value ? "translateY(-100%)" : "none"
      };
    }
    function ge() {
      Je.value && (he.value = !0, ne(() => {
        requestAnimationFrame(() => {
          ie();
        });
      }));
    }
    function Te() {
      he.value = !1;
    }
    function Qe() {
      ge();
    }
    function nr() {
      Te();
    }
    function gt(b) {
      if (v.multiple) {
        et(b);
        return;
      }
      const x = $(b), O = Ye(b);
      w("update:modelValue", x), w("resolve", {
        kind: "item",
        value: x,
        label: O,
        item: b
      }), M.value = O, L();
    }
    function ar(b) {
      return v.multiple ? Ae(ae.value, $(b)) : !1;
    }
    function Re(b, x = null) {
      const O = v.items.filter(
        (N) => Ae(b, $(N))
      );
      w("update:modelValue", b), w("resolve", {
        kind: "multiple",
        values: b,
        items: O,
        item: x
      });
    }
    function et(b) {
      const x = $(b), O = xe(v.modelValue), q = Ae(O, x) ? Be(O, x) : [...O, x];
      Re(q, b), v.closeOnSelect ? L() : ne(() => {
        requestAnimationFrame(() => {
          K();
        });
      });
    }
    function Bt(b) {
      if (!v.multiple)
        return;
      const x = xe(v.modelValue), O = Be(x, b);
      Re(O);
    }
    function U(b) {
      const x = b == null ? "" : String(b);
      return v.customTrim ? x.trim() : x;
    }
    function ye(b) {
      if (!v.allowCustom || v.multiple)
        return !1;
      const x = U(b);
      return x.length < Math.max(0, Number(v.customMinLength || 0)) || x === "" ? !1 : (w("update:modelValue", x), w("resolve", {
        kind: "custom",
        value: x,
        label: x,
        input: x
      }), M.value = x, L(), !0);
    }
    function Ve(b) {
      const x = se.value;
      if (x.length === 0) {
        k.value = -1;
        return;
      }
      if (k.value < 0) {
        k.value = b > 0 ? 0 : x.length - 1;
        return;
      }
      const O = k.value + b;
      if (O < 0) {
        k.value = x.length - 1;
        return;
      }
      if (O >= x.length) {
        k.value = 0;
        return;
      }
      k.value = O;
    }
    function be(b) {
      v.disabled || (s.value = !0, M.value = v.multiple ? "" : oe.value, w("focus", b), ge(), ne(() => {
        typeof V.value?.select == "function" && V.value.select();
      }));
    }
    function yt(b) {
      const x = U(M.value), O = U(le.value);
      !v.multiple && v.allowCustom && x !== "" && x !== O && ye(M.value), s.value = !1, M.value = "", L(), w("blur", b), ne(() => {
        requestAnimationFrame(() => {
          if (Je.value) {
            ge();
            return;
          }
          Te();
        });
      });
    }
    function Ot(b) {
      M.value = b.target.value, v.allowCustom && !v.multiple && (k.value = -1), ze(), ne(() => {
        requestAnimationFrame(() => {
          K();
        });
      });
    }
    function ce(b) {
      if (v.disabled) {
        w("keydown", b);
        return;
      }
      if (b.altKey && b.key === "ArrowDown") {
        b.preventDefault(), ze(), w("keydown", b);
        return;
      }
      if (b.altKey && b.key === "ArrowUp") {
        b.preventDefault(), _.value && L(), w("keydown", b);
        return;
      }
      if (b.key === "ArrowDown") {
        _.value && (b.preventDefault(), Ve(1)), w("keydown", b);
        return;
      }
      if (b.key === "ArrowUp") {
        _.value && (b.preventDefault(), Ve(-1)), w("keydown", b);
        return;
      }
      if (b.key === "Enter") {
        if (_.value) {
          if (b.preventDefault(), v.allowCustom && !v.multiple && M.value !== "" && k.value < 0) {
            ye(M.value), w("keydown", b);
            return;
          }
          const x = se.value[k.value] ?? se.value[0] ?? null;
          x && gt(x);
        }
        w("keydown", b);
        return;
      }
      if (b.key === "Escape") {
        if (_.value) {
          b.preventDefault(), M.value = "", L(), w("keydown", b);
          return;
        }
        w("keydown", b);
        return;
      }
      if (b.key === "Tab") {
        if (_.value) {
          if (v.allowCustom && !v.multiple && M.value !== "" && k.value < 0) {
            ye(M.value), w("keydown", b);
            return;
          }
          const x = se.value[k.value] ?? null;
          x && gt(x);
        }
        w("keydown", b);
        return;
      }
      w("keydown", b);
    }
    function Y() {
      if (_.value) {
        L();
        return;
      }
      !s.value && typeof V.value?.focus == "function" && V.value.focus(), ze();
    }
    X(_, (b) => {
      if (!(typeof window > "u")) {
        if (!b) {
          window.removeEventListener("resize", G), window.removeEventListener("scroll", G, !0);
          return;
        }
        window.addEventListener("resize", G), window.addEventListener("scroll", G, !0), ne(() => {
          requestAnimationFrame(() => {
            K();
          });
        });
      }
    }), X(Je, (b) => {
      if (!b) {
        Te();
        return;
      }
      ge();
    }), X(
      () => v.invalid,
      () => {
        if (Je.value) {
          ge();
          return;
        }
        Te();
      }
    ), X(he, (b) => {
      if (!(typeof window > "u")) {
        if (!b) {
          _.value || (window.removeEventListener("resize", G), window.removeEventListener("scroll", G, !0));
          return;
        }
        window.addEventListener("resize", G), window.addEventListener("scroll", G, !0), ne(() => {
          requestAnimationFrame(() => {
            ie();
          });
        });
      }
    }), pl(() => {
      typeof window > "u" || (window.removeEventListener("resize", G), window.removeEventListener("scroll", G, !0));
    });
    function It() {
      V.value?.focus?.();
    }
    function A() {
      V.value?.select?.();
    }
    function Ue(b) {
      V.value?.scrollIntoView?.(b);
    }
    return m({
      focus: It,
      select: A,
      scrollIntoView: Ue
    }), (b, x) => (c(), f("div", {
      ref_key: "rootRef",
      ref: D,
      class: "relative min-w-0",
      style: z(_.value ? { zIndex: 2147482e3 } : null),
      onMouseenter: Qe,
      onMouseleave: nr
    }, [
      d.multiple ? (c(), f("div", {
        key: 0,
        class: E(Ze.value),
        style: z(Ke.value),
        onClick: It
      }, [
        o("div", Bu, [
          d.selectionChips && B.value.length > 0 ? (c(), f(T, { key: 0 }, [
            (c(!0), f(T, null, J(dt.value, (O, N) => (c(), f("span", {
              key: `chip-${$(O)}-${N}`,
              class: "inline-flex max-w-full items-center gap-1 rounded-full border border-slate-300 bg-slate-100 px-2 py-0.5 text-xs text-slate-700"
            }, [
              o("span", Ku, g(Ye(O)), 1),
              o("button", {
                type: "button",
                class: "inline-flex h-4 w-4 items-center justify-center rounded text-slate-500 hover:bg-slate-200",
                disabled: d.disabled,
                onMousedown: x[0] || (x[0] = Pe(() => {
                }, ["prevent"])),
                onClick: (q) => Bt($(O))
              }, [...x[4] || (x[4] = [
                o("i", { class: "mdi mdi-close text-[11px] leading-none" }, null, -1)
              ])], 40, Uu)
            ]))), 128)),
            rr.value > 0 ? (c(), f("span", qu, " +" + g(rr.value) + " " + g(Se("autocomplete.more", "meer")), 1)) : F("", !0)
          ], 64)) : F("", !0),
          o("input", {
            ref_key: "inputRef",
            ref: V,
            name: d.name,
            "aria-label": d.ariaLabel,
            "aria-invalid": d.invalid ? "true" : "false",
            "aria-expanded": _.value ? "true" : "false",
            "data-rw-autocomplete-input": "true",
            "data-rw-autocomplete-multiple-input": "true",
            "data-create-field": d.dataCreateField || null,
            disabled: d.disabled,
            value: Xe.value,
            type: "text",
            autocomplete: "off",
            class: E(Me.value),
            style: z(Ft.value),
            onFocus: be,
            onBlur: yt,
            onInput: Ot,
            onKeydown: ce
          }, null, 46, Hu)
        ])
      ], 6)) : (c(), f("input", {
        key: 1,
        ref_key: "inputRef",
        ref: V,
        name: d.name,
        "aria-label": d.ariaLabel,
        "aria-invalid": d.invalid ? "true" : "false",
        "aria-expanded": _.value ? "true" : "false",
        "data-rw-autocomplete-input": "true",
        "data-create-field": d.dataCreateField || null,
        disabled: d.disabled,
        value: Xe.value,
        type: "text",
        autocomplete: "off",
        class: E(_e.value),
        style: z(Ke.value),
        onFocus: be,
        onBlur: yt,
        onInput: Ot,
        onKeydown: ce
      }, null, 46, Wu)),
      o("button", {
        type: "button",
        class: "absolute right-0 top-1/2 inline-flex h-8 w-7 -translate-y-1/2 items-center justify-center text-slate-500",
        disabled: d.disabled,
        tabindex: "-1",
        onMousedown: x[1] || (x[1] = Pe(() => {
        }, ["prevent"])),
        onClick: Y
      }, [
        o("i", {
          class: E(["mdi text-base leading-none", _.value ? "mdi-menu-up" : "mdi-menu-down"])
        }, null, 2)
      ], 40, Gu),
      (c(), tr(Ji, { to: "body" }, [
        _.value ? (c(), f("div", {
          key: 0,
          ref_key: "menuRef",
          ref: P,
          class: "fixed overflow-auto rounded-md border border-slate-200 bg-white p-1 shadow-lg",
          "data-rw-autocomplete-portal": "true",
          style: z({ ...W.value, zIndex: 2147483e3 }),
          onMousedown: x[3] || (x[3] = Pe(() => {
          }, ["prevent"]))
        }, [
          (c(!0), f(T, null, J(se.value, (O, N) => (c(), f("button", {
            key: `${$(O)}-${N}`,
            type: "button",
            class: E([
              "w-full rounded px-2 py-1.5 text-left text-sm text-slate-700",
              N === k.value ? "bg-slate-100" : "hover:bg-slate-50"
            ]),
            onClick: (q) => gt(O)
          }, [
            o("span", Xu, [
              d.multiple && d.showCheckboxes ? (c(), f("i", {
                key: 0,
                class: E([
                  "mdi text-base leading-none text-slate-600",
                  ar(O) ? "mdi-checkbox-marked" : "mdi-checkbox-blank-outline"
                ])
              }, null, 2)) : F("", !0),
              o("span", null, g(Ye(O)), 1)
            ])
          ], 10, Yu))), 128)),
          d.allowCustom && !d.multiple && U(M.value) !== "" ? (c(), f("button", {
            key: 0,
            type: "button",
            class: "w-full rounded border border-dashed border-slate-200 px-2 py-1.5 text-left text-sm text-slate-700 hover:bg-slate-50",
            onClick: x[2] || (x[2] = (O) => ye(M.value))
          }, g(Se("autocomplete.use_custom_value", "Gebruik vrije waarde:")) + ' "' + g(U(M.value)) + '" ', 1)) : F("", !0),
          se.value.length === 0 ? (c(), f("p", Zu, g(Se("autocomplete.no_results", "Geen resultaten")), 1)) : F("", !0)
        ], 36)) : F("", !0)
      ])),
      (c(), tr(Ji, { to: "body" }, [
        he.value && Je.value ? (c(), f("div", {
          key: 0,
          ref_key: "errorTooltipRef",
          ref: de,
          class: "rw-error-tooltip fixed",
          style: z({ ...Q.value, zIndex: 2147483500 }),
          role: "alert"
        }, [
          Z(g(d.errorMessage) + " ", 1),
          o("span", {
            class: E([
              "rw-error-tooltip-arrow",
              ve.value ? "rw-error-tooltip-arrow-top" : "rw-error-tooltip-arrow-bottom"
            ])
          }, null, 2)
        ], 4)) : F("", !0)
      ]))
    ], 36));
  }
}, ln = /* @__PURE__ */ ml(Ju, [["__scopeId", "data-v-f1fa37bf"]]);
function Qu(d) {
  return d == null ? !0 : typeof d == "string" ? d.trim() === "" : Array.isArray(d) ? d.length === 0 : !1;
}
function un(d) {
  if (typeof d == "number")
    return Number.isFinite(d) ? d : null;
  if (typeof d == "string") {
    const m = d.trim();
    if (m === "")
      return null;
    const i = Number(m);
    return Number.isFinite(i) ? i : null;
  }
  return null;
}
function ed(d) {
  const m = un(d);
  return m === null ? null : Number.isInteger(m) ? m : null;
}
function td(d, m = {}) {
  return Object.entries(m).reduce(
    (i, [v, w]) => i.replaceAll(`:${v}`, String(w ?? "")),
    String(d || "")
  );
}
function hl(d, m, i, v = {}) {
  if (typeof d?.translate == "function") {
    const w = d.translate(m, i, v);
    if (typeof w == "string" && w.trim() !== "")
      return w;
  }
  return td(i, v);
}
function rd(d) {
  return typeof d != "string" ? [] : d.split("|").map((m) => m.trim()).filter((m) => m !== "");
}
function xl(d) {
  return d ? Array.isArray(d) ? d.flatMap((m) => xl(m)) : typeof d == "string" ? rd(d) : [] : [];
}
function wl(d) {
  const m = String(d || "").trim();
  if (m === "")
    return {
      name: "",
      parameters: []
    };
  const i = m.indexOf(":");
  if (i === -1)
    return {
      name: m.toLowerCase(),
      parameters: []
    };
  const v = m.slice(0, i).trim().toLowerCase(), w = m.slice(i + 1);
  return v === "regex" || v === "not_regex" ? {
    name: v,
    parameters: [w]
  } : {
    name: v,
    parameters: w.split(",").map((V) => V.trim())
  };
}
function pe(d, m, i, v, w = {}) {
  return hl(v, d, m, {
    attribute: i,
    ...w
  });
}
function Ge(d, m, i = {}, v = []) {
  return d === "required" ? pe(
    "validation.rules.required",
    ":attribute is required.",
    m,
    i
  ) : d === "string" ? pe(
    "validation.rules.string",
    ":attribute must be a string.",
    m,
    i
  ) : d === "numeric" ? pe(
    "validation.rules.numeric",
    ":attribute must be a number.",
    m,
    i
  ) : d === "integer" ? pe(
    "validation.rules.integer",
    ":attribute must be an integer.",
    m,
    i
  ) : d === "boolean" ? pe(
    "validation.rules.boolean",
    ":attribute must be true or false.",
    m,
    i
  ) : d === "array" ? pe(
    "validation.rules.array",
    ":attribute must be an array.",
    m,
    i
  ) : d === "email" ? pe(
    "validation.rules.email",
    ":attribute must be a valid email address.",
    m,
    i
  ) : d === "regex" ? pe(
    "validation.rules.regex",
    ":attribute format is invalid.",
    m,
    i
  ) : d === "not_regex" ? pe(
    "validation.rules.not_regex",
    ":attribute format is invalid.",
    m,
    i
  ) : d === "same" ? pe(
    "validation.rules.same",
    ":attribute must match :other.",
    m,
    i,
    {
      other: v[0] ?? ""
    }
  ) : d === "confirmed" ? pe(
    "validation.rules.confirmed",
    ":attribute confirmation does not match.",
    m,
    i
  ) : d === "in" ? pe(
    "validation.rules.in",
    ":attribute must be one of: :values.",
    m,
    i,
    {
      values: v.join(", ")
    }
  ) : pe(
    "validation.invalid_value",
    ":attribute is invalid.",
    m,
    i
  );
}
function sn(d, m) {
  return d.some((i) => wl(i).name === m);
}
function nd(d) {
  const m = String(d || "").trim();
  if (m === "")
    return null;
  if (!m.startsWith("/"))
    try {
      return new RegExp(m);
    } catch {
      return null;
    }
  const i = m.lastIndexOf("/");
  if (i <= 0)
    return null;
  const v = m.slice(1, i), w = m.slice(i + 1);
  try {
    return new RegExp(v, w);
  } catch {
    return null;
  }
}
function ad(d, m, i, v, w, V) {
  const D = un(i[0]);
  if (D === null)
    return null;
  const P = sn(v, "numeric") || sn(v, "integer");
  if (sn(v, "array")) {
    if (!Array.isArray(m))
      return null;
    const M = m.length;
    return d === "min" && M < D ? pe(
      "validation.rules.min.array",
      ":attribute must contain at least :min items.",
      w,
      V,
      { min: D }
    ) : d === "max" && M > D ? pe(
      "validation.rules.max.array",
      ":attribute may not contain more than :max items.",
      w,
      V,
      { max: D }
    ) : null;
  }
  if (P) {
    const M = un(m);
    return M === null ? null : d === "min" && M < D ? pe(
      "validation.rules.min.numeric",
      ":attribute must be at least :min.",
      w,
      V,
      { min: D }
    ) : d === "max" && M > D ? pe(
      "validation.rules.max.numeric",
      ":attribute may not be greater than :max.",
      w,
      V,
      { max: D }
    ) : null;
  }
  const s = String(m ?? "").length;
  return d === "min" && s < D ? pe(
    "validation.rules.min.string",
    ":attribute must be at least :min characters.",
    w,
    V,
    { min: D }
  ) : d === "max" && s > D ? pe(
    "validation.rules.max.string",
    ":attribute may not be greater than :max characters.",
    w,
    V,
    { max: D }
  ) : null;
}
function kl(d, m, i = {}) {
  const v = xl(m);
  if (v.length === 0)
    return null;
  const w = String(i.fieldLabel || "").trim() || hl(i, "validation.this_field", "This field"), V = Qu(d), D = sn(v, "required");
  if (V)
    return D ? Ge("required", w, i) : null;
  for (const P of v) {
    const { name: _, parameters: s } = wl(P);
    if (!(_ === "" || _ === "required" || _ === "nullable")) {
      if (_ === "string" && typeof d != "string" || _ === "numeric" && un(d) === null || _ === "integer" && ed(d) === null)
        return Ge(_, w, i);
      if (_ === "boolean") {
        const M = String(d).trim().toLowerCase();
        if (!(typeof d == "boolean" || M === "1" || M === "0" || M === "true" || M === "false" || M === "on" || M === "off" || M === "yes" || M === "no"))
          return Ge(_, w, i);
      }
      if (_ === "array" && !Array.isArray(d) || _ === "email" && !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(String(d)))
        return Ge(_, w, i);
      if (_ === "min" || _ === "max") {
        const M = ad(
          _,
          d,
          s,
          v,
          w,
          i
        );
        if (M)
          return M;
      }
      if (_ === "in") {
        const M = s.map((k) => String(k));
        if (!M.includes(String(d)))
          return Ge(_, w, i, M);
      }
      if (_ === "regex" || _ === "not_regex") {
        const M = nd(s[0]);
        if (!(M instanceof RegExp))
          return Ge(_, w, i);
        const k = M.test(String(d));
        if (_ === "regex" && !k || _ === "not_regex" && k)
          return Ge(_, w, i);
      }
      if (_ === "same") {
        const M = String(s[0] || "").trim(), k = i?.values?.[M];
        if (String(d) !== String(k ?? ""))
          return Ge(_, w, i, [M]);
      }
      if (_ === "confirmed") {
        const M = String(i?.field || "").trim(), k = `${M}_confirmation`, fe = i?.values?.[k];
        if (M === "" || String(d) !== String(fe ?? ""))
          return Ge(_, w, i);
      }
    }
  }
  return null;
}
function hp(d, m, i = {}) {
  if (!m || typeof m != "object")
    return {};
  const v = d && typeof d == "object" ? d : {}, w = {};
  return Object.entries(m).forEach(([V, D]) => {
    const P = String(V || "").trim();
    if (P === "")
      return;
    const _ = kl(v[P], D, {
      ...i,
      field: P,
      values: v,
      fieldLabel: i?.labels?.[P] || i?.fieldLabel || P
    });
    _ && (w[P] = _);
  }), w;
}
const id = ["for"], ld = ["id", "name", "aria-label", "placeholder"], od = ["aria-label"], sd = { class: "ml-auto flex items-center gap-2" }, ud = {
  key: 0,
  class: "flex items-center gap-2"
}, dd = ["id", "name", "aria-label"], cd = ["value"], fd = {
  key: 2,
  class: "relative"
}, bd = ["title"], pd = { class: "flex min-h-11 items-center justify-between bg-sky-700 px-4 text-sm font-semibold text-white" }, vd = ["aria-label"], gd = { class: "flex items-center gap-2 border-b border-slate-200 bg-white px-3 pb-2 pt-2" }, yd = ["disabled"], md = ["disabled"], hd = ["disabled"], xd = ["disabled"], wd = {
  key: 0,
  class: "border-b border-emerald-200 bg-emerald-50 px-4 py-2 text-sm text-emerald-800"
}, kd = {
  key: 1,
  class: "border-b border-amber-200 bg-amber-50 px-4 py-2 text-sm text-amber-800"
}, Cd = {
  key: 2,
  class: "min-h-0 flex-1 overflow-auto",
  style: { maxHeight: "calc(100vh - 240px)" }
}, Sd = { class: "w-full border-collapse text-sm" }, _d = { class: "bg-white text-slate-600" }, Md = { class: "w-16 border-b border-r border-slate-200 px-3 py-2 text-left font-medium" }, Fd = { class: "border-b border-r border-slate-200 px-3 py-2 text-left font-medium" }, Od = { class: "w-28 border-b border-slate-200 px-3 py-2 text-right font-medium" }, Id = { key: 0 }, Ad = {
  colspan: "3",
  class: "px-3 py-8 text-center text-slate-500"
}, Rd = { class: "border-r border-slate-100 px-3 py-2" }, Ed = ["disabled", "onClick"], Td = { class: "border-r border-slate-100 px-3 py-2" }, jd = { class: "px-3 py-2 text-right" }, $d = ["disabled", "title", "onClick"], zd = {
  key: 3,
  class: "min-h-0 flex-1 overflow-auto p-4",
  style: { maxHeight: "calc(100vh - 240px)" }
}, Vd = { class: "space-y-4" }, Dd = {
  key: 0,
  class: "space-y-4"
}, Ld = ["for"], Nd = ["id", "name", "placeholder"], Pd = { class: "grid gap-3 md:grid-cols-3" }, Bd = ["for"], Kd = ["id", "name"], Ud = ["value"], qd = ["for"], Hd = ["id", "name"], Wd = ["value"], Gd = ["for"], Yd = ["id", "name"], Xd = ["value"], Zd = { class: "grid gap-3 md:grid-cols-2" }, Jd = ["for"], Qd = ["id", "name"], ec = { value: "" }, tc = ["value"], rc = ["for"], nc = ["id", "name"], ac = ["value"], ic = { class: "grid gap-3 md:grid-cols-3" }, lc = ["for"], oc = ["id", "name", "disabled"], sc = { value: "" }, uc = ["value"], dc = ["for"], cc = ["id", "name"], fc = { value: "" }, bc = ["value"], pc = ["for"], vc = ["id", "name"], gc = { class: "grid gap-2 md:grid-cols-2" }, yc = { class: "inline-flex items-center gap-2 text-sm text-slate-700" }, mc = ["name"], hc = { class: "inline-flex items-center gap-2 text-sm text-slate-700" }, xc = ["name"], wc = { class: "inline-flex items-center gap-2 text-sm text-slate-700" }, kc = ["name"], Cc = {
  key: 0,
  class: "rounded border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-800"
}, Sc = {
  key: 1,
  class: "max-w-xs"
}, _c = ["for"], Mc = ["id", "name"], Fc = ["value"], Oc = {
  key: 2,
  class: "rounded border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-800"
}, Ic = {
  key: 3,
  class: "rounded border border-slate-200 bg-slate-50 px-3 py-4 text-sm text-slate-600"
}, Ac = {
  key: 4,
  class: "rounded border border-slate-200 bg-slate-50 px-3 py-4 text-sm text-slate-600"
}, Rc = {
  key: 5,
  class: "rounded border border-slate-200 bg-white p-2"
}, Ec = {
  key: 4,
  class: "flex items-center border-t border-slate-200 bg-white px-3 py-2"
}, Tc = ["disabled"], jc = {
  key: 3,
  class: "relative"
}, $c = ["title"], zc = { class: "flex min-h-11 items-center justify-between bg-emerald-700 px-4 text-sm font-semibold text-white" }, Vc = ["aria-label"], Dc = { class: "flex items-center gap-2 border-b border-slate-200 bg-white px-3 pb-2 pt-2" }, Lc = ["disabled"], Nc = ["disabled"], Pc = {
  key: 0,
  class: "border-b border-emerald-200 bg-emerald-50 px-4 py-2 text-sm text-emerald-800"
}, Bc = {
  key: 1,
  class: "border-b border-amber-200 bg-amber-50 px-4 py-2 text-sm text-amber-800"
}, Kc = {
  key: 2,
  class: "max-h-[calc(100vh-220px)] min-h-0 flex-1 overflow-auto"
}, Uc = { class: "w-full border-collapse text-sm" }, qc = { class: "bg-white text-slate-600" }, Hc = { class: "w-16 border-b border-r border-slate-200 px-3 py-2 text-left font-medium" }, Wc = { class: "border-b border-r border-slate-200 px-3 py-2 text-left font-medium" }, Gc = { class: "w-28 border-b border-slate-200 px-3 py-2 text-right font-medium" }, Yc = { key: 0 }, Xc = {
  colspan: "3",
  class: "px-3 py-8 text-center text-slate-500"
}, Zc = { class: "border-r border-slate-100 px-3 py-2" }, Jc = ["disabled", "onClick"], Qc = { class: "border-r border-slate-100 px-3 py-2" }, ef = { class: "px-3 py-2 text-right" }, tf = ["disabled", "title", "onClick"], rf = {
  key: 3,
  class: "max-h-[calc(100vh-220px)] min-h-0 flex-1 overflow-auto p-4"
}, nf = { class: "space-y-4" }, af = ["for"], lf = ["id", "name", "placeholder"], of = { class: "mb-2 text-sm font-medium text-slate-700" }, sf = { class: "max-h-[420px] overflow-y-auto rounded border border-slate-200" }, uf = ["onDragover", "onDrop"], df = ["aria-label", "onDragstart"], cf = ["name", "aria-label", "onUpdate:modelValue"], ff = { class: "min-w-0 flex-1 truncate text-sm" }, bf = { class: "flex items-center gap-1" }, pf = ["disabled", "onClick"], vf = ["disabled", "onClick"], gf = {
  key: 4,
  class: "flex items-center border-t border-slate-200 bg-white px-3 py-2"
}, yf = ["disabled"], mf = {
  key: 4,
  class: "relative"
}, hf = { class: "border-b border-slate-100 px-2 pb-2 pt-2" }, xf = { class: "p-1" }, wf = ["onClick"], kf = { class: "relative" }, Cf = { class: "border-b border-slate-100 px-2 pb-2 pt-2" }, Sf = { class: "min-h-0 flex-1 space-y-2 overflow-y-auto pr-1" }, _f = {
  key: 0,
  class: "mb-3 mt-2 space-y-3 rounded border border-slate-200 bg-slate-50 p-3"
}, Mf = { class: "rw-config-checkbox-row flex cursor-pointer items-center gap-3 rounded px-1 py-1 text-xs text-slate-700" }, Ff = ["name", "checked"], Of = { class: "rw-config-checkbox-row flex cursor-pointer items-center gap-3 rounded px-1 py-1 text-xs text-slate-700" }, If = ["name", "checked"], Af = { class: "rw-config-checkbox-row flex cursor-pointer items-center gap-3 rounded px-1 py-1 text-xs text-slate-700" }, Rf = ["name", "checked", "disabled"], Ef = { class: "rw-config-checkbox-row flex cursor-pointer items-center gap-3 rounded px-1 py-1 text-xs text-slate-700" }, Tf = ["name", "checked"], jf = { class: "space-y-1" }, $f = ["for"], zf = ["id", "name", "aria-label", "value"], Vf = { class: "space-y-1 pb-1 pt-1" }, Df = ["onDragover", "onDrop"], Lf = ["aria-label", "onDragstart"], Nf = ["name", "aria-label", "checked", "onChange"], Pf = { class: "min-w-0 flex-1 truncate text-sm text-slate-700" }, Bf = { class: "flex items-center gap-1" }, Kf = ["disabled", "onClick"], Uf = ["disabled", "onClick"], qf = ["name", "aria-label", "checked"], Hf = { class: "relative flex w-full min-w-0 items-center gap-0.5 pr-1" }, Wf = ["title", "onClick"], Gf = { class: "truncate" }, Yf = { class: "ml-auto inline-flex shrink-0 items-center gap-0" }, Xf = ["aria-label", "onClick"], Zf = ["aria-label", "onClick"], Jf = { class: "flex items-center gap-2 border-b border-slate-200 bg-white px-2 pb-2 pt-2" }, Qf = ["onClick"], eb = { class: "grid gap-2 p-3" }, tb = ["name", "aria-label", "value", "onChange"], rb = ["value"], nb = { class: "text-xs text-slate-500" }, ab = ["name", "aria-label", "value", "onInput"], ib = { class: "text-xs text-slate-500" }, lb = ["name", "aria-label", "value", "onInput"], ob = { class: "text-xs text-slate-500" }, sb = ["name", "aria-label", "value", "onChange"], ub = { value: "" }, db = { value: "true" }, cb = { value: "false" }, fb = { class: "text-xs text-slate-500" }, bb = ["name", "aria-label", "value", "multiple", "onChange"], pb = {
  key: 0,
  value: ""
}, vb = ["value"], gb = { class: "text-xs text-slate-500" }, yb = ["name", "aria-label", "type", "value", "onInput"], mb = ["aria-label", "onMousedown"], hb = { key: 0 }, xb = ["colspan"], wb = { key: 1 }, kb = ["colspan"], Cb = { class: "inline-flex items-center justify-center gap-2" }, Sb = {
  key: 0,
  class: "border-t border-blue-200 bg-blue-50/40"
}, _b = ["aria-label"], Mb = { class: "min-w-0 flex-1" }, Fb = {
  key: 1,
  class: "rw-input-with-tooltip"
}, Ob = ["data-create-field", "name", "aria-label", "checked", "onChange", "onBlur"], Ib = {
  key: 0,
  class: "rw-inline-error-tooltip"
}, Ab = {
  key: 2,
  class: "rw-input-with-tooltip"
}, Rb = ["data-create-field", "type", "name", "aria-label", "value", "aria-invalid", "onInput", "onBlur"], Eb = {
  key: 0,
  class: "rw-inline-error-tooltip"
}, Tb = {
  key: 1,
  class: "text-xs text-slate-400"
}, jb = ["onClick", "onMouseover", "onMouseleave"], $b = ["name", "aria-label", "checked", "onChange"], zb = ["onClick"], Vb = {
  key: 0,
  class: "absolute left-2 top-1/2 z-10 -translate-y-1/2"
}, Db = ["onClick"], Lb = { class: "flex items-center justify-start border-b border-slate-200 bg-white px-2 pb-2 pt-2" }, Nb = { class: "p-1" }, Pb = ["disabled", "onClick"], Bb = {
  key: 1,
  class: "rw-input-with-tooltip"
}, Kb = ["name", "aria-label", "checked", "onChange", "onBlur"], Ub = {
  key: 0,
  class: "rw-inline-error-tooltip"
}, qb = {
  key: 2,
  class: "rw-input-with-tooltip"
}, Hb = ["type", "name", "aria-label", "value", "aria-invalid", "onInput", "onBlur"], Wb = {
  key: 0,
  class: "rw-inline-error-tooltip"
}, Gb = { class: "truncate" }, Yb = {
  key: 2,
  class: "inline-flex max-w-full flex-wrap items-center gap-1"
}, Xb = { class: "truncate" }, Zb = {
  key: 0,
  class: "inline-flex items-center rounded-full border border-slate-300 bg-slate-100 px-2 py-0.5 text-xs font-medium leading-5 text-slate-600"
}, Jb = {
  key: 2,
  class: "border-t border-blue-200 bg-blue-50/40"
}, Qb = ["aria-label"], ep = { class: "min-w-0 flex-1" }, tp = {
  key: 1,
  class: "rw-input-with-tooltip"
}, rp = ["data-create-field", "name", "aria-label", "checked", "onChange", "onBlur"], np = {
  key: 0,
  class: "rw-inline-error-tooltip"
}, ap = {
  key: 2,
  class: "rw-input-with-tooltip"
}, ip = ["data-create-field", "type", "name", "aria-label", "value", "aria-invalid", "onInput", "onBlur"], lp = {
  key: 0,
  class: "rw-inline-error-tooltip"
}, op = {
  key: 1,
  class: "text-xs text-slate-400"
}, sp = { class: "flex flex-wrap items-center justify-between gap-2 border-x border-b border-slate-200 bg-white px-3 py-2" }, up = {
  key: 0,
  class: "flex items-center"
}, dp = ["disabled", "onClick"], cp = { class: "ml-auto flex items-center gap-2" }, fp = {
  key: 0,
  class: "text-xs text-slate-500"
}, bp = 80, Mr = 40, pa = "option_contains", on = "option_equals", bl = "rgb(255 255 255)", va = "rgb(239 246 255)", pp = {
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
  setup(d, { emit: m }) {
    const i = d, v = m, w = Mu();
    function V(e, t) {
      return !e || typeof e != "object" ? null : String(t || "").split(".").filter((r) => r !== "").reduce((r, a) => !r || typeof r != "object" || !Object.prototype.hasOwnProperty.call(r, a) ? null : r[a], e);
    }
    function D(e, t = {}) {
      return typeof e != "string" ? e : Object.entries(t).reduce((r, [a, n]) => r.replaceAll(`:${a}`, String(n ?? "")), e);
    }
    const P = S(() => {
      const e = i.i18n?.messages;
      if (e && typeof e == "object")
        return e;
      const t = w?.props?.rwtable?.translations;
      return t && typeof t == "object" ? t : {};
    }), _ = S(() => {
      const e = String(i.i18n?.locale || "").trim().toLowerCase();
      if (e !== "")
        return e;
      const t = String(w?.props?.rwtable?.locale || "").trim().toLowerCase();
      return t !== "" ? t : "en";
    });
    function s(e, t = "", r = {}) {
      const a = V(P.value, e);
      return D(typeof a == "string" ? a : t || e, r);
    }
    function M(e) {
      if (!e || typeof e != "object")
        return null;
      const t = String(_.value || "").toLowerCase();
      if (t !== "" && typeof e[t] == "string")
        return e[t];
      const r = t.includes("-") ? t.split("-")[0] : t;
      return r !== "" && typeof e[r] == "string" ? e[r] : typeof e.default == "string" ? e.default : null;
    }
    function k(e) {
      const t = String(
        e?.label ?? e?.key ?? s("common.dash", "-")
      ), r = M(e?.labelTranslations);
      if (typeof r == "string" && r.trim() !== "")
        return r;
      const a = String(e?.labelKey || "").trim();
      if (a === "") {
        const u = String(e?.key || "").trim();
        if (u !== "") {
          const l = i.columns.find(
            (p) => String(p?.key || "").trim() === u && p !== e
          );
          if (l)
            return k(l);
        }
        return t;
      }
      const n = a.includes(".") ? [a] : [`columns.${a}`];
      for (const u of n) {
        const l = V(P.value, u);
        if (typeof l == "string" && l.trim() !== "")
          return l;
      }
      return t;
    }
    const fe = h(null), je = h(null), de = h(null), he = h(null), ve = h(""), Q = h(1), W = h(Number(i.rowOptions[0] ?? 25)), $e = h(i.sortField || i.idKey), Se = h(i.sortOrder === "desc" ? "desc" : "asc"), $ = h([]), Ye = h({ total: 0, current: 1, last: 1 }), Ie = h([]), xe = h(W.value), Ae = h(!1), Be = h(!1), ae = h(""), we = h({}), B = h({}), le = h(!1), oe = h(!1), se = h(null), Xe = h(null), Mt = h(null), dt = h(!1), rr = h(!1), Ke = h(0), _e = h(null), Ze = h(null), Me = h(""), Ft = h({}), Je = h(null), ze = h(!1), L = h({}), K = h(null), G = h([]), ie = h({}), ge = h({}), Te = h({}), Qe = h({}), nr = h("none"), gt = h(null), ar = h(null), Re = h(!1), et = h("list"), Bt = h([]), U = h({
      id: null,
      description: "",
      columns: []
    }), ye = h(!1), Ve = h(""), be = h(""), yt = h(null), Ot = h(null), ce = h(!1), Y = h("list"), It = h([]), A = h({
      id: null,
      description: "",
      config: null
    }), Ue = h(!1), b = h(""), x = h(""), O = h([]), N = h(!1), q = h(""), re = h(""), qe = h(null), tt = h(null), it = h(!1), At = /* @__PURE__ */ new Map(), Kt = /* @__PURE__ */ new Map(), ir = /* @__PURE__ */ new Map(), Rt = h(null), Fe = Object.freeze({
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
    }), dn = Object.freeze([
      "tab",
      "blur",
      "save"
    ]), He = h({}), me = h(0), ct = h(!1), Fr = h(0), lt = h(i.options?.scrollMode !== "infinite"), Oe = h(!!i.horizontalScroll), Et = h(!!i.rowQuantitySelect), Tt = h(!!i.showRecordCount), ot = h(String(i.initialHeight || "520px"));
    let mt = null, ht = null;
    const lr = S(() => i.serverSide || i.managed), De = S(() => !lt.value), R = S(() => Jn(Qt())), cn = S(
      () => `${R.value}-global-search`
    ), ga = S(
      () => `${R.value}-rows-per-page`
    ), Cl = S(() => {
      let e = 0;
      return i.checkboxColumn && (e += Mr), H.value.forEach((t) => {
        e += Ct(t.key);
      }), e;
    }), Sl = S(() => Oe.value ? {
      width: `max(100%, ${Cl.value}px)`
    } : {
      width: "100%"
    }), _l = S(
      () => _r(ot.value)
    ), Ml = Object.freeze({ zIndex: Fe.toolbar }), ya = Object.freeze({ zIndex: Fe.toolbarOverlay }), Fl = S(() => {
      const e = {
        ...ya
      };
      return Fr.value > 0 && (e.maxHeight = `${Fr.value}px`), e;
    }), Ol = Object.freeze({
      zIndex: Fe.stickyHeader,
      boxShadow: "inset 0 -1px 0 rgb(203 213 225)"
    }), Il = Object.freeze({
      zIndex: Fe.headerFilterOverlay
    }), Al = Object.freeze({ zIndex: Fe.rowMenuOverlay }), fn = S(
      () => Wi(i.searchFieldWidth)
    ), bn = S(
      () => Wi(i.searchFieldMinWidth)
    ), Rl = S(
      () => fn.value ? "min-w-0 flex-none" : bn.value ? "flex-1" : "min-w-56 flex-1"
    ), El = S(() => {
      const e = {};
      return fn.value && (e.width = fn.value, e.maxWidth = "100%"), bn.value && (e.minWidth = bn.value), Object.keys(e).length > 0 ? e : null;
    }), ma = S(() => Array.isArray(i.menuItems) ? i.menuItems : []), Or = S(() => [
      { value: "bar", label: s("charts.type_items.bar", "Staaf") },
      { value: "line", label: s("charts.type_items.line", "Lijn") },
      { value: "pie", label: s("charts.type_items.pie", "Taart") },
      { value: "doughnut", label: s("charts.type_items.doughnut", "Donut") },
      { value: "bar3d", label: s("charts.type_items.bar3d", "Staaf 3D") },
      { value: "line3d", label: s("charts.type_items.line3d", "Lijn 3D") },
      {
        value: "bar3d_webgl",
        label: s("charts.type_items.bar3d_webgl", "Staaf 3D (WebGL)")
      },
      {
        value: "line3d_webgl",
        label: s("charts.type_items.line3d_webgl", "Lijn 3D (WebGL)")
      }
    ]), ha = S(() => [
      {
        value: "count",
        label: s("charts.aggregate_items.count", "Aantal (count)")
      },
      { value: "sum", label: s("charts.aggregate_items.sum", "Som (sum)") },
      {
        value: "avg",
        label: s("charts.aggregate_items.avg", "Gemiddelde (avg)")
      },
      { value: "min", label: s("charts.aggregate_items.min", "Minimum (min)") },
      { value: "max", label: s("charts.aggregate_items.max", "Maximum (max)") }
    ]), Tl = S(() => [
      { value: "desc", label: s("charts.sort_direction_items.desc", "Aflopend") },
      { value: "asc", label: s("charts.sort_direction_items.asc", "Oplopend") }
    ]), jl = S(() => [
      {
        value: "vertical",
        label: s("charts.orientation_items.vertical", "Verticaal")
      },
      {
        value: "horizontal",
        label: s("charts.orientation_items.horizontal", "Horizontaal")
      }
    ]), st = Object.freeze([
      "#2563eb",
      "#16a34a",
      "#dc2626",
      "#d97706",
      "#0891b2",
      "#7c3aed",
      "#db2777",
      "#475569"
    ]);
    let or = null, xa = !1, Le = null, Ir = null;
    function wa() {
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
    const $l = S(() => String(i.excel) === "true"), zl = S(() => String(i.charts) === "true"), pn = S(() => {
      if (typeof i.tableId == "string" && i.tableId.trim() !== "")
        return Jn(i.tableId.trim());
      const e = i.columns.map((t) => String(t?.key ?? "col")).join("-");
      return Jn(e);
    }), Ar = S(() => {
      const t = String(i.dataSource?.path || "").trim().match(/^\/?([^/?#]+)/);
      return t?.[1] ? `/${t[1]}` : "/admin";
    }), ka = S(
      () => (U.value.columns || []).filter((e) => e.selected)
    ), Ca = S(() => String(U.value.description || "").trim() !== "" && ka.value.length > 0), vn = S(() => (Array.isArray(i.columns) ? i.columns : []).map((e) => {
      const t = String(e?.key ?? "");
      return {
        value: t,
        label: String(e?.label ?? t ?? "-")
      };
    })), gn = S(() => A.value.config?.builder?.dataset || {}), ut = S(() => A.value.config?.builder?.chart || {}), Vl = S(() => A.value.config?.builder?.presentation || {}), Dl = S(() => String(gn.value.aggregate || "count")), Sa = S(() => Dl.value !== "count");
    S(() => Vl.value.allow_chart_type_change === !0);
    const Rr = S(() => Y.value === "view" && re.value ? re.value : String(ut.value.type || "bar")), yn = S(() => {
      const e = String(A.value.description || "").trim(), t = String(gn.value.x_field || "").trim(), r = String(
        gn.value.metric_field || ""
      ).trim();
      return !(e === "" || t === "" || Sa.value && r === "");
    }), sr = S(() => Vo(O.value, A.value.config)), Er = S(() => Array.isArray(sr.value?.labels) && sr.value.labels.length > 0 && Array.isArray(sr.value?.series) && sr.value.series.length > 0), H = S(() => G.value.filter((e) => e.selected !== !1)), jt = S(() => H.value.filter((e) => !!e.editable)), Ll = S(() => Object.keys(xt.value).length > 0), xt = S(() => {
      const e = {};
      return (/* @__PURE__ */ new Set([
        ...Object.keys(ie.value),
        ...Object.keys(ge.value),
        ...Object.keys(Te.value)
      ])).forEach((r) => {
        const a = $t(r), n = Ht(a) ? ge.value[r] : ie.value[r];
        Lr(n) || (e[r] = n);
      }), e;
    }), mn = S(() => {
      const e = {};
      return Object.keys(xt.value).forEach((t) => {
        e[t] = $t(t);
      }), e;
    }), hn = S(() => {
      const e = {};
      return Object.keys(xt.value).forEach((t) => {
        e[t] = Qe.value[t] ?? "text";
      }), e;
    }), _a = S(() => {
      const e = {};
      return Object.entries(xt.value).forEach(([t, r]) => {
        const a = Sn(t);
        e[a] = r;
      }), e;
    }), Ma = S(() => {
      const e = {};
      return Object.entries(mn.value).forEach(
        ([t, r]) => {
          const a = Sn(t);
          e[a] = r;
        }
      ), e;
    }), Fa = S(() => {
      const e = {};
      return Object.entries(hn.value).forEach(
        ([t, r]) => {
          const a = Sn(t);
          e[a] = r;
        }
      ), e;
    }), Ut = S(() => {
      let e = [...$.value];
      if (ve.value.trim() !== "") {
        const a = ve.value.trim().toLowerCase();
        e = e.filter((n) => H.value.some((u) => {
          const l = n[u.key];
          return l == null ? !1 : String(l).toLowerCase().includes(a);
        }));
      }
      e = e.filter((a) => Object.keys(xt.value).every((n) => {
        const u = mn.value[n], l = hn.value[n], p = xt.value[n], y = to(a, n, u);
        return no(y, u, l, p);
      }));
      const t = i.manualOrdering ? i.manualOrderField : $e.value, r = i.manualOrdering ? "asc" : Se.value;
      return e.sort((a, n) => {
        const u = a[t], l = n[t];
        if (u === l)
          return 0;
        const p = String(u ?? "").localeCompare(
          String(l ?? ""),
          void 0,
          {
            numeric: !0,
            sensitivity: "base"
          }
        );
        return r === "asc" ? p : -p;
      }), e;
    }), ee = S(() => {
      if (lr.value)
        return De.value ? Ie.value : $.value;
      if (De.value)
        return Ut.value.slice(0, xe.value);
      const e = (Q.value - 1) * W.value, t = e + W.value;
      return Ut.value.slice(e, t);
    }), Oa = S(() => {
      if (lr.value) {
        const e = De.value ? Ie.value.length : $.value.length;
        return Number(Ye.value.total ?? e);
      }
      return Ut.value.length;
    }), qt = S(() => lr.value ? Number(Ye.value.last ?? 1) : Math.max(1, Math.ceil(Oa.value / W.value))), Nl = S(() => {
      const e = Math.max(1, Number(qt.value || 1)), t = Math.min(Math.max(1, Number(Q.value || 1)), e), r = 2, a = [], n = [];
      for (let l = 1; l <= e; l += 1)
        (l <= 2 || l >= e - 1 || Math.abs(l - t) <= r) && a.push(l);
      let u = null;
      return a.forEach((l) => {
        u && l - u > 1 && n.push("..."), n.push(l), u = l;
      }), n;
    }), Pl = S(() => K.value === null || K.value === void 0 ? !1 : ee.value.some(
      (e) => e?.[i.idKey] === K.value
    )), Ia = S(() => ze.value ? K.value === null || K.value === void 0 ? !0 : !Pl.value : !1), Bl = S(() => {
      const e = ee.value.map((t) => t[i.idKey]).filter((t) => t != null);
      return e.length === 0 ? !1 : e.every((t) => i.checkedRows.includes(t));
    }), Kl = S(() => JSON.stringify({
      global: ve.value,
      rowsPerPage: W.value,
      sortField: $e.value,
      sortOrder: Se.value,
      columns: H.value.map((e) => e.key),
      filters: xt.value,
      modes: mn.value,
      types: hn.value,
      selectionFilter: nr.value,
      checkedRows: i.checkedRows,
      manualOrdering: i.manualOrdering,
      manualOrderField: i.manualOrderField
    })), xn = Pu(() => {
      i.managed && Wt({ append: !1 });
    }, 250);
    X(
      () => i.columns,
      () => {
        Ea(), ql(), kn();
      },
      { immediate: !0, deep: !0 }
    ), X(
      () => i.data,
      (e) => {
        i.managed || fr(e, { append: !1 });
      },
      { deep: !0, immediate: !0 }
    ), X(
      () => i.initialData,
      (e) => {
        e && (i.managed && rr.value || (fr(e, { append: !1 }), rr.value = !0));
      },
      { deep: !0, immediate: !0 }
    ), X(W, () => {
      W.value = en(W.value), De.value && (xe.value = W.value), Q.value = 1, Zi();
    }), X(Kl, () => {
      if (v("change", Nr(1)), De.value && Si(), i.managed) {
        if (De.value) {
          Wt({ append: !1, pageOverride: 1 });
          return;
        }
        xn();
      }
    }), X(Q, () => {
      v("change", Nr()), i.managed && !De.value && xn();
    }), X(Ae, (e) => {
      e || ne(() => {
        wi();
      });
    }), X(lt, async (e, t) => {
      e !== t && (Q.value = 1, e || Si(), i.managed && await Wt({ append: !1, pageOverride: 1 }), await ne(), Nn());
    }), X(
      [
        lt,
        Oe,
        Et,
        Tt,
        ot
      ],
      () => {
        Zi();
      },
      { deep: !0 }
    ), X(
      () => ee.value.length,
      async () => {
        Yo(), await ne(), ze.value && Ia.value && (Di(), Li()), Nn();
      }
    ), X(G, Cu, { deep: !0 }), X(
      () => H.value.length,
      (e) => {
        const t = Math.max(0, e), r = Math.min(Math.max(me.value, 0), t);
        r !== me.value && (me.value = r, tn()), wn(!0);
      }
    ), X(
      () => Oe.value,
      () => {
        wn(!0);
      }
    ), X(ze, (e) => {
      if (!e) {
        K.value = null, L.value = {}, xr();
        return;
      }
      ae.value = "", xr(), Hl(), Li();
    });
    function Aa() {
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
    function Ra() {
      ne(() => {
        requestAnimationFrame(() => {
          Aa();
        });
      });
    }
    function Tr() {
      oe.value && Aa(), ce.value && li();
    }
    X(oe, (e) => {
      if (!e) {
        Fr.value = 0;
        return;
      }
      Ra();
    }), X(ct, () => {
      oe.value && Ra();
    }), X(Re, (e) => {
      if (!e) {
        Ve.value = "", be.value = "", yt.value = null, Ot.value = null;
        return;
      }
      et.value = "list", Ve.value = "", be.value = "", In();
    }), X(ce, (e) => {
      if (!e) {
        x.value = "", b.value = "", q.value = "", it.value = !1, re.value = "", wt();
        return;
      }
      Y.value = "list", x.value = "", b.value = "", q.value = "", it.value = !1, re.value = "", Rn();
    }), X(
      () => Y.value,
      () => {
        if (q.value = "", Y.value === "list") {
          it.value = !1, wt();
          return;
        }
        Eo();
      }
    ), X(
      () => A.value.config,
      () => {
        !ce.value || Y.value === "list" || (q.value = "", br());
      },
      { deep: !0 }
    ), X(
      () => re.value,
      () => {
        !ce.value || Y.value !== "view" || (q.value = "", br());
      }
    ), X(
      () => O.value,
      () => {
        !ce.value || Y.value === "list" || (q.value = "", br());
      },
      { deep: !0 }
    ), _u(async () => {
      ku(), Ea(), Ul(), kn(), i.startOnMount && i.managed && Wt({ append: !1, pageOverride: 1 }), i.autoEditLastRowFirstField && ne(() => {
        Wl();
      }), window.addEventListener("keydown", Hi, { capture: !0 }), window.addEventListener("pointerdown", Ui, {
        capture: !0
      }), window.addEventListener("focusin", qi, { capture: !0 }), window.addEventListener("resize", Tr), window.addEventListener("scroll", Tr), await ne(), Nn();
    }), pl(() => {
      mt && (mt.disconnect(), mt = null), xn.cancel(), Vn(), window.removeEventListener("keydown", Hi, { capture: !0 }), window.removeEventListener("pointerdown", Ui, {
        capture: !0
      }), window.removeEventListener("focusin", qi, {
        capture: !0
      }), window.removeEventListener("resize", Tr), window.removeEventListener("scroll", Tr), wt();
    });
    function Ea() {
      const e = i.columns.map((l) => ({
        ...l,
        selected: l.selected !== !1
      })), t = mu();
      if (!t) {
        G.value = e;
        return;
      }
      const r = t.selected ?? {}, a = Array.isArray(t.order) ? t.order : [], n = /* @__PURE__ */ new Map();
      e.forEach((l) => {
        const p = Object.prototype.hasOwnProperty.call(
          r,
          l.key
        ) ? !!r[l.key] : l.selected !== !1;
        n.set(l.key, {
          ...l,
          selected: p
        });
      });
      const u = [];
      a.forEach((l) => {
        n.has(l) && (u.push(n.get(l)), n.delete(l));
      }), n.forEach((l) => u.push(l)), G.value = u;
    }
    function Ul() {
      const e = hu(), t = {};
      i.columns.forEach((u) => {
        const l = String(u.key), p = Number(e?.[l]), y = ur(l);
        if (Number.isFinite(p) && p > 0) {
          t[l] = Math.max(y, Math.round(p));
          return;
        }
        t[l] = jr(u);
      }), He.value = t;
      const r = xu(), a = Math.max(0, H.value.length), n = Math.min(Math.max(r, 0), a);
      me.value = n, n !== r && tn();
    }
    function ql() {
      const e = {};
      i.columns.forEach((a) => {
        const n = String(a.key), u = Number(He.value?.[n]), l = ur(n);
        if (Number.isFinite(u) && u > 0) {
          e[n] = Math.max(l, Math.round(u));
          return;
        }
        e[n] = jr(a);
      }), He.value = e;
      const t = Math.max(0, H.value.length), r = Math.min(Math.max(me.value, 0), t);
      r !== me.value && (me.value = r, tn());
    }
    function jr(e) {
      const t = ja(e), r = Number(e?.width);
      return Number.isFinite(r) && r > 0 ? Math.max(t, Math.round(r)) : e?.type === "boolean" ? Math.max(t, 90) : e?.type === "number" ? Math.max(t, 110) : e?.type === "date" || e?.type === "datetime" ? Math.max(t, 140) : Math.max(t, 180);
    }
    function Ta(e) {
      return i.columns.find((t) => String(t.key) === String(e)) || null;
    }
    function ja(e, t = null) {
      const r = String(t ?? e?.key ?? ""), a = Number(e?.minWidth), n = H.value.findIndex(
        (te) => String(te.key) === r
      ), u = Oe.value && n >= 0 && !!Gr(n);
      let l = bp;
      const p = (e?.sortable !== !1 ? 1 : 0) + (e?.filterable ? 1 : 0) + (u ? 1 : 0), y = String(e?.label ?? "").trim().length, C = Math.min(24, Math.max(8, y * 3)), I = p * 20;
      return l = Math.max(l, I + C + 10), Number.isFinite(a) && a > 0 && (l = Math.max(l, Math.round(a))), l;
    }
    function ur(e) {
      const t = Ta(e);
      return ja(t, e);
    }
    function wn(e = !1) {
      const t = { ...He.value };
      let r = !1;
      i.columns.forEach((a) => {
        const n = String(a.key), u = Number(t[n]), l = ur(n);
        if (!Number.isFinite(u) || u <= 0) {
          t[n] = Math.max(l, jr(a)), r = !0;
          return;
        }
        const p = Math.max(l, Math.round(u));
        p !== Math.round(u) && (t[n] = p, r = !0);
      }), r && (He.value = t, e && Xi());
    }
    function kn() {
      const e = { ...Qe.value }, t = { ...Te.value };
      i.columns.forEach((r) => {
        const a = $r(r.type);
        e[r.key] = a, t[r.key] || (t[r.key] = Cn(a));
      }), Qe.value = e, Te.value = t;
    }
    function Hl() {
      const e = {};
      H.value.forEach((r) => {
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
    function Wl() {
      if (jt.value.length === 0 || ee.value.length === 0)
        return;
      const e = ee.value.length - 1, t = ee.value[e];
      Ke.value = e, Lt(t, jt.value[0]);
    }
    function $r(e) {
      return e && ["number", "date", "datetime", "boolean"].includes(e) ? e : "text";
    }
    function Cn(e) {
      return e === "text" ? "bevat" : "=";
    }
    function Gl(e) {
      return e === "text" ? [
        { value: "bevat", label: s("filters.modes.contains", "Bevat") },
        {
          value: "bevat niet",
          label: s("filters.modes.not_contains", "Bevat niet")
        },
        { value: "=", label: s("filters.modes.equals", "Is gelijk aan") },
        {
          value: "!=",
          label: s("filters.modes.not_equals", "Is niet gelijk aan")
        }
      ] : e === "date" || e === "datetime" ? [
        { value: "=", label: s("filters.modes.equals", "Is gelijk aan") },
        {
          value: "!=",
          label: s("filters.modes.not_equals", "Is niet gelijk aan")
        },
        { value: ">", label: s("filters.modes.after", "Na") },
        { value: "<", label: s("filters.modes.before", "Voor") },
        { value: "tussen", label: s("filters.modes.between", "Tussen") }
      ] : [
        { value: "=", label: s("filters.modes.equals", "Is gelijk aan") },
        {
          value: "!=",
          label: s("filters.modes.not_equals", "Is niet gelijk aan")
        },
        { value: ">", label: s("filters.modes.greater_than", "Groter dan") },
        { value: "<", label: s("filters.modes.less_than", "Kleiner dan") }
      ];
    }
    function zr(e) {
      return H.value.find((t) => t.key === e) || i.columns.find((t) => t.key === e) || null;
    }
    function Yl(e) {
      return Mn(e) ? pa : "=";
    }
    function Ht(e) {
      return e === pa || e === on;
    }
    function Xl(e) {
      const t = Qe.value[e.key] ?? $r(e.type), r = [...Gl(t)];
      return t !== "text" || !Da(e) || (r.push({
        value: pa,
        label: e.editMultiple === !0 ? s("filters.modes.contains_option_all", "Bevat optie (alle gekozen)") : s("filters.modes.contains_option", "Bevat optie")
      }), r.push({
        value: on,
        label: e.editMultiple === !0 ? s(
          "filters.modes.equals_option_exact",
          "Is gelijk aan optie (exacte set)"
        ) : s("filters.modes.equals_option", "Is gelijk aan optie")
      })), r;
    }
    function $t(e) {
      const t = Te.value[e];
      if (typeof t == "string" && t !== "")
        return t;
      const r = zr(e);
      if (r && !Lr(ge.value[e]))
        return Yl(r);
      const a = Qe.value[e] ?? $r(r?.type);
      return Cn(a);
    }
    function Sn(e) {
      const t = zr(e), r = $t(e);
      return !t || !Ht(r) ? e : typeof t.filterField == "string" && t.filterField.trim() !== "" ? t.filterField.trim() : typeof t.editField == "string" && t.editField.trim() !== "" ? t.editField.trim() : e;
    }
    function Zl(e) {
      return Da(e) && Ht($t(e.key));
    }
    function $a(e, t) {
      return e?.editMultiple === !0 ? zt(t).map((r) => r ?? "").filter((r) => String(r).trim() !== "") : Array.isArray(t) ? t.length > 0 ? t[0] : "" : t ?? "";
    }
    function za(e, t) {
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
    function Jl(e, t) {
      return t == null || t === "" ? [] : e?.editMultiple === !0 || Array.isArray(t) ? zt(t) : [t];
    }
    function Va(e) {
      const t = [], r = /* @__PURE__ */ new Set();
      return e.forEach((a) => {
        const n = String(a.value);
        r.has(n) || (r.add(n), t.push(a));
      }), t;
    }
    function Ql(e) {
      return Va(
        $.value.flatMap((r) => Jl(e, r?.[e.key])).map((r) => za(e, r)).filter((r) => r !== null)
      ).sort((r, a) => String(r.title).localeCompare(String(a.title)));
    }
    function _n(e) {
      const t = Array.isArray(e?.filterItems) ? e.filterItems : Array.isArray(e?.editItems) ? e.editItems : [], r = Va(
        t.map((a) => za(e, a)).filter((a) => a !== null)
      );
      return r.length > 0 ? r : Ql(e);
    }
    function Mn(e) {
      if (!e || typeof e != "object")
        return !1;
      const t = Qe.value[e.key] ?? $r(e.type);
      return t === "boolean" || t === "date" || t === "datetime" ? !1 : Array.isArray(e.filterItems) || e.editInput === "select" || e.editInput === "autocomplete";
    }
    function eo(e) {
      return Mn(e) ? e.filterInput === "autocomplete" ? !0 : e.editInput === "autocomplete" : !1;
    }
    function Da(e) {
      return Mn(e) ? _n(e).length > 0 : !1;
    }
    function La(e) {
      return !Lr(ge.value[e]);
    }
    function Na(e) {
      return !Lr(ie.value[e]);
    }
    function to(e, t, r) {
      const a = zr(t);
      if (!a || !Ht(r))
        return e?.[t];
      const n = typeof a.filterField == "string" && a.filterField.trim() !== "" ? a.filterField.trim() : typeof a.editField == "string" && a.editField.trim() !== "" ? a.editField.trim() : t;
      return Object.prototype.hasOwnProperty.call(e || {}, n) ? e?.[n] : e?.[t];
    }
    function Pa(e) {
      return String(e ?? "").trim().toLowerCase();
    }
    function Ba(e) {
      return Array.from(
        new Set(
          zt(e).map((t) => Pa(t)).filter((t) => t !== "")
        )
      );
    }
    function ro(e, t, r) {
      const a = Ba(r);
      if (a.length === 0)
        return !0;
      if (Array.isArray(e) || typeof e == "string" && e.trim().startsWith("[") && e.trim().endsWith("]")) {
        const l = Ba(e);
        return t === on ? l.length !== a.length ? !1 : a.every((p) => l.includes(p)) : a.every((p) => l.includes(p));
      }
      const u = Pa(e);
      return t === on ? a.length === 1 && u === a[0] : a.every((l) => u.includes(l));
    }
    function no(e, t, r, a) {
      if (Ht(t))
        return ro(e, t, a);
      if (r === "date" || r === "datetime") {
        const l = Vr(e);
        if (!l)
          return !1;
        if (t === "tussen") {
          const y = Vr(a?.from), C = Vr(a?.to);
          return !y || !C ? !0 : l >= y && l <= C;
        }
        const p = Vr(a);
        return p ? t === "=" ? l === p : t === "!=" ? l !== p : t === ">" ? l > p : t === "<" ? l < p : !0 : !0;
      }
      if (r === "number") {
        const l = Number(e), p = Number(a);
        return Number.isNaN(p) ? !0 : t === "=" ? l === p : t === "!=" ? l !== p : t === ">" ? l > p : t === "<" ? l < p : !0;
      }
      if (r === "boolean") {
        const l = Dr(e), p = Dr(a);
        return p === null ? !0 : t === "!=" ? l !== p : l === p;
      }
      const n = String(e ?? "").toLowerCase(), u = String(a ?? "").toLowerCase();
      return t === "bevat" ? n.includes(u) : t === "bevat niet" ? !n.includes(u) : t === "=" ? n === u : t === "!=" ? n !== u : !0;
    }
    function Vr(e) {
      return e ? typeof e == "string" ? e.slice(0, 10) : e instanceof Date ? e.toISOString().slice(0, 10) : null : null;
    }
    function Ka(e) {
      const t = String(e?.dateAssumeTimezone || "auto").trim().toLowerCase();
      return t === "utc" || t === "local" ? t : "auto";
    }
    function ao(e) {
      if (Object.prototype.hasOwnProperty.call(e || {}, "dateDisplayFallback")) {
        const t = e?.dateDisplayFallback;
        return t == null || t === "" ? "-" : String(t);
      }
      return "-";
    }
    function io(e) {
      const t = String(e).trim().match(
        /^(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2})(?::(\d{2}))?(?:\.(\d{1,3}))?)?$/
      );
      if (!t)
        return null;
      const r = Number(t[1]), a = Number(t[2]), n = Number(t[3]), u = Number(t[4] || 0), l = Number(t[5] || 0), p = Number(t[6] || 0), y = Number((t[7] || "").padEnd(3, "0") || 0);
      return {
        year: r,
        month: a,
        day: n,
        hour: u,
        minute: l,
        second: p,
        millisecond: y
      };
    }
    function lo(e, t) {
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
    function oo(e, t) {
      const r = Ka(t);
      if (e instanceof Date)
        return Number.isFinite(e.getTime()) ? new Date(e.getTime()) : null;
      if (typeof e == "number") {
        const p = new Date(e);
        return Number.isFinite(p.getTime()) ? p : null;
      }
      if (typeof e != "string")
        return null;
      const a = e.trim();
      if (a === "")
        return null;
      const n = /(?:Z|[+\-]\d{2}:?\d{2})$/i.test(a), u = io(a);
      if (u && !n) {
        const y = lo(u, r === "utc" ? "utc" : "local");
        if (y)
          return y;
      }
      const l = new Date(a);
      if (Number.isFinite(l.getTime()))
        return l;
      if (a.includes(" ")) {
        const p = a.replace(" ", "T"), y = new Date(p);
        if (Number.isFinite(y.getTime()))
          return y;
      }
      return null;
    }
    function dr(e) {
      return String(e).padStart(2, "0");
    }
    function so(e, t, r = "auto") {
      const a = r === "utc", n = a ? e.getUTCFullYear() : e.getFullYear(), u = (a ? e.getUTCMonth() : e.getMonth()) + 1, l = a ? e.getUTCDate() : e.getDate(), p = a ? e.getUTCHours() : e.getHours(), y = a ? e.getUTCMinutes() : e.getMinutes(), C = a ? e.getUTCSeconds() : e.getSeconds(), I = {
        yyyy: String(n),
        yy: String(n).slice(-2),
        MM: dr(u),
        M: String(u),
        dd: dr(l),
        d: String(l),
        HH: dr(p),
        H: String(p),
        mm: dr(y),
        m: String(y),
        ss: dr(C),
        s: String(C)
      };
      return Object.keys(I).sort((j, te) => te.length - j.length).reduce(
        (j, te) => j.replaceAll(te, I[te]),
        t
      );
    }
    function Dr(e) {
      return e === !0 || e === 1 || e === "1" || e === "true" ? !0 : e === !1 || e === 0 || e === "0" || e === "false" ? !1 : null;
    }
    function Lr(e) {
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
    function cr(e) {
      if (!e)
        return [];
      if (Array.isArray(e))
        return e;
      if (Array.isArray(e.data))
        return e.data;
      const t = e?.[i.responseMap.data];
      return Array.isArray(t) ? t : [];
    }
    function fr(e, t = { append: !1, targetPage: null }) {
      const r = cr(e), a = e?.[i.responseMap.total] ?? e?.total ?? r.length, n = e?.[i.responseMap.current] ?? e?.current_page ?? t.targetPage ?? 1, u = e?.[i.responseMap.last] ?? e?.last_page ?? Math.max(1, Math.ceil((a || r.length) / W.value));
      Ye.value = {
        total: Number(a ?? r.length),
        current: Number(n ?? 1),
        last: Number(u ?? 1)
      }, $.value = r, De.value && t.append ? uo(r) : Ie.value = [...r], i.managed && (Q.value = Number(n ?? 1));
    }
    function uo(e) {
      const t = [...Ie.value], r = new Set(
        t.map((a) => a[i.idKey]).filter((a) => a != null)
      );
      e.forEach((a) => {
        const n = a[i.idKey];
        if (n == null) {
          t.push(a);
          return;
        }
        r.has(n) || (r.add(n), t.push(a));
      }), Ie.value = t;
    }
    function Nr(e = null) {
      const t = e ?? Q.value, r = {
        [i.paramMap.page]: t,
        [i.paramMap.rowsPerPage]: W.value,
        [i.paramMap.sortField]: $e.value,
        [i.paramMap.sortOrder]: Se.value,
        [i.paramMap.global]: ve.value,
        [i.paramMap.filters]: _a.value,
        [i.paramMap.filterModes]: Ma.value,
        [i.paramMap.filterTypes]: Fa.value,
        [i.paramMap.selectionFilter]: nr.value,
        [i.paramMap.selectedRowIds]: i.checkedRows
      };
      return i.paramMap.manualOrdering && (r[i.paramMap.manualOrdering] = i.manualOrdering ? 1 : 0), i.paramMap.manualOrderField && (r[i.paramMap.manualOrderField] = i.manualOrderField), i.columnsParamMode === "keys" ? r[i.paramMap.columns] = H.value.map(
        (a) => a.key
      ) : i.columnsParamMode === "full" && (r[i.paramMap.columns] = H.value), r;
    }
    async function Wt(e = { append: !1, pageOverride: null }) {
      if (!i.dataSource?.path)
        return;
      const t = !!e.append, r = e.pageOverride ?? Q.value;
      Ae.value = !0;
      const a = {
        ...Nr(r),
        ...Ua()
      };
      try {
        if ((i.dataSource.type || "inertia") === "axios") {
          const n = nt(), u = (i.dataSource.method || "get").toLowerCase(), l = await n({
            method: u,
            url: i.dataSource.path,
            params: u === "get" ? a : void 0,
            data: u !== "get" ? a : void 0
          });
          fr(l.data, { append: t, targetPage: r }), Ae.value = !1;
          return;
        }
        Fu.visit(i.dataSource.path, {
          method: i.dataSource.method || "get",
          data: a,
          preserveState: i.dataSource.preserve ?? !0,
          preserveScroll: !0,
          replace: i.urlSync === "none",
          only: i.dataSource.data ? [i.dataSource.data] : void 0,
          onSuccess: (n) => {
            if (i.dataSource.data) {
              fr(n.props[i.dataSource.data], {
                append: t,
                targetPage: r
              });
              return;
            }
            fr(n.props, { append: t, targetPage: r });
          },
          onFinish: () => {
            Ae.value = !1;
          }
        });
      } catch (n) {
        throw Ae.value = !1, n;
      }
    }
    function Ua() {
      return typeof i.dataSource?.params == "function" ? i.dataSource.params() || {} : i.dataSource?.params || {};
    }
    function qa() {
      return `${Ar.value}/rw-table-exports/${encodeURIComponent(pn.value)}`;
    }
    function Ha() {
      return `${Ar.value}/rw-table-charts/${encodeURIComponent(pn.value)}`;
    }
    function co() {
      const e = !Re.value;
      Re.value = e, e && (ce.value = !1);
    }
    function fo() {
      const e = !ce.value;
      ce.value = e, e && (Re.value = !1);
    }
    function Wa(e) {
      const t = String(e || "bar").toLowerCase();
      return Or.value.map((a) => a.value).includes(t) ? t : "bar";
    }
    function Ga(e) {
      const t = String(e || "count").toLowerCase();
      return ha.value.map((a) => a.value).includes(t) ? t : "count";
    }
    function Ya(e) {
      return String(e || "desc").toLowerCase() === "asc" ? "asc" : "desc";
    }
    function Fn(e) {
      return String(e || "vertical").toLowerCase() === "horizontal" ? "horizontal" : "vertical";
    }
    function Xa(e) {
      const t = Number(e);
      return Number.isFinite(t) ? Math.min(500, Math.max(1, Math.round(t))) : 25;
    }
    function bo(e) {
      const t = Wa(e);
      return Or.value.find(
        (a) => a.value === t
      )?.label || t;
    }
    function po() {
      return `${String(A.value?.description || "").trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || s("charts.pdf.default_filename", "grafiek")}.pdf`;
    }
    function On(e) {
      return String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
    }
    function Pr(e) {
      const t = wa(), r = e && typeof e == "object" && !Array.isArray(e) ? e : {}, a = r.builder && typeof r.builder == "object" && !Array.isArray(r.builder) ? r.builder : {}, n = a.dataset && typeof a.dataset == "object" && !Array.isArray(a.dataset) ? a.dataset : {}, u = a.chart && typeof a.chart == "object" && !Array.isArray(a.chart) ? a.chart : {}, l = a.presentation && typeof a.presentation == "object" && !Array.isArray(a.presentation) ? a.presentation : {}, p = {
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
      }, C = {
        allow_chart_type_change: r.allowViewerChartTypeChange ?? r.allow_chart_type_change
      }, I = {
        ...t.builder.dataset,
        ...p,
        ...n
      }, j = {
        ...t.builder.chart,
        ...y,
        ...u
      }, te = {
        ...t.builder.presentation,
        ...C,
        ...l
      };
      return {
        version: 1,
        builder: {
          dataset: {
            x_field: String(I.x_field || "").trim(),
            metric_field: String(I.metric_field || "").trim(),
            aggregate: Ga(I.aggregate),
            series_field: String(I.series_field || "").trim(),
            limit: Xa(I.limit),
            sort_direction: Ya(
              I.sort_direction
            )
          },
          chart: {
            type: Wa(j.type),
            orientation: Fn(j.orientation),
            stacked: !!j.stacked,
            show_legend: j.show_legend !== !1
          },
          presentation: {
            allow_chart_type_change: te.allow_chart_type_change === !0
          }
        }
      };
    }
    function vo() {
      const e = new Map(
        i.columns.map((t) => [String(t.key), t])
      );
      return G.value.map((t) => {
        const r = String(t.key), a = e.get(r);
        return {
          key: r,
          label: a ? k(a) : t.label ?? r,
          selected: t.selected !== !1,
          width: Ct(r)
        };
      });
    }
    function go() {
      U.value = {
        id: null,
        description: "",
        columns: vo()
      }, Ve.value = "", be.value = "", et.value = "edit";
    }
    function Za(e) {
      const t = new Map(
        i.columns.map((u) => [String(u.key), u])
      ), r = Array.isArray(e?.config) ? e.config : Array.isArray(e?.columns) ? e.columns : [], a = [], n = /* @__PURE__ */ new Set();
      r.forEach((u) => {
        const l = String(u?.key ?? "");
        if (!l || n.has(l))
          return;
        n.add(l);
        const p = t.get(l);
        a.push({
          key: l,
          label: u?.label ?? (p ? k(p) : l),
          selected: !!u?.selected,
          width: Number(u?.width) || Ct(l)
        });
      }), i.columns.forEach((u) => {
        const l = String(u.key);
        n.has(l) || a.push({
          key: l,
          label: k(u),
          selected: !1,
          width: Ct(l)
        });
      }), U.value = {
        id: e?.id ?? null,
        description: String(e?.description ?? ""),
        columns: a
      }, Ve.value = "", be.value = "";
    }
    function yo(e) {
      Za(e), et.value = "edit";
    }
    async function In() {
      try {
        const t = await nt().get(qa());
        Bt.value = Array.isArray(t?.data?.exports) ? t.data.exports : [], be.value = "";
      } catch {
        Bt.value = [], be.value = s(
          "excel.messages.load_failed",
          "Kon opgeslagen exports niet laden voor deze tabel."
        );
      }
    }
    async function mo() {
      if (Ca.value) {
        ye.value = !0;
        try {
          const e = nt(), t = {
            id: U.value.id,
            description: String(U.value.description || "").trim(),
            config: U.value.columns
          }, r = await e.post(qa(), t);
          r?.data?.export?.id && (U.value.id = r.data.export.id), await In();
          const a = s(
            "excel.messages.saved",
            "Export configuratie opgeslagen."
          );
          Ve.value = a, be.value = "", setTimeout(() => {
            Ve.value === a && (Ve.value = "");
          }, 2500);
        } catch {
          be.value = s(
            "excel.messages.save_failed",
            "Opslaan van de export configuratie is mislukt."
          );
        } finally {
          ye.value = !1;
        }
      }
    }
    async function ho(e) {
      ye.value = !0;
      try {
        await nt().delete(
          `${Ar.value}/rw-table-exports/${Number(e)}`
        ), await In(), be.value = "", U.value.id === e && (et.value = "list");
      } catch {
        be.value = s(
          "excel.messages.delete_failed",
          "Verwijderen van de export is mislukt."
        );
      } finally {
        ye.value = !1;
      }
    }
    function An(e, t) {
      if (!e || !t || e === t)
        return;
      const r = U.value.columns.findIndex(
        (l) => l.key === e
      ), a = U.value.columns.findIndex(
        (l) => l.key === t
      );
      if (r < 0 || a < 0 || r === a)
        return;
      const n = [...U.value.columns], [u] = n.splice(r, 1);
      n.splice(a, 0, u), U.value.columns = n;
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
    function xo(e, t) {
      if (yt.value = e, t?.dataTransfer) {
        t.dataTransfer.effectAllowed = "move";
        try {
          t.dataTransfer.setData("text/plain", String(e)), Ja(t);
        } catch {
          return;
        }
      }
    }
    function wo(e, t) {
      yt.value && (t.preventDefault(), Ot.value = e, t?.dataTransfer && (t.dataTransfer.dropEffect = "move"));
    }
    function ko(e, t) {
      t.preventDefault();
      const r = t?.dataTransfer?.getData?.("text/plain") || null, a = yt.value || r;
      An(a, e), Qa();
    }
    function Qa() {
      yt.value = null, Ot.value = null;
    }
    function Co(e, t) {
      if ($n(t))
        return Ur(t, e) ?? "";
      if (t.type === "boolean")
        return ui(t, e[t.key]);
      const r = Tn(e, t);
      return r === "-" && (e[t.key] === null || e[t.key] === void 0 || e[t.key] === "") ? "" : r;
    }
    async function ei() {
      if (!lr.value)
        return Ut.value;
      const e = {
        ...Nr(1),
        ...Ua()
      };
      e[i.paramMap.page] = 1, e[i.paramMap.rowsPerPage] = 1e5;
      const t = nt(), r = (i.dataSource?.method || "get").toLowerCase();
      if ((i.dataSource?.type || "inertia") === "axios") {
        const l = await t({
          method: r,
          url: i.dataSource.path,
          params: r === "get" ? e : void 0,
          data: r !== "get" ? e : void 0
        });
        return cr(l.data);
      }
      const a = {
        "X-Inertia": "true"
      };
      w?.version && (a["X-Inertia-Version"] = w.version), w?.component && (a["X-Inertia-Partial-Component"] = w.component, i.dataSource?.data && (a["X-Inertia-Partial-Data"] = i.dataSource.data));
      const n = await t({
        method: r,
        url: i.dataSource.path,
        params: r === "get" ? e : void 0,
        data: r !== "get" ? e : void 0,
        headers: a
      }), u = n?.data?.props;
      return u ? i.dataSource?.data && u[i.dataSource.data] ? cr(u[i.dataSource.data]) : cr(u) : cr(n?.data);
    }
    function So() {
      const e = `export-${pn.value}`;
      return `${String(U.value.description || e).trim().replace(/[\\/:*?"<>|]+/g, "-").replace(/\s+/g, " ").slice(0, 120) || e}.xlsx`;
    }
    async function _o() {
      if (!ye.value) {
        ye.value = !0, Ve.value = "", be.value = "";
        try {
          const e = await ei();
          if (!Array.isArray(e) || e.length === 0) {
            be.value = s(
              "excel.messages.no_data",
              "Geen data gevonden om te exporteren."
            );
            return;
          }
          const t = ka.value;
          if (t.length === 0) {
            be.value = s(
              "excel.messages.no_columns_selected",
              "Selecteer minstens één kolom voor export."
            );
            return;
          }
          const r = await import("exceljs"), a = r.default || r, n = new a.Workbook(), u = n.addWorksheet("Export");
          u.columns = t.map((j) => ({
            header: k(j),
            key: j.key,
            width: Math.max((Number(j.width) || 100) / 7, 10)
          }));
          const l = e.map((j) => {
            const te = {};
            return t.forEach((We) => {
              te[We.key] = Co(j, We);
            }), te;
          });
          u.addRows(l), u.getRow(1).font = { bold: !0 };
          const p = await n.xlsx.writeBuffer(), y = new Blob([p], {
            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          }), C = window.URL.createObjectURL(y), I = document.createElement("a");
          I.href = C, I.setAttribute("download", So()), document.body.appendChild(I), I.click(), document.body.removeChild(I), window.URL.revokeObjectURL(C);
        } catch {
          be.value = s(
            "excel.messages.download_failed",
            "Er is een fout opgetreden bij het genereren van de Excel export."
          );
        } finally {
          ye.value = !1;
        }
      }
    }
    async function Mo(e) {
      Za(e), await _o();
    }
    function Fo() {
      A.value = {
        id: null,
        description: "",
        config: Pr(wa())
      }, x.value = "", b.value = "", q.value = "", re.value = A.value.config.builder.chart.type || "bar", Y.value = "edit";
    }
    function ti(e) {
      const t = Pr(e?.config || {});
      A.value = {
        id: e?.id ?? null,
        description: String(e?.description || ""),
        config: t
      }, x.value = "", b.value = "", q.value = "", re.value = t.builder.chart.type || "bar";
    }
    function Oo(e) {
      ti(e), Y.value = "edit";
    }
    function Io(e) {
      ti(e), Y.value = "view";
    }
    async function Rn() {
      try {
        const t = await nt().get(Ha());
        It.value = Array.isArray(t?.data?.charts) ? t.data.charts : [], b.value = "";
      } catch {
        It.value = [], b.value = s(
          "charts.messages.load_failed",
          "Kon opgeslagen grafieken niet laden voor deze tabel."
        );
      }
    }
    async function Ao() {
      if (yn.value) {
        Ue.value = !0;
        try {
          const e = nt(), t = {
            id: A.value.id,
            description: String(A.value.description || "").trim(),
            config: Pr(A.value.config)
          }, r = await e.post(Ha(), t);
          r?.data?.chart?.id && (A.value.id = r.data.chart.id), await Rn();
          const a = s(
            "charts.messages.saved",
            "Grafiekconfiguratie opgeslagen."
          );
          x.value = a, b.value = "", setTimeout(() => {
            x.value === a && (x.value = "");
          }, 2500);
        } catch {
          b.value = s(
            "charts.messages.save_failed",
            "Opslaan van de grafiekconfiguratie is mislukt."
          );
        } finally {
          Ue.value = !1;
        }
      }
    }
    async function Ro(e) {
      Ue.value = !0;
      try {
        await nt().delete(
          `${Ar.value}/rw-table-charts/${Number(e)}`
        ), await Rn(), A.value.id === e && (Y.value = "list"), b.value = "";
      } catch {
        b.value = s(
          "charts.messages.delete_failed",
          "Verwijderen van de grafiekconfiguratie is mislukt."
        );
      } finally {
        Ue.value = !1;
      }
    }
    async function Eo() {
      if (Y.value === "list")
        return;
      N.value = !0, q.value = "";
      let e = null;
      try {
        e = await ei();
      } catch {
        O.value = [], q.value = s(
          "charts.messages.source_load_failed",
          "Kon brondata voor de grafiek niet laden."
        ), wt();
      } finally {
        N.value = !1;
      }
      q.value || (O.value = Array.isArray(e) ? e : [], await br());
    }
    async function To() {
      if (N.value || !Er.value)
        return;
      it.value = !0;
      let e = null;
      try {
        if (await ne(), Le || await br(), !Le) {
          b.value = s(
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
        }), r = String(A.value?.description || "").trim() || s("charts.pdf.default_title", "Grafiek"), a = `${bo(Rr.value)} - ${(/* @__PURE__ */ new Date()).toLocaleString(_.value)}`;
        e = document.createElement("div"), e.className = "rw-chart-pdf-export", e.innerHTML = `
            <div style="width: 1080px; background: #ffffff; padding: 24px 28px 18px; box-sizing: border-box; font-family: Arial, sans-serif;">
                <div style="font-size: 22px; font-weight: 700; color: #0f172a; line-height: 1.35; margin-bottom: 4px;">${On(r)}</div>
                <div style="font-size: 14px; color: #64748b; line-height: 1.4; margin-bottom: 18px;">${On(a)}</div>
                <div style="width: 100%; display: flex; justify-content: center; align-items: center; overflow: hidden;">
                    <img src="${t}" alt="${On(s("charts.pdf.image_alt", "Grafiek export"))}" style="display: block; width: 100%; height: auto; object-fit: contain;" />
                </div>
            </div>
        `, document.body.appendChild(e), await (await Lo())().set({
          margin: [10, 10, 10, 10],
          filename: po(),
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
        }).from(e).save(), b.value = "";
      } catch {
        b.value = s(
          "charts.messages.pdf_failed",
          "PDF afdrukken van de grafiek is mislukt."
        );
      } finally {
        e && e.remove(), it.value = !1;
      }
    }
    function ri(e) {
      return e == null || e === "" ? "(Leeg)" : String(e);
    }
    function jo(e) {
      const t = Number(e);
      return Number.isFinite(t) ? t : 0;
    }
    function $o() {
      return {
        count: 0,
        sum: 0,
        min: null,
        max: null
      };
    }
    function zo(e, t, r) {
      e.count += 1, t !== "count" && (e.sum += r, (e.min === null || r < e.min) && (e.min = r), (e.max === null || r > e.max) && (e.max = r));
    }
    function ni(e, t) {
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
    function Vo(e, t) {
      const r = Array.isArray(e) ? e : [], n = Pr(t).builder.dataset, u = String(n.x_field || "").trim(), l = String(n.metric_field || "").trim(), p = String(n.series_field || "").trim(), y = Ga(n.aggregate);
      if (!u)
        return { labels: [], series: [] };
      if (y !== "count" && l === "")
        return { labels: [], series: [] };
      const C = /* @__PURE__ */ new Map(), I = [];
      r.forEach((ke) => {
        const Ee = ri(ke?.[u]), Ne = p ? ri(ke?.[p]) : s("charts.series.total", "Totaal");
        C.has(Ee) || C.set(Ee, /* @__PURE__ */ new Map());
        const pt = C.get(Ee);
        pt.has(Ne) || (pt.set(Ne, $o()), I.includes(Ne) || I.push(Ne));
        const er = y === "count" ? 0 : jo(ke?.[l]);
        zo(
          pt.get(Ne),
          y,
          er
        );
      });
      const j = Ya(n.sort_direction), te = Xa(n.limit), We = [...C.entries()].map(([ke, Ee]) => {
        let Ne = 0;
        return Ee.forEach((pt) => {
          Ne += ni(pt, y);
        }), {
          label: ke,
          total: Ne
        };
      }).sort((ke, Ee) => ke.total === Ee.total ? ke.label.localeCompare(Ee.label, void 0, {
        numeric: !0,
        sensitivity: "base"
      }) : j === "asc" ? ke.total - Ee.total : Ee.total - ke.total).slice(0, te).map((ke) => ke.label);
      if (We.length === 0)
        return { labels: [], series: [] };
      const Pt = (p ? I : [s("charts.series.total", "Totaal")]).map((ke) => {
        const Ee = We.map((Ne) => {
          const pt = C.get(Ne)?.get(ke), er = ni(pt, y);
          return Number.isFinite(er) ? Number(er) : 0;
        });
        return {
          name: ke,
          data: Ee
        };
      });
      return {
        labels: We,
        series: Pt
      };
    }
    function ai() {
      return Y.value === "view" ? tt.value : Y.value === "edit" ? qe.value : null;
    }
    function Do() {
      try {
        const e = document.createElement("canvas");
        return e ? !!(e.getContext("webgl2") || e.getContext("webgl") || e.getContext("experimental-webgl")) : !1;
      } catch {
        return !1;
      }
    }
    async function ii() {
      if (or)
        return or;
      const [e] = await Promise.all([
        import("echarts"),
        import("echarts-gl")
      ]);
      return or = e, xa = !0, or;
    }
    async function Lo() {
      if (Ir)
        return Ir;
      const e = await import("html2pdf.js");
      return Ir = e.default || e, Ir;
    }
    async function No() {
      xa || await ii();
    }
    function wt() {
      Le && (Le.dispose(), Le = null);
    }
    function Po(e) {
      const t = Array.isArray(e?.labels) ? e.labels : [], r = Array.isArray(e?.series) ? e.series : [], a = String(Rr.value || "pie"), n = t.map((u, l) => {
        const p = r.reduce((y, C) => {
          const I = Array.isArray(C.data) ? Number(C.data[l] || 0) : 0;
          return y + (Number.isFinite(I) ? I : 0);
        }, 0);
        return {
          name: String(u),
          value: p
        };
      });
      return {
        color: st,
        tooltip: {
          trigger: "item"
        },
        legend: {
          show: ut.value.show_legend !== !1,
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
    function Bo(e, t = "bar") {
      const r = Array.isArray(e?.labels) ? e.labels : [], a = Array.isArray(e?.series) ? e.series : [], n = Fn(ut.value.orientation) === "horizontal", u = n && t === "line" ? "bar" : String(t || "bar");
      return {
        color: st,
        tooltip: {
          trigger: "axis",
          axisPointer: { type: "shadow" }
        },
        legend: {
          show: ut.value.show_legend !== !1,
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
          name: String(l.name || s("charts.series.total", "Totaal")),
          type: u,
          stack: ut.value.stacked ? "total" : null,
          smooth: u === "line",
          data: Array.isArray(l.data) ? l.data.map((p) => Number(p || 0)) : []
        }))
      };
    }
    function Ko(e, t = "bar3d") {
      const r = or, a = Array.isArray(e?.labels) ? e.labels : [], n = Array.isArray(e?.series) ? e.series : [], u = Fn(ut.value.orientation) === "horizontal";
      return String(t || "bar3d") === "line3d" ? {
        color: st,
        tooltip: { trigger: "item" },
        legend: {
          show: ut.value.show_legend !== !1,
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
                color: st[y % st.length]
              },
              { offset: 1, color: "#0f172a" }
            ]) : st[y % st.length]
          },
          data: Array.isArray(p.data) ? p.data.map((C) => Number(C || 0)) : []
        }))
      } : {
        color: st,
        tooltip: {
          trigger: "axis",
          axisPointer: { type: "shadow" }
        },
        legend: {
          show: ut.value.show_legend !== !1,
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
          stack: ut.value.stacked ? "total" : null,
          barMaxWidth: 48,
          itemStyle: {
            color: st[y % st.length],
            borderColor: "#0f172a",
            borderWidth: 0.6,
            shadowBlur: 10,
            shadowOffsetY: 8,
            shadowColor: "rgba(15, 23, 42, 0.25)"
          },
          data: Array.isArray(p.data) ? p.data.map((C) => Number(C || 0)) : []
        }))
      };
    }
    function Uo(e, t = "bar3d_webgl") {
      const r = Array.isArray(e?.labels) ? e.labels : [], a = Array.isArray(e?.series) ? e.series : [], n = String(t || "bar3d_webgl"), u = a.map(
        (y, C) => String(y.name || `Reeks ${C + 1}`)
      ), l = a.reduce((y, C) => {
        const I = Array.isArray(C.data) ? C.data : [], j = Math.max(0, ...I.map((te) => Number(te || 0)));
        return Math.max(y, j);
      }, 0);
      if (n === "line3d_webgl")
        return {
          tooltip: {},
          legend: {
            show: ut.value.show_legend !== !1,
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
          series: a.map((y, C) => ({
            name: String(y.name || `Reeks ${C + 1}`),
            type: "line3D",
            lineStyle: {
              width: 4
            },
            data: (Array.isArray(y.data) ? y.data : []).map(
              (I, j) => [j, C, Number(I || 0)]
            )
          }))
        };
      const p = [];
      return a.forEach((y, C) => {
        (Array.isArray(y.data) ? y.data : []).forEach((j, te) => {
          p.push({
            value: [te, C, Number(j || 0)]
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
            data: p,
            shading: "lambert"
          }
        ]
      };
    }
    function qo(e) {
      const t = String(Rr.value || "bar");
      return t === "pie" || t === "doughnut" ? Po(e) : t === "bar3d_webgl" || t === "line3d_webgl" ? Uo(e, t) : t === "bar3d" || t === "line3d" ? Ko(e, t) : Bo(
        e,
        t === "line" ? "line" : "bar"
      );
    }
    function li() {
      Le && Le.resize();
    }
    async function br() {
      if (!ce.value || Y.value === "list") {
        wt();
        return;
      }
      if (await ne(), !ai() || !Er.value) {
        wt();
        return;
      }
      const t = String(Rr.value || "bar");
      if ((t === "bar3d_webgl" || t === "line3d_webgl") && !Do()) {
        q.value = s(
          "charts.messages.webgl_unsupported",
          "WebGL wordt niet ondersteund in deze browser of op deze GPU. Kies een niet-WebGL grafiektype."
        ), wt();
        return;
      }
      const r = await ii();
      (t === "bar3d_webgl" || t === "line3d_webgl") && await No();
      const a = ai();
      if (a) {
        (!Le || Le.getDom() !== a) && (wt(), Le = r.init(a));
        try {
          Le.setOption(qo(sr.value), !0), li();
        } catch {
          q.value = s(
            "charts.messages.render_failed",
            "Kon de grafiek niet renderen met de huidige instellingen."
          );
        }
      }
    }
    function Ho(e) {
      if (!i.manualOrdering) {
        if ($e.value === e) {
          Se.value = Se.value === "asc" ? "desc" : "asc";
          return;
        }
        $e.value = e, Se.value = "asc";
      }
    }
    function En(e) {
      return !i.manualOrdering && e?.sortable !== !1;
    }
    function Wo(e) {
      if (De.value || e === "...")
        return;
      const t = Number(e);
      if (!Number.isFinite(t))
        return;
      const r = Math.round(t);
      r < 1 || r > qt.value || r !== Q.value && (Q.value = r);
    }
    async function Go(e, t, r, a) {
      pr(r);
      const n = Zr(t, e);
      if (_e.value !== null && Ze.value !== null && !n && !await Qr("blur"))
        return;
      if (e.editable) {
        if (n)
          return;
        Lt(t, e);
        return;
      }
      if (!e.clickable)
        return;
      const u = $n(e) ? Ur(e, t) : t[e.key];
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
      if (ee.value.length === 0) {
        Ke.value = 0;
        return;
      }
      const t = Math.max(0, Math.min(e, ee.value.length - 1));
      Ke.value = t;
    }
    function Yo() {
      pr(Ke.value);
    }
    function Xo(e) {
      return {
        item: e,
        filters: { ..._a.value },
        filterModes: { ...Ma.value },
        filterTypes: { ...Fa.value },
        global: ve.value,
        selectionFilter: nr.value,
        selectedRowIds: [...i.checkedRows],
        sortField: $e.value,
        sortOrder: Se.value,
        page: Q.value,
        rowsPerPage: W.value
      };
    }
    function Zo(e) {
      v("on-menu-item-click", Xo(e)), le.value = !1;
    }
    function Jo(e) {
      const t = [...i.checkedRows], r = t.indexOf(e);
      r >= 0 ? t.splice(r, 1) : t.push(e), v("update:checkedRows", t);
    }
    function Qo(e) {
      const t = ee.value.map((a) => a[i.idKey]).filter((a) => a != null);
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
    function zt(e) {
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
      const r = e.editItemValue || "value", a = e.editItemTitle || "title", n = e.editField || e.key, u = t?.[n] !== void 0 ? t?.[n] : t?.[e.key], l = zt(u);
      return l.length === 0 ? [] : !Array.isArray(e.editItems) || e.editItems.length === 0 ? l.map((p) => String(p)) : l.map((p) => {
        const y = e.editItems.find(
          (C) => String(C?.[r]) === String(p)
        );
        return y && Object.prototype.hasOwnProperty.call(y, a) ? String(y[a] ?? p) : String(p);
      });
    }
    function Tn(e, t) {
      const r = e[t.key];
      if (t.editMultiple === !0) {
        const a = Br(t, e);
        if (a.length > 0)
          return a.join(", ");
        const n = e?.[t.editField || t.key] !== void 0 ? e?.[t.editField || t.key] : e?.[t.key];
        if (zt(n).length === 0)
          return "-";
      }
      if ((t.editInput === "select" || t.editInput === "autocomplete") && Array.isArray(t.editItems)) {
        const a = t.editItemValue || "value", n = t.editItemTitle || "title", u = t.editField || t.key, l = t.editItems.find(
          (p) => String(p?.[a]) === String(e[u])
        );
        if (l && Object.prototype.hasOwnProperty.call(l, n))
          return l[n] ?? "-";
      }
      if (r == null || r === "")
        return "-";
      if ((t.type === "date" || t.type === "datetime") && typeof t.dateDisplayFormat == "string" && t.dateDisplayFormat.trim() !== "") {
        const a = oo(r, t);
        return a ? so(
          a,
          t.dateDisplayFormat.trim(),
          Ka(t)
        ) : ao(t);
      }
      return t.type === "boolean" ? ui(t, r) : r;
    }
    function ft(e, t) {
      return !!(e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, t));
    }
    function es(e, t) {
      const r = t == null ? "" : String(t);
      return e?.editCustomTrim === !1 ? r : r.trim();
    }
    function oi(e, t, r) {
      const a = e.editField || e.key, n = typeof e.editCustomField == "string" && e.editCustomField !== "" ? e.editCustomField : null, u = ft(e, "editCustomSentinelValue"), p = (typeof e.editCustomSentinelField == "string" && e.editCustomSentinelField !== "" ? e.editCustomSentinelField : null) || (u ? a : null), y = {
        primaryValue: r,
        extraUpdates: {}
      };
      if (t?.kind === "multiple")
        return y.primaryValue = zt(t.values), y;
      if (t?.kind === "item")
        return y.primaryValue = t.value, e.editSelectExtraUpdates && typeof e.editSelectExtraUpdates == "object" && t.item && typeof t.item == "object" && Object.entries(e.editSelectExtraUpdates).forEach(
          ([j, te]) => {
            typeof j != "string" || j === "" || typeof te != "string" || te === "" || (y.extraUpdates[j] = t.item[te]);
          }
        ), n && e.editCustomClearOnSelect !== !1 && (y.extraUpdates[n] = ""), p && p !== a && ft(e, "editCustomResetValueOnSelect") && (y.extraUpdates[p] = e.editCustomResetValueOnSelect), y;
      if (t?.kind !== "custom" || e.editAutocompleteAllowCustom !== !0)
        return y;
      const C = es(
        e,
        t.input ?? t.value ?? t.label ?? ""
      ), I = Math.max(0, Number(e.editCustomMinLength || 0));
      if (C === "" || C.length < I)
        return y;
      if (n && (y.extraUpdates[n] = C), p) {
        const j = u ? e.editCustomSentinelValue : null;
        return p === a ? y.primaryValue = j : y.extraUpdates[p] = j, y;
      }
      return n && n !== a ? (ft(e, "editCustomPrimaryValueOnCustom") ? y.primaryValue = e.editCustomPrimaryValueOnCustom : y.primaryValue = null, y) : (y.primaryValue = C, y);
    }
    function ts(e, t) {
      const r = _e.value, a = e.editField || e.key, n = oi(
        e,
        t,
        Me.value
      );
      Me.value = n.primaryValue, Ft.value = n.extraUpdates, r != null && (Xr(r, e), qn(r, a)), ae.value = "";
    }
    function si(e, t) {
      const r = e.editField || e.key, a = L.value[r] ?? null, n = oi(e, t, a);
      L.value = {
        ...L.value,
        [r]: n.primaryValue,
        ...n.extraUpdates
      }, Dt(e), wr(r), ae.value = "";
    }
    function jn(e, t) {
      if (!t || typeof t != "object" || e?.editMultiple === !0)
        return null;
      if (e.editAutocompleteAllowCustom === !0) {
        const r = typeof e.editCustomField == "string" && e.editCustomField !== "" ? e.editCustomField : null;
        if (r && t[r] !== void 0 && t[r] !== null)
          return t[r];
      }
      return t[e.key] !== void 0 && t[e.key] !== null ? t[e.key] : null;
    }
    function rs(e, t) {
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
      ) && ft(e, "editCustomFieldValidationRules") && (r[e.editCustomField] = e.editCustomFieldValidationRules);
      const a = typeof e.editCustomSentinelField == "string" && e.editCustomSentinelField !== "" ? e.editCustomSentinelField : null;
      return a && Object.prototype.hasOwnProperty.call(t, a) && ft(e, "editCustomSentinelValidationRules") && (r[a] = e.editCustomSentinelValidationRules), r;
    }
    function Kr(e, t) {
      !t || typeof t != "object" || Object.entries(t).forEach(([r, a]) => {
        e[r] = a;
      });
    }
    function ui(e, t) {
      const r = Dr(t), a = e?.booleanLabels, n = a?.true ?? a?.yes ?? e?.booleanTrueLabel ?? s("common.yes", "Ja"), u = a?.false ?? a?.no ?? e?.booleanFalseLabel ?? s("common.no", "Nee");
      return r === !0 ? n : r === !1 ? u : t ?? s("common.dash", "-");
    }
    function $n(e) {
      return e?.type === "icon" ? !0 : e?.type !== "boolean" ? !1 : e?.booleanDisplay === "icon" || e?.booleanAsIcon === !0;
    }
    function Ur(e, t) {
      return typeof e?.iconValue == "function" ? e.iconValue(t) : t?.[e?.key];
    }
    function qr(e) {
      const t = Dr(e);
      return t !== null ? t : !!e;
    }
    function ns(e, t) {
      const r = Ur(e, t);
      if (e?.iconMap && typeof e.iconMap == "object") {
        const a = r ?? "default";
        return e.iconMap[a] ?? e.iconMap.default ?? (qr(r) ? e?.iconTrue || "mdi-check-circle" : e?.iconFalse || "mdi-close-circle");
      }
      return qr(r) ? e?.iconTrue || "mdi-check-circle" : e?.iconFalse || "mdi-close-circle";
    }
    function as(e, t) {
      const r = Ur(e, t);
      if (e?.iconColorMap && typeof e.iconColorMap == "object") {
        const a = r ?? "default";
        return e.iconColorMap[a] ?? e.iconColorMap.default ?? (qr(r) ? e?.iconTrueColor || "#16a34a" : e?.iconFalseColor || "#ef4444");
      }
      return qr(r) ? e?.iconTrueColor || "#16a34a" : e?.iconFalseColor || "#ef4444";
    }
    const di = Object.freeze({
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
    }), ci = Object.freeze({
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
    function kt(e) {
      return e == null ? !1 : String(e).trim() !== "";
    }
    function fi(e, t) {
      const r = Tn(t, e);
      return r === "-" && (t?.[e?.key] === null || t?.[e?.key] === void 0 || t?.[e?.key] === "") ? "" : r;
    }
    function is(e, t) {
      return e?.colorKey && kt(t?.[e.colorKey]) ? t[e.colorKey] : kt(e?.chipDefaultColor) ? e.chipDefaultColor : "slate";
    }
    function ls(e, t) {
      return e?.type !== "chip" || !kt(fi(e, t)) ? !1 : e?.chipOnlyWhenColor ? e?.colorKey ? kt(t?.[e.colorKey]) : !1 : !0;
    }
    function bi(e) {
      const t = Number(e?.editMaxSelectionChips || 0);
      return !Number.isFinite(t) || t <= 0 ? 3 : Math.max(1, Math.floor(t));
    }
    function os(e, t) {
      const r = Br(e, t);
      return r.length === 0 ? [] : r.slice(0, bi(e));
    }
    function pi(e, t) {
      const r = Br(e, t);
      return r.length === 0 ? 0 : Math.max(0, r.length - bi(e));
    }
    function ss(e, t) {
      return e?.editMultiple !== !0 ? !1 : Br(e, t).length > 0;
    }
    function zn(e) {
      return String(e?.chipVariant || "solid").toLowerCase() === "tonal" ? "tonal" : "solid";
    }
    function vi(e, t) {
      const r = kt(t) ? String(t).trim().toLowerCase() : "", a = zn(e) === "tonal" ? di : ci;
      return a[r] || a.slate;
    }
    function us(e, t) {
      const r = is(e, t), a = kt(r) ? String(r).trim().toLowerCase() : "", n = zn(e);
      return kt(a) && (Object.prototype.hasOwnProperty.call(di, a) || Object.prototype.hasOwnProperty.call(ci, a)) ? vi(e, r) : kt(r) ? n === "tonal" ? {
        borderColor: String(r),
        backgroundColor: "transparent",
        color: String(r)
      } : {
        backgroundColor: String(r),
        borderColor: "transparent",
        color: "#ffffff"
      } : vi(e, "slate");
    }
    function ds(e, t) {
      return [
        "inline-flex max-w-full items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium leading-5",
        zn(e) === "solid" ? "shadow-sm" : "",
        e?.clickable ? "transition-colors group-hover:brightness-95" : ""
      ];
    }
    function Ct(e) {
      const t = Number(He.value?.[e]), r = ur(e);
      if (Number.isFinite(t) && t > 0)
        return Math.max(r, Math.round(t));
      const a = Ta(e);
      return jr(a || { key: e });
    }
    function Hr(e) {
      return e === "right" || e === "center" ? e : "left";
    }
    function cs(e) {
      const t = Hr(e?.align);
      return t === "center" ? "justify-center" : t === "right" ? "justify-end" : "justify-start";
    }
    function fs(e, t) {
      return t && Hr(e?.align) === "left" ? "pl-9" : "";
    }
    function bs(e) {
      const t = String(e?.key ?? "").toLowerCase(), r = String(e?.label ?? "").toLowerCase(), a = String(i.idKey ?? "").toLowerCase();
      return t ? t === a || t === "id" || t.endsWith("_id") ? !0 : r === "id" || r.endsWith(" id") : !1;
    }
    function ps(e, t) {
      if (bs(e))
        return !0;
      const r = String(e?.key ?? "").toLowerCase(), a = String(e?.label ?? "").toLowerCase(), n = t?.[e?.key], u = t?.[i.idKey];
      return r.includes("id") || a.includes("id") || n != null && u !== void 0 && u !== null && String(n) === String(u) ? !0 : r.includes("nummer") || r.includes("number") || r.endsWith("_nr") || r.includes("code") ? typeof n == "string" || typeof n == "number" || typeof n == "bigint" : !1;
    }
    function vs(e) {
      return !e?.clickable && e?.editable !== !0 ? "" : "rw-cell-clickable";
    }
    function gs(e, t) {
      return e?.clickable ? ps(e, t) ? "rw-id-hover inline-flex max-w-full items-center rounded-full px-2 py-0.5 font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300" : "truncate text-blue-700 hover:underline" : e?.editable === !0 ? "rw-cell-editable truncate" : "truncate";
    }
    function ys(e) {
      const t = ee.value.length;
      if (t <= 0)
        return "top-0";
      const r = Math.max(0, t - 3);
      return e >= r ? "bottom-0" : "top-0";
    }
    function ms() {
      let e = 0;
      return i.checkboxColumn && (e += Mr), e;
    }
    function gi(e) {
      let t = ms();
      for (let r = 0; r < e; r += 1) {
        const a = H.value[r];
        a && (t += Ct(a.key));
      }
      return t;
    }
    function Wr(e, t = !1, r = null) {
      return Oe.value ? {
        position: "sticky",
        left: "0px",
        width: `${Mr}px`,
        minWidth: `${Mr}px`,
        maxWidth: `${Mr}px`,
        zIndex: t ? Fe.stickyUtilityHeader : Fe.stickyUtilityBody,
        backgroundColor: t ? "rgb(248 250 252)" : r || bl
      } : null;
    }
    function hs(e, t) {
      const r = Ct(e.key), a = {
        width: `${r}px`,
        minWidth: `${r}px`,
        maxWidth: `${r}px`,
        textAlign: Hr(e.align)
      };
      return !Oe.value || t >= me.value ? a : {
        ...a,
        position: "sticky",
        left: `${gi(t)}px`,
        zIndex: Fe.stickyDataHeader,
        backgroundColor: "rgb(248 250 252)"
      };
    }
    function yi(e, t, r = null) {
      const a = Ct(e.key), n = {
        width: `${a}px`,
        minWidth: `${a}px`,
        maxWidth: `${a}px`,
        textAlign: Hr(e.align)
      };
      return !Oe.value || t >= me.value ? n : {
        ...n,
        position: "sticky",
        left: `${gi(t)}px`,
        zIndex: Fe.stickyDataBody,
        backgroundColor: r || bl
      };
    }
    function xs(e, t, r, a) {
      const n = yi(t, a);
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
    function ws(e, t, r, a) {
      const n = xs(e, t, r, a);
      return Zr(e, t) ? Oe.value && a < me.value ? {
        ...n,
        zIndex: Fe.stickyDataBody + 2
      } : {
        ...n
      } : Zn(e, a) && Xn(e[i.idKey]) ? {
        ...n,
        zIndex: Fe.rowMenuOverlay + 1
      } : n;
    }
    function mi(e, t) {
      return yi(e, t, va);
    }
    function Gr(e) {
      return e < me.value ? "mdi-lock" : e === me.value ? "mdi-lock-open-variant" : "";
    }
    function ks(e) {
      if (!Oe.value)
        return;
      const t = Math.max(0, H.value.length), r = e === me.value ? me.value + 1 : e;
      me.value = Math.min(Math.max(r, 0), t), tn(), wn(!0);
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
    function Cs(e, t) {
      ht = {
        key: t,
        startX: e.clientX,
        startWidth: Ct(t),
        minWidth: ur(t)
      }, window.addEventListener("mousemove", hi), window.addEventListener("mouseup", Vn);
    }
    function Vn() {
      ht && (window.removeEventListener("mousemove", hi), window.removeEventListener("mouseup", Vn), ht = null, Xi());
    }
    function Ss(e, t, r, a) {
      return typeof i.cellClass != "function" ? null : i.cellClass({
        row: e,
        col: t,
        value: e[t.key],
        rowId: e[i.idKey],
        rowIndex: r,
        colIndex: a
      });
    }
    function _s(e) {
      const t = G.value.find((r) => r.key === e);
      t && (t.selected = !t.selected);
    }
    function xi(e, t) {
      const r = G.value.findIndex(
        (l) => l.key === e
      );
      if (r < 0)
        return;
      const a = r + t;
      if (a < 0 || a >= G.value.length)
        return;
      const n = [...G.value], [u] = n.splice(r, 1);
      n.splice(a, 0, u), G.value = n;
    }
    function Ms(e, t) {
      if (!e || !t || e === t)
        return;
      const r = G.value.findIndex(
        (l) => l.key === e
      ), a = G.value.findIndex(
        (l) => l.key === t
      );
      if (r < 0 || a < 0 || r === a)
        return;
      const n = [...G.value], [u] = n.splice(r, 1);
      n.splice(a, 0, u), G.value = n;
    }
    function Fs(e, t) {
      if (gt.value = e, t?.dataTransfer) {
        t.dataTransfer.effectAllowed = "move";
        try {
          t.dataTransfer.setData("text/plain", String(e)), Ja(t);
        } catch {
          return;
        }
      }
    }
    function Os(e, t) {
      gt.value && (t.preventDefault(), ar.value = e, t?.dataTransfer && (t.dataTransfer.dropEffect = "move"));
    }
    function Is(e, t) {
      t.preventDefault();
      const r = t?.dataTransfer?.getData?.("text/plain") || null, a = gt.value || r;
      Ms(a, e), Dn();
    }
    function Dn() {
      gt.value = null, ar.value = null;
    }
    function As(e) {
      se.value = se.value === e ? null : e, H.value.find((r) => r.key === e) && (Te.value[e] || (Te.value[e] = Cn(
        Qe.value[e]
      )));
    }
    function Rs(e) {
      return Object.prototype.hasOwnProperty.call(
        xt.value,
        e
      );
    }
    function Es(e) {
      delete ie.value[e], delete ge.value[e], delete Te.value[e], se.value = null;
    }
    function Ts(e, t) {
      const r = e.key;
      if (Te.value[r] = t, Ht(t)) {
        Na(r) && Yr(r, ""), ge.value[r] = $a(
          e,
          ge.value[r]
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
      ge.value[e] = t;
    }
    function js(e, t) {
      if (!(t instanceof HTMLInputElement)) {
        ir.delete(e);
        return;
      }
      ir.set(e, t);
    }
    function wi() {
      const e = Rt.value;
      if (!e || se.value !== e.columnKey)
        return;
      const t = ir.get(e.columnKey);
      if (!(t instanceof HTMLInputElement))
        return;
      const r = document.activeElement;
      if (r && r !== document.body && r !== t) {
        Rt.value = null;
        return;
      }
      if (t.focus({ preventScroll: !0 }), Number.isInteger(e.selectionStart) && Number.isInteger(e.selectionEnd))
        try {
          t.setSelectionRange(e.selectionStart, e.selectionEnd);
        } catch {
        }
      Rt.value = null;
    }
    function $s(e, t) {
      const r = t?.target, a = r?.value ?? "";
      Yr(e, a), La(e) && Ln(e, ""), r instanceof HTMLInputElement && (Rt.value = {
        columnKey: e,
        selectionStart: r.selectionStart,
        selectionEnd: r.selectionEnd
      }, i.managed || ne(() => {
        wi();
      }));
    }
    function ki(e, t) {
      const r = zr(e);
      Ln(
        e,
        $a(r, t)
      ), Na(e) && Yr(e, "");
    }
    function zs(e, t) {
      return e instanceof HTMLSelectElement ? t?.editMultiple === !0 ? Array.from(e.selectedOptions).map((r) => r.value) : e.value : t?.editMultiple === !0 ? [] : "";
    }
    function Ci(e, t, r) {
      const a = ie.value[e];
      (!a || typeof a != "object") && (ie.value[e] = { from: "", to: "" }), ie.value[e] = {
        ...ie.value[e],
        [t]: r
      };
    }
    function Vs() {
      ie.value = {}, ge.value = {}, Te.value = {}, se.value = null, kn();
    }
    function Ds(e, t) {
      return t === "tussen" ? "date" : e === "number" ? "number" : e === "date" || e === "datetime" ? "date" : "text";
    }
    function Si() {
      Q.value = 1, xe.value = W.value, Ie.value = [];
    }
    function Ls(e) {
      const [t] = e;
      if (!(!t?.isIntersecting || Ae.value)) {
        if (lr.value) {
          if (Q.value >= qt.value)
            return;
          const r = Q.value + 1;
          if (i.managed) {
            Wt({ append: !0, pageOverride: r });
            return;
          }
          Q.value = r;
          return;
        }
        xe.value >= Ut.value.length || (xe.value = Math.min(
          xe.value + W.value,
          Ut.value.length
        ));
      }
    }
    function Nn() {
      mt && (mt.disconnect(), mt = null), !(!De.value || !de.value) && (mt = new IntersectionObserver(Ls, {
        root: je.value,
        rootMargin: "200px",
        threshold: 0
      }), mt.observe(de.value));
    }
    function Vt(e = null) {
      if (!i.inlineCreate)
        return;
      const t = e == null;
      t && !De.value && (Q.value = qt.value), K.value = e, ze.value = !0, Xe.value = null, ae.value = "", xr(), t && ne(() => {
        Di();
      });
    }
    function Ns(e) {
      return !ze.value || K.value === null || K.value === void 0 ? !1 : e?.[i.idKey] === K.value;
    }
    function Gt() {
      if (!De.value)
        return;
      const e = $.value.length;
      xe.value = Math.max(
        W.value,
        Math.min(Math.max(xe.value, e), e)
      );
    }
    function vr(e) {
      if (!e || typeof e != "object")
        return;
      if (K.value === null || K.value === void 0) {
        $.value = [...$.value, e], Gt();
        return;
      }
      const t = $.value.findIndex(
        (a) => a?.[i.idKey] === K.value
      );
      if (t < 0) {
        $.value = [...$.value, e];
        return;
      }
      const r = [...$.value];
      r.splice(t, 0, e), $.value = r, Gt();
    }
    function Ps(e, t) {
      if (e == null || !t || typeof t != "object")
        return;
      const r = $.value.findIndex(
        (n) => n?.[i.idKey] === e
      );
      if (r < 0) {
        vr(t);
        return;
      }
      const a = [...$.value];
      a[r] = {
        ...a[r],
        ...t
      }, $.value = a, Gt();
    }
    function Bs(e) {
      e != null && ($.value = $.value.filter(
        (t) => t?.[i.idKey] !== e
      ), Gt());
    }
    function St() {
      ze.value = !1, xr();
    }
    function Pn() {
      const e = $.value.map((t) => Number(t?.[i.idKey])).filter((t) => Number.isFinite(t));
      return e.length > 0 ? Math.max(...e) + 1 : Date.now();
    }
    function Ks() {
      const e = i.manualOrderField;
      if (!e)
        return null;
      const t = $.value.map((r) => Number(r?.[e])).filter((r) => Number.isFinite(r));
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
          (y, [C, I]) => (a.has(C) || (y[C] = I), y),
          {}
        ),
        ...e && typeof e == "object" ? e : {}
      }, p = r?.[i.idKey] ?? r?.id;
      if ((l[i.idKey] === void 0 || l[i.idKey] === null) && p !== void 0 && p !== null && (l[i.idKey] = p), (l[i.idKey] === void 0 || l[i.idKey] === null) && (l[i.idKey] = Pn()), i.manualOrdering && (K.value === null || K.value === void 0)) {
        const y = i.manualOrderField;
        if (y && (l[y] === void 0 || l[y] === null)) {
          const C = Ks();
          C !== null && (l[y] = C);
        }
      }
      return (!Object.prototype.hasOwnProperty.call(l, i.idKey) || l[i.idKey] === void 0 || l[i.idKey] === null) && (l[i.idKey] = Pn()), l;
    }
    function Us(e) {
      return Array.isArray(e) ? e.length > 0 ? String(e[0]) : "" : e == null ? "" : String(e);
    }
    function Mi(e) {
      const t = e?.response?.data ?? {}, r = t?.errors, a = {};
      return r && typeof r == "object" && Object.entries(r).forEach(([n, u]) => {
        const l = String(n || "").trim();
        if (l === "")
          return;
        const p = Us(u);
        p !== "" && (a[l] = p);
      }), {
        status: Number(e?.response?.status || 0),
        message: typeof t?.message == "string" ? t.message : "",
        errors: a
      };
    }
    function qs(e) {
      return e ? typeof e == "string" ? e.split("|").map((r) => r.trim()).includes("required") : Array.isArray(e) ? e.some((t) => typeof t == "string" ? t.split(":")[0] === "required" : !1) : !1 : !1;
    }
    function gr(e) {
      return !e || typeof e != "object" ? !1 : e.required === !0 ? !0 : e.required === !1 ? !1 : qs(e.validationRules);
    }
    function yr(e) {
      return e == null ? !0 : typeof e == "string" ? e.trim() === "" : Array.isArray(e) ? e.length === 0 : !1;
    }
    function mr(e) {
      if (typeof e?.requiredHighlightColor == "string") {
        const t = e.requiredHighlightColor.trim();
        if (t !== "")
          return t;
      }
      return "rgba(59, 130, 246, 0.1)";
    }
    function bt() {
      ae.value = "";
    }
    function Bn() {
      const e = String(i.validationMode || "both").trim().toLowerCase();
      return e === "client" || e === "server" || e === "both" ? e : "both";
    }
    function Fi(e, t = []) {
      const r = e == null || e === "" ? t : e, n = (Array.isArray(r) ? r : [r]).map(
        (u) => String(u || "").trim().toLowerCase()
      ).filter((u) => u !== "");
      return n.length > 0 ? n : [...t];
    }
    function Hs(e) {
      return Fi(
        e?.clientValidationOn,
        Fi(
          i.clientValidationOn,
          dn
        )
      );
    }
    function Ws(e, t) {
      if (Bn() === "server")
        return !1;
      const a = String(t || "save").toLowerCase();
      return Hs(e).includes(a) ? !!(typeof i.validationAdapter == "function" || typeof e?.clientValidate == "function" || e?.validationRules || e?.required === !0) : !1;
    }
    function Gs(e, t) {
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
    function Oi(e) {
      if (e == null || e === !0)
        return null;
      if (e === !1)
        return s("validation.invalid_value", "Ongeldige waarde.");
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
    function Ii({
      column: e,
      field: t,
      value: r,
      trigger: a,
      contextMode: n,
      row: u,
      draft: l
    }) {
      const p = String(a || "save").toLowerCase();
      if (!Ws(e, p))
        return null;
      const y = {
        value: r,
        field: t,
        column: e,
        row: u,
        draft: l,
        trigger: p,
        mode: n,
        rules: Gs(e, t)
      };
      if (typeof i.validationAdapter == "function") {
        const I = i.validationAdapter(y), j = Oi(I);
        if (j)
          return j;
      }
      if (typeof e?.clientValidate == "function") {
        const I = e.clientValidate(y), j = Oi(I);
        if (j)
          return j;
      }
      const C = y.rules;
      return C ? kl(r, C, {
        fieldLabel: String(
          e?.label || t || s("validation.this_field", "Dit veld")
        )
      }) : null;
    }
    function Dt(e) {
      hr(e, !0).forEach((r) => {
        wr(r);
      }), wr(e?.key);
    }
    function Xr(e, t) {
      hr(t, !0).forEach((a) => {
        qn(e, a);
      }), qn(e, t?.key);
    }
    function hr(e, t = !1) {
      const r = String(e?.editField || e?.key || ""), a = [];
      if (r !== "" && a.push(r), !t)
        return a;
      const n = typeof e?.editCustomField == "string" ? e.editCustomField : "";
      n !== "" && !a.includes(n) && a.push(n);
      const u = typeof e?.editCustomSentinelField == "string" ? e.editCustomSentinelField : "";
      return u !== "" && !a.includes(u) && a.push(u), e?.editExtraValidationRules && typeof e.editExtraValidationRules == "object" && Object.keys(e.editExtraValidationRules).forEach((l) => {
        const p = String(l || "").trim();
        p !== "" && !a.includes(p) && a.push(p);
      }), a;
    }
    function Ai(e, t, r = !1) {
      const a = hr(e, r), n = {};
      return a.forEach((u) => {
        const l = L.value[u], p = Ii({
          column: e,
          field: u,
          value: l,
          trigger: t,
          contextMode: "create",
          row: null,
          draft: L.value
        });
        p && (n[u] = p);
      }), n;
    }
    function Ys(e, t, r, a = !1) {
      const n = String(e?.editField || e?.key || ""), l = (a ? hr(e, !0) : [n]).filter((C) => C !== ""), p = {
        [n]: Me.value,
        ...Ft.value
      }, y = {};
      return l.forEach((C) => {
        const I = Ii({
          column: e,
          field: C,
          value: p[C],
          trigger: r,
          contextMode: "edit",
          row: t,
          draft: p
        });
        I && (y[C] = I);
      }), y;
    }
    function Ri(e, t, r = !1) {
      const a = Ai(e, t, r);
      return hr(e, r).forEach((u) => {
        wr(u);
      }), wr(e.key), Object.keys(a).length === 0 ? !0 : (Kn({
        ...we.value,
        ...a
      }), ae.value = s(
        "validation.not_saved_check_fields",
        "Niet bewaard. Controleer de rood gemarkeerde velden."
      ), !1);
    }
    function xr() {
      we.value = {};
    }
    function wr(e) {
      const t = String(e || "");
      if (t === "" || !we.value[t])
        return;
      const r = { ...we.value };
      delete r[t], we.value = r;
    }
    function Kn(e) {
      we.value = e && typeof e == "object" ? e : {};
    }
    function ue(e) {
      const t = String(e?.editField || e?.key || ""), r = typeof e?.editCustomField == "string" ? e.editCustomField : "", a = typeof e?.editCustomSentinelField == "string" ? e.editCustomSentinelField : "";
      return we.value[t] || we.value[String(e?.key || "")] || (r ? we.value[r] : "") || (a ? we.value[a] : "") || "";
    }
    function Un(e) {
      const t = String(e ?? "");
      if (t === "" || !B.value[t])
        return;
      const r = { ...B.value };
      delete r[t], B.value = r;
    }
    function Ei(e, t) {
      const r = String(e ?? "");
      r !== "" && (B.value = {
        ...B.value,
        [r]: t && typeof t == "object" ? t : {}
      });
    }
    function qn(e, t) {
      const r = String(e ?? ""), a = String(t || "");
      if (r === "" || a === "")
        return;
      const n = B.value[r];
      if (!n || !n[a])
        return;
      const u = { ...n };
      delete u[a], B.value = {
        ...B.value,
        [r]: u
      };
    }
    function rt(e, t) {
      const r = String(e ?? "");
      if (r === "")
        return "";
      const a = B.value[r] || {}, n = String(t?.editField || t?.key || ""), u = typeof t?.editCustomField == "string" ? t.editCustomField : "", l = typeof t?.editCustomSentinelField == "string" ? t.editCustomSentinelField : "";
      return a[n] || a[String(t?.key || "")] || (u ? a[u] : "") || (l ? a[l] : "") || "";
    }
    function Ti(e) {
      const t = String(e?.editField || e?.key || "");
      if (!gr(e) || e?.requiredHighlight === !1 || ue(e))
        return null;
      const r = L.value[t];
      return yr(r) ? {
        backgroundColor: mr(e)
      } : null;
    }
    function Xs(e, t) {
      return !gr(t) || t?.requiredHighlight === !1 || rt(e?.[i.idKey], t) || !yr(Me.value) ? null : {
        backgroundColor: mr(t)
      };
    }
    async function ji(e = "save") {
      if (!i.inlineCreate || Be.value)
        return !1;
      const t = Zs(), r = {
        ...L.value,
        validationType: "model"
      };
      ae.value = "", xr();
      const a = {};
      if (Cr().forEach((l) => {
        const p = Ai(
          l,
          e,
          e === "save" || e === "tab" || e === "blur"
        );
        Object.entries(p).forEach(([y, C]) => {
          a[y] || (a[y] = C);
        });
      }), Object.keys(a).length > 0)
        return Kn(a), ae.value = s(
          "validation.not_saved_check_fields",
          "Niet bewaard. Controleer de rood gemarkeerde velden."
        ), !1;
      if (Bn() === "client") {
        const l = {
          ...L.value,
          [i.idKey]: Pn()
        };
        return vr(l), St(), !0;
      }
      if (i.manualOrdering && (r.manualOrdering = !0, r.manualOrderField = i.manualOrderField), K.value !== null && K.value !== void 0 && (r.insertAboveId = K.value), !t) {
        const l = {
          ...L.value,
          [i.idKey]: Date.now()
        };
        return vr(l), St(), !0;
      }
      let u = null;
      if (!i.managed) {
        const l = _i({}, r, {});
        vr(l), u = l?.[i.idKey] ?? null;
      }
      Be.value = !0;
      try {
        const y = (await nt().post(t, r))?.data ?? {}, C = _i(
          y?.data ?? y,
          r,
          y
        );
        return i.managed ? await Wt({
          append: !1,
          pageOverride: Q.value
        }) : C && (u != null ? Ps(u, C) : vr(C), (K.value === null || K.value === void 0) && (Q.value = qt.value)), St(), !0;
      } catch (l) {
        u != null && Bs(u);
        const p = Mi(l);
        return Object.keys(p.errors).length > 0 ? (Kn(p.errors), ae.value = s(
          "validation.not_saved_check_fields",
          "Niet bewaard. Controleer de rood gemarkeerde velden."
        )) : p.message ? ae.value = p.message : ae.value = s(
          "validation.not_saved_unexpected",
          "Niet bewaard door een onverwachte fout."
        ), !1;
      } finally {
        Be.value = !1;
      }
    }
    function Zs() {
      return typeof i.inlineCreateRoute == "function" ? i.inlineCreateRoute() : typeof i.inlineCreateRoute == "string" && i.inlineCreateRoute ? i.inlineCreateRoute : typeof i.dataSource?.path == "string" && i.dataSource.path ? `${i.dataSource.path.replace(/\/$/, "")}/inline-create` : null;
    }
    function Lt(e, t) {
      if (!t?.editable)
        return;
      const r = e?.[i.idKey];
      r != null && (ze.value || (_e.value = r, Ze.value = t.key, Me.value = t.editMultiple === !0 ? zt(e[t.editField || t.key]) : e[t.editField || t.key] ?? "", Ft.value = {}, ae.value = "", Un(r), su(r, t.key)));
    }
    function Nt(e, t) {
      return e == null || t === null || t === void 0 ? !1 : String(e) === String(t);
    }
    function Zr(e, t) {
      return Nt(_e.value, e?.[i.idKey]) && Ze.value === t?.key;
    }
    function Jr(e, t) {
      return Nt(_e.value, e) && Ze.value === t;
    }
    function Yt() {
      _e.value !== null && _e.value !== void 0 && Un(_e.value), _e.value = null, Ze.value = null, Me.value = "", Ft.value = {};
    }
    async function Qr(e = "save") {
      if (_e.value === null || Ze.value === null)
        return !1;
      if (Je.value)
        return Je.value;
      const t = _e.value, r = Ze.value, a = Me.value, n = { ...Ft.value }, u = (async () => {
        const l = uu(t), p = H.value.find(
          (We) => We.key === r
        );
        if (!l || !p)
          return Jr(t, r) && Yt(), !1;
        const y = p.editField || p.key, C = a, I = { ...n }, j = Js(t);
        ae.value = "", Un(t);
        const te = Ys(
          p,
          l,
          e,
          e === "save"
        );
        if (Object.keys(te).length > 0)
          return Ei(t, te), ae.value = s(
            "validation.not_saved_check_fields",
            "Niet bewaard. Controleer de rood gemarkeerde velden."
          ), !1;
        if (Bn() === "client" || !j)
          return Hn(l, p, C), Kr(l, I), Jr(t, r) && Yt(), !0;
        Be.value = !0;
        try {
          const We = nt(), at = {
            field: y,
            value: C,
            validationType: p.validationType || "model"
          };
          if (Object.keys(I).length > 0) {
            at.extraUpdates = Object.entries(I).map(
              ([pt, er]) => ({
                field: pt,
                value: er
              })
            );
            const Ne = rs(
              p,
              I
            );
            Object.keys(Ne).length > 0 && (at.extraValidationRules = Ne);
          }
          at.validationType === "client" && p.validationRules && (at.validationRules = p.validationRules);
          const Pt = await We.patch(j, at), ke = Pt?.data?.value !== void 0 ? Pt.data.value : C, Ee = Pt?.data?.updated && typeof Pt.data.updated == "object" ? Pt.data.updated : null;
          return Hn(l, p, ke), Ee ? Kr(l, Ee) : Kr(l, I), Jr(t, r) && Yt(), !0;
        } catch (We) {
          const at = Mi(We);
          return Object.keys(at.errors).length > 0 ? (Ei(t, at.errors), ae.value = s(
            "validation.not_saved_check_fields",
            "Niet bewaard. Controleer de rood gemarkeerde velden."
          )) : at.message ? ae.value = at.message : ae.value = s(
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
    function Hn(e, t, r) {
      const a = t.editField || t.key;
      if (e[a] = r, a !== t.key) {
        const n = t.editDisplayFields;
        if (n && typeof n == "object") {
          const u = t.editItemValue || "value", l = Array.isArray(t.editItems) ? t.editItems.find(
            (p) => String(p?.[u]) === String(r)
          ) : null;
          l && Object.entries(n).forEach(([p, y]) => {
            e[p] = l[y];
          });
        }
      }
      e[t.key] = e[t.key] ?? r;
    }
    function Js(e) {
      return typeof i.inlineUpdateRoute == "function" ? i.inlineUpdateRoute(e) : typeof i.inlineUpdateRoute == "string" && i.inlineUpdateRoute ? i.inlineUpdateRoute.includes(":id") ? i.inlineUpdateRoute.replace(":id", String(e)) : i.inlineUpdateRoute.includes("{id}") ? i.inlineUpdateRoute.replace("{id}", String(e)) : `${i.inlineUpdateRoute.replace(/\/$/, "")}/${e}/inline` : typeof i.dataSource?.path == "string" && i.dataSource.path ? `${i.dataSource.path.replace(/\/$/, "")}/${e}/inline` : null;
    }
    function Qs(e) {
      return typeof i.inlineDeleteRoute == "function" ? i.inlineDeleteRoute(e) : typeof i.inlineDeleteRoute == "string" && i.inlineDeleteRoute ? i.inlineDeleteRoute.includes(":id") ? i.inlineDeleteRoute.replace(":id", String(e)) : i.inlineDeleteRoute.includes("{id}") ? i.inlineDeleteRoute.replace("{id}", String(e)) : `${i.inlineDeleteRoute.replace(/\/$/, "")}/${e}` : typeof i.dataSource?.path == "string" && i.dataSource.path ? `${i.dataSource.path.replace(/\/$/, "")}/${e}` : null;
    }
    async function eu(e) {
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
      const a = Qs(t);
      if (!a) {
        $.value = $.value.filter(
          (n) => n[i.idKey] !== t
        ), Gt();
        return;
      }
      Be.value = !0;
      try {
        await nt().delete(a, { data: r }), $.value = $.value.filter(
          (u) => u[i.idKey] !== t
        ), Gt(), Ie.value = Ie.value.filter(
          (u) => u[i.idKey] !== t
        );
      } finally {
        Be.value = !1;
      }
    }
    function tu(e) {
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
          label: s("actions.edit", "Bewerken"),
          icon: "mdi-pencil",
          disabled: jt.value.length === 0
        }
      ];
      return i.inlineCreate && i.manualOrdering && t.push({
        key: "insertAbove",
        label: s("actions.insert_above", "Invoegen boven"),
        icon: "mdi-arrow-up-bold-box-outline"
      }), i.inlineCreate && t.push({
        key: "insert",
        label: s("actions.new_row", "Nieuwe rij"),
        icon: "mdi-plus-box-outline"
      }), t.push({
        key: "delete",
        label: s("actions.delete", "Verwijderen"),
        icon: "mdi-delete-outline"
      }), t;
    }
    async function ru(e, t) {
      if (v("on-row-menu-item-click", { item: e, row: t }), Xe.value = null, !(!e || e.disabled)) {
        if (e.key === "edit") {
          const r = jt.value[0];
          r && Lt(t, r);
          return;
        }
        if (e.key === "insertAbove") {
          Vt(t[i.idKey]);
          return;
        }
        if (e.key === "insert") {
          Vt(null);
          return;
        }
        e.key === "delete" && await eu(t);
      }
    }
    function Xt(e) {
      e?.editable && Ri(e, "blur", !0);
    }
    async function Wn(e, t) {
      !t?.editable || !Zr(e, t) || await Qr("blur");
    }
    async function Gn(e) {
      if (!e.defaultPrevented) {
        if (e.key === "Enter") {
          e.preventDefault(), await Qr();
          return;
        }
        if (e.key === "Escape") {
          e.preventDefault(), Yt();
          return;
        }
        if (e.key === "Tab") {
          e.preventDefault(), await kr(e.shiftKey ? -1 : 1, !1, "tab");
          return;
        }
        if (e.key === "ArrowLeft") {
          e.preventDefault(), await kr(-1, !1);
          return;
        }
        if (e.key === "ArrowRight") {
          e.preventDefault(), await kr(1, !1);
          return;
        }
        if (e.key === "ArrowUp") {
          e.preventDefault(), await kr(-1, !0);
          return;
        }
        e.key === "ArrowDown" && (e.preventDefault(), await kr(1, !0));
      }
    }
    function nu(e, t, r) {
      const a = iu(), n = a.findIndex(
        (l) => Nt(l.rowId, t) && l.columnKey === r
      );
      if (n < 0)
        return { target: null, boundary: !1 };
      const u = n + e;
      return u < 0 || u >= a.length ? { target: null, boundary: !0 } : { target: a[u], boundary: !1 };
    }
    function au(e, t, r) {
      if (!r)
        return null;
      const a = ee.value.findIndex(
        (p) => Nt(p[i.idKey], t)
      );
      if (a < 0)
        return null;
      const n = a + e;
      if (n < 0 || n >= ee.value.length)
        return null;
      const u = ee.value[n], l = H.value.find(
        (p) => p.key === r
      );
      return !u || !l || !l.editable ? null : {
        row: u,
        column: l
      };
    }
    async function kr(e, t = !1, r = "save") {
      if (_e.value === null || Ze.value === null)
        return;
      const a = _e.value, n = Ze.value, u = t ? au(e, a, n) : null, l = t ? { target: null, boundary: !1 } : nu(e, a, n);
      if (await Qr(r)) {
        if (t) {
          if (u) {
            Lt(u.row, u.column);
            return;
          }
          if (e > 0 && i.inlineCreate) {
            const y = H.value.find(
              (C) => C.key === n && C.editable
            );
            if (!y)
              return;
            Vt(null), await ne(), Sr(y);
          }
          return;
        }
        if (!l.target) {
          l.boundary && e > 0 && i.inlineCreate && Vt(null);
          return;
        }
        Lt(l.target.row, l.target.column);
      }
    }
    async function Zt(e) {
      if (!e.defaultPrevented) {
        if (e.key === "Enter") {
          e.preventDefault(), await ji();
          return;
        }
        if (e.key === "Escape") {
          e.preventDefault(), St();
          return;
        }
        if (e.key === "Tab") {
          e.preventDefault();
          const t = Cr(), r = document.activeElement?.getAttribute("data-create-field"), a = t.find(
            (u) => (u.editField || u.key) === r
          ) ?? null;
          if (a && !Ri(a, "tab", !0))
            return;
          if (e.shiftKey) {
            if (t.findIndex(
              (l) => (l.editField || l.key) === r
            ) <= 0) {
              const l = ou();
              await zi(l);
              return;
            }
            Vi(-1);
            return;
          }
          if (t.length === 0)
            return;
          const n = t.findIndex(
            (u) => (u.editField || u.key) === r
          );
          if (n < 0) {
            Sr(t[0]);
            return;
          }
          if (n >= t.length - 1) {
            const u = K.value === null || K.value === void 0;
            await ji("tab") && u && (await ne(), Vt(null));
            return;
          }
          Vi(1);
          return;
        }
        if (e.key === "ArrowUp" || e.key === "ArrowDown") {
          e.preventDefault();
          const t = document.activeElement?.getAttribute("data-create-field");
          if (!t)
            return;
          const r = lu(
            e.key === "ArrowUp" ? -1 : 1,
            t
          );
          await zi(r);
        }
      }
    }
    function iu() {
      const e = [];
      return ee.value.forEach((t) => {
        H.value.forEach((r) => {
          r.editable && e.push({
            rowId: t[i.idKey],
            columnKey: r.key,
            row: t,
            column: r
          });
        });
      }), e;
    }
    function Cr() {
      return H.value.filter((e) => e.editable);
    }
    function $i() {
      if (!ze.value)
        return null;
      if (K.value === null || K.value === void 0)
        return ee.value.length;
      const e = ee.value.findIndex(
        (t) => Nt(t?.[i.idKey], K.value)
      );
      return e < 0 ? ee.value.length : e;
    }
    function lu(e, t) {
      const r = Cr().find(
        (p) => (p.editField || p.key) === t
      );
      if (!r)
        return null;
      const a = $i();
      if (a === null)
        return null;
      const n = e < 0 ? a - 1 : a;
      if (n < 0 || n >= ee.value.length)
        return null;
      const u = ee.value[n];
      if (!u)
        return null;
      const l = H.value.find(
        (p) => p.key === r.key && p.editable
      );
      return l ? {
        row: u,
        column: l
      } : null;
    }
    function ou() {
      const e = $i();
      if (e === null)
        return null;
      const t = e - 1;
      if (t < 0 || t >= ee.value.length)
        return null;
      const r = ee.value[t], a = jt.value[jt.value.length - 1];
      return !r || !a ? null : {
        row: r,
        column: a
      };
    }
    async function zi(e) {
      !e?.row || !e?.column || (St(), await ne(), Lt(e.row, e.column));
    }
    function Vi(e) {
      const t = Cr();
      if (t.length === 0)
        return;
      const a = document.activeElement?.getAttribute("data-create-field"), n = t.findIndex(
        (l) => (l.editField || l.key) === a
      );
      if (n < 0) {
        Sr(t[0]);
        return;
      }
      const u = n + e;
      u < 0 || u >= t.length || Sr(t[u]);
    }
    function Sr(e) {
      const t = e.editField || e.key, r = Kt.get(t);
      r && (typeof r.scrollIntoView == "function" && r.scrollIntoView({ block: "nearest", inline: "nearest" }), r.focus(), typeof r.select == "function" && r.select());
    }
    function Di() {
      const e = je.value;
      if (e) {
        if (typeof e.scrollTo == "function") {
          e.scrollTo({ top: e.scrollHeight, behavior: "smooth" });
          return;
        }
        e.scrollTop = e.scrollHeight;
      }
    }
    function Li() {
      ne(() => {
        const e = Cr();
        e.length !== 0 && Sr(e[0]);
      });
    }
    function Yn(e, t, r) {
      const a = `${String(e)}::${t}`;
      if (!r) {
        At.delete(a);
        return;
      }
      At.set(a, r);
    }
    function Jt(e, t) {
      if (!t) {
        Kt.delete(e);
        return;
      }
      Kt.set(e, t);
    }
    function su(e, t) {
      ne(() => {
        const r = `${String(e)}::${t}`, a = At.get(r);
        a && (a.focus(), typeof a.select == "function" && a.select());
      });
    }
    function uu(e) {
      const t = $.value.find(
        (r) => Nt(r[i.idKey], e)
      );
      return t || Ie.value.find(
        (r) => Nt(r[i.idKey], e)
      );
    }
    function nt() {
      if (!window?.axios)
        throw new Error("window.axios is not available.");
      return window.axios;
    }
    function Ni(e) {
      Xe.value = Xe.value === e ? null : e;
    }
    function Xn(e) {
      return Xe.value === e;
    }
    function Zn(e, t) {
      return !i.rowMenu || t !== 0 ? !1 : e?.[i.idKey] !== void 0 && e?.[i.idKey] !== null;
    }
    function Pi(e) {
      const t = e?.[i.idKey];
      return t == null ? !1 : Mt.value === t;
    }
    function du(e) {
      const t = e?.[i.idKey];
      return t == null ? !1 : Xn(t) || Pi(e);
    }
    function cu(e, t) {
      return "border-b border-slate-100 last:border-b-0";
    }
    function fu(e, t) {
      return Pi(e) ? "rgb(241 245 249)" : dt.value && t === Ke.value ? "rgb(245 247 250)" : null;
    }
    function Bi(e, t, r) {
      const a = fu(t, r);
      return a ? {
        ...e || {},
        backgroundColor: a
      } : e;
    }
    function bu(e) {
      const t = e?.[i.idKey];
      Mt.value = t ?? null;
    }
    function pu(e) {
      const t = e?.[i.idKey];
      t != null && Mt.value === t && (Mt.value = null);
    }
    function vu(e) {
      pr(e), dt.value = !0;
    }
    function Ki() {
      le.value = !1, oe.value = !1, ct.value = !1, Re.value = !1, ce.value = !1, se.value = null, Rt.value = null, Xe.value = null, Dn();
    }
    function Ui(e) {
      if (!fe.value)
        return;
      const t = e.target;
      if (!(t instanceof HTMLElement))
        return;
      const r = fe.value.contains(t), a = !!t.closest('[data-rw-autocomplete-portal="true"]');
      if (!r && !a) {
        Ki(), dt.value = !1;
        return;
      }
      dt.value = !0;
    }
    function qi(e) {
      if (!fe.value)
        return;
      const t = e.target;
      t instanceof HTMLElement && (dt.value = fe.value.contains(t));
    }
    function Hi(e) {
      if (!fe.value)
        return;
      const t = e.target;
      if (!(t instanceof HTMLElement))
        return;
      const r = fe.value.contains(t);
      if (r && (dt.value = !0), !(!r && !dt.value)) {
        if (e.key === "Escape") {
          if (gu(t))
            return;
          if (ce.value) {
            e.preventDefault(), ce.value = !1;
            return;
          }
          if (Re.value) {
            e.preventDefault(), Re.value = !1;
            return;
          }
          if (Xe.value !== null || se.value !== null || oe.value || le.value) {
            e.preventDefault(), Ki();
            return;
          }
          if (ze.value) {
            e.preventDefault(), St();
            return;
          }
          _e.value !== null && (e.preventDefault(), Yt());
          return;
        }
        if (!yu(t)) {
          if (e.key === "Insert" && i.inlineCreate) {
            e.preventDefault(), Vt(null);
            return;
          }
          if (e.altKey && e.key.toLowerCase() === "m" && i.rowMenu) {
            e.preventDefault();
            const a = ee.value[Ke.value];
            a && Ni(a[i.idKey]);
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
            const a = ee.value[Ke.value], n = jt.value[0];
            a && n && (e.preventDefault(), Lt(a, n));
          }
        }
      }
    }
    function gu(e) {
      const t = e.closest("[data-rw-autocomplete-input]");
      return t ? t.getAttribute("aria-expanded") === "true" : !1;
    }
    function yu(e) {
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
    function Wi(e) {
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
    function Gi() {
      return `${Qt()}:widths`;
    }
    function Yi() {
      return `${Qt()}:lockCount`;
    }
    function Qn() {
      return `${Qt()}:config`;
    }
    function mu() {
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
    function hu() {
      if (typeof window > "u")
        return null;
      try {
        const e = window.localStorage.getItem(Gi());
        if (!e)
          return null;
        const t = JSON.parse(e);
        return !t || typeof t != "object" ? null : t;
      } catch {
        return null;
      }
    }
    function xu() {
      if (typeof window > "u")
        return 0;
      try {
        const e = window.localStorage.getItem(Yi()), t = Number(e);
        return Number.isFinite(t) ? Math.max(0, Math.round(t)) : 0;
      } catch {
        return 0;
      }
    }
    function wu() {
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
    function ku() {
      const e = wu();
      if (!e) {
        ot.value = _r(ot.value);
        return;
      }
      typeof e.usePagination == "boolean" && (lt.value = e.usePagination), typeof e.horizontalScroll == "boolean" && (Oe.value = e.horizontalScroll), typeof e.rowQuantitySelect == "boolean" && (Et.value = e.rowQuantitySelect), e.rowsPerPage !== void 0 && e.rowsPerPage !== null && (W.value = en(e.rowsPerPage)), typeof e.showRecordCount == "boolean" && (Tt.value = e.showRecordCount), ot.value = _r(e.height ?? ot.value);
    }
    function Cu() {
      if (!(typeof window > "u"))
        try {
          const e = {
            order: G.value.map((t) => t.key),
            selected: G.value.reduce((t, r) => (t[r.key] = r.selected !== !1, t), {})
          };
          window.localStorage.setItem(Qt(), JSON.stringify(e));
        } catch {
          return;
        }
    }
    function Xi() {
      if (!(typeof window > "u"))
        try {
          window.localStorage.setItem(
            Gi(),
            JSON.stringify(He.value)
          );
        } catch {
          return;
        }
    }
    function tn() {
      if (!(typeof window > "u"))
        try {
          window.localStorage.setItem(Yi(), String(me.value));
        } catch {
          return;
        }
    }
    function Zi() {
      if (!(typeof window > "u"))
        try {
          const e = {
            usePagination: lt.value,
            horizontalScroll: Oe.value,
            rowQuantitySelect: Et.value,
            rowsPerPage: en(W.value),
            showRecordCount: Tt.value,
            height: _r(ot.value)
          };
          window.localStorage.setItem(Qn(), JSON.stringify(e));
        } catch {
          return;
        }
    }
    function Su() {
      if (lt.value = i.options?.scrollMode !== "infinite", Oe.value = !!i.horizontalScroll, Et.value = !!i.rowQuantitySelect, W.value = en(i.rowOptions?.[0] ?? 25), Tt.value = !!i.showRecordCount, ot.value = _r(i.initialHeight), typeof window < "u")
        try {
          window.localStorage.removeItem(Qn());
        } catch {
          return;
        }
    }
    return (e, t) => (c(), f("div", {
      ref_key: "rootRef",
      ref: fe,
      class: "rw-table w-full min-w-0 max-w-full space-y-0"
    }, [
      o("div", {
        class: "relative flex flex-wrap items-center gap-2 rounded-none border-x border-t border-slate-200 bg-white px-3 py-2",
        style: z(_t(Ml))
      }, [
        d.globalSearch ? (c(), f("div", {
          key: 0,
          class: E(Rl.value),
          style: z(El.value)
        }, [
          o("label", {
            for: cn.value,
            class: "sr-only"
          }, g(s("search.all_columns", "Zoeken in alle kolommen")), 9, id),
          Ce(o("input", {
            id: cn.value,
            name: cn.value,
            "aria-label": s("search.all_columns", "Zoeken in alle kolommen"),
            "onUpdate:modelValue": t[0] || (t[0] = (r) => ve.value = r),
            type: "text",
            placeholder: s("search.all_columns", "Zoeken in alle kolommen"),
            class: "h-9 w-full rounded-md border border-slate-300 px-3 text-sm outline-none focus:border-slate-300"
          }, null, 8, ld), [
            [rn, ve.value]
          ])
        ], 6)) : F("", !0),
        Ll.value ? (c(), f("button", {
          key: 1,
          type: "button",
          class: "inline-flex h-9 w-9 items-center justify-center rounded-md border border-red-200 text-red-600 hover:bg-red-50",
          "aria-label": s("filters.clear_all", "Filters wissen"),
          onClick: Vs
        }, [...t[40] || (t[40] = [
          o("i", { class: "mdi mdi-filter-off text-base leading-none" }, null, -1)
        ])], 8, od)) : F("", !0),
        o("div", sd, [
          Et.value && lt.value ? (c(), f("div", ud, [
            Ce(o("select", {
              id: ga.value,
              name: ga.value,
              "aria-label": s("table.rows_per_page", "Aantal rijen per pagina"),
              "onUpdate:modelValue": t[1] || (t[1] = (r) => W.value = r),
              class: "h-9 w-28 rounded-md border border-slate-300 bg-white pl-3 pr-8 text-sm"
            }, [
              (c(!0), f(T, null, J(d.rowOptions, (r) => (c(), f("option", {
                key: r,
                value: r
              }, g(r), 9, cd))), 128))
            ], 8, dd), [
              [
                vt,
                W.value,
                void 0,
                { number: !0 }
              ]
            ])
          ])) : F("", !0),
          d.inlineCreate && d.inlineCreateButton ? (c(), f("button", {
            key: 1,
            type: "button",
            class: "rw-btn-hover inline-flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background text-slate-600 shadow-sm",
            onClick: t[2] || (t[2] = (r) => Vt(null))
          }, [...t[41] || (t[41] = [
            o("i", { class: "mdi mdi-plus text-lg leading-none" }, null, -1)
          ])])) : F("", !0),
          zl.value ? (c(), f("div", fd, [
            o("button", {
              type: "button",
              class: E([
                "rw-btn-hover inline-flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background shadow-sm",
                ce.value ? "border-blue-300 bg-blue-50 text-blue-600" : "text-slate-600"
              ]),
              title: s("charts.manage_title", "Grafiekbeheer"),
              onClick: fo
            }, [
              o("i", {
                class: "mdi mdi-chart-bar text-lg leading-none",
                style: z({
                  color: ce.value ? "#2563eb" : "#475569"
                })
              }, null, 4)
            ], 10, bd),
            ce.value ? (c(), f("div", {
              key: 0,
              class: "absolute right-0 top-11 mt-3 flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-xl",
              style: z({
                zIndex: _t(Fe).toolbarOverlay + 30,
                width: "min(96vw, 960px)",
                maxWidth: "calc(100vw - 1rem)",
                maxHeight: "calc(100vh - 120px)"
              })
            }, [
              o("div", pd, [
                o("span", null, g(Y.value === "list" ? s("charts.dialog.title_list", "Grafieken Beheer") : Y.value === "view" ? A.value.description || s("charts.dialog.title_view", "Grafiek bekijken") : A.value.id ? s("charts.dialog.title_edit", "Grafiek Bewerken") : s("charts.dialog.title_new", "Nieuwe Grafiek")), 1),
                o("button", {
                  type: "button",
                  class: "inline-flex h-7 w-7 items-center justify-center rounded text-sky-100 hover:bg-sky-600",
                  "aria-label": s("actions.close", "Sluiten"),
                  onClick: t[3] || (t[3] = (r) => ce.value = !1)
                }, [...t[42] || (t[42] = [
                  o("i", { class: "mdi mdi-close text-base leading-none" }, null, -1)
                ])], 8, vd)
              ]),
              o("div", gd, [
                Y.value === "list" ? (c(), f(T, { key: 0 }, [
                  o("button", {
                    type: "button",
                    class: "rw-btn-hover inline-flex h-8 items-center rounded border border-input bg-background px-2 text-sm text-slate-700 shadow-sm",
                    onClick: t[4] || (t[4] = (r) => ce.value = !1)
                  }, [
                    t[43] || (t[43] = o("i", { class: "mdi mdi-arrow-left-circle mr-1 text-base leading-none" }, null, -1)),
                    Z(" " + g(s("actions.back", "Terug")), 1)
                  ]),
                  t[45] || (t[45] = o("div", { class: "ml-auto" }, null, -1)),
                  o("button", {
                    type: "button",
                    class: "rw-btn-hover-tone-blue inline-flex h-8 items-center rounded border border-blue-200 bg-blue-50 px-2 text-sm text-blue-700",
                    disabled: Ue.value,
                    onClick: Fo
                  }, [
                    t[44] || (t[44] = o("i", { class: "mdi mdi-plus-circle mr-1 text-base leading-none" }, null, -1)),
                    Z(" " + g(s("actions.new", "Nieuw")), 1)
                  ], 8, yd)
                ], 64)) : (c(), f(T, { key: 1 }, [
                  o("button", {
                    type: "button",
                    class: "rw-btn-hover inline-flex h-8 items-center rounded border border-input bg-background px-2 text-sm text-slate-700 shadow-sm",
                    disabled: Ue.value,
                    onClick: t[5] || (t[5] = (r) => Y.value = "list")
                  }, [
                    t[46] || (t[46] = o("i", { class: "mdi mdi-arrow-left-circle mr-1 text-base leading-none" }, null, -1)),
                    Z(" " + g(s("actions.back", "Terug")), 1)
                  ], 8, md),
                  t[49] || (t[49] = o("div", { class: "ml-auto" }, null, -1)),
                  Y.value === "view" ? (c(), f("button", {
                    key: 0,
                    type: "button",
                    class: "rw-btn-hover inline-flex h-8 items-center rounded border border-input bg-background px-2 text-sm text-slate-700 shadow-sm disabled:opacity-60",
                    disabled: it.value || N.value || !Er.value || !!q.value,
                    onClick: To
                  }, [
                    t[47] || (t[47] = o("i", { class: "mdi mdi-file-pdf-box mr-1 text-base leading-none" }, null, -1)),
                    Z(" " + g(s("charts.actions.print_pdf", "PDF afdrukken")), 1)
                  ], 8, hd)) : F("", !0),
                  Y.value === "edit" ? (c(), f("button", {
                    key: 1,
                    type: "button",
                    class: "rw-btn-hover-tone-teal inline-flex h-8 items-center rounded border border-teal-200 bg-teal-50 px-2 text-sm text-teal-700 disabled:opacity-60",
                    disabled: Ue.value || !yn.value,
                    onClick: Ao
                  }, [
                    t[48] || (t[48] = o("i", { class: "mdi mdi-content-save mr-1 text-base leading-none" }, null, -1)),
                    Z(" " + g(s("actions.save", "Bewaren")), 1)
                  ], 8, xd)) : F("", !0)
                ], 64))
              ]),
              x.value ? (c(), f("p", wd, g(x.value), 1)) : F("", !0),
              b.value ? (c(), f("p", kd, g(b.value), 1)) : F("", !0),
              Y.value === "list" ? (c(), f("div", Cd, [
                o("table", Sd, [
                  o("thead", _d, [
                    o("tr", null, [
                      o("th", Md, g(s("table.id", "Id")), 1),
                      o("th", Fd, g(s("table.description", "Omschrijving")), 1),
                      o("th", Od, g(s("table.actions", "Acties")), 1)
                    ])
                  ]),
                  o("tbody", null, [
                    It.value.length === 0 ? (c(), f("tr", Id, [
                      o("td", Ad, g(s(
                        "charts.messages.none_saved",
                        "Geen opgeslagen grafieken gevonden."
                      )), 1)
                    ])) : F("", !0),
                    (c(!0), f(T, null, J(It.value, (r) => (c(), f("tr", {
                      key: r.id,
                      class: "border-b border-slate-100"
                    }, [
                      o("td", Rd, [
                        o("button", {
                          type: "button",
                          class: "rw-id-hover inline-flex h-7 items-center justify-center rounded-full px-2 font-semibold transition-colors",
                          disabled: Ue.value,
                          onClick: (a) => Oo(r)
                        }, g(r.id), 9, Ed)
                      ]),
                      o("td", Td, g(r.description), 1),
                      o("td", jd, [
                        o("button", {
                          type: "button",
                          class: "rw-btn-hover inline-flex h-8 w-8 items-center justify-center rounded border border-input bg-background text-blue-700 shadow-sm disabled:opacity-50",
                          disabled: Ue.value,
                          title: s("actions.view", "Bekijken"),
                          onClick: (a) => Io(r)
                        }, [...t[50] || (t[50] = [
                          o("i", { class: "mdi mdi-eye text-lg leading-none" }, null, -1)
                        ])], 8, $d)
                      ])
                    ]))), 128))
                  ])
                ])
              ])) : (c(), f("div", zd, [
                o("div", Vd, [
                  Y.value === "edit" ? (c(), f("div", Dd, [
                    o("div", null, [
                      o("label", {
                        for: `${R.value}-chart-description`,
                        class: "mb-1 block text-xs text-slate-600"
                      }, g(s("common.description_title", "Omschrijving / Titel")), 9, Ld),
                      Ce(o("input", {
                        id: `${R.value}-chart-description`,
                        name: `${R.value}-chart-description`,
                        "onUpdate:modelValue": t[6] || (t[6] = (r) => A.value.description = r),
                        type: "text",
                        class: "h-9 w-full rounded border border-slate-300 px-3 text-sm",
                        maxlength: "255",
                        placeholder: s(
                          "charts.placeholders.description",
                          "Bijvoorbeeld: Inschrijvingen per schooljaar"
                        )
                      }, null, 8, Nd), [
                        [rn, A.value.description]
                      ])
                    ]),
                    o("div", Pd, [
                      o("div", null, [
                        o("label", {
                          for: `${R.value}-chart-type`,
                          class: "mb-1 block text-xs text-slate-600"
                        }, g(s("charts.fields.type", "Grafiektype")), 9, Bd),
                        Ce(o("select", {
                          id: `${R.value}-chart-type`,
                          name: `${R.value}-chart-type`,
                          "onUpdate:modelValue": t[7] || (t[7] = (r) => A.value.config.builder.chart.type = r),
                          class: "h-9 w-full rounded border border-slate-300 bg-white px-2 text-sm"
                        }, [
                          (c(!0), f(T, null, J(Or.value, (r) => (c(), f("option", {
                            key: r.value,
                            value: r.value
                          }, g(r.label), 9, Ud))), 128))
                        ], 8, Kd), [
                          [vt, A.value.config.builder.chart.type]
                        ])
                      ]),
                      o("div", null, [
                        o("label", {
                          for: `${R.value}-chart-sort`,
                          class: "mb-1 block text-xs text-slate-600"
                        }, g(s("charts.fields.sort", "Sortering")), 9, qd),
                        Ce(o("select", {
                          id: `${R.value}-chart-sort`,
                          name: `${R.value}-chart-sort`,
                          "onUpdate:modelValue": t[8] || (t[8] = (r) => A.value.config.builder.dataset.sort_direction = r),
                          class: "h-9 w-full rounded border border-slate-300 bg-white px-2 text-sm"
                        }, [
                          (c(!0), f(T, null, J(Tl.value, (r) => (c(), f("option", {
                            key: r.value,
                            value: r.value
                          }, g(r.label), 9, Wd))), 128))
                        ], 8, Hd), [
                          [
                            vt,
                            A.value.config.builder.dataset.sort_direction
                          ]
                        ])
                      ]),
                      o("div", null, [
                        o("label", {
                          for: `${R.value}-chart-orientation`,
                          class: "mb-1 block text-xs text-slate-600"
                        }, g(s("charts.fields.orientation", "Orientatie")), 9, Gd),
                        Ce(o("select", {
                          id: `${R.value}-chart-orientation`,
                          name: `${R.value}-chart-orientation`,
                          "onUpdate:modelValue": t[9] || (t[9] = (r) => A.value.config.builder.chart.orientation = r),
                          class: "h-9 w-full rounded border border-slate-300 bg-white px-2 text-sm"
                        }, [
                          (c(!0), f(T, null, J(jl.value, (r) => (c(), f("option", {
                            key: r.value,
                            value: r.value
                          }, g(r.label), 9, Xd))), 128))
                        ], 8, Yd), [
                          [vt, A.value.config.builder.chart.orientation]
                        ])
                      ])
                    ]),
                    o("div", Zd, [
                      o("div", null, [
                        o("label", {
                          for: `${R.value}-chart-x-field`,
                          class: "mb-1 block text-xs text-slate-600"
                        }, g(s("charts.fields.x_field", "X-veld")), 9, Jd),
                        Ce(o("select", {
                          id: `${R.value}-chart-x-field`,
                          name: `${R.value}-chart-x-field`,
                          "onUpdate:modelValue": t[10] || (t[10] = (r) => A.value.config.builder.dataset.x_field = r),
                          class: "h-9 w-full rounded border border-slate-300 bg-white px-2 text-sm"
                        }, [
                          o("option", ec, g(s("common.choose_field", "-- Kies veld --")), 1),
                          (c(!0), f(T, null, J(vn.value, (r) => (c(), f("option", {
                            key: r.value,
                            value: r.value
                          }, g(r.label), 9, tc))), 128))
                        ], 8, Qd), [
                          [vt, A.value.config.builder.dataset.x_field]
                        ])
                      ]),
                      o("div", null, [
                        o("label", {
                          for: `${R.value}-chart-aggregate`,
                          class: "mb-1 block text-xs text-slate-600"
                        }, g(s(
                          "charts.fields.aggregate",
                          "Berekening (aggregatie)"
                        )), 9, rc),
                        Ce(o("select", {
                          id: `${R.value}-chart-aggregate`,
                          name: `${R.value}-chart-aggregate`,
                          "onUpdate:modelValue": t[11] || (t[11] = (r) => A.value.config.builder.dataset.aggregate = r),
                          class: "h-9 w-full rounded border border-slate-300 bg-white px-2 text-sm"
                        }, [
                          (c(!0), f(T, null, J(ha.value, (r) => (c(), f("option", {
                            key: r.value,
                            value: r.value
                          }, g(r.label), 9, ac))), 128))
                        ], 8, nc), [
                          [vt, A.value.config.builder.dataset.aggregate]
                        ])
                      ])
                    ]),
                    o("div", ic, [
                      o("div", null, [
                        o("label", {
                          for: `${R.value}-chart-metric-field`,
                          class: "mb-1 block text-xs text-slate-600"
                        }, g(s("charts.fields.metric_field", "Metric veld")), 9, lc),
                        Ce(o("select", {
                          id: `${R.value}-chart-metric-field`,
                          name: `${R.value}-chart-metric-field`,
                          "onUpdate:modelValue": t[12] || (t[12] = (r) => A.value.config.builder.dataset.metric_field = r),
                          disabled: !Sa.value,
                          class: "h-9 w-full rounded border border-slate-300 bg-white px-2 text-sm disabled:bg-slate-100"
                        }, [
                          o("option", sc, g(s("common.choose_field", "-- Kies veld --")), 1),
                          (c(!0), f(T, null, J(vn.value, (r) => (c(), f("option", {
                            key: r.value,
                            value: r.value
                          }, g(r.label), 9, uc))), 128))
                        ], 8, oc), [
                          [
                            vt,
                            A.value.config.builder.dataset.metric_field
                          ]
                        ])
                      ]),
                      o("div", null, [
                        o("label", {
                          for: `${R.value}-chart-series-field`,
                          class: "mb-1 block text-xs text-slate-600"
                        }, g(s(
                          "charts.fields.series_field_optional",
                          "Series veld (optioneel)"
                        )), 9, dc),
                        Ce(o("select", {
                          id: `${R.value}-chart-series-field`,
                          name: `${R.value}-chart-series-field`,
                          "onUpdate:modelValue": t[13] || (t[13] = (r) => A.value.config.builder.dataset.series_field = r),
                          class: "h-9 w-full rounded border border-slate-300 bg-white px-2 text-sm"
                        }, [
                          o("option", fc, g(s("charts.fields.no_series", "-- Geen series --")), 1),
                          (c(!0), f(T, null, J(vn.value, (r) => (c(), f("option", {
                            key: r.value,
                            value: r.value
                          }, g(r.label), 9, bc))), 128))
                        ], 8, cc), [
                          [
                            vt,
                            A.value.config.builder.dataset.series_field
                          ]
                        ])
                      ]),
                      o("div", null, [
                        o("label", {
                          for: `${R.value}-chart-limit`,
                          class: "mb-1 block text-xs text-slate-600"
                        }, g(s("charts.fields.limit", "Top N (1-500)")), 9, pc),
                        Ce(o("input", {
                          id: `${R.value}-chart-limit`,
                          name: `${R.value}-chart-limit`,
                          "onUpdate:modelValue": t[14] || (t[14] = (r) => A.value.config.builder.dataset.limit = r),
                          type: "number",
                          min: "1",
                          max: "500",
                          class: "h-9 w-full rounded border border-slate-300 px-2 text-sm"
                        }, null, 8, vc), [
                          [
                            rn,
                            A.value.config.builder.dataset.limit,
                            void 0,
                            { number: !0 }
                          ]
                        ])
                      ])
                    ]),
                    o("div", gc, [
                      o("label", yc, [
                        Ce(o("input", {
                          type: "checkbox",
                          name: `${R.value}-chart-show-legend`,
                          "onUpdate:modelValue": t[15] || (t[15] = (r) => A.value.config.builder.chart.show_legend = r)
                        }, null, 8, mc), [
                          [nn, A.value.config.builder.chart.show_legend]
                        ]),
                        Z(" " + g(s("charts.fields.show_legend", "Toon legenda")), 1)
                      ]),
                      o("label", hc, [
                        Ce(o("input", {
                          type: "checkbox",
                          name: `${R.value}-chart-stacked`,
                          "onUpdate:modelValue": t[16] || (t[16] = (r) => A.value.config.builder.chart.stacked = r)
                        }, null, 8, xc), [
                          [nn, A.value.config.builder.chart.stacked]
                        ]),
                        Z(" " + g(s("charts.fields.stacked", "Stapelen")), 1)
                      ]),
                      o("label", wc, [
                        Ce(o("input", {
                          type: "checkbox",
                          name: `${R.value}-chart-allow-type-change`,
                          "onUpdate:modelValue": t[17] || (t[17] = (r) => A.value.config.builder.presentation.allow_chart_type_change = r)
                        }, null, 8, kc), [
                          [
                            nn,
                            A.value.config.builder.presentation.allow_chart_type_change
                          ]
                        ]),
                        Z(" " + g(s(
                          "charts.fields.allow_type_change",
                          "Grafiektype aanpassen in viewer"
                        )), 1)
                      ])
                    ]),
                    yn.value ? F("", !0) : (c(), f("p", Cc, g(s(
                      "charts.validation.minimum_required",
                      "Vul minstens Omschrijving, X-veld en indien nodig een Metric veld in."
                    )), 1))
                  ])) : F("", !0),
                  Y.value === "view" ? (c(), f("div", Sc, [
                    o("label", {
                      for: `${R.value}-chart-view-type`,
                      class: "mb-1 block text-xs text-slate-600"
                    }, g(s("charts.fields.viewer_type", "Grafiektype in viewer")), 9, _c),
                    Ce(o("select", {
                      id: `${R.value}-chart-view-type`,
                      name: `${R.value}-chart-view-type`,
                      "onUpdate:modelValue": t[18] || (t[18] = (r) => re.value = r),
                      class: "h-9 w-full rounded border border-slate-300 bg-white px-2 text-sm"
                    }, [
                      (c(!0), f(T, null, J(Or.value, (r) => (c(), f("option", {
                        key: r.value,
                        value: r.value
                      }, g(r.label), 9, Fc))), 128))
                    ], 8, Mc), [
                      [vt, re.value]
                    ])
                  ])) : F("", !0),
                  q.value ? (c(), f("p", Oc, g(q.value), 1)) : F("", !0),
                  N.value ? (c(), f("div", Ic, g(s("charts.messages.loading_data", "Grafiekdata laden...")), 1)) : Er.value ? (c(), f("div", Rc, [
                    Y.value === "view" ? (c(), f("div", {
                      key: 0,
                      ref_key: "chartStageViewRef",
                      ref: tt,
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
                  ])) : (c(), f("div", Ac, g(s(
                    "charts.messages.no_renderable_data",
                    "Geen renderbare grafiekdata gevonden voor de huidige instellingen."
                  )), 1))
                ])
              ])),
              Y.value === "edit" ? (c(), f("div", Ec, [
                A.value.id ? (c(), f("button", {
                  key: 0,
                  type: "button",
                  class: "inline-flex h-8 items-center rounded border border-red-200 bg-red-50 px-2 text-sm text-red-700 hover:bg-red-100 disabled:opacity-50",
                  disabled: Ue.value,
                  onClick: t[19] || (t[19] = (r) => Ro(A.value.id))
                }, [
                  t[51] || (t[51] = o("i", { class: "mdi mdi-delete mr-1 text-base leading-none" }, null, -1)),
                  Z(" " + g(s("actions.delete", "Verwijderen")), 1)
                ], 8, Tc)) : F("", !0),
                t[52] || (t[52] = o("div", { class: "ml-auto" }, null, -1))
              ])) : F("", !0)
            ], 4)) : F("", !0)
          ])) : F("", !0),
          $l.value ? (c(), f("div", jc, [
            o("button", {
              type: "button",
              class: E([
                "rw-btn-hover inline-flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background shadow-sm",
                Re.value ? "border-emerald-300 bg-emerald-50 text-emerald-600" : "text-slate-600"
              ]),
              title: s("excel.dialog.title_button", "Excel export"),
              onClick: co
            }, [
              o("i", {
                class: "mdi mdi-microsoft-excel text-lg leading-none",
                style: z({
                  color: Re.value ? "#047857" : "#475569"
                })
              }, null, 4)
            ], 10, $c),
            Re.value ? (c(), f("div", {
              key: 0,
              class: "absolute right-0 top-11 z-[80] mt-3 flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-xl",
              style: z({
                zIndex: _t(Fe).toolbarOverlay + 20,
                width: "min(90vw, 375px)",
                maxWidth: "calc(100vw - 2rem)",
                minWidth: "320px"
              })
            }, [
              o("div", zc, [
                o("span", null, g(et.value === "list" ? s("excel.dialog.title_list", "Excel Export Beheer") : U.value.id ? s("excel.dialog.title_edit", "Export Bewerken") : s("excel.dialog.title_new", "Nieuwe Export")), 1),
                o("button", {
                  type: "button",
                  class: "inline-flex h-7 w-7 items-center justify-center rounded text-emerald-100 hover:bg-emerald-600",
                  "aria-label": s("actions.close", "Sluiten"),
                  onClick: t[20] || (t[20] = (r) => Re.value = !1)
                }, [...t[53] || (t[53] = [
                  o("i", { class: "mdi mdi-close text-base leading-none" }, null, -1)
                ])], 8, Vc)
              ]),
              o("div", Dc, [
                et.value === "list" ? (c(), f(T, { key: 0 }, [
                  o("button", {
                    type: "button",
                    class: "rw-btn-hover inline-flex h-8 items-center rounded border border-input bg-background px-2 text-sm text-slate-700 shadow-sm",
                    onClick: t[21] || (t[21] = (r) => Re.value = !1)
                  }, [
                    t[54] || (t[54] = o("i", { class: "mdi mdi-arrow-left-circle mr-1 text-base leading-none" }, null, -1)),
                    Z(" " + g(s("actions.back", "Terug")), 1)
                  ]),
                  t[56] || (t[56] = o("div", { class: "ml-auto" }, null, -1)),
                  o("button", {
                    type: "button",
                    class: "rw-btn-hover-tone-blue inline-flex h-8 items-center rounded border border-blue-200 bg-blue-50 px-2 text-sm text-blue-700",
                    disabled: ye.value,
                    onClick: go
                  }, [
                    t[55] || (t[55] = o("i", { class: "mdi mdi-plus-circle mr-1 text-base leading-none" }, null, -1)),
                    Z(" " + g(s("actions.new", "Nieuw")), 1)
                  ], 8, Lc)
                ], 64)) : (c(), f(T, { key: 1 }, [
                  o("button", {
                    type: "button",
                    class: "rw-btn-hover inline-flex h-8 items-center rounded border border-input bg-background px-2 text-sm text-slate-700 shadow-sm",
                    disabled: ye.value,
                    onClick: t[22] || (t[22] = (r) => et.value = "list")
                  }, [
                    t[57] || (t[57] = o("i", { class: "mdi mdi-arrow-left-circle mr-1 text-base leading-none" }, null, -1)),
                    Z(" " + g(s("actions.back", "Terug")), 1)
                  ], 8, Nc),
                  t[59] || (t[59] = o("div", { class: "ml-auto" }, null, -1)),
                  !ye.value && Ca.value ? (c(), f("button", {
                    key: 0,
                    type: "button",
                    class: "rw-btn-hover-tone-teal inline-flex h-8 items-center rounded border border-teal-200 bg-teal-50 px-2 text-sm text-teal-700",
                    onClick: mo
                  }, [
                    t[58] || (t[58] = o("i", { class: "mdi mdi-content-save mr-1 text-base leading-none" }, null, -1)),
                    Z(" " + g(s("actions.save", "Bewaren")), 1)
                  ])) : F("", !0)
                ], 64))
              ]),
              Ve.value ? (c(), f("p", Pc, g(Ve.value), 1)) : F("", !0),
              be.value ? (c(), f("p", Bc, g(be.value), 1)) : F("", !0),
              et.value === "list" ? (c(), f("div", Kc, [
                o("table", Uc, [
                  o("thead", qc, [
                    o("tr", null, [
                      o("th", Hc, g(s("table.id", "Id")), 1),
                      o("th", Wc, g(s("table.description", "Omschrijving")), 1),
                      o("th", Gc, g(s("table.actions", "Acties")), 1)
                    ])
                  ]),
                  o("tbody", null, [
                    Bt.value.length === 0 ? (c(), f("tr", Yc, [
                      o("td", Xc, g(s(
                        "excel.messages.none_saved",
                        "Geen opgeslagen exports gevonden."
                      )), 1)
                    ])) : F("", !0),
                    (c(!0), f(T, null, J(Bt.value, (r) => (c(), f("tr", {
                      key: r.id,
                      class: "border-b border-slate-100"
                    }, [
                      o("td", Zc, [
                        o("button", {
                          type: "button",
                          class: "rw-id-hover inline-flex h-7 items-center justify-center rounded-full px-2 font-semibold transition-colors",
                          disabled: ye.value,
                          onClick: (a) => yo(r)
                        }, g(r.id), 9, Jc)
                      ]),
                      o("td", Qc, g(r.description), 1),
                      o("td", ef, [
                        o("button", {
                          type: "button",
                          class: "rw-btn-hover inline-flex h-8 w-8 items-center justify-center rounded border border-input bg-background text-emerald-700 shadow-sm disabled:opacity-50",
                          disabled: ye.value,
                          title: s(
                            "excel.actions.download_direct",
                            "Direct downloaden"
                          ),
                          onClick: (a) => Mo(r)
                        }, [...t[60] || (t[60] = [
                          o("i", { class: "mdi mdi-download text-lg leading-none" }, null, -1)
                        ])], 8, tf)
                      ])
                    ]))), 128))
                  ])
                ])
              ])) : (c(), f("div", rf, [
                o("div", nf, [
                  o("div", null, [
                    o("label", {
                      for: `${R.value}-export-description`,
                      class: "mb-1 block text-xs text-slate-600"
                    }, g(s("common.description_title", "Omschrijving / Titel")), 9, af),
                    Ce(o("input", {
                      id: `${R.value}-export-description`,
                      name: `${R.value}-export-description`,
                      "onUpdate:modelValue": t[23] || (t[23] = (r) => U.value.description = r),
                      type: "text",
                      class: "h-9 w-full rounded border border-slate-300 px-3 text-sm",
                      maxlength: "255",
                      placeholder: s(
                        "excel.placeholders.description",
                        "Bijvoorbeeld: Overzicht actieve records"
                      )
                    }, null, 8, lf), [
                      [rn, U.value.description]
                    ])
                  ]),
                  o("div", null, [
                    o("p", of, g(s(
                      "excel.fields.select_sort_columns",
                      "Selecteer en sorteer kolommen"
                    )), 1),
                    o("div", sf, [
                      (c(!0), f(T, null, J(U.value.columns, (r, a) => (c(), f("div", {
                        key: r.key,
                        "data-drag-preview-row": "true",
                        class: E([
                          "flex items-center gap-2 border-b border-slate-100 px-3 py-2 last:border-b-0",
                          Ot.value === r.key ? "bg-blue-50" : "bg-white"
                        ]),
                        onDragover: (n) => wo(r.key, n),
                        onDrop: (n) => ko(r.key, n)
                      }, [
                        o("span", {
                          class: "inline-flex h-6 w-6 cursor-move items-center justify-center rounded text-slate-500 hover:bg-slate-100",
                          draggable: "true",
                          "aria-label": `Versleep export kolom ${k(r)}`,
                          onDragstart: (n) => xo(r.key, n),
                          onDragend: Qa
                        }, [...t[61] || (t[61] = [
                          o("i", { class: "mdi mdi-drag text-sm leading-none" }, null, -1)
                        ])], 40, df),
                        Ce(o("input", {
                          type: "checkbox",
                          name: `export-column-${r.key}`,
                          "aria-label": `Neem kolom ${k(r)} op in export`,
                          "onUpdate:modelValue": (n) => r.selected = n
                        }, null, 8, cf), [
                          [nn, r.selected]
                        ]),
                        o("span", ff, g(k(r)), 1),
                        o("div", bf, [
                          o("button", {
                            type: "button",
                            class: "inline-flex h-6 w-6 items-center justify-center rounded border border-slate-200 text-slate-500 disabled:opacity-30",
                            disabled: a === 0,
                            onClick: (n) => An(
                              r.key,
                              U.value.columns[a - 1]?.key
                            )
                          }, [...t[62] || (t[62] = [
                            o("i", { class: "mdi mdi-chevron-up text-sm leading-none" }, null, -1)
                          ])], 8, pf),
                          o("button", {
                            type: "button",
                            class: "inline-flex h-6 w-6 items-center justify-center rounded border border-slate-200 text-slate-500 disabled:opacity-30",
                            disabled: a >= U.value.columns.length - 1,
                            onClick: (n) => An(
                              r.key,
                              U.value.columns[a + 1]?.key
                            )
                          }, [...t[63] || (t[63] = [
                            o("i", { class: "mdi mdi-chevron-down text-sm leading-none" }, null, -1)
                          ])], 8, vf)
                        ])
                      ], 42, uf))), 128))
                    ])
                  ])
                ])
              ])),
              et.value === "edit" ? (c(), f("div", gf, [
                U.value.id ? (c(), f("button", {
                  key: 0,
                  type: "button",
                  class: "inline-flex h-8 items-center rounded border border-red-200 bg-red-50 px-2 text-sm text-red-700 hover:bg-red-100 disabled:opacity-50",
                  disabled: ye.value,
                  onClick: t[24] || (t[24] = (r) => ho(U.value.id))
                }, [
                  t[64] || (t[64] = o("i", { class: "mdi mdi-delete mr-1 text-base leading-none" }, null, -1)),
                  Z(" " + g(s("actions.delete", "Verwijderen")), 1)
                ], 8, yf)) : F("", !0),
                t[65] || (t[65] = o("div", { class: "ml-auto" }, null, -1))
              ])) : F("", !0)
            ], 4)) : F("", !0)
          ])) : F("", !0),
          ma.value.length ? (c(), f("div", mf, [
            o("button", {
              type: "button",
              class: E([
                "rw-btn-hover inline-flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background shadow-sm",
                le.value ? "border-red-300 bg-red-50 text-red-600" : "text-slate-600"
              ]),
              onClick: t[25] || (t[25] = (r) => le.value = !le.value)
            }, [
              o("i", {
                class: "mdi mdi-dots-vertical text-lg leading-none",
                style: z({
                  color: le.value ? "#dc2626" : "#475569"
                })
              }, null, 4)
            ], 2),
            le.value ? (c(), f("div", {
              key: 0,
              class: "absolute right-0 top-11 mt-3 flex w-max max-w-[90vw] flex-col overflow-hidden rounded-md border border-slate-200 bg-white shadow-lg",
              style: z(_t(ya))
            }, [
              o("div", hf, [
                o("button", {
                  type: "button",
                  class: "rw-btn-hover inline-flex h-8 items-center rounded border border-input bg-background px-2 text-sm text-slate-700 shadow-sm",
                  onClick: t[26] || (t[26] = (r) => le.value = !1)
                }, [
                  t[66] || (t[66] = o("i", { class: "mdi mdi-arrow-left-circle mr-1 text-base leading-none" }, null, -1)),
                  Z(" " + g(s("actions.back", "Terug")), 1)
                ])
              ]),
              o("div", xf, [
                (c(!0), f(T, null, J(ma.value, (r, a) => (c(), f("button", {
                  key: a,
                  type: "button",
                  class: "rw-btn-hover flex w-full items-center gap-2 whitespace-nowrap rounded px-2 py-1.5 text-left text-sm text-slate-700",
                  onClick: (n) => Zo(r)
                }, [
                  r.icon ? (c(), f("i", {
                    key: 0,
                    class: E(["mdi text-base leading-none", r.icon])
                  }, null, 2)) : F("", !0),
                  Z(" " + g(r.label), 1)
                ], 8, wf))), 128))
              ])
            ], 4)) : F("", !0)
          ])) : F("", !0),
          o("div", kf, [
            o("button", {
              type: "button",
              class: E([
                "rw-btn-hover inline-flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background shadow-sm",
                oe.value ? "border-blue-300 bg-blue-50 text-blue-600" : "text-slate-600"
              ]),
              onClick: t[27] || (t[27] = (r) => oe.value = !oe.value)
            }, [
              o("i", {
                class: "mdi mdi-cog text-lg leading-none",
                style: z({
                  color: oe.value ? "#2563eb" : "#475569"
                })
              }, null, 4)
            ], 2),
            oe.value ? (c(), f("div", {
              key: 0,
              ref_key: "columnMenuRef",
              ref: he,
              class: "absolute right-2 top-full mt-3 flex w-72 flex-col overflow-hidden rounded-md border border-slate-200 bg-white p-2 shadow-lg",
              style: z(Fl.value)
            }, [
              o("div", Cf, [
                o("button", {
                  type: "button",
                  class: "rw-btn-hover inline-flex h-8 items-center rounded border border-input bg-background px-2 text-sm text-slate-700 shadow-sm",
                  onClick: t[28] || (t[28] = (r) => oe.value = !1)
                }, [
                  t[67] || (t[67] = o("i", { class: "mdi mdi-arrow-left-circle mr-1 text-base leading-none" }, null, -1)),
                  Z(" " + g(s("actions.back", "Terug")), 1)
                ])
              ]),
              o("div", Sf, [
                o("button", {
                  type: "button",
                  class: E([
                    "rw-btn-hover inline-flex w-full items-center justify-center rounded border border-input bg-background px-2 py-1.5 text-xs font-medium shadow-sm",
                    ct.value ? "border-blue-200 bg-blue-50" : "text-slate-700"
                  ]),
                  style: z({
                    color: ct.value ? "#1d4ed8" : "#334155"
                  }),
                  onClick: t[29] || (t[29] = (r) => ct.value = !ct.value)
                }, g(s("table.config.title", "Configuratie")), 7),
                ct.value ? (c(), f("div", _f, [
                  o("label", Mf, [
                    o("input", {
                      type: "checkbox",
                      class: "rw-config-checkbox-input h-4 w-4 shrink-0",
                      name: `${R.value}-cfg-pagination`,
                      checked: lt.value,
                      onChange: t[30] || (t[30] = (r) => lt.value = r.target.checked)
                    }, null, 40, Ff),
                    Z(" " + g(s(
                      "table.config.use_pagination",
                      "Gebruik paginering i.p.v. infinite scroll"
                    )), 1)
                  ]),
                  o("label", Of, [
                    o("input", {
                      type: "checkbox",
                      class: "rw-config-checkbox-input h-4 w-4 shrink-0",
                      name: `${R.value}-cfg-hscroll`,
                      checked: Oe.value,
                      onChange: t[31] || (t[31] = (r) => Oe.value = r.target.checked)
                    }, null, 40, If),
                    Z(" " + g(s(
                      "table.config.enable_horizontal_scroll",
                      "Horizontale scroll inschakelen"
                    )), 1)
                  ]),
                  o("label", Af, [
                    o("input", {
                      type: "checkbox",
                      class: "rw-config-checkbox-input h-4 w-4 shrink-0",
                      name: `${R.value}-cfg-row-select`,
                      checked: Et.value,
                      disabled: !lt.value,
                      onChange: t[32] || (t[32] = (r) => Et.value = r.target.checked)
                    }, null, 40, Rf),
                    Z(" " + g(s(
                      "table.config.show_row_quantity_select",
                      "Toon aantal rijen-selectie"
                    )), 1)
                  ]),
                  o("label", Ef, [
                    o("input", {
                      type: "checkbox",
                      class: "rw-config-checkbox-input h-4 w-4 shrink-0",
                      name: `${R.value}-cfg-record-count`,
                      checked: Tt.value,
                      onChange: t[33] || (t[33] = (r) => Tt.value = r.target.checked)
                    }, null, 40, Tf),
                    Z(" " + g(s("table.config.show_record_count", "Toon aantal records")), 1)
                  ]),
                  o("div", jf, [
                    o("label", {
                      for: `${R.value}-cfg-height`,
                      class: "block text-xs text-slate-600"
                    }, g(s("table.config.height", "Hoogte van de tabel")), 9, $f),
                    o("input", {
                      id: `${R.value}-cfg-height`,
                      name: `${R.value}-cfg-height`,
                      "aria-label": s("table.config.height", "Hoogte van de tabel"),
                      value: ot.value,
                      class: "h-8 w-full rounded border border-slate-300 bg-white px-2 text-xs",
                      onInput: t[34] || (t[34] = (r) => ot.value = r.target.value)
                    }, null, 40, zf)
                  ]),
                  o("button", {
                    type: "button",
                    class: "rw-btn-hover inline-flex h-7 items-center rounded border border-input bg-background px-2 text-xs text-slate-700 shadow-sm",
                    onClick: Su
                  }, g(s("table.config.restore_default", "Herstel standaard")), 1)
                ])) : F("", !0),
                o("div", Vf, [
                  (c(!0), f(T, null, J(G.value, (r, a) => (c(), f("div", {
                    key: r.key,
                    "data-drag-preview-row": "true",
                    class: E([
                      "flex items-center gap-2 rounded border px-2 py-1.5",
                      ar.value === r.key ? "border-blue-300 bg-blue-50/60" : "border-slate-100"
                    ]),
                    onDragover: (n) => Os(r.key, n),
                    onDrop: (n) => Is(r.key, n)
                  }, [
                    o("span", {
                      class: "inline-flex h-6 w-6 cursor-move items-center justify-center rounded text-slate-500 hover:bg-slate-100",
                      draggable: "true",
                      "aria-label": s(
                        "table.column.aria.drag_column",
                        "Versleep kolom :label",
                        { label: k(r) }
                      ),
                      onDragstart: (n) => Fs(r.key, n),
                      onDragend: Dn
                    }, [...t[68] || (t[68] = [
                      o("i", { class: "mdi mdi-drag text-sm leading-none" }, null, -1)
                    ])], 40, Lf),
                    o("input", {
                      type: "checkbox",
                      name: `column-toggle-${r.key}`,
                      "aria-label": s(
                        "table.column.aria.toggle_column",
                        "Toon kolom :label",
                        { label: k(r) }
                      ),
                      checked: r.selected !== !1,
                      onChange: (n) => _s(r.key)
                    }, null, 40, Nf),
                    o("span", Pf, g(k(r)), 1),
                    o("div", Bf, [
                      o("button", {
                        type: "button",
                        class: "rw-btn-hover inline-flex h-6 w-6 items-center justify-center rounded border border-input bg-background text-slate-500 shadow-sm disabled:opacity-30",
                        disabled: a === 0,
                        onClick: (n) => xi(r.key, -1)
                      }, [...t[69] || (t[69] = [
                        o("i", { class: "mdi mdi-chevron-up text-sm leading-none" }, null, -1)
                      ])], 8, Kf),
                      o("button", {
                        type: "button",
                        class: "rw-btn-hover inline-flex h-6 w-6 items-center justify-center rounded border border-input bg-background text-slate-500 shadow-sm disabled:opacity-30",
                        disabled: a === G.value.length - 1,
                        onClick: (n) => xi(r.key, 1)
                      }, [...t[70] || (t[70] = [
                        o("i", { class: "mdi mdi-chevron-down text-sm leading-none" }, null, -1)
                      ])], 8, Uf)
                    ])
                  ], 42, Df))), 128))
                ])
              ])
            ], 4)) : F("", !0)
          ])
        ])
      ], 4),
      o("div", {
        ref_key: "containerRef",
        ref: je,
        class: E([
          "w-full min-w-0 max-w-full rounded-none border-x border-b border-t border-slate-200 bg-white",
          Oe.value ? "overflow-x-auto overflow-y-auto" : "overflow-hidden"
        ]),
        style: z({ height: _l.value })
      }, [
        o("table", {
          class: "table-fixed border-collapse border-spacing-0 text-sm",
          style: z(Sl.value)
        }, [
          o("thead", {
            class: "sticky top-0 bg-slate-50 text-slate-600",
            style: z(_t(Ol))
          }, [
            o("tr", null, [
              d.checkboxColumn ? (c(), f("th", {
                key: 0,
                class: "w-10 border-b border-r border-slate-200 px-3 py-2 text-left",
                style: z(Wr("checkbox", !0))
              }, [
                o("input", {
                  type: "checkbox",
                  name: `${R.value}-select-all-visible`,
                  "aria-label": s(
                    "table.aria.select_all_visible_rows",
                    "Selecteer alle zichtbare rijen"
                  ),
                  checked: Bl.value,
                  onChange: t[35] || (t[35] = (r) => Qo(r.target.checked))
                }, null, 40, qf)
              ], 4)) : F("", !0),
              (c(!0), f(T, null, J(H.value, (r, a) => (c(), f("th", {
                key: r.key,
                class: E([
                  "group relative whitespace-nowrap border-b border-slate-200 px-2 py-2 text-left font-medium",
                  a < H.value.length - 1 ? "border-r border-slate-200" : ""
                ]),
                style: z(hs(r, a))
              }, [
                o("div", Hf, [
                  o("button", {
                    type: "button",
                    class: E([
                      "inline-flex min-w-0 flex-1 items-center gap-0.5",
                      En(r) ? "cursor-pointer" : "cursor-default"
                    ]),
                    title: i.manualOrdering ? s(
                      "table.manual_ordering_active",
                      "Manuele volgorde actief"
                    ) : void 0,
                    onClick: (n) => En(r) ? Ho(r.key) : void 0
                  }, [
                    o("span", Gf, g(k(r)), 1),
                    En(r) ? (c(), f("i", {
                      key: 0,
                      class: E([
                        "mdi shrink-0 text-base leading-none",
                        $e.value === r.key ? Se.value === "asc" ? "mdi-arrow-up" : "mdi-arrow-down" : "mdi-unfold-more-horizontal"
                      ])
                    }, null, 2)) : F("", !0)
                  ], 10, Wf),
                  o("div", Yf, [
                    Oe.value && Gr(a) ? (c(), f("button", {
                      key: 0,
                      type: "button",
                      class: "rw-btn-hover inline-flex h-6 w-6 items-center justify-center rounded",
                      "aria-label": s(
                        "table.column.aria.pin_column",
                        "Vastzetten kolom :label",
                        { label: k(r) }
                      ),
                      onClick: Pe((n) => ks(a), ["stop"])
                    }, [
                      o("i", {
                        class: E(["mdi text-sm leading-none", Gr(a)]),
                        style: z({
                          color: Gr(a) === "mdi-lock" ? "#2563eb" : "#64748b"
                        })
                      }, null, 6)
                    ], 8, Xf)) : F("", !0),
                    r.filterable ? (c(), f("button", {
                      key: 1,
                      type: "button",
                      class: E([
                        "rw-btn-hover inline-flex h-6 w-6 items-center justify-center rounded",
                        Rs(r.key) ? "text-green-600" : "text-slate-500"
                      ]),
                      "aria-label": s("filters.aria.filter_column", "Filter kolom :label", {
                        label: k(r)
                      }),
                      onClick: (n) => As(r.key)
                    }, [...t[71] || (t[71] = [
                      o("i", { class: "mdi mdi-filter text-sm leading-none" }, null, -1)
                    ])], 10, Zf)) : F("", !0)
                  ])
                ]),
                se.value === r.key ? (c(), f("div", {
                  key: 0,
                  class: "absolute left-0 top-full mt-1 min-w-72 overflow-visible rounded-lg border border-slate-200 bg-white shadow-xl",
                  style: z(_t(Il))
                }, [
                  o("div", Jf, [
                    o("button", {
                      type: "button",
                      class: "rw-btn-hover inline-flex h-8 items-center rounded border border-input bg-background px-2 text-sm text-slate-700 shadow-sm",
                      onClick: t[36] || (t[36] = (n) => se.value = null)
                    }, [
                      t[72] || (t[72] = o("i", { class: "mdi mdi-arrow-left-circle mr-1 text-base leading-none" }, null, -1)),
                      Z(" " + g(s("actions.back", "Terug")), 1)
                    ]),
                    t[74] || (t[74] = o("div", { class: "ml-auto" }, null, -1)),
                    o("button", {
                      type: "button",
                      class: "inline-flex h-8 items-center rounded border border-red-200 bg-red-50 px-2 text-sm text-red-700 hover:bg-red-100",
                      onClick: (n) => Es(r.key)
                    }, [
                      t[73] || (t[73] = o("i", { class: "mdi mdi-delete mr-1 text-base leading-none" }, null, -1)),
                      Z(" " + g(s("actions.clear", "Wissen")), 1)
                    ], 8, Qf)
                  ]),
                  o("div", eb, [
                    o("select", {
                      name: `filter-mode-${r.key}`,
                      "aria-label": s(
                        "filters.aria.operator_for",
                        "Filter operator voor :label",
                        { label: k(r) }
                      ),
                      value: $t(r.key),
                      class: "h-8 rounded-md border border-slate-300 bg-white px-2 text-xs",
                      onChange: (n) => Ts(r, n.target.value)
                    }, [
                      (c(!0), f(T, null, J(Xl(r), (n) => (c(), f("option", {
                        key: n.value,
                        value: n.value
                      }, g(n.label), 9, rb))), 128))
                    ], 40, tb),
                    $t(r.key) === "tussen" ? (c(), f(T, { key: 0 }, [
                      o("label", nb, g(s("filters.from", "Van")), 1),
                      o("input", {
                        type: "date",
                        name: `filter-from-${r.key}`,
                        "aria-label": s(
                          "filters.aria.from_date_for",
                          "Filter vanaf datum voor :label",
                          {
                            label: k(r)
                          }
                        ),
                        value: ie.value[r.key]?.from || "",
                        class: "h-8 rounded-md border border-slate-300 px-2 text-xs",
                        onInput: (n) => Ci(
                          r.key,
                          "from",
                          n.target.value
                        )
                      }, null, 40, ab),
                      o("label", ib, g(s("filters.to", "Tot")), 1),
                      o("input", {
                        type: "date",
                        name: `filter-to-${r.key}`,
                        "aria-label": s(
                          "filters.aria.to_date_for",
                          "Filter tot datum voor :label",
                          {
                            label: k(r)
                          }
                        ),
                        value: ie.value[r.key]?.to || "",
                        class: "h-8 rounded-md border border-slate-300 px-2 text-xs",
                        onInput: (n) => Ci(
                          r.key,
                          "to",
                          n.target.value
                        )
                      }, null, 40, lb)
                    ], 64)) : Qe.value[r.key] === "boolean" ? (c(), f(T, { key: 1 }, [
                      o("label", ob, g(s("filters.value", "Waarde")), 1),
                      o("select", {
                        name: `filter-value-${r.key}`,
                        "aria-label": s(
                          "filters.aria.value_for",
                          "Filter waarde voor :label",
                          {
                            label: k(r)
                          }
                        ),
                        value: ie.value[r.key] ?? "",
                        class: "h-8 rounded-md border border-slate-300 bg-white px-2 text-xs",
                        onChange: (n) => Yr(r.key, n.target.value)
                      }, [
                        o("option", ub, g(s("filters.choose_value", "Kies waarde")), 1),
                        o("option", db, g(s("common.yes", "Ja")), 1),
                        o("option", cb, g(s("common.no", "Nee")), 1)
                      ], 40, sb)
                    ], 64)) : (c(), f(T, { key: 2 }, [
                      Zl(r) ? (c(), f(T, { key: 0 }, [
                        o("label", fb, g(s("filters.option_value", "Waarde uit lijst")), 1),
                        eo(r) ? (c(), tr(ln, {
                          key: 0,
                          name: `filter-option-value-${r.key}`,
                          "aria-label": s(
                            "filters.aria.value_for",
                            "Filter waarde voor :label",
                            {
                              label: k(r)
                            }
                          ),
                          "model-value": ge.value[r.key] ?? "",
                          "display-value": ge.value[r.key] ?? "",
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
                          "close-on-select": ft(r, "editCloseOnSelect") ? r.editCloseOnSelect === !0 : r.editMultiple !== !0,
                          messages: P.value,
                          "onUpdate:modelValue": (n) => ki(r.key, n)
                        }, null, 8, ["name", "aria-label", "model-value", "display-value", "items", "allow-custom", "custom-trim", "custom-min-length", "multiple", "show-checkboxes", "selection-chips", "max-selection-chips", "close-on-select", "messages", "onUpdate:modelValue"])) : (c(), f("select", {
                          key: 1,
                          name: `filter-option-value-${r.key}`,
                          "aria-label": s(
                            "filters.aria.value_for",
                            "Filter waarde voor :label",
                            {
                              label: k(r)
                            }
                          ),
                          value: ge.value[r.key] ?? "",
                          class: E([
                            "rounded-md border border-slate-300 bg-white px-2 text-xs",
                            r.editMultiple === !0 ? "min-h-[120px] py-1" : "h-8"
                          ]),
                          multiple: r.editMultiple === !0,
                          onChange: (n) => ki(
                            r.key,
                            zs(n.target, r)
                          )
                        }, [
                          r.editMultiple !== !0 ? (c(), f("option", pb, g(s("filters.choose_value", "Kies waarde")), 1)) : F("", !0),
                          (c(!0), f(T, null, J(_n(r), (n) => (c(), f("option", {
                            key: `${r.key}-filter-option-${n.value}`,
                            value: n.value
                          }, g(n.title), 9, vb))), 128))
                        ], 42, bb))
                      ], 64)) : (c(), f(T, { key: 1 }, [
                        o("label", gb, g(s("filters.free_text", "Vrije tekst")), 1),
                        o("input", {
                          ref_for: !0,
                          ref: (n) => js(r.key, n),
                          name: `filter-value-${r.key}`,
                          "aria-label": s(
                            "filters.aria.value_for",
                            "Filter waarde voor :label",
                            {
                              label: k(r)
                            }
                          ),
                          type: Ds(
                            Qe.value[r.key],
                            $t(r.key)
                          ),
                          value: ie.value[r.key] ?? "",
                          class: "h-8 rounded-md border border-slate-300 px-2 text-xs",
                          onInput: (n) => $s(r.key, n)
                        }, null, 40, yb)
                      ], 64))
                    ], 64))
                  ])
                ], 4)) : F("", !0),
                o("button", {
                  type: "button",
                  class: "bg-transparent p-0",
                  "aria-label": s(
                    "table.column.aria.resize_column",
                    "Wijzig breedte van :label",
                    { label: k(r) }
                  ),
                  style: z({
                    position: "absolute",
                    top: "0",
                    bottom: "0",
                    right: "-6px",
                    width: "12px",
                    zIndex: _t(Fe).resizeHandle,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "stretch",
                    cursor: "col-resize"
                  }),
                  onMousedown: Pe((n) => Cs(n, r.key), ["stop", "prevent"]),
                  onClick: t[37] || (t[37] = Pe(() => {
                  }, ["stop", "prevent"]))
                }, [...t[75] || (t[75] = [
                  o("span", {
                    "aria-hidden": "true",
                    class: "h-full rounded transition-colors group-hover:bg-blue-500",
                    style: {
                      width: "1px",
                      backgroundColor: "transparent"
                    }
                  }, null, -1)
                ])], 44, mb)
              ], 6))), 128))
            ])
          ], 4),
          o("tbody", null, [
            Ae.value ? (c(), f("tr", hb, [
              o("td", {
                colspan: H.value.length + (d.checkboxColumn ? 1 : 0),
                class: "px-3 py-4 text-center text-slate-500"
              }, g(s("table.loading", "Laden...")), 9, xb)
            ])) : ee.value.length === 0 ? (c(), f("tr", wb, [
              o("td", {
                colspan: H.value.length + (d.checkboxColumn ? 1 : 0),
                class: "px-3 py-4 text-center text-slate-500"
              }, [
                o("span", Cb, [
                  t[76] || (t[76] = o("i", {
                    class: "mdi mdi-emoticon-confused text-base leading-none",
                    "aria-hidden": "true"
                  }, null, -1)),
                  Z(" " + g(s("table.no_records", "Geen records gevonden.")), 1)
                ])
              ], 8, kb)
            ])) : F("", !0),
            (c(!0), f(T, null, J(ee.value, (r, a) => (c(), f(T, {
              key: `${r[d.idKey] ?? "row"}-${a}`
            }, [
              Ns(r) ? (c(), f("tr", Sb, [
                d.checkboxColumn ? (c(), f("td", {
                  key: 0,
                  class: "border-r border-slate-200 px-3 py-2",
                  style: z(
                    Wr(
                      "checkbox",
                      !1,
                      va
                    )
                  )
                }, null, 4)) : F("", !0),
                (c(!0), f(T, null, J(H.value, (n, u) => (c(), f("td", {
                  key: `create-above-${r[d.idKey]}-${n.key}`,
                  class: E([
                    "px-3 py-2",
                    u < H.value.length - 1 ? "border-r border-slate-200" : ""
                  ]),
                  style: z(mi(n, u))
                }, [
                  o("div", {
                    class: E(["flex items-center", u === 0 ? "gap-2" : ""])
                  }, [
                    u === 0 ? (c(), f("button", {
                      key: 0,
                      type: "button",
                      class: "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded border border-red-200 text-red-600 hover:bg-red-50",
                      "aria-label": s("actions.cancel_new_row", "Annuleer nieuwe rij"),
                      onClick: Pe(St, ["stop"])
                    }, [...t[77] || (t[77] = [
                      o("i", { class: "mdi mdi-delete text-base leading-none" }, null, -1)
                    ])], 8, _b)) : F("", !0),
                    o("div", Mb, [
                      n.editable ? (c(), f(T, { key: 0 }, [
                        (n.editInput === "select" || n.editInput === "autocomplete") && Array.isArray(n.editItems) ? (c(), tr(ln, {
                          key: 0,
                          ref_for: !0,
                          ref: (l) => Jt(
                            n.editField || n.key,
                            l
                          ),
                          name: `create-${n.editField || n.key}`,
                          "aria-label": s(
                            "table.aria.new_value_for",
                            "Nieuwe waarde voor :label",
                            {
                              label: k(n)
                            }
                          ),
                          "data-create-field": n.editField || n.key,
                          "model-value": L.value[n.editField || n.key],
                          "display-value": jn(n, L.value),
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
                          "close-on-select": ft(n, "editCloseOnSelect") ? n.editCloseOnSelect === !0 : n.editMultiple !== !0,
                          invalid: !!ue(n),
                          "error-message": ue(n),
                          "required-missing": gr(n) && yr(
                            L.value[n.editField || n.key]
                          ) && !ue(n),
                          "required-highlight-color": mr(n),
                          messages: P.value,
                          "onUpdate:modelValue": (l) => {
                            L.value[n.editField || n.key] = l, Dt(n), bt();
                          },
                          onResolve: (l) => si(n, l),
                          onBlur: (l) => Xt(n),
                          onKeydown: Zt
                        }, null, 8, ["name", "aria-label", "data-create-field", "model-value", "display-value", "items", "item-title", "item-value", "search-fields", "allow-custom", "custom-trim", "custom-min-length", "multiple", "show-checkboxes", "selection-chips", "max-selection-chips", "close-on-select", "invalid", "error-message", "required-missing", "required-highlight-color", "messages", "onUpdate:modelValue", "onResolve", "onBlur"])) : n.type === "boolean" ? (c(), f("div", Fb, [
                          o("input", {
                            ref_for: !0,
                            ref: (l) => Jt(
                              n.editField || n.key,
                              l
                            ),
                            "data-create-field": n.editField || n.key,
                            type: "checkbox",
                            name: `create-${n.editField || n.key}`,
                            "aria-label": s(
                              "table.aria.new_value_for",
                              "Nieuwe waarde voor :label",
                              {
                                label: k(n)
                              }
                            ),
                            class: E(
                              ue(n) ? "rounded ring-2 ring-red-400" : ""
                            ),
                            checked: !!L.value[n.editField || n.key],
                            onChange: (l) => {
                              L.value[n.editField || n.key] = l.target.checked, Dt(n), bt();
                            },
                            onBlur: (l) => Xt(n),
                            onKeydown: Zt
                          }, null, 42, Ob),
                          ue(n) ? (c(), f("span", Ib, g(ue(n)), 1)) : F("", !0)
                        ])) : (c(), f("div", Ab, [
                          o("input", {
                            ref_for: !0,
                            ref: (l) => Jt(
                              n.editField || n.key,
                              l
                            ),
                            "data-create-field": n.editField || n.key,
                            type: n.type === "number" ? "number" : "text",
                            name: `create-${n.editField || n.key}`,
                            "aria-label": s(
                              "table.aria.new_value_for",
                              "Nieuwe waarde voor :label",
                              {
                                label: k(n)
                              }
                            ),
                            value: L.value[n.editField || n.key] ?? "",
                            "aria-invalid": ue(n) ? "true" : "false",
                            class: E([
                              "h-8 w-full rounded border px-2 text-sm",
                              ue(n) ? "border-red-400 bg-red-50" : "border-slate-300"
                            ]),
                            style: z(Ti(n)),
                            onInput: (l) => {
                              L.value[n.editField || n.key] = l.target.value, Dt(n), bt();
                            },
                            onBlur: (l) => Xt(n),
                            onKeydown: Zt
                          }, null, 46, Rb),
                          ue(n) ? (c(), f("span", Eb, g(ue(n)), 1)) : F("", !0)
                        ]))
                      ], 64)) : (c(), f("span", Tb, "-"))
                    ])
                  ], 2)
                ], 6))), 128))
              ])) : F("", !0),
              o("tr", {
                class: E(["group hover:bg-slate-100/90", cu()]),
                onClick: (n) => vu(a),
                onMouseover: (n) => bu(r),
                onMouseleave: (n) => pu(r)
              }, [
                d.checkboxColumn ? (c(), f("td", {
                  key: 0,
                  class: "border-r border-slate-200 px-3 py-2",
                  style: z(
                    Bi(
                      Wr(),
                      r,
                      a
                    )
                  )
                }, [
                  o("input", {
                    type: "checkbox",
                    name: `row-select-${r[d.idKey]}`,
                    "aria-label": s("table.aria.select_row", "Selecteer rij :id", {
                      id: r[d.idKey]
                    }),
                    checked: d.checkedRows.includes(r[d.idKey]),
                    onChange: (n) => Jo(r[d.idKey]),
                    onClick: t[38] || (t[38] = Pe(() => {
                    }, ["stop"]))
                  }, null, 40, $b)
                ], 4)) : F("", !0),
                (c(!0), f(T, null, J(H.value, (n, u) => (c(), f("td", {
                  key: `${r[d.idKey] ?? a}-${n.key}`,
                  class: E(["relative px-3 py-2 text-slate-700", [
                    vs(n),
                    u < H.value.length - 1 ? "border-r border-slate-200" : "",
                    Ss(r, n, a, u)
                  ]]),
                  style: z(
                    Bi(
                      ws(r, n, a, u),
                      r,
                      a
                    )
                  ),
                  onClick: Pe((l) => Go(n, r, a, u), ["stop"])
                }, [
                  Zn(r, u) ? (c(), f("div", Vb, [
                    o("button", {
                      type: "button",
                      class: E([
                        "rw-btn-hover inline-flex h-7 w-7 items-center justify-center rounded border border-input bg-background text-slate-600 shadow-sm transition-opacity",
                        du(r) ? "opacity-100" : "opacity-0 focus:opacity-100 group-hover:opacity-100"
                      ]),
                      onClick: Pe((l) => Ni(r[d.idKey]), ["stop"])
                    }, [...t[78] || (t[78] = [
                      o("i", { class: "mdi mdi-dots-vertical text-base leading-none" }, null, -1)
                    ])], 10, Db),
                    Xn(r[d.idKey]) ? (c(), f("div", {
                      key: 0,
                      class: E(["absolute left-full ml-1 min-w-56 max-h-72 overflow-y-auto rounded-lg border border-slate-200 bg-white shadow-xl", ys(a)]),
                      style: z(_t(Al))
                    }, [
                      o("div", Lb, [
                        o("button", {
                          type: "button",
                          class: "rw-btn-hover inline-flex h-8 items-center rounded border border-input bg-background px-2 text-sm text-slate-700 shadow-sm",
                          onClick: t[39] || (t[39] = Pe((l) => Xe.value = null, ["stop"]))
                        }, [
                          t[79] || (t[79] = o("i", { class: "mdi mdi-arrow-left-circle mr-1 text-base leading-none" }, null, -1)),
                          Z(" " + g(s("actions.back", "Terug")), 1)
                        ])
                      ]),
                      o("div", Nb, [
                        (c(!0), f(T, null, J(tu(r), (l, p) => (c(), f("button", {
                          key: `${r[d.idKey]}-${p}`,
                          type: "button",
                          disabled: l.disabled,
                          class: "rw-btn-hover flex w-full items-center gap-2 whitespace-nowrap rounded px-2 py-1.5 text-left text-sm text-slate-700 disabled:opacity-40",
                          onClick: Pe((y) => ru(l, r), ["stop"])
                        }, [
                          l.icon ? (c(), f("i", {
                            key: 0,
                            class: E(["mdi text-base leading-none", l.icon])
                          }, null, 2)) : F("", !0),
                          Z(" " + g(l.label), 1)
                        ], 8, Pb))), 128))
                      ])
                    ], 6)) : F("", !0)
                  ])) : F("", !0),
                  Zr(r, n) ? (c(), f(T, { key: 1 }, [
                    (n.editInput === "select" || n.editInput === "autocomplete") && Array.isArray(n.editItems) ? (c(), tr(ln, {
                      key: 0,
                      ref_for: !0,
                      ref: (l) => Yn(r[d.idKey], n.key, l),
                      name: `edit-${r[d.idKey]}-${n.editField || n.key}`,
                      "aria-label": s("table.aria.edit_field", "Bewerk :label", {
                        label: k(n)
                      }),
                      "model-value": Me.value,
                      "display-value": jn(n, r),
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
                      "close-on-select": ft(n, "editCloseOnSelect") ? n.editCloseOnSelect === !0 : n.editMultiple !== !0,
                      invalid: !!rt(r[d.idKey], n),
                      "error-message": rt(r[d.idKey], n),
                      "required-missing": gr(n) && yr(Me.value) && !rt(r[d.idKey], n),
                      "required-highlight-color": mr(n),
                      messages: P.value,
                      "onUpdate:modelValue": (l) => {
                        Me.value = l, Xr(r[d.idKey], n), bt();
                      },
                      onResolve: (l) => ts(n, l),
                      onBlur: (l) => Wn(r, n),
                      onKeydown: Gn
                    }, null, 8, ["name", "aria-label", "model-value", "display-value", "items", "item-title", "item-value", "search-fields", "allow-custom", "custom-trim", "custom-min-length", "multiple", "show-checkboxes", "selection-chips", "max-selection-chips", "close-on-select", "invalid", "error-message", "required-missing", "required-highlight-color", "messages", "onUpdate:modelValue", "onResolve", "onBlur"])) : n.type === "boolean" ? (c(), f("div", Bb, [
                      o("input", {
                        ref_for: !0,
                        ref: (l) => Yn(r[d.idKey], n.key, l),
                        type: "checkbox",
                        name: `edit-${r[d.idKey]}-${n.editField || n.key}`,
                        "aria-label": s("table.aria.edit_field", "Bewerk :label", {
                          label: k(n)
                        }),
                        class: E(
                          rt(r[d.idKey], n) ? "rounded ring-2 ring-red-400" : ""
                        ),
                        checked: !!Me.value,
                        onChange: (l) => {
                          Me.value = l.target.checked, Xr(r[d.idKey], n), bt();
                        },
                        onBlur: (l) => Wn(r, n),
                        onKeydown: Gn
                      }, null, 42, Kb),
                      rt(r[d.idKey], n) ? (c(), f("span", Ub, g(rt(r[d.idKey], n)), 1)) : F("", !0)
                    ])) : (c(), f("div", qb, [
                      o("input", {
                        ref_for: !0,
                        ref: (l) => Yn(r[d.idKey], n.key, l),
                        type: n.type === "number" ? "number" : "text",
                        name: `edit-${r[d.idKey]}-${n.editField || n.key}`,
                        "aria-label": s("table.aria.edit_field", "Bewerk :label", {
                          label: k(n)
                        }),
                        value: Me.value,
                        "aria-invalid": rt(r[d.idKey], n) ? "true" : "false",
                        class: E([
                          "h-8 w-full rounded border px-2 text-sm",
                          rt(r[d.idKey], n) ? "border-red-400 bg-red-50" : "border-slate-300"
                        ]),
                        style: z(Xs(r, n)),
                        onInput: (l) => {
                          Me.value = l.target.value, Xr(r[d.idKey], n), bt();
                        },
                        onBlur: (l) => Wn(r, n),
                        onKeydown: Gn
                      }, null, 46, Hb),
                      rt(r[d.idKey], n) ? (c(), f("span", Wb, g(rt(r[d.idKey], n)), 1)) : F("", !0)
                    ]))
                  ], 64)) : (c(), f("div", {
                    key: 2,
                    class: E(["flex w-full min-w-0 items-center", [
                      cs(n),
                      fs(
                        n,
                        Zn(r, u)
                      )
                    ]])
                  }, [
                    $n(n) ? (c(), f("i", {
                      key: 0,
                      class: E(["mdi text-base leading-none", ns(n, r)]),
                      style: z({
                        color: as(n, r)
                      })
                    }, null, 6)) : ls(n, r) ? (c(), f("span", {
                      key: 1,
                      class: E(ds(n)),
                      style: z(us(n, r))
                    }, [
                      n.chipPrependIcon ? (c(), f("i", {
                        key: 0,
                        class: E(["mdi text-[14px] leading-none", n.chipPrependIcon])
                      }, null, 2)) : F("", !0),
                      o("span", Gb, g(fi(n, r)), 1)
                    ], 6)) : ss(n, r) ? (c(), f("span", Yb, [
                      (c(!0), f(T, null, J(os(
                        n,
                        r
                      ), (l, p) => (c(), f("span", {
                        key: `multi-chip-${p}`,
                        class: "inline-flex max-w-full items-center rounded-full border border-slate-300 bg-slate-100 px-2 py-0.5 text-xs font-medium leading-5 text-slate-700"
                      }, [
                        o("span", Xb, g(l), 1)
                      ]))), 128)),
                      pi(n, r) > 0 ? (c(), f("span", Zb, " +" + g(pi(n, r)), 1)) : F("", !0)
                    ])) : (c(), f("span", {
                      key: 3,
                      class: E(gs(n, r))
                    }, g(Tn(r, n)), 3))
                  ], 2))
                ], 14, zb))), 128))
              ], 42, jb)
            ], 64))), 128)),
            Ia.value ? (c(), f("tr", Jb, [
              d.checkboxColumn ? (c(), f("td", {
                key: 0,
                class: "border-r border-slate-200 px-3 py-2",
                style: z(
                  Wr(
                    "checkbox",
                    !1,
                    va
                  )
                )
              }, null, 4)) : F("", !0),
              (c(!0), f(T, null, J(H.value, (r, a) => (c(), f("td", {
                key: `create-${r.key}`,
                class: E([
                  "px-3 py-2",
                  a < H.value.length - 1 ? "border-r border-slate-200" : ""
                ]),
                style: z(mi(r, a))
              }, [
                o("div", {
                  class: E(["flex items-center", a === 0 ? "gap-2" : ""])
                }, [
                  a === 0 ? (c(), f("button", {
                    key: 0,
                    type: "button",
                    class: "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded border border-red-200 text-red-600 hover:bg-red-50",
                    "aria-label": s("actions.cancel_new_row", "Annuleer nieuwe rij"),
                    onClick: Pe(St, ["stop"])
                  }, [...t[80] || (t[80] = [
                    o("i", { class: "mdi mdi-delete text-base leading-none" }, null, -1)
                  ])], 8, Qb)) : F("", !0),
                  o("div", ep, [
                    r.editable ? (c(), f(T, { key: 0 }, [
                      (r.editInput === "select" || r.editInput === "autocomplete") && Array.isArray(r.editItems) ? (c(), tr(ln, {
                        key: 0,
                        ref_for: !0,
                        ref: (n) => Jt(
                          r.editField || r.key,
                          n
                        ),
                        name: `create-${r.editField || r.key}`,
                        "aria-label": s(
                          "table.aria.new_value_for",
                          "Nieuwe waarde voor :label",
                          {
                            label: k(r)
                          }
                        ),
                        "data-create-field": r.editField || r.key,
                        "model-value": L.value[r.editField || r.key],
                        "display-value": jn(r, L.value),
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
                        "close-on-select": ft(r, "editCloseOnSelect") ? r.editCloseOnSelect === !0 : r.editMultiple !== !0,
                        invalid: !!ue(r),
                        "error-message": ue(r),
                        "required-missing": gr(r) && yr(
                          L.value[r.editField || r.key]
                        ) && !ue(r),
                        "required-highlight-color": mr(r),
                        messages: P.value,
                        "onUpdate:modelValue": (n) => {
                          L.value[r.editField || r.key] = n, Dt(r), bt();
                        },
                        onResolve: (n) => si(r, n),
                        onBlur: (n) => Xt(r),
                        onKeydown: Zt
                      }, null, 8, ["name", "aria-label", "data-create-field", "model-value", "display-value", "items", "item-title", "item-value", "search-fields", "allow-custom", "custom-trim", "custom-min-length", "multiple", "show-checkboxes", "selection-chips", "max-selection-chips", "close-on-select", "invalid", "error-message", "required-missing", "required-highlight-color", "messages", "onUpdate:modelValue", "onResolve", "onBlur"])) : r.type === "boolean" ? (c(), f("div", tp, [
                        o("input", {
                          ref_for: !0,
                          ref: (n) => Jt(
                            r.editField || r.key,
                            n
                          ),
                          "data-create-field": r.editField || r.key,
                          type: "checkbox",
                          name: `create-${r.editField || r.key}`,
                          "aria-label": s(
                            "table.aria.new_value_for",
                            "Nieuwe waarde voor :label",
                            {
                              label: k(r)
                            }
                          ),
                          class: E(
                            ue(r) ? "rounded ring-2 ring-red-400" : ""
                          ),
                          checked: !!L.value[r.editField || r.key],
                          onChange: (n) => {
                            L.value[r.editField || r.key] = n.target.checked, Dt(r), bt();
                          },
                          onBlur: (n) => Xt(r),
                          onKeydown: Zt
                        }, null, 42, rp),
                        ue(r) ? (c(), f("span", np, g(ue(r)), 1)) : F("", !0)
                      ])) : (c(), f("div", ap, [
                        o("input", {
                          ref_for: !0,
                          ref: (n) => Jt(
                            r.editField || r.key,
                            n
                          ),
                          "data-create-field": r.editField || r.key,
                          type: r.type === "number" ? "number" : "text",
                          name: `create-${r.editField || r.key}`,
                          "aria-label": s(
                            "table.aria.new_value_for",
                            "Nieuwe waarde voor :label",
                            {
                              label: k(r)
                            }
                          ),
                          value: L.value[r.editField || r.key] ?? "",
                          "aria-invalid": ue(r) ? "true" : "false",
                          class: E([
                            "h-8 w-full rounded border px-2 text-sm",
                            ue(r) ? "border-red-400 bg-red-50" : "border-slate-300"
                          ]),
                          style: z(Ti(r)),
                          onInput: (n) => {
                            L.value[r.editField || r.key] = n.target.value, Dt(r), bt();
                          },
                          onBlur: (n) => Xt(r),
                          onKeydown: Zt
                        }, null, 46, ip),
                        ue(r) ? (c(), f("span", lp, g(ue(r)), 1)) : F("", !0)
                      ]))
                    ], 64)) : (c(), f("span", op, "-"))
                  ])
                ], 2)
              ], 6))), 128))
            ])) : F("", !0)
          ])
        ], 4),
        o("div", {
          ref_key: "infiniteSentinelRef",
          ref: de,
          class: "h-1 w-full"
        }, null, 512)
      ], 6),
      o("div", sp, [
        !De.value && qt.value > 1 ? (c(), f("div", up, [
          (c(!0), f(T, null, J(Nl.value, (r, a) => (c(), f("button", {
            key: `pagination-${a}-${r}`,
            type: "button",
            class: E(["inline-flex h-8 min-w-8 items-center justify-center border border-input bg-background px-2 text-xs text-slate-700 shadow-sm", [
              a > 0 ? "-ml-px" : "",
              r === Q.value ? "z-10 bg-blue-50 font-semibold text-blue-700" : "rw-btn-hover",
              r === "..." ? "cursor-default text-slate-400 hover:bg-white" : ""
            ]]),
            disabled: r === "...",
            onClick: (n) => Wo(r)
          }, g(r), 11, dp))), 128))
        ])) : F("", !0),
        o("div", cp, [
          Tt.value ? (c(), f("p", fp, g(s("table.record_count", "Aantal rijen: :count", {
            count: Oa.value
          })), 1)) : F("", !0)
        ])
      ])
    ], 512));
  }
}, xp = /* @__PURE__ */ ml(pp, [["__scopeId", "data-v-a7bbb342"]]);
export {
  xp as RwTable,
  xl as normalizeRuleTokens,
  yp as rwTableContract,
  mp as rwTableFeatureMatrix,
  hp as validateRecordWithRules,
  kl as validateValueWithRules
};
//# sourceMappingURL=index.js.map
