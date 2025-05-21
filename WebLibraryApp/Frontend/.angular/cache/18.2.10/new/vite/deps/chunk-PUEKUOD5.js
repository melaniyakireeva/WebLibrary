import {
  TUI_PLATFORM
} from "./chunk-ZRKXNDNW.js";
import {
  tuiInjectElement
} from "./chunk-TBFJZ2MD.js";
import {
  takeUntilDestroyed,
  tuiPx
} from "./chunk-UQBCXIOX.js";
import {
  WA_WINDOW,
  WINDOW
} from "./chunk-4P53LWHM.js";
import {
  Directive,
  Injectable,
  Input,
  inject,
  setClassMetadata,
  ɵɵProvidersFeature,
  ɵɵattribute,
  ɵɵdefineDirective,
  ɵɵdefineInjectable
} from "./chunk-DGEURTJ6.js";
import {
  EMPTY,
  Observable,
  filter,
  fromEvent,
  map,
  merge,
  shareReplay,
  startWith
} from "./chunk-IJGLK444.js";

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-platform.mjs
var TuiPlatform = class _TuiPlatform {
  constructor() {
    this.tuiPlatform = inject(TUI_PLATFORM, {
      skipSelf: true
    });
  }
  static {
    this.ɵfac = function TuiPlatform_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiPlatform)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiPlatform,
      selectors: [["", "tuiPlatform", ""]],
      hostVars: 1,
      hostBindings: function TuiPlatform_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-platform", ctx.tuiPlatform);
        }
      },
      inputs: {
        tuiPlatform: "tuiPlatform"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([{
        provide: TUI_PLATFORM,
        useFactory: () => inject(_TuiPlatform).tuiPlatform
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPlatform, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiPlatform]",
      providers: [{
        provide: TUI_PLATFORM,
        useFactory: () => inject(TuiPlatform).tuiPlatform
      }],
      host: {
        "[attr.data-platform]": "tuiPlatform"
      }
    }]
  }], null, {
    tuiPlatform: [{
      type: Input
    }]
  });
})();

// node_modules/@ng-web-apis/screen-orientation/fesm2022/ng-web-apis-screen-orientation.mjs
var ScreenOrientationService = class _ScreenOrientationService extends Observable {
  win = inject(WA_WINDOW);
  stream$ = (this.isModern ? fromEvent(this.win.screen.orientation, "change").pipe(startWith(null), map(() => (
    /**
     * https://developer.mozilla.org/en-US/docs/Web/API/Screen/orientation
     * The type read-only property of the ScreenOrientation interface returns the document's current orientation type,
     * one of "portrait-primary", "portrait-secondary", "landscape-primary", or "landscape-secondary".
     *
     * Browser compatibility:
     * Safari 16.4+, Chrome 38+, Firefox 43+
     */
    this.win.screen.orientation.type
  ))) : fromEvent(this.win, "orientationchange").pipe(startWith(null), map(() => {
    const angle = parseInt(this.win.orientation, 10);
    switch (angle) {
      case -90:
        return "landscape-secondary";
      case 180:
        return "portrait-secondary";
      case 90:
        return "landscape-primary";
      case 0:
      default:
        return "portrait-primary";
    }
  }))).pipe(shareReplay({
    bufferSize: 1,
    refCount: true
  }));
  constructor() {
    super((subscriber) => this.stream$.subscribe(subscriber));
  }
  get isModern() {
    return !!this.win?.screen?.orientation;
  }
  static ɵfac = function ScreenOrientationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScreenOrientationService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _ScreenOrientationService,
    factory: _ScreenOrientationService.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScreenOrientationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [];
  }, null);
})();
var ViewportService = class _ViewportService extends Observable {
  visualViewport = inject(WINDOW).visualViewport;
  stream$ = this.visualViewport ? merge(fromEvent(this.visualViewport, "resize"), fromEvent(this.visualViewport, "scroll"), fromEvent(this.visualViewport, "scrollend")).pipe(startWith(null), map(() => this.visualViewport), filter(Boolean), shareReplay({
    bufferSize: 1,
    refCount: true
  })) : EMPTY;
  constructor() {
    super((subscriber) => this.stream$.subscribe(subscriber));
  }
  static ɵfac = function ViewportService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewportService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _ViewportService,
    factory: _ViewportService.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewportService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [];
  }, null);
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-visual-viewport.mjs
var TuiVisualViewport = class _TuiVisualViewport {
  constructor() {
    this.w = inject(WA_WINDOW);
    this.style = tuiInjectElement().style;
    this.$ = inject(ViewportService).pipe(takeUntilDestroyed()).subscribe(({
      offsetLeft,
      offsetTop,
      height,
      width,
      scale
    }) => {
      this.style.setProperty("--tui-viewport-x", tuiPx(offsetLeft));
      this.style.setProperty("--tui-viewport-y", tuiPx(offsetTop));
      this.style.setProperty("--tui-viewport-height", tuiPx(height));
      this.style.setProperty("--tui-viewport-width", tuiPx(width));
      this.style.setProperty("--tui-viewport-scale", String(scale));
      this.style.setProperty("--tui-viewport-vh", tuiPx(this.w.innerHeight / 100));
      this.style.setProperty("--tui-viewport-vw", tuiPx(this.w.innerWidth / 100));
    });
  }
  static {
    this.ɵfac = function TuiVisualViewport_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiVisualViewport)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiVisualViewport,
      selectors: [["", "tuiVisualViewport", ""]],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiVisualViewport, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiVisualViewport]"
    }]
  }], null, null);
})();

export {
  TuiPlatform,
  TuiVisualViewport
};
//# sourceMappingURL=chunk-PUEKUOD5.js.map
