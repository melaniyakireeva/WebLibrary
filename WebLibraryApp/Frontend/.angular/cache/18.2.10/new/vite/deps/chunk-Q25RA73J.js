import {
  TuiWithTextfieldDropdown
} from "./chunk-YOOG7IEM.js";
import {
  TUI_DATA_LIST_HOST,
  TuiDropdownDirective,
  TuiWithDropdownOpen,
  tuiDropdownOpen,
  tuiDropdownOptionsProvider
} from "./chunk-IL5BKGHZ.js";
import {
  TuiControl
} from "./chunk-RG72SIOT.js";
import {
  tuiProvide
} from "./chunk-UQBCXIOX.js";
import {
  Directive,
  setClassMetadata,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵdefineDirective,
  ɵɵgetInheritedFactory
} from "./chunk-DGEURTJ6.js";

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-directives-button-select.mjs
var TuiButtonSelect = class _TuiButtonSelect extends TuiControl {
  constructor() {
    super(...arguments);
    this.open = tuiDropdownOpen();
    this.size = "s";
  }
  handleOption(option) {
    this.onChange(option);
    this.open.set(false);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiButtonSelect_BaseFactory;
      return function TuiButtonSelect_Factory(__ngFactoryType__) {
        return (ɵTuiButtonSelect_BaseFactory || (ɵTuiButtonSelect_BaseFactory = ɵɵgetInheritedFactory(_TuiButtonSelect)))(__ngFactoryType__ || _TuiButtonSelect);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiButtonSelect,
      selectors: [["button", "tuiButtonSelect", ""]],
      standalone: true,
      features: [ɵɵProvidersFeature([
        // TODO: Add checkmark once we properly implement new Select, then add to demo
        tuiProvide(TUI_DATA_LIST_HOST, _TuiButtonSelect),
        tuiDropdownOptionsProvider({
          align: "right"
        })
      ]), ɵɵHostDirectivesFeature([TuiDropdownDirective, TuiWithDropdownOpen, TuiWithTextfieldDropdown]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiButtonSelect, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "button[tuiButtonSelect]",
      providers: [
        // TODO: Add checkmark once we properly implement new Select, then add to demo
        tuiProvide(TUI_DATA_LIST_HOST, TuiButtonSelect),
        tuiDropdownOptionsProvider({
          align: "right"
        })
      ],
      hostDirectives: [TuiDropdownDirective, TuiWithDropdownOpen, TuiWithTextfieldDropdown]
    }]
  }], null, null);
})();

export {
  TuiButtonSelect
};
//# sourceMappingURL=chunk-Q25RA73J.js.map
