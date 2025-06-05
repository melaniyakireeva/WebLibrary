import {
  TUI_ITEMS_HANDLERS
} from "./chunk-2BKPX4BP.js";
import {
  TuiLoader
} from "./chunk-OVN7HHBM.js";
import {
  TuiDataList,
  TuiDataListComponent,
  TuiDataListDirective,
  TuiOptGroup,
  TuiOption,
  tuiAsDataListAccessor,
  tuiInjectDataListSize
} from "./chunk-IL5BKGHZ.js";
import {
  TuiElement
} from "./chunk-WLKNPQYG.js";
import {
  PolymorpheusOutlet
} from "./chunk-SX7GMV2W.js";
import {
  tuiIsNativeFocused
} from "./chunk-XQO3CN4Y.js";
import {
  EMPTY_QUERY
} from "./chunk-EEGF43CM.js";
import {
  tuiIsPresent
} from "./chunk-UQBCXIOX.js";
import {
  NgForOf,
  NgIf
} from "./chunk-6S6PAGJZ.js";
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChildren,
  forwardRef,
  inject,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-DGEURTJ6.js";

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-data-list-wrapper.mjs
function TuiDataListWrapperComponent_tui_data_list_0_button_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const text_r4 = ctx.polymorpheusOutlet;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", text_r4, " ");
  }
}
function TuiDataListWrapperComponent_tui_data_list_0_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 5, 1);
    ɵɵlistener("click", function TuiDataListWrapperComponent_tui_data_list_0_button_1_Template_button_click_0_listener() {
      const item_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.itemClick.emit(item_r2));
    });
    ɵɵelementStart(2, "span", 6);
    ɵɵtemplate(3, TuiDataListWrapperComponent_tui_data_list_0_button_1_ng_container_3_Template, 2, 1, "ng-container", 7);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const elementRef_r5 = ɵɵreference(1);
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("disabled", ctx_r2.disabledItemHandler(item_r2))("value", item_r2);
    ɵɵadvance(3);
    ɵɵproperty("polymorpheusOutlet", ctx_r2.itemContent)("polymorpheusOutletContext", ctx_r2.getContext(item_r2, elementRef_r5));
  }
}
function TuiDataListWrapperComponent_tui_data_list_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tui-data-list", 3);
    ɵɵtemplate(1, TuiDataListWrapperComponent_tui_data_list_0_button_1_Template, 4, 4, "button", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("emptyContent", ctx_r2.emptyContent)("size", ctx_r2.size);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r2.$cast(ctx_r2.items));
  }
}
function TuiDataListWrapperComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-loader", 8);
  }
}
var _c0 = ["labels", ""];
function TuiDataListGroupWrapperComponent_tui_data_list_0_tui_opt_group_1_button_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const text_r4 = ctx.polymorpheusOutlet;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", text_r4, " ");
  }
}
function TuiDataListGroupWrapperComponent_tui_data_list_0_tui_opt_group_1_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 7, 1);
    ɵɵlistener("click", function TuiDataListGroupWrapperComponent_tui_data_list_0_tui_opt_group_1_button_1_Template_button_click_0_listener() {
      const item_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.itemClick.emit(item_r2));
    });
    ɵɵtemplate(2, TuiDataListGroupWrapperComponent_tui_data_list_0_tui_opt_group_1_button_1_ng_container_2_Template, 2, 1, "ng-container", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const elementRef_r5 = ɵɵreference(1);
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵproperty("disabled", ctx_r2.disabledItemHandler(item_r2))("value", item_r2);
    ɵɵadvance(2);
    ɵɵproperty("polymorpheusOutlet", ctx_r2.itemContent)("polymorpheusOutletContext", ctx_r2.getContext(item_r2, elementRef_r5));
  }
}
function TuiDataListGroupWrapperComponent_tui_data_list_0_tui_opt_group_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tui-opt-group", 5);
    ɵɵtemplate(1, TuiDataListGroupWrapperComponent_tui_data_list_0_tui_opt_group_1_button_1_Template, 3, 4, "button", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const group_r6 = ctx.$implicit;
    const index_r7 = ctx.index;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("label", ctx_r2.labels[index_r7]);
    ɵɵadvance();
    ɵɵproperty("ngForOf", group_r6);
  }
}
function TuiDataListGroupWrapperComponent_tui_data_list_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tui-data-list", 3);
    ɵɵtemplate(1, TuiDataListGroupWrapperComponent_tui_data_list_0_tui_opt_group_1_Template, 2, 2, "tui-opt-group", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("emptyContent", ctx_r2.emptyContent)("size", ctx_r2.size);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r2.items);
  }
}
function TuiDataListGroupWrapperComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-loader", 9);
  }
}
var _c1 = "[_nghost-%COMP%]{display:block}.t-content[_ngcontent-%COMP%]{flex:1;min-inline-size:0}.t-loader[_ngcontent-%COMP%]{margin:.75rem 0}";
var TuiDataListWrapperComponent = class _TuiDataListWrapperComponent {
  constructor() {
    this.itemsHandlers = inject(TUI_ITEMS_HANDLERS);
    this.optionsQuery = EMPTY_QUERY;
    this.items = [];
    this.disabledItemHandler = this.itemsHandlers.disabledItemHandler;
    this.size = tuiInjectDataListSize();
    this.itemClick = new EventEmitter();
    this.itemContent = ({
      $implicit
    }) => this.itemsHandlers.stringify($implicit);
  }
  getContext($implicit, {
    nativeElement
  }) {
    return {
      $implicit,
      active: tuiIsNativeFocused(nativeElement)
    };
  }
  getOptions(includeDisabled = false) {
    return this.optionsQuery.filter(({
      disabled
    }) => includeDisabled || !disabled).map(({
      value
    }) => value).filter(tuiIsPresent);
  }
  $cast(items) {
    return items;
  }
  static {
    this.ɵfac = function TuiDataListWrapperComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDataListWrapperComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiDataListWrapperComponent,
      selectors: [["tui-data-list-wrapper", 3, "labels", ""]],
      viewQuery: function TuiDataListWrapperComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(TuiOption, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.optionsQuery = _t);
        }
      },
      inputs: {
        items: "items",
        disabledItemHandler: "disabledItemHandler",
        emptyContent: "emptyContent",
        size: "size",
        itemContent: "itemContent"
      },
      outputs: {
        itemClick: "itemClick"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiAsDataListAccessor(_TuiDataListWrapperComponent)]), ɵɵStandaloneFeature],
      decls: 3,
      vars: 2,
      consts: [["loading", ""], ["elementRef", "elementRef"], [3, "emptyContent", "size", 4, "ngIf", "ngIfElse"], [3, "emptyContent", "size"], ["automation-id", "tui-data-list-wrapper__option", "tuiElement", "", "tuiOption", "", "type", "button", 3, "disabled", "value", "click", 4, "ngFor", "ngForOf"], ["automation-id", "tui-data-list-wrapper__option", "tuiElement", "", "tuiOption", "", "type", "button", 3, "click", "disabled", "value"], [1, "t-content"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["automation-id", "tui-data-list-wrapper__loader", 1, "t-loader"]],
      template: function TuiDataListWrapperComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, TuiDataListWrapperComponent_tui_data_list_0_Template, 2, 3, "tui-data-list", 2)(1, TuiDataListWrapperComponent_ng_template_1_Template, 1, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const loading_r6 = ɵɵreference(2);
          ɵɵproperty("ngIf", ctx.items)("ngIfElse", loading_r6);
        }
      },
      dependencies: [NgForOf, NgIf, PolymorpheusOutlet, TuiDataListComponent, TuiOption, TuiElement, TuiLoader],
      styles: ["[_nghost-%COMP%]{display:block}.t-content[_ngcontent-%COMP%]{flex:1;min-inline-size:0}.t-loader[_ngcontent-%COMP%]{margin:.75rem 0}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDataListWrapperComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-data-list-wrapper:not([labels])",
      imports: [NgForOf, NgIf, PolymorpheusOutlet, TuiDataList, TuiElement, TuiLoader],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAsDataListAccessor(TuiDataListWrapperComponent)],
      template: '<tui-data-list\n    *ngIf="items; else loading"\n    [emptyContent]="emptyContent"\n    [size]="size"\n>\n    <button\n        *ngFor="let item of $cast(items)"\n        #elementRef="elementRef"\n        automation-id="tui-data-list-wrapper__option"\n        tuiElement\n        tuiOption\n        type="button"\n        [disabled]="disabledItemHandler(item)"\n        [value]="item"\n        (click)="itemClick.emit(item)"\n    >\n        <span class="t-content">\n            <ng-container *polymorpheusOutlet="itemContent as text; context: getContext(item, elementRef)">\n                {{ text }}\n            </ng-container>\n        </span>\n    </button>\n</tui-data-list>\n<ng-template #loading>\n    <tui-loader\n        automation-id="tui-data-list-wrapper__loader"\n        class="t-loader"\n    />\n</ng-template>\n',
      styles: [":host{display:block}.t-content{flex:1;min-inline-size:0}.t-loader{margin:.75rem 0}\n"]
    }]
  }], null, {
    optionsQuery: [{
      type: ViewChildren,
      args: [forwardRef(() => TuiOption)]
    }],
    items: [{
      type: Input
    }],
    disabledItemHandler: [{
      type: Input
    }],
    emptyContent: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    itemClick: [{
      type: Output
    }],
    itemContent: [{
      type: Input
    }]
  });
})();
var TuiDataListGroupWrapperComponent = class _TuiDataListGroupWrapperComponent extends TuiDataListWrapperComponent {
  constructor() {
    super(...arguments);
    this.labels = [];
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiDataListGroupWrapperComponent_BaseFactory;
      return function TuiDataListGroupWrapperComponent_Factory(__ngFactoryType__) {
        return (ɵTuiDataListGroupWrapperComponent_BaseFactory || (ɵTuiDataListGroupWrapperComponent_BaseFactory = ɵɵgetInheritedFactory(_TuiDataListGroupWrapperComponent)))(__ngFactoryType__ || _TuiDataListGroupWrapperComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiDataListGroupWrapperComponent,
      selectors: [["tui-data-list-wrapper", "labels", ""]],
      inputs: {
        labels: "labels"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiAsDataListAccessor(_TuiDataListGroupWrapperComponent)]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
      attrs: _c0,
      decls: 3,
      vars: 2,
      consts: [["loading", ""], ["elementRef", "elementRef"], [3, "emptyContent", "size", 4, "ngIf", "ngIfElse"], [3, "emptyContent", "size"], [3, "label", 4, "ngFor", "ngForOf"], [3, "label"], ["automation-id", "tui-data-list-wrapper__option", "tuiElement", "", "tuiOption", "", "type", "button", 3, "disabled", "value", "click", 4, "ngFor", "ngForOf"], ["automation-id", "tui-data-list-wrapper__option", "tuiElement", "", "tuiOption", "", "type", "button", 3, "click", "disabled", "value"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"], [1, "t-loader"]],
      template: function TuiDataListGroupWrapperComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, TuiDataListGroupWrapperComponent_tui_data_list_0_Template, 2, 3, "tui-data-list", 2)(1, TuiDataListGroupWrapperComponent_ng_template_1_Template, 1, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const loading_r8 = ɵɵreference(2);
          ɵɵproperty("ngIf", ctx.items)("ngIfElse", loading_r8);
        }
      },
      dependencies: [NgForOf, NgIf, PolymorpheusOutlet, TuiDataListComponent, TuiOption, TuiOptGroup, TuiElement, TuiLoader],
      styles: [_c1],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDataListGroupWrapperComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-data-list-wrapper[labels]",
      imports: [NgForOf, NgIf, PolymorpheusOutlet, TuiDataList, TuiElement, TuiLoader],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAsDataListAccessor(TuiDataListGroupWrapperComponent)],
      template: '<tui-data-list\n    *ngIf="items; else loading"\n    [emptyContent]="emptyContent"\n    [size]="size"\n>\n    <tui-opt-group\n        *ngFor="let group of items; let index = index"\n        [label]="labels[index]"\n    >\n        <button\n            *ngFor="let item of group"\n            #elementRef="elementRef"\n            automation-id="tui-data-list-wrapper__option"\n            tuiElement\n            tuiOption\n            type="button"\n            [disabled]="disabledItemHandler(item)"\n            [value]="item"\n            (click)="itemClick.emit(item)"\n        >\n            <ng-container *polymorpheusOutlet="itemContent as text; context: getContext(item, elementRef)">\n                {{ text }}\n            </ng-container>\n        </button>\n    </tui-opt-group>\n</tui-data-list>\n<ng-template #loading>\n    <tui-loader class="t-loader" />\n</ng-template>\n',
      styles: [":host{display:block}.t-content{flex:1;min-inline-size:0}.t-loader{margin:.75rem 0}\n"]
    }]
  }], null, {
    labels: [{
      type: Input
    }]
  });
})();
var TuiDataListWrapper = [TuiDataListWrapperComponent, TuiDataListGroupWrapperComponent, TuiDataListDirective];

export {
  TuiDataListWrapperComponent,
  TuiDataListGroupWrapperComponent,
  TuiDataListWrapper
};
//# sourceMappingURL=chunk-IEIOM67R.js.map
