(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+GOj":
/*!****************************!*\
  !*** ./src/app/feature.ts ***!
  \****************************/
/*! exports provided: Feature */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Feature", function() { return Feature; });
class Feature {
    constructor() {
    }
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\HP\Documents\GitHub\twylis-angular\twylis-angular\src\main.ts */"zUnb");


/***/ }),

/***/ "0Vv3":
/*!********************************************************!*\
  !*** ./src/app/sample-page2/sample-page2.component.ts ***!
  \********************************************************/
/*! exports provided: SamplePage2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SamplePage2Component", function() { return SamplePage2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SamplePage2Component {
    constructor() { }
    ngOnInit() {
    }
}
SamplePage2Component.ɵfac = function SamplePage2Component_Factory(t) { return new (t || SamplePage2Component)(); };
SamplePage2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SamplePage2Component, selectors: [["app-sample-page2"]], decls: 2, vars: 0, consts: [[2, "color", "white"]], template: function SamplePage2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sample page 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYW1wbGUtcGFnZTIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "3nXK":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ "fECr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/footer.component */ "fp1T");




class UserComponent {
    constructor() { }
    ngOnInit() {
    }
}
UserComponent.ɵfac = function UserComponent_Factory(t) { return new (t || UserComponent)(); };
UserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserComponent, selectors: [["app-user"]], decls: 17, vars: 0, consts: [[1, "container"], [1, "row"], [1, "col", "s8", "offset-s2"], [1, "card", "grey", "lighten-2"], [1, "card-tabs"], [1, "tabs", "tabs-fixed-width", "tabs-transparent"], [1, "tab"], ["routerLink", "/login", "routerLinkActive", "active"], ["routerLink", "/signup", "routerLinkActive", "active"], [1, "card-content", "white"]], template: function UserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-footer");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["@import url(\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css\");\r\n@import url(\"https://fonts.googleapis.com/icon?family=Material+Icons\");\r\n.card-content[_ngcontent-%COMP%]   white[_ngcontent-%COMP%]{\r\n    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);\r\n    color: #000;\r\n    background: rgba(0, 0, 0, 0.5);\r\n}\r\n.card-content[_ngcontent-%COMP%]::before{\r\n    content: '';\r\n    position: relative;\r\n    top: -20px;\r\n    left: -20px;\r\n    bottom: -20px;\r\n    right: -20px;\r\n    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.75);\r\n    filter: blur(1px);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrRkFBK0Y7QUFDL0Ysc0VBQXNFO0FBQ3RFO0lBQ0kseUNBQXlDO0lBQ3pDLFdBQVc7SUFDWCw4QkFBOEI7QUFDbEM7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxhQUFhO0lBQ2IsWUFBWTtJQUNaLDBDQUEwQztJQUMxQyxpQkFBaUI7QUFDckIiLCJmaWxlIjoidXNlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tYXRlcmlhbGl6ZS8xLjAuMC9jc3MvbWF0ZXJpYWxpemUubWluLmNzc1wiKTtcclxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2ljb24/ZmFtaWx5PU1hdGVyaWFsK0ljb25zXCIpO1xyXG4uY2FyZC1jb250ZW50IHdoaXRle1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG5cclxuLmNhcmQtY29udGVudDo6YmVmb3Jle1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC0yMHB4O1xyXG4gICAgbGVmdDogLTIwcHg7XHJcbiAgICBib3R0b206IC0yMHB4O1xyXG4gICAgcmlnaHQ6IC0yMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gICAgZmlsdGVyOiBibHVyKDFweCk7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ "fECr");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footer.component */ "fp1T");



class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 214, vars: 0, consts: [["src", "./assets/twylis-header-1.png", "alt", "header", 1, "headerImage"], ["id", "heading1", 1, "box"], [1, "box"], ["src", "./assets/images/keyword.png", "alt", "Keyword", 2, "float", "right", "width", "500px", "height", "300px"], ["src", "./assets/images/Comments.jpeg", "alt", "Keyword", 2, "float", "right", "width", "500px", "height", "300px"], ["src", "./assets/images/GeneratingReports1.jpg", "alt", "Reports", 2, "float", "right", "width", "500px", "height", "300px"], ["id", "heading2", 1, "box3"], [1, "box4"], [1, "title"], ["alt", "Image1", "src", "./assets/images/hashtagsOrMention.jpg", "width", "360", "height", "245"], [1, "content"], [1, "box5"], ["alt", "Image1", "src", "./assets/images/Report.jpg", "width", "360", "height", "245"], [1, "box2"], ["alt", "Image1", "src", "./assets/images/EaseOfUse.png", "width", "360", "height", "245"], ["src", "./assets/images/Customer.png", "alt", "Customer2", 2, "float", "right", "width", "500px", "height", "300px"], ["src", "./assets/images/Hashtag.jpg", "alt", "HashtagTracking", 2, "float", "right", "width", "500px", "height", "300px"], ["src", "./assets/images/Alert.png", "alt", "Alert", 2, "float", "right", "width", "500px", "height", "300px"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Welcome to Twylis !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Keyword search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Search keywords and see the analytics around it.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Analyse customer sentiment based on keywords you have selected.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " All you've gotta do is login to view them on your dashboard.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Filter mentions by positive, negative and neutral");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Filter mentions by positive and negative to help prioritize");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " issues and work on the good.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Mining products that have been commented by customers.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Identify sentence by sentence and decide positive,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " negative or neutral.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Summarize the result.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Reports of marketing insights");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "If certain products become less popular day by day");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " giving opinions about what kind of negative things it has.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " How to get a benefit from direct positive comments.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Giving reports of marketing insights and metrics of tweets.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Tracking trends and trending topics over time and giving a report of it.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Save your time using our automated reports.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Why Twylis?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Both Hashtag & Mention Tracking");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " Most Twitter sentiment analysis apps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " and websites have a \u00A0very basic system,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " where a user can type in a keyword and");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " get the polarities based on that.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " Also, while there were apps that had");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " hashtag tracking or mention tracking,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " very few had all of them in one");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " application. Twylis would have all");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " of the mentioned features.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Generate PDF Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, " You can generate our customizable and");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, " automated reports. You can create PDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " reports with the most important data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " about your hashtags. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Ease Of Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, " A customer tweets about telecommunication services. The tweet is then analysed by Twylis and business insights are generated. Telecommunications brands then view these business insights. After this point, it is up to the brands to take action. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Analysis of customer sentiment based on pre-determined keywords");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "The business/company can give some keywords based on");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, " their business to monitor.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, " Get to know your customers.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, " Learn what people like or dislike about your company.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, " Improve customer satisfaction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, " Keep an eye on the competition to monitor your competitors\u2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, " social media the same way you monitor your own. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Hashtag tracking");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Track hashtags on Twitter.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, " Manage hashtag campaign.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, " Track and analyze contests and campaigns based on hashtags.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, " Understand how a company\u2019s brand image evolves over time.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, " Detect the company or brand by hashtags/ mentioning.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Automatically categorize mentions by urgency ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "If something negative goes viral about the brand/ product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, " giving an emergency notification with all the details of that.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, " Detect the positive viral news and send notification about which");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, " product and what type of news going viral.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, " Follow up on positive comments from your brand ambassadors & find");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, " dissatisfied customers' opinions before your boss or client will");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, " find them first.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](203, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, " Realtime updates - Get instant alerts for negative mentions and");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, " engage key conversations before it\u2019s too late.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](208, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, " Trends analysis - See positive and negative mentions volume and");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](211, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, " reach to see how your reputation changes over time. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](213, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]], styles: ["section[_ngcontent-%COMP%]{\r\n  position: center;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.blur[_ngcontent-%COMP%] {\r\nwidth: 100%;\r\nheight: 100%;\r\n}\r\n\r\nsection[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  max-width: 80%;\r\n  max-height: 100%;\r\n  margin: 2% 10%;\r\n  padding: 50px;\r\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);\r\n  border-radius: 15px;\r\n  color: #FFF;\r\n  -webkit-backdrop-filter: blur(7px);\r\n          backdrop-filter: blur(7px);\r\n  background-color: rgba(255, 255, 255, 0.1);\r\n  background-size: 100%;\r\n  font-size: 18px;\r\n  z-index: 2;\r\n}\r\n\r\n.box2[_ngcontent-%COMP%]{\r\ndisplay: flex;\r\n}\r\n\r\n.box2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\nposition: relative;\r\npadding: 25px 30px;\r\ntext-decoration: none;\r\ncolor: rgb(253, 253, 253);\r\nfont-size: 0.9em;\r\nfont-weight: bold;\r\nfont-family: sans-serif;\r\nletter-spacing: 2.5px;\r\noverflow: hidden;\r\nbackground: rgba(255,255,255,0.18);\r\nbox-shadow: 0 5px 5px rgba(0,0,0,0.2);\r\n}\r\n\r\n.box2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before{\r\ncontent: '';\r\nposition: absolute;\r\ntop: 0;\r\nleft: 0;\r\nwidth: 50%;\r\nheight: 100%;\r\nbackground: rgba(255,255,255,0.1);\r\n}\r\n\r\n.box2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after{\r\ncontent: '';\r\nposition: absolute;\r\ntop: 0;\r\nleft: -100%;\r\nwidth: 100%;\r\nheight: 100%;\r\nbackground: linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent);\r\ntransition: 0.5s;\r\n\r\n}\r\n\r\n.box2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:after{\r\nleft: 100%;\r\n}\r\n\r\n.box2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\nposition: absolute;\r\ndisplay: block;\r\ntransition: 0.5s ease;\r\n}\r\n\r\n.box2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1){\r\ntop: 0;\r\nleft: 0;\r\nwidth: 0;\r\nheight: 1px;\r\nbackground: #fff;\r\n}\r\n\r\n.box2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:nth-child(1){\r\nwidth: 100%;\r\ntransform: translateX(100%);\r\n\r\n}\r\n\r\n.box2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3){\r\nbottom: 0;\r\n  right: 0;\r\n  width: 0;\r\n  height: 1px;\r\n  background: #fff;\r\n}\r\n\r\n.box2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:nth-child(3){\r\nwidth: 100%;\r\ntransform: translateX(-100%);\r\n}\r\n\r\n.box2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2){\r\ntop: 0;\r\nleft: 0;\r\nwidth: 1px;\r\nheight: 0;\r\nbackground: #fff;\r\n}\r\n\r\n.box2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:nth-child(2){\r\nheight: 100%;\r\ntransform: translateY(100%);\r\n}\r\n\r\n.box2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(4){\r\nbottom: 0;\r\nright: 0;\r\nwidth: 1px;\r\nheight: 0;\r\nbackground: #fff;\r\n}\r\n\r\n.box2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:nth-child(4){\r\nheight: 100%;\r\ntransform: translateY(-100%);\r\n}\r\n\r\n.box4[_ngcontent-%COMP%]{\r\ndisplay: flex;\r\nmargin-right: 30px;\r\n}\r\n\r\n.box4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\nposition: relative;\r\npadding: 25px 30px;\r\ntext-decoration: none;\r\ncolor: rgb(253, 253, 253);\r\nfont-size: 0.9em;\r\nfont-weight: bold;\r\nfont-family: sans-serif;\r\nletter-spacing: 2.5px;\r\noverflow: hidden;\r\nbackground: rgba(255,255,255,0.18);\r\nbox-shadow: 0 5px 5px rgba(0,0,0,0.2);\r\n}\r\n\r\n.box4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before{\r\ncontent: '';\r\nposition: absolute;\r\ntop: 0;\r\nleft: 0;\r\nwidth: 50%;\r\nheight: 100%;\r\nbackground: rgba(255,255,255,0.1);\r\n}\r\n\r\n.box4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after{\r\ncontent: '';\r\nposition: absolute;\r\ntop: 0;\r\nleft: -100%;\r\nwidth: 100%;\r\nheight: 100%;\r\nbackground: linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent);\r\ntransition: 0.5s;\r\n\r\n}\r\n\r\n.box4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:after{\r\nleft: 100%;\r\n}\r\n\r\n.box4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\nposition: absolute;\r\ndisplay: block;\r\ntransition: 0.5s ease;\r\n}\r\n\r\n.box4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1){\r\ntop: 0;\r\nleft: 0;\r\nwidth: 0;\r\nheight: 1px;\r\nbackground: #fff;\r\n}\r\n\r\n.box4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:nth-child(1){\r\nwidth: 100%;\r\ntransform: translateX(100%);\r\n\r\n}\r\n\r\n.box4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3){\r\nbottom: 0;\r\n  right: 0;\r\n  width: 0;\r\n  height: 1px;\r\n  background: #fff;\r\n}\r\n\r\n.box4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:nth-child(3){\r\nwidth: 100%;\r\ntransform: translateX(-100%);\r\n}\r\n\r\n.box4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2){\r\ntop: 0;\r\nleft: 0;\r\nwidth: 1px;\r\nheight: 0;\r\nbackground: #fff;\r\n}\r\n\r\n.box4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:nth-child(2){\r\nheight: 100%;\r\ntransform: translateY(100%);\r\n}\r\n\r\n.box4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(4){\r\nbottom: 0;\r\nright: 0;\r\nwidth: 1px;\r\nheight: 0;\r\nbackground: #fff;\r\n}\r\n\r\n.box4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:nth-child(4){\r\nheight: 100%;\r\ntransform: translateY(-100%);\r\n}\r\n\r\n.box5[_ngcontent-%COMP%]{\r\ndisplay: flex;\r\nmargin-right: 30px;\r\n}\r\n\r\n.box5[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\nposition: relative;\r\npadding: 25px 30px;\r\ntext-decoration: none;\r\ncolor: rgb(253, 253, 253);\r\nfont-size: 0.9em;\r\nfont-weight: bold;\r\nfont-family: sans-serif;\r\nletter-spacing: 2.5px;\r\noverflow: hidden;\r\nbackground: rgba(255,255,255,0.18);\r\nbox-shadow: 0 5px 5px rgba(0,0,0,0.2);\r\n}\r\n\r\n.box5[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before{\r\ncontent: '';\r\nposition: absolute;\r\ntop: 0;\r\nleft: 0;\r\nwidth: 50%;\r\nheight: 100%;\r\nbackground: rgba(255,255,255,0.1);\r\n}\r\n\r\n.box5[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after{\r\ncontent: '';\r\nposition: absolute;\r\ntop: 0;\r\nleft: -100%;\r\nwidth: 100%;\r\nheight: 100%;\r\nbackground: linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent);\r\ntransition: 0.5s;\r\n\r\n}\r\n\r\n.box5[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:after{\r\nleft: 100%;\r\n}\r\n\r\n.box5[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\nposition: absolute;\r\ndisplay: block;\r\ntransition: 0.5s ease;\r\n}\r\n\r\n.box5[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1){\r\ntop: 0;\r\nleft: 0;\r\nwidth: 0;\r\nheight: 1px;\r\nbackground: #fff;\r\n}\r\n\r\n.box5[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:nth-child(1){\r\nwidth: 100%;\r\ntransform: translateX(100%);\r\n\r\n}\r\n\r\n.box5[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3){\r\nbottom: 0;\r\n  right: 0;\r\n  width: 0;\r\n  height: 1px;\r\n  background: #fff;\r\n}\r\n\r\n.box5[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:nth-child(3){\r\nwidth: 100%;\r\ntransform: translateX(-100%);\r\n}\r\n\r\n.box5[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2){\r\ntop: 0;\r\nleft: 0;\r\nwidth: 1px;\r\nheight: 0;\r\nbackground: #fff;\r\n}\r\n\r\n.box5[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:nth-child(2){\r\nheight: 100%;\r\ntransform: translateY(100%);\r\n}\r\n\r\n.box5[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(4){\r\nbottom: 0;\r\nright: 0;\r\nwidth: 1px;\r\nheight: 0;\r\nbackground: #fff;\r\n}\r\n\r\n.box5[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:nth-child(4){\r\nheight: 100%;\r\ntransform: translateY(-100%);\r\n}\r\n\r\n.box3[_ngcontent-%COMP%]{\r\ndisplay: flex;\r\n}\r\n\r\ndiv.title[_ngcontent-%COMP%] {\r\nfont-family: Arial, Helvetica, sans-serif;\r\ntext-align: center;\r\nfont-size: 20px;\r\n}\r\n\r\ndiv.content[_ngcontent-%COMP%] {\r\ntext-align: justify;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\ntext-align: center;\r\nfont-family: 'Courier New', Courier, monospace;\r\nfont-size: 50px;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\ntext-align: center;\r\nfont-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\nfont-size: 40px;\r\ncolor: rgb(142, 180, 236);\r\n}\r\n\r\nh3[_ngcontent-%COMP%] {\r\ntext-align: left;\r\nfont-family: 'Times New Roman', Times, serif;\r\nfont-size: 30px;\r\ncolor: rgb(102, 157, 240);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0FBQ0EsV0FBVztBQUNYLFlBQVk7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxhQUFhO0VBQ2IseUNBQXlDO0VBQ3pDLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsa0NBQTBCO1VBQTFCLDBCQUEwQjtFQUMxQiwwQ0FBMEM7RUFDMUMscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixVQUFVO0FBQ1o7O0FBR0E7QUFDQSxhQUFhO0FBQ2I7O0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCLHFCQUFxQjtBQUNyQix5QkFBeUI7QUFDekIsZ0JBQWdCO0FBQ2hCLGlCQUFpQjtBQUNqQix1QkFBdUI7QUFDdkIscUJBQXFCO0FBQ3JCLGdCQUFnQjtBQUNoQixrQ0FBa0M7QUFDbEMscUNBQXFDO0FBQ3JDOztBQUNBO0FBQ0EsV0FBVztBQUNYLGtCQUFrQjtBQUNsQixNQUFNO0FBQ04sT0FBTztBQUNQLFVBQVU7QUFDVixZQUFZO0FBQ1osaUNBQWlDO0FBQ2pDOztBQUNBO0FBQ0EsV0FBVztBQUNYLGtCQUFrQjtBQUNsQixNQUFNO0FBQ04sV0FBVztBQUNYLFdBQVc7QUFDWCxZQUFZO0FBQ1osZ0ZBQWdGO0FBQ2hGLGdCQUFnQjtBQUNoQiwwQkFBMEI7QUFDMUI7O0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7O0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsY0FBYztBQUNkLHFCQUFxQjtBQUNyQjs7QUFDQTtBQUNBLE1BQU07QUFDTixPQUFPO0FBQ1AsUUFBUTtBQUNSLFdBQVc7QUFDWCxnQkFBZ0I7QUFDaEI7O0FBQ0E7QUFDQSxXQUFXO0FBQ1gsMkJBQTJCOztBQUUzQjs7QUFDQTtBQUNBLFNBQVM7RUFDUCxRQUFRO0VBQ1IsUUFBUTtFQUNSLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBQ0E7QUFDQSxXQUFXO0FBQ1gsNEJBQTRCO0FBQzVCOztBQUNBO0FBQ0EsTUFBTTtBQUNOLE9BQU87QUFDUCxVQUFVO0FBQ1YsU0FBUztBQUNULGdCQUFnQjtBQUNoQjs7QUFDQTtBQUNBLFlBQVk7QUFDWiwyQkFBMkI7QUFDM0I7O0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUUFBUTtBQUNSLFVBQVU7QUFDVixTQUFTO0FBQ1QsZ0JBQWdCO0FBQ2hCOztBQUNBO0FBQ0EsWUFBWTtBQUNaLDRCQUE0QjtBQUM1Qjs7QUFHQTtBQUNBLGFBQWE7QUFDYixrQkFBa0I7QUFDbEI7O0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCLHFCQUFxQjtBQUNyQix5QkFBeUI7QUFDekIsZ0JBQWdCO0FBQ2hCLGlCQUFpQjtBQUNqQix1QkFBdUI7QUFDdkIscUJBQXFCO0FBQ3JCLGdCQUFnQjtBQUNoQixrQ0FBa0M7QUFDbEMscUNBQXFDO0FBQ3JDOztBQUNBO0FBQ0EsV0FBVztBQUNYLGtCQUFrQjtBQUNsQixNQUFNO0FBQ04sT0FBTztBQUNQLFVBQVU7QUFDVixZQUFZO0FBQ1osaUNBQWlDO0FBQ2pDOztBQUNBO0FBQ0EsV0FBVztBQUNYLGtCQUFrQjtBQUNsQixNQUFNO0FBQ04sV0FBVztBQUNYLFdBQVc7QUFDWCxZQUFZO0FBQ1osZ0ZBQWdGO0FBQ2hGLGdCQUFnQjtBQUNoQiwwQkFBMEI7QUFDMUI7O0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7O0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsY0FBYztBQUNkLHFCQUFxQjtBQUNyQjs7QUFDQTtBQUNBLE1BQU07QUFDTixPQUFPO0FBQ1AsUUFBUTtBQUNSLFdBQVc7QUFDWCxnQkFBZ0I7QUFDaEI7O0FBQ0E7QUFDQSxXQUFXO0FBQ1gsMkJBQTJCOztBQUUzQjs7QUFDQTtBQUNBLFNBQVM7RUFDUCxRQUFRO0VBQ1IsUUFBUTtFQUNSLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBQ0E7QUFDQSxXQUFXO0FBQ1gsNEJBQTRCO0FBQzVCOztBQUNBO0FBQ0EsTUFBTTtBQUNOLE9BQU87QUFDUCxVQUFVO0FBQ1YsU0FBUztBQUNULGdCQUFnQjtBQUNoQjs7QUFDQTtBQUNBLFlBQVk7QUFDWiwyQkFBMkI7QUFDM0I7O0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUUFBUTtBQUNSLFVBQVU7QUFDVixTQUFTO0FBQ1QsZ0JBQWdCO0FBQ2hCOztBQUNBO0FBQ0EsWUFBWTtBQUNaLDRCQUE0QjtBQUM1Qjs7QUFHQTtBQUNBLGFBQWE7QUFDYixrQkFBa0I7QUFDbEI7O0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCLHFCQUFxQjtBQUNyQix5QkFBeUI7QUFDekIsZ0JBQWdCO0FBQ2hCLGlCQUFpQjtBQUNqQix1QkFBdUI7QUFDdkIscUJBQXFCO0FBQ3JCLGdCQUFnQjtBQUNoQixrQ0FBa0M7QUFDbEMscUNBQXFDO0FBQ3JDOztBQUNBO0FBQ0EsV0FBVztBQUNYLGtCQUFrQjtBQUNsQixNQUFNO0FBQ04sT0FBTztBQUNQLFVBQVU7QUFDVixZQUFZO0FBQ1osaUNBQWlDO0FBQ2pDOztBQUNBO0FBQ0EsV0FBVztBQUNYLGtCQUFrQjtBQUNsQixNQUFNO0FBQ04sV0FBVztBQUNYLFdBQVc7QUFDWCxZQUFZO0FBQ1osZ0ZBQWdGO0FBQ2hGLGdCQUFnQjtBQUNoQiwwQkFBMEI7QUFDMUI7O0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7O0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsY0FBYztBQUNkLHFCQUFxQjtBQUNyQjs7QUFDQTtBQUNBLE1BQU07QUFDTixPQUFPO0FBQ1AsUUFBUTtBQUNSLFdBQVc7QUFDWCxnQkFBZ0I7QUFDaEI7O0FBQ0E7QUFDQSxXQUFXO0FBQ1gsMkJBQTJCOztBQUUzQjs7QUFDQTtBQUNBLFNBQVM7RUFDUCxRQUFRO0VBQ1IsUUFBUTtFQUNSLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBQ0E7QUFDQSxXQUFXO0FBQ1gsNEJBQTRCO0FBQzVCOztBQUNBO0FBQ0EsTUFBTTtBQUNOLE9BQU87QUFDUCxVQUFVO0FBQ1YsU0FBUztBQUNULGdCQUFnQjtBQUNoQjs7QUFDQTtBQUNBLFlBQVk7QUFDWiwyQkFBMkI7QUFDM0I7O0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUUFBUTtBQUNSLFVBQVU7QUFDVixTQUFTO0FBQ1QsZ0JBQWdCO0FBQ2hCOztBQUNBO0FBQ0EsWUFBWTtBQUNaLDRCQUE0QjtBQUM1Qjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLHlDQUF5QztBQUN6QyxrQkFBa0I7QUFDbEIsZUFBZTtBQUNmOztBQUVBO0FBQ0EsbUJBQW1CO0FBQ25COztBQUVBO0FBQ0Esa0JBQWtCO0FBQ2xCLDhDQUE4QztBQUM5QyxlQUFlO0FBQ2Y7O0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsc0VBQXNFO0FBQ3RFLGVBQWU7QUFDZix5QkFBeUI7QUFDekI7O0FBRUE7QUFDQSxnQkFBZ0I7QUFDaEIsNENBQTRDO0FBQzVDLGVBQWU7QUFDZix5QkFBeUI7QUFDekIiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbntcclxuICBwb3NpdGlvbjogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ibHVyIHtcclxud2lkdGg6IDEwMCU7XHJcbmhlaWdodDogMTAwJTtcclxufVxyXG5cclxuc2VjdGlvbiAuYm94e1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXgtd2lkdGg6IDgwJTtcclxuICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbjogMiUgMTAlO1xyXG4gIHBhZGRpbmc6IDUwcHg7XHJcbiAgYm94LXNoYWRvdzogMCA1cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBjb2xvcjogI0ZGRjtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoN3B4KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG5cclxuLmJveDJ7XHJcbmRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLmJveDIgYXtcclxucG9zaXRpb246IHJlbGF0aXZlO1xyXG5wYWRkaW5nOiAyNXB4IDMwcHg7XHJcbnRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuY29sb3I6IHJnYigyNTMsIDI1MywgMjUzKTtcclxuZm9udC1zaXplOiAwLjllbTtcclxuZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbmZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG5sZXR0ZXItc3BhY2luZzogMi41cHg7XHJcbm92ZXJmbG93OiBoaWRkZW47XHJcbmJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4xOCk7XHJcbmJveC1zaGFkb3c6IDAgNXB4IDVweCByZ2JhKDAsMCwwLDAuMik7XHJcbn1cclxuLmJveDIgYTpiZWZvcmV7XHJcbmNvbnRlbnQ6ICcnO1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbnRvcDogMDtcclxubGVmdDogMDtcclxud2lkdGg6IDUwJTtcclxuaGVpZ2h0OiAxMDAlO1xyXG5iYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7XHJcbn1cclxuLmJveDIgYTphZnRlcntcclxuY29udGVudDogJyc7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxudG9wOiAwO1xyXG5sZWZ0OiAtMTAwJTtcclxud2lkdGg6IDEwMCU7XHJcbmhlaWdodDogMTAwJTtcclxuYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLHRyYW5zcGFyZW50LHJnYmEoMjU1LDI1NSwyNTUsMC40KSx0cmFuc3BhcmVudCk7XHJcbnRyYW5zaXRpb246IDAuNXM7XHJcbi8qdHJhbnNpdGlvbi1kZWxheTogMC41czsqL1xyXG59XHJcbi5ib3gyIGE6aG92ZXI6YWZ0ZXJ7XHJcbmxlZnQ6IDEwMCU7XHJcbn1cclxuLmJveDIgYSBzcGFue1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbmRpc3BsYXk6IGJsb2NrO1xyXG50cmFuc2l0aW9uOiAwLjVzIGVhc2U7XHJcbn1cclxuLmJveDIgYSBzcGFuOm50aC1jaGlsZCgxKXtcclxudG9wOiAwO1xyXG5sZWZ0OiAwO1xyXG53aWR0aDogMDtcclxuaGVpZ2h0OiAxcHg7XHJcbmJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuLmJveDIgYTpob3ZlciBzcGFuOm50aC1jaGlsZCgxKXtcclxud2lkdGg6IDEwMCU7XHJcbnRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxuXHJcbn1cclxuLmJveDIgYSBzcGFuOm50aC1jaGlsZCgzKXtcclxuYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuLmJveDIgYTpob3ZlciBzcGFuOm50aC1jaGlsZCgzKXtcclxud2lkdGg6IDEwMCU7XHJcbnRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbn1cclxuLmJveDIgYSBzcGFuOm50aC1jaGlsZCgyKXtcclxudG9wOiAwO1xyXG5sZWZ0OiAwO1xyXG53aWR0aDogMXB4O1xyXG5oZWlnaHQ6IDA7XHJcbmJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuLmJveDIgYTpob3ZlciBzcGFuOm50aC1jaGlsZCgyKXtcclxuaGVpZ2h0OiAxMDAlO1xyXG50cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XHJcbn1cclxuLmJveDIgYSBzcGFuOm50aC1jaGlsZCg0KXtcclxuYm90dG9tOiAwO1xyXG5yaWdodDogMDtcclxud2lkdGg6IDFweDtcclxuaGVpZ2h0OiAwO1xyXG5iYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcbi5ib3gyIGE6aG92ZXIgc3BhbjpudGgtY2hpbGQoNCl7XHJcbmhlaWdodDogMTAwJTtcclxudHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcclxufVxyXG5cclxuXHJcbi5ib3g0e1xyXG5kaXNwbGF5OiBmbGV4O1xyXG5tYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbn1cclxuLmJveDQgYXtcclxucG9zaXRpb246IHJlbGF0aXZlO1xyXG5wYWRkaW5nOiAyNXB4IDMwcHg7XHJcbnRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuY29sb3I6IHJnYigyNTMsIDI1MywgMjUzKTtcclxuZm9udC1zaXplOiAwLjllbTtcclxuZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbmZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG5sZXR0ZXItc3BhY2luZzogMi41cHg7XHJcbm92ZXJmbG93OiBoaWRkZW47XHJcbmJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4xOCk7XHJcbmJveC1zaGFkb3c6IDAgNXB4IDVweCByZ2JhKDAsMCwwLDAuMik7XHJcbn1cclxuLmJveDQgYTpiZWZvcmV7XHJcbmNvbnRlbnQ6ICcnO1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbnRvcDogMDtcclxubGVmdDogMDtcclxud2lkdGg6IDUwJTtcclxuaGVpZ2h0OiAxMDAlO1xyXG5iYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7XHJcbn1cclxuLmJveDQgYTphZnRlcntcclxuY29udGVudDogJyc7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxudG9wOiAwO1xyXG5sZWZ0OiAtMTAwJTtcclxud2lkdGg6IDEwMCU7XHJcbmhlaWdodDogMTAwJTtcclxuYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLHRyYW5zcGFyZW50LHJnYmEoMjU1LDI1NSwyNTUsMC40KSx0cmFuc3BhcmVudCk7XHJcbnRyYW5zaXRpb246IDAuNXM7XHJcbi8qdHJhbnNpdGlvbi1kZWxheTogMC41czsqL1xyXG59XHJcbi5ib3g0IGE6aG92ZXI6YWZ0ZXJ7XHJcbmxlZnQ6IDEwMCU7XHJcbn1cclxuLmJveDQgYSBzcGFue1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbmRpc3BsYXk6IGJsb2NrO1xyXG50cmFuc2l0aW9uOiAwLjVzIGVhc2U7XHJcbn1cclxuLmJveDQgYSBzcGFuOm50aC1jaGlsZCgxKXtcclxudG9wOiAwO1xyXG5sZWZ0OiAwO1xyXG53aWR0aDogMDtcclxuaGVpZ2h0OiAxcHg7XHJcbmJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuLmJveDQgYTpob3ZlciBzcGFuOm50aC1jaGlsZCgxKXtcclxud2lkdGg6IDEwMCU7XHJcbnRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxuXHJcbn1cclxuLmJveDQgYSBzcGFuOm50aC1jaGlsZCgzKXtcclxuYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuLmJveDQgYTpob3ZlciBzcGFuOm50aC1jaGlsZCgzKXtcclxud2lkdGg6IDEwMCU7XHJcbnRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbn1cclxuLmJveDQgYSBzcGFuOm50aC1jaGlsZCgyKXtcclxudG9wOiAwO1xyXG5sZWZ0OiAwO1xyXG53aWR0aDogMXB4O1xyXG5oZWlnaHQ6IDA7XHJcbmJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuLmJveDQgYTpob3ZlciBzcGFuOm50aC1jaGlsZCgyKXtcclxuaGVpZ2h0OiAxMDAlO1xyXG50cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XHJcbn1cclxuLmJveDQgYSBzcGFuOm50aC1jaGlsZCg0KXtcclxuYm90dG9tOiAwO1xyXG5yaWdodDogMDtcclxud2lkdGg6IDFweDtcclxuaGVpZ2h0OiAwO1xyXG5iYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcbi5ib3g0IGE6aG92ZXIgc3BhbjpudGgtY2hpbGQoNCl7XHJcbmhlaWdodDogMTAwJTtcclxudHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcclxufVxyXG5cclxuXHJcbi5ib3g1e1xyXG5kaXNwbGF5OiBmbGV4O1xyXG5tYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbn1cclxuLmJveDUgYXtcclxucG9zaXRpb246IHJlbGF0aXZlO1xyXG5wYWRkaW5nOiAyNXB4IDMwcHg7XHJcbnRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuY29sb3I6IHJnYigyNTMsIDI1MywgMjUzKTtcclxuZm9udC1zaXplOiAwLjllbTtcclxuZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbmZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG5sZXR0ZXItc3BhY2luZzogMi41cHg7XHJcbm92ZXJmbG93OiBoaWRkZW47XHJcbmJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4xOCk7XHJcbmJveC1zaGFkb3c6IDAgNXB4IDVweCByZ2JhKDAsMCwwLDAuMik7XHJcbn1cclxuLmJveDUgYTpiZWZvcmV7XHJcbmNvbnRlbnQ6ICcnO1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbnRvcDogMDtcclxubGVmdDogMDtcclxud2lkdGg6IDUwJTtcclxuaGVpZ2h0OiAxMDAlO1xyXG5iYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7XHJcbn1cclxuLmJveDUgYTphZnRlcntcclxuY29udGVudDogJyc7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxudG9wOiAwO1xyXG5sZWZ0OiAtMTAwJTtcclxud2lkdGg6IDEwMCU7XHJcbmhlaWdodDogMTAwJTtcclxuYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLHRyYW5zcGFyZW50LHJnYmEoMjU1LDI1NSwyNTUsMC40KSx0cmFuc3BhcmVudCk7XHJcbnRyYW5zaXRpb246IDAuNXM7XHJcbi8qdHJhbnNpdGlvbi1kZWxheTogMC41czsqL1xyXG59XHJcbi5ib3g1IGE6aG92ZXI6YWZ0ZXJ7XHJcbmxlZnQ6IDEwMCU7XHJcbn1cclxuLmJveDUgYSBzcGFue1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbmRpc3BsYXk6IGJsb2NrO1xyXG50cmFuc2l0aW9uOiAwLjVzIGVhc2U7XHJcbn1cclxuLmJveDUgYSBzcGFuOm50aC1jaGlsZCgxKXtcclxudG9wOiAwO1xyXG5sZWZ0OiAwO1xyXG53aWR0aDogMDtcclxuaGVpZ2h0OiAxcHg7XHJcbmJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuLmJveDUgYTpob3ZlciBzcGFuOm50aC1jaGlsZCgxKXtcclxud2lkdGg6IDEwMCU7XHJcbnRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxuXHJcbn1cclxuLmJveDUgYSBzcGFuOm50aC1jaGlsZCgzKXtcclxuYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuLmJveDUgYTpob3ZlciBzcGFuOm50aC1jaGlsZCgzKXtcclxud2lkdGg6IDEwMCU7XHJcbnRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbn1cclxuLmJveDUgYSBzcGFuOm50aC1jaGlsZCgyKXtcclxudG9wOiAwO1xyXG5sZWZ0OiAwO1xyXG53aWR0aDogMXB4O1xyXG5oZWlnaHQ6IDA7XHJcbmJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuLmJveDUgYTpob3ZlciBzcGFuOm50aC1jaGlsZCgyKXtcclxuaGVpZ2h0OiAxMDAlO1xyXG50cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XHJcbn1cclxuLmJveDUgYSBzcGFuOm50aC1jaGlsZCg0KXtcclxuYm90dG9tOiAwO1xyXG5yaWdodDogMDtcclxud2lkdGg6IDFweDtcclxuaGVpZ2h0OiAwO1xyXG5iYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcbi5ib3g1IGE6aG92ZXIgc3BhbjpudGgtY2hpbGQoNCl7XHJcbmhlaWdodDogMTAwJTtcclxudHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcclxufVxyXG5cclxuLmJveDN7XHJcbmRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbmRpdi50aXRsZSB7XHJcbmZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuZGl2LmNvbnRlbnQge1xyXG50ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59IFxyXG5cclxuaDEge1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XHJcbmZvbnQtc2l6ZTogNTBweDtcclxufVxyXG5oMiB7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxuZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcclxuZm9udC1zaXplOiA0MHB4O1xyXG5jb2xvcjogcmdiKDE0MiwgMTgwLCAyMzYpO1xyXG59XHJcblxyXG5oMyB7XHJcbnRleHQtYWxpZ246IGxlZnQ7XHJcbmZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG5mb250LXNpemU6IDMwcHg7XHJcbmNvbG9yOiByZ2IoMTAyLCAxNTcsIDI0MCk7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "9vt0":
/*!**********************************************!*\
  !*** ./src/app/token-interceptor.service.ts ***!
  \**********************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ "ccyI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TokenInterceptorService {
    constructor(injector) {
        this.injector = injector;
    }
    intercept(req, next) {
        let authService = this.injector.get(_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]);
        let tokenizedReq = req.clone({
            headers: req.headers.set('Authorization', 'bearer ' + authService.getToken())
        });
        return next.handle(tokenizedReq);
    }
}
TokenInterceptorService.ɵfac = function TokenInterceptorService_Factory(t) { return new (t || TokenInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"])); };
TokenInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TokenInterceptorService, factory: TokenInterceptorService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
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

/***/ "BOkJ":
/*!***************************************************!*\
  !*** ./src/app/user/sign-in/sign-in.component.ts ***!
  \***************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../auth.service */ "ccyI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class SignInComponent {
    constructor(_auth, _router) {
        this._auth = _auth;
        this._router = _router;
        this.loginUserData = {
            email: undefined,
            password: undefined
        };
    }
    ngOnInit() {
    }
    loginUser() {
        this._auth.loginUser(this.loginUserData)
            .subscribe(res => {
            localStorage.setItem('token', res.token);
            this._router.navigate(['/account']);
        }, 
        // res => console.log(res),
        err => console.log(err));
    }
}
SignInComponent.ɵfac = function SignInComponent_Factory(t) { return new (t || SignInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
SignInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignInComponent, selectors: [["app-sign-in"]], decls: 14, vars: 3, consts: [[1, "col", "s12", "white"], ["loginForm", "ngForm"], [1, "row"], [1, "input-field", "col", "s12"], ["type", "text", "ngModel", "", "name", "email", "placeholder", "Email", "required", "", 3, "ngModel", "ngModelChange"], ["Email", ""], ["type", "password", "ngModel", "", "name", "Password", "placeholder", "Password", "required", "", 3, "ngModel", "ngModelChange"], ["Password", ""], ["type", "submit", 1, "btn-large", "btn-submit", 3, "disabled", "click"]], template: function SignInComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignInComponent_Template_input_ngModelChange_4_listener($event) { return ctx.loginUserData.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignInComponent_Template_input_ngModelChange_8_listener($event) { return ctx.loginUserData.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignInComponent_Template_button_click_12_listener() { return ctx.loginUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.loginUserData.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.loginUserData.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWduLWluLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "ER1Z":
/*!**************************************************!*\
  !*** ./src/app/test-page/test-page.component.ts ***!
  \**************************************************/
/*! exports provided: TestPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPageComponent", function() { return TestPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class TestPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
TestPageComponent.ɵfac = function TestPageComponent_Factory(t) { return new (t || TestPageComponent)(); };
TestPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TestPageComponent, selectors: [["app-test-page"]], decls: 11, vars: 0, consts: [[1, "page-container"], [1, "sidebar"], [1, "list-items"], ["routerLink", "/page1", "routerLinkActive", "selected", 1, "list-item"], ["routerLink", "/page2", "routerLinkActive", "selected", 1, "list-item"], ["routerLink", "/page3", "routerLinkActive", "selected", 1, "list-item"], [1, "page-content-container"]], template: function TestPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Test 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Test 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Test 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".page-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    height: 100%;\r\n    background-color: #315268;\r\n}\r\n\r\n.page-content-container[_ngcontent-%COMP%] {\r\n    padding: 50px;\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    width: 300px;\r\n    background-color: rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.list-item[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    color: white;\r\n    font-size: 20px;\r\n    padding: 10px 20px;\r\n    align-items: center;\r\n    cursor: pointer;\r\n    position: relative;\r\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n}\r\n\r\n.list-item[_ngcontent-%COMP%]:hover {\r\n    color: orange;\r\n}\r\n\r\n.list-item.selected[_ngcontent-%COMP%] {\r\n    color: orange;\r\n}\r\n\r\n.list-item[_ngcontent-%COMP%]::before {\r\n    content: '';\r\n    position: absolute;\r\n    height: 100%;\r\n    width: 3px;\r\n    top: 0;\r\n    background-color: orange;\r\n    left: 0;\r\n    opacity: 0;\r\n    transform: scaleY(0);\r\n    transition: transform 0.2s, opacity 0,2s;\r\n}\r\n\r\n.list-item[_ngcontent-%COMP%]:hover::before {\r\n    opacity: 0.5;\r\n    transform: scaleY(0.5) scaleX(2);\r\n}\r\n\r\n.list-item.selected[_ngcontent-%COMP%]::before {\r\n    opacity: 1;\r\n    transform: scaleY(1);\r\n}\r\n\r\n.list-items[_ngcontent-%COMP%] {\r\n    padding-top: 100px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsd0VBQXdFO0FBQzVFOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixVQUFVO0lBQ1YsTUFBTTtJQUNOLHdCQUF3QjtJQUN4QixPQUFPO0lBQ1AsVUFBVTtJQUNWLG9CQUFvQjtJQUNwQix3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJ0ZXN0LXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMxNTI2ODtcclxufVxyXG5cclxuLnBhZ2UtY29udGVudC1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogNTBweDtcclxufVxyXG5cclxuLnNpZGViYXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcblxyXG4ubGlzdC1pdGVtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4ubGlzdC1pdGVtOmhvdmVyIHtcclxuICAgIGNvbG9yOiBvcmFuZ2U7XHJcbn1cclxuXHJcbi5saXN0LWl0ZW0uc2VsZWN0ZWQge1xyXG4gICAgY29sb3I6IG9yYW5nZTtcclxufVxyXG5cclxuLmxpc3QtaXRlbTo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDNweDtcclxuICAgIHRvcDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycywgb3BhY2l0eSAwLDJzO1xyXG59XHJcblxyXG4ubGlzdC1pdGVtOmhvdmVyOjpiZWZvcmUge1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMC41KSBzY2FsZVgoMik7XHJcbn1cclxuXHJcbi5saXN0LWl0ZW0uc2VsZWN0ZWQ6OmJlZm9yZSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XHJcbn1cclxuXHJcbi5saXN0LWl0ZW1zIHtcclxuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcclxufVxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "Fq+P":
/*!**********************************************!*\
  !*** ./src/app/tw-form/tw-form.component.ts ***!
  \**********************************************/
/*! exports provided: TwFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwFormComponent", function() { return TwFormComponent; });
/* harmony import */ var _feature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../feature */ "+GOj");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "R7Hv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function TwFormComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Company stats");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Competitors");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class TwFormComponent {
    constructor(dataService, formBuilder) {
        this.dataService = dataService;
        this.formBuilder = formBuilder;
    }
    ngOnInit() {
        this.featureForm = this.formBuilder.group({
            includeBorders: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
            items: this.formBuilder.array([this.createItem()])
        });
    }
    get controls() {
        return this.featureForm.controls;
    }
    get items() {
        return this.controls.items;
    }
    createItem() {
        return this.formBuilder.group(new _feature__WEBPACK_IMPORTED_MODULE_0__["Feature"]());
    }
    addItem() {
        this.items.push(this.createItem());
    }
    // submit button action
    onSubmit() {
        const event = {
            includeBorders: this.controls.includeBorders.value,
            items: this.items.value
        };
        this.dataService.changeModel(event);
    }
}
TwFormComponent.ɵfac = function TwFormComponent_Factory(t) { return new (t || TwFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
TwFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TwFormComponent, selectors: [["app-tw-form"]], decls: 7, vars: 2, consts: [[1, "form-content"], [3, "formGroup", "ngSubmit"], [4, "ngFor", "ngForOf"], [1, "submit-area"], ["type", "submit", 1, "btn", "btn-primary", "submit"], [1, "check"], [1, "check-box"], ["type", "checkbox", "id", "Companystats", "formControlName", "Companystats", 1, "check-selection"], ["for", "Companystats", 1, "select-feature"], ["type", "checkbox", "id", "Competitors", "formControlName", "Competitors", 1, "check-selection"], ["for", "Competitors", 1, "select-feature"]], template: function TwFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function TwFormComponent_Template_form_ngSubmit_1_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TwFormComponent_div_2_Template, 11, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.featureForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.items.controls);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: [".check[_ngcontent-%COMP%] {\r\n  margin-top: 20px;\r\n}\r\n\r\n.form-content[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  overflow-y: scroll;\r\n}\r\n\r\nform[_ngcontent-%COMP%] {\r\n  margin-left: 30px;\r\n  padding: 0px 15px 50px 35px;\r\n}\r\n\r\nform[_ngcontent-%COMP%]   .submit[_ngcontent-%COMP%] {\r\n  margin-top: 20px;\r\n}\r\n\r\nbutton.submit-area[_ngcontent-%COMP%] {\r\n  margin-right: 30px;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n  font-size: 0.8em;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]:hover {\r\n  text-decoration: underline;\r\n  font-weight: bold;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR3LWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJ0dy1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hlY2sge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRlbnQge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gIHBhZGRpbmc6IDBweCAxNXB4IDUwcHggMzVweDtcclxufVxyXG5cclxuZm9ybSAuc3VibWl0IHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG5idXR0b24uc3VibWl0LWFyZWEge1xyXG4gIG1hcmdpbi1yaWdodDogMzBweDtcclxufVxyXG5cclxubGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMC44ZW07XHJcbn1cclxuXHJcbmxhYmVsIHNtYWxsOmhvdmVyIHtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "FyLO":
/*!****************************************************!*\
  !*** ./src/app/error-page/error-page.component.ts ***!
  \****************************************************/
/*! exports provided: ErrorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function() { return ErrorPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ErrorPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
ErrorPageComponent.ɵfac = function ErrorPageComponent_Factory(t) { return new (t || ErrorPageComponent)(); };
ErrorPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorPageComponent, selectors: [["app-error-page"]], decls: 2, vars: 0, template: function ErrorPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Error 404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvci1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "PDer":
/*!********************************************************************!*\
  !*** ./src/app/material-dashboard/material-dashboard.component.ts ***!
  \********************************************************************/
/*! exports provided: MaterialDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialDashboardComponent", function() { return MaterialDashboardComponent; });
/* harmony import */ var angular_google_charts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular-google-charts */ "icpI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/header.component */ "fECr");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../footer/footer.component */ "fp1T");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");











function MaterialDashboardComponent_mat_grid_tile_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-grid-tile", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-menu", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Expand");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-card-content", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "google-chart", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r1 = ctx.$implicit;
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("colspan", card_r1.cols)("rowspan", card_r1.rows);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", card_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", ctx_r0.chart.title)("type", ctx_r0.chart.type)("data", ctx_r0.chart.data)("columns", ctx_r0.chart.columns)("options", ctx_r0.chart.options);
} }
class MaterialDashboardComponent {
    constructor() {
        // Number of cards to be generated with column and rows to be covered
        this.cards = [
            { title: 'Card 1', cols: 2, rows: 1 },
            { title: 'Card 2', cols: 1, rows: 1 },
            { title: 'Card 3', cols: 1, rows: 2 },
            { title: 'Card 4', cols: 1, rows: 1 }
        ];
        this.charts = [];
        this.chart = {
            title: 'Changing Chart',
            type: angular_google_charts__WEBPACK_IMPORTED_MODULE_0__["ChartType"].BarChart,
            data: [
                ['Copper', 8.94],
                ['Silver', 10.49],
                ['Gold', 19.3],
                ['Platinum', 21.45]
            ],
            columns: ['Element', 'Density'],
            options: {
                animation: {
                    duration: 250,
                    easing: 'ease-in-out',
                    startup: true
                }
            }
        };
    }
}
MaterialDashboardComponent.ɵfac = function MaterialDashboardComponent_Factory(t) { return new (t || MaterialDashboardComponent)(); };
MaterialDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MaterialDashboardComponent, selectors: [["app-material-dashboard"]], decls: 18, vars: 1, consts: [["type", "text", "placeholder", "Search...", "id", "search-bar"], ["id", "search-button", 1, "btn_report"], ["href", "#"], [1, "grid-container"], [1, "mat-h1"], ["cols", "2", "rowHeight", "350px"], [3, "colspan", "rowspan", 4, "ngFor", "ngForOf"], [1, "btn_report"], [3, "colspan", "rowspan"], [1, "dashboard-card"], ["mat-icon-button", "", "aria-label", "Toggle menu", 1, "more-button", 3, "matMenuTriggerFor"], ["xPosition", "before"], ["menu", "matMenu"], ["mat-menu-item", ""], [1, "dashboard-card-content"], [3, "title", "type", "data", "columns", "options"]], template: function MaterialDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " SEARCH ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-grid-list", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, MaterialDashboardComponent_mat_grid_tile_9_Template, 17, 9, "mat-grid-tile", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " generate report\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.cards);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridTile"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuItem"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], angular_google_charts__WEBPACK_IMPORTED_MODULE_0__["GoogleChartComponent"]], styles: [".grid-container[_ngcontent-%COMP%] {\r\n  margin: 20px;\r\n}\r\n\r\n.dashboard-card[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 15px;\r\n  left: 15px;\r\n  right: 15px;\r\n  bottom: 15px;\r\n  box-shadow: 6px 6px 6px rgba(0,0,0,0.5);\r\n  border-radius: 15px;\r\n  background: rgba(255, 255, 255, 0.1);\r\n  overflow: hidden;\r\n  align-items: center;\r\n  border-top: 1px solid rgba(255,255,255,0.5);\r\n  border-left: 1px solid rgba(255,255,255,0.5);\r\n  -webkit-backdrop-filter: blur(7px);\r\n          backdrop-filter: blur(7px);\r\n}\r\n\r\n.more-button[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 5px;\r\n  right: 10px;\r\n}\r\n\r\n.dashboard-card-content[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  color: rgba(255,255,255,0.05);\r\n}\r\n\r\n.dashboard-card[_ngcontent-%COMP%]:hover   .dashboard-card-content[_ngcontent-%COMP%]{\r\n  transform: translateY(0px);\r\n    opacity: 1;\r\n}\r\n\r\n.btn_report[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  margin-left: 42%;\r\n}\r\n\r\n.btn_report[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  padding: 25px 30px;\r\n  text-decoration: none;\r\n  color: #000;\r\n  font-size: 1em;\r\n  font-weight: bold;\r\n  text-transform: uppercase;\r\n  font-family: sans-serif;\r\n  letter-spacing: 4px;\r\n  overflow: hidden;\r\n  background: rgba(255,255,255,0.18);\r\n  box-shadow: 0 5px 5px rgba(0,0,0,0.2);\r\n}\r\n\r\n.btn_report[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before{\r\n  content: '';\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 50%;\r\n  height: 100%;\r\n  background: rgba(255,255,255,0.1);\r\n}\r\n\r\n.btn_report[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after{\r\n  content: '';\r\n  position: absolute;\r\n  top: 0;\r\n  left: -100%;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent);\r\n  transition: 0.5s;\r\n  \r\n}\r\n\r\n.btn_report[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:after{\r\n  left: 100%;\r\n}\r\n\r\n.btn_report[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  display: block;\r\n  transition: 0.5s ease;\r\n}\r\n\r\n.btn_report[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1){\r\n  top: 0;\r\n  left: 0;\r\n  width: 0;\r\n  height: 1px;\r\n  background: #fff;\r\n}\r\n\r\n.btn_report[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:nth-child(1){\r\n  width: 100%;\r\n  transform: translateX(100%);\r\n\r\n}\r\n\r\n.btn_report[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3){\r\n  bottom: 0;\r\n    right: 0;\r\n    width: 0;\r\n    height: 1px;\r\n    background: #fff;\r\n}\r\n\r\n.btn_report[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:nth-child(3){\r\n  width: 100%;\r\n  transform: translateX(-100%);\r\n}\r\n\r\n.btn_report[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2){\r\n  top: 0;\r\n  left: 0;\r\n  width: 1px;\r\n  height: 0;\r\n  background: #fff;\r\n}\r\n\r\n.btn_report[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:nth-child(2){\r\n  height: 100%;\r\n  transform: translateY(100%);\r\n}\r\n\r\n.btn_report[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(4){\r\n  bottom: 0;\r\n  right: 0;\r\n  width: 1px;\r\n  height: 0;\r\n  background: #fff;\r\n}\r\n\r\n.btn_report[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:nth-child(4){\r\n  height: 100%;\r\n  transform: translateY(-100%);\r\n}\r\n\r\n#search-bar[_ngcontent-%COMP%] {\r\n  width: 30%;\r\n  margin: 80px 35% 5px 35%;\r\n  font-size: large;\r\n  border-radius: 5px;\r\n  background: rgba(255, 255, 255, 0.1);\r\n  padding: 5px;\r\n  font-family: sans-serif;\r\n}\r\n\r\n#search-button[_ngcontent-%COMP%] {\r\n  position: center;\r\n  width: 150px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hdGVyaWFsLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7RUFDWix1Q0FBdUM7RUFDdkMsbUJBQW1CO0VBQ25CLG9DQUFvQztFQUNwQyxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLDJDQUEyQztFQUMzQyw0Q0FBNEM7RUFDNUMsa0NBQTBCO1VBQTFCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLDBCQUEwQjtJQUN4QixVQUFVO0FBQ2Q7O0FBR0E7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGtDQUFrQztFQUNsQyxxQ0FBcUM7QUFDdkM7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsVUFBVTtFQUNWLFlBQVk7RUFDWixpQ0FBaUM7QUFDbkM7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixnRkFBZ0Y7RUFDaEYsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtBQUM1Qjs7QUFDQTtFQUNFLFVBQVU7QUFDWjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0UsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLFdBQVc7RUFDWCwyQkFBMkI7O0FBRTdCOztBQUNBO0VBQ0UsU0FBUztJQUNQLFFBQVE7SUFDUixRQUFRO0lBQ1IsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFDQTtFQUNFLFdBQVc7RUFDWCw0QkFBNEI7QUFDOUI7O0FBQ0E7RUFDRSxNQUFNO0VBQ04sT0FBTztFQUNQLFVBQVU7RUFDVixTQUFTO0VBQ1QsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsWUFBWTtFQUNaLDJCQUEyQjtBQUM3Qjs7QUFDQTtFQUNFLFNBQVM7RUFDVCxRQUFRO0VBQ1IsVUFBVTtFQUNWLFNBQVM7RUFDVCxnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZCIsImZpbGUiOiJtYXRlcmlhbC1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG59XHJcblxyXG4uZGFzaGJvYXJkLWNhcmQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDE1cHg7XHJcbiAgbGVmdDogMTVweDtcclxuICByaWdodDogMTVweDtcclxuICBib3R0b206IDE1cHg7XHJcbiAgYm94LXNoYWRvdzogNnB4IDZweCA2cHggcmdiYSgwLDAsMCwwLjUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig3cHgpO1xyXG59XHJcblxyXG4ubW9yZS1idXR0b24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDVweDtcclxuICByaWdodDogMTBweDtcclxufVxyXG5cclxuLmRhc2hib2FyZC1jYXJkLWNvbnRlbnQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjA1KTtcclxufVxyXG5cclxuLmRhc2hib2FyZC1jYXJkOmhvdmVyIC5kYXNoYm9hcmQtY2FyZC1jb250ZW50e1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuXHJcbi5idG5fcmVwb3J0e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLWxlZnQ6IDQyJTtcclxufVxyXG4uYnRuX3JlcG9ydCBhe1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nOiAyNXB4IDMwcHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDRweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4xOCk7XHJcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IHJnYmEoMCwwLDAsMC4yKTtcclxufVxyXG4uYnRuX3JlcG9ydCBhOmJlZm9yZXtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjEpO1xyXG59XHJcbi5idG5fcmVwb3J0IGE6YWZ0ZXJ7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAtMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLHRyYW5zcGFyZW50LHJnYmEoMjU1LDI1NSwyNTUsMC40KSx0cmFuc3BhcmVudCk7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxuICAvKnRyYW5zaXRpb24tZGVsYXk6IDAuNXM7Ki9cclxufVxyXG4uYnRuX3JlcG9ydCBhOmhvdmVyOmFmdGVye1xyXG4gIGxlZnQ6IDEwMCU7XHJcbn1cclxuLmJ0bl9yZXBvcnQgYSBzcGFue1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2U7XHJcbn1cclxuLmJ0bl9yZXBvcnQgYSBzcGFuOm50aC1jaGlsZCgxKXtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDFweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcbi5idG5fcmVwb3J0IGE6aG92ZXIgc3BhbjpudGgtY2hpbGQoMSl7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG5cclxufVxyXG4uYnRuX3JlcG9ydCBhIHNwYW46bnRoLWNoaWxkKDMpe1xyXG4gIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuLmJ0bl9yZXBvcnQgYTpob3ZlciBzcGFuOm50aC1jaGlsZCgzKXtcclxuICB3aWR0aDogMTAwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG59XHJcbi5idG5fcmVwb3J0IGEgc3BhbjpudGgtY2hpbGQoMil7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDFweDtcclxuICBoZWlnaHQ6IDA7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG4uYnRuX3JlcG9ydCBhOmhvdmVyIHNwYW46bnRoLWNoaWxkKDIpe1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XHJcbn1cclxuLmJ0bl9yZXBvcnQgYSBzcGFuOm50aC1jaGlsZCg0KXtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgd2lkdGg6IDFweDtcclxuICBoZWlnaHQ6IDA7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG4uYnRuX3JlcG9ydCBhOmhvdmVyIHNwYW46bnRoLWNoaWxkKDQpe1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xyXG59XHJcblxyXG4jc2VhcmNoLWJhciB7XHJcbiAgd2lkdGg6IDMwJTtcclxuICBtYXJnaW46IDgwcHggMzUlIDVweCAzNSU7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxufVxyXG5cclxuI3NlYXJjaC1idXR0b24ge1xyXG4gIHBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "R7Hv":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _document_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./document-event */ "yQJF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class DataService {
    constructor() {
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](new _document_event__WEBPACK_IMPORTED_MODULE_1__["DocumentEvent"]());
        this.currentEvent = this.messageSource.asObservable();
    }
    changeModel(event) {
        this.messageSource.next(event);
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "SZmd":
/*!***************************************************!*\
  !*** ./src/app/user/sign-up/sign-up.component.ts ***!
  \***************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../auth.service */ "ccyI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class SignUpComponent {
    constructor(_authNew, _router) {
        this._authNew = _authNew;
        this._router = _router;
        this.emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
        //userService: any;
        //toastr: any;
        this.registerUserData = {
            email: undefined,
            password: undefined
        };
    }
    // googleloginfunction(){
    //   this.sub = this._auth.login("google").subscribe(
    //     (data: User) => {console.log(data);this.user=data;return this.router.navigateByUrl(this.returnUrl);}
    //   );
    // }
    // facebookloginfunction(){
    //   this.sub = this._auth.login("facebook").subscribe(
    //     (data: User) => {alert(JSON.stringify(data));this.user=data;return this.router.navigateByUrl(this.returnUrl);}
    //   )
    // }
    // returnUrl(returnUrl: any) {
    //   throw new Error('Method not implemented.');
    // }
    ngOnInit() {
        // this.resetForm();
    }
    registerUser() {
        this._authNew.registerUser(this.registerUserData)
            .subscribe(res => {
            localStorage.setItem('token', res.token);
            this._router.navigate(['/account']);
        }, 
        // res => console.log(res),
        err => console.log(err));
    }
}
SignUpComponent.ɵfac = function SignUpComponent_Factory(t) { return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
SignUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignUpComponent, selectors: [["app-sign-up"]], decls: 23, vars: 5, consts: [[1, "col", "s12", "white"], ["signUpForm", "ngForm"], [1, "row"], [1, "input-field", "col", "s6"], ["type", "text", "name", "email", "required", "", 1, "validate", 3, "pattern", "ngModel", "ngModelChange"], ["Email", "ngModel"], ["data-error", "Invalid email!"], ["type", "password", "name", "password", "required", "", "minlength", "3", "required", "", 1, "validate", 3, "ngModel", "ngModelChange"], ["Password", "ngModel"], [1, "input-field", "col", "s12"], [1, "btn", "btn-primary", "btn-facebook"], [1, "btn", "btn-info", "btn-google"], ["type", "submit", 1, "btn-large", "btn-submit", 3, "disabled", "click"]], template: function SignUpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignUpComponent_Template_input_ngModelChange_4_listener($event) { return ctx.registerUserData.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignUpComponent_Template_input_ngModelChange_9_listener($event) { return ctx.registerUserData.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Google");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignUpComponent_Template_button_click_21_listener() { return ctx.registerUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pattern", ctx.emailPattern)("ngModel", ctx.registerUserData.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.registerUserData.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-error", _r2.errors != null ? _r2.errors.required ? "Required field!" : "Minimum 3 characters needed" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MinLengthValidator"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWduLXVwLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'twylis-angular';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user/user.component */ "3nXK");
/* harmony import */ var _user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user/sign-in/sign-in.component */ "BOkJ");
/* harmony import */ var _user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user/sign-up/sign-up.component */ "SZmd");
/* harmony import */ var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./error-page/error-page.component */ "FyLO");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _material_dashboard_material_dashboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./material-dashboard/material-dashboard.component */ "PDer");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var angular_google_charts__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! angular-google-charts */ "icpI");
/* harmony import */ var _tw_form_tw_form_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./tw-form/tw-form.component */ "Fq+P");
/* harmony import */ var _tw_report_tw_report_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./tw-report/tw-report.component */ "fu1X");
/* harmony import */ var _sample_page1_sample_page1_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./sample-page1/sample-page1.component */ "kpWT");
/* harmony import */ var _sample_page2_sample_page2_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./sample-page2/sample-page2.component */ "0Vv3");
/* harmony import */ var _sample_page3_sample_page3_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./sample-page3/sample-page3.component */ "j/Sl");
/* harmony import */ var _test_page_test_page_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./test-page/test-page.component */ "ER1Z");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./auth.service */ "ccyI");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./auth.guard */ "tIkO");
/* harmony import */ var _token_interceptor_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./token-interceptor.service */ "9vt0");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./account/account.component */ "heGf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/core */ "fXoL");
































