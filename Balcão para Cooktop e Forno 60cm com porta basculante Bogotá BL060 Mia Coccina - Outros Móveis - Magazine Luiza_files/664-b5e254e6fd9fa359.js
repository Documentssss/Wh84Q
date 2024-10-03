"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[664],{44471:function(e,t,a){a.d(t,{Z:function(){return u}});var r=a(94154),n=a(44194),i=a(12394),o=a(55979),l=a(20572);let u=e=>{var{id:t,label:a,icon:u,checked:s,disable:d,checkedIcon:c,disableRipple:f,onChange:m=()=>{},className:g}=e,p=(0,r.__rest)(e,["id","label","icon","checked","disable","checkedIcon","disableRipple","onChange","className"]);let b=t||(0,o.Z)(a),v=u&&c?i.b.custom:i.b.default,_=v===i.b.custom,h={[i.b.custom]:n.createElement(n.Fragment,null,u,c),[i.b.default]:n.createElement("i",{className:"mark","data-testid":"checkbox-icon"})};return n.createElement("div",Object.assign({className:(0,l.V)("checkbox-group","cursor-pointer",g)},p),n.createElement("input",{id:b,type:"checkbox",className:(0,l.V)("checkbox !z-10",_&&"transparent"),onChange:m,checked:s,disabled:d,"data-testid":"checkbox-input"}),!f&&n.createElement("span",{className:"ripple","data-testid":"checkbox-ripple"}),h[v],a&&n.createElement("label",{htmlFor:b,className:_?"padding-[0px] absolute z-0 m-[-1px] h-[1px] w-[1px] overflow-hidden border-none":"title","data-testid":"checkbox-title"},a))}},12394:function(e,t,a){var r,n;a.d(t,{b:function(){return r}}),(n=r||(r={})).custom="CUSTOM",n.default="DEFAULT"},67264:function(e,t,a){a.d(t,{Z:function(){return u}});var r=a(94154),n=a(44194),i=a(44471),o=a(20572);let l=(0,a(57291).j)("font-2xlg-bold text-on-surface-3",{variants:{background:{lowest:"bg-surface-container-lowest",lower:"bg-surface-container-lower"},variation:{default:null,square:"w-full h-full rounded-md",circle:"w-full h-full rounded-2xlg"},size:{default:"w-fit p-2xsm",square:"w-fit p-xsm",circle:"w-fit p-sm"},opacity:{default:null,transparency:"opacity-60"}},defaultVariants:{variation:"default",opacity:"default",size:"default"}});function u(e){var{background:t="lower",variation:a,opacity:u,id:s,className:d,checked:c,disableRipple:f,onChange:m}=e,g=(0,r.__rest)(e,["background","variation","opacity","id","className","checked","disableRipple","onChange"]);return n.createElement("div",Object.assign({className:(0,o.V)(l({size:a}),"relative flex items-center justify-center",d),"data-testid":"favorite-button-container"},g),n.createElement("div",{className:(0,o.V)(l({variation:a,opacity:u,background:t}),"absolute"),"data-testid":"favorite-button-background"}),n.createElement(i.Z,{id:s,checked:c,onChange:m,disableRipple:"square"===a||f,label:c?"Remover favorito":"Favoritar",icon:n.createElement("i",{className:"unchecked icon-favorite-border icon font-xlg-regular"}),checkedIcon:n.createElement("i",{className:"icon-favorite icon checked text-on-interaction-default-inverted font-xlg-regular"}),"data-testid":"favorite-button"}))}},21575:function(e,t,a){a.d(t,{Z:function(){return c}});var r=a(94154),n=a(44194);let i={fraction:.5,exact:1};var o=a(20572);let l=(e,t=i.fraction)=>Math.round(e/t)*t,u=({precisionRate:e,roundedScore:t,stars:a,readOnly:r})=>{var n;let l=Array.from({length:a},(e,t)=>t+1);return(e===i.fraction?(n=r?a=>{let r=a-e;if(r===t)return r}:t=>t-e,l.reduce((e,t)=>[...e,n&&n(t),t].filter(Boolean),[])):l).map(e=>({className:(0,o.V)("rating-item",Number(e)===e&&e%1!=0?"rating-half":"rating-full"),isChecked:t===e,current:e})).reverse()},s=(0,a(57291).j)("rating",{variants:{size:{large:"rating-lg",medium:"rating-md",small:"rating-sm"}},defaultVariants:{size:"medium"}}),d=({label:e})=>e?n.isValidElement(e)?e:n.createElement("span",{"data-testid":"rating-label",className:"pl-2xsm text-on-surface-3 font-2xsm-regular"},e):null,c=e=>{var{size:t,label:a,stars:c=5,score:f=0,precision:m="exact",readOnly:g=!1,className:p,onChange:b}=e,v=(0,r.__rest)(e,["size","label","stars","score","precision","readOnly","className","onChange"]);let _=(0,n.useId)(),h=i[m]||i.exact,y=l(f,h),P=u({precisionRate:h,roundedScore:y,stars:c,readOnly:g});if(!g){let e=e=>{let t=Number(e.target.value);b&&b(e,t)};return n.createElement("div",Object.assign({className:(0,o.V)("flex items-center",p)},v),n.createElement("form",{className:(0,o.V)(s({size:t})),"data-testid":"rating-form"},null==P?void 0:P.map(({className:t,current:a},r)=>{let i=`radio-${_}-${r}`;return n.createElement(n.Fragment,{key:"rating-".concat(a.toString())},n.createElement("input",{type:"radio",id:i,name:"rating",value:a,checked:y===a,onChange:e,"data-testid":"rating-input-".concat(a.toString())}),n.createElement("label",{htmlFor:i,title:`Adicionar ${a} estrelas`,className:(0,o.V)("cursor-pointer",t),"data-testid":"rating-label-".concat(a.toString())}))})),n.createElement(d,{label:a}))}return n.createElement("div",Object.assign({className:(0,o.V)("flex items-center",p)},v),n.createElement("ol",{className:(0,o.V)("no-hover",s({size:t})),"data-testid":"rating-list"},null==P?void 0:P.map(({isChecked:e,className:t,current:a})=>n.createElement("li",{key:"rating-".concat(a.toString()),className:(0,o.V)(t,e&&"checked"),"data-testid":"rating-li-".concat(a.toString()),"aria-label":`${a} estrelas`}))),n.createElement(d,{label:a}))}},74471:function(e,t,a){a.d(t,{Z:function(){return x}});var r=a(44194),n=a(94154),i=a(75413);a(55979),a(79419);var o=a(20572),l=a(27412);a(22286),a(88633);var u=a(28300),s=a(14574),d=a(95485);a(61764);var c=a(21575),f=a(60196),m=a(67264),g=a(26662);let p={small:"!w-[170px]",fit:"!w-fit",full:"!w-[100%]"},b=({className:e,size:t,isHorizontal:a})=>(0,o.V)(p[t]||p.small,e,"px-xsm py-sm",a?"rounded-lg":"rounded-md"),v=({isHorizontal:e})=>(0,o.V)(e&&"hidden"),_=({addSpacingOnTop:e,isHorizontal:t})=>(0,o.V)("relative",t?"h-[auto] rounded-lg basis-1/3":"h-[137px]",e&&"mt-xsm"),h=({isHorizontal:e})=>(0,o.V)(e&&"px-xsm basis-2/3",!e&&"pt-sm"),y={default:e=>{var{as:t="div",orientation:a="vertical",size:i="small",badge:p={},offer:y={},media:P={},price:O={},ads:j={},rating:F,tags:M=[],title:x,discount:I={},isOnWishlist:k=!1,className:N,onClickFavorite:C}=e,S=(0,n.__rest)(e,["as","orientation","size","badge","offer","media","price","ads","rating","tags","title","discount","isOnWishlist","className","onClickFavorite"]);let[E,w]=(0,r.useState)(k),D="horizontal"===a,V=!(0,l.Z)(P),Z=!(0,l.Z)(F),z=!(0,l.Z)(y),$=!(0,l.Z)(x),R=!(0,l.Z)(O),B=!(0,l.Z)(I),T=!(0,l.Z)(p),A=!(0,l.Z)(M),W=!(0,l.Z)(j),q=(0,n.__rest)(S,["customProps"]);return r.createElement(u.Z,Object.assign({as:t,variation:a,elevation:!1,className:b({isHorizontal:D,className:N,size:"horizontal"===a?"fit":i}),"data-testid":"product-card-container"},S.customProps,q),z&&r.createElement(u.Z.Header,{className:v({isHorizontal:D}),"data-testid":"product-card-header"},r.createElement(d.Z,Object.assign({endIcon:r.createElement("i",{className:"icon-check-magalu-indica icon font-xsm-regular"}),className:"font-2xsm-bold"},y))),V&&r.createElement("div",{className:_({addSpacingOnTop:!z&&!D,isHorizontal:D})},r.createElement("label",{className:"absolute right-[0] top-[0]","aria-label":"bot\xe3o de favorito"},r.createElement(m.Z,{className:"text-on-surface-5",background:"lowest",variation:"square",opacity:"transparency",disableRipple:!0,checked:E,onChange:e=>{w(t=>(C&&C(e,!t),!t))},onClick:e=>e.stopPropagation(),"data-testid":"product-card-favorite-button"})),r.createElement(u.Z.Media,Object.assign({draggable:!1,"data-testid":"product-card-media",width:"144",height:"137"},P,{className:(0,o.V)("h-[100%] w-[100%] rounded-md !object-contain",null==P?void 0:P.className)})),T&&r.createElement(g.Z,Object.assign({className:"absolute bottom-[0]",width:"60",height:"44","data-testid":"product-card-badge"},p))),r.createElement(u.Z.Content,{className:h({isHorizontal:D})},W&&(null==j?void 0:j.sponsored)&&r.createElement("p",{className:"mb-2xsm text-on-surface-4 font-2xsm-regular","data-testid":"product-card-sponsored"},"Patrocinado"),Z&&r.createElement(c.Z,Object.assign({},F,{readOnly:!0,precision:"fraction",size:"small","data-testid":"product-card-rating",className:"gap-2xsm"})),$&&r.createElement(s.Z,Object.assign({as:"h3",className:"mb-sm line-clamp-3 overflow-hidden break-words text-on-surface-3 !font-xsm-regular","data-testid":"product-card-title"},x)),B&&r.createElement(d.Z,Object.assign({size:"medium",className:"mb-2xsm bg-green-100 font-2xsm-bold","data-testid":"product-card-discount"},I)),R&&r.createElement(f.Z,Object.assign({},O,{"data-testid":"product-card-price"}),r.createElement(f.Z.Final,{className:"mb-2xsm text-on-surface-2 !font-md-bold","data-testid":"product-card-price-final"}),r.createElement(f.Z.MethodDescription,{className:"mb-2xsm mt-2xsm text-on-surface-3 !font-2xsm-regular","data-testid":"product-card-price-method"}),r.createElement(f.Z.Installment,{className:"text-on-surface-3 !font-2xsm-regular","data-testid":"product-card-price-installment"})),A&&r.createElement("ol",{className:"[&>*:first-child]:mt-xsm","data-testid":"product-card-tags"},null==M?void 0:M.map((e,t)=>{var{children:a,className:i}=e,l=(0,n.__rest)(e,["children","className"]);return r.createElement("li",{key:"product-tag-".concat(t.toString())},r.createElement(d.Z,Object.assign({size:"small",className:(0,o.V)("items-center text-brand-default font-2xsm-regular",i)},l),a))}))))}},P=e=>{var{display:t="default"}=e,a=(0,n.__rest)(e,["display"]);let i=y[t]||y.default;return r.createElement(i,Object.assign({},a))};var O=a(56850);let j=(e,t)=>{var{offer:a,rating:r,discount:i}=e,o=(0,n.__rest)(e,["offer","rating","discount"]);let l={};return l.key="showcase-product-card-".concat(t.toString()),(null==a?void 0:a.children)&&(l.offer={children:null==a?void 0:a.children,color:null==a?void 0:a.color,size:"medium"}),(null==r?void 0:r.label)&&(l.rating={label:null==r?void 0:r.label,score:null==r?void 0:r.score,color:"primary"}),(null==i?void 0:i.children)&&(l.discount={children:null==i?void 0:i.children,variant:"lighter",color:"success"}),Object.assign(Object.assign({},l),o)};var F={carousel:({items:e,onItemClick:t,onItemFavoriteClick:a,onItemView:o})=>r.createElement(O.Z,{gap:"8px",showArrowControls:!1,slidesPerView:2},null==e?void 0:e.map((e,l)=>{var{"data-product":u}=e,s=(0,n.__rest)(e,["data-product"]);return r.createElement(i.Z,{key:"showcase-carousel-item-".concat((null==u?void 0:u.id)||l.toString()),triggerOnce:!0,threshold:.5,onChange:({isVisible:e})=>{e&&o&&o(Object.assign(Object.assign({},u),{position:l+1}))},className:"pb-md"},r.createElement(P,Object.assign({as:"a",size:"full",display:"default",draggable:!1,className:"mb-md h-full",onClick:e=>{var a;return a=Object.assign(Object.assign({},u),{position:l+1}),void(t&&t(e,a))},onClickFavorite:(e,t)=>{var r;r=Object.assign(Object.assign({},u),{position:l+1}),a&&a(e,t,r)}},j(s,l),s.customProps||{})))})),list:({items:e,onItemClick:t,onItemView:a,onItemFavoriteClick:o})=>r.createElement("div",{className:"grid grid-cols-2 gap-xsm","data-testid":"showcase-list"},null==e?void 0:e.map((e,l)=>{var{"data-product":u}=e,s=(0,n.__rest)(e,["data-product"]);return r.createElement(i.Z,{key:"showcase-list-item-".concat((null==u?void 0:u.id)||l.toString()),triggerOnce:!0,threshold:.5,onChange:({isVisible:e})=>{e&&a&&a(Object.assign(Object.assign({},u),{position:l+1}))}},r.createElement(P,Object.assign({as:"a",size:"full",display:"default",className:"h-full",onClick:e=>{var a;return a=Object.assign(Object.assign({},u),{position:l+1}),void(t&&t(e,a))},onClickFavorite:(e,t)=>{var a;a=Object.assign(Object.assign({},u),{position:l+1}),o&&o(e,t,a)}},j(s,l),s.customProps||{})))})),betteroffer:({items:e,onItemClick:t,onItemView:a})=>{var n,i;if(!(null==e?void 0:e[0]))return null;let o=e[0],l=0===(null===(i=null===(n=o["data-product"])||void 0===n?void 0:n.shippingTag)||void 0===i?void 0:i.cost)?[{children:"Frete Gr\xe1tis",variant:"inverted"}]:[],{media:u,price:s,title:d}=o;return r.useEffect(()=>{a&&a(Object.assign(Object.assign({},o["data-product"]),{position:1}))},[]),r.createElement(P,{"data-testid":"showcase-betteroffer",as:"a",tags:l,orientation:"horizontal",media:Object.assign(Object.assign({},u),{width:"120",height:"120",className:"max-h-[120px]"}),title:d,price:s,onClick:e=>{var a;return a=Object.assign(Object.assign({},o["data-product"]),{position:1}),void(t&&t(e,a))}})}},M=a(87733);let x=({type:e,title:t,items:a,action:n,className:i,sponsored:o=!1,onItemClick:u,onItemView:d,onItemFavoriteClick:c})=>{if((0,l.Z)(a))return null;let f=F[e]||F.list;return r.createElement("div",{className:i,"data-testid":"showcase"},r.createElement("div",{className:"pb-sm pt-md"},t&&r.createElement(s.Z,{as:"h2",className:"text-on-surface-2 font-md-bold","data-testid":"showcase-title"},t),o&&r.createElement("p",{"data-testid":"sponsored-tag",className:"pt-xsm text-on-surface-4 font-2xsm-regular"},"Patrocinados")),r.createElement(f,{title:t,items:a,onItemClick:u,onItemView:d,onItemFavoriteClick:c}),!(0,l.Z)(n)&&r.createElement(M.Z,Object.assign({variant:"inverted",endIcon:"chevron-right",className:"mx-auto mt-xlg flex","data-testid":"showcase-action"},n),(null==n?void 0:n.children)||"Ver Mais"))}},15443:function(e,t,a){a.d(t,{Z:function(){return u}});var r=a(44194),n=a(27412),i=a(25466),o=a(18421);let l=(e={})=>Object.entries(e).reduce((e,[t,a])=>{let r="__typename"===t?0:a;return"cost"===t&&(r=0===a?"Frete Gr\xe1tis":0),r?[...e,{children:r,variant:"inverted"}]:e},[]),u=(e,t)=>(0,n.Z)(e)?[]:null==e?void 0:e.map(e=>{var a,n,u,s;let{id:d,title:c,image:f,price:m,installment:g,rating:p,shippingTag:b,path:v,ads:_,offerTags:h=[],badges:y=[],trackId:P="",campaignId:O=""}=e,j=(null==_?void 0:_.id)||void 0,F=null==y?void 0:y.slice(-1)[0];return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({"data-product":e,customProps:{"ads-click-event":j,"ads-view-event":j,"ads-impression-event":j,"data-brand":null===(u=e.brand)||void 0===u?void 0:u.label,redirect:e.url},ads:{sponsored:null==_?void 0:_.sponsored},title:{children:c},href:(0,i.Z)(v),media:{src:f},price:{price:null==m?void 0:m.bestPrice,installment:{amount:null==g?void 0:g.amount,paymentMethodDescription:null==g?void 0:g.paymentMethodDescription,quantity:null==g?void 0:g.quantity,totalAmount:null==g?void 0:g.totalAmount}}},(null==p?void 0:p.score)&&{rating:{label:null==p?void 0:p.count,score:null==p?void 0:p.score,color:"primary"}}),!!(n=null==m?void 0:m.discount)&&!!parseInt(n)&&{discount:{children:null===(s=parseInt(null==m?void 0:m.discount))||void 0===s?void 0:s.toString().concat("% OFF")}}),(null==h?void 0:h.includes("magalu_indica"))&&{offer:{children:"Magalu indica",color:"primary"}}),!!(null==F?void 0:F.imageUrl)&&{badge:{src:null==F?void 0:F.imageUrl,alt:null==F?void 0:F.text}}),{tags:[...(a=null==m?void 0:m.currency,(0,o.Z)(a)?[{children:"Compra Internacional",variant:"lighter",color:"primary",size:"small",className:"font-3xsm-medium gap-3xsm",startIcon:(0,r.createElement)("i",{className:"icon icon-compra-internacional"})}]:[]),...l(b)],isOnWishlist:!(!d||!t)&&t(d),id:d,trackId:P,campaignId:O})})},9901:function(e,t,a){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=(0,r(a(70390)).default)(`
  fragment meta on MetaCategory {
    canonical
    breadcrumbAlias
    description
    seoBlock
  }
