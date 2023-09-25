var _=Object.defineProperty;var f=(o,t,s)=>t in o?_(o,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[t]=s;var u=(o,t,s)=>(f(o,typeof t!="symbol"?t+"":t,s),s);import{T as B,C as v}from"./lightweight-charts.production-52eb3ff2.js";import{a as x,p as b}from"./positions-0a54307c.js";import{m as w}from"./sample-data-c7d89ab8.js";import{C}from"./highlight-bar-crosshair-62a63e1f.js";const P={...B,colors:["#2962FF","#E1575A","#F28E2C","rgb(164, 89, 209)","rgb(27, 156, 133)"]};class R{constructor(){u(this,"_data",null);u(this,"_options",null)}draw(t,s){t.useBitmapCoordinateSpace(n=>this._drawImpl(n,s))}update(t,s){this._data=t,this._options=s}_drawImpl(t,s){if(this._data===null||this._data.bars.length===0||this._data.visibleRange===null||this._options===null)return;const n=this._options,p=this._data.barSpacing,m=this._data.bars.map(i=>{const l=i.originalData.values.length,a=p/(l+1),h=a/2+i.x-p/2+a/2;return{singleBarWidth:a,singleBars:i.originalData.values.map((e,r)=>({y:s(e)??0,color:n.colors[r%n.colors.length],x:h+r*a}))}}),g=s(0)??0;t.context.save();for(let i=this._data.visibleRange.from;i<this._data.visibleRange.to;i++){const l=m[i];let a;l.singleBars.forEach(c=>{const h=x(g,c.y,t.verticalPixelRatio),e=b(c.x,t.horizontalPixelRatio,l.singleBarWidth);t.context.beginPath(),t.context.fillStyle=c.color;const r=a?e.position-a:0;t.context.fillRect(e.position-r,h.position,e.length+r,h.length),a=e.position+e.length})}t.context.restore()}}class S{constructor(){u(this,"_renderer");this._renderer=new R}priceValueBuilder(t){return[0,...t.values]}isWhitespace(t){var s;return!((s=t.values)!=null&&s.length)}renderer(){return this._renderer}update(t,s){this._renderer.update(t,s)}defaultOptions(){return P}}const y=window.chart=v("chart",{autoSize:!0,timeScale:{barSpacing:16,minBarSpacing:8}}),D=new S,d=y.addCustomSeries(D,{color:"black"}),W=w(3,200,20);d.setData(W);d.attachPrimitive(new C({color:"rgba(0, 100, 200, 0.2)"}));
