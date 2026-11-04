/* @ds-bundle: {"format":4,"namespace":"LuxuryBeautyByCleoRDesignSystem_8fa9a4","components":[{"name":"ConcernList","sourcePath":"components/content/ConcernList.jsx"},{"name":"FaqList","sourcePath":"components/content/FaqList.jsx"},{"name":"ReviewCard","sourcePath":"components/content/ReviewCard.jsx"},{"name":"SectionHeading","sourcePath":"components/content/SectionHeading.jsx"},{"name":"TreatmentCard","sourcePath":"components/content/TreatmentCard.jsx"},{"name":"TreatmentCarousel","sourcePath":"components/content/TreatmentCarousel.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"TextLink","sourcePath":"components/core/TextLink.jsx"},{"name":"BookingCta","sourcePath":"components/layout/BookingCta.jsx"},{"name":"PageHero","sourcePath":"components/layout/PageHero.jsx"},{"name":"SiteFooter","sourcePath":"components/layout/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/layout/SiteHeader.jsx"}],"sourceHashes":{"components/content/ConcernList.jsx":"34d35d969017","components/content/FaqList.jsx":"256e44f658fd","components/content/ReviewCard.jsx":"1976741f9644","components/content/SectionHeading.jsx":"d4ec4223e9eb","components/content/TreatmentCard.jsx":"cf6d417fb17a","components/content/TreatmentCarousel.jsx":"3d3a176705ef","components/core/Button.jsx":"caf9d4fa7b80","components/core/Logo.jsx":"882fd5a7e422","components/core/TextLink.jsx":"b461321bda4a","components/layout/BookingCta.jsx":"011cc509345c","components/layout/PageHero.jsx":"e604487e7d03","components/layout/SiteFooter.jsx":"acc7e5eb3fd2","components/layout/SiteHeader.jsx":"e28c1f76747f","ui_kits/website/ConcernDetail.jsx":"2c1c52decfc6","ui_kits/website/Home.jsx":"7e0a013a1481","ui_kits/website/HomeSeo.jsx":"066f3fb7ff2b","ui_kits/website/MorePages.jsx":"46277f359560","ui_kits/website/Pages.jsx":"abe9dfcb8548","ui_kits/website/ServiceArea.jsx":"13be8819940a","ui_kits/website/Shared.jsx":"4c74287c4b50","ui_kits/website/TreatmentDetail.jsx":"6daead4b4ee8","ui_kits/website/Treatments.jsx":"eee9f54e5289","ui_kits/website/areaContent.js":"8038307f09fe","ui_kits/website/concernContent.js":"262bb424584c","ui_kits/website/data.js":"a11e0bb95276","ui_kits/website/scrollReveal.js":"694c4a2074e3","ui_kits/website/seoMeta.js":"8327feb546d3","ui_kits/website/treatmentContent.js":"e06aac4f1127"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.LuxuryBeautyByCleoRDesignSystem_8fa9a4 = window.LuxuryBeautyByCleoRDesignSystem_8fa9a4 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/ConcernList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ConcernList({
  concerns = [],
  onSelect,
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
  src = "assets/logo-icon.png",
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
    alt: "",
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
  imageAlt = "",
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
    alt: imageAlt,
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
    href = "#",
    target
  }) => {
    const [h, setH] = React.useState(false);
    return /*#__PURE__*/React.createElement("a", {
      href: href,
      target: target,
      rel: target ? "noreferrer" : undefined,
      onClick: label && onNavigate ? e => {
        e.preventDefault();
        onNavigate(label);
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
    href: "#"
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
  }, socials.map(s => /*#__PURE__*/React.createElement(Social, {
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
    label: "The Cleo Difference"
  }, "The Cleo Difference"), /*#__PURE__*/React.createElement(A, {
    label: "Inclusive care"
  }, "Inclusive care"), /*#__PURE__*/React.createElement(A, {
    label: "New Here?"
  }, "Your first visit"), /*#__PURE__*/React.createElement(A, {
    label: "FAQs"
  }, "FAQs")), /*#__PURE__*/React.createElement("div", {
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
  }, "416-294-0452"), /*#__PURE__*/React.createElement(A, null, "YouTube interviews"), /*#__PURE__*/React.createElement(A, null, "Google reviews"))), /*#__PURE__*/React.createElement("div", {
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
const NAV = ["About", "Treatments", "Concerns", "Before & After", "The Cleo Difference", "New Here?", "FAQs"];
function useWidth() {
  const [w, setW] = React.useState(typeof window !== "undefined" ? window.innerWidth : 1440);
  React.useEffect(() => {
    const f = () => setW(window.innerWidth);
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
    href: "#",
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
    onClick: go(l)
  }))), !mobile && /*#__PURE__*/React.createElement("span", {
    onMouseEnter: hide
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "brand",
    size: "cta-sm",
    href: "#",
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
    href: "#",
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
    onClick: go(it.to || it.label, it),
    onHover: () => setImg(it.image || null)
  }))), c.all && /*#__PURE__*/React.createElement("a", {
    href: "#",
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
    href: "#",
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
  onClick,
  onHover
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: "#",
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
  onClick
}) {
  const [h, setH] = React.useState(false);
  const lit = h || expanded;
  return /*#__PURE__*/React.createElement("a", {
    href: "#",
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

// ui_kits/website/ConcernDetail.jsx
try { (() => {
function ConcernDetailV2({
  c,
  go
}) {
  const {
    Button,
    BookingCta,
    FaqList
  } = window.LuxuryBeautyByCleoRDesignSystem_8fa9a4;
  const D = window.LB_DATA,
    X = window.LB_CX[c.name];
  if (!X) return null;
  const cap = {
    fontSize: 9,
    fontWeight: 600,
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "var(--brand-green)"
  };
  const crumb = {
    fontSize: 9,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: "inherit",
    textDecoration: "none"
  };
  const tr = s => D.treatments.find(x => x.slug === s);
  const others = D.concerns.filter(x => x.name !== c.name && x.name !== "Lips" && window.LB_CX[x.name]);
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))",
      background: "var(--surface-soft)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "64px max(6vw,32px) 72px",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Breadcrumb",
    style: {
      display: "flex",
      gap: 10,
      marginBottom: 56,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: crumb,
    onClick: () => go("Home")
  }, "Home"), /*#__PURE__*/React.createElement("span", {
    style: crumb
  }, "/"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: crumb,
    onClick: () => go("Concerns")
  }, "Concerns"), /*#__PURE__*/React.createElement("span", {
    style: crumb
  }, "/"), /*#__PURE__*/React.createElement("span", {
    style: {
      ...crumb,
      opacity: .6
    }
  }, c.name)), /*#__PURE__*/React.createElement("p", {
    style: {
      ...cap,
      color: "var(--foreground)",
      marginBottom: 20
    }
  }, "Concern \xB7 Oakville, ON"), /*#__PURE__*/React.createElement("h1", {
    style: H("clamp(50px,6vw,94px)", {
      marginBottom: 22,
      maxWidth: 820
    })
  }, X.h1), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "clamp(26px,2.6vw,36px)",
      lineHeight: 1.2,
      marginBottom: 22,
      maxWidth: 640
    }
  }, X.line), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 580,
      marginBottom: 28
    }
  }, X.first), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 14,
      marginBottom: 30
    }
  }, /*#__PURE__*/React.createElement(Button, {
    arrow: true,
    onClick: () => go("Book a consultation")
  }, "Book a free consultation"), /*#__PURE__*/React.createElement(Button, {
    variant: "brandOutline",
    href: "tel:+14162940452"
  }, "Call 416-294-0452")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "auto",
      fontSize: 11,
      color: "var(--brand-muted)"
    }
  }, "Medically reviewed by Cleo R., NP \xB7 Updated November 2026")), /*#__PURE__*/React.createElement(Img, {
    src: LB_IMG + X.img,
    style: {
      minHeight: 580
    }
  })), /*#__PURE__*/React.createElement("section", {
    style: SP
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,380px),1fr))",
      gap: "3vw 9vw",
      alignItems: "end",
      marginBottom: 56
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: H("clamp(48px,5.4vw,78px)")
  }, "Why it happens"), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 480
    }
  }, "Knowing the cause helps Cleo choose the right option. Most people have more than one of these at once.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,260px),1fr))",
      borderTop: "1px solid var(--border)",
      borderLeft: "1px solid var(--border)"
    }
  }, X.causes.map(([t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      borderRight: "1px solid var(--border)",
      borderBottom: "1px solid var(--border)",
      padding: "30px 26px",
      minHeight: 220,
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 40,
      lineHeight: 1,
      color: "var(--brand-accent)"
    }
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("h3", {
    style: H(28, {
      marginTop: "auto"
    })
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14
    }
  }, d))))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...SP,
      background: "var(--clinical)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: H("clamp(48px,5.4vw,78px)", {
      marginBottom: 20
    })
  }, "Your treatment options"), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 560,
      marginBottom: 52
    }
  }, "Each option works differently. Many clients combine two over a few visits."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))",
      gap: 24
    }
  }, X.options.map(([n, d, best, slug]) => {
    const t = slug && tr(slug);
    return /*#__PURE__*/React.createElement("article", {
      key: n,
      style: {
        background: "var(--background)",
        display: "flex",
        flexDirection: "column"
      }
    }, t && /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        aspectRatio: "16 / 9",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: t.image,
      alt: n + " in Oakville",
      style: {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "28px 28px 30px",
        display: "flex",
        flexDirection: "column",
        gap: 14,
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: H(32)
    }, n), /*#__PURE__*/React.createElement("p", null, d), /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: "1px solid var(--border)",
        paddingTop: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        ...cap,
        display: "block",
        marginBottom: 6
      }
    }, "Best for"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14
      }
    }, best)), t && /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        go("treatment", t);
      },
      style: {
        marginTop: "auto",
        fontSize: 10,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: "inherit",
        width: "fit-content",
        borderBottom: "1px solid var(--foreground)",
        paddingBottom: 3,
        textDecoration: "none"
      }
    }, t.seoHeading, " ", /*#__PURE__*/React.createElement("span", {
      "aria-hidden": true
    }, "\u2197"))));
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...SP,
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))",
      gap: "4vw 9vw"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: H("clamp(46px,5vw,72px)", {
      marginBottom: 24
    })
  }, "Which option suits you?"), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 400
    }
  }, "A quick guide. Cleo confirms the right plan at your free consultation.")), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--foreground)"
    }
  }, X.guide.map(([a, b]) => /*#__PURE__*/React.createElement("div", {
    key: a,
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,220px),1fr))",
      gap: "6px 28px",
      padding: "20px 0",
      borderBottom: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      ...cap,
      color: "var(--brand-muted)",
      display: "block",
      marginBottom: 4
    }
  }, "If"), a), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 22,
      lineHeight: 1.2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...cap,
      display: "block",
      marginBottom: 6,
      fontFamily: "var(--font-body)"
    }
  }, "Cleo may suggest"), b))))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...SP,
      background: "var(--surface)",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))",
      gap: "4vw 9vw"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: H("clamp(44px,4.8vw,68px)", {
      marginBottom: 28
    })
  }, "What to expect"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      borderTop: "1px solid var(--rule-strong)"
    }
  }, X.expect.map(e => /*#__PURE__*/React.createElement("li", {
    key: e,
    style: {
      padding: "16px 0",
      borderBottom: "1px solid var(--rule-strong)"
    }
  }, e)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: H("clamp(44px,4.8vw,68px)", {
      marginBottom: 28
    })
  }, "Care at home"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      borderTop: "1px solid var(--rule-strong)"
    }
  }, X.care.map(e => /*#__PURE__*/React.createElement("li", {
    key: e,
    style: {
      display: "grid",
      gridTemplateColumns: "24px 1fr",
      gap: 8,
      padding: "16px 0",
      borderBottom: "1px solid var(--rule-strong)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      color: "var(--brand-green)"
    }
  }, "\u2713"), e))))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...SP,
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))",
      gap: "4vw 9vw"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: H("clamp(46px,5vw,72px)", {
      marginBottom: 24
    })
  }, "Questions about ", c.name.toLowerCase()), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: () => go("FAQs"),
    style: {
      fontSize: 10,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "inherit"
    }
  }, "All FAQs \u2197")), /*#__PURE__*/React.createElement(FaqList, {
    faqs: X.faqs
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      ...SP,
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      ...cap,
      marginBottom: 18
    }
  }, "Other concerns"), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border)"
    }
  }, others.map(o => /*#__PURE__*/React.createElement("a", {
    key: o.name,
    href: "#",
    onClick: e => {
      e.preventDefault();
      go("concern", o);
    },
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 20,
      padding: "22px 4px",
      borderBottom: "1px solid var(--border)",
      color: "inherit",
      textDecoration: "none",
      fontFamily: "var(--font-display)",
      fontSize: "clamp(24px,2.6vw,34px)"
    }
  }, window.LB_CX[o.name].h1, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      fontSize: 16
    }
  }, "\u2197"))))), /*#__PURE__*/React.createElement(BookingCta, {
    image: LB_IMG + "cleo-book-now.webp",
    onClick: e => {
      e.preventDefault();
      go("Book a consultation");
    }
  }));
}
Object.assign(window, {
  ConcernDetailV2
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ConcernDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Home({
  go
}) {
  const {
    Button,
    TextLink,
    SectionHeading,
    TreatmentCard,
    ConcernList,
    FaqList,
    ReviewCard,
    BookingCta
  } = window.LuxuryBeautyByCleoRDesignSystem_8fa9a4;
  const D = window.LB_DATA;
  return /*#__PURE__*/React.createElement("main", {
    style: {
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      display: "grid",
      gridTemplateColumns: "52% 48%",
      minHeight: "calc(100vh - 88px)",
      background: "var(--surface)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "8vw 6vw 5vw 7vw"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "0 0 26px",
      fontFamily: "var(--font-body)",
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: "var(--brand-green)"
    }
  }, "NP-Led Medical Spa in Oakville"), /*#__PURE__*/React.createElement("p", {
    style: H("clamp(64px,7.2vw,112px)", {
      maxWidth: 750
    })
  }, "Where medical precision meets the art of beauty."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "36px 0",
      maxWidth: 560,
      fontSize: 16
    }
  }, "Luxury Beauty is a Nurse Practitioner\u2013led medical spa in Oakville for Botox, dermal fillers and skin treatments. It\u2019s founded by Cleo R., a Board-Certified Nurse Practitioner who assesses your features, skin and goals before recommending anything."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      gap: 34
    }
  }, /*#__PURE__*/React.createElement(Button, {
    arrow: true,
    onClick: () => go("Book a consultation")
  }, "Book a consultation"), /*#__PURE__*/React.createElement(Button, {
    variant: "brandOutline",
    href: "tel:+14162940452"
  }, "Call 416-294-0452")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      paddingTop: 60,
      display: "flex",
      gap: 25,
      fontSize: 9,
      letterSpacing: "0.14em",
      textTransform: "uppercase"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Nurse Practitioner"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--brand-green)"
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, "Free consultations"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--brand-green)"
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, "Fridays 10 AM\u20138 PM"))), /*#__PURE__*/React.createElement(Img, {
    src: LB_IMG + "cleo-hero-blazer.webp",
    style: {
      minHeight: 760
    }
  })), /*#__PURE__*/React.createElement(CredentialStrip, null), /*#__PURE__*/React.createElement("section", {
    style: SP
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.15fr 0.85fr",
      gap: "10vw"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: H("clamp(64px,8vw,118px)", {
      maxWidth: 800
    })
  }, "Beauty should still feel like you."), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 24,
      display: "grid",
      gap: 26
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 20,
      lineHeight: 1.5
    }
  }, "Science meets artistry at Luxury Beauty by Cleo R."), /*#__PURE__*/React.createElement("p", null, "Every face is different. Every body is different. Every person brings their own story. That\u2019s why treatment begins with listening, assessment, and understanding."), /*#__PURE__*/React.createElement("p", {
    style: {
      borderTop: "1px solid var(--border)",
      paddingTop: 24,
      fontFamily: "var(--font-display)",
      fontSize: 26,
      lineHeight: 1.2
    }
  }, "Enhancement, not alteration. Precision, not excess. Care, not compromise.")))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...SP,
      background: "var(--surface)"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Curated care,", /*#__PURE__*/React.createElement("br", null), "designed around you.")
  }, "Selected to refresh your appearance, support your wellness goals, and enhance what already makes you uniquely you."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,340px),1fr))",
      borderTop: "1px solid var(--border)",
      borderLeft: "1px solid var(--border)",
      marginBottom: 40
    }
  }, D.treatments.map(t => /*#__PURE__*/React.createElement(TreatmentCard, _extends({
    key: t.slug
  }, t, {
    onClick: e => {
      e.preventDefault();
      go("treatment", t);
    }
  })))), /*#__PURE__*/React.createElement(Button, {
    variant: "brandOutline",
    arrow: true,
    onClick: () => go("Treatments")
  }, "View all treatments")), /*#__PURE__*/React.createElement("section", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      minHeight: 850,
      background: "var(--clinical)"
    }
  }, /*#__PURE__*/React.createElement(Img, {
    src: LB_IMG + "cleo-white-coat-seated.webp"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "center",
      padding: "8vw"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: H("clamp(62px,6.8vw,100px)", {
      marginBottom: 38
    })
  }, "I don\u2019t just inject.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: "normal",
      color: "var(--brand-green)"
    }
  }, "I assess.")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: 22,
      maxWidth: 550
    }
  }, "Cleo considers the bigger picture \u2014 your medical history, facial anatomy, muscle movement, skin health, individual goals, and the way everything works together."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: 22,
      maxWidth: 550
    }
  }, "Because beautiful results begin with thoughtful assessment."), /*#__PURE__*/React.createElement(Button, {
    arrow: true,
    style: {
      marginTop: 26
    },
    onClick: () => go("The Cleo Difference")
  }, "Discover the difference"))), /*#__PURE__*/React.createElement("section", {
    style: SP
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Safe, honest care.", /*#__PURE__*/React.createElement("br", null), "Every visit.")
  }, "Aesthetic care should never feel like pressure. Here\u2019s what happens behind every treatment, so you know what to expect."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,230px),1fr))",
      borderTop: "1px solid var(--border)",
      borderLeft: "1px solid var(--border)"
    }
  }, [["Health screening", "Cleo reviews your medical history, medications and allergies before any treatment."], ["Informed consent", "You’ll know the plan, the risks and the aftercare, and sign consent before anything starts."], ["Sterile, single-use supplies", "Every needle and cannula is new, sealed and used once."], ["A plan for the unexpected", "Cleo keeps what she needs to manage a reaction or reverse filler on site."], ["Honest advice", "If a treatment isn’t right for you, she’ll tell you. Sometimes the answer is “not today.”"]].map(([t, x], i) => /*#__PURE__*/React.createElement("article", {
    key: t,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14,
      minHeight: 290,
      padding: "30px 28px 32px",
      borderRight: "1px solid var(--border)",
      borderBottom: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 40,
      lineHeight: 1,
      color: "var(--brand-green)"
    }
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("h3", {
    style: H(30, {
      marginTop: "auto"
    })
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14
    }
  }, x)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36,
      display: "flex",
      flexWrap: "wrap",
      gap: "12px 32px",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(TextLink, {
    onClick: () => go("New Here?")
  }, "How your first visit works"), /*#__PURE__*/React.createElement(TextLink, {
    onClick: () => go("The Cleo Difference")
  }, "The Cleo Difference"))), /*#__PURE__*/React.createElement("section", {
    style: SP
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    style: {
      marginBottom: 30
    },
    titleSize: "clamp(54px,7vw,94px)",
    title: "Start with what you\u2019d like to improve."
  }, "You don\u2019t need to know the name of a treatment before you begin. Tell us what you\u2019d like to address."), /*#__PURE__*/React.createElement(ConcernList, {
    concerns: D.concerns,
    onSelect: c => go("concern", c)
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      ...SP,
      display: "grid",
      gridTemplateColumns: "0.8fr 1.2fr",
      gap: "9vw",
      background: "var(--brand-accent)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: 30,
      alignSelf: "start"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: H("clamp(58px,6.7vw,92px)", {
      marginBottom: 30
    })
  }, "Your first step starts with a conversation."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: 35,
      maxWidth: 500
    }
  }, "You don\u2019t need to know exactly what treatment you need. That\u2019s what the consultation is for."), /*#__PURE__*/React.createElement(Button, {
    arrow: true,
    onClick: () => go("New Here?")
  }, "See your first visit")), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--rule-strong)"
    }
  }, [["Let’s talk", "Tell Cleo what you’d like to improve and what matters most to you."], ["Let’s assess", "Your history, anatomy, skin, and individual needs all inform the conversation."], ["Let’s create a plan", "Together, you’ll decide whether treatment is appropriate and what aligns with your goals."], ["Let’s refine", "Follow-up and guidance keep your care intentional and personalized."]].map(([t, x]) => /*#__PURE__*/React.createElement("article", {
    key: t,
    style: {
      borderBottom: "1px solid var(--rule-strong)",
      padding: "34px 0"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: H(40, {
      marginBottom: 15
    })
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 480
    }
  }, x))))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...SP,
      display: "grid",
      gridTemplateColumns: "0.65fr 1.35fr",
      gap: "9vw"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: H("clamp(58px,7vw,92px)", {
      marginBottom: 35
    })
  }, "Questions,", /*#__PURE__*/React.createElement("br", null), "answered."), /*#__PURE__*/React.createElement(TextLink, {
    onClick: () => go("FAQs")
  }, "View all FAQs")), /*#__PURE__*/React.createElement(FaqList, {
    faqs: D.faqs
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      ...SP,
      background: "var(--surface)"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Kind words,", /*#__PURE__*/React.createElement("br", null), "shared honestly.")
  }, "A few words from clients who trusted Cleo with their care, comfort, and results."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 1,
      background: "var(--border)"
    }
  }, D.reviews.map(r => /*#__PURE__*/React.createElement(ReviewCard, _extends({
    key: r.name
  }, r))))), /*#__PURE__*/React.createElement("section", {
    id: "visit",
    style: {
      ...SP,
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,380px),1fr))",
      gap: "6vw",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: H("clamp(58px,7vw,92px)", {
      marginBottom: 30
    })
  }, "Visit us", /*#__PURE__*/React.createElement("br", null), "in Oakville."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: 12,
      maxWidth: 440
    }
  }, "Find Luxury Beauty by Cleo R. at 3060 Preserve Dr, Oakville, ON L6M 4L9, Canada."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: 35
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "tel:+14162940452",
    style: {
      color: "inherit"
    }
  }, "416-294-0452")), /*#__PURE__*/React.createElement(TextLink, {
    href: "https://maps.app.goo.gl/8nuEqr8YRCzXv4A5A",
    target: "_blank",
    rel: "noreferrer"
  }, "Get directions")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: "4 / 3",
      overflow: "hidden",
      border: "1px solid var(--border)",
      background: "var(--surface)"
    }
  }, /*#__PURE__*/React.createElement("iframe", {
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.536621236177!2d-79.73647509999999!3d43.47558569999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b5d02bab7dd91%3A0xd1e4c7aa4bbefca2!2sLuxury%20Beauty%20By%20Cleo%20R!5e0!3m2!1sen!2sca!4v1789959453969!5m2!1sen!2sca",
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
  }))), /*#__PURE__*/React.createElement(BookingCta, {
    image: LB_IMG + "cleo-book-now.webp",
    onClick: e => {
      e.preventDefault();
      go("Book a consultation");
    }
  }));
}
window.Home = Home;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeSeo.jsx
try { (() => {
const capsLb = {
  fontSize: 9,
  fontWeight: 600,
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "var(--brand-green)"
};
const blank = {
  color: "var(--brand-muted)",
  borderBottom: "1px dashed var(--brand-muted)"
};
function CredentialStrip() {
  const items = [["Experience", "RN since 2013 · NP since 2022"], ["Every visit", "Assessed by a Nurse Practitioner before treatment"], ["Products", "Health Canada-approved only"], ["Google reviews", /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--brand-green)",
      letterSpacing: "0.1em"
    },
    "aria-hidden": true
  }, "\u2605\u2605\u2605\u2605\u2605"), " 5.0 on Google"), "Read reviews", "https://maps.google.com/?cid=15124432982846143650"]];
  return /*#__PURE__*/React.createElement("section", {
    "aria-label": "Credentials",
    style: {
      borderBottom: "1px solid var(--border)",
      background: "var(--background)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 max(6vw,32px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,220px),1fr))",
      borderLeft: "1px solid var(--border)"
    }
  }, items.map(([l, v, a, href]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "30px 26px 28px",
      background: "var(--background)",
      borderRight: "1px solid var(--border)",
      borderTop: "1px solid var(--border)",
      marginTop: -1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: capsLb
  }, l), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 21,
      lineHeight: 1.2,
      textWrap: "pretty"
    }
  }, v), a && /*#__PURE__*/React.createElement("a", {
    href: href || "#",
    target: href ? "_blank" : undefined,
    rel: "noreferrer",
    style: {
      marginTop: "auto",
      fontSize: 9,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "inherit",
      textDecoration: "none"
    }
  }, a, " ", /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true
  }, "\u2197")))))));
}
function ProductsSection() {
  const {
    SectionHeading
  } = window.LuxuryBeautyByCleoRDesignSystem_8fa9a4;
  const cats = [["Neuromodulators", "Forehead, frown lines, crow’s feet"], ["Hyaluronic acid fillers", "Lips, cheeks, chin, jawline"], ["Fat dissolving", "Double chin and small areas"], ["Skin boosters", "Hydration and skin quality"], ["IV therapy", "Hydration and nutrient blends"]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...SP,
      background: "var(--surface-warm)"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "The products", /*#__PURE__*/React.createElement("br", null), "we trust.")
  }, "Cleo uses only Health Canada-approved injectables and skin products from licensed medical suppliers. At your consultation she\u2019ll tell you exactly what she recommends and why."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,210px),1fr))",
      borderTop: "1px solid var(--border)",
      borderLeft: "1px solid var(--border)"
    }
  }, cats.map(([c, d]) => /*#__PURE__*/React.createElement("div", {
    key: c,
    style: {
      background: "var(--background)",
      borderRight: "1px solid var(--border)",
      borderBottom: "1px solid var(--border)",
      padding: "28px 26px 30px",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      minHeight: 230
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: capsLb
  }, c), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--brand-muted)"
    }
  }, d), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      paddingTop: 22,
      borderTop: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 24,
      ...blank,
      width: "fit-content",
      borderBottom: "none"
    }
  }, "Brand name"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 24,
      color: "var(--brand-muted)"
    }
  }, "Brand name"))))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 22,
      fontSize: 12,
      color: "var(--brand-muted)",
      maxWidth: 720
    }
  }, "Prescription product names are listed for information only. Cleo confirms the product, quantity and price at your consultation."));
}
function InsuranceSection({
  go
}) {
  const {
    TextLink
  } = window.LuxuryBeautyByCleoRDesignSystem_8fa9a4;
  const slots = Array.from({
    length: 8
  }, (_, i) => "insurer logo " + (i + 1));
  const tile = (l, k, hide) => /*#__PURE__*/React.createElement("div", {
    key: k,
    "aria-hidden": hide || undefined,
    style: {
      flex: "0 0 auto",
      width: 200,
      height: 96,
      display: "grid",
      placeItems: "center",
      border: "1px solid var(--border)",
      background: "repeating-linear-gradient(135deg,var(--background) 0 8px,var(--surface) 8px 9px)",
      fontFamily: "ui-monospace,Menlo,monospace",
      fontSize: 10,
      letterSpacing: "0.06em",
      color: "var(--brand-muted)"
    }
  }, l);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "110px 0",
      background: "var(--background)",
      borderTop: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("style", null, "@keyframes lbMarquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}.lb-marquee:hover .lb-track{animation-play-state:paused}@media (prefers-reduced-motion:reduce){.lb-track{animation:none!important}}"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 max(6vw,32px)",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,380px),1fr))",
      gap: "4vw 8vw",
      alignItems: "end",
      marginBottom: 56
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: H("clamp(50px,6vw,84px)", {
      maxWidth: 640
    })
  }, "Using your health benefits."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 16,
      maxWidth: 520
    }
  }, /*#__PURE__*/React.createElement("p", null, "Many workplace plans cover Nurse Practitioner services. Cleo gives you a detailed receipt with her registration number so you can submit a claim to your provider."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: "var(--brand-muted)"
    }
  }, "OHIP doesn\u2019t cover cosmetic treatments. Coverage depends on your plan, so check with your insurer before booking."), /*#__PURE__*/React.createElement(TextLink, {
    onClick: () => go("FAQs")
  }, "Insurance questions"))), /*#__PURE__*/React.createElement("div", {
    className: "lb-marquee",
    style: {
      overflow: "hidden",
      maskImage: "linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)",
      WebkitMaskImage: "linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "lb-track",
    style: {
      display: "flex",
      gap: 20,
      width: "max-content",
      animation: "lbMarquee 36s linear infinite"
    }
  }, slots.map((l, i) => tile(l, "a" + i)), slots.map((l, i) => tile(l, "b" + i, true)))));
}
Object.assign(window, {
  CredentialStrip,
  ProductsSection,
  InsuranceSection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeSeo.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/MorePages.jsx
try { (() => {
const LBNS = window.LuxuryBeautyByCleoRDesignSystem_8fa9a4;
const Cta = ({
  go
}) => /*#__PURE__*/React.createElement(LBNS.BookingCta, {
  image: LB_IMG + "cleo-book-now.webp",
  onClick: e => {
    e.preventDefault();
    go("Book a consultation");
  }
});
function Crop({
  c,
  crop,
  label
}) {
  const x = crop.x / c.sw,
    y = crop.y / c.sh,
    w = crop.width / c.sw,
    hh = crop.height / c.sh;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 12px",
      textAlign: "center",
      fontFamily: "var(--font-display)",
      fontSize: "clamp(17px,2vw,24px)",
      letterSpacing: "0.12em",
      textTransform: "uppercase"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "#000",
      aspectRatio: crop.width + " / " + crop.height
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: LB_IMG + "before-after/" + c.src,
    alt: label,
    style: {
      position: "absolute",
      objectFit: "fill",
      width: 100 / w + "%",
      height: 100 / hh + "%",
      left: -x / w * 100 + "%",
      top: -y / hh * 100 + "%",
      maxWidth: "none"
    }
  })));
}
function BeforeAfter({
  go
}) {
  const D = window.LB_DATA;
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: "#000",
      color: "#fff",
      padding: "145px max(6vw,32px) 105px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: 24,
      fontSize: 9,
      fontWeight: 600,
      letterSpacing: "0.2em",
      textTransform: "uppercase"
    }
  }, "Real client results"), /*#__PURE__*/React.createElement("h1", {
    style: H("clamp(72px,10vw,142px)", {
      maxWidth: 1180
    })
  }, "Before", /*#__PURE__*/React.createElement("br", null), "& after."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 36,
      maxWidth: 690,
      fontSize: 18,
      color: "rgb(255 255 255/.7)"
    }
  }, "Thoughtful, personalized care designed to enhance\u2014not change\u2014the features that make you uniquely you.")), /*#__PURE__*/React.createElement("section", {
    style: {
      ...SP,
      paddingTop: 0,
      background: "#000",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      columns: 2,
      columnGap: "clamp(22px,3vw,48px)"
    }
  }, D.comparisons.map(c => /*#__PURE__*/React.createElement("article", {
    key: c.src,
    style: {
      marginBottom: "clamp(22px,3vw,48px)",
      display: "inline-block",
      width: "100%",
      breakInside: "avoid",
      overflow: "hidden",
      border: "1px solid rgb(255 255 255/.2)",
      background: "#050505",
      padding: "clamp(14px,2vw,24px)",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20,
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 56,
      height: 56,
      overflow: "hidden",
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "/assets/logo-icon.png",
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "contain",
      transform: "scale(1.8)",
      filter: "brightness(0) invert(1)"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Crop, {
    c: c,
    crop: c.before,
    label: "Before"
  }), /*#__PURE__*/React.createElement(Crop, {
    c: c,
    crop: c.after,
    label: "After"
  }))))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "64px auto 0",
      maxWidth: 760,
      borderTop: "1px solid rgb(255 255 255/.2)",
      paddingTop: 28,
      textAlign: "center",
      fontSize: 12,
      lineHeight: 1.625,
      color: "rgb(255 255 255/.55)"
    }
  }, "Individual results vary. Every treatment begins with a personal consultation to assess your goals, health history, anatomy, and suitability for care.")), /*#__PURE__*/React.createElement(Cta, {
    go: go
  }));
}
function Difference({
  go
}) {
  const pillars = [["Clinical expertise", "Cleo’s foundation began in nursing and advanced into Nurse Practitioner practice. That clinical background shapes how she assesses, treats, monitors care, and thinks about safety."], ["Artistic eye", "Aesthetic care is also about balance, proportion, movement, and understanding how individual features work together."], ["Natural results", "The goal is for you to look refreshed, confident, and like yourself — enhancement rather than alteration."], ["Honest recommendations", "If a treatment isn’t appropriate, Cleo will say so. Sometimes the best treatment is no treatment at all."], ["Genuine connection", "Cleo listens to people’s stories and believes the relationship between practitioner and client is part of the experience itself."]];
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(LBNS.PageHero, {
    title: "More than aesthetics. A relationship built on trust.",
    intro: "What makes Luxury Beauty by Cleo R. different isn\u2019t simply what happens during a treatment. It\u2019s the approach behind it."
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      ...SP,
      display: "grid",
      minHeight: 650,
      gridTemplateColumns: "1.2fr 0.8fr",
      alignItems: "center",
      gap: "8vw"
    }
  }, /*#__PURE__*/React.createElement(Img, {
    src: LB_IMG + "cleo-white-coat-arms-crossed.jpg",
    style: {
      height: 650
    }
  }), /*#__PURE__*/React.createElement("blockquote", {
    style: H("clamp(46px,5vw,70px)", {
      color: "var(--brand-green)"
    })
  }, "\u201CI don\u2019t just inject.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", null, "I assess."), "\u201D", /*#__PURE__*/React.createElement("small", {
    style: {
      display: "block",
      marginTop: 25,
      fontFamily: "var(--font-body)",
      fontSize: 9,
      letterSpacing: "0.15em",
      textTransform: "uppercase"
    }
  }, "\u2014 Cleo R."))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...SP,
      paddingTop: 20
    }
  }, pillars.map(([t, x]) => /*#__PURE__*/React.createElement("article", {
    key: t,
    style: {
      display: "grid",
      gridTemplateColumns: "0.7fr 1fr",
      gap: "3vw",
      borderBottom: "1px solid var(--border)",
      padding: "50px 0"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: H(48)
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 650
    }
  }, x)))), /*#__PURE__*/React.createElement(Cta, {
    go: go
  }));
}
function Visit({
  go
}) {
  const steps = [["Connect", "Call the practice or send a message on Instagram to begin your journey."], ["Consult", "We’ll learn about your goals, concerns, medical history, and what you’re hoping to achieve."], ["Assess", "Cleo evaluates the bigger picture — including your anatomy, skin, individual needs, and treatment suitability."], ["Plan", "If treatment is appropriate, you’ll receive a personalized plan based on your goals."], ["Treat", "Your treatment is performed with clinical precision and an artistic approach."], ["Follow up", "Your care continues beyond the treatment room, with follow-up and guidance as appropriate."]];
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(LBNS.PageHero, {
    title: "Your first step starts with a conversation.",
    intro: "You don\u2019t need to know exactly what you need. You only need to tell us what you hope to feel or see differently."
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      ...SP,
      margin: "0 auto",
      maxWidth: 1050,
      boxSizing: "content-box"
    }
  }, steps.map(([t, x]) => /*#__PURE__*/React.createElement("article", {
    key: t,
    style: {
      position: "relative",
      minHeight: 230,
      borderLeft: "1px solid var(--brand-green)",
      padding: "34px 0 34px 48px",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 54,
      left: -7,
      width: 13,
      height: 13,
      borderRadius: "50%",
      border: "1px solid var(--brand-green)",
      background: "var(--background)",
      boxSizing: "border-box"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 58,
      left: -3,
      width: 5,
      height: 5,
      borderRadius: "50%",
      background: "var(--brand-green)"
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: H(50, {
      marginBottom: 16
    })
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 620
    }
  }, x)))), /*#__PURE__*/React.createElement("aside", {
    style: {
      background: "var(--brand-accent)",
      padding: "110px max(12vw,60px)",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: H("clamp(60px,8vw,100px)", {
      margin: "0 auto",
      maxWidth: 1000
    })
  }, "You will be heard before you are treated.")), /*#__PURE__*/React.createElement(Cta, {
    go: go
  }));
}
function Faq({
  go
}) {
  const D = window.LB_DATA;
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(LBNS.PageHero, {
    title: "Questions, answered.",
    intro: "A little clarity can make the first step feel easier. If your question isn\u2019t here, start a conversation with Cleo."
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      ...SP,
      display: "grid",
      gridTemplateColumns: "0.65fr 1.35fr",
      gap: "9vw"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      height: "fit-content",
      justifyContent: "space-between",
      gap: 30,
      borderTop: "1px solid var(--border)",
      paddingTop: 10,
      fontSize: 9,
      letterSpacing: "0.15em",
      textTransform: "uppercase"
    }
  }, /*#__PURE__*/React.createElement("p", null, "General FAQ"), /*#__PURE__*/React.createElement("span", null, "01 \u2014 0", D.faqs.length)), /*#__PURE__*/React.createElement(LBNS.FaqList, {
    faqs: D.faqs
  })), /*#__PURE__*/React.createElement(Cta, {
    go: go
  }));
}
function Inclusive({
  go
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(LBNS.PageHero, {
    tone: "blush",
    title: "Beautifully individual.",
    intro: "Your individuality isn\u2019t something to work around. It\u2019s where the treatment begins."
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      ...SP,
      display: "grid",
      gridTemplateColumns: "0.8fr 1.2fr",
      alignItems: "center",
      gap: "8vw"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: H("clamp(48px,5vw,72px)", {
      marginBottom: 10
    })
  }, "There is no universal template for beauty."), /*#__PURE__*/React.createElement("p", null, "As a Black woman and woman of color, Cleo understands the importance of representation and individualized care in aesthetics."), /*#__PURE__*/React.createElement("p", null, "People have different skin tones, facial structures, features, and aesthetic goals. Luxury Beauty by Cleo R. is committed to creating an environment where people of all backgrounds feel welcomed, understood, respected, and represented."), /*#__PURE__*/React.createElement("p", null, "Particular attention is given to understanding the needs and nuances that can come with melanin-rich skin and diverse facial structures.")), /*#__PURE__*/React.createElement(Img, {
    src: LB_IMG + "cleo-sofa-tablet.jpg",
    style: {
      minHeight: 700
    }
  })), /*#__PURE__*/React.createElement(Cta, {
    go: go
  }));
}
function Policies() {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(LBNS.PageHero, {
    title: "Policies should feel clear, too.",
    intro: "Full appointment and treatment policies will be published here before booking opens."
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      ...SP,
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 1,
      background: "var(--border)"
    }
  }, ["Appointments & consultations", "Cancellations & rescheduling", "Deposits & payments", "Treatment eligibility", "Late arrivals & no-shows", "Aftercare & follow-up"].map(i => /*#__PURE__*/React.createElement("article", {
    key: i,
    style: {
      display: "flex",
      minHeight: 260,
      flexDirection: "column",
      justifyContent: "flex-end",
      background: "var(--surface-warm)",
      padding: 35
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: H(37, {
      marginBottom: 10
    })
  }, i), /*#__PURE__*/React.createElement("p", null, "Details to be confirmed by Cleo before launch.")))));
}
function Privacy() {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(LBNS.PageHero, {
    title: "Privacy notice."
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      ...SP,
      margin: "0 auto",
      maxWidth: 950,
      boxSizing: "content-box"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 20,
      lineHeight: 1.5
    }
  }, "This website is currently an informational experience and does not collect personal information through forms, accounts, analytics, or online payments."), /*#__PURE__*/React.createElement("h2", {
    style: H(45, {
      margin: "60px 0 20px"
    })
  }, "Contacting the clinic"), /*#__PURE__*/React.createElement("p", null, "When contact channels are added, any information you choose to share directly with the clinic will be used to respond to your enquiry and support your care. A complete privacy notice will be published before those services go live."), /*#__PURE__*/React.createElement("h2", {
    style: H(45, {
      margin: "60px 0 20px"
    })
  }, "Clinical information"), /*#__PURE__*/React.createElement("p", null, "Please do not send urgent or sensitive clinical information through unconfirmed social channels. Contact and privacy details will be updated before launch."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 70,
      borderTop: "1px solid var(--border)",
      paddingTop: 20,
      fontSize: 9,
      letterSpacing: "0.12em",
      color: "var(--brand-green)",
      textTransform: "uppercase"
    }
  }, "Draft launch notice \xB7 September 2026")));
}
function ConcernDetail({
  c,
  go
}) {
  const t = window.LB_DATA.treatments.find(x => x.name === c.treatment);
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(LBNS.PageHero, {
    title: c.heading,
    intro: c.text
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      ...SP,
      margin: "0 auto",
      maxWidth: 980,
      textAlign: "center",
      boxSizing: "content-box"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: H("clamp(60px,8vw,100px)", {
      marginBottom: 26
    })
  }, c.treatment), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 auto 35px",
      maxWidth: 650
    }
  }, "A consultation is the right place to assess whether this approach fits your needs, health history, and goals."), /*#__PURE__*/React.createElement(LBNS.Button, {
    arrow: true,
    onClick: () => go("treatment", t)
  }, "Explore treatment")), /*#__PURE__*/React.createElement(Cta, {
    go: go
  }));
}
function ThankYou({
  go
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(LBNS.PageHero, {
    tone: "blush",
    title: "Thank you.",
    intro: "Your consultation request has been received. Cleo will be in touch shortly to arrange a time that suits you."
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      ...SP,
      paddingTop: 0,
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(LBNS.Button, {
    onClick: e => {
      e.preventDefault();
      go("Home");
    }
  }, "Back to home")));
}
function NotFound({
  go
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(LBNS.PageHero, {
    title: "Page not found.",
    intro: "The page you\u2019re looking for may have moved. Explore our treatments or return home."
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      ...SP,
      paddingTop: 0,
      display: "flex",
      justifyContent: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(LBNS.Button, {
    onClick: e => {
      e.preventDefault();
      go("Home");
    }
  }, "Back to home"), /*#__PURE__*/React.createElement(LBNS.Button, {
    variant: "brandOutline",
    onClick: e => {
      e.preventDefault();
      go("Treatments");
    }
  }, "View treatments")));
}
Object.assign(window, {
  ThankYou,
  NotFound,
  BeforeAfter,
  Difference,
  Visit,
  Faq,
  Inclusive,
  Policies,
  Privacy,
  ConcernDetail
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/MorePages.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Pages.jsx
try { (() => {
function Concerns({
  go
}) {
  const {
    PageHero,
    BookingCta
  } = window.LuxuryBeautyByCleoRDesignSystem_8fa9a4;
  const D = window.LB_DATA;
  const CIMG = {
    "Fine Lines & Wrinkles": "treatment-botox.webp",
    "Facial Volume & Definition": "treatment-fillers.webp",
    "Lips": "consultation.webp",
    "Skin Hydration & Radiance": "treatment-skin-boosters.webp",
    "Wellness & Weight Management": "treatment-weight-loss.webp"
  };
  const Tile = ({
    c
  }) => {
    const [h, setH] = React.useState(false);
    return /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        go("concern", c);
      },
      onMouseEnter: () => setH(true),
      onMouseLeave: () => setH(false),
      style: {
        display: "flex",
        flexDirection: "column",
        color: "inherit",
        textDecoration: "none",
        background: h ? "var(--surface)" : "var(--background)",
        borderRight: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        transition: "background 150ms"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        aspectRatio: "16 / 10",
        overflow: "hidden",
        background: "var(--surface-warm)"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: LB_IMG + (CIMG[c.name] || "consultation.webp"),
      alt: c.name + " treatment in Oakville",
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
        flex: 1,
        padding: "34px 40px 38px"
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: H(48, {
        marginBottom: 20
      })
    }, c.name), /*#__PURE__*/React.createElement("p", {
      style: {
        marginBottom: 25,
        maxWidth: 520
      }
    }, c.text), /*#__PURE__*/React.createElement("i", {
      style: {
        fontStyle: "normal",
        fontSize: 9,
        letterSpacing: "0.15em",
        textTransform: "uppercase"
      }
    }, "Explore \u2197")));
  };
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(PageHero, {
    tone: "blush",
    title: "Start with what you\u2019d like to improve.",
    intro: "You don\u2019t need to know the name of a treatment. Your consultation can help determine the approach that makes sense for you."
  }), /*#__PURE__*/React.createElement("section", {
    style: SP
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,380px),1fr))",
      borderTop: "1px solid var(--border)",
      borderLeft: "1px solid var(--border)"
    }
  }, D.concerns.map(c => /*#__PURE__*/React.createElement(Tile, {
    key: c.name,
    c: c
  })))), /*#__PURE__*/React.createElement(BookingCta, {
    image: LB_IMG + "cleo-book-now.webp",
    onClick: e => {
      e.preventDefault();
      go("Book a consultation");
    }
  }));
}
function About({
  go
}) {
  const {
    PageHero,
    BookingCta
  } = window.LuxuryBeautyByCleoRDesignSystem_8fa9a4;
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(PageHero, {
    title: "Meet Cleo R.",
    intro: "A journey rooted in passion, precision, and patient care."
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      ...SP,
      display: "grid",
      gridTemplateColumns: "0.85fr 1.15fr",
      alignItems: "center",
      gap: "10vw"
    }
  }, /*#__PURE__*/React.createElement(Img, {
    src: LB_IMG + "cleo-fireplace.webp",
    style: {
      minHeight: 790
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: H("clamp(52px,6vw,84px)", {
      marginBottom: 32
    })
  }, "It didn\u2019t begin in a spa.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", null, "It began in nursing.")), ["In 2013, Cleo started her career as a Registered Nurse, dedicating herself to patient care and developing a deep appreciation for the complexity of the human body.", "Over time, that clinical foundation grew into a broader fascination with how health, confidence, and appearance intersect.", "In 2022, she became a Nurse Practitioner — an advanced foundation from which to approach aesthetic medicine."].map(p => /*#__PURE__*/React.createElement("p", {
    key: p,
    style: {
      marginBottom: 22,
      maxWidth: 680
    }
  }, p)), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      marginTop: 55,
      borderLeft: "1px solid var(--brand-green)",
      paddingLeft: 30,
      fontSize: 32,
      color: "var(--brand-green)",
      fontFamily: "var(--font-display)",
      lineHeight: 0.98
    }
  }, "Medical knowledge, aesthetic artistry, thoughtful assessment, and human connection."))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...SP,
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "10vw",
      background: "var(--clinical)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: H("clamp(52px,6vw,82px)", {
      marginBottom: 30
    })
  }, "A NP first. An aesthetic practitioner with intention."), /*#__PURE__*/React.createElement("p", null, "Cleo\u2019s advanced clinical background influences every aspect of her approach. Her role is to assess, educate, guide, treat appropriately, and provide thoughtful care throughout the experience.")), /*#__PURE__*/React.createElement(RuledList, {
    items: ["Medical history", "Facial anatomy", "Muscle movement", "Skin health", "Individual goals", "Treatment suitability"]
  })), /*#__PURE__*/React.createElement(BookingCta, {
    image: LB_IMG + "cleo-book-now.webp",
    onClick: e => {
      e.preventDefault();
      go("Book a consultation");
    }
  }));
}
function Contact() {
  const {
    PageHero
  } = window.LuxuryBeautyByCleoRDesignSystem_8fa9a4;
  const Opt = ({
    t,
    x,
    l,
    href
  }) => {
    const [h, setH] = React.useState(false);
    return /*#__PURE__*/React.createElement("a", {
      href: href,
      target: "_blank",
      rel: "noreferrer",
      onMouseEnter: () => setH(true),
      onMouseLeave: () => setH(false),
      style: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        minHeight: 430,
        background: "var(--surface-warm)",
        padding: 38,
        opacity: h ? 0.8 : 1,
        transition: "opacity 150ms"
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: H(45, {
        marginBottom: 20
      })
    }, t), /*#__PURE__*/React.createElement("p", {
      style: {
        minHeight: 70
      }
    }, x), /*#__PURE__*/React.createElement("span", {
      style: {
        marginTop: 25,
        width: "fit-content",
        borderBottom: "1px solid var(--border)",
        padding: "13px 0",
        fontSize: 14,
        letterSpacing: "0.12em",
        color: "var(--brand-muted)",
        textTransform: "uppercase"
      }
    }, l));
  };
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(PageHero, {
    tone: "blush",
    title: "Let\u2019s start with a conversation.",
    intro: "Tell Cleo what you\u2019d like to improve, what you\u2019re hoping to achieve, and what matters most to you."
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      ...SP,
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 1,
      background: "var(--border)"
    }
  }, /*#__PURE__*/React.createElement(Opt, {
    t: "Call Cleo",
    x: "Speak directly with the practice to begin your consultation.",
    l: "416-294-0452 \u2197",
    href: "tel:+14162940452"
  }), /*#__PURE__*/React.createElement(Opt, {
    t: "Connect socially",
    x: "Follow the practice and send Cleo a direct message.",
    l: "@luxury_beauty_aestheticz \u2197",
    href: "https://www.instagram.com/luxury_beauty_aestheticz/"
  }), /*#__PURE__*/React.createElement(Opt, {
    t: "Visit in Oakville",
    x: "3060 Preserve Dr, Oakville, ON L6M 4L9, Canada",
    l: "Open in Google Maps \u2197",
    href: "#"
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      ...SP,
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "9vw",
      background: "var(--surface-warm)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: H("clamp(55px,6vw,82px)")
  }, "Luxury Beauty", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("small", {
    style: {
      marginTop: 12,
      display: "inline-block",
      fontFamily: "var(--font-body)",
      fontSize: 10,
      fontWeight: 500,
      letterSpacing: "0.18em",
      textTransform: "uppercase"
    }
  }, "by Cleo R.")), /*#__PURE__*/React.createElement("dl", {
    style: {
      margin: 0,
      borderTop: "1px solid var(--border)"
    }
  }, [["Location", "3060 Preserve Dr, Oakville, ON L6M 4L9, Canada"], ["Phone", "416-294-0452"], ["Appointments", "Consultation-led care by prior booking"]].map(([a, b]) => /*#__PURE__*/React.createElement("div", {
    key: a,
    style: {
      display: "grid",
      gridTemplateColumns: "150px 1fr",
      gap: 25,
      borderBottom: "1px solid var(--border)",
      padding: "25px 0"
    }
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      fontSize: 9,
      fontWeight: 600,
      letterSpacing: "0.16em",
      color: "var(--brand-green)",
      textTransform: "uppercase"
    }
  }, a), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: 0
    }
  }, b))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--brand-accent)",
      padding: "110px max(12vw,60px)",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: H("clamp(60px,8vw,100px)", {
      maxWidth: 1000,
      margin: "0 auto"
    })
  }, "You don\u2019t need to choose a treatment first."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "30px auto 0",
      maxWidth: 650
    }
  }, "Your consultation is designed to understand your goals and determine whether treatment is appropriate for you.")));
}
Object.assign(window, {
  Concerns,
  About,
  Contact
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Pages.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ServiceArea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const AreaTile = ({
  k,
  x,
  hub,
  go
}) => {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      hub ? go("Locations") : go("area", k);
    },
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      minHeight: 220,
      padding: "30px 28px",
      background: h ? "var(--surface)" : "var(--background)",
      color: "inherit",
      textDecoration: "none",
      transition: "background 150ms"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9,
      fontWeight: 600,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: "var(--brand-green)"
    }
  }, hub ? "All locations" : x.drive), /*#__PURE__*/React.createElement("h3", {
    style: H(36)
  }, hub ? "Areas we serve" : "Med spa " + x.city), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14
    }
  }, hub ? "See every community we welcome clients from." : x.blurb), /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: "auto",
      fontSize: 9,
      fontWeight: 600,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      textDecoration: "underline",
      textUnderlineOffset: 4
    }
  }, hub ? "View all locations ↗" : "Explore " + x.city + " ↗"));
};
function ServiceArea({
  a,
  go
}) {
  const {
    Button,
    BookingCta,
    FaqList,
    ReviewCard,
    TreatmentCard,
    TextLink
  } = window.LuxuryBeautyByCleoRDesignSystem_8fa9a4;
  const D = window.LB_DATA;
  const cap = {
    fontSize: 9,
    fontWeight: 600,
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "var(--brand-green)"
  };
  const crumb = {
    fontSize: 9,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: "inherit",
    textDecoration: "none"
  };
  const pop = a.popular.map(s => D.treatments.find(t => t.slug === s)).filter(Boolean);
  const MAP = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.536621236177!2d-79.73647509999999!3d43.47558569999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b5d02bab7dd91%3A0xd1e4c7aa4bbefca2!2sLuxury%20Beauty%20By%20Cleo%20R!5e0!3m2!1sen!2sca!4v1789959453969!5m2!1sen!2sca";
  const DIR = "https://maps.app.goo.gl/8nuEqr8YRCzXv4A5A";
  const book = () => go("Book a consultation");
  const steps = a.steps || window.LB_AREAS.burlington.steps;
  const others = Object.entries(window.LB_AREAS).filter(([k, x]) => x !== a);
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))",
      background: "var(--brand-accent)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "64px max(6vw,32px) 72px",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Breadcrumb",
    style: {
      display: "flex",
      gap: 10,
      marginBottom: 56,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: crumb,
    onClick: () => go("Home")
  }, "Home"), /*#__PURE__*/React.createElement("span", {
    style: crumb
  }, "/"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: crumb,
    onClick: () => go("Locations")
  }, "Locations"), /*#__PURE__*/React.createElement("span", {
    style: crumb
  }, "/"), /*#__PURE__*/React.createElement("span", {
    style: {
      ...crumb,
      opacity: .6
    }
  }, "Med spa ", a.city)), /*#__PURE__*/React.createElement("p", {
    style: {
      ...cap,
      color: "var(--foreground)",
      marginBottom: 20
    }
  }, "NP-led \xB7 Serving ", a.city, " from Oakville"), /*#__PURE__*/React.createElement("h1", {
    style: H("clamp(54px,6.4vw,100px)", {
      marginBottom: 22,
      maxWidth: 820
    })
  }, a.h1), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "clamp(26px,2.6vw,36px)",
      lineHeight: 1.2,
      marginBottom: 22,
      maxWidth: 640
    }
  }, a.line), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 580,
      marginBottom: 28
    }
  }, a.intro), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 14,
      marginBottom: 30
    }
  }, /*#__PURE__*/React.createElement(Button, {
    arrow: true,
    onClick: book
  }, "Book a free consultation"), /*#__PURE__*/React.createElement(Button, {
    variant: "brandOutline",
    href: "tel:+14162940452"
  }, "Call 416-294-0452")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "auto",
      display: "flex",
      alignItems: "center",
      gap: 10,
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      width: 7,
      height: 7,
      borderRadius: "50%",
      background: "var(--brand-green)"
    }
  }), "3060 Preserve Dr, Oakville, ON L6M 4L9")), /*#__PURE__*/React.createElement(Img, {
    src: LB_IMG + "cleo-hero-blazer.webp",
    style: {
      minHeight: 620
    }
  })), /*#__PURE__*/React.createElement("section", {
    "aria-label": "Quick facts",
    style: {
      borderBottom: "1px solid var(--border)",
      padding: "0 max(6vw,32px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,180px),1fr))",
      borderLeft: "1px solid var(--border)"
    }
  }, [["Provider", "Cleo R., Board-Certified NP"], ["Consultation", "Free"], ["From " + a.city, a.drive], ["Booking", "Call or Instagram DM"]].map(([l, v]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      background: "var(--background)",
      borderRight: "1px solid var(--border)",
      borderTop: "1px solid var(--border)",
      marginTop: -1,
      padding: "28px 24px",
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: cap
  }, l), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 22,
      lineHeight: 1.2
    }
  }, v))))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...SP,
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,380px),1fr))",
      gap: "4vw 9vw"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      ...cap,
      marginBottom: 20
    }
  }, "Why ", a.city, " clients choose Cleo"), /*#__PURE__*/React.createElement("h2", {
    style: H("clamp(48px,5.4vw,80px)")
  }, "Worth the short drive from ", a.city, ".")), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--rule-strong)"
    }
  }, a.why.map(([t, x]) => /*#__PURE__*/React.createElement("article", {
    key: t,
    style: {
      borderBottom: "1px solid var(--rule-strong)",
      padding: "30px 0"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: H(34, {
      marginBottom: 12
    })
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 560
    }
  }, x))))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...SP,
      background: "var(--surface)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      alignItems: "end",
      gap: 24,
      marginBottom: 44
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      ...cap,
      marginBottom: 20
    }
  }, "Treatments for ", a.city, " clients"), /*#__PURE__*/React.createElement("h2", {
    style: H("clamp(48px,5.4vw,80px)", {
      maxWidth: 760
    })
  }, "Popular treatments with ", a.city, " clients.")), /*#__PURE__*/React.createElement(TextLink, {
    onClick: e => {
      e.preventDefault();
      go("Treatments");
    }
  }, "View all treatments")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,300px),1fr))",
      borderTop: "1px solid var(--border)",
      borderLeft: "1px solid var(--border)"
    }
  }, pop.map(t => /*#__PURE__*/React.createElement(TreatmentCard, _extends({
    key: t.slug
  }, t, {
    onClick: e => {
      e.preventDefault();
      go("treatment", t);
    }
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...SP,
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,380px),1fr))",
      gap: "5vw",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      ...cap,
      marginBottom: 20
    }
  }, "Getting here"), /*#__PURE__*/React.createElement("h2", {
    style: H("clamp(48px,5.4vw,80px)", {
      marginBottom: 34
    })
  }, "From ", a.city, " to our Oakville clinic."), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--rule-strong)"
    }
  }, a.travel.map(([t, x]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      borderBottom: "1px solid var(--rule-strong)",
      padding: "22px 0"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: H(26, {
      marginBottom: 8
    })
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15
    }
  }, x)))), /*#__PURE__*/React.createElement("address", {
    style: {
      fontStyle: "normal",
      margin: "30px 0 26px",
      lineHeight: 1.6
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 600
    }
  }, "Luxury Beauty by Cleo R."), /*#__PURE__*/React.createElement("br", null), "3060 Preserve Dr, Oakville, ON L6M 4L9", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("a", {
    href: "tel:+14162940452",
    style: {
      color: "inherit"
    }
  }, "416-294-0452")), /*#__PURE__*/React.createElement(TextLink, {
    href: DIR,
    target: "_blank",
    rel: "noreferrer"
  }, "Get directions")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: "4 / 5",
      overflow: "hidden",
      border: "1px solid var(--border)",
      background: "var(--surface)"
    }
  }, /*#__PURE__*/React.createElement("iframe", {
    src: MAP,
    title: "Map from " + a.city + " to Luxury Beauty by Cleo R. in Oakville",
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
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...SP,
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      ...cap,
      marginBottom: 20
    }
  }, "Areas we serve"), /*#__PURE__*/React.createElement("h2", {
    style: H("clamp(40px,4.4vw,64px)", {
      marginBottom: 30,
      maxWidth: 900
    })
  }, "Welcoming clients from every corner of ", a.city, "."), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexWrap: "wrap",
      gap: 10
    }
  }, a.neighbourhoods.map(n => /*#__PURE__*/React.createElement("li", {
    key: n,
    style: {
      border: "1px solid var(--border)",
      padding: "10px 16px",
      fontSize: 14
    }
  }, n)))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...SP,
      display: "grid",
      gridTemplateColumns: "0.8fr 1.2fr",
      gap: "9vw",
      background: "var(--brand-accent)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: 30,
      alignSelf: "start"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: H("clamp(52px,6vw,88px)", {
      marginBottom: 30
    })
  }, "Your first visit, step by step."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: 35,
      maxWidth: 460
    }
  }, "You don\u2019t need to know which treatment you want. That\u2019s what the consultation is for."), /*#__PURE__*/React.createElement(Button, {
    arrow: true,
    onClick: book
  }, "Book a free consultation")), /*#__PURE__*/React.createElement("ol", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      borderTop: "1px solid var(--rule-strong)"
    }
  }, steps.map(([t, x], i) => /*#__PURE__*/React.createElement("li", {
    key: t,
    style: {
      display: "grid",
      gridTemplateColumns: "60px 1fr",
      borderBottom: "1px solid var(--rule-strong)",
      padding: "32px 0"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 32,
      color: "var(--brand-green)"
    }
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: H(36, {
      marginBottom: 12
    })
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 480
    }
  }, x)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...SP,
      background: "var(--surface)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      ...cap,
      marginBottom: 20
    }
  }, "Client reviews"), /*#__PURE__*/React.createElement("h2", {
    style: H("clamp(48px,5.4vw,80px)", {
      marginBottom: 44
    })
  }, "Kind words from our clients."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))",
      gap: 1,
      background: "var(--border)"
    }
  }, D.reviews.map(r => /*#__PURE__*/React.createElement(ReviewCard, _extends({
    key: r.name
  }, r))))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...SP,
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))",
      gap: "4vw 9vw"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: H("clamp(52px,6vw,88px)", {
      marginBottom: 30
    })
  }, a.city, " med spa questions."), /*#__PURE__*/React.createElement(TextLink, {
    onClick: e => {
      e.preventDefault();
      go("FAQs");
    }
  }, "View all FAQs")), /*#__PURE__*/React.createElement(FaqList, {
    faqs: a.faqs
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      ...SP,
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      ...cap,
      marginBottom: 20
    }
  }, "Nearby areas"), /*#__PURE__*/React.createElement("h2", {
    style: H("clamp(40px,4.4vw,64px)", {
      marginBottom: 30
    })
  }, "We also welcome clients from:"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,280px),1fr))",
      gap: 1,
      background: "var(--border)",
      border: "1px solid var(--border)"
    }
  }, others.map(([k, x]) => /*#__PURE__*/React.createElement(AreaTile, {
    key: k,
    k: k,
    x: x,
    go: go
  })), /*#__PURE__*/React.createElement(AreaTile, {
    hub: true,
    go: go
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "90px max(6vw,32px)",
      background: "var(--foreground)",
      color: "var(--background)",
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 30
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: H("clamp(44px,5vw,72px)", {
      marginBottom: 14
    })
  }, "Ready to talk to Cleo?"), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 520,
      opacity: .85
    }
  }, "Free consultations for ", a.city, " clients. No pressure, just an honest assessment.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "brandInverse",
    arrow: true,
    onClick: book
  }, "Book a free consultation"), /*#__PURE__*/React.createElement(Button, {
    variant: "brandInverse",
    href: "tel:+14162940452"
  }, "Call 416-294-0452"))), /*#__PURE__*/React.createElement(BookingCta, {
    image: LB_IMG + "cleo-book-now.webp",
    onClick: e => {
      e.preventDefault();
      book();
    }
  }));
}
function Locations({
  go
}) {
  const {
    Button,
    PageHero,
    BookingCta,
    TextLink,
    FaqList
  } = window.LuxuryBeautyByCleoRDesignSystem_8fa9a4;
  const cap = {
    fontSize: 9,
    fontWeight: 600,
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "var(--brand-green)"
  };
  const A = Object.entries(window.LB_AREAS);
  const MAP = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.536621236177!2d-79.73647509999999!3d43.47558569999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b5d02bab7dd91%3A0xd1e4c7aa4bbefca2!2sLuxury%20Beauty%20By%20Cleo%20R!5e0!3m2!1sen!2sca!4v1789959453969!5m2!1sen!2sca";
  const faqs = [["Where is Luxury Beauty by Cleo R. located?", "Our only clinic is at 3060 Preserve Dr, Oakville, ON L6M 4L9, in north Oakville near Dundas Street."], ["Which areas do you serve?", "Clients visit from Oakville, Burlington, Milton and Mississauga, as well as the wider Halton and Peel region."], ["Is every location the same clinic?", "Yes. There is one clinic in Oakville, and Cleo R., NP, sees every client there herself."], ["How do I book?", "Call 416-294-0452 or send a direct message to @luxury_beauty_aestheticz on Instagram. Your first consultation is free."]];
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(PageHero, {
    tone: "blush",
    title: "Med spa locations we serve.",
    intro: "One Nurse Practitioner\u2013led clinic in north Oakville, welcoming clients from Oakville, Burlington, Milton and Mississauga."
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      ...SP,
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,380px),1fr))",
      gap: "5vw",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      ...cap,
      marginBottom: 20
    }
  }, "Our clinic"), /*#__PURE__*/React.createElement("h2", {
    style: H("clamp(48px,5.4vw,80px)", {
      marginBottom: 30
    })
  }, "One clinic. One Nurse Practitioner."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: 18,
      maxWidth: 520
    }
  }, "Every client, from every city, sees Cleo R., a Board-Certified Nurse Practitioner, at our Oakville clinic. That means the same assessment-first care and the same person at every visit."), /*#__PURE__*/React.createElement("address", {
    style: {
      fontStyle: "normal",
      margin: "0 0 30px",
      lineHeight: 1.6
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 600
    }
  }, "Luxury Beauty by Cleo R."), /*#__PURE__*/React.createElement("br", null), "3060 Preserve Dr, Oakville, ON L6M 4L9", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("a", {
    href: "tel:+14162940452",
    style: {
      color: "inherit"
    }
  }, "416-294-0452")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Button, {
    arrow: true,
    onClick: () => go("Book a consultation")
  }, "Book a free consultation"), /*#__PURE__*/React.createElement(Button, {
    variant: "brandOutline",
    href: "https://maps.app.goo.gl/8nuEqr8YRCzXv4A5A",
    target: "_blank",
    rel: "noreferrer"
  }, "Get directions"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: "4 / 3",
      overflow: "hidden",
      border: "1px solid var(--border)",
      background: "var(--surface)"
    }
  }, /*#__PURE__*/React.createElement("iframe", {
    src: MAP,
    title: "Map to Luxury Beauty by Cleo R. in Oakville",
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
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...SP,
      background: "var(--surface)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      ...cap,
      marginBottom: 20
    }
  }, "Areas we serve"), /*#__PURE__*/React.createElement("h2", {
    style: H("clamp(48px,5.4vw,80px)", {
      marginBottom: 44,
      maxWidth: 820
    })
  }, "Choose your area."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,280px),1fr))",
      gap: 1,
      background: "var(--border)",
      border: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go("Home");
    },
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      minHeight: 220,
      padding: "30px 28px",
      background: "var(--background)",
      color: "inherit",
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: cap
  }, "Home clinic"), /*#__PURE__*/React.createElement("h3", {
    style: H(36)
  }, "Med spa Oakville"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14
    }
  }, "Our clinic in north Oakville, near Dundas Street and Preserve Drive."), /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: "auto",
      fontSize: 9,
      fontWeight: 600,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      textDecoration: "underline",
      textUnderlineOffset: 4
    }
  }, "Visit homepage \u2197")), A.map(([k, x]) => /*#__PURE__*/React.createElement(AreaTile, {
    key: k,
    k: k,
    x: x,
    go: go
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...SP,
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))",
      gap: "4vw 9vw"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: H("clamp(52px,6vw,88px)", {
      marginBottom: 30
    })
  }, "Location questions."), /*#__PURE__*/React.createElement(TextLink, {
    onClick: e => {
      e.preventDefault();
      go("FAQs");
    }
  }, "View all FAQs")), /*#__PURE__*/React.createElement(FaqList, {
    faqs: faqs
  })), /*#__PURE__*/React.createElement(BookingCta, {
    image: LB_IMG + "cleo-book-now.webp",
    onClick: e => {
      e.preventDefault();
      go("Book a consultation");
    }
  }));
}
window.LB_LOCATION_FAQS = null;
Object.assign(window, {
  ServiceArea,
  Locations
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ServiceArea.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Shared.jsx
try { (() => {
const NS = window.LuxuryBeautyByCleoRDesignSystem_8fa9a4;
const SP = {
  padding: "130px max(6vw,32px)"
};
const H = (size, extra) => ({
  margin: 0,
  fontFamily: "var(--font-display)",
  fontWeight: 400,
  lineHeight: 0.98,
  letterSpacing: "-0.02em",
  fontSize: size,
  ...extra
});
const Img = ({
  src,
  style
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    position: "relative",
    overflow: "hidden",
    ...style
  }
}, /*#__PURE__*/React.createElement("img", {
  src: src,
  alt: "",
  style: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover"
  }
}));
const RuledList = ({
  items
}) => /*#__PURE__*/React.createElement("ul", {
  style: {
    margin: 0,
    padding: 0,
    listStyle: "none",
    borderTop: "1px solid var(--rule-strong)"
  }
}, items.map(i => /*#__PURE__*/React.createElement("li", {
  key: i,
  style: {
    borderBottom: "1px solid var(--rule-strong)",
    padding: "17px 0",
    fontFamily: "var(--font-display)",
    fontSize: 24
  }
}, i)));
Object.assign(window, {
  SP,
  H,
  Img,
  RuledList
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Shared.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/TreatmentDetail.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TreatmentDetail({
  t,
  go
}) {
  const {
    Button,
    BookingCta,
    FaqList,
    ReviewCard,
    TreatmentCard
  } = window.LuxuryBeautyByCleoRDesignSystem_8fa9a4;
  const D = window.LB_DATA,
    X = window.LB_TX[t.slug];
  if (!X) return null;
  const cap = {
    fontSize: 9,
    fontWeight: 600,
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "var(--brand-green)"
  };
  const crumb = {
    fontSize: 9,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: "inherit",
    textDecoration: "none"
  };
  const rev = D.reviews.find(r => r.name === X.review) || D.reviews[1];
  const rel = X.related.map(s => D.treatments.find(x => x.slug === s)).filter(Boolean);
  const Check = ({
    items,
    mark
  }) => /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      borderTop: "1px solid var(--rule-strong)"
    }
  }, items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: "grid",
      gridTemplateColumns: "24px 1fr",
      gap: 10,
      padding: "15px 0",
      borderBottom: "1px solid var(--rule-strong)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      color: "var(--brand-green)"
    }
  }, mark), i)));
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))",
      background: "var(--brand-accent)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "64px max(6vw,32px) 72px",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Breadcrumb",
    style: {
      display: "flex",
      gap: 10,
      marginBottom: 56,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: crumb,
    onClick: () => go("Home")
  }, "Home"), /*#__PURE__*/React.createElement("span", {
    style: crumb
  }, "/"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: crumb,
    onClick: () => go("Treatments")
  }, "Treatments"), /*#__PURE__*/React.createElement("span", {
    style: crumb
  }, "/"), /*#__PURE__*/React.createElement("span", {
    style: {
      ...crumb,
      opacity: .6
    }
  }, t.name)), /*#__PURE__*/React.createElement("p", {
    style: {
      ...cap,
      color: "var(--foreground)",
      marginBottom: 20
    }
  }, "NP-led \xB7 Oakville, ON"), /*#__PURE__*/React.createElement("h1", {
    style: H("clamp(54px,6.4vw,100px)", {
      marginBottom: 22,
      maxWidth: 820
    })
  }, X.h1), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "clamp(26px,2.6vw,36px)",
      lineHeight: 1.2,
      marginBottom: 22,
      maxWidth: 640
    }
  }, X.line), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 580,
      marginBottom: 28
    }
  }, X.first), /*#__PURE__*/React.createElement("p", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      fontSize: 13,
      marginBottom: 30
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      width: 7,
      height: 7,
      borderRadius: "50%",
      background: "var(--brand-green)"
    }
  }), "Every client is assessed by a Nurse Practitioner before treatment."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 14,
      marginBottom: 30
    }
  }, /*#__PURE__*/React.createElement(Button, {
    arrow: true,
    onClick: () => go("Book a consultation")
  }, "Book a free consultation"), /*#__PURE__*/React.createElement(Button, {
    variant: "brandOutline",
    href: "tel:+14162940452"
  }, "Call 416-294-0452")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "auto",
      fontSize: 11,
      color: "var(--brand-muted)"
    }
  }, "Medically reviewed by Cleo R., NP \xB7 Updated November 2026")), /*#__PURE__*/React.createElement(Img, {
    src: t.image,
    style: {
      minHeight: 620
    }
  })), /*#__PURE__*/React.createElement("section", {
    "aria-label": "Quick facts",
    style: {
      borderBottom: "1px solid var(--border)",
      padding: "0 max(6vw,32px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,160px),1fr))",
      borderLeft: "1px solid var(--border)"
    }
  }, [...X.facts, ["Consultation", "Free"]].map(([l, v]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      background: "var(--background)",
      borderRight: "1px solid var(--border)",
      borderTop: "1px solid var(--border)",
      marginTop: -1,
      padding: "28px 24px",
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: cap
  }, l), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 22,
      lineHeight: 1.2
    }
  }, v))))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...SP,
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,380px),1fr))",
      gap: "4vw 9vw"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: H("clamp(48px,5.4vw,78px)")
  }, X.whatTitle), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 22,
      maxWidth: 640
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "clamp(24px,2.3vw,32px)",
      lineHeight: 1.3
    }
  }, X.what[0]), X.what.slice(1).map(p => /*#__PURE__*/React.createElement("p", {
    key: p
  }, p)))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...SP,
      background: "var(--clinical)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,380px),1fr))",
      gap: "3vw 9vw",
      alignItems: "end",
      marginBottom: 56
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: H("clamp(48px,5.4vw,78px)")
  }, t.slug === "weight" || t.slug === "iv" ? "What’s included" : "Areas we treat"), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 480
    }
  }, X.areasIntro || "Cleo treats only what suits your face and goals. You’ll agree on every area before treatment starts.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,260px),1fr))",
      borderTop: "1px solid var(--rule-strong)",
      borderLeft: "1px solid var(--rule-strong)"
    }
  }, X.areas.map(([a, d], i) => /*#__PURE__*/React.createElement("div", {
    key: a,
    style: {
      background: "var(--clinical)",
      borderRight: "1px solid var(--rule-strong)",
      borderBottom: "1px solid var(--rule-strong)",
      padding: "30px 26px",
      minHeight: 170,
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...cap,
      color: "var(--brand-muted)"
    }
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("h3", {
    style: H(30, {
      marginTop: "auto"
    })
  }, a), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14
    }
  }, d))))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...SP,
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,320px),1fr))",
      gap: "5vw"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: H("clamp(48px,5.4vw,78px)", {
      marginBottom: 24
    })
  }, "Is it right for you?"), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 420
    }
  }, "Your free consultation covers your health history and medications, so you\u2019ll know whether this treatment suits you before you pay for anything.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      ...cap,
      marginBottom: 16
    }
  }, "A good fit if"), /*#__PURE__*/React.createElement(Check, {
    items: X.fit,
    mark: "\u2713"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      ...cap,
      marginBottom: 16
    }
  }, "Cleo may suggest waiting if"), /*#__PURE__*/React.createElement(Check, {
    items: X.wait,
    mark: "\u2014"
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...SP,
      background: "var(--surface)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: H("clamp(48px,5.4vw,78px)", {
      marginBottom: 56
    })
  }, "Your appointment, step by step"), /*#__PURE__*/React.createElement("ol", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,220px),1fr))",
      gap: "0 28px"
    }
  }, X.steps.map(([s, d, tm], i) => /*#__PURE__*/React.createElement("li", {
    key: s,
    style: {
      borderTop: "1px solid var(--foreground)",
      paddingTop: 22,
      display: "flex",
      flexDirection: "column",
      gap: 12,
      paddingBottom: 30
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 40,
      lineHeight: 1,
      color: "var(--brand-green)"
    }
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: "var(--brand-muted)"
    }
  }, tm)), /*#__PURE__*/React.createElement("h3", {
    style: H(28)
  }, s), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14
    }
  }, d))))), /*#__PURE__*/React.createElement("section", {
    style: SP
  }, /*#__PURE__*/React.createElement("h2", {
    style: H("clamp(48px,5.4vw,78px)", {
      marginBottom: 56,
      maxWidth: 900
    })
  }, "Results, recovery and aftercare"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))",
      borderTop: "1px solid var(--border)",
      borderLeft: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--background)",
      padding: "32px 30px",
      borderRight: "1px solid var(--border)",
      borderBottom: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      ...cap,
      marginBottom: 14
    }
  }, "Results"), /*#__PURE__*/React.createElement("p", null, X.results)), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--background)",
      padding: "32px 30px",
      borderRight: "1px solid var(--border)",
      borderBottom: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      ...cap,
      marginBottom: 14
    }
  }, "Side effects"), /*#__PURE__*/React.createElement("p", null, X.effects)), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-warm)",
      padding: "32px 30px",
      borderRight: "1px solid var(--border)",
      borderBottom: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      ...cap,
      marginBottom: 14
    }
  }, "Aftercare"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: 18,
      display: "grid",
      gap: 8
    }
  }, X.after.map(a => /*#__PURE__*/React.createElement("li", {
    key: a
  }, a)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))",
      background: "var(--surface-soft)"
    }
  }, /*#__PURE__*/React.createElement(Img, {
    src: LB_IMG + "cleo-white-coat-arms-crossed.jpg",
    style: {
      minHeight: 560
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "100px max(6vw,32px)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: H("clamp(46px,5vw,72px)", {
      marginBottom: 28
    })
  }, "Why choose Cleo"), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 520,
      marginBottom: 28
    }
  }, "Cleo is a Nurse Practitioner in Oakville and has worked in nursing since 2013. She\u2019ll tell you when a smaller amount would look better, and when you don\u2019t need treatment at all."), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      borderTop: "1px solid var(--rule-strong)",
      maxWidth: 520
    }
  }, ["Assessed by a Nurse Practitioner, every visit", "RN since 2013 · NP since 2022", "Care planned for every skin tone and face", "Honest advice, including “not today”"].map(i => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      padding: "14px 0",
      borderBottom: "1px solid var(--rule-strong)",
      fontFamily: "var(--font-display)",
      fontSize: 22
    }
  }, i))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 24,
      fontSize: 12,
      color: "var(--brand-muted)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: () => go("About"),
    style: {
      color: "inherit"
    }
  }, "Meet Cleo")))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...SP,
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))",
      gap: "4vw 9vw"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: H("clamp(48px,5.4vw,78px)", {
      marginBottom: 24
    })
  }, t.slug === "lips" ? "Lip filler" : t.name.replace(" Treatments", ""), " FAQs"), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 380,
      marginBottom: 20
    }
  }, "Still unsure? Ask Cleo at your free consultation."), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: () => go("FAQs"),
    style: {
      fontSize: 10,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "inherit"
    }
  }, "All FAQs \u2197")), /*#__PURE__*/React.createElement(FaqList, {
    faqs: X.faqs
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      ...SP,
      paddingTop: 0,
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,380px),1fr))",
      gap: "4vw 9vw",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      ...cap,
      marginBottom: 16
    }
  }, "Client experiences"), /*#__PURE__*/React.createElement("h2", {
    style: H("clamp(42px,4.6vw,64px)", {
      marginBottom: 20
    })
  }, "How clients describe their visit."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: "var(--brand-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--brand-green)",
      letterSpacing: "0.1em"
    },
    "aria-hidden": true
  }, "\u2605\u2605\u2605\u2605\u2605"), " 5.0 on Google \xB7 ", /*#__PURE__*/React.createElement("a", {
    href: "https://maps.google.com/?cid=15124432982846143650",
    target: "_blank",
    rel: "noreferrer",
    style: {
      color: "inherit"
    }
  }, "Read all reviews"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--border)",
      padding: 1
    }
  }, /*#__PURE__*/React.createElement(ReviewCard, _extends({}, rev, {
    style: {
      minHeight: 0
    }
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...SP,
      background: "var(--surface)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: H("clamp(44px,5vw,70px)", {
      marginBottom: 48
    })
  }, "Related treatments"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,320px),1fr))",
      borderTop: "1px solid var(--border)",
      borderLeft: "1px solid var(--border)"
    }
  }, rel.map(r => /*#__PURE__*/React.createElement(TreatmentCard, _extends({
    key: r.slug
  }, r, {
    onClick: e => {
      e.preventDefault();
      go("treatment", r);
    }
  }))))), /*#__PURE__*/React.createElement(BookingCta, {
    image: LB_IMG + "cleo-book-now.webp",
    onClick: e => {
      e.preventDefault();
      go("Book a consultation");
    }
  }));
}
Object.assign(window, {
  TreatmentDetail
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/TreatmentDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Treatments.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Treatments({
  go,
  openTreatment
}) {
  const {
    PageHero,
    TreatmentCard,
    BookingCta
  } = window.LuxuryBeautyByCleoRDesignSystem_8fa9a4;
  const D = window.LB_DATA;
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(PageHero, {
    title: "Aesthetic Treatments in Oakville",
    intro: "Your goals, anatomy, skin, medical history, and individual needs all matter. Explore our services, then speak with Cleo to determine what may be appropriate for you."
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      ...SP,
      display: "grid",
      gridTemplateColumns: "1.2fr 0.8fr",
      alignItems: "center",
      gap: "8vw"
    }
  }, /*#__PURE__*/React.createElement(Img, {
    src: LB_IMG + "cleo-white-coat-curtain.webp",
    style: {
      height: 650
    }
  }), /*#__PURE__*/React.createElement("blockquote", {
    style: H("clamp(46px,5vw,70px)", {
      color: "var(--brand-green)"
    })
  }, "\u201CThe treatment never comes before the person.\u201D", /*#__PURE__*/React.createElement("small", {
    style: {
      display: "block",
      marginTop: 25,
      fontFamily: "var(--font-body)",
      fontSize: 9,
      letterSpacing: "0.15em",
      textTransform: "uppercase"
    }
  }, "\u2014 The Luxury Beauty approach"))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...SP,
      background: "var(--surface)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      borderTop: "1px solid var(--border)",
      borderLeft: "1px solid var(--border)"
    }
  }, D.treatments.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.slug,
    onClick: e => {
      e.preventDefault();
      openTreatment(t);
    },
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(TreatmentCard, _extends({}, t, {
    style: {
      height: "100%"
    }
  })))))), /*#__PURE__*/React.createElement(BookingCta, {
    image: LB_IMG + "cleo-book-now.webp",
    onClick: e => {
      e.preventDefault();
      go("Book a consultation");
    }
  }));
}
function TreatmentDetailLegacy({
  t,
  go
}) {
  const {
    Button,
    BookingCta
  } = window.LuxuryBeautyByCleoRDesignSystem_8fa9a4;
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 0.6fr",
      alignItems: "center",
      minHeight: 680,
      background: "var(--brand-accent)",
      padding: "100px max(6vw,32px)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go("Treatments");
    },
    style: {
      display: "block",
      marginBottom: 70,
      fontSize: 9,
      letterSpacing: "0.16em",
      textTransform: "uppercase"
    }
  }, "\u2190 All treatments"), /*#__PURE__*/React.createElement("h1", {
    style: H("clamp(60px,8vw,112px)", {
      marginBottom: 20,
      maxWidth: 950
    })
  }, t.seoHeading), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: 30,
      maxWidth: 760,
      fontFamily: "var(--font-display)",
      fontSize: "clamp(28px,3vw,42px)",
      lineHeight: 1.25
    }
  }, t.hero), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: 35,
      maxWidth: 650
    }
  }, t.summary), /*#__PURE__*/React.createElement(Button, {
    arrow: true,
    onClick: () => go("Book a consultation")
  }, t.cta)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "grid",
      placeItems: "center",
      aspectRatio: "1",
      width: "min(30vw,350px)",
      borderRadius: "50%",
      border: "1px solid rgb(37 40 42 / 0.28)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 150
    }
  }, t.name.charAt(0)))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...SP,
      display: "grid",
      gridTemplateColumns: "0.5fr 1.5fr",
      gap: "8vw"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: 2,
      maxWidth: 900,
      fontFamily: "var(--font-display)",
      fontSize: "clamp(30px,3.2vw,48px)",
      lineHeight: 1.2,
      display: "grid",
      gap: 28
    }
  }, t.introduction.map(p => /*#__PURE__*/React.createElement("p", {
    key: p
  }, p)))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...SP,
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "9vw",
      background: "var(--clinical)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: H("clamp(52px,6vw,82px)", {
      marginBottom: 28
    })
  }, t.considerationTitle), /*#__PURE__*/React.createElement("p", null, "No two people arrive with the same features, history, or goals. Your plan reflects that.")), /*#__PURE__*/React.createElement(RuledList, {
    items: t.considerations
  })), /*#__PURE__*/React.createElement("aside", {
    style: {
      margin: "130px max(6vw,32px)",
      display: "grid",
      gridTemplateColumns: "200px 1fr",
      gap: "6vw",
      border: "1px solid var(--border)",
      padding: 35
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9,
      fontWeight: 600,
      letterSpacing: "0.2em",
      color: "var(--brand-green)",
      textTransform: "uppercase"
    }
  }, "Good to know"), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 850
    }
  }, "Specific products, preparation, expected timing, aftercare, results, and pricing are discussed after Cleo has assessed your individual needs.")), /*#__PURE__*/React.createElement(BookingCta, {
    image: LB_IMG + "cleo-book-now.webp",
    onClick: e => {
      e.preventDefault();
      go("Book a consultation");
    }
  }));
}
Object.assign(window, {
  Treatments
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Treatments.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/areaContent.js
try { (() => {
// Service-area (local SEO) page content. One entry per city; path is the public URL.
window.LB_AREAS = {
  burlington: {
    city: "Burlington",
    path: "/med-spa-burlington",
    drive: "About 20–25 min drive",
    direction: "west",
    blurb: "Botox, fillers and skin care for Aldershot, Alton Village, Millcroft and downtown Burlington.",
    h1: "Med Spa Serving Burlington, ON",
    line: "Nurse Practitioner–led Botox, fillers and skin care, a short drive from Burlington.",
    intro: "Luxury Beauty by Cleo R. is a Nurse Practitioner–led med spa in north Oakville that welcomes clients from across Burlington. Every visit starts with a free consultation with Cleo R., a Board-Certified Nurse Practitioner, who assesses your features, skin and health history before recommending any treatment.",
    why: [["A Nurse Practitioner, every visit", "Cleo personally assesses and treats every client. You won’t be passed to a different injector from one appointment to the next."], ["Assessment before treatment", "Your medical history, facial anatomy, muscle movement and skin all shape the plan. Sometimes the honest answer is “not today.”"], ["Natural-looking results", "The goal is enhancement, not alteration. Treatment is planned to keep your expression and features your own."], ["Care for every skin tone", "Plans account for your skin tone, features and healing response, so Burlington clients of every background are treated as individuals."]],
    popular: ["botox", "fillers", "lips", "skin"],
    travel: [["From central Burlington", "Take the QEW or Highway 403 east toward Oakville, then head north to Dundas Street. Most trips take about 20–25 minutes, depending on traffic."], ["From north Burlington", "Dundas Street (Highway 5) runs east from Burlington straight toward the clinic, a direct route for Alton Village, Millcroft, Headon Forest and Tyandaga."], ["Plan ahead", "Exact directions open in Google Maps. Call 416-294-0452 if you need help finding us."]],
    neighbourhoods: ["Downtown Burlington", "Aldershot", "Alton Village", "Millcroft", "Headon Forest", "Brant Hills", "Tyandaga", "Orchard", "Appleby", "Roseland", "Shoreacres", "Tansley"],
    steps: [["Book a free consultation", "Call 416-294-0452 or send a message on Instagram to choose a time that suits you."], ["Meet Cleo in Oakville", "Talk through your goals, health history and what you’d like to change. You’re under no pressure to book treatment."], ["Get a plan made for you", "If treatment is right for you, Cleo explains the options, the expected results, the risks and the aftercare before anything starts."], ["Follow-up care", "Cleo checks in after treatment and refines your plan over time, so results stay natural."]],
    faqs: [["Is there a med spa near Burlington?", "Yes. Luxury Beauty by Cleo R. is in north Oakville at 3060 Preserve Dr, about a 20–25 minute drive from central Burlington via the QEW, Highway 403 or Dundas Street."], ["Who performs treatments for Burlington clients?", "Every assessment and treatment is done by Cleo R., a Board-Certified Nurse Practitioner and the founder of Luxury Beauty."], ["Is the consultation really free?", "Yes. Your first consultation is free. It’s a chance to talk about your goals and decide together whether treatment is right for you."], ["Which treatments are most popular with Burlington clients?", "Botox and neurotoxins for fine lines, dermal fillers for cheeks, chin and jawline, lip filler, and skin boosters for hydration and glow. Fat dissolving, medical weight loss and IV infusions are also available."], ["Do I need to know what treatment I want before booking?", "No. Tell Cleo what you’d like to improve and she’ll recommend an approach, or none at all, after assessing you."], ["How do I book from Burlington?", "Call 416-294-0452 or send a direct message to @luxury_beauty_aestheticz on Instagram."]]
  },
  milton: {
    city: "Milton",
    path: "/med-spa-milton",
    drive: "About 15–20 min drive",
    direction: "north",
    blurb: "NP-led aesthetics for Old Milton, Timberlea, Hawthorne Village and the new west-end neighbourhoods.",
    h1: "Med Spa Serving Milton, ON",
    line: "Nurse Practitioner–led Botox, fillers and skin care, just south of Milton.",
    intro: "Luxury Beauty by Cleo R. is a Nurse Practitioner–led med spa in north Oakville, a quick drive south from Milton. Every visit starts with a free consultation with Cleo R., a Board-Certified Nurse Practitioner, who looks at your features, skin and health history before recommending any treatment.",
    why: [["One Nurse Practitioner, start to finish", "Cleo assesses and treats every client herself, so your care stays consistent from your first consultation to every follow-up."], ["Honest, assessment-first advice", "Your health history, anatomy and goals come first. If a treatment isn’t right for you, Cleo will tell you."], ["Subtle, natural-looking results", "Treatments are planned to refresh your look while keeping your expression and features your own."], ["Wellness as well as aesthetics", "Alongside injectables, Milton clients can access medically supervised weight-loss support and IV infusions in the same clinic."]],
    popular: ["botox", "fillers", "weight", "iv"],
    travel: [["From central Milton", "Head south on Trafalgar Road or Bronte Road toward Dundas Street in Oakville. Most trips take about 15–20 minutes, depending on traffic."], ["From west Milton", "James Snow Parkway and Highway 407 connect quickly to north Oakville, a straightforward route from Ford, Cobban and Bowes."], ["Plan ahead", "Exact directions open in Google Maps. Call 416-294-0452 if you need help finding us."]],
    neighbourhoods: ["Old Milton", "Timberlea", "Dorset Park", "Hawthorne Village", "Beaty", "Clarke", "Dempsey", "Coates", "Harrison", "Willmott", "Scott", "Ford", "Cobban", "Bowes"],
    steps: null,
    faqs: [["Is there a med spa near Milton?", "Yes. Luxury Beauty by Cleo R. is in north Oakville at 3060 Preserve Dr, about a 15–20 minute drive south of central Milton via Trafalgar Road, Bronte Road or Highway 407."], ["Who performs treatments for Milton clients?", "Cleo R., a Board-Certified Nurse Practitioner and the founder of Luxury Beauty, does every assessment and treatment."], ["Is the consultation free?", "Yes. Your first consultation is free, with no pressure to book treatment."], ["Which treatments are popular with Milton clients?", "Botox and neurotoxins, dermal fillers, medically supervised weight-loss support and IV infusions. Lip filler, skin boosters and fat dissolving are also available."], ["Do you offer medical weight loss for Milton clients?", "Yes. Weight-loss treatment starts with a full health assessment and includes regular check-ins with Cleo."], ["How do I book from Milton?", "Call 416-294-0452 or send a direct message to @luxury_beauty_aestheticz on Instagram."]]
  },
  mississauga: {
    city: "Mississauga",
    path: "/med-spa-mississauga",
    drive: "About 20–30 min drive",
    direction: "east",
    blurb: "Personalized injectables and skin care for Erin Mills, Churchill Meadows, Clarkson and Port Credit.",
    h1: "Med Spa Serving Mississauga, ON",
    line: "Nurse Practitioner–led Botox, fillers and skin care, just west of Mississauga.",
    intro: "Luxury Beauty by Cleo R. is a Nurse Practitioner–led med spa in north Oakville, a short drive west from Mississauga. Instead of a busy clinic with rotating injectors, you’ll see Cleo R., a Board-Certified Nurse Practitioner, at every visit, starting with a free consultation.",
    why: [["A boutique alternative to busy clinics", "A calm, private clinic where you see the same Nurse Practitioner every time, not whoever is available."], ["Assessment before treatment", "Cleo reviews your health history, anatomy, skin and goals before recommending anything, and explains every option clearly."], ["Results that still look like you", "Enhancement, not alteration. Plans are built to keep your features balanced and your expression natural."], ["Care for every skin tone", "Mississauga is one of Canada’s most diverse cities. Every plan accounts for your skin tone, features and healing response."]],
    popular: ["botox", "lips", "fillers", "skin"],
    travel: [["From west Mississauga", "Dundas Street West runs straight from Erin Mills and Churchill Meadows to north Oakville. Most trips take about 20 minutes."], ["From south and central Mississauga", "Take the QEW or Highway 403 west, then head north to Dundas Street. Expect about 25–30 minutes, depending on traffic."], ["Plan ahead", "Exact directions open in Google Maps. Call 416-294-0452 if you need help finding us."]],
    neighbourhoods: ["Erin Mills", "Central Erin Mills", "Churchill Meadows", "Lisgar", "Meadowvale", "Streetsville", "Clarkson", "Lorne Park", "Port Credit", "Sheridan", "Erindale", "City Centre"],
    steps: null,
    faqs: [["Is there a Nurse Practitioner–led med spa near Mississauga?", "Yes. Luxury Beauty by Cleo R. is in north Oakville at 3060 Preserve Dr, about 20 minutes from west Mississauga via Dundas Street West, or 25–30 minutes from central Mississauga via the QEW or Highway 403."], ["Who will I see at my appointment?", "Cleo R., a Board-Certified Nurse Practitioner and the founder of Luxury Beauty. She does every assessment and treatment herself."], ["Is the consultation free?", "Yes. Your first consultation is free. You’ll leave with honest advice and no pressure to book."], ["Which treatments are popular with Mississauga clients?", "Botox and neurotoxins, lip filler, dermal fillers and skin boosters. Fat dissolving, medical weight loss and IV infusions are also available."], ["Do you treat men?", "Yes. Luxury Beauty welcomes adults of all genders interested in personalized aesthetic and wellness care."], ["How do I book from Mississauga?", "Call 416-294-0452 or send a direct message to @luxury_beauty_aestheticz on Instagram."]]
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/areaContent.js", error: String((e && e.message) || e) }); }

// ui_kits/website/concernContent.js
try { (() => {
// Concern pages: problem-first template (causes → options → guide → expectations → care → FAQs). Lips 301s to /treatments/lip-filler.
window.LB_CX = {
  "Fine Lines & Wrinkles": {
    h1: "Fine Lines & Wrinkle Treatment in Oakville",
    line: "Softer lines, with your expression intact.",
    img: "treatment-botox.webp",
    first: "Cleo R., a Nurse Practitioner, offers wrinkle treatment in Oakville, with options matched to the kind of lines you have and how much change you want.",
    causes: [["Movement", "Lines form where muscles crease the skin over and over: the forehead, between the brows and around the eyes."], ["Collagen loss", "From your mid-20s, skin makes less collagen each year, so creases stay after your face relaxes."], ["Sun exposure", "UV light breaks down collagen and elastin. It’s the biggest outside cause of early lines."], ["Dehydration", "Dry skin shows fine, crepey lines more, especially under the eyes and on the neck."]],
    options: [["Neuromodulator injections", "Relaxes the muscles that crease the skin.", "Lines that show when you move: forehead, frown lines, crow’s feet", "botox"], ["Skin boosters", "Hydrates skin from within to soften fine, crepey lines.", "Fine lines with dull or dry texture", "skin"], ["Dermal filler", "Supports deeper folds that stay when your face is still.", "Deep lines and folds at rest", "fillers"]],
    guide: [["Lines appear when you frown, squint or smile", "Neuromodulator injections"], ["Lines stay when your face is relaxed", "Filler, sometimes with a neuromodulator"], ["Skin looks crepey or dull", "Skin boosters"], ["You’re in your 20s and want to slow lines", "A low-dose neuromodulator plan and daily sunscreen"]],
    expect: ["Movement lines soften over about 2 weeks.", "Deep, etched lines improve, but may need a few visits or a combination of options.", "Treatment can’t stop ageing. Regular care slows how deep lines set in."],
    care: ["Wear SPF 30 or higher every day, including winter", "Ask Cleo whether a nightly retinoid suits your skin", "Moisturize morning and night", "Avoid smoking, which speeds up collagen loss"],
    faqs: [["What’s the difference between fine lines and wrinkles?", "Fine lines are shallow and often come from dryness or early movement. Wrinkles are deeper creases that stay when your face is still. Cleo matches the option to the type of line, so the difference changes your plan."], ["What age should I start treatment?", "There’s no set age. Some clients start in their late 20s to slow lines from forming. Others start later to soften lines they already have. Cleo will tell you honestly if you don’t need treatment yet."], ["Can I treat wrinkles without Botox?", "Yes. Skin boosters improve fine, crepey lines, and filler can support deeper folds. Neuromodulators work best for lines caused by movement, so Cleo will explain the trade-offs at your consultation."], ["Will my lines get worse when treatment wears off?", "No. Your lines return gradually to how they were before. With regular treatment, many clients find their lines set in less deeply over time."]]
  },
  "Facial Volume & Definition": {
    h1: "Facial Volume Loss Treatment in Oakville",
    line: "Restore what time has softened, in proportion.",
    img: "treatment-fillers.webp",
    first: "Cleo R., a Nurse Practitioner, treats facial volume loss in Oakville, from hollow cheeks and temples to a softer jawline, with a plan built around your whole face.",
    causes: [["Fat pads shift", "The fat pads in your cheeks shrink and move lower with age, which flattens the mid-face."], ["Bone changes", "Facial bones slowly lose density, so the skin above has less support."], ["Weight loss", "Losing weight, including on a medical program, often shows first in the face."], ["Genetics", "Some people are born with flatter cheekbones or a less defined chin."]],
    options: [["Dermal filler", "Restores structure in the cheeks, temples, chin and jaw.", "Hollows, flat cheeks and a soft jawline", "fillers"], ["Skin boosters", "Improves skin quality so treated areas look smooth.", "Thin or crepey skin over hollows", "skin"], ["Neuromodulator for the jaw", "Relaxes a strong jaw muscle to soften a wide lower face.", "Jaw clenching and a square lower face", "botox"]],
    guide: [["Your cheeks look flat or hollow", "Cheek filler"], ["You look tired even when rested", "Temple or under-eye filler, if you’re a candidate"], ["Your jawline has lost its edge", "Chin and jawline filler"], ["You’ve recently lost weight", "A staged filler plan once your weight is stable"]],
    expect: ["You’ll see filler results right away. They settle at about 2 weeks.", "Cleo restores volume in stages, so your face stays in balance.", "Filler can’t lift heavy, loose skin. If that’s your main concern, Cleo will tell you."],
    care: ["Keep your weight stable after treatment", "Protect your skin with daily sunscreen", "Sleep on your back for the first few nights after filler", "Book a review every 9 to 12 months"],
    faqs: [["Will I look overfilled?", "Cleo plans filler around your whole face and often uses less than clients expect. She restores volume in stages and reviews your result at 2 weeks before adding more."], ["How much filler will I need?", "It depends on how much volume you’ve lost and where. Many clients need 1 to 3 syringes across one or two visits. Cleo gives you a clear plan at your free consultation."], ["Does everyone lose facial volume?", "Yes, everyone loses some volume with age. How much, and where, varies with genetics, skin and weight. Some people notice it in their 30s, others much later."], ["Can I treat volume loss after weight loss medication?", "Yes. Cleo usually recommends waiting until your weight is stable, so the result lasts and your face stays in proportion."]]
  },
  "Skin Hydration & Radiance": {
    h1: "Dull, Dry Skin Treatment in Oakville",
    line: "Hydration you can see, without changing your features.",
    img: "treatment-skin-boosters.webp",
    first: "Cleo R., a Nurse Practitioner, offers treatment for dull, dry skin in Oakville, from skin boosters to IV hydration, matched to what’s causing it.",
    causes: [["Less hyaluronic acid", "Your skin holds less of its own hyaluronic acid as you age, so it holds less water."], ["Winter and indoor heat", "Ontario winters and indoor heating pull moisture from the skin for months at a time."], ["Sun damage", "UV light weakens the skin barrier, which lets water escape."], ["Lifestyle", "Short sleep, stress, alcohol and low water intake all show on the skin."]],
    options: [["Skin boosters", "Light hyaluronic acid placed just under the skin for hydration and glow.", "Dull, dry or crepey skin on the face, neck and hands", "skin"], ["IV hydration", "Fluids and nutrients delivered directly, after a health screening.", "Feeling run-down or dehydrated", "iv"], ["A skincare review", "Cleo looks at what you use now and what to change.", "Everyone, alongside treatment", null]],
    guide: [["Your skin looks flat and tired", "Skin boosters"], ["Your skin feels tight and flaky", "A skincare review first, then boosters if needed"], ["You feel run-down as well", "IV hydration after screening"], ["You have an event in a month", "A skin booster session 2 to 4 weeks before"]],
    expect: ["Skin often looks fresher within a few days.", "Hydration builds across a series of 2 to 3 sessions.", "Results last around 6 months with a maintenance session."],
    care: ["Use a gentle cleanser and a hyaluronic acid serum", "Run a humidifier through the winter", "Wear SPF every day", "Drink water steadily through the day"],
    faqs: [["What’s the difference between dry and dehydrated skin?", "Dry skin lacks oil. Dehydrated skin lacks water. Any skin type can be dehydrated, including oily skin. Cleo checks which one you have before suggesting treatment."], ["Are skin boosters better than a facial?", "They do different jobs. Facials work on the surface. Skin boosters hydrate from within and last for months. Many clients use both."], ["How soon before an event should I book?", "Book 2 to 4 weeks before. That gives small bumps time to settle and lets the hydration build."], ["Do skin boosters work on darker skin?", "Yes. They don’t affect pigment. Cleo plans injections to limit bruising, which can leave a longer-lasting mark on deeper skin tones."]]
  },
  "Wellness & Weight Management": {
    h1: "Wellness & Weight Management in Oakville",
    line: "Support built on your health history.",
    img: "treatment-weight-loss.webp",
    first: "Cleo R., a Nurse Practitioner, offers medically supervised weight management in Oakville for adults who want support based on a full health assessment.",
    causes: [["Hormones and metabolism", "Hormones affect hunger, fullness and how your body stores fat."], ["Medications", "Some medications change appetite or make weight harder to lose."], ["Sleep and stress", "Short sleep and long-term stress both raise appetite and cravings."], ["Life stages", "Menopause, recovery after pregnancy and ageing all change how your body responds."]],
    options: [["Medical weight loss program", "A health assessment, a personalized plan and regular check-ins.", "Adults who want medical supervision", "weight"], ["IV infusions", "Hydration and nutrient support, after screening.", "Support during a demanding period", "iv"], ["Fat dissolving", "Treats a small pocket of fat under the chin once your weight is stable.", "A double chin that stays after weight loss", "fat"]],
    guide: [["You’ve tried diets without lasting change", "A medical weight loss assessment"], ["You have a health condition or take regular medication", "An assessment first, sometimes with your family doctor"], ["Your weight is stable but a double chin remains", "Fat dissolving injections"], ["You feel run-down", "IV hydration after screening"]],
    expect: ["Progress is gradual, and Cleo tracks it at each check-in.", "Your plan changes as your body responds.", "If the program isn’t right for you, Cleo will tell you why."],
    care: ["Keep a regular sleep schedule", "Include protein at each meal to protect muscle", "Add strength training twice a week", "Bring your questions to every check-in"],
    faqs: [["Do I need a referral?", "No. You can book a free consultation directly. If your health history calls for it, Cleo may coordinate with your family doctor."], ["Is this a diet program?", "No. It’s medical care. Your plan starts with a health assessment, and Cleo monitors your progress and side effects at regular check-ins."], ["What happens at the first appointment?", "Cleo reviews your health history, medications and goals, and may ask for recent bloodwork. You’ll leave knowing whether the program suits you."], ["How long until I see results?", "Most clients see gradual change over the first few months. Cleo sets a safe pace with you, based on your health."]]
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/concernContent.js", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
window.LB_IMG = "/assets/images/";
window.LB_DATA = {
  treatments: [{
    slug: "botox",
    name: "Botox & Neurotoxins",
    image: LB_IMG + "treatment-botox.webp",
    hero: "Refined expression. Naturally refreshed.",
    seoHeading: "Botox in Oakville",
    summary: "Soften the appearance of fine lines while preserving natural facial expression.",
    considerationTitle: "What Cleo considers",
    considerations: ["Facial anatomy", "Muscle movement", "Existing lines", "Desired level of movement", "Overall facial balance", "Your personal goals"],
    introduction: ["Botox and other neuromodulator treatments can help soften the appearance of certain facial lines while maintaining the natural movement and expression that make your face yours.", "At Luxury Beauty by Cleo R., treatment begins with assessment rather than simply following a standard injection pattern."],
    cta: "Discuss your goals with Cleo"
  }, {
    slug: "fillers",
    name: "Dermal Fillers",
    image: LB_IMG + "treatment-fillers-woman.png",
    hero: "Restore. Define. Balance.",
    seoHeading: "Dermal Fillers in Oakville",
    summary: "Restore or enhance facial volume and definition with a personalized, balanced approach.",
    considerationTitle: "What matters",
    considerations: ["Balance", "Proportion", "Facial structure", "Volume", "Symmetry", "Individual aesthetic goals"],
    introduction: ["Dermal fillers can be used to restore lost volume, enhance selected facial features, and support facial definition.", "At Luxury Beauty by Cleo R., filler is approached with restraint and intention."],
    cta: "Book a consultation"
  }, {
    slug: "lips",
    name: "Lip Filler",
    image: LB_IMG + "treatment-lip-filler.png",
    hero: "Shape, balance and fullness.",
    seoHeading: "Lip Filler in Oakville",
    summary: "Natural-looking lip enhancement planned around your proportions.",
    cta: "Book a free consultation"
  }, {
    slug: "fat",
    name: "Fat Dissolving",
    image: LB_IMG + "treatment-fat-dissolving.webp",
    hero: "Targeted refinement, approached with intention.",
    seoHeading: "Fat Dissolving in Oakville",
    summary: "A non-surgical approach for selected areas of stubborn fat within a personalized plan.",
    considerationTitle: "Your consultation can cover",
    considerations: ["The area you'd like to address", "Your goals", "Treatment suitability", "What the process involves", "Expected recovery", "Follow-up care"],
    introduction: ["Fat-dissolving treatments offer a non-surgical option for selected areas of stubborn fat.", "Suitability depends on the individual, treatment area, medical history, and desired outcome."],
    cta: "Explore your options"
  }, {
    slug: "weight",
    name: "Weight Loss Treatments",
    image: LB_IMG + "treatment-weight-loss.webp",
    hero: "Personalized support for your wellness journey.",
    seoHeading: "Medical Weight Loss in Oakville",
    summary: "Medical-grade support designed around individual wellness and weight-management goals.",
    considerationTitle: "A thoughtful approach",
    considerations: ["Health history", "Personal goals", "Current circumstances", "Treatment suitability", "Ongoing monitoring", "Individual support"],
    introduction: ["Weight management is personal.", "At Luxury Beauty by Cleo R., weight loss services are approached through a medical lens."],
    cta: "Discuss your wellness goals"
  }, {
    slug: "skin",
    name: "Skin Boosters",
    image: LB_IMG + "treatment-skin-boosters.webp",
    hero: "Hydration from within. Skin that looks refreshed.",
    seoHeading: "Skin Boosters in Oakville",
    summary: "Support hydration and skin quality for a refreshed, healthy-looking glow.",
    considerationTitle: "Your consultation can cover",
    considerations: ["Skin concerns", "Treatment suitability", "Expected outcomes", "Treatment process", "Aftercare", "Recommended follow-up"],
    introduction: ["Skin boosters are designed to support skin hydration and improve the overall appearance of the skin."],
    cta: "Talk about your skin goals"
  }, {
    slug: "iv",
    name: "IV Infusions",
    image: LB_IMG + "treatment-iv-infusion.webp",
    hero: "Wellness, hydration, and personalized care.",
    seoHeading: "IV Infusions in Oakville",
    summary: "A personalized wellness experience focused on hydration and nutrient support.",
    considerationTitle: "Care starts with safety",
    considerations: ["Your health history", "Your wellness goals", "Eligibility", "Personalized screening", "Infusion suitability", "Follow-up needs"],
    introduction: ["IV infusions provide a personalized wellness experience focused on hydration and nutrient support."],
    cta: "Explore IV wellness"
  }],
  concerns: [{
    name: "Fine Lines & Wrinkles",
    heading: "A softer, more refreshed appearance.",
    treatment: "Botox & Neurotoxins",
    text: "Explore options designed to soften the appearance of lines while maintaining natural facial movement."
  }, {
    name: "Facial Volume & Definition",
    heading: "Balance and definition that still feels like you.",
    treatment: "Dermal Fillers",
    text: "A personalized assessment can help determine whether restoring or enhancing selected areas may support your desired appearance."
  }, {
    name: "Lips",
    heading: "Enhancement with balance in mind.",
    treatment: "Dermal Fillers",
    text: "Personalized lip enhancement focused on harmony, proportion, and natural-looking definition."
  }, {
    name: "Skin Hydration & Radiance",
    heading: "Healthy-looking skin starts with understanding your skin.",
    treatment: "Skin Boosters",
    text: "Explore care designed to support hydration and the overall appearance of the skin."
  }, {
    name: "Wellness & Weight Management",
    heading: "Your wellness journey deserves personalized care.",
    treatment: "Weight Loss Treatments",
    text: "Medical assessment and individualized support can help determine the approach that is right for you."
  }],
  faqs: [["Do I need to know what treatment I want before booking?", "No. You can begin with a consultation and discuss your goals with Cleo. Together, you can determine what approach, if any, may be appropriate."], ["How do I book an appointment?", "Call 416-294-0452 or send a direct message to @luxury_beauty_aestheticz on Instagram to request an appointment."], ["How do I know which treatment is right for me?", "That is what the consultation is for. Cleo considers your goals, medical history, anatomy, skin, and individual needs before recommending an approach."], ["Do you treat both women and men?", "Yes. Luxury Beauty by Cleo R. welcomes adults interested in personalized aesthetic and wellness care."]],
  comparisons: [{
    src: "IMG_9486.PNG",
    sw: 1290,
    sh: 1276,
    before: {
      x: 480,
      y: 0,
      width: 810,
      height: 700
    },
    after: {
      x: 480,
      y: 720,
      width: 810,
      height: 556
    }
  }, {
    src: "IMG_9487.PNG",
    sw: 1290,
    sh: 1288,
    before: {
      x: 440,
      y: 0,
      width: 850,
      height: 635
    },
    after: {
      x: 440,
      y: 655,
      width: 850,
      height: 633
    }
  }, {
    src: "IMG_9494.PNG",
    sw: 1290,
    sh: 1210,
    before: {
      x: 60,
      y: 95,
      width: 590,
      height: 1115
    },
    after: {
      x: 690,
      y: 95,
      width: 540,
      height: 1115
    }
  }, {
    src: "IMG_9498.PNG",
    sw: 1290,
    sh: 1471,
    before: {
      x: 0,
      y: 125,
      width: 650,
      height: 1346
    },
    after: {
      x: 658,
      y: 125,
      width: 632,
      height: 1346
    }
  }, {
    src: "IMG_9500.PNG",
    sw: 1185,
    sh: 689,
    before: {
      x: 0,
      y: 74,
      width: 578,
      height: 444
    },
    after: {
      x: 600,
      y: 74,
      width: 585,
      height: 444
    }
  }, {
    src: "IMG_9503.PNG",
    sw: 1290,
    sh: 512,
    before: {
      x: 50,
      y: 100,
      width: 572,
      height: 412
    },
    after: {
      x: 680,
      y: 100,
      width: 568,
      height: 412
    }
  }],
  reviews: [{
    name: "Lori Dupan",
    text: "Cleo is very professional, gentle, and knowledgeable. She did a consultation before my Botox and filler treatment and answered all my questions. I was very happy with the results and definitely recommend her."
  }, {
    name: "heather glen",
    text: "Really pleased with my treatment. Cleo is so skilled and made me feel comfortable. The results were how I wanted. Highly recommend!"
  }, {
    name: "Alexis Hamilton",
    text: "Cleo is so excellent at her job! I went in to get lip fillers for the first time and she made me feel so at ease! The results were exactly what I wanted!",
    services: ["BOTOX treatments", "Lip fillers"]
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

// ui_kits/website/scrollReveal.js
try { (() => {
// Port of luxurybeauty-cloe-site components/scroll-reveal.tsx + site-header nav entrance (motion/react → CSS transitions).
// Pending elements are tracked with a data attribute and re-queried on every check, so nothing can get stuck hidden.
(() => {
  const TEXT = ["main h1", "main h2", "main h3", "main h4", "main p", "main blockquote", "main li", "main dt", "main dd", "main article > strong"].join(", ");
  const IMG = "main img:not([alt=''])";
  const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";
  let bound = false;
  const reduced = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const off = el => el.closest("[data-scroll-reveal='off']");
  const inView = (el, margin) => {
    const r = el.getBoundingClientRect(),
      vh = window.innerHeight || document.documentElement.clientHeight,
      bottom = vh * (1 - margin);
    if (!r.width && !r.height) return false;
    return r.top < bottom && r.bottom > 0;
  };
  const show = el => {
    const kind = el.dataset.lbr,
      d = +el.dataset.lbrDelay || 0;
    el.dataset.lbr = "done";
    if (kind === "img") {
      const go = () => {
        el.style.transition = `opacity 1100ms ${EASE}, filter 1100ms ${EASE}`;
        el.style.opacity = "1";
        el.style.filter = "blur(0px)";
      };
      if (el instanceof HTMLImageElement && !el.complete) {
        el.addEventListener("load", go, {
          once: true
        });
        el.addEventListener("error", go, {
          once: true
        });
        setTimeout(go, 2500);
      } else go();
    } else {
      el.style.transition = `opacity 950ms ${EASE} ${d}ms, transform 950ms ${EASE} ${d}ms`;
      el.style.opacity = "1";
      el.style.transform = "translateY(0px)";
    }
    setTimeout(() => {
      el.style.transition = "";
    }, 2600);
  };
  const check = () => {
    document.querySelectorAll("[data-lbr='text'],[data-lbr='img']").forEach(el => {
      if (inView(el, el.dataset.lbr === "img" ? 0.05 : 0.07)) show(el);
    });
  };
  let queued = false;
  const onScroll = () => {
    if (queued) return;
    queued = true;
    setTimeout(() => {
      queued = false;
      check();
    }, 60);
  };
  window.LB_scrollReveal = () => {
    if (reduced()) return;
    if (!bound) {
      addEventListener("scroll", onScroll, {
        passive: true
      });
      addEventListener("resize", onScroll);
      bound = true;
    }
    const groups = new Map();
    document.querySelectorAll(TEXT).forEach(el => {
      if (off(el) || el.dataset.lbr) return;
      const g = el.closest("section, article, footer") || el.parentElement || document.body;
      const i = groups.get(g) || 0;
      groups.set(g, i + 1);
      el.dataset.lbr = "text";
      el.dataset.lbrDelay = Math.min(i * 75, 300);
      el.style.transition = "none";
      el.style.opacity = "0";
      el.style.transform = "translateY(64px)";
    });
    document.querySelectorAll(IMG).forEach(el => {
      if (off(el) || el.dataset.lbr) return;
      el.dataset.lbr = "img";
      el.style.transition = "none";
      el.style.opacity = "0.4";
      el.style.filter = "blur(20px)";
    });
    document.body.offsetHeight;
    requestAnimationFrame(check);
    setTimeout(check, 120);
  };
  // safety net: anything still pending after it's been on screen gets shown
  setInterval(() => {
    if (document.querySelector("[data-lbr='text'],[data-lbr='img']")) check();
  }, 700);
  let navDone = false;
  window.LB_navEntrance = () => {
    if (navDone || reduced()) return;
    const nav = document.querySelector("header nav");
    if (!nav) return;
    navDone = true;
    nav.animate([{
      opacity: 0,
      transform: "translateY(-16px)"
    }, {
      opacity: 1,
      transform: "translateY(0px)"
    }], {
      duration: 650,
      easing: EASE
    });
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/scrollReveal.js", error: String((e && e.message) || e) }); }

// ui_kits/website/seoMeta.js
try { (() => {
// Rank Math–style meta: focus keyword leads the title (≤60 chars) and appears in the description (120–160 chars) and URL.
// robots: index,follow for all content pages; noindex,follow for utility/legal/thank-you pages.
window.LB_SITE = {
  url: "https://luxurybeautyaesthetic.com",
  name: "Luxury Beauty by Cleo R.",
  image: "/assets/images/cleo-hero-blazer.webp"
};
const IDX = "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  NOIDX = "noindex, follow";
window.LB_META = {
  pages: {
    Home: {
      path: "/",
      focus: "medical spa in Oakville",
      title: "Medical Spa in Oakville | Botox & Fillers by Cleo R., NP",
      desc: "Medical spa in Oakville led by Cleo R., a Board-Certified Nurse Practitioner. Botox, dermal fillers and skin treatments. Book a free consultation."
    },
    Treatments: {
      path: "/treatments",
      focus: "aesthetic treatments in Oakville",
      title: "Aesthetic Treatments in Oakville | Luxury Beauty by Cleo R.",
      desc: "Aesthetic treatments in Oakville: Botox, dermal fillers, lip filler, fat dissolving, skin boosters, IV therapy and medical weight loss. Free NP consultation."
    },
    Concerns: {
      path: "/concerns",
      focus: "skin concerns Oakville",
      title: "Skin Concerns Treated in Oakville | Luxury Beauty by Cleo R.",
      desc: "Skin concerns treated in Oakville, from fine lines and volume loss to dull skin and weight. Cleo R., NP, matches each concern to the right treatment."
    },
    About: {
      path: "/about",
      focus: "nurse practitioner in Oakville",
      title: "Nurse Practitioner in Oakville: Meet Cleo R. | Luxury Beauty",
      desc: "Nurse practitioner in Oakville Cleo R. is board-certified and leads every assessment and treatment at Luxury Beauty. Learn about her approach to care."
    },
    Difference: {
      path: "/cleo-difference",
      focus: "assessment-first aesthetics",
      title: "Assessment-First Aesthetics in Oakville | Cleo R., NP",
      desc: "Assessment-first aesthetics in Oakville. Cleo R., NP, studies your features, skin and health history before recommending any treatment. See how she works."
    },
    Visit: {
      path: "/your-visit",
      focus: "free aesthetic consultation in Oakville",
      title: "Free Aesthetic Consultation in Oakville | What to Expect",
      desc: "Free aesthetic consultation in Oakville with Cleo R., Nurse Practitioner. What happens at your first visit, how long it takes and how to prepare."
    },
    Faq: {
      path: "/faq",
      focus: "Botox and filler FAQs",
      title: "Botox and Filler FAQs | Oakville Medical Spa | Luxury Beauty",
      desc: "Botox and filler FAQs answered by Cleo R., NP: results, downtime, safety, how long treatments last and what to expect at your Oakville consultation."
    },
    Inclusive: {
      path: "/inclusive-care",
      focus: "aesthetics for skin of color",
      title: "Aesthetics for Skin of Color in Oakville | Cleo R., NP",
      desc: "Aesthetics for skin of color in Oakville. Cleo R., NP, plans Botox, filler and skin treatments around your skin tone, features and healing response."
    },
    BeforeAfter: {
      path: "/before-after",
      focus: "before and after Oakville",
      title: "Botox and Filler Before and After Photos | Oakville",
      desc: "Before and after photos from Oakville clients of Cleo R., NP, sorted by treatment area. Real results from Botox, dermal fillers and lip filler."
    },
    Contact: {
      path: "/contact",
      focus: "book a consultation in Oakville",
      title: "Book a Consultation in Oakville | Luxury Beauty by Cleo R.",
      desc: "Book a consultation in Oakville with Cleo R., Nurse Practitioner. Free assessments for Botox, fillers and skin treatments. Call 416-294-0452."
    },
    Locations: {
      path: "/locations",
      focus: "med spa locations Oakville",
      title: "Med Spa Locations | Oakville, Burlington, Milton & Mississauga",
      desc: "One NP-led med spa in Oakville serving Burlington, Milton and Mississauga. Find drive times, directions and treatments for your area. Free consultation."
    },
    Policies: {
      path: "/policies",
      title: "Clinic Policies | Luxury Beauty by Cleo R.",
      desc: "Booking, deposit and cancellation policies for Luxury Beauty by Cleo R. in Oakville.",
      robots: NOIDX
    },
    Privacy: {
      path: "/privacy",
      title: "Privacy Policy | Luxury Beauty by Cleo R.",
      desc: "How Luxury Beauty by Cleo R. collects, uses and protects your personal and health information.",
      robots: NOIDX
    },
    ThankYou: {
      path: "/thank-you",
      title: "Thank You | Luxury Beauty by Cleo R.",
      desc: "Your consultation request has been received.",
      robots: NOIDX
    },
    NotFound: {
      path: "/404",
      title: "Page Not Found | Luxury Beauty by Cleo R.",
      desc: "This page could not be found.",
      robots: NOIDX
    }
  },
  areas: {
    milton: {
      focus: "med spa Milton",
      title: "Med Spa Milton | NP-Led Botox, Fillers & Weight Loss",
      desc: "Med spa serving Milton, ON. Botox, dermal fillers, medical weight loss and IV infusions by Cleo R., Board-Certified NP, 15–20 minutes away. Free consultation."
    },
    mississauga: {
      focus: "med spa Mississauga",
      title: "Med Spa Mississauga | NP-Led Botox & Lip Filler Nearby",
      desc: "Med spa serving Mississauga, ON. Botox, lip filler, dermal fillers and skin boosters by Cleo R., Board-Certified NP, just west in Oakville. Free consultation."
    },
    burlington: {
      focus: "med spa Burlington",
      title: "Med Spa Burlington | NP-Led Botox & Fillers Near You",
      desc: "Med spa serving Burlington, ON. Botox, dermal fillers, lip filler and skin boosters by Cleo R., Board-Certified NP, 20 minutes away in Oakville. Free consultation."
    }
  },
  treatments: {
    botox: {
      path: "/treatments/botox-neurotoxins",
      focus: "Botox in Oakville",
      title: "Botox in Oakville | NP-Led Neurotoxin Injections",
      desc: "Botox in Oakville by Cleo R., Nurse Practitioner. Soften forehead lines, frown lines and crow’s feet while keeping natural movement. Free consultation."
    },
    fillers: {
      path: "/treatments/dermal-fillers",
      focus: "dermal fillers in Oakville",
      title: "Dermal Fillers in Oakville | Cheeks, Chin & Jawline",
      desc: "Dermal fillers in Oakville by Cleo R., NP. Restore volume and define cheeks, chin and jawline with a plan built around your whole face. Free consultation."
    },
    lips: {
      path: "/treatments/lip-filler",
      focus: "lip filler in Oakville",
      title: "Lip Filler in Oakville | Natural-Looking Lips by an NP",
      desc: "Lip filler in Oakville by Cleo R., Nurse Practitioner. Add shape, balance and fullness while your lips still look like your own. Book a free consultation."
    },
    fat: {
      path: "/treatments/fat-dissolving",
      focus: "fat dissolving in Oakville",
      title: "Fat Dissolving in Oakville | Double Chin Injections",
      desc: "Fat dissolving in Oakville by Cleo R., NP. Non-surgical injections to reduce fat under the chin and refine your profile. Book a free consultation."
    },
    weight: {
      path: "/treatments/weight-loss",
      focus: "medical weight loss in Oakville",
      title: "Medical Weight Loss in Oakville | NP-Supervised Program",
      desc: "Medical weight loss in Oakville, supervised by Cleo R., Nurse Practitioner. A full health assessment, regular check-ins and a plan that fits your life."
    },
    skin: {
      path: "/treatments/skin-boosters",
      focus: "skin boosters in Oakville",
      title: "Skin Boosters in Oakville | Hydration & Glow Injections",
      desc: "Skin boosters in Oakville by Cleo R., NP. Injectable hydration that improves texture and glow without changing your features. Book a free consultation."
    },
    iv: {
      path: "/treatments/iv-infusions",
      focus: "IV therapy in Oakville",
      title: "IV Therapy in Oakville | NP-Screened IV Infusions",
      desc: "IV therapy in Oakville with Cleo R., Nurse Practitioner. Hydration and nutrient infusions, always with a health screening first. Book your visit."
    }
  },
  concerns: {
    "Fine Lines & Wrinkles": {
      slug: "fine-lines-wrinkles",
      focus: "wrinkle treatment in Oakville",
      title: "Wrinkle Treatment in Oakville | Botox for Fine Lines",
      desc: "Wrinkle treatment in Oakville by Cleo R., NP. Soften forehead lines, frown lines and crow’s feet with options matched to your lines and goals."
    },
    "Facial Volume & Definition": {
      slug: "facial-volume-definition",
      focus: "facial volume loss treatment",
      title: "Facial Volume Loss Treatment in Oakville | Dermal Fillers",
      desc: "Facial volume loss treatment in Oakville. Cleo R., NP, restores hollow cheeks, temples and jawline definition with fillers planned in proportion."
    },
    "Skin Hydration & Radiance": {
      slug: "skin-hydration-radiance",
      focus: "dull dry skin treatment",
      title: "Dull, Dry Skin Treatment in Oakville | Skin Boosters",
      desc: "Dull, dry skin treatment in Oakville by Cleo R., NP. Skin boosters and IV hydration matched to what is causing your dullness. Free consultation."
    },
    "Wellness & Weight Management": {
      slug: "wellness-weight-management",
      focus: "weight management in Oakville",
      title: "Weight Management in Oakville | NP-Led Wellness Care",
      desc: "Weight management in Oakville supervised by Cleo R., Nurse Practitioner. Medical support built on your health history, bloodwork and goals."
    }
  }
};
const slugify = s => s.toLowerCase().replace(/&/g, " ").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
window.LB_getMeta = (page, key) => {
  const M = window.LB_META;
  let m;
  if (page === "area") {
    const A = (window.LB_AREAS || {})[key] || {};
    m = {
      path: A.path || "/med-spa-" + key,
      ...(M.areas[key] || {}),
      schema: window.LB_areaSchema && window.LB_areaSchema(key)
    };
  } else if (page === "treatment") {
    const t = M.treatments[key] || {};
    m = {
      path: "/treatments/" + key,
      ...t
    };
  } else if (page === "concern") {
    const c = M.concerns[key] || {
      title: key + " Treatment in Oakville | Luxury Beauty",
      desc: key + " treatment in Oakville by Cleo R., Nurse Practitioner. Options matched to your goals, starting with a free consultation."
    };
    m = {
      ...c,
      path: "/concerns/" + (c.slug || slugify(key))
    };
  } else m = M.pages[page] || M.pages.Home;
  return {
    robots: IDX,
    ...m,
    canonical: window.LB_SITE.url + (m.path === "/" ? "/" : m.path)
  };
};
window.LB_routeToPath = r => window.LB_getMeta(r.page, r.key).path;
window.LB_pathToRoute = p => {
  const D = window.LB_DATA,
    M = window.LB_META;
  p = (p || "/").replace(/\/+$/, "") || "/";
  let m = p.match(/^\/treatments\/([^/]+)$/);
  if (m) {
    const t = D.treatments.find(t => window.LB_getMeta("treatment", t.slug).path === p);
    return t ? {
      page: "treatment",
      key: t.slug
    } : {
      page: "NotFound"
    };
  }
  m = p.match(/^\/concerns\/([^/]+)$/);
  if (m) {
    const c = D.concerns.find(c => c.name !== "Lips" && window.LB_getMeta("concern", c.name).path === p);
    return c ? {
      page: "concern",
      key: c.name
    } : {
      page: "NotFound"
    };
  }
  m = p.match(/^\/med-spa-([a-z-]+)$/);
  if (m) return (window.LB_AREAS || {})[m[1]] ? {
    page: "area",
    key: m[1]
  } : {
    page: "NotFound"
  };
  const k = Object.keys(M.pages).find(k => M.pages[k].path === p);
  return {
    page: k && k !== "NotFound" ? k : "NotFound"
  };
};
window.LB_applyMeta = (page, key) => {
  const m = window.LB_getMeta(page, key),
    S = window.LB_SITE,
    h = document.head;
  const set = (attr, name, val) => {
    let el = h.querySelector(`meta[${attr}="${name}"]`);
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute(attr, name);
      h.appendChild(el);
    }
    el.setAttribute("content", val);
  };
  document.title = m.title;
  set("name", "description", m.desc);
  set("name", "robots", m.robots);
  let c = h.querySelector('link[rel="canonical"]');
  if (!c) {
    c = document.createElement("link");
    c.rel = "canonical";
    h.appendChild(c);
  }
  c.href = m.canonical;
  set("property", "og:locale", "en_CA");
  set("property", "og:type", page === "Home" ? "website" : "article");
  set("property", "og:title", m.title);
  set("property", "og:description", m.desc);
  set("property", "og:url", m.canonical);
  set("property", "og:site_name", S.name);
  set("property", "og:image", S.url + S.image);
  set("name", "twitter:card", "summary_large_image");
  set("name", "twitter:title", m.title);
  set("name", "twitter:description", m.desc);
  set("name", "twitter:image", S.url + S.image);
  let ld = document.getElementById("lb-schema");
  if (m.schema) {
    if (!ld) {
      ld = document.createElement("script");
      ld.type = "application/ld+json";
      ld.id = "lb-schema";
      h.appendChild(ld);
    }
    ld.textContent = JSON.stringify(m.schema);
  } else if (ld) ld.remove();
  return m;
};
window.LB_areaSchema = key => {
  const A = (window.LB_AREAS || {})[key];
  if (!A) return null;
  const S = window.LB_SITE,
    url = S.url + A.path;
  return {
    "@context": "https://schema.org",
    "@graph": [{
      "@type": "MedicalBusiness",
      "@id": S.url + "/#business",
      "name": S.name,
      "url": S.url,
      "telephone": "+1-416-294-0452",
      "image": S.url + S.image,
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "3060 Preserve Dr",
        "addressLocality": "Oakville",
        "addressRegion": "ON",
        "postalCode": "L6M 4L9",
        "addressCountry": "CA"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 43.4755857,
        "longitude": -79.7364751
      },
      "hasMap": "https://maps.app.goo.gl/8nuEqr8YRCzXv4A5A",
      "sameAs": ["https://www.instagram.com/luxury_beauty_aestheticz/"],
      "areaServed": [{
        "@type": "City",
        "name": "Oakville"
      }, {
        "@type": "City",
        "name": A.city
      }],
      "founder": {
        "@type": "Person",
        "name": "Cleo R.",
        "jobTitle": "Board-Certified Nurse Practitioner"
      }
    }, {
      "@type": "WebPage",
      "@id": url,
      "url": url,
      "name": window.LB_META.areas[key].title,
      "about": {
        "@id": S.url + "/#business"
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": S.url + "/"
        }, {
          "@type": "ListItem",
          "position": 2,
          "name": "Locations",
          "item": S.url + "/locations"
        }, {
          "@type": "ListItem",
          "position": 3,
          "name": "Med Spa " + A.city,
          "item": url
        }]
      }
    }, {
      "@type": "FAQPage",
      "mainEntity": A.faqs.map(([q, a]) => ({
        "@type": "Question",
        "name": q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": a
        }
      }))
    }]
  };
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/seoMeta.js", error: String((e && e.message) || e) }); }

// ui_kits/website/treatmentContent.js
try { (() => {
// Treatment page content (12-section template, pricing removed). Typical clinical norms; Cleo to confirm before launch.
window.LB_TX = {
  botox: {
    whatTitle: "What are Botox and neuromodulators?",
    h1: "Botox & Neurotoxin Injections in Oakville",
    line: "Softer lines. Your own expression.",
    first: "Cleo R., a Nurse Practitioner, offers Botox and other neuromodulator injections in Oakville to soften forehead lines, frown lines and crow’s feet while keeping natural movement.",
    facts: [["Appointment", "15–30 minutes"], ["Results", "Start in 3–5 days, full at 2 weeks"], ["Lasts", "Typically 3–4 months"], ["Downtime", "None for most people"]],
    what: ["Neuromodulators are purified proteins that relax the specific muscles that crease the skin when you frown, squint or raise your brows. When the muscle moves less, the line above it softens.", "Cleo uses small, measured doses placed where your muscles pull hardest. The aim is a rested look. You should still be able to frown, smile and raise your brows. Results wear off as the muscle recovers, so nothing is permanent."],
    areas: [["Forehead lines", "Horizontal lines from raising your brows"], ["Frown lines", "The vertical “11s” between the brows"], ["Crow’s feet", "Fine lines at the outer corners of the eyes"], ["Bunny lines", "Creases on the sides of the nose"], ["Lip lines & lip flip", "Fine lines above the lip; a subtle upper-lip roll"], ["Chin & jaw", "Chin dimpling, and jaw muscles tight from clenching"]],
    fit: ["You want to soften lines that appear when you move your face", "You’d like a gradual change with no downtime", "You prefer a result that wears off if you change your mind"],
    wait: ["You are pregnant or breastfeeding", "You have a neuromuscular condition", "You have an infection where you’d be treated", "You’ve reacted to a neuromodulator before"],
    steps: [["Free consultation", "Cleo watches how your face moves and asks about your history and goals.", "15 min"], ["Your plan", "She marks the points, explains the dose and you sign consent.", "5 min"], ["Treatment", "A few quick injections with a very fine needle. No numbing needed for most people.", "10 min"], ["Follow-up", "A check at 2 weeks, with a small top-up if an area needs it.", "2 weeks"]],
    results: "You’ll notice a softening from day 3–5. The full effect shows at 2 weeks and typically lasts 3–4 months. Many clients find results last longer after a few regular treatments.",
    effects: "Small bumps at the injection points fade within 20 minutes. Pinpoint bruising and a mild headache are common and short-lived. A temporary heavy brow or eyelid is rare and settles as the product wears off.",
    after: ["Stay upright for 4 hours", "Don’t rub or massage the area that day", "Skip hard exercise until the next day", "Avoid facials and saunas for 24 hours"],
    faqs: [["Will I look frozen?", "Not with the dose Cleo uses. She watches how your face moves and doses each muscle for softening, not stopping. You’ll still be able to frown and raise your brows. If you want more stillness, she can add a little at your 2-week check."], ["How long does it last?", "Typically 3 to 4 months. It depends on your muscle strength, your metabolism and the area treated. Many clients find their results last longer after a few regular treatments."], ["When will I see results?", "You’ll start to see a change after 3 to 5 days. The full result shows at about 2 weeks, which is when Cleo checks in with you."], ["Does it hurt?", "Most clients describe a quick pinch. Cleo uses a very fine needle, and each injection takes a second or two. Most people don’t need numbing cream."], ["What’s the difference between Botox and filler?", "Neuromodulators relax the muscles that cause lines when you move. Filler adds volume and shape. Many clients need only one of them. Cleo will tell you which fits your goals."], ["Can men get Botox?", "Yes. Men often need different doses because their facial muscles tend to be stronger. Cleo adjusts placement to keep brows and expressions looking natural."]],
    unique: "Will I look frozen?",
    related: ["fillers", "lips", "skin"],
    review: "heather glen"
  },
  fillers: {
    whatTitle: "What are dermal fillers?",
    h1: "Dermal Fillers in Oakville",
    line: "Balance and definition, in proportion.",
    first: "Cleo R., a Nurse Practitioner, offers dermal fillers in Oakville to restore volume and define the cheeks, chin and jawline, planned around your whole face.",
    facts: [["Appointment", "45–60 minutes"], ["Results", "Visible right away, settled at 2 weeks"], ["Lasts", "Typically 9–18 months by area"], ["Downtime", "Swelling for a few days"]],
    what: ["Dermal fillers are hyaluronic acid gels. Your body already makes hyaluronic acid, and the gel holds water to add structure where your face has lost volume or definition.", "Cleo uses firmer gels for structure (cheeks, chin, jaw) and softer ones where movement matters. Hyaluronic acid filler is temporary and can be dissolved with an enzyme if needed. Filler can add shape and support. It can’t tighten loose skin or replace surgery."],
    areas: [["Cheeks", "Lift and support lost with age"], ["Chin", "Projection and balance with the nose"], ["Jawline", "A clearer edge from ear to chin"], ["Under-eyes", "Soft hollows, for suitable candidates only"], ["Smile lines", "Support for deep folds beside the mouth"], ["Temples", "Hollows that make the face look tired"]],
    fit: ["You’ve noticed lost volume or flatness", "You want more definition in one area", "You prefer a reversible result"],
    wait: ["You are pregnant or breastfeeding", "You have an infection or dental work booked", "You take blood thinners", "You have an autoimmune condition"],
    steps: [["Free consultation", "Cleo assesses your face from every angle and explains what filler can and can’t do for you.", "20 min"], ["Your plan", "Areas, amount and product, agreed before you sign consent.", "10 min"], ["Treatment", "Numbing, then small injections with a needle or blunt cannula.", "20–30 min"], ["Follow-up", "A check at 2 weeks once swelling settles.", "2 weeks"]],
    results: "You’ll see the change right away. Swelling settles over 1–2 weeks, and the final shape shows at about 2 weeks. Filler typically lasts 9 to 18 months, longer in firmer areas like the chin and jaw.",
    effects: "Swelling, tenderness and bruising are common for a few days. Small firm spots usually settle by themselves. Rare risks include infection and filler blocking a blood vessel. Call the clinic right away if you notice severe pain or skin that turns pale, blue or blotchy.",
    after: ["Skip hard exercise and alcohol for 24 hours", "Avoid saunas and hot yoga for 48 hours", "Don’t press or massage the area", "Wait 2 weeks before dental work"],
    faqs: [["What can filler do, and what can’t it?", "Filler adds volume, structure and definition. It can’t tighten loose skin or lift a face the way surgery can. Cleo will tell you at your consultation if filler isn’t the right tool."], ["How long does filler last?", "Typically 9 to 18 months. Firmer areas such as the chin and jaw tend to last longer. Areas that move a lot, like the lips, break filler down faster."], ["Will it look natural?", "Cleo plans filler around your whole face and often uses less than you expect. She can add more at a later visit. Building up slowly keeps results in proportion."], ["Can filler be dissolved?", "Yes. An enzyme called hyaluronidase breaks down hyaluronic acid filler. Cleo can use it to correct a result or in the rare case of a complication."], ["Does it hurt?", "Most fillers contain a local anesthetic, and Cleo can apply numbing cream first. You’ll feel pressure and some pinching, which most clients find manageable."]],
    unique: "What filler can and can’t do",
    related: ["lips", "botox", "skin"],
    review: "heather glen"
  },
  lips: {
    whatTitle: "What is lip filler?",
    h1: "Lip Filler in Oakville",
    line: "Shape, balance and fullness, in proportion with your face.",
    first: "Cleo R., a Nurse Practitioner, offers lip filler in Oakville for clients who want more volume or definition and still want their lips to look like their own.",
    facts: [["Appointment", "45–60 minutes"], ["Results", "Visible right away, settled at 2 weeks"], ["Lasts", "Typically 6–12 months"], ["Downtime", "Swelling for 2–3 days"]],
    what: ["Lip filler is a hyaluronic acid gel that Cleo places in small amounts in and around the lips. It holds water in the skin, so it adds hydration as well as volume.", "Cleo can define the lip border, lift the Cupid’s bow, add fullness, or even out an upper and lower lip that differ. Hyaluronic acid filler is temporary and can be dissolved, which makes it a good choice for a first lip enhancement."],
    areas: [["Lip border", "A clearer outline that holds lipstick"], ["Cupid’s bow", "A small lift to the peaks of the upper lip"], ["Volume", "Fullness in the upper, lower or both lips"], ["Symmetry", "Evening out one side or one lip"], ["Corners of the mouth", "Support for corners that turn down"], ["Hydration", "A light amount for dry lips, little size change"]],
    fit: ["You want a visible change that still fits your face", "It’s your first time and you want to build gradually", "You prefer a reversible result"],
    wait: ["You are pregnant or breastfeeding", "You have a cold sore or infection near the mouth", "You have dental work within 2 weeks", "You take blood thinners"],
    steps: [["Free consultation", "Cleo looks at your lips from the front and side and explains what suits your face.", "15 min"], ["Your plan", "Amount, placement and consent before anything starts.", "5 min"], ["Numbing", "Numbing cream to make the treatment comfortable.", "15–20 min"], ["Treatment", "Small injections, checking symmetry as she goes. You can watch in a mirror.", "15–30 min"], ["Follow-up", "A check at 2 weeks, once swelling has gone.", "2 weeks"]],
    results: "You’ll see a difference straight away, but lips swell for the first few days. The final shape shows at about 2 weeks. Lip filler typically lasts 6 to 12 months, because your lips move every time you talk and eat.",
    effects: "Swelling, tenderness, bruising and small firm spots are common and settle within 1–2 weeks. On deeper skin tones, a bruise can leave a darker mark that takes longer to fade. Call the clinic right away if you have severe pain or skin that turns pale or blotchy.",
    after: ["Use a cloth-wrapped cold pack for swelling", "Skip exercise, alcohol and saunas for 24 hours", "Leave lip makeup off until the next day", "Sleep with your head raised the first night"],
    faqs: [["Does lip filler hurt?", "Most clients feel a pinch and some pressure. Cleo applies numbing cream first, and the lidocaine in most fillers numbs the area further as she works. You can ask her to pause whenever you need."], ["How much do I need for my first time?", "Many first-time clients start with half a syringe to one syringe. Cleo recommends an amount based on your lip size, your proportions and the change you want. You can build up later."], ["When will the swelling go down?", "Swelling is usually worst in the first two days and settles over about a week. Your lips can look uneven while this happens. Cleo checks your result at around 2 weeks."], ["Can lip filler be dissolved?", "Yes. An enzyme called hyaluronidase breaks down hyaluronic acid filler. Cleo can use it to correct a result you’re unhappy with, or if a rare complication happens."], ["Is lip filler safe for darker skin tones?", "Yes. Hyaluronic acid filler doesn’t affect skin pigment. On deeper skin, a bruise can leave a darker mark that takes longer to fade, so tell Cleo if that has happened before."]],
    unique: "First-timer guidance",
    related: ["fillers", "botox", "skin"],
    review: "Alexis Hamilton"
  },
  fat: {
    whatTitle: "How do fat dissolving injections work?",
    h1: "Double Chin & Fat Dissolving Injections in Oakville",
    line: "A slimmer profile, without surgery.",
    first: "Cleo R., a Nurse Practitioner, offers fat dissolving injections in Oakville to reduce fat under the chin and refine your profile without surgery.",
    facts: [["Appointment", "30–45 minutes"], ["Sessions", "Usually 2–4, 4–6 weeks apart"], ["Results", "Build over 4–6 weeks per session"], ["Downtime", "Swelling for 3–7 days"]],
    what: ["Fat dissolving injections use deoxycholic acid, a substance your body makes to break down dietary fat. Injected into a small pocket of fat, it breaks down the fat cells, and your body clears them over the following weeks.", "The treated fat cells don’t come back. If your weight stays stable, results last. The main area approved for this treatment in Canada is fat under the chin. Cleo will discuss any other area at your consultation."],
    areas: [["Under the chin", "The double chin area, the main treatment area"], ["Jawline profile", "A clearer line between chin and neck"], ["Other small areas", "Discussed at consultation, case by case"]],
    fit: ["You have a small, stubborn pocket of fat under the chin", "Your weight has been stable", "You’re comfortable with a few sessions and some swelling"],
    wait: ["You are pregnant or breastfeeding", "Most of the fullness is loose skin rather than fat", "You have an infection or trouble swallowing", "You plan a large weight change soon"],
    steps: [["Free consultation", "Cleo checks whether the fullness is fat or skin, and sets realistic expectations.", "20 min"], ["Your plan", "Number of sessions, spacing and consent.", "10 min"], ["Treatment", "Cleo marks a grid and makes small injections. Expect a warm, stinging feeling for a few minutes.", "15–20 min"], ["Review", "A check before each new session, 4–6 weeks apart.", "4–6 weeks"]],
    results: "Most clients see a change 4–6 weeks after each session. You’ll usually need 2–4 sessions. The final result shows about 3 months after your last session.",
    effects: "Expect noticeable swelling for 3–7 days, most after the first session. Numbness, tenderness, bruising and firmness under the skin are common and settle over a few weeks. Call the clinic if you notice an uneven smile or trouble swallowing.",
    after: ["Use a cold compress for swelling", "Sleep with your head raised for 2 nights", "Skip hard exercise for 48 hours", "Wear loose collars and plan around visible swelling"],
    faqs: [["How many sessions will I need?", "Most clients need 2 to 4 sessions, spaced 4 to 6 weeks apart. Cleo estimates your number at the consultation and reviews your progress before each session."], ["How swollen will I be?", "Swelling is the main side effect. It’s usually most noticeable after the first session and settles over 3 to 7 days. Plan important events at least 2 weeks after treatment."], ["Is the result permanent?", "The treated fat cells are destroyed and don’t return. If you gain weight, the remaining fat cells can still grow, so a stable weight keeps your result."], ["Does it hurt?", "Most clients feel a stinging or burning sensation for a few minutes after the injections. Cleo uses ice and can apply numbing cream to make it more comfortable."], ["What if my double chin is loose skin?", "Fat dissolving works on fat, not skin. If most of the fullness is skin, Cleo will tell you and suggest other options."]],
    unique: "Sessions and swelling, explained honestly",
    related: ["fillers", "botox", "weight"],
    review: "heather glen"
  },
  weight: {
    whatTitle: "What is medical weight loss?",
    areasIntro: "Your program is built from your health assessment. Cleo explains every part of it before you start.",
    h1: "Medical Weight Loss in Oakville",
    line: "Medically supervised. Built around you.",
    first: "Cleo R., a Nurse Practitioner, offers medically supervised weight loss in Oakville, starting with a full health assessment and a plan that fits your life.",
    facts: [["First visit", "45–60 minutes"], ["Check-ins", "Every 2–4 weeks"], ["Program", "Typically several months"], ["Assessment", "Health history and bloodwork"]],
    what: ["Medical weight loss combines a health assessment, a personalized plan and regular monitoring by a Nurse Practitioner. Depending on your health and goals, your plan may include prescription treatment where appropriate, along with nutrition and lifestyle support.", "The program is medical care. Cleo starts by understanding your health history, your current medications and what you’ve tried before."],
    areas: [["Health assessment", "History, medications and recent bloodwork"], ["Personalized plan", "Goals and a pace that suits you"], ["Prescription options", "Only where appropriate and safe"], ["Regular check-ins", "Progress, side effects and adjustments"], ["Lifestyle support", "Practical nutrition and activity guidance"]],
    fit: ["You want medical support rather than another diet", "You’re ready for regular check-ins", "You want a plan built on your health history"],
    wait: ["You are pregnant, planning pregnancy or breastfeeding", "Your health history needs specialist input first", "You have a history of an eating disorder"],
    steps: [["Free consultation", "Your goals, history and what you’ve tried so far.", "20 min"], ["Assessment", "Health history, medications and bloodwork review.", "45–60 min"], ["Your plan", "Eligibility, options and what monitoring looks like.", "15 min"], ["Check-ins", "Regular follow-ups to track progress and adjust.", "Every 2–4 weeks"]],
    results: "Weight loss under medical supervision is gradual. Cleo sets a safe pace with you and tracks progress at each check-in. The length of your program depends on your goals and how your body responds.",
    effects: "Side effects depend on your plan. If prescription treatment is part of it, Cleo explains the common side effects, what to watch for and when to call before you start.",
    after: ["Keep your check-in appointments", "Tell Cleo about any new medications", "Report side effects early", "Book bloodwork when Cleo asks"],
    faqs: [["Who is eligible?", "Eligibility depends on your health history, current medications and bloodwork. Cleo assesses this at your first full appointment and tells you honestly if the program isn’t right for you."], ["Do I need bloodwork?", "Usually, yes. Recent bloodwork helps Cleo understand your health and choose a safe plan. She’ll tell you what’s needed after your consultation."], ["How often are check-ins?", "Typically every 2 to 4 weeks. Check-ins track your progress and side effects, and let Cleo adjust your plan."], ["How long is the program?", "Most programs run for several months. Cleo sets the length with you based on your goals and progress."]],
    unique: "Eligibility and monitoring",
    related: ["iv", "fat", "skin"],
    review: "heather glen"
  },
  skin: {
    whatTitle: "What are skin boosters?",
    h1: "Skin Boosters in Oakville",
    line: "Hydrated, healthy-looking skin, from within.",
    first: "Cleo R., a Nurse Practitioner, offers skin booster injections in Oakville to improve hydration, texture and glow without changing your features.",
    facts: [["Appointment", "30–45 minutes"], ["Sessions", "Usually 2–3, 3–4 weeks apart"], ["Results", "Build over 2–4 weeks"], ["Lasts", "Typically around 6 months"]],
    what: ["Skin boosters are a light hyaluronic acid gel placed in tiny droplets just under the skin. They draw in water and improve hydration from within, so skin looks smoother and brighter.", "Skin boosters differ from filler. They don’t add shape or volume. They also differ from facials, which work on the surface. Boosters suit dull, dry or crepey skin where you want quality, not change."],
    areas: [["Face", "Overall hydration and glow"], ["Neck", "Fine lines and crepey texture"], ["Décolletage", "Dry, sun-exposed skin"], ["Hands", "Thin, dry-looking skin"]],
    fit: ["Your skin looks dull, dry or tired", "You want a glow without changing your features", "You’re happy with a short series of treatments"],
    wait: ["You are pregnant or breastfeeding", "You have active acne or infection in the area", "You’ve reacted to hyaluronic acid before"],
    steps: [["Free consultation", "Cleo looks at your skin and talks through your routine and goals.", "15 min"], ["Your plan", "Areas, number of sessions and consent.", "5 min"], ["Treatment", "Numbing, then small injections across the area.", "20–30 min"], ["Series", "Repeat sessions 3–4 weeks apart.", "3–4 weeks"]],
    results: "Skin often looks fresher within a few days, once any small bumps settle. Hydration builds over 2–4 weeks and across your sessions. Results typically last around 6 months, with a maintenance session to keep them.",
    effects: "Small bumps at the injection points usually fade within 24–48 hours. Redness and light bruising are common. Infection is rare.",
    after: ["Skip makeup until the next day", "Avoid exercise, saunas and alcohol for 24 hours", "Don’t massage the area", "Use gentle skincare for 2 days"],
    faqs: [["How are skin boosters different from filler?", "Filler adds shape and volume. Skin boosters use a lighter gel spread in tiny droplets to improve hydration and texture without changing your features."], ["How many sessions do I need?", "Most clients start with 2 or 3 sessions, 3 to 4 weeks apart, then a maintenance session about every 6 months."], ["When will I see results?", "Skin often looks fresher within a few days. The full hydration effect builds over 2 to 4 weeks and across your sessions."], ["Are they suitable for darker skin tones?", "Yes. Skin boosters don’t affect pigment. Cleo plans injections to limit bruising, which can leave a longer-lasting mark on deeper skin tones."]],
    unique: "Boosters vs. filler vs. facials",
    related: ["fillers", "iv", "lips"],
    review: "heather glen"
  },
  iv: {
    whatTitle: "What is IV therapy?",
    areasIntro: "Cleo recommends a blend only after your screening, and explains what’s in it before your infusion starts.",
    h1: "IV Infusion Therapy in Oakville",
    line: "Hydration and wellness, screened first.",
    first: "Cleo R., a Nurse Practitioner, offers IV infusion therapy in Oakville for hydration and nutrient support, always with a health screening first.",
    facts: [["Appointment", "45–60 minutes"], ["Infusion", "30–45 minutes"], ["Screening", "Before every first infusion"], ["Downtime", "None"]],
    what: ["An IV infusion delivers fluids, and sometimes vitamins or minerals, straight into a vein through a small catheter. It’s a direct way to rehydrate.", "Every client is screened before a first infusion. Cleo reviews your health history and medications and decides whether an IV is appropriate, and which blend suits you."],
    areas: [["Hydration", "Fluids and electrolytes"], ["Vitamin blends", "Options discussed after screening"], ["Recovery support", "After travel, illness or a busy period"]],
    fit: ["You want hydration support", "You’re comfortable with a short IV", "You’re happy to complete a health screening first"],
    wait: ["You have a heart or kidney condition", "You are pregnant or breastfeeding", "You have allergies to any ingredients", "Your health history needs review first"],
    steps: [["Screening", "Health history, medications and vital signs.", "15 min"], ["Your blend", "Cleo explains what’s in your infusion and why.", "5 min"], ["Infusion", "A small catheter in your arm while you relax in a private room.", "30–45 min"], ["After", "A short check before you leave.", "5 min"]],
    results: "Most clients feel rehydrated during or soon after the infusion. How often you return depends on your goals and your screening.",
    effects: "Mild tenderness or bruising at the IV site is common. Rarely, the site can swell or become red. Call the clinic if that happens or if you feel unwell.",
    after: ["Drink water through the day", "Keep the bandage on for an hour", "Call if the IV site swells or reddens"],
    faqs: [["Why do I need screening?", "Some health conditions and medications make IV therapy unsafe. Screening lets Cleo check that an infusion is right for you and choose a suitable blend."], ["How long does it take?", "Plan for 45 to 60 minutes. The infusion itself usually takes 30 to 45 minutes."], ["Does it hurt?", "You’ll feel a quick pinch as the catheter goes in. Most clients relax for the rest of the infusion."], ["Who shouldn’t have an IV?", "People with some heart or kidney conditions, and some people who are pregnant, may not be suitable. Cleo checks at screening."]],
    unique: "Screening and who shouldn’t have an IV",
    related: ["weight", "skin", "botox"],
    review: "heather glen"
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/treatmentContent.js", error: String((e && e.message) || e) }); }

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
