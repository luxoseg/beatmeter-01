import{j as e,F as c,a as l}from"./index-DnQx8T29.js";import{A as m,m as d}from"./animations-B0sdwJWC.js";import{r as t}from"./vendor-DsACMIg-.js";import"./ui-CZE9bjp-.js";function i({title:s,titleId:r,...n},a){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:a,"aria-labelledby":r},n),s?t.createElement("title",{id:r},s):null,t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"}))}const o=t.forwardRef(i);function g({notification:s}){var a;if(!s)return null;const r=()=>{switch(s.type){case"withdraw":return e.jsx(l,{className:"w-5 h-5 text-green-600"});case"survey":return e.jsx(c,{className:"w-5 h-5 text-blue-600"});case"active":return e.jsx(o,{className:"w-5 h-5 text-purple-600"})}},n=()=>{switch(s.type){case"withdraw":return"bg-green-100";case"survey":return"bg-blue-100";case"active":return"bg-purple-100"}};return e.jsx(m,{children:e.jsx(d.div,{initial:{x:300,opacity:0},animate:{x:0,opacity:1},exit:{x:300,opacity:0},className:"fixed bottom-24 right-4 max-w-sm bg-white rounded-lg shadow-lg p-4 z-50",children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:`p-2 ${n()} rounded-full`,children:r()}),e.jsx("div",{children:e.jsx("p",{className:"text-sm text-gray-600",children:s.type==="withdraw"?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"font-medium",children:s.name})," acabou de sacar"," ",e.jsxs("span",{className:"font-medium text-green-600",children:["R$ ",(a=s.amount)==null?void 0:a.toFixed(2)]})]}):s.type==="survey"?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"font-medium",children:s.name})," completou"," ",e.jsx("span",{className:"font-medium text-blue-600",children:s.surveyCount})," pesquisas"]}):e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"font-medium",children:s.name})," ",e.jsx("span",{className:"text-purple-600",children:"está respondendo agora"})]})})})]})})})}export{g as default};
