import {
  FormArray,
  FormGroup
} from "./chunk-5GCG6HC6.js";
import {
  DestroyRef,
  EnvironmentInjector,
  InjectionToken,
  Injector,
  RuntimeError,
  assertInInjectionContext,
  assertNotInReactiveContext,
  computed,
  createComponent,
  effect,
  inject,
  isSignal,
  signal,
  untracked
} from "./chunk-DGEURTJ6.js";
import {
  Observable,
  ReplaySubject,
  takeUntil
} from "./chunk-IJGLK444.js";
import {
  __spreadValues
} from "./chunk-3OV72XIM.js";

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-utils-math.mjs
function tuiClamp(value, min, max) {
  ngDevMode && console.assert(!Number.isNaN(value));
  ngDevMode && console.assert(!Number.isNaN(min));
  ngDevMode && console.assert(!Number.isNaN(max));
  ngDevMode && console.assert(max >= min);
  return Math.min(max, Math.max(min, value));
}
function tuiInRange(value, fromInclude, toExclude) {
  ngDevMode && console.assert(!Number.isNaN(value));
  ngDevMode && console.assert(!Number.isNaN(fromInclude));
  ngDevMode && console.assert(!Number.isNaN(toExclude));
  ngDevMode && console.assert(fromInclude < toExclude);
  return value >= fromInclude && value < toExclude;
}
function tuiNormalizeToIntNumber(value, min, max) {
  ngDevMode && console.assert(Number.isInteger(min));
  ngDevMode && console.assert(Number.isInteger(max));
  ngDevMode && console.assert(min <= max);
  if (Number.isNaN(value) || value <= min) {
    return min;
  }
  if (value >= max) {
    return max;
  }
  return Math.round(value);
}
function tuiQuantize(value, quantum) {
  ngDevMode && console.assert(Number.isFinite(value));
  ngDevMode && console.assert(Number.isFinite(quantum));
  ngDevMode && console.assert(quantum > 0);
  const remainder = value % quantum;
  return remainder < quantum / 2 ? value - remainder : value + quantum - remainder;
}
var MAX_PRECISION = 292;
function calculate(value, precision, func) {
  if (value === Infinity) {
    return value;
  }
  ngDevMode && console.assert(!Number.isNaN(value), "Value must be number");
  ngDevMode && console.assert(Number.isInteger(precision), "Precision must be integer");
  precision = Math.min(precision, MAX_PRECISION);
  const pair = `${value}e`.split("e");
  const tempValue = func(Number(`${pair[0]}e${Number(pair[1]) + precision}`));
  const processedPair = `${tempValue}e`.split("e");
  return Number(`${processedPair[0]}e${Number(processedPair[1]) - precision}`);
}
function tuiRound(value, precision = 0) {
  return calculate(value, precision, Math.round);
}
function tuiCeil(value, precision = 0) {
  return calculate(value, precision, Math.ceil);
}
function tuiFloor(value, precision = 0) {
  return calculate(value, precision, Math.floor);
}
function tuiTrunc(value, precision = 0) {
  return calculate(value, precision, Math.trunc);
}
function tuiRoundWith({
  value,
  precision,
  method
}) {
  switch (method) {
    case "ceil":
      return tuiCeil(value, precision);
    case "floor":
      return tuiFloor(value, precision);
    case "round":
      return tuiRound(value, precision);
    default:
      return tuiTrunc(value, precision);
  }
}
function tuiSum(...args) {
  return args.reduce((a, b) => a + b, 0);
}
function tuiToInt(bool) {
  return bool ? 1 : 0;
}
function tuiToInteger(value) {
  return parseInt(value, 10);
}
function tuiToRadians(deg) {
  return deg * Math.PI / 180;
}

