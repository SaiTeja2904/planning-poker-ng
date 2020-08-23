(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/actions/room.actions.ts":
/*!*****************************************!*\
  !*** ./src/app/actions/room.actions.ts ***!
  \*****************************************/
/*! exports provided: RoomActionTypes, LoadRooms, SetRoomId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomActionTypes", function() { return RoomActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadRooms", function() { return LoadRooms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetRoomId", function() { return SetRoomId; });
var RoomActionTypes;
(function (RoomActionTypes) {
    RoomActionTypes["LoadRooms"] = "[Room] Load Rooms";
    RoomActionTypes["SetRoomId"] = "[Room] Set Room Id";
})(RoomActionTypes || (RoomActionTypes = {}));
class LoadRooms {
    constructor() {
        this.type = RoomActionTypes.LoadRooms;
    }
}
class SetRoomId {
    constructor(roomId) {
        this.roomId = roomId;
        this.type = RoomActionTypes.SetRoomId;
    }
}


/***/ }),

/***/ "./src/app/actions/user.actions.ts":
/*!*****************************************!*\
  !*** ./src/app/actions/user.actions.ts ***!
  \*****************************************/
/*! exports provided: UserActionTypes, SetUserDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserActionTypes", function() { return UserActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetUserDetails", function() { return SetUserDetails; });
var UserActionTypes;
(function (UserActionTypes) {
    UserActionTypes["SetUserDetails"] = "[User] Set User Details";
})(UserActionTypes || (UserActionTypes = {}));
class SetUserDetails {
    constructor(userName, userId, isOwner) {
        this.userName = userName;
        this.userId = userId;
        this.isOwner = isOwner;
        this.type = UserActionTypes.SetUserDetails;
    }
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _poker_poker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./poker/poker.component */ "./src/app/poker/poker.component.ts");






