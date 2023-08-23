"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2577],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),o=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=o(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=o(r),u=n,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return r?a.createElement(h,p(p({ref:t},c),{},{components:r})):a.createElement(h,p({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,p=new Array(i);p[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,p[1]=l;for(var o=2;o<i;o++)p[o]=r[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8832:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var a=r(7462),n=(r(7294),r(3905));const i={id:"SeriesAttachedParameter",title:"Interface: SeriesAttachedParameter<HorzScaleItem, TSeriesType>",sidebar_label:"SeriesAttachedParameter",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},p=void 0,l={unversionedId:"api/interfaces/SeriesAttachedParameter",id:"api/interfaces/SeriesAttachedParameter",title:"Interface: SeriesAttachedParameter<HorzScaleItem, TSeriesType>",description:"Object containing references to the chart and series instances, and a requestUpdate method for triggering",source:"@site/docs/api/interfaces/SeriesAttachedParameter.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/SeriesAttachedParameter",permalink:"/lightweight-charts/docs/next/api/interfaces/SeriesAttachedParameter",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"SeriesAttachedParameter",title:"Interface: SeriesAttachedParameter<HorzScaleItem, TSeriesType>",sidebar_label:"SeriesAttachedParameter",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},s={},o=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Properties",id:"properties",level:2},{value:"chart",id:"chart",level:3},{value:"series",id:"series",level:3},{value:"requestUpdate",id:"requestupdate",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Returns",id:"returns",level:5}],c={toc:o},d="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Object containing references to the chart and series instances, and a requestUpdate method for triggering\na refresh of the chart."),(0,n.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"HorzScaleItem")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"HorzScaleItem"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"TSeriesType")),(0,n.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,n.kt)("a",{parentName:"td",href:"/lightweight-charts/docs/next/api/#seriestype"},(0,n.kt)("inlineCode",{parentName:"a"},"SeriesType"))," = keyof ",(0,n.kt)("a",{parentName:"td",href:"/lightweight-charts/docs/next/api/interfaces/SeriesOptionsMap"},(0,n.kt)("inlineCode",{parentName:"a"},"SeriesOptionsMap")))))),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"chart"},"chart"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"chart"),": ",(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/IChartApiBase"},(0,n.kt)("inlineCode",{parentName:"a"},"IChartApiBase")),"<",(0,n.kt)("inlineCode",{parentName:"p"},"HorzScaleItem"),">"),(0,n.kt)("p",null,"Chart instance."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"series"},"series"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"series"),": ",(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/ISeriesApi"},(0,n.kt)("inlineCode",{parentName:"a"},"ISeriesApi")),"<",(0,n.kt)("inlineCode",{parentName:"p"},"TSeriesType"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"HorzScaleItem"),", ",(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/SeriesDataItemTypeMap"},(0,n.kt)("inlineCode",{parentName:"a"},"SeriesDataItemTypeMap")),"<",(0,n.kt)("inlineCode",{parentName:"p"},"HorzScaleItem"),">","[",(0,n.kt)("inlineCode",{parentName:"p"},"TSeriesType"),"]",", ",(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/SeriesOptionsMap"},(0,n.kt)("inlineCode",{parentName:"a"},"SeriesOptionsMap")),"[",(0,n.kt)("inlineCode",{parentName:"p"},"TSeriesType"),"]",", ",(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/SeriesPartialOptionsMap"},(0,n.kt)("inlineCode",{parentName:"a"},"SeriesPartialOptionsMap")),"[",(0,n.kt)("inlineCode",{parentName:"p"},"TSeriesType"),"]",">"),(0,n.kt)("p",null,"Series to which the Primitive is attached."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"requestupdate"},"requestUpdate"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"requestUpdate"),": () => ",(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,n.kt)("p",null,"\u25b8 (): ",(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("p",null,"Request an update (redraw the chart)"),(0,n.kt)("h5",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"void")))}m.isMDXComponent=!0}}]);