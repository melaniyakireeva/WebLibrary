import {
  WaResizeObserver
} from "./chunk-O5NPM64D.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Directive,
  Input,
  inject,
  setClassMetadata,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp
} from "./chunk-DGEURTJ6.js";

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-badged-content.mjs
var _c0 = ["*", [["tui-badge-notification", "tuiSlot", "top"]], [["", "tuiSlot", "top"]], [["tui-badge-notification", "tuiSlot", "bottom"]], [["", "tuiSlot", "bottom"]]];
var _c1 = ["*", "tui-badge-notification[tuiSlot='top']", "[tuiSlot='top']", "tui-badge-notification[tuiSlot='bottom']", "[tuiSlot='bottom']"];
var TuiBadgedContentDirective = class _TuiBadgedContentDirective {
  constructor() {
    this.tuiSlot = "top";
  }
  static {
    this.ɵfac = function TuiBadgedContentDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiBadgedContentDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiBadgedContentDirective,
      selectors: [["", "tuiSlot", ""]],
      inputs: {
        tuiSlot: "tuiSlot"
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiBadgedContentDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiSlot]"
    }]
  }], null, {
    tuiSlot: [{
      type: Input
    }]
  });
})();
var TuiBadgedContentComponent = class _TuiBadgedContentComponent {
  constructor() {
    this.cdr = inject(ChangeDetectorRef);
  }
  onResize() {
    this.cdr.detectChanges();
  }
  static {
    this.ɵfac = function TuiBadgedContentComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiBadgedContentComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiBadgedContentComponent,
      selectors: [["tui-badged-content"]],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      ngContentSelectors: _c1,
      decls: 11,
      vars: 4,
      consts: [["badgeTop", ""], ["badgeBottom", ""], [1, "t-badge", "t-badge_top", 3, "waResizeObserver"], [1, "t-border"], [1, "t-badge", "t-badge_bottom", 3, "waResizeObserver"]],
      template: function TuiBadgedContentComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵprojectionDef(_c0);
          ɵɵprojection(0);
          ɵɵelementStart(1, "div", 2, 0);
          ɵɵlistener("waResizeObserver", function TuiBadgedContentComponent_Template_div_waResizeObserver_1_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onResize());
          });
          ɵɵprojection(3, 1);
          ɵɵelementStart(4, "div", 3);
          ɵɵprojection(5, 2);
          ɵɵelementEnd()();
          ɵɵelementStart(6, "div", 4, 1);
          ɵɵlistener("waResizeObserver", function TuiBadgedContentComponent_Template_div_waResizeObserver_6_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onResize());
          });
          ɵɵprojection(8, 3);
          ɵɵelementStart(9, "div", 3);
          ɵɵprojection(10, 4);
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          const badgeTop_r2 = ɵɵreference(2);
          const badgeBottom_r3 = ɵɵreference(7);
          ɵɵadvance();
          ɵɵstyleProp("--t-badge-height", badgeTop_r2.offsetHeight, "px");
          ɵɵadvance(5);
          ɵɵstyleProp("--t-badge-height", badgeBottom_r3.offsetHeight, "px");
        }
      },
      dependencies: [WaResizeObserver],
      styles: ["[_nghost-%COMP%]{--tui-radius: var(--tui-radius-l);--t-badge-height: 0;--t-corner-offset: calc((var(--tui-radius) * 1.4142 - var(--tui-radius)) * 1 / 1.4142);position:relative;display:inline-block;block-size:-webkit-fit-content;block-size:-moz-fit-content;block-size:fit-content;inline-size:-webkit-max-content;inline-size:max-content;color:var(--tui-background-base)}.t-badge[_ngcontent-%COMP%]{--t-offset: calc(var(--t-badge-height) * -.5 + var(--t-corner-offset));position:absolute;display:flex}.t-badge_top[_ngcontent-%COMP%]{top:var(--t-offset);right:var(--t-offset)}.t-badge_bottom[_ngcontent-%COMP%]{bottom:var(--t-offset);right:var(--t-offset)}.t-border[_ngcontent-%COMP%]:not(:empty){display:flex;border-radius:6rem;box-shadow:0 0 0 1px currentColor;background:currentColor}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiBadgedContentComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-badged-content",
      imports: [TuiBadgedContentDirective, WaResizeObserver],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<ng-content />

<div
    #badgeTop
    class="t-badge t-badge_top"
    [style.--t-badge-height.px]="badgeTop.offsetHeight"
    (waResizeObserver)="onResize()"
>
    <ng-content select="tui-badge-notification[tuiSlot='top']" />
    <div class="t-border">
        <ng-content select="[tuiSlot='top']" />
    </div>
</div>

<div
    #badgeBottom
    class="t-badge t-badge_bottom"
    [style.--t-badge-height.px]="badgeBottom.offsetHeight"
    (waResizeObserver)="onResize()"
>
    <ng-content select="tui-badge-notification[tuiSlot='bottom']" />
    <div class="t-border">
        <ng-content select="[tuiSlot='bottom']" />
    </div>
</div>
`,
      styles: [":host{--tui-radius: var(--tui-radius-l);--t-badge-height: 0;--t-corner-offset: calc((var(--tui-radius) * 1.4142 - var(--tui-radius)) * 1 / 1.4142);position:relative;display:inline-block;block-size:-webkit-fit-content;block-size:-moz-fit-content;block-size:fit-content;inline-size:-webkit-max-content;inline-size:max-content;color:var(--tui-background-base)}.t-badge{--t-offset: calc(var(--t-badge-height) * -.5 + var(--t-corner-offset));position:absolute;display:flex}.t-badge_top{top:var(--t-offset);right:var(--t-offset)}.t-badge_bottom{bottom:var(--t-offset);right:var(--t-offset)}.t-border:not(:empty){display:flex;border-radius:6rem;box-shadow:0 0 0 1px currentColor;background:currentColor}\n"]
    }]
  }], null, null);
})();
var TuiBadgedContent = [TuiBadgedContentDirective, TuiBadgedContentComponent];

export {
  TuiBadgedContentDirective,
  TuiBadgedContentComponent,
  TuiBadgedContent
};
//# sourceMappingURL=chunk-OQPBBQUM.js.map