// import { appRoutes } from './routes';
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵdefineInjector"]({ providers: [_auth_service__WEBPACK_IMPORTED_MODULE_27__["AuthService"], _auth_guard__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"], {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
            useClass: _token_interceptor_service__WEBPACK_IMPORTED_MODULE_29__["TokenInterceptorService"],
            multi: true
        }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MatMenuModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_19__["LayoutModule"],
            angular_google_charts__WEBPACK_IMPORTED_MODULE_20__["GoogleChartsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        _user_user_component__WEBPACK_IMPORTED_MODULE_8__["UserComponent"],
        _user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_9__["SignInComponent"],
        _user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_10__["SignUpComponent"],
        _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_11__["ErrorPageComponent"],
        _material_dashboard_material_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["MaterialDashboardComponent"],
        _tw_form_tw_form_component__WEBPACK_IMPORTED_MODULE_21__["TwFormComponent"],
        _tw_report_tw_report_component__WEBPACK_IMPORTED_MODULE_22__["TwReportComponent"],
        _sample_page1_sample_page1_component__WEBPACK_IMPORTED_MODULE_23__["SamplePage1Component"],
        _sample_page2_sample_page2_component__WEBPACK_IMPORTED_MODULE_24__["SamplePage2Component"],
        _sample_page3_sample_page3_component__WEBPACK_IMPORTED_MODULE_25__["SamplePage3Component"],
        _test_page_test_page_component__WEBPACK_IMPORTED_MODULE_26__["TestPageComponent"],
        _account_account_component__WEBPACK_IMPORTED_MODULE_30__["AccountComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MatMenuModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_19__["LayoutModule"],
        angular_google_charts__WEBPACK_IMPORTED_MODULE_20__["GoogleChartsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]] }); })();


/***/ }),

/***/ "ccyI":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AuthService {
    constructor(http, _router) {
        this.http = http;
        this._router = _router;
        this._registerUrl = "http://localhost:3000/api/register";
        this._loginUrl = "http://localhost:3000/api/login";
    }
    registerUser(user) {
        return this.http.post(this._registerUrl, user);
    }
    loginUser(user) {
        return this.http.post(this._loginUrl, user);
    }
    logoutUser() {
        localStorage.removeItem('token');
        this._router.navigate(['/events']);
    }
    getToken() {
        return localStorage.getItem('token');
    }
    loggedIn() {
        return !!localStorage.getItem('token');
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 14, vars: 0, consts: [[1, "header"], [1, "buttons"], ["routerLink", "/home", "routerLinkActive", "active"], [1, "nav-btn"], ["routerLink", "/dashboard", "routerLinkActive", "active"], ["routerLink", "/login", "routerLinkActive", "active"], ["routerLink", "/signup", "routerLinkActive", "active"], ["id", "signup", 1, "nav-btn"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "SIGN UP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: [".header[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  width: 100%;\r\n  top: 0;\r\n  \r\n  padding: 5px;\r\n  background-size: cover;\r\n  background-color: white;\r\n  background: rgba(255, 255, 255, 0.5);\r\n  box-shadow: 0px 5px 5px #000;\r\n  overflow: auto;\r\n  background-blend-mode: soft-light;\r\n}\r\n\r\n\r\n.nav-btn[_ngcontent-%COMP%]{\r\n  margin: 0px 40px 0px 20px;\r\n  height: 30px;\r\n  width: 120px;\r\n  font-size: 18px;\r\n  font-size: 19px;\r\n  letter-spacing: 2px;\r\n  color: black;\r\n  background-color: rgba(255, 255, 255, 0);\r\n  border: none;\r\n  outline: none;\r\n  font-family: 'Montserrat', sans-serif;\r\n  font-weight: 500;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n  transition: all(5s);\r\n}\r\n\r\n\r\n#signup[_ngcontent-%COMP%] {\r\n  background-color: red;\r\n  color: white;\r\n  height: 40px;\r\n  width: 120px;\r\n  background-color: rgb(207, 7, 7);\r\n  color: white;\r\n  height: 40px;\r\n  width: 120px;\r\n  font-weight: normal;\r\n}\r\n\r\n\r\n.buttons[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  align-items: center;\r\n  width: 100%;\r\n}\r\n\r\n\r\n.nav-btn[_ngcontent-%COMP%]:hover{\r\n  margin: 0px 40px 0px 20px;\r\n  transform: scale(1.1);\r\n  height: 40px;\r\n  width: 120px;\r\n  font-size: 18px;\r\n  letter-spacing: 2px;\r\n  color: rgb(175, 25, 25);\r\n  border: none;\r\n  outline: none;\r\n  font-family: 'Montserrat', sans-serif;\r\n  font-weight: 700;\r\n  cursor: pointer;\r\n  transition: all(5s);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsTUFBTTtFQUNOLGdCQUFnQjtFQUNoQixZQUFZO0VBSVosc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixvQ0FBb0M7RUFDcEMsNEJBQTRCO0VBQzVCLGNBQWM7RUFDZCxpQ0FBaUM7QUFDbkM7OztBQUdBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHdDQUF3QztFQUN4QyxZQUFZO0VBQ1osYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7OztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLGdDQUFnQztFQUNoQyxZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7OztBQUdBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsV0FBVztBQUNiOzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRvcDogMDtcclxuICAvKmhlaWdodDogNzBweDsqL1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggIzAwMDtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IHNvZnQtbGlnaHQ7XHJcbn1cclxuXHJcblxyXG4ubmF2LWJ0bntcclxuICBtYXJnaW46IDBweCA0MHB4IDBweCAyMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtc2l6ZTogMTlweDtcclxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsKDVzKTtcclxufVxyXG5cclxuI3NpZ251cCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDcsIDcsIDcpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcblxyXG4uYnV0dG9uc3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm5hdi1idG46aG92ZXJ7XHJcbiAgbWFyZ2luOiAwcHggNDBweCAwcHggMjBweDtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHdpZHRoOiAxMjBweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICBjb2xvcjogcmdiKDE3NSwgMjUsIDI1KTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCg1cyk7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 83, vars: 0, consts: [["role", "contentinfo", 1, "mainfooter"], [1, "row"], [1, "footer-pad"], [1, "list-unstyled"], ["routerLink", "/sample-1", "routerLinkActive", "active"], ["routerLink", "/sample-2", "routerLinkActive", "active"], ["routerLink", "/sample-3", "routerLinkActive", "active"], ["routerLink", "/test", "routerLinkActive", "active"], ["routerLink", "/form", "routerLinkActive", "active"], ["href", "#"], [1, "col-md-12", "copy"], [1, "text-center"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Sub heading 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Sub heading 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Sub heading 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Features");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Sub heading 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Sub heading 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Sub heading 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Heading 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Sub heading 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Sub heading 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Sub heading 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Sub heading 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Sub heading 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Sub heading 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Sub heading 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Sub heading 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Sub heading 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Sub heading 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Sub heading 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Sub heading 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "\u00A9 Copyright 2021 - TWYLIS. All rights reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: [".mainfooter[_ngcontent-%COMP%] {\r\n  background-color: #1a2847;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  margin-top: 30px;\r\n  margin-bottom: 0px;\r\n  background: #16222A;\r\n  background: rgba(0, 0, 0, 0.6);\r\n  box-shadow: 0px 5px 5px #000;\r\n}\r\n\r\n.list-unstyled[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n  color: white;\r\n  text-decoration: none;\r\n  transition-duration: 0.2s;\r\n  margin: -5px;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover {\r\n  color: orange;\r\n}\r\n\r\n.text-center[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  color: white;\r\n  margin: 20px;\r\n  padding-bottom: 20px;\r\n}\r\n\r\nh4[_ngcontent-%COMP%] {\r\n  margin: 0px 40px 0px 50px;\r\n  padding-top: 10px;\r\n}\r\n\r\n.footer-pad[_ngcontent-%COMP%] {\r\n  color: red;\r\n}\r\n\r\n.row[_ngcontent-%COMP%] {\r\n  column-count: 6;\r\n  margin-top: 50px;\r\n  margin-left: 20px;\r\n}\r\n\r\n.brand[_ngcontent-%COMP%] {\r\n  color: white;\r\n}\r\n\r\n.copy[_ngcontent-%COMP%] {\r\n  border-top: 1px solid #FFFFFF;\r\n  font-size: 12px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLFNBQVM7RUFDVCxPQUFPO0VBQ1AsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5Qiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsZUFBZTtBQUNqQiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluZm9vdGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWEyODQ3O1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gIGJhY2tncm91bmQ6ICMxNjIyMkE7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gIGJveC1zaGFkb3c6IDBweCA1cHggNXB4ICMwMDA7XHJcbn1cclxuXHJcbi5saXN0LXVuc3R5bGVkIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG5hIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XHJcbiAgbWFyZ2luOiAtNXB4O1xyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuICBjb2xvcjogb3JhbmdlO1xyXG59XHJcblxyXG4udGV4dC1jZW50ZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG5oNCB7XHJcbiAgbWFyZ2luOiAwcHggNDBweCAwcHggNTBweDtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuLmZvb3Rlci1wYWQge1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gIGNvbHVtbi1jb3VudDogNjtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4uYnJhbmQge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmNvcHkge1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRkZGRkZGO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "fu1X":
/*!**************************************************!*\
  !*** ./src/app/tw-report/tw-report.component.ts ***!
  \**************************************************/
/*! exports provided: TwReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwReportComponent", function() { return TwReportComponent; });
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "5JmO");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "TruH");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "R7Hv");




pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_0__["vfs"] = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_1__["pdfMake"].vfs;
class TwReportComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.pdfUrl = 'about:blank';
    }
    ngOnInit() {
        this.dataService.currentEvent.subscribe(event => this.onDocumentFormChange(event));
    }
    onDocumentFormChange(event) {
        this.updatePdfDocument(event);
    }
    updatePdfDocument(event) {
        // event.includeBorders = true;
        const mmToPtRatio = 2.83466667;
        const marginSize = 9 * mmToPtRatio;
        const columns = 12;
        const rows = 28;
        const cells = columns * rows;
        const pageWidth = 595.276;
        const pageHeight = 841.89;
        const borderWidth = 0.567;
        // 70.866 , 116.22
        // 45,315
        const contentWidth = pageWidth - 2 * marginSize;
        const columnWidth = 45.3543333333;
        const columnHeight = 28.3464642857;
        const topRowHeight = 0.3 * columnHeight;
        const bottomRowHeight = 0.7 * columnHeight;
        let tableBuilder;
        const columnWidths = [];
        for (let i = 0; i < columns; i++) {
            columnWidths.push(columnWidth - (event.includeBorders ? borderWidth : 0));
        }
        const docDefinition = {
            pageSize: { width: pageWidth, height: pageHeight },
            pageMargins: [24.094, 24.094, 24.094, 24.094],
            defaultStyle: {
                margin: 0
            }
        };
        pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_0__["createPdf"](docDefinition).getDataUrl((outDoc) => {
            this.pdfUrl = outDoc;
        });
    }
}
TwReportComponent.ɵfac = function TwReportComponent_Factory(t) { return new (t || TwReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"])); };
TwReportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TwReportComponent, selectors: [["app-tw-report"]], decls: 1, vars: 1, consts: [[1, "expand", 3, "src"]], template: function TwReportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "iframe", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.pdfUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeResourceUrl"]);
    } }, styles: [".expand[_ngcontent-%COMP%] {\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR3LXJlcG9ydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0VBQ2QiLCJmaWxlIjoidHctcmVwb3J0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhwYW5kIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfSJdfQ== */"] });


/***/ }),

/***/ "heGf":
/*!**********************************************!*\
  !*** ./src/app/account/account.component.ts ***!
  \**********************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/header.component */ "fECr");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/footer.component */ "fp1T");




class AccountComponent {
    constructor(http) {
        this.http = http;
        this._accountUrl = 'http://localhost:3000/api/account';
    }
    ngOnInit() {
    }
    getEvents() {
        return this.http.get(this._accountUrl);
    }
}
AccountComponent.ɵfac = function AccountComponent_Factory(t) { return new (t || AccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AccountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccountComponent, selectors: [["app-account"]], decls: 5, vars: 0, consts: [["type", "text"]], template: function AccountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2NvdW50LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "j/Sl":
/*!********************************************************!*\
  !*** ./src/app/sample-page3/sample-page3.component.ts ***!
  \********************************************************/
/*! exports provided: SamplePage3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SamplePage3Component", function() { return SamplePage3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SamplePage3Component {
    constructor() { }
    ngOnInit() {
    }
}
SamplePage3Component.ɵfac = function SamplePage3Component_Factory(t) { return new (t || SamplePage3Component)(); };
SamplePage3Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SamplePage3Component, selectors: [["app-sample-page3"]], decls: 2, vars: 0, consts: [[2, "color", "white"]], template: function SamplePage3Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sample page 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYW1wbGUtcGFnZTMuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "kpWT":
/*!********************************************************!*\
  !*** ./src/app/sample-page1/sample-page1.component.ts ***!
  \********************************************************/
/*! exports provided: SamplePage1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SamplePage1Component", function() { return SamplePage1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SamplePage1Component {
    constructor() { }
    ngOnInit() {
    }
}
SamplePage1Component.ɵfac = function SamplePage1Component_Factory(t) { return new (t || SamplePage1Component)(); };
SamplePage1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SamplePage1Component, selectors: [["app-sample-page1"]], decls: 2, vars: 0, consts: [[2, "color", "white"]], template: function SamplePage1Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sample page 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYW1wbGUtcGFnZTEuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "tIkO":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "ccyI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AuthGuard {
    constructor(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    canActivate() {
        if (this._authService.loggedIn()) {
            console.log('true');
            return true;
        }
        else {
            console.log('false');
            this._router.navigate(['/login']);
            return false;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user/user.component */ "3nXK");
/* harmony import */ var _user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/sign-up/sign-up.component */ "SZmd");
/* harmony import */ var _user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/sign-in/sign-in.component */ "BOkJ");
/* harmony import */ var _material_dashboard_material_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./material-dashboard/material-dashboard.component */ "PDer");
/* harmony import */ var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./error-page/error-page.component */ "FyLO");
/* harmony import */ var _sample_page1_sample_page1_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sample-page1/sample-page1.component */ "kpWT");
/* harmony import */ var _sample_page2_sample_page2_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sample-page2/sample-page2.component */ "0Vv3");
/* harmony import */ var _sample_page3_sample_page3_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sample-page3/sample-page3.component */ "j/Sl");
/* harmony import */ var _test_page_test_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./test-page/test-page.component */ "ER1Z");
/* harmony import */ var _tw_form_tw_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tw-form/tw-form.component */ "Fq+P");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth.guard */ "tIkO");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./account/account.component */ "heGf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "fXoL");
















