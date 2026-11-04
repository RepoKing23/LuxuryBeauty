
(() => {

const __ds_ns = (window.LuxuryBeautyByCleoRDesignSystem_8fa9a4 = window.LuxuryBeautyByCleoRDesignSystem_8fa9a4 || {});

const __ds_scope = {};
const LB_H = (l, i) => (window.LB_hrefFor ? window.LB_hrefFor(l, i) : "#");

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/ConcernList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ConcernList({
  concerns = [],
  onSelect,
  hrefFor,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border)",
      ...style
    }
  }, concerns.map((c, k) => /*#__PURE__*/React.createElement(Row, _extends({
    key: k
  }, c, {
    href: hrefFor ? hrefFor(c) : c.href,
    onClick: onSelect ? e => {
      e.preventDefault();
      onSelect(c);
    } : undefined
  }))));
}
function Row({
  name,
  href = "#",
  onClick
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: "grid",
      gridTemplateColumns: "1fr auto",
      alignItems: "center",
      gap: 30,
      borderBottom: "1px solid var(--border)",
      padding: h ? "25px 10px 25px 25px" : "25px 10px",
      background: h ? "var(--surface)" : "transparent",
      transition: "padding 150ms, background 150ms",
      color: "inherit",
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "clamp(25px,3vw,38px)"
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true
  }, "\u2197"));
}
Object.assign(__ds_scope, { ConcernList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ConcernList.jsx", error: String((e && e.message) || e) }); }

// components/content/FaqList.jsx
try { (() => {
function FaqList({
  faqs = [],
  limit,
  style
}) {
  const [open, setOpen] = React.useState(-1);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border)",
      ...style
    }
  }, faqs.slice(0, limit).map(([q, a], k) => {
    const o = open === k;
    return /*#__PURE__*/React.createElement("div", {
      key: k,
      style: {
        borderBottom: "1px solid var(--border)"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(o ? -1 : k),
      "aria-expanded": o,
      style: {
        all: "unset",
        boxSizing: "border-box",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        gap: 30,
        padding: "27px 2px",
        cursor: "pointer",
        fontFamily: "var(--font-display)",
        fontSize: 25,
        lineHeight: 1.2,
        color: "var(--foreground)"
      }
    }, q, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-body)",
        fontWeight: 300,
        color: "var(--brand-green)",
        transform: o ? "rotate(45deg)" : "none",
        transition: "transform 150ms",
        display: "inline-block"
      }
    }, "+")), o && /*#__PURE__*/React.createElement("p", {
      style: {
        maxWidth: 700,
        padding: "0 50px 26px 0",
        margin: 0
      }
    }, a));
  }));
}
Object.assign(__ds_scope, { FaqList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/FaqList.jsx", error: String((e && e.message) || e) }); }

// components/content/ReviewCard.jsx
try { (() => {
function ReviewCard({
  name,
  text,
  services,
  style
}) {
  return /*#__PURE__*/React.createElement("article", {
    style: {
      display: "flex",
      flexDirection: "column",
      minHeight: 430,
      background: "#fff",
      padding: "clamp(28px,3.5vw,52px)",
      boxSizing: "border-box",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 36,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      letterSpacing: "0.15em",
      color: "var(--brand-green)"
    },
    "aria-label": "5 out of 5 stars"
  }, "\u2605\u2605\u2605\u2605\u2605"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 8,
      fontWeight: 600,
      letterSpacing: "0.16em",
      color: "var(--brand-muted)",
      textTransform: "uppercase"
    }
  }, "Google review")), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      marginBottom: 12,
      fontFamily: "var(--font-display)",
      fontSize: 64,
      lineHeight: 0.6,
      color: "var(--brand-accent)"
    }
  }, "\u201C"), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "clamp(23px,2vw,30px)",
      lineHeight: 1.25,
      letterSpacing: "-0.015em"
    }
  }, text), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      paddingTop: 40
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: "0.15em",
      textTransform: "uppercase"
    }
  }, name), services && services.length > 0 && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "8px 0 0",
      fontSize: 9,
      letterSpacing: "0.1em",
      color: "var(--brand-muted)",
      textTransform: "uppercase"
    }
  }, services.join(" · "))));
}
Object.assign(__ds_scope, { ReviewCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ReviewCard.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionHeading.jsx
try { (() => {
function SectionHeading({
  title,
  children,
  titleSize = "clamp(50px,6vw,88px)",
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 72,
      display: "grid",
      gridTemplateColumns: "minmax(0,1.3fr) minmax(260px,0.7fr)",
      alignItems: "end",
      gap: "12vw",
      ...style
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      maxWidth: 760,
      fontSize: titleSize,
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      lineHeight: 0.98,
      letterSpacing: "-0.02em",
      margin: 0
    }
  }, title), children && /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 460,
      fontSize: 16,
      margin: 0
    }
  }, children));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  cta: {
    minHeight: 52,
    gap: 28,
    padding: "14px 24px"
  },
  "cta-sm": {
    minHeight: 44,
    gap: 20,
    padding: "12px 18px"
  }
};
const palette = {
  brand: {
    rest: {
      background: "var(--primary)",
      color: "var(--primary-foreground)",
      borderColor: "var(--primary)"
    },
    hover: {
      background: "transparent",
      color: "var(--primary)"
    }
  },
  brandOutline: {
    rest: {
      background: "transparent",
      color: "var(--primary)",
      borderColor: "var(--primary)"
    },
    hover: {
      background: "var(--primary)",
      color: "var(--primary-foreground)"
    }
  },
  brandInverse: {
    rest: {
      background: "var(--primary-foreground)",
      color: "var(--primary)",
      borderColor: "var(--primary-foreground)"
    },
    hover: {
      background: "transparent",
      color: "var(--primary-foreground)"
    }
  }
};
function Button({
  variant = "brand",
  size = "cta",
  href,
  arrow = false,
  disabled = false,
  children,
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const p = palette[variant] || palette.brand;
  const s = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    whiteSpace: "nowrap",
    border: "1px solid",
    borderRadius: 0,
    fontFamily: "var(--font-body)",
    fontSize: 10,
    fontWeight: 500,
    lineHeight: 1.3,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    textDecoration: "none",
    cursor: disabled ? "default" : "pointer",
    opacity: disabled ? 0.5 : 1,
    pointerEvents: disabled ? "none" : "auto",
    transition: "all 150ms var(--ease-brand)",
    boxSizing: "border-box",
    ...sizes[size],
    ...p.rest,
    ...(h ? p.hover : {}),
    ...style
  };
  const Tag = href ? "a" : "button";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    style: s,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    disabled: Tag === "button" ? disabled : undefined
  }, rest), children, arrow && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true
  }, "\u2197"));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function Logo({
  src = "/assets/logo-icon-w256.webp",
  href = "#",
  compact = false,
  style
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    "aria-label": "Luxury Beauty by Cleo R. home",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      lineHeight: 1,
      color: "inherit",
      textDecoration: "none",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: compact ? 52 : 64,
      height: compact ? 52 : 64,
      flexShrink: 0,
      overflow: "hidden",
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "Luxury Beauty by Cleo R. logo",
    width: 256,
    height: 256,
    decoding: "async",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "contain",
      transform: "scale(1.8)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      whiteSpace: "nowrap",
      fontFamily: "var(--font-display)",
      fontSize: compact ? 19 : 23,
      fontWeight: 400,
      letterSpacing: "0.01em"
    }
  }, "Luxury Beauty"), !compact && /*#__PURE__*/React.createElement("small", {
    style: {
      fontFamily: "var(--font-signature)",
      fontSize: 20,
      lineHeight: 0.75
    }
  }, "by Cleo R.")));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/TextLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TextLink({
  href,
  arrow = true,
  children,
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 30,
      borderBottom: "1px solid currentColor",
      paddingBottom: 5,
      fontSize: 10,
      lineHeight: 1.3,
      letterSpacing: "0.15em",
      textTransform: "uppercase",
      color: "inherit",
      textDecoration: "none",
      width: "fit-content",
      opacity: h ? 0.55 : 1,
      transition: "opacity 150ms",
      cursor: "pointer",
      ...style
    }
  }, rest), children, arrow && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14
    },
    "aria-hidden": true
  }, "\u2197"));
}
Object.assign(__ds_scope, { TextLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/TextLink.jsx", error: String((e && e.message) || e) }); }

// components/content/TreatmentCard.jsx
try { (() => {
function TreatmentCard({
  name,
  summary,
  image,
  imageAlt,
  href = "#",
  onClick,
  style
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: "flex",
      flexDirection: "column",
      borderRight: "1px solid var(--border)",
      borderBottom: "1px solid var(--border)",
      background: h ? "var(--surface-soft)" : "var(--background)",
      transition: "background-color 150ms",
      cursor: onClick ? "pointer" : "default",
      boxSizing: "border-box",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: "4/3",
      overflow: "hidden",
      background: "var(--surface-warm)"
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt || name + " in Oakville",
    loading: "lazy",
    decoding: "async",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transform: h ? "scale(1.025)" : "none",
      transition: "transform 450ms"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      padding: "24px 28px 22px",
      minHeight: 230,
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "0 0 14px",
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      lineHeight: 0.98,
      letterSpacing: "-0.02em",
      fontSize: "clamp(30px,2.3vw,42px)"
    }
  }, name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 16px",
      maxWidth: 400
    }
  }, summary), /*#__PURE__*/React.createElement(__ds_scope.TextLink, {
    href: href,
    style: {
      marginTop: "auto"
    }
  }, "Explore treatment")));
}
Object.assign(__ds_scope, { TreatmentCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/TreatmentCard.jsx", error: String((e && e.message) || e) }); }

// components/content/TreatmentCarousel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TreatmentCarousel({
  treatments = [],
  perView = 4,
  style
}) {
  const [i, setI] = React.useState(0);
  const n = treatments.length || 1;
  const items = [...treatments, ...treatments];
  const Btn = ({
    dir,
    label
  }) => {
    const [h, setH] = React.useState(false);
    return /*#__PURE__*/React.createElement("button", {
      "aria-label": label,
      onClick: () => setI(v => (v + dir + n) % n),
      onMouseEnter: () => setH(true),
      onMouseLeave: () => setH(false),
      style: {
        width: 44,
        height: 44,
        borderRadius: "50%",
        border: "1px solid var(--foreground)",
        background: h ? "var(--foreground)" : "transparent",
        color: h ? "var(--background)" : "var(--foreground)",
        cursor: "pointer",
        fontSize: 16,
        display: "grid",
        placeItems: "center",
        transition: "all 150ms"
      }
    }, dir < 0 ? "←" : "→");
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: "hidden",
      borderTop: "1px solid var(--border)",
      borderLeft: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      transform: `translateX(-${100 / perView * i}%)`,
      transition: "transform 600ms var(--ease-brand)"
    }
  }, items.map((t, k) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      flex: `0 0 ${100 / perView}%`
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.TreatmentCard, _extends({}, t, {
    style: {
      height: "100%"
    }
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: 10,
      paddingTop: 24,
      paddingBottom: 8
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    dir: -1,
    label: "Previous treatment"
  }), /*#__PURE__*/React.createElement(Btn, {
    dir: 1,
    label: "Next treatment"
  })));
}
Object.assign(__ds_scope, { TreatmentCarousel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/TreatmentCarousel.jsx", error: String((e && e.message) || e) }); }

// components/layout/BookingCta.jsx
try { (() => {
function BookingCta({
  image,
  title = "You don’t need to know what treatment you need.",
  subtitle = "You just need to start the conversation.",
  href = "#",
  onClick,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      display: "grid",
      minHeight: 720,
      placeItems: "center",
      textAlign: "center",
      color: "#fff",
      overflow: "hidden",
      background: "var(--lb-ink)",
      ...style
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    loading: "lazy",
    decoding: "async",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--lb-overlay)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 10,
      maxWidth: 900,
      padding: "60px 30px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 24px",
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      lineHeight: 0.98,
      letterSpacing: "-0.02em",
      fontSize: "clamp(58px,8vw,110px)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 32px",
      fontSize: 18
    }
  }, subtitle), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "brandInverse",
    arrow: true,
    href: href,
    onClick: onClick
  }, "Book a consultation")));
}
Object.assign(__ds_scope, { BookingCta });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/BookingCta.jsx", error: String((e && e.message) || e) }); }

