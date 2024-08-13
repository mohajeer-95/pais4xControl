"use strict";(self.webpackChunkstarter_bt5=self.webpackChunkstarter_bt5||[]).push([[395],{8931:(e,s,t)=>{t.d(s,{y:()=>a});const r=function(e,s,t){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"POST",a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];var d={};if(d.method=r,"GET"!=r)d.body=a?s:JSON.stringify(s);else{e+="?";for(const t in s)e+=t+"="+s[t]+"&"}d.headers="GET"!=r?{"X-Custom-Token":t,"Content-Type":"application/json"}:{"X-Custom-Token":t};let n=async function(e,s){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";try{let r=await fetch(e,s),a=await r.json();return console.log("RESPONSE RES",a),404==r.status?(console.log("404",r,e,s),!1):401==r.status?(console.log("401",r,e,s),a):500==r.status?(console.log("500",r,e,s),!1):r.status>=200&&r.status<300?t?a["".concat(t)]:a:405==r.status||400==r.status?(console.log("405 || 400",r,e,s),!1):(console.log("internet",r,e,s),!1)}catch(r){return console.log("data error",r,e,s),!1}}(e,d);return n},a=async function(e,s){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"POST",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"aaaaa",d=!1;return 0!=a&&void 0!=a&&""!=a&&null!=a&&(d=await r(e,s,a,t,!1)),d}},851:(e,s,t)=>{t.d(s,{A:()=>u});var r=t(9157),a=t(8353),d=t(5299),n=t(6985),c=t(3655),i=t(5043),l=t(8931),h=t(9820),o=t(1803),j=t(3758),x=t(6229),m=t(8360),g=t(579);const p=[{avatar:h,name:"Hanna Gover",email:"hgover@gmail.com",project:"Flexy React",status:"pending",weeks:"35",budget:"95K"},{avatar:o,name:"Hanna Gover",email:"hgover@gmail.com",project:"Lading pro React",status:"done",weeks:"35",budget:"95K"},{avatar:j,name:"Hanna Gover",email:"hgover@gmail.com",project:"Elite React",status:"holt",weeks:"35",budget:"95K"},{avatar:x,name:"Hanna Gover",email:"hgover@gmail.com",project:"Flexy React",status:"pending",weeks:"35",budget:"95K"},{avatar:m,name:"Hanna Gover",email:"hgover@gmail.com",project:"Ample React",status:"done",weeks:"35",budget:"95K"},{avatar:m,name:"Hanna Gover",email:"hgover@gmail.com",project:"Ample React",status:"done",weeks:"35",budget:"95K"},{avatar:m,name:"Hanna Gover",email:"hgover@gmail.com",project:"Ample React",status:"done",weeks:"35",budget:"95K"},{avatar:m,name:"Hanna Gover",email:"hgover@gmail.com",project:"Ample React",status:"done",weeks:"35",budget:"95K"},{avatar:m,name:"Hanna Gover",email:"hgover@gmail.com",project:"Ample React",status:"done",weeks:"35",budget:"95K"},{avatar:m,name:"Hanna Gover",email:"hgover@gmail.com",project:"Ample React",status:"done",weeks:"35",budget:"95K"}],b=[{id:"Loading",broker_id:"Loading",name:"Loading",email:"Loading",dateAdded:"Loading",cashback:"Loading"}],u=()=>{const[e,s]=i.useState(b),[t,h]=i.useState({}),[o,j]=(0,i.useState)([]),[x,m]=(0,i.useState)(!1);(0,i.useEffect)((()=>{u()}),[]);const u=async()=>{var e=[];m(!0);const t=await(0,l.y)("https://lab.app2serve.com/public/api/brokers",{},"GET");e=await t.brokers,await e.map(((e,s)=>{e.id=s+1})),await s(await e),m(!1)};return(0,g.jsx)("div",{children:(0,g.jsx)(r.A,{children:(0,g.jsxs)(a.A,{children:[(0,g.jsx)(d.A,{tag:"h5",children:"Project Listing"}),(0,g.jsx)(n.A,{className:"mb-2 text-muted",tag:"h6",children:"Overview of the projects"}),(0,g.jsxs)(c.A,{className:"no-wrap mt-3 align-middle",responsive:!0,borderless:!0,children:[(0,g.jsx)("thead",{children:(0,g.jsxs)("tr",{children:[(0,g.jsx)("th",{children:"Team Lead"}),(0,g.jsx)("th",{children:"Project"}),(0,g.jsx)("th",{children:"Status"}),(0,g.jsx)("th",{children:"Weeks"}),(0,g.jsx)("th",{children:"Budget"})]})}),(0,g.jsx)("tbody",{children:p.map(((e,s)=>(0,g.jsxs)("tr",{className:"border-top",children:[(0,g.jsx)("td",{children:(0,g.jsxs)("div",{className:"d-flex align-items-center p-2",children:[(0,g.jsx)("img",{src:e.avatar,className:"rounded-circle",alt:"avatar",width:"45",height:"45"}),(0,g.jsxs)("div",{className:"ms-3",children:[(0,g.jsx)("h6",{className:"mb-0",children:e.name}),(0,g.jsx)("span",{className:"text-muted",children:e.email})]})]})}),(0,g.jsx)("td",{children:e.project}),(0,g.jsx)("td",{children:"pending"===e.status?(0,g.jsx)("span",{className:"p-2 bg-danger rounded-circle d-inline-block ms-3"}):"holt"===e.status?(0,g.jsx)("span",{className:"p-2 bg-warning rounded-circle d-inline-block ms-3"}):(0,g.jsx)("span",{className:"p-2 bg-success rounded-circle d-inline-block ms-3"})}),(0,g.jsx)("td",{children:e.weeks}),(0,g.jsx)("td",{children:e.budget})]},s)))})]})]})})})}},2395:(e,s,t)=>{t.r(s),t.d(s,{default:()=>o});var r=t(851),a=t(2327),d=t(2345),n=t(9157),c=t(5299),i=t(8353),l=t(3655),h=t(579);const o=()=>(0,h.jsxs)(a.A,{children:[(0,h.jsx)(d.A,{lg:"12",children:(0,h.jsx)(r.A,{})}),(0,h.jsx)(d.A,{lg:"12",children:(0,h.jsxs)(n.A,{children:[(0,h.jsxs)(c.A,{tag:"h6",className:"border-bottom p-3 mb-0",children:[(0,h.jsx)("i",{className:"bi bi-card-text me-2",children:" "}),"Table with Border"]}),(0,h.jsx)(i.A,{className:"",children:(0,h.jsxs)(l.A,{bordered:!0,children:[(0,h.jsx)("thead",{children:(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{children:"#"}),(0,h.jsx)("th",{children:"First Name"}),(0,h.jsx)("th",{children:"Last Name"}),(0,h.jsx)("th",{children:"Username"})]})}),(0,h.jsxs)("tbody",{children:[(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{scope:"row",children:"1"}),(0,h.jsx)("td",{children:"Mark"}),(0,h.jsx)("td",{children:"Otto"}),(0,h.jsx)("td",{children:"@mdo"})]}),(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{scope:"row",children:"2"}),(0,h.jsx)("td",{children:"Jacob"}),(0,h.jsx)("td",{children:"Thornton"}),(0,h.jsx)("td",{children:"@fat"})]}),(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{scope:"row",children:"3"}),(0,h.jsx)("td",{children:"Larry"}),(0,h.jsx)("td",{children:"the Bird"}),(0,h.jsx)("td",{children:"@twitter"})]})]})]})})]})}),(0,h.jsx)(d.A,{lg:"12",children:(0,h.jsxs)(n.A,{children:[(0,h.jsxs)(c.A,{tag:"h6",className:"border-bottom p-3 mb-0",children:[(0,h.jsx)("i",{className:"bi bi-card-text me-2",children:" "}),"Table with Striped"]}),(0,h.jsx)(i.A,{className:"",children:(0,h.jsxs)(l.A,{bordered:!0,striped:!0,children:[(0,h.jsx)("thead",{children:(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{children:"#"}),(0,h.jsx)("th",{children:"First Name"}),(0,h.jsx)("th",{children:"Last Name"}),(0,h.jsx)("th",{children:"Username"})]})}),(0,h.jsxs)("tbody",{children:[(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{scope:"row",children:"1"}),(0,h.jsx)("td",{children:"Mark"}),(0,h.jsx)("td",{children:"Otto"}),(0,h.jsx)("td",{children:"@mdo"})]}),(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{scope:"row",children:"2"}),(0,h.jsx)("td",{children:"Jacob"}),(0,h.jsx)("td",{children:"Thornton"}),(0,h.jsx)("td",{children:"@fat"})]}),(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{scope:"row",children:"3"}),(0,h.jsx)("td",{children:"Larry"}),(0,h.jsx)("td",{children:"the Bird"}),(0,h.jsx)("td",{children:"@twitter"})]})]})]})})]})}),(0,h.jsx)(d.A,{lg:"12",children:(0,h.jsxs)(n.A,{children:[(0,h.jsxs)(c.A,{tag:"h6",className:"border-bottom p-3 mb-0",children:[(0,h.jsx)("i",{className:"bi bi-card-text me-2",children:" "}),"Table with Hover"]}),(0,h.jsx)(i.A,{className:"",children:(0,h.jsxs)(l.A,{bordered:!0,hover:!0,children:[(0,h.jsx)("thead",{children:(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{children:"#"}),(0,h.jsx)("th",{children:"First Name"}),(0,h.jsx)("th",{children:"Last Name"}),(0,h.jsx)("th",{children:"Username"})]})}),(0,h.jsxs)("tbody",{children:[(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{scope:"row",children:"1"}),(0,h.jsx)("td",{children:"Mark"}),(0,h.jsx)("td",{children:"Otto"}),(0,h.jsx)("td",{children:"@mdo"})]}),(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{scope:"row",children:"2"}),(0,h.jsx)("td",{children:"Jacob"}),(0,h.jsx)("td",{children:"Thornton"}),(0,h.jsx)("td",{children:"@fat"})]}),(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{scope:"row",children:"3"}),(0,h.jsx)("td",{children:"Larry"}),(0,h.jsx)("td",{children:"the Bird"}),(0,h.jsx)("td",{children:"@twitter"})]})]})]})})]})})]})},9820:(e,s,t)=>{e.exports=t.p+"static/media/user1.f3714f3391c9a5903799.jpg"},1803:(e,s,t)=>{e.exports=t.p+"static/media/user2.ddd14b391c00b67bd050.jpg"},3758:(e,s,t)=>{e.exports=t.p+"static/media/user3.a57a5165b2d1891852db.jpg"},6229:(e,s,t)=>{e.exports=t.p+"static/media/user4.6ac95ef9bc0c027733ea.jpg"},8360:(e,s,t)=>{e.exports=t.p+"static/media/user5.847ea5a9e28e437d4624.jpg"}}]);
//# sourceMappingURL=395.e3427255.chunk.js.map