function _defineProperties(l,n){for(var e=0;e<n.length;e++){var u=n[e];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(l,u.key,u)}}function _createClass(l,n,e){return n&&_defineProperties(l.prototype,n),e&&_defineProperties(l,e),l}function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{CedQ:function(l,n,e){"use strict";e.r(n);var u=e("8Y7J"),o=function l(){_classCallCheck(this,l)},t=e("pMnS"),i=e("MKJQ"),a=e("sZkV"),r=e("/9oy"),b=e("kWWo"),c=e("iInd"),s=e("yTNM"),f=e("l90o"),p=e("w9WL"),d=e("QvXa"),h=function(){function l(n,e,u){_classCallCheck(this,l),this.router=n,this.api=e,this.project=u,this.project.init()}return _createClass(l,[{key:"ionViewWillEnter",value:function(){var l=this;this.api.getLoginInfo().then((function(n){l.api.token=n})).then((function(){l.api.projects().subscribe((function(n){l.projects=n}))}))}},{key:"ngOnInit",value:function(){}},{key:"create",value:function(){this.project.newProject(),this.router.navigateByUrl("spec")}}]),l}(),m=u.nb({encapsulation:0,styles:[[""]],data:{}});function g(l){return u.Kb(0,[(l()(),u.Ib(-1,null,[" Project name "]))],null,null)}function w(l){return u.Kb(0,[(l()(),u.Ib(0,null,[" "," "]))],null,(function(l,n){l(n,0,0,n.context.value)}))}function z(l){return u.Kb(0,[(l()(),u.Ib(-1,null,[" Created on "]))],null,null)}function k(l){return u.Kb(0,[(l()(),u.Ib(0,null,[" "," "]))],null,(function(l,n){l(n,0,0,n.context.value)}))}function x(l){return u.Kb(0,[(l()(),u.pb(0,0,null,null,3,"ion-header",[],null,null,null,i.R,i.n)),u.ob(1,49152,null,0,a.A,[u.h,u.k,u.x],null,null),(l()(),u.pb(2,0,null,0,1,"app-navbar",[],null,null,null,r.b,r.a)),u.ob(3,114688,null,0,b.a,[a.Cb,a.Db,c.m,s.a,a.Gb],null,null),(l()(),u.pb(4,0,null,null,38,"ion-content",[["class","ion-padding"]],null,null,null,i.N,i.j)),u.ob(5,49152,null,0,a.t,[u.h,u.k,u.x],null,null),(l()(),u.pb(6,0,null,0,8,"ion-row",[["class","ion-padding-bottom"]],null,null,null,i.X,i.t)),u.ob(7,49152,null,0,a.fb,[u.h,u.k,u.x],null,null),(l()(),u.pb(8,0,null,0,6,"ion-col",[["offset-lg","2"],["offset-sm","0"],["size-lg","8"],["size-sm","12"]],null,null,null,i.M,i.i)),u.ob(9,49152,null,0,a.s,[u.h,u.k,u.x],null,null),(l()(),u.pb(10,0,null,0,4,"ion-button",[["icon-left",""],["style","margin: 0px"]],null,[[null,"click"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.create()&&u),u}),i.G,i.c)),u.ob(11,49152,null,0,a.j,[u.h,u.k,u.x],null,null),(l()(),u.pb(12,0,null,0,1,"ion-icon",[["name","add"]],null,null,null,i.S,i.o)),u.ob(13,49152,null,0,a.B,[u.h,u.k,u.x],{name:[0,"name"]},null),(l()(),u.Ib(-1,0,[" New project "])),(l()(),u.pb(15,0,null,0,27,"ion-row",[["class","ion-padding-bottom"]],null,null,null,i.X,i.t)),u.ob(16,49152,null,0,a.fb,[u.h,u.k,u.x],null,null),(l()(),u.pb(17,0,null,0,25,"ion-col",[["offset-lg","2"],["offset-sm","0"],["size-lg","8"],["size-sm","12"]],null,null,null,i.M,i.i)),u.ob(18,49152,null,0,a.s,[u.h,u.k,u.x],null,null),(l()(),u.pb(19,0,null,0,23,"ngx-datatable",[["class","material fullscreen ngx-datatable"],["style","width:100%"]],[[2,"fixed-header",null],[2,"fixed-row",null],[2,"scroll-vertical",null],[2,"virtualized",null],[2,"scroll-horz",null],[2,"selectable",null],[2,"checkbox-selection",null],[2,"cell-selection",null],[2,"single-selection",null],[2,"multi-selection",null],[2,"multi-click-selection",null]],[["window","resize"]],(function(l,n,e){var o=!0;return"window:resize"===n&&(o=!1!==u.Bb(l,20).onWindowResize()&&o),o}),f.b,f.a)),u.ob(20,5750784,null,4,p.q,[[1,p.z],[1,p.s],u.h,u.k,u.r,p.a,[2,"configuration"]],{rows:[0,"rows"],rowHeight:[1,"rowHeight"],columnMode:[2,"columnMode"],headerHeight:[3,"headerHeight"],footerHeight:[4,"footerHeight"]},null),u.Gb(603979776,1,{columnTemplates:1}),u.Gb(603979776,2,{rowDetail:0}),u.Gb(603979776,3,{groupHeader:0}),u.Gb(603979776,4,{footer:0}),(l()(),u.pb(25,0,null,null,8,"ngx-datatable-column",[["name","name"]],null,null,null,null,null)),u.ob(26,540672,[[1,4]],3,p.g,[p.a],{name:[0,"name"],flexGrow:[1,"flexGrow"]},null),u.Gb(335544320,5,{_cellTemplateQuery:0}),u.Gb(335544320,6,{_headerTemplateQuery:0}),u.Gb(335544320,7,{_treeToggleTemplateQuery:0}),(l()(),u.eb(0,[[6,2]],null,1,null,g)),u.ob(31,16384,null,0,p.h,[u.J],null,null),(l()(),u.eb(0,[[5,2]],null,1,null,w)),u.ob(33,16384,null,0,p.f,[u.J],null,null),(l()(),u.pb(34,0,null,null,8,"ngx-datatable-column",[["name","created"]],null,null,null,null,null)),u.ob(35,540672,[[1,4]],3,p.g,[p.a],{name:[0,"name"],flexGrow:[1,"flexGrow"]},null),u.Gb(335544320,8,{_cellTemplateQuery:0}),u.Gb(335544320,9,{_headerTemplateQuery:0}),u.Gb(335544320,10,{_treeToggleTemplateQuery:0}),(l()(),u.eb(0,[[9,2]],null,1,null,z)),u.ob(40,16384,null,0,p.h,[u.J],null,null),(l()(),u.eb(0,[[8,2]],null,1,null,k)),u.ob(42,16384,null,0,p.f,[u.J],null,null)],(function(l,n){var e=n.component;l(n,3,0),l(n,13,0,"add"),l(n,20,0,e.projects,"auto","flex",50,50),l(n,26,0,"name",1),l(n,35,0,"created",1)}),(function(l,n){l(n,19,1,[u.Bb(n,20).isFixedHeader,u.Bb(n,20).isFixedRow,u.Bb(n,20).isVertScroll,u.Bb(n,20).isVirtualized,u.Bb(n,20).isHorScroll,u.Bb(n,20).isSelectable,u.Bb(n,20).isCheckboxSelection,u.Bb(n,20).isCellSelection,u.Bb(n,20).isSingleSelection,u.Bb(n,20).isMultiSelection,u.Bb(n,20).isMultiClickSelection])}))}var v=u.lb("app-projects",h,(function(l){return u.Kb(0,[(l()(),u.pb(0,0,null,null,1,"app-projects",[],null,null,null,x,m)),u.ob(1,114688,null,0,h,[c.m,s.a,d.a],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),y=e("SVse"),j=e("s7LF"),C=function l(){_classCallCheck(this,l)},G=e("/NTo");e.d(n,"ProjectsPageModuleNgFactory",(function(){return _}));var _=u.mb(o,[],(function(l){return u.yb([u.zb(512,u.j,u.X,[[8,[t.a,v]],[3,u.j],u.v]),u.zb(4608,y.m,y.l,[u.s,[2,y.y]]),u.zb(4608,j.o,j.o,[]),u.zb(4608,a.b,a.b,[u.x,u.g]),u.zb(4608,a.Db,a.Db,[a.b,u.j,u.p]),u.zb(4608,a.Hb,a.Hb,[a.b,u.j,u.p]),u.zb(4608,p.z,p.z,[y.d]),u.zb(4608,p.s,p.s,[]),u.zb(4608,p.a,p.a,[]),u.zb(1073742336,y.c,y.c,[]),u.zb(1073742336,j.n,j.n,[]),u.zb(1073742336,j.f,j.f,[]),u.zb(1073742336,a.Ab,a.Ab,[]),u.zb(1073742336,c.o,c.o,[[2,c.t],[2,c.m]]),u.zb(1073742336,C,C,[]),u.zb(1073742336,G.a,G.a,[]),u.zb(1073742336,p.v,p.v,[]),u.zb(1073742336,o,o,[]),u.zb(1024,c.k,(function(){return[[{path:"",component:h}]]}),[])])}))}}]);