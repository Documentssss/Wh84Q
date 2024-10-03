"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9375],{38825:function(a,b,c){c.d(b,{Z:function(){return o}});var d=c(7896),e=c(31461),f=c(2784),g=c(99673),h=c(34490),i=c(82753),j=c(87043);let k=(0,g.ZP)(j.Yd)``,l=(0,g.ZP)(h.Xdw).attrs(a=>Object.assign({color:"#db44a7"},a))`
  width: ${({width:a})=>`${a}px`};
  height: ${({height:a})=>`${a}px`};

  animation: ${i.az} 0.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
`,m=(0,g.ZP)(h.Xdw).attrs(a=>Object.assign({color:"transparent",stroke:"darkGray"},a))`
  width: ${({width:a})=>`${a}px`};
  height: ${({height:a})=>`${a}px`};

  animation: ${i.az} 0.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
`;function n(a){let{active:b,onClick:c,width:g,height:h}=a,i=(0,e.Z)(a,["active","onClick","width","height"]);return f.createElement(k,(0,d.Z)({"data-testid":"add-wishlist-button",onClick:c},i),b?f.createElement(l,{"data-testid":"filled-icon",width:g,height:h}):f.createElement(m,{"data-testid":"empty-icon",width:g,height:h}))}n.defaultProps={active:!1,width:20,height:20};var o=n},33309:function(a,b,c){c.d(b,{V:function(){return n}});var d=c(2784),e=c(66762),f=c(99673),g=c(87043);let h=f.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,i=(0,f.ZP)(g.xv)`
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 10px;
`,j=(0,f.ZP)(g.xv)`
  margin-bottom: 20px;
  font-size: 14px;
`,k=(0,f.ZP)(g.zx)`
  font-size: 12px;
  text-transform: uppercase;
`;var l=function({title:a,message:b,showDialog:c,onClickOutside:f}){return d.createElement(e.Z,{type:"alert",position:"center",showClose:!1,visible:c,onClickOutside:f,portal:!0},d.createElement(h,null,d.createElement(i,null,a),d.createElement(j,null,b),d.createElement(k,{full:!0,onClick:f},"Entendi")))};let m=()=>{let[a,b]=(0,d.useState)(""),[c,e]=(0,d.useState)(""),[f,g]=(0,d.useState)(!1),h=({title:a="Aten\xe7\xe3o",message:c})=>{b(a),e(c),g(!0)},i=()=>d.createElement(d.Fragment,null,f&&d.createElement(l,{title:a,message:c,showDialog:f,onClickOutside:()=>g(!1),width:"300px"}));return{showAlertMessage:h,Alert:i}};var n=m},52337:function(a,b,c){c.d(b,{Z:function(){return m}});var d=c(2784),e=c(34490),f=c(99673),g=c(91489),h=c(84546),i=c(63825);let j=(0,f.ZP)(h.Z)`
  width: 100%;
  background: ${a=>(0,g.UX)(`${a.intent}.base`)(a)};
`,k=(0,f.ZP)(i.Z)`
  display: flex;
  align-items: center;
  padding: 10px;
  gap: ${a=>(0,g.R)("space.2")(a)}px;
  font-size: ${a=>(0,g.R)("fontSizes.1")(a)}px;
  color: ${a=>(0,g.UX)(`${a.intent}.text`)(a)};
`;function l({message:a,intent:b,icon:c,styleContainer:f,styleMessage:g}){let h=a=>"string"!=typeof a?c:d.createElement(e.JO$,{color:(null==g?void 0:g.color)||`alert.${b}.text`,name:a,"data-testid":"alert-icon"}),i=a=>{let b=(null==a?void 0:a.icon)||c;return d.createElement(d.Fragment,null,b&&h(b),"string"==typeof a?a:(null==a?void 0:a.text)||a)};return d.createElement(j,{intent:b,"data-testid":"alert-container",style:f},Array.isArray(a)?a.map((a,c)=>d.createElement(k,{key:`alert-message-${c}`,intent:b,"data-testid":"alert-text",style:g},i(a))):d.createElement(k,{intent:b,"data-testid":"alert-text",style:g},i(a)))}l.defaultProps={message:"",intent:"info",icon:null,styleContainer:{},styleMessage:{}};var m=l},23778:function(a,b,c){c.d(b,{Z:function(){return j}});var d=c(7896),e=c(2784),f=c(82753),g=c(34014),h=c(7069);let i=({attribute:a,variations:b,onChange:c,alignment:i})=>{var j;return e.createElement(g.Z,(0,d.Z)({},a,{alignment:i}),null==a?void 0:null==(j=a.values)?void 0:j.map((d,g)=>{let i=(0,f.KF)(b,d);return e.createElement(h.Z,{key:`${d}-${g}`,value:d,type:null==a?void 0:a.type,checked:(null==a?void 0:a.selected)&&(null==a?void 0:a.current)===d,disabled:!(null!=i&&i.isAvailable)&&!(null!=i&&i.available),onChange:c},d)}))};i.defaultProps={attribute:{},variations:[],alignment:""};var j=i},34014:function(a,b,c){c.d(b,{Z:function(){return o}});var d=c(2784),e=c(34490),f=c(31461),g=c(99673),h=c(91489),i=c(19527);let j={start:"left",end:"right",center:"center"},k=g.ZP.div`
  position: relative;
`,l=g.ZP.div`
  width: 100%;
  color: ${(0,h.uu)("attributeLabel")};
  text-align: ${({bordered:a,alignment:b})=>a?"left":j[b]};
  margin-top: 8px;
  margin-bottom: 8px;
  ${a=>{let{bordered:b}=a,c=(0,f.Z)(a,["bordered"]);return b&&g.iv`
      display: flex;
      justify-content: space-between;
      padding: 15px;
      background-color: ${(0,h.dF)("white")(c)};
      border-radius: 6px;
      border-width: 1px;
      border-style: solid;
      border-color: ${(0,h.kJ)("light")(c)};

      ${(0,h.aK)("large")} {
        cursor: pointer;
      }
    `}}

  ${(0,h.aK)("large")} {
    svg {
      transform: rotate(90deg);
    }
  }
`,m=(0,g.ZP)(i.Z).attrs(({alignment:a})=>({justifyContent:a,columnGap:[2,3],rowGap:2}))`
  flex-flow: row wrap;
  ${({smoothable:a})=>a&&g.iv`
      overflow: hidden;
      height: 105px;
    `};
`,n=d.forwardRef(({children:a,label:b,current:c,selected:f,bordered:g,onClick:h,onBlur:i,alignment:j,smoothable:n,showTitle:o},p)=>d.createElement(k,{ref:p,onBlur:i,tabIndex:1,"data-testid":"attribute-container"},o?d.createElement(l,{bordered:g,alignment:j,onClick:h,"data-testid":"attribute-label"},f?d.createElement("span",null,b,": ",d.createElement("strong",null,c)):`Selecionar ${b}`,g&&d.createElement(e.olP,{width:8,height:12})):null,d.createElement(m,{alignment:j,smoothable:n},a)));n.defaultProps={label:"",current:"",selected:!1,bordered:!1,alignment:"center",smoothable:!1,showTitle:!0},n.displayName="AttributeBase";var o=n},5086:function(a,b,c){c.d(b,{Z:function(){return s}});var d=c(7896),e=c(2784),f=c(34490),g=c(82753),h=c(19527),i=c(7029),j=c(34014),k=c(7069),l=c(99673),m=c(91489);let n=(0,l.ZP)(h.Z).attrs(a=>Object.assign({},a))`
  ${({shouldHover:a})=>a&&l.iv`
      &:hover {
        border-color: ${(0,m.dF)("primary")};
      }
    `}
`,o=({onClick:a,show:b})=>b&&e.createElement(h.Z,{"data-testid":"attribute-color-more",position:"absolute",justifyContent:"center",background:"linear-gradient(0deg, #ffffff, transparent 80%)",color:"text.primary",fontWeight:"bold",cursor:"pointer",width:1,bottom:0,height:36,padding:1,onClick:a},"ver mais cores"),p=({attributesLength:a,onClick:b,show:c,style:f})=>c&&e.createElement(n,(0,d.Z)({"data-testid":"attribute-color-more",fontSize:4,borderRadius:"default",alignItems:"center",justifyContent:"center",cursor:"pointer",borderWidth:1,borderColor:"#e5e5e5",borderStyle:"solid",onClick:b},f),"+ ",a),q={smooth:o,button:p},r=({attribute:a,variations:b,onChange:c,onVariationClick:h,title:l,alignment:m,minLength:n,variant:o,showTitle:p,style:r})=>{let s=["smooth","button"].includes(o)?o:"smooth",t=null==q?void 0:q[s],[u,v]=(0,e.useState)("smooth"===s),[w,x]=(0,e.useState)("button"===s),y=(0,e.useMemo)(()=>{let c=(0,g.hY)(a)(b),d=c.reduce((c,d)=>[...c,Object.assign({},(0,g.KF)(b,d),{selected:(null==a?void 0:a.selected)&&(null==a?void 0:a.current)===d})],[]);return(0,g.gf)(d).map(a=>a.value)},[]),z=(0,e.useMemo)(()=>y.length>n,[]),[A,B]=(0,e.useState)(()=>y.length>n&&"button"===s?y.slice(0,n-1):y),C=()=>u?v(!u):(x(!w),B(y));return e.createElement(j.Z,(0,d.Z)({},a,{smoothable:z&&u,alignment:m,showTitle:p}),null==A?void 0:A.map((d,j)=>{let{image:m,path:n}=(0,g.KF)(b,d)||{},o=(0,g.lm)(b,d);return e.createElement(k.Z,{key:`${d}-${j}`,value:d,type:a.type,path:n,checked:a.selected&&a.current===d,disabled:!o,onChange:c,onVariationClick:h,style:r},m?e.createElement(i.Z,{alt:`${l} ${d}`,title:d,src:m,width:50,height:50}):e.createElement(f.JO$,{name:"Camera",width:29,height:25,color:"lightGray"}))}),z&&e.createElement(t,{show:u||w,attributesLength:a.values.length-(n-1),style:r,onClick:p?C:c}))};r.defaultProps={attribute:{},disabled:!1,variations:[],title:"",alignment:"",minLength:5,variant:"smooth",showTitle:!0,onVariationClick:null,style:{width:"70px",height:"70px",bg:"background.base",fontWeight:"bold",color:"text.base"}};var s=r},7069:function(a,b,c){c.d(b,{Z:function(){return m}});var d=c(7896),e=c(31461),f=c(2784),g=c(19527),h=c(99673),i=c(91489);let j=h.ZP.input`
  display: none;

  &:checked ~ label {
    background-color: ${(0,i.dF)("primary")};
    border-color: ${(0,i.dF)("primary")};
    color: ${(0,i.uu)("white")};
    cursor: default;
  }

  &:disabled ~ label {
    background-color: ${(0,i.dF)("white")};
    color: ${(0,i.uu)("light")};
    cursor: not-allowed;

    img {
      filter: grayscale(1);
      opacity: 0.2;
    }
  }

  &[name='color'] {
    & ~ label {
      background-color: ${(0,i.dF)("white")};
      height: ${({height:a})=>`${a}`};
      width: ${({width:a})=>`${a}`};

      & img {
        width: 57px;
        height: 100%;
      }

      &:hover {
        border-color: ${(0,i.dF)("primary")};
      }
    }

    &:checked ~ label {
      border-width: 2px;
    }
  }
`,k=h.ZP.div`
  position: relative;
  display: inline-flex;

  ${(0,i.aK)("large")} {
    &:first-child {
      margin-left: 0;

      label {
        ${({type:a})=>"volume"===a&&"border-top-width: 0px"};
      }
    }
  }
`,l=a=>{let{checked:b,disabled:c,type:h,value:i,children:l,onChange:m,style:n,path:o,onVariationClick:p}=a,q=(0,e.Z)(a,["checked","disabled","type","value","children","onChange","style","path","onVariationClick"]);return f.createElement(k,{type:h,onClick:a=>p?p(a,{value:i,type:h,path:o}):null},f.createElement(j,(0,d.Z)({},q,{"data-testid":"attribute-input",type:"radio",name:h,value:i,id:`${h}-${i}`,checked:b,disabled:c,onChange:a=>m(a,{value:i,type:h}),height:(null==n?void 0:n.height)||"70px",width:(null==n?void 0:n.width)||"70px"})),f.createElement(g.Z,{as:"label","data-testid":"attribute-item",borderWidth:1,borderColor:"whisper",borderStyle:"solid",borderRadius:"default",padding:2,color:"text.base",fontSize:2,fontWeight:"medium",alignItems:"center",justifyContent:"center",cursor:"pointer",htmlFor:`${h}-${i}`},l))};var m=l},2575:function(a,b,c){c.d(b,{Z:function(){return A}});var d=c(7896),e=c(2784),f=c(34014),g=c(98047),h=c(99673),i=c(91489),j=c(34490),k=c(82753),l=c(84546),m=c(19527),n=c(7069);let o=h.ZP.div`
  background-color: rgba(0, 0, 0, 0.63);
  animation: ${k.Ji} 0.3s linear;
  -webkit-overflow-scrolling: touch;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  ${(0,i.aK)("large")} {
    display: none;
  }
`,p=(0,h.ZP)(m.Z)`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: ${(0,i.R)("zIndices.2")};
  justify-content: flex-end;

  ${(0,i.aK)("large")} {
    z-index: ${(0,i.R)("zIndices.0")};
    overflow: hidden;
    position: absolute;
    height: auto;
    top: 56px;
    bottom: unset;
  }
`,q=(0,h.ZP)(m.Z)`
  width: ${a=>null!=a&&a.fullWidth?"100%":"85%"};
  overflow: hidden;
  flex-direction: column;
  animation: ${k.$7} 0.3s ease-in-out;
  z-index: ${(0,i.R)("zIndices.1")};

  ${(0,i.aK)("large")} {
    width: 100%;
    position: relative;
    animation: ${k.ie} 0.3s ease-in-out;
  }
`,r=(0,h.ZP)(l.Z)`
  background-color: ${(0,i.dF)("white")};
  position: relative;
  max-height: 250px;
  overflow: hidden;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;

  ${(0,i.aK)("large")} {
    border-radius: 6px;
    border: 1px solid;
    border-color: ${(0,i.kJ)("light")};
  }
`,s=(0,h.ZP)(m.Z)`
  justify-content: ${a=>a.hasContentLabel?"space-between":"flex-end"};
  align-items: center;
  background-color: ${(0,i.dF)("base")};
  height: 47px;
  font-size: 20px;
  font-weight: 500;
  color: #515151;
  padding: 0 12px;
  line-height: 39px;

  ${(0,i.aK)("large")} {
    display: none;
  }
`,t=(0,h.ZP)(m.Z)`
  flex-direction: column;
  padding-bottom: 44px;
  overflow-y: auto;
  height: calc(100% - 39px);

  ${(0,i.aK)("large")} {
    padding-top: 0;
    padding-bottom: 0;
    height: 100%;
    max-height: 250px;
  }
`,u=(0,h.ZP)(l.Z)`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 5%, rgba(255, 255, 255, 1) 45%);
  position: absolute;
  width: 100%;
  height: 46px;
  bottom: 0;

  ${(0,i.aK)("large")} {
    display: none;
  }
`,v=(0,h.ZP)(j.x8P).attrs(a=>({color:(0,i.uu)("primary")(a)}))`
  ${(0,i.aK)("large")} {
    display: none;
  }
`,w=(0,h.ZP)(n.Z)`
  & ~ label {
    width: 100%;
    height: 46px;
    border: 0px;
    padding: 0 12px;
    border-radius: 0px;
    border-top-width: 1px;
    border-style: solid;
    border-color: ${(0,i.kJ)("light")};
    color: ${(0,i.uu)("light")};
    justify-content: space-between;
    font-weight: normal;
    line-height: 22px;
  }

  &:checked ~ label {
    background-color: transparent;
    background-color: ${(0,i.dF)("opacityBlue")};
    border-color: ${(0,i.kJ)("light")};
    font-weight: 500;
    color: ${(0,i.uu)("base")};

    &::before {
      content: '';
      width: 5px;
      height: 100%;
      background-color: ${(0,i.dF)("primary")};
      left: 0;
      position: absolute;
    }
  }

  &:disabled ~ label {
    background-color: ${(0,i.dF)("base")};
    color: ${(0,i.uu)("lighter")};
  }

  ${(0,i.aK)("large")} {
    &:not(:checked, :disabled) ~ label:hover {
      color: ${(0,i.uu)("primary")};
    }

    &:disabled ~ label {
      cursor: not-allowed;
    }
  }