`);t.default=n},64518:function(e,t,a){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=r(a(70390)),i=(0,n.default)`
  fragment linkList on ComponentPresentationLinkList {
    href
    value
    alt
  }
`;t.default=i},29376:function(e,t,a){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=r(a(70390)),i=(0,n.default)`
  fragment posts on PostItem {
    id
    title
    subtitle
    slug
    publishedAt
    updatedAt
    categoryId
    categorySlug
    categoryTitle
    image {
      alt
      urls {
        default
        thumbnail
        small
        medium
        large
      }
    }
  }
`;t.default=i},16724:function(e,t,a){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=r(a(70390)),i=r(a(29376)),o=(0,n.default)`
  fragment recommendations on BlogRecommendation {
    id
    title
    variation
    categoryId
    postIds
    link
    quantity
    blogCategoryId
    parentCategoryId
    theme {
      background
      card
    }
    posts {
      ...posts
    }
  }
  ${i.default}
`;t.default=o},57771:function(e,t,a){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=r(a(70390)),i=(0,n.default)`
  fragment seo on ComponentBlogSeo {
    title
    description
  }
`;t.default=i},77234:function(e,t,a){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=(0,r(a(70390)).default)(`
  fragment category on Category {
    id
    label
    title
    description
    meta {
      description
      seoBlock
      canonical
      titleAlias
    }
  }
