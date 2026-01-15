import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{c}from"./cn-BKYOBV2n.js";const d="_horizontalScrollButton_1v77n_1",f="_icon_1v77n_20",u="_disabled_1v77n_28",p="_left_1v77n_37",h="_right_1v77n_41",o={horizontalScrollButton:d,icon:f,disabled:u,left:p,right:h};function l({onClick:r,direction:n,className:i,disabled:a}){return t.jsx("button",{disabled:a,onClick:r,className:c(o.horizontalScrollButton,n==="left"?o.left:o.right,a&&o.disabled,i),children:t.jsx("svg",{className:o.icon,viewBox:"0 0 24 24",children:n==="left"?t.jsx("path",{d:"M16 4l-8 8 8 8"}):t.jsx("path",{d:"M8 4l8 8-8 8"})})})}l.__docgenInfo={description:"",methods:[],displayName:"HorizontalScrollButton"};const _={component:l,argTypes:{onClick:{action:"scroll"}},decorators:[r=>t.jsx("div",{style:{position:"relative",height:"200px",background:"#eee"},children:t.jsx(r,{})})]},e={args:{direction:"left",disabled:!1}},s={args:{direction:"right",disabled:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    direction: "left",
    disabled: false
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    direction: "right",
    disabled: false
  }
}`,...s.parameters?.docs?.source}}};const x=["LeftDefault","RightDefault"];export{e as LeftDefault,s as RightDefault,x as __namedExportsOrder,_ as default};