`,x=({label:a,values:b,current:c,selected:d,type:f,variations:h,onChange:i,onClose:j,fullWidth:k})=>e.createElement(p,null,e.createElement(o,{onClick:j}),e.createElement(q,{fullWidth:k,"data-testid":"attribute-list-wrapper"},e.createElement(r,null,e.createElement(s,{hasContentLabel:!!a},a,e.createElement(v,{onClick:j,"data-testid":"attribute-close"})),e.createElement(t,null,null==b?void 0:b.map((a,b)=>{let j=(0,g.Z)(h,a);return e.createElement(w,{key:`${a}-${b}`,value:a,type:f,checked:d&&c===a,disabled:!(null!=j&&j.isAvailable)&&!(null!=j&&j.available),onChange:i},a)})),e.createElement(u,null))));var y=x;let z=({attribute:a,variations:b,onChange:c,alignment:g,fullWidth:h})=>{let[i,j]=(0,e.useState)(!1),k=(0,e.useRef)(),l=(0,e.useCallback)((a,b)=>{c(a,b),k.current.blur()},[i]);return e.createElement(f.Z,(0,d.Z)({},a,{onClick:()=>j(!i),onBlur:()=>j(!1),alignment:g,ref:k,bordered:!0}),!!i&&e.createElement(y,(0,d.Z)({},a,{fullWidth:h,variations:b,onChange:l,onClose:()=>j(!1)})))};z.defaultProps={attribute:{},disabled:!1,variations:[],alignment:""};var A=z},78045:function(a,b,c){c.d(b,{Z:function(){return m}});var d=c(7896),e=c(31461),f=c(2784),g=c(34490),h=c(7029),i=c(99673),j=c(87043);let k=(0,i.ZP)(j.xu).attrs({borderRadius:"circle",width:"24px",height:"24px",overflow:"hidden"})``,l=a=>{let{src:b,alt:c,fill:i,dataTesteIdImage:j,dataTesteIdIcon:l,iconName:m}=a,n=(0,e.Z)(a,["src","alt","fill","dataTesteIdImage","dataTesteIdIcon","iconName"]);return f.createElement(k,(0,d.Z)({"data-testid":"avatar"},n),b?f.createElement(h.Z,{src:b,alt:c,"data-testid":j}):f.createElement(g.JO$,{fill:i,name:m,"data-testid":l}))};l.defaultProps={src:"",alt:"",fill:"#2FA0FD",iconName:"UserReviewIcon"};var m=l},96504:function(a,b,c){c.d(b,{Z:function(){return j}});var d=c(2784),e=c(8719),f=c(99673),g=c(34490);let h=(0,f.ZP)(g.zuq)`
  position: fixed;
  width: 63px;
  height: 63px;
  bottom: 75px;
  right: 26px;
  z-index: 99;
`;function i({onClick:a,show:b}){let[c,f]=(0,d.useState)(b),g=window&&window.innerHeight,i=()=>{(0,e.Z)(),a()},j=()=>{let a=window.pageYOffset;!c&&a>g?f(!0):c&&a<=g&&f(!1)};return(0,d.useEffect)(()=>(window.addEventListener("scroll",j),()=>{window.removeEventListener("scroll",j)}),[c]),c?d.createElement(h,{"data-testid":"back-to-top",onClick:i}):d.createElement(d.Fragment,null)}i.defaultProps={onClick:()=>{},show:!1},i.displayName="BackToTop";var j=i},98460:function(a,b,c){c.d(b,{Z:function(){return l}});var d=c(7896),e=c(2784),f=c(7029),g=c(99673),h=c(91489);let i={miniature:g.iv`
    margin-top: -25px;
    width: 42px;
    height: 32px;
  `,list:g.iv`
    margin-top: -5px;
    width: 50px;
    height: 36px;
  `,gallery:g.iv`
    margin-top: -25px;
    width: 55px;
    height: 40px;
    position: absolute;
    ${(0,h.aK)("small")} {
      width: 55px;
      height: 40px;
    }
  `,productPage:g.iv`
    margin-top: 0px;
    width: 55px;
    height: 40px;
  `},j=g.ZP.div`
  position: relative;
  ${({displayMode:a})=>i[a]||"margin-top: -25px;"}
`,k=a=>{let{width:b,height:c,url:g,tooltip:h}=a,i=g&&g.replace("{w}",b).replace("{h}",c);return g?e.createElement(j,(0,d.Z)({},a,{"data-testid":"wrapper-badge"}),e.createElement(f.Z,(0,d.Z)({src:i,alt:h,"data-testid":"badge"},a))):null};k.defaultProps={tooltip:"",width:"65",height:"50"};var l=k},67619:function(a,b,c){c.d(b,{Z:function(){return p}});var d=c(2784),e=c(91489),f=c(34490),g=c(12468),h=c(99673),i=c(19527);let j=h.ZP.div`
  background-color: ${a=>a.isTransparent?"transparent":(0,e.dF)("lighter")(a)};
`,k=(0,h.ZP)(i.Z)`
  position: relative;
  flex: 0;
  flex-basis: auto;
  height: 32px;
  overflow-y: hidden;
  width: max-content;
  direction: rtl;
  background-color: ${a=>a.isTransparent?"transparent":(0,e.dF)("lighter")(a)};
`,l=(0,h.ZP)(i.Z)`
  align-items: center;
  flex-wrap: nowrap;
  padding: 0 ${a=>(0,e.R)("space.4")(a)}px 0
    ${a=>(0,e.R)("space.2")(a)}px;
  direction: ltr;
`;var m=c(66228),n=c(87043);let o=({isTransparent:a,items:b,seller:c,onLogoClick:g,onClickItem:h,domain:i,logo:o})=>{let{url:p="/",icon:q="LogoMagalu",title:r="p\xe1gina inicial magalu",styles:s={color:e.rS.colors.blue,height:"14px",marginTop:"6px",width:"60px"}}=o||{},t={url:p,icon:d.createElement(f.JO$,{name:q,style:s}),title:r};return t.handleClick=g,b.forEach(a=>Object.assign(a,{handleClick:h})),d.createElement(j,{isTransparent:a},d.createElement(k,{isTransparent:a},d.createElement(l,null,c&&d.createElement(n.gN,{seller:c}),!c&&[!c&&t,...b].map((a,c)=>{var e,f;return d.createElement(n.gN,{"data-testid":"breadcrumb-item",key:c,item:Object.assign({},a,{position:c}),active:(e=b.length,1!==(f=c)&&e===f),onClick:a.handleClick})}))),d.createElement(m.ZP,{schema:(0,m.ij)(b,i),type:"BreadcrumbList"}))};o.defaultProps={isTransparent:!1,items:[],seller:void 0,onClickItem:()=>{},onLogoClick:()=>{},domain:g.RW};var p=o},49542:function(a,b,c){c.d(b,{Z:function(){return D}});var d=c(7896),e=c(31461),f=c(2784),g=c(28249);let h=({lazy:a=!1,length:b=0,slidesPerView:c=1,active:d=0}={})=>{let e=Array.from(Array(b).keys());if(!a)return e;let f=Math.ceil(b/c),g=b%c||c,h=Math.ceil((d+1)/c),i=h+1;i>f&&(i=1);let j=h-1;j<1&&(j=f);let k=a=>{let b=a*c-c,d=a===f?b+g:b+c;return e.slice(b,d)};return[...k(j),...k(h),...k(i)].sort()};function i(a,b){switch(b.type){case"jump":return Object.assign({},a,{desired:b.desired*b.slidesPerView});case"next":var c,d,e;return Object.assign({},a,{desired:(c=b.indicators,d=a.active,(d+(e=b.slidesPerView))%(c*e))});case"prev":return Object.assign({},a,{desired:function(a,b,c){let d=a*c;return(b-c+d)%d}(b.indicators,a.active,b.slidesPerView)});case"done":return Object.assign({},a,{offset:NaN,active:a.desired,visible:b.lazy?Array.from(new Set([...a.visible,...h(Object.assign({},b,{active:a.desired}))])):a.visible});case"drag":return Object.assign({},a,{offset:b.offset});default:return a}}let j={offset:0,desired:0,active:0};function k(a,b,c,d,e){let f=function(a){let b=a.clientWidth;return b/5}(a.event.target),g=-(d*a.deltaX);b(g>=f?{type:d>0?"next":"prev",indicators:c,slidesPerView:e}:{type:"drag",offset:0})}let l=(a,b,c)=>{let d=100/b/3;return d>10&&(d=10),c&&a>1?100-d:100};var m=c(99673),n=c(68054),o=c(91489),p=c(34490),q=c(84546),r=c(59120);let s={color:"primary.base",width:40,height:40},t=(0,m.ZP)(q.Z)`
  position: relative;
  overflow: hidden;
