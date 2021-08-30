(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{67:function(t,e,n){},72:function(t,e,n){},73:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n(34),r=n.n(a),s=n(18),i=n(17),o=n(2),l=n.n(o),u=n(5),h=n(14),d=n(11),j=n(3),m=n(12),b=n.n(m),p={getAllMatchs:function(){return b.a.get("/all_matchs").then((function(t){return t.data}))},getOpenMatchs:function(t){return b.a.get("/open_matchs/".concat(t)).then((function(t){return t.data}))},getMyMatchs:function(t){return b.a.get("/my_matchs/".concat(t)).then((function(t){return t.data}))},createMatch:function(t,e){return b.a.post("/add_match/".concat(e),t).then((function(t){return t.data}))},deleteMatch:function(t,e){var n={id_match:t};return b.a.delete("/my_matchs/owner/".concat(e),{data:n}).then((function(t){return t.data}))},joinMatch:function(t,e){var n={id_match:t};return b.a.post("/open_matchs/".concat(e),n).then((function(t){return t.data}))},leaveMatch:function(t,e){var n={id_match:t};return b.a.delete("/my_matchs/".concat(e),{data:n}).then((function(t){return t.data}))}},f={logIn_signUp:function(t,e){var n={name:e};return b.a.post("/config/".concat(t),n).then((function(t){return t.data}))}},O=n(10),x=n(0),v=n(32),g=n(65),M=n(66);v.extend(g),v.extend(M);var w=function(t){var e,n,c=t.user,a=t.match,r=t.source,s=t.joinMatch,i=t.leaveMatch,o=t.deleteMatch,l=a.name,u=a.date,h=a.location,d=a.players,j=a.players_field,m=a.id_admin;return e="showOpenMatchs"===r?Object(x.jsx)("button",{onClick:s,children:"Join"}):"showMyMatchs"===r?Object(x.jsx)("button",{onClick:i,children:"Leave"}):void 0,m===Number(c)&&(n=Object(x.jsx)("button",{onClick:o,children:"Del"})),Object(x.jsxs)("div",{id:"".concat(r),className:"match-container",children:[Object(x.jsxs)("div",{className:"date",children:[Object(x.jsx)("div",{className:"day",children:v(u).utc().format("DD \u2014 dddd")}),Object(x.jsx)("div",{className:"month-year",children:v(u).utc().format(", MMMM. YYYY")})]}),Object(x.jsxs)("div",{className:"match",children:[Object(x.jsx)("div",{className:"time",children:v(u).utc().format("HH:mm")}),Object(x.jsxs)("div",{className:"players",children:[Object(x.jsxs)("div",{className:"field",children:["F",j/2]}),Object(x.jsx)("div",{className:"joined",children:d}),Object(x.jsx)("div",{className:"missed",children:"/ ".concat(j)})]}),Object(x.jsxs)("div",{className:"action",children:[n," ",e]})]}),Object(x.jsxs)("div",{className:"info",children:[Object(x.jsx)("div",{className:"name",children:l}),Object(x.jsx)("div",{className:"location",children:h})]})]})};var y=function(t){var e=t.props,n=e.user,c=e.source,a=e.matchs,r=e.action,s=function(){var t=Object(u.a)(l.a.mark((function t(e){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.joinMatch(e,n).then(function(){var t=Object(u.a)(l.a.mark((function t(e){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r();case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),i=function(){var t=Object(u.a)(l.a.mark((function t(e){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.leaveMatch(e,n).then(function(){var t=Object(u.a)(l.a.mark((function t(e){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r();case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=Object(u.a)(l.a.mark((function t(e){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.deleteMatch(e,n).then(function(){var t=Object(u.a)(l.a.mark((function t(e){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r();case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(x.jsxs)("div",{children:[a.map((function(t,e){return Object(x.jsx)(w,{match:t,user:n,source:c,joinMatch:function(){return s(t.id_match)},leaveMatch:function(){return i(t.id_match)},deleteMatch:function(){return o(t.id_match)}},e)})),Object(x.jsx)("div",{className:"bottom-space"})]})},N=function(t){var e=t.msg;if(e){var n=e;return Object(x.jsx)("div",{className:"message",children:Object(x.jsx)("div",{children:n})})}return null},_=function(){var t=Object(O.b)().loginWithRedirect;return Object(x.jsx)("button",{className:"action-button primary",onClick:function(){return t()},children:"Log In"})},k=function(){var t=Object(O.b)().logout;return Object(x.jsx)("button",{className:"action-button logout-button secondary",onClick:function(){return localStorage.removeItem("ls"),localStorage.removeItem("lid"),localStorage.removeItem("ln"),void t({returnTo:window.location.origin})},children:"Log Out"})},C=function(){var t=Object(O.b)().isAuthenticated;return localStorage.getItem("lid")||t?Object(x.jsx)(k,{}):Object(x.jsx)(_,{})},I=function(t){var e=t.user,n=function(){if(e){var t=e.lsName;return Object(x.jsx)("div",{children:t})}return null};return Object(x.jsx)("div",{className:"config",children:Object(x.jsxs)("div",{className:"profile",children:[Object(x.jsx)(n,{}),Object(x.jsx)(C,{})]})})},S={settingsIcon:n.p+"static/media/settings.5ce75b92.svg",openMatchsIcon:n.p+"static/media/open_matchs.da3387c7.svg",myMatchsIcon:n.p+"static/media/my_matchs.feae84d8.svg",createMatchIcon:n.p+"static/media/create.62809c1e.svg"},A=(n(67),n(32));var Y=function(){var t=localStorage.getItem("lid"),e=localStorage.getItem("ln"),n=Object(O.b)(),a=n.user,r=n.isLoading,o=a?a.sub:void 0,m=Object(c.useState)(t||0),b=Object(h.a)(m,2),v=b[0],g=b[1],M=Object(c.useState)([]),w=Object(h.a)(M,2),_=w[0],k=w[1],C=Object(c.useState)(""),Y=Object(h.a)(C,2),D=Y[0],F=Y[1];Object(c.useEffect)((function(){var t=function(){var t=Object(u.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.getAllMatchs().then((function(t){T("showAllMatchs"),k(t),W("All matchs")}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),e=function(){var t=Object(u.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.getOpenMatchs(v).then((function(t){T("showOpenMatchs"),W("Open matchs"),k("object"===typeof t?t:[])}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),n=function(n){v!==n?"/open_matchs"===window.location.pathname||"/"===window.location.pathname?e():"/my_matchs"===window.location.pathname?B():"/add_match"===window.location.pathname?G():z():t()};r||(a?f.logIn_signUp(o,a.name).then(function(){var t=Object(u.a)(l.a.mark((function t(e){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=g,t.next=3,e[0].id;case 3:return t.t1=t.sent,(0,t.t0)(t.t1),t.t2=localStorage,t.next=8,e[0].id;case 8:return t.t3=t.sent,t.t2.setItem.call(t.t2,"lid",t.t3),t.t4=localStorage,t.next=13,e[0].name;case 13:t.t5=t.sent,t.t4.setItem.call(t.t4,"ln",t.t5),n(1);case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()):n(0))}),[r,v,a,o]);var L=Object(c.useState)(""),R=Object(h.a)(L,2),q=R[0],T=R[1],H=Object(c.useState)(""),U=Object(h.a)(H,2),J=U[0],W=U[1],E=function(){var t=Object(u.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.getAllMatchs().then((function(t){T("showAllMatchs"),k(t),W("All matchs")}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),K=function(){var t=Object(u.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.getOpenMatchs(v).then((function(t){T("showOpenMatchs"),W("Open matchs"),k("object"===typeof t?t:[])}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),B=function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.getMyMatchs(v).then((function(e){T("showMyMatchs"),W("My matchs"),"object"===typeof e?k(e):(k([]),F(t?e:"You must be loged to join a match"))}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),G=function(){k([]),T("showCreateMatchForm"),W("Create a match"),F(t?"":"You must be loged to create a match")},z=function(){T("config"),W("Config")},P=Object(c.useState)({date:"",time:"",location:"",players_field:10,name:""}),Q=Object(h.a)(P,2),V=Q[0],X=Q[1],Z=function(t){X(Object(i.a)(Object(i.a)({},V),{},Object(s.a)({},t.target.name,t.target.value)))},$=function(){var t=Object(u.a)(l.a.mark((function t(e){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),n={date:"".concat(V.date," ").concat(V.time),location:V.location,players_field:Number(V.players_field),name:V.name},t.next=4,p.createMatch(n,v).then(function(){var t=Object(u.a)(l.a.mark((function t(e){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=F,t.next=3,e;case 3:t.t1=t.sent,(0,t.t0)(t.t1),"Match created"===e&&F(e);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),tt={matchs:_,user:v,source:q,action:function(){return B()}};return Object(x.jsx)(d.a,{children:Object(x.jsxs)("div",{className:"body-app",children:[Object(x.jsx)("div",{className:"body-app-background"}),Object(x.jsxs)("div",{className:"header",children:[Object(x.jsxs)("div",{className:"topbar",children:[Object(x.jsxs)("div",{className:"logo",children:["gute",Object(x.jsx)("span",{children:"match"})]}),Object(x.jsx)(d.b,{to:"/config",className:"".concat("config"===q?"none":"config-button"),onClick:function(){return z()},children:Object(x.jsx)("img",{src:S.settingsIcon,alt:"settings",className:"settings-icon",width:"20",height:"20"})})]}),Object(x.jsxs)("div",{className:"title",children:[J,"showOpenMatchs"===q&&_.length>0||"showMyMatchs"===q||"showAllMatchs"===q?"\u2014 ".concat(_.length):""]}),Object(x.jsx)("div",{className:"message-container",children:Object(x.jsx)(N,{msg:D,action:void(D&&setTimeout((function(){F("")}),8e3))})})]}),Object(x.jsx)("div",{className:"main",children:Object(x.jsxs)(j.c,{children:[Object(x.jsx)(j.a,{exact:!0,path:"/",children:Object(x.jsx)(y,{props:tt})}),Object(x.jsx)(j.a,{path:"/all_matchs",children:Object(x.jsx)(y,{props:tt})}),Object(x.jsx)(j.a,{path:"/open_matchs",children:Object(x.jsx)(y,{props:tt})}),Object(x.jsx)(j.a,{exact:!0,path:"/my_matchs/",children:Object(x.jsx)(y,{props:tt})}),Object(x.jsx)(j.a,{path:"/add_match",children:Object(x.jsx)("div",{children:"showCreateMatchForm"===q?Object(x.jsxs)("form",{onSubmit:$,onReset:function(){X(Object(i.a)(Object(i.a)({},V),{},{date:"",time:"",location:"",players_field:10,name:""}))},className:"create-match-form",children:[Object(x.jsxs)("fieldset",{children:[Object(x.jsx)("legend",{children:"Location"}),Object(x.jsx)("input",{className:"input-adress",required:!0,placeholder:"Adress",name:"location",value:V.location,onChange:Z}),Object(x.jsx)("label",{children:"Adress 1234, City, Country"})]}),Object(x.jsxs)("div",{className:"name-field",children:[Object(x.jsxs)("fieldset",{children:[Object(x.jsx)("legend",{children:"Field"}),Object(x.jsx)("div",{children:Object(x.jsxs)("select",{className:"drop-players-field",name:"players_field",type:"number",value:V.players_field,onChange:Z,children:[Object(x.jsx)("option",{value:"10",children:"F \u2014 5"}),Object(x.jsx)("option",{value:"14",children:"F \u2014 7"}),Object(x.jsx)("option",{value:"18",children:"F \u2014 9"}),Object(x.jsx)("option",{value:"22",children:"F \u2014 11"})]})})]}),Object(x.jsxs)("fieldset",{children:[Object(x.jsx)("legend",{children:"Name"}),Object(x.jsx)("input",{className:"input-name",required:!0,placeholder:"Match name",maxLength:"10",name:"name",value:V.name,onChange:Z})]})]}),Object(x.jsxs)("div",{className:"date-field",children:[Object(x.jsxs)("fieldset",{children:[Object(x.jsx)("legend",{children:"Date"}),Object(x.jsx)("input",{required:!0,className:"input-date",type:"date",name:"date",min:A().format("YYYY-MM-DD"),max:A().add(3,"M").format("YYYY-MM-DD"),value:V.date,onChange:Z})]}),Object(x.jsxs)("fieldset",{children:[Object(x.jsx)("legend",{children:"Time"}),Object(x.jsx)("input",{required:!0,className:"input-time",type:"time",name:"time",value:V.time,onChange:Z})]})]}),Object(x.jsxs)("div",{className:"action",children:[Object(x.jsx)("button",{type:"reset",value:"Reset",children:"Reset"}),Object(x.jsx)("button",{type:"submit",children:"Create"})]})]}):null})}),Object(x.jsx)(j.a,{path:"/config",children:Object(x.jsx)(I,{user:{lsName:e}})})]})}),Object(x.jsxs)("div",{className:"navbar",children:[0===v?Object(x.jsx)(d.b,{to:"/all_matchs",onClick:function(){return E()},children:Object(x.jsx)("img",{src:S.openMatchsIcon,alt:"All Matchs",className:"".concat("showAllMatchs"===q?"focus":"nav-icon"),width:"16",height:"16"})}):Object(x.jsx)(d.b,{to:"/open_matchs",onClick:function(){return K()},children:Object(x.jsx)("img",{src:S.openMatchsIcon,alt:"Open Matchs",className:"".concat("showOpenMatchs"===q?"focus":"nav-icon"),width:"16",height:"16"})}),Object(x.jsx)(d.b,{to:"/add_match",onClick:function(){return G()},children:Object(x.jsx)("img",{src:S.createMatchIcon,alt:"Create Match",className:"".concat("showCreateMatchForm"===q?"focus":"nav-icon"),width:"16",height:"16"})}),Object(x.jsx)(d.b,{to:"/my_matchs",onClick:function(){return B()},children:Object(x.jsx)("img",{src:S.myMatchsIcon,alt:"My Matchs",className:"".concat("showMyMatchs"===q?"focus":"nav-icon"),width:"16",height:"16"})})]})]})})},D=function(t){var e=t.children,n=Object(j.f)();return Object(x.jsx)(O.a,{domain:"guten.us.auth0.com",clientId:"9KgqHeGFIRxSvwUD75TAWC573AHlg9WK",redirectUri:window.location.origin,onRedirectCallback:function(t){n.push((null===t||void 0===t?void 0:t.returnTo)||window.location.pathname)},children:e})};n(72);r.a.render(Object(x.jsx)(d.a,{children:Object(x.jsx)(D,{children:Object(x.jsx)("div",{className:"app",children:Object(x.jsx)(Y,{})})})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.fa3ce245.chunk.js.map