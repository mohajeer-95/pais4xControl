"use strict";(self.webpackChunkstarter_bt5=self.webpackChunkstarter_bt5||[]).push([[299],{3299:(e,r,t)=>{t.r(r),t.d(r,{default:()=>v});var n=t(5043),i=t(7426),o=t(6221),s=t(7550),a=t(7493),c=t(2679),l=t(6098),d=t(6259),p=t(3655),u=t(9157),b=t(4874),f=t(8353),j=t(1658),O=t(579);const v=()=>{const[e,r]=(0,n.useState)([]),[t,v]=(0,n.useState)(!0),[g,m]=(0,n.useState)(!1),[y,h]=(0,n.useState)({link:"",image:null}),[x,N]=(0,n.useState)({link:"",image:""}),[M,w]=(0,n.useState)("");(0,n.useEffect)((()=>{k()}),[]);const k=async()=>{const e=new Headers;e.append("Authorization","Bearer ".concat("eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMjg2MDllNzQ0OTgxZjMwNzIyZTllNmRlMDQyMjY2MDJmNDM0NTk3ODBlNzUzM2FiNDc3MGFhMjhiZDFjZjRhMjU5NGNhYjI3MGJhM2UxNzUiLCJpYXQiOjE3MTc2MjA2NDQsIm5iZiI6MTcxNzYyMDY0NCwiZXhwIjoxNzQ5MTU2NjQ0LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.cRRWjwpsvG5cYb-5n_YpfrOHfoWzRTEoYndZffA08MrJxWnv4KZ1mezT6PaKxPdDNEnRQaeqPSdo4Wtf5xWrlgpZTnNQmd8-_xXjz_LJHIXdGtT5YosL6If__d1psx6nsW8ckyXx2mKWF2hiM6a1c65keOgtmiEwCsADxBYZv-VAE1eZz8eQHaYmc_dBFZnfevZqaDOcYjSdijRBGXYGCb65-wolO08is5cf6jq-r6m0pWKQ1Gwq8h5BRV4HBqxLVJK-2Mbk2hHF0EsxrUSIE9wTKxqBcH0SL4wOA8GWeiQUSlAncTkwvGQwFBdGVMou67XDz5UeiN0ek6JayemFZcpq-fkHP7l1fNpT_6SgQSRaIxca2rx9Q_nQYrjIczzuvPchbs9MbOdKdEpuolOWAbI4VBGS0FvMiXF596LCLuyAnnAC2YppkMF6AepxMBWtvCpYgL_Kr6KK4e-39_7tzhe1nMZsIRg-2jEYkHv8TB1vr4VaN4IikA6gEVlfml51VW6aiej2YkY4WtdJSeVAOhPgcPYX396v7awfW7liQz4TOIS0sxSaFTTlCrKvqxBz676uzmqxq0oUqTBm_4vlAirm1iluAXP9NwxYKHxIF8SNHaKtsBvMIzjaN79pBHmQdvRc_mJRf-Z9y5Wzn0-m6LmM2c60WA0Hu-vquTPZmbc"));const t={method:"GET",headers:e,redirect:"follow"};try{const e=await fetch("https://lab.app2serve.com/public/api/slider",t),n=await e.json();r(n.sliders)}catch(n){console.error("Error fetching sliders:",n)}finally{v(!1)}},A=async t=>{const n=new Headers;n.append("Authorization","Bearer ".concat("eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMjg2MDllNzQ0OTgxZjMwNzIyZTllNmRlMDQyMjY2MDJmNDM0NTk3ODBlNzUzM2FiNDc3MGFhMjhiZDFjZjRhMjU5NGNhYjI3MGJhM2UxNzUiLCJpYXQiOjE3MTc2MjA2NDQsIm5iZiI6MTcxNzYyMDY0NCwiZXhwIjoxNzQ5MTU2NjQ0LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.cRRWjwpsvG5cYb-5n_YpfrOHfoWzRTEoYndZffA08MrJxWnv4KZ1mezT6PaKxPdDNEnRQaeqPSdo4Wtf5xWrlgpZTnNQmd8-_xXjz_LJHIXdGtT5YosL6If__d1psx6nsW8ckyXx2mKWF2hiM6a1c65keOgtmiEwCsADxBYZv-VAE1eZz8eQHaYmc_dBFZnfevZqaDOcYjSdijRBGXYGCb65-wolO08is5cf6jq-r6m0pWKQ1Gwq8h5BRV4HBqxLVJK-2Mbk2hHF0EsxrUSIE9wTKxqBcH0SL4wOA8GWeiQUSlAncTkwvGQwFBdGVMou67XDz5UeiN0ek6JayemFZcpq-fkHP7l1fNpT_6SgQSRaIxca2rx9Q_nQYrjIczzuvPchbs9MbOdKdEpuolOWAbI4VBGS0FvMiXF596LCLuyAnnAC2YppkMF6AepxMBWtvCpYgL_Kr6KK4e-39_7tzhe1nMZsIRg-2jEYkHv8TB1vr4VaN4IikA6gEVlfml51VW6aiej2YkY4WtdJSeVAOhPgcPYX396v7awfW7liQz4TOIS0sxSaFTTlCrKvqxBz676uzmqxq0oUqTBm_4vlAirm1iluAXP9NwxYKHxIF8SNHaKtsBvMIzjaN79pBHmQdvRc_mJRf-Z9y5Wzn0-m6LmM2c60WA0Hu-vquTPZmbc"));const i={method:"DELETE",headers:n,redirect:"follow"};try{(await fetch("https://lab.app2serve.com/public/api/slider/".concat(t),i)).ok?r(e.filter((e=>e.id!==t))):console.error("Failed to delete slider")}catch(o){console.error("Error deleting slider:",o)}};return t?(0,O.jsx)(i.A,{}):(0,O.jsxs)("div",{children:[(0,O.jsxs)("div",{style:{paddingBottom:40},children:[(0,O.jsxs)(o.A,{onSubmit:async e=>{if(e.preventDefault(),!(()=>{let e=!0;const r={link:"",image:""};return y.link||(r.link="URL is required",e=!1),y.image||(r.image="Image is required",e=!1),N(r),e})())return;m(!0);const r=new Headers;r.append("Authorization","Bearer ".concat("eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMjg2MDllNzQ0OTgxZjMwNzIyZTllNmRlMDQyMjY2MDJmNDM0NTk3ODBlNzUzM2FiNDc3MGFhMjhiZDFjZjRhMjU5NGNhYjI3MGJhM2UxNzUiLCJpYXQiOjE3MTc2MjA2NDQsIm5iZiI6MTcxNzYyMDY0NCwiZXhwIjoxNzQ5MTU2NjQ0LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.cRRWjwpsvG5cYb-5n_YpfrOHfoWzRTEoYndZffA08MrJxWnv4KZ1mezT6PaKxPdDNEnRQaeqPSdo4Wtf5xWrlgpZTnNQmd8-_xXjz_LJHIXdGtT5YosL6If__d1psx6nsW8ckyXx2mKWF2hiM6a1c65keOgtmiEwCsADxBYZv-VAE1eZz8eQHaYmc_dBFZnfevZqaDOcYjSdijRBGXYGCb65-wolO08is5cf6jq-r6m0pWKQ1Gwq8h5BRV4HBqxLVJK-2Mbk2hHF0EsxrUSIE9wTKxqBcH0SL4wOA8GWeiQUSlAncTkwvGQwFBdGVMou67XDz5UeiN0ek6JayemFZcpq-fkHP7l1fNpT_6SgQSRaIxca2rx9Q_nQYrjIczzuvPchbs9MbOdKdEpuolOWAbI4VBGS0FvMiXF596LCLuyAnnAC2YppkMF6AepxMBWtvCpYgL_Kr6KK4e-39_7tzhe1nMZsIRg-2jEYkHv8TB1vr4VaN4IikA6gEVlfml51VW6aiej2YkY4WtdJSeVAOhPgcPYX396v7awfW7liQz4TOIS0sxSaFTTlCrKvqxBz676uzmqxq0oUqTBm_4vlAirm1iluAXP9NwxYKHxIF8SNHaKtsBvMIzjaN79pBHmQdvRc_mJRf-Z9y5Wzn0-m6LmM2c60WA0Hu-vquTPZmbc"));const t=new FormData;t.append("link",y.link),t.append("image",y.image);const n={method:"POST",headers:r,body:t,redirect:"follow"};try{const e=await fetch("https://lab.app2serve.com/public/api/slider",n);1===(await e.json()).status?(w("Slider added successfully!"),k(),h({link:"",image:null})):console.error("Failed to add slider")}catch(i){console.error("Error adding slider:",i)}finally{m(!1)}},children:[(0,O.jsxs)(s.A,{children:[(0,O.jsx)(a.A,{for:"link",children:"Slider URL"}),(0,O.jsx)(c.A,{type:"text",name:"link",id:"link",value:y.link,onChange:e=>{const{name:r,value:t}=e.target;h({...y,[r]:t}),N({...x,[r]:""})},invalid:!!x.link}),x.link&&(0,O.jsx)(l.A,{color:"danger",children:x.link})]}),(0,O.jsxs)(s.A,{children:[(0,O.jsx)(a.A,{for:"image",children:"Slider Image"}),(0,O.jsx)(c.A,{type:"file",name:"image",id:"image",onChange:e=>{h({...y,image:e.target.files[0]}),N({...x,image:""})},invalid:!!x.image}),(0,O.jsx)("div",{children:x.image&&(0,O.jsx)(l.A,{color:"danger",children:x.image})})]}),g?(0,O.jsx)(i.A,{}):(0,O.jsx)(d.A,{style:{backgroundColor:"#26c6da"},type:"submit",children:"Add Slider"})]}),(0,O.jsx)("div",{style:{marginTop:20},children:M&&(0,O.jsx)(l.A,{color:"success",children:M})})]}),(0,O.jsx)("div",{className:"d-none d-lg-block",children:(0,O.jsxs)(p.A,{children:[(0,O.jsx)("thead",{children:(0,O.jsxs)("tr",{children:[(0,O.jsx)("th",{children:"Image"}),(0,O.jsx)("th",{children:"ID"}),(0,O.jsx)("th",{children:"Link"}),(0,O.jsx)("th",{children:"Status"})]})}),(0,O.jsx)("tbody",{children:e.map((e=>(0,O.jsxs)("tr",{children:[(0,O.jsx)("td",{children:(0,O.jsx)("img",{src:"https://lab.app2serve.com/storage/app/public/".concat(e.image),alt:e.link,style:{height:"60px"}})}),(0,O.jsx)("td",{children:e.id}),(0,O.jsx)("td",{children:(0,O.jsx)("a",{href:e.link,children:e.link})}),(0,O.jsx)("td",{children:(0,O.jsx)(d.A,{color:1===e.status?"danger":"success",onClick:()=>A(e.id),children:1===e.status?"Remove":"Add"})})]},e.id)))})]})}),(0,O.jsx)("div",{className:"d-lg-none",children:e.map((e=>(0,O.jsxs)(u.A,{className:"mb-3",children:[(0,O.jsx)(b.A,{top:!0,src:"https://lab.app2serve.com/storage/app/public/".concat(e.image),alt:e.link}),(0,O.jsxs)(f.A,{children:[(0,O.jsxs)(j.A,{children:["ID: ",e.id]}),(0,O.jsx)(j.A,{children:(0,O.jsx)("a",{href:e.link,children:e.link})}),(0,O.jsx)(d.A,{color:1===e.status?"danger":"success",onClick:()=>A(e.id),children:1===e.status?"Remove":"Add"})]})]},e.id)))})]})}},6098:(e,r,t)=>{t.d(r,{A:()=>I});var n=t(5043),i=t(5173),o=t.n(i),s=t(8139),a=t.n(s),c=t(6794),l=t(9998),d=["tag","baseClass","baseClassActive","className","cssModule","children","innerRef"];function p(){return p=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},p.apply(this,arguments)}function u(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function b(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?b(Object(t),!0).forEach((function(r){j(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function j(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var O=f(f({},l.Ay.propTypes),{},{children:o().oneOfType([o().arrayOf(o().node),o().node]),tag:c.Wx,baseClass:o().string,baseClassActive:o().string,className:o().string,cssModule:o().object,innerRef:o().oneOfType([o().object,o().string,o().func])}),v=f(f({},l.Ay.defaultProps),{},{timeout:c.Q6.Fade,appear:!0,enter:!0,exit:!0,in:!0});function g(e){var r=(0,n.useRef)(null),t=e.tag,i=void 0===t?"div":t,o=e.baseClass,s=void 0===o?"fade":o,b=e.baseClassActive,j=void 0===b?"show":b,O=e.className,g=e.cssModule,m=e.children,y=e.innerRef,h=void 0===y?r:y,x=u(e,d),N=(0,c.Up)(f({defaultProps:v},x),c.PS),M=(0,c.cJ)(x,c.PS);return n.createElement(l.Ay,p({nodeRef:h},N),(function(e){var r="entered"===e,t=(0,c.qO)(a()(O,s,r&&j),g);return n.createElement(i,p({className:t},M,{ref:h}),m)}))}g.propTypes=O,g.defaultProps=v;const m=g;var y=["className","closeClassName","closeAriaLabel","cssModule","tag","color","isOpen","toggle","children","transition","fade","innerRef"];function h(){return h=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},h.apply(this,arguments)}function x(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function N(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?x(Object(t),!0).forEach((function(r){M(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function M(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function w(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var k={children:o().node,className:o().string,closeClassName:o().string,closeAriaLabel:o().string,color:o().string,cssModule:o().object,fade:o().bool,innerRef:o().oneOfType([o().object,o().string,o().func]),isOpen:o().bool,tag:c.Wx,toggle:o().func,transition:o().shape(m.propTypes)};function A(e){var r=e.className,t=e.closeClassName,i=e.closeAriaLabel,o=void 0===i?"Close":i,s=e.cssModule,l=e.tag,d=void 0===l?"div":l,p=e.color,u=void 0===p?"success":p,b=e.isOpen,f=void 0===b||b,j=e.toggle,O=e.children,v=e.transition,g=void 0===v?N(N({},m.defaultProps),{},{unmountOnExit:!0}):v,x=e.fade,M=void 0===x||x,k=e.innerRef,A=w(e,y),I=(0,c.qO)(a()(r,"alert","alert-".concat(u),{"alert-dismissible":j}),s),P=(0,c.qO)(a()("btn-close",t),s),T=N(N(N({},m.defaultProps),g),{},{baseClass:M?g.baseClass:"",timeout:M?g.timeout:0});return n.createElement(m,h({},A,T,{tag:d,className:I,in:f,role:"alert",innerRef:k}),j?n.createElement("button",{type:"button",className:P,"aria-label":o,onClick:j}):null,O)}A.propTypes=k;const I=A},6259:(e,r,t)=>{t.d(r,{A:()=>x});var n=t(5043),i=t(5173),o=t.n(i),s=t(8139),a=t.n(s),c=t(6794),l=["className","cssModule","variant","innerRef"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},d.apply(this,arguments)}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function b(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var f={active:o().bool,"aria-label":o().string,onClick:o().func,variant:o().oneOf(["white"]),className:o().string,cssModule:o().object,innerRef:o().oneOfType([o().object,o().string,o().func])};function j(e){var r=e.className,t=(e.cssModule,e.variant),i=e.innerRef,o=b(e,l),s=(0,c.qO)(a()(r,"btn-close",t&&"btn-close-".concat(t)));return n.createElement("button",d({ref:i,type:"button",className:s},function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){u(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({"aria-label":"close"},o)))}j.propTypes=f;const O=j;var v=["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"];function g(){return g=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},g.apply(this,arguments)}function m(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var y={active:o().bool,"aria-label":o().string,block:o().bool,children:o().node,className:o().string,cssModule:o().object,close:o().bool,color:o().string,disabled:o().bool,innerRef:o().oneOfType([o().object,o().func,o().string]),onClick:o().func,outline:o().bool,size:o().string,tag:c.Wx};function h(e){var r=(0,n.useCallback)((function(r){if(!e.disabled)return e.onClick?e.onClick(r):void 0;r.preventDefault()}),[e.onClick,e.disabled]),t=e.active,i=e["aria-label"],o=e.block,s=e.className,l=e.close,d=e.cssModule,p=e.color,u=void 0===p?"secondary":p,b=e.outline,f=e.size,j=e.tag,y=void 0===j?"button":j,h=e.innerRef,x=m(e,v);if(l)return n.createElement(O,x);var N="btn".concat(b?"-outline":"","-").concat(u),M=(0,c.qO)(a()(s,"btn",N,!!f&&"btn-".concat(f),!!o&&"d-block w-100",{active:t,disabled:e.disabled}),d);return x.href&&"button"===y&&(y="a"),n.createElement(y,g({type:"button"===y&&x.onClick?"button":void 0},x,{className:M,ref:h,onClick:r,"aria-label":i}))}h.propTypes=y;const x=h},4874:(e,r,t)=>{t.d(r,{A:()=>f});var n=t(5043),i=t(5173),o=t.n(i),s=t(8139),a=t.n(s),c=t(6794),l=["className","cssModule","top","bottom","tag"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},d.apply(this,arguments)}function p(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u={bottom:o().bool,className:o().string,cssModule:o().object,tag:c.Wx,top:o().bool};function b(e){var r=e.className,t=e.cssModule,i=e.top,o=e.bottom,s=e.tag,u=void 0===s?"img":s,b=p(e,l),f="card-img";i&&(f="card-img-top"),o&&(f="card-img-bottom");var j=(0,c.qO)(a()(r,f),t);return n.createElement(u,d({},b,{className:j}))}b.propTypes=u;const f=b},1658:(e,r,t)=>{t.d(r,{A:()=>f});var n=t(5043),i=t(5173),o=t.n(i),s=t(8139),a=t.n(s),c=t(6794),l=["className","cssModule","tag"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},d.apply(this,arguments)}function p(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u={className:o().string,cssModule:o().object,tag:c.Wx};function b(e){var r=e.className,t=e.cssModule,i=e.tag,o=void 0===i?"p":i,s=p(e,l),u=(0,c.qO)(a()(r,"card-text"),t);return n.createElement(o,d({},s,{className:u}))}b.propTypes=u;const f=b},3655:(e,r,t)=>{t.d(r,{A:()=>f});var n=t(5043),i=t(5173),o=t.n(i),s=t(8139),a=t.n(s),c=t(6794),l=["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},d.apply(this,arguments)}function p(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u={bordered:o().bool,borderless:o().bool,className:o().string,cssModule:o().object,dark:o().bool,hover:o().bool,innerRef:o().oneOfType([o().func,o().string,o().object]),responsive:o().oneOfType([o().bool,o().string]),responsiveTag:c.Wx,size:o().string,striped:o().bool,tag:c.Wx};function b(e){var r=e.className,t=e.cssModule,i=e.size,o=e.bordered,s=e.borderless,u=e.striped,b=e.dark,f=e.hover,j=e.responsive,O=e.tag,v=void 0===O?"table":O,g=e.responsiveTag,m=void 0===g?"div":g,y=e.innerRef,h=p(e,l),x=(0,c.qO)(a()(r,"table",!!i&&"table-"+i,!!o&&"table-bordered",!!s&&"table-borderless",!!u&&"table-striped",!!b&&"table-dark",!!f&&"table-hover"),t),N=n.createElement(v,d({},h,{ref:y,className:x}));if(j){var M=(0,c.qO)(!0===j?"table-responsive":"table-responsive-".concat(j),t);return n.createElement(m,{className:M},N)}return N}b.propTypes=u;const f=b}}]);
//# sourceMappingURL=299.44716304.chunk.js.map