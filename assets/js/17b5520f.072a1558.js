"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[759],{15680:(e,r,n)=>{n.d(r,{xA:()=>u,yg:()=>y});var t=n(96540);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),p=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},u=function(e){var r=p(e.components);return t.createElement(l.Provider,{value:r},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=o,y=c["".concat(l,".").concat(d)]||c[d]||m[d]||a;return n?t.createElement(y,i(i({ref:r},u),{},{components:n})):t.createElement(y,i({ref:r},u))}));function y(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3456:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var t=n(58168),o=(n(96540),n(15680));const a={id:"CrosshairMode",title:"Enumeration: CrosshairMode",sidebar_label:"CrosshairMode",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},i=void 0,s={unversionedId:"api/enums/CrosshairMode",id:"version-3.8/api/enums/CrosshairMode",title:"Enumeration: CrosshairMode",description:"Represents the crosshair mode.",source:"@site/versioned_docs/version-3.8/api/enums/CrosshairMode.md",sourceDirName:"api/enums",slug:"/api/enums/CrosshairMode",permalink:"/lightweight-charts/docs/3.8/api/enums/CrosshairMode",draft:!1,editUrl:null,tags:[],version:"3.8",sidebarPosition:0,frontMatter:{id:"CrosshairMode",title:"Enumeration: CrosshairMode",sidebar_label:"CrosshairMode",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},l={},p=[{value:"Enumeration Members",id:"enumeration-members",level:2},{value:"Normal",id:"normal",level:3},{value:"Magnet",id:"magnet",level:3}],u={toc:p},c="wrapper";function m(e){let{components:r,...n}=e;return(0,o.yg)(c,(0,t.A)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Represents the crosshair mode."),(0,o.yg)("h2",{id:"enumeration-members"},"Enumeration Members"),(0,o.yg)("h3",{id:"normal"},"Normal"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("strong",{parentName:"p"},"Normal")," = ",(0,o.yg)("inlineCode",{parentName:"p"},"0")),(0,o.yg)("p",null,"This mode allows crosshair to move freely on the chart."),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"magnet"},"Magnet"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("strong",{parentName:"p"},"Magnet")," = ",(0,o.yg)("inlineCode",{parentName:"p"},"1")),(0,o.yg)("p",null,"This mode sticks crosshair's horizontal line to the price value of a single-value series or to the close price of OHLC-based series."))}m.isMDXComponent=!0}}]);