// node_modules/@angular/core/fesm2022/rxjs-interop.mjs
function takeUntilDestroyed(destroyRef) {
  if (!destroyRef) {
    assertInInjectionContext(takeUntilDestroyed);
    destroyRef = inject(DestroyRef);
  }
  const destroyed$ = new Observable((observer) => {
    const unregisterFn = destroyRef.onDestroy(observer.next.bind(observer));
    return unregisterFn;
  });
  return (source) => {
    return source.pipe(takeUntil(destroyed$));
  };
}
function toObservable(source, options) {
  !options?.injector && assertInInjectionContext(toObservable);
  const injector = options?.injector ?? inject(Injector);
  const subject = new ReplaySubject(1);
  const watcher = effect(() => {
    let value;
    try {
      value = source();
    } catch (err) {
      untracked(() => subject.error(err));
      return;
    }
    untracked(() => subject.next(value));
  }, {
    injector,
    manualCleanup: true
  });
  injector.get(DestroyRef).onDestroy(() => {
    watcher.destroy();
    subject.complete();
  });
  return subject.asObservable();
}
function toSignal(source, options) {
  ngDevMode && assertNotInReactiveContext(toSignal, "Invoking `toSignal` causes new subscriptions every time. Consider moving `toSignal` outside of the reactive context and read the signal value where needed.");
  const requiresCleanup = !options?.manualCleanup;
  requiresCleanup && !options?.injector && assertInInjectionContext(toSignal);
  const cleanupRef = requiresCleanup ? options?.injector?.get(DestroyRef) ?? inject(DestroyRef) : null;
  const equal = makeToSignalEqual(options?.equal);
  let state;
  if (options?.requireSync) {
    state = signal({
      kind: 0
      /* StateKind.NoValue */
    }, {
      equal
    });
  } else {
    state = signal({
      kind: 1,
      value: options?.initialValue
    }, {
      equal
    });
  }
  const sub = source.subscribe({
    next: (value) => state.set({
      kind: 1,
      value
    }),
    error: (error) => {
      if (options?.rejectErrors) {
        throw error;
      }
      state.set({
        kind: 2,
        error
      });
    }
    // Completion of the Observable is meaningless to the signal. Signals don't have a concept of
    // "complete".
  });
  if (options?.requireSync && state().kind === 0) {
    throw new RuntimeError(601, (typeof ngDevMode === "undefined" || ngDevMode) && "`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.");
  }
  cleanupRef?.onDestroy(sub.unsubscribe.bind(sub));
  return computed(() => {
    const current = state();
    switch (current.kind) {
      case 1:
        return current.value;
      case 2:
        throw current.error;
      case 0:
        throw new RuntimeError(601, (typeof ngDevMode === "undefined" || ngDevMode) && "`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.");
    }
  }, {
    equal: options?.equal
  });
}
function makeToSignalEqual(userEquality = Object.is) {
  return (a, b) => a.kind === 1 && b.kind === 1 && userEquality(a.value, b.value);
}

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-utils-miscellaneous.mjs
function tuiArrayRemove(array, index) {
  return array.slice(0, Math.max(index, 0)).concat(array.slice(Math.max(index + 1, 0)));
}
function tuiArrayShallowEquals(a, b) {
  return a.length === b.length && a.every((item, index) => item === b[index]);
}
function tuiArrayToggle(array, item) {
  const index = array.indexOf(item);
  return index === -1 ? [...array, item] : tuiArrayRemove(array, index);
}
var changeDateSeparator = (dateString, newDateSeparator) => dateString.replaceAll(/[^0-9A-Za-zА-Яа-я]/gi, newDateSeparator);
function tuiIsControlEmpty({
  value = null
}) {
  return value === null || value === "" || Array.isArray(value) && !value.length;
}
function tuiCountFilledControls(control) {
  if (control instanceof FormArray) {
    return control.controls.reduce((acc, nestedControl) => acc + tuiCountFilledControls(nestedControl), 0);
  }
  if (control instanceof FormGroup) {
    return Object.values(control.controls).reduce((acc, nestedControl) => acc + tuiCountFilledControls(nestedControl), 0);
  }
  return tuiToInt(!tuiIsControlEmpty(control));
}
function tuiCreateToken(defaults) {
  return tuiCreateTokenFromFactory(() => defaults);
}
function tuiCreateTokenFromFactory(factory) {
  return factory ? new InjectionToken("", {
    factory
  }) : new InjectionToken("");
}
function tuiIsString(value) {
  return typeof value === "string";
}
function tuiDefaultSort(x, y) {
  if (x === y) {
    return 0;
  }
  if (tuiIsString(x) && tuiIsString(y)) {
    return x.localeCompare(y);
  }
  return x > y ? 1 : -1;
}
function tuiDirectiveBinding(token, key, initial, options = {
  self: true
}) {
  const result = isSignal(initial) ? initial : signal(initial);
  const directive = inject(token, options);
  const output = directive[`${key.toString()}Change`];
  let previous;
  effect(() => {
    const value = result();
    if (previous === value) {
      return;
    }
    if (isSignal(directive[key])) {
      directive[key].set(value);
    } else {
      directive[key] = value;
    }
    directive.ngOnChanges?.({});
    output?.emit?.(value);
    previous = value;
  }, {
    allowSignalWrites: true
  });
  return result;
}
function tuiDirectiveListener(token, key, options = {
  self: true
}) {
  const prop = inject(token, options)?.[key];
  return isSignal(prop) ? prop : toSignal(prop);
}
function tuiDistanceBetweenTouches({
  touches
}) {
  return Math.hypot((touches[0]?.clientX ?? 0) - (touches[1]?.clientX ?? 0), (touches[0]?.clientY ?? 0) - (touches[1]?.clientY ?? 0));
}
function tuiEaseInOutQuad(t) {
  ngDevMode && console.assert(t >= 0 && t <= 1, "Input must be between 0 and 1 inclusive but received ", t);
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}
function tuiFlatLength(array) {
  return array.reduce((count, section) => count + section.length, 0);
}
function tuiGetOriginalArrayFromQueryList(queryList) {
  let array = [];
  queryList.find((_item, _index, originalArray) => {
    array = originalArray;
    return true;
  });
  return array;
}
function tuiIsFalsy(value) {
  return !value;
}
function tuiIsNumber(value) {
  return typeof value === "number";
}
function tuiIsObject(value) {
  return typeof value === "object" && !!value;
}
function tuiIsPresent(value) {
  return value !== null && value !== void 0;
}
function tuiIsValidUrl(url) {
  return new RegExp(
    String.raw`^([a-zA-Z]+:\/\/)?` + // protocol
    String.raw`((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|localhost|` + // domain name
    String.raw`((\d{1,3}\.){3}\d{1,3}))` + // OR IP (v4) address
    String.raw`(\:\d+)?(\/[-a-z\d%_.~+\:]*)*` + // port and path
    String.raw`(\?[)(;&a-z\d%_.~+=-]*)?` + // query string
    String.raw`(\#[-a-z\d_]*)?$`,
    // fragment locator
    "i"
  ).test(url);
}
function tuiMarkControlAsTouchedAndValidate(control) {
  if (control instanceof FormArray) {
    control.controls.forEach((nestedControl) => {
      tuiMarkControlAsTouchedAndValidate(nestedControl);
    });
  }
  if (control instanceof FormGroup) {
    Object.values(control.controls).forEach((nestedControl) => {
      tuiMarkControlAsTouchedAndValidate(nestedControl);
    });
  }
  control.markAsTouched();
  control.updateValueAndValidity();
}
function tuiNullableSame(a, b, handler) {
  if (a === null) {
    return b === null;
  }
  if (b === null) {
    return false;
  }
  return handler(a, b);
}
function tuiProvide(provide, useExisting, multi = false) {
  return {
    provide,
    useExisting,
    multi
  };
}
function tuiProvideOptions(provide, options, fallback) {
  return {
    provide,
    useFactory: () => __spreadValues(__spreadValues({}, inject(provide, {
      optional: true,
      skipSelf: true
    }) || fallback), options)
  };
}
function decorateMethod(originalMethod) {
  let previousArgs = [];
  let originalFnWasCalledLeastAtOnce = false;
  let pureValue;
  return function tuiPureMethodPatched(...args) {
    const isPure = originalFnWasCalledLeastAtOnce && previousArgs.length === args.length && args.every((arg, index) => arg === previousArgs[index]);
    if (isPure) {
      return pureValue;
    }
    previousArgs = args;
    pureValue = originalMethod.apply(this, args);
    originalFnWasCalledLeastAtOnce = true;
    return pureValue;
  };
}
function decorateGetter(originalGetter, propertyKey, enumerable = true) {
  return function tuiPureGetterPatched() {
    const value = originalGetter.call(this);
    Object.defineProperty(this, propertyKey, {
      enumerable,
      value
    });
    return value;
  };
}
function tuiPure(target, propertyKeyOrContext, descriptor) {
  if (typeof target === "function") {
    const context = propertyKeyOrContext;
    if (context.kind === "getter") {
      return decorateGetter(target, context.name);
    }
    if (context.kind === "method") {
      return decorateMethod(target);
    }
    throw new TuiPureException();
  }
  const {
    get,
    enumerable,
    value
  } = descriptor;
  const propertyKey = propertyKeyOrContext;
  if (get) {
    return {
      configurable: true,
      enumerable,
      get: decorateGetter(get, propertyKey, enumerable)
    };
  }
  if (typeof value !== "function") {
    throw new TuiPureException();
  }
  const original = value;
  return {
    configurable: true,
    enumerable,
    get() {
      let previousArgs = [];
      let originalFnWasCalledLeastAtOnce = false;
      let pureValue;
      const patched = (...args) => {
        const isPure = originalFnWasCalledLeastAtOnce && previousArgs.length === args.length && args.every((arg, index) => arg === previousArgs[index]);
        if (isPure) {
          return pureValue;
        }
        previousArgs = args;
        pureValue = original.apply(this, args);
        originalFnWasCalledLeastAtOnce = true;
        return pureValue;
      };
      Object.defineProperty(this, propertyKey, {
        configurable: true,
        value: patched
      });
      return patched;
    }
  };
}
var TuiPureException = class extends Error {
  constructor() {
    super(ngDevMode ? "tuiPure can only be used with functions or getters" : "");
  }
};
function tuiPx(value) {
  ngDevMode && console.assert(Number.isFinite(value), "Value must be finite number");
  return `${value}px`;
}
function tuiUniqBy(array, key) {
  return Array.from(array.reduce((map, item) => map.has(item[key]) ? map : map.set(item[key], item), /* @__PURE__ */ new Map()).values());
}
var MAP = tuiCreateTokenFromFactory(() => {
  const map = /* @__PURE__ */ new Map();
  inject(DestroyRef).onDestroy(() => map.forEach((component) => component.destroy()));
  return map;
});
function tuiWithStyles(component) {
  const map = inject(MAP);
  const environmentInjector = inject(EnvironmentInjector);
  if (!map.has(component)) {
    map.set(component, createComponent(component, {
      environmentInjector
    }));
  }
  return void 0;
}