`);t.default=n},18423:function(e,t,a){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=r(a(70390)),i=(0,n.default)`
  fragment pagination on Pagination {
    page
    pages
    records
    size
    start
  }
`;t.default=i},71148:function(e,t,a){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=(0,r(a(70390)).default)(`
 fragment ads on Ads {
    sponsored
    id
    label
  }
`);t.default=n},40399:function(e,t,a){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=(0,r(a(70390)).default)(`
 fragment attributes on Attribute {
    type
    label
    value
    current
    values
  }
`);t.default=n},3661:function(e,t,a){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=(0,r(a(70390)).default)(`
  fragment brand on Brand {
    label
    slug
  }
`);t.default=n},51992:function(e,t,a){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=(0,r(a(70390)).default)(`
  fragment category on ProductCategory {
    id
    name
  }
`);t.default=n},21766:function(e,t,a){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=(0,r(a(70390)).default)(`
  fragment geoLocTags on Tag {
    title
    icon
  }
`);t.default=n},20723:function(e,t,a){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=r(a(70390)),i=r(a(66214)),o=(0,n.default)`
  fragment productImportTaxes on ProductTax {
    freight {
      ...productImportTaxesValue
    }
    product {
      ...productImportTaxesValue
    }
    total {
      ...productImportTaxesValue
    }
  }
  ${i.default}
