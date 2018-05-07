(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//import { NotFoundComponent } from './pages/not-found/not-found.component';

var routes = [
    { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    //{ path: 'about', component: AboutComponent, canActivate: [AuthGuardService] },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routingComponents = [
    _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    //,NotFoundComponent
];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loader_parent {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n}\n\n.loader_background {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    z-index: 9000;\n    background-color: #00000066;\n}\n\n.loader_img_parent {\n    width:100%;\n    height:100%;\n    z-index: 100000000;\n    position: absolute;\n}\n\n.loader_img {\n    width: 200px;\n    height: 200px;\n    position: absolute;\n\n    left: 50%;\n    top: 50%;\n    margin: -100px 0 0 -100px;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loader_parent\" *ngIf=\"loaderService.canShowLoader\">\n    <div class=\"loader_background\"></div>\n\n    <div class=\"loader_img_parent\">\n        <img class=\"loader_img\" src=\"assets/loader.gif\" />\n    </div>\n</div>\n\n<div class=\"container\">\n\n    <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n        <a class=\"navbar-brand\" href=\"#\">Restaurante: Pidalo con Rima</a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n            <ul class=\"navbar-nav\">\n                <li class=\"nav-item\">\n                  <a class=\"nav-link\" routerLink=\"/home\">Administración Mesas</a>\n                </li>\n              \n                <!--<li class=\"nav-item\" *ngIf=\"!userClaimsService.isAuthenticated\">-->\n                <!--    <a class=\"nav-link\" routerLink=\"/login\">Login</a>-->\n                <!--</li>-->\n                <!--<li class=\"nav-item\" *ngIf=\"userClaimsService.isAuthenticated\">-->\n                <!--    <a class=\"nav-link\" href=\"\" ng-click=\"logout()\">Logout</a>-->\n                <!--</li>-->\n                <!--<li class=\"nav-item\" *ngIf=\"userClaimsService.isAuthenticated\">-->\n                <!--    <a class=\"nav-link\" routerLink=\"/home\">Home</a>-->\n                <!--</li>-->\n                <!--<li class=\"nav-item\" *ngIf=\"userClaimsService.isAuthenticated\">-->\n                <!--    <a class=\"nav-link\" routerLink=\"/about\">About</a>-->\n                <!--</li>-->\n            </ul>\n        </div>\n    </nav>\n\n    <router-outlet></router-outlet>\n    \n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_loader_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/loader.services */ "./src/app/services/loader.services.ts");
/* harmony import */ var _services_user_claim_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/user-claim.services */ "./src/app/services/user-claim.services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(userClaimsService, loaderService) {
        this.userClaimsService = userClaimsService;
        this.loaderService = loaderService;
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_claim_services__WEBPACK_IMPORTED_MODULE_2__["UserClaimService"],
            _services_loader_services__WEBPACK_IMPORTED_MODULE_1__["LoaderService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_auth_guard_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/auth-guard.services */ "./src/app/services/auth-guard.services.ts");
/* harmony import */ var _services_loader_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/loader.services */ "./src/app/services/loader.services.ts");
/* harmony import */ var _services_user_claim_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/user-claim.services */ "./src/app/services/user-claim.services.ts");
/* harmony import */ var _services_backend_services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/backend.services */ "./src/app/services/backend.services.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_modal_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/modal/modal.component */ "./src/app/pages/modal/modal.component.ts");
/* harmony import */ var _pages_modal_menus_modal_menus__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/modal/menus/modal.menus */ "./src/app/pages/modal/menus/modal.menus.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["routingComponents"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _pages_modal_modal_component__WEBPACK_IMPORTED_MODULE_12__["NgbdModalComponent"],
                _pages_modal_menus_modal_menus__WEBPACK_IMPORTED_MODULE_13__["ModalMenus"]
            ],
            imports: [
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"].forRoot(),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
            ],
            providers: [
                _services_auth_guard_services__WEBPACK_IMPORTED_MODULE_7__["AuthGuardService"],
                _services_user_claim_services__WEBPACK_IMPORTED_MODULE_9__["UserClaimService"],
                _services_loader_services__WEBPACK_IMPORTED_MODULE_8__["LoaderService"],
                _services_backend_services__WEBPACK_IMPORTED_MODULE_10__["BackendService"]
            ],
            entryComponents: [_pages_modal_menus_modal_menus__WEBPACK_IMPORTED_MODULE_13__["ModalMenus"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common/constants.ts":
/*!*************************************!*\
  !*** ./src/app/common/constants.ts ***!
  \*************************************/
/*! exports provided: ConsumerTableBackend, MenuDishBackend, MenuCategoryBackend, Constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsumerTableBackend", function() { return ConsumerTableBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuDishBackend", function() { return MenuDishBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuCategoryBackend", function() { return MenuCategoryBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constants", function() { return Constants; });
var ConsumerTableBackend = /** @class */ (function () {
    function ConsumerTableBackend() {
        this.ListActivesByBusiness = "/consumerTable/listActivesByBusiness/";
        this.GetOrdersByTable = "/consumerTable/getOrdersByTable/";
        this.SetTableOccupied = "/consumerTable/setTableOccupied/";
    }
    return ConsumerTableBackend;
}());

var MenuDishBackend = /** @class */ (function () {
    function MenuDishBackend() {
        this.GetMenuList = "/menuDish/list/";
    }
    return MenuDishBackend;
}());

var MenuCategoryBackend = /** @class */ (function () {
    function MenuCategoryBackend() {
        this.GetMenuCategories = "/menuCategory/list";
    }
    return MenuCategoryBackend;
}());

var Constants = /** @class */ (function () {
    function Constants() {
    }
    Constants.DefaultIdBusiness = "5a59398eba92390014228220";
    // Base URL for REST services
    Constants.WS_BASE_PATH = "https://ws-pcm-challenge.herokuapp.com";
    // Backend of all services:
    Constants.REST_ConsumerTable = new ConsumerTableBackend();
    Constants.REST_MenuDish = new MenuDishBackend();
    Constants.REST_MenuCategory = new MenuCategoryBackend();
    // Modals
    Constants.Modal_Menus = "menus";
    return Constants;
}());



/***/ }),

/***/ "./src/app/common/utils.ts":
/*!*********************************!*\
  !*** ./src/app/common/utils.ts ***!
  \*********************************/
/*! exports provided: Utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return Utils; });
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.hitTestByPoint = function (x, y, sizeX, sizeY, pointX, pointY) {
        var result = x < pointX && (x + sizeX) > pointX &&
            y < pointY && (y + sizeY) > pointY;
        return result;
    };
    Utils.getMousePos = function (canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    };
    Utils.deepClone = function (item) {
        return JSON.parse(JSON.stringify(item));
    };
    return Utils;
}());



/***/ }),

