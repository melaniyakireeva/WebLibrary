import {
  TUI_ASSETS_PATH
} from "./chunk-SYK4K5AT.js";
import {
  Pipe,
  inject,
  setClassMetadata,
  ɵɵdefinePipe
} from "./chunk-DGEURTJ6.js";

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-pipes-flag.mjs
var TuiFlagPipe = class _TuiFlagPipe {
  constructor() {
    this.staticPath = inject(TUI_ASSETS_PATH);
  }
  transform(countryIsoCode) {
    if (!countryIsoCode) {
      return null;
    }
    return `${this.staticPath}/flags/${countryIsoCode.toLowerCase()}.svg`;
  }
  static {
    this.ɵfac = function TuiFlagPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiFlagPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "tuiFlag",
      type: _TuiFlagPipe,
      pure: true,
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFlagPipe, [{
    type: Pipe,
    args: [{
      standalone: true,
      name: "tuiFlag"
    }]
  }], null, null);
})();

export {
  TuiFlagPipe
};
//# sourceMappingURL=chunk-MMJEZJXJ.js.map
