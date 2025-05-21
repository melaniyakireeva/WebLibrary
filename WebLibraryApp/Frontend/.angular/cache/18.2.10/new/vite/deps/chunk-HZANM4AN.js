import {
  PolymorpheusOutlet,
  PolymorpheusTemplate
} from "./chunk-SX7GMV2W.js";
import {
  tuiSizeBigger
} from "./chunk-I7R3GOPA.js";
import {
  TUI_IS_IOS,
  tuiIsSafari
} from "./chunk-ZRKXNDNW.js";
import {
  tuiInjectElement
} from "./chunk-TBFJZ2MD.js";
import {
  tuiCreateToken,
  tuiProvideOptions
} from "./chunk-UQBCXIOX.js";
import {
  NgIf
} from "./chunk-6S6PAGJZ.js";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  inject,
  setClassMetadata,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-DGEURTJ6.js";

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-loader.mjs
var _c0 = ["*"];
function TuiLoader_div_2_div_3_ng_container_1_Template(rf, ctx) {
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
function TuiLoader_div_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 6);
    ɵɵtemplate(1, TuiLoader_div_2_div_3_ng_container_1_Template, 2, 1, "ng-container", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassProp("t-text_horizontal", ctx_r1.isHorizontal);
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", ctx_r1.textContent);
  }
}
function TuiLoader_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵnamespaceSVG();
    ɵɵelementStart(1, "svg", 3);
    ɵɵelement(2, "circle", 4);
    ɵɵelementEnd();
    ɵɵtemplate(3, TuiLoader_div_2_div_3_Template, 2, 3, "div", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("t-loader_horizontal", ctx_r1.isHorizontal)("t-loader_inherit-color", ctx_r1.inheritColor);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r1.textContent);
  }
}
var TUI_LOADER_DEFAULT_OPTIONS = {
  size: "m",
  inheritColor: false,
  overlay: false
};
var TUI_LOADER_OPTIONS = tuiCreateToken(TUI_LOADER_DEFAULT_OPTIONS);
function tuiLoaderOptionsProvider(options) {
  return tuiProvideOptions(TUI_LOADER_OPTIONS, options, TUI_LOADER_DEFAULT_OPTIONS);
}
var TuiLoader = class _TuiLoader {
  constructor() {
    this.isIOS = inject(TUI_IS_IOS);
    this.options = inject(TUI_LOADER_OPTIONS);
    this.isApple = tuiIsSafari(tuiInjectElement()) || this.isIOS;
    this.size = this.options.size;
    this.inheritColor = this.options.inheritColor;
    this.overlay = this.options.overlay;
    this.loading = true;
  }
  get isHorizontal() {
    return !tuiSizeBigger(this.size);
  }
  static {
    this.ɵfac = function TuiLoader_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiLoader)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiLoader,
      selectors: [["tui-loader"]],
      hostVars: 3,
      hostBindings: function TuiLoader_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size);
          ɵɵclassProp("_loading", ctx.loading);
        }
      },
      inputs: {
        size: "size",
        inheritColor: "inheritColor",
        overlay: "overlay",
        textContent: "textContent",
        loading: [0, "showLoader", "loading"]
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      ngContentSelectors: _c0,
      decls: 3,
      vars: 7,
      consts: [[1, "t-content", 3, "disabled"], ["class", "t-loader", 3, "t-loader_horizontal", "t-loader_inherit-color", 4, "ngIf"], [1, "t-loader"], ["automation-id", "tui-loader__loader", "focusable", "false", "height", "100%", "width", "100%", 1, "t-icon"], ["cx", "50%", "cy", "50%", 1, "t-circle"], ["automation-id", "tui-loader__text", "class", "t-text", 3, "t-text_horizontal", 4, "ngIf"], ["automation-id", "tui-loader__text", 1, "t-text"], [4, "polymorpheusOutlet"]],
      template: function TuiLoader_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "fieldset", 0);
          ɵɵprojection(1);
          ɵɵelementEnd();
          ɵɵtemplate(2, TuiLoader_div_2_Template, 4, 5, "div", 1);
        }
        if (rf & 2) {
          ɵɵclassProp("t-content_has-overlay", ctx.overlay && ctx.loading)("t-content_loading", ctx.loading);
          ɵɵproperty("disabled", ctx.loading && !ctx.isApple);
          ɵɵattribute("inert", ctx.loading || null);
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.loading);
        }
      },
      dependencies: [NgIf, PolymorpheusOutlet],
      styles: ["[_nghost-%COMP%]{position:relative;display:flex;min-inline-size:1.5rem;--tui-thickness: calc(var(--t-diameter) / 12)}._loading[_nghost-%COMP%]{overflow:hidden}[data-size=xs][_nghost-%COMP%]{--t-diameter: .75em}[data-size=s][_nghost-%COMP%]{--t-diameter: 1em}[data-size=m][_nghost-%COMP%]{--t-diameter: 1.5em}[data-size=l][_nghost-%COMP%]{--t-diameter: 2.5em}[data-size=xl][_nghost-%COMP%]{--t-diameter: 3.5em}[data-size=xxl][_nghost-%COMP%]{--t-diameter: 5em}.t-content[_ngcontent-%COMP%]{z-index:0;min-inline-size:100%;block-size:100%;padding:0;margin:0;border:none}.t-content_has-overlay[_ngcontent-%COMP%]{opacity:.3}.t-content_loading[_ngcontent-%COMP%]{pointer-events:none}.t-loader[_ngcontent-%COMP%]{position:relative;left:-100%;display:flex;flex-direction:column;align-items:center;justify-content:center;min-inline-size:100%;min-block-size:var(--t-diameter);flex-shrink:0;align-self:center;color:var(--tui-text-primary);stroke:var(--tui-background-accent-1);animation:tuiFadeIn var(--tui-duration);font-size:1rem}.t-loader.t-loader_horizontal[_ngcontent-%COMP%]{flex-direction:row}.t-loader.t-loader_inherit-color[_ngcontent-%COMP%]{color:inherit;stroke:currentColor}.t-text[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font:var(--tui-font-text-s);margin-top:1rem;color:inherit;max-inline-size:100%;text-align:center;stroke-width:0}.t-text_horizontal[_ngcontent-%COMP%]{margin:0 0 0 1rem}@keyframes _ngcontent-%COMP%_tuiLoaderRotate{0%{transform:rotate(-90deg)}50%{transform:rotate(-90deg) rotate(1turn)}to{transform:rotate(-90deg) rotate(3turn)}}.t-icon[_ngcontent-%COMP%]{display:block;inline-size:var(--t-diameter);block-size:var(--t-diameter);margin:.25rem calc(var(--t-diameter) / -2);border-radius:100%;overflow:hidden;animation:_ngcontent-%COMP%_tuiLoaderRotate 4s linear infinite}@supports (-webkit-hyphens: none){.t-icon[_ngcontent-%COMP%]{overflow:visible}}@keyframes _ngcontent-%COMP%_tuiLoaderDashOffset{0%{stroke-dashoffset:calc(2 * 3.14159265 * calc(var(--t-diameter) / 2 - var(--tui-thickness)))}50%{stroke-dashoffset:calc(.05 * calc(2 * 3.14159265 * calc(var(--t-diameter) / 2 - var(--tui-thickness))))}to{stroke-dashoffset:calc(2 * 3.14159265 * calc(var(--t-diameter) / 2 - var(--tui-thickness)))}}.t-circle[_ngcontent-%COMP%]{r:calc(var(--t-diameter) / 2 - var(--tui-thickness));stroke-dasharray:calc(2 * 3.14159265 * calc(var(--t-diameter) / 2 - var(--tui-thickness)));fill:none;stroke:inherit;stroke-width:max(var(--tui-thickness),1.5px);animation:_ngcontent-%COMP%_tuiLoaderDashOffset 4s linear infinite}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiLoader, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-loader",
      imports: [NgIf, PolymorpheusOutlet, PolymorpheusTemplate],
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[class._loading]": "loading",
        "[attr.data-size]": "size"
      },
      template: '<fieldset\n    class="t-content"\n    [attr.inert]="loading || null"\n    [class.t-content_has-overlay]="overlay && loading"\n    [class.t-content_loading]="loading"\n    [disabled]="loading && !isApple"\n>\n    <ng-content />\n</fieldset>\n\n<div\n    *ngIf="loading"\n    class="t-loader"\n    [class.t-loader_horizontal]="isHorizontal"\n    [class.t-loader_inherit-color]="inheritColor"\n>\n    <svg\n        automation-id="tui-loader__loader"\n        focusable="false"\n        height="100%"\n        width="100%"\n        class="t-icon"\n    >\n        <circle\n            cx="50%"\n            cy="50%"\n            class="t-circle"\n        />\n    </svg>\n\n    <div\n        *ngIf="textContent"\n        automation-id="tui-loader__text"\n        class="t-text"\n        [class.t-text_horizontal]="isHorizontal"\n    >\n        <ng-container *polymorpheusOutlet="textContent as text">\n            {{ text }}\n        </ng-container>\n    </div>\n</div>\n',
      styles: [":host{position:relative;display:flex;min-inline-size:1.5rem;--tui-thickness: calc(var(--t-diameter) / 12)}:host._loading{overflow:hidden}:host[data-size=xs]{--t-diameter: .75em}:host[data-size=s]{--t-diameter: 1em}:host[data-size=m]{--t-diameter: 1.5em}:host[data-size=l]{--t-diameter: 2.5em}:host[data-size=xl]{--t-diameter: 3.5em}:host[data-size=xxl]{--t-diameter: 5em}.t-content{z-index:0;min-inline-size:100%;block-size:100%;padding:0;margin:0;border:none}.t-content_has-overlay{opacity:.3}.t-content_loading{pointer-events:none}.t-loader{position:relative;left:-100%;display:flex;flex-direction:column;align-items:center;justify-content:center;min-inline-size:100%;min-block-size:var(--t-diameter);flex-shrink:0;align-self:center;color:var(--tui-text-primary);stroke:var(--tui-background-accent-1);animation:tuiFadeIn var(--tui-duration);font-size:1rem}.t-loader.t-loader_horizontal{flex-direction:row}.t-loader.t-loader_inherit-color{color:inherit;stroke:currentColor}.t-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font:var(--tui-font-text-s);margin-top:1rem;color:inherit;max-inline-size:100%;text-align:center;stroke-width:0}.t-text_horizontal{margin:0 0 0 1rem}@keyframes tuiLoaderRotate{0%{transform:rotate(-90deg)}50%{transform:rotate(-90deg) rotate(1turn)}to{transform:rotate(-90deg) rotate(3turn)}}.t-icon{display:block;inline-size:var(--t-diameter);block-size:var(--t-diameter);margin:.25rem calc(var(--t-diameter) / -2);border-radius:100%;overflow:hidden;animation:tuiLoaderRotate 4s linear infinite}@supports (-webkit-hyphens: none){.t-icon{overflow:visible}}@keyframes tuiLoaderDashOffset{0%{stroke-dashoffset:calc(2 * 3.14159265 * calc(var(--t-diameter) / 2 - var(--tui-thickness)))}50%{stroke-dashoffset:calc(.05 * calc(2 * 3.14159265 * calc(var(--t-diameter) / 2 - var(--tui-thickness))))}to{stroke-dashoffset:calc(2 * 3.14159265 * calc(var(--t-diameter) / 2 - var(--tui-thickness)))}}.t-circle{r:calc(var(--t-diameter) / 2 - var(--tui-thickness));stroke-dasharray:calc(2 * 3.14159265 * calc(var(--t-diameter) / 2 - var(--tui-thickness)));fill:none;stroke:inherit;stroke-width:max(var(--tui-thickness),1.5px);animation:tuiLoaderDashOffset 4s linear infinite}\n"]
    }]
  }], null, {
    size: [{
      type: Input
    }],
    inheritColor: [{
      type: Input
    }],
    overlay: [{
      type: Input
    }],
    textContent: [{
      type: Input
    }],
    loading: [{
      type: Input,
      args: ["showLoader"]
    }]
  });
})();

export {
  TUI_LOADER_DEFAULT_OPTIONS,
  TUI_LOADER_OPTIONS,
  tuiLoaderOptionsProvider,
  TuiLoader
};
//# sourceMappingURL=chunk-HZANM4AN.js.map
