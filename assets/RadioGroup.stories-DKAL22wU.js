import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./iframe-CZdCOPjp.js";import"./preload-helper-PPVm8Dsz.js";const c="_wrapper_12ob8_1",l="_title_12ob8_7",m="_option_12ob8_12",u="_radio_12ob8_20",o={wrapper:c,title:l,option:m,radio:u};function d({title:e,options:s,onClick:a,method:r}){return t.jsxs("fieldset",{className:o.wrapper,children:[t.jsx("legend",{className:o.title,children:e}),s.map(n=>t.jsxs("div",{className:o.option,children:[t.jsxs("label",{children:[t.jsx("input",{className:o.radio,type:"radio",name:e,checked:r?.id===n.id,onChange:()=>a(n)}),n.name]}),n.price!==void 0&&t.jsx("p",{className:o.price,children:n.price===0?"$0.00":`$${n.price.toFixed(2)}`})]},n.id))]})}d.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{title:{required:!0,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},method:{required:!0,tsType:{name:"union",raw:"T | null",elements:[{name:"T"},{name:"null"}]},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(option: T) => void",signature:{arguments:[{type:{name:"T"},name:"option"}],return:{name:"void"}}},description:""}}};const x={component:d,argTypes:{onClick:{action:e=>e}}},i={render:e=>{const[s,a]=p.useState(null);return t.jsx(d,{...e,method:s,onClick:r=>{a(r),e.onClick?.(r)}})},args:{title:"Title",options:[{id:1,name:"option1"},{id:2,name:"option2"},{id:3,name:"option3"}],method:null}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [selected, setSelected] = useState<(typeof args.options)[0] | null>(null);
    return <RadioGroup {...args} method={selected} onClick={option => {
      setSelected(option);
      args.onClick?.(option);
    }} />;
  },
  args: {
    title: "Title",
    options: [{
      id: 1,
      name: "option1"
    }, {
      id: 2,
      name: "option2"
    }, {
      id: 3,
      name: "option3"
    }],
    method: null
  }
}`,...i.parameters?.docs?.source}}};const T=["Default"];export{i as Default,T as __namedExportsOrder,x as default};
