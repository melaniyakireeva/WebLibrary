import {
  shouldCall
} from "./chunk-IHLRT44D.js";
import {
  TuiActiveZone,
  TuiObscured,
  TuiPortalService,
  TuiPortals,
  tuiAsPortal
} from "./chunk-LAEKWENP.js";
import {
  PolymorpheusComponent,
  PolymorpheusOutlet,
  PolymorpheusTemplate
} from "./chunk-SX7GMV2W.js";
import {
  TuiWithIcons
} from "./chunk-4BMOQLYZ.js";
import {
  TuiScrollbar,
  tuiCheckFixedPosition,
  tuiDropdownAnimation,
  tuiGetWordRange,
  tuiIsEditingKey,
  tuiOverrideOptions,
  tuiToAnimationOptions
} from "./chunk-I7R3GOPA.js";
import {
  TUI_IS_MOBILE,
  TUI_IS_TOUCH,
  TUI_IS_WEBKIT,
  TUI_RANGE,
  TUI_WINDOW_SIZE,
  tuiGetClosestFocusable,
  tuiGetNativeFocused,
  tuiIsNativeFocused,
  tuiIsNativeFocusedIn,
  tuiIsNativeKeyboardFocusable,
  tuiMoveFocus
} from "./chunk-ZRKXNDNW.js";
import {
  tuiGetActualTarget,
  tuiInjectElement,
  tuiIsElement,
  tuiIsElementEditable,
  tuiIsHTMLElement,
  tuiIsTextNode,
  tuiIsTextfield,
  tuiPointToClientRect
} from "./chunk-TBFJZ2MD.js";
import {
  TUI_ANIMATIONS_SPEED,
  TUI_MEDIA,
  TUI_NOTHING_FOUND_MESSAGE,
  TUI_SELECTION_STREAM,
  TUI_VIEWPORT
} from "./chunk-SYK4K5AT.js";
import {
  CHAR_NO_BREAK_SPACE,
  CHAR_ZERO_WIDTH_SPACE,
  EMPTY_CLIENT_RECT,
  EMPTY_QUERY,
  TUI_TRUE_HANDLER,
  tuiTakeUntilDestroyed,
  tuiTypedFromEvent,
  tuiWatch,
  tuiZoneOptimized,
  tuiZonefree,
  tuiZonefreeScheduler
} from "./chunk-EEGF43CM.js";
import {
  takeUntilDestroyed,
  toSignal,
  tuiClamp,
  tuiCreateToken,
  tuiCreateTokenFromFactory,
  tuiDirectiveBinding,
  tuiIsPresent,
  tuiIsString,
  tuiProvide,
  tuiProvideOptions,
  tuiPure,
  tuiPx
} from "./chunk-UQBCXIOX.js";
import {
  WA_ANIMATION_FRAME,
  WA_WINDOW
} from "./chunk-4P53LWHM.js";
import {
  DOCUMENT,
  NgIf
} from "./chunk-6S6PAGJZ.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  DestroyRef,
  Directive,
  ElementRef,
  EventEmitter,
  INJECTOR$1,
  Injectable,
  Input,
  LOCALE_ID,
  NgZone,
  Optional,
  Output,
  Self,
  SkipSelf,
  TemplateRef,
  ViewContainerRef,
  ViewEncapsulation$1,
  computed,
  forwardRef,
  inject,
  setClassMetadata,
  signal,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresolveDocument,
  ɵɵstyleProp,
  ɵɵsyntheticHostProperty,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-DGEURTJ6.js";