export {
  tuiClamp,
  tuiInRange,
  tuiNormalizeToIntNumber,
  tuiQuantize,
  tuiRound,
  tuiCeil,
  tuiFloor,
  tuiTrunc,
  tuiRoundWith,
  tuiSum,
  tuiToInt,
  tuiToInteger,
  tuiToRadians,
  takeUntilDestroyed,
  toObservable,
  toSignal,
  tuiArrayRemove,
  tuiArrayShallowEquals,
  tuiArrayToggle,
  changeDateSeparator,
  tuiIsControlEmpty,
  tuiCountFilledControls,
  tuiCreateToken,
  tuiCreateTokenFromFactory,
  tuiIsString,
  tuiDefaultSort,
  tuiDirectiveBinding,
  tuiDirectiveListener,
  tuiDistanceBetweenTouches,
  tuiEaseInOutQuad,
  tuiFlatLength,
  tuiGetOriginalArrayFromQueryList,
  tuiIsFalsy,
  tuiIsNumber,
  tuiIsObject,
  tuiIsPresent,
  tuiIsValidUrl,
  tuiMarkControlAsTouchedAndValidate,
  tuiNullableSame,
  tuiProvide,
  tuiProvideOptions,
  tuiPure,
  TuiPureException,
  tuiPx,
  tuiUniqBy,
  tuiWithStyles
};
/*! Bundled license information:

@angular/core/fesm2022/rxjs-interop.mjs:
  (**
   * @license Angular v18.2.9
   * (c) 2010-2024 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=chunk-UQBCXIOX.js.map
