import {
  AnimationEngine
} from "./chunk-AMFLEHWL.js";
import {
  tuiGetActualTarget,
  tuiGetDocumentOrShadowRoot,
  tuiIsHTMLElement
} from "./chunk-TBFJZ2MD.js";
import {
  TUI_FALSE_HANDLER,
  TUI_TRUE_HANDLER,
  svgNodeFilter,
  tuiTypedFromEvent,
  tuiZonefreeScheduler
} from "./chunk-EEGF43CM.js";
import {
  toSignal,
  tuiCreateToken,
  tuiCreateTokenFromFactory,
  tuiProvideOptions
} from "./chunk-UQBCXIOX.js";
import {
  WA_NAVIGATOR,
  WA_USER_AGENT,
  WA_WINDOW
} from "./chunk-4P53LWHM.js";
import {
  DOCUMENT,
  isPlatformBrowser
} from "./chunk-6S6PAGJZ.js";
import {
  InjectionToken,
  NgZone,
  PLATFORM_ID,
  inject
} from "./chunk-DGEURTJ6.js";
import {
  BehaviorSubject,
  distinctUntilChanged,
  filter,
  fromEvent,
  map,
  merge,
  of,
  repeat,
  share,
  shareReplay,
  startWith,
  switchMap,
  take,
  takeUntil,
  timer,
  withLatestFrom
} from "./chunk-IJGLK444.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-3OV72XIM.js";

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-utils-focus.mjs
function tuiGetNativeFocused({
  activeElement
}) {
  if (!activeElement?.shadowRoot) {
    return activeElement;
  }
  let element = activeElement.shadowRoot.activeElement;
  while (element?.shadowRoot) {
    element = element.shadowRoot.activeElement;
  }
  return element;
}
function tuiBlurNativeFocused(doc) {
  const activeElement = tuiGetNativeFocused(doc);
  if (tuiIsHTMLElement(activeElement)) {
    activeElement.blur();
  }
}
function tuiFocusedIn(node) {
  return toSignal(merge(fromEvent(node, "focusin").pipe(map(TUI_TRUE_HANDLER)), fromEvent(node, "focusout").pipe(map(TUI_FALSE_HANDLER))), {
    initialValue: false
  });
}
function tuiIsNativeKeyboardFocusable(element) {
  if (element.hasAttribute("disabled") || element.getAttribute("tabIndex") === "-1") {
    return false;
  }
  if (tuiIsHTMLElement(element) && element.isContentEditable || element.getAttribute("tabIndex") === "0") {
    return true;
  }
  switch (element.tagName) {
    case "A":
    case "LINK":
      return element.hasAttribute("href");
    case "AUDIO":
    case "VIDEO":
      return element.hasAttribute("controls");
    case "BUTTON":
    case "SELECT":
    case "TEXTAREA":
      return true;
    case "INPUT":
      return element.getAttribute("type") !== "hidden";
    default:
      return false;
  }
}
function tuiIsNativeMouseFocusable(element) {
  return !element.hasAttribute("disabled") && (element.getAttribute("tabIndex") === "-1" || tuiIsNativeKeyboardFocusable(element));
}
function tuiGetClosestFocusable({
  initial,
  root,
  previous = false,
  keyboard = true
}) {
  if (!root.ownerDocument) {
    return null;
  }
  const check = keyboard ? tuiIsNativeKeyboardFocusable : tuiIsNativeMouseFocusable;
  const treeWalker = root.ownerDocument.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, svgNodeFilter);
  treeWalker.currentNode = initial;
  while (previous ? treeWalker.previousNode() : treeWalker.nextNode()) {
    if (tuiIsHTMLElement(treeWalker.currentNode)) {
      initial = treeWalker.currentNode;
    }
    if (tuiIsHTMLElement(initial) && check(initial)) {
      return initial;
    }
  }
  return null;
}
function tuiIsNativeFocused(node) {
  return !!node?.ownerDocument && tuiGetNativeFocused(node.ownerDocument) === node && node.ownerDocument.hasFocus();
}
function tuiIsNativeFocusedIn(node) {
  const focused = node?.ownerDocument && tuiGetNativeFocused(node.ownerDocument);
  return !!focused && node.contains(focused) && !!node.ownerDocument?.hasFocus();
}
function tuiMoveFocus(currentIndex, elements, step) {
  currentIndex += step;
  while (currentIndex >= 0 && currentIndex < elements.length) {
    elements[currentIndex]?.focus();
    if (tuiIsNativeFocused(elements[currentIndex])) {
      return;
    }
    currentIndex += step;
  }
}