import {
  BehaviorSubject,
  Observable,
  Subject,
  __decorate,
  combineLatest,
  delay,
  distinctUntilChanged,
  filter,
  finalize,
  fromEvent,
  map,
  merge,
  of,
  share,
  shareReplay,
  startWith,
  switchMap,
  takeWhile,
  tap,
  throttleTime,
  timer
} from "./chunk-IJGLK444.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-3OV72XIM.js";

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-classes.mjs
var TuiAccessor = class {
};
var TuiPositionAccessor = class extends TuiAccessor {
};
var TuiRectAccessor = class extends TuiAccessor {
};
function tuiProvideAccessor(provide, type, fallback) {
  return {
    provide,
    deps: [[new SkipSelf(), new Optional(), provide], fallback],
    useFactory: tuiFallbackAccessor(type)
  };
}
function tuiFallbackAccessor(type) {
  return (accessors, fallback) => accessors?.find?.((accessor) => accessor !== fallback && accessor.type === type) || fallback;
}
function tuiPositionAccessorFor(type, fallback) {
  return tuiProvideAccessor(TuiPositionAccessor, type, fallback);
}
function tuiRectAccessorFor(type, fallback) {
  return tuiProvideAccessor(TuiRectAccessor, type, fallback);
}
function tuiAsPositionAccessor(accessor) {
  return tuiProvide(TuiPositionAccessor, accessor, true);
}
function tuiAsRectAccessor(accessor) {
  return tuiProvide(TuiRectAccessor, accessor, true);
}
var TuiVehicle = class {
};
function tuiAsVehicle(vehicle) {
  return tuiProvide(TuiVehicle, vehicle, true);
}
var TuiDriver = class extends Observable {
};
function tuiAsDriver(driver) {
  return tuiProvide(TuiDriver, driver, true);
}
var TuiDriverDirective = class _TuiDriverDirective {
  constructor() {
    this.destroyRef = inject(DestroyRef);
    this.drivers = inject(TuiDriver);
    this.vehicles = inject(TuiVehicle);
  }
  ngOnInit() {
    const vehicle = this.vehicles.find(({
      type
    }) => type === this.type);
    merge(...this.drivers.filter(({
      type
    }) => type === this.type)).pipe(distinctUntilChanged(), takeUntilDestroyed(this.destroyRef)).subscribe((value) => {
      vehicle?.toggle(value);
    });
  }
  static {
    this.ɵfac = function TuiDriverDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDriverDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDriverDirective
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDriverDirective, [{
    type: Directive
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-services.mjs
var TuiBreakpointService = class _TuiBreakpointService extends Observable {
  constructor() {
    super((subscriber) => this.stream$.subscribe(subscriber));
    this.media = inject(TUI_MEDIA);
    this.sorted = Object.values(this.media).sort((a, b) => a - b);
    this.invert = Object.keys(this.media).reduce((ret, key) => __spreadProps(__spreadValues({}, ret), {
      [this.media[key]]: key
    }), {});
    this.stream$ = inject(TUI_WINDOW_SIZE).pipe(map(({
      width
    }) => this.sorted.find((size) => size > width)), map((key) => this.invert[key || this.sorted[this.sorted.length - 1] || 0]), distinctUntilChanged(), tuiZoneOptimized(), shareReplay({
      bufferSize: 1,
      refCount: true
    }));
  }
  static {
    this.ɵfac = function TuiBreakpointService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiBreakpointService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiBreakpointService,
      factory: _TuiBreakpointService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiBreakpointService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [];
  }, null);
})();
var TuiDarkThemeService = class _TuiDarkThemeService extends Observable {
  constructor() {
    const media = inject(WA_WINDOW).matchMedia("(prefers-color-scheme: dark)");
    const media$ = fromEvent(media, "change").pipe(startWith(null), map(() => media.matches), shareReplay({
      bufferSize: 1,
      refCount: true
    }));
    super((subscriber) => media$.subscribe(subscriber));
  }
  static {
    this.ɵfac = function TuiDarkThemeService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDarkThemeService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiDarkThemeService,
      factory: _TuiDarkThemeService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDarkThemeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [];
  }, null);
})();
var TuiFormatDateService = class _TuiFormatDateService {
  constructor() {
    this.locale = inject(LOCALE_ID);
  }
  format(timestamp) {
    return of(new Date(timestamp).toLocaleTimeString(this.locale, {
      hour: "numeric",
      minute: "2-digit"
    }));
  }
  static {
    this.ɵfac = function TuiFormatDateService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiFormatDateService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiFormatDateService,
      factory: _TuiFormatDateService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFormatDateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var TuiPositionService = class _TuiPositionService extends Observable {
  constructor() {
    const animationFrame$ = inject(WA_ANIMATION_FRAME);
    const zone = inject(NgZone);
    super((subscriber) => animationFrame$.pipe(startWith(null), map(() => this.accessor.getPosition(this.el.getBoundingClientRect(), this.el)), tuiZonefree(zone), finalize(() => this.accessor.getPosition(EMPTY_CLIENT_RECT))).subscribe(subscriber));
    this.el = tuiInjectElement();
    this.accessor = inject(TuiPositionAccessor);
  }
  static {
    this.ɵfac = function TuiPositionService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiPositionService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiPositionService,
      factory: _TuiPositionService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPositionService, [{
    type: Injectable
  }], function() {
    return [];
  }, null);
})();
var TuiVisualViewportService = class _TuiVisualViewportService {
  constructor() {
    this.isWebkit = inject(TUI_IS_WEBKIT);
    this.win = inject(WA_WINDOW);
  }
  // https://bugs.webkit.org/show_bug.cgi?id=207089
  correct(point) {
    return this.isWebkit ? [point[0] + (this.win.visualViewport?.offsetTop ?? 0), point[1] + (this.win.visualViewport?.offsetLeft ?? 0)] : point;
  }
  static {
    this.ɵfac = function TuiVisualViewportService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiVisualViewportService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiVisualViewportService,
      factory: _TuiVisualViewportService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiVisualViewportService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-directives-dropdown.mjs
var _c0 = (a0) => ({
  $implicit: a0
});
function TuiDropdownComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const text_r1 = ctx.polymorpheusOutlet;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", text_r1, " ");
  }
}
var _c1 = ["tuiDropdownHost"];
var _c2 = ["*"];
var TuiDropdownDriver = class _TuiDropdownDriver extends Subject {
  constructor() {
    super(...arguments);
    this.type = "dropdown";
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiDropdownDriver_BaseFactory;
      return function TuiDropdownDriver_Factory(__ngFactoryType__) {
        return (ɵTuiDropdownDriver_BaseFactory || (ɵTuiDropdownDriver_BaseFactory = ɵɵgetInheritedFactory(_TuiDropdownDriver)))(__ngFactoryType__ || _TuiDropdownDriver);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiDropdownDriver,
      factory: _TuiDropdownDriver.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownDriver, [{
    type: Injectable
  }], null, null);
})();
var TuiDropdownDriverDirective = class _TuiDropdownDriverDirective extends TuiDriverDirective {
  constructor() {
    super(...arguments);
    this.type = "dropdown";
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiDropdownDriverDirective_BaseFactory;
      return function TuiDropdownDriverDirective_Factory(__ngFactoryType__) {
        return (ɵTuiDropdownDriverDirective_BaseFactory || (ɵTuiDropdownDriverDirective_BaseFactory = ɵɵgetInheritedFactory(_TuiDropdownDriverDirective)))(__ngFactoryType__ || _TuiDropdownDriverDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDropdownDriverDirective,
      selectors: [["", "tuiDropdownDriver", ""]],
      standalone: true,
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownDriverDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiDropdownDriver]"
    }]
  }], null, null);
})();
var TUI_DROPDOWN_COMPONENT = tuiCreateTokenFromFactory(() => TuiDropdownComponent);
var TUI_DROPDOWN_CONTEXT = tuiCreateToken();
var TuiDropdownService = class _TuiDropdownService extends TuiPortalService {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiDropdownService_BaseFactory;
      return function TuiDropdownService_Factory(__ngFactoryType__) {
        return (ɵTuiDropdownService_BaseFactory || (ɵTuiDropdownService_BaseFactory = ɵɵgetInheritedFactory(_TuiDropdownService)))(__ngFactoryType__ || _TuiDropdownService);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiDropdownService,
      factory: _TuiDropdownService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var TUI_DROPDOWN_DEFAULT_OPTIONS = {
  align: "left",
  direction: null,
  limitWidth: "auto",
  maxHeight: 400,
  minHeight: 80,
  offset: 4,
  appearance: ""
};
var TUI_DROPDOWN_OPTIONS = tuiCreateToken(TUI_DROPDOWN_DEFAULT_OPTIONS);
var tuiDropdownOptionsProvider = (override) => ({
  provide: TUI_DROPDOWN_OPTIONS,
  deps: [[new Optional(), new Self(), TuiDropdownOptionsDirective], [new Optional(), new SkipSelf(), TUI_DROPDOWN_OPTIONS]],
  useFactory: tuiOverrideOptions(override, TUI_DROPDOWN_DEFAULT_OPTIONS)
});
var TuiDropdownOptionsDirective = class _TuiDropdownOptionsDirective {
  constructor() {
    this.options = inject(TUI_DROPDOWN_OPTIONS, {
      skipSelf: true
    });
    this.align = this.options.align;
    this.appearance = this.options.appearance;
    this.direction = this.options.direction;
    this.limitWidth = this.options.limitWidth;
    this.minHeight = this.options.minHeight;
    this.maxHeight = this.options.maxHeight;
    this.offset = this.options.offset;
  }
  static {
    this.ɵfac = function TuiDropdownOptionsDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDropdownOptionsDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDropdownOptionsDirective,
      selectors: [["", "tuiDropdownAlign", ""], ["", "tuiDropdownAppearance", ""], ["", "tuiDropdownDirection", ""], ["", "tuiDropdownLimitWidth", ""], ["", "tuiDropdownMinHeight", ""], ["", "tuiDropdownMaxHeight", ""], ["", "tuiDropdownOffset", ""]],
      inputs: {
        align: [0, "tuiDropdownAlign", "align"],
        appearance: [0, "tuiDropdownAppearance", "appearance"],
        direction: [0, "tuiDropdownDirection", "direction"],
        limitWidth: [0, "tuiDropdownLimitWidth", "limitWidth"],
        minHeight: [0, "tuiDropdownMinHeight", "minHeight"],
        maxHeight: [0, "tuiDropdownMaxHeight", "maxHeight"],
        offset: [0, "tuiDropdownOffset", "offset"]
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiProvide(TUI_DROPDOWN_OPTIONS, _TuiDropdownOptionsDirective)])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownOptionsDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiDropdownAlign], [tuiDropdownAppearance], [tuiDropdownDirection], [tuiDropdownLimitWidth], [tuiDropdownMinHeight], [tuiDropdownMaxHeight], [tuiDropdownOffset]",
      providers: [tuiProvide(TUI_DROPDOWN_OPTIONS, TuiDropdownOptionsDirective)]
    }]
  }], null, {
    align: [{
      type: Input,
      args: ["tuiDropdownAlign"]
    }],
    appearance: [{
      type: Input,
      args: ["tuiDropdownAppearance"]
    }],
    direction: [{
      type: Input,
      args: ["tuiDropdownDirection"]
    }],
    limitWidth: [{
      type: Input,
      args: ["tuiDropdownLimitWidth"]
    }],
    minHeight: [{
      type: Input,
      args: ["tuiDropdownMinHeight"]
    }],
    maxHeight: [{
      type: Input,
      args: ["tuiDropdownMaxHeight"]
    }],
    offset: [{
      type: Input,
      args: ["tuiDropdownOffset"]
    }]
  });
})();
var TuiDropdownPosition = class _TuiDropdownPosition extends TuiPositionAccessor {
  constructor() {
    super(...arguments);
    this.options = inject(TUI_DROPDOWN_OPTIONS);
    this.viewport = inject(TUI_VIEWPORT);
    this.type = "dropdown";
    this.accessor = tuiFallbackAccessor("dropdown")(inject(TuiRectAccessor), inject(TuiDropdownDirective, {
      optional: true
    }));
  }
  getPosition({
    width,
    height
  }) {
    if (!width && !height) {
      this.previous = void 0;
    }
    const hostRect = this.accessor?.getClientRect() ?? EMPTY_CLIENT_RECT;
    const viewportRect = this.viewport.getClientRect();
    const {
      minHeight,
      align,
      direction,
      offset,
      limitWidth
    } = this.options;
    const viewport = {
      top: viewportRect.top - offset,
      bottom: viewportRect.bottom + offset,
      right: viewportRect.right - offset,
      left: viewportRect.left + offset
    };
    const previous = this.previous || direction || "bottom";
    const available = {
      top: hostRect.top - 2 * offset - viewport.top,
      bottom: viewport.bottom - hostRect.bottom - 2 * offset
    };
    const rectWidth = limitWidth === "fixed" ? hostRect.width : width;
    const right = Math.max(hostRect.right - rectWidth, offset);
    const left = hostRect.left + width < viewport.right ? hostRect.left : right;
    const position = {
      top: hostRect.top - offset - height,
      bottom: hostRect.bottom + offset,
      right: Math.max(viewport.left, right),
      center: hostRect.left + hostRect.width / 2 + width / 2 < viewport.right ? hostRect.left + hostRect.width / 2 - width / 2 : right,
      left: Math.max(viewport.left, left)
    };
    const better = available.top > available.bottom ? "top" : "bottom";
    if (available[previous] > minHeight && direction || available[previous] > height) {
      return [position[previous], position[align]];
    }
    this.previous = better;
    return [position[better], position[align]];
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiDropdownPosition_BaseFactory;
      return function TuiDropdownPosition_Factory(__ngFactoryType__) {
        return (ɵTuiDropdownPosition_BaseFactory || (ɵTuiDropdownPosition_BaseFactory = ɵɵgetInheritedFactory(_TuiDropdownPosition)))(__ngFactoryType__ || _TuiDropdownPosition);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDropdownPosition,
      selectors: [["", "tuiDropdownPosition", ""]],
      standalone: true,
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownPosition, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiDropdownPosition]"
    }]
  }], null, null);
})();
var TuiDropdownDirective = class _TuiDropdownDirective {
  constructor() {
    this.refresh$ = new Subject();
    this.service = inject(TuiDropdownService);
    this.cdr = inject(ChangeDetectorRef);
    this.sub = this.refresh$.pipe(throttleTime(0, tuiZonefreeScheduler()), takeUntilDestroyed()).subscribe(() => {
      this.ref()?.changeDetectorRef.detectChanges();
      this.ref()?.changeDetectorRef.markForCheck();
    });
    this.el = tuiInjectElement();
    this.type = "dropdown";
    this.component = new PolymorpheusComponent(inject(TUI_DROPDOWN_COMPONENT), inject(INJECTOR$1));
    this.ref = signal(null);
  }
  set tuiDropdown(content) {
    this.content = content instanceof TemplateRef ? new PolymorpheusTemplate(content, this.cdr) : content;
  }
  get position() {
    return tuiCheckFixedPosition(this.el) ? "fixed" : "absolute";
  }
  ngAfterViewChecked() {
    this.refresh$.next();
  }
  ngOnChanges() {
    if (!this.content) {
      this.toggle(false);
    }
  }
  ngOnDestroy() {
    this.toggle(false);
  }
  getClientRect() {
    return this.el.getBoundingClientRect();
  }
  toggle(show) {
    const ref = this.ref();
    if (show && this.content && !ref) {
      this.ref.set(this.service.add(this.component));
    } else if (!show && ref) {
      this.ref.set(null);
      this.service.remove(ref);
    }
  }
  static {
    this.ɵfac = function TuiDropdownDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDropdownDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDropdownDirective,
      selectors: [["", "tuiDropdown", "", 5, "ng-container", 5, "ng-template"]],
      inputs: {
        tuiDropdown: "tuiDropdown"
      },
      exportAs: ["tuiDropdown"],
      standalone: true,
      features: [ɵɵProvidersFeature([tuiAsRectAccessor(_TuiDropdownDirective), tuiAsVehicle(_TuiDropdownDirective)]), ɵɵHostDirectivesFeature([TuiDropdownDriverDirective, TuiDropdownPosition]), ɵɵNgOnChangesFeature]
    });
  }
};
__decorate([tuiPure], TuiDropdownDirective.prototype, "position", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiDropdown]:not(ng-container):not(ng-template)",
      providers: [tuiAsRectAccessor(TuiDropdownDirective), tuiAsVehicle(TuiDropdownDirective)],
      exportAs: "tuiDropdown",
      hostDirectives: [TuiDropdownDriverDirective, TuiDropdownPosition]
    }]
  }], null, {
    tuiDropdown: [{
      type: Input
    }],
    position: []
  });
})();
var TuiDropdownComponent = class _TuiDropdownComponent {
  constructor() {
    this.el = tuiInjectElement();
    this.accessor = inject(TuiRectAccessor);
    this.win = inject(WA_WINDOW);
    this.vvs = inject(TuiVisualViewportService);
    this.animation = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));
    this.options = inject(TUI_DROPDOWN_OPTIONS);
    this.directive = inject(TuiDropdownDirective);
    this.context = inject(TUI_DROPDOWN_CONTEXT, {
      optional: true
    });
    this.theme = this.directive.el.closest("[tuiTheme]")?.getAttribute("tuiTheme");
    this.sub = inject(TuiPositionService).pipe(takeWhile(() => this.directive.el.isConnected && !!this.directive.el.offsetParent), map((v) => this.directive.position === "fixed" ? this.vvs.correct(v) : v), map(([top, left]) => this.getStyles(top, left)), takeUntilDestroyed()).subscribe({
      next: (styles) => Object.assign(this.el.style, styles),
      complete: () => this.close?.()
    });
    this.close = () => this.directive.toggle(false);
  }
  getStyles(top, left) {
    const {
      right
    } = this.el.getBoundingClientRect();
    const {
      maxHeight,
      minHeight,
      offset,
      limitWidth
    } = this.options;
    const {
      innerHeight
    } = this.win;
    const clientRect = this.el.offsetParent?.getBoundingClientRect();
    const {
      position
    } = this.directive;
    const rect = this.accessor.getClientRect();
    const offsetX = position === "fixed" ? 0 : -(clientRect?.left || 0);
    const offsetY = position === "fixed" ? 0 : -(clientRect?.top || 0);
    top += offsetY;
    left += offsetX;
    const sided = right <= rect.left || left >= rect.right;
    const isIntersecting = left < rect.right && right > rect.left && top < offsetY + 2 * offset;
    const available = isIntersecting ? rect.top - 2 * offset : offsetY + innerHeight - top - offset;
    return {
      position,
      top: tuiPx(Math.round(Math.max(top, offsetY + offset))),
      left: tuiPx(Math.round(left)),
      maxHeight: sided ? tuiPx(maxHeight) : tuiPx(Math.round(tuiClamp(available, minHeight, maxHeight))),
      width: limitWidth === "fixed" ? tuiPx(Math.round(rect.width)) : "",
      minWidth: limitWidth === "min" ? tuiPx(Math.round(rect.width)) : ""
    };
  }
  static {
    this.ɵfac = function TuiDropdownComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDropdownComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiDropdownComponent,
      selectors: [["tui-dropdown"]],
      hostVars: 3,
      hostBindings: function TuiDropdownComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵsyntheticHostProperty("@tuiDropdownAnimation", ctx.animation);
          ɵɵattribute("data-appearance", ctx.options.appearance)("tuiTheme", ctx.theme);
        }
      },
      standalone: true,
      features: [ɵɵProvidersFeature([TuiPositionService, tuiPositionAccessorFor("dropdown", TuiDropdownPosition), tuiRectAccessorFor("dropdown", TuiDropdownDirective)]), ɵɵHostDirectivesFeature([TuiActiveZone]), ɵɵStandaloneFeature],
      decls: 2,
      vars: 4,
      consts: [[1, "t-scroll"], ["class", "t-primitive", 4, "polymorpheusOutlet", "polymorpheusOutletContext"], [1, "t-primitive"]],
      template: function TuiDropdownComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "tui-scrollbar", 0);
          ɵɵtemplate(1, TuiDropdownComponent_div_1_Template, 2, 1, "div", 1);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("polymorpheusOutlet", ctx.directive.content)("polymorpheusOutletContext", ɵɵpureFunction1(2, _c0, ctx.close));
        }
      },
      dependencies: [PolymorpheusOutlet, TuiScrollbar],
      styles: ["[_nghost-%COMP%]{position:absolute;display:flex;box-shadow:var(--tui-shadow-medium);color:var(--tui-text-primary);background:var(--tui-background-elevation-3);border-radius:var(--tui-radius-m);overflow:hidden;border:1px solid var(--tui-border-normal);box-sizing:border-box;max-inline-size:calc(100% - 8px);isolation:isolate;pointer-events:auto}.ng-animating[_nghost-%COMP%]{pointer-events:none}[_nghost-%COMP%]:not([style*=top]){visibility:hidden}.t-scroll[_ngcontent-%COMP%]{flex-grow:1;max-inline-size:100%;overscroll-behavior:none}.t-primitive[_ngcontent-%COMP%]{padding:1rem}"],
      data: {
        animation: [tuiDropdownAnimation]
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-dropdown",
      imports: [PolymorpheusOutlet, PolymorpheusTemplate, TuiScrollbar],
      changeDetection: ChangeDetectionStrategy.Default,
      providers: [TuiPositionService, tuiPositionAccessorFor("dropdown", TuiDropdownPosition), tuiRectAccessorFor("dropdown", TuiDropdownDirective)],
      animations: [tuiDropdownAnimation],
      hostDirectives: [TuiActiveZone],
      host: {
        "[@tuiDropdownAnimation]": "animation",
        "[attr.data-appearance]": "options.appearance",
        "[attr.tuiTheme]": "theme"
      },
      template: '<tui-scrollbar class="t-scroll">\n    <div\n        *polymorpheusOutlet="directive.content as text; context: {$implicit: close}"\n        class="t-primitive"\n    >\n        {{ text }}\n    </div>\n</tui-scrollbar>\n',
      styles: [":host{position:absolute;display:flex;box-shadow:var(--tui-shadow-medium);color:var(--tui-text-primary);background:var(--tui-background-elevation-3);border-radius:var(--tui-radius-m);overflow:hidden;border:1px solid var(--tui-border-normal);box-sizing:border-box;max-inline-size:calc(100% - 8px);isolation:isolate;pointer-events:auto}:host.ng-animating{pointer-events:none}:host:not([style*=top]){visibility:hidden}.t-scroll{flex-grow:1;max-inline-size:100%;overscroll-behavior:none}.t-primitive{padding:1rem}\n"]
    }]
  }], null, null);
})();
function activeZoneFilter(event) {
  return !event || !this.activeZone.contains(tuiGetActualTarget(event));
}
var TuiDropdownContext = class _TuiDropdownContext extends TuiRectAccessor {
  constructor() {
    super(...arguments);
    this.isTouch = inject(TUI_IS_TOUCH);
    this.driver = inject(TuiDropdownDriver);
    this.currentRect = EMPTY_CLIENT_RECT;
    this.userSelect = computed(() => this.isTouch() ? "none" : null);
    this.activeZone = inject(TuiActiveZone);
    this.type = "dropdown";
  }
  getClientRect() {
    return this.currentRect;
  }
  closeDropdown(_event) {
    this.driver.next(false);
    this.currentRect = EMPTY_CLIENT_RECT;
  }
  onContextMenu(x, y) {
    this.currentRect = tuiPointToClientRect(x, y);
    this.driver.next(true);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiDropdownContext_BaseFactory;
      return function TuiDropdownContext_Factory(__ngFactoryType__) {
        return (ɵTuiDropdownContext_BaseFactory || (ɵTuiDropdownContext_BaseFactory = ɵɵgetInheritedFactory(_TuiDropdownContext)))(__ngFactoryType__ || _TuiDropdownContext);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDropdownContext,
      selectors: [["", "tuiDropdownContext", ""]],
      hostVars: 6,
      hostBindings: function TuiDropdownContext_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("pointerdown.silent", function TuiDropdownContext_pointerdown_silent_HostBindingHandler($event) {
            return ctx.closeDropdown($event);
          }, false, ɵɵresolveDocument)("contextmenu.capture.silent", function TuiDropdownContext_contextmenu_capture_silent_HostBindingHandler($event) {
            return ctx.closeDropdown($event);
          }, false, ɵɵresolveDocument)("keydown.esc", function TuiDropdownContext_keydown_esc_HostBindingHandler() {
            return ctx.closeDropdown();
          }, false, ɵɵresolveDocument)("longtap", function TuiDropdownContext_longtap_HostBindingHandler($event) {
            return ctx.onContextMenu($event.detail.clientX, $event.detail.clientY);
          });
        }
        if (rf & 2) {
          ɵɵstyleProp("user-select", ctx.userSelect())("-webkit-user-select", ctx.userSelect())("-webkit-touch-callout", ctx.userSelect());
        }
      },
      standalone: true,
      features: [ɵɵProvidersFeature([TuiActiveZone, TuiDropdownDriver, tuiAsDriver(TuiDropdownDriver), tuiAsRectAccessor(_TuiDropdownContext)]), ɵɵInheritDefinitionFeature]
    });
  }
};
__decorate([shouldCall(activeZoneFilter)], TuiDropdownContext.prototype, "closeDropdown", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownContext, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiDropdownContext]",
      providers: [TuiActiveZone, TuiDropdownDriver, tuiAsDriver(TuiDropdownDriver), tuiAsRectAccessor(TuiDropdownContext)],
      host: {
        "[style.user-select]": "userSelect()",
        "[style.-webkit-user-select]": "userSelect()",
        "[style.-webkit-touch-callout]": "userSelect()",
        "(document:pointerdown.silent)": "closeDropdown($event)",
        "(document:contextmenu.capture.silent)": "closeDropdown($event)",
        "(document:keydown.esc)": "closeDropdown()",
        "(longtap)": "onContextMenu($event.detail.clientX, $event.detail.clientY)"
      }
    }]
  }], null, {
    closeDropdown: []
  });
})();
var TUI_DROPDOWN_HOVER_DEFAULT_OPTIONS = {
  showDelay: 200,
  hideDelay: 500
};
var TUI_DROPDOWN_HOVER_OPTIONS = tuiCreateToken(TUI_DROPDOWN_HOVER_DEFAULT_OPTIONS);
function tuiDropdownHoverOptionsProvider(options) {
  return tuiProvideOptions(TUI_DROPDOWN_HOVER_OPTIONS, options, TUI_DROPDOWN_HOVER_DEFAULT_OPTIONS);
}
function shouldClose(event) {
  return "key" in event && event.key.toLowerCase() === "escape" && this.tuiDropdownEnabled && !!this.tuiDropdownOpen && !this["dropdown"]()?.nextElementSibling;
}
var TuiDropdownOpen = class _TuiDropdownOpen {
  constructor() {
    this.directive = inject(TuiDropdownDirective);
    this.el = tuiInjectElement();
    this.obscured = inject(TuiObscured);
    this.dropdown = computed(() => this.directive.ref()?.location.nativeElement);
    this.sub = merge(this.obscured.tuiObscured.pipe(filter(Boolean)), inject(TuiActiveZone).tuiActiveZoneChange.pipe(filter((a) => !a)), fromEvent(this.el, "focusin").pipe(map(tuiGetActualTarget), filter((target) => !this.host.contains(target) || !this.directive.ref()))).pipe(tuiWatch(), takeUntilDestroyed()).subscribe(() => this.toggle(false));
    this.tuiDropdownEnabled = true;
    this.tuiDropdownOpen = false;
    this.tuiDropdownOpenChange = new EventEmitter();
    this.driver = inject(TuiDropdownDriver);
  }
  ngOnChanges() {
    this.update(!!this.tuiDropdownOpen && this.tuiDropdownEnabled);
  }
  toggle(open) {
    if (this.focused && !open) {
      this.host.focus({
        preventScroll: true
      });
    }
    this.update(open);
  }
  onEsc(event) {
    event.preventDefault();
    this.toggle(false);
  }
  onClick(target) {
    if (!this.editable && this.host.contains(target)) {
      this.update(!this.tuiDropdownOpen);
    }
  }
  onArrow(event, up) {
    if (!tuiIsElement(event.target) || !this.host.contains(event.target) || !this.tuiDropdownEnabled) {
      return;
    }
    event.preventDefault();
    this.focusDropdown(up);
  }
  onKeydown({
    key,
    target,
    defaultPrevented
  }) {
    if (defaultPrevented || !tuiIsEditingKey(key) || !this.editable || !this.focused || !this.directive.content || !tuiIsHTMLElement(target) || tuiIsElementEditable(target) && target !== this.host) {
      return;
    }
    this.update(true);
    this.host.focus({
      preventScroll: true
    });
  }
  get host() {
    const initial = this.dropdownHost?.nativeElement || this.el;
    const focusable = tuiIsNativeKeyboardFocusable(initial) ? initial : tuiGetClosestFocusable({
      initial,
      root: this.el
    });
    return this.dropdownHost?.nativeElement || focusable || this.el;
  }
  get editable() {
    return tuiIsElementEditable(this.host);
  }
  get focused() {
    return tuiIsNativeFocusedIn(this.host) || tuiIsNativeFocusedIn(this.dropdown());
  }
  update(open) {
    if (open && !this.tuiDropdownEnabled) {
      return;
    }
    this.tuiDropdownOpen = open;
    this.tuiDropdownOpenChange.emit(open);
    this.drive();
  }
  drive(open = !!this.tuiDropdownOpen && this.tuiDropdownEnabled) {
    this.obscured.tuiObscuredEnabled = open;
    this.driver.next(open);
  }
  focusDropdown(previous) {
    const root = this.dropdown();
    if (!root) {
      this.update(true);
      return;
    }
    const doc = this.el.ownerDocument;
    const child = root.appendChild(doc.createElement("div"));
    const initial = previous ? child : root;
    const focusable = tuiGetClosestFocusable({
      initial,
      previous,
      root
    });
    child.remove();
    focusable?.focus();
  }
  static {
    this.ɵfac = function TuiDropdownOpen_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDropdownOpen)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDropdownOpen,
      selectors: [["", "tuiDropdown", "", "tuiDropdownOpen", ""], ["", "tuiDropdown", "", "tuiDropdownOpenChange", ""]],
      contentQueries: function TuiDropdownOpen_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, _c1, 5, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dropdownHost = _t.first);
        }
      },
      hostBindings: function TuiDropdownOpen_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function TuiDropdownOpen_click_HostBindingHandler($event) {
            return ctx.onClick($event.target);
          })("keydown.arrowDown", function TuiDropdownOpen_keydown_arrowDown_HostBindingHandler($event) {
            return ctx.onArrow($event, false);
          })("keydown.arrowUp", function TuiDropdownOpen_keydown_arrowUp_HostBindingHandler($event) {
            return ctx.onArrow($event, true);
          })("keydown.silent.capture", function TuiDropdownOpen_keydown_silent_capture_HostBindingHandler($event) {
            return ctx.onEsc($event);
          }, false, ɵɵresolveDocument)("keydown.silent", function TuiDropdownOpen_keydown_silent_HostBindingHandler($event) {
            return ctx.onKeydown($event);
          }, false, ɵɵresolveDocument);
        }
      },
      inputs: {
        tuiDropdownEnabled: "tuiDropdownEnabled",
        tuiDropdownOpen: "tuiDropdownOpen"
      },
      outputs: {
        tuiDropdownOpenChange: "tuiDropdownOpenChange"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([TuiDropdownDriver, tuiAsDriver(TuiDropdownDriver)]), ɵɵHostDirectivesFeature([TuiObscured, {
        directive: TuiActiveZone,
        inputs: ["tuiActiveZoneParent", "tuiActiveZoneParent"],
        outputs: ["tuiActiveZoneChange", "tuiActiveZoneChange"]
      }]), ɵɵNgOnChangesFeature]
    });
  }
};
__decorate([shouldCall(shouldClose)], TuiDropdownOpen.prototype, "onEsc", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownOpen, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiDropdown][tuiDropdownOpen],[tuiDropdown][tuiDropdownOpenChange]",
      providers: [TuiDropdownDriver, tuiAsDriver(TuiDropdownDriver)],
      hostDirectives: [TuiObscured, {
        directive: TuiActiveZone,
        inputs: ["tuiActiveZoneParent"],
        outputs: ["tuiActiveZoneChange"]
      }],
      host: {
        "(click)": "onClick($event.target)",
        "(keydown.arrowDown)": "onArrow($event, false)",
        "(keydown.arrowUp)": "onArrow($event, true)",
        "(document:keydown.silent.capture)": "onEsc($event)",
        "(document:keydown.silent)": "onKeydown($event)"
      }
    }]
  }], null, {
    dropdownHost: [{
      type: ContentChild,
      args: ["tuiDropdownHost", {
        descendants: true,
        read: ElementRef
      }]
    }],
    tuiDropdownEnabled: [{
      type: Input
    }],
    tuiDropdownOpen: [{
      type: Input
    }],
    tuiDropdownOpenChange: [{
      type: Output
    }],
    onEsc: []
  });
})();
var TuiDropdownHover = class _TuiDropdownHover extends TuiDriver {
  constructor() {
    super((subscriber) => this.stream$.subscribe(subscriber));
    this.el = tuiInjectElement();
    this.doc = inject(DOCUMENT);
    this.options = inject(TUI_DROPDOWN_HOVER_OPTIONS);
    this.activeZone = inject(TuiActiveZone);
    this.open = inject(TuiDropdownOpen, {
      optional: true
    });
    this.stream$ = merge(tuiTypedFromEvent(this.doc, "mouseover").pipe(map(tuiGetActualTarget)), tuiTypedFromEvent(this.doc, "mouseout").pipe(map((e) => e.relatedTarget))).pipe(map((element) => tuiIsElement(element) && this.isHovered(element)), distinctUntilChanged(), switchMap((v) => of(v).pipe(delay(v ? this.showDelay : this.hideDelay))), tuiZoneOptimized(), tap((hovered) => {
      this.hovered = hovered;
      this.open?.toggle(hovered);
    }), share());
    this.showDelay = this.options.showDelay;
    this.hideDelay = this.options.hideDelay;
    this.hovered = false;
    this.type = "dropdown";
  }
  onClick(event) {
    if (this.hovered && this.open) {
      event.preventDefault();
    }
  }
  isHovered(element) {
    const host = this.dropdownHost?.nativeElement || this.el;
    const hovered = host.contains(element);
    const child = !this.el.contains(element) && this.activeZone.contains(element);
    return hovered || child;
  }
  static {
    this.ɵfac = function TuiDropdownHover_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDropdownHover)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDropdownHover,
      selectors: [["", "tuiDropdownHover", ""]],
      contentQueries: function TuiDropdownHover_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, _c1, 5, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dropdownHost = _t.first);
        }
      },
      hostBindings: function TuiDropdownHover_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click.capture", function TuiDropdownHover_click_capture_HostBindingHandler($event) {
            return ctx.onClick($event);
          });
        }
      },
      inputs: {
        showDelay: [0, "tuiDropdownShowDelay", "showDelay"],
        hideDelay: [0, "tuiDropdownHideDelay", "hideDelay"]
      },
      standalone: true,
      features: [ɵɵProvidersFeature([TuiActiveZone, tuiAsDriver(_TuiDropdownHover)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownHover, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiDropdownHover]",
      providers: [TuiActiveZone, tuiAsDriver(TuiDropdownHover)],
      host: {
        "(click.capture)": "onClick($event)"
      }
    }]
  }], function() {
    return [];
  }, {
    dropdownHost: [{
      type: ContentChild,
      args: ["tuiDropdownHost", {
        descendants: true,
        read: ElementRef
      }]
    }],
    showDelay: [{
      type: Input,
      args: ["tuiDropdownShowDelay"]
    }],
    hideDelay: [{
      type: Input,
      args: ["tuiDropdownHideDelay"]
    }]
  });
})();
var TuiDropdownManual = class _TuiDropdownManual {
  constructor() {
    this.driver = inject(TuiDropdownDriver);
    this.tuiDropdownManual = false;
  }
  ngOnChanges() {
    this.driver.next(!!this.tuiDropdownManual);
  }
  static {
    this.ɵfac = function TuiDropdownManual_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDropdownManual)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDropdownManual,
      selectors: [["", "tuiDropdownManual", ""]],
      inputs: {
        tuiDropdownManual: "tuiDropdownManual"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([TuiDropdownDriver, tuiAsDriver(TuiDropdownDriver)]), ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownManual, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiDropdownManual]",
      providers: [TuiDropdownDriver, tuiAsDriver(TuiDropdownDriver)]
    }]
  }], null, {
    tuiDropdownManual: [{
      type: Input
    }]
  });
})();
var TuiDropdownOpenLegacy = class _TuiDropdownOpenLegacy {
  constructor() {
    this.tuiDropdownOpenChange = new BehaviorSubject(false);
  }
  set tuiDropdownOpen(open) {
    this.tuiDropdownOpenChange.next(open);
  }
  static {
    this.ɵfac = function TuiDropdownOpenLegacy_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDropdownOpenLegacy)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDropdownOpenLegacy,
      selectors: [["", "tuiDropdownOpen", "", 3, "tuiDropdown", ""], ["", "tuiDropdownOpenChange", "", 3, "tuiDropdown", ""]],
      inputs: {
        tuiDropdownOpen: "tuiDropdownOpen"
      },
      outputs: {
        tuiDropdownOpenChange: "tuiDropdownOpenChange"
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownOpenLegacy, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiDropdownOpen]:not([tuiDropdown]),[tuiDropdownOpenChange]:not([tuiDropdown])"
    }]
  }], null, {
    tuiDropdownOpenChange: [{
      type: Output
    }],
    tuiDropdownOpen: [{
      type: Input
    }]
  });
})();
var TuiDropdownPortal = class _TuiDropdownPortal {
  constructor() {
    this.template = inject(TemplateRef);
    this.service = inject(TuiDropdownService);
  }
  set tuiDropdown(show) {
    this.viewRef?.destroy();
    if (show) {
      this.viewRef = this.service.addTemplate(this.template);
    }
  }
  ngOnDestroy() {
    this.viewRef?.destroy();
  }
  static {
    this.ɵfac = function TuiDropdownPortal_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDropdownPortal)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDropdownPortal,
      selectors: [["ng-template", "tuiDropdown", ""]],
      inputs: {
        tuiDropdown: "tuiDropdown"
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownPortal, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "ng-template[tuiDropdown]"
    }]
  }], null, {
    tuiDropdown: [{
      type: Input
    }]
  });
})();
var TuiDropdownPositionSided = class _TuiDropdownPositionSided extends TuiPositionAccessor {
  constructor() {
    super(...arguments);
    this.options = inject(TUI_DROPDOWN_OPTIONS);
    this.viewport = inject(TUI_VIEWPORT);
    this.vertical = inject(TuiDropdownPosition);
    this.previous = this.options.direction || "bottom";
    this.tuiDropdownSided = "";
    this.tuiDropdownSidedOffset = 4;
    this.type = "dropdown";
  }
  getPosition(rect) {
    if (this.tuiDropdownSided === false) {
      return this.vertical.getPosition(rect);
    }
    const {
      height,
      width
    } = rect;
    const hostRect = this.vertical.accessor?.getClientRect() ?? EMPTY_CLIENT_RECT;
    const viewport = this.viewport.getClientRect();
    const {
      direction,
      minHeight,
      offset
    } = this.options;
    const align = this.options.align === "center" ? "left" : this.options.align;
    const available = {
      top: hostRect.bottom - viewport.top,
      left: hostRect.left - offset - viewport.left,
      right: viewport.right - hostRect.right - offset,
      bottom: viewport.bottom - hostRect.top
    };
    const position = {
      top: hostRect.bottom - height + this.tuiDropdownSidedOffset + 1,
      left: hostRect.left - width - offset,
      right: hostRect.right + offset,
      bottom: hostRect.top - this.tuiDropdownSidedOffset - 1
      // 1 for border
    };
    const better = available.top > available.bottom ? "top" : "bottom";
    const maxLeft = available.left > available.right ? position.left : position.right;
    const left = available[align] > width ? position[align] : maxLeft;
    if (available[this.previous] > minHeight && direction || this.previous === better) {
      return [position[this.previous], left];
    }
    this.previous = better;
    return [position[better], left];
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiDropdownPositionSided_BaseFactory;
      return function TuiDropdownPositionSided_Factory(__ngFactoryType__) {
        return (ɵTuiDropdownPositionSided_BaseFactory || (ɵTuiDropdownPositionSided_BaseFactory = ɵɵgetInheritedFactory(_TuiDropdownPositionSided)))(__ngFactoryType__ || _TuiDropdownPositionSided);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDropdownPositionSided,
      selectors: [["", "tuiDropdownSided", ""]],
      inputs: {
        tuiDropdownSided: "tuiDropdownSided",
        tuiDropdownSidedOffset: "tuiDropdownSidedOffset"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([TuiDropdownPosition, tuiAsPositionAccessor(_TuiDropdownPositionSided)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownPositionSided, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiDropdownSided]",
      providers: [TuiDropdownPosition, tuiAsPositionAccessor(TuiDropdownPositionSided)]
    }]
  }], null, {
    tuiDropdownSided: [{
      type: Input
    }],
    tuiDropdownSidedOffset: [{
      type: Input
    }]
  });
})();
var TuiDropdownSelection = class _TuiDropdownSelection extends TuiDriver {
  constructor() {
    super((subscriber) => this.stream$.subscribe(subscriber));
    this.doc = inject(DOCUMENT);
    this.vcr = inject(ViewContainerRef);
    this.dropdown = inject(TuiDropdownDirective);
    this.el = tuiInjectElement();
    this.handler$ = new BehaviorSubject(TUI_TRUE_HANDLER);
    this.stream$ = combineLatest([this.handler$, inject(TUI_SELECTION_STREAM).pipe(map(() => this.getRange()), distinctUntilChanged((x, y) => x.startOffset === y.startOffset && x.endOffset === y.endOffset && x.commonAncestorContainer === y.commonAncestorContainer))]).pipe(map(([handler, range]) => {
      const contained = this.el.contains(range.commonAncestorContainer);
      this.range = contained && tuiIsTextNode(range.commonAncestorContainer) ? range : this.range;
      return contained && handler(this.range) || this.inDropdown(range);
    }));
    this.range = inject(TUI_RANGE);
    this.position = "selection";
    this.type = "dropdown";
  }
  set tuiDropdownSelection(visible) {
    if (!tuiIsString(visible)) {
      this.handler$.next(visible);
    }
  }
  getClientRect() {
    switch (this.position) {
      case "tag": {
        const {
          commonAncestorContainer
        } = this.range;
        const element = tuiIsElement(commonAncestorContainer) ? commonAncestorContainer : commonAncestorContainer.parentNode;
        return element && tuiIsElement(element) ? element.getBoundingClientRect() : EMPTY_CLIENT_RECT;
      }
      case "word":
        return tuiGetWordRange(this.range).getBoundingClientRect();
      default:
        return this.range.getBoundingClientRect();
    }
  }
  ngOnDestroy() {
    if (this.ghost) {
      this.vcr.element.nativeElement.removeChild(this.ghost);
    }
  }
  getRange() {
    const active = tuiGetNativeFocused(this.doc);
    const selection = this.doc.getSelection();
    const range = active && tuiIsTextfield(active) && this.el.contains(active) ? this.veryVerySadInputFix(active) : selection?.rangeCount && selection.getRangeAt(0) || this.range;
    return range.cloneRange();
  }
  /**
   * Check if given range is at least partially inside dropdown
   */
  inDropdown(range) {
    const {
      startContainer,
      endContainer
    } = range;
    const inDropdown = this.boxContains(range.commonAncestorContainer);
    const hostToDropdown = this.boxContains(endContainer) && this.el.contains(startContainer);
    const dropdownToHost = this.boxContains(startContainer) && this.el.contains(endContainer);
    return inDropdown || hostToDropdown || dropdownToHost;
  }
  /**
   * Check if Node is inside dropdown
   */
  boxContains(node) {
    return !!this.dropdown.ref()?.location.nativeElement.contains(node);
  }
  veryVerySadInputFix(element) {
    const {
      ghost = this.initGhost(element)
    } = this;
    const {
      top,
      left,
      width,
      height
    } = element.getBoundingClientRect();
    const {
      selectionStart,
      selectionEnd,
      value
    } = element;
    const range = this.doc.createRange();
    const hostRect = this.el.getBoundingClientRect();
    ghost.style.top = tuiPx(top - hostRect.top);
    ghost.style.left = tuiPx(left - hostRect.left);
    ghost.style.width = tuiPx(width);
    ghost.style.height = tuiPx(height);
    ghost.textContent = CHAR_ZERO_WIDTH_SPACE + value + CHAR_NO_BREAK_SPACE;
    range.setStart(ghost.firstChild, selectionStart || 0);
    range.setEnd(ghost.firstChild, selectionEnd || 0);
    return range;
  }
  /**
   * Create an invisible DIV styled exactly like input/textarea element inside directive
   */
  initGhost(element) {
    const ghost = this.doc.createElement("div");
    const {
      font,
      letterSpacing,
      textTransform,
      padding
    } = getComputedStyle(element);
    ghost.style.position = "absolute";
    ghost.style.pointerEvents = "none";
    ghost.style.opacity = "0";
    ghost.style.whiteSpace = "pre-wrap";
    ghost.style.font = font;
    ghost.style.letterSpacing = letterSpacing;
    ghost.style.textTransform = textTransform;
    ghost.style.padding = padding;
    this.vcr.element.nativeElement.appendChild(ghost);
    this.ghost = ghost;
    return ghost;
  }
  static {
    this.ɵfac = function TuiDropdownSelection_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDropdownSelection)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDropdownSelection,
      selectors: [["", "tuiDropdownSelection", ""]],
      inputs: {
        position: [0, "tuiDropdownSelectionPosition", "position"],
        tuiDropdownSelection: "tuiDropdownSelection"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiAsDriver(_TuiDropdownSelection), tuiAsRectAccessor(_TuiDropdownSelection)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownSelection, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiDropdownSelection]",
      providers: [tuiAsDriver(TuiDropdownSelection), tuiAsRectAccessor(TuiDropdownSelection)]
    }]
  }], function() {
    return [];
  }, {
    position: [{
      type: Input,
      args: ["tuiDropdownSelectionPosition"]
    }],
    tuiDropdownSelection: [{
      type: Input
    }]
  });
})();
var TuiDropdown = [TuiDropdownOptionsDirective, TuiDropdownDriverDirective, TuiDropdownDirective, TuiDropdownComponent, TuiDropdownOpen, TuiDropdownOpenLegacy, TuiDropdownPortal, TuiDropdownManual, TuiDropdownHover, TuiDropdownContext, TuiDropdownPosition, TuiDropdownPositionSided, TuiDropdownSelection];
function tuiDropdown(value) {
  return tuiDirectiveBinding(TuiDropdownDirective, "tuiDropdown", value, {});
}
function tuiDropdownOpen() {
  const open = tuiDirectiveBinding(TuiDropdownOpen, "tuiDropdownOpen", false, {});
  inject(TuiDropdownOpen).tuiDropdownOpenChange.pipe(takeUntilDestroyed()).subscribe((value) => open.set(value));
  return open;
}
var TuiDropdownFixed = class _TuiDropdownFixed {
  constructor() {
    const override = tuiOverrideOptions({
      limitWidth: "fixed"
    }, TUI_DROPDOWN_DEFAULT_OPTIONS);
    override(inject(TUI_DROPDOWN_OPTIONS, {
      self: true,
      optional: true
    }), null);
  }
  static {
    this.ɵfac = function TuiDropdownFixed_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDropdownFixed)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDropdownFixed,
      standalone: true,
      features: [ɵɵProvidersFeature([tuiDropdownOptionsProvider({})])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownFixed, [{
    type: Directive,
    args: [{
      standalone: true,
      providers: [tuiDropdownOptionsProvider({})]
    }]
  }], function() {
    return [];
  }, null);
})();
var TuiDropdowns = class _TuiDropdowns extends TuiPortals {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiDropdowns_BaseFactory;
      return function TuiDropdowns_Factory(__ngFactoryType__) {
        return (ɵTuiDropdowns_BaseFactory || (ɵTuiDropdowns_BaseFactory = ɵɵgetInheritedFactory(_TuiDropdowns)))(__ngFactoryType__ || _TuiDropdowns);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiDropdowns,
      selectors: [["tui-dropdowns"]],
      standalone: true,
      features: [ɵɵProvidersFeature([tuiAsPortal(TuiDropdownService)]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c2,
      decls: 3,
      vars: 0,
      consts: [["viewContainer", ""]],
      template: function TuiDropdowns_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
          ɵɵelementContainer(1, null, 0);
        }
      },
      styles: ["[_nghost-%COMP%]{display:block;height:100%;isolation:isolate}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdowns, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-dropdowns",
      template: `
        <ng-content></ng-content>
        <ng-container #viewContainer></ng-container>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAsPortal(TuiDropdownService)],
      styles: [":host{display:block;height:100%;isolation:isolate}\n"]
    }]
  }], null, null);
})();
var TuiWithDropdownOpen = class _TuiWithDropdownOpen {
  static {
    this.ɵfac = function TuiWithDropdownOpen_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiWithDropdownOpen)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiWithDropdownOpen,
      standalone: true,
      features: [ɵɵHostDirectivesFeature([{
        directive: TuiDropdownOpen,
        inputs: ["tuiDropdownOpen", "open"],
        outputs: ["tuiDropdownOpenChange", "openChange"]
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiWithDropdownOpen, [{
    type: Directive,
    args: [{
      standalone: true,
      hostDirectives: [{
        directive: TuiDropdownOpen,
        inputs: ["tuiDropdownOpen: open"],
        outputs: ["tuiDropdownOpenChange: openChange"]
      }]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-data-list.mjs
var _c02 = ["tuiOption", ""];
var _c12 = ["*"];
var _c22 = (a0) => ({
  $implicit: a0
});
function TuiOption_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const text_r1 = ctx.polymorpheusOutlet;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", text_r1, " ");
  }
}
function TuiOption_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
function TuiDataListComponent_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const text_r1 = ctx.polymorpheusOutlet;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", text_r1, " ");
  }
}
function TuiDataListComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵtemplate(1, TuiDataListComponent_div_1_ng_container_1_Template, 2, 1, "ng-container", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", ctx_r1.emptyContent || ctx_r1.fallback());
  }
}
var TUI_OPTION_CONTENT = tuiCreateToken();
function tuiAsOptionContent(useValue) {
  return {
    provide: TUI_OPTION_CONTENT,
    useValue
  };
}
var TUI_DATA_LIST_ACCESSOR = tuiCreateToken();
function tuiAsDataListAccessor(accessor) {
  return tuiProvide(TUI_DATA_LIST_ACCESSOR, accessor);
}
var TUI_DATA_LIST_HOST = tuiCreateToken();
function tuiAsDataListHost(host) {
  return tuiProvide(TUI_DATA_LIST_HOST, host);
}
var TuiOption = class _TuiOption {
  constructor() {
    this.isMobile = inject(TUI_IS_MOBILE);
    this.el = tuiInjectElement();
    this.dataList = inject(forwardRef(() => TuiDataListComponent), {
      optional: true
    });
    this.host = inject(TUI_DATA_LIST_HOST, {
      optional: true
    });
    this.content = inject(TUI_OPTION_CONTENT, {
      optional: true
    });
    this.dropdown = inject(TuiDropdownDirective, {
      self: true,
      optional: true
    })?.ref;
    this.disabled = false;
  }
  // Preventing focus loss upon focused option removal
  ngOnDestroy() {
    this.dataList?.handleFocusLossIfNecessary(this.el);
  }
  onClick() {
    if (this.host?.handleOption && this.value !== void 0) {
      this.host.handleOption(this.value);
    }
  }
  onMouseMove() {
    if (!this.isMobile && !tuiIsNativeFocused(this.el) && this.dataList) {
      this.el.focus({
        preventScroll: true
      });
    }
  }
  static {
    this.ɵfac = function TuiOption_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiOption)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiOption,
      selectors: [["button", "tuiOption", ""], ["a", "tuiOption", ""], ["label", "tuiOption", ""]],
      hostAttrs: ["type", "button", "role", "option"],
      hostVars: 3,
      hostBindings: function TuiOption_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function TuiOption_click_HostBindingHandler() {
            return ctx.onClick();
          })("mousemove.silent", function TuiOption_mousemove_silent_HostBindingHandler() {
            return ctx.onMouseMove();
          });
        }
        if (rf & 2) {
          ɵɵattribute("disabled", ctx.disabled || null);
          ɵɵclassProp("_with-dropdown", ctx.dropdown == null ? null : ctx.dropdown());
        }
      },
      inputs: {
        disabled: "disabled",
        value: "value"
      },
      standalone: true,
      features: [ɵɵHostDirectivesFeature([TuiWithIcons]), ɵɵStandaloneFeature],
      attrs: _c02,
      ngContentSelectors: _c12,
      decls: 3,
      vars: 4,
      consts: [["t", ""], [4, "polymorpheusOutlet", "polymorpheusOutletContext"]],
      template: function TuiOption_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵtemplate(0, TuiOption_ng_container_0_Template, 2, 1, "ng-container", 1)(1, TuiOption_ng_template_1_Template, 1, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const t_r2 = ɵɵreference(2);
          ɵɵproperty("polymorpheusOutlet", ctx.content || t_r2)("polymorpheusOutletContext", ɵɵpureFunction1(2, _c22, t_r2));
        }
      },
      dependencies: [PolymorpheusOutlet],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiOption, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "button[tuiOption], a[tuiOption], label[tuiOption]",
      imports: [PolymorpheusOutlet],
      template: `
        <ng-container *polymorpheusOutlet="content || t as text; context: {$implicit: t}">
            {{ text }}
        </ng-container>
        <ng-template #t>
            <ng-content />
        </ng-template>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      hostDirectives: [TuiWithIcons],
      host: {
        type: "button",
        role: "option",
        "[attr.disabled]": "disabled || null",
        "[class._with-dropdown]": "dropdown?.()",
        "(click)": "onClick()",
        "(mousemove.silent)": "onMouseMove()"
      }
    }]
  }], null, {
    disabled: [{
      type: Input
    }],
    value: [{
      type: Input
    }]
  });
})();
function tuiInjectDataListSize() {
  const sizes = ["s", "m", "l"];
  const size = inject(TUI_DATA_LIST_HOST, {
    optional: true
  })?.size;
  return size && sizes.includes(size) ? size : "l";
}
var TuiDataListComponent = class _TuiDataListComponent {
  constructor() {
    this.options = EMPTY_QUERY;
    this.ngZone = inject(NgZone);
    this.destroyRef = inject(DestroyRef);
    this.el = tuiInjectElement();
    this.cdr = inject(ChangeDetectorRef);
    this.fallback = toSignal(inject(TUI_NOTHING_FOUND_MESSAGE));
    this.empty = signal(false);
    this.size = tuiInjectDataListSize();
  }
  onKeyDownArrow(current, step) {
    const {
      elements
    } = this;
    tuiMoveFocus(elements.indexOf(current), elements, step);
  }
  handleFocusLossIfNecessary(element = this.el) {
    if (tuiIsNativeFocusedIn(element)) {
      this.origin?.focus({
        preventScroll: true
      });
    }
  }
  // TODO: Refactor to :has after Safari support bumped to 15
  ngAfterContentChecked() {
    timer(0).pipe(tuiZonefree(this.ngZone), tuiTakeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.empty.set(!this.elements.length);
      this.cdr.detectChanges();
    });
  }
  getOptions(includeDisabled = false) {
    return this.options.filter(({
      disabled
    }) => includeDisabled || !disabled).map(({
      value
    }) => value).filter(tuiIsPresent);
  }
  onFocusIn(relatedTarget, currentTarget) {
    if (!currentTarget.contains(relatedTarget) && !this.origin) {
      this.origin = relatedTarget;
    }
  }
  get elements() {
    return Array.from(this.el.querySelectorAll("a,button,input"));
  }
  static {
    this.ɵfac = function TuiDataListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDataListComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiDataListComponent,
      selectors: [["tui-data-list"]],
      contentQueries: function TuiDataListComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, TuiOption, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.options = _t);
        }
      },
      hostAttrs: ["role", "listbox"],
      hostVars: 1,
      hostBindings: function TuiDataListComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("focusin", function TuiDataListComponent_focusin_HostBindingHandler($event) {
            return ctx.onFocusIn($event.relatedTarget, $event.currentTarget);
          })("mousedown.prevent", function TuiDataListComponent_mousedown_prevent_HostBindingHandler() {
            return 0;
          })("wheel.silent.passive", function TuiDataListComponent_wheel_silent_passive_HostBindingHandler() {
            return ctx.handleFocusLossIfNecessary();
          })("mouseleave", function TuiDataListComponent_mouseleave_HostBindingHandler($event) {
            return ctx.handleFocusLossIfNecessary($event.target);
          })("keydown.tab", function TuiDataListComponent_keydown_tab_HostBindingHandler() {
            return ctx.handleFocusLossIfNecessary();
          })("keydown.shift.tab", function TuiDataListComponent_keydown_shift_tab_HostBindingHandler() {
            return ctx.handleFocusLossIfNecessary();
          })("keydown.arrowDown.prevent", function TuiDataListComponent_keydown_arrowDown_prevent_HostBindingHandler($event) {
            return ctx.onKeyDownArrow($event.target, 1);
          })("keydown.arrowUp.prevent", function TuiDataListComponent_keydown_arrowUp_prevent_HostBindingHandler($event) {
            return ctx.onKeyDownArrow($event.target, -1);
          });
        }
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size);
        }
      },
      inputs: {
        emptyContent: "emptyContent",
        size: "size"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiAsDataListAccessor(_TuiDataListComponent)]), ɵɵStandaloneFeature],
      ngContentSelectors: _c12,
      decls: 2,
      vars: 1,
      consts: [["class", "t-empty", 4, "ngIf"], [1, "t-empty"], [4, "polymorpheusOutlet"]],
      template: function TuiDataListComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
          ɵɵtemplate(1, TuiDataListComponent_div_1_Template, 2, 1, "div", 0);
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.empty());
        }
      },
      dependencies: [NgIf, PolymorpheusOutlet],
      styles: ['tui-data-list{--tui-data-list-padding: .25rem;--tui-data-list-margin: .0625rem;display:flex;font:var(--tui-font-text-m);flex-direction:column;padding:calc(var(--tui-data-list-padding) - var(--tui-data-list-margin)) var(--tui-data-list-padding);color:var(--tui-text-tertiary)}tui-data-list:focus-within .t-trap{display:none}tui-data-list:focus-within [tuiOption]._with-dropdown:not(:focus){background-color:transparent}tui-data-list[data-size=s]{--tui-data-list-margin: var(--t-0, 0rem)}tui-data-list[data-size=s]>.t-empty,tui-data-list[data-size=s] [tuiOption]{font:var(--tui-font-text-s);min-block-size:2rem;padding:.3125rem .5rem}tui-data-list[data-size=s]>.t-empty:before,tui-data-list[data-size=s] [tuiOption]:before{font-size:1rem}tui-data-list[data-size=m]>.t-empty,tui-data-list[data-size=m] [tuiOption]{font:var(--tui-font-text-s);min-block-size:2.5rem;padding:.375rem .5rem}tui-data-list[data-size=l]{--tui-data-list-padding: .375rem;--tui-data-list-margin: .125rem}tui-data-list[data-size=l]>.t-empty,tui-data-list[data-size=l] [tuiOption]{font:var(--tui-font-text-m);min-block-size:2.75rem;padding:.375rem .625rem}tui-data-list>.t-empty{display:flex;align-items:center;box-sizing:border-box;margin:var(--tui-data-list-margin) 0}tui-data-list [tuiOption]{-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:flex;align-items:center;box-sizing:border-box;margin:var(--tui-data-list-margin) 0;justify-content:space-between;text-align:start;color:var(--tui-text-primary);border-radius:var(--tui-radius-s);outline:none;cursor:pointer;background-clip:padding-box}tui-data-list [tuiOption]:disabled{opacity:var(--tui-disabled-opacity);cursor:default}tui-data-list [tuiOption]:hover,tui-data-list [tuiOption]:focus-within,tui-data-list [tuiOption]._with-dropdown{background-color:var(--tui-background-neutral-1)}tui-data-list [tuiOption]:before{margin-inline-end:.5rem}tui-data-list [tuiOption]:after{font-size:1rem;margin:0 -.75rem 0 auto;border-left:.5rem solid;border-right:.5rem solid}tui-opt-group{position:relative;display:flex;font:var(--tui-font-text-xs);color:var(--tui-text-secondary);flex-direction:column;line-height:1rem}tui-data-list[data-size=l] tui-opt-group{font:var(--tui-font-text-s);line-height:1.25rem}tui-data-list[data-size=l] tui-opt-group:before{padding-left:.625rem;padding-right:.625rem}tui-data-list[data-size=l] tui-opt-group:after{left:.625rem;right:.625rem}tui-opt-group:empty:before,tui-opt-group:empty:after{display:none}tui-opt-group:before{content:attr(data-label);padding:var(--tui-data-list-padding) .5rem var(--tui-data-list-padding);margin:var(--tui-data-list-margin) 0;white-space:normal;word-break:break-word}tui-opt-group:after{position:absolute;left:.5rem;right:.5rem;top:var(--tui-data-list-padding);block-size:1px;background:var(--tui-border-normal)}tui-opt-group:not(:empty)~tui-opt-group:before{padding-top:calc(.75rem + var(--tui-data-list-padding))}tui-opt-group:not(:empty)~tui-opt-group[data-label=""]:before,tui-opt-group:not(:empty)~tui-opt-group:not([data-label]):before{padding:var(--tui-data-list-padding) 0}tui-opt-group:not(:empty)~tui-opt-group:after{content:""}tui-opt-group[data-label=""]:before,tui-opt-group:not([data-label]):before{padding:0;margin:0}\n'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDataListComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-data-list",
      imports: [NgIf, PolymorpheusOutlet],
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAsDataListAccessor(TuiDataListComponent)],
      host: {
        role: "listbox",
        "[attr.data-size]": "size",
        "(focusin)": "onFocusIn($event.relatedTarget, $event.currentTarget)",
        "(mousedown.prevent)": "(0)",
        "(wheel.silent.passive)": "handleFocusLossIfNecessary()",
        "(mouseleave)": "handleFocusLossIfNecessary($event.target)",
        "(keydown.tab)": "handleFocusLossIfNecessary()",
        "(keydown.shift.tab)": "handleFocusLossIfNecessary()",
        "(keydown.arrowDown.prevent)": "onKeyDownArrow($event.target, 1)",
        "(keydown.arrowUp.prevent)": "onKeyDownArrow($event.target, -1)"
      },
      template: '<ng-content />\n<div\n    *ngIf="empty()"\n    class="t-empty"\n>\n    <ng-container *polymorpheusOutlet="emptyContent || fallback() as text">\n        {{ text }}\n    </ng-container>\n</div>\n',
      styles: ['tui-data-list{--tui-data-list-padding: .25rem;--tui-data-list-margin: .0625rem;display:flex;font:var(--tui-font-text-m);flex-direction:column;padding:calc(var(--tui-data-list-padding) - var(--tui-data-list-margin)) var(--tui-data-list-padding);color:var(--tui-text-tertiary)}tui-data-list:focus-within .t-trap{display:none}tui-data-list:focus-within [tuiOption]._with-dropdown:not(:focus){background-color:transparent}tui-data-list[data-size=s]{--tui-data-list-margin: var(--t-0, 0rem)}tui-data-list[data-size=s]>.t-empty,tui-data-list[data-size=s] [tuiOption]{font:var(--tui-font-text-s);min-block-size:2rem;padding:.3125rem .5rem}tui-data-list[data-size=s]>.t-empty:before,tui-data-list[data-size=s] [tuiOption]:before{font-size:1rem}tui-data-list[data-size=m]>.t-empty,tui-data-list[data-size=m] [tuiOption]{font:var(--tui-font-text-s);min-block-size:2.5rem;padding:.375rem .5rem}tui-data-list[data-size=l]{--tui-data-list-padding: .375rem;--tui-data-list-margin: .125rem}tui-data-list[data-size=l]>.t-empty,tui-data-list[data-size=l] [tuiOption]{font:var(--tui-font-text-m);min-block-size:2.75rem;padding:.375rem .625rem}tui-data-list>.t-empty{display:flex;align-items:center;box-sizing:border-box;margin:var(--tui-data-list-margin) 0}tui-data-list [tuiOption]{-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:flex;align-items:center;box-sizing:border-box;margin:var(--tui-data-list-margin) 0;justify-content:space-between;text-align:start;color:var(--tui-text-primary);border-radius:var(--tui-radius-s);outline:none;cursor:pointer;background-clip:padding-box}tui-data-list [tuiOption]:disabled{opacity:var(--tui-disabled-opacity);cursor:default}tui-data-list [tuiOption]:hover,tui-data-list [tuiOption]:focus-within,tui-data-list [tuiOption]._with-dropdown{background-color:var(--tui-background-neutral-1)}tui-data-list [tuiOption]:before{margin-inline-end:.5rem}tui-data-list [tuiOption]:after{font-size:1rem;margin:0 -.75rem 0 auto;border-left:.5rem solid;border-right:.5rem solid}tui-opt-group{position:relative;display:flex;font:var(--tui-font-text-xs);color:var(--tui-text-secondary);flex-direction:column;line-height:1rem}tui-data-list[data-size=l] tui-opt-group{font:var(--tui-font-text-s);line-height:1.25rem}tui-data-list[data-size=l] tui-opt-group:before{padding-left:.625rem;padding-right:.625rem}tui-data-list[data-size=l] tui-opt-group:after{left:.625rem;right:.625rem}tui-opt-group:empty:before,tui-opt-group:empty:after{display:none}tui-opt-group:before{content:attr(data-label);padding:var(--tui-data-list-padding) .5rem var(--tui-data-list-padding);margin:var(--tui-data-list-margin) 0;white-space:normal;word-break:break-word}tui-opt-group:after{position:absolute;left:.5rem;right:.5rem;top:var(--tui-data-list-padding);block-size:1px;background:var(--tui-border-normal)}tui-opt-group:not(:empty)~tui-opt-group:before{padding-top:calc(.75rem + var(--tui-data-list-padding))}tui-opt-group:not(:empty)~tui-opt-group[data-label=""]:before,tui-opt-group:not(:empty)~tui-opt-group:not([data-label]):before{padding:var(--tui-data-list-padding) 0}tui-opt-group:not(:empty)~tui-opt-group:after{content:""}tui-opt-group[data-label=""]:before,tui-opt-group:not([data-label]):before{padding:0;margin:0}\n']
    }]
  }], null, {
    options: [{
      type: ContentChildren,
      args: [forwardRef(() => TuiOption), {
        descendants: true
      }]
    }],
    emptyContent: [{
      type: Input
    }],
    size: [{
      type: Input
    }]
  });
})();
var TuiDataListDirective = class _TuiDataListDirective {
  static {
    this.ɵfac = function TuiDataListDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDataListDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDataListDirective,
      selectors: [["ng-template", "tuiDataList", ""]],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDataListDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "ng-template[tuiDataList]"
    }]
  }], null, null);
})();
function tuiAsDataList(list) {
  return tuiProvide(TuiDataListDirective, list);
}
var TuiOptGroup = class _TuiOptGroup {
  static {
    this.ɵfac = function TuiOptGroup_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiOptGroup)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiOptGroup,
      selectors: [["tui-opt-group"]],
      hostAttrs: ["role", "group"],
      hostVars: 1,
      hostBindings: function TuiOptGroup_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-label", ctx.label);
        }
      },
      inputs: {
        label: "label"
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiOptGroup, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "tui-opt-group",
      host: {
        role: "group",
        "[attr.data-label]": "label"
      }
    }]
  }], null, {
    label: [{
      type: Input
    }]
  });
})();
var TuiDataList = [TuiDataListComponent, TuiDataListDirective, TuiOption, TuiOptGroup];

