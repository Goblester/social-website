(this["webpackJsonp01-social-website"]=this["webpackJsonp01-social-website"]||[]).push([[3],{103:function(t,e,s){t.exports={descriptionBlock:"ProfileInfo_descriptionBlock__2xJaO"}},104:function(t,e,s){t.exports={postsBlock:"MyPosts_postsBlock__3zfSV",posts:"MyPosts_posts__2CbOe"}},105:function(t,e,s){t.exports={item:"Post_item__2d5jo"}},106:function(t,e,s){},107:function(t,e,s){"use strict";s.r(e);var n=s(23),o=s(24),r=s(27),c=s(26),i=s(0),u=s.n(i),a=s(18),l=s(2),p=(s(106),s(103)),j=s.n(p),d=s(59),b=s(60),f=s(1);var O=function(t){var e=Object(i.useState)(!1),s=Object(b.a)(e,2),n=s[0],o=s[1],r=Object(i.useState)(t.status),c=Object(b.a)(r,2),u=c[0],a=c[1],l=t.userId===t.profileId;return Object(i.useEffect)((function(){a(t.status)}),[t.status]),Object(f.jsxs)("div",{children:[!n&&Object(f.jsx)("div",{children:Object(f.jsx)("span",{onDoubleClick:function(){return l&&o(!0)},children:t.status?t.status:"-------"})}),n&&l&&Object(f.jsx)("div",{children:Object(f.jsx)("input",{onChange:function(t){a(t.currentTarget.value)},autoFocus:!0,onBlur:function(){t.setStatus(u),o(!1)},type:"text",value:u})})]})};var h=function(t){var e=t.profile,s=t.setStatus,n=t.status,o=t.userId;return Object(f.jsx)("div",{children:Object(f.jsxs)("div",{className:j.a.descriptionBlock,children:[Object(f.jsx)("img",{src:null!==e.photos.large?e.photos.large:d.a,alt:""}),Object(f.jsx)("div",{children:Object(f.jsx)(O,{setStatus:s,status:n,userId:o,profileId:e.userId})})]})})},v=s(48),x=s(104),m=s.n(x),k=s(105),g=s.n(k);var S=function(t){var e=t.message,s=t.likesCount;return Object(f.jsxs)("div",{className:g.a.item,children:[e,Object(f.jsxs)("div",{children:[s," likes"]})]})},P=s(29),I=s(20);var _=function(t){var e=t.addPost;return Object(f.jsx)(P.b,{onSubmit:function(t){e(t.post)},render:function(t){var e=t.handleSubmit,s=t.form;return Object(f.jsxs)("form",{onSubmit:e,children:[Object(f.jsx)(P.a,{name:"post",component:"input",type:"textarea",placeholder:"enter post",validate:Object(I.a)(I.b,Object(I.c)(10))}),Object(f.jsx)("button",{type:"submit",onMouseLeave:function(){s.reset()},children:"post"})]})}})},y=u.a.memo((function(t){var e=t.posts.map((function(t){return Object(f.jsx)(S,{message:t.message,likesCount:t.likesCount})}));return Object(f.jsxs)("div",{className:m.a.postsBlock,children:[Object(f.jsx)("div",{children:"My posts"}),Object(f.jsx)("div",{children:Object(f.jsx)(_,{addPost:t.addPost})}),Object(f.jsx)("div",{className:m.a.posts,children:e})]})})),B={addPost:v.a},C=Object(a.b)((function(t){return{posts:t.profilePage.posts}}),B)(y),N=u.a.memo((function(t){return console.log("RENDER"),console.log(t),Object(f.jsxs)("section",{children:[Object(f.jsx)(h,Object(l.a)({},t)),Object(f.jsx)(C,{})]})})),M=s(6),q=s(19),w=s(28),D=function(t){return t.profilePage.profile},E=function(t){return t.profilePage.status},J=function(t){var e;return null===(e=t.auth.userData)||void 0===e?void 0:e.id},R=function(t){Object(r.a)(s,t);var e=Object(c.a)(s);function s(t){return Object(n.a)(this,s),e.call(this,t)}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var t=Number(this.props.match.params.userId);t||(t=this.props.userId)||this.props.history.push("/login"),this.props.requestProfile(t),this.props.requestStatus(t)}},{key:"render",value:function(){return this.props.profile?Object(f.jsx)(N,{profile:this.props.profile,status:this.props.status,setStatus:this.props.setStatus,userId:this.props.userId}):Object(f.jsx)(w.a,{})}}]),s}(u.a.Component),z={requestProfile:v.c,setStatus:v.e,requestStatus:v.d};e.default=Object(q.d)(Object(a.b)((function(t){return{profile:D(t),status:E(t),userId:J(t)}}),z),M.f)(R)}}]);
//# sourceMappingURL=3.a48119ab.chunk.js.map