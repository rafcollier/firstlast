webpackJsonp([1,4],{

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(716);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    //inject http into constructor
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/register', user, { headers: headers }) //for local development
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.submitSentences = function (sentences) {
        this.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/sentences/sentences', sentences, { headers: headers }) //for local development
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //return this.http.post('users/authenticate', user, {headers: headers}) //add this for local dev: http://localhost:3000/
        return this.http.post('http://localhost:3000/users/authenticate', user, { headers: headers }) //add this for local dev: http://localhost:3000/
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        //return this.http.get('users/profile', {headers: headers}) //add this for local dev: http://localhost:3000/
        return this.http.get('http://localhost:3000/users/profile', { headers: headers }) //add this for local dev: http://localhost:3000/
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getSearchResult = function (title) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        params.set('searchTitle', title);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]();
        options.headers = headers;
        options.search = params;
        //return this.http.get('sentences/searchBook', options) //add this for local dev: http://localhost:3000/
        return this.http.get('http://localhost:3000/sentences/searchBook', options) //add this for local dev: http://localhost:3000/
            .map(function (res) { return res.json(); });
    };
    //incrementLikes(sentence) {
    //  let body = JSON.stringify(sentence);
    //   let headers = new Headers();
    //   headers.append('Content-Type', 'application/json');
    //   let options = new RequestOptions();
    //   options.headers = headers;
    //return this.http.put('sentences/incrementLikes', body, options) //add this for local dev: http://localhost:3000/
    //   return this.http.put('http://localhost:3000/sentences/incrementLikes', body, options) //add this for local dev: http://localhost:3000/
    //     .map(res => res.json());
    // } 
    AuthService.prototype.incrementLikes = function (updateLikes) {
        var body = JSON.stringify(updateLikes);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]();
        options.headers = headers;
        //return this.http.put('sentences/incrementLikes', body, options) //add this for local dev: http://localhost:3000/
        return this.http.put('http://localhost:3000/sentences/incrementLikes', body, options) //add this for local dev: http://localhost:3000/
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.addComment = function (comment) {
        var body = JSON.stringify(comment);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]();
        options.headers = headers;
        //return this.http.put('sentences/addComment', body, options) //add this for local dev: http://localhost:3000/
        return this.http.put('http://localhost:3000/sentences/addComment', body, options) //add this for local dev: http://localhost:3000/
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getCollectionLength = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //return this.http.get('sentences/collectionLength', {headers: headers}) //add this for local dev: http://localhost:3000/
        return this.http.get('http://localhost:3000/sentences/collectionLength', { headers: headers }) //add this for local dev: http://localhost:3000/
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getSentences = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //return this.http.get('sentences/getAllSentences', {headers: headers}) //add this for local dev: http://localhost:3000/
        return this.http.get('http://localhost:3000/sentences/getAllSentences', { headers: headers }) //add this for local dev: http://localhost:3000/
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getAllTitles = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //return this.http.get('sentences/getAllTitles', {headers: headers}) //add this for local dev: http://localhost:3000/
        return this.http.get('http://localhost:3000/sentences/getAllTitles', { headers: headers }) //add this for local dev: http://localhost:3000/
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user)); //local storage can only store strings, not objects
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])();
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=/Users/Collier/Documents/firstlast/angular-src/src/auth.service.js.map

/***/ }),

/***/ 389:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 389;