/***/ "./src/app/models/consumerMenuVM.ts":
/*!******************************************!*\
  !*** ./src/app/models/consumerMenuVM.ts ***!
  \******************************************/
/*! exports provided: ConsumerMenuVM, IConsumerMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsumerMenuVM", function() { return ConsumerMenuVM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IConsumerMenu", function() { return IConsumerMenu; });
var ConsumerMenuVM = /** @class */ (function () {
    function ConsumerMenuVM(_id, name, price, imageUrl) {
        this._id = _id;
        this.name = name;
        this.price = price;
        this.imageUrl = imageUrl;
    }
    return ConsumerMenuVM;
}());

var IConsumerMenu = /** @class */ (function () {
    function IConsumerMenu() {
    }
    return IConsumerMenu;
}());



/***/ }),

/***/ "./src/app/models/consumerTableOrdersVM.ts":
/*!*************************************************!*\
  !*** ./src/app/models/consumerTableOrdersVM.ts ***!
  \*************************************************/
/*! exports provided: ConsumerTableOrdersVM, IConsumerTableOrders, WaiterTableVM, IWaiterTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsumerTableOrdersVM", function() { return ConsumerTableOrdersVM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IConsumerTableOrders", function() { return IConsumerTableOrders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaiterTableVM", function() { return WaiterTableVM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IWaiterTable", function() { return IWaiterTable; });
var ConsumerTableOrdersVM = /** @class */ (function () {
    function ConsumerTableOrdersVM(_id, name, waiterTable, consumerMenus) {
        this._id = _id;
        this.name = name;
        this.waiterTable = waiterTable;
        this.consumerMenus = consumerMenus;
    }
    return ConsumerTableOrdersVM;
}());

var IConsumerTableOrders = /** @class */ (function () {
    function IConsumerTableOrders() {
    }
    return IConsumerTableOrders;
}());

var WaiterTableVM = /** @class */ (function () {
    function WaiterTableVM(_id, fullName) {
        this._id = _id;
        this.fullName = fullName;
    }
    return WaiterTableVM;
}());

var IWaiterTable = /** @class */ (function () {
    function IWaiterTable() {
    }
    return IWaiterTable;
}());



/***/ }),

/***/ "./src/app/models/consumerTableVM.ts":
/*!*******************************************!*\
  !*** ./src/app/models/consumerTableVM.ts ***!
  \*******************************************/
/*! exports provided: ConsumerTableVM, IConsumerTable, ConsumerTableBodyVM, IConsumerTableResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsumerTableVM", function() { return ConsumerTableVM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IConsumerTable", function() { return IConsumerTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsumerTableBodyVM", function() { return ConsumerTableBodyVM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IConsumerTableResponse", function() { return IConsumerTableResponse; });
var ConsumerTableVM = /** @class */ (function () {
    function ConsumerTableVM(_id, name, size, consumerCount, isOccupied, idWaiterUser) {
        this._id = _id;
        this.name = name;
        this.size = size;
        this.consumerCount = consumerCount;
        this.isOccupied = isOccupied;
        this.idWaiterUser = idWaiterUser;
    }
    return ConsumerTableVM;
}());

var IConsumerTable = /** @class */ (function () {
    function IConsumerTable() {
    }
    return IConsumerTable;
}());

var ConsumerTableBodyVM = /** @class */ (function () {
    function ConsumerTableBodyVM() {
    }
    return ConsumerTableBodyVM;
}());

var IConsumerTableResponse = /** @class */ (function () {
    function IConsumerTableResponse() {
    }
    return IConsumerTableResponse;
}());



/***/ }),

/***/ "./src/app/models/mappers/consumerMenuMapper.ts":
/*!******************************************************!*\
  !*** ./src/app/models/mappers/consumerMenuMapper.ts ***!
  \******************************************************/
/*! exports provided: ConsumerMenuMapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsumerMenuMapper", function() { return ConsumerMenuMapper; });
/* harmony import */ var _consumerMenuVM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../consumerMenuVM */ "./src/app/models/consumerMenuVM.ts");

var ConsumerMenuMapper = /** @class */ (function () {
    function ConsumerMenuMapper() {
    }
    ConsumerMenuMapper.IConsumerMenuArrayTo = function (fromArray) {
        var result = [];
        for (var i = 0; i < fromArray.length; i++) {
            result.push(ConsumerMenuMapper.IConsumerMenuTo(fromArray[i]));
        }
        return result;
    };
    ConsumerMenuMapper.IConsumerMenuTo = function (fromObj) {
        var result = new _consumerMenuVM__WEBPACK_IMPORTED_MODULE_0__["ConsumerMenuVM"](fromObj._id, fromObj.name, fromObj.price, fromObj.imageUrl);
        return result;
    };
    return ConsumerMenuMapper;
}());



/***/ }),

/***/ "./src/app/models/mappers/consumerTableMapper.ts":
/*!*******************************************************!*\
  !*** ./src/app/models/mappers/consumerTableMapper.ts ***!
  \*******************************************************/
/*! exports provided: ConsumerTableMapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsumerTableMapper", function() { return ConsumerTableMapper; });
/* harmony import */ var _consumerTableVM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../consumerTableVM */ "./src/app/models/consumerTableVM.ts");

var ConsumerTableMapper = /** @class */ (function () {
    function ConsumerTableMapper() {
    }
    ConsumerTableMapper.IConsumerTableArrayTo = function (fromArray) {
        var result = [];
        for (var i = 0; i < fromArray.length; i++) {
            result.push(ConsumerTableMapper.IConsumerTableTo(fromArray[i]));
        }
        return result;
    };
    ConsumerTableMapper.IConsumerTableTo = function (fromObj) {
        var result = new _consumerTableVM__WEBPACK_IMPORTED_MODULE_0__["ConsumerTableVM"](fromObj._id, fromObj.name, fromObj.size, fromObj.consumerCount, fromObj.isOccupied, fromObj.idWaiterUser);
        return result;
    };
    return ConsumerTableMapper;
}());



/***/ }),

/***/ "./src/app/models/mappers/consumerTableOrdersMapper.ts":
/*!*************************************************************!*\
  !*** ./src/app/models/mappers/consumerTableOrdersMapper.ts ***!
  \*************************************************************/
/*! exports provided: ConsumerTableOrdersMapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsumerTableOrdersMapper", function() { return ConsumerTableOrdersMapper; });
/* harmony import */ var _consumerTableOrdersVM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../consumerTableOrdersVM */ "./src/app/models/consumerTableOrdersVM.ts");
/* harmony import */ var _consumerMenuMapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./consumerMenuMapper */ "./src/app/models/mappers/consumerMenuMapper.ts");


