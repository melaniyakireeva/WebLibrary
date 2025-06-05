import {
  tuiExtractI18n
} from "./chunk-JCSNZRF4.js";
import {
  CHAR_NO_BREAK_SPACE,
  TuiDayOfWeek,
  tuiTypedFromEvent
} from "./chunk-EEGF43CM.js";
import {
  takeUntilDestroyed,
  tuiCreateToken,
  tuiCreateTokenFromFactory,
  tuiProvide,
  tuiProvideOptions
} from "./chunk-UQBCXIOX.js";
import {
  WA_LOCAL_STORAGE,
  WA_WINDOW
} from "./chunk-4P53LWHM.js";
import {
  DOCUMENT
} from "./chunk-6S6PAGJZ.js";
import {
  ElementRef,
  Optional,
  SkipSelf,
  effect,
  inject,
  signal
} from "./chunk-DGEURTJ6.js";
import {
  filter,
  fromEvent,
  map,
  merge,
  of,
  share,
  switchMap,
  takeUntil
} from "./chunk-IJGLK444.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-3OV72XIM.js";

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-tokens.mjs
var TUI_REDUCED_MOTION = tuiCreateTokenFromFactory(() => inject(DOCUMENT).defaultView?.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false);
var TUI_ANIMATIONS_SPEED = tuiCreateTokenFromFactory(() => inject(TUI_REDUCED_MOTION) ? 0 : 1);
var TUI_ASSETS_PATH = tuiCreateToken("assets/taiga-ui/icons");
function tuiAssetsPathProvider(useValue) {
  return {
    provide: TUI_ASSETS_PATH,
    useValue
  };
}
var COMMON_ICONS = {
  check: "@tui.check",
  close: "@tui.x",
  error: "@tui.circle-alert",
  more: "@tui.chevron-right",
  search: "@tui.search",
  ellipsis: "@tui.ellipsis"
};
var TUI_COMMON_ICONS = tuiCreateToken(COMMON_ICONS);
function tuiCommonIconsProvider(icons) {
  return tuiProvideOptions(TUI_COMMON_ICONS, icons, COMMON_ICONS);
}
var TUI_DARK_MODE_DEFAULT_KEY = "tuiDark";
var TUI_DARK_MODE_KEY = tuiCreateToken(TUI_DARK_MODE_DEFAULT_KEY);
var TUI_DARK_MODE = tuiCreateTokenFromFactory(() => {
  let automatic = true;
  const storage = inject(WA_LOCAL_STORAGE);
  const key = inject(TUI_DARK_MODE_KEY);
  const saved = storage.getItem(key);
  const media = inject(WA_WINDOW).matchMedia("(prefers-color-scheme: dark)");
  const result = signal(Boolean((saved && JSON.parse(saved)) ?? media.matches));
  fromEvent(media, "change").pipe(filter(() => !storage.getItem(key)), takeUntilDestroyed()).subscribe(() => {
    automatic = true;
    result.set(media.matches);
  });
  effect(() => {
    const value = String(result());
    if (automatic) {
      automatic = false;
    } else {
      storage.setItem(key, value);
    }
  });
  return Object.assign(result, {
    reset: () => {
      storage.removeItem(key);
      automatic = true;
      result.set(media.matches);
    }
  });
});
var TUI_DEFAULT_DATE_FORMAT = {
  mode: "DMY",
  separator: "."
};
var TUI_DATE_FORMAT = tuiCreateToken(of(TUI_DEFAULT_DATE_FORMAT));
function tuiDateFormatProvider(options) {
  return {
    provide: TUI_DATE_FORMAT,
    deps: [[new Optional(), new SkipSelf(), TUI_DATE_FORMAT]],
    useFactory: (parent) => (parent || of(TUI_DEFAULT_DATE_FORMAT)).pipe(map((format) => __spreadValues(__spreadValues({}, format), options)))
  };
}
var TUI_DAY_TYPE_HANDLER = tuiCreateToken((day) => day.isWeekend ? "weekend" : "weekday");
var TUI_FIRST_DAY_OF_WEEK = tuiCreateToken(TuiDayOfWeek.Monday);
var TUI_MONTHS = tuiCreateTokenFromFactory(tuiExtractI18n("months"));
var TUI_CLOSE_WORD = tuiCreateTokenFromFactory(tuiExtractI18n("close"));
var TUI_CLEAR_WORD = tuiCreateTokenFromFactory(tuiExtractI18n("clear"));
var TUI_NOTHING_FOUND_MESSAGE = tuiCreateTokenFromFactory(tuiExtractI18n("nothingFoundMessage"));
var TUI_DEFAULT_ERROR_MESSAGE = tuiCreateTokenFromFactory(tuiExtractI18n("defaultErrorMessage"));
var TUI_SPIN_TEXTS = tuiCreateTokenFromFactory(tuiExtractI18n("spinTexts"));
var TUI_SHORT_WEEK_DAYS = tuiCreateTokenFromFactory(tuiExtractI18n("shortWeekDays"));
var TUI_ICON_START = tuiCreateToken("");
var TUI_ICON_END = tuiCreateToken("");
var TUI_ICON_REGISTRY = tuiCreateToken({});
var TUI_ICON_STARTS = TUI_ICON_REGISTRY;
function tuiIconsProvider(icons) {
  return {
    provide: TUI_ICON_REGISTRY,
    useFactory: () => __spreadValues(__spreadValues({}, inject(TUI_ICON_REGISTRY, {
      skipSelf: true,
      optional: true
    }) || {}), Object.fromEntries(Object.entries(icons).map(([key, value]) => [key, `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(value)}`])))
  };
}
var TUI_ICON_RESOLVER = tuiCreateTokenFromFactory(() => {
  const path = inject(TUI_ASSETS_PATH);
  return (icon) => `${path}/${icon.replace("@tui.", "").split(".").join("/")}.svg`;
});
var TUI_ICON_START_RESOLVER = TUI_ICON_RESOLVER;
function tuiInjectIconResolver() {
  const icons = inject(TUI_ICON_REGISTRY);
  const resolver = inject(TUI_ICON_RESOLVER);
  return (icon) => !icon || icon.includes("/") ? icon : icons[icon] ?? resolver(icon);
}
function tuiIconResolverProvider(useValue) {
  return {
    provide: TUI_ICON_RESOLVER,
    useValue
  };
}
var TUI_MEDIA = tuiCreateToken({
  mobile: 768,
  desktopSmall: 1024,
  desktopLarge: 1280
});
var TUI_DEFAULT_NUMBER_FORMAT = {
  precision: NaN,
  decimalSeparator: ".",
  thousandSeparator: CHAR_NO_BREAK_SPACE,
  rounding: "truncate",
  decimalMode: "pad"
};
var TUI_NUMBER_FORMAT = tuiCreateToken(of(TUI_DEFAULT_NUMBER_FORMAT));
function tuiNumberFormatProvider(options) {
  return {
    provide: TUI_NUMBER_FORMAT,
    deps: [[new Optional(), new SkipSelf(), TUI_NUMBER_FORMAT]],
    useFactory: (parent) => (parent || of(TUI_DEFAULT_NUMBER_FORMAT)).pipe(map((format) => __spreadValues(__spreadValues({}, format), options)))
  };
}
var TUI_SCROLL_REF = tuiCreateTokenFromFactory(() => new ElementRef(inject(DOCUMENT).documentElement));
var TUI_SELECTION_STREAM = tuiCreateTokenFromFactory(() => {
  const doc = inject(DOCUMENT);
  return merge(tuiTypedFromEvent(doc, "selectionchange"), tuiTypedFromEvent(doc, "mouseup"), tuiTypedFromEvent(doc, "mousedown").pipe(switchMap(() => tuiTypedFromEvent(doc, "mousemove").pipe(takeUntil(tuiTypedFromEvent(doc, "mouseup"))))), tuiTypedFromEvent(doc, "keydown"), tuiTypedFromEvent(doc, "keyup")).pipe(share());
});
var TUI_SPIN_ICONS = tuiCreateToken({
  decrement: "@tui.chevron-left",
  increment: "@tui.chevron-right"
});
var TUI_THEME = tuiCreateToken("Taiga UI");
var TUI_VIEWPORT = tuiCreateTokenFromFactory(() => {
  const win = inject(WA_WINDOW);
  return {
    type: "viewport",
    getClientRect() {
      const rect = {
        top: 0,
        left: 0,
        right: win.innerWidth,
        bottom: win.innerHeight,
        width: win.innerWidth,
        height: win.innerHeight,
        x: 0,
        y: 0
      };
      return __spreadProps(__spreadValues({}, rect), {
        toJSON: () => JSON.stringify(rect)
      });
    }
  };
});
function tuiAsViewport(accessor) {
  return tuiProvide(TUI_VIEWPORT, accessor);
}

