import {
  isPlatformBrowser
} from "./chunk-H4OBMNTT.js";
import "./chunk-PPIJ7VQ7.js";
import {
  Component,
  Input,
  NgModule,
  Output,
  PLATFORM_ID,
  Renderer2,
  ViewChild,
  booleanAttribute,
  inject,
  input,
  model,
  output,
  setClassMetadata,
  viewChild,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵnextContext,
  ɵɵqueryAdvance,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuerySignal
} from "./chunk-7XGDFKR3.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-GOMI4DH3.js";

// node_modules/ngx-typed-writer/fesm2022/ngx-typed-writer.mjs
var _c0 = ["typedText"];
var _c1 = ["cursorRef"];
function NgxTypedWriterComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdomElementStart(0, "span", 2, 1);
    ɵɵtext(2);
    ɵɵdomElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate1("", ctx_r0.cursorChar(), " ");
  }
}
var FADE_OUT_CLASS = "typed-fade-out";
function typeHtmlChars(isHTML, currentString, currentStringPosition) {
  if (!isHTML) return currentStringPosition;
  const currentCharacter = currentString.substring(currentStringPosition).charAt(0);
  if (currentCharacter === "<" || currentCharacter === "&") {
    let endTag = "";
    if (currentCharacter === "<") {
      endTag = ">";
    } else {
      endTag = ";";
    }
    while (currentString.substring(currentStringPosition + 1).charAt(0) !== endTag) {
      currentStringPosition++;
      if (currentStringPosition + 1 > currentString.length) {
        break;
      }
    }
    currentStringPosition++;
  }
  return currentStringPosition;
}
function backSpaceHtmlChars(isHTML, currentString, currentStringPosition) {
  if (!isHTML) return currentStringPosition;
  const currentCharacter = currentString.substring(currentStringPosition).charAt(0);
  if (currentCharacter === ">" || currentCharacter === ";") {
    let endTag = "";
    if (currentCharacter === ">") {
      endTag = "<";
    } else {
      endTag = "&";
    }
    while (currentString.substring(currentStringPosition - 1).charAt(0) !== endTag) {
      currentStringPosition--;
      if (currentStringPosition < 0) {
        break;
      }
    }
    currentStringPosition--;
  }
  return currentStringPosition;
}
function shuffleStringsIfNeeded(shuffle, strings) {
  if (!shuffle) return strings;
  return strings.sort(() => Math.random() - 0.5);
}
var NgxTypedWriterComponent = class _NgxTypedWriterComponent {
  constructor() {
    this.platformId = inject(PLATFORM_ID);
    this.renderer2 = inject(Renderer2);
    this.typedTextRef = viewChild(
      "typedText",
      ...ngDevMode ? [{
        debugName: "typedTextRef"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.cursor = viewChild(
      "cursorRef",
      ...ngDevMode ? [{
        debugName: "cursor"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.strings = model(
      [],
      ...ngDevMode ? [{
        debugName: "strings"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.typeSpeed = input(
      40,
      ...ngDevMode ? [{
        debugName: "typeSpeed"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.startDelay = input(
      0,
      ...ngDevMode ? [{
        debugName: "startDelay"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.backSpeed = input(
      40,
      ...ngDevMode ? [{
        debugName: "backSpeed"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.smartBackspace = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
      debugName: "smartBackspace"
    } : (
      /* istanbul ignore next */
      {}
    )), {
      transform: booleanAttribute
    }));
    this.shuffle = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
      debugName: "shuffle"
    } : (
      /* istanbul ignore next */
      {}
    )), {
      transform: booleanAttribute
    }));
    this.backDelay = input(
      1e3,
      ...ngDevMode ? [{
        debugName: "backDelay"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.isHTML = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
      debugName: "isHTML"
    } : (
      /* istanbul ignore next */
      {}
    )), {
      transform: booleanAttribute
    }));
    this.fadeOut = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
      debugName: "fadeOut"
    } : (
      /* istanbul ignore next */
      {}
    )), {
      transform: booleanAttribute
    }));
    this.loop = input(true, __spreadProps(__spreadValues({}, ngDevMode ? {
      debugName: "loop"
    } : (
      /* istanbul ignore next */
      {}
    )), {
      transform: booleanAttribute
    }));
    this.showCursor = input(true, __spreadProps(__spreadValues({}, ngDevMode ? {
      debugName: "showCursor"
    } : (
      /* istanbul ignore next */
      {}
    )), {
      transform: booleanAttribute
    }));
    this.cursorChar = input(
      "|",
      ...ngDevMode ? [{
        debugName: "cursorChar"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.fadeOutDelay = input(
      500,
      ...ngDevMode ? [{
        debugName: "fadeOutDelay"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.currentStringIndex = 0;
    this.currentString = "";
    this.currentStringPosition = 0;
    this.isTypingPaused = false;
    this.stopNum = 0;
    this.destroy = output();
    this.initTyped = output();
    this.completeLoop = output();
  }
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.init();
    }
  }
  ngOnDestroy() {
    clearTimeout(this.timeout);
    this.destroy.emit();
  }
  init() {
    this.strings.set(shuffleStringsIfNeeded(this.shuffle(), this.strings()));
    this.currentString = this.strings()[this.currentStringIndex];
    this.timeout = setTimeout(() => {
      this.typeString();
      this.initTyped.emit();
    }, this.startDelay());
  }
  typeString() {
    if (this.isTypingPaused) return;
    if (this.fadeOut()) {
      const typedElement = this.typedTextRef()?.nativeElement;
      this.renderer2.removeClass(typedElement, FADE_OUT_CLASS);
      if (this.showCursor()) {
        const cursorElement = this.cursor()?.nativeElement;
        this.renderer2.removeClass(cursorElement, FADE_OUT_CLASS);
      }
    }
    if (this.currentStringPosition < this.currentString.length) {
      this.typeCharacter();
    } else {
      this.isTypingPaused = true;
      this.timeout = setTimeout(() => {
        this.isTypingPaused = false;
        this.timeout = setTimeout(() => {
          this.backspaceString();
        }, this.backDelay());
      }, this.typeSpeed());
    }
  }
  typeCharacter() {
    this.timeout = setTimeout(() => {
      this.currentStringPosition = typeHtmlChars(this.isHTML(), this.currentString, this.currentStringPosition);
      const nextString = this.currentString.substring(0, this.currentStringPosition + 1);
      const lastItem = this.strings().at(-1);
      this.typedTextRef().nativeElement.innerHTML = nextString;
      this.currentStringPosition++;
      if (nextString === lastItem && !this.loop()) {
        this.completeLoop.emit();
        return;
      }
      this.typeString();
    }, this.typeSpeed());
  }
  backspaceString() {
    if (this.isTypingPaused) return;
    if (this.fadeOut()) {
      this.initFadeOut();
      return;
    }
    if (this.currentStringPosition > this.stopNum) {
      this.backspaceCharacter();
    } else {
      this.isTypingPaused = true;
      this.timeout = setTimeout(() => {
        this.isTypingPaused = false;
        this.currentStringIndex++;
        if (this.currentStringIndex >= this.strings().length) {
          if (this.loop()) {
            this.currentStringIndex = 0;
          } else {
            return;
          }
        }
        this.currentString = this.strings()[this.currentStringIndex];
        this.timeout = setTimeout(() => {
          this.typeString();
        }, this.typeSpeed());
      }, this.typeSpeed());
    }
  }
  backspaceCharacter() {
    const currentString = this.typedTextRef()?.nativeElement.innerHTML;
    this.currentStringPosition = backSpaceHtmlChars(this.isHTML(), this.currentString, this.currentStringPosition);
    const curStringAtPosition = currentString.substring(0, this.currentStringPosition);
    this.typedTextRef().nativeElement.innerHTML = curStringAtPosition;
    this.timeout = setTimeout(() => {
      if (this.smartBackspace()) {
        const nextStringPartial = this.strings()[this.currentStringIndex + 1];
        const compare = curStringAtPosition === nextStringPartial?.substring(0, this.currentStringPosition);
        if (nextStringPartial && compare) {
          this.stopNum = this.currentStringPosition - 1;
        } else {
          this.stopNum = 0;
        }
      }
      if (this.currentStringPosition > this.stopNum) {
        this.currentStringPosition--;
        this.backspaceString();
      } else if (this.currentStringPosition <= this.stopNum) {
        this.currentStringIndex++;
        if (this.currentStringIndex === this.strings.length) {
          this.currentStringIndex = 0;
        }
        this.typeString();
      }
    }, this.backSpeed());
  }
  initFadeOut() {
    const typedElement = this.typedTextRef()?.nativeElement;
    this.renderer2.addClass(typedElement, FADE_OUT_CLASS);
    if (this.showCursor()) {
      const cursorElement = this.cursor()?.nativeElement;
      this.renderer2.addClass(cursorElement, FADE_OUT_CLASS);
    }
    this.timeout = setTimeout(() => {
      this.currentStringIndex++;
      typedElement.innerHTML = "";
      if (this.strings().length > this.currentStringIndex) {
        this.currentStringPosition = 0;
        this.currentString = this.strings()[this.currentStringIndex];
        this.typeString();
      } else {
        this.currentStringPosition = 0;
        this.currentStringIndex = 0;
        this.currentString = this.strings()[this.currentStringIndex];
        this.typeString();
      }
    }, this.fadeOutDelay());
  }
  static {
    this.ɵfac = function NgxTypedWriterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgxTypedWriterComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NgxTypedWriterComponent,
      selectors: [["ngx-typed-writer"]],
      viewQuery: function NgxTypedWriterComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuerySignal(ctx.typedTextRef, _c0, 5)(ctx.cursor, _c1, 5);
        }
        if (rf & 2) {
          ɵɵqueryAdvance(2);
        }
      },
      inputs: {
        strings: [1, "strings"],
        typeSpeed: [1, "typeSpeed"],
        startDelay: [1, "startDelay"],
        backSpeed: [1, "backSpeed"],
        smartBackspace: [1, "smartBackspace"],
        shuffle: [1, "shuffle"],
        backDelay: [1, "backDelay"],
        isHTML: [1, "isHTML"],
        fadeOut: [1, "fadeOut"],
        loop: [1, "loop"],
        showCursor: [1, "showCursor"],
        cursorChar: [1, "cursorChar"],
        fadeOutDelay: [1, "fadeOutDelay"]
      },
      outputs: {
        strings: "stringsChange",
        destroy: "destroy",
        initTyped: "initTyped",
        completeLoop: "completeLoop"
      },
      decls: 3,
      vars: 1,
      consts: [["typedText", ""], ["cursorRef", ""], [1, "typing-cursor"]],
      template: function NgxTypedWriterComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵdomElement(0, "span", null, 0);
          ɵɵconditionalCreate(2, NgxTypedWriterComponent_Conditional_2_Template, 3, 1, "span", 2);
        }
        if (rf & 2) {
          ɵɵadvance(2);
          ɵɵconditional(ctx.showCursor() ? 2 : -1);
        }
      },
      styles: [".typing-cursor[_ngcontent-%COMP%]{-webkit-animation:_ngcontent-%COMP%_blink .7s infinite;display:inline-block;opacity:1;animation:_ngcontent-%COMP%_blink .7s infinite}@keyframes _ngcontent-%COMP%_blink{0%{opacity:1}50%{opacity:0}to{opacity:1}}.typed-fade-out[_ngcontent-%COMP%]{opacity:0;transition:opacity .25s}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxTypedWriterComponent, [{
    type: Component,
    args: [{
      selector: "ngx-typed-writer",
      template: `
    <span #typedText> </span>
    @if (showCursor()) {
      <span #cursorRef class="typing-cursor">{{ cursorChar() }} </span>
    }
  `,
      styles: [".typing-cursor{-webkit-animation:blink .7s infinite;display:inline-block;opacity:1;animation:blink .7s infinite}@keyframes blink{0%{opacity:1}50%{opacity:0}to{opacity:1}}.typed-fade-out{opacity:0;transition:opacity .25s}\n"]
    }]
  }], null, {
    typedTextRef: [{
      type: ViewChild,
      args: ["typedText", {
        isSignal: true
      }]
    }],
    cursor: [{
      type: ViewChild,
      args: ["cursorRef", {
        isSignal: true
      }]
    }],
    strings: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "strings",
        required: false
      }]
    }, {
      type: Output,
      args: ["stringsChange"]
    }],
    typeSpeed: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "typeSpeed",
        required: false
      }]
    }],
    startDelay: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "startDelay",
        required: false
      }]
    }],
    backSpeed: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "backSpeed",
        required: false
      }]
    }],
    smartBackspace: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "smartBackspace",
        required: false
      }]
    }],
    shuffle: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "shuffle",
        required: false
      }]
    }],
    backDelay: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "backDelay",
        required: false
      }]
    }],
    isHTML: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "isHTML",
        required: false
      }]
    }],
    fadeOut: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "fadeOut",
        required: false
      }]
    }],
    loop: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "loop",
        required: false
      }]
    }],
    showCursor: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "showCursor",
        required: false
      }]
    }],
    cursorChar: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "cursorChar",
        required: false
      }]
    }],
    fadeOutDelay: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "fadeOutDelay",
        required: false
      }]
    }],
    destroy: [{
      type: Output,
      args: ["destroy"]
    }],
    initTyped: [{
      type: Output,
      args: ["initTyped"]
    }],
    completeLoop: [{
      type: Output,
      args: ["completeLoop"]
    }]
  });
})();
var NgxTypedWriterModule = class _NgxTypedWriterModule {
  static {
    this.ɵfac = function NgxTypedWriterModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgxTypedWriterModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NgxTypedWriterModule,
      imports: [NgxTypedWriterComponent],
      exports: [NgxTypedWriterComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxTypedWriterModule, [{
    type: NgModule,
    args: [{
      imports: [NgxTypedWriterComponent],
      exports: [NgxTypedWriterComponent]
    }]
  }], null, null);
})();
export {
  NgxTypedWriterComponent,
  NgxTypedWriterModule
};
//# sourceMappingURL=ngx-typed-writer.js.map
