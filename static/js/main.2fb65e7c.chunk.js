(this.webpackJsonpchattyrooms=this.webpackJsonpchattyrooms||[]).push([[0],{141:function(e,t,n){},146:function(e,t,n){},175:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(44),s=n.n(a),c=(n(141),n(5)),i=n(89),o=(n(146),n(10)),l=n(106),d=n(15),u=n.n(d),j=n(27),b=n(6),h=n(42),p=n(11),x=n(16),O=n(28),f=n.n(O),m=n(61),g=n(4),v=function(){var e=Object(r.useState)(!1),t=Object(b.a)(e,2),n=t[0],a=t[1],s=Object(m.a)(),i=Object(r.useState)(),l=Object(b.a)(i,2),d=l[0],O=l[1],v=Object(r.useState)(),C=Object(b.a)(v,2),w=C[0],y=C[1],S=Object(r.useState)(!1),k=Object(b.a)(S,2),_=k[0],E=k[1],F=Object(c.f)(),A=function(){var e=Object(j.a)(u.a.mark((function e(){var t,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(E(!0),d&&w){e.next=5;break}return s({title:"Please Fill all the Feilds",status:"warning",duration:4e3,isClosable:!0,position:"bottom"}),E(!1),e.abrupt("return");case 5:return e.prev=5,t={headers:{"Content-type":"application/json"}},e.next=9,f.a.post("https://chattybackrooms.onrender.com/api/user/login",{email:d,password:w},t);case 9:n=e.sent,r=n.data,s({title:"Login Successful",status:"success",duration:4e3,isClosable:!0,position:"bottom"}),localStorage.setItem("userInfo",JSON.stringify(r)),E(!1),F("/chats"),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(5),s({title:"Error Occured!",status:"error",duration:4e3,isClosable:!0,position:"bottom"}),E(!1);case 21:case"end":return e.stop()}}),e,null,[[5,17]])})));return function(){return e.apply(this,arguments)}}();return Object(g.jsxs)(o.f,{spacing:"10px",children:[Object(g.jsxs)(p.a,{id:"email",isRequired:!0,children:[Object(g.jsx)(p.b,{children:"Email Address"}),Object(g.jsx)(x.a,{value:d,type:"email",placeholder:"Enter Your Email Address",onChange:function(e){return O(e.target.value)}})]}),Object(g.jsxs)(p.a,{id:"password",isRequired:!0,children:[Object(g.jsx)(p.b,{children:"Password"}),Object(g.jsxs)(x.b,{size:"md",children:[Object(g.jsx)(x.a,{value:w,onChange:function(e){return y(e.target.value)},type:n?"text":"password",placeholder:"Enter password"}),Object(g.jsx)(x.c,{width:"4.5rem",children:Object(g.jsx)(h.a,{h:"1.75rem",size:"sm",onClick:function(){return a(!n)},children:n?"Hide":"Show"})})]})]}),Object(g.jsx)(h.a,{colorScheme:"blue",width:"100%",style:{marginTop:15},onClick:A,isLoading:_,children:"Login"}),Object(g.jsx)(h.a,{variant:"solid",colorScheme:"red",width:"100%",onClick:function(){O("test@test.com"),y("test")},children:"Get Guest User"})]})},C=function(){var e=Object(r.useState)(!1),t=Object(b.a)(e,2),n=t[0],a=t[1],s=function(){return a(!n)},i=Object(m.a)(),l=Object(c.f)(),d=Object(r.useState)(),O=Object(b.a)(d,2),v=O[0],C=O[1],w=Object(r.useState)(),y=Object(b.a)(w,2),S=y[0],k=y[1],_=Object(r.useState)(),E=Object(b.a)(_,2),F=E[0],A=E[1],z=Object(r.useState)(),I=Object(b.a)(z,2),R=I[0],N=I[1],P=Object(r.useState)(),B=Object(b.a)(P,2),D=B[0],L=B[1],W=Object(r.useState)(!1),M=Object(b.a)(W,2),T=M[0],J=M[1],U=function(){var e=Object(j.a)(u.a.mark((function e(){var t,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(J(!0),v&&S&&R&&F){e.next=5;break}return i({title:"Please Fill all the Feilds",status:"warning",duration:5e3,isClosable:!0,position:"bottom"}),J(!1),e.abrupt("return");case 5:if(R===F){e.next=8;break}return i({title:"Passwords Do Not Match",status:"warning",duration:5e3,isClosable:!0,position:"bottom"}),e.abrupt("return");case 8:return e.prev=8,t={headers:{"Content-type":"application/json"}},e.next=12,f.a.post("https://chattybackrooms.onrender.com/api/user",{name:v,email:S,password:R,pic:D},t);case 12:n=e.sent,r=n.data,console.log(r),i({title:"Registration Successful",status:"success",duration:5e3,isClosable:!0,position:"bottom"}),localStorage.setItem("userInfo",JSON.stringify(r)),J(!1),l("/chats"),e.next=25;break;case 21:e.prev=21,e.t0=e.catch(8),i({title:"Error Occured!",status:"error",duration:5e3,isClosable:!0,position:"bottom"}),J(!1);case 25:case"end":return e.stop()}}),e,null,[[8,21]])})));return function(){return e.apply(this,arguments)}}();return Object(g.jsxs)(o.f,{spacing:"5px",children:[Object(g.jsxs)(p.a,{id:"first-name",isRequired:!0,children:[Object(g.jsx)(p.b,{children:"Name"}),Object(g.jsx)(x.a,{placeholder:"Enter Your Name",onChange:function(e){return C(e.target.value)}})]}),Object(g.jsxs)(p.a,{id:"email",isRequired:!0,children:[Object(g.jsx)(p.b,{children:"Email Address"}),Object(g.jsx)(x.a,{type:"email",placeholder:"Enter Your Email Address",onChange:function(e){return k(e.target.value)}})]}),Object(g.jsxs)(p.a,{id:"password",isRequired:!0,children:[Object(g.jsx)(p.b,{children:"Password"}),Object(g.jsxs)(x.b,{size:"md",children:[Object(g.jsx)(x.a,{type:n?"text":"password",placeholder:"Enter Password",onChange:function(e){return N(e.target.value)}}),Object(g.jsx)(x.c,{width:"4.5rem",children:Object(g.jsx)(h.a,{h:"1.75rem",size:"sm",onClick:s,children:n?"Hide":"Show"})})]})]}),Object(g.jsxs)(p.a,{id:"password",isRequired:!0,children:[Object(g.jsx)(p.b,{children:"Confirm Password"}),Object(g.jsxs)(x.b,{size:"md",children:[Object(g.jsx)(x.a,{type:n?"text":"password",placeholder:"Confirm password",onChange:function(e){return A(e.target.value)}}),Object(g.jsx)(x.c,{width:"4.5rem",children:Object(g.jsx)(h.a,{h:"1.75rem",size:"sm",onClick:s,children:n?"Hide":"Show"})})]})]}),Object(g.jsxs)(p.a,{id:"pic",children:[Object(g.jsx)(p.b,{children:"Upload your Picture"}),Object(g.jsx)(x.a,{type:"file",p:1.5,accept:"image/*",onChange:function(e){return function(e){if(J(!0),void 0!==e){if(console.log(e),"image/jpeg"!==e.type&&"image/png"!==e.type)return i({title:"Please Select an Image!",status:"warning",duration:5e3,isClosable:!0,position:"bottom"}),void J(!1);var t=new FormData;t.append("file",e),t.append("upload_preset","chat-app"),t.append("cloud_name","piyushproj"),fetch("https://api.cloudinary.com/v1_1/piyushproj/image/upload",{method:"post",body:t}).then((function(e){return e.json()})).then((function(e){L(e.url.toString()),console.log(e.url.toString()),J(!1)})).catch((function(e){console.log(e),J(!1)}))}else i({title:"Please Select an Image!",status:"warning",duration:5e3,isClosable:!0,position:"bottom"})}(e.target.files[0])}})]}),Object(g.jsx)(h.a,{colorScheme:"blue",width:"100%",style:{marginTop:15},onClick:U,isLoading:T,children:"Sign Up"})]})};var w,y,S=function(){var e=Object(c.f)();return Object(r.useEffect)((function(){JSON.parse(localStorage.getItem("userInfo"))&&e("/chats")}),[e]),Object(g.jsxs)(o.c,{maxW:"xl",centerContent:!0,children:[Object(g.jsx)(o.b,{d:"flex",justifyContent:"center",p:3,bg:"white",w:"100%",m:"40px 0 15px 0",borderRadius:"lg",borderWidth:"1px",children:Object(g.jsx)(o.e,{fontSize:"4xl",fontFamily:"Work sans",children:"ChattyRooms"})}),Object(g.jsx)(o.b,{bg:"white",w:"100%",p:4,borderRadius:"lg",borderWidth:"1px",children:Object(g.jsxs)(l.e,{isFitted:!0,variant:"soft-rounded",children:[Object(g.jsxs)(l.b,{mb:"1em",children:[Object(g.jsx)(l.a,{children:"Login"}),Object(g.jsx)(l.a,{children:"Sign Up"})]}),Object(g.jsxs)(l.d,{children:[Object(g.jsx)(l.c,{children:Object(g.jsx)(v,{})}),Object(g.jsx)(l.c,{children:Object(g.jsx)(C,{})})]})]})})]})},k=n(57),_=n(78),E=function(e,t,n,r){return n<e.length-1&&e[n+1].sender._id===t.sender._id&&e[n].sender._id!==r?33:n<e.length-1&&e[n+1].sender._id!==t.sender._id&&e[n].sender._id!==r||n===e.length-1&&e[n].sender._id!==r?0:"auto"},F=function(e,t,n,r){return n<e.length-1&&(e[n+1].sender._id!==t.sender._id||void 0===e[n+1].sender._id)&&e[n].sender._id!==r},A=function(e,t,n){return t===e.length-1&&e[e.length-1].sender._id!==n&&e[e.length-1].sender._id},z=function(e,t,n){return n>0&&e[n-1].sender._id===t.sender._id},I=function(e,t){return t[0]._id===e._id?t[1].name:t[0].name},R=n(79),N=n(104),P=n(112),B=Object(r.createContext)(),D=function(){return Object(r.useContext)(B)},L=function(e){var t=e.children,n=Object(r.useState)(),a=Object(b.a)(n,2),s=a[0],i=a[1],o=Object(r.useState)(),l=Object(b.a)(o,2),d=l[0],u=l[1],j=Object(r.useState)([]),h=Object(b.a)(j,2),p=h[0],x=h[1],O=Object(r.useState)(),f=Object(b.a)(O,2),m=f[0],v=f[1],C=Object(c.f)();return Object(r.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userInfo"));u(e),e||C("/")}),[C]),Object(g.jsx)(B.Provider,{value:{selectedChat:s,setSelectedChat:i,user:d,setUser:u,notification:p,setNotification:x,chats:m,setChats:v},children:t})},W=function(e){var t=e.messages,n=D().user;return Object(g.jsx)(P.a,{children:t&&t.map((function(e,r){return Object(g.jsxs)("div",{style:{display:"flex"},children:[(F(t,e,r,n._id)||A(t,r,n._id))&&Object(g.jsx)(N.a,{label:e.sender.name,placement:"bottom-start",hasArrow:!0,children:Object(g.jsx)(R.a,{mt:"7px",mr:1,size:"sm",cursor:"pointer",name:e.sender.name,src:e.sender.pic})}),Object(g.jsx)("span",{style:{backgroundColor:"".concat(e.sender._id===n._id?"#BEE3F8":"#B9F5D0"),marginLeft:E(t,e,r,n._id),marginTop:z(t,e,r,n._id)?3:10,borderRadius:"20px",padding:"5px 15px",maxWidth:"75%"},children:e.content})]},e._id)}))})},M=function(e){var t=e.fetchAgain,n=e.setFetchAgain,a=Object(r.useState)([]),s=Object(b.a)(a,2),c=s[0],l=s[1],d=Object(r.useState)(!1),O=Object(b.a)(d,2),v=O[0],C=O[1],S=Object(r.useState)(""),E=Object(b.a)(S,2),F=E[0],A=E[1],z=Object(r.useState)(!1),R=Object(b.a)(z,2),N=R[0],P=R[1],B=Object(r.useState)(!1),L=Object(b.a)(B,2),M=L[0],T=L[1],J=Object(r.useState)(!1),U=Object(b.a)(J,2),q=U[0],G=U[1],Y=Object(m.a)(),H=D(),K=H.selectedChat,Q=H.setSelectedChat,V=H.user,X=H.notification,Z=H.setNotification,$=function(){var e=Object(j.a)(u.a.mark((function e(){var t,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(K){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,t={headers:{Authorization:"Bearer ".concat(V.token)}},C(!0),e.next=7,f.a.get("https://chattybackrooms.onrender.com/api/message/".concat(K._id),t);case 7:n=e.sent,r=n.data,console.log(r),l(r),C(!1),w.emit("join chat",K._id),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(2),Y({title:"Error Occured!",description:"Failed to Load the Messages",status:"error",duration:5e3,isClosable:!0,position:"bottom"});case 18:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(){return e.apply(this,arguments)}}(),ee=function(){var e=Object(j.a)(u.a.mark((function e(t){var n,r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Enter"!==t.key||!F){e.next=16;break}return w.emit("stop typing",K._id),e.prev=2,n={headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(V.token)}},A(""),e.next=7,f.a.post("https://chattybackrooms.onrender.com/api/message",{content:F,chatId:K},n);case 7:r=e.sent,a=r.data,w.emit("new message",a),l([].concat(Object(k.a)(c),[a])),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),Y({title:"Error Occured!",description:"Failed to send the Message",status:"error",duration:5e3,isClosable:!0,position:"bottom"});case 16:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(t){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){(w=Object(i.a)("https://chattybackrooms.onrender.com/")).emit("setup",V),w.on("connected",(function(){return P(!0)})),w.on("typing",(function(){return G(!0)})),w.on("stop typing",(function(){return G(!1)}))}),[]),Object(r.useEffect)((function(){$(),y=K}),[K]),Object(r.useEffect)((function(){w.on("message recieved",(function(e){y&&y._id===e.chat._id?l([].concat(Object(k.a)(c),[e])):X.includes(e)||(Z([e].concat(Object(k.a)(X))),n(!t))}))}));return Object(g.jsx)(g.Fragment,{children:K?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)(o.e,{fontSize:{base:"28px",md:"30px"},pb:3,px:2,w:"100%",fontFamily:"Work sans",d:"flex",justifyContent:{base:"space-between"},alignItems:"center",children:[Object(g.jsx)(h.b,{d:{base:"flex",md:"none"},onClick:function(){return Q("")}}),c&&(K.isGroupChat?Object(g.jsx)(g.Fragment,{children:K.chatName.toUpperCase()}):Object(g.jsx)(g.Fragment,{children:I(V,K.users)}))]}),Object(g.jsxs)(o.b,{d:"flex",flexDir:"column",justifyContent:"flex-end",p:3,bg:"#E8E8E8",w:"100%",h:"100%",borderRadius:"lg",overflowY:"hidden",children:[v?Object(g.jsx)(_.a,{size:"xl",w:20,h:20,alignSelf:"center",margin:"auto"}):Object(g.jsx)("div",{className:"messages",children:Object(g.jsx)(W,{messages:c})}),Object(g.jsxs)(p.a,{onKeyDown:ee,id:"first-name",isRequired:!0,mt:3,children:[q?Object(g.jsx)("div",{children:"typing..."}):Object(g.jsx)(g.Fragment,{}),Object(g.jsx)(x.a,{variant:"filled",bg:"#E0E0E0",placeholder:"Enter a message..",value:F,onChange:function(e){if(A(e.target.value),N){M||(T(!0),w.emit("typing",K._id));var t=(new Date).getTime();setTimeout((function(){(new Date).getTime()-t>=3e3&&M&&(w.emit("stop typing",K._id),T(!1))}),3e3)}}})]})]})]}):Object(g.jsx)(o.b,{d:"flex",alignItems:"center",justifyContent:"center",h:"100%",children:Object(g.jsx)(o.e,{fontSize:"3xl",pb:3,fontFamily:"Work sans",children:"Click on a user to start chatting"})})})},T=function(e){var t=e.fetchAgain,n=e.setFetchAgain,r=D().selectedChat;return Object(g.jsx)(o.b,{d:{base:r?"flex":"none",md:"flex"},alignItems:"center",flexDir:"column",p:3,bg:"white",w:{base:"100%",md:"68%"},borderRadius:"lg",borderWidth:"1px",children:Object(g.jsx)(M,{fetchAgain:t,setFetchAgain:n})})},J=n(21),U=function(){return Object(g.jsxs)(o.d,{children:[Object(g.jsx)(J.a,{height:"45px"}),Object(g.jsx)(J.a,{height:"45px"}),Object(g.jsx)(J.a,{height:"45px"}),Object(g.jsx)(J.a,{height:"45px"}),Object(g.jsx)(J.a,{height:"45px"}),Object(g.jsx)(J.a,{height:"45px"}),Object(g.jsx)(J.a,{height:"45px"}),Object(g.jsx)(J.a,{height:"45px"}),Object(g.jsx)(J.a,{height:"45px"}),Object(g.jsx)(J.a,{height:"45px"}),Object(g.jsx)(J.a,{height:"45px"}),Object(g.jsx)(J.a,{height:"45px"})]})},q=n(9),G=n(105),Y=function(e){var t=e.user,n=e.handleFunction,r=e.admin;return Object(g.jsxs)(o.a,{px:2,py:1,borderRadius:"lg",m:1,mb:2,variant:"solid",fontSize:12,colorScheme:"purple",cursor:"pointer",onClick:n,children:[t.name,r===t._id&&Object(g.jsx)("span",{children:" (Admin)"})]})},H=function(e){var t=e.handleFunction,n=D().user;return Object(g.jsx)(o.b,{onClick:t,cursor:"pointer",bg:"#E8E8E8",_hover:{background:"#38B2AC",color:"white"},w:"100%",d:"flex",alignItems:"center",color:"black",px:3,py:2,mb:2,borderRadius:"lg",children:Object(g.jsxs)(o.b,{children:[Object(g.jsx)(o.e,{children:n.name}),Object(g.jsxs)(o.e,{fontSize:"xs",children:[Object(g.jsx)("b",{children:"Email : "}),n.email]})]})})},K=function(e){var t=e.children,n=Object(q.d)(),a=n.isOpen,s=n.onOpen,c=n.onClose,i=Object(r.useState)(),l=Object(b.a)(i,2),d=l[0],O=l[1],v=Object(r.useState)([]),C=Object(b.a)(v,2),w=C[0],y=C[1],S=Object(r.useState)(""),_=Object(b.a)(S,2),E=_[0],F=_[1],A=Object(r.useState)([]),z=Object(b.a)(A,2),I=z[0],R=z[1],N=Object(r.useState)(!1),P=Object(b.a)(N,2),B=P[0],L=P[1],W=Object(m.a)(),M=D(),T=M.user,J=M.chats,U=M.setChats,K=function(){var e=Object(j.a)(u.a.mark((function e(t){var n,r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(F(t),t){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,L(!0),n={headers:{Authorization:"Bearer ".concat(T.token)}},e.next=8,f.a.get("https://chattybackrooms.onrender.com/api/user?search=".concat(E),n);case 8:r=e.sent,a=r.data,console.log(a),L(!1),R(a),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(3),W({title:"Error Occured!",description:"Failed to Load the Search Results",status:"error",duration:5e3,isClosable:!0,position:"bottom-left"});case 18:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(t){return e.apply(this,arguments)}}(),Q=function(){var e=Object(j.a)(u.a.mark((function e(){var t,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(d&&w){e.next=3;break}return W({title:"Please fill all the feilds",status:"warning",duration:5e3,isClosable:!0,position:"top"}),e.abrupt("return");case 3:return e.prev=3,t={headers:{Authorization:"Bearer ".concat(T.token)}},e.next=7,f.a.post("https://chattybackrooms.onrender.com/api/chat/group",{name:d,users:JSON.stringify(w.map((function(e){return e._id})))},t);case 7:n=e.sent,r=n.data,U([r].concat(Object(k.a)(J))),c(),W({title:"New Group Chat Created!",status:"success",duration:5e3,isClosable:!0,position:"bottom"}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(3),W({title:"Failed to Create the Chat!",status:"error",duration:5e3,isClosable:!0,position:"bottom"});case 17:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(){return e.apply(this,arguments)}}();return console.log(w),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("span",{onClick:s,children:t}),Object(g.jsxs)(G.a,{onClose:c,isOpen:a,isCentered:!0,children:[Object(g.jsx)(G.g,{}),Object(g.jsxs)(G.d,{children:[Object(g.jsx)(G.f,{fontSize:"35px",fontFamily:"Work sans",d:"flex",justifyContent:"center",children:"Create Group Chat"}),Object(g.jsx)(G.c,{}),Object(g.jsxs)(G.b,{d:"flex",flexDir:"column",alignItems:"center",children:[Object(g.jsx)(p.a,{children:Object(g.jsx)(x.a,{placeholder:"Chat Name",mb:3,onChange:function(e){return O(e.target.value)}})}),Object(g.jsx)(p.a,{children:Object(g.jsx)(x.a,{placeholder:"Add Users ex: Hare, Test, Bobby",mb:1,onChange:function(e){return K(e.target.value)}})}),Object(g.jsx)(o.b,{w:"100%",d:"flex",flexWrap:"wrap",children:w.map((function(e){return Object(g.jsx)(Y,{user:e,handleFunction:function(){return t=e,void y(w.filter((function(e){return e._id!==t._id})));var t}},e._id)}))}),B?Object(g.jsx)("div",{children:"Loading..."}):null===I||void 0===I?void 0:I.slice(0,4).map((function(e){return Object(g.jsx)(H,{user:e,handleFunction:function(){return t=e,void(w.includes(t)?W({title:"User already added",status:"warning",duration:5e3,isClosable:!0,position:"top"}):y([].concat(Object(k.a)(w),[t])));var t}},e._id)}))]}),Object(g.jsx)(G.e,{children:Object(g.jsx)(h.a,{onClick:Q,colorScheme:"blue",children:"Create Chat"})})]})]})]})},Q=function(e){var t=e.fetchAgain,n=Object(r.useState)(),a=Object(b.a)(n,2),s=a[0],c=a[1],i=D(),l=i.selectedChat,d=i.setSelectedChat,p=i.user,x=i.chats,O=i.setChats,v=Object(m.a)(),C=function(){var e=Object(j.a)(u.a.mark((function e(){var t,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={headers:{Authorization:"Bearer ".concat(p.token)}},e.next=4,f.a.get("https://chattybackrooms.onrender.com/api/chat",t);case 4:n=e.sent,r=n.data,O(r),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),v({title:"Error Occured!",description:"Failed to Load the chats",status:"error",duration:5e3,isClosable:!0,position:"bottom-left"});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){c(JSON.parse(localStorage.getItem("userInfo"))),C()}),[t]),Object(g.jsxs)(o.b,{d:{base:l?"none":"flex",md:"flex"},flexDir:"column",alignItems:"center",p:3,bg:"white",w:{base:"100%",md:"31%"},borderRadius:"lg",borderWidth:"1px",children:[Object(g.jsxs)(o.b,{pb:3,px:3,fontSize:{base:"28px",md:"30px"},fontFamily:"Work sans",d:"flex",w:"100%",justifyContent:"space-between",alignItems:"center",children:["My Chats",Object(g.jsx)(K,{children:Object(g.jsx)(h.a,{d:"flex",fontSize:{base:"17px",md:"10px",lg:"17px"},children:"New Group Chat"})})]}),Object(g.jsx)(o.b,{d:"flex",flexDir:"column",p:3,bg:"#F8F8F8",w:"100%",h:"100%",borderRadius:"lg",overflowY:"hidden",children:x?Object(g.jsx)(o.d,{overflowY:"scroll",children:x.map((function(e){return Object(g.jsxs)(o.b,{onClick:function(){return d(e)},cursor:"pointer",bg:l===e?"#38B2AC":"#E8E8E8",color:l===e?"white":"black",px:3,py:2,borderRadius:"lg",children:[Object(g.jsx)(o.e,{children:e.isGroupChat?e.chatName:I(s,e.users)}),e.latestMessage&&Object(g.jsxs)(o.e,{fontSize:"xs",children:[Object(g.jsxs)("b",{children:[e.latestMessage.sender.name," "]}),":",e.latestMessage.content.length>50?e.latestMessage.content.substring(0,51)+"...":e.latestMessage.content]})]},e._id)}))}):Object(g.jsx)(U,{})})]})},V=function(){var e=Object(r.useState)(!1),t=Object(b.a)(e,2),n=t[0],a=t[1],s=D().user;return Object(g.jsx)("div",{style:{width:"100%"},children:Object(g.jsxs)(o.b,{d:"flex",justifyContent:"space-between",w:"100%",h:"91.5vh",p:"10px",children:[s&&Object(g.jsx)(Q,{fetchAgain:n}),s&&Object(g.jsx)(T,{fetchAgain:n,setFetchAgain:a})]})})};var X=function(){return Object(g.jsx)("div",{className:"App",children:Object(g.jsxs)(c.c,{children:[Object(g.jsx)(c.a,{path:"/",element:Object(g.jsx)(S,{})}),Object(g.jsx)(c.a,{path:"/chats",element:Object(g.jsx)(V,{})})]})})},Z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,182)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))},$=n(40),ee=n(70);s.a.render(Object(g.jsxs)($.a,{children:[Object(g.jsx)(ee.a,{children:Object(g.jsx)(L,{children:Object(g.jsx)(X,{})})}),","]}),document.getElementById("root")),Z()}},[[175,1,2]]]);
//# sourceMappingURL=main.2fb65e7c.chunk.js.map