// node_modules/@ng-web-apis/platform/fesm2022/ng-web-apis-platform.mjs
var WA_SAFARI_REG_EXP = /^((?!chrome|android).)*safari/i;
var WA_IOS_REG_EXP = /ipad|iphone|ipod/i;
function isIos({
  userAgent,
  maxTouchPoints
}) {
  return WA_IOS_REG_EXP.test(userAgent) || WA_SAFARI_REG_EXP.test(userAgent) && maxTouchPoints > 1;
}
var WA_IS_IOS = new InjectionToken("", {
  factory: () => isIos(inject(WA_NAVIGATOR))
});
var firstRegex = (
  // eslint-disable-next-line sonarjs/regex-complexity
  /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series([46])0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/
);
var secondRegex = (
  // eslint-disable-next-line sonarjs/regex-complexity
  /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br([ev])w|bumb|bw-([nu])|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do([cp])o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly([-_])|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-([mpt])|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c([- _agpst])|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac([ \-/])|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja([tv])a|jbro|jemu|jigs|kddi|keji|kgt([ /])|klon|kpt |kwc-|kyo([ck])|le(no|xi)|lg( g|\/([klu])|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t([- ov])|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30([02])|n50([025])|n7(0([01])|10)|ne(([cm])-|on|tf|wf|wg|wt)|nok([6i])|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan([adt])|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c([-01])|47|mc|nd|ri)|sgh-|shar|sie([-m])|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel([im])|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c([- ])|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/
);
var WA_IS_MOBILE = new InjectionToken("", {
  factory: () => firstRegex.test(inject(WA_USER_AGENT).toLowerCase()) || secondRegex.test(inject(WA_USER_AGENT).slice(0, 4).toLowerCase())
});
var WA_IS_ANDROID = new InjectionToken("", {
  factory: () => inject(WA_IS_MOBILE) && !inject(WA_IS_IOS)
});
function isApple(navigator) {
  return isIos(navigator) || WA_SAFARI_REG_EXP.test(navigator.userAgent);
}
var WA_IS_TOUCH = new InjectionToken("", {
  factory: () => {
    const media = inject(WA_WINDOW).matchMedia("(pointer: coarse)");
    return toSignal(fromEvent(media, "change").pipe(map(() => media.matches)), {
      initialValue: media.matches
    });
  }
});
var WA_IS_WEBKIT = new InjectionToken("", {
  factory: () => !!inject(WA_WINDOW)?.webkitConvertPointFromNodeToPage
});

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-utils-browser.mjs
function tuiIsApple(navigator) {
  return navigator.platform.startsWith("Mac") || navigator.platform === "iPhone";
}
function tuiIsEdge(userAgent) {
  return userAgent.toLowerCase().includes("edge");
}
function tuiIsFirefox(userAgent) {
  return userAgent.toLowerCase().includes("firefox");
}
var tuiIsIos = isIos;
function tuiIsSafari({
  ownerDocument: doc
}) {
  const win = doc?.defaultView;
  const isMacOsSafari = win.safari !== void 0 && win.safari?.pushNotification?.toString() === "[object SafariRemoteNotification]";
  const isIosSafari = !!win.navigator?.vendor?.includes("Apple") && !win.navigator?.userAgent?.includes("CriOS") && !win.navigator?.userAgent?.includes("FxiOS");
  return isMacOsSafari || isIosSafari;
}

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-utils-color.mjs
function tuiGetGradientData(gradient) {
  return gradient.slice(0, Math.max(0, gradient.length - 1)).replace("linear-gradient(", "");
}
function tuiHexToRgb(hex) {
  const matches = hex.replace("#", "").split("").map((char, _, array) => array.length === 3 ? char + char : char).join("").match(/.{2}/g);
  return matches ? matches.map((x) => Number.parseInt(x, 16)) : [0, 0, 0];
}
var getChunksFromString = (hex, chunkSize) => hex.match(new RegExp(`.{${chunkSize}}`, "g"));
var convertHexUnitTo256 = (hexStr) => parseInt(hexStr.repeat(2 / hexStr.length), 16);
var getAlphaFloat = (a, alpha) => {
  if (a !== void 0) {
    return Number((a / 255).toFixed(2));
  }
  if (typeof alpha !== "number" || alpha < 0 || alpha > 1) {
    return 1;
  }
  return alpha;
};
function tuiHexToRGBA(hex, alpha) {
  const [r, g, b, a] = tuiParseHex(hex, alpha);
  return a < 1 ? `rgba(${r}, ${g}, ${b}, ${a})` : `rgb(${r}, ${g}, ${b})`;
}
function tuiIsValidHex(hex) {
  return /^#([A-Fa-f0-9]{3,4}){1,2}$/.test(hex);
}
function tuiParseHex(hex, alpha) {
  if (!tuiIsValidHex(hex)) {
    throw new Error("Invalid HEX");
  }
  const chunkSize = Math.floor((hex.length - 1) / 3);
  const hexArr = getChunksFromString(hex.slice(1), chunkSize);
  const [r = NaN, g = NaN, b = NaN, a] = hexArr?.map(convertHexUnitTo256) ?? [];
  const floatAlpha = getAlphaFloat(a, alpha);
  return [r, g, b, floatAlpha];
}
function hsvToColor(h, s, v, n) {
  const k = (n + h / 60) % 6;
  return Math.round(v - v * s * Math.max(Math.min(k, 4 - k, 1), 0));
}
function tuiHsvToRgb(h, s, v) {
  return [hsvToColor(h, s, v, 5), hsvToColor(h, s, v, 3), hsvToColor(h, s, v, 1)];
}
var DEFAULT = [0, 0, 0, 1];
function tuiParseColor(color) {
  const stripped = color.replace("#", "").replace("rgba(", "").replace("rgb(", "").replace(")", "");
  const array = stripped.split(",").map((item) => parseFloat(item));
  if (array.length === 4) {
    return array;
  }
  if (array.length === 3) {
    return array.concat(1);
  }
  const matches = stripped.match(new RegExp(`(.{${stripped.length / 3}})`, "g"));
  if (!matches) {
    return DEFAULT;
  }
  const parsed = matches.map((char) => parseInt(stripped.length % 2 ? char + char : char, 16));
  return [parsed[0] ?? DEFAULT[0], parsed[1] ?? DEFAULT[1], parsed[2] ?? DEFAULT[2], parsed[3] ?? DEFAULT[3]];
}
var COMMA = String.raw`\s*,\s*`;
var HEX = "#(?:[a-f0-9]{6}|[a-f0-9]{3})";
var RGB = String.raw`\(\s*(?:\d{1,3}\s*,\s*){2}\d{1,3}\s*\)`;
var RGBA = String.raw`\(\s*(?:\d{1,3}\s*,\s*){2}\d{1,3}\s*,\s*\d*\.?\d+\)`;
var VALUE = String.raw`(?:[+-]?\d*\.?\d+)(?:%|[a-z]+)?`;
var KEYWORD = "[_a-z-][_a-z0-9-]*";
var COLOR = ["(?:", HEX, "|", "(?:rgb|hsl)", RGB, "|", "(?:rgba|hsla)", RGBA, "|", KEYWORD, ")"];
var REGEXP_ARRAY = [String.raw`\s*(`, ...COLOR, ")", String.raw`(?:\s+`, "(", VALUE, "))?", "(?:", COMMA, String.raw`\s*)?`];
function getPosition(match, stops) {
  const fallback = stops === 1 ? "100%" : `${stops}%`;
  return match?.includes("%") ? match : fallback;
}
function tuiParseGradient(input) {
  const stopsRegexp = new RegExp(REGEXP_ARRAY.join(""), "gi");
  const stopsString = input.startsWith("to") || /^\d/.exec(input) ? input.slice(Math.max(0, input.indexOf(",") + 1)).trim() : input;
  const side = input.startsWith("to") ? input.split(",")[0] : "to bottom";
  let stops = [];
  let matchColorStop = stopsRegexp.exec(stopsString);
  while (matchColorStop !== null) {
    stops = stops.concat({
      color: matchColorStop[1] || "",
      position: getPosition(matchColorStop[2] || "", stops.length)
    });
    matchColorStop = stopsRegexp.exec(stopsString);
  }
  stops = stops.filter(({
    color
  }) => color.startsWith("#") || color.startsWith("rgb"));
  return {
    stops,
    side
  };
}
function tuiToGradient({
  stops,
  side
}) {
  return `linear-gradient(${side}, ${stops.map(({
    color,
    position
  }) => `rgba(${tuiParseColor(color).join(", ")}) ${position}`).join(", ")})`;
}
function tuiRgbToHex(r, g, b) {
  return `#${[r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("")}`;
}
function tuiRgbToHsv(r, g, b) {
  const v = Math.max(r, g, b);
  const n = v - Math.min(r, g, b);
  const h = n && (v === r ? (g - b) / n : v === g ? 2 + (b - r) / n : 4 + (r - g) / n);
  return [60 * (h < 0 ? h + 6 : h), v && n / v, v];
}
function tuiRgbaToHex(color) {
  if (!tuiIsValidRgba(color)) {
    throw new Error("Invalid RGBa");
  }
  const rgb = /^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i.exec(color.replaceAll(/\s/g, "")) ?? null;
  let alpha = (rgb?.[4] ?? "").toString().trim();
  let hex = rgb ? ((parseInt(rgb?.[1] ?? "", 10) || 0) | 1 << 8).toString(16).slice(1) + ((parseInt(rgb?.[2] ?? "", 10) || 0) | 1 << 8).toString(16).slice(1) + ((parseInt(rgb?.[3] ?? "", 10) || 0) | 1 << 8).toString(16).slice(1) : color;
  alpha = alpha !== "" ? alpha : 1;
  alpha = (Number(alpha) * 255 | 1 << 8).toString(16).slice(1);
  hex += alpha;
  return `#${hex.toUpperCase()}`;
}
function tuiIsValidRgba(rgba) {
  const range = String.raw`(\d|[1-9]\d|1\d{2}|2[0-4]\d|2[0-5]{2})`;
  const alpha = String.raw`([01]|0?\.\d+)`;
  return new RegExp(`^(?:rgb\\(\\s*${range}\\s*,\\s*${range}\\s*,\\s*${range}\\s*\\)|rgba\\(\\s*${range}\\s*,\\s*${range}\\s*,\\s*${range}\\s*,\\s*${alpha}\\s*\\))$`).test(rgba);
}

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-utils-di.mjs
function tuiCreateOptions(defaults) {
  const token = tuiCreateToken(defaults);
  return [token, (options) => tuiProvideOptions(token, options, defaults)];
}

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-tokens.mjs
var TUI_REMOVED_ELEMENT = tuiCreateTokenFromFactory(() => {
  const stub = {
    onRemovalComplete: () => {
    }
  };
  const element$ = new BehaviorSubject(null);
  const engine = inject(AnimationEngine, {
    optional: true
  }) || stub;
  const {
    onRemovalComplete = stub.onRemovalComplete
  } = engine;
  engine.onRemovalComplete = (element, context) => {
    element$.next(element);
    onRemovalComplete.call(engine, element, context);
  };
  return element$.pipe(switchMap((element) => timer(0).pipe(map(() => null), startWith(element))), share());
});
function isValidFocusout(target, removedElement = null) {
  return (
    // Not due to switching tabs/going to DevTools
    tuiGetDocumentOrShadowRoot(target).activeElement !== target && // Not due to button/input becoming disabled or under disabled fieldset
    !target.matches(":disabled") && // Not due to element being removed from DOM
    !removedElement?.contains(target) && // Not due to scrollable element became non-scrollable
    tuiIsNativeMouseFocusable(target)
  );
}
function shadowRootActiveElement(root) {
  return merge(tuiTypedFromEvent(root, "focusin").pipe(map(({
    target
  }) => target)), tuiTypedFromEvent(root, "focusout").pipe(filter(({
    target,
    relatedTarget
  }) => !!relatedTarget && isValidFocusout(target)), map(({
    relatedTarget
  }) => relatedTarget)));
}
var TUI_ACTIVE_ELEMENT = tuiCreateTokenFromFactory(() => {
  const removedElement$ = inject(TUI_REMOVED_ELEMENT);
  const win = inject(WA_WINDOW);
  const doc = inject(DOCUMENT);
  const zone = inject(NgZone);
  const focusout$ = tuiTypedFromEvent(win, "focusout", {
    capture: true
  });
  const focusin$ = tuiTypedFromEvent(win, "focusin", {
    capture: true
  });
  const blur$ = tuiTypedFromEvent(win, "blur");
  const mousedown$ = tuiTypedFromEvent(win, "mousedown");
  const mouseup$ = tuiTypedFromEvent(win, "mouseup");
  return merge(focusout$.pipe(takeUntil(mousedown$), repeat({
    delay: () => mouseup$
  }), withLatestFrom(removedElement$), filter(([event, removedElement]) => isValidFocusout(tuiGetActualTarget(event), removedElement)), map(([{
    relatedTarget
  }]) => relatedTarget)), blur$.pipe(map(() => doc.activeElement), filter((element) => !!element?.matches("iframe"))), focusin$.pipe(switchMap((event) => {
    const target = tuiGetActualTarget(event);
    const root = tuiGetDocumentOrShadowRoot(target);
    return root === doc ? of(target) : shadowRootActiveElement(root).pipe(startWith(target));
  })), mousedown$.pipe(switchMap((event) => {
    const actualTargetInCurrentTime = tuiGetActualTarget(event);
    return !doc.activeElement || doc.activeElement === doc.body ? of(actualTargetInCurrentTime) : focusout$.pipe(take(1), map(
      /**
       * Do not use `map(() => tuiGetActualTarget(event))`
       * because we have different result in runtime
       */
      () => actualTargetInCurrentTime
    ), takeUntil(timer(0, tuiZonefreeScheduler(zone))));
  }))).pipe(distinctUntilChanged(), share());
});
var TUI_BASE_HREF = tuiCreateTokenFromFactory(() => inject(DOCUMENT).querySelector("base")?.href ?? "");
var firstRegex2 = (
  // eslint-disable-next-line sonarjs/regex-complexity
  /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series([46])0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/
);
var secondRegex2 = (
  // eslint-disable-next-line sonarjs/regex-complexity
  /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br([ev])w|bumb|bw-([nu])|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do([cp])o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly([-_])|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-([mpt])|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c([- _agpst])|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac([ \-/])|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja([tv])a|jbro|jemu|jigs|kddi|keji|kgt([ /])|klon|kpt |kwc-|kyo([ck])|le(no|xi)|lg( g|\/([klu])|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t([- ov])|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30([02])|n50([025])|n7(0([01])|10)|ne(([cm])-|on|tf|wf|wg|wt)|nok([6i])|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan([adt])|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c([-01])|47|mc|nd|ri)|sgh-|shar|sie([-m])|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel([im])|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c([- ])|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/
);
var TUI_IS_MOBILE = tuiCreateTokenFromFactory(() => firstRegex2.test(inject(WA_USER_AGENT).toLowerCase()) || secondRegex2.test(inject(WA_USER_AGENT).slice(0, 4).toLowerCase()));
var TUI_IS_IOS = tuiCreateTokenFromFactory(() => isIos(inject(WA_NAVIGATOR)));
var TUI_IS_ANDROID = tuiCreateTokenFromFactory(() => inject(TUI_IS_MOBILE) && !inject(TUI_IS_IOS));
var TUI_IS_WEBKIT = tuiCreateTokenFromFactory(() => !!inject(WA_WINDOW)?.webkitConvertPointFromNodeToPage);
var TUI_PLATFORM = tuiCreateTokenFromFactory(() => {
  if (inject(TUI_IS_IOS)) {
    return "ios";
  }
  return inject(TUI_IS_ANDROID) ? "android" : "web";
});
var TUI_IS_TOUCH = tuiCreateTokenFromFactory(() => {
  const media = inject(WA_WINDOW).matchMedia("(pointer: coarse)");
  return toSignal(fromEvent(media, "change").pipe(map(() => media.matches)), {
    initialValue: media.matches
  });
});
var TUI_IS_CYPRESS = tuiCreateTokenFromFactory(() => !!inject(WA_WINDOW).Cypress);
var TUI_IS_PLAYWRIGHT = tuiCreateTokenFromFactory(TUI_FALSE_HANDLER);
var TUI_IS_E2E = tuiCreateTokenFromFactory(() => inject(TUI_IS_CYPRESS) || inject(TUI_IS_PLAYWRIGHT));
var TUI_FALLBACK_VALUE = tuiCreateToken(null);
function tuiFallbackValueProvider(useValue) {
  return {
    provide: TUI_FALLBACK_VALUE,
    useValue
  };
}
var TUI_RANGE = tuiCreateTokenFromFactory(() => isPlatformBrowser(inject(PLATFORM_ID)) ? new Range() : {});
var TUI_WINDOW_SIZE = tuiCreateTokenFromFactory(() => {
  const w = inject(WA_WINDOW);
  return tuiTypedFromEvent(w, "resize").pipe(startWith(null), map(() => {
    const width = Math.max(w.document.documentElement.clientWidth || 0, w.innerWidth || 0, w.visualViewport?.width || 0);
    const height = Math.max(w.document.documentElement.clientHeight || 0, w.innerHeight || 0, w.visualViewport?.height || 0);
    const rect = {
      width,
      height,
      top: 0,
      left: 0,
      right: width,
      bottom: height,
      x: 0,
      y: 0
    };
    return __spreadProps(__spreadValues({}, rect), {
      toJSON: () => JSON.stringify(rect)
    });
  }), shareReplay({
    bufferSize: 1,
    refCount: true
  }));
});