`,u=m.ZP.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow: hidden;
  position: relative;

  ${({showControls:a})=>a&&m.iv`
      padding-bottom: ${a=>a.insideControls?"0":"25"}px;
    `};

  max-height: ${({itemHeight:a})=>a?`${a}px`:null};
`,v=(0,m.ZP)(q.Z).attrs(({gutter:a,alignContent:b})=>({pr:a?`${a}px`:null,va:b?`${b}`:null}))`
  width: ${({width:a="50%"})=>a};
  &:first-child {
    padding-left: ${({gutter:a})=>a?`${a}px`:null};
  }
  transition: box-shadow 0.4s ease 0s;
  align-content: ${({alignContent:a=null})=>a};
`,w=m.ZP.div`
  overflow: hidden;

  ${({showArrowControls:a})=>a&&m.iv`
      margin: ${a=>a.insideControls?"0px":"0px 40px"};
    `};
`,x=m.ZP.button`
  ${r.z}

  background-color: ${a=>(0,o.ow)("background.lighter")(a)};
  width: fit-content;
  height: fit-content;
  position: absolute;
  top: 40%;
  cursor: ${({disabled:a})=>a?"default":"pointer"};

  ${a=>a.left&&m.iv`
      left: 0;
    `}

  ${a=>a.right&&m.iv`
      right: 0;
    `}
  
  ${a=>a.insideControls&&m.iv`
      z-index: 2;
    `}

  ${n.AF}
  ${o.$_}
`,y=(0,m.ZP)(p.s$$).attrs(a=>Object.assign({},s,a))`
  ${o.$_}
`,z=(0,m.ZP)(p._Qn).attrs(a=>Object.assign({},s,a))`
  ${o.$_}
`,A=m.ZP.ol`
  position: absolute;
  right: 0;
  bottom: ${a=>a.insideControls?(0,o.R)("space.3")(a):0}px;
  left: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  padding-left: 0;
  list-style: none;
  margin: auto;
`,B=m.ZP.li`
  position: relative;
  flex: 0 1 auto;
  width: 8px;
  height: 8px;
  margin: 0 0.3em;
  cursor: pointer;
  border: solid 1.2px;
  border-radius: 4px;

  ${a=>a.active?`
        background: ${(0,o.ow)("text.scratched")(a)};
        border-color: ${(0,o.ow)("text.scratched")(a)};
      `:`
        background: ${(0,o.ow)("background.lighter")(a)};
        border-color: ${(0,o.ow)("text.scratched")(a)};
      `}

  ${(0,o.aK)("small")} {
    width: 10px;
    height: 10px;
    border-radius: 8px;
  }
`,C=a=>{let{children:b,slidesPerView:c,showPartial:m,showPartialNextSlide:n,interval:o,transitionDuration:p,auto:q,showArrowControls:r,showControls:s,insideControls:C,onChange:D,gutter:E,itemHeight:F,isProductCarousel:G,lazy:H,goTo:I,verticalAlign:J}=a,K=(0,e.Z)(a,["children","slidesPerView","showPartial","showPartialNextSlide","interval","transitionDuration","auto","showArrowControls","showControls","insideControls","onChange","gutter","itemHeight","isProductCarousel","lazy","goTo","verticalAlign"]),L=f.Children.toArray(b),M=null==L?void 0:L.length,N=Math.min(M,c),{handlers:O,style:P,cardWidth:Q,indicators:R,setActive:S,active:T,visible:U}=function({length:a,interval:b,transitionDuration:c,auto:d,slidesPerView:e,showPartial:m,showPartialNextSlide:n,lazy:o}){let p=l(a,e,m||n),q=`${p/e}%`,r=Math.ceil(a/e),s=`transform ${c}ms ease`,[t,u]=(0,f.useReducer)(i,Object.assign({},j,{visible:h({lazy:o,length:a,active:0,slidesPerView:e})})),v=(0,g.QS)({onSwiping(a){u({type:"drag",offset:a.deltaX})},onSwipedLeft(a){k(a,u,r,1,e)},onSwipedRight(a){k(a,u,r,-1,e)},trackMouse:!1,trackTouch:!0});(0,f.useEffect)(()=>{let a=d&&setTimeout(()=>u({type:"next",indicators:r,slidesPerView:e}),b);return()=>clearTimeout(a)},[d,t.offset,t.active]),(0,f.useEffect)(()=>{let b=setTimeout(()=>u({type:"done",lazy:o,length:a,slidesPerView:e}),c);return()=>clearTimeout(b)},[t.desired]);let w=m?(100-p)/2:0,x=0!==t.active?w:0,y={transform:"translateX(0)",width:`${p*(a/e)}%`,left:`-${t.active*(p/e)-x}%`};if(t.desired!==t.active){let z=Math.abs(t.active-t.desired)/e,A=Math.sign(t.offset||0),B=-1*Math.sign(t.desired-t.active),C=100*(A||B)/(a/e)*z,D=0;0===t.active&&(D=w/a/e),0===t.desired&&(D=-(w/(a/e)*1)),y.transition=s,y.transform=`translateX(${C+D}%)`}else Number.isNaN(t.offset)||(y.transform=`translateX(${t.offset}px)`);return{active:t.active,setActive:a=>u({type:"jump",desired:a,slidesPerView:e}),handlers:v,style:y,cardWidth:q,indicators:r,visible:t.visible}}({length:M,interval:o,transitionDuration:p,auto:q,slidesPerView:N,showPartial:m,showPartialNextSlide:n,lazy:H}),[V,W]=(0,f.useState)(0);return(0,f.useEffect)(()=>{W(I),S(I)},[I]),(0,f.useEffect)(()=>{D(T)},[T]),M>1?f.createElement(t,(0,d.Z)({"data-testid":"carousel"},K),r&&f.createElement(x,{"data-testid":"arrow-previous-button","aria-label":"Ver elemento da esquerda",disabled:V-1<0,left:!0,insideControls:C,onClick:()=>{let a=V-1;W(a),S(a)}},f.createElement(y,null)),f.createElement(w,{showArrowControls:r,insideControls:C},f.createElement(u,(0,d.Z)({showControls:s,insideControls:C,itemHeight:F},O,{style:P}),L.map((a,b)=>f.createElement(v,{"data-testid":"carousel-item",width:Q,isProductCarousel:G,gutter:m||n||c>1?E:0,alignContent:J,index:b,key:`carousel-item-${L.length}-${b+1}`},U.includes(b)&&a))),s&&L.length>N&&f.createElement(A,{insideControls:C,"data-testid":"carousel-indicators"},Array(R).fill().map((a,b)=>f.createElement(B,{"data-testid":"carousel-indicator",active:T/c===b,onClick:()=>{S(b),W(b)},key:`carousel-indicator-${L.length}-${b+1}`})))),r&&f.createElement(x,{"data-testid":"arrow-next-button","aria-label":"Ver elemento da direita",disabled:V+1===R,insideControls:C,onClick:()=>{let a=V+1;W(a),S(a)},right:!0},f.createElement(z,null))):b};C.defaultProps={slidesPerView:1,showPartial:!1,showPartialNextSlide:!1,interval:500,transitionDuration:400,auto:!0,showArrowControls:!1,showControls:!0,onChange:()=>{},gutter:4,isProductCarousel:!1,insideControls:!1,lazy:!1,goTo:0,verticalAlign:""},C.CarouselItem=v;var D=C},2761:function(a,b,c){c.d(b,{Z:function(){return i}});var d=c(2784),e=c(58331),f=c(8341);let g="icons.disabled",h=(0,d.forwardRef)(({value:a,onChange:b},c)=>{let[h,i]=(0,d.useState)(g),[j,k]=(0,d.useState)(g);return(0,d.useEffect)(()=>(i("like"===a?"icons.like":g),k("dislike"===a?"icons.dislike":g),()=>{i(g),k(g)}),[a]),d.createElement(f.Z,{ref:c,gridTemplateColumns:"1fr 1fr",gap:30},d.createElement(e.Z,{type:"like",label:"Sim",color:h,onClick:()=>{k(g),b({target:{value:"like"}})},onMouseOver:()=>i("icons.like"),onMouseLeave:()=>i(b=>"like"===a?b:g),"data-testid":"btn-like"}),d.createElement(e.Z,{type:"dislike",label:"N\xe3o",color:j,onClick:()=>{i(g),b({target:{value:"dislike"}})},onMouseOver:()=>k("icons.dislike"),onMouseLeave:()=>k(b=>"dislike"===a?b:g),"data-testid":"btn-dislike"}))});h.displayName="Confirm";var i=h},12241:function(a,b,c){c.d(b,{Z:function(){return q}});var d=c(7896),e=c(31461),f=c(2784),g=c(34490),h=c(99673),i=c(91489),j=c(29869),k=c(60861);let l=(0,h.ZP)(j.Z)`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  color: ${a=>(0,i.uu)("scratched")(a)};
  height: 52px;
`,m=(0,h.ZP)(k.Z)`
  align-items: center;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  display: flex;
  flex-direction: column;
  font-size: ${a=>(0,i.R)("fontSizes.0")(a)}px;
  height: 52px;
  min-width: 64px;
  padding: ${a=>(0,i.R)("space.1")(a)}px;
`;var n=c(19527),o=c(82753);function p(a){let{value:b}=a,c=(0,e.Z)(a,["value"]),{color:h,"data-testid":i,disabled:j,uppercase:k,variation:p,delay:q}=c,r=(0,e.Z)(c,["color","data-testid","disabled","uppercase","variation","delay"]),[s,t]=(0,f.useState)(!1),[u,v]=(0,f.useState)(j),w=a=>(t(!0),v(!0),(0,o.vQ)(a),setTimeout(()=>{t(!1),v(!1)},q));return f.createElement(n.Z,null,f.createElement(l,(0,d.Z)({"data-testid":`${i}-input`,readOnly:!0,value:b},r)),f.createElement(m,{color:h,"data-testid":`${i}-button`,disabled:u,onClick:()=>w(b),startIcon:f.createElement(g.CKM,{width:25,height:21}),uppercase:k,variation:p},s?"Copiado":"Copiar"))}p.defaultProps={color:"primary","data-testid":"copy-to-clipboard",delay:3e3,disabled:!1,uppercase:!1,value:"",variation:"fill"},p.displayName="CopyToClipboard";var q=p},84022:function(a,b,c){c.d(b,{Z:function(){return l}});var d=c(31461),e=c(2784),f=c(99673),g=c(91489),h=c(19527);let i=(0,f.ZP)(h.Z)``,j=f.ZP.span`
  background-color: ${a=>a.color||(0,g.dF)("primary")(a)};
  border-radius: 50%;
  color: ${a=>(0,g.uu)("lightest")(a)};
  min-width: ${a=>(0,g.R)("space.3")(a)}px;
  min-height: ${a=>(0,g.R)("space.3")(a)}px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
`,k=a=>{let{count:b}=a,c=(0,d.Z)(a,["count"]);return e.createElement(e.Fragment,null,b>=1&&e.createElement(i,c,e.createElement(j,c,b)))};k.defaultProps={count:0};var l=k},80001:function(a,b,c){c.d(b,{Z:function(){return j}});var d=c(2784),e=c(99673),f=c(87043);let g=(0,e.ZP)(f.UQ)`
  div + div:last-child {
    -webkit-line-clamp: unset;
    max-height: 100%;
    ${a=>a.open?`
            max-height: 100%;
          `:`
            max-height: 0px;
          `}
  }
`;var h=c(66228);let i=({faq:a,initialOpen:b,maxQuestions:c,showMoreQuestions:e,showLessQuestions:f,questionAs:i})=>{let[j,k]=(0,d.useState)(a.map(a=>Object.assign({},a,{isOpen:b}))),[l,m]=(0,d.useState)(c),n=a=>{k(b=>b.map((b,c)=>a===c?Object.assign({},b,{isOpen:!b.isOpen}):b))},o=()=>{m(a.length)},p=()=>{m(c)};return d.createElement(d.Fragment,null,j.map((a,b)=>d.createElement(g,{"data-testid":"item-question",display:b>=l?"none":"block",key:`faq-accordion-${b}`,title:a.question,asTitle:i,open:a.isOpen,onClick:()=>{n(b)},openIcon:"ChevronRight",closeIcon:"ChevronUp"},a.answer)),e&&l<j.length&&d.createElement(g,{"data-testid":"show-more",title:e,open:!1,onClick:o,openIcon:"ChevronDown",closeIcon:"ChevronDown",fontWeight:"100"}),f&&l===j.length&&d.createElement(g,{"data-testid":"show-less",title:f,open:!1,onClick:p,openIcon:"ChevronUp",closeIcon:"ChevronUp",fontWeight:"100"}),d.createElement(h.ZP,{schema:(0,h.I1)(j),type:"FAQPage"}))};i.defaultProps={questionAs:"h3",faq:[],initialOpen:!1,maxQuestions:void 0,showLessQuestions:"",showMoreQuestions:""};var j=i},99554:function(a,b,c){c.d(b,{Z:function(){return n}});var d=c(31461),e=c(2784),f=c(34490),g=c(99673),h=c(91489),i=c(84546),j=c(66457);let k=(0,g.ZP)(i.Z)`
  border: solid 1px ${a=>(0,h.uu)("lighter")(a)};
  border-radius: 2px;
`;var l=c(33055);let m=a=>{let{onChange:b,onClearInput:c,label:g}=a,h=(0,d.Z)(a,["onChange","onClearInput","label"]),[i,m]=(0,e.useState)(""),n=a=>{m(a.target.value),b(a)},o=a=>{m(""),c(a)};return e.createElement(k,h,e.createElement(j.xJ,null,e.createElement(f.olm,{color:"#818181","data-testid":"icon-search"}),e.createElement("form",null,e.createElement(l.Z,{text:"pesquisar por filtro",htmlFor:"search-filter"}),e.createElement(j.II,{id:`search-filter ${g}`,value:i,onChange:n,placeholder:`Busque por ${g}`})),i&&e.createElement(f.B86,{color:"#818181",onClick:o,title:"Limpar texto"})))};m.defaultProps={onChange:()=>({}),onClearInput:()=>({}),label:""};var n=m},1729:function(a,b,c){c.d(b,{Z:function(){return n}});var d=c(2784),e=c(34490),f=c(99673),g=c(8341);let h=(0,f.ZP)(g.Z)({gridTemplateColumns:"auto 1fr",alignItems:"center",padding:"6px 12px"}),i=f.ZP.div`
  margin-right: 7px;
`,j=f.ZP.a`
  text-decoration: none;
`,k=f.ZP.div``;var l=c(63825);let m=({item:a,onClick:b,children:c})=>{let{label:f,href:g,selected:m}=a,[n,o]=(0,d.useState)(m);return(0,d.useEffect)(()=>(o(m),()=>{o(!1)}),[m]),d.createElement("li",null,d.createElement(j,{href:g,onClick:c=>b(c,a),role:"button","data-testid":"filter-item"},d.createElement(h,null,d.createElement(i,{role:"checkbox","aria-checked":m,"aria-labelledby":f},n?d.createElement(e.nvx,{"aria-hidden":"true"}):d.createElement(e.XE8,{"aria-hidden":"true"})),d.createElement(k,{children:c||d.createElement(l.Z,{fontSize:1,id:f},f)}))))};m.defaultProps={item:{selected:!1},children:null,onClick:()=>({})};var n=m},33055:function(a,b,c){c.d(b,{Z:function(){return i}});var d=c(31461),e=c(2784),f=c(99673);let g=f.ZP.label`
  border: 0;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`,h=a=>{let{text:b}=a,c=(0,d.Z)(a,["text"]);return e.createElement(g,c,b)};h.defaultProps={text:""};var i=h},2490:function(a,b,c){c.d(b,{Z:function(){return o}});var d=c(2784),e=c(99673),f=c(19527),g=c(84546);let h=e.iv`
  overflow-y: hidden;

  > *:not(:first-child) {
    margin-left: 8px;
  }
`,i=e.iv`
  overflow-x: hidden;

  > *:not(:first-child) {
    margin-top: 8px;
  }
`,j=({directionType:a})=>"row"===a?h:i,k=(0,e.ZP)(f.Z).attrs(({directionType:a})=>({pb:"1em",flexDirection:a}))`
  ${({directionType:a})=>"column"===a&&`
      padding: 1em;
  `}

  ${j};
`,l=(0,e.ZP)(g.Z).attrs(()=>({color:"primary.base",fontSize:1}))`
  text-decoration: underline;
  cursor: pointer;
`;var m=c(39471);let n=({items:a,onItemClick:b,directionType:c,limitItems:e})=>{let[f,g]=(0,d.useState)(e),h=a.length,i=(0,d.useMemo)(()=>e?a.slice(0,f):a,[e,a,f]);return d.createElement(k,{"data-testid":"hot-links",directionType:c},i.map((a,e)=>d.createElement(m.Z,{key:e,item:a,onClick:b,directionType:c,borderColor:a.borderColor})),!!e&&f<h&&d.createElement(l,{onClick:()=>g(h),"data-testid":"show-more",role:"button"},"Ver mais"))};n.defaultProps={items:[],directionType:"row",limitItems:null,onItemClick:()=>{}};var o=n},15309:function(a,b,c){c.d(b,{Z:function(){return g}});var d=c(2784),e=c(99673);let f=e.ZP.div`
  border: 0;
  background: transparent;
  display: flex;
`;var g=function({onClick:a,children:b}){return d.createElement(f,{onClick:b=>{var c,d;return c=b,void(d=a)(c)}},b)}},97769:function(a,b,c){c.d(b,{Z:function(){return m}});var d=c(7896),e=c(31461),f=c(2784),g=c(71180),h=c(99673),i=c(68054),j=c(63825);let k=(0,h.ZP)(j.Z).attrs(({isList:a})=>({fontSize:[a?0:1,1],fontWeight:"regular",lineHeight:["fontSize","display"]}))`
  ${i.cp}
`,l=a=>{let{information:b,isList:c}=a,h=(0,e.Z)(a,["information","isList"]),{quantity:i,amount:j,paymentMethodDescription:l,totalAmount:m}=b;return f.createElement(f.Fragment,null,j&&i>1&&m&&f.createElement(k,(0,d.Z)({isList:c,"data-testid":"installment"},h),"ou ",(0,g.oB)({value:m})," em ",i,"x de"," ",(0,g.oB)({value:j})," ",l))};l.defaultProps={information:{amount:"",isList:!1,paymentMethodDescription:"",quantity:"",totalAmount:""}};var m=l},78012:function(a,b,c){c.d(b,{Z:function(){return Q}});var d=c(7896),e=c(31461),f=c(2784);let g=(a,b,c)=>Array.isArray(a)&&"string"==typeof c&&c?null==a?void 0:a.filter(a=>{var d,e;return null==(d=a[c])?void 0:null==(e=d.toUpperCase())?void 0:e.includes(b.toUpperCase())}):a,h=(a,b)=>b instanceof Function?null==a?void 0:a.sort(b):a;var i=({searchTerm:a,dataSource:b,sortBy:c,searchProperty:d})=>h(g(b,a,d),c);let j=(0,f.createContext)(!1),k=a=>{let{children:b,value:{disableGutters:c}}=a,d=(0,e.Z)(a.value,["disableGutters"]);return f.createElement(j.Provider,{value:Object.assign({basis:c?32:40,gutters:c?0:3},d)},b)},l=()=>(0,f.useContext)(j);var m=k,n=c(99673),o=c(91489),p=c(81572),q=c(88699),r=c(87043);let s=({gutters:a,basis:b=0,inset:c=0,props:d})=>(0,o.R)(`space.${a}`)(d)+parseInt(b,10)*Number(c),t=({horizontal:a})=>a&&n.iv`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30px, max-content));
    justify-content: space-between;
  `,u=n.iv`
  > *:not(:last-child) {
    border-bottom: ${(0,o.R)("borders.0")};
  }
`,v=n.ZP.li({listStyle:"none",position:"relative"}),w=(0,n.ZP)(p.Z).attrs(a=>{let{inset:b,basis:c,gutters:d,content:f,horizontal:g}=a,h=(0,e.Z)(a,["inset","basis","gutters","content","horizontal"]);return Object.assign({position:"relative",gap:0,rowGap:2,px:0,py:f?2:0,pl:b?s({gutters:d,basis:c,inset:b,props:h}):s({gutters:d,props:h}),pr:s({gutters:d,props:h})},g&&{textAlign:"center",pl:0,pr:0},h)})`
  cursor: pointer;
  ${({selectable:a})=>a&&n.iv`
      &:hover {
        background: ${(0,o.dF)("darker")};
      }
    `};

  ${({horizontal:a})=>a&&n.iv`
      > span {
        position: unset;
        transform: unset;
        left: 0;
      }
    `}

  ${({divided:a,isCollapsed:b})=>a&&!b&&n.iv`
      border-top: ${(0,o.R)("borders.0")};
    `}
`,x=(0,n.ZP)(r.rj)`
  ${({divided:a})=>a&&u}
  ${t}
`,y=(0,n.ZP)(q.Z)`
  ${({divided:a})=>a&&u}
  ${t}
`,z=a=>{let{as:b,children:c,color:g,fill:h,startIcon:i,endIcon:j,onClick:k}=a,m=(0,e.Z)(a,["as","children","color","fill","startIcon","endIcon","onClick"]),{variant:n,divided:o,scale:p,gutters:q,isCollapsed:r}=l();return f.createElement(w,(0,d.Z)({forwardedAs:b,variant:n,startIcon:i,endIcon:j,gutters:q,scale:p,color:g,fill:h,divided:o,isCollapsed:r,onClick:k,"data-testid":"list-action"},m),c)};z.defaultProps={as:"div",centered:!1,children:null,fontWeight:"medium",gap:1},z.displayName="ListAction";var A=c(19527),B=c(18281);let C=a=>{let b=b=>{let{as:c}=b,g=(0,e.Z)(b,["as"]),{type:h}=l();return["ul","ol"].includes(h)&&"a"===c?f.createElement(v,null,f.createElement(a,(0,d.Z)({as:c},g))):f.createElement(a,(0,d.Z)({as:["ul","ol"].includes(h)?"li":"div"},g))};return b.defaultProps={as:""},b};var D=C;let E=a=>{let{as:b,checked:c,children:g,content:h,defaultChecked:i,description:j,endIcon:k,fill:m,value:n,onClick:o}=a,p=(0,e.Z)(a,["as","checked","children","content","defaultChecked","description","endIcon","fill","value","onClick"]),[q,r]=(0,f.useState)(c),{variant:s,scale:t,basis:u,gutters:v,selectable:x}=l(),y=a=>{r(!q),o(a)};return(0,f.useEffect)(()=>{r(c)},[c]),f.createElement(w,(0,d.Z)({forwardedAs:b,variant:s,startIcon:f.createElement(A.Z,{width:u},f.createElement(B.Z,{checked:q,defaultChecked:i,value:n})),endIcon:k,description:j,content:h,selectable:x,scale:t,gutters:v,fill:m,onClick:y,"data-testid":"list-checkbox"},p),g)};E.defaultProps={checked:!1,children:null,endIcon:"",fill:"currentColor",onClick:()=>{}};var F=D(E);let G=a=>{let{as:b,children:c}=a,g=(0,e.Z)(a,["as","children","onClick"]),{variant:h,scale:i,gutters:j}=l();return f.createElement(w,(0,d.Z)({forwardedAs:b,variant:h,scale:i,gutters:j,"data-testid":"list-header"},g),c)};G.defaultProps={children:null,fontSize:2,fontWeight:"medium"},G.displayName="ListHeader";var H=D(G),I=c(34490);let J=a=>{let{as:b,children:c,content:g,description:h,endIcon:i,fill:j,inset:k,onClick:m,startIcon:n}=a,o=(0,e.Z)(a,["as","children","content","description","endIcon","fill","inset","onClick","startIcon"]),{variant:p,basis:q,scale:r,gutters:s,selectable:t,horizontal:u}=l();return f.createElement(w,(0,d.Z)({forwardedAs:b,variant:p,startIcon:n&&!k&&f.createElement(A.Z,{width:q},"string"==typeof n?f.createElement(I.JO$,{name:n,color:j,fill:j}):n),endIcon:i&&("string"==typeof i?f.createElement(A.Z,{width:q,justifyContent:"flex-end"},f.createElement(I.JO$,{name:i,color:j,fill:j})):i),description:h,content:g,selectable:t,gutters:s,basis:q,inset:k,scale:r,fill:j,horizontal:u,onClick:m,"data-testid":"list-item"},o),c)};J.defaultProps={children:null,endIcon:"",fill:"currentColor",inset:!1,startIcon:""},J.displayName="ListItem";var K=D(J),L=c(70715);let M=a=>{let{as:b,children:c,href:g,label:h,value:i,selected:j,description:k,endIcon:m,fill:n,onChange:o,position:p,eventLabel:q,filterLabel:r}=a,s=(0,e.Z)(a,["as","children","href","label","value","selected","description","endIcon","fill","selectedOption","onChange","position","eventLabel","filterLabel"]),{name:t,variant:u,basis:v,scale:x,gutters:y,selectable:z}=l(),B=a=>{a.preventDefault(),o(a,{label:q,href:g,value:i,selected:j,filterLabel:r,position:p})};return f.createElement(w,(0,d.Z)({forwardedAs:b,variant:u,onClick:B,startIcon:f.createElement(A.Z,{width:v},f.createElement(L.Z,{readOnly:!0,name:t,label:h,checked:j,value:i,width:1})),endIcon:m,description:k,selectable:z,scale:x,gutters:y,fill:n,"data-testid":"list-radio-group",href:g},s),c)};M.defaultProps={checked:!1,children:null,endIcon:"",fill:"currentColor",onChange:()=>{}};var N=D(M);let O=({children:a,dataSource:b,renderItem:c,searchProperty:d,searchTerm:e,sortBy:g})=>{let h=(0,f.useMemo)(()=>i({dataSource:b,searchProperty:d,searchTerm:e,sortBy:g}),[b,e]);return Array.isArray(h)&&c instanceof Function?null==h?void 0:h.map((a,b)=>c(Object.assign({key:b},a))):a},P=a=>{let{as:b,children:c,dataSource:g,disableGutters:h,horizontal:i,divided:j,name:k,renderItem:l,scale:n,searchProperty:o,searchTerm:p,selectable:q,sortBy:r,variant:s,renderAction:t,trigger:u,collapsedIn:v,collapse:w}=a,z=(0,e.Z)(a,["as","children","dataSource","disableGutters","horizontal","divided","name","renderItem","scale","searchProperty","searchTerm","selectable","sortBy","variant","renderAction","trigger","collapsedIn","collapse"]),[A,B]=(0,f.useState)(g),[C,D]=(0,f.useState)(p);return(0,f.useEffect)(()=>{D(p)},[p]),(0,f.useEffect)(()=>{B(g)},[JSON.stringify(g)]),f.createElement(m,{value:{divided:j,disableGutters:h,horizontal:i,name:k,selectable:q,scale:n,variant:s,type:b,isCollapsed:u}},f.createElement(w?y:x,(0,d.Z)({forwardedAs:b,divided:j,trigger:u,collapsedIn:v,horizontal:i,"data-testid":"list"},z),f.createElement(O,{searchTerm:C,dataSource:A,sortBy:r,searchProperty:o,renderItem:l,children:c})),t)};P.defaultProps={as:"ul",children:null,dataSource:[],disableGutters:!1,divided:!1,scale:"medium",searchProperty:"",searchTerm:"",selectable:!1,variant:"transparent",horizontal:!1},P.Collapse=a=>f.createElement(P,(0,d.Z)({collapse:!0},a)),P.Header=H,P.Item=K,P.Action=z,P.Checkbox=F,P.Radio=N,P.Collapse.displayName="ListCollapse";var Q=P},33359:function(a,b,c){c.d(b,{Z:function(){return k}});var d=c(2784),e=c(34490),f=c(99673),g=c(19527);let h=(0,f.ZP)(g.Z)`
  cursor: pointer;
`,i=[{id:"gallery",label:"Galeria",icon:d.createElement(e.qiR,{height:"20",color:"#818181"})},{id:"list",label:"Lista",icon:d.createElement(e.OWX,{height:"18",color:"#818181"})},{id:"miniature",label:"Miniatura",icon:d.createElement(e.DxU,{height:"16",color:"#818181"})}];function j({onChange:a,defaultMode:b}){let[c,e]=(0,d.useState)(i.find(a=>a.id===b)),[f,g]=(0,d.useState)(i.findIndex(a=>a.id===b)+1);return(0,d.useEffect)(()=>{if(c.id!==b){let d=i.findIndex(a=>a.id===b);g(d+1),e(i[d]);let f=Object.assign({},i[d]);a(f)}},[b]),d.createElement(h,{onClick:function(){(function(a){if(a>=i.length-1){g(0);return}g(a+1)})(f),e(i[f]);let b=Object.assign({},i[f]);delete b.icon,a(b)},p:1,"data-testid":"display-type"},c.label," ",c.icon)}j.defaultProps={defaultMode:"gallery"};var k=j},41065:function(a,b,c){c.d(b,{Z:function(){return v}});var d=c(7896),e=c(31461),f=c(2784),g=c(71180),h=c(99673),i=c(91489),j=c(84546),k=c(7029);let l=h.ZP.li`
  display: flex;
  align-items: center;
  padding: ${a=>(0,i.R)(`space.${a.desktopMode?1:2}`)(a)}px;
  ${a=>a.desktopMode&&h.iv`
      cursor: pointer;
      ${({borderBottom:a})=>a&&h.iv`
          border-bottom: 1px solid #e5e5e5;
        `}

      :hover {
        background-color: #dcebf4;
      }
    `}
`,m=(0,h.ZP)(j.Z)`
  padding-left: ${a=>(0,i.R)("space.1")(a)}px;
  font-size: ${a=>(0,i.R)(`fontSizes.${a.desktopMode?0:2}`)(a)}px;
  color: ${a=>(0,i.uu)("scratched")(a)};
`,n=(0,h.ZP)(j.Z)`
  padding-left: ${a=>(0,i.R)("space.1")(a)}px;
  font-size: ${a=>(0,i.R)("fontSizes.0")(a)}px;
  color: ${a=>(0,i.uu)("primary")(a)};
  font-weight: ${a=>(0,i.R)("fontWeights.bold")(a)};
  text-align: initial;
`,o=(0,h.ZP)(k.Z)``,p=h.ZP.div`
  width: 59px;
  height: 44px;
`,q=(a,b,c)=>{var d;let e=null==a?void 0:null==(d=a.toLowerCase())?void 0:d.trim(),g=b.toLowerCase().indexOf(e);return 0===g?f.createElement("span",{key:c},e,f.createElement("strong",null,b.substring(g+e.length,b.length))):f.createElement("span",{key:c},f.createElement("strong",null,b.substring(0,g)),e,f.createElement("strong",null,b.substring(g+e.length,b.length)))};var r=q;let s=({query:a,suggestionItem:b})=>{if(a===b.term)return a;let c=a.split(" "),d=b.term.split(" ");return d.filter(a=>Boolean(a)).map((a,b)=>{let d=c.find(b=>a.toLowerCase().includes(b.toLowerCase()));return d?d===a?a:r(d,a,b):f.createElement("strong",{key:b.toString()},a)}).reduce((a,b)=>[a," ",b])};var t=s;let u=a=>{let{item:b,term:c,desktopMode:h,onSearchSubmit:i}=a,j=(0,e.Z)(a,["item","term","desktopMode","onSearchSubmit"]),[k,q]=(0,f.useState)(c);return(0,f.useEffect)(()=>{q(c)},[c]),f.createElement(l,(0,d.Z)({"data-testid":"suggestion-item",key:b.count||b.id,onClick:i,desktopMode:h},j),b.img&&f.createElement(p,null,f.createElement(o,{src:b.img})),j.prefix&&!b.img?j.prefix:f.createElement(f.Fragment,null),f.createElement("div",null,f.createElement(m,(0,d.Z)({"data-testid":"suggestion-text",desktopMode:h},j),t({query:k,suggestionItem:b}),h&&b.count?` (${b.count})`:""),b.price&&f.createElement(n,{"data-testid":"suggestion-price"},(0,g.oB)({value:b.price}))))};var v=u;u.defaultProps={item:{},desktopMode:!1,borderBottom:!1,onSearchSubmit:null}},48919:function(a,b,c){c.d(b,{Z:function(){return C}});var d=c(7896),e=c(31461),f=c(2784),g=c(99673),h=c(68054),i=c(91489),j=c(10200),k=c(19527);let l=g.ZP.nav`
  background-color: ${a=>(0,i.dF)("white")(a)};
  width: fit-content;
  padding: 20px;
`,m=g.ZP.ul`
  list-style: none;
  display: flex;
`,n=g.ZP.li.attrs(()=>({mr:3}))`
  display: flex;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
  width: max-content;

  ${h.Dh}
`,o=(0,g.ZP)(j.Z)``,p=(0,g.ZP)(k.Z).attrs(a=>Object.assign({color:"text.primary",m:0},a))``,q=({data:a})=>{let{linksList:b}=a;return f.createElement(l,{"data-testid":"header-menu-footer-elem"},b?f.createElement(m,null,b.map((a,b)=>f.createElement(n,{key:`footer-item-${b}`},a.img&&a.img.component&&f.createElement(p,{"data-testid":"image-elem",width:a.img.width},a.img.component),f.createElement(o,{href:a.url,px:2},a.label)))):f.createElement(f.Fragment,null))};q.defaultProps={data:{}};var r=q;let s=g.ZP.div.attrs(a=>Object.assign({bg:"background.white"},a))`
  border-bottom: ${a=>a.borderColor?`5px solid ${a.borderColor}`:""};
  max-height: fit-content;
  width: fit-content;
  ${i.$_}
`,t=g.ZP.div`
  display: flex;
  align-items: center;
  vertical-align: middle;
  justify-content: center;
`,u=g.ZP.div.attrs(a=>Object.assign({p:3},a))`
  display: flex;
  flex-direction: column;
  ${h.Dh}
`,v=g.ZP.div.attrs(a=>Object.assign({m:3},a))`
  /* let external project to define banner's width */
  ${h.bK}
  ${h.Dh}
`,w=g.ZP.ul`
  display: inline-grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(${a=>a.lines}, auto);
`,x=g.ZP.li.attrs(a=>Object.assign({mr:5},a))`
  list-style: none;
  line-height: 24px;
  ${h.Dh}
`,y=(0,g.ZP)(j.Z)``,z=g.ZP.li.attrs(a=>Object.assign({color:"primary.base",fontSize:1,fontWeight:"bold",px:2},a))`
  list-style: none;
  line-height: 24px;
  ${i.$_}
  ${h.cp}
  ${h.Dh}
`;var A=c(87043);let B=a=>{let{data:b}=a,c=(0,e.Z)(a,["data"]),{subcategoriesList:g,url:h,label:i,borderColor:j,banner:k,footerData:l,linePerCol:m=16,subsections:n}=b,{onMenuItemClick:o}=c;return f.createElement(s,{"data-testid":"menu-box-elem",borderColor:j},f.createElement(t,null,g?f.createElement(u,null,f.createElement(w,{lines:m},g.map((a,b)=>f.createElement(x,{key:`link-item-${b}`},f.createElement(y,(0,d.Z)({},a.highlight?{color:j}:{},{href:a.url,onClick:b=>o(b,a,"departamento")}),a.label))),n?n.map((a,b)=>f.createElement(f.Fragment,{key:`subsection-${b}`},f.createElement("div",null),f.createElement(z,{key:`subsection-title-${b}`},a.label),a.linksList.map((a,c)=>f.createElement(x,{key:`subsection-link-item-${b}-${c}`},f.createElement(y,{href:a.url},a.label))))):f.createElement(f.Fragment,null)),h&&"#"!==h&&i?f.createElement(y,{color:j,href:h},"+ ",i):f.createElement(f.Fragment,null)):f.createElement(f.Fragment,null),k&&k.component&&f.createElement(v,{"data-testid":"banner-elem",width:k.width},k.component)),l?f.createElement(f.Fragment,null,f.createElement(A.bo,null),f.createElement(r,{data:l})):f.createElement(f.Fragment,null))};B.defaultProps={onMenuItemClick:()=>({}),data:{}};var C=B},28982:function(a,b,c){c.d(b,{Z:function(){return j}});var d=c(2784),e=c(99673),f=c(91489),g=c(19527);let h=(0,e.ZP)(g.Z).attrs(()=>({flexDirection:["column","row","row"],justifyContent:"space-evenly",left:0,lineHeight:"big",padding:3,position:"fixed",top:["0","inherit","inherit"],width:"100%",zIndex:3}))`
  background-color: ${a=>(0,f.R)("baseColors.overlay.dark")(a)};
  ${(0,f.aK)("small")} {
    bottom: 0;
    max-height: 100px;
  }
`,i=({children:a})=>d.createElement(h,null,a);i.defaultProps={children:void 0};var j=i},19620:function(a,b,c){c.d(b,{Z:function(){return l}});var d=c(7896),e=c(2784);let f=(a,b)=>Array.from({length:b-a+1},(b,c)=>a+c),g=(a,b)=>{let c=`page=${b}`;if(a.includes("page=")){let[d]=a.split("page=");return 1===b?d.substring(0,d.length-1):`${d}${c}`}return 1===b?a:a.includes("?")?`${a}&${c}`:`${a}?${c}`};var h=c(99673);let i=h.ZP.nav``,j=h.ZP.ul`
  list-style: none;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;

  & > li {
    margin-right: 8px;
  }
`;h.ZP.li`
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 26px;
  min-width: 26px;
  height: 30px;
  border-radius: 2px;
  border: 0;
  font-weight: normal;
  padding: 5px;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
`;var k=c(81484);function l(a){let{items:b}=function(a={}){let{boundaryCount:b=1,count:c=1,disabled:d,path:e="",page:h=1,onChange:i,siblingCount:j=1}=a,k=(a,b)=>{i(a,b)},l=b-1,m=f(1,Math.min(l+1,c)),n=f(Math.max(c-l,l+2),c),o=Math.max(Math.min(h-j,c-l-2*j-2),l+3),p=Math.min(Math.max(h+j,l+2*j+3),n[0]-2),q=["previous",...m,...o>l+3?["ellipsis"]:2+l<c-l-1?[2+l]:[],...f(o,p),...p<c-l-2?["ellipsis"]:c-l-1>l+1?[c-l-1]:[],...n,"next"],r={first:1,previous:h-1,next:h+1,last:c},s=q.map(a=>"number"==typeof a?{onClick:b=>{k(b,a)},type:"page",page:a,selected:a===h,disabled:d,href:g(e,a),"aria-current":a===h?"true":void 0}:{onClick:b=>{k(b,r[a])},type:a,page:r[a]||null,disabled:"next"===a?h>=c:h<=1});return{items:s}}(a);return e.createElement(i,(0,d.Z)({},a,{"aria-label":"pagination navigation"}),e.createElement(j,null,null==b?void 0:b.map((a,b)=>{var c,f,g;let h=Object.assign({},a,{"aria-label":(c=a.type,f=a.page,g=a.selected,"page"===c?`${g?"":"Go to "}page ${f}`:`Go to ${c} page`)});return e.createElement("li",{key:b},e.createElement(k.Z,(0,d.Z)({},h,{"data-testid":"pagination-item"})))})))}l.defaultProps={boundaryCount:1,count:1,disabled:!1,page:1,siblingCount:1,onChange:()=>{}}},81484:function(a,b,c){c.d(b,{Z:function(){return o}});var d=c(7896),e=c(2784),f=c(99673),g=c(34490),h=c(91489);let i=f.ZP.div``,j=f.ZP.a`
  display: flex;
  justify-content: center;
  align-items: center;

  background: none;
  background-color: ${a=>a.selected&&(0,h.ow)("base")};
  color: ${a=>(0,h.ow)(a.selected?"text":"text.dark")(a)};
  padding: 5px;
  min-height: 26px;
  height: 30px;
  min-width: 26px;
  border: 0;
  border-radius: 2px;
  font-size: ${a=>(0,h.R)("fontSizes.2")(a)}px;
  font-family: ${a=>(0,h.R)("fontFamily")(a)};
  text-decoration: none;
`,k=f.ZP.button`
  visibility: ${a=>a.disabled?"hidden":"visible"};
  border: 0;
  background: none;
  display: flex;
`,l=a=>({width:30,height:30,color:a.disabled?"#ccc":"#333",cursor:a.disabled?"not-allowed":"pointer"}),m=(0,f.ZP)(g.s$$).attrs(l)``,n=(0,f.ZP)(g._Qn).attrs(l)``;function o(a){let{onClick:b,type:c,page:f,disabled:g,href:h}=a,l=["previous","next"].includes(c);return"ellipsis"===c?e.createElement(i,null,"..."):"page"===c?e.createElement(j,(0,d.Z)({href:h,role:"button",title:`p\xe1gina ${f}`,onClick:!a.selected&&b},a),f):e.createElement(k,(0,d.Z)({onClick:b},a),l&&("previous"===c?e.createElement(m,{disabled:g}):e.createElement(n,{disabled:g})))}o.defaultProps={disabled:!1,href:null,onClick:()=>{},page:null,selected:!1}},563:function(a,b,c){c.d(b,{Z:function(){return X}});var d=c(7896),e=c(2784),f=c(34490),g=c(71180),h=c(82753),i=c(91489),j=c(99673),k=c(84546),l=c(19527),m=c(63825),n=c(60861),o=c(87043);(0,j.ZP)(k.Z)``;let p=(0,j.ZP)(l.Z)`
  padding: 2px;
  border: solid 2px
    ${({selected:a})=>a?(0,i.dF)("primary"):(0,i.dF)("darker")};
  border-radius: 2px;
  width: 50px;
  justify-content: center;
  margin: 0 2px;
`,q=(0,j.ZP)(o.td)`
  display: flex;
  margin: 0 10px;
`,r=j.ZP.table`
  width: 100%;
  border-spacing: unset;

  & tr:nth-child(n + 13) {
    display: ${({allVisible:a})=>a?"table-row":"none"};
  }
`,s=j.ZP.thead`
  font-family: ${a=>(0,i.R)("Helvetica")(a)};
  color: ${a=>(0,i.R)("colors.darkSilver")(a)};
  font-size: ${a=>(0,i.R)("fontSizes.0")(a)}px;
`,t=j.ZP.span`
  font-weight: ${a=>(0,i.R)("fontWeights.light")(a)};
  font-style: italic;
`,u=j.ZP.th`
  text-align: left;
  padding: 0 10px;
`,v=j.ZP.td`
  padding: 8px 10px;
  text-align: left;
  color: ${a=>(0,i.uu)("base")(a)};
  font-size: ${a=>(0,i.R)("fontSizes.0")(a)}px;
`,w=j.ZP.span`
  font-weight: ${a=>(0,i.R)("fontWeights.medium")(a)};
`,x=j.ZP.th`
  text-align: right;
  padding: 0 10px;
`,y=j.ZP.td`
  font-family: ${a=>(0,i.R)("Helvetica")(a)};
  color: ${a=>(0,i.uu)("base")(a)};
  padding: 0px 10px;
  font-size: ${a=>(0,i.R)("fontSizes.0")(a)}px;
  text-align: right;
`,z=j.ZP.tr`
  background-color: ${a=>a.index%2==0?(0,i.dF)("darker")(a):null};
`,A=j.ZP.p`
  margin-top: 4px;
  margin-bottom: 8px;
`,B=j.ZP.span`
  display: flex;
  align-items: center;
  color: ${a=>(0,i.ow)("primary.base")(a)};
  font-size: ${a=>(0,i.R)("fontSizes.1")(a)}px;
  margin: 10px;
  font-weight: ${a=>(0,i.R)("fontWeight.normal")(a)};
`,C=j.ZP.span`
  color: ${a=>(0,i.uu)("base")(a)};
  font-size: ${a=>(0,i.R)("fontSizes.0")(a)}px;
  font-weight: ${a=>(0,i.R)("fontWeights.medium")(a)};
`,D=(0,j.ZP)(m.Z)`
  color: #429502;
  font-size: ${a=>(0,i.R)("fontSizes.0")(a)}px;
  margin-left: 4px;
`,E=(0,j.ZP)(m.Z)``,F=(0,j.ZP)(m.Z)`
  color: ${a=>a.luizaCard?"#429502":(0,i.ow)("darkSilver")(a)};
  font-size: ${a=>(0,i.R)("fontSizes.0")(a)}px;
`,G=j.ZP.div`
  margin: 10px;
`,H=(0,j.ZP)(n.Z)`
  width: 100%;
`,I=(0,j.ZP)(m.Z)`
  padding: 8px 4px 8px 10px;
  font-size: 12px;
  font-family: ${a=>(0,i.R)("Helvetica")(a)};
  color: #8c8c8c;
  font-style: italic;
`,J=({onChange:a,payments:b})=>e.createElement(q,{"data-testid":"payments-list",onChange:a},["luizaCard","creditCard","pix","bankSlip"].map(a=>{var c;return!!(null!=b&&null!=(c=b[a])&&c.installmentPlans)&&e.createElement(o.OK,{value:b[a].id,key:`${a}-tab`,"data-testid":`${a}-tab`},e.createElement(p,null,e.createElement(f.JO$,{name:(0,h.kC)(a)})))}));J.defaultProps={payments:{}};var K=J;let L=`Cart\xe3o Luiza`,M=`Cart\xe3o de cr\xe9dito`,N=`Boleto banc\xe1rio`,O="% de desconto",P=`No boleto banc\xe1rio, que ser\xe1 gerado na finaliza\xe7\xe3o da sua compra.`,Q=`No PIX, com o c\xf3digo que ser\xe1 gerado na finaliza\xe7\xe3o da sua compra.`,R=a=>parseInt(a,10)>=10?`${a}x de`:`0${a}x de`;var S=c(31461);let T=a=>{let{installments:b,showAll:c,showMoreLabel:f,luizaCard:h}=a,i=(0,S.Z)(a,["installments","showAll","showMoreLabel","luizaCard"]),[j,k]=(0,e.useState)(c),l=a=>Boolean(Number((null==a?void 0:a.interestAmount)||0)),m=b.some(a=>!!Number(a.interestAmount)),n=a=>{let b=l(a);return(!b||h)&&(b||null===h)?null:e.createElement(F,{luizaCard:!b&&h},b?"com juros":"sem juros")};return e.createElement(e.Fragment,null,e.createElement(r,(0,d.Z)({allVisible:j},i),e.createElement(s,null,e.createElement("tr",null,e.createElement(u,null,e.createElement(t,null,"(Produto + Frete)"),e.createElement(A,null,"Numero de parcelas")),e.createElement(x,null,"Total"))),e.createElement("tbody",null,b.map((a,b)=>{let c=l(a);return e.createElement(z,{index:b,key:null==a?void 0:a.installment},e.createElement(v,null,e.createElement("span",null,Number(null==a?void 0:a.installment)>1&&R(null==a?void 0:a.installment)," ",e.createElement(w,null,(0,g.oB)({value:null==a?void 0:a.installmentAmount}),c&&h&&"*")),1===Number(null==a?void 0:a.installment)&&e.createElement(e.Fragment,null,!!Number((null==a?void 0:a.discount)||0)&&e.createElement(e.Fragment,null,e.createElement(D,{as:"span"},Number(null==a?void 0:a.discount),O))),n(a)),e.createElement(y,null,Number(null==a?void 0:a.installment)>1&&(0,g.oB)({value:null==a?void 0:a.totalAmount})))}))),m&&h&&e.createElement(I,{"data-testid":"legal-text"},"*Juros: Todos os encargos da opera\xe7\xe3o, como juros, custo de parcelamento e outras tarifas est\xe3o inclu\xeddas neste valor."),(b||[]).length>12&&!j&&e.createElement(H,{"data-testid":"show-more",size:"small",onClick:()=>k(!0)},f))};T.defaultProps={installments:[],showAll:!0,luizaCard:!1,showMoreLabel:"veja mais"};var U=T;let V=a=>Object.values(a).reduce((a,b)=>Object.assign({},a,{[b.id]:b}),{}),W=({asTab:a,showMoreLabel:b,onChange:c,payments:h})=>{var i,j,k,m,n,p,q,r,s,t,u,v;let{luizaCard:w,creditCard:x,bankSlip:y,pix:z}=h,[A,F]=(0,e.useState)((null==w?void 0:w.id)||(null==x?void 0:x.id)||(null==z?void 0:z.id)||(null==y?void 0:y.id)||""),H=V(h),I=(a,b)=>{F(b),c(H[b])},J=a?o.x4:l.Z,R=a?{width:"100%"}:{display:"block",flex:"1 1"};return e.createElement(o.q5,{value:A},a&&e.createElement(K,{onChange:I,payments:h}),e.createElement(l.Z,{justifyContent:"space-between",gap:2,flexWrap:"wrap"},(null==w?void 0:w.installmentPlans)&&e.createElement(J,(0,d.Z)({},R,{"data-testid":"luizaCard-panel",value:null==w?void 0:w.id}),e.createElement(B,null,!a&&e.createElement(f.OTZ,{mr:2})," ",L),e.createElement(U,{luizaCard:null==w?void 0:w.installmentPlans,showAll:a,"data-testid":"luizaCard-table",showMoreLabel:b,installments:w.installmentPlans})),(null==x?void 0:x.installmentPlans)&&e.createElement(J,(0,d.Z)({},R,{"data-testid":"creditCard-panel",value:null==x?void 0:x.id}),e.createElement(B,null,!a&&e.createElement(f.aBT,{mr:2})," ",M),e.createElement(e.Fragment,null,e.createElement(U,{showAll:a,"data-testid":"creditCard-table",showMoreLabel:b,installments:x.installmentPlans}))),z&&e.createElement(J,(0,d.Z)({},R,{"data-testid":"pix-panel",value:null==z?void 0:z.id}),e.createElement(B,null,!a&&e.createElement(f.wrL,{mr:2})," ","Pix"),e.createElement(G,null,e.createElement(C,null,(0,g.oB)({value:null==z?void 0:null==(i=z.installmentPlans)?void 0:null==(j=i[0])?void 0:j.installmentAmount})),!!Number(null==z?void 0:null==(k=z.installmentPlans)?void 0:null==(m=k[0])?void 0:m.discount)&&e.createElement(D,{as:"span"},Number(null==z?void 0:null==(n=z.installmentPlans)?void 0:null==(p=n[0])?void 0:p.discount),O),e.createElement(E,{fontSize:0},Q))),y&&e.createElement(J,(0,d.Z)({},R,{"data-testid":"bankSlip-panel",value:null==y?void 0:y.id}),e.createElement(B,null,!a&&e.createElement(f.c4o,{mr:2})," ",N),e.createElement(G,null,e.createElement(C,null,(0,g.oB)({value:null==y?void 0:null==(q=y.installmentPlans)?void 0:null==(r=q[0])?void 0:r.installmentAmount})),!!Number(null==y?void 0:null==(s=y.installmentPlans)?void 0:null==(t=s[0])?void 0:t.discount)&&e.createElement(D,{as:"span"},Number(null==y?void 0:null==(u=y.installmentPlans)?void 0:null==(v=u[0])?void 0:v.discount),O),e.createElement(E,{fontSize:0},P)))))};W.defaultProps={asTab:!0,showMoreLabel:"veja mais",onChange:()=>({}),payments:{}};var X=W},23745:function(a,b,c){c.d(b,{Z:function(){return H}});var d=c(2784),e=c(71180),f=c(19527),g=c(12468),h=c(31461),i=c(99673),j=c(68054),k=c(91489),l=c(63825),m=c(84546);let n=i.ZP.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`,o={[g.Co]:i.iv`
    padding: 4px 4px;
  `,[g.IY]:i.iv`
    padding: 12px 35px;
  `,DEFAULT:i.iv`
    padding: 12px 12px;
  `},p=i.ZP.span`
  font-size: ${a=>(0,k.R)("fontSizes.1")(a)}px;
  border-radius: 4px;
  color: ${a=>(0,k.uu)("light")(a)};
  display: inline-block;
  background-color: ${a=>(0,k.ow)("background.secondary")(a)};
  ${a=>o[a.display]||o.DEFAULT}
`,q=a=>a?3:5,r=(0,i.ZP)(m.Z).attrs(a=>({fontSize:[q(a.isList),5],lineHeight:"fontSize"}))`
  color: ${a=>(0,k.uu)("base")(a)};
  font-weight: ${a=>(0,k.R)("fontWeights.medium")(a)};
  align-self: end;
  position: relative;
  span {
    font-size: ${a=>{let{isList:b}=a,c=(0,h.Z)(a,["isList"]);return b?(0,k.R)("fontSizes.0")(c):(0,k.R)("fontSizes.1")(c)}}px;
    font-weight: ${a=>(0,k.R)("fontWeights.regular")(a)};
    line-height: ${a=>(0,k.R)("lineHeights.thin")(a)}px;
  }
  ${j.Dh}
  ${j.cp}
`,s=(0,i.ZP)(m.Z)`
  ${j.cp}
  margin-top: 8px;
  line-height: ${a=>(0,k.R)("lineHeights.big")(a)};
`,t=(0,i.ZP)(l.Z)`
  color: ${a=>(0,k.ow)("secondary.base")(a)};
  font-size: ${a=>(0,k.R)("fontSizes.0")(a)}px;
`,u=(0,i.ZP)(l.Z).attrs(({isList:a})=>({fontSize:[a?0:1,1],lineHeight:"fontSize",fontWeight:a?null:"regular",color:a?"text.scratched":"text.light"}))`
  margin: 0;
  text-align: left;
  text-decoration: line-through;
  ${j.cp}
  ${k.$_}
`,v=i.ZP.span`
  margin-left: 0.3rem;
`,w=(0,i.ZP)(l.Z)``,x=i.ZP.p`
  font-size: ${a=>(0,k.R)("fontSizes.0")(a)}px;
  font-weight: ${a=>(0,k.R)("fontWeights.regular")(a)};
  line-height: ${a=>(0,k.R)("lineHeights.standard")(a)}px;
`,y=(0,i.ZP)(r)`
  text-align: center;
  line-height: ${a=>(0,k.R)("lineHeights.small")(a)};
  letter-spacing: normal;
  font-size: ${a=>(0,k.R)("fontSizes.2")(a)}px;
  p {
    padding: 3px 0px 0px;
  }
`,z=(0,i.ZP)(m.Z)`
  line-height: 6px;
  margin-top: 8px;
  ${j.Dh}
`,A=i.ZP.div``,B="no Pix",C=({price:a,paymentMethodDescription:b,showInCashInfo:c})=>a?d.createElement(z,null,d.createElement(y,{"data-testid":"price-miniature"},(0,e.oB)({value:a})," ",c&&d.createElement(x,null,b||B))):d.createElement(A,{"data-testid":"empty-price-miniature"});C.defaultProps={price:"",paymentMethodDescription:"",showInCashInfo:!1};var D=C,E=c(97769);let F=({price:a,paymentMethodDescription:b,finalPrice:c,discount:g,installment:h,showInCashInfo:i,showDiscount:j,showDiscountOnlyCashInfo:k,isList:l})=>{let m=null==h?void 0:h.totalAmount;return d.createElement(s,null,d.createElement(r,{"data-testid":"price-default",isList:l},d.createElement(d.Fragment,null,c!==a&&d.createElement(u,{"data-testid":"price-original",isList:l},(0,e.oB)({value:a})),d.createElement(f.Z,{alignItems:"center"},d.createElement(w,{"data-testid":"price-value"},(0,e.oB)({value:c})),b?d.createElement(v,{"data-testid":"in-cash"},b," "):d.createElement(d.Fragment,null,(!m||parseFloat(c)<parseFloat(m))&&d.createElement(v,{"data-testid":"in-cash"},B))),i&&d.createElement(d.Fragment,null,j&&(!k||k&&!m||parseFloat(c)<parseFloat(m))&&d.createElement(t,{as:"span"},"(",`${Number(g)}% de desconto`,")")),h&&d.createElement(E.Z,{mt:2,information:h,isList:l}))))},G=({display:a,price:b,paymentMethodDescription:c,bestPrice:e,fullPrice:f,discount:h,installment:i,showInCashInfo:j,showDiscount:k,showDiscountOnlyCashInfo:l,isList:m})=>{let o=e||f||b,q=Boolean(j&&b!==o&&Number(h));return o?a===g.Co?d.createElement(D,{price:o,showInCashInfo:q,paymentMethodDescription:c}):d.createElement(F,{price:b,finalPrice:o,discount:h,installment:i,showInCashInfo:q,showDiscount:k,showDiscountOnlyCashInfo:l,paymentMethodDescription:c,isList:m}):d.createElement(n,{"data-testid":"price-unavailable"},d.createElement(p,{display:a},"Xiii, j\xe1 foi tudo :("))};G.defaultProps={display:g.yg,isList:!0,price:"",bestPrice:"",discount:"",installment:{amount:"",paymentMethodDescription:"",quantity:"",totalAmount:""},showInCashInfo:!0,showDiscount:!1,showDiscountOnlyCashInfo:!1};var H=G},58125:function(a,b,c){c.d(b,{Z:function(){return q}});var d=c(2784),e=c(71180),f=c(87043),g=c(63113),h=c(99673),i=c(91489);let j=(0,h.ZP)(f.rj).attrs(a=>Object.assign({my:3,mx:2,rowGap:3},a))`
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 0.5fr 0.5fr;
  grid-template-areas:
    'input-values input-values'
    'slider-input slider-input'
    'apply-button apply-button';
`,k=(0,h.ZP)(f.rj).attrs(a=>Object.assign({gap:2},a))`
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-area: input-values;
`,l=h.ZP.div`
  z-index: 0;
  grid-area: slider-input;
  position: relative;
`,m=(0,h.ZP)(f.xv)`
  color: ${a=>(0,i.uu)("scratched")(a)};
`,n=(0,h.ZP)(f.zx)`
  grid-area: apply-button;
`;var o=c(82753);let p=({item:a,onApply:b,min:c,max:h,initialMin:i,initialMax:p})=>{let[q,r]=(0,d.useState)(),[s,t]=(0,d.useState)(),[u,v]=(0,d.useState)(),[w,x]=(0,d.useState)();(0,d.useEffect)(()=>{r(100*i),v((0,g.Z)(100*i).currency)},[i]),(0,d.useEffect)(()=>{t(100*p),x((0,g.Z)(100*p).currency)},[p]);let y=q/100,z=s/100,A=y===i&&z===p||!(0,o.Z4)(y,z,c,h)||!(0,o.rx)(z,y,c,h),B=(a,b=!0)=>{let{amount:c,currency:d}=(0,g.Z)(b?100*a:a);t(c),x(d)},C=(a,b=!0)=>{let{amount:c,currency:d}=(0,g.Z)(b?100*a:a);r(c),v(d)},D=({currentMax:a,currentMin:b})=>{B(a),C(b)};return d.createElement(j,{"data-testid":"price"},d.createElement(k,null,d.createElement(f.kC,{flexDirection:"column",gap:1},d.createElement(m,{"data-testid":"price-range-min-label",fontSize:0},d.createElement(f.xv,{color:"inherit"},"M\xednimo:"),d.createElement(f.xv,{color:"inherit"},(0,e.oB)({value:100*c,rightFilling:!0}))),d.createElement(f.II,{"data-testid":"price-range-min-input",value:u,placeholder:"Ex: R$ 250,00",maxLength:15,onChange:a=>C(a.target.value,!1)})),d.createElement(f.kC,{flexDirection:"column",gap:1},d.createElement(m,{"data-testid":"price-range-max-label",fontSize:0},d.createElement(f.xv,{color:"inherit"},"M\xe1ximo:"),d.createElement(f.xv,{color:"inherit"},(0,e.oB)({value:100*h,rightFilling:!0}))),d.createElement(f.II,{"data-testid":"price-range-max-input",value:w,placeholder:"Ex: R$ 500,00",maxLength:15,onChange:a=>B(a.target.value,!1)}))),d.createElement(l,null,d.createElement(f.U2,{maxAllowed:parseFloat(h),minAllowed:parseFloat(c),currentMax:parseFloat(z),currentMin:parseFloat(y),onChange:D})),d.createElement(n,{"data-testid":"price-range-apply-btn",full:!0,onClick:c=>b(c,{min:parseFloat(q/100),max:parseFloat(s/100)},a),disabled:A},"Aplicar filtro"))};p.defaultProps={item:{},onApply:()=>{}};var q=p},65055:function(a,b,c){c.d(b,{Z:function(){return m}});var d=c(7896),e=c(31461),f=c(2784),g=c(70715),h=c(99673),i=c(91489),j=c(87043);let k=(0,h.ZP)(j.xu)`
  > *:not(:last-child) {
    border-bottom: ${(0,i.R)("borders.0")};
  }
`,l=a=>{let{options:b,selectedOption:c,onChange:h}=a,i=(0,e.Z)(a,["options","selectedOption","onChange"]);return f.createElement(k,null,null==b?void 0:b.map(a=>{let{value:b,label:e,selected:j}=a,k=j|| void 0!==b&&b===c|| void 0===b&&e===c;return f.createElement(g.Z,(0,d.Z)({key:b||e,value:b||e,label:e,checked:k,onChange:b=>h(b,a)},i))}))};l.defaultProps={options:[],selectedOption:"",onChange:()=>{}};var m=l},11151:function(a,b,c){c.d(b,{Z:function(){return o}});var d=c(2784),e=c(87043),f=c(99673),g=c(34490),h=c(91489),i=c(63825);let j=f.ZP.li`
  display: flex;
  align-items: center;
  column-gap: ${({columnGap:a})=>a||"8"}px;
`,k=(0,f.ZP)(i.Z)``,l=(0,f.ZP)(i.Z)`
  color: ${({color:a})=>(0,h.uu)(a||"light")};
`,m=(0,f.ZP)(g.Uxw)`
  margin-bottom: 1px;
`;function n({id:a,score:b,count:c,max:f,starColor:g,lineColor:h,fontweightScore:i,countColor:n,widthProgress:o,heightProgress:p,starSize:q,scoreFontSize:r,columnGap:s,as:t}){return d.createElement(j,{columnGap:s,as:t},d.createElement(e.kC,{alignItems:"center"},d.createElement(k,{fontSize:r,fontWeight:i},a),d.createElement(m,{width:q,height:q,color:g})),d.createElement(e.uk,{height:p,width:o,value:b,max:f,color:h}),d.createElement(l,{"data-testid":"rating-value",fontSize:r,color:n},c))}n.defaultProps={id:0,score:0,count:"0",widthProgress:"90px",heightProgress:"6px",as:"li",starSize:15,scoreFontSize:0,columnGap:8};var o=n},73172:function(a,b,c){c.d(b,{Z:function(){return o}});var d=c(7896),e=c(31461),f=c(2784),g=c(34490),h=c(99673),i=c(68054),j=c(91489),k=c(63825);let l=h.ZP.div`
  display: flex;
  align-items: center;
`,m=(0,h.ZP)(k.Z).attrs(a=>({fontSize:[a.fontSize||0,1,1],fontWeight:"regular",as:"span",color:"text.scratched"}))`
  display: inline-block;
  margin-left: 5px;
  ${a=>"label"===a.format&&h.iv`
      margin-bottom: 2px;
    `}
  ${i.cp}
  ${j.$_}
`,n=a=>{let{min:b,max:c,count:h,emptyOutline:i,minCount:j,score:k=0,format:n,label:o,fontSize:p,onClick:q}=a,r=(0,e.Z)(a,["min","max","count","emptyOutline","minCount","score","format","label","fontSize","onClick"]),s=Array.from(Array(c-b).keys()),t=Number.isInteger(k),u={count:h,label:o,"score-count":`${k.toFixed(1)||0} (${h})`},v=(a,b)=>t||b!==Math.floor(k)?!a&&i?"StarOutline":a?"StarOutline":"Star":"StarHalf",w=()=>0!==k||i?"stars.base":"stars.disabled";return f.createElement(l,{onClick:q,"data-testid":"review"},s.map(a=>{let b=k&&k<=a;return f.createElement(g.JO$,(0,d.Z)({name:v(b,a),key:`star-id-${a}`,"data-testid":`star-${b?"placeholder":"item"}`,color:w()},r))}),("label"===n||h>=j)&&f.createElement(m,{format:n,fontSize:p},u[n]))};n.defaultProps={count:0,minCount:.1,min:0,max:5,score:0,format:"count",emptyOutline:!1};var o=n},27408:function(a,b,c){c.d(b,{Z:function(){return n}});var d=c(7896),e=c(31461),f=c(2784),g=c(19527),h=c(76328),i=c(63825),j=c(29869),k=c(2761);let l={rating:h.Z,text:j.Z,recommendation:k.Z},m=(0,f.forwardRef)((a,b)=>{let{label:c,type:h,error:k,flexDirection:m,fontSize:n,fontWeight:o,alignItems:p,textAlign:q,gap:r}=a,s=(0,e.Z)(a,["label","type","error","flexDirection","fontSize","fontWeight","alignItems","textAlign","gap"]),t=l[h]||j.Z;return f.createElement(g.Z,{"data-testid":"review-input-wrapper",flexDirection:m,gap:r,width:1},f.createElement(i.Z,{"data-testid":"review-input-label",flex:"0.75",textAlign:q,fontSize:n,fontWeight:o,lineHeight:"input",paddingY:"2"},c),f.createElement(g.Z,{gap:"2",flex:"1",alignItems:p,flexDirection:["column",["recommendation","rating"].includes(h)?"row":"column"],"data-testid":"review-input-container"},f.createElement(t,(0,d.Z)({ref:b},!["rating","recommendation"].includes(h)&&{hasError:!!k},"textarea"===h&&{multiline:!0},s)),k&&f.createElement(i.Z,{color:"error.base"},k)))});m.defaultProps={error:null,flexDirection:null,fontSize:2,fontWeight:"regular",gap:30,label:null,textAlign:"right",alignItems:"start"},m.displayName="ReviewInput";var n=m},66457:function(a,b,c){c.d(b,{II:function(){return l},W1:function(){return j},xJ:function(){return k}});var d=c(31461),e=c(99673),f=c(91489),g=c(68054),h=c(34490),i=c(19527);let j=(0,e.ZP)(h.olm)`
  fill: ${(0,f.R)("palette.primary.base")};
  ${({desktopMode:a})=>a?e.iv`
          width: 22px;
          height: 22px;
          min-width: unset;
        `:e.iv`
          width: 30px;
        `}
`,k=(0,e.ZP)(i.Z)`
  align-items: center;
  width: 100%;
  border: 0;
  padding: ${(0,f.R)("space.1")}px ${(0,f.R)("space.2")}px;

  svg {
    cursor: pointer;
    min-width: 18px;
  }
  ${({desktopMode:a})=>!a&&e.iv`
      background-color: ${a=>(0,f.dF)("white")(a)};
      border-radius: ${(0,f.R)("radii.default")};
    `}
  ${({inputChange:a})=>a&&e.iv`
      ${({desktopMode:a})=>a?e.iv`
              border-bottom: 1px solid ${(0,f.kJ)("whisper")};
            `:e.iv`
              box-shadow: ${(0,f.R)("boxShadows.4")};
              z-index: ${(0,f.R)("zIndices.3")};
              border-radius: unset;
            `};
    `}
  form {
    width: 100%;
    ${({desktopMode:a})=>!a&&e.iv`
        padding-left: ${(0,f.R)("space.1")}px;
      `};
  }
`,l=e.ZP.input.attrs(a=>Object.assign({fontSize:1},a))`
  color: ${a=>{let{isChanging:b,desktopMode:c}=a,e=(0,d.Z)(a,["isChanging","desktopMode"]);return(0,f.uu)(b&&!c?"primary":"light")(e)}};
  caret-color: ${(0,f.uu)("light")};
  width: 100%;
  border: 0px;
  -webkit-appearance: textfield;

  ::placeholder {
    color: ${(0,f.uu)("light")};
  }

  ::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }
  ${g.cp}