/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(508);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/Collier/Documents/firstlast/angular-src/src/main.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(697),
            styles: [__webpack_require__(681)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/Collier/Documents/firstlast/angular-src/src/app.component.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_validate_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_navbar_navbar_component__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_home_home_component__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_dashboard_dashboard_component__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_profile_profile_component__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_sentences_sentences_component__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_displayall_displayall_component__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_quiz_quiz_component__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_dummy_dummy_component__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_search_search_component__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_comment_comment_component__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_about_about_component__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_alltitles_alltitles_component__ = __webpack_require__(510);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_13__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_20__components_search_search_component__["a" /* SearchComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_22__components_about_about_component__["a" /* AboutComponent */] },
    { path: 'search/:title', component: __WEBPACK_IMPORTED_MODULE_20__components_search_search_component__["a" /* SearchComponent */] },
    { path: 'dummy', component: __WEBPACK_IMPORTED_MODULE_19__components_dummy_dummy_component__["a" /* DummyComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'quiz', component: __WEBPACK_IMPORTED_MODULE_18__components_quiz_quiz_component__["a" /* QuizComponent */] },
    { path: 'displayall', component: __WEBPACK_IMPORTED_MODULE_17__components_displayall_displayall_component__["a" /* DisplayallComponent */] },
    { path: 'alltitles', component: __WEBPACK_IMPORTED_MODULE_23__components_alltitles_alltitles_component__["a" /* AlltitlesComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_14__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'comment', component: __WEBPACK_IMPORTED_MODULE_21__components_comment_comment_component__["a" /* CommentComponent */] },
    { path: 'sentences', component: __WEBPACK_IMPORTED_MODULE_16__components_sentences_sentences_component__["a" /* SentencesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_15__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__["a" /* AuthGuard */]] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_sentences_sentences_component__["a" /* SentencesComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_displayall_displayall_component__["a" /* DisplayallComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_quiz_quiz_component__["a" /* QuizComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_dummy_dummy_component__["a" /* DummyComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_comment_comment_component__["a" /* CommentComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_alltitles_alltitles_component__["a" /* AlltitlesComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__["FlashMessagesModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__["a" /* AuthGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/Collier/Documents/firstlast/angular-src/src/app.module.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(698),
            styles: [__webpack_require__(682)]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
//# sourceMappingURL=/Users/Collier/Documents/firstlast/angular-src/src/about.component.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlltitlesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AlltitlesComponent = (function () {
    function AlltitlesComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    AlltitlesComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("Entering show all titles");
        if (this.authService.loggedIn()) {
            console.log("User is logged in");
            this.authService.getProfile().subscribe(function (profile) {
                _this.username = profile.user.username;
                console.log("Profile returned from server for: " + _this.username);
            }, function (err) {
                console.log(err);
                return false;
            });
        }
        else {
            console.log("User not logged in");
        }
        this.showSentences = false;
        console.log("Calling sevice to get sentences");
        this.authService.getAllTitles().subscribe(function (entries) {
            _this.sentences = entries; //the database entries are an array of objects//now available for *ngFor on home.html
            _this.bookName = entries[0].bookTitle;
            console.log(_this.bookName);
            console.log(entries[0]._id);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    AlltitlesComponent.prototype.onTitleClick = function (sentence, index) {
        console.log("clicked title name");
        console.log("sentence: " + sentence);
        console.log("index: " + index);
        this.showSentences = true;
        this.sentenceIndex = index;
        console.log(this.showSentences);
    };
    AlltitlesComponent.prototype.onLikeClick = function (sentence, index) {
        var _this = this;
        if (this.authService.loggedIn()) {
            var isInArray = sentence.likedBy.includes(this.username); //this user already liked this sentence-pair 
            if (!isInArray) {
                var updateLikes = {
                    likeID: sentence._id,
                    likeUsername: this.username
                };
                console.log(updateLikes);
                this.authService.incrementLikes(updateLikes).subscribe(function (data) {
                    _this.sentences[index] = data;
                    console.log(data);
                }, function (err) {
                    console.log(err);
                    return false;
                });
            }
            else {
                window.scroll(0, 0);
                this.flashMessage.show('Hey ' + this.username + ', you already liked this one.', { cssClass: 'alert-danger', timeout: 2000 });
                return false;
            }
        }
        else {
            window.scroll(0, 0);
            this.flashMessage.show('You must log in to like sentences', { cssClass: 'alert-danger', timeout: 2000 });
        }
    };
    AlltitlesComponent.prototype.onCommentClick = function (sentence) {
        console.log("User clicked on comments icon for:");
        var commentSentence = sentence;
        console.log(commentSentence);
        this.router.navigate(['/comment', commentSentence]);
    };
    AlltitlesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-alltitles',
            template: __webpack_require__(699),
            styles: [__webpack_require__(683)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], AlltitlesComponent);
    return AlltitlesComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/Collier/Documents/firstlast/angular-src/src/alltitles.component.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CommentComponent = (function () {
    function CommentComponent(validateService, flashMessage, authService, router, route) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
        this.route = route;
    }
    CommentComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Get the paramaters passed in to this route to identify which entry these comments are for.
        this.sub = this.route.params.subscribe(function (params) {
            console.log(params);
            _this.getTitle = params["bookTitle"].toLowerCase();
            _this.getID = params["_id"];
        });
        //Fetch this entry from database
        this.authService.getSearchResult(this.getTitle).subscribe(function (data) {
            console.log("Return from server after search request for book by title");
            console.log(data);
            if (data != null) {
                _this.sentence = data;
                _this.comments = data.comments;
                console.log(_this.comments);
                window.scroll(0, 0);
            }
            else {
                _this.flashMessage.show('Problem fetching this sentence', { cssClass: 'alert-danger', timeout: 3000 });
                window.scroll(0, 0);
                return false;
            }
        }, function (err) {
            console.log(err);
            return false;
        });
        //Check if user is logged in and grab the user name. Only users can comment. 
        if (this.authService.loggedIn()) {
            this.authService.getProfile().subscribe(function (profile) {
                _this.username = profile.user.username;
                console.log("Profile returned from server for: " + _this.username);
            }, function (err) {
                console.log(err);
                return false;
            });
        }
        window.scrollTo(0, 0);
    };
    //Check if user is logged on submit. Grab new comment body from form. 
    //Create new comment object to send to database with username, comment body, and db entry id 
    //Send update request to server. When data comes back successfully, create a local comments array to display on page.
    CommentComponent.prototype.onCommentSubmit = function () {
        var _this = this;
        if (this.authService.loggedIn()) {
            console.log(this.username);
            var comment = {
                username: this.username,
                body: this.inputComment,
                id: this.getID
            };
            console.log(comment);
            this.authService.addComment(comment).subscribe(function (data) {
                console.log(data);
                _this.comments = data.comments;
                console.log(_this.comments);
                _this.inputComment = ""; //reset input field
                window.scrollTo(0, 0);
                _this.ngOnInit(); //go back to intialize
            }, function (err) {
                console.log(err);
                return false;
            });
        }
        else {
            window.scroll(0, 0);
            this.flashMessage.show('You must log in to comment', { cssClass: 'alert-danger', timeout: 2000 });
        }
    };
    CommentComponent.prototype.onSearchBookSubmit = function () {
        var searchTitle = {
            title: this.searchInputTitle
        };
        if (searchTitle.title != undefined || searchTitle.title != null) {
            this.router.navigate(['/search', searchTitle.title.toLowerCase()]);
        }
    };
    CommentComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-comment',
            template: __webpack_require__(700),
            styles: [__webpack_require__(684)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */]) === 'function' && _e) || Object])
    ], CommentComponent);
    return CommentComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/Users/Collier/Documents/firstlast/angular-src/src/comment.component.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(701),
            styles: [__webpack_require__(685)]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardComponent);
    return DashboardComponent;
}());
//# sourceMappingURL=/Users/Collier/Documents/firstlast/angular-src/src/dashboard.component.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisplayallComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DisplayallComponent = (function () {
    function DisplayallComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    DisplayallComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.authService.loggedIn()) {
            this.authService.getProfile().subscribe(function (profile) {
                _this.username = profile.user.username;
                console.log("Profile returned from server for: " + _this.username);
            }, function (err) {
                console.log(err);
                return false;
            });
        }
        window.scrollTo(0, 0);
        console.log("Calling sevice to get sentences");
        this.authService.getSentences().subscribe(function (entries) {
            _this.sentences = entries; //the database entries are an array of objects//now available for *ngFor on home.html
            _this.bookName = entries[0].bookTitle;
            console.log(_this.bookName);
            console.log(entries[0]._id);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    // onLikeClick(sentence, index) {
    //console.log("Here are the likes" + sentence.likes);
    //  if(this.authService.loggedIn()) {
    //    console.log(this.username);
    //    console.log(sentence.likedBy);
    //    const isInArray = sentence.likedBy.includes(this.username); //this user already liked this sentence-pair 
    //
    //      if(!isInArray) {
    //        sentence.likedBy.push(this.username); 
    //        console.log("Push to likes array so same user can't like twice: " + sentence.likedBy);
    //        this.authService.incrementLikes(sentence).subscribe(data => {
    //          console.log(data);
    //          this.sentences[index] = data;
    //          console.log(this.sentences[index]);
    //        },
    //        err => {
    //          console.log(err);
    //          return false;
    //        });
    //      } else {
    //        window.scroll(0, 0);
    //        this.flashMessage.show('Hey ' + this.username + ', you already liked this one.', {cssClass: 'alert-danger', timeout: 2000}); 
    //        return false; 
    //      }
    //    } else {
    //        window.scroll(0, 0);
    //        this.flashMessage.show('You must log in to like sentences', {cssClass: 'alert-danger', timeout: 2000}); 
    //    }
    //
    //  } 
    DisplayallComponent.prototype.onLikeClick = function (sentence, index) {
        var _this = this;
        if (this.authService.loggedIn()) {
            var isInArray = sentence.likedBy.includes(this.username); //this user already liked this sentence-pair 
            if (!isInArray) {
                var updateLikes = {
                    likeID: sentence._id,
                    likeUsername: this.username
                };
                console.log(updateLikes);
                this.authService.incrementLikes(updateLikes).subscribe(function (data) {
                    _this.sentences[index] = data;
                    console.log(data);
                }, function (err) {
                    console.log(err);
                    return false;
                });
            }
            else {
                window.scroll(0, 0);
                this.flashMessage.show('Hey ' + this.username + ', you already liked this one.', { cssClass: 'alert-danger', timeout: 2000 });
                return false;
            }
        }
        else {
            window.scroll(0, 0);
            this.flashMessage.show('You must log in to like sentences', { cssClass: 'alert-danger', timeout: 2000 });
        }
    };
    DisplayallComponent.prototype.onCommentClick = function (sentence) {
        console.log("User clicked on comments icon for:");
        var commentSentence = sentence;
        console.log(commentSentence);
        this.router.navigate(['/comment', commentSentence]);
    };
    DisplayallComponent.prototype.onSearchBookSubmit = function () {
        var searchTitle = {
            title: this.title
        };
        if (searchTitle.title != undefined || searchTitle.title != null) {
            this.router.navigate(['/search', searchTitle.title.toLowerCase()]);
        }
    };
    DisplayallComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-displayall',
            template: __webpack_require__(702),
            styles: [__webpack_require__(686)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], DisplayallComponent);
    return DisplayallComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/Collier/Documents/firstlast/angular-src/src/displayall.component.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DummyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DummyComponent = (function () {
    function DummyComponent() {
    }
    DummyComponent.prototype.ngOnInit = function () {
    };
    DummyComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dummy',
            template: __webpack_require__(703),
            styles: [__webpack_require__(687)]
        }), 
        __metadata('design:paramtypes', [])
    ], DummyComponent);
    return DummyComponent;
}());
//# sourceMappingURL=/Users/Collier/Documents/firstlast/angular-src/src/dummy.component.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = (function () {
    function HomeComponent(flashMessage, authService, router) {
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scrollTo(0, 0);
        this.showSearch = false;
        console.log("Calling sevice to get collection size");
        this.authService.getCollectionLength().subscribe(function (length) {
            _this.size = length; //the database entries are an array of objects//now available for *ngFor on home.html
            console.log(_this.size);
            console.log(length);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    HomeComponent.prototype.onLikeClick = function (sentence, index) {
        var _this = this;
        console.log("Here are the likes" + sentence.likes);
        this.authService.incrementLikes(sentence).subscribe(function (data) {
            console.log(data);
            _this.sentence = data;
            console.log(_this.sentence[index]);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    HomeComponent.prototype.onSearchBookSubmit = function () {
        var searchTitle = {
            title: this.title
        };
        if (searchTitle.title != undefined || searchTitle.title != null) {
            this.router.navigate(['/search', searchTitle.title.toLowerCase()]);
        }
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(704),
            styles: [__webpack_require__(688)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/Collier/Documents/firstlast/angular-src/src/home.component.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        console.log("Login form submitted with: " + user.username);
        this.authService.authenticateUser(user).subscribe(function (data) {
            console.log("Login request returned from server");
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('You are logged in', { cssClass: 'alert-success', timeout: 5000 });
                _this.router.navigate(['/sentences']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                _this.router.navigate(['/login']);
            }
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(705),
            styles: [__webpack_require__(689)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/Collier/Documents/firstlast/angular-src/src/login.component.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.isIn = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.toggleState = function () {
        var bool = this.isIn;
        this.isIn = bool === false ? true : false;
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent.prototype.onRefreshHome = function () {
        var _this = this;
        console.log("Refresh Homepage");
        this.router.navigateByUrl('/dummy', { skipLocationChange: true });
        setTimeout(function () { return _this.router.navigate(['']); });
        return false;
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(706),
            styles: [__webpack_require__(690)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/Collier/Documents/firstlast/angular-src/src/navbar.component.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("Calling service to fetch profile");
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
            console.log("Profile returned from server for: " + _this.user);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(707),
            styles: [__webpack_require__(691)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/Collier/Documents/firstlast/angular-src/src/profile.component.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuizComponent = (function () {
    function QuizComponent(flashMessage, authService, router) {
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    QuizComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scrollTo(0, 0);
        if (this.streak === NaN || this.streak === undefined) {
            this.streak = 0;
        }
        console.log("Calling sevice to get sentences");
        this.authService.getSentences().subscribe(function (entries) {
            _this.sentences = entries; //the database entries are an array of objects//now available for *ngFor on home.html
        }, function (err) {
            console.log(err);
            return false;
        });
        this.sentenceIndex = 0;
        this.index0 = Math.floor(Math.random() * 3);
        this.index1 = null;
        this.index2 = null;
        while (this.index1 === null || this.index1 === this.index0) {
            this.index1 = Math.floor(Math.random() * 3);
        }
        var arr = [0, 1, 2];
        arr.splice(arr.indexOf(this.index0), 1);
        arr.splice(arr.indexOf(this.index1), 1);
        this.index2 = arr[0];
    };
    QuizComponent.prototype.onClickOne = function () {
        if (this.index0 === this.sentenceIndex) {
            this.correctAnswer();
        }
        else {
            this.incorrectAnswer();
        }
    };
    QuizComponent.prototype.onClickTwo = function () {
        if (this.index1 === this.sentenceIndex) {
            this.correctAnswer();
        }
        else {
            this.incorrectAnswer();
        }
    };
    QuizComponent.prototype.onClickThree = function () {
        if (this.index2 === this.sentenceIndex) {
            this.correctAnswer();
        }
        else {
            this.incorrectAnswer();
        }
    };
    QuizComponent.prototype.incorrectAnswer = function () {
        window.scroll(0, 0);
        this.flashMessage.show('Sorry, guess again', { cssClass: 'alert-danger', timeout: 2000 });
        this.streak = 0;
        return false;
    };
    QuizComponent.prototype.correctAnswer = function () {
        window.scroll(0, 0);
        this.flashMessage.show('Correct! Try another', { cssClass: 'alert-success', timeout: 2000 });
        this.streak++;
        this.ngOnInit();
    };
    QuizComponent.prototype.onResetQuiz = function () {
        window.scroll(0, 0);
        this.streak = 0;
        this.ngOnInit();
    };
    QuizComponent.prototype.onSearchBookSubmit = function () {
        var searchTitle = {
            title: this.title
        };
        if (searchTitle.title != undefined || searchTitle.title != null) {
            this.router.navigate(['/search', searchTitle.title.toLowerCase()]);
        }
    };
    QuizComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-quiz',
            template: __webpack_require__(708),
            styles: [__webpack_require__(692)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], QuizComponent);
    return QuizComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/Collier/Documents/firstlast/angular-src/src/quiz.component.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    //NOTE -- inject the service into the contructor
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        console.log("Registration form submitted");
        var user = {
            //name: this.name,
            //email: this.email,
            username: this.username,
            password: this.password
        };
        //Required fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        //Validate Email
        //if(!this.validateService.validateEmail(user.email)) {
        //  this.flashMessage.show('Please use a valid email address', {cssClass: 'alert-danger', timeout: 3000});
        //  return false;
        //}
        //Register User
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are registered and can log in', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(709),
            styles: [__webpack_require__(693)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/Collier/Documents/firstlast/angular-src/src/register.component.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchComponent = (function () {
    function SearchComponent(route, flashMessage, authService, router) {
        this.route = route;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.authService.loggedIn()) {
            this.authService.getProfile().subscribe(function (profile) {
                _this.username = profile.user.username;
                console.log("Profile returned from server for: " + _this.username);
            }, function (err) {
                console.log(err);
                return false;
            });
        }
        window.scrollTo(0, 0);
        //Get the parameter passed in with the route (book title) 
        console.log("In the search component...");
        this.sub = this.route.params.subscribe(function (params) {
            _this.title = params['title'].toLowerCase();
            console.log("The title is: " + _this.title);
        });
        this.searchBook(this.title);
    };
    SearchComponent.prototype.searchBook = function (title) {
        var _this = this;
        this.authService.getSearchResult(title).subscribe(function (data) {
            console.log("Return from server after search request for book by title");
            console.log(data);
            _this.title = "";
            if (data != null) {
                _this.sentence = data;
                _this.numComments = data.comments.length;
                console.log("found the title");
                window.scroll(0, 0);
            }
            else {
                _this.flashMessage.show('Book not found', { cssClass: 'alert-danger', timeout: 3000 });
                window.scroll(0, 0);
                return false;
            }
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    SearchComponent.prototype.onSearchBookSubmit = function () {
        console.log("In search function on search page");
        var searchTitle = {
            title: this.title
        };
        console.log(searchTitle.title.length);
        if (searchTitle.title.length > 0) {
            this.searchBook(searchTitle.title.toLowerCase());
        }
    };
    SearchComponent.prototype.onCommentClick = function () {
        console.log("User clicked on comments icon for:");
        var commentSentence = this.sentence;
        console.log(commentSentence);
        this.router.navigate(['/comment', commentSentence]);
    };
    SearchComponent.prototype.onLikeClick = function (sentence) {
        var _this = this;
        console.log("Here are the likes" + sentence.likes);
        if (this.authService.loggedIn()) {
            console.log(this.username);
            console.log(sentence.likedBy);
            var isInArray = sentence.likedBy.includes(this.username);
            if (!isInArray) {
                var updateLikes = {
                    likeID: sentence._id,
                    likeUsername: this.username
                };
                console.log(updateLikes);
                this.authService.incrementLikes(updateLikes).subscribe(function (data) {
                    console.log(data);
                    _this.sentence = data;
                    console.log(_this.sentence);
                }, function (err) {
                    console.log(err);
                    return false;
                });
            }
            else {
                window.scroll(0, 0);
                this.flashMessage.show('Hey ' + this.username + ', you already liked this one.', { cssClass: 'alert-danger', timeout: 2000 });
                return false;
            }
        }
        else {
            window.scroll(0, 0);
            this.flashMessage.show('You must log in to like sentences', { cssClass: 'alert-danger', timeout: 2000 });
        }
    };
    SearchComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(710),
            styles: [__webpack_require__(694)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], SearchComponent);
    return SearchComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/Collier/Documents/firstlast/angular-src/src/search.component.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SentencesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SentencesComponent = (function () {
    function SentencesComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    SentencesComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("Calling service to fetch profile");
        this.authService.getProfile().subscribe(function (profile) {
            _this.enteredBy = profile.user.username;
            console.log("Profile returned from server for: " + _this.enteredBy);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    SentencesComponent.prototype.searchBook = function (title) {
        var _this = this;
        this.authService.getSearchResult(title).subscribe(function (data) {
            console.log("Return from server after search request for book by title");
            console.log(data);
            _this.title = "";
            if (data != null) {
                _this.flashMessage.show('This book is already in the database. Try another?', { cssClass: 'alert-danger', timeout: 3000 });
                console.log("found the title");
                window.scroll(0, 0);
            }
            else {
                _this.flashMessage.show('This book has not yet been added. Please add below', { cssClass: 'alert-success', timeout: 3000 });
                window.scroll(0, 0);
            }
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    SentencesComponent.prototype.onSearchBookSubmit = function () {
        console.log("In search function on search page");
        var searchTitle = {
            title: this.title
        };
        console.log(searchTitle.title.length);
        if (searchTitle.title.length > 0) {
            this.searchBook(searchTitle.title.toLowerCase());
        }
    };
    SentencesComponent.prototype.onSentencesSubmit = function () {
        var _this = this;
        this.likes = 0;
        var sentences = {
            likes: this.likes,
            //likedBy: this.likedBy,
            //dateEntered: this.dateEntered,
            //comments: this.comments, 
            enteredBy: this.enteredBy,
            bookTitle: this.bookTitle,
            searchTitle: this.bookTitle.toLowerCase(),
            authorName: this.authorName,
            firstSentence: this.firstSentence,
            lastSentence: this.lastSentence
        };
        console.log("In sentence submit with user :" + this.enteredBy + "with likes of:");
        //Required fields
        if (!this.validateService.validateSentences(sentences)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        //Check success of write to database
        this.authService.submitSentences(sentences).subscribe(function (data) {
            _this.bookTitle = "";
            _this.authorName = "";
            _this.firstSentence = "";
            _this.lastSentence = "";
            if (data.success) {
                _this.flashMessage.show('Thanks for contributing ', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/sentences']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/sentences']);
                return false;
            }
        });
    };
    SentencesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sentences',
            template: __webpack_require__(711),
            styles: [__webpack_require__(695)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], SentencesComponent);
    return SentencesComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/Collier/Documents/firstlast/angular-src/src/sentences.component.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=/Users/Collier/Documents/firstlast/angular-src/src/auth.guard.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: true
};
//# sourceMappingURL=/Users/Collier/Documents/firstlast/angular-src/src/environment.js.map

/***/ }),

/***/ 681:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 682:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 683:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, ".font-red {\n  color:red;\n}\n\n.font-grey {\n  color:grey;\n}\n\n.font-lightgrey {\n  color:lightgrey;\n}\n\n.margin-left {\n  margin-left:15px;\n}\n\n.margin-bottom {\n  margin-bottom:15px;\n}\n\n\n.titles-nolink {\n  \n  color: black;\n\n  :link {\n      color: black;\n  }\n\n  :visited {\n      color: black;\n  }\n\n  :hover {\n      color: black;\n  }\n\n  :active {\n      color: black;\n  }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 684:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, ".font-red {\n\tcolor:red;\n}\n\n.font-grey {\n\tcolor:grey;\n}\n\n.font-lightgrey {\n\tcolor:lightgrey;\n}\n\n.margin-left {\n  margin-left:15px;\n}\n\n.margin-bottom {\n  margin-bottom:15px;\n}\n\n.likes-nolink {\n  \n  color: black;\n\n  :link {\n      color: black;\n  }\n\n  :visited {\n      color: black;\n  }\n\n  :hover {\n      color: black;\n  }\n\n  :active {\n      color: black;\n  }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 685:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 686:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, ".font-red {\n\tcolor:red;\n}\n\n.font-grey {\n\tcolor:grey;\n}\n\n.font-lightgrey {\n\tcolor:lightgrey;\n}\n\n.margin-left {\n  margin-left:15px;\n}\n\n.margin-bottom {\n  margin-bottom:15px;\n}\n\n.likes-nolink {\n  \n  color: black;\n\n  :link {\n      color: black;\n  }\n\n  :visited {\n      color: black;\n  }\n\n  :hover {\n      color: black;\n  }\n\n  :active {\n      color: black;\n  }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 687:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 688:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, ".margin-bottom {\n\tmargin-bottom:15px;\n}\n\n.font-red {\n\tcolor:red;\n}\n\n.font-lightgrey {\n\tcolor:lightgrey;\n}\n\n.font-grey {\n\tcolor:grey;\n}\n\n.background-grey {\n\tbackground-color:grey;\n}\n\n.margin-left {\n\tmargin-left:15px;\n}\n\n.icon-nolink {\n  \n  color: black;\n\n  :link {\n      color: black;\n  }\n\n  :visited {\n      color: black;\n  }\n\n  :hover {\n      color: black;\n  }\n\n  :active {\n      color: black;\n  }\n\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 689:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, ".margin-bottom {\n  margin-bottom:15px;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 690:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, ".navbar-default .navbar-nav > li > a:hover, .navbar-default .navbar-nav > li > a:focus {\n    color: grey;\n}\n\n.navbar-default .navbar-brand:hover,\n.navbar-default .navbar-brand:focus {\n    color: grey;\n}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 691:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 692:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, ".font-red {\n\tcolor:red;\n}\n\n.font-grey {\n\tcolor:grey;\n}\n\n.font-lightgrey {\n\tcolor:lightgrey;\n}\n\n.margin-bottom {\n  margin-bottom:15px;}\n\n.btn:focus {\n  outline: none;\n}\n\n.margin-left {\n\tmargin-left:15px;\n}\n\n.icon-nolink {\n  \n  color: black;\n\n  :link {\n      color: black;\n  }\n\n  :visited {\n      color: black;\n  }\n\n  :hover {\n      color: black;\n  }\n\n  :active {\n      color: black;\n  }\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 693:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, ".margin-bottom {\n  margin-bottom:15px;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 694:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, ".margin-bottom {\n\tmargin-bottom:15px;\n}\n\n.font-red {\n\tcolor:red;\n}\n\n.font-lightgrey {\n\tcolor:lightgrey;\n}\n\n.font-grey {\n\tcolor:grey;\n}\n\n.background-grey {\n\tbackground-color:grey;\n}\n\n.margin-left {\n  margin-left:15px;\n}\n\n.likes-nolink {\n  \n  color: black;\n\n  :link {\n      color: black;\n  }\n\n  :visited {\n      color: black;\n  }\n\n  :hover {\n      color: black;\n  }\n\n  :active {\n      color: black;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 695:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, ".margin-bottom {\n  margin-bottom:15px;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 697:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class = \"container\">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ 698:
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class = \"row\">\n    <div class = \"col-xs-2\"></div>\n    <div class = \"col-xs-8\">\n      <h4>A good way to improve your writing is to study, and imitate, the sentences of professional writers. And writers are at their best, generally, in their first and last sentences. I created this database\nof the first and last sentences of books as a learning tool for writers and for readers who appreciate fine sentences. I hope you enjoy it. To learn more about why I created First and Last, read my <a href=\"https://medium.freecodecamp.com/write-better-sentences-and-do-javascript-crud-with-mean-while-mostly-avoiding-acronyms-fe17905bcec5\">article on Medium</a>.\n      </h4>\n    </div>\n    <div class = \"col-xs-2\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ 699:
/***/ (function(module, exports) {

module.exports = "<div>\n  <h4 class = \"text-center\">Click on a book title to see its first and last sentences</h4><br>\n</div>\n<hr>\n\n\n<div *ngFor=\"let sentence of sentences; let i = index\">\n  <h4 class=\"font-red\">\n    <a href=\"\" onClick=\"return false;\" class=\"titles-nolink\"><span (click)=\"onTitleClick(sentence, i)\">{{ sentence.bookTitle }}</span></a>\n  </h4>\n  <div *ngIf = \"showSentences && (i == sentenceIndex)\">\n    <hr> \n    <h4 class=\"font-red\">\n      {{ \"by \" + sentences[sentenceIndex].authorName }}\n    </h4>\n    <h4 class=\"font-grey\">\n      {{ sentences[sentenceIndex].firstSentence }}\n    </h4>\n    <h4 class=\"font-grey\">\n      {{ sentences[sentenceIndex].lastSentence }}\n    </h4>\n    <br>\n\n    <div class=\"row\">\n      <div class = \"col-sm-6\">\n        <div class=\"the-icons\">\n          <p><a href=\"\" onClick=\"return false;\" class=\"titles-nolink\"><span (click)=\"onLikeClick(sentences[sentenceIndex], i)\" class=\"glyphicon glyphicon-thumbs-up\"></span></a> {{ sentence.likes }}\n          <a href=\"\" onClick=\"return false;\" class=\"titles-nolink\"><span (click)=\"onCommentClick(sentences[sentenceIndex])\" class=\"glyphicon glyphicon-comment\"></span></a> {{ sentence.comments.length }}</p>\n        </div>\n      </div>\n      <div class = \"col-sm-3\"></div>\n      <div class = \"col-sm-3 font-lightgrey\"><p>added by: {{sentence.enteredBy}}</div>\n    </div>\n\n    <hr> \n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ 700:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"sentence\">\n\n  <h2 class=\"font-red\">\n    {{ sentence.bookTitle }}\n  </h2>\n  <br><hr><br>\n</div>\n\n<div *ngFor=\"let comment of comments; let i = index\">\n  \n  <p class=\"font-lightgrey\">comment by: {{comment.username}}</p>\n    <h4>\n      {{ comment.body }}\n    </h4><hr>\n</div>    \n<br>\n\n\n<h2 class=\"page-header\">Add a comment</h2>\n<form (submit)=\"onCommentSubmit()\">\n  <div class=\"form-group\">\n    <input type=\"text\" [(ngModel)]=\"inputComment\" name=\"inputComment\" class=\"form-control\"><br>\n    <input type=\"submit\" class=\"btn btn-primary pull-right\" value=\"Submit\">\n  </div>\n</form>\n\n<br><br><br><hr>\n\n<div class=\"text-center\">\n  <a class=\"btn btn-primary btn-lg margin-bottom\" [routerLink]=\"['/displayall']\">3 random entries</a>\n  <a class=\"btn btn-primary btn-lg margin-bottom\" [routerLink]=\"['/quiz']\">Quiz</a>\n  <form (submit)=\"onSearchBookSubmit()\" class=\"form-inline\" role=\"form\">\n    <div class=\"form-group has-feedback\">\n      <br>\n      <input type=\"text\" [(ngModel)]=\"searchInputTitle\" name=\"searchInputTitle\" class=\"form-control margin-bottom\" placeholder=\"Search by book title\"> \n      <button class=\"btn btn-default pull-right\">Search</button>\n    </div> \n  </form> \n</div><br><br>\n \n <div>\n    <br>\n </div>\n"

/***/ }),

/***/ 701:
/***/ (function(module, exports) {

module.exports = "<p>\n  dashboard works!\n</p>\n"

/***/ }),

/***/ 702:
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let sentence of sentences; let i = index\">\n    <h4 class=\"font-red\">\n      {{ sentence.bookTitle }}\n    </h4>\n    <h4 class=\"font-grey\">\n      by {{ sentence.authorName }} \n    </h4>\n    <br>\n    <h4>\n      {{ sentence.firstSentence }}\n    </h4>\n    <br>\n    <h4>\n      {{ sentence.lastSentence }}\n    </h4>\n    <br>\n    \n    <div class=\"row\">\n      <div class = \"col-sm-6\">\n        <div class=\"the-icons\">\n          <p><a href=\"\" onClick=\"return false;\" class=\"likes-nolink\"><span (click)=\"onLikeClick(sentence, i)\" class=\"glyphicon glyphicon-thumbs-up\"></span></a> {{ sentence.likes }}\n          <a href=\"\" onClick=\"return false;\" class=\"likes-nolink\"><span (click)=\"onCommentClick(sentence)\" class=\"glyphicon glyphicon-comment\"></span></a> {{ sentence.comments.length }}</p>\n        </div>\n      </div>\n      <div class = \"col-sm-3\"></div>\n      <div class = \"col-sm-3 font-lightgrey\"><p>added by: {{sentence.enteredBy}}</div>\n    </div>\n\n    <hr><br>\n  </div>\n\n <div class=\"text-center\">\n  <button (click)=\"ngOnInit()\" class=\"btn btn-primary btn-lg margin-bottom\">3 random entries</button>\n  <a class=\"btn btn-primary btn-lg margin-bottom\" [routerLink]=\"['/quiz']\">Quiz</a>\n  <form (submit)=\"onSearchBookSubmit()\" class=\"form-inline\" role=\"form\">\n    <div class=\"form-group has-feedback\">\n      <br>\n      <input type=\"text\" [(ngModel)]=\"title\" name=\"title\" class=\"form-control margin-bottom\" placeholder=\"Search by book title\"> \n      <button class=\"btn btn-default pull-right\">Search</button>\n    </div> \n  </form> \n</div><br><br>\n\n\n <div>\n    <br><br>\n </div>\n\n\n"

/***/ }),

/***/ 703:
/***/ (function(module, exports) {

module.exports = "<p>\n  dummy works!\n</p>\n"

/***/ }),

/***/ 704:
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"jumbotron\">\n  <h1 class=\"text-center\"> FIRST and LAST</h1>\n  <h3 class=\"text-center margin-bottom\">A collection of first and last sentences</h3>\n  <h4 class=\"text-center margin-bottom\">Please help grow this collection</h4>\n  <h4 class=\"text-center margin-bottom\">Register and add sentences from your favourite books</h4> \n  <h4 class=\"text-center margin-bottom\">Or even not-so-great books</h4>\n  <h4 class=\"text-center margin-bottom\">Or even books by Stephenie Meyer</h4>\n</div>\n\n<div>\n  <h4 class = \"text-center\">There are first and last sentences from <span class=\"font-red\">{{size}} </span> books in First and Last</h4><br>\n</div>\n\n\n<div class=\"text-center\">\n  <a class=\"btn btn-primary btn-lg margin-bottom\" [routerLink]=\"['/displayall']\">3 random entries</a>\n  <a class=\"btn btn-primary btn-lg margin-bottom\" [routerLink]=\"['/quiz']\">Quiz</a>\n  <form (submit)=\"onSearchBookSubmit()\" class=\"form-inline\" role=\"form\">\n    <div class=\"form-group has-feedback\">\n      <br>\n      <input type=\"text\" [(ngModel)]=\"title\" name=\"title\" class=\"form-control margin-bottom\" placeholder=\"Search by book title\"> \n      <button class=\"btn btn-default pull-right\">Search</button>\n    </div> \n  </form> \n</div><br><br>\n\n\n <div>\n    <br>\n </div>\n\n\n\n"

/***/ }),

/***/ 705:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Login</h2>\n<form (submit)=\"onLoginSubmit()\">\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control margin-bottom\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control margin-bottom\">\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n  </div>\n</form>\n"

/***/ }),

/***/ 706:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n      <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\" (click)=\"toggleState()\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <a (click)=\"onRefreshHome()\" class=\"navbar-brand\" href=\"#\">First and Last</a>\n        </div>\n        <div id=\"navbar\" class=\"collapse navbar-collapse\" [ngClass]=\"{'in': isIn}\">\n          \n          <ul class=\"nav navbar-nav navbar-right\">\n            <li [routerLinkActive] = \"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"> <a (click)=\"onRefreshHome()\" [routerLink]=\"['/']\">Home</a></li>\n            <li [routerLinkActive] = \"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"> <a [routerLink]=\"['/alltitles']\">Full List</a></li>\n            <li *ngIf=\"authService.loggedIn()\" [routerLinkActive] = \"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"> <a [routerLink]=\"['/sentences']\">Add Sentences</a></li>\n            <!--<li *ngIf=\"authService.loggedIn()\" [routerLinkActive] = \"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"> <a [routerLink]=\"['/profile']\">Profile</a></li>a-->\n            <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive] = \"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"> <a [routerLink]=\"['/login']\">Login</a></li>\n            <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive] = \"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"> <a [routerLink]=\"['/register']\">Register</a></li>\n            <li *ngIf=\"authService.loggedIn()\"> <a (click)=\"onLogoutClick()\" href=\"\">Logout</a></li>\n            <li [routerLinkActive] = \"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"> <a [routerLink]=\"['/about']\">About</a></li>\n          </ul>\n        </div><!--/.nav-collapse -->\n      </div>\n    </nav>"

/***/ }),

/***/ 707:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n\t<h2 class = \"page-header\">{{user.name}}</h2>\n\t<ul class=\"list-group\">\n\t\t<li class=\"list-group-item\">Username: {{user.username}}</li>\n\t\t<li class=\"list-group-item\">Email: {{user.email}}</li>\n\t</ul>\n</div>\n\n\n"

/***/ }),

/***/ 708:
/***/ (function(module, exports) {

module.exports = "\n<h3 class=\"text-center margin-bottom\">These sentences are from which book?</h3><br>\n\n\n<div *ngIf=\"sentences\">\n    <h4><hr>\n      {{ sentences[sentenceIndex].firstSentence }} \n    </h4><br>\n    <h4>\n       {{ sentences[sentenceIndex].lastSentence }} \n    </h4><hr>\n</div><br>\n\n<div *ngIf=\"streak >= 1\">\n  <h4 class = \"text-center\"> <span class=\"font-red\"> {{streak}} </span> correct answers in a row</h4><br>\n</div><br>\n\n<div *ngIf=\"sentences\" class=\"text-center\">\n  <button (click)=\"onClickOne()\" class=\"btn btn-default btn-lg margin-bottom\" onclick=\"this.blur();\">{{sentences[index0].bookTitle}}</button>\n  <button (click)=\"onClickTwo()\" class=\"btn btn-default btn-lg margin-bottom\" onclick=\"this.blur();\">{{sentences[index1].bookTitle}}</button>\n  <button (click)=\"onClickThree()\" class=\"btn btn-default btn-lg margin-bottom\" onclick=\"this.blur();\">{{sentences[index2].bookTitle}}</button>\n</div>\n<br>\n\n\n<hr><br><br>\n\n\n  <div class=\"text-center\">\n  <a class=\"btn btn-primary btn-lg margin-bottom\" [routerLink]=\"['/displayall']\">3 random entries</a>\n  <button (click)=\"onResetQuiz()\" class=\"btn btn-primary btn-lg margin-bottom\">Quiz</button>\n  <form (submit)=\"onSearchBookSubmit()\" class=\"form-inline\" role=\"form\">\n    <div class=\"form-group has-feedback\">\n      <br>\n      <input type=\"text\" [(ngModel)]=\"title\" name=\"title\" class=\"form-control margin-bottom\" placeholder=\"Search by book title\"> \n      <button class=\"btn btn-default pull-right\">Search</button>\n    </div> \n  </form> \n</div><br><br>\n\n\n <div>\n    <br><br>\n </div>"

/***/ }),

/***/ 709:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Register</h2>\n<form (submit)=\"onRegisterSubmit()\">\n  <div class=\"form-group\">\n    <!--<label>Name</label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control margin-bottom\">-->\n    <label>Username</label>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control margin-bottom\">\n    <!--<label>Email</label>\n    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control margin-bottom\">-->\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control margin-bottom\">\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n  </div>\n</form>\n\n"

/***/ }),

/***/ 710:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"sentence\">\n\n  <h4 class=\"font-red\">\n    {{ sentence.bookTitle }}\n  </h4>\n  <h4 class=\"font-grey\">\n    by {{ sentence.authorName }} \n  </h4>\n  <br>\n  <h4>\n    {{ sentence.firstSentence }}\n  </h4>\n  <br>\n  <h4>\n    {{ sentence.lastSentence }}\n  </h4>\n  <br>\n    \n  <div class=\"row\">\n    <div class = \"col-sm-6\">\n      <div class=\"the-icons\">\n        <p><a href=\"\" onClick=\"return false;\" class=\"likes-nolink\"><span (click)=\"onLikeClick(sentence)\" class=\"glyphicon glyphicon-thumbs-up\"></span></a> {{ sentence.likes }}\n        <a href=\"\" onClick=\"return false;\" class=\"likes-nolink\"><span (click)=\"onCommentClick()\" class=\"glyphicon glyphicon-comment\"></span></a> {{ numComments }}</p>\n      </div>\n    </div>\n    <div class = \"col-sm-3\"></div>\n    <div class = \"col-sm-3 font-lightgrey\"><p>added by: {{sentence.enteredBy}}</div>\n  </div><hr><br>\n</div>\n\n<div class=\"text-center\">\n  <a class=\"btn btn-primary btn-lg margin-bottom\" [routerLink]=\"['/displayall']\">3 random entries</a>\n  <a class=\"btn btn-primary btn-lg margin-bottom\" [routerLink]=\"['/quiz']\">Quiz</a>\n  <form (submit)=\"onSearchBookSubmit()\" class=\"form-inline\" role=\"form\">\n    <div class=\"form-group has-feedback\">\n      <br>\n      <input type=\"text\" [(ngModel)]=\"title\" name=\"title\" class=\"form-control margin-bottom\" placeholder=\"Search by book title\"> \n      <button class=\"btn btn-default pull-right\">Search</button>\n    </div> \n  </form> \n</div><br><br>\n \n <div>\n    <br>\n </div>\n"

/***/ }),

/***/ 711:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Enter first and last sentences</h2>\n\n<p>Check if book is already in database before filling out the form below</p>\n<form (submit)=\"onSearchBookSubmit()\" class=\"form-inline\" role=\"form\">\n  <div class=\"form-group has-feedback\">\n    <br>\n      <input type=\"text\" [(ngModel)]=\"title\" name=\"title\" class=\"form-control margin-bottom\" placeholder=\"Search by book title\"> \n      <button class=\"btn btn-default pull-right\">Search</button>\n  </div> \n</form><br><br> \n\n\n<form (submit)=\"onSentencesSubmit()\">\n  <div class=\"form-group\">\n    <label>Book Title</label>\n    <input type=\"text\" [(ngModel)]=\"bookTitle\" name=\"bookTitle\" class=\"form-control margin-bottom\">\n    <label>Author Name</label>\n    <input type=\"text\" [(ngModel)]=\"authorName\" name=\"authorName\" class=\"form-control margin-bottom\">\n    <label>First Sentence</label>\n    <input type=\"text\" [(ngModel)]=\"firstSentence\" name=\"firstSentence\" class=\"form-control margin-bottom\">\n    <label>Last Sentence</label>\n    <input type=\"text\" [(ngModel)]=\"lastSentence\" name=\"lastSentence\" class=\"form-control margin-bottom\">\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n  </div>\n</form>\n\n\n"

/***/ }),

/***/ 732:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(390);


/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        console.log("Validating registration form");
        //if(user.name == undefined || user.email == undefined || user.name == undefined || user.password == undefined) {
        if (user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateSentences = function (sentences) {
        console.log("Validating sentence submission form");
        if (sentences.bookTitle == undefined || sentences.authorName == undefined || sentences.firstSentence == undefined || sentences.lastSentence == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        console.log("Validating email address in registration form");
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ValidateService);
    return ValidateService;
}());
//# sourceMappingURL=/Users/Collier/Documents/firstlast/angular-src/src/validate.service.js.map

/***/ })

},[732]);
//# sourceMappingURL=main.bundle.js.map