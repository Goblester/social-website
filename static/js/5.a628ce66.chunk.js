(this["webpackJsonp01-social-website"]=this["webpackJsonp01-social-website"]||[]).push([[5],{118:function(e,s,a){e.exports={dialogs:"Dialogs_dialogs__holZG",dialogItems:"Dialogs_dialogItems__CH3a-",dialog:"Dialogs_dialog__3GV_v",dialogName:"Dialogs_dialogName__3SXDA",active:"Dialogs_active__6mBNZ",messages:"Dialogs_messages__14Gis",newMessage:"Dialogs_newMessage__3QlX-",allMessages:"Dialogs_allMessages__XVBzr",message:"Dialogs_message__lz9nj",leftMessage:"Dialogs_leftMessage__2rTbo",rightMessage:"Dialogs_rightMessage__1aAEO",yourImg:"Dialogs_yourImg__1Q9uQ",personImg:"Dialogs_personImg__3SKAg"}},217:function(e,s,a){"use strict";a.r(s);var t=a(118),i=a.n(t),c=a(56),o=(a(1),a(6)),n=a(32),l=a.n(n),r=a(0);var g=function(e){var s=e.name,a=e.key,t=e.photo,c="/dialogs/"+a;return Object(r.jsxs)("div",{className:i.a.dialog,children:[Object(r.jsx)("div",{className:l.a.circularLandscape,children:Object(r.jsx)("img",{src:t,alt:""})}),Object(r.jsx)(o.b,{to:c,children:Object(r.jsx)("div",{className:i.a.dialogName,children:s})})]})};var d=function(e){var s=e.message,a=e.fromYou,t=e.photo,c=a?i.a.rightMessage:i.a.leftMessage,o=a?i.a.yourImg:i.a.personImg;return Object(r.jsxs)("div",{className:c,children:[Object(r.jsx)("div",{className:"".concat(o," ").concat(l.a.circularLandscape," "),children:Object(r.jsx)("img",{src:t,alt:""})}),Object(r.jsx)("div",{className:i.a.message,children:s})]})},m=a(21),j=a(39),u=a(17);var b=function(e){return Object(r.jsx)(m.b,{onSubmit:function(s){e.sendMessage(s.message)},render:function(e){var s=e.handleSubmit,a=e.form,t=e.invalid;return Object(r.jsxs)("form",{onSubmit:s,children:[Object(r.jsx)(m.a,{name:"message",component:j.b,type:"textarea",placeholder:"enter the message",validate:Object(u.a)(u.b,Object(u.c)(15))}),Object(r.jsx)("button",{type:"submit",disabled:t,onMouseLeave:function(){a.reset()},children:"send"})]})}})};var _=function(e){var s=e.dialogs.map((function(e){return Object(r.jsx)(g,{name:e.name,photo:e.photo},e.id)})),a=e.messages.map((function(e){return Object(r.jsx)(d,{message:e.message,fromYou:e.fromYou,photo:e.photo},e.id)}));return Object(r.jsxs)("div",{className:i.a.dialogs,children:[Object(r.jsx)("div",{className:i.a.dialogItems,children:s}),Object(r.jsxs)("div",{className:i.a.messages,children:[Object(r.jsx)("div",{className:i.a.allMessages,children:a}),Object(r.jsx)("div",{className:i.a.newMessage,children:Object(r.jsx)(b,{sendMessage:e.sendMessage})})]})]})},h=a(15),O=a(2),v=a(13),x=a(5);var f=function(e){return Object(h.b)((function(e){return{isAuth:e.auth.isAuthorized}}))((function(s){s.isAuth;var a=Object(v.a)(s,["isAuth"]);return s.isAuth?Object(r.jsx)(e,Object(O.a)({},a)):Object(r.jsx)(x.a,{to:"/login"})}))},p=a(16),M={sendMessage:c.b};s.default=Object(p.d)(Object(h.b)((function(e){return{dialogs:e.messagesPage.dialogs,messages:e.messagesPage.messages}}),M),f)(_)}}]);
//# sourceMappingURL=5.a628ce66.chunk.js.map