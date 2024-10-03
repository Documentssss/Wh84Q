"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[126],{75413:function(e,a,t){t.d(a,{Z:function(){return i}});var n=t(94154),r=t(44194),l=t(55184);let i=e=>{var{as:a,onChange:t,children:i,delay:s=0,threshold:c=1,triggerOnce:o=!0}=e,m=(0,n.__rest)(e,["as","onChange","children","delay","threshold","triggerOnce"]);let{ref:d,isVisible:u}=(0,l.Z)({triggerOnce:o,threshold:c,delay:s});return(0,r.useEffect)(()=>{t&&t({isVisible:u})},[u]),r.createElement(a||"div",Object.assign({ref:d,onChange:t,"data-testid":"inview-container"},m),"function"==typeof i?i({isVisible:u,ref:d}):i)}},60196:function(e,a,t){t.d(a,{Z:function(){return f}});var n=t(94154),r=t(44194);let l=({discount:e,finalPrice:a,installment:t})=>{let{totalAmount:n=""}=t||{};return!!e&&parseFloat(a)<parseFloat(n)},i=({installment:e})=>{let{amount:a,quantity:t=0,totalAmount:n}=e||{};return!!(a&&t>1&&n)},s=({installment:e,paymentMethodDescription:a,finalPrice:t})=>{let{totalAmount:n=""}=e||{},r=!!(!n||parseFloat(t)<parseFloat(n));return!!(a||r)},c=({finalPrice:e,originalPrice:a})=>e!==a,o=(0,r.createContext)({}),m=({children:e,value:a})=>{let{price:t,discount:n=0,bestPrice:m,fullPrice:d,paymentMethodDescription:u,showDiscount:g,installment:v={}}=a,p=m||d||t;return r.createElement(o.Provider,{value:{price:{originalPrice:t,finalPrice:p},discount:n,installment:v,paymentMethodDescription:u,showOriginalPrice:c({finalPrice:p,originalPrice:t}),showInstallment:i({installment:v}),showDiscount:g||l({discount:n,finalPrice:p,installment:v}),showMethodDescription:s({installment:v,finalPrice:p})}},e)},d=()=>(0,r.useContext)(o);var u=t(20572),g={price:({className:e})=>(0,u.V)("grid","grid-cols-[min-content]","gap-x-3xsm","items-center","grid-areas-[discount_discount,original_original_,final_method,installment_installment]",e),original:({className:e})=>(0,u.V)("grid-in-[original]","text-on-surface-3 font-xsm-regular","m-[0]","text-left","line-through",e),installment:({className:e})=>(0,u.V)("grid-in-[installment]","text-on-surface-3 ","mt-2xsm","font-xsm-regular",e),description:({className:e})=>(0,u.V)("text-on-surface-2","grid-in-[method]","font-xsm-regular","mt-xsm",e),final:({className:e})=>(0,u.V)("text-on-surface-2","grid-in-[final]","font-2xlg-bold",e),discount:"grid-in-[discount] mb-2xsm",unavailable:({className:e})=>(0,u.V)("inline-block","rounded-sm","bg-surface-container-low","text-on-surface-4","font-sm-regular","px-sm","py-sm",e)},v=t(28352),p=t(95485);t(61764);let N=e=>{var{className:a}=e,t=(0,n.__rest)(e,["className"]);let{showMethodDescription:l,paymentMethodDescription:i}=d();return r.createElement(r.Fragment,null,l&&r.createElement("span",Object.assign({className:g.description({className:a}),"data-testid":"price-method"},t),i||"no PIX")," ")},h=e=>{var{children:a,className:t}=e,l=(0,n.__rest)(e,["children","className"]);let{price:i}=d();return(null==i?void 0:i.finalPrice)?r.createElement("div",Object.assign({className:g.price({className:t}),"data-testid":"price-default"},l),r.Children.count(a)?a:r.createElement(r.Fragment,null,r.createElement(f.Original,null),r.createElement(f.Final,null),r.createElement(N,null),r.createElement(f.Discount,null),r.createElement(f.Installment,null))):r.createElement(f.Unavailable,null)},f=e=>{var{children:a,price:t="",bestPrice:l="",fullPrice:i="",discount:s,installment:c,paymentMethodDescription:o,showDiscount:d,className:u}=e,g=(0,n.__rest)(e,["children","price","bestPrice","fullPrice","discount","installment","paymentMethodDescription","showDiscount","className"]);return r.createElement(m,{value:Object.assign({price:t,discount:s,bestPrice:l,fullPrice:i,installment:c,paymentMethodDescription:o,showDiscount:d},g)},r.createElement(h,Object.assign({className:u,children:a},g)))};f.Unavailable=({className:e})=>r.createElement("div",{"data-testid":"price-unavailable",className:"mt-md flex justify-center"},r.createElement("span",{className:g.unavailable({className:e})},"Xiii, j\xe1 foi tudo :(")),f.MethodDescription=N,f.Discount=e=>{var{className:a,discountLabel:t}=e,l=(0,n.__rest)(e,["className","discountLabel"]);let{showDiscount:i,discount:s}=d(),c=Number(s);return r.createElement(r.Fragment,null,i&&!!c&&r.createElement("div",{className:g.discount},r.createElement(p.Z,Object.assign({size:"medium",className:(0,u.V)("text-on-success-darker-inverted bg-green-100 font-2xsm-bold",a)},l),`${c}% ${t||"OFF"}`)))},f.Final=e=>{var{className:a}=e,t=(0,n.__rest)(e,["className"]);let{price:l}=d();return r.createElement("p",Object.assign({className:g.final({className:a}),"data-testid":"price-value"},t),(0,v.Z)({value:null==l?void 0:l.finalPrice}))},f.Installment=e=>{var{className:a}=e,t=(0,n.__rest)(e,["className"]);let{showInstallment:l,installment:i}=d();return r.createElement(r.Fragment,null,l&&i&&r.createElement("p",Object.assign({className:g.installment({className:a}),"data-testid":"price-installment"},t),null==i?void 0:i.quantity,"x de ",(0,v.Z)({value:null==i?void 0:i.amount})))},f.Original=e=>{var{className:a}=e,t=(0,n.__rest)(e,["className"]);let{showOriginalPrice:l,price:i}=d();return r.createElement(r.Fragment,null,l&&r.createElement("p",Object.assign({"data-testid":"price-original",className:g.original({className:a})},t),(0,v.Z)({value:null==i?void 0:i.originalPrice})))}},95485:function(e,a,t){t.d(a,{Z:function(){return i}});var n=t(44194);t(55979),t(79419);var r=t(97834);t(22286),t(88633);var l=t(61764);let i=({border:e,children:a,startIcon:t,endIcon:i,color:s,size:c,variant:o,className:m,onClick:d,"data-testid":u="tag"})=>n.createElement("div",{className:l.Z.tag({variant:o,size:c,color:s,className:m,border:e}),onClick:d,"data-testid":u},(0,r.Z)(t,{className:"font-xsm-bold","data-testid":"tag-start-icon"}),a,(0,r.Z)(i,{className:"font-xsm-bold","data-testid":"tag-end-icon"}))},61764:function(e,a,t){t.d(a,{Z:function(){return l}});var n=t(20572);let r=(0,t(57291).j)("tag",{variants:{variant:{lighter:null,darker:null,inverted:null},color:{primary:null,success:null,danger:null,warning:null},size:{small:"tag-sm",medium:null}},compoundVariants:[{variant:"lighter",color:"primary",className:"tag-lighter"},{variant:"lighter",color:"danger",className:"tag-danger-lighter"},{variant:"lighter",color:"success",className:"tag-success-lighter"},{variant:"lighter",color:"warning",className:"tag-warning-lighter"},{variant:"darker",color:"primary",className:"tag-primary"},{variant:"darker",color:"danger",className:"tag-danger"},{variant:"darker",color:"success",className:"tag-success"},{variant:"darker",color:"warning",className:"tag-warning"},{variant:"inverted",color:"primary",className:"tag-inverted"},{variant:"inverted",color:"danger",className:"tag-danger-inverted"},{variant:"inverted",color:"success",className:"tag-success-inverted"},{variant:"inverted",color:"warning",className:"tag-warning-inverted"}],defaultVariants:{variant:"darker",color:"primary",size:"medium"}});var l={tag:({className:e,size:a,color:t="primary",variant:l="darker",border:i=!1})=>(0,n.V)("small"===a&&"tag-sm",i&&"tag-border",r({variant:l,color:t}),e)}},28352:function(e,a,t){t.d(a,{Z:function(){return r}});let n={"pt-br":"BRL","en-US":"USD"},r=({value:e="",locale:a="pt-br"})=>new Intl.NumberFormat(a,{style:"currency",currency:n[a]}).format(e)}}]);
//# sourceMappingURL=126-189eefdf68f220f4.js.map