`},37222:function(a,b,c){c.d(b,{Z:function(){return K}});var d=c(7896),e=c(31461),f=c(2784),g=c(34490),h=c(99673),i=c(91489),j=c(68054),k=c(87043);let l=(0,h.ZP)(k.kC).attrs(a=>Object.assign({bg:"background.lighter"},a))`
  position: relative;
  border-radius: ${({desktopMode:a})=>a?2:6}px;
  align-items: center;
  flex-direction: column;
  width: 100%;

  ${({inputChange:a})=>a&&h.iv`
      align-items: baseline;
      left: 0;
      z-index: ${(0,i.R)("zIndices.3")};

      ${({desktopMode:a})=>a?h.iv`
              top: 0;
              border: 1px solid ${(0,i.kJ)("whisper")};
            `:h.iv`
              top: 3px;
              margin-left: -9px;
              width: calc(100% + 18px);
              border-radius: 0;
              padding: ${(0,i.R)("space.1")}px 0;
            `};
    `}

  ${i.$_}
`,m=h.ZP.div.attrs(a=>Object.assign({bg:"background.overlay",zIndex:1,top:40,left:0},a))`
  position: absolute;
  width: 100%;
  height: 100vh;
  opacity: 'block';
  display: 'block';
  ${i.$_}
  ${j.FK}
