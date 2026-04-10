import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./iframe-Bp0aehd5.js";import{g as d}from"./product-CsUF4JJF.js";import"./preload-helper-PPVm8Dsz.js";const a="_price_mjhh1_1",p="_discountContainer_mjhh1_6",m="_oldPrice_mjhh1_10",u="_discountPrice_mjhh1_14",s={price:a,discountContainer:p,oldPrice:m,discountPrice:u},t=n.memo(({price:r,discount:c})=>e.jsx("div",{className:s.price,children:c<=0?e.jsxs("div",{children:["$",Number(r).toFixed(2)]}):e.jsxs("div",{className:s.discountContainer,children:[e.jsxs("div",{className:s.discountPrice,children:["$",d(r,c).toFixed(2)]}),e.jsxs("div",{className:s.oldPrice,"aria-label":"Original price",children:["$",Number(r).toFixed(2)]})]})}));t.__docgenInfo={description:"",methods:[],displayName:"Price",props:{price:{required:!0,tsType:{name:"number"},description:""},discount:{required:!0,tsType:{name:"number"},description:""}}};const g={component:t,decorators:[r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:10,width:260,height:"auto",border:"1px solid #eee",padding:8,backgroundColor:"#f5f5f5"},children:[e.jsx("div",{style:{display:"flex",width:240,height:320,border:"1px solid #c9c7c7ff",padding:8,backgroundColor:"#f5f5f5"}}),e.jsx(r,{})]})]},i={args:{price:100,discount:0}},o={args:{price:100,discount:10}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    price: 100,
    discount: 0
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    price: 100,
    discount: 10
  }
}`,...o.parameters?.docs?.source}}};const _=["Default","WithDiscount"];export{i as Default,o as WithDiscount,_ as __namedExportsOrder,g as default};
