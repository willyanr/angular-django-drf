import {
  Directionality,
  Platform,
  RtlScrollAxisType,
  coerceElement,
  getRtlScrollAxisType
} from "./chunk-FCRCI3NC.js";
import {
  DOCUMENT,
  isPlatformBrowser
} from "./chunk-VLDRFU3T.js";
import {
  ApplicationRef,
  ChangeDetectionStrategy,
  Component,
  ComponentFactoryResolver$1,
  ContentChild,
  DestroyRef,
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  InputFlags,
  NgModule,
  NgZone,
  Optional,
  Output,
  PLATFORM_ID,
  RuntimeError,
  ViewChild,
  assertInInjectionContext,
  assertNotInReactiveContext,
  booleanAttribute,
  computed,
  effect,
  inject,
  input,
  numberAttribute,
  runInInjectionContext,
  setClassMetadata,
  signal,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵloadQuery,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵqueryRefresh,
  ɵɵtemplate,
  ɵɵviewQuery
} from "./chunk-LAIKGTKG.js";
import {
  animationFrameScheduler,
  fromEvent,
  merge
} from "./chunk-JGGXWAGP.js";
import "./chunk-SCZKBD5B.js";
import {
  BehaviorSubject,
  EMPTY,
  Observable,
  Subject,
  __async,
  __spreadValues,
  delay,
  distinctUntilChanged,
  expand,
  finalize,
  fromPromise,
  map,
  of,
  switchMap,
  take,
  takeUntil,
  takeWhile,
  tap,
  throttleTime
} from "./chunk-6U6QUIVA.js";

// node_modules/@angular/core/fesm2022/rxjs-interop.mjs
function toSignal(source, options) {
  ngDevMode && assertNotInReactiveContext(toSignal, "Invoking `toSignal` causes new subscriptions every time. Consider moving `toSignal` outside of the reactive context and read the signal value where needed.");
  const requiresCleanup = !options?.manualCleanup;
  requiresCleanup && !options?.injector && assertInInjectionContext(toSignal);
  const cleanupRef = requiresCleanup ? options?.injector?.get(DestroyRef) ?? inject(DestroyRef) : null;
  let state;
  if (options?.requireSync) {
    state = signal({
      kind: 0
      /* StateKind.NoValue */
    });
  } else {
    state = signal({ kind: 1, value: options?.initialValue });
  }
  const sub = source.subscribe({
    next: (value) => state.set({ kind: 1, value }),
    error: (error) => {
      if (options?.rejectErrors) {
        throw error;
      }
      state.set({ kind: 2, error });
    }
    // Completion of the Observable is meaningless to the signal. Signals don't have a concept of
    // "complete".
  });
  if (ngDevMode && options?.requireSync && state().kind === 0) {
    throw new RuntimeError(601, "`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.");
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
        throw new RuntimeError(601, "`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.");
    }
  });
}

// node_modules/ngx-scrollbar/fesm2022/ngx-scrollbar-smooth-scroll.mjs
var NEWTON_ITERATIONS = 4;
var NEWTON_MIN_SLOPE = 1e-3;
var SUBDIVISION_PRECISION = 1e-7;
var SUBDIVISION_MAX_ITERATIONS = 10;
var kSplineTableSize = 11;
var kSampleStepSize = 1 / (kSplineTableSize - 1);
var float32ArraySupported = typeof Float32Array === "function";
function A(aA1, aA2) {
  return 1 - 3 * aA2 + 3 * aA1;
}
function B(aA1, aA2) {
  return 3 * aA2 - 6 * aA1;
}
function C(aA1) {
  return 3 * aA1;
}
function calcBezier(aT, aA1, aA2) {
  return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
}
function getSlope(aT, aA1, aA2) {
  return 3 * A(aA1, aA2) * aT * aT + 2 * B(aA1, aA2) * aT + C(aA1);
}
function binarySubdivide(aX, aA, aB, mX1, mX2) {
  let currentX, currentT, i = 0;
  do {
    currentT = aA + (aB - aA) / 2;
    currentX = calcBezier(currentT, mX1, mX2) - aX;
    if (currentX > 0) {
      aB = currentT;
    } else {
      aA = currentT;
    }
  } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
  return currentT;
}
function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
  for (let i = 0; i < NEWTON_ITERATIONS; ++i) {
    let currentSlope = getSlope(aGuessT, mX1, mX2);
    if (currentSlope === 0) {
      return aGuessT;
    }
    let currentX = calcBezier(aGuessT, mX1, mX2) - aX;
    aGuessT -= currentX / currentSlope;
  }
  return aGuessT;
}
function LinearEasing(x) {
  return x;
}
function bezier(mX1, mY1, mX2, mY2) {
  if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
    throw new Error("bezier x values must be in [0, 1] range");
  }
  if (mX1 === mY1 && mX2 === mY2) {
    return LinearEasing;
  }
  let sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
  for (let i = 0; i < kSplineTableSize; ++i) {
    sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
  }
  function getTForX(aX) {
    let intervalStart = 0;
    let currentSample = 1;
    let lastSample = kSplineTableSize - 1;
    for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
      intervalStart += kSampleStepSize;
    }
    --currentSample;
    let dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
    let guessForT = intervalStart + dist * kSampleStepSize;
    let initialSlope = getSlope(guessForT, mX1, mX2);
    if (initialSlope >= NEWTON_MIN_SLOPE) {
      return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
    } else if (initialSlope === 0) {
      return guessForT;
    } else {
      return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
    }
  }
  return function BezierEasing(x) {
    if (x === 0) {
      return 0;
    }
    if (x === 1) {
      return 1;
    }
    return calcBezier(getTForX(x), mY1, mY2);
  };
}
var SMOOTH_SCROLL_OPTIONS = new InjectionToken("SMOOTH_SCROLL_OPTIONS");
var _SmoothScrollManager = class _SmoothScrollManager {
  get _w() {
    return this._document.defaultView;
  }
  /**
   * Timing method
   */
  get _now() {
    return this._w.performance?.now?.bind(this._w.performance) || Date.now;
  }
  constructor(_document, _platform, customDefaultOptions) {
    this._document = _document;
    this._platform = _platform;
    this._onGoingScrolls = /* @__PURE__ */ new Map();
    this._defaultOptions = __spreadValues({
      duration: 468,
      easing: {
        x1: 0.42,
        y1: 0,
        x2: 0.58,
        y2: 1
      }
    }, customDefaultOptions);
  }
  /**
   * changes scroll position inside an element
   */
  _scrollElement(el, x, y) {
    el.scrollLeft = x;
    el.scrollTop = y;
  }
  /**
   * Handles a given parameter of type HTMLElement, ElementRef or selector
   */
  _getElement(el, parent) {
    if (typeof el === "string") {
      return (parent || this._document).querySelector(el);
    }
    return coerceElement(el);
  }
  /**
   * Initializes a destroyer stream, re-initializes it if the element is already being scrolled
   */
  _initSmoothScroll(el) {
    if (this._onGoingScrolls.has(el)) {
      this._onGoingScrolls.get(el).next();
    }
    return this._onGoingScrolls.set(el, new Subject()).get(el);
  }
  /**
   * Checks if smooth scroll has reached, cleans up the smooth scroll stream and resolves its promise
   */
  _isFinished(context, destroyed, resolve) {
    if (context.currentX !== context.x || context.currentY !== context.y) {
      return true;
    }
    destroyed.next();
    resolve();
    return false;
  }
  /**
   * Terminates an ongoing smooth scroll
   */
  _interrupted(el, destroyed) {
    return merge(fromEvent(el, "wheel", {
      passive: true,
      capture: true
    }), fromEvent(el, "touchmove", {
      passive: true,
      capture: true
    }), destroyed).pipe(take(1));
  }
  /**
   * Deletes the destroyer function, runs if the smooth scroll has finished or interrupted
   */
  _destroy(el, destroyed) {
    destroyed.complete();
    this._onGoingScrolls.delete(el);
  }
  /**
   * A function called recursively that, given a context, steps through scrolling
   */
  _step(context) {
    return new Observable((subscriber) => {
      let elapsed = (this._now() - context.startTime) / context.duration;
      elapsed = elapsed > 1 ? 1 : elapsed;
      const value = context.easing(elapsed);
      context.currentX = context.startX + (context.x - context.startX) * value;
      context.currentY = context.startY + (context.y - context.startY) * value;
      this._scrollElement(context.scrollable, context.currentX, context.currentY);
      animationFrameScheduler.schedule(() => subscriber.next(context));
    });
  }
  _applyScrollToOptions(el, options) {
    if (!options.duration) {
      this._scrollElement(el, options.left, options.top);
      return Promise.resolve();
    }
    const destroyed = this._initSmoothScroll(el);
    const context = {
      scrollable: el,
      startTime: this._now(),
      startX: el.scrollLeft,
      startY: el.scrollTop,
      x: options.left == null ? el.scrollLeft : ~~options.left,
      y: options.top == null ? el.scrollTop : ~~options.top,
      duration: options.duration,
      easing: bezier(options.easing.x1, options.easing.y1, options.easing.x2, options.easing.y2)
    };
    return new Promise((resolve) => {
      of(null).pipe(expand(() => this._step(context).pipe(takeWhile((currContext) => this._isFinished(currContext, destroyed, resolve)))), takeUntil(this._interrupted(el, destroyed)), finalize(() => this._destroy(el, destroyed))).subscribe();
    });
  }
  /**
   * Scrolls to the specified offsets. This is a normalized version of the browser's native scrollTo
   * method, since browsers are not consistent about what scrollLeft means in RTL. For this method
   * left and right always refer to the left and right side of the scrolling container irrespective
   * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
   * in an RTL context.
   * @param scrollable element
   * @param customOptions specified the offsets to scroll to.
   */
  scrollTo(scrollable, customOptions) {
    if (isPlatformBrowser(this._platform)) {
      const el = this._getElement(scrollable);
      const isRtl = getComputedStyle(el).direction === "rtl";
      const rtlScrollAxisType = getRtlScrollAxisType();
      const options = __spreadValues(__spreadValues(__spreadValues({}, this._defaultOptions), customOptions), {
        // Rewrite start & end offsets as right or left offsets.
        left: customOptions.left == null ? isRtl ? customOptions.end : customOptions.start : customOptions.left,
        right: customOptions.right == null ? isRtl ? customOptions.start : customOptions.end : customOptions.right
      });
      if (options.bottom != null) {
        options.top = el.scrollHeight - el.clientHeight - options.bottom;
      }
      if (isRtl && rtlScrollAxisType !== RtlScrollAxisType.NORMAL) {
        if (options.left != null) {
          options.right = el.scrollWidth - el.clientWidth - options.left;
        }
        if (rtlScrollAxisType === RtlScrollAxisType.INVERTED) {
          options.left = options.right;
        } else if (rtlScrollAxisType === RtlScrollAxisType.NEGATED) {
          options.left = options.right ? -options.right : options.right;
        }
      } else {
        if (options.right != null) {
          options.left = el.scrollWidth - el.clientWidth - options.right;
        }
      }
      return this._applyScrollToOptions(el, options);
    }
    return Promise.resolve();
  }
  /**
   * Scroll to element by reference or selector
   */
  scrollToElement(scrollable, target, customOptions = {}) {
    const scrollableEl = this._getElement(scrollable);
    const targetEl = this._getElement(target, scrollableEl);
    const options = __spreadValues(__spreadValues({}, customOptions), {
      left: targetEl.offsetLeft + (customOptions.left || 0),
      top: targetEl.offsetTop + (customOptions.top || 0)
    });
    return targetEl ? this.scrollTo(scrollableEl, options) : Promise.resolve();
  }
};
_SmoothScrollManager.ɵfac = function SmoothScrollManager_Factory(t) {
  return new (t || _SmoothScrollManager)(ɵɵinject(DOCUMENT), ɵɵinject(PLATFORM_ID), ɵɵinject(SMOOTH_SCROLL_OPTIONS, 8));
};
_SmoothScrollManager.ɵprov = ɵɵdefineInjectable({
  token: _SmoothScrollManager,
  factory: _SmoothScrollManager.ɵfac,
  providedIn: "root"
});
var SmoothScrollManager = _SmoothScrollManager;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SmoothScrollManager, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [SMOOTH_SCROLL_OPTIONS]
    }]
  }], null);
})();
var _SmoothScroll = class _SmoothScroll {
  constructor(element, smoothScroll) {
    this.element = element;
    this.smoothScroll = smoothScroll;
  }
  scrollTo(options) {
    return this.smoothScroll.scrollTo(this.element, options);
  }
  scrollToElement(target, options) {
    return this.smoothScroll.scrollToElement(this.element, target, options);
  }
};
_SmoothScroll.ɵfac = function SmoothScroll_Factory(t) {
  return new (t || _SmoothScroll)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(SmoothScrollManager));
};
_SmoothScroll.ɵdir = ɵɵdefineDirective({
  type: _SmoothScroll,
  selectors: [["", "smoothScroll", ""], ["", "smooth-scroll", ""]],
  exportAs: ["smoothScroll"],
  standalone: true
});
var SmoothScroll = _SmoothScroll;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SmoothScroll, [{
    type: Directive,
    args: [{
      selector: "[smoothScroll], [smooth-scroll]",
      exportAs: "smoothScroll",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: SmoothScrollManager
  }], null);
})();

