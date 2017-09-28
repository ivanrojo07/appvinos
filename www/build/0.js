webpackJsonp([0],{

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup__ = __webpack_require__(284);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignupPageModule = (function () {
    function SignupPageModule() {
    }
    return SignupPageModule;
}());
SignupPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]),
        ],
    })
], SignupPageModule);

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Usuario; });
var Usuario = (function () {
    function Usuario(idusuario, nombre, apaterno, amaterno, fechanac, email, password) {
        this.idusuario = idusuario;
        this.nombre = nombre;
        this.apaterno = apaterno;
        this.amaterno = amaterno;
        this.fechanac = fechanac;
        this.email = email;
        this.password = password;
    }
    return Usuario;
}());

//# sourceMappingURL=usuario.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_usuario__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_usuario_service_usuario_service__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Params} from '@angular/router';


/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = (function () {
    function SignupPage(navCtrl, _usuarioService, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this._usuarioService = _usuarioService;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.usuario = new __WEBPACK_IMPORTED_MODULE_2__models_usuario__["a" /* Usuario */]('', '', '', '', '', '', '');
        this.confirm_pass = '';
        this.confirm = false;
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.usuario + this.confirm_pass);
        if (this.usuario.password != this.confirm_pass) {
            console.log("NO-coinciden");
            this.alert('Error', 'Las contraseñas introducidas no coinciden, vuelve a verificarlas');
            this.usuario = new __WEBPACK_IMPORTED_MODULE_2__models_usuario__["a" /* Usuario */]('', '', '', '', '', '', '');
            this.confirm_pass = '';
        }
        else {
            // console.log("entra al else, coincide");
            if (this.usuario.password == this.confirm_pass) {
                this.alert('Success', "coinciden contraseñas" + this.usuario.nombre);
                this._usuarioService.addUsuario(this.usuario).subscribe(function (result) {
                    if (!result.usuario) {
                        _this.alert('Error', 'Problemas con el servidor. Contacte con su administrador de red.');
                        console.log(result);
                    }
                    else {
                        if (result) {
                            _this.usuario = result.usuario;
                            _this.alert("Success", "Usuario creado correctamente. Por favor " + _this.usuario.nombre + " " + _this.usuario.apaterno + " introduce tus credenciales.");
                            _this.navCtrl.setRoot('HomePage');
                        }
                        else {
                            console.log(result);
                        }
                    }
                }, function (error) {
                    _this.errorMessage = error;
                    if (_this.errorMessage != null) {
                        console.log(_this.errorMessage);
                        _this.alert('Error', 'Problemas con el servidor');
                    }
                });
            }
        }
    };
    SignupPage.prototype.alert = function (titulo, contenido) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: contenido,
            buttons: ['OK']
        });
        alert.present();
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"C:\Users\ByW1\Desktop\vinedoBlank\src\pages\signup\signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n\n    <ion-navbar transparent>\n        <button ion-button menuToggle icon-only class="menu">\n          <ion-icon></ion-icon>\n        </button>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content fullscreen padding>\n  <ion-card>\n  <ion-card-header>\n    Registrate:\n  </ion-card-header>\n    <form #formRegister="ngForm" (ngSubmit)="onSubmit()">\n      <ion-item>\n        <ion-label floating>Nombre</ion-label>\n        <ion-input type="text" name="nombre" #nombre="ngModel" [(ngModel)]="usuario.nombre" required autofocus></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Apellido Paterno</ion-label>\n        <ion-input type="text" name="apaterno" #apaterno="ngModel" [(ngModel)]="usuario.apaterno" required autofocus></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Apellido Materno</ion-label>\n        <ion-input type="text" name="amaterno" #amaterno="ngModel" [(ngModel)]="usuario.amaterno" required autofocus></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>Fecha de Nacimiento</ion-label>\n        <ion-input type="date" name="fechanac" #fechanac="ngModel" [(ngModel)]="usuario.fechanac" required autofocus></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Correo Electronico</ion-label>\n        <ion-input type="email" name="email" #email="ngModel" [(ngModel)]="usuario.email" pattern="[A-Za-z0-9._%+-]{3,}@[a-zA-Z_-]{3,}([.]{1}[a-zA-Z_-]{2,}|[.]{1}[a-zA-Z_-]{2,}[.]{1}[a-zA-Z_-]{2,})" required></ion-input>\n      </ion-item>\n    \n      <ion-item>\n        <ion-label floating>Contraseña</ion-label>\n        <ion-input type="password" name="password" #password="ngModel" [(ngModel)]="usuario.password" required autofocus></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Repetir Contraseña</ion-label>\n        <ion-input type="password" name="confirm_pass"  [(ngModel)]="confirm_pass" required autofocus></ion-input>\n      </ion-item>\n  \n      <div padding>\n        <button ion-button color="primary" type="submit" [disabled]="!formRegister.form.valid" block>Entrar</button>\n      </div>\n    </form>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\ByW1\Desktop\vinedoBlank\src\pages\signup\signup.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__providers_usuario_service_usuario_service__["a" /* UsuarioServiceProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_usuario_service_usuario_service__["a" /* UsuarioServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ })

});
//# sourceMappingURL=0.js.map