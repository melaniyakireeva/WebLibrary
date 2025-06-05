import {
  TUI_ICON_END,
  TUI_ICON_START,
  tuiInjectIconResolver
} from "./chunk-4XVFG3K5.js";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Pipe,
  ViewEncapsulation$1,
  inject,
  setClassMetadata,
  signal,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵdefinePipe,
  ɵɵstyleProp
} from "./chunk-DGEURTJ6.js";

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-icon.mjs
var TuiIcon = class _TuiIcon {
  constructor() {
    this.resolver = tuiInjectIconResolver();
    this.backgroundSrc = signal(null);
    this.iconSrc = signal(this.resolve(inject(TUI_ICON_START, {
      self: true,
      optional: true
    }) || inject(TUI_ICON_END, {
      self: true,
      optional: true
    })));
  }
  set icon(icon) {
    this.iconSrc.set(this.resolve(icon));
  }
  set background(background) {
    this.backgroundSrc.set(this.resolve(background));
  }
  resolve(value) {
    return value ? `url(${this.resolver(value)})` : null;
  }
  static {
    this.ɵfac = function TuiIcon_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiIcon)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiIcon,
      selectors: [["tui-icon"]],
      hostVars: 4,
      hostBindings: function TuiIcon_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵstyleProp("--t-icon", ctx.iconSrc() || "url()")("--t-icon-bg", ctx.backgroundSrc());
        }
      },
      inputs: {
        icon: "icon",
        background: "background"
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 0,
      vars: 0,
      template: function TuiIcon_Template(rf, ctx) {
      },
      styles: ['tui-icon{position:relative;display:inline-block;inline-size:1em;block-size:1em;font-size:1.5rem;flex-shrink:0;border:0 solid transparent;vertical-align:middle;box-sizing:border-box;-webkit-mask:var(--t-icon-bg) no-repeat center / contain;mask:var(--t-icon-bg) no-repeat center / contain}@media (hover: hover){tui-icon[data-appearance=icon]:hover{color:var(--tui-text-secondary)}}tui-icon:after,tui-icon[tuiIcons]:after{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:"";display:block;-webkit-mask:var(--t-icon) no-repeat center / contain;mask:var(--t-icon) no-repeat center / contain;-webkit-mask-composite:source-in,xor;mask-composite:intersect;background:currentColor}\n'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiIcon, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-icon",
      template: "",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[style.--t-icon]": 'iconSrc() || "url()"',
        "[style.--t-icon-bg]": "backgroundSrc()"
      },
      styles: ['tui-icon{position:relative;display:inline-block;inline-size:1em;block-size:1em;font-size:1.5rem;flex-shrink:0;border:0 solid transparent;vertical-align:middle;box-sizing:border-box;-webkit-mask:var(--t-icon-bg) no-repeat center / contain;mask:var(--t-icon-bg) no-repeat center / contain}@media (hover: hover){tui-icon[data-appearance=icon]:hover{color:var(--tui-text-secondary)}}tui-icon:after,tui-icon[tuiIcons]:after{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:"";display:block;-webkit-mask:var(--t-icon) no-repeat center / contain;mask:var(--t-icon) no-repeat center / contain;-webkit-mask-composite:source-in,xor;mask-composite:intersect;background:currentColor}\n']
    }]
  }], null, {
    icon: [{
      type: Input
    }],
    background: [{
      type: Input
    }]
  });
})();
var TuiIconPipe = class _TuiIconPipe {
  constructor() {
    this.transform = tuiInjectIconResolver();
  }
  static {
    this.ɵfac = function TuiIconPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiIconPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "tuiIcon",
      type: _TuiIconPipe,
      pure: true,
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiIconPipe, [{
    type: Pipe,
    args: [{
      standalone: true,
      name: "tuiIcon"
    }]
  }], null, null);
})();

export {
  TuiIcon,
  TuiIconPipe
};
//# sourceMappingURL=chunk-ME2GCFUN.js.map
