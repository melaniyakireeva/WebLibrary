import {
  TUI_DROPDOWN_COMPONENT
} from "./chunk-KJBJNCEM.js";
import {
  TUI_IS_MOBILE
} from "./chunk-ZRKXNDNW.js";
import {
  TUI_DEFAULT_IDENTITY_MATCHER,
  TUI_FALSE_HANDLER,
  TUI_FIRST_DAY,
  TUI_LAST_DAY,
  tuiControlValue
} from "./chunk-EEGF43CM.js";
import {
  tuiExtractI18n
} from "./chunk-JCSNZRF4.js";
import {
  tuiCreateToken,
  tuiCreateTokenFromFactory,
  tuiProvideOptions
} from "./chunk-UQBCXIOX.js";
import {
  NgControl
} from "./chunk-5GCG6HC6.js";
import {
  Optional,
  Self,
  inject
} from "./chunk-DGEURTJ6.js";
import {
  map,
  of
} from "./chunk-IJGLK444.js";

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-tokens.mjs
var TUI_CALENDAR_DATE_STREAM = tuiCreateToken();
function tuiDateStreamWithTransformer(transformer) {
  return {
    provide: TUI_CALENDAR_DATE_STREAM,
    deps: [[new Optional(), new Self(), NgControl], [new Optional(), transformer]],
    useFactory: tuiControlValueFactory
  };
}
function tuiControlValueFactory(control, transformer) {
  return control ? tuiControlValue(control).pipe(map((value) => transformer ? transformer?.fromControlValue(value) : value)) : of(null);
}
var TUI_DATE_VALUE_TRANSFORMER = tuiCreateToken();
var TUI_DATE_RANGE_VALUE_TRANSFORMER = tuiCreateToken();
var TUI_DATE_TIME_VALUE_TRANSFORMER = tuiCreateToken();
var TUI_TIME_VALUE_TRANSFORMER = tuiCreateToken();
var TUI_CONFIRM_WORDS = tuiCreateTokenFromFactory(tuiExtractI18n("confirm"));
var TUI_CANCEL_WORD = tuiCreateTokenFromFactory(tuiExtractI18n("cancel"));
var TUI_DONE_WORD = tuiCreateTokenFromFactory(tuiExtractI18n("done"));
var TUI_MORE_WORD = tuiCreateTokenFromFactory(tuiExtractI18n("more"));
var TUI_HIDE_TEXT = tuiCreateTokenFromFactory(tuiExtractI18n("hide"));
var TUI_SHOW_ALL_TEXT = tuiCreateTokenFromFactory(tuiExtractI18n("showAll"));
var TUI_OTHER_DATE_TEXT = tuiCreateTokenFromFactory(tuiExtractI18n("otherDate"));
var TUI_CHOOSE_DAY_OR_RANGE_TEXTS = tuiCreateTokenFromFactory(tuiExtractI18n("mobileCalendarTexts"));
var TUI_FROM_TO_TEXTS = tuiCreateTokenFromFactory(tuiExtractI18n("range"));
var TUI_PLUS_MINUS_TEXTS = tuiCreateTokenFromFactory(tuiExtractI18n("countTexts"));
var TUI_TIME_TEXTS = tuiCreateTokenFromFactory(tuiExtractI18n("time"));
var TUI_DATE_TEXTS = tuiCreateTokenFromFactory(tuiExtractI18n("dateTexts"));
var TUI_DIGITAL_INFORMATION_UNITS = tuiCreateTokenFromFactory(tuiExtractI18n("digitalInformationUnits"));
var TUI_COPY_TEXTS = tuiCreateTokenFromFactory(tuiExtractI18n("copyTexts"));
var TUI_PASSWORD_TEXTS = tuiCreateTokenFromFactory(tuiExtractI18n("passwordTexts"));
var TUI_CALENDAR_MONTHS = tuiCreateTokenFromFactory(tuiExtractI18n("shortCalendarMonths"));
var TUI_FILE_TEXTS = tuiCreateTokenFromFactory(tuiExtractI18n("fileTexts"));
var TUI_PAGINATION_TEXTS = tuiCreateTokenFromFactory(tuiExtractI18n("pagination"));
var TUI_INPUT_FILE_TEXTS = tuiCreateTokenFromFactory(tuiExtractI18n("inputFileTexts"));
var TUI_MULTI_SELECT_TEXTS = tuiCreateTokenFromFactory(tuiExtractI18n("multiSelectTexts"));
var TUI_COUNTRIES = tuiCreateTokenFromFactory(tuiExtractI18n("countries"));
var TUI_PREVIEW_TEXTS = tuiCreateTokenFromFactory(tuiExtractI18n("previewTexts"));
var TUI_PREVIEW_ZOOM_TEXTS = tuiCreateTokenFromFactory(tuiExtractI18n("zoomTexts"));
var TUI_INTERNATIONAL_SEARCH = tuiCreateTokenFromFactory(tuiExtractI18n("phoneSearch"));
var TUI_INPUT_DATE_DEFAULT_OPTIONS = {
  icon: () => "@tui.calendar",
  min: TUI_FIRST_DAY,
  max: TUI_LAST_DAY,
  nativePicker: false
};
var TUI_INPUT_DATE_OPTIONS = tuiCreateToken(TUI_INPUT_DATE_DEFAULT_OPTIONS);
function tuiInputDateOptionsProvider(options) {
  return tuiProvideOptions(TUI_INPUT_DATE_OPTIONS, options, TUI_INPUT_DATE_DEFAULT_OPTIONS);
}
var TUI_DEFAULT_ITEMS_HANDLERS = {
  stringify: String,
  identityMatcher: TUI_DEFAULT_IDENTITY_MATCHER,
  disabledItemHandler: TUI_FALSE_HANDLER
};
var TUI_ITEMS_HANDLERS = tuiCreateToken(TUI_DEFAULT_ITEMS_HANDLERS);
function tuiItemsHandlersProvider(options) {
  return tuiProvideOptions(TUI_ITEMS_HANDLERS, options, TUI_DEFAULT_ITEMS_HANDLERS);
}
var TUI_MOBILE_CALENDAR = tuiCreateToken();
var TUI_MOBILE_CALENDAR_PROVIDER = {
  provide: TUI_DROPDOWN_COMPONENT,
  useFactory: () => inject(TUI_IS_MOBILE) && inject(TUI_MOBILE_CALENDAR, {
    optional: true
  }) || inject(TUI_DROPDOWN_COMPONENT, {
    skipSelf: true
  })
};
var TUI_PREVIEW_ICONS_DEFAULT = {
  rotate: "@tui.rotate-ccw-square",
  prev: "@tui.arrow-left",
  next: "@tui.arrow-right",
  zoomIn: "@tui.plus",
  zoomOut: "@tui.minus",
  zoomReset: "@tui.minimize"
};
var TUI_PREVIEW_ICONS = tuiCreateToken(TUI_PREVIEW_ICONS_DEFAULT);
function tuiPreviewIconsProvider(icons) {
  return tuiProvideOptions(TUI_PREVIEW_ICONS, icons, TUI_PREVIEW_ICONS_DEFAULT);
}
var TUI_VALIDATION_ERRORS = tuiCreateToken({});
var tuiValidationErrorsProvider = (useValue) => ({
  provide: TUI_VALIDATION_ERRORS,
  useValue
});

