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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/addemployee/addemployee.component.html":
/*!********************************************************!*\
  !*** ./src/app/addemployee/addemployee.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\">\n  <div class=\"container bg-almond\">\n    <div  *ngIf=\"showMessage\" class=\"alert alert-success\">\n      Employee Added Successfully\n    </div>\n\n    <div><strong>Username</strong></div>\n    <input type=\"text\" formControlName=\"userName\"  #username class=\"textBox\">\n    <div><strong> Job</strong></div>\n    <input type=\"text\" formControlName=\"job\"  #job class=\"textBox\">\n    <div>\n      <button type=\"submit\" class=\"btn btn-primary mt-2\"  [ngClass]=\"{'disabled': (form.status == 'INVALID') }\" (click)=\"(form.status != 'INVALID') ? clickSubmit(form.value): false\">Submit</button>\n    </div>\n  </div>\n</form> "

/***/ }),

/***/ "./src/app/addemployee/addemployee.component.scss":
/*!********************************************************!*\
  !*** ./src/app/addemployee/addemployee.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZGVtcGxveWVlL2FkZGVtcGxveWVlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/addemployee/addemployee.component.ts":
/*!******************************************************!*\
  !*** ./src/app/addemployee/addemployee.component.ts ***!
  \******************************************************/
/*! exports provided: AddemployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddemployeeComponent", function() { return AddemployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_employeeservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/employeeservice.service */ "./src/app/employeeservice.service.ts");




var AddemployeeComponent = /** @class */ (function () {
    function AddemployeeComponent(formBuilder, employeeListService) {
        this.formBuilder = formBuilder;
        this.employeeListService = employeeListService;
        this.showMessage = false;
    }
    AddemployeeComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            job: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    AddemployeeComponent.prototype.clickSubmit = function (value) {
        var _this = this;
        this.employeeListService.addUser(value).subscribe(function (res) {
            console.log("added employee", res);
            _this.showMessage = true;
        });
        setTimeout(function () {
            _this.showMessage = false;
        }, 2000);
    };
    AddemployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addemployee',
            template: __webpack_require__(/*! ./addemployee.component.html */ "./src/app/addemployee/addemployee.component.html"),
            styles: [__webpack_require__(/*! ./addemployee.component.scss */ "./src/app/addemployee/addemployee.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_employeeservice_service__WEBPACK_IMPORTED_MODULE_3__["Employeeservice"]])
    ], AddemployeeComponent);
    return AddemployeeComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _employeelist_employeelist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employeelist/employeelist.component */ "./src/app/employeelist/employeelist.component.ts");
/* harmony import */ var _addemployee_addemployee_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addemployee/addemployee.component */ "./src/app/addemployee/addemployee.component.ts");
/* harmony import */ var _editemployee_editemployee_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editemployee/editemployee.component */ "./src/app/editemployee/editemployee.component.ts");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resume/resume.component */ "./src/app/resume/resume.component.ts");