// components/layout/PageHero.jsx
try { (() => {
function PageHero({
  title,
  intro,
  tone = "light",
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: tone === "blush" ? "var(--surface-soft)" : "var(--surface)",
      padding: "145px max(6vw,32px) 105px",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "min(100%,1180px)"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      maxWidth: 1120,
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      lineHeight: 0.98,
      letterSpacing: "-0.02em",
      fontSize: "clamp(72px,10vw,142px)"
    }
  }, title), intro && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "36px 0 0",
      maxWidth: 700,
      fontSize: 18
    }
  }, intro)));
}
Object.assign(__ds_scope, { PageHero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/PageHero.jsx", error: String((e && e.message) || e) }); }

// components/layout/SiteFooter.jsx
try { (() => {
const Label = ({
  children
}) => /*#__PURE__*/React.createElement("p", {
  style: {
    margin: "0 0 16px",
    fontSize: 14,
    fontWeight: 600,
    letterSpacing: "0.2em",
    color: "var(--brand-green)",
    textTransform: "uppercase"
  }
}, children);
const col = {
  display: "flex",
  flexDirection: "column",
  gap: 8,
  fontSize: 14
};
const MAP_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.536621236177!2d-79.73647509999999!3d43.47558569999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b5d02bab7dd91%3A0xd1e4c7aa4bbefca2!2sLuxury%20Beauty%20By%20Cleo%20R!5e0!3m2!1sen!2sca!4v1789959453969!5m2!1sen!2sca";
const GBP_LINK = "https://maps.google.com/?cid=15124432982846143650";
const MAP_LINK = "https://maps.app.goo.gl/8nuEqr8YRCzXv4A5A";
const SOCIALS = [{
  name: "Instagram",
  href: "https://www.instagram.com/luxury_beauty_aestheticz/"
}, {
  name: "Facebook",
  href: "#"
}, {
  name: "YouTube",
  href: "#"
}];
const ICONS = {
  Instagram: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "18",
    height: "18",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3.5",
    y: "3.5",
    width: "17",
    height: "17",
    rx: "5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "17.2",
    cy: "6.8",
    r: "0.9",
    fill: "currentColor",
    stroke: "none"
  })),
  Facebook: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "18",
    height: "18",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.6-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H7.9v3h2.6V21h3z"
  })),
  YouTube: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "18",
    height: "18",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "2.5",
    y: "5.5",
    width: "19",
    height: "13",
    rx: "3.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 9.2v5.6l4.8-2.8z",
    fill: "currentColor",
    stroke: "none"
  }))
};
function Social({
  s
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: s.href,
    target: s.href !== "#" ? "_blank" : undefined,
    rel: "noreferrer",
    "aria-label": s.name,
    title: s.name,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: "grid",
      placeItems: "center",
      width: 42,
      height: 42,
      border: "1px solid rgb(37 40 42 / 0.25)",
      color: h ? "var(--background)" : "var(--foreground)",
      background: h ? "var(--foreground)" : "transparent",
      transition: "background 150ms,color 150ms"
    }
  }, ICONS[s.name] || s.name.charAt(0));
}
function SiteFooter({
  logoSrc,
  treatments = ["Botox & Neurotoxins", "Dermal Fillers", "Lip Filler", "Fat Dissolving", "Skin Boosters", "Weight Loss Treatments", "IV Infusions"],
  socials = SOCIALS,
  map = false,
  mapEmbedSrc = MAP_EMBED,
  mapHref = MAP_LINK,
  onNavigate,
  year = new Date().getFullYear(),
  style
}) {
  const A = ({
    children,
    label,
    item,
    href = label ? LB_H(label, item) : "#",
    target
  }) => {
    const [h, setH] = React.useState(false);
    return /*#__PURE__*/React.createElement("a", {
      href: href,
      target: target,
      rel: target ? "noreferrer" : undefined,
      onClick: label && onNavigate ? e => {
        e.preventDefault();
        onNavigate(label, item);
      } : undefined,
      onMouseEnter: () => setH(true),
      onMouseLeave: () => setH(false),
      style: {
        color: "inherit",
        textDecoration: "none",
        opacity: h ? 0.55 : 1,
        transition: "opacity 150ms"
      }
    }, children);
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--clinical)",
      padding: "80px max(6vw,32px) 24px",
      color: "var(--foreground)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.8fr repeat(3,1fr)",
      gap: "6vw",
      paddingBottom: 70
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    src: logoSrc,
    href: "/"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 28,
      maxWidth: 280,
      fontFamily: "var(--font-display)",
      fontSize: 27,
      lineHeight: 1.15
    }
  }, "Where medical precision meets the art of beauty."), socials && socials.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginTop: 28
    }
  }, socials.filter(s => s.href && s.href !== "#").map(s => /*#__PURE__*/React.createElement(Social, {
    key: s.name,
    s: s
  }))), map && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      maxWidth: 340
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: "16 / 10",
      overflow: "hidden",
      border: "1px solid rgb(37 40 42 / 0.18)",
      background: "var(--surface)"
    }
  }, /*#__PURE__*/React.createElement("iframe", {
    src: mapEmbedSrc,
    title: "Map to Luxury Beauty by Cleo R., 3060 Preserve Dr, Oakville",
    loading: "lazy",
    referrerPolicy: "no-referrer-when-downgrade",
    allowFullScreen: true,
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      border: 0,
      filter: "grayscale(0.35)"
    }
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "12px 0 0",
      fontSize: 9,
      fontWeight: 600,
      letterSpacing: "0.2em",
      textTransform: "uppercase"
    }
  }, /*#__PURE__*/React.createElement(A, {
    href: mapHref,
    target: "_blank"
  }, "Get directions \u2197")))), /*#__PURE__*/React.createElement("div", {
    style: col
  }, /*#__PURE__*/React.createElement(Label, null, "Explore"), /*#__PURE__*/React.createElement(A, {
    label: "About"
  }, "About Cleo"), /*#__PURE__*/React.createElement(A, {
    label: "Before & After"
  }, "Before & After"), /*#__PURE__*/React.createElement(A, {
    label: "New Here?"
  }, "Your first visit"), /*#__PURE__*/React.createElement(A, {
    label: "FAQs"
  }, "FAQs"), /*#__PURE__*/React.createElement(A, {
    label: "Locations"
  }, "Locations"), ["burlington", "milton", "mississauga"].map(k => /*#__PURE__*/React.createElement(A, {
    key: k,
    label: "area",
    item: k
  }, "Med spa " + k.charAt(0).toUpperCase() + k.slice(1)))), /*#__PURE__*/React.createElement("div", {
    style: col
  }, /*#__PURE__*/React.createElement(Label, null, "Treatments"), treatments.map(t => /*#__PURE__*/React.createElement(A, {
    key: t,
    label: t
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: col
  }, /*#__PURE__*/React.createElement(Label, null, "Connect"), /*#__PURE__*/React.createElement(A, {
    label: "Book a consultation"
  }, "Book a consultation"), /*#__PURE__*/React.createElement("span", null, "Luxury Beauty by Cleo R."), /*#__PURE__*/React.createElement(A, {
    href: mapHref,
    target: "_blank"
  }, "3060 Preserve Dr,", /*#__PURE__*/React.createElement("br", null), "Oakville, ON L6M 4L9, CA"), /*#__PURE__*/React.createElement(A, {
    href: "tel:+14162940452"
  }, "416-294-0452"), /*#__PURE__*/React.createElement(A, {
    href: "/about#video-highlights"
  }, "YouTube interviews"), /*#__PURE__*/React.createElement(A, {
    href: GBP_LINK,
    target: "_blank"
  }, "Google reviews"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: 20,
      borderTop: "1px solid rgb(37 40 42 / 0.18)",
      paddingTop: 20,
      fontSize: 9,
      letterSpacing: "0.1em",
      textTransform: "uppercase"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 ", year, " Luxury Beauty by Cleo R."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(A, {
    label: "Privacy"
  }, "Privacy"), /*#__PURE__*/React.createElement(A, {
    label: "Clinic policies"
  }, "Clinic policies"))));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/layout/SiteHeader.jsx
