(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{64:function(t,e,n){},68:function(t,e,n){},69:function(t,e,n){},70:function(t,e,n){},71:function(t,e,n){},76:function(t,e,n){},77:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n(34),r=n.n(a),s=n(17),i=n(16),o=n(2),u=n.n(o),l=n(5),d=n(13),h=n(11),j=n.n(h),f={getAllMatchs:function(){return j.a.get("http://localhost:5000/all_matchs").then((function(t){return t.data}))},getOpenMatchs:function(t){return j.a.get("http://localhost:5000/open_matchs/".concat(t)).then((function(t){return t.data}))},getMyMatchs:function(t){return j.a.get("http://localhost:5000/my_matchs/".concat(t)).then((function(t){return t.data}))},createMatch:function(t,e){return j.a.post("http://localhost:5000/add_match/".concat(e),t).then((function(t){return t.data}))},deleteMatch:function(t,e){var n={id_match:t};return j.a.delete("http://localhost:5000/my_matchs/owner/".concat(e),{data:n}).then((function(t){return t.data}))},joinMatch:function(t,e){var n={id_match:t};return j.a.post("http://localhost:5000/open_matchs/".concat(e),n).then((function(t){return t.data}))},leftMatch:function(t,e){var n={id_match:t};return j.a.delete("http://localhost:5000/my_matchs/".concat(e),{data:n}).then((function(t){return t.data}))}},b={logIn_signUp:function(t){return j.a.post("http://localhost:5000/config/".concat(t)).then((function(t){return t.data}))}},p=n(10),m=(n(64),n(0)),O=n(32),v=n(66),x=n(67);O.extend(v),O.extend(x);var g=function(t){var e,n,c=t.user,a=t.match,r=t.source,s=t.join,i=t.left,o=t.deleteMatch,u=a.name,l=a.date,d=a.location,h=a.players,j=a.players_field,f=a.id_admin;return 32!==c&&(e="showOpenMatchs"===r?Object(m.jsx)("button",{onClick:s,children:"Join"}):"showMyMatchs"===r?Object(m.jsx)("button",{onClick:i,children:"Left"}):void 0),f===c&&(n=Object(m.jsx)("button",{onClick:o,children:"Del"})),Object(m.jsxs)("div",{id:"".concat(r),children:[Object(m.jsx)("div",{className:"date",children:O(l).utc().format("DD \u2014\u2014 dddd, MMMM. YYYY")}),Object(m.jsxs)("div",{className:"match",children:[Object(m.jsx)("div",{className:"time",children:O(l).utc().format("HH:mm")}),Object(m.jsxs)("div",{className:"players",children:[Object(m.jsxs)("div",{className:"field",children:["F",j/2]}),Object(m.jsx)("div",{className:"joined",children:h}),Object(m.jsx)("div",{className:"missed",children:j-h})]}),Object(m.jsxs)("div",{className:"info",children:[Object(m.jsx)("div",{className:"name",children:u}),Object(m.jsx)("div",{className:"location",children:d})]}),Object(m.jsxs)("div",{className:"action",children:[n," ",e]})]})]})},A=(n(68),function(t){var e=t.msg;if(e){var n=e;return Object(m.jsx)("div",{className:"message",children:Object(m.jsx)("div",{children:n})})}return null}),M=function(){var t=Object(p.b)().loginWithRedirect;return Object(m.jsx)("button",{className:"action-button primary",onClick:function(){return t()},children:"Log In \u2192"})},w=function(){var t=Object(p.b)().logout;return Object(m.jsx)("button",{className:"action-button logout-button secondary",onClick:function(){return t({returnTo:window.location.origin})},children:"\u2190 Log Out"})},y=function(){return Object(p.b)().isAuthenticated?Object(m.jsx)(w,{}):Object(m.jsx)(M,{})},N=(n(69),function(t){var e=t.source,n=t.user,c=function(){if(n){var t=n.name,e=n.picture;return Object(m.jsxs)("div",{children:[t,Object(m.jsx)("img",{src:e,alt:"profile-pic"})]})}return null};return"config"===e?Object(m.jsx)("div",{className:"config",children:Object(m.jsxs)("div",{className:"profile",children:[Object(m.jsx)(c,{}),Object(m.jsx)(y,{})]})}):null}),C=(n(70),n(71),n(32));var k=function(){var t=Object(p.b)(),e=t.isLoading,n=t.user,a=null===n||void 0===n?void 0:n.sub,r=Object(c.useState)(0),o=Object(d.a)(r,2),h=o[0],j=o[1];Object(c.useEffect)((function(){var t=function(){var t=Object(l.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.logIn_signUp(a).then(function(){var t=Object(l.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return j(n[0].id),console.log("get pi",h),console.log("get ps",a),t.t0=console,t.next=6,n[0].id;case 6:t.t1=t.sent,t.t0.log.call(t.t0,"get res",t.t1),console.log(e);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),n=function(){var t=Object(l.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.getOpenMatchs(h).then((function(t){M("showOpenMatchs"),Y("Open matchs"),U("object"===typeof t?t:[])}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();e||(t(),n())}),[h,e,a]);var O=Object(c.useState)(""),v=Object(d.a)(O,2),x=v[0],M=v[1],w=Object(c.useState)(""),y=Object(d.a)(w,2),k=y[0],Y=y[1],_=Object(c.useState)([]),R=Object(d.a)(_,2),S=R[0],U=R[1],J=Object(c.useState)(""),W=Object(d.a)(J,2),B=W[0],D=W[1],E=Object(c.useState)({date:"",time:"",location:"",players_field:10,name:""}),F=Object(d.a)(E,2),I=F[0],Q=F[1],G=function(){var t=Object(l.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.getAllMatchs().then((function(t){M("showAllMatchs"),U(t),Y("Open matchs"),n||D("You must be logged to join a match")}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),K=function(){var t=Object(l.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.getOpenMatchs(h).then((function(t){M("showOpenMatchs"),Y("Open matchs"),"object"===typeof t?U(t):(U([]),D(t))}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),L=function(){var t=Object(l.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.getMyMatchs(h).then((function(t){M("showMyMatchs"),Y("My matchs"),"object"===typeof t?U(t):(U([]),D(t),n||D("You must be logged to join a match"))}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),H=function(){U([]),M("config"),Y("Config")},q=function(t){Q(Object(i.a)(Object(i.a)({},I),{},Object(s.a)({},t.target.name,t.target.value)))},X=function(){var t=Object(l.a)(u.a.mark((function t(e){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),n={date:"".concat(I.date," ").concat(I.time),location:I.location,players_field:Number(I.players_field),name:I.name},t.next=4,f.createMatch(n,h).then(function(){var t=Object(l.a)(u.a.mark((function t(e){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=D,t.next=3,e;case 3:t.t1=t.sent,(0,t.t0)(t.t1),"Match created"===e&&L();case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),z=function(){var t=Object(l.a)(u.a.mark((function t(e){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.deleteMatch(e,h).then(function(){var t=Object(l.a)(u.a.mark((function t(e){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=D,t.next=3,e;case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 2:L();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),P=function(){var t=Object(l.a)(u.a.mark((function t(e){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.joinMatch(e,h).then(function(){var t=Object(l.a)(u.a.mark((function t(e){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=D,t.next=3,e;case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 2:L();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),T=function(){var t=Object(l.a)(u.a.mark((function t(e){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.leftMatch(e,h).then(function(){var t=Object(l.a)(u.a.mark((function t(e){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=D,t.next=3,e;case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 2:L();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"body",children:[Object(m.jsxs)("div",{className:"header",children:[Object(m.jsxs)("div",{className:"topvar",children:[Object(m.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAQCAYAAABUWyyMAAAABHNCSVQICAgIfAhkiAAAAW5JREFUSIntlK1OA1EQhb9pECSIliARNaQkKEhfgASB4A2wFTS8QPsI7GuQFF+HWCSyKQmOVCyqwS0JBnUQzE0uy4ot7QKix8z/3J07Zy+sscYaAZJOJQ3/+jsWgqRRiS+RlMW+jRUclAEtM2stUJMATWAPmABdYGZmfUljYAtIgW3gXBLANXDpsYn3GQNzM+s3lh0EaP+gpgscu34BzFwCvAE7QB94ct8jcAXs40MALWAe1YGkVN+ReSx3uxfbrheRlPi/UCA6L40p4rlD738f+11mgWbFOoCGH34CPJuZAXdVr9XzAV7tEwNvHHrdAG1JadWewCawG9nvkqbALXBWdjH4RGEbYdpe1Y24LUm560nJluQfUivKfvbOCvo+mNnRCvpURgN4cf3AZbeQk7vs+FaaJX2aAGY2cPswBCSNwjZrh6RpRIM8pkNEtRArUit+KJJCfsDvDFIYKvC8dl7XCn/m/uYWl8W/oMKS+ABzB619U5gCYwAAAABJRU5ErkJggg==",alt:"logo"}),Object(m.jsx)("div",{className:"config",children:Object(m.jsx)("button",{className:"".concat("config"===x?"focus":""," config-button nav-button "),onClick:function(){return H()},children:"Config"})})]}),Object(m.jsx)("div",{className:"message-layout",children:Object(m.jsx)(A,{msg:B,action:void(B&&setTimeout((function(){D("")}),8e3))})}),Object(m.jsxs)("div",{className:"title",children:[k," ","showOpenMatchs"===x&&S.length>0||"showMyMatchs"===x||"showAllMatchs"===x?"\u2014 ".concat(S.length):""]})]}),Object(m.jsxs)("div",{className:"main",children:[Object(m.jsx)("div",{children:"createMatch"===x?Object(m.jsxs)("form",{onSubmit:n?X:H,onReset:function(){Q(Object(i.a)(Object(i.a)({},I),{},{date:"",time:"",location:"",players_field:10,name:""}))},className:"form",children:[Object(m.jsxs)("fieldset",{children:[Object(m.jsx)("legend",{children:"Date"}),Object(m.jsxs)("div",{className:"date-field",children:[Object(m.jsx)("input",{required:!0,className:"input-date",type:"date",name:"date",min:C().format("YYYY-MM-DD"),max:C().add(3,"M").format("YYYY-MM-DD"),value:I.date,onChange:q}),Object(m.jsx)("input",{required:!0,className:"input-time",type:"time",name:"time",value:I.time,onChange:q})]})]}),Object(m.jsxs)("fieldset",{children:[Object(m.jsx)("legend",{children:"Location"}),Object(m.jsx)("input",{className:"input-adress",required:!0,placeholder:"Adress",name:"location",value:I.location,onChange:q}),Object(m.jsx)("label",{children:"Adress 1234, City, Country"})]}),Object(m.jsxs)("div",{className:"name-field",children:[Object(m.jsxs)("fieldset",{children:[Object(m.jsx)("legend",{children:"Field"}),Object(m.jsx)("div",{children:Object(m.jsxs)("select",{className:"drop-players-field",name:"players_field",type:"number",value:I.players_field,onChange:q,children:[Object(m.jsx)("option",{value:"10",children:"F \u2014 5"}),Object(m.jsx)("option",{value:"14",children:"F \u2014 7"}),Object(m.jsx)("option",{value:"18",children:"F \u2014 9"}),Object(m.jsx)("option",{value:"22",children:"F \u2014 11"})]})})]}),Object(m.jsxs)("fieldset",{children:[Object(m.jsx)("legend",{children:"Name"}),Object(m.jsx)("input",{className:"input-name",required:!0,placeholder:"Match name",maxLength:"12",name:"name",value:I.name,onChange:q}),Object(m.jsx)("label",{children:"Max: 12 characteres"})]})]}),Object(m.jsxs)("div",{className:"action-box",children:[Object(m.jsxs)("button",{type:"reset",value:"Reset",className:"reset-button",children:[Object(m.jsx)("p",{className:"arrow",children:"\u2191"}),"Reset"]}),Object(m.jsx)("button",{type:"submit",className:"action-button primary",children:"Create \u2192"})]})]}):null}),Object(m.jsx)(N,{source:x,user:n}),Object(m.jsx)("div",{children:S.map((function(t,e){return Object(m.jsx)(g,{match:t,user:h,source:x,join:function(){return P(t.id_match)},left:function(){return T(t.id_match)},deleteMatch:function(){return z(t.id_match)}},e)}))}),Object(m.jsx)("div",{className:"bottom-space"})]}),Object(m.jsxs)("div",{className:"navbar",children:[Object(m.jsx)("button",{className:"".concat("showOpenMatchs"===x?"focus":""," nav-button"),onClick:n?function(){return K()}:function(){return G()},children:"Open Matchs"}),Object(m.jsx)("button",{className:"".concat("createMatch"===x?"focus":""," nav-button"),onClick:function(){return U([]),M("createMatch"),Y("Create a match"),void(n||D("You must be logged to create a match"))},children:"Add Match"}),Object(m.jsx)("button",{className:"".concat("showMyMatchs"===x?"focus":""," nav-button"),onClick:function(){return L()},children:"My Matchs"})]})]})},Y=n(20),_=n(3),R=function(t){var e=t.children,n=Object(_.d)();return Object(m.jsx)(p.a,{domain:"guten.us.auth0.com",clientId:"9KgqHeGFIRxSvwUD75TAWC573AHlg9WK",redirectUri:window.location.origin,onRedirectCallback:function(t){n.push((null===t||void 0===t?void 0:t.returnTo)||window.location.pathname)},children:e})};n(76);r.a.render(Object(m.jsx)(Y.a,{children:Object(m.jsx)(R,{children:Object(m.jsx)("div",{className:"app",children:Object(m.jsx)(k,{})})})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.2908a7e8.chunk.js.map