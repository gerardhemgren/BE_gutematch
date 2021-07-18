(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{67:function(e,t,n){},68:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(34),r=n.n(a),s=n(17),i=n(16),o=n(2),u=n.n(o),l=n(5),d=n(13),h=n(11),j=n.n(h),f={getAllMatchs:function(){return j.a.get("/all_matchs").then((function(e){return e.data}))},getOpenMatchs:function(e){return j.a.get("/open_matchs/".concat(e)).then((function(e){return e.data}))},getMyMatchs:function(e){return j.a.get("/my_matchs/".concat(e)).then((function(e){return e.data}))},createMatch:function(e,t){return j.a.post("/add_match/".concat(t),e).then((function(e){return e.data}))},deleteMatch:function(e,t){var n={id_match:e};return j.a.delete("/my_matchs/owner/".concat(t),{data:n}).then((function(e){return e.data}))},joinMatch:function(e,t){var n={id_match:e};return j.a.post("/open_matchs/".concat(t),n).then((function(e){return e.data}))},leftMatch:function(e,t){var n={id_match:e};return j.a.delete("/my_matchs/".concat(t),{data:n}).then((function(e){return e.data}))}},m={logIn_signUp:function(e,t){return j.a.post("/config/".concat(e),t).then((function(e){return e.data}))}},b=n(10),p=n(0),O=n(32),x=n(65),v=n(66);O.extend(x),O.extend(v);var g=function(e){var t,n,c=e.user,a=e.match,r=e.source,s=e.join,i=e.left,o=e.deleteMatch,u=a.name,l=a.date,d=a.location,h=a.players,j=a.players_field,f=a.id_admin;return t="showOpenMatchs"===r?Object(p.jsx)("button",{onClick:s,children:"Join"}):"showMyMatchs"===r?Object(p.jsx)("button",{onClick:i,children:"Left"}):void 0,f===Number(c)&&(n=Object(p.jsx)("button",{onClick:o,children:"Del"})),Object(p.jsxs)("div",{id:"".concat(r),className:"match-container",children:[Object(p.jsxs)("div",{className:"date",children:[Object(p.jsx)("div",{className:"day",children:O(l).utc().format("DD \u2014 dddd")}),Object(p.jsx)("div",{className:"month-year",children:O(l).utc().format(", MMMM. YYYY")})]}),Object(p.jsxs)("div",{className:"match",children:[Object(p.jsx)("div",{className:"time",children:O(l).utc().format("HH:mm")}),Object(p.jsxs)("div",{className:"players",children:[Object(p.jsxs)("div",{className:"field",children:["F",j/2]}),Object(p.jsx)("div",{className:"joined",children:h}),Object(p.jsx)("div",{className:"missed",children:j-h})]}),Object(p.jsxs)("div",{className:"action",children:[n," ",t]})]}),Object(p.jsxs)("div",{className:"info",children:[Object(p.jsx)("div",{className:"name",children:u}),Object(p.jsx)("div",{className:"location",children:d})]})]})},M=(n(67),function(e){var t=e.msg;if(t){var n=t;return Object(p.jsx)("div",{className:"message",children:Object(p.jsx)("div",{children:n})})}return null}),y=function(){var e=Object(b.b)().loginWithRedirect;return Object(p.jsx)("button",{className:"action-button primary",onClick:function(){return e()},children:"Log In"})},w=function(){var e=Object(b.b)().logout;return Object(p.jsx)("button",{className:"action-button logout-button secondary",onClick:function(){return localStorage.removeItem("ls"),localStorage.removeItem("lid"),localStorage.removeItem("ln"),void e({returnTo:window.location.origin})},children:"Log Out"})},N=function(){var e=Object(b.b)().isAuthenticated;return localStorage.getItem("lid")||e?Object(p.jsx)(w,{}):Object(p.jsx)(y,{})},k=function(e){var t=e.source,n=e.user,c=function(){if(n){var e=n.lsName;return Object(p.jsx)("div",{children:e})}return null};return"config"===t?Object(p.jsx)("div",{className:"config",children:Object(p.jsxs)("div",{className:"profile",children:[Object(p.jsx)(c,{}),Object(p.jsx)(N,{})]})}):null},_=(n(68),n(32));var C=function(){var e=localStorage.getItem("lid"),t=localStorage.getItem("ln"),n=Object(b.b)(),a=n.user,r=n.isLoading,o=a?a.sub:void 0,h=Object(c.useState)(e||0),j=Object(d.a)(h,2),O=j[0],x=j[1];Object(c.useEffect)((function(){var e=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.getAllMatchs().then((function(e){N("showAllMatchs"),L(e),Y("All matchs"),H("You must be logged to join a match")}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.getOpenMatchs(O).then((function(e){N("showOpenMatchs"),Y("Open matchs"),"object"===typeof e?L(e):(L([]),H(e))}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),n=function(){0!==O?t():e()};r||((null===a||void 0===a?void 0:a.sub)?m.logIn_signUp(o,a.name).then(function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=x,e.next=3,t[0].id;case 3:return e.t1=e.sent,(0,e.t0)(e.t1),e.t2=localStorage,e.next=8,t[0].id;case 8:return e.t3=e.sent,e.t2.setItem.call(e.t2,"lid",e.t3),e.t4=localStorage,e.next=13,t[0].name;case 13:e.t5=e.sent,e.t4.setItem.call(e.t4,"ln",e.t5);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(){n()})):n())}),[r,O,a,o]);var v=Object(c.useState)(""),y=Object(d.a)(v,2),w=y[0],N=y[1],C=Object(c.useState)(""),A=Object(d.a)(C,2),S=A[0],Y=A[1],I=Object(c.useState)([]),D=Object(d.a)(I,2),F=D[0],L=D[1],R=Object(c.useState)(""),q=Object(d.a)(R,2),T=q[0],H=q[1],U=Object(c.useState)({date:"",time:"",location:"",players_field:10,name:""}),J=Object(d.a)(U,2),W=J[0],E=J[1],K=function(){var t=Object(l.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.getAllMatchs().then((function(t){N("showAllMatchs"),L(t),Y("All matchs"),e||H("You must be logged to join a match")}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),B=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.getOpenMatchs(O).then((function(e){N("showOpenMatchs"),Y("Open matchs"),"object"===typeof e?L(e):(L([]),H(e))}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),G=function(){var t=Object(l.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.getMyMatchs(O).then((function(t){N("showMyMatchs"),Y("My matchs"),"object"===typeof t?L(t):(L([]),H(e?t:"You must be logged to join a match"))}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),z=function(e){E(Object(i.a)(Object(i.a)({},W),{},Object(s.a)({},e.target.name,e.target.value)))},P=function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={date:"".concat(W.date," ").concat(W.time),location:W.location,players_field:Number(W.players_field),name:W.name},e.next=4,f.createMatch(n,O).then(function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=H,e.next=3,t;case 3:e.t1=e.sent,(0,e.t0)(e.t1),"Match created"===t&&G();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Q=function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.deleteMatch(t,O).then(function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=H,e.next=3,t;case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:G();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.joinMatch(t,O).then(function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=H,e.next=3,t;case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:G();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),X=function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.leftMatch(t,O).then(function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=H,e.next=3,t;case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:G();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"bodyApp",children:[Object(p.jsx)("div",{className:"bg"}),Object(p.jsxs)("div",{className:"header",children:[Object(p.jsxs)("div",{className:"topbar",children:[Object(p.jsxs)("div",{className:"logo",children:["gute",Object(p.jsx)("span",{children:"match"})]}),Object(p.jsx)("div",{className:"config",children:Object(p.jsx)("button",{className:"".concat("config"===w?"none":"config-button"),onClick:function(){return L([]),N("config"),void Y("Config")},children:"Config"})})]}),Object(p.jsx)("div",{className:"message-layout",children:Object(p.jsx)(M,{msg:T,action:void(T&&setTimeout((function(){H("")}),8e3))})}),Object(p.jsxs)("div",{className:"title",children:[S," ","showOpenMatchs"===w&&F.length>0||"showMyMatchs"===w||"showAllMatchs"===w?"\u2014 ".concat(F.length):""]})]}),Object(p.jsxs)("div",{className:"main",children:["createMatch"===w?Object(p.jsxs)("form",{onSubmit:P,onReset:function(){E(Object(i.a)(Object(i.a)({},W),{},{date:"",time:"",location:"",players_field:10,name:""}))},className:"form",children:[Object(p.jsxs)("fieldset",{children:[Object(p.jsx)("legend",{children:"Location"}),Object(p.jsx)("input",{className:"input-adress",required:!0,placeholder:"Adress",name:"location",value:W.location,onChange:z}),Object(p.jsx)("label",{children:"Adress 1234, City, Country"})]}),Object(p.jsxs)("div",{className:"name-field",children:[Object(p.jsxs)("fieldset",{children:[Object(p.jsx)("legend",{children:"Field"}),Object(p.jsx)("div",{children:Object(p.jsxs)("select",{className:"drop-players-field",name:"players_field",type:"number",value:W.players_field,onChange:z,children:[Object(p.jsx)("option",{value:"10",children:"F \u2014 5"}),Object(p.jsx)("option",{value:"14",children:"F \u2014 7"}),Object(p.jsx)("option",{value:"18",children:"F \u2014 9"}),Object(p.jsx)("option",{value:"22",children:"F \u2014 11"})]})})]}),Object(p.jsxs)("fieldset",{children:[Object(p.jsx)("legend",{children:"Name"}),Object(p.jsx)("input",{className:"input-name",required:!0,placeholder:"Match name",maxLength:"10",name:"name",value:W.name,onChange:z}),Object(p.jsx)("label",{children:"Max: 10 characteres"})]})]}),Object(p.jsxs)("div",{className:"date-field",children:[Object(p.jsxs)("fieldset",{children:[Object(p.jsx)("legend",{children:"Date"}),Object(p.jsx)("input",{required:!0,className:"input-date",type:"date",name:"date",min:_().format("YYYY-MM-DD"),max:_().add(3,"M").format("YYYY-MM-DD"),value:W.date,onChange:z})]}),Object(p.jsxs)("fieldset",{children:[Object(p.jsx)("legend",{children:"Time"}),Object(p.jsx)("input",{required:!0,className:"input-time",type:"time",name:"time",value:W.time,onChange:z})]})]}),Object(p.jsxs)("div",{className:"action",children:[Object(p.jsx)("button",{type:"reset",value:"Reset",children:"Reset"}),Object(p.jsx)("button",{type:"submit",children:"Create"})]})]}):null,Object(p.jsx)(k,{source:w,user:{lsName:t}}),Object(p.jsxs)("div",{children:[F.map((function(e,t){return Object(p.jsx)(g,{match:e,user:O,source:w,join:function(){return V(e.id_match)},left:function(){return X(e.id_match)},deleteMatch:function(){return Q(e.id_match)}},t)})),Object(p.jsx)("div",{className:"bottom-space"})]})]}),Object(p.jsxs)("div",{className:"navbar",children:[Object(p.jsx)("button",{className:"".concat("showOpenMatchs"===w||"showAllMatchs"===w?"focus":""," nav-button"),onClick:e?function(){return B()}:function(){return K()},children:"Open Matchs"}),Object(p.jsx)("button",{className:"".concat("createMatch"===w?"focus":""," nav-button"),onClick:function(){return L([]),N("createMatch"),Y("Create a match"),void H(e?"":"You must be logged to create a match")},children:"Add Match"}),Object(p.jsx)("button",{className:"".concat("showMyMatchs"===w?"focus":""," nav-button"),onClick:function(){return G()},children:"My Matchs"})]})]})},A=n(20),S=n(3),Y=function(e){var t=e.children,n=Object(S.d)();return Object(p.jsx)(b.a,{domain:"guten.us.auth0.com",clientId:"9KgqHeGFIRxSvwUD75TAWC573AHlg9WK",redirectUri:window.location.origin,onRedirectCallback:function(e){n.push((null===e||void 0===e?void 0:e.returnTo)||window.location.pathname)},children:t})};n(73);r.a.render(Object(p.jsx)(A.a,{children:Object(p.jsx)(Y,{children:Object(p.jsx)("div",{className:"app",children:Object(p.jsx)(C,{})})})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.f0ef73d4.chunk.js.map