`,n=(0,h.ZP)(k.xu).attrs(a=>Object.assign({fontSize:1,color:"text.scratched"},a))`
  ${j.cp}
  ${i.$_}
`;var o=c(41065),p=c(84546);let q=h.ZP.div.attrs(a=>Object.assign({bg:"background.lighter",p:3},a))`
  background-color: ${a=>(0,i.dF)("white")(a)};
  z-index: ${(0,i.R)("zIndices.2")};
  width: 100%;
  ${a=>a.desktopMode&&!a.isEmpty&&h.iv`
      position: absolute;
      width: inherit;
      top: 34px;
      ${i.$_}
      ${j.Dh}
    `}
`,r=h.ZP.div.attrs(a=>Object.assign({mb:a.isEmpty?0:3,zIndex:2},a))`
  ${j.Dh};
`,s=(0,h.ZP)(p.Z).attrs(a=>Object.assign({fontSize:2,fontWeight:"bold",color:"text.primary",pb:2,mb:1},a))`
  width: fit-content;
  border-bottom: 1px solid ${(0,i.kJ)("whisper")};

  ${i.$_}
  ${j.cp}
`,t=({desktopMode:a,handleClickProduct:b,handleClickSuggest:c,products:d,productsSuggestions:e,suggestions:g,suggestionsPrefix:h,term:i})=>f.createElement(q,{desktopMode:a,isEmpty:0===Object.values(g).length&&0===Object.values(d).length},f.createElement(r,{isEmpty:0===Object.values(g).length&&0===Object.values(d).length},a&&Object.values(g).length>0&&f.createElement(s,{"data-testid":"suggestion-title"},"sugest\xf5es de resultados"),f.createElement("ul",null,Object.values(g).map(b=>f.createElement(o.Z,{desktopMode:a,prefix:h,term:i,key:b.count,item:b,onSearchSubmit:a=>c(a,null==b?void 0:b.term,"clickSuggestion")})))),a&&e&&Object.values(e).length>0&&f.createElement(f.Fragment,null,f.createElement(s,{"data-testid":"suggestion-title"},"sugest\xf5es de produtos"),f.createElement("ul",null,Object.values(e).map(c=>f.createElement(o.Z,{desktopMode:a,term:i,key:c.id,item:c,borderBottom:!0,onSearchSubmit:a=>b(a,c)})))));t.defaultProps={autocompleteRef:{},desktopMode:!1,products:[],suggestions:[],suggestionsPrefix:"",term:""};var u=t,v=c(82469);let w=(0,h.ZP)(k.xu).attrs(a=>Object.assign({bg:"background.lighter",p:2,zIndex:2},a))`
  background-color: ${a=>(0,i.dF)("white")(a)};
  z-index: ${(0,i.R)("zIndices.2")};
  width: 100%;
  ${a=>a.desktopMode&&!a.isEmpty&&h.iv`
      position: absolute;
      width: inherit;
      top: 34px;
      ${i.$_}
      ${j.Dh}
    `}
