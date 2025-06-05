import {
  TUI_ANIMATIONS_SPEED,
  TUI_DEFAULT_NUMBER_FORMAT,
  TUI_SCROLL_REF
} from "./chunk-4XVFG3K5.js";
import {
  TUI_IS_IOS,
  tuiCreateOptions
} from "./chunk-XQO3CN4Y.js";
import {
  animate,
  animateChild,
  query,
  stagger,
  style,
  transition,
  trigger
} from "./chunk-AMFLEHWL.js";
import {
  tuiGetElementObscures,
  tuiGetElementOffset,
  tuiInjectElement
} from "./chunk-TBFJZ2MD.js";
import {
  CHAR_HYPHEN,
  CHAR_NO_BREAK_SPACE,
  CHAR_ZERO_WIDTH_SPACE,
  svgNodeFilter,
  tuiScrollFrom,
  tuiTypedFromEvent,
  tuiZoneOptimized,
  tuiZonefree,
  tuiZonefreeScheduler
} from "./chunk-EEGF43CM.js";
import {
  takeUntilDestroyed,
  tuiIsNumber,
  tuiProvide,
  tuiRoundWith
} from "./chunk-UQBCXIOX.js";
import {
  WA_ANIMATION_FRAME
} from "./chunk-4P53LWHM.js";
import {
  AsyncPipe,
  NgIf
} from "./chunk-6S6PAGJZ.js";
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  Directive,
  ElementRef,
  Injectable,
  Input,
  inject,
  setClassMetadata,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor
} from "./chunk-DGEURTJ6.js";
import {
  Observable,
  distinctUntilChanged,
  filter,
  map,
  merge,
  startWith,
  switchMap,
  takeUntil,
  throttleTime,
  timer
} from "./chunk-IJGLK444.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-3OV72XIM.js";

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-animations.mjs
var TRANSITION = "{{duration}}ms ease-in-out";
var DURATION = {
  params: {
    duration: 300
  }
};
var STAGGER = 300;
var tuiParentAnimation = trigger("tuiParentAnimation", [transition(":leave", [query(":scope > *", [animateChild()], {
  optional: true
})])]);
var tuiParentStop = trigger("tuiParentStop", [transition(":enter", [])]);
var tuiHost = trigger("tuiHost", [transition(":enter", [style({
  overflow: "clip"
}), query(":scope > *", [animateChild()], {
  optional: true
})]), transition(":leave", [query(":scope > *", [animateChild()], {
  optional: true
})])]);
var tuiHeightCollapse = trigger("tuiHeightCollapse", [transition(":enter", [style({
  height: 0
}), animate(TRANSITION, style({
  height: "*"
}))], DURATION), transition(":leave", [style({
  height: "*"
}), animate(TRANSITION, style({
  height: 0
}))], DURATION)]);
var tuiHeightCollapseList = trigger("tuiHeightCollapseList", [transition("* => *", [query(":enter", [style({
  height: 0
}), stagger(STAGGER, [animate(TRANSITION, style({
  height: "*"
}))])], {
  optional: true
}), query(":leave", [style({
  height: "*"
}), stagger(STAGGER, [animate(TRANSITION, style({
  height: 0
}))])], {
  optional: true
})], DURATION)]);
var tuiWidthCollapse = trigger("tuiWidthCollapse", [transition(":enter", [style({
  width: 0
}), animate(TRANSITION, style({
  width: "*"
}))], DURATION), transition(":leave", [style({
  width: "*"
}), animate(TRANSITION, style({
  width: 0
}))], DURATION)]);
var tuiWidthCollapseList = trigger("tuiWidthCollapseList", [transition("* => *", [query(":enter", [style({
  width: 0
}), stagger(STAGGER, [animate(TRANSITION, style({
  width: "*"
}))])], {
  optional: true
}), query(":leave", [style({
  width: "*"
}), stagger(STAGGER, [animate(TRANSITION, style({
  width: 0
}))])], {
  optional: true
})], DURATION)]);
var tuiFadeIn = trigger("tuiFadeIn", [transition(":enter", [style({
  opacity: 0
}), animate(TRANSITION, style({
  opacity: 1
}))], DURATION), transition(":leave", [style({
  opacity: 1
}), animate(TRANSITION, style({
  opacity: 0
}))], DURATION)]);
var tuiFadeInList = trigger("tuiFadeInList", [transition("* => *", [query(":enter", [style({
  opacity: 0
}), stagger(STAGGER, [animate(TRANSITION, style({
  opacity: 1
}))])], {
  optional: true
}), query(":leave", [style({
  opacity: 1
}), stagger(STAGGER, [animate(TRANSITION, style({
  opacity: 0
}))])], {
  optional: true
})], DURATION)]);
var tuiFadeInTop = trigger("tuiFadeInTop", [transition(":enter", [style({
  transform: "translateY(-{{start}}px)",
  opacity: 0
}), animate(TRANSITION, style({
  transform: "translateY({{end}})",
  opacity: 1
}))], {
  params: {
    end: 0,
    start: 10,
    duration: 300
  }
}), transition(":leave", [style({
  transform: "translateY({{end}})",
  opacity: 1
}), animate(TRANSITION, style({
  transform: "translateY(-{{start}}px)",
  opacity: 0
}))], {
  params: {
    end: 0,
    start: 10,
    duration: 300
  }
})]);
var tuiFadeInBottom = trigger("tuiFadeInBottom", [transition(":enter", [style({
  transform: "translateY({{start}}px)",
  opacity: 0
}), animate(TRANSITION, style({
  transform: "translateY({{end}})",
  opacity: 1
}))], {
  params: {
    end: 0,
    start: 10,
    duration: 300
  }
}), transition(":leave", [style({
  transform: "translateY({{end}})",
  opacity: 1
}), animate(TRANSITION, style({
  transform: "translateY({{start}}px)",
  opacity: 0
}))], {
  params: {
    end: 0,
    start: 10,
    duration: 300
  }
})]);
var tuiDropdownAnimation = trigger("tuiDropdownAnimation", [transition(":enter", [style({
  transform: "translateY(-{{start}}px)",
  opacity: 0
}), animate(TRANSITION, style({
  transform: "translateY({{end}})",
  opacity: 1
}))], {
  params: {
    end: 0,
    start: 10,
    duration: 300
  }
}), transition(":leave", [style({
  transform: "translateY({{end}})",
  opacity: 1
}), animate(TRANSITION, style({
  transform: "translateY(-{{start}}px)",
  opacity: 0
}))], {
  params: {
    end: 0,
    start: 10,
    duration: 300
  }
})]);
var tuiScaleIn = trigger("tuiScaleIn", [transition(":enter", [style({
  transform: "scale({{start}})"
}), animate("{{duration}}ms {{easing}}", style({
  transform: "scale({{end}})"
}))], {
  params: {
    end: 1,
    start: 0,
    duration: 300,
    easing: "ease-in-out"
  }
}), transition(":leave", [style({
  transform: "scale({{end}})"
}), animate(TRANSITION, style({
  transform: "scale({{start}})"
}))], {
  params: {
    end: 1,
    start: 0,
    duration: 300
  }
})]);
var tuiPop = trigger("tuiPop", [transition(":enter", [style({
  transform: "scale({{start}})"
}), animate(TRANSITION, style({
  transform: "scale({{middle}})"
})), animate(TRANSITION, style({
  transform: "scale({{end}})"
}))], {
  params: {
    end: 1,
    middle: 1.1,
    start: 0,
    duration: 300
  }
}), transition(":leave", [style({
  transform: "scale({{end}})"
}), animate(TRANSITION, style({
  transform: "scale({{middle}})"
})), animate(TRANSITION, style({
  transform: "scale({{start}})"
}))], {
  params: {
    end: 1,
    middle: 1.1,
    start: 0,
    duration: 300
  }
})]);
var tuiScaleInList = trigger("tuiScaleInList", [transition("* => *", [query(":enter", [style({
  transform: "scale({{start}})"
}), stagger(STAGGER, [animate(TRANSITION, style({
  transform: "scale({{end}})"
}))])], {
  optional: true
}), query(":leave", [style({
  transform: "scale({{end}})"
}), stagger(STAGGER, [animate(TRANSITION, style({
  transform: "scale({{start}})"
}))])], {
  optional: true
})], {
  params: {
    end: 1,
    start: 0,
    duration: 300
  }
})]);
var tuiSlideIn = trigger("tuiSlideIn", [transition("* => left", [style({
  transform: "translateX(-{{start}})"
}), animate(TRANSITION, style({
  transform: "translateX({{end}})"
}))], {
  params: {
    end: 0,
    start: "100%",
    duration: 300
  }
}), transition("left => *", [style({
  transform: "translateX({{end}})"
}), animate(TRANSITION, style({
  transform: "translateX(-{{start}})"
}))], {
  params: {
    end: 0,
    start: "100%",
    duration: 300
  }
}), transition("* => right", [style({
  transform: "translateX({{start}})"
}), animate(TRANSITION, style({
  transform: "translateX({{end}})"
}))], {
  params: {
    end: 0,
    start: "100%",
    duration: 300
  }
}), transition("right => *", [style({
  transform: "translateX({{end}})"
}), animate(TRANSITION, style({
  transform: "translateX({{start}})"
}))], {
  params: {
    end: 0,
    start: "100%",
    duration: 300
  }
})]);
var tuiSlideInLeft = trigger("tuiSlideInLeft", [transition(":enter", [style({
  transform: "translateX(-{{start}})"
}), animate(TRANSITION, style({
  transform: "translateX({{end}})"
}))], {
  params: {
    end: 0,
    start: "100%",
    duration: 300
  }
}), transition(":leave", [style({
  transform: "translateX({{end}})"
}), animate(TRANSITION, style({
  transform: "translateX(-{{start}})"
}))], {
  params: {
    end: 0,
    start: "100%",
    duration: 300
  }
})]);
var tuiSlideInLeftList = trigger("tuiSlideInLeftList", [transition("* => *", [query(":enter", [style({
  transform: "translateX(-{{start}})"
}), stagger(STAGGER, [animate(TRANSITION, style({
  transform: "translateX({{end}})"
}))])], {
  optional: true
}), query(":leave", [style({
  transform: "translateX({{end}})"
}), stagger(STAGGER, [animate(TRANSITION, style({
  transform: "translateX(-{{start}})"
}))])], {
  optional: true
})], {
  params: {
    end: 0,
    start: "100%",
    duration: 300
  }
})]);
var tuiSlideInRight = trigger("tuiSlideInRight", [transition(":enter", [style({
  transform: "translateX({{start}})"
}), animate(TRANSITION, style({
  transform: "translateX({{end}})"
}))], {
  params: {
    end: 0,
    start: "100%",
    duration: 300
  }
}), transition(":leave", [style({
  transform: "translateX({{end}})"
}), animate(TRANSITION, style({
  transform: "translateX({{start}})"
}))], {
  params: {
    end: 0,
    start: "100%",
    duration: 300
  }
})]);
var tuiSlideInRightList = trigger("tuiSlideInRightList", [transition("* => *", [query(":enter", [style({
  transform: "translateX({{start}})"
}), stagger(STAGGER, [animate(TRANSITION, style({
  transform: "translateX({{end}})"
}))])], {
  optional: true
}), query(":leave", [style({
  transform: "translateX({{end}})"
}), stagger(STAGGER, [animate(TRANSITION, style({
  transform: "translateX({{start}})"
}))])], {
  optional: true
})], {
  params: {
    end: 0,
    start: "100%",
    duration: 300
  }
})]);
var tuiSlideInTop = trigger("tuiSlideInTop", [transition(":enter", [style({
  transform: "translate3d(0,{{start}},0)",
  pointerEvents: "none"
}), animate(TRANSITION, style({
  transform: "translate3d(0,{{end}},0)"
}))], {
  params: {
    end: 0,
    start: "100%",
    duration: 300
  }
}), transition(":leave", [style({
  transform: "translate3d(0,{{end}},0)"
}), animate(TRANSITION, style({
  transform: "translate3d(0,{{start}},0)"
}))], {
  params: {
    end: 0,
    start: "100%",
    duration: 300
  }
})]);
var tuiSlideInTopList = trigger("tuiSlideInTopList", [transition("* => *", [query(":enter", [style({
  transform: "translateY({{start}})"
}), stagger(STAGGER, [animate(TRANSITION, style({
  transform: "translateY({{end}})"
}))])], {
  optional: true
}), query(":leave", [style({
  transform: "translateY({{end}})"
}), stagger(STAGGER, [animate(TRANSITION, style({
  transform: "translateY({{start}})"
}))])], {
  optional: true
})], {
  params: {
    end: 0,
    start: "100%",
    duration: 300
  }
})]);
var tuiSlideInBottom = trigger("tuiSlideInBottom", [transition(":enter", [style({
  transform: "translateY(-{{start}})"
}), animate(TRANSITION, style({
  transform: "translateY({{end}})"
}))], {
  params: {
    end: 0,
    start: "100%",
    duration: 300
  }
}), transition(":leave", [style({
  transform: "translateY({{end}})"
}), animate(TRANSITION, style({
  transform: "translateY(-{{start}})"
}))], {
  params: {
    end: 0,
    start: "100%",
    duration: 300
  }
})]);
var tuiSlideInBottomList = trigger("tuiSlideInBottomList", [transition("* => *", [query(":enter", [style({
  transform: "translateY(-{{start}})"
}), stagger(STAGGER, [animate(TRANSITION, style({
  transform: "translateY({{end}})"
}))])], {
  optional: true
}), query(":leave", [style({
  transform: "translateY({{end}})"
}), stagger(STAGGER, [animate(TRANSITION, style({
  transform: "translateY(-{{start}})"
}))])], {
  optional: true
})], {
  params: {
    end: 0,
    start: "100%",
    duration: 300
  }
})]);

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-utils-dom.mjs
function tuiCheckFixedPosition(element) {
  return !!element && (isFixed(element) || tuiCheckFixedPosition(element.parentElement));
}
function isFixed(element) {
  return element.ownerDocument.defaultView?.getComputedStyle(element).getPropertyValue("position") === "fixed";
}
function tuiGetViewportHeight({
  document,
  innerHeight
}) {
  return Math.max(document.documentElement.clientHeight || 0, innerHeight || 0);
}
function tuiGetViewportWidth({
  document,
  innerWidth
}) {
  return Math.max(document.documentElement.clientWidth || 0, innerWidth || 0);
}
function tuiGetWordRange(currentRange) {
  const range = currentRange.cloneRange();
  const {
    startContainer,
    startOffset,
    endContainer,
    endOffset
  } = range;
  const {
    ownerDocument
  } = startContainer;
  if (!ownerDocument) {
    return range;
  }
  const treeWalker = ownerDocument.createTreeWalker(ownerDocument.body, NodeFilter.SHOW_TEXT, svgNodeFilter);
  treeWalker.currentNode = startContainer;
  do {
    const container = treeWalker.currentNode;
    const textContent = container.textContent || "";
    const content = container === startContainer ? textContent.slice(0, Math.max(0, startOffset + 1)) : textContent;
    const offset = Math.max(content.lastIndexOf(" "), content.lastIndexOf(CHAR_NO_BREAK_SPACE), content.lastIndexOf(CHAR_ZERO_WIDTH_SPACE)) + 1;
    range.setStart(container, 0);
    if (offset) {
      range.setStart(container, offset);
      break;
    }
  } while (treeWalker.previousNode());
  treeWalker.currentNode = endContainer;
  do {
    const container = treeWalker.currentNode;
    const textContent = container.textContent || "";
    const content = container === endContainer ? textContent.slice(endOffset + 1) : textContent;
    const offset = [content.indexOf(" "), content.indexOf(CHAR_NO_BREAK_SPACE), content.indexOf(CHAR_ZERO_WIDTH_SPACE)].reduce((result, item) => result === -1 || item === -1 ? Math.max(result, item) : Math.min(result, item), -1);
    range.setEnd(container, textContent.length);
    if (offset !== -1) {
      range.setEnd(container, offset + textContent.length - content.length);
      break;
    }
  } while (treeWalker.nextNode());
  return range;
}

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-utils-format.mjs
function tuiNumberToStringWithoutExp(value) {
  const valueAsString = String(value);
  const [numberPart, expPart] = valueAsString.split("e-");
  let valueWithoutExp = valueAsString;
  if (expPart) {
    const [, fractionalPart = ""] = numberPart?.split(".") ?? [];
    const decimalDigits = Number(expPart) + (fractionalPart?.length || 0);
    valueWithoutExp = value.toFixed(decimalDigits);
  }
  return valueWithoutExp;
}
function tuiGetFractionPartPadded(value, precision) {
  const [, fractionPartPadded = ""] = tuiNumberToStringWithoutExp(value).split(".");
  return tuiIsNumber(precision) ? fractionPartPadded.slice(0, Math.max(0, precision)) : fractionPartPadded;
}
function tuiFormatNumber(value, settings = {}) {
  const {
    precision,
    decimalSeparator,
    thousandSeparator,
    decimalMode,
    rounding
  } = __spreadValues(__spreadProps(__spreadValues({}, TUI_DEFAULT_NUMBER_FORMAT), {
    decimalMode: "always",
    precision: Infinity
  }), settings);
  const rounded = Number.isFinite(precision) ? tuiRoundWith({
    value,
    precision,
    method: rounding
  }) : value;
  const integerPartString = String(Math.floor(Math.abs(rounded)));
  let fractionPartPadded = tuiGetFractionPartPadded(rounded, precision);
  const hasFraction = Number(fractionPartPadded) > 0;
  if (Number.isFinite(precision)) {
    if (decimalMode === "always" || hasFraction && decimalMode === "pad") {
      const zeroPaddingSize = Math.max(precision - fractionPartPadded.length, 0);
      const zeroPartString = "0".repeat(zeroPaddingSize);
      fractionPartPadded = `${fractionPartPadded}${zeroPartString}`;
    } else {
      fractionPartPadded = fractionPartPadded.replace(/0*$/, "");
    }
  }
  const remainder = integerPartString.length % 3;
  const sign = value < 0 ? CHAR_HYPHEN : "";
  let result = sign + integerPartString.charAt(0);
  for (let i = 1; i < integerPartString.length; i++) {
    if (i % 3 === remainder && integerPartString.length > 3) {
      result += thousandSeparator;
    }
    result += integerPartString.charAt(i);
  }
  return fractionPartPadded ? result + decimalSeparator + fractionPartPadded : result;
}
function tuiStringHashToHsl(value) {
  if (value === "") {
    return "";
  }
  let hash = 0;
  for (let i = 0; i < value.length; i++) {
    hash = value.charCodeAt(i) + ((hash << 5) - hash);
    hash &= hash;
  }
  const hue = hash % 360;
  const saturation = 60 + hash % 5;
  const lightness = 80 + hash % 5;
  return `hsl(${hue},${saturation}%,${lightness}%)`;
}

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-utils-miscellaneous.mjs
var KEYS = ["Spacebar", "Backspace", "Delete", "ArrowLeft", "ArrowRight", "Left", "Right", "End", "Home"];
function tuiIsEditingKey(key = "") {
  return key.length === 1 || KEYS.includes(key);
}
function tuiIsObscured(el, exceptSelector = "tui-hints") {
  return !!tuiGetElementObscures(el)?.some((el2) => !el2.closest(exceptSelector));
}
function tuiOverrideOptions(override, fallback) {
  return (directive, options) => {
    const result = directive || __spreadValues({}, options || fallback);
    Object.keys(override).forEach((key) => {
      result[key] = override[key];
    });
    return result;
  };
}
var SIZES = {
  xxs: 0,
  xs: 1,
  s: 2,
  m: 3,
  l: 4,
  xl: 5,
  xxl: 6
};
function tuiSizeBigger(size, biggerThanSize = "s") {
  return SIZES[size] > SIZES[biggerThanSize];
}
var TUI_ANIMATIONS_DEFAULT_DURATION = 300;
function tuiToAnimationOptions(speed, easing) {
  return {
    value: "",
    params: {
      duration: tuiGetDuration(speed),
      easing
    }
  };
}
function tuiGetDuration(speed) {
  return speed && TUI_ANIMATIONS_DEFAULT_DURATION / speed;
}

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-scrollbar.mjs
function TuiScrollControls_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TuiScrollControls_ng_template_1_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 5);
    ɵɵlistener("mousedown.capture.prevent", function TuiScrollControls_ng_template_1_ng_container_0_div_1_Template_div_mousedown_capture_prevent_0_listener() {
      ɵɵrestoreView(_r1);
      return ɵɵresetView(0);
    });
    ɵɵelement(1, "div", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const bars_r2 = ɵɵnextContext().ngIf;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵclassProp("t-bar_has-horizontal", bars_r2[1]);
    ɵɵproperty("@tuiFadeIn", ctx_r2.options);
  }
}
function TuiScrollControls_ng_template_1_ng_container_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 7);
    ɵɵlistener("mousedown.capture.prevent", function TuiScrollControls_ng_template_1_ng_container_0_div_2_Template_div_mousedown_capture_prevent_0_listener() {
      ɵɵrestoreView(_r4);
      return ɵɵresetView(0);
    });
    ɵɵelement(1, "div", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const bars_r2 = ɵɵnextContext().ngIf;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵclassProp("t-bar_has-vertical", bars_r2[0]);
    ɵɵproperty("@tuiFadeIn", ctx_r2.options);
  }
}
function TuiScrollControls_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TuiScrollControls_ng_template_1_ng_container_0_div_1_Template, 2, 3, "div", 3)(2, TuiScrollControls_ng_template_1_ng_container_0_div_2_Template, 2, 3, "div", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const bars_r2 = ctx.ngIf;
    ɵɵadvance();
    ɵɵproperty("ngIf", bars_r2[0]);
    ɵɵadvance();
    ɵɵproperty("ngIf", bars_r2[1]);
  }
}
function TuiScrollControls_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TuiScrollControls_ng_template_1_ng_container_0_Template, 3, 2, "ng-container", 2);
    ɵɵpipe(1, "async");
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx_r2.refresh$));
  }
}
var _c0 = ["*"];
function TuiScrollbar_tui_scroll_controls_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-scroll-controls", 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassProp("t-hover-mode", ctx_r0.options.mode === "hover");
  }
}
var TuiScrollbarService = class _TuiScrollbarService extends Observable {
  constructor() {
    super((subscriber) => this.scroll$.subscribe(subscriber));
    this.el = tuiInjectElement();
    this.element = inject(TUI_SCROLL_REF).nativeElement;
    this.scroll$ = merge(tuiTypedFromEvent(this.el.parentElement, "mousedown").pipe(filter(({
      target
    }) => target !== this.el), map((event) => this.getScrolled(event, 0.5, 0.5))), tuiTypedFromEvent(this.el, "mousedown").pipe(tuiZonefree(), switchMap((event) => {
      const {
        ownerDocument
      } = this.el;
      const rect = this.el.getBoundingClientRect();
      const vertical = getOffsetVertical(event, rect);
      const horizontal = getOffsetHorizontal(event, rect);
      return tuiTypedFromEvent(ownerDocument, "mousemove").pipe(map((event2) => this.getScrolled(event2, vertical, horizontal)), takeUntil(tuiTypedFromEvent(ownerDocument, "mouseup")));
    })));
  }
  getScrolled({
    clientY,
    clientX
  }, offsetY, offsetX) {
    const {
      offsetHeight,
      offsetWidth
    } = this.el;
    const {
      top,
      left,
      width,
      height
    } = this.el.parentElement.getBoundingClientRect();
    const maxTop = this.element.scrollHeight - height;
    const maxLeft = this.element.scrollWidth - width;
    const scrolledTop = (clientY - top - offsetHeight * offsetY) / (height - offsetHeight);
    const scrolledLeft = (clientX - left - offsetWidth * offsetX) / (width - offsetWidth);
    return [maxTop * scrolledTop, maxLeft * scrolledLeft];
  }
  static {
    this.ɵfac = function TuiScrollbarService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiScrollbarService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiScrollbarService,
      factory: _TuiScrollbarService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollbarService, [{
    type: Injectable
  }], function() {
    return [];
  }, null);
})();
function getOffsetVertical({
  clientY
}, {
  top,
  height
}) {
  return (clientY - top) / height;
}
function getOffsetHorizontal({
  clientX
}, {
  left,
  width
}) {
  return (clientX - left) / width;
}
var MIN_WIDTH = 24;
var TuiScrollbarDirective = class _TuiScrollbarDirective {
  constructor() {
    this.el = inject(TUI_SCROLL_REF).nativeElement;
    this.style = tuiInjectElement().style;
    this.scrollSub = inject(TuiScrollbarService).pipe(takeUntilDestroyed()).subscribe(([top, left]) => {
      this.el.style.scrollBehavior = "auto";
      if (this.tuiScrollbar === "horizontal") {
        this.el.scrollLeft = left;
      } else {
        this.el.scrollTop = top;
      }
      this.el.style.scrollBehavior = "";
    });
    this.styleSub = merge(inject(WA_ANIMATION_FRAME).pipe(throttleTime(100, tuiZonefreeScheduler())), tuiScrollFrom(this.el)).pipe(tuiZonefree(), takeUntilDestroyed()).subscribe(() => {
      const dimension = {
        scrollTop: this.el.scrollTop,
        scrollHeight: this.el.scrollHeight,
        clientHeight: this.el.clientHeight,
        scrollLeft: this.el.scrollLeft,
        scrollWidth: this.el.scrollWidth,
        clientWidth: this.el.clientWidth
      };
      const thumb = `${this.getThumb(dimension) * 100}%`;
      const view = `${this.getView(dimension) * 100}%`;
      if (this.tuiScrollbar === "vertical") {
        this.style.top = thumb;
        this.style.height = view;
      } else {
        this.style.left = thumb;
        this.style.width = view;
      }
    });
    this.tuiScrollbar = "vertical";
  }
  getScrolled(dimension) {
    return this.tuiScrollbar === "vertical" ? dimension.scrollTop / (dimension.scrollHeight - dimension.clientHeight) : dimension.scrollLeft / (dimension.scrollWidth - dimension.clientWidth);
  }
  getCompensation(dimension) {
    if (dimension.clientHeight * dimension.clientHeight / dimension.scrollHeight > MIN_WIDTH && this.tuiScrollbar === "vertical" || dimension.clientWidth * dimension.clientWidth / dimension.scrollWidth > MIN_WIDTH && this.tuiScrollbar === "horizontal") {
      return 0;
    }
    return this.tuiScrollbar === "vertical" ? MIN_WIDTH / dimension.clientHeight : MIN_WIDTH / dimension.clientWidth;
  }
  getThumb(dimension) {
    const compensation = this.getCompensation(dimension) || this.getView(dimension);
    return this.getScrolled(dimension) * (1 - compensation);
  }
  getView(dimension) {
    return this.tuiScrollbar === "vertical" ? Math.ceil(dimension.clientHeight / dimension.scrollHeight * 100) / 100 : Math.ceil(dimension.clientWidth / dimension.scrollWidth * 100) / 100;
  }
  static {
    this.ɵfac = function TuiScrollbarDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiScrollbarDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiScrollbarDirective,
      selectors: [["", "tuiScrollbar", ""]],
      inputs: {
        tuiScrollbar: "tuiScrollbar"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([TuiScrollbarService])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollbarDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiScrollbar]",
      providers: [TuiScrollbarService]
    }]
  }], null, {
    tuiScrollbar: [{
      type: Input
    }]
  });
})();
var TUI_DEFAULT_SCROLLBAR_OPTIONS = {
  mode: "always"
};
var [TUI_SCROLLBAR_OPTIONS, tuiScrollbarOptionsProvider] = tuiCreateOptions(TUI_DEFAULT_SCROLLBAR_OPTIONS);
var TuiScrollControls = class _TuiScrollControls {
  constructor() {
    this.scrollRef = inject(TUI_SCROLL_REF).nativeElement;
    this.nativeScrollbar = inject(TUI_SCROLLBAR_OPTIONS).mode === "native";
    this.options = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));
    this.refresh$ = inject(WA_ANIMATION_FRAME).pipe(throttleTime(300, tuiZonefreeScheduler()), map(() => this.scrollbars), startWith([false, false]), distinctUntilChanged((a, b) => a[0] === b[0] && a[1] === b[1]), tuiZoneOptimized());
  }
  get scrollbars() {
    const {
      clientHeight,
      scrollHeight,
      clientWidth,
      scrollWidth
    } = this.scrollRef;
    return [Math.ceil(clientHeight / scrollHeight * 100) < 100, Math.ceil(clientWidth / scrollWidth * 100) < 100];
  }
  static {
    this.ɵfac = function TuiScrollControls_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiScrollControls)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiScrollControls,
      selectors: [["tui-scroll-controls"]],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 3,
      vars: 2,
      consts: [["custom", ""], [4, "ngIf", "ngIfElse"], [4, "ngIf"], ["class", "t-bar t-bar_vertical", 3, "t-bar_has-horizontal", "mousedown.capture.prevent", 4, "ngIf"], ["class", "t-bar t-bar_horizontal", 3, "t-bar_has-vertical", "mousedown.capture.prevent", 4, "ngIf"], [1, "t-bar", "t-bar_vertical", 3, "mousedown.capture.prevent"], ["tuiScrollbar", "vertical", 1, "t-thumb"], [1, "t-bar", "t-bar_horizontal", 3, "mousedown.capture.prevent"], ["tuiScrollbar", "horizontal", 1, "t-thumb"]],
      template: function TuiScrollControls_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, TuiScrollControls_ng_container_0_Template, 1, 0, "ng-container", 1)(1, TuiScrollControls_ng_template_1_Template, 2, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const custom_r5 = ɵɵreference(2);
          ɵɵproperty("ngIf", ctx.nativeScrollbar)("ngIfElse", custom_r5);
        }
      },
      dependencies: [AsyncPipe, NgIf, TuiScrollbarDirective],
      styles: ["[_nghost-%COMP%]{position:sticky;top:0;left:0;z-index:1;min-inline-size:calc(100% - 1px);min-block-size:calc(100% - 1px);max-inline-size:calc(100% - 1px);max-block-size:calc(100% - 1px);float:inline-start;margin-inline-end:calc(-100% + 1px);pointer-events:none}.t-bar[_ngcontent-%COMP%]{position:absolute;right:0;bottom:0;pointer-events:auto}.t-bar_vertical[_ngcontent-%COMP%]{top:0;inline-size:.875rem}.t-bar_horizontal[_ngcontent-%COMP%]{left:0;block-size:.875rem}.t-bar_has-horizontal[_ngcontent-%COMP%]{bottom:.5rem}.t-bar_has-vertical[_ngcontent-%COMP%]{right:.5rem}.t-thumb[_ngcontent-%COMP%]{transition-property:all;transition-duration:.15s;transition-timing-function:ease-in-out;position:absolute;border-radius:6.25rem;border:.25rem solid transparent;cursor:pointer;pointer-events:auto;-webkit-user-select:none;user-select:none;background:currentColor;background-clip:content-box;box-sizing:border-box;transition-property:width,height,opacity;opacity:.2}.t-thumb[_ngcontent-%COMP%]:hover{opacity:.24}.t-thumb[_ngcontent-%COMP%]:active{opacity:.48}.t-bar_vertical[_ngcontent-%COMP%]   .t-thumb[_ngcontent-%COMP%]{right:0;inline-size:.75rem;min-block-size:1.25rem}.t-bar_vertical[_ngcontent-%COMP%]:hover   .t-thumb[_ngcontent-%COMP%], .t-bar_vertical[_ngcontent-%COMP%]   .t-thumb[_ngcontent-%COMP%]:active{inline-size:.875rem}.t-bar_horizontal[_ngcontent-%COMP%]   .t-thumb[_ngcontent-%COMP%]{bottom:0;block-size:.75rem;min-inline-size:1.25rem}.t-bar_horizontal[_ngcontent-%COMP%]:hover   .t-thumb[_ngcontent-%COMP%], .t-bar_horizontal[_ngcontent-%COMP%]   .t-thumb[_ngcontent-%COMP%]:active{block-size:.875rem}"],
      data: {
        animation: [tuiFadeIn]
      },
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollControls, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-scroll-controls",
      imports: [AsyncPipe, NgIf, TuiScrollbarDirective],
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [tuiFadeIn],
      template: '<ng-container *ngIf="nativeScrollbar; else custom" />\n<ng-template #custom>\n    <ng-container *ngIf="refresh$ | async as bars">\n        <div\n            *ngIf="bars[0]"\n            class="t-bar t-bar_vertical"\n            [@tuiFadeIn]="options"\n            [class.t-bar_has-horizontal]="bars[1]"\n            (mousedown.capture.prevent)="(0)"\n        >\n            <div\n                tuiScrollbar="vertical"\n                class="t-thumb"\n            ></div>\n        </div>\n        <div\n            *ngIf="bars[1]"\n            class="t-bar t-bar_horizontal"\n            [@tuiFadeIn]="options"\n            [class.t-bar_has-vertical]="bars[0]"\n            (mousedown.capture.prevent)="(0)"\n        >\n            <div\n                tuiScrollbar="horizontal"\n                class="t-thumb"\n            ></div>\n        </div>\n    </ng-container>\n</ng-template>\n',
      styles: [":host{position:sticky;top:0;left:0;z-index:1;min-inline-size:calc(100% - 1px);min-block-size:calc(100% - 1px);max-inline-size:calc(100% - 1px);max-block-size:calc(100% - 1px);float:inline-start;margin-inline-end:calc(-100% + 1px);pointer-events:none}.t-bar{position:absolute;right:0;bottom:0;pointer-events:auto}.t-bar_vertical{top:0;inline-size:.875rem}.t-bar_horizontal{left:0;block-size:.875rem}.t-bar_has-horizontal{bottom:.5rem}.t-bar_has-vertical{right:.5rem}.t-thumb{transition-property:all;transition-duration:.15s;transition-timing-function:ease-in-out;position:absolute;border-radius:6.25rem;border:.25rem solid transparent;cursor:pointer;pointer-events:auto;-webkit-user-select:none;user-select:none;background:currentColor;background-clip:content-box;box-sizing:border-box;transition-property:width,height,opacity;opacity:.2}.t-thumb:hover{opacity:.24}.t-thumb:active{opacity:.48}.t-bar_vertical .t-thumb{right:0;inline-size:.75rem;min-block-size:1.25rem}.t-bar_vertical:hover .t-thumb,.t-bar_vertical .t-thumb:active{inline-size:.875rem}.t-bar_horizontal .t-thumb{bottom:0;block-size:.75rem;min-inline-size:1.25rem}.t-bar_horizontal:hover .t-thumb,.t-bar_horizontal .t-thumb:active{block-size:.875rem}\n"]
    }]
  }], null, null);
})();
var TUI_SCROLL_INTO_VIEW = "tui-scroll-into-view";
var TUI_SCROLLABLE = "tui-scrollable";
var TuiScrollbar = class _TuiScrollbar {
  constructor() {
    this.el = tuiInjectElement();
    this.options = inject(TUI_SCROLLBAR_OPTIONS);
    this.isIOS = inject(TUI_IS_IOS);
    this.browserScrollRef = new ElementRef(this.el);
    this.hidden = this.options.mode === "hidden";
  }
  get delegated() {
    return this.scrollRef !== this.el || this.options.mode === "native";
  }
  get scrollRef() {
    return this.browserScrollRef.nativeElement;
  }
  set scrollRef(element) {
    this.browserScrollRef.nativeElement = element;
  }
  scrollIntoView(detail) {
    if (this.delegated) {
      return;
    }
    const {
      offsetHeight,
      offsetWidth
    } = detail;
    const {
      offsetTop,
      offsetLeft
    } = tuiGetElementOffset(this.scrollRef, detail);
    const scrollTop = offsetTop + offsetHeight / 2 - this.scrollRef.clientHeight / 2;
    const scrollLeft = offsetLeft + offsetWidth / 2 - this.scrollRef.clientWidth / 2;
    this.scrollRef.scrollTo?.(scrollLeft, scrollTop);
  }
  static {
    this.ɵfac = function TuiScrollbar_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiScrollbar)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiScrollbar,
      selectors: [["tui-scrollbar"]],
      hostVars: 2,
      hostBindings: function TuiScrollbar_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("tui-scrollable.stop", function TuiScrollbar_tui_scrollable_stop_HostBindingHandler($event) {
            return ctx.scrollRef = $event.detail;
          })("tui-scroll-into-view.stop", function TuiScrollbar_tui_scroll_into_view_stop_HostBindingHandler($event) {
            return ctx.scrollIntoView($event.detail);
          });
        }
        if (rf & 2) {
          ɵɵclassProp("_native-hidden", ctx.options.mode !== "native" && (!ctx.isIOS || ctx.hidden));
        }
      },
      inputs: {
        hidden: "hidden"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([{
        provide: TUI_SCROLL_REF,
        useFactory: () => inject(_TuiScrollbar).browserScrollRef
      }]), ɵɵStandaloneFeature],
      ngContentSelectors: _c0,
      decls: 3,
      vars: 3,
      consts: [["class", "t-bars", 3, "t-hover-mode", 4, "ngIf"], [1, "t-content"], [1, "t-bars"]],
      template: function TuiScrollbar_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵtemplate(0, TuiScrollbar_tui_scroll_controls_0_Template, 1, 2, "tui-scroll-controls", 0);
          ɵɵelementStart(1, "div", 1);
          ɵɵprojection(2);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", !ctx.hidden && !ctx.isIOS && ctx.options.mode !== "native");
          ɵɵadvance();
          ɵɵclassProp("t-content_delegated", ctx.delegated);
        }
      },
      dependencies: [NgIf, TuiScrollControls],
      styles: ["[_nghost-%COMP%]{position:relative;display:flex;isolation:isolate;overflow:auto}._native-hidden[_nghost-%COMP%]{scrollbar-width:none;-ms-overflow-style:none}._native-hidden[_nghost-%COMP%]::-webkit-scrollbar, ._native-hidden[_nghost-%COMP%]::-webkit-scrollbar-thumb{display:none}[_nghost-%COMP%]   .t-hover-mode[_ngcontent-%COMP%]:not(:active){transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;opacity:0}[_nghost-%COMP%]:hover   .t-hover-mode[_ngcontent-%COMP%]{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;opacity:1}.t-content[_ngcontent-%COMP%]{isolation:isolate;flex:1;flex-basis:auto;inline-size:100%;block-size:-webkit-max-content;block-size:max-content}.t-content_delegated[_ngcontent-%COMP%]{block-size:100%}.t-bars[_ngcontent-%COMP%]{color:var(--tui-text-primary)}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollbar, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-scrollbar",
      imports: [NgIf, TuiScrollControls],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: TUI_SCROLL_REF,
        useFactory: () => inject(TuiScrollbar).browserScrollRef
      }],
      host: {
        "[class._native-hidden]": 'options.mode !== "native" && (!isIOS || hidden)',
        [`(${TUI_SCROLLABLE}.stop)`]: "scrollRef = $event.detail",
        [`(${TUI_SCROLL_INTO_VIEW}.stop)`]: "scrollIntoView($event.detail)"
      },
      template: `<tui-scroll-controls
    *ngIf="!hidden && !isIOS && options.mode !== 'native'"
    class="t-bars"
    [class.t-hover-mode]="options.mode === 'hover'"
/>
<div
    class="t-content"
    [class.t-content_delegated]="delegated"
>
    <ng-content />
</div>
`,
      styles: [":host{position:relative;display:flex;isolation:isolate;overflow:auto}:host._native-hidden{scrollbar-width:none;-ms-overflow-style:none}:host._native-hidden::-webkit-scrollbar,:host._native-hidden::-webkit-scrollbar-thumb{display:none}:host .t-hover-mode:not(:active){transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;opacity:0}:host:hover .t-hover-mode{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;opacity:1}.t-content{isolation:isolate;flex:1;flex-basis:auto;inline-size:100%;block-size:-webkit-max-content;block-size:max-content}.t-content_delegated{block-size:100%}.t-bars{color:var(--tui-text-primary)}\n"]
    }]
  }], null, {
    hidden: [{
      type: Input
    }]
  });
})();
var TuiScrollIntoView = class _TuiScrollIntoView {
  constructor() {
    this.el = tuiInjectElement();
    this.destroyRef = inject(DestroyRef);
  }
  set tuiScrollIntoView(scroll) {
    if (!scroll) {
      return;
    }
    timer(0).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.el.dispatchEvent(new CustomEvent(TUI_SCROLL_INTO_VIEW, {
        bubbles: true,
        detail: this.el
      }));
    });
  }
  static {
    this.ɵfac = function TuiScrollIntoView_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiScrollIntoView)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiScrollIntoView,
      selectors: [["", "tuiScrollIntoView", ""]],
      inputs: {
        tuiScrollIntoView: "tuiScrollIntoView"
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollIntoView, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiScrollIntoView]"
    }]
  }], null, {
    tuiScrollIntoView: [{
      type: Input
    }]
  });
})();
var SCROLL_REF_SELECTOR = "[tuiScrollRef]";
var TuiScrollRef = class _TuiScrollRef {
  static {
    this.ɵfac = function TuiScrollRef_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiScrollRef)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiScrollRef,
      selectors: [["", "tuiScrollRef", ""]],
      standalone: true,
      features: [ɵɵProvidersFeature([tuiProvide(TUI_SCROLL_REF, ElementRef)])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollRef, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: SCROLL_REF_SELECTOR,
      providers: [tuiProvide(TUI_SCROLL_REF, ElementRef)]
    }]
  }], null, null);
})();
var TuiScrollable = class _TuiScrollable {
  constructor() {
    this.el = tuiInjectElement();
  }
  ngOnInit() {
    this.el.dispatchEvent(new CustomEvent(TUI_SCROLLABLE, {
      bubbles: true,
      detail: this.el
    }));
  }
  static {
    this.ɵfac = function TuiScrollable_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiScrollable)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiScrollable,
      selectors: [["", "tuiScrollable", ""]],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollable, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiScrollable]"
    }]
  }], null, null);
})();

