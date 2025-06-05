import {
  TuiPopoverService
} from "./chunk-GZ275MQH.js";
import {
  PolymorpheusTemplate
} from "./chunk-SX7GMV2W.js";
import {
  tuiIfMap
} from "./chunk-EEGF43CM.js";
import {
  tuiClamp
} from "./chunk-UQBCXIOX.js";
import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
  inject,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵdefineDirective,
  ɵɵgetInheritedFactory
} from "./chunk-DGEURTJ6.js";
import {
  Subject,
  distinctUntilChanged,
  endWith,
  ignoreElements,
  share
} from "./chunk-IJGLK444.js";

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-let.mjs
var TuiLetContext = class {
  constructor(internalDirectiveInstance) {
    this.internalDirectiveInstance = internalDirectiveInstance;
  }
  get $implicit() {
    return this.internalDirectiveInstance.tuiLet;
  }
  get tuiLet() {
    return this.internalDirectiveInstance.tuiLet;
  }
};
var TuiLet = class _TuiLet {
  constructor() {
    inject(ViewContainerRef).createEmbeddedView(inject(TemplateRef), new TuiLetContext(this));
  }
  /**
   * Asserts the correct type of the context for the template that `TuiLet` will render.
   *
   * The presence of this method is a signal to the Ivy template type-check compiler that the
   * `TuiLet` structural directive renders its template with a specific context type.
   */
  static ngTemplateContextGuard(_dir, _ctx) {
    return true;
  }
  static {
    this.ɵfac = function TuiLet_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiLet)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiLet,
      selectors: [["", "tuiLet", ""]],
      inputs: {
        tuiLet: "tuiLet"
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiLet, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiLet]"
    }]
  }], function() {
    return [];
  }, {
    tuiLet: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-popover.mjs
var TuiPopoverDirective = class _TuiPopoverDirective extends PolymorpheusTemplate {
  constructor() {
    super(...arguments);
    this.service = inject(TuiPopoverService);
    this.open$ = new Subject();
    this.options = {};
    this.open = false;
    this.openChange = this.open$.pipe(distinctUntilChanged(), tuiIfMap(() => this.service.open(this, this.options).pipe(ignoreElements(), endWith(false))), share());
  }
  ngOnChanges() {
    this.open$.next(this.open);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiPopoverDirective_BaseFactory;
      return function TuiPopoverDirective_Factory(__ngFactoryType__) {
        return (ɵTuiPopoverDirective_BaseFactory || (ɵTuiPopoverDirective_BaseFactory = ɵɵgetInheritedFactory(_TuiPopoverDirective)))(__ngFactoryType__ || _TuiPopoverDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiPopoverDirective,
      features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPopoverDirective, [{
    type: Directive
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-repeat-times.mjs
var MAX_VALUE = 65536;
var TuiRepeatTimesContext = class {
  constructor($implicit) {
    this.$implicit = $implicit;
  }
};
var TuiRepeatTimes = class _TuiRepeatTimes {
  constructor() {
    this.viewContainer = inject(ViewContainerRef);
    this.templateRef = inject(TemplateRef);
  }
  set tuiRepeatTimesOf(count) {
    const safeCount = Math.floor(tuiClamp(count, 0, MAX_VALUE));
    const {
      length
    } = this.viewContainer;
    if (count < length) {
      this.removeContainers(length - count);
    } else {
      this.addContainers(safeCount);
    }
  }
  addContainers(count) {
    for (let index = this.viewContainer.length; index < count; index++) {
      this.viewContainer.createEmbeddedView(this.templateRef, new TuiRepeatTimesContext(index));
    }
  }
  removeContainers(amount) {
    for (let index = 0; index < amount; index++) {
      this.viewContainer.remove();
    }
  }
  static {
    this.ɵfac = function TuiRepeatTimes_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiRepeatTimes)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiRepeatTimes,
      selectors: [["", "tuiRepeatTimes", "", "tuiRepeatTimesOf", ""]],
      inputs: {
        tuiRepeatTimesOf: "tuiRepeatTimesOf"
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiRepeatTimes, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiRepeatTimes][tuiRepeatTimesOf]"
    }]
  }], null, {
    tuiRepeatTimesOf: [{
      type: Input
    }]
  });
})();

export {
  TuiLetContext,
  TuiLet,
  TuiPopoverDirective,
  TuiRepeatTimesContext,
  TuiRepeatTimes
};
//# sourceMappingURL=chunk-XYXATMIA.js.map
