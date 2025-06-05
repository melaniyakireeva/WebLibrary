import {
  TUI_MONTHS
} from "./chunk-4XVFG3K5.js";
import {
  Pipe,
  inject,
  setClassMetadata,
  ɵɵdefinePipe
} from "./chunk-DGEURTJ6.js";
import {
  map
} from "./chunk-IJGLK444.js";

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-pipes-month.mjs
var TuiMonthPipe = class _TuiMonthPipe {
  constructor() {
    this.months$ = inject(TUI_MONTHS);
  }
  transform({
    month
  }) {
    return this.months$.pipe(map((months) => months[month] || months[0]));
  }
  static {
    this.ɵfac = function TuiMonthPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiMonthPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "tuiMonth",
      type: _TuiMonthPipe,
      pure: true,
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiMonthPipe, [{
    type: Pipe,
    args: [{
      standalone: true,
      name: "tuiMonth"
    }]
  }], null, null);
})();

export {
  TuiMonthPipe
};
//# sourceMappingURL=chunk-J7CSEIVW.js.map