var ConsumerTableOrdersMapper = /** @class */ (function () {
    function ConsumerTableOrdersMapper() {
    }
    ConsumerTableOrdersMapper.IConsumerTableOrdersTo = function (fromObj) {
        var result = new _consumerTableOrdersVM__WEBPACK_IMPORTED_MODULE_0__["ConsumerTableOrdersVM"](fromObj._id, fromObj.name, ConsumerTableOrdersMapper.IWaiterTableTo(fromObj.idWaiterUser), _consumerMenuMapper__WEBPACK_IMPORTED_MODULE_1__["ConsumerMenuMapper"].IConsumerMenuArrayTo(fromObj.consumerMenus));
        return result;
    };
    ConsumerTableOrdersMapper.IWaiterTableTo = function (fromObj) {
        var result = null;
        if (fromObj != null) {
            result = new _consumerTableOrdersVM__WEBPACK_IMPORTED_MODULE_0__["WaiterTableVM"](fromObj._id, fromObj.name + " " + fromObj.lastName);
        }
        else {
            result = new _consumerTableOrdersVM__WEBPACK_IMPORTED_MODULE_0__["WaiterTableVM"]("", "");
        }
        return result;
    };
    return ConsumerTableOrdersMapper;
}());



/***/ }),

/***/ "./src/app/models/mappers/menuCategoryMapper.ts":
/*!******************************************************!*\
  !*** ./src/app/models/mappers/menuCategoryMapper.ts ***!
  \******************************************************/
/*! exports provided: MenuCategoryMapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuCategoryMapper", function() { return MenuCategoryMapper; });
/* harmony import */ var _menuCategoryVM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../menuCategoryVM */ "./src/app/models/menuCategoryVM.ts");

var MenuCategoryMapper = /** @class */ (function () {
    function MenuCategoryMapper() {
    }
    MenuCategoryMapper.IMenuCategoryArrayTo = function (fromArray) {
        var result = [];
        for (var i = 0; i < fromArray.length; i++) {
            result.push(MenuCategoryMapper.IMenuCategoryTo(fromArray[i]));
        }
        return result;
    };
    MenuCategoryMapper.IMenuCategoryTo = function (fromObj) {
        var result = new _menuCategoryVM__WEBPACK_IMPORTED_MODULE_0__["MenuCategoryVM"](fromObj._id, fromObj.name);
        return result;
    };
    return MenuCategoryMapper;
}());



/***/ }),

/***/ "./src/app/models/mappers/menuDishMapper.ts":
/*!**************************************************!*\
  !*** ./src/app/models/mappers/menuDishMapper.ts ***!
  \**************************************************/
/*! exports provided: MenuDishMapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuDishMapper", function() { return MenuDishMapper; });
/* harmony import */ var _menuDishVM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../menuDishVM */ "./src/app/models/menuDishVM.ts");

var MenuDishMapper = /** @class */ (function () {
    function MenuDishMapper() {
    }
    MenuDishMapper.IMenuDishArrayTo = function (fromArray) {
        var result = [];
        for (var i = 0; i < fromArray.length; i++) {
            result.push(MenuDishMapper.IMenuDishTo(fromArray[i]));
        }
        return result;
    };
    MenuDishMapper.IMenuDishTo = function (fromObj) {
        var result = new _menuDishVM__WEBPACK_IMPORTED_MODULE_0__["MenuDishVM"](fromObj._id, fromObj.name, fromObj.description, fromObj.price, fromObj.imageUrl, fromObj.idMenuCategory);
        return result;
    };
    return MenuDishMapper;
}());



/***/ }),

/***/ "./src/app/models/menuCategoryVM.ts":
/*!******************************************!*\
  !*** ./src/app/models/menuCategoryVM.ts ***!
  \******************************************/
/*! exports provided: MenuCategoryVM, IMenuCategory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuCategoryVM", function() { return MenuCategoryVM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMenuCategory", function() { return IMenuCategory; });
var MenuCategoryVM = /** @class */ (function () {
    function MenuCategoryVM(_id, name) {
        this._id = _id;
        this.name = name;
    }
    return MenuCategoryVM;
}());

var IMenuCategory = /** @class */ (function () {
    function IMenuCategory() {
    }
    return IMenuCategory;
}());



/***/ }),

/***/ "./src/app/models/menuDishVM.ts":
/*!**************************************!*\
  !*** ./src/app/models/menuDishVM.ts ***!
  \**************************************/
/*! exports provided: MenuDishVM, IMenuDish */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuDishVM", function() { return MenuDishVM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMenuDish", function() { return IMenuDish; });
var MenuDishVM = /** @class */ (function () {
    function MenuDishVM(_id, name, description, price, imageUrl, idMenuCategory) {
        this._id = _id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.imageUrl = imageUrl;
        this.idMenuCategory = idMenuCategory;
    }
    return MenuDishVM;
}());

