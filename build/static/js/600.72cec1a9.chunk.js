"use strict";(self.webpackChunkstarter_bt5=self.webpackChunkstarter_bt5||[]).push([[600],{8931:(e,t,r)=>{r.d(t,{y:()=>n});const o=function(e,t,r){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"POST",n=arguments.length>4&&void 0!==arguments[4]&&arguments[4];var a={};if(a.method=o,"GET"!=o)a.body=n?t:JSON.stringify(t);else{e+="?";for(const r in t)e+=r+"="+t[r]+"&"}a.headers="GET"!=o?{"X-Custom-Token":r,"Content-Type":"application/json"}:{"X-Custom-Token":r};let i=async function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";try{let o=await fetch(e,t),n=await o.json();return console.log("RESPONSE RES",n),404==o.status?(console.log("404",o,e,t),!1):401==o.status?(console.log("401",o,e,t),n):500==o.status?(console.log("500",o,e,t),!1):o.status>=200&&o.status<300?r?n["".concat(r)]:n:405==o.status||400==o.status?(console.log("405 || 400",o,e,t),!1):(console.log("internet",o,e,t),!1)}catch(o){return console.log("data error",o,e,t),!1}}(e,a);return i},n=async function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"POST",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"aaaaa",a=!1;return 0!=n&&void 0!=n&&""!=n&&null!=n&&(a=await o(e,t,n,r,!1)),a}},7600:(e,t,r)=>{r.r(t),r.d(t,{default:()=>v});var o=r(5043),n=r(2327),a=r(2345),i=r(6446),s=r(3513),c=r(4783),l=r(8220),d=r(4918),u=r(3602),h=r(9157),p=r(8353),b=r(5299),f=r(8931),g=r(579);const m=[{id:"Loading",broker_id:"Loading",name:"Loading",email:"Loading",dateAdded:"Loading",cashback:"Loading"}],v=()=>{const[e,t]=o.useState(m),[r,v]=o.useState({}),[w,j]=(0,o.useState)([]),[y,x]=(0,o.useState)([]),[N,M]=(0,o.useState)(!1),[O,A]=(0,o.useState)(""),[I,T]=(0,o.useState)("");(0,o.useEffect)((()=>{k()}),[]);const k=async()=>{var e=[];M(!0);const r=await(0,f.y)("https://lab.app2serve.com/public/api/brokers",{},"GET");e=await r.brokers,await e.map(((e,t)=>{e.id=t+1})),await t(await e),z(e),M(!1)},z=async e=>{var r=[];M(!0);const o=await(0,f.y)("https://lab.app2serve.com/public/api/broker-carousel",{},"GET");await o.broker_carousel.map(((e,t)=>{r.push(e.broker_id)}));var n=S(e,r);console.log("carouselIds",r),console.log("data",n),await t(await n),M(!1)},S=(e,t)=>{const r=new Set(t);var o=[],n=[];return(o=e.map((e=>({...e,statusInCarousel:r.has(e.broker_id)?1:0})))).map((e=>{1==e.statusInCarousel&&n.push(e.id)})),T(n),o};const Y=e=>()=>{const t=R(e);window.confirm("Are you sure you want to delete this item?")?((async e=>{const t=new Headers;t.append("Authorization","Bearer ".concat("eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMjg2MDllNzQ0OTgxZjMwNzIyZTllNmRlMDQyMjY2MDJmNDM0NTk3ODBlNzUzM2FiNDc3MGFhMjhiZDFjZjRhMjU5NGNhYjI3MGJhM2UxNzUiLCJpYXQiOjE3MTc2MjA2NDQsIm5iZiI6MTcxNzYyMDY0NCwiZXhwIjoxNzQ5MTU2NjQ0LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.cRRWjwpsvG5cYb-5n_YpfrOHfoWzRTEoYndZffA08MrJxWnv4KZ1mezT6PaKxPdDNEnRQaeqPSdo4Wtf5xWrlgpZTnNQmd8-_xXjz_LJHIXdGtT5YosL6If__d1psx6nsW8ckyXx2mKWF2hiM6a1c65keOgtmiEwCsADxBYZv-VAE1eZz8eQHaYmc_dBFZnfevZqaDOcYjSdijRBGXYGCb65-wolO08is5cf6jq-r6m0pWKQ1Gwq8h5BRV4HBqxLVJK-2Mbk2hHF0EsxrUSIE9wTKxqBcH0SL4wOA8GWeiQUSlAncTkwvGQwFBdGVMou67XDz5UeiN0ek6JayemFZcpq-fkHP7l1fNpT_6SgQSRaIxca2rx9Q_nQYrjIczzuvPchbs9MbOdKdEpuolOWAbI4VBGS0FvMiXF596LCLuyAnnAC2YppkMF6AepxMBWtvCpYgL_Kr6KK4e-39_7tzhe1nMZsIRg-2jEYkHv8TB1vr4VaN4IikA6gEVlfml51VW6aiej2YkY4WtdJSeVAOhPgcPYX396v7awfW7liQz4TOIS0sxSaFTTlCrKvqxBz676uzmqxq0oUqTBm_4vlAirm1iluAXP9NwxYKHxIF8SNHaKtsBvMIzjaN79pBHmQdvRc_mJRf-Z9y5Wzn0-m6LmM2c60WA0Hu-vquTPZmbc"));const r={method:"DELETE",headers:t,body:"",redirect:"follow"};try{const t=await fetch("https://lab.app2serve.com/public/api/broker-carousel/".concat(e),r),o=await t.text();console.log("result",o),k()}catch(o){throw o}})(t.broker_id),console.log("Item deleted")):console.log("Item not deleted")},R=t=>e.find((e=>e.id===t)),W=e=>()=>{const t=R(e);t.broker_id&&(async e=>{const t=JSON.stringify({broker_id:e});try{const e=await fetch("https://lab.app2serve.com/public/api/broker-carousel",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat("eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMjg2MDllNzQ0OTgxZjMwNzIyZTllNmRlMDQyMjY2MDJmNDM0NTk3ODBlNzUzM2FiNDc3MGFhMjhiZDFjZjRhMjU5NGNhYjI3MGJhM2UxNzUiLCJpYXQiOjE3MTc2MjA2NDQsIm5iZiI6MTcxNzYyMDY0NCwiZXhwIjoxNzQ5MTU2NjQ0LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.cRRWjwpsvG5cYb-5n_YpfrOHfoWzRTEoYndZffA08MrJxWnv4KZ1mezT6PaKxPdDNEnRQaeqPSdo4Wtf5xWrlgpZTnNQmd8-_xXjz_LJHIXdGtT5YosL6If__d1psx6nsW8ckyXx2mKWF2hiM6a1c65keOgtmiEwCsADxBYZv-VAE1eZz8eQHaYmc_dBFZnfevZqaDOcYjSdijRBGXYGCb65-wolO08is5cf6jq-r6m0pWKQ1Gwq8h5BRV4HBqxLVJK-2Mbk2hHF0EsxrUSIE9wTKxqBcH0SL4wOA8GWeiQUSlAncTkwvGQwFBdGVMou67XDz5UeiN0ek6JayemFZcpq-fkHP7l1fNpT_6SgQSRaIxca2rx9Q_nQYrjIczzuvPchbs9MbOdKdEpuolOWAbI4VBGS0FvMiXF596LCLuyAnnAC2YppkMF6AepxMBWtvCpYgL_Kr6KK4e-39_7tzhe1nMZsIRg-2jEYkHv8TB1vr4VaN4IikA6gEVlfml51VW6aiej2YkY4WtdJSeVAOhPgcPYX396v7awfW7liQz4TOIS0sxSaFTTlCrKvqxBz676uzmqxq0oUqTBm_4vlAirm1iluAXP9NwxYKHxIF8SNHaKtsBvMIzjaN79pBHmQdvRc_mJRf-Z9y5Wzn0-m6LmM2c60WA0Hu-vquTPZmbc")},body:t,redirect:"follow"});if(!e.ok)throw new Error("Network response was not ok");k();const r=await e.text();console.log(r)}catch(r){console.error("There was a problem with the fetch operation:",r)}})(t.broker_id)},E=[{field:"id",headerName:"ROW Id",width:100,editable:!1,align:"center",headerAlign:"center"},{field:"broker_id",headerName:"Broker Id",width:150,editable:!1,align:"center",headerAlign:"center"},{field:"name",headerName:"Name",type:"string",width:250,align:"center",headerAlign:"center",editable:!1},{field:"currency",headerName:"Currency",type:"string",width:100,align:"center",headerAlign:"center",editable:!1},{field:"avg_rating",headerName:"rate",type:"string",width:150,editable:!1,align:"center",headerAlign:"center"},{field:"cashback",headerName:"Cashback",width:222,editable:!1,type:"string",align:"center",headerAlign:"center"},{field:"actions",type:"actions",headerName:"Actions",width:150,cellClassName:"actions",getActions:e=>{let{id:t}=e;return I.includes(t)?[(0,g.jsx)(d.Z,{icon:(0,g.jsx)(s.A,{}),label:"Delete",onClick:Y(t),color:"inherit"})]:[(0,g.jsx)(d.Z,{icon:(0,g.jsx)(c.A,{}),label:"Edit",className:"textPrimary",onClick:W(t),color:"inherit"})]}}];return(0,g.jsx)(o.Fragment,{children:(0,g.jsx)("div",{children:(0,g.jsx)(n.A,{children:(0,g.jsx)(a.A,{lg:"12",children:(0,g.jsx)(h.A,{children:(0,g.jsxs)(p.A,{children:[(0,g.jsx)(b.A,{tag:"h3",children:"Carousel List"}),(0,g.jsx)(i.A,{sx:{height:500,width:"100%","& .actions":{color:"text.secondary"},"& .textPrimary":{color:"text.primary"}},children:(0,g.jsx)(u.z,{rows:e,columns:E,rowModesModel:r,onRowModesModelChange:e=>{v(e)},onRowEditStop:(e,t)=>{e.reason===l.q.rowFocusOut&&(t.defaultMuiPrevented=!0)},processRowUpdate:r=>{const o={...r,isNew:!1};return t(e.map((e=>e.id===r.id?o:e))),o},slots:{toolbar:function(e){}},slotProps:{toolbar:{setRows:t,setRowModesModel:v}}})})]})})})})})})}},4783:(e,t,r)=>{var o=r(4994);t.A=void 0;var n=o(r(39)),a=r(579);t.A=(0,n.default)((0,a.jsx)("path",{d:"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"}),"AddCircleOutline")},9157:(e,t,r)=>{r.d(t,{A:()=>b});var o=r(5043),n=r(5173),a=r.n(n),i=r(8139),s=r.n(i),c=r(6794),l=["className","cssModule","color","body","inverse","outline","tag","innerRef"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},d.apply(this,arguments)}function u(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var h={body:a().bool,className:a().string,color:a().string,cssModule:a().object,innerRef:a().oneOfType([a().object,a().string,a().func]),inverse:a().bool,outline:a().bool,tag:c.Wx};function p(e){var t=e.className,r=e.cssModule,n=e.color,a=e.body,i=e.inverse,h=e.outline,p=e.tag,b=void 0===p?"div":p,f=e.innerRef,g=u(e,l),m=(0,c.qO)(s()(t,"card",!!i&&"text-white",!!a&&"card-body",!!n&&"".concat(h?"border":"bg","-").concat(n)),r);return o.createElement(b,d({},g,{className:m,ref:f}))}p.propTypes=h;const b=p},8353:(e,t,r)=>{r.d(t,{A:()=>b});var o=r(5043),n=r(5173),a=r.n(n),i=r(8139),s=r.n(i),c=r(6794),l=["className","cssModule","innerRef","tag"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},d.apply(this,arguments)}function u(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var h={className:a().string,cssModule:a().object,innerRef:a().oneOfType([a().object,a().string,a().func]),tag:c.Wx};function p(e){var t=e.className,r=e.cssModule,n=e.innerRef,a=e.tag,i=void 0===a?"div":a,h=u(e,l),p=(0,c.qO)(s()(t,"card-body"),r);return o.createElement(i,d({},h,{className:p,ref:n}))}p.propTypes=h;const b=p}}]);
//# sourceMappingURL=600.72cec1a9.chunk.js.map