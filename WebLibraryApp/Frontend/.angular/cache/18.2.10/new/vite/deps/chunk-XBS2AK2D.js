import {
  TuiWithAppearance,
  tuiAppearanceOptionsProvider
} from "./chunk-Y7YOVM7H.js";
import {
  TuiWithIcons
} from "./chunk-QBEBPKKH.js";
import {
  tuiCreateToken,
  tuiProvideOptions,
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
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵstyleProp
} from "./chunk-DGEURTJ6.js";

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-link.mjs
var TUI_LINK_DEFAULT_OPTIONS = {
  appearance: "action",
  pseudo: false
};
var TUI_LINK_OPTIONS = tuiCreateToken(TUI_LINK_DEFAULT_OPTIONS);
function tuiLinkOptionsProvider(options) {
  return tuiProvideOptions(TUI_LINK_OPTIONS, options, TUI_LINK_DEFAULT_OPTIONS);
}
var TuiLinkStyles = class _TuiLinkStyles {
  static {
    this.ɵfac = function TuiLinkStyles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiLinkStyles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiLinkStyles,
      selectors: [["ng-component"]],
      hostAttrs: [1, "tui-link"],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 0,
      vars: 0,
      template: function TuiLinkStyles_Template(rf, ctx) {
      },
      styles: ['[tuiLink]{--tui-text-tertiary: var(--tui-text-secondary);padding:0;background:transparent;border:none;cursor:pointer;font:inherit;color:inherit;-webkit-text-decoration:none dashed currentColor;text-decoration:none dashed currentColor;text-underline-offset:.2em;text-decoration-thickness:.7px;text-decoration-color:color-mix(in lch,currentColor,transparent)}[tuiLink]:hover{--tui-text-secondary: var(--tui-text-primary)}[tuiLink]:before{margin-inline-end:.25rem}[tuiLink]:after{margin-inline-start:.25rem}[tuiLink][tuiIcons]:before,[tuiLink][tuiIcons]:after{content:"\\2060";padding:calc(var(--tui-icon-size, 1rem) / 2);vertical-align:super;font-size:0;line-height:0;box-sizing:border-box}[tuiLink]:focus-visible:not([data-focus=false]){outline:none;background:var(--tui-service-selection-background);background:color-mix(in lch,currentColor 12%,transparent)}[tuiLink][data-focus=true]{outline:none;background:var(--tui-service-selection-background);background:color-mix(in lch,currentColor 12%,transparent)}[tuiLink][tuiWrapper]:not(._focused):has(:focus-visible),[tuiLink][tuiWrapper]._focused{outline:none;background:var(--tui-service-selection-background);background:color-mix(in lch,currentColor 12%,transparent)}\n'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiLinkStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-link"
      },
      styles: ['[tuiLink]{--tui-text-tertiary: var(--tui-text-secondary);padding:0;background:transparent;border:none;cursor:pointer;font:inherit;color:inherit;-webkit-text-decoration:none dashed currentColor;text-decoration:none dashed currentColor;text-underline-offset:.2em;text-decoration-thickness:.7px;text-decoration-color:color-mix(in lch,currentColor,transparent)}[tuiLink]:hover{--tui-text-secondary: var(--tui-text-primary)}[tuiLink]:before{margin-inline-end:.25rem}[tuiLink]:after{margin-inline-start:.25rem}[tuiLink][tuiIcons]:before,[tuiLink][tuiIcons]:after{content:"\\2060";padding:calc(var(--tui-icon-size, 1rem) / 2);vertical-align:super;font-size:0;line-height:0;box-sizing:border-box}[tuiLink]:focus-visible:not([data-focus=false]){outline:none;background:var(--tui-service-selection-background);background:color-mix(in lch,currentColor 12%,transparent)}[tuiLink][data-focus=true]{outline:none;background:var(--tui-service-selection-background);background:color-mix(in lch,currentColor 12%,transparent)}[tuiLink][tuiWrapper]:not(._focused):has(:focus-visible),[tuiLink][tuiWrapper]._focused{outline:none;background:var(--tui-service-selection-background);background:color-mix(in lch,currentColor 12%,transparent)}\n']
    }]
  }], null, null);
})();
var TuiLink = class _TuiLink {
  constructor() {
    this.nothing = tuiWithStyles(TuiLinkStyles);
    this.pseudo = inject(TUI_LINK_OPTIONS).pseudo;
  }
  static {
    this.ɵfac = function TuiLink_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiLink)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiLink,
      selectors: [["a", "tuiLink", ""], ["button", "tuiLink", ""]],
      hostAttrs: ["tuiLink", ""],
      hostVars: 2,
      hostBindings: function TuiLink_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵstyleProp("text-decoration-line", ctx.pseudo ? "underline" : null);
        }
      },
      inputs: {
        pseudo: "pseudo"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiAppearanceOptionsProvider(TUI_LINK_OPTIONS)]), ɵɵHostDirectivesFeature([TuiWithAppearance, TuiWithIcons])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiLink, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "a[tuiLink], button[tuiLink]",
      providers: [tuiAppearanceOptionsProvider(TUI_LINK_OPTIONS)],
      hostDirectives: [TuiWithAppearance, TuiWithIcons],
      host: {
        tuiLink: "",
        "[style.text-decoration-line]": 'pseudo ? "underline" : null'
      }
    }]
  }], null, {
    pseudo: [{
      type: Input
    }]
  });
})();

export {
  TUI_LINK_DEFAULT_OPTIONS,
  TUI_LINK_OPTIONS,
  tuiLinkOptionsProvider,
  TuiLink
};
//# sourceMappingURL=chunk-XBS2AK2D.js.map
