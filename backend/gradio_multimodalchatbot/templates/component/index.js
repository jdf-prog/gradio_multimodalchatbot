var hu = Object.defineProperty;
var fu = (s, r, a) => r in s ? hu(s, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : s[r] = a;
var De = (s, r, a) => (fu(s, typeof r != "symbol" ? r + "" : r, a), a), mu = (s, r, a) => {
  if (!r.has(s))
    throw TypeError("Cannot " + a);
};
var Ca = (s, r, a) => {
  if (r.has(s))
    throw TypeError("Cannot add the same private member more than once");
  r instanceof WeakSet ? r.add(s) : r.set(s, a);
};
var yn = (s, r, a) => (mu(s, r, "access private method"), a);
const du = [
  { color: "red", primary: 600, secondary: 100 },
  { color: "green", primary: 600, secondary: 100 },
  { color: "blue", primary: 600, secondary: 100 },
  { color: "yellow", primary: 500, secondary: 100 },
  { color: "purple", primary: 600, secondary: 100 },
  { color: "teal", primary: 600, secondary: 100 },
  { color: "orange", primary: 600, secondary: 100 },
  { color: "cyan", primary: 600, secondary: 100 },
  { color: "lime", primary: 500, secondary: 100 },
  { color: "pink", primary: 600, secondary: 100 }
], Cl = {
  inherit: "inherit",
  current: "currentColor",
  transparent: "transparent",
  black: "#000",
  white: "#fff",
  slate: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
    950: "#020617"
  },
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
    950: "#030712"
  },
  zinc: {
    50: "#fafafa",
    100: "#f4f4f5",
    200: "#e4e4e7",
    300: "#d4d4d8",
    400: "#a1a1aa",
    500: "#71717a",
    600: "#52525b",
    700: "#3f3f46",
    800: "#27272a",
    900: "#18181b",
    950: "#09090b"
  },
  neutral: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#e5e5e5",
    300: "#d4d4d4",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
    950: "#0a0a0a"
  },
  stone: {
    50: "#fafaf9",
    100: "#f5f5f4",
    200: "#e7e5e4",
    300: "#d6d3d1",
    400: "#a8a29e",
    500: "#78716c",
    600: "#57534e",
    700: "#44403c",
    800: "#292524",
    900: "#1c1917",
    950: "#0c0a09"
  },
  red: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
    950: "#450a0a"
  },
  orange: {
    50: "#fff7ed",
    100: "#ffedd5",
    200: "#fed7aa",
    300: "#fdba74",
    400: "#fb923c",
    500: "#f97316",
    600: "#ea580c",
    700: "#c2410c",
    800: "#9a3412",
    900: "#7c2d12",
    950: "#431407"
  },
  amber: {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f",
    950: "#451a03"
  },
  yellow: {
    50: "#fefce8",
    100: "#fef9c3",
    200: "#fef08a",
    300: "#fde047",
    400: "#facc15",
    500: "#eab308",
    600: "#ca8a04",
    700: "#a16207",
    800: "#854d0e",
    900: "#713f12",
    950: "#422006"
  },
  lime: {
    50: "#f7fee7",
    100: "#ecfccb",
    200: "#d9f99d",
    300: "#bef264",
    400: "#a3e635",
    500: "#84cc16",
    600: "#65a30d",
    700: "#4d7c0f",
    800: "#3f6212",
    900: "#365314",
    950: "#1a2e05"
  },
  green: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d",
    950: "#052e16"
  },
  emerald: {
    50: "#ecfdf5",
    100: "#d1fae5",
    200: "#a7f3d0",
    300: "#6ee7b7",
    400: "#34d399",
    500: "#10b981",
    600: "#059669",
    700: "#047857",
    800: "#065f46",
    900: "#064e3b",
    950: "#022c22"
  },
  teal: {
    50: "#f0fdfa",
    100: "#ccfbf1",
    200: "#99f6e4",
    300: "#5eead4",
    400: "#2dd4bf",
    500: "#14b8a6",
    600: "#0d9488",
    700: "#0f766e",
    800: "#115e59",
    900: "#134e4a",
    950: "#042f2e"
  },
  cyan: {
    50: "#ecfeff",
    100: "#cffafe",
    200: "#a5f3fc",
    300: "#67e8f9",
    400: "#22d3ee",
    500: "#06b6d4",
    600: "#0891b2",
    700: "#0e7490",
    800: "#155e75",
    900: "#164e63",
    950: "#083344"
  },
  sky: {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e",
    950: "#082f49"
  },
  blue: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
    950: "#172554"
  },
  indigo: {
    50: "#eef2ff",
    100: "#e0e7ff",
    200: "#c7d2fe",
    300: "#a5b4fc",
    400: "#818cf8",
    500: "#6366f1",
    600: "#4f46e5",
    700: "#4338ca",
    800: "#3730a3",
    900: "#312e81",
    950: "#1e1b4b"
  },
  violet: {
    50: "#f5f3ff",
    100: "#ede9fe",
    200: "#ddd6fe",
    300: "#c4b5fd",
    400: "#a78bfa",
    500: "#8b5cf6",
    600: "#7c3aed",
    700: "#6d28d9",
    800: "#5b21b6",
    900: "#4c1d95",
    950: "#2e1065"
  },
  purple: {
    50: "#faf5ff",
    100: "#f3e8ff",
    200: "#e9d5ff",
    300: "#d8b4fe",
    400: "#c084fc",
    500: "#a855f7",
    600: "#9333ea",
    700: "#7e22ce",
    800: "#6b21a8",
    900: "#581c87",
    950: "#3b0764"
  },
  fuchsia: {
    50: "#fdf4ff",
    100: "#fae8ff",
    200: "#f5d0fe",
    300: "#f0abfc",
    400: "#e879f9",
    500: "#d946ef",
    600: "#c026d3",
    700: "#a21caf",
    800: "#86198f",
    900: "#701a75",
    950: "#4a044e"
  },
  pink: {
    50: "#fdf2f8",
    100: "#fce7f3",
    200: "#fbcfe8",
    300: "#f9a8d4",
    400: "#f472b6",
    500: "#ec4899",
    600: "#db2777",
    700: "#be185d",
    800: "#9d174d",
    900: "#831843",
    950: "#500724"
  },
  rose: {
    50: "#fff1f2",
    100: "#ffe4e6",
    200: "#fecdd3",
    300: "#fda4af",
    400: "#fb7185",
    500: "#f43f5e",
    600: "#e11d48",
    700: "#be123c",
    800: "#9f1239",
    900: "#881337",
    950: "#4c0519"
  }
};
du.reduce(
  (s, { color: r, primary: a, secondary: i }) => ({
    ...s,
    [r]: {
      primary: Cl[r][a],
      secondary: Cl[r][i]
    }
  }),
  {}
);
function oo(s) {
  let r, a = s[0], i = 1;
  for (; i < s.length; ) {
    const o = s[i], c = s[i + 1];
    if (i += 2, (o === "optionalAccess" || o === "optionalCall") && a == null)
      return;
    o === "access" || o === "optionalAccess" ? (r = a, a = c(a)) : (o === "call" || o === "optionalCall") && (a = c((...p) => a.call(r, ...p)), r = void 0);
  }
  return a;
}
class En extends Error {
  constructor(r) {
    super(r), this.name = "ShareError";
  }
}
async function El(s, r) {
  if (window.__gradio_space__ == null)
    throw new En("Must be on Spaces to share.");
  let a, i, o;
  if (r === "url") {
    const v = await fetch(s);
    a = await v.blob(), i = v.headers.get("content-type") || "", o = v.headers.get("content-disposition") || "";
  } else
    a = pu(s), i = s.split(";")[0].split(":")[1], o = "file" + i.split("/")[1];
  const c = new File([a], o, { type: i }), p = await fetch("https://huggingface.co/uploads", {
    method: "POST",
    body: c,
    headers: {
      "Content-Type": c.type,
      "X-Requested-With": "XMLHttpRequest"
    }
  });
  if (!p.ok) {
    if (oo([p, "access", (v) => v.headers, "access", (v) => v.get, "call", (v) => v("content-type"), "optionalAccess", (v) => v.includes, "call", (v) => v("application/json")])) {
      const v = await p.json();
      throw new En(`Upload failed: ${v.error}`);
    }
    throw new En("Upload failed.");
  }
  return await p.text();
}
function pu(s) {
  for (var r = s.split(","), a = r[0].match(/:(.*?);/)[1], i = atob(r[1]), o = i.length, c = new Uint8Array(o); o--; )
    c[o] = i.charCodeAt(o);
  return new Blob([c], { type: a });
}
function gu(s) {
  s.addEventListener("click", r);
  async function r(a) {
    const i = a.composedPath(), [o] = i.filter(
      (c) => oo([c, "optionalAccess", (p) => p.tagName]) === "BUTTON" && c.classList.contains("copy_code_button")
    );
    if (o) {
      let c = function(w) {
        w.style.opacity = "1", setTimeout(() => {
          w.style.opacity = "0";
        }, 2e3);
      };
      a.stopImmediatePropagation();
      const p = o.parentElement.innerText.trim(), g = Array.from(
        o.children
      )[1];
      await vu(p) && c(g);
    }
  }
  return {
    destroy() {
      s.removeEventListener("click", r);
    }
  };
}
async function vu(s) {
  let r = !1;
  if ("clipboard" in navigator)
    await navigator.clipboard.writeText(s), r = !0;
  else {
    const a = document.createElement("textarea");
    a.value = s, a.style.position = "absolute", a.style.left = "-999999px", document.body.prepend(a), a.select();
    try {
      document.execCommand("copy"), r = !0;
    } catch (i) {
      console.error(i), r = !1;
    } finally {
      a.remove();
    }
  }
  return r;
}
function wn(s) {
  let r, a = s[0], i = 1;
  for (; i < s.length; ) {
    const o = s[i], c = s[i + 1];
    if (i += 2, (o === "optionalAccess" || o === "optionalCall") && a == null)
      return;
    o === "access" || o === "optionalAccess" ? (r = a, a = c(a)) : (o === "call" || o === "optionalCall") && (a = c((...p) => a.call(r, ...p)), r = void 0);
  }
  return a;
}
const bu = async (s) => (await Promise.all(
  s.map(async (a) => await Promise.all(
    a.map(async (i, o) => {
      if (i === null)
        return "";
      let c = o === 0 ? "😃" : "🤖", p = "";
      if (typeof i == "string") {
        const g = {
          audio: /<audio.*?src="(\/file=.*?)"/g,
          video: /<video.*?src="(\/file=.*?)"/g,
          image: /<img.*?src="(\/file=.*?)".*?\/>|!\[.*?\]\((\/file=.*?)\)/g
        };
        p = i;
        for (let [v, w] of Object.entries(g)) {
          let S;
          for (; (S = w.exec(i)) !== null; ) {
            const D = S[1] || S[2], q = await El(D, "url");
            p = p.replace(D, q);
          }
        }
      } else {
        if (!wn([i, "optionalAccess", (v) => v.url]))
          return "";
        const g = await El(i.url, "url");
        wn([i, "access", (v) => v.mime_type, "optionalAccess", (v) => v.includes, "call", (v) => v("audio")]) ? p = `<audio controls src="${g}"></audio>` : wn([i, "access", (v) => v.mime_type, "optionalAccess", (v) => v.includes, "call", (v) => v("video")]) ? p = g : wn([i, "access", (v) => v.mime_type, "optionalAccess", (v) => v.includes, "call", (v) => v("image")]) && (p = `<img src="${g}" />`);
      }
      return `${c}: ${p}`;
    })
  ))
)).map(
  (a) => a.join(
    a[0] !== "" && a[1] !== "" ? `
` : ""
  )
).join(`
`);
var Bl = Object.prototype.hasOwnProperty;
function Za(s, r) {
  var a, i;
  if (s === r)
    return !0;
  if (s && r && (a = s.constructor) === r.constructor) {
    if (a === Date)
      return s.getTime() === r.getTime();
    if (a === RegExp)
      return s.toString() === r.toString();
    if (a === Array) {
      if ((i = s.length) === r.length)
        for (; i-- && Za(s[i], r[i]); )
          ;
      return i === -1;
    }
    if (!a || typeof s == "object") {
      i = 0;
      for (a in s)
        if (Bl.call(s, a) && ++i && !Bl.call(r, a) || !(a in r) || !Za(s[a], r[a]))
          return !1;
      return Object.keys(r).length === i;
    }
  }
  return s !== s && r !== r;
}
const {
  SvelteComponent: yu,
  assign: wu,
  create_slot: ku,
  detach: _u,
  element: xu,
  get_all_dirty_from_scope: Su,
  get_slot_changes: Au,
  get_spread_update: Tu,
  init: Mu,
  insert: zu,
  safe_not_equal: Cu,
  set_dynamic_element_data: Dl,
  set_style: Tt,
  toggle_class: D0,
  transition_in: uo,
  transition_out: co,
  update_slot_base: Eu
} = window.__gradio__svelte__internal;
function Bu(s) {
  let r, a, i;
  const o = (
    /*#slots*/
    s[17].default
  ), c = ku(
    o,
    s,
    /*$$scope*/
    s[16],
    null
  );
  let p = [
    { "data-testid": (
      /*test_id*/
      s[7]
    ) },
    { id: (
      /*elem_id*/
      s[2]
    ) },
    {
      class: a = "block " + /*elem_classes*/
      s[3].join(" ") + " svelte-1t38q2d"
    }
  ], g = {};
  for (let v = 0; v < p.length; v += 1)
    g = wu(g, p[v]);
  return {
    c() {
      r = xu(
        /*tag*/
        s[14]
      ), c && c.c(), Dl(
        /*tag*/
        s[14]
      )(r, g), D0(
        r,
        "hidden",
        /*visible*/
        s[10] === !1
      ), D0(
        r,
        "padded",
        /*padding*/
        s[6]
      ), D0(
        r,
        "border_focus",
        /*border_mode*/
        s[5] === "focus"
      ), D0(r, "hide-container", !/*explicit_call*/
      s[8] && !/*container*/
      s[9]), Tt(r, "height", typeof /*height*/
      s[0] == "number" ? (
        /*height*/
        s[0] + "px"
      ) : void 0), Tt(r, "width", typeof /*width*/
      s[1] == "number" ? `calc(min(${/*width*/
      s[1]}px, 100%))` : void 0), Tt(
        r,
        "border-style",
        /*variant*/
        s[4]
      ), Tt(
        r,
        "overflow",
        /*allow_overflow*/
        s[11] ? "visible" : "hidden"
      ), Tt(
        r,
        "flex-grow",
        /*scale*/
        s[12]
      ), Tt(r, "min-width", `calc(min(${/*min_width*/
      s[13]}px, 100%))`), Tt(r, "border-width", "var(--block-border-width)");
    },
    m(v, w) {
      zu(v, r, w), c && c.m(r, null), i = !0;
    },
    p(v, w) {
      c && c.p && (!i || w & /*$$scope*/
      65536) && Eu(
        c,
        o,
        v,
        /*$$scope*/
        v[16],
        i ? Au(
          o,
          /*$$scope*/
          v[16],
          w,
          null
        ) : Su(
          /*$$scope*/
          v[16]
        ),
        null
      ), Dl(
        /*tag*/
        v[14]
      )(r, g = Tu(p, [
        (!i || w & /*test_id*/
        128) && { "data-testid": (
          /*test_id*/
          v[7]
        ) },
        (!i || w & /*elem_id*/
        4) && { id: (
          /*elem_id*/
          v[2]
        ) },
        (!i || w & /*elem_classes*/
        8 && a !== (a = "block " + /*elem_classes*/
        v[3].join(" ") + " svelte-1t38q2d")) && { class: a }
      ])), D0(
        r,
        "hidden",
        /*visible*/
        v[10] === !1
      ), D0(
        r,
        "padded",
        /*padding*/
        v[6]
      ), D0(
        r,
        "border_focus",
        /*border_mode*/
        v[5] === "focus"
      ), D0(r, "hide-container", !/*explicit_call*/
      v[8] && !/*container*/
      v[9]), w & /*height*/
      1 && Tt(r, "height", typeof /*height*/
      v[0] == "number" ? (
        /*height*/
        v[0] + "px"
      ) : void 0), w & /*width*/
      2 && Tt(r, "width", typeof /*width*/
      v[1] == "number" ? `calc(min(${/*width*/
      v[1]}px, 100%))` : void 0), w & /*variant*/
      16 && Tt(
        r,
        "border-style",
        /*variant*/
        v[4]
      ), w & /*allow_overflow*/
      2048 && Tt(
        r,
        "overflow",
        /*allow_overflow*/
        v[11] ? "visible" : "hidden"
      ), w & /*scale*/
      4096 && Tt(
        r,
        "flex-grow",
        /*scale*/
        v[12]
      ), w & /*min_width*/
      8192 && Tt(r, "min-width", `calc(min(${/*min_width*/
      v[13]}px, 100%))`);
    },
    i(v) {
      i || (uo(c, v), i = !0);
    },
    o(v) {
      co(c, v), i = !1;
    },
    d(v) {
      v && _u(r), c && c.d(v);
    }
  };
}
function Du(s) {
  let r, a = (
    /*tag*/
    s[14] && Bu(s)
  );
  return {
    c() {
      a && a.c();
    },
    m(i, o) {
      a && a.m(i, o), r = !0;
    },
    p(i, [o]) {
      /*tag*/
      i[14] && a.p(i, o);
    },
    i(i) {
      r || (uo(a, i), r = !0);
    },
    o(i) {
      co(a, i), r = !1;
    },
    d(i) {
      a && a.d(i);
    }
  };
}
function Nu(s, r, a) {
  let { $$slots: i = {}, $$scope: o } = r, { height: c = void 0 } = r, { width: p = void 0 } = r, { elem_id: g = "" } = r, { elem_classes: v = [] } = r, { variant: w = "solid" } = r, { border_mode: S = "base" } = r, { padding: D = !0 } = r, { type: q = "normal" } = r, { test_id: Z = void 0 } = r, { explicit_call: j = !1 } = r, { container: re = !0 } = r, { visible: $ = !0 } = r, { allow_overflow: U = !0 } = r, { scale: F = null } = r, { min_width: C = 0 } = r, L = q === "fieldset" ? "fieldset" : "div";
  return s.$$set = (B) => {
    "height" in B && a(0, c = B.height), "width" in B && a(1, p = B.width), "elem_id" in B && a(2, g = B.elem_id), "elem_classes" in B && a(3, v = B.elem_classes), "variant" in B && a(4, w = B.variant), "border_mode" in B && a(5, S = B.border_mode), "padding" in B && a(6, D = B.padding), "type" in B && a(15, q = B.type), "test_id" in B && a(7, Z = B.test_id), "explicit_call" in B && a(8, j = B.explicit_call), "container" in B && a(9, re = B.container), "visible" in B && a(10, $ = B.visible), "allow_overflow" in B && a(11, U = B.allow_overflow), "scale" in B && a(12, F = B.scale), "min_width" in B && a(13, C = B.min_width), "$$scope" in B && a(16, o = B.$$scope);
  }, [
    c,
    p,
    g,
    v,
    w,
    S,
    D,
    Z,
    j,
    re,
    $,
    U,
    F,
    C,
    L,
    q,
    o,
    i
  ];
}
class Ru extends yu {
  constructor(r) {
    super(), Mu(this, r, Nu, Du, Cu, {
      height: 0,
      width: 1,
      elem_id: 2,
      elem_classes: 3,
      variant: 4,
      border_mode: 5,
      padding: 6,
      type: 15,
      test_id: 7,
      explicit_call: 8,
      container: 9,
      visible: 10,
      allow_overflow: 11,
      scale: 12,
      min_width: 13
    });
  }
}
const {
  SvelteComponent: Fu,
  append: Ea,
  attr: kn,
  create_component: Lu,
  destroy_component: Iu,
  detach: Ou,
  element: Nl,
  init: qu,
  insert: Pu,
  mount_component: Hu,
  safe_not_equal: Uu,
  set_data: Gu,
  space: Vu,
  text: Wu,
  toggle_class: N0,
  transition_in: ju,
  transition_out: Yu
} = window.__gradio__svelte__internal;
function Xu(s) {
  let r, a, i, o, c, p;
  return i = new /*Icon*/
  s[1]({}), {
    c() {
      r = Nl("label"), a = Nl("span"), Lu(i.$$.fragment), o = Vu(), c = Wu(
        /*label*/
        s[0]
      ), kn(a, "class", "svelte-9gxdi0"), kn(r, "for", ""), kn(r, "data-testid", "block-label"), kn(r, "class", "svelte-9gxdi0"), N0(r, "hide", !/*show_label*/
      s[2]), N0(r, "sr-only", !/*show_label*/
      s[2]), N0(
        r,
        "float",
        /*float*/
        s[4]
      ), N0(
        r,
        "hide-label",
        /*disable*/
        s[3]
      );
    },
    m(g, v) {
      Pu(g, r, v), Ea(r, a), Hu(i, a, null), Ea(r, o), Ea(r, c), p = !0;
    },
    p(g, [v]) {
      (!p || v & /*label*/
      1) && Gu(
        c,
        /*label*/
        g[0]
      ), (!p || v & /*show_label*/
      4) && N0(r, "hide", !/*show_label*/
      g[2]), (!p || v & /*show_label*/
      4) && N0(r, "sr-only", !/*show_label*/
      g[2]), (!p || v & /*float*/
      16) && N0(
        r,
        "float",
        /*float*/
        g[4]
      ), (!p || v & /*disable*/
      8) && N0(
        r,
        "hide-label",
        /*disable*/
        g[3]
      );
    },
    i(g) {
      p || (ju(i.$$.fragment, g), p = !0);
    },
    o(g) {
      Yu(i.$$.fragment, g), p = !1;
    },
    d(g) {
      g && Ou(r), Iu(i);
    }
  };
}
function Zu(s, r, a) {
  let { label: i = null } = r, { Icon: o } = r, { show_label: c = !0 } = r, { disable: p = !1 } = r, { float: g = !0 } = r;
  return s.$$set = (v) => {
    "label" in v && a(0, i = v.label), "Icon" in v && a(1, o = v.Icon), "show_label" in v && a(2, c = v.show_label), "disable" in v && a(3, p = v.disable), "float" in v && a(4, g = v.float);
  }, [i, o, c, p, g];
}
class Ku extends Fu {
  constructor(r) {
    super(), qu(this, r, Zu, Xu, Uu, {
      label: 0,
      Icon: 1,
      show_label: 2,
      disable: 3,
      float: 4
    });
  }
}
const {
  SvelteComponent: Qu,
  append: Ka,
  attr: J0,
  bubble: Ju,
  create_component: $u,
  destroy_component: ec,
  detach: ho,
  element: Qa,
  init: tc,
  insert: fo,
  listen: rc,
  mount_component: nc,
  safe_not_equal: ac,
  set_data: ic,
  space: lc,
  text: sc,
  toggle_class: R0,
  transition_in: oc,
  transition_out: uc
} = window.__gradio__svelte__internal;
function Rl(s) {
  let r, a;
  return {
    c() {
      r = Qa("span"), a = sc(
        /*label*/
        s[1]
      ), J0(r, "class", "svelte-xtz2g8");
    },
    m(i, o) {
      fo(i, r, o), Ka(r, a);
    },
    p(i, o) {
      o & /*label*/
      2 && ic(
        a,
        /*label*/
        i[1]
      );
    },
    d(i) {
      i && ho(r);
    }
  };
}
function cc(s) {
  let r, a, i, o, c, p, g, v = (
    /*show_label*/
    s[2] && Rl(s)
  );
  return o = new /*Icon*/
  s[0]({}), {
    c() {
      r = Qa("button"), v && v.c(), a = lc(), i = Qa("div"), $u(o.$$.fragment), J0(i, "class", "svelte-xtz2g8"), R0(
        i,
        "small",
        /*size*/
        s[4] === "small"
      ), R0(
        i,
        "large",
        /*size*/
        s[4] === "large"
      ), J0(
        r,
        "aria-label",
        /*label*/
        s[1]
      ), J0(
        r,
        "title",
        /*label*/
        s[1]
      ), J0(r, "class", "svelte-xtz2g8"), R0(
        r,
        "pending",
        /*pending*/
        s[3]
      ), R0(
        r,
        "padded",
        /*padded*/
        s[5]
      );
    },
    m(w, S) {
      fo(w, r, S), v && v.m(r, null), Ka(r, a), Ka(r, i), nc(o, i, null), c = !0, p || (g = rc(
        r,
        "click",
        /*click_handler*/
        s[6]
      ), p = !0);
    },
    p(w, [S]) {
      /*show_label*/
      w[2] ? v ? v.p(w, S) : (v = Rl(w), v.c(), v.m(r, a)) : v && (v.d(1), v = null), (!c || S & /*size*/
      16) && R0(
        i,
        "small",
        /*size*/
        w[4] === "small"
      ), (!c || S & /*size*/
      16) && R0(
        i,
        "large",
        /*size*/
        w[4] === "large"
      ), (!c || S & /*label*/
      2) && J0(
        r,
        "aria-label",
        /*label*/
        w[1]
      ), (!c || S & /*label*/
      2) && J0(
        r,
        "title",
        /*label*/
        w[1]
      ), (!c || S & /*pending*/
      8) && R0(
        r,
        "pending",
        /*pending*/
        w[3]
      ), (!c || S & /*padded*/
      32) && R0(
        r,
        "padded",
        /*padded*/
        w[5]
      );
    },
    i(w) {
      c || (oc(o.$$.fragment, w), c = !0);
    },
    o(w) {
      uc(o.$$.fragment, w), c = !1;
    },
    d(w) {
      w && ho(r), v && v.d(), ec(o), p = !1, g();
    }
  };
}
function hc(s, r, a) {
  let { Icon: i } = r, { label: o = "" } = r, { show_label: c = !1 } = r, { pending: p = !1 } = r, { size: g = "small" } = r, { padded: v = !0 } = r;
  function w(S) {
    Ju.call(this, s, S);
  }
  return s.$$set = (S) => {
    "Icon" in S && a(0, i = S.Icon), "label" in S && a(1, o = S.label), "show_label" in S && a(2, c = S.show_label), "pending" in S && a(3, p = S.pending), "size" in S && a(4, g = S.size), "padded" in S && a(5, v = S.padded);
  }, [i, o, c, p, g, v, w];
}
class fc extends Qu {
  constructor(r) {
    super(), tc(this, r, hc, cc, ac, {
      Icon: 0,
      label: 1,
      show_label: 2,
      pending: 3,
      size: 4,
      padded: 5
    });
  }
}
const {
  SvelteComponent: mc,
  append: Fl,
  attr: Mt,
  detach: dc,
  init: pc,
  insert: gc,
  noop: Ba,
  safe_not_equal: vc,
  svg_element: Da
} = window.__gradio__svelte__internal;
function bc(s) {
  let r, a, i;
  return {
    c() {
      r = Da("svg"), a = Da("path"), i = Da("path"), Mt(a, "fill", "currentColor"), Mt(a, "d", "M17.74 30L16 29l4-7h6a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9v2H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4h-4.84Z"), Mt(i, "fill", "currentColor"), Mt(i, "d", "M8 10h16v2H8zm0 6h10v2H8z"), Mt(r, "xmlns", "http://www.w3.org/2000/svg"), Mt(r, "xmlns:xlink", "http://www.w3.org/1999/xlink"), Mt(r, "aria-hidden", "true"), Mt(r, "role", "img"), Mt(r, "class", "iconify iconify--carbon"), Mt(r, "width", "100%"), Mt(r, "height", "100%"), Mt(r, "preserveAspectRatio", "xMidYMid meet"), Mt(r, "viewBox", "0 0 32 32");
    },
    m(o, c) {
      gc(o, r, c), Fl(r, a), Fl(r, i);
    },
    p: Ba,
    i: Ba,
    o: Ba,
    d(o) {
      o && dc(r);
    }
  };
}
class yc extends mc {
  constructor(r) {
    super(), pc(this, r, null, bc, vc, {});
  }
}
const {
  SvelteComponent: wc,
  append: kc,
  attr: $t,
  detach: _c,
  init: xc,
  insert: Sc,
  noop: Na,
  safe_not_equal: Ac,
  svg_element: Ll
} = window.__gradio__svelte__internal;
function Tc(s) {
  let r, a;
  return {
    c() {
      r = Ll("svg"), a = Ll("polyline"), $t(a, "points", "20 6 9 17 4 12"), $t(r, "xmlns", "http://www.w3.org/2000/svg"), $t(r, "width", "15px"), $t(r, "height", "14px"), $t(r, "viewBox", "2 0 20 20"), $t(r, "fill", "none"), $t(r, "stroke", "currentColor"), $t(r, "stroke-width", "3"), $t(r, "stroke-linecap", "round"), $t(r, "stroke-linejoin", "round");
    },
    m(i, o) {
      Sc(i, r, o), kc(r, a);
    },
    p: Na,
    i: Na,
    o: Na,
    d(i) {
      i && _c(r);
    }
  };
}
class Mc extends wc {
  constructor(r) {
    super(), xc(this, r, null, Tc, Ac, {});
  }
}
const {
  SvelteComponent: zc,
  append: Cc,
  attr: Or,
  detach: Ec,
  init: Bc,
  insert: Dc,
  noop: Ra,
  safe_not_equal: Nc,
  svg_element: Il
} = window.__gradio__svelte__internal;
function Rc(s) {
  let r, a;
  return {
    c() {
      r = Il("svg"), a = Il("path"), Or(a, "d", "M23,20a5,5,0,0,0-3.89,1.89L11.8,17.32a4.46,4.46,0,0,0,0-2.64l7.31-4.57A5,5,0,1,0,18,7a4.79,4.79,0,0,0,.2,1.32l-7.31,4.57a5,5,0,1,0,0,6.22l7.31,4.57A4.79,4.79,0,0,0,18,25a5,5,0,1,0,5-5ZM23,4a3,3,0,1,1-3,3A3,3,0,0,1,23,4ZM7,19a3,3,0,1,1,3-3A3,3,0,0,1,7,19Zm16,9a3,3,0,1,1,3-3A3,3,0,0,1,23,28Z"), Or(a, "fill", "currentColor"), Or(r, "id", "icon"), Or(r, "xmlns", "http://www.w3.org/2000/svg"), Or(r, "viewBox", "0 0 32 32");
    },
    m(i, o) {
      Dc(i, r, o), Cc(r, a);
    },
    p: Ra,
    i: Ra,
    o: Ra,
    d(i) {
      i && Ec(r);
    }
  };
}
class Fc extends zc {
  constructor(r) {
    super(), Bc(this, r, null, Rc, Nc, {});
  }
}
const {
  SvelteComponent: Lc,
  append: Ol,
  attr: m0,
  detach: Ic,
  init: Oc,
  insert: qc,
  noop: Fa,
  safe_not_equal: Pc,
  svg_element: La
} = window.__gradio__svelte__internal;
function Hc(s) {
  let r, a, i;
  return {
    c() {
      r = La("svg"), a = La("path"), i = La("path"), m0(a, "fill", "currentColor"), m0(a, "d", "M28 10v18H10V10h18m0-2H10a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2Z"), m0(i, "fill", "currentColor"), m0(i, "d", "M4 18H2V4a2 2 0 0 1 2-2h14v2H4Z"), m0(r, "xmlns", "http://www.w3.org/2000/svg"), m0(r, "width", "15px"), m0(r, "height", "14px"), m0(r, "viewBox", "0 0 33 33"), m0(r, "color", "currentColor");
    },
    m(o, c) {
      qc(o, r, c), Ol(r, a), Ol(r, i);
    },
    p: Fa,
    i: Fa,
    o: Fa,
    d(o) {
      o && Ic(r);
    }
  };
}
class Uc extends Lc {
  constructor(r) {
    super(), Oc(this, r, null, Hc, Pc, {});
  }
}
const {
  SvelteComponent: Gc,
  append: ql,
  attr: ot,
  detach: Vc,
  init: Wc,
  insert: jc,
  noop: Pl,
  safe_not_equal: Yc,
  svg_element: Ia
} = window.__gradio__svelte__internal;
function Xc(s) {
  let r, a, i, o;
  return {
    c() {
      r = Ia("svg"), a = Ia("path"), i = Ia("path"), ot(a, "stroke", "currentColor"), ot(a, "stroke-width", "1.5"), ot(a, "stroke-linecap", "round"), ot(a, "d", "M16.472 3.5H4.1a.6.6 0 0 0-.6.6v9.8a.6.6 0 0 0 .6.6h2.768a2 2 0 0 1 1.715.971l2.71 4.517a1.631 1.631 0 0 0 2.961-1.308l-1.022-3.408a.6.6 0 0 1 .574-.772h4.575a2 2 0 0 0 1.93-2.526l-1.91-7A2 2 0 0 0 16.473 3.5Z"), ot(i, "stroke", "currentColor"), ot(i, "stroke-width", "1.5"), ot(i, "stroke-linecap", "round"), ot(i, "stroke-linejoin", "round"), ot(i, "d", "M7 14.5v-11"), ot(r, "xmlns", "http://www.w3.org/2000/svg"), ot(r, "width", "15px"), ot(r, "height", "15px"), ot(r, "viewBox", "0 0 24 24"), ot(r, "fill", o = /*actioned*/
      s[0] ? "currentColor" : "none"), ot(r, "stroke-width", "1.5"), ot(r, "color", "currentColor");
    },
    m(c, p) {
      jc(c, r, p), ql(r, a), ql(r, i);
    },
    p(c, [p]) {
      p & /*actioned*/
      1 && o !== (o = /*actioned*/
      c[0] ? "currentColor" : "none") && ot(r, "fill", o);
    },
    i: Pl,
    o: Pl,
    d(c) {
      c && Vc(r);
    }
  };
}
function Zc(s, r, a) {
  let { actioned: i } = r;
  return s.$$set = (o) => {
    "actioned" in o && a(0, i = o.actioned);
  }, [i];
}
class Kc extends Gc {
  constructor(r) {
    super(), Wc(this, r, Zc, Xc, Yc, { actioned: 0 });
  }
}
const {
  SvelteComponent: Qc,
  append: Hl,
  attr: ut,
  detach: Jc,
  init: $c,
  insert: e4,
  noop: Ul,
  safe_not_equal: t4,
  svg_element: Oa
} = window.__gradio__svelte__internal;
function r4(s) {
  let r, a, i, o;
  return {
    c() {
      r = Oa("svg"), a = Oa("path"), i = Oa("path"), ut(a, "stroke", "currentColor"), ut(a, "stroke-width", "1.5"), ut(a, "stroke-linecap", "round"), ut(a, "d", "M16.472 20H4.1a.6.6 0 0 1-.6-.6V9.6a.6.6 0 0 1 .6-.6h2.768a2 2 0 0 0 1.715-.971l2.71-4.517a1.631 1.631 0 0 1 2.961 1.308l-1.022 3.408a.6.6 0 0 0 .574.772h4.575a2 2 0 0 1 1.93 2.526l-1.91 7A2 2 0 0 1 16.473 20Z"), ut(i, "stroke", "currentColor"), ut(i, "stroke-width", "1.5"), ut(i, "stroke-linecap", "round"), ut(i, "stroke-linejoin", "round"), ut(i, "d", "M7 20V9"), ut(r, "xmlns", "http://www.w3.org/2000/svg"), ut(r, "width", "15px"), ut(r, "height", "15px"), ut(r, "viewBox", "0 0 24 24"), ut(r, "fill", o = /*actioned*/
      s[0] ? "currentColor" : "none"), ut(r, "stroke-width", "1.5"), ut(r, "color", "currentColor");
    },
    m(c, p) {
      e4(c, r, p), Hl(r, a), Hl(r, i);
    },
    p(c, [p]) {
      p & /*actioned*/
      1 && o !== (o = /*actioned*/
      c[0] ? "currentColor" : "none") && ut(r, "fill", o);
    },
    i: Ul,
    o: Ul,
    d(c) {
      c && Jc(r);
    }
  };
}
function n4(s, r, a) {
  let { actioned: i } = r;
  return s.$$set = (o) => {
    "actioned" in o && a(0, i = o.actioned);
  }, [i];
}
class a4 extends Qc {
  constructor(r) {
    super(), $c(this, r, n4, r4, t4, { actioned: 0 });
  }
}
const {
  SvelteComponent: i4,
  create_component: l4,
  destroy_component: s4,
  init: o4,
  mount_component: u4,
  safe_not_equal: c4,
  transition_in: h4,
  transition_out: f4
} = window.__gradio__svelte__internal, { createEventDispatcher: m4 } = window.__gradio__svelte__internal;
function d4(s) {
  let r, a;
  return r = new fc({
    props: {
      Icon: Fc,
      label: (
        /*i18n*/
        s[2]("common.share")
      ),
      pending: (
        /*pending*/
        s[3]
      )
    }
  }), r.$on(
    "click",
    /*click_handler*/
    s[5]
  ), {
    c() {
      l4(r.$$.fragment);
    },
    m(i, o) {
      u4(r, i, o), a = !0;
    },
    p(i, [o]) {
      const c = {};
      o & /*i18n*/
      4 && (c.label = /*i18n*/
      i[2]("common.share")), o & /*pending*/
      8 && (c.pending = /*pending*/
      i[3]), r.$set(c);
    },
    i(i) {
      a || (h4(r.$$.fragment, i), a = !0);
    },
    o(i) {
      f4(r.$$.fragment, i), a = !1;
    },
    d(i) {
      s4(r, i);
    }
  };
}
function p4(s, r, a) {
  const i = m4();
  let { formatter: o } = r, { value: c } = r, { i18n: p } = r, g = !1;
  const v = async () => {
    try {
      a(3, g = !0);
      const w = await o(c);
      i("share", { description: w });
    } catch (w) {
      console.error(w);
      let S = w instanceof En ? w.message : "Share failed.";
      i("error", S);
    } finally {
      a(3, g = !1);
    }
  };
  return s.$$set = (w) => {
    "formatter" in w && a(0, o = w.formatter), "value" in w && a(1, c = w.value), "i18n" in w && a(2, p = w.i18n);
  }, [o, c, p, g, i, v];
}
class g4 extends i4 {
  constructor(r) {
    super(), o4(this, r, p4, d4, c4, { formatter: 0, value: 1, i18n: 2 });
  }
}
/*! @license DOMPurify 3.0.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.6/LICENSE */
const {
  entries: mo,
  setPrototypeOf: Gl,
  isFrozen: v4,
  getPrototypeOf: b4,
  getOwnPropertyDescriptor: po
} = Object;
let {
  freeze: pt,
  seal: jt,
  create: go
} = Object, {
  apply: Ja,
  construct: $a
} = typeof Reflect < "u" && Reflect;
pt || (pt = function(r) {
  return r;
});
jt || (jt = function(r) {
  return r;
});
Ja || (Ja = function(r, a, i) {
  return r.apply(a, i);
});
$a || ($a = function(r, a) {
  return new r(...a);
});
const _n = Pt(Array.prototype.forEach), Vl = Pt(Array.prototype.pop), qr = Pt(Array.prototype.push), Bn = Pt(String.prototype.toLowerCase), qa = Pt(String.prototype.toString), y4 = Pt(String.prototype.match), Pr = Pt(String.prototype.replace), w4 = Pt(String.prototype.indexOf), k4 = Pt(String.prototype.trim), zt = Pt(RegExp.prototype.test), Hr = _4(TypeError);
function Pt(s) {
  return function(r) {
    for (var a = arguments.length, i = new Array(a > 1 ? a - 1 : 0), o = 1; o < a; o++)
      i[o - 1] = arguments[o];
    return Ja(s, r, i);
  };
}
function _4(s) {
  return function() {
    for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++)
      a[i] = arguments[i];
    return $a(s, a);
  };
}
function _e(s, r) {
  let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Bn;
  Gl && Gl(s, null);
  let i = r.length;
  for (; i--; ) {
    let o = r[i];
    if (typeof o == "string") {
      const c = a(o);
      c !== o && (v4(r) || (r[i] = c), o = c);
    }
    s[o] = !0;
  }
  return s;
}
function dr(s) {
  const r = go(null);
  for (const [a, i] of mo(s))
    po(s, a) !== void 0 && (r[a] = i);
  return r;
}
function xn(s, r) {
  for (; s !== null; ) {
    const i = po(s, r);
    if (i) {
      if (i.get)
        return Pt(i.get);
      if (typeof i.value == "function")
        return Pt(i.value);
    }
    s = b4(s);
  }
  function a(i) {
    return console.warn("fallback value for", i), null;
  }
  return a;
}
const Wl = pt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Pa = pt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Ha = pt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), x4 = pt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Ua = pt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), S4 = pt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), jl = pt(["#text"]), Yl = pt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), Ga = pt(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Xl = pt(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Sn = pt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), A4 = jt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), T4 = jt(/<%[\w\W]*|[\w\W]*%>/gm), M4 = jt(/\${[\w\W]*}/gm), z4 = jt(/^data-[\-\w.\u00B7-\uFFFF]/), C4 = jt(/^aria-[\-\w]+$/), vo = jt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), E4 = jt(/^(?:\w+script|data):/i), B4 = jt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), bo = jt(/^html$/i);
var Zl = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  MUSTACHE_EXPR: A4,
  ERB_EXPR: T4,
  TMPLIT_EXPR: M4,
  DATA_ATTR: z4,
  ARIA_ATTR: C4,
  IS_ALLOWED_URI: vo,
  IS_SCRIPT_OR_DATA: E4,
  ATTR_WHITESPACE: B4,
  DOCTYPE_NAME: bo
});
const D4 = function() {
  return typeof window > "u" ? null : window;
}, N4 = function(r, a) {
  if (typeof r != "object" || typeof r.createPolicy != "function")
    return null;
  let i = null;
  const o = "data-tt-policy-suffix";
  a && a.hasAttribute(o) && (i = a.getAttribute(o));
  const c = "dompurify" + (i ? "#" + i : "");
  try {
    return r.createPolicy(c, {
      createHTML(p) {
        return p;
      },
      createScriptURL(p) {
        return p;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + c + " could not be created."), null;
  }
};
function yo() {
  let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : D4();
  const r = (he) => yo(he);
  if (r.version = "3.0.6", r.removed = [], !s || !s.document || s.document.nodeType !== 9)
    return r.isSupported = !1, r;
  let {
    document: a
  } = s;
  const i = a, o = i.currentScript, {
    DocumentFragment: c,
    HTMLTemplateElement: p,
    Node: g,
    Element: v,
    NodeFilter: w,
    NamedNodeMap: S = s.NamedNodeMap || s.MozNamedAttrMap,
    HTMLFormElement: D,
    DOMParser: q,
    trustedTypes: Z
  } = s, j = v.prototype, re = xn(j, "cloneNode"), $ = xn(j, "nextSibling"), U = xn(j, "childNodes"), F = xn(j, "parentNode");
  if (typeof p == "function") {
    const he = a.createElement("template");
    he.content && he.content.ownerDocument && (a = he.content.ownerDocument);
  }
  let C, L = "";
  const {
    implementation: B,
    createNodeIterator: O,
    createDocumentFragment: G,
    getElementsByTagName: Q
  } = a, {
    importNode: Y
  } = i;
  let ue = {};
  r.isSupported = typeof mo == "function" && typeof F == "function" && B && B.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: ge,
    ERB_EXPR: Fe,
    TMPLIT_EXPR: Se,
    DATA_ATTR: Le,
    ARIA_ATTR: rt,
    IS_SCRIPT_OR_DATA: Ct,
    ATTR_WHITESPACE: xt
  } = Zl;
  let {
    IS_ALLOWED_URI: Ie
  } = Zl, xe = null;
  const at = _e({}, [...Wl, ...Pa, ...Ha, ...Ua, ...jl]);
  let I = null;
  const Oe = _e({}, [...Yl, ...Ga, ...Xl, ...Sn]);
  let ne = Object.seal(go(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), J = null, Xe = null, Ge = !0, bt = !0, p0 = !1, G0 = !0, Et = !1, yt = !1, V0 = !1, s0 = !1, g0 = !1, rr = !1, W0 = !1, Wr = !0, v0 = !1;
  const Bt = "user-content-";
  let b0 = !0, y0 = !1, w0 = {}, Yt = null;
  const nr = _e({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let jr = null;
  const Yr = _e({}, ["audio", "video", "img", "source", "image", "track"]);
  let ar = null;
  const Tr = _e({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), j0 = "http://www.w3.org/1998/Math/MathML", ir = "http://www.w3.org/2000/svg", St = "http://www.w3.org/1999/xhtml";
  let k0 = St, lr = !1, Pe = null;
  const te = _e({}, [j0, ir, St], qa);
  let ct = null;
  const Xr = ["application/xhtml+xml", "text/html"], Zr = "text/html";
  let $e = null, Dt = null;
  const Mr = a.createElement("form"), Kr = function(M) {
    return M instanceof RegExp || M instanceof Function;
  }, zr = function() {
    let M = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(Dt && Dt === M)) {
      if ((!M || typeof M != "object") && (M = {}), M = dr(M), ct = // eslint-disable-next-line unicorn/prefer-includes
      Xr.indexOf(M.PARSER_MEDIA_TYPE) === -1 ? ct = Zr : ct = M.PARSER_MEDIA_TYPE, $e = ct === "application/xhtml+xml" ? qa : Bn, xe = "ALLOWED_TAGS" in M ? _e({}, M.ALLOWED_TAGS, $e) : at, I = "ALLOWED_ATTR" in M ? _e({}, M.ALLOWED_ATTR, $e) : Oe, Pe = "ALLOWED_NAMESPACES" in M ? _e({}, M.ALLOWED_NAMESPACES, qa) : te, ar = "ADD_URI_SAFE_ATTR" in M ? _e(
        dr(Tr),
        // eslint-disable-line indent
        M.ADD_URI_SAFE_ATTR,
        // eslint-disable-line indent
        $e
        // eslint-disable-line indent
      ) : Tr, jr = "ADD_DATA_URI_TAGS" in M ? _e(
        dr(Yr),
        // eslint-disable-line indent
        M.ADD_DATA_URI_TAGS,
        // eslint-disable-line indent
        $e
        // eslint-disable-line indent
      ) : Yr, Yt = "FORBID_CONTENTS" in M ? _e({}, M.FORBID_CONTENTS, $e) : nr, J = "FORBID_TAGS" in M ? _e({}, M.FORBID_TAGS, $e) : {}, Xe = "FORBID_ATTR" in M ? _e({}, M.FORBID_ATTR, $e) : {}, w0 = "USE_PROFILES" in M ? M.USE_PROFILES : !1, Ge = M.ALLOW_ARIA_ATTR !== !1, bt = M.ALLOW_DATA_ATTR !== !1, p0 = M.ALLOW_UNKNOWN_PROTOCOLS || !1, G0 = M.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Et = M.SAFE_FOR_TEMPLATES || !1, yt = M.WHOLE_DOCUMENT || !1, g0 = M.RETURN_DOM || !1, rr = M.RETURN_DOM_FRAGMENT || !1, W0 = M.RETURN_TRUSTED_TYPE || !1, s0 = M.FORCE_BODY || !1, Wr = M.SANITIZE_DOM !== !1, v0 = M.SANITIZE_NAMED_PROPS || !1, b0 = M.KEEP_CONTENT !== !1, y0 = M.IN_PLACE || !1, Ie = M.ALLOWED_URI_REGEXP || vo, k0 = M.NAMESPACE || St, ne = M.CUSTOM_ELEMENT_HANDLING || {}, M.CUSTOM_ELEMENT_HANDLING && Kr(M.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (ne.tagNameCheck = M.CUSTOM_ELEMENT_HANDLING.tagNameCheck), M.CUSTOM_ELEMENT_HANDLING && Kr(M.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (ne.attributeNameCheck = M.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), M.CUSTOM_ELEMENT_HANDLING && typeof M.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (ne.allowCustomizedBuiltInElements = M.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Et && (bt = !1), rr && (g0 = !0), w0 && (xe = _e({}, [...jl]), I = [], w0.html === !0 && (_e(xe, Wl), _e(I, Yl)), w0.svg === !0 && (_e(xe, Pa), _e(I, Ga), _e(I, Sn)), w0.svgFilters === !0 && (_e(xe, Ha), _e(I, Ga), _e(I, Sn)), w0.mathMl === !0 && (_e(xe, Ua), _e(I, Xl), _e(I, Sn))), M.ADD_TAGS && (xe === at && (xe = dr(xe)), _e(xe, M.ADD_TAGS, $e)), M.ADD_ATTR && (I === Oe && (I = dr(I)), _e(I, M.ADD_ATTR, $e)), M.ADD_URI_SAFE_ATTR && _e(ar, M.ADD_URI_SAFE_ATTR, $e), M.FORBID_CONTENTS && (Yt === nr && (Yt = dr(Yt)), _e(Yt, M.FORBID_CONTENTS, $e)), b0 && (xe["#text"] = !0), yt && _e(xe, ["html", "head", "body"]), xe.table && (_e(xe, ["tbody"]), delete J.tbody), M.TRUSTED_TYPES_POLICY) {
        if (typeof M.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Hr('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof M.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Hr('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        C = M.TRUSTED_TYPES_POLICY, L = C.createHTML("");
      } else
        C === void 0 && (C = N4(Z, o)), C !== null && typeof L == "string" && (L = C.createHTML(""));
      pt && pt(M), Dt = M;
    }
  }, ft = _e({}, ["mi", "mo", "mn", "ms", "mtext"]), Nt = _e({}, ["foreignobject", "desc", "title", "annotation-xml"]), Xt = _e({}, ["title", "style", "font", "a", "script"]), _0 = _e({}, Pa);
  _e(_0, Ha), _e(_0, x4);
  const sr = _e({}, Ua);
  _e(sr, S4);
  const Vn = function(M) {
    let X = F(M);
    (!X || !X.tagName) && (X = {
      namespaceURI: k0,
      tagName: "template"
    });
    const ie = Bn(M.tagName), Be = Bn(X.tagName);
    return Pe[M.namespaceURI] ? M.namespaceURI === ir ? X.namespaceURI === St ? ie === "svg" : X.namespaceURI === j0 ? ie === "svg" && (Be === "annotation-xml" || ft[Be]) : !!_0[ie] : M.namespaceURI === j0 ? X.namespaceURI === St ? ie === "math" : X.namespaceURI === ir ? ie === "math" && Nt[Be] : !!sr[ie] : M.namespaceURI === St ? X.namespaceURI === ir && !Nt[Be] || X.namespaceURI === j0 && !ft[Be] ? !1 : !sr[ie] && (Xt[ie] || !_0[ie]) : !!(ct === "application/xhtml+xml" && Pe[M.namespaceURI]) : !1;
  }, o0 = function(M) {
    qr(r.removed, {
      element: M
    });
    try {
      M.parentNode.removeChild(M);
    } catch {
      M.remove();
    }
  }, Cr = function(M, X) {
    try {
      qr(r.removed, {
        attribute: X.getAttributeNode(M),
        from: X
      });
    } catch {
      qr(r.removed, {
        attribute: null,
        from: X
      });
    }
    if (X.removeAttribute(M), M === "is" && !I[M])
      if (g0 || rr)
        try {
          o0(X);
        } catch {
        }
      else
        try {
          X.setAttribute(M, "");
        } catch {
        }
  }, Y0 = function(M) {
    let X = null, ie = null;
    if (s0)
      M = "<remove></remove>" + M;
    else {
      const We = y4(M, /^[\r\n\t ]+/);
      ie = We && We[0];
    }
    ct === "application/xhtml+xml" && k0 === St && (M = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + M + "</body></html>");
    const Be = C ? C.createHTML(M) : M;
    if (k0 === St)
      try {
        X = new q().parseFromString(Be, ct);
      } catch {
      }
    if (!X || !X.documentElement) {
      X = B.createDocument(k0, "template", null);
      try {
        X.documentElement.innerHTML = lr ? L : Be;
      } catch {
      }
    }
    const A = X.body || X.documentElement;
    return M && ie && A.insertBefore(a.createTextNode(ie), A.childNodes[0] || null), k0 === St ? Q.call(X, yt ? "html" : "body")[0] : yt ? X.documentElement : A;
  }, Ve = function(M) {
    return O.call(
      M.ownerDocument || M,
      M,
      // eslint-disable-next-line no-bitwise
      w.SHOW_ELEMENT | w.SHOW_COMMENT | w.SHOW_TEXT,
      null
    );
  }, h = function(M) {
    return M instanceof D && (typeof M.nodeName != "string" || typeof M.textContent != "string" || typeof M.removeChild != "function" || !(M.attributes instanceof S) || typeof M.removeAttribute != "function" || typeof M.setAttribute != "function" || typeof M.namespaceURI != "string" || typeof M.insertBefore != "function" || typeof M.hasChildNodes != "function");
  }, d = function(M) {
    return typeof g == "function" && M instanceof g;
  }, W = function(M, X, ie) {
    ue[M] && _n(ue[M], (Be) => {
      Be.call(r, X, ie, Dt);
    });
  }, y = function(M) {
    let X = null;
    if (W("beforeSanitizeElements", M, null), h(M))
      return o0(M), !0;
    const ie = $e(M.nodeName);
    if (W("uponSanitizeElement", M, {
      tagName: ie,
      allowedTags: xe
    }), M.hasChildNodes() && !d(M.firstElementChild) && zt(/<[/\w]/g, M.innerHTML) && zt(/<[/\w]/g, M.textContent))
      return o0(M), !0;
    if (!xe[ie] || J[ie]) {
      if (!J[ie] && He(ie) && (ne.tagNameCheck instanceof RegExp && zt(ne.tagNameCheck, ie) || ne.tagNameCheck instanceof Function && ne.tagNameCheck(ie)))
        return !1;
      if (b0 && !Yt[ie]) {
        const Be = F(M) || M.parentNode, A = U(M) || M.childNodes;
        if (A && Be) {
          const We = A.length;
          for (let E = We - 1; E >= 0; --E)
            Be.insertBefore(re(A[E], !0), $(M));
        }
      }
      return o0(M), !0;
    }
    return M instanceof v && !Vn(M) || (ie === "noscript" || ie === "noembed" || ie === "noframes") && zt(/<\/no(script|embed|frames)/i, M.innerHTML) ? (o0(M), !0) : (Et && M.nodeType === 3 && (X = M.textContent, _n([ge, Fe, Se], (Be) => {
      X = Pr(X, Be, " ");
    }), M.textContent !== X && (qr(r.removed, {
      element: M.cloneNode()
    }), M.textContent = X)), W("afterSanitizeElements", M, null), !1);
  }, T = function(M, X, ie) {
    if (Wr && (X === "id" || X === "name") && (ie in a || ie in Mr))
      return !1;
    if (!(bt && !Xe[X] && zt(Le, X))) {
      if (!(Ge && zt(rt, X))) {
        if (!I[X] || Xe[X]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(He(M) && (ne.tagNameCheck instanceof RegExp && zt(ne.tagNameCheck, M) || ne.tagNameCheck instanceof Function && ne.tagNameCheck(M)) && (ne.attributeNameCheck instanceof RegExp && zt(ne.attributeNameCheck, X) || ne.attributeNameCheck instanceof Function && ne.attributeNameCheck(X)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            X === "is" && ne.allowCustomizedBuiltInElements && (ne.tagNameCheck instanceof RegExp && zt(ne.tagNameCheck, ie) || ne.tagNameCheck instanceof Function && ne.tagNameCheck(ie)))
          )
            return !1;
        } else if (!ar[X]) {
          if (!zt(Ie, Pr(ie, xt, ""))) {
            if (!((X === "src" || X === "xlink:href" || X === "href") && M !== "script" && w4(ie, "data:") === 0 && jr[M])) {
              if (!(p0 && !zt(Ct, Pr(ie, xt, "")))) {
                if (ie)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, He = function(M) {
    return M.indexOf("-") > 0;
  }, se = function(M) {
    W("beforeSanitizeAttributes", M, null);
    const {
      attributes: X
    } = M;
    if (!X)
      return;
    const ie = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: I
    };
    let Be = X.length;
    for (; Be--; ) {
      const A = X[Be], {
        name: We,
        namespaceURI: E,
        value: Zt
      } = A, x0 = $e(We);
      let it = We === "value" ? Zt : k4(Zt);
      if (ie.attrName = x0, ie.attrValue = it, ie.keepAttr = !0, ie.forceKeepAttr = void 0, W("uponSanitizeAttribute", M, ie), it = ie.attrValue, ie.forceKeepAttr || (Cr(We, M), !ie.keepAttr))
        continue;
      if (!G0 && zt(/\/>/i, it)) {
        Cr(We, M);
        continue;
      }
      Et && _n([ge, Fe, Se], (Br) => {
        it = Pr(it, Br, " ");
      });
      const Er = $e(M.nodeName);
      if (T(Er, x0, it)) {
        if (v0 && (x0 === "id" || x0 === "name") && (Cr(We, M), it = Bt + it), C && typeof Z == "object" && typeof Z.getAttributeType == "function" && !E)
          switch (Z.getAttributeType(Er, x0)) {
            case "TrustedHTML": {
              it = C.createHTML(it);
              break;
            }
            case "TrustedScriptURL": {
              it = C.createScriptURL(it);
              break;
            }
          }
        try {
          E ? M.setAttributeNS(E, We, it) : M.setAttribute(We, it), Vl(r.removed);
        } catch {
        }
      }
    }
    W("afterSanitizeAttributes", M, null);
  }, lt = function he(M) {
    let X = null;
    const ie = Ve(M);
    for (W("beforeSanitizeShadowDOM", M, null); X = ie.nextNode(); )
      W("uponSanitizeShadowNode", X, null), !y(X) && (X.content instanceof c && he(X.content), se(X));
    W("afterSanitizeShadowDOM", M, null);
  };
  return r.sanitize = function(he) {
    let M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, X = null, ie = null, Be = null, A = null;
    if (lr = !he, lr && (he = "<!-->"), typeof he != "string" && !d(he))
      if (typeof he.toString == "function") {
        if (he = he.toString(), typeof he != "string")
          throw Hr("dirty is not a string, aborting");
      } else
        throw Hr("toString is not a function");
    if (!r.isSupported)
      return he;
    if (V0 || zr(M), r.removed = [], typeof he == "string" && (y0 = !1), y0) {
      if (he.nodeName) {
        const Zt = $e(he.nodeName);
        if (!xe[Zt] || J[Zt])
          throw Hr("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (he instanceof g)
      X = Y0("<!---->"), ie = X.ownerDocument.importNode(he, !0), ie.nodeType === 1 && ie.nodeName === "BODY" || ie.nodeName === "HTML" ? X = ie : X.appendChild(ie);
    else {
      if (!g0 && !Et && !yt && // eslint-disable-next-line unicorn/prefer-includes
      he.indexOf("<") === -1)
        return C && W0 ? C.createHTML(he) : he;
      if (X = Y0(he), !X)
        return g0 ? null : W0 ? L : "";
    }
    X && s0 && o0(X.firstChild);
    const We = Ve(y0 ? he : X);
    for (; Be = We.nextNode(); )
      y(Be) || (Be.content instanceof c && lt(Be.content), se(Be));
    if (y0)
      return he;
    if (g0) {
      if (rr)
        for (A = G.call(X.ownerDocument); X.firstChild; )
          A.appendChild(X.firstChild);
      else
        A = X;
      return (I.shadowroot || I.shadowrootmode) && (A = Y.call(i, A, !0)), A;
    }
    let E = yt ? X.outerHTML : X.innerHTML;
    return yt && xe["!doctype"] && X.ownerDocument && X.ownerDocument.doctype && X.ownerDocument.doctype.name && zt(bo, X.ownerDocument.doctype.name) && (E = "<!DOCTYPE " + X.ownerDocument.doctype.name + `>
` + E), Et && _n([ge, Fe, Se], (Zt) => {
      E = Pr(E, Zt, " ");
    }), C && W0 ? C.createHTML(E) : E;
  }, r.setConfig = function() {
    let he = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    zr(he), V0 = !0;
  }, r.clearConfig = function() {
    Dt = null, V0 = !1;
  }, r.isValidAttribute = function(he, M, X) {
    Dt || zr({});
    const ie = $e(he), Be = $e(M);
    return T(ie, Be, X);
  }, r.addHook = function(he, M) {
    typeof M == "function" && (ue[he] = ue[he] || [], qr(ue[he], M));
  }, r.removeHook = function(he) {
    if (ue[he])
      return Vl(ue[he]);
  }, r.removeHooks = function(he) {
    ue[he] && (ue[he] = []);
  }, r.removeAllHooks = function() {
    ue = {};
  }, r;
}
var Kl = yo(), Rn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function wo(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
}
var ko = { exports: {} }, Va = { exports: {} }, Ql;
function R4() {
  return Ql || (Ql = 1, function(s, r) {
    (function(i, o) {
      s.exports = o();
    })(typeof self < "u" ? self : Rn, function() {
      return (
        /******/
        function() {
          var a = {};
          (function() {
            a.d = function(f, e) {
              for (var t in e)
                a.o(e, t) && !a.o(f, t) && Object.defineProperty(f, t, { enumerable: !0, get: e[t] });
            };
          })(), function() {
            a.o = function(f, e) {
              return Object.prototype.hasOwnProperty.call(f, e);
            };
          }();
          var i = {};
          a.d(i, {
            default: function() {
              return (
                /* binding */
                su
              );
            }
          });
          var o = (
            // Error start position based on passed-in Token or ParseNode.
            // Length of affected text based on passed-in Token or ParseNode.
            // The underlying error message without any context added.
            function f(e, t) {
              this.name = void 0, this.position = void 0, this.length = void 0, this.rawMessage = void 0;
              var n = "KaTeX parse error: " + e, l, u, m = t && t.loc;
              if (m && m.start <= m.end) {
                var b = m.lexer.input;
                l = m.start, u = m.end, l === b.length ? n += " at end of input: " : n += " at position " + (l + 1) + ": ";
                var k = b.slice(l, u).replace(/[^]/g, "$&̲"), x;
                l > 15 ? x = "…" + b.slice(l - 15, l) : x = b.slice(0, l);
                var z;
                u + 15 < b.length ? z = b.slice(u, u + 15) + "…" : z = b.slice(u), n += x + k + z;
              }
              var N = new Error(n);
              return N.name = "ParseError", N.__proto__ = f.prototype, N.position = l, l != null && u != null && (N.length = u - l), N.rawMessage = e, N;
            }
          );
          o.prototype.__proto__ = Error.prototype;
          var c = o, p = function(e, t) {
            return e.indexOf(t) !== -1;
          }, g = function(e, t) {
            return e === void 0 ? t : e;
          }, v = /([A-Z])/g, w = function(e) {
            return e.replace(v, "-$1").toLowerCase();
          }, S = {
            "&": "&amp;",
            ">": "&gt;",
            "<": "&lt;",
            '"': "&quot;",
            "'": "&#x27;"
          }, D = /[&><"']/g;
          function q(f) {
            return String(f).replace(D, function(e) {
              return S[e];
            });
          }
          var Z = function f(e) {
            return e.type === "ordgroup" || e.type === "color" ? e.body.length === 1 ? f(e.body[0]) : e : e.type === "font" ? f(e.body) : e;
          }, j = function(e) {
            var t = Z(e);
            return t.type === "mathord" || t.type === "textord" || t.type === "atom";
          }, re = function(e) {
            if (!e)
              throw new Error("Expected non-null, but got " + String(e));
            return e;
          }, $ = function(e) {
            var t = /^\s*([^\\/#]*?)(?::|&#0*58|&#x0*3a)/i.exec(e);
            return t != null ? t[1] : "_relative";
          }, U = {
            contains: p,
            deflt: g,
            escape: q,
            hyphenate: w,
            getBaseElem: Z,
            isCharacterBox: j,
            protocolFromUrl: $
          }, F = {
            displayMode: {
              type: "boolean",
              description: "Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",
              cli: "-d, --display-mode"
            },
            output: {
              type: {
                enum: ["htmlAndMathml", "html", "mathml"]
              },
              description: "Determines the markup language of the output.",
              cli: "-F, --format <type>"
            },
            leqno: {
              type: "boolean",
              description: "Render display math in leqno style (left-justified tags)."
            },
            fleqn: {
              type: "boolean",
              description: "Render display math flush left."
            },
            throwOnError: {
              type: "boolean",
              default: !0,
              cli: "-t, --no-throw-on-error",
              cliDescription: "Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error."
            },
            errorColor: {
              type: "string",
              default: "#cc0000",
              cli: "-c, --error-color <color>",
              cliDescription: "A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",
              cliProcessor: function(e) {
                return "#" + e;
              }
            },
            macros: {
              type: "object",
              cli: "-m, --macro <def>",
              cliDescription: "Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",
              cliDefault: [],
              cliProcessor: function(e, t) {
                return t.push(e), t;
              }
            },
            minRuleThickness: {
              type: "number",
              description: "Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",
              processor: function(e) {
                return Math.max(0, e);
              },
              cli: "--min-rule-thickness <size>",
              cliProcessor: parseFloat
            },
            colorIsTextColor: {
              type: "boolean",
              description: "Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",
              cli: "-b, --color-is-text-color"
            },
            strict: {
              type: [{
                enum: ["warn", "ignore", "error"]
              }, "boolean", "function"],
              description: "Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",
              cli: "-S, --strict",
              cliDefault: !1
            },
            trust: {
              type: ["boolean", "function"],
              description: "Trust the input, enabling all HTML features such as \\url.",
              cli: "-T, --trust"
            },
            maxSize: {
              type: "number",
              default: 1 / 0,
              description: "If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",
              processor: function(e) {
                return Math.max(0, e);
              },
              cli: "-s, --max-size <n>",
              cliProcessor: parseInt
            },
            maxExpand: {
              type: "number",
              default: 1e3,
              description: "Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",
              processor: function(e) {
                return Math.max(0, e);
              },
              cli: "-e, --max-expand <n>",
              cliProcessor: function(e) {
                return e === "Infinity" ? 1 / 0 : parseInt(e);
              }
            },
            globalGroup: {
              type: "boolean",
              cli: !1
            }
          };
          function C(f) {
            if (f.default)
              return f.default;
            var e = f.type, t = Array.isArray(e) ? e[0] : e;
            if (typeof t != "string")
              return t.enum[0];
            switch (t) {
              case "boolean":
                return !1;
              case "string":
                return "";
              case "number":
                return 0;
              case "object":
                return {};
            }
          }
          var L = /* @__PURE__ */ function() {
            function f(t) {
              this.displayMode = void 0, this.output = void 0, this.leqno = void 0, this.fleqn = void 0, this.throwOnError = void 0, this.errorColor = void 0, this.macros = void 0, this.minRuleThickness = void 0, this.colorIsTextColor = void 0, this.strict = void 0, this.trust = void 0, this.maxSize = void 0, this.maxExpand = void 0, this.globalGroup = void 0, t = t || {};
              for (var n in F)
                if (F.hasOwnProperty(n)) {
                  var l = F[n];
                  this[n] = t[n] !== void 0 ? l.processor ? l.processor(t[n]) : t[n] : C(l);
                }
            }
            var e = f.prototype;
            return e.reportNonstrict = function(n, l, u) {
              var m = this.strict;
              if (typeof m == "function" && (m = m(n, l, u)), !(!m || m === "ignore")) {
                if (m === !0 || m === "error")
                  throw new c("LaTeX-incompatible input and strict mode is set to 'error': " + (l + " [" + n + "]"), u);
                m === "warn" ? typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (l + " [" + n + "]")) : typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + m + "': " + l + " [" + n + "]"));
              }
            }, e.useStrictBehavior = function(n, l, u) {
              var m = this.strict;
              if (typeof m == "function")
                try {
                  m = m(n, l, u);
                } catch {
                  m = "error";
                }
              return !m || m === "ignore" ? !1 : m === !0 || m === "error" ? !0 : m === "warn" ? (typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (l + " [" + n + "]")), !1) : (typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + m + "': " + l + " [" + n + "]")), !1);
            }, e.isTrusted = function(n) {
              n.url && !n.protocol && (n.protocol = U.protocolFromUrl(n.url));
              var l = typeof this.trust == "function" ? this.trust(n) : this.trust;
              return !!l;
            }, f;
          }(), B = /* @__PURE__ */ function() {
            function f(t, n, l) {
              this.id = void 0, this.size = void 0, this.cramped = void 0, this.id = t, this.size = n, this.cramped = l;
            }
            var e = f.prototype;
            return e.sup = function() {
              return Le[rt[this.id]];
            }, e.sub = function() {
              return Le[Ct[this.id]];
            }, e.fracNum = function() {
              return Le[xt[this.id]];
            }, e.fracDen = function() {
              return Le[Ie[this.id]];
            }, e.cramp = function() {
              return Le[xe[this.id]];
            }, e.text = function() {
              return Le[at[this.id]];
            }, e.isTight = function() {
              return this.size >= 2;
            }, f;
          }(), O = 0, G = 1, Q = 2, Y = 3, ue = 4, ge = 5, Fe = 6, Se = 7, Le = [new B(O, 0, !1), new B(G, 0, !0), new B(Q, 1, !1), new B(Y, 1, !0), new B(ue, 2, !1), new B(ge, 2, !0), new B(Fe, 3, !1), new B(Se, 3, !0)], rt = [ue, ge, ue, ge, Fe, Se, Fe, Se], Ct = [ge, ge, ge, ge, Se, Se, Se, Se], xt = [Q, Y, ue, ge, Fe, Se, Fe, Se], Ie = [Y, Y, ge, ge, Se, Se, Se, Se], xe = [G, G, Y, Y, ge, ge, Se, Se], at = [O, G, Q, Y, Q, Y, Q, Y], I = {
            DISPLAY: Le[O],
            TEXT: Le[Q],
            SCRIPT: Le[ue],
            SCRIPTSCRIPT: Le[Fe]
          }, Oe = [{
            // Latin characters beyond the Latin-1 characters we have metrics for.
            // Needed for Czech, Hungarian and Turkish text, for example.
            name: "latin",
            blocks: [
              [256, 591],
              // Latin Extended-A and Latin Extended-B
              [768, 879]
              // Combining Diacritical marks
            ]
          }, {
            // The Cyrillic script used by Russian and related languages.
            // A Cyrillic subset used to be supported as explicitly defined
            // symbols in symbols.js
            name: "cyrillic",
            blocks: [[1024, 1279]]
          }, {
            // Armenian
            name: "armenian",
            blocks: [[1328, 1423]]
          }, {
            // The Brahmic scripts of South and Southeast Asia
            // Devanagari (0900–097F)
            // Bengali (0980–09FF)
            // Gurmukhi (0A00–0A7F)
            // Gujarati (0A80–0AFF)
            // Oriya (0B00–0B7F)
            // Tamil (0B80–0BFF)
            // Telugu (0C00–0C7F)
            // Kannada (0C80–0CFF)
            // Malayalam (0D00–0D7F)
            // Sinhala (0D80–0DFF)
            // Thai (0E00–0E7F)
            // Lao (0E80–0EFF)
            // Tibetan (0F00–0FFF)
            // Myanmar (1000–109F)
            name: "brahmic",
            blocks: [[2304, 4255]]
          }, {
            name: "georgian",
            blocks: [[4256, 4351]]
          }, {
            // Chinese and Japanese.
            // The "k" in cjk is for Korean, but we've separated Korean out
            name: "cjk",
            blocks: [
              [12288, 12543],
              // CJK symbols and punctuation, Hiragana, Katakana
              [19968, 40879],
              // CJK ideograms
              [65280, 65376]
              // Fullwidth punctuation
              // TODO: add halfwidth Katakana and Romanji glyphs
            ]
          }, {
            // Korean
            name: "hangul",
            blocks: [[44032, 55215]]
          }];
          function ne(f) {
            for (var e = 0; e < Oe.length; e++)
              for (var t = Oe[e], n = 0; n < t.blocks.length; n++) {
                var l = t.blocks[n];
                if (f >= l[0] && f <= l[1])
                  return t.name;
              }
            return null;
          }
          var J = [];
          Oe.forEach(function(f) {
            return f.blocks.forEach(function(e) {
              return J.push.apply(J, e);
            });
          });
          function Xe(f) {
            for (var e = 0; e < J.length; e += 2)
              if (f >= J[e] && f <= J[e + 1])
                return !0;
            return !1;
          }
          var Ge = 80, bt = function(e, t) {
            return "M95," + (622 + e + t) + `
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l` + e / 2.075 + " -" + e + `
c5.3,-9.3,12,-14,20,-14
H400000v` + (40 + e) + `H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M` + (834 + e) + " " + t + "h400000v" + (40 + e) + "h-400000z";
          }, p0 = function(e, t) {
            return "M263," + (601 + e + t) + `c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l` + e / 2.084 + " -" + e + `
c4.7,-7.3,11,-11,19,-11
H40000v` + (40 + e) + `H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M` + (1001 + e) + " " + t + "h400000v" + (40 + e) + "h-400000z";
          }, G0 = function(e, t) {
            return "M983 " + (10 + e + t) + `
l` + e / 3.13 + " -" + e + `
c4,-6.7,10,-10,18,-10 H400000v` + (40 + e) + `
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M` + (1001 + e) + " " + t + "h400000v" + (40 + e) + "h-400000z";
          }, Et = function(e, t) {
            return "M424," + (2398 + e + t) + `
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l` + e / 4.223 + " -" + e + `c4,-6.7,10,-10,18,-10 H400000
v` + (40 + e) + `H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M` + (1001 + e) + " " + t + `
h400000v` + (40 + e) + "h-400000z";
          }, yt = function(e, t) {
            return "M473," + (2713 + e + t) + `
c339.3,-1799.3,509.3,-2700,510,-2702 l` + e / 5.298 + " -" + e + `
c3.3,-7.3,9.3,-11,18,-11 H400000v` + (40 + e) + `H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM` + (1001 + e) + " " + t + "h400000v" + (40 + e) + "H1017.7z";
          }, V0 = function(e) {
            var t = e / 2;
            return "M400000 " + e + " H0 L" + t + " 0 l65 45 L145 " + (e - 80) + " H400000z";
          }, s0 = function(e, t, n) {
            var l = n - 54 - t - e;
            return "M702 " + (e + t) + "H400000" + (40 + e) + `
H742v` + l + `l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 ` + t + "H400000v" + (40 + e) + "H742z";
          }, g0 = function(e, t, n) {
            t = 1e3 * t;
            var l = "";
            switch (e) {
              case "sqrtMain":
                l = bt(t, Ge);
                break;
              case "sqrtSize1":
                l = p0(t, Ge);
                break;
              case "sqrtSize2":
                l = G0(t, Ge);
                break;
              case "sqrtSize3":
                l = Et(t, Ge);
                break;
              case "sqrtSize4":
                l = yt(t, Ge);
                break;
              case "sqrtTall":
                l = s0(t, Ge, n);
            }
            return l;
          }, rr = function(e, t) {
            switch (e) {
              case "⎜":
                return "M291 0 H417 V" + t + " H291z M291 0 H417 V" + t + " H291z";
              case "∣":
                return "M145 0 H188 V" + t + " H145z M145 0 H188 V" + t + " H145z";
              case "∥":
                return "M145 0 H188 V" + t + " H145z M145 0 H188 V" + t + " H145z" + ("M367 0 H410 V" + t + " H367z M367 0 H410 V" + t + " H367z");
              case "⎟":
                return "M457 0 H583 V" + t + " H457z M457 0 H583 V" + t + " H457z";
              case "⎢":
                return "M319 0 H403 V" + t + " H319z M319 0 H403 V" + t + " H319z";
              case "⎥":
                return "M263 0 H347 V" + t + " H263z M263 0 H347 V" + t + " H263z";
              case "⎪":
                return "M384 0 H504 V" + t + " H384z M384 0 H504 V" + t + " H384z";
              case "⏐":
                return "M312 0 H355 V" + t + " H312z M312 0 H355 V" + t + " H312z";
              case "‖":
                return "M257 0 H300 V" + t + " H257z M257 0 H300 V" + t + " H257z" + ("M478 0 H521 V" + t + " H478z M478 0 H521 V" + t + " H478z");
              default:
                return "";
            }
          }, W0 = {
            // The doubleleftarrow geometry is from glyph U+21D0 in the font KaTeX Main
            doubleleftarrow: `M262 157
l10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3
 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28
 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5
c2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5
 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87
-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7
-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z
m8 0v40h399730v-40zm0 194v40h399730v-40z`,
            // doublerightarrow is from glyph U+21D2 in font KaTeX Main
            doublerightarrow: `M399738 392l
-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5
 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88
-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68
-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18
-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782
c-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3
-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z`,
            // leftarrow is from glyph U+2190 in font KaTeX Main
            leftarrow: `M400000 241H110l3-3c68.7-52.7 113.7-120
 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8
-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247
c-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208
 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3
 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202
 l-3-3h399890zM100 241v40h399900v-40z`,
            // overbrace is from glyphs U+23A9/23A8/23A7 in font KaTeX_Size4-Regular
            leftbrace: `M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117
-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7
 5-6 9-10 13-.7 1-7.3 1-20 1H6z`,
            leftbraceunder: `M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13
 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688
 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7
-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z`,
            // overgroup is from the MnSymbol package (public domain)
            leftgroup: `M400000 80
H435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0
 435 0h399565z`,
            leftgroupunder: `M400000 262
H435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219
 435 219h399565z`,
            // Harpoons are from glyph U+21BD in font KaTeX Main
            leftharpoon: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3
-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5
-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7
-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z`,
            leftharpoonplus: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5
 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3
-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7
-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z
m0 0v40h400000v-40z`,
            leftharpoondown: `M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333
 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5
 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667
-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z`,
            leftharpoondownplus: `M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12
 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7
-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0
v40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z`,
            // hook is from glyph U+21A9 in font KaTeX Main
            lefthook: `M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5
-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3
-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21
 71.5 23h399859zM103 281v-40h399897v40z`,
            leftlinesegment: `M40 281 V428 H0 V94 H40 V241 H400000 v40z
M40 281 V428 H0 V94 H40 V241 H400000 v40z`,
            leftmapsto: `M40 281 V448H0V74H40V241H400000v40z
M40 281 V448H0V74H40V241H400000v40z`,
            // tofrom is from glyph U+21C4 in font KaTeX AMS Regular
            leftToFrom: `M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23
-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8
c28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3
 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z`,
            longequal: `M0 50 h400000 v40H0z m0 194h40000v40H0z
M0 50 h400000 v40H0z m0 194h40000v40H0z`,
            midbrace: `M200428 334
c-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14
-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7
 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11
 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z`,
            midbraceunder: `M199572 214
c100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14
 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3
 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0
-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z`,
            oiintSize1: `M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6
-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z
m368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8
60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z`,
            oiintSize2: `M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8
-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z
m502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2
c0 110 84 276 504 276s502.4-166 502.4-276z`,
            oiiintSize1: `M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6
-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z
m525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0
85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z`,
            oiiintSize2: `M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8
-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z
m770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1
c0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z`,
            rightarrow: `M0 241v40h399891c-47.3 35.3-84 78-110 128
-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20
 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7
 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85
-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
 151.7 139 205zm0 0v40h399900v-40z`,
            rightbrace: `M400000 542l
-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5
s-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1
c124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z`,
            rightbraceunder: `M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3
 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237
-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z`,
            rightgroup: `M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0
 3-1 3-3v-38c-76-158-257-219-435-219H0z`,
            rightgroupunder: `M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18
 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z`,
            rightharpoon: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3
-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2
-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58
 69.2 92 94.5zm0 0v40h399900v-40z`,
            rightharpoonplus: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11
-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7
 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z
m0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z`,
            rightharpoondown: `M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8
 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5
-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95
-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z`,
            rightharpoondownplus: `M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8
 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3
 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3
-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z
m0-194v40h400000v-40zm0 0v40h400000v-40z`,
            righthook: `M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3
 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0
-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21
 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z`,
            rightlinesegment: `M399960 241 V94 h40 V428 h-40 V281 H0 v-40z
M399960 241 V94 h40 V428 h-40 V281 H0 v-40z`,
            rightToFrom: `M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23
 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32
-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142
-167z M100 147v40h399900v-40zM0 341v40h399900v-40z`,
            // twoheadleftarrow is from glyph U+219E in font KaTeX AMS Regular
            twoheadleftarrow: `M0 167c68 40
 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69
-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3
-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19
-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101
 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z`,
            twoheadrightarrow: `M400000 167
c-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3
 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42
 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333
-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70
 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z`,
            // tilde1 is a modified version of a glyph from the MnSymbol package
            tilde1: `M200 55.538c-77 0-168 73.953-177 73.953-3 0-7
-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0
 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0
 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128
-68.267.847-113-73.952-191-73.952z`,
            // ditto tilde2, tilde3, & tilde4
            tilde2: `M344 55.266c-142 0-300.638 81.316-311.5 86.418
-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9
 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114
c1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751
 181.476 676 181.476c-149 0-189-126.21-332-126.21z`,
            tilde3: `M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457
-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0
 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697
 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696
 -338 0-409-156.573-744-156.573z`,
            tilde4: `M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345
-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409
 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9
 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409
 -175.236-744-175.236z`,
            // vec is from glyph U+20D7 in font KaTeX Main
            vec: `M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`,
            // widehat1 is a modified version of a glyph from the MnSymbol package
            widehat1: `M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22
c-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z`,
            // ditto widehat2, widehat3, & widehat4
            widehat2: `M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
            widehat3: `M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
            widehat4: `M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
            // widecheck paths are all inverted versions of widehat
            widecheck1: `M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,
-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z`,
            widecheck2: `M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
            widecheck3: `M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
            widecheck4: `M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
            // The next ten paths support reaction arrows from the mhchem package.
            // Arrows for \ce{<-->} are offset from xAxis by 0.22ex, per mhchem in LaTeX
            // baraboveleftarrow is mostly from glyph U+2190 in font KaTeX Main
            baraboveleftarrow: `M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202
c4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5
c-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130
s-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47
121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6
s2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11
c0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z
M100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z`,
            // rightarrowabovebar is mostly from glyph U+2192, KaTeX Main
            rightarrowabovebar: `M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32
-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0
13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39
-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5
-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z`,
            // The short left harpoon has 0.5em (i.e. 500 units) kern on the left end.
            // Ref from mhchem.sty: \rlap{\raisebox{-.22ex}{$\kern0.5em
            baraboveshortleftharpoon: `M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17
c2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21
c-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40
c-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z
M0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z`,
            rightharpoonaboveshortbar: `M0,241 l0,40c399126,0,399993,0,399993,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z`,
            shortbaraboveleftharpoon: `M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,
1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,
-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z
M93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z`,
            shortrightharpoonabovebar: `M53,241l0,40c398570,0,399437,0,399437,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`
          }, Wr = function(e, t) {
            switch (e) {
              case "lbrack":
                return "M403 1759 V84 H666 V0 H319 V1759 v" + t + ` v1759 h347 v-84
H403z M403 1759 V0 H319 V1759 v` + t + " v1759 h84z";
              case "rbrack":
                return "M347 1759 V0 H0 V84 H263 V1759 v" + t + ` v1759 H0 v84 H347z
M347 1759 V0 H263 V1759 v` + t + " v1759 h84z";
              case "vert":
                return "M145 15 v585 v" + t + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -t + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v` + t + " v585 h43z";
              case "doublevert":
                return "M145 15 v585 v" + t + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -t + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v` + t + ` v585 h43z
M367 15 v585 v` + t + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -t + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M410 15 H367 v585 v` + t + " v585 h43z";
              case "lfloor":
                return "M319 602 V0 H403 V602 v" + t + ` v1715 h263 v84 H319z
MM319 602 V0 H403 V602 v` + t + " v1715 H319z";
              case "rfloor":
                return "M319 602 V0 H403 V602 v" + t + ` v1799 H0 v-84 H319z
MM319 602 V0 H403 V602 v` + t + " v1715 H319z";
              case "lceil":
                return "M403 1759 V84 H666 V0 H319 V1759 v" + t + ` v602 h84z
M403 1759 V0 H319 V1759 v` + t + " v602 h84z";
              case "rceil":
                return "M347 1759 V0 H0 V84 H263 V1759 v" + t + ` v602 h84z
M347 1759 V0 h-84 V1759 v` + t + " v602 h84z";
              case "lparen":
                return `M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1
c-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,
-36,557 l0,` + (t + 84) + `c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,
949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9
c0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,
-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189
l0,-` + (t + 92) + `c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,
-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z`;
              case "rparen":
                return `M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,
63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5
c11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,` + (t + 9) + `
c-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664
c-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11
c0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17
c242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558
l0,-` + (t + 144) + `c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;
              default:
                throw new Error("Unknown stretchy delimiter.");
            }
          }, v0 = /* @__PURE__ */ function() {
            function f(t) {
              this.children = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.children = t, this.classes = [], this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = {};
            }
            var e = f.prototype;
            return e.hasClass = function(n) {
              return U.contains(this.classes, n);
            }, e.toNode = function() {
              for (var n = document.createDocumentFragment(), l = 0; l < this.children.length; l++)
                n.appendChild(this.children[l].toNode());
              return n;
            }, e.toMarkup = function() {
              for (var n = "", l = 0; l < this.children.length; l++)
                n += this.children[l].toMarkup();
              return n;
            }, e.toText = function() {
              var n = function(u) {
                return u.toText();
              };
              return this.children.map(n).join("");
            }, f;
          }(), Bt = {
            "AMS-Regular": {
              32: [0, 0, 0, 0, 0.25],
              65: [0, 0.68889, 0, 0, 0.72222],
              66: [0, 0.68889, 0, 0, 0.66667],
              67: [0, 0.68889, 0, 0, 0.72222],
              68: [0, 0.68889, 0, 0, 0.72222],
              69: [0, 0.68889, 0, 0, 0.66667],
              70: [0, 0.68889, 0, 0, 0.61111],
              71: [0, 0.68889, 0, 0, 0.77778],
              72: [0, 0.68889, 0, 0, 0.77778],
              73: [0, 0.68889, 0, 0, 0.38889],
              74: [0.16667, 0.68889, 0, 0, 0.5],
              75: [0, 0.68889, 0, 0, 0.77778],
              76: [0, 0.68889, 0, 0, 0.66667],
              77: [0, 0.68889, 0, 0, 0.94445],
              78: [0, 0.68889, 0, 0, 0.72222],
              79: [0.16667, 0.68889, 0, 0, 0.77778],
              80: [0, 0.68889, 0, 0, 0.61111],
              81: [0.16667, 0.68889, 0, 0, 0.77778],
              82: [0, 0.68889, 0, 0, 0.72222],
              83: [0, 0.68889, 0, 0, 0.55556],
              84: [0, 0.68889, 0, 0, 0.66667],
              85: [0, 0.68889, 0, 0, 0.72222],
              86: [0, 0.68889, 0, 0, 0.72222],
              87: [0, 0.68889, 0, 0, 1],
              88: [0, 0.68889, 0, 0, 0.72222],
              89: [0, 0.68889, 0, 0, 0.72222],
              90: [0, 0.68889, 0, 0, 0.66667],
              107: [0, 0.68889, 0, 0, 0.55556],
              160: [0, 0, 0, 0, 0.25],
              165: [0, 0.675, 0.025, 0, 0.75],
              174: [0.15559, 0.69224, 0, 0, 0.94666],
              240: [0, 0.68889, 0, 0, 0.55556],
              295: [0, 0.68889, 0, 0, 0.54028],
              710: [0, 0.825, 0, 0, 2.33334],
              732: [0, 0.9, 0, 0, 2.33334],
              770: [0, 0.825, 0, 0, 2.33334],
              771: [0, 0.9, 0, 0, 2.33334],
              989: [0.08167, 0.58167, 0, 0, 0.77778],
              1008: [0, 0.43056, 0.04028, 0, 0.66667],
              8245: [0, 0.54986, 0, 0, 0.275],
              8463: [0, 0.68889, 0, 0, 0.54028],
              8487: [0, 0.68889, 0, 0, 0.72222],
              8498: [0, 0.68889, 0, 0, 0.55556],
              8502: [0, 0.68889, 0, 0, 0.66667],
              8503: [0, 0.68889, 0, 0, 0.44445],
              8504: [0, 0.68889, 0, 0, 0.66667],
              8513: [0, 0.68889, 0, 0, 0.63889],
              8592: [-0.03598, 0.46402, 0, 0, 0.5],
              8594: [-0.03598, 0.46402, 0, 0, 0.5],
              8602: [-0.13313, 0.36687, 0, 0, 1],
              8603: [-0.13313, 0.36687, 0, 0, 1],
              8606: [0.01354, 0.52239, 0, 0, 1],
              8608: [0.01354, 0.52239, 0, 0, 1],
              8610: [0.01354, 0.52239, 0, 0, 1.11111],
              8611: [0.01354, 0.52239, 0, 0, 1.11111],
              8619: [0, 0.54986, 0, 0, 1],
              8620: [0, 0.54986, 0, 0, 1],
              8621: [-0.13313, 0.37788, 0, 0, 1.38889],
              8622: [-0.13313, 0.36687, 0, 0, 1],
              8624: [0, 0.69224, 0, 0, 0.5],
              8625: [0, 0.69224, 0, 0, 0.5],
              8630: [0, 0.43056, 0, 0, 1],
              8631: [0, 0.43056, 0, 0, 1],
              8634: [0.08198, 0.58198, 0, 0, 0.77778],
              8635: [0.08198, 0.58198, 0, 0, 0.77778],
              8638: [0.19444, 0.69224, 0, 0, 0.41667],
              8639: [0.19444, 0.69224, 0, 0, 0.41667],
              8642: [0.19444, 0.69224, 0, 0, 0.41667],
              8643: [0.19444, 0.69224, 0, 0, 0.41667],
              8644: [0.1808, 0.675, 0, 0, 1],
              8646: [0.1808, 0.675, 0, 0, 1],
              8647: [0.1808, 0.675, 0, 0, 1],
              8648: [0.19444, 0.69224, 0, 0, 0.83334],
              8649: [0.1808, 0.675, 0, 0, 1],
              8650: [0.19444, 0.69224, 0, 0, 0.83334],
              8651: [0.01354, 0.52239, 0, 0, 1],
              8652: [0.01354, 0.52239, 0, 0, 1],
              8653: [-0.13313, 0.36687, 0, 0, 1],
              8654: [-0.13313, 0.36687, 0, 0, 1],
              8655: [-0.13313, 0.36687, 0, 0, 1],
              8666: [0.13667, 0.63667, 0, 0, 1],
              8667: [0.13667, 0.63667, 0, 0, 1],
              8669: [-0.13313, 0.37788, 0, 0, 1],
              8672: [-0.064, 0.437, 0, 0, 1.334],
              8674: [-0.064, 0.437, 0, 0, 1.334],
              8705: [0, 0.825, 0, 0, 0.5],
              8708: [0, 0.68889, 0, 0, 0.55556],
              8709: [0.08167, 0.58167, 0, 0, 0.77778],
              8717: [0, 0.43056, 0, 0, 0.42917],
              8722: [-0.03598, 0.46402, 0, 0, 0.5],
              8724: [0.08198, 0.69224, 0, 0, 0.77778],
              8726: [0.08167, 0.58167, 0, 0, 0.77778],
              8733: [0, 0.69224, 0, 0, 0.77778],
              8736: [0, 0.69224, 0, 0, 0.72222],
              8737: [0, 0.69224, 0, 0, 0.72222],
              8738: [0.03517, 0.52239, 0, 0, 0.72222],
              8739: [0.08167, 0.58167, 0, 0, 0.22222],
              8740: [0.25142, 0.74111, 0, 0, 0.27778],
              8741: [0.08167, 0.58167, 0, 0, 0.38889],
              8742: [0.25142, 0.74111, 0, 0, 0.5],
              8756: [0, 0.69224, 0, 0, 0.66667],
              8757: [0, 0.69224, 0, 0, 0.66667],
              8764: [-0.13313, 0.36687, 0, 0, 0.77778],
              8765: [-0.13313, 0.37788, 0, 0, 0.77778],
              8769: [-0.13313, 0.36687, 0, 0, 0.77778],
              8770: [-0.03625, 0.46375, 0, 0, 0.77778],
              8774: [0.30274, 0.79383, 0, 0, 0.77778],
              8776: [-0.01688, 0.48312, 0, 0, 0.77778],
              8778: [0.08167, 0.58167, 0, 0, 0.77778],
              8782: [0.06062, 0.54986, 0, 0, 0.77778],
              8783: [0.06062, 0.54986, 0, 0, 0.77778],
              8785: [0.08198, 0.58198, 0, 0, 0.77778],
              8786: [0.08198, 0.58198, 0, 0, 0.77778],
              8787: [0.08198, 0.58198, 0, 0, 0.77778],
              8790: [0, 0.69224, 0, 0, 0.77778],
              8791: [0.22958, 0.72958, 0, 0, 0.77778],
              8796: [0.08198, 0.91667, 0, 0, 0.77778],
              8806: [0.25583, 0.75583, 0, 0, 0.77778],
              8807: [0.25583, 0.75583, 0, 0, 0.77778],
              8808: [0.25142, 0.75726, 0, 0, 0.77778],
              8809: [0.25142, 0.75726, 0, 0, 0.77778],
              8812: [0.25583, 0.75583, 0, 0, 0.5],
              8814: [0.20576, 0.70576, 0, 0, 0.77778],
              8815: [0.20576, 0.70576, 0, 0, 0.77778],
              8816: [0.30274, 0.79383, 0, 0, 0.77778],
              8817: [0.30274, 0.79383, 0, 0, 0.77778],
              8818: [0.22958, 0.72958, 0, 0, 0.77778],
              8819: [0.22958, 0.72958, 0, 0, 0.77778],
              8822: [0.1808, 0.675, 0, 0, 0.77778],
              8823: [0.1808, 0.675, 0, 0, 0.77778],
              8828: [0.13667, 0.63667, 0, 0, 0.77778],
              8829: [0.13667, 0.63667, 0, 0, 0.77778],
              8830: [0.22958, 0.72958, 0, 0, 0.77778],
              8831: [0.22958, 0.72958, 0, 0, 0.77778],
              8832: [0.20576, 0.70576, 0, 0, 0.77778],
              8833: [0.20576, 0.70576, 0, 0, 0.77778],
              8840: [0.30274, 0.79383, 0, 0, 0.77778],
              8841: [0.30274, 0.79383, 0, 0, 0.77778],
              8842: [0.13597, 0.63597, 0, 0, 0.77778],
              8843: [0.13597, 0.63597, 0, 0, 0.77778],
              8847: [0.03517, 0.54986, 0, 0, 0.77778],
              8848: [0.03517, 0.54986, 0, 0, 0.77778],
              8858: [0.08198, 0.58198, 0, 0, 0.77778],
              8859: [0.08198, 0.58198, 0, 0, 0.77778],
              8861: [0.08198, 0.58198, 0, 0, 0.77778],
              8862: [0, 0.675, 0, 0, 0.77778],
              8863: [0, 0.675, 0, 0, 0.77778],
              8864: [0, 0.675, 0, 0, 0.77778],
              8865: [0, 0.675, 0, 0, 0.77778],
              8872: [0, 0.69224, 0, 0, 0.61111],
              8873: [0, 0.69224, 0, 0, 0.72222],
              8874: [0, 0.69224, 0, 0, 0.88889],
              8876: [0, 0.68889, 0, 0, 0.61111],
              8877: [0, 0.68889, 0, 0, 0.61111],
              8878: [0, 0.68889, 0, 0, 0.72222],
              8879: [0, 0.68889, 0, 0, 0.72222],
              8882: [0.03517, 0.54986, 0, 0, 0.77778],
              8883: [0.03517, 0.54986, 0, 0, 0.77778],
              8884: [0.13667, 0.63667, 0, 0, 0.77778],
              8885: [0.13667, 0.63667, 0, 0, 0.77778],
              8888: [0, 0.54986, 0, 0, 1.11111],
              8890: [0.19444, 0.43056, 0, 0, 0.55556],
              8891: [0.19444, 0.69224, 0, 0, 0.61111],
              8892: [0.19444, 0.69224, 0, 0, 0.61111],
              8901: [0, 0.54986, 0, 0, 0.27778],
              8903: [0.08167, 0.58167, 0, 0, 0.77778],
              8905: [0.08167, 0.58167, 0, 0, 0.77778],
              8906: [0.08167, 0.58167, 0, 0, 0.77778],
              8907: [0, 0.69224, 0, 0, 0.77778],
              8908: [0, 0.69224, 0, 0, 0.77778],
              8909: [-0.03598, 0.46402, 0, 0, 0.77778],
              8910: [0, 0.54986, 0, 0, 0.76042],
              8911: [0, 0.54986, 0, 0, 0.76042],
              8912: [0.03517, 0.54986, 0, 0, 0.77778],
              8913: [0.03517, 0.54986, 0, 0, 0.77778],
              8914: [0, 0.54986, 0, 0, 0.66667],
              8915: [0, 0.54986, 0, 0, 0.66667],
              8916: [0, 0.69224, 0, 0, 0.66667],
              8918: [0.0391, 0.5391, 0, 0, 0.77778],
              8919: [0.0391, 0.5391, 0, 0, 0.77778],
              8920: [0.03517, 0.54986, 0, 0, 1.33334],
              8921: [0.03517, 0.54986, 0, 0, 1.33334],
              8922: [0.38569, 0.88569, 0, 0, 0.77778],
              8923: [0.38569, 0.88569, 0, 0, 0.77778],
              8926: [0.13667, 0.63667, 0, 0, 0.77778],
              8927: [0.13667, 0.63667, 0, 0, 0.77778],
              8928: [0.30274, 0.79383, 0, 0, 0.77778],
              8929: [0.30274, 0.79383, 0, 0, 0.77778],
              8934: [0.23222, 0.74111, 0, 0, 0.77778],
              8935: [0.23222, 0.74111, 0, 0, 0.77778],
              8936: [0.23222, 0.74111, 0, 0, 0.77778],
              8937: [0.23222, 0.74111, 0, 0, 0.77778],
              8938: [0.20576, 0.70576, 0, 0, 0.77778],
              8939: [0.20576, 0.70576, 0, 0, 0.77778],
              8940: [0.30274, 0.79383, 0, 0, 0.77778],
              8941: [0.30274, 0.79383, 0, 0, 0.77778],
              8994: [0.19444, 0.69224, 0, 0, 0.77778],
              8995: [0.19444, 0.69224, 0, 0, 0.77778],
              9416: [0.15559, 0.69224, 0, 0, 0.90222],
              9484: [0, 0.69224, 0, 0, 0.5],
              9488: [0, 0.69224, 0, 0, 0.5],
              9492: [0, 0.37788, 0, 0, 0.5],
              9496: [0, 0.37788, 0, 0, 0.5],
              9585: [0.19444, 0.68889, 0, 0, 0.88889],
              9586: [0.19444, 0.74111, 0, 0, 0.88889],
              9632: [0, 0.675, 0, 0, 0.77778],
              9633: [0, 0.675, 0, 0, 0.77778],
              9650: [0, 0.54986, 0, 0, 0.72222],
              9651: [0, 0.54986, 0, 0, 0.72222],
              9654: [0.03517, 0.54986, 0, 0, 0.77778],
              9660: [0, 0.54986, 0, 0, 0.72222],
              9661: [0, 0.54986, 0, 0, 0.72222],
              9664: [0.03517, 0.54986, 0, 0, 0.77778],
              9674: [0.11111, 0.69224, 0, 0, 0.66667],
              9733: [0.19444, 0.69224, 0, 0, 0.94445],
              10003: [0, 0.69224, 0, 0, 0.83334],
              10016: [0, 0.69224, 0, 0, 0.83334],
              10731: [0.11111, 0.69224, 0, 0, 0.66667],
              10846: [0.19444, 0.75583, 0, 0, 0.61111],
              10877: [0.13667, 0.63667, 0, 0, 0.77778],
              10878: [0.13667, 0.63667, 0, 0, 0.77778],
              10885: [0.25583, 0.75583, 0, 0, 0.77778],
              10886: [0.25583, 0.75583, 0, 0, 0.77778],
              10887: [0.13597, 0.63597, 0, 0, 0.77778],
              10888: [0.13597, 0.63597, 0, 0, 0.77778],
              10889: [0.26167, 0.75726, 0, 0, 0.77778],
              10890: [0.26167, 0.75726, 0, 0, 0.77778],
              10891: [0.48256, 0.98256, 0, 0, 0.77778],
              10892: [0.48256, 0.98256, 0, 0, 0.77778],
              10901: [0.13667, 0.63667, 0, 0, 0.77778],
              10902: [0.13667, 0.63667, 0, 0, 0.77778],
              10933: [0.25142, 0.75726, 0, 0, 0.77778],
              10934: [0.25142, 0.75726, 0, 0, 0.77778],
              10935: [0.26167, 0.75726, 0, 0, 0.77778],
              10936: [0.26167, 0.75726, 0, 0, 0.77778],
              10937: [0.26167, 0.75726, 0, 0, 0.77778],
              10938: [0.26167, 0.75726, 0, 0, 0.77778],
              10949: [0.25583, 0.75583, 0, 0, 0.77778],
              10950: [0.25583, 0.75583, 0, 0, 0.77778],
              10955: [0.28481, 0.79383, 0, 0, 0.77778],
              10956: [0.28481, 0.79383, 0, 0, 0.77778],
              57350: [0.08167, 0.58167, 0, 0, 0.22222],
              57351: [0.08167, 0.58167, 0, 0, 0.38889],
              57352: [0.08167, 0.58167, 0, 0, 0.77778],
              57353: [0, 0.43056, 0.04028, 0, 0.66667],
              57356: [0.25142, 0.75726, 0, 0, 0.77778],
              57357: [0.25142, 0.75726, 0, 0, 0.77778],
              57358: [0.41951, 0.91951, 0, 0, 0.77778],
              57359: [0.30274, 0.79383, 0, 0, 0.77778],
              57360: [0.30274, 0.79383, 0, 0, 0.77778],
              57361: [0.41951, 0.91951, 0, 0, 0.77778],
              57366: [0.25142, 0.75726, 0, 0, 0.77778],
              57367: [0.25142, 0.75726, 0, 0, 0.77778],
              57368: [0.25142, 0.75726, 0, 0, 0.77778],
              57369: [0.25142, 0.75726, 0, 0, 0.77778],
              57370: [0.13597, 0.63597, 0, 0, 0.77778],
              57371: [0.13597, 0.63597, 0, 0, 0.77778]
            },
            "Caligraphic-Regular": {
              32: [0, 0, 0, 0, 0.25],
              65: [0, 0.68333, 0, 0.19445, 0.79847],
              66: [0, 0.68333, 0.03041, 0.13889, 0.65681],
              67: [0, 0.68333, 0.05834, 0.13889, 0.52653],
              68: [0, 0.68333, 0.02778, 0.08334, 0.77139],
              69: [0, 0.68333, 0.08944, 0.11111, 0.52778],
              70: [0, 0.68333, 0.09931, 0.11111, 0.71875],
              71: [0.09722, 0.68333, 0.0593, 0.11111, 0.59487],
              72: [0, 0.68333, 965e-5, 0.11111, 0.84452],
              73: [0, 0.68333, 0.07382, 0, 0.54452],
              74: [0.09722, 0.68333, 0.18472, 0.16667, 0.67778],
              75: [0, 0.68333, 0.01445, 0.05556, 0.76195],
              76: [0, 0.68333, 0, 0.13889, 0.68972],
              77: [0, 0.68333, 0, 0.13889, 1.2009],
              78: [0, 0.68333, 0.14736, 0.08334, 0.82049],
              79: [0, 0.68333, 0.02778, 0.11111, 0.79611],
              80: [0, 0.68333, 0.08222, 0.08334, 0.69556],
              81: [0.09722, 0.68333, 0, 0.11111, 0.81667],
              82: [0, 0.68333, 0, 0.08334, 0.8475],
              83: [0, 0.68333, 0.075, 0.13889, 0.60556],
              84: [0, 0.68333, 0.25417, 0, 0.54464],
              85: [0, 0.68333, 0.09931, 0.08334, 0.62583],
              86: [0, 0.68333, 0.08222, 0, 0.61278],
              87: [0, 0.68333, 0.08222, 0.08334, 0.98778],
              88: [0, 0.68333, 0.14643, 0.13889, 0.7133],
              89: [0.09722, 0.68333, 0.08222, 0.08334, 0.66834],
              90: [0, 0.68333, 0.07944, 0.13889, 0.72473],
              160: [0, 0, 0, 0, 0.25]
            },
            "Fraktur-Regular": {
              32: [0, 0, 0, 0, 0.25],
              33: [0, 0.69141, 0, 0, 0.29574],
              34: [0, 0.69141, 0, 0, 0.21471],
              38: [0, 0.69141, 0, 0, 0.73786],
              39: [0, 0.69141, 0, 0, 0.21201],
              40: [0.24982, 0.74947, 0, 0, 0.38865],
              41: [0.24982, 0.74947, 0, 0, 0.38865],
              42: [0, 0.62119, 0, 0, 0.27764],
              43: [0.08319, 0.58283, 0, 0, 0.75623],
              44: [0, 0.10803, 0, 0, 0.27764],
              45: [0.08319, 0.58283, 0, 0, 0.75623],
              46: [0, 0.10803, 0, 0, 0.27764],
              47: [0.24982, 0.74947, 0, 0, 0.50181],
              48: [0, 0.47534, 0, 0, 0.50181],
              49: [0, 0.47534, 0, 0, 0.50181],
              50: [0, 0.47534, 0, 0, 0.50181],
              51: [0.18906, 0.47534, 0, 0, 0.50181],
              52: [0.18906, 0.47534, 0, 0, 0.50181],
              53: [0.18906, 0.47534, 0, 0, 0.50181],
              54: [0, 0.69141, 0, 0, 0.50181],
              55: [0.18906, 0.47534, 0, 0, 0.50181],
              56: [0, 0.69141, 0, 0, 0.50181],
              57: [0.18906, 0.47534, 0, 0, 0.50181],
              58: [0, 0.47534, 0, 0, 0.21606],
              59: [0.12604, 0.47534, 0, 0, 0.21606],
              61: [-0.13099, 0.36866, 0, 0, 0.75623],
              63: [0, 0.69141, 0, 0, 0.36245],
              65: [0, 0.69141, 0, 0, 0.7176],
              66: [0, 0.69141, 0, 0, 0.88397],
              67: [0, 0.69141, 0, 0, 0.61254],
              68: [0, 0.69141, 0, 0, 0.83158],
              69: [0, 0.69141, 0, 0, 0.66278],
              70: [0.12604, 0.69141, 0, 0, 0.61119],
              71: [0, 0.69141, 0, 0, 0.78539],
              72: [0.06302, 0.69141, 0, 0, 0.7203],
              73: [0, 0.69141, 0, 0, 0.55448],
              74: [0.12604, 0.69141, 0, 0, 0.55231],
              75: [0, 0.69141, 0, 0, 0.66845],
              76: [0, 0.69141, 0, 0, 0.66602],
              77: [0, 0.69141, 0, 0, 1.04953],
              78: [0, 0.69141, 0, 0, 0.83212],
              79: [0, 0.69141, 0, 0, 0.82699],
              80: [0.18906, 0.69141, 0, 0, 0.82753],
              81: [0.03781, 0.69141, 0, 0, 0.82699],
              82: [0, 0.69141, 0, 0, 0.82807],
              83: [0, 0.69141, 0, 0, 0.82861],
              84: [0, 0.69141, 0, 0, 0.66899],
              85: [0, 0.69141, 0, 0, 0.64576],
              86: [0, 0.69141, 0, 0, 0.83131],
              87: [0, 0.69141, 0, 0, 1.04602],
              88: [0, 0.69141, 0, 0, 0.71922],
              89: [0.18906, 0.69141, 0, 0, 0.83293],
              90: [0.12604, 0.69141, 0, 0, 0.60201],
              91: [0.24982, 0.74947, 0, 0, 0.27764],
              93: [0.24982, 0.74947, 0, 0, 0.27764],
              94: [0, 0.69141, 0, 0, 0.49965],
              97: [0, 0.47534, 0, 0, 0.50046],
              98: [0, 0.69141, 0, 0, 0.51315],
              99: [0, 0.47534, 0, 0, 0.38946],
              100: [0, 0.62119, 0, 0, 0.49857],
              101: [0, 0.47534, 0, 0, 0.40053],
              102: [0.18906, 0.69141, 0, 0, 0.32626],
              103: [0.18906, 0.47534, 0, 0, 0.5037],
              104: [0.18906, 0.69141, 0, 0, 0.52126],
              105: [0, 0.69141, 0, 0, 0.27899],
              106: [0, 0.69141, 0, 0, 0.28088],
              107: [0, 0.69141, 0, 0, 0.38946],
              108: [0, 0.69141, 0, 0, 0.27953],
              109: [0, 0.47534, 0, 0, 0.76676],
              110: [0, 0.47534, 0, 0, 0.52666],
              111: [0, 0.47534, 0, 0, 0.48885],
              112: [0.18906, 0.52396, 0, 0, 0.50046],
              113: [0.18906, 0.47534, 0, 0, 0.48912],
              114: [0, 0.47534, 0, 0, 0.38919],
              115: [0, 0.47534, 0, 0, 0.44266],
              116: [0, 0.62119, 0, 0, 0.33301],
              117: [0, 0.47534, 0, 0, 0.5172],
              118: [0, 0.52396, 0, 0, 0.5118],
              119: [0, 0.52396, 0, 0, 0.77351],
              120: [0.18906, 0.47534, 0, 0, 0.38865],
              121: [0.18906, 0.47534, 0, 0, 0.49884],
              122: [0.18906, 0.47534, 0, 0, 0.39054],
              160: [0, 0, 0, 0, 0.25],
              8216: [0, 0.69141, 0, 0, 0.21471],
              8217: [0, 0.69141, 0, 0, 0.21471],
              58112: [0, 0.62119, 0, 0, 0.49749],
              58113: [0, 0.62119, 0, 0, 0.4983],
              58114: [0.18906, 0.69141, 0, 0, 0.33328],
              58115: [0.18906, 0.69141, 0, 0, 0.32923],
              58116: [0.18906, 0.47534, 0, 0, 0.50343],
              58117: [0, 0.69141, 0, 0, 0.33301],
              58118: [0, 0.62119, 0, 0, 0.33409],
              58119: [0, 0.47534, 0, 0, 0.50073]
            },
            "Main-Bold": {
              32: [0, 0, 0, 0, 0.25],
              33: [0, 0.69444, 0, 0, 0.35],
              34: [0, 0.69444, 0, 0, 0.60278],
              35: [0.19444, 0.69444, 0, 0, 0.95833],
              36: [0.05556, 0.75, 0, 0, 0.575],
              37: [0.05556, 0.75, 0, 0, 0.95833],
              38: [0, 0.69444, 0, 0, 0.89444],
              39: [0, 0.69444, 0, 0, 0.31944],
              40: [0.25, 0.75, 0, 0, 0.44722],
              41: [0.25, 0.75, 0, 0, 0.44722],
              42: [0, 0.75, 0, 0, 0.575],
              43: [0.13333, 0.63333, 0, 0, 0.89444],
              44: [0.19444, 0.15556, 0, 0, 0.31944],
              45: [0, 0.44444, 0, 0, 0.38333],
              46: [0, 0.15556, 0, 0, 0.31944],
              47: [0.25, 0.75, 0, 0, 0.575],
              48: [0, 0.64444, 0, 0, 0.575],
              49: [0, 0.64444, 0, 0, 0.575],
              50: [0, 0.64444, 0, 0, 0.575],
              51: [0, 0.64444, 0, 0, 0.575],
              52: [0, 0.64444, 0, 0, 0.575],
              53: [0, 0.64444, 0, 0, 0.575],
              54: [0, 0.64444, 0, 0, 0.575],
              55: [0, 0.64444, 0, 0, 0.575],
              56: [0, 0.64444, 0, 0, 0.575],
              57: [0, 0.64444, 0, 0, 0.575],
              58: [0, 0.44444, 0, 0, 0.31944],
              59: [0.19444, 0.44444, 0, 0, 0.31944],
              60: [0.08556, 0.58556, 0, 0, 0.89444],
              61: [-0.10889, 0.39111, 0, 0, 0.89444],
              62: [0.08556, 0.58556, 0, 0, 0.89444],
              63: [0, 0.69444, 0, 0, 0.54305],
              64: [0, 0.69444, 0, 0, 0.89444],
              65: [0, 0.68611, 0, 0, 0.86944],
              66: [0, 0.68611, 0, 0, 0.81805],
              67: [0, 0.68611, 0, 0, 0.83055],
              68: [0, 0.68611, 0, 0, 0.88194],
              69: [0, 0.68611, 0, 0, 0.75555],
              70: [0, 0.68611, 0, 0, 0.72361],
              71: [0, 0.68611, 0, 0, 0.90416],
              72: [0, 0.68611, 0, 0, 0.9],
              73: [0, 0.68611, 0, 0, 0.43611],
              74: [0, 0.68611, 0, 0, 0.59444],
              75: [0, 0.68611, 0, 0, 0.90138],
              76: [0, 0.68611, 0, 0, 0.69166],
              77: [0, 0.68611, 0, 0, 1.09166],
              78: [0, 0.68611, 0, 0, 0.9],
              79: [0, 0.68611, 0, 0, 0.86388],
              80: [0, 0.68611, 0, 0, 0.78611],
              81: [0.19444, 0.68611, 0, 0, 0.86388],
              82: [0, 0.68611, 0, 0, 0.8625],
              83: [0, 0.68611, 0, 0, 0.63889],
              84: [0, 0.68611, 0, 0, 0.8],
              85: [0, 0.68611, 0, 0, 0.88472],
              86: [0, 0.68611, 0.01597, 0, 0.86944],
              87: [0, 0.68611, 0.01597, 0, 1.18888],
              88: [0, 0.68611, 0, 0, 0.86944],
              89: [0, 0.68611, 0.02875, 0, 0.86944],
              90: [0, 0.68611, 0, 0, 0.70277],
              91: [0.25, 0.75, 0, 0, 0.31944],
              92: [0.25, 0.75, 0, 0, 0.575],
              93: [0.25, 0.75, 0, 0, 0.31944],
              94: [0, 0.69444, 0, 0, 0.575],
              95: [0.31, 0.13444, 0.03194, 0, 0.575],
              97: [0, 0.44444, 0, 0, 0.55902],
              98: [0, 0.69444, 0, 0, 0.63889],
              99: [0, 0.44444, 0, 0, 0.51111],
              100: [0, 0.69444, 0, 0, 0.63889],
              101: [0, 0.44444, 0, 0, 0.52708],
              102: [0, 0.69444, 0.10903, 0, 0.35139],
              103: [0.19444, 0.44444, 0.01597, 0, 0.575],
              104: [0, 0.69444, 0, 0, 0.63889],
              105: [0, 0.69444, 0, 0, 0.31944],
              106: [0.19444, 0.69444, 0, 0, 0.35139],
              107: [0, 0.69444, 0, 0, 0.60694],
              108: [0, 0.69444, 0, 0, 0.31944],
              109: [0, 0.44444, 0, 0, 0.95833],
              110: [0, 0.44444, 0, 0, 0.63889],
              111: [0, 0.44444, 0, 0, 0.575],
              112: [0.19444, 0.44444, 0, 0, 0.63889],
              113: [0.19444, 0.44444, 0, 0, 0.60694],
              114: [0, 0.44444, 0, 0, 0.47361],
              115: [0, 0.44444, 0, 0, 0.45361],
              116: [0, 0.63492, 0, 0, 0.44722],
              117: [0, 0.44444, 0, 0, 0.63889],
              118: [0, 0.44444, 0.01597, 0, 0.60694],
              119: [0, 0.44444, 0.01597, 0, 0.83055],
              120: [0, 0.44444, 0, 0, 0.60694],
              121: [0.19444, 0.44444, 0.01597, 0, 0.60694],
              122: [0, 0.44444, 0, 0, 0.51111],
              123: [0.25, 0.75, 0, 0, 0.575],
              124: [0.25, 0.75, 0, 0, 0.31944],
              125: [0.25, 0.75, 0, 0, 0.575],
              126: [0.35, 0.34444, 0, 0, 0.575],
              160: [0, 0, 0, 0, 0.25],
              163: [0, 0.69444, 0, 0, 0.86853],
              168: [0, 0.69444, 0, 0, 0.575],
              172: [0, 0.44444, 0, 0, 0.76666],
              176: [0, 0.69444, 0, 0, 0.86944],
              177: [0.13333, 0.63333, 0, 0, 0.89444],
              184: [0.17014, 0, 0, 0, 0.51111],
              198: [0, 0.68611, 0, 0, 1.04166],
              215: [0.13333, 0.63333, 0, 0, 0.89444],
              216: [0.04861, 0.73472, 0, 0, 0.89444],
              223: [0, 0.69444, 0, 0, 0.59722],
              230: [0, 0.44444, 0, 0, 0.83055],
              247: [0.13333, 0.63333, 0, 0, 0.89444],
              248: [0.09722, 0.54167, 0, 0, 0.575],
              305: [0, 0.44444, 0, 0, 0.31944],
              338: [0, 0.68611, 0, 0, 1.16944],
              339: [0, 0.44444, 0, 0, 0.89444],
              567: [0.19444, 0.44444, 0, 0, 0.35139],
              710: [0, 0.69444, 0, 0, 0.575],
              711: [0, 0.63194, 0, 0, 0.575],
              713: [0, 0.59611, 0, 0, 0.575],
              714: [0, 0.69444, 0, 0, 0.575],
              715: [0, 0.69444, 0, 0, 0.575],
              728: [0, 0.69444, 0, 0, 0.575],
              729: [0, 0.69444, 0, 0, 0.31944],
              730: [0, 0.69444, 0, 0, 0.86944],
              732: [0, 0.69444, 0, 0, 0.575],
              733: [0, 0.69444, 0, 0, 0.575],
              915: [0, 0.68611, 0, 0, 0.69166],
              916: [0, 0.68611, 0, 0, 0.95833],
              920: [0, 0.68611, 0, 0, 0.89444],
              923: [0, 0.68611, 0, 0, 0.80555],
              926: [0, 0.68611, 0, 0, 0.76666],
              928: [0, 0.68611, 0, 0, 0.9],
              931: [0, 0.68611, 0, 0, 0.83055],
              933: [0, 0.68611, 0, 0, 0.89444],
              934: [0, 0.68611, 0, 0, 0.83055],
              936: [0, 0.68611, 0, 0, 0.89444],
              937: [0, 0.68611, 0, 0, 0.83055],
              8211: [0, 0.44444, 0.03194, 0, 0.575],
              8212: [0, 0.44444, 0.03194, 0, 1.14999],
              8216: [0, 0.69444, 0, 0, 0.31944],
              8217: [0, 0.69444, 0, 0, 0.31944],
              8220: [0, 0.69444, 0, 0, 0.60278],
              8221: [0, 0.69444, 0, 0, 0.60278],
              8224: [0.19444, 0.69444, 0, 0, 0.51111],
              8225: [0.19444, 0.69444, 0, 0, 0.51111],
              8242: [0, 0.55556, 0, 0, 0.34444],
              8407: [0, 0.72444, 0.15486, 0, 0.575],
              8463: [0, 0.69444, 0, 0, 0.66759],
              8465: [0, 0.69444, 0, 0, 0.83055],
              8467: [0, 0.69444, 0, 0, 0.47361],
              8472: [0.19444, 0.44444, 0, 0, 0.74027],
              8476: [0, 0.69444, 0, 0, 0.83055],
              8501: [0, 0.69444, 0, 0, 0.70277],
              8592: [-0.10889, 0.39111, 0, 0, 1.14999],
              8593: [0.19444, 0.69444, 0, 0, 0.575],
              8594: [-0.10889, 0.39111, 0, 0, 1.14999],
              8595: [0.19444, 0.69444, 0, 0, 0.575],
              8596: [-0.10889, 0.39111, 0, 0, 1.14999],
              8597: [0.25, 0.75, 0, 0, 0.575],
              8598: [0.19444, 0.69444, 0, 0, 1.14999],
              8599: [0.19444, 0.69444, 0, 0, 1.14999],
              8600: [0.19444, 0.69444, 0, 0, 1.14999],
              8601: [0.19444, 0.69444, 0, 0, 1.14999],
              8636: [-0.10889, 0.39111, 0, 0, 1.14999],
              8637: [-0.10889, 0.39111, 0, 0, 1.14999],
              8640: [-0.10889, 0.39111, 0, 0, 1.14999],
              8641: [-0.10889, 0.39111, 0, 0, 1.14999],
              8656: [-0.10889, 0.39111, 0, 0, 1.14999],
              8657: [0.19444, 0.69444, 0, 0, 0.70277],
              8658: [-0.10889, 0.39111, 0, 0, 1.14999],
              8659: [0.19444, 0.69444, 0, 0, 0.70277],
              8660: [-0.10889, 0.39111, 0, 0, 1.14999],
              8661: [0.25, 0.75, 0, 0, 0.70277],
              8704: [0, 0.69444, 0, 0, 0.63889],
              8706: [0, 0.69444, 0.06389, 0, 0.62847],
              8707: [0, 0.69444, 0, 0, 0.63889],
              8709: [0.05556, 0.75, 0, 0, 0.575],
              8711: [0, 0.68611, 0, 0, 0.95833],
              8712: [0.08556, 0.58556, 0, 0, 0.76666],
              8715: [0.08556, 0.58556, 0, 0, 0.76666],
              8722: [0.13333, 0.63333, 0, 0, 0.89444],
              8723: [0.13333, 0.63333, 0, 0, 0.89444],
              8725: [0.25, 0.75, 0, 0, 0.575],
              8726: [0.25, 0.75, 0, 0, 0.575],
              8727: [-0.02778, 0.47222, 0, 0, 0.575],
              8728: [-0.02639, 0.47361, 0, 0, 0.575],
              8729: [-0.02639, 0.47361, 0, 0, 0.575],
              8730: [0.18, 0.82, 0, 0, 0.95833],
              8733: [0, 0.44444, 0, 0, 0.89444],
              8734: [0, 0.44444, 0, 0, 1.14999],
              8736: [0, 0.69224, 0, 0, 0.72222],
              8739: [0.25, 0.75, 0, 0, 0.31944],
              8741: [0.25, 0.75, 0, 0, 0.575],
              8743: [0, 0.55556, 0, 0, 0.76666],
              8744: [0, 0.55556, 0, 0, 0.76666],
              8745: [0, 0.55556, 0, 0, 0.76666],
              8746: [0, 0.55556, 0, 0, 0.76666],
              8747: [0.19444, 0.69444, 0.12778, 0, 0.56875],
              8764: [-0.10889, 0.39111, 0, 0, 0.89444],
              8768: [0.19444, 0.69444, 0, 0, 0.31944],
              8771: [222e-5, 0.50222, 0, 0, 0.89444],
              8773: [0.027, 0.638, 0, 0, 0.894],
              8776: [0.02444, 0.52444, 0, 0, 0.89444],
              8781: [222e-5, 0.50222, 0, 0, 0.89444],
              8801: [222e-5, 0.50222, 0, 0, 0.89444],
              8804: [0.19667, 0.69667, 0, 0, 0.89444],
              8805: [0.19667, 0.69667, 0, 0, 0.89444],
              8810: [0.08556, 0.58556, 0, 0, 1.14999],
              8811: [0.08556, 0.58556, 0, 0, 1.14999],
              8826: [0.08556, 0.58556, 0, 0, 0.89444],
              8827: [0.08556, 0.58556, 0, 0, 0.89444],
              8834: [0.08556, 0.58556, 0, 0, 0.89444],
              8835: [0.08556, 0.58556, 0, 0, 0.89444],
              8838: [0.19667, 0.69667, 0, 0, 0.89444],
              8839: [0.19667, 0.69667, 0, 0, 0.89444],
              8846: [0, 0.55556, 0, 0, 0.76666],
              8849: [0.19667, 0.69667, 0, 0, 0.89444],
              8850: [0.19667, 0.69667, 0, 0, 0.89444],
              8851: [0, 0.55556, 0, 0, 0.76666],
              8852: [0, 0.55556, 0, 0, 0.76666],
              8853: [0.13333, 0.63333, 0, 0, 0.89444],
              8854: [0.13333, 0.63333, 0, 0, 0.89444],
              8855: [0.13333, 0.63333, 0, 0, 0.89444],
              8856: [0.13333, 0.63333, 0, 0, 0.89444],
              8857: [0.13333, 0.63333, 0, 0, 0.89444],
              8866: [0, 0.69444, 0, 0, 0.70277],
              8867: [0, 0.69444, 0, 0, 0.70277],
              8868: [0, 0.69444, 0, 0, 0.89444],
              8869: [0, 0.69444, 0, 0, 0.89444],
              8900: [-0.02639, 0.47361, 0, 0, 0.575],
              8901: [-0.02639, 0.47361, 0, 0, 0.31944],
              8902: [-0.02778, 0.47222, 0, 0, 0.575],
              8968: [0.25, 0.75, 0, 0, 0.51111],
              8969: [0.25, 0.75, 0, 0, 0.51111],
              8970: [0.25, 0.75, 0, 0, 0.51111],
              8971: [0.25, 0.75, 0, 0, 0.51111],
              8994: [-0.13889, 0.36111, 0, 0, 1.14999],
              8995: [-0.13889, 0.36111, 0, 0, 1.14999],
              9651: [0.19444, 0.69444, 0, 0, 1.02222],
              9657: [-0.02778, 0.47222, 0, 0, 0.575],
              9661: [0.19444, 0.69444, 0, 0, 1.02222],
              9667: [-0.02778, 0.47222, 0, 0, 0.575],
              9711: [0.19444, 0.69444, 0, 0, 1.14999],
              9824: [0.12963, 0.69444, 0, 0, 0.89444],
              9825: [0.12963, 0.69444, 0, 0, 0.89444],
              9826: [0.12963, 0.69444, 0, 0, 0.89444],
              9827: [0.12963, 0.69444, 0, 0, 0.89444],
              9837: [0, 0.75, 0, 0, 0.44722],
              9838: [0.19444, 0.69444, 0, 0, 0.44722],
              9839: [0.19444, 0.69444, 0, 0, 0.44722],
              10216: [0.25, 0.75, 0, 0, 0.44722],
              10217: [0.25, 0.75, 0, 0, 0.44722],
              10815: [0, 0.68611, 0, 0, 0.9],
              10927: [0.19667, 0.69667, 0, 0, 0.89444],
              10928: [0.19667, 0.69667, 0, 0, 0.89444],
              57376: [0.19444, 0.69444, 0, 0, 0]
            },
            "Main-BoldItalic": {
              32: [0, 0, 0, 0, 0.25],
              33: [0, 0.69444, 0.11417, 0, 0.38611],
              34: [0, 0.69444, 0.07939, 0, 0.62055],
              35: [0.19444, 0.69444, 0.06833, 0, 0.94444],
              37: [0.05556, 0.75, 0.12861, 0, 0.94444],
              38: [0, 0.69444, 0.08528, 0, 0.88555],
              39: [0, 0.69444, 0.12945, 0, 0.35555],
              40: [0.25, 0.75, 0.15806, 0, 0.47333],
              41: [0.25, 0.75, 0.03306, 0, 0.47333],
              42: [0, 0.75, 0.14333, 0, 0.59111],
              43: [0.10333, 0.60333, 0.03306, 0, 0.88555],
              44: [0.19444, 0.14722, 0, 0, 0.35555],
              45: [0, 0.44444, 0.02611, 0, 0.41444],
              46: [0, 0.14722, 0, 0, 0.35555],
              47: [0.25, 0.75, 0.15806, 0, 0.59111],
              48: [0, 0.64444, 0.13167, 0, 0.59111],
              49: [0, 0.64444, 0.13167, 0, 0.59111],
              50: [0, 0.64444, 0.13167, 0, 0.59111],
              51: [0, 0.64444, 0.13167, 0, 0.59111],
              52: [0.19444, 0.64444, 0.13167, 0, 0.59111],
              53: [0, 0.64444, 0.13167, 0, 0.59111],
              54: [0, 0.64444, 0.13167, 0, 0.59111],
              55: [0.19444, 0.64444, 0.13167, 0, 0.59111],
              56: [0, 0.64444, 0.13167, 0, 0.59111],
              57: [0, 0.64444, 0.13167, 0, 0.59111],
              58: [0, 0.44444, 0.06695, 0, 0.35555],
              59: [0.19444, 0.44444, 0.06695, 0, 0.35555],
              61: [-0.10889, 0.39111, 0.06833, 0, 0.88555],
              63: [0, 0.69444, 0.11472, 0, 0.59111],
              64: [0, 0.69444, 0.09208, 0, 0.88555],
              65: [0, 0.68611, 0, 0, 0.86555],
              66: [0, 0.68611, 0.0992, 0, 0.81666],
              67: [0, 0.68611, 0.14208, 0, 0.82666],
              68: [0, 0.68611, 0.09062, 0, 0.87555],
              69: [0, 0.68611, 0.11431, 0, 0.75666],
              70: [0, 0.68611, 0.12903, 0, 0.72722],
              71: [0, 0.68611, 0.07347, 0, 0.89527],
              72: [0, 0.68611, 0.17208, 0, 0.8961],
              73: [0, 0.68611, 0.15681, 0, 0.47166],
              74: [0, 0.68611, 0.145, 0, 0.61055],
              75: [0, 0.68611, 0.14208, 0, 0.89499],
              76: [0, 0.68611, 0, 0, 0.69777],
              77: [0, 0.68611, 0.17208, 0, 1.07277],
              78: [0, 0.68611, 0.17208, 0, 0.8961],
              79: [0, 0.68611, 0.09062, 0, 0.85499],
              80: [0, 0.68611, 0.0992, 0, 0.78721],
              81: [0.19444, 0.68611, 0.09062, 0, 0.85499],
              82: [0, 0.68611, 0.02559, 0, 0.85944],
              83: [0, 0.68611, 0.11264, 0, 0.64999],
              84: [0, 0.68611, 0.12903, 0, 0.7961],
              85: [0, 0.68611, 0.17208, 0, 0.88083],
              86: [0, 0.68611, 0.18625, 0, 0.86555],
              87: [0, 0.68611, 0.18625, 0, 1.15999],
              88: [0, 0.68611, 0.15681, 0, 0.86555],
              89: [0, 0.68611, 0.19803, 0, 0.86555],
              90: [0, 0.68611, 0.14208, 0, 0.70888],
              91: [0.25, 0.75, 0.1875, 0, 0.35611],
              93: [0.25, 0.75, 0.09972, 0, 0.35611],
              94: [0, 0.69444, 0.06709, 0, 0.59111],
              95: [0.31, 0.13444, 0.09811, 0, 0.59111],
              97: [0, 0.44444, 0.09426, 0, 0.59111],
              98: [0, 0.69444, 0.07861, 0, 0.53222],
              99: [0, 0.44444, 0.05222, 0, 0.53222],
              100: [0, 0.69444, 0.10861, 0, 0.59111],
              101: [0, 0.44444, 0.085, 0, 0.53222],
              102: [0.19444, 0.69444, 0.21778, 0, 0.4],
              103: [0.19444, 0.44444, 0.105, 0, 0.53222],
              104: [0, 0.69444, 0.09426, 0, 0.59111],
              105: [0, 0.69326, 0.11387, 0, 0.35555],
              106: [0.19444, 0.69326, 0.1672, 0, 0.35555],
              107: [0, 0.69444, 0.11111, 0, 0.53222],
              108: [0, 0.69444, 0.10861, 0, 0.29666],
              109: [0, 0.44444, 0.09426, 0, 0.94444],
              110: [0, 0.44444, 0.09426, 0, 0.64999],
              111: [0, 0.44444, 0.07861, 0, 0.59111],
              112: [0.19444, 0.44444, 0.07861, 0, 0.59111],
              113: [0.19444, 0.44444, 0.105, 0, 0.53222],
              114: [0, 0.44444, 0.11111, 0, 0.50167],
              115: [0, 0.44444, 0.08167, 0, 0.48694],
              116: [0, 0.63492, 0.09639, 0, 0.385],
              117: [0, 0.44444, 0.09426, 0, 0.62055],
              118: [0, 0.44444, 0.11111, 0, 0.53222],
              119: [0, 0.44444, 0.11111, 0, 0.76777],
              120: [0, 0.44444, 0.12583, 0, 0.56055],
              121: [0.19444, 0.44444, 0.105, 0, 0.56166],
              122: [0, 0.44444, 0.13889, 0, 0.49055],
              126: [0.35, 0.34444, 0.11472, 0, 0.59111],
              160: [0, 0, 0, 0, 0.25],
              168: [0, 0.69444, 0.11473, 0, 0.59111],
              176: [0, 0.69444, 0, 0, 0.94888],
              184: [0.17014, 0, 0, 0, 0.53222],
              198: [0, 0.68611, 0.11431, 0, 1.02277],
              216: [0.04861, 0.73472, 0.09062, 0, 0.88555],
              223: [0.19444, 0.69444, 0.09736, 0, 0.665],
              230: [0, 0.44444, 0.085, 0, 0.82666],
              248: [0.09722, 0.54167, 0.09458, 0, 0.59111],
              305: [0, 0.44444, 0.09426, 0, 0.35555],
              338: [0, 0.68611, 0.11431, 0, 1.14054],
              339: [0, 0.44444, 0.085, 0, 0.82666],
              567: [0.19444, 0.44444, 0.04611, 0, 0.385],
              710: [0, 0.69444, 0.06709, 0, 0.59111],
              711: [0, 0.63194, 0.08271, 0, 0.59111],
              713: [0, 0.59444, 0.10444, 0, 0.59111],
              714: [0, 0.69444, 0.08528, 0, 0.59111],
              715: [0, 0.69444, 0, 0, 0.59111],
              728: [0, 0.69444, 0.10333, 0, 0.59111],
              729: [0, 0.69444, 0.12945, 0, 0.35555],
              730: [0, 0.69444, 0, 0, 0.94888],
              732: [0, 0.69444, 0.11472, 0, 0.59111],
              733: [0, 0.69444, 0.11472, 0, 0.59111],
              915: [0, 0.68611, 0.12903, 0, 0.69777],
              916: [0, 0.68611, 0, 0, 0.94444],
              920: [0, 0.68611, 0.09062, 0, 0.88555],
              923: [0, 0.68611, 0, 0, 0.80666],
              926: [0, 0.68611, 0.15092, 0, 0.76777],
              928: [0, 0.68611, 0.17208, 0, 0.8961],
              931: [0, 0.68611, 0.11431, 0, 0.82666],
              933: [0, 0.68611, 0.10778, 0, 0.88555],
              934: [0, 0.68611, 0.05632, 0, 0.82666],
              936: [0, 0.68611, 0.10778, 0, 0.88555],
              937: [0, 0.68611, 0.0992, 0, 0.82666],
              8211: [0, 0.44444, 0.09811, 0, 0.59111],
              8212: [0, 0.44444, 0.09811, 0, 1.18221],
              8216: [0, 0.69444, 0.12945, 0, 0.35555],
              8217: [0, 0.69444, 0.12945, 0, 0.35555],
              8220: [0, 0.69444, 0.16772, 0, 0.62055],
              8221: [0, 0.69444, 0.07939, 0, 0.62055]
            },
            "Main-Italic": {
              32: [0, 0, 0, 0, 0.25],
              33: [0, 0.69444, 0.12417, 0, 0.30667],
              34: [0, 0.69444, 0.06961, 0, 0.51444],
              35: [0.19444, 0.69444, 0.06616, 0, 0.81777],
              37: [0.05556, 0.75, 0.13639, 0, 0.81777],
              38: [0, 0.69444, 0.09694, 0, 0.76666],
              39: [0, 0.69444, 0.12417, 0, 0.30667],
              40: [0.25, 0.75, 0.16194, 0, 0.40889],
              41: [0.25, 0.75, 0.03694, 0, 0.40889],
              42: [0, 0.75, 0.14917, 0, 0.51111],
              43: [0.05667, 0.56167, 0.03694, 0, 0.76666],
              44: [0.19444, 0.10556, 0, 0, 0.30667],
              45: [0, 0.43056, 0.02826, 0, 0.35778],
              46: [0, 0.10556, 0, 0, 0.30667],
              47: [0.25, 0.75, 0.16194, 0, 0.51111],
              48: [0, 0.64444, 0.13556, 0, 0.51111],
              49: [0, 0.64444, 0.13556, 0, 0.51111],
              50: [0, 0.64444, 0.13556, 0, 0.51111],
              51: [0, 0.64444, 0.13556, 0, 0.51111],
              52: [0.19444, 0.64444, 0.13556, 0, 0.51111],
              53: [0, 0.64444, 0.13556, 0, 0.51111],
              54: [0, 0.64444, 0.13556, 0, 0.51111],
              55: [0.19444, 0.64444, 0.13556, 0, 0.51111],
              56: [0, 0.64444, 0.13556, 0, 0.51111],
              57: [0, 0.64444, 0.13556, 0, 0.51111],
              58: [0, 0.43056, 0.0582, 0, 0.30667],
              59: [0.19444, 0.43056, 0.0582, 0, 0.30667],
              61: [-0.13313, 0.36687, 0.06616, 0, 0.76666],
              63: [0, 0.69444, 0.1225, 0, 0.51111],
              64: [0, 0.69444, 0.09597, 0, 0.76666],
              65: [0, 0.68333, 0, 0, 0.74333],
              66: [0, 0.68333, 0.10257, 0, 0.70389],
              67: [0, 0.68333, 0.14528, 0, 0.71555],
              68: [0, 0.68333, 0.09403, 0, 0.755],
              69: [0, 0.68333, 0.12028, 0, 0.67833],
              70: [0, 0.68333, 0.13305, 0, 0.65277],
              71: [0, 0.68333, 0.08722, 0, 0.77361],
              72: [0, 0.68333, 0.16389, 0, 0.74333],
              73: [0, 0.68333, 0.15806, 0, 0.38555],
              74: [0, 0.68333, 0.14028, 0, 0.525],
              75: [0, 0.68333, 0.14528, 0, 0.76888],
              76: [0, 0.68333, 0, 0, 0.62722],
              77: [0, 0.68333, 0.16389, 0, 0.89666],
              78: [0, 0.68333, 0.16389, 0, 0.74333],
              79: [0, 0.68333, 0.09403, 0, 0.76666],
              80: [0, 0.68333, 0.10257, 0, 0.67833],
              81: [0.19444, 0.68333, 0.09403, 0, 0.76666],
              82: [0, 0.68333, 0.03868, 0, 0.72944],
              83: [0, 0.68333, 0.11972, 0, 0.56222],
              84: [0, 0.68333, 0.13305, 0, 0.71555],
              85: [0, 0.68333, 0.16389, 0, 0.74333],
              86: [0, 0.68333, 0.18361, 0, 0.74333],
              87: [0, 0.68333, 0.18361, 0, 0.99888],
              88: [0, 0.68333, 0.15806, 0, 0.74333],
              89: [0, 0.68333, 0.19383, 0, 0.74333],
              90: [0, 0.68333, 0.14528, 0, 0.61333],
              91: [0.25, 0.75, 0.1875, 0, 0.30667],
              93: [0.25, 0.75, 0.10528, 0, 0.30667],
              94: [0, 0.69444, 0.06646, 0, 0.51111],
              95: [0.31, 0.12056, 0.09208, 0, 0.51111],
              97: [0, 0.43056, 0.07671, 0, 0.51111],
              98: [0, 0.69444, 0.06312, 0, 0.46],
              99: [0, 0.43056, 0.05653, 0, 0.46],
              100: [0, 0.69444, 0.10333, 0, 0.51111],
              101: [0, 0.43056, 0.07514, 0, 0.46],
              102: [0.19444, 0.69444, 0.21194, 0, 0.30667],
              103: [0.19444, 0.43056, 0.08847, 0, 0.46],
              104: [0, 0.69444, 0.07671, 0, 0.51111],
              105: [0, 0.65536, 0.1019, 0, 0.30667],
              106: [0.19444, 0.65536, 0.14467, 0, 0.30667],
              107: [0, 0.69444, 0.10764, 0, 0.46],
              108: [0, 0.69444, 0.10333, 0, 0.25555],
              109: [0, 0.43056, 0.07671, 0, 0.81777],
              110: [0, 0.43056, 0.07671, 0, 0.56222],
              111: [0, 0.43056, 0.06312, 0, 0.51111],
              112: [0.19444, 0.43056, 0.06312, 0, 0.51111],
              113: [0.19444, 0.43056, 0.08847, 0, 0.46],
              114: [0, 0.43056, 0.10764, 0, 0.42166],
              115: [0, 0.43056, 0.08208, 0, 0.40889],
              116: [0, 0.61508, 0.09486, 0, 0.33222],
              117: [0, 0.43056, 0.07671, 0, 0.53666],
              118: [0, 0.43056, 0.10764, 0, 0.46],
              119: [0, 0.43056, 0.10764, 0, 0.66444],
              120: [0, 0.43056, 0.12042, 0, 0.46389],
              121: [0.19444, 0.43056, 0.08847, 0, 0.48555],
              122: [0, 0.43056, 0.12292, 0, 0.40889],
              126: [0.35, 0.31786, 0.11585, 0, 0.51111],
              160: [0, 0, 0, 0, 0.25],
              168: [0, 0.66786, 0.10474, 0, 0.51111],
              176: [0, 0.69444, 0, 0, 0.83129],
              184: [0.17014, 0, 0, 0, 0.46],
              198: [0, 0.68333, 0.12028, 0, 0.88277],
              216: [0.04861, 0.73194, 0.09403, 0, 0.76666],
              223: [0.19444, 0.69444, 0.10514, 0, 0.53666],
              230: [0, 0.43056, 0.07514, 0, 0.71555],
              248: [0.09722, 0.52778, 0.09194, 0, 0.51111],
              338: [0, 0.68333, 0.12028, 0, 0.98499],
              339: [0, 0.43056, 0.07514, 0, 0.71555],
              710: [0, 0.69444, 0.06646, 0, 0.51111],
              711: [0, 0.62847, 0.08295, 0, 0.51111],
              713: [0, 0.56167, 0.10333, 0, 0.51111],
              714: [0, 0.69444, 0.09694, 0, 0.51111],
              715: [0, 0.69444, 0, 0, 0.51111],
              728: [0, 0.69444, 0.10806, 0, 0.51111],
              729: [0, 0.66786, 0.11752, 0, 0.30667],
              730: [0, 0.69444, 0, 0, 0.83129],
              732: [0, 0.66786, 0.11585, 0, 0.51111],
              733: [0, 0.69444, 0.1225, 0, 0.51111],
              915: [0, 0.68333, 0.13305, 0, 0.62722],
              916: [0, 0.68333, 0, 0, 0.81777],
              920: [0, 0.68333, 0.09403, 0, 0.76666],
              923: [0, 0.68333, 0, 0, 0.69222],
              926: [0, 0.68333, 0.15294, 0, 0.66444],
              928: [0, 0.68333, 0.16389, 0, 0.74333],
              931: [0, 0.68333, 0.12028, 0, 0.71555],
              933: [0, 0.68333, 0.11111, 0, 0.76666],
              934: [0, 0.68333, 0.05986, 0, 0.71555],
              936: [0, 0.68333, 0.11111, 0, 0.76666],
              937: [0, 0.68333, 0.10257, 0, 0.71555],
              8211: [0, 0.43056, 0.09208, 0, 0.51111],
              8212: [0, 0.43056, 0.09208, 0, 1.02222],
              8216: [0, 0.69444, 0.12417, 0, 0.30667],
              8217: [0, 0.69444, 0.12417, 0, 0.30667],
              8220: [0, 0.69444, 0.1685, 0, 0.51444],
              8221: [0, 0.69444, 0.06961, 0, 0.51444],
              8463: [0, 0.68889, 0, 0, 0.54028]
            },
            "Main-Regular": {
              32: [0, 0, 0, 0, 0.25],
              33: [0, 0.69444, 0, 0, 0.27778],
              34: [0, 0.69444, 0, 0, 0.5],
              35: [0.19444, 0.69444, 0, 0, 0.83334],
              36: [0.05556, 0.75, 0, 0, 0.5],
              37: [0.05556, 0.75, 0, 0, 0.83334],
              38: [0, 0.69444, 0, 0, 0.77778],
              39: [0, 0.69444, 0, 0, 0.27778],
              40: [0.25, 0.75, 0, 0, 0.38889],
              41: [0.25, 0.75, 0, 0, 0.38889],
              42: [0, 0.75, 0, 0, 0.5],
              43: [0.08333, 0.58333, 0, 0, 0.77778],
              44: [0.19444, 0.10556, 0, 0, 0.27778],
              45: [0, 0.43056, 0, 0, 0.33333],
              46: [0, 0.10556, 0, 0, 0.27778],
              47: [0.25, 0.75, 0, 0, 0.5],
              48: [0, 0.64444, 0, 0, 0.5],
              49: [0, 0.64444, 0, 0, 0.5],
              50: [0, 0.64444, 0, 0, 0.5],
              51: [0, 0.64444, 0, 0, 0.5],
              52: [0, 0.64444, 0, 0, 0.5],
              53: [0, 0.64444, 0, 0, 0.5],
              54: [0, 0.64444, 0, 0, 0.5],
              55: [0, 0.64444, 0, 0, 0.5],
              56: [0, 0.64444, 0, 0, 0.5],
              57: [0, 0.64444, 0, 0, 0.5],
              58: [0, 0.43056, 0, 0, 0.27778],
              59: [0.19444, 0.43056, 0, 0, 0.27778],
              60: [0.0391, 0.5391, 0, 0, 0.77778],
              61: [-0.13313, 0.36687, 0, 0, 0.77778],
              62: [0.0391, 0.5391, 0, 0, 0.77778],
              63: [0, 0.69444, 0, 0, 0.47222],
              64: [0, 0.69444, 0, 0, 0.77778],
              65: [0, 0.68333, 0, 0, 0.75],
              66: [0, 0.68333, 0, 0, 0.70834],
              67: [0, 0.68333, 0, 0, 0.72222],
              68: [0, 0.68333, 0, 0, 0.76389],
              69: [0, 0.68333, 0, 0, 0.68056],
              70: [0, 0.68333, 0, 0, 0.65278],
              71: [0, 0.68333, 0, 0, 0.78472],
              72: [0, 0.68333, 0, 0, 0.75],
              73: [0, 0.68333, 0, 0, 0.36111],
              74: [0, 0.68333, 0, 0, 0.51389],
              75: [0, 0.68333, 0, 0, 0.77778],
              76: [0, 0.68333, 0, 0, 0.625],
              77: [0, 0.68333, 0, 0, 0.91667],
              78: [0, 0.68333, 0, 0, 0.75],
              79: [0, 0.68333, 0, 0, 0.77778],
              80: [0, 0.68333, 0, 0, 0.68056],
              81: [0.19444, 0.68333, 0, 0, 0.77778],
              82: [0, 0.68333, 0, 0, 0.73611],
              83: [0, 0.68333, 0, 0, 0.55556],
              84: [0, 0.68333, 0, 0, 0.72222],
              85: [0, 0.68333, 0, 0, 0.75],
              86: [0, 0.68333, 0.01389, 0, 0.75],
              87: [0, 0.68333, 0.01389, 0, 1.02778],
              88: [0, 0.68333, 0, 0, 0.75],
              89: [0, 0.68333, 0.025, 0, 0.75],
              90: [0, 0.68333, 0, 0, 0.61111],
              91: [0.25, 0.75, 0, 0, 0.27778],
              92: [0.25, 0.75, 0, 0, 0.5],
              93: [0.25, 0.75, 0, 0, 0.27778],
              94: [0, 0.69444, 0, 0, 0.5],
              95: [0.31, 0.12056, 0.02778, 0, 0.5],
              97: [0, 0.43056, 0, 0, 0.5],
              98: [0, 0.69444, 0, 0, 0.55556],
              99: [0, 0.43056, 0, 0, 0.44445],
              100: [0, 0.69444, 0, 0, 0.55556],
              101: [0, 0.43056, 0, 0, 0.44445],
              102: [0, 0.69444, 0.07778, 0, 0.30556],
              103: [0.19444, 0.43056, 0.01389, 0, 0.5],
              104: [0, 0.69444, 0, 0, 0.55556],
              105: [0, 0.66786, 0, 0, 0.27778],
              106: [0.19444, 0.66786, 0, 0, 0.30556],
              107: [0, 0.69444, 0, 0, 0.52778],
              108: [0, 0.69444, 0, 0, 0.27778],
              109: [0, 0.43056, 0, 0, 0.83334],
              110: [0, 0.43056, 0, 0, 0.55556],
              111: [0, 0.43056, 0, 0, 0.5],
              112: [0.19444, 0.43056, 0, 0, 0.55556],
              113: [0.19444, 0.43056, 0, 0, 0.52778],
              114: [0, 0.43056, 0, 0, 0.39167],
              115: [0, 0.43056, 0, 0, 0.39445],
              116: [0, 0.61508, 0, 0, 0.38889],
              117: [0, 0.43056, 0, 0, 0.55556],
              118: [0, 0.43056, 0.01389, 0, 0.52778],
              119: [0, 0.43056, 0.01389, 0, 0.72222],
              120: [0, 0.43056, 0, 0, 0.52778],
              121: [0.19444, 0.43056, 0.01389, 0, 0.52778],
              122: [0, 0.43056, 0, 0, 0.44445],
              123: [0.25, 0.75, 0, 0, 0.5],
              124: [0.25, 0.75, 0, 0, 0.27778],
              125: [0.25, 0.75, 0, 0, 0.5],
              126: [0.35, 0.31786, 0, 0, 0.5],
              160: [0, 0, 0, 0, 0.25],
              163: [0, 0.69444, 0, 0, 0.76909],
              167: [0.19444, 0.69444, 0, 0, 0.44445],
              168: [0, 0.66786, 0, 0, 0.5],
              172: [0, 0.43056, 0, 0, 0.66667],
              176: [0, 0.69444, 0, 0, 0.75],
              177: [0.08333, 0.58333, 0, 0, 0.77778],
              182: [0.19444, 0.69444, 0, 0, 0.61111],
              184: [0.17014, 0, 0, 0, 0.44445],
              198: [0, 0.68333, 0, 0, 0.90278],
              215: [0.08333, 0.58333, 0, 0, 0.77778],
              216: [0.04861, 0.73194, 0, 0, 0.77778],
              223: [0, 0.69444, 0, 0, 0.5],
              230: [0, 0.43056, 0, 0, 0.72222],
              247: [0.08333, 0.58333, 0, 0, 0.77778],
              248: [0.09722, 0.52778, 0, 0, 0.5],
              305: [0, 0.43056, 0, 0, 0.27778],
              338: [0, 0.68333, 0, 0, 1.01389],
              339: [0, 0.43056, 0, 0, 0.77778],
              567: [0.19444, 0.43056, 0, 0, 0.30556],
              710: [0, 0.69444, 0, 0, 0.5],
              711: [0, 0.62847, 0, 0, 0.5],
              713: [0, 0.56778, 0, 0, 0.5],
              714: [0, 0.69444, 0, 0, 0.5],
              715: [0, 0.69444, 0, 0, 0.5],
              728: [0, 0.69444, 0, 0, 0.5],
              729: [0, 0.66786, 0, 0, 0.27778],
              730: [0, 0.69444, 0, 0, 0.75],
              732: [0, 0.66786, 0, 0, 0.5],
              733: [0, 0.69444, 0, 0, 0.5],
              915: [0, 0.68333, 0, 0, 0.625],
              916: [0, 0.68333, 0, 0, 0.83334],
              920: [0, 0.68333, 0, 0, 0.77778],
              923: [0, 0.68333, 0, 0, 0.69445],
              926: [0, 0.68333, 0, 0, 0.66667],
              928: [0, 0.68333, 0, 0, 0.75],
              931: [0, 0.68333, 0, 0, 0.72222],
              933: [0, 0.68333, 0, 0, 0.77778],
              934: [0, 0.68333, 0, 0, 0.72222],
              936: [0, 0.68333, 0, 0, 0.77778],
              937: [0, 0.68333, 0, 0, 0.72222],
              8211: [0, 0.43056, 0.02778, 0, 0.5],
              8212: [0, 0.43056, 0.02778, 0, 1],
              8216: [0, 0.69444, 0, 0, 0.27778],
              8217: [0, 0.69444, 0, 0, 0.27778],
              8220: [0, 0.69444, 0, 0, 0.5],
              8221: [0, 0.69444, 0, 0, 0.5],
              8224: [0.19444, 0.69444, 0, 0, 0.44445],
              8225: [0.19444, 0.69444, 0, 0, 0.44445],
              8230: [0, 0.123, 0, 0, 1.172],
              8242: [0, 0.55556, 0, 0, 0.275],
              8407: [0, 0.71444, 0.15382, 0, 0.5],
              8463: [0, 0.68889, 0, 0, 0.54028],
              8465: [0, 0.69444, 0, 0, 0.72222],
              8467: [0, 0.69444, 0, 0.11111, 0.41667],
              8472: [0.19444, 0.43056, 0, 0.11111, 0.63646],
              8476: [0, 0.69444, 0, 0, 0.72222],
              8501: [0, 0.69444, 0, 0, 0.61111],
              8592: [-0.13313, 0.36687, 0, 0, 1],
              8593: [0.19444, 0.69444, 0, 0, 0.5],
              8594: [-0.13313, 0.36687, 0, 0, 1],
              8595: [0.19444, 0.69444, 0, 0, 0.5],
              8596: [-0.13313, 0.36687, 0, 0, 1],
              8597: [0.25, 0.75, 0, 0, 0.5],
              8598: [0.19444, 0.69444, 0, 0, 1],
              8599: [0.19444, 0.69444, 0, 0, 1],
              8600: [0.19444, 0.69444, 0, 0, 1],
              8601: [0.19444, 0.69444, 0, 0, 1],
              8614: [0.011, 0.511, 0, 0, 1],
              8617: [0.011, 0.511, 0, 0, 1.126],
              8618: [0.011, 0.511, 0, 0, 1.126],
              8636: [-0.13313, 0.36687, 0, 0, 1],
              8637: [-0.13313, 0.36687, 0, 0, 1],
              8640: [-0.13313, 0.36687, 0, 0, 1],
              8641: [-0.13313, 0.36687, 0, 0, 1],
              8652: [0.011, 0.671, 0, 0, 1],
              8656: [-0.13313, 0.36687, 0, 0, 1],
              8657: [0.19444, 0.69444, 0, 0, 0.61111],
              8658: [-0.13313, 0.36687, 0, 0, 1],
              8659: [0.19444, 0.69444, 0, 0, 0.61111],
              8660: [-0.13313, 0.36687, 0, 0, 1],
              8661: [0.25, 0.75, 0, 0, 0.61111],
              8704: [0, 0.69444, 0, 0, 0.55556],
              8706: [0, 0.69444, 0.05556, 0.08334, 0.5309],
              8707: [0, 0.69444, 0, 0, 0.55556],
              8709: [0.05556, 0.75, 0, 0, 0.5],
              8711: [0, 0.68333, 0, 0, 0.83334],
              8712: [0.0391, 0.5391, 0, 0, 0.66667],
              8715: [0.0391, 0.5391, 0, 0, 0.66667],
              8722: [0.08333, 0.58333, 0, 0, 0.77778],
              8723: [0.08333, 0.58333, 0, 0, 0.77778],
              8725: [0.25, 0.75, 0, 0, 0.5],
              8726: [0.25, 0.75, 0, 0, 0.5],
              8727: [-0.03472, 0.46528, 0, 0, 0.5],
              8728: [-0.05555, 0.44445, 0, 0, 0.5],
              8729: [-0.05555, 0.44445, 0, 0, 0.5],
              8730: [0.2, 0.8, 0, 0, 0.83334],
              8733: [0, 0.43056, 0, 0, 0.77778],
              8734: [0, 0.43056, 0, 0, 1],
              8736: [0, 0.69224, 0, 0, 0.72222],
              8739: [0.25, 0.75, 0, 0, 0.27778],
              8741: [0.25, 0.75, 0, 0, 0.5],
              8743: [0, 0.55556, 0, 0, 0.66667],
              8744: [0, 0.55556, 0, 0, 0.66667],
              8745: [0, 0.55556, 0, 0, 0.66667],
              8746: [0, 0.55556, 0, 0, 0.66667],
              8747: [0.19444, 0.69444, 0.11111, 0, 0.41667],
              8764: [-0.13313, 0.36687, 0, 0, 0.77778],
              8768: [0.19444, 0.69444, 0, 0, 0.27778],
              8771: [-0.03625, 0.46375, 0, 0, 0.77778],
              8773: [-0.022, 0.589, 0, 0, 0.778],
              8776: [-0.01688, 0.48312, 0, 0, 0.77778],
              8781: [-0.03625, 0.46375, 0, 0, 0.77778],
              8784: [-0.133, 0.673, 0, 0, 0.778],
              8801: [-0.03625, 0.46375, 0, 0, 0.77778],
              8804: [0.13597, 0.63597, 0, 0, 0.77778],
              8805: [0.13597, 0.63597, 0, 0, 0.77778],
              8810: [0.0391, 0.5391, 0, 0, 1],
              8811: [0.0391, 0.5391, 0, 0, 1],
              8826: [0.0391, 0.5391, 0, 0, 0.77778],
              8827: [0.0391, 0.5391, 0, 0, 0.77778],
              8834: [0.0391, 0.5391, 0, 0, 0.77778],
              8835: [0.0391, 0.5391, 0, 0, 0.77778],
              8838: [0.13597, 0.63597, 0, 0, 0.77778],
              8839: [0.13597, 0.63597, 0, 0, 0.77778],
              8846: [0, 0.55556, 0, 0, 0.66667],
              8849: [0.13597, 0.63597, 0, 0, 0.77778],
              8850: [0.13597, 0.63597, 0, 0, 0.77778],
              8851: [0, 0.55556, 0, 0, 0.66667],
              8852: [0, 0.55556, 0, 0, 0.66667],
              8853: [0.08333, 0.58333, 0, 0, 0.77778],
              8854: [0.08333, 0.58333, 0, 0, 0.77778],
              8855: [0.08333, 0.58333, 0, 0, 0.77778],
              8856: [0.08333, 0.58333, 0, 0, 0.77778],
              8857: [0.08333, 0.58333, 0, 0, 0.77778],
              8866: [0, 0.69444, 0, 0, 0.61111],
              8867: [0, 0.69444, 0, 0, 0.61111],
              8868: [0, 0.69444, 0, 0, 0.77778],
              8869: [0, 0.69444, 0, 0, 0.77778],
              8872: [0.249, 0.75, 0, 0, 0.867],
              8900: [-0.05555, 0.44445, 0, 0, 0.5],
              8901: [-0.05555, 0.44445, 0, 0, 0.27778],
              8902: [-0.03472, 0.46528, 0, 0, 0.5],
              8904: [5e-3, 0.505, 0, 0, 0.9],
              8942: [0.03, 0.903, 0, 0, 0.278],
              8943: [-0.19, 0.313, 0, 0, 1.172],
              8945: [-0.1, 0.823, 0, 0, 1.282],
              8968: [0.25, 0.75, 0, 0, 0.44445],
              8969: [0.25, 0.75, 0, 0, 0.44445],
              8970: [0.25, 0.75, 0, 0, 0.44445],
              8971: [0.25, 0.75, 0, 0, 0.44445],
              8994: [-0.14236, 0.35764, 0, 0, 1],
              8995: [-0.14236, 0.35764, 0, 0, 1],
              9136: [0.244, 0.744, 0, 0, 0.412],
              9137: [0.244, 0.745, 0, 0, 0.412],
              9651: [0.19444, 0.69444, 0, 0, 0.88889],
              9657: [-0.03472, 0.46528, 0, 0, 0.5],
              9661: [0.19444, 0.69444, 0, 0, 0.88889],
              9667: [-0.03472, 0.46528, 0, 0, 0.5],
              9711: [0.19444, 0.69444, 0, 0, 1],
              9824: [0.12963, 0.69444, 0, 0, 0.77778],
              9825: [0.12963, 0.69444, 0, 0, 0.77778],
              9826: [0.12963, 0.69444, 0, 0, 0.77778],
              9827: [0.12963, 0.69444, 0, 0, 0.77778],
              9837: [0, 0.75, 0, 0, 0.38889],
              9838: [0.19444, 0.69444, 0, 0, 0.38889],
              9839: [0.19444, 0.69444, 0, 0, 0.38889],
              10216: [0.25, 0.75, 0, 0, 0.38889],
              10217: [0.25, 0.75, 0, 0, 0.38889],
              10222: [0.244, 0.744, 0, 0, 0.412],
              10223: [0.244, 0.745, 0, 0, 0.412],
              10229: [0.011, 0.511, 0, 0, 1.609],
              10230: [0.011, 0.511, 0, 0, 1.638],
              10231: [0.011, 0.511, 0, 0, 1.859],
              10232: [0.024, 0.525, 0, 0, 1.609],
              10233: [0.024, 0.525, 0, 0, 1.638],
              10234: [0.024, 0.525, 0, 0, 1.858],
              10236: [0.011, 0.511, 0, 0, 1.638],
              10815: [0, 0.68333, 0, 0, 0.75],
              10927: [0.13597, 0.63597, 0, 0, 0.77778],
              10928: [0.13597, 0.63597, 0, 0, 0.77778],
              57376: [0.19444, 0.69444, 0, 0, 0]
            },
            "Math-BoldItalic": {
              32: [0, 0, 0, 0, 0.25],
              48: [0, 0.44444, 0, 0, 0.575],
              49: [0, 0.44444, 0, 0, 0.575],
              50: [0, 0.44444, 0, 0, 0.575],
              51: [0.19444, 0.44444, 0, 0, 0.575],
              52: [0.19444, 0.44444, 0, 0, 0.575],
              53: [0.19444, 0.44444, 0, 0, 0.575],
              54: [0, 0.64444, 0, 0, 0.575],
              55: [0.19444, 0.44444, 0, 0, 0.575],
              56: [0, 0.64444, 0, 0, 0.575],
              57: [0.19444, 0.44444, 0, 0, 0.575],
              65: [0, 0.68611, 0, 0, 0.86944],
              66: [0, 0.68611, 0.04835, 0, 0.8664],
              67: [0, 0.68611, 0.06979, 0, 0.81694],
              68: [0, 0.68611, 0.03194, 0, 0.93812],
              69: [0, 0.68611, 0.05451, 0, 0.81007],
              70: [0, 0.68611, 0.15972, 0, 0.68889],
              71: [0, 0.68611, 0, 0, 0.88673],
              72: [0, 0.68611, 0.08229, 0, 0.98229],
              73: [0, 0.68611, 0.07778, 0, 0.51111],
              74: [0, 0.68611, 0.10069, 0, 0.63125],
              75: [0, 0.68611, 0.06979, 0, 0.97118],
              76: [0, 0.68611, 0, 0, 0.75555],
              77: [0, 0.68611, 0.11424, 0, 1.14201],
              78: [0, 0.68611, 0.11424, 0, 0.95034],
              79: [0, 0.68611, 0.03194, 0, 0.83666],
              80: [0, 0.68611, 0.15972, 0, 0.72309],
              81: [0.19444, 0.68611, 0, 0, 0.86861],
              82: [0, 0.68611, 421e-5, 0, 0.87235],
              83: [0, 0.68611, 0.05382, 0, 0.69271],
              84: [0, 0.68611, 0.15972, 0, 0.63663],
              85: [0, 0.68611, 0.11424, 0, 0.80027],
              86: [0, 0.68611, 0.25555, 0, 0.67778],
              87: [0, 0.68611, 0.15972, 0, 1.09305],
              88: [0, 0.68611, 0.07778, 0, 0.94722],
              89: [0, 0.68611, 0.25555, 0, 0.67458],
              90: [0, 0.68611, 0.06979, 0, 0.77257],
              97: [0, 0.44444, 0, 0, 0.63287],
              98: [0, 0.69444, 0, 0, 0.52083],
              99: [0, 0.44444, 0, 0, 0.51342],
              100: [0, 0.69444, 0, 0, 0.60972],
              101: [0, 0.44444, 0, 0, 0.55361],
              102: [0.19444, 0.69444, 0.11042, 0, 0.56806],
              103: [0.19444, 0.44444, 0.03704, 0, 0.5449],
              104: [0, 0.69444, 0, 0, 0.66759],
              105: [0, 0.69326, 0, 0, 0.4048],
              106: [0.19444, 0.69326, 0.0622, 0, 0.47083],
              107: [0, 0.69444, 0.01852, 0, 0.6037],
              108: [0, 0.69444, 88e-4, 0, 0.34815],
              109: [0, 0.44444, 0, 0, 1.0324],
              110: [0, 0.44444, 0, 0, 0.71296],
              111: [0, 0.44444, 0, 0, 0.58472],
              112: [0.19444, 0.44444, 0, 0, 0.60092],
              113: [0.19444, 0.44444, 0.03704, 0, 0.54213],
              114: [0, 0.44444, 0.03194, 0, 0.5287],
              115: [0, 0.44444, 0, 0, 0.53125],
              116: [0, 0.63492, 0, 0, 0.41528],
              117: [0, 0.44444, 0, 0, 0.68102],
              118: [0, 0.44444, 0.03704, 0, 0.56666],
              119: [0, 0.44444, 0.02778, 0, 0.83148],
              120: [0, 0.44444, 0, 0, 0.65903],
              121: [0.19444, 0.44444, 0.03704, 0, 0.59028],
              122: [0, 0.44444, 0.04213, 0, 0.55509],
              160: [0, 0, 0, 0, 0.25],
              915: [0, 0.68611, 0.15972, 0, 0.65694],
              916: [0, 0.68611, 0, 0, 0.95833],
              920: [0, 0.68611, 0.03194, 0, 0.86722],
              923: [0, 0.68611, 0, 0, 0.80555],
              926: [0, 0.68611, 0.07458, 0, 0.84125],
              928: [0, 0.68611, 0.08229, 0, 0.98229],
              931: [0, 0.68611, 0.05451, 0, 0.88507],
              933: [0, 0.68611, 0.15972, 0, 0.67083],
              934: [0, 0.68611, 0, 0, 0.76666],
              936: [0, 0.68611, 0.11653, 0, 0.71402],
              937: [0, 0.68611, 0.04835, 0, 0.8789],
              945: [0, 0.44444, 0, 0, 0.76064],
              946: [0.19444, 0.69444, 0.03403, 0, 0.65972],
              947: [0.19444, 0.44444, 0.06389, 0, 0.59003],
              948: [0, 0.69444, 0.03819, 0, 0.52222],
              949: [0, 0.44444, 0, 0, 0.52882],
              950: [0.19444, 0.69444, 0.06215, 0, 0.50833],
              951: [0.19444, 0.44444, 0.03704, 0, 0.6],
              952: [0, 0.69444, 0.03194, 0, 0.5618],
              953: [0, 0.44444, 0, 0, 0.41204],
              954: [0, 0.44444, 0, 0, 0.66759],
              955: [0, 0.69444, 0, 0, 0.67083],
              956: [0.19444, 0.44444, 0, 0, 0.70787],
              957: [0, 0.44444, 0.06898, 0, 0.57685],
              958: [0.19444, 0.69444, 0.03021, 0, 0.50833],
              959: [0, 0.44444, 0, 0, 0.58472],
              960: [0, 0.44444, 0.03704, 0, 0.68241],
              961: [0.19444, 0.44444, 0, 0, 0.6118],
              962: [0.09722, 0.44444, 0.07917, 0, 0.42361],
              963: [0, 0.44444, 0.03704, 0, 0.68588],
              964: [0, 0.44444, 0.13472, 0, 0.52083],
              965: [0, 0.44444, 0.03704, 0, 0.63055],
              966: [0.19444, 0.44444, 0, 0, 0.74722],
              967: [0.19444, 0.44444, 0, 0, 0.71805],
              968: [0.19444, 0.69444, 0.03704, 0, 0.75833],
              969: [0, 0.44444, 0.03704, 0, 0.71782],
              977: [0, 0.69444, 0, 0, 0.69155],
              981: [0.19444, 0.69444, 0, 0, 0.7125],
              982: [0, 0.44444, 0.03194, 0, 0.975],
              1009: [0.19444, 0.44444, 0, 0, 0.6118],
              1013: [0, 0.44444, 0, 0, 0.48333],
              57649: [0, 0.44444, 0, 0, 0.39352],
              57911: [0.19444, 0.44444, 0, 0, 0.43889]
            },
            "Math-Italic": {
              32: [0, 0, 0, 0, 0.25],
              48: [0, 0.43056, 0, 0, 0.5],
              49: [0, 0.43056, 0, 0, 0.5],
              50: [0, 0.43056, 0, 0, 0.5],
              51: [0.19444, 0.43056, 0, 0, 0.5],
              52: [0.19444, 0.43056, 0, 0, 0.5],
              53: [0.19444, 0.43056, 0, 0, 0.5],
              54: [0, 0.64444, 0, 0, 0.5],
              55: [0.19444, 0.43056, 0, 0, 0.5],
              56: [0, 0.64444, 0, 0, 0.5],
              57: [0.19444, 0.43056, 0, 0, 0.5],
              65: [0, 0.68333, 0, 0.13889, 0.75],
              66: [0, 0.68333, 0.05017, 0.08334, 0.75851],
              67: [0, 0.68333, 0.07153, 0.08334, 0.71472],
              68: [0, 0.68333, 0.02778, 0.05556, 0.82792],
              69: [0, 0.68333, 0.05764, 0.08334, 0.7382],
              70: [0, 0.68333, 0.13889, 0.08334, 0.64306],
              71: [0, 0.68333, 0, 0.08334, 0.78625],
              72: [0, 0.68333, 0.08125, 0.05556, 0.83125],
              73: [0, 0.68333, 0.07847, 0.11111, 0.43958],
              74: [0, 0.68333, 0.09618, 0.16667, 0.55451],
              75: [0, 0.68333, 0.07153, 0.05556, 0.84931],
              76: [0, 0.68333, 0, 0.02778, 0.68056],
              77: [0, 0.68333, 0.10903, 0.08334, 0.97014],
              78: [0, 0.68333, 0.10903, 0.08334, 0.80347],
              79: [0, 0.68333, 0.02778, 0.08334, 0.76278],
              80: [0, 0.68333, 0.13889, 0.08334, 0.64201],
              81: [0.19444, 0.68333, 0, 0.08334, 0.79056],
              82: [0, 0.68333, 773e-5, 0.08334, 0.75929],
              83: [0, 0.68333, 0.05764, 0.08334, 0.6132],
              84: [0, 0.68333, 0.13889, 0.08334, 0.58438],
              85: [0, 0.68333, 0.10903, 0.02778, 0.68278],
              86: [0, 0.68333, 0.22222, 0, 0.58333],
              87: [0, 0.68333, 0.13889, 0, 0.94445],
              88: [0, 0.68333, 0.07847, 0.08334, 0.82847],
              89: [0, 0.68333, 0.22222, 0, 0.58056],
              90: [0, 0.68333, 0.07153, 0.08334, 0.68264],
              97: [0, 0.43056, 0, 0, 0.52859],
              98: [0, 0.69444, 0, 0, 0.42917],
              99: [0, 0.43056, 0, 0.05556, 0.43276],
              100: [0, 0.69444, 0, 0.16667, 0.52049],
              101: [0, 0.43056, 0, 0.05556, 0.46563],
              102: [0.19444, 0.69444, 0.10764, 0.16667, 0.48959],
              103: [0.19444, 0.43056, 0.03588, 0.02778, 0.47697],
              104: [0, 0.69444, 0, 0, 0.57616],
              105: [0, 0.65952, 0, 0, 0.34451],
              106: [0.19444, 0.65952, 0.05724, 0, 0.41181],
              107: [0, 0.69444, 0.03148, 0, 0.5206],
              108: [0, 0.69444, 0.01968, 0.08334, 0.29838],
              109: [0, 0.43056, 0, 0, 0.87801],
              110: [0, 0.43056, 0, 0, 0.60023],
              111: [0, 0.43056, 0, 0.05556, 0.48472],
              112: [0.19444, 0.43056, 0, 0.08334, 0.50313],
              113: [0.19444, 0.43056, 0.03588, 0.08334, 0.44641],
              114: [0, 0.43056, 0.02778, 0.05556, 0.45116],
              115: [0, 0.43056, 0, 0.05556, 0.46875],
              116: [0, 0.61508, 0, 0.08334, 0.36111],
              117: [0, 0.43056, 0, 0.02778, 0.57246],
              118: [0, 0.43056, 0.03588, 0.02778, 0.48472],
              119: [0, 0.43056, 0.02691, 0.08334, 0.71592],
              120: [0, 0.43056, 0, 0.02778, 0.57153],
              121: [0.19444, 0.43056, 0.03588, 0.05556, 0.49028],
              122: [0, 0.43056, 0.04398, 0.05556, 0.46505],
              160: [0, 0, 0, 0, 0.25],
              915: [0, 0.68333, 0.13889, 0.08334, 0.61528],
              916: [0, 0.68333, 0, 0.16667, 0.83334],
              920: [0, 0.68333, 0.02778, 0.08334, 0.76278],
              923: [0, 0.68333, 0, 0.16667, 0.69445],
              926: [0, 0.68333, 0.07569, 0.08334, 0.74236],
              928: [0, 0.68333, 0.08125, 0.05556, 0.83125],
              931: [0, 0.68333, 0.05764, 0.08334, 0.77986],
              933: [0, 0.68333, 0.13889, 0.05556, 0.58333],
              934: [0, 0.68333, 0, 0.08334, 0.66667],
              936: [0, 0.68333, 0.11, 0.05556, 0.61222],
              937: [0, 0.68333, 0.05017, 0.08334, 0.7724],
              945: [0, 0.43056, 37e-4, 0.02778, 0.6397],
              946: [0.19444, 0.69444, 0.05278, 0.08334, 0.56563],
              947: [0.19444, 0.43056, 0.05556, 0, 0.51773],
              948: [0, 0.69444, 0.03785, 0.05556, 0.44444],
              949: [0, 0.43056, 0, 0.08334, 0.46632],
              950: [0.19444, 0.69444, 0.07378, 0.08334, 0.4375],
              951: [0.19444, 0.43056, 0.03588, 0.05556, 0.49653],
              952: [0, 0.69444, 0.02778, 0.08334, 0.46944],
              953: [0, 0.43056, 0, 0.05556, 0.35394],
              954: [0, 0.43056, 0, 0, 0.57616],
              955: [0, 0.69444, 0, 0, 0.58334],
              956: [0.19444, 0.43056, 0, 0.02778, 0.60255],
              957: [0, 0.43056, 0.06366, 0.02778, 0.49398],
              958: [0.19444, 0.69444, 0.04601, 0.11111, 0.4375],
              959: [0, 0.43056, 0, 0.05556, 0.48472],
              960: [0, 0.43056, 0.03588, 0, 0.57003],
              961: [0.19444, 0.43056, 0, 0.08334, 0.51702],
              962: [0.09722, 0.43056, 0.07986, 0.08334, 0.36285],
              963: [0, 0.43056, 0.03588, 0, 0.57141],
              964: [0, 0.43056, 0.1132, 0.02778, 0.43715],
              965: [0, 0.43056, 0.03588, 0.02778, 0.54028],
              966: [0.19444, 0.43056, 0, 0.08334, 0.65417],
              967: [0.19444, 0.43056, 0, 0.05556, 0.62569],
              968: [0.19444, 0.69444, 0.03588, 0.11111, 0.65139],
              969: [0, 0.43056, 0.03588, 0, 0.62245],
              977: [0, 0.69444, 0, 0.08334, 0.59144],
              981: [0.19444, 0.69444, 0, 0.08334, 0.59583],
              982: [0, 0.43056, 0.02778, 0, 0.82813],
              1009: [0.19444, 0.43056, 0, 0.08334, 0.51702],
              1013: [0, 0.43056, 0, 0.05556, 0.4059],
              57649: [0, 0.43056, 0, 0.02778, 0.32246],
              57911: [0.19444, 0.43056, 0, 0.08334, 0.38403]
            },
            "SansSerif-Bold": {
              32: [0, 0, 0, 0, 0.25],
              33: [0, 0.69444, 0, 0, 0.36667],
              34: [0, 0.69444, 0, 0, 0.55834],
              35: [0.19444, 0.69444, 0, 0, 0.91667],
              36: [0.05556, 0.75, 0, 0, 0.55],
              37: [0.05556, 0.75, 0, 0, 1.02912],
              38: [0, 0.69444, 0, 0, 0.83056],
              39: [0, 0.69444, 0, 0, 0.30556],
              40: [0.25, 0.75, 0, 0, 0.42778],
              41: [0.25, 0.75, 0, 0, 0.42778],
              42: [0, 0.75, 0, 0, 0.55],
              43: [0.11667, 0.61667, 0, 0, 0.85556],
              44: [0.10556, 0.13056, 0, 0, 0.30556],
              45: [0, 0.45833, 0, 0, 0.36667],
              46: [0, 0.13056, 0, 0, 0.30556],
              47: [0.25, 0.75, 0, 0, 0.55],
              48: [0, 0.69444, 0, 0, 0.55],
              49: [0, 0.69444, 0, 0, 0.55],
              50: [0, 0.69444, 0, 0, 0.55],
              51: [0, 0.69444, 0, 0, 0.55],
              52: [0, 0.69444, 0, 0, 0.55],
              53: [0, 0.69444, 0, 0, 0.55],
              54: [0, 0.69444, 0, 0, 0.55],
              55: [0, 0.69444, 0, 0, 0.55],
              56: [0, 0.69444, 0, 0, 0.55],
              57: [0, 0.69444, 0, 0, 0.55],
              58: [0, 0.45833, 0, 0, 0.30556],
              59: [0.10556, 0.45833, 0, 0, 0.30556],
              61: [-0.09375, 0.40625, 0, 0, 0.85556],
              63: [0, 0.69444, 0, 0, 0.51945],
              64: [0, 0.69444, 0, 0, 0.73334],
              65: [0, 0.69444, 0, 0, 0.73334],
              66: [0, 0.69444, 0, 0, 0.73334],
              67: [0, 0.69444, 0, 0, 0.70278],
              68: [0, 0.69444, 0, 0, 0.79445],
              69: [0, 0.69444, 0, 0, 0.64167],
              70: [0, 0.69444, 0, 0, 0.61111],
              71: [0, 0.69444, 0, 0, 0.73334],
              72: [0, 0.69444, 0, 0, 0.79445],
              73: [0, 0.69444, 0, 0, 0.33056],
              74: [0, 0.69444, 0, 0, 0.51945],
              75: [0, 0.69444, 0, 0, 0.76389],
              76: [0, 0.69444, 0, 0, 0.58056],
              77: [0, 0.69444, 0, 0, 0.97778],
              78: [0, 0.69444, 0, 0, 0.79445],
              79: [0, 0.69444, 0, 0, 0.79445],
              80: [0, 0.69444, 0, 0, 0.70278],
              81: [0.10556, 0.69444, 0, 0, 0.79445],
              82: [0, 0.69444, 0, 0, 0.70278],
              83: [0, 0.69444, 0, 0, 0.61111],
              84: [0, 0.69444, 0, 0, 0.73334],
              85: [0, 0.69444, 0, 0, 0.76389],
              86: [0, 0.69444, 0.01528, 0, 0.73334],
              87: [0, 0.69444, 0.01528, 0, 1.03889],
              88: [0, 0.69444, 0, 0, 0.73334],
              89: [0, 0.69444, 0.0275, 0, 0.73334],
              90: [0, 0.69444, 0, 0, 0.67223],
              91: [0.25, 0.75, 0, 0, 0.34306],
              93: [0.25, 0.75, 0, 0, 0.34306],
              94: [0, 0.69444, 0, 0, 0.55],
              95: [0.35, 0.10833, 0.03056, 0, 0.55],
              97: [0, 0.45833, 0, 0, 0.525],
              98: [0, 0.69444, 0, 0, 0.56111],
              99: [0, 0.45833, 0, 0, 0.48889],
              100: [0, 0.69444, 0, 0, 0.56111],
              101: [0, 0.45833, 0, 0, 0.51111],
              102: [0, 0.69444, 0.07639, 0, 0.33611],
              103: [0.19444, 0.45833, 0.01528, 0, 0.55],
              104: [0, 0.69444, 0, 0, 0.56111],
              105: [0, 0.69444, 0, 0, 0.25556],
              106: [0.19444, 0.69444, 0, 0, 0.28611],
              107: [0, 0.69444, 0, 0, 0.53056],
              108: [0, 0.69444, 0, 0, 0.25556],
              109: [0, 0.45833, 0, 0, 0.86667],
              110: [0, 0.45833, 0, 0, 0.56111],
              111: [0, 0.45833, 0, 0, 0.55],
              112: [0.19444, 0.45833, 0, 0, 0.56111],
              113: [0.19444, 0.45833, 0, 0, 0.56111],
              114: [0, 0.45833, 0.01528, 0, 0.37222],
              115: [0, 0.45833, 0, 0, 0.42167],
              116: [0, 0.58929, 0, 0, 0.40417],
              117: [0, 0.45833, 0, 0, 0.56111],
              118: [0, 0.45833, 0.01528, 0, 0.5],
              119: [0, 0.45833, 0.01528, 0, 0.74445],
              120: [0, 0.45833, 0, 0, 0.5],
              121: [0.19444, 0.45833, 0.01528, 0, 0.5],
              122: [0, 0.45833, 0, 0, 0.47639],
              126: [0.35, 0.34444, 0, 0, 0.55],
              160: [0, 0, 0, 0, 0.25],
              168: [0, 0.69444, 0, 0, 0.55],
              176: [0, 0.69444, 0, 0, 0.73334],
              180: [0, 0.69444, 0, 0, 0.55],
              184: [0.17014, 0, 0, 0, 0.48889],
              305: [0, 0.45833, 0, 0, 0.25556],
              567: [0.19444, 0.45833, 0, 0, 0.28611],
              710: [0, 0.69444, 0, 0, 0.55],
              711: [0, 0.63542, 0, 0, 0.55],
              713: [0, 0.63778, 0, 0, 0.55],
              728: [0, 0.69444, 0, 0, 0.55],
              729: [0, 0.69444, 0, 0, 0.30556],
              730: [0, 0.69444, 0, 0, 0.73334],
              732: [0, 0.69444, 0, 0, 0.55],
              733: [0, 0.69444, 0, 0, 0.55],
              915: [0, 0.69444, 0, 0, 0.58056],
              916: [0, 0.69444, 0, 0, 0.91667],
              920: [0, 0.69444, 0, 0, 0.85556],
              923: [0, 0.69444, 0, 0, 0.67223],
              926: [0, 0.69444, 0, 0, 0.73334],
              928: [0, 0.69444, 0, 0, 0.79445],
              931: [0, 0.69444, 0, 0, 0.79445],
              933: [0, 0.69444, 0, 0, 0.85556],
              934: [0, 0.69444, 0, 0, 0.79445],
              936: [0, 0.69444, 0, 0, 0.85556],
              937: [0, 0.69444, 0, 0, 0.79445],
              8211: [0, 0.45833, 0.03056, 0, 0.55],
              8212: [0, 0.45833, 0.03056, 0, 1.10001],
              8216: [0, 0.69444, 0, 0, 0.30556],
              8217: [0, 0.69444, 0, 0, 0.30556],
              8220: [0, 0.69444, 0, 0, 0.55834],
              8221: [0, 0.69444, 0, 0, 0.55834]
            },
            "SansSerif-Italic": {
              32: [0, 0, 0, 0, 0.25],
              33: [0, 0.69444, 0.05733, 0, 0.31945],
              34: [0, 0.69444, 316e-5, 0, 0.5],
              35: [0.19444, 0.69444, 0.05087, 0, 0.83334],
              36: [0.05556, 0.75, 0.11156, 0, 0.5],
              37: [0.05556, 0.75, 0.03126, 0, 0.83334],
              38: [0, 0.69444, 0.03058, 0, 0.75834],
              39: [0, 0.69444, 0.07816, 0, 0.27778],
              40: [0.25, 0.75, 0.13164, 0, 0.38889],
              41: [0.25, 0.75, 0.02536, 0, 0.38889],
              42: [0, 0.75, 0.11775, 0, 0.5],
              43: [0.08333, 0.58333, 0.02536, 0, 0.77778],
              44: [0.125, 0.08333, 0, 0, 0.27778],
              45: [0, 0.44444, 0.01946, 0, 0.33333],
              46: [0, 0.08333, 0, 0, 0.27778],
              47: [0.25, 0.75, 0.13164, 0, 0.5],
              48: [0, 0.65556, 0.11156, 0, 0.5],
              49: [0, 0.65556, 0.11156, 0, 0.5],
              50: [0, 0.65556, 0.11156, 0, 0.5],
              51: [0, 0.65556, 0.11156, 0, 0.5],
              52: [0, 0.65556, 0.11156, 0, 0.5],
              53: [0, 0.65556, 0.11156, 0, 0.5],
              54: [0, 0.65556, 0.11156, 0, 0.5],
              55: [0, 0.65556, 0.11156, 0, 0.5],
              56: [0, 0.65556, 0.11156, 0, 0.5],
              57: [0, 0.65556, 0.11156, 0, 0.5],
              58: [0, 0.44444, 0.02502, 0, 0.27778],
              59: [0.125, 0.44444, 0.02502, 0, 0.27778],
              61: [-0.13, 0.37, 0.05087, 0, 0.77778],
              63: [0, 0.69444, 0.11809, 0, 0.47222],
              64: [0, 0.69444, 0.07555, 0, 0.66667],
              65: [0, 0.69444, 0, 0, 0.66667],
              66: [0, 0.69444, 0.08293, 0, 0.66667],
              67: [0, 0.69444, 0.11983, 0, 0.63889],
              68: [0, 0.69444, 0.07555, 0, 0.72223],
              69: [0, 0.69444, 0.11983, 0, 0.59722],
              70: [0, 0.69444, 0.13372, 0, 0.56945],
              71: [0, 0.69444, 0.11983, 0, 0.66667],
              72: [0, 0.69444, 0.08094, 0, 0.70834],
              73: [0, 0.69444, 0.13372, 0, 0.27778],
              74: [0, 0.69444, 0.08094, 0, 0.47222],
              75: [0, 0.69444, 0.11983, 0, 0.69445],
              76: [0, 0.69444, 0, 0, 0.54167],
              77: [0, 0.69444, 0.08094, 0, 0.875],
              78: [0, 0.69444, 0.08094, 0, 0.70834],
              79: [0, 0.69444, 0.07555, 0, 0.73611],
              80: [0, 0.69444, 0.08293, 0, 0.63889],
              81: [0.125, 0.69444, 0.07555, 0, 0.73611],
              82: [0, 0.69444, 0.08293, 0, 0.64584],
              83: [0, 0.69444, 0.09205, 0, 0.55556],
              84: [0, 0.69444, 0.13372, 0, 0.68056],
              85: [0, 0.69444, 0.08094, 0, 0.6875],
              86: [0, 0.69444, 0.1615, 0, 0.66667],
              87: [0, 0.69444, 0.1615, 0, 0.94445],
              88: [0, 0.69444, 0.13372, 0, 0.66667],
              89: [0, 0.69444, 0.17261, 0, 0.66667],
              90: [0, 0.69444, 0.11983, 0, 0.61111],
              91: [0.25, 0.75, 0.15942, 0, 0.28889],
              93: [0.25, 0.75, 0.08719, 0, 0.28889],
              94: [0, 0.69444, 0.0799, 0, 0.5],
              95: [0.35, 0.09444, 0.08616, 0, 0.5],
              97: [0, 0.44444, 981e-5, 0, 0.48056],
              98: [0, 0.69444, 0.03057, 0, 0.51667],
              99: [0, 0.44444, 0.08336, 0, 0.44445],
              100: [0, 0.69444, 0.09483, 0, 0.51667],
              101: [0, 0.44444, 0.06778, 0, 0.44445],
              102: [0, 0.69444, 0.21705, 0, 0.30556],
              103: [0.19444, 0.44444, 0.10836, 0, 0.5],
              104: [0, 0.69444, 0.01778, 0, 0.51667],
              105: [0, 0.67937, 0.09718, 0, 0.23889],
              106: [0.19444, 0.67937, 0.09162, 0, 0.26667],
              107: [0, 0.69444, 0.08336, 0, 0.48889],
              108: [0, 0.69444, 0.09483, 0, 0.23889],
              109: [0, 0.44444, 0.01778, 0, 0.79445],
              110: [0, 0.44444, 0.01778, 0, 0.51667],
              111: [0, 0.44444, 0.06613, 0, 0.5],
              112: [0.19444, 0.44444, 0.0389, 0, 0.51667],
              113: [0.19444, 0.44444, 0.04169, 0, 0.51667],
              114: [0, 0.44444, 0.10836, 0, 0.34167],
              115: [0, 0.44444, 0.0778, 0, 0.38333],
              116: [0, 0.57143, 0.07225, 0, 0.36111],
              117: [0, 0.44444, 0.04169, 0, 0.51667],
              118: [0, 0.44444, 0.10836, 0, 0.46111],
              119: [0, 0.44444, 0.10836, 0, 0.68334],
              120: [0, 0.44444, 0.09169, 0, 0.46111],
              121: [0.19444, 0.44444, 0.10836, 0, 0.46111],
              122: [0, 0.44444, 0.08752, 0, 0.43472],
              126: [0.35, 0.32659, 0.08826, 0, 0.5],
              160: [0, 0, 0, 0, 0.25],
              168: [0, 0.67937, 0.06385, 0, 0.5],
              176: [0, 0.69444, 0, 0, 0.73752],
              184: [0.17014, 0, 0, 0, 0.44445],
              305: [0, 0.44444, 0.04169, 0, 0.23889],
              567: [0.19444, 0.44444, 0.04169, 0, 0.26667],
              710: [0, 0.69444, 0.0799, 0, 0.5],
              711: [0, 0.63194, 0.08432, 0, 0.5],
              713: [0, 0.60889, 0.08776, 0, 0.5],
              714: [0, 0.69444, 0.09205, 0, 0.5],
              715: [0, 0.69444, 0, 0, 0.5],
              728: [0, 0.69444, 0.09483, 0, 0.5],
              729: [0, 0.67937, 0.07774, 0, 0.27778],
              730: [0, 0.69444, 0, 0, 0.73752],
              732: [0, 0.67659, 0.08826, 0, 0.5],
              733: [0, 0.69444, 0.09205, 0, 0.5],
              915: [0, 0.69444, 0.13372, 0, 0.54167],
              916: [0, 0.69444, 0, 0, 0.83334],
              920: [0, 0.69444, 0.07555, 0, 0.77778],
              923: [0, 0.69444, 0, 0, 0.61111],
              926: [0, 0.69444, 0.12816, 0, 0.66667],
              928: [0, 0.69444, 0.08094, 0, 0.70834],
              931: [0, 0.69444, 0.11983, 0, 0.72222],
              933: [0, 0.69444, 0.09031, 0, 0.77778],
              934: [0, 0.69444, 0.04603, 0, 0.72222],
              936: [0, 0.69444, 0.09031, 0, 0.77778],
              937: [0, 0.69444, 0.08293, 0, 0.72222],
              8211: [0, 0.44444, 0.08616, 0, 0.5],
              8212: [0, 0.44444, 0.08616, 0, 1],
              8216: [0, 0.69444, 0.07816, 0, 0.27778],
              8217: [0, 0.69444, 0.07816, 0, 0.27778],
              8220: [0, 0.69444, 0.14205, 0, 0.5],
              8221: [0, 0.69444, 316e-5, 0, 0.5]
            },
            "SansSerif-Regular": {
              32: [0, 0, 0, 0, 0.25],
              33: [0, 0.69444, 0, 0, 0.31945],
              34: [0, 0.69444, 0, 0, 0.5],
              35: [0.19444, 0.69444, 0, 0, 0.83334],
              36: [0.05556, 0.75, 0, 0, 0.5],
              37: [0.05556, 0.75, 0, 0, 0.83334],
              38: [0, 0.69444, 0, 0, 0.75834],
              39: [0, 0.69444, 0, 0, 0.27778],
              40: [0.25, 0.75, 0, 0, 0.38889],
              41: [0.25, 0.75, 0, 0, 0.38889],
              42: [0, 0.75, 0, 0, 0.5],
              43: [0.08333, 0.58333, 0, 0, 0.77778],
              44: [0.125, 0.08333, 0, 0, 0.27778],
              45: [0, 0.44444, 0, 0, 0.33333],
              46: [0, 0.08333, 0, 0, 0.27778],
              47: [0.25, 0.75, 0, 0, 0.5],
              48: [0, 0.65556, 0, 0, 0.5],
              49: [0, 0.65556, 0, 0, 0.5],
              50: [0, 0.65556, 0, 0, 0.5],
              51: [0, 0.65556, 0, 0, 0.5],
              52: [0, 0.65556, 0, 0, 0.5],
              53: [0, 0.65556, 0, 0, 0.5],
              54: [0, 0.65556, 0, 0, 0.5],
              55: [0, 0.65556, 0, 0, 0.5],
              56: [0, 0.65556, 0, 0, 0.5],
              57: [0, 0.65556, 0, 0, 0.5],
              58: [0, 0.44444, 0, 0, 0.27778],
              59: [0.125, 0.44444, 0, 0, 0.27778],
              61: [-0.13, 0.37, 0, 0, 0.77778],
              63: [0, 0.69444, 0, 0, 0.47222],
              64: [0, 0.69444, 0, 0, 0.66667],
              65: [0, 0.69444, 0, 0, 0.66667],
              66: [0, 0.69444, 0, 0, 0.66667],
              67: [0, 0.69444, 0, 0, 0.63889],
              68: [0, 0.69444, 0, 0, 0.72223],
              69: [0, 0.69444, 0, 0, 0.59722],
              70: [0, 0.69444, 0, 0, 0.56945],
              71: [0, 0.69444, 0, 0, 0.66667],
              72: [0, 0.69444, 0, 0, 0.70834],
              73: [0, 0.69444, 0, 0, 0.27778],
              74: [0, 0.69444, 0, 0, 0.47222],
              75: [0, 0.69444, 0, 0, 0.69445],
              76: [0, 0.69444, 0, 0, 0.54167],
              77: [0, 0.69444, 0, 0, 0.875],
              78: [0, 0.69444, 0, 0, 0.70834],
              79: [0, 0.69444, 0, 0, 0.73611],
              80: [0, 0.69444, 0, 0, 0.63889],
              81: [0.125, 0.69444, 0, 0, 0.73611],
              82: [0, 0.69444, 0, 0, 0.64584],
              83: [0, 0.69444, 0, 0, 0.55556],
              84: [0, 0.69444, 0, 0, 0.68056],
              85: [0, 0.69444, 0, 0, 0.6875],
              86: [0, 0.69444, 0.01389, 0, 0.66667],
              87: [0, 0.69444, 0.01389, 0, 0.94445],
              88: [0, 0.69444, 0, 0, 0.66667],
              89: [0, 0.69444, 0.025, 0, 0.66667],
              90: [0, 0.69444, 0, 0, 0.61111],
              91: [0.25, 0.75, 0, 0, 0.28889],
              93: [0.25, 0.75, 0, 0, 0.28889],
              94: [0, 0.69444, 0, 0, 0.5],
              95: [0.35, 0.09444, 0.02778, 0, 0.5],
              97: [0, 0.44444, 0, 0, 0.48056],
              98: [0, 0.69444, 0, 0, 0.51667],
              99: [0, 0.44444, 0, 0, 0.44445],
              100: [0, 0.69444, 0, 0, 0.51667],
              101: [0, 0.44444, 0, 0, 0.44445],
              102: [0, 0.69444, 0.06944, 0, 0.30556],
              103: [0.19444, 0.44444, 0.01389, 0, 0.5],
              104: [0, 0.69444, 0, 0, 0.51667],
              105: [0, 0.67937, 0, 0, 0.23889],
              106: [0.19444, 0.67937, 0, 0, 0.26667],
              107: [0, 0.69444, 0, 0, 0.48889],
              108: [0, 0.69444, 0, 0, 0.23889],
              109: [0, 0.44444, 0, 0, 0.79445],
              110: [0, 0.44444, 0, 0, 0.51667],
              111: [0, 0.44444, 0, 0, 0.5],
              112: [0.19444, 0.44444, 0, 0, 0.51667],
              113: [0.19444, 0.44444, 0, 0, 0.51667],
              114: [0, 0.44444, 0.01389, 0, 0.34167],
              115: [0, 0.44444, 0, 0, 0.38333],
              116: [0, 0.57143, 0, 0, 0.36111],
              117: [0, 0.44444, 0, 0, 0.51667],
              118: [0, 0.44444, 0.01389, 0, 0.46111],
              119: [0, 0.44444, 0.01389, 0, 0.68334],
              120: [0, 0.44444, 0, 0, 0.46111],
              121: [0.19444, 0.44444, 0.01389, 0, 0.46111],
              122: [0, 0.44444, 0, 0, 0.43472],
              126: [0.35, 0.32659, 0, 0, 0.5],
              160: [0, 0, 0, 0, 0.25],
              168: [0, 0.67937, 0, 0, 0.5],
              176: [0, 0.69444, 0, 0, 0.66667],
              184: [0.17014, 0, 0, 0, 0.44445],
              305: [0, 0.44444, 0, 0, 0.23889],
              567: [0.19444, 0.44444, 0, 0, 0.26667],
              710: [0, 0.69444, 0, 0, 0.5],
              711: [0, 0.63194, 0, 0, 0.5],
              713: [0, 0.60889, 0, 0, 0.5],
              714: [0, 0.69444, 0, 0, 0.5],
              715: [0, 0.69444, 0, 0, 0.5],
              728: [0, 0.69444, 0, 0, 0.5],
              729: [0, 0.67937, 0, 0, 0.27778],
              730: [0, 0.69444, 0, 0, 0.66667],
              732: [0, 0.67659, 0, 0, 0.5],
              733: [0, 0.69444, 0, 0, 0.5],
              915: [0, 0.69444, 0, 0, 0.54167],
              916: [0, 0.69444, 0, 0, 0.83334],
              920: [0, 0.69444, 0, 0, 0.77778],
              923: [0, 0.69444, 0, 0, 0.61111],
              926: [0, 0.69444, 0, 0, 0.66667],
              928: [0, 0.69444, 0, 0, 0.70834],
              931: [0, 0.69444, 0, 0, 0.72222],
              933: [0, 0.69444, 0, 0, 0.77778],
              934: [0, 0.69444, 0, 0, 0.72222],
              936: [0, 0.69444, 0, 0, 0.77778],
              937: [0, 0.69444, 0, 0, 0.72222],
              8211: [0, 0.44444, 0.02778, 0, 0.5],
              8212: [0, 0.44444, 0.02778, 0, 1],
              8216: [0, 0.69444, 0, 0, 0.27778],
              8217: [0, 0.69444, 0, 0, 0.27778],
              8220: [0, 0.69444, 0, 0, 0.5],
              8221: [0, 0.69444, 0, 0, 0.5]
            },
            "Script-Regular": {
              32: [0, 0, 0, 0, 0.25],
              65: [0, 0.7, 0.22925, 0, 0.80253],
              66: [0, 0.7, 0.04087, 0, 0.90757],
              67: [0, 0.7, 0.1689, 0, 0.66619],
              68: [0, 0.7, 0.09371, 0, 0.77443],
              69: [0, 0.7, 0.18583, 0, 0.56162],
              70: [0, 0.7, 0.13634, 0, 0.89544],
              71: [0, 0.7, 0.17322, 0, 0.60961],
              72: [0, 0.7, 0.29694, 0, 0.96919],
              73: [0, 0.7, 0.19189, 0, 0.80907],
              74: [0.27778, 0.7, 0.19189, 0, 1.05159],
              75: [0, 0.7, 0.31259, 0, 0.91364],
              76: [0, 0.7, 0.19189, 0, 0.87373],
              77: [0, 0.7, 0.15981, 0, 1.08031],
              78: [0, 0.7, 0.3525, 0, 0.9015],
              79: [0, 0.7, 0.08078, 0, 0.73787],
              80: [0, 0.7, 0.08078, 0, 1.01262],
              81: [0, 0.7, 0.03305, 0, 0.88282],
              82: [0, 0.7, 0.06259, 0, 0.85],
              83: [0, 0.7, 0.19189, 0, 0.86767],
              84: [0, 0.7, 0.29087, 0, 0.74697],
              85: [0, 0.7, 0.25815, 0, 0.79996],
              86: [0, 0.7, 0.27523, 0, 0.62204],
              87: [0, 0.7, 0.27523, 0, 0.80532],
              88: [0, 0.7, 0.26006, 0, 0.94445],
              89: [0, 0.7, 0.2939, 0, 0.70961],
              90: [0, 0.7, 0.24037, 0, 0.8212],
              160: [0, 0, 0, 0, 0.25]
            },
            "Size1-Regular": {
              32: [0, 0, 0, 0, 0.25],
              40: [0.35001, 0.85, 0, 0, 0.45834],
              41: [0.35001, 0.85, 0, 0, 0.45834],
              47: [0.35001, 0.85, 0, 0, 0.57778],
              91: [0.35001, 0.85, 0, 0, 0.41667],
              92: [0.35001, 0.85, 0, 0, 0.57778],
              93: [0.35001, 0.85, 0, 0, 0.41667],
              123: [0.35001, 0.85, 0, 0, 0.58334],
              125: [0.35001, 0.85, 0, 0, 0.58334],
              160: [0, 0, 0, 0, 0.25],
              710: [0, 0.72222, 0, 0, 0.55556],
              732: [0, 0.72222, 0, 0, 0.55556],
              770: [0, 0.72222, 0, 0, 0.55556],
              771: [0, 0.72222, 0, 0, 0.55556],
              8214: [-99e-5, 0.601, 0, 0, 0.77778],
              8593: [1e-5, 0.6, 0, 0, 0.66667],
              8595: [1e-5, 0.6, 0, 0, 0.66667],
              8657: [1e-5, 0.6, 0, 0, 0.77778],
              8659: [1e-5, 0.6, 0, 0, 0.77778],
              8719: [0.25001, 0.75, 0, 0, 0.94445],
              8720: [0.25001, 0.75, 0, 0, 0.94445],
              8721: [0.25001, 0.75, 0, 0, 1.05556],
              8730: [0.35001, 0.85, 0, 0, 1],
              8739: [-599e-5, 0.606, 0, 0, 0.33333],
              8741: [-599e-5, 0.606, 0, 0, 0.55556],
              8747: [0.30612, 0.805, 0.19445, 0, 0.47222],
              8748: [0.306, 0.805, 0.19445, 0, 0.47222],
              8749: [0.306, 0.805, 0.19445, 0, 0.47222],
              8750: [0.30612, 0.805, 0.19445, 0, 0.47222],
              8896: [0.25001, 0.75, 0, 0, 0.83334],
              8897: [0.25001, 0.75, 0, 0, 0.83334],
              8898: [0.25001, 0.75, 0, 0, 0.83334],
              8899: [0.25001, 0.75, 0, 0, 0.83334],
              8968: [0.35001, 0.85, 0, 0, 0.47222],
              8969: [0.35001, 0.85, 0, 0, 0.47222],
              8970: [0.35001, 0.85, 0, 0, 0.47222],
              8971: [0.35001, 0.85, 0, 0, 0.47222],
              9168: [-99e-5, 0.601, 0, 0, 0.66667],
              10216: [0.35001, 0.85, 0, 0, 0.47222],
              10217: [0.35001, 0.85, 0, 0, 0.47222],
              10752: [0.25001, 0.75, 0, 0, 1.11111],
              10753: [0.25001, 0.75, 0, 0, 1.11111],
              10754: [0.25001, 0.75, 0, 0, 1.11111],
              10756: [0.25001, 0.75, 0, 0, 0.83334],
              10758: [0.25001, 0.75, 0, 0, 0.83334]
            },
            "Size2-Regular": {
              32: [0, 0, 0, 0, 0.25],
              40: [0.65002, 1.15, 0, 0, 0.59722],
              41: [0.65002, 1.15, 0, 0, 0.59722],
              47: [0.65002, 1.15, 0, 0, 0.81111],
              91: [0.65002, 1.15, 0, 0, 0.47222],
              92: [0.65002, 1.15, 0, 0, 0.81111],
              93: [0.65002, 1.15, 0, 0, 0.47222],
              123: [0.65002, 1.15, 0, 0, 0.66667],
              125: [0.65002, 1.15, 0, 0, 0.66667],
              160: [0, 0, 0, 0, 0.25],
              710: [0, 0.75, 0, 0, 1],
              732: [0, 0.75, 0, 0, 1],
              770: [0, 0.75, 0, 0, 1],
              771: [0, 0.75, 0, 0, 1],
              8719: [0.55001, 1.05, 0, 0, 1.27778],
              8720: [0.55001, 1.05, 0, 0, 1.27778],
              8721: [0.55001, 1.05, 0, 0, 1.44445],
              8730: [0.65002, 1.15, 0, 0, 1],
              8747: [0.86225, 1.36, 0.44445, 0, 0.55556],
              8748: [0.862, 1.36, 0.44445, 0, 0.55556],
              8749: [0.862, 1.36, 0.44445, 0, 0.55556],
              8750: [0.86225, 1.36, 0.44445, 0, 0.55556],
              8896: [0.55001, 1.05, 0, 0, 1.11111],
              8897: [0.55001, 1.05, 0, 0, 1.11111],
              8898: [0.55001, 1.05, 0, 0, 1.11111],
              8899: [0.55001, 1.05, 0, 0, 1.11111],
              8968: [0.65002, 1.15, 0, 0, 0.52778],
              8969: [0.65002, 1.15, 0, 0, 0.52778],
              8970: [0.65002, 1.15, 0, 0, 0.52778],
              8971: [0.65002, 1.15, 0, 0, 0.52778],
              10216: [0.65002, 1.15, 0, 0, 0.61111],
              10217: [0.65002, 1.15, 0, 0, 0.61111],
              10752: [0.55001, 1.05, 0, 0, 1.51112],
              10753: [0.55001, 1.05, 0, 0, 1.51112],
              10754: [0.55001, 1.05, 0, 0, 1.51112],
              10756: [0.55001, 1.05, 0, 0, 1.11111],
              10758: [0.55001, 1.05, 0, 0, 1.11111]
            },
            "Size3-Regular": {
              32: [0, 0, 0, 0, 0.25],
              40: [0.95003, 1.45, 0, 0, 0.73611],
              41: [0.95003, 1.45, 0, 0, 0.73611],
              47: [0.95003, 1.45, 0, 0, 1.04445],
              91: [0.95003, 1.45, 0, 0, 0.52778],
              92: [0.95003, 1.45, 0, 0, 1.04445],
              93: [0.95003, 1.45, 0, 0, 0.52778],
              123: [0.95003, 1.45, 0, 0, 0.75],
              125: [0.95003, 1.45, 0, 0, 0.75],
              160: [0, 0, 0, 0, 0.25],
              710: [0, 0.75, 0, 0, 1.44445],
              732: [0, 0.75, 0, 0, 1.44445],
              770: [0, 0.75, 0, 0, 1.44445],
              771: [0, 0.75, 0, 0, 1.44445],
              8730: [0.95003, 1.45, 0, 0, 1],
              8968: [0.95003, 1.45, 0, 0, 0.58334],
              8969: [0.95003, 1.45, 0, 0, 0.58334],
              8970: [0.95003, 1.45, 0, 0, 0.58334],
              8971: [0.95003, 1.45, 0, 0, 0.58334],
              10216: [0.95003, 1.45, 0, 0, 0.75],
              10217: [0.95003, 1.45, 0, 0, 0.75]
            },
            "Size4-Regular": {
              32: [0, 0, 0, 0, 0.25],
              40: [1.25003, 1.75, 0, 0, 0.79167],
              41: [1.25003, 1.75, 0, 0, 0.79167],
              47: [1.25003, 1.75, 0, 0, 1.27778],
              91: [1.25003, 1.75, 0, 0, 0.58334],
              92: [1.25003, 1.75, 0, 0, 1.27778],
              93: [1.25003, 1.75, 0, 0, 0.58334],
              123: [1.25003, 1.75, 0, 0, 0.80556],
              125: [1.25003, 1.75, 0, 0, 0.80556],
              160: [0, 0, 0, 0, 0.25],
              710: [0, 0.825, 0, 0, 1.8889],
              732: [0, 0.825, 0, 0, 1.8889],
              770: [0, 0.825, 0, 0, 1.8889],
              771: [0, 0.825, 0, 0, 1.8889],
              8730: [1.25003, 1.75, 0, 0, 1],
              8968: [1.25003, 1.75, 0, 0, 0.63889],
              8969: [1.25003, 1.75, 0, 0, 0.63889],
              8970: [1.25003, 1.75, 0, 0, 0.63889],
              8971: [1.25003, 1.75, 0, 0, 0.63889],
              9115: [0.64502, 1.155, 0, 0, 0.875],
              9116: [1e-5, 0.6, 0, 0, 0.875],
              9117: [0.64502, 1.155, 0, 0, 0.875],
              9118: [0.64502, 1.155, 0, 0, 0.875],
              9119: [1e-5, 0.6, 0, 0, 0.875],
              9120: [0.64502, 1.155, 0, 0, 0.875],
              9121: [0.64502, 1.155, 0, 0, 0.66667],
              9122: [-99e-5, 0.601, 0, 0, 0.66667],
              9123: [0.64502, 1.155, 0, 0, 0.66667],
              9124: [0.64502, 1.155, 0, 0, 0.66667],
              9125: [-99e-5, 0.601, 0, 0, 0.66667],
              9126: [0.64502, 1.155, 0, 0, 0.66667],
              9127: [1e-5, 0.9, 0, 0, 0.88889],
              9128: [0.65002, 1.15, 0, 0, 0.88889],
              9129: [0.90001, 0, 0, 0, 0.88889],
              9130: [0, 0.3, 0, 0, 0.88889],
              9131: [1e-5, 0.9, 0, 0, 0.88889],
              9132: [0.65002, 1.15, 0, 0, 0.88889],
              9133: [0.90001, 0, 0, 0, 0.88889],
              9143: [0.88502, 0.915, 0, 0, 1.05556],
              10216: [1.25003, 1.75, 0, 0, 0.80556],
              10217: [1.25003, 1.75, 0, 0, 0.80556],
              57344: [-499e-5, 0.605, 0, 0, 1.05556],
              57345: [-499e-5, 0.605, 0, 0, 1.05556],
              57680: [0, 0.12, 0, 0, 0.45],
              57681: [0, 0.12, 0, 0, 0.45],
              57682: [0, 0.12, 0, 0, 0.45],
              57683: [0, 0.12, 0, 0, 0.45]
            },
            "Typewriter-Regular": {
              32: [0, 0, 0, 0, 0.525],
              33: [0, 0.61111, 0, 0, 0.525],
              34: [0, 0.61111, 0, 0, 0.525],
              35: [0, 0.61111, 0, 0, 0.525],
              36: [0.08333, 0.69444, 0, 0, 0.525],
              37: [0.08333, 0.69444, 0, 0, 0.525],
              38: [0, 0.61111, 0, 0, 0.525],
              39: [0, 0.61111, 0, 0, 0.525],
              40: [0.08333, 0.69444, 0, 0, 0.525],
              41: [0.08333, 0.69444, 0, 0, 0.525],
              42: [0, 0.52083, 0, 0, 0.525],
              43: [-0.08056, 0.53055, 0, 0, 0.525],
              44: [0.13889, 0.125, 0, 0, 0.525],
              45: [-0.08056, 0.53055, 0, 0, 0.525],
              46: [0, 0.125, 0, 0, 0.525],
              47: [0.08333, 0.69444, 0, 0, 0.525],
              48: [0, 0.61111, 0, 0, 0.525],
              49: [0, 0.61111, 0, 0, 0.525],
              50: [0, 0.61111, 0, 0, 0.525],
              51: [0, 0.61111, 0, 0, 0.525],
              52: [0, 0.61111, 0, 0, 0.525],
              53: [0, 0.61111, 0, 0, 0.525],
              54: [0, 0.61111, 0, 0, 0.525],
              55: [0, 0.61111, 0, 0, 0.525],
              56: [0, 0.61111, 0, 0, 0.525],
              57: [0, 0.61111, 0, 0, 0.525],
              58: [0, 0.43056, 0, 0, 0.525],
              59: [0.13889, 0.43056, 0, 0, 0.525],
              60: [-0.05556, 0.55556, 0, 0, 0.525],
              61: [-0.19549, 0.41562, 0, 0, 0.525],
              62: [-0.05556, 0.55556, 0, 0, 0.525],
              63: [0, 0.61111, 0, 0, 0.525],
              64: [0, 0.61111, 0, 0, 0.525],
              65: [0, 0.61111, 0, 0, 0.525],
              66: [0, 0.61111, 0, 0, 0.525],
              67: [0, 0.61111, 0, 0, 0.525],
              68: [0, 0.61111, 0, 0, 0.525],
              69: [0, 0.61111, 0, 0, 0.525],
              70: [0, 0.61111, 0, 0, 0.525],
              71: [0, 0.61111, 0, 0, 0.525],
              72: [0, 0.61111, 0, 0, 0.525],
              73: [0, 0.61111, 0, 0, 0.525],
              74: [0, 0.61111, 0, 0, 0.525],
              75: [0, 0.61111, 0, 0, 0.525],
              76: [0, 0.61111, 0, 0, 0.525],
              77: [0, 0.61111, 0, 0, 0.525],
              78: [0, 0.61111, 0, 0, 0.525],
              79: [0, 0.61111, 0, 0, 0.525],
              80: [0, 0.61111, 0, 0, 0.525],
              81: [0.13889, 0.61111, 0, 0, 0.525],
              82: [0, 0.61111, 0, 0, 0.525],
              83: [0, 0.61111, 0, 0, 0.525],
              84: [0, 0.61111, 0, 0, 0.525],
              85: [0, 0.61111, 0, 0, 0.525],
              86: [0, 0.61111, 0, 0, 0.525],
              87: [0, 0.61111, 0, 0, 0.525],
              88: [0, 0.61111, 0, 0, 0.525],
              89: [0, 0.61111, 0, 0, 0.525],
              90: [0, 0.61111, 0, 0, 0.525],
              91: [0.08333, 0.69444, 0, 0, 0.525],
              92: [0.08333, 0.69444, 0, 0, 0.525],
              93: [0.08333, 0.69444, 0, 0, 0.525],
              94: [0, 0.61111, 0, 0, 0.525],
              95: [0.09514, 0, 0, 0, 0.525],
              96: [0, 0.61111, 0, 0, 0.525],
              97: [0, 0.43056, 0, 0, 0.525],
              98: [0, 0.61111, 0, 0, 0.525],
              99: [0, 0.43056, 0, 0, 0.525],
              100: [0, 0.61111, 0, 0, 0.525],
              101: [0, 0.43056, 0, 0, 0.525],
              102: [0, 0.61111, 0, 0, 0.525],
              103: [0.22222, 0.43056, 0, 0, 0.525],
              104: [0, 0.61111, 0, 0, 0.525],
              105: [0, 0.61111, 0, 0, 0.525],
              106: [0.22222, 0.61111, 0, 0, 0.525],
              107: [0, 0.61111, 0, 0, 0.525],
              108: [0, 0.61111, 0, 0, 0.525],
              109: [0, 0.43056, 0, 0, 0.525],
              110: [0, 0.43056, 0, 0, 0.525],
              111: [0, 0.43056, 0, 0, 0.525],
              112: [0.22222, 0.43056, 0, 0, 0.525],
              113: [0.22222, 0.43056, 0, 0, 0.525],
              114: [0, 0.43056, 0, 0, 0.525],
              115: [0, 0.43056, 0, 0, 0.525],
              116: [0, 0.55358, 0, 0, 0.525],
              117: [0, 0.43056, 0, 0, 0.525],
              118: [0, 0.43056, 0, 0, 0.525],
              119: [0, 0.43056, 0, 0, 0.525],
              120: [0, 0.43056, 0, 0, 0.525],
              121: [0.22222, 0.43056, 0, 0, 0.525],
              122: [0, 0.43056, 0, 0, 0.525],
              123: [0.08333, 0.69444, 0, 0, 0.525],
              124: [0.08333, 0.69444, 0, 0, 0.525],
              125: [0.08333, 0.69444, 0, 0, 0.525],
              126: [0, 0.61111, 0, 0, 0.525],
              127: [0, 0.61111, 0, 0, 0.525],
              160: [0, 0, 0, 0, 0.525],
              176: [0, 0.61111, 0, 0, 0.525],
              184: [0.19445, 0, 0, 0, 0.525],
              305: [0, 0.43056, 0, 0, 0.525],
              567: [0.22222, 0.43056, 0, 0, 0.525],
              711: [0, 0.56597, 0, 0, 0.525],
              713: [0, 0.56555, 0, 0, 0.525],
              714: [0, 0.61111, 0, 0, 0.525],
              715: [0, 0.61111, 0, 0, 0.525],
              728: [0, 0.61111, 0, 0, 0.525],
              730: [0, 0.61111, 0, 0, 0.525],
              770: [0, 0.61111, 0, 0, 0.525],
              771: [0, 0.61111, 0, 0, 0.525],
              776: [0, 0.61111, 0, 0, 0.525],
              915: [0, 0.61111, 0, 0, 0.525],
              916: [0, 0.61111, 0, 0, 0.525],
              920: [0, 0.61111, 0, 0, 0.525],
              923: [0, 0.61111, 0, 0, 0.525],
              926: [0, 0.61111, 0, 0, 0.525],
              928: [0, 0.61111, 0, 0, 0.525],
              931: [0, 0.61111, 0, 0, 0.525],
              933: [0, 0.61111, 0, 0, 0.525],
              934: [0, 0.61111, 0, 0, 0.525],
              936: [0, 0.61111, 0, 0, 0.525],
              937: [0, 0.61111, 0, 0, 0.525],
              8216: [0, 0.61111, 0, 0, 0.525],
              8217: [0, 0.61111, 0, 0, 0.525],
              8242: [0, 0.61111, 0, 0, 0.525],
              9251: [0.11111, 0.21944, 0, 0, 0.525]
            }
          }, b0 = {
            slant: [0.25, 0.25, 0.25],
            // sigma1
            space: [0, 0, 0],
            // sigma2
            stretch: [0, 0, 0],
            // sigma3
            shrink: [0, 0, 0],
            // sigma4
            xHeight: [0.431, 0.431, 0.431],
            // sigma5
            quad: [1, 1.171, 1.472],
            // sigma6
            extraSpace: [0, 0, 0],
            // sigma7
            num1: [0.677, 0.732, 0.925],
            // sigma8
            num2: [0.394, 0.384, 0.387],
            // sigma9
            num3: [0.444, 0.471, 0.504],
            // sigma10
            denom1: [0.686, 0.752, 1.025],
            // sigma11
            denom2: [0.345, 0.344, 0.532],
            // sigma12
            sup1: [0.413, 0.503, 0.504],
            // sigma13
            sup2: [0.363, 0.431, 0.404],
            // sigma14
            sup3: [0.289, 0.286, 0.294],
            // sigma15
            sub1: [0.15, 0.143, 0.2],
            // sigma16
            sub2: [0.247, 0.286, 0.4],
            // sigma17
            supDrop: [0.386, 0.353, 0.494],
            // sigma18
            subDrop: [0.05, 0.071, 0.1],
            // sigma19
            delim1: [2.39, 1.7, 1.98],
            // sigma20
            delim2: [1.01, 1.157, 1.42],
            // sigma21
            axisHeight: [0.25, 0.25, 0.25],
            // sigma22
            // These font metrics are extracted from TeX by using tftopl on cmex10.tfm;
            // they correspond to the font parameters of the extension fonts (family 3).
            // See the TeXbook, page 441. In AMSTeX, the extension fonts scale; to
            // match cmex7, we'd use cmex7.tfm values for script and scriptscript
            // values.
            defaultRuleThickness: [0.04, 0.049, 0.049],
            // xi8; cmex7: 0.049
            bigOpSpacing1: [0.111, 0.111, 0.111],
            // xi9
            bigOpSpacing2: [0.166, 0.166, 0.166],
            // xi10
            bigOpSpacing3: [0.2, 0.2, 0.2],
            // xi11
            bigOpSpacing4: [0.6, 0.611, 0.611],
            // xi12; cmex7: 0.611
            bigOpSpacing5: [0.1, 0.143, 0.143],
            // xi13; cmex7: 0.143
            // The \sqrt rule width is taken from the height of the surd character.
            // Since we use the same font at all sizes, this thickness doesn't scale.
            sqrtRuleThickness: [0.04, 0.04, 0.04],
            // This value determines how large a pt is, for metrics which are defined
            // in terms of pts.
            // This value is also used in katex.less; if you change it make sure the
            // values match.
            ptPerEm: [10, 10, 10],
            // The space between adjacent `|` columns in an array definition. From
            // `\showthe\doublerulesep` in LaTeX. Equals 2.0 / ptPerEm.
            doubleRuleSep: [0.2, 0.2, 0.2],
            // The width of separator lines in {array} environments. From
            // `\showthe\arrayrulewidth` in LaTeX. Equals 0.4 / ptPerEm.
            arrayRuleWidth: [0.04, 0.04, 0.04],
            // Two values from LaTeX source2e:
            fboxsep: [0.3, 0.3, 0.3],
            //        3 pt / ptPerEm
            fboxrule: [0.04, 0.04, 0.04]
            // 0.4 pt / ptPerEm
          }, y0 = {
            // Latin-1
            Å: "A",
            Ð: "D",
            Þ: "o",
            å: "a",
            ð: "d",
            þ: "o",
            // Cyrillic
            А: "A",
            Б: "B",
            В: "B",
            Г: "F",
            Д: "A",
            Е: "E",
            Ж: "K",
            З: "3",
            И: "N",
            Й: "N",
            К: "K",
            Л: "N",
            М: "M",
            Н: "H",
            О: "O",
            П: "N",
            Р: "P",
            С: "C",
            Т: "T",
            У: "y",
            Ф: "O",
            Х: "X",
            Ц: "U",
            Ч: "h",
            Ш: "W",
            Щ: "W",
            Ъ: "B",
            Ы: "X",
            Ь: "B",
            Э: "3",
            Ю: "X",
            Я: "R",
            а: "a",
            б: "b",
            в: "a",
            г: "r",
            д: "y",
            е: "e",
            ж: "m",
            з: "e",
            и: "n",
            й: "n",
            к: "n",
            л: "n",
            м: "m",
            н: "n",
            о: "o",
            п: "n",
            р: "p",
            с: "c",
            т: "o",
            у: "y",
            ф: "b",
            х: "x",
            ц: "n",
            ч: "n",
            ш: "w",
            щ: "w",
            ъ: "a",
            ы: "m",
            ь: "a",
            э: "e",
            ю: "m",
            я: "r"
          };
          function w0(f, e) {
            Bt[f] = e;
          }
          function Yt(f, e, t) {
            if (!Bt[e])
              throw new Error("Font metrics not found for font: " + e + ".");
            var n = f.charCodeAt(0), l = Bt[e][n];
            if (!l && f[0] in y0 && (n = y0[f[0]].charCodeAt(0), l = Bt[e][n]), !l && t === "text" && Xe(n) && (l = Bt[e][77]), l)
              return {
                depth: l[0],
                height: l[1],
                italic: l[2],
                skew: l[3],
                width: l[4]
              };
          }
          var nr = {};
          function jr(f) {
            var e;
            if (f >= 5 ? e = 0 : f >= 3 ? e = 1 : e = 2, !nr[e]) {
              var t = nr[e] = {
                cssEmPerMu: b0.quad[e] / 18
              };
              for (var n in b0)
                b0.hasOwnProperty(n) && (t[n] = b0[n][e]);
            }
            return nr[e];
          }
          var Yr = [
            // Each element contains [textsize, scriptsize, scriptscriptsize].
            // The size mappings are taken from TeX with \normalsize=10pt.
            [1, 1, 1],
            // size1: [5, 5, 5]              \tiny
            [2, 1, 1],
            // size2: [6, 5, 5]
            [3, 1, 1],
            // size3: [7, 5, 5]              \scriptsize
            [4, 2, 1],
            // size4: [8, 6, 5]              \footnotesize
            [5, 2, 1],
            // size5: [9, 6, 5]              \small
            [6, 3, 1],
            // size6: [10, 7, 5]             \normalsize
            [7, 4, 2],
            // size7: [12, 8, 6]             \large
            [8, 6, 3],
            // size8: [14.4, 10, 7]          \Large
            [9, 7, 6],
            // size9: [17.28, 12, 10]        \LARGE
            [10, 8, 7],
            // size10: [20.74, 14.4, 12]     \huge
            [11, 10, 9]
            // size11: [24.88, 20.74, 17.28] \HUGE
          ], ar = [
            // fontMetrics.js:getGlobalMetrics also uses size indexes, so if
            // you change size indexes, change that function.
            0.5,
            0.6,
            0.7,
            0.8,
            0.9,
            1,
            1.2,
            1.44,
            1.728,
            2.074,
            2.488
          ], Tr = function(e, t) {
            return t.size < 2 ? e : Yr[e - 1][t.size - 1];
          }, j0 = /* @__PURE__ */ function() {
            function f(t) {
              this.style = void 0, this.color = void 0, this.size = void 0, this.textSize = void 0, this.phantom = void 0, this.font = void 0, this.fontFamily = void 0, this.fontWeight = void 0, this.fontShape = void 0, this.sizeMultiplier = void 0, this.maxSize = void 0, this.minRuleThickness = void 0, this._fontMetrics = void 0, this.style = t.style, this.color = t.color, this.size = t.size || f.BASESIZE, this.textSize = t.textSize || this.size, this.phantom = !!t.phantom, this.font = t.font || "", this.fontFamily = t.fontFamily || "", this.fontWeight = t.fontWeight || "", this.fontShape = t.fontShape || "", this.sizeMultiplier = ar[this.size - 1], this.maxSize = t.maxSize, this.minRuleThickness = t.minRuleThickness, this._fontMetrics = void 0;
            }
            var e = f.prototype;
            return e.extend = function(n) {
              var l = {
                style: this.style,
                size: this.size,
                textSize: this.textSize,
                color: this.color,
                phantom: this.phantom,
                font: this.font,
                fontFamily: this.fontFamily,
                fontWeight: this.fontWeight,
                fontShape: this.fontShape,
                maxSize: this.maxSize,
                minRuleThickness: this.minRuleThickness
              };
              for (var u in n)
                n.hasOwnProperty(u) && (l[u] = n[u]);
              return new f(l);
            }, e.havingStyle = function(n) {
              return this.style === n ? this : this.extend({
                style: n,
                size: Tr(this.textSize, n)
              });
            }, e.havingCrampedStyle = function() {
              return this.havingStyle(this.style.cramp());
            }, e.havingSize = function(n) {
              return this.size === n && this.textSize === n ? this : this.extend({
                style: this.style.text(),
                size: n,
                textSize: n,
                sizeMultiplier: ar[n - 1]
              });
            }, e.havingBaseStyle = function(n) {
              n = n || this.style.text();
              var l = Tr(f.BASESIZE, n);
              return this.size === l && this.textSize === f.BASESIZE && this.style === n ? this : this.extend({
                style: n,
                size: l
              });
            }, e.havingBaseSizing = function() {
              var n;
              switch (this.style.id) {
                case 4:
                case 5:
                  n = 3;
                  break;
                case 6:
                case 7:
                  n = 1;
                  break;
                default:
                  n = 6;
              }
              return this.extend({
                style: this.style.text(),
                size: n
              });
            }, e.withColor = function(n) {
              return this.extend({
                color: n
              });
            }, e.withPhantom = function() {
              return this.extend({
                phantom: !0
              });
            }, e.withFont = function(n) {
              return this.extend({
                font: n
              });
            }, e.withTextFontFamily = function(n) {
              return this.extend({
                fontFamily: n,
                font: ""
              });
            }, e.withTextFontWeight = function(n) {
              return this.extend({
                fontWeight: n,
                font: ""
              });
            }, e.withTextFontShape = function(n) {
              return this.extend({
                fontShape: n,
                font: ""
              });
            }, e.sizingClasses = function(n) {
              return n.size !== this.size ? ["sizing", "reset-size" + n.size, "size" + this.size] : [];
            }, e.baseSizingClasses = function() {
              return this.size !== f.BASESIZE ? ["sizing", "reset-size" + this.size, "size" + f.BASESIZE] : [];
            }, e.fontMetrics = function() {
              return this._fontMetrics || (this._fontMetrics = jr(this.size)), this._fontMetrics;
            }, e.getColor = function() {
              return this.phantom ? "transparent" : this.color;
            }, f;
          }();
          j0.BASESIZE = 6;
          var ir = j0, St = {
            // https://en.wikibooks.org/wiki/LaTeX/Lengths and
            // https://tex.stackexchange.com/a/8263
            pt: 1,
            // TeX point
            mm: 7227 / 2540,
            // millimeter
            cm: 7227 / 254,
            // centimeter
            in: 72.27,
            // inch
            bp: 803 / 800,
            // big (PostScript) points
            pc: 12,
            // pica
            dd: 1238 / 1157,
            // didot
            cc: 14856 / 1157,
            // cicero (12 didot)
            nd: 685 / 642,
            // new didot
            nc: 1370 / 107,
            // new cicero (12 new didot)
            sp: 1 / 65536,
            // scaled point (TeX's internal smallest unit)
            // https://tex.stackexchange.com/a/41371
            px: 803 / 800
            // \pdfpxdimen defaults to 1 bp in pdfTeX and LuaTeX
          }, k0 = {
            ex: !0,
            em: !0,
            mu: !0
          }, lr = function(e) {
            return typeof e != "string" && (e = e.unit), e in St || e in k0 || e === "ex";
          }, Pe = function(e, t) {
            var n;
            if (e.unit in St)
              n = St[e.unit] / t.fontMetrics().ptPerEm / t.sizeMultiplier;
            else if (e.unit === "mu")
              n = t.fontMetrics().cssEmPerMu;
            else {
              var l;
              if (t.style.isTight() ? l = t.havingStyle(t.style.text()) : l = t, e.unit === "ex")
                n = l.fontMetrics().xHeight;
              else if (e.unit === "em")
                n = l.fontMetrics().quad;
              else
                throw new c("Invalid unit: '" + e.unit + "'");
              l !== t && (n *= l.sizeMultiplier / t.sizeMultiplier);
            }
            return Math.min(e.number * n, t.maxSize);
          }, te = function(e) {
            return +e.toFixed(4) + "em";
          }, ct = function(e) {
            return e.filter(function(t) {
              return t;
            }).join(" ");
          }, Xr = function(e, t, n) {
            if (this.classes = e || [], this.attributes = {}, this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = n || {}, t) {
              t.style.isTight() && this.classes.push("mtight");
              var l = t.getColor();
              l && (this.style.color = l);
            }
          }, Zr = function(e) {
            var t = document.createElement(e);
            t.className = ct(this.classes);
            for (var n in this.style)
              this.style.hasOwnProperty(n) && (t.style[n] = this.style[n]);
            for (var l in this.attributes)
              this.attributes.hasOwnProperty(l) && t.setAttribute(l, this.attributes[l]);
            for (var u = 0; u < this.children.length; u++)
              t.appendChild(this.children[u].toNode());
            return t;
          }, $e = function(e) {
            var t = "<" + e;
            this.classes.length && (t += ' class="' + U.escape(ct(this.classes)) + '"');
            var n = "";
            for (var l in this.style)
              this.style.hasOwnProperty(l) && (n += U.hyphenate(l) + ":" + this.style[l] + ";");
            n && (t += ' style="' + U.escape(n) + '"');
            for (var u in this.attributes)
              this.attributes.hasOwnProperty(u) && (t += " " + u + '="' + U.escape(this.attributes[u]) + '"');
            t += ">";
            for (var m = 0; m < this.children.length; m++)
              t += this.children[m].toMarkup();
            return t += "</" + e + ">", t;
          }, Dt = /* @__PURE__ */ function() {
            function f(t, n, l, u) {
              this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.width = void 0, this.maxFontSize = void 0, this.style = void 0, Xr.call(this, t, l, u), this.children = n || [];
            }
            var e = f.prototype;
            return e.setAttribute = function(n, l) {
              this.attributes[n] = l;
            }, e.hasClass = function(n) {
              return U.contains(this.classes, n);
            }, e.toNode = function() {
              return Zr.call(this, "span");
            }, e.toMarkup = function() {
              return $e.call(this, "span");
            }, f;
          }(), Mr = /* @__PURE__ */ function() {
            function f(t, n, l, u) {
              this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, Xr.call(this, n, u), this.children = l || [], this.setAttribute("href", t);
            }
            var e = f.prototype;
            return e.setAttribute = function(n, l) {
              this.attributes[n] = l;
            }, e.hasClass = function(n) {
              return U.contains(this.classes, n);
            }, e.toNode = function() {
              return Zr.call(this, "a");
            }, e.toMarkup = function() {
              return $e.call(this, "a");
            }, f;
          }(), Kr = /* @__PURE__ */ function() {
            function f(t, n, l) {
              this.src = void 0, this.alt = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.alt = n, this.src = t, this.classes = ["mord"], this.style = l;
            }
            var e = f.prototype;
            return e.hasClass = function(n) {
              return U.contains(this.classes, n);
            }, e.toNode = function() {
              var n = document.createElement("img");
              n.src = this.src, n.alt = this.alt, n.className = "mord";
              for (var l in this.style)
                this.style.hasOwnProperty(l) && (n.style[l] = this.style[l]);
              return n;
            }, e.toMarkup = function() {
              var n = "<img  src='" + this.src + " 'alt='" + this.alt + "' ", l = "";
              for (var u in this.style)
                this.style.hasOwnProperty(u) && (l += U.hyphenate(u) + ":" + this.style[u] + ";");
              return l && (n += ' style="' + U.escape(l) + '"'), n += "'/>", n;
            }, f;
          }(), zr = {
            î: "ı̂",
            ï: "ı̈",
            í: "ı́",
            // 'ī': '\u0131\u0304', // enable when we add Extended Latin
            ì: "ı̀"
          }, ft = /* @__PURE__ */ function() {
            function f(t, n, l, u, m, b, k, x) {
              this.text = void 0, this.height = void 0, this.depth = void 0, this.italic = void 0, this.skew = void 0, this.width = void 0, this.maxFontSize = void 0, this.classes = void 0, this.style = void 0, this.text = t, this.height = n || 0, this.depth = l || 0, this.italic = u || 0, this.skew = m || 0, this.width = b || 0, this.classes = k || [], this.style = x || {}, this.maxFontSize = 0;
              var z = ne(this.text.charCodeAt(0));
              z && this.classes.push(z + "_fallback"), /[îïíì]/.test(this.text) && (this.text = zr[this.text]);
            }
            var e = f.prototype;
            return e.hasClass = function(n) {
              return U.contains(this.classes, n);
            }, e.toNode = function() {
              var n = document.createTextNode(this.text), l = null;
              this.italic > 0 && (l = document.createElement("span"), l.style.marginRight = te(this.italic)), this.classes.length > 0 && (l = l || document.createElement("span"), l.className = ct(this.classes));
              for (var u in this.style)
                this.style.hasOwnProperty(u) && (l = l || document.createElement("span"), l.style[u] = this.style[u]);
              return l ? (l.appendChild(n), l) : n;
            }, e.toMarkup = function() {
              var n = !1, l = "<span";
              this.classes.length && (n = !0, l += ' class="', l += U.escape(ct(this.classes)), l += '"');
              var u = "";
              this.italic > 0 && (u += "margin-right:" + this.italic + "em;");
              for (var m in this.style)
                this.style.hasOwnProperty(m) && (u += U.hyphenate(m) + ":" + this.style[m] + ";");
              u && (n = !0, l += ' style="' + U.escape(u) + '"');
              var b = U.escape(this.text);
              return n ? (l += ">", l += b, l += "</span>", l) : b;
            }, f;
          }(), Nt = /* @__PURE__ */ function() {
            function f(t, n) {
              this.children = void 0, this.attributes = void 0, this.children = t || [], this.attributes = n || {};
            }
            var e = f.prototype;
            return e.toNode = function() {
              var n = "http://www.w3.org/2000/svg", l = document.createElementNS(n, "svg");
              for (var u in this.attributes)
                Object.prototype.hasOwnProperty.call(this.attributes, u) && l.setAttribute(u, this.attributes[u]);
              for (var m = 0; m < this.children.length; m++)
                l.appendChild(this.children[m].toNode());
              return l;
            }, e.toMarkup = function() {
              var n = '<svg xmlns="http://www.w3.org/2000/svg"';
              for (var l in this.attributes)
                Object.prototype.hasOwnProperty.call(this.attributes, l) && (n += " " + l + "='" + this.attributes[l] + "'");
              n += ">";
              for (var u = 0; u < this.children.length; u++)
                n += this.children[u].toMarkup();
              return n += "</svg>", n;
            }, f;
          }(), Xt = /* @__PURE__ */ function() {
            function f(t, n) {
              this.pathName = void 0, this.alternate = void 0, this.pathName = t, this.alternate = n;
            }
            var e = f.prototype;
            return e.toNode = function() {
              var n = "http://www.w3.org/2000/svg", l = document.createElementNS(n, "path");
              return this.alternate ? l.setAttribute("d", this.alternate) : l.setAttribute("d", W0[this.pathName]), l;
            }, e.toMarkup = function() {
              return this.alternate ? "<path d='" + this.alternate + "'/>" : "<path d='" + W0[this.pathName] + "'/>";
            }, f;
          }(), _0 = /* @__PURE__ */ function() {
            function f(t) {
              this.attributes = void 0, this.attributes = t || {};
            }
            var e = f.prototype;
            return e.toNode = function() {
              var n = "http://www.w3.org/2000/svg", l = document.createElementNS(n, "line");
              for (var u in this.attributes)
                Object.prototype.hasOwnProperty.call(this.attributes, u) && l.setAttribute(u, this.attributes[u]);
              return l;
            }, e.toMarkup = function() {
              var n = "<line";
              for (var l in this.attributes)
                Object.prototype.hasOwnProperty.call(this.attributes, l) && (n += " " + l + "='" + this.attributes[l] + "'");
              return n += "/>", n;
            }, f;
          }();
          function sr(f) {
            if (f instanceof ft)
              return f;
            throw new Error("Expected symbolNode but got " + String(f) + ".");
          }
          function Vn(f) {
            if (f instanceof Dt)
              return f;
            throw new Error("Expected span<HtmlDomNode> but got " + String(f) + ".");
          }
          var o0 = {
            bin: 1,
            close: 1,
            inner: 1,
            open: 1,
            punct: 1,
            rel: 1
          }, Cr = {
            "accent-token": 1,
            mathord: 1,
            "op-token": 1,
            spacing: 1,
            textord: 1
          }, Y0 = {
            math: {},
            text: {}
          }, Ve = Y0;
          function h(f, e, t, n, l, u) {
            Y0[f][l] = {
              font: e,
              group: t,
              replace: n
            }, u && n && (Y0[f][n] = Y0[f][l]);
          }
          var d = "math", W = "text", y = "main", T = "ams", He = "accent-token", se = "bin", lt = "close", he = "inner", M = "mathord", X = "op-token", ie = "open", Be = "punct", A = "rel", We = "spacing", E = "textord";
          h(d, y, A, "≡", "\\equiv", !0), h(d, y, A, "≺", "\\prec", !0), h(d, y, A, "≻", "\\succ", !0), h(d, y, A, "∼", "\\sim", !0), h(d, y, A, "⊥", "\\perp"), h(d, y, A, "⪯", "\\preceq", !0), h(d, y, A, "⪰", "\\succeq", !0), h(d, y, A, "≃", "\\simeq", !0), h(d, y, A, "∣", "\\mid", !0), h(d, y, A, "≪", "\\ll", !0), h(d, y, A, "≫", "\\gg", !0), h(d, y, A, "≍", "\\asymp", !0), h(d, y, A, "∥", "\\parallel"), h(d, y, A, "⋈", "\\bowtie", !0), h(d, y, A, "⌣", "\\smile", !0), h(d, y, A, "⊑", "\\sqsubseteq", !0), h(d, y, A, "⊒", "\\sqsupseteq", !0), h(d, y, A, "≐", "\\doteq", !0), h(d, y, A, "⌢", "\\frown", !0), h(d, y, A, "∋", "\\ni", !0), h(d, y, A, "∝", "\\propto", !0), h(d, y, A, "⊢", "\\vdash", !0), h(d, y, A, "⊣", "\\dashv", !0), h(d, y, A, "∋", "\\owns"), h(d, y, Be, ".", "\\ldotp"), h(d, y, Be, "⋅", "\\cdotp"), h(d, y, E, "#", "\\#"), h(W, y, E, "#", "\\#"), h(d, y, E, "&", "\\&"), h(W, y, E, "&", "\\&"), h(d, y, E, "ℵ", "\\aleph", !0), h(d, y, E, "∀", "\\forall", !0), h(d, y, E, "ℏ", "\\hbar", !0), h(d, y, E, "∃", "\\exists", !0), h(d, y, E, "∇", "\\nabla", !0), h(d, y, E, "♭", "\\flat", !0), h(d, y, E, "ℓ", "\\ell", !0), h(d, y, E, "♮", "\\natural", !0), h(d, y, E, "♣", "\\clubsuit", !0), h(d, y, E, "℘", "\\wp", !0), h(d, y, E, "♯", "\\sharp", !0), h(d, y, E, "♢", "\\diamondsuit", !0), h(d, y, E, "ℜ", "\\Re", !0), h(d, y, E, "♡", "\\heartsuit", !0), h(d, y, E, "ℑ", "\\Im", !0), h(d, y, E, "♠", "\\spadesuit", !0), h(d, y, E, "§", "\\S", !0), h(W, y, E, "§", "\\S"), h(d, y, E, "¶", "\\P", !0), h(W, y, E, "¶", "\\P"), h(d, y, E, "†", "\\dag"), h(W, y, E, "†", "\\dag"), h(W, y, E, "†", "\\textdagger"), h(d, y, E, "‡", "\\ddag"), h(W, y, E, "‡", "\\ddag"), h(W, y, E, "‡", "\\textdaggerdbl"), h(d, y, lt, "⎱", "\\rmoustache", !0), h(d, y, ie, "⎰", "\\lmoustache", !0), h(d, y, lt, "⟯", "\\rgroup", !0), h(d, y, ie, "⟮", "\\lgroup", !0), h(d, y, se, "∓", "\\mp", !0), h(d, y, se, "⊖", "\\ominus", !0), h(d, y, se, "⊎", "\\uplus", !0), h(d, y, se, "⊓", "\\sqcap", !0), h(d, y, se, "∗", "\\ast"), h(d, y, se, "⊔", "\\sqcup", !0), h(d, y, se, "◯", "\\bigcirc", !0), h(d, y, se, "∙", "\\bullet", !0), h(d, y, se, "‡", "\\ddagger"), h(d, y, se, "≀", "\\wr", !0), h(d, y, se, "⨿", "\\amalg"), h(d, y, se, "&", "\\And"), h(d, y, A, "⟵", "\\longleftarrow", !0), h(d, y, A, "⇐", "\\Leftarrow", !0), h(d, y, A, "⟸", "\\Longleftarrow", !0), h(d, y, A, "⟶", "\\longrightarrow", !0), h(d, y, A, "⇒", "\\Rightarrow", !0), h(d, y, A, "⟹", "\\Longrightarrow", !0), h(d, y, A, "↔", "\\leftrightarrow", !0), h(d, y, A, "⟷", "\\longleftrightarrow", !0), h(d, y, A, "⇔", "\\Leftrightarrow", !0), h(d, y, A, "⟺", "\\Longleftrightarrow", !0), h(d, y, A, "↦", "\\mapsto", !0), h(d, y, A, "⟼", "\\longmapsto", !0), h(d, y, A, "↗", "\\nearrow", !0), h(d, y, A, "↩", "\\hookleftarrow", !0), h(d, y, A, "↪", "\\hookrightarrow", !0), h(d, y, A, "↘", "\\searrow", !0), h(d, y, A, "↼", "\\leftharpoonup", !0), h(d, y, A, "⇀", "\\rightharpoonup", !0), h(d, y, A, "↙", "\\swarrow", !0), h(d, y, A, "↽", "\\leftharpoondown", !0), h(d, y, A, "⇁", "\\rightharpoondown", !0), h(d, y, A, "↖", "\\nwarrow", !0), h(d, y, A, "⇌", "\\rightleftharpoons", !0), h(d, T, A, "≮", "\\nless", !0), h(d, T, A, "", "\\@nleqslant"), h(d, T, A, "", "\\@nleqq"), h(d, T, A, "⪇", "\\lneq", !0), h(d, T, A, "≨", "\\lneqq", !0), h(d, T, A, "", "\\@lvertneqq"), h(d, T, A, "⋦", "\\lnsim", !0), h(d, T, A, "⪉", "\\lnapprox", !0), h(d, T, A, "⊀", "\\nprec", !0), h(d, T, A, "⋠", "\\npreceq", !0), h(d, T, A, "⋨", "\\precnsim", !0), h(d, T, A, "⪹", "\\precnapprox", !0), h(d, T, A, "≁", "\\nsim", !0), h(d, T, A, "", "\\@nshortmid"), h(d, T, A, "∤", "\\nmid", !0), h(d, T, A, "⊬", "\\nvdash", !0), h(d, T, A, "⊭", "\\nvDash", !0), h(d, T, A, "⋪", "\\ntriangleleft"), h(d, T, A, "⋬", "\\ntrianglelefteq", !0), h(d, T, A, "⊊", "\\subsetneq", !0), h(d, T, A, "", "\\@varsubsetneq"), h(d, T, A, "⫋", "\\subsetneqq", !0), h(d, T, A, "", "\\@varsubsetneqq"), h(d, T, A, "≯", "\\ngtr", !0), h(d, T, A, "", "\\@ngeqslant"), h(d, T, A, "", "\\@ngeqq"), h(d, T, A, "⪈", "\\gneq", !0), h(d, T, A, "≩", "\\gneqq", !0), h(d, T, A, "", "\\@gvertneqq"), h(d, T, A, "⋧", "\\gnsim", !0), h(d, T, A, "⪊", "\\gnapprox", !0), h(d, T, A, "⊁", "\\nsucc", !0), h(d, T, A, "⋡", "\\nsucceq", !0), h(d, T, A, "⋩", "\\succnsim", !0), h(d, T, A, "⪺", "\\succnapprox", !0), h(d, T, A, "≆", "\\ncong", !0), h(d, T, A, "", "\\@nshortparallel"), h(d, T, A, "∦", "\\nparallel", !0), h(d, T, A, "⊯", "\\nVDash", !0), h(d, T, A, "⋫", "\\ntriangleright"), h(d, T, A, "⋭", "\\ntrianglerighteq", !0), h(d, T, A, "", "\\@nsupseteqq"), h(d, T, A, "⊋", "\\supsetneq", !0), h(d, T, A, "", "\\@varsupsetneq"), h(d, T, A, "⫌", "\\supsetneqq", !0), h(d, T, A, "", "\\@varsupsetneqq"), h(d, T, A, "⊮", "\\nVdash", !0), h(d, T, A, "⪵", "\\precneqq", !0), h(d, T, A, "⪶", "\\succneqq", !0), h(d, T, A, "", "\\@nsubseteqq"), h(d, T, se, "⊴", "\\unlhd"), h(d, T, se, "⊵", "\\unrhd"), h(d, T, A, "↚", "\\nleftarrow", !0), h(d, T, A, "↛", "\\nrightarrow", !0), h(d, T, A, "⇍", "\\nLeftarrow", !0), h(d, T, A, "⇏", "\\nRightarrow", !0), h(d, T, A, "↮", "\\nleftrightarrow", !0), h(d, T, A, "⇎", "\\nLeftrightarrow", !0), h(d, T, A, "△", "\\vartriangle"), h(d, T, E, "ℏ", "\\hslash"), h(d, T, E, "▽", "\\triangledown"), h(d, T, E, "◊", "\\lozenge"), h(d, T, E, "Ⓢ", "\\circledS"), h(d, T, E, "®", "\\circledR"), h(W, T, E, "®", "\\circledR"), h(d, T, E, "∡", "\\measuredangle", !0), h(d, T, E, "∄", "\\nexists"), h(d, T, E, "℧", "\\mho"), h(d, T, E, "Ⅎ", "\\Finv", !0), h(d, T, E, "⅁", "\\Game", !0), h(d, T, E, "‵", "\\backprime"), h(d, T, E, "▲", "\\blacktriangle"), h(d, T, E, "▼", "\\blacktriangledown"), h(d, T, E, "■", "\\blacksquare"), h(d, T, E, "⧫", "\\blacklozenge"), h(d, T, E, "★", "\\bigstar"), h(d, T, E, "∢", "\\sphericalangle", !0), h(d, T, E, "∁", "\\complement", !0), h(d, T, E, "ð", "\\eth", !0), h(W, y, E, "ð", "ð"), h(d, T, E, "╱", "\\diagup"), h(d, T, E, "╲", "\\diagdown"), h(d, T, E, "□", "\\square"), h(d, T, E, "□", "\\Box"), h(d, T, E, "◊", "\\Diamond"), h(d, T, E, "¥", "\\yen", !0), h(W, T, E, "¥", "\\yen", !0), h(d, T, E, "✓", "\\checkmark", !0), h(W, T, E, "✓", "\\checkmark"), h(d, T, E, "ℶ", "\\beth", !0), h(d, T, E, "ℸ", "\\daleth", !0), h(d, T, E, "ℷ", "\\gimel", !0), h(d, T, E, "ϝ", "\\digamma", !0), h(d, T, E, "ϰ", "\\varkappa"), h(d, T, ie, "┌", "\\@ulcorner", !0), h(d, T, lt, "┐", "\\@urcorner", !0), h(d, T, ie, "└", "\\@llcorner", !0), h(d, T, lt, "┘", "\\@lrcorner", !0), h(d, T, A, "≦", "\\leqq", !0), h(d, T, A, "⩽", "\\leqslant", !0), h(d, T, A, "⪕", "\\eqslantless", !0), h(d, T, A, "≲", "\\lesssim", !0), h(d, T, A, "⪅", "\\lessapprox", !0), h(d, T, A, "≊", "\\approxeq", !0), h(d, T, se, "⋖", "\\lessdot"), h(d, T, A, "⋘", "\\lll", !0), h(d, T, A, "≶", "\\lessgtr", !0), h(d, T, A, "⋚", "\\lesseqgtr", !0), h(d, T, A, "⪋", "\\lesseqqgtr", !0), h(d, T, A, "≑", "\\doteqdot"), h(d, T, A, "≓", "\\risingdotseq", !0), h(d, T, A, "≒", "\\fallingdotseq", !0), h(d, T, A, "∽", "\\backsim", !0), h(d, T, A, "⋍", "\\backsimeq", !0), h(d, T, A, "⫅", "\\subseteqq", !0), h(d, T, A, "⋐", "\\Subset", !0), h(d, T, A, "⊏", "\\sqsubset", !0), h(d, T, A, "≼", "\\preccurlyeq", !0), h(d, T, A, "⋞", "\\curlyeqprec", !0), h(d, T, A, "≾", "\\precsim", !0), h(d, T, A, "⪷", "\\precapprox", !0), h(d, T, A, "⊲", "\\vartriangleleft"), h(d, T, A, "⊴", "\\trianglelefteq"), h(d, T, A, "⊨", "\\vDash", !0), h(d, T, A, "⊪", "\\Vvdash", !0), h(d, T, A, "⌣", "\\smallsmile"), h(d, T, A, "⌢", "\\smallfrown"), h(d, T, A, "≏", "\\bumpeq", !0), h(d, T, A, "≎", "\\Bumpeq", !0), h(d, T, A, "≧", "\\geqq", !0), h(d, T, A, "⩾", "\\geqslant", !0), h(d, T, A, "⪖", "\\eqslantgtr", !0), h(d, T, A, "≳", "\\gtrsim", !0), h(d, T, A, "⪆", "\\gtrapprox", !0), h(d, T, se, "⋗", "\\gtrdot"), h(d, T, A, "⋙", "\\ggg", !0), h(d, T, A, "≷", "\\gtrless", !0), h(d, T, A, "⋛", "\\gtreqless", !0), h(d, T, A, "⪌", "\\gtreqqless", !0), h(d, T, A, "≖", "\\eqcirc", !0), h(d, T, A, "≗", "\\circeq", !0), h(d, T, A, "≜", "\\triangleq", !0), h(d, T, A, "∼", "\\thicksim"), h(d, T, A, "≈", "\\thickapprox"), h(d, T, A, "⫆", "\\supseteqq", !0), h(d, T, A, "⋑", "\\Supset", !0), h(d, T, A, "⊐", "\\sqsupset", !0), h(d, T, A, "≽", "\\succcurlyeq", !0), h(d, T, A, "⋟", "\\curlyeqsucc", !0), h(d, T, A, "≿", "\\succsim", !0), h(d, T, A, "⪸", "\\succapprox", !0), h(d, T, A, "⊳", "\\vartriangleright"), h(d, T, A, "⊵", "\\trianglerighteq"), h(d, T, A, "⊩", "\\Vdash", !0), h(d, T, A, "∣", "\\shortmid"), h(d, T, A, "∥", "\\shortparallel"), h(d, T, A, "≬", "\\between", !0), h(d, T, A, "⋔", "\\pitchfork", !0), h(d, T, A, "∝", "\\varpropto"), h(d, T, A, "◀", "\\blacktriangleleft"), h(d, T, A, "∴", "\\therefore", !0), h(d, T, A, "∍", "\\backepsilon"), h(d, T, A, "▶", "\\blacktriangleright"), h(d, T, A, "∵", "\\because", !0), h(d, T, A, "⋘", "\\llless"), h(d, T, A, "⋙", "\\gggtr"), h(d, T, se, "⊲", "\\lhd"), h(d, T, se, "⊳", "\\rhd"), h(d, T, A, "≂", "\\eqsim", !0), h(d, y, A, "⋈", "\\Join"), h(d, T, A, "≑", "\\Doteq", !0), h(d, T, se, "∔", "\\dotplus", !0), h(d, T, se, "∖", "\\smallsetminus"), h(d, T, se, "⋒", "\\Cap", !0), h(d, T, se, "⋓", "\\Cup", !0), h(d, T, se, "⩞", "\\doublebarwedge", !0), h(d, T, se, "⊟", "\\boxminus", !0), h(d, T, se, "⊞", "\\boxplus", !0), h(d, T, se, "⋇", "\\divideontimes", !0), h(d, T, se, "⋉", "\\ltimes", !0), h(d, T, se, "⋊", "\\rtimes", !0), h(d, T, se, "⋋", "\\leftthreetimes", !0), h(d, T, se, "⋌", "\\rightthreetimes", !0), h(d, T, se, "⋏", "\\curlywedge", !0), h(d, T, se, "⋎", "\\curlyvee", !0), h(d, T, se, "⊝", "\\circleddash", !0), h(d, T, se, "⊛", "\\circledast", !0), h(d, T, se, "⋅", "\\centerdot"), h(d, T, se, "⊺", "\\intercal", !0), h(d, T, se, "⋒", "\\doublecap"), h(d, T, se, "⋓", "\\doublecup"), h(d, T, se, "⊠", "\\boxtimes", !0), h(d, T, A, "⇢", "\\dashrightarrow", !0), h(d, T, A, "⇠", "\\dashleftarrow", !0), h(d, T, A, "⇇", "\\leftleftarrows", !0), h(d, T, A, "⇆", "\\leftrightarrows", !0), h(d, T, A, "⇚", "\\Lleftarrow", !0), h(d, T, A, "↞", "\\twoheadleftarrow", !0), h(d, T, A, "↢", "\\leftarrowtail", !0), h(d, T, A, "↫", "\\looparrowleft", !0), h(d, T, A, "⇋", "\\leftrightharpoons", !0), h(d, T, A, "↶", "\\curvearrowleft", !0), h(d, T, A, "↺", "\\circlearrowleft", !0), h(d, T, A, "↰", "\\Lsh", !0), h(d, T, A, "⇈", "\\upuparrows", !0), h(d, T, A, "↿", "\\upharpoonleft", !0), h(d, T, A, "⇃", "\\downharpoonleft", !0), h(d, y, A, "⊶", "\\origof", !0), h(d, y, A, "⊷", "\\imageof", !0), h(d, T, A, "⊸", "\\multimap", !0), h(d, T, A, "↭", "\\leftrightsquigarrow", !0), h(d, T, A, "⇉", "\\rightrightarrows", !0), h(d, T, A, "⇄", "\\rightleftarrows", !0), h(d, T, A, "↠", "\\twoheadrightarrow", !0), h(d, T, A, "↣", "\\rightarrowtail", !0), h(d, T, A, "↬", "\\looparrowright", !0), h(d, T, A, "↷", "\\curvearrowright", !0), h(d, T, A, "↻", "\\circlearrowright", !0), h(d, T, A, "↱", "\\Rsh", !0), h(d, T, A, "⇊", "\\downdownarrows", !0), h(d, T, A, "↾", "\\upharpoonright", !0), h(d, T, A, "⇂", "\\downharpoonright", !0), h(d, T, A, "⇝", "\\rightsquigarrow", !0), h(d, T, A, "⇝", "\\leadsto"), h(d, T, A, "⇛", "\\Rrightarrow", !0), h(d, T, A, "↾", "\\restriction"), h(d, y, E, "‘", "`"), h(d, y, E, "$", "\\$"), h(W, y, E, "$", "\\$"), h(W, y, E, "$", "\\textdollar"), h(d, y, E, "%", "\\%"), h(W, y, E, "%", "\\%"), h(d, y, E, "_", "\\_"), h(W, y, E, "_", "\\_"), h(W, y, E, "_", "\\textunderscore"), h(d, y, E, "∠", "\\angle", !0), h(d, y, E, "∞", "\\infty", !0), h(d, y, E, "′", "\\prime"), h(d, y, E, "△", "\\triangle"), h(d, y, E, "Γ", "\\Gamma", !0), h(d, y, E, "Δ", "\\Delta", !0), h(d, y, E, "Θ", "\\Theta", !0), h(d, y, E, "Λ", "\\Lambda", !0), h(d, y, E, "Ξ", "\\Xi", !0), h(d, y, E, "Π", "\\Pi", !0), h(d, y, E, "Σ", "\\Sigma", !0), h(d, y, E, "Υ", "\\Upsilon", !0), h(d, y, E, "Φ", "\\Phi", !0), h(d, y, E, "Ψ", "\\Psi", !0), h(d, y, E, "Ω", "\\Omega", !0), h(d, y, E, "A", "Α"), h(d, y, E, "B", "Β"), h(d, y, E, "E", "Ε"), h(d, y, E, "Z", "Ζ"), h(d, y, E, "H", "Η"), h(d, y, E, "I", "Ι"), h(d, y, E, "K", "Κ"), h(d, y, E, "M", "Μ"), h(d, y, E, "N", "Ν"), h(d, y, E, "O", "Ο"), h(d, y, E, "P", "Ρ"), h(d, y, E, "T", "Τ"), h(d, y, E, "X", "Χ"), h(d, y, E, "¬", "\\neg", !0), h(d, y, E, "¬", "\\lnot"), h(d, y, E, "⊤", "\\top"), h(d, y, E, "⊥", "\\bot"), h(d, y, E, "∅", "\\emptyset"), h(d, T, E, "∅", "\\varnothing"), h(d, y, M, "α", "\\alpha", !0), h(d, y, M, "β", "\\beta", !0), h(d, y, M, "γ", "\\gamma", !0), h(d, y, M, "δ", "\\delta", !0), h(d, y, M, "ϵ", "\\epsilon", !0), h(d, y, M, "ζ", "\\zeta", !0), h(d, y, M, "η", "\\eta", !0), h(d, y, M, "θ", "\\theta", !0), h(d, y, M, "ι", "\\iota", !0), h(d, y, M, "κ", "\\kappa", !0), h(d, y, M, "λ", "\\lambda", !0), h(d, y, M, "μ", "\\mu", !0), h(d, y, M, "ν", "\\nu", !0), h(d, y, M, "ξ", "\\xi", !0), h(d, y, M, "ο", "\\omicron", !0), h(d, y, M, "π", "\\pi", !0), h(d, y, M, "ρ", "\\rho", !0), h(d, y, M, "σ", "\\sigma", !0), h(d, y, M, "τ", "\\tau", !0), h(d, y, M, "υ", "\\upsilon", !0), h(d, y, M, "ϕ", "\\phi", !0), h(d, y, M, "χ", "\\chi", !0), h(d, y, M, "ψ", "\\psi", !0), h(d, y, M, "ω", "\\omega", !0), h(d, y, M, "ε", "\\varepsilon", !0), h(d, y, M, "ϑ", "\\vartheta", !0), h(d, y, M, "ϖ", "\\varpi", !0), h(d, y, M, "ϱ", "\\varrho", !0), h(d, y, M, "ς", "\\varsigma", !0), h(d, y, M, "φ", "\\varphi", !0), h(d, y, se, "∗", "*", !0), h(d, y, se, "+", "+"), h(d, y, se, "−", "-", !0), h(d, y, se, "⋅", "\\cdot", !0), h(d, y, se, "∘", "\\circ", !0), h(d, y, se, "÷", "\\div", !0), h(d, y, se, "±", "\\pm", !0), h(d, y, se, "×", "\\times", !0), h(d, y, se, "∩", "\\cap", !0), h(d, y, se, "∪", "\\cup", !0), h(d, y, se, "∖", "\\setminus", !0), h(d, y, se, "∧", "\\land"), h(d, y, se, "∨", "\\lor"), h(d, y, se, "∧", "\\wedge", !0), h(d, y, se, "∨", "\\vee", !0), h(d, y, E, "√", "\\surd"), h(d, y, ie, "⟨", "\\langle", !0), h(d, y, ie, "∣", "\\lvert"), h(d, y, ie, "∥", "\\lVert"), h(d, y, lt, "?", "?"), h(d, y, lt, "!", "!"), h(d, y, lt, "⟩", "\\rangle", !0), h(d, y, lt, "∣", "\\rvert"), h(d, y, lt, "∥", "\\rVert"), h(d, y, A, "=", "="), h(d, y, A, ":", ":"), h(d, y, A, "≈", "\\approx", !0), h(d, y, A, "≅", "\\cong", !0), h(d, y, A, "≥", "\\ge"), h(d, y, A, "≥", "\\geq", !0), h(d, y, A, "←", "\\gets"), h(d, y, A, ">", "\\gt", !0), h(d, y, A, "∈", "\\in", !0), h(d, y, A, "", "\\@not"), h(d, y, A, "⊂", "\\subset", !0), h(d, y, A, "⊃", "\\supset", !0), h(d, y, A, "⊆", "\\subseteq", !0), h(d, y, A, "⊇", "\\supseteq", !0), h(d, T, A, "⊈", "\\nsubseteq", !0), h(d, T, A, "⊉", "\\nsupseteq", !0), h(d, y, A, "⊨", "\\models"), h(d, y, A, "←", "\\leftarrow", !0), h(d, y, A, "≤", "\\le"), h(d, y, A, "≤", "\\leq", !0), h(d, y, A, "<", "\\lt", !0), h(d, y, A, "→", "\\rightarrow", !0), h(d, y, A, "→", "\\to"), h(d, T, A, "≱", "\\ngeq", !0), h(d, T, A, "≰", "\\nleq", !0), h(d, y, We, " ", "\\ "), h(d, y, We, " ", "\\space"), h(d, y, We, " ", "\\nobreakspace"), h(W, y, We, " ", "\\ "), h(W, y, We, " ", " "), h(W, y, We, " ", "\\space"), h(W, y, We, " ", "\\nobreakspace"), h(d, y, We, null, "\\nobreak"), h(d, y, We, null, "\\allowbreak"), h(d, y, Be, ",", ","), h(d, y, Be, ";", ";"), h(d, T, se, "⊼", "\\barwedge", !0), h(d, T, se, "⊻", "\\veebar", !0), h(d, y, se, "⊙", "\\odot", !0), h(d, y, se, "⊕", "\\oplus", !0), h(d, y, se, "⊗", "\\otimes", !0), h(d, y, E, "∂", "\\partial", !0), h(d, y, se, "⊘", "\\oslash", !0), h(d, T, se, "⊚", "\\circledcirc", !0), h(d, T, se, "⊡", "\\boxdot", !0), h(d, y, se, "△", "\\bigtriangleup"), h(d, y, se, "▽", "\\bigtriangledown"), h(d, y, se, "†", "\\dagger"), h(d, y, se, "⋄", "\\diamond"), h(d, y, se, "⋆", "\\star"), h(d, y, se, "◃", "\\triangleleft"), h(d, y, se, "▹", "\\triangleright"), h(d, y, ie, "{", "\\{"), h(W, y, E, "{", "\\{"), h(W, y, E, "{", "\\textbraceleft"), h(d, y, lt, "}", "\\}"), h(W, y, E, "}", "\\}"), h(W, y, E, "}", "\\textbraceright"), h(d, y, ie, "{", "\\lbrace"), h(d, y, lt, "}", "\\rbrace"), h(d, y, ie, "[", "\\lbrack", !0), h(W, y, E, "[", "\\lbrack", !0), h(d, y, lt, "]", "\\rbrack", !0), h(W, y, E, "]", "\\rbrack", !0), h(d, y, ie, "(", "\\lparen", !0), h(d, y, lt, ")", "\\rparen", !0), h(W, y, E, "<", "\\textless", !0), h(W, y, E, ">", "\\textgreater", !0), h(d, y, ie, "⌊", "\\lfloor", !0), h(d, y, lt, "⌋", "\\rfloor", !0), h(d, y, ie, "⌈", "\\lceil", !0), h(d, y, lt, "⌉", "\\rceil", !0), h(d, y, E, "\\", "\\backslash"), h(d, y, E, "∣", "|"), h(d, y, E, "∣", "\\vert"), h(W, y, E, "|", "\\textbar", !0), h(d, y, E, "∥", "\\|"), h(d, y, E, "∥", "\\Vert"), h(W, y, E, "∥", "\\textbardbl"), h(W, y, E, "~", "\\textasciitilde"), h(W, y, E, "\\", "\\textbackslash"), h(W, y, E, "^", "\\textasciicircum"), h(d, y, A, "↑", "\\uparrow", !0), h(d, y, A, "⇑", "\\Uparrow", !0), h(d, y, A, "↓", "\\downarrow", !0), h(d, y, A, "⇓", "\\Downarrow", !0), h(d, y, A, "↕", "\\updownarrow", !0), h(d, y, A, "⇕", "\\Updownarrow", !0), h(d, y, X, "∐", "\\coprod"), h(d, y, X, "⋁", "\\bigvee"), h(d, y, X, "⋀", "\\bigwedge"), h(d, y, X, "⨄", "\\biguplus"), h(d, y, X, "⋂", "\\bigcap"), h(d, y, X, "⋃", "\\bigcup"), h(d, y, X, "∫", "\\int"), h(d, y, X, "∫", "\\intop"), h(d, y, X, "∬", "\\iint"), h(d, y, X, "∭", "\\iiint"), h(d, y, X, "∏", "\\prod"), h(d, y, X, "∑", "\\sum"), h(d, y, X, "⨂", "\\bigotimes"), h(d, y, X, "⨁", "\\bigoplus"), h(d, y, X, "⨀", "\\bigodot"), h(d, y, X, "∮", "\\oint"), h(d, y, X, "∯", "\\oiint"), h(d, y, X, "∰", "\\oiiint"), h(d, y, X, "⨆", "\\bigsqcup"), h(d, y, X, "∫", "\\smallint"), h(W, y, he, "…", "\\textellipsis"), h(d, y, he, "…", "\\mathellipsis"), h(W, y, he, "…", "\\ldots", !0), h(d, y, he, "…", "\\ldots", !0), h(d, y, he, "⋯", "\\@cdots", !0), h(d, y, he, "⋱", "\\ddots", !0), h(d, y, E, "⋮", "\\varvdots"), h(d, y, He, "ˊ", "\\acute"), h(d, y, He, "ˋ", "\\grave"), h(d, y, He, "¨", "\\ddot"), h(d, y, He, "~", "\\tilde"), h(d, y, He, "ˉ", "\\bar"), h(d, y, He, "˘", "\\breve"), h(d, y, He, "ˇ", "\\check"), h(d, y, He, "^", "\\hat"), h(d, y, He, "⃗", "\\vec"), h(d, y, He, "˙", "\\dot"), h(d, y, He, "˚", "\\mathring"), h(d, y, M, "", "\\@imath"), h(d, y, M, "", "\\@jmath"), h(d, y, E, "ı", "ı"), h(d, y, E, "ȷ", "ȷ"), h(W, y, E, "ı", "\\i", !0), h(W, y, E, "ȷ", "\\j", !0), h(W, y, E, "ß", "\\ss", !0), h(W, y, E, "æ", "\\ae", !0), h(W, y, E, "œ", "\\oe", !0), h(W, y, E, "ø", "\\o", !0), h(W, y, E, "Æ", "\\AE", !0), h(W, y, E, "Œ", "\\OE", !0), h(W, y, E, "Ø", "\\O", !0), h(W, y, He, "ˊ", "\\'"), h(W, y, He, "ˋ", "\\`"), h(W, y, He, "ˆ", "\\^"), h(W, y, He, "˜", "\\~"), h(W, y, He, "ˉ", "\\="), h(W, y, He, "˘", "\\u"), h(W, y, He, "˙", "\\."), h(W, y, He, "¸", "\\c"), h(W, y, He, "˚", "\\r"), h(W, y, He, "ˇ", "\\v"), h(W, y, He, "¨", '\\"'), h(W, y, He, "˝", "\\H"), h(W, y, He, "◯", "\\textcircled");
          var Zt = {
            "--": !0,
            "---": !0,
            "``": !0,
            "''": !0
          };
          h(W, y, E, "–", "--", !0), h(W, y, E, "–", "\\textendash"), h(W, y, E, "—", "---", !0), h(W, y, E, "—", "\\textemdash"), h(W, y, E, "‘", "`", !0), h(W, y, E, "‘", "\\textquoteleft"), h(W, y, E, "’", "'", !0), h(W, y, E, "’", "\\textquoteright"), h(W, y, E, "“", "``", !0), h(W, y, E, "“", "\\textquotedblleft"), h(W, y, E, "”", "''", !0), h(W, y, E, "”", "\\textquotedblright"), h(d, y, E, "°", "\\degree", !0), h(W, y, E, "°", "\\degree"), h(W, y, E, "°", "\\textdegree", !0), h(d, y, E, "£", "\\pounds"), h(d, y, E, "£", "\\mathsterling", !0), h(W, y, E, "£", "\\pounds"), h(W, y, E, "£", "\\textsterling", !0), h(d, T, E, "✠", "\\maltese"), h(W, T, E, "✠", "\\maltese");
          for (var x0 = '0123456789/@."', it = 0; it < x0.length; it++) {
            var Er = x0.charAt(it);
            h(d, y, E, Er, Er);
          }
          for (var Br = '0123456789!@*()-=+";:?/.,', Wn = 0; Wn < Br.length; Wn++) {
            var hi = Br.charAt(Wn);
            h(W, y, E, hi, hi);
          }
          for (var Qr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", jn = 0; jn < Qr.length; jn++) {
            var Jr = Qr.charAt(jn);
            h(d, y, M, Jr, Jr), h(W, y, E, Jr, Jr);
          }
          h(d, T, E, "C", "ℂ"), h(W, T, E, "C", "ℂ"), h(d, T, E, "H", "ℍ"), h(W, T, E, "H", "ℍ"), h(d, T, E, "N", "ℕ"), h(W, T, E, "N", "ℕ"), h(d, T, E, "P", "ℙ"), h(W, T, E, "P", "ℙ"), h(d, T, E, "Q", "ℚ"), h(W, T, E, "Q", "ℚ"), h(d, T, E, "R", "ℝ"), h(W, T, E, "R", "ℝ"), h(d, T, E, "Z", "ℤ"), h(W, T, E, "Z", "ℤ"), h(d, y, M, "h", "ℎ"), h(W, y, M, "h", "ℎ");
          for (var ve = "", mt = 0; mt < Qr.length; mt++) {
            var Je = Qr.charAt(mt);
            ve = String.fromCharCode(55349, 56320 + mt), h(d, y, M, Je, ve), h(W, y, E, Je, ve), ve = String.fromCharCode(55349, 56372 + mt), h(d, y, M, Je, ve), h(W, y, E, Je, ve), ve = String.fromCharCode(55349, 56424 + mt), h(d, y, M, Je, ve), h(W, y, E, Je, ve), ve = String.fromCharCode(55349, 56580 + mt), h(d, y, M, Je, ve), h(W, y, E, Je, ve), ve = String.fromCharCode(55349, 56684 + mt), h(d, y, M, Je, ve), h(W, y, E, Je, ve), ve = String.fromCharCode(55349, 56736 + mt), h(d, y, M, Je, ve), h(W, y, E, Je, ve), ve = String.fromCharCode(55349, 56788 + mt), h(d, y, M, Je, ve), h(W, y, E, Je, ve), ve = String.fromCharCode(55349, 56840 + mt), h(d, y, M, Je, ve), h(W, y, E, Je, ve), ve = String.fromCharCode(55349, 56944 + mt), h(d, y, M, Je, ve), h(W, y, E, Je, ve), mt < 26 && (ve = String.fromCharCode(55349, 56632 + mt), h(d, y, M, Je, ve), h(W, y, E, Je, ve), ve = String.fromCharCode(55349, 56476 + mt), h(d, y, M, Je, ve), h(W, y, E, Je, ve));
          }
          ve = String.fromCharCode(55349, 56668), h(d, y, M, "k", ve), h(W, y, E, "k", ve);
          for (var X0 = 0; X0 < 10; X0++) {
            var S0 = X0.toString();
            ve = String.fromCharCode(55349, 57294 + X0), h(d, y, M, S0, ve), h(W, y, E, S0, ve), ve = String.fromCharCode(55349, 57314 + X0), h(d, y, M, S0, ve), h(W, y, E, S0, ve), ve = String.fromCharCode(55349, 57324 + X0), h(d, y, M, S0, ve), h(W, y, E, S0, ve), ve = String.fromCharCode(55349, 57334 + X0), h(d, y, M, S0, ve), h(W, y, E, S0, ve);
          }
          for (var Yn = "ÐÞþ", Xn = 0; Xn < Yn.length; Xn++) {
            var $r = Yn.charAt(Xn);
            h(d, y, M, $r, $r), h(W, y, E, $r, $r);
          }
          var en = [
            ["mathbf", "textbf", "Main-Bold"],
            // A-Z bold upright
            ["mathbf", "textbf", "Main-Bold"],
            // a-z bold upright
            ["mathnormal", "textit", "Math-Italic"],
            // A-Z italic
            ["mathnormal", "textit", "Math-Italic"],
            // a-z italic
            ["boldsymbol", "boldsymbol", "Main-BoldItalic"],
            // A-Z bold italic
            ["boldsymbol", "boldsymbol", "Main-BoldItalic"],
            // a-z bold italic
            // Map fancy A-Z letters to script, not calligraphic.
            // This aligns with unicode-math and math fonts (except Cambria Math).
            ["mathscr", "textscr", "Script-Regular"],
            // A-Z script
            ["", "", ""],
            // a-z script.  No font
            ["", "", ""],
            // A-Z bold script. No font
            ["", "", ""],
            // a-z bold script. No font
            ["mathfrak", "textfrak", "Fraktur-Regular"],
            // A-Z Fraktur
            ["mathfrak", "textfrak", "Fraktur-Regular"],
            // a-z Fraktur
            ["mathbb", "textbb", "AMS-Regular"],
            // A-Z double-struck
            ["mathbb", "textbb", "AMS-Regular"],
            // k double-struck
            // Note that we are using a bold font, but font metrics for regular Fraktur.
            ["mathboldfrak", "textboldfrak", "Fraktur-Regular"],
            // A-Z bold Fraktur
            ["mathboldfrak", "textboldfrak", "Fraktur-Regular"],
            // a-z bold Fraktur
            ["mathsf", "textsf", "SansSerif-Regular"],
            // A-Z sans-serif
            ["mathsf", "textsf", "SansSerif-Regular"],
            // a-z sans-serif
            ["mathboldsf", "textboldsf", "SansSerif-Bold"],
            // A-Z bold sans-serif
            ["mathboldsf", "textboldsf", "SansSerif-Bold"],
            // a-z bold sans-serif
            ["mathitsf", "textitsf", "SansSerif-Italic"],
            // A-Z italic sans-serif
            ["mathitsf", "textitsf", "SansSerif-Italic"],
            // a-z italic sans-serif
            ["", "", ""],
            // A-Z bold italic sans. No font
            ["", "", ""],
            // a-z bold italic sans. No font
            ["mathtt", "texttt", "Typewriter-Regular"],
            // A-Z monospace
            ["mathtt", "texttt", "Typewriter-Regular"]
            // a-z monospace
          ], fi = [
            ["mathbf", "textbf", "Main-Bold"],
            // 0-9 bold
            ["", "", ""],
            // 0-9 double-struck. No KaTeX font.
            ["mathsf", "textsf", "SansSerif-Regular"],
            // 0-9 sans-serif
            ["mathboldsf", "textboldsf", "SansSerif-Bold"],
            // 0-9 bold sans-serif
            ["mathtt", "texttt", "Typewriter-Regular"]
            // 0-9 monospace
          ], Uo = function(e, t) {
            var n = e.charCodeAt(0), l = e.charCodeAt(1), u = (n - 55296) * 1024 + (l - 56320) + 65536, m = t === "math" ? 0 : 1;
            if (119808 <= u && u < 120484) {
              var b = Math.floor((u - 119808) / 26);
              return [en[b][2], en[b][m]];
            } else if (120782 <= u && u <= 120831) {
              var k = Math.floor((u - 120782) / 10);
              return [fi[k][2], fi[k][m]];
            } else {
              if (u === 120485 || u === 120486)
                return [en[0][2], en[0][m]];
              if (120486 < u && u < 120782)
                return ["", ""];
              throw new c("Unsupported character: " + e);
            }
          }, tn = function(e, t, n) {
            return Ve[n][e] && Ve[n][e].replace && (e = Ve[n][e].replace), {
              value: e,
              metrics: Yt(e, t, n)
            };
          }, Ut = function(e, t, n, l, u) {
            var m = tn(e, t, n), b = m.metrics;
            e = m.value;
            var k;
            if (b) {
              var x = b.italic;
              (n === "text" || l && l.font === "mathit") && (x = 0), k = new ft(e, b.height, b.depth, x, b.skew, b.width, u);
            } else
              typeof console < "u" && console.warn("No character metrics " + ("for '" + e + "' in style '" + t + "' and mode '" + n + "'")), k = new ft(e, 0, 0, 0, 0, 0, u);
            if (l) {
              k.maxFontSize = l.sizeMultiplier, l.style.isTight() && k.classes.push("mtight");
              var z = l.getColor();
              z && (k.style.color = z);
            }
            return k;
          }, Go = function(e, t, n, l) {
            return l === void 0 && (l = []), n.font === "boldsymbol" && tn(e, "Main-Bold", t).metrics ? Ut(e, "Main-Bold", t, n, l.concat(["mathbf"])) : e === "\\" || Ve[t][e].font === "main" ? Ut(e, "Main-Regular", t, n, l) : Ut(e, "AMS-Regular", t, n, l.concat(["amsrm"]));
          }, Vo = function(e, t, n, l, u) {
            return u !== "textord" && tn(e, "Math-BoldItalic", t).metrics ? {
              fontName: "Math-BoldItalic",
              fontClass: "boldsymbol"
            } : {
              fontName: "Main-Bold",
              fontClass: "mathbf"
            };
          }, Wo = function(e, t, n) {
            var l = e.mode, u = e.text, m = ["mord"], b = l === "math" || l === "text" && t.font, k = b ? t.font : t.fontFamily, x = "", z = "";
            if (u.charCodeAt(0) === 55349) {
              var N = Uo(u, l);
              x = N[0], z = N[1];
            }
            if (x.length > 0)
              return Ut(u, x, l, t, m.concat(z));
            if (k) {
              var H, P;
              if (k === "boldsymbol") {
                var V = Vo(u, l, t, m, n);
                H = V.fontName, P = [V.fontClass];
              } else
                b ? (H = pi[k].fontName, P = [k]) : (H = rn(k, t.fontWeight, t.fontShape), P = [k, t.fontWeight, t.fontShape]);
              if (tn(u, H, l).metrics)
                return Ut(u, H, l, t, m.concat(P));
              if (Zt.hasOwnProperty(u) && H.slice(0, 10) === "Typewriter") {
                for (var ee = [], ae = 0; ae < u.length; ae++)
                  ee.push(Ut(u[ae], H, l, t, m.concat(P)));
                return di(ee);
              }
            }
            if (n === "mathord")
              return Ut(u, "Math-Italic", l, t, m.concat(["mathnormal"]));
            if (n === "textord") {
              var ce = Ve[l][u] && Ve[l][u].font;
              if (ce === "ams") {
                var fe = rn("amsrm", t.fontWeight, t.fontShape);
                return Ut(u, fe, l, t, m.concat("amsrm", t.fontWeight, t.fontShape));
              } else if (ce === "main" || !ce) {
                var de = rn("textrm", t.fontWeight, t.fontShape);
                return Ut(u, de, l, t, m.concat(t.fontWeight, t.fontShape));
              } else {
                var Ce = rn(ce, t.fontWeight, t.fontShape);
                return Ut(u, Ce, l, t, m.concat(Ce, t.fontWeight, t.fontShape));
              }
            } else
              throw new Error("unexpected type: " + n + " in makeOrd");
          }, jo = function(e, t) {
            if (ct(e.classes) !== ct(t.classes) || e.skew !== t.skew || e.maxFontSize !== t.maxFontSize)
              return !1;
            if (e.classes.length === 1) {
              var n = e.classes[0];
              if (n === "mbin" || n === "mord")
                return !1;
            }
            for (var l in e.style)
              if (e.style.hasOwnProperty(l) && e.style[l] !== t.style[l])
                return !1;
            for (var u in t.style)
              if (t.style.hasOwnProperty(u) && e.style[u] !== t.style[u])
                return !1;
            return !0;
          }, Yo = function(e) {
            for (var t = 0; t < e.length - 1; t++) {
              var n = e[t], l = e[t + 1];
              n instanceof ft && l instanceof ft && jo(n, l) && (n.text += l.text, n.height = Math.max(n.height, l.height), n.depth = Math.max(n.depth, l.depth), n.italic = l.italic, e.splice(t + 1, 1), t--);
            }
            return e;
          }, Zn = function(e) {
            for (var t = 0, n = 0, l = 0, u = 0; u < e.children.length; u++) {
              var m = e.children[u];
              m.height > t && (t = m.height), m.depth > n && (n = m.depth), m.maxFontSize > l && (l = m.maxFontSize);
            }
            e.height = t, e.depth = n, e.maxFontSize = l;
          }, wt = function(e, t, n, l) {
            var u = new Dt(e, t, n, l);
            return Zn(u), u;
          }, mi = function(e, t, n, l) {
            return new Dt(e, t, n, l);
          }, Xo = function(e, t, n) {
            var l = wt([e], [], t);
            return l.height = Math.max(n || t.fontMetrics().defaultRuleThickness, t.minRuleThickness), l.style.borderBottomWidth = te(l.height), l.maxFontSize = 1, l;
          }, Zo = function(e, t, n, l) {
            var u = new Mr(e, t, n, l);
            return Zn(u), u;
          }, di = function(e) {
            var t = new v0(e);
            return Zn(t), t;
          }, Ko = function(e, t) {
            return e instanceof v0 ? wt([], [e], t) : e;
          }, Qo = function(e) {
            if (e.positionType === "individualShift") {
              for (var t = e.children, n = [t[0]], l = -t[0].shift - t[0].elem.depth, u = l, m = 1; m < t.length; m++) {
                var b = -t[m].shift - u - t[m].elem.depth, k = b - (t[m - 1].elem.height + t[m - 1].elem.depth);
                u = u + b, n.push({
                  type: "kern",
                  size: k
                }), n.push(t[m]);
              }
              return {
                children: n,
                depth: l
              };
            }
            var x;
            if (e.positionType === "top") {
              for (var z = e.positionData, N = 0; N < e.children.length; N++) {
                var H = e.children[N];
                z -= H.type === "kern" ? H.size : H.elem.height + H.elem.depth;
              }
              x = z;
            } else if (e.positionType === "bottom")
              x = -e.positionData;
            else {
              var P = e.children[0];
              if (P.type !== "elem")
                throw new Error('First child must have type "elem".');
              if (e.positionType === "shift")
                x = -P.elem.depth - e.positionData;
              else if (e.positionType === "firstBaseline")
                x = -P.elem.depth;
              else
                throw new Error("Invalid positionType " + e.positionType + ".");
            }
            return {
              children: e.children,
              depth: x
            };
          }, Jo = function(e, t) {
            for (var n = Qo(e), l = n.children, u = n.depth, m = 0, b = 0; b < l.length; b++) {
              var k = l[b];
              if (k.type === "elem") {
                var x = k.elem;
                m = Math.max(m, x.maxFontSize, x.height);
              }
            }
            m += 2;
            var z = wt(["pstrut"], []);
            z.style.height = te(m);
            for (var N = [], H = u, P = u, V = u, ee = 0; ee < l.length; ee++) {
              var ae = l[ee];
              if (ae.type === "kern")
                V += ae.size;
              else {
                var ce = ae.elem, fe = ae.wrapperClasses || [], de = ae.wrapperStyle || {}, Ce = wt(fe, [z, ce], void 0, de);
                Ce.style.top = te(-m - V - ce.depth), ae.marginLeft && (Ce.style.marginLeft = ae.marginLeft), ae.marginRight && (Ce.style.marginRight = ae.marginRight), N.push(Ce), V += ce.height + ce.depth;
              }
              H = Math.min(H, V), P = Math.max(P, V);
            }
            var ye = wt(["vlist"], N);
            ye.style.height = te(P);
            var Re;
            if (H < 0) {
              var Me = wt([], []), qe = wt(["vlist"], [Me]);
              qe.style.height = te(-H);
              var Ye = wt(["vlist-s"], [new ft("​")]);
              Re = [wt(["vlist-r"], [ye, Ye]), wt(["vlist-r"], [qe])];
            } else
              Re = [wt(["vlist-r"], [ye])];
            var st = wt(["vlist-t"], Re);
            return Re.length === 2 && st.classes.push("vlist-t2"), st.height = P, st.depth = -H, st;
          }, $o = function(e, t) {
            var n = wt(["mspace"], [], t), l = Pe(e, t);
            return n.style.marginRight = te(l), n;
          }, rn = function(e, t, n) {
            var l = "";
            switch (e) {
              case "amsrm":
                l = "AMS";
                break;
              case "textrm":
                l = "Main";
                break;
              case "textsf":
                l = "SansSerif";
                break;
              case "texttt":
                l = "Typewriter";
                break;
              default:
                l = e;
            }
            var u;
            return t === "textbf" && n === "textit" ? u = "BoldItalic" : t === "textbf" ? u = "Bold" : t === "textit" ? u = "Italic" : u = "Regular", l + "-" + u;
          }, pi = {
            // styles
            mathbf: {
              variant: "bold",
              fontName: "Main-Bold"
            },
            mathrm: {
              variant: "normal",
              fontName: "Main-Regular"
            },
            textit: {
              variant: "italic",
              fontName: "Main-Italic"
            },
            mathit: {
              variant: "italic",
              fontName: "Main-Italic"
            },
            mathnormal: {
              variant: "italic",
              fontName: "Math-Italic"
            },
            // "boldsymbol" is missing because they require the use of multiple fonts:
            // Math-BoldItalic and Main-Bold.  This is handled by a special case in
            // makeOrd which ends up calling boldsymbol.
            // families
            mathbb: {
              variant: "double-struck",
              fontName: "AMS-Regular"
            },
            mathcal: {
              variant: "script",
              fontName: "Caligraphic-Regular"
            },
            mathfrak: {
              variant: "fraktur",
              fontName: "Fraktur-Regular"
            },
            mathscr: {
              variant: "script",
              fontName: "Script-Regular"
            },
            mathsf: {
              variant: "sans-serif",
              fontName: "SansSerif-Regular"
            },
            mathtt: {
              variant: "monospace",
              fontName: "Typewriter-Regular"
            }
          }, gi = {
            //   path, width, height
            vec: ["vec", 0.471, 0.714],
            // values from the font glyph
            oiintSize1: ["oiintSize1", 0.957, 0.499],
            // oval to overlay the integrand
            oiintSize2: ["oiintSize2", 1.472, 0.659],
            oiiintSize1: ["oiiintSize1", 1.304, 0.499],
            oiiintSize2: ["oiiintSize2", 1.98, 0.659]
          }, e1 = function(e, t) {
            var n = gi[e], l = n[0], u = n[1], m = n[2], b = new Xt(l), k = new Nt([b], {
              width: te(u),
              height: te(m),
              // Override CSS rule `.katex svg { width: 100% }`
              style: "width:" + te(u),
              viewBox: "0 0 " + 1e3 * u + " " + 1e3 * m,
              preserveAspectRatio: "xMinYMin"
            }), x = mi(["overlay"], [k], t);
            return x.height = m, x.style.height = te(m), x.style.width = te(u), x;
          }, R = {
            fontMap: pi,
            makeSymbol: Ut,
            mathsym: Go,
            makeSpan: wt,
            makeSvgSpan: mi,
            makeLineSpan: Xo,
            makeAnchor: Zo,
            makeFragment: di,
            wrapFragment: Ko,
            makeVList: Jo,
            makeOrd: Wo,
            makeGlue: $o,
            staticSvg: e1,
            svgData: gi,
            tryCombineChars: Yo
          }, Ze = {
            number: 3,
            unit: "mu"
          }, Z0 = {
            number: 4,
            unit: "mu"
          }, u0 = {
            number: 5,
            unit: "mu"
          }, t1 = {
            mord: {
              mop: Ze,
              mbin: Z0,
              mrel: u0,
              minner: Ze
            },
            mop: {
              mord: Ze,
              mop: Ze,
              mrel: u0,
              minner: Ze
            },
            mbin: {
              mord: Z0,
              mop: Z0,
              mopen: Z0,
              minner: Z0
            },
            mrel: {
              mord: u0,
              mop: u0,
              mopen: u0,
              minner: u0
            },
            mopen: {},
            mclose: {
              mop: Ze,
              mbin: Z0,
              mrel: u0,
              minner: Ze
            },
            mpunct: {
              mord: Ze,
              mop: Ze,
              mrel: u0,
              mopen: Ze,
              mclose: Ze,
              mpunct: Ze,
              minner: Ze
            },
            minner: {
              mord: Ze,
              mop: Ze,
              mbin: Z0,
              mrel: u0,
              mopen: Ze,
              mpunct: Ze,
              minner: Ze
            }
          }, r1 = {
            mord: {
              mop: Ze
            },
            mop: {
              mord: Ze,
              mop: Ze
            },
            mbin: {},
            mrel: {},
            mopen: {},
            mclose: {
              mop: Ze
            },
            mpunct: {},
            minner: {
              mop: Ze
            }
          }, vi = {}, nn = {}, an = {};
          function le(f) {
            for (var e = f.type, t = f.names, n = f.props, l = f.handler, u = f.htmlBuilder, m = f.mathmlBuilder, b = {
              type: e,
              numArgs: n.numArgs,
              argTypes: n.argTypes,
              allowedInArgument: !!n.allowedInArgument,
              allowedInText: !!n.allowedInText,
              allowedInMath: n.allowedInMath === void 0 ? !0 : n.allowedInMath,
              numOptionalArgs: n.numOptionalArgs || 0,
              infix: !!n.infix,
              primitive: !!n.primitive,
              handler: l
            }, k = 0; k < t.length; ++k)
              vi[t[k]] = b;
            e && (u && (nn[e] = u), m && (an[e] = m));
          }
          function K0(f) {
            var e = f.type, t = f.htmlBuilder, n = f.mathmlBuilder;
            le({
              type: e,
              names: [],
              props: {
                numArgs: 0
              },
              handler: function() {
                throw new Error("Should never be called.");
              },
              htmlBuilder: t,
              mathmlBuilder: n
            });
          }
          var ln = function(e) {
            return e.type === "ordgroup" && e.body.length === 1 ? e.body[0] : e;
          }, et = function(e) {
            return e.type === "ordgroup" ? e.body : [e];
          }, c0 = R.makeSpan, n1 = ["leftmost", "mbin", "mopen", "mrel", "mop", "mpunct"], a1 = ["rightmost", "mrel", "mclose", "mpunct"], i1 = {
            display: I.DISPLAY,
            text: I.TEXT,
            script: I.SCRIPT,
            scriptscript: I.SCRIPTSCRIPT
          }, l1 = {
            mord: "mord",
            mop: "mop",
            mbin: "mbin",
            mrel: "mrel",
            mopen: "mopen",
            mclose: "mclose",
            mpunct: "mpunct",
            minner: "minner"
          }, nt = function(e, t, n, l) {
            l === void 0 && (l = [null, null]);
            for (var u = [], m = 0; m < e.length; m++) {
              var b = Te(e[m], t);
              if (b instanceof v0) {
                var k = b.children;
                u.push.apply(u, k);
              } else
                u.push(b);
            }
            if (R.tryCombineChars(u), !n)
              return u;
            var x = t;
            if (e.length === 1) {
              var z = e[0];
              z.type === "sizing" ? x = t.havingSize(z.size) : z.type === "styling" && (x = t.havingStyle(i1[z.style]));
            }
            var N = c0([l[0] || "leftmost"], [], t), H = c0([l[1] || "rightmost"], [], t), P = n === "root";
            return bi(u, function(V, ee) {
              var ae = ee.classes[0], ce = V.classes[0];
              ae === "mbin" && U.contains(a1, ce) ? ee.classes[0] = "mord" : ce === "mbin" && U.contains(n1, ae) && (V.classes[0] = "mord");
            }, {
              node: N
            }, H, P), bi(u, function(V, ee) {
              var ae = Kn(ee), ce = Kn(V), fe = ae && ce ? V.hasClass("mtight") ? r1[ae][ce] : t1[ae][ce] : null;
              if (fe)
                return R.makeGlue(fe, x);
            }, {
              node: N
            }, H, P), u;
          }, bi = function f(e, t, n, l, u) {
            l && e.push(l);
            for (var m = 0; m < e.length; m++) {
              var b = e[m], k = yi(b);
              if (k) {
                f(k.children, t, n, null, u);
                continue;
              }
              var x = !b.hasClass("mspace");
              if (x) {
                var z = t(b, n.node);
                z && (n.insertAfter ? n.insertAfter(z) : (e.unshift(z), m++));
              }
              x ? n.node = b : u && b.hasClass("newline") && (n.node = c0(["leftmost"])), n.insertAfter = function(N) {
                return function(H) {
                  e.splice(N + 1, 0, H), m++;
                };
              }(m);
            }
            l && e.pop();
          }, yi = function(e) {
            return e instanceof v0 || e instanceof Mr || e instanceof Dt && e.hasClass("enclosing") ? e : null;
          }, s1 = function f(e, t) {
            var n = yi(e);
            if (n) {
              var l = n.children;
              if (l.length) {
                if (t === "right")
                  return f(l[l.length - 1], "right");
                if (t === "left")
                  return f(l[0], "left");
              }
            }
            return e;
          }, Kn = function(e, t) {
            return e ? (t && (e = s1(e, t)), l1[e.classes[0]] || null) : null;
          }, Dr = function(e, t) {
            var n = ["nulldelimiter"].concat(e.baseSizingClasses());
            return c0(t.concat(n));
          }, Te = function(e, t, n) {
            if (!e)
              return c0();
            if (nn[e.type]) {
              var l = nn[e.type](e, t);
              if (n && t.size !== n.size) {
                l = c0(t.sizingClasses(n), [l], t);
                var u = t.sizeMultiplier / n.sizeMultiplier;
                l.height *= u, l.depth *= u;
              }
              return l;
            } else
              throw new c("Got group of unknown type: '" + e.type + "'");
          };
          function sn(f, e) {
            var t = c0(["base"], f, e), n = c0(["strut"]);
            return n.style.height = te(t.height + t.depth), t.depth && (n.style.verticalAlign = te(-t.depth)), t.children.unshift(n), t;
          }
          function Qn(f, e) {
            var t = null;
            f.length === 1 && f[0].type === "tag" && (t = f[0].tag, f = f[0].body);
            var n = nt(f, e, "root"), l;
            n.length === 2 && n[1].hasClass("tag") && (l = n.pop());
            for (var u = [], m = [], b = 0; b < n.length; b++)
              if (m.push(n[b]), n[b].hasClass("mbin") || n[b].hasClass("mrel") || n[b].hasClass("allowbreak")) {
                for (var k = !1; b < n.length - 1 && n[b + 1].hasClass("mspace") && !n[b + 1].hasClass("newline"); )
                  b++, m.push(n[b]), n[b].hasClass("nobreak") && (k = !0);
                k || (u.push(sn(m, e)), m = []);
              } else
                n[b].hasClass("newline") && (m.pop(), m.length > 0 && (u.push(sn(m, e)), m = []), u.push(n[b]));
            m.length > 0 && u.push(sn(m, e));
            var x;
            t ? (x = sn(nt(t, e, !0)), x.classes = ["tag"], u.push(x)) : l && u.push(l);
            var z = c0(["katex-html"], u);
            if (z.setAttribute("aria-hidden", "true"), x) {
              var N = x.children[0];
              N.style.height = te(z.height + z.depth), z.depth && (N.style.verticalAlign = te(-z.depth));
            }
            return z;
          }
          function wi(f) {
            return new v0(f);
          }
          var Rt = /* @__PURE__ */ function() {
            function f(t, n, l) {
              this.type = void 0, this.attributes = void 0, this.children = void 0, this.classes = void 0, this.type = t, this.attributes = {}, this.children = n || [], this.classes = l || [];
            }
            var e = f.prototype;
            return e.setAttribute = function(n, l) {
              this.attributes[n] = l;
            }, e.getAttribute = function(n) {
              return this.attributes[n];
            }, e.toNode = function() {
              var n = document.createElementNS("http://www.w3.org/1998/Math/MathML", this.type);
              for (var l in this.attributes)
                Object.prototype.hasOwnProperty.call(this.attributes, l) && n.setAttribute(l, this.attributes[l]);
              this.classes.length > 0 && (n.className = ct(this.classes));
              for (var u = 0; u < this.children.length; u++)
                n.appendChild(this.children[u].toNode());
              return n;
            }, e.toMarkup = function() {
              var n = "<" + this.type;
              for (var l in this.attributes)
                Object.prototype.hasOwnProperty.call(this.attributes, l) && (n += " " + l + '="', n += U.escape(this.attributes[l]), n += '"');
              this.classes.length > 0 && (n += ' class ="' + U.escape(ct(this.classes)) + '"'), n += ">";
              for (var u = 0; u < this.children.length; u++)
                n += this.children[u].toMarkup();
              return n += "</" + this.type + ">", n;
            }, e.toText = function() {
              return this.children.map(function(n) {
                return n.toText();
              }).join("");
            }, f;
          }(), Nr = /* @__PURE__ */ function() {
            function f(t) {
              this.text = void 0, this.text = t;
            }
            var e = f.prototype;
            return e.toNode = function() {
              return document.createTextNode(this.text);
            }, e.toMarkup = function() {
              return U.escape(this.toText());
            }, e.toText = function() {
              return this.text;
            }, f;
          }(), o1 = /* @__PURE__ */ function() {
            function f(t) {
              this.width = void 0, this.character = void 0, this.width = t, t >= 0.05555 && t <= 0.05556 ? this.character = " " : t >= 0.1666 && t <= 0.1667 ? this.character = " " : t >= 0.2222 && t <= 0.2223 ? this.character = " " : t >= 0.2777 && t <= 0.2778 ? this.character = "  " : t >= -0.05556 && t <= -0.05555 ? this.character = " ⁣" : t >= -0.1667 && t <= -0.1666 ? this.character = " ⁣" : t >= -0.2223 && t <= -0.2222 ? this.character = " ⁣" : t >= -0.2778 && t <= -0.2777 ? this.character = " ⁣" : this.character = null;
            }
            var e = f.prototype;
            return e.toNode = function() {
              if (this.character)
                return document.createTextNode(this.character);
              var n = document.createElementNS("http://www.w3.org/1998/Math/MathML", "mspace");
              return n.setAttribute("width", te(this.width)), n;
            }, e.toMarkup = function() {
              return this.character ? "<mtext>" + this.character + "</mtext>" : '<mspace width="' + te(this.width) + '"/>';
            }, e.toText = function() {
              return this.character ? this.character : " ";
            }, f;
          }(), K = {
            MathNode: Rt,
            TextNode: Nr,
            SpaceNode: o1,
            newDocumentFragment: wi
          }, Ft = function(e, t, n) {
            return Ve[t][e] && Ve[t][e].replace && e.charCodeAt(0) !== 55349 && !(Zt.hasOwnProperty(e) && n && (n.fontFamily && n.fontFamily.slice(4, 6) === "tt" || n.font && n.font.slice(4, 6) === "tt")) && (e = Ve[t][e].replace), new K.TextNode(e);
          }, Jn = function(e) {
            return e.length === 1 ? e[0] : new K.MathNode("mrow", e);
          }, $n = function(e, t) {
            if (t.fontFamily === "texttt")
              return "monospace";
            if (t.fontFamily === "textsf")
              return t.fontShape === "textit" && t.fontWeight === "textbf" ? "sans-serif-bold-italic" : t.fontShape === "textit" ? "sans-serif-italic" : t.fontWeight === "textbf" ? "bold-sans-serif" : "sans-serif";
            if (t.fontShape === "textit" && t.fontWeight === "textbf")
              return "bold-italic";
            if (t.fontShape === "textit")
              return "italic";
            if (t.fontWeight === "textbf")
              return "bold";
            var n = t.font;
            if (!n || n === "mathnormal")
              return null;
            var l = e.mode;
            if (n === "mathit")
              return "italic";
            if (n === "boldsymbol")
              return e.type === "textord" ? "bold" : "bold-italic";
            if (n === "mathbf")
              return "bold";
            if (n === "mathbb")
              return "double-struck";
            if (n === "mathfrak")
              return "fraktur";
            if (n === "mathscr" || n === "mathcal")
              return "script";
            if (n === "mathsf")
              return "sans-serif";
            if (n === "mathtt")
              return "monospace";
            var u = e.text;
            if (U.contains(["\\imath", "\\jmath"], u))
              return null;
            Ve[l][u] && Ve[l][u].replace && (u = Ve[l][u].replace);
            var m = R.fontMap[n].fontName;
            return Yt(u, m, l) ? R.fontMap[n].variant : null;
          }, kt = function(e, t, n) {
            if (e.length === 1) {
              var l = Ue(e[0], t);
              return n && l instanceof Rt && l.type === "mo" && (l.setAttribute("lspace", "0em"), l.setAttribute("rspace", "0em")), [l];
            }
            for (var u = [], m, b = 0; b < e.length; b++) {
              var k = Ue(e[b], t);
              if (k instanceof Rt && m instanceof Rt) {
                if (k.type === "mtext" && m.type === "mtext" && k.getAttribute("mathvariant") === m.getAttribute("mathvariant")) {
                  var x;
                  (x = m.children).push.apply(x, k.children);
                  continue;
                } else if (k.type === "mn" && m.type === "mn") {
                  var z;
                  (z = m.children).push.apply(z, k.children);
                  continue;
                } else if (k.type === "mi" && k.children.length === 1 && m.type === "mn") {
                  var N = k.children[0];
                  if (N instanceof Nr && N.text === ".") {
                    var H;
                    (H = m.children).push.apply(H, k.children);
                    continue;
                  }
                } else if (m.type === "mi" && m.children.length === 1) {
                  var P = m.children[0];
                  if (P instanceof Nr && P.text === "̸" && (k.type === "mo" || k.type === "mi" || k.type === "mn")) {
                    var V = k.children[0];
                    V instanceof Nr && V.text.length > 0 && (V.text = V.text.slice(0, 1) + "̸" + V.text.slice(1), u.pop());
                  }
                }
              }
              u.push(k), m = k;
            }
            return u;
          }, A0 = function(e, t, n) {
            return Jn(kt(e, t, n));
          }, Ue = function(e, t) {
            if (!e)
              return new K.MathNode("mrow");
            if (an[e.type]) {
              var n = an[e.type](e, t);
              return n;
            } else
              throw new c("Got group of unknown type: '" + e.type + "'");
          };
          function ki(f, e, t, n, l) {
            var u = kt(f, t), m;
            u.length === 1 && u[0] instanceof Rt && U.contains(["mrow", "mtable"], u[0].type) ? m = u[0] : m = new K.MathNode("mrow", u);
            var b = new K.MathNode("annotation", [new K.TextNode(e)]);
            b.setAttribute("encoding", "application/x-tex");
            var k = new K.MathNode("semantics", [m, b]), x = new K.MathNode("math", [k]);
            x.setAttribute("xmlns", "http://www.w3.org/1998/Math/MathML"), n && x.setAttribute("display", "block");
            var z = l ? "katex" : "katex-mathml";
            return R.makeSpan([z], [x]);
          }
          var _i = function(e) {
            return new ir({
              style: e.displayMode ? I.DISPLAY : I.TEXT,
              maxSize: e.maxSize,
              minRuleThickness: e.minRuleThickness
            });
          }, xi = function(e, t) {
            if (t.displayMode) {
              var n = ["katex-display"];
              t.leqno && n.push("leqno"), t.fleqn && n.push("fleqn"), e = R.makeSpan(n, [e]);
            }
            return e;
          }, u1 = function(e, t, n) {
            var l = _i(n), u;
            if (n.output === "mathml")
              return ki(e, t, l, n.displayMode, !0);
            if (n.output === "html") {
              var m = Qn(e, l);
              u = R.makeSpan(["katex"], [m]);
            } else {
              var b = ki(e, t, l, n.displayMode, !1), k = Qn(e, l);
              u = R.makeSpan(["katex"], [b, k]);
            }
            return xi(u, n);
          }, c1 = function(e, t, n) {
            var l = _i(n), u = Qn(e, l), m = R.makeSpan(["katex"], [u]);
            return xi(m, n);
          }, h1 = {
            widehat: "^",
            widecheck: "ˇ",
            widetilde: "~",
            utilde: "~",
            overleftarrow: "←",
            underleftarrow: "←",
            xleftarrow: "←",
            overrightarrow: "→",
            underrightarrow: "→",
            xrightarrow: "→",
            underbrace: "⏟",
            overbrace: "⏞",
            overgroup: "⏠",
            undergroup: "⏡",
            overleftrightarrow: "↔",
            underleftrightarrow: "↔",
            xleftrightarrow: "↔",
            Overrightarrow: "⇒",
            xRightarrow: "⇒",
            overleftharpoon: "↼",
            xleftharpoonup: "↼",
            overrightharpoon: "⇀",
            xrightharpoonup: "⇀",
            xLeftarrow: "⇐",
            xLeftrightarrow: "⇔",
            xhookleftarrow: "↩",
            xhookrightarrow: "↪",
            xmapsto: "↦",
            xrightharpoondown: "⇁",
            xleftharpoondown: "↽",
            xrightleftharpoons: "⇌",
            xleftrightharpoons: "⇋",
            xtwoheadleftarrow: "↞",
            xtwoheadrightarrow: "↠",
            xlongequal: "=",
            xtofrom: "⇄",
            xrightleftarrows: "⇄",
            xrightequilibrium: "⇌",
            // Not a perfect match.
            xleftequilibrium: "⇋",
            // None better available.
            "\\cdrightarrow": "→",
            "\\cdleftarrow": "←",
            "\\cdlongequal": "="
          }, f1 = function(e) {
            var t = new K.MathNode("mo", [new K.TextNode(h1[e.replace(/^\\/, "")])]);
            return t.setAttribute("stretchy", "true"), t;
          }, m1 = {
            //   path(s), minWidth, height, align
            overrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"],
            overleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"],
            underrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"],
            underleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"],
            xrightarrow: [["rightarrow"], 1.469, 522, "xMaxYMin"],
            "\\cdrightarrow": [["rightarrow"], 3, 522, "xMaxYMin"],
            // CD minwwidth2.5pc
            xleftarrow: [["leftarrow"], 1.469, 522, "xMinYMin"],
            "\\cdleftarrow": [["leftarrow"], 3, 522, "xMinYMin"],
            Overrightarrow: [["doublerightarrow"], 0.888, 560, "xMaxYMin"],
            xRightarrow: [["doublerightarrow"], 1.526, 560, "xMaxYMin"],
            xLeftarrow: [["doubleleftarrow"], 1.526, 560, "xMinYMin"],
            overleftharpoon: [["leftharpoon"], 0.888, 522, "xMinYMin"],
            xleftharpoonup: [["leftharpoon"], 0.888, 522, "xMinYMin"],
            xleftharpoondown: [["leftharpoondown"], 0.888, 522, "xMinYMin"],
            overrightharpoon: [["rightharpoon"], 0.888, 522, "xMaxYMin"],
            xrightharpoonup: [["rightharpoon"], 0.888, 522, "xMaxYMin"],
            xrightharpoondown: [["rightharpoondown"], 0.888, 522, "xMaxYMin"],
            xlongequal: [["longequal"], 0.888, 334, "xMinYMin"],
            "\\cdlongequal": [["longequal"], 3, 334, "xMinYMin"],
            xtwoheadleftarrow: [["twoheadleftarrow"], 0.888, 334, "xMinYMin"],
            xtwoheadrightarrow: [["twoheadrightarrow"], 0.888, 334, "xMaxYMin"],
            overleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522],
            overbrace: [["leftbrace", "midbrace", "rightbrace"], 1.6, 548],
            underbrace: [["leftbraceunder", "midbraceunder", "rightbraceunder"], 1.6, 548],
            underleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522],
            xleftrightarrow: [["leftarrow", "rightarrow"], 1.75, 522],
            xLeftrightarrow: [["doubleleftarrow", "doublerightarrow"], 1.75, 560],
            xrightleftharpoons: [["leftharpoondownplus", "rightharpoonplus"], 1.75, 716],
            xleftrightharpoons: [["leftharpoonplus", "rightharpoondownplus"], 1.75, 716],
            xhookleftarrow: [["leftarrow", "righthook"], 1.08, 522],
            xhookrightarrow: [["lefthook", "rightarrow"], 1.08, 522],
            overlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522],
            underlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522],
            overgroup: [["leftgroup", "rightgroup"], 0.888, 342],
            undergroup: [["leftgroupunder", "rightgroupunder"], 0.888, 342],
            xmapsto: [["leftmapsto", "rightarrow"], 1.5, 522],
            xtofrom: [["leftToFrom", "rightToFrom"], 1.75, 528],
            // The next three arrows are from the mhchem package.
            // In mhchem.sty, min-length is 2.0em. But these arrows might appear in the
            // document as \xrightarrow or \xrightleftharpoons. Those have
            // min-length = 1.75em, so we set min-length on these next three to match.
            xrightleftarrows: [["baraboveleftarrow", "rightarrowabovebar"], 1.75, 901],
            xrightequilibrium: [["baraboveshortleftharpoon", "rightharpoonaboveshortbar"], 1.75, 716],
            xleftequilibrium: [["shortbaraboveleftharpoon", "shortrightharpoonabovebar"], 1.75, 716]
          }, d1 = function(e) {
            return e.type === "ordgroup" ? e.body.length : 1;
          }, p1 = function(e, t) {
            function n() {
              var k = 4e5, x = e.label.slice(1);
              if (U.contains(["widehat", "widecheck", "widetilde", "utilde"], x)) {
                var z = e, N = d1(z.base), H, P, V;
                if (N > 5)
                  x === "widehat" || x === "widecheck" ? (H = 420, k = 2364, V = 0.42, P = x + "4") : (H = 312, k = 2340, V = 0.34, P = "tilde4");
                else {
                  var ee = [1, 1, 2, 2, 3, 3][N];
                  x === "widehat" || x === "widecheck" ? (k = [0, 1062, 2364, 2364, 2364][ee], H = [0, 239, 300, 360, 420][ee], V = [0, 0.24, 0.3, 0.3, 0.36, 0.42][ee], P = x + ee) : (k = [0, 600, 1033, 2339, 2340][ee], H = [0, 260, 286, 306, 312][ee], V = [0, 0.26, 0.286, 0.3, 0.306, 0.34][ee], P = "tilde" + ee);
                }
                var ae = new Xt(P), ce = new Nt([ae], {
                  width: "100%",
                  height: te(V),
                  viewBox: "0 0 " + k + " " + H,
                  preserveAspectRatio: "none"
                });
                return {
                  span: R.makeSvgSpan([], [ce], t),
                  minWidth: 0,
                  height: V
                };
              } else {
                var fe = [], de = m1[x], Ce = de[0], ye = de[1], Re = de[2], Me = Re / 1e3, qe = Ce.length, Ye, st;
                if (qe === 1) {
                  var At = de[3];
                  Ye = ["hide-tail"], st = [At];
                } else if (qe === 2)
                  Ye = ["halfarrow-left", "halfarrow-right"], st = ["xMinYMin", "xMaxYMin"];
                else if (qe === 3)
                  Ye = ["brace-left", "brace-center", "brace-right"], st = ["xMinYMin", "xMidYMin", "xMaxYMin"];
                else
                  throw new Error(`Correct katexImagesData or update code here to support
                    ` + qe + " children.");
                for (var Ke = 0; Ke < qe; Ke++) {
                  var Q0 = new Xt(Ce[Ke]), Lt = new Nt([Q0], {
                    width: "400em",
                    height: te(Me),
                    viewBox: "0 0 " + k + " " + Re,
                    preserveAspectRatio: st[Ke] + " slice"
                  }), dt = R.makeSvgSpan([Ye[Ke]], [Lt], t);
                  if (qe === 1)
                    return {
                      span: dt,
                      minWidth: ye,
                      height: Me
                    };
                  dt.style.height = te(Me), fe.push(dt);
                }
                return {
                  span: R.makeSpan(["stretchy"], fe, t),
                  minWidth: ye,
                  height: Me
                };
              }
            }
            var l = n(), u = l.span, m = l.minWidth, b = l.height;
            return u.height = b, u.style.height = te(b), m > 0 && (u.style.minWidth = te(m)), u;
          }, g1 = function(e, t, n, l, u) {
            var m, b = e.height + e.depth + n + l;
            if (/fbox|color|angl/.test(t)) {
              if (m = R.makeSpan(["stretchy", t], [], u), t === "fbox") {
                var k = u.color && u.getColor();
                k && (m.style.borderColor = k);
              }
            } else {
              var x = [];
              /^[bx]cancel$/.test(t) && x.push(new _0({
                x1: "0",
                y1: "0",
                x2: "100%",
                y2: "100%",
                "stroke-width": "0.046em"
              })), /^x?cancel$/.test(t) && x.push(new _0({
                x1: "0",
                y1: "100%",
                x2: "100%",
                y2: "0",
                "stroke-width": "0.046em"
              }));
              var z = new Nt(x, {
                width: "100%",
                height: te(b)
              });
              m = R.makeSvgSpan([], [z], u);
            }
            return m.height = b, m.style.height = te(b), m;
          }, h0 = {
            encloseSpan: g1,
            mathMLnode: f1,
            svgSpan: p1
          };
          function be(f, e) {
            if (!f || f.type !== e)
              throw new Error("Expected node of type " + e + ", but got " + (f ? "node of type " + f.type : String(f)));
            return f;
          }
          function ea(f) {
            var e = on(f);
            if (!e)
              throw new Error("Expected node of symbol group type, but got " + (f ? "node of type " + f.type : String(f)));
            return e;
          }
          function on(f) {
            return f && (f.type === "atom" || Cr.hasOwnProperty(f.type)) ? f : null;
          }
          var ta = function(e, t) {
            var n, l, u;
            e && e.type === "supsub" ? (l = be(e.base, "accent"), n = l.base, e.base = n, u = Vn(Te(e, t)), e.base = l) : (l = be(e, "accent"), n = l.base);
            var m = Te(n, t.havingCrampedStyle()), b = l.isShifty && U.isCharacterBox(n), k = 0;
            if (b) {
              var x = U.getBaseElem(n), z = Te(x, t.havingCrampedStyle());
              k = sr(z).skew;
            }
            var N = l.label === "\\c", H = N ? m.height + m.depth : Math.min(m.height, t.fontMetrics().xHeight), P;
            if (l.isStretchy)
              P = h0.svgSpan(l, t), P = R.makeVList({
                positionType: "firstBaseline",
                children: [{
                  type: "elem",
                  elem: m
                }, {
                  type: "elem",
                  elem: P,
                  wrapperClasses: ["svg-align"],
                  wrapperStyle: k > 0 ? {
                    width: "calc(100% - " + te(2 * k) + ")",
                    marginLeft: te(2 * k)
                  } : void 0
                }]
              }, t);
            else {
              var V, ee;
              l.label === "\\vec" ? (V = R.staticSvg("vec", t), ee = R.svgData.vec[1]) : (V = R.makeOrd({
                mode: l.mode,
                text: l.label
              }, t, "textord"), V = sr(V), V.italic = 0, ee = V.width, N && (H += V.depth)), P = R.makeSpan(["accent-body"], [V]);
              var ae = l.label === "\\textcircled";
              ae && (P.classes.push("accent-full"), H = m.height);
              var ce = k;
              ae || (ce -= ee / 2), P.style.left = te(ce), l.label === "\\textcircled" && (P.style.top = ".2em"), P = R.makeVList({
                positionType: "firstBaseline",
                children: [{
                  type: "elem",
                  elem: m
                }, {
                  type: "kern",
                  size: -H
                }, {
                  type: "elem",
                  elem: P
                }]
              }, t);
            }
            var fe = R.makeSpan(["mord", "accent"], [P], t);
            return u ? (u.children[0] = fe, u.height = Math.max(fe.height, u.height), u.classes[0] = "mord", u) : fe;
          }, Si = function(e, t) {
            var n = e.isStretchy ? h0.mathMLnode(e.label) : new K.MathNode("mo", [Ft(e.label, e.mode)]), l = new K.MathNode("mover", [Ue(e.base, t), n]);
            return l.setAttribute("accent", "true"), l;
          }, v1 = new RegExp(["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring"].map(function(f) {
            return "\\" + f;
          }).join("|"));
          le({
            type: "accent",
            names: ["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring", "\\widecheck", "\\widehat", "\\widetilde", "\\overrightarrow", "\\overleftarrow", "\\Overrightarrow", "\\overleftrightarrow", "\\overgroup", "\\overlinesegment", "\\overleftharpoon", "\\overrightharpoon"],
            props: {
              numArgs: 1
            },
            handler: function(e, t) {
              var n = ln(t[0]), l = !v1.test(e.funcName), u = !l || e.funcName === "\\widehat" || e.funcName === "\\widetilde" || e.funcName === "\\widecheck";
              return {
                type: "accent",
                mode: e.parser.mode,
                label: e.funcName,
                isStretchy: l,
                isShifty: u,
                base: n
              };
            },
            htmlBuilder: ta,
            mathmlBuilder: Si
          }), le({
            type: "accent",
            names: ["\\'", "\\`", "\\^", "\\~", "\\=", "\\u", "\\.", '\\"', "\\c", "\\r", "\\H", "\\v", "\\textcircled"],
            props: {
              numArgs: 1,
              allowedInText: !0,
              allowedInMath: !0,
              // unless in strict mode
              argTypes: ["primitive"]
            },
            handler: function(e, t) {
              var n = t[0], l = e.parser.mode;
              return l === "math" && (e.parser.settings.reportNonstrict("mathVsTextAccents", "LaTeX's accent " + e.funcName + " works only in text mode"), l = "text"), {
                type: "accent",
                mode: l,
                label: e.funcName,
                isStretchy: !1,
                isShifty: !0,
                base: n
              };
            },
            htmlBuilder: ta,
            mathmlBuilder: Si
          }), le({
            type: "accentUnder",
            names: ["\\underleftarrow", "\\underrightarrow", "\\underleftrightarrow", "\\undergroup", "\\underlinesegment", "\\utilde"],
            props: {
              numArgs: 1
            },
            handler: function(e, t) {
              var n = e.parser, l = e.funcName, u = t[0];
              return {
                type: "accentUnder",
                mode: n.mode,
                label: l,
                base: u
              };
            },
            htmlBuilder: function(e, t) {
              var n = Te(e.base, t), l = h0.svgSpan(e, t), u = e.label === "\\utilde" ? 0.12 : 0, m = R.makeVList({
                positionType: "top",
                positionData: n.height,
                children: [{
                  type: "elem",
                  elem: l,
                  wrapperClasses: ["svg-align"]
                }, {
                  type: "kern",
                  size: u
                }, {
                  type: "elem",
                  elem: n
                }]
              }, t);
              return R.makeSpan(["mord", "accentunder"], [m], t);
            },
            mathmlBuilder: function(e, t) {
              var n = h0.mathMLnode(e.label), l = new K.MathNode("munder", [Ue(e.base, t), n]);
              return l.setAttribute("accentunder", "true"), l;
            }
          });
          var un = function(e) {
            var t = new K.MathNode("mpadded", e ? [e] : []);
            return t.setAttribute("width", "+0.6em"), t.setAttribute("lspace", "0.3em"), t;
          };
          le({
            type: "xArrow",
            names: [
              "\\xleftarrow",
              "\\xrightarrow",
              "\\xLeftarrow",
              "\\xRightarrow",
              "\\xleftrightarrow",
              "\\xLeftrightarrow",
              "\\xhookleftarrow",
              "\\xhookrightarrow",
              "\\xmapsto",
              "\\xrightharpoondown",
              "\\xrightharpoonup",
              "\\xleftharpoondown",
              "\\xleftharpoonup",
              "\\xrightleftharpoons",
              "\\xleftrightharpoons",
              "\\xlongequal",
              "\\xtwoheadrightarrow",
              "\\xtwoheadleftarrow",
              "\\xtofrom",
              // The next 3 functions are here to support the mhchem extension.
              // Direct use of these functions is discouraged and may break someday.
              "\\xrightleftarrows",
              "\\xrightequilibrium",
              "\\xleftequilibrium",
              // The next 3 functions are here only to support the {CD} environment.
              "\\\\cdrightarrow",
              "\\\\cdleftarrow",
              "\\\\cdlongequal"
            ],
            props: {
              numArgs: 1,
              numOptionalArgs: 1
            },
            handler: function(e, t, n) {
              var l = e.parser, u = e.funcName;
              return {
                type: "xArrow",
                mode: l.mode,
                label: u,
                body: t[0],
                below: n[0]
              };
            },
            // Flow is unable to correctly infer the type of `group`, even though it's
            // unambiguously determined from the passed-in `type` above.
            htmlBuilder: function(e, t) {
              var n = t.style, l = t.havingStyle(n.sup()), u = R.wrapFragment(Te(e.body, l, t), t), m = e.label.slice(0, 2) === "\\x" ? "x" : "cd";
              u.classes.push(m + "-arrow-pad");
              var b;
              e.below && (l = t.havingStyle(n.sub()), b = R.wrapFragment(Te(e.below, l, t), t), b.classes.push(m + "-arrow-pad"));
              var k = h0.svgSpan(e, t), x = -t.fontMetrics().axisHeight + 0.5 * k.height, z = -t.fontMetrics().axisHeight - 0.5 * k.height - 0.111;
              (u.depth > 0.25 || e.label === "\\xleftequilibrium") && (z -= u.depth);
              var N;
              if (b) {
                var H = -t.fontMetrics().axisHeight + b.height + 0.5 * k.height + 0.111;
                N = R.makeVList({
                  positionType: "individualShift",
                  children: [{
                    type: "elem",
                    elem: u,
                    shift: z
                  }, {
                    type: "elem",
                    elem: k,
                    shift: x
                  }, {
                    type: "elem",
                    elem: b,
                    shift: H
                  }]
                }, t);
              } else
                N = R.makeVList({
                  positionType: "individualShift",
                  children: [{
                    type: "elem",
                    elem: u,
                    shift: z
                  }, {
                    type: "elem",
                    elem: k,
                    shift: x
                  }]
                }, t);
              return N.children[0].children[0].children[1].classes.push("svg-align"), R.makeSpan(["mrel", "x-arrow"], [N], t);
            },
            mathmlBuilder: function(e, t) {
              var n = h0.mathMLnode(e.label);
              n.setAttribute("minsize", e.label.charAt(0) === "x" ? "1.75em" : "3.0em");
              var l;
              if (e.body) {
                var u = un(Ue(e.body, t));
                if (e.below) {
                  var m = un(Ue(e.below, t));
                  l = new K.MathNode("munderover", [n, m, u]);
                } else
                  l = new K.MathNode("mover", [n, u]);
              } else if (e.below) {
                var b = un(Ue(e.below, t));
                l = new K.MathNode("munder", [n, b]);
              } else
                l = un(), l = new K.MathNode("mover", [n, l]);
              return l;
            }
          });
          var b1 = R.makeSpan;
          function Ai(f, e) {
            var t = nt(f.body, e, !0);
            return b1([f.mclass], t, e);
          }
          function Ti(f, e) {
            var t, n = kt(f.body, e);
            return f.mclass === "minner" ? t = new K.MathNode("mpadded", n) : f.mclass === "mord" ? f.isCharacterBox ? (t = n[0], t.type = "mi") : t = new K.MathNode("mi", n) : (f.isCharacterBox ? (t = n[0], t.type = "mo") : t = new K.MathNode("mo", n), f.mclass === "mbin" ? (t.attributes.lspace = "0.22em", t.attributes.rspace = "0.22em") : f.mclass === "mpunct" ? (t.attributes.lspace = "0em", t.attributes.rspace = "0.17em") : f.mclass === "mopen" || f.mclass === "mclose" ? (t.attributes.lspace = "0em", t.attributes.rspace = "0em") : f.mclass === "minner" && (t.attributes.lspace = "0.0556em", t.attributes.width = "+0.1111em")), t;
          }
          le({
            type: "mclass",
            names: ["\\mathord", "\\mathbin", "\\mathrel", "\\mathopen", "\\mathclose", "\\mathpunct", "\\mathinner"],
            props: {
              numArgs: 1,
              primitive: !0
            },
            handler: function(e, t) {
              var n = e.parser, l = e.funcName, u = t[0];
              return {
                type: "mclass",
                mode: n.mode,
                mclass: "m" + l.slice(5),
                // TODO(kevinb): don't prefix with 'm'
                body: et(u),
                isCharacterBox: U.isCharacterBox(u)
              };
            },
            htmlBuilder: Ai,
            mathmlBuilder: Ti
          });
          var cn = function(e) {
            var t = e.type === "ordgroup" && e.body.length ? e.body[0] : e;
            return t.type === "atom" && (t.family === "bin" || t.family === "rel") ? "m" + t.family : "mord";
          };
          le({
            type: "mclass",
            names: ["\\@binrel"],
            props: {
              numArgs: 2
            },
            handler: function(e, t) {
              var n = e.parser;
              return {
                type: "mclass",
                mode: n.mode,
                mclass: cn(t[0]),
                body: et(t[1]),
                isCharacterBox: U.isCharacterBox(t[1])
              };
            }
          }), le({
            type: "mclass",
            names: ["\\stackrel", "\\overset", "\\underset"],
            props: {
              numArgs: 2
            },
            handler: function(e, t) {
              var n = e.parser, l = e.funcName, u = t[1], m = t[0], b;
              l !== "\\stackrel" ? b = cn(u) : b = "mrel";
              var k = {
                type: "op",
                mode: u.mode,
                limits: !0,
                alwaysHandleSupSub: !0,
                parentIsSupSub: !1,
                symbol: !1,
                suppressBaseShift: l !== "\\stackrel",
                body: et(u)
              }, x = {
                type: "supsub",
                mode: m.mode,
                base: k,
                sup: l === "\\underset" ? null : m,
                sub: l === "\\underset" ? m : null
              };
              return {
                type: "mclass",
                mode: n.mode,
                mclass: b,
                body: [x],
                isCharacterBox: U.isCharacterBox(x)
              };
            },
            htmlBuilder: Ai,
            mathmlBuilder: Ti
          }), le({
            type: "pmb",
            names: ["\\pmb"],
            props: {
              numArgs: 1,
              allowedInText: !0
            },
            handler: function(e, t) {
              var n = e.parser;
              return {
                type: "pmb",
                mode: n.mode,
                mclass: cn(t[0]),
                body: et(t[0])
              };
            },
            htmlBuilder: function(e, t) {
              var n = nt(e.body, t, !0), l = R.makeSpan([e.mclass], n, t);
              return l.style.textShadow = "0.02em 0.01em 0.04px", l;
            },
            mathmlBuilder: function(e, t) {
              var n = kt(e.body, t), l = new K.MathNode("mstyle", n);
              return l.setAttribute("style", "text-shadow: 0.02em 0.01em 0.04px"), l;
            }
          });
          var y1 = {
            ">": "\\\\cdrightarrow",
            "<": "\\\\cdleftarrow",
            "=": "\\\\cdlongequal",
            A: "\\uparrow",
            V: "\\downarrow",
            "|": "\\Vert",
            ".": "no arrow"
          }, Mi = function() {
            return {
              type: "styling",
              body: [],
              mode: "math",
              style: "display"
            };
          }, zi = function(e) {
            return e.type === "textord" && e.text === "@";
          }, w1 = function(e, t) {
            return (e.type === "mathord" || e.type === "atom") && e.text === t;
          };
          function k1(f, e, t) {
            var n = y1[f];
            switch (n) {
              case "\\\\cdrightarrow":
              case "\\\\cdleftarrow":
                return t.callFunction(n, [e[0]], [e[1]]);
              case "\\uparrow":
              case "\\downarrow": {
                var l = t.callFunction("\\\\cdleft", [e[0]], []), u = {
                  type: "atom",
                  text: n,
                  mode: "math",
                  family: "rel"
                }, m = t.callFunction("\\Big", [u], []), b = t.callFunction("\\\\cdright", [e[1]], []), k = {
                  type: "ordgroup",
                  mode: "math",
                  body: [l, m, b]
                };
                return t.callFunction("\\\\cdparent", [k], []);
              }
              case "\\\\cdlongequal":
                return t.callFunction("\\\\cdlongequal", [], []);
              case "\\Vert": {
                var x = {
                  type: "textord",
                  text: "\\Vert",
                  mode: "math"
                };
                return t.callFunction("\\Big", [x], []);
              }
              default:
                return {
                  type: "textord",
                  text: " ",
                  mode: "math"
                };
            }
          }
          function _1(f) {
            var e = [];
            for (f.gullet.beginGroup(), f.gullet.macros.set("\\cr", "\\\\\\relax"), f.gullet.beginGroup(); ; ) {
              e.push(f.parseExpression(!1, "\\\\")), f.gullet.endGroup(), f.gullet.beginGroup();
              var t = f.fetch().text;
              if (t === "&" || t === "\\\\")
                f.consume();
              else if (t === "\\end") {
                e[e.length - 1].length === 0 && e.pop();
                break;
              } else
                throw new c("Expected \\\\ or \\cr or \\end", f.nextToken);
            }
            for (var n = [], l = [n], u = 0; u < e.length; u++) {
              for (var m = e[u], b = Mi(), k = 0; k < m.length; k++)
                if (!zi(m[k]))
                  b.body.push(m[k]);
                else {
                  n.push(b), k += 1;
                  var x = ea(m[k]).text, z = new Array(2);
                  if (z[0] = {
                    type: "ordgroup",
                    mode: "math",
                    body: []
                  }, z[1] = {
                    type: "ordgroup",
                    mode: "math",
                    body: []
                  }, !("=|.".indexOf(x) > -1))
                    if ("<>AV".indexOf(x) > -1)
                      for (var N = 0; N < 2; N++) {
                        for (var H = !0, P = k + 1; P < m.length; P++) {
                          if (w1(m[P], x)) {
                            H = !1, k = P;
                            break;
                          }
                          if (zi(m[P]))
                            throw new c("Missing a " + x + " character to complete a CD arrow.", m[P]);
                          z[N].body.push(m[P]);
                        }
                        if (H)
                          throw new c("Missing a " + x + " character to complete a CD arrow.", m[k]);
                      }
                    else
                      throw new c('Expected one of "<>AV=|." after @', m[k]);
                  var V = k1(x, z, f), ee = {
                    type: "styling",
                    body: [V],
                    mode: "math",
                    style: "display"
                    // CD is always displaystyle.
                  };
                  n.push(ee), b = Mi();
                }
              u % 2 === 0 ? n.push(b) : n.shift(), n = [], l.push(n);
            }
            f.gullet.endGroup(), f.gullet.endGroup();
            var ae = new Array(l[0].length).fill({
              type: "align",
              align: "c",
              pregap: 0.25,
              // CD package sets \enskip between columns.
              postgap: 0.25
              // So pre and post each get half an \enskip, i.e. 0.25em.
            });
            return {
              type: "array",
              mode: "math",
              body: l,
              arraystretch: 1,
              addJot: !0,
              rowGaps: [null],
              cols: ae,
              colSeparationType: "CD",
              hLinesBeforeRow: new Array(l.length + 1).fill([])
            };
          }
          le({
            type: "cdlabel",
            names: ["\\\\cdleft", "\\\\cdright"],
            props: {
              numArgs: 1
            },
            handler: function(e, t) {
              var n = e.parser, l = e.funcName;
              return {
                type: "cdlabel",
                mode: n.mode,
                side: l.slice(4),
                label: t[0]
              };
            },
            htmlBuilder: function(e, t) {
              var n = t.havingStyle(t.style.sup()), l = R.wrapFragment(Te(e.label, n, t), t);
              return l.classes.push("cd-label-" + e.side), l.style.bottom = te(0.8 - l.depth), l.height = 0, l.depth = 0, l;
            },
            mathmlBuilder: function(e, t) {
              var n = new K.MathNode("mrow", [Ue(e.label, t)]);
              return n = new K.MathNode("mpadded", [n]), n.setAttribute("width", "0"), e.side === "left" && n.setAttribute("lspace", "-1width"), n.setAttribute("voffset", "0.7em"), n = new K.MathNode("mstyle", [n]), n.setAttribute("displaystyle", "false"), n.setAttribute("scriptlevel", "1"), n;
            }
          }), le({
            type: "cdlabelparent",
            names: ["\\\\cdparent"],
            props: {
              numArgs: 1
            },
            handler: function(e, t) {
              var n = e.parser;
              return {
                type: "cdlabelparent",
                mode: n.mode,
                fragment: t[0]
              };
            },
            htmlBuilder: function(e, t) {
              var n = R.wrapFragment(Te(e.fragment, t), t);
              return n.classes.push("cd-vert-arrow"), n;
            },
            mathmlBuilder: function(e, t) {
              return new K.MathNode("mrow", [Ue(e.fragment, t)]);
            }
          }), le({
            type: "textord",
            names: ["\\@char"],
            props: {
              numArgs: 1,
              allowedInText: !0
            },
            handler: function(e, t) {
              for (var n = e.parser, l = be(t[0], "ordgroup"), u = l.body, m = "", b = 0; b < u.length; b++) {
                var k = be(u[b], "textord");
                m += k.text;
              }
              var x = parseInt(m), z;
              if (isNaN(x))
                throw new c("\\@char has non-numeric argument " + m);
              if (x < 0 || x >= 1114111)
                throw new c("\\@char with invalid code point " + m);
              return x <= 65535 ? z = String.fromCharCode(x) : (x -= 65536, z = String.fromCharCode((x >> 10) + 55296, (x & 1023) + 56320)), {
                type: "textord",
                mode: n.mode,
                text: z
              };
            }
          });
          var Ci = function(e, t) {
            var n = nt(e.body, t.withColor(e.color), !1);
            return R.makeFragment(n);
          }, Ei = function(e, t) {
            var n = kt(e.body, t.withColor(e.color)), l = new K.MathNode("mstyle", n);
            return l.setAttribute("mathcolor", e.color), l;
          };
          le({
            type: "color",
            names: ["\\textcolor"],
            props: {
              numArgs: 2,
              allowedInText: !0,
              argTypes: ["color", "original"]
            },
            handler: function(e, t) {
              var n = e.parser, l = be(t[0], "color-token").color, u = t[1];
              return {
                type: "color",
                mode: n.mode,
                color: l,
                body: et(u)
              };
            },
            htmlBuilder: Ci,
            mathmlBuilder: Ei
          }), le({
            type: "color",
            names: ["\\color"],
            props: {
              numArgs: 1,
              allowedInText: !0,
              argTypes: ["color"]
            },
            handler: function(e, t) {
              var n = e.parser, l = e.breakOnTokenText, u = be(t[0], "color-token").color;
              n.gullet.macros.set("\\current@color", u);
              var m = n.parseExpression(!0, l);
              return {
                type: "color",
                mode: n.mode,
                color: u,
                body: m
              };
            },
            htmlBuilder: Ci,
            mathmlBuilder: Ei
          }), le({
            type: "cr",
            names: ["\\\\"],
            props: {
              numArgs: 0,
              numOptionalArgs: 0,
              allowedInText: !0
            },
            handler: function(e, t, n) {
              var l = e.parser, u = l.gullet.future().text === "[" ? l.parseSizeGroup(!0) : null, m = !l.settings.displayMode || !l.settings.useStrictBehavior("newLineInDisplayMode", "In LaTeX, \\\\ or \\newline does nothing in display mode");
              return {
                type: "cr",
                mode: l.mode,
                newLine: m,
                size: u && be(u, "size").value
              };
            },
            // The following builders are called only at the top level,
            // not within tabular/array environments.
            htmlBuilder: function(e, t) {
              var n = R.makeSpan(["mspace"], [], t);
              return e.newLine && (n.classes.push("newline"), e.size && (n.style.marginTop = te(Pe(e.size, t)))), n;
            },
            mathmlBuilder: function(e, t) {
              var n = new K.MathNode("mspace");
              return e.newLine && (n.setAttribute("linebreak", "newline"), e.size && n.setAttribute("height", te(Pe(e.size, t)))), n;
            }
          });
          var ra = {
            "\\global": "\\global",
            "\\long": "\\\\globallong",
            "\\\\globallong": "\\\\globallong",
            "\\def": "\\gdef",
            "\\gdef": "\\gdef",
            "\\edef": "\\xdef",
            "\\xdef": "\\xdef",
            "\\let": "\\\\globallet",
            "\\futurelet": "\\\\globalfuture"
          }, Bi = function(e) {
            var t = e.text;
            if (/^(?:[\\{}$&#^_]|EOF)$/.test(t))
              throw new c("Expected a control sequence", e);
            return t;
          }, x1 = function(e) {
            var t = e.gullet.popToken();
            return t.text === "=" && (t = e.gullet.popToken(), t.text === " " && (t = e.gullet.popToken())), t;
          }, Di = function(e, t, n, l) {
            var u = e.gullet.macros.get(n.text);
            u == null && (n.noexpand = !0, u = {
              tokens: [n],
              numArgs: 0,
              // reproduce the same behavior in expansion
              unexpandable: !e.gullet.isExpandable(n.text)
            }), e.gullet.macros.set(t, u, l);
          };
          le({
            type: "internal",
            names: [
              "\\global",
              "\\long",
              "\\\\globallong"
              // can’t be entered directly
            ],
            props: {
              numArgs: 0,
              allowedInText: !0
            },
            handler: function(e) {
              var t = e.parser, n = e.funcName;
              t.consumeSpaces();
              var l = t.fetch();
              if (ra[l.text])
                return (n === "\\global" || n === "\\\\globallong") && (l.text = ra[l.text]), be(t.parseFunction(), "internal");
              throw new c("Invalid token after macro prefix", l);
            }
          }), le({
            type: "internal",
            names: ["\\def", "\\gdef", "\\edef", "\\xdef"],
            props: {
              numArgs: 0,
              allowedInText: !0,
              primitive: !0
            },
            handler: function(e) {
              var t = e.parser, n = e.funcName, l = t.gullet.popToken(), u = l.text;
              if (/^(?:[\\{}$&#^_]|EOF)$/.test(u))
                throw new c("Expected a control sequence", l);
              for (var m = 0, b, k = [[]]; t.gullet.future().text !== "{"; )
                if (l = t.gullet.popToken(), l.text === "#") {
                  if (t.gullet.future().text === "{") {
                    b = t.gullet.future(), k[m].push("{");
                    break;
                  }
                  if (l = t.gullet.popToken(), !/^[1-9]$/.test(l.text))
                    throw new c('Invalid argument number "' + l.text + '"');
                  if (parseInt(l.text) !== m + 1)
                    throw new c('Argument number "' + l.text + '" out of order');
                  m++, k.push([]);
                } else {
                  if (l.text === "EOF")
                    throw new c("Expected a macro definition");
                  k[m].push(l.text);
                }
              var x = t.gullet.consumeArg(), z = x.tokens;
              return b && z.unshift(b), (n === "\\edef" || n === "\\xdef") && (z = t.gullet.expandTokens(z), z.reverse()), t.gullet.macros.set(u, {
                tokens: z,
                numArgs: m,
                delimiters: k
              }, n === ra[n]), {
                type: "internal",
                mode: t.mode
              };
            }
          }), le({
            type: "internal",
            names: [
              "\\let",
              "\\\\globallet"
              // can’t be entered directly
            ],
            props: {
              numArgs: 0,
              allowedInText: !0,
              primitive: !0
            },
            handler: function(e) {
              var t = e.parser, n = e.funcName, l = Bi(t.gullet.popToken());
              t.gullet.consumeSpaces();
              var u = x1(t);
              return Di(t, l, u, n === "\\\\globallet"), {
                type: "internal",
                mode: t.mode
              };
            }
          }), le({
            type: "internal",
            names: [
              "\\futurelet",
              "\\\\globalfuture"
              // can’t be entered directly
            ],
            props: {
              numArgs: 0,
              allowedInText: !0,
              primitive: !0
            },
            handler: function(e) {
              var t = e.parser, n = e.funcName, l = Bi(t.gullet.popToken()), u = t.gullet.popToken(), m = t.gullet.popToken();
              return Di(t, l, m, n === "\\\\globalfuture"), t.gullet.pushToken(m), t.gullet.pushToken(u), {
                type: "internal",
                mode: t.mode
              };
            }
          });
          var Rr = function(e, t, n) {
            var l = Ve.math[e] && Ve.math[e].replace, u = Yt(l || e, t, n);
            if (!u)
              throw new Error("Unsupported symbol " + e + " and font size " + t + ".");
            return u;
          }, na = function(e, t, n, l) {
            var u = n.havingBaseStyle(t), m = R.makeSpan(l.concat(u.sizingClasses(n)), [e], n), b = u.sizeMultiplier / n.sizeMultiplier;
            return m.height *= b, m.depth *= b, m.maxFontSize = u.sizeMultiplier, m;
          }, Ni = function(e, t, n) {
            var l = t.havingBaseStyle(n), u = (1 - t.sizeMultiplier / l.sizeMultiplier) * t.fontMetrics().axisHeight;
            e.classes.push("delimcenter"), e.style.top = te(u), e.height -= u, e.depth += u;
          }, S1 = function(e, t, n, l, u, m) {
            var b = R.makeSymbol(e, "Main-Regular", u, l), k = na(b, t, l, m);
            return n && Ni(k, l, t), k;
          }, A1 = function(e, t, n, l) {
            return R.makeSymbol(e, "Size" + t + "-Regular", n, l);
          }, Ri = function(e, t, n, l, u, m) {
            var b = A1(e, t, u, l), k = na(R.makeSpan(["delimsizing", "size" + t], [b], l), I.TEXT, l, m);
            return n && Ni(k, l, I.TEXT), k;
          }, aa = function(e, t, n) {
            var l;
            t === "Size1-Regular" ? l = "delim-size1" : l = "delim-size4";
            var u = R.makeSpan(["delimsizinginner", l], [R.makeSpan([], [R.makeSymbol(e, t, n)])]);
            return {
              type: "elem",
              elem: u
            };
          }, ia = function(e, t, n) {
            var l = Bt["Size4-Regular"][e.charCodeAt(0)] ? Bt["Size4-Regular"][e.charCodeAt(0)][4] : Bt["Size1-Regular"][e.charCodeAt(0)][4], u = new Xt("inner", rr(e, Math.round(1e3 * t))), m = new Nt([u], {
              width: te(l),
              height: te(t),
              // Override CSS rule `.katex svg { width: 100% }`
              style: "width:" + te(l),
              viewBox: "0 0 " + 1e3 * l + " " + Math.round(1e3 * t),
              preserveAspectRatio: "xMinYMin"
            }), b = R.makeSvgSpan([], [m], n);
            return b.height = t, b.style.height = te(t), b.style.width = te(l), {
              type: "elem",
              elem: b
            };
          }, la = 8e-3, hn = {
            type: "kern",
            size: -1 * la
          }, T1 = ["|", "\\lvert", "\\rvert", "\\vert"], M1 = ["\\|", "\\lVert", "\\rVert", "\\Vert"], Fi = function(e, t, n, l, u, m) {
            var b, k, x, z, N = "", H = 0;
            b = x = z = e, k = null;
            var P = "Size1-Regular";
            e === "\\uparrow" ? x = z = "⏐" : e === "\\Uparrow" ? x = z = "‖" : e === "\\downarrow" ? b = x = "⏐" : e === "\\Downarrow" ? b = x = "‖" : e === "\\updownarrow" ? (b = "\\uparrow", x = "⏐", z = "\\downarrow") : e === "\\Updownarrow" ? (b = "\\Uparrow", x = "‖", z = "\\Downarrow") : U.contains(T1, e) ? (x = "∣", N = "vert", H = 333) : U.contains(M1, e) ? (x = "∥", N = "doublevert", H = 556) : e === "[" || e === "\\lbrack" ? (b = "⎡", x = "⎢", z = "⎣", P = "Size4-Regular", N = "lbrack", H = 667) : e === "]" || e === "\\rbrack" ? (b = "⎤", x = "⎥", z = "⎦", P = "Size4-Regular", N = "rbrack", H = 667) : e === "\\lfloor" || e === "⌊" ? (x = b = "⎢", z = "⎣", P = "Size4-Regular", N = "lfloor", H = 667) : e === "\\lceil" || e === "⌈" ? (b = "⎡", x = z = "⎢", P = "Size4-Regular", N = "lceil", H = 667) : e === "\\rfloor" || e === "⌋" ? (x = b = "⎥", z = "⎦", P = "Size4-Regular", N = "rfloor", H = 667) : e === "\\rceil" || e === "⌉" ? (b = "⎤", x = z = "⎥", P = "Size4-Regular", N = "rceil", H = 667) : e === "(" || e === "\\lparen" ? (b = "⎛", x = "⎜", z = "⎝", P = "Size4-Regular", N = "lparen", H = 875) : e === ")" || e === "\\rparen" ? (b = "⎞", x = "⎟", z = "⎠", P = "Size4-Regular", N = "rparen", H = 875) : e === "\\{" || e === "\\lbrace" ? (b = "⎧", k = "⎨", z = "⎩", x = "⎪", P = "Size4-Regular") : e === "\\}" || e === "\\rbrace" ? (b = "⎫", k = "⎬", z = "⎭", x = "⎪", P = "Size4-Regular") : e === "\\lgroup" || e === "⟮" ? (b = "⎧", z = "⎩", x = "⎪", P = "Size4-Regular") : e === "\\rgroup" || e === "⟯" ? (b = "⎫", z = "⎭", x = "⎪", P = "Size4-Regular") : e === "\\lmoustache" || e === "⎰" ? (b = "⎧", z = "⎭", x = "⎪", P = "Size4-Regular") : (e === "\\rmoustache" || e === "⎱") && (b = "⎫", z = "⎩", x = "⎪", P = "Size4-Regular");
            var V = Rr(b, P, u), ee = V.height + V.depth, ae = Rr(x, P, u), ce = ae.height + ae.depth, fe = Rr(z, P, u), de = fe.height + fe.depth, Ce = 0, ye = 1;
            if (k !== null) {
              var Re = Rr(k, P, u);
              Ce = Re.height + Re.depth, ye = 2;
            }
            var Me = ee + de + Ce, qe = Math.max(0, Math.ceil((t - Me) / (ye * ce))), Ye = Me + qe * ye * ce, st = l.fontMetrics().axisHeight;
            n && (st *= l.sizeMultiplier);
            var At = Ye / 2 - st, Ke = [];
            if (N.length > 0) {
              var Q0 = Ye - ee - de, Lt = Math.round(Ye * 1e3), dt = Wr(N, Math.round(Q0 * 1e3)), C0 = new Xt(N, dt), ur = (H / 1e3).toFixed(3) + "em", cr = (Lt / 1e3).toFixed(3) + "em", Aa = new Nt([C0], {
                width: ur,
                height: cr,
                viewBox: "0 0 " + H + " " + Lt
              }), E0 = R.makeSvgSpan([], [Aa], l);
              E0.height = Lt / 1e3, E0.style.width = ur, E0.style.height = cr, Ke.push({
                type: "elem",
                elem: E0
              });
            } else {
              if (Ke.push(aa(z, P, u)), Ke.push(hn), k === null) {
                var B0 = Ye - ee - de + 2 * la;
                Ke.push(ia(x, B0, l));
              } else {
                var It = (Ye - ee - de - Ce) / 2 + 2 * la;
                Ke.push(ia(x, It, l)), Ke.push(hn), Ke.push(aa(k, P, u)), Ke.push(hn), Ke.push(ia(x, It, l));
              }
              Ke.push(hn), Ke.push(aa(b, P, u));
            }
            var Ir = l.havingBaseStyle(I.TEXT), Ta = R.makeVList({
              positionType: "bottom",
              positionData: At,
              children: Ke
            }, Ir);
            return na(R.makeSpan(["delimsizing", "mult"], [Ta], Ir), I.TEXT, l, m);
          }, sa = 80, oa = 0.08, ua = function(e, t, n, l, u) {
            var m = g0(e, l, n), b = new Xt(e, m), k = new Nt([b], {
              // Note: 1000:1 ratio of viewBox to document em width.
              width: "400em",
              height: te(t),
              viewBox: "0 0 400000 " + n,
              preserveAspectRatio: "xMinYMin slice"
            });
            return R.makeSvgSpan(["hide-tail"], [k], u);
          }, z1 = function(e, t) {
            var n = t.havingBaseSizing(), l = qi("\\surd", e * n.sizeMultiplier, Oi, n), u = n.sizeMultiplier, m = Math.max(0, t.minRuleThickness - t.fontMetrics().sqrtRuleThickness), b, k = 0, x = 0, z = 0, N;
            return l.type === "small" ? (z = 1e3 + 1e3 * m + sa, e < 1 ? u = 1 : e < 1.4 && (u = 0.7), k = (1 + m + oa) / u, x = (1 + m) / u, b = ua("sqrtMain", k, z, m, t), b.style.minWidth = "0.853em", N = 0.833 / u) : l.type === "large" ? (z = (1e3 + sa) * Fr[l.size], x = (Fr[l.size] + m) / u, k = (Fr[l.size] + m + oa) / u, b = ua("sqrtSize" + l.size, k, z, m, t), b.style.minWidth = "1.02em", N = 1 / u) : (k = e + m + oa, x = e + m, z = Math.floor(1e3 * e + m) + sa, b = ua("sqrtTall", k, z, m, t), b.style.minWidth = "0.742em", N = 1.056), b.height = x, b.style.height = te(k), {
              span: b,
              advanceWidth: N,
              // Calculate the actual line width.
              // This actually should depend on the chosen font -- e.g. \boldmath
              // should use the thicker surd symbols from e.g. KaTeX_Main-Bold, and
              // have thicker rules.
              ruleWidth: (t.fontMetrics().sqrtRuleThickness + m) * u
            };
          }, Li = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "\\surd"], C1 = ["\\uparrow", "\\downarrow", "\\updownarrow", "\\Uparrow", "\\Downarrow", "\\Updownarrow", "|", "\\|", "\\vert", "\\Vert", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱"], Ii = ["<", ">", "\\langle", "\\rangle", "/", "\\backslash", "\\lt", "\\gt"], Fr = [0, 1.2, 1.8, 2.4, 3], E1 = function(e, t, n, l, u) {
            if (e === "<" || e === "\\lt" || e === "⟨" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "⟩") && (e = "\\rangle"), U.contains(Li, e) || U.contains(Ii, e))
              return Ri(e, t, !1, n, l, u);
            if (U.contains(C1, e))
              return Fi(e, Fr[t], !1, n, l, u);
            throw new c("Illegal delimiter: '" + e + "'");
          }, B1 = [{
            type: "small",
            style: I.SCRIPTSCRIPT
          }, {
            type: "small",
            style: I.SCRIPT
          }, {
            type: "small",
            style: I.TEXT
          }, {
            type: "large",
            size: 1
          }, {
            type: "large",
            size: 2
          }, {
            type: "large",
            size: 3
          }, {
            type: "large",
            size: 4
          }], D1 = [{
            type: "small",
            style: I.SCRIPTSCRIPT
          }, {
            type: "small",
            style: I.SCRIPT
          }, {
            type: "small",
            style: I.TEXT
          }, {
            type: "stack"
          }], Oi = [{
            type: "small",
            style: I.SCRIPTSCRIPT
          }, {
            type: "small",
            style: I.SCRIPT
          }, {
            type: "small",
            style: I.TEXT
          }, {
            type: "large",
            size: 1
          }, {
            type: "large",
            size: 2
          }, {
            type: "large",
            size: 3
          }, {
            type: "large",
            size: 4
          }, {
            type: "stack"
          }], N1 = function(e) {
            if (e.type === "small")
              return "Main-Regular";
            if (e.type === "large")
              return "Size" + e.size + "-Regular";
            if (e.type === "stack")
              return "Size4-Regular";
            throw new Error("Add support for delim type '" + e.type + "' here.");
          }, qi = function(e, t, n, l) {
            for (var u = Math.min(2, 3 - l.style.size), m = u; m < n.length && n[m].type !== "stack"; m++) {
              var b = Rr(e, N1(n[m]), "math"), k = b.height + b.depth;
              if (n[m].type === "small") {
                var x = l.havingBaseStyle(n[m].style);
                k *= x.sizeMultiplier;
              }
              if (k > t)
                return n[m];
            }
            return n[n.length - 1];
          }, Pi = function(e, t, n, l, u, m) {
            e === "<" || e === "\\lt" || e === "⟨" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "⟩") && (e = "\\rangle");
            var b;
            U.contains(Ii, e) ? b = B1 : U.contains(Li, e) ? b = Oi : b = D1;
            var k = qi(e, t, b, l);
            return k.type === "small" ? S1(e, k.style, n, l, u, m) : k.type === "large" ? Ri(e, k.size, n, l, u, m) : Fi(e, t, n, l, u, m);
          }, R1 = function(e, t, n, l, u, m) {
            var b = l.fontMetrics().axisHeight * l.sizeMultiplier, k = 901, x = 5 / l.fontMetrics().ptPerEm, z = Math.max(t - b, n + b), N = Math.max(
              // In real TeX, calculations are done using integral values which are
              // 65536 per pt, or 655360 per em. So, the division here truncates in
              // TeX but doesn't here, producing different results. If we wanted to
              // exactly match TeX's calculation, we could do
              //   Math.floor(655360 * maxDistFromAxis / 500) *
              //    delimiterFactor / 655360
              // (To see the difference, compare
              //    x^{x^{\left(\rule{0.1em}{0.68em}\right)}}
              // in TeX and KaTeX)
              z / 500 * k,
              2 * z - x
            );
            return Pi(e, N, !0, l, u, m);
          }, f0 = {
            sqrtImage: z1,
            sizedDelim: E1,
            sizeToMaxHeight: Fr,
            customSizedDelim: Pi,
            leftRightDelim: R1
          }, Hi = {
            "\\bigl": {
              mclass: "mopen",
              size: 1
            },
            "\\Bigl": {
              mclass: "mopen",
              size: 2
            },
            "\\biggl": {
              mclass: "mopen",
              size: 3
            },
            "\\Biggl": {
              mclass: "mopen",
              size: 4
            },
            "\\bigr": {
              mclass: "mclose",
              size: 1
            },
            "\\Bigr": {
              mclass: "mclose",
              size: 2
            },
            "\\biggr": {
              mclass: "mclose",
              size: 3
            },
            "\\Biggr": {
              mclass: "mclose",
              size: 4
            },
            "\\bigm": {
              mclass: "mrel",
              size: 1
            },
            "\\Bigm": {
              mclass: "mrel",
              size: 2
            },
            "\\biggm": {
              mclass: "mrel",
              size: 3
            },
            "\\Biggm": {
              mclass: "mrel",
              size: 4
            },
            "\\big": {
              mclass: "mord",
              size: 1
            },
            "\\Big": {
              mclass: "mord",
              size: 2
            },
            "\\bigg": {
              mclass: "mord",
              size: 3
            },
            "\\Bigg": {
              mclass: "mord",
              size: 4
            }
          }, F1 = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "<", ">", "\\langle", "⟨", "\\rangle", "⟩", "\\lt", "\\gt", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱", "/", "\\backslash", "|", "\\vert", "\\|", "\\Vert", "\\uparrow", "\\Uparrow", "\\downarrow", "\\Downarrow", "\\updownarrow", "\\Updownarrow", "."];
          function fn(f, e) {
            var t = on(f);
            if (t && U.contains(F1, t.text))
              return t;
            throw t ? new c("Invalid delimiter '" + t.text + "' after '" + e.funcName + "'", f) : new c("Invalid delimiter type '" + f.type + "'", f);
          }
          le({
            type: "delimsizing",
            names: ["\\bigl", "\\Bigl", "\\biggl", "\\Biggl", "\\bigr", "\\Bigr", "\\biggr", "\\Biggr", "\\bigm", "\\Bigm", "\\biggm", "\\Biggm", "\\big", "\\Big", "\\bigg", "\\Bigg"],
            props: {
              numArgs: 1,
              argTypes: ["primitive"]
            },
            handler: function(e, t) {
              var n = fn(t[0], e);
              return {
                type: "delimsizing",
                mode: e.parser.mode,
                size: Hi[e.funcName].size,
                mclass: Hi[e.funcName].mclass,
                delim: n.text
              };
            },
            htmlBuilder: function(e, t) {
              return e.delim === "." ? R.makeSpan([e.mclass]) : f0.sizedDelim(e.delim, e.size, t, e.mode, [e.mclass]);
            },
            mathmlBuilder: function(e) {
              var t = [];
              e.delim !== "." && t.push(Ft(e.delim, e.mode));
              var n = new K.MathNode("mo", t);
              e.mclass === "mopen" || e.mclass === "mclose" ? n.setAttribute("fence", "true") : n.setAttribute("fence", "false"), n.setAttribute("stretchy", "true");
              var l = te(f0.sizeToMaxHeight[e.size]);
              return n.setAttribute("minsize", l), n.setAttribute("maxsize", l), n;
            }
          });
          function Ui(f) {
            if (!f.body)
              throw new Error("Bug: The leftright ParseNode wasn't fully parsed.");
          }
          le({
            type: "leftright-right",
            names: ["\\right"],
            props: {
              numArgs: 1,
              primitive: !0
            },
            handler: function(e, t) {
              var n = e.parser.gullet.macros.get("\\current@color");
              if (n && typeof n != "string")
                throw new c("\\current@color set to non-string in \\right");
              return {
                type: "leftright-right",
                mode: e.parser.mode,
                delim: fn(t[0], e).text,
                color: n
                // undefined if not set via \color
              };
            }
          }), le({
            type: "leftright",
            names: ["\\left"],
            props: {
              numArgs: 1,
              primitive: !0
            },
            handler: function(e, t) {
              var n = fn(t[0], e), l = e.parser;
              ++l.leftrightDepth;
              var u = l.parseExpression(!1);
              --l.leftrightDepth, l.expect("\\right", !1);
              var m = be(l.parseFunction(), "leftright-right");
              return {
                type: "leftright",
                mode: l.mode,
                body: u,
                left: n.text,
                right: m.delim,
                rightColor: m.color
              };
            },
            htmlBuilder: function(e, t) {
              Ui(e);
              for (var n = nt(e.body, t, !0, ["mopen", "mclose"]), l = 0, u = 0, m = !1, b = 0; b < n.length; b++)
                n[b].isMiddle ? m = !0 : (l = Math.max(n[b].height, l), u = Math.max(n[b].depth, u));
              l *= t.sizeMultiplier, u *= t.sizeMultiplier;
              var k;
              if (e.left === "." ? k = Dr(t, ["mopen"]) : k = f0.leftRightDelim(e.left, l, u, t, e.mode, ["mopen"]), n.unshift(k), m)
                for (var x = 1; x < n.length; x++) {
                  var z = n[x], N = z.isMiddle;
                  N && (n[x] = f0.leftRightDelim(N.delim, l, u, N.options, e.mode, []));
                }
              var H;
              if (e.right === ".")
                H = Dr(t, ["mclose"]);
              else {
                var P = e.rightColor ? t.withColor(e.rightColor) : t;
                H = f0.leftRightDelim(e.right, l, u, P, e.mode, ["mclose"]);
              }
              return n.push(H), R.makeSpan(["minner"], n, t);
            },
            mathmlBuilder: function(e, t) {
              Ui(e);
              var n = kt(e.body, t);
              if (e.left !== ".") {
                var l = new K.MathNode("mo", [Ft(e.left, e.mode)]);
                l.setAttribute("fence", "true"), n.unshift(l);
              }
              if (e.right !== ".") {
                var u = new K.MathNode("mo", [Ft(e.right, e.mode)]);
                u.setAttribute("fence", "true"), e.rightColor && u.setAttribute("mathcolor", e.rightColor), n.push(u);
              }
              return Jn(n);
            }
          }), le({
            type: "middle",
            names: ["\\middle"],
            props: {
              numArgs: 1,
              primitive: !0
            },
            handler: function(e, t) {
              var n = fn(t[0], e);
              if (!e.parser.leftrightDepth)
                throw new c("\\middle without preceding \\left", n);
              return {
                type: "middle",
                mode: e.parser.mode,
                delim: n.text
              };
            },
            htmlBuilder: function(e, t) {
              var n;
              if (e.delim === ".")
                n = Dr(t, []);
              else {
                n = f0.sizedDelim(e.delim, 1, t, e.mode, []);
                var l = {
                  delim: e.delim,
                  options: t
                };
                n.isMiddle = l;
              }
              return n;
            },
            mathmlBuilder: function(e, t) {
              var n = e.delim === "\\vert" || e.delim === "|" ? Ft("|", "text") : Ft(e.delim, e.mode), l = new K.MathNode("mo", [n]);
              return l.setAttribute("fence", "true"), l.setAttribute("lspace", "0.05em"), l.setAttribute("rspace", "0.05em"), l;
            }
          });
          var ca = function(e, t) {
            var n = R.wrapFragment(Te(e.body, t), t), l = e.label.slice(1), u = t.sizeMultiplier, m, b = 0, k = U.isCharacterBox(e.body);
            if (l === "sout")
              m = R.makeSpan(["stretchy", "sout"]), m.height = t.fontMetrics().defaultRuleThickness / u, b = -0.5 * t.fontMetrics().xHeight;
            else if (l === "phase") {
              var x = Pe({
                number: 0.6,
                unit: "pt"
              }, t), z = Pe({
                number: 0.35,
                unit: "ex"
              }, t), N = t.havingBaseSizing();
              u = u / N.sizeMultiplier;
              var H = n.height + n.depth + x + z;
              n.style.paddingLeft = te(H / 2 + x);
              var P = Math.floor(1e3 * H * u), V = V0(P), ee = new Nt([new Xt("phase", V)], {
                width: "400em",
                height: te(P / 1e3),
                viewBox: "0 0 400000 " + P,
                preserveAspectRatio: "xMinYMin slice"
              });
              m = R.makeSvgSpan(["hide-tail"], [ee], t), m.style.height = te(H), b = n.depth + x + z;
            } else {
              /cancel/.test(l) ? k || n.classes.push("cancel-pad") : l === "angl" ? n.classes.push("anglpad") : n.classes.push("boxpad");
              var ae = 0, ce = 0, fe = 0;
              /box/.test(l) ? (fe = Math.max(
                t.fontMetrics().fboxrule,
                // default
                t.minRuleThickness
                // User override.
              ), ae = t.fontMetrics().fboxsep + (l === "colorbox" ? 0 : fe), ce = ae) : l === "angl" ? (fe = Math.max(t.fontMetrics().defaultRuleThickness, t.minRuleThickness), ae = 4 * fe, ce = Math.max(0, 0.25 - n.depth)) : (ae = k ? 0.2 : 0, ce = ae), m = h0.encloseSpan(n, l, ae, ce, t), /fbox|boxed|fcolorbox/.test(l) ? (m.style.borderStyle = "solid", m.style.borderWidth = te(fe)) : l === "angl" && fe !== 0.049 && (m.style.borderTopWidth = te(fe), m.style.borderRightWidth = te(fe)), b = n.depth + ce, e.backgroundColor && (m.style.backgroundColor = e.backgroundColor, e.borderColor && (m.style.borderColor = e.borderColor));
            }
            var de;
            if (e.backgroundColor)
              de = R.makeVList({
                positionType: "individualShift",
                children: [
                  // Put the color background behind inner;
                  {
                    type: "elem",
                    elem: m,
                    shift: b
                  },
                  {
                    type: "elem",
                    elem: n,
                    shift: 0
                  }
                ]
              }, t);
            else {
              var Ce = /cancel|phase/.test(l) ? ["svg-align"] : [];
              de = R.makeVList({
                positionType: "individualShift",
                children: [
                  // Write the \cancel stroke on top of inner.
                  {
                    type: "elem",
                    elem: n,
                    shift: 0
                  },
                  {
                    type: "elem",
                    elem: m,
                    shift: b,
                    wrapperClasses: Ce
                  }
                ]
              }, t);
            }
            return /cancel/.test(l) && (de.height = n.height, de.depth = n.depth), /cancel/.test(l) && !k ? R.makeSpan(["mord", "cancel-lap"], [de], t) : R.makeSpan(["mord"], [de], t);
          }, ha = function(e, t) {
            var n = 0, l = new K.MathNode(e.label.indexOf("colorbox") > -1 ? "mpadded" : "menclose", [Ue(e.body, t)]);
            switch (e.label) {
              case "\\cancel":
                l.setAttribute("notation", "updiagonalstrike");
                break;
              case "\\bcancel":
                l.setAttribute("notation", "downdiagonalstrike");
                break;
              case "\\phase":
                l.setAttribute("notation", "phasorangle");
                break;
              case "\\sout":
                l.setAttribute("notation", "horizontalstrike");
                break;
              case "\\fbox":
                l.setAttribute("notation", "box");
                break;
              case "\\angl":
                l.setAttribute("notation", "actuarial");
                break;
              case "\\fcolorbox":
              case "\\colorbox":
                if (n = t.fontMetrics().fboxsep * t.fontMetrics().ptPerEm, l.setAttribute("width", "+" + 2 * n + "pt"), l.setAttribute("height", "+" + 2 * n + "pt"), l.setAttribute("lspace", n + "pt"), l.setAttribute("voffset", n + "pt"), e.label === "\\fcolorbox") {
                  var u = Math.max(
                    t.fontMetrics().fboxrule,
                    // default
                    t.minRuleThickness
                    // user override
                  );
                  l.setAttribute("style", "border: " + u + "em solid " + String(e.borderColor));
                }
                break;
              case "\\xcancel":
                l.setAttribute("notation", "updiagonalstrike downdiagonalstrike");
                break;
            }
            return e.backgroundColor && l.setAttribute("mathbackground", e.backgroundColor), l;
          };
          le({
            type: "enclose",
            names: ["\\colorbox"],
            props: {
              numArgs: 2,
              allowedInText: !0,
              argTypes: ["color", "text"]
            },
            handler: function(e, t, n) {
              var l = e.parser, u = e.funcName, m = be(t[0], "color-token").color, b = t[1];
              return {
                type: "enclose",
                mode: l.mode,
                label: u,
                backgroundColor: m,
                body: b
              };
            },
            htmlBuilder: ca,
            mathmlBuilder: ha
          }), le({
            type: "enclose",
            names: ["\\fcolorbox"],
            props: {
              numArgs: 3,
              allowedInText: !0,
              argTypes: ["color", "color", "text"]
            },
            handler: function(e, t, n) {
              var l = e.parser, u = e.funcName, m = be(t[0], "color-token").color, b = be(t[1], "color-token").color, k = t[2];
              return {
                type: "enclose",
                mode: l.mode,
                label: u,
                backgroundColor: b,
                borderColor: m,
                body: k
              };
            },
            htmlBuilder: ca,
            mathmlBuilder: ha
          }), le({
            type: "enclose",
            names: ["\\fbox"],
            props: {
              numArgs: 1,
              argTypes: ["hbox"],
              allowedInText: !0
            },
            handler: function(e, t) {
              var n = e.parser;
              return {
                type: "enclose",
                mode: n.mode,
                label: "\\fbox",
                body: t[0]
              };
            }
          }), le({
            type: "enclose",
            names: ["\\cancel", "\\bcancel", "\\xcancel", "\\sout", "\\phase"],
            props: {
              numArgs: 1
            },
            handler: function(e, t) {
              var n = e.parser, l = e.funcName, u = t[0];
              return {
                type: "enclose",
                mode: n.mode,
                label: l,
                body: u
              };
            },
            htmlBuilder: ca,
            mathmlBuilder: ha
          }), le({
            type: "enclose",
            names: ["\\angl"],
            props: {
              numArgs: 1,
              argTypes: ["hbox"],
              allowedInText: !1
            },
            handler: function(e, t) {
              var n = e.parser;
              return {
                type: "enclose",
                mode: n.mode,
                label: "\\angl",
                body: t[0]
              };
            }
          });
          var Gi = {};
          function Kt(f) {
            for (var e = f.type, t = f.names, n = f.props, l = f.handler, u = f.htmlBuilder, m = f.mathmlBuilder, b = {
              type: e,
              numArgs: n.numArgs || 0,
              allowedInText: !1,
              numOptionalArgs: 0,
              handler: l
            }, k = 0; k < t.length; ++k)
              Gi[t[k]] = b;
            u && (nn[e] = u), m && (an[e] = m);
          }
          var Vi = {};
          function _(f, e) {
            Vi[f] = e;
          }
          var Gt = /* @__PURE__ */ function() {
            function f(e, t, n) {
              this.lexer = void 0, this.start = void 0, this.end = void 0, this.lexer = e, this.start = t, this.end = n;
            }
            return f.range = function(t, n) {
              return n ? !t || !t.loc || !n.loc || t.loc.lexer !== n.loc.lexer ? null : new f(t.loc.lexer, t.loc.start, n.loc.end) : t && t.loc;
            }, f;
          }(), T0 = /* @__PURE__ */ function() {
            function f(t, n) {
              this.text = void 0, this.loc = void 0, this.noexpand = void 0, this.treatAsRelax = void 0, this.text = t, this.loc = n;
            }
            var e = f.prototype;
            return e.range = function(n, l) {
              return new f(l, Gt.range(this, n));
            }, f;
          }();
          function Wi(f) {
            var e = [];
            f.consumeSpaces();
            var t = f.fetch().text;
            for (t === "\\relax" && (f.consume(), f.consumeSpaces(), t = f.fetch().text); t === "\\hline" || t === "\\hdashline"; )
              f.consume(), e.push(t === "\\hdashline"), f.consumeSpaces(), t = f.fetch().text;
            return e;
          }
          var mn = function(e) {
            var t = e.parser.settings;
            if (!t.displayMode)
              throw new c("{" + e.envName + "} can be used only in display mode.");
          };
          function fa(f) {
            if (f.indexOf("ed") === -1)
              return f.indexOf("*") === -1;
          }
          function M0(f, e, t) {
            var n = e.hskipBeforeAndAfter, l = e.addJot, u = e.cols, m = e.arraystretch, b = e.colSeparationType, k = e.autoTag, x = e.singleRow, z = e.emptySingleRow, N = e.maxNumCols, H = e.leqno;
            if (f.gullet.beginGroup(), x || f.gullet.macros.set("\\cr", "\\\\\\relax"), !m) {
              var P = f.gullet.expandMacroAsText("\\arraystretch");
              if (P == null)
                m = 1;
              else if (m = parseFloat(P), !m || m < 0)
                throw new c("Invalid \\arraystretch: " + P);
            }
            f.gullet.beginGroup();
            var V = [], ee = [V], ae = [], ce = [], fe = k != null ? [] : void 0;
            function de() {
              k && f.gullet.macros.set("\\@eqnsw", "1", !0);
            }
            function Ce() {
              fe && (f.gullet.macros.get("\\df@tag") ? (fe.push(f.subparse([new T0("\\df@tag")])), f.gullet.macros.set("\\df@tag", void 0, !0)) : fe.push(!!k && f.gullet.macros.get("\\@eqnsw") === "1"));
            }
            for (de(), ce.push(Wi(f)); ; ) {
              var ye = f.parseExpression(!1, x ? "\\end" : "\\\\");
              f.gullet.endGroup(), f.gullet.beginGroup(), ye = {
                type: "ordgroup",
                mode: f.mode,
                body: ye
              }, t && (ye = {
                type: "styling",
                mode: f.mode,
                style: t,
                body: [ye]
              }), V.push(ye);
              var Re = f.fetch().text;
              if (Re === "&") {
                if (N && V.length === N) {
                  if (x || b)
                    throw new c("Too many tab characters: &", f.nextToken);
                  f.settings.reportNonstrict("textEnv", "Too few columns specified in the {array} column argument.");
                }
                f.consume();
              } else if (Re === "\\end") {
                Ce(), V.length === 1 && ye.type === "styling" && ye.body[0].body.length === 0 && (ee.length > 1 || !z) && ee.pop(), ce.length < ee.length + 1 && ce.push([]);
                break;
              } else if (Re === "\\\\") {
                f.consume();
                var Me = void 0;
                f.gullet.future().text !== " " && (Me = f.parseSizeGroup(!0)), ae.push(Me ? Me.value : null), Ce(), ce.push(Wi(f)), V = [], ee.push(V), de();
              } else
                throw new c("Expected & or \\\\ or \\cr or \\end", f.nextToken);
            }
            return f.gullet.endGroup(), f.gullet.endGroup(), {
              type: "array",
              mode: f.mode,
              addJot: l,
              arraystretch: m,
              body: ee,
              cols: u,
              rowGaps: ae,
              hskipBeforeAndAfter: n,
              hLinesBeforeRow: ce,
              colSeparationType: b,
              tags: fe,
              leqno: H
            };
          }
          function ma(f) {
            return f.slice(0, 1) === "d" ? "display" : "text";
          }
          var Qt = function(e, t) {
            var n, l, u = e.body.length, m = e.hLinesBeforeRow, b = 0, k = new Array(u), x = [], z = Math.max(
              // From LaTeX \showthe\arrayrulewidth. Equals 0.04 em.
              t.fontMetrics().arrayRuleWidth,
              t.minRuleThickness
              // User override.
            ), N = 1 / t.fontMetrics().ptPerEm, H = 5 * N;
            if (e.colSeparationType && e.colSeparationType === "small") {
              var P = t.havingStyle(I.SCRIPT).sizeMultiplier;
              H = 0.2778 * (P / t.sizeMultiplier);
            }
            var V = e.colSeparationType === "CD" ? Pe({
              number: 3,
              unit: "ex"
            }, t) : 12 * N, ee = 3 * N, ae = e.arraystretch * V, ce = 0.7 * ae, fe = 0.3 * ae, de = 0;
            function Ce(vn) {
              for (var bn = 0; bn < vn.length; ++bn)
                bn > 0 && (de += 0.25), x.push({
                  pos: de,
                  isDashed: vn[bn]
                });
            }
            for (Ce(m[0]), n = 0; n < e.body.length; ++n) {
              var ye = e.body[n], Re = ce, Me = fe;
              b < ye.length && (b = ye.length);
              var qe = new Array(ye.length);
              for (l = 0; l < ye.length; ++l) {
                var Ye = Te(ye[l], t);
                Me < Ye.depth && (Me = Ye.depth), Re < Ye.height && (Re = Ye.height), qe[l] = Ye;
              }
              var st = e.rowGaps[n], At = 0;
              st && (At = Pe(st, t), At > 0 && (At += fe, Me < At && (Me = At), At = 0)), e.addJot && (Me += ee), qe.height = Re, qe.depth = Me, de += Re, qe.pos = de, de += Me + At, k[n] = qe, Ce(m[n + 1]);
            }
            var Ke = de / 2 + t.fontMetrics().axisHeight, Q0 = e.cols || [], Lt = [], dt, C0, ur = [];
            if (e.tags && e.tags.some(function(vn) {
              return vn;
            }))
              for (n = 0; n < u; ++n) {
                var cr = k[n], Aa = cr.pos - Ke, E0 = e.tags[n], B0 = void 0;
                E0 === !0 ? B0 = R.makeSpan(["eqn-num"], [], t) : E0 === !1 ? B0 = R.makeSpan([], [], t) : B0 = R.makeSpan([], nt(E0, t, !0), t), B0.depth = cr.depth, B0.height = cr.height, ur.push({
                  type: "elem",
                  elem: B0,
                  shift: Aa
                });
              }
            for (
              l = 0, C0 = 0;
              // Continue while either there are more columns or more column
              // descriptions, so trailing separators don't get lost.
              l < b || C0 < Q0.length;
              ++l, ++C0
            ) {
              for (var It = Q0[C0] || {}, Ir = !0; It.type === "separator"; ) {
                if (Ir || (dt = R.makeSpan(["arraycolsep"], []), dt.style.width = te(t.fontMetrics().doubleRuleSep), Lt.push(dt)), It.separator === "|" || It.separator === ":") {
                  var Ta = It.separator === "|" ? "solid" : "dashed", hr = R.makeSpan(["vertical-separator"], [], t);
                  hr.style.height = te(de), hr.style.borderRightWidth = te(z), hr.style.borderRightStyle = Ta, hr.style.margin = "0 " + te(-z / 2);
                  var Tl = de - Ke;
                  Tl && (hr.style.verticalAlign = te(-Tl)), Lt.push(hr);
                } else
                  throw new c("Invalid separator type: " + It.separator);
                C0++, It = Q0[C0] || {}, Ir = !1;
              }
              if (!(l >= b)) {
                var fr = void 0;
                (l > 0 || e.hskipBeforeAndAfter) && (fr = U.deflt(It.pregap, H), fr !== 0 && (dt = R.makeSpan(["arraycolsep"], []), dt.style.width = te(fr), Lt.push(dt)));
                var mr = [];
                for (n = 0; n < u; ++n) {
                  var pn = k[n], gn = pn[l];
                  if (gn) {
                    var ou = pn.pos - Ke;
                    gn.depth = pn.depth, gn.height = pn.height, mr.push({
                      type: "elem",
                      elem: gn,
                      shift: ou
                    });
                  }
                }
                mr = R.makeVList({
                  positionType: "individualShift",
                  children: mr
                }, t), mr = R.makeSpan(["col-align-" + (It.align || "c")], [mr]), Lt.push(mr), (l < b - 1 || e.hskipBeforeAndAfter) && (fr = U.deflt(It.postgap, H), fr !== 0 && (dt = R.makeSpan(["arraycolsep"], []), dt.style.width = te(fr), Lt.push(dt)));
              }
            }
            if (k = R.makeSpan(["mtable"], Lt), x.length > 0) {
              for (var uu = R.makeLineSpan("hline", t, z), cu = R.makeLineSpan("hdashline", t, z), Ma = [{
                type: "elem",
                elem: k,
                shift: 0
              }]; x.length > 0; ) {
                var Ml = x.pop(), zl = Ml.pos - Ke;
                Ml.isDashed ? Ma.push({
                  type: "elem",
                  elem: cu,
                  shift: zl
                }) : Ma.push({
                  type: "elem",
                  elem: uu,
                  shift: zl
                });
              }
              k = R.makeVList({
                positionType: "individualShift",
                children: Ma
              }, t);
            }
            if (ur.length === 0)
              return R.makeSpan(["mord"], [k], t);
            var za = R.makeVList({
              positionType: "individualShift",
              children: ur
            }, t);
            return za = R.makeSpan(["tag"], [za], t), R.makeFragment([k, za]);
          }, L1 = {
            c: "center ",
            l: "left ",
            r: "right "
          }, Jt = function(e, t) {
            for (var n = [], l = new K.MathNode("mtd", [], ["mtr-glue"]), u = new K.MathNode("mtd", [], ["mml-eqn-num"]), m = 0; m < e.body.length; m++) {
              for (var b = e.body[m], k = [], x = 0; x < b.length; x++)
                k.push(new K.MathNode("mtd", [Ue(b[x], t)]));
              e.tags && e.tags[m] && (k.unshift(l), k.push(l), e.leqno ? k.unshift(u) : k.push(u)), n.push(new K.MathNode("mtr", k));
            }
            var z = new K.MathNode("mtable", n), N = e.arraystretch === 0.5 ? 0.1 : 0.16 + e.arraystretch - 1 + (e.addJot ? 0.09 : 0);
            z.setAttribute("rowspacing", te(N));
            var H = "", P = "";
            if (e.cols && e.cols.length > 0) {
              var V = e.cols, ee = "", ae = !1, ce = 0, fe = V.length;
              V[0].type === "separator" && (H += "top ", ce = 1), V[V.length - 1].type === "separator" && (H += "bottom ", fe -= 1);
              for (var de = ce; de < fe; de++)
                V[de].type === "align" ? (P += L1[V[de].align], ae && (ee += "none "), ae = !0) : V[de].type === "separator" && ae && (ee += V[de].separator === "|" ? "solid " : "dashed ", ae = !1);
              z.setAttribute("columnalign", P.trim()), /[sd]/.test(ee) && z.setAttribute("columnlines", ee.trim());
            }
            if (e.colSeparationType === "align") {
              for (var Ce = e.cols || [], ye = "", Re = 1; Re < Ce.length; Re++)
                ye += Re % 2 ? "0em " : "1em ";
              z.setAttribute("columnspacing", ye.trim());
            } else
              e.colSeparationType === "alignat" || e.colSeparationType === "gather" ? z.setAttribute("columnspacing", "0em") : e.colSeparationType === "small" ? z.setAttribute("columnspacing", "0.2778em") : e.colSeparationType === "CD" ? z.setAttribute("columnspacing", "0.5em") : z.setAttribute("columnspacing", "1em");
            var Me = "", qe = e.hLinesBeforeRow;
            H += qe[0].length > 0 ? "left " : "", H += qe[qe.length - 1].length > 0 ? "right " : "";
            for (var Ye = 1; Ye < qe.length - 1; Ye++)
              Me += qe[Ye].length === 0 ? "none " : qe[Ye][0] ? "dashed " : "solid ";
            return /[sd]/.test(Me) && z.setAttribute("rowlines", Me.trim()), H !== "" && (z = new K.MathNode("menclose", [z]), z.setAttribute("notation", H.trim())), e.arraystretch && e.arraystretch < 1 && (z = new K.MathNode("mstyle", [z]), z.setAttribute("scriptlevel", "1")), z;
          }, ji = function(e, t) {
            e.envName.indexOf("ed") === -1 && mn(e);
            var n = [], l = e.envName.indexOf("at") > -1 ? "alignat" : "align", u = e.envName === "split", m = M0(e.parser, {
              cols: n,
              addJot: !0,
              autoTag: u ? void 0 : fa(e.envName),
              emptySingleRow: !0,
              colSeparationType: l,
              maxNumCols: u ? 2 : void 0,
              leqno: e.parser.settings.leqno
            }, "display"), b, k = 0, x = {
              type: "ordgroup",
              mode: e.mode,
              body: []
            };
            if (t[0] && t[0].type === "ordgroup") {
              for (var z = "", N = 0; N < t[0].body.length; N++) {
                var H = be(t[0].body[N], "textord");
                z += H.text;
              }
              b = Number(z), k = b * 2;
            }
            var P = !k;
            m.body.forEach(function(ce) {
              for (var fe = 1; fe < ce.length; fe += 2) {
                var de = be(ce[fe], "styling"), Ce = be(de.body[0], "ordgroup");
                Ce.body.unshift(x);
              }
              if (P)
                k < ce.length && (k = ce.length);
              else {
                var ye = ce.length / 2;
                if (b < ye)
                  throw new c("Too many math in a row: " + ("expected " + b + ", but got " + ye), ce[0]);
              }
            });
            for (var V = 0; V < k; ++V) {
              var ee = "r", ae = 0;
              V % 2 === 1 ? ee = "l" : V > 0 && P && (ae = 1), n[V] = {
                type: "align",
                align: ee,
                pregap: ae,
                postgap: 0
              };
            }
            return m.colSeparationType = P ? "align" : "alignat", m;
          };
          Kt({
            type: "array",
            names: ["array", "darray"],
            props: {
              numArgs: 1
            },
            handler: function(e, t) {
              var n = on(t[0]), l = n ? [t[0]] : be(t[0], "ordgroup").body, u = l.map(function(b) {
                var k = ea(b), x = k.text;
                if ("lcr".indexOf(x) !== -1)
                  return {
                    type: "align",
                    align: x
                  };
                if (x === "|")
                  return {
                    type: "separator",
                    separator: "|"
                  };
                if (x === ":")
                  return {
                    type: "separator",
                    separator: ":"
                  };
                throw new c("Unknown column alignment: " + x, b);
              }), m = {
                cols: u,
                hskipBeforeAndAfter: !0,
                // \@preamble in lttab.dtx
                maxNumCols: u.length
              };
              return M0(e.parser, m, ma(e.envName));
            },
            htmlBuilder: Qt,
            mathmlBuilder: Jt
          }), Kt({
            type: "array",
            names: ["matrix", "pmatrix", "bmatrix", "Bmatrix", "vmatrix", "Vmatrix", "matrix*", "pmatrix*", "bmatrix*", "Bmatrix*", "vmatrix*", "Vmatrix*"],
            props: {
              numArgs: 0
            },
            handler: function(e) {
              var t = {
                matrix: null,
                pmatrix: ["(", ")"],
                bmatrix: ["[", "]"],
                Bmatrix: ["\\{", "\\}"],
                vmatrix: ["|", "|"],
                Vmatrix: ["\\Vert", "\\Vert"]
              }[e.envName.replace("*", "")], n = "c", l = {
                hskipBeforeAndAfter: !1,
                cols: [{
                  type: "align",
                  align: n
                }]
              };
              if (e.envName.charAt(e.envName.length - 1) === "*") {
                var u = e.parser;
                if (u.consumeSpaces(), u.fetch().text === "[") {
                  if (u.consume(), u.consumeSpaces(), n = u.fetch().text, "lcr".indexOf(n) === -1)
                    throw new c("Expected l or c or r", u.nextToken);
                  u.consume(), u.consumeSpaces(), u.expect("]"), u.consume(), l.cols = [{
                    type: "align",
                    align: n
                  }];
                }
              }
              var m = M0(e.parser, l, ma(e.envName)), b = Math.max.apply(Math, [0].concat(m.body.map(function(k) {
                return k.length;
              })));
              return m.cols = new Array(b).fill({
                type: "align",
                align: n
              }), t ? {
                type: "leftright",
                mode: e.mode,
                body: [m],
                left: t[0],
                right: t[1],
                rightColor: void 0
                // \right uninfluenced by \color in array
              } : m;
            },
            htmlBuilder: Qt,
            mathmlBuilder: Jt
          }), Kt({
            type: "array",
            names: ["smallmatrix"],
            props: {
              numArgs: 0
            },
            handler: function(e) {
              var t = {
                arraystretch: 0.5
              }, n = M0(e.parser, t, "script");
              return n.colSeparationType = "small", n;
            },
            htmlBuilder: Qt,
            mathmlBuilder: Jt
          }), Kt({
            type: "array",
            names: ["subarray"],
            props: {
              numArgs: 1
            },
            handler: function(e, t) {
              var n = on(t[0]), l = n ? [t[0]] : be(t[0], "ordgroup").body, u = l.map(function(b) {
                var k = ea(b), x = k.text;
                if ("lc".indexOf(x) !== -1)
                  return {
                    type: "align",
                    align: x
                  };
                throw new c("Unknown column alignment: " + x, b);
              });
              if (u.length > 1)
                throw new c("{subarray} can contain only one column");
              var m = {
                cols: u,
                hskipBeforeAndAfter: !1,
                arraystretch: 0.5
              };
              if (m = M0(e.parser, m, "script"), m.body.length > 0 && m.body[0].length > 1)
                throw new c("{subarray} can contain only one column");
              return m;
            },
            htmlBuilder: Qt,
            mathmlBuilder: Jt
          }), Kt({
            type: "array",
            names: ["cases", "dcases", "rcases", "drcases"],
            props: {
              numArgs: 0
            },
            handler: function(e) {
              var t = {
                arraystretch: 1.2,
                cols: [{
                  type: "align",
                  align: "l",
                  pregap: 0,
                  // TODO(kevinb) get the current style.
                  // For now we use the metrics for TEXT style which is what we were
                  // doing before.  Before attempting to get the current style we
                  // should look at TeX's behavior especially for \over and matrices.
                  postgap: 1
                  /* 1em quad */
                }, {
                  type: "align",
                  align: "l",
                  pregap: 0,
                  postgap: 0
                }]
              }, n = M0(e.parser, t, ma(e.envName));
              return {
                type: "leftright",
                mode: e.mode,
                body: [n],
                left: e.envName.indexOf("r") > -1 ? "." : "\\{",
                right: e.envName.indexOf("r") > -1 ? "\\}" : ".",
                rightColor: void 0
              };
            },
            htmlBuilder: Qt,
            mathmlBuilder: Jt
          }), Kt({
            type: "array",
            names: ["align", "align*", "aligned", "split"],
            props: {
              numArgs: 0
            },
            handler: ji,
            htmlBuilder: Qt,
            mathmlBuilder: Jt
          }), Kt({
            type: "array",
            names: ["gathered", "gather", "gather*"],
            props: {
              numArgs: 0
            },
            handler: function(e) {
              U.contains(["gather", "gather*"], e.envName) && mn(e);
              var t = {
                cols: [{
                  type: "align",
                  align: "c"
                }],
                addJot: !0,
                colSeparationType: "gather",
                autoTag: fa(e.envName),
                emptySingleRow: !0,
                leqno: e.parser.settings.leqno
              };
              return M0(e.parser, t, "display");
            },
            htmlBuilder: Qt,
            mathmlBuilder: Jt
          }), Kt({
            type: "array",
            names: ["alignat", "alignat*", "alignedat"],
            props: {
              numArgs: 1
            },
            handler: ji,
            htmlBuilder: Qt,
            mathmlBuilder: Jt
          }), Kt({
            type: "array",
            names: ["equation", "equation*"],
            props: {
              numArgs: 0
            },
            handler: function(e) {
              mn(e);
              var t = {
                autoTag: fa(e.envName),
                emptySingleRow: !0,
                singleRow: !0,
                maxNumCols: 1,
                leqno: e.parser.settings.leqno
              };
              return M0(e.parser, t, "display");
            },
            htmlBuilder: Qt,
            mathmlBuilder: Jt
          }), Kt({
            type: "array",
            names: ["CD"],
            props: {
              numArgs: 0
            },
            handler: function(e) {
              return mn(e), _1(e.parser);
            },
            htmlBuilder: Qt,
            mathmlBuilder: Jt
          }), _("\\nonumber", "\\gdef\\@eqnsw{0}"), _("\\notag", "\\nonumber"), le({
            type: "text",
            // Doesn't matter what this is.
            names: ["\\hline", "\\hdashline"],
            props: {
              numArgs: 0,
              allowedInText: !0,
              allowedInMath: !0
            },
            handler: function(e, t) {
              throw new c(e.funcName + " valid only within array environment");
            }
          });
          var I1 = Gi, Yi = I1;
          le({
            type: "environment",
            names: ["\\begin", "\\end"],
            props: {
              numArgs: 1,
              argTypes: ["text"]
            },
            handler: function(e, t) {
              var n = e.parser, l = e.funcName, u = t[0];
              if (u.type !== "ordgroup")
                throw new c("Invalid environment name", u);
              for (var m = "", b = 0; b < u.body.length; ++b)
                m += be(u.body[b], "textord").text;
              if (l === "\\begin") {
                if (!Yi.hasOwnProperty(m))
                  throw new c("No such environment: " + m, u);
                var k = Yi[m], x = n.parseArguments("\\begin{" + m + "}", k), z = x.args, N = x.optArgs, H = {
                  mode: n.mode,
                  envName: m,
                  parser: n
                }, P = k.handler(H, z, N);
                n.expect("\\end", !1);
                var V = n.nextToken, ee = be(n.parseFunction(), "environment");
                if (ee.name !== m)
                  throw new c("Mismatch: \\begin{" + m + "} matched by \\end{" + ee.name + "}", V);
                return P;
              }
              return {
                type: "environment",
                mode: n.mode,
                name: m,
                nameGroup: u
              };
            }
          });
          var Xi = function(e, t) {
            var n = e.font, l = t.withFont(n);
            return Te(e.body, l);
          }, Zi = function(e, t) {
            var n = e.font, l = t.withFont(n);
            return Ue(e.body, l);
          }, Ki = {
            "\\Bbb": "\\mathbb",
            "\\bold": "\\mathbf",
            "\\frak": "\\mathfrak",
            "\\bm": "\\boldsymbol"
          };
          le({
            type: "font",
            names: [
              // styles, except \boldsymbol defined below
              "\\mathrm",
              "\\mathit",
              "\\mathbf",
              "\\mathnormal",
              // families
              "\\mathbb",
              "\\mathcal",
              "\\mathfrak",
              "\\mathscr",
              "\\mathsf",
              "\\mathtt",
              // aliases, except \bm defined below
              "\\Bbb",
              "\\bold",
              "\\frak"
            ],
            props: {
              numArgs: 1,
              allowedInArgument: !0
            },
            handler: function(e, t) {
              var n = e.parser, l = e.funcName, u = ln(t[0]), m = l;
              return m in Ki && (m = Ki[m]), {
                type: "font",
                mode: n.mode,
                font: m.slice(1),
                body: u
              };
            },
            htmlBuilder: Xi,
            mathmlBuilder: Zi
          }), le({
            type: "mclass",
            names: ["\\boldsymbol", "\\bm"],
            props: {
              numArgs: 1
            },
            handler: function(e, t) {
              var n = e.parser, l = t[0], u = U.isCharacterBox(l);
              return {
                type: "mclass",
                mode: n.mode,
                mclass: cn(l),
                body: [{
                  type: "font",
                  mode: n.mode,
                  font: "boldsymbol",
                  body: l
                }],
                isCharacterBox: u
              };
            }
          }), le({
            type: "font",
            names: ["\\rm", "\\sf", "\\tt", "\\bf", "\\it", "\\cal"],
            props: {
              numArgs: 0,
              allowedInText: !0
            },
            handler: function(e, t) {
              var n = e.parser, l = e.funcName, u = e.breakOnTokenText, m = n.mode, b = n.parseExpression(!0, u), k = "math" + l.slice(1);
              return {
                type: "font",
                mode: m,
                font: k,
                body: {
                  type: "ordgroup",
                  mode: n.mode,
                  body: b
                }
              };
            },
            htmlBuilder: Xi,
            mathmlBuilder: Zi
          });
          var Qi = function(e, t) {
            var n = t;
            return e === "display" ? n = n.id >= I.SCRIPT.id ? n.text() : I.DISPLAY : e === "text" && n.size === I.DISPLAY.size ? n = I.TEXT : e === "script" ? n = I.SCRIPT : e === "scriptscript" && (n = I.SCRIPTSCRIPT), n;
          }, da = function(e, t) {
            var n = Qi(e.size, t.style), l = n.fracNum(), u = n.fracDen(), m;
            m = t.havingStyle(l);
            var b = Te(e.numer, m, t);
            if (e.continued) {
              var k = 8.5 / t.fontMetrics().ptPerEm, x = 3.5 / t.fontMetrics().ptPerEm;
              b.height = b.height < k ? k : b.height, b.depth = b.depth < x ? x : b.depth;
            }
            m = t.havingStyle(u);
            var z = Te(e.denom, m, t), N, H, P;
            e.hasBarLine ? (e.barSize ? (H = Pe(e.barSize, t), N = R.makeLineSpan("frac-line", t, H)) : N = R.makeLineSpan("frac-line", t), H = N.height, P = N.height) : (N = null, H = 0, P = t.fontMetrics().defaultRuleThickness);
            var V, ee, ae;
            n.size === I.DISPLAY.size || e.size === "display" ? (V = t.fontMetrics().num1, H > 0 ? ee = 3 * P : ee = 7 * P, ae = t.fontMetrics().denom1) : (H > 0 ? (V = t.fontMetrics().num2, ee = P) : (V = t.fontMetrics().num3, ee = 3 * P), ae = t.fontMetrics().denom2);
            var ce;
            if (N) {
              var de = t.fontMetrics().axisHeight;
              V - b.depth - (de + 0.5 * H) < ee && (V += ee - (V - b.depth - (de + 0.5 * H))), de - 0.5 * H - (z.height - ae) < ee && (ae += ee - (de - 0.5 * H - (z.height - ae)));
              var Ce = -(de - 0.5 * H);
              ce = R.makeVList({
                positionType: "individualShift",
                children: [{
                  type: "elem",
                  elem: z,
                  shift: ae
                }, {
                  type: "elem",
                  elem: N,
                  shift: Ce
                }, {
                  type: "elem",
                  elem: b,
                  shift: -V
                }]
              }, t);
            } else {
              var fe = V - b.depth - (z.height - ae);
              fe < ee && (V += 0.5 * (ee - fe), ae += 0.5 * (ee - fe)), ce = R.makeVList({
                positionType: "individualShift",
                children: [{
                  type: "elem",
                  elem: z,
                  shift: ae
                }, {
                  type: "elem",
                  elem: b,
                  shift: -V
                }]
              }, t);
            }
            m = t.havingStyle(n), ce.height *= m.sizeMultiplier / t.sizeMultiplier, ce.depth *= m.sizeMultiplier / t.sizeMultiplier;
            var ye;
            n.size === I.DISPLAY.size ? ye = t.fontMetrics().delim1 : n.size === I.SCRIPTSCRIPT.size ? ye = t.havingStyle(I.SCRIPT).fontMetrics().delim2 : ye = t.fontMetrics().delim2;
            var Re, Me;
            return e.leftDelim == null ? Re = Dr(t, ["mopen"]) : Re = f0.customSizedDelim(e.leftDelim, ye, !0, t.havingStyle(n), e.mode, ["mopen"]), e.continued ? Me = R.makeSpan([]) : e.rightDelim == null ? Me = Dr(t, ["mclose"]) : Me = f0.customSizedDelim(e.rightDelim, ye, !0, t.havingStyle(n), e.mode, ["mclose"]), R.makeSpan(["mord"].concat(m.sizingClasses(t)), [Re, R.makeSpan(["mfrac"], [ce]), Me], t);
          }, pa = function(e, t) {
            var n = new K.MathNode("mfrac", [Ue(e.numer, t), Ue(e.denom, t)]);
            if (!e.hasBarLine)
              n.setAttribute("linethickness", "0px");
            else if (e.barSize) {
              var l = Pe(e.barSize, t);
              n.setAttribute("linethickness", te(l));
            }
            var u = Qi(e.size, t.style);
            if (u.size !== t.style.size) {
              n = new K.MathNode("mstyle", [n]);
              var m = u.size === I.DISPLAY.size ? "true" : "false";
              n.setAttribute("displaystyle", m), n.setAttribute("scriptlevel", "0");
            }
            if (e.leftDelim != null || e.rightDelim != null) {
              var b = [];
              if (e.leftDelim != null) {
                var k = new K.MathNode("mo", [new K.TextNode(e.leftDelim.replace("\\", ""))]);
                k.setAttribute("fence", "true"), b.push(k);
              }
              if (b.push(n), e.rightDelim != null) {
                var x = new K.MathNode("mo", [new K.TextNode(e.rightDelim.replace("\\", ""))]);
                x.setAttribute("fence", "true"), b.push(x);
              }
              return Jn(b);
            }
            return n;
          };
          le({
            type: "genfrac",
            names: [
              "\\dfrac",
              "\\frac",
              "\\tfrac",
              "\\dbinom",
              "\\binom",
              "\\tbinom",
              "\\\\atopfrac",
              // can’t be entered directly
              "\\\\bracefrac",
              "\\\\brackfrac"
              // ditto
            ],
            props: {
              numArgs: 2,
              allowedInArgument: !0
            },
            handler: function(e, t) {
              var n = e.parser, l = e.funcName, u = t[0], m = t[1], b, k = null, x = null, z = "auto";
              switch (l) {
                case "\\dfrac":
                case "\\frac":
                case "\\tfrac":
                  b = !0;
                  break;
                case "\\\\atopfrac":
                  b = !1;
                  break;
                case "\\dbinom":
                case "\\binom":
                case "\\tbinom":
                  b = !1, k = "(", x = ")";
                  break;
                case "\\\\bracefrac":
                  b = !1, k = "\\{", x = "\\}";
                  break;
                case "\\\\brackfrac":
                  b = !1, k = "[", x = "]";
                  break;
                default:
                  throw new Error("Unrecognized genfrac command");
              }
              switch (l) {
                case "\\dfrac":
                case "\\dbinom":
                  z = "display";
                  break;
                case "\\tfrac":
                case "\\tbinom":
                  z = "text";
                  break;
              }
              return {
                type: "genfrac",
                mode: n.mode,
                continued: !1,
                numer: u,
                denom: m,
                hasBarLine: b,
                leftDelim: k,
                rightDelim: x,
                size: z,
                barSize: null
              };
            },
            htmlBuilder: da,
            mathmlBuilder: pa
          }), le({
            type: "genfrac",
            names: ["\\cfrac"],
            props: {
              numArgs: 2
            },
            handler: function(e, t) {
              var n = e.parser;
              e.funcName;
              var l = t[0], u = t[1];
              return {
                type: "genfrac",
                mode: n.mode,
                continued: !0,
                numer: l,
                denom: u,
                hasBarLine: !0,
                leftDelim: null,
                rightDelim: null,
                size: "display",
                barSize: null
              };
            }
          }), le({
            type: "infix",
            names: ["\\over", "\\choose", "\\atop", "\\brace", "\\brack"],
            props: {
              numArgs: 0,
              infix: !0
            },
            handler: function(e) {
              var t = e.parser, n = e.funcName, l = e.token, u;
              switch (n) {
                case "\\over":
                  u = "\\frac";
                  break;
                case "\\choose":
                  u = "\\binom";
                  break;
                case "\\atop":
                  u = "\\\\atopfrac";
                  break;
                case "\\brace":
                  u = "\\\\bracefrac";
                  break;
                case "\\brack":
                  u = "\\\\brackfrac";
                  break;
                default:
                  throw new Error("Unrecognized infix genfrac command");
              }
              return {
                type: "infix",
                mode: t.mode,
                replaceWith: u,
                token: l
              };
            }
          });
          var Ji = ["display", "text", "script", "scriptscript"], $i = function(e) {
            var t = null;
            return e.length > 0 && (t = e, t = t === "." ? null : t), t;
          };
          le({
            type: "genfrac",
            names: ["\\genfrac"],
            props: {
              numArgs: 6,
              allowedInArgument: !0,
              argTypes: ["math", "math", "size", "text", "math", "math"]
            },
            handler: function(e, t) {
              var n = e.parser, l = t[4], u = t[5], m = ln(t[0]), b = m.type === "atom" && m.family === "open" ? $i(m.text) : null, k = ln(t[1]), x = k.type === "atom" && k.family === "close" ? $i(k.text) : null, z = be(t[2], "size"), N, H = null;
              z.isBlank ? N = !0 : (H = z.value, N = H.number > 0);
              var P = "auto", V = t[3];
              if (V.type === "ordgroup") {
                if (V.body.length > 0) {
                  var ee = be(V.body[0], "textord");
                  P = Ji[Number(ee.text)];
                }
              } else
                V = be(V, "textord"), P = Ji[Number(V.text)];
              return {
                type: "genfrac",
                mode: n.mode,
                numer: l,
                denom: u,
                continued: !1,
                hasBarLine: N,
                barSize: H,
                leftDelim: b,
                rightDelim: x,
                size: P
              };
            },
            htmlBuilder: da,
            mathmlBuilder: pa
          }), le({
            type: "infix",
            names: ["\\above"],
            props: {
              numArgs: 1,
              argTypes: ["size"],
              infix: !0
            },
            handler: function(e, t) {
              var n = e.parser;
              e.funcName;
              var l = e.token;
              return {
                type: "infix",
                mode: n.mode,
                replaceWith: "\\\\abovefrac",
                size: be(t[0], "size").value,
                token: l
              };
            }
          }), le({
            type: "genfrac",
            names: ["\\\\abovefrac"],
            props: {
              numArgs: 3,
              argTypes: ["math", "size", "math"]
            },
            handler: function(e, t) {
              var n = e.parser;
              e.funcName;
              var l = t[0], u = re(be(t[1], "infix").size), m = t[2], b = u.number > 0;
              return {
                type: "genfrac",
                mode: n.mode,
                numer: l,
                denom: m,
                continued: !1,
                hasBarLine: b,
                barSize: u,
                leftDelim: null,
                rightDelim: null,
                size: "auto"
              };
            },
            htmlBuilder: da,
            mathmlBuilder: pa
          });
          var el = function(e, t) {
            var n = t.style, l, u;
            e.type === "supsub" ? (l = e.sup ? Te(e.sup, t.havingStyle(n.sup()), t) : Te(e.sub, t.havingStyle(n.sub()), t), u = be(e.base, "horizBrace")) : u = be(e, "horizBrace");
            var m = Te(u.base, t.havingBaseStyle(I.DISPLAY)), b = h0.svgSpan(u, t), k;
            if (u.isOver ? (k = R.makeVList({
              positionType: "firstBaseline",
              children: [{
                type: "elem",
                elem: m
              }, {
                type: "kern",
                size: 0.1
              }, {
                type: "elem",
                elem: b
              }]
            }, t), k.children[0].children[0].children[1].classes.push("svg-align")) : (k = R.makeVList({
              positionType: "bottom",
              positionData: m.depth + 0.1 + b.height,
              children: [{
                type: "elem",
                elem: b
              }, {
                type: "kern",
                size: 0.1
              }, {
                type: "elem",
                elem: m
              }]
            }, t), k.children[0].children[0].children[0].classes.push("svg-align")), l) {
              var x = R.makeSpan(["mord", u.isOver ? "mover" : "munder"], [k], t);
              u.isOver ? k = R.makeVList({
                positionType: "firstBaseline",
                children: [{
                  type: "elem",
                  elem: x
                }, {
                  type: "kern",
                  size: 0.2
                }, {
                  type: "elem",
                  elem: l
                }]
              }, t) : k = R.makeVList({
                positionType: "bottom",
                positionData: x.depth + 0.2 + l.height + l.depth,
                children: [{
                  type: "elem",
                  elem: l
                }, {
                  type: "kern",
                  size: 0.2
                }, {
                  type: "elem",
                  elem: x
                }]
              }, t);
            }
            return R.makeSpan(["mord", u.isOver ? "mover" : "munder"], [k], t);
          }, O1 = function(e, t) {
            var n = h0.mathMLnode(e.label);
            return new K.MathNode(e.isOver ? "mover" : "munder", [Ue(e.base, t), n]);
          };
          le({
            type: "horizBrace",
            names: ["\\overbrace", "\\underbrace"],
            props: {
              numArgs: 1
            },
            handler: function(e, t) {
              var n = e.parser, l = e.funcName;
              return {
                type: "horizBrace",
                mode: n.mode,
                label: l,
                isOver: /^\\over/.test(l),
                base: t[0]
              };
            },
            htmlBuilder: el,
            mathmlBuilder: O1
          }), le({
            type: "href",
            names: ["\\href"],
            props: {
              numArgs: 2,
              argTypes: ["url", "original"],
              allowedInText: !0
            },
            handler: function(e, t) {
              var n = e.parser, l = t[1], u = be(t[0], "url").url;
              return n.settings.isTrusted({
                command: "\\href",
                url: u
              }) ? {
                type: "href",
                mode: n.mode,
                href: u,
                body: et(l)
              } : n.formatUnsupportedCmd("\\href");
            },
            htmlBuilder: function(e, t) {
              var n = nt(e.body, t, !1);
              return R.makeAnchor(e.href, [], n, t);
            },
            mathmlBuilder: function(e, t) {
              var n = A0(e.body, t);
              return n instanceof Rt || (n = new Rt("mrow", [n])), n.setAttribute("href", e.href), n;
            }
          }), le({
            type: "href",
            names: ["\\url"],
            props: {
              numArgs: 1,
              argTypes: ["url"],
              allowedInText: !0
            },
            handler: function(e, t) {
              var n = e.parser, l = be(t[0], "url").url;
              if (!n.settings.isTrusted({
                command: "\\url",
                url: l
              }))
                return n.formatUnsupportedCmd("\\url");
              for (var u = [], m = 0; m < l.length; m++) {
                var b = l[m];
                b === "~" && (b = "\\textasciitilde"), u.push({
                  type: "textord",
                  mode: "text",
                  text: b
                });
              }
              var k = {
                type: "text",
                mode: n.mode,
                font: "\\texttt",
                body: u
              };
              return {
                type: "href",
                mode: n.mode,
                href: l,
                body: et(k)
              };
            }
          }), le({
            type: "hbox",
            names: ["\\hbox"],
            props: {
              numArgs: 1,
              argTypes: ["text"],
              allowedInText: !0,
              primitive: !0
            },
            handler: function(e, t) {
              var n = e.parser;
              return {
                type: "hbox",
                mode: n.mode,
                body: et(t[0])
              };
            },
            htmlBuilder: function(e, t) {
              var n = nt(e.body, t, !1);
              return R.makeFragment(n);
            },
            mathmlBuilder: function(e, t) {
              return new K.MathNode("mrow", kt(e.body, t));
            }
          }), le({
            type: "html",
            names: ["\\htmlClass", "\\htmlId", "\\htmlStyle", "\\htmlData"],
            props: {
              numArgs: 2,
              argTypes: ["raw", "original"],
              allowedInText: !0
            },
            handler: function(e, t) {
              var n = e.parser, l = e.funcName;
              e.token;
              var u = be(t[0], "raw").string, m = t[1];
              n.settings.strict && n.settings.reportNonstrict("htmlExtension", "HTML extension is disabled on strict mode");
              var b, k = {};
              switch (l) {
                case "\\htmlClass":
                  k.class = u, b = {
                    command: "\\htmlClass",
                    class: u
                  };
                  break;
                case "\\htmlId":
                  k.id = u, b = {
                    command: "\\htmlId",
                    id: u
                  };
                  break;
                case "\\htmlStyle":
                  k.style = u, b = {
                    command: "\\htmlStyle",
                    style: u
                  };
                  break;
                case "\\htmlData": {
                  for (var x = u.split(","), z = 0; z < x.length; z++) {
                    var N = x[z].split("=");
                    if (N.length !== 2)
                      throw new c("Error parsing key-value for \\htmlData");
                    k["data-" + N[0].trim()] = N[1].trim();
                  }
                  b = {
                    command: "\\htmlData",
                    attributes: k
                  };
                  break;
                }
                default:
                  throw new Error("Unrecognized html command");
              }
              return n.settings.isTrusted(b) ? {
                type: "html",
                mode: n.mode,
                attributes: k,
                body: et(m)
              } : n.formatUnsupportedCmd(l);
            },
            htmlBuilder: function(e, t) {
              var n = nt(e.body, t, !1), l = ["enclosing"];
              e.attributes.class && l.push.apply(l, e.attributes.class.trim().split(/\s+/));
              var u = R.makeSpan(l, n, t);
              for (var m in e.attributes)
                m !== "class" && e.attributes.hasOwnProperty(m) && u.setAttribute(m, e.attributes[m]);
              return u;
            },
            mathmlBuilder: function(e, t) {
              return A0(e.body, t);
            }
          }), le({
            type: "htmlmathml",
            names: ["\\html@mathml"],
            props: {
              numArgs: 2,
              allowedInText: !0
            },
            handler: function(e, t) {
              var n = e.parser;
              return {
                type: "htmlmathml",
                mode: n.mode,
                html: et(t[0]),
                mathml: et(t[1])
              };
            },
            htmlBuilder: function(e, t) {
              var n = nt(e.html, t, !1);
              return R.makeFragment(n);
            },
            mathmlBuilder: function(e, t) {
              return A0(e.mathml, t);
            }
          });
          var ga = function(e) {
            if (/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(e))
              return {
                number: +e,
                unit: "bp"
              };
            var t = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(e);
            if (!t)
              throw new c("Invalid size: '" + e + "' in \\includegraphics");
            var n = {
              number: +(t[1] + t[2]),
              // sign + magnitude, cast to number
              unit: t[3]
            };
            if (!lr(n))
              throw new c("Invalid unit: '" + n.unit + "' in \\includegraphics.");
            return n;
          };
          le({
            type: "includegraphics",
            names: ["\\includegraphics"],
            props: {
              numArgs: 1,
              numOptionalArgs: 1,
              argTypes: ["raw", "url"],
              allowedInText: !1
            },
            handler: function(e, t, n) {
              var l = e.parser, u = {
                number: 0,
                unit: "em"
              }, m = {
                number: 0.9,
                unit: "em"
              }, b = {
                number: 0,
                unit: "em"
              }, k = "";
              if (n[0])
                for (var x = be(n[0], "raw").string, z = x.split(","), N = 0; N < z.length; N++) {
                  var H = z[N].split("=");
                  if (H.length === 2) {
                    var P = H[1].trim();
                    switch (H[0].trim()) {
                      case "alt":
                        k = P;
                        break;
                      case "width":
                        u = ga(P);
                        break;
                      case "height":
                        m = ga(P);
                        break;
                      case "totalheight":
                        b = ga(P);
                        break;
                      default:
                        throw new c("Invalid key: '" + H[0] + "' in \\includegraphics.");
                    }
                  }
                }
              var V = be(t[0], "url").url;
              return k === "" && (k = V, k = k.replace(/^.*[\\/]/, ""), k = k.substring(0, k.lastIndexOf("."))), l.settings.isTrusted({
                command: "\\includegraphics",
                url: V
              }) ? {
                type: "includegraphics",
                mode: l.mode,
                alt: k,
                width: u,
                height: m,
                totalheight: b,
                src: V
              } : l.formatUnsupportedCmd("\\includegraphics");
            },
            htmlBuilder: function(e, t) {
              var n = Pe(e.height, t), l = 0;
              e.totalheight.number > 0 && (l = Pe(e.totalheight, t) - n);
              var u = 0;
              e.width.number > 0 && (u = Pe(e.width, t));
              var m = {
                height: te(n + l)
              };
              u > 0 && (m.width = te(u)), l > 0 && (m.verticalAlign = te(-l));
              var b = new Kr(e.src, e.alt, m);
              return b.height = n, b.depth = l, b;
            },
            mathmlBuilder: function(e, t) {
              var n = new K.MathNode("mglyph", []);
              n.setAttribute("alt", e.alt);
              var l = Pe(e.height, t), u = 0;
              if (e.totalheight.number > 0 && (u = Pe(e.totalheight, t) - l, n.setAttribute("valign", te(-u))), n.setAttribute("height", te(l + u)), e.width.number > 0) {
                var m = Pe(e.width, t);
                n.setAttribute("width", te(m));
              }
              return n.setAttribute("src", e.src), n;
            }
          }), le({
            type: "kern",
            names: ["\\kern", "\\mkern", "\\hskip", "\\mskip"],
            props: {
              numArgs: 1,
              argTypes: ["size"],
              primitive: !0,
              allowedInText: !0
            },
            handler: function(e, t) {
              var n = e.parser, l = e.funcName, u = be(t[0], "size");
              if (n.settings.strict) {
                var m = l[1] === "m", b = u.value.unit === "mu";
                m ? (b || n.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + l + " supports only mu units, " + ("not " + u.value.unit + " units")), n.mode !== "math" && n.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + l + " works only in math mode")) : b && n.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + l + " doesn't support mu units");
              }
              return {
                type: "kern",
                mode: n.mode,
                dimension: u.value
              };
            },
            htmlBuilder: function(e, t) {
              return R.makeGlue(e.dimension, t);
            },
            mathmlBuilder: function(e, t) {
              var n = Pe(e.dimension, t);
              return new K.SpaceNode(n);
            }
          }), le({
            type: "lap",
            names: ["\\mathllap", "\\mathrlap", "\\mathclap"],
            props: {
              numArgs: 1,
              allowedInText: !0
            },
            handler: function(e, t) {
              var n = e.parser, l = e.funcName, u = t[0];
              return {
                type: "lap",
                mode: n.mode,
                alignment: l.slice(5),
                body: u
              };
            },
            htmlBuilder: function(e, t) {
              var n;
              e.alignment === "clap" ? (n = R.makeSpan([], [Te(e.body, t)]), n = R.makeSpan(["inner"], [n], t)) : n = R.makeSpan(["inner"], [Te(e.body, t)]);
              var l = R.makeSpan(["fix"], []), u = R.makeSpan([e.alignment], [n, l], t), m = R.makeSpan(["strut"]);
              return m.style.height = te(u.height + u.depth), u.depth && (m.style.verticalAlign = te(-u.depth)), u.children.unshift(m), u = R.makeSpan(["thinbox"], [u], t), R.makeSpan(["mord", "vbox"], [u], t);
            },
            mathmlBuilder: function(e, t) {
              var n = new K.MathNode("mpadded", [Ue(e.body, t)]);
              if (e.alignment !== "rlap") {
                var l = e.alignment === "llap" ? "-1" : "-0.5";
                n.setAttribute("lspace", l + "width");
              }
              return n.setAttribute("width", "0px"), n;
            }
          }), le({
            type: "styling",
            names: ["\\(", "$"],
            props: {
              numArgs: 0,
              allowedInText: !0,
              allowedInMath: !1
            },
            handler: function(e, t) {
              var n = e.funcName, l = e.parser, u = l.mode;
              l.switchMode("math");
              var m = n === "\\(" ? "\\)" : "$", b = l.parseExpression(!1, m);
              return l.expect(m), l.switchMode(u), {
                type: "styling",
                mode: l.mode,
                style: "text",
                body: b
              };
            }
          }), le({
            type: "text",
            // Doesn't matter what this is.
            names: ["\\)", "\\]"],
            props: {
              numArgs: 0,
              allowedInText: !0,
              allowedInMath: !1
            },
            handler: function(e, t) {
              throw new c("Mismatched " + e.funcName);
            }
          });
          var tl = function(e, t) {
            switch (t.style.size) {
              case I.DISPLAY.size:
                return e.display;
              case I.TEXT.size:
                return e.text;
              case I.SCRIPT.size:
                return e.script;
              case I.SCRIPTSCRIPT.size:
                return e.scriptscript;
              default:
                return e.text;
            }
          };
          le({
            type: "mathchoice",
            names: ["\\mathchoice"],
            props: {
              numArgs: 4,
              primitive: !0
            },
            handler: function(e, t) {
              var n = e.parser;
              return {
                type: "mathchoice",
                mode: n.mode,
                display: et(t[0]),
                text: et(t[1]),
                script: et(t[2]),
                scriptscript: et(t[3])
              };
            },
            htmlBuilder: function(e, t) {
              var n = tl(e, t), l = nt(n, t, !1);
              return R.makeFragment(l);
            },
            mathmlBuilder: function(e, t) {
              var n = tl(e, t);
              return A0(n, t);
            }
          });
          var rl = function(e, t, n, l, u, m, b) {
            e = R.makeSpan([], [e]);
            var k = n && U.isCharacterBox(n), x, z;
            if (t) {
              var N = Te(t, l.havingStyle(u.sup()), l);
              z = {
                elem: N,
                kern: Math.max(l.fontMetrics().bigOpSpacing1, l.fontMetrics().bigOpSpacing3 - N.depth)
              };
            }
            if (n) {
              var H = Te(n, l.havingStyle(u.sub()), l);
              x = {
                elem: H,
                kern: Math.max(l.fontMetrics().bigOpSpacing2, l.fontMetrics().bigOpSpacing4 - H.height)
              };
            }
            var P;
            if (z && x) {
              var V = l.fontMetrics().bigOpSpacing5 + x.elem.height + x.elem.depth + x.kern + e.depth + b;
              P = R.makeVList({
                positionType: "bottom",
                positionData: V,
                children: [{
                  type: "kern",
                  size: l.fontMetrics().bigOpSpacing5
                }, {
                  type: "elem",
                  elem: x.elem,
                  marginLeft: te(-m)
                }, {
                  type: "kern",
                  size: x.kern
                }, {
                  type: "elem",
                  elem: e
                }, {
                  type: "kern",
                  size: z.kern
                }, {
                  type: "elem",
                  elem: z.elem,
                  marginLeft: te(m)
                }, {
                  type: "kern",
                  size: l.fontMetrics().bigOpSpacing5
                }]
              }, l);
            } else if (x) {
              var ee = e.height - b;
              P = R.makeVList({
                positionType: "top",
                positionData: ee,
                children: [{
                  type: "kern",
                  size: l.fontMetrics().bigOpSpacing5
                }, {
                  type: "elem",
                  elem: x.elem,
                  marginLeft: te(-m)
                }, {
                  type: "kern",
                  size: x.kern
                }, {
                  type: "elem",
                  elem: e
                }]
              }, l);
            } else if (z) {
              var ae = e.depth + b;
              P = R.makeVList({
                positionType: "bottom",
                positionData: ae,
                children: [{
                  type: "elem",
                  elem: e
                }, {
                  type: "kern",
                  size: z.kern
                }, {
                  type: "elem",
                  elem: z.elem,
                  marginLeft: te(m)
                }, {
                  type: "kern",
                  size: l.fontMetrics().bigOpSpacing5
                }]
              }, l);
            } else
              return e;
            var ce = [P];
            if (x && m !== 0 && !k) {
              var fe = R.makeSpan(["mspace"], [], l);
              fe.style.marginRight = te(m), ce.unshift(fe);
            }
            return R.makeSpan(["mop", "op-limits"], ce, l);
          }, nl = ["\\smallint"], or = function(e, t) {
            var n, l, u = !1, m;
            e.type === "supsub" ? (n = e.sup, l = e.sub, m = be(e.base, "op"), u = !0) : m = be(e, "op");
            var b = t.style, k = !1;
            b.size === I.DISPLAY.size && m.symbol && !U.contains(nl, m.name) && (k = !0);
            var x;
            if (m.symbol) {
              var z = k ? "Size2-Regular" : "Size1-Regular", N = "";
              if ((m.name === "\\oiint" || m.name === "\\oiiint") && (N = m.name.slice(1), m.name = N === "oiint" ? "\\iint" : "\\iiint"), x = R.makeSymbol(m.name, z, "math", t, ["mop", "op-symbol", k ? "large-op" : "small-op"]), N.length > 0) {
                var H = x.italic, P = R.staticSvg(N + "Size" + (k ? "2" : "1"), t);
                x = R.makeVList({
                  positionType: "individualShift",
                  children: [{
                    type: "elem",
                    elem: x,
                    shift: 0
                  }, {
                    type: "elem",
                    elem: P,
                    shift: k ? 0.08 : 0
                  }]
                }, t), m.name = "\\" + N, x.classes.unshift("mop"), x.italic = H;
              }
            } else if (m.body) {
              var V = nt(m.body, t, !0);
              V.length === 1 && V[0] instanceof ft ? (x = V[0], x.classes[0] = "mop") : x = R.makeSpan(["mop"], V, t);
            } else {
              for (var ee = [], ae = 1; ae < m.name.length; ae++)
                ee.push(R.mathsym(m.name[ae], m.mode, t));
              x = R.makeSpan(["mop"], ee, t);
            }
            var ce = 0, fe = 0;
            return (x instanceof ft || m.name === "\\oiint" || m.name === "\\oiiint") && !m.suppressBaseShift && (ce = (x.height - x.depth) / 2 - t.fontMetrics().axisHeight, fe = x.italic), u ? rl(x, n, l, t, b, fe, ce) : (ce && (x.style.position = "relative", x.style.top = te(ce)), x);
          }, Lr = function(e, t) {
            var n;
            if (e.symbol)
              n = new Rt("mo", [Ft(e.name, e.mode)]), U.contains(nl, e.name) && n.setAttribute("largeop", "false");
            else if (e.body)
              n = new Rt("mo", kt(e.body, t));
            else {
              n = new Rt("mi", [new Nr(e.name.slice(1))]);
              var l = new Rt("mo", [Ft("⁡", "text")]);
              e.parentIsSupSub ? n = new Rt("mrow", [n, l]) : n = wi([n, l]);
            }
            return n;
          }, q1 = {
            "∏": "\\prod",
            "∐": "\\coprod",
            "∑": "\\sum",
            "⋀": "\\bigwedge",
            "⋁": "\\bigvee",
            "⋂": "\\bigcap",
            "⋃": "\\bigcup",
            "⨀": "\\bigodot",
            "⨁": "\\bigoplus",
            "⨂": "\\bigotimes",
            "⨄": "\\biguplus",
            "⨆": "\\bigsqcup"
          };
          le({
            type: "op",
            names: ["\\coprod", "\\bigvee", "\\bigwedge", "\\biguplus", "\\bigcap", "\\bigcup", "\\intop", "\\prod", "\\sum", "\\bigotimes", "\\bigoplus", "\\bigodot", "\\bigsqcup", "\\smallint", "∏", "∐", "∑", "⋀", "⋁", "⋂", "⋃", "⨀", "⨁", "⨂", "⨄", "⨆"],
            props: {
              numArgs: 0
            },
            handler: function(e, t) {
              var n = e.parser, l = e.funcName, u = l;
              return u.length === 1 && (u = q1[u]), {
                type: "op",
                mode: n.mode,
                limits: !0,
                parentIsSupSub: !1,
                symbol: !0,
                name: u
              };
            },
            htmlBuilder: or,
            mathmlBuilder: Lr
          }), le({
            type: "op",
            names: ["\\mathop"],
            props: {
              numArgs: 1,
              primitive: !0
            },
            handler: function(e, t) {
              var n = e.parser, l = t[0];
              return {
                type: "op",
                mode: n.mode,
                limits: !1,
                parentIsSupSub: !1,
                symbol: !1,
                body: et(l)
              };
            },
            htmlBuilder: or,
            mathmlBuilder: Lr
          });
          var P1 = {
            "∫": "\\int",
            "∬": "\\iint",
            "∭": "\\iiint",
            "∮": "\\oint",
            "∯": "\\oiint",
            "∰": "\\oiiint"
          };
          le({
            type: "op",
            names: ["\\arcsin", "\\arccos", "\\arctan", "\\arctg", "\\arcctg", "\\arg", "\\ch", "\\cos", "\\cosec", "\\cosh", "\\cot", "\\cotg", "\\coth", "\\csc", "\\ctg", "\\cth", "\\deg", "\\dim", "\\exp", "\\hom", "\\ker", "\\lg", "\\ln", "\\log", "\\sec", "\\sin", "\\sinh", "\\sh", "\\tan", "\\tanh", "\\tg", "\\th"],
            props: {
              numArgs: 0
            },
            handler: function(e) {
              var t = e.parser, n = e.funcName;
              return {
                type: "op",
                mode: t.mode,
                limits: !1,
                parentIsSupSub: !1,
                symbol: !1,
                name: n
              };
            },
            htmlBuilder: or,
            mathmlBuilder: Lr
          }), le({
            type: "op",
            names: ["\\det", "\\gcd", "\\inf", "\\lim", "\\max", "\\min", "\\Pr", "\\sup"],
            props: {
              numArgs: 0
            },
            handler: function(e) {
              var t = e.parser, n = e.funcName;
              return {
                type: "op",
                mode: t.mode,
                limits: !0,
                parentIsSupSub: !1,
                symbol: !1,
                name: n
              };
            },
            htmlBuilder: or,
            mathmlBuilder: Lr
          }), le({
            type: "op",
            names: ["\\int", "\\iint", "\\iiint", "\\oint", "\\oiint", "\\oiiint", "∫", "∬", "∭", "∮", "∯", "∰"],
            props: {
              numArgs: 0
            },
            handler: function(e) {
              var t = e.parser, n = e.funcName, l = n;
              return l.length === 1 && (l = P1[l]), {
                type: "op",
                mode: t.mode,
                limits: !1,
                parentIsSupSub: !1,
                symbol: !0,
                name: l
              };
            },
            htmlBuilder: or,
            mathmlBuilder: Lr
          });
          var al = function(e, t) {
            var n, l, u = !1, m;
            e.type === "supsub" ? (n = e.sup, l = e.sub, m = be(e.base, "operatorname"), u = !0) : m = be(e, "operatorname");
            var b;
            if (m.body.length > 0) {
              for (var k = m.body.map(function(H) {
                var P = H.text;
                return typeof P == "string" ? {
                  type: "textord",
                  mode: H.mode,
                  text: P
                } : H;
              }), x = nt(k, t.withFont("mathrm"), !0), z = 0; z < x.length; z++) {
                var N = x[z];
                N instanceof ft && (N.text = N.text.replace(/\u2212/, "-").replace(/\u2217/, "*"));
              }
              b = R.makeSpan(["mop"], x, t);
            } else
              b = R.makeSpan(["mop"], [], t);
            return u ? rl(b, n, l, t, t.style, 0, 0) : b;
          }, H1 = function(e, t) {
            for (var n = kt(e.body, t.withFont("mathrm")), l = !0, u = 0; u < n.length; u++) {
              var m = n[u];
              if (!(m instanceof K.SpaceNode))
                if (m instanceof K.MathNode)
                  switch (m.type) {
                    case "mi":
                    case "mn":
                    case "ms":
                    case "mspace":
                    case "mtext":
                      break;
                    case "mo": {
                      var b = m.children[0];
                      m.children.length === 1 && b instanceof K.TextNode ? b.text = b.text.replace(/\u2212/, "-").replace(/\u2217/, "*") : l = !1;
                      break;
                    }
                    default:
                      l = !1;
                  }
                else
                  l = !1;
            }
            if (l) {
              var k = n.map(function(N) {
                return N.toText();
              }).join("");
              n = [new K.TextNode(k)];
            }
            var x = new K.MathNode("mi", n);
            x.setAttribute("mathvariant", "normal");
            var z = new K.MathNode("mo", [Ft("⁡", "text")]);
            return e.parentIsSupSub ? new K.MathNode("mrow", [x, z]) : K.newDocumentFragment([x, z]);
          };
          le({
            type: "operatorname",
            names: ["\\operatorname@", "\\operatornamewithlimits"],
            props: {
              numArgs: 1
            },
            handler: function(e, t) {
              var n = e.parser, l = e.funcName, u = t[0];
              return {
                type: "operatorname",
                mode: n.mode,
                body: et(u),
                alwaysHandleSupSub: l === "\\operatornamewithlimits",
                limits: !1,
                parentIsSupSub: !1
              };
            },
            htmlBuilder: al,
            mathmlBuilder: H1
          }), _("\\operatorname", "\\@ifstar\\operatornamewithlimits\\operatorname@"), K0({
            type: "ordgroup",
            htmlBuilder: function(e, t) {
              return e.semisimple ? R.makeFragment(nt(e.body, t, !1)) : R.makeSpan(["mord"], nt(e.body, t, !0), t);
            },
            mathmlBuilder: function(e, t) {
              return A0(e.body, t, !0);
            }
          }), le({
            type: "overline",
            names: ["\\overline"],
            props: {
              numArgs: 1
            },
            handler: function(e, t) {
              var n = e.parser, l = t[0];
              return {
                type: "overline",
                mode: n.mode,
                body: l
              };
            },
            htmlBuilder: function(e, t) {
              var n = Te(e.body, t.havingCrampedStyle()), l = R.makeLineSpan("overline-line", t), u = t.fontMetrics().defaultRuleThickness, m = R.makeVList({
                positionType: "firstBaseline",
                children: [{
                  type: "elem",
                  elem: n
                }, {
                  type: "kern",
                  size: 3 * u
                }, {
                  type: "elem",
                  elem: l
                }, {
                  type: "kern",
                  size: u
                }]
              }, t);
              return R.makeSpan(["mord", "overline"], [m], t);
            },
            mathmlBuilder: function(e, t) {
              var n = new K.MathNode("mo", [new K.TextNode("‾")]);
              n.setAttribute("stretchy", "true");
              var l = new K.MathNode("mover", [Ue(e.body, t), n]);
              return l.setAttribute("accent", "true"), l;
            }
          }), le({
            type: "phantom",
            names: ["\\phantom"],
            props: {
              numArgs: 1,
              allowedInText: !0
            },
            handler: function(e, t) {
              var n = e.parser, l = t[0];
              return {
                type: "phantom",
                mode: n.mode,
                body: et(l)
              };
            },
            htmlBuilder: function(e, t) {
              var n = nt(e.body, t.withPhantom(), !1);
              return R.makeFragment(n);
            },
            mathmlBuilder: function(e, t) {
              var n = kt(e.body, t);
              return new K.MathNode("mphantom", n);
            }
          }), le({
            type: "hphantom",
            names: ["\\hphantom"],
            props: {
              numArgs: 1,
              allowedInText: !0
            },
            handler: function(e, t) {
              var n = e.parser, l = t[0];
              return {
                type: "hphantom",
                mode: n.mode,
                body: l
              };
            },
            htmlBuilder: function(e, t) {
              var n = R.makeSpan([], [Te(e.body, t.withPhantom())]);
              if (n.height = 0, n.depth = 0, n.children)
                for (var l = 0; l < n.children.length; l++)
                  n.children[l].height = 0, n.children[l].depth = 0;
              return n = R.makeVList({
                positionType: "firstBaseline",
                children: [{
                  type: "elem",
                  elem: n
                }]
              }, t), R.makeSpan(["mord"], [n], t);
            },
            mathmlBuilder: function(e, t) {
              var n = kt(et(e.body), t), l = new K.MathNode("mphantom", n), u = new K.MathNode("mpadded", [l]);
              return u.setAttribute("height", "0px"), u.setAttribute("depth", "0px"), u;
            }
          }), le({
            type: "vphantom",
            names: ["\\vphantom"],
            props: {
              numArgs: 1,
              allowedInText: !0
            },
            handler: function(e, t) {
              var n = e.parser, l = t[0];
              return {
                type: "vphantom",
                mode: n.mode,
                body: l
              };
            },
            htmlBuilder: function(e, t) {
              var n = R.makeSpan(["inner"], [Te(e.body, t.withPhantom())]), l = R.makeSpan(["fix"], []);
              return R.makeSpan(["mord", "rlap"], [n, l], t);
            },
            mathmlBuilder: function(e, t) {
              var n = kt(et(e.body), t), l = new K.MathNode("mphantom", n), u = new K.MathNode("mpadded", [l]);
              return u.setAttribute("width", "0px"), u;
            }
          }), le({
            type: "raisebox",
            names: ["\\raisebox"],
            props: {
              numArgs: 2,
              argTypes: ["size", "hbox"],
              allowedInText: !0
            },
            handler: function(e, t) {
              var n = e.parser, l = be(t[0], "size").value, u = t[1];
              return {
                type: "raisebox",
                mode: n.mode,
                dy: l,
                body: u
              };
            },
            htmlBuilder: function(e, t) {
              var n = Te(e.body, t), l = Pe(e.dy, t);
              return R.makeVList({
                positionType: "shift",
                positionData: -l,
                children: [{
                  type: "elem",
                  elem: n
                }]
              }, t);
            },
            mathmlBuilder: function(e, t) {
              var n = new K.MathNode("mpadded", [Ue(e.body, t)]), l = e.dy.number + e.dy.unit;
              return n.setAttribute("voffset", l), n;
            }
          }), le({
            type: "internal",
            names: ["\\relax"],
            props: {
              numArgs: 0,
              allowedInText: !0
            },
            handler: function(e) {
              var t = e.parser;
              return {
                type: "internal",
                mode: t.mode
              };
            }
          }), le({
            type: "rule",
            names: ["\\rule"],
            props: {
              numArgs: 2,
              numOptionalArgs: 1,
              argTypes: ["size", "size", "size"]
            },
            handler: function(e, t, n) {
              var l = e.parser, u = n[0], m = be(t[0], "size"), b = be(t[1], "size");
              return {
                type: "rule",
                mode: l.mode,
                shift: u && be(u, "size").value,
                width: m.value,
                height: b.value
              };
            },
            htmlBuilder: function(e, t) {
              var n = R.makeSpan(["mord", "rule"], [], t), l = Pe(e.width, t), u = Pe(e.height, t), m = e.shift ? Pe(e.shift, t) : 0;
              return n.style.borderRightWidth = te(l), n.style.borderTopWidth = te(u), n.style.bottom = te(m), n.width = l, n.height = u + m, n.depth = -m, n.maxFontSize = u * 1.125 * t.sizeMultiplier, n;
            },
            mathmlBuilder: function(e, t) {
              var n = Pe(e.width, t), l = Pe(e.height, t), u = e.shift ? Pe(e.shift, t) : 0, m = t.color && t.getColor() || "black", b = new K.MathNode("mspace");
              b.setAttribute("mathbackground", m), b.setAttribute("width", te(n)), b.setAttribute("height", te(l));
              var k = new K.MathNode("mpadded", [b]);
              return u >= 0 ? k.setAttribute("height", te(u)) : (k.setAttribute("height", te(u)), k.setAttribute("depth", te(-u))), k.setAttribute("voffset", te(u)), k;
            }
          });
          function il(f, e, t) {
            for (var n = nt(f, e, !1), l = e.sizeMultiplier / t.sizeMultiplier, u = 0; u < n.length; u++) {
              var m = n[u].classes.indexOf("sizing");
              m < 0 ? Array.prototype.push.apply(n[u].classes, e.sizingClasses(t)) : n[u].classes[m + 1] === "reset-size" + e.size && (n[u].classes[m + 1] = "reset-size" + t.size), n[u].height *= l, n[u].depth *= l;
            }
            return R.makeFragment(n);
          }
          var ll = ["\\tiny", "\\sixptsize", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"], U1 = function(e, t) {
            var n = t.havingSize(e.size);
            return il(e.body, n, t);
          };
          le({
            type: "sizing",
            names: ll,
            props: {
              numArgs: 0,
              allowedInText: !0
            },
            handler: function(e, t) {
              var n = e.breakOnTokenText, l = e.funcName, u = e.parser, m = u.parseExpression(!1, n);
              return {
                type: "sizing",
                mode: u.mode,
                // Figure out what size to use based on the list of functions above
                size: ll.indexOf(l) + 1,
                body: m
              };
            },
            htmlBuilder: U1,
            mathmlBuilder: function(e, t) {
              var n = t.havingSize(e.size), l = kt(e.body, n), u = new K.MathNode("mstyle", l);
              return u.setAttribute("mathsize", te(n.sizeMultiplier)), u;
            }
          }), le({
            type: "smash",
            names: ["\\smash"],
            props: {
              numArgs: 1,
              numOptionalArgs: 1,
              allowedInText: !0
            },
            handler: function(e, t, n) {
              var l = e.parser, u = !1, m = !1, b = n[0] && be(n[0], "ordgroup");
              if (b)
                for (var k = "", x = 0; x < b.body.length; ++x) {
                  var z = b.body[x];
                  if (k = z.text, k === "t")
                    u = !0;
                  else if (k === "b")
                    m = !0;
                  else {
                    u = !1, m = !1;
                    break;
                  }
                }
              else
                u = !0, m = !0;
              var N = t[0];
              return {
                type: "smash",
                mode: l.mode,
                body: N,
                smashHeight: u,
                smashDepth: m
              };
            },
            htmlBuilder: function(e, t) {
              var n = R.makeSpan([], [Te(e.body, t)]);
              if (!e.smashHeight && !e.smashDepth)
                return n;
              if (e.smashHeight && (n.height = 0, n.children))
                for (var l = 0; l < n.children.length; l++)
                  n.children[l].height = 0;
              if (e.smashDepth && (n.depth = 0, n.children))
                for (var u = 0; u < n.children.length; u++)
                  n.children[u].depth = 0;
              var m = R.makeVList({
                positionType: "firstBaseline",
                children: [{
                  type: "elem",
                  elem: n
                }]
              }, t);
              return R.makeSpan(["mord"], [m], t);
            },
            mathmlBuilder: function(e, t) {
              var n = new K.MathNode("mpadded", [Ue(e.body, t)]);
              return e.smashHeight && n.setAttribute("height", "0px"), e.smashDepth && n.setAttribute("depth", "0px"), n;
            }
          }), le({
            type: "sqrt",
            names: ["\\sqrt"],
            props: {
              numArgs: 1,
              numOptionalArgs: 1
            },
            handler: function(e, t, n) {
              var l = e.parser, u = n[0], m = t[0];
              return {
                type: "sqrt",
                mode: l.mode,
                body: m,
                index: u
              };
            },
            htmlBuilder: function(e, t) {
              var n = Te(e.body, t.havingCrampedStyle());
              n.height === 0 && (n.height = t.fontMetrics().xHeight), n = R.wrapFragment(n, t);
              var l = t.fontMetrics(), u = l.defaultRuleThickness, m = u;
              t.style.id < I.TEXT.id && (m = t.fontMetrics().xHeight);
              var b = u + m / 4, k = n.height + n.depth + b + u, x = f0.sqrtImage(k, t), z = x.span, N = x.ruleWidth, H = x.advanceWidth, P = z.height - N;
              P > n.height + n.depth + b && (b = (b + P - n.height - n.depth) / 2);
              var V = z.height - n.height - b - N;
              n.style.paddingLeft = te(H);
              var ee = R.makeVList({
                positionType: "firstBaseline",
                children: [{
                  type: "elem",
                  elem: n,
                  wrapperClasses: ["svg-align"]
                }, {
                  type: "kern",
                  size: -(n.height + V)
                }, {
                  type: "elem",
                  elem: z
                }, {
                  type: "kern",
                  size: N
                }]
              }, t);
              if (e.index) {
                var ae = t.havingStyle(I.SCRIPTSCRIPT), ce = Te(e.index, ae, t), fe = 0.6 * (ee.height - ee.depth), de = R.makeVList({
                  positionType: "shift",
                  positionData: -fe,
                  children: [{
                    type: "elem",
                    elem: ce
                  }]
                }, t), Ce = R.makeSpan(["root"], [de]);
                return R.makeSpan(["mord", "sqrt"], [Ce, ee], t);
              } else
                return R.makeSpan(["mord", "sqrt"], [ee], t);
            },
            mathmlBuilder: function(e, t) {
              var n = e.body, l = e.index;
              return l ? new K.MathNode("mroot", [Ue(n, t), Ue(l, t)]) : new K.MathNode("msqrt", [Ue(n, t)]);
            }
          });
          var sl = {
            display: I.DISPLAY,
            text: I.TEXT,
            script: I.SCRIPT,
            scriptscript: I.SCRIPTSCRIPT
          };
          le({
            type: "styling",
            names: ["\\displaystyle", "\\textstyle", "\\scriptstyle", "\\scriptscriptstyle"],
            props: {
              numArgs: 0,
              allowedInText: !0,
              primitive: !0
            },
            handler: function(e, t) {
              var n = e.breakOnTokenText, l = e.funcName, u = e.parser, m = u.parseExpression(!0, n), b = l.slice(1, l.length - 5);
              return {
                type: "styling",
                mode: u.mode,
                // Figure out what style to use by pulling out the style from
                // the function name
                style: b,
                body: m
              };
            },
            htmlBuilder: function(e, t) {
              var n = sl[e.style], l = t.havingStyle(n).withFont("");
              return il(e.body, l, t);
            },
            mathmlBuilder: function(e, t) {
              var n = sl[e.style], l = t.havingStyle(n), u = kt(e.body, l), m = new K.MathNode("mstyle", u), b = {
                display: ["0", "true"],
                text: ["0", "false"],
                script: ["1", "false"],
                scriptscript: ["2", "false"]
              }, k = b[e.style];
              return m.setAttribute("scriptlevel", k[0]), m.setAttribute("displaystyle", k[1]), m;
            }
          });
          var G1 = function(e, t) {
            var n = e.base;
            if (n)
              if (n.type === "op") {
                var l = n.limits && (t.style.size === I.DISPLAY.size || n.alwaysHandleSupSub);
                return l ? or : null;
              } else if (n.type === "operatorname") {
                var u = n.alwaysHandleSupSub && (t.style.size === I.DISPLAY.size || n.limits);
                return u ? al : null;
              } else {
                if (n.type === "accent")
                  return U.isCharacterBox(n.base) ? ta : null;
                if (n.type === "horizBrace") {
                  var m = !e.sub;
                  return m === n.isOver ? el : null;
                } else
                  return null;
              }
            else
              return null;
          };
          K0({
            type: "supsub",
            htmlBuilder: function(e, t) {
              var n = G1(e, t);
              if (n)
                return n(e, t);
              var l = e.base, u = e.sup, m = e.sub, b = Te(l, t), k, x, z = t.fontMetrics(), N = 0, H = 0, P = l && U.isCharacterBox(l);
              if (u) {
                var V = t.havingStyle(t.style.sup());
                k = Te(u, V, t), P || (N = b.height - V.fontMetrics().supDrop * V.sizeMultiplier / t.sizeMultiplier);
              }
              if (m) {
                var ee = t.havingStyle(t.style.sub());
                x = Te(m, ee, t), P || (H = b.depth + ee.fontMetrics().subDrop * ee.sizeMultiplier / t.sizeMultiplier);
              }
              var ae;
              t.style === I.DISPLAY ? ae = z.sup1 : t.style.cramped ? ae = z.sup3 : ae = z.sup2;
              var ce = t.sizeMultiplier, fe = te(0.5 / z.ptPerEm / ce), de = null;
              if (x) {
                var Ce = e.base && e.base.type === "op" && e.base.name && (e.base.name === "\\oiint" || e.base.name === "\\oiiint");
                (b instanceof ft || Ce) && (de = te(-b.italic));
              }
              var ye;
              if (k && x) {
                N = Math.max(N, ae, k.depth + 0.25 * z.xHeight), H = Math.max(H, z.sub2);
                var Re = z.defaultRuleThickness, Me = 4 * Re;
                if (N - k.depth - (x.height - H) < Me) {
                  H = Me - (N - k.depth) + x.height;
                  var qe = 0.8 * z.xHeight - (N - k.depth);
                  qe > 0 && (N += qe, H -= qe);
                }
                var Ye = [{
                  type: "elem",
                  elem: x,
                  shift: H,
                  marginRight: fe,
                  marginLeft: de
                }, {
                  type: "elem",
                  elem: k,
                  shift: -N,
                  marginRight: fe
                }];
                ye = R.makeVList({
                  positionType: "individualShift",
                  children: Ye
                }, t);
              } else if (x) {
                H = Math.max(H, z.sub1, x.height - 0.8 * z.xHeight);
                var st = [{
                  type: "elem",
                  elem: x,
                  marginLeft: de,
                  marginRight: fe
                }];
                ye = R.makeVList({
                  positionType: "shift",
                  positionData: H,
                  children: st
                }, t);
              } else if (k)
                N = Math.max(N, ae, k.depth + 0.25 * z.xHeight), ye = R.makeVList({
                  positionType: "shift",
                  positionData: -N,
                  children: [{
                    type: "elem",
                    elem: k,
                    marginRight: fe
                  }]
                }, t);
              else
                throw new Error("supsub must have either sup or sub.");
              var At = Kn(b, "right") || "mord";
              return R.makeSpan([At], [b, R.makeSpan(["msupsub"], [ye])], t);
            },
            mathmlBuilder: function(e, t) {
              var n = !1, l, u;
              e.base && e.base.type === "horizBrace" && (u = !!e.sup, u === e.base.isOver && (n = !0, l = e.base.isOver)), e.base && (e.base.type === "op" || e.base.type === "operatorname") && (e.base.parentIsSupSub = !0);
              var m = [Ue(e.base, t)];
              e.sub && m.push(Ue(e.sub, t)), e.sup && m.push(Ue(e.sup, t));
              var b;
              if (n)
                b = l ? "mover" : "munder";
              else if (e.sub)
                if (e.sup) {
                  var z = e.base;
                  z && z.type === "op" && z.limits && t.style === I.DISPLAY || z && z.type === "operatorname" && z.alwaysHandleSupSub && (t.style === I.DISPLAY || z.limits) ? b = "munderover" : b = "msubsup";
                } else {
                  var x = e.base;
                  x && x.type === "op" && x.limits && (t.style === I.DISPLAY || x.alwaysHandleSupSub) || x && x.type === "operatorname" && x.alwaysHandleSupSub && (x.limits || t.style === I.DISPLAY) ? b = "munder" : b = "msub";
                }
              else {
                var k = e.base;
                k && k.type === "op" && k.limits && (t.style === I.DISPLAY || k.alwaysHandleSupSub) || k && k.type === "operatorname" && k.alwaysHandleSupSub && (k.limits || t.style === I.DISPLAY) ? b = "mover" : b = "msup";
              }
              return new K.MathNode(b, m);
            }
          }), K0({
            type: "atom",
            htmlBuilder: function(e, t) {
              return R.mathsym(e.text, e.mode, t, ["m" + e.family]);
            },
            mathmlBuilder: function(e, t) {
              var n = new K.MathNode("mo", [Ft(e.text, e.mode)]);
              if (e.family === "bin") {
                var l = $n(e, t);
                l === "bold-italic" && n.setAttribute("mathvariant", l);
              } else
                e.family === "punct" ? n.setAttribute("separator", "true") : (e.family === "open" || e.family === "close") && n.setAttribute("stretchy", "false");
              return n;
            }
          });
          var ol = {
            mi: "italic",
            mn: "normal",
            mtext: "normal"
          };
          K0({
            type: "mathord",
            htmlBuilder: function(e, t) {
              return R.makeOrd(e, t, "mathord");
            },
            mathmlBuilder: function(e, t) {
              var n = new K.MathNode("mi", [Ft(e.text, e.mode, t)]), l = $n(e, t) || "italic";
              return l !== ol[n.type] && n.setAttribute("mathvariant", l), n;
            }
          }), K0({
            type: "textord",
            htmlBuilder: function(e, t) {
              return R.makeOrd(e, t, "textord");
            },
            mathmlBuilder: function(e, t) {
              var n = Ft(e.text, e.mode, t), l = $n(e, t) || "normal", u;
              return e.mode === "text" ? u = new K.MathNode("mtext", [n]) : /[0-9]/.test(e.text) ? u = new K.MathNode("mn", [n]) : e.text === "\\prime" ? u = new K.MathNode("mo", [n]) : u = new K.MathNode("mi", [n]), l !== ol[u.type] && u.setAttribute("mathvariant", l), u;
            }
          });
          var va = {
            "\\nobreak": "nobreak",
            "\\allowbreak": "allowbreak"
          }, ba = {
            " ": {},
            "\\ ": {},
            "~": {
              className: "nobreak"
            },
            "\\space": {},
            "\\nobreakspace": {
              className: "nobreak"
            }
          };
          K0({
            type: "spacing",
            htmlBuilder: function(e, t) {
              if (ba.hasOwnProperty(e.text)) {
                var n = ba[e.text].className || "";
                if (e.mode === "text") {
                  var l = R.makeOrd(e, t, "textord");
                  return l.classes.push(n), l;
                } else
                  return R.makeSpan(["mspace", n], [R.mathsym(e.text, e.mode, t)], t);
              } else {
                if (va.hasOwnProperty(e.text))
                  return R.makeSpan(["mspace", va[e.text]], [], t);
                throw new c('Unknown type of space "' + e.text + '"');
              }
            },
            mathmlBuilder: function(e, t) {
              var n;
              if (ba.hasOwnProperty(e.text))
                n = new K.MathNode("mtext", [new K.TextNode(" ")]);
              else {
                if (va.hasOwnProperty(e.text))
                  return new K.MathNode("mspace");
                throw new c('Unknown type of space "' + e.text + '"');
              }
              return n;
            }
          });
          var ul = function() {
            var e = new K.MathNode("mtd", []);
            return e.setAttribute("width", "50%"), e;
          };
          K0({
            type: "tag",
            mathmlBuilder: function(e, t) {
              var n = new K.MathNode("mtable", [new K.MathNode("mtr", [ul(), new K.MathNode("mtd", [A0(e.body, t)]), ul(), new K.MathNode("mtd", [A0(e.tag, t)])])]);
              return n.setAttribute("width", "100%"), n;
            }
          });
          var cl = {
            "\\text": void 0,
            "\\textrm": "textrm",
            "\\textsf": "textsf",
            "\\texttt": "texttt",
            "\\textnormal": "textrm"
          }, hl = {
            "\\textbf": "textbf",
            "\\textmd": "textmd"
          }, V1 = {
            "\\textit": "textit",
            "\\textup": "textup"
          }, fl = function(e, t) {
            var n = e.font;
            return n ? cl[n] ? t.withTextFontFamily(cl[n]) : hl[n] ? t.withTextFontWeight(hl[n]) : t.withTextFontShape(V1[n]) : t;
          };
          le({
            type: "text",
            names: [
              // Font families
              "\\text",
              "\\textrm",
              "\\textsf",
              "\\texttt",
              "\\textnormal",
              // Font weights
              "\\textbf",
              "\\textmd",
              // Font Shapes
              "\\textit",
              "\\textup"
            ],
            props: {
              numArgs: 1,
              argTypes: ["text"],
              allowedInArgument: !0,
              allowedInText: !0
            },
            handler: function(e, t) {
              var n = e.parser, l = e.funcName, u = t[0];
              return {
                type: "text",
                mode: n.mode,
                body: et(u),
                font: l
              };
            },
            htmlBuilder: function(e, t) {
              var n = fl(e, t), l = nt(e.body, n, !0);
              return R.makeSpan(["mord", "text"], l, n);
            },
            mathmlBuilder: function(e, t) {
              var n = fl(e, t);
              return A0(e.body, n);
            }
          }), le({
            type: "underline",
            names: ["\\underline"],
            props: {
              numArgs: 1,
              allowedInText: !0
            },
            handler: function(e, t) {
              var n = e.parser;
              return {
                type: "underline",
                mode: n.mode,
                body: t[0]
              };
            },
            htmlBuilder: function(e, t) {
              var n = Te(e.body, t), l = R.makeLineSpan("underline-line", t), u = t.fontMetrics().defaultRuleThickness, m = R.makeVList({
                positionType: "top",
                positionData: n.height,
                children: [{
                  type: "kern",
                  size: u
                }, {
                  type: "elem",
                  elem: l
                }, {
                  type: "kern",
                  size: 3 * u
                }, {
                  type: "elem",
                  elem: n
                }]
              }, t);
              return R.makeSpan(["mord", "underline"], [m], t);
            },
            mathmlBuilder: function(e, t) {
              var n = new K.MathNode("mo", [new K.TextNode("‾")]);
              n.setAttribute("stretchy", "true");
              var l = new K.MathNode("munder", [Ue(e.body, t), n]);
              return l.setAttribute("accentunder", "true"), l;
            }
          }), le({
            type: "vcenter",
            names: ["\\vcenter"],
            props: {
              numArgs: 1,
              argTypes: ["original"],
              // In LaTeX, \vcenter can act only on a box.
              allowedInText: !1
            },
            handler: function(e, t) {
              var n = e.parser;
              return {
                type: "vcenter",
                mode: n.mode,
                body: t[0]
              };
            },
            htmlBuilder: function(e, t) {
              var n = Te(e.body, t), l = t.fontMetrics().axisHeight, u = 0.5 * (n.height - l - (n.depth + l));
              return R.makeVList({
                positionType: "shift",
                positionData: u,
                children: [{
                  type: "elem",
                  elem: n
                }]
              }, t);
            },
            mathmlBuilder: function(e, t) {
              return new K.MathNode("mpadded", [Ue(e.body, t)], ["vcenter"]);
            }
          }), le({
            type: "verb",
            names: ["\\verb"],
            props: {
              numArgs: 0,
              allowedInText: !0
            },
            handler: function(e, t, n) {
              throw new c("\\verb ended by end of line instead of matching delimiter");
            },
            htmlBuilder: function(e, t) {
              for (var n = ml(e), l = [], u = t.havingStyle(t.style.text()), m = 0; m < n.length; m++) {
                var b = n[m];
                b === "~" && (b = "\\textasciitilde"), l.push(R.makeSymbol(b, "Typewriter-Regular", e.mode, u, ["mord", "texttt"]));
              }
              return R.makeSpan(["mord", "text"].concat(u.sizingClasses(t)), R.tryCombineChars(l), u);
            },
            mathmlBuilder: function(e, t) {
              var n = new K.TextNode(ml(e)), l = new K.MathNode("mtext", [n]);
              return l.setAttribute("mathvariant", "monospace"), l;
            }
          });
          var ml = function(e) {
            return e.body.replace(/ /g, e.star ? "␣" : " ");
          }, W1 = vi, z0 = W1, dl = `[ \r
	]`, j1 = "\\\\[a-zA-Z@]+", Y1 = "\\\\[^\uD800-\uDFFF]", X1 = "(" + j1 + ")" + dl + "*", Z1 = `\\\\(
|[ \r	]+
?)[ \r	]*`, ya = "[̀-ͯ]", K1 = new RegExp(ya + "+$"), Q1 = "(" + dl + "+)|" + // whitespace
          (Z1 + "|") + // \whitespace
          "([!-\\[\\]-‧‪-퟿豈-￿]" + // single codepoint
          (ya + "*") + // ...plus accents
          "|[\uD800-\uDBFF][\uDC00-\uDFFF]" + // surrogate pair
          (ya + "*") + // ...plus accents
          "|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5" + // \verb unstarred
          ("|" + X1) + // \macroName + spaces
          ("|" + Y1 + ")"), pl = /* @__PURE__ */ function() {
            function f(t, n) {
              this.input = void 0, this.settings = void 0, this.tokenRegex = void 0, this.catcodes = void 0, this.input = t, this.settings = n, this.tokenRegex = new RegExp(Q1, "g"), this.catcodes = {
                "%": 14,
                // comment character
                "~": 13
                // active character
              };
            }
            var e = f.prototype;
            return e.setCatcode = function(n, l) {
              this.catcodes[n] = l;
            }, e.lex = function() {
              var n = this.input, l = this.tokenRegex.lastIndex;
              if (l === n.length)
                return new T0("EOF", new Gt(this, l, l));
              var u = this.tokenRegex.exec(n);
              if (u === null || u.index !== l)
                throw new c("Unexpected character: '" + n[l] + "'", new T0(n[l], new Gt(this, l, l + 1)));
              var m = u[6] || u[3] || (u[2] ? "\\ " : " ");
              if (this.catcodes[m] === 14) {
                var b = n.indexOf(`
`, this.tokenRegex.lastIndex);
                return b === -1 ? (this.tokenRegex.lastIndex = n.length, this.settings.reportNonstrict("commentAtEnd", "% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")) : this.tokenRegex.lastIndex = b + 1, this.lex();
              }
              return new T0(m, new Gt(this, l, this.tokenRegex.lastIndex));
            }, f;
          }(), J1 = /* @__PURE__ */ function() {
            function f(t, n) {
              t === void 0 && (t = {}), n === void 0 && (n = {}), this.current = void 0, this.builtins = void 0, this.undefStack = void 0, this.current = n, this.builtins = t, this.undefStack = [];
            }
            var e = f.prototype;
            return e.beginGroup = function() {
              this.undefStack.push({});
            }, e.endGroup = function() {
              if (this.undefStack.length === 0)
                throw new c("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");
              var n = this.undefStack.pop();
              for (var l in n)
                n.hasOwnProperty(l) && (n[l] == null ? delete this.current[l] : this.current[l] = n[l]);
            }, e.endGroups = function() {
              for (; this.undefStack.length > 0; )
                this.endGroup();
            }, e.has = function(n) {
              return this.current.hasOwnProperty(n) || this.builtins.hasOwnProperty(n);
            }, e.get = function(n) {
              return this.current.hasOwnProperty(n) ? this.current[n] : this.builtins[n];
            }, e.set = function(n, l, u) {
              if (u === void 0 && (u = !1), u) {
                for (var m = 0; m < this.undefStack.length; m++)
                  delete this.undefStack[m][n];
                this.undefStack.length > 0 && (this.undefStack[this.undefStack.length - 1][n] = l);
              } else {
                var b = this.undefStack[this.undefStack.length - 1];
                b && !b.hasOwnProperty(n) && (b[n] = this.current[n]);
              }
              l == null ? delete this.current[n] : this.current[n] = l;
            }, f;
          }(), $1 = Vi, eu = $1;
          _("\\noexpand", function(f) {
            var e = f.popToken();
            return f.isExpandable(e.text) && (e.noexpand = !0, e.treatAsRelax = !0), {
              tokens: [e],
              numArgs: 0
            };
          }), _("\\expandafter", function(f) {
            var e = f.popToken();
            return f.expandOnce(!0), {
              tokens: [e],
              numArgs: 0
            };
          }), _("\\@firstoftwo", function(f) {
            var e = f.consumeArgs(2);
            return {
              tokens: e[0],
              numArgs: 0
            };
          }), _("\\@secondoftwo", function(f) {
            var e = f.consumeArgs(2);
            return {
              tokens: e[1],
              numArgs: 0
            };
          }), _("\\@ifnextchar", function(f) {
            var e = f.consumeArgs(3);
            f.consumeSpaces();
            var t = f.future();
            return e[0].length === 1 && e[0][0].text === t.text ? {
              tokens: e[1],
              numArgs: 0
            } : {
              tokens: e[2],
              numArgs: 0
            };
          }), _("\\@ifstar", "\\@ifnextchar *{\\@firstoftwo{#1}}"), _("\\TextOrMath", function(f) {
            var e = f.consumeArgs(2);
            return f.mode === "text" ? {
              tokens: e[0],
              numArgs: 0
            } : {
              tokens: e[1],
              numArgs: 0
            };
          });
          var gl = {
            0: 0,
            1: 1,
            2: 2,
            3: 3,
            4: 4,
            5: 5,
            6: 6,
            7: 7,
            8: 8,
            9: 9,
            a: 10,
            A: 10,
            b: 11,
            B: 11,
            c: 12,
            C: 12,
            d: 13,
            D: 13,
            e: 14,
            E: 14,
            f: 15,
            F: 15
          };
          _("\\char", function(f) {
            var e = f.popToken(), t, n = "";
            if (e.text === "'")
              t = 8, e = f.popToken();
            else if (e.text === '"')
              t = 16, e = f.popToken();
            else if (e.text === "`")
              if (e = f.popToken(), e.text[0] === "\\")
                n = e.text.charCodeAt(1);
              else {
                if (e.text === "EOF")
                  throw new c("\\char` missing argument");
                n = e.text.charCodeAt(0);
              }
            else
              t = 10;
            if (t) {
              if (n = gl[e.text], n == null || n >= t)
                throw new c("Invalid base-" + t + " digit " + e.text);
              for (var l; (l = gl[f.future().text]) != null && l < t; )
                n *= t, n += l, f.popToken();
            }
            return "\\@char{" + n + "}";
          });
          var wa = function(e, t, n) {
            var l = e.consumeArg().tokens;
            if (l.length !== 1)
              throw new c("\\newcommand's first argument must be a macro name");
            var u = l[0].text, m = e.isDefined(u);
            if (m && !t)
              throw new c("\\newcommand{" + u + "} attempting to redefine " + (u + "; use \\renewcommand"));
            if (!m && !n)
              throw new c("\\renewcommand{" + u + "} when command " + u + " does not yet exist; use \\newcommand");
            var b = 0;
            if (l = e.consumeArg().tokens, l.length === 1 && l[0].text === "[") {
              for (var k = "", x = e.expandNextToken(); x.text !== "]" && x.text !== "EOF"; )
                k += x.text, x = e.expandNextToken();
              if (!k.match(/^\s*[0-9]+\s*$/))
                throw new c("Invalid number of arguments: " + k);
              b = parseInt(k), l = e.consumeArg().tokens;
            }
            return e.macros.set(u, {
              tokens: l,
              numArgs: b
            }), "";
          };
          _("\\newcommand", function(f) {
            return wa(f, !1, !0);
          }), _("\\renewcommand", function(f) {
            return wa(f, !0, !1);
          }), _("\\providecommand", function(f) {
            return wa(f, !0, !0);
          }), _("\\message", function(f) {
            var e = f.consumeArgs(1)[0];
            return console.log(e.reverse().map(function(t) {
              return t.text;
            }).join("")), "";
          }), _("\\errmessage", function(f) {
            var e = f.consumeArgs(1)[0];
            return console.error(e.reverse().map(function(t) {
              return t.text;
            }).join("")), "";
          }), _("\\show", function(f) {
            var e = f.popToken(), t = e.text;
            return console.log(e, f.macros.get(t), z0[t], Ve.math[t], Ve.text[t]), "";
          }), _("\\bgroup", "{"), _("\\egroup", "}"), _("~", "\\nobreakspace"), _("\\lq", "`"), _("\\rq", "'"), _("\\aa", "\\r a"), _("\\AA", "\\r A"), _("\\textcopyright", "\\html@mathml{\\textcircled{c}}{\\char`©}"), _("\\copyright", "\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}"), _("\\textregistered", "\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}"), _("ℬ", "\\mathscr{B}"), _("ℰ", "\\mathscr{E}"), _("ℱ", "\\mathscr{F}"), _("ℋ", "\\mathscr{H}"), _("ℐ", "\\mathscr{I}"), _("ℒ", "\\mathscr{L}"), _("ℳ", "\\mathscr{M}"), _("ℛ", "\\mathscr{R}"), _("ℭ", "\\mathfrak{C}"), _("ℌ", "\\mathfrak{H}"), _("ℨ", "\\mathfrak{Z}"), _("\\Bbbk", "\\Bbb{k}"), _("·", "\\cdotp"), _("\\llap", "\\mathllap{\\textrm{#1}}"), _("\\rlap", "\\mathrlap{\\textrm{#1}}"), _("\\clap", "\\mathclap{\\textrm{#1}}"), _("\\mathstrut", "\\vphantom{(}"), _("\\underbar", "\\underline{\\text{#1}}"), _("\\not", '\\html@mathml{\\mathrel{\\mathrlap\\@not}}{\\char"338}'), _("\\neq", "\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}"), _("\\ne", "\\neq"), _("≠", "\\neq"), _("\\notin", "\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}"), _("∉", "\\notin"), _("≘", "\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}"), _("≙", "\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}"), _("≚", "\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}"), _("≛", "\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}"), _("≝", "\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}"), _("≞", "\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}"), _("≟", "\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}"), _("⟂", "\\perp"), _("‼", "\\mathclose{!\\mkern-0.8mu!}"), _("∌", "\\notni"), _("⌜", "\\ulcorner"), _("⌝", "\\urcorner"), _("⌞", "\\llcorner"), _("⌟", "\\lrcorner"), _("©", "\\copyright"), _("®", "\\textregistered"), _("️", "\\textregistered"), _("\\ulcorner", '\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}'), _("\\urcorner", '\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}'), _("\\llcorner", '\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}'), _("\\lrcorner", '\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}'), _("\\vdots", "\\mathord{\\varvdots\\rule{0pt}{15pt}}"), _("⋮", "\\vdots"), _("\\varGamma", "\\mathit{\\Gamma}"), _("\\varDelta", "\\mathit{\\Delta}"), _("\\varTheta", "\\mathit{\\Theta}"), _("\\varLambda", "\\mathit{\\Lambda}"), _("\\varXi", "\\mathit{\\Xi}"), _("\\varPi", "\\mathit{\\Pi}"), _("\\varSigma", "\\mathit{\\Sigma}"), _("\\varUpsilon", "\\mathit{\\Upsilon}"), _("\\varPhi", "\\mathit{\\Phi}"), _("\\varPsi", "\\mathit{\\Psi}"), _("\\varOmega", "\\mathit{\\Omega}"), _("\\substack", "\\begin{subarray}{c}#1\\end{subarray}"), _("\\colon", "\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax"), _("\\boxed", "\\fbox{$\\displaystyle{#1}$}"), _("\\iff", "\\DOTSB\\;\\Longleftrightarrow\\;"), _("\\implies", "\\DOTSB\\;\\Longrightarrow\\;"), _("\\impliedby", "\\DOTSB\\;\\Longleftarrow\\;");
          var vl = {
            ",": "\\dotsc",
            "\\not": "\\dotsb",
            // \keybin@ checks for the following:
            "+": "\\dotsb",
            "=": "\\dotsb",
            "<": "\\dotsb",
            ">": "\\dotsb",
            "-": "\\dotsb",
            "*": "\\dotsb",
            ":": "\\dotsb",
            // Symbols whose definition starts with \DOTSB:
            "\\DOTSB": "\\dotsb",
            "\\coprod": "\\dotsb",
            "\\bigvee": "\\dotsb",
            "\\bigwedge": "\\dotsb",
            "\\biguplus": "\\dotsb",
            "\\bigcap": "\\dotsb",
            "\\bigcup": "\\dotsb",
            "\\prod": "\\dotsb",
            "\\sum": "\\dotsb",
            "\\bigotimes": "\\dotsb",
            "\\bigoplus": "\\dotsb",
            "\\bigodot": "\\dotsb",
            "\\bigsqcup": "\\dotsb",
            "\\And": "\\dotsb",
            "\\longrightarrow": "\\dotsb",
            "\\Longrightarrow": "\\dotsb",
            "\\longleftarrow": "\\dotsb",
            "\\Longleftarrow": "\\dotsb",
            "\\longleftrightarrow": "\\dotsb",
            "\\Longleftrightarrow": "\\dotsb",
            "\\mapsto": "\\dotsb",
            "\\longmapsto": "\\dotsb",
            "\\hookrightarrow": "\\dotsb",
            "\\doteq": "\\dotsb",
            // Symbols whose definition starts with \mathbin:
            "\\mathbin": "\\dotsb",
            // Symbols whose definition starts with \mathrel:
            "\\mathrel": "\\dotsb",
            "\\relbar": "\\dotsb",
            "\\Relbar": "\\dotsb",
            "\\xrightarrow": "\\dotsb",
            "\\xleftarrow": "\\dotsb",
            // Symbols whose definition starts with \DOTSI:
            "\\DOTSI": "\\dotsi",
            "\\int": "\\dotsi",
            "\\oint": "\\dotsi",
            "\\iint": "\\dotsi",
            "\\iiint": "\\dotsi",
            "\\iiiint": "\\dotsi",
            "\\idotsint": "\\dotsi",
            // Symbols whose definition starts with \DOTSX:
            "\\DOTSX": "\\dotsx"
          };
          _("\\dots", function(f) {
            var e = "\\dotso", t = f.expandAfterFuture().text;
            return t in vl ? e = vl[t] : (t.slice(0, 4) === "\\not" || t in Ve.math && U.contains(["bin", "rel"], Ve.math[t].group)) && (e = "\\dotsb"), e;
          });
          var ka = {
            // \rightdelim@ checks for the following:
            ")": !0,
            "]": !0,
            "\\rbrack": !0,
            "\\}": !0,
            "\\rbrace": !0,
            "\\rangle": !0,
            "\\rceil": !0,
            "\\rfloor": !0,
            "\\rgroup": !0,
            "\\rmoustache": !0,
            "\\right": !0,
            "\\bigr": !0,
            "\\biggr": !0,
            "\\Bigr": !0,
            "\\Biggr": !0,
            // \extra@ also tests for the following:
            $: !0,
            // \extrap@ checks for the following:
            ";": !0,
            ".": !0,
            ",": !0
          };
          _("\\dotso", function(f) {
            var e = f.future().text;
            return e in ka ? "\\ldots\\," : "\\ldots";
          }), _("\\dotsc", function(f) {
            var e = f.future().text;
            return e in ka && e !== "," ? "\\ldots\\," : "\\ldots";
          }), _("\\cdots", function(f) {
            var e = f.future().text;
            return e in ka ? "\\@cdots\\," : "\\@cdots";
          }), _("\\dotsb", "\\cdots"), _("\\dotsm", "\\cdots"), _("\\dotsi", "\\!\\cdots"), _("\\dotsx", "\\ldots\\,"), _("\\DOTSI", "\\relax"), _("\\DOTSB", "\\relax"), _("\\DOTSX", "\\relax"), _("\\tmspace", "\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax"), _("\\,", "\\tmspace+{3mu}{.1667em}"), _("\\thinspace", "\\,"), _("\\>", "\\mskip{4mu}"), _("\\:", "\\tmspace+{4mu}{.2222em}"), _("\\medspace", "\\:"), _("\\;", "\\tmspace+{5mu}{.2777em}"), _("\\thickspace", "\\;"), _("\\!", "\\tmspace-{3mu}{.1667em}"), _("\\negthinspace", "\\!"), _("\\negmedspace", "\\tmspace-{4mu}{.2222em}"), _("\\negthickspace", "\\tmspace-{5mu}{.277em}"), _("\\enspace", "\\kern.5em "), _("\\enskip", "\\hskip.5em\\relax"), _("\\quad", "\\hskip1em\\relax"), _("\\qquad", "\\hskip2em\\relax"), _("\\tag", "\\@ifstar\\tag@literal\\tag@paren"), _("\\tag@paren", "\\tag@literal{({#1})}"), _("\\tag@literal", function(f) {
            if (f.macros.get("\\df@tag"))
              throw new c("Multiple \\tag");
            return "\\gdef\\df@tag{\\text{#1}}";
          }), _("\\bmod", "\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}"), _("\\pod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)"), _("\\pmod", "\\pod{{\\rm mod}\\mkern6mu#1}"), _("\\mod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1"), _("\\newline", "\\\\\\relax"), _("\\TeX", "\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");
          var bl = te(Bt["Main-Regular"]["T".charCodeAt(0)][1] - 0.7 * Bt["Main-Regular"]["A".charCodeAt(0)][1]);
          _("\\LaTeX", "\\textrm{\\html@mathml{" + ("L\\kern-.36em\\raisebox{" + bl + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{LaTeX}}"), _("\\KaTeX", "\\textrm{\\html@mathml{" + ("K\\kern-.17em\\raisebox{" + bl + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{KaTeX}}"), _("\\hspace", "\\@ifstar\\@hspacer\\@hspace"), _("\\@hspace", "\\hskip #1\\relax"), _("\\@hspacer", "\\rule{0pt}{0pt}\\hskip #1\\relax"), _("\\ordinarycolon", ":"), _("\\vcentcolon", "\\mathrel{\\mathop\\ordinarycolon}"), _("\\dblcolon", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}'), _("\\coloneqq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}'), _("\\Coloneqq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}'), _("\\coloneq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}'), _("\\Coloneq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}'), _("\\eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}'), _("\\Eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}'), _("\\eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}'), _("\\Eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}'), _("\\colonapprox", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}'), _("\\Colonapprox", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}'), _("\\colonsim", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}'), _("\\Colonsim", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}'), _("∷", "\\dblcolon"), _("∹", "\\eqcolon"), _("≔", "\\coloneqq"), _("≕", "\\eqqcolon"), _("⩴", "\\Coloneqq"), _("\\ratio", "\\vcentcolon"), _("\\coloncolon", "\\dblcolon"), _("\\colonequals", "\\coloneqq"), _("\\coloncolonequals", "\\Coloneqq"), _("\\equalscolon", "\\eqqcolon"), _("\\equalscoloncolon", "\\Eqqcolon"), _("\\colonminus", "\\coloneq"), _("\\coloncolonminus", "\\Coloneq"), _("\\minuscolon", "\\eqcolon"), _("\\minuscoloncolon", "\\Eqcolon"), _("\\coloncolonapprox", "\\Colonapprox"), _("\\coloncolonsim", "\\Colonsim"), _("\\simcolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}"), _("\\simcoloncolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}"), _("\\approxcolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}"), _("\\approxcoloncolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}"), _("\\notni", "\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}"), _("\\limsup", "\\DOTSB\\operatorname*{lim\\,sup}"), _("\\liminf", "\\DOTSB\\operatorname*{lim\\,inf}"), _("\\injlim", "\\DOTSB\\operatorname*{inj\\,lim}"), _("\\projlim", "\\DOTSB\\operatorname*{proj\\,lim}"), _("\\varlimsup", "\\DOTSB\\operatorname*{\\overline{lim}}"), _("\\varliminf", "\\DOTSB\\operatorname*{\\underline{lim}}"), _("\\varinjlim", "\\DOTSB\\operatorname*{\\underrightarrow{lim}}"), _("\\varprojlim", "\\DOTSB\\operatorname*{\\underleftarrow{lim}}"), _("\\gvertneqq", "\\html@mathml{\\@gvertneqq}{≩}"), _("\\lvertneqq", "\\html@mathml{\\@lvertneqq}{≨}"), _("\\ngeqq", "\\html@mathml{\\@ngeqq}{≱}"), _("\\ngeqslant", "\\html@mathml{\\@ngeqslant}{≱}"), _("\\nleqq", "\\html@mathml{\\@nleqq}{≰}"), _("\\nleqslant", "\\html@mathml{\\@nleqslant}{≰}"), _("\\nshortmid", "\\html@mathml{\\@nshortmid}{∤}"), _("\\nshortparallel", "\\html@mathml{\\@nshortparallel}{∦}"), _("\\nsubseteqq", "\\html@mathml{\\@nsubseteqq}{⊈}"), _("\\nsupseteqq", "\\html@mathml{\\@nsupseteqq}{⊉}"), _("\\varsubsetneq", "\\html@mathml{\\@varsubsetneq}{⊊}"), _("\\varsubsetneqq", "\\html@mathml{\\@varsubsetneqq}{⫋}"), _("\\varsupsetneq", "\\html@mathml{\\@varsupsetneq}{⊋}"), _("\\varsupsetneqq", "\\html@mathml{\\@varsupsetneqq}{⫌}"), _("\\imath", "\\html@mathml{\\@imath}{ı}"), _("\\jmath", "\\html@mathml{\\@jmath}{ȷ}"), _("\\llbracket", "\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}"), _("\\rrbracket", "\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}"), _("⟦", "\\llbracket"), _("⟧", "\\rrbracket"), _("\\lBrace", "\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}"), _("\\rBrace", "\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}"), _("⦃", "\\lBrace"), _("⦄", "\\rBrace"), _("\\minuso", "\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}"), _("⦵", "\\minuso"), _("\\darr", "\\downarrow"), _("\\dArr", "\\Downarrow"), _("\\Darr", "\\Downarrow"), _("\\lang", "\\langle"), _("\\rang", "\\rangle"), _("\\uarr", "\\uparrow"), _("\\uArr", "\\Uparrow"), _("\\Uarr", "\\Uparrow"), _("\\N", "\\mathbb{N}"), _("\\R", "\\mathbb{R}"), _("\\Z", "\\mathbb{Z}"), _("\\alef", "\\aleph"), _("\\alefsym", "\\aleph"), _("\\Alpha", "\\mathrm{A}"), _("\\Beta", "\\mathrm{B}"), _("\\bull", "\\bullet"), _("\\Chi", "\\mathrm{X}"), _("\\clubs", "\\clubsuit"), _("\\cnums", "\\mathbb{C}"), _("\\Complex", "\\mathbb{C}"), _("\\Dagger", "\\ddagger"), _("\\diamonds", "\\diamondsuit"), _("\\empty", "\\emptyset"), _("\\Epsilon", "\\mathrm{E}"), _("\\Eta", "\\mathrm{H}"), _("\\exist", "\\exists"), _("\\harr", "\\leftrightarrow"), _("\\hArr", "\\Leftrightarrow"), _("\\Harr", "\\Leftrightarrow"), _("\\hearts", "\\heartsuit"), _("\\image", "\\Im"), _("\\infin", "\\infty"), _("\\Iota", "\\mathrm{I}"), _("\\isin", "\\in"), _("\\Kappa", "\\mathrm{K}"), _("\\larr", "\\leftarrow"), _("\\lArr", "\\Leftarrow"), _("\\Larr", "\\Leftarrow"), _("\\lrarr", "\\leftrightarrow"), _("\\lrArr", "\\Leftrightarrow"), _("\\Lrarr", "\\Leftrightarrow"), _("\\Mu", "\\mathrm{M}"), _("\\natnums", "\\mathbb{N}"), _("\\Nu", "\\mathrm{N}"), _("\\Omicron", "\\mathrm{O}"), _("\\plusmn", "\\pm"), _("\\rarr", "\\rightarrow"), _("\\rArr", "\\Rightarrow"), _("\\Rarr", "\\Rightarrow"), _("\\real", "\\Re"), _("\\reals", "\\mathbb{R}"), _("\\Reals", "\\mathbb{R}"), _("\\Rho", "\\mathrm{P}"), _("\\sdot", "\\cdot"), _("\\sect", "\\S"), _("\\spades", "\\spadesuit"), _("\\sub", "\\subset"), _("\\sube", "\\subseteq"), _("\\supe", "\\supseteq"), _("\\Tau", "\\mathrm{T}"), _("\\thetasym", "\\vartheta"), _("\\weierp", "\\wp"), _("\\Zeta", "\\mathrm{Z}"), _("\\argmin", "\\DOTSB\\operatorname*{arg\\,min}"), _("\\argmax", "\\DOTSB\\operatorname*{arg\\,max}"), _("\\plim", "\\DOTSB\\mathop{\\operatorname{plim}}\\limits"), _("\\bra", "\\mathinner{\\langle{#1}|}"), _("\\ket", "\\mathinner{|{#1}\\rangle}"), _("\\braket", "\\mathinner{\\langle{#1}\\rangle}"), _("\\Bra", "\\left\\langle#1\\right|"), _("\\Ket", "\\left|#1\\right\\rangle");
          var yl = function(e) {
            return function(t) {
              var n = t.consumeArg().tokens, l = t.consumeArg().tokens, u = t.consumeArg().tokens, m = t.consumeArg().tokens, b = t.macros.get("|"), k = t.macros.get("\\|");
              t.macros.beginGroup();
              var x = function(P) {
                return function(V) {
                  e && (V.macros.set("|", b), u.length && V.macros.set("\\|", k));
                  var ee = P;
                  if (!P && u.length) {
                    var ae = V.future();
                    ae.text === "|" && (V.popToken(), ee = !0);
                  }
                  return {
                    tokens: ee ? u : l,
                    numArgs: 0
                  };
                };
              };
              t.macros.set("|", x(!1)), u.length && t.macros.set("\\|", x(!0));
              var z = t.consumeArg().tokens, N = t.expandTokens([].concat(m, z, n));
              return t.macros.endGroup(), {
                tokens: N.reverse(),
                numArgs: 0
              };
            };
          };
          _("\\bra@ket", yl(!1)), _("\\bra@set", yl(!0)), _("\\Braket", "\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}"), _("\\Set", "\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}"), _("\\set", "\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}"), _("\\angln", "{\\angl n}"), _("\\blue", "\\textcolor{##6495ed}{#1}"), _("\\orange", "\\textcolor{##ffa500}{#1}"), _("\\pink", "\\textcolor{##ff00af}{#1}"), _("\\red", "\\textcolor{##df0030}{#1}"), _("\\green", "\\textcolor{##28ae7b}{#1}"), _("\\gray", "\\textcolor{gray}{#1}"), _("\\purple", "\\textcolor{##9d38bd}{#1}"), _("\\blueA", "\\textcolor{##ccfaff}{#1}"), _("\\blueB", "\\textcolor{##80f6ff}{#1}"), _("\\blueC", "\\textcolor{##63d9ea}{#1}"), _("\\blueD", "\\textcolor{##11accd}{#1}"), _("\\blueE", "\\textcolor{##0c7f99}{#1}"), _("\\tealA", "\\textcolor{##94fff5}{#1}"), _("\\tealB", "\\textcolor{##26edd5}{#1}"), _("\\tealC", "\\textcolor{##01d1c1}{#1}"), _("\\tealD", "\\textcolor{##01a995}{#1}"), _("\\tealE", "\\textcolor{##208170}{#1}"), _("\\greenA", "\\textcolor{##b6ffb0}{#1}"), _("\\greenB", "\\textcolor{##8af281}{#1}"), _("\\greenC", "\\textcolor{##74cf70}{#1}"), _("\\greenD", "\\textcolor{##1fab54}{#1}"), _("\\greenE", "\\textcolor{##0d923f}{#1}"), _("\\goldA", "\\textcolor{##ffd0a9}{#1}"), _("\\goldB", "\\textcolor{##ffbb71}{#1}"), _("\\goldC", "\\textcolor{##ff9c39}{#1}"), _("\\goldD", "\\textcolor{##e07d10}{#1}"), _("\\goldE", "\\textcolor{##a75a05}{#1}"), _("\\redA", "\\textcolor{##fca9a9}{#1}"), _("\\redB", "\\textcolor{##ff8482}{#1}"), _("\\redC", "\\textcolor{##f9685d}{#1}"), _("\\redD", "\\textcolor{##e84d39}{#1}"), _("\\redE", "\\textcolor{##bc2612}{#1}"), _("\\maroonA", "\\textcolor{##ffbde0}{#1}"), _("\\maroonB", "\\textcolor{##ff92c6}{#1}"), _("\\maroonC", "\\textcolor{##ed5fa6}{#1}"), _("\\maroonD", "\\textcolor{##ca337c}{#1}"), _("\\maroonE", "\\textcolor{##9e034e}{#1}"), _("\\purpleA", "\\textcolor{##ddd7ff}{#1}"), _("\\purpleB", "\\textcolor{##c6b9fc}{#1}"), _("\\purpleC", "\\textcolor{##aa87ff}{#1}"), _("\\purpleD", "\\textcolor{##7854ab}{#1}"), _("\\purpleE", "\\textcolor{##543b78}{#1}"), _("\\mintA", "\\textcolor{##f5f9e8}{#1}"), _("\\mintB", "\\textcolor{##edf2df}{#1}"), _("\\mintC", "\\textcolor{##e0e5cc}{#1}"), _("\\grayA", "\\textcolor{##f6f7f7}{#1}"), _("\\grayB", "\\textcolor{##f0f1f2}{#1}"), _("\\grayC", "\\textcolor{##e3e5e6}{#1}"), _("\\grayD", "\\textcolor{##d6d8da}{#1}"), _("\\grayE", "\\textcolor{##babec2}{#1}"), _("\\grayF", "\\textcolor{##888d93}{#1}"), _("\\grayG", "\\textcolor{##626569}{#1}"), _("\\grayH", "\\textcolor{##3b3e40}{#1}"), _("\\grayI", "\\textcolor{##21242c}{#1}"), _("\\kaBlue", "\\textcolor{##314453}{#1}"), _("\\kaGreen", "\\textcolor{##71B307}{#1}");
          var wl = {
            "^": !0,
            // Parser.js
            _: !0,
            // Parser.js
            "\\limits": !0,
            // Parser.js
            "\\nolimits": !0
            // Parser.js
          }, tu = /* @__PURE__ */ function() {
            function f(t, n, l) {
              this.settings = void 0, this.expansionCount = void 0, this.lexer = void 0, this.macros = void 0, this.stack = void 0, this.mode = void 0, this.settings = n, this.expansionCount = 0, this.feed(t), this.macros = new J1(eu, n.macros), this.mode = l, this.stack = [];
            }
            var e = f.prototype;
            return e.feed = function(n) {
              this.lexer = new pl(n, this.settings);
            }, e.switchMode = function(n) {
              this.mode = n;
            }, e.beginGroup = function() {
              this.macros.beginGroup();
            }, e.endGroup = function() {
              this.macros.endGroup();
            }, e.endGroups = function() {
              this.macros.endGroups();
            }, e.future = function() {
              return this.stack.length === 0 && this.pushToken(this.lexer.lex()), this.stack[this.stack.length - 1];
            }, e.popToken = function() {
              return this.future(), this.stack.pop();
            }, e.pushToken = function(n) {
              this.stack.push(n);
            }, e.pushTokens = function(n) {
              var l;
              (l = this.stack).push.apply(l, n);
            }, e.scanArgument = function(n) {
              var l, u, m;
              if (n) {
                if (this.consumeSpaces(), this.future().text !== "[")
                  return null;
                l = this.popToken();
                var b = this.consumeArg(["]"]);
                m = b.tokens, u = b.end;
              } else {
                var k = this.consumeArg();
                m = k.tokens, l = k.start, u = k.end;
              }
              return this.pushToken(new T0("EOF", u.loc)), this.pushTokens(m), l.range(u, "");
            }, e.consumeSpaces = function() {
              for (; ; ) {
                var n = this.future();
                if (n.text === " ")
                  this.stack.pop();
                else
                  break;
              }
            }, e.consumeArg = function(n) {
              var l = [], u = n && n.length > 0;
              u || this.consumeSpaces();
              var m = this.future(), b, k = 0, x = 0;
              do {
                if (b = this.popToken(), l.push(b), b.text === "{")
                  ++k;
                else if (b.text === "}") {
                  if (--k, k === -1)
                    throw new c("Extra }", b);
                } else if (b.text === "EOF")
                  throw new c("Unexpected end of input in a macro argument, expected '" + (n && u ? n[x] : "}") + "'", b);
                if (n && u)
                  if ((k === 0 || k === 1 && n[x] === "{") && b.text === n[x]) {
                    if (++x, x === n.length) {
                      l.splice(-x, x);
                      break;
                    }
                  } else
                    x = 0;
              } while (k !== 0 || u);
              return m.text === "{" && l[l.length - 1].text === "}" && (l.pop(), l.shift()), l.reverse(), {
                tokens: l,
                start: m,
                end: b
              };
            }, e.consumeArgs = function(n, l) {
              if (l) {
                if (l.length !== n + 1)
                  throw new c("The length of delimiters doesn't match the number of args!");
                for (var u = l[0], m = 0; m < u.length; m++) {
                  var b = this.popToken();
                  if (u[m] !== b.text)
                    throw new c("Use of the macro doesn't match its definition", b);
                }
              }
              for (var k = [], x = 0; x < n; x++)
                k.push(this.consumeArg(l && l[x + 1]).tokens);
              return k;
            }, e.expandOnce = function(n) {
              var l = this.popToken(), u = l.text, m = l.noexpand ? null : this._getExpansion(u);
              if (m == null || n && m.unexpandable) {
                if (n && m == null && u[0] === "\\" && !this.isDefined(u))
                  throw new c("Undefined control sequence: " + u);
                return this.pushToken(l), !1;
              }
              if (this.expansionCount++, this.expansionCount > this.settings.maxExpand)
                throw new c("Too many expansions: infinite loop or need to increase maxExpand setting");
              var b = m.tokens, k = this.consumeArgs(m.numArgs, m.delimiters);
              if (m.numArgs) {
                b = b.slice();
                for (var x = b.length - 1; x >= 0; --x) {
                  var z = b[x];
                  if (z.text === "#") {
                    if (x === 0)
                      throw new c("Incomplete placeholder at end of macro body", z);
                    if (z = b[--x], z.text === "#")
                      b.splice(x + 1, 1);
                    else if (/^[1-9]$/.test(z.text)) {
                      var N;
                      (N = b).splice.apply(N, [x, 2].concat(k[+z.text - 1]));
                    } else
                      throw new c("Not a valid argument number", z);
                  }
                }
              }
              return this.pushTokens(b), b.length;
            }, e.expandAfterFuture = function() {
              return this.expandOnce(), this.future();
            }, e.expandNextToken = function() {
              for (; ; )
                if (this.expandOnce() === !1) {
                  var n = this.stack.pop();
                  return n.treatAsRelax && (n.text = "\\relax"), n;
                }
              throw new Error();
            }, e.expandMacro = function(n) {
              return this.macros.has(n) ? this.expandTokens([new T0(n)]) : void 0;
            }, e.expandTokens = function(n) {
              var l = [], u = this.stack.length;
              for (this.pushTokens(n); this.stack.length > u; )
                if (this.expandOnce(!0) === !1) {
                  var m = this.stack.pop();
                  m.treatAsRelax && (m.noexpand = !1, m.treatAsRelax = !1), l.push(m);
                }
              return l;
            }, e.expandMacroAsText = function(n) {
              var l = this.expandMacro(n);
              return l && l.map(function(u) {
                return u.text;
              }).join("");
            }, e._getExpansion = function(n) {
              var l = this.macros.get(n);
              if (l == null)
                return l;
              if (n.length === 1) {
                var u = this.lexer.catcodes[n];
                if (u != null && u !== 13)
                  return;
              }
              var m = typeof l == "function" ? l(this) : l;
              if (typeof m == "string") {
                var b = 0;
                if (m.indexOf("#") !== -1)
                  for (var k = m.replace(/##/g, ""); k.indexOf("#" + (b + 1)) !== -1; )
                    ++b;
                for (var x = new pl(m, this.settings), z = [], N = x.lex(); N.text !== "EOF"; )
                  z.push(N), N = x.lex();
                z.reverse();
                var H = {
                  tokens: z,
                  numArgs: b
                };
                return H;
              }
              return m;
            }, e.isDefined = function(n) {
              return this.macros.has(n) || z0.hasOwnProperty(n) || Ve.math.hasOwnProperty(n) || Ve.text.hasOwnProperty(n) || wl.hasOwnProperty(n);
            }, e.isExpandable = function(n) {
              var l = this.macros.get(n);
              return l != null ? typeof l == "string" || typeof l == "function" || !l.unexpandable : z0.hasOwnProperty(n) && !z0[n].primitive;
            }, f;
          }(), kl = /^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/, dn = Object.freeze({
            "₊": "+",
            "₋": "-",
            "₌": "=",
            "₍": "(",
            "₎": ")",
            "₀": "0",
            "₁": "1",
            "₂": "2",
            "₃": "3",
            "₄": "4",
            "₅": "5",
            "₆": "6",
            "₇": "7",
            "₈": "8",
            "₉": "9",
            "ₐ": "a",
            "ₑ": "e",
            "ₕ": "h",
            "ᵢ": "i",
            "ⱼ": "j",
            "ₖ": "k",
            "ₗ": "l",
            "ₘ": "m",
            "ₙ": "n",
            "ₒ": "o",
            "ₚ": "p",
            "ᵣ": "r",
            "ₛ": "s",
            "ₜ": "t",
            "ᵤ": "u",
            "ᵥ": "v",
            "ₓ": "x",
            "ᵦ": "β",
            "ᵧ": "γ",
            "ᵨ": "ρ",
            "ᵩ": "ϕ",
            "ᵪ": "χ",
            "⁺": "+",
            "⁻": "-",
            "⁼": "=",
            "⁽": "(",
            "⁾": ")",
            "⁰": "0",
            "¹": "1",
            "²": "2",
            "³": "3",
            "⁴": "4",
            "⁵": "5",
            "⁶": "6",
            "⁷": "7",
            "⁸": "8",
            "⁹": "9",
            "ᴬ": "A",
            "ᴮ": "B",
            "ᴰ": "D",
            "ᴱ": "E",
            "ᴳ": "G",
            "ᴴ": "H",
            "ᴵ": "I",
            "ᴶ": "J",
            "ᴷ": "K",
            "ᴸ": "L",
            "ᴹ": "M",
            "ᴺ": "N",
            "ᴼ": "O",
            "ᴾ": "P",
            "ᴿ": "R",
            "ᵀ": "T",
            "ᵁ": "U",
            "ⱽ": "V",
            "ᵂ": "W",
            "ᵃ": "a",
            "ᵇ": "b",
            "ᶜ": "c",
            "ᵈ": "d",
            "ᵉ": "e",
            "ᶠ": "f",
            "ᵍ": "g",
            ʰ: "h",
            "ⁱ": "i",
            ʲ: "j",
            "ᵏ": "k",
            ˡ: "l",
            "ᵐ": "m",
            ⁿ: "n",
            "ᵒ": "o",
            "ᵖ": "p",
            ʳ: "r",
            ˢ: "s",
            "ᵗ": "t",
            "ᵘ": "u",
            "ᵛ": "v",
            ʷ: "w",
            ˣ: "x",
            ʸ: "y",
            "ᶻ": "z",
            "ᵝ": "β",
            "ᵞ": "γ",
            "ᵟ": "δ",
            "ᵠ": "ϕ",
            "ᵡ": "χ",
            "ᶿ": "θ"
          }), _a = {
            "́": {
              text: "\\'",
              math: "\\acute"
            },
            "̀": {
              text: "\\`",
              math: "\\grave"
            },
            "̈": {
              text: '\\"',
              math: "\\ddot"
            },
            "̃": {
              text: "\\~",
              math: "\\tilde"
            },
            "̄": {
              text: "\\=",
              math: "\\bar"
            },
            "̆": {
              text: "\\u",
              math: "\\breve"
            },
            "̌": {
              text: "\\v",
              math: "\\check"
            },
            "̂": {
              text: "\\^",
              math: "\\hat"
            },
            "̇": {
              text: "\\.",
              math: "\\dot"
            },
            "̊": {
              text: "\\r",
              math: "\\mathring"
            },
            "̋": {
              text: "\\H"
            },
            "̧": {
              text: "\\c"
            }
          }, _l = {
            á: "á",
            à: "à",
            ä: "ä",
            ǟ: "ǟ",
            ã: "ã",
            ā: "ā",
            ă: "ă",
            ắ: "ắ",
            ằ: "ằ",
            ẵ: "ẵ",
            ǎ: "ǎ",
            â: "â",
            ấ: "ấ",
            ầ: "ầ",
            ẫ: "ẫ",
            ȧ: "ȧ",
            ǡ: "ǡ",
            å: "å",
            ǻ: "ǻ",
            ḃ: "ḃ",
            ć: "ć",
            ḉ: "ḉ",
            č: "č",
            ĉ: "ĉ",
            ċ: "ċ",
            ç: "ç",
            ď: "ď",
            ḋ: "ḋ",
            ḑ: "ḑ",
            é: "é",
            è: "è",
            ë: "ë",
            ẽ: "ẽ",
            ē: "ē",
            ḗ: "ḗ",
            ḕ: "ḕ",
            ĕ: "ĕ",
            ḝ: "ḝ",
            ě: "ě",
            ê: "ê",
            ế: "ế",
            ề: "ề",
            ễ: "ễ",
            ė: "ė",
            ȩ: "ȩ",
            ḟ: "ḟ",
            ǵ: "ǵ",
            ḡ: "ḡ",
            ğ: "ğ",
            ǧ: "ǧ",
            ĝ: "ĝ",
            ġ: "ġ",
            ģ: "ģ",
            ḧ: "ḧ",
            ȟ: "ȟ",
            ĥ: "ĥ",
            ḣ: "ḣ",
            ḩ: "ḩ",
            í: "í",
            ì: "ì",
            ï: "ï",
            ḯ: "ḯ",
            ĩ: "ĩ",
            ī: "ī",
            ĭ: "ĭ",
            ǐ: "ǐ",
            î: "î",
            ǰ: "ǰ",
            ĵ: "ĵ",
            ḱ: "ḱ",
            ǩ: "ǩ",
            ķ: "ķ",
            ĺ: "ĺ",
            ľ: "ľ",
            ļ: "ļ",
            ḿ: "ḿ",
            ṁ: "ṁ",
            ń: "ń",
            ǹ: "ǹ",
            ñ: "ñ",
            ň: "ň",
            ṅ: "ṅ",
            ņ: "ņ",
            ó: "ó",
            ò: "ò",
            ö: "ö",
            ȫ: "ȫ",
            õ: "õ",
            ṍ: "ṍ",
            ṏ: "ṏ",
            ȭ: "ȭ",
            ō: "ō",
            ṓ: "ṓ",
            ṑ: "ṑ",
            ŏ: "ŏ",
            ǒ: "ǒ",
            ô: "ô",
            ố: "ố",
            ồ: "ồ",
            ỗ: "ỗ",
            ȯ: "ȯ",
            ȱ: "ȱ",
            ő: "ő",
            ṕ: "ṕ",
            ṗ: "ṗ",
            ŕ: "ŕ",
            ř: "ř",
            ṙ: "ṙ",
            ŗ: "ŗ",
            ś: "ś",
            ṥ: "ṥ",
            š: "š",
            ṧ: "ṧ",
            ŝ: "ŝ",
            ṡ: "ṡ",
            ş: "ş",
            ẗ: "ẗ",
            ť: "ť",
            ṫ: "ṫ",
            ţ: "ţ",
            ú: "ú",
            ù: "ù",
            ü: "ü",
            ǘ: "ǘ",
            ǜ: "ǜ",
            ǖ: "ǖ",
            ǚ: "ǚ",
            ũ: "ũ",
            ṹ: "ṹ",
            ū: "ū",
            ṻ: "ṻ",
            ŭ: "ŭ",
            ǔ: "ǔ",
            û: "û",
            ů: "ů",
            ű: "ű",
            ṽ: "ṽ",
            ẃ: "ẃ",
            ẁ: "ẁ",
            ẅ: "ẅ",
            ŵ: "ŵ",
            ẇ: "ẇ",
            ẘ: "ẘ",
            ẍ: "ẍ",
            ẋ: "ẋ",
            ý: "ý",
            ỳ: "ỳ",
            ÿ: "ÿ",
            ỹ: "ỹ",
            ȳ: "ȳ",
            ŷ: "ŷ",
            ẏ: "ẏ",
            ẙ: "ẙ",
            ź: "ź",
            ž: "ž",
            ẑ: "ẑ",
            ż: "ż",
            Á: "Á",
            À: "À",
            Ä: "Ä",
            Ǟ: "Ǟ",
            Ã: "Ã",
            Ā: "Ā",
            Ă: "Ă",
            Ắ: "Ắ",
            Ằ: "Ằ",
            Ẵ: "Ẵ",
            Ǎ: "Ǎ",
            Â: "Â",
            Ấ: "Ấ",
            Ầ: "Ầ",
            Ẫ: "Ẫ",
            Ȧ: "Ȧ",
            Ǡ: "Ǡ",
            Å: "Å",
            Ǻ: "Ǻ",
            Ḃ: "Ḃ",
            Ć: "Ć",
            Ḉ: "Ḉ",
            Č: "Č",
            Ĉ: "Ĉ",
            Ċ: "Ċ",
            Ç: "Ç",
            Ď: "Ď",
            Ḋ: "Ḋ",
            Ḑ: "Ḑ",
            É: "É",
            È: "È",
            Ë: "Ë",
            Ẽ: "Ẽ",
            Ē: "Ē",
            Ḗ: "Ḗ",
            Ḕ: "Ḕ",
            Ĕ: "Ĕ",
            Ḝ: "Ḝ",
            Ě: "Ě",
            Ê: "Ê",
            Ế: "Ế",
            Ề: "Ề",
            Ễ: "Ễ",
            Ė: "Ė",
            Ȩ: "Ȩ",
            Ḟ: "Ḟ",
            Ǵ: "Ǵ",
            Ḡ: "Ḡ",
            Ğ: "Ğ",
            Ǧ: "Ǧ",
            Ĝ: "Ĝ",
            Ġ: "Ġ",
            Ģ: "Ģ",
            Ḧ: "Ḧ",
            Ȟ: "Ȟ",
            Ĥ: "Ĥ",
            Ḣ: "Ḣ",
            Ḩ: "Ḩ",
            Í: "Í",
            Ì: "Ì",
            Ï: "Ï",
            Ḯ: "Ḯ",
            Ĩ: "Ĩ",
            Ī: "Ī",
            Ĭ: "Ĭ",
            Ǐ: "Ǐ",
            Î: "Î",
            İ: "İ",
            Ĵ: "Ĵ",
            Ḱ: "Ḱ",
            Ǩ: "Ǩ",
            Ķ: "Ķ",
            Ĺ: "Ĺ",
            Ľ: "Ľ",
            Ļ: "Ļ",
            Ḿ: "Ḿ",
            Ṁ: "Ṁ",
            Ń: "Ń",
            Ǹ: "Ǹ",
            Ñ: "Ñ",
            Ň: "Ň",
            Ṅ: "Ṅ",
            Ņ: "Ņ",
            Ó: "Ó",
            Ò: "Ò",
            Ö: "Ö",
            Ȫ: "Ȫ",
            Õ: "Õ",
            Ṍ: "Ṍ",
            Ṏ: "Ṏ",
            Ȭ: "Ȭ",
            Ō: "Ō",
            Ṓ: "Ṓ",
            Ṑ: "Ṑ",
            Ŏ: "Ŏ",
            Ǒ: "Ǒ",
            Ô: "Ô",
            Ố: "Ố",
            Ồ: "Ồ",
            Ỗ: "Ỗ",
            Ȯ: "Ȯ",
            Ȱ: "Ȱ",
            Ő: "Ő",
            Ṕ: "Ṕ",
            Ṗ: "Ṗ",
            Ŕ: "Ŕ",
            Ř: "Ř",
            Ṙ: "Ṙ",
            Ŗ: "Ŗ",
            Ś: "Ś",
            Ṥ: "Ṥ",
            Š: "Š",
            Ṧ: "Ṧ",
            Ŝ: "Ŝ",
            Ṡ: "Ṡ",
            Ş: "Ş",
            Ť: "Ť",
            Ṫ: "Ṫ",
            Ţ: "Ţ",
            Ú: "Ú",
            Ù: "Ù",
            Ü: "Ü",
            Ǘ: "Ǘ",
            Ǜ: "Ǜ",
            Ǖ: "Ǖ",
            Ǚ: "Ǚ",
            Ũ: "Ũ",
            Ṹ: "Ṹ",
            Ū: "Ū",
            Ṻ: "Ṻ",
            Ŭ: "Ŭ",
            Ǔ: "Ǔ",
            Û: "Û",
            Ů: "Ů",
            Ű: "Ű",
            Ṽ: "Ṽ",
            Ẃ: "Ẃ",
            Ẁ: "Ẁ",
            Ẅ: "Ẅ",
            Ŵ: "Ŵ",
            Ẇ: "Ẇ",
            Ẍ: "Ẍ",
            Ẋ: "Ẋ",
            Ý: "Ý",
            Ỳ: "Ỳ",
            Ÿ: "Ÿ",
            Ỹ: "Ỹ",
            Ȳ: "Ȳ",
            Ŷ: "Ŷ",
            Ẏ: "Ẏ",
            Ź: "Ź",
            Ž: "Ž",
            Ẑ: "Ẑ",
            Ż: "Ż",
            ά: "ά",
            ὰ: "ὰ",
            ᾱ: "ᾱ",
            ᾰ: "ᾰ",
            έ: "έ",
            ὲ: "ὲ",
            ή: "ή",
            ὴ: "ὴ",
            ί: "ί",
            ὶ: "ὶ",
            ϊ: "ϊ",
            ΐ: "ΐ",
            ῒ: "ῒ",
            ῑ: "ῑ",
            ῐ: "ῐ",
            ό: "ό",
            ὸ: "ὸ",
            ύ: "ύ",
            ὺ: "ὺ",
            ϋ: "ϋ",
            ΰ: "ΰ",
            ῢ: "ῢ",
            ῡ: "ῡ",
            ῠ: "ῠ",
            ώ: "ώ",
            ὼ: "ὼ",
            Ύ: "Ύ",
            Ὺ: "Ὺ",
            Ϋ: "Ϋ",
            Ῡ: "Ῡ",
            Ῠ: "Ῠ",
            Ώ: "Ώ",
            Ὼ: "Ὼ"
          }, xl = /* @__PURE__ */ function() {
            function f(t, n) {
              this.mode = void 0, this.gullet = void 0, this.settings = void 0, this.leftrightDepth = void 0, this.nextToken = void 0, this.mode = "math", this.gullet = new tu(t, n, this.mode), this.settings = n, this.leftrightDepth = 0;
            }
            var e = f.prototype;
            return e.expect = function(n, l) {
              if (l === void 0 && (l = !0), this.fetch().text !== n)
                throw new c("Expected '" + n + "', got '" + this.fetch().text + "'", this.fetch());
              l && this.consume();
            }, e.consume = function() {
              this.nextToken = null;
            }, e.fetch = function() {
              return this.nextToken == null && (this.nextToken = this.gullet.expandNextToken()), this.nextToken;
            }, e.switchMode = function(n) {
              this.mode = n, this.gullet.switchMode(n);
            }, e.parse = function() {
              this.settings.globalGroup || this.gullet.beginGroup(), this.settings.colorIsTextColor && this.gullet.macros.set("\\color", "\\textcolor");
              try {
                var n = this.parseExpression(!1);
                return this.expect("EOF"), this.settings.globalGroup || this.gullet.endGroup(), n;
              } finally {
                this.gullet.endGroups();
              }
            }, e.subparse = function(n) {
              var l = this.nextToken;
              this.consume(), this.gullet.pushToken(new T0("}")), this.gullet.pushTokens(n);
              var u = this.parseExpression(!1);
              return this.expect("}"), this.nextToken = l, u;
            }, e.parseExpression = function(n, l) {
              for (var u = []; ; ) {
                this.mode === "math" && this.consumeSpaces();
                var m = this.fetch();
                if (f.endOfExpression.indexOf(m.text) !== -1 || l && m.text === l || n && z0[m.text] && z0[m.text].infix)
                  break;
                var b = this.parseAtom(l);
                if (b) {
                  if (b.type === "internal")
                    continue;
                } else
                  break;
                u.push(b);
              }
              return this.mode === "text" && this.formLigatures(u), this.handleInfixNodes(u);
            }, e.handleInfixNodes = function(n) {
              for (var l = -1, u, m = 0; m < n.length; m++)
                if (n[m].type === "infix") {
                  if (l !== -1)
                    throw new c("only one infix operator per group", n[m].token);
                  l = m, u = n[m].replaceWith;
                }
              if (l !== -1 && u) {
                var b, k, x = n.slice(0, l), z = n.slice(l + 1);
                x.length === 1 && x[0].type === "ordgroup" ? b = x[0] : b = {
                  type: "ordgroup",
                  mode: this.mode,
                  body: x
                }, z.length === 1 && z[0].type === "ordgroup" ? k = z[0] : k = {
                  type: "ordgroup",
                  mode: this.mode,
                  body: z
                };
                var N;
                return u === "\\\\abovefrac" ? N = this.callFunction(u, [b, n[l], k], []) : N = this.callFunction(u, [b, k], []), [N];
              } else
                return n;
            }, e.handleSupSubscript = function(n) {
              var l = this.fetch(), u = l.text;
              this.consume(), this.consumeSpaces();
              var m = this.parseGroup(n);
              if (!m)
                throw new c("Expected group after '" + u + "'", l);
              return m;
            }, e.formatUnsupportedCmd = function(n) {
              for (var l = [], u = 0; u < n.length; u++)
                l.push({
                  type: "textord",
                  mode: "text",
                  text: n[u]
                });
              var m = {
                type: "text",
                mode: this.mode,
                body: l
              }, b = {
                type: "color",
                mode: this.mode,
                color: this.settings.errorColor,
                body: [m]
              };
              return b;
            }, e.parseAtom = function(n) {
              var l = this.parseGroup("atom", n);
              if (this.mode === "text")
                return l;
              for (var u, m; ; ) {
                this.consumeSpaces();
                var b = this.fetch();
                if (b.text === "\\limits" || b.text === "\\nolimits") {
                  if (l && l.type === "op") {
                    var k = b.text === "\\limits";
                    l.limits = k, l.alwaysHandleSupSub = !0;
                  } else if (l && l.type === "operatorname")
                    l.alwaysHandleSupSub && (l.limits = b.text === "\\limits");
                  else
                    throw new c("Limit controls must follow a math operator", b);
                  this.consume();
                } else if (b.text === "^") {
                  if (u)
                    throw new c("Double superscript", b);
                  u = this.handleSupSubscript("superscript");
                } else if (b.text === "_") {
                  if (m)
                    throw new c("Double subscript", b);
                  m = this.handleSupSubscript("subscript");
                } else if (b.text === "'") {
                  if (u)
                    throw new c("Double superscript", b);
                  var x = {
                    type: "textord",
                    mode: this.mode,
                    text: "\\prime"
                  }, z = [x];
                  for (this.consume(); this.fetch().text === "'"; )
                    z.push(x), this.consume();
                  this.fetch().text === "^" && z.push(this.handleSupSubscript("superscript")), u = {
                    type: "ordgroup",
                    mode: this.mode,
                    body: z
                  };
                } else if (dn[b.text]) {
                  var N = dn[b.text], H = kl.test(b.text);
                  for (this.consume(); ; ) {
                    var P = this.fetch().text;
                    if (!dn[P] || kl.test(P) !== H)
                      break;
                    this.consume(), N += dn[P];
                  }
                  var V = new f(N, this.settings).parse();
                  H ? m = {
                    type: "ordgroup",
                    mode: "math",
                    body: V
                  } : u = {
                    type: "ordgroup",
                    mode: "math",
                    body: V
                  };
                } else
                  break;
              }
              return u || m ? {
                type: "supsub",
                mode: this.mode,
                base: l,
                sup: u,
                sub: m
              } : l;
            }, e.parseFunction = function(n, l) {
              var u = this.fetch(), m = u.text, b = z0[m];
              if (!b)
                return null;
              if (this.consume(), l && l !== "atom" && !b.allowedInArgument)
                throw new c("Got function '" + m + "' with no arguments" + (l ? " as " + l : ""), u);
              if (this.mode === "text" && !b.allowedInText)
                throw new c("Can't use function '" + m + "' in text mode", u);
              if (this.mode === "math" && b.allowedInMath === !1)
                throw new c("Can't use function '" + m + "' in math mode", u);
              var k = this.parseArguments(m, b), x = k.args, z = k.optArgs;
              return this.callFunction(m, x, z, u, n);
            }, e.callFunction = function(n, l, u, m, b) {
              var k = {
                funcName: n,
                parser: this,
                token: m,
                breakOnTokenText: b
              }, x = z0[n];
              if (x && x.handler)
                return x.handler(k, l, u);
              throw new c("No function handler for " + n);
            }, e.parseArguments = function(n, l) {
              var u = l.numArgs + l.numOptionalArgs;
              if (u === 0)
                return {
                  args: [],
                  optArgs: []
                };
              for (var m = [], b = [], k = 0; k < u; k++) {
                var x = l.argTypes && l.argTypes[k], z = k < l.numOptionalArgs;
                (l.primitive && x == null || // \sqrt expands into primitive if optional argument doesn't exist
                l.type === "sqrt" && k === 1 && b[0] == null) && (x = "primitive");
                var N = this.parseGroupOfType("argument to '" + n + "'", x, z);
                if (z)
                  b.push(N);
                else if (N != null)
                  m.push(N);
                else
                  throw new c("Null argument, please report this as a bug");
              }
              return {
                args: m,
                optArgs: b
              };
            }, e.parseGroupOfType = function(n, l, u) {
              switch (l) {
                case "color":
                  return this.parseColorGroup(u);
                case "size":
                  return this.parseSizeGroup(u);
                case "url":
                  return this.parseUrlGroup(u);
                case "math":
                case "text":
                  return this.parseArgumentGroup(u, l);
                case "hbox": {
                  var m = this.parseArgumentGroup(u, "text");
                  return m != null ? {
                    type: "styling",
                    mode: m.mode,
                    body: [m],
                    style: "text"
                    // simulate \textstyle
                  } : null;
                }
                case "raw": {
                  var b = this.parseStringGroup("raw", u);
                  return b != null ? {
                    type: "raw",
                    mode: "text",
                    string: b.text
                  } : null;
                }
                case "primitive": {
                  if (u)
                    throw new c("A primitive argument cannot be optional");
                  var k = this.parseGroup(n);
                  if (k == null)
                    throw new c("Expected group as " + n, this.fetch());
                  return k;
                }
                case "original":
                case null:
                case void 0:
                  return this.parseArgumentGroup(u);
                default:
                  throw new c("Unknown group type as " + n, this.fetch());
              }
            }, e.consumeSpaces = function() {
              for (; this.fetch().text === " "; )
                this.consume();
            }, e.parseStringGroup = function(n, l) {
              var u = this.gullet.scanArgument(l);
              if (u == null)
                return null;
              for (var m = "", b; (b = this.fetch()).text !== "EOF"; )
                m += b.text, this.consume();
              return this.consume(), u.text = m, u;
            }, e.parseRegexGroup = function(n, l) {
              for (var u = this.fetch(), m = u, b = "", k; (k = this.fetch()).text !== "EOF" && n.test(b + k.text); )
                m = k, b += m.text, this.consume();
              if (b === "")
                throw new c("Invalid " + l + ": '" + u.text + "'", u);
              return u.range(m, b);
            }, e.parseColorGroup = function(n) {
              var l = this.parseStringGroup("color", n);
              if (l == null)
                return null;
              var u = /^(#[a-f0-9]{3}|#?[a-f0-9]{6}|[a-z]+)$/i.exec(l.text);
              if (!u)
                throw new c("Invalid color: '" + l.text + "'", l);
              var m = u[0];
              return /^[0-9a-f]{6}$/i.test(m) && (m = "#" + m), {
                type: "color-token",
                mode: this.mode,
                color: m
              };
            }, e.parseSizeGroup = function(n) {
              var l, u = !1;
              if (this.gullet.consumeSpaces(), !n && this.gullet.future().text !== "{" ? l = this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/, "size") : l = this.parseStringGroup("size", n), !l)
                return null;
              !n && l.text.length === 0 && (l.text = "0pt", u = !0);
              var m = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(l.text);
              if (!m)
                throw new c("Invalid size: '" + l.text + "'", l);
              var b = {
                number: +(m[1] + m[2]),
                // sign + magnitude, cast to number
                unit: m[3]
              };
              if (!lr(b))
                throw new c("Invalid unit: '" + b.unit + "'", l);
              return {
                type: "size",
                mode: this.mode,
                value: b,
                isBlank: u
              };
            }, e.parseUrlGroup = function(n) {
              this.gullet.lexer.setCatcode("%", 13), this.gullet.lexer.setCatcode("~", 12);
              var l = this.parseStringGroup("url", n);
              if (this.gullet.lexer.setCatcode("%", 14), this.gullet.lexer.setCatcode("~", 13), l == null)
                return null;
              var u = l.text.replace(/\\([#$%&~_^{}])/g, "$1");
              return {
                type: "url",
                mode: this.mode,
                url: u
              };
            }, e.parseArgumentGroup = function(n, l) {
              var u = this.gullet.scanArgument(n);
              if (u == null)
                return null;
              var m = this.mode;
              l && this.switchMode(l), this.gullet.beginGroup();
              var b = this.parseExpression(!1, "EOF");
              this.expect("EOF"), this.gullet.endGroup();
              var k = {
                type: "ordgroup",
                mode: this.mode,
                loc: u.loc,
                body: b
              };
              return l && this.switchMode(m), k;
            }, e.parseGroup = function(n, l) {
              var u = this.fetch(), m = u.text, b;
              if (m === "{" || m === "\\begingroup") {
                this.consume();
                var k = m === "{" ? "}" : "\\endgroup";
                this.gullet.beginGroup();
                var x = this.parseExpression(!1, k), z = this.fetch();
                this.expect(k), this.gullet.endGroup(), b = {
                  type: "ordgroup",
                  mode: this.mode,
                  loc: Gt.range(u, z),
                  body: x,
                  // A group formed by \begingroup...\endgroup is a semi-simple group
                  // which doesn't affect spacing in math mode, i.e., is transparent.
                  // https://tex.stackexchange.com/questions/1930/when-should-one-
                  // use-begingroup-instead-of-bgroup
                  semisimple: m === "\\begingroup" || void 0
                };
              } else if (b = this.parseFunction(l, n) || this.parseSymbol(), b == null && m[0] === "\\" && !wl.hasOwnProperty(m)) {
                if (this.settings.throwOnError)
                  throw new c("Undefined control sequence: " + m, u);
                b = this.formatUnsupportedCmd(m), this.consume();
              }
              return b;
            }, e.formLigatures = function(n) {
              for (var l = n.length - 1, u = 0; u < l; ++u) {
                var m = n[u], b = m.text;
                b === "-" && n[u + 1].text === "-" && (u + 1 < l && n[u + 2].text === "-" ? (n.splice(u, 3, {
                  type: "textord",
                  mode: "text",
                  loc: Gt.range(m, n[u + 2]),
                  text: "---"
                }), l -= 2) : (n.splice(u, 2, {
                  type: "textord",
                  mode: "text",
                  loc: Gt.range(m, n[u + 1]),
                  text: "--"
                }), l -= 1)), (b === "'" || b === "`") && n[u + 1].text === b && (n.splice(u, 2, {
                  type: "textord",
                  mode: "text",
                  loc: Gt.range(m, n[u + 1]),
                  text: b + b
                }), l -= 1);
              }
            }, e.parseSymbol = function() {
              var n = this.fetch(), l = n.text;
              if (/^\\verb[^a-zA-Z]/.test(l)) {
                this.consume();
                var u = l.slice(5), m = u.charAt(0) === "*";
                if (m && (u = u.slice(1)), u.length < 2 || u.charAt(0) !== u.slice(-1))
                  throw new c(`\\verb assertion failed --
                    please report what input caused this bug`);
                return u = u.slice(1, -1), {
                  type: "verb",
                  mode: "text",
                  body: u,
                  star: m
                };
              }
              _l.hasOwnProperty(l[0]) && !Ve[this.mode][l[0]] && (this.settings.strict && this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Accented Unicode text character "' + l[0] + '" used in math mode', n), l = _l[l[0]] + l.slice(1));
              var b = K1.exec(l);
              b && (l = l.substring(0, b.index), l === "i" ? l = "ı" : l === "j" && (l = "ȷ"));
              var k;
              if (Ve[this.mode][l]) {
                this.settings.strict && this.mode === "math" && Yn.indexOf(l) >= 0 && this.settings.reportNonstrict("unicodeTextInMathMode", 'Latin-1/Unicode text character "' + l[0] + '" used in math mode', n);
                var x = Ve[this.mode][l].group, z = Gt.range(n), N;
                if (o0.hasOwnProperty(x)) {
                  var H = x;
                  N = {
                    type: "atom",
                    mode: this.mode,
                    family: H,
                    loc: z,
                    text: l
                  };
                } else
                  N = {
                    type: x,
                    mode: this.mode,
                    loc: z,
                    text: l
                  };
                k = N;
              } else if (l.charCodeAt(0) >= 128)
                this.settings.strict && (Xe(l.charCodeAt(0)) ? this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Unicode text character "' + l[0] + '" used in math mode', n) : this.settings.reportNonstrict("unknownSymbol", 'Unrecognized Unicode character "' + l[0] + '"' + (" (" + l.charCodeAt(0) + ")"), n)), k = {
                  type: "textord",
                  mode: "text",
                  loc: Gt.range(n),
                  text: l
                };
              else
                return null;
              if (this.consume(), b)
                for (var P = 0; P < b[0].length; P++) {
                  var V = b[0][P];
                  if (!_a[V])
                    throw new c("Unknown accent ' " + V + "'", n);
                  var ee = _a[V][this.mode] || _a[V].text;
                  if (!ee)
                    throw new c("Accent " + V + " unsupported in " + this.mode + " mode", n);
                  k = {
                    type: "accent",
                    mode: this.mode,
                    loc: Gt.range(n),
                    label: ee,
                    isStretchy: !1,
                    isShifty: !0,
                    // $FlowFixMe
                    base: k
                  };
                }
              return k;
            }, f;
          }();
          xl.endOfExpression = ["}", "\\endgroup", "\\end", "\\right", "&"];
          var ru = function(e, t) {
            if (!(typeof e == "string" || e instanceof String))
              throw new TypeError("KaTeX can only parse string typed expression");
            var n = new xl(e, t);
            delete n.gullet.macros.current["\\df@tag"];
            var l = n.parse();
            if (delete n.gullet.macros.current["\\current@color"], delete n.gullet.macros.current["\\color"], n.gullet.macros.get("\\df@tag")) {
              if (!t.displayMode)
                throw new c("\\tag works only in display equations");
              l = [{
                type: "tag",
                mode: "text",
                body: l,
                tag: n.subparse([new T0("\\df@tag")])
              }];
            }
            return l;
          }, xa = ru, Sl = function(e, t, n) {
            t.textContent = "";
            var l = Sa(e, n).toNode();
            t.appendChild(l);
          };
          typeof document < "u" && document.compatMode !== "CSS1Compat" && (typeof console < "u" && console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."), Sl = function() {
            throw new c("KaTeX doesn't work in quirks mode.");
          });
          var nu = function(e, t) {
            var n = Sa(e, t).toMarkup();
            return n;
          }, au = function(e, t) {
            var n = new L(t);
            return xa(e, n);
          }, Al = function(e, t, n) {
            if (n.throwOnError || !(e instanceof c))
              throw e;
            var l = R.makeSpan(["katex-error"], [new ft(t)]);
            return l.setAttribute("title", e.toString()), l.setAttribute("style", "color:" + n.errorColor), l;
          }, Sa = function(e, t) {
            var n = new L(t);
            try {
              var l = xa(e, n);
              return u1(l, e, n);
            } catch (u) {
              return Al(u, e, n);
            }
          }, iu = function(e, t) {
            var n = new L(t);
            try {
              var l = xa(e, n);
              return c1(l, e, n);
            } catch (u) {
              return Al(u, e, n);
            }
          }, lu = {
            /**
             * Current KaTeX version
             */
            version: "0.16.9",
            /**
             * Renders the given LaTeX into an HTML+MathML combination, and adds
             * it as a child to the specified DOM node.
             */
            render: Sl,
            /**
             * Renders the given LaTeX into an HTML+MathML combination string,
             * for sending to the client.
             */
            renderToString: nu,
            /**
             * KaTeX error, usually during parsing.
             */
            ParseError: c,
            /**
             * The shema of Settings
             */
            SETTINGS_SCHEMA: F,
            /**
             * Parses the given LaTeX into KaTeX's internal parse tree structure,
             * without rendering to HTML or MathML.
             *
             * NOTE: This method is not currently recommended for public use.
             * The internal tree representation is unstable and is very likely
             * to change. Use at your own risk.
             */
            __parse: au,
            /**
             * Renders the given LaTeX into an HTML+MathML internal DOM tree
             * representation, without flattening that representation to a string.
             *
             * NOTE: This method is not currently recommended for public use.
             * The internal tree representation is unstable and is very likely
             * to change. Use at your own risk.
             */
            __renderToDomTree: Sa,
            /**
             * Renders the given LaTeX into an HTML internal DOM tree representation,
             * without MathML and without flattening that representation to a string.
             *
             * NOTE: This method is not currently recommended for public use.
             * The internal tree representation is unstable and is very likely
             * to change. Use at your own risk.
             */
            __renderToHTMLTree: iu,
            /**
             * extends internal font metrics object with a new object
             * each key in the new object represents a font name
            */
            __setFontMetrics: w0,
            /**
             * adds a new symbol to builtin symbols table
             */
            __defineSymbol: h,
            /**
             * adds a new function to builtin function list,
             * which directly produce parse tree elements
             * and have their own html/mathml builders
             */
            __defineFunction: le,
            /**
             * adds a new macro to builtin macro list
             */
            __defineMacro: _,
            /**
             * Expose the dom tree node types, which can be useful for type checking nodes.
             *
             * NOTE: This method is not currently recommended for public use.
             * The internal tree representation is unstable and is very likely
             * to change. Use at your own risk.
             */
            __domTree: {
              Span: Dt,
              Anchor: Mr,
              SymbolNode: ft,
              SvgNode: Nt,
              PathNode: Xt,
              LineNode: _0
            }
          }, su = lu;
          return i = i.default, i;
        }()
      );
    });
  }(Va)), Va.exports;
}
(function(s, r) {
  (function(i, o) {
    s.exports = o(R4());
  })(typeof self < "u" ? self : Rn, function(a) {
    return (
      /******/
      function() {
        var i = {
          /***/
          771: (
            /***/
            function(g) {
              g.exports = a;
            }
          )
          /******/
        }, o = {};
        function c(g) {
          var v = o[g];
          if (v !== void 0)
            return v.exports;
          var w = o[g] = {
            /******/
            // no module.id needed
            /******/
            // no module.loaded needed
            /******/
            exports: {}
            /******/
          };
          return i[g](w, w.exports, c), w.exports;
        }
        (function() {
          c.n = function(g) {
            var v = g && g.__esModule ? (
              /******/
              function() {
                return g.default;
              }
            ) : (
              /******/
              function() {
                return g;
              }
            );
            return c.d(v, { a: v }), v;
          };
        })(), function() {
          c.d = function(g, v) {
            for (var w in v)
              c.o(v, w) && !c.o(g, w) && Object.defineProperty(g, w, { enumerable: !0, get: v[w] });
          };
        }(), function() {
          c.o = function(g, v) {
            return Object.prototype.hasOwnProperty.call(g, v);
          };
        }();
        var p = {};
        return function() {
          c.d(p, {
            default: function() {
              return (
                /* binding */
                U
              );
            }
          });
          var g = c(771), v = /* @__PURE__ */ c.n(g), w = function(C, L, B) {
            for (var O = B, G = 0, Q = C.length; O < L.length; ) {
              var Y = L[O];
              if (G <= 0 && L.slice(O, O + Q) === C)
                return O;
              Y === "\\" ? O++ : Y === "{" ? G++ : Y === "}" && G--, O++;
            }
            return -1;
          }, S = function(C) {
            return C.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
          }, D = /^\\begin{/, q = function(C, L) {
            for (var B, O = [], G = new RegExp("(" + L.map(function(ge) {
              return S(ge.left);
            }).join("|") + ")"); B = C.search(G), B !== -1; ) {
              B > 0 && (O.push({
                type: "text",
                data: C.slice(0, B)
              }), C = C.slice(B));
              var Q = L.findIndex(function(ge) {
                return C.startsWith(ge.left);
              });
              if (B = w(L[Q].right, C, L[Q].left.length), B === -1)
                break;
              var Y = C.slice(0, B + L[Q].right.length), ue = D.test(Y) ? Y : C.slice(L[Q].left.length, B);
              O.push({
                type: "math",
                data: ue,
                rawData: Y,
                display: L[Q].display
              }), C = C.slice(B + L[Q].right.length);
            }
            return C !== "" && O.push({
              type: "text",
              data: C
            }), O;
          }, Z = q, j = function(C, L) {
            var B = Z(C, L.delimiters);
            if (B.length === 1 && B[0].type === "text")
              return null;
            for (var O = document.createDocumentFragment(), G = 0; G < B.length; G++)
              if (B[G].type === "text")
                O.appendChild(document.createTextNode(B[G].data));
              else {
                var Q = document.createElement("span"), Y = B[G].data;
                L.displayMode = B[G].display;
                try {
                  L.preProcess && (Y = L.preProcess(Y)), v().render(Y, Q, L);
                } catch (ue) {
                  if (!(ue instanceof v().ParseError))
                    throw ue;
                  L.errorCallback("KaTeX auto-render: Failed to parse `" + B[G].data + "` with ", ue), O.appendChild(document.createTextNode(B[G].rawData));
                  continue;
                }
                O.appendChild(Q);
              }
            return O;
          }, re = function F(C, L) {
            for (var B = 0; B < C.childNodes.length; B++) {
              var O = C.childNodes[B];
              if (O.nodeType === 3) {
                for (var G = O.textContent, Q = O.nextSibling, Y = 0; Q && Q.nodeType === Node.TEXT_NODE; )
                  G += Q.textContent, Q = Q.nextSibling, Y++;
                var ue = j(G, L);
                if (ue) {
                  for (var ge = 0; ge < Y; ge++)
                    O.nextSibling.remove();
                  B += ue.childNodes.length - 1, C.replaceChild(ue, O);
                } else
                  B += Y;
              } else
                O.nodeType === 1 && function() {
                  var Fe = " " + O.className + " ", Se = L.ignoredTags.indexOf(O.nodeName.toLowerCase()) === -1 && L.ignoredClasses.every(function(Le) {
                    return Fe.indexOf(" " + Le + " ") === -1;
                  });
                  Se && F(O, L);
                }();
            }
          }, $ = function(C, L) {
            if (!C)
              throw new Error("No element provided to render");
            var B = {};
            for (var O in L)
              L.hasOwnProperty(O) && (B[O] = L[O]);
            B.delimiters = B.delimiters || [
              {
                left: "$$",
                right: "$$",
                display: !0
              },
              {
                left: "\\(",
                right: "\\)",
                display: !1
              },
              // LaTeX uses $…$, but it ruins the display of normal `$` in text:
              // {left: "$", right: "$", display: false},
              // $ must come after $$
              // Render AMS environments even if outside $$…$$ delimiters.
              {
                left: "\\begin{equation}",
                right: "\\end{equation}",
                display: !0
              },
              {
                left: "\\begin{align}",
                right: "\\end{align}",
                display: !0
              },
              {
                left: "\\begin{alignat}",
                right: "\\end{alignat}",
                display: !0
              },
              {
                left: "\\begin{gather}",
                right: "\\end{gather}",
                display: !0
              },
              {
                left: "\\begin{CD}",
                right: "\\end{CD}",
                display: !0
              },
              {
                left: "\\[",
                right: "\\]",
                display: !0
              }
            ], B.ignoredTags = B.ignoredTags || ["script", "noscript", "style", "textarea", "pre", "code", "option"], B.ignoredClasses = B.ignoredClasses || [], B.errorCallback = B.errorCallback || console.error, B.macros = B.macros || {}, re(C, B);
          }, U = $;
        }(), p = p.default, p;
      }()
    );
  });
})(ko);
var F4 = ko.exports;
const L4 = /* @__PURE__ */ wo(F4);
function ai() {
  return {
    async: !1,
    baseUrl: null,
    breaks: !1,
    extensions: null,
    gfm: !0,
    headerIds: !1,
    headerPrefix: "",
    highlight: null,
    hooks: null,
    langPrefix: "language-",
    mangle: !1,
    pedantic: !1,
    renderer: null,
    sanitize: !1,
    sanitizer: null,
    silent: !1,
    smartypants: !1,
    tokenizer: null,
    walkTokens: null,
    xhtml: !1
  };
}
let tr = ai();
function _o(s) {
  tr = s;
}
const xo = /[&<>"']/, I4 = new RegExp(xo.source, "g"), So = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, O4 = new RegExp(So.source, "g"), q4 = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, Jl = (s) => q4[s];
function ht(s, r) {
  if (r) {
    if (xo.test(s))
      return s.replace(I4, Jl);
  } else if (So.test(s))
    return s.replace(O4, Jl);
  return s;
}
const P4 = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function Ao(s) {
  return s.replace(P4, (r, a) => (a = a.toLowerCase(), a === "colon" ? ":" : a.charAt(0) === "#" ? a.charAt(1) === "x" ? String.fromCharCode(parseInt(a.substring(2), 16)) : String.fromCharCode(+a.substring(1)) : ""));
}
const H4 = /(^|[^\[])\^/g;
function Ne(s, r) {
  s = typeof s == "string" ? s : s.source, r = r || "";
  const a = {
    replace: (i, o) => (o = typeof o == "object" && "source" in o ? o.source : o, o = o.replace(H4, "$1"), s = s.replace(i, o), a),
    getRegex: () => new RegExp(s, r)
  };
  return a;
}
const U4 = /[^\w:]/g, G4 = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
function $l(s, r, a) {
  if (s) {
    let i;
    try {
      i = decodeURIComponent(Ao(a)).replace(U4, "").toLowerCase();
    } catch {
      return null;
    }
    if (i.indexOf("javascript:") === 0 || i.indexOf("vbscript:") === 0 || i.indexOf("data:") === 0)
      return null;
  }
  r && !G4.test(a) && (a = Y4(r, a));
  try {
    a = encodeURI(a).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return a;
}
const An = {}, V4 = /^[^:]+:\/*[^/]*$/, W4 = /^([^:]+:)[\s\S]*$/, j4 = /^([^:]+:\/*[^/]*)[\s\S]*$/;
function Y4(s, r) {
  An[" " + s] || (V4.test(s) ? An[" " + s] = s + "/" : An[" " + s] = Dn(s, "/", !0)), s = An[" " + s];
  const a = s.indexOf(":") === -1;
  return r.substring(0, 2) === "//" ? a ? r : s.replace(W4, "$1") + r : r.charAt(0) === "/" ? a ? r : s.replace(j4, "$1") + r : s + r;
}
const Fn = { exec: () => null };
function es(s, r) {
  const a = s.replace(/\|/g, (c, p, g) => {
    let v = !1, w = p;
    for (; --w >= 0 && g[w] === "\\"; )
      v = !v;
    return v ? "|" : " |";
  }), i = a.split(/ \|/);
  let o = 0;
  if (i[0].trim() || i.shift(), i.length > 0 && !i[i.length - 1].trim() && i.pop(), r)
    if (i.length > r)
      i.splice(r);
    else
      for (; i.length < r; )
        i.push("");
  for (; o < i.length; o++)
    i[o] = i[o].trim().replace(/\\\|/g, "|");
  return i;
}
function Dn(s, r, a) {
  const i = s.length;
  if (i === 0)
    return "";
  let o = 0;
  for (; o < i; ) {
    const c = s.charAt(i - o - 1);
    if (c === r && !a)
      o++;
    else if (c !== r && a)
      o++;
    else
      break;
  }
  return s.slice(0, i - o);
}
function X4(s, r) {
  if (s.indexOf(r[1]) === -1)
    return -1;
  let a = 0;
  for (let i = 0; i < s.length; i++)
    if (s[i] === "\\")
      i++;
    else if (s[i] === r[0])
      a++;
    else if (s[i] === r[1] && (a--, a < 0))
      return i;
  return -1;
}
function Z4(s, r) {
  !s || s.silent || (r && console.warn("marked(): callback is deprecated since version 5.0.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/using_pro#async"), (s.sanitize || s.sanitizer) && console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options"), (s.highlight || s.langPrefix !== "language-") && console.warn("marked(): highlight and langPrefix parameters are deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-highlight."), s.mangle && console.warn("marked(): mangle parameter is enabled by default, but is deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install https://www.npmjs.com/package/marked-mangle, or disable by setting `{mangle: false}`."), s.baseUrl && console.warn("marked(): baseUrl parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-base-url."), s.smartypants && console.warn("marked(): smartypants parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-smartypants."), s.xhtml && console.warn("marked(): xhtml parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-xhtml."), (s.headerIds || s.headerPrefix) && console.warn("marked(): headerIds and headerPrefix parameters enabled by default, but are deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install  https://www.npmjs.com/package/marked-gfm-heading-id, or disable by setting `{headerIds: false}`."));
}
function ts(s, r, a, i) {
  const o = r.href, c = r.title ? ht(r.title) : null, p = s[1].replace(/\\([\[\]])/g, "$1");
  if (s[0].charAt(0) !== "!") {
    i.state.inLink = !0;
    const g = {
      type: "link",
      raw: a,
      href: o,
      title: c,
      text: p,
      tokens: i.inlineTokens(p)
    };
    return i.state.inLink = !1, g;
  }
  return {
    type: "image",
    raw: a,
    href: o,
    title: c,
    text: ht(p)
  };
}
function K4(s, r) {
  const a = s.match(/^(\s+)(?:```)/);
  if (a === null)
    return r;
  const i = a[1];
  return r.split(`
`).map((o) => {
    const c = o.match(/^\s+/);
    if (c === null)
      return o;
    const [p] = c;
    return p.length >= i.length ? o.slice(i.length) : o;
  }).join(`
`);
}
class Ln {
  constructor(r) {
    De(this, "options");
    // TODO: Fix this rules type
    De(this, "rules");
    De(this, "lexer");
    this.options = r || tr;
  }
  space(r) {
    const a = this.rules.block.newline.exec(r);
    if (a && a[0].length > 0)
      return {
        type: "space",
        raw: a[0]
      };
  }
  code(r) {
    const a = this.rules.block.code.exec(r);
    if (a) {
      const i = a[0].replace(/^ {1,4}/gm, "");
      return {
        type: "code",
        raw: a[0],
        codeBlockStyle: "indented",
        text: this.options.pedantic ? i : Dn(i, `
`)
      };
    }
  }
  fences(r) {
    const a = this.rules.block.fences.exec(r);
    if (a) {
      const i = a[0], o = K4(i, a[3] || "");
      return {
        type: "code",
        raw: i,
        lang: a[2] ? a[2].trim().replace(this.rules.inline._escapes, "$1") : a[2],
        text: o
      };
    }
  }
  heading(r) {
    const a = this.rules.block.heading.exec(r);
    if (a) {
      let i = a[2].trim();
      if (/#$/.test(i)) {
        const o = Dn(i, "#");
        (this.options.pedantic || !o || / $/.test(o)) && (i = o.trim());
      }
      return {
        type: "heading",
        raw: a[0],
        depth: a[1].length,
        text: i,
        tokens: this.lexer.inline(i)
      };
    }
  }
  hr(r) {
    const a = this.rules.block.hr.exec(r);
    if (a)
      return {
        type: "hr",
        raw: a[0]
      };
  }
  blockquote(r) {
    const a = this.rules.block.blockquote.exec(r);
    if (a) {
      const i = a[0].replace(/^ *>[ \t]?/gm, ""), o = this.lexer.state.top;
      this.lexer.state.top = !0;
      const c = this.lexer.blockTokens(i);
      return this.lexer.state.top = o, {
        type: "blockquote",
        raw: a[0],
        tokens: c,
        text: i
      };
    }
  }
  list(r) {
    let a = this.rules.block.list.exec(r);
    if (a) {
      let i = a[1].trim();
      const o = i.length > 1, c = {
        type: "list",
        raw: "",
        ordered: o,
        start: o ? +i.slice(0, -1) : "",
        loose: !1,
        items: []
      };
      i = o ? `\\d{1,9}\\${i.slice(-1)}` : `\\${i}`, this.options.pedantic && (i = o ? i : "[*+-]");
      const p = new RegExp(`^( {0,3}${i})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      let g = "", v = "", w = !1;
      for (; r; ) {
        let S = !1;
        if (!(a = p.exec(r)) || this.rules.block.hr.test(r))
          break;
        g = a[0], r = r.substring(g.length);
        let D = a[2].split(`
`, 1)[0].replace(/^\t+/, (U) => " ".repeat(3 * U.length)), q = r.split(`
`, 1)[0], Z = 0;
        this.options.pedantic ? (Z = 2, v = D.trimLeft()) : (Z = a[2].search(/[^ ]/), Z = Z > 4 ? 1 : Z, v = D.slice(Z), Z += a[1].length);
        let j = !1;
        if (!D && /^ *$/.test(q) && (g += q + `
`, r = r.substring(q.length + 1), S = !0), !S) {
          const U = new RegExp(`^ {0,${Math.min(3, Z - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), F = new RegExp(`^ {0,${Math.min(3, Z - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), C = new RegExp(`^ {0,${Math.min(3, Z - 1)}}(?:\`\`\`|~~~)`), L = new RegExp(`^ {0,${Math.min(3, Z - 1)}}#`);
          for (; r; ) {
            const B = r.split(`
`, 1)[0];
            if (q = B, this.options.pedantic && (q = q.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), C.test(q) || L.test(q) || U.test(q) || F.test(r))
              break;
            if (q.search(/[^ ]/) >= Z || !q.trim())
              v += `
` + q.slice(Z);
            else {
              if (j || D.search(/[^ ]/) >= 4 || C.test(D) || L.test(D) || F.test(D))
                break;
              v += `
` + q;
            }
            !j && !q.trim() && (j = !0), g += B + `
`, r = r.substring(B.length + 1), D = q.slice(Z);
          }
        }
        c.loose || (w ? c.loose = !0 : /\n *\n *$/.test(g) && (w = !0));
        let re = null, $;
        this.options.gfm && (re = /^\[[ xX]\] /.exec(v), re && ($ = re[0] !== "[ ] ", v = v.replace(/^\[[ xX]\] +/, ""))), c.items.push({
          type: "list_item",
          raw: g,
          task: !!re,
          checked: $,
          loose: !1,
          text: v,
          tokens: []
        }), c.raw += g;
      }
      c.items[c.items.length - 1].raw = g.trimRight(), c.items[c.items.length - 1].text = v.trimRight(), c.raw = c.raw.trimRight();
      for (let S = 0; S < c.items.length; S++)
        if (this.lexer.state.top = !1, c.items[S].tokens = this.lexer.blockTokens(c.items[S].text, []), !c.loose) {
          const D = c.items[S].tokens.filter((Z) => Z.type === "space"), q = D.length > 0 && D.some((Z) => /\n.*\n/.test(Z.raw));
          c.loose = q;
        }
      if (c.loose)
        for (let S = 0; S < c.items.length; S++)
          c.items[S].loose = !0;
      return c;
    }
  }
  html(r) {
    const a = this.rules.block.html.exec(r);
    if (a) {
      const i = {
        type: "html",
        block: !0,
        raw: a[0],
        pre: !this.options.sanitizer && (a[1] === "pre" || a[1] === "script" || a[1] === "style"),
        text: a[0]
      };
      if (this.options.sanitize) {
        const o = this.options.sanitizer ? this.options.sanitizer(a[0]) : ht(a[0]), c = i;
        c.type = "paragraph", c.text = o, c.tokens = this.lexer.inline(o);
      }
      return i;
    }
  }
  def(r) {
    const a = this.rules.block.def.exec(r);
    if (a) {
      const i = a[1].toLowerCase().replace(/\s+/g, " "), o = a[2] ? a[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline._escapes, "$1") : "", c = a[3] ? a[3].substring(1, a[3].length - 1).replace(this.rules.inline._escapes, "$1") : a[3];
      return {
        type: "def",
        tag: i,
        raw: a[0],
        href: o,
        title: c
      };
    }
  }
  table(r) {
    const a = this.rules.block.table.exec(r);
    if (a) {
      const i = {
        type: "table",
        raw: a[0],
        header: es(a[1]).map((o) => ({ text: o, tokens: [] })),
        align: a[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
        rows: a[3] && a[3].trim() ? a[3].replace(/\n[ \t]*$/, "").split(`
`) : []
      };
      if (i.header.length === i.align.length) {
        let o = i.align.length, c, p, g, v;
        for (c = 0; c < o; c++) {
          const w = i.align[c];
          w && (/^ *-+: *$/.test(w) ? i.align[c] = "right" : /^ *:-+: *$/.test(w) ? i.align[c] = "center" : /^ *:-+ *$/.test(w) ? i.align[c] = "left" : i.align[c] = null);
        }
        for (o = i.rows.length, c = 0; c < o; c++)
          i.rows[c] = es(i.rows[c], i.header.length).map((w) => ({ text: w, tokens: [] }));
        for (o = i.header.length, p = 0; p < o; p++)
          i.header[p].tokens = this.lexer.inline(i.header[p].text);
        for (o = i.rows.length, p = 0; p < o; p++)
          for (v = i.rows[p], g = 0; g < v.length; g++)
            v[g].tokens = this.lexer.inline(v[g].text);
        return i;
      }
    }
  }
  lheading(r) {
    const a = this.rules.block.lheading.exec(r);
    if (a)
      return {
        type: "heading",
        raw: a[0],
        depth: a[2].charAt(0) === "=" ? 1 : 2,
        text: a[1],
        tokens: this.lexer.inline(a[1])
      };
  }
  paragraph(r) {
    const a = this.rules.block.paragraph.exec(r);
    if (a) {
      const i = a[1].charAt(a[1].length - 1) === `
` ? a[1].slice(0, -1) : a[1];
      return {
        type: "paragraph",
        raw: a[0],
        text: i,
        tokens: this.lexer.inline(i)
      };
    }
  }
  text(r) {
    const a = this.rules.block.text.exec(r);
    if (a)
      return {
        type: "text",
        raw: a[0],
        text: a[0],
        tokens: this.lexer.inline(a[0])
      };
  }
  escape(r) {
    const a = this.rules.inline.escape.exec(r);
    if (a)
      return {
        type: "escape",
        raw: a[0],
        text: ht(a[1])
      };
  }
  tag(r) {
    const a = this.rules.inline.tag.exec(r);
    if (a)
      return !this.lexer.state.inLink && /^<a /i.test(a[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && /^<\/a>/i.test(a[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(a[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(a[0]) && (this.lexer.state.inRawBlock = !1), {
        type: this.options.sanitize ? "text" : "html",
        raw: a[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        block: !1,
        text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(a[0]) : ht(a[0]) : a[0]
      };
  }
  link(r) {
    const a = this.rules.inline.link.exec(r);
    if (a) {
      const i = a[2].trim();
      if (!this.options.pedantic && /^</.test(i)) {
        if (!/>$/.test(i))
          return;
        const p = Dn(i.slice(0, -1), "\\");
        if ((i.length - p.length) % 2 === 0)
          return;
      } else {
        const p = X4(a[2], "()");
        if (p > -1) {
          const v = (a[0].indexOf("!") === 0 ? 5 : 4) + a[1].length + p;
          a[2] = a[2].substring(0, p), a[0] = a[0].substring(0, v).trim(), a[3] = "";
        }
      }
      let o = a[2], c = "";
      if (this.options.pedantic) {
        const p = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(o);
        p && (o = p[1], c = p[3]);
      } else
        c = a[3] ? a[3].slice(1, -1) : "";
      return o = o.trim(), /^</.test(o) && (this.options.pedantic && !/>$/.test(i) ? o = o.slice(1) : o = o.slice(1, -1)), ts(a, {
        href: o && o.replace(this.rules.inline._escapes, "$1"),
        title: c && c.replace(this.rules.inline._escapes, "$1")
      }, a[0], this.lexer);
    }
  }
  reflink(r, a) {
    let i;
    if ((i = this.rules.inline.reflink.exec(r)) || (i = this.rules.inline.nolink.exec(r))) {
      let o = (i[2] || i[1]).replace(/\s+/g, " ");
      if (o = a[o.toLowerCase()], !o) {
        const c = i[0].charAt(0);
        return {
          type: "text",
          raw: c,
          text: c
        };
      }
      return ts(i, o, i[0], this.lexer);
    }
  }
  emStrong(r, a, i = "") {
    let o = this.rules.inline.emStrong.lDelim.exec(r);
    if (!o || o[3] && i.match(/[\p{L}\p{N}]/u))
      return;
    if (!(o[1] || o[2] || "") || !i || this.rules.inline.punctuation.exec(i)) {
      const p = [...o[0]].length - 1;
      let g, v, w = p, S = 0;
      const D = o[0][0] === "*" ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
      for (D.lastIndex = 0, a = a.slice(-1 * r.length + p); (o = D.exec(a)) != null; ) {
        if (g = o[1] || o[2] || o[3] || o[4] || o[5] || o[6], !g)
          continue;
        if (v = [...g].length, o[3] || o[4]) {
          w += v;
          continue;
        } else if ((o[5] || o[6]) && p % 3 && !((p + v) % 3)) {
          S += v;
          continue;
        }
        if (w -= v, w > 0)
          continue;
        v = Math.min(v, v + w + S);
        const q = [...r].slice(0, p + o.index + v + 1).join("");
        if (Math.min(p, v) % 2) {
          const j = q.slice(1, -1);
          return {
            type: "em",
            raw: q,
            text: j,
            tokens: this.lexer.inlineTokens(j)
          };
        }
        const Z = q.slice(2, -2);
        return {
          type: "strong",
          raw: q,
          text: Z,
          tokens: this.lexer.inlineTokens(Z)
        };
      }
    }
  }
  codespan(r) {
    const a = this.rules.inline.code.exec(r);
    if (a) {
      let i = a[2].replace(/\n/g, " ");
      const o = /[^ ]/.test(i), c = /^ /.test(i) && / $/.test(i);
      return o && c && (i = i.substring(1, i.length - 1)), i = ht(i, !0), {
        type: "codespan",
        raw: a[0],
        text: i
      };
    }
  }
  br(r) {
    const a = this.rules.inline.br.exec(r);
    if (a)
      return {
        type: "br",
        raw: a[0]
      };
  }
  del(r) {
    const a = this.rules.inline.del.exec(r);
    if (a)
      return {
        type: "del",
        raw: a[0],
        text: a[2],
        tokens: this.lexer.inlineTokens(a[2])
      };
  }
  autolink(r, a) {
    const i = this.rules.inline.autolink.exec(r);
    if (i) {
      let o, c;
      return i[2] === "@" ? (o = ht(this.options.mangle ? a(i[1]) : i[1]), c = "mailto:" + o) : (o = ht(i[1]), c = o), {
        type: "link",
        raw: i[0],
        text: o,
        href: c,
        tokens: [
          {
            type: "text",
            raw: o,
            text: o
          }
        ]
      };
    }
  }
  url(r, a) {
    let i;
    if (i = this.rules.inline.url.exec(r)) {
      let o, c;
      if (i[2] === "@")
        o = ht(this.options.mangle ? a(i[0]) : i[0]), c = "mailto:" + o;
      else {
        let p;
        do
          p = i[0], i[0] = this.rules.inline._backpedal.exec(i[0])[0];
        while (p !== i[0]);
        o = ht(i[0]), i[1] === "www." ? c = "http://" + i[0] : c = i[0];
      }
      return {
        type: "link",
        raw: i[0],
        text: o,
        href: c,
        tokens: [
          {
            type: "text",
            raw: o,
            text: o
          }
        ]
      };
    }
  }
  inlineText(r, a) {
    const i = this.rules.inline.text.exec(r);
    if (i) {
      let o;
      return this.lexer.state.inRawBlock ? o = this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(i[0]) : ht(i[0]) : i[0] : o = ht(this.options.smartypants ? a(i[0]) : i[0]), {
        type: "text",
        raw: i[0],
        text: o
      };
    }
  }
}
const me = {
  newline: /^(?: *(?:\n|$))+/,
  code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
  fences: /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
  hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
  heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
  blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
  list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
  html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
  def: /^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
  table: Fn,
  lheading: /^((?:(?!^bull ).|\n(?!\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  // regex template, placeholders will be replaced according to different paragraph
  // interruption rules of commonmark and the original markdown spec:
  _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
  text: /^[^\n]+/
};
me._label = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
me._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
me.def = Ne(me.def).replace("label", me._label).replace("title", me._title).getRegex();
me.bullet = /(?:[*+-]|\d{1,9}[.)])/;
me.listItemStart = Ne(/^( *)(bull) */).replace("bull", me.bullet).getRegex();
me.list = Ne(me.list).replace(/bull/g, me.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + me.def.source + ")").getRegex();
me._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
me._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
me.html = Ne(me.html, "i").replace("comment", me._comment).replace("tag", me._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
me.lheading = Ne(me.lheading).replace(/bull/g, me.bullet).getRegex();
me.paragraph = Ne(me._paragraph).replace("hr", me.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", me._tag).getRegex();
me.blockquote = Ne(me.blockquote).replace("paragraph", me.paragraph).getRegex();
me.normal = { ...me };
me.gfm = {
  ...me.normal,
  table: "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
  // Cells
};
me.gfm.table = Ne(me.gfm.table).replace("hr", me.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", me._tag).getRegex();
me.gfm.paragraph = Ne(me._paragraph).replace("hr", me.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("table", me.gfm.table).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", me._tag).getRegex();
me.pedantic = {
  ...me.normal,
  html: Ne(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", me._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: Fn,
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: Ne(me.normal._paragraph).replace("hr", me.hr).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", me.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex()
};
const oe = {
  escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
  url: Fn,
  tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
  link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
  reflink: /^!?\[(label)\]\[(ref)\]/,
  nolink: /^!?\[(ref)\](?:\[\])?/,
  reflinkSearch: "reflink|nolink(?!\\()",
  emStrong: {
    lDelim: /^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,
    //         (1) and (2) can only be a Right Delimiter. (3) and (4) can only be Left.  (5) and (6) can be either Left or Right.
    //         | Skip orphan inside strong      | Consume to delim | (1) #***              | (2) a***#, a***                    | (3) #***a, ***a                  | (4) ***#                 | (5) #***#                         | (6) a***a
    rDelimAst: /^[^_*]*?__[^_*]*?\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\*)[punct](\*+)(?=[\s]|$)|[^punct\s](\*+)(?!\*)(?=[punct\s]|$)|(?!\*)[punct\s](\*+)(?=[^punct\s])|[\s](\*+)(?!\*)(?=[punct])|(?!\*)[punct](\*+)(?!\*)(?=[punct])|[^punct\s](\*+)(?=[^punct\s])/,
    rDelimUnd: /^[^_*]*?\*\*[^_*]*?_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\s]|$)|[^punct\s](_+)(?!_)(?=[punct\s]|$)|(?!_)[punct\s](_+)(?=[^punct\s])|[\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])/
    // ^- Not allowed for _
  },
  code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
  br: /^( {2,}|\\)\n(?!\s*$)/,
  del: Fn,
  text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
  punctuation: /^((?![*_])[\spunctuation])/
};
oe._punctuation = "\\p{P}$+<=>`^|~";
oe.punctuation = Ne(oe.punctuation, "u").replace(/punctuation/g, oe._punctuation).getRegex();
oe.blockSkip = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g;
oe.anyPunctuation = /\\[punct]/g;
oe._escapes = /\\([punct])/g;
oe._comment = Ne(me._comment).replace("(?:-->|$)", "-->").getRegex();
oe.emStrong.lDelim = Ne(oe.emStrong.lDelim, "u").replace(/punct/g, oe._punctuation).getRegex();
oe.emStrong.rDelimAst = Ne(oe.emStrong.rDelimAst, "gu").replace(/punct/g, oe._punctuation).getRegex();
oe.emStrong.rDelimUnd = Ne(oe.emStrong.rDelimUnd, "gu").replace(/punct/g, oe._punctuation).getRegex();
oe.anyPunctuation = Ne(oe.anyPunctuation, "gu").replace(/punct/g, oe._punctuation).getRegex();
oe._escapes = Ne(oe._escapes, "gu").replace(/punct/g, oe._punctuation).getRegex();
oe._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
oe._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
oe.autolink = Ne(oe.autolink).replace("scheme", oe._scheme).replace("email", oe._email).getRegex();
oe._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
oe.tag = Ne(oe.tag).replace("comment", oe._comment).replace("attribute", oe._attribute).getRegex();
oe._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
oe._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
oe._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
oe.link = Ne(oe.link).replace("label", oe._label).replace("href", oe._href).replace("title", oe._title).getRegex();
oe.reflink = Ne(oe.reflink).replace("label", oe._label).replace("ref", me._label).getRegex();
oe.nolink = Ne(oe.nolink).replace("ref", me._label).getRegex();
oe.reflinkSearch = Ne(oe.reflinkSearch, "g").replace("reflink", oe.reflink).replace("nolink", oe.nolink).getRegex();
oe.normal = { ...oe };
oe.pedantic = {
  ...oe.normal,
  strong: {
    start: /^__|\*\*/,
    middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
    endAst: /\*\*(?!\*)/g,
    endUnd: /__(?!_)/g
  },
  em: {
    start: /^_|\*/,
    middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
    endAst: /\*(?!\*)/g,
    endUnd: /_(?!_)/g
  },
  link: Ne(/^!?\[(label)\]\((.*?)\)/).replace("label", oe._label).getRegex(),
  reflink: Ne(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", oe._label).getRegex()
};
oe.gfm = {
  ...oe.normal,
  escape: Ne(oe.escape).replace("])", "~|])").getRegex(),
  _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
  url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
};
oe.gfm.url = Ne(oe.gfm.url, "i").replace("email", oe.gfm._extended_email).getRegex();
oe.breaks = {
  ...oe.gfm,
  br: Ne(oe.br).replace("{2,}", "*").getRegex(),
  text: Ne(oe.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
};
function Q4(s) {
  return s.replace(/---/g, "—").replace(/--/g, "–").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘").replace(/'/g, "’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“").replace(/"/g, "”").replace(/\.{3}/g, "…");
}
function rs(s) {
  let r = "";
  for (let a = 0; a < s.length; a++) {
    const i = Math.random() > 0.5 ? "x" + s.charCodeAt(a).toString(16) : s.charCodeAt(a).toString();
    r += "&#" + i + ";";
  }
  return r;
}
class t0 {
  constructor(r) {
    De(this, "tokens");
    De(this, "options");
    De(this, "state");
    De(this, "tokenizer");
    De(this, "inlineQueue");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = r || tr, this.options.tokenizer = this.options.tokenizer || new Ln(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: !1,
      inRawBlock: !1,
      top: !0
    };
    const a = {
      block: me.normal,
      inline: oe.normal
    };
    this.options.pedantic ? (a.block = me.pedantic, a.inline = oe.pedantic) : this.options.gfm && (a.block = me.gfm, this.options.breaks ? a.inline = oe.breaks : a.inline = oe.gfm), this.tokenizer.rules = a;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block: me,
      inline: oe
    };
  }
  /**
   * Static Lex Method
   */
  static lex(r, a) {
    return new t0(a).lex(r);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(r, a) {
    return new t0(a).inlineTokens(r);
  }
  /**
   * Preprocessing
   */
  lex(r) {
    r = r.replace(/\r\n|\r/g, `
`), this.blockTokens(r, this.tokens);
    let a;
    for (; a = this.inlineQueue.shift(); )
      this.inlineTokens(a.src, a.tokens);
    return this.tokens;
  }
  blockTokens(r, a = []) {
    this.options.pedantic ? r = r.replace(/\t/g, "    ").replace(/^ +$/gm, "") : r = r.replace(/^( *)(\t+)/gm, (g, v, w) => v + "    ".repeat(w.length));
    let i, o, c, p;
    for (; r; )
      if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((g) => (i = g.call({ lexer: this }, r, a)) ? (r = r.substring(i.raw.length), a.push(i), !0) : !1))) {
        if (i = this.tokenizer.space(r)) {
          r = r.substring(i.raw.length), i.raw.length === 1 && a.length > 0 ? a[a.length - 1].raw += `
` : a.push(i);
          continue;
        }
        if (i = this.tokenizer.code(r)) {
          r = r.substring(i.raw.length), o = a[a.length - 1], o && (o.type === "paragraph" || o.type === "text") ? (o.raw += `
` + i.raw, o.text += `
` + i.text, this.inlineQueue[this.inlineQueue.length - 1].src = o.text) : a.push(i);
          continue;
        }
        if (i = this.tokenizer.fences(r)) {
          r = r.substring(i.raw.length), a.push(i);
          continue;
        }
        if (i = this.tokenizer.heading(r)) {
          r = r.substring(i.raw.length), a.push(i);
          continue;
        }
        if (i = this.tokenizer.hr(r)) {
          r = r.substring(i.raw.length), a.push(i);
          continue;
        }
        if (i = this.tokenizer.blockquote(r)) {
          r = r.substring(i.raw.length), a.push(i);
          continue;
        }
        if (i = this.tokenizer.list(r)) {
          r = r.substring(i.raw.length), a.push(i);
          continue;
        }
        if (i = this.tokenizer.html(r)) {
          r = r.substring(i.raw.length), a.push(i);
          continue;
        }
        if (i = this.tokenizer.def(r)) {
          r = r.substring(i.raw.length), o = a[a.length - 1], o && (o.type === "paragraph" || o.type === "text") ? (o.raw += `
` + i.raw, o.text += `
` + i.raw, this.inlineQueue[this.inlineQueue.length - 1].src = o.text) : this.tokens.links[i.tag] || (this.tokens.links[i.tag] = {
            href: i.href,
            title: i.title
          });
          continue;
        }
        if (i = this.tokenizer.table(r)) {
          r = r.substring(i.raw.length), a.push(i);
          continue;
        }
        if (i = this.tokenizer.lheading(r)) {
          r = r.substring(i.raw.length), a.push(i);
          continue;
        }
        if (c = r, this.options.extensions && this.options.extensions.startBlock) {
          let g = 1 / 0;
          const v = r.slice(1);
          let w;
          this.options.extensions.startBlock.forEach((S) => {
            w = S.call({ lexer: this }, v), typeof w == "number" && w >= 0 && (g = Math.min(g, w));
          }), g < 1 / 0 && g >= 0 && (c = r.substring(0, g + 1));
        }
        if (this.state.top && (i = this.tokenizer.paragraph(c))) {
          o = a[a.length - 1], p && o.type === "paragraph" ? (o.raw += `
` + i.raw, o.text += `
` + i.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = o.text) : a.push(i), p = c.length !== r.length, r = r.substring(i.raw.length);
          continue;
        }
        if (i = this.tokenizer.text(r)) {
          r = r.substring(i.raw.length), o = a[a.length - 1], o && o.type === "text" ? (o.raw += `
` + i.raw, o.text += `
` + i.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = o.text) : a.push(i);
          continue;
        }
        if (r) {
          const g = "Infinite loop on byte: " + r.charCodeAt(0);
          if (this.options.silent) {
            console.error(g);
            break;
          } else
            throw new Error(g);
        }
      }
    return this.state.top = !0, a;
  }
  inline(r, a = []) {
    return this.inlineQueue.push({ src: r, tokens: a }), a;
  }
  /**
   * Lexing/Compiling
   */
  inlineTokens(r, a = []) {
    let i, o, c, p = r, g, v, w;
    if (this.tokens.links) {
      const S = Object.keys(this.tokens.links);
      if (S.length > 0)
        for (; (g = this.tokenizer.rules.inline.reflinkSearch.exec(p)) != null; )
          S.includes(g[0].slice(g[0].lastIndexOf("[") + 1, -1)) && (p = p.slice(0, g.index) + "[" + "a".repeat(g[0].length - 2) + "]" + p.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (g = this.tokenizer.rules.inline.blockSkip.exec(p)) != null; )
      p = p.slice(0, g.index) + "[" + "a".repeat(g[0].length - 2) + "]" + p.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (g = this.tokenizer.rules.inline.anyPunctuation.exec(p)) != null; )
      p = p.slice(0, g.index) + "++" + p.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; r; )
      if (v || (w = ""), v = !1, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((S) => (i = S.call({ lexer: this }, r, a)) ? (r = r.substring(i.raw.length), a.push(i), !0) : !1))) {
        if (i = this.tokenizer.escape(r)) {
          r = r.substring(i.raw.length), a.push(i);
          continue;
        }
        if (i = this.tokenizer.tag(r)) {
          r = r.substring(i.raw.length), o = a[a.length - 1], o && i.type === "text" && o.type === "text" ? (o.raw += i.raw, o.text += i.text) : a.push(i);
          continue;
        }
        if (i = this.tokenizer.link(r)) {
          r = r.substring(i.raw.length), a.push(i);
          continue;
        }
        if (i = this.tokenizer.reflink(r, this.tokens.links)) {
          r = r.substring(i.raw.length), o = a[a.length - 1], o && i.type === "text" && o.type === "text" ? (o.raw += i.raw, o.text += i.text) : a.push(i);
          continue;
        }
        if (i = this.tokenizer.emStrong(r, p, w)) {
          r = r.substring(i.raw.length), a.push(i);
          continue;
        }
        if (i = this.tokenizer.codespan(r)) {
          r = r.substring(i.raw.length), a.push(i);
          continue;
        }
        if (i = this.tokenizer.br(r)) {
          r = r.substring(i.raw.length), a.push(i);
          continue;
        }
        if (i = this.tokenizer.del(r)) {
          r = r.substring(i.raw.length), a.push(i);
          continue;
        }
        if (i = this.tokenizer.autolink(r, rs)) {
          r = r.substring(i.raw.length), a.push(i);
          continue;
        }
        if (!this.state.inLink && (i = this.tokenizer.url(r, rs))) {
          r = r.substring(i.raw.length), a.push(i);
          continue;
        }
        if (c = r, this.options.extensions && this.options.extensions.startInline) {
          let S = 1 / 0;
          const D = r.slice(1);
          let q;
          this.options.extensions.startInline.forEach((Z) => {
            q = Z.call({ lexer: this }, D), typeof q == "number" && q >= 0 && (S = Math.min(S, q));
          }), S < 1 / 0 && S >= 0 && (c = r.substring(0, S + 1));
        }
        if (i = this.tokenizer.inlineText(c, Q4)) {
          r = r.substring(i.raw.length), i.raw.slice(-1) !== "_" && (w = i.raw.slice(-1)), v = !0, o = a[a.length - 1], o && o.type === "text" ? (o.raw += i.raw, o.text += i.text) : a.push(i);
          continue;
        }
        if (r) {
          const S = "Infinite loop on byte: " + r.charCodeAt(0);
          if (this.options.silent) {
            console.error(S);
            break;
          } else
            throw new Error(S);
        }
      }
    return a;
  }
}
class In {
  constructor(r) {
    De(this, "options");
    this.options = r || tr;
  }
  code(r, a, i) {
    var c;
    const o = (c = (a || "").match(/^\S*/)) == null ? void 0 : c[0];
    if (this.options.highlight) {
      const p = this.options.highlight(r, o);
      p != null && p !== r && (i = !0, r = p);
    }
    return r = r.replace(/\n$/, "") + `
`, o ? '<pre><code class="' + this.options.langPrefix + ht(o) + '">' + (i ? r : ht(r, !0)) + `</code></pre>
` : "<pre><code>" + (i ? r : ht(r, !0)) + `</code></pre>
`;
  }
  blockquote(r) {
    return `<blockquote>
${r}</blockquote>
`;
  }
  html(r, a) {
    return r;
  }
  heading(r, a, i, o) {
    if (this.options.headerIds) {
      const c = this.options.headerPrefix + o.slug(i);
      return `<h${a} id="${c}">${r}</h${a}>
`;
    }
    return `<h${a}>${r}</h${a}>
`;
  }
  hr() {
    return this.options.xhtml ? `<hr/>
` : `<hr>
`;
  }
  list(r, a, i) {
    const o = a ? "ol" : "ul", c = a && i !== 1 ? ' start="' + i + '"' : "";
    return "<" + o + c + `>
` + r + "</" + o + `>
`;
  }
  listitem(r, a, i) {
    return `<li>${r}</li>
`;
  }
  checkbox(r) {
    return "<input " + (r ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> ";
  }
  paragraph(r) {
    return `<p>${r}</p>
`;
  }
  table(r, a) {
    return a && (a = `<tbody>${a}</tbody>`), `<table>
<thead>
` + r + `</thead>
` + a + `</table>
`;
  }
  tablerow(r) {
    return `<tr>
${r}</tr>
`;
  }
  tablecell(r, a) {
    const i = a.header ? "th" : "td";
    return (a.align ? `<${i} align="${a.align}">` : `<${i}>`) + r + `</${i}>
`;
  }
  /**
   * span level renderer
   */
  strong(r) {
    return `<strong>${r}</strong>`;
  }
  em(r) {
    return `<em>${r}</em>`;
  }
  codespan(r) {
    return `<code>${r}</code>`;
  }
  br() {
    return this.options.xhtml ? "<br/>" : "<br>";
  }
  del(r) {
    return `<del>${r}</del>`;
  }
  link(r, a, i) {
    const o = $l(this.options.sanitize, this.options.baseUrl, r);
    if (o === null)
      return i;
    r = o;
    let c = '<a href="' + r + '"';
    return a && (c += ' title="' + a + '"'), c += ">" + i + "</a>", c;
  }
  image(r, a, i) {
    const o = $l(this.options.sanitize, this.options.baseUrl, r);
    if (o === null)
      return i;
    r = o;
    let c = `<img src="${r}" alt="${i}"`;
    return a && (c += ` title="${a}"`), c += this.options.xhtml ? "/>" : ">", c;
  }
  text(r) {
    return r;
  }
}
class ii {
  // no need for block level renderers
  strong(r) {
    return r;
  }
  em(r) {
    return r;
  }
  codespan(r) {
    return r;
  }
  del(r) {
    return r;
  }
  html(r) {
    return r;
  }
  text(r) {
    return r;
  }
  link(r, a, i) {
    return "" + i;
  }
  image(r, a, i) {
    return "" + i;
  }
  br() {
    return "";
  }
}
class li {
  constructor() {
    De(this, "seen");
    this.seen = {};
  }
  serialize(r) {
    return r.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig, "").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-");
  }
  /**
   * Finds the next safe (unique) slug to use
   */
  getNextSafeSlug(r, a) {
    let i = r, o = 0;
    if (this.seen.hasOwnProperty(i)) {
      o = this.seen[r];
      do
        o++, i = r + "-" + o;
      while (this.seen.hasOwnProperty(i));
    }
    return a || (this.seen[r] = o, this.seen[i] = 0), i;
  }
  /**
   * Convert string to unique id
   */
  slug(r, a = {}) {
    const i = this.serialize(r);
    return this.getNextSafeSlug(i, a.dryrun);
  }
}
class r0 {
  constructor(r) {
    De(this, "options");
    De(this, "renderer");
    De(this, "textRenderer");
    De(this, "slugger");
    this.options = r || tr, this.options.renderer = this.options.renderer || new In(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new ii(), this.slugger = new li();
  }
  /**
   * Static Parse Method
   */
  static parse(r, a) {
    return new r0(a).parse(r);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(r, a) {
    return new r0(a).parseInline(r);
  }
  /**
   * Parse Loop
   */
  parse(r, a = !0) {
    let i = "";
    for (let o = 0; o < r.length; o++) {
      const c = r[o];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[c.type]) {
        const p = c, g = this.options.extensions.renderers[p.type].call({ parser: this }, p);
        if (g !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(p.type)) {
          i += g || "";
          continue;
        }
      }
      switch (c.type) {
        case "space":
          continue;
        case "hr": {
          i += this.renderer.hr();
          continue;
        }
        case "heading": {
          const p = c;
          i += this.renderer.heading(this.parseInline(p.tokens), p.depth, Ao(this.parseInline(p.tokens, this.textRenderer)), this.slugger);
          continue;
        }
        case "code": {
          const p = c;
          i += this.renderer.code(p.text, p.lang, !!p.escaped);
          continue;
        }
        case "table": {
          const p = c;
          let g = "", v = "";
          for (let S = 0; S < p.header.length; S++)
            v += this.renderer.tablecell(this.parseInline(p.header[S].tokens), { header: !0, align: p.align[S] });
          g += this.renderer.tablerow(v);
          let w = "";
          for (let S = 0; S < p.rows.length; S++) {
            const D = p.rows[S];
            v = "";
            for (let q = 0; q < D.length; q++)
              v += this.renderer.tablecell(this.parseInline(D[q].tokens), { header: !1, align: p.align[q] });
            w += this.renderer.tablerow(v);
          }
          i += this.renderer.table(g, w);
          continue;
        }
        case "blockquote": {
          const p = c, g = this.parse(p.tokens);
          i += this.renderer.blockquote(g);
          continue;
        }
        case "list": {
          const p = c, g = p.ordered, v = p.start, w = p.loose;
          let S = "";
          for (let D = 0; D < p.items.length; D++) {
            const q = p.items[D], Z = q.checked, j = q.task;
            let re = "";
            if (q.task) {
              const $ = this.renderer.checkbox(!!Z);
              w ? q.tokens.length > 0 && q.tokens[0].type === "paragraph" ? (q.tokens[0].text = $ + " " + q.tokens[0].text, q.tokens[0].tokens && q.tokens[0].tokens.length > 0 && q.tokens[0].tokens[0].type === "text" && (q.tokens[0].tokens[0].text = $ + " " + q.tokens[0].tokens[0].text)) : q.tokens.unshift({
                type: "text",
                text: $
              }) : re += $;
            }
            re += this.parse(q.tokens, w), S += this.renderer.listitem(re, j, !!Z);
          }
          i += this.renderer.list(S, g, v);
          continue;
        }
        case "html": {
          const p = c;
          i += this.renderer.html(p.text, p.block);
          continue;
        }
        case "paragraph": {
          const p = c;
          i += this.renderer.paragraph(this.parseInline(p.tokens));
          continue;
        }
        case "text": {
          let p = c, g = p.tokens ? this.parseInline(p.tokens) : p.text;
          for (; o + 1 < r.length && r[o + 1].type === "text"; )
            p = r[++o], g += `
` + (p.tokens ? this.parseInline(p.tokens) : p.text);
          i += a ? this.renderer.paragraph(g) : g;
          continue;
        }
        default: {
          const p = 'Token with "' + c.type + '" type was not found.';
          if (this.options.silent)
            return console.error(p), "";
          throw new Error(p);
        }
      }
    }
    return i;
  }
  /**
   * Parse Inline Tokens
   */
  parseInline(r, a) {
    a = a || this.renderer;
    let i = "";
    for (let o = 0; o < r.length; o++) {
      const c = r[o];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[c.type]) {
        const p = this.options.extensions.renderers[c.type].call({ parser: this }, c);
        if (p !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(c.type)) {
          i += p || "";
          continue;
        }
      }
      switch (c.type) {
        case "escape": {
          const p = c;
          i += a.text(p.text);
          break;
        }
        case "html": {
          const p = c;
          i += a.html(p.text);
          break;
        }
        case "link": {
          const p = c;
          i += a.link(p.href, p.title, this.parseInline(p.tokens, a));
          break;
        }
        case "image": {
          const p = c;
          i += a.image(p.href, p.title, p.text);
          break;
        }
        case "strong": {
          const p = c;
          i += a.strong(this.parseInline(p.tokens, a));
          break;
        }
        case "em": {
          const p = c;
          i += a.em(this.parseInline(p.tokens, a));
          break;
        }
        case "codespan": {
          const p = c;
          i += a.codespan(p.text);
          break;
        }
        case "br": {
          i += a.br();
          break;
        }
        case "del": {
          const p = c;
          i += a.del(this.parseInline(p.tokens, a));
          break;
        }
        case "text": {
          const p = c;
          i += a.text(p.text);
          break;
        }
        default: {
          const p = 'Token with "' + c.type + '" type was not found.';
          if (this.options.silent)
            return console.error(p), "";
          throw new Error(p);
        }
      }
    }
    return i;
  }
}
class Gr {
  constructor(r) {
    De(this, "options");
    this.options = r || tr;
  }
  /**
   * Process markdown before marked
   */
  preprocess(r) {
    return r;
  }
  /**
   * Process HTML after marked is finished
   */
  postprocess(r) {
    return r;
  }
}
De(Gr, "passThroughHooks", /* @__PURE__ */ new Set([
  "preprocess",
  "postprocess"
]));
var Vr, ei, qn, To;
class J4 {
  constructor(...r) {
    Ca(this, Vr);
    Ca(this, qn);
    De(this, "defaults", ai());
    De(this, "options", this.setOptions);
    De(this, "parse", yn(this, Vr, ei).call(this, t0.lex, r0.parse));
    De(this, "parseInline", yn(this, Vr, ei).call(this, t0.lexInline, r0.parseInline));
    De(this, "Parser", r0);
    De(this, "parser", r0.parse);
    De(this, "Renderer", In);
    De(this, "TextRenderer", ii);
    De(this, "Lexer", t0);
    De(this, "lexer", t0.lex);
    De(this, "Tokenizer", Ln);
    De(this, "Slugger", li);
    De(this, "Hooks", Gr);
    this.use(...r);
  }
  /**
   * Run callback for every token
   */
  walkTokens(r, a) {
    var o, c;
    let i = [];
    for (const p of r)
      switch (i = i.concat(a.call(this, p)), p.type) {
        case "table": {
          const g = p;
          for (const v of g.header)
            i = i.concat(this.walkTokens(v.tokens, a));
          for (const v of g.rows)
            for (const w of v)
              i = i.concat(this.walkTokens(w.tokens, a));
          break;
        }
        case "list": {
          const g = p;
          i = i.concat(this.walkTokens(g.items, a));
          break;
        }
        default: {
          const g = p;
          (c = (o = this.defaults.extensions) == null ? void 0 : o.childTokens) != null && c[g.type] ? this.defaults.extensions.childTokens[g.type].forEach((v) => {
            i = i.concat(this.walkTokens(g[v], a));
          }) : g.tokens && (i = i.concat(this.walkTokens(g.tokens, a)));
        }
      }
    return i;
  }
  use(...r) {
    const a = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return r.forEach((i) => {
      const o = { ...i };
      if (o.async = this.defaults.async || o.async || !1, i.extensions && (i.extensions.forEach((c) => {
        if (!c.name)
          throw new Error("extension name required");
        if ("renderer" in c) {
          const p = a.renderers[c.name];
          p ? a.renderers[c.name] = function(...g) {
            let v = c.renderer.apply(this, g);
            return v === !1 && (v = p.apply(this, g)), v;
          } : a.renderers[c.name] = c.renderer;
        }
        if ("tokenizer" in c) {
          if (!c.level || c.level !== "block" && c.level !== "inline")
            throw new Error("extension level must be 'block' or 'inline'");
          const p = a[c.level];
          p ? p.unshift(c.tokenizer) : a[c.level] = [c.tokenizer], c.start && (c.level === "block" ? a.startBlock ? a.startBlock.push(c.start) : a.startBlock = [c.start] : c.level === "inline" && (a.startInline ? a.startInline.push(c.start) : a.startInline = [c.start]));
        }
        "childTokens" in c && c.childTokens && (a.childTokens[c.name] = c.childTokens);
      }), o.extensions = a), i.renderer) {
        const c = this.defaults.renderer || new In(this.defaults);
        for (const p in i.renderer) {
          const g = i.renderer[p], v = p, w = c[v];
          c[v] = (...S) => {
            let D = g.apply(c, S);
            return D === !1 && (D = w.apply(c, S)), D || "";
          };
        }
        o.renderer = c;
      }
      if (i.tokenizer) {
        const c = this.defaults.tokenizer || new Ln(this.defaults);
        for (const p in i.tokenizer) {
          const g = i.tokenizer[p], v = p, w = c[v];
          c[v] = (...S) => {
            let D = g.apply(c, S);
            return D === !1 && (D = w.apply(c, S)), D;
          };
        }
        o.tokenizer = c;
      }
      if (i.hooks) {
        const c = this.defaults.hooks || new Gr();
        for (const p in i.hooks) {
          const g = i.hooks[p], v = p, w = c[v];
          Gr.passThroughHooks.has(p) ? c[v] = (S) => {
            if (this.defaults.async)
              return Promise.resolve(g.call(c, S)).then((q) => w.call(c, q));
            const D = g.call(c, S);
            return w.call(c, D);
          } : c[v] = (...S) => {
            let D = g.apply(c, S);
            return D === !1 && (D = w.apply(c, S)), D;
          };
        }
        o.hooks = c;
      }
      if (i.walkTokens) {
        const c = this.defaults.walkTokens, p = i.walkTokens;
        o.walkTokens = function(g) {
          let v = [];
          return v.push(p.call(this, g)), c && (v = v.concat(c.call(this, g))), v;
        };
      }
      this.defaults = { ...this.defaults, ...o };
    }), this;
  }
  setOptions(r) {
    return this.defaults = { ...this.defaults, ...r }, this;
  }
}
Vr = new WeakSet(), ei = function(r, a) {
  return (i, o, c) => {
    typeof o == "function" && (c = o, o = null);
    const p = { ...o }, g = { ...this.defaults, ...p };
    this.defaults.async === !0 && p.async === !1 && (g.silent || console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."), g.async = !0);
    const v = yn(this, qn, To).call(this, !!g.silent, !!g.async, c);
    if (typeof i > "u" || i === null)
      return v(new Error("marked(): input parameter is undefined or null"));
    if (typeof i != "string")
      return v(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(i) + ", string expected"));
    if (Z4(g, c), g.hooks && (g.hooks.options = g), c) {
      const w = c, S = g.highlight;
      let D;
      try {
        g.hooks && (i = g.hooks.preprocess(i)), D = r(i, g);
      } catch (j) {
        return v(j);
      }
      const q = (j) => {
        let re;
        if (!j)
          try {
            g.walkTokens && this.walkTokens(D, g.walkTokens), re = a(D, g), g.hooks && (re = g.hooks.postprocess(re));
          } catch ($) {
            j = $;
          }
        return g.highlight = S, j ? v(j) : w(null, re);
      };
      if (!S || S.length < 3 || (delete g.highlight, !D.length))
        return q();
      let Z = 0;
      this.walkTokens(D, (j) => {
        j.type === "code" && (Z++, setTimeout(() => {
          S(j.text, j.lang, (re, $) => {
            if (re)
              return q(re);
            $ != null && $ !== j.text && (j.text = $, j.escaped = !0), Z--, Z === 0 && q();
          });
        }, 0));
      }), Z === 0 && q();
      return;
    }
    if (g.async)
      return Promise.resolve(g.hooks ? g.hooks.preprocess(i) : i).then((w) => r(w, g)).then((w) => g.walkTokens ? Promise.all(this.walkTokens(w, g.walkTokens)).then(() => w) : w).then((w) => a(w, g)).then((w) => g.hooks ? g.hooks.postprocess(w) : w).catch(v);
    try {
      g.hooks && (i = g.hooks.preprocess(i));
      const w = r(i, g);
      g.walkTokens && this.walkTokens(w, g.walkTokens);
      let S = a(w, g);
      return g.hooks && (S = g.hooks.postprocess(S)), S;
    } catch (w) {
      return v(w);
    }
  };
}, qn = new WeakSet(), To = function(r, a, i) {
  return (o) => {
    if (o.message += `
Please report this to https://github.com/markedjs/marked.`, r) {
      const c = "<p>An error occurred:</p><pre>" + ht(o.message + "", !0) + "</pre>";
      if (a)
        return Promise.resolve(c);
      if (i) {
        i(null, c);
        return;
      }
      return c;
    }
    if (a)
      return Promise.reject(o);
    if (i) {
      i(o);
      return;
    }
    throw o;
  };
};
const er = new J4();
function Ee(s, r, a) {
  return er.parse(s, r, a);
}
Ee.options = Ee.setOptions = function(s) {
  return er.setOptions(s), Ee.defaults = er.defaults, _o(Ee.defaults), Ee;
};
Ee.getDefaults = ai;
Ee.defaults = tr;
Ee.use = function(...s) {
  return er.use(...s), Ee.defaults = er.defaults, _o(Ee.defaults), Ee;
};
Ee.walkTokens = function(s, r) {
  return er.walkTokens(s, r);
};
Ee.parseInline = er.parseInline;
Ee.Parser = r0;
Ee.parser = r0.parse;
Ee.Renderer = In;
Ee.TextRenderer = ii;
Ee.Lexer = t0;
Ee.lexer = t0.lex;
Ee.Tokenizer = Ln;
Ee.Slugger = li;
Ee.Hooks = Gr;
Ee.parse = Ee;
Ee.options;
Ee.setOptions;
Ee.use;
Ee.walkTokens;
Ee.parseInline;
r0.parse;
t0.lex;
function $4(s) {
  if (typeof s == "function" && (s = {
    highlight: s
  }), !s || typeof s.highlight != "function")
    throw new Error("Must provide highlight function");
  return typeof s.langPrefix != "string" && (s.langPrefix = "language-"), {
    async: !!s.async,
    walkTokens(r) {
      if (r.type !== "code")
        return;
      const a = eh(r);
      if (s.async)
        return Promise.resolve(s.highlight(r.text, a)).then(ns(r));
      const i = s.highlight(r.text, a);
      if (i instanceof Promise)
        throw new Error("markedHighlight is not set to async but the highlight function is async. Set the async option to true on markedHighlight to await the async highlight function.");
      ns(r)(i);
    },
    renderer: {
      code(r, a, i) {
        const o = (a || "").match(/\S*/)[0], c = o ? ` class="${s.langPrefix}${is(o)}"` : "";
        return r = r.replace(/\n$/, ""), `<pre><code${c}>${i ? r : is(r, !0)}
</code></pre>`;
      }
    }
  };
}
function eh(s) {
  return (s.lang || "").match(/\S*/)[0];
}
function ns(s) {
  return (r) => {
    typeof r == "string" && r !== s.text && (s.escaped = !0, s.text = r);
  };
}
const Mo = /[&<>"']/, th = new RegExp(Mo.source, "g"), zo = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, rh = new RegExp(zo.source, "g"), nh = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, as = (s) => nh[s];
function is(s, r) {
  if (r) {
    if (Mo.test(s))
      return s.replace(th, as);
  } else if (zo.test(s))
    return s.replace(rh, as);
  return s;
}
var Co = { exports: {} };
(function(s) {
  var r = typeof window < "u" ? window : typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : {};
  /**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   */
  var a = function(i) {
    var o = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, c = 0, p = {}, g = {
      /**
       * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
       * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
       * additional languages or plugins yourself.
       *
       * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
       *
       * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
       * empty Prism object into the global scope before loading the Prism script like this:
       *
       * ```js
       * window.Prism = window.Prism || {};
       * Prism.manual = true;
       * // add a new <script> to load Prism's script
       * ```
       *
       * @default false
       * @type {boolean}
       * @memberof Prism
       * @public
       */
      manual: i.Prism && i.Prism.manual,
      /**
       * By default, if Prism is in a web worker, it assumes that it is in a worker it created itself, so it uses
       * `addEventListener` to communicate with its parent instance. However, if you're using Prism manually in your
       * own worker, you don't want it to do this.
       *
       * By setting this value to `true`, Prism will not add its own listeners to the worker.
       *
       * You obviously have to change this value before Prism executes. To do this, you can add an
       * empty Prism object into the global scope before loading the Prism script like this:
       *
       * ```js
       * window.Prism = window.Prism || {};
       * Prism.disableWorkerMessageHandler = true;
       * // Load Prism's script
       * ```
       *
       * @default false
       * @type {boolean}
       * @memberof Prism
       * @public
       */
      disableWorkerMessageHandler: i.Prism && i.Prism.disableWorkerMessageHandler,
      /**
       * A namespace for utility methods.
       *
       * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
       * change or disappear at any time.
       *
       * @namespace
       * @memberof Prism
       */
      util: {
        encode: function F(C) {
          return C instanceof v ? new v(C.type, F(C.content), C.alias) : Array.isArray(C) ? C.map(F) : C.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
        },
        /**
         * Returns the name of the type of the given value.
         *
         * @param {any} o
         * @returns {string}
         * @example
         * type(null)      === 'Null'
         * type(undefined) === 'Undefined'
         * type(123)       === 'Number'
         * type('foo')     === 'String'
         * type(true)      === 'Boolean'
         * type([1, 2])    === 'Array'
         * type({})        === 'Object'
         * type(String)    === 'Function'
         * type(/abc+/)    === 'RegExp'
         */
        type: function(F) {
          return Object.prototype.toString.call(F).slice(8, -1);
        },
        /**
         * Returns a unique number for the given object. Later calls will still return the same number.
         *
         * @param {Object} obj
         * @returns {number}
         */
        objId: function(F) {
          return F.__id || Object.defineProperty(F, "__id", { value: ++c }), F.__id;
        },
        /**
         * Creates a deep clone of the given object.
         *
         * The main intended use of this function is to clone language definitions.
         *
         * @param {T} o
         * @param {Record<number, any>} [visited]
         * @returns {T}
         * @template T
         */
        clone: function F(C, L) {
          L = L || {};
          var B, O;
          switch (g.util.type(C)) {
            case "Object":
              if (O = g.util.objId(C), L[O])
                return L[O];
              B = /** @type {Record<string, any>} */
              {}, L[O] = B;
              for (var G in C)
                C.hasOwnProperty(G) && (B[G] = F(C[G], L));
              return (
                /** @type {any} */
                B
              );
            case "Array":
              return O = g.util.objId(C), L[O] ? L[O] : (B = [], L[O] = B, /** @type {Array} */
              /** @type {any} */
              C.forEach(function(Q, Y) {
                B[Y] = F(Q, L);
              }), /** @type {any} */
              B);
            default:
              return C;
          }
        },
        /**
         * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
         *
         * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
         *
         * @param {Element} element
         * @returns {string}
         */
        getLanguage: function(F) {
          for (; F; ) {
            var C = o.exec(F.className);
            if (C)
              return C[1].toLowerCase();
            F = F.parentElement;
          }
          return "none";
        },
        /**
         * Sets the Prism `language-xxxx` class of the given element.
         *
         * @param {Element} element
         * @param {string} language
         * @returns {void}
         */
        setLanguage: function(F, C) {
          F.className = F.className.replace(RegExp(o, "gi"), ""), F.classList.add("language-" + C);
        },
        /**
         * Returns the script element that is currently executing.
         *
         * This does __not__ work for line script element.
         *
         * @returns {HTMLScriptElement | null}
         */
        currentScript: function() {
          if (typeof document > "u")
            return null;
          if ("currentScript" in document && 1 < 2)
            return (
              /** @type {any} */
              document.currentScript
            );
          try {
            throw new Error();
          } catch (B) {
            var F = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(B.stack) || [])[1];
            if (F) {
              var C = document.getElementsByTagName("script");
              for (var L in C)
                if (C[L].src == F)
                  return C[L];
            }
            return null;
          }
        },
        /**
         * Returns whether a given class is active for `element`.
         *
         * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
         * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
         * given class is just the given class with a `no-` prefix.
         *
         * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
         * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
         * ancestors have the given class or the negated version of it, then the default activation will be returned.
         *
         * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
         * version of it, the class is considered active.
         *
         * @param {Element} element
         * @param {string} className
         * @param {boolean} [defaultActivation=false]
         * @returns {boolean}
         */
        isActive: function(F, C, L) {
          for (var B = "no-" + C; F; ) {
            var O = F.classList;
            if (O.contains(C))
              return !0;
            if (O.contains(B))
              return !1;
            F = F.parentElement;
          }
          return !!L;
        }
      },
      /**
       * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
       *
       * @namespace
       * @memberof Prism
       * @public
       */
      languages: {
        /**
         * The grammar for plain, unformatted text.
         */
        plain: p,
        plaintext: p,
        text: p,
        txt: p,
        /**
         * Creates a deep copy of the language with the given id and appends the given tokens.
         *
         * If a token in `redef` also appears in the copied language, then the existing token in the copied language
         * will be overwritten at its original position.
         *
         * ## Best practices
         *
         * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
         * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
         * understand the language definition because, normally, the order of tokens matters in Prism grammars.
         *
         * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
         * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
         *
         * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
         * @param {Grammar} redef The new tokens to append.
         * @returns {Grammar} The new language created.
         * @public
         * @example
         * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
         *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
         *     // at its original position
         *     'comment': { ... },
         *     // CSS doesn't have a 'color' token, so this token will be appended
         *     'color': /\b(?:red|green|blue)\b/
         * });
         */
        extend: function(F, C) {
          var L = g.util.clone(g.languages[F]);
          for (var B in C)
            L[B] = C[B];
          return L;
        },
        /**
         * Inserts tokens _before_ another token in a language definition or any other grammar.
         *
         * ## Usage
         *
         * This helper method makes it easy to modify existing languages. For example, the CSS language definition
         * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
         * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
         * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
         * this:
         *
         * ```js
         * Prism.languages.markup.style = {
         *     // token
         * };
         * ```
         *
         * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
         * before existing tokens. For the CSS example above, you would use it like this:
         *
         * ```js
         * Prism.languages.insertBefore('markup', 'cdata', {
         *     'style': {
         *         // token
         *     }
         * });
         * ```
         *
         * ## Special cases
         *
         * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
         * will be ignored.
         *
         * This behavior can be used to insert tokens after `before`:
         *
         * ```js
         * Prism.languages.insertBefore('markup', 'comment', {
         *     'comment': Prism.languages.markup.comment,
         *     // tokens after 'comment'
         * });
         * ```
         *
         * ## Limitations
         *
         * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
         * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
         * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
         * deleting properties which is necessary to insert at arbitrary positions.
         *
         * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
         * Instead, it will create a new object and replace all references to the target object with the new one. This
         * can be done without temporarily deleting properties, so the iteration order is well-defined.
         *
         * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
         * you hold the target object in a variable, then the value of the variable will not change.
         *
         * ```js
         * var oldMarkup = Prism.languages.markup;
         * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
         *
         * assert(oldMarkup !== Prism.languages.markup);
         * assert(newMarkup === Prism.languages.markup);
         * ```
         *
         * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
         * object to be modified.
         * @param {string} before The key to insert before.
         * @param {Grammar} insert An object containing the key-value pairs to be inserted.
         * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
         * object to be modified.
         *
         * Defaults to `Prism.languages`.
         * @returns {Grammar} The new grammar object.
         * @public
         */
        insertBefore: function(F, C, L, B) {
          B = B || /** @type {any} */
          g.languages;
          var O = B[F], G = {};
          for (var Q in O)
            if (O.hasOwnProperty(Q)) {
              if (Q == C)
                for (var Y in L)
                  L.hasOwnProperty(Y) && (G[Y] = L[Y]);
              L.hasOwnProperty(Q) || (G[Q] = O[Q]);
            }
          var ue = B[F];
          return B[F] = G, g.languages.DFS(g.languages, function(ge, Fe) {
            Fe === ue && ge != F && (this[ge] = G);
          }), G;
        },
        // Traverse a language definition with Depth First Search
        DFS: function F(C, L, B, O) {
          O = O || {};
          var G = g.util.objId;
          for (var Q in C)
            if (C.hasOwnProperty(Q)) {
              L.call(C, Q, C[Q], B || Q);
              var Y = C[Q], ue = g.util.type(Y);
              ue === "Object" && !O[G(Y)] ? (O[G(Y)] = !0, F(Y, L, null, O)) : ue === "Array" && !O[G(Y)] && (O[G(Y)] = !0, F(Y, L, Q, O));
            }
        }
      },
      plugins: {},
      /**
       * This is the most high-level function in Prism’s API.
       * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
       * each one of them.
       *
       * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
       *
       * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
       * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
       * @memberof Prism
       * @public
       */
      highlightAll: function(F, C) {
        g.highlightAllUnder(document, F, C);
      },
      /**
       * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
       * {@link Prism.highlightElement} on each one of them.
       *
       * The following hooks will be run:
       * 1. `before-highlightall`
       * 2. `before-all-elements-highlight`
       * 3. All hooks of {@link Prism.highlightElement} for each element.
       *
       * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
       * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
       * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
       * @memberof Prism
       * @public
       */
      highlightAllUnder: function(F, C, L) {
        var B = {
          callback: L,
          container: F,
          selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
        };
        g.hooks.run("before-highlightall", B), B.elements = Array.prototype.slice.apply(B.container.querySelectorAll(B.selector)), g.hooks.run("before-all-elements-highlight", B);
        for (var O = 0, G; G = B.elements[O++]; )
          g.highlightElement(G, C === !0, B.callback);
      },
      /**
       * Highlights the code inside a single element.
       *
       * The following hooks will be run:
       * 1. `before-sanity-check`
       * 2. `before-highlight`
       * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
       * 4. `before-insert`
       * 5. `after-highlight`
       * 6. `complete`
       *
       * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
       * the element's language.
       *
       * @param {Element} element The element containing the code.
       * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
       * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
       * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
       * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
       *
       * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
       * asynchronous highlighting to work. You can build your own bundle on the
       * [Download page](https://prismjs.com/download.html).
       * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
       * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
       * @memberof Prism
       * @public
       */
      highlightElement: function(F, C, L) {
        var B = g.util.getLanguage(F), O = g.languages[B];
        g.util.setLanguage(F, B);
        var G = F.parentElement;
        G && G.nodeName.toLowerCase() === "pre" && g.util.setLanguage(G, B);
        var Q = F.textContent, Y = {
          element: F,
          language: B,
          grammar: O,
          code: Q
        };
        function ue(Fe) {
          Y.highlightedCode = Fe, g.hooks.run("before-insert", Y), Y.element.innerHTML = Y.highlightedCode, g.hooks.run("after-highlight", Y), g.hooks.run("complete", Y), L && L.call(Y.element);
        }
        if (g.hooks.run("before-sanity-check", Y), G = Y.element.parentElement, G && G.nodeName.toLowerCase() === "pre" && !G.hasAttribute("tabindex") && G.setAttribute("tabindex", "0"), !Y.code) {
          g.hooks.run("complete", Y), L && L.call(Y.element);
          return;
        }
        if (g.hooks.run("before-highlight", Y), !Y.grammar) {
          ue(g.util.encode(Y.code));
          return;
        }
        if (C && i.Worker) {
          var ge = new Worker(g.filename);
          ge.onmessage = function(Fe) {
            ue(Fe.data);
          }, ge.postMessage(JSON.stringify({
            language: Y.language,
            code: Y.code,
            immediateClose: !0
          }));
        } else
          ue(g.highlight(Y.code, Y.grammar, Y.language));
      },
      /**
       * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
       * and the language definitions to use, and returns a string with the HTML produced.
       *
       * The following hooks will be run:
       * 1. `before-tokenize`
       * 2. `after-tokenize`
       * 3. `wrap`: On each {@link Token}.
       *
       * @param {string} text A string with the code to be highlighted.
       * @param {Grammar} grammar An object containing the tokens to use.
       *
       * Usually a language definition like `Prism.languages.markup`.
       * @param {string} language The name of the language definition passed to `grammar`.
       * @returns {string} The highlighted HTML.
       * @memberof Prism
       * @public
       * @example
       * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
       */
      highlight: function(F, C, L) {
        var B = {
          code: F,
          grammar: C,
          language: L
        };
        if (g.hooks.run("before-tokenize", B), !B.grammar)
          throw new Error('The language "' + B.language + '" has no grammar.');
        return B.tokens = g.tokenize(B.code, B.grammar), g.hooks.run("after-tokenize", B), v.stringify(g.util.encode(B.tokens), B.language);
      },
      /**
       * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
       * and the language definitions to use, and returns an array with the tokenized code.
       *
       * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
       *
       * This method could be useful in other contexts as well, as a very crude parser.
       *
       * @param {string} text A string with the code to be highlighted.
       * @param {Grammar} grammar An object containing the tokens to use.
       *
       * Usually a language definition like `Prism.languages.markup`.
       * @returns {TokenStream} An array of strings and tokens, a token stream.
       * @memberof Prism
       * @public
       * @example
       * let code = `var foo = 0;`;
       * let tokens = Prism.tokenize(code, Prism.languages.javascript);
       * tokens.forEach(token => {
       *     if (token instanceof Prism.Token && token.type === 'number') {
       *         console.log(`Found numeric literal: ${token.content}`);
       *     }
       * });
       */
      tokenize: function(F, C) {
        var L = C.rest;
        if (L) {
          for (var B in L)
            C[B] = L[B];
          delete C.rest;
        }
        var O = new D();
        return q(O, O.head, F), S(F, O, C, O.head, 0), j(O);
      },
      /**
       * @namespace
       * @memberof Prism
       * @public
       */
      hooks: {
        all: {},
        /**
         * Adds the given callback to the list of callbacks for the given hook.
         *
         * The callback will be invoked when the hook it is registered for is run.
         * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
         *
         * One callback function can be registered to multiple hooks and the same hook multiple times.
         *
         * @param {string} name The name of the hook.
         * @param {HookCallback} callback The callback function which is given environment variables.
         * @public
         */
        add: function(F, C) {
          var L = g.hooks.all;
          L[F] = L[F] || [], L[F].push(C);
        },
        /**
         * Runs a hook invoking all registered callbacks with the given environment variables.
         *
         * Callbacks will be invoked synchronously and in the order in which they were registered.
         *
         * @param {string} name The name of the hook.
         * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
         * @public
         */
        run: function(F, C) {
          var L = g.hooks.all[F];
          if (!(!L || !L.length))
            for (var B = 0, O; O = L[B++]; )
              O(C);
        }
      },
      Token: v
    };
    i.Prism = g;
    function v(F, C, L, B) {
      this.type = F, this.content = C, this.alias = L, this.length = (B || "").length | 0;
    }
    v.stringify = function F(C, L) {
      if (typeof C == "string")
        return C;
      if (Array.isArray(C)) {
        var B = "";
        return C.forEach(function(ue) {
          B += F(ue, L);
        }), B;
      }
      var O = {
        type: C.type,
        content: F(C.content, L),
        tag: "span",
        classes: ["token", C.type],
        attributes: {},
        language: L
      }, G = C.alias;
      G && (Array.isArray(G) ? Array.prototype.push.apply(O.classes, G) : O.classes.push(G)), g.hooks.run("wrap", O);
      var Q = "";
      for (var Y in O.attributes)
        Q += " " + Y + '="' + (O.attributes[Y] || "").replace(/"/g, "&quot;") + '"';
      return "<" + O.tag + ' class="' + O.classes.join(" ") + '"' + Q + ">" + O.content + "</" + O.tag + ">";
    };
    function w(F, C, L, B) {
      F.lastIndex = C;
      var O = F.exec(L);
      if (O && B && O[1]) {
        var G = O[1].length;
        O.index += G, O[0] = O[0].slice(G);
      }
      return O;
    }
    function S(F, C, L, B, O, G) {
      for (var Q in L)
        if (!(!L.hasOwnProperty(Q) || !L[Q])) {
          var Y = L[Q];
          Y = Array.isArray(Y) ? Y : [Y];
          for (var ue = 0; ue < Y.length; ++ue) {
            if (G && G.cause == Q + "," + ue)
              return;
            var ge = Y[ue], Fe = ge.inside, Se = !!ge.lookbehind, Le = !!ge.greedy, rt = ge.alias;
            if (Le && !ge.pattern.global) {
              var Ct = ge.pattern.toString().match(/[imsuy]*$/)[0];
              ge.pattern = RegExp(ge.pattern.source, Ct + "g");
            }
            for (var xt = ge.pattern || ge, Ie = B.next, xe = O; Ie !== C.tail && !(G && xe >= G.reach); xe += Ie.value.length, Ie = Ie.next) {
              var at = Ie.value;
              if (C.length > F.length)
                return;
              if (!(at instanceof v)) {
                var I = 1, Oe;
                if (Le) {
                  if (Oe = w(xt, xe, F, Se), !Oe || Oe.index >= F.length)
                    break;
                  var Ge = Oe.index, ne = Oe.index + Oe[0].length, J = xe;
                  for (J += Ie.value.length; Ge >= J; )
                    Ie = Ie.next, J += Ie.value.length;
                  if (J -= Ie.value.length, xe = J, Ie.value instanceof v)
                    continue;
                  for (var Xe = Ie; Xe !== C.tail && (J < ne || typeof Xe.value == "string"); Xe = Xe.next)
                    I++, J += Xe.value.length;
                  I--, at = F.slice(xe, J), Oe.index -= xe;
                } else if (Oe = w(xt, 0, at, Se), !Oe)
                  continue;
                var Ge = Oe.index, bt = Oe[0], p0 = at.slice(0, Ge), G0 = at.slice(Ge + bt.length), Et = xe + at.length;
                G && Et > G.reach && (G.reach = Et);
                var yt = Ie.prev;
                p0 && (yt = q(C, yt, p0), xe += p0.length), Z(C, yt, I);
                var V0 = new v(Q, Fe ? g.tokenize(bt, Fe) : bt, rt, bt);
                if (Ie = q(C, yt, V0), G0 && q(C, Ie, G0), I > 1) {
                  var s0 = {
                    cause: Q + "," + ue,
                    reach: Et
                  };
                  S(F, C, L, Ie.prev, xe, s0), G && s0.reach > G.reach && (G.reach = s0.reach);
                }
              }
            }
          }
        }
    }
    function D() {
      var F = { value: null, prev: null, next: null }, C = { value: null, prev: F, next: null };
      F.next = C, this.head = F, this.tail = C, this.length = 0;
    }
    function q(F, C, L) {
      var B = C.next, O = { value: L, prev: C, next: B };
      return C.next = O, B.prev = O, F.length++, O;
    }
    function Z(F, C, L) {
      for (var B = C.next, O = 0; O < L && B !== F.tail; O++)
        B = B.next;
      C.next = B, B.prev = C, F.length -= O;
    }
    function j(F) {
      for (var C = [], L = F.head.next; L !== F.tail; )
        C.push(L.value), L = L.next;
      return C;
    }
    if (!i.document)
      return i.addEventListener && (g.disableWorkerMessageHandler || i.addEventListener("message", function(F) {
        var C = JSON.parse(F.data), L = C.language, B = C.code, O = C.immediateClose;
        i.postMessage(g.highlight(B, g.languages[L], L)), O && i.close();
      }, !1)), g;
    var re = g.util.currentScript();
    re && (g.filename = re.src, re.hasAttribute("data-manual") && (g.manual = !0));
    function $() {
      g.manual || g.highlightAll();
    }
    if (!g.manual) {
      var U = document.readyState;
      U === "loading" || U === "interactive" && re && re.defer ? document.addEventListener("DOMContentLoaded", $) : window.requestAnimationFrame ? window.requestAnimationFrame($) : window.setTimeout($, 16);
    }
    return g;
  }(r);
  s.exports && (s.exports = a), typeof Rn < "u" && (Rn.Prism = a), a.languages.markup = {
    comment: {
      pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
      greedy: !0
    },
    prolog: {
      pattern: /<\?[\s\S]+?\?>/,
      greedy: !0
    },
    doctype: {
      // https://www.w3.org/TR/xml/#NT-doctypedecl
      pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
      greedy: !0,
      inside: {
        "internal-subset": {
          pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
          lookbehind: !0,
          greedy: !0,
          inside: null
          // see below
        },
        string: {
          pattern: /"[^"]*"|'[^']*'/,
          greedy: !0
        },
        punctuation: /^<!|>$|[[\]]/,
        "doctype-tag": /^DOCTYPE/i,
        name: /[^\s<>'"]+/
      }
    },
    cdata: {
      pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
      greedy: !0
    },
    tag: {
      pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
      greedy: !0,
      inside: {
        tag: {
          pattern: /^<\/?[^\s>\/]+/,
          inside: {
            punctuation: /^<\/?/,
            namespace: /^[^\s>\/:]+:/
          }
        },
        "special-attr": [],
        "attr-value": {
          pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
          inside: {
            punctuation: [
              {
                pattern: /^=/,
                alias: "attr-equals"
              },
              {
                pattern: /^(\s*)["']|["']$/,
                lookbehind: !0
              }
            ]
          }
        },
        punctuation: /\/?>/,
        "attr-name": {
          pattern: /[^\s>\/]+/,
          inside: {
            namespace: /^[^\s>\/:]+:/
          }
        }
      }
    },
    entity: [
      {
        pattern: /&[\da-z]{1,8};/i,
        alias: "named-entity"
      },
      /&#x?[\da-f]{1,8};/i
    ]
  }, a.languages.markup.tag.inside["attr-value"].inside.entity = a.languages.markup.entity, a.languages.markup.doctype.inside["internal-subset"].inside = a.languages.markup, a.hooks.add("wrap", function(i) {
    i.type === "entity" && (i.attributes.title = i.content.replace(/&amp;/, "&"));
  }), Object.defineProperty(a.languages.markup.tag, "addInlined", {
    /**
     * Adds an inlined language to markup.
     *
     * An example of an inlined language is CSS with `<style>` tags.
     *
     * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
     * case insensitive.
     * @param {string} lang The language key.
     * @example
     * addInlined('style', 'css');
     */
    value: function(o, c) {
      var p = {};
      p["language-" + c] = {
        pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
        lookbehind: !0,
        inside: a.languages[c]
      }, p.cdata = /^<!\[CDATA\[|\]\]>$/i;
      var g = {
        "included-cdata": {
          pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
          inside: p
        }
      };
      g["language-" + c] = {
        pattern: /[\s\S]+/,
        inside: a.languages[c]
      };
      var v = {};
      v[o] = {
        pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
          return o;
        }), "i"),
        lookbehind: !0,
        greedy: !0,
        inside: g
      }, a.languages.insertBefore("markup", "cdata", v);
    }
  }), Object.defineProperty(a.languages.markup.tag, "addAttribute", {
    /**
     * Adds an pattern to highlight languages embedded in HTML attributes.
     *
     * An example of an inlined language is CSS with `style` attributes.
     *
     * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
     * case insensitive.
     * @param {string} lang The language key.
     * @example
     * addAttribute('style', 'css');
     */
    value: function(i, o) {
      a.languages.markup.tag.inside["special-attr"].push({
        pattern: RegExp(
          /(^|["'\s])/.source + "(?:" + i + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
          "i"
        ),
        lookbehind: !0,
        inside: {
          "attr-name": /^[^\s=]+/,
          "attr-value": {
            pattern: /=[\s\S]+/,
            inside: {
              value: {
                pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                lookbehind: !0,
                alias: [o, "language-" + o],
                inside: a.languages[o]
              },
              punctuation: [
                {
                  pattern: /^=/,
                  alias: "attr-equals"
                },
                /"|'/
              ]
            }
          }
        }
      });
    }
  }), a.languages.html = a.languages.markup, a.languages.mathml = a.languages.markup, a.languages.svg = a.languages.markup, a.languages.xml = a.languages.extend("markup", {}), a.languages.ssml = a.languages.xml, a.languages.atom = a.languages.xml, a.languages.rss = a.languages.xml, function(i) {
    var o = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
    i.languages.css = {
      comment: /\/\*[\s\S]*?\*\//,
      atrule: {
        pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + o.source + ")*?" + /(?:;|(?=\s*\{))/.source),
        inside: {
          rule: /^@[\w-]+/,
          "selector-function-argument": {
            pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
            lookbehind: !0,
            alias: "selector"
          },
          keyword: {
            pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
            lookbehind: !0
          }
          // See rest below
        }
      },
      url: {
        // https://drafts.csswg.org/css-values-3/#urls
        pattern: RegExp("\\burl\\((?:" + o.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
        greedy: !0,
        inside: {
          function: /^url/i,
          punctuation: /^\(|\)$/,
          string: {
            pattern: RegExp("^" + o.source + "$"),
            alias: "url"
          }
        }
      },
      selector: {
        pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + o.source + ")*(?=\\s*\\{)"),
        lookbehind: !0
      },
      string: {
        pattern: o,
        greedy: !0
      },
      property: {
        pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
        lookbehind: !0
      },
      important: /!important\b/i,
      function: {
        pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
        lookbehind: !0
      },
      punctuation: /[(){};:,]/
    }, i.languages.css.atrule.inside.rest = i.languages.css;
    var c = i.languages.markup;
    c && (c.tag.addInlined("style", "css"), c.tag.addAttribute("style", "css"));
  }(a), a.languages.clike = {
    comment: [
      {
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: !0,
        greedy: !0
      },
      {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: !0,
        greedy: !0
      }
    ],
    string: {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: !0
    },
    "class-name": {
      pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
      lookbehind: !0,
      inside: {
        punctuation: /[.\\]/
      }
    },
    keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
    boolean: /\b(?:false|true)\b/,
    function: /\b\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    punctuation: /[{}[\];(),.:]/
  }, a.languages.javascript = a.languages.extend("clike", {
    "class-name": [
      a.languages.clike["class-name"],
      {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
        lookbehind: !0
      }
    ],
    keyword: [
      {
        pattern: /((?:^|\})\s*)catch\b/,
        lookbehind: !0
      },
      {
        pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: !0
      }
    ],
    // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
    function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    number: {
      pattern: RegExp(
        /(^|[^\w$])/.source + "(?:" + // constant
        (/NaN|Infinity/.source + "|" + // binary integer
        /0[bB][01]+(?:_[01]+)*n?/.source + "|" + // octal integer
        /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + // hexadecimal integer
        /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + // decimal bigint
        /\d+(?:_\d+)*n/.source + "|" + // decimal number (integer or float) but no bigint
        /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source
      ),
      lookbehind: !0
    },
    operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
  }), a.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, a.languages.insertBefore("javascript", "keyword", {
    regex: {
      pattern: RegExp(
        // lookbehind
        // eslint-disable-next-line regexp/no-dupe-characters-character-class
        /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + // Regex pattern:
        // There are 2 regex patterns here. The RegExp set notation proposal added support for nested character
        // classes if the `v` flag is present. Unfortunately, nested CCs are both context-free and incompatible
        // with the only syntax, so we have to define 2 different regex patterns.
        /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + // `v` flag syntax. This supports 3 levels of nested character classes.
        /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + // lookahead
        /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source
      ),
      lookbehind: !0,
      greedy: !0,
      inside: {
        "regex-source": {
          pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
          lookbehind: !0,
          alias: "language-regex",
          inside: a.languages.regex
        },
        "regex-delimiter": /^\/|\/$/,
        "regex-flags": /^[a-z]+$/
      }
    },
    // This must be declared before keyword because we use "function" inside the look-forward
    "function-variable": {
      pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
      alias: "function"
    },
    parameter: [
      {
        pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
        lookbehind: !0,
        inside: a.languages.javascript
      },
      {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
        lookbehind: !0,
        inside: a.languages.javascript
      },
      {
        pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
        lookbehind: !0,
        inside: a.languages.javascript
      },
      {
        pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
        lookbehind: !0,
        inside: a.languages.javascript
      }
    ],
    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
  }), a.languages.insertBefore("javascript", "string", {
    hashbang: {
      pattern: /^#!.*/,
      greedy: !0,
      alias: "comment"
    },
    "template-string": {
      pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
      greedy: !0,
      inside: {
        "template-punctuation": {
          pattern: /^`|`$/,
          alias: "string"
        },
        interpolation: {
          pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
          lookbehind: !0,
          inside: {
            "interpolation-punctuation": {
              pattern: /^\$\{|\}$/,
              alias: "punctuation"
            },
            rest: a.languages.javascript
          }
        },
        string: /[\s\S]+/
      }
    },
    "string-property": {
      pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
      lookbehind: !0,
      greedy: !0,
      alias: "property"
    }
  }), a.languages.insertBefore("javascript", "operator", {
    "literal-property": {
      pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
      lookbehind: !0,
      alias: "property"
    }
  }), a.languages.markup && (a.languages.markup.tag.addInlined("script", "javascript"), a.languages.markup.tag.addAttribute(
    /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
    "javascript"
  )), a.languages.js = a.languages.javascript, function() {
    if (typeof a > "u" || typeof document > "u")
      return;
    Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);
    var i = "Loading…", o = function(re, $) {
      return "✖ Error " + re + " while fetching file: " + $;
    }, c = "✖ Error: File does not exist or is empty", p = {
      js: "javascript",
      py: "python",
      rb: "ruby",
      ps1: "powershell",
      psm1: "powershell",
      sh: "bash",
      bat: "batch",
      h: "c",
      tex: "latex"
    }, g = "data-src-status", v = "loading", w = "loaded", S = "failed", D = "pre[data-src]:not([" + g + '="' + w + '"]):not([' + g + '="' + v + '"])';
    function q(re, $, U) {
      var F = new XMLHttpRequest();
      F.open("GET", re, !0), F.onreadystatechange = function() {
        F.readyState == 4 && (F.status < 400 && F.responseText ? $(F.responseText) : F.status >= 400 ? U(o(F.status, F.statusText)) : U(c));
      }, F.send(null);
    }
    function Z(re) {
      var $ = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(re || "");
      if ($) {
        var U = Number($[1]), F = $[2], C = $[3];
        return F ? C ? [U, Number(C)] : [U, void 0] : [U, U];
      }
    }
    a.hooks.add("before-highlightall", function(re) {
      re.selector += ", " + D;
    }), a.hooks.add("before-sanity-check", function(re) {
      var $ = (
        /** @type {HTMLPreElement} */
        re.element
      );
      if ($.matches(D)) {
        re.code = "", $.setAttribute(g, v);
        var U = $.appendChild(document.createElement("CODE"));
        U.textContent = i;
        var F = $.getAttribute("data-src"), C = re.language;
        if (C === "none") {
          var L = (/\.(\w+)$/.exec(F) || [, "none"])[1];
          C = p[L] || L;
        }
        a.util.setLanguage(U, C), a.util.setLanguage($, C);
        var B = a.plugins.autoloader;
        B && B.loadLanguages(C), q(
          F,
          function(O) {
            $.setAttribute(g, w);
            var G = Z($.getAttribute("data-range"));
            if (G) {
              var Q = O.split(/\r\n?|\n/g), Y = G[0], ue = G[1] == null ? Q.length : G[1];
              Y < 0 && (Y += Q.length), Y = Math.max(0, Math.min(Y - 1, Q.length)), ue < 0 && (ue += Q.length), ue = Math.max(0, Math.min(ue, Q.length)), O = Q.slice(Y, ue).join(`
`), $.hasAttribute("data-start") || $.setAttribute("data-start", String(Y + 1));
            }
            U.textContent = O, a.highlightElement(U);
          },
          function(O) {
            $.setAttribute(g, S), U.textContent = O;
          }
        );
      }
    }), a.plugins.fileHighlight = {
      /**
       * Executes the File Highlight plugin for all matching `pre` elements under the given container.
       *
       * Note: Elements which are already loaded or currently loading will not be touched by this method.
       *
       * @param {ParentNode} [container=document]
       */
      highlight: function($) {
        for (var U = ($ || document).querySelectorAll(D), F = 0, C; C = U[F++]; )
          a.highlightElement(C);
      }
    };
    var j = !1;
    a.fileHighlight = function() {
      j || (console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."), j = !0), a.plugins.fileHighlight.highlight.apply(this, arguments);
    };
  }();
})(Co);
var ah = Co.exports;
const Wa = /* @__PURE__ */ wo(ah);
Prism.languages.python = {
  comment: {
    pattern: /(^|[^\\])#.*/,
    lookbehind: !0,
    greedy: !0
  },
  "string-interpolation": {
    pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
    greedy: !0,
    inside: {
      interpolation: {
        // "{" <expression> <optional "!s", "!r", or "!a"> <optional ":" format specifier> "}"
        pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
        lookbehind: !0,
        inside: {
          "format-spec": {
            pattern: /(:)[^:(){}]+(?=\}$)/,
            lookbehind: !0
          },
          "conversion-option": {
            pattern: /![sra](?=[:}]$)/,
            alias: "punctuation"
          },
          rest: null
        }
      },
      string: /[\s\S]+/
    }
  },
  "triple-quoted-string": {
    pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
    greedy: !0,
    alias: "string"
  },
  string: {
    pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
    greedy: !0
  },
  function: {
    pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
    lookbehind: !0
  },
  "class-name": {
    pattern: /(\bclass\s+)\w+/i,
    lookbehind: !0
  },
  decorator: {
    pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
    lookbehind: !0,
    alias: ["annotation", "punctuation"],
    inside: {
      punctuation: /\./
    }
  },
  keyword: /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
  builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
  boolean: /\b(?:False|None|True)\b/,
  number: /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
  operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
  punctuation: /[{}[\];(),.:]/
};
Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest = Prism.languages.python;
Prism.languages.py = Prism.languages.python;
(function(s) {
  var r = /\\(?:[^a-z()[\]]|[a-z*]+)/i, a = {
    "equation-command": {
      pattern: r,
      alias: "regex"
    }
  };
  s.languages.latex = {
    comment: /%.*/,
    // the verbatim environment prints whitespace to the document
    cdata: {
      pattern: /(\\begin\{((?:lstlisting|verbatim)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
      lookbehind: !0
    },
    /*
     * equations can be between $$ $$ or $ $ or \( \) or \[ \]
     * (all are multiline)
     */
    equation: [
      {
        pattern: /\$\$(?:\\[\s\S]|[^\\$])+\$\$|\$(?:\\[\s\S]|[^\\$])+\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]/,
        inside: a,
        alias: "string"
      },
      {
        pattern: /(\\begin\{((?:align|eqnarray|equation|gather|math|multline)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
        lookbehind: !0,
        inside: a,
        alias: "string"
      }
    ],
    /*
     * arguments which are keywords or references are highlighted
     * as keywords
     */
    keyword: {
      pattern: /(\\(?:begin|cite|documentclass|end|label|ref|usepackage)(?:\[[^\]]+\])?\{)[^}]+(?=\})/,
      lookbehind: !0
    },
    url: {
      pattern: /(\\url\{)[^}]+(?=\})/,
      lookbehind: !0
    },
    /*
     * section or chapter headlines are highlighted as bold so that
     * they stand out more
     */
    headline: {
      pattern: /(\\(?:chapter|frametitle|paragraph|part|section|subparagraph|subsection|subsubparagraph|subsubsection|subsubsubparagraph)\*?(?:\[[^\]]+\])?\{)[^}]+(?=\})/,
      lookbehind: !0,
      alias: "class-name"
    },
    function: {
      pattern: r,
      alias: "selector"
    },
    punctuation: /[[\]{}&]/
  }, s.languages.tex = s.languages.latex, s.languages.context = s.languages.latex;
})(Prism);
function ls(s, r) {
  return s ?? r();
}
function ih(s) {
  let r, a = s[0], i = 1;
  for (; i < s.length; ) {
    const o = s[i], c = s[i + 1];
    if (i += 2, (o === "optionalAccess" || o === "optionalCall") && a == null)
      return;
    o === "access" || o === "optionalAccess" ? (r = a, a = c(a)) : (o === "call" || o === "optionalCall") && (a = c((...p) => a.call(r, ...p)), r = void 0);
  }
  return a;
}
const lh = `<svg
xmlns="http://www.w3.org/2000/svg"
width="100%"
height="100%"
viewBox="0 0 32 32"
><path
  fill="currentColor"
  d="M28 10v18H10V10h18m0-2H10a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2Z"
/><path fill="currentColor" d="M4 18H2V4a2 2 0 0 1 2-2h14v2H4Z" /></svg>`, sh = `<svg
xmlns="http://www.w3.org/2000/svg"
width="100%"
height="100%"
viewBox="0 0 24 24"
fill="none"
stroke="currentColor"
stroke-width="3"
stroke-linecap="round"
stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>`, ss = `<button title="copy" class="copy_code_button">
<span class="copy-text">${lh}</span>
<span class="check">${sh}</span>
</button>`, Eo = /[&<>"']/, oh = new RegExp(Eo.source, "g"), Bo = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, uh = new RegExp(Bo.source, "g"), ch = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, os = (s) => ch[s] || "";
function ja(s, r) {
  if (r) {
    if (Eo.test(s))
      return s.replace(oh, os);
  } else if (Bo.test(s))
    return s.replace(uh, os);
  return s;
}
const hh = {
  code(s, r, a) {
    const i = ls(ih([ls(r, () => ""), "access", (o) => o.match, "call", (o) => o(/\S*/), "optionalAccess", (o) => o[0]]), () => "");
    if (this.options.highlight) {
      const o = this.options.highlight(s, i);
      o != null && o !== s && (a = !0, s = o);
    }
    return s = s.replace(/\n$/, "") + `
`, i ? '<div class="code_wrap">' + ss + '<pre><code class="' + this.options.langPrefix + ja(i) + '">' + (a ? s : ja(s, !0)) + `</code></pre></div>
` : '<div class="code_wrap">' + ss + "<pre><code>" + (a ? s : ja(s, !0)) + `</code></pre></div>
`;
  }
};
Ee.use(
  {
    gfm: !0,
    pedantic: !1,
    headerIds: !1,
    mangle: !1
  },
  $4({
    highlight: (s, r) => Wa.languages[r] ? Wa.highlight(s, Wa.languages[r], r) : s
  }),
  { renderer: hh }
);
const {
  HtmlTag: fh,
  SvelteComponent: mh,
  attr: dh,
  binding_callbacks: ph,
  detach: si,
  element: gh,
  empty: vh,
  init: bh,
  insert: oi,
  noop: us,
  safe_not_equal: yh,
  set_data: wh,
  text: kh,
  toggle_class: cs
} = window.__gradio__svelte__internal, { afterUpdate: _h, createEventDispatcher: E2 } = window.__gradio__svelte__internal;
function xh(s) {
  let r;
  return {
    c() {
      r = kh(
        /*html*/
        s[3]
      );
    },
    m(a, i) {
      oi(a, r, i);
    },
    p(a, i) {
      i & /*html*/
      8 && wh(
        r,
        /*html*/
        a[3]
      );
    },
    d(a) {
      a && si(r);
    }
  };
}
function Sh(s) {
  let r, a;
  return {
    c() {
      r = new fh(!1), a = vh(), r.a = a;
    },
    m(i, o) {
      r.m(
        /*html*/
        s[3],
        i,
        o
      ), oi(i, a, o);
    },
    p(i, o) {
      o & /*html*/
      8 && r.p(
        /*html*/
        i[3]
      );
    },
    d(i) {
      i && (si(a), r.d());
    }
  };
}
function Ah(s) {
  let r;
  function a(c, p) {
    return (
      /*render_markdown*/
      c[1] ? Sh : xh
    );
  }
  let i = a(s), o = i(s);
  return {
    c() {
      r = gh("span"), o.c(), dh(r, "class", "md svelte-hba3gc"), cs(
        r,
        "chatbot",
        /*chatbot*/
        s[0]
      );
    },
    m(c, p) {
      oi(c, r, p), o.m(r, null), s[8](r);
    },
    p(c, [p]) {
      i === (i = a(c)) && o ? o.p(c, p) : (o.d(1), o = i(c), o && (o.c(), o.m(r, null))), p & /*chatbot*/
      1 && cs(
        r,
        "chatbot",
        /*chatbot*/
        c[0]
      );
    },
    i: us,
    o: us,
    d(c) {
      c && si(r), o.d(), s[8](null);
    }
  };
}
function Th(s, r, a) {
  let { chatbot: i = !0 } = r, { message: o } = r, { sanitize_html: c = !0 } = r, { latex_delimiters: p = [] } = r, { render_markdown: g = !0 } = r, { line_breaks: v = !0 } = r, w, S;
  Ee.use({ breaks: v }), Kl.addHook("afterSanitizeAttributes", function(j) {
    "target" in j && (j.setAttribute("target", "_blank"), j.setAttribute("rel", "noopener noreferrer"));
  });
  function D(j) {
    return g && (j = Ee.parse(j)), c && (j = Kl.sanitize(j)), j;
  }
  async function q(j) {
    p.length > 0 && j && L4(w, {
      delimiters: p,
      throwOnError: !1
    });
  }
  _h(() => q(o));
  function Z(j) {
    ph[j ? "unshift" : "push"](() => {
      w = j, a(2, w);
    });
  }
  return s.$$set = (j) => {
    "chatbot" in j && a(0, i = j.chatbot), "message" in j && a(4, o = j.message), "sanitize_html" in j && a(5, c = j.sanitize_html), "latex_delimiters" in j && a(6, p = j.latex_delimiters), "render_markdown" in j && a(1, g = j.render_markdown), "line_breaks" in j && a(7, v = j.line_breaks);
  }, s.$$.update = () => {
    s.$$.dirty & /*message*/
    16 && (o && o.trim() ? a(3, S = D(o)) : a(3, S = ""));
  }, [
    i,
    g,
    w,
    S,
    o,
    c,
    p,
    v,
    Z
  ];
}
class Mh extends mh {
  constructor(r) {
    super(), bh(this, r, Th, Ah, yh, {
      chatbot: 0,
      message: 4,
      sanitize_html: 5,
      latex_delimiters: 6,
      render_markdown: 1,
      line_breaks: 7
    });
  }
}
function gr(s) {
  let r = ["", "k", "M", "G", "T", "P", "E", "Z"], a = 0;
  for (; s > 1e3 && a < r.length - 1; )
    s /= 1e3, a++;
  let i = r[a];
  return (Number.isInteger(s) ? s : s.toFixed(1)) + i;
}
function Nn() {
}
function zh(s, r) {
  return s != s ? r == r : s !== r || s && typeof s == "object" || typeof s == "function";
}
const Do = typeof window < "u";
let hs = Do ? () => window.performance.now() : () => Date.now(), No = Do ? (s) => requestAnimationFrame(s) : Nn;
const br = /* @__PURE__ */ new Set();
function Ro(s) {
  br.forEach((r) => {
    r.c(s) || (br.delete(r), r.f());
  }), br.size !== 0 && No(Ro);
}
function Ch(s) {
  let r;
  return br.size === 0 && No(Ro), {
    promise: new Promise((a) => {
      br.add(r = { c: s, f: a });
    }),
    abort() {
      br.delete(r);
    }
  };
}
const pr = [];
function Eh(s, r = Nn) {
  let a;
  const i = /* @__PURE__ */ new Set();
  function o(g) {
    if (zh(s, g) && (s = g, a)) {
      const v = !pr.length;
      for (const w of i)
        w[1](), pr.push(w, s);
      if (v) {
        for (let w = 0; w < pr.length; w += 2)
          pr[w][0](pr[w + 1]);
        pr.length = 0;
      }
    }
  }
  function c(g) {
    o(g(s));
  }
  function p(g, v = Nn) {
    const w = [g, v];
    return i.add(w), i.size === 1 && (a = r(o, c) || Nn), g(s), () => {
      i.delete(w), i.size === 0 && a && (a(), a = null);
    };
  }
  return { set: o, update: c, subscribe: p };
}
function fs(s) {
  return Object.prototype.toString.call(s) === "[object Date]";
}
function ti(s, r, a, i) {
  if (typeof a == "number" || fs(a)) {
    const o = i - a, c = (a - r) / (s.dt || 1 / 60), p = s.opts.stiffness * o, g = s.opts.damping * c, v = (p - g) * s.inv_mass, w = (c + v) * s.dt;
    return Math.abs(w) < s.opts.precision && Math.abs(o) < s.opts.precision ? i : (s.settled = !1, fs(a) ? new Date(a.getTime() + w) : a + w);
  } else {
    if (Array.isArray(a))
      return a.map(
        (o, c) => ti(s, r[c], a[c], i[c])
      );
    if (typeof a == "object") {
      const o = {};
      for (const c in a)
        o[c] = ti(s, r[c], a[c], i[c]);
      return o;
    } else
      throw new Error(`Cannot spring ${typeof a} values`);
  }
}
function ms(s, r = {}) {
  const a = Eh(s), { stiffness: i = 0.15, damping: o = 0.8, precision: c = 0.01 } = r;
  let p, g, v, w = s, S = s, D = 1, q = 0, Z = !1;
  function j($, U = {}) {
    S = $;
    const F = v = {};
    return s == null || U.hard || re.stiffness >= 1 && re.damping >= 1 ? (Z = !0, p = hs(), w = $, a.set(s = S), Promise.resolve()) : (U.soft && (q = 1 / ((U.soft === !0 ? 0.5 : +U.soft) * 60), D = 0), g || (p = hs(), Z = !1, g = Ch((C) => {
      if (Z)
        return Z = !1, g = null, !1;
      D = Math.min(D + q, 1);
      const L = {
        inv_mass: D,
        opts: re,
        settled: !0,
        dt: (C - p) * 60 / 1e3
      }, B = ti(L, w, s, S);
      return p = C, w = s, a.set(s = B), L.settled && (g = null), !L.settled;
    })), new Promise((C) => {
      g.promise.then(() => {
        F === v && C();
      });
    }));
  }
  const re = {
    set: j,
    update: ($, U) => j($(S, s), U),
    subscribe: a.subscribe,
    stiffness: i,
    damping: o,
    precision: c
  };
  return re;
}
const {
  SvelteComponent: Bh,
  append: Vt,
  attr: ze,
  component_subscribe: ds,
  detach: Dh,
  element: Nh,
  init: Rh,
  insert: Fh,
  noop: ps,
  safe_not_equal: Lh,
  set_style: Tn,
  svg_element: Wt,
  toggle_class: gs
} = window.__gradio__svelte__internal, { onMount: Ih } = window.__gradio__svelte__internal;
function Oh(s) {
  let r, a, i, o, c, p, g, v, w, S, D, q;
  return {
    c() {
      r = Nh("div"), a = Wt("svg"), i = Wt("g"), o = Wt("path"), c = Wt("path"), p = Wt("path"), g = Wt("path"), v = Wt("g"), w = Wt("path"), S = Wt("path"), D = Wt("path"), q = Wt("path"), ze(o, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), ze(o, "fill", "#FF7C00"), ze(o, "fill-opacity", "0.4"), ze(o, "class", "svelte-43sxxs"), ze(c, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), ze(c, "fill", "#FF7C00"), ze(c, "class", "svelte-43sxxs"), ze(p, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), ze(p, "fill", "#FF7C00"), ze(p, "fill-opacity", "0.4"), ze(p, "class", "svelte-43sxxs"), ze(g, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), ze(g, "fill", "#FF7C00"), ze(g, "class", "svelte-43sxxs"), Tn(i, "transform", "translate(" + /*$top*/
      s[1][0] + "px, " + /*$top*/
      s[1][1] + "px)"), ze(w, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), ze(w, "fill", "#FF7C00"), ze(w, "fill-opacity", "0.4"), ze(w, "class", "svelte-43sxxs"), ze(S, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), ze(S, "fill", "#FF7C00"), ze(S, "class", "svelte-43sxxs"), ze(D, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), ze(D, "fill", "#FF7C00"), ze(D, "fill-opacity", "0.4"), ze(D, "class", "svelte-43sxxs"), ze(q, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), ze(q, "fill", "#FF7C00"), ze(q, "class", "svelte-43sxxs"), Tn(v, "transform", "translate(" + /*$bottom*/
      s[2][0] + "px, " + /*$bottom*/
      s[2][1] + "px)"), ze(a, "viewBox", "-1200 -1200 3000 3000"), ze(a, "fill", "none"), ze(a, "xmlns", "http://www.w3.org/2000/svg"), ze(a, "class", "svelte-43sxxs"), ze(r, "class", "svelte-43sxxs"), gs(
        r,
        "margin",
        /*margin*/
        s[0]
      );
    },
    m(Z, j) {
      Fh(Z, r, j), Vt(r, a), Vt(a, i), Vt(i, o), Vt(i, c), Vt(i, p), Vt(i, g), Vt(a, v), Vt(v, w), Vt(v, S), Vt(v, D), Vt(v, q);
    },
    p(Z, [j]) {
      j & /*$top*/
      2 && Tn(i, "transform", "translate(" + /*$top*/
      Z[1][0] + "px, " + /*$top*/
      Z[1][1] + "px)"), j & /*$bottom*/
      4 && Tn(v, "transform", "translate(" + /*$bottom*/
      Z[2][0] + "px, " + /*$bottom*/
      Z[2][1] + "px)"), j & /*margin*/
      1 && gs(
        r,
        "margin",
        /*margin*/
        Z[0]
      );
    },
    i: ps,
    o: ps,
    d(Z) {
      Z && Dh(r);
    }
  };
}
function qh(s, r, a) {
  let i, o, { margin: c = !0 } = r;
  const p = ms([0, 0]);
  ds(s, p, (q) => a(1, i = q));
  const g = ms([0, 0]);
  ds(s, g, (q) => a(2, o = q));
  let v;
  async function w() {
    await Promise.all([p.set([125, 140]), g.set([-125, -140])]), await Promise.all([p.set([-125, 140]), g.set([125, -140])]), await Promise.all([p.set([-125, 0]), g.set([125, -0])]), await Promise.all([p.set([125, 0]), g.set([-125, 0])]);
  }
  async function S() {
    await w(), v || S();
  }
  async function D() {
    await Promise.all([p.set([125, 0]), g.set([-125, 0])]), S();
  }
  return Ih(() => (D(), () => v = !0)), s.$$set = (q) => {
    "margin" in q && a(0, c = q.margin);
  }, [c, i, o, p, g];
}
class Ph extends Bh {
  constructor(r) {
    super(), Rh(this, r, qh, Oh, Lh, { margin: 0 });
  }
}
const {
  SvelteComponent: Hh,
  append: $0,
  attr: n0,
  binding_callbacks: vs,
  check_outros: Fo,
  create_component: Uh,
  create_slot: Gh,
  destroy_component: Vh,
  destroy_each: Lo,
  detach: we,
  element: d0,
  empty: Ar,
  ensure_array_like: On,
  get_all_dirty_from_scope: Wh,
  get_slot_changes: jh,
  group_outros: Io,
  init: Yh,
  insert: ke,
  mount_component: Xh,
  noop: ri,
  safe_not_equal: Zh,
  set_data: Ht,
  set_style: O0,
  space: a0,
  text: Qe,
  toggle_class: Ot,
  transition_in: yr,
  transition_out: wr,
  update_slot_base: Kh
} = window.__gradio__svelte__internal, { tick: Qh } = window.__gradio__svelte__internal, { onDestroy: Jh } = window.__gradio__svelte__internal, $h = (s) => ({}), bs = (s) => ({});
function ys(s, r, a) {
  const i = s.slice();
  return i[38] = r[a], i[40] = a, i;
}
function ws(s, r, a) {
  const i = s.slice();
  return i[38] = r[a], i;
}
function ef(s) {
  let r, a = (
    /*i18n*/
    s[1]("common.error") + ""
  ), i, o, c;
  const p = (
    /*#slots*/
    s[29].error
  ), g = Gh(
    p,
    s,
    /*$$scope*/
    s[28],
    bs
  );
  return {
    c() {
      r = d0("span"), i = Qe(a), o = a0(), g && g.c(), n0(r, "class", "error svelte-14miwb5");
    },
    m(v, w) {
      ke(v, r, w), $0(r, i), ke(v, o, w), g && g.m(v, w), c = !0;
    },
    p(v, w) {
      (!c || w[0] & /*i18n*/
      2) && a !== (a = /*i18n*/
      v[1]("common.error") + "") && Ht(i, a), g && g.p && (!c || w[0] & /*$$scope*/
      268435456) && Kh(
        g,
        p,
        v,
        /*$$scope*/
        v[28],
        c ? jh(
          p,
          /*$$scope*/
          v[28],
          w,
          $h
        ) : Wh(
          /*$$scope*/
          v[28]
        ),
        bs
      );
    },
    i(v) {
      c || (yr(g, v), c = !0);
    },
    o(v) {
      wr(g, v), c = !1;
    },
    d(v) {
      v && (we(r), we(o)), g && g.d(v);
    }
  };
}
function tf(s) {
  let r, a, i, o, c, p, g, v, w, S = (
    /*variant*/
    s[8] === "default" && /*show_eta_bar*/
    s[18] && /*show_progress*/
    s[6] === "full" && ks(s)
  );
  function D(C, L) {
    if (
      /*progress*/
      C[7]
    )
      return af;
    if (
      /*queue_position*/
      C[2] !== null && /*queue_size*/
      C[3] !== void 0 && /*queue_position*/
      C[2] >= 0
    )
      return nf;
    if (
      /*queue_position*/
      C[2] === 0
    )
      return rf;
  }
  let q = D(s), Z = q && q(s), j = (
    /*timer*/
    s[5] && Ss(s)
  );
  const re = [uf, of], $ = [];
  function U(C, L) {
    return (
      /*last_progress_level*/
      C[15] != null ? 0 : (
        /*show_progress*/
        C[6] === "full" ? 1 : -1
      )
    );
  }
  ~(c = U(s)) && (p = $[c] = re[c](s));
  let F = !/*timer*/
  s[5] && Bs(s);
  return {
    c() {
      S && S.c(), r = a0(), a = d0("div"), Z && Z.c(), i = a0(), j && j.c(), o = a0(), p && p.c(), g = a0(), F && F.c(), v = Ar(), n0(a, "class", "progress-text svelte-14miwb5"), Ot(
        a,
        "meta-text-center",
        /*variant*/
        s[8] === "center"
      ), Ot(
        a,
        "meta-text",
        /*variant*/
        s[8] === "default"
      );
    },
    m(C, L) {
      S && S.m(C, L), ke(C, r, L), ke(C, a, L), Z && Z.m(a, null), $0(a, i), j && j.m(a, null), ke(C, o, L), ~c && $[c].m(C, L), ke(C, g, L), F && F.m(C, L), ke(C, v, L), w = !0;
    },
    p(C, L) {
      /*variant*/
      C[8] === "default" && /*show_eta_bar*/
      C[18] && /*show_progress*/
      C[6] === "full" ? S ? S.p(C, L) : (S = ks(C), S.c(), S.m(r.parentNode, r)) : S && (S.d(1), S = null), q === (q = D(C)) && Z ? Z.p(C, L) : (Z && Z.d(1), Z = q && q(C), Z && (Z.c(), Z.m(a, i))), /*timer*/
      C[5] ? j ? j.p(C, L) : (j = Ss(C), j.c(), j.m(a, null)) : j && (j.d(1), j = null), (!w || L[0] & /*variant*/
      256) && Ot(
        a,
        "meta-text-center",
        /*variant*/
        C[8] === "center"
      ), (!w || L[0] & /*variant*/
      256) && Ot(
        a,
        "meta-text",
        /*variant*/
        C[8] === "default"
      );
      let B = c;
      c = U(C), c === B ? ~c && $[c].p(C, L) : (p && (Io(), wr($[B], 1, 1, () => {
        $[B] = null;
      }), Fo()), ~c ? (p = $[c], p ? p.p(C, L) : (p = $[c] = re[c](C), p.c()), yr(p, 1), p.m(g.parentNode, g)) : p = null), /*timer*/
      C[5] ? F && (F.d(1), F = null) : F ? F.p(C, L) : (F = Bs(C), F.c(), F.m(v.parentNode, v));
    },
    i(C) {
      w || (yr(p), w = !0);
    },
    o(C) {
      wr(p), w = !1;
    },
    d(C) {
      C && (we(r), we(a), we(o), we(g), we(v)), S && S.d(C), Z && Z.d(), j && j.d(), ~c && $[c].d(C), F && F.d(C);
    }
  };
}
function ks(s) {
  let r, a = `translateX(${/*eta_level*/
  (s[17] || 0) * 100 - 100}%)`;
  return {
    c() {
      r = d0("div"), n0(r, "class", "eta-bar svelte-14miwb5"), O0(r, "transform", a);
    },
    m(i, o) {
      ke(i, r, o);
    },
    p(i, o) {
      o[0] & /*eta_level*/
      131072 && a !== (a = `translateX(${/*eta_level*/
      (i[17] || 0) * 100 - 100}%)`) && O0(r, "transform", a);
    },
    d(i) {
      i && we(r);
    }
  };
}
function rf(s) {
  let r;
  return {
    c() {
      r = Qe("processing |");
    },
    m(a, i) {
      ke(a, r, i);
    },
    p: ri,
    d(a) {
      a && we(r);
    }
  };
}
function nf(s) {
  let r, a = (
    /*queue_position*/
    s[2] + 1 + ""
  ), i, o, c, p;
  return {
    c() {
      r = Qe("queue: "), i = Qe(a), o = Qe("/"), c = Qe(
        /*queue_size*/
        s[3]
      ), p = Qe(" |");
    },
    m(g, v) {
      ke(g, r, v), ke(g, i, v), ke(g, o, v), ke(g, c, v), ke(g, p, v);
    },
    p(g, v) {
      v[0] & /*queue_position*/
      4 && a !== (a = /*queue_position*/
      g[2] + 1 + "") && Ht(i, a), v[0] & /*queue_size*/
      8 && Ht(
        c,
        /*queue_size*/
        g[3]
      );
    },
    d(g) {
      g && (we(r), we(i), we(o), we(c), we(p));
    }
  };
}
function af(s) {
  let r, a = On(
    /*progress*/
    s[7]
  ), i = [];
  for (let o = 0; o < a.length; o += 1)
    i[o] = xs(ws(s, a, o));
  return {
    c() {
      for (let o = 0; o < i.length; o += 1)
        i[o].c();
      r = Ar();
    },
    m(o, c) {
      for (let p = 0; p < i.length; p += 1)
        i[p] && i[p].m(o, c);
      ke(o, r, c);
    },
    p(o, c) {
      if (c[0] & /*progress*/
      128) {
        a = On(
          /*progress*/
          o[7]
        );
        let p;
        for (p = 0; p < a.length; p += 1) {
          const g = ws(o, a, p);
          i[p] ? i[p].p(g, c) : (i[p] = xs(g), i[p].c(), i[p].m(r.parentNode, r));
        }
        for (; p < i.length; p += 1)
          i[p].d(1);
        i.length = a.length;
      }
    },
    d(o) {
      o && we(r), Lo(i, o);
    }
  };
}
function _s(s) {
  let r, a = (
    /*p*/
    s[38].unit + ""
  ), i, o, c = " ", p;
  function g(S, D) {
    return (
      /*p*/
      S[38].length != null ? sf : lf
    );
  }
  let v = g(s), w = v(s);
  return {
    c() {
      w.c(), r = a0(), i = Qe(a), o = Qe(" | "), p = Qe(c);
    },
    m(S, D) {
      w.m(S, D), ke(S, r, D), ke(S, i, D), ke(S, o, D), ke(S, p, D);
    },
    p(S, D) {
      v === (v = g(S)) && w ? w.p(S, D) : (w.d(1), w = v(S), w && (w.c(), w.m(r.parentNode, r))), D[0] & /*progress*/
      128 && a !== (a = /*p*/
      S[38].unit + "") && Ht(i, a);
    },
    d(S) {
      S && (we(r), we(i), we(o), we(p)), w.d(S);
    }
  };
}
function lf(s) {
  let r = gr(
    /*p*/
    s[38].index || 0
  ) + "", a;
  return {
    c() {
      a = Qe(r);
    },
    m(i, o) {
      ke(i, a, o);
    },
    p(i, o) {
      o[0] & /*progress*/
      128 && r !== (r = gr(
        /*p*/
        i[38].index || 0
      ) + "") && Ht(a, r);
    },
    d(i) {
      i && we(a);
    }
  };
}
function sf(s) {
  let r = gr(
    /*p*/
    s[38].index || 0
  ) + "", a, i, o = gr(
    /*p*/
    s[38].length
  ) + "", c;
  return {
    c() {
      a = Qe(r), i = Qe("/"), c = Qe(o);
    },
    m(p, g) {
      ke(p, a, g), ke(p, i, g), ke(p, c, g);
    },
    p(p, g) {
      g[0] & /*progress*/
      128 && r !== (r = gr(
        /*p*/
        p[38].index || 0
      ) + "") && Ht(a, r), g[0] & /*progress*/
      128 && o !== (o = gr(
        /*p*/
        p[38].length
      ) + "") && Ht(c, o);
    },
    d(p) {
      p && (we(a), we(i), we(c));
    }
  };
}
function xs(s) {
  let r, a = (
    /*p*/
    s[38].index != null && _s(s)
  );
  return {
    c() {
      a && a.c(), r = Ar();
    },
    m(i, o) {
      a && a.m(i, o), ke(i, r, o);
    },
    p(i, o) {
      /*p*/
      i[38].index != null ? a ? a.p(i, o) : (a = _s(i), a.c(), a.m(r.parentNode, r)) : a && (a.d(1), a = null);
    },
    d(i) {
      i && we(r), a && a.d(i);
    }
  };
}
function Ss(s) {
  let r, a = (
    /*eta*/
    s[0] ? `/${/*formatted_eta*/
    s[19]}` : ""
  ), i, o;
  return {
    c() {
      r = Qe(
        /*formatted_timer*/
        s[20]
      ), i = Qe(a), o = Qe("s");
    },
    m(c, p) {
      ke(c, r, p), ke(c, i, p), ke(c, o, p);
    },
    p(c, p) {
      p[0] & /*formatted_timer*/
      1048576 && Ht(
        r,
        /*formatted_timer*/
        c[20]
      ), p[0] & /*eta, formatted_eta*/
      524289 && a !== (a = /*eta*/
      c[0] ? `/${/*formatted_eta*/
      c[19]}` : "") && Ht(i, a);
    },
    d(c) {
      c && (we(r), we(i), we(o));
    }
  };
}
function of(s) {
  let r, a;
  return r = new Ph({
    props: { margin: (
      /*variant*/
      s[8] === "default"
    ) }
  }), {
    c() {
      Uh(r.$$.fragment);
    },
    m(i, o) {
      Xh(r, i, o), a = !0;
    },
    p(i, o) {
      const c = {};
      o[0] & /*variant*/
      256 && (c.margin = /*variant*/
      i[8] === "default"), r.$set(c);
    },
    i(i) {
      a || (yr(r.$$.fragment, i), a = !0);
    },
    o(i) {
      wr(r.$$.fragment, i), a = !1;
    },
    d(i) {
      Vh(r, i);
    }
  };
}
function uf(s) {
  let r, a, i, o, c, p = `${/*last_progress_level*/
  s[15] * 100}%`, g = (
    /*progress*/
    s[7] != null && As(s)
  );
  return {
    c() {
      r = d0("div"), a = d0("div"), g && g.c(), i = a0(), o = d0("div"), c = d0("div"), n0(a, "class", "progress-level-inner svelte-14miwb5"), n0(c, "class", "progress-bar svelte-14miwb5"), O0(c, "width", p), n0(o, "class", "progress-bar-wrap svelte-14miwb5"), n0(r, "class", "progress-level svelte-14miwb5");
    },
    m(v, w) {
      ke(v, r, w), $0(r, a), g && g.m(a, null), $0(r, i), $0(r, o), $0(o, c), s[30](c);
    },
    p(v, w) {
      /*progress*/
      v[7] != null ? g ? g.p(v, w) : (g = As(v), g.c(), g.m(a, null)) : g && (g.d(1), g = null), w[0] & /*last_progress_level*/
      32768 && p !== (p = `${/*last_progress_level*/
      v[15] * 100}%`) && O0(c, "width", p);
    },
    i: ri,
    o: ri,
    d(v) {
      v && we(r), g && g.d(), s[30](null);
    }
  };
}
function As(s) {
  let r, a = On(
    /*progress*/
    s[7]
  ), i = [];
  for (let o = 0; o < a.length; o += 1)
    i[o] = Es(ys(s, a, o));
  return {
    c() {
      for (let o = 0; o < i.length; o += 1)
        i[o].c();
      r = Ar();
    },
    m(o, c) {
      for (let p = 0; p < i.length; p += 1)
        i[p] && i[p].m(o, c);
      ke(o, r, c);
    },
    p(o, c) {
      if (c[0] & /*progress_level, progress*/
      16512) {
        a = On(
          /*progress*/
          o[7]
        );
        let p;
        for (p = 0; p < a.length; p += 1) {
          const g = ys(o, a, p);
          i[p] ? i[p].p(g, c) : (i[p] = Es(g), i[p].c(), i[p].m(r.parentNode, r));
        }
        for (; p < i.length; p += 1)
          i[p].d(1);
        i.length = a.length;
      }
    },
    d(o) {
      o && we(r), Lo(i, o);
    }
  };
}
function Ts(s) {
  let r, a, i, o, c = (
    /*i*/
    s[40] !== 0 && cf()
  ), p = (
    /*p*/
    s[38].desc != null && Ms(s)
  ), g = (
    /*p*/
    s[38].desc != null && /*progress_level*/
    s[14] && /*progress_level*/
    s[14][
      /*i*/
      s[40]
    ] != null && zs()
  ), v = (
    /*progress_level*/
    s[14] != null && Cs(s)
  );
  return {
    c() {
      c && c.c(), r = a0(), p && p.c(), a = a0(), g && g.c(), i = a0(), v && v.c(), o = Ar();
    },
    m(w, S) {
      c && c.m(w, S), ke(w, r, S), p && p.m(w, S), ke(w, a, S), g && g.m(w, S), ke(w, i, S), v && v.m(w, S), ke(w, o, S);
    },
    p(w, S) {
      /*p*/
      w[38].desc != null ? p ? p.p(w, S) : (p = Ms(w), p.c(), p.m(a.parentNode, a)) : p && (p.d(1), p = null), /*p*/
      w[38].desc != null && /*progress_level*/
      w[14] && /*progress_level*/
      w[14][
        /*i*/
        w[40]
      ] != null ? g || (g = zs(), g.c(), g.m(i.parentNode, i)) : g && (g.d(1), g = null), /*progress_level*/
      w[14] != null ? v ? v.p(w, S) : (v = Cs(w), v.c(), v.m(o.parentNode, o)) : v && (v.d(1), v = null);
    },
    d(w) {
      w && (we(r), we(a), we(i), we(o)), c && c.d(w), p && p.d(w), g && g.d(w), v && v.d(w);
    }
  };
}
function cf(s) {
  let r;
  return {
    c() {
      r = Qe(" /");
    },
    m(a, i) {
      ke(a, r, i);
    },
    d(a) {
      a && we(r);
    }
  };
}
function Ms(s) {
  let r = (
    /*p*/
    s[38].desc + ""
  ), a;
  return {
    c() {
      a = Qe(r);
    },
    m(i, o) {
      ke(i, a, o);
    },
    p(i, o) {
      o[0] & /*progress*/
      128 && r !== (r = /*p*/
      i[38].desc + "") && Ht(a, r);
    },
    d(i) {
      i && we(a);
    }
  };
}
function zs(s) {
  let r;
  return {
    c() {
      r = Qe("-");
    },
    m(a, i) {
      ke(a, r, i);
    },
    d(a) {
      a && we(r);
    }
  };
}
function Cs(s) {
  let r = (100 * /*progress_level*/
  (s[14][
    /*i*/
    s[40]
  ] || 0)).toFixed(1) + "", a, i;
  return {
    c() {
      a = Qe(r), i = Qe("%");
    },
    m(o, c) {
      ke(o, a, c), ke(o, i, c);
    },
    p(o, c) {
      c[0] & /*progress_level*/
      16384 && r !== (r = (100 * /*progress_level*/
      (o[14][
        /*i*/
        o[40]
      ] || 0)).toFixed(1) + "") && Ht(a, r);
    },
    d(o) {
      o && (we(a), we(i));
    }
  };
}
function Es(s) {
  let r, a = (
    /*p*/
    (s[38].desc != null || /*progress_level*/
    s[14] && /*progress_level*/
    s[14][
      /*i*/
      s[40]
    ] != null) && Ts(s)
  );
  return {
    c() {
      a && a.c(), r = Ar();
    },
    m(i, o) {
      a && a.m(i, o), ke(i, r, o);
    },
    p(i, o) {
      /*p*/
      i[38].desc != null || /*progress_level*/
      i[14] && /*progress_level*/
      i[14][
        /*i*/
        i[40]
      ] != null ? a ? a.p(i, o) : (a = Ts(i), a.c(), a.m(r.parentNode, r)) : a && (a.d(1), a = null);
    },
    d(i) {
      i && we(r), a && a.d(i);
    }
  };
}
function Bs(s) {
  let r, a;
  return {
    c() {
      r = d0("p"), a = Qe(
        /*loading_text*/
        s[9]
      ), n0(r, "class", "loading svelte-14miwb5");
    },
    m(i, o) {
      ke(i, r, o), $0(r, a);
    },
    p(i, o) {
      o[0] & /*loading_text*/
      512 && Ht(
        a,
        /*loading_text*/
        i[9]
      );
    },
    d(i) {
      i && we(r);
    }
  };
}
function hf(s) {
  let r, a, i, o, c;
  const p = [tf, ef], g = [];
  function v(w, S) {
    return (
      /*status*/
      w[4] === "pending" ? 0 : (
        /*status*/
        w[4] === "error" ? 1 : -1
      )
    );
  }
  return ~(a = v(s)) && (i = g[a] = p[a](s)), {
    c() {
      r = d0("div"), i && i.c(), n0(r, "class", o = "wrap " + /*variant*/
      s[8] + " " + /*show_progress*/
      s[6] + " svelte-14miwb5"), Ot(r, "hide", !/*status*/
      s[4] || /*status*/
      s[4] === "complete" || /*show_progress*/
      s[6] === "hidden"), Ot(
        r,
        "translucent",
        /*variant*/
        s[8] === "center" && /*status*/
        (s[4] === "pending" || /*status*/
        s[4] === "error") || /*translucent*/
        s[11] || /*show_progress*/
        s[6] === "minimal"
      ), Ot(
        r,
        "generating",
        /*status*/
        s[4] === "generating"
      ), Ot(
        r,
        "border",
        /*border*/
        s[12]
      ), O0(
        r,
        "position",
        /*absolute*/
        s[10] ? "absolute" : "static"
      ), O0(
        r,
        "padding",
        /*absolute*/
        s[10] ? "0" : "var(--size-8) 0"
      );
    },
    m(w, S) {
      ke(w, r, S), ~a && g[a].m(r, null), s[31](r), c = !0;
    },
    p(w, S) {
      let D = a;
      a = v(w), a === D ? ~a && g[a].p(w, S) : (i && (Io(), wr(g[D], 1, 1, () => {
        g[D] = null;
      }), Fo()), ~a ? (i = g[a], i ? i.p(w, S) : (i = g[a] = p[a](w), i.c()), yr(i, 1), i.m(r, null)) : i = null), (!c || S[0] & /*variant, show_progress*/
      320 && o !== (o = "wrap " + /*variant*/
      w[8] + " " + /*show_progress*/
      w[6] + " svelte-14miwb5")) && n0(r, "class", o), (!c || S[0] & /*variant, show_progress, status, show_progress*/
      336) && Ot(r, "hide", !/*status*/
      w[4] || /*status*/
      w[4] === "complete" || /*show_progress*/
      w[6] === "hidden"), (!c || S[0] & /*variant, show_progress, variant, status, translucent, show_progress*/
      2384) && Ot(
        r,
        "translucent",
        /*variant*/
        w[8] === "center" && /*status*/
        (w[4] === "pending" || /*status*/
        w[4] === "error") || /*translucent*/
        w[11] || /*show_progress*/
        w[6] === "minimal"
      ), (!c || S[0] & /*variant, show_progress, status*/
      336) && Ot(
        r,
        "generating",
        /*status*/
        w[4] === "generating"
      ), (!c || S[0] & /*variant, show_progress, border*/
      4416) && Ot(
        r,
        "border",
        /*border*/
        w[12]
      ), S[0] & /*absolute*/
      1024 && O0(
        r,
        "position",
        /*absolute*/
        w[10] ? "absolute" : "static"
      ), S[0] & /*absolute*/
      1024 && O0(
        r,
        "padding",
        /*absolute*/
        w[10] ? "0" : "var(--size-8) 0"
      );
    },
    i(w) {
      c || (yr(i), c = !0);
    },
    o(w) {
      wr(i), c = !1;
    },
    d(w) {
      w && we(r), ~a && g[a].d(), s[31](null);
    }
  };
}
let Mn = [], Ya = !1;
async function ff(s, r = !0) {
  if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && r !== !0)) {
    if (Mn.push(s), !Ya)
      Ya = !0;
    else
      return;
    await Qh(), requestAnimationFrame(() => {
      let a = [0, 0];
      for (let i = 0; i < Mn.length; i++) {
        const c = Mn[i].getBoundingClientRect();
        (i === 0 || c.top + window.scrollY <= a[0]) && (a[0] = c.top + window.scrollY, a[1] = i);
      }
      window.scrollTo({ top: a[0] - 20, behavior: "smooth" }), Ya = !1, Mn = [];
    });
  }
}
function mf(s, r, a) {
  let i, { $$slots: o = {}, $$scope: c } = r, { i18n: p } = r, { eta: g = null } = r, { queue: v = !1 } = r, { queue_position: w } = r, { queue_size: S } = r, { status: D } = r, { scroll_to_output: q = !1 } = r, { timer: Z = !0 } = r, { show_progress: j = "full" } = r, { message: re = null } = r, { progress: $ = null } = r, { variant: U = "default" } = r, { loading_text: F = "Loading..." } = r, { absolute: C = !0 } = r, { translucent: L = !1 } = r, { border: B = !1 } = r, { autoscroll: O } = r, G, Q = !1, Y = 0, ue = 0, ge = null, Fe = 0, Se = null, Le, rt = null, Ct = !0;
  const xt = () => {
    a(25, Y = performance.now()), a(26, ue = 0), Q = !0, Ie();
  };
  function Ie() {
    requestAnimationFrame(() => {
      a(26, ue = (performance.now() - Y) / 1e3), Q && Ie();
    });
  }
  function xe() {
    a(26, ue = 0), Q && (Q = !1);
  }
  Jh(() => {
    Q && xe();
  });
  let at = null;
  function I(ne) {
    vs[ne ? "unshift" : "push"](() => {
      rt = ne, a(16, rt), a(7, $), a(14, Se), a(15, Le);
    });
  }
  function Oe(ne) {
    vs[ne ? "unshift" : "push"](() => {
      G = ne, a(13, G);
    });
  }
  return s.$$set = (ne) => {
    "i18n" in ne && a(1, p = ne.i18n), "eta" in ne && a(0, g = ne.eta), "queue" in ne && a(21, v = ne.queue), "queue_position" in ne && a(2, w = ne.queue_position), "queue_size" in ne && a(3, S = ne.queue_size), "status" in ne && a(4, D = ne.status), "scroll_to_output" in ne && a(22, q = ne.scroll_to_output), "timer" in ne && a(5, Z = ne.timer), "show_progress" in ne && a(6, j = ne.show_progress), "message" in ne && a(23, re = ne.message), "progress" in ne && a(7, $ = ne.progress), "variant" in ne && a(8, U = ne.variant), "loading_text" in ne && a(9, F = ne.loading_text), "absolute" in ne && a(10, C = ne.absolute), "translucent" in ne && a(11, L = ne.translucent), "border" in ne && a(12, B = ne.border), "autoscroll" in ne && a(24, O = ne.autoscroll), "$$scope" in ne && a(28, c = ne.$$scope);
  }, s.$$.update = () => {
    s.$$.dirty[0] & /*eta, old_eta, queue, timer_start*/
    169869313 && (g === null ? a(0, g = ge) : v && a(0, g = (performance.now() - Y) / 1e3 + g), g != null && (a(19, at = g.toFixed(1)), a(27, ge = g))), s.$$.dirty[0] & /*eta, timer_diff*/
    67108865 && a(17, Fe = g === null || g <= 0 || !ue ? null : Math.min(ue / g, 1)), s.$$.dirty[0] & /*progress*/
    128 && $ != null && a(18, Ct = !1), s.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && ($ != null ? a(14, Se = $.map((ne) => {
      if (ne.index != null && ne.length != null)
        return ne.index / ne.length;
      if (ne.progress != null)
        return ne.progress;
    })) : a(14, Se = null), Se ? (a(15, Le = Se[Se.length - 1]), rt && (Le === 0 ? a(16, rt.style.transition = "0", rt) : a(16, rt.style.transition = "150ms", rt))) : a(15, Le = void 0)), s.$$.dirty[0] & /*status*/
    16 && (D === "pending" ? xt() : xe()), s.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    20979728 && G && q && (D === "pending" || D === "complete") && ff(G, O), s.$$.dirty[0] & /*status, message*/
    8388624, s.$$.dirty[0] & /*timer_diff*/
    67108864 && a(20, i = ue.toFixed(1));
  }, [
    g,
    p,
    w,
    S,
    D,
    Z,
    j,
    $,
    U,
    F,
    C,
    L,
    B,
    G,
    Se,
    Le,
    rt,
    Fe,
    Ct,
    at,
    i,
    v,
    q,
    re,
    O,
    Y,
    ue,
    ge,
    c,
    o,
    I,
    Oe
  ];
}
class df extends Hh {
  constructor(r) {
    super(), Yh(
      this,
      r,
      mf,
      hf,
      Zh,
      {
        i18n: 1,
        eta: 0,
        queue: 21,
        queue_position: 2,
        queue_size: 3,
        status: 4,
        scroll_to_output: 22,
        timer: 5,
        show_progress: 6,
        message: 23,
        progress: 7,
        variant: 8,
        loading_text: 9,
        absolute: 10,
        translucent: 11,
        border: 12,
        autoscroll: 24
      },
      null,
      [-1, -1]
    );
  }
}
new Intl.Collator(0, { numeric: 1 }).compare;
function Oo(s, r, a) {
  if (s == null)
    return null;
  if (Array.isArray(s)) {
    const i = [];
    for (const o of s)
      o == null ? i.push(null) : i.push(Oo(o, r, a));
    return i;
  }
  return s.is_stream ? a == null ? new Xa({
    ...s,
    url: r + "/stream/" + s.path
  }) : new Xa({
    ...s,
    url: "/proxy=" + a + "stream/" + s.path
  }) : new Xa({
    ...s,
    url: ni(s.path, r, a)
  });
}
function pf(s) {
  try {
    const r = new URL(s);
    return r.protocol === "http:" || r.protocol === "https:";
  } catch {
    return !1;
  }
}
function ni(s, r, a) {
  return s == null ? a ? `/proxy=${a}file=` : `${r}/file=` : pf(s) ? s : a ? `/proxy=${a}file=${s}` : `${r}/file=${s}`;
}
class Xa {
  constructor({
    path: r,
    url: a,
    orig_name: i,
    size: o,
    blob: c,
    is_stream: p,
    mime_type: g,
    alt_text: v
  }) {
    this.path = r, this.url = a, this.orig_name = i, this.size = o, this.blob = a ? void 0 : c, this.is_stream = p, this.mime_type = g, this.alt_text = v;
  }
}
const {
  SvelteComponent: gf,
  append: vf,
  attr: zn,
  check_outros: Ds,
  create_component: qo,
  destroy_component: Po,
  detach: bf,
  element: yf,
  group_outros: Ns,
  init: wf,
  insert: kf,
  listen: _f,
  mount_component: Ho,
  safe_not_equal: xf,
  space: Sf,
  transition_in: L0,
  transition_out: vr
} = window.__gradio__svelte__internal, { onDestroy: Af } = window.__gradio__svelte__internal;
function Rs(s) {
  let r, a;
  return r = new Uc({}), {
    c() {
      qo(r.$$.fragment);
    },
    m(i, o) {
      Ho(r, i, o), a = !0;
    },
    i(i) {
      a || (L0(r.$$.fragment, i), a = !0);
    },
    o(i) {
      vr(r.$$.fragment, i), a = !1;
    },
    d(i) {
      Po(r, i);
    }
  };
}
function Fs(s) {
  let r, a;
  return r = new Mc({}), {
    c() {
      qo(r.$$.fragment);
    },
    m(i, o) {
      Ho(r, i, o), a = !0;
    },
    i(i) {
      a || (L0(r.$$.fragment, i), a = !0);
    },
    o(i) {
      vr(r.$$.fragment, i), a = !1;
    },
    d(i) {
      Po(r, i);
    }
  };
}
function Tf(s) {
  let r, a, i, o, c, p, g = !/*copied*/
  s[0] && Rs(), v = (
    /*copied*/
    s[0] && Fs()
  );
  return {
    c() {
      r = yf("button"), g && g.c(), a = Sf(), v && v.c(), zn(r, "title", "copy"), zn(r, "aria-label", i = /*copied*/
      s[0] ? "Copied message" : "Copy message"), zn(r, "class", "svelte-1hlmuz8");
    },
    m(w, S) {
      kf(w, r, S), g && g.m(r, null), vf(r, a), v && v.m(r, null), o = !0, c || (p = _f(
        r,
        "click",
        /*handle_copy*/
        s[1]
      ), c = !0);
    },
    p(w, [S]) {
      /*copied*/
      w[0] ? g && (Ns(), vr(g, 1, 1, () => {
        g = null;
      }), Ds()) : g ? S & /*copied*/
      1 && L0(g, 1) : (g = Rs(), g.c(), L0(g, 1), g.m(r, a)), /*copied*/
      w[0] ? v ? S & /*copied*/
      1 && L0(v, 1) : (v = Fs(), v.c(), L0(v, 1), v.m(r, null)) : v && (Ns(), vr(v, 1, 1, () => {
        v = null;
      }), Ds()), (!o || S & /*copied*/
      1 && i !== (i = /*copied*/
      w[0] ? "Copied message" : "Copy message")) && zn(r, "aria-label", i);
    },
    i(w) {
      o || (L0(g), L0(v), o = !0);
    },
    o(w) {
      vr(g), vr(v), o = !1;
    },
    d(w) {
      w && bf(r), g && g.d(), v && v.d(), c = !1, p();
    }
  };
}
function Mf(s, r, a) {
  let i = !1, { value: o } = r, c;
  function p() {
    a(0, i = !0), c && clearTimeout(c), c = setTimeout(
      () => {
        a(0, i = !1);
      },
      2e3
    );
  }
  async function g() {
    if ("clipboard" in navigator)
      await navigator.clipboard.writeText(o), p();
    else {
      const v = document.createElement("textarea");
      v.value = o, v.style.position = "absolute", v.style.left = "-999999px", document.body.prepend(v), v.select();
      try {
        document.execCommand("copy"), p();
      } catch (w) {
        console.error(w);
      } finally {
        v.remove();
      }
    }
  }
  return Af(() => {
    c && clearTimeout(c);
  }), s.$$set = (v) => {
    "value" in v && a(2, o = v.value);
  }, [i, g, o];
}
class zf extends gf {
  constructor(r) {
    super(), wf(this, r, Mf, Tf, xf, { value: 2 });
  }
}
const {
  SvelteComponent: Cf,
  attr: Ur,
  create_component: Ef,
  destroy_component: Bf,
  detach: Df,
  element: Nf,
  init: Rf,
  insert: Ff,
  listen: Ls,
  mount_component: Lf,
  run_all: If,
  safe_not_equal: Of,
  transition_in: qf,
  transition_out: Pf
} = window.__gradio__svelte__internal;
function Hf(s) {
  let r, a, i, o, c, p, g;
  return a = new /*Icon*/
  s[3]({ props: { actioned: (
    /*actioned*/
    s[2]
  ) } }), {
    c() {
      r = Nf("button"), Ef(a.$$.fragment), Ur(r, "title", i = /*action*/
      s[0] + " message"), Ur(r, "aria-label", o = /*actioned*/
      s[2] ? `clicked ${/*action*/
      s[0]}` : (
        /*action*/
        s[0]
      )), Ur(r, "class", "svelte-1nphhme");
    },
    m(v, w) {
      Ff(v, r, w), Lf(a, r, null), c = !0, p || (g = [
        Ls(
          r,
          "click",
          /*click_handler*/
          s[5]
        ),
        Ls(
          r,
          "keydown",
          /*keydown_handler*/
          s[6]
        )
      ], p = !0);
    },
    p(v, [w]) {
      const S = {};
      w & /*actioned*/
      4 && (S.actioned = /*actioned*/
      v[2]), a.$set(S), (!c || w & /*action*/
      1 && i !== (i = /*action*/
      v[0] + " message")) && Ur(r, "title", i), (!c || w & /*actioned, action*/
      5 && o !== (o = /*actioned*/
      v[2] ? `clicked ${/*action*/
      v[0]}` : (
        /*action*/
        v[0]
      ))) && Ur(r, "aria-label", o);
    },
    i(v) {
      c || (qf(a.$$.fragment, v), c = !0);
    },
    o(v) {
      Pf(a.$$.fragment, v), c = !1;
    },
    d(v) {
      v && Df(r), Bf(a), p = !1, If(g);
    }
  };
}
function Uf(s, r, a) {
  let { action: i } = r, { handle_action: o } = r, c = !1, p = i === "like" ? a4 : Kc;
  function g() {
    a(2, c = !0);
  }
  const v = () => {
    g(), o();
  }, w = (S) => {
    S.key === "Enter" && (g(), o());
  };
  return s.$$set = (S) => {
    "action" in S && a(0, i = S.action), "handle_action" in S && a(1, o = S.handle_action);
  }, [
    i,
    o,
    c,
    p,
    g,
    v,
    w
  ];
}
class Is extends Cf {
  constructor(r) {
    super(), Rf(this, r, Uf, Hf, Of, { action: 0, handle_action: 1 });
  }
}
const {
  SvelteComponent: Gf,
  attr: Cn,
  detach: Vf,
  element: Wf,
  init: jf,
  insert: Yf,
  noop: Os,
  safe_not_equal: Xf,
  set_style: qs
} = window.__gradio__svelte__internal;
function Zf(s) {
  let r;
  return {
    c() {
      r = Wf("div"), r.innerHTML = `<span class="sr-only">Loading content</span> <div class="dot-flashing svelte-dern78"></div>
	 
	<div class="dot-flashing svelte-dern78"></div>
	 
	<div class="dot-flashing svelte-dern78"></div>`, Cn(r, "class", "message pending svelte-dern78"), Cn(r, "role", "status"), Cn(r, "aria-label", "Loading response"), Cn(r, "aria-live", "polite"), qs(
        r,
        "border-radius",
        /*layout*/
        s[0] === "bubble" ? "var(--radius-xxl)" : "none"
      );
    },
    m(a, i) {
      Yf(a, r, i);
    },
    p(a, [i]) {
      i & /*layout*/
      1 && qs(
        r,
        "border-radius",
        /*layout*/
        a[0] === "bubble" ? "var(--radius-xxl)" : "none"
      );
    },
    i: Os,
    o: Os,
    d(a) {
      a && Vf(r);
    }
  };
}
function Kf(s, r, a) {
  let { layout: i = "bubble" } = r;
  return s.$$set = (o) => {
    "layout" in o && a(0, i = o.layout);
  }, [i];
}
class Qf extends Gf {
  constructor(r) {
    super(), jf(this, r, Kf, Zf, Xf, { layout: 0 });
  }
}
const {
  SvelteComponent: Jf,
  action_destroyer: $f,
  append: qt,
  attr: pe,
  binding_callbacks: e2,
  bubble: F0,
  check_outros: i0,
  create_component: kr,
  destroy_component: _r,
  destroy_each: ui,
  detach: gt,
  element: _t,
  empty: Pn,
  ensure_array_like: xr,
  group_outros: l0,
  init: t2,
  insert: vt,
  listen: P0,
  mount_component: Sr,
  noop: H0,
  null_to_empty: Ps,
  run_all: ci,
  safe_not_equal: r2,
  set_data: n2,
  set_style: a2,
  space: q0,
  src_url_equal: U0,
  text: i2,
  toggle_class: tt,
  transition_in: Ae,
  transition_out: je
} = window.__gradio__svelte__internal, { beforeUpdate: l2, afterUpdate: s2, createEventDispatcher: o2 } = window.__gradio__svelte__internal;
function Hs(s, r, a) {
  const i = s.slice();
  return i[37] = r[a], i[39] = a, i;
}
function Us(s, r, a) {
  const i = s.slice();
  return i[40] = r[a], i[42] = a, i;
}
function Gs(s, r, a) {
  const i = s.slice();
  return i[43] = r[a], i[45] = a, i;
}
function Vs(s) {
  let r, a, i;
  return a = new g4({
    props: {
      i18n: (
        /*i18n*/
        s[15]
      ),
      formatter: bu,
      value: (
        /*value*/
        s[0]
      )
    }
  }), a.$on(
    "error",
    /*error_handler*/
    s[28]
  ), a.$on(
    "share",
    /*share_handler*/
    s[29]
  ), {
    c() {
      r = _t("div"), kr(a.$$.fragment), pe(r, "class", "share-button svelte-h20r7b");
    },
    m(o, c) {
      vt(o, r, c), Sr(a, r, null), i = !0;
    },
    p(o, c) {
      const p = {};
      c[0] & /*i18n*/
      32768 && (p.i18n = /*i18n*/
      o[15]), c[0] & /*value*/
      1 && (p.value = /*value*/
      o[0]), a.$set(p);
    },
    i(o) {
      i || (Ae(a.$$.fragment, o), i = !0);
    },
    o(o) {
      je(a.$$.fragment, o), i = !1;
    },
    d(o) {
      o && gt(r), _r(a);
    }
  };
}
function Ws(s) {
  let r, a, i = xr(
    /*value*/
    s[0]
  ), o = [];
  for (let p = 0; p < i.length; p += 1)
    o[p] = $s(Hs(s, i, p));
  const c = (p) => je(o[p], 1, 1, () => {
    o[p] = null;
  });
  return {
    c() {
      for (let p = 0; p < o.length; p += 1)
        o[p].c();
      r = Pn();
    },
    m(p, g) {
      for (let v = 0; v < o.length; v += 1)
        o[v] && o[v].m(p, g);
      vt(p, r, g), a = !0;
    },
    p(p, g) {
      if (g[0] & /*value, layout, avatar_images, bubble_full_width, show_copy_button, handle_like, likeable, render_markdown, rtl, selectable, handle_select, pending_message, latex_delimiters, sanitize_html, line_breaks, scroll, root, proxy_url*/
      1933279) {
        i = xr(
          /*value*/
          p[0]
        );
        let v;
        for (v = 0; v < i.length; v += 1) {
          const w = Hs(p, i, v);
          o[v] ? (o[v].p(w, g), Ae(o[v], 1)) : (o[v] = $s(w), o[v].c(), Ae(o[v], 1), o[v].m(r.parentNode, r));
        }
        for (l0(), v = i.length; v < o.length; v += 1)
          c(v);
        i0();
      }
    },
    i(p) {
      if (!a) {
        for (let g = 0; g < i.length; g += 1)
          Ae(o[g]);
        a = !0;
      }
    },
    o(p) {
      o = o.filter(Boolean);
      for (let g = 0; g < o.length; g += 1)
        je(o[g]);
      a = !1;
    },
    d(p) {
      p && gt(r), ui(o, p);
    }
  };
}
function js(s) {
  let r, a, i, o, c, p, g, v, w, S, D, q, Z, j, re = (
    /*avatar_images*/
    s[8][
      /*j*/
      s[42]
    ] !== null && Ys(s)
  );
  c = new Mh({
    props: {
      message: (
        /*message*/
        s[40].text
      ),
      latex_delimiters: (
        /*latex_delimiters*/
        s[1]
      ),
      sanitize_html: (
        /*sanitize_html*/
        s[9]
      ),
      render_markdown: (
        /*render_markdown*/
        s[11]
      ),
      line_breaks: (
        /*line_breaks*/
        s[12]
      )
    }
  }), c.$on(
    "load",
    /*scroll*/
    s[18]
  );
  let $ = xr(
    /*message*/
    s[40].files
  ), U = [];
  for (let O = 0; O < $.length; O += 1)
    U[O] = Xs(Gs(s, $, O));
  const F = (O) => je(U[O], 1, 1, () => {
    U[O] = null;
  });
  function C() {
    return (
      /*click_handler*/
      s[30](
        /*i*/
        s[39],
        /*j*/
        s[42],
        /*message*/
        s[40]
      )
    );
  }
  function L(...O) {
    return (
      /*keydown_handler*/
      s[31](
        /*i*/
        s[39],
        /*j*/
        s[42],
        /*message*/
        s[40],
        ...O
      )
    );
  }
  let B = (
    /*likeable*/
    (s[4] && /*j*/
    s[42] !== 0 || /*show_copy_button*/
    s[7] && /*message*/
    s[40] && typeof /*message*/
    s[40] == "string") && Zs(s)
  );
  return {
    c() {
      r = _t("div"), re && re.c(), a = q0(), i = _t("div"), o = _t("button"), kr(c.$$.fragment), p = q0();
      for (let O = 0; O < U.length; O += 1)
        U[O].c();
      w = q0(), B && B.c(), S = q0(), pe(
        o,
        "data-testid",
        /*j*/
        s[42] == 0 ? "user" : "bot"
      ), pe(o, "dir", g = /*rtl*/
      s[6] ? "rtl" : "ltr"), pe(o, "aria-label", v = /*j*/
      (s[42] == 0 ? "user" : "bot") + "'s message:' " + /*message*/
      s[40]), pe(o, "class", "svelte-h20r7b"), tt(
        o,
        "latest",
        /*i*/
        s[39] === /*value*/
        s[0].length - 1
      ), tt(o, "message-markdown-disabled", !/*render_markdown*/
      s[11]), tt(
        o,
        "selectable",
        /*selectable*/
        s[3]
      ), a2(o, "text-align", "left"), pe(i, "class", "message " + /*j*/
      (s[42] == 0 ? "user" : "bot") + " svelte-h20r7b"), tt(
        i,
        "message-fit",
        /*layout*/
        s[16] === "bubble" && !/*bubble_full_width*/
        s[10]
      ), tt(
        i,
        "panel-full-width",
        /*layout*/
        s[16] === "panel"
      ), tt(
        i,
        "message-bubble-border",
        /*layout*/
        s[16] === "bubble"
      ), tt(i, "message-markdown-disabled", !/*render_markdown*/
      s[11]), pe(r, "class", D = "message-row " + /*layout*/
      s[16] + " " + /*j*/
      (s[42] == 0 ? "user-row" : "bot-row") + " svelte-h20r7b");
    },
    m(O, G) {
      vt(O, r, G), re && re.m(r, null), qt(r, a), qt(r, i), qt(i, o), Sr(c, o, null), qt(o, p);
      for (let Q = 0; Q < U.length; Q += 1)
        U[Q] && U[Q].m(o, null);
      qt(r, w), B && B.m(r, null), qt(r, S), q = !0, Z || (j = [
        P0(o, "click", C),
        P0(o, "keydown", L)
      ], Z = !0);
    },
    p(O, G) {
      s = O, /*avatar_images*/
      s[8][
        /*j*/
        s[42]
      ] !== null ? re ? re.p(s, G) : (re = Ys(s), re.c(), re.m(r, a)) : re && (re.d(1), re = null);
      const Q = {};
      if (G[0] & /*value*/
      1 && (Q.message = /*message*/
      s[40].text), G[0] & /*latex_delimiters*/
      2 && (Q.latex_delimiters = /*latex_delimiters*/
      s[1]), G[0] & /*sanitize_html*/
      512 && (Q.sanitize_html = /*sanitize_html*/
      s[9]), G[0] & /*render_markdown*/
      2048 && (Q.render_markdown = /*render_markdown*/
      s[11]), G[0] & /*line_breaks*/
      4096 && (Q.line_breaks = /*line_breaks*/
      s[12]), c.$set(Q), G[0] & /*value, layout, pending_message*/
      65541) {
        $ = xr(
          /*message*/
          s[40].files
        );
        let Y;
        for (Y = 0; Y < $.length; Y += 1) {
          const ue = Gs(s, $, Y);
          U[Y] ? (U[Y].p(ue, G), Ae(U[Y], 1)) : (U[Y] = Xs(ue), U[Y].c(), Ae(U[Y], 1), U[Y].m(o, null));
        }
        for (l0(), Y = $.length; Y < U.length; Y += 1)
          F(Y);
        i0();
      }
      (!q || G[0] & /*rtl*/
      64 && g !== (g = /*rtl*/
      s[6] ? "rtl" : "ltr")) && pe(o, "dir", g), (!q || G[0] & /*value*/
      1 && v !== (v = /*j*/
      (s[42] == 0 ? "user" : "bot") + "'s message:' " + /*message*/
      s[40])) && pe(o, "aria-label", v), (!q || G[0] & /*value*/
      1) && tt(
        o,
        "latest",
        /*i*/
        s[39] === /*value*/
        s[0].length - 1
      ), (!q || G[0] & /*render_markdown*/
      2048) && tt(o, "message-markdown-disabled", !/*render_markdown*/
      s[11]), (!q || G[0] & /*selectable*/
      8) && tt(
        o,
        "selectable",
        /*selectable*/
        s[3]
      ), (!q || G[0] & /*layout, bubble_full_width*/
      66560) && tt(
        i,
        "message-fit",
        /*layout*/
        s[16] === "bubble" && !/*bubble_full_width*/
        s[10]
      ), (!q || G[0] & /*layout*/
      65536) && tt(
        i,
        "panel-full-width",
        /*layout*/
        s[16] === "panel"
      ), (!q || G[0] & /*layout*/
      65536) && tt(
        i,
        "message-bubble-border",
        /*layout*/
        s[16] === "bubble"
      ), (!q || G[0] & /*render_markdown*/
      2048) && tt(i, "message-markdown-disabled", !/*render_markdown*/
      s[11]), /*likeable*/
      s[4] && /*j*/
      s[42] !== 0 || /*show_copy_button*/
      s[7] && /*message*/
      s[40] && typeof /*message*/
      s[40] == "string" ? B ? (B.p(s, G), G[0] & /*likeable, show_copy_button, value*/
      145 && Ae(B, 1)) : (B = Zs(s), B.c(), Ae(B, 1), B.m(r, S)) : B && (l0(), je(B, 1, 1, () => {
        B = null;
      }), i0()), (!q || G[0] & /*layout*/
      65536 && D !== (D = "message-row " + /*layout*/
      s[16] + " " + /*j*/
      (s[42] == 0 ? "user-row" : "bot-row") + " svelte-h20r7b")) && pe(r, "class", D);
    },
    i(O) {
      if (!q) {
        Ae(c.$$.fragment, O);
        for (let G = 0; G < $.length; G += 1)
          Ae(U[G]);
        Ae(B), q = !0;
      }
    },
    o(O) {
      je(c.$$.fragment, O), U = U.filter(Boolean);
      for (let G = 0; G < U.length; G += 1)
        je(U[G]);
      je(B), q = !1;
    },
    d(O) {
      O && gt(r), re && re.d(), _r(c), ui(U, O), B && B.d(), Z = !1, ci(j);
    }
  };
}
function Ys(s) {
  let r, a, i;
  return {
    c() {
      r = _t("div"), a = _t("img"), pe(a, "class", "avatar-image svelte-h20r7b"), U0(a.src, i = ni(
        /*avatar_images*/
        s[8][
          /*j*/
          s[42]
        ],
        /*root*/
        s[13],
        /*proxy_url*/
        s[14]
      )) || pe(a, "src", i), pe(
        a,
        "alt",
        /*j*/
        (s[42] == 0 ? "user" : "bot") + " avatar"
      ), pe(r, "class", "avatar-container svelte-h20r7b");
    },
    m(o, c) {
      vt(o, r, c), qt(r, a);
    },
    p(o, c) {
      c[0] & /*avatar_images, root, proxy_url*/
      24832 && !U0(a.src, i = ni(
        /*avatar_images*/
        o[8][
          /*j*/
          o[42]
        ],
        /*root*/
        o[13],
        /*proxy_url*/
        o[14]
      )) && pe(a, "src", i);
    },
    d(o) {
      o && gt(r);
    }
  };
}
function u2(s) {
  let r, a;
  return r = new Qf({ props: { layout: (
    /*layout*/
    s[16]
  ) } }), {
    c() {
      kr(r.$$.fragment);
    },
    m(i, o) {
      Sr(r, i, o), a = !0;
    },
    p(i, o) {
      const c = {};
      o[0] & /*layout*/
      65536 && (c.layout = /*layout*/
      i[16]), r.$set(c);
    },
    i(i) {
      a || (Ae(r.$$.fragment, i), a = !0);
    },
    o(i) {
      je(r.$$.fragment, i), a = !1;
    },
    d(i) {
      _r(r, i);
    }
  };
}
function c2(s) {
  var g, v;
  let r, a = (
    /*file*/
    (((g = s[43].file) == null ? void 0 : g.orig_name) || /*file*/
    ((v = s[43].file) == null ? void 0 : v.path)) + ""
  ), i, o, c, p;
  return {
    c() {
      var w, S, D;
      r = _t("a"), i = i2(a), o = q0(), pe(r, "data-testid", "chatbot-file"), pe(r, "href", c = /*file*/
      (w = s[43].file) == null ? void 0 : w.url), pe(r, "target", "_blank"), pe(r, "download", p = window.__is_colab__ ? null : (
        /*file*/
        ((S = s[43].file) == null ? void 0 : S.orig_name) || /*file*/
        ((D = s[43].file) == null ? void 0 : D.path)
      )), pe(r, "class", "svelte-h20r7b");
    },
    m(w, S) {
      vt(w, r, S), qt(r, i), qt(r, o);
    },
    p(w, S) {
      var D, q, Z, j, re;
      S[0] & /*value*/
      1 && a !== (a = /*file*/
      (((D = w[43].file) == null ? void 0 : D.orig_name) || /*file*/
      ((q = w[43].file) == null ? void 0 : q.path)) + "") && n2(i, a), S[0] & /*value*/
      1 && c !== (c = /*file*/
      (Z = w[43].file) == null ? void 0 : Z.url) && pe(r, "href", c), S[0] & /*value*/
      1 && p !== (p = window.__is_colab__ ? null : (
        /*file*/
        ((j = w[43].file) == null ? void 0 : j.orig_name) || /*file*/
        ((re = w[43].file) == null ? void 0 : re.path)
      )) && pe(r, "download", p);
    },
    i: H0,
    o: H0,
    d(w) {
      w && gt(r);
    }
  };
}
function h2(s) {
  let r, a, i;
  return {
    c() {
      var o;
      r = _t("img"), pe(r, "data-testid", "chatbot-image"), U0(r.src, a = /*file*/
      (o = s[43].file) == null ? void 0 : o.url) || pe(r, "src", a), pe(r, "alt", i = /*file*/
      s[43].alt_text), pe(r, "class", "svelte-h20r7b");
    },
    m(o, c) {
      vt(o, r, c);
    },
    p(o, c) {
      var p;
      c[0] & /*value*/
      1 && !U0(r.src, a = /*file*/
      (p = o[43].file) == null ? void 0 : p.url) && pe(r, "src", a), c[0] & /*value*/
      1 && i !== (i = /*file*/
      o[43].alt_text) && pe(r, "alt", i);
    },
    i: H0,
    o: H0,
    d(o) {
      o && gt(r);
    }
  };
}
function f2(s) {
  let r, a, i, o, c, p;
  return {
    c() {
      var g;
      r = _t("video"), a = _t("track"), pe(a, "kind", "captions"), pe(a, "class", "svelte-h20r7b"), pe(r, "data-testid", "chatbot-video"), r.controls = !0, U0(r.src, i = /*file*/
      (g = s[43].file) == null ? void 0 : g.url) || pe(r, "src", i), pe(r, "title", o = /*file*/
      s[43].alt_text), pe(r, "preload", "auto"), pe(r, "class", "svelte-h20r7b");
    },
    m(g, v) {
      vt(g, r, v), qt(r, a), c || (p = [
        P0(
          r,
          "play",
          /*play_handler_1*/
          s[25]
        ),
        P0(
          r,
          "pause",
          /*pause_handler_1*/
          s[26]
        ),
        P0(
          r,
          "ended",
          /*ended_handler_1*/
          s[27]
        )
      ], c = !0);
    },
    p(g, v) {
      var w;
      v[0] & /*value*/
      1 && !U0(r.src, i = /*file*/
      (w = g[43].file) == null ? void 0 : w.url) && pe(r, "src", i), v[0] & /*value*/
      1 && o !== (o = /*file*/
      g[43].alt_text) && pe(r, "title", o);
    },
    i: H0,
    o: H0,
    d(g) {
      g && gt(r), c = !1, ci(p);
    }
  };
}
function m2(s) {
  let r, a, i, o, c;
  return {
    c() {
      var p;
      r = _t("audio"), pe(r, "data-testid", "chatbot-audio"), r.controls = !0, pe(r, "preload", "metadata"), U0(r.src, a = /*file*/
      (p = s[43].file) == null ? void 0 : p.url) || pe(r, "src", a), pe(r, "title", i = /*file*/
      s[43].alt_text), pe(r, "class", "svelte-h20r7b");
    },
    m(p, g) {
      vt(p, r, g), o || (c = [
        P0(
          r,
          "play",
          /*play_handler*/
          s[22]
        ),
        P0(
          r,
          "pause",
          /*pause_handler*/
          s[23]
        ),
        P0(
          r,
          "ended",
          /*ended_handler*/
          s[24]
        )
      ], o = !0);
    },
    p(p, g) {
      var v;
      g[0] & /*value*/
      1 && !U0(r.src, a = /*file*/
      (v = p[43].file) == null ? void 0 : v.url) && pe(r, "src", a), g[0] & /*value*/
      1 && i !== (i = /*file*/
      p[43].alt_text) && pe(r, "title", i);
    },
    i: H0,
    o: H0,
    d(p) {
      p && gt(r), o = !1, ci(c);
    }
  };
}
function Xs(s) {
  let r, a, i, o, c, p, g;
  const v = [
    m2,
    f2,
    h2,
    c2,
    u2
  ], w = [];
  function S(D, q) {
    var Z, j, re, $, U, F;
    return q[0] & /*value*/
    1 && (r = null), q[0] & /*value*/
    1 && (a = null), q[0] & /*value*/
    1 && (i = null), r == null && (r = !!/*file*/
    (D[43] !== null && /*file*/
    ((Z = D[43].file.mime_type) != null && Z.includes("audio")))), r ? 0 : (a == null && (a = !!/*message*/
    (D[40] !== null && /*file*/
    ((re = (j = D[43].file) == null ? void 0 : j.mime_type) != null && re.includes("video")))), a ? 1 : (i == null && (i = !!/*message*/
    (D[40] !== null && /*file*/
    ((U = ($ = D[43].file) == null ? void 0 : $.mime_type) != null && U.includes("image")))), i ? 2 : (
      /*message*/
      D[40] !== null && /*file*/
      ((F = D[43].file) == null ? void 0 : F.url) !== null ? 3 : (
        /*pending_message*/
        D[2] && /*j*/
        D[42] === 1 ? 4 : -1
      )
    )));
  }
  return ~(o = S(s, [-1, -1])) && (c = w[o] = v[o](s)), {
    c() {
      c && c.c(), p = Pn();
    },
    m(D, q) {
      ~o && w[o].m(D, q), vt(D, p, q), g = !0;
    },
    p(D, q) {
      let Z = o;
      o = S(D, q), o === Z ? ~o && w[o].p(D, q) : (c && (l0(), je(w[Z], 1, 1, () => {
        w[Z] = null;
      }), i0()), ~o ? (c = w[o], c ? c.p(D, q) : (c = w[o] = v[o](D), c.c()), Ae(c, 1), c.m(p.parentNode, p)) : c = null);
    },
    i(D) {
      g || (Ae(c), g = !0);
    },
    o(D) {
      je(c), g = !1;
    },
    d(D) {
      D && gt(p), ~o && w[o].d(D);
    }
  };
}
function Zs(s) {
  let r, a, i, o, c = (
    /*likeable*/
    s[4] && /*j*/
    s[42] == 1 && Ks(s)
  ), p = (
    /*show_copy_button*/
    s[7] && /*message*/
    s[40] && typeof /*message*/
    s[40] == "string" && Qs(s)
  );
  return {
    c() {
      r = _t("div"), c && c.c(), a = q0(), p && p.c(), pe(r, "class", i = "message-buttons-" + /*j*/
      (s[42] == 0 ? "user" : "bot") + " message-buttons-" + /*layout*/
      s[16] + " " + /*avatar_images*/
      (s[8][
        /*j*/
        s[42]
      ] !== null && "with-avatar") + " svelte-h20r7b"), tt(
        r,
        "message-buttons-fit",
        /*layout*/
        s[16] === "bubble" && !/*bubble_full_width*/
        s[10]
      ), tt(
        r,
        "bubble-buttons-user",
        /*layout*/
        s[16] === "bubble"
      );
    },
    m(g, v) {
      vt(g, r, v), c && c.m(r, null), qt(r, a), p && p.m(r, null), o = !0;
    },
    p(g, v) {
      /*likeable*/
      g[4] && /*j*/
      g[42] == 1 ? c ? (c.p(g, v), v[0] & /*likeable*/
      16 && Ae(c, 1)) : (c = Ks(g), c.c(), Ae(c, 1), c.m(r, a)) : c && (l0(), je(c, 1, 1, () => {
        c = null;
      }), i0()), /*show_copy_button*/
      g[7] && /*message*/
      g[40] && typeof /*message*/
      g[40] == "string" ? p ? (p.p(g, v), v[0] & /*show_copy_button, value*/
      129 && Ae(p, 1)) : (p = Qs(g), p.c(), Ae(p, 1), p.m(r, null)) : p && (l0(), je(p, 1, 1, () => {
        p = null;
      }), i0()), (!o || v[0] & /*layout, avatar_images*/
      65792 && i !== (i = "message-buttons-" + /*j*/
      (g[42] == 0 ? "user" : "bot") + " message-buttons-" + /*layout*/
      g[16] + " " + /*avatar_images*/
      (g[8][
        /*j*/
        g[42]
      ] !== null && "with-avatar") + " svelte-h20r7b")) && pe(r, "class", i), (!o || v[0] & /*layout, avatar_images, layout, bubble_full_width*/
      66816) && tt(
        r,
        "message-buttons-fit",
        /*layout*/
        g[16] === "bubble" && !/*bubble_full_width*/
        g[10]
      ), (!o || v[0] & /*layout, avatar_images, layout*/
      65792) && tt(
        r,
        "bubble-buttons-user",
        /*layout*/
        g[16] === "bubble"
      );
    },
    i(g) {
      o || (Ae(c), Ae(p), o = !0);
    },
    o(g) {
      je(c), je(p), o = !1;
    },
    d(g) {
      g && gt(r), c && c.d(), p && p.d();
    }
  };
}
function Ks(s) {
  let r, a, i, o;
  function c() {
    return (
      /*func*/
      s[32](
        /*i*/
        s[39],
        /*j*/
        s[42],
        /*message*/
        s[40]
      )
    );
  }
  r = new Is({
    props: { action: "like", handle_action: c }
  });
  function p() {
    return (
      /*func_1*/
      s[33](
        /*i*/
        s[39],
        /*j*/
        s[42],
        /*message*/
        s[40]
      )
    );
  }
  return i = new Is({
    props: { action: "dislike", handle_action: p }
  }), {
    c() {
      kr(r.$$.fragment), a = q0(), kr(i.$$.fragment);
    },
    m(g, v) {
      Sr(r, g, v), vt(g, a, v), Sr(i, g, v), o = !0;
    },
    p(g, v) {
      s = g;
      const w = {};
      v[0] & /*value*/
      1 && (w.handle_action = c), r.$set(w);
      const S = {};
      v[0] & /*value*/
      1 && (S.handle_action = p), i.$set(S);
    },
    i(g) {
      o || (Ae(r.$$.fragment, g), Ae(i.$$.fragment, g), o = !0);
    },
    o(g) {
      je(r.$$.fragment, g), je(i.$$.fragment, g), o = !1;
    },
    d(g) {
      g && gt(a), _r(r, g), _r(i, g);
    }
  };
}
function Qs(s) {
  let r, a;
  return r = new zf({ props: { value: (
    /*message*/
    s[40]
  ) } }), {
    c() {
      kr(r.$$.fragment);
    },
    m(i, o) {
      Sr(r, i, o), a = !0;
    },
    p(i, o) {
      const c = {};
      o[0] & /*value*/
      1 && (c.value = /*message*/
      i[40]), r.$set(c);
    },
    i(i) {
      a || (Ae(r.$$.fragment, i), a = !0);
    },
    o(i) {
      je(r.$$.fragment, i), a = !1;
    },
    d(i) {
      _r(r, i);
    }
  };
}
function Js(s) {
  let r, a, i = (
    /*message*/
    (s[40] !== null || /*pending_message*/
    s[2]) && js(s)
  );
  return {
    c() {
      i && i.c(), r = Pn();
    },
    m(o, c) {
      i && i.m(o, c), vt(o, r, c), a = !0;
    },
    p(o, c) {
      /*message*/
      o[40] !== null || /*pending_message*/
      o[2] ? i ? (i.p(o, c), c[0] & /*value, pending_message*/
      5 && Ae(i, 1)) : (i = js(o), i.c(), Ae(i, 1), i.m(r.parentNode, r)) : i && (l0(), je(i, 1, 1, () => {
        i = null;
      }), i0());
    },
    i(o) {
      a || (Ae(i), a = !0);
    },
    o(o) {
      je(i), a = !1;
    },
    d(o) {
      o && gt(r), i && i.d(o);
    }
  };
}
function $s(s) {
  let r, a, i = xr(
    /*message_pair*/
    s[37]
  ), o = [];
  for (let p = 0; p < i.length; p += 1)
    o[p] = Js(Us(s, i, p));
  const c = (p) => je(o[p], 1, 1, () => {
    o[p] = null;
  });
  return {
    c() {
      for (let p = 0; p < o.length; p += 1)
        o[p].c();
      r = Pn();
    },
    m(p, g) {
      for (let v = 0; v < o.length; v += 1)
        o[v] && o[v].m(p, g);
      vt(p, r, g), a = !0;
    },
    p(p, g) {
      if (g[0] & /*layout, avatar_images, bubble_full_width, value, show_copy_button, handle_like, likeable, render_markdown, rtl, selectable, handle_select, pending_message, latex_delimiters, sanitize_html, line_breaks, scroll, root, proxy_url*/
      1933279) {
        i = xr(
          /*message_pair*/
          p[37]
        );
        let v;
        for (v = 0; v < i.length; v += 1) {
          const w = Us(p, i, v);
          o[v] ? (o[v].p(w, g), Ae(o[v], 1)) : (o[v] = Js(w), o[v].c(), Ae(o[v], 1), o[v].m(r.parentNode, r));
        }
        for (l0(), v = i.length; v < o.length; v += 1)
          c(v);
        i0();
      }
    },
    i(p) {
      if (!a) {
        for (let g = 0; g < i.length; g += 1)
          Ae(o[g]);
        a = !0;
      }
    },
    o(p) {
      o = o.filter(Boolean);
      for (let g = 0; g < o.length; g += 1)
        je(o[g]);
      a = !1;
    },
    d(p) {
      p && gt(r), ui(o, p);
    }
  };
}
function d2(s) {
  let r, a, i, o, c, p, g, v = (
    /*show_share_button*/
    s[5] && /*value*/
    s[0] !== null && /*value*/
    s[0].length > 0 && Vs(s)
  ), w = (
    /*value*/
    s[0] !== null && Ws(s)
  );
  return {
    c() {
      v && v.c(), r = q0(), a = _t("div"), i = _t("div"), w && w.c(), pe(i, "class", "message-wrap svelte-h20r7b"), tt(
        i,
        "bubble-gap",
        /*layout*/
        s[16] === "bubble"
      ), pe(a, "class", o = Ps(
        /*layout*/
        s[16] === "bubble" ? "bubble-wrap" : "panel-wrap"
      ) + " svelte-h20r7b"), pe(a, "role", "log"), pe(a, "aria-label", "chatbot conversation"), pe(a, "aria-live", "polite");
    },
    m(S, D) {
      v && v.m(S, D), vt(S, r, D), vt(S, a, D), qt(a, i), w && w.m(i, null), s[34](a), c = !0, p || (g = $f(gu.call(null, i)), p = !0);
    },
    p(S, D) {
      /*show_share_button*/
      S[5] && /*value*/
      S[0] !== null && /*value*/
      S[0].length > 0 ? v ? (v.p(S, D), D[0] & /*show_share_button, value*/
      33 && Ae(v, 1)) : (v = Vs(S), v.c(), Ae(v, 1), v.m(r.parentNode, r)) : v && (l0(), je(v, 1, 1, () => {
        v = null;
      }), i0()), /*value*/
      S[0] !== null ? w ? (w.p(S, D), D[0] & /*value*/
      1 && Ae(w, 1)) : (w = Ws(S), w.c(), Ae(w, 1), w.m(i, null)) : w && (l0(), je(w, 1, 1, () => {
        w = null;
      }), i0()), (!c || D[0] & /*layout*/
      65536) && tt(
        i,
        "bubble-gap",
        /*layout*/
        S[16] === "bubble"
      ), (!c || D[0] & /*layout*/
      65536 && o !== (o = Ps(
        /*layout*/
        S[16] === "bubble" ? "bubble-wrap" : "panel-wrap"
      ) + " svelte-h20r7b")) && pe(a, "class", o);
    },
    i(S) {
      c || (Ae(v), Ae(w), c = !0);
    },
    o(S) {
      je(v), je(w), c = !1;
    },
    d(S) {
      S && (gt(r), gt(a)), v && v.d(S), w && w.d(), s[34](null), p = !1, g();
    }
  };
}
function p2(s, r, a) {
  let { value: i } = r, o = null, { latex_delimiters: c } = r, { pending_message: p = !1 } = r, { selectable: g = !1 } = r, { likeable: v = !1 } = r, { show_share_button: w = !1 } = r, { rtl: S = !1 } = r, { show_copy_button: D = !1 } = r, { avatar_images: q = [null, null] } = r, { sanitize_html: Z = !0 } = r, { bubble_full_width: j = !0 } = r, { render_markdown: re = !0 } = r, { line_breaks: $ = !0 } = r, { root: U } = r, { proxy_url: F } = r, { i18n: C } = r, { layout: L = "bubble" } = r, B, O;
  const G = o2();
  l2(() => {
    O = B && B.offsetHeight + B.scrollTop > B.scrollHeight - 100;
  });
  const Q = () => {
    O && B.scrollTo(0, B.scrollHeight);
  };
  s2(() => {
    O && (Q(), B.querySelectorAll("img").forEach((J) => {
      J.addEventListener("load", () => {
        Q();
      });
    }));
  });
  function Y(J, Xe, Ge) {
    G("select", { index: [J, Xe], value: Ge });
  }
  function ue(J, Xe, Ge, bt) {
    G("like", { index: [J, Xe], value: Ge, liked: bt });
  }
  function ge(J) {
    F0.call(this, s, J);
  }
  function Fe(J) {
    F0.call(this, s, J);
  }
  function Se(J) {
    F0.call(this, s, J);
  }
  function Le(J) {
    F0.call(this, s, J);
  }
  function rt(J) {
    F0.call(this, s, J);
  }
  function Ct(J) {
    F0.call(this, s, J);
  }
  function xt(J) {
    F0.call(this, s, J);
  }
  function Ie(J) {
    F0.call(this, s, J);
  }
  const xe = (J, Xe, Ge) => Y(J, Xe, Ge), at = (J, Xe, Ge, bt) => {
    bt.key === "Enter" && Y(J, Xe, Ge);
  }, I = (J, Xe, Ge) => ue(J, Xe, Ge, !0), Oe = (J, Xe, Ge) => ue(J, Xe, Ge, !1);
  function ne(J) {
    e2[J ? "unshift" : "push"](() => {
      B = J, a(17, B);
    });
  }
  return s.$$set = (J) => {
    "value" in J && a(0, i = J.value), "latex_delimiters" in J && a(1, c = J.latex_delimiters), "pending_message" in J && a(2, p = J.pending_message), "selectable" in J && a(3, g = J.selectable), "likeable" in J && a(4, v = J.likeable), "show_share_button" in J && a(5, w = J.show_share_button), "rtl" in J && a(6, S = J.rtl), "show_copy_button" in J && a(7, D = J.show_copy_button), "avatar_images" in J && a(8, q = J.avatar_images), "sanitize_html" in J && a(9, Z = J.sanitize_html), "bubble_full_width" in J && a(10, j = J.bubble_full_width), "render_markdown" in J && a(11, re = J.render_markdown), "line_breaks" in J && a(12, $ = J.line_breaks), "root" in J && a(13, U = J.root), "proxy_url" in J && a(14, F = J.proxy_url), "i18n" in J && a(15, C = J.i18n), "layout" in J && a(16, L = J.layout);
  }, s.$$.update = () => {
    s.$$.dirty[0] & /*value, old_value*/
    2097153 && (Za(i, o) || (a(21, o = i), G("change")));
  }, [
    i,
    c,
    p,
    g,
    v,
    w,
    S,
    D,
    q,
    Z,
    j,
    re,
    $,
    U,
    F,
    C,
    L,
    B,
    Q,
    Y,
    ue,
    o,
    ge,
    Fe,
    Se,
    Le,
    rt,
    Ct,
    xt,
    Ie,
    xe,
    at,
    I,
    Oe,
    ne
  ];
}
class g2 extends Jf {
  constructor(r) {
    super(), t2(
      this,
      r,
      p2,
      d2,
      r2,
      {
        value: 0,
        latex_delimiters: 1,
        pending_message: 2,
        selectable: 3,
        likeable: 4,
        show_share_button: 5,
        rtl: 6,
        show_copy_button: 7,
        avatar_images: 8,
        sanitize_html: 9,
        bubble_full_width: 10,
        render_markdown: 11,
        line_breaks: 12,
        root: 13,
        proxy_url: 14,
        i18n: 15,
        layout: 16
      },
      null,
      [-1, -1]
    );
  }
}
const {
  SvelteComponent: v2,
  append: b2,
  assign: y2,
  attr: w2,
  check_outros: eo,
  create_component: Hn,
  destroy_component: Un,
  detach: to,
  element: k2,
  get_spread_object: _2,
  get_spread_update: x2,
  group_outros: ro,
  init: S2,
  insert: no,
  mount_component: Gn,
  safe_not_equal: A2,
  space: ao,
  transition_in: e0,
  transition_out: I0
} = window.__gradio__svelte__internal;
function io(s) {
  let r, a;
  const i = [
    {
      autoscroll: (
        /*gradio*/
        s[21].autoscroll
      )
    },
    { i18n: (
      /*gradio*/
      s[21].i18n
    ) },
    /*loading_status*/
    s[23],
    {
      show_progress: (
        /*loading_status*/
        s[23].show_progress === "hidden" ? "hidden" : "minimal"
      )
    }
  ];
  let o = {};
  for (let c = 0; c < i.length; c += 1)
    o = y2(o, i[c]);
  return r = new df({ props: o }), {
    c() {
      Hn(r.$$.fragment);
    },
    m(c, p) {
      Gn(r, c, p), a = !0;
    },
    p(c, p) {
      const g = p[0] & /*gradio, loading_status*/
      10485760 ? x2(i, [
        p[0] & /*gradio*/
        2097152 && {
          autoscroll: (
            /*gradio*/
            c[21].autoscroll
          )
        },
        p[0] & /*gradio*/
        2097152 && { i18n: (
          /*gradio*/
          c[21].i18n
        ) },
        p[0] & /*loading_status*/
        8388608 && _2(
          /*loading_status*/
          c[23]
        ),
        p[0] & /*loading_status*/
        8388608 && {
          show_progress: (
            /*loading_status*/
            c[23].show_progress === "hidden" ? "hidden" : "minimal"
          )
        }
      ]) : {};
      r.$set(g);
    },
    i(c) {
      a || (e0(r.$$.fragment, c), a = !0);
    },
    o(c) {
      I0(r.$$.fragment, c), a = !1;
    },
    d(c) {
      Un(r, c);
    }
  };
}
function lo(s) {
  let r, a;
  return r = new Ku({
    props: {
      show_label: (
        /*show_label*/
        s[7]
      ),
      Icon: yc,
      float: !1,
      label: (
        /*label*/
        s[6] || "Chatbot"
      )
    }
  }), {
    c() {
      Hn(r.$$.fragment);
    },
    m(i, o) {
      Gn(r, i, o), a = !0;
    },
    p(i, o) {
      const c = {};
      o[0] & /*show_label*/
      128 && (c.show_label = /*show_label*/
      i[7]), o[0] & /*label*/
      64 && (c.label = /*label*/
      i[6] || "Chatbot"), r.$set(c);
    },
    i(i) {
      a || (e0(r.$$.fragment, i), a = !0);
    },
    o(i) {
      I0(r.$$.fragment, i), a = !1;
    },
    d(i) {
      Un(r, i);
    }
  };
}
function T2(s) {
  var v;
  let r, a, i, o, c, p = (
    /*loading_status*/
    s[23] && io(s)
  ), g = (
    /*show_label*/
    s[7] && lo(s)
  );
  return o = new g2({
    props: {
      i18n: (
        /*gradio*/
        s[21].i18n
      ),
      selectable: (
        /*_selectable*/
        s[10]
      ),
      likeable: (
        /*likeable*/
        s[11]
      ),
      show_share_button: (
        /*show_share_button*/
        s[12]
      ),
      value: (
        /*_value*/
        s[25]
      ),
      latex_delimiters: (
        /*latex_delimiters*/
        s[20]
      ),
      render_markdown: (
        /*render_markdown*/
        s[18]
      ),
      pending_message: (
        /*loading_status*/
        ((v = s[23]) == null ? void 0 : v.status) === "pending"
      ),
      rtl: (
        /*rtl*/
        s[13]
      ),
      show_copy_button: (
        /*show_copy_button*/
        s[14]
      ),
      avatar_images: (
        /*avatar_images*/
        s[22]
      ),
      sanitize_html: (
        /*sanitize_html*/
        s[15]
      ),
      bubble_full_width: (
        /*bubble_full_width*/
        s[16]
      ),
      line_breaks: (
        /*line_breaks*/
        s[19]
      ),
      layout: (
        /*layout*/
        s[17]
      ),
      proxy_url: (
        /*proxy_url*/
        s[9]
      ),
      root: (
        /*root*/
        s[8]
      )
    }
  }), o.$on(
    "change",
    /*change_handler*/
    s[26]
  ), o.$on(
    "select",
    /*select_handler*/
    s[27]
  ), o.$on(
    "like",
    /*like_handler*/
    s[28]
  ), o.$on(
    "share",
    /*share_handler*/
    s[29]
  ), o.$on(
    "error",
    /*error_handler*/
    s[30]
  ), {
    c() {
      p && p.c(), r = ao(), a = k2("div"), g && g.c(), i = ao(), Hn(o.$$.fragment), w2(a, "class", "wrapper svelte-r8zcdo");
    },
    m(w, S) {
      p && p.m(w, S), no(w, r, S), no(w, a, S), g && g.m(a, null), b2(a, i), Gn(o, a, null), c = !0;
    },
    p(w, S) {
      var q;
      /*loading_status*/
      w[23] ? p ? (p.p(w, S), S[0] & /*loading_status*/
      8388608 && e0(p, 1)) : (p = io(w), p.c(), e0(p, 1), p.m(r.parentNode, r)) : p && (ro(), I0(p, 1, 1, () => {
        p = null;
      }), eo()), /*show_label*/
      w[7] ? g ? (g.p(w, S), S[0] & /*show_label*/
      128 && e0(g, 1)) : (g = lo(w), g.c(), e0(g, 1), g.m(a, i)) : g && (ro(), I0(g, 1, 1, () => {
        g = null;
      }), eo());
      const D = {};
      S[0] & /*gradio*/
      2097152 && (D.i18n = /*gradio*/
      w[21].i18n), S[0] & /*_selectable*/
      1024 && (D.selectable = /*_selectable*/
      w[10]), S[0] & /*likeable*/
      2048 && (D.likeable = /*likeable*/
      w[11]), S[0] & /*show_share_button*/
      4096 && (D.show_share_button = /*show_share_button*/
      w[12]), S[0] & /*_value*/
      33554432 && (D.value = /*_value*/
      w[25]), S[0] & /*latex_delimiters*/
      1048576 && (D.latex_delimiters = /*latex_delimiters*/
      w[20]), S[0] & /*render_markdown*/
      262144 && (D.render_markdown = /*render_markdown*/
      w[18]), S[0] & /*loading_status*/
      8388608 && (D.pending_message = /*loading_status*/
      ((q = w[23]) == null ? void 0 : q.status) === "pending"), S[0] & /*rtl*/
      8192 && (D.rtl = /*rtl*/
      w[13]), S[0] & /*show_copy_button*/
      16384 && (D.show_copy_button = /*show_copy_button*/
      w[14]), S[0] & /*avatar_images*/
      4194304 && (D.avatar_images = /*avatar_images*/
      w[22]), S[0] & /*sanitize_html*/
      32768 && (D.sanitize_html = /*sanitize_html*/
      w[15]), S[0] & /*bubble_full_width*/
      65536 && (D.bubble_full_width = /*bubble_full_width*/
      w[16]), S[0] & /*line_breaks*/
      524288 && (D.line_breaks = /*line_breaks*/
      w[19]), S[0] & /*layout*/
      131072 && (D.layout = /*layout*/
      w[17]), S[0] & /*proxy_url*/
      512 && (D.proxy_url = /*proxy_url*/
      w[9]), S[0] & /*root*/
      256 && (D.root = /*root*/
      w[8]), o.$set(D);
    },
    i(w) {
      c || (e0(p), e0(g), e0(o.$$.fragment, w), c = !0);
    },
    o(w) {
      I0(p), I0(g), I0(o.$$.fragment, w), c = !1;
    },
    d(w) {
      w && (to(r), to(a)), p && p.d(w), g && g.d(), Un(o);
    }
  };
}
function M2(s) {
  let r, a;
  return r = new Ru({
    props: {
      elem_id: (
        /*elem_id*/
        s[0]
      ),
      elem_classes: (
        /*elem_classes*/
        s[1]
      ),
      visible: (
        /*visible*/
        s[2]
      ),
      padding: !1,
      scale: (
        /*scale*/
        s[4]
      ),
      min_width: (
        /*min_width*/
        s[5]
      ),
      height: (
        /*height*/
        s[24]
      ),
      allow_overflow: !1,
      $$slots: { default: [T2] },
      $$scope: { ctx: s }
    }
  }), {
    c() {
      Hn(r.$$.fragment);
    },
    m(i, o) {
      Gn(r, i, o), a = !0;
    },
    p(i, o) {
      const c = {};
      o[0] & /*elem_id*/
      1 && (c.elem_id = /*elem_id*/
      i[0]), o[0] & /*elem_classes*/
      2 && (c.elem_classes = /*elem_classes*/
      i[1]), o[0] & /*visible*/
      4 && (c.visible = /*visible*/
      i[2]), o[0] & /*scale*/
      16 && (c.scale = /*scale*/
      i[4]), o[0] & /*min_width*/
      32 && (c.min_width = /*min_width*/
      i[5]), o[0] & /*height*/
      16777216 && (c.height = /*height*/
      i[24]), o[0] & /*gradio, _selectable, likeable, show_share_button, _value, latex_delimiters, render_markdown, loading_status, rtl, show_copy_button, avatar_images, sanitize_html, bubble_full_width, line_breaks, layout, proxy_url, root, value, show_label, label*/
      50331592 | o[1] & /*$$scope*/
      8 && (c.$$scope = { dirty: o, ctx: i }), r.$set(c);
    },
    i(i) {
      a || (e0(r.$$.fragment, i), a = !0);
    },
    o(i) {
      I0(r.$$.fragment, i), a = !1;
    },
    d(i) {
      Un(r, i);
    }
  };
}
function so(s) {
  let r, a = s[0], i = 1;
  for (; i < s.length; ) {
    const o = s[i], c = s[i + 1];
    if (i += 2, (o === "optionalAccess" || o === "optionalCall") && a == null)
      return;
    o === "access" || o === "optionalAccess" ? (r = a, a = c(a)) : (o === "call" || o === "optionalCall") && (a = c((...p) => a.call(r, ...p)), r = void 0);
  }
  return a;
}
function z2(s, r, a) {
  let { elem_id: i = "" } = r, { elem_classes: o = [] } = r, { visible: c = !0 } = r, { value: p = [] } = r, { scale: g = null } = r, { min_width: v = void 0 } = r, { label: w } = r, { show_label: S = !0 } = r, { root: D } = r, { proxy_url: q } = r, { _selectable: Z = !1 } = r, { likeable: j = !1 } = r, { show_share_button: re = !1 } = r, { rtl: $ = !1 } = r, { show_copy_button: U = !1 } = r, { sanitize_html: F = !0 } = r, { bubble_full_width: C = !0 } = r, { layout: L = "bubble" } = r, { render_markdown: B = !0 } = r, { line_breaks: O = !0 } = r, { latex_delimiters: G } = r, { gradio: Q } = r, { avatar_images: Y = [null, null] } = r, ue;
  const ge = (I) => I.replace('src="/file', `src="${D}file`);
  function Fe(I) {
    return I === null ? I : {
      file: Oo(so([I, "optionalAccess", (Oe) => Oe.file]), D, q),
      alt_text: so([I, "optionalAccess", (Oe) => Oe.alt_text])
    };
  }
  function Se(I) {
    return I === null || (I.text = ge(I.text), I.files = I.files.map(Fe)), I;
  }
  let { loading_status: Le = void 0 } = r, { height: rt = 400 } = r;
  const Ct = () => Q.dispatch("change", p), xt = (I) => Q.dispatch("select", I.detail), Ie = (I) => Q.dispatch("like", I.detail), xe = (I) => Q.dispatch("share", I.detail), at = (I) => Q.dispatch("error", I.detail);
  return s.$$set = (I) => {
    "elem_id" in I && a(0, i = I.elem_id), "elem_classes" in I && a(1, o = I.elem_classes), "visible" in I && a(2, c = I.visible), "value" in I && a(3, p = I.value), "scale" in I && a(4, g = I.scale), "min_width" in I && a(5, v = I.min_width), "label" in I && a(6, w = I.label), "show_label" in I && a(7, S = I.show_label), "root" in I && a(8, D = I.root), "proxy_url" in I && a(9, q = I.proxy_url), "_selectable" in I && a(10, Z = I._selectable), "likeable" in I && a(11, j = I.likeable), "show_share_button" in I && a(12, re = I.show_share_button), "rtl" in I && a(13, $ = I.rtl), "show_copy_button" in I && a(14, U = I.show_copy_button), "sanitize_html" in I && a(15, F = I.sanitize_html), "bubble_full_width" in I && a(16, C = I.bubble_full_width), "layout" in I && a(17, L = I.layout), "render_markdown" in I && a(18, B = I.render_markdown), "line_breaks" in I && a(19, O = I.line_breaks), "latex_delimiters" in I && a(20, G = I.latex_delimiters), "gradio" in I && a(21, Q = I.gradio), "avatar_images" in I && a(22, Y = I.avatar_images), "loading_status" in I && a(23, Le = I.loading_status), "height" in I && a(24, rt = I.height);
  }, s.$$.update = () => {
    s.$$.dirty[0] & /*value*/
    8 && a(25, ue = p ? p.map(([I, Oe]) => [Se(I), Se(Oe)]) : []);
  }, [
    i,
    o,
    c,
    p,
    g,
    v,
    w,
    S,
    D,
    q,
    Z,
    j,
    re,
    $,
    U,
    F,
    C,
    L,
    B,
    O,
    G,
    Q,
    Y,
    Le,
    rt,
    ue,
    Ct,
    xt,
    Ie,
    xe,
    at
  ];
}
class B2 extends v2 {
  constructor(r) {
    super(), S2(
      this,
      r,
      z2,
      M2,
      A2,
      {
        elem_id: 0,
        elem_classes: 1,
        visible: 2,
        value: 3,
        scale: 4,
        min_width: 5,
        label: 6,
        show_label: 7,
        root: 8,
        proxy_url: 9,
        _selectable: 10,
        likeable: 11,
        show_share_button: 12,
        rtl: 13,
        show_copy_button: 14,
        sanitize_html: 15,
        bubble_full_width: 16,
        layout: 17,
        render_markdown: 18,
        line_breaks: 19,
        latex_delimiters: 20,
        gradio: 21,
        avatar_images: 22,
        loading_status: 23,
        height: 24
      },
      null,
      [-1, -1]
    );
  }
}
export {
  g2 as BaseChatBot,
  B2 as default
};