`,x=h.ZP.div.attrs(a=>Object.assign({mb:a.isEmpty?0:3},a))`
  ${j.Dh};
`,y=a=>f.createElement(k.xu,{bg:"background.primary",p:2,borderRadius:2},a),z=({desktopMode:a,list:b,label:c,handleClickTopTerm:d})=>f.createElement(w,{"data-testid":"top-terms-container",desktopMode:a,isEmpty:0===b.length},f.createElement(x,{isEmpty:0===b.length},b.length>0&&f.createElement(v.aV,{divided:!0},f.createElement(v.aV.Header,{"data-testid":"top-terms-header",fontSize:1,fontWeight:"bold",color:"text.scratched",pb:2,mb:1},c),b.map((a,b)=>f.createElement(v.aV.Item,{"data-testid":"top-terms-item",key:`top-term-${b}`,startIcon:y(b+1),fill:"red",onClick:b=>d(b,a),fontSize:2},a.term)))));z.defaultProps={desktopMode:!1};var A=z,B=c(33055),C=c(66457);let D=a=>{let{desktopMode:b,handleClear:c,handleClose:h,handleOpen:i,handleSubmit:j,handleType:k,inputChange:l,keypressHandler:m,term:n,disableClear:o}=a,p=(0,e.Z)(a,["desktopMode","handleClear","handleClose","handleOpen","handleSubmit","handleType","inputChange","keypressHandler","term","disableClear"]);return f.createElement(C.xJ,{"data-testid":"input-container",inputChange:l,desktopMode:b},!b&&l&&f.createElement(g.xhZ,{color:"#818181","data-testid":"arrow-back",onClick:h}),f.createElement("form",{"data-testid":"form-search",onSubmit:a=>j(a,"submit"),autoComplete:"off"},f.createElement(B.Z,{text:"Procure no magalu",htmlFor:"input-search"}),f.createElement(C.II,(0,d.Z)({},p,{onChange:a=>k(a),onClick:i,value:n,id:"input-search",type:"search",isChanging:l,desktopMode:b,onKeyDown:m,"data-testid":"input-search",accessKey:"s"}))),(!o|| !b&&l&&""!==n)&&f.createElement(g.B86,{"data-testid":"close-circle",color:"#818181",onClick:c,width:17,height:17,margin:o?"unset":"0 16px",marginRight:2,marginBottom:"1px"}),f.createElement(C.W1,{"aria-label":"Buscar produto","data-testid":"search-submit",desktopMode:b,onClick:a=>j(a,"icon"),role:"button",tabIndex:"0"}))};D.defaultProps={desktopMode:!1,inputChange:!1,disableClear:!0,term:""};var E=D,F=c(82753);let G=(a,b)=>a&&""===b,H=a=>a?f.createElement(n,null,"+"):f.createElement(g.olm,{color:"#818181"}),I=(a,b)=>{27===a.keyCode&&b()},J=a=>{let{onSearch:b,onTypeChange:c,onInputClear:g,onInputClose:h,onInputOpen:i,onSuggestItemClick:j,onProductItemClick:k,onTopTermItemClick:n,initialValue:o,list:p,products:q,desktopMode:r,topTerms:s}=a,t=(0,e.Z)(a,["onSearch","onTypeChange","onInputClear","onInputClose","onInputOpen","onSuggestItemClick","onProductItemClick","onTopTermItemClick","initialValue","list","products","desktopMode","topTerms"]),[v,w]=(0,f.useState)(o),[x,y]=(0,f.useState)(!1),[z,B]=(0,f.useState)(p),[C,D]=(0,f.useState)(q),J=H(r),{shouldDisplay:K,list:L}=s;(0,f.useEffect)(()=>{B(p||[])},[p]),(0,f.useEffect)(()=>{D(q)},[q]),(0,f.useEffect)(()=>{w(o)},[o]);let M=(a,c)=>{if(!v.trim()){a.preventDefault();return}y(!1),b(a,v,c)},N=a=>{let b=a.target.value;y(!G(r,b)),w(b),c(b)},O=(a,c,d)=>{j(c,d),y(!1),w(c),b(a,c,d)},P=(a,c)=>{let{term:d}=c;n(c),y(!1),w(d),b(a,d)},Q=(a,b)=>{y(!1),w(""),k(a,b)},R=()=>{g(),w("")},S=()=>{h(),y(!1)},T=()=>{i(),y(!0)},U=(0,f.useRef)();return(0,F.t$)(U,()=>{(x||K)&&S()}),f.createElement(f.Fragment,null,f.createElement(l,{inputChange:x,desktopMode:r,ref:U,id:"search-container","data-testid":"search-input-container"},f.createElement(E,(0,d.Z)({desktopMode:r,handleClear:R,handleClose:S,handleOpen:T,handleSubmit:M,handleType:N,inputChange:x,keypressHandler:a=>I(a,S),term:v},t)),K?L?f.createElement(A,(0,d.Z)({},s,{desktopMode:r,handleClickTopTerm:P})):f.createElement(f.Fragment,null):x&&p?f.createElement(u,{desktopMode:r,handleClickProduct:Q,handleClickSuggest:O,handleClose:S,products:q,productsSuggestions:C,suggestions:z,suggestionsPrefix:J,term:v}):f.createElement(f.Fragment,null),!r&&x&&f.createElement(m,{"data-testid":"input-overlay",onTouchMove:S,onClick:S})))};J.defaultProps={list:[],products:[],initialValue:"",onInputClear:()=>{},onSuggestItemClick:()=>{},onProductItemClick:()=>{},onTopTermItemClick:()=>{},onInputClose:()=>{},onInputOpen:()=>{},desktopMode:!1,topTerms:{shouldDisplay:!1,label:"Mais Buscados",list:[]}};var K=J},57991:function(a,b,c){c.d(b,{Z:function(){return u}});var d=c(7896),e=c(31461),f=c(2784),g=c(99673),h=c(68054),i=c(34490),j=c(91489),k=c(19527),l=c(63825);let m=(0,g.ZP)(k.Z).attrs(a=>Object.assign({bg:"background.base",borderRadius:"medium"},a))`
  position: relative;
  padding: 16px 12px;
  align-items: center;
  cursor: pointer;

  ${h.Cg}
  ${j.$_}