var routes = [
    {
        path: 'employeelist',
        component: _employeelist_employeelist_component__WEBPACK_IMPORTED_MODULE_3__["EmployeelistComponent"],
    },
    {
        path: 'addemployee',
        component: _addemployee_addemployee_component__WEBPACK_IMPORTED_MODULE_4__["AddemployeeComponent"],
    },
    {
        path: 'editemployee',
        component: _editemployee_editemployee_component__WEBPACK_IMPORTED_MODULE_5__["EditemployeeComponent"],
    },
    {
        path: 'resume',
        component: _resume_resume_component__WEBPACK_IMPORTED_MODULE_6__["ResumeComponent"],
    },
    {
        path: '**',
        component: _employeelist_employeelist_component__WEBPACK_IMPORTED_MODULE_3__["EmployeelistComponent"],
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<nav class=\"navbar navbar-expand-lg bg-dark navBarPosition\">\n  <span class=\"text-white\">Employee Demo Project</span>\n  \n  <button class=\"navbar-toggler bg-light\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo02\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo02\">\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"employeelist\" routerLinkActive=\"active-link\">Employee List <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"addemployee\" routerLinkActive=\"active-link\">Add Employee <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item active\">\n          <a class=\"nav-link\" routerLink=\"editemployee\" routerLinkActive=\"active-link\">Edit Employee <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"resume\" routerLinkActive=\"active-link\">Resume <span class=\"sr-only\">(current)</span></a>\n      </li>\n\n    </ul>\n  </div>\n</nav>\n<div style=\"text-align:center\">\n  <!--<h1>\n    Welcome to {{ title }}!\n  </h1>-->\n  \n</div>\n\n<div class=\"mt-4\">\n<router-outlet></router-outlet>\n</div>\n\n<!--<div class=\"mt-4\">\n  <app-employeephoto></app-employeephoto>\n</div>-->\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'employeedemo';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _employeelist_employeelist_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./employeelist/employeelist.component */ "./src/app/employeelist/employeelist.component.ts");
/* harmony import */ var _employeeservice_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./employeeservice.service */ "./src/app/employeeservice.service.ts");
/* harmony import */ var _addemployee_addemployee_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./addemployee/addemployee.component */ "./src/app/addemployee/addemployee.component.ts");
/* harmony import */ var _editemployee_editemployee_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./editemployee/editemployee.component */ "./src/app/editemployee/editemployee.component.ts");
/* harmony import */ var _employeephoto_employeephoto_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./employeephoto/employeephoto.component */ "./src/app/employeephoto/employeephoto.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./resume/resume.component */ "./src/app/resume/resume.component.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _employeelist_employeelist_component__WEBPACK_IMPORTED_MODULE_7__["EmployeelistComponent"],
                _addemployee_addemployee_component__WEBPACK_IMPORTED_MODULE_9__["AddemployeeComponent"],
                _editemployee_editemployee_component__WEBPACK_IMPORTED_MODULE_10__["EditemployeeComponent"],
                _employeephoto_employeephoto_component__WEBPACK_IMPORTED_MODULE_11__["EmployeephotoComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                _resume_resume_component__WEBPACK_IMPORTED_MODULE_13__["ResumeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            providers: [_employeeservice_service__WEBPACK_IMPORTED_MODULE_8__["Employeeservice"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/editemployee/editemployee.component.html":
/*!**********************************************************!*\
  !*** ./src/app/editemployee/editemployee.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\">\n    <div class=\"container bg-almond\">\n      <div class= \"alert alert-success\" *ngIf=\"showEditMessage\">\n        Employee Added Successfully\n      </div>\n      <div class= \"alert alert-danger\" *ngIf=\"showDeleteMessage\">\n          Employee Deleted Successfully\n        </div>\n      <div><strong>Id</strong></div>\n      <input type=\"text\" formControlName=\"id\"  #id class=\"textBox\">\n      <div><strong> Username</strong></div>\n      <input type=\"text\" formControlName=\"userName\"  #username class=\"textBox\">\n      <div><strong> Job</strong></div>\n      <input type=\"text\" formControlName=\"job\"  #job class=\"textBox\">\n\n      <div>\n        <button type=\"submit\" class=\"btn btn-primary mt-2 mr-2\" (click)=\"onSubmit(form.value)\">Submit</button>\n        <button type=\"submit\" class=\"btn btn-danger mt-2\" (click)=\"deleteEmployee(form.value)\">Delete Employee</button>\n      </div>\n\n      \n    </div>\n  </form> "

/***/ }),

/***/ "./src/app/editemployee/editemployee.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/editemployee/editemployee.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXRlbXBsb3llZS9lZGl0ZW1wbG95ZWUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/editemployee/editemployee.component.ts":
/*!********************************************************!*\
  !*** ./src/app/editemployee/editemployee.component.ts ***!
  \********************************************************/
/*! exports provided: EditemployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditemployeeComponent", function() { return EditemployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_employeeservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/employeeservice.service */ "./src/app/employeeservice.service.ts");




var EditemployeeComponent = /** @class */ (function () {
    function EditemployeeComponent(formBuilder, employeeListService) {
        this.formBuilder = formBuilder;
        this.employeeListService = employeeListService;
        this.showEditMessage = false;
        this.showDeleteMessage = false;
    }
    EditemployeeComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            userName: '',
            job: '',
            id: ''
        });
    };
    EditemployeeComponent.prototype.onSubmit = function (value) {
        var _this = this;
        this.employeeListService.editUser(value).subscribe(function (res) {
            console.log("edit employee", res);
            _this.showEditMessage = true;
        });
        setTimeout(function () {
            _this.showEditMessage = false;
        }, 2000);
    };
    EditemployeeComponent.prototype.deleteEmployee = function (value) {
        var _this = this;
        this.employeeListService.deleteUser(value).subscribe(function (res) {
            console.log("delete employee", res);
            _this.showDeleteMessage = true;
        });
        setTimeout(function () {
            _this.showDeleteMessage = false;
        }, 2000);
    };
    EditemployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editemployee',
            template: __webpack_require__(/*! ./editemployee.component.html */ "./src/app/editemployee/editemployee.component.html"),
            styles: [__webpack_require__(/*! ./editemployee.component.scss */ "./src/app/editemployee/editemployee.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_employeeservice_service__WEBPACK_IMPORTED_MODULE_3__["Employeeservice"]])
    ], EditemployeeComponent);
    return EditemployeeComponent;
}());