var IMenuDish = /** @class */ (function () {
    function IMenuDish() {
    }
    return IMenuDish;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n    display: flex;\n    align-items: stretch;\n    width: 100%;\n}    \n\n#content {\n    width: 100%;\n}    \n\n#sidebar {\n    min-width: 300px;\n    max-width: 300px;\n    display: block;\n}    \n\n#sidebar.active {\n    margin-left: -300px;\n    display: none !important;\n}    \n\n@media (max-width: 768px) {\n    #sidebar {\n        margin-left: -300px;\n    }\n    #sidebar.active {\n        margin-left: 0;\n    }\n}    \n\n.table-td-menuImage {\n    max-width: 40px;\n    max-height: 40px;\n}    \n\n.img-menuImage {\n    width: 100%;\n}    \n\n.table-td-menuName {\n    font-size: 13px;\n}    \n\n.table-td-menuPrice {\n    font-size: 13px;\n}    \n\n.table-td-totalPrice {\n    font-size: 13px;\n    font-weight: bold;\n}    \n\n#table-menu-orders {\n    overflow-x: hidden;\n    overflow-y: auto;\n    height: 280px;\n}"

/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <img id=\"imgChair\" src=\"assets/spChair.png\" style=\"display:none\" />\n    <img id=\"imgTables\" src=\"assets/spTables.png\" style=\"display:none\" />\n</div>\n\n<div class=\"wrapper\">\n\n    <!-- Sidebar -->\n    <nav id=\"sidebar\" class=\"active\">\n        <div id=\"parent-detail-canvas\">\n            <canvas id=\"canvas-detail-selector\" width=\"300\" height=\"100\">\n            </canvas>\n        </div>\n        \n        <!-- Controls for the Table -->\n        <div class=\"container\">\n        \n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <h4>Menus ordenados:</h4>\n                </div>\n            </div>\n            \n            <div id=\"table-menu-orders\" class=\"row\">\n                <table class=\"table\">\n                  <thead>\n                    <tr>\n                      <th scope=\"col\">#</th>\n                      <th scope=\"col\">Foto</th>\n                      <th scope=\"col\">Plato</th>\n                      <th scope=\"col\">Precio</th>\n                      <th scope=\"col\"></th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let menu of GetConsumerMenusFromDetails;  let i = index\">\n                        <th scope=\"row\">{{ (i + 1) }}</th>\n                            <td>\n                                <div class=\"table-td-menuImage\">\n                                    <img class=\"img-menuImage\" src=\"{{menu.imageUrl}}\" />\n                                </div>\n                            </td>\n                            <td class=\"table-td-menuName\">{{ menu.name }}</td>\n                            <td class=\"table-td-menuPrice\">S/ {{ menu.price.toFixed(2) }}</td>\n                            <td>\n                                <button type=\"button\" class=\"btn\" (click)=\"_tableDetailManager.removeMenu(menu._id)\">\n                                    <span class=\"glyphicon glyphicon-remove\"></span>X\n                                </button>\n                            </td>\n                    </tr>\n                  </tbody>\n                </table>\n            </div>\n            <div class=\"row\">\n                <table class=\"table\">\n                  <tbody>\n                    <tr>\n                        <td></td>\n                        <td></td>\n                        <td></td>\n                        <td class=\"table-td-totalPrice\">Total:</td>\n                        <td class=\"table-td-totalPrice\">S/ {{ GetConsumerMenusFromDetailsTotalPrice }}</td>\n                    </tr>\n                  </tbody>\n                </table>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-sm-6\">\n                    <ngbd-modal-component \n                        [modalType]=\"'menus'\" \n                        [onCallback]=\"_tableDetailManager.onChooseMenuDish\">\n                    </ngbd-modal-component>\n                    <p></p>\n                </div>\n                <div class=\"col-sm-6\">\n                    <button type=\"button\" class=\"btn\" (click)=\"_tableDetailManager.freeTable()\">\n                        <span class=\"glyphicon glyphicon-ban-circle\"></span>\n                        Liberar\n                    </button>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-sm-6\">\n                    <button type=\"button\" class=\"btn\" (click)=\"_tableDetailManager.cancel()\">\n                        <span class=\"glyphicon glyphicon-ban-circle\"></span>\n                        Cancelar\n                    </button>\n                </div>\n                <div class=\"col-sm-6\">\n                    <button type=\"button\" class=\"btn btn-default\" (click)=\"_tableDetailManager.save()\">\n                        <span class=\"glyphicon glyphicon-floppy-disk\"></span>\n                        Guardar\n                    </button>\n                </div>\n            </div>\n        \n        </div>\n    </nav>\n\n    <!-- Page Content -->\n    <div id=\"content\">\n        <h4> Escoga una Mesa</h4>\n        \n        <div id=\"parent-canvas\" (mousedown)=\"onMouseDown_TableCanvas($event)\">\n            <canvas id=\"canvas-selector\" width=\"400\" height=\"300\">\n            </canvas>\n        </div>\n    </div>\n</div>  "

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_backend_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/backend.services */ "./src/app/services/backend.services.ts");
/* harmony import */ var _services_loader_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/loader.services */ "./src/app/services/loader.services.ts");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/constants */ "./src/app/common/constants.ts");
/* harmony import */ var _tablesManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tablesManager */ "./src/app/pages/home/tablesManager.ts");
/* harmony import */ var _tableDetailManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tableDetailManager */ "./src/app/pages/home/tableDetailManager.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomeComponent = /** @class */ (function () {
    function HomeComponent(_backendService, _loaderService) {
        var _this = this;
        this._backendService = _backendService;
        this._loaderService = _loaderService;
        this._initialized = false;
        this._loaderService.showLoader();
        this._backendService.listActivesTablesByBusiness(_common_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].DefaultIdBusiness)
            .subscribe(function (data) {
            _this._consumerTables = data;
            _this.onResizeWindow(null);
            _this._loaderService.hideLoader();
        });
    }
    Object.defineProperty(HomeComponent.prototype, "GetConsumerTables", {
        get: function () { return this._consumerTables; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomeComponent.prototype, "IsInitialized", {
        get: function () { return this._initialized; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomeComponent.prototype, "GetHTMLImage_Chair", {
        get: function () { return this._imgChair; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomeComponent.prototype, "GetHTMLImage_Tables", {
        get: function () { return this._imgTables; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomeComponent.prototype, "GetBackendService", {
        get: function () { return this._backendService; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomeComponent.prototype, "GetLoaderService", {
        get: function () { return this._loaderService; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomeComponent.prototype, "GetConsumerMenusFromDetails", {
        get: function () {
            var result = null;
            result = this._tableDetailManager.consumerTableOrdersTEMP != null
                ? this._tableDetailManager.consumerTableOrdersTEMP.consumerMenus
                : null;
            return result == null ? [] : result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomeComponent.prototype, "GetConsumerMenusFromDetailsTotalPrice", {
        get: function () {
            var result = null;
            var resultTotalPrice = 0;
            result = this._tableDetailManager.consumerTableOrdersTEMP != null
                ? this._tableDetailManager.consumerTableOrdersTEMP.consumerMenus
                : null;
            result = result == null ? [] : result;
            for (var i = 0; i < result.length; i++) {
                resultTotalPrice += result[i].price;
            }
            return resultTotalPrice.toFixed(2);
        },
        enumerable: true,
        configurable: true
    });
    HomeComponent.prototype.ngOnInit = function () {
        this._initialized = true;
        this._imgChair = $("#imgChair")[0];
        this._imgTables = $("#imgTables")[0];
        // Initialize Table Manager
        this._tablesManager = new _tablesManager__WEBPACK_IMPORTED_MODULE_4__["TablesManager"](this);
        this._tablesManager.Initialize('#parent-canvas', '#canvas-selector');
        // Initialize Table Detail Manager
        this._tableDetailManager = new _tableDetailManager__WEBPACK_IMPORTED_MODULE_5__["TableDetailManager"](this);
        this._tableDetailManager.Initialize('#parent-detail-canvas', '#canvas-detail-selector');
        this.onResizeWindow(null);
    };
    HomeComponent.prototype.onMouseDown_TableCanvas = function (event) {
        this._tablesManager.OnMouseDown(event);
    };
    HomeComponent.prototype.onResizeWindow = function (event) {
        if (this._tablesManager)
            this._tablesManager.OnResizeWindow();
    };
    HomeComponent.prototype.ShowTableDetails = function (table) {
        // Now process Table Details
        this._tableDetailManager.ShowTableDetails(table);
    };
    HomeComponent.prototype.showModal = function () {
    };
    HomeComponent.HideSideBar = function () {
        $('#sidebar').addClass('active');
    };
    HomeComponent.ShowSideBar = function () {
        $('#sidebar').removeClass('active');
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/pages/home/home.component.css")],
            host: {
                '(window:resize)': 'onResizeWindow($event)'
            }
        }),
        __metadata("design:paramtypes", [_services_backend_services__WEBPACK_IMPORTED_MODULE_1__["BackendService"],
            _services_loader_services__WEBPACK_IMPORTED_MODULE_2__["LoaderService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/tableDetailManager.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/home/tableDetailManager.ts ***!
  \**************************************************/
/*! exports provided: TableDetailManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableDetailManager", function() { return TableDetailManager; });
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/utils */ "./src/app/common/utils.ts");
/* harmony import */ var _models_consumerMenuVM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/consumerMenuVM */ "./src/app/models/consumerMenuVM.ts");
/* harmony import */ var _models_consumerTableVM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/consumerTableVM */ "./src/app/models/consumerTableVM.ts");




var TableDetailManager = /** @class */ (function () {
    function TableDetailManager(_homeComponent) {
        this._homeComponent = _homeComponent;
        this._width = 300;
        this._height = 600;
        this._consumerTable = null;
        this.consumerTableOrders = null;
        this.consumerTableOrdersTEMP = null;
        TableDetailManager.Instance = this;
    }
    TableDetailManager.prototype.Initialize = function (parentId, canvasId) {
        this._parentSelector = $(parentId);
        this._canvasSelector = $(canvasId);
        this._ctx = this._canvasSelector[0].getContext("2d");
    };
    TableDetailManager.prototype.freeTable = function () {
        var _this = this;
        this._homeComponent.GetLoaderService.showLoader();
        var idConsumerTable = this.consumerTableOrdersTEMP._id;
        this._homeComponent.GetBackendService.freeTable(idConsumerTable)
            .subscribe(function (data) {
            // Now update consumer table on Home
            var consumerTables = _this._homeComponent.GetConsumerTables;
            for (var i = 0; i < consumerTables.length; i++) {
                if (consumerTables[i]._id === idConsumerTable) {
                    consumerTables[i].isOccupied = 0;
                    consumerTables[i].consumerCount = 0;
                    break;
                }
            }
            _home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"].HideSideBar(); // remove side bar
            _this._homeComponent.onResizeWindow(null);
            _this._homeComponent.GetLoaderService.hideLoader();
        });
    };
    TableDetailManager.prototype.removeMenu = function (idMenu) {
        var data = this.consumerTableOrdersTEMP.consumerMenus;
        for (var i = 0; i < data.length; i++) {
            if (data[i]._id === idMenu) {
                data.splice(i, 1);
                break;
            }
        }
    };
    TableDetailManager.prototype.onChooseMenuDish = function (menuDish) {
        var self = TableDetailManager.Instance;
        var consumerMenus = self.consumerTableOrdersTEMP.consumerMenus;
        var newMenu = new _models_consumerMenuVM__WEBPACK_IMPORTED_MODULE_2__["ConsumerMenuVM"](menuDish._id, menuDish.name, menuDish.price, menuDish.imageUrl);
        consumerMenus.push(newMenu);
    };
    TableDetailManager.prototype.cancel = function () {
        this.consumerTableOrdersTEMP = _common_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].deepClone(this.consumerTableOrders);
    };
    TableDetailManager.prototype.save = function () {
        var _this = this;
        this._homeComponent.GetLoaderService.showLoader();
        var idConsumerTable = this.consumerTableOrdersTEMP._id;
        var dataBody = new _models_consumerTableVM__WEBPACK_IMPORTED_MODULE_3__["ConsumerTableBodyVM"]();
        dataBody.idWaiterUser = "5a58e033fbdc960014d4b223";
        dataBody.consumerMenus = [];
        for (var i = 0; i < this.consumerTableOrdersTEMP.consumerMenus.length; i++) {
            dataBody.consumerMenus.push(this.consumerTableOrdersTEMP.consumerMenus[i]._id);
        }
        this._homeComponent.GetBackendService.setTableOccupied(idConsumerTable, true, 4, dataBody)
            .subscribe(function (data) {
            // Now update consumer table on Home
            var consumerTables = _this._homeComponent.GetConsumerTables;
            for (var i = 0; i < consumerTables.length; i++) {
                if (consumerTables[i]._id === idConsumerTable) {
                    consumerTables[i].isOccupied = 1;
                    consumerTables[i].consumerCount = 4;
                    break;
                }
            }
            _this._homeComponent.onResizeWindow(null);
            _this._homeComponent.GetLoaderService.hideLoader();
        });
    };
    TableDetailManager.prototype.ShowTableDetails = function (table) {
        var _this = this;
        this._consumerTable = table;
        this._homeComponent.GetLoaderService.showLoader();
        this._homeComponent.GetBackendService.getOrdersByTable(table._id)
            .subscribe(function (data) {
            _this.consumerTableOrders = data;
            _this.consumerTableOrdersTEMP = _common_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].deepClone(data);
            // Hide loader and show SideBar for Details
            _this._homeComponent.GetLoaderService.hideLoader();
            _home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"].ShowSideBar();
        });
        this.drawTable();
    };
    TableDetailManager.prototype.drawTable = function () {
        var ctx = this._ctx;
        var imgHTML_tables = this._homeComponent.GetHTMLImage_Tables;
        var imgHTML_chair = this._homeComponent.GetHTMLImage_Chair;
        // vars
        var ix = 120;
        var iy = 30;
        var offsetX = 15;
        var offsetY = 16;
        var radius = 35;
        var tableSize = this._consumerTable.size;
        var angleFraction = (Math.PI * 2) / tableSize;
        // Clean canvas
        ctx.clearRect(0, 0, this._width, this._height);
        // Background
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(0, 0, this._width, this._height);
        // Draw table
        ctx.globalAlpha = 1;
        ctx.drawImage(imgHTML_tables, ix, iy);
        // Draw table name
        ctx.font = "bold 20px Arial";
        ctx.textAlign = "center";
        ctx.strokeText(this._consumerTable.name, ix + imgHTML_tables.width * 0.5, (iy + imgHTML_tables.height * 0.5) + 6);
        for (var j = 0; j < tableSize; j++) {
            var cx = (ix + offsetX) + Math.cos(angleFraction * j) * radius;
            var cy = (iy + offsetY) + Math.sin(angleFraction * j) * radius;
            // Draw chair: If chair is occupied then make it alpha...
            if (j < this._consumerTable.consumerCount)
                ctx.globalAlpha = 0.25;
            ctx.drawImage(imgHTML_chair, cx, cy);
            ctx.globalAlpha = 1;
        }
    };
    TableDetailManager.Instance = null;
    return TableDetailManager;
}());



/***/ }),

/***/ "./src/app/pages/home/tablesManager.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/home/tablesManager.ts ***!
  \*********************************************/
/*! exports provided: TablesManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesManager", function() { return TablesManager; });
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/utils */ "./src/app/common/utils.ts");


var TablesManager = /** @class */ (function () {
    function TablesManager(_homeComponent) {
        this._homeComponent = _homeComponent;
        this._height = 400;
    }
    TablesManager.prototype.Initialize = function (parentId, canvasId) {
        this._parentSelector = $(parentId);
        this._canvasSelector = $(canvasId);
        this._ctx = this._canvasSelector[0].getContext("2d");
    };
    TablesManager.prototype.OnResizeWindow = function () {
        // Update size dynamically
        this._width = this._parentSelector.width();
        var ctx = this._ctx;
        this._canvasSelector.attr('width', this._width);
        this._canvasSelector.attr('height', this._height);
        // Clean
        ctx.clearRect(0, 0, this._width, this._height);
        // Background
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(0, 0, this._width, this._height);
        // Draw Tables
        this.onDrawTables();
    };
    TablesManager.prototype.OnMouseDown = function (e) {
        var mousePos = _common_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].getMousePos(this._parentSelector[0], e);
        var tableSelected = false;
        if (this._homeComponent.IsInitialized && this._homeComponent.GetConsumerTables != null) {
            var imgHTML_tables = this._homeComponent.GetHTMLImage_Tables;
            var imgHTML_chair = this._homeComponent.GetHTMLImage_Chair;
            var ix = 30;
            var iy = 30;
            var offsetX = 15;
            var offsetY = 16;
            var indexX = 0;
            var indexY = 0;
            var indexOffset = 0;
            var tableAreaWidth = (imgHTML_tables.width + (imgHTML_chair.width * 2)) + offsetX;
            var tableAreaHeight = (imgHTML_tables.height + (imgHTML_chair.height * 2)) + offsetY;
            var maxTables = Math.floor(this._width / tableAreaWidth) - 1;
            var consumerTables = this._homeComponent.GetConsumerTables;
            for (var i = 0; i < consumerTables.length; i++) {
                var ct = consumerTables[i];
                if ((i - indexOffset) > maxTables) {
                    indexOffset += maxTables;
                    indexOffset++;
                    indexY++;
                }
                indexX = i - indexOffset;
                var tx = (indexX * (imgHTML_tables.width + (imgHTML_chair.width * 2)) + (offsetX * indexX));
                var ty = indexY * tableAreaHeight;
                var hitted = _common_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].hitTestByPoint(tx, ty, tableAreaWidth, tableAreaHeight, mousePos.x, mousePos.y);
                if (hitted) {
                    tableSelected = true;
                    this._homeComponent.ShowTableDetails(ct);
                    break;
                }
            }
            if (!tableSelected) {
                _home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"].HideSideBar();
            }
        }
    };
    TablesManager.prototype.onDrawTables = function () {
        if (this._homeComponent.IsInitialized && this._homeComponent.GetConsumerTables != null) {
            var ctx = this._ctx;
            var imgHTML_tables = this._homeComponent.GetHTMLImage_Tables;
            var imgHTML_chair = this._homeComponent.GetHTMLImage_Chair;
            var consumerTables = this._homeComponent.GetConsumerTables;
            var ix = 30;
            var iy = 30;
            var offsetX = 15;
            var offsetY = 16;
            var radius = 35;
            var tableAreaWidth = (imgHTML_tables.width + (imgHTML_chair.width * 2)) + offsetX;
            var tableAreaHeight = (imgHTML_tables.height + (imgHTML_chair.height * 2)) + offsetY;
            var maxTables = Math.floor(this._width / tableAreaWidth) - 1;
            var indexX = 0;
            var indexY = 0;
            var indexOffset = 0;
            for (var i = 0; i < consumerTables.length; i++) {
                var ct = consumerTables[i];
                var tableSize = ct.size;
                var consumers = ct.consumerCount;
                var angleFraction = (Math.PI * 2) / tableSize;
                if ((i - indexOffset) > maxTables) {
                    indexOffset += maxTables;
                    indexOffset++;
                    indexY++;
                }
                indexX = i - indexOffset;
                var tx = ix + (indexX * (imgHTML_tables.width + (imgHTML_chair.width * 2)) + (offsetX * indexX));
                var ty = iy + indexY * tableAreaHeight;
                // Draw table
                if (ct.isOccupied)
                    ctx.globalAlpha = 0.25; // if the table is occupied then make it alpha
                ctx.drawImage(imgHTML_tables, tx, ty);
                ctx.globalAlpha = 1;
                // Draw table name
                ctx.font = "bold 20px Arial";
                ctx.textAlign = "center";
                ctx.strokeText(ct.name, tx + imgHTML_tables.width * 0.5, (ty + imgHTML_tables.height * 0.5) + 6);
                for (var j = 0; j < tableSize; j++) {
                    var cx = (tx + offsetX) + Math.cos(angleFraction * j) * radius;
                    var cy = (ty + offsetY) + Math.sin(angleFraction * j) * radius;
                    // Draw chair
                    if (j < ct.consumerCount)
                        ctx.globalAlpha = 0.25; // if chair is occupied then make it alpha
                    ctx.drawImage(imgHTML_chair, cx, cy);
                    ctx.globalAlpha = 1;
                }
            }
        }
    };
    return TablesManager;
}());



/***/ }),

/***/ "./src/app/pages/modal/menus/modal.menus.html":
/*!****************************************************!*\
  !*** ./src/app/pages/modal/menus/modal.menus.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">Escoger Platillo</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  \n  <div id=\"menu-container-dynamic\" class=\"container\">\n  </div>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Cerrar</button>\n</div>"

/***/ }),

/***/ "./src/app/pages/modal/menus/modal.menus.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/modal/menus/modal.menus.ts ***!
  \**************************************************/
/*! exports provided: ModalMenus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalMenus", function() { return ModalMenus; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _services_backend_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/backend.services */ "./src/app/services/backend.services.ts");
/* harmony import */ var _services_loader_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/loader.services */ "./src/app/services/loader.services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModalMenus = /** @class */ (function () {
    function ModalMenus(activeModal, _backendService, _loaderService) {
        var _this = this;
        this.activeModal = activeModal;
        this._backendService = _backendService;
        this._loaderService = _loaderService;
        this._menuDishes = null;
        this._menuCategories = null;
        this._isCompleted = false;
        this._self = this;
        this._loaderService.showLoader();
        this._backendService.getMenuCategories()
            .subscribe(function (data) {
            _this._menuCategories = data;
            _this._isCompleted = _this._menuCategories != null && _this._menuDishes != null;
            if (_this._isCompleted) {
                _this.onCompletedREST();
            }
        });
        this._backendService.getMenuList()
            .subscribe(function (data) {
            _this._menuDishes = data;
            _this._isCompleted = _this._menuCategories != null && _this._menuDishes != null;
            if (_this._isCompleted) {
                _this.onCompletedREST();
            }
        });
    }
    ModalMenus.prototype.onCompletedREST = function () {
        this._loaderService.hideLoader();
        var htmlData = "";
        var menuSelector = $('#menu-container-dynamic');
        menuSelector.parent().parent().parent().width(700);
        for (var i = 0; i < this._menuCategories.length; i++) {
            var menuCategory = this._menuCategories[i];
            htmlData += "<div class='row'>";
            htmlData += "  <div class='col-sm-12'>";
            htmlData += "    <h4>" + menuCategory.name + "</h4>";
            htmlData += "  </div>";
            htmlData += "</div>";
            var k = 0;
            var colCount = 0;
            var createRow = true;
            while (k < this._menuDishes.length) {
                var menuDish = this._menuDishes[k];
                if (menuDish.idMenuCategory === menuCategory._id) {
                    if (createRow) {
                        htmlData += "<div class='row'>";
                    }
                    htmlData += "  <div class='col-sm-3'>";
                    htmlData += "   <div style='height: 60px;'>";
                    htmlData += "     " + menuDish.name;
                    htmlData += "   </div>";
                    htmlData += "   <div style='width: 124px;height: 124px;'>";
                    htmlData += "     <img src='" + menuDish.imageUrl + "' width='120' height='120'/>";
                    htmlData += "   </div>";
                    htmlData += "   <div style='height: 120px;'>";
                    htmlData += "     " + menuDish.description;
                    htmlData += "   </div>";
                    htmlData += "   <div>";
                    htmlData += "     <button style='margin: auto;width: 100%;' type='button' data-menu-dish-id='" + menuDish._id +
                        "' class='choose-menu-dish btn btn-outline-dark'>Escoger</button>";
                    htmlData += "   </div>";
                    htmlData += "  </div>";
                    if (colCount >= 2) {
                        colCount = 0;
                        createRow = true;
                        // finished the row tag
                        htmlData += "</div>";
                    }
                    else {
                        createRow = false;
                        colCount++;
                    }
                }
                k++;
            }
            if (!createRow) {
                htmlData += "</div>";
            }
        }
        // now append the HTML composed
        menuSelector.html(htmlData);
        // Now bind events of the dynamic buttons
        this.bindEvents();
    };
    ModalMenus.prototype.bindEvents = function () {
        var self = this;
        $(document).on('click', '.choose-menu-dish', function (e) {
            var idMenuDish = $(this).data('menu-dish-id');
            for (var i = 0; i < self._menuDishes.length; i++) {
                var menuDishVM = self._menuDishes[i];
                if (menuDishVM._id === idMenuDish) {
                    self.onChooseMenuDishCallback(menuDishVM);
                    self.removeBinds();
                    self.activeModal.close('');
                    break;
                }
            }
        });
    };
    ModalMenus.prototype.removeBinds = function () {
        $(document).off('click', '.choose-menu-dish');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ModalMenus.prototype, "onChooseMenuDishCallback", void 0);
    ModalMenus = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-modal-content',
            template: __webpack_require__(/*! ./modal.menus.html */ "./src/app/pages/modal/menus/modal.menus.html")
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"],
            _services_backend_services__WEBPACK_IMPORTED_MODULE_2__["BackendService"],
            _services_loader_services__WEBPACK_IMPORTED_MODULE_3__["LoaderService"]])
    ], ModalMenus);
    return ModalMenus;
}());



