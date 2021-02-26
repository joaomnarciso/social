(this["webpackJsonpsocial-client"]=this["webpackJsonpsocial-client"]||[]).push([[0],{1208:function(e,t,a){},1209:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(0),l=a.n(r),c=a(53),s=a.n(c),o=(a(63),a(14)),i=a(3),m=function(){return l.a.createElement("div",{className:"toast",role:"alert","aria-live":"assertive","aria-atomic":"true"},l.a.createElement("div",{className:"toast-header"},l.a.createElement("strong",{className:"mr-auto"},"Bootstrap"),l.a.createElement("small",{className:"text-muted"},"just now"),l.a.createElement("button",{type:"button",className:"ml-2 mb-1 close","data-dismiss":"toast","aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),l.a.createElement("div",{className:"toast-body"},"See? Just like this."))},u=Object(r.createContext)({user:{},theme:"light",tasks:[],notifications:[{id:1,status:0},{id:2,status:0},{id:1,status:1}]}),d=function(){var e=Object(r.useContext)(u),t=e.state,a=e.dispatch,n=t.notifications.filter((function(e){return 5===e.status}));return l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark"},l.a.createElement(o.b,{className:"navbar-brand",to:"/"},"COMMUNIF"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarsExampleDefault","aria-controls":"navbarsExampleDefault","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarsExampleDefault"},l.a.createElement("ul",{className:"navbar-nav ml-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(o.c,{className:"nav-link",to:"/home"},"Home")),t.user.token?l.a.createElement(l.a.Fragment,null,l.a.createElement("li",{className:"nav-item ml-4"},l.a.createElement(o.c,{className:"nav-link",to:"/addtask"},"Add new request")),l.a.createElement("li",{className:"nav-item dropdown"},l.a.createElement("span",{className:"nav-link dropdown-toggle",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},l.a.createElement("i",{className:"fas fa-bell ".concat(Object.keys(t.notifications).length>0?"text-danger":"")})),l.a.createElement("ul",{className:"dropdown-menu","aria-labelledby":"navbarDropdown"},t.notifications.map((function(e,t){return l.a.createElement("li",{key:t,className:"dropdown-item ".concat(0===e.status?"active":"")},l.a.createElement(o.b,{to:"/",className:"".concat(0===e.status?"active":"")},e.id))})))),l.a.createElement("li",{className:"nav-item ml-4"},l.a.createElement("button",{className:"btn btn-outline-light",onClick:function(){return a({type:"USER_LOGOUT"})}},"Logout"))):l.a.createElement(l.a.Fragment,null,l.a.createElement("li",{className:"nav-item ml-4"},l.a.createElement(o.c,{className:"btn btn-outline-light",to:"/login"},"Login")),l.a.createElement("li",{className:"nav-item ml-4"},l.a.createElement(o.c,{className:"btn btn-light",to:"/register"},"Register")))))),n.length>0&&n.map((function(e){return l.a.createElement(m,{data:e})})))},p=(a(69),function(){return l.a.createElement("footer",null,l.a.createElement("div",{className:"container py-4"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("h4",null,"Quicklinks"),l.a.createElement("ul",{className:"list-group"},l.a.createElement("li",{className:""},"Register"),l.a.createElement("li",{className:""},"Login"))),l.a.createElement("div",{className:"col"},l.a.createElement("p",null,"All rights reserved - COMMUNIF - Copyright"," ",(new Date).getFullYear())),l.a.createElement("div",{className:"col"},l.a.createElement("ul",{className:"py-4 w-100 d-inline-flex justify-content-around flex-wrap"},l.a.createElement("li",{className:"facebook"},l.a.createElement("a",{href:"https://www.facebook.com",target:"_blank",rel:"noopener noreferrer",title:"Facebook"},l.a.createElement("ion-icon",{name:"logo-facebook"}))),l.a.createElement("li",{className:"youtube"},l.a.createElement("a",{href:"https://www.youtube.com",target:"_blank",rel:"noopener noreferrer",title:"Youtube"},l.a.createElement("ion-icon",{name:"logo-youtube"}))),l.a.createElement("li",{className:"instagram"},l.a.createElement("a",{href:"https://www.instagram.com",target:"_blank",rel:"noopener noreferrer",title:"Instagram"},l.a.createElement("ion-icon",{name:"logo-instagram"}))),l.a.createElement("li",{className:"twitter"},l.a.createElement("a",{href:"https://www.twitter.com",target:"_blank",rel:"noopener noreferrer",title:"Twitter"},l.a.createElement("ion-icon",{name:"logo-twitter"}))))))))}),f=a(4),b=a.n(f),E=a(9),g=a(13),v=a.n(g),h="http://localhost:3000/api/v1",N=function(e){var t=e.applicants;return 0===t.length?l.a.createElement("ul",null,l.a.createElement("li",null,"No applicants found")):l.a.createElement("ul",{className:"list-group"},t.map((function(e){return l.a.createElement("li",{className:"list-group-item d-flex justify-content-between"},l.a.createElement("div",null,e.first_name," ",e.last_name),l.a.createElement("div",null,l.a.createElement("button",{className:"btn btn-sm btn-danger"},"\xd7"),l.a.createElement("button",{className:"btn btn-sm btn-success"},"\u2714")))})))},k=function(e){var t=e.task,a=e.setFulfilment,c=e.fulfil,s=Object(r.useContext)(u).state,o=Object(r.useState)([]),i=Object(n.a)(o,2),m=i[0],d=i[1];return Object(r.useEffect)((function(){(function(){var e=Object(E.a)(b.a.mark((function e(){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("".concat(h,"/applicants/").concat(t.id),{headers:{Authorization:"bearer ".concat(s.user.token)}});case 2:a=e.sent,d(a.data),console.log("app data",a),console.log("Request applicants...");case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s.user.token,t.id]),l.a.createElement("div",{className:"modal d-block",tabIndex:"-1"},l.a.createElement("div",{className:"modal-dialog"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("h5",{className:"modal-title"},t.id," -",t.task_type.split("-").map((function(e){return function(e){return e.charAt(0).toUpperCase()+e.slice(1)+" "}(e)}))),l.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",onClick:function(){return a({})}},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),l.a.createElement("div",{className:"modal-body"},l.a.createElement("p",null,t.short_description)),l.a.createElement("div",{className:"modal-footer d-block"},l.a.createElement("div",{className:"d-flex justify-content-between"},l.a.createElement("small",{className:"text-muted"},t.created_at),l.a.createElement("span",null,m?Object.keys(m).length:0," applicants")),s.user.user_id===t.user_id?l.a.createElement(N,{applicants:m}):l.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:c},"Fulfil")))))},y=function(e){var t=e.tasks,a=e.setFulfilment,n=Object(r.useRef)();return Object(r.useEffect)((function(){if(window.google){var e=new window.google.maps.Map(n.current,{center:{lat:-34.397,lng:150.644},zoom:12});navigator.geolocation.getCurrentPosition((function(t){console.log({map:e}),console.log({position:t}),e.setCenter({lat:t.coords.latitude,lng:t.coords.longitude})})),function(e){t.map((function(t){var n="https://unpkg.com/ionicons@5.2.3/dist/svg/people-circle-outline.svg";n="material-need"===t.task_type?"https://unpkg.com/ionicons@5.2.3/dist/svg/bag-remove-outline.svg":n;var r=new window.google.maps.Marker({position:{lat:t.lat,lng:t.lng},map:e,title:t.task_type,icon:{url:n,scaledSize:new window.google.maps.Size(24,24)}});return r.addListener("click",(function(){a(t)})),r}))}(e)}}),[window.google]),l.a.createElement("div",{ref:n,className:"w-100",style:{height:500}})},w=(a(88),function(){var e=Object(r.useState)([]),t=Object(n.a)(e,2),a=t[0],c=t[1],s=Object(r.useState)({}),o=Object(n.a)(s,2),i=o[0],m=o[1],d=Object(r.useContext)(u).state;Object(r.useEffect)((function(){(function(){var e=Object(E.a)(b.a.mark((function e(){var t,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v()("".concat(h,"/tasks"),{headers:{Authorization:"bearer ".concat(d.user.token)}});case 3:t=e.sent,a=t.data,c(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.response.data);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[d.user]);var p=function(){var e=Object(E.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{t=v.a.post("".concat(h,"/fulfil"),{task_id:i.id},{headers:{Authorization:"bearer ".concat(d.user.token)}}),t.data}catch(a){}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return l.a.createElement("div",{className:"home"},Object.keys(i).length>0&&l.a.createElement(k,{task:i,setFulfilment:m,fulfil:p}),l.a.createElement(y,{className:"map-wrapper",tasks:a,setFulfilment:m}))}),O=a(15),j=a(6),x=function(e){var t=e.submit,a=Object(r.useState)({}),c=Object(n.a)(a,2),s=c[0],o=c[1],i=function(e){o(Object(j.a)(Object(j.a)({},s),{},Object(O.a)({},e.target.name,e.target.value)))};return l.a.createElement("section",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-4 mx-auto"},l.a.createElement("form",{className:"form-signin my-4",onSubmit:function(e){e.preventDefault(),t(s)}},l.a.createElement("h1",{className:"h3 mb-3 font-weight-normal"},"Please sign in"),l.a.createElement("label",{htmlFor:"inputEmail",className:"sr-only"},"Email address"),l.a.createElement("input",{type:"email",id:"inputEmail",name:"email",className:"form-control my-2",placeholder:"Email address",required:!0,autoFocus:!0,value:s.email,onChange:i}),l.a.createElement("label",{htmlFor:"inputPassword",className:"sr-only"},"Password"),l.a.createElement("input",{type:"password",id:"inputPassword",name:"password",value:s.password,className:"form-control my-2",placeholder:"Password",required:!0,onChange:i}),l.a.createElement("div",{className:"checkbox mb-3"},l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",value:"remember-me"})," Remember me")),l.a.createElement("button",{className:"btn btn-lg btn-primary btn-block",type:"submit"},"Sign in")))))},_=function(e){var t=e.history,a=Object(r.useContext)(u),c=a.state,s=a.dispatch,o=Object(r.useState)(""),m=Object(n.a)(o,2),d=m[0],p=m[1],f=function(){var e=Object(E.a)(b.a.mark((function e(a){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a),e.prev=1,e.next=4,v.a.post("http://localhost:3000/api/v1/login",a);case 4:200===(n=e.sent).status&&(s({type:"USER_LOGIN",payload:{token:n.data.token}}),t.push("/home")),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),p(e.t0.response.data.error),console.log("Error:",e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return c.user.token?l.a.createElement(i.a,{to:"/home"}):(console.log("Error:",d),l.a.createElement("div",null,l.a.createElement(x,{submit:f}),d&&l.a.createElement("div",{className:"alert alert-danger"},d)))},C=a(18),S=a.n(C),F=(a(89),function(e){e.submit;var t=Object(r.useState)({firstName:"Jo\xe3o",lastName:"Narciso",email:"joao@email.com",picture:null,doc:""}),a=Object(n.a)(t,2),c=a[0],s=a[1],o=Object(r.useState)({}),i=Object(n.a)(o,2),m=i[0],u=i[1],d=Object(r.useState)(!1),p=Object(n.a)(d,1)[0],f=function(e){var t=e.target,a=t.name,n=t.value,r=t.type;s("file"===r?Object(j.a)(Object(j.a)({},c),{},Object(O.a)({},a,e.target.files[0])):Object(j.a)(Object(j.a)({},c),{},Object(O.a)({},a,n)))},b=function(e){var t={};return e.firstName?S.a.isLength(e.firstName,{min:2,max:50})||(t.firstName="Min 2 characters and max 50 characters."):t.firstName="Enter your first name.",e.lastName?S.a.isLength(e.lastName,{min:2,max:50})||(t.name="Min 2 characters and max 50 characters."):t.lastName="Enter your last name.",e.email?S.a.isEmail(e.email)||(t.email="Enter a valid E-mail address."):t.email="Enter an E-mail address.",e.doc?S.a.isMimeType(e.doc.type)||(t.doc="Please provide a valid file ( pdf, png or jpg )."):t.doc="Please provide a valid Government ID",e.picture?S.a.isMimeType(e.picture.type)||(t.picture="Please provide a valid file ( pdf, png or jpg )."):t.picture="Please provide a valid Government ID",t};return m.firstName&&console.log({errors:m}),l.a.createElement("div",{className:"container py-4 my-4",id:"registration"},l.a.createElement("h3",null,"Register now"),l.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=b(c);if(Object.keys(t).length>0)u(t);else{var a=new FormData;a.append("picture",c.picture),console.log(a.getAll("picture")),console.log(c.picture)}}},p&&l.a.createElement("div",{className:"alert alert-success",role:"alert"},"Your information has been sent!"),!!m.global&&l.a.createElement("div",{className:"alert alert-danger",role:"alert"},"$",m.global),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"firstName"},"First name"),l.a.createElement("input",{type:"text",className:"form-control ".concat(m.firstName?"is-invalid":""),id:"firstName",placeholder:"First Name",name:"firstName",value:c.firstName,onChange:f}),!!m.firstName&&l.a.createElement("div",{className:"invalid-feedback"},m.firstName)),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"lastName"},"Last name"),l.a.createElement("input",{type:"text",className:"form-control ".concat(m.lastName?"is-invalid":""),id:"lastName",name:"lastName",placeholder:"Last Name",value:c.lastName,onChange:f}),!!m.lastName&&l.a.createElement("div",{className:"invalid-feedback"},m.lastName)),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"email"},"E-mail address"),l.a.createElement("input",{type:"email",className:"form-control ".concat(m.email?"is-invalid":""),id:"email",placeholder:"E-mail Address",name:"email",value:c.email,onChange:f}),!!m.email&&l.a.createElement("div",{className:"invalid-feedback"},m.email)),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"doc"},"Government ID"),l.a.createElement("input",{type:"file",accept:"image/png,image/jpg, application/pdf",className:"form-control form-control-file ".concat(m.doc?"is-invalid":""),value:"",onChange:f,id:"doc",name:"doc"}),m.picture?l.a.createElement("div",{className:"invalid-feedback"},m.picture):l.a.createElement("small",{id:"emailHelp",className:"form-text text-danger"},"Invalid file format."))," ",l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"picture"},"Profile picture"),l.a.createElement("input",{type:"file",accept:"image/png,image/jpg, application/pdf",className:"form-control form-control-file ".concat(m.picture?"is-invalid":""),value:"",onChange:f,id:"picture",name:"picture"}),m.doc?l.a.createElement("div",{className:"invalid-feedback"},m.doc):l.a.createElement("small",{id:"emailHelp",className:"form-text text-danger"},"Invalid file format.")),l.a.createElement("button",{type:"submit",disabled:!!p,className:"btn ".concat(p?"disabled":"")},"Register")))}),D=(a(153),function(e){var t=function(){var e=Object(E.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a={email:t.email,first_name:t.firstName,last_name:t.lastName,document:"true",status:"1",picture:t.picture},console.log(a);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return l.a.createElement("section",{id:"register"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row py-2"},l.a.createElement("div",{className:"col-lg-4 ml-auto"},l.a.createElement(F,{submit:t})))))}),I=(a(55),a(21)),L=a.n(I),M=(a(160),a(161),a(57),a(12),function(e){var t,a=e.submit,c=Object(r.useRef)(),s=Object(r.useState)({lat:51.2,lng:6.78}),o=Object(n.a)(s,2),i=o[0],m=o[1],u=Object(r.useState)({date:"",task_type:"material-need",short_description:"This is the task's short description, with minimum of 50 characters"}),d=Object(n.a)(u,2),p=d[0],f=d[1],b=Object(r.useState)({}),E=Object(n.a)(b,2),g=E[0],v=E[1],h=function(e){var t=e.target,a=t.name,n=t.value;f(Object(j.a)(Object(j.a)({},p),{},Object(O.a)({},a,n)))},N=function(){var e={};return p.short_description||(e.short_description="Enter your task's short description"),(p.short_description.length<50||p.short_description.length>300)&&(e.short_description="The short description has to be between 50 and 300 characters long."),p.task_type||(e.task_type="Select the type of task"),e};return Object(r.useEffect)((function(){var e=new window.google.maps.Map(c.current,{center:{lat:-34.397,lng:150.644},zoom:10});navigator.geolocation.getCurrentPosition((function(t){var a={lat:t.coords.latitude,lng:t.coords.longitude};m(a),e.setCenter(a),function(e){window.google.maps.event.addListener(e,"dragend",(function(e){setTimeout((function(){console.log({e:e})}),500)})),console.log({marker:e})}(new window.google.maps.Marker({position:a,map:e,draggable:!0})),f(Object(j.a)(Object(j.a)({},p),a))}))}),[window.google]),console.log({errors:g,data:p}),console.log("current",i),l.a.createElement("section",{className:"py-5"},l.a.createElement("h2",null,"Add a new request"),l.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=N();Object.keys(t).length>0?v(t):a(p)}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 mb-3"},l.a.createElement("label",{htmlFor:"task_type"},"Type"),l.a.createElement("select",{name:"task_type",className:"form-control ".concat(g.task_type?"is-invalid":""),id:"task_type",onChange:h,defaultValue:p.task_type},l.a.createElement("option",{disabled:!0,value:""},"Select"),l.a.createElement("option",{value:"one-time-task"},"One-time task"),l.a.createElement("option",{value:"material-need"},"Material need")),!!g.task_type&&l.a.createElement("div",{className:"invalid-feedback"},g.task_type)),l.a.createElement("div",{className:"col-md-6 mb-3"},l.a.createElement("label",{htmlFor:"datetime"},"Date/Time"),l.a.createElement("input",(t={className:"form-control",onChange:h,id:"datetime",type:"datetime",name:"date"},Object(O.a)(t,"type","datetime-local"),Object(O.a)(t,"min",L()().format("YYYY[-]MM[-]DD[T]HH:m")),t))),console.log(L()().format()),l.a.createElement("div",{className:"col-md-12 mb-3"},l.a.createElement("label",{htmlFor:"short_description"},"Description"),l.a.createElement("textarea",{name:"short_description",className:"form-control ".concat(g.short_description?"is-invalid":""),id:"short_description",placeholder:"",onChange:h,value:p.short_description,maxLength:"300",minLength:"50"}),!!g.short_description&&l.a.createElement("div",{className:"invalid-feedback"},g.short_description))),l.a.createElement("div",{className:"col-md-12"},l.a.createElement("strong",null,"Please pick your task's location"),l.a.createElement("div",{ref:c,style:{height:"300px"}})),l.a.createElement("hr",{className:"mb-4"}),l.a.createElement("button",{className:"btn btn-primary btn-lg btn-block",type:"submit"},"Submit")))});function P(){var e=Object(r.useContext)(u).state,t=Object(r.useState)({}),a=Object(n.a)(t,2),c=a[0],s=a[1],o=function(){var t=Object(E.a)(b.a.mark((function t(a){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.a.post("".concat(h,"/tasks"),a,{headers:{Authorization:"bearer ".concat(e.user.token)}});case 3:n=t.sent,s({type:"success",message:n.data.message}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),s({type:"danger",message:t.t0.response.data.message});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}();return l.a.createElement("div",{className:"container"},"success"!==c.type&&l.a.createElement(M,{submit:o}),Object.keys(c).length>0&&l.a.createElement("div",{className:"alert alert-".concat(c.type)},c.message))}var R=function(e){return Object(r.useContext)(u).state.user.token?l.a.createElement(i.b,e):l.a.createElement(i.a,{to:{pathname:"/login"}})};a(1208);var T=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(o.a,null,l.a.createElement(d,null),l.a.createElement(R,{exact:!0,path:"/",component:w}),l.a.createElement(i.b,{path:"/register",component:D}),l.a.createElement(R,{path:"/home",component:w}),l.a.createElement(i.b,{path:"/login",component:_}),l.a.createElement(R,{path:"/addtask",component:P}),l.a.createElement(p,null)))},A=a(56),U=function(e,t){var a=t.type,n=t.payload;switch(a){case"USER_LOGIN":return localStorage.setItem("token",n.token),Object(j.a)(Object(j.a)({},e),{},{user:n});case"USER_LOGOUT":return localStorage.removeItem("token"),Object(j.a)(Object(j.a)({},e),{},{user:{}});default:return e}},z=function(){var e=Object(r.useContext)(u),t=Object(r.useReducer)(U,e),a=Object(n.a)(t,2),c=a[0],s=a[1];return Object(r.useEffect)((function(){var e=localStorage.getItem("token");if(e){var t=Object(A.a)(e);s({type:"USER_LOGIN",payload:{token:e,user_id:t.user_id}})}}),[]),l.a.createElement(u.Provider,{value:{state:c,dispatch:s}},l.a.createElement(T,null))};s.a.render(l.a.createElement(z,null),document.getElementById("root"))},153:function(e,t,a){},160:function(e,t,a){},161:function(e,t,a){},58:function(e,t,a){e.exports=a(1209)},63:function(e,t,a){},69:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){}},[[58,1,2]]]);
//# sourceMappingURL=main.9ecc2395.chunk.js.map