import{r as l,u as n,B as o,j as t,D as i}from"./index-101b4caa.js";import{S as j}from"./SubHeader-d1c73129.js";import{D as v}from"./Dates-7d8815b4.js";import{L as w}from"./LoadingModal-25ca6498.js";import{N}from"./Nodata-b6fcb0c4.js";import{u as f}from"./useDispatch-cb9e2080.js";function S(){const[a,c]=l.useState("withdraw"),e=f(),r=n(o.selectLoading),p=n(o.selectHasRows),h=()=>{const s={type:a};e(i.doFetchByUser(s,s))};l.useEffect(()=>{h()},[e,a]);const d=n(o.selectRows),u=()=>{c("deposit");const s={type:"deposit"};e(i.doFetchByUser(s))},x=()=>{c("withdraw");const s={type:"withdraw"};e(i.doFetchByUser(s,s))},_=s=>t.jsxs("div",{className:"content__transaction",children:[t.jsxs("div",{className:"transaction__left",children:[t.jsx("div",{className:`transaction__right ${s.status==="canceled"?"red":s.status==="pending"?"pendings":""}`,children:s.status}),t.jsx("div",{className:"transaction__date",children:v.Date(s==null?void 0:s.createdAt)})]}),t.jsxs("div",{className:`transaction__right ${s.status==="canceled"?"red":s.status==="pending"?"pendings":""}`,children:[s.type==="deposit"?"-":"","$",s==null?void 0:s.amount]})]});return t.jsxs("div",{children:[t.jsx(j,{title:"Transaction",path:"/profile"}),t.jsx("div",{className:"order__list",children:t.jsxs("div",{className:"list__transaction",children:[t.jsx("div",{className:a===""?"active__transacttion":"",onClick:()=>c(""),children:t.jsx("span",{className:"",children:"All"})}),t.jsxs("div",{onClick:()=>x(),className:a==="withdraw"?"active__transacttion":"",children:[" ",t.jsx("span",{children:"Withdraw"})]}),t.jsx("div",{onClick:()=>u(),className:a==="deposit"?"active__transacttion":"",children:t.jsx("span",{children:"Deposit"})})]})}),t.jsxs("div",{className:"transaction__content",children:[r&&t.jsx(w,{}),!r&&d&&d.map(s=>_(s)),!p&&t.jsx(N,{})]})]})}export{S as default};