const routes = [
    { path: 'poker', component: _poker_poker_component__WEBPACK_IMPORTED_MODULE_3__["PokerComponent"] },
    {
        path: '',
        component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_2__["RegistrationComponent"],
    },
    {
        path: '**',
        component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_2__["RegistrationComponent"],
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'planning-poker-ng';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Planning Poker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["h2[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYWl0ZWphX3N1Z2d1bGEvRG9jdW1lbnRzL0FuZ3VsYXIvcGxhbm5pbmctcG9rZXItbmcvc3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiIsImgyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.less']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/__ivy_ngcc__/fesm2015/ngrx-store-devtools.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./reducers */ "./src/app/reducers/index.ts");
/* harmony import */ var _poker_poker_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./poker/poker.component */ "./src/app/poker/poker.component.ts");
/* harmony import */ var _poker_each_user_card_each_user_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./poker/each-user-card/each-user-card.component */ "./src/app/poker/each-user-card/each-user-card.component.ts");
/* harmony import */ var _poker_vote_card_vote_card_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./poker/vote-card/vote-card.component */ "./src/app/poker/vote-card/vote-card.component.ts");

















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forRoot(_reducers__WEBPACK_IMPORTED_MODULE_10__["reducers"], { metaReducers: _reducers__WEBPACK_IMPORTED_MODULE_10__["metaReducers"] }),
            !_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_8__["StoreDevtoolsModule"].instrument() : [],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _registration_registration_component__WEBPACK_IMPORTED_MODULE_5__["RegistrationComponent"], _poker_poker_component__WEBPACK_IMPORTED_MODULE_11__["PokerComponent"], _poker_each_user_card_each_user_card_component__WEBPACK_IMPORTED_MODULE_12__["EachUserCardComponent"], _poker_vote_card_vote_card_component__WEBPACK_IMPORTED_MODULE_13__["VoteCardComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_8__["StoreDevtoolsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _registration_registration_component__WEBPACK_IMPORTED_MODULE_5__["RegistrationComponent"], _poker_poker_component__WEBPACK_IMPORTED_MODULE_11__["PokerComponent"], _poker_each_user_card_each_user_card_component__WEBPACK_IMPORTED_MODULE_12__["EachUserCardComponent"], _poker_vote_card_vote_card_component__WEBPACK_IMPORTED_MODULE_13__["VoteCardComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forRoot(_reducers__WEBPACK_IMPORTED_MODULE_10__["reducers"], { metaReducers: _reducers__WEBPACK_IMPORTED_MODULE_10__["metaReducers"] }),
                    !_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_8__["StoreDevtoolsModule"].instrument() : [],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/poker/each-user-card/each-user-card.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/poker/each-user-card/each-user-card.component.ts ***!
  \******************************************************************/
/*! exports provided: EachUserCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EachUserCardComponent", function() { return EachUserCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class EachUserCardComponent {
    constructor() { }
    ngOnInit() { }
}
EachUserCardComponent.ɵfac = function EachUserCardComponent_Factory(t) { return new (t || EachUserCardComponent)(); };
EachUserCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EachUserCardComponent, selectors: [["app-each-user-card"]], inputs: { user: "user" }, decls: 8, vars: 4, consts: [[2, "height", "5px"], [1, "card"], [1, "story-points"], [1, "container"]], template: function EachUserCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("casted-vote", ctx.user == null ? null : ctx.user.castedVote);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user == null ? null : ctx.user.storyPoints, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user == null ? null : ctx.user.userName);
    } }, styles: [".card[_ngcontent-%COMP%] {\n  box-shadow: 8px 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n  width: 100px;\n  text-align: center;\n  padding: 15px;\n  height: 135px;\n}\n.card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n}\n.story-points[_ngcontent-%COMP%] {\n  font-size: 100px;\n}\n.container[_ngcontent-%COMP%] {\n  font-size: 15px;\n  height: 15px;\n  overflow: hidden;\n}\n.casted-vote[_ngcontent-%COMP%] {\n  background: green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYWl0ZWphX3N1Z2d1bGEvRG9jdW1lbnRzL0FuZ3VsYXIvcGxhbm5pbmctcG9rZXItbmcvc3JjL2FwcC9wb2tlci9lYWNoLXVzZXItY2FyZC9lYWNoLXVzZXItY2FyZC5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvcG9rZXIvZWFjaC11c2VyLWNhcmQvZWFjaC11c2VyLWNhcmQuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUNDRjtBREVBO0VBQ0UsMkNBQUE7QUNBRjtBREdBO0VBQ0UsZ0JBQUE7QUNERjtBRElBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0ZGO0FES0E7RUFDRSxpQkFBQTtBQ0hGIiwiZmlsZSI6InNyYy9hcHAvcG9rZXIvZWFjaC11c2VyLWNhcmQvZWFjaC11c2VyLWNhcmQuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XG4gIGJveC1zaGFkb3c6IDhweCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICB3aWR0aDogMTAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTVweDtcbiAgaGVpZ2h0OiAxMzVweDtcbn1cblxuLmNhcmQ6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4uc3RvcnktcG9pbnRzIHtcbiAgZm9udC1zaXplOiAxMDBweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uY2FzdGVkLXZvdGUge1xuICBiYWNrZ3JvdW5kOiBncmVlbjtcbn1cbiIsIi5jYXJkIHtcbiAgYm94LXNoYWRvdzogOHB4IDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIHdpZHRoOiAxMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxNXB4O1xuICBoZWlnaHQ6IDEzNXB4O1xufVxuLmNhcmQ6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuLnN0b3J5LXBvaW50cyB7XG4gIGZvbnQtc2l6ZTogMTAwcHg7XG59XG4uY29udGFpbmVyIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uY2FzdGVkLXZvdGUge1xuICBiYWNrZ3JvdW5kOiBncmVlbjtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EachUserCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-each-user-card',
                templateUrl: './each-user-card.component.html',
                styleUrls: ['./each-user-card.component.less'],
            }]
    }], function () { return []; }, { user: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/poker/poker.component.ts":
/*!******************************************!*\
  !*** ./src/app/poker/poker.component.ts ***!
  \******************************************/
/*! exports provided: PokerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokerComponent", function() { return PokerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _selectors_users_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../selectors/users.selector */ "./src/app/selectors/users.selector.ts");
/* harmony import */ var _selectors_room_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../selectors/room.selector */ "./src/app/selectors/room.selector.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _poker_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./poker.service */ "./src/app/poker/poker.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _each_user_card_each_user_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./each-user-card/each-user-card.component */ "./src/app/poker/each-user-card/each-user-card.component.ts");
/* harmony import */ var _vote_card_vote_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vote-card/vote-card.component */ "./src/app/poker/vote-card/vote-card.component.ts");










function PokerComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PokerComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onStoryIdEdit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PokerComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PokerComponent_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.flipCards(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Flip Cards");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PokerComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PokerComponent_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.resetCards(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Reset ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PokerComponent_app_each_user_card_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-each-user-card", 10);
} if (rf & 2) {
    const user_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", user_r11);
} }
function PokerComponent_app_vote_card_17_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-vote-card", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedVote", function PokerComponent_app_vote_card_17_Template_app_vote_card_selectedVote_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.onVoteSelected($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vote_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("vote", vote_r12);
} }
class PokerComponent {
    constructor(store, pokerService) {
        this.store = store;
        this.pokerService = pokerService;
        this.userName = 'Sai';
        this.availbleVotes = [
            { value: 1, isSelected: false },
            { value: 2, isSelected: false },
            { value: 3, isSelected: false },
            { value: 5, isSelected: false },
            { value: 8, isSelected: false },
            { value: 13, isSelected: false },
            { value: 21, isSelected: false },
        ];
        this.store.select(_selectors_room_selector__WEBPACK_IMPORTED_MODULE_2__["roomIdSelector"]).subscribe(({ roomId }) => {
            this.roomId = roomId;
        });
    }
    ngOnInit() {
        this.store.select(_selectors_users_selector__WEBPACK_IMPORTED_MODULE_1__["userDetailsSelector"]).subscribe((userDetails) => {
            const { userName, userId, isOwner } = userDetails;
            this.userName = userName;
            this.userId = userId;
            this.isOwner = isOwner;
        });
        this.store
            .select(_selectors_room_selector__WEBPACK_IMPORTED_MODULE_2__["roomIdSelector"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(({ roomId }) => roomId != 0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])())
            .subscribe(({ roomId }) => {
            this.pokerService
                .getRoomStatusPoll(roomId)
                .subscribe((roomStatus) => {
                this.story = roomStatus.story;
                this.currentRoomUsers = roomStatus.users;
            });
        });
    }
    flipCards() {
        this.pokerService.flipCards(this.roomId).subscribe(() => { });
    }
    resetCards() {
        this.resetAllSelectedCards();
        this.pokerService.resetCards(this.roomId).subscribe(() => { });
    }
    onVoteSelected(value) {
        this.availbleVotes = this.availbleVotes.map((aa) => {
            return {
                value: aa.value,
                isSelected: aa.value === value,
            };
        });
        this.pokerService
            .castVote(this.userId, value, this.roomId)
            .subscribe(() => { });
    }
    onStoryIdEdit() {
        var newStoryId = window.prompt('Plese enter new Stroy ID', 'WA-');
        if (newStoryId !== null && newStoryId !== '') {
            this.pokerService
                .updateStoryId(newStoryId, this.roomId)
                .subscribe(() => { });
        }
    }
    resetAllSelectedCards() {
        this.availbleVotes = this.availbleVotes.map((aa) => {
            return {
                value: aa.value,
                isSelected: false,
            };
        });
    }
}
PokerComponent.ɵfac = function PokerComponent_Factory(t) { return new (t || PokerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_poker_service__WEBPACK_IMPORTED_MODULE_5__["PokerService"])); };
PokerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PokerComponent, selectors: [["app-poker"]], decls: 18, vars: 8, consts: [[1, "room-info"], ["style", "margin-left: 5px;", 3, "click", 4, "ngIf"], [3, "click", 4, "ngIf"], [2, "display", "flex", "flex-wrap", "wrap"], ["style", "margin: 10px;", 3, "user", 4, "ngFor", "ngForOf"], [2, "margin-top", "100px"], [2, "display", "flex", "flex-wrap", "wrap", "justify-content", "center"], ["style", "margin: 10px;", 3, "vote", "selectedVote", 4, "ngFor", "ngForOf"], [2, "margin-left", "5px", 3, "click"], [3, "click"], [2, "margin", "10px", 3, "user"], [2, "margin", "10px", 3, "vote", "selectedVote"]], template: function PokerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PokerComponent_button_6_Template, 2, 0, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PokerComponent_button_8_Template, 2, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PokerComponent_button_9_Template, 2, 0, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PokerComponent_app_each_user_card_13_Template, 1, 1, "app-each-user-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Select your story points: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, PokerComponent_app_vote_card_17_Template, 1, 1, "app-vote-card", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Hi ", ctx.userName, " !!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Story: ", ctx.story == null ? null : ctx.story.storyId, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isOwner);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isOwner);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isOwner);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Room Id: ", ctx.roomId, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.currentRoomUsers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.availbleVotes);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _each_user_card_each_user_card_component__WEBPACK_IMPORTED_MODULE_7__["EachUserCardComponent"], _vote_card_vote_card_component__WEBPACK_IMPORTED_MODULE_8__["VoteCardComponent"]], styles: [".room-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding-left: 150px;\n  padding-right: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYWl0ZWphX3N1Z2d1bGEvRG9jdW1lbnRzL0FuZ3VsYXIvcGxhbm5pbmctcG9rZXItbmcvc3JjL2FwcC9wb2tlci9wb2tlci5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvcG9rZXIvcG9rZXIuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wb2tlci9wb2tlci5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb29tLWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmctbGVmdDogMTUwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1MHB4O1xufVxuIiwiLnJvb20taW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZy1sZWZ0OiAxNTBweDtcbiAgcGFkZGluZy1yaWdodDogMTUwcHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PokerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-poker',
                templateUrl: './poker.component.html',
                styleUrls: ['./poker.component.less'],
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }, { type: _poker_service__WEBPACK_IMPORTED_MODULE_5__["PokerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/poker/poker.service.ts":
/*!****************************************!*\
  !*** ./src/app/poker/poker.service.ts ***!
  \****************************************/
/*! exports provided: PokerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokerService", function() { return PokerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _utils_rx_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/rx-utils */ "./src/app/utils/rx-utils.ts");
/* harmony import */ var _registration_registration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../registration/registration.service */ "./src/app/registration/registration.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class PokerService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getRoomStatus(roomId) {
        return this.httpClient.get(`${_registration_registration_service__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"]}/rooms/status/${roomId}`);
    }
    getRoomStatusPoll(roomId) {
        return Object(_utils_rx_utils__WEBPACK_IMPORTED_MODULE_1__["poll"])(this.getRoomStatus(roomId), 2000, () => false);
    }
    flipCards(roomId) {
        return this.httpClient.put(`${_registration_registration_service__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"]}/rooms/flipCards/${roomId}`, {});
    }
    resetCards(roomId) {
        return this.httpClient.put(`${_registration_registration_service__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"]}/rooms/resetStory/${roomId}`, {});
    }
    castVote(userId, storyPoints, roomId) {
        return this.httpClient.post(`${_registration_registration_service__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"]}/rooms/castVote/`, {
            userId,
            storyPoints,
            roomId,
        });
    }
    updateStoryId(storyId, roomId) {
        return this.httpClient.post(`${_registration_registration_service__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"]}/rooms/setStoryDetails`, {
            storyDetails: { storyId, storyDescription: '' },
            roomId,
        });
    }
}
PokerService.ɵfac = function PokerService_Factory(t) { return new (t || PokerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
PokerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PokerService, factory: PokerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PokerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/poker/vote-card/vote-card.component.ts":
/*!********************************************************!*\
  !*** ./src/app/poker/vote-card/vote-card.component.ts ***!
  \********************************************************/
/*! exports provided: VoteCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoteCardComponent", function() { return VoteCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class VoteCardComponent {
    constructor() {
        this.selectedVote = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    selected() {
        this.selectedVote.emit(this.vote.value);
    }
}
VoteCardComponent.ɵfac = function VoteCardComponent_Factory(t) { return new (t || VoteCardComponent)(); };
VoteCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VoteCardComponent, selectors: [["app-vote-card"]], inputs: { vote: "vote" }, outputs: { selectedVote: "selectedVote" }, decls: 3, vars: 3, consts: [[1, "card"], [1, "story-points", 3, "click"]], template: function VoteCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoteCardComponent_Template_div_click_1_listener() { return ctx.selected(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ctx.vote == null ? null : ctx.vote.isSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.vote == null ? null : ctx.vote.value, " ");
    } }, styles: [".card[_ngcontent-%COMP%] {\n  box-shadow: 8px 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n  width: 100px;\n  text-align: center;\n  padding: 15px;\n  height: 135px;\n}\n.card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n}\n.story-points[_ngcontent-%COMP%] {\n  font-size: 100px;\n}\n.container[_ngcontent-%COMP%] {\n  font-size: 15px;\n  height: 15px;\n  overflow: hidden;\n}\n.selected[_ngcontent-%COMP%] {\n  background: #5af542;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYWl0ZWphX3N1Z2d1bGEvRG9jdW1lbnRzL0FuZ3VsYXIvcGxhbm5pbmctcG9rZXItbmcvc3JjL2FwcC9wb2tlci92b3RlLWNhcmQvdm90ZS1jYXJkLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9wb2tlci92b3RlLWNhcmQvdm90ZS1jYXJkLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNENBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FDQ0Y7QURFQTtFQUNFLDJDQUFBO0FDQUY7QURHQTtFQUNFLGdCQUFBO0FDREY7QURJQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNGRjtBREtBO0VBQ0UsbUJBQUE7QUNIRiIsImZpbGUiOiJzcmMvYXBwL3Bva2VyL3ZvdGUtY2FyZC92b3RlLWNhcmQuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XG4gIGJveC1zaGFkb3c6IDhweCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICB3aWR0aDogMTAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTVweDtcbiAgaGVpZ2h0OiAxMzVweDtcbn1cblxuLmNhcmQ6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4uc3RvcnktcG9pbnRzIHtcbiAgZm9udC1zaXplOiAxMDBweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kOiAjNWFmNTQyO1xufVxuIiwiLmNhcmQge1xuICBib3gtc2hhZG93OiA4cHggNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgd2lkdGg6IDEwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGhlaWdodDogMTM1cHg7XG59XG4uY2FyZDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG4uc3RvcnktcG9pbnRzIHtcbiAgZm9udC1zaXplOiAxMDBweDtcbn1cbi5jb250YWluZXIge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQ6ICM1YWY1NDI7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VoteCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-vote-card',
                templateUrl: './vote-card.component.html',
                styleUrls: ['./vote-card.component.less'],
            }]
    }], function () { return []; }, { vote: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectedVote: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/reducers/index.ts":
/*!***********************************!*\
  !*** ./src/app/reducers/index.ts ***!
  \***********************************/
/*! exports provided: reducers, metaReducers, UserReducer, RoomReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserReducer", function() { return UserReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomReducer", function() { return RoomReducer; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/user.actions */ "./src/app/actions/user.actions.ts");
/* harmony import */ var _actions_room_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/room.actions */ "./src/app/actions/room.actions.ts");



