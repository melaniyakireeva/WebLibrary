import {
  TUI_ICON_END,
  TUI_ICON_START,
  tuiInjectIconResolver
} from "./chunk-4XVFG3K5.js";
import {
  tuiWithStyles
} from "./chunk-UQBCXIOX.js";
import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  Input,
  ViewEncapsulation$1,
  inject,
  setClassMetadata,
  ɵɵHostDirectivesFeature,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵstyleProp
} from "./chunk-DGEURTJ6.js";

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-directives-icons.mjs
var TuiIconsStyles = class _TuiIconsStyles {
  static {
    this.ɵfac = function TuiIconsStyles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiIconsStyles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiIconsStyles,
      selectors: [["ng-component"]],
      hostAttrs: [1, "tui-icons"],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 0,
      vars: 0,
      template: function TuiIconsStyles_Template(rf, ctx) {
      },
      styles: ['[tuiIcons]{--t-icon-start: none;--t-icon-end: none}[tuiIcons]:before,[tuiIcons]:after{content:"";display:var(--t-icon-start);inline-size:1em;block-size:1em;line-height:1em;font-size:1.5rem;flex-shrink:0;background:currentColor;-webkit-mask:var(--t-icon-start) no-repeat center / contain;mask:var(--t-icon-start) no-repeat center / contain}[tuiIcons]:after{display:var(--t-icon-end);-webkit-mask:var(--t-icon-end) no-repeat center / contain;mask:var(--t-icon-end) no-repeat center / contain}\n'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiIconsStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-icons"
      },
      styles: ['[tuiIcons]{--t-icon-start: none;--t-icon-end: none}[tuiIcons]:before,[tuiIcons]:after{content:"";display:var(--t-icon-start);inline-size:1em;block-size:1em;line-height:1em;font-size:1.5rem;flex-shrink:0;background:currentColor;-webkit-mask:var(--t-icon-start) no-repeat center / contain;mask:var(--t-icon-start) no-repeat center / contain}[tuiIcons]:after{display:var(--t-icon-end);-webkit-mask:var(--t-icon-end) no-repeat center / contain;mask:var(--t-icon-end) no-repeat center / contain}\n']
    }]
  }], null, null);
})();
var TuiIcons = class _TuiIcons {
  constructor() {
    this.nothing = tuiWithStyles(TuiIconsStyles);
    this.resolver = tuiInjectIconResolver();
    this.iconStart = inject(TUI_ICON_START, {
      self: true,
      optional: true
    }) || "";
    this.iconEnd = inject(TUI_ICON_END, {
      self: true,
      optional: true
    }) || "";
  }
  static {
    this.ɵfac = function TuiIcons_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiIcons)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiIcons,
      hostAttrs: ["tuiIcons", ""],
      hostVars: 4,
      hostBindings: function TuiIcons_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵstyleProp("--t-icon-start", ctx.iconStart ? "url(" + ctx.resolver(ctx.iconStart) + ")" : null)("--t-icon-end", ctx.iconEnd ? "url(" + ctx.resolver(ctx.iconEnd) + ")" : null);
        }
      },
      inputs: {
        iconStart: "iconStart",
        iconEnd: "iconEnd"
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiIcons, [{
    type: Directive,
    args: [{
      standalone: true,
      host: {
        tuiIcons: "",
        "[style.--t-icon-start]": 'iconStart ? "url(" + resolver(iconStart) + ")" : null',
        "[style.--t-icon-end]": 'iconEnd ? "url(" + resolver(iconEnd) + ")" : null'
      }
    }]
  }], null, {
    iconStart: [{
      type: Input
    }],
    iconEnd: [{
      type: Input
    }]
  });
})();
var TuiWithIcons = class _TuiWithIcons {
  static {
    this.ɵfac = function TuiWithIcons_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiWithIcons)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiWithIcons,
      standalone: true,
      features: [ɵɵHostDirectivesFeature([{
        directive: TuiIcons,
        inputs: ["iconStart", "iconStart", "iconEnd", "iconEnd"]
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiWithIcons, [{
    type: Directive,
    args: [{
      standalone: true,
      hostDirectives: [{
        directive: TuiIcons,
        inputs: ["iconStart", "iconEnd"]
      }]
    }]
  }], null, null);
})();

export {
  TuiIcons,
  TuiWithIcons
};
//# sourceMappingURL=chunk-QBEBPKKH.js.map