export {
  tuiGetNativeFocused,
  tuiBlurNativeFocused,
  tuiFocusedIn,
  tuiIsNativeKeyboardFocusable,
  tuiIsNativeMouseFocusable,
  tuiGetClosestFocusable,
  tuiIsNativeFocused,
  tuiIsNativeFocusedIn,
  tuiMoveFocus,
  isApple,
  tuiIsApple,
  tuiIsEdge,
  tuiIsFirefox,
  tuiIsIos,
  tuiIsSafari,
  tuiGetGradientData,
  tuiHexToRgb,
  tuiHexToRGBA,
  tuiIsValidHex,
  tuiParseHex,
  tuiHsvToRgb,
  tuiParseColor,
  tuiParseGradient,
  tuiToGradient,
  tuiRgbToHex,
  tuiRgbToHsv,
  tuiRgbaToHex,
  tuiIsValidRgba,
  tuiCreateOptions,
  TUI_REMOVED_ELEMENT,
  TUI_ACTIVE_ELEMENT,
  TUI_BASE_HREF,
  TUI_IS_MOBILE,
  TUI_IS_IOS,
  TUI_IS_ANDROID,
  TUI_IS_WEBKIT,
  TUI_PLATFORM,
  TUI_IS_TOUCH,
  TUI_IS_CYPRESS,
  TUI_IS_PLAYWRIGHT,
  TUI_IS_E2E,
  TUI_FALLBACK_VALUE,
  tuiFallbackValueProvider,
  TUI_RANGE,
  TUI_WINDOW_SIZE
};
//# sourceMappingURL=chunk-XQO3CN4Y.js.map