`;t.default=o},66214:function(e,t,a){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=r(a(70390)),i=(0,n.default)`
  fragment productImportTaxesValue on ImportTaxProduct {
    icmsValue
    importTaxValue
    iofValue
  }
`;t.default=i},46836:function(e,t,a){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=(0,r(a(70390)).default)(`
  fragment installment on Installment {
    paymentMethodId
    paymentMethodDescription
    quantity
    amount
    totalAmount
  }
`);t.default=n},39246:function(e,t,a){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=(0,r(a(70390)).default)(`
  fragment loyalty on Loyalty {
    value
    type
    attributes {
      color
      icon
    }
    label
    description
  }
`);t.default=n},68834:function(e,t,a){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=(0,r(a(70390)).default)(`
  fragment price on Price {
    paymentMethodDescription
    price
    fullPrice
    bestPrice
    discount
    currency
    exchangeRate
    idExchangeRate
    originalPriceForeign
  }
`);t.default=n},82498:function(e,t,a){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=(0,r(a(70390)).default)(`
  fragment rating on Rating {
    count
    score
  }
`);t.default=n},19992:function(e,t,a){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=(0,r(a(70390)).default)(`
  fragment general on RatingInformation {
    rating
    reviewCount
    commentCount
  }
`);t.default=n},564:function(e,t,a){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=(0,r(a(70390)).default)(`
  fragment reviewsByRating on ReviewsByRating {
    rating
    total
  }