const reducers = {
    user: UserReducer,
    room: RoomReducer,
};
const metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production
    ? []
    : [];
const initialUserState = {
    userId: '',
    userName: '',
    isOwner: false,
};
function UserReducer(state = initialUserState, action) {
    switch (action.type) {
        case _actions_user_actions__WEBPACK_IMPORTED_MODULE_1__["UserActionTypes"].SetUserDetails:
            return Object.assign(Object.assign({}, state), { userId: action.userId, userName: action.userName, isOwner: action.isOwner });
        default:
            return state;
    }
}
const initialRoomState = {
    roomId: 0,
    onwer: '',
    story: {
        storyId: '',
        storyDescription: '',
    },
    users: [],
    flipCards: false,
};
function RoomReducer(state = initialRoomState, action) {
    switch (action.type) {
        case _actions_room_actions__WEBPACK_IMPORTED_MODULE_2__["RoomActionTypes"].SetRoomId:
            return Object.assign(Object.assign({}, state), { roomId: action.roomId });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/registration/registration.component.ts":
/*!********************************************************!*\
  !*** ./src/app/registration/registration.component.ts ***!
  \********************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/user.actions */ "./src/app/actions/user.actions.ts");
/* harmony import */ var _actions_room_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/room.actions */ "./src/app/actions/room.actions.ts");
/* harmony import */ var _registration_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./registration.service */ "./src/app/registration/registration.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");









