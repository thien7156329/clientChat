(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,t,n){},165:function(e,t,n){e.exports=n(310)},286:function(e,t){},309:function(e,t,n){},310:function(e,t,n){"use strict";n.r(t);var a,s=n(0),i=n.n(s),o=n(29),r=n.n(o),c=(n(105),n(161)),l=n(62),u=n.n(l),p=n(103),h=n(21),g=n(24),m=n(27),d=n(25),f=n(28),v=n(88),b=n.n(v),y=n(143),k=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).isMine=function(){var e=JSON.parse(localStorage.getItem("user"));null==e&&window.location.reload(!0),0==n.props.type?e&&n.props.user==e.name&&n.setState({checkIsMine:"is-mine"}):1==n.props.type&&e&&e.profileObj&&n.props.user==e.profileObj.name&&n.setState({checkIsMine:"is-mine"})},n.state={checkIsMine:""},n}return Object(f.a)(t,e),Object(g.a)(t,[{key:"componentWillMount",value:function(){this.isMine()}},{key:"render",value:function(){return i.a.createElement("li",null,i.a.createElement("div",{className:"".concat(this.state.checkIsMine," nameTag")},this.props.user),i.a.createElement("div",{className:"message left appeared"},i.a.createElement("div",{className:"avatar ".concat(this.state.checkIsMine)},i.a.createElement("img",{src:this.props.url})),i.a.createElement("div",{className:"text_wrapper ".concat(this.state.checkIsMine)},i.a.createElement("div",{className:"text"},this.props.message))))}}]),t}(i.a.Component),O=function(e){function t(){return Object(h.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("ul",{className:"messages"},this.props.messages.map(function(t,n){return i.a.createElement(k,{type:e.props.type,key:n,url:t.url,user:t.user,message:t.message})}))}}]),t}(i.a.Component),w=(n(174),n(159)),j=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).setValue=function(e){n.props.sendTyping(n.props.user),n.setState({value:e.target.value})},n.setNull=function(){n.setState({value:""})},n.addEmoji=function(e){n.props.sendTyping(n.props.user),n.setState({value:n.state.value+e.native}),setTimeout(n.props.changeMessage(n.state.value+e.native),3e3)},n.isPopups=function(e){n.props.isPopup(e)},n.state={value:n.props.input},n}return Object(f.a)(t,e),Object(g.a)(t,[{key:"checkEnter",value:function(e){this.props.changeMessage(this.state.value),this.props.sendTyping(this.props.user),13===e.keyCode&&(this.props.sendMessage(),this.setNull())}},{key:"render",value:function(){var e=this,t=this.props.isShowPopup;return i.a.createElement("div",null,i.a.createElement("div",{className:"bottom_wrapper"},i.a.createElement("div",{className:"message_input_wrapper"},i.a.createElement("div",{className:"input-group mb-3"},i.a.createElement("input",{id:"myInput",value:this.state.value,type:"text",className:"message_input",placeholder:"Nh\u1eadp Tin Nh\u1eafn ...",onChange:this.setValue,onKeyUp:this.checkEnter.bind(this)}),i.a.createElement("div",{className:"input-group-prepend"},i.a.createElement("i",{onClick:function(){return e.props.isPopup(!0)},className:"icon far fa-smile","aria-hidden":"true"})))),i.a.createElement("div",{className:"send_message",onClick:function(){return e.props.sendMessage(),e.setNull()},ref:"inputMessage"},i.a.createElement("div",{className:"icon"}),i.a.createElement("div",{className:"text"},"G\u1eedi"))),i.a.createElement("div",{className:t?"ABC":"d-none",onClick:this.checkOutSide},i.a.createElement(w.a,{onSelect:this.addEmoji})))}}]),t}(i.a.Component),E=n(146),N=n.n(E),S=n(147),C=n.n(S),M=n(148),T=n.n(M),I=n(149),_=function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).responseFacebook=function(e){console.log("fb",e),n.props.setUser(e,0),localStorage.setItem("user",JSON.stringify(e)),localStorage.setItem("loginType",0)},n.responseGoogle=function(e){console.log("google",e),n.props.setUser(e,1),localStorage.setItem("user",JSON.stringify(e)),localStorage.setItem("loginType",1)},n}return Object(f.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"containFB"},i.a.createElement(T.a,{textButton:"FaceBook",appId:"904848930011624",autoLoad:!1,fields:"name,email,picture",callback:this.responseFacebook}),i.a.createElement(I.GoogleLogin,{className:"google",buttonText:"Google",clientId:"60342117365-mntstprlnp235rau83e4sdul3hjcms9q.apps.googleusercontent.com",onSuccess:this.responseGoogle,isSignedIn:!1}))}}]),t}(i.a.Component),x=(n(289),n(312)),L=function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).signOut=function(){var e=n.props,t=e.setUser,a=e.isModal;localStorage.removeItem("user"),localStorage.removeItem("loginType"),a(!1),t(null,null)},n}return Object(f.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this.props,t=e.visible,n=e.isModal;return i.a.createElement(i.a.Fragment,null,i.a.createElement(x.a,{title:"Th\xf4ng B\xe1o !!!",visible:t,onOk:this.signOut,onCancel:function(){return n(!1)},okText:"X\xe1c Nh\u1eadn",cancelText:"Tho\xe1t"},i.a.createElement("p",null," B\u1ea1n C\xf3 Mu\u1ed1n Tho\xe1t ?")))}}]),t}(i.a.Component),B=n(163),P=n(158),U=n.n(P),q="/write",D="/read",J=new(function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).getDataChat=function(){return n.get("https://reliable-potent-primrose.glitch.me"+D)},n.writeDataChat=function(e){return n.post("https://reliable-potent-primrose.glitch.me"+q,e)},n}return Object(f.a)(t,e),t}(function(){function e(){var t=this;Object(h.a)(this,e),this.get=function(e,n,a){var s=Object.assign({url:e,method:"get",params:n},a||{});return t._request(s)}}return Object(g.a)(e,[{key:"_request",value:function(e){var t=Object.assign(e=e||{});return U()(t).then(function(e){return e.data}).catch(function(e){if(!e.response)throw e})}},{key:"post",value:function(e,t,n){var a=Object.assign({url:e,method:"post",data:t},n||{});return this._request(a)}},{key:"put",value:function(e,t,n){var a=Object.assign({url:e,method:"put",data:t},n||{});return this._request(a)}},{key:"patch",value:function(e,t,n){var a=Object.assign({url:e,method:"patch",data:t},n||{});return this._request(a)}},{key:"delete",value:function(e,t,n){var a=Object.assign({url:e,method:"delete",params:t},n||{});return this._request(a)}}]),e}())),A=(n(309),b()("#status"),null),F=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).loadData=Object(p.a)(u.a.mark(function e(){var t,a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=b()(".messages"),e.next=3,J.getDataChat();case 3:a=e.sent,n.setState({messages:a&&JSON.parse(a)||[]}),document.addEventListener("visibilitychange",function(){clearInterval(A),document.title=(n.state&&0!=n.state.badge?"("+n.state.badge+")":"")+" Client Chat "}),t.animate({scrollTop:t.prop("scrollHeight")},1e3);case 7:case"end":return e.stop()}},e)})),n.sendnewMessage=function(){var e=n.state,t=e.typeLogin,a=e.messages,s={};0==t?s={id:a.length+1,user:n.state.user.name||null,message:n.state.input||"",url:n.state.user.picture.data.url||""}:1==t&&(s={id:a.length+1,user:n.state.user.profileObj.name||null,message:n.state.input||"",url:n.state.user.profileObj.imageUrl||""}),n.state.input&&(Object(p.a)(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.writeDataChat(s);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}))(),n.socket.emit("newMessage",s),n.setState({input:""}))},n.changeMessage=function(e){document.getElementById("myInput").focus(),n.setState({input:e})},n.isPopup=function(e){n.setState({isShowPopup:e})},n.checkOutSide=function(e){e.stopPropagation(),e.target.closest(".emoji-mart")||1!=n.state.isShowPopup||n.setState({isShowPopup:!1})},n.setUser=function(e,t){n.setState({user:e,typeLogin:t})},n.isModal=function(e){n.setState({visible:e})},n.setBadge=function(){n.setState({badge:0}),document.title="Client Chat",clearInterval(A)},n.badgeChange=function(){n.setBadge()},n.openNotification=function(){n.state.clickNotify&&(n.setState({clickNotify:!1}),n.badgeChange(),B.a.open({message:"Tin Nh\u1eafn M\u1edbi",description:i.a.createElement("div",{className:"notification-wait"},"B\u1ea1n C\xf3 "+n.state.badge+" tin nh\u1eafn ch\u1edd"),className:"notification",duration:2,onClose:function(){n.setState({clickNotify:!0})}}))},n.sendTyping=function(e){var t=n.state.typeLogin,a={};0==t?a={user:e.name||null}:1==t&&(a={user:e.profileObj.name||null}),n.socket.emit("typing",a)},n.getTyping=function(e){var t=n.state,s=t.typeLogin,i=t.user;(1==s&&e.user!=i.profileObj.name||0==s&&e.user!=i.name)&&(n.setState({isTyping:e.user}),clearTimeout(a),a=setTimeout(function(){n.setState({isTyping:""})},3e3))},n.state={messages:[],user:{},input:"",badge:0,isShowPopup:!1,checkLogin:!1,visible:!1,typeLogin:localStorage.getItem("loginType")||null,clickNotify:!0,isTyping:""},n.socket=null,n}return Object(f.a)(t,e),Object(g.a)(t,[{key:"UNSAFE_componentWillMount",value:function(){var e=this;this.setState({user:JSON.parse(localStorage.getItem("user"))||[]}),this.socket=C()("https://reliable-potent-primrose.glitch.me"),this.socket.on("id",function(t){return e.setState({user:t})}),this.socket.on("newMessage",function(t){e.newMessage(t)}),this.socket.on("typing",function(t){e.getTyping(t)})}},{key:"componentDidMount",value:function(){this.loadData()}},{key:"newMessage",value:function(e){var t=this,n=b()(".messages"),a=this.state,s=a.typeLogin,i=a.user,o=this.state.messages,r=N()(o,"id");parseInt(Math.max.apply(Math,Object(c.a)(r)));if(o.push({id:o.length+1,user:e.user,message:e.message,url:e.url}),1==s&&e.user!=i.profileObj.name||0==s&&e.user!=i.name){var l=1;this.setState({badge:this.state.badge+1,isTyping:""}),clearInterval(A),A=setInterval(function(){1==l?(document.title="("+t.state.badge+") Client Chat ",--l):(document.title=e.user+" Nh\u1eafn Tin",++l)},1e3)}n&&n[0]&&(n[0].scrollHeight,n[0].scrollTop,n[0].clientHeight),this.setState({messages:o}),n.animate({scrollTop:n.prop("scrollHeight")},300)}},{key:"render",value:function(){var e=this,t=this.state,n=t.checkLogin,a=t.user,s=t.visible,o=t.typeLogin,r=t.badge,c=t.isTyping,l=t.input;return i.a.createElement("div",{className:"containButton"},i.a.createElement(y.a,null,i.a.createElement("title",null,"Client Chat"," ")),a&&Object.keys(a).length<=1||null==a||a&&"unknown"==a.status?i.a.createElement(_,{checkLogin:n,setUser:this.setUser}):i.a.createElement("div",{className:"app__content",onClick:this.checkOutSide},i.a.createElement("div",{className:"badge-block",onClick:this.openNotification},i.a.createElement("div",{className:"far fa-bell icon-badge"}),i.a.createElement("span",{className:0==r?"d-none":"e-badge e-badge-info e-badge-overlap e-badge-notification"},r)),i.a.createElement("div",{className:"chat_window",onClick:this.setBadge,id:"chat_window"},i.a.createElement("i",{onClick:function(){return e.isModal(!0)},className:"sign-out fas fa-sign-out-alt","aria-hidden":"true"}),i.a.createElement(O,{type:o,messages:this.state.messages,typing:this.state.typing}),i.a.createElement("div",{className:c?"wave typing":"d-none"},i.a.createElement("p",null,c," \u0111ang c\xe0o ph\xedm"),i.a.createElement("span",null,"\xa0"),i.a.createElement("span",null,"."),i.a.createElement("span",null,"."),i.a.createElement("span",null,".")),i.a.createElement(j,{input:l,sendMessage:this.sendnewMessage,sendTyping:this.sendTyping,changeMessage:this.changeMessage,isShowPopup:this.state.isShowPopup,isPopup:this.isPopup,checkOutSide:this.checkOutSide,user:a,isTypingNull:this.isTypingNull})),i.a.createElement(L,{isModal:this.isModal,visible:s,setUser:this.setUser})))}}]),t}(i.a.Component),W=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function G(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(i.a.createElement(F,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/clientChat",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/clientChat","/service-worker.js");W?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):G(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):G(e)})}}()}},[[165,1,2]]]);
//# sourceMappingURL=main.8f832f51.chunk.js.map