export {
  TUI_REDUCED_MOTION,
  TUI_ANIMATIONS_SPEED,
  TUI_ASSETS_PATH,
  tuiAssetsPathProvider,
  TUI_COMMON_ICONS,
  tuiCommonIconsProvider,
  TUI_DARK_MODE_DEFAULT_KEY,
  TUI_DARK_MODE_KEY,
  TUI_DARK_MODE,
  TUI_DEFAULT_DATE_FORMAT,
  TUI_DATE_FORMAT,
  tuiDateFormatProvider,
  TUI_DAY_TYPE_HANDLER,
  TUI_FIRST_DAY_OF_WEEK,
  TUI_MONTHS,
  TUI_CLOSE_WORD,
  TUI_CLEAR_WORD,
  TUI_NOTHING_FOUND_MESSAGE,
  TUI_DEFAULT_ERROR_MESSAGE,
  TUI_SPIN_TEXTS,
  TUI_SHORT_WEEK_DAYS,
  TUI_ICON_START,
  TUI_ICON_END,
  TUI_ICON_REGISTRY,
  TUI_ICON_STARTS,
  tuiIconsProvider,
  TUI_ICON_RESOLVER,
  TUI_ICON_START_RESOLVER,
  tuiInjectIconResolver,
  tuiIconResolverProvider,
  TUI_MEDIA,
  TUI_DEFAULT_NUMBER_FORMAT,
  TUI_NUMBER_FORMAT,
  tuiNumberFormatProvider,
  TUI_SCROLL_REF,
  TUI_SELECTION_STREAM,
  TUI_SPIN_ICONS,
  TUI_THEME,
  TUI_VIEWPORT,
  tuiAsViewport
};
//# sourceMappingURL=chunk-4XVFG3K5.js.map
