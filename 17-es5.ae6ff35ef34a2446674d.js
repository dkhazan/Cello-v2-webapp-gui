function _defineProperties(l,n){for(var u=0;u<n.length;u++){var e=n[u];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(l,e.key,e)}}function _createClass(l,n,u){return n&&_defineProperties(l.prototype,n),u&&_defineProperties(l,u),l}function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"15ax":function(l,n,u){"use strict";u.r(n);var e=u("8Y7J"),o=function l(){_classCallCheck(this,l)},t=u("pMnS"),i=u("MKJQ"),r=u("sZkV"),a=u("l90o"),b=u("w9WL"),c=u("s7LF"),s=u("SVse"),p=u("mrSG"),d=u("yTNM"),h=u("QvXa"),g=function(){function l(){_classCallCheck(this,l)}return _createClass(l,[{key:"ngOnInit",value:function(){}}]),l}(),f=function(){function l(n,u,e){var o=this;_classCallCheck(this,l),this.api=n,this.project=u,this.modalController=e,this.mode="ucf",this.selected=[this.project.userConstraintsFiles[1]],this.SelectionType=b.B,this.ColumnMode=b.b,this.valid=(function(){return"registry"===o.project.libraryMode?o.project.collection&&o.project.registry:"ucf"===o.project.libraryMode&&o.project.userConstraintsFile&&o.project.inputSensorFile&&o.project.outputDeviceFile}).bind(this),this.project.register("library",this.valid)}return _createClass(l,[{key:"ngOnInit",value:function(){}},{key:"details",value:function(l,n){return p.a(this,void 0,void 0,regeneratorRuntime.mark((function u(){var e;return regeneratorRuntime.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return n.stopPropagation(),u.next=3,this.modalController.create({component:g,componentProps:{library:l}});case 3:return e=u.sent,u.next=6,e.present();case 6:return u.abrupt("return",u.sent);case 7:case"end":return u.stop()}}),u,this)})))}},{key:"download",value:function(l,n){n.stopPropagation()}}]),l}(),m=e.nb({encapsulation:0,styles:[["ion-item[_ngcontent-%COMP%]{display:block;float:left}ion-segment-button[_ngcontent-%COMP%]{max-width:unset}ion-icon[_ngcontent-%COMP%]{font-size:24px}.ngx-datatable[_ngcontent-%COMP%]{box-shadow:unset}ion-item[_ngcontent-%COMP%], ngx-datatable[_ngcontent-%COMP%]{width:100%}.ion-item-with-ngx-datatable[_ngcontent-%COMP%]{--padding-start:0px;--inner-padding-end:0px}ion-button[_ngcontent-%COMP%]{--background-hover-opacity:0.0;--ripple-color:transparent}"]],data:{}});function x(l){return e.Kb(0,[(l()(),e.Ib(-1,null,[" Identifier "]))],null,null)}function k(l){return e.Kb(0,[(l()(),e.Ib(0,null,[" "," "]))],null,(function(l,n){l(n,0,0,n.context.value)}))}function C(l){return e.Kb(0,[(l()(),e.Ib(-1,null,[" Strain "]))],null,null)}function v(l){return e.Kb(0,[(l()(),e.Ib(0,null,[" "," "]))],null,(function(l,n){l(n,0,0,n.context.value)}))}function y(l){return e.Kb(0,[(l()(),e.Ib(-1,null,[" Description "]))],null,null)}function M(l){return e.Kb(0,[(l()(),e.Ib(0,null,[" "," "]))],null,(function(l,n){l(n,0,0,n.context.value)}))}function B(l){return e.Kb(0,[(l()(),e.Ib(-1,null,[" Actions "]))],null,null)}function w(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,3,"ion-button",[["class","ion-no-padding"],["fill","clear"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.download(l.context.row,u)&&e),e}),i.G,i.c)),e.ob(1,49152,null,0,r.j,[e.h,e.k,e.x],{fill:[0,"fill"]},null),(l()(),e.pb(2,0,null,0,1,"ion-icon",[["name","cloud-download-outline"]],null,null,null,i.S,i.o)),e.ob(3,49152,null,0,r.B,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.pb(4,0,null,null,3,"ion-button",[["class","ion-no-padding"],["fill","clear"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.details(l.context.row,u)&&e),e}),i.G,i.c)),e.ob(5,49152,null,0,r.j,[e.h,e.k,e.x],{fill:[0,"fill"]},null),(l()(),e.pb(6,0,null,0,1,"ion-icon",[["name","information-circle-outline"]],null,null,null,i.S,i.o)),e.ob(7,49152,null,0,r.B,[e.h,e.k,e.x],{name:[0,"name"]},null)],(function(l,n){l(n,1,0,"clear"),l(n,3,0,"cloud-download-outline"),l(n,5,0,"clear"),l(n,7,0,"information-circle-outline")}),null)}function G(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,2,"div",[["style","padding: 5px 10px"]],null,null,null,null,null)),(l()(),e.pb(1,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e.Ib(2,null,[""," total"]))],null,(function(l,n){l(n,2,0,n.context.rowCount)}))}function _(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,63,"div",[],null,null,null,null,null)),(l()(),e.pb(1,0,null,null,62,"ion-list",[],null,null,null,i.W,i.s)),e.ob(2,49152,null,0,r.N,[e.h,e.k,e.x],null,null),(l()(),e.pb(3,0,null,0,48,"ion-item",[["class","ion-item-with-ngx-datatable"]],null,null,null,i.U,i.q)),e.ob(4,49152,null,0,r.G,[e.h,e.k,e.x],null,null),(l()(),e.pb(5,0,null,0,46,"ngx-datatable",[["class","material fullscreen ngx-datatable"],["footerHeight","50"],["headerHeight","50"],["rowHeight","auto"]],[[2,"fixed-header",null],[2,"fixed-row",null],[2,"scroll-vertical",null],[2,"virtualized",null],[2,"scroll-horz",null],[2,"selectable",null],[2,"checkbox-selection",null],[2,"cell-selection",null],[2,"single-selection",null],[2,"multi-selection",null],[2,"multi-click-selection",null]],[["window","resize"]],(function(l,n,u){var o=!0;return"window:resize"===n&&(o=!1!==e.Bb(l,6).onWindowResize()&&o),o}),a.b,a.a)),e.ob(6,5750784,null,4,b.q,[[1,b.z],[1,b.s],e.h,e.k,e.r,b.a,[2,"configuration"]],{rows:[0,"rows"],selected:[1,"selected"],rowHeight:[2,"rowHeight"],columnMode:[3,"columnMode"],headerHeight:[4,"headerHeight"],footerHeight:[5,"footerHeight"],selectionType:[6,"selectionType"]},null),e.Gb(603979776,1,{columnTemplates:1}),e.Gb(603979776,2,{rowDetail:0}),e.Gb(603979776,3,{groupHeader:0}),e.Gb(603979776,4,{footer:0}),(l()(),e.pb(11,0,null,null,8,"ngx-datatable-column",[["prop","header.version"]],null,null,null,null,null)),e.ob(12,540672,[[1,4]],3,b.g,[b.a],{prop:[0,"prop"],flexGrow:[1,"flexGrow"],minWidth:[2,"minWidth"]},null),e.Gb(335544320,5,{_cellTemplateQuery:0}),e.Gb(335544320,6,{_headerTemplateQuery:0}),e.Gb(335544320,7,{_treeToggleTemplateQuery:0}),(l()(),e.eb(0,[[6,2]],null,1,null,x)),e.ob(17,16384,null,0,b.h,[e.J],null,null),(l()(),e.eb(0,[[5,2]],null,1,null,k)),e.ob(19,16384,null,0,b.f,[e.J],null,null),(l()(),e.pb(20,0,null,null,8,"ngx-datatable-column",[["prop","header.organism"]],null,null,null,null,null)),e.ob(21,540672,[[1,4]],3,b.g,[b.a],{prop:[0,"prop"],flexGrow:[1,"flexGrow"]},null),e.Gb(335544320,8,{_cellTemplateQuery:0}),e.Gb(335544320,9,{_headerTemplateQuery:0}),e.Gb(335544320,10,{_treeToggleTemplateQuery:0}),(l()(),e.eb(0,[[9,2]],null,1,null,C)),e.ob(26,16384,null,0,b.h,[e.J],null,null),(l()(),e.eb(0,[[8,2]],null,1,null,v)),e.ob(28,16384,null,0,b.f,[e.J],null,null),(l()(),e.pb(29,0,null,null,8,"ngx-datatable-column",[["prop","header.description"]],null,null,null,null,null)),e.ob(30,540672,[[1,4]],3,b.g,[b.a],{prop:[0,"prop"],flexGrow:[1,"flexGrow"]},null),e.Gb(335544320,11,{_cellTemplateQuery:0}),e.Gb(335544320,12,{_headerTemplateQuery:0}),e.Gb(335544320,13,{_treeToggleTemplateQuery:0}),(l()(),e.eb(0,[[12,2]],null,1,null,y)),e.ob(35,16384,null,0,b.h,[e.J],null,null),(l()(),e.eb(0,[[11,2]],null,1,null,M)),e.ob(37,16384,null,0,b.f,[e.J],null,null),(l()(),e.pb(38,0,null,null,8,"ngx-datatable-column",[["sortable","false"]],null,null,null,null,null)),e.ob(39,540672,[[1,4]],3,b.g,[b.a],{flexGrow:[0,"flexGrow"],sortable:[1,"sortable"],minWidth:[2,"minWidth"]},null),e.Gb(335544320,14,{_cellTemplateQuery:0}),e.Gb(335544320,15,{_headerTemplateQuery:0}),e.Gb(335544320,16,{_treeToggleTemplateQuery:0}),(l()(),e.eb(0,[[15,2]],null,1,null,B)),e.ob(44,16384,null,0,b.h,[e.J],null,null),(l()(),e.eb(0,[[14,2]],null,1,null,w)),e.ob(46,16384,null,0,b.f,[e.J],null,null),(l()(),e.pb(47,0,null,null,4,"ngx-datatable-footer",[],null,null,null,null,null)),e.ob(48,16384,[[4,4]],1,b.r,[],null,null),e.Gb(603979776,17,{_templateQuery:0}),(l()(),e.eb(0,[[17,2]],null,1,null,G)),e.ob(51,16384,null,0,b.j,[e.J],null,null),(l()(),e.pb(52,0,null,0,8,"ion-item",[["style","width: 100%"]],null,null,null,i.U,i.q)),e.ob(53,49152,null,0,r.G,[e.h,e.k,e.x],null,null),(l()(),e.pb(54,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,i.V,i.r)),e.ob(55,49152,null,0,r.M,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Ib(-1,0,["Upload"])),(l()(),e.pb(57,0,null,0,3,"ion-input",[["accept","application/json"],["type","file"]],null,[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var o=!0;return"ionBlur"===n&&(o=!1!==e.Bb(l,60)._handleBlurEvent(u.target)&&o),"ionChange"===n&&(o=!1!==e.Bb(l,60)._handleInputEvent(u.target)&&o),o}),i.T,i.p)),e.Fb(5120,null,c.g,(function(l){return[l]}),[r.Kb]),e.ob(59,49152,null,0,r.F,[e.h,e.k,e.x],{accept:[0,"accept"],type:[1,"type"]},null),e.ob(60,16384,null,0,r.Kb,[e.k],null,null),(l()(),e.pb(61,0,null,0,2,"ion-button",[["fill","clear"]],null,null,null,i.G,i.c)),e.ob(62,49152,null,0,r.j,[e.h,e.k,e.x],{fill:[0,"fill"]},null),(l()(),e.Ib(-1,0,["Upload"]))],(function(l,n){var u=n.component;l(n,6,0,u.project.userConstraintsFiles,u.selected,"auto",u.ColumnMode.flex,"50","50",u.SelectionType.single),l(n,12,0,"header.version",1,160),l(n,21,0,"header.organism",2),l(n,30,0,"header.description",3),l(n,39,0,1,"false",120),l(n,55,0,"stacked"),l(n,59,0,"application/json","file"),l(n,62,0,"clear")}),(function(l,n){l(n,5,1,[e.Bb(n,6).isFixedHeader,e.Bb(n,6).isFixedRow,e.Bb(n,6).isVertScroll,e.Bb(n,6).isVirtualized,e.Bb(n,6).isHorScroll,e.Bb(n,6).isSelectable,e.Bb(n,6).isCheckboxSelection,e.Bb(n,6).isCellSelection,e.Bb(n,6).isSingleSelection,e.Bb(n,6).isMultiSelection,e.Bb(n,6).isMultiClickSelection])}))}function j(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,2,"ion-select-option",[],null,null,null,i.ab,i.x)),e.ob(1,49152,null,0,r.kb,[e.h,e.k,e.x],{value:[0,"value"]},null),(l()(),e.Ib(2,0,["",""]))],(function(l,n){l(n,1,0,e.tb(1,"",n.context.$implicit,""))}),(function(l,n){l(n,2,0,n.context.$implicit)}))}function I(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,2,"ion-select-option",[],null,null,null,i.ab,i.x)),e.ob(1,49152,null,0,r.kb,[e.h,e.k,e.x],{value:[0,"value"]},null),(l()(),e.Ib(2,0,["",""]))],(function(l,n){l(n,1,0,e.tb(1,"",n.context.$implicit.uri,""))}),(function(l,n){l(n,2,0,n.context.$implicit.name)}))}function T(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,30,"div",[],null,null,null,null,null)),(l()(),e.pb(1,0,null,null,29,"ion-list",[],null,null,null,i.W,i.s)),e.ob(2,49152,null,0,r.N,[e.h,e.k,e.x],null,null),(l()(),e.pb(3,0,null,0,13,"ion-item",[["style","width: 60%"]],null,null,null,i.U,i.q)),e.ob(4,49152,null,0,r.G,[e.h,e.k,e.x],null,null),(l()(),e.pb(5,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,i.V,i.r)),e.ob(6,49152,null,0,r.M,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Ib(-1,0,["Registry"])),(l()(),e.pb(8,0,null,0,8,"ion-select",[["interface","popover"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(l,n,u){var o=!0,t=l.component;return"ionBlur"===n&&(o=!1!==e.Bb(l,9)._handleBlurEvent(u.target)&&o),"ionChange"===n&&(o=!1!==e.Bb(l,9)._handleChangeEvent(u.target)&&o),"ngModelChange"===n&&(o=!1!==(t.project.registry=u)&&o),"ionChange"===n&&(o=!1!==t.project.updateCollections()&&o),o}),i.bb,i.w)),e.ob(9,16384,null,0,r.Jb,[e.k],null,null),e.Fb(1024,null,c.g,(function(l){return[l]}),[r.Jb]),e.ob(11,671744,null,0,c.k,[[8,null],[8,null],[8,null],[6,c.g]],{model:[0,"model"]},{update:"ngModelChange"}),e.Fb(2048,null,c.h,null,[c.k]),e.ob(13,16384,null,0,c.i,[[4,c.h]],null,null),e.ob(14,49152,null,0,r.jb,[e.h,e.k,e.x],{interface:[0,"interface"]},null),(l()(),e.eb(16777216,null,0,1,null,j)),e.ob(16,278528,null,0,s.j,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null),(l()(),e.pb(17,0,null,0,13,"ion-item",[["style","width: 40%"]],null,null,null,i.U,i.q)),e.ob(18,49152,null,0,r.G,[e.h,e.k,e.x],null,null),(l()(),e.pb(19,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,i.V,i.r)),e.ob(20,49152,null,0,r.M,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Ib(-1,0,["Collection"])),(l()(),e.pb(22,0,null,0,8,"ion-select",[["interface","popover"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var o=!0,t=l.component;return"ionBlur"===n&&(o=!1!==e.Bb(l,23)._handleBlurEvent(u.target)&&o),"ionChange"===n&&(o=!1!==e.Bb(l,23)._handleChangeEvent(u.target)&&o),"ngModelChange"===n&&(o=!1!==(t.project.collection=u)&&o),o}),i.bb,i.w)),e.ob(23,16384,null,0,r.Jb,[e.k],null,null),e.Fb(1024,null,c.g,(function(l){return[l]}),[r.Jb]),e.ob(25,671744,null,0,c.k,[[8,null],[8,null],[8,null],[6,c.g]],{model:[0,"model"]},{update:"ngModelChange"}),e.Fb(2048,null,c.h,null,[c.k]),e.ob(27,16384,null,0,c.i,[[4,c.h]],null,null),e.ob(28,49152,null,0,r.jb,[e.h,e.k,e.x],{interface:[0,"interface"]},null),(l()(),e.eb(16777216,null,0,1,null,I)),e.ob(30,278528,null,0,s.j,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var u=n.component;l(n,6,0,"stacked"),l(n,11,0,u.project.registry),l(n,14,0,"popover"),l(n,16,0,u.project.registries),l(n,20,0,"stacked"),l(n,25,0,u.project.collection),l(n,28,0,"popover"),l(n,30,0,u.project.collections)}),(function(l,n){l(n,8,0,e.Bb(n,13).ngClassUntouched,e.Bb(n,13).ngClassTouched,e.Bb(n,13).ngClassPristine,e.Bb(n,13).ngClassDirty,e.Bb(n,13).ngClassValid,e.Bb(n,13).ngClassInvalid,e.Bb(n,13).ngClassPending),l(n,22,0,e.Bb(n,27).ngClassUntouched,e.Bb(n,27).ngClassTouched,e.Bb(n,27).ngClassPristine,e.Bb(n,27).ngClassDirty,e.Bb(n,27).ngClassValid,e.Bb(n,27).ngClassInvalid,e.Bb(n,27).ngClassPending)}))}function z(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,38,"ion-content",[],null,null,null,i.N,i.j)),e.ob(1,49152,null,0,r.t,[e.h,e.k,e.x],null,null),(l()(),e.pb(2,0,null,0,36,"ion-grid",[],null,null,null,i.Q,i.m)),e.ob(3,49152,null,0,r.z,[e.h,e.k,e.x],null,null),(l()(),e.pb(4,0,null,0,7,"ion-row",[],null,null,null,i.X,i.t)),e.ob(5,49152,null,0,r.fb,[e.h,e.k,e.x],null,null),(l()(),e.pb(6,0,null,0,5,"ion-col",[],null,null,null,i.M,i.i)),e.ob(7,49152,null,0,r.s,[e.h,e.k,e.x],null,null),(l()(),e.pb(8,0,null,0,3,"ion-text",[["class","ion-text-center"],["color","primary"]],null,null,null,i.fb,i.B)),e.ob(9,49152,null,0,r.tb,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.pb(10,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Choose a library"])),(l()(),e.pb(12,0,null,0,26,"ion-row",[],null,null,null,i.X,i.t)),e.ob(13,49152,null,0,r.fb,[e.h,e.k,e.x],null,null),(l()(),e.pb(14,0,null,0,24,"ion-col",[["class","ion-text-center"],["offset-lg","2"],["offset-sm","0"],["size-lg","8"],["size-sm","12"]],null,null,null,i.M,i.i)),e.ob(15,49152,null,0,r.s,[e.h,e.k,e.x],null,null),(l()(),e.pb(16,0,null,0,22,"ion-card",[],null,null,null,i.K,i.e)),e.ob(17,49152,null,0,r.l,[e.h,e.k,e.x],null,null),(l()(),e.pb(18,0,null,0,16,"ion-segment",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var o=!0,t=l.component;return"ionBlur"===n&&(o=!1!==e.Bb(l,19)._handleBlurEvent(u.target)&&o),"ionChange"===n&&(o=!1!==e.Bb(l,19)._handleChangeEvent(u.target)&&o),"ngModelChange"===n&&(o=!1!==(t.mode=u)&&o),o}),i.Z,i.u)),e.ob(19,16384,null,0,r.Jb,[e.k],null,null),e.Fb(1024,null,c.g,(function(l){return[l]}),[r.Jb]),e.ob(21,671744,null,0,c.k,[[8,null],[8,null],[8,null],[6,c.g]],{model:[0,"model"]},{update:"ngModelChange"}),e.Fb(2048,null,c.h,null,[c.k]),e.ob(23,16384,null,0,c.i,[[4,c.h]],null,null),e.ob(24,49152,null,0,r.hb,[e.h,e.k,e.x],null,null),(l()(),e.pb(25,0,null,0,4,"ion-segment-button",[["style","width: 50%"],["value","ucf"]],null,null,null,i.Y,i.v)),e.ob(26,49152,null,0,r.ib,[e.h,e.k,e.x],{value:[0,"value"]},null),(l()(),e.pb(27,0,null,0,2,"ion-label",[],null,null,null,i.V,i.r)),e.ob(28,49152,null,0,r.M,[e.h,e.k,e.x],null,null),(l()(),e.Ib(-1,0,["Select a file"])),(l()(),e.pb(30,0,null,0,4,"ion-segment-button",[["disabled",""],["style","width: 50%"],["value","registry"]],null,null,null,i.Y,i.v)),e.ob(31,49152,null,0,r.ib,[e.h,e.k,e.x],{disabled:[0,"disabled"],value:[1,"value"]},null),(l()(),e.pb(32,0,null,0,2,"ion-label",[],null,null,null,i.V,i.r)),e.ob(33,49152,null,0,r.M,[e.h,e.k,e.x],null,null),(l()(),e.Ib(-1,0,["Build from registry"])),(l()(),e.eb(16777216,null,0,1,null,_)),e.ob(36,16384,null,0,s.k,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.eb(16777216,null,0,1,null,T)),e.ob(38,16384,null,0,s.k,[e.M,e.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,9,0,"primary"),l(n,21,0,u.mode),l(n,26,0,"ucf"),l(n,31,0,"","registry"),l(n,36,0,"ucf"===u.mode),l(n,38,0,"registry"===u.mode)}),(function(l,n){l(n,18,0,e.Bb(n,23).ngClassUntouched,e.Bb(n,23).ngClassTouched,e.Bb(n,23).ngClassPristine,e.Bb(n,23).ngClassDirty,e.Bb(n,23).ngClassValid,e.Bb(n,23).ngClassInvalid,e.Bb(n,23).ngClassPending)}))}var H=e.lb("app-library",f,(function(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,1,"app-library",[],null,null,null,z,m)),e.ob(1,114688,null,0,f,[d.a,h.a,r.Db],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),J=e.nb({encapsulation:0,styles:[["ion-item[_ngcontent-%COMP%]{text-align:justify}"]],data:{}});function P(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,46,"ion-content",[],null,null,null,i.N,i.j)),e.ob(1,49152,null,0,r.t,[e.h,e.k,e.x],null,null),(l()(),e.pb(2,0,null,0,44,"ion-card",[["class","ion-padding"]],null,null,null,i.K,i.e)),e.ob(3,49152,null,0,r.l,[e.h,e.k,e.x],null,null),(l()(),e.pb(4,0,null,0,0,"h3",[],[[8,"innerHTML",1]],null,null,null,null)),(l()(),e.pb(5,0,null,0,41,"ion-list",[],null,null,null,i.W,i.s)),e.ob(6,49152,null,0,r.N,[e.h,e.k,e.x],null,null),(l()(),e.pb(7,0,null,0,2,"ion-label",[],null,null,null,i.V,i.r)),e.ob(8,49152,null,0,r.M,[e.h,e.k,e.x],null,null),(l()(),e.Ib(-1,0,["Strain"])),(l()(),e.pb(10,0,null,0,1,"ion-item",[],[[8,"innerHTML",1]],null,null,i.U,i.q)),e.ob(11,49152,null,0,r.G,[e.h,e.k,e.x],null,null),(l()(),e.pb(12,0,null,0,2,"ion-label",[],null,null,null,i.V,i.r)),e.ob(13,49152,null,0,r.M,[e.h,e.k,e.x],null,null),(l()(),e.Ib(-1,0,["Genome"])),(l()(),e.pb(15,0,null,0,1,"ion-item",[],[[8,"innerHTML",1]],null,null,i.U,i.q)),e.ob(16,49152,null,0,r.G,[e.h,e.k,e.x],null,null),(l()(),e.pb(17,0,null,0,2,"ion-label",[],null,null,null,i.V,i.r)),e.ob(18,49152,null,0,r.M,[e.h,e.k,e.x],null,null),(l()(),e.Ib(-1,0,["Description"])),(l()(),e.pb(20,0,null,0,1,"ion-item",[],[[8,"innerHTML",1]],null,null,i.U,i.q)),e.ob(21,49152,null,0,r.G,[e.h,e.k,e.x],null,null),(l()(),e.pb(22,0,null,0,2,"ion-label",[],null,null,null,i.V,i.r)),e.ob(23,49152,null,0,r.M,[e.h,e.k,e.x],null,null),(l()(),e.Ib(-1,0,["Growth"])),(l()(),e.pb(25,0,null,0,1,"ion-item",[],[[8,"innerHTML",1]],null,null,i.U,i.q)),e.ob(26,49152,null,0,r.G,[e.h,e.k,e.x],null,null),(l()(),e.pb(27,0,null,0,2,"ion-label",[],null,null,null,i.V,i.r)),e.ob(28,49152,null,0,r.M,[e.h,e.k,e.x],null,null),(l()(),e.Ib(-1,0,["Temperature"])),(l()(),e.pb(30,0,null,0,1,"ion-item",[],[[8,"innerHTML",1]],null,null,i.U,i.q)),e.ob(31,49152,null,0,r.G,[e.h,e.k,e.x],null,null),(l()(),e.pb(32,0,null,0,2,"ion-label",[],null,null,null,i.V,i.r)),e.ob(33,49152,null,0,r.M,[e.h,e.k,e.x],null,null),(l()(),e.Ib(-1,0,["Media"])),(l()(),e.pb(35,0,null,0,1,"ion-item",[],[[8,"innerHTML",1]],null,null,i.U,i.q)),e.ob(36,49152,null,0,r.G,[e.h,e.k,e.x],null,null),(l()(),e.pb(37,0,null,0,2,"ion-label",[],null,null,null,i.V,i.r)),e.ob(38,49152,null,0,r.M,[e.h,e.k,e.x],null,null),(l()(),e.Ib(-1,0,["Date"])),(l()(),e.pb(40,0,null,0,1,"ion-item",[],[[8,"innerHTML",1]],null,null,i.U,i.q)),e.ob(41,49152,null,0,r.G,[e.h,e.k,e.x],null,null),(l()(),e.pb(42,0,null,0,2,"ion-label",[],null,null,null,i.V,i.r)),e.ob(43,49152,null,0,r.M,[e.h,e.k,e.x],null,null),(l()(),e.Ib(-1,0,["Authors"])),(l()(),e.pb(45,0,null,0,1,"ion-item",[],[[8,"innerHTML",1]],null,null,i.U,i.q)),e.ob(46,49152,null,0,r.G,[e.h,e.k,e.x],null,null)],null,(function(l,n){var u=n.component;l(n,4,0,u.library.header.version),l(n,10,0,u.library.header.organism),l(n,15,0,u.library.header.genome),l(n,20,0,u.library.header.description),l(n,25,0,u.library.header.growth),l(n,30,0,u.library.header.temperature+"\xb0C"),l(n,35,0,u.library.header.media),l(n,40,0,u.library.header.date),l(n,45,0,u.library.header.author.join("<br/>"))}))}var K=e.lb("app-library-details",g,(function(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,1,"app-library-details",[],null,null,null,P,J)),e.ob(1,114688,null,0,g,[],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),F=u("iInd"),S=function l(){_classCallCheck(this,l)},V=function l(){_classCallCheck(this,l)};u.d(n,"LibraryPageModuleNgFactory",(function(){return U}));var U=e.mb(o,[],(function(l){return e.yb([e.zb(512,e.j,e.X,[[8,[t.a,H,K]],[3,e.j],e.v]),e.zb(4608,s.m,s.l,[e.s,[2,s.y]]),e.zb(4608,c.o,c.o,[]),e.zb(4608,r.b,r.b,[e.x,e.g]),e.zb(4608,r.Db,r.Db,[r.b,e.j,e.p]),e.zb(4608,r.Hb,r.Hb,[r.b,e.j,e.p]),e.zb(4608,b.z,b.z,[s.d]),e.zb(4608,b.s,b.s,[]),e.zb(4608,b.a,b.a,[]),e.zb(1073742336,s.c,s.c,[]),e.zb(1073742336,c.n,c.n,[]),e.zb(1073742336,c.f,c.f,[]),e.zb(1073742336,r.Ab,r.Ab,[]),e.zb(1073742336,F.o,F.o,[[2,F.t],[2,F.m]]),e.zb(1073742336,S,S,[]),e.zb(1073742336,b.v,b.v,[]),e.zb(1073742336,V,V,[]),e.zb(1073742336,o,o,[]),e.zb(1024,F.k,(function(){return[[{path:"",component:f}]]}),[])])}))}}]);