/***/ }),

/***/ "./src/app/employeelist/employeelist.component.html":
/*!**********************************************************!*\
  !*** ./src/app/employeelist/employeelist.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<!--<p *ngIf= \"employeeList\">\n  {{employeeList.data| json}}\n</p>-->\n<div class=\"\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <h2>Enter one of the search criteria</h2>\n    </div>\n    <div class=\"row bg-almond\">\n      <div class=\"col\">\n        Enter name to search\n        <div class=\"\">\n          <input type=\"text\"[(ngModel)]=\"searchText\" class=\"textBox\" (keyup)= \"searchEmployee(searchText)\">\n        </div>\n        \n      </div>\n      <div class=\"col\">\n        Enter id to search\n        <div class=\"\">\n          <input type=\"text\"[(ngModel)]=\"searchId\" class=\"textBox\" (keyup)= \"searchEmployeeId(searchId)\">\n        </div>\n        \n      </div> \n      <div class=\"col\">\n          Enter Page number\n          <div class=\"\">\n            <input type=\"text\"[(ngModel)]=\"searchPage\" class=\"textBox\" (keyup)= \"searchEmployeePage(searchPage)\">\n          </div>\n          \n        </div> \n    </div>\n  </div>\n\n\n    \n    \n\n\n\n  <div *ngIf= \"employeeList\">\n      <div class=\"container border border-dark mt-4\">\n        <div class= \"row border border-dark bg-info text-center\">\n            <span class=\"col-sm-1 border border-dark\">Id</span>\n            <span class=\"col-sm-3 border border-dark\">First Name</span>\n            <span class=\"col-sm-3 border border-dark\">Last Name</span>\n            <span class=\"col-sm-5 border border-dark\">Avatar</span>\n        </div>\n        \n        <div *ngFor= \"let emp of employeeData\" class=\"row border border-dark text-center\">\n          \n            <span scope=\"row\" class=\"col-sm-1 border border-dashed\">{{emp.id}}</span>\n            <span class=\"col-sm-3 border border-dashed\">{{emp.first_name}}</span>\n            <span class=\"col-sm-3 border border-dashed\">{{emp.last_name}}</span>\n            <span class=\"col-sm-5 border border-dashed\"><img src=\"{{emp.avatar}}\" class=\"rounded-circle\"/></span>\n            \n          \n        </div>\n      </div>\n  </div>\n  \n</div>\n\n"

/***/ }),

/***/ "./src/app/employeelist/employeelist.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/employeelist/employeelist.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlbGlzdC9lbXBsb3llZWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/employeelist/employeelist.component.ts":
/*!********************************************************!*\
  !*** ./src/app/employeelist/employeelist.component.ts ***!
  \********************************************************/
/*! exports provided: EmployeelistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeelistComponent", function() { return EmployeelistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_employeeservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/employeeservice.service */ "./src/app/employeeservice.service.ts");



var EmployeelistComponent = /** @class */ (function () {
    function EmployeelistComponent(employeeListService) {
        this.employeeListService = employeeListService;
    }
    EmployeelistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.employeeListService.getUser().subscribe(function (res) {
            _this.employeeList = res;
            _this.employeeData = res.data;
            _this.dupData = res.data;
        });
    };
    EmployeelistComponent.prototype.searchEmployee = function (value) {
        if (value)
            this.employeeData = this.dupData.filter(function (x) { return x.first_name.toLowerCase().match(value.toLowerCase()); });
        else
            this.employeeData = this.dupData;
        this.searchId = '';
        this.searchPage = '';
    };
    EmployeelistComponent.prototype.searchEmployeeId = function (value) {
        if (value)
            this.employeeData = this.dupData.filter(function (x) { return x.id == value; });
        else
            this.employeeData = this.dupData;
        this.searchText = '';
        this.searchPage = '';
    };
    EmployeelistComponent.prototype.searchEmployeePage = function (value) {
        var _this = this;
        this.employeeListService.getUserPage(value).subscribe(function (res) {
            _this.employeeList = res;
            _this.employeeData = res.data;
            _this.dupData = res.data;
        });
        this.searchText = '';
        this.searchId = '';
    };
    EmployeelistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employeelist',
            template: __webpack_require__(/*! ./employeelist.component.html */ "./src/app/employeelist/employeelist.component.html"),
            styles: [__webpack_require__(/*! ./employeelist.component.scss */ "./src/app/employeelist/employeelist.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_employeeservice_service__WEBPACK_IMPORTED_MODULE_2__["Employeeservice"]])
    ], EmployeelistComponent);
    return EmployeelistComponent;
}());



