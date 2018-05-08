webpackJsonp([2],{

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPageModule", function() { return UserPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user__ = __webpack_require__(285);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UserPageModule = (function () {
    function UserPageModule() {
    }
    return UserPageModule;
}());
UserPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__user__["a" /* UserPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__user__["a" /* UserPage */]),
        ],
    })
<<<<<<< HEAD
], UserPageModule);
=======
], UvasPageModule);

//# sourceMappingURL=uvas.module.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UvasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(97);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UvasPage = (function () {
    function UvasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.slides = [
            {
                title: "Tipo 1 ",
                description: "In volutpat luctus urna, sit amet scelerisque mauris tincidunt eu. Phasellus est arcu, posuere in lectus ut, tristique viverra justo. Morbi cursus quis purus ac ullamcorper. Nam vitae consectetur felis. Sed bibendum risus eget leo fringilla, eget sagittis mi congue. Donec bibendum mi eu augue accumsan, mattis vulputate magna luctus. Praesent vel interdum sem. Phasellus diam nunc, vehicula vel est quis, feugiat facilisis mauris. Morbi ut mauris nec diam maximus sagittis. Praesent dapibus posuere vehicula. Curabitur posuere elit eu arcu maximus, vitae gravida justo auctor. In hac habitasse platea dictumst. Nullam ultricies arcu ligula, ut laoreet mauris dignissim ut.",
                image: "assets/img/tipo1.png",
            },
            {
                title: "Tipo 2",
                description: "In id tempus nisi, eget dignissim urna. Nunc efficitur, sem non bibendum faucibus, nisl lectus facilisis odio, a cursus purus elit eget lacus. Aliquam enim turpis, feugiat vitae euismod sit amet, ullamcorper eu ipsum. Sed nec arcu gravida, accumsan urna a, eleifend diam. Aenean lobortis bibendum justo, ut vehicula metus. Duis dictum auctor arcu, eu elementum sapien viverra hendrerit. Cras fringilla lectus eros, id porttitor diam sollicitudin ut. Cras vel lectus dolor.",
                image: "assets/img/tipo2.png",
            },
            {
                title: "Tipo 3",
                description: "Praesent quis sapien et eros tincidunt finibus. Sed vitae quam hendrerit, dignissim augue eget, gravida neque. Suspendisse magna lacus, tincidunt sit amet aliquam at, luctus id odio. Pellentesque non tempor odio. Nulla dictum mauris nec sapien rhoncus, vel ornare ipsum fringilla. Proin efficitur libero at varius aliquam. Praesent commodo felis sed sagittis varius. Donec bibendum, mi eu tristique cursus, metus justo tempus ante, sed malesuada elit ante id justo. Donec sed blandit orci.",
                image: "assets/img/tipo3.png",
            },
            {
                title: "Tipo 4",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada leo magna, sit amet tempus lectus mollis sed. Nunc id diam nunc. Morbi consectetur eros vitae fringilla venenatis. Nullam tincidunt, urna at lacinia lobortis, elit magna commodo magna, non fermentum ante diam et nisi. Duis volutpat in odio sed fermentum. Ut tellus elit, pellentesque eu libero vitae, suscipit interdum ipsum. Donec in leo sed ligula porta efficitur ut vulputate erat. Cras cursus quam ac efficitur fringilla. Donec tincidunt ultrices tortor, vitae commodo leo posuere in.",
                image: "assets/img/tipo4.png",
            },
        ];
    }
    UvasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UvasPage');
    };
    UvasPage.prototype.carrousel = function (index) {
        this.slider.slideTo(index);
    };
    return UvasPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */])
], UvasPage.prototype, "slider", void 0);
UvasPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-uvas',template:/*ion-inline-start:"C:\Users\ByW1\Desktop\vinedoBlank\src\pages\uvas\uvas.html"*/'<!--\n  Generated template for the UvasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n\n    <ion-navbar transparent>\n        <button ion-button menuToggle icon-only class="menu">\n          <ion-icon></ion-icon>\n        </button>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-slides pager>\n    <ion-slide>\n      <ion-card>\n        <ion-card-header>\n          <img src="../assets/img/tituloUvas.png" class="slide-image" />\n        </ion-card-header>\n        <ion-card-content>\n          <div>\n            <img src="assets/img/tipo1.png" alt="tipo1" (click)="carrousel(1)">\n            <img src="assets/img/tipo2.png" alt="tipo2" (click)="carrousel(2)">\n            <img src="assets/img/tipo3.png" alt="tipo3" (click)="carrousel(3)">\n            <img src="assets/img/tipo4.png" alt="tipo4" (click)="carrousel(4)">\n          </div>\n          <br>\n          <br>\n          <br>\n          <br>\n          <br>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt diam metus, quis mollis ante efficitur id. Quisque\n            dolor ligula, commodo id nisl eget, iaculis tincidunt eros. Proin laoreet leo eu justo placerat ullamcorper. Sed\n            elementum tellus eu lacus sodales commodo. Class aptent taciti sociosqu ad litora torquent per conubia nostra,\n            per inceptos himenaeos. \n  \n          \n          \n        </ion-card-content>\n      </ion-card>\n    </ion-slide>\n    <ion-slide *ngFor="let slide of slides; let i=index">\n      <ion-card class="ion-card" id="i">\n\n        <ion-card-content>\n          <img [src]="slide.image" class="slide-image" />\n          <h2 [innerHTML]="slide.title"></h2>\n          <p [innerHTML]="slide.description"></p>\n        </ion-card-content>\n      </ion-card>\n    </ion-slide>\n  </ion-slides>\n</ion-content>'/*ion-inline-end:"C:\Users\ByW1\Desktop\vinedoBlank\src\pages\uvas\uvas.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], UvasPage);
>>>>>>> 7c601bebd72847a6672cd7f4c5905ff08210d7ca

//# sourceMappingURL=user.module.js.map

/***/ })

});
//# sourceMappingURL=2.js.map