const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    {
        path: 'signup', component: _user_user_component__WEBPACK_IMPORTED_MODULE_2__["UserComponent"],
        children: [{ path: '', component: _user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_3__["SignUpComponent"] }]
    },
    {
        path: 'login', component: _user_user_component__WEBPACK_IMPORTED_MODULE_2__["UserComponent"],
        children: [{ path: '', component: _user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__["SignInComponent"] }]
    },
    { path: 'account', component: _account_account_component__WEBPACK_IMPORTED_MODULE_13__["AccountComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'dashboard', component: _material_dashboard_material_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["MaterialDashboardComponent"] },
    { path: 'sample-1', component: _sample_page1_sample_page1_component__WEBPACK_IMPORTED_MODULE_7__["SamplePage1Component"] },
    { path: 'sample-2', component: _sample_page2_sample_page2_component__WEBPACK_IMPORTED_MODULE_8__["SamplePage2Component"] },
    { path: 'sample-3', component: _sample_page3_sample_page3_component__WEBPACK_IMPORTED_MODULE_9__["SamplePage3Component"] },
    { path: 'test', component: _test_page_test_page_component__WEBPACK_IMPORTED_MODULE_10__["TestPageComponent"] },
    { path: 'form', component: _tw_form_tw_form_component__WEBPACK_IMPORTED_MODULE_11__["TwFormComponent"] },
    { path: '**', component: _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_6__["ErrorPageComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "yQJF":
/*!***********************************!*\
  !*** ./src/app/document-event.ts ***!
  \***********************************/
/*! exports provided: DocumentEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentEvent", function() { return DocumentEvent; });
class DocumentEvent {
    constructor() {
        this.includeBorders = false;
        this.items = [];
    }
}


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map