`,n=(0,g.ZP)(k.Z).attrs(a=>Object.assign({bg:"background.base",borderRadius:"medium",zIndex:4},a))`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.7;
  display: flex;
  justify-content: center;
  align-items: center;

  ${h.Cg}
  ${j.$_}
`,o=(0,g.ZP)(i.hq5).attrs({width:24,height:24})``,p=(0,g.ZP)(i.lO8)`
  margin-right: 12px;
  flex-grow: 0;
  width: 18px;
  height: 18px;
  ${j.$_}
`,q=(0,g.ZP)(l.Z)`
  flex-grow: 1;
  font-size: ${a=>(0,j.R)("fontSizes.1")(a)}px;
`,r=(0,g.ZP)(l.Z)`
  flex-grow: 0;
  font-size: ${a=>(0,j.R)("fontSizes.1")(a)}px;
  color: ${a=>(0,j.ow)("primary.base")(a)};
`;var s=c(82753);let t=a=>{let{placeholder:b,changeLabel:c,actionLabel:g,disabled:h,done:i,loading:j,onClick:k,location:l,maxCityLength:t}=a,u=(0,e.Z)(a,["placeholder","changeLabel","actionLabel","disabled","done","loading","onClick","location","maxCityLength"]),v=l&&Object.keys(l).length?(0,s.RZ)(Object.assign({},l,{maxCityLength:t,includeAddress:!1})):"";return f.createElement(m,(0,d.Z)({},u,{onClick:j||h?()=>{}:k,"data-testid":"shipping-button"}),(j||h)&&f.createElement(n,{"data-testid":"shipping-disabled"},j&&f.createElement(o,null)),f.createElement(p,{fill:"primary.base"}),f.createElement(q,{as:"span"},v||b),!!v&&f.createElement(r,{as:"span"},i?c:g))};t.defaultProps={placeholder:"Calcular frete e prazo",changeLabel:"alterar",actionLabel:"calcular",disabled:!1,loading:!1,done:!1,onClick:()=>{},location:{},maxCityLength:24};var u=t},15185:function(a,b,c){c.d(b,{Z:function(){return j}});var d=c(2784),e=c(34490),f=c(87043),g=c(99673);let h=g.ZP.div`
  & > svg {
    transform: scale(2.5);
  }
`,i=({amount:a,nullable:b,truncateAmountThreshold:c,backgroundColor:g,fontColor:i="#fff",counterColor:j="#58c22e",iconColor:k="#fff",onClick:l})=>d.createElement(f.fG,{amount:a,nullable:b,truncateAmountThreshold:c,backgroundColor:g,counterColor:j,fontColor:i,onClick:l},d.createElement(h,null,d.createElement(e.JO$,{name:"ShoppingBag",color:k})));i.defaultProps={amount:0,onClick:()=>{},nullable:!0};var j=i},51382:function(a,b,c){c.d(b,{Z:function(){return n}});var d=c(31461),e=c(2784),f=c(34490),g=c(99673),h=c(91489),i=c(84546);let j=(0,g.ZP)(i.Z)`
  position: relative;
  cursor: pointer;
`,k=g.ZP.div`
  visibility: ${a=>a.open?"visible":"hidden"};
  background-color: ${a=>(0,h.dF)("lighter")(a)};
  border-radius: 6px;
  padding: 10px;
  width: 190px;

  display: flex;
  justify-content: space-around;
  align-items: center;
  top: 110%;
  right: 0px;
  position: absolute;
  z-index: ${a=>(0,h.R)("zIndices.0")(a)};
  box-shadow: ${a=>(0,h.R)("elevations.4")(a)};
`,l=g.ZP.a`
  background-color: ${a=>(0,h.dF)("primary")(a)};
  width: 32px;
  height: 32px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  & > svg {
    width: 16px;
  }
`;function m(a){let{socialItems:b,onItemClick:c}=a,g=(0,d.Z)(a,["socialItems","onItemClick"]),[h,i]=(0,e.useState)(!1);return e.createElement(j,g,e.createElement(f.mBz,{height:"24",color:"#818181",onClick:()=>i(!h),"data-testid":"social-share"}),e.createElement(k,{open:h,"data-testid":"social-content"},b.map(({title:a,url:b,Icon:d})=>e.createElement(l,{key:a,href:b,target:"_blank",onClick:b=>c(b,a)},d))))}m.defaultProps={socialItems:[],onItemClick:()=>{}};var n=m},50919:function(a,b,c){c.d(b,{Z:function(){return p}});var d=c(31461),e=c(2784),f=c(99673),g=c(91489),h=c(87043);let i=(0,f.ZP)(h.xu).attrs(a=>Object.assign({forwardedAs:"table"},a))`
  list-style: none;

  tbody > tr > td {
    padding: 5px;
  }
`,j=f.ZP.td`
  font-weight: bold;
  color: ${a=>(0,g.R)("colors.darkSilver")(a)};
  background: ${a=>(0,g.dF)("base")(a)};
  display: ${({layout:a})=>"horizontal"===a?"table-cell":"list-item"};
  width: ${({layout:a})=>"horizontal"===a?"20%":"100%"};
`,k=f.ZP.td`
  display: list-item;
  width: 100%;
  padding: 5px;
`,l=f.ZP.td`
  width: 40%;
`,m=f.ZP.table`
  width: 100%;
  td:first-child {
    display: table-cell;
  }
  tr {
    display: table-row;
    vertical-align: middle;
  }
`,n=(0,f.ZP)(h.rU)`
  text-decoration: underline;
  font-size: inherit;

  &:hover {
    color: ${a=>(0,g.uu)("primary")(a)};
  }
`;function o(a){var b;let{data:c,layout:f}=a,g=(0,d.Z)(a,["data","layout"]),h=a=>a.isLink?e.createElement(n,{href:a.path},null==a?void 0:a.value):null==a?void 0:a.value;return e.createElement(i,g,e.createElement("tbody",null,null==c?void 0:null==(b=c.elements)?void 0:b.map(a=>{var b;return e.createElement("tr",{key:a.slug},e.createElement(j,{layout:f},a.keyName),e.createElement(k,null,e.createElement(m,null,e.createElement("tbody",null,null==a?void 0:null==(b=a.elements)?void 0:b.map((a,b)=>e.createElement("tr",{key:b},a.keyName&&e.createElement(l,null,a.keyName),e.createElement("td",null,h(a))))))))})))}o.defaultProps={color:"text.base",fontSize:0,layout:"vertical"};var p=o},93168:function(a,b,c){c.d(b,{Z:function(){return p}});var d=c(7896),e=c(31461),f=c(2784),g=c(99673),h=c(91489),i=c(87043);let j=(0,g.ZP)(i.kC).attrs({position:"relative",justifyContent:"space-between",alignItems:"stretch",width:"100%",px:2})(({count:a})=>3===a&&{"& > *:nth-child(2)":{position:"absolute",left:"50%",top:"50%",height:"100%",transform:"translate(-50%,-50%)"}},h.bU,h.bA);var k=c(34490),l=c(10200);let m=a=>{let{children:b,endIcon:c,startIcon:g}=a,h=(0,e.Z)(a,["children","endIcon","startIcon"]),i=a=>a&&"string"==typeof a?f.createElement(k.JO$,{name:a}):a;return f.createElement(l.Z,(0,d.Z)({"data-testid":"toolbar-item"},h),i(g),b,i(c))};m.defaultProps={children:null,color:"inherit",underlineOnHover:!1,fontSize:1,fontWeight:"medium",gap:1};let n=a=>{let{onChange:b}=a,c=(0,e.Z)(a,["onChange"]),d=f.Children.toArray(null==c?void 0:c.children),[g,h]=(0,f.useState)(0),i=()=>{if(g>=d.length-1){h(0);return}h(g+1)};(0,f.useEffect)(()=>{let{props:{value:a,children:c}}=d[g];b({id:a,label:c})},[g]);let j=d.map(a=>f.cloneElement(a,{onClick:i}));return j[g]},o=a=>{let{children:b}=a,c=(0,e.Z)(a,["children"]);return f.createElement(j,(0,d.Z)({count:f.Children.count(b),"data-testid":"toolbar"},c),b)};o.defaultProps={children:null,variant:"transparent",scale:"medium"},o.Item=m,o.Toggle=n;var p=o},41237:function(a,b,c){c.d(b,{Z:function(){return v}});var d=c(2784),e=c(19527),f=c(31461),g=c(99673),h=c(91489),i=c(34490),j=c(60861),k=c(29869),l=c(63825);let m=g.ZP.form`
  position: relative;
`,n=g.ZP.label`
  font-weight: ${a=>(0,h.R)("fontWeights.regular")(a)};
  font-size: ${a=>(0,h.R)("fontSizes.0")(a)}px;
  color: ${a=>{let{hasError:b}=a,c=(0,f.Z)(a,["hasError"]);return(0,h.ow)(b?"error.base":"base")(c)}};
`,o=(0,g.ZP)(k.Z)`
  border: 0;
  width: 100%;
  border-radius: 0;
  border-bottom: 1px solid;
  border-color: ${a=>{let{hasError:b}=a,c=(0,f.Z)(a,["hasError"]);return(0,h.ow)(b?"error.base":"base")(c)}};
  padding: 0 0 ${a=>(0,h.R)("space.2")(a)}px;
  line-height: ${a=>(0,h.R)("lineHeights.input")(a)};
  font-size: ${a=>(0,h.R)("fontSizes.2")(a)}px;
  background-color: transparent;
  margin-top: 4px;
  &::placeholder {
    color: ${a=>(0,h.uu)("greyish")(a)};
  }
`,p=g.ZP.div`
  width: 100%;
  opacity: 0.8;
  position: absolute;
  text-align: center;
  background-color: ${a=>(0,h.dF)("base")(a)};
  z-index: ${a=>(0,h.R)("zIndices.0")(a)};
`,q=(0,g.ZP)(i.gXO).attrs(a=>({color:(0,h.ow)("primary")(a)}))`
  height: 40px;
`,r=(0,g.ZP)(j.Z).attrs(()=>({m:"14px 0"}))`
  width: 70%;
`,s=(0,g.ZP)(l.Z).attrs(()=>({forwardedAs:"span",color:"text.primary",fontSize:1,fontWeight:"medium",textAlign:"center",textTransform:"uppercase"}))`
  cursor: pointer;
  margin: 14px;
  text-transform: uppercase;
  width: 70%;
`;var t=c(7874);function u({errorText:a,hasError:b,initialValue:c,labelText:f,loading:g,locationButtonText:h,onChange:i,placeholder:j,showButton:k,inputButtonText:l,onClickLocationButton:u}){let[v,w]=(0,d.useState)((0,t.Z)(c)),x=a=>{a.preventDefault();let{value:b}=a.target;w((0,t.Z)(b)),i(a,a.target.value)},y=a=>{a.preventDefault(),w((0,t.Z)(v)),i(a,v)};return d.createElement(m,{onSubmit:y},d.createElement(n,{"data-testid":"zipcode-label",hasError:b,htmlFor:"zipcode"},b?a:f),g&&d.createElement(p,{"data-testid":"zipcode-loading"},d.createElement(q,null)),d.createElement(o,{"data-testid":"zipcode-input",hasError:b,autoFocus:!0,id:"zipcode",name:"zipcode",type:"text",inputMode:"numeric",maxLength:9,placeholder:j,onChange:x,value:v,onInput:x,disabled:g}),k&&d.createElement(e.Z,{flexDirection:"column",alignItems:"center",my:2},l&&d.createElement(r,{disabled:9!==v.length,"data-testid":"zipcode-button"},l),h&&d.createElement(s,{"data-testid":"location-button",variation:"outline",boxShadow:"none",onClick:u},h)))}u.defaultProps={hasError:!1,initialValue:"",loading:!1,locationButtonText:void 0,onChange:void 0,showButton:!1,inputButtonText:void 0,onClickLocationButton:()=>{}};var v=u},1587:function(a,b,c){c.d(b,{Z:function(){return p}});var d=c(2784),e=c(99673),f=c(91489),g=c(34490),h=c(19527);let i=(0,e.ZP)(h.Z)`
  align-items: center;
  max-height: 44px;
  cursor: pointer;
`,j=(0,e.ZP)(h.Z).attrs(()=>({alignItems:["center","flex-start","flex-start"],color:"text.lightest",flexDirection:["row","column","column"],fontSize:0,fontWeight:"normal"}))``,k=(0,e.ZP)(j).attrs(()=>({ml:[1,0,0],fontWeight:"bold"}))``,l=(0,e.ZP)(h.Z)`
  ${(0,f.aK)("small")} {
    max-height: 44px;
    max-width: 44px;
    width: 100%;
  }
`,m=(0,e.ZP)(g.lO8).attrs(a=>({color:(0,f.uu)("lightest")(a)}))``;var n=c(82753);let o=({city:a,defaultText:b,formatter:c,iconHeight:e,iconWidth:f,state:g,text:h,zipcode:o})=>{let p=(0,n.RZ)({formatter:c,zipCode:o,zipCodeCity:a,zipCodeState:g,includeAddress:!1});return d.createElement(i,null,d.createElement(l,null,d.createElement(m,{width:f,height:e})),d.createElement(j,{"data-testid":"text-line"},o&&g&&a?d.createElement(d.Fragment,null,h," ",c?d.createElement(k,null,p):p):b))};o.defaultProps={city:void 0,formatter:void 0,iconHeight:void 0,iconWidth:void 0,state:void 0,zipcode:void 0};var p=o},82469:function(a,b,c){c.d(b,{iG:function(){return aN.Z},QP:function(){return d.Z},qE:function(){return n.Z},Ct:function(){return o.Z},lr:function(){return p.Z},g0:function(){return B},HS:function(){return C.Z},L2:function(){return D.Z},pl:function(){return aI},hU:function(){return F.Z},aV:function(){return J.Z},RG:function(){return ax},mY:function(){return P},dV:function(){return m},tA:function(){return Q.Z},MS:function(){return R.Z},lF:function(){return aS},Ee:function(){return aJ.Z},me:function(){return S.Z},Cq:function(){return T.Z},qr:function(){return aP.Z},Mj:function(){return U.Z},KI:function(){return ah},kV:function(){return ai.Z},ok:function(){return aM},Rs:function(){return aA},YQ:function(){return aO.Z}}),c(33309);var d=c(52337),e=c(7896),f=c(31461),g=c(2784),h=c(34490),i=c(87043),j=c(82753),k=c(12468);let l=a=>{let{restrictions:b={},height:c,fontSize:d,displayMode:l}=a,m=(0,f.Z)(a,["restrictions","height","fontSize","displayMode"]),[n,o]=(0,g.useState)({showTimer:!1,timeRemaining:""}),p=(0,g.useRef)(),q=l===k.IY,r=()=>{let a=(0,j.bd)(),{show:c,timeRemainingFormatted:d}=(0,j.lb)(b,a);o({showTimer:c,timeRemaining:d})};return(0,g.useEffect)(()=>{let a=()=>{r(),p.current=requestAnimationFrame(a)};return p.current=requestAnimationFrame(a),()=>cancelAnimationFrame(p.current)},[]),n.showTimer&&g.createElement(i.kC,(0,e.Z)({"data-testid":"offer-timer",borderRadius:2,justifyContent:"center",alignItems:"center",bg:"#EC7712",height:c,mt:[q&&1,2],mr:q?"10px":0},m),g.createElement(h.JO$,{color:"#FFF5F0",height:["12px","14px"],width:["12px","14px"],name:"Timer",mr:1}),g.createElement(i.xv,{color:"white",fontWeight:"medium",fontSize:d},"Oferta termina em ",n.timeRemaining))};l.defaultProps={height:"20px",fontSize:"10px",displayMode:k.IY};var m=l,n=c(78045);c(96504);var o=c(98460);c(67619);var p=c(49542);c(2761),c(84022),c(12241);var q=c(99673),r=c(91489),s=c(63825),t=c(19527);let u=(0,q.ZP)(t.Z)`
  display: flex;
  justify-content: ${a=>a.carousel?"start":"center"};
  align-content: center;
  padding: 12px;
  overflow-x: scroll;
