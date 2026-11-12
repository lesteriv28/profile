import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  CommonModule,
  NgClass,
  NgStyle,
  isPlatformBrowser
} from "./chunk-EENXOE56.js";
import "./chunk-U4PMGSCF.js";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  PLATFORM_ID,
  ViewChild,
  inject,
  setClassMetadata,
  signal,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵstyleProp,
  ɵɵviewQuery
} from "./chunk-4T6JNPXZ.js";
import {
  __spreadValues
} from "./chunk-S6STQDT5.js";

// node_modules/@omnedia/ngx-starry-sky/fesm2022/omnedia-ngx-starry-sky.mjs
var _c0 = ["OmStarrySkyCanvas"];
var _c1 = ["OmStarrySkySvg"];
var _c2 = ["OmStarrySkyWrapper"];
var _c3 = ["*"];
function NgxStarrySkyComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "rect");
    ɵɵelementStart(1, "defs")(2, "linearGradient", 5);
    ɵɵelement(3, "stop", 6)(4, "stop", 7);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const star_r1 = ctx;
    const ctx_r1 = ɵɵnextContext();
    ɵɵattribute("key", star_r1.id)("x", star_r1.x)("y", star_r1.y)("width", (ctx_r1.shootingStarsProps.starWidth ?? 1) * star_r1.scale)("height", ctx_r1.shootingStarsProps.starHeight ?? 10)("fill", "url(#gradient)")("transform", "rotate(" + star_r1.angle + ", " + (star_r1.x + (ctx_r1.shootingStarsProps.starWidth ?? 1) * star_r1.scale / 2) + ", " + (star_r1.y + (ctx_r1.shootingStarsProps.starHeight ?? 10) / 2) + ")");
    ɵɵadvance(3);
    ɵɵstyleProp("stop-color", ctx_r1.shootingStarsProps.trailColor)("stop-opacity", "0");
    ɵɵadvance();
    ɵɵstyleProp("stop-color", ctx_r1.shootingStarsProps.starColor)("stop-opacity", "1");
  }
}
var NgxStarrySkyComponent = class _NgxStarrySkyComponent {
  canvasRef;
  svgRef;
  wrapperRef;
  styleClass;
  disableShootingStars = false;
  set skyColor(color) {
    this.style["--om-starry-sky-color"] = color;
  }
  set starsBackgroundPropsValue(props) {
    this.starsBackgroundProps = __spreadValues(__spreadValues({}, this.starsBackgroundProps), props);
  }
  starsBackgroundProps = {
    starDensity: 15e-5,
    allStarsTwinkle: true,
    twinkleProbability: 0.7,
    minTwinkleSpeed: 0.5,
    maxTwinkleSpeed: 1
  };
  set shootingStarsPropsValue(props) {
    this.shootingStarsProps = __spreadValues(__spreadValues({}, this.shootingStarsProps), props);
  }
  shootingStarsProps = {
    minSpeed: 10,
    maxSpeed: 30,
    minDelay: 1200,
    maxDelay: 4200,
    starColor: "#cd8ef8",
    trailColor: "#80dffa",
    starWidth: 10,
    starHeight: 1
  };
  shootingStar = signal(void 0, ...ngDevMode ? [{
    debugName: "shootingStar"
  }] : []);
  style = {};
  stars = [];
  isInView = signal(false, ...ngDevMode ? [{
    debugName: "isInView"
  }] : []);
  isAnimating = signal(false, ...ngDevMode ? [{
    debugName: "isAnimating"
  }] : []);
  animationFrameIdSky;
  animationFrameIdShootingStar;
  intersectionObserver;
  platformId = inject(PLATFORM_ID);
  ngAfterViewInit() {
    this.initStarSky();
    this.initShootingStars();
    if (isPlatformBrowser(this.platformId)) {
      this.intersectionObserver = new IntersectionObserver(([entry]) => {
        this.renderContents(entry.isIntersecting);
      });
      this.intersectionObserver.observe(this.canvasRef.nativeElement);
    }
  }
  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener("resize", () => this.setCanvasSize());
    }
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
    if (this.animationFrameIdSky) {
      cancelAnimationFrame(this.animationFrameIdSky);
    }
    if (this.animationFrameIdShootingStar) {
      cancelAnimationFrame(this.animationFrameIdShootingStar);
    }
  }
  renderContents(isIntersecting) {
    if (isIntersecting && !this.isInView()) {
      this.isInView.set(true);
      if (!this.isAnimating()) {
        this.animationFrameIdSky = requestAnimationFrame(() => this.renderStarSky());
        this.animationFrameIdShootingStar = requestAnimationFrame(() => this.moveShootingStar());
      }
    } else if (!isIntersecting) {
      this.isInView.set(false);
    }
  }
  initStarSky() {
    if (isPlatformBrowser(this.platformId)) {
      window.addEventListener("resize", () => this.setCanvasSize());
    }
    this.setCanvasSize();
    this.updateStars();
    this.renderStarSky();
  }
  initShootingStars() {
    if (this.disableShootingStars) {
      return;
    }
    this.createShootingStar();
    this.moveShootingStar();
  }
  renderStarSky() {
    if (!this.isInView()) {
      this.isAnimating.set(false);
      return;
    }
    this.isAnimating.set(true);
    const context = this.canvasRef.nativeElement.getContext("2d");
    if (!context) {
      return;
    }
    context.clearRect(0, 0, this.canvasRef.nativeElement.width, this.canvasRef.nativeElement.height);
    this.stars.forEach((star) => {
      context.beginPath();
      context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      context.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
      context.fill();
      if (star.twinkleSpeed !== null) {
        star.opacity = 0.5 + Math.abs(Math.sin(Date.now() * 1e-3 / star.twinkleSpeed) * 0.5);
      }
    });
    this.animationFrameIdSky = requestAnimationFrame(() => this.renderStarSky());
  }
  updateStars() {
    const context = this.canvasRef.nativeElement.getContext("2d");
    if (!context) {
      return;
    }
    const {
      width,
      height
    } = this.wrapperRef.nativeElement.getBoundingClientRect();
    this.stars = this.generateStars(width, height);
  }
  generateStars(width, height) {
    const area = width * height;
    const numStars = Math.floor(area * (this.starsBackgroundProps.starDensity ?? 15e-5));
    return Array.from({
      length: numStars
    }, () => {
      const shouldTwinkle = this.starsBackgroundProps.allStarsTwinkle || Math.random() < (this.starsBackgroundProps.twinkleProbability ?? 0.7);
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 0.05 + 0.5,
        opacity: Math.random() * 0.5 + 0.5,
        twinkleSpeed: shouldTwinkle ? (this.starsBackgroundProps.minTwinkleSpeed ?? 0.5) + Math.random() * ((this.starsBackgroundProps.maxTwinkleSpeed ?? 1) - (this.starsBackgroundProps.minTwinkleSpeed ?? 0.5)) : null
      };
    });
  }
  setCanvasSize() {
    this.canvasRef.nativeElement.width = this.wrapperRef.nativeElement.getBoundingClientRect().width;
    this.canvasRef.nativeElement.height = this.wrapperRef.nativeElement.getBoundingClientRect().height;
  }
  createShootingStar() {
    if (this.disableShootingStars) {
      return;
    }
    const {
      x,
      y,
      angle
    } = this.getRandomStartPoint();
    const shootingStar = {
      id: Date.now(),
      x,
      y,
      angle,
      scale: 1,
      speed: Math.random() * ((this.shootingStarsProps.maxSpeed ?? 30) - (this.shootingStarsProps.minSpeed ?? 10)) + (this.shootingStarsProps.minSpeed ?? 10),
      distance: 0
    };
    this.shootingStar.set(shootingStar);
    const randomDelay = Math.random() * ((this.shootingStarsProps.maxDelay ?? 4200) - (this.shootingStarsProps.minDelay ?? 1200)) + (this.shootingStarsProps.minDelay ?? 1200);
    setTimeout(() => this.createShootingStar(), randomDelay);
  }
  moveShootingStar() {
    if (this.disableShootingStars) {
      return;
    }
    if (!this.isInView()) {
      this.isAnimating.set(false);
      return;
    }
    this.isAnimating.set(true);
    this.animationFrameIdShootingStar = requestAnimationFrame(() => this.moveShootingStar());
    if (!this.shootingStar()) {
      return;
    }
    const prevStar = Object.assign({}, this.shootingStar());
    const newX = prevStar.x + prevStar.speed * Math.cos(prevStar.angle * Math.PI / 180);
    const newY = prevStar.y + prevStar.speed * Math.sin(prevStar.angle * Math.PI / 180);
    const newDistance = prevStar.distance + prevStar.speed;
    const newScale = 1 + newDistance / 100;
    if (newX < -20 || newX > this.wrapperRef.nativeElement.offsetWidth + 20 || newY < -20 || newY > this.wrapperRef.nativeElement.offsetHeight + 20) {
      this.shootingStar.set(void 0);
      return;
    }
    prevStar.x = newX;
    prevStar.y = newY;
    prevStar.distance = newDistance;
    prevStar.scale = newScale;
    this.shootingStar.set(prevStar);
  }
  getRandomStartPoint() {
    const side = Math.floor(Math.random() * 4);
    const offset = Math.random() * this.wrapperRef.nativeElement.offsetWidth;
    switch (side) {
      case 0:
        return {
          x: offset,
          y: 0,
          angle: 45
        };
      case 1:
        return {
          x: this.wrapperRef.nativeElement.offsetWidth,
          y: offset,
          angle: 135
        };
      case 2:
        return {
          x: offset,
          y: this.wrapperRef.nativeElement.offsetHeight,
          angle: 225
        };
      case 3:
        return {
          x: 0,
          y: offset,
          angle: 315
        };
      default:
        return {
          x: 0,
          y: 0,
          angle: 45
        };
    }
  }
  static ɵfac = function NgxStarrySkyComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgxStarrySkyComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NgxStarrySkyComponent,
    selectors: [["om-starry-sky"]],
    viewQuery: function NgxStarrySkyComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 5)(_c1, 5)(_c2, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.canvasRef = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.svgRef = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.wrapperRef = _t.first);
      }
    },
    inputs: {
      styleClass: "styleClass",
      disableShootingStars: "disableShootingStars",
      skyColor: "skyColor",
      starsBackgroundPropsValue: [0, "starsBackgroundConfig", "starsBackgroundPropsValue"],
      shootingStarsPropsValue: [0, "shootingStarsConfig", "shootingStarsPropsValue"]
    },
    ngContentSelectors: _c3,
    decls: 9,
    vars: 3,
    consts: [["OmStarrySkyWrapper", ""], ["OmStarrySkySvg", ""], ["OmStarrySkyCanvas", ""], [1, "om-starry-sky", 3, "ngStyle", "ngClass"], [1, "om-starry-sky-background"], ["id", "gradient", "x1", "0%", "y1", "0%", "x2", "100%", "y2", "100%"], ["offset", "0%"], ["offset", "100%"]],
    template: function NgxStarrySkyComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "div", 3, 0)(2, "div", 4);
        ɵɵnamespaceSVG();
        ɵɵelementStart(3, "svg", null, 1);
        ɵɵconditionalCreate(5, NgxStarrySkyComponent_Conditional_5_Template, 5, 15);
        ɵɵelementEnd();
        ɵɵnamespaceHTML();
        ɵɵelement(6, "canvas", null, 2);
        ɵɵelementEnd();
        ɵɵprojection(8);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        let tmp_5_0;
        ɵɵproperty("ngStyle", ctx.style)("ngClass", ctx.styleClass);
        ɵɵadvance(5);
        ɵɵconditional((tmp_5_0 = ctx.shootingStar()) ? 5 : -1, tmp_5_0);
      }
    },
    dependencies: [CommonModule, NgClass, NgStyle],
    styles: [".om-starry-sky[_ngcontent-%COMP%]{--om-starry-sky-color: rgb(23 23 23/1);position:relative;width:100%;height:100%}.om-starry-sky[_ngcontent-%COMP%]   .om-starry-sky-background[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;background-color:var(--om-starry-sky-color);pointer-events:none}.om-starry-sky[_ngcontent-%COMP%]   .om-starry-sky-background[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%], .om-starry-sky[_ngcontent-%COMP%]   .om-starry-sky-background[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;inset:0}"],
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxStarrySkyComponent, [{
    type: Component,
    args: [{
      selector: "om-starry-sky",
      standalone: true,
      imports: [CommonModule],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<div class="om-starry-sky" [ngStyle]="style" [ngClass]="styleClass" #OmStarrySkyWrapper>\r
  <div class="om-starry-sky-background">\r
    <svg #OmStarrySkySvg>\r
      @if (shootingStar(); as star) {\r
        <rect [attr.key]="star.id" [attr.x]="star.x" [attr.y]="star.y"\r
              [attr.width]="(shootingStarsProps.starWidth ?? 1) * (star.scale)"\r
              [attr.height]="shootingStarsProps.starHeight ?? 10" [attr.fill]="'url(#gradient)'"\r
              [attr.transform]="'rotate(' + star.angle + ', ' + (star.x + (shootingStarsProps.starWidth ?? 1) * star.scale / 2) + ', ' + (star.y + (shootingStarsProps.starHeight ?? 10) / 2) + ')'">\r
        </rect>\r
        <defs>\r
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">\r
            <stop offset="0%" [style.stopColor]="shootingStarsProps.trailColor" [style.stopOpacity]="'0'"/>\r
            <stop offset="100%" [style.stopColor]="shootingStarsProps.starColor" [style.stopOpacity]="'1'"/>\r
          </linearGradient>\r
        </defs>\r
      }\r
    </svg>\r
    <canvas #OmStarrySkyCanvas></canvas>\r
  </div>\r
\r
  <ng-content></ng-content>\r
</div>\r
`,
      styles: [".om-starry-sky{--om-starry-sky-color: rgb(23 23 23/1);position:relative;width:100%;height:100%}.om-starry-sky .om-starry-sky-background{position:absolute;width:100%;height:100%;background-color:var(--om-starry-sky-color);pointer-events:none}.om-starry-sky .om-starry-sky-background canvas,.om-starry-sky .om-starry-sky-background svg{position:absolute;width:100%;height:100%;inset:0}\n"]
    }]
  }], null, {
    canvasRef: [{
      type: ViewChild,
      args: ["OmStarrySkyCanvas"]
    }],
    svgRef: [{
      type: ViewChild,
      args: ["OmStarrySkySvg"]
    }],
    wrapperRef: [{
      type: ViewChild,
      args: ["OmStarrySkyWrapper"]
    }],
    styleClass: [{
      type: Input,
      args: ["styleClass"]
    }],
    disableShootingStars: [{
      type: Input,
      args: ["disableShootingStars"]
    }],
    skyColor: [{
      type: Input,
      args: ["skyColor"]
    }],
    starsBackgroundPropsValue: [{
      type: Input,
      args: ["starsBackgroundConfig"]
    }],
    shootingStarsPropsValue: [{
      type: Input,
      args: ["shootingStarsConfig"]
    }]
  });
})();
export {
  NgxStarrySkyComponent
};
//# sourceMappingURL=@omnedia_ngx-starry-sky.js.map