/***/ }),

/***/ "./src/app/employeephoto/employeephoto.component.html":
/*!************************************************************!*\
  !*** ./src/app/employeephoto/employeephoto.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <h2>Employee Photo</h2>\n    </div>\n    \n\n    <div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\n        <div class=\"carousel-inner\">\n\n          <div class=\"carousel-item active\">\n            <img class=\"d-block w-100\" src=\"https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg\" alt=\" slide\">\n          </div>\n\n          <div class=\"carousel-item \" *ngFor= \"let emp of employeeData\">\n              <img class=\"d-block w-100\" src=\"{{emp.avatar}}\" alt=\" slide\">\n          </div>\n        </div>\n        <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\n          <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Previous</span>\n        </a>\n        <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n          <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Next</span>\n        </a>\n    </div>\n  \n</div>\n\n"

/***/ }),

/***/ "./src/app/employeephoto/employeephoto.component.scss":
/*!************************************************************!*\
  !*** ./src/app/employeephoto/employeephoto.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlcGhvdG8vZW1wbG95ZWVwaG90by5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/employeephoto/employeephoto.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/employeephoto/employeephoto.component.ts ***!
  \**********************************************************/
/*! exports provided: EmployeephotoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeephotoComponent", function() { return EmployeephotoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_employeeservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/employeeservice.service */ "./src/app/employeeservice.service.ts");



var EmployeephotoComponent = /** @class */ (function () {
    function EmployeephotoComponent(employeeListService) {
        this.employeeListService = employeeListService;
    }
    EmployeephotoComponent.prototype.ngOnInit = function () {
        this.employeePhotoInfo();
    };
    EmployeephotoComponent.prototype.employeePhotoInfo = function () {
        var _this = this;
        this.employeeListService.getUserPhoto().subscribe(function (res) {
            _this.empPhotoData = res.data;
        });
        this.employeeListService.getUser().subscribe(function (res) {
            _this.employeeData = res.data;
        });
    };
    EmployeephotoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employeephoto',
            template: __webpack_require__(/*! ./employeephoto.component.html */ "./src/app/employeephoto/employeephoto.component.html"),
            styles: [__webpack_require__(/*! ./employeephoto.component.scss */ "./src/app/employeephoto/employeephoto.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_employeeservice_service__WEBPACK_IMPORTED_MODULE_2__["Employeeservice"]])
    ], EmployeephotoComponent);
    return EmployeephotoComponent;
}());



/***/ }),

/***/ "./src/app/employeeservice.service.ts":
/*!********************************************!*\
  !*** ./src/app/employeeservice.service.ts ***!
  \********************************************/
