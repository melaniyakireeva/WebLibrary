import {
  TuiIcon
} from "./chunk-7UM6EQEU.js";
import {
  ResizeObserverService
} from "./chunk-O5NPM64D.js";
import {
  TuiNativeValidator
} from "./chunk-CV2RTVPT.js";
import {
  TuiAppearance,
  TuiWithAppearance,
  tuiAppearanceOptionsProvider
} from "./chunk-Y7YOVM7H.js";
import {
  tuiInjectElement
} from "./chunk-TBFJZ2MD.js";
import {
  tuiInjectIconResolver
} from "./chunk-SYK4K5AT.js";
import {
  tuiZonefree
} from "./chunk-EEGF43CM.js";
import {
  takeUntilDestroyed,
  tuiCreateToken,
  tuiIsString,
  tuiProvideOptions,
  tuiPure,
  tuiWithStyles
} from "./chunk-UQBCXIOX.js";
import {
  NgControl
} from "./chunk-5GCG6HC6.js";
import {
  NgForOf,
  NgIf,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault
} from "./chunk-6S6PAGJZ.js";
import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  ElementRef,
  EventEmitter,
  Injectable,
  InjectionToken,
  Input,
  Output,
  ViewEncapsulation$1,
  inject,
  setClassMetadata,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵhostProperty,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-DGEURTJ6.js";
import {
  Observable,
  __decorate,
  fromEvent,
  merge
} from "./chunk-IJGLK444.js";