`);t.default=n},4240:function(e,t,a){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=r(a(70390)),i=a(82234),o=(0,n.default)`
  fragment product on Product {
    id
    variationId
    title
    description
    image
    available
    url
    path
    reference
    offerTags
    price {
      paymentMethodDescription
      price
      fullPrice
      bestPrice
      discount
      currency
    }
    installment {
      paymentMethodDescription
      quantity
      amount
      totalAmount
    }
    rating {
      count
      score
    }
    badges {
      text
      imageUrl
      container
      position
      tooltip
    }
    seller {
      ...seller
    }
    brand {
      ...brand
    }
    category {
      ...category
    }
    subcategory {
      ...subcategory
    }
    attributes {
      ...attributes
    }
  }
  ${i.ProductWithSellerFragment}
  ${i.ProductBrandFragment}
  ${i.ProductCategoryFragment}
  ${i.ProductSubCategoryFragment}
  ${i.ProductAttributesFragment}
`;t.default=o},84482:function(e,t,a){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=(0,r(a(70390)).default)(`
  fragment shippingCost on BasicShippingCost {
    cost
    costDescription
  }
`);t.default=n},12094:function(e,t,a){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=(0,r(a(70390)).default)(`
  fragment subcategory on ProductCategory {
    id
    name
  }