try { (() => {
const NAV = ["About", "Treatments", "Concerns", "Before & After", "New Here?", "FAQs"];
function useWidth() {
  const [w, setW] = React.useState(1440);
  React.useEffect(() => {
    const f = () => setW(window.innerWidth);
    f();
    window.addEventListener("resize", f);
    return () => window.removeEventListener("resize", f);
  }, []);
  return w;
}
const capsLabel = {
  fontSize: 9,
  fontWeight: 600,
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "var(--brand-green)"
};
function SiteHeader({
  logoSrc,
  current,
  onNavigate,
  nav = NAV,
  menus,
  style
}) {
  const w = useWidth();
  const [open, setOpen] = React.useState(false);
  const [mega, setMega] = React.useState(null);
  const t = React.useRef();
  const collapsed = w <= 1120,
    mobile = w <= 800;
  const go = (l, item) => e => {
    setOpen(false);
    setMega(null);
    if (onNavigate) {
      e.preventDefault();
      onNavigate(l, item);
    }
  };
  const show = l => {
    clearTimeout(t.current);
    setMega(menus && menus[l] ? l : null);
  };
  const hide = () => {
    clearTimeout(t.current);
    t.current = setTimeout(() => setMega(null), 140);
  };
  React.useEffect(() => {
    const k = e => {
      if (e.key === "Escape") setMega(null);
    };
    window.addEventListener("keydown", k);
    return () => {
      window.removeEventListener("keydown", k);
      clearTimeout(t.current);
    };
  }, []);
  const bar = r => ({
    display: "block",
    height: 1,
    width: 17,
    background: "currentColor",
    transition: "transform 300ms var(--ease-brand)",
    transform: open ? `translateY(${r > 0 ? 3.5 : -3.5}px) rotate(${r}deg)` : "none"
  });
  const m = !collapsed && mega && menus[mega];
  return /*#__PURE__*/React.createElement("header", {
    onMouseLeave: hide,
    style: {
      position: "relative",
      zIndex: 30,
      borderBottom: "1px solid var(--border)",
      background: "var(--header-bg)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "0 auto",
      display: "flex",
      height: mobile ? 72 : 88,
      width: mobile ? "calc(100% - 32px)" : "min(calc(100% - 48px),1440px)",
      alignItems: "center",
      gap: mobile ? 12 : 42
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: go("Home"),
    onMouseEnter: hide,
    style: {
      marginRight: "auto",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    src: logoSrc,
    href: "/",
    compact: w <= 520
  })), !collapsed && /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Primary navigation",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 28,
      alignSelf: "stretch"
    }
  }, nav.map(l => /*#__PURE__*/React.createElement(NavLink, {
    key: l,
    label: l,
    active: current === l,
    hasMenu: !!(menus && menus[l]),
    expanded: mega === l,
    onEnter: () => show(l),
    href: LB_H(l),
    onClick: go(l)
  }))), !mobile && /*#__PURE__*/React.createElement("span", {
    onMouseEnter: hide
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "brand",
    size: "cta-sm",
    href: LB_H("Book a consultation"),
    onClick: go("Book a consultation")
  }, "Book a consultation")), collapsed && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": open ? "Close navigation" : "Open navigation",
    "aria-expanded": open,
    onClick: () => setOpen(o => !o),
    style: {
      display: "grid",
      width: 42,
      height: 42,
      placeContent: "center",
      gap: 6,
      border: "1px solid var(--border)",
      background: "transparent",
      color: "var(--foreground)",
      cursor: "pointer",
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: bar(45)
  }), /*#__PURE__*/React.createElement("span", {
    style: bar(-45)
  }))), m && /*#__PURE__*/React.createElement(MegaPanel, {
    menu: m,
    label: mega,
    go: go,
    onEnter: () => clearTimeout(t.current)
  }), collapsed && open && /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Mobile navigation",
    style: {
      position: "absolute",
      top: mobile ? 72 : 88,
      left: 0,
      right: 0,
      display: "flex",
      flexDirection: "column",
      background: "var(--background)",
      borderBottom: "1px solid var(--border)",
      padding: 24,
      boxShadow: "var(--shadow-menu)"
    }
  }, [...nav, "Book a consultation"].map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: LB_H(l),
    onClick: go(l),
    style: {
      display: "block",
      padding: 12,
      fontFamily: "var(--font-display)",
      fontSize: 25,
      color: "inherit",
      textDecoration: "none"
    }
  }, l))));
}
function MegaPanel({
  menu,
  label,
  go,
  onEnter
}) {
  const [img, setImg] = React.useState(null);
  const f = menu.feature;
  return /*#__PURE__*/React.createElement("div", {
    role: "region",
    "aria-label": label + " menu",
    onMouseEnter: onEnter,
    style: {
      position: "absolute",
      top: "100%",
      left: 0,
      right: 0,
      background: "var(--background)",
      borderTop: "1px solid var(--border)",
      borderBottom: "1px solid var(--border)",
      boxShadow: "var(--shadow-menu)",
      animation: "lbMegaIn 260ms var(--ease-brand)"
    }
  }, /*#__PURE__*/React.createElement("style", null, "@keyframes lbMegaIn{from{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:none}}"), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "0 auto",
      width: "min(calc(100% - 48px),1440px)",
      display: "grid",
      gridTemplateColumns: `${menu.columns.map((c, i) => i === 0 ? "minmax(0,1.35fr)" : "minmax(0,1fr)").join(" ")}${f ? " minmax(0,1fr)" : ""}`,
      gap: "clamp(28px,3.5vw,56px)",
      padding: "40px 0 44px"
    }
  }, menu.columns.map((c, ci) => /*#__PURE__*/React.createElement("div", {
    key: c.title,
    style: {
      display: "flex",
      flexDirection: "column",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...capsLabel,
      paddingBottom: 14,
      borderBottom: "1px solid var(--border)"
    }
  }, c.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: ci === 0 && c.items.length > 4 ? "1fr 1fr" : "1fr",
      columnGap: 28
    }
  }, c.items.map(it => /*#__PURE__*/React.createElement(MegaItem, {
    key: it.label,
    it: it,
    href: LB_H(it.to || it.label, it),
    onClick: go(it.to || it.label, it),
    onHover: () => setImg(it.image || null)
  }))), c.all && /*#__PURE__*/React.createElement("a", {
    href: LB_H(c.all.to || c.all.label, c.all),
    onClick: go(c.all.to || c.all.label, c.all),
    style: {
      marginTop: 18,
      fontSize: 10,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "inherit",
      textDecoration: "none",
      width: "fit-content",
      borderBottom: "1px solid var(--foreground)",
      paddingBottom: 3
    }
  }, c.all.label, " ", /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true
  }, "\u2197")))), f && /*#__PURE__*/React.createElement("a", {
    href: LB_H(f.to || "Book a consultation", f),
    onClick: go(f.to || "Book a consultation", f),
    style: {
      display: "flex",
      flexDirection: "column",
      color: "inherit",
      textDecoration: "none",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: "4 / 3",
      overflow: "hidden",
      background: "var(--surface)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: img || f.image,
    alt: "",
    loading: "lazy",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "opacity 300ms"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 26,
      lineHeight: 1.1,
      marginTop: 16
    }
  }, f.title), f.text && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      lineHeight: 1.55,
      color: "var(--brand-muted)",
      margin: "8px 0 0"
    }
  }, f.text), f.cta && /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 14,
      fontSize: 10,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      borderBottom: "1px solid var(--foreground)",
      paddingBottom: 3,
      width: "fit-content"
    }
  }, f.cta, " ", /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true
  }, "\u2197")))));
}
function MegaItem({
  it,
  href = "#",
  onClick,
  onHover
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    onMouseEnter: () => {
      setH(true);
      onHover();
    },
    onFocus: onHover,
    onMouseLeave: () => setH(false),
    style: {
      display: "block",
      padding: "13px 0",
      borderBottom: "1px solid var(--border)",
      color: "inherit",
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 21,
      lineHeight: 1.15,
      transform: h ? "translateX(6px)" : "none",
      transition: "transform 300ms var(--ease-brand)"
    }
  }, it.label), it.badge && /*#__PURE__*/React.createElement("span", {
    style: {
      ...capsLabel,
      fontSize: 8
    }
  }, it.badge)), it.desc && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: 12,
      lineHeight: 1.5,
      color: "var(--brand-muted)",
      marginTop: 3
    }
  }, it.desc));
}
function NavLink({
  label,
  active,
  hasMenu,
  expanded,
  onEnter,
  href = "#",
  onClick
}) {
  const [h, setH] = React.useState(false);
  const lit = h || expanded;
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    onMouseEnter: () => {
      setH(true);
      onEnter();
    },
    onFocus: onEnter,
    onMouseLeave: () => setH(false),
    "aria-current": active ? "page" : undefined,
    "aria-haspopup": hasMenu || undefined,
    "aria-expanded": hasMenu ? expanded : undefined,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      alignSelf: "stretch",
      fontSize: 11,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "inherit",
      textDecoration: "none",
      whiteSpace: "nowrap",
      opacity: lit && !hasMenu ? 0.55 : 1,
      transition: "opacity 150ms"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      borderBottom: active || hasMenu && expanded ? "1px solid var(--brand-green)" : "1px solid transparent",
      paddingBottom: 4,
      marginTop: 5
    }
  }, label), hasMenu && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      fontSize: 8,
      marginTop: 1,
      transform: expanded ? "rotate(180deg)" : "none",
      transition: "transform 250ms var(--ease-brand)"
    }
  }, "\u25BE"));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SiteHeader.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ConcernList = __ds_scope.ConcernList;

__ds_ns.FaqList = __ds_scope.FaqList;

__ds_ns.ReviewCard = __ds_scope.ReviewCard;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.TreatmentCard = __ds_scope.TreatmentCard;

__ds_ns.TreatmentCarousel = __ds_scope.TreatmentCarousel;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.TextLink = __ds_scope.TextLink;

__ds_ns.BookingCta = __ds_scope.BookingCta;

__ds_ns.PageHero = __ds_scope.PageHero;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

})();