// node_modules/@ng-web-apis/mutation-observer/fesm2022/ng-web-apis-mutation-observer.mjs
var SafeObserver = typeof MutationObserver !== "undefined" ? MutationObserver : class {
  observe() {
  }
  disconnect() {
  }
  takeRecords() {
    return [];
  }
};
var WA_MUTATION_OBSERVER_INIT = new InjectionToken("[WA_MUTATION_OBSERVER_INIT]");
var MUTATION_OBSERVER_INIT = WA_MUTATION_OBSERVER_INIT;
function booleanAttribute(element, attribute) {
  return element.getAttribute(attribute) !== null || void 0;
}
function mutationObserverInitFactory() {
  const {
    nativeElement
  } = inject(ElementRef);
  const attributeFilter = nativeElement.getAttribute("attributeFilter");
  return {
    attributeFilter: attributeFilter?.split(",").map((attr) => attr.trim()),
    attributeOldValue: booleanAttribute(nativeElement, "attributeOldValue"),
    attributes: booleanAttribute(nativeElement, "attributes"),
    characterData: booleanAttribute(nativeElement, "characterData"),
    characterDataOldValue: booleanAttribute(nativeElement, "characterDataOldValue"),
    childList: booleanAttribute(nativeElement, "childList"),
    subtree: booleanAttribute(nativeElement, "subtree")
  };
}
var WaMutationObserver = class _WaMutationObserver extends SafeObserver {
  nativeElement = inject(ElementRef).nativeElement;
  config = inject(MUTATION_OBSERVER_INIT);
  attributeFilter = "";
  attributeOldValue = "";
  attributes = "";
  characterData = "";
  characterDataOldValue = "";
  childList = "";
  subtree = "";
  waMutationObserver = new EventEmitter();
  constructor() {
    super((records) => {
      this.waMutationObserver.emit(records);
    });
    this.observe(this.nativeElement, this.config);
  }
  ngOnDestroy() {
    this.disconnect();
  }
  static ɵfac = function WaMutationObserver_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WaMutationObserver)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _WaMutationObserver,
    selectors: [["", "waMutationObserver", ""]],
    inputs: {
      attributeFilter: "attributeFilter",
      attributeOldValue: "attributeOldValue",
      attributes: "attributes",
      characterData: "characterData",
      characterDataOldValue: "characterDataOldValue",
      childList: "childList",
      subtree: "subtree"
    },
    outputs: {
      waMutationObserver: "waMutationObserver"
    },
    exportAs: ["MutationObserver"],
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: MUTATION_OBSERVER_INIT,
      useFactory: mutationObserverInitFactory
    }]), ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WaMutationObserver, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[waMutationObserver]",
      providers: [{
        provide: MUTATION_OBSERVER_INIT,
        useFactory: mutationObserverInitFactory
      }],
      exportAs: "MutationObserver"
    }]
  }], function() {
    return [];
  }, {
    attributeFilter: [{
      type: Input
    }],
    attributeOldValue: [{
      type: Input
    }],
    attributes: [{
      type: Input
    }],
    characterData: [{
      type: Input
    }],
    characterDataOldValue: [{
      type: Input
    }],
    childList: [{
      type: Input
    }],
    subtree: [{
      type: Input
    }],
    waMutationObserver: [{
      type: Output
    }]
  });
})();
var MutationObserverService = class _MutationObserverService extends Observable {
  constructor() {
    const nativeElement = inject(ElementRef).nativeElement;
    const config = inject(MUTATION_OBSERVER_INIT);
    super((subscriber) => {
      const observer = new SafeObserver((records) => {
        subscriber.next(records);
      });
      observer.observe(nativeElement, config);
      return () => {
        observer.disconnect();
      };
    });
  }
  static ɵfac = function MutationObserverService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MutationObserverService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _MutationObserverService,
    factory: _MutationObserverService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MutationObserverService, [{
    type: Injectable
  }], function() {
    return [];
  }, null);
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-directives-fade.mjs
var BUFFER = 1;
var TuiFadeStyles = class _TuiFadeStyles {
  static {
    this.ɵfac = function TuiFadeStyles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiFadeStyles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiFadeStyles,
      selectors: [["ng-component"]],
      hostAttrs: [1, "tui-fade-styles"],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 0,
      vars: 0,
      template: function TuiFadeStyles_Template(rf, ctx) {
      },
      styles: ["[tuiFade]{scrollbar-width:none;-ms-overflow-style:none;transition-property:-webkit-mask-position;transition-property:mask-position;transition-property:mask-position,-webkit-mask-position;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;overflow:auto;text-overflow:unset!important;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}[tuiFade]::-webkit-scrollbar,[tuiFade]::-webkit-scrollbar-thumb{display:none}[tuiFade]:not([data-orientation=vertical]){overflow-y:hidden;-webkit-mask-image:linear-gradient(to right,transparent var(--fade-offset),#000 calc(var(--fade-size) + var(--fade-offset))),linear-gradient(to left,transparent var(--fade-offset),#000 calc(var(--fade-size) + var(--fade-offset))),linear-gradient(#000,#000);mask-image:linear-gradient(to right,transparent var(--fade-offset),#000 calc(var(--fade-size) + var(--fade-offset))),linear-gradient(to left,transparent var(--fade-offset),#000 calc(var(--fade-size) + var(--fade-offset))),linear-gradient(#000,#000);-webkit-mask-position:calc(-1 * var(--fade-size) - var(--fade-offset)) bottom,calc(100% + var(--fade-size) + var(--fade-offset)) bottom,top;mask-position:calc(-1 * var(--fade-size) - var(--fade-offset)) bottom,calc(100% + var(--fade-size) + var(--fade-offset)) bottom,top;-webkit-mask-size:calc(51% + var(--fade-size) + var(--fade-offset)) var(--line-height, 100%),calc(50% + var(--fade-size) + var(--fade-offset)) var(--line-height, 100%),100% calc(100% - var(--line-height, 100%));mask-size:calc(51% + var(--fade-size) + var(--fade-offset)) var(--line-height, 100%),calc(50% + var(--fade-size) + var(--fade-offset)) var(--line-height, 100%),100% calc(100% - var(--line-height, 100%))}[tuiFade]:not([data-orientation=vertical])._start{-webkit-mask-position:left bottom,calc(100% + var(--fade-size) + var(--fade-offset)) bottom,top;mask-position:left bottom,calc(100% + var(--fade-size) + var(--fade-offset)) bottom,top}[tuiFade]:not([data-orientation=vertical])._end{-webkit-mask-position:calc(-1 * var(--fade-size) - var(--fade-offset)) bottom,right bottom,top;mask-position:calc(-1 * var(--fade-size) - var(--fade-offset)) bottom,right bottom,top}[tuiFade]:not([data-orientation=vertical])._start._end{-webkit-mask-position:left bottom,right bottom,top;mask-position:left bottom,right bottom,top}[tuiFade][data-orientation=vertical]{overflow-x:hidden;-webkit-mask-image:linear-gradient(to bottom,transparent var(--fade-offset),#000 calc(var(--fade-size) + var(--fade-offset))),linear-gradient(to top,transparent var(--fade-offset),#000 calc(var(--fade-size) + var(--fade-offset)));mask-image:linear-gradient(to bottom,transparent var(--fade-offset),#000 calc(var(--fade-size) + var(--fade-offset))),linear-gradient(to top,transparent var(--fade-offset),#000 calc(var(--fade-size) + var(--fade-offset)));-webkit-mask-position:left calc(-1 * var(--fade-size) - var(--fade-offset)),left calc(100% + var(--fade-size) + var(--fade-offset));mask-position:left calc(-1 * var(--fade-size) - var(--fade-offset)),left calc(100% + var(--fade-size) + var(--fade-offset));-webkit-mask-size:100% calc(51% + var(--fade-size) + var(--fade-offset));mask-size:100% calc(51% + var(--fade-size) + var(--fade-offset))}[tuiFade][data-orientation=vertical]._start{-webkit-mask-position:left top,left calc(100% + var(--fade-size) + var(--fade-offset));mask-position:left top,left calc(100% + var(--fade-size) + var(--fade-offset))}[tuiFade][data-orientation=vertical]._end{-webkit-mask-position:left calc(-1 * var(--fade-size) - var(--fade-offset)),left bottom;mask-position:left calc(-1 * var(--fade-size) - var(--fade-offset)),left bottom}[tuiFade][data-orientation=vertical]._start._end{-webkit-mask-position:left top,left bottom;mask-position:left top,left bottom}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFadeStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-fade-styles"
      },
      styles: ["[tuiFade]{scrollbar-width:none;-ms-overflow-style:none;transition-property:-webkit-mask-position;transition-property:mask-position;transition-property:mask-position,-webkit-mask-position;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;overflow:auto;text-overflow:unset!important;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}[tuiFade]::-webkit-scrollbar,[tuiFade]::-webkit-scrollbar-thumb{display:none}[tuiFade]:not([data-orientation=vertical]){overflow-y:hidden;-webkit-mask-image:linear-gradient(to right,transparent var(--fade-offset),#000 calc(var(--fade-size) + var(--fade-offset))),linear-gradient(to left,transparent var(--fade-offset),#000 calc(var(--fade-size) + var(--fade-offset))),linear-gradient(#000,#000);mask-image:linear-gradient(to right,transparent var(--fade-offset),#000 calc(var(--fade-size) + var(--fade-offset))),linear-gradient(to left,transparent var(--fade-offset),#000 calc(var(--fade-size) + var(--fade-offset))),linear-gradient(#000,#000);-webkit-mask-position:calc(-1 * var(--fade-size) - var(--fade-offset)) bottom,calc(100% + var(--fade-size) + var(--fade-offset)) bottom,top;mask-position:calc(-1 * var(--fade-size) - var(--fade-offset)) bottom,calc(100% + var(--fade-size) + var(--fade-offset)) bottom,top;-webkit-mask-size:calc(51% + var(--fade-size) + var(--fade-offset)) var(--line-height, 100%),calc(50% + var(--fade-size) + var(--fade-offset)) var(--line-height, 100%),100% calc(100% - var(--line-height, 100%));mask-size:calc(51% + var(--fade-size) + var(--fade-offset)) var(--line-height, 100%),calc(50% + var(--fade-size) + var(--fade-offset)) var(--line-height, 100%),100% calc(100% - var(--line-height, 100%))}[tuiFade]:not([data-orientation=vertical])._start{-webkit-mask-position:left bottom,calc(100% + var(--fade-size) + var(--fade-offset)) bottom,top;mask-position:left bottom,calc(100% + var(--fade-size) + var(--fade-offset)) bottom,top}[tuiFade]:not([data-orientation=vertical])._end{-webkit-mask-position:calc(-1 * var(--fade-size) - var(--fade-offset)) bottom,right bottom,top;mask-position:calc(-1 * var(--fade-size) - var(--fade-offset)) bottom,right bottom,top}[tuiFade]:not([data-orientation=vertical])._start._end{-webkit-mask-position:left bottom,right bottom,top;mask-position:left bottom,right bottom,top}[tuiFade][data-orientation=vertical]{overflow-x:hidden;-webkit-mask-image:linear-gradient(to bottom,transparent var(--fade-offset),#000 calc(var(--fade-size) + var(--fade-offset))),linear-gradient(to top,transparent var(--fade-offset),#000 calc(var(--fade-size) + var(--fade-offset)));mask-image:linear-gradient(to bottom,transparent var(--fade-offset),#000 calc(var(--fade-size) + var(--fade-offset))),linear-gradient(to top,transparent var(--fade-offset),#000 calc(var(--fade-size) + var(--fade-offset)));-webkit-mask-position:left calc(-1 * var(--fade-size) - var(--fade-offset)),left calc(100% + var(--fade-size) + var(--fade-offset));mask-position:left calc(-1 * var(--fade-size) - var(--fade-offset)),left calc(100% + var(--fade-size) + var(--fade-offset));-webkit-mask-size:100% calc(51% + var(--fade-size) + var(--fade-offset));mask-size:100% calc(51% + var(--fade-size) + var(--fade-offset))}[tuiFade][data-orientation=vertical]._start{-webkit-mask-position:left top,left calc(100% + var(--fade-size) + var(--fade-offset));mask-position:left top,left calc(100% + var(--fade-size) + var(--fade-offset))}[tuiFade][data-orientation=vertical]._end{-webkit-mask-position:left calc(-1 * var(--fade-size) - var(--fade-offset)),left bottom;mask-position:left calc(-1 * var(--fade-size) - var(--fade-offset)),left bottom}[tuiFade][data-orientation=vertical]._start._end{-webkit-mask-position:left top,left bottom;mask-position:left top,left bottom}\n"]
    }]
  }], null, null);
})();
var TuiFade = class _TuiFade {
  constructor() {
    this.lineHeight = null;
    this.size = "1.5em";
    this.offset = "0em";
    this.orientation = "horizontal";
    const el = tuiInjectElement();
    tuiWithStyles(TuiFadeStyles);
    merge(inject(ResizeObserverService, {
      self: true
    }), inject(MutationObserverService, {
      self: true
    }), fromEvent(el, "scroll")).pipe(tuiZonefree(), takeUntilDestroyed()).subscribe(() => {
      el.classList.toggle("_start", !!el.scrollLeft || !!el.scrollTop);
      el.classList.toggle("_end", this.isEnd(el));
    });
  }
  isEnd(el) {
    if (this.orientation === "vertical") {
      return Math.round(el.scrollTop) < el.scrollHeight - el.clientHeight - BUFFER;
    }
    return Math.round(el.scrollLeft) < el.scrollWidth - el.clientWidth - BUFFER || // horizontal multiline fade can kick in early due to hanging elements of fonts so using bigger buffer
    el.scrollHeight > el.clientHeight + 4 * BUFFER;
  }
  static {
    this.ɵfac = function TuiFade_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiFade)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiFade,
      selectors: [["", "tuiFade", ""]],
      hostVars: 9,
      hostBindings: function TuiFade_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-orientation", ctx.orientation);
          ɵɵstyleProp("line-height", ctx.lineHeight)("--line-height", ctx.lineHeight)("--fade-size", ctx.size)("--fade-offset", ctx.offset);
        }
      },
      inputs: {
        lineHeight: [0, "tuiFadeHeight", "lineHeight"],
        size: [0, "tuiFadeSize", "size"],
        offset: [0, "tuiFadeOffset", "offset"],
        orientation: [0, "tuiFade", "orientation"]
      },
      standalone: true,
      features: [ɵɵProvidersFeature([ResizeObserverService, MutationObserverService, {
        provide: WA_MUTATION_OBSERVER_INIT,
        useValue: {
          characterData: true,
          subtree: true
        }
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFade, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiFade]",
      providers: [ResizeObserverService, MutationObserverService, {
        provide: WA_MUTATION_OBSERVER_INIT,
        useValue: {
          characterData: true,
          subtree: true
        }
      }],
      host: {
        "[style.line-height]": "lineHeight",
        "[style.--line-height]": "lineHeight",
        "[style.--fade-size]": "size",
        "[style.--fade-offset]": "offset",
        "[attr.data-orientation]": "orientation"
      }
    }]
  }], function() {
    return [];
  }, {
    lineHeight: [{
      type: Input,
      args: ["tuiFadeHeight"]
    }],
    size: [{
      type: Input,
      args: ["tuiFadeSize"]
    }],
    offset: [{
      type: Input,
      args: ["tuiFadeOffset"]
    }],
    orientation: [{
      type: Input,
      args: ["tuiFade"]
    }]
  });
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-avatar.mjs
var _c0 = ["*"];
function TuiAvatar_img_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "img", 5);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("src", ctx_r0.value, ɵɵsanitizeUrl);
  }
}
function TuiAvatar_tui_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-icon", 6);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("icon", ctx_r0.value.toString());
  }
}
function TuiAvatar_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.value);
  }
}
function TuiAvatar_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵprojection(1);
    ɵɵelementContainerEnd();
  }
}
function TuiAvatarLabeled_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 2);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", item_r1, " ");
  }
}
function TuiAvatarLabeled_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TuiAvatarLabeled_ng_container_1_span_1_Template, 2, 1, "span", 1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.split(ctx_r1.label));
  }
}
var TUI_AVATAR_DEFAULT_OPTIONS = {
  appearance: "",
  round: true,
  size: "l"
};
var TUI_AVATAR_OPTIONS = tuiCreateToken(TUI_AVATAR_DEFAULT_OPTIONS);
function tuiAvatarOptionsProvider(options) {
  return tuiProvideOptions(TUI_AVATAR_OPTIONS, options, TUI_AVATAR_DEFAULT_OPTIONS);
}
var TuiAvatar = class _TuiAvatar {
  constructor() {
    this.options = inject(TUI_AVATAR_OPTIONS);
    this.size = this.options.size;
    this.round = this.options.round;
  }
  get value() {
    return this.src || "";
  }
  get svg() {
    return tuiIsString(this.value) && this.value.endsWith(".svg");
  }
  get type() {
    if (this.value && !tuiIsString(this.value)) {
      return "img";
    }
    if (this.value.startsWith("@tui.")) {
      return "icon";
    }
    if (this.value.length > 0 && this.value.length < 3) {
      return "text";
    }
    return this.value.length ? "img" : "content";
  }
  static {
    this.ɵfac = function TuiAvatar_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiAvatar)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiAvatar,
      selectors: [["tui-avatar"], ["button", "tuiAvatar", ""], ["a", "tuiAvatar", ""]],
      hostVars: 6,
      hostBindings: function TuiAvatar_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size)("data-type", ctx.type);
          ɵɵclassProp("_round", ctx.round)("_svg", ctx.svg);
        }
      },
      inputs: {
        size: "size",
        round: "round",
        src: "src"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiAppearanceOptionsProvider(TUI_AVATAR_OPTIONS)]), ɵɵHostDirectivesFeature([TuiWithAppearance]), ɵɵStandaloneFeature],
      ngContentSelectors: _c0,
      decls: 5,
      vars: 4,
      consts: [[3, "ngSwitch"], ["alt", "", "loading", "lazy", 3, "src", 4, "ngSwitchCase"], [3, "icon", 4, "ngSwitchCase"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["alt", "", "loading", "lazy", 3, "src"], [3, "icon"]],
      template: function TuiAvatar_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementContainerStart(0, 0);
          ɵɵtemplate(1, TuiAvatar_img_1_Template, 1, 1, "img", 1)(2, TuiAvatar_tui_icon_2_Template, 1, 1, "tui-icon", 2)(3, TuiAvatar_ng_container_3_Template, 2, 1, "ng-container", 3)(4, TuiAvatar_ng_container_4_Template, 2, 0, "ng-container", 4);
          ɵɵelementContainerEnd();
        }
        if (rf & 2) {
          ɵɵproperty("ngSwitch", ctx.type);
          ɵɵadvance();
          ɵɵproperty("ngSwitchCase", "img");
          ɵɵadvance();
          ɵɵproperty("ngSwitchCase", "icon");
          ɵɵadvance();
          ɵɵproperty("ngSwitchCase", "text");
        }
      },
      dependencies: [NgSwitch, NgSwitchCase, NgSwitchDefault, TuiIcon],
      styles: ['[_nghost-%COMP%]{--t-size: 3.5rem;--t-radius: .75rem;position:relative;display:inline-flex;flex-shrink:0;inline-size:var(--t-size);block-size:var(--t-size);align-items:center;justify-content:center;overflow:hidden;white-space:nowrap;border-radius:var(--t-radius);border:none;background:var(--tui-background-neutral-1);color:var(--tui-text-secondary);vertical-align:middle;box-sizing:border-box;padding:.25rem;opacity:.999}[data-size=xs][_nghost-%COMP%]{--t-size: var(--tui-height-xs);--t-radius: .5rem;font:var(--tui-font-text-xs);font-weight:700}[data-size=xs][data-type=content][_nghost-%COMP%]{font:var(--tui-font-text-m);font-size:.5625rem}[data-size=s][_nghost-%COMP%]{--t-size: var(--tui-height-s);--t-radius: .5rem;font:var(--tui-font-text-s);font-weight:700}[data-size=s][data-type=content][_nghost-%COMP%]{font:var(--tui-font-text-xs);font-weight:700}[data-size=m][_nghost-%COMP%]{--t-size: calc(var(--tui-height-m) - .25rem);--t-radius: .75rem;font:var(--tui-font-text-l);font-weight:700}[data-size=m][data-type=content][_nghost-%COMP%]{font:var(--tui-font-text-m);font-weight:700}[data-size=l][_nghost-%COMP%]{--t-size: var(--tui-height-l);--t-radius: .75rem;font:var(--tui-font-heading-5)}[data-size=l][data-type=content][_nghost-%COMP%]{font:var(--tui-font-text-l);font-weight:700}[data-size=xl][_nghost-%COMP%]{--t-size: 5rem;--t-radius: .75rem;font:var(--tui-font-heading-3)}[data-size=xl][data-type=content][_nghost-%COMP%]{font:var(--tui-font-heading-4)}[data-size=xxl][_nghost-%COMP%]{--t-size: 6rem;--t-radius: 1rem;font:var(--tui-font-heading-3)}[data-size=xxl][data-type=content][_nghost-%COMP%]{font:var(--tui-font-heading-3)}[data-size=xxxl][_nghost-%COMP%]{--t-size: 8rem;--t-radius: 1.25rem;font:var(--tui-font-heading-2)}[data-size=xxxl][data-type=content][_nghost-%COMP%]{font:var(--tui-font-heading-3)}[data-type=img][_nghost-%COMP%]:not(._svg){background:transparent}[data-type=icon][_nghost-%COMP%]:before{content:""}._round[_nghost-%COMP%]{--t-radius: calc(var(--t-size) / 2)}._svg[_nghost-%COMP%]   img[_ngcontent-%COMP%]{padding:20%;object-fit:contain}[_nghost-%COMP%]   tui-icon[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);inline-size:60%;block-size:60%}[_nghost-%COMP%]     img, [_nghost-%COMP%]     picture, [_nghost-%COMP%]     video{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;object-fit:cover;box-sizing:border-box}'],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAvatar, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-avatar,button[tuiAvatar],a[tuiAvatar]",
      imports: [NgSwitch, NgSwitchCase, NgSwitchDefault, TuiIcon],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAppearanceOptionsProvider(TUI_AVATAR_OPTIONS)],
      hostDirectives: [TuiWithAppearance],
      host: {
        "[attr.data-size]": "size",
        "[attr.data-type]": "type",
        "[class._round]": "round",
        "[class._svg]": "svg"
      },
      template: `<ng-container [ngSwitch]="type">
    <img
        *ngSwitchCase="'img'"
        alt=""
        loading="lazy"
        [src]="value"
    />
    <tui-icon
        *ngSwitchCase="'icon'"
        [icon]="value.toString()"
    />
    <ng-container *ngSwitchCase="'text'">{{ value }}</ng-container>
    <ng-container *ngSwitchDefault>
        <ng-content />
    </ng-container>
</ng-container>
`,
      styles: [':host{--t-size: 3.5rem;--t-radius: .75rem;position:relative;display:inline-flex;flex-shrink:0;inline-size:var(--t-size);block-size:var(--t-size);align-items:center;justify-content:center;overflow:hidden;white-space:nowrap;border-radius:var(--t-radius);border:none;background:var(--tui-background-neutral-1);color:var(--tui-text-secondary);vertical-align:middle;box-sizing:border-box;padding:.25rem;opacity:.999}:host[data-size=xs]{--t-size: var(--tui-height-xs);--t-radius: .5rem;font:var(--tui-font-text-xs);font-weight:700}:host[data-size=xs][data-type=content]{font:var(--tui-font-text-m);font-size:.5625rem}:host[data-size=s]{--t-size: var(--tui-height-s);--t-radius: .5rem;font:var(--tui-font-text-s);font-weight:700}:host[data-size=s][data-type=content]{font:var(--tui-font-text-xs);font-weight:700}:host[data-size=m]{--t-size: calc(var(--tui-height-m) - .25rem);--t-radius: .75rem;font:var(--tui-font-text-l);font-weight:700}:host[data-size=m][data-type=content]{font:var(--tui-font-text-m);font-weight:700}:host[data-size=l]{--t-size: var(--tui-height-l);--t-radius: .75rem;font:var(--tui-font-heading-5)}:host[data-size=l][data-type=content]{font:var(--tui-font-text-l);font-weight:700}:host[data-size=xl]{--t-size: 5rem;--t-radius: .75rem;font:var(--tui-font-heading-3)}:host[data-size=xl][data-type=content]{font:var(--tui-font-heading-4)}:host[data-size=xxl]{--t-size: 6rem;--t-radius: 1rem;font:var(--tui-font-heading-3)}:host[data-size=xxl][data-type=content]{font:var(--tui-font-heading-3)}:host[data-size=xxxl]{--t-size: 8rem;--t-radius: 1.25rem;font:var(--tui-font-heading-2)}:host[data-size=xxxl][data-type=content]{font:var(--tui-font-heading-3)}:host[data-type=img]:not(._svg){background:transparent}:host[data-type=icon]:before{content:""}:host._round{--t-radius: calc(var(--t-size) / 2)}:host._svg img{padding:20%;object-fit:contain}:host tui-icon{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);inline-size:60%;block-size:60%}:host ::ng-deep img,:host ::ng-deep picture,:host ::ng-deep video{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;object-fit:cover;box-sizing:border-box}\n']
    }]
  }], null, {
    size: [{
      type: Input
    }],
    round: [{
      type: Input
    }],
    src: [{
      type: Input
    }]
  });
})();
var TuiAvatarLabeled = class _TuiAvatarLabeled {
  constructor() {
    this.label = "";
  }
  split(label) {
    return label.split(" ");
  }
  static {
    this.ɵfac = function TuiAvatarLabeled_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiAvatarLabeled)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiAvatarLabeled,
      selectors: [["tui-avatar-labeled"]],
      inputs: {
        label: "label"
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      ngContentSelectors: _c0,
      decls: 2,
      vars: 1,
      consts: [[4, "ngIf"], ["tuiFade", "", 4, "ngFor", "ngForOf"], ["tuiFade", ""]],
      template: function TuiAvatarLabeled_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
          ɵɵtemplate(1, TuiAvatarLabeled_ng_container_1_Template, 2, 1, "ng-container", 0);
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.label.length);
        }
      },
      dependencies: [NgForOf, NgIf, TuiFade],
      styles: ["tui-avatar-labeled{display:flex;inline-size:3.5rem;box-sizing:content-box;flex-direction:column;text-align:center;align-items:center;line-height:.895rem;font-size:.75rem;padding:0 .5rem;white-space:nowrap}tui-avatar-labeled tui-avatar{margin-bottom:.375rem}tui-avatar-labeled [tuiFade]{inline-size:calc(100% + 1rem)}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
__decorate([tuiPure], TuiAvatarLabeled.prototype, "split", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAvatarLabeled, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-avatar-labeled",
      imports: [NgForOf, NgIf, TuiFade],
      template: `
        <ng-content></ng-content>
        <ng-container *ngIf="label.length">
            <span
                *ngFor="let item of split(label)"
                tuiFade
            >
                {{ item }}
            </span>
        </ng-container>
    `,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      styles: ["tui-avatar-labeled{display:flex;inline-size:3.5rem;box-sizing:content-box;flex-direction:column;text-align:center;align-items:center;line-height:.895rem;font-size:.75rem;padding:0 .5rem;white-space:nowrap}tui-avatar-labeled tui-avatar{margin-bottom:.375rem}tui-avatar-labeled [tuiFade]{inline-size:calc(100% + 1rem)}\n"]
    }]
  }], null, {
    label: [{
      type: Input
    }],
    split: []
  });
})();
var TuiAvatarOutlineStyles = class _TuiAvatarOutlineStyles {
  static {
    this.ɵfac = function TuiAvatarOutlineStyles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiAvatarOutlineStyles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiAvatarOutlineStyles,
      selectors: [["ng-component"]],
      hostAttrs: [1, "tui-avatar-outline"],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 0,
      vars: 0,
      template: function TuiAvatarOutlineStyles_Template(rf, ctx) {
      },
      styles: ['[tuiAvatarOutline]{--t-outline: .1875rem;--t-gap: .125rem}[tuiAvatarOutline][data-size=xs],[tuiAvatarOutline][data-size=s],[tuiAvatarOutline][data-size=m]{--t-outline: .125rem;--t-gap: .0625rem}[tuiAvatarOutline]._outline{-webkit-mask:radial-gradient(closest-side,#000,#000 calc(100% - var(--t-gap) - var(--t-outline) - .5px),transparent calc(100% - var(--t-gap) - var(--t-outline)),transparent calc(100% - var(--t-outline) - .5px),#000 calc(100% - var(--t-outline)));mask:radial-gradient(closest-side,#000,#000 calc(100% - var(--t-gap) - var(--t-outline) - .5px),transparent calc(100% - var(--t-gap) - var(--t-outline)),transparent calc(100% - var(--t-outline) - .5px),#000 calc(100% - var(--t-outline)))}[tuiAvatarOutline]._outline:after{content:"";position:absolute;top:0;left:0;inline-size:100%;block-size:100%;background:var(--t-fill);-webkit-mask:radial-gradient(closest-side,transparent,transparent calc(100% - var(--t-outline) - .5px),#000 calc(100% - var(--t-outline)));mask:radial-gradient(closest-side,transparent,transparent calc(100% - var(--t-outline) - .5px),#000 calc(100% - var(--t-outline)))}\n'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAvatarOutlineStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-avatar-outline"
      },
      styles: ['[tuiAvatarOutline]{--t-outline: .1875rem;--t-gap: .125rem}[tuiAvatarOutline][data-size=xs],[tuiAvatarOutline][data-size=s],[tuiAvatarOutline][data-size=m]{--t-outline: .125rem;--t-gap: .0625rem}[tuiAvatarOutline]._outline{-webkit-mask:radial-gradient(closest-side,#000,#000 calc(100% - var(--t-gap) - var(--t-outline) - .5px),transparent calc(100% - var(--t-gap) - var(--t-outline)),transparent calc(100% - var(--t-outline) - .5px),#000 calc(100% - var(--t-outline)));mask:radial-gradient(closest-side,#000,#000 calc(100% - var(--t-gap) - var(--t-outline) - .5px),transparent calc(100% - var(--t-gap) - var(--t-outline)),transparent calc(100% - var(--t-outline) - .5px),#000 calc(100% - var(--t-outline)))}[tuiAvatarOutline]._outline:after{content:"";position:absolute;top:0;left:0;inline-size:100%;block-size:100%;background:var(--t-fill);-webkit-mask:radial-gradient(closest-side,transparent,transparent calc(100% - var(--t-outline) - .5px),#000 calc(100% - var(--t-outline)));mask:radial-gradient(closest-side,transparent,transparent calc(100% - var(--t-outline) - .5px),#000 calc(100% - var(--t-outline)))}\n']
    }]
  }], null, null);
})();
var TuiAvatarOutline = class _TuiAvatarOutline {
  constructor() {
    this.nothing = tuiWithStyles(TuiAvatarOutlineStyles);
    this.tuiAvatarOutline = "";
  }
  get value() {
    return this.tuiAvatarOutline === "" ? "var(--tui-background-accent-1)" : this.tuiAvatarOutline;
  }
  static {
    this.ɵfac = function TuiAvatarOutline_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiAvatarOutline)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiAvatarOutline,
      selectors: [["", "tuiAvatarOutline", ""]],
      hostVars: 4,
      hostBindings: function TuiAvatarOutline_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵstyleProp("--t-fill", ctx.value);
          ɵɵclassProp("_outline", ctx.value);
        }
      },
      inputs: {
        tuiAvatarOutline: "tuiAvatarOutline"
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAvatarOutline, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiAvatarOutline]",
      host: {
        "[style.--t-fill]": "value",
        "[class._outline]": "value"
      }
    }]
  }], null, {
    tuiAvatarOutline: [{
      type: Input
    }]
  });
})();
var TuiAvatarStack = class _TuiAvatarStack {
  constructor() {
    this.direction = "right";
  }
  static {
    this.ɵfac = function TuiAvatarStack_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiAvatarStack)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiAvatarStack,
      selectors: [["tui-avatar-stack"]],
      hostVars: 1,
      hostBindings: function TuiAvatarStack_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-direction", ctx.direction);
        }
      },
      inputs: {
        direction: "direction"
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function TuiAvatarStack_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
        }
      },
      styles: ["tui-avatar-stack{display:flex;--t-gap: .125rem}tui-avatar-stack tui-avatar._round{-webkit-mask-image:radial-gradient(circle at var(--t-x) 50%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px));mask-image:radial-gradient(circle at var(--t-x) 50%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px))}tui-avatar-stack[data-direction=right] tui-avatar._round{--t-x: 100%}tui-avatar-stack[data-direction=right] tui-avatar._round:last-child{-webkit-mask-image:none;mask-image:none}tui-avatar-stack[data-direction=left] tui-avatar._round{--t-x: 0}tui-avatar-stack[data-direction=left] tui-avatar._round:first-child{-webkit-mask-image:none;mask-image:none}tui-avatar-stack[data-direction=left] tui-avatar:not(._round):not(:first-child){-webkit-mask-image:radial-gradient(circle at 0% 100%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),radial-gradient(circle at 0% 0%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),linear-gradient(to right,transparent calc(50% + var(--t-gap)),#000 calc(50% + var(--t-gap)));mask-image:radial-gradient(circle at 0% 100%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),radial-gradient(circle at 0% 0%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),linear-gradient(to right,transparent calc(50% + var(--t-gap)),#000 calc(50% + var(--t-gap)));-webkit-mask-position:calc(50% - (var(--t-radius) - var(--t-gap)) / 2) calc(-1 * var(--t-gap)),calc(50% - (var(--t-radius) - var(--t-gap)) / 2) calc(100% + var(--t-gap)),bottom;mask-position:calc(50% - (var(--t-radius) - var(--t-gap)) / 2) calc(-1 * var(--t-gap)),calc(50% - (var(--t-radius) - var(--t-gap)) / 2) calc(100% + var(--t-gap)),bottom}tui-avatar-stack[data-direction=right] tui-avatar:not(._round):not(:last-child){-webkit-mask-image:radial-gradient(circle at 150% 100%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),radial-gradient(circle at 150% 0%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),linear-gradient(to left,transparent calc(50% + var(--t-gap)),#000 calc(50% + var(--t-gap)));mask-image:radial-gradient(circle at 150% 100%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),radial-gradient(circle at 150% 0%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),linear-gradient(to left,transparent calc(50% + var(--t-gap)),#000 calc(50% + var(--t-gap)));-webkit-mask-position:calc(50% - var(--t-gap)) calc(-1 * var(--t-gap)),calc(50% - var(--t-gap)) calc(100% + var(--t-gap)),bottom;mask-position:calc(50% - var(--t-gap)) calc(-1 * var(--t-gap)),calc(50% - var(--t-gap)) calc(100% + var(--t-gap)),bottom}tui-avatar-stack tui-avatar:not(._round){-webkit-mask-size:calc(var(--t-radius) + var(--t-gap)) calc(var(--t-radius) + var(--t-gap)),calc(var(--t-radius) + var(--t-gap)) calc(var(--t-radius) + var(--t-gap)),100%;mask-size:calc(var(--t-radius) + var(--t-gap)) calc(var(--t-radius) + var(--t-gap)),calc(var(--t-radius) + var(--t-gap)) calc(var(--t-radius) + var(--t-gap)),100%;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}tui-avatar-stack tui-avatar:not(:last-child){margin-right:calc(var(--t-size) / -2)}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAvatarStack, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-avatar-stack",
      template: "<ng-content></ng-content>",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[attr.data-direction]": "direction"
      },
      styles: ["tui-avatar-stack{display:flex;--t-gap: .125rem}tui-avatar-stack tui-avatar._round{-webkit-mask-image:radial-gradient(circle at var(--t-x) 50%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px));mask-image:radial-gradient(circle at var(--t-x) 50%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px))}tui-avatar-stack[data-direction=right] tui-avatar._round{--t-x: 100%}tui-avatar-stack[data-direction=right] tui-avatar._round:last-child{-webkit-mask-image:none;mask-image:none}tui-avatar-stack[data-direction=left] tui-avatar._round{--t-x: 0}tui-avatar-stack[data-direction=left] tui-avatar._round:first-child{-webkit-mask-image:none;mask-image:none}tui-avatar-stack[data-direction=left] tui-avatar:not(._round):not(:first-child){-webkit-mask-image:radial-gradient(circle at 0% 100%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),radial-gradient(circle at 0% 0%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),linear-gradient(to right,transparent calc(50% + var(--t-gap)),#000 calc(50% + var(--t-gap)));mask-image:radial-gradient(circle at 0% 100%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),radial-gradient(circle at 0% 0%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),linear-gradient(to right,transparent calc(50% + var(--t-gap)),#000 calc(50% + var(--t-gap)));-webkit-mask-position:calc(50% - (var(--t-radius) - var(--t-gap)) / 2) calc(-1 * var(--t-gap)),calc(50% - (var(--t-radius) - var(--t-gap)) / 2) calc(100% + var(--t-gap)),bottom;mask-position:calc(50% - (var(--t-radius) - var(--t-gap)) / 2) calc(-1 * var(--t-gap)),calc(50% - (var(--t-radius) - var(--t-gap)) / 2) calc(100% + var(--t-gap)),bottom}tui-avatar-stack[data-direction=right] tui-avatar:not(._round):not(:last-child){-webkit-mask-image:radial-gradient(circle at 150% 100%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),radial-gradient(circle at 150% 0%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),linear-gradient(to left,transparent calc(50% + var(--t-gap)),#000 calc(50% + var(--t-gap)));mask-image:radial-gradient(circle at 150% 100%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),radial-gradient(circle at 150% 0%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),linear-gradient(to left,transparent calc(50% + var(--t-gap)),#000 calc(50% + var(--t-gap)));-webkit-mask-position:calc(50% - var(--t-gap)) calc(-1 * var(--t-gap)),calc(50% - var(--t-gap)) calc(100% + var(--t-gap)),bottom;mask-position:calc(50% - var(--t-gap)) calc(-1 * var(--t-gap)),calc(50% - var(--t-gap)) calc(100% + var(--t-gap)),bottom}tui-avatar-stack tui-avatar:not(._round){-webkit-mask-size:calc(var(--t-radius) + var(--t-gap)) calc(var(--t-radius) + var(--t-gap)),calc(var(--t-radius) + var(--t-gap)) calc(var(--t-radius) + var(--t-gap)),100%;mask-size:calc(var(--t-radius) + var(--t-gap)) calc(var(--t-radius) + var(--t-gap)),calc(var(--t-radius) + var(--t-gap)) calc(var(--t-radius) + var(--t-gap)),100%;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}tui-avatar-stack tui-avatar:not(:last-child){margin-right:calc(var(--t-size) / -2)}\n"]
    }]
  }], null, {
    direction: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-switch.mjs
var _c02 = ["type", "checkbox", "tuiSwitch", ""];
var TUI_SWITCH_DEFAULT_OPTIONS = {
  showIcons: true,
  size: "m",
  icon: "@tui.check",
  appearance: (el) => el.checked ? "primary" : "secondary"
};
var TUI_SWITCH_OPTIONS = tuiCreateToken(TUI_SWITCH_DEFAULT_OPTIONS);
function tuiSwitchOptionsProvider(options) {
  return tuiProvideOptions(TUI_SWITCH_OPTIONS, options, TUI_SWITCH_DEFAULT_OPTIONS);
}
var TuiSwitch = class _TuiSwitch {
  constructor() {
    this.appearance = inject(TuiAppearance);
    this.resolver = tuiInjectIconResolver();
    this.options = inject(TUI_SWITCH_OPTIONS);
    this.el = tuiInjectElement();
    this.control = inject(NgControl, {
      self: true,
      optional: true
    });
    this.size = this.options.size;
    this.showIcons = this.options.showIcons;
  }
  ngDoCheck() {
    this.appearance.tuiAppearance = this.options.appearance(this.el);
  }
  get icon() {
    const {
      options,
      resolver,
      size
    } = this;
    const icon = tuiIsString(options.icon) ? options.icon : options.icon(size);
    return this.showIcons && icon ? `url(${resolver(icon)})` : null;
  }
  static {
    this.ɵfac = function TuiSwitch_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSwitch)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiSwitch,
      selectors: [["input", "type", "checkbox", "tuiSwitch", ""]],
      hostAttrs: ["role", "switch"],
      hostVars: 6,
      hostBindings: function TuiSwitch_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵhostProperty("disabled", !ctx.control || ctx.control.disabled);
          ɵɵattribute("data-size", ctx.size);
          ɵɵstyleProp("--t-checked-icon", ctx.icon);
          ɵɵclassProp("_readonly", !ctx.control);
        }
      },
      inputs: {
        size: "size",
        showIcons: "showIcons"
      },
      standalone: true,
      features: [ɵɵHostDirectivesFeature([{
        directive: TuiAppearance,
        inputs: ["tuiAppearanceState", "tuiAppearanceState", "tuiAppearanceFocus", "tuiAppearanceFocus"]
      }, TuiNativeValidator]), ɵɵStandaloneFeature],
      attrs: _c02,
      decls: 0,
      vars: 0,
      template: function TuiSwitch_Template(rf, ctx) {
      },
      styles: ['[tuiSwitch]{transition-property:background,box-shadow;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;inline-size:3rem;block-size:1.5rem;border-radius:2rem;overflow:hidden;cursor:pointer;margin:0;flex-shrink:0;color:#fff!important}[tuiSwitch][data-size=s]{block-size:1rem;inline-size:2rem}[tuiSwitch][data-size=s]:before{inline-size:1rem;transform:translate(-1rem);-webkit-mask-size:.75rem;mask-size:.75rem}[tuiSwitch][data-size=s]:after{inline-size:1rem;box-shadow:-2.625rem 0 0 .5rem currentColor;outline-width:.167rem;transform:scale(.375)}[tuiSwitch][data-size=s]:checked:after{transform:scale(.375) translate(2.625rem)}[tuiSwitch]:checked:before{transform:none}[tuiSwitch]:checked:after{transform:scale(.33333) translate(4.5rem)}[tuiSwitch]:disabled._readonly{opacity:1}[tuiSwitch]:before,[tuiSwitch]:after{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:"";position:absolute;block-size:100%;inline-size:1.5rem}[tuiSwitch]:before{display:var(--t-checked-icon, none);background:currentColor;-webkit-mask:var(--t-checked-icon) no-repeat center;mask:var(--t-checked-icon) no-repeat center;-webkit-mask-size:1rem;mask-size:1rem;transform:translate(-1.5rem)}[tuiSwitch]:after{right:0;border-radius:100%;transform:scale(.33333);box-shadow:-4.5rem 0 0 .75rem currentColor;outline:.375rem solid var(--tui-background-neutral-2-pressed);outline-offset:var(--t-checked-icon, 20rem)}\n'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSwitch, [{
    type: Component,
    args: [{
      standalone: true,
      selector: 'input[type="checkbox"][tuiSwitch]',
      template: "",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      hostDirectives: [{
        directive: TuiAppearance,
        inputs: ["tuiAppearanceState", "tuiAppearanceFocus"]
      }, TuiNativeValidator],
      host: {
        role: "switch",
        "[disabled]": "!control || control.disabled",
        "[attr.data-size]": "size",
        "[class._readonly]": "!control",
        "[style.--t-checked-icon]": "icon"
      },
      styles: ['[tuiSwitch]{transition-property:background,box-shadow;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;inline-size:3rem;block-size:1.5rem;border-radius:2rem;overflow:hidden;cursor:pointer;margin:0;flex-shrink:0;color:#fff!important}[tuiSwitch][data-size=s]{block-size:1rem;inline-size:2rem}[tuiSwitch][data-size=s]:before{inline-size:1rem;transform:translate(-1rem);-webkit-mask-size:.75rem;mask-size:.75rem}[tuiSwitch][data-size=s]:after{inline-size:1rem;box-shadow:-2.625rem 0 0 .5rem currentColor;outline-width:.167rem;transform:scale(.375)}[tuiSwitch][data-size=s]:checked:after{transform:scale(.375) translate(2.625rem)}[tuiSwitch]:checked:before{transform:none}[tuiSwitch]:checked:after{transform:scale(.33333) translate(4.5rem)}[tuiSwitch]:disabled._readonly{opacity:1}[tuiSwitch]:before,[tuiSwitch]:after{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:"";position:absolute;block-size:100%;inline-size:1.5rem}[tuiSwitch]:before{display:var(--t-checked-icon, none);background:currentColor;-webkit-mask:var(--t-checked-icon) no-repeat center;mask:var(--t-checked-icon) no-repeat center;-webkit-mask-size:1rem;mask-size:1rem;transform:translate(-1.5rem)}[tuiSwitch]:after{right:0;border-radius:100%;transform:scale(.33333);box-shadow:-4.5rem 0 0 .75rem currentColor;outline:.375rem solid var(--tui-background-neutral-2-pressed);outline-offset:var(--t-checked-icon, 20rem)}\n']
    }]
  }], null, {
    size: [{
      type: Input
    }],
    showIcons: [{
      type: Input
    }]
  });
})();

export {
  WA_MUTATION_OBSERVER_INIT,
  WaMutationObserver,
  MutationObserverService,
  TuiFade,
  TUI_AVATAR_DEFAULT_OPTIONS,
  TUI_AVATAR_OPTIONS,
  tuiAvatarOptionsProvider,
  TuiAvatar,
  TuiAvatarLabeled,
  TuiAvatarOutline,
  TuiAvatarStack,
  TUI_SWITCH_DEFAULT_OPTIONS,
  TUI_SWITCH_OPTIONS,
  tuiSwitchOptionsProvider,
  TuiSwitch
};
//# sourceMappingURL=chunk-IOJOZZZW.js.map