class RegistrationComponent {
    constructor(fb, registrationService, store, router) {
        this.fb = fb;
        this.registrationService = registrationService;
        this.store = store;
        this.router = router;
    }
    ngOnInit() {
        this.formGroup = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            emailId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            roomId: [''],
        });
    }
    createRoom() {
        const { name, emailId } = this.formGroup.value;
        this.registrationService
            .createRoom(name, emailId)
            .subscribe((response) => {
            const { userDetails, roomId, isOwner } = response;
            const { userName, userId } = userDetails;
            this.store.dispatch(new _actions_user_actions__WEBPACK_IMPORTED_MODULE_2__["SetUserDetails"](userName, userId, isOwner));
            this.store.dispatch(new _actions_room_actions__WEBPACK_IMPORTED_MODULE_3__["SetRoomId"](roomId));
            this.router.navigate(['/poker']);
        });
    }
    joinRoom() {
        const { name, emailId, roomId } = this.formGroup.value;
        if (roomId) {
            this.registrationService
                .joinRoom(name, emailId, roomId)
                .subscribe((response) => {
                const { userDetails, roomId, isOwner } = response;
                const { userName, userId } = userDetails;
                this.store.dispatch(new _actions_user_actions__WEBPACK_IMPORTED_MODULE_2__["SetUserDetails"](userName, userId, isOwner));
                this.store.dispatch(new _actions_room_actions__WEBPACK_IMPORTED_MODULE_3__["SetRoomId"](roomId));
                this.router.navigate(['/poker']);
            });
        }
        else {
            alert('Please enter Room ID if you want to join a room');
        }
    }
}
RegistrationComponent.ɵfac = function RegistrationComponent_Factory(t) { return new (t || RegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_registration_service__WEBPACK_IMPORTED_MODULE_4__["RegistrationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
RegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegistrationComponent, selectors: [["app-registration"]], decls: 18, vars: 3, consts: [[1, "registration-card"], [1, "form", 3, "formGroup"], [1, "input"], ["type", "text", "formControlName", "name"], ["type", "email", "formControlName", "emailId"], ["type", "text", "formControlName", "roomId"], [3, "disabled", "click"]], template: function RegistrationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Email Id:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Room Id:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationComponent_Template_button_click_14_listener() { return ctx.createRoom(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Create Room ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationComponent_Template_button_click_16_listener() { return ctx.joinRoom(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Join Room ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.formGroup.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.formGroup.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: [".registration-card[_ngcontent-%COMP%] {\n  display: flex;\n  height: 220px;\n  width: 300px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n  align-content: center;\n  margin: auto;\n  justify-content: center;\n}\n.registration-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n}\n.registration-card[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\n  padding: 20px 10px 10px 10px;\n}\n.registration-card[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%] {\n  display: grid;\n  padding-bottom: 7px;\n}\nregistration-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYWl0ZWphX3N1Z2d1bGEvRG9jdW1lbnRzL0FuZ3VsYXIvcGxhbm5pbmctcG9rZXItbmcvc3JjL2FwcC9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FDQ0Y7QURDRTtFQUNFLDJDQUFBO0FDQ0o7QURaQTtFQWVJLDRCQUFBO0FDQUo7QURmQTtFQWtCTSxhQUFBO0VBQ0EsbUJBQUE7QUNBTjtBREtBO0VBQ0UsMkNBQUE7QUNIRiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVnaXN0cmF0aW9uLWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDIyMHB4O1xuICB3aWR0aDogMzAwcHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IGF1dG87XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICY6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIH1cblxuICAuZm9ybSB7XG4gICAgcGFkZGluZzogMjBweCAxMHB4IDEwcHggMTBweDtcblxuICAgIC5pbnB1dCB7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgcGFkZGluZy1ib3R0b206IDdweDtcbiAgICB9XG4gIH1cbn1cblxucmVnaXN0cmF0aW9uLWNhcmQ6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuIiwiLnJlZ2lzdHJhdGlvbi1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAyMjBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5yZWdpc3RyYXRpb24tY2FyZDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG4ucmVnaXN0cmF0aW9uLWNhcmQgLmZvcm0ge1xuICBwYWRkaW5nOiAyMHB4IDEwcHggMTBweCAxMHB4O1xufVxuLnJlZ2lzdHJhdGlvbi1jYXJkIC5mb3JtIC5pbnB1dCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBhZGRpbmctYm90dG9tOiA3cHg7XG59XG5yZWdpc3RyYXRpb24tY2FyZDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-registration',
                templateUrl: './registration.component.html',
                styleUrls: ['./registration.component.less'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _registration_service__WEBPACK_IMPORTED_MODULE_4__["RegistrationService"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/registration/registration.service.ts":
/*!******************************************************!*\
  !*** ./src/app/registration/registration.service.ts ***!
  \******************************************************/
/*! exports provided: BASE_URL, RegistrationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_URL", function() { return BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationService", function() { return RegistrationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





const BASE_URL = 'https://planning-poker-api-teja.herokuapp.com';
class RegistrationService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    createRoom(userName, userId) {
        this.httpClient.get(BASE_URL).subscribe(console.log);
        return this.httpClient.post(`${BASE_URL}/rooms/createRoom`, {
            userDetails: {
                userName,
                userId,
            },
        });
    }
    joinRoom(userName, userId, roomId) {
        return this.httpClient
            .post(`${BASE_URL}/rooms/joinRoom`, {
            userDetails: {
                userName,
                userId,
            },
            roomId,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((_) => {
            alert(_.error.error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
        }));
    }
}
RegistrationService.ɵfac = function RegistrationService_Factory(t) { return new (t || RegistrationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
RegistrationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RegistrationService, factory: RegistrationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/selectors/room.selector.ts":
/*!********************************************!*\
  !*** ./src/app/selectors/room.selector.ts ***!
  \********************************************/
/*! exports provided: roomIdSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roomIdSelector", function() { return roomIdSelector; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");

const roomSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('room');
const roomIdSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(roomSelector, (state) => ({
    roomId: state.roomId,
}));


/***/ }),

/***/ "./src/app/selectors/users.selector.ts":
/*!*********************************************!*\
  !*** ./src/app/selectors/users.selector.ts ***!
  \*********************************************/
/*! exports provided: userDetailsSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userDetailsSelector", function() { return userDetailsSelector; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");

const userSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('user');
const userDetailsSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(userSelector, (state) => ({
    userName: state.userName,
    userId: state.userId,
    isOwner: state.isOwner,
}));


/***/ }),

/***/ "./src/app/utils/rx-utils.ts":
/*!***********************************!*\
  !*** ./src/app/utils/rx-utils.ts ***!
  \***********************************/
/*! exports provided: stopOn, poll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopOn", function() { return stopOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "poll", function() { return poll; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");


const stopOn = (predicate) => (source) => {
    return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](subscriber => {
        let s = source.subscribe({
            next(value) {
                if (predicate && predicate(value)) {
                    s.unsubscribe();
                }
                subscriber.next(value);
            },
            error(error) {
                subscriber.error(error);
            },
            complete() {
                subscriber.complete();
            }
        });
        return s;
    });
};
function poll(source, pollingTime, stopPollWhen) {
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(0, pollingTime).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["concatMap"])(_ => source), stopOn(stopPollWhen));
}


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/saiteja_suggula/Documents/Angular/planning-poker-ng/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map