export {
  TUI_CALENDAR_DATE_STREAM,
  tuiDateStreamWithTransformer,
  TUI_DATE_VALUE_TRANSFORMER,
  TUI_DATE_RANGE_VALUE_TRANSFORMER,
  TUI_DATE_TIME_VALUE_TRANSFORMER,
  TUI_TIME_VALUE_TRANSFORMER,
  TUI_CONFIRM_WORDS,
  TUI_CANCEL_WORD,
  TUI_DONE_WORD,
  TUI_MORE_WORD,
  TUI_HIDE_TEXT,
  TUI_SHOW_ALL_TEXT,
  TUI_OTHER_DATE_TEXT,
  TUI_CHOOSE_DAY_OR_RANGE_TEXTS,
  TUI_FROM_TO_TEXTS,
  TUI_PLUS_MINUS_TEXTS,
  TUI_TIME_TEXTS,
  TUI_DATE_TEXTS,
  TUI_DIGITAL_INFORMATION_UNITS,
  TUI_COPY_TEXTS,
  TUI_PASSWORD_TEXTS,
  TUI_CALENDAR_MONTHS,
  TUI_FILE_TEXTS,
  TUI_PAGINATION_TEXTS,
  TUI_INPUT_FILE_TEXTS,
  TUI_MULTI_SELECT_TEXTS,
  TUI_COUNTRIES,
  TUI_PREVIEW_TEXTS,
  TUI_PREVIEW_ZOOM_TEXTS,
  TUI_INTERNATIONAL_SEARCH,
  TUI_INPUT_DATE_DEFAULT_OPTIONS,
  TUI_INPUT_DATE_OPTIONS,
  tuiInputDateOptionsProvider,
  TUI_DEFAULT_ITEMS_HANDLERS,
  TUI_ITEMS_HANDLERS,
  tuiItemsHandlersProvider,
  TUI_MOBILE_CALENDAR,
  TUI_MOBILE_CALENDAR_PROVIDER,
  TUI_PREVIEW_ICONS_DEFAULT,
  TUI_PREVIEW_ICONS,
  tuiPreviewIconsProvider,
  TUI_VALIDATION_ERRORS,
  tuiValidationErrorsProvider
};
//# sourceMappingURL=chunk-MJEN4Q2A.js.map
