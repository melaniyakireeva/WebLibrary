import {
  MutationObserverService,
  WA_MUTATION_OBSERVER_INIT,
  tuiAvatarOptionsProvider,
  tuiSwitchOptionsProvider
} from "./chunk-SF3F4LER.js";
import {
  tuiCheckboxOptionsProvider
} from "./chunk-QH7E6SLA.js";
import {
  ResizeObserverService
} from "./chunk-O5NPM64D.js";
import {
  tuiButtonOptionsProvider
} from "./chunk-EHOQACUQ.js";
import {
  TuiWithAppearance,
  tuiAppearanceOptionsProvider
} from "./chunk-Y7YOVM7H.js";
import {
  shouldCall
} from "./chunk-IHLRT44D.js";
import {
  TuiWithIcons
} from "./chunk-QBEBPKKH.js";
import {
  tuiGetActualTarget,
  tuiInjectElement,
  tuiIsElement
} from "./chunk-TBFJZ2MD.js";
import {
  tuiWatch,
  tuiZonefreeScheduler,
  tuiZonefull
} from "./chunk-EEGF43CM.js";
import {
  toSignal,
  tuiArrayShallowEquals,
  tuiCreateToken,
  tuiProvideOptions,
  tuiPx,
  tuiWithStyles
} from "./chunk-UQBCXIOX.js";
import {
  isPlatformBrowser
} from "./chunk-6S6PAGJZ.js";
import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  Injectable,
  Input,
  Output,
  PLATFORM_ID,
  ViewChild,
  ViewEncapsulation$1,
  inject,
  setClassMetadata,
  ɵɵHostDirectivesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵviewQuery
} from "./chunk-DGEURTJ6.js";
import {
  BehaviorSubject,
  Subject,
  Subscription,
  __decorate,
  combineLatest,
  debounce,
  debounceTime,
  delay,
  distinctUntilChanged,
  filter,
  map,
  of,
  startWith,
  timer
} from "./chunk-IJGLK444.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-3OV72XIM.js";

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-tiles.mjs
var _c0 = ["*"];
var _c1 = ["wrapper"];
var TuiTilesComponent = class _TuiTilesComponent {
  constructor() {
    this.el = tuiInjectElement();
    this.el$ = new Subject();
    this.debounce = 0;
    this.orderChange = this.el$.pipe(debounce(() => timer(this.debounce)), filter(this.filter.bind(this)), map((element) => this.reorder(element)));
    this.element = null;
    this.order$ = new BehaviorSubject(/* @__PURE__ */ new Map());
  }
  set order(map2) {
    this.order$.next(map2);
  }
  get order() {
    return this.order$.value;
  }
  rearrange(element) {
    this.el$.next(element);
  }
  filter(element) {
    return !!this.element && !!element && this.element !== element;
  }
  reorder(element) {
    const elements = Array.from(this.el.children);
    const currentIndex = elements.indexOf(this.element || element);
    const newIndex = elements.indexOf(element);
    const order = this.order.size ? new Map(this.order) : new Map(elements.map((_, index) => [index, index]));
    const dragged = order.get(currentIndex) ?? currentIndex;
    const placement = order.get(newIndex) ?? newIndex;
    order.set(currentIndex, placement);
    order.set(newIndex, dragged);
    this.order$.next(order);
    return order;
  }
  static {
    this.ɵfac = function TuiTilesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTilesComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiTilesComponent,
      selectors: [["tui-tiles"]],
      hostVars: 2,
      hostBindings: function TuiTilesComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("pointerleave.silent", function TuiTilesComponent_pointerleave_silent_HostBindingHandler() {
            return ctx.rearrange();
          });
        }
        if (rf & 2) {
          ɵɵclassProp("_dragged", ctx.element);
        }
      },
      inputs: {
        debounce: "debounce",
        order: "order"
      },
      outputs: {
        orderChange: "orderChange"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([ResizeObserverService, MutationObserverService, {
        provide: WA_MUTATION_OBSERVER_INIT,
        useValue: {
          childList: true
        }
      }]), ɵɵStandaloneFeature],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function TuiTilesComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
        }
      },
      styles: ["tui-tiles{position:relative;z-index:0;display:grid;grid-auto-flow:dense;justify-items:stretch}tui-tiles._dragged tui-tile>.t-wrapper{pointer-events:none}tui-tiles._dragged tui-tile:not(._dragged)>.t-wrapper{transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;transition-delay:1ms}tui-tiles:not(._dragged) tui-tile._dragged>.t-wrapper{transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;transition-delay:1ms}tui-tile>.t-wrapper{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;z-index:0;border-radius:inherit}tui-tile._dragged>.t-wrapper{z-index:1;transition:none}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTilesComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-tiles",
      template: "<ng-content></ng-content>",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [ResizeObserverService, MutationObserverService, {
        provide: WA_MUTATION_OBSERVER_INIT,
        useValue: {
          childList: true
        }
      }],
      host: {
        "[class._dragged]": "element",
        "(pointerleave.silent)": "rearrange()"
      },
      styles: ["tui-tiles{position:relative;z-index:0;display:grid;grid-auto-flow:dense;justify-items:stretch}tui-tiles._dragged tui-tile>.t-wrapper{pointer-events:none}tui-tiles._dragged tui-tile:not(._dragged)>.t-wrapper{transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;transition-delay:1ms}tui-tiles:not(._dragged) tui-tile._dragged>.t-wrapper{transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;transition-delay:1ms}tui-tile>.t-wrapper{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;z-index:0;border-radius:inherit}tui-tile._dragged>.t-wrapper{z-index:1;transition:none}\n"]
    }]
  }], null, {
    debounce: [{
      type: Input
    }],
    orderChange: [{
      type: Output
    }],
    order: [{
      type: Input
    }]
  });
})();
var TuiTileService = class _TuiTileService {
  constructor() {
    this.isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
    this.el = tuiInjectElement();
    this.tiles = inject(TuiTilesComponent);
    this.sub = new Subscription();
    this.offset$ = new BehaviorSubject([NaN, NaN]);
    this.position$ = combineLatest([this.offset$.pipe(distinctUntilChanged(tuiArrayShallowEquals)), inject(ResizeObserverService).pipe(startWith(null)), inject(MutationObserverService).pipe(startWith(null)), this.tiles.order$.pipe(debounceTime(0, tuiZonefreeScheduler()))]).pipe(map(([offset]) => offset));
  }
  init(element) {
    if (this.isBrowser) {
      this.sub.add(this.position$.subscribe((offset) => {
        this.setPosition(element, offset);
        this.setRect(element, offset);
      }));
    } else {
      this.el.style.setProperty("position", "relative");
    }
  }
  setOffset(offset) {
    this.offset$.next(offset);
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  getRect([left, top]) {
    const elTop = Number.isNaN(top) ? this.el.offsetTop : top;
    const elLeft = Number.isNaN(left) ? this.el.offsetLeft : left;
    const rect = {
      top: elTop,
      left: elLeft,
      width: this.el.clientWidth,
      height: this.el.clientHeight,
      right: NaN,
      bottom: NaN,
      y: elTop,
      x: elLeft
    };
    return __spreadProps(__spreadValues({}, rect), {
      toJSON: () => JSON.stringify(rect)
    });
  }
  setRect({
    style
  }, offset) {
    const {
      top,
      left,
      width,
      height
    } = this.getRect(offset);
    style.top = tuiPx(top);
    style.left = tuiPx(left);
    style.width = tuiPx(width);
    style.height = tuiPx(height);
  }
  setPosition(element, [left]) {
    if (!Number.isNaN(left)) {
      element.style.setProperty("position", "fixed");
      return;
    }
    const {
      style
    } = element;
    const rect = element.getBoundingClientRect();
    const host = this.el.getBoundingClientRect();
    style.removeProperty("position");
    style.top = tuiPx(rect.top - host.top + this.el.offsetTop);
    style.left = tuiPx(rect.left - host.left + this.el.offsetLeft);
  }
  static {
    this.ɵfac = function TuiTileService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTileService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiTileService,
      factory: _TuiTileService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTileService, [{
    type: Injectable
  }], null, null);
})();
var TuiTile = class _TuiTile {
  constructor() {
    this.service = inject(TuiTileService);
    this.tiles = inject(TuiTilesComponent);
    this.dragged = false;
    this.width = 1;
    this.height = 1;
    this.element = tuiInjectElement();
  }
  onDrag(offset) {
    const dragged = !Number.isNaN(offset[0]);
    this.dragged = this.dragged || dragged;
    this.tiles.element = dragged ? this.element : null;
    this.service.setOffset(offset);
  }
  ngAfterViewInit() {
    if (this.wrapper) {
      this.service.init(this.wrapper.nativeElement);
    }
  }
  ngOnDestroy() {
    if (this.tiles.element === this.element) {
      this.tiles.element = null;
    }
  }
  get column() {
    return `span var(--tui-width, ${this.width})`;
  }
  get row() {
    return `span var(--tui-height, ${this.height})`;
  }
  onEnter() {
    this.tiles.rearrange(this.element);
  }
  onTransitionEnd() {
    this.dragged = false;
  }
  static {
    this.ɵfac = function TuiTile_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTile)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiTile,
      selectors: [["tui-tile"]],
      viewQuery: function TuiTile_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c1, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.wrapper = _t.first);
        }
      },
      hostVars: 6,
      hostBindings: function TuiTile_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("pointerenter", function TuiTile_pointerenter_HostBindingHandler() {
            return ctx.onEnter();
          });
        }
        if (rf & 2) {
          ɵɵstyleProp("grid-column", ctx.column)("grid-row", ctx.row);
          ɵɵclassProp("_dragged", ctx.dragged);
        }
      },
      inputs: {
        width: "width",
        height: "height"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([TuiTileService]), ɵɵStandaloneFeature],
      ngContentSelectors: _c0,
      decls: 3,
      vars: 0,
      consts: [["wrapper", ""], [1, "t-wrapper", 3, "transitionend.self"]],
      template: function TuiTile_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵprojectionDef();
          ɵɵelementStart(0, "div", 1, 0);
          ɵɵlistener("transitionend.self", function TuiTile_Template_div_transitionend_self_0_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onTransitionEnd());
          });
          ɵɵprojection(2);
          ɵɵelementEnd();
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTile, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-tile",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [TuiTileService],
      host: {
        "[class._dragged]": "dragged",
        "[style.gridColumn]": "column",
        "[style.gridRow]": "row",
        "(pointerenter)": "onEnter()"
      },
      template: '<div\n    #wrapper\n    class="t-wrapper"\n    (transitionend.self)="onTransitionEnd()"\n>\n    <ng-content />\n</div>\n'
    }]
  }], null, {
    wrapper: [{
      type: ViewChild,
      args: ["wrapper"]
    }],
    width: [{
      type: Input
    }],
    height: [{
      type: Input
    }]
  });
})();
function isInteracting(x = NaN) {
  return !Number.isNaN(x) || !Number.isNaN(this["x"]);
}
function isDragging() {
  return !Number.isNaN(this["x"]);
}
var TuiTileHandle = class _TuiTileHandle {
  constructor() {
    this.tile = inject(TuiTile);
    this.x = NaN;
    this.y = NaN;
  }
  onPointer(x = NaN, y = NaN) {
    const {
      left,
      top
    } = this.tile.element.getBoundingClientRect();
    this.x = x - left;
    this.y = y - top;
    this.tile.onDrag([NaN, NaN]);
  }
  onMove(x, y) {
    this.tile.onDrag([x - this.x, y - this.y]);
  }
  onStart(event) {
    const target = tuiGetActualTarget(event);
    const {
      x,
      y,
      pointerId
    } = event;
    if (tuiIsElement(target)) {
      target.releasePointerCapture(pointerId);
    }
    this.onPointer(x, y);
  }
  static {
    this.ɵfac = function TuiTileHandle_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTileHandle)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTileHandle,
      selectors: [["", "tuiTileHandle", ""]],
      hostVars: 4,
      hostBindings: function TuiTileHandle_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("pointerdown.silent", function TuiTileHandle_pointerdown_silent_HostBindingHandler($event) {
            return ctx.onStart($event);
          })("pointerup.silent", function TuiTileHandle_pointerup_silent_HostBindingHandler() {
            return ctx.onPointer();
          }, false, ɵɵresolveDocument)("pointermove.silent", function TuiTileHandle_pointermove_silent_HostBindingHandler($event) {
            return ctx.onMove($event.x, $event.y);
          }, false, ɵɵresolveDocument);
        }
        if (rf & 2) {
          ɵɵstyleProp("touch-action", "none")("user-select", "none");
        }
      },
      standalone: true
    });
  }
};
__decorate([shouldCall(isInteracting)], TuiTileHandle.prototype, "onPointer", null);
__decorate([shouldCall(isDragging)], TuiTileHandle.prototype, "onMove", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTileHandle, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiTileHandle]",
      host: {
        "[style.touchAction]": '"none"',
        "[style.userSelect]": '"none"',
        "(pointerdown.silent)": "onStart($event)",
        "(document:pointerup.silent)": "onPointer()",
        "(document:pointermove.silent)": "onMove($event.x, $event.y)"
      }
    }]
  }], null, {
    onPointer: [],
    onMove: []
  });
})();
var TuiTiles = [TuiTilesComponent, TuiTile, TuiTileHandle];

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-chip.mjs
var TUI_CHIP_DEFAULT_OPTIONS = {
  appearance: "neutral",
  size: "s"
};
var TUI_CHIP_OPTIONS = tuiCreateToken(TUI_CHIP_DEFAULT_OPTIONS);
function tuiChipOptionsProvider(options) {
  return tuiProvideOptions(TUI_CHIP_OPTIONS, options, TUI_CHIP_DEFAULT_OPTIONS);
}
var TuiChipStyles = class _TuiChipStyles {
  static {
    this.ɵfac = function TuiChipStyles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiChipStyles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiChipStyles,
      selectors: [["ng-component"]],
      hostAttrs: [1, "tui-chip"],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 0,
      vars: 0,
      template: function TuiChipStyles_Template(rf, ctx) {
      },
      styles: ["tui-chip,[tuiChip]{--t-gap: .125rem;--t-margin: -.125rem;--t-icon-size: 1rem;--t-padding: 0 .625rem;--t-size: var(--tui-height-s);-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;position:relative;display:inline-flex;align-items:center;flex-shrink:0;box-sizing:border-box;white-space:nowrap;overflow:hidden;vertical-align:middle;max-inline-size:100%;gap:calc(var(--t-gap, var(--t-0, 0rem)) - 2 * var(--t-margin, 0rem));font:var(--tui-font-text-s);border-radius:var(--tui-radius-m);padding:var(--t-padding);block-size:var(--t-size);inline-size:-webkit-fit-content;inline-size:-moz-fit-content;inline-size:fit-content;isolation:isolate}tui-chip>img,[tuiChip]>img,tui-chip>tui-svg,[tuiChip]>tui-svg,tui-chip>tui-icon,[tuiChip]>tui-icon,tui-chip>tui-avatar,[tuiChip]>tui-avatar,tui-chip>tui-badge,[tuiChip]>tui-badge,tui-chip>[tuiBadge],[tuiChip]>[tuiBadge],tui-chip>[tuiRadio],[tuiChip]>[tuiRadio],tui-chip>[tuiSwitch],[tuiChip]>[tuiSwitch],tui-chip>[tuiCheckbox],[tuiChip]>[tuiCheckbox],tui-chip[tuiIcons]:before,[tuiChip][tuiIcons]:before,tui-chip[tuiIcons]:after,[tuiChip][tuiIcons]:after{margin:var(--t-margin)}tui-chip:-webkit-any(a,button,select,textarea,input,label),[tuiChip]:-webkit-any(a,button,select,textarea,input,label){cursor:pointer}tui-chip:-moz-any(a,button,select,textarea,input,label),[tuiChip]:-moz-any(a,button,select,textarea,input,label){cursor:pointer}tui-chip>tui-icon,[tuiChip]>tui-icon,tui-chip[tuiIcons]:before,[tuiChip][tuiIcons]:before,tui-chip[tuiIcons]:after,[tuiChip][tuiIcons]:after{font-size:var(--t-icon-size)!important}tui-chip>[tuiIconButton],[tuiChip]>[tuiIconButton]{margin:-.375rem}tui-chip[data-size=xxs],[tuiChip][data-size=xxs]{--t-gap: var(--t-0, 0rem);--t-padding: 0 .25rem;--t-size: 1rem;--t-icon-size: .75rem;font:var(--tui-font-text-xs);border-radius:var(--tui-radius-xs)}tui-chip[data-size=xxs]>[tuiIconButton],[tuiChip][data-size=xxs]>[tuiIconButton]{margin:-.5rem;transform:scale(.75)}tui-chip[data-size=xs],[tuiChip][data-size=xs]{--t-padding: 0 .375rem;--t-size: var(--tui-height-xs);border-radius:var(--tui-radius-xs)}tui-chip[data-size=xs]>[tuiIconButton],[tuiChip][data-size=xs]>[tuiIconButton]{margin:-.375rem}tui-chip[data-size=m],[tuiChip][data-size=m]{--t-margin: -.375rem;--t-icon-size: 1.5rem;--t-padding: 0 1rem;--t-size: var(--tui-height-m);font:var(--tui-font-text-m)}tui-chip[data-size=m]>[tuiIconButton],[tuiChip][data-size=m]>[tuiIconButton]{margin:-.75rem}tui-chip>img,[tuiChip]>img,tui-chip tui-avatar,[tuiChip] tui-avatar{inline-size:1.5rem;margin-inline-start:-.375rem}tui-chip>input[tuiChip],[tuiChip]>input[tuiChip]{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;z-index:-1;margin:0}tui-chip[tuiAppearance][data-appearance=error],[tuiChip][tuiAppearance][data-appearance=error],tui-chip[tuiAppearance][data-appearance=success],[tuiChip][tuiAppearance][data-appearance=success],tui-chip[tuiAppearance][data-appearance=negative],[tuiChip][tuiAppearance][data-appearance=negative],tui-chip[tuiAppearance][data-appearance=positive],[tuiChip][tuiAppearance][data-appearance=positive],tui-chip[tuiAppearance][data-appearance=warning],[tuiChip][tuiAppearance][data-appearance=warning],tui-chip[tuiAppearance][data-appearance=info],[tuiChip][tuiAppearance][data-appearance=info],tui-chip[tuiAppearance][data-appearance=neutral],[tuiChip][tuiAppearance][data-appearance=neutral]{color:var(--tui-text-primary)}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiChipStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-chip"
      },
      styles: ["tui-chip,[tuiChip]{--t-gap: .125rem;--t-margin: -.125rem;--t-icon-size: 1rem;--t-padding: 0 .625rem;--t-size: var(--tui-height-s);-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;position:relative;display:inline-flex;align-items:center;flex-shrink:0;box-sizing:border-box;white-space:nowrap;overflow:hidden;vertical-align:middle;max-inline-size:100%;gap:calc(var(--t-gap, var(--t-0, 0rem)) - 2 * var(--t-margin, 0rem));font:var(--tui-font-text-s);border-radius:var(--tui-radius-m);padding:var(--t-padding);block-size:var(--t-size);inline-size:-webkit-fit-content;inline-size:-moz-fit-content;inline-size:fit-content;isolation:isolate}tui-chip>img,[tuiChip]>img,tui-chip>tui-svg,[tuiChip]>tui-svg,tui-chip>tui-icon,[tuiChip]>tui-icon,tui-chip>tui-avatar,[tuiChip]>tui-avatar,tui-chip>tui-badge,[tuiChip]>tui-badge,tui-chip>[tuiBadge],[tuiChip]>[tuiBadge],tui-chip>[tuiRadio],[tuiChip]>[tuiRadio],tui-chip>[tuiSwitch],[tuiChip]>[tuiSwitch],tui-chip>[tuiCheckbox],[tuiChip]>[tuiCheckbox],tui-chip[tuiIcons]:before,[tuiChip][tuiIcons]:before,tui-chip[tuiIcons]:after,[tuiChip][tuiIcons]:after{margin:var(--t-margin)}tui-chip:-webkit-any(a,button,select,textarea,input,label),[tuiChip]:-webkit-any(a,button,select,textarea,input,label){cursor:pointer}tui-chip:-moz-any(a,button,select,textarea,input,label),[tuiChip]:-moz-any(a,button,select,textarea,input,label){cursor:pointer}tui-chip>tui-icon,[tuiChip]>tui-icon,tui-chip[tuiIcons]:before,[tuiChip][tuiIcons]:before,tui-chip[tuiIcons]:after,[tuiChip][tuiIcons]:after{font-size:var(--t-icon-size)!important}tui-chip>[tuiIconButton],[tuiChip]>[tuiIconButton]{margin:-.375rem}tui-chip[data-size=xxs],[tuiChip][data-size=xxs]{--t-gap: var(--t-0, 0rem);--t-padding: 0 .25rem;--t-size: 1rem;--t-icon-size: .75rem;font:var(--tui-font-text-xs);border-radius:var(--tui-radius-xs)}tui-chip[data-size=xxs]>[tuiIconButton],[tuiChip][data-size=xxs]>[tuiIconButton]{margin:-.5rem;transform:scale(.75)}tui-chip[data-size=xs],[tuiChip][data-size=xs]{--t-padding: 0 .375rem;--t-size: var(--tui-height-xs);border-radius:var(--tui-radius-xs)}tui-chip[data-size=xs]>[tuiIconButton],[tuiChip][data-size=xs]>[tuiIconButton]{margin:-.375rem}tui-chip[data-size=m],[tuiChip][data-size=m]{--t-margin: -.375rem;--t-icon-size: 1.5rem;--t-padding: 0 1rem;--t-size: var(--tui-height-m);font:var(--tui-font-text-m)}tui-chip[data-size=m]>[tuiIconButton],[tuiChip][data-size=m]>[tuiIconButton]{margin:-.75rem}tui-chip>img,[tuiChip]>img,tui-chip tui-avatar,[tuiChip] tui-avatar{inline-size:1.5rem;margin-inline-start:-.375rem}tui-chip>input[tuiChip],[tuiChip]>input[tuiChip]{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;z-index:-1;margin:0}tui-chip[tuiAppearance][data-appearance=error],[tuiChip][tuiAppearance][data-appearance=error],tui-chip[tuiAppearance][data-appearance=success],[tuiChip][tuiAppearance][data-appearance=success],tui-chip[tuiAppearance][data-appearance=negative],[tuiChip][tuiAppearance][data-appearance=negative],tui-chip[tuiAppearance][data-appearance=positive],[tuiChip][tuiAppearance][data-appearance=positive],tui-chip[tuiAppearance][data-appearance=warning],[tuiChip][tuiAppearance][data-appearance=warning],tui-chip[tuiAppearance][data-appearance=info],[tuiChip][tuiAppearance][data-appearance=info],tui-chip[tuiAppearance][data-appearance=neutral],[tuiChip][tuiAppearance][data-appearance=neutral]{color:var(--tui-text-primary)}\n"]
    }]
  }], null, null);
})();
var TuiChip = class _TuiChip {
  constructor() {
    this.options = inject(TUI_CHIP_OPTIONS);
    this.nothing = tuiWithStyles(TuiChipStyles);
    this.size = this.options.size;
  }
  static {
    this.ɵfac = function TuiChip_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiChip)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiChip,
      selectors: [["tui-chip"], ["", "tuiChip", ""]],
      hostVars: 1,
      hostBindings: function TuiChip_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size);
        }
      },
      inputs: {
        size: "size"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiAppearanceOptionsProvider(TUI_CHIP_OPTIONS), tuiSwitchOptionsProvider({
        size: "s"
      }), tuiCheckboxOptionsProvider({
        size: "s"
      }), tuiAvatarOptionsProvider({
        size: "xs"
      }), tuiButtonOptionsProvider({
        size: "xs",
        appearance: "icon"
      })]), ɵɵHostDirectivesFeature([TuiWithAppearance, TuiWithIcons])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiChip, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "tui-chip,[tuiChip]",
      providers: [tuiAppearanceOptionsProvider(TUI_CHIP_OPTIONS), tuiSwitchOptionsProvider({
        size: "s"
      }), tuiCheckboxOptionsProvider({
        size: "s"
      }), tuiAvatarOptionsProvider({
        size: "xs"
      }), tuiButtonOptionsProvider({
        size: "xs",
        appearance: "icon"
      })],
      hostDirectives: [TuiWithAppearance, TuiWithIcons],
      host: {
        "[attr.data-size]": "size"
      }
    }]
  }], null, {
    size: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-progress.mjs
var _c02 = ["tuiProgressBar", ""];
var _c12 = ["tuiProgressLabel", ""];
var _c2 = [[["progress"]], [["tui-progress-circle"]], "*"];
var _c3 = ["progress", "tui-progress-circle", "*"];
var TUI_PROGRESS_DEFAULT_OPTIONS = {
  color: null,
  size: "m"
};
var TUI_PROGRESS_OPTIONS = tuiCreateToken(TUI_PROGRESS_DEFAULT_OPTIONS);
function tuiProgressOptionsProvider(options) {
  return tuiProvideOptions(TUI_PROGRESS_OPTIONS, options, TUI_PROGRESS_DEFAULT_OPTIONS);
}
var TuiProgressBar = class _TuiProgressBar {
  constructor() {
    this.options = inject(TUI_PROGRESS_OPTIONS);
    this.color = this.options.color;
    this.size = this.options.size;
  }
  static {
    this.ɵfac = function TuiProgressBar_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiProgressBar)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiProgressBar,
      selectors: [["progress", "tuiProgressBar", ""]],
      hostVars: 3,
      hostBindings: function TuiProgressBar_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size);
          ɵɵstyleProp("--tui-progress-color", ctx.color);
        }
      },
      inputs: {
        color: "color",
        size: "size"
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      attrs: _c02,
      decls: 0,
      vars: 0,
      template: function TuiProgressBar_Template(rf, ctx) {
      },
      styles: ["@keyframes tuiIndeterminateAnimation{50%{background-position:left}}[tuiProgressBar]{-webkit-appearance:none;appearance:none;border:none;--t-height: .75rem;display:block;inline-size:100%;block-size:var(--t-height);color:var(--tui-background-accent-1);background:var(--tui-background-neutral-1);clip-path:inset(0 .5px round var(--tui-radius-m));overflow:hidden;border-radius:1rem;flex-shrink:0}[tuiProgressBar]::-webkit-progress-value{-webkit-transition:width var(--tui-duration) linear;transition:width var(--tui-duration) linear}[tuiProgressBar]::-webkit-progress-value{background:var(--tui-progress-color, currentColor);border-radius:inherit}[tuiProgressBar]::-moz-progress-bar{background:var(--tui-progress-color, currentColor);border-radius:inherit}[tuiProgressBar][data-size=xxs]{--t-height: .125rem}[tuiProgressBar][data-size=xs]{--t-height: .25rem}[tuiProgressBar][data-size=s]{--t-height: .5rem}[tuiProgressBar][data-size=l]{--t-height: 1rem}[tuiProgressBar][data-size=xl]{--t-height: 1.25rem}[tuiProgressBar][data-size=xxl]{--t-height: 1.5rem}[tuiProgressBar]:indeterminate{background:linear-gradient(to right,var(--tui-background-neutral-1) 0 45%,var(--tui-progress-color, currentColor) 45% 55%,var(--tui-background-neutral-1) 55% 100%) right;background-size:225%;animation:tuiIndeterminateAnimation 3s infinite ease-in-out}[tuiProgressBar]:indeterminate::-webkit-progress-value{background:transparent}[tuiProgressBar]:indeterminate::-moz-progress-bar{background:transparent}[tuiProgressBar]::-webkit-progress-inner-element{border-radius:inherit}[tuiProgressBar]::-webkit-progress-bar{background:transparent;border-radius:inherit}label[tuiProgressLabel] [tuiProgressBar]:not(:first-child){position:absolute;top:0;left:0;inline-size:100%;block-size:100%;background:transparent}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiProgressBar, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "progress[tuiProgressBar]",
      template: "",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[style.--tui-progress-color]": "color",
        "[attr.data-size]": "size"
      },
      styles: ["@keyframes tuiIndeterminateAnimation{50%{background-position:left}}[tuiProgressBar]{-webkit-appearance:none;appearance:none;border:none;--t-height: .75rem;display:block;inline-size:100%;block-size:var(--t-height);color:var(--tui-background-accent-1);background:var(--tui-background-neutral-1);clip-path:inset(0 .5px round var(--tui-radius-m));overflow:hidden;border-radius:1rem;flex-shrink:0}[tuiProgressBar]::-webkit-progress-value{-webkit-transition:width var(--tui-duration) linear;transition:width var(--tui-duration) linear}[tuiProgressBar]::-webkit-progress-value{background:var(--tui-progress-color, currentColor);border-radius:inherit}[tuiProgressBar]::-moz-progress-bar{background:var(--tui-progress-color, currentColor);border-radius:inherit}[tuiProgressBar][data-size=xxs]{--t-height: .125rem}[tuiProgressBar][data-size=xs]{--t-height: .25rem}[tuiProgressBar][data-size=s]{--t-height: .5rem}[tuiProgressBar][data-size=l]{--t-height: 1rem}[tuiProgressBar][data-size=xl]{--t-height: 1.25rem}[tuiProgressBar][data-size=xxl]{--t-height: 1.5rem}[tuiProgressBar]:indeterminate{background:linear-gradient(to right,var(--tui-background-neutral-1) 0 45%,var(--tui-progress-color, currentColor) 45% 55%,var(--tui-background-neutral-1) 55% 100%) right;background-size:225%;animation:tuiIndeterminateAnimation 3s infinite ease-in-out}[tuiProgressBar]:indeterminate::-webkit-progress-value{background:transparent}[tuiProgressBar]:indeterminate::-moz-progress-bar{background:transparent}[tuiProgressBar]::-webkit-progress-inner-element{border-radius:inherit}[tuiProgressBar]::-webkit-progress-bar{background:transparent;border-radius:inherit}label[tuiProgressLabel] [tuiProgressBar]:not(:first-child){position:absolute;top:0;left:0;inline-size:100%;block-size:100%;background:transparent}\n"]
    }]
  }], null, {
    color: [{
      type: Input
    }],
    size: [{
      type: Input
    }]
  });
})();
var TuiProgressColorSegments = class _TuiProgressColorSegments {
  constructor() {
    this.colors$ = new BehaviorSubject([]);
    this.el = tuiInjectElement();
    this.color = toSignal(combineLatest([this.colors$, inject(ResizeObserverService, {
      self: true
    }).pipe(map(() => this.el.offsetWidth), distinctUntilChanged())]).pipe(map(([colors, width]) => {
      const segmentWidth = Math.ceil(width / colors.length);
      const colorsString = colors.reduce((acc, color, i) => `${acc}, ${color} ${i * segmentWidth}px ${(i + 1) * segmentWidth}px`, "");
      return `linear-gradient(to right ${colorsString})`;
    }), tuiZonefull(), tuiWatch()));
  }
  set colors(colors) {
    this.colors$.next(colors);
  }
  static {
    this.ɵfac = function TuiProgressColorSegments_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiProgressColorSegments)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiProgressColorSegments,
      selectors: [["progress", "tuiProgressBar", "", "tuiProgressColorSegments", ""]],
      hostVars: 2,
      hostBindings: function TuiProgressColorSegments_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵstyleProp("--tui-progress-color", ctx.color());
        }
      },
      inputs: {
        colors: [0, "tuiProgressColorSegments", "colors"]
      },
      standalone: true,
      features: [ɵɵProvidersFeature([ResizeObserverService])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiProgressColorSegments, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "progress[tuiProgressBar][tuiProgressColorSegments]",
      providers: [ResizeObserverService],
      host: {
        "[style.--tui-progress-color]": "color()"
      }
    }]
  }], null, {
    colors: [{
      type: Input,
      args: ["tuiProgressColorSegments"]
    }]
  });
})();
var TuiProgressCircle = class _TuiProgressCircle {
  constructor() {
    this.options = inject(TUI_PROGRESS_OPTIONS);
    this.animationDelay = toSignal(of(true).pipe(delay(0)));
    this.value = 0;
    this.max = 1;
    this.color = this.options.color;
    this.size = this.options.size;
  }
  get progressRatio() {
    const ratio = this.value / this.max;
    return Number.isFinite(ratio) ? ratio : 0;
  }
  static {
    this.ɵfac = function TuiProgressCircle_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiProgressCircle)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiProgressCircle,
      selectors: [["tui-progress-circle"]],
      hostVars: 5,
      hostBindings: function TuiProgressCircle_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size);
          ɵɵstyleProp("--tui-progress-color", ctx.color)("--t-progress-ratio", ctx.progressRatio);
        }
      },
      inputs: {
        value: "value",
        max: "max",
        color: "color",
        size: "size"
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 4,
      vars: 4,
      consts: [[1, "t-hidden-progress", 3, "max", "value"], ["aria-hidden", "true", "height", "100%", "width", "100%", 1, "t-svg"], ["cx", "50%", "cy", "50%", 1, "t-track"], ["cx", "50%", "cy", "50%", 1, "t-progress"]],
      template: function TuiProgressCircle_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelement(0, "progress", 0);
          ɵɵnamespaceSVG();
          ɵɵelementStart(1, "svg", 1);
          ɵɵelement(2, "circle", 2)(3, "circle", 3);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵproperty("max", ctx.max)("value", ctx.value);
          ɵɵadvance(3);
          ɵɵclassProp("t-progress_filled", ctx.animationDelay());
        }
      },
      styles: ["[_nghost-%COMP%]{--t-track-stroke: var(--tui-thickness, .375em);--t-progress-stroke: var(--tui-thickness, .375em);position:relative;display:block;color:var(--tui-background-accent-1);transform:rotate(-90deg);transform-origin:center;font-size:1rem;inline-size:var(--t-diameter);block-size:var(--t-diameter);border-radius:100%;-webkit-mask:radial-gradient(closest-side,transparent calc(100% - var(--t-track-stroke)),#000 calc(100% - var(--t-track-stroke) + .5px));mask:radial-gradient(closest-side,transparent calc(100% - var(--t-track-stroke)),#000 calc(100% - var(--t-track-stroke) + .5px))}[data-size=xxs][_nghost-%COMP%]{--t-diameter: 2em}[data-size=xs][_nghost-%COMP%]{--t-diameter: 2.5em}[data-size=s][_nghost-%COMP%]{--t-diameter: 3.5em}[data-size=m][_nghost-%COMP%]{--t-diameter: 4em}[data-size=l][_nghost-%COMP%]{--t-diameter: 5em}[data-size=xl][_nghost-%COMP%]{--t-diameter: 6em}[data-size=xxl][_nghost-%COMP%]{--t-diameter: 8em}.t-track[_ngcontent-%COMP%]{fill:transparent;stroke:var(--tui-background-neutral-1);stroke-width:var(--t-track-stroke);r:calc((var(--t-diameter) - var(--t-track-stroke)) / 2)}.t-progress[_ngcontent-%COMP%]{fill:transparent;stroke:var(--tui-progress-color, currentColor);stroke-linecap:round;stroke-width:var(--t-progress-stroke);stroke-dasharray:calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-progress-stroke)) / 2));stroke-dashoffset:calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-progress-stroke)) / 2));r:calc((var(--t-diameter) - var(--t-progress-stroke)) / 2)}.t-progress_filled[_ngcontent-%COMP%]{transition:stroke-dashoffset var(--tui-duration) linear;stroke-dashoffset:calc(calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-progress-stroke)) / 2)) - var(--t-progress-ratio) * calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-progress-stroke)) / 2)))}.t-hidden-progress[_ngcontent-%COMP%]{position:absolute;clip:rect(1px,1px,1px,1px);clip-path:inset(50%);block-size:1px;inline-size:1px;margin:-1px;overflow:hidden;padding:0}.t-svg[_ngcontent-%COMP%]{overflow:unset}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiProgressCircle, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-progress-circle",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[attr.data-size]": "size",
        "[style.--tui-progress-color]": "color",
        "[style.--t-progress-ratio]": "progressRatio"
      },
      template: '<progress\n    class="t-hidden-progress"\n    [max]="max"\n    [value]="value"\n></progress>\n\n<svg\n    aria-hidden="true"\n    height="100%"\n    width="100%"\n    class="t-svg"\n>\n    <circle\n        cx="50%"\n        cy="50%"\n        class="t-track"\n    />\n\n    <circle\n        cx="50%"\n        cy="50%"\n        class="t-progress"\n        [class.t-progress_filled]="animationDelay()"\n    />\n</svg>\n',
      styles: [":host{--t-track-stroke: var(--tui-thickness, .375em);--t-progress-stroke: var(--tui-thickness, .375em);position:relative;display:block;color:var(--tui-background-accent-1);transform:rotate(-90deg);transform-origin:center;font-size:1rem;inline-size:var(--t-diameter);block-size:var(--t-diameter);border-radius:100%;-webkit-mask:radial-gradient(closest-side,transparent calc(100% - var(--t-track-stroke)),#000 calc(100% - var(--t-track-stroke) + .5px));mask:radial-gradient(closest-side,transparent calc(100% - var(--t-track-stroke)),#000 calc(100% - var(--t-track-stroke) + .5px))}:host[data-size=xxs]{--t-diameter: 2em}:host[data-size=xs]{--t-diameter: 2.5em}:host[data-size=s]{--t-diameter: 3.5em}:host[data-size=m]{--t-diameter: 4em}:host[data-size=l]{--t-diameter: 5em}:host[data-size=xl]{--t-diameter: 6em}:host[data-size=xxl]{--t-diameter: 8em}.t-track{fill:transparent;stroke:var(--tui-background-neutral-1);stroke-width:var(--t-track-stroke);r:calc((var(--t-diameter) - var(--t-track-stroke)) / 2)}.t-progress{fill:transparent;stroke:var(--tui-progress-color, currentColor);stroke-linecap:round;stroke-width:var(--t-progress-stroke);stroke-dasharray:calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-progress-stroke)) / 2));stroke-dashoffset:calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-progress-stroke)) / 2));r:calc((var(--t-diameter) - var(--t-progress-stroke)) / 2)}.t-progress_filled{transition:stroke-dashoffset var(--tui-duration) linear;stroke-dashoffset:calc(calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-progress-stroke)) / 2)) - var(--t-progress-ratio) * calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-progress-stroke)) / 2)))}.t-hidden-progress{position:absolute;clip:rect(1px,1px,1px,1px);clip-path:inset(50%);block-size:1px;inline-size:1px;margin:-1px;overflow:hidden;padding:0}.t-svg{overflow:unset}\n"]
    }]
  }], null, {
    value: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    color: [{
      type: Input
    }],
    size: [{
      type: Input
    }]
  });
})();
var TuiProgressLabel = class _TuiProgressLabel {
  static {
    this.ɵfac = function TuiProgressLabel_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiProgressLabel)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiProgressLabel,
      selectors: [["label", "tuiProgressLabel", ""]],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      attrs: _c12,
      ngContentSelectors: _c3,
      decls: 4,
      vars: 0,
      consts: [[1, "t-label"]],
      template: function TuiProgressLabel_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef(_c2);
          ɵɵprojection(0);
          ɵɵprojection(1, 1);
          ɵɵelementStart(2, "span", 0);
          ɵɵprojection(3, 2);
          ɵɵelementEnd();
        }
      },
      styles: ["[_nghost-%COMP%]{position:relative;display:inline-block;color:var(--tui-text-primary)}.t-label[_ngcontent-%COMP%]{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;display:flex;font:var(--tui-font-text-s);flex-direction:column;justify-content:center;align-items:center}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiProgressLabel, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "label[tuiProgressLabel]",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<ng-content select="progress" />\n<ng-content select="tui-progress-circle" />\n<span class="t-label">\n    <ng-content />\n</span>\n',
      styles: [":host{position:relative;display:inline-block;color:var(--tui-text-primary)}.t-label{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;display:flex;font:var(--tui-font-text-s);flex-direction:column;justify-content:center;align-items:center}\n"]
    }]
  }], null, null);
})();
var TuiProgressSegmentedStyles = class _TuiProgressSegmentedStyles {
  static {
    this.ɵfac = function TuiProgressSegmentedStyles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiProgressSegmentedStyles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiProgressSegmentedStyles,
      selectors: [["ng-component"]],
      hostAttrs: [1, "tui-progress-segmented"],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 0,
      vars: 0,
      template: function TuiProgressSegmentedStyles_Template(rf, ctx) {
      },
      styles: ["[tuiProgressBar]._segmented{--tui-segment-gap: .5rem;-webkit-mask-image:radial-gradient(circle closest-side at calc(var(--t-height) / 2) center,#999 0 99%,transparent calc(99% + .6px) 100%),radial-gradient(circle closest-side at calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)) center,#999 0 99%,transparent calc(99% + .6px) 100%),linear-gradient(to right,transparent 0 calc(var(--t-height) / 2),#999 calc(var(--t-height) / 2) calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)),transparent calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)));mask-image:radial-gradient(circle closest-side at calc(var(--t-height) / 2) center,#999 0 99%,transparent calc(99% + .6px) 100%),radial-gradient(circle closest-side at calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)) center,#999 0 99%,transparent calc(99% + .6px) 100%),linear-gradient(to right,transparent 0 calc(var(--t-height) / 2),#999 calc(var(--t-height) / 2) calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)),transparent calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)));-webkit-mask-size:calc(100% * var(--t-segment-width) + var(--tui-segment-gap) * var(--t-segment-width));mask-size:calc(100% * var(--t-segment-width) + var(--tui-segment-gap) * var(--t-segment-width))}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiProgressSegmentedStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-progress-segmented"
      },
      styles: ["[tuiProgressBar]._segmented{--tui-segment-gap: .5rem;-webkit-mask-image:radial-gradient(circle closest-side at calc(var(--t-height) / 2) center,#999 0 99%,transparent calc(99% + .6px) 100%),radial-gradient(circle closest-side at calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)) center,#999 0 99%,transparent calc(99% + .6px) 100%),linear-gradient(to right,transparent 0 calc(var(--t-height) / 2),#999 calc(var(--t-height) / 2) calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)),transparent calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)));mask-image:radial-gradient(circle closest-side at calc(var(--t-height) / 2) center,#999 0 99%,transparent calc(99% + .6px) 100%),radial-gradient(circle closest-side at calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)) center,#999 0 99%,transparent calc(99% + .6px) 100%),linear-gradient(to right,transparent 0 calc(var(--t-height) / 2),#999 calc(var(--t-height) / 2) calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)),transparent calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)));-webkit-mask-size:calc(100% * var(--t-segment-width) + var(--tui-segment-gap) * var(--t-segment-width));mask-size:calc(100% * var(--t-segment-width) + var(--tui-segment-gap) * var(--t-segment-width))}\n"]
    }]
  }], null, null);
})();
var TuiProgressSegmented = class _TuiProgressSegmented {
  constructor() {
    this.nothing = tuiWithStyles(TuiProgressSegmentedStyles);
    this.segments = 1;
  }
  static {
    this.ɵfac = function TuiProgressSegmented_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiProgressSegmented)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiProgressSegmented,
      selectors: [["", "tuiProgressBar", "", "segments", ""]],
      hostAttrs: [1, "_segmented"],
      hostVars: 2,
      hostBindings: function TuiProgressSegmented_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵstyleProp("--t-segment-width", 1 / ctx.segments);
        }
      },
      inputs: {
        segments: "segments"
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiProgressSegmented, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiProgressBar][segments]",
      host: {
        class: "_segmented",
        "[style.--t-segment-width]": "1 / segments"
      }
    }]
  }], null, {
    segments: [{
      type: Input
    }]
  });
})();
var TuiProgress = [TuiProgressBar, TuiProgressCircle, TuiProgressColorSegments, TuiProgressLabel, TuiProgressSegmented];

export {
  TuiTilesComponent,
  TuiTileService,
  TuiTile,
  TuiTileHandle,
  TuiTiles,
  TUI_CHIP_DEFAULT_OPTIONS,
  TUI_CHIP_OPTIONS,
  tuiChipOptionsProvider,
  TuiChip,
  TUI_PROGRESS_DEFAULT_OPTIONS,
  TUI_PROGRESS_OPTIONS,
  tuiProgressOptionsProvider,
  TuiProgressBar,
  TuiProgressColorSegments,
  TuiProgressCircle,
  TuiProgressLabel,
  TuiProgressSegmented,
  TuiProgress
};
//# sourceMappingURL=chunk-OPKUPS3B.js.map