// node_modules/ngx-scrollbar/fesm2022/ngx-scrollbar.mjs
var _c0 = ["sticky"];
var _c1 = "[_nghost-%COMP%]{position:absolute;inset:0;pointer-events:none;min-width:calc(var(--viewport-width) * 1px);min-height:calc(var(--viewport-height) * 1px)}.ng-scrollbar-sticky[_ngcontent-%COMP%]{top:calc(var(--_scrollbar-wrapper-top) * 1px);left:calc(var(--_scrollbar-wrapper-left) * 1px);right:calc(var(--_scrollbar-wrapper-right) * 1px);height:calc(var(--_scrollbar-wrapper-height) * 1px);width:calc(var(--_scrollbar-wrapper-width) * 1px);position:sticky;z-index:1}.ng-scrollbar-track[_ngcontent-%COMP%]{top:var(--_scrollbar-track-top);bottom:var(--_scrollbar-track-bottom);right:var(--_scrollbar-track-right);left:var(--_scrollbar-track-left);pointer-events:var(--_scrollbar-pointer-events);opacity:var(--_scrollbar-opacity);background-color:var(--scrollbar-track-color);transition:var(--_scrollbar-transition);border-radius:var(--scrollbar-border-radius);position:absolute;cursor:default;z-index:1}.ng-scrollbar-thumb[_ngcontent-%COMP%]{box-sizing:border-box;position:absolute;transition:var(--scrollbar-thumb-transition);border-radius:var(--scrollbar-border-radius);height:var(--_thumb-height);width:var(--_thumb-width);animation-name:_ngcontent-%COMP%_scrollbarThumbAnimation;animation-duration:1ms;animation-timing-function:linear}@keyframes _ngcontent-%COMP%_scrollbarThumbAnimation{0%{translate:var(--_scrollbar-thumb-transform-from)}to{translate:var(--_scrollbar-thumb-transform-to)}}";
function Scrollbars_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "scrollbar-y");
  }
}
function Scrollbars_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "scrollbar-x");
  }
}
var _c2 = ["contentWrapper"];
var _c3 = ["*"];
var _c4 = ["externalViewport", ""];
var _c5 = "[_nghost-%COMP%]{display:block;position:relative;overflow:hidden;max-height:100%;max-width:100%;--scrollbar-border-radius: 7px;--scrollbar-thickness: 5;--scrollbar-offset: 4;--scrollbar-track-color: transparent;--scrollbar-track-transition: height ease-out .15s, width ease-out .15s;--scrollbar-thumb-color: rgba(0, 0, 0, .2);--scrollbar-thumb-hover-color: var(--scrollbar-thumb-color);--scrollbar-hover-thickness: var(--scrollbar-thickness);--scrollbar-thumb-transition: none;--scrollbar-thumb-min-size: 20;--scrollbar-hover-transition-duration: .4s;--scrollbar-hover-transition-delay: .8s;--scrollbar-overscroll-behavior: initial;--scrollbar-mobile-overscroll-behavior: none;--_scrollbar-transition: var(--scrollbar-track-transition);--_scrollbar-opacity: initial;--_scrollbar-thickness: calc(var(--scrollbar-thickness) + var(--scrollbar-offset) * 2);--_scrollbar-pointer-events: auto;--_scrollbar-offset-px: calc(var(--scrollbar-offset) * 1px);--_scrollbar-thickness-px: calc(var(--scrollbar-thickness) * 1px);--_scrollbar-hover-thickness-px: calc(var(--scrollbar-hover-thickness) * 1px);--_viewport-padding-top: 0;--_viewport-padding-bottom: 0;--_viewport-padding-left: 0;--_viewport-padding-right: 0;--_horizontal-thumb-display: block;--_vertical-thumb-display: block;--_viewport-overflow: auto;--_thumb-x-color: var(--scrollbar-thumb-color);--_thumb-y-color: var(--scrollbar-thumb-color);--_track-y-thickness: var(--_scrollbar-thickness-px);--_track-x-thickness: var(--_scrollbar-thickness-px);--_viewport-overscroll-behavior: var(--scrollbar-overscroll-behavior);--_scrollbar-content-width: fit-content}[_nghost-%COMP%]{--_vertical-top: var(--_scrollbar-offset-px);--_vertical-bottom: var(--_scrollbar-offset-px);--_horizontal-left: var(--_scrollbar-offset-px);--_horizontal-right: var(--_scrollbar-offset-px);--_horizontal-top: initial;--_horizontal-bottom: var(--_scrollbar-offset-px);--_scrollbar-wrapper-x-top: calc(var(--viewport-height) - var(--_scrollbar-thickness));--reached-offset: 1px;--reached-offset-top: var(--reached-offset);--reached-offset-bottom: var(--reached-offset);--reached-offset-start: var(--reached-offset);--reached-offset-end: var(--reached-offset);--_viewport_scroll-timeline: unset;--_animation-timeline-y: unset;--_scrollbar-y-thumb-transform-to-value: unset;--_scrollbar-x-thumb-transform-to-value: unset;--_scrollbar-thumb-transform-from: unset;--_scrollbar-thumb-transform-to: unset}.ng-scrollbar-external-viewport[_nghost-%COMP%]     .ng-scroll-viewport{min-height:100%;min-width:100%;height:100%;max-height:100%;max-width:100%}.ng-scroll-viewport[_nghost-%COMP%], .ng-scrollbar-external-viewport[_nghost-%COMP%]     .ng-scroll-viewport{position:relative;overflow:var(--_viewport-overflow);scroll-timeline:var(--_viewport_scroll-timeline);box-sizing:border-box!important;-webkit-overflow-scrolling:touch;will-change:scroll-position;-webkit-user-select:var(--_viewport-user-select);user-select:var(--_viewport-user-select);overscroll-behavior:var(--_viewport-overscroll-behavior)}[_nghost-%COMP%]     .ng-scroll-content{width:var(--_scrollbar-content-width);z-index:1;min-width:100%;min-height:100%;contain:content;padding:var(--_viewport-padding-top, 0) var(--_viewport-padding-right, 0) var(--_viewport-padding-bottom, 0) var(--_viewport-padding-left, 0)}.ng-scroll-viewport[_nghost-%COMP%], .ng-scrollbar-external-viewport[_nghost-%COMP%]     .ng-scroll-viewport{scrollbar-width:none}.ng-scroll-viewport[_nghost-%COMP%]::-webkit-scrollbar, .ng-scrollbar-external-viewport[_nghost-%COMP%]     .ng-scroll-viewport::-webkit-scrollbar{display:none}[position=invertX][_nghost-%COMP%], [position=invertAll][_nghost-%COMP%]{--_horizontal-top: var(--_scrollbar-offset-px);--_horizontal-bottom: initial;--_scrollbar-wrapper-x-top: 0}[dir=ltr][_nghost-%COMP%]{--_scrollbar-wrapper-y-right: initial;--_vertical-right: var(--_scrollbar-offset-px);--_vertical-left: initial;--_scrollbar-wrapper-y-left: calc(var(--viewport-width) - var(--_scrollbar-thickness))}[dir=ltr][position=invertY][_nghost-%COMP%], [dir=ltr][position=invertAll][_nghost-%COMP%]{--_vertical-left: var(--_scrollbar-offset-px);--_vertical-right: initial;--_scrollbar-wrapper-y-left: 0}[dir=rtl][_nghost-%COMP%]{--_scrollbar-wrapper-y-left: initial;--_vertical-left: var(--_scrollbar-offset-px);--_vertical-right: initial;--_scrollbar-wrapper-y-right: calc(var(--viewport-width) - var(--_scrollbar-thickness))}[dir=rtl][position=invertY][_nghost-%COMP%], [dir=rtl][position=invertAll][_nghost-%COMP%]{--_vertical-right: var(--_scrollbar-offset-px);--_vertical-left: initial;--_scrollbar-wrapper-y-right: 0}[verticalUsed=true][horizontalUsed=true][_nghost-%COMP%]{--_scrollbar-thickness-margin: calc(var(--scrollbar-thickness) + var(--scrollbar-offset) * 3);--_scrollbar-thickness-margin-px: calc(var(--_scrollbar-thickness-margin) * 1px)}[horizontalUsed=true][_nghost-%COMP%]{--_vertical-top: var(--_scrollbar-offset-px);--_vertical-bottom: var(--_scrollbar-thickness-margin-px)}[horizontalUsed=true][position=invertX][_nghost-%COMP%], [horizontalUsed=true][position=invertAll][_nghost-%COMP%]{--_vertical-top: var(--_scrollbar-thickness-margin-px);--_vertical-bottom: var(--_scrollbar-offset-px)}[verticalUsed=true][dir=ltr][_nghost-%COMP%]{--_horizontal-left: var(--_scrollbar-offset-px);--_horizontal-right: var(--_scrollbar-thickness-margin-px)}[verticalUsed=true][dir=rtl][_nghost-%COMP%]{--_horizontal-left: var(--_scrollbar-thickness-margin-px);--_horizontal-right: var(--_scrollbar-offset-px)}[verticalUsed=true][position=invertY][dir=ltr][_nghost-%COMP%], [verticalUsed=true][position=invertAll][dir=ltr][_nghost-%COMP%]{--_horizontal-left: var(--_scrollbar-thickness-margin-px);--_horizontal-right: var(--_scrollbar-offset-px)}[verticalUsed=true][position=invertY][dir=rtl][_nghost-%COMP%], [verticalUsed=true][position=invertAll][dir=rtl][_nghost-%COMP%]{--_horizontal-left: var(--_scrollbar-offset-px);--_horizontal-right: var(--_scrollbar-thickness-margin-px)}[appearance=standard][verticalUsed=true][dir=ltr][_nghost-%COMP%]{--_viewport-padding-left: 0;--_viewport-padding-right: calc(var(--_scrollbar-thickness) * 1px)}[appearance=standard][verticalUsed=true][dir=rtl][_nghost-%COMP%]{--_viewport-padding-left: calc(var(--_scrollbar-thickness) * 1px);--_viewport-padding-right: 0}[appearance=standard][verticalUsed=true][position=invertY][dir=ltr][_nghost-%COMP%], [appearance=standard][verticalUsed=true][position=invertAll][dir=ltr][_nghost-%COMP%]{--_viewport-padding-left: calc(var(--_scrollbar-thickness) * 1px);--_viewport-padding-right: 0}[appearance=standard][verticalUsed=true][position=invertY][dir=rtl][_nghost-%COMP%], [appearance=standard][verticalUsed=true][position=invertAll][dir=rtl][_nghost-%COMP%]{--_viewport-padding-left: 0;--_viewport-padding-right: calc(var(--_scrollbar-thickness) * 1px)}[appearance=standard][horizontalUsed=true][_nghost-%COMP%]{--_viewport-padding-top: 0;--_viewport-padding-bottom: calc(var(--_scrollbar-thickness) * 1px)}[appearance=standard][horizontalUsed=true][position=invertX][_nghost-%COMP%], [appearance=standard][horizontalUsed=true][position=invertAll][_nghost-%COMP%]{--_viewport-padding-top: calc(var(--_scrollbar-thickness) * 1px);--_viewport-padding-bottom: 0}[visibility=hover][_nghost-%COMP%]{--_scrollbar-opacity: 0;--_scrollbar-transition: var(--scrollbar-track-transition), opacity var(--scrollbar-hover-transition-duration) var(--scrollbar-hover-transition-delay)}[visibility=hover][_nghost-%COMP%]:hover, [visibility=hover][_nghost-%COMP%]:active, [visibility=hover][_nghost-%COMP%]:focus{--_scrollbar-opacity: 1;--_scrollbar-transition: var(--scrollbar-track-transition), opacity var(--scrollbar-hover-transition-duration)}[dir=ltr][_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=start]{left:0;right:unset}[dir=ltr][_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=end]{right:0;left:unset}[dir=rtl][_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=start]{right:0;left:unset}[dir=rtl][_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=end]{left:0;right:unset}[_nghost-%COMP%]     .ng-scroll-reached-wrapper, [_nghost-%COMP%]     .scroll-reached-trigger-element{position:absolute;-webkit-user-select:none;user-select:none;pointer-events:none;z-index:-9999}[_nghost-%COMP%]     .ng-scroll-reached-wrapper{visibility:hidden;inset:0;min-width:calc(var(--viewport-width) * 1px);min-height:calc(var(--viewport-height) * 1px)}[_nghost-%COMP%]     [isHorizontallyScrollable=false] .scroll-reached-trigger-element[trigger=end]{display:none}[_nghost-%COMP%]     [isVerticallyScrollable=false] .scroll-reached-trigger-element[trigger=bottom]{display:none}[_nghost-%COMP%]     .scroll-reached-trigger-element{background:red}[_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=top], [_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=bottom]{left:0;right:0}[_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=start], [_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=end]{top:0;bottom:0}[_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=top]{top:0;height:var(--reached-offset-top)}[_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=bottom]{bottom:0;height:var(--reached-offset-bottom)}[_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=start]{width:var(--reached-offset-start)}[_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=end]{width:var(--reached-offset-end)}[verticalUsed=true][_nghost-%COMP%]{--_timeline-scope: --scrollerY;--_animation-timeline-y: --scrollerY;--_viewport_scroll-timeline: --scrollerY y;--_scrollbar-y-thumb-transform-to-value: calc(var(--track-y-length) - var(--thumb-y-length))}[horizontalUsed=true][_nghost-%COMP%]{--_timeline-scope: --scrollerX;--_animation-timeline-x: --scrollerX;--_viewport_scroll-timeline: --scrollerX x;--_scrollbar-x-thumb-transform-to-value: calc(var(--track-x-length) - var(--thumb-x-length))}[verticalUsed=true][horizontalUsed=true][_nghost-%COMP%]{--_timeline-scope: --scrollerX, --scrollerY;--_viewport_scroll-timeline: --scrollerX x, --scrollerY y}[orientation=vertical][_nghost-%COMP%]{--_viewport-overflow: hidden auto;--_scrollbar-content-width: unset}[orientation=horizontal][_nghost-%COMP%]{--_viewport-overflow: auto hidden}[disableInteraction=true][_nghost-%COMP%]{--_scrollbar-pointer-events: none}[isVerticallyScrollable=false][_nghost-%COMP%]{--_vertical-thumb-display: none}[isHorizontallyScrollable=false][_nghost-%COMP%]{--_horizontal-thumb-display: none}[dragging=x][_nghost-%COMP%], [dragging=y][_nghost-%COMP%]{--_viewport-user-select: none}[horizontalUsed=true][_nghost-%COMP%]{--thumb-x-length: max(calc(var(--viewport-width) * var(--track-x-length) / var(--content-width)), var(--scrollbar-thumb-min-size))}[verticalUsed=true][_nghost-%COMP%]{--thumb-y-length: max(calc(var(--viewport-height) * var(--track-y-length) / var(--content-height)), var(--scrollbar-thumb-min-size))}[dragging=x][_nghost-%COMP%]{--_track-x-thickness: calc(var(--scrollbar-hover-thickness) * 1px);--_thumb-x-color: var(--scrollbar-thumb-hover-color)}[dragging=y][_nghost-%COMP%]{--_track-y-thickness: calc(var(--scrollbar-hover-thickness) * 1px);--_thumb-y-color: var(--scrollbar-thumb-hover-color)}[mobile=true][_nghost-%COMP%]{--_viewport-overscroll-behavior: var(--scrollbar-mobile-overscroll-behavior)}";
var ScrollbarUpdateReason;
(function(ScrollbarUpdateReason2) {
  ScrollbarUpdateReason2["AfterInit"] = "AfterInit";
  ScrollbarUpdateReason2["Resized"] = "ResizeObserver";
})(ScrollbarUpdateReason || (ScrollbarUpdateReason = {}));
var NG_SCROLLBAR_OPTIONS = new InjectionToken("NG_SCROLLBAR_OPTIONS");
var ViewportClasses;
(function(ViewportClasses2) {
  ViewportClasses2["Viewport"] = "ng-scroll-viewport";
  ViewportClasses2["Content"] = "ng-scroll-content";
})(ViewportClasses || (ViewportClasses = {}));
var ViewportAdapter = class {
  /** Viewport clientHeight */
  get offsetHeight() {
    return this.nativeElement.offsetHeight;
  }
  /** Viewport clientWidth */
  get offsetWidth() {
    return this.nativeElement.offsetWidth;
  }
  /** Viewport scrollTop */
  get scrollTop() {
    return this.nativeElement.scrollTop;
  }
  /** Viewport scrollLeft */
  get scrollLeft() {
    return this.nativeElement.scrollLeft;
  }
  /** Content height, falls back to scroll height */
  get contentHeight() {
    return this.contentWrapperElement?.offsetHeight;
  }
  /** Content width, falls back to scroll height */
  get contentWidth() {
    return this.contentWrapperElement?.offsetWidth;
  }
  /** The horizontal remaining scrollable distance */
  get scrollMaxX() {
    return this.contentWidth - this.offsetWidth;
  }
  /** The vertical remaining scrollable distance */
  get scrollMaxY() {
    return this.contentHeight - this.offsetHeight;
  }
  constructor(nativeElement) {
    this.nativeElement = nativeElement;
    nativeElement.classList.add(ViewportClasses.Viewport);
  }
  /**
   * Initialize viewport
   */
  init(contentSelector, spacerSelector) {
    if (spacerSelector) {
      spacerSelector.style.position = "relative";
      this.contentWrapperElement = spacerSelector;
    }
    let realContentWrapper = contentSelector ?? this.nativeElement?.firstElementChild;
    realContentWrapper?.classList.add(ViewportClasses.Content);
    if (!this.contentWrapperElement && realContentWrapper) {
      this.contentWrapperElement = realContentWrapper;
    }
  }
  /**
   * Scroll viewport vertically
   */
  scrollYTo(value) {
    this.nativeElement.scrollTop = value;
  }
  /**
   * Scroll viewport horizontally
   */
  scrollXTo(value) {
    this.nativeElement.scrollLeft = value;
  }
};
var _ScrollViewport = class _ScrollViewport {
  constructor() {
    this.viewport = new ViewportAdapter(inject(ElementRef).nativeElement);
  }
};
_ScrollViewport.ɵfac = function ScrollViewport_Factory(t) {
  return new (t || _ScrollViewport)();
};
_ScrollViewport.ɵdir = ɵɵdefineDirective({
  type: _ScrollViewport,
  selectors: [["", "scrollViewport", ""]],
  standalone: true
});
var ScrollViewport = _ScrollViewport;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollViewport, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[scrollViewport]"
    }]
  }], null, null);
})();
function resizeSensor(element, throttleDuration, isScrollbar) {
  let reason = ScrollbarUpdateReason.AfterInit;
  let resizeObserver;
  const stream = new Observable((observer) => {
    resizeObserver = new ResizeObserver(() => {
      observer.next(reason);
      reason = ScrollbarUpdateReason.Resized;
    });
    resizeObserver.observe(element);
    if (!isScrollbar && element.firstElementChild) {
      resizeObserver.observe(element.firstElementChild);
    }
    return () => {
      resizeObserver?.disconnect();
    };
  });
  return throttleDuration ? stream.pipe(throttleTime(throttleDuration, null, {
    leading: true,
    trailing: true
  })) : stream;
}
var NG_SCROLLBAR = new InjectionToken("_NG_SCROLLBAR");
var defaultOptions = {
  scrollTimelinePolyfill: "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js",
  trackClass: "",
  thumbClass: "",
  orientation: "auto",
  appearance: "standard",
  visibility: "native",
  position: "native",
  clickScrollDuration: 50,
  sensorThrottleTime: 0,
  disableSensor: false,
  disableInteraction: false
};
var _ScrollbarManager = class _ScrollbarManager {
  constructor(options) {
    this.isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
    this.document = inject(DOCUMENT);
    this.window = this.document.defaultView;
    this.globalOptions = {};
    this.rtlScrollAxisType = getRtlScrollAxisType();
    this.scrollTimelinePolyfill = signal(null);
    this.globalOptions = options ? __spreadValues(__spreadValues({}, defaultOptions), options) : defaultOptions;
    if (this.isBrowser && !this.window["ScrollTimeline"] && !CSS.supports("animation-timeline", "scroll()")) {
      this.initPolyfill();
    }
  }
  initPolyfill() {
    return __async(this, null, function* () {
      try {
        const script = this.document.createElement("script");
        script.src = this.globalOptions.scrollTimelinePolyfill;
        yield new Promise((resolve, reject) => {
          script.onload = resolve;
          script.onerror = reject;
          this.document.head.appendChild(script);
        });
        if (this.window["ScrollTimeline"]) {
          this.scrollTimelinePolyfill.set(window["ScrollTimeline"]);
        } else {
          console.error("ScrollTimeline is not attached to the window object.");
        }
      } catch (error) {
        console.error("Error loading ScrollTimeline script:", error);
      }
    });
  }
};
_ScrollbarManager.ɵfac = function ScrollbarManager_Factory(t) {
  return new (t || _ScrollbarManager)(ɵɵinject(NG_SCROLLBAR_OPTIONS, 8));
};
_ScrollbarManager.ɵprov = ɵɵdefineInjectable({
  token: _ScrollbarManager,
  factory: _ScrollbarManager.ɵfac,
  providedIn: "root"
});
var ScrollbarManager = _ScrollbarManager;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollbarManager, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NG_SCROLLBAR_OPTIONS]
    }]
  }], null);
})();
var _NgScrollbarCore = class _NgScrollbarCore {
  constructor() {
    this.platform = inject(Platform);
    this.zone = inject(NgZone);
    this.injector = inject(Injector);
    this.isMobile = this.platform.SAFARI || this.platform.ANDROID;
    this.dir = inject(Directionality);
    this.manager = inject(ScrollbarManager);
    this.smoothScroll = inject(SmoothScrollManager);
    this.nativeElement = inject(ElementRef).nativeElement;
    this.rtlScrollAxisType = this.manager.rtlScrollAxisType;
    this.dragging = signal("none");
    this.orientation = input(this.manager.globalOptions.orientation);
    this.visibility = input(this.manager.globalOptions.visibility);
    this.disableInteraction = input(this.manager.globalOptions.disableInteraction, {
      transform: booleanAttribute
    });
    this.interactionDisabled = computed(() => {
      return this.isMobile || this.disableInteraction();
    });
    this.disableSensor = input(this.manager.globalOptions.disableSensor, {
      transform: booleanAttribute
    });
    this.sensorThrottleTime = input(this.manager.globalOptions.sensorThrottleTime, {
      transform: numberAttribute
    });
    this.viewportDimension = signal({
      contentHeight: 0,
      contentWidth: 0,
      offsetHeight: 0,
      offsetWidth: 0
    });
    this.state = computed(() => {
      let verticalUsed = false;
      let horizontalUsed = false;
      let isVerticallyScrollable = false;
      let isHorizontallyScrollable = false;
      const orientation = this.orientation();
      const visibility = this.visibility();
      const viewport = this.viewportDimension();
      if (orientation === "auto" || orientation === "vertical") {
        isVerticallyScrollable = viewport.contentHeight > viewport.offsetHeight;
        verticalUsed = visibility === "always" || isVerticallyScrollable;
      }
      if (orientation === "auto" || orientation === "horizontal") {
        isHorizontallyScrollable = viewport.contentWidth > viewport.offsetWidth;
        horizontalUsed = visibility === "always" || isHorizontallyScrollable;
      }
      return {
        verticalUsed,
        horizontalUsed,
        isVerticallyScrollable,
        isHorizontallyScrollable
      };
    });
    this.isVerticallyScrollable = computed(() => this.state().isVerticallyScrollable);
    this.isHorizontallyScrollable = computed(() => this.state().isHorizontallyScrollable);
    this.verticalUsed = computed(() => this.state().verticalUsed);
    this.horizontalUsed = computed(() => this.state().horizontalUsed);
    this.trackClickDuration = this.manager.globalOptions.clickScrollDuration;
    this.appearance = this.manager.globalOptions.appearance;
    this.position = this.manager.globalOptions.position;
    this.trackClass = this.manager.globalOptions.trackClass;
    this.thumbClass = this.manager.globalOptions.thumbClass;
    this.afterInit = new EventEmitter();
    this.afterUpdate = new EventEmitter();
  }
  ngOnInit() {
    runInInjectionContext(this.injector, () => {
      this.direction = toSignal(this.dir.change.pipe(map(() => this.dir.value)), {
        initialValue: this.dir.value
      });
      effect((onCleanup) => {
        if (this.disableSensor()) {
          this.sizeChangeSub?.unsubscribe();
        } else {
          if (this.platform.isBrowser) {
            this.sizeChangeSub?.unsubscribe();
            this.sizeChangeSub = resizeSensor(this.viewport.nativeElement, this.sensorThrottleTime()).pipe(tap((reason) => this.update(reason))).subscribe();
          }
        }
        onCleanup(() => this.sizeChangeSub?.unsubscribe());
      });
    });
  }
  ngAfterViewInit() {
    if (this.platform.isBrowser && this.disableSensor()) {
      requestAnimationFrame(() => {
        this.update(ScrollbarUpdateReason.AfterInit);
      });
    }
  }
  /**
   * Update local state and the internal scrollbar controls
   */
  update(reason) {
    this.updateCSSVariables();
    this.zone.run(() => {
      this.viewportDimension.set({
        contentHeight: this.viewport.contentHeight,
        contentWidth: this.viewport.contentWidth,
        offsetHeight: this.viewport.offsetHeight,
        offsetWidth: this.viewport.offsetWidth
      });
      if (reason === ScrollbarUpdateReason.AfterInit) {
        this.afterInit.emit();
      } else {
        this.afterUpdate.emit();
      }
    });
  }
  /**
   * Smooth scroll functions
   */
  scrollTo(options) {
    return this.smoothScroll.scrollTo(this.viewport.nativeElement, __spreadValues({
      duration: this.trackClickDuration
    }, options));
  }
  /**
   * Scroll to element by reference or selector
   */
  scrollToElement(target, options) {
    return this.smoothScroll.scrollToElement(this.viewport.nativeElement, target, options);
  }
  /**
   * Update Essential CSS variables
   */
  updateCSSVariables() {
    this.nativeElement.style.setProperty("--content-height", `${this.viewport.contentHeight}`);
    this.nativeElement.style.setProperty("--content-width", `${this.viewport.contentWidth}`);
    this.nativeElement.style.setProperty("--viewport-height", `${this.viewport.offsetHeight}`);
    this.nativeElement.style.setProperty("--viewport-width", `${this.viewport.offsetWidth}`);
  }
};
_NgScrollbarCore.ɵfac = function NgScrollbarCore_Factory(t) {
  return new (t || _NgScrollbarCore)();
};
_NgScrollbarCore.ɵdir = ɵɵdefineDirective({
  type: _NgScrollbarCore,
  hostVars: 14,
  hostBindings: function NgScrollbarCore_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("verticalUsed", ctx.verticalUsed())("horizontalUsed", ctx.horizontalUsed())("isVerticallyScrollable", ctx.isVerticallyScrollable())("isHorizontallyScrollable", ctx.isHorizontallyScrollable())("mobile", ctx.isMobile)("dir", ctx.direction())("position", ctx.position)("dragging", ctx.dragging())("appearance", ctx.appearance)("visibility", ctx.visibility())("orientation", ctx.orientation())("disableInteraction", ctx.interactionDisabled());
      ɵɵclassProp("ng-scrollbar", true);
    }
  },
  inputs: {
    orientation: [InputFlags.SignalBased, "orientation"],
    visibility: [InputFlags.SignalBased, "visibility"],
    disableInteraction: [InputFlags.SignalBased, "disableInteraction"],
    disableSensor: [InputFlags.SignalBased, "disableSensor"],
    sensorThrottleTime: [InputFlags.SignalBased, "sensorThrottleTime"],
    trackClickDuration: [InputFlags.HasDecoratorInputTransform, "clickScrollDuration", "trackClickDuration", numberAttribute],
    appearance: "appearance",
    position: "position",
    trackClass: "trackClass",
    thumbClass: "thumbClass"
  },
  outputs: {
    afterInit: "afterInit",
    afterUpdate: "afterUpdate"
  },
  features: [ɵɵProvidersFeature([{
    provide: NG_SCROLLBAR,
    useExisting: _NgScrollbarCore
  }]), ɵɵInputTransformsFeature]
});
var NgScrollbarCore = _NgScrollbarCore;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgScrollbarCore, [{
    type: Directive,
    args: [{
      host: {
        "[class.ng-scrollbar]": "true",
        "[attr.verticalUsed]": "verticalUsed()",
        "[attr.horizontalUsed]": "horizontalUsed()",
        "[attr.isVerticallyScrollable]": "isVerticallyScrollable()",
        "[attr.isHorizontallyScrollable]": "isHorizontallyScrollable()",
        "[attr.mobile]": "isMobile",
        "[attr.dir]": "direction()",
        "[attr.position]": "position",
        "[attr.dragging]": "dragging()",
        "[attr.appearance]": "appearance",
        "[attr.visibility]": "visibility()",
        "[attr.orientation]": "orientation()",
        "[attr.disableInteraction]": "interactionDisabled()"
      },
      providers: [{
        provide: NG_SCROLLBAR,
        useExisting: NgScrollbarCore
      }]
    }]
  }], null, {
    trackClickDuration: [{
      type: Input,
      args: [{
        alias: "clickScrollDuration",
        transform: numberAttribute
      }]
    }],
    appearance: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    trackClass: [{
      type: Input
    }],
    thumbClass: [{
      type: Input
    }],
    afterInit: [{
      type: Output
    }],
    afterUpdate: [{
      type: Output
    }]
  });
})();
function preventSelection(doc) {
  return tap(() => doc.onselectstart = () => false);
}
function enableSelection(doc) {
  return tap(() => doc.onselectstart = null);
}
function stopPropagation() {
  return tap((e) => {
    e.preventDefault();
    e.stopPropagation();
  });
}
var _ThumbAdapter = class _ThumbAdapter {
  get trackMax() {
    return this.track.size - this.size;
  }
  // Get thumb client rect
  get clientRect() {
    return this.nativeElement.getBoundingClientRect();
  }
  /**
   * Stream that emits the 'scrollTo' position when a scrollbar thumb element is dragged
   * This function is called by thumb drag event using viewport or scrollbar pointer events
   */
  get dragged() {
    return fromEvent(this.nativeElement, "pointerdown").pipe(stopPropagation(), switchMap((e) => {
      let trackMaxStart;
      let scrollMaxStart;
      const dragStart = of(e).pipe(preventSelection(this.document), tap(() => {
        trackMaxStart = this.trackMax;
        scrollMaxStart = this.viewportScrollMax;
        this.setDragging(this.axis);
      }));
      const dragging = fromEvent(this.document, "pointermove").pipe(stopPropagation());
      const dragEnd = fromEvent(this.document, "pointerup", {
        capture: true
      }).pipe(stopPropagation(), enableSelection(this.document), tap(() => this.setDragging("none")));
      return dragStart.pipe(map((e2) => e2[this.pageProperty]), map((pageOffset) => pageOffset - this.dragStartOffset), switchMap((mouseDownOffset) => dragging.pipe(
        map((e2) => e2[this.clientProperty]),
        // Calculate how far the pointer is from the top/left of the scrollbar (minus the dragOffset).
        map((mouseOffset) => mouseOffset - this.track.offset),
        map((offset) => scrollMaxStart * (offset - mouseDownOffset) / trackMaxStart),
        map((position) => this.handleDrag(position, scrollMaxStart)),
        tap((position) => this.scrollTo(position)),
        takeUntil(dragEnd)
      )));
    }));
  }
  constructor() {
    this.zone = inject(NgZone);
    this.document = inject(DOCUMENT);
    this.cmp = inject(NG_SCROLLBAR);
    this.manager = inject(ScrollbarManager);
    this.track = inject(TrackAdapter);
    this.nativeElement = inject(ElementRef).nativeElement;
    effect(() => {
      const script = this.manager.scrollTimelinePolyfill();
      if (script && !this.animation) {
        this.animation = startPolyfill(script, this.nativeElement, this.cmp.viewport.nativeElement, this.axis);
      }
    });
  }
  setDragging(value) {
    this.zone.run(() => this.cmp.dragging.set(value));
  }
};
_ThumbAdapter.ɵfac = function ThumbAdapter_Factory(t) {
  return new (t || _ThumbAdapter)();
};
_ThumbAdapter.ɵdir = ɵɵdefineDirective({
  type: _ThumbAdapter
});
var ThumbAdapter = _ThumbAdapter;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThumbAdapter, [{
    type: Directive
  }], () => [], null);
})();
function startPolyfill(ScrollTimeline, element, source, axis) {
  return element.animate({
    translate: ["var(--_scrollbar-thumb-transform-from)", "var(--_scrollbar-thumb-transform-to)"]
  }, {
    fill: "both",
    easing: "linear",
    timeline: new ScrollTimeline({
      source,
      axis
    })
  });
}
var _TrackAdapter = class _TrackAdapter {
  get dragged() {
    const mouseDown$ = fromEvent(this.nativeElement, "pointerdown").pipe(stopPropagation(), preventSelection(this.document));
    const mouseUp$ = fromEvent(this.document, "pointerup", {
      passive: true
    }).pipe(enableSelection(this.document));
    const mouseMove$ = fromEvent(this.nativeElement, "pointermove", {
      passive: true
    }).pipe(map((e) => {
      this.currMousePosition = e[this.clientProperty];
      return true;
    }));
    const mouseOut$ = fromEvent(this.nativeElement, "pointerout", {
      passive: true
    }).pipe(map(() => {
      return false;
    }));
    const mouseOverTrack$ = new BehaviorSubject(true);
    return mouseDown$.pipe(switchMap((startEvent) => {
      merge(mouseMove$, mouseOut$).pipe(distinctUntilChanged(), tap((over) => mouseOverTrack$.next(over)), takeUntil(mouseUp$)).subscribe();
      fromEvent(this.thumb.nativeElement, "pointermove").pipe(stopPropagation(), takeUntil(mouseUp$)).subscribe();
      return this.onTrackFirstClick(startEvent).pipe(switchMap((final) => {
        if (final) {
          return EMPTY;
        }
        return mouseOverTrack$.pipe(switchMap((over) => {
          const currDirection = this.getScrollDirection();
          const sameDirection = this.scrollDirection === currDirection;
          return over && sameDirection ? this.onTrackOngoingMousedown() : EMPTY;
        }), finalize(() => {
          mouseOverTrack$.next(true);
        }));
      }), takeUntil(mouseUp$));
    }));
  }
  // Get track client rect
  get clientRect() {
    return this.nativeElement.getBoundingClientRect();
  }
  getScrollDirection() {
    return this.currMousePosition - this.thumb.offset > 0 ? "forward" : "backward";
  }
  constructor() {
    this.nativeElement = inject(ElementRef).nativeElement;
    this.cmp = inject(NG_SCROLLBAR);
    this.document = inject(DOCUMENT);
    effect((onCleanup) => {
      if (this.cmp.disableSensor()) {
        this.updateCSSVariables();
        this.sizeChangeSub?.unsubscribe();
      } else {
        this.sizeChangeSub = resizeSensor(this.nativeElement, this.cmp.sensorThrottleTime(), true).pipe(tap(() => this.updateCSSVariables())).subscribe();
      }
      onCleanup(() => this.sizeChangeSub?.unsubscribe());
    });
  }
  updateCSSVariables() {
    this.cmp.nativeElement.style.setProperty(this.cssLengthProperty, `${this.size}`);
  }
  /**
   * Scrolls to position when mouse is down the on the track the first time
   */
  onTrackFirstClick(e) {
    this.currMousePosition = e[this.clientProperty];
    this.scrollDirection = this.getScrollDirection();
    let value;
    let final;
    if (this.scrollDirection === "forward") {
      const scrollDownIncrement = this.viewportScrollOffset + this.viewportViewportSize;
      const scrollMax = this.viewportScrollSize - this.viewportViewportSize;
      if (scrollDownIncrement >= scrollMax) {
        value = scrollMax;
        final = true;
      } else {
        value = scrollDownIncrement;
      }
    } else {
      const scrollUpIncrement = this.viewportScrollOffset - this.viewportViewportSize;
      if (scrollUpIncrement <= 0) {
        value = 0;
        final = true;
      } else {
        value = scrollUpIncrement;
      }
    }
    return this.scrollTo(value).pipe(delay(200), map(() => final));
  }
  /**
   * Callback that is called when mouse is still down on the track
   */
  onTrackOngoingMousedown() {
    const scrollFinal = this.getRelativePosition();
    let value;
    let final;
    if (this.scrollDirection === "forward") {
      const scrollDownIncrement = this.viewportScrollOffset + this.viewportViewportSize;
      if (scrollDownIncrement >= scrollFinal) {
        value = scrollFinal;
        final = true;
      } else {
        value = scrollDownIncrement;
      }
    } else {
      const scrollUpIncrement = this.viewportScrollOffset - this.viewportViewportSize;
      if (scrollUpIncrement <= scrollFinal) {
        value = scrollFinal;
        final = true;
      } else {
        value = scrollUpIncrement;
      }
    }
    return this.scrollTo(value).pipe(takeWhile(() => !final), expand(() => this.onTrackOngoingMousedown()));
  }
  getRelativePosition() {
    const clickPosition = this.currMousePosition - this.offset;
    const current = clickPosition / this.size;
    return current * (this.viewportScrollSize - this.viewportViewportSize);
  }
};
_TrackAdapter.ɵfac = function TrackAdapter_Factory(t) {
  return new (t || _TrackAdapter)();
};
_TrackAdapter.ɵdir = ɵɵdefineDirective({
  type: _TrackAdapter,
  contentQueries: function TrackAdapter_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, ThumbAdapter, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.thumb = _t.first);
    }
  }
});
var TrackAdapter = _TrackAdapter;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TrackAdapter, [{
    type: Directive
  }], () => [], {
    thumb: [{
      type: ContentChild,
      args: [ThumbAdapter]
    }]
  });
})();
var _TrackXDirective = class _TrackXDirective extends TrackAdapter {
  constructor() {
    super(...arguments);
    this.cssLengthProperty = "--track-x-length";
    this.clientProperty = "clientX";
  }
  get offset() {
    return this.clientRect.left;
  }
  get size() {
    return this.nativeElement.clientWidth;
  }
  get viewportScrollSize() {
    return this.cmp.viewport.contentWidth;
  }
  get viewportViewportSize() {
    return this.cmp.viewport.offsetWidth;
  }
  get viewportScrollOffset() {
    return this.cmp.viewport.scrollLeft;
  }
  scrollTo(left) {
    return fromPromise(this.cmp.scrollTo({
      left
    }));
  }
};
_TrackXDirective.ɵfac = /* @__PURE__ */ (() => {
  let ɵTrackXDirective_BaseFactory;
  return function TrackXDirective_Factory(t) {
    return (ɵTrackXDirective_BaseFactory || (ɵTrackXDirective_BaseFactory = ɵɵgetInheritedFactory(_TrackXDirective)))(t || _TrackXDirective);
  };
})();
_TrackXDirective.ɵdir = ɵɵdefineDirective({
  type: _TrackXDirective,
  selectors: [["", "scrollbarTrackX", ""]],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: TrackAdapter,
    useExisting: _TrackXDirective
  }]), ɵɵInheritDefinitionFeature]
});
var TrackXDirective = _TrackXDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TrackXDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[scrollbarTrackX]",
      providers: [{
        provide: TrackAdapter,
        useExisting: TrackXDirective
      }]
    }]
  }], null, null);
})();
var _TrackYDirective = class _TrackYDirective extends TrackAdapter {
  constructor() {
    super(...arguments);
    this.cssLengthProperty = "--track-y-length";
    this.clientProperty = "clientY";
  }
  get offset() {
    return this.clientRect.top;
  }
  get size() {
    return this.nativeElement.clientHeight;
  }
  get viewportScrollSize() {
    return this.cmp.viewport.contentHeight;
  }
  get viewportViewportSize() {
    return this.cmp.viewport.offsetHeight;
  }
  get viewportScrollOffset() {
    return this.cmp.viewport.scrollTop;
  }
  scrollTo(top) {
    return fromPromise(this.cmp.scrollTo({
      top
    }));
  }
};
_TrackYDirective.ɵfac = /* @__PURE__ */ (() => {
  let ɵTrackYDirective_BaseFactory;
  return function TrackYDirective_Factory(t) {
    return (ɵTrackYDirective_BaseFactory || (ɵTrackYDirective_BaseFactory = ɵɵgetInheritedFactory(_TrackYDirective)))(t || _TrackYDirective);
  };
})();
_TrackYDirective.ɵdir = ɵɵdefineDirective({
  type: _TrackYDirective,
  selectors: [["", "scrollbarTrackY", ""]],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: TrackAdapter,
    useExisting: _TrackYDirective
  }]), ɵɵInheritDefinitionFeature]
});
var TrackYDirective = _TrackYDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TrackYDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[scrollbarTrackY]",
      providers: [{
        provide: TrackAdapter,
        useExisting: TrackYDirective
      }]
    }]
  }], null, null);
})();
var _ThumbXDirective = class _ThumbXDirective extends ThumbAdapter {
  get clientProperty() {
    return "clientX";
  }
  get pageProperty() {
    return "pageX";
  }
  get viewportScrollMax() {
    return this.cmp.viewport.scrollMaxX;
  }
  get dragStartOffset() {
    return this.clientRect.left + this.document.defaultView.pageXOffset;
  }
  get offset() {
    return this.clientRect.left;
  }
  get size() {
    return this.nativeElement.clientWidth;
  }
  constructor() {
    super();
    this.axis = "x";
    effect(() => {
      if (this.cmp.direction() === "rtl") {
        if (this.cmp.rtlScrollAxisType === RtlScrollAxisType.NEGATED) {
          this.handleDrag = (position, scrollMax) => -(scrollMax - position);
        }
        if (this.cmp.rtlScrollAxisType === RtlScrollAxisType.INVERTED) {
          this.handleDrag = (position, scrollMax) => position - scrollMax;
        }
      } else {
        this.handleDrag = (position) => position;
      }
    });
  }
  scrollTo(position) {
    this.cmp.viewport.scrollXTo(position);
  }
};
_ThumbXDirective.ɵfac = function ThumbXDirective_Factory(t) {
  return new (t || _ThumbXDirective)();
};
_ThumbXDirective.ɵdir = ɵɵdefineDirective({
  type: _ThumbXDirective,
  selectors: [["", "scrollbarThumbX", ""]],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: ThumbAdapter,
    useExisting: _ThumbXDirective
  }]), ɵɵInheritDefinitionFeature]
});
var ThumbXDirective = _ThumbXDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThumbXDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[scrollbarThumbX]",
      providers: [{
        provide: ThumbAdapter,
        useExisting: ThumbXDirective
      }]
    }]
  }], () => [], null);
})();
var _ThumbYDirective = class _ThumbYDirective extends ThumbAdapter {
  constructor() {
    super(...arguments);
    this.axis = "y";
    this.handleDrag = (position) => position;
  }
  get pageProperty() {
    return "pageY";
  }
  get viewportScrollMax() {
    return this.cmp.viewport.scrollMaxY;
  }
  get clientProperty() {
    return "clientY";
  }
  get dragStartOffset() {
    return this.clientRect.top + this.document.defaultView.pageYOffset;
  }
  get offset() {
    return this.clientRect.top;
  }
  get size() {
    return this.nativeElement.clientHeight;
  }
  scrollTo(position) {
    this.cmp.viewport.scrollYTo(position);
  }
};
_ThumbYDirective.ɵfac = /* @__PURE__ */ (() => {
  let ɵThumbYDirective_BaseFactory;
  return function ThumbYDirective_Factory(t) {
    return (ɵThumbYDirective_BaseFactory || (ɵThumbYDirective_BaseFactory = ɵɵgetInheritedFactory(_ThumbYDirective)))(t || _ThumbYDirective);
  };
})();
_ThumbYDirective.ɵdir = ɵɵdefineDirective({
  type: _ThumbYDirective,
  selectors: [["", "scrollbarThumbY", ""]],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: ThumbAdapter,
    useExisting: _ThumbYDirective
  }]), ɵɵInheritDefinitionFeature]
});
var ThumbYDirective = _ThumbYDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThumbYDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[scrollbarThumbY]",
      providers: [{
        provide: ThumbAdapter,
        useExisting: ThumbYDirective
      }]
    }]
  }], null, null);
})();
var _ScrollbarAdapter = class _ScrollbarAdapter {
  constructor() {
    this.zone = inject(NgZone);
    this.cmp = inject(NG_SCROLLBAR);
    effect((onCleanup) => {
      if (this.cmp.interactionDisabled()) {
        this.pointerEventsSub?.unsubscribe();
      } else {
        this.zone.runOutsideAngular(() => {
          this.pointerEventsSub = merge(
            // Activate scrollbar thumb drag event
            this.thumb.dragged,
            // Activate scrollbar track click event
            this.track.dragged
          ).subscribe();
        });
      }
      onCleanup(() => this.pointerEventsSub?.unsubscribe());
    });
  }
};
_ScrollbarAdapter.ɵfac = function ScrollbarAdapter_Factory(t) {
  return new (t || _ScrollbarAdapter)();
};
_ScrollbarAdapter.ɵdir = ɵɵdefineDirective({
  type: _ScrollbarAdapter,
  viewQuery: function ScrollbarAdapter_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.sticky = _t.first);
    }
  }
});
var ScrollbarAdapter = _ScrollbarAdapter;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollbarAdapter, [{
    type: Directive
  }], () => [], {
    sticky: [{
      type: ViewChild,
      args: ["sticky", {
        static: true
      }]
    }]
  });
})();
var _ScrollbarY = class _ScrollbarY extends ScrollbarAdapter {
};
_ScrollbarY.ɵfac = /* @__PURE__ */ (() => {
  let ɵScrollbarY_BaseFactory;
  return function ScrollbarY_Factory(t) {
    return (ɵScrollbarY_BaseFactory || (ɵScrollbarY_BaseFactory = ɵɵgetInheritedFactory(_ScrollbarY)))(t || _ScrollbarY);
  };
})();
_ScrollbarY.ɵcmp = ɵɵdefineComponent({
  type: _ScrollbarY,
  selectors: [["scrollbar-y"]],
  viewQuery: function ScrollbarY_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(TrackYDirective, 7);
      ɵɵviewQuery(ThumbYDirective, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.track = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.thumb = _t.first);
    }
  },
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  decls: 4,
  vars: 6,
  consts: [[1, "ng-scrollbar-sticky"], ["sticky", ""], ["scrollbarTrackY", ""], ["scrollbarThumbY", ""]],
  template: function ScrollbarY_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0, 1)(2, "div", 2);
      ɵɵelement(3, "div", 3);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵadvance(2);
      ɵɵclassMapInterpolate1("ng-scrollbar-track ", ctx.cmp.trackClass, "");
      ɵɵadvance();
      ɵɵclassMapInterpolate1("ng-scrollbar-thumb ", ctx.cmp.thumbClass, "");
    }
  },
  dependencies: [TrackYDirective, ThumbYDirective],
  styles: ["[_nghost-%COMP%]{position:absolute;inset:0;pointer-events:none;min-width:calc(var(--viewport-width) * 1px);min-height:calc(var(--viewport-height) * 1px)}.ng-scrollbar-sticky[_ngcontent-%COMP%]{top:calc(var(--_scrollbar-wrapper-top) * 1px);left:calc(var(--_scrollbar-wrapper-left) * 1px);right:calc(var(--_scrollbar-wrapper-right) * 1px);height:calc(var(--_scrollbar-wrapper-height) * 1px);width:calc(var(--_scrollbar-wrapper-width) * 1px);position:sticky;z-index:1}.ng-scrollbar-track[_ngcontent-%COMP%]{top:var(--_scrollbar-track-top);bottom:var(--_scrollbar-track-bottom);right:var(--_scrollbar-track-right);left:var(--_scrollbar-track-left);pointer-events:var(--_scrollbar-pointer-events);opacity:var(--_scrollbar-opacity);background-color:var(--scrollbar-track-color);transition:var(--_scrollbar-transition);border-radius:var(--scrollbar-border-radius);position:absolute;cursor:default;z-index:1}.ng-scrollbar-thumb[_ngcontent-%COMP%]{box-sizing:border-box;position:absolute;transition:var(--scrollbar-thumb-transition);border-radius:var(--scrollbar-border-radius);height:var(--_thumb-height);width:var(--_thumb-width);animation-name:_ngcontent-%COMP%_scrollbarThumbAnimation;animation-duration:1ms;animation-timing-function:linear}@keyframes _ngcontent-%COMP%_scrollbarThumbAnimation{0%{translate:var(--_scrollbar-thumb-transform-from)}to{translate:var(--_scrollbar-thumb-transform-to)}}", "[_nghost-%COMP%]{--_scrollbar-wrapper-top: 0;--_scrollbar-wrapper-left: var(--_scrollbar-wrapper-y-left);--_scrollbar-wrapper-right: var(--_scrollbar-wrapper-y-right);--_scrollbar-wrapper-height: var(--viewport-height);--_scrollbar-wrapper-width: var(--_scrollbar-thickness);--_scrollbar-track-top: var(--_vertical-top);--_scrollbar-track-bottom: var(--_vertical-bottom);--_scrollbar-track-right: var(--_vertical-right);--_scrollbar-track-left: var(--_vertical-left);--_thumb-height: calc(var(--thumb-y-length) * 1px);--_thumb-width: 100%;--_scrollbar-thumb-transform-from: 0 0;--_scrollbar-thumb-transform-to: 0 calc(var(--_scrollbar-y-thumb-transform-to-value) * 1px)}.ng-scrollbar-track[_ngcontent-%COMP%]{width:var(--_track-y-thickness)}.ng-scrollbar-track[_ngcontent-%COMP%]:hover{--_track-y-thickness: var(--_scrollbar-hover-thickness-px);--_thumb-y-color: var(--scrollbar-thumb-hover-color)}.ng-scrollbar-thumb[_ngcontent-%COMP%]{animation-timeline:var(--_animation-timeline-y);min-height:calc(var(--scrollbar-thumb-min-size) * 1px);display:var(--_vertical-thumb-display);background-color:var(--_thumb-y-color)}"],
  changeDetection: 0
});
var ScrollbarY = _ScrollbarY;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollbarY, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "scrollbar-y",
      template: `
    <div #sticky class="ng-scrollbar-sticky">
      <div scrollbarTrackY class="ng-scrollbar-track {{ cmp.trackClass }}">
        <div scrollbarThumbY class="ng-scrollbar-thumb {{ cmp.thumbClass }}"></div>
      </div>
    </div>
  `,
      imports: [TrackYDirective, ThumbYDirective],
      changeDetection: ChangeDetectionStrategy.OnPush,
      styles: [":host{position:absolute;inset:0;pointer-events:none;min-width:calc(var(--viewport-width) * 1px);min-height:calc(var(--viewport-height) * 1px)}.ng-scrollbar-sticky{top:calc(var(--_scrollbar-wrapper-top) * 1px);left:calc(var(--_scrollbar-wrapper-left) * 1px);right:calc(var(--_scrollbar-wrapper-right) * 1px);height:calc(var(--_scrollbar-wrapper-height) * 1px);width:calc(var(--_scrollbar-wrapper-width) * 1px);position:sticky;z-index:1}.ng-scrollbar-track{top:var(--_scrollbar-track-top);bottom:var(--_scrollbar-track-bottom);right:var(--_scrollbar-track-right);left:var(--_scrollbar-track-left);pointer-events:var(--_scrollbar-pointer-events);opacity:var(--_scrollbar-opacity);background-color:var(--scrollbar-track-color);transition:var(--_scrollbar-transition);border-radius:var(--scrollbar-border-radius);position:absolute;cursor:default;z-index:1}.ng-scrollbar-thumb{box-sizing:border-box;position:absolute;transition:var(--scrollbar-thumb-transition);border-radius:var(--scrollbar-border-radius);height:var(--_thumb-height);width:var(--_thumb-width);animation-name:scrollbarThumbAnimation;animation-duration:1ms;animation-timing-function:linear}@keyframes scrollbarThumbAnimation{0%{translate:var(--_scrollbar-thumb-transform-from)}to{translate:var(--_scrollbar-thumb-transform-to)}}\n", ":host{--_scrollbar-wrapper-top: 0;--_scrollbar-wrapper-left: var(--_scrollbar-wrapper-y-left);--_scrollbar-wrapper-right: var(--_scrollbar-wrapper-y-right);--_scrollbar-wrapper-height: var(--viewport-height);--_scrollbar-wrapper-width: var(--_scrollbar-thickness);--_scrollbar-track-top: var(--_vertical-top);--_scrollbar-track-bottom: var(--_vertical-bottom);--_scrollbar-track-right: var(--_vertical-right);--_scrollbar-track-left: var(--_vertical-left);--_thumb-height: calc(var(--thumb-y-length) * 1px);--_thumb-width: 100%;--_scrollbar-thumb-transform-from: 0 0;--_scrollbar-thumb-transform-to: 0 calc(var(--_scrollbar-y-thumb-transform-to-value) * 1px)}.ng-scrollbar-track{width:var(--_track-y-thickness)}.ng-scrollbar-track:hover{--_track-y-thickness: var(--_scrollbar-hover-thickness-px);--_thumb-y-color: var(--scrollbar-thumb-hover-color)}.ng-scrollbar-thumb{animation-timeline:var(--_animation-timeline-y);min-height:calc(var(--scrollbar-thumb-min-size) * 1px);display:var(--_vertical-thumb-display);background-color:var(--_thumb-y-color)}\n"]
    }]
  }], null, {
    track: [{
      type: ViewChild,
      args: [TrackYDirective, {
        static: true
      }]
    }],
    thumb: [{
      type: ViewChild,
      args: [ThumbYDirective, {
        static: true
      }]
    }]
  });
})();
var _ScrollbarX = class _ScrollbarX extends ScrollbarAdapter {
};
_ScrollbarX.ɵfac = /* @__PURE__ */ (() => {
  let ɵScrollbarX_BaseFactory;
  return function ScrollbarX_Factory(t) {
    return (ɵScrollbarX_BaseFactory || (ɵScrollbarX_BaseFactory = ɵɵgetInheritedFactory(_ScrollbarX)))(t || _ScrollbarX);
  };
})();
_ScrollbarX.ɵcmp = ɵɵdefineComponent({
  type: _ScrollbarX,
  selectors: [["scrollbar-x"]],
  viewQuery: function ScrollbarX_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(TrackXDirective, 7);
      ɵɵviewQuery(ThumbXDirective, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.track = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.thumb = _t.first);
    }
  },
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  decls: 4,
  vars: 7,
  consts: [[1, "ng-scrollbar-sticky"], ["sticky", ""], ["scrollbarTrackX", ""], ["scrollbarThumbX", ""]],
  template: function ScrollbarX_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0, 1)(2, "div", 2);
      ɵɵelement(3, "div", 3);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵadvance(2);
      ɵɵclassMapInterpolate1("ng-scrollbar-track ", ctx.cmp.trackClass, "");
      ɵɵadvance();
      ɵɵclassMapInterpolate1("ng-scrollbar-thumb ", ctx.cmp.thumbClass, "");
      ɵɵattribute("dir", ctx.cmp.direction());
    }
  },
  dependencies: [TrackXDirective, ThumbXDirective],
  styles: [_c1, "[_nghost-%COMP%]{--_scrollbar-wrapper-top: var(--_scrollbar-wrapper-x-top);--_scrollbar-wrapper-left: 0;--_scrollbar-wrapper-right: 0;--_scrollbar-wrapper-height: var(--_scrollbar-thickness);--_scrollbar-wrapper-width: var(--viewport-width);--_scrollbar-track-top: var(--_horizontal-top);--_scrollbar-track-bottom: var(--_horizontal-bottom);--_scrollbar-track-right: var(--_horizontal-right);--_scrollbar-track-left: var(--_horizontal-left);--_thumb-height: 100%;--_thumb-width: calc(var(--thumb-x-length) * 1px);--_scrollbar-thumb-transform-from: 0;--_scrollbar-thumb-transform-to: calc(var(--_scrollbar-x-thumb-transform-to-value) * 1px)}.ng-scrollbar-track[_ngcontent-%COMP%]{height:var(--_track-x-thickness)}.ng-scrollbar-track[_ngcontent-%COMP%]:hover{--_track-x-thickness: var(--_scrollbar-hover-thickness-px);--_thumb-x-color: var(--scrollbar-thumb-hover-color)}.ng-scrollbar-thumb[_ngcontent-%COMP%]{animation-timeline:var(--_animation-timeline-x);min-width:calc(var(--scrollbar-thumb-min-size) * 1px);display:var(--_horizontal-thumb-display);background-color:var(--_thumb-x-color)}.ng-scrollbar-thumb[dir=rtl][_ngcontent-%COMP%]{animation-name:_ngcontent-%COMP%_scrollbarThumbRTLAnimation;will-change:right;--_scrollbar-thumb-transform-to: calc(var(--_scrollbar-x-thumb-transform-to-value) * -1px)}@keyframes _ngcontent-%COMP%_scrollbarThumbRTLAnimation{0%{right:var(--_scrollbar-thumb-transform-from)}to{right:calc(var(--_scrollbar-thumb-transform-to) * -1)}}"],
  changeDetection: 0
});
var ScrollbarX = _ScrollbarX;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollbarX, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "scrollbar-x",
      template: `
    <div #sticky class="ng-scrollbar-sticky">
      <div scrollbarTrackX class="ng-scrollbar-track {{ cmp.trackClass }}">
        <div scrollbarThumbX class="ng-scrollbar-thumb {{ cmp.thumbClass }}"
             [attr.dir]="cmp.direction()"></div>
      </div>
    </div>
  `,
      imports: [TrackXDirective, ThumbXDirective],
      changeDetection: ChangeDetectionStrategy.OnPush,
      styles: [":host{position:absolute;inset:0;pointer-events:none;min-width:calc(var(--viewport-width) * 1px);min-height:calc(var(--viewport-height) * 1px)}.ng-scrollbar-sticky{top:calc(var(--_scrollbar-wrapper-top) * 1px);left:calc(var(--_scrollbar-wrapper-left) * 1px);right:calc(var(--_scrollbar-wrapper-right) * 1px);height:calc(var(--_scrollbar-wrapper-height) * 1px);width:calc(var(--_scrollbar-wrapper-width) * 1px);position:sticky;z-index:1}.ng-scrollbar-track{top:var(--_scrollbar-track-top);bottom:var(--_scrollbar-track-bottom);right:var(--_scrollbar-track-right);left:var(--_scrollbar-track-left);pointer-events:var(--_scrollbar-pointer-events);opacity:var(--_scrollbar-opacity);background-color:var(--scrollbar-track-color);transition:var(--_scrollbar-transition);border-radius:var(--scrollbar-border-radius);position:absolute;cursor:default;z-index:1}.ng-scrollbar-thumb{box-sizing:border-box;position:absolute;transition:var(--scrollbar-thumb-transition);border-radius:var(--scrollbar-border-radius);height:var(--_thumb-height);width:var(--_thumb-width);animation-name:scrollbarThumbAnimation;animation-duration:1ms;animation-timing-function:linear}@keyframes scrollbarThumbAnimation{0%{translate:var(--_scrollbar-thumb-transform-from)}to{translate:var(--_scrollbar-thumb-transform-to)}}\n", ":host{--_scrollbar-wrapper-top: var(--_scrollbar-wrapper-x-top);--_scrollbar-wrapper-left: 0;--_scrollbar-wrapper-right: 0;--_scrollbar-wrapper-height: var(--_scrollbar-thickness);--_scrollbar-wrapper-width: var(--viewport-width);--_scrollbar-track-top: var(--_horizontal-top);--_scrollbar-track-bottom: var(--_horizontal-bottom);--_scrollbar-track-right: var(--_horizontal-right);--_scrollbar-track-left: var(--_horizontal-left);--_thumb-height: 100%;--_thumb-width: calc(var(--thumb-x-length) * 1px);--_scrollbar-thumb-transform-from: 0;--_scrollbar-thumb-transform-to: calc(var(--_scrollbar-x-thumb-transform-to-value) * 1px)}.ng-scrollbar-track{height:var(--_track-x-thickness)}.ng-scrollbar-track:hover{--_track-x-thickness: var(--_scrollbar-hover-thickness-px);--_thumb-x-color: var(--scrollbar-thumb-hover-color)}.ng-scrollbar-thumb{animation-timeline:var(--_animation-timeline-x);min-width:calc(var(--scrollbar-thumb-min-size) * 1px);display:var(--_horizontal-thumb-display);background-color:var(--_thumb-x-color)}.ng-scrollbar-thumb[dir=rtl]{animation-name:scrollbarThumbRTLAnimation;will-change:right;--_scrollbar-thumb-transform-to: calc(var(--_scrollbar-x-thumb-transform-to-value) * -1px)}@keyframes scrollbarThumbRTLAnimation{0%{right:var(--_scrollbar-thumb-transform-from)}to{right:calc(var(--_scrollbar-thumb-transform-to) * -1)}}\n"]
    }]
  }], null, {
    track: [{
      type: ViewChild,
      args: [TrackXDirective, {
        static: true
      }]
    }],
    thumb: [{
      type: ViewChild,
      args: [ThumbXDirective, {
        static: true
      }]
    }]
  });
})();
var _Scrollbars = class _Scrollbars {
  constructor() {
    this.cmp = inject(NG_SCROLLBAR);
  }
};
_Scrollbars.ɵfac = function Scrollbars_Factory(t) {
  return new (t || _Scrollbars)();
};
_Scrollbars.ɵcmp = ɵɵdefineComponent({
  type: _Scrollbars,
  selectors: [["scrollbars"]],
  viewQuery: function Scrollbars_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(ScrollbarY, 5);
      ɵɵviewQuery(ScrollbarX, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.y = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.x = _t.first);
    }
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 2,
  vars: 2,
  template: function Scrollbars_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, Scrollbars_Conditional_0_Template, 1, 0, "scrollbar-y")(1, Scrollbars_Conditional_1_Template, 1, 0, "scrollbar-x");
    }
    if (rf & 2) {
      ɵɵconditional(0, ctx.cmp.verticalUsed() ? 0 : -1);
      ɵɵadvance();
      ɵɵconditional(1, ctx.cmp.horizontalUsed() ? 1 : -1);
    }
  },
  dependencies: [ScrollbarX, ScrollbarY],
  styles: ["[_nghost-%COMP%]{display:contents}"],
  changeDetection: 0
});
var Scrollbars = _Scrollbars;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Scrollbars, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "scrollbars",
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [ScrollbarX, ScrollbarY],
      template: `
    @if (cmp.verticalUsed()) {
      <scrollbar-y/>
    }
    @if (cmp.horizontalUsed()) {
      <scrollbar-x/>
    }
  `,
      styles: [":host{display:contents}\n"]
    }]
  }], null, {
    y: [{
      type: ViewChild,
      args: [ScrollbarY]
    }],
    x: [{
      type: ViewChild,
      args: [ScrollbarX]
    }]
  });
})();
var _NgScrollbar = class _NgScrollbar extends NgScrollbarCore {
  constructor() {
    super(...arguments);
    this.viewport = new ViewportAdapter(this.nativeElement);
  }
  ngOnInit() {
    this.viewport.init(this.contentWrapper.nativeElement);
    super.ngOnInit();
  }
};
_NgScrollbar.ɵfac = /* @__PURE__ */ (() => {
  let ɵNgScrollbar_BaseFactory;
  return function NgScrollbar_Factory(t) {
    return (ɵNgScrollbar_BaseFactory || (ɵNgScrollbar_BaseFactory = ɵɵgetInheritedFactory(_NgScrollbar)))(t || _NgScrollbar);
  };
})();
_NgScrollbar.ɵcmp = ɵɵdefineComponent({
  type: _NgScrollbar,
  selectors: [["ng-scrollbar", 3, "externalViewport", ""]],
  viewQuery: function NgScrollbar_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c2, 7);
      ɵɵviewQuery(Scrollbars, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentWrapper = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.scrollbars = _t.first);
    }
  },
  exportAs: ["ngScrollbar"],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: NG_SCROLLBAR,
    useExisting: _NgScrollbar
  }]), ɵɵHostDirectivesFeature([ScrollViewport]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c3,
  decls: 4,
  vars: 0,
  consts: [["contentWrapper", ""]],
  template: function NgScrollbar_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", null, 0);
      ɵɵprojection(2);
      ɵɵelement(3, "scrollbars");
      ɵɵelementEnd();
    }
  },
  dependencies: [Scrollbars],
  styles: ["[_nghost-%COMP%]{display:block;position:relative;overflow:hidden;max-height:100%;max-width:100%;--scrollbar-border-radius: 7px;--scrollbar-thickness: 5;--scrollbar-offset: 4;--scrollbar-track-color: transparent;--scrollbar-track-transition: height ease-out .15s, width ease-out .15s;--scrollbar-thumb-color: rgba(0, 0, 0, .2);--scrollbar-thumb-hover-color: var(--scrollbar-thumb-color);--scrollbar-hover-thickness: var(--scrollbar-thickness);--scrollbar-thumb-transition: none;--scrollbar-thumb-min-size: 20;--scrollbar-hover-transition-duration: .4s;--scrollbar-hover-transition-delay: .8s;--scrollbar-overscroll-behavior: initial;--scrollbar-mobile-overscroll-behavior: none;--_scrollbar-transition: var(--scrollbar-track-transition);--_scrollbar-opacity: initial;--_scrollbar-thickness: calc(var(--scrollbar-thickness) + var(--scrollbar-offset) * 2);--_scrollbar-pointer-events: auto;--_scrollbar-offset-px: calc(var(--scrollbar-offset) * 1px);--_scrollbar-thickness-px: calc(var(--scrollbar-thickness) * 1px);--_scrollbar-hover-thickness-px: calc(var(--scrollbar-hover-thickness) * 1px);--_viewport-padding-top: 0;--_viewport-padding-bottom: 0;--_viewport-padding-left: 0;--_viewport-padding-right: 0;--_horizontal-thumb-display: block;--_vertical-thumb-display: block;--_viewport-overflow: auto;--_thumb-x-color: var(--scrollbar-thumb-color);--_thumb-y-color: var(--scrollbar-thumb-color);--_track-y-thickness: var(--_scrollbar-thickness-px);--_track-x-thickness: var(--_scrollbar-thickness-px);--_viewport-overscroll-behavior: var(--scrollbar-overscroll-behavior);--_scrollbar-content-width: fit-content}[_nghost-%COMP%]{--_vertical-top: var(--_scrollbar-offset-px);--_vertical-bottom: var(--_scrollbar-offset-px);--_horizontal-left: var(--_scrollbar-offset-px);--_horizontal-right: var(--_scrollbar-offset-px);--_horizontal-top: initial;--_horizontal-bottom: var(--_scrollbar-offset-px);--_scrollbar-wrapper-x-top: calc(var(--viewport-height) - var(--_scrollbar-thickness));--reached-offset: 1px;--reached-offset-top: var(--reached-offset);--reached-offset-bottom: var(--reached-offset);--reached-offset-start: var(--reached-offset);--reached-offset-end: var(--reached-offset);--_viewport_scroll-timeline: unset;--_animation-timeline-y: unset;--_scrollbar-y-thumb-transform-to-value: unset;--_scrollbar-x-thumb-transform-to-value: unset;--_scrollbar-thumb-transform-from: unset;--_scrollbar-thumb-transform-to: unset}.ng-scrollbar-external-viewport[_nghost-%COMP%]     .ng-scroll-viewport{min-height:100%;min-width:100%;height:100%;max-height:100%;max-width:100%}.ng-scroll-viewport[_nghost-%COMP%], .ng-scrollbar-external-viewport[_nghost-%COMP%]     .ng-scroll-viewport{position:relative;overflow:var(--_viewport-overflow);scroll-timeline:var(--_viewport_scroll-timeline);box-sizing:border-box!important;-webkit-overflow-scrolling:touch;will-change:scroll-position;-webkit-user-select:var(--_viewport-user-select);user-select:var(--_viewport-user-select);overscroll-behavior:var(--_viewport-overscroll-behavior)}[_nghost-%COMP%]     .ng-scroll-content{width:var(--_scrollbar-content-width);z-index:1;min-width:100%;min-height:100%;contain:content;padding:var(--_viewport-padding-top, 0) var(--_viewport-padding-right, 0) var(--_viewport-padding-bottom, 0) var(--_viewport-padding-left, 0)}.ng-scroll-viewport[_nghost-%COMP%], .ng-scrollbar-external-viewport[_nghost-%COMP%]     .ng-scroll-viewport{scrollbar-width:none}.ng-scroll-viewport[_nghost-%COMP%]::-webkit-scrollbar, .ng-scrollbar-external-viewport[_nghost-%COMP%]     .ng-scroll-viewport::-webkit-scrollbar{display:none}[position=invertX][_nghost-%COMP%], [position=invertAll][_nghost-%COMP%]{--_horizontal-top: var(--_scrollbar-offset-px);--_horizontal-bottom: initial;--_scrollbar-wrapper-x-top: 0}[dir=ltr][_nghost-%COMP%]{--_scrollbar-wrapper-y-right: initial;--_vertical-right: var(--_scrollbar-offset-px);--_vertical-left: initial;--_scrollbar-wrapper-y-left: calc(var(--viewport-width) - var(--_scrollbar-thickness))}[dir=ltr][position=invertY][_nghost-%COMP%], [dir=ltr][position=invertAll][_nghost-%COMP%]{--_vertical-left: var(--_scrollbar-offset-px);--_vertical-right: initial;--_scrollbar-wrapper-y-left: 0}[dir=rtl][_nghost-%COMP%]{--_scrollbar-wrapper-y-left: initial;--_vertical-left: var(--_scrollbar-offset-px);--_vertical-right: initial;--_scrollbar-wrapper-y-right: calc(var(--viewport-width) - var(--_scrollbar-thickness))}[dir=rtl][position=invertY][_nghost-%COMP%], [dir=rtl][position=invertAll][_nghost-%COMP%]{--_vertical-right: var(--_scrollbar-offset-px);--_vertical-left: initial;--_scrollbar-wrapper-y-right: 0}[verticalUsed=true][horizontalUsed=true][_nghost-%COMP%]{--_scrollbar-thickness-margin: calc(var(--scrollbar-thickness) + var(--scrollbar-offset) * 3);--_scrollbar-thickness-margin-px: calc(var(--_scrollbar-thickness-margin) * 1px)}[horizontalUsed=true][_nghost-%COMP%]{--_vertical-top: var(--_scrollbar-offset-px);--_vertical-bottom: var(--_scrollbar-thickness-margin-px)}[horizontalUsed=true][position=invertX][_nghost-%COMP%], [horizontalUsed=true][position=invertAll][_nghost-%COMP%]{--_vertical-top: var(--_scrollbar-thickness-margin-px);--_vertical-bottom: var(--_scrollbar-offset-px)}[verticalUsed=true][dir=ltr][_nghost-%COMP%]{--_horizontal-left: var(--_scrollbar-offset-px);--_horizontal-right: var(--_scrollbar-thickness-margin-px)}[verticalUsed=true][dir=rtl][_nghost-%COMP%]{--_horizontal-left: var(--_scrollbar-thickness-margin-px);--_horizontal-right: var(--_scrollbar-offset-px)}[verticalUsed=true][position=invertY][dir=ltr][_nghost-%COMP%], [verticalUsed=true][position=invertAll][dir=ltr][_nghost-%COMP%]{--_horizontal-left: var(--_scrollbar-thickness-margin-px);--_horizontal-right: var(--_scrollbar-offset-px)}[verticalUsed=true][position=invertY][dir=rtl][_nghost-%COMP%], [verticalUsed=true][position=invertAll][dir=rtl][_nghost-%COMP%]{--_horizontal-left: var(--_scrollbar-offset-px);--_horizontal-right: var(--_scrollbar-thickness-margin-px)}[appearance=standard][verticalUsed=true][dir=ltr][_nghost-%COMP%]{--_viewport-padding-left: 0;--_viewport-padding-right: calc(var(--_scrollbar-thickness) * 1px)}[appearance=standard][verticalUsed=true][dir=rtl][_nghost-%COMP%]{--_viewport-padding-left: calc(var(--_scrollbar-thickness) * 1px);--_viewport-padding-right: 0}[appearance=standard][verticalUsed=true][position=invertY][dir=ltr][_nghost-%COMP%], [appearance=standard][verticalUsed=true][position=invertAll][dir=ltr][_nghost-%COMP%]{--_viewport-padding-left: calc(var(--_scrollbar-thickness) * 1px);--_viewport-padding-right: 0}[appearance=standard][verticalUsed=true][position=invertY][dir=rtl][_nghost-%COMP%], [appearance=standard][verticalUsed=true][position=invertAll][dir=rtl][_nghost-%COMP%]{--_viewport-padding-left: 0;--_viewport-padding-right: calc(var(--_scrollbar-thickness) * 1px)}[appearance=standard][horizontalUsed=true][_nghost-%COMP%]{--_viewport-padding-top: 0;--_viewport-padding-bottom: calc(var(--_scrollbar-thickness) * 1px)}[appearance=standard][horizontalUsed=true][position=invertX][_nghost-%COMP%], [appearance=standard][horizontalUsed=true][position=invertAll][_nghost-%COMP%]{--_viewport-padding-top: calc(var(--_scrollbar-thickness) * 1px);--_viewport-padding-bottom: 0}[visibility=hover][_nghost-%COMP%]{--_scrollbar-opacity: 0;--_scrollbar-transition: var(--scrollbar-track-transition), opacity var(--scrollbar-hover-transition-duration) var(--scrollbar-hover-transition-delay)}[visibility=hover][_nghost-%COMP%]:hover, [visibility=hover][_nghost-%COMP%]:active, [visibility=hover][_nghost-%COMP%]:focus{--_scrollbar-opacity: 1;--_scrollbar-transition: var(--scrollbar-track-transition), opacity var(--scrollbar-hover-transition-duration)}[dir=ltr][_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=start]{left:0;right:unset}[dir=ltr][_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=end]{right:0;left:unset}[dir=rtl][_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=start]{right:0;left:unset}[dir=rtl][_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=end]{left:0;right:unset}[_nghost-%COMP%]     .ng-scroll-reached-wrapper, [_nghost-%COMP%]     .scroll-reached-trigger-element{position:absolute;-webkit-user-select:none;user-select:none;pointer-events:none;z-index:-9999}[_nghost-%COMP%]     .ng-scroll-reached-wrapper{visibility:hidden;inset:0;min-width:calc(var(--viewport-width) * 1px);min-height:calc(var(--viewport-height) * 1px)}[_nghost-%COMP%]     [isHorizontallyScrollable=false] .scroll-reached-trigger-element[trigger=end]{display:none}[_nghost-%COMP%]     [isVerticallyScrollable=false] .scroll-reached-trigger-element[trigger=bottom]{display:none}[_nghost-%COMP%]     .scroll-reached-trigger-element{background:red}[_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=top], [_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=bottom]{left:0;right:0}[_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=start], [_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=end]{top:0;bottom:0}[_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=top]{top:0;height:var(--reached-offset-top)}[_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=bottom]{bottom:0;height:var(--reached-offset-bottom)}[_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=start]{width:var(--reached-offset-start)}[_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=end]{width:var(--reached-offset-end)}[verticalUsed=true][_nghost-%COMP%]{--_timeline-scope: --scrollerY;--_animation-timeline-y: --scrollerY;--_viewport_scroll-timeline: --scrollerY y;--_scrollbar-y-thumb-transform-to-value: calc(var(--track-y-length) - var(--thumb-y-length))}[horizontalUsed=true][_nghost-%COMP%]{--_timeline-scope: --scrollerX;--_animation-timeline-x: --scrollerX;--_viewport_scroll-timeline: --scrollerX x;--_scrollbar-x-thumb-transform-to-value: calc(var(--track-x-length) - var(--thumb-x-length))}[verticalUsed=true][horizontalUsed=true][_nghost-%COMP%]{--_timeline-scope: --scrollerX, --scrollerY;--_viewport_scroll-timeline: --scrollerX x, --scrollerY y}[orientation=vertical][_nghost-%COMP%]{--_viewport-overflow: hidden auto;--_scrollbar-content-width: unset}[orientation=horizontal][_nghost-%COMP%]{--_viewport-overflow: auto hidden}[disableInteraction=true][_nghost-%COMP%]{--_scrollbar-pointer-events: none}[isVerticallyScrollable=false][_nghost-%COMP%]{--_vertical-thumb-display: none}[isHorizontallyScrollable=false][_nghost-%COMP%]{--_horizontal-thumb-display: none}[dragging=x][_nghost-%COMP%], [dragging=y][_nghost-%COMP%]{--_viewport-user-select: none}[horizontalUsed=true][_nghost-%COMP%]{--thumb-x-length: max(calc(var(--viewport-width) * var(--track-x-length) / var(--content-width)), var(--scrollbar-thumb-min-size))}[verticalUsed=true][_nghost-%COMP%]{--thumb-y-length: max(calc(var(--viewport-height) * var(--track-y-length) / var(--content-height)), var(--scrollbar-thumb-min-size))}[dragging=x][_nghost-%COMP%]{--_track-x-thickness: calc(var(--scrollbar-hover-thickness) * 1px);--_thumb-x-color: var(--scrollbar-thumb-hover-color)}[dragging=y][_nghost-%COMP%]{--_track-y-thickness: calc(var(--scrollbar-hover-thickness) * 1px);--_thumb-y-color: var(--scrollbar-thumb-hover-color)}[mobile=true][_nghost-%COMP%]{--_viewport-overscroll-behavior: var(--scrollbar-mobile-overscroll-behavior)}"],
  changeDetection: 0
});
var NgScrollbar = _NgScrollbar;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgScrollbar, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "ng-scrollbar:not([externalViewport])",
      exportAs: "ngScrollbar",
      imports: [Scrollbars],
      hostDirectives: [ScrollViewport],
      template: `
    <div #contentWrapper>
      <ng-content/>
      <scrollbars/>
    </div>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: NG_SCROLLBAR,
        useExisting: NgScrollbar
      }],
      styles: [":host{display:block;position:relative;overflow:hidden;max-height:100%;max-width:100%;--scrollbar-border-radius: 7px;--scrollbar-thickness: 5;--scrollbar-offset: 4;--scrollbar-track-color: transparent;--scrollbar-track-transition: height ease-out .15s, width ease-out .15s;--scrollbar-thumb-color: rgba(0, 0, 0, .2);--scrollbar-thumb-hover-color: var(--scrollbar-thumb-color);--scrollbar-hover-thickness: var(--scrollbar-thickness);--scrollbar-thumb-transition: none;--scrollbar-thumb-min-size: 20;--scrollbar-hover-transition-duration: .4s;--scrollbar-hover-transition-delay: .8s;--scrollbar-overscroll-behavior: initial;--scrollbar-mobile-overscroll-behavior: none;--_scrollbar-transition: var(--scrollbar-track-transition);--_scrollbar-opacity: initial;--_scrollbar-thickness: calc(var(--scrollbar-thickness) + var(--scrollbar-offset) * 2);--_scrollbar-pointer-events: auto;--_scrollbar-offset-px: calc(var(--scrollbar-offset) * 1px);--_scrollbar-thickness-px: calc(var(--scrollbar-thickness) * 1px);--_scrollbar-hover-thickness-px: calc(var(--scrollbar-hover-thickness) * 1px);--_viewport-padding-top: 0;--_viewport-padding-bottom: 0;--_viewport-padding-left: 0;--_viewport-padding-right: 0;--_horizontal-thumb-display: block;--_vertical-thumb-display: block;--_viewport-overflow: auto;--_thumb-x-color: var(--scrollbar-thumb-color);--_thumb-y-color: var(--scrollbar-thumb-color);--_track-y-thickness: var(--_scrollbar-thickness-px);--_track-x-thickness: var(--_scrollbar-thickness-px);--_viewport-overscroll-behavior: var(--scrollbar-overscroll-behavior);--_scrollbar-content-width: fit-content}:host{--_vertical-top: var(--_scrollbar-offset-px);--_vertical-bottom: var(--_scrollbar-offset-px);--_horizontal-left: var(--_scrollbar-offset-px);--_horizontal-right: var(--_scrollbar-offset-px);--_horizontal-top: initial;--_horizontal-bottom: var(--_scrollbar-offset-px);--_scrollbar-wrapper-x-top: calc(var(--viewport-height) - var(--_scrollbar-thickness));--reached-offset: 1px;--reached-offset-top: var(--reached-offset);--reached-offset-bottom: var(--reached-offset);--reached-offset-start: var(--reached-offset);--reached-offset-end: var(--reached-offset);--_viewport_scroll-timeline: unset;--_animation-timeline-y: unset;--_scrollbar-y-thumb-transform-to-value: unset;--_scrollbar-x-thumb-transform-to-value: unset;--_scrollbar-thumb-transform-from: unset;--_scrollbar-thumb-transform-to: unset}:host.ng-scrollbar-external-viewport ::ng-deep .ng-scroll-viewport{min-height:100%;min-width:100%;height:100%;max-height:100%;max-width:100%}:host.ng-scroll-viewport,:host.ng-scrollbar-external-viewport ::ng-deep .ng-scroll-viewport{position:relative;overflow:var(--_viewport-overflow);scroll-timeline:var(--_viewport_scroll-timeline);box-sizing:border-box!important;-webkit-overflow-scrolling:touch;will-change:scroll-position;-webkit-user-select:var(--_viewport-user-select);user-select:var(--_viewport-user-select);overscroll-behavior:var(--_viewport-overscroll-behavior)}:host ::ng-deep .ng-scroll-content{width:var(--_scrollbar-content-width);z-index:1;min-width:100%;min-height:100%;contain:content;padding:var(--_viewport-padding-top, 0) var(--_viewport-padding-right, 0) var(--_viewport-padding-bottom, 0) var(--_viewport-padding-left, 0)}:host.ng-scroll-viewport,:host.ng-scrollbar-external-viewport ::ng-deep .ng-scroll-viewport{scrollbar-width:none}:host.ng-scroll-viewport::-webkit-scrollbar,:host.ng-scrollbar-external-viewport ::ng-deep .ng-scroll-viewport::-webkit-scrollbar{display:none}:host[position=invertX],:host[position=invertAll]{--_horizontal-top: var(--_scrollbar-offset-px);--_horizontal-bottom: initial;--_scrollbar-wrapper-x-top: 0}:host[dir=ltr]{--_scrollbar-wrapper-y-right: initial;--_vertical-right: var(--_scrollbar-offset-px);--_vertical-left: initial;--_scrollbar-wrapper-y-left: calc(var(--viewport-width) - var(--_scrollbar-thickness))}:host[dir=ltr][position=invertY],:host[dir=ltr][position=invertAll]{--_vertical-left: var(--_scrollbar-offset-px);--_vertical-right: initial;--_scrollbar-wrapper-y-left: 0}:host[dir=rtl]{--_scrollbar-wrapper-y-left: initial;--_vertical-left: var(--_scrollbar-offset-px);--_vertical-right: initial;--_scrollbar-wrapper-y-right: calc(var(--viewport-width) - var(--_scrollbar-thickness))}:host[dir=rtl][position=invertY],:host[dir=rtl][position=invertAll]{--_vertical-right: var(--_scrollbar-offset-px);--_vertical-left: initial;--_scrollbar-wrapper-y-right: 0}:host[verticalUsed=true][horizontalUsed=true]{--_scrollbar-thickness-margin: calc(var(--scrollbar-thickness) + var(--scrollbar-offset) * 3);--_scrollbar-thickness-margin-px: calc(var(--_scrollbar-thickness-margin) * 1px)}:host[horizontalUsed=true]{--_vertical-top: var(--_scrollbar-offset-px);--_vertical-bottom: var(--_scrollbar-thickness-margin-px)}:host[horizontalUsed=true][position=invertX],:host[horizontalUsed=true][position=invertAll]{--_vertical-top: var(--_scrollbar-thickness-margin-px);--_vertical-bottom: var(--_scrollbar-offset-px)}:host[verticalUsed=true][dir=ltr]{--_horizontal-left: var(--_scrollbar-offset-px);--_horizontal-right: var(--_scrollbar-thickness-margin-px)}:host[verticalUsed=true][dir=rtl]{--_horizontal-left: var(--_scrollbar-thickness-margin-px);--_horizontal-right: var(--_scrollbar-offset-px)}:host[verticalUsed=true][position=invertY][dir=ltr],:host[verticalUsed=true][position=invertAll][dir=ltr]{--_horizontal-left: var(--_scrollbar-thickness-margin-px);--_horizontal-right: var(--_scrollbar-offset-px)}:host[verticalUsed=true][position=invertY][dir=rtl],:host[verticalUsed=true][position=invertAll][dir=rtl]{--_horizontal-left: var(--_scrollbar-offset-px);--_horizontal-right: var(--_scrollbar-thickness-margin-px)}:host[appearance=standard][verticalUsed=true][dir=ltr]{--_viewport-padding-left: 0;--_viewport-padding-right: calc(var(--_scrollbar-thickness) * 1px)}:host[appearance=standard][verticalUsed=true][dir=rtl]{--_viewport-padding-left: calc(var(--_scrollbar-thickness) * 1px);--_viewport-padding-right: 0}:host[appearance=standard][verticalUsed=true][position=invertY][dir=ltr],:host[appearance=standard][verticalUsed=true][position=invertAll][dir=ltr]{--_viewport-padding-left: calc(var(--_scrollbar-thickness) * 1px);--_viewport-padding-right: 0}:host[appearance=standard][verticalUsed=true][position=invertY][dir=rtl],:host[appearance=standard][verticalUsed=true][position=invertAll][dir=rtl]{--_viewport-padding-left: 0;--_viewport-padding-right: calc(var(--_scrollbar-thickness) * 1px)}:host[appearance=standard][horizontalUsed=true]{--_viewport-padding-top: 0;--_viewport-padding-bottom: calc(var(--_scrollbar-thickness) * 1px)}:host[appearance=standard][horizontalUsed=true][position=invertX],:host[appearance=standard][horizontalUsed=true][position=invertAll]{--_viewport-padding-top: calc(var(--_scrollbar-thickness) * 1px);--_viewport-padding-bottom: 0}:host[visibility=hover]{--_scrollbar-opacity: 0;--_scrollbar-transition: var(--scrollbar-track-transition), opacity var(--scrollbar-hover-transition-duration) var(--scrollbar-hover-transition-delay)}:host[visibility=hover]:hover,:host[visibility=hover]:active,:host[visibility=hover]:focus{--_scrollbar-opacity: 1;--_scrollbar-transition: var(--scrollbar-track-transition), opacity var(--scrollbar-hover-transition-duration)}:host[dir=ltr] ::ng-deep .scroll-reached-trigger-element[trigger=start]{left:0;right:unset}:host[dir=ltr] ::ng-deep .scroll-reached-trigger-element[trigger=end]{right:0;left:unset}:host[dir=rtl] ::ng-deep .scroll-reached-trigger-element[trigger=start]{right:0;left:unset}:host[dir=rtl] ::ng-deep .scroll-reached-trigger-element[trigger=end]{left:0;right:unset}:host ::ng-deep .ng-scroll-reached-wrapper,:host ::ng-deep .scroll-reached-trigger-element{position:absolute;-webkit-user-select:none;user-select:none;pointer-events:none;z-index:-9999}:host ::ng-deep .ng-scroll-reached-wrapper{visibility:hidden;inset:0;min-width:calc(var(--viewport-width) * 1px);min-height:calc(var(--viewport-height) * 1px)}:host ::ng-deep [isHorizontallyScrollable=false] .scroll-reached-trigger-element[trigger=end]{display:none}:host ::ng-deep [isVerticallyScrollable=false] .scroll-reached-trigger-element[trigger=bottom]{display:none}:host ::ng-deep .scroll-reached-trigger-element{background:red}:host ::ng-deep .scroll-reached-trigger-element[trigger=top],:host ::ng-deep .scroll-reached-trigger-element[trigger=bottom]{left:0;right:0}:host ::ng-deep .scroll-reached-trigger-element[trigger=start],:host ::ng-deep .scroll-reached-trigger-element[trigger=end]{top:0;bottom:0}:host ::ng-deep .scroll-reached-trigger-element[trigger=top]{top:0;height:var(--reached-offset-top)}:host ::ng-deep .scroll-reached-trigger-element[trigger=bottom]{bottom:0;height:var(--reached-offset-bottom)}:host ::ng-deep .scroll-reached-trigger-element[trigger=start]{width:var(--reached-offset-start)}:host ::ng-deep .scroll-reached-trigger-element[trigger=end]{width:var(--reached-offset-end)}:host[verticalUsed=true]{--_timeline-scope: --scrollerY;--_animation-timeline-y: --scrollerY;--_viewport_scroll-timeline: --scrollerY y;--_scrollbar-y-thumb-transform-to-value: calc(var(--track-y-length) - var(--thumb-y-length))}:host[horizontalUsed=true]{--_timeline-scope: --scrollerX;--_animation-timeline-x: --scrollerX;--_viewport_scroll-timeline: --scrollerX x;--_scrollbar-x-thumb-transform-to-value: calc(var(--track-x-length) - var(--thumb-x-length))}:host[verticalUsed=true][horizontalUsed=true]{--_timeline-scope: --scrollerX, --scrollerY;--_viewport_scroll-timeline: --scrollerX x, --scrollerY y}:host[orientation=vertical]{--_viewport-overflow: hidden auto;--_scrollbar-content-width: unset}:host[orientation=horizontal]{--_viewport-overflow: auto hidden}:host[disableInteraction=true]{--_scrollbar-pointer-events: none}:host[isVerticallyScrollable=false]{--_vertical-thumb-display: none}:host[isHorizontallyScrollable=false]{--_horizontal-thumb-display: none}:host[dragging=x],:host[dragging=y]{--_viewport-user-select: none}:host[horizontalUsed=true]{--thumb-x-length: max(calc(var(--viewport-width) * var(--track-x-length) / var(--content-width)), var(--scrollbar-thumb-min-size))}:host[verticalUsed=true]{--thumb-y-length: max(calc(var(--viewport-height) * var(--track-y-length) / var(--content-height)), var(--scrollbar-thumb-min-size))}:host[dragging=x]{--_track-x-thickness: calc(var(--scrollbar-hover-thickness) * 1px);--_thumb-x-color: var(--scrollbar-thumb-hover-color)}:host[dragging=y]{--_track-y-thickness: calc(var(--scrollbar-hover-thickness) * 1px);--_thumb-y-color: var(--scrollbar-thumb-hover-color)}:host[mobile=true]{--_viewport-overscroll-behavior: var(--scrollbar-mobile-overscroll-behavior)}\n"]
    }]
  }], null, {
    contentWrapper: [{
      type: ViewChild,
      args: ["contentWrapper", {
        static: true
      }]
    }],
    scrollbars: [{
      type: ViewChild,
      args: [Scrollbars, {
        static: true
      }]
    }]
  });
})();
var _NgScrollbarExt = class _NgScrollbarExt extends NgScrollbarCore {
  constructor() {
    super(...arguments);
    this.appRef = inject(ApplicationRef);
    this.cfr = inject(ComponentFactoryResolver$1);
  }
  get viewport() {
    return this.viewportAdapter;
  }
  get scrollbars() {
    return this.scrollbarWrapperRef?.instance;
  }
  ngOnInit() {
    if (this.customViewport) {
      this.viewportAdapter = this.customViewport.viewport;
    } else {
      let viewportElement;
      if (this.externalViewport) {
        viewportElement = this.nativeElement.querySelector(this.externalViewport);
      }
      if (viewportElement) {
        this.viewportAdapter = new ViewportAdapter(viewportElement);
      } else {
        console.error(`[NgScrollbar]: Could not find the viewport element for the provided selector "${this.externalViewport}"`);
      }
    }
    let spacerElement;
    if (this.externalSpacer) {
      spacerElement = this.nativeElement.querySelector(this.externalSpacer);
      if (!spacerElement) {
        console.error(`[NgScrollbar]: Could not find the spacer element for the provided selector "${this.externalSpacer}"`);
      }
    }
    let contentWrapperElement;
    if (this.externalContentWrapper) {
      contentWrapperElement = this.nativeElement.querySelector(this.externalContentWrapper);
      if (!contentWrapperElement) {
        console.error(`[NgScrollbar]: Could not find the content wrapper element for the provided selector "${this.externalContentWrapper}"`);
      }
    }
    this.viewport.init(contentWrapperElement, spacerElement);
    if (!this.scrollbarWrapperRef) {
      const injector = Injector.create({
        providers: [{
          provide: NG_SCROLLBAR,
          useValue: this
        }]
      });
      this.scrollbarWrapperRef = this.cfr.resolveComponentFactory(Scrollbars).create(injector);
      this.appRef.attachView(this.scrollbarWrapperRef.hostView);
      this.viewport.contentWrapperElement.appendChild(this.scrollbarWrapperRef.location.nativeElement);
    }
    super.ngOnInit();
  }
};
_NgScrollbarExt.ɵfac = /* @__PURE__ */ (() => {
  let ɵNgScrollbarExt_BaseFactory;
  return function NgScrollbarExt_Factory(t) {
    return (ɵNgScrollbarExt_BaseFactory || (ɵNgScrollbarExt_BaseFactory = ɵɵgetInheritedFactory(_NgScrollbarExt)))(t || _NgScrollbarExt);
  };
})();
_NgScrollbarExt.ɵcmp = ɵɵdefineComponent({
  type: _NgScrollbarExt,
  selectors: [["ng-scrollbar", "externalViewport", ""]],
  contentQueries: function NgScrollbarExt_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, ScrollViewport, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.customViewport = _t.first);
    }
  },
  hostVars: 2,
  hostBindings: function NgScrollbarExt_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ng-scrollbar-external-viewport", true);
    }
  },
  inputs: {
    externalViewport: "externalViewport",
    externalContentWrapper: "externalContentWrapper",
    externalSpacer: "externalSpacer"
  },
  exportAs: ["ngScrollbar"],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: NG_SCROLLBAR,
    useExisting: _NgScrollbarExt
  }, {
    provide: NgScrollbarCore,
    useExisting: NgScrollbar
  }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  attrs: _c4,
  ngContentSelectors: _c3,
  decls: 1,
  vars: 0,
  template: function NgScrollbarExt_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  styles: [_c5],
  changeDetection: 0
});
var NgScrollbarExt = _NgScrollbarExt;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgScrollbarExt, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "ng-scrollbar[externalViewport]",
      exportAs: "ngScrollbar",
      template: "<ng-content/>",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[class.ng-scrollbar-external-viewport]": "true"
      },
      providers: [{
        provide: NG_SCROLLBAR,
        useExisting: NgScrollbarExt
      }, {
        provide: NgScrollbarCore,
        useExisting: NgScrollbar
      }],
      styles: [":host{display:block;position:relative;overflow:hidden;max-height:100%;max-width:100%;--scrollbar-border-radius: 7px;--scrollbar-thickness: 5;--scrollbar-offset: 4;--scrollbar-track-color: transparent;--scrollbar-track-transition: height ease-out .15s, width ease-out .15s;--scrollbar-thumb-color: rgba(0, 0, 0, .2);--scrollbar-thumb-hover-color: var(--scrollbar-thumb-color);--scrollbar-hover-thickness: var(--scrollbar-thickness);--scrollbar-thumb-transition: none;--scrollbar-thumb-min-size: 20;--scrollbar-hover-transition-duration: .4s;--scrollbar-hover-transition-delay: .8s;--scrollbar-overscroll-behavior: initial;--scrollbar-mobile-overscroll-behavior: none;--_scrollbar-transition: var(--scrollbar-track-transition);--_scrollbar-opacity: initial;--_scrollbar-thickness: calc(var(--scrollbar-thickness) + var(--scrollbar-offset) * 2);--_scrollbar-pointer-events: auto;--_scrollbar-offset-px: calc(var(--scrollbar-offset) * 1px);--_scrollbar-thickness-px: calc(var(--scrollbar-thickness) * 1px);--_scrollbar-hover-thickness-px: calc(var(--scrollbar-hover-thickness) * 1px);--_viewport-padding-top: 0;--_viewport-padding-bottom: 0;--_viewport-padding-left: 0;--_viewport-padding-right: 0;--_horizontal-thumb-display: block;--_vertical-thumb-display: block;--_viewport-overflow: auto;--_thumb-x-color: var(--scrollbar-thumb-color);--_thumb-y-color: var(--scrollbar-thumb-color);--_track-y-thickness: var(--_scrollbar-thickness-px);--_track-x-thickness: var(--_scrollbar-thickness-px);--_viewport-overscroll-behavior: var(--scrollbar-overscroll-behavior);--_scrollbar-content-width: fit-content}:host{--_vertical-top: var(--_scrollbar-offset-px);--_vertical-bottom: var(--_scrollbar-offset-px);--_horizontal-left: var(--_scrollbar-offset-px);--_horizontal-right: var(--_scrollbar-offset-px);--_horizontal-top: initial;--_horizontal-bottom: var(--_scrollbar-offset-px);--_scrollbar-wrapper-x-top: calc(var(--viewport-height) - var(--_scrollbar-thickness));--reached-offset: 1px;--reached-offset-top: var(--reached-offset);--reached-offset-bottom: var(--reached-offset);--reached-offset-start: var(--reached-offset);--reached-offset-end: var(--reached-offset);--_viewport_scroll-timeline: unset;--_animation-timeline-y: unset;--_scrollbar-y-thumb-transform-to-value: unset;--_scrollbar-x-thumb-transform-to-value: unset;--_scrollbar-thumb-transform-from: unset;--_scrollbar-thumb-transform-to: unset}:host.ng-scrollbar-external-viewport ::ng-deep .ng-scroll-viewport{min-height:100%;min-width:100%;height:100%;max-height:100%;max-width:100%}:host.ng-scroll-viewport,:host.ng-scrollbar-external-viewport ::ng-deep .ng-scroll-viewport{position:relative;overflow:var(--_viewport-overflow);scroll-timeline:var(--_viewport_scroll-timeline);box-sizing:border-box!important;-webkit-overflow-scrolling:touch;will-change:scroll-position;-webkit-user-select:var(--_viewport-user-select);user-select:var(--_viewport-user-select);overscroll-behavior:var(--_viewport-overscroll-behavior)}:host ::ng-deep .ng-scroll-content{width:var(--_scrollbar-content-width);z-index:1;min-width:100%;min-height:100%;contain:content;padding:var(--_viewport-padding-top, 0) var(--_viewport-padding-right, 0) var(--_viewport-padding-bottom, 0) var(--_viewport-padding-left, 0)}:host.ng-scroll-viewport,:host.ng-scrollbar-external-viewport ::ng-deep .ng-scroll-viewport{scrollbar-width:none}:host.ng-scroll-viewport::-webkit-scrollbar,:host.ng-scrollbar-external-viewport ::ng-deep .ng-scroll-viewport::-webkit-scrollbar{display:none}:host[position=invertX],:host[position=invertAll]{--_horizontal-top: var(--_scrollbar-offset-px);--_horizontal-bottom: initial;--_scrollbar-wrapper-x-top: 0}:host[dir=ltr]{--_scrollbar-wrapper-y-right: initial;--_vertical-right: var(--_scrollbar-offset-px);--_vertical-left: initial;--_scrollbar-wrapper-y-left: calc(var(--viewport-width) - var(--_scrollbar-thickness))}:host[dir=ltr][position=invertY],:host[dir=ltr][position=invertAll]{--_vertical-left: var(--_scrollbar-offset-px);--_vertical-right: initial;--_scrollbar-wrapper-y-left: 0}:host[dir=rtl]{--_scrollbar-wrapper-y-left: initial;--_vertical-left: var(--_scrollbar-offset-px);--_vertical-right: initial;--_scrollbar-wrapper-y-right: calc(var(--viewport-width) - var(--_scrollbar-thickness))}:host[dir=rtl][position=invertY],:host[dir=rtl][position=invertAll]{--_vertical-right: var(--_scrollbar-offset-px);--_vertical-left: initial;--_scrollbar-wrapper-y-right: 0}:host[verticalUsed=true][horizontalUsed=true]{--_scrollbar-thickness-margin: calc(var(--scrollbar-thickness) + var(--scrollbar-offset) * 3);--_scrollbar-thickness-margin-px: calc(var(--_scrollbar-thickness-margin) * 1px)}:host[horizontalUsed=true]{--_vertical-top: var(--_scrollbar-offset-px);--_vertical-bottom: var(--_scrollbar-thickness-margin-px)}:host[horizontalUsed=true][position=invertX],:host[horizontalUsed=true][position=invertAll]{--_vertical-top: var(--_scrollbar-thickness-margin-px);--_vertical-bottom: var(--_scrollbar-offset-px)}:host[verticalUsed=true][dir=ltr]{--_horizontal-left: var(--_scrollbar-offset-px);--_horizontal-right: var(--_scrollbar-thickness-margin-px)}:host[verticalUsed=true][dir=rtl]{--_horizontal-left: var(--_scrollbar-thickness-margin-px);--_horizontal-right: var(--_scrollbar-offset-px)}:host[verticalUsed=true][position=invertY][dir=ltr],:host[verticalUsed=true][position=invertAll][dir=ltr]{--_horizontal-left: var(--_scrollbar-thickness-margin-px);--_horizontal-right: var(--_scrollbar-offset-px)}:host[verticalUsed=true][position=invertY][dir=rtl],:host[verticalUsed=true][position=invertAll][dir=rtl]{--_horizontal-left: var(--_scrollbar-offset-px);--_horizontal-right: var(--_scrollbar-thickness-margin-px)}:host[appearance=standard][verticalUsed=true][dir=ltr]{--_viewport-padding-left: 0;--_viewport-padding-right: calc(var(--_scrollbar-thickness) * 1px)}:host[appearance=standard][verticalUsed=true][dir=rtl]{--_viewport-padding-left: calc(var(--_scrollbar-thickness) * 1px);--_viewport-padding-right: 0}:host[appearance=standard][verticalUsed=true][position=invertY][dir=ltr],:host[appearance=standard][verticalUsed=true][position=invertAll][dir=ltr]{--_viewport-padding-left: calc(var(--_scrollbar-thickness) * 1px);--_viewport-padding-right: 0}:host[appearance=standard][verticalUsed=true][position=invertY][dir=rtl],:host[appearance=standard][verticalUsed=true][position=invertAll][dir=rtl]{--_viewport-padding-left: 0;--_viewport-padding-right: calc(var(--_scrollbar-thickness) * 1px)}:host[appearance=standard][horizontalUsed=true]{--_viewport-padding-top: 0;--_viewport-padding-bottom: calc(var(--_scrollbar-thickness) * 1px)}:host[appearance=standard][horizontalUsed=true][position=invertX],:host[appearance=standard][horizontalUsed=true][position=invertAll]{--_viewport-padding-top: calc(var(--_scrollbar-thickness) * 1px);--_viewport-padding-bottom: 0}:host[visibility=hover]{--_scrollbar-opacity: 0;--_scrollbar-transition: var(--scrollbar-track-transition), opacity var(--scrollbar-hover-transition-duration) var(--scrollbar-hover-transition-delay)}:host[visibility=hover]:hover,:host[visibility=hover]:active,:host[visibility=hover]:focus{--_scrollbar-opacity: 1;--_scrollbar-transition: var(--scrollbar-track-transition), opacity var(--scrollbar-hover-transition-duration)}:host[dir=ltr] ::ng-deep .scroll-reached-trigger-element[trigger=start]{left:0;right:unset}:host[dir=ltr] ::ng-deep .scroll-reached-trigger-element[trigger=end]{right:0;left:unset}:host[dir=rtl] ::ng-deep .scroll-reached-trigger-element[trigger=start]{right:0;left:unset}:host[dir=rtl] ::ng-deep .scroll-reached-trigger-element[trigger=end]{left:0;right:unset}:host ::ng-deep .ng-scroll-reached-wrapper,:host ::ng-deep .scroll-reached-trigger-element{position:absolute;-webkit-user-select:none;user-select:none;pointer-events:none;z-index:-9999}:host ::ng-deep .ng-scroll-reached-wrapper{visibility:hidden;inset:0;min-width:calc(var(--viewport-width) * 1px);min-height:calc(var(--viewport-height) * 1px)}:host ::ng-deep [isHorizontallyScrollable=false] .scroll-reached-trigger-element[trigger=end]{display:none}:host ::ng-deep [isVerticallyScrollable=false] .scroll-reached-trigger-element[trigger=bottom]{display:none}:host ::ng-deep .scroll-reached-trigger-element{background:red}:host ::ng-deep .scroll-reached-trigger-element[trigger=top],:host ::ng-deep .scroll-reached-trigger-element[trigger=bottom]{left:0;right:0}:host ::ng-deep .scroll-reached-trigger-element[trigger=start],:host ::ng-deep .scroll-reached-trigger-element[trigger=end]{top:0;bottom:0}:host ::ng-deep .scroll-reached-trigger-element[trigger=top]{top:0;height:var(--reached-offset-top)}:host ::ng-deep .scroll-reached-trigger-element[trigger=bottom]{bottom:0;height:var(--reached-offset-bottom)}:host ::ng-deep .scroll-reached-trigger-element[trigger=start]{width:var(--reached-offset-start)}:host ::ng-deep .scroll-reached-trigger-element[trigger=end]{width:var(--reached-offset-end)}:host[verticalUsed=true]{--_timeline-scope: --scrollerY;--_animation-timeline-y: --scrollerY;--_viewport_scroll-timeline: --scrollerY y;--_scrollbar-y-thumb-transform-to-value: calc(var(--track-y-length) - var(--thumb-y-length))}:host[horizontalUsed=true]{--_timeline-scope: --scrollerX;--_animation-timeline-x: --scrollerX;--_viewport_scroll-timeline: --scrollerX x;--_scrollbar-x-thumb-transform-to-value: calc(var(--track-x-length) - var(--thumb-x-length))}:host[verticalUsed=true][horizontalUsed=true]{--_timeline-scope: --scrollerX, --scrollerY;--_viewport_scroll-timeline: --scrollerX x, --scrollerY y}:host[orientation=vertical]{--_viewport-overflow: hidden auto;--_scrollbar-content-width: unset}:host[orientation=horizontal]{--_viewport-overflow: auto hidden}:host[disableInteraction=true]{--_scrollbar-pointer-events: none}:host[isVerticallyScrollable=false]{--_vertical-thumb-display: none}:host[isHorizontallyScrollable=false]{--_horizontal-thumb-display: none}:host[dragging=x],:host[dragging=y]{--_viewport-user-select: none}:host[horizontalUsed=true]{--thumb-x-length: max(calc(var(--viewport-width) * var(--track-x-length) / var(--content-width)), var(--scrollbar-thumb-min-size))}:host[verticalUsed=true]{--thumb-y-length: max(calc(var(--viewport-height) * var(--track-y-length) / var(--content-height)), var(--scrollbar-thumb-min-size))}:host[dragging=x]{--_track-x-thickness: calc(var(--scrollbar-hover-thickness) * 1px);--_thumb-x-color: var(--scrollbar-thumb-hover-color)}:host[dragging=y]{--_track-y-thickness: calc(var(--scrollbar-hover-thickness) * 1px);--_thumb-y-color: var(--scrollbar-thumb-hover-color)}:host[mobile=true]{--_viewport-overscroll-behavior: var(--scrollbar-mobile-overscroll-behavior)}\n"]
    }]
  }], null, {
    externalViewport: [{
      type: Input
    }],
    externalContentWrapper: [{
      type: Input
    }],
    externalSpacer: [{
      type: Input
    }],
    customViewport: [{
      type: ContentChild,
      args: [ScrollViewport, {
        static: true
      }]
    }]
  });
})();
var _NgScrollbarModule = class _NgScrollbarModule {
};
_NgScrollbarModule.ɵfac = function NgScrollbarModule_Factory(t) {
  return new (t || _NgScrollbarModule)();
};
_NgScrollbarModule.ɵmod = ɵɵdefineNgModule({
  type: _NgScrollbarModule,
  imports: [NgScrollbar, ScrollViewport, NgScrollbarExt],
  exports: [NgScrollbar, ScrollViewport, NgScrollbarExt]
});
_NgScrollbarModule.ɵinj = ɵɵdefineInjector({});
var NgScrollbarModule = _NgScrollbarModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgScrollbarModule, [{
    type: NgModule,
    args: [{
      imports: [NgScrollbar, ScrollViewport, NgScrollbarExt],
      exports: [NgScrollbar, ScrollViewport, NgScrollbarExt]
    }]
  }], null, null);
})();
export {
  NG_SCROLLBAR,
  NG_SCROLLBAR_OPTIONS,
  NgScrollbar,
  NgScrollbarExt,
  NgScrollbarModule,
  ScrollViewport,
  ScrollbarUpdateReason,
  ViewportClasses
};
/*! Bundled license information:

@angular/core/fesm2022/rxjs-interop.mjs:
  (**
   * @license Angular v17.1.3
   * (c) 2010-2022 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=ngx-scrollbar.js.map
