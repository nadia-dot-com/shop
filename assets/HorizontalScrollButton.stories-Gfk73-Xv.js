import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{c as i}from"./cn-BKYOBV2n.js";const d="_horizontalScrollButton_1kbga_1",f="_left_1kbga_24",g="_right_1kbga_27",u="_icon_1kbga_30",o={horizontalScrollButton:d,left:f,right:g,icon:u};function l({onClick:a,direction:s,className:n,disabled:c}){return t.jsx("button",{disabled:c,onClick:a,className:i(o.horizontalScrollButton,s==="left"?o.left:o.right,n),"aria-label":s==="left"?"Scroll left":"Scroll right",children:t.jsx("svg",{className:o.icon,viewBox:"0 0 24 24",children:s==="left"?t.jsx("path",{d:"M16 4l-8 8 8 8"}):t.jsx("path",{d:"M8 4l8 8-8 8"})})})}l.__docgenInfo={description:"",methods:[],displayName:"HorizontalScrollButton"};const m={component:l,argTypes:{onClick:{action:"scroll"}},decorators:[a=>t.jsx("div",{style:{position:"relative",height:"200px",background:"#eee"},children:t.jsx(a,{})})]},e={args:{direction:"left",disabled:!1}},r={args:{direction:"right",disabled:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    direction: "left",
    disabled: false
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    direction: "right",
    disabled: false
  }
}`,...r.parameters?.docs?.source}}};const _=["LeftDefault","RightDefault"];export{e as LeftDefault,r as RightDefault,_ as __namedExportsOrder,m as default};