/*! exports provided: Employeeservice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Employeeservice", function() { return Employeeservice; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var Employeeservice = /** @class */ (function () {
    function Employeeservice(_http) {
        this._http = _http;
        this.BASE_URL = 'https://reqres.in';
        this.GetEmployeeDta = '/api/users';
        this.GetEmployeePhoto = '/api/unknown';
    }
    //get employee data 1st page
    Employeeservice.prototype.getUser = function () {
        return this._http
            .get(this.BASE_URL + this.GetEmployeeDta, { responseType: 'json' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
    };
    //get employee data 1st page
    Employeeservice.prototype.getUserPage = function (id) {
        return this._http
            .get(this.BASE_URL + this.GetEmployeeDta + '?page=' + id, { responseType: 'json' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
    };
    //add employee data
    Employeeservice.prototype.addUser = function (body) {
        return this._http
            .post(this.BASE_URL + this.GetEmployeeDta, body, { responseType: 'json' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
    };
    //edit employee data
    Employeeservice.prototype.editUser = function (body) {
        return this._http
            .put(this.BASE_URL + this.GetEmployeeDta + '/' + body.id, body, { responseType: 'json' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
    };
    //delete employee data
    Employeeservice.prototype.deleteUser = function (body) {
        return this._http
            .delete(this.BASE_URL + this.GetEmployeeDta + '/' + body.id, { responseType: 'json' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
    };
    //get employee photo data
    Employeeservice.prototype.getUserPhoto = function () {
        return this._http
            .get(this.BASE_URL + this.GetEmployeePhoto, { responseType: 'json' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
    };
    //get employee photo data page 2
    Employeeservice.prototype.getUserPhotoPage = function () {
        return this._http
            .get(this.BASE_URL + this.GetEmployeePhoto + '?page=2', { responseType: 'json' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
    };
    Employeeservice = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], Employeeservice);
    return Employeeservice;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-4\">\n  <div class=\"row\">\n    <div class=\"bg-almond col-lg  mr-lg-4\">\n        \n\n        <div><strong>ENTER EMAIL TO GET ALERTS</strong></div>\n\n        <div class=\"row\">\n          <div class=\"col-md-8\">\n              <input type=\"text\" class=\"form-control\">\n          </div>\n          <div class=\"col-md-3 subMargin\">\n              <button class=\"btn btn-primary\">SUBSCRIBE</button>\n          </div>\n        </div>\n        \n    </div>\n\n    \n\n    <div class=\"bg-almond col-lg subMargin\">\n        \n      <div><strong>STAY CONNECTED</strong></div>\n\n        <div class=\"text-primary\">\n          1-888-200-1234 | contact@contact.com\n        </div> \n    </div>\n  </div>\n</div>\n\n<div class=\"container bg-dark mt-4\">\n\n  <div class=\"text-white text-center\" ><button class=\"btn btn-link\" (click)= \"topFunction()\">BACK TO TOP</button></div>\n  <hr style=\"border-top: 1px solid white;\">\n  <div  class=\"text-white text-center pb-2\">\n    EMPLOYEE DEMO :\n    <select>\n      <option>ENGLISH</option>\n      <option>FRENCH</option>\n    </select>\n  </div>\n\n</div>\n\n<div class=\"container bg-dark mt-4\">\n    <div class=\"row footer\">\n      <div class=\"col\">\n        <div class=\"text-white\">ABOUT</div>\n        <div class=\"text-white\">CONTACT</div>\n        <div class=\"text-white\">CAREERS</div>\n        <div class=\"text-white\">CUSTOMER SERVICE</div>\n      </div>\n      <div class=\"col\">\n          <div class=\"text-white\">PRIVACY</div>\n          <div class=\"text-white\">RETURNS</div>\n          <div class=\"text-white\">REWARDS</div>\n          <div class=\"text-white\">SITE GUIDE</div>\n      </div>\n      <div class=\"col\">\n          <div class=\"text-white\">GIFT CERTIFICATES</div>\n          <div class=\"text-white\">COUPONS</div>\n          <div class=\"text-white\">SALE</div>\n          <div class=\"text-white\">RETURNS</div>\n      </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  bottom: 0;\n  margin-top: 40px; }\n\n@media only screen and (max-width: 800px) {\n  .subMargin {\n    margin-top: 1rem; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0M6XFxVc2Vyc1xcdGhhcnVuclxcc291cmNlXFx0aGFydW5yZXBvc1xcZW1wbG95ZWVkZW1vL3NyY1xcYXBwXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQVM7RUFDVCxnQkFBZ0IsRUFBQTs7QUFJcEI7RUFDSTtJQUNJLGdCQUFnQixFQUFBLEVBQ2pCIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIFxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAuc3ViTWFyZ2luIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    // When the user clicks on the button, scroll to the top of the document
    FooterComponent.prototype.topFunction = function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/resume/resume.component.html":
/*!**********************************************!*\
  !*** ./src/app/resume/resume.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  resume works!\n</p>\n"

/***/ }),

/***/ "./src/app/resume/resume.component.scss":
/*!**********************************************!*\
  !*** ./src/app/resume/resume.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VtZS9yZXN1bWUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/resume/resume.component.ts":
/*!********************************************!*\
  !*** ./src/app/resume/resume.component.ts ***!
  \********************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ResumeComponent = /** @class */ (function () {
    function ResumeComponent() {
    }
    ResumeComponent.prototype.ngOnInit = function () {
    };
    ResumeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-resume',
            template: __webpack_require__(/*! ./resume.component.html */ "./src/app/resume/resume.component.html"),
            styles: [__webpack_require__(/*! ./resume.component.scss */ "./src/app/resume/resume.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ResumeComponent);
    return ResumeComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\tharunr\source\tharunrepos\employeedemo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map