"use strict";(self.webpackChunkwoms_react=self.webpackChunkwoms_react||[]).push([[801],{5242:(e,s,a)=>{a.d(s,{Z:()=>c});a(2791);var l=a(184);function c(e){let{headerFor:s,images:a}=e;return(0,l.jsx)("section",{className:"page-header-section service-title style-1",style:{backgroundImage:"url('".concat(a["pageheader.jpg"],"')")},children:(0,l.jsx)("div",{className:"page-header-content",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"page-header-content-inner",children:[(0,l.jsx)("div",{className:"page-title",children:(0,l.jsx)("h2",{children:s})}),(0,l.jsxs)("ol",{className:"breadcrumb",children:[(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"index.html",children:"Home"})}),(0,l.jsx)("li",{className:"active",children:s})]})]})})})})}},1801:(e,s,a)=>{a.r(s),a.d(s,{default:()=>m});var l=a(2791),c=a(2443),r=a(1087),i=a(1159),t=a(184);const n=e=>{let{images:s}=e;const[a,n]=(0,l.useState)(""),[d,m]=(0,l.useState)(!0),[o,h]=(0,l.useState)(""),[x,j]=(0,l.useState)("");(0,l.useEffect)((()=>{(async()=>{try{m(!0);const e=await fetch("http://localhost:4000/books",{method:"GET"}),s=await e.json();e.ok&&(n(s),m(!1)),e.ok||(console.log("Error! status: ".concat(e.status)),j(""))}catch(e){console.log("Fetch error : ",e)}})()}),[]);const N=e=>{if(0===e.length||" "===e)return 0;m(!0),n(""),j(""),setTimeout((async()=>{const s=await fetch("http://localhost:4000/books?q="+e),a=await s.json();s.ok&&(j(a),m(!1))}),1e3)};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.ql,{children:(0,t.jsx)("title",{children:"Our Library"})}),(0,t.jsx)(c.tD,{className:"p-5 h-25",children:(0,t.jsx)(c.u2,{onInput:e=>N(e.target.value),onChange:e=>N(e.target.value),className:"m-0",label:"Search"})}),(0,t.jsx)("br",{}),d&&(0,t.jsx)("div",{className:"text-center h1",children:"Loading"}),a&&a.map((e=>(0,t.jsx)("div",{className:"row justify-content-center mb-3",children:(0,t.jsx)("div",{className:"col-md-12",children:(0,t.jsx)("div",{className:"card shadow-0 border rounded-3 mb-0",style:{minHeight:"fit-content"},children:(0,t.jsx)("div",{className:"card-body",children:(0,t.jsxs)("div",{className:"row g-0",children:[(0,t.jsx)("div",{className:"col-xl-3 col-md-4 d-flex justify-content-center",children:(0,t.jsxs)("div",{className:"bg-image hover-zoom ripple rounded ripple-surface me-md-3 mb-3 mb-md-0",children:[(0,t.jsx)("img",{src:e.image,className:"w-100"}),(0,t.jsx)(r.rU,{to:"#",children:(0,t.jsx)("div",{className:"hover-overlay",children:(0,t.jsx)("div",{className:"mask",style:{backgroundColor:"rgba(253, 253, 253, 0.15)"}})})})]})}),(0,t.jsxs)("div",{className:"col-xl-6 col-md-5 col-sm-7",children:[(0,t.jsx)("h3",{children:e.title}),(0,t.jsxs)("div",{className:"d-flex flex-row",children:[(0,t.jsxs)("div",{className:"text-warning mb-1 me-2",children:[(0,t.jsx)("i",{className:"fa fa-star"}),(0,t.jsx)("i",{className:"fa fa-star"}),(0,t.jsx)("i",{className:"fa fa-star"}),(0,t.jsx)("i",{className:"fa fa-star"}),(0,t.jsx)("i",{className:"fas fa-star-half-alt"}),(0,t.jsx)("span",{className:"ms-1",children:e.rating})]}),(0,t.jsxs)("span",{className:"text-muted",children:[e.order_number," orders"]})]}),(0,t.jsx)("p",{className:"text mb-4 mb-md-0",children:e.desc})]})]})})})})}))),x&&x.map((e=>(0,t.jsx)("div",{className:"row justify-content-center mb-3",children:(0,t.jsx)("div",{className:"col-md-12",children:(0,t.jsx)("div",{className:"card shadow-0 border rounded-3",children:(0,t.jsx)("div",{className:"card-body",children:(0,t.jsxs)("div",{className:"row g-0",children:[(0,t.jsx)("div",{className:"col-xl-3 col-md-4 d-flex justify-content-center",children:(0,t.jsxs)("div",{className:"bg-image hover-zoom ripple rounded ripple-surface me-md-3 mb-3 mb-md-0",children:[(0,t.jsx)("img",{src:e.image,className:"w-100"}),(0,t.jsx)(r.rU,{to:"#",children:(0,t.jsx)("div",{className:"hover-overlay",children:(0,t.jsx)("div",{className:"mask",style:{backgroundColor:"rgba(253, 253, 253, 0.15)"}})})})]})}),(0,t.jsxs)("div",{className:"col-xl-6 col-md-5 col-sm-7",children:[(0,t.jsx)("h3",{children:e.title}),(0,t.jsxs)("div",{className:"d-flex flex-row",children:[(0,t.jsxs)("div",{className:"text-warning mb-1 me-2",children:[(0,t.jsx)("i",{className:"fa fa-star"}),(0,t.jsx)("i",{className:"fa fa-star"}),(0,t.jsx)("i",{className:"fa fa-star"}),(0,t.jsx)("i",{className:"fa fa-star"}),(0,t.jsx)("i",{className:"fas fa-star-half-alt"}),(0,t.jsx)("span",{className:"ms-1",children:e.rating})]}),(0,t.jsxs)("span",{className:"text-muted",children:[e.order_number," orders"]})]}),(0,t.jsx)("p",{className:"text mb-4 mb-md-0",children:e.desc})]})]})})})})}))),x&&0===x.length&&(0,t.jsx)("div",{className:"text-center h1",children:"No results"}),(0,t.jsx)("hr",{}),(0,t.jsx)("nav",{"aria-label":"Page navigation example",className:"d-flex justify-content-center mt-3",children:(0,t.jsxs)("ul",{className:"pagination",children:[(0,t.jsx)("li",{className:"page-item disabled",children:(0,t.jsx)(r.rU,{className:"page-link",to:"#","aria-label":"Previous",children:(0,t.jsx)("span",{"aria-hidden":"true",children:"\xab"})})}),(0,t.jsx)("li",{className:"page-item active",children:(0,t.jsx)(r.rU,{className:"page-link",to:"#",children:"1"})}),(0,t.jsx)("li",{className:"page-item",children:(0,t.jsx)(r.rU,{className:"page-link",to:"#",children:"2"})}),(0,t.jsx)("li",{className:"page-item",children:(0,t.jsx)(r.rU,{className:"page-link",to:"#",children:"3"})}),(0,t.jsx)("li",{className:"page-item",children:(0,t.jsx)(r.rU,{className:"page-link",to:"#",children:"4"})}),(0,t.jsx)("li",{className:"page-item",children:(0,t.jsx)(r.rU,{className:"page-link",to:"#",children:"5"})}),(0,t.jsx)("li",{className:"page-item",children:(0,t.jsx)(r.rU,{className:"page-link",to:"#","aria-label":"Next",children:(0,t.jsx)("span",{"aria-hidden":"true",children:"\xbb"})})})]})})]})};var d=a(5242);const m=e=>{let{images:s}=e;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.Z,{headerFor:"WOMS Academy",images:s}),(0,t.jsxs)("div",{className:"container py-5",children:[(0,t.jsx)("h1",{className:" h1",children:"Library"}),(0,t.jsx)("p",{className:" lead",children:"We have a library of books that will include any of the medical majors you might need"}),(0,t.jsx)(n,{images:s})]})]})}}}]);
//# sourceMappingURL=801.621e0f77.chunk.js.map