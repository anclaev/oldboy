(this.webpackJsonpoldboy=this.webpackJsonpoldboy||[]).push([[0],[,,,,,,,function(e,a,t){e.exports={me:"me_me__2vzxF",bg:"me_bg__2PtOc",ava:"me_ava__2J9qZ",info:"me_info__37nZM",name:"me_name__B-AKj",props:"me_props__1QNQO",props__item:"me_props__item__2_bZR",posts:"me_posts__2eAnw",new:"me_new__2UoGJ",wrapper:"me_wrapper__33Pfo",posts__item:"me_posts__item__h45Na"}},function(e,a,t){e.exports={wrapper:"chatMessage_wrapper__2wCp3",wl:"chatMessage_wl__1idJl",wr:"chatMessage_wr__3RDQz",msg:"chatMessage_msg__14ul2",l:"chatMessage_l__3jThf",r:"chatMessage_r__1iPzF",text:"chatMessage_text__2LsJC",time:"chatMessage_time__33rZG"}},,function(e,a,t){e.exports={menu:"menu_menu__3ArVc",title:"menu_title__3bDau",item:"menu_item__2Fj3v",icon:"menu_icon__2l6Eg",active:"menu_active__2FG2V",text:"menu_text__2lN3d",list:"menu_list__1Q6ZP"}},,function(e,a,t){e.exports={friends:"friends_friends__3QfYR",title:"friends_title__1Cezf",wrapper:"friends_wrapper__2in09",human:"friends_human__3gIEl",ava:"friends_ava__wouuU",name:"friends_name__24P-j"}},function(e,a,t){e.exports={nav:"human_nav__1yOBg",human:"human_human__1WqPy",name:"human_name__1TKUu",active:"human_active__3VjAw"}},function(e,a,t){e.exports={header:"header_header__2ugrp",logo:"header_logo__1UwOa",settings:"header_settings__1_9JC",icon:"header_icon__3bH86",text:"header_text__1jeLM"}},,function(e,a,t){e.exports={post:"post_post__Ncbpy",pic:"post_pic__SYCro",text:"post_text__3wMOo",time:"post_time__28TsI"}},function(e,a,t){e.exports={chat:"chat_chat__3XLMG",wrapper:"chat_wrapper__2YMmo",messages:"chat_messages__2eDOi",new:"chat_new__3vvVG"}},function(e,a,t){e.exports={sidebar:"sidebar_sidebar__1qQyw",item:"sidebar_item__3bLxT"}},function(e,a,t){e.exports={pic:"pic_pic__2xchX",outline:"pic_outline__2vUpP",online:"pic_online__BFgt4"}},function(e,a,t){e.exports={feature:"feature_feature__2h1Dp",text:"feature_text__3kvWa",icon:"feature_icon__3meQd"}},,,,,function(e,a,t){e.exports={send:"sendButton_send__YGMzN",icon:"sendButton_icon__n3647"}},function(e,a,t){e.exports={messages:"messages_messages__2Rs6C",title:"messages_title__1_hbh"}},,,,,,,function(e,a,t){e.exports={text:"textbox_text__ds7oL"}},function(e,a,t){e.exports={contacts:"contacts_contacts__3xGT8"}},,,,,,function(e,a,t){},,,,,,,function(e,a,t){"use strict";t.r(a);var s=t(1),n=t.n(s),c=t(31),i=t.n(c),r=t(9),o=t(2),m=(t(40),t(14)),l=t.n(m),u=t.p+"static/media/icons.db52c71c.svg",_=t(0),d=function(e){return Object(_.jsx)("svg",{className:"".concat(e.className),fill:e.color,stroke:e.color,width:e.size,height:e.size,children:Object(_.jsx)("use",{xlinkHref:"".concat(u,"#").concat(e.name)})})},h=function(e){return Object(_.jsxs)("header",{className:l.a.header,children:[Object(_.jsx)(r.b,{to:"/",children:Object(_.jsxs)("div",{className:l.a.logo,children:[Object(_.jsx)(d,{name:"Logo",className:l.a.icon}),Object(_.jsx)("span",{className:l.a.text,children:e.title})]})}),Object(_.jsx)(d,{name:"Settings",color:"#A7A7A7",size:"20",className:l.a.settings})]})},p=t(18),j=t.n(p),x=t(12),b=t.n(x),g=t(19),f=t.n(g),v=function(e){var a="".concat(void 0!==e.className?e.className:""," ").concat(f.a.pic," ").concat("online"===e.status?f.a.online:""," ").concat("true"===e.outline?f.a.outline:"");return Object(_.jsx)("div",{className:a,style:{backgroundImage:'url("oldboy/imgs/'.concat(e.img,'")'),height:e.height,width:e.width}})},O=function(e){return Object(_.jsxs)("div",{className:"".concat(e.name," ").concat(b.a.friends),children:[Object(_.jsx)("div",{className:b.a.title,children:"Friends"}),Object(_.jsx)("div",{className:b.a.wrapper,children:e.humans.map((function(e,a){return Object(_.jsxs)("div",{className:b.a.human,children:[Object(_.jsx)(v,{img:"".concat(e.name.toLowerCase(),".png"),className:b.a.ava,status:e.status}),Object(_.jsx)("span",{className:b.a.name,children:e.name})]},a)}))})]})},w=t(10),N=t.n(w),M=function(e){return Object(_.jsxs)("div",{className:"".concat(e.name," ").concat(N.a.menu),children:[Object(_.jsx)("span",{className:N.a.title,children:"Menu"}),Object(_.jsx)("div",{className:N.a.list,children:e.items.map((function(e,a){return Object(_.jsxs)("div",{className:N.a.item,children:[Object(_.jsx)(d,{name:e,className:N.a.icon}),Object(_.jsx)(r.b,{to:"/".concat(e.toLowerCase()),className:N.a.text,activeClassName:N.a.active,children:e})]},a)}))})]})},y=function(e){return Object(_.jsxs)("div",{className:j.a.sidebar,children:[Object(_.jsx)(M,{items:["Me","Messages","News","Music"],name:j.a.item}),Object(_.jsx)(O,{humans:e.humans,name:j.a.item})]})},D=t(7),A=t.n(D),S=t(20),C=t.n(S),E=function(e){return e.data.map((function(a,t){return Object(_.jsxs)("div",{className:"".concat(e.className," ").concat(C.a.feature),children:[Object(_.jsx)("span",{className:C.a.text,children:a[1]}),Object(_.jsx)(d,{className:C.a.icon,name:"".concat(a[0])})]},t)}))},I=t(16),P=t.n(I),H=function(e){return Object(_.jsxs)("div",{className:"".concat(e.className," ").concat(P.a.post),children:[Object(_.jsx)(v,{className:P.a.pic,outline:"true",img:"profile-ava.jpg"}),Object(_.jsx)("span",{className:P.a.text,children:e.text}),Object(_.jsx)("span",{className:P.a.time,children:e.time})]})},T=t(33),k=t.n(T),J=function(e){return Object(_.jsx)("input",{className:k.a.text,type:"text",placeholder:e.placeholder,ref:e.refVal,value:e.defVal,onChange:e.change})},V=t(25),G=t.n(V),z=function(e){return Object(_.jsx)("button",{className:G.a.send,onClick:e.click,children:Object(_.jsx)(d,{className:G.a.icon,name:"Send"})})},B=["January","February","March","April","May","June","July","August","September","October","November","December"],L=function(){var e=new Date;return(e.getHours()<=9?"0"+e.getHours():e.getHours())+":"+(e.getMinutes()<=9?"0"+e.getMinutes():e.getMinutes())},F=function(){var e=new Date;return B[e.getMonth()]+" "+e.getDate()+", "+L()},Q=function(){return 0===Math.floor(Math.random()*Math.floor(2))},R="ADD-POST",U="ADD-MESSAGE",W="UPDATE-NEW-POST",Y="UPDATE-NEW-MESSAGE",Z={humans:[{id:1,name:"Andrew",surname:"Hardman",ava:"andrew",status:"".concat(!0===Q()?"online":"offline")},{id:2,name:"Sasha",surname:"Roys",ava:"sasha",status:"".concat(!0===Q()?"online":"offline")},{id:3,name:"Oleg",surname:"Jarov",ava:"oleg",status:"".concat(!0===Q()?"online":"offline")},{id:4,name:"Anna",surname:"Albrant",ava:"anna",status:"".concat(!0===Q()?"online":"offline")}],posts:{new:"",data:[{id:1,text:"How stupid that is.",time:"March 4, 19:35"},{id:2,text:"Hey, what are you doing?",time:"March 4, 19:37"}]},messages:{new:"",data:[{text:"Hi, whats up?",time:"20:35",pos:"l",humanID:"1"},{text:"Not bad. Got a job. How are you?",time:"20:37",pos:"r",humanID:"1"},{text:"Very good! I'm getting married soon! You're invited!",time:"20:40",pos:"l",humanID:"1"},{text:"Wow, cool! When will the wedding be?",time:"20:45",pos:"r",humanID:"1"},{text:"March 17, 12:00, Yekaterinburg. The dress code is a white tie.",time:"21:00",pos:"l",humanID:"1"}]}},q=function(e){var a=e.posts.map((function(e,a){return Object(_.jsx)(H,{className:A.a.posts__item,text:e.text,time:e.time},a)})),t=n.a.createRef();return Object(_.jsxs)("div",{className:A.a.me,children:[Object(_.jsx)(v,{className:A.a.bg,img:"profile-bg.jpg"}),Object(_.jsx)(v,{className:A.a.ava,outline:"true",img:"profile-ava.jpg"}),Object(_.jsxs)("div",{className:A.a.info,children:[Object(_.jsx)("div",{className:A.a.name,children:"Artem Samarin"}),Object(_.jsx)("div",{className:A.a.props,children:Object(_.jsx)(E,{className:A.a.props__item,data:[["Tort","12.10.2001"],["City","Samara"],["Edu","CME"],["Web","ancla.dev"]]})})]}),Object(_.jsxs)("div",{className:A.a.posts,children:[Object(_.jsxs)("div",{className:A.a.new,children:[Object(_.jsx)(J,{placeholder:"How are you, old boy?",refVal:t,defVal:e.new,change:function(){var a=t.current.value;e.dispatch(function(e){return{type:W,newPost:e}}(a))}}),Object(_.jsx)(z,{click:function(){""!==e.new.replace(/\s+/g," ").trim()&&e.dispatch({type:R})}})]}),Object(_.jsx)("div",{className:A.a.wrapper,children:a})]})]})},K=t(26),X=t.n(K),$=t(34),ee=t.n($),ae=t(13),te=t.n(ae),se=function(e){return Object(_.jsx)(r.b,{to:"/messages/".concat(e.id),activeClassName:te.a.active,className:te.a.nav,children:Object(_.jsxs)("div",{className:e.active?"".concat(te.a.human," ").concat(te.a.active):te.a.human,children:[Object(_.jsx)(v,{status:e.status,img:"".concat(e.ava,".png"),width:"40px",height:"40px"}),Object(_.jsx)("span",{className:te.a.name,children:e.name})]})})},ne=function(e){var a=e.humans.map((function(e,a){return Object(_.jsx)(se,{ava:e.ava,name:"".concat(e.name," ").concat(e.surname),id:e.id,status:e.status},a)}));return Object(_.jsx)("div",{className:ee.a.contacts,children:a})},ce=t(17),ie=t.n(ce),re=t(8),oe=t.n(re),me=function(e){return Object(_.jsx)("div",{className:"r"===e.pos?"".concat(oe.a.wrapper," ").concat(oe.a.wr):"".concat(oe.a.wrapper," ").concat(oe.a.wl),children:Object(_.jsxs)("div",{className:"r"===e.pos?"".concat(oe.a.msg," ").concat(oe.a.r):"".concat(oe.a.msg," ").concat(oe.a.l),children:[Object(_.jsx)("div",{className:oe.a.text,children:e.text}),Object(_.jsx)("div",{className:oe.a.time,children:e.time})]})})},le=function(e){var a=e.messages.map((function(e,a){return Object(_.jsx)(me,{text:e.text,time:e.time,pos:e.pos},a)})),t=n.a.createRef();return Object(_.jsxs)("div",{className:ie.a.chat,children:[Object(_.jsx)("div",{className:ie.a.wrapper,id:"scroll",children:Object(_.jsx)("div",{className:ie.a.messages,children:a})}),Object(_.jsxs)("div",{className:ie.a.new,children:[Object(_.jsx)(J,{placeholder:"Send Sasha a new message...",refVal:t,defVal:e.newMessage,change:function(a){var s=t.current.value;e.dispatch(function(e){return{type:Y,newMessage:e}}(s))}}),Object(_.jsx)(z,{click:function(){""!==e.newMessage.replace(/\s+/g," ").trim()&&e.dispatch({type:U});var a=document.getElementById("scroll"),t=setInterval((function(){null!==a&&(a.scrollTop=a.scrollHeight),clearInterval(t)}),0)}})]})]})},ue=function(e){return Object(_.jsxs)("div",{className:X.a.messages,children:[Object(_.jsx)("span",{className:X.a.title,children:"Your messages"}),Object(_.jsx)(ne,{humans:e.contacts}),Object(_.jsx)(le,{messages:e.messages,newMessage:e.new,dispatch:e.dispatch})]})},_e=function(e){return Object(_.jsx)(r.a,{children:Object(_.jsxs)("div",{className:"app-wrapper",children:[Object(_.jsx)(h,{title:"Old Boy"}),Object(_.jsx)(y,{className:"sidebar",humans:e.state.humans}),Object(_.jsx)(o.a,{path:"/me",render:function(){return Object(_.jsx)(q,{posts:e.state.posts.data,new:e.state.posts.new,dispatch:e.dispatch})}}),Object(_.jsx)(o.a,{path:"/messages",render:function(){return Object(_.jsx)(ue,{contacts:e.state.humans,messages:e.state.messages.data,new:e.state.messages.new,dispatch:e.dispatch})}})]})})},de=t(27),he=Object(de.a)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z.posts,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case R:var t={id:5,text:e.new.replace(/\s+/g," ").trim(),time:F()};return e.data.push(t),e.new="",e;case W:return e.new=a.newPost,e;default:return e}},messages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z.messages,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case U:var t={text:e.new,time:L(),pos:"r",humanID:"2"};return e.data.push(t),e.new="",e;case Y:return e.new=a.newMessage,e;default:return e}},humans:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z.humans;return e}}),pe=Object(de.b)(he),je=function(e){i.a.render(Object(_.jsx)(n.a.StrictMode,{children:Object(_.jsx)(_e,{state:e.getState(),dispatch:e.dispatch.bind(e)})}),document.getElementById("app"))};je(pe),pe.subscribe((function(){je(pe)}))}],[[47,1,2]]]);
//# sourceMappingURL=main.b59837b2.chunk.js.map