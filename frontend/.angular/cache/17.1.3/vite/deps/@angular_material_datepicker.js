import {
  CdkPortalOutlet,
  ComponentPortal,
  FlexibleConnectedPositionStrategy,
  MAT_FORM_FIELD,
  MatFormField,
  MatFormFieldControl,
  MatFormFieldModule,
  Overlay,
  OverlayConfig,
  OverlayModule,
  PortalModule,
  TemplatePortal,
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger
} from "./chunk-EUQ3SP26.js";
import {
  ControlContainer,
  FormGroupDirective,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NgControl,
  NgForm,
  Validators
} from "./chunk-WOZNVI3N.js";
import {
  CdkScrollableModule
} from "./chunk-LBD2I2MH.js";
import {
  A11yModule,
  BACKSPACE,
  CdkMonitorFocus,
  CdkTrapFocus,
  DOWN_ARROW,
  DateAdapter,
  END,
  ENTER,
  ESCAPE,
  ErrorStateMatcher,
  FocusMonitor,
  HOME,
  LEFT_ARROW,
  MAT_DATE_FORMATS,
  MatCommonModule,
  MatRippleLoader,
  MatRippleModule,
  PAGE_DOWN,
  PAGE_UP,
  RIGHT_ARROW,
  SPACE,
  UP_ARROW,
  _ErrorStateTracker,
  hasModifierKey
} from "./chunk-3P3RILEU.js";
import {
  Directionality,
  Platform,
  _getFocusedElementPierceShadowDom,
  coerceBooleanProperty,
  coerceElement,
  coerceNumberProperty,
  coerceStringArray,
  getSupportedInputTypes,
  normalizePassiveListenerOptions
} from "./chunk-FCRCI3NC.js";
import {
  CommonModule,
  DOCUMENT,
  NgClass
} from "./chunk-VLDRFU3T.js";
import {
  ANIMATION_MODULE_TYPE,
  Attribute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
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
  Self,
  SkipSelf,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation$1,
  booleanAttribute,
  forwardRef,
  inject,
  numberAttribute,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
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
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵhostProperty,
  ɵɵinject,
  ɵɵinjectAttribute,
  ɵɵinvalidFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵsyntheticHostListener,
  ɵɵsyntheticHostProperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-LAIKGTKG.js";
import {
  fromEvent,
  merge
} from "./chunk-JGGXWAGP.js";
import "./chunk-SCZKBD5B.js";
import {
  EMPTY,
  Subject,
  Subscription,
  __spreadProps,
  __spreadValues,
  auditTime,
  filter,
  of,
  startWith,
  take,
  takeUntil
} from "./chunk-6U6QUIVA.js";

// node_modules/@angular/material/fesm2022/button.mjs
var _c0 = ["mat-button", ""];
var _c1 = [[["", 8, "material-icons", 3, "iconPositionEnd", ""], ["mat-icon", 3, "iconPositionEnd", ""], ["", "matButtonIcon", "", 3, "iconPositionEnd", ""]], "*", [["", "iconPositionEnd", "", 8, "material-icons"], ["mat-icon", "iconPositionEnd", ""], ["", "matButtonIcon", "", "iconPositionEnd", ""]]];
var _c2 = [".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])", "*", ".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];
var _c3 = '.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button{position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;background:rgba(0,0,0,0)}.mdc-button .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button[hidden]{display:none}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button .mdc-button__progress-indicator{font-size:0;position:absolute;transform:translate(-50%, -50%);top:50%;left:50%;line-height:initial}.mdc-button .mdc-button__label{position:relative}.mdc-button .mdc-button__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px);display:none}@media screen and (forced-colors: active){.mdc-button .mdc-button__focus-ring{border-color:CanvasText}}.mdc-button .mdc-button__focus-ring::after{content:"";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-button .mdc-button__focus-ring::after{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring{display:block}}.mdc-button .mdc-button__touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--touch{margin-top:6px;margin-bottom:6px}.mdc-button{padding:0 8px 0 8px}.mdc-button--unelevated{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--unelevated.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--unelevated.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--raised{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--raised.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--raised.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--outlined{border-style:solid;transition:border 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--outlined .mdc-button__ripple{border-style:solid;border-color:rgba(0,0,0,0)}.mat-mdc-button{font-family:var(--mdc-text-button-label-text-font);font-size:var(--mdc-text-button-label-text-size);letter-spacing:var(--mdc-text-button-label-text-tracking);font-weight:var(--mdc-text-button-label-text-weight);text-transform:var(--mdc-text-button-label-text-transform);height:var(--mdc-text-button-container-height);border-radius:var(--mdc-text-button-container-shape);padding:0 var(--mat-text-button-horizontal-padding, 8px)}.mat-mdc-button:not(:disabled){color:var(--mdc-text-button-label-text-color)}.mat-mdc-button:disabled{color:var(--mdc-text-button-disabled-label-text-color)}.mat-mdc-button .mdc-button__ripple{border-radius:var(--mdc-text-button-container-shape)}.mat-mdc-button:has(.material-icons,mat-icon,[matButtonIcon]){padding:0 var(--mat-text-button-with-icon-horizontal-padding, 8px)}.mat-mdc-button>.mat-icon{margin-right:var(--mat-text-button-icon-spacing, 8px);margin-left:var(--mat-text-button-icon-offset, 0)}[dir=rtl] .mat-mdc-button>.mat-icon{margin-right:var(--mat-text-button-icon-offset, 0);margin-left:var(--mat-text-button-icon-spacing, 8px)}.mat-mdc-button .mdc-button__label+.mat-icon{margin-right:var(--mat-text-button-icon-offset, 0);margin-left:var(--mat-text-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-button .mdc-button__label+.mat-icon{margin-right:var(--mat-text-button-icon-spacing, 8px);margin-left:var(--mat-text-button-icon-offset, 0)}.mat-mdc-button .mat-ripple-element{background-color:var(--mat-text-button-ripple-color)}.mat-mdc-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-text-button-state-layer-color)}.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-text-button-disabled-state-layer-color)}.mat-mdc-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-hover-state-layer-opacity)}.mat-mdc-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-focus-state-layer-opacity)}.mat-mdc-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-pressed-state-layer-opacity)}.mat-mdc-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-text-button-touch-target-display)}.mat-mdc-button[disabled],.mat-mdc-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-text-button-disabled-label-text-color)}.mat-mdc-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-unelevated-button{font-family:var(--mdc-filled-button-label-text-font);font-size:var(--mdc-filled-button-label-text-size);letter-spacing:var(--mdc-filled-button-label-text-tracking);font-weight:var(--mdc-filled-button-label-text-weight);text-transform:var(--mdc-filled-button-label-text-transform);height:var(--mdc-filled-button-container-height);border-radius:var(--mdc-filled-button-container-shape);padding:0 var(--mat-filled-button-horizontal-padding, 16px)}.mat-mdc-unelevated-button:not(:disabled){background-color:var(--mdc-filled-button-container-color)}.mat-mdc-unelevated-button:disabled{background-color:var(--mdc-filled-button-disabled-container-color)}.mat-mdc-unelevated-button:not(:disabled){color:var(--mdc-filled-button-label-text-color)}.mat-mdc-unelevated-button:disabled{color:var(--mdc-filled-button-disabled-label-text-color)}.mat-mdc-unelevated-button .mdc-button__ripple{border-radius:var(--mdc-filled-button-container-shape)}.mat-mdc-unelevated-button>.mat-icon{margin-right:var(--mat-filled-button-icon-spacing, 8px);margin-left:var(--mat-filled-button-icon-offset, -4px)}[dir=rtl] .mat-mdc-unelevated-button>.mat-icon{margin-right:var(--mat-filled-button-icon-offset, -4px);margin-left:var(--mat-filled-button-icon-spacing, 8px)}.mat-mdc-unelevated-button .mdc-button__label+.mat-icon{margin-right:var(--mat-filled-button-icon-offset, -4px);margin-left:var(--mat-filled-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label+.mat-icon{margin-right:var(--mat-filled-button-icon-spacing, 8px);margin-left:var(--mat-filled-button-icon-offset, -4px)}.mat-mdc-unelevated-button .mat-ripple-element{background-color:var(--mat-filled-button-ripple-color)}.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-filled-button-state-layer-color)}.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-filled-button-disabled-state-layer-color)}.mat-mdc-unelevated-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-hover-state-layer-opacity)}.mat-mdc-unelevated-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-focus-state-layer-opacity)}.mat-mdc-unelevated-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-pressed-state-layer-opacity)}.mat-mdc-unelevated-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-filled-button-touch-target-display)}.mat-mdc-unelevated-button[disabled],.mat-mdc-unelevated-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-filled-button-disabled-label-text-color);background-color:var(--mdc-filled-button-disabled-container-color)}.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-raised-button{font-family:var(--mdc-protected-button-label-text-font);font-size:var(--mdc-protected-button-label-text-size);letter-spacing:var(--mdc-protected-button-label-text-tracking);font-weight:var(--mdc-protected-button-label-text-weight);text-transform:var(--mdc-protected-button-label-text-transform);height:var(--mdc-protected-button-container-height);border-radius:var(--mdc-protected-button-container-shape);padding:0 var(--mat-protected-button-horizontal-padding, 16px);box-shadow:var(--mdc-protected-button-container-elevation-shadow)}.mat-mdc-raised-button:not(:disabled){background-color:var(--mdc-protected-button-container-color)}.mat-mdc-raised-button:disabled{background-color:var(--mdc-protected-button-disabled-container-color)}.mat-mdc-raised-button:not(:disabled){color:var(--mdc-protected-button-label-text-color)}.mat-mdc-raised-button:disabled{color:var(--mdc-protected-button-disabled-label-text-color)}.mat-mdc-raised-button .mdc-button__ripple{border-radius:var(--mdc-protected-button-container-shape)}.mat-mdc-raised-button>.mat-icon{margin-right:var(--mat-protected-button-icon-spacing, 8px);margin-left:var(--mat-protected-button-icon-offset, -4px)}[dir=rtl] .mat-mdc-raised-button>.mat-icon{margin-right:var(--mat-protected-button-icon-offset, -4px);margin-left:var(--mat-protected-button-icon-spacing, 8px)}.mat-mdc-raised-button .mdc-button__label+.mat-icon{margin-right:var(--mat-protected-button-icon-offset, -4px);margin-left:var(--mat-protected-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-raised-button .mdc-button__label+.mat-icon{margin-right:var(--mat-protected-button-icon-spacing, 8px);margin-left:var(--mat-protected-button-icon-offset, -4px)}.mat-mdc-raised-button .mat-ripple-element{background-color:var(--mat-protected-button-ripple-color)}.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-protected-button-state-layer-color)}.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-protected-button-disabled-state-layer-color)}.mat-mdc-raised-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-hover-state-layer-opacity)}.mat-mdc-raised-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-focus-state-layer-opacity)}.mat-mdc-raised-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-pressed-state-layer-opacity)}.mat-mdc-raised-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-protected-button-touch-target-display)}.mat-mdc-raised-button:hover{box-shadow:var(--mdc-protected-button-hover-container-elevation-shadow)}.mat-mdc-raised-button:focus{box-shadow:var(--mdc-protected-button-focus-container-elevation-shadow)}.mat-mdc-raised-button:active,.mat-mdc-raised-button:focus:active{box-shadow:var(--mdc-protected-button-pressed-container-elevation-shadow)}.mat-mdc-raised-button[disabled],.mat-mdc-raised-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-protected-button-disabled-label-text-color);background-color:var(--mdc-protected-button-disabled-container-color)}.mat-mdc-raised-button[disabled].mat-mdc-button-disabled,.mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled{box-shadow:var(--mdc-protected-button-disabled-container-elevation-shadow)}.mat-mdc-raised-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-outlined-button{font-family:var(--mdc-outlined-button-label-text-font);font-size:var(--mdc-outlined-button-label-text-size);letter-spacing:var(--mdc-outlined-button-label-text-tracking);font-weight:var(--mdc-outlined-button-label-text-weight);text-transform:var(--mdc-outlined-button-label-text-transform);height:var(--mdc-outlined-button-container-height);border-radius:var(--mdc-outlined-button-container-shape);padding:0 15px 0 15px;border-width:var(--mdc-outlined-button-outline-width);padding:0 var(--mat-outlined-button-horizontal-padding, 15px)}.mat-mdc-outlined-button:not(:disabled){color:var(--mdc-outlined-button-label-text-color)}.mat-mdc-outlined-button:disabled{color:var(--mdc-outlined-button-disabled-label-text-color)}.mat-mdc-outlined-button .mdc-button__ripple{border-radius:var(--mdc-outlined-button-container-shape)}.mat-mdc-outlined-button:not(:disabled){border-color:var(--mdc-outlined-button-outline-color)}.mat-mdc-outlined-button:disabled{border-color:var(--mdc-outlined-button-disabled-outline-color)}.mat-mdc-outlined-button.mdc-button--icon-trailing{padding:0 11px 0 15px}.mat-mdc-outlined-button.mdc-button--icon-leading{padding:0 15px 0 11px}.mat-mdc-outlined-button .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px;border-width:var(--mdc-outlined-button-outline-width)}.mat-mdc-outlined-button .mdc-button__touch{left:calc(-1 * var(--mdc-outlined-button-outline-width));width:calc(100% + 2 * var(--mdc-outlined-button-outline-width))}.mat-mdc-outlined-button>.mat-icon{margin-right:var(--mat-outlined-button-icon-spacing, 8px);margin-left:var(--mat-outlined-button-icon-offset, -4px)}[dir=rtl] .mat-mdc-outlined-button>.mat-icon{margin-right:var(--mat-outlined-button-icon-offset, -4px);margin-left:var(--mat-outlined-button-icon-spacing, 8px)}.mat-mdc-outlined-button .mdc-button__label+.mat-icon{margin-right:var(--mat-outlined-button-icon-offset, -4px);margin-left:var(--mat-outlined-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-outlined-button .mdc-button__label+.mat-icon{margin-right:var(--mat-outlined-button-icon-spacing, 8px);margin-left:var(--mat-outlined-button-icon-offset, -4px)}.mat-mdc-outlined-button .mat-ripple-element{background-color:var(--mat-outlined-button-ripple-color)}.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-outlined-button-state-layer-color)}.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-outlined-button-disabled-state-layer-color)}.mat-mdc-outlined-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-hover-state-layer-opacity)}.mat-mdc-outlined-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-focus-state-layer-opacity)}.mat-mdc-outlined-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-pressed-state-layer-opacity)}.mat-mdc-outlined-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-outlined-button-touch-target-display)}.mat-mdc-outlined-button[disabled],.mat-mdc-outlined-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-outlined-button-disabled-label-text-color);border-color:var(--mdc-outlined-button-disabled-outline-color)}.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-button-base{text-decoration:none}.mat-mdc-button,.mat-mdc-unelevated-button,.mat-mdc-raised-button,.mat-mdc-outlined-button{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-button .mat-mdc-button-ripple,.mat-mdc-button .mat-mdc-button-persistent-ripple,.mat-mdc-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button .mat-mdc-button-ripple,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button .mat-mdc-button-ripple,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-button .mat-mdc-button-ripple,.mat-mdc-unelevated-button .mat-mdc-button-ripple,.mat-mdc-raised-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mat-mdc-button-ripple{overflow:hidden}.mat-mdc-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{content:"";opacity:0}.mat-mdc-button .mdc-button__label,.mat-mdc-unelevated-button .mdc-button__label,.mat-mdc-raised-button .mdc-button__label,.mat-mdc-outlined-button .mdc-button__label{z-index:1}.mat-mdc-button .mat-mdc-focus-indicator,.mat-mdc-unelevated-button .mat-mdc-focus-indicator,.mat-mdc-raised-button .mat-mdc-focus-indicator,.mat-mdc-outlined-button .mat-mdc-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute}.mat-mdc-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-unelevated-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-raised-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-outlined-button:focus .mat-mdc-focus-indicator::before{content:""}.mat-mdc-button._mat-animation-noopable,.mat-mdc-unelevated-button._mat-animation-noopable,.mat-mdc-raised-button._mat-animation-noopable,.mat-mdc-outlined-button._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mdc-button>.mat-icon,.mat-mdc-unelevated-button>.mat-icon,.mat-mdc-raised-button>.mat-icon,.mat-mdc-outlined-button>.mat-icon{display:inline-block;position:relative;vertical-align:top;font-size:1.125rem;height:1.125rem;width:1.125rem}.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px;border-width:-1px}.mat-mdc-unelevated-button .mat-mdc-focus-indicator::before,.mat-mdc-raised-button .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-mdc-outlined-button .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 3px)*-1)}';
var _c4 = ".cdk-high-contrast-active .mat-mdc-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-unelevated-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-raised-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-outlined-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-icon-button{outline:solid 1px}";
var _c5 = ["mat-fab", ""];
var _c6 = ["mat-mini-fab", ""];
var _c7 = '.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:var(--mdc-elevation-overlay-opacity);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-fab{position:relative;display:inline-flex;position:relative;align-items:center;justify-content:center;box-sizing:border-box;width:56px;height:56px;padding:0;border:none;fill:currentColor;text-decoration:none;cursor:pointer;user-select:none;-moz-appearance:none;-webkit-appearance:none;overflow:visible;transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1),opacity 15ms linear 30ms,transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-fab .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-fab[hidden]{display:none}.mdc-fab::-moz-focus-inner{padding:0;border:0}.mdc-fab .mdc-fab__focus-ring{position:absolute}.mdc-fab.mdc-ripple-upgraded--background-focused .mdc-fab__focus-ring,.mdc-fab:not(.mdc-ripple-upgraded):focus .mdc-fab__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-fab.mdc-ripple-upgraded--background-focused .mdc-fab__focus-ring,.mdc-fab:not(.mdc-ripple-upgraded):focus .mdc-fab__focus-ring{border-color:CanvasText}}.mdc-fab.mdc-ripple-upgraded--background-focused .mdc-fab__focus-ring::after,.mdc-fab:not(.mdc-ripple-upgraded):focus .mdc-fab__focus-ring::after{content:"";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-fab.mdc-ripple-upgraded--background-focused .mdc-fab__focus-ring::after,.mdc-fab:not(.mdc-ripple-upgraded):focus .mdc-fab__focus-ring::after{border-color:CanvasText}}.mdc-fab:active,.mdc-fab:focus{outline:none}.mdc-fab:hover{cursor:pointer}.mdc-fab>svg{width:100%}.mdc-fab--mini{width:40px;height:40px}.mdc-fab--extended{border-radius:24px;padding-left:20px;padding-right:20px;width:auto;max-width:100%;height:48px;line-height:normal}.mdc-fab--extended .mdc-fab__ripple{border-radius:24px}.mdc-fab--extended .mdc-fab__icon{margin-left:calc(12px - 20px);margin-right:12px}[dir=rtl] .mdc-fab--extended .mdc-fab__icon,.mdc-fab--extended .mdc-fab__icon[dir=rtl]{margin-left:12px;margin-right:calc(12px - 20px)}.mdc-fab--extended .mdc-fab__label+.mdc-fab__icon{margin-left:12px;margin-right:calc(12px - 20px)}[dir=rtl] .mdc-fab--extended .mdc-fab__label+.mdc-fab__icon,.mdc-fab--extended .mdc-fab__label+.mdc-fab__icon[dir=rtl]{margin-left:calc(12px - 20px);margin-right:12px}.mdc-fab--touch{margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-fab--touch .mdc-fab__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-fab::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-fab::before{border-color:CanvasText}}.mdc-fab__label{justify-content:flex-start;text-overflow:ellipsis;white-space:nowrap;overflow-x:hidden;overflow-y:visible}.mdc-fab__icon{transition:transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);fill:currentColor;will-change:transform}.mdc-fab .mdc-fab__icon{display:inline-flex;align-items:center;justify-content:center}.mdc-fab--exited{transform:scale(0);opacity:0;transition:opacity 15ms linear 150ms,transform 180ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-fab--exited .mdc-fab__icon{transform:scale(0);transition:transform 135ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mat-mdc-fab{background-color:var(--mdc-fab-container-color)}.mat-mdc-fab .mdc-fab__icon{width:var(--mdc-fab-icon-size);height:var(--mdc-fab-icon-size);font-size:var(--mdc-fab-icon-size)}.mat-mdc-fab:not(.mdc-fab--extended){border-radius:var(--mdc-fab-container-shape)}.mat-mdc-fab:not(.mdc-fab--extended) .mdc-fab__ripple{border-radius:var(--mdc-fab-container-shape)}.mat-mdc-mini-fab{background-color:var(--mdc-fab-small-container-color)}.mat-mdc-mini-fab .mdc-fab__icon{width:var(--mdc-fab-small-icon-size);height:var(--mdc-fab-small-icon-size);font-size:var(--mdc-fab-small-icon-size)}.mat-mdc-mini-fab:not(.mdc-fab--extended){border-radius:var(--mdc-fab-small-container-shape)}.mat-mdc-mini-fab:not(.mdc-fab--extended) .mdc-fab__ripple{border-radius:var(--mdc-fab-small-container-shape)}.mat-mdc-extended-fab{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;height:var(--mdc-extended-fab-container-height);border-radius:var(--mdc-extended-fab-container-shape);font-family:var(--mdc-extended-fab-label-text-font);font-size:var(--mdc-extended-fab-label-text-size);font-weight:var(--mdc-extended-fab-label-text-weight);letter-spacing:var(--mdc-extended-fab-label-text-tracking)}.mat-mdc-extended-fab .mdc-fab__ripple{border-radius:var(--mdc-extended-fab-container-shape)}.mat-mdc-fab,.mat-mdc-mini-fab{-webkit-tap-highlight-color:rgba(0,0,0,0);flex-shrink:0}.mat-mdc-fab .mat-mdc-button-ripple,.mat-mdc-fab .mat-mdc-button-persistent-ripple,.mat-mdc-fab .mat-mdc-button-persistent-ripple::before,.mat-mdc-mini-fab .mat-mdc-button-ripple,.mat-mdc-mini-fab .mat-mdc-button-persistent-ripple,.mat-mdc-mini-fab .mat-mdc-button-persistent-ripple::before{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-fab .mat-mdc-button-ripple,.mat-mdc-mini-fab .mat-mdc-button-ripple{overflow:hidden}.mat-mdc-fab .mat-mdc-button-persistent-ripple::before,.mat-mdc-mini-fab .mat-mdc-button-persistent-ripple::before{content:"";opacity:0}.mat-mdc-fab .mdc-button__label,.mat-mdc-mini-fab .mdc-button__label{z-index:1}.mat-mdc-fab .mat-mdc-focus-indicator,.mat-mdc-mini-fab .mat-mdc-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute}.mat-mdc-fab:focus .mat-mdc-focus-indicator::before,.mat-mdc-mini-fab:focus .mat-mdc-focus-indicator::before{content:""}.mat-mdc-fab._mat-animation-noopable,.mat-mdc-mini-fab._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mdc-fab:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-mini-fab:not(.mdc-ripple-upgraded):focus::before{background:rgba(0,0,0,0);opacity:1}.mat-mdc-fab .mat-icon,.mat-mdc-fab .material-icons,.mat-mdc-mini-fab .mat-icon,.mat-mdc-mini-fab .material-icons{transition:transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);fill:currentColor;will-change:transform}.mat-mdc-fab .mat-mdc-focus-indicator::before,.mat-mdc-mini-fab .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-mdc-fab[disabled],.mat-mdc-fab.mat-mdc-button-disabled,.mat-mdc-mini-fab[disabled],.mat-mdc-mini-fab.mat-mdc-button-disabled{cursor:default;pointer-events:none}.mat-mdc-fab[disabled],.mat-mdc-fab[disabled]:focus,.mat-mdc-fab.mat-mdc-button-disabled,.mat-mdc-fab.mat-mdc-button-disabled:focus,.mat-mdc-mini-fab[disabled],.mat-mdc-mini-fab[disabled]:focus,.mat-mdc-mini-fab.mat-mdc-button-disabled,.mat-mdc-mini-fab.mat-mdc-button-disabled:focus{box-shadow:none}.mat-mdc-fab.mat-mdc-button-disabled-interactive,.mat-mdc-mini-fab.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-fab{color:var(--mat-fab-foreground-color, inherit);box-shadow:var(--mdc-fab-container-elevation-shadow)}.mat-mdc-fab .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%);display:var(--mat-fab-touch-target-display)}.mat-mdc-fab .mat-ripple-element{background-color:var(--mat-fab-ripple-color)}.mat-mdc-fab .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-fab-state-layer-color)}.mat-mdc-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-fab-disabled-state-layer-color)}.mat-mdc-fab:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-hover-state-layer-opacity)}.mat-mdc-fab.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-fab.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-fab.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-focus-state-layer-opacity)}.mat-mdc-fab:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-pressed-state-layer-opacity)}.mat-mdc-fab:hover{box-shadow:var(--mdc-fab-hover-container-elevation-shadow)}.mat-mdc-fab:focus{box-shadow:var(--mdc-fab-focus-container-elevation-shadow)}.mat-mdc-fab:active,.mat-mdc-fab:focus:active{box-shadow:var(--mdc-fab-pressed-container-elevation-shadow)}.mat-mdc-fab[disabled],.mat-mdc-fab.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mat-fab-disabled-state-foreground-color);background-color:var(--mat-fab-disabled-state-container-color)}.mat-mdc-fab.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-mini-fab{color:var(--mat-fab-small-foreground-color, inherit);box-shadow:var(--mdc-fab-small-container-elevation-shadow)}.mat-mdc-mini-fab .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%);display:var(--mat-fab-small-touch-target-display)}.mat-mdc-mini-fab .mat-ripple-element{background-color:var(--mat-fab-small-ripple-color)}.mat-mdc-mini-fab .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-fab-small-state-layer-color)}.mat-mdc-mini-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-fab-small-disabled-state-layer-color)}.mat-mdc-mini-fab:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-small-hover-state-layer-opacity)}.mat-mdc-mini-fab.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-mini-fab.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-mini-fab.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-small-focus-state-layer-opacity)}.mat-mdc-mini-fab:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-small-pressed-state-layer-opacity)}.mat-mdc-mini-fab:hover{box-shadow:var(--mdc-fab-small-hover-container-elevation-shadow)}.mat-mdc-mini-fab:focus{box-shadow:var(--mdc-fab-small-focus-container-elevation-shadow)}.mat-mdc-mini-fab:active,.mat-mdc-mini-fab:focus:active{box-shadow:var(--mdc-fab-small-pressed-container-elevation-shadow)}.mat-mdc-mini-fab[disabled],.mat-mdc-mini-fab.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mat-fab-small-disabled-state-foreground-color);background-color:var(--mat-fab-small-disabled-state-container-color)}.mat-mdc-mini-fab.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-extended-fab{box-shadow:var(--mdc-extended-fab-container-elevation-shadow)}.mat-mdc-extended-fab:hover{box-shadow:var(--mdc-extended-fab-hover-container-elevation-shadow)}.mat-mdc-extended-fab:focus{box-shadow:var(--mdc-extended-fab-focus-container-elevation-shadow)}.mat-mdc-extended-fab:active,.mat-mdc-extended-fab:focus:active{box-shadow:var(--mdc-extended-fab-pressed-container-elevation-shadow)}.mat-mdc-extended-fab[disabled],.mat-mdc-extended-fab.mat-mdc-button-disabled{cursor:default;pointer-events:none}.mat-mdc-extended-fab[disabled],.mat-mdc-extended-fab[disabled]:focus,.mat-mdc-extended-fab.mat-mdc-button-disabled,.mat-mdc-extended-fab.mat-mdc-button-disabled:focus{box-shadow:none}.mat-mdc-extended-fab.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-extended-fab>.mat-icon,.mat-mdc-extended-fab>.material-icons{margin-left:calc(12px - 20px);margin-right:12px}[dir=rtl] .mat-mdc-extended-fab>.mat-icon,[dir=rtl] .mat-mdc-extended-fab>.material-icons,.mat-mdc-extended-fab>.mat-icon[dir=rtl],.mat-mdc-extended-fab>.material-icons[dir=rtl]{margin-left:12px;margin-right:calc(12px - 20px)}.mat-mdc-extended-fab .mat-mdc-button-touch-target{width:100%}.mat-mdc-extended-fab .mdc-button__label+.mat-icon,.mat-mdc-extended-fab .mdc-button__label+.material-icons{margin-left:12px;margin-right:calc(12px - 20px)}[dir=rtl] .mat-mdc-extended-fab .mdc-button__label+.mat-icon,[dir=rtl] .mat-mdc-extended-fab .mdc-button__label+.material-icons,.mat-mdc-extended-fab .mdc-button__label+.mat-icon[dir=rtl],.mat-mdc-extended-fab .mdc-button__label+.material-icons[dir=rtl]{margin-left:calc(12px - 20px);margin-right:12px}';
var _c8 = ["mat-icon-button", ""];
var _c9 = ["*"];
var _c10 = '.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:rgba(0,0,0,0);fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;user-select:none;z-index:0;overflow:visible}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}@media screen and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{display:block}}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button[hidden]{display:none}.mdc-icon-button--display-flex{align-items:center;display:inline-flex;justify-content:center}.mdc-icon-button__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%;display:none}@media screen and (forced-colors: active){.mdc-icon-button__focus-ring{border-color:CanvasText}}.mdc-icon-button__focus-ring::after{content:"";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-icon-button__focus-ring::after{border-color:CanvasText}}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}.mdc-icon-button__link{height:100%;left:0;outline:none;position:absolute;top:0;width:100%}.mat-mdc-icon-button{color:var(--mdc-icon-button-icon-color)}.mat-mdc-icon-button .mdc-button__icon{font-size:var(--mdc-icon-button-icon-size)}.mat-mdc-icon-button svg,.mat-mdc-icon-button img{width:var(--mdc-icon-button-icon-size);height:var(--mdc-icon-button-icon-size)}.mat-mdc-icon-button:disabled{color:var(--mdc-icon-button-disabled-icon-color)}.mat-mdc-icon-button{border-radius:50%;flex-shrink:0;text-align:center;width:var(--mdc-icon-button-state-layer-size, 48px);height:var(--mdc-icon-button-state-layer-size, 48px);padding:calc(calc(var(--mdc-icon-button-state-layer-size, 48px) - var(--mdc-icon-button-icon-size, 24px)) / 2);font-size:var(--mdc-icon-button-icon-size);-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-icon-button svg{vertical-align:baseline}.mat-mdc-icon-button[disabled],.mat-mdc-icon-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-icon-button-disabled-icon-color)}.mat-mdc-icon-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-icon-button .mat-mdc-button-ripple,.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-icon-button .mat-mdc-button-ripple{overflow:hidden}.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before{content:"";opacity:0}.mat-mdc-icon-button .mdc-button__label{z-index:1}.mat-mdc-icon-button .mat-mdc-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute}.mat-mdc-icon-button:focus .mat-mdc-focus-indicator::before{content:""}.mat-mdc-icon-button .mat-ripple-element{background-color:var(--mat-icon-button-ripple-color)}.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-icon-button-state-layer-color)}.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-icon-button-disabled-state-layer-color)}.mat-mdc-icon-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-icon-button-hover-state-layer-opacity)}.mat-mdc-icon-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-icon-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-icon-button-focus-state-layer-opacity)}.mat-mdc-icon-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-icon-button-pressed-state-layer-opacity)}.mat-mdc-icon-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%);display:var(--mat-icon-button-touch-target-display)}.mat-mdc-icon-button._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mdc-icon-button .mat-mdc-button-persistent-ripple{border-radius:50%}.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before{background:rgba(0,0,0,0);opacity:1}';
var MAT_BUTTON_CONFIG = new InjectionToken("MAT_BUTTON_CONFIG");
var MAT_BUTTON_HOST = {
  "[attr.disabled]": "_getDisabledAttribute()",
  "[attr.aria-disabled]": "_getAriaDisabled()",
  "[class.mat-mdc-button-disabled]": "disabled",
  "[class.mat-mdc-button-disabled-interactive]": "disabledInteractive",
  "[class._mat-animation-noopable]": '_animationMode === "NoopAnimations"',
  // MDC automatically applies the primary theme color to the button, but we want to support
  // an unthemed version. If color is undefined, apply a CSS class that makes it easy to
  // select and style this "theme".
  "[class.mat-unthemed]": "!color",
  // Add a class that applies to all buttons. This makes it easier to target if somebody
  // wants to target all Material buttons.
  "[class.mat-mdc-button-base]": "true",
  "[class]": 'color ? "mat-" + color : ""'
};
var HOST_SELECTOR_MDC_CLASS_PAIR = [{
  attribute: "mat-button",
  mdcClasses: ["mdc-button", "mat-mdc-button"]
}, {
  attribute: "mat-flat-button",
  mdcClasses: ["mdc-button", "mdc-button--unelevated", "mat-mdc-unelevated-button"]
}, {
  attribute: "mat-raised-button",
  mdcClasses: ["mdc-button", "mdc-button--raised", "mat-mdc-raised-button"]
}, {
  attribute: "mat-stroked-button",
  mdcClasses: ["mdc-button", "mdc-button--outlined", "mat-mdc-outlined-button"]
}, {
  attribute: "mat-fab",
  mdcClasses: ["mdc-fab", "mat-mdc-fab"]
}, {
  attribute: "mat-mini-fab",
  mdcClasses: ["mdc-fab", "mdc-fab--mini", "mat-mdc-mini-fab"]
}, {
  attribute: "mat-icon-button",
  mdcClasses: ["mdc-icon-button", "mat-mdc-icon-button"]
}];
var _MatButtonBase = class _MatButtonBase {
  /**
   * Reference to the MatRipple instance of the button.
   * @deprecated Considered an implementation detail. To be removed.
   * @breaking-change 17.0.0
   */
  get ripple() {
    return this._rippleLoader?.getRipple(this._elementRef.nativeElement);
  }
  set ripple(v) {
    this._rippleLoader?.attachRipple(this._elementRef.nativeElement, v);
  }
  /** Whether the ripple effect is disabled or not. */
  get disableRipple() {
    return this._disableRipple;
  }
  set disableRipple(value) {
    this._disableRipple = value;
    this._updateRippleDisabled();
  }
  /** Whether the button is disabled. */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
    this._updateRippleDisabled();
  }
  constructor(_elementRef, _platform, _ngZone, _animationMode) {
    this._elementRef = _elementRef;
    this._platform = _platform;
    this._ngZone = _ngZone;
    this._animationMode = _animationMode;
    this._focusMonitor = inject(FocusMonitor);
    this._rippleLoader = inject(MatRippleLoader);
    this._isFab = false;
    this._disableRipple = false;
    this._disabled = false;
    const config = inject(MAT_BUTTON_CONFIG, {
      optional: true
    });
    const element = _elementRef.nativeElement;
    const classList = element.classList;
    this.disabledInteractive = config?.disabledInteractive ?? false;
    this._rippleLoader?.configureRipple(element, {
      className: "mat-mdc-button-ripple"
    });
    for (const {
      attribute,
      mdcClasses
    } of HOST_SELECTOR_MDC_CLASS_PAIR) {
      if (element.hasAttribute(attribute)) {
        classList.add(...mdcClasses);
      }
    }
  }
  ngAfterViewInit() {
    this._focusMonitor.monitor(this._elementRef, true);
  }
  ngOnDestroy() {
    this._focusMonitor.stopMonitoring(this._elementRef);
    this._rippleLoader?.destroyRipple(this._elementRef.nativeElement);
  }
  /** Focuses the button. */
  focus(origin = "program", options) {
    if (origin) {
      this._focusMonitor.focusVia(this._elementRef.nativeElement, origin, options);
    } else {
      this._elementRef.nativeElement.focus(options);
    }
  }
  _getAriaDisabled() {
    if (this.ariaDisabled != null) {
      return this.ariaDisabled;
    }
    return this.disabled && this.disabledInteractive ? true : null;
  }
  _getDisabledAttribute() {
    return this.disabledInteractive || !this.disabled ? null : true;
  }
  _updateRippleDisabled() {
    this._rippleLoader?.setDisabled(this._elementRef.nativeElement, this.disableRipple || this.disabled);
  }
};
_MatButtonBase.ɵfac = function MatButtonBase_Factory(t) {
  ɵɵinvalidFactory();
};
_MatButtonBase.ɵdir = ɵɵdefineDirective({
  type: _MatButtonBase,
  inputs: {
    color: "color",
    disableRipple: [InputFlags.HasDecoratorInputTransform, "disableRipple", "disableRipple", booleanAttribute],
    disabled: [InputFlags.HasDecoratorInputTransform, "disabled", "disabled", booleanAttribute],
    ariaDisabled: [InputFlags.HasDecoratorInputTransform, "aria-disabled", "ariaDisabled", booleanAttribute],
    disabledInteractive: [InputFlags.HasDecoratorInputTransform, "disabledInteractive", "disabledInteractive", booleanAttribute]
  },
  features: [ɵɵInputTransformsFeature]
});
var MatButtonBase = _MatButtonBase;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatButtonBase, [{
    type: Directive
  }], () => [{
    type: ElementRef
  }, {
    type: Platform
  }, {
    type: NgZone
  }, {
    type: void 0
  }], {
    color: [{
      type: Input
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    ariaDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute,
        alias: "aria-disabled"
      }]
    }],
    disabledInteractive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var MAT_ANCHOR_HOST = {
  "[attr.disabled]": "_getDisabledAttribute()",
  "[class.mat-mdc-button-disabled]": "disabled",
  "[class.mat-mdc-button-disabled-interactive]": "disabledInteractive",
  "[class._mat-animation-noopable]": '_animationMode === "NoopAnimations"',
  // Note that we ignore the user-specified tabindex when it's disabled for
  // consistency with the `mat-button` applied on native buttons where even
  // though they have an index, they're not tabbable.
  "[attr.tabindex]": "disabled && !disabledInteractive ? -1 : tabIndex",
  "[attr.aria-disabled]": "_getDisabledAttribute()",
  // MDC automatically applies the primary theme color to the button, but we want to support
  // an unthemed version. If color is undefined, apply a CSS class that makes it easy to
  // select and style this "theme".
  "[class.mat-unthemed]": "!color",
  // Add a class that applies to all buttons. This makes it easier to target if somebody
  // wants to target all Material buttons.
  "[class.mat-mdc-button-base]": "true",
  "[class]": 'color ? "mat-" + color : ""'
};
var _MatAnchorBase = class _MatAnchorBase extends MatButtonBase {
  constructor(elementRef, platform, ngZone, animationMode) {
    super(elementRef, platform, ngZone, animationMode);
    this._haltDisabledEvents = (event) => {
      if (this.disabled) {
        event.preventDefault();
        event.stopImmediatePropagation();
      }
    };
  }
  ngOnInit() {
    this._ngZone.runOutsideAngular(() => {
      this._elementRef.nativeElement.addEventListener("click", this._haltDisabledEvents);
    });
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this._elementRef.nativeElement.removeEventListener("click", this._haltDisabledEvents);
  }
  _getAriaDisabled() {
    return this.ariaDisabled == null ? this.disabled : this.ariaDisabled;
  }
};
_MatAnchorBase.ɵfac = function MatAnchorBase_Factory(t) {
  ɵɵinvalidFactory();
};
_MatAnchorBase.ɵdir = ɵɵdefineDirective({
  type: _MatAnchorBase,
  inputs: {
    tabIndex: [InputFlags.HasDecoratorInputTransform, "tabIndex", "tabIndex", (value) => {
      return value == null ? void 0 : numberAttribute(value);
    }]
  },
  features: [ɵɵInputTransformsFeature, ɵɵInheritDefinitionFeature]
});
var MatAnchorBase = _MatAnchorBase;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatAnchorBase, [{
    type: Directive
  }], () => [{
    type: ElementRef
  }, {
    type: Platform
  }, {
    type: NgZone
  }, {
    type: void 0
  }], {
    tabIndex: [{
      type: Input,
      args: [{
        transform: (value) => {
          return value == null ? void 0 : numberAttribute(value);
        }
      }]
    }]
  });
})();
var _MatButton = class _MatButton extends MatButtonBase {
  constructor(elementRef, platform, ngZone, animationMode) {
    super(elementRef, platform, ngZone, animationMode);
  }
};
_MatButton.ɵfac = function MatButton_Factory(t) {
  return new (t || _MatButton)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8));
};
_MatButton.ɵcmp = ɵɵdefineComponent({
  type: _MatButton,
  selectors: [["button", "mat-button", ""], ["button", "mat-raised-button", ""], ["button", "mat-flat-button", ""], ["button", "mat-stroked-button", ""]],
  hostVars: 14,
  hostBindings: function MatButton_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("disabled", ctx._getDisabledAttribute())("aria-disabled", ctx._getAriaDisabled());
      ɵɵclassMap(ctx.color ? "mat-" + ctx.color : "");
      ɵɵclassProp("mat-mdc-button-disabled", ctx.disabled)("mat-mdc-button-disabled-interactive", ctx.disabledInteractive)("_mat-animation-noopable", ctx._animationMode === "NoopAnimations")("mat-unthemed", !ctx.color)("mat-mdc-button-base", true);
    }
  },
  exportAs: ["matButton"],
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  attrs: _c0,
  ngContentSelectors: _c2,
  decls: 7,
  vars: 4,
  consts: [[1, "mat-mdc-button-persistent-ripple"], [1, "mdc-button__label"], [1, "mat-mdc-focus-indicator"], [1, "mat-mdc-button-touch-target"]],
  template: function MatButton_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c1);
      ɵɵelement(0, "span", 0);
      ɵɵprojection(1);
      ɵɵelementStart(2, "span", 1);
      ɵɵprojection(3, 1);
      ɵɵelementEnd();
      ɵɵprojection(4, 2);
      ɵɵelement(5, "span", 2)(6, "span", 3);
    }
    if (rf & 2) {
      ɵɵclassProp("mdc-button__ripple", !ctx._isFab)("mdc-fab__ripple", ctx._isFab);
    }
  },
  styles: ['.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button{position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;background:rgba(0,0,0,0)}.mdc-button .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button[hidden]{display:none}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button .mdc-button__progress-indicator{font-size:0;position:absolute;transform:translate(-50%, -50%);top:50%;left:50%;line-height:initial}.mdc-button .mdc-button__label{position:relative}.mdc-button .mdc-button__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px);display:none}@media screen and (forced-colors: active){.mdc-button .mdc-button__focus-ring{border-color:CanvasText}}.mdc-button .mdc-button__focus-ring::after{content:"";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-button .mdc-button__focus-ring::after{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring{display:block}}.mdc-button .mdc-button__touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--touch{margin-top:6px;margin-bottom:6px}.mdc-button{padding:0 8px 0 8px}.mdc-button--unelevated{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--unelevated.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--unelevated.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--raised{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--raised.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--raised.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--outlined{border-style:solid;transition:border 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--outlined .mdc-button__ripple{border-style:solid;border-color:rgba(0,0,0,0)}.mat-mdc-button{font-family:var(--mdc-text-button-label-text-font);font-size:var(--mdc-text-button-label-text-size);letter-spacing:var(--mdc-text-button-label-text-tracking);font-weight:var(--mdc-text-button-label-text-weight);text-transform:var(--mdc-text-button-label-text-transform);height:var(--mdc-text-button-container-height);border-radius:var(--mdc-text-button-container-shape);padding:0 var(--mat-text-button-horizontal-padding, 8px)}.mat-mdc-button:not(:disabled){color:var(--mdc-text-button-label-text-color)}.mat-mdc-button:disabled{color:var(--mdc-text-button-disabled-label-text-color)}.mat-mdc-button .mdc-button__ripple{border-radius:var(--mdc-text-button-container-shape)}.mat-mdc-button:has(.material-icons,mat-icon,[matButtonIcon]){padding:0 var(--mat-text-button-with-icon-horizontal-padding, 8px)}.mat-mdc-button>.mat-icon{margin-right:var(--mat-text-button-icon-spacing, 8px);margin-left:var(--mat-text-button-icon-offset, 0)}[dir=rtl] .mat-mdc-button>.mat-icon{margin-right:var(--mat-text-button-icon-offset, 0);margin-left:var(--mat-text-button-icon-spacing, 8px)}.mat-mdc-button .mdc-button__label+.mat-icon{margin-right:var(--mat-text-button-icon-offset, 0);margin-left:var(--mat-text-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-button .mdc-button__label+.mat-icon{margin-right:var(--mat-text-button-icon-spacing, 8px);margin-left:var(--mat-text-button-icon-offset, 0)}.mat-mdc-button .mat-ripple-element{background-color:var(--mat-text-button-ripple-color)}.mat-mdc-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-text-button-state-layer-color)}.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-text-button-disabled-state-layer-color)}.mat-mdc-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-hover-state-layer-opacity)}.mat-mdc-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-focus-state-layer-opacity)}.mat-mdc-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-pressed-state-layer-opacity)}.mat-mdc-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-text-button-touch-target-display)}.mat-mdc-button[disabled],.mat-mdc-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-text-button-disabled-label-text-color)}.mat-mdc-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-unelevated-button{font-family:var(--mdc-filled-button-label-text-font);font-size:var(--mdc-filled-button-label-text-size);letter-spacing:var(--mdc-filled-button-label-text-tracking);font-weight:var(--mdc-filled-button-label-text-weight);text-transform:var(--mdc-filled-button-label-text-transform);height:var(--mdc-filled-button-container-height);border-radius:var(--mdc-filled-button-container-shape);padding:0 var(--mat-filled-button-horizontal-padding, 16px)}.mat-mdc-unelevated-button:not(:disabled){background-color:var(--mdc-filled-button-container-color)}.mat-mdc-unelevated-button:disabled{background-color:var(--mdc-filled-button-disabled-container-color)}.mat-mdc-unelevated-button:not(:disabled){color:var(--mdc-filled-button-label-text-color)}.mat-mdc-unelevated-button:disabled{color:var(--mdc-filled-button-disabled-label-text-color)}.mat-mdc-unelevated-button .mdc-button__ripple{border-radius:var(--mdc-filled-button-container-shape)}.mat-mdc-unelevated-button>.mat-icon{margin-right:var(--mat-filled-button-icon-spacing, 8px);margin-left:var(--mat-filled-button-icon-offset, -4px)}[dir=rtl] .mat-mdc-unelevated-button>.mat-icon{margin-right:var(--mat-filled-button-icon-offset, -4px);margin-left:var(--mat-filled-button-icon-spacing, 8px)}.mat-mdc-unelevated-button .mdc-button__label+.mat-icon{margin-right:var(--mat-filled-button-icon-offset, -4px);margin-left:var(--mat-filled-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label+.mat-icon{margin-right:var(--mat-filled-button-icon-spacing, 8px);margin-left:var(--mat-filled-button-icon-offset, -4px)}.mat-mdc-unelevated-button .mat-ripple-element{background-color:var(--mat-filled-button-ripple-color)}.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-filled-button-state-layer-color)}.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-filled-button-disabled-state-layer-color)}.mat-mdc-unelevated-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-hover-state-layer-opacity)}.mat-mdc-unelevated-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-focus-state-layer-opacity)}.mat-mdc-unelevated-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-pressed-state-layer-opacity)}.mat-mdc-unelevated-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-filled-button-touch-target-display)}.mat-mdc-unelevated-button[disabled],.mat-mdc-unelevated-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-filled-button-disabled-label-text-color);background-color:var(--mdc-filled-button-disabled-container-color)}.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-raised-button{font-family:var(--mdc-protected-button-label-text-font);font-size:var(--mdc-protected-button-label-text-size);letter-spacing:var(--mdc-protected-button-label-text-tracking);font-weight:var(--mdc-protected-button-label-text-weight);text-transform:var(--mdc-protected-button-label-text-transform);height:var(--mdc-protected-button-container-height);border-radius:var(--mdc-protected-button-container-shape);padding:0 var(--mat-protected-button-horizontal-padding, 16px);box-shadow:var(--mdc-protected-button-container-elevation-shadow)}.mat-mdc-raised-button:not(:disabled){background-color:var(--mdc-protected-button-container-color)}.mat-mdc-raised-button:disabled{background-color:var(--mdc-protected-button-disabled-container-color)}.mat-mdc-raised-button:not(:disabled){color:var(--mdc-protected-button-label-text-color)}.mat-mdc-raised-button:disabled{color:var(--mdc-protected-button-disabled-label-text-color)}.mat-mdc-raised-button .mdc-button__ripple{border-radius:var(--mdc-protected-button-container-shape)}.mat-mdc-raised-button>.mat-icon{margin-right:var(--mat-protected-button-icon-spacing, 8px);margin-left:var(--mat-protected-button-icon-offset, -4px)}[dir=rtl] .mat-mdc-raised-button>.mat-icon{margin-right:var(--mat-protected-button-icon-offset, -4px);margin-left:var(--mat-protected-button-icon-spacing, 8px)}.mat-mdc-raised-button .mdc-button__label+.mat-icon{margin-right:var(--mat-protected-button-icon-offset, -4px);margin-left:var(--mat-protected-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-raised-button .mdc-button__label+.mat-icon{margin-right:var(--mat-protected-button-icon-spacing, 8px);margin-left:var(--mat-protected-button-icon-offset, -4px)}.mat-mdc-raised-button .mat-ripple-element{background-color:var(--mat-protected-button-ripple-color)}.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-protected-button-state-layer-color)}.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-protected-button-disabled-state-layer-color)}.mat-mdc-raised-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-hover-state-layer-opacity)}.mat-mdc-raised-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-focus-state-layer-opacity)}.mat-mdc-raised-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-pressed-state-layer-opacity)}.mat-mdc-raised-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-protected-button-touch-target-display)}.mat-mdc-raised-button:hover{box-shadow:var(--mdc-protected-button-hover-container-elevation-shadow)}.mat-mdc-raised-button:focus{box-shadow:var(--mdc-protected-button-focus-container-elevation-shadow)}.mat-mdc-raised-button:active,.mat-mdc-raised-button:focus:active{box-shadow:var(--mdc-protected-button-pressed-container-elevation-shadow)}.mat-mdc-raised-button[disabled],.mat-mdc-raised-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-protected-button-disabled-label-text-color);background-color:var(--mdc-protected-button-disabled-container-color)}.mat-mdc-raised-button[disabled].mat-mdc-button-disabled,.mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled{box-shadow:var(--mdc-protected-button-disabled-container-elevation-shadow)}.mat-mdc-raised-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-outlined-button{font-family:var(--mdc-outlined-button-label-text-font);font-size:var(--mdc-outlined-button-label-text-size);letter-spacing:var(--mdc-outlined-button-label-text-tracking);font-weight:var(--mdc-outlined-button-label-text-weight);text-transform:var(--mdc-outlined-button-label-text-transform);height:var(--mdc-outlined-button-container-height);border-radius:var(--mdc-outlined-button-container-shape);padding:0 15px 0 15px;border-width:var(--mdc-outlined-button-outline-width);padding:0 var(--mat-outlined-button-horizontal-padding, 15px)}.mat-mdc-outlined-button:not(:disabled){color:var(--mdc-outlined-button-label-text-color)}.mat-mdc-outlined-button:disabled{color:var(--mdc-outlined-button-disabled-label-text-color)}.mat-mdc-outlined-button .mdc-button__ripple{border-radius:var(--mdc-outlined-button-container-shape)}.mat-mdc-outlined-button:not(:disabled){border-color:var(--mdc-outlined-button-outline-color)}.mat-mdc-outlined-button:disabled{border-color:var(--mdc-outlined-button-disabled-outline-color)}.mat-mdc-outlined-button.mdc-button--icon-trailing{padding:0 11px 0 15px}.mat-mdc-outlined-button.mdc-button--icon-leading{padding:0 15px 0 11px}.mat-mdc-outlined-button .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px;border-width:var(--mdc-outlined-button-outline-width)}.mat-mdc-outlined-button .mdc-button__touch{left:calc(-1 * var(--mdc-outlined-button-outline-width));width:calc(100% + 2 * var(--mdc-outlined-button-outline-width))}.mat-mdc-outlined-button>.mat-icon{margin-right:var(--mat-outlined-button-icon-spacing, 8px);margin-left:var(--mat-outlined-button-icon-offset, -4px)}[dir=rtl] .mat-mdc-outlined-button>.mat-icon{margin-right:var(--mat-outlined-button-icon-offset, -4px);margin-left:var(--mat-outlined-button-icon-spacing, 8px)}.mat-mdc-outlined-button .mdc-button__label+.mat-icon{margin-right:var(--mat-outlined-button-icon-offset, -4px);margin-left:var(--mat-outlined-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-outlined-button .mdc-button__label+.mat-icon{margin-right:var(--mat-outlined-button-icon-spacing, 8px);margin-left:var(--mat-outlined-button-icon-offset, -4px)}.mat-mdc-outlined-button .mat-ripple-element{background-color:var(--mat-outlined-button-ripple-color)}.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-outlined-button-state-layer-color)}.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-outlined-button-disabled-state-layer-color)}.mat-mdc-outlined-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-hover-state-layer-opacity)}.mat-mdc-outlined-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-focus-state-layer-opacity)}.mat-mdc-outlined-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-pressed-state-layer-opacity)}.mat-mdc-outlined-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-outlined-button-touch-target-display)}.mat-mdc-outlined-button[disabled],.mat-mdc-outlined-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-outlined-button-disabled-label-text-color);border-color:var(--mdc-outlined-button-disabled-outline-color)}.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-button-base{text-decoration:none}.mat-mdc-button,.mat-mdc-unelevated-button,.mat-mdc-raised-button,.mat-mdc-outlined-button{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-button .mat-mdc-button-ripple,.mat-mdc-button .mat-mdc-button-persistent-ripple,.mat-mdc-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button .mat-mdc-button-ripple,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button .mat-mdc-button-ripple,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-button .mat-mdc-button-ripple,.mat-mdc-unelevated-button .mat-mdc-button-ripple,.mat-mdc-raised-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mat-mdc-button-ripple{overflow:hidden}.mat-mdc-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{content:"";opacity:0}.mat-mdc-button .mdc-button__label,.mat-mdc-unelevated-button .mdc-button__label,.mat-mdc-raised-button .mdc-button__label,.mat-mdc-outlined-button .mdc-button__label{z-index:1}.mat-mdc-button .mat-mdc-focus-indicator,.mat-mdc-unelevated-button .mat-mdc-focus-indicator,.mat-mdc-raised-button .mat-mdc-focus-indicator,.mat-mdc-outlined-button .mat-mdc-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute}.mat-mdc-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-unelevated-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-raised-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-outlined-button:focus .mat-mdc-focus-indicator::before{content:""}.mat-mdc-button._mat-animation-noopable,.mat-mdc-unelevated-button._mat-animation-noopable,.mat-mdc-raised-button._mat-animation-noopable,.mat-mdc-outlined-button._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mdc-button>.mat-icon,.mat-mdc-unelevated-button>.mat-icon,.mat-mdc-raised-button>.mat-icon,.mat-mdc-outlined-button>.mat-icon{display:inline-block;position:relative;vertical-align:top;font-size:1.125rem;height:1.125rem;width:1.125rem}.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px;border-width:-1px}.mat-mdc-unelevated-button .mat-mdc-focus-indicator::before,.mat-mdc-raised-button .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-mdc-outlined-button .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 3px)*-1)}', ".cdk-high-contrast-active .mat-mdc-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-unelevated-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-raised-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-outlined-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-icon-button{outline:solid 1px}"],
  encapsulation: 2,
  changeDetection: 0
});
var MatButton = _MatButton;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatButton, [{
    type: Component,
    args: [{
      selector: `
    button[mat-button], button[mat-raised-button], button[mat-flat-button],
    button[mat-stroked-button]
  `,
      host: MAT_BUTTON_HOST,
      exportAs: "matButton",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      template: `<span
    class="mat-mdc-button-persistent-ripple"
    [class.mdc-button__ripple]="!_isFab"
    [class.mdc-fab__ripple]="_isFab"></span>

<ng-content select=".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])">
</ng-content>

<span class="mdc-button__label"><ng-content></ng-content></span>

<ng-content select=".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]">
</ng-content>

<!--
  The indicator can't be directly on the button, because MDC uses ::before for high contrast
  indication and it can't be on the ripple, because it has a border radius and overflow: hidden.
-->
<span class="mat-mdc-focus-indicator"></span>

<span class="mat-mdc-button-touch-target"></span>
`,
      styles: ['.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button{position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;background:rgba(0,0,0,0)}.mdc-button .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button[hidden]{display:none}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button .mdc-button__progress-indicator{font-size:0;position:absolute;transform:translate(-50%, -50%);top:50%;left:50%;line-height:initial}.mdc-button .mdc-button__label{position:relative}.mdc-button .mdc-button__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px);display:none}@media screen and (forced-colors: active){.mdc-button .mdc-button__focus-ring{border-color:CanvasText}}.mdc-button .mdc-button__focus-ring::after{content:"";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-button .mdc-button__focus-ring::after{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring{display:block}}.mdc-button .mdc-button__touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--touch{margin-top:6px;margin-bottom:6px}.mdc-button{padding:0 8px 0 8px}.mdc-button--unelevated{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--unelevated.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--unelevated.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--raised{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--raised.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--raised.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--outlined{border-style:solid;transition:border 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--outlined .mdc-button__ripple{border-style:solid;border-color:rgba(0,0,0,0)}.mat-mdc-button{font-family:var(--mdc-text-button-label-text-font);font-size:var(--mdc-text-button-label-text-size);letter-spacing:var(--mdc-text-button-label-text-tracking);font-weight:var(--mdc-text-button-label-text-weight);text-transform:var(--mdc-text-button-label-text-transform);height:var(--mdc-text-button-container-height);border-radius:var(--mdc-text-button-container-shape);padding:0 var(--mat-text-button-horizontal-padding, 8px)}.mat-mdc-button:not(:disabled){color:var(--mdc-text-button-label-text-color)}.mat-mdc-button:disabled{color:var(--mdc-text-button-disabled-label-text-color)}.mat-mdc-button .mdc-button__ripple{border-radius:var(--mdc-text-button-container-shape)}.mat-mdc-button:has(.material-icons,mat-icon,[matButtonIcon]){padding:0 var(--mat-text-button-with-icon-horizontal-padding, 8px)}.mat-mdc-button>.mat-icon{margin-right:var(--mat-text-button-icon-spacing, 8px);margin-left:var(--mat-text-button-icon-offset, 0)}[dir=rtl] .mat-mdc-button>.mat-icon{margin-right:var(--mat-text-button-icon-offset, 0);margin-left:var(--mat-text-button-icon-spacing, 8px)}.mat-mdc-button .mdc-button__label+.mat-icon{margin-right:var(--mat-text-button-icon-offset, 0);margin-left:var(--mat-text-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-button .mdc-button__label+.mat-icon{margin-right:var(--mat-text-button-icon-spacing, 8px);margin-left:var(--mat-text-button-icon-offset, 0)}.mat-mdc-button .mat-ripple-element{background-color:var(--mat-text-button-ripple-color)}.mat-mdc-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-text-button-state-layer-color)}.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-text-button-disabled-state-layer-color)}.mat-mdc-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-hover-state-layer-opacity)}.mat-mdc-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-focus-state-layer-opacity)}.mat-mdc-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-pressed-state-layer-opacity)}.mat-mdc-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-text-button-touch-target-display)}.mat-mdc-button[disabled],.mat-mdc-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-text-button-disabled-label-text-color)}.mat-mdc-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-unelevated-button{font-family:var(--mdc-filled-button-label-text-font);font-size:var(--mdc-filled-button-label-text-size);letter-spacing:var(--mdc-filled-button-label-text-tracking);font-weight:var(--mdc-filled-button-label-text-weight);text-transform:var(--mdc-filled-button-label-text-transform);height:var(--mdc-filled-button-container-height);border-radius:var(--mdc-filled-button-container-shape);padding:0 var(--mat-filled-button-horizontal-padding, 16px)}.mat-mdc-unelevated-button:not(:disabled){background-color:var(--mdc-filled-button-container-color)}.mat-mdc-unelevated-button:disabled{background-color:var(--mdc-filled-button-disabled-container-color)}.mat-mdc-unelevated-button:not(:disabled){color:var(--mdc-filled-button-label-text-color)}.mat-mdc-unelevated-button:disabled{color:var(--mdc-filled-button-disabled-label-text-color)}.mat-mdc-unelevated-button .mdc-button__ripple{border-radius:var(--mdc-filled-button-container-shape)}.mat-mdc-unelevated-button>.mat-icon{margin-right:var(--mat-filled-button-icon-spacing, 8px);margin-left:var(--mat-filled-button-icon-offset, -4px)}[dir=rtl] .mat-mdc-unelevated-button>.mat-icon{margin-right:var(--mat-filled-button-icon-offset, -4px);margin-left:var(--mat-filled-button-icon-spacing, 8px)}.mat-mdc-unelevated-button .mdc-button__label+.mat-icon{margin-right:var(--mat-filled-button-icon-offset, -4px);margin-left:var(--mat-filled-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label+.mat-icon{margin-right:var(--mat-filled-button-icon-spacing, 8px);margin-left:var(--mat-filled-button-icon-offset, -4px)}.mat-mdc-unelevated-button .mat-ripple-element{background-color:var(--mat-filled-button-ripple-color)}.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-filled-button-state-layer-color)}.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-filled-button-disabled-state-layer-color)}.mat-mdc-unelevated-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-hover-state-layer-opacity)}.mat-mdc-unelevated-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-focus-state-layer-opacity)}.mat-mdc-unelevated-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-pressed-state-layer-opacity)}.mat-mdc-unelevated-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-filled-button-touch-target-display)}.mat-mdc-unelevated-button[disabled],.mat-mdc-unelevated-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-filled-button-disabled-label-text-color);background-color:var(--mdc-filled-button-disabled-container-color)}.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-raised-button{font-family:var(--mdc-protected-button-label-text-font);font-size:var(--mdc-protected-button-label-text-size);letter-spacing:var(--mdc-protected-button-label-text-tracking);font-weight:var(--mdc-protected-button-label-text-weight);text-transform:var(--mdc-protected-button-label-text-transform);height:var(--mdc-protected-button-container-height);border-radius:var(--mdc-protected-button-container-shape);padding:0 var(--mat-protected-button-horizontal-padding, 16px);box-shadow:var(--mdc-protected-button-container-elevation-shadow)}.mat-mdc-raised-button:not(:disabled){background-color:var(--mdc-protected-button-container-color)}.mat-mdc-raised-button:disabled{background-color:var(--mdc-protected-button-disabled-container-color)}.mat-mdc-raised-button:not(:disabled){color:var(--mdc-protected-button-label-text-color)}.mat-mdc-raised-button:disabled{color:var(--mdc-protected-button-disabled-label-text-color)}.mat-mdc-raised-button .mdc-button__ripple{border-radius:var(--mdc-protected-button-container-shape)}.mat-mdc-raised-button>.mat-icon{margin-right:var(--mat-protected-button-icon-spacing, 8px);margin-left:var(--mat-protected-button-icon-offset, -4px)}[dir=rtl] .mat-mdc-raised-button>.mat-icon{margin-right:var(--mat-protected-button-icon-offset, -4px);margin-left:var(--mat-protected-button-icon-spacing, 8px)}.mat-mdc-raised-button .mdc-button__label+.mat-icon{margin-right:var(--mat-protected-button-icon-offset, -4px);margin-left:var(--mat-protected-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-raised-button .mdc-button__label+.mat-icon{margin-right:var(--mat-protected-button-icon-spacing, 8px);margin-left:var(--mat-protected-button-icon-offset, -4px)}.mat-mdc-raised-button .mat-ripple-element{background-color:var(--mat-protected-button-ripple-color)}.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-protected-button-state-layer-color)}.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-protected-button-disabled-state-layer-color)}.mat-mdc-raised-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-hover-state-layer-opacity)}.mat-mdc-raised-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-focus-state-layer-opacity)}.mat-mdc-raised-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-pressed-state-layer-opacity)}.mat-mdc-raised-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-protected-button-touch-target-display)}.mat-mdc-raised-button:hover{box-shadow:var(--mdc-protected-button-hover-container-elevation-shadow)}.mat-mdc-raised-button:focus{box-shadow:var(--mdc-protected-button-focus-container-elevation-shadow)}.mat-mdc-raised-button:active,.mat-mdc-raised-button:focus:active{box-shadow:var(--mdc-protected-button-pressed-container-elevation-shadow)}.mat-mdc-raised-button[disabled],.mat-mdc-raised-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-protected-button-disabled-label-text-color);background-color:var(--mdc-protected-button-disabled-container-color)}.mat-mdc-raised-button[disabled].mat-mdc-button-disabled,.mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled{box-shadow:var(--mdc-protected-button-disabled-container-elevation-shadow)}.mat-mdc-raised-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-outlined-button{font-family:var(--mdc-outlined-button-label-text-font);font-size:var(--mdc-outlined-button-label-text-size);letter-spacing:var(--mdc-outlined-button-label-text-tracking);font-weight:var(--mdc-outlined-button-label-text-weight);text-transform:var(--mdc-outlined-button-label-text-transform);height:var(--mdc-outlined-button-container-height);border-radius:var(--mdc-outlined-button-container-shape);padding:0 15px 0 15px;border-width:var(--mdc-outlined-button-outline-width);padding:0 var(--mat-outlined-button-horizontal-padding, 15px)}.mat-mdc-outlined-button:not(:disabled){color:var(--mdc-outlined-button-label-text-color)}.mat-mdc-outlined-button:disabled{color:var(--mdc-outlined-button-disabled-label-text-color)}.mat-mdc-outlined-button .mdc-button__ripple{border-radius:var(--mdc-outlined-button-container-shape)}.mat-mdc-outlined-button:not(:disabled){border-color:var(--mdc-outlined-button-outline-color)}.mat-mdc-outlined-button:disabled{border-color:var(--mdc-outlined-button-disabled-outline-color)}.mat-mdc-outlined-button.mdc-button--icon-trailing{padding:0 11px 0 15px}.mat-mdc-outlined-button.mdc-button--icon-leading{padding:0 15px 0 11px}.mat-mdc-outlined-button .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px;border-width:var(--mdc-outlined-button-outline-width)}.mat-mdc-outlined-button .mdc-button__touch{left:calc(-1 * var(--mdc-outlined-button-outline-width));width:calc(100% + 2 * var(--mdc-outlined-button-outline-width))}.mat-mdc-outlined-button>.mat-icon{margin-right:var(--mat-outlined-button-icon-spacing, 8px);margin-left:var(--mat-outlined-button-icon-offset, -4px)}[dir=rtl] .mat-mdc-outlined-button>.mat-icon{margin-right:var(--mat-outlined-button-icon-offset, -4px);margin-left:var(--mat-outlined-button-icon-spacing, 8px)}.mat-mdc-outlined-button .mdc-button__label+.mat-icon{margin-right:var(--mat-outlined-button-icon-offset, -4px);margin-left:var(--mat-outlined-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-outlined-button .mdc-button__label+.mat-icon{margin-right:var(--mat-outlined-button-icon-spacing, 8px);margin-left:var(--mat-outlined-button-icon-offset, -4px)}.mat-mdc-outlined-button .mat-ripple-element{background-color:var(--mat-outlined-button-ripple-color)}.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-outlined-button-state-layer-color)}.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-outlined-button-disabled-state-layer-color)}.mat-mdc-outlined-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-hover-state-layer-opacity)}.mat-mdc-outlined-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-focus-state-layer-opacity)}.mat-mdc-outlined-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-pressed-state-layer-opacity)}.mat-mdc-outlined-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-outlined-button-touch-target-display)}.mat-mdc-outlined-button[disabled],.mat-mdc-outlined-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-outlined-button-disabled-label-text-color);border-color:var(--mdc-outlined-button-disabled-outline-color)}.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-button-base{text-decoration:none}.mat-mdc-button,.mat-mdc-unelevated-button,.mat-mdc-raised-button,.mat-mdc-outlined-button{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-button .mat-mdc-button-ripple,.mat-mdc-button .mat-mdc-button-persistent-ripple,.mat-mdc-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button .mat-mdc-button-ripple,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button .mat-mdc-button-ripple,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-button .mat-mdc-button-ripple,.mat-mdc-unelevated-button .mat-mdc-button-ripple,.mat-mdc-raised-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mat-mdc-button-ripple{overflow:hidden}.mat-mdc-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{content:"";opacity:0}.mat-mdc-button .mdc-button__label,.mat-mdc-unelevated-button .mdc-button__label,.mat-mdc-raised-button .mdc-button__label,.mat-mdc-outlined-button .mdc-button__label{z-index:1}.mat-mdc-button .mat-mdc-focus-indicator,.mat-mdc-unelevated-button .mat-mdc-focus-indicator,.mat-mdc-raised-button .mat-mdc-focus-indicator,.mat-mdc-outlined-button .mat-mdc-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute}.mat-mdc-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-unelevated-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-raised-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-outlined-button:focus .mat-mdc-focus-indicator::before{content:""}.mat-mdc-button._mat-animation-noopable,.mat-mdc-unelevated-button._mat-animation-noopable,.mat-mdc-raised-button._mat-animation-noopable,.mat-mdc-outlined-button._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mdc-button>.mat-icon,.mat-mdc-unelevated-button>.mat-icon,.mat-mdc-raised-button>.mat-icon,.mat-mdc-outlined-button>.mat-icon{display:inline-block;position:relative;vertical-align:top;font-size:1.125rem;height:1.125rem;width:1.125rem}.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px;border-width:-1px}.mat-mdc-unelevated-button .mat-mdc-focus-indicator::before,.mat-mdc-raised-button .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-mdc-outlined-button .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 3px)*-1)}', ".cdk-high-contrast-active .mat-mdc-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-unelevated-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-raised-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-outlined-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-icon-button{outline:solid 1px}"]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Platform
  }, {
    type: NgZone
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ANIMATION_MODULE_TYPE]
    }]
  }], null);
})();
var _MatAnchor = class _MatAnchor extends MatAnchorBase {
  constructor(elementRef, platform, ngZone, animationMode) {
    super(elementRef, platform, ngZone, animationMode);
  }
};
_MatAnchor.ɵfac = function MatAnchor_Factory(t) {
  return new (t || _MatAnchor)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8));
};
_MatAnchor.ɵcmp = ɵɵdefineComponent({
  type: _MatAnchor,
  selectors: [["a", "mat-button", ""], ["a", "mat-raised-button", ""], ["a", "mat-flat-button", ""], ["a", "mat-stroked-button", ""]],
  hostVars: 15,
  hostBindings: function MatAnchor_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("disabled", ctx._getDisabledAttribute())("tabindex", ctx.disabled && !ctx.disabledInteractive ? -1 : ctx.tabIndex)("aria-disabled", ctx._getDisabledAttribute());
      ɵɵclassMap(ctx.color ? "mat-" + ctx.color : "");
      ɵɵclassProp("mat-mdc-button-disabled", ctx.disabled)("mat-mdc-button-disabled-interactive", ctx.disabledInteractive)("_mat-animation-noopable", ctx._animationMode === "NoopAnimations")("mat-unthemed", !ctx.color)("mat-mdc-button-base", true);
    }
  },
  exportAs: ["matButton", "matAnchor"],
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  attrs: _c0,
  ngContentSelectors: _c2,
  decls: 7,
  vars: 4,
  consts: [[1, "mat-mdc-button-persistent-ripple"], [1, "mdc-button__label"], [1, "mat-mdc-focus-indicator"], [1, "mat-mdc-button-touch-target"]],
  template: function MatAnchor_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c1);
      ɵɵelement(0, "span", 0);
      ɵɵprojection(1);
      ɵɵelementStart(2, "span", 1);
      ɵɵprojection(3, 1);
      ɵɵelementEnd();
      ɵɵprojection(4, 2);
      ɵɵelement(5, "span", 2)(6, "span", 3);
    }
    if (rf & 2) {
      ɵɵclassProp("mdc-button__ripple", !ctx._isFab)("mdc-fab__ripple", ctx._isFab);
    }
  },
  styles: [_c3, _c4],
  encapsulation: 2,
  changeDetection: 0
});
var MatAnchor = _MatAnchor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatAnchor, [{
    type: Component,
    args: [{
      selector: `a[mat-button], a[mat-raised-button], a[mat-flat-button], a[mat-stroked-button]`,
      exportAs: "matButton, matAnchor",
      host: MAT_ANCHOR_HOST,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      template: `<span
    class="mat-mdc-button-persistent-ripple"
    [class.mdc-button__ripple]="!_isFab"
    [class.mdc-fab__ripple]="_isFab"></span>

<ng-content select=".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])">
</ng-content>

<span class="mdc-button__label"><ng-content></ng-content></span>

<ng-content select=".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]">
</ng-content>

<!--
  The indicator can't be directly on the button, because MDC uses ::before for high contrast
  indication and it can't be on the ripple, because it has a border radius and overflow: hidden.
-->
<span class="mat-mdc-focus-indicator"></span>

<span class="mat-mdc-button-touch-target"></span>
`,
      styles: ['.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button{position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;background:rgba(0,0,0,0)}.mdc-button .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button[hidden]{display:none}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button .mdc-button__progress-indicator{font-size:0;position:absolute;transform:translate(-50%, -50%);top:50%;left:50%;line-height:initial}.mdc-button .mdc-button__label{position:relative}.mdc-button .mdc-button__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px);display:none}@media screen and (forced-colors: active){.mdc-button .mdc-button__focus-ring{border-color:CanvasText}}.mdc-button .mdc-button__focus-ring::after{content:"";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-button .mdc-button__focus-ring::after{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring{display:block}}.mdc-button .mdc-button__touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--touch{margin-top:6px;margin-bottom:6px}.mdc-button{padding:0 8px 0 8px}.mdc-button--unelevated{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--unelevated.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--unelevated.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--raised{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--raised.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--raised.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--outlined{border-style:solid;transition:border 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--outlined .mdc-button__ripple{border-style:solid;border-color:rgba(0,0,0,0)}.mat-mdc-button{font-family:var(--mdc-text-button-label-text-font);font-size:var(--mdc-text-button-label-text-size);letter-spacing:var(--mdc-text-button-label-text-tracking);font-weight:var(--mdc-text-button-label-text-weight);text-transform:var(--mdc-text-button-label-text-transform);height:var(--mdc-text-button-container-height);border-radius:var(--mdc-text-button-container-shape);padding:0 var(--mat-text-button-horizontal-padding, 8px)}.mat-mdc-button:not(:disabled){color:var(--mdc-text-button-label-text-color)}.mat-mdc-button:disabled{color:var(--mdc-text-button-disabled-label-text-color)}.mat-mdc-button .mdc-button__ripple{border-radius:var(--mdc-text-button-container-shape)}.mat-mdc-button:has(.material-icons,mat-icon,[matButtonIcon]){padding:0 var(--mat-text-button-with-icon-horizontal-padding, 8px)}.mat-mdc-button>.mat-icon{margin-right:var(--mat-text-button-icon-spacing, 8px);margin-left:var(--mat-text-button-icon-offset, 0)}[dir=rtl] .mat-mdc-button>.mat-icon{margin-right:var(--mat-text-button-icon-offset, 0);margin-left:var(--mat-text-button-icon-spacing, 8px)}.mat-mdc-button .mdc-button__label+.mat-icon{margin-right:var(--mat-text-button-icon-offset, 0);margin-left:var(--mat-text-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-button .mdc-button__label+.mat-icon{margin-right:var(--mat-text-button-icon-spacing, 8px);margin-left:var(--mat-text-button-icon-offset, 0)}.mat-mdc-button .mat-ripple-element{background-color:var(--mat-text-button-ripple-color)}.mat-mdc-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-text-button-state-layer-color)}.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-text-button-disabled-state-layer-color)}.mat-mdc-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-hover-state-layer-opacity)}.mat-mdc-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-focus-state-layer-opacity)}.mat-mdc-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-pressed-state-layer-opacity)}.mat-mdc-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-text-button-touch-target-display)}.mat-mdc-button[disabled],.mat-mdc-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-text-button-disabled-label-text-color)}.mat-mdc-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-unelevated-button{font-family:var(--mdc-filled-button-label-text-font);font-size:var(--mdc-filled-button-label-text-size);letter-spacing:var(--mdc-filled-button-label-text-tracking);font-weight:var(--mdc-filled-button-label-text-weight);text-transform:var(--mdc-filled-button-label-text-transform);height:var(--mdc-filled-button-container-height);border-radius:var(--mdc-filled-button-container-shape);padding:0 var(--mat-filled-button-horizontal-padding, 16px)}.mat-mdc-unelevated-button:not(:disabled){background-color:var(--mdc-filled-button-container-color)}.mat-mdc-unelevated-button:disabled{background-color:var(--mdc-filled-button-disabled-container-color)}.mat-mdc-unelevated-button:not(:disabled){color:var(--mdc-filled-button-label-text-color)}.mat-mdc-unelevated-button:disabled{color:var(--mdc-filled-button-disabled-label-text-color)}.mat-mdc-unelevated-button .mdc-button__ripple{border-radius:var(--mdc-filled-button-container-shape)}.mat-mdc-unelevated-button>.mat-icon{margin-right:var(--mat-filled-button-icon-spacing, 8px);margin-left:var(--mat-filled-button-icon-offset, -4px)}[dir=rtl] .mat-mdc-unelevated-button>.mat-icon{margin-right:var(--mat-filled-button-icon-offset, -4px);margin-left:var(--mat-filled-button-icon-spacing, 8px)}.mat-mdc-unelevated-button .mdc-button__label+.mat-icon{margin-right:var(--mat-filled-button-icon-offset, -4px);margin-left:var(--mat-filled-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label+.mat-icon{margin-right:var(--mat-filled-button-icon-spacing, 8px);margin-left:var(--mat-filled-button-icon-offset, -4px)}.mat-mdc-unelevated-button .mat-ripple-element{background-color:var(--mat-filled-button-ripple-color)}.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-filled-button-state-layer-color)}.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-filled-button-disabled-state-layer-color)}.mat-mdc-unelevated-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-hover-state-layer-opacity)}.mat-mdc-unelevated-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-focus-state-layer-opacity)}.mat-mdc-unelevated-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-pressed-state-layer-opacity)}.mat-mdc-unelevated-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-filled-button-touch-target-display)}.mat-mdc-unelevated-button[disabled],.mat-mdc-unelevated-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-filled-button-disabled-label-text-color);background-color:var(--mdc-filled-button-disabled-container-color)}.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-raised-button{font-family:var(--mdc-protected-button-label-text-font);font-size:var(--mdc-protected-button-label-text-size);letter-spacing:var(--mdc-protected-button-label-text-tracking);font-weight:var(--mdc-protected-button-label-text-weight);text-transform:var(--mdc-protected-button-label-text-transform);height:var(--mdc-protected-button-container-height);border-radius:var(--mdc-protected-button-container-shape);padding:0 var(--mat-protected-button-horizontal-padding, 16px);box-shadow:var(--mdc-protected-button-container-elevation-shadow)}.mat-mdc-raised-button:not(:disabled){background-color:var(--mdc-protected-button-container-color)}.mat-mdc-raised-button:disabled{background-color:var(--mdc-protected-button-disabled-container-color)}.mat-mdc-raised-button:not(:disabled){color:var(--mdc-protected-button-label-text-color)}.mat-mdc-raised-button:disabled{color:var(--mdc-protected-button-disabled-label-text-color)}.mat-mdc-raised-button .mdc-button__ripple{border-radius:var(--mdc-protected-button-container-shape)}.mat-mdc-raised-button>.mat-icon{margin-right:var(--mat-protected-button-icon-spacing, 8px);margin-left:var(--mat-protected-button-icon-offset, -4px)}[dir=rtl] .mat-mdc-raised-button>.mat-icon{margin-right:var(--mat-protected-button-icon-offset, -4px);margin-left:var(--mat-protected-button-icon-spacing, 8px)}.mat-mdc-raised-button .mdc-button__label+.mat-icon{margin-right:var(--mat-protected-button-icon-offset, -4px);margin-left:var(--mat-protected-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-raised-button .mdc-button__label+.mat-icon{margin-right:var(--mat-protected-button-icon-spacing, 8px);margin-left:var(--mat-protected-button-icon-offset, -4px)}.mat-mdc-raised-button .mat-ripple-element{background-color:var(--mat-protected-button-ripple-color)}.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-protected-button-state-layer-color)}.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-protected-button-disabled-state-layer-color)}.mat-mdc-raised-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-hover-state-layer-opacity)}.mat-mdc-raised-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-focus-state-layer-opacity)}.mat-mdc-raised-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-pressed-state-layer-opacity)}.mat-mdc-raised-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-protected-button-touch-target-display)}.mat-mdc-raised-button:hover{box-shadow:var(--mdc-protected-button-hover-container-elevation-shadow)}.mat-mdc-raised-button:focus{box-shadow:var(--mdc-protected-button-focus-container-elevation-shadow)}.mat-mdc-raised-button:active,.mat-mdc-raised-button:focus:active{box-shadow:var(--mdc-protected-button-pressed-container-elevation-shadow)}.mat-mdc-raised-button[disabled],.mat-mdc-raised-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-protected-button-disabled-label-text-color);background-color:var(--mdc-protected-button-disabled-container-color)}.mat-mdc-raised-button[disabled].mat-mdc-button-disabled,.mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled{box-shadow:var(--mdc-protected-button-disabled-container-elevation-shadow)}.mat-mdc-raised-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-outlined-button{font-family:var(--mdc-outlined-button-label-text-font);font-size:var(--mdc-outlined-button-label-text-size);letter-spacing:var(--mdc-outlined-button-label-text-tracking);font-weight:var(--mdc-outlined-button-label-text-weight);text-transform:var(--mdc-outlined-button-label-text-transform);height:var(--mdc-outlined-button-container-height);border-radius:var(--mdc-outlined-button-container-shape);padding:0 15px 0 15px;border-width:var(--mdc-outlined-button-outline-width);padding:0 var(--mat-outlined-button-horizontal-padding, 15px)}.mat-mdc-outlined-button:not(:disabled){color:var(--mdc-outlined-button-label-text-color)}.mat-mdc-outlined-button:disabled{color:var(--mdc-outlined-button-disabled-label-text-color)}.mat-mdc-outlined-button .mdc-button__ripple{border-radius:var(--mdc-outlined-button-container-shape)}.mat-mdc-outlined-button:not(:disabled){border-color:var(--mdc-outlined-button-outline-color)}.mat-mdc-outlined-button:disabled{border-color:var(--mdc-outlined-button-disabled-outline-color)}.mat-mdc-outlined-button.mdc-button--icon-trailing{padding:0 11px 0 15px}.mat-mdc-outlined-button.mdc-button--icon-leading{padding:0 15px 0 11px}.mat-mdc-outlined-button .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px;border-width:var(--mdc-outlined-button-outline-width)}.mat-mdc-outlined-button .mdc-button__touch{left:calc(-1 * var(--mdc-outlined-button-outline-width));width:calc(100% + 2 * var(--mdc-outlined-button-outline-width))}.mat-mdc-outlined-button>.mat-icon{margin-right:var(--mat-outlined-button-icon-spacing, 8px);margin-left:var(--mat-outlined-button-icon-offset, -4px)}[dir=rtl] .mat-mdc-outlined-button>.mat-icon{margin-right:var(--mat-outlined-button-icon-offset, -4px);margin-left:var(--mat-outlined-button-icon-spacing, 8px)}.mat-mdc-outlined-button .mdc-button__label+.mat-icon{margin-right:var(--mat-outlined-button-icon-offset, -4px);margin-left:var(--mat-outlined-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-outlined-button .mdc-button__label+.mat-icon{margin-right:var(--mat-outlined-button-icon-spacing, 8px);margin-left:var(--mat-outlined-button-icon-offset, -4px)}.mat-mdc-outlined-button .mat-ripple-element{background-color:var(--mat-outlined-button-ripple-color)}.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-outlined-button-state-layer-color)}.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-outlined-button-disabled-state-layer-color)}.mat-mdc-outlined-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-hover-state-layer-opacity)}.mat-mdc-outlined-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-focus-state-layer-opacity)}.mat-mdc-outlined-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-pressed-state-layer-opacity)}.mat-mdc-outlined-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-outlined-button-touch-target-display)}.mat-mdc-outlined-button[disabled],.mat-mdc-outlined-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-outlined-button-disabled-label-text-color);border-color:var(--mdc-outlined-button-disabled-outline-color)}.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-button-base{text-decoration:none}.mat-mdc-button,.mat-mdc-unelevated-button,.mat-mdc-raised-button,.mat-mdc-outlined-button{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-button .mat-mdc-button-ripple,.mat-mdc-button .mat-mdc-button-persistent-ripple,.mat-mdc-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button .mat-mdc-button-ripple,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button .mat-mdc-button-ripple,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-button .mat-mdc-button-ripple,.mat-mdc-unelevated-button .mat-mdc-button-ripple,.mat-mdc-raised-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mat-mdc-button-ripple{overflow:hidden}.mat-mdc-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{content:"";opacity:0}.mat-mdc-button .mdc-button__label,.mat-mdc-unelevated-button .mdc-button__label,.mat-mdc-raised-button .mdc-button__label,.mat-mdc-outlined-button .mdc-button__label{z-index:1}.mat-mdc-button .mat-mdc-focus-indicator,.mat-mdc-unelevated-button .mat-mdc-focus-indicator,.mat-mdc-raised-button .mat-mdc-focus-indicator,.mat-mdc-outlined-button .mat-mdc-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute}.mat-mdc-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-unelevated-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-raised-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-outlined-button:focus .mat-mdc-focus-indicator::before{content:""}.mat-mdc-button._mat-animation-noopable,.mat-mdc-unelevated-button._mat-animation-noopable,.mat-mdc-raised-button._mat-animation-noopable,.mat-mdc-outlined-button._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mdc-button>.mat-icon,.mat-mdc-unelevated-button>.mat-icon,.mat-mdc-raised-button>.mat-icon,.mat-mdc-outlined-button>.mat-icon{display:inline-block;position:relative;vertical-align:top;font-size:1.125rem;height:1.125rem;width:1.125rem}.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px;border-width:-1px}.mat-mdc-unelevated-button .mat-mdc-focus-indicator::before,.mat-mdc-raised-button .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-mdc-outlined-button .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 3px)*-1)}', ".cdk-high-contrast-active .mat-mdc-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-unelevated-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-raised-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-outlined-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-icon-button{outline:solid 1px}"]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Platform
  }, {
    type: NgZone
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ANIMATION_MODULE_TYPE]
    }]
  }], null);
})();
var MAT_FAB_DEFAULT_OPTIONS = new InjectionToken("mat-mdc-fab-default-options", {
  providedIn: "root",
  factory: MAT_FAB_DEFAULT_OPTIONS_FACTORY
});
function MAT_FAB_DEFAULT_OPTIONS_FACTORY() {
  return {
    // The FAB by default has its color set to accent.
    color: "accent"
  };
}
var defaults = MAT_FAB_DEFAULT_OPTIONS_FACTORY();
var _MatFabButton = class _MatFabButton extends MatButtonBase {
  constructor(elementRef, platform, ngZone, animationMode, _options) {
    super(elementRef, platform, ngZone, animationMode);
    this._options = _options;
    this._isFab = true;
    this._options = this._options || defaults;
    this.color = this._options.color || defaults.color;
  }
};
_MatFabButton.ɵfac = function MatFabButton_Factory(t) {
  return new (t || _MatFabButton)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8), ɵɵdirectiveInject(MAT_FAB_DEFAULT_OPTIONS, 8));
};
_MatFabButton.ɵcmp = ɵɵdefineComponent({
  type: _MatFabButton,
  selectors: [["button", "mat-fab", ""]],
  hostVars: 18,
  hostBindings: function MatFabButton_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("disabled", ctx._getDisabledAttribute())("aria-disabled", ctx._getAriaDisabled());
      ɵɵclassMap(ctx.color ? "mat-" + ctx.color : "");
      ɵɵclassProp("mat-mdc-button-disabled", ctx.disabled)("mat-mdc-button-disabled-interactive", ctx.disabledInteractive)("_mat-animation-noopable", ctx._animationMode === "NoopAnimations")("mat-unthemed", !ctx.color)("mat-mdc-button-base", true)("mdc-fab--extended", ctx.extended)("mat-mdc-extended-fab", ctx.extended);
    }
  },
  inputs: {
    extended: [InputFlags.HasDecoratorInputTransform, "extended", "extended", booleanAttribute]
  },
  exportAs: ["matButton"],
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  attrs: _c5,
  ngContentSelectors: _c2,
  decls: 7,
  vars: 4,
  consts: [[1, "mat-mdc-button-persistent-ripple"], [1, "mdc-button__label"], [1, "mat-mdc-focus-indicator"], [1, "mat-mdc-button-touch-target"]],
  template: function MatFabButton_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c1);
      ɵɵelement(0, "span", 0);
      ɵɵprojection(1);
      ɵɵelementStart(2, "span", 1);
      ɵɵprojection(3, 1);
      ɵɵelementEnd();
      ɵɵprojection(4, 2);
      ɵɵelement(5, "span", 2)(6, "span", 3);
    }
    if (rf & 2) {
      ɵɵclassProp("mdc-button__ripple", !ctx._isFab)("mdc-fab__ripple", ctx._isFab);
    }
  },
  styles: ['.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:var(--mdc-elevation-overlay-opacity);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-fab{position:relative;display:inline-flex;position:relative;align-items:center;justify-content:center;box-sizing:border-box;width:56px;height:56px;padding:0;border:none;fill:currentColor;text-decoration:none;cursor:pointer;user-select:none;-moz-appearance:none;-webkit-appearance:none;overflow:visible;transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1),opacity 15ms linear 30ms,transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-fab .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-fab[hidden]{display:none}.mdc-fab::-moz-focus-inner{padding:0;border:0}.mdc-fab .mdc-fab__focus-ring{position:absolute}.mdc-fab.mdc-ripple-upgraded--background-focused .mdc-fab__focus-ring,.mdc-fab:not(.mdc-ripple-upgraded):focus .mdc-fab__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-fab.mdc-ripple-upgraded--background-focused .mdc-fab__focus-ring,.mdc-fab:not(.mdc-ripple-upgraded):focus .mdc-fab__focus-ring{border-color:CanvasText}}.mdc-fab.mdc-ripple-upgraded--background-focused .mdc-fab__focus-ring::after,.mdc-fab:not(.mdc-ripple-upgraded):focus .mdc-fab__focus-ring::after{content:"";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-fab.mdc-ripple-upgraded--background-focused .mdc-fab__focus-ring::after,.mdc-fab:not(.mdc-ripple-upgraded):focus .mdc-fab__focus-ring::after{border-color:CanvasText}}.mdc-fab:active,.mdc-fab:focus{outline:none}.mdc-fab:hover{cursor:pointer}.mdc-fab>svg{width:100%}.mdc-fab--mini{width:40px;height:40px}.mdc-fab--extended{border-radius:24px;padding-left:20px;padding-right:20px;width:auto;max-width:100%;height:48px;line-height:normal}.mdc-fab--extended .mdc-fab__ripple{border-radius:24px}.mdc-fab--extended .mdc-fab__icon{margin-left:calc(12px - 20px);margin-right:12px}[dir=rtl] .mdc-fab--extended .mdc-fab__icon,.mdc-fab--extended .mdc-fab__icon[dir=rtl]{margin-left:12px;margin-right:calc(12px - 20px)}.mdc-fab--extended .mdc-fab__label+.mdc-fab__icon{margin-left:12px;margin-right:calc(12px - 20px)}[dir=rtl] .mdc-fab--extended .mdc-fab__label+.mdc-fab__icon,.mdc-fab--extended .mdc-fab__label+.mdc-fab__icon[dir=rtl]{margin-left:calc(12px - 20px);margin-right:12px}.mdc-fab--touch{margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-fab--touch .mdc-fab__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-fab::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-fab::before{border-color:CanvasText}}.mdc-fab__label{justify-content:flex-start;text-overflow:ellipsis;white-space:nowrap;overflow-x:hidden;overflow-y:visible}.mdc-fab__icon{transition:transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);fill:currentColor;will-change:transform}.mdc-fab .mdc-fab__icon{display:inline-flex;align-items:center;justify-content:center}.mdc-fab--exited{transform:scale(0);opacity:0;transition:opacity 15ms linear 150ms,transform 180ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-fab--exited .mdc-fab__icon{transform:scale(0);transition:transform 135ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mat-mdc-fab{background-color:var(--mdc-fab-container-color)}.mat-mdc-fab .mdc-fab__icon{width:var(--mdc-fab-icon-size);height:var(--mdc-fab-icon-size);font-size:var(--mdc-fab-icon-size)}.mat-mdc-fab:not(.mdc-fab--extended){border-radius:var(--mdc-fab-container-shape)}.mat-mdc-fab:not(.mdc-fab--extended) .mdc-fab__ripple{border-radius:var(--mdc-fab-container-shape)}.mat-mdc-mini-fab{background-color:var(--mdc-fab-small-container-color)}.mat-mdc-mini-fab .mdc-fab__icon{width:var(--mdc-fab-small-icon-size);height:var(--mdc-fab-small-icon-size);font-size:var(--mdc-fab-small-icon-size)}.mat-mdc-mini-fab:not(.mdc-fab--extended){border-radius:var(--mdc-fab-small-container-shape)}.mat-mdc-mini-fab:not(.mdc-fab--extended) .mdc-fab__ripple{border-radius:var(--mdc-fab-small-container-shape)}.mat-mdc-extended-fab{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;height:var(--mdc-extended-fab-container-height);border-radius:var(--mdc-extended-fab-container-shape);font-family:var(--mdc-extended-fab-label-text-font);font-size:var(--mdc-extended-fab-label-text-size);font-weight:var(--mdc-extended-fab-label-text-weight);letter-spacing:var(--mdc-extended-fab-label-text-tracking)}.mat-mdc-extended-fab .mdc-fab__ripple{border-radius:var(--mdc-extended-fab-container-shape)}.mat-mdc-fab,.mat-mdc-mini-fab{-webkit-tap-highlight-color:rgba(0,0,0,0);flex-shrink:0}.mat-mdc-fab .mat-mdc-button-ripple,.mat-mdc-fab .mat-mdc-button-persistent-ripple,.mat-mdc-fab .mat-mdc-button-persistent-ripple::before,.mat-mdc-mini-fab .mat-mdc-button-ripple,.mat-mdc-mini-fab .mat-mdc-button-persistent-ripple,.mat-mdc-mini-fab .mat-mdc-button-persistent-ripple::before{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-fab .mat-mdc-button-ripple,.mat-mdc-mini-fab .mat-mdc-button-ripple{overflow:hidden}.mat-mdc-fab .mat-mdc-button-persistent-ripple::before,.mat-mdc-mini-fab .mat-mdc-button-persistent-ripple::before{content:"";opacity:0}.mat-mdc-fab .mdc-button__label,.mat-mdc-mini-fab .mdc-button__label{z-index:1}.mat-mdc-fab .mat-mdc-focus-indicator,.mat-mdc-mini-fab .mat-mdc-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute}.mat-mdc-fab:focus .mat-mdc-focus-indicator::before,.mat-mdc-mini-fab:focus .mat-mdc-focus-indicator::before{content:""}.mat-mdc-fab._mat-animation-noopable,.mat-mdc-mini-fab._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mdc-fab:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-mini-fab:not(.mdc-ripple-upgraded):focus::before{background:rgba(0,0,0,0);opacity:1}.mat-mdc-fab .mat-icon,.mat-mdc-fab .material-icons,.mat-mdc-mini-fab .mat-icon,.mat-mdc-mini-fab .material-icons{transition:transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);fill:currentColor;will-change:transform}.mat-mdc-fab .mat-mdc-focus-indicator::before,.mat-mdc-mini-fab .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-mdc-fab[disabled],.mat-mdc-fab.mat-mdc-button-disabled,.mat-mdc-mini-fab[disabled],.mat-mdc-mini-fab.mat-mdc-button-disabled{cursor:default;pointer-events:none}.mat-mdc-fab[disabled],.mat-mdc-fab[disabled]:focus,.mat-mdc-fab.mat-mdc-button-disabled,.mat-mdc-fab.mat-mdc-button-disabled:focus,.mat-mdc-mini-fab[disabled],.mat-mdc-mini-fab[disabled]:focus,.mat-mdc-mini-fab.mat-mdc-button-disabled,.mat-mdc-mini-fab.mat-mdc-button-disabled:focus{box-shadow:none}.mat-mdc-fab.mat-mdc-button-disabled-interactive,.mat-mdc-mini-fab.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-fab{color:var(--mat-fab-foreground-color, inherit);box-shadow:var(--mdc-fab-container-elevation-shadow)}.mat-mdc-fab .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%);display:var(--mat-fab-touch-target-display)}.mat-mdc-fab .mat-ripple-element{background-color:var(--mat-fab-ripple-color)}.mat-mdc-fab .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-fab-state-layer-color)}.mat-mdc-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-fab-disabled-state-layer-color)}.mat-mdc-fab:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-hover-state-layer-opacity)}.mat-mdc-fab.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-fab.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-fab.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-focus-state-layer-opacity)}.mat-mdc-fab:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-pressed-state-layer-opacity)}.mat-mdc-fab:hover{box-shadow:var(--mdc-fab-hover-container-elevation-shadow)}.mat-mdc-fab:focus{box-shadow:var(--mdc-fab-focus-container-elevation-shadow)}.mat-mdc-fab:active,.mat-mdc-fab:focus:active{box-shadow:var(--mdc-fab-pressed-container-elevation-shadow)}.mat-mdc-fab[disabled],.mat-mdc-fab.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mat-fab-disabled-state-foreground-color);background-color:var(--mat-fab-disabled-state-container-color)}.mat-mdc-fab.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-mini-fab{color:var(--mat-fab-small-foreground-color, inherit);box-shadow:var(--mdc-fab-small-container-elevation-shadow)}.mat-mdc-mini-fab .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%);display:var(--mat-fab-small-touch-target-display)}.mat-mdc-mini-fab .mat-ripple-element{background-color:var(--mat-fab-small-ripple-color)}.mat-mdc-mini-fab .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-fab-small-state-layer-color)}.mat-mdc-mini-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-fab-small-disabled-state-layer-color)}.mat-mdc-mini-fab:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-small-hover-state-layer-opacity)}.mat-mdc-mini-fab.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-mini-fab.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-mini-fab.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-small-focus-state-layer-opacity)}.mat-mdc-mini-fab:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-small-pressed-state-layer-opacity)}.mat-mdc-mini-fab:hover{box-shadow:var(--mdc-fab-small-hover-container-elevation-shadow)}.mat-mdc-mini-fab:focus{box-shadow:var(--mdc-fab-small-focus-container-elevation-shadow)}.mat-mdc-mini-fab:active,.mat-mdc-mini-fab:focus:active{box-shadow:var(--mdc-fab-small-pressed-container-elevation-shadow)}.mat-mdc-mini-fab[disabled],.mat-mdc-mini-fab.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mat-fab-small-disabled-state-foreground-color);background-color:var(--mat-fab-small-disabled-state-container-color)}.mat-mdc-mini-fab.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-extended-fab{box-shadow:var(--mdc-extended-fab-container-elevation-shadow)}.mat-mdc-extended-fab:hover{box-shadow:var(--mdc-extended-fab-hover-container-elevation-shadow)}.mat-mdc-extended-fab:focus{box-shadow:var(--mdc-extended-fab-focus-container-elevation-shadow)}.mat-mdc-extended-fab:active,.mat-mdc-extended-fab:focus:active{box-shadow:var(--mdc-extended-fab-pressed-container-elevation-shadow)}.mat-mdc-extended-fab[disabled],.mat-mdc-extended-fab.mat-mdc-button-disabled{cursor:default;pointer-events:none}.mat-mdc-extended-fab[disabled],.mat-mdc-extended-fab[disabled]:focus,.mat-mdc-extended-fab.mat-mdc-button-disabled,.mat-mdc-extended-fab.mat-mdc-button-disabled:focus{box-shadow:none}.mat-mdc-extended-fab.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-extended-fab>.mat-icon,.mat-mdc-extended-fab>.material-icons{margin-left:calc(12px - 20px);margin-right:12px}[dir=rtl] .mat-mdc-extended-fab>.mat-icon,[dir=rtl] .mat-mdc-extended-fab>.material-icons,.mat-mdc-extended-fab>.mat-icon[dir=rtl],.mat-mdc-extended-fab>.material-icons[dir=rtl]{margin-left:12px;margin-right:calc(12px - 20px)}.mat-mdc-extended-fab .mat-mdc-button-touch-target{width:100%}.mat-mdc-extended-fab .mdc-button__label+.mat-icon,.mat-mdc-extended-fab .mdc-button__label+.material-icons{margin-left:12px;margin-right:calc(12px - 20px)}[dir=rtl] .mat-mdc-extended-fab .mdc-button__label+.mat-icon,[dir=rtl] .mat-mdc-extended-fab .mdc-button__label+.material-icons,.mat-mdc-extended-fab .mdc-button__label+.mat-icon[dir=rtl],.mat-mdc-extended-fab .mdc-button__label+.material-icons[dir=rtl]{margin-left:calc(12px - 20px);margin-right:12px}'],
  encapsulation: 2,
  changeDetection: 0
});
var MatFabButton = _MatFabButton;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatFabButton, [{
    type: Component,
    args: [{
      selector: `button[mat-fab]`,
      host: __spreadProps(__spreadValues({}, MAT_BUTTON_HOST), {
        "[class.mdc-fab--extended]": "extended",
        "[class.mat-mdc-extended-fab]": "extended"
      }),
      exportAs: "matButton",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      template: `<span
    class="mat-mdc-button-persistent-ripple"
    [class.mdc-button__ripple]="!_isFab"
    [class.mdc-fab__ripple]="_isFab"></span>

<ng-content select=".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])">
</ng-content>

<span class="mdc-button__label"><ng-content></ng-content></span>

<ng-content select=".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]">
</ng-content>

<!--
  The indicator can't be directly on the button, because MDC uses ::before for high contrast
  indication and it can't be on the ripple, because it has a border radius and overflow: hidden.
-->
<span class="mat-mdc-focus-indicator"></span>

<span class="mat-mdc-button-touch-target"></span>
`,
      styles: ['.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:var(--mdc-elevation-overlay-opacity);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-fab{position:relative;display:inline-flex;position:relative;align-items:center;justify-content:center;box-sizing:border-box;width:56px;height:56px;padding:0;border:none;fill:currentColor;text-decoration:none;cursor:pointer;user-select:none;-moz-appearance:none;-webkit-appearance:none;overflow:visible;transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1),opacity 15ms linear 30ms,transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-fab .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-fab[hidden]{display:none}.mdc-fab::-moz-focus-inner{padding:0;border:0}.mdc-fab .mdc-fab__focus-ring{position:absolute}.mdc-fab.mdc-ripple-upgraded--background-focused .mdc-fab__focus-ring,.mdc-fab:not(.mdc-ripple-upgraded):focus .mdc-fab__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-fab.mdc-ripple-upgraded--background-focused .mdc-fab__focus-ring,.mdc-fab:not(.mdc-ripple-upgraded):focus .mdc-fab__focus-ring{border-color:CanvasText}}.mdc-fab.mdc-ripple-upgraded--background-focused .mdc-fab__focus-ring::after,.mdc-fab:not(.mdc-ripple-upgraded):focus .mdc-fab__focus-ring::after{content:"";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-fab.mdc-ripple-upgraded--background-focused .mdc-fab__focus-ring::after,.mdc-fab:not(.mdc-ripple-upgraded):focus .mdc-fab__focus-ring::after{border-color:CanvasText}}.mdc-fab:active,.mdc-fab:focus{outline:none}.mdc-fab:hover{cursor:pointer}.mdc-fab>svg{width:100%}.mdc-fab--mini{width:40px;height:40px}.mdc-fab--extended{border-radius:24px;padding-left:20px;padding-right:20px;width:auto;max-width:100%;height:48px;line-height:normal}.mdc-fab--extended .mdc-fab__ripple{border-radius:24px}.mdc-fab--extended .mdc-fab__icon{margin-left:calc(12px - 20px);margin-right:12px}[dir=rtl] .mdc-fab--extended .mdc-fab__icon,.mdc-fab--extended .mdc-fab__icon[dir=rtl]{margin-left:12px;margin-right:calc(12px - 20px)}.mdc-fab--extended .mdc-fab__label+.mdc-fab__icon{margin-left:12px;margin-right:calc(12px - 20px)}[dir=rtl] .mdc-fab--extended .mdc-fab__label+.mdc-fab__icon,.mdc-fab--extended .mdc-fab__label+.mdc-fab__icon[dir=rtl]{margin-left:calc(12px - 20px);margin-right:12px}.mdc-fab--touch{margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-fab--touch .mdc-fab__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-fab::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-fab::before{border-color:CanvasText}}.mdc-fab__label{justify-content:flex-start;text-overflow:ellipsis;white-space:nowrap;overflow-x:hidden;overflow-y:visible}.mdc-fab__icon{transition:transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);fill:currentColor;will-change:transform}.mdc-fab .mdc-fab__icon{display:inline-flex;align-items:center;justify-content:center}.mdc-fab--exited{transform:scale(0);opacity:0;transition:opacity 15ms linear 150ms,transform 180ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-fab--exited .mdc-fab__icon{transform:scale(0);transition:transform 135ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mat-mdc-fab{background-color:var(--mdc-fab-container-color)}.mat-mdc-fab .mdc-fab__icon{width:var(--mdc-fab-icon-size);height:var(--mdc-fab-icon-size);font-size:var(--mdc-fab-icon-size)}.mat-mdc-fab:not(.mdc-fab--extended){border-radius:var(--mdc-fab-container-shape)}.mat-mdc-fab:not(.mdc-fab--extended) .mdc-fab__ripple{border-radius:var(--mdc-fab-container-shape)}.mat-mdc-mini-fab{background-color:var(--mdc-fab-small-container-color)}.mat-mdc-mini-fab .mdc-fab__icon{width:var(--mdc-fab-small-icon-size);height:var(--mdc-fab-small-icon-size);font-size:var(--mdc-fab-small-icon-size)}.mat-mdc-mini-fab:not(.mdc-fab--extended){border-radius:var(--mdc-fab-small-container-shape)}.mat-mdc-mini-fab:not(.mdc-fab--extended) .mdc-fab__ripple{border-radius:var(--mdc-fab-small-container-shape)}.mat-mdc-extended-fab{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;height:var(--mdc-extended-fab-container-height);border-radius:var(--mdc-extended-fab-container-shape);font-family:var(--mdc-extended-fab-label-text-font);font-size:var(--mdc-extended-fab-label-text-size);font-weight:var(--mdc-extended-fab-label-text-weight);letter-spacing:var(--mdc-extended-fab-label-text-tracking)}.mat-mdc-extended-fab .mdc-fab__ripple{border-radius:var(--mdc-extended-fab-container-shape)}.mat-mdc-fab,.mat-mdc-mini-fab{-webkit-tap-highlight-color:rgba(0,0,0,0);flex-shrink:0}.mat-mdc-fab .mat-mdc-button-ripple,.mat-mdc-fab .mat-mdc-button-persistent-ripple,.mat-mdc-fab .mat-mdc-button-persistent-ripple::before,.mat-mdc-mini-fab .mat-mdc-button-ripple,.mat-mdc-mini-fab .mat-mdc-button-persistent-ripple,.mat-mdc-mini-fab .mat-mdc-button-persistent-ripple::before{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-fab .mat-mdc-button-ripple,.mat-mdc-mini-fab .mat-mdc-button-ripple{overflow:hidden}.mat-mdc-fab .mat-mdc-button-persistent-ripple::before,.mat-mdc-mini-fab .mat-mdc-button-persistent-ripple::before{content:"";opacity:0}.mat-mdc-fab .mdc-button__label,.mat-mdc-mini-fab .mdc-button__label{z-index:1}.mat-mdc-fab .mat-mdc-focus-indicator,.mat-mdc-mini-fab .mat-mdc-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute}.mat-mdc-fab:focus .mat-mdc-focus-indicator::before,.mat-mdc-mini-fab:focus .mat-mdc-focus-indicator::before{content:""}.mat-mdc-fab._mat-animation-noopable,.mat-mdc-mini-fab._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mdc-fab:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-mini-fab:not(.mdc-ripple-upgraded):focus::before{background:rgba(0,0,0,0);opacity:1}.mat-mdc-fab .mat-icon,.mat-mdc-fab .material-icons,.mat-mdc-mini-fab .mat-icon,.mat-mdc-mini-fab .material-icons{transition:transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);fill:currentColor;will-change:transform}.mat-mdc-fab .mat-mdc-focus-indicator::before,.mat-mdc-mini-fab .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-mdc-fab[disabled],.mat-mdc-fab.mat-mdc-button-disabled,.mat-mdc-mini-fab[disabled],.mat-mdc-mini-fab.mat-mdc-button-disabled{cursor:default;pointer-events:none}.mat-mdc-fab[disabled],.mat-mdc-fab[disabled]:focus,.mat-mdc-fab.mat-mdc-button-disabled,.mat-mdc-fab.mat-mdc-button-disabled:focus,.mat-mdc-mini-fab[disabled],.mat-mdc-mini-fab[disabled]:focus,.mat-mdc-mini-fab.mat-mdc-button-disabled,.mat-mdc-mini-fab.mat-mdc-button-disabled:focus{box-shadow:none}.mat-mdc-fab.mat-mdc-button-disabled-interactive,.mat-mdc-mini-fab.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-fab{color:var(--mat-fab-foreground-color, inherit);box-shadow:var(--mdc-fab-container-elevation-shadow)}.mat-mdc-fab .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%);display:var(--mat-fab-touch-target-display)}.mat-mdc-fab .mat-ripple-element{background-color:var(--mat-fab-ripple-color)}.mat-mdc-fab .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-fab-state-layer-color)}.mat-mdc-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-fab-disabled-state-layer-color)}.mat-mdc-fab:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-hover-state-layer-opacity)}.mat-mdc-fab.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-fab.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-fab.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-focus-state-layer-opacity)}.mat-mdc-fab:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-pressed-state-layer-opacity)}.mat-mdc-fab:hover{box-shadow:var(--mdc-fab-hover-container-elevation-shadow)}.mat-mdc-fab:focus{box-shadow:var(--mdc-fab-focus-container-elevation-shadow)}.mat-mdc-fab:active,.mat-mdc-fab:focus:active{box-shadow:var(--mdc-fab-pressed-container-elevation-shadow)}.mat-mdc-fab[disabled],.mat-mdc-fab.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mat-fab-disabled-state-foreground-color);background-color:var(--mat-fab-disabled-state-container-color)}.mat-mdc-fab.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-mini-fab{color:var(--mat-fab-small-foreground-color, inherit);box-shadow:var(--mdc-fab-small-container-elevation-shadow)}.mat-mdc-mini-fab .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%);display:var(--mat-fab-small-touch-target-display)}.mat-mdc-mini-fab .mat-ripple-element{background-color:var(--mat-fab-small-ripple-color)}.mat-mdc-mini-fab .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-fab-small-state-layer-color)}.mat-mdc-mini-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-fab-small-disabled-state-layer-color)}.mat-mdc-mini-fab:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-small-hover-state-layer-opacity)}.mat-mdc-mini-fab.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-mini-fab.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-mini-fab.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-small-focus-state-layer-opacity)}.mat-mdc-mini-fab:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-small-pressed-state-layer-opacity)}.mat-mdc-mini-fab:hover{box-shadow:var(--mdc-fab-small-hover-container-elevation-shadow)}.mat-mdc-mini-fab:focus{box-shadow:var(--mdc-fab-small-focus-container-elevation-shadow)}.mat-mdc-mini-fab:active,.mat-mdc-mini-fab:focus:active{box-shadow:var(--mdc-fab-small-pressed-container-elevation-shadow)}.mat-mdc-mini-fab[disabled],.mat-mdc-mini-fab.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mat-fab-small-disabled-state-foreground-color);background-color:var(--mat-fab-small-disabled-state-container-color)}.mat-mdc-mini-fab.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-extended-fab{box-shadow:var(--mdc-extended-fab-container-elevation-shadow)}.mat-mdc-extended-fab:hover{box-shadow:var(--mdc-extended-fab-hover-container-elevation-shadow)}.mat-mdc-extended-fab:focus{box-shadow:var(--mdc-extended-fab-focus-container-elevation-shadow)}.mat-mdc-extended-fab:active,.mat-mdc-extended-fab:focus:active{box-shadow:var(--mdc-extended-fab-pressed-container-elevation-shadow)}.mat-mdc-extended-fab[disabled],.mat-mdc-extended-fab.mat-mdc-button-disabled{cursor:default;pointer-events:none}.mat-mdc-extended-fab[disabled],.mat-mdc-extended-fab[disabled]:focus,.mat-mdc-extended-fab.mat-mdc-button-disabled,.mat-mdc-extended-fab.mat-mdc-button-disabled:focus{box-shadow:none}.mat-mdc-extended-fab.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-extended-fab>.mat-icon,.mat-mdc-extended-fab>.material-icons{margin-left:calc(12px - 20px);margin-right:12px}[dir=rtl] .mat-mdc-extended-fab>.mat-icon,[dir=rtl] .mat-mdc-extended-fab>.material-icons,.mat-mdc-extended-fab>.mat-icon[dir=rtl],.mat-mdc-extended-fab>.material-icons[dir=rtl]{margin-left:12px;margin-right:calc(12px - 20px)}.mat-mdc-extended-fab .mat-mdc-button-touch-target{width:100%}.mat-mdc-extended-fab .mdc-button__label+.mat-icon,.mat-mdc-extended-fab .mdc-button__label+.material-icons{margin-left:12px;margin-right:calc(12px - 20px)}[dir=rtl] .mat-mdc-extended-fab .mdc-button__label+.mat-icon,[dir=rtl] .mat-mdc-extended-fab .mdc-button__label+.material-icons,.mat-mdc-extended-fab .mdc-button__label+.mat-icon[dir=rtl],.mat-mdc-extended-fab .mdc-button__label+.material-icons[dir=rtl]{margin-left:calc(12px - 20px);margin-right:12px}']
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Platform
  }, {
    type: NgZone
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ANIMATION_MODULE_TYPE]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_FAB_DEFAULT_OPTIONS]
    }]
  }], {
    extended: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var _MatMiniFabButton = class _MatMiniFabButton extends MatButtonBase {
  constructor(elementRef, platform, ngZone, animationMode, _options) {
    super(elementRef, platform, ngZone, animationMode);
    this._options = _options;
    this._isFab = true;
    this._options = this._options || defaults;
    this.color = this._options.color || defaults.color;
  }
};
_MatMiniFabButton.ɵfac = function MatMiniFabButton_Factory(t) {
  return new (t || _MatMiniFabButton)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8), ɵɵdirectiveInject(MAT_FAB_DEFAULT_OPTIONS, 8));
};
_MatMiniFabButton.ɵcmp = ɵɵdefineComponent({
  type: _MatMiniFabButton,
  selectors: [["button", "mat-mini-fab", ""]],
  hostVars: 14,
  hostBindings: function MatMiniFabButton_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("disabled", ctx._getDisabledAttribute())("aria-disabled", ctx._getAriaDisabled());
      ɵɵclassMap(ctx.color ? "mat-" + ctx.color : "");
      ɵɵclassProp("mat-mdc-button-disabled", ctx.disabled)("mat-mdc-button-disabled-interactive", ctx.disabledInteractive)("_mat-animation-noopable", ctx._animationMode === "NoopAnimations")("mat-unthemed", !ctx.color)("mat-mdc-button-base", true);
    }
  },
  exportAs: ["matButton"],
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  attrs: _c6,
  ngContentSelectors: _c2,
  decls: 7,
  vars: 4,
  consts: [[1, "mat-mdc-button-persistent-ripple"], [1, "mdc-button__label"], [1, "mat-mdc-focus-indicator"], [1, "mat-mdc-button-touch-target"]],
  template: function MatMiniFabButton_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c1);
      ɵɵelement(0, "span", 0);
      ɵɵprojection(1);
      ɵɵelementStart(2, "span", 1);
      ɵɵprojection(3, 1);
      ɵɵelementEnd();
      ɵɵprojection(4, 2);
      ɵɵelement(5, "span", 2)(6, "span", 3);
    }
    if (rf & 2) {
      ɵɵclassProp("mdc-button__ripple", !ctx._isFab)("mdc-fab__ripple", ctx._isFab);
    }
  },
  styles: [_c7],
  encapsulation: 2,
  changeDetection: 0
});
var MatMiniFabButton = _MatMiniFabButton;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatMiniFabButton, [{
    type: Component,
    args: [{
      selector: `button[mat-mini-fab]`,
      host: MAT_BUTTON_HOST,
      exportAs: "matButton",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      template: `<span
    class="mat-mdc-button-persistent-ripple"
    [class.mdc-button__ripple]="!_isFab"
    [class.mdc-fab__ripple]="_isFab"></span>

<ng-content select=".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])">
</ng-content>

<span class="mdc-button__label"><ng-content></ng-content></span>

<ng-content select=".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]">
</ng-content>

<!--
  The indicator can't be directly on the button, because MDC uses ::before for high contrast
  indication and it can't be on the ripple, because it has a border radius and overflow: hidden.
-->
<span class="mat-mdc-focus-indicator"></span>

<span class="mat-mdc-button-touch-target"></span>
`,
      styles: ['.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:var(--mdc-elevation-overlay-opacity);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-fab{position:relative;display:inline-flex;position:relative;align-items:center;justify-content:center;box-sizing:border-box;width:56px;height:56px;padding:0;border:none;fill:currentColor;text-decoration:none;cursor:pointer;user-select:none;-moz-appearance:none;-webkit-appearance:none;overflow:visible;transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1),opacity 15ms linear 30ms,transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-fab .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-fab[hidden]{display:none}.mdc-fab::-moz-focus-inner{padding:0;border:0}.mdc-fab .mdc-fab__focus-ring{position:absolute}.mdc-fab.mdc-ripple-upgraded--background-focused .mdc-fab__focus-ring,.mdc-fab:not(.mdc-ripple-upgraded):focus .mdc-fab__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-fab.mdc-ripple-upgraded--background-focused .mdc-fab__focus-ring,.mdc-fab:not(.mdc-ripple-upgraded):focus .mdc-fab__focus-ring{border-color:CanvasText}}.mdc-fab.mdc-ripple-upgraded--background-focused .mdc-fab__focus-ring::after,.mdc-fab:not(.mdc-ripple-upgraded):focus .mdc-fab__focus-ring::after{content:"";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-fab.mdc-ripple-upgraded--background-focused .mdc-fab__focus-ring::after,.mdc-fab:not(.mdc-ripple-upgraded):focus .mdc-fab__focus-ring::after{border-color:CanvasText}}.mdc-fab:active,.mdc-fab:focus{outline:none}.mdc-fab:hover{cursor:pointer}.mdc-fab>svg{width:100%}.mdc-fab--mini{width:40px;height:40px}.mdc-fab--extended{border-radius:24px;padding-left:20px;padding-right:20px;width:auto;max-width:100%;height:48px;line-height:normal}.mdc-fab--extended .mdc-fab__ripple{border-radius:24px}.mdc-fab--extended .mdc-fab__icon{margin-left:calc(12px - 20px);margin-right:12px}[dir=rtl] .mdc-fab--extended .mdc-fab__icon,.mdc-fab--extended .mdc-fab__icon[dir=rtl]{margin-left:12px;margin-right:calc(12px - 20px)}.mdc-fab--extended .mdc-fab__label+.mdc-fab__icon{margin-left:12px;margin-right:calc(12px - 20px)}[dir=rtl] .mdc-fab--extended .mdc-fab__label+.mdc-fab__icon,.mdc-fab--extended .mdc-fab__label+.mdc-fab__icon[dir=rtl]{margin-left:calc(12px - 20px);margin-right:12px}.mdc-fab--touch{margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-fab--touch .mdc-fab__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-fab::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-fab::before{border-color:CanvasText}}.mdc-fab__label{justify-content:flex-start;text-overflow:ellipsis;white-space:nowrap;overflow-x:hidden;overflow-y:visible}.mdc-fab__icon{transition:transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);fill:currentColor;will-change:transform}.mdc-fab .mdc-fab__icon{display:inline-flex;align-items:center;justify-content:center}.mdc-fab--exited{transform:scale(0);opacity:0;transition:opacity 15ms linear 150ms,transform 180ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-fab--exited .mdc-fab__icon{transform:scale(0);transition:transform 135ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mat-mdc-fab{background-color:var(--mdc-fab-container-color)}.mat-mdc-fab .mdc-fab__icon{width:var(--mdc-fab-icon-size);height:var(--mdc-fab-icon-size);font-size:var(--mdc-fab-icon-size)}.mat-mdc-fab:not(.mdc-fab--extended){border-radius:var(--mdc-fab-container-shape)}.mat-mdc-fab:not(.mdc-fab--extended) .mdc-fab__ripple{border-radius:var(--mdc-fab-container-shape)}.mat-mdc-mini-fab{background-color:var(--mdc-fab-small-container-color)}.mat-mdc-mini-fab .mdc-fab__icon{width:var(--mdc-fab-small-icon-size);height:var(--mdc-fab-small-icon-size);font-size:var(--mdc-fab-small-icon-size)}.mat-mdc-mini-fab:not(.mdc-fab--extended){border-radius:var(--mdc-fab-small-container-shape)}.mat-mdc-mini-fab:not(.mdc-fab--extended) .mdc-fab__ripple{border-radius:var(--mdc-fab-small-container-shape)}.mat-mdc-extended-fab{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;height:var(--mdc-extended-fab-container-height);border-radius:var(--mdc-extended-fab-container-shape);font-family:var(--mdc-extended-fab-label-text-font);font-size:var(--mdc-extended-fab-label-text-size);font-weight:var(--mdc-extended-fab-label-text-weight);letter-spacing:var(--mdc-extended-fab-label-text-tracking)}.mat-mdc-extended-fab .mdc-fab__ripple{border-radius:var(--mdc-extended-fab-container-shape)}.mat-mdc-fab,.mat-mdc-mini-fab{-webkit-tap-highlight-color:rgba(0,0,0,0);flex-shrink:0}.mat-mdc-fab .mat-mdc-button-ripple,.mat-mdc-fab .mat-mdc-button-persistent-ripple,.mat-mdc-fab .mat-mdc-button-persistent-ripple::before,.mat-mdc-mini-fab .mat-mdc-button-ripple,.mat-mdc-mini-fab .mat-mdc-button-persistent-ripple,.mat-mdc-mini-fab .mat-mdc-button-persistent-ripple::before{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-fab .mat-mdc-button-ripple,.mat-mdc-mini-fab .mat-mdc-button-ripple{overflow:hidden}.mat-mdc-fab .mat-mdc-button-persistent-ripple::before,.mat-mdc-mini-fab .mat-mdc-button-persistent-ripple::before{content:"";opacity:0}.mat-mdc-fab .mdc-button__label,.mat-mdc-mini-fab .mdc-button__label{z-index:1}.mat-mdc-fab .mat-mdc-focus-indicator,.mat-mdc-mini-fab .mat-mdc-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute}.mat-mdc-fab:focus .mat-mdc-focus-indicator::before,.mat-mdc-mini-fab:focus .mat-mdc-focus-indicator::before{content:""}.mat-mdc-fab._mat-animation-noopable,.mat-mdc-mini-fab._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mdc-fab:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-mini-fab:not(.mdc-ripple-upgraded):focus::before{background:rgba(0,0,0,0);opacity:1}.mat-mdc-fab .mat-icon,.mat-mdc-fab .material-icons,.mat-mdc-mini-fab .mat-icon,.mat-mdc-mini-fab .material-icons{transition:transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);fill:currentColor;will-change:transform}.mat-mdc-fab .mat-mdc-focus-indicator::before,.mat-mdc-mini-fab .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-mdc-fab[disabled],.mat-mdc-fab.mat-mdc-button-disabled,.mat-mdc-mini-fab[disabled],.mat-mdc-mini-fab.mat-mdc-button-disabled{cursor:default;pointer-events:none}.mat-mdc-fab[disabled],.mat-mdc-fab[disabled]:focus,.mat-mdc-fab.mat-mdc-button-disabled,.mat-mdc-fab.mat-mdc-button-disabled:focus,.mat-mdc-mini-fab[disabled],.mat-mdc-mini-fab[disabled]:focus,.mat-mdc-mini-fab.mat-mdc-button-disabled,.mat-mdc-mini-fab.mat-mdc-button-disabled:focus{box-shadow:none}.mat-mdc-fab.mat-mdc-button-disabled-interactive,.mat-mdc-mini-fab.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-fab{color:var(--mat-fab-foreground-color, inherit);box-shadow:var(--mdc-fab-container-elevation-shadow)}.mat-mdc-fab .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%);display:var(--mat-fab-touch-target-display)}.mat-mdc-fab .mat-ripple-element{background-color:var(--mat-fab-ripple-color)}.mat-mdc-fab .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-fab-state-layer-color)}.mat-mdc-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-fab-disabled-state-layer-color)}.mat-mdc-fab:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-hover-state-layer-opacity)}.mat-mdc-fab.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-fab.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-fab.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-focus-state-layer-opacity)}.mat-mdc-fab:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-pressed-state-layer-opacity)}.mat-mdc-fab:hover{box-shadow:var(--mdc-fab-hover-container-elevation-shadow)}.mat-mdc-fab:focus{box-shadow:var(--mdc-fab-focus-container-elevation-shadow)}.mat-mdc-fab:active,.mat-mdc-fab:focus:active{box-shadow:var(--mdc-fab-pressed-container-elevation-shadow)}.mat-mdc-fab[disabled],.mat-mdc-fab.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mat-fab-disabled-state-foreground-color);background-color:var(--mat-fab-disabled-state-container-color)}.mat-mdc-fab.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-mini-fab{color:var(--mat-fab-small-foreground-color, inherit);box-shadow:var(--mdc-fab-small-container-elevation-shadow)}.mat-mdc-mini-fab .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%);display:var(--mat-fab-small-touch-target-display)}.mat-mdc-mini-fab .mat-ripple-element{background-color:var(--mat-fab-small-ripple-color)}.mat-mdc-mini-fab .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-fab-small-state-layer-color)}.mat-mdc-mini-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-fab-small-disabled-state-layer-color)}.mat-mdc-mini-fab:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-small-hover-state-layer-opacity)}.mat-mdc-mini-fab.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-mini-fab.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-mini-fab.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-small-focus-state-layer-opacity)}.mat-mdc-mini-fab:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-small-pressed-state-layer-opacity)}.mat-mdc-mini-fab:hover{box-shadow:var(--mdc-fab-small-hover-container-elevation-shadow)}.mat-mdc-mini-fab:focus{box-shadow:var(--mdc-fab-small-focus-container-elevation-shadow)}.mat-mdc-mini-fab:active,.mat-mdc-mini-fab:focus:active{box-shadow:var(--mdc-fab-small-pressed-container-elevation-shadow)}.mat-mdc-mini-fab[disabled],.mat-mdc-mini-fab.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mat-fab-small-disabled-state-foreground-color);background-color:var(--mat-fab-small-disabled-state-container-color)}.mat-mdc-mini-fab.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-extended-fab{box-shadow:var(--mdc-extended-fab-container-elevation-shadow)}.mat-mdc-extended-fab:hover{box-shadow:var(--mdc-extended-fab-hover-container-elevation-shadow)}.mat-mdc-extended-fab:focus{box-shadow:var(--mdc-extended-fab-focus-container-elevation-shadow)}.mat-mdc-extended-fab:active,.mat-mdc-extended-fab:focus:active{box-shadow:var(--mdc-extended-fab-pressed-container-elevation-shadow)}.mat-mdc-extended-fab[disabled],.mat-mdc-extended-fab.mat-mdc-button-disabled{cursor:default;pointer-events:none}.mat-mdc-extended-fab[disabled],.mat-mdc-extended-fab[disabled]:focus,.mat-mdc-extended-fab.mat-mdc-button-disabled,.mat-mdc-extended-fab.mat-mdc-button-disabled:focus{box-shadow:none}.mat-mdc-extended-fab.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-extended-fab>.mat-icon,.mat-mdc-extended-fab>.material-icons{margin-left:calc(12px - 20px);margin-right:12px}[dir=rtl] .mat-mdc-extended-fab>.mat-icon,[dir=rtl] .mat-mdc-extended-fab>.material-icons,.mat-mdc-extended-fab>.mat-icon[dir=rtl],.mat-mdc-extended-fab>.material-icons[dir=rtl]{margin-left:12px;margin-right:calc(12px - 20px)}.mat-mdc-extended-fab .mat-mdc-button-touch-target{width:100%}.mat-mdc-extended-fab .mdc-button__label+.mat-icon,.mat-mdc-extended-fab .mdc-button__label+.material-icons{margin-left:12px;margin-right:calc(12px - 20px)}[dir=rtl] .mat-mdc-extended-fab .mdc-button__label+.mat-icon,[dir=rtl] .mat-mdc-extended-fab .mdc-button__label+.material-icons,.mat-mdc-extended-fab .mdc-button__label+.mat-icon[dir=rtl],.mat-mdc-extended-fab .mdc-button__label+.material-icons[dir=rtl]{margin-left:calc(12px - 20px);margin-right:12px}']
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Platform
  }, {
    type: NgZone
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ANIMATION_MODULE_TYPE]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_FAB_DEFAULT_OPTIONS]
    }]
  }], null);
})();
var _MatFabAnchor = class _MatFabAnchor extends MatAnchor {
  constructor(elementRef, platform, ngZone, animationMode, _options) {
    super(elementRef, platform, ngZone, animationMode);
    this._options = _options;
    this._isFab = true;
    this._options = this._options || defaults;
    this.color = this._options.color || defaults.color;
  }
};
_MatFabAnchor.ɵfac = function MatFabAnchor_Factory(t) {
  return new (t || _MatFabAnchor)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8), ɵɵdirectiveInject(MAT_FAB_DEFAULT_OPTIONS, 8));
};
_MatFabAnchor.ɵcmp = ɵɵdefineComponent({
  type: _MatFabAnchor,
  selectors: [["a", "mat-fab", ""]],
  hostVars: 19,
  hostBindings: function MatFabAnchor_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("disabled", ctx._getDisabledAttribute())("tabindex", ctx.disabled && !ctx.disabledInteractive ? -1 : ctx.tabIndex)("aria-disabled", ctx._getDisabledAttribute());
      ɵɵclassMap(ctx.color ? "mat-" + ctx.color : "");
      ɵɵclassProp("mat-mdc-button-disabled", ctx.disabled)("mat-mdc-button-disabled-interactive", ctx.disabledInteractive)("_mat-animation-noopable", ctx._animationMode === "NoopAnimations")("mat-unthemed", !ctx.color)("mat-mdc-button-base", true)("mdc-fab--extended", ctx.extended)("mat-mdc-extended-fab", ctx.extended);
    }
  },
  inputs: {
    extended: [InputFlags.HasDecoratorInputTransform, "extended", "extended", booleanAttribute]
  },
  exportAs: ["matButton", "matAnchor"],
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  attrs: _c5,
  ngContentSelectors: _c2,
  decls: 7,
  vars: 4,
  consts: [[1, "mat-mdc-button-persistent-ripple"], [1, "mdc-button__label"], [1, "mat-mdc-focus-indicator"], [1, "mat-mdc-button-touch-target"]],
  template: function MatFabAnchor_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c1);
      ɵɵelement(0, "span", 0);
      ɵɵprojection(1);
      ɵɵelementStart(2, "span", 1);
      ɵɵprojection(3, 1);
      ɵɵelementEnd();
      ɵɵprojection(4, 2);
      ɵɵelement(5, "span", 2)(6, "span", 3);
    }
    if (rf & 2) {
      ɵɵclassProp("mdc-button__ripple", !ctx._isFab)("mdc-fab__ripple", ctx._isFab);
    }
  },
  styles: [_c7],
  encapsulation: 2,
  changeDetection: 0
});
var MatFabAnchor = _MatFabAnchor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatFabAnchor, [{
    type: Component,
    args: [{
      selector: `a[mat-fab]`,
      host: __spreadProps(__spreadValues({}, MAT_ANCHOR_HOST), {
        "[class.mdc-fab--extended]": "extended",
        "[class.mat-mdc-extended-fab]": "extended"
      }),
      exportAs: "matButton, matAnchor",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      template: `<span
    class="mat-mdc-button-persistent-ripple"
    [class.mdc-button__ripple]="!_isFab"
    [class.mdc-fab__ripple]="_isFab"></span>

<ng-content select=".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])">
</ng-content>

<span class="mdc-button__label"><ng-content></ng-content></span>

<ng-content select=".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]">
</ng-content>

<!--
  The indicator can't be directly on the button, because MDC uses ::before for high contrast
  indication and it can't be on the ripple, because it has a border radius and overflow: hidden.
-->
<span class="mat-mdc-focus-indicator"></span>

<span class="mat-mdc-button-touch-target"></span>
`,
      styles: ['.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:var(--mdc-elevation-overlay-opacity);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-fab{position:relative;display:inline-flex;position:relative;align-items:center;justify-content:center;box-sizing:border-box;width:56px;height:56px;padding:0;border:none;fill:currentColor;text-decoration:none;cursor:pointer;user-select:none;-moz-appearance:none;-webkit-appearance:none;overflow:visible;transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1),opacity 15ms linear 30ms,transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-fab .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-fab[hidden]{display:none}.mdc-fab::-moz-focus-inner{padding:0;border:0}.mdc-fab .mdc-fab__focus-ring{position:absolute}.mdc-fab.mdc-ripple-upgraded--background-focused .mdc-fab__focus-ring,.mdc-fab:not(.mdc-ripple-upgraded):focus .mdc-fab__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-fab.mdc-ripple-upgraded--background-focused .mdc-fab__focus-ring,.mdc-fab:not(.mdc-ripple-upgraded):focus .mdc-fab__focus-ring{border-color:CanvasText}}.mdc-fab.mdc-ripple-upgraded--background-focused .mdc-fab__focus-ring::after,.mdc-fab:not(.mdc-ripple-upgraded):focus .mdc-fab__focus-ring::after{content:"";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-fab.mdc-ripple-upgraded--background-focused .mdc-fab__focus-ring::after,.mdc-fab:not(.mdc-ripple-upgraded):focus .mdc-fab__focus-ring::after{border-color:CanvasText}}.mdc-fab:active,.mdc-fab:focus{outline:none}.mdc-fab:hover{cursor:pointer}.mdc-fab>svg{width:100%}.mdc-fab--mini{width:40px;height:40px}.mdc-fab--extended{border-radius:24px;padding-left:20px;padding-right:20px;width:auto;max-width:100%;height:48px;line-height:normal}.mdc-fab--extended .mdc-fab__ripple{border-radius:24px}.mdc-fab--extended .mdc-fab__icon{margin-left:calc(12px - 20px);margin-right:12px}[dir=rtl] .mdc-fab--extended .mdc-fab__icon,.mdc-fab--extended .mdc-fab__icon[dir=rtl]{margin-left:12px;margin-right:calc(12px - 20px)}.mdc-fab--extended .mdc-fab__label+.mdc-fab__icon{margin-left:12px;margin-right:calc(12px - 20px)}[dir=rtl] .mdc-fab--extended .mdc-fab__label+.mdc-fab__icon,.mdc-fab--extended .mdc-fab__label+.mdc-fab__icon[dir=rtl]{margin-left:calc(12px - 20px);margin-right:12px}.mdc-fab--touch{margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-fab--touch .mdc-fab__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-fab::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-fab::before{border-color:CanvasText}}.mdc-fab__label{justify-content:flex-start;text-overflow:ellipsis;white-space:nowrap;overflow-x:hidden;overflow-y:visible}.mdc-fab__icon{transition:transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);fill:currentColor;will-change:transform}.mdc-fab .mdc-fab__icon{display:inline-flex;align-items:center;justify-content:center}.mdc-fab--exited{transform:scale(0);opacity:0;transition:opacity 15ms linear 150ms,transform 180ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-fab--exited .mdc-fab__icon{transform:scale(0);transition:transform 135ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mat-mdc-fab{background-color:var(--mdc-fab-container-color)}.mat-mdc-fab .mdc-fab__icon{width:var(--mdc-fab-icon-size);height:var(--mdc-fab-icon-size);font-size:var(--mdc-fab-icon-size)}.mat-mdc-fab:not(.mdc-fab--extended){border-radius:var(--mdc-fab-container-shape)}.mat-mdc-fab:not(.mdc-fab--extended) .mdc-fab__ripple{border-radius:var(--mdc-fab-container-shape)}.mat-mdc-mini-fab{background-color:var(--mdc-fab-small-container-color)}.mat-mdc-mini-fab .mdc-fab__icon{width:var(--mdc-fab-small-icon-size);height:var(--mdc-fab-small-icon-size);font-size:var(--mdc-fab-small-icon-size)}.mat-mdc-mini-fab:not(.mdc-fab--extended){border-radius:var(--mdc-fab-small-container-shape)}.mat-mdc-mini-fab:not(.mdc-fab--extended) .mdc-fab__ripple{border-radius:var(--mdc-fab-small-container-shape)}.mat-mdc-extended-fab{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;height:var(--mdc-extended-fab-container-height);border-radius:var(--mdc-extended-fab-container-shape);font-family:var(--mdc-extended-fab-label-text-font);font-size:var(--mdc-extended-fab-label-text-size);font-weight:var(--mdc-extended-fab-label-text-weight);letter-spacing:var(--mdc-extended-fab-label-text-tracking)}.mat-mdc-extended-fab .mdc-fab__ripple{border-radius:var(--mdc-extended-fab-container-shape)}.mat-mdc-fab,.mat-mdc-mini-fab{-webkit-tap-highlight-color:rgba(0,0,0,0);flex-shrink:0}.mat-mdc-fab .mat-mdc-button-ripple,.mat-mdc-fab .mat-mdc-button-persistent-ripple,.mat-mdc-fab .mat-mdc-button-persistent-ripple::before,.mat-mdc-mini-fab .mat-mdc-button-ripple,.mat-mdc-mini-fab .mat-mdc-button-persistent-ripple,.mat-mdc-mini-fab .mat-mdc-button-persistent-ripple::before{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-fab .mat-mdc-button-ripple,.mat-mdc-mini-fab .mat-mdc-button-ripple{overflow:hidden}.mat-mdc-fab .mat-mdc-button-persistent-ripple::before,.mat-mdc-mini-fab .mat-mdc-button-persistent-ripple::before{content:"";opacity:0}.mat-mdc-fab .mdc-button__label,.mat-mdc-mini-fab .mdc-button__label{z-index:1}.mat-mdc-fab .mat-mdc-focus-indicator,.mat-mdc-mini-fab .mat-mdc-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute}.mat-mdc-fab:focus .mat-mdc-focus-indicator::before,.mat-mdc-mini-fab:focus .mat-mdc-focus-indicator::before{content:""}.mat-mdc-fab._mat-animation-noopable,.mat-mdc-mini-fab._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mdc-fab:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-mini-fab:not(.mdc-ripple-upgraded):focus::before{background:rgba(0,0,0,0);opacity:1}.mat-mdc-fab .mat-icon,.mat-mdc-fab .material-icons,.mat-mdc-mini-fab .mat-icon,.mat-mdc-mini-fab .material-icons{transition:transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);fill:currentColor;will-change:transform}.mat-mdc-fab .mat-mdc-focus-indicator::before,.mat-mdc-mini-fab .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-mdc-fab[disabled],.mat-mdc-fab.mat-mdc-button-disabled,.mat-mdc-mini-fab[disabled],.mat-mdc-mini-fab.mat-mdc-button-disabled{cursor:default;pointer-events:none}.mat-mdc-fab[disabled],.mat-mdc-fab[disabled]:focus,.mat-mdc-fab.mat-mdc-button-disabled,.mat-mdc-fab.mat-mdc-button-disabled:focus,.mat-mdc-mini-fab[disabled],.mat-mdc-mini-fab[disabled]:focus,.mat-mdc-mini-fab.mat-mdc-button-disabled,.mat-mdc-mini-fab.mat-mdc-button-disabled:focus{box-shadow:none}.mat-mdc-fab.mat-mdc-button-disabled-interactive,.mat-mdc-mini-fab.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-fab{color:var(--mat-fab-foreground-color, inherit);box-shadow:var(--mdc-fab-container-elevation-shadow)}.mat-mdc-fab .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%);display:var(--mat-fab-touch-target-display)}.mat-mdc-fab .mat-ripple-element{background-color:var(--mat-fab-ripple-color)}.mat-mdc-fab .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-fab-state-layer-color)}.mat-mdc-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-fab-disabled-state-layer-color)}.mat-mdc-fab:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-hover-state-layer-opacity)}.mat-mdc-fab.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-fab.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-fab.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-focus-state-layer-opacity)}.mat-mdc-fab:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-pressed-state-layer-opacity)}.mat-mdc-fab:hover{box-shadow:var(--mdc-fab-hover-container-elevation-shadow)}.mat-mdc-fab:focus{box-shadow:var(--mdc-fab-focus-container-elevation-shadow)}.mat-mdc-fab:active,.mat-mdc-fab:focus:active{box-shadow:var(--mdc-fab-pressed-container-elevation-shadow)}.mat-mdc-fab[disabled],.mat-mdc-fab.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mat-fab-disabled-state-foreground-color);background-color:var(--mat-fab-disabled-state-container-color)}.mat-mdc-fab.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-mini-fab{color:var(--mat-fab-small-foreground-color, inherit);box-shadow:var(--mdc-fab-small-container-elevation-shadow)}.mat-mdc-mini-fab .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%);display:var(--mat-fab-small-touch-target-display)}.mat-mdc-mini-fab .mat-ripple-element{background-color:var(--mat-fab-small-ripple-color)}.mat-mdc-mini-fab .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-fab-small-state-layer-color)}.mat-mdc-mini-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-fab-small-disabled-state-layer-color)}.mat-mdc-mini-fab:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-small-hover-state-layer-opacity)}.mat-mdc-mini-fab.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-mini-fab.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-mini-fab.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-small-focus-state-layer-opacity)}.mat-mdc-mini-fab:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-small-pressed-state-layer-opacity)}.mat-mdc-mini-fab:hover{box-shadow:var(--mdc-fab-small-hover-container-elevation-shadow)}.mat-mdc-mini-fab:focus{box-shadow:var(--mdc-fab-small-focus-container-elevation-shadow)}.mat-mdc-mini-fab:active,.mat-mdc-mini-fab:focus:active{box-shadow:var(--mdc-fab-small-pressed-container-elevation-shadow)}.mat-mdc-mini-fab[disabled],.mat-mdc-mini-fab.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mat-fab-small-disabled-state-foreground-color);background-color:var(--mat-fab-small-disabled-state-container-color)}.mat-mdc-mini-fab.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-extended-fab{box-shadow:var(--mdc-extended-fab-container-elevation-shadow)}.mat-mdc-extended-fab:hover{box-shadow:var(--mdc-extended-fab-hover-container-elevation-shadow)}.mat-mdc-extended-fab:focus{box-shadow:var(--mdc-extended-fab-focus-container-elevation-shadow)}.mat-mdc-extended-fab:active,.mat-mdc-extended-fab:focus:active{box-shadow:var(--mdc-extended-fab-pressed-container-elevation-shadow)}.mat-mdc-extended-fab[disabled],.mat-mdc-extended-fab.mat-mdc-button-disabled{cursor:default;pointer-events:none}.mat-mdc-extended-fab[disabled],.mat-mdc-extended-fab[disabled]:focus,.mat-mdc-extended-fab.mat-mdc-button-disabled,.mat-mdc-extended-fab.mat-mdc-button-disabled:focus{box-shadow:none}.mat-mdc-extended-fab.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-extended-fab>.mat-icon,.mat-mdc-extended-fab>.material-icons{margin-left:calc(12px - 20px);margin-right:12px}[dir=rtl] .mat-mdc-extended-fab>.mat-icon,[dir=rtl] .mat-mdc-extended-fab>.material-icons,.mat-mdc-extended-fab>.mat-icon[dir=rtl],.mat-mdc-extended-fab>.material-icons[dir=rtl]{margin-left:12px;margin-right:calc(12px - 20px)}.mat-mdc-extended-fab .mat-mdc-button-touch-target{width:100%}.mat-mdc-extended-fab .mdc-button__label+.mat-icon,.mat-mdc-extended-fab .mdc-button__label+.material-icons{margin-left:12px;margin-right:calc(12px - 20px)}[dir=rtl] .mat-mdc-extended-fab .mdc-button__label+.mat-icon,[dir=rtl] .mat-mdc-extended-fab .mdc-button__label+.material-icons,.mat-mdc-extended-fab .mdc-button__label+.mat-icon[dir=rtl],.mat-mdc-extended-fab .mdc-button__label+.material-icons[dir=rtl]{margin-left:calc(12px - 20px);margin-right:12px}']
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Platform
  }, {
    type: NgZone
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ANIMATION_MODULE_TYPE]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_FAB_DEFAULT_OPTIONS]
    }]
  }], {
    extended: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var _MatMiniFabAnchor = class _MatMiniFabAnchor extends MatAnchor {
  constructor(elementRef, platform, ngZone, animationMode, _options) {
    super(elementRef, platform, ngZone, animationMode);
    this._options = _options;
    this._isFab = true;
    this._options = this._options || defaults;
    this.color = this._options.color || defaults.color;
  }
};
_MatMiniFabAnchor.ɵfac = function MatMiniFabAnchor_Factory(t) {
  return new (t || _MatMiniFabAnchor)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8), ɵɵdirectiveInject(MAT_FAB_DEFAULT_OPTIONS, 8));
};
_MatMiniFabAnchor.ɵcmp = ɵɵdefineComponent({
  type: _MatMiniFabAnchor,
  selectors: [["a", "mat-mini-fab", ""]],
  hostVars: 15,
  hostBindings: function MatMiniFabAnchor_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("disabled", ctx._getDisabledAttribute())("tabindex", ctx.disabled && !ctx.disabledInteractive ? -1 : ctx.tabIndex)("aria-disabled", ctx._getDisabledAttribute());
      ɵɵclassMap(ctx.color ? "mat-" + ctx.color : "");
      ɵɵclassProp("mat-mdc-button-disabled", ctx.disabled)("mat-mdc-button-disabled-interactive", ctx.disabledInteractive)("_mat-animation-noopable", ctx._animationMode === "NoopAnimations")("mat-unthemed", !ctx.color)("mat-mdc-button-base", true);
    }
  },
  exportAs: ["matButton", "matAnchor"],
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  attrs: _c6,
  ngContentSelectors: _c2,
  decls: 7,
  vars: 4,
  consts: [[1, "mat-mdc-button-persistent-ripple"], [1, "mdc-button__label"], [1, "mat-mdc-focus-indicator"], [1, "mat-mdc-button-touch-target"]],
  template: function MatMiniFabAnchor_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c1);
      ɵɵelement(0, "span", 0);
      ɵɵprojection(1);
      ɵɵelementStart(2, "span", 1);
      ɵɵprojection(3, 1);
      ɵɵelementEnd();
      ɵɵprojection(4, 2);
      ɵɵelement(5, "span", 2)(6, "span", 3);
    }
    if (rf & 2) {
      ɵɵclassProp("mdc-button__ripple", !ctx._isFab)("mdc-fab__ripple", ctx._isFab);
    }
  },
  styles: [_c7],
  encapsulation: 2,
  changeDetection: 0
});
var MatMiniFabAnchor = _MatMiniFabAnchor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatMiniFabAnchor, [{
    type: Component,
    args: [{
      selector: `a[mat-mini-fab]`,
      host: MAT_ANCHOR_HOST,
      exportAs: "matButton, matAnchor",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      template: `<span
    class="mat-mdc-button-persistent-ripple"
    [class.mdc-button__ripple]="!_isFab"
    [class.mdc-fab__ripple]="_isFab"></span>

<ng-content select=".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])">
</ng-content>

<span class="mdc-button__label"><ng-content></ng-content></span>

<ng-content select=".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]">
</ng-content>

<!--
  The indicator can't be directly on the button, because MDC uses ::before for high contrast
  indication and it can't be on the ripple, because it has a border radius and overflow: hidden.
-->
<span class="mat-mdc-focus-indicator"></span>

<span class="mat-mdc-button-touch-target"></span>
`,
      styles: ['.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:var(--mdc-elevation-overlay-opacity);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-fab{position:relative;display:inline-flex;position:relative;align-items:center;justify-content:center;box-sizing:border-box;width:56px;height:56px;padding:0;border:none;fill:currentColor;text-decoration:none;cursor:pointer;user-select:none;-moz-appearance:none;-webkit-appearance:none;overflow:visible;transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1),opacity 15ms linear 30ms,transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-fab .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-fab[hidden]{display:none}.mdc-fab::-moz-focus-inner{padding:0;border:0}.mdc-fab .mdc-fab__focus-ring{position:absolute}.mdc-fab.mdc-ripple-upgraded--background-focused .mdc-fab__focus-ring,.mdc-fab:not(.mdc-ripple-upgraded):focus .mdc-fab__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-fab.mdc-ripple-upgraded--background-focused .mdc-fab__focus-ring,.mdc-fab:not(.mdc-ripple-upgraded):focus .mdc-fab__focus-ring{border-color:CanvasText}}.mdc-fab.mdc-ripple-upgraded--background-focused .mdc-fab__focus-ring::after,.mdc-fab:not(.mdc-ripple-upgraded):focus .mdc-fab__focus-ring::after{content:"";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-fab.mdc-ripple-upgraded--background-focused .mdc-fab__focus-ring::after,.mdc-fab:not(.mdc-ripple-upgraded):focus .mdc-fab__focus-ring::after{border-color:CanvasText}}.mdc-fab:active,.mdc-fab:focus{outline:none}.mdc-fab:hover{cursor:pointer}.mdc-fab>svg{width:100%}.mdc-fab--mini{width:40px;height:40px}.mdc-fab--extended{border-radius:24px;padding-left:20px;padding-right:20px;width:auto;max-width:100%;height:48px;line-height:normal}.mdc-fab--extended .mdc-fab__ripple{border-radius:24px}.mdc-fab--extended .mdc-fab__icon{margin-left:calc(12px - 20px);margin-right:12px}[dir=rtl] .mdc-fab--extended .mdc-fab__icon,.mdc-fab--extended .mdc-fab__icon[dir=rtl]{margin-left:12px;margin-right:calc(12px - 20px)}.mdc-fab--extended .mdc-fab__label+.mdc-fab__icon{margin-left:12px;margin-right:calc(12px - 20px)}[dir=rtl] .mdc-fab--extended .mdc-fab__label+.mdc-fab__icon,.mdc-fab--extended .mdc-fab__label+.mdc-fab__icon[dir=rtl]{margin-left:calc(12px - 20px);margin-right:12px}.mdc-fab--touch{margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-fab--touch .mdc-fab__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-fab::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-fab::before{border-color:CanvasText}}.mdc-fab__label{justify-content:flex-start;text-overflow:ellipsis;white-space:nowrap;overflow-x:hidden;overflow-y:visible}.mdc-fab__icon{transition:transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);fill:currentColor;will-change:transform}.mdc-fab .mdc-fab__icon{display:inline-flex;align-items:center;justify-content:center}.mdc-fab--exited{transform:scale(0);opacity:0;transition:opacity 15ms linear 150ms,transform 180ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-fab--exited .mdc-fab__icon{transform:scale(0);transition:transform 135ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mat-mdc-fab{background-color:var(--mdc-fab-container-color)}.mat-mdc-fab .mdc-fab__icon{width:var(--mdc-fab-icon-size);height:var(--mdc-fab-icon-size);font-size:var(--mdc-fab-icon-size)}.mat-mdc-fab:not(.mdc-fab--extended){border-radius:var(--mdc-fab-container-shape)}.mat-mdc-fab:not(.mdc-fab--extended) .mdc-fab__ripple{border-radius:var(--mdc-fab-container-shape)}.mat-mdc-mini-fab{background-color:var(--mdc-fab-small-container-color)}.mat-mdc-mini-fab .mdc-fab__icon{width:var(--mdc-fab-small-icon-size);height:var(--mdc-fab-small-icon-size);font-size:var(--mdc-fab-small-icon-size)}.mat-mdc-mini-fab:not(.mdc-fab--extended){border-radius:var(--mdc-fab-small-container-shape)}.mat-mdc-mini-fab:not(.mdc-fab--extended) .mdc-fab__ripple{border-radius:var(--mdc-fab-small-container-shape)}.mat-mdc-extended-fab{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;height:var(--mdc-extended-fab-container-height);border-radius:var(--mdc-extended-fab-container-shape);font-family:var(--mdc-extended-fab-label-text-font);font-size:var(--mdc-extended-fab-label-text-size);font-weight:var(--mdc-extended-fab-label-text-weight);letter-spacing:var(--mdc-extended-fab-label-text-tracking)}.mat-mdc-extended-fab .mdc-fab__ripple{border-radius:var(--mdc-extended-fab-container-shape)}.mat-mdc-fab,.mat-mdc-mini-fab{-webkit-tap-highlight-color:rgba(0,0,0,0);flex-shrink:0}.mat-mdc-fab .mat-mdc-button-ripple,.mat-mdc-fab .mat-mdc-button-persistent-ripple,.mat-mdc-fab .mat-mdc-button-persistent-ripple::before,.mat-mdc-mini-fab .mat-mdc-button-ripple,.mat-mdc-mini-fab .mat-mdc-button-persistent-ripple,.mat-mdc-mini-fab .mat-mdc-button-persistent-ripple::before{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-fab .mat-mdc-button-ripple,.mat-mdc-mini-fab .mat-mdc-button-ripple{overflow:hidden}.mat-mdc-fab .mat-mdc-button-persistent-ripple::before,.mat-mdc-mini-fab .mat-mdc-button-persistent-ripple::before{content:"";opacity:0}.mat-mdc-fab .mdc-button__label,.mat-mdc-mini-fab .mdc-button__label{z-index:1}.mat-mdc-fab .mat-mdc-focus-indicator,.mat-mdc-mini-fab .mat-mdc-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute}.mat-mdc-fab:focus .mat-mdc-focus-indicator::before,.mat-mdc-mini-fab:focus .mat-mdc-focus-indicator::before{content:""}.mat-mdc-fab._mat-animation-noopable,.mat-mdc-mini-fab._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mdc-fab:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-mini-fab:not(.mdc-ripple-upgraded):focus::before{background:rgba(0,0,0,0);opacity:1}.mat-mdc-fab .mat-icon,.mat-mdc-fab .material-icons,.mat-mdc-mini-fab .mat-icon,.mat-mdc-mini-fab .material-icons{transition:transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);fill:currentColor;will-change:transform}.mat-mdc-fab .mat-mdc-focus-indicator::before,.mat-mdc-mini-fab .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-mdc-fab[disabled],.mat-mdc-fab.mat-mdc-button-disabled,.mat-mdc-mini-fab[disabled],.mat-mdc-mini-fab.mat-mdc-button-disabled{cursor:default;pointer-events:none}.mat-mdc-fab[disabled],.mat-mdc-fab[disabled]:focus,.mat-mdc-fab.mat-mdc-button-disabled,.mat-mdc-fab.mat-mdc-button-disabled:focus,.mat-mdc-mini-fab[disabled],.mat-mdc-mini-fab[disabled]:focus,.mat-mdc-mini-fab.mat-mdc-button-disabled,.mat-mdc-mini-fab.mat-mdc-button-disabled:focus{box-shadow:none}.mat-mdc-fab.mat-mdc-button-disabled-interactive,.mat-mdc-mini-fab.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-fab{color:var(--mat-fab-foreground-color, inherit);box-shadow:var(--mdc-fab-container-elevation-shadow)}.mat-mdc-fab .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%);display:var(--mat-fab-touch-target-display)}.mat-mdc-fab .mat-ripple-element{background-color:var(--mat-fab-ripple-color)}.mat-mdc-fab .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-fab-state-layer-color)}.mat-mdc-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-fab-disabled-state-layer-color)}.mat-mdc-fab:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-hover-state-layer-opacity)}.mat-mdc-fab.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-fab.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-fab.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-focus-state-layer-opacity)}.mat-mdc-fab:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-pressed-state-layer-opacity)}.mat-mdc-fab:hover{box-shadow:var(--mdc-fab-hover-container-elevation-shadow)}.mat-mdc-fab:focus{box-shadow:var(--mdc-fab-focus-container-elevation-shadow)}.mat-mdc-fab:active,.mat-mdc-fab:focus:active{box-shadow:var(--mdc-fab-pressed-container-elevation-shadow)}.mat-mdc-fab[disabled],.mat-mdc-fab.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mat-fab-disabled-state-foreground-color);background-color:var(--mat-fab-disabled-state-container-color)}.mat-mdc-fab.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-mini-fab{color:var(--mat-fab-small-foreground-color, inherit);box-shadow:var(--mdc-fab-small-container-elevation-shadow)}.mat-mdc-mini-fab .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%);display:var(--mat-fab-small-touch-target-display)}.mat-mdc-mini-fab .mat-ripple-element{background-color:var(--mat-fab-small-ripple-color)}.mat-mdc-mini-fab .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-fab-small-state-layer-color)}.mat-mdc-mini-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-fab-small-disabled-state-layer-color)}.mat-mdc-mini-fab:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-small-hover-state-layer-opacity)}.mat-mdc-mini-fab.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-mini-fab.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-mini-fab.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-small-focus-state-layer-opacity)}.mat-mdc-mini-fab:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-small-pressed-state-layer-opacity)}.mat-mdc-mini-fab:hover{box-shadow:var(--mdc-fab-small-hover-container-elevation-shadow)}.mat-mdc-mini-fab:focus{box-shadow:var(--mdc-fab-small-focus-container-elevation-shadow)}.mat-mdc-mini-fab:active,.mat-mdc-mini-fab:focus:active{box-shadow:var(--mdc-fab-small-pressed-container-elevation-shadow)}.mat-mdc-mini-fab[disabled],.mat-mdc-mini-fab.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mat-fab-small-disabled-state-foreground-color);background-color:var(--mat-fab-small-disabled-state-container-color)}.mat-mdc-mini-fab.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-extended-fab{box-shadow:var(--mdc-extended-fab-container-elevation-shadow)}.mat-mdc-extended-fab:hover{box-shadow:var(--mdc-extended-fab-hover-container-elevation-shadow)}.mat-mdc-extended-fab:focus{box-shadow:var(--mdc-extended-fab-focus-container-elevation-shadow)}.mat-mdc-extended-fab:active,.mat-mdc-extended-fab:focus:active{box-shadow:var(--mdc-extended-fab-pressed-container-elevation-shadow)}.mat-mdc-extended-fab[disabled],.mat-mdc-extended-fab.mat-mdc-button-disabled{cursor:default;pointer-events:none}.mat-mdc-extended-fab[disabled],.mat-mdc-extended-fab[disabled]:focus,.mat-mdc-extended-fab.mat-mdc-button-disabled,.mat-mdc-extended-fab.mat-mdc-button-disabled:focus{box-shadow:none}.mat-mdc-extended-fab.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-extended-fab>.mat-icon,.mat-mdc-extended-fab>.material-icons{margin-left:calc(12px - 20px);margin-right:12px}[dir=rtl] .mat-mdc-extended-fab>.mat-icon,[dir=rtl] .mat-mdc-extended-fab>.material-icons,.mat-mdc-extended-fab>.mat-icon[dir=rtl],.mat-mdc-extended-fab>.material-icons[dir=rtl]{margin-left:12px;margin-right:calc(12px - 20px)}.mat-mdc-extended-fab .mat-mdc-button-touch-target{width:100%}.mat-mdc-extended-fab .mdc-button__label+.mat-icon,.mat-mdc-extended-fab .mdc-button__label+.material-icons{margin-left:12px;margin-right:calc(12px - 20px)}[dir=rtl] .mat-mdc-extended-fab .mdc-button__label+.mat-icon,[dir=rtl] .mat-mdc-extended-fab .mdc-button__label+.material-icons,.mat-mdc-extended-fab .mdc-button__label+.mat-icon[dir=rtl],.mat-mdc-extended-fab .mdc-button__label+.material-icons[dir=rtl]{margin-left:calc(12px - 20px);margin-right:12px}']
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Platform
  }, {
    type: NgZone
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ANIMATION_MODULE_TYPE]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_FAB_DEFAULT_OPTIONS]
    }]
  }], null);
})();
var _MatIconButton = class _MatIconButton extends MatButtonBase {
  constructor(elementRef, platform, ngZone, animationMode) {
    super(elementRef, platform, ngZone, animationMode);
    this._rippleLoader.configureRipple(this._elementRef.nativeElement, {
      centered: true
    });
  }
};
_MatIconButton.ɵfac = function MatIconButton_Factory(t) {
  return new (t || _MatIconButton)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8));
};
_MatIconButton.ɵcmp = ɵɵdefineComponent({
  type: _MatIconButton,
  selectors: [["button", "mat-icon-button", ""]],
  hostVars: 14,
  hostBindings: function MatIconButton_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("disabled", ctx._getDisabledAttribute())("aria-disabled", ctx._getAriaDisabled());
      ɵɵclassMap(ctx.color ? "mat-" + ctx.color : "");
      ɵɵclassProp("mat-mdc-button-disabled", ctx.disabled)("mat-mdc-button-disabled-interactive", ctx.disabledInteractive)("_mat-animation-noopable", ctx._animationMode === "NoopAnimations")("mat-unthemed", !ctx.color)("mat-mdc-button-base", true);
    }
  },
  exportAs: ["matButton"],
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  attrs: _c8,
  ngContentSelectors: _c9,
  decls: 4,
  vars: 0,
  consts: [[1, "mat-mdc-button-persistent-ripple", "mdc-icon-button__ripple"], [1, "mat-mdc-focus-indicator"], [1, "mat-mdc-button-touch-target"]],
  template: function MatIconButton_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelement(0, "span", 0);
      ɵɵprojection(1);
      ɵɵelement(2, "span", 1)(3, "span", 2);
    }
  },
  styles: ['.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:rgba(0,0,0,0);fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;user-select:none;z-index:0;overflow:visible}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}@media screen and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{display:block}}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button[hidden]{display:none}.mdc-icon-button--display-flex{align-items:center;display:inline-flex;justify-content:center}.mdc-icon-button__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%;display:none}@media screen and (forced-colors: active){.mdc-icon-button__focus-ring{border-color:CanvasText}}.mdc-icon-button__focus-ring::after{content:"";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-icon-button__focus-ring::after{border-color:CanvasText}}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}.mdc-icon-button__link{height:100%;left:0;outline:none;position:absolute;top:0;width:100%}.mat-mdc-icon-button{color:var(--mdc-icon-button-icon-color)}.mat-mdc-icon-button .mdc-button__icon{font-size:var(--mdc-icon-button-icon-size)}.mat-mdc-icon-button svg,.mat-mdc-icon-button img{width:var(--mdc-icon-button-icon-size);height:var(--mdc-icon-button-icon-size)}.mat-mdc-icon-button:disabled{color:var(--mdc-icon-button-disabled-icon-color)}.mat-mdc-icon-button{border-radius:50%;flex-shrink:0;text-align:center;width:var(--mdc-icon-button-state-layer-size, 48px);height:var(--mdc-icon-button-state-layer-size, 48px);padding:calc(calc(var(--mdc-icon-button-state-layer-size, 48px) - var(--mdc-icon-button-icon-size, 24px)) / 2);font-size:var(--mdc-icon-button-icon-size);-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-icon-button svg{vertical-align:baseline}.mat-mdc-icon-button[disabled],.mat-mdc-icon-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-icon-button-disabled-icon-color)}.mat-mdc-icon-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-icon-button .mat-mdc-button-ripple,.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-icon-button .mat-mdc-button-ripple{overflow:hidden}.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before{content:"";opacity:0}.mat-mdc-icon-button .mdc-button__label{z-index:1}.mat-mdc-icon-button .mat-mdc-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute}.mat-mdc-icon-button:focus .mat-mdc-focus-indicator::before{content:""}.mat-mdc-icon-button .mat-ripple-element{background-color:var(--mat-icon-button-ripple-color)}.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-icon-button-state-layer-color)}.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-icon-button-disabled-state-layer-color)}.mat-mdc-icon-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-icon-button-hover-state-layer-opacity)}.mat-mdc-icon-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-icon-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-icon-button-focus-state-layer-opacity)}.mat-mdc-icon-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-icon-button-pressed-state-layer-opacity)}.mat-mdc-icon-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%);display:var(--mat-icon-button-touch-target-display)}.mat-mdc-icon-button._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mdc-icon-button .mat-mdc-button-persistent-ripple{border-radius:50%}.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before{background:rgba(0,0,0,0);opacity:1}', _c4],
  encapsulation: 2,
  changeDetection: 0
});
var MatIconButton = _MatIconButton;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatIconButton, [{
    type: Component,
    args: [{
      selector: `button[mat-icon-button]`,
      host: MAT_BUTTON_HOST,
      exportAs: "matButton",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      template: `<span class="mat-mdc-button-persistent-ripple mdc-icon-button__ripple"></span>

<ng-content></ng-content>

<!--
  The indicator can't be directly on the button, because MDC uses ::before for high contrast
  indication and it can't be on the ripple, because it has a border radius and overflow: hidden.
-->
<span class="mat-mdc-focus-indicator"></span>

<span class="mat-mdc-button-touch-target"></span>
`,
      styles: ['.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:rgba(0,0,0,0);fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;user-select:none;z-index:0;overflow:visible}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}@media screen and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{display:block}}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button[hidden]{display:none}.mdc-icon-button--display-flex{align-items:center;display:inline-flex;justify-content:center}.mdc-icon-button__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%;display:none}@media screen and (forced-colors: active){.mdc-icon-button__focus-ring{border-color:CanvasText}}.mdc-icon-button__focus-ring::after{content:"";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-icon-button__focus-ring::after{border-color:CanvasText}}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}.mdc-icon-button__link{height:100%;left:0;outline:none;position:absolute;top:0;width:100%}.mat-mdc-icon-button{color:var(--mdc-icon-button-icon-color)}.mat-mdc-icon-button .mdc-button__icon{font-size:var(--mdc-icon-button-icon-size)}.mat-mdc-icon-button svg,.mat-mdc-icon-button img{width:var(--mdc-icon-button-icon-size);height:var(--mdc-icon-button-icon-size)}.mat-mdc-icon-button:disabled{color:var(--mdc-icon-button-disabled-icon-color)}.mat-mdc-icon-button{border-radius:50%;flex-shrink:0;text-align:center;width:var(--mdc-icon-button-state-layer-size, 48px);height:var(--mdc-icon-button-state-layer-size, 48px);padding:calc(calc(var(--mdc-icon-button-state-layer-size, 48px) - var(--mdc-icon-button-icon-size, 24px)) / 2);font-size:var(--mdc-icon-button-icon-size);-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-icon-button svg{vertical-align:baseline}.mat-mdc-icon-button[disabled],.mat-mdc-icon-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-icon-button-disabled-icon-color)}.mat-mdc-icon-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-icon-button .mat-mdc-button-ripple,.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-icon-button .mat-mdc-button-ripple{overflow:hidden}.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before{content:"";opacity:0}.mat-mdc-icon-button .mdc-button__label{z-index:1}.mat-mdc-icon-button .mat-mdc-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute}.mat-mdc-icon-button:focus .mat-mdc-focus-indicator::before{content:""}.mat-mdc-icon-button .mat-ripple-element{background-color:var(--mat-icon-button-ripple-color)}.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-icon-button-state-layer-color)}.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-icon-button-disabled-state-layer-color)}.mat-mdc-icon-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-icon-button-hover-state-layer-opacity)}.mat-mdc-icon-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-icon-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-icon-button-focus-state-layer-opacity)}.mat-mdc-icon-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-icon-button-pressed-state-layer-opacity)}.mat-mdc-icon-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%);display:var(--mat-icon-button-touch-target-display)}.mat-mdc-icon-button._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mdc-icon-button .mat-mdc-button-persistent-ripple{border-radius:50%}.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before{background:rgba(0,0,0,0);opacity:1}', ".cdk-high-contrast-active .mat-mdc-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-unelevated-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-raised-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-outlined-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-icon-button{outline:solid 1px}"]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Platform
  }, {
    type: NgZone
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ANIMATION_MODULE_TYPE]
    }]
  }], null);
})();
var _MatIconAnchor = class _MatIconAnchor extends MatAnchorBase {
  constructor(elementRef, platform, ngZone, animationMode) {
    super(elementRef, platform, ngZone, animationMode);
  }
};
_MatIconAnchor.ɵfac = function MatIconAnchor_Factory(t) {
  return new (t || _MatIconAnchor)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8));
};
_MatIconAnchor.ɵcmp = ɵɵdefineComponent({
  type: _MatIconAnchor,
  selectors: [["a", "mat-icon-button", ""]],
  hostVars: 15,
  hostBindings: function MatIconAnchor_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("disabled", ctx._getDisabledAttribute())("tabindex", ctx.disabled && !ctx.disabledInteractive ? -1 : ctx.tabIndex)("aria-disabled", ctx._getDisabledAttribute());
      ɵɵclassMap(ctx.color ? "mat-" + ctx.color : "");
      ɵɵclassProp("mat-mdc-button-disabled", ctx.disabled)("mat-mdc-button-disabled-interactive", ctx.disabledInteractive)("_mat-animation-noopable", ctx._animationMode === "NoopAnimations")("mat-unthemed", !ctx.color)("mat-mdc-button-base", true);
    }
  },
  exportAs: ["matButton", "matAnchor"],
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  attrs: _c8,
  ngContentSelectors: _c2,
  decls: 7,
  vars: 4,
  consts: [[1, "mat-mdc-button-persistent-ripple"], [1, "mdc-button__label"], [1, "mat-mdc-focus-indicator"], [1, "mat-mdc-button-touch-target"]],
  template: function MatIconAnchor_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c1);
      ɵɵelement(0, "span", 0);
      ɵɵprojection(1);
      ɵɵelementStart(2, "span", 1);
      ɵɵprojection(3, 1);
      ɵɵelementEnd();
      ɵɵprojection(4, 2);
      ɵɵelement(5, "span", 2)(6, "span", 3);
    }
    if (rf & 2) {
      ɵɵclassProp("mdc-button__ripple", !ctx._isFab)("mdc-fab__ripple", ctx._isFab);
    }
  },
  styles: [_c10, _c4],
  encapsulation: 2,
  changeDetection: 0
});
var MatIconAnchor = _MatIconAnchor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatIconAnchor, [{
    type: Component,
    args: [{
      selector: `a[mat-icon-button]`,
      host: MAT_ANCHOR_HOST,
      exportAs: "matButton, matAnchor",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      template: `<span
    class="mat-mdc-button-persistent-ripple"
    [class.mdc-button__ripple]="!_isFab"
    [class.mdc-fab__ripple]="_isFab"></span>

<ng-content select=".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])">
</ng-content>

<span class="mdc-button__label"><ng-content></ng-content></span>

<ng-content select=".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]">
</ng-content>

<!--
  The indicator can't be directly on the button, because MDC uses ::before for high contrast
  indication and it can't be on the ripple, because it has a border radius and overflow: hidden.
-->
<span class="mat-mdc-focus-indicator"></span>

<span class="mat-mdc-button-touch-target"></span>
`,
      styles: ['.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:rgba(0,0,0,0);fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;user-select:none;z-index:0;overflow:visible}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}@media screen and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{display:block}}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button[hidden]{display:none}.mdc-icon-button--display-flex{align-items:center;display:inline-flex;justify-content:center}.mdc-icon-button__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%;display:none}@media screen and (forced-colors: active){.mdc-icon-button__focus-ring{border-color:CanvasText}}.mdc-icon-button__focus-ring::after{content:"";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-icon-button__focus-ring::after{border-color:CanvasText}}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}.mdc-icon-button__link{height:100%;left:0;outline:none;position:absolute;top:0;width:100%}.mat-mdc-icon-button{color:var(--mdc-icon-button-icon-color)}.mat-mdc-icon-button .mdc-button__icon{font-size:var(--mdc-icon-button-icon-size)}.mat-mdc-icon-button svg,.mat-mdc-icon-button img{width:var(--mdc-icon-button-icon-size);height:var(--mdc-icon-button-icon-size)}.mat-mdc-icon-button:disabled{color:var(--mdc-icon-button-disabled-icon-color)}.mat-mdc-icon-button{border-radius:50%;flex-shrink:0;text-align:center;width:var(--mdc-icon-button-state-layer-size, 48px);height:var(--mdc-icon-button-state-layer-size, 48px);padding:calc(calc(var(--mdc-icon-button-state-layer-size, 48px) - var(--mdc-icon-button-icon-size, 24px)) / 2);font-size:var(--mdc-icon-button-icon-size);-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-icon-button svg{vertical-align:baseline}.mat-mdc-icon-button[disabled],.mat-mdc-icon-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-icon-button-disabled-icon-color)}.mat-mdc-icon-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-icon-button .mat-mdc-button-ripple,.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-icon-button .mat-mdc-button-ripple{overflow:hidden}.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before{content:"";opacity:0}.mat-mdc-icon-button .mdc-button__label{z-index:1}.mat-mdc-icon-button .mat-mdc-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute}.mat-mdc-icon-button:focus .mat-mdc-focus-indicator::before{content:""}.mat-mdc-icon-button .mat-ripple-element{background-color:var(--mat-icon-button-ripple-color)}.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-icon-button-state-layer-color)}.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-icon-button-disabled-state-layer-color)}.mat-mdc-icon-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-icon-button-hover-state-layer-opacity)}.mat-mdc-icon-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-icon-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-icon-button-focus-state-layer-opacity)}.mat-mdc-icon-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-icon-button-pressed-state-layer-opacity)}.mat-mdc-icon-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%);display:var(--mat-icon-button-touch-target-display)}.mat-mdc-icon-button._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mdc-icon-button .mat-mdc-button-persistent-ripple{border-radius:50%}.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before{background:rgba(0,0,0,0);opacity:1}', ".cdk-high-contrast-active .mat-mdc-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-unelevated-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-raised-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-outlined-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-icon-button{outline:solid 1px}"]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Platform
  }, {
    type: NgZone
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ANIMATION_MODULE_TYPE]
    }]
  }], null);
})();
var _MatButtonModule = class _MatButtonModule {
};
_MatButtonModule.ɵfac = function MatButtonModule_Factory(t) {
  return new (t || _MatButtonModule)();
};
_MatButtonModule.ɵmod = ɵɵdefineNgModule({
  type: _MatButtonModule,
  imports: [MatCommonModule, MatRippleModule, MatAnchor, MatButton, MatIconAnchor, MatMiniFabAnchor, MatMiniFabButton, MatIconButton, MatFabAnchor, MatFabButton],
  exports: [MatAnchor, MatButton, MatIconAnchor, MatIconButton, MatMiniFabAnchor, MatMiniFabButton, MatFabAnchor, MatFabButton, MatCommonModule]
});
_MatButtonModule.ɵinj = ɵɵdefineInjector({
  imports: [MatCommonModule, MatRippleModule, MatCommonModule]
});
var MatButtonModule = _MatButtonModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatButtonModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, MatRippleModule, MatAnchor, MatButton, MatIconAnchor, MatMiniFabAnchor, MatMiniFabButton, MatIconButton, MatFabAnchor, MatFabButton],
      exports: [MatAnchor, MatButton, MatIconAnchor, MatIconButton, MatMiniFabAnchor, MatMiniFabButton, MatFabAnchor, MatFabButton, MatCommonModule]
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/text-field.mjs
var listenerOptions = normalizePassiveListenerOptions({
  passive: true
});
var _AutofillMonitor = class _AutofillMonitor {
  constructor(_platform, _ngZone) {
    this._platform = _platform;
    this._ngZone = _ngZone;
    this._monitoredElements = /* @__PURE__ */ new Map();
  }
  monitor(elementOrRef) {
    if (!this._platform.isBrowser) {
      return EMPTY;
    }
    const element = coerceElement(elementOrRef);
    const info = this._monitoredElements.get(element);
    if (info) {
      return info.subject;
    }
    const result = new Subject();
    const cssClass = "cdk-text-field-autofilled";
    const listener = (event) => {
      if (event.animationName === "cdk-text-field-autofill-start" && !element.classList.contains(cssClass)) {
        element.classList.add(cssClass);
        this._ngZone.run(() => result.next({
          target: event.target,
          isAutofilled: true
        }));
      } else if (event.animationName === "cdk-text-field-autofill-end" && element.classList.contains(cssClass)) {
        element.classList.remove(cssClass);
        this._ngZone.run(() => result.next({
          target: event.target,
          isAutofilled: false
        }));
      }
    };
    this._ngZone.runOutsideAngular(() => {
      element.addEventListener("animationstart", listener, listenerOptions);
      element.classList.add("cdk-text-field-autofill-monitored");
    });
    this._monitoredElements.set(element, {
      subject: result,
      unlisten: () => {
        element.removeEventListener("animationstart", listener, listenerOptions);
      }
    });
    return result;
  }
  stopMonitoring(elementOrRef) {
    const element = coerceElement(elementOrRef);
    const info = this._monitoredElements.get(element);
    if (info) {
      info.unlisten();
      info.subject.complete();
      element.classList.remove("cdk-text-field-autofill-monitored");
      element.classList.remove("cdk-text-field-autofilled");
      this._monitoredElements.delete(element);
    }
  }
  ngOnDestroy() {
    this._monitoredElements.forEach((_info, element) => this.stopMonitoring(element));
  }
};
_AutofillMonitor.ɵfac = function AutofillMonitor_Factory(t) {
  return new (t || _AutofillMonitor)(ɵɵinject(Platform), ɵɵinject(NgZone));
};
_AutofillMonitor.ɵprov = ɵɵdefineInjectable({
  token: _AutofillMonitor,
  factory: _AutofillMonitor.ɵfac,
  providedIn: "root"
});
var AutofillMonitor = _AutofillMonitor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutofillMonitor, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Platform
  }, {
    type: NgZone
  }], null);
})();
var _CdkAutofill = class _CdkAutofill {
  constructor(_elementRef, _autofillMonitor) {
    this._elementRef = _elementRef;
    this._autofillMonitor = _autofillMonitor;
    this.cdkAutofill = new EventEmitter();
  }
  ngOnInit() {
    this._autofillMonitor.monitor(this._elementRef).subscribe((event) => this.cdkAutofill.emit(event));
  }
  ngOnDestroy() {
    this._autofillMonitor.stopMonitoring(this._elementRef);
  }
};
_CdkAutofill.ɵfac = function CdkAutofill_Factory(t) {
  return new (t || _CdkAutofill)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(AutofillMonitor));
};
_CdkAutofill.ɵdir = ɵɵdefineDirective({
  type: _CdkAutofill,
  selectors: [["", "cdkAutofill", ""]],
  outputs: {
    cdkAutofill: "cdkAutofill"
  },
  standalone: true
});
var CdkAutofill = _CdkAutofill;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkAutofill, [{
    type: Directive,
    args: [{
      selector: "[cdkAutofill]",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: AutofillMonitor
  }], {
    cdkAutofill: [{
      type: Output
    }]
  });
})();
var _CdkTextareaAutosize = class _CdkTextareaAutosize {
  /** Minimum amount of rows in the textarea. */
  get minRows() {
    return this._minRows;
  }
  set minRows(value) {
    this._minRows = coerceNumberProperty(value);
    this._setMinHeight();
  }
  /** Maximum amount of rows in the textarea. */
  get maxRows() {
    return this._maxRows;
  }
  set maxRows(value) {
    this._maxRows = coerceNumberProperty(value);
    this._setMaxHeight();
  }
  /** Whether autosizing is enabled or not */
  get enabled() {
    return this._enabled;
  }
  set enabled(value) {
    if (this._enabled !== value) {
      (this._enabled = value) ? this.resizeToFitContent(true) : this.reset();
    }
  }
  get placeholder() {
    return this._textareaElement.placeholder;
  }
  set placeholder(value) {
    this._cachedPlaceholderHeight = void 0;
    if (value) {
      this._textareaElement.setAttribute("placeholder", value);
    } else {
      this._textareaElement.removeAttribute("placeholder");
    }
    this._cacheTextareaPlaceholderHeight();
  }
  constructor(_elementRef, _platform, _ngZone, document2) {
    this._elementRef = _elementRef;
    this._platform = _platform;
    this._ngZone = _ngZone;
    this._destroyed = new Subject();
    this._enabled = true;
    this._previousMinRows = -1;
    this._isViewInited = false;
    this._handleFocusEvent = (event) => {
      this._hasFocus = event.type === "focus";
    };
    this._document = document2;
    this._textareaElement = this._elementRef.nativeElement;
  }
  /** Sets the minimum height of the textarea as determined by minRows. */
  _setMinHeight() {
    const minHeight = this.minRows && this._cachedLineHeight ? `${this.minRows * this._cachedLineHeight}px` : null;
    if (minHeight) {
      this._textareaElement.style.minHeight = minHeight;
    }
  }
  /** Sets the maximum height of the textarea as determined by maxRows. */
  _setMaxHeight() {
    const maxHeight = this.maxRows && this._cachedLineHeight ? `${this.maxRows * this._cachedLineHeight}px` : null;
    if (maxHeight) {
      this._textareaElement.style.maxHeight = maxHeight;
    }
  }
  ngAfterViewInit() {
    if (this._platform.isBrowser) {
      this._initialHeight = this._textareaElement.style.height;
      this.resizeToFitContent();
      this._ngZone.runOutsideAngular(() => {
        const window2 = this._getWindow();
        fromEvent(window2, "resize").pipe(auditTime(16), takeUntil(this._destroyed)).subscribe(() => this.resizeToFitContent(true));
        this._textareaElement.addEventListener("focus", this._handleFocusEvent);
        this._textareaElement.addEventListener("blur", this._handleFocusEvent);
      });
      this._isViewInited = true;
      this.resizeToFitContent(true);
    }
  }
  ngOnDestroy() {
    this._textareaElement.removeEventListener("focus", this._handleFocusEvent);
    this._textareaElement.removeEventListener("blur", this._handleFocusEvent);
    this._destroyed.next();
    this._destroyed.complete();
  }
  /**
   * Cache the height of a single-row textarea if it has not already been cached.
   *
   * We need to know how large a single "row" of a textarea is in order to apply minRows and
   * maxRows. For the initial version, we will assume that the height of a single line in the
   * textarea does not ever change.
   */
  _cacheTextareaLineHeight() {
    if (this._cachedLineHeight) {
      return;
    }
    let textareaClone = this._textareaElement.cloneNode(false);
    textareaClone.rows = 1;
    textareaClone.style.position = "absolute";
    textareaClone.style.visibility = "hidden";
    textareaClone.style.border = "none";
    textareaClone.style.padding = "0";
    textareaClone.style.height = "";
    textareaClone.style.minHeight = "";
    textareaClone.style.maxHeight = "";
    textareaClone.style.overflow = "hidden";
    this._textareaElement.parentNode.appendChild(textareaClone);
    this._cachedLineHeight = textareaClone.clientHeight;
    textareaClone.remove();
    this._setMinHeight();
    this._setMaxHeight();
  }
  _measureScrollHeight() {
    const element = this._textareaElement;
    const previousMargin = element.style.marginBottom || "";
    const isFirefox = this._platform.FIREFOX;
    const needsMarginFiller = isFirefox && this._hasFocus;
    const measuringClass = isFirefox ? "cdk-textarea-autosize-measuring-firefox" : "cdk-textarea-autosize-measuring";
    if (needsMarginFiller) {
      element.style.marginBottom = `${element.clientHeight}px`;
    }
    element.classList.add(measuringClass);
    const scrollHeight = element.scrollHeight - 4;
    element.classList.remove(measuringClass);
    if (needsMarginFiller) {
      element.style.marginBottom = previousMargin;
    }
    return scrollHeight;
  }
  _cacheTextareaPlaceholderHeight() {
    if (!this._isViewInited || this._cachedPlaceholderHeight != void 0) {
      return;
    }
    if (!this.placeholder) {
      this._cachedPlaceholderHeight = 0;
      return;
    }
    const value = this._textareaElement.value;
    this._textareaElement.value = this._textareaElement.placeholder;
    this._cachedPlaceholderHeight = this._measureScrollHeight();
    this._textareaElement.value = value;
  }
  ngDoCheck() {
    if (this._platform.isBrowser) {
      this.resizeToFitContent();
    }
  }
  /**
   * Resize the textarea to fit its content.
   * @param force Whether to force a height recalculation. By default the height will be
   *    recalculated only if the value changed since the last call.
   */
  resizeToFitContent(force = false) {
    if (!this._enabled) {
      return;
    }
    this._cacheTextareaLineHeight();
    this._cacheTextareaPlaceholderHeight();
    if (!this._cachedLineHeight) {
      return;
    }
    const textarea = this._elementRef.nativeElement;
    const value = textarea.value;
    if (!force && this._minRows === this._previousMinRows && value === this._previousValue) {
      return;
    }
    const scrollHeight = this._measureScrollHeight();
    const height = Math.max(scrollHeight, this._cachedPlaceholderHeight || 0);
    textarea.style.height = `${height}px`;
    this._ngZone.runOutsideAngular(() => {
      if (typeof requestAnimationFrame !== "undefined") {
        requestAnimationFrame(() => this._scrollToCaretPosition(textarea));
      } else {
        setTimeout(() => this._scrollToCaretPosition(textarea));
      }
    });
    this._previousValue = value;
    this._previousMinRows = this._minRows;
  }
  /**
   * Resets the textarea to its original size
   */
  reset() {
    if (this._initialHeight !== void 0) {
      this._textareaElement.style.height = this._initialHeight;
    }
  }
  _noopInputHandler() {
  }
  /** Access injected document if available or fallback to global document reference */
  _getDocument() {
    return this._document || document;
  }
  /** Use defaultView of injected document if available or fallback to global window reference */
  _getWindow() {
    const doc = this._getDocument();
    return doc.defaultView || window;
  }
  /**
   * Scrolls a textarea to the caret position. On Firefox resizing the textarea will
   * prevent it from scrolling to the caret position. We need to re-set the selection
   * in order for it to scroll to the proper position.
   */
  _scrollToCaretPosition(textarea) {
    const {
      selectionStart,
      selectionEnd
    } = textarea;
    if (!this._destroyed.isStopped && this._hasFocus) {
      textarea.setSelectionRange(selectionStart, selectionEnd);
    }
  }
};
_CdkTextareaAutosize.ɵfac = function CdkTextareaAutosize_Factory(t) {
  return new (t || _CdkTextareaAutosize)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(DOCUMENT, 8));
};
_CdkTextareaAutosize.ɵdir = ɵɵdefineDirective({
  type: _CdkTextareaAutosize,
  selectors: [["textarea", "cdkTextareaAutosize", ""]],
  hostAttrs: ["rows", "1", 1, "cdk-textarea-autosize"],
  hostBindings: function CdkTextareaAutosize_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("input", function CdkTextareaAutosize_input_HostBindingHandler() {
        return ctx._noopInputHandler();
      });
    }
  },
  inputs: {
    minRows: [InputFlags.None, "cdkAutosizeMinRows", "minRows"],
    maxRows: [InputFlags.None, "cdkAutosizeMaxRows", "maxRows"],
    enabled: [InputFlags.HasDecoratorInputTransform, "cdkTextareaAutosize", "enabled", booleanAttribute],
    placeholder: "placeholder"
  },
  exportAs: ["cdkTextareaAutosize"],
  standalone: true,
  features: [ɵɵInputTransformsFeature]
});
var CdkTextareaAutosize = _CdkTextareaAutosize;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTextareaAutosize, [{
    type: Directive,
    args: [{
      selector: "textarea[cdkTextareaAutosize]",
      exportAs: "cdkTextareaAutosize",
      host: {
        "class": "cdk-textarea-autosize",
        // Textarea elements that have the directive applied should have a single row by default.
        // Browsers normally show two rows by default and therefore this limits the minRows binding.
        "rows": "1",
        "(input)": "_noopInputHandler()"
      },
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Platform
  }, {
    type: NgZone
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [DOCUMENT]
    }]
  }], {
    minRows: [{
      type: Input,
      args: ["cdkAutosizeMinRows"]
    }],
    maxRows: [{
      type: Input,
      args: ["cdkAutosizeMaxRows"]
    }],
    enabled: [{
      type: Input,
      args: [{
        alias: "cdkTextareaAutosize",
        transform: booleanAttribute
      }]
    }],
    placeholder: [{
      type: Input
    }]
  });
})();
var _TextFieldModule = class _TextFieldModule {
};
_TextFieldModule.ɵfac = function TextFieldModule_Factory(t) {
  return new (t || _TextFieldModule)();
};
_TextFieldModule.ɵmod = ɵɵdefineNgModule({
  type: _TextFieldModule,
  imports: [CdkAutofill, CdkTextareaAutosize],
  exports: [CdkAutofill, CdkTextareaAutosize]
});
_TextFieldModule.ɵinj = ɵɵdefineInjector({});
var TextFieldModule = _TextFieldModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextFieldModule, [{
    type: NgModule,
    args: [{
      imports: [CdkAutofill, CdkTextareaAutosize],
      exports: [CdkAutofill, CdkTextareaAutosize]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/input.mjs
function getMatInputUnsupportedTypeError(type) {
  return Error(`Input type "${type}" isn't supported by matInput.`);
}
var MAT_INPUT_VALUE_ACCESSOR = new InjectionToken("MAT_INPUT_VALUE_ACCESSOR");
var MAT_INPUT_INVALID_TYPES = ["button", "checkbox", "file", "hidden", "image", "radio", "range", "reset", "submit"];
var nextUniqueId = 0;
var _MatInput = class _MatInput {
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = coerceBooleanProperty(value);
    if (this.focused) {
      this.focused = false;
      this.stateChanges.next();
    }
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  get id() {
    return this._id;
  }
  set id(value) {
    this._id = value || this._uid;
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  get required() {
    return this._required ?? this.ngControl?.control?.hasValidator(Validators.required) ?? false;
  }
  set required(value) {
    this._required = coerceBooleanProperty(value);
  }
  /** Input type of the element. */
  get type() {
    return this._type;
  }
  set type(value) {
    this._type = value || "text";
    this._validateType();
    if (!this._isTextarea && getSupportedInputTypes().has(this._type)) {
      this._elementRef.nativeElement.type = this._type;
    }
  }
  /** An object used to control when error messages are shown. */
  get errorStateMatcher() {
    return this._errorStateTracker.matcher;
  }
  set errorStateMatcher(value) {
    this._errorStateTracker.matcher = value;
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  get value() {
    return this._inputValueAccessor.value;
  }
  set value(value) {
    if (value !== this.value) {
      this._inputValueAccessor.value = value;
      this.stateChanges.next();
    }
  }
  /** Whether the element is readonly. */
  get readonly() {
    return this._readonly;
  }
  set readonly(value) {
    this._readonly = coerceBooleanProperty(value);
  }
  /** Whether the input is in an error state. */
  get errorState() {
    return this._errorStateTracker.errorState;
  }
  set errorState(value) {
    this._errorStateTracker.errorState = value;
  }
  constructor(_elementRef, _platform, ngControl, parentForm, parentFormGroup, defaultErrorStateMatcher, inputValueAccessor, _autofillMonitor, ngZone, _formField) {
    this._elementRef = _elementRef;
    this._platform = _platform;
    this.ngControl = ngControl;
    this._autofillMonitor = _autofillMonitor;
    this._formField = _formField;
    this._uid = `mat-input-${nextUniqueId++}`;
    this.focused = false;
    this.stateChanges = new Subject();
    this.controlType = "mat-input";
    this.autofilled = false;
    this._disabled = false;
    this._type = "text";
    this._readonly = false;
    this._neverEmptyInputTypes = ["date", "datetime", "datetime-local", "month", "time", "week"].filter((t) => getSupportedInputTypes().has(t));
    this._iOSKeyupListener = (event) => {
      const el = event.target;
      if (!el.value && el.selectionStart === 0 && el.selectionEnd === 0) {
        el.setSelectionRange(1, 1);
        el.setSelectionRange(0, 0);
      }
    };
    const element = this._elementRef.nativeElement;
    const nodeName = element.nodeName.toLowerCase();
    this._inputValueAccessor = inputValueAccessor || element;
    this._previousNativeValue = this.value;
    this.id = this.id;
    if (_platform.IOS) {
      ngZone.runOutsideAngular(() => {
        _elementRef.nativeElement.addEventListener("keyup", this._iOSKeyupListener);
      });
    }
    this._errorStateTracker = new _ErrorStateTracker(defaultErrorStateMatcher, ngControl, parentFormGroup, parentForm, this.stateChanges);
    this._isServer = !this._platform.isBrowser;
    this._isNativeSelect = nodeName === "select";
    this._isTextarea = nodeName === "textarea";
    this._isInFormField = !!_formField;
    if (this._isNativeSelect) {
      this.controlType = element.multiple ? "mat-native-select-multiple" : "mat-native-select";
    }
  }
  ngAfterViewInit() {
    if (this._platform.isBrowser) {
      this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe((event) => {
        this.autofilled = event.isAutofilled;
        this.stateChanges.next();
      });
    }
  }
  ngOnChanges() {
    this.stateChanges.next();
  }
  ngOnDestroy() {
    this.stateChanges.complete();
    if (this._platform.isBrowser) {
      this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement);
    }
    if (this._platform.IOS) {
      this._elementRef.nativeElement.removeEventListener("keyup", this._iOSKeyupListener);
    }
  }
  ngDoCheck() {
    if (this.ngControl) {
      this.updateErrorState();
      if (this.ngControl.disabled !== null && this.ngControl.disabled !== this.disabled) {
        this.disabled = this.ngControl.disabled;
        this.stateChanges.next();
      }
    }
    this._dirtyCheckNativeValue();
    this._dirtyCheckPlaceholder();
  }
  /** Focuses the input. */
  focus(options) {
    this._elementRef.nativeElement.focus(options);
  }
  /** Refreshes the error state of the input. */
  updateErrorState() {
    this._errorStateTracker.updateErrorState();
  }
  /** Callback for the cases where the focused state of the input changes. */
  _focusChanged(isFocused) {
    if (isFocused !== this.focused) {
      this.focused = isFocused;
      this.stateChanges.next();
    }
  }
  _onInput() {
  }
  /** Does some manual dirty checking on the native input `value` property. */
  _dirtyCheckNativeValue() {
    const newValue = this._elementRef.nativeElement.value;
    if (this._previousNativeValue !== newValue) {
      this._previousNativeValue = newValue;
      this.stateChanges.next();
    }
  }
  /** Does some manual dirty checking on the native input `placeholder` attribute. */
  _dirtyCheckPlaceholder() {
    const placeholder = this._getPlaceholder();
    if (placeholder !== this._previousPlaceholder) {
      const element = this._elementRef.nativeElement;
      this._previousPlaceholder = placeholder;
      placeholder ? element.setAttribute("placeholder", placeholder) : element.removeAttribute("placeholder");
    }
  }
  /** Gets the current placeholder of the form field. */
  _getPlaceholder() {
    return this.placeholder || null;
  }
  /** Make sure the input is a supported type. */
  _validateType() {
    if (MAT_INPUT_INVALID_TYPES.indexOf(this._type) > -1 && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getMatInputUnsupportedTypeError(this._type);
    }
  }
  /** Checks whether the input type is one of the types that are never empty. */
  _isNeverEmpty() {
    return this._neverEmptyInputTypes.indexOf(this._type) > -1;
  }
  /** Checks whether the input is invalid based on the native validation. */
  _isBadInput() {
    let validity = this._elementRef.nativeElement.validity;
    return validity && validity.badInput;
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  get empty() {
    return !this._isNeverEmpty() && !this._elementRef.nativeElement.value && !this._isBadInput() && !this.autofilled;
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  get shouldLabelFloat() {
    if (this._isNativeSelect) {
      const selectElement = this._elementRef.nativeElement;
      const firstOption = selectElement.options[0];
      return this.focused || selectElement.multiple || !this.empty || !!(selectElement.selectedIndex > -1 && firstOption && firstOption.label);
    } else {
      return this.focused || !this.empty;
    }
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  setDescribedByIds(ids) {
    if (ids.length) {
      this._elementRef.nativeElement.setAttribute("aria-describedby", ids.join(" "));
    } else {
      this._elementRef.nativeElement.removeAttribute("aria-describedby");
    }
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  onContainerClick() {
    if (!this.focused) {
      this.focus();
    }
  }
  /** Whether the form control is a native select that is displayed inline. */
  _isInlineSelect() {
    const element = this._elementRef.nativeElement;
    return this._isNativeSelect && (element.multiple || element.size > 1);
  }
};
_MatInput.ɵfac = function MatInput_Factory(t) {
  return new (t || _MatInput)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(NgControl, 10), ɵɵdirectiveInject(NgForm, 8), ɵɵdirectiveInject(FormGroupDirective, 8), ɵɵdirectiveInject(ErrorStateMatcher), ɵɵdirectiveInject(MAT_INPUT_VALUE_ACCESSOR, 10), ɵɵdirectiveInject(AutofillMonitor), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(MAT_FORM_FIELD, 8));
};
_MatInput.ɵdir = ɵɵdefineDirective({
  type: _MatInput,
  selectors: [["input", "matInput", ""], ["textarea", "matInput", ""], ["select", "matNativeControl", ""], ["input", "matNativeControl", ""], ["textarea", "matNativeControl", ""]],
  hostAttrs: [1, "mat-mdc-input-element"],
  hostVars: 18,
  hostBindings: function MatInput_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("focus", function MatInput_focus_HostBindingHandler() {
        return ctx._focusChanged(true);
      })("blur", function MatInput_blur_HostBindingHandler() {
        return ctx._focusChanged(false);
      })("input", function MatInput_input_HostBindingHandler() {
        return ctx._onInput();
      });
    }
    if (rf & 2) {
      ɵɵhostProperty("id", ctx.id)("disabled", ctx.disabled)("required", ctx.required);
      ɵɵattribute("name", ctx.name || null)("readonly", ctx.readonly && !ctx._isNativeSelect || null)("aria-invalid", ctx.empty && ctx.required ? null : ctx.errorState)("aria-required", ctx.required)("id", ctx.id);
      ɵɵclassProp("mat-input-server", ctx._isServer)("mat-mdc-form-field-textarea-control", ctx._isInFormField && ctx._isTextarea)("mat-mdc-form-field-input-control", ctx._isInFormField)("mdc-text-field__input", ctx._isInFormField)("mat-mdc-native-select-inline", ctx._isInlineSelect());
    }
  },
  inputs: {
    disabled: "disabled",
    id: "id",
    placeholder: "placeholder",
    name: "name",
    required: "required",
    type: "type",
    errorStateMatcher: "errorStateMatcher",
    userAriaDescribedBy: [InputFlags.None, "aria-describedby", "userAriaDescribedBy"],
    value: "value",
    readonly: "readonly"
  },
  exportAs: ["matInput"],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: MatFormFieldControl,
    useExisting: _MatInput
  }]), ɵɵNgOnChangesFeature]
});
var MatInput = _MatInput;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatInput, [{
    type: Directive,
    args: [{
      selector: `input[matInput], textarea[matInput], select[matNativeControl],
      input[matNativeControl], textarea[matNativeControl]`,
      exportAs: "matInput",
      host: {
        "class": "mat-mdc-input-element",
        // The BaseMatInput parent class adds `mat-input-element`, `mat-form-field-control` and
        // `mat-form-field-autofill-control` to the CSS class list, but this should not be added for
        // this MDC equivalent input.
        "[class.mat-input-server]": "_isServer",
        "[class.mat-mdc-form-field-textarea-control]": "_isInFormField && _isTextarea",
        "[class.mat-mdc-form-field-input-control]": "_isInFormField",
        "[class.mdc-text-field__input]": "_isInFormField",
        "[class.mat-mdc-native-select-inline]": "_isInlineSelect()",
        // Native input properties that are overwritten by Angular inputs need to be synced with
        // the native input element. Otherwise property bindings for those don't work.
        "[id]": "id",
        "[disabled]": "disabled",
        "[required]": "required",
        "[attr.name]": "name || null",
        "[attr.readonly]": "readonly && !_isNativeSelect || null",
        // Only mark the input as invalid for assistive technology if it has a value since the
        // state usually overlaps with `aria-required` when the input is empty and can be redundant.
        "[attr.aria-invalid]": "(empty && required) ? null : errorState",
        "[attr.aria-required]": "required",
        // Native input properties that are overwritten by Angular inputs need to be synced with
        // the native input element. Otherwise property bindings for those don't work.
        "[attr.id]": "id",
        "(focus)": "_focusChanged(true)",
        "(blur)": "_focusChanged(false)",
        "(input)": "_onInput()"
      },
      providers: [{
        provide: MatFormFieldControl,
        useExisting: MatInput
      }],
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Platform
  }, {
    type: NgControl,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }]
  }, {
    type: NgForm,
    decorators: [{
      type: Optional
    }]
  }, {
    type: FormGroupDirective,
    decorators: [{
      type: Optional
    }]
  }, {
    type: ErrorStateMatcher
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [MAT_INPUT_VALUE_ACCESSOR]
    }]
  }, {
    type: AutofillMonitor
  }, {
    type: NgZone
  }, {
    type: MatFormField,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_FORM_FIELD]
    }]
  }], {
    disabled: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    required: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    errorStateMatcher: [{
      type: Input
    }],
    userAriaDescribedBy: [{
      type: Input,
      args: ["aria-describedby"]
    }],
    value: [{
      type: Input
    }],
    readonly: [{
      type: Input
    }]
  });
})();
var _MatInputModule = class _MatInputModule {
};
_MatInputModule.ɵfac = function MatInputModule_Factory(t) {
  return new (t || _MatInputModule)();
};
_MatInputModule.ɵmod = ɵɵdefineNgModule({
  type: _MatInputModule,
  imports: [MatCommonModule, MatFormFieldModule, MatInput],
  exports: [MatInput, MatFormFieldModule, TextFieldModule, MatCommonModule]
});
_MatInputModule.ɵinj = ɵɵdefineInjector({
  imports: [MatCommonModule, MatFormFieldModule, MatFormFieldModule, TextFieldModule, MatCommonModule]
});
var MatInputModule = _MatInputModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatInputModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, MatFormFieldModule, MatInput],
      exports: [MatInput, MatFormFieldModule, TextFieldModule, MatCommonModule]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/datepicker.mjs
var _c02 = ["mat-calendar-body", ""];
function MatCalendarBody_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tr", 0)(1, "td", 2);
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵstyleProp("padding-top", ctx_r0._cellPadding)("padding-bottom", ctx_r0._cellPadding);
    ɵɵattribute("colspan", ctx_r0.numCols);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.label, " ");
  }
}
function MatCalendarBody_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td", 2);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(2);
    ɵɵstyleProp("padding-top", ctx_r7._cellPadding)("padding-bottom", ctx_r7._cellPadding);
    ɵɵattribute("colspan", ctx_r7._firstRowOffset);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r7._firstRowOffset >= ctx_r7.labelMinRequiredCells ? ctx_r7.label : "", " ");
  }
}
function MatCalendarBody_For_2_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td", 5)(1, "button", 6);
    ɵɵlistener("click", function MatCalendarBody_For_2_For_3_Template_button_click_1_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r15);
      const item_r9 = restoredCtx.$implicit;
      const ctx_r14 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r14._cellClicked(item_r9, $event));
    })("focus", function MatCalendarBody_For_2_For_3_Template_button_focus_1_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r15);
      const item_r9 = restoredCtx.$implicit;
      const ctx_r16 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r16._emitActiveDateChange(item_r9, $event));
    });
    ɵɵelementStart(2, "span", 7);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelement(4, "span", 8);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const colIndex_r10 = ctx.$index;
    const rowIndex_r3 = ɵɵnextContext().$index;
    const ctx_r8 = ɵɵnextContext();
    ɵɵstyleProp("width", ctx_r8._cellWidth)("padding-top", ctx_r8._cellPadding)("padding-bottom", ctx_r8._cellPadding);
    ɵɵattribute("data-mat-row", rowIndex_r3)("data-mat-col", colIndex_r10);
    ɵɵadvance();
    ɵɵclassProp("mat-calendar-body-disabled", !item_r9.enabled)("mat-calendar-body-active", ctx_r8._isActiveCell(rowIndex_r3, colIndex_r10))("mat-calendar-body-range-start", ctx_r8._isRangeStart(item_r9.compareValue))("mat-calendar-body-range-end", ctx_r8._isRangeEnd(item_r9.compareValue))("mat-calendar-body-in-range", ctx_r8._isInRange(item_r9.compareValue))("mat-calendar-body-comparison-bridge-start", ctx_r8._isComparisonBridgeStart(item_r9.compareValue, rowIndex_r3, colIndex_r10))("mat-calendar-body-comparison-bridge-end", ctx_r8._isComparisonBridgeEnd(item_r9.compareValue, rowIndex_r3, colIndex_r10))("mat-calendar-body-comparison-start", ctx_r8._isComparisonStart(item_r9.compareValue))("mat-calendar-body-comparison-end", ctx_r8._isComparisonEnd(item_r9.compareValue))("mat-calendar-body-in-comparison-range", ctx_r8._isInComparisonRange(item_r9.compareValue))("mat-calendar-body-preview-start", ctx_r8._isPreviewStart(item_r9.compareValue))("mat-calendar-body-preview-end", ctx_r8._isPreviewEnd(item_r9.compareValue))("mat-calendar-body-in-preview", ctx_r8._isInPreview(item_r9.compareValue));
    ɵɵproperty("ngClass", item_r9.cssClasses)("tabindex", ctx_r8._isActiveCell(rowIndex_r3, colIndex_r10) ? 0 : -1);
    ɵɵattribute("aria-label", item_r9.ariaLabel)("aria-disabled", !item_r9.enabled || null)("aria-pressed", ctx_r8._isSelected(item_r9.compareValue))("aria-current", ctx_r8.todayValue === item_r9.compareValue ? "date" : null)("aria-describedby", ctx_r8._getDescribedby(item_r9.compareValue));
    ɵɵadvance();
    ɵɵclassProp("mat-calendar-body-selected", ctx_r8._isSelected(item_r9.compareValue))("mat-calendar-body-comparison-identical", ctx_r8._isComparisonIdentical(item_r9.compareValue))("mat-calendar-body-today", ctx_r8.todayValue === item_r9.compareValue);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", item_r9.displayValue, " ");
  }
}
function MatCalendarBody_For_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tr", 3);
    ɵɵtemplate(1, MatCalendarBody_For_2_Conditional_1_Template, 2, 6, "td", 4);
    ɵɵrepeaterCreate(2, MatCalendarBody_For_2_For_3_Template, 5, 48, "td", 9, ɵɵrepeaterTrackByIdentity);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const row_r2 = ctx.$implicit;
    const rowIndex_r3 = ctx.$index;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵconditional(1, rowIndex_r3 === 0 && ctx_r1._firstRowOffset ? 1 : -1);
    ɵɵadvance();
    ɵɵrepeater(row_r2);
  }
}
function MatMonthView_For_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "th", 4)(1, "span", 5);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "span", 6);
    ɵɵtext(4);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const day_r1 = ctx.$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate(day_r1.long);
    ɵɵadvance(2);
    ɵɵtextInterpolate(day_r1.narrow);
  }
}
var _c12 = ["*"];
function MatCalendar_ng_template_0_Template(rf, ctx) {
}
function MatCalendar_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-month-view", 2);
    ɵɵlistener("activeDateChange", function MatCalendar_Case_2_Template_mat_month_view_activeDateChange_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r4 = ɵɵnextContext();
      return ɵɵresetView(ctx_r4.activeDate = $event);
    })("_userSelection", function MatCalendar_Case_2_Template_mat_month_view__userSelection_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r6 = ɵɵnextContext();
      return ɵɵresetView(ctx_r6._dateSelected($event));
    })("dragStarted", function MatCalendar_Case_2_Template_mat_month_view_dragStarted_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r7 = ɵɵnextContext();
      return ɵɵresetView(ctx_r7._dragStarted($event));
    })("dragEnded", function MatCalendar_Case_2_Template_mat_month_view_dragEnded_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r8 = ɵɵnextContext();
      return ɵɵresetView(ctx_r8._dragEnded($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("activeDate", ctx_r1.activeDate)("selected", ctx_r1.selected)("dateFilter", ctx_r1.dateFilter)("maxDate", ctx_r1.maxDate)("minDate", ctx_r1.minDate)("dateClass", ctx_r1.dateClass)("comparisonStart", ctx_r1.comparisonStart)("comparisonEnd", ctx_r1.comparisonEnd)("startDateAccessibleName", ctx_r1.startDateAccessibleName)("endDateAccessibleName", ctx_r1.endDateAccessibleName)("activeDrag", ctx_r1._activeDrag);
  }
}
function MatCalendar_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-year-view", 3);
    ɵɵlistener("activeDateChange", function MatCalendar_Case_3_Template_mat_year_view_activeDateChange_0_listener($event) {
      ɵɵrestoreView(_r10);
      const ctx_r9 = ɵɵnextContext();
      return ɵɵresetView(ctx_r9.activeDate = $event);
    })("monthSelected", function MatCalendar_Case_3_Template_mat_year_view_monthSelected_0_listener($event) {
      ɵɵrestoreView(_r10);
      const ctx_r11 = ɵɵnextContext();
      return ɵɵresetView(ctx_r11._monthSelectedInYearView($event));
    })("selectedChange", function MatCalendar_Case_3_Template_mat_year_view_selectedChange_0_listener($event) {
      ɵɵrestoreView(_r10);
      const ctx_r12 = ɵɵnextContext();
      return ɵɵresetView(ctx_r12._goToDateInView($event, "month"));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("activeDate", ctx_r2.activeDate)("selected", ctx_r2.selected)("dateFilter", ctx_r2.dateFilter)("maxDate", ctx_r2.maxDate)("minDate", ctx_r2.minDate)("dateClass", ctx_r2.dateClass);
  }
}
function MatCalendar_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-multi-year-view", 4);
    ɵɵlistener("activeDateChange", function MatCalendar_Case_4_Template_mat_multi_year_view_activeDateChange_0_listener($event) {
      ɵɵrestoreView(_r14);
      const ctx_r13 = ɵɵnextContext();
      return ɵɵresetView(ctx_r13.activeDate = $event);
    })("yearSelected", function MatCalendar_Case_4_Template_mat_multi_year_view_yearSelected_0_listener($event) {
      ɵɵrestoreView(_r14);
      const ctx_r15 = ɵɵnextContext();
      return ɵɵresetView(ctx_r15._yearSelectedInMultiYearView($event));
    })("selectedChange", function MatCalendar_Case_4_Template_mat_multi_year_view_selectedChange_0_listener($event) {
      ɵɵrestoreView(_r14);
      const ctx_r16 = ɵɵnextContext();
      return ɵɵresetView(ctx_r16._goToDateInView($event, "year"));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("activeDate", ctx_r3.activeDate)("selected", ctx_r3.selected)("dateFilter", ctx_r3.dateFilter)("maxDate", ctx_r3.maxDate)("minDate", ctx_r3.minDate)("dateClass", ctx_r3.dateClass);
  }
}
function MatDatepickerContent_ng_template_2_Template(rf, ctx) {
}
var _c22 = ["button"];
function MatDatepickerToggle_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "svg", 3);
    ɵɵelement(1, "path", 4);
    ɵɵelementEnd();
  }
}
var _c32 = [[["", "matDatepickerToggleIcon", ""]]];
var _c42 = ["[matDatepickerToggleIcon]"];
var _c52 = [[["input", "matStartDate", ""]], [["input", "matEndDate", ""]]];
var _c62 = ["input[matStartDate]", "input[matEndDate]"];
function MatDatepickerActions_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 0);
    ɵɵprojection(1);
    ɵɵelementEnd();
  }
}
function createMissingDateImplError(provider) {
  return Error(`MatDatepicker: No provider found for ${provider}. You must add one of the following to your app config: provideNativeDateAdapter, provideDateFnsAdapter, provideLuxonDateAdapter, provideMomentDateAdapter, or provide a custom implementation.`);
}
var _MatDatepickerIntl = class _MatDatepickerIntl {
  constructor() {
    this.changes = new Subject();
    this.calendarLabel = "Calendar";
    this.openCalendarLabel = "Open calendar";
    this.closeCalendarLabel = "Close calendar";
    this.prevMonthLabel = "Previous month";
    this.nextMonthLabel = "Next month";
    this.prevYearLabel = "Previous year";
    this.nextYearLabel = "Next year";
    this.prevMultiYearLabel = "Previous 24 years";
    this.nextMultiYearLabel = "Next 24 years";
    this.switchToMonthViewLabel = "Choose date";
    this.switchToMultiYearViewLabel = "Choose month and year";
    this.startDateLabel = "Start date";
    this.endDateLabel = "End date";
  }
  /** Formats a range of years (used for visuals). */
  formatYearRange(start, end) {
    return `${start} – ${end}`;
  }
  /** Formats a label for a range of years (used by screen readers). */
  formatYearRangeLabel(start, end) {
    return `${start} to ${end}`;
  }
};
_MatDatepickerIntl.ɵfac = function MatDatepickerIntl_Factory(t) {
  return new (t || _MatDatepickerIntl)();
};
_MatDatepickerIntl.ɵprov = ɵɵdefineInjectable({
  token: _MatDatepickerIntl,
  factory: _MatDatepickerIntl.ɵfac,
  providedIn: "root"
});
var MatDatepickerIntl = _MatDatepickerIntl;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDatepickerIntl, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var MatCalendarCell = class {
  constructor(value, displayValue, ariaLabel, enabled, cssClasses = {}, compareValue = value, rawValue) {
    this.value = value;
    this.displayValue = displayValue;
    this.ariaLabel = ariaLabel;
    this.enabled = enabled;
    this.cssClasses = cssClasses;
    this.compareValue = compareValue;
    this.rawValue = rawValue;
  }
};
var calendarBodyId = 1;
var activeCapturingEventOptions = normalizePassiveListenerOptions({
  passive: false,
  capture: true
});
var passiveCapturingEventOptions = normalizePassiveListenerOptions({
  passive: true,
  capture: true
});
var passiveEventOptions = normalizePassiveListenerOptions({
  passive: true
});
var _MatCalendarBody = class _MatCalendarBody {
  ngAfterViewChecked() {
    if (this._focusActiveCellAfterViewChecked) {
      this._focusActiveCell();
      this._focusActiveCellAfterViewChecked = false;
    }
  }
  constructor(_elementRef, _ngZone) {
    this._elementRef = _elementRef;
    this._ngZone = _ngZone;
    this._platform = inject(Platform);
    this._focusActiveCellAfterViewChecked = false;
    this.numCols = 7;
    this.activeCell = 0;
    this.isRange = false;
    this.cellAspectRatio = 1;
    this.previewStart = null;
    this.previewEnd = null;
    this.selectedValueChange = new EventEmitter();
    this.previewChange = new EventEmitter();
    this.activeDateChange = new EventEmitter();
    this.dragStarted = new EventEmitter();
    this.dragEnded = new EventEmitter();
    this._didDragSinceMouseDown = false;
    this._enterHandler = (event) => {
      if (this._skipNextFocus && event.type === "focus") {
        this._skipNextFocus = false;
        return;
      }
      if (event.target && this.isRange) {
        const cell = this._getCellFromElement(event.target);
        if (cell) {
          this._ngZone.run(() => this.previewChange.emit({
            value: cell.enabled ? cell : null,
            event
          }));
        }
      }
    };
    this._touchmoveHandler = (event) => {
      if (!this.isRange)
        return;
      const target = getActualTouchTarget(event);
      const cell = target ? this._getCellFromElement(target) : null;
      if (target !== event.target) {
        this._didDragSinceMouseDown = true;
      }
      if (getCellElement(event.target)) {
        event.preventDefault();
      }
      this._ngZone.run(() => this.previewChange.emit({
        value: cell?.enabled ? cell : null,
        event
      }));
    };
    this._leaveHandler = (event) => {
      if (this.previewEnd !== null && this.isRange) {
        if (event.type !== "blur") {
          this._didDragSinceMouseDown = true;
        }
        if (event.target && this._getCellFromElement(event.target) && !(event.relatedTarget && this._getCellFromElement(event.relatedTarget))) {
          this._ngZone.run(() => this.previewChange.emit({
            value: null,
            event
          }));
        }
      }
    };
    this._mousedownHandler = (event) => {
      if (!this.isRange)
        return;
      this._didDragSinceMouseDown = false;
      const cell = event.target && this._getCellFromElement(event.target);
      if (!cell || !this._isInRange(cell.compareValue)) {
        return;
      }
      this._ngZone.run(() => {
        this.dragStarted.emit({
          value: cell.rawValue,
          event
        });
      });
    };
    this._mouseupHandler = (event) => {
      if (!this.isRange)
        return;
      const cellElement = getCellElement(event.target);
      if (!cellElement) {
        this._ngZone.run(() => {
          this.dragEnded.emit({
            value: null,
            event
          });
        });
        return;
      }
      if (cellElement.closest(".mat-calendar-body") !== this._elementRef.nativeElement) {
        return;
      }
      this._ngZone.run(() => {
        const cell = this._getCellFromElement(cellElement);
        this.dragEnded.emit({
          value: cell?.rawValue ?? null,
          event
        });
      });
    };
    this._touchendHandler = (event) => {
      const target = getActualTouchTarget(event);
      if (target) {
        this._mouseupHandler({
          target
        });
      }
    };
    this._id = `mat-calendar-body-${calendarBodyId++}`;
    this._startDateLabelId = `${this._id}-start-date`;
    this._endDateLabelId = `${this._id}-end-date`;
    _ngZone.runOutsideAngular(() => {
      const element = _elementRef.nativeElement;
      element.addEventListener("touchmove", this._touchmoveHandler, activeCapturingEventOptions);
      element.addEventListener("mouseenter", this._enterHandler, passiveCapturingEventOptions);
      element.addEventListener("focus", this._enterHandler, passiveCapturingEventOptions);
      element.addEventListener("mouseleave", this._leaveHandler, passiveCapturingEventOptions);
      element.addEventListener("blur", this._leaveHandler, passiveCapturingEventOptions);
      element.addEventListener("mousedown", this._mousedownHandler, passiveEventOptions);
      element.addEventListener("touchstart", this._mousedownHandler, passiveEventOptions);
      if (this._platform.isBrowser) {
        window.addEventListener("mouseup", this._mouseupHandler);
        window.addEventListener("touchend", this._touchendHandler);
      }
    });
  }
  /** Called when a cell is clicked. */
  _cellClicked(cell, event) {
    if (this._didDragSinceMouseDown) {
      return;
    }
    if (cell.enabled) {
      this.selectedValueChange.emit({
        value: cell.value,
        event
      });
    }
  }
  _emitActiveDateChange(cell, event) {
    if (cell.enabled) {
      this.activeDateChange.emit({
        value: cell.value,
        event
      });
    }
  }
  /** Returns whether a cell should be marked as selected. */
  _isSelected(value) {
    return this.startValue === value || this.endValue === value;
  }
  ngOnChanges(changes) {
    const columnChanges = changes["numCols"];
    const {
      rows,
      numCols
    } = this;
    if (changes["rows"] || columnChanges) {
      this._firstRowOffset = rows && rows.length && rows[0].length ? numCols - rows[0].length : 0;
    }
    if (changes["cellAspectRatio"] || columnChanges || !this._cellPadding) {
      this._cellPadding = `${50 * this.cellAspectRatio / numCols}%`;
    }
    if (columnChanges || !this._cellWidth) {
      this._cellWidth = `${100 / numCols}%`;
    }
  }
  ngOnDestroy() {
    const element = this._elementRef.nativeElement;
    element.removeEventListener("touchmove", this._touchmoveHandler, activeCapturingEventOptions);
    element.removeEventListener("mouseenter", this._enterHandler, passiveCapturingEventOptions);
    element.removeEventListener("focus", this._enterHandler, passiveCapturingEventOptions);
    element.removeEventListener("mouseleave", this._leaveHandler, passiveCapturingEventOptions);
    element.removeEventListener("blur", this._leaveHandler, passiveCapturingEventOptions);
    element.removeEventListener("mousedown", this._mousedownHandler, passiveEventOptions);
    element.removeEventListener("touchstart", this._mousedownHandler, passiveEventOptions);
    if (this._platform.isBrowser) {
      window.removeEventListener("mouseup", this._mouseupHandler);
      window.removeEventListener("touchend", this._touchendHandler);
    }
  }
  /** Returns whether a cell is active. */
  _isActiveCell(rowIndex, colIndex) {
    let cellNumber = rowIndex * this.numCols + colIndex;
    if (rowIndex) {
      cellNumber -= this._firstRowOffset;
    }
    return cellNumber == this.activeCell;
  }
  /**
   * Focuses the active cell after the microtask queue is empty.
   *
   * Adding a 0ms setTimeout seems to fix Voiceover losing focus when pressing PageUp/PageDown
   * (issue #24330).
   *
   * Determined a 0ms by gradually increasing duration from 0 and testing two use cases with screen
   * reader enabled:
   *
   * 1. Pressing PageUp/PageDown repeatedly with pausing between each key press.
   * 2. Pressing and holding the PageDown key with repeated keys enabled.
   *
   * Test 1 worked roughly 95-99% of the time with 0ms and got a little bit better as the duration
   * increased. Test 2 got slightly better until the duration was long enough to interfere with
   * repeated keys. If the repeated key speed was faster than the timeout duration, then pressing
   * and holding pagedown caused the entire page to scroll.
   *
   * Since repeated key speed can verify across machines, determined that any duration could
   * potentially interfere with repeated keys. 0ms would be best because it almost entirely
   * eliminates the focus being lost in Voiceover (#24330) without causing unintended side effects.
   * Adding delay also complicates writing tests.
   */
  _focusActiveCell(movePreview = true) {
    this._ngZone.runOutsideAngular(() => {
      this._ngZone.onStable.pipe(take(1)).subscribe(() => {
        setTimeout(() => {
          const activeCell = this._elementRef.nativeElement.querySelector(".mat-calendar-body-active");
          if (activeCell) {
            if (!movePreview) {
              this._skipNextFocus = true;
            }
            activeCell.focus();
          }
        });
      });
    });
  }
  /** Focuses the active cell after change detection has run and the microtask queue is empty. */
  _scheduleFocusActiveCellAfterViewChecked() {
    this._focusActiveCellAfterViewChecked = true;
  }
  /** Gets whether a value is the start of the main range. */
  _isRangeStart(value) {
    return isStart(value, this.startValue, this.endValue);
  }
  /** Gets whether a value is the end of the main range. */
  _isRangeEnd(value) {
    return isEnd(value, this.startValue, this.endValue);
  }
  /** Gets whether a value is within the currently-selected range. */
  _isInRange(value) {
    return isInRange(value, this.startValue, this.endValue, this.isRange);
  }
  /** Gets whether a value is the start of the comparison range. */
  _isComparisonStart(value) {
    return isStart(value, this.comparisonStart, this.comparisonEnd);
  }
  /** Whether the cell is a start bridge cell between the main and comparison ranges. */
  _isComparisonBridgeStart(value, rowIndex, colIndex) {
    if (!this._isComparisonStart(value) || this._isRangeStart(value) || !this._isInRange(value)) {
      return false;
    }
    let previousCell = this.rows[rowIndex][colIndex - 1];
    if (!previousCell) {
      const previousRow = this.rows[rowIndex - 1];
      previousCell = previousRow && previousRow[previousRow.length - 1];
    }
    return previousCell && !this._isRangeEnd(previousCell.compareValue);
  }
  /** Whether the cell is an end bridge cell between the main and comparison ranges. */
  _isComparisonBridgeEnd(value, rowIndex, colIndex) {
    if (!this._isComparisonEnd(value) || this._isRangeEnd(value) || !this._isInRange(value)) {
      return false;
    }
    let nextCell = this.rows[rowIndex][colIndex + 1];
    if (!nextCell) {
      const nextRow = this.rows[rowIndex + 1];
      nextCell = nextRow && nextRow[0];
    }
    return nextCell && !this._isRangeStart(nextCell.compareValue);
  }
  /** Gets whether a value is the end of the comparison range. */
  _isComparisonEnd(value) {
    return isEnd(value, this.comparisonStart, this.comparisonEnd);
  }
  /** Gets whether a value is within the current comparison range. */
  _isInComparisonRange(value) {
    return isInRange(value, this.comparisonStart, this.comparisonEnd, this.isRange);
  }
  /**
   * Gets whether a value is the same as the start and end of the comparison range.
   * For context, the functions that we use to determine whether something is the start/end of
   * a range don't allow for the start and end to be on the same day, because we'd have to use
   * much more specific CSS selectors to style them correctly in all scenarios. This is fine for
   * the regular range, because when it happens, the selected styles take over and still show where
   * the range would've been, however we don't have these selected styles for a comparison range.
   * This function is used to apply a class that serves the same purpose as the one for selected
   * dates, but it only applies in the context of a comparison range.
   */
  _isComparisonIdentical(value) {
    return this.comparisonStart === this.comparisonEnd && value === this.comparisonStart;
  }
  /** Gets whether a value is the start of the preview range. */
  _isPreviewStart(value) {
    return isStart(value, this.previewStart, this.previewEnd);
  }
  /** Gets whether a value is the end of the preview range. */
  _isPreviewEnd(value) {
    return isEnd(value, this.previewStart, this.previewEnd);
  }
  /** Gets whether a value is inside the preview range. */
  _isInPreview(value) {
    return isInRange(value, this.previewStart, this.previewEnd, this.isRange);
  }
  /** Gets ids of aria descriptions for the start and end of a date range. */
  _getDescribedby(value) {
    if (!this.isRange) {
      return null;
    }
    if (this.startValue === value && this.endValue === value) {
      return `${this._startDateLabelId} ${this._endDateLabelId}`;
    } else if (this.startValue === value) {
      return this._startDateLabelId;
    } else if (this.endValue === value) {
      return this._endDateLabelId;
    }
    return null;
  }
  /** Finds the MatCalendarCell that corresponds to a DOM node. */
  _getCellFromElement(element) {
    const cell = getCellElement(element);
    if (cell) {
      const row = cell.getAttribute("data-mat-row");
      const col = cell.getAttribute("data-mat-col");
      if (row && col) {
        return this.rows[parseInt(row)][parseInt(col)];
      }
    }
    return null;
  }
};
_MatCalendarBody.ɵfac = function MatCalendarBody_Factory(t) {
  return new (t || _MatCalendarBody)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
_MatCalendarBody.ɵcmp = ɵɵdefineComponent({
  type: _MatCalendarBody,
  selectors: [["", "mat-calendar-body", ""]],
  hostAttrs: [1, "mat-calendar-body"],
  inputs: {
    label: "label",
    rows: "rows",
    todayValue: "todayValue",
    startValue: "startValue",
    endValue: "endValue",
    labelMinRequiredCells: "labelMinRequiredCells",
    numCols: "numCols",
    activeCell: "activeCell",
    isRange: "isRange",
    cellAspectRatio: "cellAspectRatio",
    comparisonStart: "comparisonStart",
    comparisonEnd: "comparisonEnd",
    previewStart: "previewStart",
    previewEnd: "previewEnd",
    startDateAccessibleName: "startDateAccessibleName",
    endDateAccessibleName: "endDateAccessibleName"
  },
  outputs: {
    selectedValueChange: "selectedValueChange",
    previewChange: "previewChange",
    activeDateChange: "activeDateChange",
    dragStarted: "dragStarted",
    dragEnded: "dragEnded"
  },
  exportAs: ["matCalendarBody"],
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  attrs: _c02,
  decls: 7,
  vars: 5,
  consts: [["aria-hidden", "true"], [1, "mat-calendar-body-hidden-label", 3, "id"], [1, "mat-calendar-body-label"], ["role", "row"], ["class", "mat-calendar-body-label", 3, "paddingTop", "paddingBottom"], ["role", "gridcell", 1, "mat-calendar-body-cell-container"], ["type", "button", 1, "mat-calendar-body-cell", 3, "ngClass", "tabindex", "click", "focus"], [1, "mat-calendar-body-cell-content", "mat-focus-indicator"], ["aria-hidden", "true", 1, "mat-calendar-body-cell-preview"], ["role", "gridcell", "class", "mat-calendar-body-cell-container", 3, "width", "paddingTop", "paddingBottom"]],
  template: function MatCalendarBody_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, MatCalendarBody_Conditional_0_Template, 3, 6, "tr", 0);
      ɵɵrepeaterCreate(1, MatCalendarBody_For_2_Template, 4, 1, "tr", 3, ɵɵrepeaterTrackByIdentity);
      ɵɵelementStart(3, "label", 1);
      ɵɵtext(4);
      ɵɵelementEnd();
      ɵɵelementStart(5, "label", 1);
      ɵɵtext(6);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵconditional(0, ctx._firstRowOffset < ctx.labelMinRequiredCells ? 0 : -1);
      ɵɵadvance();
      ɵɵrepeater(ctx.rows);
      ɵɵadvance(2);
      ɵɵproperty("id", ctx._startDateLabelId);
      ɵɵadvance();
      ɵɵtextInterpolate1(" ", ctx.startDateAccessibleName, "\n");
      ɵɵadvance();
      ɵɵproperty("id", ctx._endDateLabelId);
      ɵɵadvance();
      ɵɵtextInterpolate1(" ", ctx.endDateAccessibleName, "\n");
    }
  },
  dependencies: [NgClass],
  styles: ['.mat-calendar-body{min-width:224px}.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){border-color:var(--mat-datepicker-calendar-date-today-outline-color)}.mat-calendar-body-label{height:0;line-height:0;text-align:start;padding-left:4.7142857143%;padding-right:4.7142857143%;font-size:var(--mat-datepicker-calendar-body-label-text-size);font-weight:var(--mat-datepicker-calendar-body-label-text-weight);color:var(--mat-datepicker-calendar-body-label-text-color)}.mat-calendar-body-hidden-label{display:none}.mat-calendar-body-cell-container{position:relative;height:0;line-height:0}.mat-calendar-body-cell{-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);position:absolute;top:0;left:0;width:100%;height:100%;background:none;text-align:center;outline:none;font-family:inherit;margin:0}.mat-calendar-body-cell::-moz-focus-inner{border:0}.mat-calendar-body-cell::before,.mat-calendar-body-cell::after,.mat-calendar-body-cell-preview{content:"";position:absolute;top:5%;left:0;z-index:0;box-sizing:border-box;display:block;height:90%;width:100%}.mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,.mat-calendar-body-range-start::after,.mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,.mat-calendar-body-comparison-start::after,.mat-calendar-body-preview-start .mat-calendar-body-cell-preview{left:5%;width:95%;border-top-left-radius:999px;border-bottom-left-radius:999px}[dir=rtl] .mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,[dir=rtl] .mat-calendar-body-range-start::after,[dir=rtl] .mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,[dir=rtl] .mat-calendar-body-comparison-start::after,[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview{left:0;border-radius:0;border-top-right-radius:999px;border-bottom-right-radius:999px}.mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,.mat-calendar-body-range-end::after,.mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,.mat-calendar-body-comparison-end::after,.mat-calendar-body-preview-end .mat-calendar-body-cell-preview{width:95%;border-top-right-radius:999px;border-bottom-right-radius:999px}[dir=rtl] .mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,[dir=rtl] .mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,[dir=rtl] .mat-calendar-body-comparison-end::after,[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview{left:5%;border-radius:0;border-top-left-radius:999px;border-bottom-left-radius:999px}[dir=rtl] .mat-calendar-body-comparison-bridge-start.mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-bridge-end.mat-calendar-body-range-start::after{width:95%;border-top-right-radius:999px;border-bottom-right-radius:999px}.mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,.mat-calendar-body-comparison-end.mat-calendar-body-range-start::after,[dir=rtl] .mat-calendar-body-comparison-end.mat-calendar-body-range-start::after{width:90%}.mat-calendar-body-in-preview{color:var(--mat-datepicker-calendar-date-preview-state-outline-color)}.mat-calendar-body-in-preview .mat-calendar-body-cell-preview{border-top:dashed 1px;border-bottom:dashed 1px}.mat-calendar-body-preview-start .mat-calendar-body-cell-preview{border-left:dashed 1px}[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview{border-left:0;border-right:dashed 1px}.mat-calendar-body-preview-end .mat-calendar-body-cell-preview{border-right:dashed 1px}[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview{border-right:0;border-left:dashed 1px}.mat-calendar-body-disabled{cursor:default}.mat-calendar-body-disabled>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){color:var(--mat-datepicker-calendar-date-disabled-state-text-color)}.mat-calendar-body-disabled>.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){border-color:var(--mat-datepicker-calendar-date-today-disabled-state-outline-color)}.cdk-high-contrast-active .mat-calendar-body-disabled{opacity:.5}.mat-calendar-body-cell-content{top:5%;left:5%;z-index:1;display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:90%;height:90%;line-height:1;border-width:1px;border-style:solid;border-radius:999px;color:var(--mat-datepicker-calendar-date-text-color);border-color:var(--mat-datepicker-calendar-date-outline-color)}.mat-calendar-body-cell-content.mat-focus-indicator{position:absolute}.cdk-high-contrast-active .mat-calendar-body-cell-content{border:none}.cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical),.cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){background-color:var(--mat-datepicker-calendar-date-focus-state-background-color)}@media(hover: hover){.mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){background-color:var(--mat-datepicker-calendar-date-hover-state-background-color)}}.mat-calendar-body-selected{background-color:var(--mat-datepicker-calendar-date-selected-state-background-color);color:var(--mat-datepicker-calendar-date-selected-state-text-color)}.mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:var(--mat-datepicker-calendar-date-selected-disabled-state-background-color)}.mat-calendar-body-selected.mat-calendar-body-today{box-shadow:inset 0 0 0 1px var(--mat-datepicker-calendar-date-today-selected-state-outline-color)}.mat-calendar-body-in-range::before{background:var(--mat-datepicker-calendar-date-in-range-state-background-color)}.mat-calendar-body-comparison-identical,.mat-calendar-body-in-comparison-range::before{background:var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color)}.mat-calendar-body-comparison-identical,.mat-calendar-body-in-comparison-range::before{background:var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color)}.mat-calendar-body-comparison-bridge-start::before,[dir=rtl] .mat-calendar-body-comparison-bridge-end::before{background:linear-gradient(to right, var(--mat-datepicker-calendar-date-in-range-state-background-color) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color) 50%)}.mat-calendar-body-comparison-bridge-end::before,[dir=rtl] .mat-calendar-body-comparison-bridge-start::before{background:linear-gradient(to left, var(--mat-datepicker-calendar-date-in-range-state-background-color) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color) 50%)}.mat-calendar-body-in-range>.mat-calendar-body-comparison-identical,.mat-calendar-body-in-comparison-range.mat-calendar-body-in-range::after{background:var(--mat-datepicker-calendar-date-in-overlap-range-state-background-color)}.mat-calendar-body-comparison-identical.mat-calendar-body-selected,.mat-calendar-body-in-comparison-range>.mat-calendar-body-selected{background:var(--mat-datepicker-calendar-date-in-overlap-range-selected-state-background-color)}.cdk-high-contrast-active .mat-datepicker-popup:not(:empty),.cdk-high-contrast-active .mat-calendar-body-cell:not(.mat-calendar-body-in-range) .mat-calendar-body-selected{outline:solid 1px}.cdk-high-contrast-active .mat-calendar-body-today{outline:dotted 1px}.cdk-high-contrast-active .mat-calendar-body-cell::before,.cdk-high-contrast-active .mat-calendar-body-cell::after,.cdk-high-contrast-active .mat-calendar-body-selected{background:none}.cdk-high-contrast-active .mat-calendar-body-in-range::before,.cdk-high-contrast-active .mat-calendar-body-comparison-bridge-start::before,.cdk-high-contrast-active .mat-calendar-body-comparison-bridge-end::before{border-top:solid 1px;border-bottom:solid 1px}.cdk-high-contrast-active .mat-calendar-body-range-start::before{border-left:solid 1px}[dir=rtl] .cdk-high-contrast-active .mat-calendar-body-range-start::before{border-left:0;border-right:solid 1px}.cdk-high-contrast-active .mat-calendar-body-range-end::before{border-right:solid 1px}[dir=rtl] .cdk-high-contrast-active .mat-calendar-body-range-end::before{border-right:0;border-left:solid 1px}.cdk-high-contrast-active .mat-calendar-body-in-comparison-range::before{border-top:dashed 1px;border-bottom:dashed 1px}.cdk-high-contrast-active .mat-calendar-body-comparison-start::before{border-left:dashed 1px}[dir=rtl] .cdk-high-contrast-active .mat-calendar-body-comparison-start::before{border-left:0;border-right:dashed 1px}.cdk-high-contrast-active .mat-calendar-body-comparison-end::before{border-right:dashed 1px}[dir=rtl] .cdk-high-contrast-active .mat-calendar-body-comparison-end::before{border-right:0;border-left:dashed 1px}'],
  encapsulation: 2,
  changeDetection: 0
});
var MatCalendarBody = _MatCalendarBody;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCalendarBody, [{
    type: Component,
    args: [{
      selector: "[mat-calendar-body]",
      host: {
        "class": "mat-calendar-body"
      },
      exportAs: "matCalendarBody",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [NgClass],
      template: `<!--
  If there's not enough space in the first row, create a separate label row. We mark this row as
  aria-hidden because we don't want it to be read out as one of the weeks in the month.
-->
@if (_firstRowOffset < labelMinRequiredCells) {
  <tr aria-hidden="true">
    <td class="mat-calendar-body-label"
        [attr.colspan]="numCols"
        [style.paddingTop]="_cellPadding"
        [style.paddingBottom]="_cellPadding">
      {{label}}
    </td>
  </tr>
}

<!-- Create the first row separately so we can include a special spacer cell. -->
@for (row of rows; track row; let rowIndex = $index) {
  <tr role="row">
    <!--
      This cell is purely decorative, but we can't put \`aria-hidden\` or \`role="presentation"\` on it,
      because it throws off the week days for the rest of the row on NVDA. The aspect ratio of the
      table cells is maintained by setting the top and bottom padding as a percentage of the width
      (a variant of the trick described here: https://www.w3schools.com/howto/howto_css_aspect_ratio.asp).
    -->
    @if (rowIndex === 0 && _firstRowOffset) {
      <td
        class="mat-calendar-body-label"
        [attr.colspan]="_firstRowOffset"
        [style.paddingTop]="_cellPadding"
        [style.paddingBottom]="_cellPadding">
        {{_firstRowOffset >= labelMinRequiredCells ? label : ''}}
      </td>
    }
    <!--
      Each gridcell in the calendar contains a button, which signals to assistive technology that the
      cell is interactable, as well as the selection state via \`aria-pressed\`. See #23476 for
      background.
    -->
    @for (item of row; track item; let colIndex = $index) {
      <td
        role="gridcell"
        class="mat-calendar-body-cell-container"
        [style.width]="_cellWidth"
        [style.paddingTop]="_cellPadding"
        [style.paddingBottom]="_cellPadding"
        [attr.data-mat-row]="rowIndex"
        [attr.data-mat-col]="colIndex"
      >
        <button
            type="button"
            class="mat-calendar-body-cell"
            [ngClass]="item.cssClasses"
            [tabindex]="_isActiveCell(rowIndex, colIndex) ? 0 : -1"
            [class.mat-calendar-body-disabled]="!item.enabled"
            [class.mat-calendar-body-active]="_isActiveCell(rowIndex, colIndex)"
            [class.mat-calendar-body-range-start]="_isRangeStart(item.compareValue)"
            [class.mat-calendar-body-range-end]="_isRangeEnd(item.compareValue)"
            [class.mat-calendar-body-in-range]="_isInRange(item.compareValue)"
            [class.mat-calendar-body-comparison-bridge-start]="_isComparisonBridgeStart(item.compareValue, rowIndex, colIndex)"
            [class.mat-calendar-body-comparison-bridge-end]="_isComparisonBridgeEnd(item.compareValue, rowIndex, colIndex)"
            [class.mat-calendar-body-comparison-start]="_isComparisonStart(item.compareValue)"
            [class.mat-calendar-body-comparison-end]="_isComparisonEnd(item.compareValue)"
            [class.mat-calendar-body-in-comparison-range]="_isInComparisonRange(item.compareValue)"
            [class.mat-calendar-body-preview-start]="_isPreviewStart(item.compareValue)"
            [class.mat-calendar-body-preview-end]="_isPreviewEnd(item.compareValue)"
            [class.mat-calendar-body-in-preview]="_isInPreview(item.compareValue)"
            [attr.aria-label]="item.ariaLabel"
            [attr.aria-disabled]="!item.enabled || null"
            [attr.aria-pressed]="_isSelected(item.compareValue)"
            [attr.aria-current]="todayValue === item.compareValue ? 'date' : null"
            [attr.aria-describedby]="_getDescribedby(item.compareValue)"
            (click)="_cellClicked(item, $event)"
            (focus)="_emitActiveDateChange(item, $event)">
            <span class="mat-calendar-body-cell-content mat-focus-indicator"
              [class.mat-calendar-body-selected]="_isSelected(item.compareValue)"
              [class.mat-calendar-body-comparison-identical]="_isComparisonIdentical(item.compareValue)"
              [class.mat-calendar-body-today]="todayValue === item.compareValue">
              {{item.displayValue}}
            </span>
            <span class="mat-calendar-body-cell-preview" aria-hidden="true"></span>
        </button>
      </td>
    }
  </tr>
}

<label [id]="_startDateLabelId" class="mat-calendar-body-hidden-label">
  {{startDateAccessibleName}}
</label>
<label [id]="_endDateLabelId" class="mat-calendar-body-hidden-label">
  {{endDateAccessibleName}}
</label>
`,
      styles: ['.mat-calendar-body{min-width:224px}.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){border-color:var(--mat-datepicker-calendar-date-today-outline-color)}.mat-calendar-body-label{height:0;line-height:0;text-align:start;padding-left:4.7142857143%;padding-right:4.7142857143%;font-size:var(--mat-datepicker-calendar-body-label-text-size);font-weight:var(--mat-datepicker-calendar-body-label-text-weight);color:var(--mat-datepicker-calendar-body-label-text-color)}.mat-calendar-body-hidden-label{display:none}.mat-calendar-body-cell-container{position:relative;height:0;line-height:0}.mat-calendar-body-cell{-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);position:absolute;top:0;left:0;width:100%;height:100%;background:none;text-align:center;outline:none;font-family:inherit;margin:0}.mat-calendar-body-cell::-moz-focus-inner{border:0}.mat-calendar-body-cell::before,.mat-calendar-body-cell::after,.mat-calendar-body-cell-preview{content:"";position:absolute;top:5%;left:0;z-index:0;box-sizing:border-box;display:block;height:90%;width:100%}.mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,.mat-calendar-body-range-start::after,.mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,.mat-calendar-body-comparison-start::after,.mat-calendar-body-preview-start .mat-calendar-body-cell-preview{left:5%;width:95%;border-top-left-radius:999px;border-bottom-left-radius:999px}[dir=rtl] .mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,[dir=rtl] .mat-calendar-body-range-start::after,[dir=rtl] .mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,[dir=rtl] .mat-calendar-body-comparison-start::after,[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview{left:0;border-radius:0;border-top-right-radius:999px;border-bottom-right-radius:999px}.mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,.mat-calendar-body-range-end::after,.mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,.mat-calendar-body-comparison-end::after,.mat-calendar-body-preview-end .mat-calendar-body-cell-preview{width:95%;border-top-right-radius:999px;border-bottom-right-radius:999px}[dir=rtl] .mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,[dir=rtl] .mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,[dir=rtl] .mat-calendar-body-comparison-end::after,[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview{left:5%;border-radius:0;border-top-left-radius:999px;border-bottom-left-radius:999px}[dir=rtl] .mat-calendar-body-comparison-bridge-start.mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-bridge-end.mat-calendar-body-range-start::after{width:95%;border-top-right-radius:999px;border-bottom-right-radius:999px}.mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,.mat-calendar-body-comparison-end.mat-calendar-body-range-start::after,[dir=rtl] .mat-calendar-body-comparison-end.mat-calendar-body-range-start::after{width:90%}.mat-calendar-body-in-preview{color:var(--mat-datepicker-calendar-date-preview-state-outline-color)}.mat-calendar-body-in-preview .mat-calendar-body-cell-preview{border-top:dashed 1px;border-bottom:dashed 1px}.mat-calendar-body-preview-start .mat-calendar-body-cell-preview{border-left:dashed 1px}[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview{border-left:0;border-right:dashed 1px}.mat-calendar-body-preview-end .mat-calendar-body-cell-preview{border-right:dashed 1px}[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview{border-right:0;border-left:dashed 1px}.mat-calendar-body-disabled{cursor:default}.mat-calendar-body-disabled>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){color:var(--mat-datepicker-calendar-date-disabled-state-text-color)}.mat-calendar-body-disabled>.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){border-color:var(--mat-datepicker-calendar-date-today-disabled-state-outline-color)}.cdk-high-contrast-active .mat-calendar-body-disabled{opacity:.5}.mat-calendar-body-cell-content{top:5%;left:5%;z-index:1;display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:90%;height:90%;line-height:1;border-width:1px;border-style:solid;border-radius:999px;color:var(--mat-datepicker-calendar-date-text-color);border-color:var(--mat-datepicker-calendar-date-outline-color)}.mat-calendar-body-cell-content.mat-focus-indicator{position:absolute}.cdk-high-contrast-active .mat-calendar-body-cell-content{border:none}.cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical),.cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){background-color:var(--mat-datepicker-calendar-date-focus-state-background-color)}@media(hover: hover){.mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){background-color:var(--mat-datepicker-calendar-date-hover-state-background-color)}}.mat-calendar-body-selected{background-color:var(--mat-datepicker-calendar-date-selected-state-background-color);color:var(--mat-datepicker-calendar-date-selected-state-text-color)}.mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:var(--mat-datepicker-calendar-date-selected-disabled-state-background-color)}.mat-calendar-body-selected.mat-calendar-body-today{box-shadow:inset 0 0 0 1px var(--mat-datepicker-calendar-date-today-selected-state-outline-color)}.mat-calendar-body-in-range::before{background:var(--mat-datepicker-calendar-date-in-range-state-background-color)}.mat-calendar-body-comparison-identical,.mat-calendar-body-in-comparison-range::before{background:var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color)}.mat-calendar-body-comparison-identical,.mat-calendar-body-in-comparison-range::before{background:var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color)}.mat-calendar-body-comparison-bridge-start::before,[dir=rtl] .mat-calendar-body-comparison-bridge-end::before{background:linear-gradient(to right, var(--mat-datepicker-calendar-date-in-range-state-background-color) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color) 50%)}.mat-calendar-body-comparison-bridge-end::before,[dir=rtl] .mat-calendar-body-comparison-bridge-start::before{background:linear-gradient(to left, var(--mat-datepicker-calendar-date-in-range-state-background-color) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color) 50%)}.mat-calendar-body-in-range>.mat-calendar-body-comparison-identical,.mat-calendar-body-in-comparison-range.mat-calendar-body-in-range::after{background:var(--mat-datepicker-calendar-date-in-overlap-range-state-background-color)}.mat-calendar-body-comparison-identical.mat-calendar-body-selected,.mat-calendar-body-in-comparison-range>.mat-calendar-body-selected{background:var(--mat-datepicker-calendar-date-in-overlap-range-selected-state-background-color)}.cdk-high-contrast-active .mat-datepicker-popup:not(:empty),.cdk-high-contrast-active .mat-calendar-body-cell:not(.mat-calendar-body-in-range) .mat-calendar-body-selected{outline:solid 1px}.cdk-high-contrast-active .mat-calendar-body-today{outline:dotted 1px}.cdk-high-contrast-active .mat-calendar-body-cell::before,.cdk-high-contrast-active .mat-calendar-body-cell::after,.cdk-high-contrast-active .mat-calendar-body-selected{background:none}.cdk-high-contrast-active .mat-calendar-body-in-range::before,.cdk-high-contrast-active .mat-calendar-body-comparison-bridge-start::before,.cdk-high-contrast-active .mat-calendar-body-comparison-bridge-end::before{border-top:solid 1px;border-bottom:solid 1px}.cdk-high-contrast-active .mat-calendar-body-range-start::before{border-left:solid 1px}[dir=rtl] .cdk-high-contrast-active .mat-calendar-body-range-start::before{border-left:0;border-right:solid 1px}.cdk-high-contrast-active .mat-calendar-body-range-end::before{border-right:solid 1px}[dir=rtl] .cdk-high-contrast-active .mat-calendar-body-range-end::before{border-right:0;border-left:solid 1px}.cdk-high-contrast-active .mat-calendar-body-in-comparison-range::before{border-top:dashed 1px;border-bottom:dashed 1px}.cdk-high-contrast-active .mat-calendar-body-comparison-start::before{border-left:dashed 1px}[dir=rtl] .cdk-high-contrast-active .mat-calendar-body-comparison-start::before{border-left:0;border-right:dashed 1px}.cdk-high-contrast-active .mat-calendar-body-comparison-end::before{border-right:dashed 1px}[dir=rtl] .cdk-high-contrast-active .mat-calendar-body-comparison-end::before{border-right:0;border-left:dashed 1px}']
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: NgZone
  }], {
    label: [{
      type: Input
    }],
    rows: [{
      type: Input
    }],
    todayValue: [{
      type: Input
    }],
    startValue: [{
      type: Input
    }],
    endValue: [{
      type: Input
    }],
    labelMinRequiredCells: [{
      type: Input
    }],
    numCols: [{
      type: Input
    }],
    activeCell: [{
      type: Input
    }],
    isRange: [{
      type: Input
    }],
    cellAspectRatio: [{
      type: Input
    }],
    comparisonStart: [{
      type: Input
    }],
    comparisonEnd: [{
      type: Input
    }],
    previewStart: [{
      type: Input
    }],
    previewEnd: [{
      type: Input
    }],
    startDateAccessibleName: [{
      type: Input
    }],
    endDateAccessibleName: [{
      type: Input
    }],
    selectedValueChange: [{
      type: Output
    }],
    previewChange: [{
      type: Output
    }],
    activeDateChange: [{
      type: Output
    }],
    dragStarted: [{
      type: Output
    }],
    dragEnded: [{
      type: Output
    }]
  });
})();
function isTableCell(node) {
  return node?.nodeName === "TD";
}
function getCellElement(element) {
  let cell;
  if (isTableCell(element)) {
    cell = element;
  } else if (isTableCell(element.parentNode)) {
    cell = element.parentNode;
  } else if (isTableCell(element.parentNode?.parentNode)) {
    cell = element.parentNode.parentNode;
  }
  return cell?.getAttribute("data-mat-row") != null ? cell : null;
}
function isStart(value, start, end) {
  return end !== null && start !== end && value < end && value === start;
}
function isEnd(value, start, end) {
  return start !== null && start !== end && value >= start && value === end;
}
function isInRange(value, start, end, rangeEnabled) {
  return rangeEnabled && start !== null && end !== null && start !== end && value >= start && value <= end;
}
function getActualTouchTarget(event) {
  const touchLocation = event.changedTouches[0];
  return document.elementFromPoint(touchLocation.clientX, touchLocation.clientY);
}
var DateRange = class {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
};
var _MatDateSelectionModel = class _MatDateSelectionModel {
  constructor(selection, _adapter) {
    this.selection = selection;
    this._adapter = _adapter;
    this._selectionChanged = new Subject();
    this.selectionChanged = this._selectionChanged;
    this.selection = selection;
  }
  /**
   * Updates the current selection in the model.
   * @param value New selection that should be assigned.
   * @param source Object that triggered the selection change.
   */
  updateSelection(value, source) {
    const oldValue = this.selection;
    this.selection = value;
    this._selectionChanged.next({
      selection: value,
      source,
      oldValue
    });
  }
  ngOnDestroy() {
    this._selectionChanged.complete();
  }
  _isValidDateInstance(date) {
    return this._adapter.isDateInstance(date) && this._adapter.isValid(date);
  }
};
_MatDateSelectionModel.ɵfac = function MatDateSelectionModel_Factory(t) {
  ɵɵinvalidFactory();
};
_MatDateSelectionModel.ɵprov = ɵɵdefineInjectable({
  token: _MatDateSelectionModel,
  factory: _MatDateSelectionModel.ɵfac
});
var MatDateSelectionModel = _MatDateSelectionModel;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDateSelectionModel, [{
    type: Injectable
  }], () => [{
    type: void 0
  }, {
    type: DateAdapter
  }], null);
})();
var _MatSingleDateSelectionModel = class _MatSingleDateSelectionModel extends MatDateSelectionModel {
  constructor(adapter) {
    super(null, adapter);
  }
  /**
   * Adds a date to the current selection. In the case of a single date selection, the added date
   * simply overwrites the previous selection
   */
  add(date) {
    super.updateSelection(date, this);
  }
  /** Checks whether the current selection is valid. */
  isValid() {
    return this.selection != null && this._isValidDateInstance(this.selection);
  }
  /**
   * Checks whether the current selection is complete. In the case of a single date selection, this
   * is true if the current selection is not null.
   */
  isComplete() {
    return this.selection != null;
  }
  /** Clones the selection model. */
  clone() {
    const clone = new _MatSingleDateSelectionModel(this._adapter);
    clone.updateSelection(this.selection, this);
    return clone;
  }
};
_MatSingleDateSelectionModel.ɵfac = function MatSingleDateSelectionModel_Factory(t) {
  return new (t || _MatSingleDateSelectionModel)(ɵɵinject(DateAdapter));
};
_MatSingleDateSelectionModel.ɵprov = ɵɵdefineInjectable({
  token: _MatSingleDateSelectionModel,
  factory: _MatSingleDateSelectionModel.ɵfac
});
var MatSingleDateSelectionModel = _MatSingleDateSelectionModel;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSingleDateSelectionModel, [{
    type: Injectable
  }], () => [{
    type: DateAdapter
  }], null);
})();
var _MatRangeDateSelectionModel = class _MatRangeDateSelectionModel extends MatDateSelectionModel {
  constructor(adapter) {
    super(new DateRange(null, null), adapter);
  }
  /**
   * Adds a date to the current selection. In the case of a date range selection, the added date
   * fills in the next `null` value in the range. If both the start and the end already have a date,
   * the selection is reset so that the given date is the new `start` and the `end` is null.
   */
  add(date) {
    let {
      start,
      end
    } = this.selection;
    if (start == null) {
      start = date;
    } else if (end == null) {
      end = date;
    } else {
      start = date;
      end = null;
    }
    super.updateSelection(new DateRange(start, end), this);
  }
  /** Checks whether the current selection is valid. */
  isValid() {
    const {
      start,
      end
    } = this.selection;
    if (start == null && end == null) {
      return true;
    }
    if (start != null && end != null) {
      return this._isValidDateInstance(start) && this._isValidDateInstance(end) && this._adapter.compareDate(start, end) <= 0;
    }
    return (start == null || this._isValidDateInstance(start)) && (end == null || this._isValidDateInstance(end));
  }
  /**
   * Checks whether the current selection is complete. In the case of a date range selection, this
   * is true if the current selection has a non-null `start` and `end`.
   */
  isComplete() {
    return this.selection.start != null && this.selection.end != null;
  }
  /** Clones the selection model. */
  clone() {
    const clone = new _MatRangeDateSelectionModel(this._adapter);
    clone.updateSelection(this.selection, this);
    return clone;
  }
};
_MatRangeDateSelectionModel.ɵfac = function MatRangeDateSelectionModel_Factory(t) {
  return new (t || _MatRangeDateSelectionModel)(ɵɵinject(DateAdapter));
};
_MatRangeDateSelectionModel.ɵprov = ɵɵdefineInjectable({
  token: _MatRangeDateSelectionModel,
  factory: _MatRangeDateSelectionModel.ɵfac
});
var MatRangeDateSelectionModel = _MatRangeDateSelectionModel;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRangeDateSelectionModel, [{
    type: Injectable
  }], () => [{
    type: DateAdapter
  }], null);
})();
function MAT_SINGLE_DATE_SELECTION_MODEL_FACTORY(parent, adapter) {
  return parent || new MatSingleDateSelectionModel(adapter);
}
var MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER = {
  provide: MatDateSelectionModel,
  deps: [[new Optional(), new SkipSelf(), MatDateSelectionModel], DateAdapter],
  useFactory: MAT_SINGLE_DATE_SELECTION_MODEL_FACTORY
};
function MAT_RANGE_DATE_SELECTION_MODEL_FACTORY(parent, adapter) {
  return parent || new MatRangeDateSelectionModel(adapter);
}
var MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER = {
  provide: MatDateSelectionModel,
  deps: [[new Optional(), new SkipSelf(), MatDateSelectionModel], DateAdapter],
  useFactory: MAT_RANGE_DATE_SELECTION_MODEL_FACTORY
};
var MAT_DATE_RANGE_SELECTION_STRATEGY = new InjectionToken("MAT_DATE_RANGE_SELECTION_STRATEGY");
var _DefaultMatCalendarRangeStrategy = class _DefaultMatCalendarRangeStrategy {
  constructor(_dateAdapter) {
    this._dateAdapter = _dateAdapter;
  }
  selectionFinished(date, currentRange) {
    let {
      start,
      end
    } = currentRange;
    if (start == null) {
      start = date;
    } else if (end == null && date && this._dateAdapter.compareDate(date, start) >= 0) {
      end = date;
    } else {
      start = date;
      end = null;
    }
    return new DateRange(start, end);
  }
  createPreview(activeDate, currentRange) {
    let start = null;
    let end = null;
    if (currentRange.start && !currentRange.end && activeDate) {
      start = currentRange.start;
      end = activeDate;
    }
    return new DateRange(start, end);
  }
  createDrag(dragOrigin, originalRange, newDate) {
    let start = originalRange.start;
    let end = originalRange.end;
    if (!start || !end) {
      return null;
    }
    const adapter = this._dateAdapter;
    const isRange = adapter.compareDate(start, end) !== 0;
    const diffYears = adapter.getYear(newDate) - adapter.getYear(dragOrigin);
    const diffMonths = adapter.getMonth(newDate) - adapter.getMonth(dragOrigin);
    const diffDays = adapter.getDate(newDate) - adapter.getDate(dragOrigin);
    if (isRange && adapter.sameDate(dragOrigin, originalRange.start)) {
      start = newDate;
      if (adapter.compareDate(newDate, end) > 0) {
        end = adapter.addCalendarYears(end, diffYears);
        end = adapter.addCalendarMonths(end, diffMonths);
        end = adapter.addCalendarDays(end, diffDays);
      }
    } else if (isRange && adapter.sameDate(dragOrigin, originalRange.end)) {
      end = newDate;
      if (adapter.compareDate(newDate, start) < 0) {
        start = adapter.addCalendarYears(start, diffYears);
        start = adapter.addCalendarMonths(start, diffMonths);
        start = adapter.addCalendarDays(start, diffDays);
      }
    } else {
      start = adapter.addCalendarYears(start, diffYears);
      start = adapter.addCalendarMonths(start, diffMonths);
      start = adapter.addCalendarDays(start, diffDays);
      end = adapter.addCalendarYears(end, diffYears);
      end = adapter.addCalendarMonths(end, diffMonths);
      end = adapter.addCalendarDays(end, diffDays);
    }
    return new DateRange(start, end);
  }
};
_DefaultMatCalendarRangeStrategy.ɵfac = function DefaultMatCalendarRangeStrategy_Factory(t) {
  return new (t || _DefaultMatCalendarRangeStrategy)(ɵɵinject(DateAdapter));
};
_DefaultMatCalendarRangeStrategy.ɵprov = ɵɵdefineInjectable({
  token: _DefaultMatCalendarRangeStrategy,
  factory: _DefaultMatCalendarRangeStrategy.ɵfac
});
var DefaultMatCalendarRangeStrategy = _DefaultMatCalendarRangeStrategy;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultMatCalendarRangeStrategy, [{
    type: Injectable
  }], () => [{
    type: DateAdapter
  }], null);
})();
function MAT_CALENDAR_RANGE_STRATEGY_PROVIDER_FACTORY(parent, adapter) {
  return parent || new DefaultMatCalendarRangeStrategy(adapter);
}
var MAT_CALENDAR_RANGE_STRATEGY_PROVIDER = {
  provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
  deps: [[new Optional(), new SkipSelf(), MAT_DATE_RANGE_SELECTION_STRATEGY], DateAdapter],
  useFactory: MAT_CALENDAR_RANGE_STRATEGY_PROVIDER_FACTORY
};
var DAYS_PER_WEEK = 7;
var _MatMonthView = class _MatMonthView {
  /**
   * The date to display in this month view (everything other than the month and year is ignored).
   */
  get activeDate() {
    return this._activeDate;
  }
  set activeDate(value) {
    const oldActiveDate = this._activeDate;
    const validDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();
    this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);
    if (!this._hasSameMonthAndYear(oldActiveDate, this._activeDate)) {
      this._init();
    }
  }
  /** The currently selected date. */
  get selected() {
    return this._selected;
  }
  set selected(value) {
    if (value instanceof DateRange) {
      this._selected = value;
    } else {
      this._selected = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    this._setRanges(this._selected);
  }
  /** The minimum selectable date. */
  get minDate() {
    return this._minDate;
  }
  set minDate(value) {
    this._minDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  /** The maximum selectable date. */
  get maxDate() {
    return this._maxDate;
  }
  set maxDate(value) {
    this._maxDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  constructor(_changeDetectorRef, _dateFormats, _dateAdapter, _dir, _rangeStrategy) {
    this._changeDetectorRef = _changeDetectorRef;
    this._dateFormats = _dateFormats;
    this._dateAdapter = _dateAdapter;
    this._dir = _dir;
    this._rangeStrategy = _rangeStrategy;
    this._rerenderSubscription = Subscription.EMPTY;
    this.activeDrag = null;
    this.selectedChange = new EventEmitter();
    this._userSelection = new EventEmitter();
    this.dragStarted = new EventEmitter();
    this.dragEnded = new EventEmitter();
    this.activeDateChange = new EventEmitter();
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!this._dateAdapter) {
        throw createMissingDateImplError("DateAdapter");
      }
      if (!this._dateFormats) {
        throw createMissingDateImplError("MAT_DATE_FORMATS");
      }
    }
    this._activeDate = this._dateAdapter.today();
  }
  ngAfterContentInit() {
    this._rerenderSubscription = this._dateAdapter.localeChanges.pipe(startWith(null)).subscribe(() => this._init());
  }
  ngOnChanges(changes) {
    const comparisonChange = changes["comparisonStart"] || changes["comparisonEnd"];
    if (comparisonChange && !comparisonChange.firstChange) {
      this._setRanges(this.selected);
    }
    if (changes["activeDrag"] && !this.activeDrag) {
      this._clearPreview();
    }
  }
  ngOnDestroy() {
    this._rerenderSubscription.unsubscribe();
  }
  /** Handles when a new date is selected. */
  _dateSelected(event) {
    const date = event.value;
    const selectedDate = this._getDateFromDayOfMonth(date);
    let rangeStartDate;
    let rangeEndDate;
    if (this._selected instanceof DateRange) {
      rangeStartDate = this._getDateInCurrentMonth(this._selected.start);
      rangeEndDate = this._getDateInCurrentMonth(this._selected.end);
    } else {
      rangeStartDate = rangeEndDate = this._getDateInCurrentMonth(this._selected);
    }
    if (rangeStartDate !== date || rangeEndDate !== date) {
      this.selectedChange.emit(selectedDate);
    }
    this._userSelection.emit({
      value: selectedDate,
      event: event.event
    });
    this._clearPreview();
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Takes the index of a calendar body cell wrapped in an event as argument. For the date that
   * corresponds to the given cell, set `activeDate` to that date and fire `activeDateChange` with
   * that date.
   *
   * This function is used to match each component's model of the active date with the calendar
   * body cell that was focused. It updates its value of `activeDate` synchronously and updates the
   * parent's value asynchronously via the `activeDateChange` event. The child component receives an
   * updated value asynchronously via the `activeCell` Input.
   */
  _updateActiveDate(event) {
    const month = event.value;
    const oldActiveDate = this._activeDate;
    this.activeDate = this._getDateFromDayOfMonth(month);
    if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
      this.activeDateChange.emit(this._activeDate);
    }
  }
  /** Handles keydown events on the calendar body when calendar is in month view. */
  _handleCalendarBodyKeydown(event) {
    const oldActiveDate = this._activeDate;
    const isRtl = this._isRtl();
    switch (event.keyCode) {
      case LEFT_ARROW:
        this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, isRtl ? 1 : -1);
        break;
      case RIGHT_ARROW:
        this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, isRtl ? -1 : 1);
        break;
      case UP_ARROW:
        this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, -7);
        break;
      case DOWN_ARROW:
        this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, 7);
        break;
      case HOME:
        this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, 1 - this._dateAdapter.getDate(this._activeDate));
        break;
      case END:
        this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, this._dateAdapter.getNumDaysInMonth(this._activeDate) - this._dateAdapter.getDate(this._activeDate));
        break;
      case PAGE_UP:
        this.activeDate = event.altKey ? this._dateAdapter.addCalendarYears(this._activeDate, -1) : this._dateAdapter.addCalendarMonths(this._activeDate, -1);
        break;
      case PAGE_DOWN:
        this.activeDate = event.altKey ? this._dateAdapter.addCalendarYears(this._activeDate, 1) : this._dateAdapter.addCalendarMonths(this._activeDate, 1);
        break;
      case ENTER:
      case SPACE:
        this._selectionKeyPressed = true;
        if (this._canSelect(this._activeDate)) {
          event.preventDefault();
        }
        return;
      case ESCAPE:
        if (this._previewEnd != null && !hasModifierKey(event)) {
          this._clearPreview();
          if (this.activeDrag) {
            this.dragEnded.emit({
              value: null,
              event
            });
          } else {
            this.selectedChange.emit(null);
            this._userSelection.emit({
              value: null,
              event
            });
          }
          event.preventDefault();
          event.stopPropagation();
        }
        return;
      default:
        return;
    }
    if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
      this.activeDateChange.emit(this.activeDate);
      this._focusActiveCellAfterViewChecked();
    }
    event.preventDefault();
  }
  /** Handles keyup events on the calendar body when calendar is in month view. */
  _handleCalendarBodyKeyup(event) {
    if (event.keyCode === SPACE || event.keyCode === ENTER) {
      if (this._selectionKeyPressed && this._canSelect(this._activeDate)) {
        this._dateSelected({
          value: this._dateAdapter.getDate(this._activeDate),
          event
        });
      }
      this._selectionKeyPressed = false;
    }
  }
  /** Initializes this month view. */
  _init() {
    this._setRanges(this.selected);
    this._todayDate = this._getCellCompareValue(this._dateAdapter.today());
    this._monthLabel = this._dateFormats.display.monthLabel ? this._dateAdapter.format(this.activeDate, this._dateFormats.display.monthLabel) : this._dateAdapter.getMonthNames("short")[this._dateAdapter.getMonth(this.activeDate)].toLocaleUpperCase();
    let firstOfMonth = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), this._dateAdapter.getMonth(this.activeDate), 1);
    this._firstWeekOffset = (DAYS_PER_WEEK + this._dateAdapter.getDayOfWeek(firstOfMonth) - this._dateAdapter.getFirstDayOfWeek()) % DAYS_PER_WEEK;
    this._initWeekdays();
    this._createWeekCells();
    this._changeDetectorRef.markForCheck();
  }
  /** Focuses the active cell after the microtask queue is empty. */
  _focusActiveCell(movePreview) {
    this._matCalendarBody._focusActiveCell(movePreview);
  }
  /** Focuses the active cell after change detection has run and the microtask queue is empty. */
  _focusActiveCellAfterViewChecked() {
    this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked();
  }
  /** Called when the user has activated a new cell and the preview needs to be updated. */
  _previewChanged({
    event,
    value: cell
  }) {
    if (this._rangeStrategy) {
      const value = cell ? cell.rawValue : null;
      const previewRange = this._rangeStrategy.createPreview(value, this.selected, event);
      this._previewStart = this._getCellCompareValue(previewRange.start);
      this._previewEnd = this._getCellCompareValue(previewRange.end);
      if (this.activeDrag && value) {
        const dragRange = this._rangeStrategy.createDrag?.(this.activeDrag.value, this.selected, value, event);
        if (dragRange) {
          this._previewStart = this._getCellCompareValue(dragRange.start);
          this._previewEnd = this._getCellCompareValue(dragRange.end);
        }
      }
      this._changeDetectorRef.detectChanges();
    }
  }
  /**
   * Called when the user has ended a drag. If the drag/drop was successful,
   * computes and emits the new range selection.
   */
  _dragEnded(event) {
    if (!this.activeDrag)
      return;
    if (event.value) {
      const dragDropResult = this._rangeStrategy?.createDrag?.(this.activeDrag.value, this.selected, event.value, event.event);
      this.dragEnded.emit({
        value: dragDropResult ?? null,
        event: event.event
      });
    } else {
      this.dragEnded.emit({
        value: null,
        event: event.event
      });
    }
  }
  /**
   * Takes a day of the month and returns a new date in the same month and year as the currently
   *  active date. The returned date will have the same day of the month as the argument date.
   */
  _getDateFromDayOfMonth(dayOfMonth) {
    return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), this._dateAdapter.getMonth(this.activeDate), dayOfMonth);
  }
  /** Initializes the weekdays. */
  _initWeekdays() {
    const firstDayOfWeek = this._dateAdapter.getFirstDayOfWeek();
    const narrowWeekdays = this._dateAdapter.getDayOfWeekNames("narrow");
    const longWeekdays = this._dateAdapter.getDayOfWeekNames("long");
    let weekdays = longWeekdays.map((long, i) => {
      return {
        long,
        narrow: narrowWeekdays[i]
      };
    });
    this._weekdays = weekdays.slice(firstDayOfWeek).concat(weekdays.slice(0, firstDayOfWeek));
  }
  /** Creates MatCalendarCells for the dates in this month. */
  _createWeekCells() {
    const daysInMonth = this._dateAdapter.getNumDaysInMonth(this.activeDate);
    const dateNames = this._dateAdapter.getDateNames();
    this._weeks = [[]];
    for (let i = 0, cell = this._firstWeekOffset; i < daysInMonth; i++, cell++) {
      if (cell == DAYS_PER_WEEK) {
        this._weeks.push([]);
        cell = 0;
      }
      const date = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), this._dateAdapter.getMonth(this.activeDate), i + 1);
      const enabled = this._shouldEnableDate(date);
      const ariaLabel = this._dateAdapter.format(date, this._dateFormats.display.dateA11yLabel);
      const cellClasses = this.dateClass ? this.dateClass(date, "month") : void 0;
      this._weeks[this._weeks.length - 1].push(new MatCalendarCell(i + 1, dateNames[i], ariaLabel, enabled, cellClasses, this._getCellCompareValue(date), date));
    }
  }
  /** Date filter for the month */
  _shouldEnableDate(date) {
    return !!date && (!this.minDate || this._dateAdapter.compareDate(date, this.minDate) >= 0) && (!this.maxDate || this._dateAdapter.compareDate(date, this.maxDate) <= 0) && (!this.dateFilter || this.dateFilter(date));
  }
  /**
   * Gets the date in this month that the given Date falls on.
   * Returns null if the given Date is in another month.
   */
  _getDateInCurrentMonth(date) {
    return date && this._hasSameMonthAndYear(date, this.activeDate) ? this._dateAdapter.getDate(date) : null;
  }
  /** Checks whether the 2 dates are non-null and fall within the same month of the same year. */
  _hasSameMonthAndYear(d1, d2) {
    return !!(d1 && d2 && this._dateAdapter.getMonth(d1) == this._dateAdapter.getMonth(d2) && this._dateAdapter.getYear(d1) == this._dateAdapter.getYear(d2));
  }
  /** Gets the value that will be used to one cell to another. */
  _getCellCompareValue(date) {
    if (date) {
      const year = this._dateAdapter.getYear(date);
      const month = this._dateAdapter.getMonth(date);
      const day = this._dateAdapter.getDate(date);
      return new Date(year, month, day).getTime();
    }
    return null;
  }
  /** Determines whether the user has the RTL layout direction. */
  _isRtl() {
    return this._dir && this._dir.value === "rtl";
  }
  /** Sets the current range based on a model value. */
  _setRanges(selectedValue) {
    if (selectedValue instanceof DateRange) {
      this._rangeStart = this._getCellCompareValue(selectedValue.start);
      this._rangeEnd = this._getCellCompareValue(selectedValue.end);
      this._isRange = true;
    } else {
      this._rangeStart = this._rangeEnd = this._getCellCompareValue(selectedValue);
      this._isRange = false;
    }
    this._comparisonRangeStart = this._getCellCompareValue(this.comparisonStart);
    this._comparisonRangeEnd = this._getCellCompareValue(this.comparisonEnd);
  }
  /** Gets whether a date can be selected in the month view. */
  _canSelect(date) {
    return !this.dateFilter || this.dateFilter(date);
  }
  /** Clears out preview state. */
  _clearPreview() {
    this._previewStart = this._previewEnd = null;
  }
};
_MatMonthView.ɵfac = function MatMonthView_Factory(t) {
  return new (t || _MatMonthView)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(MAT_DATE_FORMATS, 8), ɵɵdirectiveInject(DateAdapter, 8), ɵɵdirectiveInject(Directionality, 8), ɵɵdirectiveInject(MAT_DATE_RANGE_SELECTION_STRATEGY, 8));
};
_MatMonthView.ɵcmp = ɵɵdefineComponent({
  type: _MatMonthView,
  selectors: [["mat-month-view"]],
  viewQuery: function MatMonthView_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(MatCalendarBody, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._matCalendarBody = _t.first);
    }
  },
  inputs: {
    activeDate: "activeDate",
    selected: "selected",
    minDate: "minDate",
    maxDate: "maxDate",
    dateFilter: "dateFilter",
    dateClass: "dateClass",
    comparisonStart: "comparisonStart",
    comparisonEnd: "comparisonEnd",
    startDateAccessibleName: "startDateAccessibleName",
    endDateAccessibleName: "endDateAccessibleName",
    activeDrag: "activeDrag"
  },
  outputs: {
    selectedChange: "selectedChange",
    _userSelection: "_userSelection",
    dragStarted: "dragStarted",
    dragEnded: "dragEnded",
    activeDateChange: "activeDateChange"
  },
  exportAs: ["matMonthView"],
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 8,
  vars: 14,
  consts: [["role", "grid", 1, "mat-calendar-table"], [1, "mat-calendar-table-header"], ["aria-hidden", "true", "colspan", "7", 1, "mat-calendar-table-header-divider"], ["mat-calendar-body", "", 3, "label", "rows", "todayValue", "startValue", "endValue", "comparisonStart", "comparisonEnd", "previewStart", "previewEnd", "isRange", "labelMinRequiredCells", "activeCell", "startDateAccessibleName", "endDateAccessibleName", "selectedValueChange", "activeDateChange", "previewChange", "dragStarted", "dragEnded", "keyup", "keydown"], ["scope", "col"], [1, "cdk-visually-hidden"], ["aria-hidden", "true"]],
  template: function MatMonthView_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "table", 0)(1, "thead", 1)(2, "tr");
      ɵɵrepeaterCreate(3, MatMonthView_For_4_Template, 5, 2, "th", 4, ɵɵrepeaterTrackByIdentity);
      ɵɵelementEnd();
      ɵɵelementStart(5, "tr");
      ɵɵelement(6, "th", 2);
      ɵɵelementEnd()();
      ɵɵelementStart(7, "tbody", 3);
      ɵɵlistener("selectedValueChange", function MatMonthView_Template_tbody_selectedValueChange_7_listener($event) {
        return ctx._dateSelected($event);
      })("activeDateChange", function MatMonthView_Template_tbody_activeDateChange_7_listener($event) {
        return ctx._updateActiveDate($event);
      })("previewChange", function MatMonthView_Template_tbody_previewChange_7_listener($event) {
        return ctx._previewChanged($event);
      })("dragStarted", function MatMonthView_Template_tbody_dragStarted_7_listener($event) {
        return ctx.dragStarted.emit($event);
      })("dragEnded", function MatMonthView_Template_tbody_dragEnded_7_listener($event) {
        return ctx._dragEnded($event);
      })("keyup", function MatMonthView_Template_tbody_keyup_7_listener($event) {
        return ctx._handleCalendarBodyKeyup($event);
      })("keydown", function MatMonthView_Template_tbody_keydown_7_listener($event) {
        return ctx._handleCalendarBodyKeydown($event);
      });
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵadvance(3);
      ɵɵrepeater(ctx._weekdays);
      ɵɵadvance(4);
      ɵɵproperty("label", ctx._monthLabel)("rows", ctx._weeks)("todayValue", ctx._todayDate)("startValue", ctx._rangeStart)("endValue", ctx._rangeEnd)("comparisonStart", ctx._comparisonRangeStart)("comparisonEnd", ctx._comparisonRangeEnd)("previewStart", ctx._previewStart)("previewEnd", ctx._previewEnd)("isRange", ctx._isRange)("labelMinRequiredCells", 3)("activeCell", ctx._dateAdapter.getDate(ctx.activeDate) - 1)("startDateAccessibleName", ctx.startDateAccessibleName)("endDateAccessibleName", ctx.endDateAccessibleName);
    }
  },
  dependencies: [MatCalendarBody],
  encapsulation: 2,
  changeDetection: 0
});
var MatMonthView = _MatMonthView;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatMonthView, [{
    type: Component,
    args: [{
      selector: "mat-month-view",
      exportAs: "matMonthView",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [MatCalendarBody],
      template: '<table class="mat-calendar-table" role="grid">\n  <thead class="mat-calendar-table-header">\n    <tr>\n      @for (day of _weekdays; track day) {\n        <th scope="col">\n          <span class="cdk-visually-hidden">{{day.long}}</span>\n          <span aria-hidden="true">{{day.narrow}}</span>\n        </th>\n      }\n    </tr>\n    <tr><th aria-hidden="true" class="mat-calendar-table-header-divider" colspan="7"></th></tr>\n  </thead>\n  <tbody mat-calendar-body\n         [label]="_monthLabel"\n         [rows]="_weeks"\n         [todayValue]="_todayDate!"\n         [startValue]="_rangeStart!"\n         [endValue]="_rangeEnd!"\n         [comparisonStart]="_comparisonRangeStart"\n         [comparisonEnd]="_comparisonRangeEnd"\n         [previewStart]="_previewStart"\n         [previewEnd]="_previewEnd"\n         [isRange]="_isRange"\n         [labelMinRequiredCells]="3"\n         [activeCell]="_dateAdapter.getDate(activeDate) - 1"\n         [startDateAccessibleName]="startDateAccessibleName"\n         [endDateAccessibleName]="endDateAccessibleName"\n         (selectedValueChange)="_dateSelected($event)"\n         (activeDateChange)="_updateActiveDate($event)"\n         (previewChange)="_previewChanged($event)"\n         (dragStarted)="dragStarted.emit($event)"\n         (dragEnded)="_dragEnded($event)"\n         (keyup)="_handleCalendarBodyKeyup($event)"\n         (keydown)="_handleCalendarBodyKeydown($event)">\n  </tbody>\n</table>\n'
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_DATE_FORMATS]
    }]
  }, {
    type: DateAdapter,
    decorators: [{
      type: Optional
    }]
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [MAT_DATE_RANGE_SELECTION_STRATEGY]
    }, {
      type: Optional
    }]
  }], {
    activeDate: [{
      type: Input
    }],
    selected: [{
      type: Input
    }],
    minDate: [{
      type: Input
    }],
    maxDate: [{
      type: Input
    }],
    dateFilter: [{
      type: Input
    }],
    dateClass: [{
      type: Input
    }],
    comparisonStart: [{
      type: Input
    }],
    comparisonEnd: [{
      type: Input
    }],
    startDateAccessibleName: [{
      type: Input
    }],
    endDateAccessibleName: [{
      type: Input
    }],
    activeDrag: [{
      type: Input
    }],
    selectedChange: [{
      type: Output
    }],
    _userSelection: [{
      type: Output
    }],
    dragStarted: [{
      type: Output
    }],
    dragEnded: [{
      type: Output
    }],
    activeDateChange: [{
      type: Output
    }],
    _matCalendarBody: [{
      type: ViewChild,
      args: [MatCalendarBody]
    }]
  });
})();
var yearsPerPage = 24;
var yearsPerRow = 4;
var _MatMultiYearView = class _MatMultiYearView {
  /** The date to display in this multi-year view (everything other than the year is ignored). */
  get activeDate() {
    return this._activeDate;
  }
  set activeDate(value) {
    let oldActiveDate = this._activeDate;
    const validDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();
    this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);
    if (!isSameMultiYearView(this._dateAdapter, oldActiveDate, this._activeDate, this.minDate, this.maxDate)) {
      this._init();
    }
  }
  /** The currently selected date. */
  get selected() {
    return this._selected;
  }
  set selected(value) {
    if (value instanceof DateRange) {
      this._selected = value;
    } else {
      this._selected = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    this._setSelectedYear(value);
  }
  /** The minimum selectable date. */
  get minDate() {
    return this._minDate;
  }
  set minDate(value) {
    this._minDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  /** The maximum selectable date. */
  get maxDate() {
    return this._maxDate;
  }
  set maxDate(value) {
    this._maxDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  constructor(_changeDetectorRef, _dateAdapter, _dir) {
    this._changeDetectorRef = _changeDetectorRef;
    this._dateAdapter = _dateAdapter;
    this._dir = _dir;
    this._rerenderSubscription = Subscription.EMPTY;
    this.selectedChange = new EventEmitter();
    this.yearSelected = new EventEmitter();
    this.activeDateChange = new EventEmitter();
    if (!this._dateAdapter && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw createMissingDateImplError("DateAdapter");
    }
    this._activeDate = this._dateAdapter.today();
  }
  ngAfterContentInit() {
    this._rerenderSubscription = this._dateAdapter.localeChanges.pipe(startWith(null)).subscribe(() => this._init());
  }
  ngOnDestroy() {
    this._rerenderSubscription.unsubscribe();
  }
  /** Initializes this multi-year view. */
  _init() {
    this._todayYear = this._dateAdapter.getYear(this._dateAdapter.today());
    const activeYear = this._dateAdapter.getYear(this._activeDate);
    const minYearOfPage = activeYear - getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate);
    this._years = [];
    for (let i = 0, row = []; i < yearsPerPage; i++) {
      row.push(minYearOfPage + i);
      if (row.length == yearsPerRow) {
        this._years.push(row.map((year) => this._createCellForYear(year)));
        row = [];
      }
    }
    this._changeDetectorRef.markForCheck();
  }
  /** Handles when a new year is selected. */
  _yearSelected(event) {
    const year = event.value;
    const selectedYear = this._dateAdapter.createDate(year, 0, 1);
    const selectedDate = this._getDateFromYear(year);
    this.yearSelected.emit(selectedYear);
    this.selectedChange.emit(selectedDate);
  }
  /**
   * Takes the index of a calendar body cell wrapped in an event as argument. For the date that
   * corresponds to the given cell, set `activeDate` to that date and fire `activeDateChange` with
   * that date.
   *
   * This function is used to match each component's model of the active date with the calendar
   * body cell that was focused. It updates its value of `activeDate` synchronously and updates the
   * parent's value asynchronously via the `activeDateChange` event. The child component receives an
   * updated value asynchronously via the `activeCell` Input.
   */
  _updateActiveDate(event) {
    const year = event.value;
    const oldActiveDate = this._activeDate;
    this.activeDate = this._getDateFromYear(year);
    if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
      this.activeDateChange.emit(this.activeDate);
    }
  }
  /** Handles keydown events on the calendar body when calendar is in multi-year view. */
  _handleCalendarBodyKeydown(event) {
    const oldActiveDate = this._activeDate;
    const isRtl = this._isRtl();
    switch (event.keyCode) {
      case LEFT_ARROW:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, isRtl ? 1 : -1);
        break;
      case RIGHT_ARROW:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, isRtl ? -1 : 1);
        break;
      case UP_ARROW:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, -yearsPerRow);
        break;
      case DOWN_ARROW:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, yearsPerRow);
        break;
      case HOME:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, -getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate));
        break;
      case END:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, yearsPerPage - getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate) - 1);
        break;
      case PAGE_UP:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? -yearsPerPage * 10 : -yearsPerPage);
        break;
      case PAGE_DOWN:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? yearsPerPage * 10 : yearsPerPage);
        break;
      case ENTER:
      case SPACE:
        this._selectionKeyPressed = true;
        break;
      default:
        return;
    }
    if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
      this.activeDateChange.emit(this.activeDate);
    }
    this._focusActiveCellAfterViewChecked();
    event.preventDefault();
  }
  /** Handles keyup events on the calendar body when calendar is in multi-year view. */
  _handleCalendarBodyKeyup(event) {
    if (event.keyCode === SPACE || event.keyCode === ENTER) {
      if (this._selectionKeyPressed) {
        this._yearSelected({
          value: this._dateAdapter.getYear(this._activeDate),
          event
        });
      }
      this._selectionKeyPressed = false;
    }
  }
  _getActiveCell() {
    return getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate);
  }
  /** Focuses the active cell after the microtask queue is empty. */
  _focusActiveCell() {
    this._matCalendarBody._focusActiveCell();
  }
  /** Focuses the active cell after change detection has run and the microtask queue is empty. */
  _focusActiveCellAfterViewChecked() {
    this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked();
  }
  /**
   * Takes a year and returns a new date on the same day and month as the currently active date
   *  The returned date will have the same year as the argument date.
   */
  _getDateFromYear(year) {
    const activeMonth = this._dateAdapter.getMonth(this.activeDate);
    const daysInMonth = this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(year, activeMonth, 1));
    const normalizedDate = this._dateAdapter.createDate(year, activeMonth, Math.min(this._dateAdapter.getDate(this.activeDate), daysInMonth));
    return normalizedDate;
  }
  /** Creates an MatCalendarCell for the given year. */
  _createCellForYear(year) {
    const date = this._dateAdapter.createDate(year, 0, 1);
    const yearName = this._dateAdapter.getYearName(date);
    const cellClasses = this.dateClass ? this.dateClass(date, "multi-year") : void 0;
    return new MatCalendarCell(year, yearName, yearName, this._shouldEnableYear(year), cellClasses);
  }
  /** Whether the given year is enabled. */
  _shouldEnableYear(year) {
    if (year === void 0 || year === null || this.maxDate && year > this._dateAdapter.getYear(this.maxDate) || this.minDate && year < this._dateAdapter.getYear(this.minDate)) {
      return false;
    }
    if (!this.dateFilter) {
      return true;
    }
    const firstOfYear = this._dateAdapter.createDate(year, 0, 1);
    for (let date = firstOfYear; this._dateAdapter.getYear(date) == year; date = this._dateAdapter.addCalendarDays(date, 1)) {
      if (this.dateFilter(date)) {
        return true;
      }
    }
    return false;
  }
  /** Determines whether the user has the RTL layout direction. */
  _isRtl() {
    return this._dir && this._dir.value === "rtl";
  }
  /** Sets the currently-highlighted year based on a model value. */
  _setSelectedYear(value) {
    this._selectedYear = null;
    if (value instanceof DateRange) {
      const displayValue = value.start || value.end;
      if (displayValue) {
        this._selectedYear = this._dateAdapter.getYear(displayValue);
      }
    } else if (value) {
      this._selectedYear = this._dateAdapter.getYear(value);
    }
  }
};
_MatMultiYearView.ɵfac = function MatMultiYearView_Factory(t) {
  return new (t || _MatMultiYearView)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(DateAdapter, 8), ɵɵdirectiveInject(Directionality, 8));
};
_MatMultiYearView.ɵcmp = ɵɵdefineComponent({
  type: _MatMultiYearView,
  selectors: [["mat-multi-year-view"]],
  viewQuery: function MatMultiYearView_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(MatCalendarBody, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._matCalendarBody = _t.first);
    }
  },
  inputs: {
    activeDate: "activeDate",
    selected: "selected",
    minDate: "minDate",
    maxDate: "maxDate",
    dateFilter: "dateFilter",
    dateClass: "dateClass"
  },
  outputs: {
    selectedChange: "selectedChange",
    yearSelected: "yearSelected",
    activeDateChange: "activeDateChange"
  },
  exportAs: ["matMultiYearView"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 5,
  vars: 7,
  consts: [["role", "grid", 1, "mat-calendar-table"], ["aria-hidden", "true", 1, "mat-calendar-table-header"], ["colspan", "4", 1, "mat-calendar-table-header-divider"], ["mat-calendar-body", "", 3, "rows", "todayValue", "startValue", "endValue", "numCols", "cellAspectRatio", "activeCell", "selectedValueChange", "activeDateChange", "keyup", "keydown"]],
  template: function MatMultiYearView_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "table", 0)(1, "thead", 1)(2, "tr");
      ɵɵelement(3, "th", 2);
      ɵɵelementEnd()();
      ɵɵelementStart(4, "tbody", 3);
      ɵɵlistener("selectedValueChange", function MatMultiYearView_Template_tbody_selectedValueChange_4_listener($event) {
        return ctx._yearSelected($event);
      })("activeDateChange", function MatMultiYearView_Template_tbody_activeDateChange_4_listener($event) {
        return ctx._updateActiveDate($event);
      })("keyup", function MatMultiYearView_Template_tbody_keyup_4_listener($event) {
        return ctx._handleCalendarBodyKeyup($event);
      })("keydown", function MatMultiYearView_Template_tbody_keydown_4_listener($event) {
        return ctx._handleCalendarBodyKeydown($event);
      });
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵadvance(4);
      ɵɵproperty("rows", ctx._years)("todayValue", ctx._todayYear)("startValue", ctx._selectedYear)("endValue", ctx._selectedYear)("numCols", 4)("cellAspectRatio", 4 / 7)("activeCell", ctx._getActiveCell());
    }
  },
  dependencies: [MatCalendarBody],
  encapsulation: 2,
  changeDetection: 0
});
var MatMultiYearView = _MatMultiYearView;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatMultiYearView, [{
    type: Component,
    args: [{
      selector: "mat-multi-year-view",
      exportAs: "matMultiYearView",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [MatCalendarBody],
      template: '<table class="mat-calendar-table" role="grid">\n  <thead aria-hidden="true" class="mat-calendar-table-header">\n    <tr><th class="mat-calendar-table-header-divider" colspan="4"></th></tr>\n  </thead>\n  <tbody mat-calendar-body\n         [rows]="_years"\n         [todayValue]="_todayYear"\n         [startValue]="_selectedYear!"\n         [endValue]="_selectedYear!"\n         [numCols]="4"\n         [cellAspectRatio]="4 / 7"\n         [activeCell]="_getActiveCell()"\n         (selectedValueChange)="_yearSelected($event)"\n         (activeDateChange)="_updateActiveDate($event)"\n         (keyup)="_handleCalendarBodyKeyup($event)"\n         (keydown)="_handleCalendarBodyKeydown($event)">\n  </tbody>\n</table>\n'
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: DateAdapter,
    decorators: [{
      type: Optional
    }]
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], {
    activeDate: [{
      type: Input
    }],
    selected: [{
      type: Input
    }],
    minDate: [{
      type: Input
    }],
    maxDate: [{
      type: Input
    }],
    dateFilter: [{
      type: Input
    }],
    dateClass: [{
      type: Input
    }],
    selectedChange: [{
      type: Output
    }],
    yearSelected: [{
      type: Output
    }],
    activeDateChange: [{
      type: Output
    }],
    _matCalendarBody: [{
      type: ViewChild,
      args: [MatCalendarBody]
    }]
  });
})();
function isSameMultiYearView(dateAdapter, date1, date2, minDate, maxDate) {
  const year1 = dateAdapter.getYear(date1);
  const year2 = dateAdapter.getYear(date2);
  const startingYear = getStartingYear(dateAdapter, minDate, maxDate);
  return Math.floor((year1 - startingYear) / yearsPerPage) === Math.floor((year2 - startingYear) / yearsPerPage);
}
function getActiveOffset(dateAdapter, activeDate, minDate, maxDate) {
  const activeYear = dateAdapter.getYear(activeDate);
  return euclideanModulo(activeYear - getStartingYear(dateAdapter, minDate, maxDate), yearsPerPage);
}
function getStartingYear(dateAdapter, minDate, maxDate) {
  let startingYear = 0;
  if (maxDate) {
    const maxYear = dateAdapter.getYear(maxDate);
    startingYear = maxYear - yearsPerPage + 1;
  } else if (minDate) {
    startingYear = dateAdapter.getYear(minDate);
  }
  return startingYear;
}
function euclideanModulo(a, b) {
  return (a % b + b) % b;
}
var _MatYearView = class _MatYearView {
  /** The date to display in this year view (everything other than the year is ignored). */
  get activeDate() {
    return this._activeDate;
  }
  set activeDate(value) {
    let oldActiveDate = this._activeDate;
    const validDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();
    this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);
    if (this._dateAdapter.getYear(oldActiveDate) !== this._dateAdapter.getYear(this._activeDate)) {
      this._init();
    }
  }
  /** The currently selected date. */
  get selected() {
    return this._selected;
  }
  set selected(value) {
    if (value instanceof DateRange) {
      this._selected = value;
    } else {
      this._selected = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    this._setSelectedMonth(value);
  }
  /** The minimum selectable date. */
  get minDate() {
    return this._minDate;
  }
  set minDate(value) {
    this._minDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  /** The maximum selectable date. */
  get maxDate() {
    return this._maxDate;
  }
  set maxDate(value) {
    this._maxDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  constructor(_changeDetectorRef, _dateFormats, _dateAdapter, _dir) {
    this._changeDetectorRef = _changeDetectorRef;
    this._dateFormats = _dateFormats;
    this._dateAdapter = _dateAdapter;
    this._dir = _dir;
    this._rerenderSubscription = Subscription.EMPTY;
    this.selectedChange = new EventEmitter();
    this.monthSelected = new EventEmitter();
    this.activeDateChange = new EventEmitter();
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!this._dateAdapter) {
        throw createMissingDateImplError("DateAdapter");
      }
      if (!this._dateFormats) {
        throw createMissingDateImplError("MAT_DATE_FORMATS");
      }
    }
    this._activeDate = this._dateAdapter.today();
  }
  ngAfterContentInit() {
    this._rerenderSubscription = this._dateAdapter.localeChanges.pipe(startWith(null)).subscribe(() => this._init());
  }
  ngOnDestroy() {
    this._rerenderSubscription.unsubscribe();
  }
  /** Handles when a new month is selected. */
  _monthSelected(event) {
    const month = event.value;
    const selectedMonth = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, 1);
    this.monthSelected.emit(selectedMonth);
    const selectedDate = this._getDateFromMonth(month);
    this.selectedChange.emit(selectedDate);
  }
  /**
   * Takes the index of a calendar body cell wrapped in an event as argument. For the date that
   * corresponds to the given cell, set `activeDate` to that date and fire `activeDateChange` with
   * that date.
   *
   * This function is used to match each component's model of the active date with the calendar
   * body cell that was focused. It updates its value of `activeDate` synchronously and updates the
   * parent's value asynchronously via the `activeDateChange` event. The child component receives an
   * updated value asynchronously via the `activeCell` Input.
   */
  _updateActiveDate(event) {
    const month = event.value;
    const oldActiveDate = this._activeDate;
    this.activeDate = this._getDateFromMonth(month);
    if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
      this.activeDateChange.emit(this.activeDate);
    }
  }
  /** Handles keydown events on the calendar body when calendar is in year view. */
  _handleCalendarBodyKeydown(event) {
    const oldActiveDate = this._activeDate;
    const isRtl = this._isRtl();
    switch (event.keyCode) {
      case LEFT_ARROW:
        this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, isRtl ? 1 : -1);
        break;
      case RIGHT_ARROW:
        this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, isRtl ? -1 : 1);
        break;
      case UP_ARROW:
        this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, -4);
        break;
      case DOWN_ARROW:
        this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, 4);
        break;
      case HOME:
        this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, -this._dateAdapter.getMonth(this._activeDate));
        break;
      case END:
        this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, 11 - this._dateAdapter.getMonth(this._activeDate));
        break;
      case PAGE_UP:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? -10 : -1);
        break;
      case PAGE_DOWN:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? 10 : 1);
        break;
      case ENTER:
      case SPACE:
        this._selectionKeyPressed = true;
        break;
      default:
        return;
    }
    if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
      this.activeDateChange.emit(this.activeDate);
      this._focusActiveCellAfterViewChecked();
    }
    event.preventDefault();
  }
  /** Handles keyup events on the calendar body when calendar is in year view. */
  _handleCalendarBodyKeyup(event) {
    if (event.keyCode === SPACE || event.keyCode === ENTER) {
      if (this._selectionKeyPressed) {
        this._monthSelected({
          value: this._dateAdapter.getMonth(this._activeDate),
          event
        });
      }
      this._selectionKeyPressed = false;
    }
  }
  /** Initializes this year view. */
  _init() {
    this._setSelectedMonth(this.selected);
    this._todayMonth = this._getMonthInCurrentYear(this._dateAdapter.today());
    this._yearLabel = this._dateAdapter.getYearName(this.activeDate);
    let monthNames = this._dateAdapter.getMonthNames("short");
    this._months = [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11]].map((row) => row.map((month) => this._createCellForMonth(month, monthNames[month])));
    this._changeDetectorRef.markForCheck();
  }
  /** Focuses the active cell after the microtask queue is empty. */
  _focusActiveCell() {
    this._matCalendarBody._focusActiveCell();
  }
  /** Schedules the matCalendarBody to focus the active cell after change detection has run */
  _focusActiveCellAfterViewChecked() {
    this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked();
  }
  /**
   * Gets the month in this year that the given Date falls on.
   * Returns null if the given Date is in another year.
   */
  _getMonthInCurrentYear(date) {
    return date && this._dateAdapter.getYear(date) == this._dateAdapter.getYear(this.activeDate) ? this._dateAdapter.getMonth(date) : null;
  }
  /**
   * Takes a month and returns a new date in the same day and year as the currently active date.
   *  The returned date will have the same month as the argument date.
   */
  _getDateFromMonth(month) {
    const normalizedDate = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, 1);
    const daysInMonth = this._dateAdapter.getNumDaysInMonth(normalizedDate);
    return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, Math.min(this._dateAdapter.getDate(this.activeDate), daysInMonth));
  }
  /** Creates an MatCalendarCell for the given month. */
  _createCellForMonth(month, monthName) {
    const date = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, 1);
    const ariaLabel = this._dateAdapter.format(date, this._dateFormats.display.monthYearA11yLabel);
    const cellClasses = this.dateClass ? this.dateClass(date, "year") : void 0;
    return new MatCalendarCell(month, monthName.toLocaleUpperCase(), ariaLabel, this._shouldEnableMonth(month), cellClasses);
  }
  /** Whether the given month is enabled. */
  _shouldEnableMonth(month) {
    const activeYear = this._dateAdapter.getYear(this.activeDate);
    if (month === void 0 || month === null || this._isYearAndMonthAfterMaxDate(activeYear, month) || this._isYearAndMonthBeforeMinDate(activeYear, month)) {
      return false;
    }
    if (!this.dateFilter) {
      return true;
    }
    const firstOfMonth = this._dateAdapter.createDate(activeYear, month, 1);
    for (let date = firstOfMonth; this._dateAdapter.getMonth(date) == month; date = this._dateAdapter.addCalendarDays(date, 1)) {
      if (this.dateFilter(date)) {
        return true;
      }
    }
    return false;
  }
  /**
   * Tests whether the combination month/year is after this.maxDate, considering
   * just the month and year of this.maxDate
   */
  _isYearAndMonthAfterMaxDate(year, month) {
    if (this.maxDate) {
      const maxYear = this._dateAdapter.getYear(this.maxDate);
      const maxMonth = this._dateAdapter.getMonth(this.maxDate);
      return year > maxYear || year === maxYear && month > maxMonth;
    }
    return false;
  }
  /**
   * Tests whether the combination month/year is before this.minDate, considering
   * just the month and year of this.minDate
   */
  _isYearAndMonthBeforeMinDate(year, month) {
    if (this.minDate) {
      const minYear = this._dateAdapter.getYear(this.minDate);
      const minMonth = this._dateAdapter.getMonth(this.minDate);
      return year < minYear || year === minYear && month < minMonth;
    }
    return false;
  }
  /** Determines whether the user has the RTL layout direction. */
  _isRtl() {
    return this._dir && this._dir.value === "rtl";
  }
  /** Sets the currently-selected month based on a model value. */
  _setSelectedMonth(value) {
    if (value instanceof DateRange) {
      this._selectedMonth = this._getMonthInCurrentYear(value.start) || this._getMonthInCurrentYear(value.end);
    } else {
      this._selectedMonth = this._getMonthInCurrentYear(value);
    }
  }
};
_MatYearView.ɵfac = function MatYearView_Factory(t) {
  return new (t || _MatYearView)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(MAT_DATE_FORMATS, 8), ɵɵdirectiveInject(DateAdapter, 8), ɵɵdirectiveInject(Directionality, 8));
};
_MatYearView.ɵcmp = ɵɵdefineComponent({
  type: _MatYearView,
  selectors: [["mat-year-view"]],
  viewQuery: function MatYearView_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(MatCalendarBody, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._matCalendarBody = _t.first);
    }
  },
  inputs: {
    activeDate: "activeDate",
    selected: "selected",
    minDate: "minDate",
    maxDate: "maxDate",
    dateFilter: "dateFilter",
    dateClass: "dateClass"
  },
  outputs: {
    selectedChange: "selectedChange",
    monthSelected: "monthSelected",
    activeDateChange: "activeDateChange"
  },
  exportAs: ["matYearView"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 5,
  vars: 9,
  consts: [["role", "grid", 1, "mat-calendar-table"], ["aria-hidden", "true", 1, "mat-calendar-table-header"], ["colspan", "4", 1, "mat-calendar-table-header-divider"], ["mat-calendar-body", "", 3, "label", "rows", "todayValue", "startValue", "endValue", "labelMinRequiredCells", "numCols", "cellAspectRatio", "activeCell", "selectedValueChange", "activeDateChange", "keyup", "keydown"]],
  template: function MatYearView_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "table", 0)(1, "thead", 1)(2, "tr");
      ɵɵelement(3, "th", 2);
      ɵɵelementEnd()();
      ɵɵelementStart(4, "tbody", 3);
      ɵɵlistener("selectedValueChange", function MatYearView_Template_tbody_selectedValueChange_4_listener($event) {
        return ctx._monthSelected($event);
      })("activeDateChange", function MatYearView_Template_tbody_activeDateChange_4_listener($event) {
        return ctx._updateActiveDate($event);
      })("keyup", function MatYearView_Template_tbody_keyup_4_listener($event) {
        return ctx._handleCalendarBodyKeyup($event);
      })("keydown", function MatYearView_Template_tbody_keydown_4_listener($event) {
        return ctx._handleCalendarBodyKeydown($event);
      });
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵadvance(4);
      ɵɵproperty("label", ctx._yearLabel)("rows", ctx._months)("todayValue", ctx._todayMonth)("startValue", ctx._selectedMonth)("endValue", ctx._selectedMonth)("labelMinRequiredCells", 2)("numCols", 4)("cellAspectRatio", 4 / 7)("activeCell", ctx._dateAdapter.getMonth(ctx.activeDate));
    }
  },
  dependencies: [MatCalendarBody],
  encapsulation: 2,
  changeDetection: 0
});
var MatYearView = _MatYearView;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatYearView, [{
    type: Component,
    args: [{
      selector: "mat-year-view",
      exportAs: "matYearView",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [MatCalendarBody],
      template: '<table class="mat-calendar-table" role="grid">\n  <thead aria-hidden="true" class="mat-calendar-table-header">\n    <tr><th class="mat-calendar-table-header-divider" colspan="4"></th></tr>\n  </thead>\n  <tbody mat-calendar-body\n         [label]="_yearLabel"\n         [rows]="_months"\n         [todayValue]="_todayMonth!"\n         [startValue]="_selectedMonth!"\n         [endValue]="_selectedMonth!"\n         [labelMinRequiredCells]="2"\n         [numCols]="4"\n         [cellAspectRatio]="4 / 7"\n         [activeCell]="_dateAdapter.getMonth(activeDate)"\n         (selectedValueChange)="_monthSelected($event)"\n         (activeDateChange)="_updateActiveDate($event)"\n         (keyup)="_handleCalendarBodyKeyup($event)"\n         (keydown)="_handleCalendarBodyKeydown($event)">\n  </tbody>\n</table>\n'
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_DATE_FORMATS]
    }]
  }, {
    type: DateAdapter,
    decorators: [{
      type: Optional
    }]
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], {
    activeDate: [{
      type: Input
    }],
    selected: [{
      type: Input
    }],
    minDate: [{
      type: Input
    }],
    maxDate: [{
      type: Input
    }],
    dateFilter: [{
      type: Input
    }],
    dateClass: [{
      type: Input
    }],
    selectedChange: [{
      type: Output
    }],
    monthSelected: [{
      type: Output
    }],
    activeDateChange: [{
      type: Output
    }],
    _matCalendarBody: [{
      type: ViewChild,
      args: [MatCalendarBody]
    }]
  });
})();
var calendarHeaderId = 1;
var _MatCalendarHeader = class _MatCalendarHeader {
  constructor(_intl, calendar, _dateAdapter, _dateFormats, changeDetectorRef) {
    this._intl = _intl;
    this.calendar = calendar;
    this._dateAdapter = _dateAdapter;
    this._dateFormats = _dateFormats;
    this._id = `mat-calendar-header-${calendarHeaderId++}`;
    this._periodButtonLabelId = `${this._id}-period-label`;
    this.calendar.stateChanges.subscribe(() => changeDetectorRef.markForCheck());
  }
  /** The display text for the current calendar view. */
  get periodButtonText() {
    if (this.calendar.currentView == "month") {
      return this._dateAdapter.format(this.calendar.activeDate, this._dateFormats.display.monthYearLabel).toLocaleUpperCase();
    }
    if (this.calendar.currentView == "year") {
      return this._dateAdapter.getYearName(this.calendar.activeDate);
    }
    return this._intl.formatYearRange(...this._formatMinAndMaxYearLabels());
  }
  /** The aria description for the current calendar view. */
  get periodButtonDescription() {
    if (this.calendar.currentView == "month") {
      return this._dateAdapter.format(this.calendar.activeDate, this._dateFormats.display.monthYearLabel).toLocaleUpperCase();
    }
    if (this.calendar.currentView == "year") {
      return this._dateAdapter.getYearName(this.calendar.activeDate);
    }
    return this._intl.formatYearRangeLabel(...this._formatMinAndMaxYearLabels());
  }
  /** The `aria-label` for changing the calendar view. */
  get periodButtonLabel() {
    return this.calendar.currentView == "month" ? this._intl.switchToMultiYearViewLabel : this._intl.switchToMonthViewLabel;
  }
  /** The label for the previous button. */
  get prevButtonLabel() {
    return {
      "month": this._intl.prevMonthLabel,
      "year": this._intl.prevYearLabel,
      "multi-year": this._intl.prevMultiYearLabel
    }[this.calendar.currentView];
  }
  /** The label for the next button. */
  get nextButtonLabel() {
    return {
      "month": this._intl.nextMonthLabel,
      "year": this._intl.nextYearLabel,
      "multi-year": this._intl.nextMultiYearLabel
    }[this.calendar.currentView];
  }
  /** Handles user clicks on the period label. */
  currentPeriodClicked() {
    this.calendar.currentView = this.calendar.currentView == "month" ? "multi-year" : "month";
  }
  /** Handles user clicks on the previous button. */
  previousClicked() {
    this.calendar.activeDate = this.calendar.currentView == "month" ? this._dateAdapter.addCalendarMonths(this.calendar.activeDate, -1) : this._dateAdapter.addCalendarYears(this.calendar.activeDate, this.calendar.currentView == "year" ? -1 : -yearsPerPage);
  }
  /** Handles user clicks on the next button. */
  nextClicked() {
    this.calendar.activeDate = this.calendar.currentView == "month" ? this._dateAdapter.addCalendarMonths(this.calendar.activeDate, 1) : this._dateAdapter.addCalendarYears(this.calendar.activeDate, this.calendar.currentView == "year" ? 1 : yearsPerPage);
  }
  /** Whether the previous period button is enabled. */
  previousEnabled() {
    if (!this.calendar.minDate) {
      return true;
    }
    return !this.calendar.minDate || !this._isSameView(this.calendar.activeDate, this.calendar.minDate);
  }
  /** Whether the next period button is enabled. */
  nextEnabled() {
    return !this.calendar.maxDate || !this._isSameView(this.calendar.activeDate, this.calendar.maxDate);
  }
  /** Whether the two dates represent the same view in the current view mode (month or year). */
  _isSameView(date1, date2) {
    if (this.calendar.currentView == "month") {
      return this._dateAdapter.getYear(date1) == this._dateAdapter.getYear(date2) && this._dateAdapter.getMonth(date1) == this._dateAdapter.getMonth(date2);
    }
    if (this.calendar.currentView == "year") {
      return this._dateAdapter.getYear(date1) == this._dateAdapter.getYear(date2);
    }
    return isSameMultiYearView(this._dateAdapter, date1, date2, this.calendar.minDate, this.calendar.maxDate);
  }
  /**
   * Format two individual labels for the minimum year and maximum year available in the multi-year
   * calendar view. Returns an array of two strings where the first string is the formatted label
   * for the minimum year, and the second string is the formatted label for the maximum year.
   */
  _formatMinAndMaxYearLabels() {
    const activeYear = this._dateAdapter.getYear(this.calendar.activeDate);
    const minYearOfPage = activeYear - getActiveOffset(this._dateAdapter, this.calendar.activeDate, this.calendar.minDate, this.calendar.maxDate);
    const maxYearOfPage = minYearOfPage + yearsPerPage - 1;
    const minYearLabel = this._dateAdapter.getYearName(this._dateAdapter.createDate(minYearOfPage, 0, 1));
    const maxYearLabel = this._dateAdapter.getYearName(this._dateAdapter.createDate(maxYearOfPage, 0, 1));
    return [minYearLabel, maxYearLabel];
  }
};
_MatCalendarHeader.ɵfac = function MatCalendarHeader_Factory(t) {
  return new (t || _MatCalendarHeader)(ɵɵdirectiveInject(MatDatepickerIntl), ɵɵdirectiveInject(forwardRef(() => MatCalendar)), ɵɵdirectiveInject(DateAdapter, 8), ɵɵdirectiveInject(MAT_DATE_FORMATS, 8), ɵɵdirectiveInject(ChangeDetectorRef));
};
_MatCalendarHeader.ɵcmp = ɵɵdefineComponent({
  type: _MatCalendarHeader,
  selectors: [["mat-calendar-header"]],
  exportAs: ["matCalendarHeader"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c12,
  decls: 13,
  vars: 11,
  consts: [[1, "mat-calendar-header"], [1, "mat-calendar-controls"], ["mat-button", "", "type", "button", "aria-live", "polite", 1, "mat-calendar-period-button", 3, "click"], ["aria-hidden", "true"], ["viewBox", "0 0 10 5", "focusable", "false", "aria-hidden", "true", 1, "mat-calendar-arrow"], ["points", "0,0 5,5 10,0"], [1, "mat-calendar-spacer"], ["mat-icon-button", "", "type", "button", 1, "mat-calendar-previous-button", 3, "disabled", "click"], ["mat-icon-button", "", "type", "button", 1, "mat-calendar-next-button", 3, "disabled", "click"], [1, "mat-calendar-hidden-label", 3, "id"]],
  template: function MatCalendarHeader_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
      ɵɵlistener("click", function MatCalendarHeader_Template_button_click_2_listener() {
        return ctx.currentPeriodClicked();
      });
      ɵɵelementStart(3, "span", 3);
      ɵɵtext(4);
      ɵɵelementEnd();
      ɵɵnamespaceSVG();
      ɵɵelementStart(5, "svg", 4);
      ɵɵelement(6, "polygon", 5);
      ɵɵelementEnd()();
      ɵɵnamespaceHTML();
      ɵɵelement(7, "div", 6);
      ɵɵprojection(8);
      ɵɵelementStart(9, "button", 7);
      ɵɵlistener("click", function MatCalendarHeader_Template_button_click_9_listener() {
        return ctx.previousClicked();
      });
      ɵɵelementEnd();
      ɵɵelementStart(10, "button", 8);
      ɵɵlistener("click", function MatCalendarHeader_Template_button_click_10_listener() {
        return ctx.nextClicked();
      });
      ɵɵelementEnd()()();
      ɵɵelementStart(11, "label", 9);
      ɵɵtext(12);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance(2);
      ɵɵattribute("aria-label", ctx.periodButtonLabel)("aria-describedby", ctx._periodButtonLabelId);
      ɵɵadvance(2);
      ɵɵtextInterpolate(ctx.periodButtonText);
      ɵɵadvance();
      ɵɵclassProp("mat-calendar-invert", ctx.calendar.currentView !== "month");
      ɵɵadvance(4);
      ɵɵproperty("disabled", !ctx.previousEnabled());
      ɵɵattribute("aria-label", ctx.prevButtonLabel);
      ɵɵadvance();
      ɵɵproperty("disabled", !ctx.nextEnabled());
      ɵɵattribute("aria-label", ctx.nextButtonLabel);
      ɵɵadvance();
      ɵɵproperty("id", ctx._periodButtonLabelId);
      ɵɵadvance();
      ɵɵtextInterpolate(ctx.periodButtonDescription);
    }
  },
  dependencies: [MatButton, MatIconButton],
  encapsulation: 2,
  changeDetection: 0
});
var MatCalendarHeader = _MatCalendarHeader;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCalendarHeader, [{
    type: Component,
    args: [{
      selector: "mat-calendar-header",
      exportAs: "matCalendarHeader",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [MatButton, MatIconButton],
      template: `<div class="mat-calendar-header">
  <div class="mat-calendar-controls">
    <button mat-button type="button" class="mat-calendar-period-button"
            (click)="currentPeriodClicked()" [attr.aria-label]="periodButtonLabel"
            [attr.aria-describedby]="_periodButtonLabelId" aria-live="polite">
      <span aria-hidden="true">{{periodButtonText}}</span>
      <svg class="mat-calendar-arrow" [class.mat-calendar-invert]="calendar.currentView !== 'month'"
           viewBox="0 0 10 5" focusable="false" aria-hidden="true">
           <polygon points="0,0 5,5 10,0"/>
      </svg>
    </button>

    <div class="mat-calendar-spacer"></div>

    <ng-content></ng-content>

    <button mat-icon-button type="button" class="mat-calendar-previous-button"
            [disabled]="!previousEnabled()" (click)="previousClicked()"
            [attr.aria-label]="prevButtonLabel">
    </button>

    <button mat-icon-button type="button" class="mat-calendar-next-button"
            [disabled]="!nextEnabled()" (click)="nextClicked()"
            [attr.aria-label]="nextButtonLabel">
    </button>
  </div>
</div>
<label [id]="_periodButtonLabelId" class="mat-calendar-hidden-label">{{periodButtonDescription}}</label>
`
    }]
  }], () => [{
    type: MatDatepickerIntl
  }, {
    type: MatCalendar,
    decorators: [{
      type: Inject,
      args: [forwardRef(() => MatCalendar)]
    }]
  }, {
    type: DateAdapter,
    decorators: [{
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_DATE_FORMATS]
    }]
  }, {
    type: ChangeDetectorRef
  }], null);
})();
var _MatCalendar = class _MatCalendar {
  /** A date representing the period (month or year) to start the calendar in. */
  get startAt() {
    return this._startAt;
  }
  set startAt(value) {
    this._startAt = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  /** The currently selected date. */
  get selected() {
    return this._selected;
  }
  set selected(value) {
    if (value instanceof DateRange) {
      this._selected = value;
    } else {
      this._selected = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
  }
  /** The minimum selectable date. */
  get minDate() {
    return this._minDate;
  }
  set minDate(value) {
    this._minDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  /** The maximum selectable date. */
  get maxDate() {
    return this._maxDate;
  }
  set maxDate(value) {
    this._maxDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  /**
   * The current active date. This determines which time period is shown and which date is
   * highlighted when using keyboard navigation.
   */
  get activeDate() {
    return this._clampedActiveDate;
  }
  set activeDate(value) {
    this._clampedActiveDate = this._dateAdapter.clampDate(value, this.minDate, this.maxDate);
    this.stateChanges.next();
    this._changeDetectorRef.markForCheck();
  }
  /** Whether the calendar is in month view. */
  get currentView() {
    return this._currentView;
  }
  set currentView(value) {
    const viewChangedResult = this._currentView !== value ? value : null;
    this._currentView = value;
    this._moveFocusOnNextTick = true;
    this._changeDetectorRef.markForCheck();
    if (viewChangedResult) {
      this.viewChanged.emit(viewChangedResult);
    }
  }
  constructor(_intl, _dateAdapter, _dateFormats, _changeDetectorRef) {
    this._dateAdapter = _dateAdapter;
    this._dateFormats = _dateFormats;
    this._changeDetectorRef = _changeDetectorRef;
    this._moveFocusOnNextTick = false;
    this.startView = "month";
    this.selectedChange = new EventEmitter();
    this.yearSelected = new EventEmitter();
    this.monthSelected = new EventEmitter();
    this.viewChanged = new EventEmitter(true);
    this._userSelection = new EventEmitter();
    this._userDragDrop = new EventEmitter();
    this._activeDrag = null;
    this.stateChanges = new Subject();
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!this._dateAdapter) {
        throw createMissingDateImplError("DateAdapter");
      }
      if (!this._dateFormats) {
        throw createMissingDateImplError("MAT_DATE_FORMATS");
      }
    }
    this._intlChanges = _intl.changes.subscribe(() => {
      _changeDetectorRef.markForCheck();
      this.stateChanges.next();
    });
  }
  ngAfterContentInit() {
    this._calendarHeaderPortal = new ComponentPortal(this.headerComponent || MatCalendarHeader);
    this.activeDate = this.startAt || this._dateAdapter.today();
    this._currentView = this.startView;
  }
  ngAfterViewChecked() {
    if (this._moveFocusOnNextTick) {
      this._moveFocusOnNextTick = false;
      this.focusActiveCell();
    }
  }
  ngOnDestroy() {
    this._intlChanges.unsubscribe();
    this.stateChanges.complete();
  }
  ngOnChanges(changes) {
    const minDateChange = changes["minDate"] && !this._dateAdapter.sameDate(changes["minDate"].previousValue, changes["minDate"].currentValue) ? changes["minDate"] : void 0;
    const maxDateChange = changes["maxDate"] && !this._dateAdapter.sameDate(changes["maxDate"].previousValue, changes["maxDate"].currentValue) ? changes["maxDate"] : void 0;
    const change = minDateChange || maxDateChange || changes["dateFilter"];
    if (change && !change.firstChange) {
      const view = this._getCurrentViewComponent();
      if (view) {
        this._changeDetectorRef.detectChanges();
        view._init();
      }
    }
    this.stateChanges.next();
  }
  /** Focuses the active date. */
  focusActiveCell() {
    this._getCurrentViewComponent()._focusActiveCell(false);
  }
  /** Updates today's date after an update of the active date */
  updateTodaysDate() {
    this._getCurrentViewComponent()._init();
  }
  /** Handles date selection in the month view. */
  _dateSelected(event) {
    const date = event.value;
    if (this.selected instanceof DateRange || date && !this._dateAdapter.sameDate(date, this.selected)) {
      this.selectedChange.emit(date);
    }
    this._userSelection.emit(event);
  }
  /** Handles year selection in the multiyear view. */
  _yearSelectedInMultiYearView(normalizedYear) {
    this.yearSelected.emit(normalizedYear);
  }
  /** Handles month selection in the year view. */
  _monthSelectedInYearView(normalizedMonth) {
    this.monthSelected.emit(normalizedMonth);
  }
  /** Handles year/month selection in the multi-year/year views. */
  _goToDateInView(date, view) {
    this.activeDate = date;
    this.currentView = view;
  }
  /** Called when the user starts dragging to change a date range. */
  _dragStarted(event) {
    this._activeDrag = event;
  }
  /**
   * Called when a drag completes. It may end in cancelation or in the selection
   * of a new range.
   */
  _dragEnded(event) {
    if (!this._activeDrag)
      return;
    if (event.value) {
      this._userDragDrop.emit(event);
    }
    this._activeDrag = null;
  }
  /** Returns the component instance that corresponds to the current calendar view. */
  _getCurrentViewComponent() {
    return this.monthView || this.yearView || this.multiYearView;
  }
};
_MatCalendar.ɵfac = function MatCalendar_Factory(t) {
  return new (t || _MatCalendar)(ɵɵdirectiveInject(MatDatepickerIntl), ɵɵdirectiveInject(DateAdapter, 8), ɵɵdirectiveInject(MAT_DATE_FORMATS, 8), ɵɵdirectiveInject(ChangeDetectorRef));
};
_MatCalendar.ɵcmp = ɵɵdefineComponent({
  type: _MatCalendar,
  selectors: [["mat-calendar"]],
  viewQuery: function MatCalendar_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(MatMonthView, 5);
      ɵɵviewQuery(MatYearView, 5);
      ɵɵviewQuery(MatMultiYearView, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.monthView = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.yearView = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.multiYearView = _t.first);
    }
  },
  hostAttrs: [1, "mat-calendar"],
  inputs: {
    headerComponent: "headerComponent",
    startAt: "startAt",
    startView: "startView",
    selected: "selected",
    minDate: "minDate",
    maxDate: "maxDate",
    dateFilter: "dateFilter",
    dateClass: "dateClass",
    comparisonStart: "comparisonStart",
    comparisonEnd: "comparisonEnd",
    startDateAccessibleName: "startDateAccessibleName",
    endDateAccessibleName: "endDateAccessibleName"
  },
  outputs: {
    selectedChange: "selectedChange",
    yearSelected: "yearSelected",
    monthSelected: "monthSelected",
    viewChanged: "viewChanged",
    _userSelection: "_userSelection",
    _userDragDrop: "_userDragDrop"
  },
  exportAs: ["matCalendar"],
  standalone: true,
  features: [ɵɵProvidersFeature([MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 5,
  vars: 2,
  consts: [[3, "cdkPortalOutlet"], ["cdkMonitorSubtreeFocus", "", "tabindex", "-1", 1, "mat-calendar-content"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass", "comparisonStart", "comparisonEnd", "startDateAccessibleName", "endDateAccessibleName", "activeDrag", "activeDateChange", "_userSelection", "dragStarted", "dragEnded"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass", "activeDateChange", "monthSelected", "selectedChange"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass", "activeDateChange", "yearSelected", "selectedChange"]],
  template: function MatCalendar_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, MatCalendar_ng_template_0_Template, 0, 0, "ng-template", 0);
      ɵɵelementStart(1, "div", 1);
      ɵɵtemplate(2, MatCalendar_Case_2_Template, 1, 11)(3, MatCalendar_Case_3_Template, 1, 6)(4, MatCalendar_Case_4_Template, 1, 6);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      let MatCalendar_contFlowTmp;
      ɵɵproperty("cdkPortalOutlet", ctx._calendarHeaderPortal);
      ɵɵadvance(2);
      ɵɵconditional(2, (MatCalendar_contFlowTmp = ctx.currentView) === "month" ? 2 : MatCalendar_contFlowTmp === "year" ? 3 : MatCalendar_contFlowTmp === "multi-year" ? 4 : -1);
    }
  },
  dependencies: [CdkPortalOutlet, CdkMonitorFocus, MatMonthView, MatYearView, MatMultiYearView],
  styles: ['.mat-calendar{display:block;font-family:var(--mat-datepicker-calendar-text-font);font-size:var(--mat-datepicker-calendar-text-size)}.mat-calendar-header{padding:8px 8px 0 8px}.mat-calendar-content{padding:0 8px 8px 8px;outline:none}.mat-calendar-controls{display:flex;align-items:center;margin:5% calc(4.7142857143% - 16px)}.mat-calendar-spacer{flex:1 1 auto}.mat-calendar-period-button{min-width:0;margin:0 8px;font-size:var(--mat-datepicker-calendar-period-button-text-size);font-weight:var(--mat-datepicker-calendar-period-button-text-weight);--mdc-text-button-label-text-color:var(--mat-datepicker-calendar-period-button-text-color)}.mat-calendar-arrow{display:inline-block;width:10px;height:5px;margin:0 0 0 5px;vertical-align:middle;fill:var(--mat-datepicker-calendar-period-button-icon-color)}.mat-calendar-arrow.mat-calendar-invert{transform:rotate(180deg)}[dir=rtl] .mat-calendar-arrow{margin:0 5px 0 0}.cdk-high-contrast-active .mat-calendar-arrow{fill:CanvasText}.mat-calendar-previous-button,.mat-calendar-next-button{position:relative}.mat-datepicker-content .mat-calendar-previous-button:not(.mat-mdc-button-disabled),.mat-datepicker-content .mat-calendar-next-button:not(.mat-mdc-button-disabled){color:var(--mat-datepicker-calendar-navigation-button-icon-color)}.mat-calendar-previous-button::after,.mat-calendar-next-button::after{top:0;left:0;right:0;bottom:0;position:absolute;content:"";margin:15.5px;border:0 solid currentColor;border-top-width:2px}[dir=rtl] .mat-calendar-previous-button,[dir=rtl] .mat-calendar-next-button{transform:rotate(180deg)}.mat-calendar-previous-button::after{border-left-width:2px;transform:translateX(2px) rotate(-45deg)}.mat-calendar-next-button::after{border-right-width:2px;transform:translateX(-2px) rotate(45deg)}.mat-calendar-table{border-spacing:0;border-collapse:collapse;width:100%}.mat-calendar-table-header th{text-align:center;padding:0 0 8px 0;color:var(--mat-datepicker-calendar-header-text-color);font-size:var(--mat-datepicker-calendar-header-text-size);font-weight:var(--mat-datepicker-calendar-header-text-weight)}.mat-calendar-table-header-divider{position:relative;height:1px}.mat-calendar-table-header-divider::after{content:"";position:absolute;top:0;left:-8px;right:-8px;height:1px;background:var(--mat-datepicker-calendar-header-divider-color)}.mat-calendar-body-cell-content::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px)*-1)}.mat-calendar-body-cell:focus .mat-focus-indicator::before{content:""}.mat-calendar-hidden-label{display:none}'],
  encapsulation: 2,
  changeDetection: 0
});
var MatCalendar = _MatCalendar;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCalendar, [{
    type: Component,
    args: [{
      selector: "mat-calendar",
      host: {
        "class": "mat-calendar"
      },
      exportAs: "matCalendar",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER],
      standalone: true,
      imports: [CdkPortalOutlet, CdkMonitorFocus, MatMonthView, MatYearView, MatMultiYearView],
      template: `<ng-template [cdkPortalOutlet]="_calendarHeaderPortal"></ng-template>

<div class="mat-calendar-content" cdkMonitorSubtreeFocus tabindex="-1">
  @switch (currentView) {
    @case ('month') {
        <mat-month-view
            [(activeDate)]="activeDate"
            [selected]="selected"
            [dateFilter]="dateFilter"
            [maxDate]="maxDate"
            [minDate]="minDate"
            [dateClass]="dateClass"
            [comparisonStart]="comparisonStart"
            [comparisonEnd]="comparisonEnd"
            [startDateAccessibleName]="startDateAccessibleName"
            [endDateAccessibleName]="endDateAccessibleName"
            (_userSelection)="_dateSelected($event)"
            (dragStarted)="_dragStarted($event)"
            (dragEnded)="_dragEnded($event)"
            [activeDrag]="_activeDrag"></mat-month-view>
    }

    @case ('year') {
        <mat-year-view
            [(activeDate)]="activeDate"
            [selected]="selected"
            [dateFilter]="dateFilter"
            [maxDate]="maxDate"
            [minDate]="minDate"
            [dateClass]="dateClass"
            (monthSelected)="_monthSelectedInYearView($event)"
            (selectedChange)="_goToDateInView($event, 'month')"></mat-year-view>
    }

    @case ('multi-year') {
        <mat-multi-year-view
            [(activeDate)]="activeDate"
            [selected]="selected"
            [dateFilter]="dateFilter"
            [maxDate]="maxDate"
            [minDate]="minDate"
            [dateClass]="dateClass"
            (yearSelected)="_yearSelectedInMultiYearView($event)"
            (selectedChange)="_goToDateInView($event, 'year')"></mat-multi-year-view>
    }
  }
</div>
`,
      styles: ['.mat-calendar{display:block;font-family:var(--mat-datepicker-calendar-text-font);font-size:var(--mat-datepicker-calendar-text-size)}.mat-calendar-header{padding:8px 8px 0 8px}.mat-calendar-content{padding:0 8px 8px 8px;outline:none}.mat-calendar-controls{display:flex;align-items:center;margin:5% calc(4.7142857143% - 16px)}.mat-calendar-spacer{flex:1 1 auto}.mat-calendar-period-button{min-width:0;margin:0 8px;font-size:var(--mat-datepicker-calendar-period-button-text-size);font-weight:var(--mat-datepicker-calendar-period-button-text-weight);--mdc-text-button-label-text-color:var(--mat-datepicker-calendar-period-button-text-color)}.mat-calendar-arrow{display:inline-block;width:10px;height:5px;margin:0 0 0 5px;vertical-align:middle;fill:var(--mat-datepicker-calendar-period-button-icon-color)}.mat-calendar-arrow.mat-calendar-invert{transform:rotate(180deg)}[dir=rtl] .mat-calendar-arrow{margin:0 5px 0 0}.cdk-high-contrast-active .mat-calendar-arrow{fill:CanvasText}.mat-calendar-previous-button,.mat-calendar-next-button{position:relative}.mat-datepicker-content .mat-calendar-previous-button:not(.mat-mdc-button-disabled),.mat-datepicker-content .mat-calendar-next-button:not(.mat-mdc-button-disabled){color:var(--mat-datepicker-calendar-navigation-button-icon-color)}.mat-calendar-previous-button::after,.mat-calendar-next-button::after{top:0;left:0;right:0;bottom:0;position:absolute;content:"";margin:15.5px;border:0 solid currentColor;border-top-width:2px}[dir=rtl] .mat-calendar-previous-button,[dir=rtl] .mat-calendar-next-button{transform:rotate(180deg)}.mat-calendar-previous-button::after{border-left-width:2px;transform:translateX(2px) rotate(-45deg)}.mat-calendar-next-button::after{border-right-width:2px;transform:translateX(-2px) rotate(45deg)}.mat-calendar-table{border-spacing:0;border-collapse:collapse;width:100%}.mat-calendar-table-header th{text-align:center;padding:0 0 8px 0;color:var(--mat-datepicker-calendar-header-text-color);font-size:var(--mat-datepicker-calendar-header-text-size);font-weight:var(--mat-datepicker-calendar-header-text-weight)}.mat-calendar-table-header-divider{position:relative;height:1px}.mat-calendar-table-header-divider::after{content:"";position:absolute;top:0;left:-8px;right:-8px;height:1px;background:var(--mat-datepicker-calendar-header-divider-color)}.mat-calendar-body-cell-content::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px)*-1)}.mat-calendar-body-cell:focus .mat-focus-indicator::before{content:""}.mat-calendar-hidden-label{display:none}']
    }]
  }], () => [{
    type: MatDatepickerIntl
  }, {
    type: DateAdapter,
    decorators: [{
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_DATE_FORMATS]
    }]
  }, {
    type: ChangeDetectorRef
  }], {
    headerComponent: [{
      type: Input
    }],
    startAt: [{
      type: Input
    }],
    startView: [{
      type: Input
    }],
    selected: [{
      type: Input
    }],
    minDate: [{
      type: Input
    }],
    maxDate: [{
      type: Input
    }],
    dateFilter: [{
      type: Input
    }],
    dateClass: [{
      type: Input
    }],
    comparisonStart: [{
      type: Input
    }],
    comparisonEnd: [{
      type: Input
    }],
    startDateAccessibleName: [{
      type: Input
    }],
    endDateAccessibleName: [{
      type: Input
    }],
    selectedChange: [{
      type: Output
    }],
    yearSelected: [{
      type: Output
    }],
    monthSelected: [{
      type: Output
    }],
    viewChanged: [{
      type: Output
    }],
    _userSelection: [{
      type: Output
    }],
    _userDragDrop: [{
      type: Output
    }],
    monthView: [{
      type: ViewChild,
      args: [MatMonthView]
    }],
    yearView: [{
      type: ViewChild,
      args: [MatYearView]
    }],
    multiYearView: [{
      type: ViewChild,
      args: [MatMultiYearView]
    }]
  });
})();
var matDatepickerAnimations = {
  /** Transforms the height of the datepicker's calendar. */
  transformPanel: trigger("transformPanel", [transition("void => enter-dropdown", animate("120ms cubic-bezier(0, 0, 0.2, 1)", keyframes([style({
    opacity: 0,
    transform: "scale(1, 0.8)"
  }), style({
    opacity: 1,
    transform: "scale(1, 1)"
  })]))), transition("void => enter-dialog", animate("150ms cubic-bezier(0, 0, 0.2, 1)", keyframes([style({
    opacity: 0,
    transform: "scale(0.7)"
  }), style({
    transform: "none",
    opacity: 1
  })]))), transition("* => void", animate("100ms linear", style({
    opacity: 0
  })))]),
  /** Fades in the content of the calendar. */
  fadeInCalendar: trigger("fadeInCalendar", [
    state("void", style({
      opacity: 0
    })),
    state("enter", style({
      opacity: 1
    })),
    // TODO(crisbeto): this animation should be removed since it isn't quite on spec, but we
    // need to keep it until #12440 gets in, otherwise the exit animation will look glitchy.
    transition("void => *", animate("120ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)"))
  ])
};
var datepickerUid = 0;
var MAT_DATEPICKER_SCROLL_STRATEGY = new InjectionToken("mat-datepicker-scroll-strategy", {
  providedIn: "root",
  factory: () => {
    const overlay = inject(Overlay);
    return () => overlay.scrollStrategies.reposition();
  }
});
function MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY(overlay) {
  return () => overlay.scrollStrategies.reposition();
}
var MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER = {
  provide: MAT_DATEPICKER_SCROLL_STRATEGY,
  deps: [Overlay],
  useFactory: MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY
};
var _MatDatepickerContent = class _MatDatepickerContent {
  constructor(_elementRef, _changeDetectorRef, _globalModel, _dateAdapter, _rangeSelectionStrategy, intl) {
    this._elementRef = _elementRef;
    this._changeDetectorRef = _changeDetectorRef;
    this._globalModel = _globalModel;
    this._dateAdapter = _dateAdapter;
    this._rangeSelectionStrategy = _rangeSelectionStrategy;
    this._subscriptions = new Subscription();
    this._animationDone = new Subject();
    this._isAnimating = false;
    this._actionsPortal = null;
    this._closeButtonText = intl.closeCalendarLabel;
  }
  ngOnInit() {
    this._animationState = this.datepicker.touchUi ? "enter-dialog" : "enter-dropdown";
  }
  ngAfterViewInit() {
    this._subscriptions.add(this.datepicker.stateChanges.subscribe(() => {
      this._changeDetectorRef.markForCheck();
    }));
    this._calendar.focusActiveCell();
  }
  ngOnDestroy() {
    this._subscriptions.unsubscribe();
    this._animationDone.complete();
  }
  _handleUserSelection(event) {
    const selection = this._model.selection;
    const value = event.value;
    const isRange = selection instanceof DateRange;
    if (isRange && this._rangeSelectionStrategy) {
      const newSelection = this._rangeSelectionStrategy.selectionFinished(value, selection, event.event);
      this._model.updateSelection(newSelection, this);
    } else if (value && (isRange || !this._dateAdapter.sameDate(value, selection))) {
      this._model.add(value);
    }
    if ((!this._model || this._model.isComplete()) && !this._actionsPortal) {
      this.datepicker.close();
    }
  }
  _handleUserDragDrop(event) {
    this._model.updateSelection(event.value, this);
  }
  _startExitAnimation() {
    this._animationState = "void";
    this._changeDetectorRef.markForCheck();
  }
  _handleAnimationEvent(event) {
    this._isAnimating = event.phaseName === "start";
    if (!this._isAnimating) {
      this._animationDone.next();
    }
  }
  _getSelected() {
    return this._model.selection;
  }
  /** Applies the current pending selection to the global model. */
  _applyPendingSelection() {
    if (this._model !== this._globalModel) {
      this._globalModel.updateSelection(this._model.selection, this);
    }
  }
  /**
   * Assigns a new portal containing the datepicker actions.
   * @param portal Portal with the actions to be assigned.
   * @param forceRerender Whether a re-render of the portal should be triggered. This isn't
   * necessary if the portal is assigned during initialization, but it may be required if it's
   * added at a later point.
   */
  _assignActions(portal, forceRerender) {
    this._model = portal ? this._globalModel.clone() : this._globalModel;
    this._actionsPortal = portal;
    if (forceRerender) {
      this._changeDetectorRef.detectChanges();
    }
  }
};
_MatDatepickerContent.ɵfac = function MatDatepickerContent_Factory(t) {
  return new (t || _MatDatepickerContent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(MatDateSelectionModel), ɵɵdirectiveInject(DateAdapter), ɵɵdirectiveInject(MAT_DATE_RANGE_SELECTION_STRATEGY, 8), ɵɵdirectiveInject(MatDatepickerIntl));
};
_MatDatepickerContent.ɵcmp = ɵɵdefineComponent({
  type: _MatDatepickerContent,
  selectors: [["mat-datepicker-content"]],
  viewQuery: function MatDatepickerContent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(MatCalendar, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._calendar = _t.first);
    }
  },
  hostAttrs: [1, "mat-datepicker-content"],
  hostVars: 5,
  hostBindings: function MatDatepickerContent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵsyntheticHostListener("@transformPanel.start", function MatDatepickerContent_animation_transformPanel_start_HostBindingHandler($event) {
        return ctx._handleAnimationEvent($event);
      })("@transformPanel.done", function MatDatepickerContent_animation_transformPanel_done_HostBindingHandler($event) {
        return ctx._handleAnimationEvent($event);
      });
    }
    if (rf & 2) {
      ɵɵsyntheticHostProperty("@transformPanel", ctx._animationState);
      ɵɵclassMap(ctx.color ? "mat-" + ctx.color : "");
      ɵɵclassProp("mat-datepicker-content-touch", ctx.datepicker.touchUi);
    }
  },
  inputs: {
    color: "color"
  },
  exportAs: ["matDatepickerContent"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 5,
  vars: 26,
  consts: [["cdkTrapFocus", "", "role", "dialog", 1, "mat-datepicker-content-container"], [3, "id", "ngClass", "startAt", "startView", "minDate", "maxDate", "dateFilter", "headerComponent", "selected", "dateClass", "comparisonStart", "comparisonEnd", "startDateAccessibleName", "endDateAccessibleName", "yearSelected", "monthSelected", "viewChanged", "_userSelection", "_userDragDrop"], [3, "cdkPortalOutlet"], ["type", "button", "mat-raised-button", "", 1, "mat-datepicker-close-button", 3, "color", "focus", "blur", "click"]],
  template: function MatDatepickerContent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0)(1, "mat-calendar", 1);
      ɵɵlistener("yearSelected", function MatDatepickerContent_Template_mat_calendar_yearSelected_1_listener($event) {
        return ctx.datepicker._selectYear($event);
      })("monthSelected", function MatDatepickerContent_Template_mat_calendar_monthSelected_1_listener($event) {
        return ctx.datepicker._selectMonth($event);
      })("viewChanged", function MatDatepickerContent_Template_mat_calendar_viewChanged_1_listener($event) {
        return ctx.datepicker._viewChanged($event);
      })("_userSelection", function MatDatepickerContent_Template_mat_calendar__userSelection_1_listener($event) {
        return ctx._handleUserSelection($event);
      })("_userDragDrop", function MatDatepickerContent_Template_mat_calendar__userDragDrop_1_listener($event) {
        return ctx._handleUserDragDrop($event);
      });
      ɵɵelementEnd();
      ɵɵtemplate(2, MatDatepickerContent_ng_template_2_Template, 0, 0, "ng-template", 2);
      ɵɵelementStart(3, "button", 3);
      ɵɵlistener("focus", function MatDatepickerContent_Template_button_focus_3_listener() {
        return ctx._closeButtonFocused = true;
      })("blur", function MatDatepickerContent_Template_button_blur_3_listener() {
        return ctx._closeButtonFocused = false;
      })("click", function MatDatepickerContent_Template_button_click_3_listener() {
        return ctx.datepicker.close();
      });
      ɵɵtext(4);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      let tmp_3_0;
      ɵɵclassProp("mat-datepicker-content-container-with-custom-header", ctx.datepicker.calendarHeaderComponent)("mat-datepicker-content-container-with-actions", ctx._actionsPortal);
      ɵɵattribute("aria-modal", true)("aria-labelledby", (tmp_3_0 = ctx._dialogLabelId) !== null && tmp_3_0 !== void 0 ? tmp_3_0 : void 0);
      ɵɵadvance();
      ɵɵproperty("id", ctx.datepicker.id)("ngClass", ctx.datepicker.panelClass)("startAt", ctx.datepicker.startAt)("startView", ctx.datepicker.startView)("minDate", ctx.datepicker._getMinDate())("maxDate", ctx.datepicker._getMaxDate())("dateFilter", ctx.datepicker._getDateFilter())("headerComponent", ctx.datepicker.calendarHeaderComponent)("selected", ctx._getSelected())("dateClass", ctx.datepicker.dateClass)("comparisonStart", ctx.comparisonStart)("comparisonEnd", ctx.comparisonEnd)("@fadeInCalendar", "enter")("startDateAccessibleName", ctx.startDateAccessibleName)("endDateAccessibleName", ctx.endDateAccessibleName);
      ɵɵadvance();
      ɵɵproperty("cdkPortalOutlet", ctx._actionsPortal);
      ɵɵadvance();
      ɵɵclassProp("cdk-visually-hidden", !ctx._closeButtonFocused);
      ɵɵproperty("color", ctx.color || "primary");
      ɵɵadvance();
      ɵɵtextInterpolate(ctx._closeButtonText);
    }
  },
  dependencies: [CdkTrapFocus, MatCalendar, NgClass, CdkPortalOutlet, MatButton],
  styles: [".mat-datepicker-content{display:block;border-radius:4px;background-color:var(--mat-datepicker-calendar-container-background-color);color:var(--mat-datepicker-calendar-container-text-color);box-shadow:var(--mat-datepicker-calendar-container-elevation-shadow);border-radius:var(--mat-datepicker-calendar-container-shape)}.mat-datepicker-content .mat-calendar{width:296px;height:354px}.mat-datepicker-content .mat-datepicker-content-container-with-custom-header .mat-calendar{height:auto}.mat-datepicker-content .mat-datepicker-close-button{position:absolute;top:100%;left:0;margin-top:8px}.ng-animating .mat-datepicker-content .mat-datepicker-close-button{display:none}.mat-datepicker-content-container{display:flex;flex-direction:column;justify-content:space-between}.mat-datepicker-content-touch{display:block;max-height:80vh;box-shadow:var(--mat-datepicker-calendar-container-touch-elevation-shadow);border-radius:var(--mat-datepicker-calendar-container-touch-shape);position:relative;overflow:visible}.mat-datepicker-content-touch .mat-datepicker-content-container{min-height:312px;max-height:788px;min-width:250px;max-width:750px}.mat-datepicker-content-touch .mat-calendar{width:100%;height:auto}@media all and (orientation: landscape){.mat-datepicker-content-touch .mat-datepicker-content-container{width:64vh;height:80vh}}@media all and (orientation: portrait){.mat-datepicker-content-touch .mat-datepicker-content-container{width:80vw;height:100vw}.mat-datepicker-content-touch .mat-datepicker-content-container-with-actions{height:115vw}}"],
  encapsulation: 2,
  data: {
    animation: [matDatepickerAnimations.transformPanel, matDatepickerAnimations.fadeInCalendar]
  },
  changeDetection: 0
});
var MatDatepickerContent = _MatDatepickerContent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDatepickerContent, [{
    type: Component,
    args: [{
      selector: "mat-datepicker-content",
      host: {
        "class": "mat-datepicker-content",
        "[class]": 'color ? "mat-" + color : ""',
        "[@transformPanel]": "_animationState",
        "(@transformPanel.start)": "_handleAnimationEvent($event)",
        "(@transformPanel.done)": "_handleAnimationEvent($event)",
        "[class.mat-datepicker-content-touch]": "datepicker.touchUi"
      },
      animations: [matDatepickerAnimations.transformPanel, matDatepickerAnimations.fadeInCalendar],
      exportAs: "matDatepickerContent",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [CdkTrapFocus, MatCalendar, NgClass, CdkPortalOutlet, MatButton],
      template: `<div
  cdkTrapFocus
  role="dialog"
  [attr.aria-modal]="true"
  [attr.aria-labelledby]="_dialogLabelId ?? undefined"
  class="mat-datepicker-content-container"
  [class.mat-datepicker-content-container-with-custom-header]="datepicker.calendarHeaderComponent"
  [class.mat-datepicker-content-container-with-actions]="_actionsPortal">
  <mat-calendar
    [id]="datepicker.id"
    [ngClass]="datepicker.panelClass"
    [startAt]="datepicker.startAt"
    [startView]="datepicker.startView"
    [minDate]="datepicker._getMinDate()"
    [maxDate]="datepicker._getMaxDate()"
    [dateFilter]="datepicker._getDateFilter()"
    [headerComponent]="datepicker.calendarHeaderComponent"
    [selected]="_getSelected()"
    [dateClass]="datepicker.dateClass"
    [comparisonStart]="comparisonStart"
    [comparisonEnd]="comparisonEnd"
    [@fadeInCalendar]="'enter'"
    [startDateAccessibleName]="startDateAccessibleName"
    [endDateAccessibleName]="endDateAccessibleName"
    (yearSelected)="datepicker._selectYear($event)"
    (monthSelected)="datepicker._selectMonth($event)"
    (viewChanged)="datepicker._viewChanged($event)"
    (_userSelection)="_handleUserSelection($event)"
    (_userDragDrop)="_handleUserDragDrop($event)"></mat-calendar>

  <ng-template [cdkPortalOutlet]="_actionsPortal"></ng-template>

  <!-- Invisible close button for screen reader users. -->
  <button
    type="button"
    mat-raised-button
    [color]="color || 'primary'"
    class="mat-datepicker-close-button"
    [class.cdk-visually-hidden]="!_closeButtonFocused"
    (focus)="_closeButtonFocused = true"
    (blur)="_closeButtonFocused = false"
    (click)="datepicker.close()">{{ _closeButtonText }}</button>
</div>
`,
      styles: [".mat-datepicker-content{display:block;border-radius:4px;background-color:var(--mat-datepicker-calendar-container-background-color);color:var(--mat-datepicker-calendar-container-text-color);box-shadow:var(--mat-datepicker-calendar-container-elevation-shadow);border-radius:var(--mat-datepicker-calendar-container-shape)}.mat-datepicker-content .mat-calendar{width:296px;height:354px}.mat-datepicker-content .mat-datepicker-content-container-with-custom-header .mat-calendar{height:auto}.mat-datepicker-content .mat-datepicker-close-button{position:absolute;top:100%;left:0;margin-top:8px}.ng-animating .mat-datepicker-content .mat-datepicker-close-button{display:none}.mat-datepicker-content-container{display:flex;flex-direction:column;justify-content:space-between}.mat-datepicker-content-touch{display:block;max-height:80vh;box-shadow:var(--mat-datepicker-calendar-container-touch-elevation-shadow);border-radius:var(--mat-datepicker-calendar-container-touch-shape);position:relative;overflow:visible}.mat-datepicker-content-touch .mat-datepicker-content-container{min-height:312px;max-height:788px;min-width:250px;max-width:750px}.mat-datepicker-content-touch .mat-calendar{width:100%;height:auto}@media all and (orientation: landscape){.mat-datepicker-content-touch .mat-datepicker-content-container{width:64vh;height:80vh}}@media all and (orientation: portrait){.mat-datepicker-content-touch .mat-datepicker-content-container{width:80vw;height:100vw}.mat-datepicker-content-touch .mat-datepicker-content-container-with-actions{height:115vw}}"]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: MatDateSelectionModel
  }, {
    type: DateAdapter
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_DATE_RANGE_SELECTION_STRATEGY]
    }]
  }, {
    type: MatDatepickerIntl
  }], {
    _calendar: [{
      type: ViewChild,
      args: [MatCalendar]
    }],
    color: [{
      type: Input
    }]
  });
})();
var _MatDatepickerBase = class _MatDatepickerBase {
  /** The date to open the calendar to initially. */
  get startAt() {
    return this._startAt || (this.datepickerInput ? this.datepickerInput.getStartValue() : null);
  }
  set startAt(value) {
    this._startAt = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  /** Color palette to use on the datepicker's calendar. */
  get color() {
    return this._color || (this.datepickerInput ? this.datepickerInput.getThemePalette() : void 0);
  }
  set color(value) {
    this._color = value;
  }
  /** Whether the datepicker pop-up should be disabled. */
  get disabled() {
    return this._disabled === void 0 && this.datepickerInput ? this.datepickerInput.disabled : !!this._disabled;
  }
  set disabled(value) {
    if (value !== this._disabled) {
      this._disabled = value;
      this.stateChanges.next(void 0);
    }
  }
  /**
   * Classes to be passed to the date picker panel.
   * Supports string and string array values, similar to `ngClass`.
   */
  get panelClass() {
    return this._panelClass;
  }
  set panelClass(value) {
    this._panelClass = coerceStringArray(value);
  }
  /** Whether the calendar is open. */
  get opened() {
    return this._opened;
  }
  set opened(value) {
    if (value) {
      this.open();
    } else {
      this.close();
    }
  }
  /** The minimum selectable date. */
  _getMinDate() {
    return this.datepickerInput && this.datepickerInput.min;
  }
  /** The maximum selectable date. */
  _getMaxDate() {
    return this.datepickerInput && this.datepickerInput.max;
  }
  _getDateFilter() {
    return this.datepickerInput && this.datepickerInput.dateFilter;
  }
  constructor(_overlay, _ngZone, _viewContainerRef, scrollStrategy, _dateAdapter, _dir, _model) {
    this._overlay = _overlay;
    this._ngZone = _ngZone;
    this._viewContainerRef = _viewContainerRef;
    this._dateAdapter = _dateAdapter;
    this._dir = _dir;
    this._model = _model;
    this._inputStateChanges = Subscription.EMPTY;
    this._document = inject(DOCUMENT);
    this.startView = "month";
    this.touchUi = false;
    this.xPosition = "start";
    this.yPosition = "below";
    this.restoreFocus = true;
    this.yearSelected = new EventEmitter();
    this.monthSelected = new EventEmitter();
    this.viewChanged = new EventEmitter(true);
    this.openedStream = new EventEmitter();
    this.closedStream = new EventEmitter();
    this._opened = false;
    this.id = `mat-datepicker-${datepickerUid++}`;
    this._focusedElementBeforeOpen = null;
    this._backdropHarnessClass = `${this.id}-backdrop`;
    this.stateChanges = new Subject();
    if (!this._dateAdapter && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw createMissingDateImplError("DateAdapter");
    }
    this._scrollStrategy = scrollStrategy;
  }
  ngOnChanges(changes) {
    const positionChange = changes["xPosition"] || changes["yPosition"];
    if (positionChange && !positionChange.firstChange && this._overlayRef) {
      const positionStrategy = this._overlayRef.getConfig().positionStrategy;
      if (positionStrategy instanceof FlexibleConnectedPositionStrategy) {
        this._setConnectedPositions(positionStrategy);
        if (this.opened) {
          this._overlayRef.updatePosition();
        }
      }
    }
    this.stateChanges.next(void 0);
  }
  ngOnDestroy() {
    this._destroyOverlay();
    this.close();
    this._inputStateChanges.unsubscribe();
    this.stateChanges.complete();
  }
  /** Selects the given date */
  select(date) {
    this._model.add(date);
  }
  /** Emits the selected year in multiyear view */
  _selectYear(normalizedYear) {
    this.yearSelected.emit(normalizedYear);
  }
  /** Emits selected month in year view */
  _selectMonth(normalizedMonth) {
    this.monthSelected.emit(normalizedMonth);
  }
  /** Emits changed view */
  _viewChanged(view) {
    this.viewChanged.emit(view);
  }
  /**
   * Register an input with this datepicker.
   * @param input The datepicker input to register with this datepicker.
   * @returns Selection model that the input should hook itself up to.
   */
  registerInput(input) {
    if (this.datepickerInput && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error("A MatDatepicker can only be associated with a single input.");
    }
    this._inputStateChanges.unsubscribe();
    this.datepickerInput = input;
    this._inputStateChanges = input.stateChanges.subscribe(() => this.stateChanges.next(void 0));
    return this._model;
  }
  /**
   * Registers a portal containing action buttons with the datepicker.
   * @param portal Portal to be registered.
   */
  registerActions(portal) {
    if (this._actionsPortal && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error("A MatDatepicker can only be associated with a single actions row.");
    }
    this._actionsPortal = portal;
    this._componentRef?.instance._assignActions(portal, true);
  }
  /**
   * Removes a portal containing action buttons from the datepicker.
   * @param portal Portal to be removed.
   */
  removeActions(portal) {
    if (portal === this._actionsPortal) {
      this._actionsPortal = null;
      this._componentRef?.instance._assignActions(null, true);
    }
  }
  /** Open the calendar. */
  open() {
    if (this._opened || this.disabled || this._componentRef?.instance._isAnimating) {
      return;
    }
    if (!this.datepickerInput && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error("Attempted to open an MatDatepicker with no associated input.");
    }
    this._focusedElementBeforeOpen = _getFocusedElementPierceShadowDom();
    this._openOverlay();
    this._opened = true;
    this.openedStream.emit();
  }
  /** Close the calendar. */
  close() {
    if (!this._opened || this._componentRef?.instance._isAnimating) {
      return;
    }
    const canRestoreFocus = this.restoreFocus && this._focusedElementBeforeOpen && typeof this._focusedElementBeforeOpen.focus === "function";
    const completeClose = () => {
      if (this._opened) {
        this._opened = false;
        this.closedStream.emit();
      }
    };
    if (this._componentRef) {
      const {
        instance,
        location
      } = this._componentRef;
      instance._startExitAnimation();
      instance._animationDone.pipe(take(1)).subscribe(() => {
        const activeElement = this._document.activeElement;
        if (canRestoreFocus && (!activeElement || activeElement === this._document.activeElement || location.nativeElement.contains(activeElement))) {
          this._focusedElementBeforeOpen.focus();
        }
        this._focusedElementBeforeOpen = null;
        this._destroyOverlay();
      });
    }
    if (canRestoreFocus) {
      setTimeout(completeClose);
    } else {
      completeClose();
    }
  }
  /** Applies the current pending selection on the overlay to the model. */
  _applyPendingSelection() {
    this._componentRef?.instance?._applyPendingSelection();
  }
  /** Forwards relevant values from the datepicker to the datepicker content inside the overlay. */
  _forwardContentValues(instance) {
    instance.datepicker = this;
    instance.color = this.color;
    instance._dialogLabelId = this.datepickerInput.getOverlayLabelId();
    instance._assignActions(this._actionsPortal, false);
  }
  /** Opens the overlay with the calendar. */
  _openOverlay() {
    this._destroyOverlay();
    const isDialog = this.touchUi;
    const portal = new ComponentPortal(MatDatepickerContent, this._viewContainerRef);
    const overlayRef = this._overlayRef = this._overlay.create(new OverlayConfig({
      positionStrategy: isDialog ? this._getDialogStrategy() : this._getDropdownStrategy(),
      hasBackdrop: true,
      backdropClass: [isDialog ? "cdk-overlay-dark-backdrop" : "mat-overlay-transparent-backdrop", this._backdropHarnessClass],
      direction: this._dir,
      scrollStrategy: isDialog ? this._overlay.scrollStrategies.block() : this._scrollStrategy(),
      panelClass: `mat-datepicker-${isDialog ? "dialog" : "popup"}`
    }));
    this._getCloseStream(overlayRef).subscribe((event) => {
      if (event) {
        event.preventDefault();
      }
      this.close();
    });
    overlayRef.keydownEvents().subscribe((event) => {
      const keyCode = event.keyCode;
      if (keyCode === UP_ARROW || keyCode === DOWN_ARROW || keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW || keyCode === PAGE_UP || keyCode === PAGE_DOWN) {
        event.preventDefault();
      }
    });
    this._componentRef = overlayRef.attach(portal);
    this._forwardContentValues(this._componentRef.instance);
    if (!isDialog) {
      this._ngZone.onStable.pipe(take(1)).subscribe(() => overlayRef.updatePosition());
    }
  }
  /** Destroys the current overlay. */
  _destroyOverlay() {
    if (this._overlayRef) {
      this._overlayRef.dispose();
      this._overlayRef = this._componentRef = null;
    }
  }
  /** Gets a position strategy that will open the calendar as a dropdown. */
  _getDialogStrategy() {
    return this._overlay.position().global().centerHorizontally().centerVertically();
  }
  /** Gets a position strategy that will open the calendar as a dropdown. */
  _getDropdownStrategy() {
    const strategy = this._overlay.position().flexibleConnectedTo(this.datepickerInput.getConnectedOverlayOrigin()).withTransformOriginOn(".mat-datepicker-content").withFlexibleDimensions(false).withViewportMargin(8).withLockedPosition();
    return this._setConnectedPositions(strategy);
  }
  /** Sets the positions of the datepicker in dropdown mode based on the current configuration. */
  _setConnectedPositions(strategy) {
    const primaryX = this.xPosition === "end" ? "end" : "start";
    const secondaryX = primaryX === "start" ? "end" : "start";
    const primaryY = this.yPosition === "above" ? "bottom" : "top";
    const secondaryY = primaryY === "top" ? "bottom" : "top";
    return strategy.withPositions([{
      originX: primaryX,
      originY: secondaryY,
      overlayX: primaryX,
      overlayY: primaryY
    }, {
      originX: primaryX,
      originY: primaryY,
      overlayX: primaryX,
      overlayY: secondaryY
    }, {
      originX: secondaryX,
      originY: secondaryY,
      overlayX: secondaryX,
      overlayY: primaryY
    }, {
      originX: secondaryX,
      originY: primaryY,
      overlayX: secondaryX,
      overlayY: secondaryY
    }]);
  }
  /** Gets an observable that will emit when the overlay is supposed to be closed. */
  _getCloseStream(overlayRef) {
    const ctrlShiftMetaModifiers = ["ctrlKey", "shiftKey", "metaKey"];
    return merge(overlayRef.backdropClick(), overlayRef.detachments(), overlayRef.keydownEvents().pipe(filter((event) => {
      return event.keyCode === ESCAPE && !hasModifierKey(event) || this.datepickerInput && hasModifierKey(event, "altKey") && event.keyCode === UP_ARROW && ctrlShiftMetaModifiers.every((modifier) => !hasModifierKey(event, modifier));
    })));
  }
};
_MatDatepickerBase.ɵfac = function MatDatepickerBase_Factory(t) {
  return new (t || _MatDatepickerBase)(ɵɵdirectiveInject(Overlay), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(MAT_DATEPICKER_SCROLL_STRATEGY), ɵɵdirectiveInject(DateAdapter, 8), ɵɵdirectiveInject(Directionality, 8), ɵɵdirectiveInject(MatDateSelectionModel));
};
_MatDatepickerBase.ɵdir = ɵɵdefineDirective({
  type: _MatDatepickerBase,
  inputs: {
    calendarHeaderComponent: "calendarHeaderComponent",
    startAt: "startAt",
    startView: "startView",
    color: "color",
    touchUi: [InputFlags.HasDecoratorInputTransform, "touchUi", "touchUi", booleanAttribute],
    disabled: [InputFlags.HasDecoratorInputTransform, "disabled", "disabled", booleanAttribute],
    xPosition: "xPosition",
    yPosition: "yPosition",
    restoreFocus: [InputFlags.HasDecoratorInputTransform, "restoreFocus", "restoreFocus", booleanAttribute],
    dateClass: "dateClass",
    panelClass: "panelClass",
    opened: [InputFlags.HasDecoratorInputTransform, "opened", "opened", booleanAttribute]
  },
  outputs: {
    yearSelected: "yearSelected",
    monthSelected: "monthSelected",
    viewChanged: "viewChanged",
    openedStream: "opened",
    closedStream: "closed"
  },
  features: [ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature]
});
var MatDatepickerBase = _MatDatepickerBase;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDatepickerBase, [{
    type: Directive
  }], () => [{
    type: Overlay
  }, {
    type: NgZone
  }, {
    type: ViewContainerRef
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [MAT_DATEPICKER_SCROLL_STRATEGY]
    }]
  }, {
    type: DateAdapter,
    decorators: [{
      type: Optional
    }]
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }, {
    type: MatDateSelectionModel
  }], {
    calendarHeaderComponent: [{
      type: Input
    }],
    startAt: [{
      type: Input
    }],
    startView: [{
      type: Input
    }],
    color: [{
      type: Input
    }],
    touchUi: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    xPosition: [{
      type: Input
    }],
    yPosition: [{
      type: Input
    }],
    restoreFocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    yearSelected: [{
      type: Output
    }],
    monthSelected: [{
      type: Output
    }],
    viewChanged: [{
      type: Output
    }],
    dateClass: [{
      type: Input
    }],
    openedStream: [{
      type: Output,
      args: ["opened"]
    }],
    closedStream: [{
      type: Output,
      args: ["closed"]
    }],
    panelClass: [{
      type: Input
    }],
    opened: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var _MatDatepicker = class _MatDatepicker extends MatDatepickerBase {
};
_MatDatepicker.ɵfac = /* @__PURE__ */ (() => {
  let ɵMatDatepicker_BaseFactory;
  return function MatDatepicker_Factory(t) {
    return (ɵMatDatepicker_BaseFactory || (ɵMatDatepicker_BaseFactory = ɵɵgetInheritedFactory(_MatDatepicker)))(t || _MatDatepicker);
  };
})();
_MatDatepicker.ɵcmp = ɵɵdefineComponent({
  type: _MatDatepicker,
  selectors: [["mat-datepicker"]],
  exportAs: ["matDatepicker"],
  standalone: true,
  features: [ɵɵProvidersFeature([MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER, {
    provide: MatDatepickerBase,
    useExisting: _MatDatepicker
  }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  decls: 0,
  vars: 0,
  template: function MatDatepicker_Template(rf, ctx) {
  },
  encapsulation: 2,
  changeDetection: 0
});
var MatDatepicker = _MatDatepicker;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDatepicker, [{
    type: Component,
    args: [{
      selector: "mat-datepicker",
      template: "",
      exportAs: "matDatepicker",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      providers: [MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER, {
        provide: MatDatepickerBase,
        useExisting: MatDatepicker
      }],
      standalone: true
    }]
  }], null, null);
})();
var MatDatepickerInputEvent = class {
  constructor(target, targetElement) {
    this.target = target;
    this.targetElement = targetElement;
    this.value = this.target.value;
  }
};
var _MatDatepickerInputBase = class _MatDatepickerInputBase {
  /** The value of the input. */
  get value() {
    return this._model ? this._getValueFromModel(this._model.selection) : this._pendingValue;
  }
  set value(value) {
    this._assignValueProgrammatically(value);
  }
  /** Whether the datepicker-input is disabled. */
  get disabled() {
    return !!this._disabled || this._parentDisabled();
  }
  set disabled(value) {
    const newValue = value;
    const element = this._elementRef.nativeElement;
    if (this._disabled !== newValue) {
      this._disabled = newValue;
      this.stateChanges.next(void 0);
    }
    if (newValue && this._isInitialized && element.blur) {
      element.blur();
    }
  }
  /** Gets the base validator functions. */
  _getValidators() {
    return [this._parseValidator, this._minValidator, this._maxValidator, this._filterValidator];
  }
  /** Registers a date selection model with the input. */
  _registerModel(model) {
    this._model = model;
    this._valueChangesSubscription.unsubscribe();
    if (this._pendingValue) {
      this._assignValue(this._pendingValue);
    }
    this._valueChangesSubscription = this._model.selectionChanged.subscribe((event) => {
      if (this._shouldHandleChangeEvent(event)) {
        const value = this._getValueFromModel(event.selection);
        this._lastValueValid = this._isValidValue(value);
        this._cvaOnChange(value);
        this._onTouched();
        this._formatValue(value);
        this.dateInput.emit(new MatDatepickerInputEvent(this, this._elementRef.nativeElement));
        this.dateChange.emit(new MatDatepickerInputEvent(this, this._elementRef.nativeElement));
      }
    });
  }
  constructor(_elementRef, _dateAdapter, _dateFormats) {
    this._elementRef = _elementRef;
    this._dateAdapter = _dateAdapter;
    this._dateFormats = _dateFormats;
    this.dateChange = new EventEmitter();
    this.dateInput = new EventEmitter();
    this.stateChanges = new Subject();
    this._onTouched = () => {
    };
    this._validatorOnChange = () => {
    };
    this._cvaOnChange = () => {
    };
    this._valueChangesSubscription = Subscription.EMPTY;
    this._localeSubscription = Subscription.EMPTY;
    this._parseValidator = () => {
      return this._lastValueValid ? null : {
        "matDatepickerParse": {
          "text": this._elementRef.nativeElement.value
        }
      };
    };
    this._filterValidator = (control) => {
      const controlValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(control.value));
      return !controlValue || this._matchesFilter(controlValue) ? null : {
        "matDatepickerFilter": true
      };
    };
    this._minValidator = (control) => {
      const controlValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(control.value));
      const min = this._getMinDate();
      return !min || !controlValue || this._dateAdapter.compareDate(min, controlValue) <= 0 ? null : {
        "matDatepickerMin": {
          "min": min,
          "actual": controlValue
        }
      };
    };
    this._maxValidator = (control) => {
      const controlValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(control.value));
      const max = this._getMaxDate();
      return !max || !controlValue || this._dateAdapter.compareDate(max, controlValue) >= 0 ? null : {
        "matDatepickerMax": {
          "max": max,
          "actual": controlValue
        }
      };
    };
    this._lastValueValid = false;
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!this._dateAdapter) {
        throw createMissingDateImplError("DateAdapter");
      }
      if (!this._dateFormats) {
        throw createMissingDateImplError("MAT_DATE_FORMATS");
      }
    }
    this._localeSubscription = _dateAdapter.localeChanges.subscribe(() => {
      this._assignValueProgrammatically(this.value);
    });
  }
  ngAfterViewInit() {
    this._isInitialized = true;
  }
  ngOnChanges(changes) {
    if (dateInputsHaveChanged(changes, this._dateAdapter)) {
      this.stateChanges.next(void 0);
    }
  }
  ngOnDestroy() {
    this._valueChangesSubscription.unsubscribe();
    this._localeSubscription.unsubscribe();
    this.stateChanges.complete();
  }
  /** @docs-private */
  registerOnValidatorChange(fn) {
    this._validatorOnChange = fn;
  }
  /** @docs-private */
  validate(c) {
    return this._validator ? this._validator(c) : null;
  }
  // Implemented as part of ControlValueAccessor.
  writeValue(value) {
    this._assignValueProgrammatically(value);
  }
  // Implemented as part of ControlValueAccessor.
  registerOnChange(fn) {
    this._cvaOnChange = fn;
  }
  // Implemented as part of ControlValueAccessor.
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  // Implemented as part of ControlValueAccessor.
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  _onKeydown(event) {
    const ctrlShiftMetaModifiers = ["ctrlKey", "shiftKey", "metaKey"];
    const isAltDownArrow = hasModifierKey(event, "altKey") && event.keyCode === DOWN_ARROW && ctrlShiftMetaModifiers.every((modifier) => !hasModifierKey(event, modifier));
    if (isAltDownArrow && !this._elementRef.nativeElement.readOnly) {
      this._openPopup();
      event.preventDefault();
    }
  }
  _onInput(value) {
    const lastValueWasValid = this._lastValueValid;
    let date = this._dateAdapter.parse(value, this._dateFormats.parse.dateInput);
    this._lastValueValid = this._isValidValue(date);
    date = this._dateAdapter.getValidDateOrNull(date);
    const hasChanged = !this._dateAdapter.sameDate(date, this.value);
    if (!date || hasChanged) {
      this._cvaOnChange(date);
    } else {
      if (value && !this.value) {
        this._cvaOnChange(date);
      }
      if (lastValueWasValid !== this._lastValueValid) {
        this._validatorOnChange();
      }
    }
    if (hasChanged) {
      this._assignValue(date);
      this.dateInput.emit(new MatDatepickerInputEvent(this, this._elementRef.nativeElement));
    }
  }
  _onChange() {
    this.dateChange.emit(new MatDatepickerInputEvent(this, this._elementRef.nativeElement));
  }
  /** Handles blur events on the input. */
  _onBlur() {
    if (this.value) {
      this._formatValue(this.value);
    }
    this._onTouched();
  }
  /** Formats a value and sets it on the input element. */
  _formatValue(value) {
    this._elementRef.nativeElement.value = value != null ? this._dateAdapter.format(value, this._dateFormats.display.dateInput) : "";
  }
  /** Assigns a value to the model. */
  _assignValue(value) {
    if (this._model) {
      this._assignValueToModel(value);
      this._pendingValue = null;
    } else {
      this._pendingValue = value;
    }
  }
  /** Whether a value is considered valid. */
  _isValidValue(value) {
    return !value || this._dateAdapter.isValid(value);
  }
  /**
   * Checks whether a parent control is disabled. This is in place so that it can be overridden
   * by inputs extending this one which can be placed inside of a group that can be disabled.
   */
  _parentDisabled() {
    return false;
  }
  /** Programmatically assigns a value to the input. */
  _assignValueProgrammatically(value) {
    value = this._dateAdapter.deserialize(value);
    this._lastValueValid = this._isValidValue(value);
    value = this._dateAdapter.getValidDateOrNull(value);
    this._assignValue(value);
    this._formatValue(value);
  }
  /** Gets whether a value matches the current date filter. */
  _matchesFilter(value) {
    const filter2 = this._getDateFilter();
    return !filter2 || filter2(value);
  }
};
_MatDatepickerInputBase.ɵfac = function MatDatepickerInputBase_Factory(t) {
  return new (t || _MatDatepickerInputBase)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(DateAdapter, 8), ɵɵdirectiveInject(MAT_DATE_FORMATS, 8));
};
_MatDatepickerInputBase.ɵdir = ɵɵdefineDirective({
  type: _MatDatepickerInputBase,
  inputs: {
    value: "value",
    disabled: [InputFlags.HasDecoratorInputTransform, "disabled", "disabled", booleanAttribute]
  },
  outputs: {
    dateChange: "dateChange",
    dateInput: "dateInput"
  },
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature]
});
var MatDatepickerInputBase = _MatDatepickerInputBase;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDatepickerInputBase, [{
    type: Directive,
    args: [{
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: DateAdapter,
    decorators: [{
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_DATE_FORMATS]
    }]
  }], {
    value: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    dateChange: [{
      type: Output
    }],
    dateInput: [{
      type: Output
    }]
  });
})();
function dateInputsHaveChanged(changes, adapter) {
  const keys = Object.keys(changes);
  for (let key of keys) {
    const {
      previousValue,
      currentValue
    } = changes[key];
    if (adapter.isDateInstance(previousValue) && adapter.isDateInstance(currentValue)) {
      if (!adapter.sameDate(previousValue, currentValue)) {
        return true;
      }
    } else {
      return true;
    }
  }
  return false;
}
var MAT_DATEPICKER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MatDatepickerInput),
  multi: true
};
var MAT_DATEPICKER_VALIDATORS = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MatDatepickerInput),
  multi: true
};
var _MatDatepickerInput = class _MatDatepickerInput extends MatDatepickerInputBase {
  /** The datepicker that this input is associated with. */
  set matDatepicker(datepicker) {
    if (datepicker) {
      this._datepicker = datepicker;
      this._closedSubscription = datepicker.closedStream.subscribe(() => this._onTouched());
      this._registerModel(datepicker.registerInput(this));
    }
  }
  /** The minimum valid date. */
  get min() {
    return this._min;
  }
  set min(value) {
    const validValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    if (!this._dateAdapter.sameDate(validValue, this._min)) {
      this._min = validValue;
      this._validatorOnChange();
    }
  }
  /** The maximum valid date. */
  get max() {
    return this._max;
  }
  set max(value) {
    const validValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    if (!this._dateAdapter.sameDate(validValue, this._max)) {
      this._max = validValue;
      this._validatorOnChange();
    }
  }
  /** Function that can be used to filter out dates within the datepicker. */
  get dateFilter() {
    return this._dateFilter;
  }
  set dateFilter(value) {
    const wasMatchingValue = this._matchesFilter(this.value);
    this._dateFilter = value;
    if (this._matchesFilter(this.value) !== wasMatchingValue) {
      this._validatorOnChange();
    }
  }
  constructor(elementRef, dateAdapter, dateFormats, _formField) {
    super(elementRef, dateAdapter, dateFormats);
    this._formField = _formField;
    this._closedSubscription = Subscription.EMPTY;
    this._validator = Validators.compose(super._getValidators());
  }
  /**
   * Gets the element that the datepicker popup should be connected to.
   * @return The element to connect the popup to.
   */
  getConnectedOverlayOrigin() {
    return this._formField ? this._formField.getConnectedOverlayOrigin() : this._elementRef;
  }
  /** Gets the ID of an element that should be used a description for the calendar overlay. */
  getOverlayLabelId() {
    if (this._formField) {
      return this._formField.getLabelId();
    }
    return this._elementRef.nativeElement.getAttribute("aria-labelledby");
  }
  /** Returns the palette used by the input's form field, if any. */
  getThemePalette() {
    return this._formField ? this._formField.color : void 0;
  }
  /** Gets the value at which the calendar should start. */
  getStartValue() {
    return this.value;
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this._closedSubscription.unsubscribe();
  }
  /** Opens the associated datepicker. */
  _openPopup() {
    if (this._datepicker) {
      this._datepicker.open();
    }
  }
  _getValueFromModel(modelValue) {
    return modelValue;
  }
  _assignValueToModel(value) {
    if (this._model) {
      this._model.updateSelection(value, this);
    }
  }
  /** Gets the input's minimum date. */
  _getMinDate() {
    return this._min;
  }
  /** Gets the input's maximum date. */
  _getMaxDate() {
    return this._max;
  }
  /** Gets the input's date filtering function. */
  _getDateFilter() {
    return this._dateFilter;
  }
  _shouldHandleChangeEvent(event) {
    return event.source !== this;
  }
};
_MatDatepickerInput.ɵfac = function MatDatepickerInput_Factory(t) {
  return new (t || _MatDatepickerInput)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(DateAdapter, 8), ɵɵdirectiveInject(MAT_DATE_FORMATS, 8), ɵɵdirectiveInject(MAT_FORM_FIELD, 8));
};
_MatDatepickerInput.ɵdir = ɵɵdefineDirective({
  type: _MatDatepickerInput,
  selectors: [["input", "matDatepicker", ""]],
  hostAttrs: [1, "mat-datepicker-input"],
  hostVars: 6,
  hostBindings: function MatDatepickerInput_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("input", function MatDatepickerInput_input_HostBindingHandler($event) {
        return ctx._onInput($event.target.value);
      })("change", function MatDatepickerInput_change_HostBindingHandler() {
        return ctx._onChange();
      })("blur", function MatDatepickerInput_blur_HostBindingHandler() {
        return ctx._onBlur();
      })("keydown", function MatDatepickerInput_keydown_HostBindingHandler($event) {
        return ctx._onKeydown($event);
      });
    }
    if (rf & 2) {
      ɵɵhostProperty("disabled", ctx.disabled);
      ɵɵattribute("aria-haspopup", ctx._datepicker ? "dialog" : null)("aria-owns", (ctx._datepicker == null ? null : ctx._datepicker.opened) && ctx._datepicker.id || null)("min", ctx.min ? ctx._dateAdapter.toIso8601(ctx.min) : null)("max", ctx.max ? ctx._dateAdapter.toIso8601(ctx.max) : null)("data-mat-calendar", ctx._datepicker ? ctx._datepicker.id : null);
    }
  },
  inputs: {
    matDatepicker: "matDatepicker",
    min: "min",
    max: "max",
    dateFilter: [InputFlags.None, "matDatepickerFilter", "dateFilter"]
  },
  exportAs: ["matDatepickerInput"],
  standalone: true,
  features: [ɵɵProvidersFeature([MAT_DATEPICKER_VALUE_ACCESSOR, MAT_DATEPICKER_VALIDATORS, {
    provide: MAT_INPUT_VALUE_ACCESSOR,
    useExisting: _MatDatepickerInput
  }]), ɵɵInheritDefinitionFeature]
});
var MatDatepickerInput = _MatDatepickerInput;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDatepickerInput, [{
    type: Directive,
    args: [{
      selector: "input[matDatepicker]",
      providers: [MAT_DATEPICKER_VALUE_ACCESSOR, MAT_DATEPICKER_VALIDATORS, {
        provide: MAT_INPUT_VALUE_ACCESSOR,
        useExisting: MatDatepickerInput
      }],
      host: {
        "class": "mat-datepicker-input",
        "[attr.aria-haspopup]": '_datepicker ? "dialog" : null',
        "[attr.aria-owns]": "(_datepicker?.opened && _datepicker.id) || null",
        "[attr.min]": "min ? _dateAdapter.toIso8601(min) : null",
        "[attr.max]": "max ? _dateAdapter.toIso8601(max) : null",
        // Used by the test harness to tie this input to its calendar. We can't depend on
        // `aria-owns` for this, because it's only defined while the calendar is open.
        "[attr.data-mat-calendar]": "_datepicker ? _datepicker.id : null",
        "[disabled]": "disabled",
        "(input)": "_onInput($event.target.value)",
        "(change)": "_onChange()",
        "(blur)": "_onBlur()",
        "(keydown)": "_onKeydown($event)"
      },
      exportAs: "matDatepickerInput",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: DateAdapter,
    decorators: [{
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_DATE_FORMATS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_FORM_FIELD]
    }]
  }], {
    matDatepicker: [{
      type: Input
    }],
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    dateFilter: [{
      type: Input,
      args: ["matDatepickerFilter"]
    }]
  });
})();
var _MatDatepickerToggleIcon = class _MatDatepickerToggleIcon {
};
_MatDatepickerToggleIcon.ɵfac = function MatDatepickerToggleIcon_Factory(t) {
  return new (t || _MatDatepickerToggleIcon)();
};
_MatDatepickerToggleIcon.ɵdir = ɵɵdefineDirective({
  type: _MatDatepickerToggleIcon,
  selectors: [["", "matDatepickerToggleIcon", ""]],
  standalone: true
});
var MatDatepickerToggleIcon = _MatDatepickerToggleIcon;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDatepickerToggleIcon, [{
    type: Directive,
    args: [{
      selector: "[matDatepickerToggleIcon]",
      standalone: true
    }]
  }], null, null);
})();
var _MatDatepickerToggle = class _MatDatepickerToggle {
  /** Whether the toggle button is disabled. */
  get disabled() {
    if (this._disabled === void 0 && this.datepicker) {
      return this.datepicker.disabled;
    }
    return !!this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
  }
  constructor(_intl, _changeDetectorRef, defaultTabIndex) {
    this._intl = _intl;
    this._changeDetectorRef = _changeDetectorRef;
    this._stateChanges = Subscription.EMPTY;
    const parsedTabIndex = Number(defaultTabIndex);
    this.tabIndex = parsedTabIndex || parsedTabIndex === 0 ? parsedTabIndex : null;
  }
  ngOnChanges(changes) {
    if (changes["datepicker"]) {
      this._watchStateChanges();
    }
  }
  ngOnDestroy() {
    this._stateChanges.unsubscribe();
  }
  ngAfterContentInit() {
    this._watchStateChanges();
  }
  _open(event) {
    if (this.datepicker && !this.disabled) {
      this.datepicker.open();
      event.stopPropagation();
    }
  }
  _watchStateChanges() {
    const datepickerStateChanged = this.datepicker ? this.datepicker.stateChanges : of();
    const inputStateChanged = this.datepicker && this.datepicker.datepickerInput ? this.datepicker.datepickerInput.stateChanges : of();
    const datepickerToggled = this.datepicker ? merge(this.datepicker.openedStream, this.datepicker.closedStream) : of();
    this._stateChanges.unsubscribe();
    this._stateChanges = merge(this._intl.changes, datepickerStateChanged, inputStateChanged, datepickerToggled).subscribe(() => this._changeDetectorRef.markForCheck());
  }
};
_MatDatepickerToggle.ɵfac = function MatDatepickerToggle_Factory(t) {
  return new (t || _MatDatepickerToggle)(ɵɵdirectiveInject(MatDatepickerIntl), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵinjectAttribute("tabindex"));
};
_MatDatepickerToggle.ɵcmp = ɵɵdefineComponent({
  type: _MatDatepickerToggle,
  selectors: [["mat-datepicker-toggle"]],
  contentQueries: function MatDatepickerToggle_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, MatDatepickerToggleIcon, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._customIcon = _t.first);
    }
  },
  viewQuery: function MatDatepickerToggle_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c22, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._button = _t.first);
    }
  },
  hostAttrs: [1, "mat-datepicker-toggle"],
  hostVars: 8,
  hostBindings: function MatDatepickerToggle_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function MatDatepickerToggle_click_HostBindingHandler($event) {
        return ctx._open($event);
      });
    }
    if (rf & 2) {
      ɵɵattribute("tabindex", null)("data-mat-calendar", ctx.datepicker ? ctx.datepicker.id : null);
      ɵɵclassProp("mat-datepicker-toggle-active", ctx.datepicker && ctx.datepicker.opened)("mat-accent", ctx.datepicker && ctx.datepicker.color === "accent")("mat-warn", ctx.datepicker && ctx.datepicker.color === "warn");
    }
  },
  inputs: {
    datepicker: [InputFlags.None, "for", "datepicker"],
    tabIndex: "tabIndex",
    ariaLabel: [InputFlags.None, "aria-label", "ariaLabel"],
    disabled: [InputFlags.HasDecoratorInputTransform, "disabled", "disabled", booleanAttribute],
    disableRipple: "disableRipple"
  },
  exportAs: ["matDatepickerToggle"],
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c42,
  decls: 4,
  vars: 6,
  consts: [["mat-icon-button", "", "type", "button", 3, "disabled", "disableRipple"], ["button", ""], ["class", "mat-datepicker-toggle-default-icon", "viewBox", "0 0 24 24", "width", "24px", "height", "24px", "fill", "currentColor", "focusable", "false", "aria-hidden", "true"], ["viewBox", "0 0 24 24", "width", "24px", "height", "24px", "fill", "currentColor", "focusable", "false", "aria-hidden", "true", 1, "mat-datepicker-toggle-default-icon"], ["d", "M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"]],
  template: function MatDatepickerToggle_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c32);
      ɵɵelementStart(0, "button", 0, 1);
      ɵɵtemplate(2, MatDatepickerToggle_Conditional_2_Template, 2, 0, ":svg:svg", 2);
      ɵɵprojection(3);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("disabled", ctx.disabled)("disableRipple", ctx.disableRipple);
      ɵɵattribute("aria-haspopup", ctx.datepicker ? "dialog" : null)("aria-label", ctx.ariaLabel || ctx._intl.openCalendarLabel)("tabindex", ctx.disabled ? -1 : ctx.tabIndex);
      ɵɵadvance(2);
      ɵɵconditional(2, !ctx._customIcon ? 2 : -1);
    }
  },
  dependencies: [MatIconButton],
  styles: [".mat-datepicker-toggle{pointer-events:auto;color:var(--mat-datepicker-toggle-icon-color)}.mat-datepicker-toggle-active{color:var(--mat-datepicker-toggle-active-state-icon-color)}.cdk-high-contrast-active .mat-datepicker-toggle-default-icon{color:CanvasText}"],
  encapsulation: 2,
  changeDetection: 0
});
var MatDatepickerToggle = _MatDatepickerToggle;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDatepickerToggle, [{
    type: Component,
    args: [{
      selector: "mat-datepicker-toggle",
      host: {
        "class": "mat-datepicker-toggle",
        "[attr.tabindex]": "null",
        "[class.mat-datepicker-toggle-active]": "datepicker && datepicker.opened",
        "[class.mat-accent]": 'datepicker && datepicker.color === "accent"',
        "[class.mat-warn]": 'datepicker && datepicker.color === "warn"',
        // Used by the test harness to tie this toggle to its datepicker.
        "[attr.data-mat-calendar]": "datepicker ? datepicker.id : null",
        // Bind the `click` on the host, rather than the inner `button`, so that we can call
        // `stopPropagation` on it without affecting the user's `click` handlers. We need to stop
        // it so that the input doesn't get focused automatically by the form field (See #21836).
        "(click)": "_open($event)"
      },
      exportAs: "matDatepickerToggle",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [MatIconButton],
      template: `<button
  #button
  mat-icon-button
  type="button"
  [attr.aria-haspopup]="datepicker ? 'dialog' : null"
  [attr.aria-label]="ariaLabel || _intl.openCalendarLabel"
  [attr.tabindex]="disabled ? -1 : tabIndex"
  [disabled]="disabled"
  [disableRipple]="disableRipple">

  @if (!_customIcon) {
    <svg
      class="mat-datepicker-toggle-default-icon"
      viewBox="0 0 24 24"
      width="24px"
      height="24px"
      fill="currentColor"
      focusable="false"
      aria-hidden="true">
      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
    </svg>
  }

  <ng-content select="[matDatepickerToggleIcon]"></ng-content>
</button>
`,
      styles: [".mat-datepicker-toggle{pointer-events:auto;color:var(--mat-datepicker-toggle-icon-color)}.mat-datepicker-toggle-active{color:var(--mat-datepicker-toggle-active-state-icon-color)}.cdk-high-contrast-active .mat-datepicker-toggle-default-icon{color:CanvasText}"]
    }]
  }], () => [{
    type: MatDatepickerIntl
  }, {
    type: ChangeDetectorRef
  }, {
    type: void 0,
    decorators: [{
      type: Attribute,
      args: ["tabindex"]
    }]
  }], {
    datepicker: [{
      type: Input,
      args: ["for"]
    }],
    tabIndex: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disableRipple: [{
      type: Input
    }],
    _customIcon: [{
      type: ContentChild,
      args: [MatDatepickerToggleIcon]
    }],
    _button: [{
      type: ViewChild,
      args: ["button"]
    }]
  });
})();
function _computeAriaAccessibleName(element) {
  return _computeAriaAccessibleNameInternal(element, true);
}
function ssrSafeIsElement(node) {
  return node.nodeType === Node.ELEMENT_NODE;
}
function ssrSafeIsHTMLInputElement(node) {
  return node.nodeName === "INPUT";
}
function ssrSafeIsHTMLTextAreaElement(node) {
  return node.nodeName === "TEXTAREA";
}
function _computeAriaAccessibleNameInternal(currentNode, isDirectlyReferenced) {
  if (ssrSafeIsElement(currentNode) && isDirectlyReferenced) {
    const labelledbyIds = currentNode.getAttribute?.("aria-labelledby")?.split(/\s+/g) || [];
    const validIdRefs = labelledbyIds.reduce((validIds, id) => {
      const elem = document.getElementById(id);
      if (elem) {
        validIds.push(elem);
      }
      return validIds;
    }, []);
    if (validIdRefs.length) {
      return validIdRefs.map((idRef) => {
        return _computeAriaAccessibleNameInternal(idRef, false);
      }).join(" ");
    }
  }
  if (ssrSafeIsElement(currentNode)) {
    const ariaLabel = currentNode.getAttribute("aria-label")?.trim();
    if (ariaLabel) {
      return ariaLabel;
    }
  }
  if (ssrSafeIsHTMLInputElement(currentNode) || ssrSafeIsHTMLTextAreaElement(currentNode)) {
    if (currentNode.labels?.length) {
      return Array.from(currentNode.labels).map((x) => _computeAriaAccessibleNameInternal(x, false)).join(" ");
    }
    const placeholder = currentNode.getAttribute("placeholder")?.trim();
    if (placeholder) {
      return placeholder;
    }
    const title = currentNode.getAttribute("title")?.trim();
    if (title) {
      return title;
    }
  }
  return (currentNode.textContent || "").replace(/\s+/g, " ").trim();
}
var MAT_DATE_RANGE_INPUT_PARENT = new InjectionToken("MAT_DATE_RANGE_INPUT_PARENT");
var _MatDateRangeInputPartBase = class _MatDateRangeInputPartBase extends MatDatepickerInputBase {
  /** Object used to control when error messages are shown. */
  get errorStateMatcher() {
    return this._errorStateTracker.matcher;
  }
  set errorStateMatcher(value) {
    this._errorStateTracker.matcher = value;
  }
  /** Whether the input is in an error state. */
  get errorState() {
    return this._errorStateTracker.errorState;
  }
  set errorState(value) {
    this._errorStateTracker.errorState = value;
  }
  constructor(_rangeInput, _elementRef, _defaultErrorStateMatcher, _injector, _parentForm, _parentFormGroup, dateAdapter, dateFormats) {
    super(_elementRef, dateAdapter, dateFormats);
    this._rangeInput = _rangeInput;
    this._elementRef = _elementRef;
    this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
    this._injector = _injector;
    this._parentForm = _parentForm;
    this._parentFormGroup = _parentFormGroup;
    this._dir = inject(Directionality, {
      optional: true
    });
    this._errorStateTracker = new _ErrorStateTracker(this._defaultErrorStateMatcher, null, this._parentFormGroup, this._parentForm, this.stateChanges);
  }
  ngOnInit() {
    const ngControl = this._injector.get(NgControl, null, {
      optional: true,
      self: true
    });
    if (ngControl) {
      this.ngControl = ngControl;
      this._errorStateTracker.ngControl = ngControl;
    }
  }
  ngDoCheck() {
    if (this.ngControl) {
      this.updateErrorState();
    }
  }
  /** Gets whether the input is empty. */
  isEmpty() {
    return this._elementRef.nativeElement.value.length === 0;
  }
  /** Gets the placeholder of the input. */
  _getPlaceholder() {
    return this._elementRef.nativeElement.placeholder;
  }
  /** Focuses the input. */
  focus() {
    this._elementRef.nativeElement.focus();
  }
  /** Gets the value that should be used when mirroring the input's size. */
  getMirrorValue() {
    const element = this._elementRef.nativeElement;
    const value = element.value;
    return value.length > 0 ? value : element.placeholder;
  }
  /** Refreshes the error state of the input. */
  updateErrorState() {
    this._errorStateTracker.updateErrorState();
  }
  /** Handles `input` events on the input element. */
  _onInput(value) {
    super._onInput(value);
    this._rangeInput._handleChildValueChange();
  }
  /** Opens the datepicker associated with the input. */
  _openPopup() {
    this._rangeInput._openDatepicker();
  }
  /** Gets the minimum date from the range input. */
  _getMinDate() {
    return this._rangeInput.min;
  }
  /** Gets the maximum date from the range input. */
  _getMaxDate() {
    return this._rangeInput.max;
  }
  /** Gets the date filter function from the range input. */
  _getDateFilter() {
    return this._rangeInput.dateFilter;
  }
  _parentDisabled() {
    return this._rangeInput._groupDisabled;
  }
  _shouldHandleChangeEvent({
    source
  }) {
    return source !== this._rangeInput._startInput && source !== this._rangeInput._endInput;
  }
  _assignValueProgrammatically(value) {
    super._assignValueProgrammatically(value);
    const opposite = this === this._rangeInput._startInput ? this._rangeInput._endInput : this._rangeInput._startInput;
    opposite?._validatorOnChange();
  }
  /** return the ARIA accessible name of the input element */
  _getAccessibleName() {
    return _computeAriaAccessibleName(this._elementRef.nativeElement);
  }
};
_MatDateRangeInputPartBase.ɵfac = function MatDateRangeInputPartBase_Factory(t) {
  return new (t || _MatDateRangeInputPartBase)(ɵɵdirectiveInject(MAT_DATE_RANGE_INPUT_PARENT), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ErrorStateMatcher), ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(NgForm, 8), ɵɵdirectiveInject(FormGroupDirective, 8), ɵɵdirectiveInject(DateAdapter, 8), ɵɵdirectiveInject(MAT_DATE_FORMATS, 8));
};
_MatDateRangeInputPartBase.ɵdir = ɵɵdefineDirective({
  type: _MatDateRangeInputPartBase,
  inputs: {
    errorStateMatcher: "errorStateMatcher"
  },
  standalone: true,
  features: [ɵɵInheritDefinitionFeature]
});
var MatDateRangeInputPartBase = _MatDateRangeInputPartBase;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDateRangeInputPartBase, [{
    type: Directive,
    args: [{
      standalone: true
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [MAT_DATE_RANGE_INPUT_PARENT]
    }]
  }, {
    type: ElementRef
  }, {
    type: ErrorStateMatcher
  }, {
    type: Injector
  }, {
    type: NgForm,
    decorators: [{
      type: Optional
    }]
  }, {
    type: FormGroupDirective,
    decorators: [{
      type: Optional
    }]
  }, {
    type: DateAdapter,
    decorators: [{
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_DATE_FORMATS]
    }]
  }], {
    errorStateMatcher: [{
      type: Input
    }]
  });
})();
var _MatStartDate = class _MatStartDate extends MatDateRangeInputPartBase {
  constructor(rangeInput, elementRef, defaultErrorStateMatcher, injector, parentForm, parentFormGroup, dateAdapter, dateFormats) {
    super(rangeInput, elementRef, defaultErrorStateMatcher, injector, parentForm, parentFormGroup, dateAdapter, dateFormats);
    this._startValidator = (control) => {
      const start = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(control.value));
      const end = this._model ? this._model.selection.end : null;
      return !start || !end || this._dateAdapter.compareDate(start, end) <= 0 ? null : {
        "matStartDateInvalid": {
          "end": end,
          "actual": start
        }
      };
    };
    this._validator = Validators.compose([...super._getValidators(), this._startValidator]);
  }
  _getValueFromModel(modelValue) {
    return modelValue.start;
  }
  _shouldHandleChangeEvent(change) {
    if (!super._shouldHandleChangeEvent(change)) {
      return false;
    } else {
      return !change.oldValue?.start ? !!change.selection.start : !change.selection.start || !!this._dateAdapter.compareDate(change.oldValue.start, change.selection.start);
    }
  }
  _assignValueToModel(value) {
    if (this._model) {
      const range = new DateRange(value, this._model.selection.end);
      this._model.updateSelection(range, this);
    }
  }
  _formatValue(value) {
    super._formatValue(value);
    this._rangeInput._handleChildValueChange();
  }
  _onKeydown(event) {
    const endInput = this._rangeInput._endInput;
    const element = this._elementRef.nativeElement;
    const isLtr = this._dir?.value !== "rtl";
    if ((event.keyCode === RIGHT_ARROW && isLtr || event.keyCode === LEFT_ARROW && !isLtr) && element.selectionStart === element.value.length && element.selectionEnd === element.value.length) {
      event.preventDefault();
      endInput._elementRef.nativeElement.setSelectionRange(0, 0);
      endInput.focus();
    } else {
      super._onKeydown(event);
    }
  }
};
_MatStartDate.ɵfac = function MatStartDate_Factory(t) {
  return new (t || _MatStartDate)(ɵɵdirectiveInject(MAT_DATE_RANGE_INPUT_PARENT), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ErrorStateMatcher), ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(NgForm, 8), ɵɵdirectiveInject(FormGroupDirective, 8), ɵɵdirectiveInject(DateAdapter, 8), ɵɵdirectiveInject(MAT_DATE_FORMATS, 8));
};
_MatStartDate.ɵdir = ɵɵdefineDirective({
  type: _MatStartDate,
  selectors: [["input", "matStartDate", ""]],
  hostAttrs: ["type", "text", 1, "mat-start-date", "mat-date-range-input-inner"],
  hostVars: 5,
  hostBindings: function MatStartDate_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("input", function MatStartDate_input_HostBindingHandler($event) {
        return ctx._onInput($event.target.value);
      })("change", function MatStartDate_change_HostBindingHandler() {
        return ctx._onChange();
      })("keydown", function MatStartDate_keydown_HostBindingHandler($event) {
        return ctx._onKeydown($event);
      })("blur", function MatStartDate_blur_HostBindingHandler() {
        return ctx._onBlur();
      });
    }
    if (rf & 2) {
      ɵɵhostProperty("disabled", ctx.disabled);
      ɵɵattribute("aria-haspopup", ctx._rangeInput.rangePicker ? "dialog" : null)("aria-owns", (ctx._rangeInput.rangePicker == null ? null : ctx._rangeInput.rangePicker.opened) && ctx._rangeInput.rangePicker.id || null)("min", ctx._getMinDate() ? ctx._dateAdapter.toIso8601(ctx._getMinDate()) : null)("max", ctx._getMaxDate() ? ctx._dateAdapter.toIso8601(ctx._getMaxDate()) : null);
    }
  },
  outputs: {
    dateChange: "dateChange",
    dateInput: "dateInput"
  },
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: _MatStartDate,
    multi: true
  }, {
    provide: NG_VALIDATORS,
    useExisting: _MatStartDate,
    multi: true
  }]), ɵɵInheritDefinitionFeature]
});
var MatStartDate = _MatStartDate;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatStartDate, [{
    type: Directive,
    args: [{
      selector: "input[matStartDate]",
      host: {
        "class": "mat-start-date mat-date-range-input-inner",
        "[disabled]": "disabled",
        "(input)": "_onInput($event.target.value)",
        "(change)": "_onChange()",
        "(keydown)": "_onKeydown($event)",
        "[attr.aria-haspopup]": '_rangeInput.rangePicker ? "dialog" : null',
        "[attr.aria-owns]": "(_rangeInput.rangePicker?.opened && _rangeInput.rangePicker.id) || null",
        "[attr.min]": "_getMinDate() ? _dateAdapter.toIso8601(_getMinDate()) : null",
        "[attr.max]": "_getMaxDate() ? _dateAdapter.toIso8601(_getMaxDate()) : null",
        "(blur)": "_onBlur()",
        "type": "text"
      },
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: MatStartDate,
        multi: true
      }, {
        provide: NG_VALIDATORS,
        useExisting: MatStartDate,
        multi: true
      }],
      // These need to be specified explicitly, because some tooling doesn't
      // seem to pick them up from the base class. See #20932.
      outputs: ["dateChange", "dateInput"],
      standalone: true
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [MAT_DATE_RANGE_INPUT_PARENT]
    }]
  }, {
    type: ElementRef
  }, {
    type: ErrorStateMatcher
  }, {
    type: Injector
  }, {
    type: NgForm,
    decorators: [{
      type: Optional
    }]
  }, {
    type: FormGroupDirective,
    decorators: [{
      type: Optional
    }]
  }, {
    type: DateAdapter,
    decorators: [{
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_DATE_FORMATS]
    }]
  }], null);
})();
var _MatEndDate = class _MatEndDate extends MatDateRangeInputPartBase {
  constructor(rangeInput, elementRef, defaultErrorStateMatcher, injector, parentForm, parentFormGroup, dateAdapter, dateFormats) {
    super(rangeInput, elementRef, defaultErrorStateMatcher, injector, parentForm, parentFormGroup, dateAdapter, dateFormats);
    this._endValidator = (control) => {
      const end = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(control.value));
      const start = this._model ? this._model.selection.start : null;
      return !end || !start || this._dateAdapter.compareDate(end, start) >= 0 ? null : {
        "matEndDateInvalid": {
          "start": start,
          "actual": end
        }
      };
    };
    this._validator = Validators.compose([...super._getValidators(), this._endValidator]);
  }
  _getValueFromModel(modelValue) {
    return modelValue.end;
  }
  _shouldHandleChangeEvent(change) {
    if (!super._shouldHandleChangeEvent(change)) {
      return false;
    } else {
      return !change.oldValue?.end ? !!change.selection.end : !change.selection.end || !!this._dateAdapter.compareDate(change.oldValue.end, change.selection.end);
    }
  }
  _assignValueToModel(value) {
    if (this._model) {
      const range = new DateRange(this._model.selection.start, value);
      this._model.updateSelection(range, this);
    }
  }
  _onKeydown(event) {
    const startInput = this._rangeInput._startInput;
    const element = this._elementRef.nativeElement;
    const isLtr = this._dir?.value !== "rtl";
    if (event.keyCode === BACKSPACE && !element.value) {
      startInput.focus();
    } else if ((event.keyCode === LEFT_ARROW && isLtr || event.keyCode === RIGHT_ARROW && !isLtr) && element.selectionStart === 0 && element.selectionEnd === 0) {
      event.preventDefault();
      const endPosition = startInput._elementRef.nativeElement.value.length;
      startInput._elementRef.nativeElement.setSelectionRange(endPosition, endPosition);
      startInput.focus();
    } else {
      super._onKeydown(event);
    }
  }
};
_MatEndDate.ɵfac = function MatEndDate_Factory(t) {
  return new (t || _MatEndDate)(ɵɵdirectiveInject(MAT_DATE_RANGE_INPUT_PARENT), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ErrorStateMatcher), ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(NgForm, 8), ɵɵdirectiveInject(FormGroupDirective, 8), ɵɵdirectiveInject(DateAdapter, 8), ɵɵdirectiveInject(MAT_DATE_FORMATS, 8));
};
_MatEndDate.ɵdir = ɵɵdefineDirective({
  type: _MatEndDate,
  selectors: [["input", "matEndDate", ""]],
  hostAttrs: ["type", "text", 1, "mat-end-date", "mat-date-range-input-inner"],
  hostVars: 5,
  hostBindings: function MatEndDate_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("input", function MatEndDate_input_HostBindingHandler($event) {
        return ctx._onInput($event.target.value);
      })("change", function MatEndDate_change_HostBindingHandler() {
        return ctx._onChange();
      })("keydown", function MatEndDate_keydown_HostBindingHandler($event) {
        return ctx._onKeydown($event);
      })("blur", function MatEndDate_blur_HostBindingHandler() {
        return ctx._onBlur();
      });
    }
    if (rf & 2) {
      ɵɵhostProperty("disabled", ctx.disabled);
      ɵɵattribute("aria-haspopup", ctx._rangeInput.rangePicker ? "dialog" : null)("aria-owns", (ctx._rangeInput.rangePicker == null ? null : ctx._rangeInput.rangePicker.opened) && ctx._rangeInput.rangePicker.id || null)("min", ctx._getMinDate() ? ctx._dateAdapter.toIso8601(ctx._getMinDate()) : null)("max", ctx._getMaxDate() ? ctx._dateAdapter.toIso8601(ctx._getMaxDate()) : null);
    }
  },
  outputs: {
    dateChange: "dateChange",
    dateInput: "dateInput"
  },
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: _MatEndDate,
    multi: true
  }, {
    provide: NG_VALIDATORS,
    useExisting: _MatEndDate,
    multi: true
  }]), ɵɵInheritDefinitionFeature]
});
var MatEndDate = _MatEndDate;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatEndDate, [{
    type: Directive,
    args: [{
      selector: "input[matEndDate]",
      host: {
        "class": "mat-end-date mat-date-range-input-inner",
        "[disabled]": "disabled",
        "(input)": "_onInput($event.target.value)",
        "(change)": "_onChange()",
        "(keydown)": "_onKeydown($event)",
        "[attr.aria-haspopup]": '_rangeInput.rangePicker ? "dialog" : null',
        "[attr.aria-owns]": "(_rangeInput.rangePicker?.opened && _rangeInput.rangePicker.id) || null",
        "[attr.min]": "_getMinDate() ? _dateAdapter.toIso8601(_getMinDate()) : null",
        "[attr.max]": "_getMaxDate() ? _dateAdapter.toIso8601(_getMaxDate()) : null",
        "(blur)": "_onBlur()",
        "type": "text"
      },
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: MatEndDate,
        multi: true
      }, {
        provide: NG_VALIDATORS,
        useExisting: MatEndDate,
        multi: true
      }],
      // These need to be specified explicitly, because some tooling doesn't
      // seem to pick them up from the base class. See #20932.
      outputs: ["dateChange", "dateInput"],
      standalone: true
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [MAT_DATE_RANGE_INPUT_PARENT]
    }]
  }, {
    type: ElementRef
  }, {
    type: ErrorStateMatcher
  }, {
    type: Injector
  }, {
    type: NgForm,
    decorators: [{
      type: Optional
    }]
  }, {
    type: FormGroupDirective,
    decorators: [{
      type: Optional
    }]
  }, {
    type: DateAdapter,
    decorators: [{
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_DATE_FORMATS]
    }]
  }], null);
})();
var nextUniqueId2 = 0;
var _MatDateRangeInput = class _MatDateRangeInput {
  /** Current value of the range input. */
  get value() {
    return this._model ? this._model.selection : null;
  }
  /** Whether the control's label should float. */
  get shouldLabelFloat() {
    return this.focused || !this.empty;
  }
  /**
   * Implemented as a part of `MatFormFieldControl`.
   * Set the placeholder attribute on `matStartDate` and `matEndDate`.
   * @docs-private
   */
  get placeholder() {
    const start = this._startInput?._getPlaceholder() || "";
    const end = this._endInput?._getPlaceholder() || "";
    return start || end ? `${start} ${this.separator} ${end}` : "";
  }
  /** The range picker that this input is associated with. */
  get rangePicker() {
    return this._rangePicker;
  }
  set rangePicker(rangePicker) {
    if (rangePicker) {
      this._model = rangePicker.registerInput(this);
      this._rangePicker = rangePicker;
      this._closedSubscription.unsubscribe();
      this._closedSubscription = rangePicker.closedStream.subscribe(() => {
        this._startInput?._onTouched();
        this._endInput?._onTouched();
      });
      this._registerModel(this._model);
    }
  }
  /** Whether the input is required. */
  get required() {
    return this._required ?? (this._isTargetRequired(this) || this._isTargetRequired(this._startInput) || this._isTargetRequired(this._endInput)) ?? false;
  }
  set required(value) {
    this._required = value;
  }
  /** Function that can be used to filter out dates within the date range picker. */
  get dateFilter() {
    return this._dateFilter;
  }
  set dateFilter(value) {
    const start = this._startInput;
    const end = this._endInput;
    const wasMatchingStart = start && start._matchesFilter(start.value);
    const wasMatchingEnd = end && end._matchesFilter(start.value);
    this._dateFilter = value;
    if (start && start._matchesFilter(start.value) !== wasMatchingStart) {
      start._validatorOnChange();
    }
    if (end && end._matchesFilter(end.value) !== wasMatchingEnd) {
      end._validatorOnChange();
    }
  }
  /** The minimum valid date. */
  get min() {
    return this._min;
  }
  set min(value) {
    const validValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    if (!this._dateAdapter.sameDate(validValue, this._min)) {
      this._min = validValue;
      this._revalidate();
    }
  }
  /** The maximum valid date. */
  get max() {
    return this._max;
  }
  set max(value) {
    const validValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    if (!this._dateAdapter.sameDate(validValue, this._max)) {
      this._max = validValue;
      this._revalidate();
    }
  }
  /** Whether the input is disabled. */
  get disabled() {
    return this._startInput && this._endInput ? this._startInput.disabled && this._endInput.disabled : this._groupDisabled;
  }
  set disabled(value) {
    if (value !== this._groupDisabled) {
      this._groupDisabled = value;
      this.stateChanges.next(void 0);
    }
  }
  /** Whether the input is in an error state. */
  get errorState() {
    if (this._startInput && this._endInput) {
      return this._startInput.errorState || this._endInput.errorState;
    }
    return false;
  }
  /** Whether the datepicker input is empty. */
  get empty() {
    const startEmpty = this._startInput ? this._startInput.isEmpty() : false;
    const endEmpty = this._endInput ? this._endInput.isEmpty() : false;
    return startEmpty && endEmpty;
  }
  constructor(_changeDetectorRef, _elementRef, control, _dateAdapter, _formField) {
    this._changeDetectorRef = _changeDetectorRef;
    this._elementRef = _elementRef;
    this._dateAdapter = _dateAdapter;
    this._formField = _formField;
    this._closedSubscription = Subscription.EMPTY;
    this.id = `mat-date-range-input-${nextUniqueId2++}`;
    this.focused = false;
    this.controlType = "mat-date-range-input";
    this._groupDisabled = false;
    this._ariaDescribedBy = null;
    this.separator = "–";
    this.comparisonStart = null;
    this.comparisonEnd = null;
    this.stateChanges = new Subject();
    if (!_dateAdapter && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw createMissingDateImplError("DateAdapter");
    }
    if (_formField?._elementRef.nativeElement.classList.contains("mat-mdc-form-field")) {
      _elementRef.nativeElement.classList.add("mat-mdc-input-element", "mat-mdc-form-field-input-control", "mdc-text-field__input");
    }
    this.ngControl = control;
  }
  /**
   * Implemented as a part of `MatFormFieldControl`.
   * @docs-private
   */
  setDescribedByIds(ids) {
    this._ariaDescribedBy = ids.length ? ids.join(" ") : null;
  }
  /**
   * Implemented as a part of `MatFormFieldControl`.
   * @docs-private
   */
  onContainerClick() {
    if (!this.focused && !this.disabled) {
      if (!this._model || !this._model.selection.start) {
        this._startInput.focus();
      } else {
        this._endInput.focus();
      }
    }
  }
  ngAfterContentInit() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!this._startInput) {
        throw Error("mat-date-range-input must contain a matStartDate input");
      }
      if (!this._endInput) {
        throw Error("mat-date-range-input must contain a matEndDate input");
      }
    }
    if (this._model) {
      this._registerModel(this._model);
    }
    merge(this._startInput.stateChanges, this._endInput.stateChanges).subscribe(() => {
      this.stateChanges.next(void 0);
    });
  }
  ngOnChanges(changes) {
    if (dateInputsHaveChanged(changes, this._dateAdapter)) {
      this.stateChanges.next(void 0);
    }
  }
  ngOnDestroy() {
    this._closedSubscription.unsubscribe();
    this.stateChanges.complete();
  }
  /** Gets the date at which the calendar should start. */
  getStartValue() {
    return this.value ? this.value.start : null;
  }
  /** Gets the input's theme palette. */
  getThemePalette() {
    return this._formField ? this._formField.color : void 0;
  }
  /** Gets the element to which the calendar overlay should be attached. */
  getConnectedOverlayOrigin() {
    return this._formField ? this._formField.getConnectedOverlayOrigin() : this._elementRef;
  }
  /** Gets the ID of an element that should be used a description for the calendar overlay. */
  getOverlayLabelId() {
    return this._formField ? this._formField.getLabelId() : null;
  }
  /** Gets the value that is used to mirror the state input. */
  _getInputMirrorValue(part) {
    const input = part === "start" ? this._startInput : this._endInput;
    return input ? input.getMirrorValue() : "";
  }
  /** Whether the input placeholders should be hidden. */
  _shouldHidePlaceholders() {
    return this._startInput ? !this._startInput.isEmpty() : false;
  }
  /** Handles the value in one of the child inputs changing. */
  _handleChildValueChange() {
    this.stateChanges.next(void 0);
    this._changeDetectorRef.markForCheck();
  }
  /** Opens the date range picker associated with the input. */
  _openDatepicker() {
    if (this._rangePicker) {
      this._rangePicker.open();
    }
  }
  /** Whether the separate text should be hidden. */
  _shouldHideSeparator() {
    return (!this._formField || this._formField.getLabelId() && !this._formField._shouldLabelFloat()) && this.empty;
  }
  /** Gets the value for the `aria-labelledby` attribute of the inputs. */
  _getAriaLabelledby() {
    const formField = this._formField;
    return formField && formField._hasFloatingLabel() ? formField._labelId : null;
  }
  _getStartDateAccessibleName() {
    return this._startInput._getAccessibleName();
  }
  _getEndDateAccessibleName() {
    return this._endInput._getAccessibleName();
  }
  /** Updates the focused state of the range input. */
  _updateFocus(origin) {
    this.focused = origin !== null;
    this.stateChanges.next();
  }
  /** Re-runs the validators on the start/end inputs. */
  _revalidate() {
    if (this._startInput) {
      this._startInput._validatorOnChange();
    }
    if (this._endInput) {
      this._endInput._validatorOnChange();
    }
  }
  /** Registers the current date selection model with the start/end inputs. */
  _registerModel(model) {
    if (this._startInput) {
      this._startInput._registerModel(model);
    }
    if (this._endInput) {
      this._endInput._registerModel(model);
    }
  }
  /** Checks whether a specific range input directive is required. */
  _isTargetRequired(target) {
    return target?.ngControl?.control?.hasValidator(Validators.required);
  }
};
_MatDateRangeInput.ɵfac = function MatDateRangeInput_Factory(t) {
  return new (t || _MatDateRangeInput)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ControlContainer, 10), ɵɵdirectiveInject(DateAdapter, 8), ɵɵdirectiveInject(MAT_FORM_FIELD, 8));
};
_MatDateRangeInput.ɵcmp = ɵɵdefineComponent({
  type: _MatDateRangeInput,
  selectors: [["mat-date-range-input"]],
  contentQueries: function MatDateRangeInput_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, MatStartDate, 5);
      ɵɵcontentQuery(dirIndex, MatEndDate, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._startInput = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._endInput = _t.first);
    }
  },
  hostAttrs: ["role", "group", 1, "mat-date-range-input"],
  hostVars: 8,
  hostBindings: function MatDateRangeInput_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("id", ctx.id)("aria-labelledby", ctx._getAriaLabelledby())("aria-describedby", ctx._ariaDescribedBy)("data-mat-calendar", ctx.rangePicker ? ctx.rangePicker.id : null);
      ɵɵclassProp("mat-date-range-input-hide-placeholders", ctx._shouldHidePlaceholders())("mat-date-range-input-required", ctx.required);
    }
  },
  inputs: {
    rangePicker: "rangePicker",
    required: [InputFlags.HasDecoratorInputTransform, "required", "required", booleanAttribute],
    dateFilter: "dateFilter",
    min: "min",
    max: "max",
    disabled: [InputFlags.HasDecoratorInputTransform, "disabled", "disabled", booleanAttribute],
    separator: "separator",
    comparisonStart: "comparisonStart",
    comparisonEnd: "comparisonEnd"
  },
  exportAs: ["matDateRangeInput"],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: MatFormFieldControl,
    useExisting: _MatDateRangeInput
  }, {
    provide: MAT_DATE_RANGE_INPUT_PARENT,
    useExisting: _MatDateRangeInput
  }]), ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c62,
  decls: 11,
  vars: 5,
  consts: [["cdkMonitorSubtreeFocus", "", 1, "mat-date-range-input-container", 3, "cdkFocusChange"], [1, "mat-date-range-input-wrapper"], ["aria-hidden", "true", 1, "mat-date-range-input-mirror"], [1, "mat-date-range-input-separator"], [1, "mat-date-range-input-wrapper", "mat-date-range-input-end-wrapper"]],
  template: function MatDateRangeInput_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c52);
      ɵɵelementStart(0, "div", 0);
      ɵɵlistener("cdkFocusChange", function MatDateRangeInput_Template_div_cdkFocusChange_0_listener($event) {
        return ctx._updateFocus($event);
      });
      ɵɵelementStart(1, "div", 1);
      ɵɵprojection(2);
      ɵɵelementStart(3, "span", 2);
      ɵɵtext(4);
      ɵɵelementEnd()();
      ɵɵelementStart(5, "span", 3);
      ɵɵtext(6);
      ɵɵelementEnd();
      ɵɵelementStart(7, "div", 4);
      ɵɵprojection(8, 1);
      ɵɵelementStart(9, "span", 2);
      ɵɵtext(10);
      ɵɵelementEnd()()();
    }
    if (rf & 2) {
      ɵɵadvance(4);
      ɵɵtextInterpolate(ctx._getInputMirrorValue("start"));
      ɵɵadvance();
      ɵɵclassProp("mat-date-range-input-separator-hidden", ctx._shouldHideSeparator());
      ɵɵadvance();
      ɵɵtextInterpolate(ctx.separator);
      ɵɵadvance(4);
      ɵɵtextInterpolate(ctx._getInputMirrorValue("end"));
    }
  },
  dependencies: [CdkMonitorFocus],
  styles: [".mat-date-range-input{display:block;width:100%}.mat-date-range-input-container{display:flex;align-items:center}.mat-date-range-input-separator{transition:opacity 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);margin:0 4px;color:var(--mat-datepicker-range-input-separator-color)}.mat-form-field-disabled .mat-date-range-input-separator{color:var(--mat-datepicker-range-input-disabled-state-separator-color)}._mat-animation-noopable .mat-date-range-input-separator{transition:none}.mat-date-range-input-separator-hidden{-webkit-user-select:none;user-select:none;opacity:0;transition:none}.mat-date-range-input-wrapper{position:relative;overflow:hidden;max-width:calc(50% - 4px)}.mat-date-range-input-end-wrapper{flex-grow:1}.mat-date-range-input-inner{position:absolute;top:0;left:0;font:inherit;background:rgba(0,0,0,0);color:currentColor;border:none;outline:none;padding:0;margin:0;vertical-align:bottom;text-align:inherit;-webkit-appearance:none;width:100%;height:100%}.mat-date-range-input-inner:-moz-ui-invalid{box-shadow:none}.mat-date-range-input-inner::placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner::-moz-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner::-webkit-input-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner:-ms-input-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner[disabled]{color:var(--mat-datepicker-range-input-disabled-state-text-color)}.mat-form-field-hide-placeholder .mat-date-range-input-inner::placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::placeholder{-webkit-user-select:none;user-select:none;color:rgba(0,0,0,0) !important;-webkit-text-fill-color:rgba(0,0,0,0);transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-date-range-input-inner::placeholder,.cdk-high-contrast-active .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-date-range-input-inner::-moz-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-moz-placeholder{-webkit-user-select:none;user-select:none;color:rgba(0,0,0,0) !important;-webkit-text-fill-color:rgba(0,0,0,0);transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-date-range-input-inner::-moz-placeholder,.cdk-high-contrast-active .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-moz-placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-date-range-input-inner::-webkit-input-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-webkit-input-placeholder{-webkit-user-select:none;user-select:none;color:rgba(0,0,0,0) !important;-webkit-text-fill-color:rgba(0,0,0,0);transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-date-range-input-inner::-webkit-input-placeholder,.cdk-high-contrast-active .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-webkit-input-placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-date-range-input-inner:-ms-input-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner:-ms-input-placeholder{-webkit-user-select:none;user-select:none;color:rgba(0,0,0,0) !important;-webkit-text-fill-color:rgba(0,0,0,0);transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-date-range-input-inner:-ms-input-placeholder,.cdk-high-contrast-active .mat-date-range-input-hide-placeholders .mat-date-range-input-inner:-ms-input-placeholder{opacity:0}._mat-animation-noopable .mat-date-range-input-inner::placeholder{transition:none}._mat-animation-noopable .mat-date-range-input-inner::-moz-placeholder{transition:none}._mat-animation-noopable .mat-date-range-input-inner::-webkit-input-placeholder{transition:none}._mat-animation-noopable .mat-date-range-input-inner:-ms-input-placeholder{transition:none}.mat-date-range-input-mirror{-webkit-user-select:none;user-select:none;visibility:hidden;white-space:nowrap;display:inline-block;min-width:2px}.mat-mdc-form-field-type-mat-date-range-input .mat-mdc-form-field-infix{width:200px}"],
  encapsulation: 2,
  changeDetection: 0
});
var MatDateRangeInput = _MatDateRangeInput;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDateRangeInput, [{
    type: Component,
    args: [{
      selector: "mat-date-range-input",
      exportAs: "matDateRangeInput",
      host: {
        "class": "mat-date-range-input",
        "[class.mat-date-range-input-hide-placeholders]": "_shouldHidePlaceholders()",
        "[class.mat-date-range-input-required]": "required",
        "[attr.id]": "id",
        "role": "group",
        "[attr.aria-labelledby]": "_getAriaLabelledby()",
        "[attr.aria-describedby]": "_ariaDescribedBy",
        // Used by the test harness to tie this input to its calendar. We can't depend on
        // `aria-owns` for this, because it's only defined while the calendar is open.
        "[attr.data-mat-calendar]": "rangePicker ? rangePicker.id : null"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      providers: [{
        provide: MatFormFieldControl,
        useExisting: MatDateRangeInput
      }, {
        provide: MAT_DATE_RANGE_INPUT_PARENT,
        useExisting: MatDateRangeInput
      }],
      standalone: true,
      imports: [CdkMonitorFocus],
      template: `<div
  class="mat-date-range-input-container"
  cdkMonitorSubtreeFocus
  (cdkFocusChange)="_updateFocus($event)">
  <div class="mat-date-range-input-wrapper">
    <ng-content select="input[matStartDate]"></ng-content>
    <span
      class="mat-date-range-input-mirror"
      aria-hidden="true">{{_getInputMirrorValue('start')}}</span>
  </div>

  <span
    class="mat-date-range-input-separator"
    [class.mat-date-range-input-separator-hidden]="_shouldHideSeparator()">{{separator}}</span>

  <div class="mat-date-range-input-wrapper mat-date-range-input-end-wrapper">
    <ng-content select="input[matEndDate]"></ng-content>
    <span
      class="mat-date-range-input-mirror"
      aria-hidden="true">{{_getInputMirrorValue('end')}}</span>
  </div>
</div>

`,
      styles: [".mat-date-range-input{display:block;width:100%}.mat-date-range-input-container{display:flex;align-items:center}.mat-date-range-input-separator{transition:opacity 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);margin:0 4px;color:var(--mat-datepicker-range-input-separator-color)}.mat-form-field-disabled .mat-date-range-input-separator{color:var(--mat-datepicker-range-input-disabled-state-separator-color)}._mat-animation-noopable .mat-date-range-input-separator{transition:none}.mat-date-range-input-separator-hidden{-webkit-user-select:none;user-select:none;opacity:0;transition:none}.mat-date-range-input-wrapper{position:relative;overflow:hidden;max-width:calc(50% - 4px)}.mat-date-range-input-end-wrapper{flex-grow:1}.mat-date-range-input-inner{position:absolute;top:0;left:0;font:inherit;background:rgba(0,0,0,0);color:currentColor;border:none;outline:none;padding:0;margin:0;vertical-align:bottom;text-align:inherit;-webkit-appearance:none;width:100%;height:100%}.mat-date-range-input-inner:-moz-ui-invalid{box-shadow:none}.mat-date-range-input-inner::placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner::-moz-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner::-webkit-input-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner:-ms-input-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner[disabled]{color:var(--mat-datepicker-range-input-disabled-state-text-color)}.mat-form-field-hide-placeholder .mat-date-range-input-inner::placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::placeholder{-webkit-user-select:none;user-select:none;color:rgba(0,0,0,0) !important;-webkit-text-fill-color:rgba(0,0,0,0);transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-date-range-input-inner::placeholder,.cdk-high-contrast-active .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-date-range-input-inner::-moz-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-moz-placeholder{-webkit-user-select:none;user-select:none;color:rgba(0,0,0,0) !important;-webkit-text-fill-color:rgba(0,0,0,0);transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-date-range-input-inner::-moz-placeholder,.cdk-high-contrast-active .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-moz-placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-date-range-input-inner::-webkit-input-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-webkit-input-placeholder{-webkit-user-select:none;user-select:none;color:rgba(0,0,0,0) !important;-webkit-text-fill-color:rgba(0,0,0,0);transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-date-range-input-inner::-webkit-input-placeholder,.cdk-high-contrast-active .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-webkit-input-placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-date-range-input-inner:-ms-input-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner:-ms-input-placeholder{-webkit-user-select:none;user-select:none;color:rgba(0,0,0,0) !important;-webkit-text-fill-color:rgba(0,0,0,0);transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-date-range-input-inner:-ms-input-placeholder,.cdk-high-contrast-active .mat-date-range-input-hide-placeholders .mat-date-range-input-inner:-ms-input-placeholder{opacity:0}._mat-animation-noopable .mat-date-range-input-inner::placeholder{transition:none}._mat-animation-noopable .mat-date-range-input-inner::-moz-placeholder{transition:none}._mat-animation-noopable .mat-date-range-input-inner::-webkit-input-placeholder{transition:none}._mat-animation-noopable .mat-date-range-input-inner:-ms-input-placeholder{transition:none}.mat-date-range-input-mirror{-webkit-user-select:none;user-select:none;visibility:hidden;white-space:nowrap;display:inline-block;min-width:2px}.mat-mdc-form-field-type-mat-date-range-input .mat-mdc-form-field-infix{width:200px}"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }]
  }, {
    type: DateAdapter,
    decorators: [{
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_FORM_FIELD]
    }]
  }], {
    rangePicker: [{
      type: Input
    }],
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    dateFilter: [{
      type: Input
    }],
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    separator: [{
      type: Input
    }],
    comparisonStart: [{
      type: Input
    }],
    comparisonEnd: [{
      type: Input
    }],
    _startInput: [{
      type: ContentChild,
      args: [MatStartDate]
    }],
    _endInput: [{
      type: ContentChild,
      args: [MatEndDate]
    }]
  });
})();
var _MatDateRangePicker = class _MatDateRangePicker extends MatDatepickerBase {
  _forwardContentValues(instance) {
    super._forwardContentValues(instance);
    const input = this.datepickerInput;
    if (input) {
      instance.comparisonStart = input.comparisonStart;
      instance.comparisonEnd = input.comparisonEnd;
      instance.startDateAccessibleName = input._getStartDateAccessibleName();
      instance.endDateAccessibleName = input._getEndDateAccessibleName();
    }
  }
};
_MatDateRangePicker.ɵfac = /* @__PURE__ */ (() => {
  let ɵMatDateRangePicker_BaseFactory;
  return function MatDateRangePicker_Factory(t) {
    return (ɵMatDateRangePicker_BaseFactory || (ɵMatDateRangePicker_BaseFactory = ɵɵgetInheritedFactory(_MatDateRangePicker)))(t || _MatDateRangePicker);
  };
})();
_MatDateRangePicker.ɵcmp = ɵɵdefineComponent({
  type: _MatDateRangePicker,
  selectors: [["mat-date-range-picker"]],
  exportAs: ["matDateRangePicker"],
  standalone: true,
  features: [ɵɵProvidersFeature([MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER, MAT_CALENDAR_RANGE_STRATEGY_PROVIDER, {
    provide: MatDatepickerBase,
    useExisting: _MatDateRangePicker
  }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  decls: 0,
  vars: 0,
  template: function MatDateRangePicker_Template(rf, ctx) {
  },
  encapsulation: 2,
  changeDetection: 0
});
var MatDateRangePicker = _MatDateRangePicker;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDateRangePicker, [{
    type: Component,
    args: [{
      selector: "mat-date-range-picker",
      template: "",
      exportAs: "matDateRangePicker",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      providers: [MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER, MAT_CALENDAR_RANGE_STRATEGY_PROVIDER, {
        provide: MatDatepickerBase,
        useExisting: MatDateRangePicker
      }],
      standalone: true
    }]
  }], null, null);
})();
var _MatDatepickerApply = class _MatDatepickerApply {
  constructor(_datepicker) {
    this._datepicker = _datepicker;
  }
  _applySelection() {
    this._datepicker._applyPendingSelection();
    this._datepicker.close();
  }
};
_MatDatepickerApply.ɵfac = function MatDatepickerApply_Factory(t) {
  return new (t || _MatDatepickerApply)(ɵɵdirectiveInject(MatDatepickerBase));
};
_MatDatepickerApply.ɵdir = ɵɵdefineDirective({
  type: _MatDatepickerApply,
  selectors: [["", "matDatepickerApply", ""], ["", "matDateRangePickerApply", ""]],
  hostBindings: function MatDatepickerApply_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function MatDatepickerApply_click_HostBindingHandler() {
        return ctx._applySelection();
      });
    }
  },
  standalone: true
});
var MatDatepickerApply = _MatDatepickerApply;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDatepickerApply, [{
    type: Directive,
    args: [{
      selector: "[matDatepickerApply], [matDateRangePickerApply]",
      host: {
        "(click)": "_applySelection()"
      },
      standalone: true
    }]
  }], () => [{
    type: MatDatepickerBase
  }], null);
})();
var _MatDatepickerCancel = class _MatDatepickerCancel {
  constructor(_datepicker) {
    this._datepicker = _datepicker;
  }
};
_MatDatepickerCancel.ɵfac = function MatDatepickerCancel_Factory(t) {
  return new (t || _MatDatepickerCancel)(ɵɵdirectiveInject(MatDatepickerBase));
};
_MatDatepickerCancel.ɵdir = ɵɵdefineDirective({
  type: _MatDatepickerCancel,
  selectors: [["", "matDatepickerCancel", ""], ["", "matDateRangePickerCancel", ""]],
  hostBindings: function MatDatepickerCancel_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function MatDatepickerCancel_click_HostBindingHandler() {
        return ctx._datepicker.close();
      });
    }
  },
  standalone: true
});
var MatDatepickerCancel = _MatDatepickerCancel;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDatepickerCancel, [{
    type: Directive,
    args: [{
      selector: "[matDatepickerCancel], [matDateRangePickerCancel]",
      host: {
        "(click)": "_datepicker.close()"
      },
      standalone: true
    }]
  }], () => [{
    type: MatDatepickerBase
  }], null);
})();
var _MatDatepickerActions = class _MatDatepickerActions {
  constructor(_datepicker, _viewContainerRef) {
    this._datepicker = _datepicker;
    this._viewContainerRef = _viewContainerRef;
  }
  ngAfterViewInit() {
    this._portal = new TemplatePortal(this._template, this._viewContainerRef);
    this._datepicker.registerActions(this._portal);
  }
  ngOnDestroy() {
    this._datepicker.removeActions(this._portal);
    if (this._portal && this._portal.isAttached) {
      this._portal?.detach();
    }
  }
};
_MatDatepickerActions.ɵfac = function MatDatepickerActions_Factory(t) {
  return new (t || _MatDatepickerActions)(ɵɵdirectiveInject(MatDatepickerBase), ɵɵdirectiveInject(ViewContainerRef));
};
_MatDatepickerActions.ɵcmp = ɵɵdefineComponent({
  type: _MatDatepickerActions,
  selectors: [["mat-datepicker-actions"], ["mat-date-range-picker-actions"]],
  viewQuery: function MatDatepickerActions_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(TemplateRef, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._template = _t.first);
    }
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c12,
  decls: 1,
  vars: 0,
  consts: [[1, "mat-datepicker-actions"]],
  template: function MatDatepickerActions_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, MatDatepickerActions_ng_template_0_Template, 2, 0, "ng-template");
    }
  },
  styles: [".mat-datepicker-actions{display:flex;justify-content:flex-end;align-items:center;padding:0 8px 8px 8px}.mat-datepicker-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-datepicker-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}"],
  encapsulation: 2,
  changeDetection: 0
});
var MatDatepickerActions = _MatDatepickerActions;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDatepickerActions, [{
    type: Component,
    args: [{
      selector: "mat-datepicker-actions, mat-date-range-picker-actions",
      template: `
    <ng-template>
      <div class="mat-datepicker-actions">
        <ng-content></ng-content>
      </div>
    </ng-template>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      standalone: true,
      styles: [".mat-datepicker-actions{display:flex;justify-content:flex-end;align-items:center;padding:0 8px 8px 8px}.mat-datepicker-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-datepicker-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}"]
    }]
  }], () => [{
    type: MatDatepickerBase
  }, {
    type: ViewContainerRef
  }], {
    _template: [{
      type: ViewChild,
      args: [TemplateRef]
    }]
  });
})();
var _MatDatepickerModule = class _MatDatepickerModule {
};
_MatDatepickerModule.ɵfac = function MatDatepickerModule_Factory(t) {
  return new (t || _MatDatepickerModule)();
};
_MatDatepickerModule.ɵmod = ɵɵdefineNgModule({
  type: _MatDatepickerModule,
  imports: [CommonModule, MatButtonModule, OverlayModule, A11yModule, PortalModule, MatCommonModule, MatCalendar, MatCalendarBody, MatDatepicker, MatDatepickerContent, MatDatepickerInput, MatDatepickerToggle, MatDatepickerToggleIcon, MatMonthView, MatYearView, MatMultiYearView, MatCalendarHeader, MatDateRangeInput, MatStartDate, MatEndDate, MatDateRangePicker, MatDatepickerActions, MatDatepickerCancel, MatDatepickerApply],
  exports: [CdkScrollableModule, MatCalendar, MatCalendarBody, MatDatepicker, MatDatepickerContent, MatDatepickerInput, MatDatepickerToggle, MatDatepickerToggleIcon, MatMonthView, MatYearView, MatMultiYearView, MatCalendarHeader, MatDateRangeInput, MatStartDate, MatEndDate, MatDateRangePicker, MatDatepickerActions, MatDatepickerCancel, MatDatepickerApply]
});
_MatDatepickerModule.ɵinj = ɵɵdefineInjector({
  providers: [MatDatepickerIntl, MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER],
  imports: [CommonModule, MatButtonModule, OverlayModule, A11yModule, PortalModule, MatCommonModule, MatDatepickerContent, MatDatepickerToggle, MatCalendarHeader, CdkScrollableModule]
});
var MatDatepickerModule = _MatDatepickerModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDatepickerModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, MatButtonModule, OverlayModule, A11yModule, PortalModule, MatCommonModule, MatCalendar, MatCalendarBody, MatDatepicker, MatDatepickerContent, MatDatepickerInput, MatDatepickerToggle, MatDatepickerToggleIcon, MatMonthView, MatYearView, MatMultiYearView, MatCalendarHeader, MatDateRangeInput, MatStartDate, MatEndDate, MatDateRangePicker, MatDatepickerActions, MatDatepickerCancel, MatDatepickerApply],
      exports: [CdkScrollableModule, MatCalendar, MatCalendarBody, MatDatepicker, MatDatepickerContent, MatDatepickerInput, MatDatepickerToggle, MatDatepickerToggleIcon, MatMonthView, MatYearView, MatMultiYearView, MatCalendarHeader, MatDateRangeInput, MatStartDate, MatEndDate, MatDateRangePicker, MatDatepickerActions, MatDatepickerCancel, MatDatepickerApply],
      providers: [MatDatepickerIntl, MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER]
    }]
  }], null, null);
})();
export {
  DateRange,
  DefaultMatCalendarRangeStrategy,
  MAT_DATEPICKER_SCROLL_STRATEGY,
  MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY,
  MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER,
  MAT_DATEPICKER_VALIDATORS,
  MAT_DATEPICKER_VALUE_ACCESSOR,
  MAT_DATE_RANGE_SELECTION_STRATEGY,
  MAT_RANGE_DATE_SELECTION_MODEL_FACTORY,
  MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER,
  MAT_SINGLE_DATE_SELECTION_MODEL_FACTORY,
  MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER,
  MatCalendar,
  MatCalendarBody,
  MatCalendarCell,
  MatCalendarHeader,
  MatDateRangeInput,
  MatDateRangePicker,
  MatDateSelectionModel,
  MatDatepicker,
  MatDatepickerActions,
  MatDatepickerApply,
  MatDatepickerCancel,
  MatDatepickerContent,
  MatDatepickerInput,
  MatDatepickerInputEvent,
  MatDatepickerIntl,
  MatDatepickerModule,
  MatDatepickerToggle,
  MatDatepickerToggleIcon,
  MatEndDate,
  MatMonthView,
  MatMultiYearView,
  MatRangeDateSelectionModel,
  MatSingleDateSelectionModel,
  MatStartDate,
  MatYearView,
  matDatepickerAnimations,
  yearsPerPage,
  yearsPerRow
};
//# sourceMappingURL=@angular_material_datepicker.js.map
