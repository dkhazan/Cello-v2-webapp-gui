function _defineProperties(l,n){for(var u=0;u<n.length;u++){var e=n[u];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(l,e.key,e)}}function _createClass(l,n,u){return n&&_defineProperties(l.prototype,n),u&&_defineProperties(l,u),l}function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{mH0F:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J"),i=function l(){_classCallCheck(this,l)},a=u("pMnS"),o=u("MKJQ"),t=u("sZkV"),s=u("/9oy"),b=u("kWWo"),r=u("iInd"),p=u("yTNM"),c=u("s7LF"),g=function(){function l(n,u,e){_classCallCheck(this,l),this.api=n,this.router=u,this.formBuilder=e,this.form=this.formBuilder.group({name:new c.c(null),institution:new c.c(null),username:new c.c(null,c.m.compose([c.m.required,c.m.pattern("^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$")])),password:new c.c(null,c.m.required)})}return _createClass(l,[{key:"ngOnInit",value:function(){}},{key:"signup",value:function(){var l=this;this.api.signup(this.form.value).subscribe((function(n){var u=n.headers.get("Authorization");l.api.setLoginInfo(u),l.router.navigateByUrl("projects")}),(function(l){}))}}]),l}(),d=e.nb({encapsulation:0,styles:[["#logo[_ngcontent-%COMP%]{height:200px}"]],data:{}});function h(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,3,"ion-header",[],null,null,null,o.R,o.n)),e.ob(1,49152,null,0,t.A,[e.h,e.k,e.x],null,null),(l()(),e.pb(2,0,null,0,1,"app-navbar",[],null,null,null,s.b,s.a)),e.ob(3,114688,null,0,b.a,[t.Cb,t.Db,r.m,p.a,t.Gb],null,null),(l()(),e.pb(4,0,null,null,62,"ion-content",[["class","ion-padding"]],null,null,null,o.N,o.j)),e.ob(5,49152,null,0,t.t,[e.h,e.k,e.x],null,null),(l()(),e.pb(6,0,null,0,60,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,u){var i=!0;return"submit"===n&&(i=!1!==e.Bb(l,8).onSubmit(u)&&i),"reset"===n&&(i=!1!==e.Bb(l,8).onReset()&&i),i}),null,null)),e.ob(7,16384,null,0,c.q,[],null,null),e.ob(8,540672,null,0,c.e,[[8,null],[8,null]],{form:[0,"form"]},null),e.Fb(2048,null,c.a,null,[c.e]),e.ob(10,16384,null,0,c.j,[[4,c.a]],null,null),(l()(),e.pb(11,0,null,null,55,"ion-grid",[],null,null,null,o.Q,o.m)),e.ob(12,49152,null,0,t.z,[e.h,e.k,e.x],null,null),(l()(),e.pb(13,0,null,0,53,"ion-row",[],null,null,null,o.X,o.t)),e.ob(14,49152,null,0,t.fb,[e.h,e.k,e.x],null,null),(l()(),e.pb(15,0,null,0,51,"ion-col",[["class","ion-text-center"],["offset-md","3"],["offset-sm","1"],["size-md","6"],["size-sm","10"]],null,null,null,o.M,o.i)),e.ob(16,49152,null,0,t.s,[e.h,e.k,e.x],null,null),(l()(),e.pb(17,0,null,0,0,"img",[["id","logo"],["src","assets/images/logo.png"]],null,null,null,null,null)),(l()(),e.pb(18,0,null,0,44,"ion-card",[],null,null,null,o.K,o.e)),e.ob(19,49152,null,0,t.l,[e.h,e.k,e.x],null,null),(l()(),e.pb(20,0,null,0,42,"ion-card-content",[],null,null,null,o.I,o.f)),e.ob(21,49152,null,0,t.m,[e.h,e.k,e.x],null,null),(l()(),e.pb(22,0,null,0,2,"ion-card-title",[],null,null,null,o.J,o.g)),e.ob(23,49152,null,0,t.p,[e.h,e.k,e.x],null,null),(l()(),e.Ib(-1,0,["Sign up"])),(l()(),e.pb(25,0,null,0,37,"ion-list",[],null,null,null,o.W,o.s)),e.ob(26,49152,null,0,t.N,[e.h,e.k,e.x],null,null),(l()(),e.pb(27,0,null,0,8,"ion-item",[],null,null,null,o.U,o.q)),e.ob(28,49152,null,0,t.G,[e.h,e.k,e.x],null,null),(l()(),e.pb(29,0,null,0,6,"ion-input",[["formControlName","name"],["placeholder","Name (optional)"],["spellcheck","false"],["type","name"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var i=!0;return"ionBlur"===n&&(i=!1!==e.Bb(l,30)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==e.Bb(l,30)._handleInputEvent(u.target)&&i),i}),o.T,o.p)),e.ob(30,16384,null,0,t.Kb,[e.k],null,null),e.Fb(1024,null,c.g,(function(l){return[l]}),[t.Kb]),e.ob(32,671744,null,0,c.d,[[3,c.a],[8,null],[8,null],[6,c.g],[2,c.p]],{name:[0,"name"]},null),e.Fb(2048,null,c.h,null,[c.d]),e.ob(34,16384,null,0,c.i,[[4,c.h]],null,null),e.ob(35,49152,null,0,t.F,[e.h,e.k,e.x],{placeholder:[0,"placeholder"],spellcheck:[1,"spellcheck"],type:[2,"type"]},null),(l()(),e.pb(36,0,null,0,8,"ion-item",[],null,null,null,o.U,o.q)),e.ob(37,49152,null,0,t.G,[e.h,e.k,e.x],null,null),(l()(),e.pb(38,0,null,0,6,"ion-input",[["formControlName","institution"],["placeholder","Institution (optional)"],["spellcheck","false"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var i=!0;return"ionBlur"===n&&(i=!1!==e.Bb(l,39)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==e.Bb(l,39)._handleInputEvent(u.target)&&i),i}),o.T,o.p)),e.ob(39,16384,null,0,t.Kb,[e.k],null,null),e.Fb(1024,null,c.g,(function(l){return[l]}),[t.Kb]),e.ob(41,671744,null,0,c.d,[[3,c.a],[8,null],[8,null],[6,c.g],[2,c.p]],{name:[0,"name"]},null),e.Fb(2048,null,c.h,null,[c.d]),e.ob(43,16384,null,0,c.i,[[4,c.h]],null,null),e.ob(44,49152,null,0,t.F,[e.h,e.k,e.x],{placeholder:[0,"placeholder"],spellcheck:[1,"spellcheck"],type:[2,"type"]},null),(l()(),e.pb(45,0,null,0,8,"ion-item",[],null,null,null,o.U,o.q)),e.ob(46,49152,null,0,t.G,[e.h,e.k,e.x],null,null),(l()(),e.pb(47,0,null,0,6,"ion-input",[["formControlName","username"],["placeholder","Email"],["spellcheck","false"],["type","email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var i=!0;return"ionBlur"===n&&(i=!1!==e.Bb(l,48)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==e.Bb(l,48)._handleInputEvent(u.target)&&i),i}),o.T,o.p)),e.ob(48,16384,null,0,t.Kb,[e.k],null,null),e.Fb(1024,null,c.g,(function(l){return[l]}),[t.Kb]),e.ob(50,671744,null,0,c.d,[[3,c.a],[8,null],[8,null],[6,c.g],[2,c.p]],{name:[0,"name"]},null),e.Fb(2048,null,c.h,null,[c.d]),e.ob(52,16384,null,0,c.i,[[4,c.h]],null,null),e.ob(53,49152,null,0,t.F,[e.h,e.k,e.x],{placeholder:[0,"placeholder"],spellcheck:[1,"spellcheck"],type:[2,"type"]},null),(l()(),e.pb(54,0,null,0,8,"ion-item",[],null,null,null,o.U,o.q)),e.ob(55,49152,null,0,t.G,[e.h,e.k,e.x],null,null),(l()(),e.pb(56,0,null,0,6,"ion-input",[["formControlName","password"],["placeholder","Password"],["spellcheck","false"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var i=!0;return"ionBlur"===n&&(i=!1!==e.Bb(l,57)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==e.Bb(l,57)._handleInputEvent(u.target)&&i),i}),o.T,o.p)),e.ob(57,16384,null,0,t.Kb,[e.k],null,null),e.Fb(1024,null,c.g,(function(l){return[l]}),[t.Kb]),e.ob(59,671744,null,0,c.d,[[3,c.a],[8,null],[8,null],[6,c.g],[2,c.p]],{name:[0,"name"]},null),e.Fb(2048,null,c.h,null,[c.d]),e.ob(61,16384,null,0,c.i,[[4,c.h]],null,null),e.ob(62,49152,null,0,t.F,[e.h,e.k,e.x],{placeholder:[0,"placeholder"],spellcheck:[1,"spellcheck"],type:[2,"type"]},null),(l()(),e.pb(63,0,null,0,3,"div",[["class","ion-padding"]],null,null,null,null,null)),(l()(),e.pb(64,0,null,null,2,"ion-button",[],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.signup()&&e),e}),o.G,o.c)),e.ob(65,49152,null,0,t.j,[e.h,e.k,e.x],{disabled:[0,"disabled"]},null),(l()(),e.Ib(-1,0,["Sign up"]))],(function(l,n){var u=n.component;l(n,3,0),l(n,8,0,u.form),l(n,32,0,"name"),l(n,35,0,"Name (optional)","false","name"),l(n,41,0,"institution"),l(n,44,0,"Institution (optional)","false","text"),l(n,50,0,"username"),l(n,53,0,"Email","false","email"),l(n,59,0,"password"),l(n,62,0,"Password","false","password"),l(n,65,0,!u.form.valid)}),(function(l,n){l(n,6,0,e.Bb(n,10).ngClassUntouched,e.Bb(n,10).ngClassTouched,e.Bb(n,10).ngClassPristine,e.Bb(n,10).ngClassDirty,e.Bb(n,10).ngClassValid,e.Bb(n,10).ngClassInvalid,e.Bb(n,10).ngClassPending),l(n,29,0,e.Bb(n,34).ngClassUntouched,e.Bb(n,34).ngClassTouched,e.Bb(n,34).ngClassPristine,e.Bb(n,34).ngClassDirty,e.Bb(n,34).ngClassValid,e.Bb(n,34).ngClassInvalid,e.Bb(n,34).ngClassPending),l(n,38,0,e.Bb(n,43).ngClassUntouched,e.Bb(n,43).ngClassTouched,e.Bb(n,43).ngClassPristine,e.Bb(n,43).ngClassDirty,e.Bb(n,43).ngClassValid,e.Bb(n,43).ngClassInvalid,e.Bb(n,43).ngClassPending),l(n,47,0,e.Bb(n,52).ngClassUntouched,e.Bb(n,52).ngClassTouched,e.Bb(n,52).ngClassPristine,e.Bb(n,52).ngClassDirty,e.Bb(n,52).ngClassValid,e.Bb(n,52).ngClassInvalid,e.Bb(n,52).ngClassPending),l(n,56,0,e.Bb(n,61).ngClassUntouched,e.Bb(n,61).ngClassTouched,e.Bb(n,61).ngClassPristine,e.Bb(n,61).ngClassDirty,e.Bb(n,61).ngClassValid,e.Bb(n,61).ngClassInvalid,e.Bb(n,61).ngClassPending)}))}var m=e.lb("app-signup",g,(function(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,1,"app-signup",[],null,null,null,h,d)),e.ob(1,114688,null,0,g,[p.a,r.m,c.b],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),f=u("SVse"),B=function l(){_classCallCheck(this,l)},C=u("/NTo");u.d(n,"SignupPageModuleNgFactory",(function(){return k}));var k=e.mb(i,[],(function(l){return e.yb([e.zb(512,e.j,e.X,[[8,[a.a,m]],[3,e.j],e.v]),e.zb(4608,f.m,f.l,[e.s,[2,f.y]]),e.zb(4608,c.o,c.o,[]),e.zb(4608,t.b,t.b,[e.x,e.g]),e.zb(4608,t.Db,t.Db,[t.b,e.j,e.p]),e.zb(4608,t.Hb,t.Hb,[t.b,e.j,e.p]),e.zb(4608,c.b,c.b,[]),e.zb(1073742336,f.c,f.c,[]),e.zb(1073742336,c.n,c.n,[]),e.zb(1073742336,c.f,c.f,[]),e.zb(1073742336,t.Ab,t.Ab,[]),e.zb(1073742336,r.o,r.o,[[2,r.t],[2,r.m]]),e.zb(1073742336,B,B,[]),e.zb(1073742336,C.a,C.a,[]),e.zb(1073742336,c.l,c.l,[]),e.zb(1073742336,i,i,[]),e.zb(1024,r.k,(function(){return[[{path:"",component:g}]]}),[])])}))}}]);