`;(0,q.ZP)(s.Z)`
  color: ${a=>(0,r.uu)("scratched")(a)};
  display: block;
  margin-bottom: 8px;
  font-size: ${a=>(0,r.R)("fontSizes.0")(a)}px;
`;let v=(0,q.ZP)(t.Z)`
  display: flex;
  align-items: center;
  justify-content: center;
`,w=(0,q.ZP)(t.Z)`
  scroll-snap-align: center;
  justify-content: center;
  align-items: center;
  padding: 4px 16px;
  line-height: 1.17;
  color: ${a=>a.selected?(0,r.uu)("base")(a):(0,r.uu)("lightest")(a)};
  margin-right: 8px;
  background-color: ${a=>a.selected?(0,r.dF)("primary")(a):(0,r.dF)("lighter")(a)};
  border-radius: 20px;
  height: 38px;

  > svg {
    margin-right: 4px;
    fill: ${a=>a.selected?(0,r.uu)("lightest")(a):(0,r.uu)("base")(a)};
  }
  max-width: 144px;
`,x=(0,q.ZP)(s.Z)`
  width: 81px;
  font-size: ${a=>(0,r.R)("fontSizes.0")(a)}px;
  font-weight: ${a=>(0,r.R)("fontWeights.regular")(a)};
  font-stretch: normal;
  font-style: normal;
  line-height: ${a=>(0,r.R)("lineHeights.standard")(a)}px;
  letter-spacing: normal;
  color: ${a=>a.selected?(0,r.uu)("lightest")(a):(0,r.uu)("base")(a)};
`;function y({item:a,onChange:b}){let{slug:c,label:d,selected:e}=a;return g.createElement(w,{onClick:()=>b(!e&&c||null),selected:e,"data-testid":`opt-${c}`},(a=>{let b={"24c":h.f9j,delivery_plus_1:h._Ps,store_pickup:h.XqY,delivery_24h:h.Ju,delivery_1h:h.Gb7,"magalu-entregas":h.Erv,"magalu-partner":h.lO8,today:h.oFb},c=b[a]||h._Ps;return g.createElement(c,null)})(c),g.createElement(x,{selected:e},d))}y.defaultProps={item:{},onChange:null},(function({data:a,onChange:b}){let{items:c}=a;function d(a){b(a&&{type:"delivery_magalu",value:a})}return g.createElement(u,{carousel:(null==c?void 0:c.length)>2},g.createElement(v,null,null==c?void 0:c.map((a,b)=>g.createElement(y,{"data-testid":"filter-option",key:`filter-option-${a.slug}-${b}`,onChange:d,item:a}))))}).defaultProps={onChange:null};let z=(0,q.ZP)(i.rU).attrs(()=>({fontSize:2,fontWeight:"900",underlineOnHover:!0,hover:!0,padding:0,color:"primary.base"}))``,A=({data:a,handleClickLink:b})=>g.createElement(g.Fragment,null,null==a?void 0:a.map((a,c)=>"string"==typeof a?a:null!=a&&a.href?g.createElement(z,(0,e.Z)({key:c,"data-testid":"dynamic-text-link",href:null==a?void 0:a.href,onClick:c=>b(c,a)},a),null==a?void 0:a.value):g.createElement(i.xv,(0,e.Z)({key:c},a,{as:"span"}),null==a?void 0:a.value)));A.defaultProps={data:[],handleClickLink:()=>{}};var B=A,C=c(99554),D=c(1729),E=c(33055);c(2490);var F=c(15309);c(97769);let G=q.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,H={normal:q.iv`
    font-size: ${a=>(0,r.R)("fontSizes.2")(a)}px;
  `,big:q.iv`
    font-size: ${a=>(0,r.R)("fontSizes.4")(a)}px;
    font-weight: ${a=>(0,r.R)("fontWeights.bold")(a)};
  `},I=(0,q.ZP)(s.Z)`
  color: ${a=>(0,r.uu)("base")(a)};
  margin-bottom: 5px;

  ${a=>H[a.type]}
`;(function({label:a,type:b}){let c=Array.from([,,,,,].keys()),d="normal"===b?"30px":"40px";return g.createElement(G,null,g.createElement(I,{type:b,"data-testid":"title"},a),g.createElement("ul",null,c.map(a=>g.createElement(h.Uxw,{key:`star-${a}`,color:"#FFCC03",width:d,height:d}))))}).defaultProps={size:"30px",type:"normal"};var J=c(78012);c(33359),c(41065);var K=c(71180);let L=q.ZP.div`
  display: flex;
  align-items: center;
  background-color: ${a=>a.color||"#fff"};
  border-radius: 6px;
  padding: 3px 5px;
  cursor: default;
`,M=q.ZP.button`
  background: none;
  border: none;
  cursor: pointer;
  line-height: 0px;
`,N=q.ZP.p`
  font-size: ${a=>(0,r.R)("fontSizes.0")(a)}px;
  font-weight: ${a=>(0,r.R)("fontWeights.bold")(a)};
  color: ${a=>a.color||"#fff"};
  margin: 0 5px;
`,O=({value:a,color:b,icon:c,textColor:d,onClick:e,hasInfo:f})=>g.createElement(L,{color:b,"data-testid":"loyalty",onClick:a=>{a.preventDefault(),a.stopPropagation()}},c&&g.createElement(h.JO$,{"data-testid":`${c}Icon`,name:c,width:"12px",height:"12px",color:"#fff"}),g.createElement(N,{color:d,"data-testid":"loyalty-value"},(0,K.oB)({value:parseFloat(a)})),f&&g.createElement(M,{"data-testid":"loyalty-info-button",onClick:e},g.createElement(h.JO$,{name:"HelpOutline",color:"none",width:"12px",height:"12px"})));O.defaultProps={hasInfo:!1,color:void 0};var P=O;c(28982),c(19620),c(81484),c(563);var Q=c(23745),R=c(58125),S=c(11151),T=c(73172),U=c(37222);c(57991);var V=c(97728);let W=q.iv`
  margin-right: 12px;
  flex-grow: 0;
  width: 30px;
  height: 30px;
`,X=(0,q.ZP)(i.kC)`
  padding: 16px 12px;
  align-items: center;
`,Y=(0,q.ZP)(h._Ps)`
  ${W}
  ${r.$_}
`,Z=(0,q.ZP)(h.XqY)`
  ${W}
  ${r.$_}
`,$=(0,q.ZP)(h.Gb7)`
  ${W}
  ${r.$_}
`,_=(0,q.ZP)(h.f9j)`
  ${W}
  ${r.$_}
`,aa=(0,q.ZP)(h.Ju)`
  ${W}
  ${r.$_}
`,ab=(0,q.ZP)(h.oFb)`
  ${W}
  ${r.$_}
  min-width: 30px;
`,ac=(0,q.ZP)(h.gbh)`
  ${W}
  ${r.$_}
  min-width: 30px;
`,ad=(0,q.ZP)(s.Z)`
  flex: 4;
  font-size: ${a=>(0,r.R)("fontSizes.1")(a)}px;
  font-weight: ${a=>(0,r.R)("fontWeights.medium")(a)};
  line-height: ${a=>(0,r.R)("lineHeights.big")(a)};
`,ae=(0,q.ZP)(s.Z)`
  display: block;
  font-size: ${a=>(0,r.R)("fontSizes.0")(a)}px;
  font-weight: ${a=>(0,r.R)("fontWeights.regular")(a)};
  padding-right: 15px;
`,af=(0,q.ZP)(s.Z)`
  flex: 1;
  font-size: ${a=>(0,r.R)("fontSizes.1")(a)}px;
  text-align: center;
  color: ${a=>{let{free:b}=a,c=(0,f.Z)(a,["free"]);return b?(0,r.ow)("secondary.base")(c):(0,r.ow)("text.base")(c)}};
  display: contents;
`,ag=a=>{let{complement:b,description:c,price:d,currency:h,time:i,type:j,unit:k,freeShippingLabel:l}=a,m=(0,f.Z)(a,["complement","description","price","currency","time","type","unit","freeShippingLabel"]);return g.createElement(X,(0,e.Z)({"data-testid":"shipping-item"},m),["store_pickup","pickup_point"].includes(j)&&g.createElement(Z,{fill:"background.dark"})||(a=>{let b=(0,V.Z)({currency:h});return b?g.createElement(ac,{fill:a}):"hours"===k&&i<=2?g.createElement(ab,{fill:a}):"days"===k&&0===i?g.createElement($,{fill:a}):"days"===k&&1===i?g.createElement(_,{fill:a}):"working_days"===k&&1===i?g.createElement(aa,{fill:a}):!b&&g.createElement(Y,{fill:a})})("background.dark"),g.createElement(ad,null,c,g.createElement(ae,{as:"span"},b)),!!Number(d)&&g.createElement(af,null,(0,K.oB)({value:d}))||g.createElement(af,{free:!0},l))};ag.defaultProps={freeShippingLabel:"Frete Gr\xe1tis",unit:""};var ah=ag,ai=c(15185);c(50919);var aj=c(84546);let ak=q.ZP.div`
  display: grid;
  grid-column-gap: 5px;
  grid-row-gap: 8px;
  grid-template-columns: repeat(3, 1fr);
`,al=(0,q.ZP)(s.Z).attrs({fontWeight:"bold",fontSize:3,color:"primary",mb:2})``,am=({recommends:a,title:b})=>g.createElement(aj.Z,null,g.createElement(s.Z,{fontSize:4,mb:4},b),g.createElement(ak,null,a.map((a,b)=>g.createElement(aj.Z,{key:b},g.createElement(al,null,a.name),g.createElement(s.Z,null,a.city),g.createElement(T.Z,{score:a.score}),g.createElement(s.Z,{lineHeight:1},a.text)))));am.defaultProps={recommends:[],title:""};var an=c(68054);let ao=q.ZP.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  ${an.$_}
  ${an.GQ}
`,ap=(0,q.ZP)(aj.Z)``,aq=(0,q.ZP)(aj.Z).attrs(a=>Object.assign({color:"text.white",fontWeight:"bold",fontSize:0},a))`
  ${r.$_}
`,ar=(0,q.ZP)(i.rU).attrs(a=>Object.assign({color:"text.white",fontSize:0,p:0},a))``,as=a=>{let{message:{text:b=""}={},loginLink:{text:c="Entre ou cadastre-se",url:d="#"}={}}=a,h=(0,f.Z)(a.message,["text"]),i=(0,f.Z)(a.loginLink,["text","url"]);return g.createElement(ap,{"data-testid":"stereo-login_menu-unsigned_user_state-container"},b&&g.createElement(aq,h,b),g.createElement(ar,(0,e.Z)({href:d},i),c))};as.defaultProps={message:{},loginLink:{}};var at=as;let au=({username:a,welcomeMessage:b,logoutMessage:c,signOutUrl:d,menuLinks:e=[],onLogout:f})=>g.createElement(i.Lt,{mouseenter:!0,pointing:!0},g.createElement(i.Lt.Title,{color:"text.white",fill:"background.lighter"},b||g.createElement("span",null,"Ol\xe1, ",g.createElement("b",null,a))),g.createElement(i.Lt.Menu,{pointing:!0,fontSize:0,p:2},e.map(({icon:a,label:b,url:c},d)=>g.createElement(i.Lt.Item,{key:d,startIcon:a,p:1,my:2},g.createElement(i.rU,{href:c,fontSize:0},b))),g.createElement(i.Lt.Divider,null),g.createElement(i.Lt.Item,{p:1,my:2,disableHover:!0},c||`N\xe3o \xe9 ${a}? `,g.createElement(i.rU,{underline:!0,px:0,fontSize:0,href:d,onClick:f,"data-testid":"link-logout"},"Sair"))));au.defaultProps={welcomeMessage:"",logoutMessage:"",signOutUrl:""};var av=au;let aw=({isSignedIn:a,unsignedConfig:b,signedConfig:c,signOutUrl:d,onLogout:f})=>g.createElement(ao,null,a?g.createElement(av,(0,e.Z)({},c,{signOutUrl:d,onLogout:f})):g.createElement(at,b));aw.defaultProps={isSignedIn:!1,unsignedConfig:{},signedConfig:{},onLogout:()=>{},signOutUrl:""};var ax=aw;let ay=q.ZP.div`
  & > svg {
    transform: scale(1.2);
  }
`,az=({amount:a,nullable:b,truncateAmountThreshold:c,backgroundColor:d,counterColor:e="#db44a7",fontColor:f="#fff",iconColor:j="#fff",onClick:k})=>g.createElement(i.fG,{amount:a,nullable:b,truncateAmountThreshold:c,backgroundColor:d,counterColor:e,fontColor:f,onClick:k},g.createElement(ay,null,g.createElement(h.Xdw,{color:j})));az.defaultProps={amount:0,onClick:()=>{},nullable:!0};var aA=az,aB=c(10200);let aC=q.ZP.ul`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: ${(0,r.R)("space.3")}px;
  margin-right: 8px;
`,aD=q.ZP.li`
  list-style: none;
`,aE={color:"text.greyishBlue",fontSize:[0,0,0,1],fontWeight:["bold","bold","bold","regular"]},aF=(0,q.ZP)(aB.Z).attrs(a=>Object.assign({p:0},aE,a))`
  ${r.$_}
  ${an.cp}
`,aG=q.ZP.span.attrs(a=>Object.assign({},aE,a))`
  ${r.$_}
  ${an.cp}
`,aH=({data:a})=>{let{linksList:b=[]}=a;return g.createElement(aC,{"data-testid":"horizontal-links-elem"},b.map((a,b)=>g.createElement(aD,{key:`link-item-${b}`},a.url?g.createElement(aF,{href:a.url},a.label):g.createElement(aG,null,a.label))))};aH.defaultProps={data:{linksList:[]}};var aI=aH,aJ=c(65055);c(51382);let aK=q.ZP.form``;aK.Link=(0,q.ZP)(i.rU).attrs(a=>Object.assign({color:"text.lightest"},a))`
  ${r.$_}
`,aK.Header=q.ZP.div.attrs(a=>Object.assign({color:"text.lightest",fontSize:0},a))`
  display: flex;
  align-items: center;

  svg {
    margin-right: ${(0,r.R)("space.1")}px;
  }

  ${aK.Link} {
    color: ${(0,r.R)("colors.lightBlue")};
    ${an.cp}
  }

  ${r.$_};
`,aK.Title=q.ZP.h2.attrs(a=>Object.assign({fontSize:2,fontWeight:"medium",color:"text.lightest"},a))`
  ${r.$_}
  ${an.cp}
`,aK.InputWrapper=q.ZP.div.attrs(a=>Object.assign({p:"1"},a))`
  display: flex;
  align-items: center;
  ${an.Dh}
`,aK.Input=(0,q.ZP)(i.II).attrs(a=>Object.assign({mr:"2"},a))`
  ${an.Dh}
`,aK.SubmitBtn=(0,q.ZP)(i.zx).attrs(a=>Object.assign({color:"secondary",size:"small",m:"10px 0"},a))``;let aL=({title:a,policy:b,onSubmitForm:c})=>{let[d,e]=(0,g.useState)(""),[f,i]=(0,g.useState)(""),j=(a,b)=>{b(a,{name:d,email:f})};return g.createElement(aK,{"data-testid":"subscription-form-elem",onSubmit:a=>j(a,c)},g.createElement(aK.Header,null,g.createElement(h.TbV,{"data-testid":"link-icon",color:"currentColor",width:25}),g.createElement(aK.Title,null,a),g.createElement(aK.Link,{"data-testid":"link-policy",underline:!0,href:null==b?void 0:b.url},null==b?void 0:b.label)),g.createElement(aK.InputWrapper,null,g.createElement(E.Z,{text:"digite o seu nome",htmlFor:"input-name"}),g.createElement(aK.Input,{id:"input-name","data-testid":"input-name",placeholder:"digite o seu nome",value:d,onChange:a=>e(a.target.value)}),g.createElement(E.Z,{text:"digite o seu email",htmlFor:"input-email"}),g.createElement(aK.Input,{id:"input-email","data-testid":"input-email",placeholder:"digite o seu email",type:"email",value:f,onChange:a=>i(a.target.value)}),g.createElement(aK.SubmitBtn,{"data-testid":"submit-btn",disabled:!f||!d,type:"submit",onClick:a=>j(a,c)},"Enviar")))};var aM=aL,aN=c(38825);c(41237);var aO=c(1587),aP=c(27408);let aQ=(0,q.ZP)(i.xv)`
  font-size: ${a=>(0,r.R)("fontSizes.0")(a)}px;
  color: ${(0,r.uu)("scratched")};
  text-align: ${({textAlign:a})=>a};

  span {
    color: ${(0,r.R)("palette.secondary.dark")};
    font-weight: ${(0,r.R)("fontWeights.bold")};
  }
`,aR=()=>g.createElement("span",null,"Frete gr\xe1tis");var aS=function({cost:a,displayMode:b,costDescription:c}){return g.createElement(g.Fragment,null,a?g.createElement(aQ,{"data-testid":"shipping-cost",textAlign:b===k.Co?"center":null},0===Number(a)?g.createElement(aR,null):c):null)}}}])
//# sourceMappingURL=9375-c8a047cf16e178ca.js.map