/***/ }),

/***/ "./src/app/pages/modal/modal.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/modal/modal.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" class=\"btn\" (click)=\"openModal()\">\n    <span class=\"glyphicon\"></span>\n    {{ _buttonLabel }}\n</button>"

/***/ }),

/***/ "./src/app/pages/modal/modal.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/modal/modal.component.ts ***!
  \************************************************/
/*! exports provided: NgbdModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalComponent", function() { return NgbdModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _menus_modal_menus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menus/modal.menus */ "./src/app/pages/modal/menus/modal.menus.ts");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/constants */ "./src/app/common/constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NgbdModalComponent = /** @class */ (function () {
    function NgbdModalComponent(modalService) {
        this.modalService = modalService;
        this._buttonLabel = "";
    }
    NgbdModalComponent.prototype.ngOnInit = function () {
        switch (this.modalType) {
            case _common_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].Modal_Menus:
                this._buttonLabel = "Agregar Platillo";
                break;
        }
    };
    NgbdModalComponent.prototype.openModal = function () {
        switch (this.modalType) {
            case _common_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].Modal_Menus:
                var modalRef = this.modalService.open(_menus_modal_menus__WEBPACK_IMPORTED_MODULE_2__["ModalMenus"]);
                modalRef.componentInstance.onChooseMenuDishCallback = this.onCallback;
                break;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NgbdModalComponent.prototype, "modalType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function)
    ], NgbdModalComponent.prototype, "onCallback", void 0);
    NgbdModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-modal-component',
            template: __webpack_require__(/*! ./modal.component.html */ "./src/app/pages/modal/modal.component.html")
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], NgbdModalComponent);
    return NgbdModalComponent;
}());