`);t.default=n},13643:function(e,t,a){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=(0,r(a(70390)).default)(`
  fragment badges on Badge {
    text
    imageUrl
    container
    position
    tooltip
  }
`);t.default=n},46482:function(e,t,a){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=(0,r(a(70390)).default)(`
  fragment bundles on Bundle {
    id
    image
    price
    quantity
    reference
    title
    dimensions {
      ...dimensions
    }
    factsheet {
      ...factsheet
    }
  }
`);t.default=n},75159:function(e,t,a){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=(0,r(a(70390)).default)(`
  fragment dimensions on Dimension {
    height
    length
    weight
    width
  }`);t.default=n},58405:function(e,t,a){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=(0,r(a(70390)).default)(`
  fragment factsheet on FactSheet {
    displayName
    slug
    elements {
      keyName
      elements {
        keyName
        isHtml
        value
      }
    }
  }
`);t.default=n},50511:function(e,t,a){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=(0,r(a(70390)).default)(`
  fragment financialServices on FinancialService {
    id
    description
    offers {
      campaignId
      description
      id
      price
      treeId
      wageCompensation {
        amount
        percentage
      }
    }
  }
`);t.default=n},44772:function(e,t,a){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=(0,r(a(70390)).default)(`
  fragment media on Media {
    audios
    images
    podcasts
    videos
  }
`);t.default=n},48200:function(e,t,a){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=(0,r(a(70390)).default)(`
  fragment offers on Offer {
    sku
    price {
      paymentMethodDescription
      bestPrice
      fullPrice
      price
      currency
      discount
    }
    seller {
      ...seller
    }
  }
`);t.default=n},67309:function(e,t,a){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=(0,r(a(70390)).default)(`
    fragment paymentMethods on PaymentMethods {
        id
        installmentPlans {
            installment
            installmentAmount
            interest
            interestAmount
            totalAmount
            discount
        }
    }
`);t.default=n},89643:function(e,t,a){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=(0,r(a(70390)).default)(`
  fragment seller on Seller {
    id
    sku
    description
    category
    deliveryId
    deliveryDescription
    restrictions
    details {
      id
      legalName
      documentNumber
      shippingDocumentNumber
      score
      sellerSince
      totalSales
      deliveryRate {
        message
        status
      }
      address {
        address
        number
        complement
        district
        city
        state
        country
        zipcode
      }
    }
    tags {
      message
      type
      version
      action {
        type
        url
      }
    }
  }
`);t.default=n},45021:function(e,t,a){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=(0,r(a(70390)).default)(`
  fragment variations on Variation {
    id
    label
    type
    value
    image
    available
    path
  }
`);t.default=n},72978:function(e,t,a){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=(0,r(a(70390)).default)(`
  fragment items on Question {
    id
    question
    questionCreatedAt
    answer
    answerCreatedAt
  }
`);t.default=n},78770:function(e,t,a){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=(0,r(a(70390)).default)(`
  fragment pagination on QuestionPagination {
    page
    totalPages
  }
`);t.default=n},81513:function(e,t,a){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=(0,r(a(70390)).default)(`
  fragment sellerInfo on SellerInfoResponse {
    enabled
  }
`);t.default=n},18314:function(e,t,a){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=(0,r(a(70390)).default)(`
 fragment filters on FilterResponse {
    type
    slug
    label
    min
    max
    selectedMin
    selectedMax
    values {
      id
      slug
      label
      count
      selected
      type
      values {
        id
        slug
        label
        count
        selected
        parent {
          id
          slug
          label
          count
        }
        values {
          id
          slug
          label
          count
          selected
          type
        }
      }
    }
  }
`);t.default=n},53826:function(e,t,a){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=(0,r(a(70390)).default)(`
  fragment products on Product {
    id
    variationId
    title
    description
    image
    available
    position
    isBuyBox
    url
    path
    reference
    attributes {
      type
      label
      value
      current
      values
    }
    price {
      paymentMethodDescription
      price
      fullPrice
      bestPrice
      discount
    }
  }
