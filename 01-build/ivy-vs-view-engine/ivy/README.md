1. Быстрее
2. Проще
3. Меньше

`Template HTML` (compilation)-> `Инструкции шаблона` (runtime)-> `DOM`

```ts
if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"]
    (0, "app-header", 0)
    /**
     * <app-header></app-header>
    */
    (1, "div");
    /**
     * <app-header></app-header>
     * <div></div>
    */
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");
    /**
     * <app-header></app-header>
     * <div></div>
     * <h2>
    */
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Hi");
    /**
     * <app-header></app-header>
     * <div></div>
     * <h2>
     *      Hi
    */
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    /**
     * <app-header></app-header>
     * <div></div>
     * <h2>
     *      Hi</h2>
    */
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3", 1);
    /**
     * <app-header></app-header>
     * <div></div>
     * <h2>
     *      Hi</h2>
     * <h3>
    */
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_h3_click_4_listener() {
      return ctx.check();
    });
    /**
     * <app-header></app-header>
     * <div></div>
     * <h2>
     *      Hi</h2>
     * <h3 (click)="cb()">
    */
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    /**
     * <app-header></app-header>
     * <div></div>
     * <h2>
     *      Hi</h2>
     * <h3 (click)="cb()">
     *      <text>
    */
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    /**
     * <app-header></app-header>
     * <div></div>
     * <h2>
     *      Hi</h2>
     * <h3 (click)="cb()">
     *      <text></h3>
    */
}
if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", ctx.title);
    /**
     * <app-header [title]="ctx.title"></app-header> --
     * <div></div>
     * <h2>
     *      Hi</h2>
     * <h3 (click)="cb()">
     *      <text></h3>
    */
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    /**
     * <app-header [title]="ctx.title"></app-header> 
     * <div></div> --
     * <h2>
     *      Hi</h2>
     * <h3 (click)="cb()">
     *      <text></h3>
    */
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.divClasses);
    /**
     * <app-header [title]="ctx.title"></app-header> 
     * <div class="{{divClasses}}"></div> --
     * <h2>
     *      Hi</h2>
     * <h3 (click)="cb()">
     *      <text></h3>
    */
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]
    ("width", 100, "px")
    /**
     * <app-header [title]="ctx.title"></app-header> 
     * <div class="{{divClasses}}" [style.width.px]="100"></div> --
     * <h2>
     *      Hi</h2>
     * <h3 (click)="cb()">
     *      <text></h3>
    */
    ("height", 5, "px");
    /**
     * <app-header [title]="ctx.title"></app-header> 
     * <div class="{{divClasses}}" [style.width.px]="100" [style.height.px]="5"></div> --
     * <h2>
     *      Hi</h2>
     * <h3 (click)="cb()">
     *      <text></h3>
    */
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    /**
     * <app-header [title]="ctx.title"></app-header> 
     * <div class="{{divClasses}}" [style.width.px]="100" [style.height.px]="5"></div>
     * <h2>
     *      Hi</h2>
     * <h3 (click)="cb()">
     *      <text></h3> --
    */
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" It's my content ", ctx.textContent, "\n");
    /**
     * <app-header [title]="ctx.title"></app-header> 
     * <div class="{{divClasses}}" [style.width.px]="100" [style.height.px]="5"></div>
     * <h2>
     *      Hi</h2>
     * <h3 (click)="cb()">
     *      It's my content {{ctx.textContent}}\n</h3> --
    */
}
```
