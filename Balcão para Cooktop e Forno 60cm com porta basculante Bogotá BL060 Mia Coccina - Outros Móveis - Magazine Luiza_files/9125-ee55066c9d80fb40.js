"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9125],{67546:function(a,b,c){c.d(b,{Z:function(){return l}});var d=c(7896),e=c(59740),f=c(2784),g=c(80001),h=c(25610),i=c(89382),j=["title","data"];function k(a){var b,c=a.static,i=c.title,k=c.data,l=void 0===k?[]:k,m=(0,e.Z)(c,j),n=null==(b=Array.isArray(l)?l:[])?void 0:b.map(function(a){var b=a.Answer,c=a.Question;return{answer:b,question:c}});return f.createElement(f.Fragment,null,i&&f.createElement(h.Z,{"data-testid":"faq-title",color:"base",as:"h2",fontSize:5,fontWeight:"bold",lineHeight:"display",m:"0 8px 12px"},i),f.createElement(g.Z,(0,d.Z)({faq:n},m)))}k.defaultProps={data:{},static:{title:""}},k.ssr=!0;var l=(0,i.Z)(k)},59106:function(a,b,c){c.d(b,{Z:function(){return p}});var d,e=c(7896),f=c(2784),g=c(90713),h=c(89382),i=c(79999),j=c(87333),k=c(71171),l=c(99673),m=c(84546),n=(0,l.ZP)(m.Z).attrs(function(a){return(0,e.Z)({},a)})(d||(d=(0,k.Z)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n"]))),o=function(a){var b=a.data,c=a.structure,d=a.static,h=(null==b?void 0:b.search)||{},k=h.fastFilters;if(!k)return null;var l=(0,j.Np)().publish,m=d.itemHeight,o=d.itemWidth,p=d.desktopMode,q=(0,i.U8)({customCategoryFilter:!1,data:b,filters:k,query:{},removeFilters:[],structure:c}),r=function(a,b){a.preventDefault(),l("productlist:fastFilter:click",(0,e.Z)({},b,{custom:!1})),(0,i.dY)({path:null==b?void 0:b.href,spa:!0})},s=function(a){var b,c,d;l("productlist:fastFilter:view",{custom:!1,eventLabel:null==(b=a.filters.attributeFilters[0])?void 0:null==(c=b.values)?void 0:null==(d=c.flatMap(function(a,b){return"".concat(b+1,"\xb0").concat(a.label,":").concat(a.slug)}))?void 0:d.join(";")})};return f.createElement(f.Fragment,null,k&&f.createElement(n,null,f.createElement(g.Z,{filters:q,onItemClick:r,onView:s,desktopMode:p,itemHeight:m,itemWidth:o})))};o.displayName="FastFilters",o.defaultProps={data:{},static:{},structure:{}},o.ssr=!0;var p=(0,h.Z)(o)},20958:function(a,b,c){c.r(b),c.d(b,{default:function(){return k}});var d=c(85942),e=c(2784),f=c(63486),g=c(79999),h=c(87333),i=c(89382),j=function(a){var b=a.static,c=a.data,i=a.structure,j=b||{},k=j.hasBorder,l=j.scrollOff,m=j.promotionalOnly,n=(null==c?void 0:c.search)||{},o=n.filters,p=null==o?void 0:o.find(g.wz),q=null==o?void 0:o.find(g.Ir),r=(null==p?void 0:p.values)||[],s=(null==q?void 0:q.values)||[],t=i.query,u=(0,h.Np)(),v=u.publish,w=m?(0,d.Z)(s):[].concat((0,d.Z)(s),(0,d.Z)(r)),x=null==w?void 0:w.filter(function(a){var b;return null==a?void 0:null==(b=a.position)?void 0:b.includes("top")}),y=null==x?void 0:x.map(function(a){var b=a.label,c=a.type,d=a.selected,e=a.slug;return{href:(0,g.P2)({query:t,selected:d,structure:i,type:c,unique:!0,value:e}),label:b,selected:d,slug:e}}),z=function(a){var b=a.href,c=a.slug,d=a.selected;v("delivery:filter:".concat(d?"selected":"clear"),{eventLabel:c,structure:i}),(0,g.dY)({path:b,spa:!0})};return e.createElement(e.Fragment,null,y.length>0&&e.createElement(f.Z,{filters:y,onChange:z,hasBorder:k,scrollOff:l}))};j.displayName="FilterDelivery",j.defaultProps={data:{},static:{},structure:{}};var k=(0,i.Z)(j)}}])
//# sourceMappingURL=9125-ee55066c9d80fb40.js.map