export {
  tuiParentAnimation,
  tuiParentStop,
  tuiHost,
  tuiHeightCollapse,
  tuiHeightCollapseList,
  tuiWidthCollapse,
  tuiWidthCollapseList,
  tuiFadeIn,
  tuiFadeInList,
  tuiFadeInTop,
  tuiFadeInBottom,
  tuiDropdownAnimation,
  tuiScaleIn,
  tuiPop,
  tuiScaleInList,
  tuiSlideIn,
  tuiSlideInLeft,
  tuiSlideInLeftList,
  tuiSlideInRight,
  tuiSlideInRightList,
  tuiSlideInTop,
  tuiSlideInTopList,
  tuiSlideInBottom,
  tuiSlideInBottomList,
  tuiCheckFixedPosition,
  tuiGetViewportHeight,
  tuiGetViewportWidth,
  tuiGetWordRange,
  tuiNumberToStringWithoutExp,
  tuiGetFractionPartPadded,
  tuiFormatNumber,
  tuiStringHashToHsl,
  tuiIsEditingKey,
  tuiIsObscured,
  tuiOverrideOptions,
  tuiSizeBigger,
  TUI_ANIMATIONS_DEFAULT_DURATION,
  tuiToAnimationOptions,
  tuiGetDuration,
  TuiScrollbarService,
  TuiScrollbarDirective,
  TUI_DEFAULT_SCROLLBAR_OPTIONS,
  TUI_SCROLLBAR_OPTIONS,
  tuiScrollbarOptionsProvider,
  TuiScrollControls,
  TUI_SCROLL_INTO_VIEW,
  TUI_SCROLLABLE,
  TuiScrollbar,
  TuiScrollIntoView,
  SCROLL_REF_SELECTOR,
  TuiScrollRef,
  TuiScrollable
};
//# sourceMappingURL=chunk-5V4URJWY.js.map
