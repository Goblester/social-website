(this["webpackJsonp01-social-website"]=this["webpackJsonp01-social-website"]||[]).push([[4],{138:function(t,e,s){t.exports={descriptionBlock:"ProfileInfo_descriptionBlock__2xJaO"}},156:function(t,e,s){t.exports={postsBlock:"MyPosts_postsBlock__3zfSV",posts:"MyPosts_posts__2CbOe"}},157:function(t,e,s){t.exports={item:"Post_item__2d5jo"}},168:function(t,e,s){},216:function(t,e,s){"use strict";s.r(e);var o=s(22),n=s(23),i=s(25),r=s(24),a=s(1),c=s.n(a),u=s(15),l=s(2),b=(s(168),s(13)),j=s(138),d=s.n(j),f=s(57),p=s(47),h=s(0);var O=function(t){var e=Object(a.useState)(!1),s=Object(p.a)(e,2),o=s[0],n=s[1],i=Object(a.useState)(t.status),r=Object(p.a)(i,2),c=r[0],u=r[1],l=t.userId===t.profileId;return Object(a.useEffect)((function(){u(t.status)}),[t.status]),Object(h.jsxs)("div",{children:[!o&&Object(h.jsx)("div",{children:Object(h.jsx)("span",{onDoubleClick:function(){return l&&n(!0)},children:t.status?t.status:"-------"})}),o&&l&&Object(h.jsx)("div",{children:Object(h.jsx)("input",{onChange:function(t){u(t.currentTarget.value)},autoFocus:!0,onBlur:function(){t.setStatus(c),n(!1)},type:"text",value:c})})]})},m=s(214),v=s(212),x=s(213),g=s(207),k=s(21),P=s(158);function I(t){var e=t.editMode,s=t.value,o=t.label,n=Object(b.a)(t,["editMode","value","label"]),i="".concat(o,": ").concat(s||"no info");return Object(h.jsx)(g.a,{item:!0,children:e?Object(h.jsx)(P.b,Object(l.a)({label:o},n)):i})}function y(t){var e=t.isMe,s=t.profile,o=Object(b.a)(t,["isMe","profile"]),n=Object(a.useState)(!1),i=Object(p.a)(n,2),r=i[0],c=i[1],l=Object(u.d)((function(t){return t.profilePage.submitStatus})),j=Object(u.d)((function(t){return t.profilePage.errorMessage}));Object(u.c)();Object(a.useEffect)((function(){"success"===l&&c(!1)}),[l]);var d="job description: ".concat(s.lookingForAJob?"yes":"no"),f={fullName:s.fullName,lookingForAJob:s.lookingForAJob,lookingForAJobDescription:s.lookingForAJobDescription,aboutMe:s.aboutMe,contacts:{facebook:s.contacts.facebook,website:s.contacts.website,vk:s.contacts.vk,twitter:s.contacts.twitter,instagram:s.contacts.instagram,youtube:s.contacts.youtube,github:s.contacts.github,mainLink:s.contacts.mainLink}};return Object(h.jsx)(m.a,{children:Object(h.jsxs)(v.a,{style:{padding:"20px"},elevation:3,children:[e&&!r&&Object(h.jsx)(x.a,{variant:"contained",color:"primary",onClick:function(){c((function(t){return!t}))},children:"Change"}),Object(h.jsx)(k.b,{onSubmit:function(t){o.setProfileInfo(t)},initialValues:f,validate:function(t){return{}},render:function(t){var e=t.handleSubmit,o=t.submitting;t.errors,t.submitError;return Object(h.jsx)("form",{onSubmit:e,children:Object(h.jsxs)(g.a,{container:!0,direction:"column",justify:"flex-start",alignItems:"flex-start",spacing:2,children:[Object(h.jsx)(I,{editMode:r,name:"fullName",value:s.fullName,label:"full name",variant:"outlined",size:"small"}),Object(h.jsx)(I,{editMode:r,name:"aboutMe",value:s.aboutMe,label:"about me",variant:"outlined",size:"small"}),Object(h.jsx)(g.a,{item:!0,children:r?Object(h.jsx)(P.a,{name:"lookingForAJob",data:{label:"Looking for a Job",value:s.lookingForAJob}}):d}),Object(h.jsx)(I,{editMode:r,name:"lookingForAJobDescription",value:s.lookingForAJobDescription,label:"job description",variant:"outlined",size:"small",multiline:!0,rows:3}),Object.keys(s.contacts).map((function(t){var e,o=t,n=!1;return j&&j.toLowerCase().includes(t.toLowerCase())&&(n=!0,e=Object(h.jsx)("span",{children:"invalid url format"})),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(I,{editMode:r,name:"contacts."+t,label:t,value:s.contacts[o],variant:"outlined",size:"small",error:n},t),e]})})),r&&Object(h.jsx)(g.a,{item:!0,children:Object(h.jsx)(x.a,{type:"submit",disabled:o,variant:"contained",color:"primary",children:"Save"})})]})})}})]})})}var S=function(t){var e=t.profile,s=t.setStatus,o=t.status,n=t.userId,i=Object(b.a)(t,["profile","setStatus","status","userId"]),r=!n||e.userId===n;return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:d.a.descriptionBlock,children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("img",{src:null!==e.photos.large?e.photos.large:f.a,alt:""}),r&&Object(h.jsx)("input",{type:"file",onChange:function(t){var e;(null===(e=t.currentTarget.files)||void 0===e?void 0:e.length)&&i.setPhoto(t.currentTarget.files[0])}})]}),Object(h.jsx)(O,{setStatus:s,status:o,userId:n,profileId:e.userId}),Object(h.jsx)(y,{isMe:r,profile:e,setProfileInfo:i.setProfileInfo})]})})},M=s(45),J=s(156),A=s.n(J),C=s(157),_=s.n(C);var w=function(t){var e=t.message,s=t.likesCount;return Object(h.jsxs)("div",{className:_.a.item,children:[e,Object(h.jsxs)("div",{children:[s," likes"]})]})},F=s(17);var N=function(t){var e=t.addPost;return Object(h.jsx)(k.b,{onSubmit:function(t){e(t.post)},render:function(t){var e=t.handleSubmit,s=t.form;return Object(h.jsxs)("form",{onSubmit:e,children:[Object(h.jsx)(k.a,{name:"post",component:"input",type:"textarea",placeholder:"enter post",validate:Object(F.a)(F.b,Object(F.c)(10))}),Object(h.jsx)("button",{type:"submit",onMouseLeave:function(){s.reset()},children:"post"})]})}})},D=c.a.memo((function(t){var e=t.posts.map((function(t){return Object(h.jsx)(w,{message:t.message,likesCount:t.likesCount})}));return Object(h.jsxs)("div",{className:A.a.postsBlock,children:[Object(h.jsx)("div",{children:"My posts"}),Object(h.jsx)("div",{children:Object(h.jsx)(N,{addPost:t.addPost})}),Object(h.jsx)("div",{className:A.a.posts,children:e})]})})),B={addPost:M.a},z=Object(u.b)((function(t){return{posts:t.profilePage.posts}}),B)(D),L=c.a.memo((function(t){return Object(h.jsxs)("section",{children:[Object(h.jsx)(S,Object(l.a)({},t)),Object(h.jsx)(z,{})]})})),q=s(5),E=s(16),T=s(26),V=function(t){return t.profilePage.profile},U=function(t){return t.profilePage.status},G=function(t){var e;return null===(e=t.auth.userData)||void 0===e?void 0:e.id},H=function(t){Object(i.a)(s,t);var e=Object(r.a)(s);function s(t){return Object(o.a)(this,s),e.call(this,t)}return Object(n.a)(s,[{key:"refreshProfile",value:function(){var t=Number(this.props.match.params.userId);t||(t=this.props.userId)||this.props.history.push("/login"),this.props.requestProfile(t),this.props.requestStatus(t)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(t){this.props.match.params.userId!==t.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return this.props.isAuth?this.props.profile?Object(h.jsx)(L,{profile:this.props.profile,status:this.props.status,setStatus:this.props.setStatus,userId:this.props.userId,setPhoto:this.props.setPhoto,setProfileInfo:this.props.setProfileInfo}):Object(h.jsx)(T.a,{}):Object(h.jsx)(q.a,{to:"/login"})}}]),s}(c.a.Component),K={requestProfile:M.c,setStatus:M.g,requestStatus:M.d,setPhoto:M.e,setProfileInfo:M.f};e.default=Object(E.d)(Object(u.b)((function(t){return{profile:V(t),status:U(t),userId:G(t),isAuth:t.auth.isAuthorized}}),K),q.g)(H)}}]);
//# sourceMappingURL=4.281ac06c.chunk.js.map