(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"3F3D":function(l,n,t){"use strict";t.r(n);var e=t("8Y7J");class u{}var i=t("pMnS"),o=t("MKJQ"),a=t("sZkV"),r=t("s7LF"),p=t("SVse"),c=t("QvXa");class g{constructor(l){this.project=l}ngOnInit(){}applications(){return Array.from(this.project.project.settings.applications.keys())}application(){return this.project.project.settings.application}stages(){return Array.from(this.project.project.settings.applications.get(this.project.project.settings.application).keys())}algorithms(l){return Array.from(this.project.project.settings.applications.get(this.application()).get(l).parameters.keys())}algorithm(l){return this.project.project.settings.applications.get(this.application()).get(l).algorithm}parameters(l,n){return Array.from(this.project.project.settings.applications.get(this.application()).get(l).parameters.get(n).keys())}parameterValue(l,n,t){return console.log(!0),this.project.project.settings.applications.get(this.application()).get(l).parameters.get(n).get(t)}typeOf(l){return typeof l}}var s=e.nb({encapsulation:0,styles:[[".application-label[_ngcontent-%COMP%]{font-weight:700}.stage-label[_ngcontent-%COMP%]{font-style:italic}.parameter-label[_ngcontent-%COMP%]{font-size:small;padding-left:2em}ion-input[_ngcontent-%COMP%]{text-align:right}"]],data:{}});function b(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,2,"ion-select-option",[],null,null,null,o.ab,o.x)),e.ob(1,49152,null,0,a.kb,[e.h,e.k,e.x],{value:[0,"value"]},null),(l()(),e.Ib(2,0,["",""]))],(function(l,n){l(n,1,0,e.tb(1,"",n.context.$implicit,""))}),(function(l,n){l(n,2,0,n.context.$implicit)}))}function h(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,2,"ion-select-option",[],null,null,null,o.ab,o.x)),e.ob(1,49152,null,0,a.kb,[e.h,e.k,e.x],{value:[0,"value"]},null),(l()(),e.Ib(2,0,["",""]))],(function(l,n){l(n,1,0,e.tb(1,"",n.context.$implicit,""))}),(function(l,n){l(n,2,0,n.context.$implicit)}))}function m(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,6,"ion-input",[["class","ion-text-right"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,t){var u=!0,i=l.component;return"ionBlur"===n&&(u=!1!==e.Bb(l,1)._handleBlurEvent(t.target)&&u),"ionChange"===n&&(u=!1!==e.Bb(l,1)._handleIonChange(t.target)&&u),"ngModelChange"===n&&(u=!1!==i.project.project.settings.applications.get(i.application()).get(l.parent.parent.context.$implicit).parameters.get(i.algorithm(l.parent.parent.context.$implicit)).set(l.parent.context.$implicit,t)&&u),u}),o.T,o.p)),e.ob(1,16384,null,0,a.Fb,[e.k],null,null),e.Fb(1024,null,r.g,(function(l){return[l]}),[a.Fb]),e.ob(3,671744,null,0,r.k,[[8,null],[8,null],[8,null],[6,r.g]],{model:[0,"model"]},{update:"ngModelChange"}),e.Fb(2048,null,r.h,null,[r.k]),e.ob(5,16384,null,0,r.i,[[4,r.h]],null,null),e.ob(6,49152,null,0,a.F,[e.h,e.k,e.x],{type:[0,"type"]},null)],(function(l,n){var t=n.component;l(n,3,0,t.parameterValue(n.parent.parent.context.$implicit,t.algorithm(n.parent.parent.context.$implicit),n.parent.context.$implicit)),l(n,6,0,"number")}),(function(l,n){l(n,0,0,e.Bb(n,5).ngClassUntouched,e.Bb(n,5).ngClassTouched,e.Bb(n,5).ngClassPristine,e.Bb(n,5).ngClassDirty,e.Bb(n,5).ngClassValid,e.Bb(n,5).ngClassInvalid,e.Bb(n,5).ngClassPending)}))}function d(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,6,"ion-input",[["class","ion-text-right"],["type","string"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,t){var u=!0,i=l.component;return"ionBlur"===n&&(u=!1!==e.Bb(l,1)._handleBlurEvent(t.target)&&u),"ionChange"===n&&(u=!1!==e.Bb(l,1)._handleInputEvent(t.target)&&u),"ngModelChange"===n&&(u=!1!==i.project.project.settings.applications.get(i.application()).get(l.parent.parent.context.$implicit).parameters.get(i.algorithm(l.parent.parent.context.$implicit)).set(l.parent.context.$implicit,t)&&u),u}),o.T,o.p)),e.ob(1,16384,null,0,a.Kb,[e.k],null,null),e.Fb(1024,null,r.g,(function(l){return[l]}),[a.Kb]),e.ob(3,671744,null,0,r.k,[[8,null],[8,null],[8,null],[6,r.g]],{model:[0,"model"]},{update:"ngModelChange"}),e.Fb(2048,null,r.h,null,[r.k]),e.ob(5,16384,null,0,r.i,[[4,r.h]],null,null),e.ob(6,49152,null,0,a.F,[e.h,e.k,e.x],{type:[0,"type"]},null)],(function(l,n){var t=n.component;l(n,3,0,t.parameterValue(n.parent.parent.context.$implicit,t.algorithm(n.parent.parent.context.$implicit),n.parent.context.$implicit)),l(n,6,0,"string")}),(function(l,n){l(n,0,0,e.Bb(n,5).ngClassUntouched,e.Bb(n,5).ngClassTouched,e.Bb(n,5).ngClassPristine,e.Bb(n,5).ngClassDirty,e.Bb(n,5).ngClassValid,e.Bb(n,5).ngClassInvalid,e.Bb(n,5).ngClassPending)}))}function f(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,6,"ion-checkbox",[["class","ion-text-right"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,t){var u=!0,i=l.component;return"ionBlur"===n&&(u=!1!==e.Bb(l,1)._handleBlurEvent(t.target)&&u),"ionChange"===n&&(u=!1!==e.Bb(l,1)._handleIonChange(t.target)&&u),"ngModelChange"===n&&(u=!1!==i.project.project.settings.applications.get(i.application()).get(l.parent.parent.context.$implicit).parameters.get(i.algorithm(l.parent.parent.context.$implicit)).set(l.parent.context.$implicit,t)&&u),u}),o.L,o.h)),e.ob(1,16384,null,0,a.c,[e.k],null,null),e.Fb(1024,null,r.g,(function(l){return[l]}),[a.c]),e.ob(3,671744,null,0,r.k,[[8,null],[8,null],[8,null],[6,r.g]],{model:[0,"model"]},{update:"ngModelChange"}),e.Fb(2048,null,r.h,null,[r.k]),e.ob(5,16384,null,0,r.i,[[4,r.h]],null,null),e.ob(6,49152,null,0,a.q,[e.h,e.k,e.x],null,null)],(function(l,n){var t=n.component;l(n,3,0,t.parameterValue(n.parent.parent.context.$implicit,t.algorithm(n.parent.parent.context.$implicit),n.parent.context.$implicit))}),(function(l,n){l(n,0,0,e.Bb(n,5).ngClassUntouched,e.Bb(n,5).ngClassTouched,e.Bb(n,5).ngClassPristine,e.Bb(n,5).ngClassDirty,e.Bb(n,5).ngClassValid,e.Bb(n,5).ngClassInvalid,e.Bb(n,5).ngClassPending)}))}function x(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,11,"div",[],null,null,null,null,null)),(l()(),e.pb(1,0,null,null,10,"ion-item",[],null,null,null,o.U,o.q)),e.ob(2,49152,null,0,a.G,[e.h,e.k,e.x],null,null),(l()(),e.pb(3,0,null,0,2,"ion-label",[["class","parameter-label"]],null,null,null,o.V,o.r)),e.ob(4,49152,null,0,a.M,[e.h,e.k,e.x],null,null),(l()(),e.Ib(5,0,["",""])),(l()(),e.eb(16777216,null,0,1,null,m)),e.ob(7,16384,null,0,p.k,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.eb(16777216,null,0,1,null,d)),e.ob(9,16384,null,0,p.k,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.eb(16777216,null,0,1,null,f)),e.ob(11,16384,null,0,p.k,[e.M,e.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var t=n.component;l(n,7,0,"number"==t.typeOf(t.parameterValue(n.parent.context.$implicit,t.algorithm(n.parent.context.$implicit),n.context.$implicit))),l(n,9,0,"string"==t.typeOf(t.parameterValue(n.parent.context.$implicit,t.algorithm(n.parent.context.$implicit),n.context.$implicit))),l(n,11,0,"boolean"==t.typeOf(t.parameterValue(n.parent.context.$implicit,t.algorithm(n.parent.context.$implicit),n.context.$implicit)))}),(function(l,n){l(n,5,0,n.context.$implicit)}))}function C(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,16,"div",[],null,null,null,null,null)),(l()(),e.pb(1,0,null,null,13,"ion-item",[],null,null,null,o.U,o.q)),e.ob(2,49152,null,0,a.G,[e.h,e.k,e.x],null,null),(l()(),e.pb(3,0,null,0,2,"ion-label",[["class","stage-label"]],null,null,null,o.V,o.r)),e.ob(4,49152,null,0,a.M,[e.h,e.k,e.x],null,null),(l()(),e.Ib(5,0,["",""])),(l()(),e.pb(6,0,null,0,8,"ion-select",[["interface","popover"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,t){var u=!0,i=l.component;return"ionBlur"===n&&(u=!1!==e.Bb(l,7)._handleBlurEvent(t.target)&&u),"ionChange"===n&&(u=!1!==e.Bb(l,7)._handleChangeEvent(t.target)&&u),"ngModelChange"===n&&(u=!1!==(i.project.project.settings.applications.get(i.application()).get(l.context.$implicit).algorithm=t)&&u),u}),o.bb,o.w)),e.ob(7,16384,null,0,a.Jb,[e.k],null,null),e.Fb(1024,null,r.g,(function(l){return[l]}),[a.Jb]),e.ob(9,671744,null,0,r.k,[[8,null],[8,null],[8,null],[6,r.g]],{model:[0,"model"]},{update:"ngModelChange"}),e.Fb(2048,null,r.h,null,[r.k]),e.ob(11,16384,null,0,r.i,[[4,r.h]],null,null),e.ob(12,49152,null,0,a.jb,[e.h,e.k,e.x],{interface:[0,"interface"]},null),(l()(),e.eb(16777216,null,0,1,null,h)),e.ob(14,278528,null,0,p.j,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null),(l()(),e.eb(16777216,null,null,1,null,x)),e.ob(16,278528,null,0,p.j,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var t=n.component;l(n,9,0,t.project.project.settings.applications.get(t.application()).get(n.context.$implicit).algorithm),l(n,12,0,"popover"),l(n,14,0,t.algorithms(n.context.$implicit)),l(n,16,0,t.parameters(n.context.$implicit,t.algorithm(n.context.$implicit)))}),(function(l,n){l(n,5,0,n.context.$implicit),l(n,6,0,e.Bb(n,11).ngClassUntouched,e.Bb(n,11).ngClassTouched,e.Bb(n,11).ngClassPristine,e.Bb(n,11).ngClassDirty,e.Bb(n,11).ngClassValid,e.Bb(n,11).ngClassInvalid,e.Bb(n,11).ngClassPending)}))}function B(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,35,"ion-content",[],null,null,null,o.N,o.j)),e.ob(1,49152,null,0,a.t,[e.h,e.k,e.x],null,null),(l()(),e.pb(2,0,null,0,33,"ion-grid",[],null,null,null,o.Q,o.m)),e.ob(3,49152,null,0,a.z,[e.h,e.k,e.x],null,null),(l()(),e.pb(4,0,null,0,7,"ion-row",[],null,null,null,o.X,o.t)),e.ob(5,49152,null,0,a.fb,[e.h,e.k,e.x],null,null),(l()(),e.pb(6,0,null,0,5,"ion-col",[],null,null,null,o.M,o.i)),e.ob(7,49152,null,0,a.s,[e.h,e.k,e.x],null,null),(l()(),e.pb(8,0,null,0,3,"ion-text",[["class","ion-text-center"],["color","medium"]],null,null,null,o.fb,o.B)),e.ob(9,49152,null,0,a.tb,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.pb(10,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Advanced settings"])),(l()(),e.pb(12,0,null,0,23,"ion-row",[],null,null,null,o.X,o.t)),e.ob(13,49152,null,0,a.fb,[e.h,e.k,e.x],null,null),(l()(),e.pb(14,0,null,0,21,"ion-col",[["class","ion-text-center"],["offset-lg","4"],["offset-md","2"],["offset-sm","0"],["size-lg","4"],["size-md","8"],["size-sm","12"]],null,null,null,o.M,o.i)),e.ob(15,49152,null,0,a.s,[e.h,e.k,e.x],null,null),(l()(),e.pb(16,0,null,0,19,"ion-card",[],null,null,null,o.K,o.e)),e.ob(17,49152,null,0,a.l,[e.h,e.k,e.x],null,null),(l()(),e.pb(18,0,null,0,17,"ion-list",[],null,null,null,o.W,o.s)),e.ob(19,49152,null,0,a.N,[e.h,e.k,e.x],null,null),(l()(),e.pb(20,0,null,0,13,"ion-item",[],null,null,null,o.U,o.q)),e.ob(21,49152,null,0,a.G,[e.h,e.k,e.x],null,null),(l()(),e.pb(22,0,null,0,2,"ion-label",[["class","application-label"]],null,null,null,o.V,o.r)),e.ob(23,49152,null,0,a.M,[e.h,e.k,e.x],null,null),(l()(),e.Ib(-1,0,["Application"])),(l()(),e.pb(25,0,null,0,8,"ion-select",[["interface","popover"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,t){var u=!0,i=l.component;return"ionBlur"===n&&(u=!1!==e.Bb(l,26)._handleBlurEvent(t.target)&&u),"ionChange"===n&&(u=!1!==e.Bb(l,26)._handleChangeEvent(t.target)&&u),"ngModelChange"===n&&(u=!1!==(i.project.project.settings.application=t)&&u),u}),o.bb,o.w)),e.ob(26,16384,null,0,a.Jb,[e.k],null,null),e.Fb(1024,null,r.g,(function(l){return[l]}),[a.Jb]),e.ob(28,671744,null,0,r.k,[[8,null],[8,null],[8,null],[6,r.g]],{model:[0,"model"]},{update:"ngModelChange"}),e.Fb(2048,null,r.h,null,[r.k]),e.ob(30,16384,null,0,r.i,[[4,r.h]],null,null),e.ob(31,49152,null,0,a.jb,[e.h,e.k,e.x],{interface:[0,"interface"]},null),(l()(),e.eb(16777216,null,0,1,null,b)),e.ob(33,278528,null,0,p.j,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null),(l()(),e.eb(16777216,null,0,1,null,C)),e.ob(35,278528,null,0,p.j,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var t=n.component;l(n,9,0,"medium"),l(n,28,0,t.project.project.settings.application),l(n,31,0,"popover"),l(n,33,0,t.applications()),l(n,35,0,t.stages())}),(function(l,n){l(n,25,0,e.Bb(n,30).ngClassUntouched,e.Bb(n,30).ngClassTouched,e.Bb(n,30).ngClassPristine,e.Bb(n,30).ngClassDirty,e.Bb(n,30).ngClassValid,e.Bb(n,30).ngClassInvalid,e.Bb(n,30).ngClassPending)}))}function v(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,1,"app-settings",[],null,null,null,B,s)),e.ob(1,114688,null,0,g,[c.a],null,null)],(function(l,n){l(n,1,0)}),null)}var k=e.lb("app-settings",g,v,{},{},[]),j=t("iInd");class ${}t.d(n,"SettingsPageModuleNgFactory",(function(){return y}));var y=e.mb(u,[],(function(l){return e.yb([e.zb(512,e.j,e.X,[[8,[i.a,k]],[3,e.j],e.v]),e.zb(4608,p.m,p.l,[e.s,[2,p.y]]),e.zb(4608,r.o,r.o,[]),e.zb(4608,a.b,a.b,[e.x,e.g]),e.zb(4608,a.Db,a.Db,[a.b,e.j,e.p]),e.zb(4608,a.Hb,a.Hb,[a.b,e.j,e.p]),e.zb(1073742336,p.c,p.c,[]),e.zb(1073742336,r.n,r.n,[]),e.zb(1073742336,r.f,r.f,[]),e.zb(1073742336,a.Ab,a.Ab,[]),e.zb(1073742336,j.o,j.o,[[2,j.t],[2,j.m]]),e.zb(1073742336,$,$,[]),e.zb(1073742336,u,u,[]),e.zb(1024,j.k,(function(){return[[{path:"",component:g}]]}),[])])}))}}]);