/***/ }),

/***/ "./src/app/services/auth-guard.services.ts":
/*!*************************************************!*\
  !*** ./src/app/services/auth-guard.services.ts ***!
  \*************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_claim_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-claim.services */ "./src/app/services/user-claim.services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(_router, _userClaims) {
        this._router = _router;
        this._userClaims = _userClaims;
    }
    AuthGuardService.prototype.canActivate = function (next, state) {
        if (this._userClaims.isAuthenticated) {
            return true;
        }
        else {
            // state.url, has the url
            this._router.navigate(['home']);
            return false;
        }
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _user_claim_services__WEBPACK_IMPORTED_MODULE_2__["UserClaimService"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/services/backend.services.ts":
/*!**********************************************!*\
  !*** ./src/app/services/backend.services.ts ***!
  \**********************************************/
/*! exports provided: BackendService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendService", function() { return BackendService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/constants */ "./src/app/common/constants.ts");
/* harmony import */ var _user_claim_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-claim.services */ "./src/app/services/user-claim.services.ts");
/* harmony import */ var _models_consumerTableVM__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/consumerTableVM */ "./src/app/models/consumerTableVM.ts");
/* harmony import */ var _models_mappers_consumerTableMapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/mappers/consumerTableMapper */ "./src/app/models/mappers/consumerTableMapper.ts");
/* harmony import */ var _models_mappers_consumerTableOrdersMapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/mappers/consumerTableOrdersMapper */ "./src/app/models/mappers/consumerTableOrdersMapper.ts");
/* harmony import */ var _models_mappers_menuCategoryMapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../models/mappers/menuCategoryMapper */ "./src/app/models/mappers/menuCategoryMapper.ts");
/* harmony import */ var _models_mappers_menuDishMapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../models/mappers/menuDishMapper */ "./src/app/models/mappers/menuDishMapper.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// Modelos para respuesta REST

