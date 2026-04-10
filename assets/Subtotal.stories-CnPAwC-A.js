import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{g as u}from"./product-CsUF4JJF.js";const m="_subtotalSection_1oocz_1",p="_price_1oocz_12",l="_oldPrice_1oocz_17",x="_discountPrice_1oocz_22",n={subtotalSection:m,price:p,oldPrice:l,discountPrice:x},b=e=>Math.round((e+Number.EPSILON)*100)/100,a=e=>e.reduce((s,t)=>s+Number(t.price)*t.quantity,0),_=e=>b(e.reduce((s,t)=>s+u(t.price,t.discount)*t.quantity,0));function d({arr:e}){const s=e.find(t=>t.discount>0);return r.jsxs("section",{className:n.subtotalSection,children:["Subtotal:",r.jsx("div",{className:n.price,children:s?r.jsxs("div",{children:[r.jsxs("div",{className:n.oldPrice,children:["$",a(e).toFixed(2)]}),r.jsxs("div",{className:n.discountPrice,children:["$",_(e).toFixed(2)]})]}):r.jsxs("div",{children:["$",a(e).toFixed(2)]})})]})}d.__docgenInfo={description:"",methods:[],displayName:"Subtotal",props:{arr:{required:!0,tsType:{name:"union",raw:"OrderItem[] | OrderItemResponse[]",elements:[{name:"Array",elements:[{name:"OrderItem"}],raw:"OrderItem[]"},{name:"Array",elements:[{name:"OrderItemResponse"}],raw:"OrderItemResponse[]"}]},description:""}}};const S={component:d,decorators:[e=>r.jsx("div",{style:{maxWidth:"800px",margin:"20px"},children:r.jsx(e,{})})]},i={id:"1",name:"Sofa",price:100,discount:0,quantity:1,categoryName:"Sofas",img:"image"},o={args:{arr:[i,{...i,id:"2",price:200,quantity:2}]}},c={args:{arr:[i,{...i,id:"2",price:200,quantity:2,discount:20}]}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    arr: [baseItem, {
      ...baseItem,
      id: "2",
      price: 200,
      quantity: 2
    }]
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    arr: [baseItem, {
      ...baseItem,
      id: "2",
      price: 200,
      quantity: 2,
      discount: 20
    }]
  }
}`,...c.parameters?.docs?.source}}};const I=["Default","WithDiscount"];export{o as Default,c as WithDiscount,I as __namedExportsOrder,S as default};
