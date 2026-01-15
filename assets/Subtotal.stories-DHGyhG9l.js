import{j as r}from"./jsx-runtime-D_zvdyIk.js";const d=(e,n)=>e-n*e/100,m=e=>Math.round((e+Number.EPSILON)*100)/100,o=e=>e.reduce((n,t)=>n+Number(t.price)*t.quantity,0),l=e=>m(e.reduce((n,t)=>n+d(t.price,t.discount)*t.quantity,0)),p="_subtotalSection_1rldi_1",y="_price_1rldi_13",g="_oldPrice_1rldi_19",b="_discountPrice_1rldi_25",i={subtotalSection:p,price:y,oldPrice:g,discountPrice:b};function u({arr:e}){const n=e.find(t=>t.discount>0);return r.jsxs("section",{className:i.subtotalSection,children:["Subtotal:",r.jsx("div",{className:i.price,children:n?r.jsxs("div",{children:[r.jsxs("p",{className:i.oldPrice,children:["$",o(e).toFixed(2)]}),r.jsxs("p",{className:i.discountPrice,children:["$",l(e).toFixed(2)]})]}):r.jsxs("p",{children:["$",o(e).toFixed(2)]})})]})}u.__docgenInfo={description:"",methods:[],displayName:"Subtotal",props:{arr:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    id: string;
    name: string;
    img: string;

    price: number;
    discount: number;

    stockQuantity: number;
    categoryName: string;

    quantity: number;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"img",value:{name:"string",required:!0}},{key:"price",value:{name:"number",required:!0}},{key:"discount",value:{name:"number",required:!0}},{key:"stockQuantity",value:{name:"number",required:!0}},{key:"categoryName",value:{name:"string",required:!0}},{key:"quantity",value:{name:"number",required:!0}}]}}],raw:"OrderItem[]"},description:""}}};const x={component:u,decorators:[e=>r.jsx("div",{style:{maxWidth:"800px",margin:"20px"},children:r.jsx(e,{})})]},c={id:"1",name:"Sofa",price:100,discount:0,quantity:1,stockQuantity:4,categoryName:"Sofas",img:"image"},s={args:{arr:[c,{...c,id:"2",price:200,quantity:2}]}},a={args:{arr:[c,{...c,id:"2",price:200,quantity:2,discount:20}]}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    arr: [baseItem, {
      ...baseItem,
      id: '2',
      price: 200,
      quantity: 2
    }]
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    arr: [baseItem, {
      ...baseItem,
      id: '2',
      price: 200,
      quantity: 2,
      discount: 20
    }]
  }
}`,...a.parameters?.docs?.source}}};const _=["Default","WithDiscount"];export{s as Default,a as WithDiscount,_ as __namedExportsOrder,x as default};
