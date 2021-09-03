(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{4:function(e,t){e.exports={TITLES:{ALL_MATCHS:"All matchs",OPEN_MATCHS:"Open matchs",MY_MATCHS:"My matchs",CREATE_MATCH:"Create match",CONFIG:"Config"}}},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(35),r=c.n(a),s=c(2),i=c.n(s),o=c(6),u=c(15),l=c(11),d=c(3),h=c(13),j=c.n(h),m="https://gutematch.herokuapp.com",b={getAllMatchs:function(){return j.a.get("".concat(m,"/all_matchs")).then((function(e){return e.data}))},getOpenMatchs:function(e){return j.a.get("".concat(m,"/open_matchs/").concat(e)).then((function(e){return e.data}))},getMyMatchs:function(e){return j.a.get("".concat(m,"/my_matchs/").concat(e)).then((function(e){return e.data}))},createMatch:function(e,t){return j.a.post("".concat(m,"/add_match/").concat(t),e).then((function(e){return e.data}))},deleteMatch:function(e,t){var c={id_match:e};return j.a.delete("".concat(m,"/my_matchs/owner/").concat(t),{data:c}).then((function(e){return e.data}))},joinMatch:function(e,t){var c={id_match:e};return j.a.post("".concat(m,"/open_matchs/").concat(t),c).then((function(e){return e.data}))},leaveMatch:function(e,t){var c={id_match:e};return j.a.delete("".concat(m,"/my_matchs/").concat(t),{data:c}).then((function(e){return e.data}))}},p={logIn_signUp:function(e,t){var c={name:t};return j.a.post("".concat("https://gutematch.herokuapp.com","/config/").concat(e),c).then((function(e){return e.data}))}},f=c(12),O=c(4),x=c.n(O),v=c(0),g=c(33),M=c(66),T=c(67);g.extend(M),g.extend(T);var y=function(e){var t,c,n=e.user,a=e.match,r=e.source,s=e.joinMatch,i=e.leaveMatch,o=e.deleteMatch,u=a.name,l=a.date,d=a.location,h=a.players,j=a.players_field,m=a.id_admin;return t=r===x.a.TITLES.OPEN_MATCHS?Object(v.jsx)("button",{onClick:s,children:"Join"}):r===x.a.TITLES.MY_MATCHS?Object(v.jsx)("button",{onClick:i,children:"Leave"}):void 0,m===Number(n)&&(c=Object(v.jsx)("button",{onClick:o,children:"Del"})),Object(v.jsxs)("div",{id:"".concat(r),className:"match-container",children:[Object(v.jsxs)("div",{className:"date",children:[Object(v.jsx)("div",{className:"day",children:g(l).utc().format("DD \u2014 dddd")}),Object(v.jsx)("div",{className:"month-year",children:g(l).utc().format(", MMMM. YYYY")})]}),Object(v.jsxs)("div",{className:"match",children:[Object(v.jsx)("div",{className:"time",children:g(l).utc().format("HH:mm")}),Object(v.jsxs)("div",{className:"players",children:[Object(v.jsxs)("div",{className:"field",children:["F",j/2]}),Object(v.jsx)("div",{className:"joined",children:h}),Object(v.jsx)("div",{className:"missed",children:"/ ".concat(j)})]}),Object(v.jsxs)("div",{className:"action-match",children:[c," ",t]})]}),Object(v.jsxs)("div",{className:"info",children:[Object(v.jsx)("div",{className:"name",children:u}),Object(v.jsx)("div",{className:"location",children:d})]})]})};var _=function(e){var t=e.props,c=t.user,n=t.source,a=t.matchs,r=t.action,s=function(){var e=Object(o.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.joinMatch(t,c).then(function(){var e=Object(o.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r();case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=Object(o.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.leaveMatch(t,c).then(function(){var e=Object(o.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r();case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(o.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.deleteMatch(t,c).then(function(){var e=Object(o.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r();case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{id:"match-page",children:[a.map((function(e,t){return Object(v.jsx)(y,{match:e,user:c,source:n,joinMatch:function(){return s(e.id_match)},leaveMatch:function(){return u(e.id_match)},deleteMatch:function(){return l(e.id_match)}},t)})),Object(v.jsx)("div",{className:"bottom-space"})]})},N=c(19),C=c(18),S=c(33);var I=function(e){var t=e.props,c=t.user,a=t.source,r=t.action,s=Object(n.useState)({date:"2021-11-03",time:"22:00",location:"a",players_field:10,name:"a"}),l=Object(u.a)(s,2),h=l[0],j=l[1],m=function(e){j(Object(C.a)(Object(C.a)({},h),{},Object(N.a)({},e.target.name,e.target.value)))},p=Object(d.f)(),f=function(){var e=Object(o.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),0===c){e.next=7;break}return n={date:"".concat(h.date," ").concat(h.time),location:h.location,players_field:Number(h.players_field),name:h.name},e.next=5,b.createMatch(n,c).then(function(){var e=Object(o.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:p.push("/my_matchs/".concat(c)),r();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 5:e.next=7;break;case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsx)("div",{id:"match-form",children:a===x.a.TITLES.CREATE_MATCH?Object(v.jsxs)("form",{onSubmit:f,onReset:function(){j(Object(C.a)(Object(C.a)({},h),{},{date:"",time:"",location:"",players_field:10,name:""}))},className:"create-match-form",children:[Object(v.jsx)("div",{id:"location-field",children:Object(v.jsxs)("fieldset",{children:[Object(v.jsx)("legend",{children:"Location"}),Object(v.jsx)("input",{className:"input-adress",required:!0,placeholder:"Adress",name:"location",value:h.location,onChange:m}),Object(v.jsx)("label",{children:"Adress 1234, City, Country"})]})}),Object(v.jsxs)("div",{className:"name-field",children:[Object(v.jsxs)("fieldset",{children:[Object(v.jsx)("legend",{children:"Field"}),Object(v.jsxs)("select",{className:"drop-players-field",name:"players_field",type:"number",value:h.players_field,onChange:m,children:[Object(v.jsx)("option",{value:"10",children:"F \u2014 5"}),Object(v.jsx)("option",{value:"14",children:"F \u2014 7"}),Object(v.jsx)("option",{value:"18",children:"F \u2014 9"}),Object(v.jsx)("option",{value:"22",children:"F \u2014 11"})]})]}),Object(v.jsxs)("fieldset",{children:[Object(v.jsx)("legend",{children:"Name"}),Object(v.jsx)("input",{className:"input-name",required:!0,placeholder:"Match name",maxLength:"10",name:"name",value:h.name,onChange:m})]})]}),Object(v.jsxs)("div",{className:"date-field",children:[Object(v.jsxs)("fieldset",{children:[Object(v.jsx)("legend",{children:"Date"}),Object(v.jsx)("input",{required:!0,className:"input-date",type:"date",name:"date",min:S().format("YYYY-MM-DD"),max:S().add(3,"M").format("YYYY-MM-DD"),value:h.date,onChange:m})]}),Object(v.jsxs)("fieldset",{children:[Object(v.jsx)("legend",{children:"Time"}),Object(v.jsx)("input",{required:!0,className:"input-time",type:"time",name:"time",value:h.time,onChange:m})]})]}),Object(v.jsxs)("div",{className:"action-match-form",children:[Object(v.jsx)("button",{type:"reset",value:"Reset",children:"Reset"}),Object(v.jsx)("button",{type:"submit",children:"Create"})]})]}):null})},w=function(e){var t=e.msg;if(t){var c=t;return Object(v.jsx)("div",{className:"message",children:Object(v.jsx)("div",{children:c})})}return null},A=function(){var e=Object(f.b)().loginWithRedirect;return Object(v.jsx)("button",{className:"action-button primary",onClick:function(){return e()},children:"Log In"})},k=function(){var e=Object(f.b)().logout;return Object(v.jsx)("button",{className:"action-button logout-button secondary",onClick:function(){return localStorage.removeItem("player_id"),localStorage.removeItem("player_name"),void e({returnTo:window.location.origin})},children:"Log Out"})},E=function(){var e=Object(f.b)().isAuthenticated;return localStorage.getItem("player_id")||e?Object(v.jsx)(k,{}):Object(v.jsx)(A,{})},L=function(e){var t=e.playerName,c=function(){return t?Object(v.jsx)("div",{children:t}):null};return Object(v.jsx)("div",{className:"config",children:Object(v.jsxs)("div",{className:"profile",children:[Object(v.jsx)(c,{}),Object(v.jsx)(E,{})]})})},H={settingsIcon:c.p+"static/media/settings.5ce75b92.svg",openMatchsIcon:c.p+"static/media/open_matchs.da3387c7.svg",myMatchsIcon:c.p+"static/media/my_matchs.feae84d8.svg",createMatchIcon:c.p+"static/media/create.62809c1e.svg"};c(72),c(73);var Y=function(){var e=localStorage.getItem("player_id"),t=localStorage.getItem("player_name"),c=Object(f.b)().user,a=c?c.sub:void 0,r=Object(n.useState)(Number(e)||0),s=Object(u.a)(r,2),h=s[0],j=s[1];Object(n.useEffect)((function(){c&&p.logIn_signUp(a,c.name).then(function(){var e=Object(o.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=j,e.next=3,t[0].id;case 3:return e.t1=e.sent,(0,e.t0)(e.t1),e.t2=localStorage,e.next=8,t[0].id;case 8:return e.t3=e.sent,e.t2.setItem.call(e.t2,"player_id",e.t3),e.t4=localStorage,e.next=13,t[0].name;case 13:e.t5=e.sent,e.t4.setItem.call(e.t4,"player_name",e.t5);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[c,a,h]);var m=Object(n.useState)([]),O=Object(u.a)(m,2),g=O[0],M=O[1],T=Object(n.useState)(""),y=Object(u.a)(T,2),N=y[0],C=y[1],S=Object(n.useState)(""),A=Object(u.a)(S,2),k=A[0],E=A[1],Y=function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.getAllMatchs().then((function(e){E(x.a.TITLES.ALL_MATCHS),M(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(E(x.a.TITLES.OPEN_MATCHS),0===h){e.next=6;break}return e.next=4,b.getOpenMatchs(h).then((function(e){"object"===typeof e?M(e):(M([]),C(e))}));case 4:e.next=7;break;case 6:C("You must be logged to see opened matchs");case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(E(x.a.TITLES.MY_MATCHS),0===h){e.next=6;break}return e.next=4,b.getMyMatchs(h).then((function(e){"object"===typeof e?M(e):(M([]),C(e))}));case 4:e.next=8;break;case 6:M([]),C("You must be logged to join a match");case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R={user:h,source:k,action:function(){return F()}},q={matchs:g,user:h,source:k,action:function(){return F()}};return Object(v.jsx)(l.a,{children:Object(v.jsxs)("div",{className:"app",children:[Object(v.jsx)("div",{className:"app-background"}),Object(v.jsxs)("div",{className:"header",children:[Object(v.jsxs)("div",{className:"topbar-container",children:[Object(v.jsxs)("div",{className:"logo",children:["gute",Object(v.jsx)("span",{children:"match"})]}),Object(v.jsx)(l.b,{to:"/config",className:"".concat(k===x.a.TITLES.CONFIG?"display-none":"config-button"),onClick:function(){return M([]),void E(x.a.TITLES.CONFIG)},children:Object(v.jsx)("img",{src:H.settingsIcon,alt:"settings",className:"settings-icon",width:"20",height:"20"})})]}),Object(v.jsxs)("div",{className:"title-container",children:[k,(k===x.a.TITLES.OPEN_MATCHS||k===x.a.TITLES.MY_MATCHS||k===x.a.TITLES.ALL_MATCHS)&&g.length>0?" \u2014 ".concat(g.length):""]}),Object(v.jsx)("div",{className:"message-container",children:Object(v.jsx)(w,{msg:N,action:void(N&&setTimeout((function(){C("")}),8e3))})})]}),Object(v.jsx)("div",{className:"main",children:Object(v.jsxs)(d.c,{children:[Object(v.jsx)(d.a,{exact:!0,path:"/",children:Object(v.jsx)(_,{props:q})}),Object(v.jsx)(d.a,{path:"/all_matchs/".concat(h),children:Object(v.jsx)(_,{props:q})}),Object(v.jsx)(d.a,{path:"/open_matchs/".concat(h),children:Object(v.jsx)(_,{props:q})}),Object(v.jsx)(d.a,{path:"/my_matchs/".concat(h),children:Object(v.jsx)(_,{props:q})}),Object(v.jsx)(d.a,{path:"/add_match/".concat(h),children:Object(v.jsx)(I,{props:R})}),Object(v.jsx)(d.a,{path:"/config",children:Object(v.jsx)(L,{playerName:t})})]})}),Object(v.jsxs)("div",{className:"navbar",children:[0!==h?Object(v.jsx)(l.b,{to:"/open_matchs/".concat(h),onClick:function(){return D()},children:Object(v.jsx)("img",{src:H.openMatchsIcon,alt:"Open Matchs",className:"".concat(k===x.a.TITLES.OPEN_MATCHS?"focus":"nav-icon"),width:"16",height:"16"})}):Object(v.jsx)(l.b,{to:"/all_matchs/".concat(h),onClick:function(){return Y()},children:Object(v.jsx)("img",{src:H.openMatchsIcon,alt:"All Matchs",className:"".concat(k===x.a.TITLES.ALL_MATCHS?"focus":"nav-icon"),width:"16",height:"16"})}),Object(v.jsx)(l.b,{to:"/add_match/".concat(h),onClick:function(){return M([]),E(x.a.TITLES.CREATE_MATCH),void C(0!==h?"":"You must be logged to create a match")},children:Object(v.jsx)("img",{src:H.createMatchIcon,alt:"Create Match",className:"".concat(k===x.a.TITLES.CREATE_MATCH?"focus":"nav-icon"),width:"16",height:"16"})}),Object(v.jsx)(l.b,{to:"/my_matchs/".concat(h),onClick:function(){return F()},children:Object(v.jsx)("img",{src:H.myMatchsIcon,alt:"My Matchs",className:"".concat(k===x.a.TITLES.MY_MATCHS?"focus":"nav-icon"),width:"16",height:"16"})})]})]})})},D=function(e){var t=e.children,c=Object(d.f)();return Object(v.jsx)(f.a,{domain:"guten.us.auth0.com",clientId:"9KgqHeGFIRxSvwUD75TAWC573AHlg9WK",redirectUri:window.location.origin,onRedirectCallback:function(e){c.push((null===e||void 0===e?void 0:e.returnTo)||window.location.pathname)},children:t})};r.a.render(Object(v.jsx)(l.a,{children:Object(v.jsx)(D,{children:Object(v.jsx)(Y,{})})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.8d17b522.chunk.js.map