`);t.default=n},6949:function(e,t,a){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=(0,r(a(70390)).default)(`
  fragment selection on Selection {
    id
    name
    description
  }
`);t.default=n},39477:function(e,t,a){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=r(a(70390)),i=(0,n.default)`
  fragment faq on ComponentPresentationFaq {
    answer: Answer
    question: Question
  }
`;t.default=i},14686:function(e,t,a){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=r(a(70390)),i=(0,n.default)`
  fragment meta on ComponentPresentationMeta {
    title
    description
    canonical
  }
`;t.default=i},93316:function(e,t,a){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=r(a(70390)),i=(0,n.default)`
  fragment pagination on ShowCasePagination {
    next
    previous
  }
`;t.default=i},82234:function(e,t,a){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.SeoMetaFragment=t.SeoFaqFragment=t.SearchSelectionFragment=t.SearchProductFragment=t.SearchFiltersFragment=t.QuestionsSellerInfoFragment=t.QuestionsPaginationFragment=t.QuestionsItemFragment=t.ShowcasePaginationFragment=t.ProductRecommendationFragment=t.ProductWithVariationsFragment=t.ProductWithSellerFragment=t.ProductWithPaymentMethodFragment=t.ProductWithOffersFragment=t.ProductWithMediaFragment=t.ProductWithFinancialServices=t.ProductWithFactSheetFragment=t.ProductWithDimensionFragment=t.ProductWithBundleFragment=t.ProductWithBadgeFragment=t.ProductSubCategoryFragment=t.ProductShippingCostFragment=t.ProductRatingReviewsByRatingFragment=t.ProductRatingGeneralFragment=t.ProductRatingFragment=t.ProductPriceFragment=t.ProductLoyaltyFragment=t.ProductInstallmentFragment=t.ProductImportTaxesValueFragment=t.ProductImportTaxesFragment=t.ProductGeoLocTags=t.ProductCategoryFragment=t.ProductBrandFragment=t.ProductAttributesFragment=t.ProductAdsFragment=t.PaginationFragment=t.CategoryFragment=t.BlogLinkListFragment=t.BlogSeoFragment=t.BlogRecommendationsFragment=t.BlogPostFragment=t.AllCategoriesMetaFragment=void 0;var n=a(9901);Object.defineProperty(t,"AllCategoriesMetaFragment",{enumerable:!0,get:function(){return r(n).default}});var i=a(29376);Object.defineProperty(t,"BlogPostFragment",{enumerable:!0,get:function(){return r(i).default}});var o=a(16724);Object.defineProperty(t,"BlogRecommendationsFragment",{enumerable:!0,get:function(){return r(o).default}});var l=a(57771);Object.defineProperty(t,"BlogSeoFragment",{enumerable:!0,get:function(){return r(l).default}});var u=a(64518);Object.defineProperty(t,"BlogLinkListFragment",{enumerable:!0,get:function(){return r(u).default}});var s=a(77234);Object.defineProperty(t,"CategoryFragment",{enumerable:!0,get:function(){return r(s).default}});var d=a(18423);Object.defineProperty(t,"PaginationFragment",{enumerable:!0,get:function(){return r(d).default}});var c=a(71148);Object.defineProperty(t,"ProductAdsFragment",{enumerable:!0,get:function(){return r(c).default}});var f=a(40399);Object.defineProperty(t,"ProductAttributesFragment",{enumerable:!0,get:function(){return r(f).default}});var m=a(3661);Object.defineProperty(t,"ProductBrandFragment",{enumerable:!0,get:function(){return r(m).default}});var g=a(51992);Object.defineProperty(t,"ProductCategoryFragment",{enumerable:!0,get:function(){return r(g).default}});var p=a(21766);Object.defineProperty(t,"ProductGeoLocTags",{enumerable:!0,get:function(){return r(p).default}});var b=a(20723);Object.defineProperty(t,"ProductImportTaxesFragment",{enumerable:!0,get:function(){return r(b).default}});var v=a(66214);Object.defineProperty(t,"ProductImportTaxesValueFragment",{enumerable:!0,get:function(){return r(v).default}});var _=a(46836);Object.defineProperty(t,"ProductInstallmentFragment",{enumerable:!0,get:function(){return r(_).default}});var h=a(39246);Object.defineProperty(t,"ProductLoyaltyFragment",{enumerable:!0,get:function(){return r(h).default}});var y=a(68834);Object.defineProperty(t,"ProductPriceFragment",{enumerable:!0,get:function(){return r(y).default}});var P=a(82498);Object.defineProperty(t,"ProductRatingFragment",{enumerable:!0,get:function(){return r(P).default}});var O=a(19992);Object.defineProperty(t,"ProductRatingGeneralFragment",{enumerable:!0,get:function(){return r(O).default}});var j=a(564);Object.defineProperty(t,"ProductRatingReviewsByRatingFragment",{enumerable:!0,get:function(){return r(j).default}});var F=a(84482);Object.defineProperty(t,"ProductShippingCostFragment",{enumerable:!0,get:function(){return r(F).default}});var M=a(12094);Object.defineProperty(t,"ProductSubCategoryFragment",{enumerable:!0,get:function(){return r(M).default}});var x=a(13643);Object.defineProperty(t,"ProductWithBadgeFragment",{enumerable:!0,get:function(){return r(x).default}});var I=a(46482);Object.defineProperty(t,"ProductWithBundleFragment",{enumerable:!0,get:function(){return r(I).default}});var k=a(75159);Object.defineProperty(t,"ProductWithDimensionFragment",{enumerable:!0,get:function(){return r(k).default}});var N=a(58405);Object.defineProperty(t,"ProductWithFactSheetFragment",{enumerable:!0,get:function(){return r(N).default}});var C=a(50511);Object.defineProperty(t,"ProductWithFinancialServices",{enumerable:!0,get:function(){return r(C).default}});var S=a(44772);Object.defineProperty(t,"ProductWithMediaFragment",{enumerable:!0,get:function(){return r(S).default}});var E=a(48200);Object.defineProperty(t,"ProductWithOffersFragment",{enumerable:!0,get:function(){return r(E).default}});var w=a(67309);Object.defineProperty(t,"ProductWithPaymentMethodFragment",{enumerable:!0,get:function(){return r(w).default}});var D=a(89643);Object.defineProperty(t,"ProductWithSellerFragment",{enumerable:!0,get:function(){return r(D).default}});var V=a(45021);Object.defineProperty(t,"ProductWithVariationsFragment",{enumerable:!0,get:function(){return r(V).default}});var Z=a(4240);Object.defineProperty(t,"ProductRecommendationFragment",{enumerable:!0,get:function(){return r(Z).default}});var z=a(93316);Object.defineProperty(t,"ShowcasePaginationFragment",{enumerable:!0,get:function(){return r(z).default}});var $=a(72978);Object.defineProperty(t,"QuestionsItemFragment",{enumerable:!0,get:function(){return r($).default}});var R=a(78770);Object.defineProperty(t,"QuestionsPaginationFragment",{enumerable:!0,get:function(){return r(R).default}});var B=a(81513);Object.defineProperty(t,"QuestionsSellerInfoFragment",{enumerable:!0,get:function(){return r(B).default}});var T=a(18314);Object.defineProperty(t,"SearchFiltersFragment",{enumerable:!0,get:function(){return r(T).default}});var A=a(53826);Object.defineProperty(t,"SearchProductFragment",{enumerable:!0,get:function(){return r(A).default}});var W=a(6949);Object.defineProperty(t,"SearchSelectionFragment",{enumerable:!0,get:function(){return r(W).default}});var q=a(39477);Object.defineProperty(t,"SeoFaqFragment",{enumerable:!0,get:function(){return r(q).default}});var L=a(14686);Object.defineProperty(t,"SeoMetaFragment",{enumerable:!0,get:function(){return r(L).default}})},7967:function(e,t,a){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=r(a(70390)),i=r(a(4240)),o=r(a(93316)),l=(0,n.default)`
  query showcaseQuery(
    $showcaseId: String
    $customerId: String
    $placeId: String
    $pageId: String
    $partnerId: String
    $pmdPromoter: String
    $storeId: String
    $productId: String
    $filters: [FilterInput]
    $includePagination: Boolean = true
    $toggleWishlist: Boolean = true
    $zipcode: String
  ) {
    recommendation(
      recommendationRequest: {
        customerId: $customerId
        pageId: $pageId
        placeId: $placeId
        productId: $productId
        metadata: {
          partnerId: $partnerId
          loyaltyParams: { pmdPromoter: $pmdPromoter, storeId: $storeId }
        }
        filters: $filters
        searchRequest: { location: { zipCode: $zipcode } }
      }
    ) {
      dynamic(showcaseId: $showcaseId) {
        id
        title
        type
        designTokenId
        products {
          ...product
          isOnWishlist @include(if: $toggleWishlist)
          shippingTag {
            cost
            time
            complement
          }
        }
        highlight {
          ...product
          shippingTag {
            cost
            time
            complement
          }
        }
        button {
          label
        }
        pagination {
          ...pagination @include(if: $includePagination)
        }
      }
    }
  }
  ${i.default}
  ${o.default}
`;t.default=l}}]);
//# sourceMappingURL=664-b5e254e6fd9fa359.js.map