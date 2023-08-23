"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2958],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(a),f=r,u=m["".concat(p,".").concat(f)]||m[f]||d[f]||i;return a?n.createElement(u,o(o({ref:t},s),{},{components:a})):n.createElement(u,o({ref:t},s))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},9216:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const i={id:"LocalizationOptions",title:"Interface: LocalizationOptions<HorzScaleItem>",sidebar_label:"LocalizationOptions",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},o=void 0,l={unversionedId:"api/interfaces/LocalizationOptions",id:"api/interfaces/LocalizationOptions",title:"Interface: LocalizationOptions<HorzScaleItem>",description:"Represents options for formatting dates, times, and prices according to a locale.",source:"@site/docs/api/interfaces/LocalizationOptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/LocalizationOptions",permalink:"/lightweight-charts/docs/next/api/interfaces/LocalizationOptions",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"LocalizationOptions",title:"Interface: LocalizationOptions<HorzScaleItem>",sidebar_label:"LocalizationOptions",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},p={},c=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"timeFormatter",id:"timeformatter",level:3},{value:"dateFormat",id:"dateformat",level:3},{value:"locale",id:"locale",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"priceFormatter",id:"priceformatter",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"percentageFormatter",id:"percentageformatter",level:3},{value:"Inherited from",id:"inherited-from-2",level:4}],s={toc:c},m="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Represents options for formatting dates, times, and prices according to a locale."),(0,r.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"HorzScaleItem"))))),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/LocalizationOptionsBase"},(0,r.kt)("inlineCode",{parentName:"a"},"LocalizationOptionsBase"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"LocalizationOptions"))))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"timeformatter"},"timeFormatter"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"timeFormatter"),": ",(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/#timeformatterfn"},(0,r.kt)("inlineCode",{parentName:"a"},"TimeFormatterFn")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"HorzScaleItem"),">"),(0,r.kt)("p",null,"Override formatting of the time scale crosshair label."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"undefined")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"dateformat"},"dateFormat"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"dateFormat"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"Date formatting string."),(0,r.kt)("p",null,"Can contain ",(0,r.kt)("inlineCode",{parentName:"p"},"yyyy"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"yy"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"MMMM"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"MMM"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"MM")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"dd")," literals which will be replaced with corresponding date's value."),(0,r.kt)("p",null,"Ignored if ",(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/LocalizationOptions#timeformatter"},"timeFormatter")," has been specified."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"'dd MMM \\'yy'")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"locale"},"locale"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"locale"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"Current locale used to format dates. Uses the browser's language settings by default."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"See"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation"},"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"navigator.language")),(0,r.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/LocalizationOptionsBase"},"LocalizationOptionsBase"),".",(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/LocalizationOptionsBase#locale"},"locale")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"priceformatter"},"priceFormatter"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"priceFormatter"),": ",(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/#priceformatterfn"},(0,r.kt)("inlineCode",{parentName:"a"},"PriceFormatterFn"))),(0,r.kt)("p",null,"Override formatting of the price scale tick marks, labels and crosshair labels. Can be used for cases that can't be covered with built-in price formats."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"See"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/PriceFormatCustom"},"PriceFormatCustom")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"undefined")),(0,r.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/LocalizationOptionsBase"},"LocalizationOptionsBase"),".",(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/LocalizationOptionsBase#priceformatter"},"priceFormatter")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"percentageformatter"},"percentageFormatter"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"percentageFormatter"),": ",(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/#percentageformatterfn"},(0,r.kt)("inlineCode",{parentName:"a"},"PercentageFormatterFn"))),(0,r.kt)("p",null,"Override formatting of the percentage scale tick marks, labels and crosshair labels. Can be used for cases that can't be covered with built-in percentage format."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"undefined")),(0,r.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/LocalizationOptionsBase"},"LocalizationOptionsBase"),".",(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/LocalizationOptionsBase#percentageformatter"},"percentageFormatter")))}d.isMDXComponent=!0}}]);