// Mappers




var BackendService = /** @class */ (function () {
    function BackendService(_router, _http, _userClaims) {
        this._router = _router;
        this._http = _http;
        this._userClaims = _userClaims;
    }
    BackendService.prototype.listActivesTablesByBusiness = function (idBusiness) {
        var _this = this;
        var url = _common_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].WS_BASE_PATH + _common_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].REST_ConsumerTable.ListActivesByBusiness +
            idBusiness;
        var observer = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this._http.get(url).subscribe(function (data) {
                var result = _models_mappers_consumerTableMapper__WEBPACK_IMPORTED_MODULE_7__["ConsumerTableMapper"].IConsumerTableArrayTo(data);
                observer.next(result);
                observer.complete();
            }, function (err) {
                console.error("Error", err);
                toastr.error('Paso un error inesperado en la carga de Mesas.', 'Error de Servicio!');
            });
        });
        return observer;
    };
    BackendService.prototype.getOrdersByTable = function (idTable) {
        var _this = this;
        var url = _common_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].WS_BASE_PATH + _common_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].REST_ConsumerTable.GetOrdersByTable +
            idTable;
        var observer = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this._http.get(url).subscribe(function (data) {
                if (data) {
                    var result = _models_mappers_consumerTableOrdersMapper__WEBPACK_IMPORTED_MODULE_8__["ConsumerTableOrdersMapper"].IConsumerTableOrdersTo(data);
                    observer.next(result);
                }
                else {
                    observer.next(null);
                }
                observer.complete();
            }, function (err) {
                console.error("Error", err);
                toastr.error('Paso un error inesperado en la carga de Menus.', 'Error de Servicio!');
            });
        });
        return observer;
    };
    BackendService.prototype.getMenuCategories = function () {
        var _this = this;
        var url = _common_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].WS_BASE_PATH + _common_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].REST_MenuCategory.GetMenuCategories;
        var observer = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this._http.get(url).subscribe(function (data) {
                var result = _models_mappers_menuCategoryMapper__WEBPACK_IMPORTED_MODULE_9__["MenuCategoryMapper"].IMenuCategoryArrayTo(data);
                observer.next(result);
                observer.complete();
            }, function (err) {
                console.error("Error", err);
                toastr.error('Paso un error inesperado en la carga de Categorias de Menus.', 'Error de Servicio!');
            });
        });
        return observer;
    };
    BackendService.prototype.getMenuList = function () {
        var _this = this;
        var url = _common_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].WS_BASE_PATH + _common_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].REST_MenuDish.GetMenuList;
        var observer = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this._http.get(url).subscribe(function (data) {
                var result = _models_mappers_menuDishMapper__WEBPACK_IMPORTED_MODULE_10__["MenuDishMapper"].IMenuDishArrayTo(data);
                observer.next(result);
                observer.complete();
            }, function (err) {
                console.error("Error", err);
                toastr.error('Paso un error inesperado en la carga de Categorias de Menus.', 'Error de Servicio!');
            });
        });
        return observer;
    };
    BackendService.prototype.setTableOccupied = function (idConsumerTable, isOccupied, consumerCount, dataBody) {
        var _this = this;
        var url = _common_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].WS_BASE_PATH + _common_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].REST_ConsumerTable.SetTableOccupied +
            idConsumerTable + "/" + (isOccupied === true ? "1" : "0") + "/" + consumerCount;
        var observer = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this._http.post(url, dataBody).subscribe(function (data) {
                observer.next(data);
                observer.complete();
            }, function (err) {
                console.error("Error", err);
                toastr.error('Paso un error inesperado en la actualizacion de la Mesa.', 'Error de Servicio!');
                observer.next(null);
                observer.complete();
            });
        });
        return observer;
    };
    BackendService.prototype.freeTable = function (idConsumerTable) {
        var _this = this;
        var dataBody = new _models_consumerTableVM__WEBPACK_IMPORTED_MODULE_6__["ConsumerTableBodyVM"]();
        var url = _common_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].WS_BASE_PATH + _common_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].REST_ConsumerTable.SetTableOccupied +
            idConsumerTable + "/0/0";
        var observer = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this._http.post(url, dataBody).subscribe(function (data) {
                observer.next(data);
                observer.complete();
            }, function (err) {
                console.error("Error", err);
                toastr.error('Paso un error inesperado en la actualizacion de la Mesa.', 'Error de Servicio!');
                observer.next(null);
                observer.complete();
            });
        });
        return observer;
    };
    BackendService.prototype.logout = function () {
        //this._userClaims.clear();
        //this._router.navigate(['/login']);
    };
    BackendService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _user_claim_services__WEBPACK_IMPORTED_MODULE_5__["UserClaimService"]])
    ], BackendService);
    return BackendService;
}());



/***/ }),

/***/ "./src/app/services/loader.services.ts":
/*!*********************************************!*\
  !*** ./src/app/services/loader.services.ts ***!
  \*********************************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoaderService = /** @class */ (function () {
    function LoaderService() {
        this.canShowLoader = false;
    }
    LoaderService.prototype.showLoader = function () {
        this.canShowLoader = true;
    };
    LoaderService.prototype.hideLoader = function () {
        this.canShowLoader = false;
    };
    LoaderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], LoaderService);
    return LoaderService;
}());



/***/ }),

/***/ "./src/app/services/user-claim.services.ts":
/*!*************************************************!*\
  !*** ./src/app/services/user-claim.services.ts ***!
  \*************************************************/
/*! exports provided: UserClaimService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserClaimService", function() { return UserClaimService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserClaimService = /** @class */ (function () {
    function UserClaimService() {
        this.userName = "";
        this.isAuthenticated = false;
    }
    UserClaimService.prototype.clear = function () {
        this.userName = "";
        this.isAuthenticated = false;
    };
    UserClaimService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UserClaimService);
    return UserClaimService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ubuntu/workspace/pcm-challenge-web/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map