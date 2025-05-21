import {
  TUI_ACTIVE_ELEMENT,
  TUI_FALLBACK_VALUE
} from "./chunk-ZRKXNDNW.js";
import {
  tuiGetElementObscures,
  tuiInjectElement
} from "./chunk-TBFJZ2MD.js";
import {
  EMPTY_FUNCTION,
  tuiIfMap,
  tuiZoneOptimized,
  tuiZonefreeScheduler
} from "./chunk-EEGF43CM.js";
import {
  takeUntilDestroyed,
  tuiArrayRemove,
  tuiProvide,
  tuiPure
} from "./chunk-UQBCXIOX.js";
import {
  NgControl,
  NgModel
} from "./chunk-5GCG6HC6.js";
import {
  WA_ANIMATION_FRAME
} from "./chunk-4P53LWHM.js";
import {
  ChangeDetectorRef,
  Directive,
  INJECTOR$1,
  Injectable,
  Input,
  NgZone,
  Output,
  ViewChild,
  ViewContainerRef,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵɵProvidersFeature,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵqueryRefresh,
  ɵɵresolveDocument,
  ɵɵviewQuery
} from "./chunk-DGEURTJ6.js";
import {
  EMPTY,
  Observable,
  Subject,
  __decorate,
  delay,
  distinctUntilChanged,
  filter,
  map,
  merge,
  skip,
  startWith,
  switchMap,
  tap,
  throttleTime
} from "./chunk-IJGLK444.js";

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-active-zone.mjs
var TuiActiveZone = class _TuiActiveZone {
  constructor() {
    this.control = inject(NgControl, {
      self: true,
      optional: true
    });
    this.active$ = inject(TUI_ACTIVE_ELEMENT);
    this.zone = inject(NgZone);
    this.el = tuiInjectElement();
    this.tuiActiveZoneParent = null;
    this.subActiveZones = [];
    this.directParentActiveZone = inject(_TuiActiveZone, {
      skipSelf: true,
      optional: true
    });
    this.tuiActiveZoneChange = this.active$.pipe(map((element) => !!element && this.contains(element)), startWith(false), distinctUntilChanged(), skip(1), tap((active) => {
      if (!active && typeof this.control?.valueAccessor.onTouched === "function") {
        this.control.valueAccessor.onTouched();
      }
    }), tuiZoneOptimized(this.zone));
    this.directParentActiveZone?.addSubActiveZone(this);
  }
  set tuiActiveZoneParentSetter(zone) {
    this.setZone(zone);
  }
  ngOnDestroy() {
    this.directParentActiveZone?.removeSubActiveZone(this);
    this.tuiActiveZoneParent?.removeSubActiveZone(this);
  }
  contains(node) {
    return this.el.contains(node) || this.subActiveZones.some((item, index, array) => array.indexOf(item) === index && item.contains(node));
  }
  setZone(zone) {
    this.tuiActiveZoneParent?.removeSubActiveZone(this);
    zone?.addSubActiveZone(this);
    this.tuiActiveZoneParent = zone;
  }
  addSubActiveZone(activeZone) {
    this.subActiveZones = [...this.subActiveZones, activeZone];
  }
  removeSubActiveZone(activeZone) {
    this.subActiveZones = tuiArrayRemove(this.subActiveZones, this.subActiveZones.indexOf(activeZone));
  }
  static {
    this.ɵfac = function TuiActiveZone_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiActiveZone)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiActiveZone,
      selectors: [["", "tuiActiveZone", "", 5, "ng-container"], ["", "tuiActiveZoneChange", "", 5, "ng-container"], ["", "tuiActiveZoneParent", "", 5, "ng-container"]],
      hostBindings: function TuiActiveZone_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("mousedown.silent", function TuiActiveZone_mousedown_silent_HostBindingHandler() {
            return 0;
          }, false, ɵɵresolveDocument);
        }
      },
      inputs: {
        tuiActiveZoneParentSetter: [0, "tuiActiveZoneParent", "tuiActiveZoneParentSetter"]
      },
      outputs: {
        tuiActiveZoneChange: "tuiActiveZoneChange"
      },
      exportAs: ["tuiActiveZone"],
      standalone: true
    });
  }
};
__decorate([tuiPure], TuiActiveZone.prototype, "setZone", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiActiveZone, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiActiveZone]:not(ng-container), [tuiActiveZoneChange]:not(ng-container), [tuiActiveZoneParent]:not(ng-container)",
      exportAs: "tuiActiveZone",
      host: {
        "(document:mousedown.silent)": "(0)"
      }
    }]
  }], function() {
    return [];
  }, {
    tuiActiveZoneChange: [{
      type: Output
    }],
    tuiActiveZoneParentSetter: [{
      type: Input,
      args: ["tuiActiveZoneParent"]
    }],
    setZone: []
  });
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-classes.mjs
var _c0 = ["viewContainer"];
var TuiValueTransformer = class {
};
var FLAGS = {
  self: true,
  optional: true
};
var TuiControl = class _TuiControl {
  constructor() {
    this.fallback = inject(TUI_FALLBACK_VALUE, FLAGS);
    this.refresh$ = new Subject();
    this.pseudoInvalid = signal(null);
    this.internal = signal(this.fallback);
    this.control = inject(NgControl, {
      self: true
    });
    this.cdr = inject(ChangeDetectorRef);
    this.transformer = inject(TuiValueTransformer, FLAGS);
    this.value = computed(() => this.internal() ?? this.fallback);
    this.readOnly = signal(false);
    this.touched = signal(false);
    this.status = signal(void 0);
    this.disabled = computed(() => this.status() === "DISABLED");
    this.interactive = computed(() => !this.disabled() && !this.readOnly());
    this.invalid = computed(() => this.pseudoInvalid() !== null ? !!this.pseudoInvalid() && this.interactive() : this.interactive() && this.touched() && this.status() === "INVALID");
    this.mode = computed(() => (
      // eslint-disable-next-line no-nested-ternary
      this.readOnly() ? "readonly" : this.invalid() ? "invalid" : "valid"
    ));
    this.onTouched = EMPTY_FUNCTION;
    this.onChange = EMPTY_FUNCTION;
    this.control.valueAccessor = this;
    this.refresh$.pipe(delay(0), startWith(null), map(() => this.control.control), filter(Boolean), distinctUntilChanged(), switchMap((c) => merge(c.valueChanges, c.statusChanges, c.events || EMPTY).pipe(startWith(null))), takeUntilDestroyed()).subscribe(() => this.update());
  }
  set readOnlySetter(readOnly) {
    this.readOnly.set(readOnly);
  }
  set invalidSetter(invalid) {
    this.pseudoInvalid.set(invalid);
  }
  registerOnChange(onChange) {
    this.refresh$.next();
    this.onChange = (value) => {
      if (value === this.internal()) {
        return;
      }
      onChange(this.toControlValue(value));
      this.internal.set(value);
      this.update();
    };
  }
  registerOnTouched(onTouched) {
    this.onTouched = () => {
      onTouched();
      this.update();
    };
  }
  setDisabledState() {
    this.update();
  }
  writeValue(value) {
    const safe = this.control instanceof NgModel ? this.control.model : value;
    this.internal.set(this.fromControlValue(safe));
    this.update();
  }
  fromControlValue(value) {
    return this.transformer ? this.transformer.fromControlValue(value) : value;
  }
  toControlValue(value) {
    return this.transformer ? this.transformer.toControlValue(value) : value;
  }
  update() {
    this.status.set(this.control.control?.status);
    this.touched.set(!!this.control.control?.touched);
    this.cdr.markForCheck();
  }
  static {
    this.ɵfac = function TuiControl_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiControl)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiControl,
      inputs: {
        readOnlySetter: [0, "readOnly", "readOnlySetter"],
        invalidSetter: [0, "invalid", "invalidSetter"]
      }
    });
  }
};
__decorate([tuiPure], TuiControl.prototype, "fromControlValue", null);
__decorate([tuiPure], TuiControl.prototype, "toControlValue", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiControl, [{
    type: Directive
  }], function() {
    return [];
  }, {
    readOnlySetter: [{
      type: Input,
      args: ["readOnly"]
    }],
    invalidSetter: [{
      type: Input,
      args: ["invalid"]
    }],
    fromControlValue: [],
    toControlValue: []
  });
})();
function tuiAsControl(control) {
  return tuiProvide(TuiControl, control);
}
var TuiPortals = class _TuiPortals {
  constructor() {
    this.injector = inject(INJECTOR$1);
    this.nothing = inject(TuiPortalService).attach(this);
  }
  addComponentChild(component) {
    const injector = component.createInjector(this.injector);
    const ref = this.vcr.createComponent(component.component, {
      injector
    });
    ref.changeDetectorRef.detectChanges();
    return ref;
  }
  addTemplateChild(templateRef, context) {
    return this.vcr.createEmbeddedView(templateRef, context);
  }
  static {
    this.ɵfac = function TuiPortals_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiPortals)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiPortals,
      viewQuery: function TuiPortals_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c0, 5, ViewContainerRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.vcr = _t.first);
        }
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPortals, [{
    type: Directive
  }], null, {
    vcr: [{
      type: ViewChild,
      args: ["viewContainer", {
        read: ViewContainerRef
      }]
    }]
  });
})();
var TuiPortalService = class _TuiPortalService {
  attach(host) {
    this.host = host;
  }
  add(component) {
    return this.safeHost.addComponentChild(component);
  }
  remove({
    hostView
  }) {
    if (!hostView.destroyed) {
      hostView.destroy();
    }
  }
  addTemplate(templateRef, context) {
    return this.safeHost.addTemplateChild(templateRef, context);
  }
  removeTemplate(viewRef) {
    if (!viewRef.destroyed) {
      viewRef.destroy();
    }
  }
  get safeHost() {
    if (!this.host) {
      throw new TuiNoHostException();
    }
    return this.host;
  }
  static {
    this.ɵfac = function TuiPortalService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiPortalService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiPortalService,
      factory: _TuiPortalService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPortalService, [{
    type: Injectable
  }], null, null);
})();
function tuiAsPortal(portal) {
  return tuiProvide(TuiPortalService, portal);
}
var TuiNoHostException = class extends Error {
  constructor() {
    super(ngDevMode ? "Portals cannot be used without TuiPortalHostComponent" : "");
  }
};
var TuiValidationError = class {
  constructor(message, context = {}) {
    this.message = message;
    this.context = context;
  }
};

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-obscured.mjs
var TuiObscuredService = class _TuiObscuredService extends Observable {
  constructor() {
    super((subscriber) => this.obscured$.subscribe(subscriber));
    this.el = tuiInjectElement();
    this.obscured$ = inject(WA_ANIMATION_FRAME).pipe(throttleTime(100, tuiZonefreeScheduler()), map(() => tuiGetElementObscures(this.el)), startWith(null), distinctUntilChanged(), tuiZoneOptimized());
  }
  static {
    this.ɵfac = function TuiObscuredService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiObscuredService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiObscuredService,
      factory: _TuiObscuredService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiObscuredService, [{
    type: Injectable
  }], function() {
    return [];
  }, null);
})();
var TuiObscured = class _TuiObscured {
  constructor() {
    this.activeZone = inject(TuiActiveZone, {
      optional: true
    });
    this.enabled$ = new Subject();
    this.obscured$ = inject(TuiObscuredService, {
      self: true
    }).pipe(map((by) => !!by?.every((el) => !this.activeZone?.contains(el))));
    this.tuiObscured = this.enabled$.pipe(tuiIfMap(() => this.obscured$));
  }
  set tuiObscuredEnabled(enabled) {
    this.enabled$.next(enabled);
  }
  static {
    this.ɵfac = function TuiObscured_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiObscured)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiObscured,
      selectors: [["", "tuiObscured", ""]],
      inputs: {
        tuiObscuredEnabled: "tuiObscuredEnabled"
      },
      outputs: {
        tuiObscured: "tuiObscured"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([TuiObscuredService])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiObscured, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiObscured]",
      providers: [TuiObscuredService]
    }]
  }], null, {
    tuiObscured: [{
      type: Output
    }],
    tuiObscuredEnabled: [{
      type: Input
    }]
  });
})();

export {
  TuiActiveZone,
  TuiValueTransformer,
  TuiControl,
  tuiAsControl,
  TuiPortals,
  TuiPortalService,
  tuiAsPortal,
  TuiNoHostException,
  TuiValidationError,
  TuiObscuredService,
  TuiObscured
};
//# sourceMappingURL=chunk-LAEKWENP.js.map