export {
  TuiAccessor,
  TuiPositionAccessor,
  TuiRectAccessor,
  tuiProvideAccessor,
  tuiFallbackAccessor,
  tuiPositionAccessorFor,
  tuiRectAccessorFor,
  tuiAsPositionAccessor,
  tuiAsRectAccessor,
  TuiVehicle,
  tuiAsVehicle,
  TuiDriver,
  tuiAsDriver,
  TuiDriverDirective,
  TuiBreakpointService,
  TuiDarkThemeService,
  TuiFormatDateService,
  TuiPositionService,
  TuiVisualViewportService,
  TuiDropdownDriver,
  TuiDropdownDriverDirective,
  TUI_DROPDOWN_COMPONENT,
  TUI_DROPDOWN_CONTEXT,
  TuiDropdownService,
  TUI_DROPDOWN_DEFAULT_OPTIONS,
  TUI_DROPDOWN_OPTIONS,
  tuiDropdownOptionsProvider,
  TuiDropdownOptionsDirective,
  TuiDropdownPosition,
  TuiDropdownDirective,
  TuiDropdownComponent,
  TuiDropdownContext,
  TUI_DROPDOWN_HOVER_DEFAULT_OPTIONS,
  TUI_DROPDOWN_HOVER_OPTIONS,
  tuiDropdownHoverOptionsProvider,
  TuiDropdownOpen,
  TuiDropdownHover,
  TuiDropdownManual,
  TuiDropdownOpenLegacy,
  TuiDropdownPortal,
  TuiDropdownPositionSided,
  TuiDropdownSelection,
  TuiDropdown,
  tuiDropdown,
  tuiDropdownOpen,
  TuiDropdownFixed,
  TuiDropdowns,
  TuiWithDropdownOpen,
  TUI_OPTION_CONTENT,
  tuiAsOptionContent,
  TUI_DATA_LIST_ACCESSOR,
  tuiAsDataListAccessor,
  TUI_DATA_LIST_HOST,
  tuiAsDataListHost,
  TuiOption,
  tuiInjectDataListSize,
  TuiDataListComponent,
  TuiDataListDirective,
  tuiAsDataList,
  TuiOptGroup,
  TuiDataList
};
//# sourceMappingURL=chunk-KJBJNCEM.js.map
