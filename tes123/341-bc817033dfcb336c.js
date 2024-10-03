"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[341],{72848:function(a,b,c){c.d(b,{Z:function(){return E}});var d=c(31461),e=c(7896),f=c(2784),g=c(34490),h=c(12468),i=c(87043),j=c(99673),k=c(68054),l=c(91489),m=c(27439),n=c(40978);let o=j.iv`
  background-image: linear-gradient(
    to right,
    #fcd000 0,
    #ff8a00 17%,
    #ff253a 34%,
    #ff37a8 51%,
    #a400e1 67%,
    #0086ff 83%,
    #00d604 100%
  );
  background-size: 100% 6px;
  background-repeat: no-repeat;
  background-position: top;
`,p=j.iv`
  font-size: ${a=>(0,l.R)("fontSizes.1")(a)}px;
  color: ${a=>(0,l.uu)("base")(a)};
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  max-width: 97%;
`,q={vertical:j.iv`
    display: block;
  `,horizontal:j.iv`
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > div {
      flex-basis: 30%;
    }
    & > button {
      flex-basis: 200px;
      flex-shrink: 0;
    }
  `},r=(0,j.ZP)(m.ZP)`
  ${a=>a.isMagalu&&o}
  background-color: ${a=>(0,l.ow)("background.lighter")(a)};
  padding: 1px 10px;
  margin: 0 2px 10px;
  border-radius: 6px;
  box-shadow: ${a=>(0,l.R)("elevations.5")(a)};
  ${({displayMode:a})=>a&&q[a]}
`,s=j.ZP.h2`
  ${p}
  font-size: ${a=>(0,l.R)("fontSizes.1")(a)}px;
  font-weight: ${a=>(0,l.R)("fontWeights.medium")(a)};
  margin: 10px 12px;
`,t=j.ZP.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  margin: 5px 5px 12px;
  & p {
    height: auto;
  }
`,u={vertical:j.iv`
    display: block;
  `,horizontal:j.iv`
    display: flex;
    justify-content: space-between;
    align-items: center;
    & svg {
      ${a=>a.isMagalu&&j.iv`
          width: 100px;
          height: auto;
        `}
    }
    & > div {
      ${({isMagalu:a})=>a&&j.iv`
          flex-grow: 1;
        `}
      flex-basis: 30%;
      flex-grow: 2;
    }
    & > button {
      flex-basis: 200px;
      flex-shrink: 0;
    }
  `},v=j.ZP.div`
  border-radius: 6px;
  & > div {
    margin: 8px 5px 12px;
  }
  ${({displayMode:a})=>a&&u[a]}
`,w=j.ZP.div`
  border-radius: ${({exhibition:a})=>"highlight"===a&&"4px"};
  overflow: hidden;
  ${k.Dh}
  ${k.$_}
  ${k.bK}
  ${k.Cg}
`,x=(0,j.ZP)(g.ZGh).attrs(a=>({color:(0,l.ow)("base")(a),width:80,height:40,viewBox:"0 0 60 14"}))`
  vertical-align: middle;
  margin-top: 10px;
  margin-left: 5px;
`,y={horizontal:j.iv`
    & svg + p {
      margin-right: ${a=>(0,l.R)("fontSizes.1")(a)}px;
    }
  `},z=(0,j.ZP)(n.u0)`
  ${({displayMode:a})=>a&&y[a]}
`;var A=c(82469);let B=a=>(null==a?void 0:a.id)===h.ig,C=({displayMode:a,offer:b,onClick:c,showSellerInDialog:d,disableSellerClick:h,onSellerClick:j,buttons:k,modal:l})=>{let{seller:m,price:o,deliveryTypes:p,error:q}=b,s=B(m),{content:u}=l;return f.createElement(r,{isMagalu:s,displayMode:a,"data-testid":"buybox-card-container",hideLinkBorder:!1,as:"div"},f.createElement(v,{isMagalu:s,displayMode:a,"data-testid":"buybox-card-content"},s&&"vertical"===a&&f.createElement(x,{title:"Logo magalu","data-testid":"magalogo"}),f.createElement(t,null,f.createElement(A.tA,(0,e.Z)({display:"galery",isList:!0,showDiscount:!0},o))),f.createElement(t,null,m&&f.createElement(n.fP,{showDialog:d,disableSellerClick:h,onOffersClick:j,seller:m,modal:Object.assign({},l,{content:l.content&&f.createElement(u,{seller:m})})}))),p&&f.createElement(z,{displayMode:a,items:p}),f.createElement(i.zx,{"data-testid":"buybox-button",onClick:a=>c(a,b),color:"secondary",startIcon:f.createElement(g.tuM,{width:32,height:32}),m:"10px 0",disabled:Boolean(q),full:!0},q?k.buttonError:k.buttonOk))},D=a=>{let{data:b,disableSellerClick:c,onClick:e,showSellerInDialog:g,onSellerClick:h,textButtons:i,displayMode:j,modal:k}=a,l=(0,d.Z)(a,["data","disableSellerClick","onClick","showSellerInDialog","onSellerClick","textButtons","displayMode","modal"]),{buttonError:m="N\xe3o dispon\xedvel",buttonOk:n="Comprar agora",title:o="Escolha a melhor oferta"}=i;return f.createElement(w,l,f.createElement(s,{"data-testid":"buybox-title"},o),b.map((a,b)=>f.createElement(C,{displayMode:j,key:b,offer:a,disableSellerClick:c,onSellerClick:h,onClick:e,buttons:{buttonError:m,buttonOk:n},showSellerInDialog:g,modal:k})))};D.defaultProps={displayMode:"vertical",data:[],onClick:()=>{},showSellerInDialog:!1,onSellerClick:()=>{},disableSellerClick:!1,textButtons:{},modal:{}};var E=D},33252:function(a,b,c){c.d(b,{Z:function(){return u}});var d=c(7896),e=c(2784),f=c(34490),g=c(99673),h=c(91489);let i=g.ZP.div`
  display: flex;
  align-items: center;
`,j=g.ZP.p`
  margin-right: 5px;
  color: ${a=>(0,h.uu)("scratched")(a)};
`,k=g.ZP.div`
  background-color: ${a=>(0,h.dF)("lighter")(a)};
  color: ${a=>(0,h.uu)("lightest")(a)};
  height: 2em;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${a=>(0,h.R)("fontSizes.0")(a)}px;
  padding: 25px 0;
  border-bottom: 1px solid ${a=>(0,h.kJ)("light")(a)};
`,l=g.ZP.span`
  padding: ${a=>(0,h.R)("fontSizes.3")(a)}px;
  cursor: pointer;
  font-size: ${a=>(0,h.R)("fontSizes.1")(a)}px;
  fill: ${a=>(0,h.uu)("scratched")(a)};
`,m=(0,g.ZP)(l)`
  color: ${a=>(0,h.uu)("base")(a)};
`,n=(0,g.ZP)(l)`
  color: ${a=>a.count>=1?(0,h.R)("palette.primary.base"):(0,h.uu)("light")};
`,o="Filtrar";var p=c(84022),q=c(40978),r=c(78012);let s=a=>(b,c)=>e.createElement(r.Z.Item,(0,d.Z)({},b,{key:b.id||c,href:b.path||b.href,onClick:(b.path||b.href)&&(c=>{a(c,b)}),fontWeight:b.path||b.href?void 0:"bold",as:(b.path||b.href)&&"a",startIcon:b.icon,endIcon:!b.icon&&(b.path||b.href)&&"ChevronRight"}),b.label),t=({onOpen:a,onClose:b,onClear:c,onClickOutside:d,onShowDetail:g,onItemClick:h,visible:t,filters:u,count:v})=>{let{attributeFilter:w,reviewFilter:x,categoryFilter:y,priceFilter:z}=h,A=({slug:a,values:b,label:c,position:d,filterSelected:f,showFilterInput:h})=>e.createElement(q.G4,{key:a,items:b,label:c,position:d,onItemClick:w,filterSelected:f,showFilterInput:h,fullScreen:!0,onClick:g}),B=({position:a,label:b,values:c})=>e.createElement(q.jm,{label:b,position:a,fullScreen:!0,onClick:g},e.createElement(r.Z,null,null==c?void 0:c.map(s(y)))),C=({slug:a,values:b,label:c,position:d,filterSelected:f,showFilterInput:h})=>e.createElement(q.pZ,{position:d,key:a,items:b,label:c,onItemClick:x,filterSelected:f,showFilterInput:h,fullScreen:!0,onClick:g}),D=a=>{let{position:b,slug:c,label:d,min:f,max:h,selectedMin:i,selectedMax:j}=a;return e.createElement(q.aw,{position:b,key:c,label:d,onApply:z,fullScreen:!0,onClick:g,min:f,max:h,selectedMin:i,selectedMax:j,item:a})},E={multiple:A,hierarchical:B,unique:C,priceRange:D};return e.createElement(e.Fragment,null,e.createElement(i,{onClick:a,"data-testid":"filter-menu-button"},e.createElement(p.Z,{count:v,mr:"4px"}),e.createElement(j,null,o),e.createElement(f.wn$,{height:"20",color:"#8c8c8c"})),e.createElement(q.YE,{direction:"right",visible:t,onClickOutside:d},e.createElement(k,null,e.createElement(l,{onClick:b,role:"button",tabIndex:"0","data-testid":"close-menu"},e.createElement(f.x8P,{height:"20"})),e.createElement(m,null,o),e.createElement(n,{onClick:v>=1?c:null,onKeyDown:v>=1?c:null,role:"button",tabIndex:"-1","data-testid":"clear-filters",count:v},"Limpar tudo")),e.createElement(e.Fragment,null,null!=u&&u.length?u.map(a=>{let{componentType:b}=a;return E[b](a)}):null)))};t.defaultProps={onClear:()=>{},onClose:()=>{},onOpen:()=>{},onClickOutside:()=>{},visible:!1,filters:{attributeFilters:[],reviewFilter:{}},count:0,onItemClick:{attributeFilter:()=>({}),reviewFilter:()=>({})},onShowDetail:()=>{}};var u=t},99852:function(a,b,c){c.d(b,{Z:function(){return aC}});var d=c(7896),e=c(31461),f=c(2784),g=c(34490);let h=`Servi\xe7os`,i="Roubo e Furto",j=`Prote\xe7\xe3o ${i}`,k="Garantia Estendida Original Ampliada",l="Formas de pagamentos",m=[{id:"rs1",title:"SEGURO PROTE\xc7\xc3O ROUBO E FURTO QUALIFICADO COM QUEBRA ACIDENTAL",content:[{text:[{content:"As Condi\xe7\xf5es Gerais desse seguro poder\xe3o ser consultadas a qualquer momento, atrav\xe9s do site "}]},{link:"http://condicoesgerais.bnpparibascardif.com.br/rf",text:"condicoesgerais.bnpparibascardif.com.br/rf"}]},{id:"rs11",title:"CARACTER\xcdSTICAS DO SEGURO",content:[{text:[{content:"Garantir a reposi\xe7\xe3o ou o reparo do bem segurado."}]}]},{id:"rs2",title:"TIPO DE COBERTURA",content:[{text:[{content:"Roubo, Furto Qualificado e Quebra Acidental de Aparelhos M\xf3veis"}]}]},{id:"rs3",title:"SINISTROS",content:[{text:[{content:"Em caso de sinistro, o Segurado dever\xe1 comunicar a ocorr\xeancia do defeito \xe0 Seguradora, atrav\xe9s do site "}]},{link:"https://luizaseg.acioneseuseguro.com.br/",text:"https://luizaseg.acioneseuseguro.com.br/"},{text:[{content:", ou entrar em contato com a Central de Atendimento atrav\xe9s do telefone informado abaixo."}]},{text:[{content:"Fica estabelecido o prazo de at\xe9 30 (trinta) dias para o pagamento de indeniza\xe7\xe3o devida pelo presente Contrato de Seguro, contados a partir da entrega de todos os documentos b\xe1sicos previstos. Caso haja solicita\xe7\xe3o de nova documenta\xe7\xe3o e/ou informa\xe7\xe3o complementar, o prazo para pagamento do sinistro ser\xe1 suspenso, voltando a correr a partir do dia \xfatil subsequente \xe0quele em que forem completamente atendidas as exig\xeancias."}]}]},{id:"rs4",title:"SORTEIO DE CAPITALIZA\xc7\xc3O",content:[{text:[{content:"Haver\xe1 sorteio Mensal durante 3 meses, no valor liquido de R$ 5.062,50, realizado pela Loteria Federal. A participa\xe7\xe3o ocorrer\xe1 por meio do seu N\xfamero da Sorte expresso no Bilhete de Seguro, desde que o pagamento do seguro esteja em dia. O regulamento da capitaliza\xe7\xe3o pode ser consultado a qualquer tempo atrav\xe9s do site: www.regulamentos.bnpparibascardif.com.br"}]},{text:[{content:"Icatu Capitaliza\xe7\xe3o S.A., CNPJ: 74.267.170/1000-73, Processo SUSEP: 15414.900393/2019-87, Ouvidoria Icatu Seguros: 0800 286 0047. Modalidade Incentivo. “\xc9 proibida a venda de t\xedtulos de capitaliza\xe7\xe3o a menores de dezesseis anos - Art.3\xba, I do C\xf3digo Civil "}]},{link:"http://www.icatuseguros.com.br",text:"http://www.icatuseguros.com.br"},{text:[{content:". \xc9 proibida a venda de t\xedtulos de capitaliza\xe7\xe3o a menores de dezesseis anos - Art. 3o, I do C\xf3digo Civil."}]}]},{id:"rs5",title:"EXCLUS\xd5ES GERAIS",content:[{text:[{content:"Todos os riscos exclu\xeddos que constam no bilhete de seguro do bem segurado, tamb\xe9m estar\xe3o automaticamente exclu\xeddos deste seguro. Os danos causados por atos il\xedcitos dolosos ou por culpa grave equipar\xe1vel ao dolo, praticados pelo segurado, pelo benefici\xe1rio ou representante legal de um ou de outro, estar\xe3o exclu\xeddos."}]}]},{id:"rs6",title:"INFORMA\xc7\xd5ES ADICIONAIS",content:[{text:[{content:"A contrata\xe7\xe3o do Seguro \xe9 opcional e \xe9 proibido condicionar desconto no pre\xe7o do bem \xe0 aquisi\xe7\xe3o do seguro; O Segurado dever\xe1 guardar o certificado de garantia do fabricante; O Segurado poder\xe1 desistir do seguro no prazo de 7 dias corridos a contar da emiss\xe3o do bilhete, atrav\xe9s da Central de Atendimento informada neste documento ou representante de seguro; Caso haja a necessidade de reparo no per\xedodo de garantia do fabricante, dever\xe1 entrar em contato com o fabricante. N\xfamero de atendimento do fabricante vide manual de garantia do fabricante."}]}]},{id:"rs7",title:"CENTRAL DE ATENDIMENTO",content:[{text:[{content:"SAC (cancelamento, reclama\xe7\xf5es e informa\xe7\xf5es sobre seguro): 0800 545 4040. "},{content:"Abertura e acompanhamento de sinistro: 3003 4288 (Capitais e regi\xf5es metropolitanas) ou 0800 200 0940 (demais localidades). "},{content:"Deficiente auditivo:0800 727 2482 (atendimento todos os dias, 24h). Caso n\xe3o esteja satisfeito com a resposta fornecida pelo SAC, entre em contato com a Ouvidoria: 0800 727 2482 - Dias \xfateis, das 9h \xe0s 18 horas (hor\xe1rio de Bras\xedlia) exceto feriados ou acesse ouvidoria.bnpparibascardif.com.br."}]}]},{id:"rs8",title:"SEGURADORA",content:[{text:[{content:"Cardif do Brasil Seguros e Garantias S/A, CNPJ: 08.279.191/0001-84, com endere\xe7o na Avenida Presidente Juscelino Kubitscheck, N\xba1909, Torre Sul, 8\xba andar, S\xe3o Paulo/SP, CEP: 04543-907 ou https://www.bnpparibascardif.com.br/"}]}]},{id:"rs9",title:"CORRETORA",content:[{text:[{content:"Viotto Corretora de Seguros e Previd\xeancia Ltda. CNPJ: 56.170.061/0001-51. Registro SUSEP: 10.0059706."}]}]},{id:"rs10",title:"DISPOSI\xc7\xd5ES GERAIS",content:[{text:[{content:'Ouvidoria - Finalidade e Forma de Utiliza\xe7\xe3o: 0800 727 2482 ou https://www.luizaseg.com.br/. “O registro do produto \xe9 autom\xe1tico e n\xe3o representa aprova\xe7\xe3o ou recomenda\xe7\xe3o por parte da Susep”. “A ades\xe3o ao seguro \xe9 opcional”. “O segurado poder\xe1 consultar a situa\xe7\xe3o cadastral de seu corretor de seguros, no site www.susep.gov.br, por meio do n\xfamero de seu registro na SUSEP, nome completo, CNPJ ou CPF”. ”A aceita\xe7\xe3o do seguro estar\xe1 sujeita \xe0 an\xe1lise do risco”. “As condi\xe7\xf5es contratuais/regulamento deste produto encontram-se registradas na SUSEP de acordo com o n\xfamero de processo constante da ap\xf3lice/proposta e poder\xe3o ser consultadas no endere\xe7o eletr\xf4nico www.susep.gov.br”. “Em atendimento \xe0 Lei 12.741/12 informamos que incidem as al\xedquotas de 0,65% de PIS/Pasep e de 4% de COFINS sobre os pr\xeamios de seguros/as contribui\xe7\xf5es a planos de car\xe1ter previdenci\xe1rio/os pagamentos destinados a planos de capitaliza\xe7\xe3o, deduzidos do estabelecido em legisla\xe7\xe3o espec\xedfica”. “O registro do produto \xe9 autom\xe1tico e n\xe3o representa aprova\xe7\xe3o ou recomenda\xe7\xe3o por parte da Susep”. "\xc9 dever do intermedi\xe1rio disponibilizar ao cliente formal e previamente \xe0 contrata\xe7\xe3o do seguro, o montante de sua remunera\xe7\xe3o e o pr\xeamio do seguro. A distribui\xe7\xe3o dos seguros por meio do Magazine Luiza \xe9 realizada com exclusividade. Saiba mais sobre a privacidade dos seus dados pessoais e como ser\xe3o mantidos em seguran\xe7a: acesse https://www.luizaseg.com.br/lgpd.php;". A FRAUDE CONTRA SEGUROS \xc9 CRIME, DENUNCIE (21) 2253-1177 OU 181 - WWW.FENASEG.ORG.BR. Atendimento SUSEP: 0800 021 8484 - Dias \xfateis das 9:30 \xe0s 17:00 Por meio do Acordo Operacional celebrado entre as empresas acima (“ SEGURADORA”) e (“REPRESENTANTE”), a SEGURADORA confere a REPRESENTANTE poderes para: Realizar a oferta e promo\xe7\xe3o de Seguros, inclusive por meios remotos, em nome da SEGURADORA; Emitir bilhetes de seguro em nome da SEGURADORA e entreg\xe1-lo ao segurado; Coletar e fornecer \xe0 SEGURADORA os dados cadastrais e de documenta\xe7\xe3o de proponentes, segurados, benefici\xe1rios e corretores de seguros e seus prepostos; Recolher os pr\xeamios de Seguro, em nome da SEGURADORA, e repass\xe1-los integralmente \xe0 SEGURADORA; Orientar e assistir aos segurados e seus benefici\xe1rios, no que compete aos contratos de Seguro, inclusive por meios remotos, em nome da SEGURADORA; Orientar e assistir aos corretores de seguros e seus prepostos, se for o caso; Dar apoio log\xedstico e administrativo \xe0 SEGURADORA, visando a manuten\xe7\xe3o dos contratos de seguros e outros servi\xe7os, inclusive, controle e processamento de dados das opera\xe7\xf5es pactuadas em nome da SEGURADORA.'}]}]}],n=[{id:"ce1",title:"SEGURO DE GARANTIA ESTENDIDA ORIGINAL AMPLIADA",content:[{text:[{content:"Processo Susep: 15414.900275/2014-64, garantido pela Cardif do Brasil. Seguros e Garantias S.A. CNPJ: 08.279.191/0001-84, com endere\xe7o na Avenida Presidente Juscelino Kubitscheck, No 1909, Torre Sul, 8o andar, S\xe3o Paulo/SP, CEP: 04543-907 ou "}]},{link:"http://www.cardif.com.br",text:"www.cardif.com.br"}]},{id:"ce2",title:"CARACTER\xcdSTICAS DO SEGURO",content:[{text:[{content:"Este seguro de Garantia Estendida Original Ampliada tem por objetivo, caso o segurado queira e possua o pagamento do seguro em dia, al\xe9m de estender a garantia de  f\xe1brica do bem, contemplar as coberturas adicionais de Danos El\xe9tricos e Oxida\xe7\xe3o."}]}]},{id:"ce3",title:"TIPO DE COBERTURA",content:[{text:[{content:"Extens\xe3o de Garantia Original."}]}]},{id:"ce4",title:"SEGURADORA",content:[{text:[{content:"Cardif do Brasil Seguros e Garantias S.A. CNPJ: 08.279.191/0001-84 com endere\xe7o na Avenida Presidente Juscelino Kubitscheck, N\xba1909, Torre Sul, 8\xba andar, S\xe3o Paulo/SP, CEP: 04543-907 ou www.cardif.com.br."}]}]},{id:"ce5",title:"REPRESENTANTE DE SEGURO",content:[{text:[{content:"Magazine Luiza S.A., CNPJ: 47.960.950/0001-21."}]}]},{id:"ce6",title:"CORRETORA",content:[{text:[{content:"Viotto Corretora de Seguros e Previd\xeancia Ltda, CNPJ: 56.170.061/0001-51 e Registro SUSEP:202069682."}]}]},{id:"ce7",title:"SORTEIO DE CAPITALIZA\xc7\xc3O",content:[{text:[{content:"Haver\xe1 sorteio mensal durante 3 meses, no valor l\xedquido de R$5.062,50, realizado pela Loteria Federal. A participa\xe7\xe3o ocorrer\xe1 por meio do seu N\xfamero da Sorte expresso no Bilhete de Seguro, desde que o pagamento do seguro esteja em dia. O regulamento da capitaliza\xe7\xe3o pode ser consultado a qualquer tempo atrav\xe9s do "}]},{link:"http://siteregulamentos.bnpparibascardif.com.br",text:"siteregulamentos.bnpparibascardif.com.br."},{text:[{content:`Icatu Capitaliza\xe7\xe3o S.A., CNPJ: 74.267.170/1000-73, Processo SUSEP: 15414.900393/2019-87, Ouvidora Icatu Seguros: 0800 286 0047, Modalidade Incentivo. "\xc9 proibida a venda de t\xedtulos de capitaliza\xe7\xe3o a menores de dezesseis anos - Art. 3\xb0 I do C\xf3digo Civil".http://www.icatuseguros.com.br\xc9 proibida a venda de t\xedtulos de capitaliza\xe7\xe3o a menores de dezesseis anos - Art. 3o, I do C\xf3digo Civil.`}]}]},{id:"ce8",title:"EXCLUS\xd5ES GERAIS: SITUA\xc7\xd5ES QUE N\xc3O SER\xc3O ATENDIDAS PELO SEU SEGURO.",content:[{text:[{content:`N\xe3o estar\xe1 coberto tudo que estiver previsto ou n\xe3o abrangido no Certificado de Garantia e/ou no Manual de Garantia de f\xe1brica do bem, inclusive aquilo que deixar de ser garantido e/ou deter a cobertura oferecida durante prazo de garantia do fabricante,exceto os defeitos decorrentes de Danos El\xe9tricos Oxida\xe7\xe3o. Al\xe9m dos riscos exclu\xeddos descritos acima, tamb\xe9m s\xe3o exclu\xeddos deste seguro os atos il\xedcitos dolosos ou por culpa grave equipar\xe1vel ao dolo, que agravem intencionalmente o risco, podendo ser considerados fraude, ou m\xe1-f\xe9,por a\xe7\xe3o ou omiss\xe3o, praticados pelo segurado, pelo benefici\xe1rio ou pelo representante de um ou de outro e,caso o segurado seja uma pessoa jur\xeddica, essas exclus\xf5es aplicam-se tamb\xe9m aos s\xf3cios controladores, aos seus dirigentes e administradores legais, aos benefici\xe1rios e aos seus respectivos representantes legais. `}]}]},{id:"ce9",title:"EXCLUS\xd5ES ESPEC\xcdFICAS: SITUA\xc7\xd5ES POR COBERTURA CONTRATADA QUE N\xc3O SER\xc3O ATENDIDAS  PELO SEU SEGURO. ",content:[{text:[{content:"Danos El\xe9tricos"},{content:"a)Fus\xedveis, resist\xeancias de aquecimento, l\xe2mpadas de qualquer tipo, tubos cat\xf3dicos de equipamentos eletr\xf4nicos e quaisquer outros componentes, que,por sua natureza,necessitem de trocas peri\xf3dicas."},{content:"b)Perdas,danos ou avarias ao bem segurado por combust\xe3o e/ou aquecimento espont\xe2neo;"},{content:"c)Recomposi\xe7\xe3o de registros e documentos, arquivos, softwares de qualquer natureza, bem como seus perif\xe9ricos, configura\xe7\xf5es, formata\xe7\xf5es, backups, disquetes etc. "},{content:"d) Danos causados a programas de inform\xe1tica qualquer tipo,ficando entendido,no entanto,que nos casos de perda total de microcomputadores em virtude de evento coberto, os programas que acompanharam o equipamento quando da aquisi\xe7\xe3o estar\xe3o garantidos,exceto os programas opcionalmente adquiridos."},{content:"d) Danos causados a programas de inform\xe1tica qualquer tipo,ficando entendido,no entanto,que nos casos de perda total de microcomputadores em virtude de evento coberto, os programas que acompanharam o equipamento quando da aquisi\xe7\xe3o estar\xe3o garantidos,exceto os programas opcionalmente adquiridos."},{content:"Oxida\xe7\xe3o:"},{content:"a)Qualquer defeito coberto provocado intencionalmente;"},{content:"b)Partes,pe\xe7as e componentes que s\xe3o consum\xedveis ou sofram desgaste natural, independente da origem do problema; "},{content:"c) Produto cujo n\xfamero de identifica\xe7\xe3o, do chassi ou de s\xe9rie tenha sido removido ou adulterado;"},{content:"d) Manchas, desgastes ou de outras falhas consequentes da aplica\xe7\xe3o de produtos impermeabilizantes; "},{content:"e) Danos est\xe9ticos como riscos, quebras, trincas, amassamentos, arranhaduras etc.), mesmo decorrentes de Danos El\xe9tricos."}]}]},{id:"ce10",title:"SINISTROS",content:[{text:[{content:`Em caso de sinistro, o Segurado dever\xe1 comunicar a ocorr\xeancia do defeito \xe0 Seguradora, por meio do site www.acioneseuseguro.com.br, ou entrar em contato com  a Central de Atendimento por meio do telefone informado abaixo. Nesta ocasi\xe3o, o segurado receber\xe1 um n\xfamero de sinistro, que dever\xe1 ser informado \xe0 assist\xeancia  t\xe9cnica indicada.A seguradora ter\xe1 at\xe9 30 dias corridos para concluir o atendimento, a contar da entrega do bem segurado \xe0 assist\xeancia t\xe9cnica pelo segurado, acompanhado do Bilhete de Seguro, Documento Fiscal de Aquisi\xe7\xe3o do Bem Segurado, CPF ou outro documento de identifica\xe7\xe3o.Se o bem segurado apresentar  algum defeito funcional (chamado daqui por diante apenas de “defeito’’) durante a vig\xeancia do seguro, a indeniza\xe7\xe3o se dar\xe1 por meio do reparo do bem, que ser\xe1 feito pela  assist\xeancia t\xe9cnica. O seguro cobre o valor das pe\xe7as de reposi\xe7\xe3o e o custo da m\xe3o-de-obra. Caso o bem n\xe3o possa ser consertado, ser\xe1 feita a sua reposi\xe7\xe3o por outro  igual ou com funcionalidades semelhantes, que pode ser novo ou recondicionado. Se n\xe3o for poss\xedvel nem o reparo e nem a reposi\xe7\xe3o do bem, o segurado receber\xe1 o  pagamento do valor que pagou por ele, de acordo com a nota fiscal de compra. `}]}]},{id:"ce11",title:"CENTRAL DE ATENDIMENTO",content:[{text:[{content:"Central de atendimento: SAC (Cancelamentos,reclama\xe7\xf5es e informa\xe7\xf5es do seguro): 0800 545 4040. Abertura e Acompanhamento de Sinistros: 3003 4288 (Capitais e regi\xf5es metropolitanas) ou 0800 200 0940 (Demais localidades). Deficiente Auditivo: 0800 725 0645,atendimento todos os dias, 24 horas. Ouvidoria Cardif: 0800 727 2482, atendimento em dias \xfateis, das 9h \xe0s 18h (hor\xe1rio de Bras\xedlia) exceto feriados, ou ouvidoria.bnpparibascardif.com.br"}]}]},{id:"ce12",title:"DISPOSI\xc7\xd5ES GERAIS",content:[{text:[{content:`Caso n\xe3o esteja satisfeito com a resposta fornecida pelo SAC, entre em contato com a Ouvidoria: 0800 727 2482 - Dias \xfateis, das 9h \xe0s 18 horas (hor\xe1rio de Bras\xedlia) exceto feriados ou acesse ouvidoria.bnpparibascardif.com.br e tamb\xe9m www.consumidor.gov.br. A contrata\xe7\xe3o de seguro \xe9 opcional, sendo poss\xedvel a desist\xeancia do contrato em at\xe9 7 (sete) dias corridos com a devolu\xe7\xe3o integral do valor pago. \xc9 proibido condicionar desconto no pre\xe7o do bem \xe0 aquisi\xe7\xe3o do seguro. A comercializa\xe7\xe3o de seguros \xe9 fiscalizada pela SUSEP. www.susep.gov.br – 0800 021 8484. O registro do produto \xe9 autom\xe1tico e n\xe3o representa aprova\xe7\xe3o ou recomenda\xe7\xe3o por parte da Susep. \xc9 dever do intermedi\xe1rio disponibilizar ao cliente formal e previamente \xe0 contrata\xe7\xe3o do seguro, o montante de sua remunera\xe7\xe3o e o pr\xeamio do seguro. A distribui\xe7\xe3o dos seguros por meio do Magazine Luiza \xe9 realizada com exclusividade. Saiba mais sobre a privacidade dos seus dados pessoais e como ser\xe3o mantidos em seguran\xe7a: acesse bnpparibascardif.com.br/lei-geal-de-protecao-de-dados. O segurado poder\xe1 consultar a situa\xe7\xe3o cadastral de seu corretor de seguros, no site www.susep.gov.br por meio do n\xfamero de seu registro na SUSEP, nome completo, CNPJ ou CPF. O segurado dever\xe1 guardar o certificado de garantia do fabricante. Caso haja a necessidade de reparo no per\xedodo de garantia do fabricante, dever\xe1 entrar em contato com o fabricante. N\xfamero de atendimento do fabricante vide manual de garantia do fabricante. As condi\xe7\xf5es contratuais/regulamento deste produto encontram-se registradas na SUSEP de acordo com o n\xfamero de processo constante da ap\xf3lice/proposta e poder\xe3o ser consultadas no endere\xe7o eletr\xf4nico www.susep.gov.br. Em atendimento \xe0 Lei 12.741/12 informamos que incidem as al\xedquotas de 0,65% de PIS/Pasep e de 4% de COFINS sobre os pr\xeamios de seguros/as contribui\xe7\xf5es a planos de car\xe1ter previdenci\xe1rio/os pagamentos destinados a planos de capitaliza\xe7\xe3o, deduzidos do estabelecido em legisla\xe7\xe3o espec\xedfica. A FRAUDE CONTRA SEGUROS \xc9 CRIME, DENUNCIE (21) 2253-1177 OU 181 - WWW.FENASEG.ORG.BR. Atendimento SUSEP:0800 021 8484 - Dias \xfateis das 9:30 \xe0s 17:00. Por meio do Acordo Operacional celebrado entre as empresas acima ("SEGURADORA") e ("REPRESENTANTE"), a SEGURADORA confere a REPRESENTANTE poderes para: Realizar a oferta e promo\xe7\xe3o de Seguros, inclusive por meios remotos, em nome da SEGURADORA; Recepcionar propostas de seguros e/ou emitir bilhetes de seguro em nome da SEGURADORA e entreg\xe1-lo ao segurado; Coletar e fornecer \xe0 SEGURADORA os dados cadastrais e de documenta\xe7\xe3o de proponentes, segurados, benefici\xe1rios e corretores de seguros e seus prepostos; Recolher os pr\xeamios de Seguro, em nome da SEGURADORA, e repass\xe1-los integralmente \xe0 SEGURADORA; Orientar e assistir aos segurados e seus benefici\xe1rios, no que compete aos contratos de Seguro, inclusive por meios remotos, em nome da SEGURADORA; Recepcionar propostas de seguros e/ou emitir bilhetes de seguro em nome da SEGURADORA e entreg\xe1-lo ao segurado; Coletar e fornecer \xe0 SEGURADORA os dados cadastrais e de documenta\xe7\xe3o de proponentes, segurados, benefici\xe1rios e corretores de seguros e seus prepostos; Recolher os pr\xeamios de Seguro, em nome da SEGURADORA, e repass\xe1-los integralmente \xe0 SEGURADORA; Orientar e assistir aos segurados e seus benefici\xe1rios, no que compete aos contratos de Seguro, inclusive por meios remotos, em nome da SEGURADORA;`}]}]}],o=`${k}`,p=`Seguro ${i} Qualificado`,q=`Processo Susep: 15414.900275/2014-64, garantido pela Cardif do Brasil. Seguros e Garantias S.A. CNPJ: 08.279.191/0001-84, com endere\xe7o na Avenida Presidente Juscelino Kubitscheck, No 1909, Torre Sul, 8o andar, S\xe3o Paulo/SP, CEP: 04543-907 ou www.cardif.com.br. Orientamos a leitura das condi\xe7\xf5es gerais no link https://bnpparibascardif.com.br/condicoes-gerais. REPRESENTANTE DE SEGURO Magazine Luiza S.A., CNPJ: 47.960.950/0001-21. CORRETORA
  Viotto Corretora de Seguros e Previd\xeancia Ltda, CNPJ: 56.170.061/0001-51 e Registro SUSEP:202069682.
  A contrata\xe7\xe3o de seguro \xe9 opcional, sendo poss\xedvel a desist\xeancia do contrato em at\xe9 7 (sete) dias corridos com a devolu\xe7\xe3o integral do valor pago. \xc9 proibido condicionar desconto no pre\xe7o do bem \xe0 aquisi\xe7\xe3o do seguro.
  Haver\xe1 sorteio mensal durante 3 meses, no valor l\xedquido de R$5.062,50, realizado pela Loteria Federal. A participa\xe7\xe3o ocorrer\xe1 por meio do seu N\xfamero da Sorte expresso no Bilhete de Seguro, desde que o pagamento do seguro esteja em dia. O regulamento da capitaliza\xe7\xe3o pode ser consultado a qualquer tempo atrav\xe9s do siteregulamentos.bnpparibascardif.com.br. Icatu Capitaliza\xe7\xe3o S.A., CNPJ: 74.267.170/1000-73, Processo SUSEP: 15414.900393/2019-87, Ouvidora Icatu Seguros: 0800 286 0047, Modalidade Incentivo. "\xc9 proibida a venda de t\xedtulos de capitaliza\xe7\xe3o a menores de dezesseis anos - Art. 3\xb0 I do C\xf3digo Civil".http://www.icatuseguros.com.br.
  \xc9 proibida a venda de t\xedtulos de capitaliza\xe7\xe3o a menores de dezesseis anos - Art. 3o, I do C\xf3digo Civil.  A comercializa\xe7\xe3o de seguros \xe9 fiscalizada pela SUSEP. www.susep.gov.br – 0800 021 8484.  O registro do produto \xe9 autom\xe1tico e n\xe3o representa aprova\xe7\xe3o ou recomenda\xe7\xe3o por parte da Susep. Caso n\xe3o esteja satisfeito com a resposta fornecida pelo SAC, entre em contato com a Ouvidoria: 0800 727 2482 - Dias \xfateis, das 9h \xe0s 18 horas (hor\xe1rio de Bras\xedlia) exceto feriados ou acesse ouvidoria.bnpparibascardif.com.br e tamb\xe9m www.consumidor.gov.br.`,r=`Ao clicar em contratar servi\xe7o e ir para sacola voc\xea aceita as condi\xe7\xf5es do seguro`,s=`${i} e Forma de pagamento`,t=[{id:"pw1",title:"Termo de Autoriza\xe7\xe3o de cobran\xe7a de Pr\xeamio de Seguro",content:[{text:[{content:"Eu, proponente "},{content:"{description} "},{content:"autorizo que o pagamento do pr\xeamio de seguro no valor de "},{content:"{totalPrice} ",bold:!0},{content:"seja realizado em conjunto com o pagamento do(s) produto(s)/servi\xe7o(s) ora adquirido(s)."}]}]},{id:"pw2",content:[{text:[{content:"In\xedcio e T\xe9rmino da vig\xeancia do seguro: ",bold:!0},{content:"Data especificada no Bilhete de Seguro que voc\xea receber\xe1 ap\xf3s a conclus\xe3o da compra, quando o Termo estar\xe1 dispon\xedvel com os dados completos, refletindo sua op\xe7\xe3o pr\xe9via e autoriza\xe7\xe3o de cobran\xe7a de pr\xeamio."}]}]},{id:"pw3",content:[{text:[{content:"Declaro ter pr\xe9via ci\xeancia das informa\xe7\xf5es m\xednimas obrigat\xf3rias disponibilizadas antes da contrata\xe7\xe3o do seguro acompanhadas da \xedntegra das Condi\xe7\xf5es Gerais do presente Seguro e tenho conhecimento que tamb\xe9m poderei consult\xe1-la a qualquer momento atrav\xe9s do site www.luizaseg.com.br. Declaro tamb\xe9m que foram integralmente cumpridas as regras de conduta que devem ser praticadas pelos corretores de seguros e demais intermedi\xe1rios no relacionamento com o cliente, previstas na legisla\xe7\xe3o vigente."}]}]},{id:"pw4",content:[{text:[{content:"Notas :",bold:!0},{content:"O segurado poder\xe1 desistir do seguro contratado no prazo de 7 (sete) dias corridos a contar da assinatura da proposta, no caso de contrata\xe7\xe3o por ap\xf3lice individual, ou da emiss\xe3o do bilhete, no caso de contrata\xe7\xe3o por bilhete, ou do efetivo pagamento do pr\xeamio, o que ocorrer por \xfaltimo. No caso de pagamento de pr\xeamio fracionado, considera-se o pagamento da primeira parcela como o efetivo pagamento."}]}]},{id:"pw5",financialService:"extendedWarranty",content:[{text:[{content:"Seguradora: Luizaseg Seguros S/A. CNPJ: 07.746.953/0001-42. C\xf3digo Susep: 0206-2. Processo Susep: 15414.900276/2014-17. Ramo(s): 0195. Representante de Seguro: Magazine Luiza S/A CNPJ: 47.960.950/0001-21. Remunera\xe7\xe3o: "},{content:"{extendedWarrantyPercentage} - "},{content:"{extendedWarrantyAmount} "},{content:'"A Magazine Luiza possui participa\xe7\xe3o de 50% na Luizaseg Seguros S.A." Corretora: Viotto Corretora de Seguros e Previd\xeancia Ltda. CNPJ: 56.170.061/0001-51. Registro SUSEP: 10.0059706. Remunera\xe7\xe3o: 0,03%.'}]}]},{id:"pw6",financialService:"certainExchange",content:[{text:[{content:"Seguradora: Luizaseg Seguros S/A. CNPJ: 07.746.953/0001-42. C\xf3digo Susep: 0206-2. Processo Susep: 15414.900276/2014-17. Ramo(s): 0195. Representante de Seguro: Magazine Luiza S/A CNPJ: 47.960.950/0001-21. Remunera\xe7\xe3o: "},{content:"{certainExchangePercentage} - "},{content:"{certainExchangeAmount} "},{content:'"A Magazine Luiza possui participa\xe7\xe3o de 50% na Luizaseg Seguros S.A." Corretora: Viotto Corretora de Seguros e Previd\xeancia Ltda. CNPJ: 56.170.061/0001-51. Registro SUSEP: 10.0059706. Remunera\xe7\xe3o: 0,03%.'}]}]},{id:"pw7",financialService:"robberyAndTheft",content:[{text:[{content:"Seguradora: Cardif do Brasil Seguros e Garantias S.A. CNPJ: 08.279.191/0001-84 C\xf3digo SUSEP: 0293-3 Processo SUSEP: 15414.900738/2014-98 Ramo: 71. Representante de Seguro: Magazine Luiza S/A CNPJ: 47.960.950/0001-21. Remunera\xe7\xe3o: "},{content:"{robberyAndTheftPercentage} - "},{content:"{robberyAndTheftAmount} "},{content:"Corretora: Viotto Corretora de Seguros e Previd\xeancia LTDA. CNPJ: 56.170.061/0001-51 Registro SUSEP: 100059706. Remunera\xe7\xe3o: 0,03%."}]}]}],u=`Pode ficar tranquilo! N\xf3s protegemos por 1 ano os seus equipamentos port\xe1teis contra roubo e furto qualificado e quebra acidental.`,v=(a,b)=>a?`(${a}x de ${b})`:null,w=["incluir Prote\xe7\xe3o Roubo e Furto","qualificado com quebra acidental de 1 ano"],x=(a,b)=>a?`${a}x de ${b} sem juros`:null,y=a=>`(\xe0 vista ${a})`;var z=c(93837),A=c(99673),B=c(68054),C=c(91489),D=c(63825);let E=A.ZP.div`
  ${a=>(0,C.aK)("large")(a)} {
    display: grid;
    grid-template-columns: 3fr 9fr;
    border-bottom: 1px solid;
    border-color: ${a=>(0,C.kJ)("light")(a)};
    padding: 17px 0;
  }
`,F=A.ZP.div`
  ${a=>(0,C.aK)("large")(a)} {
    display: flex;
    align-items: center;
    border-left: 1px solid;
    border-color: ${a=>(0,C.kJ)("light")(a)};
    & label svg {
      align-self: flex-start;
    }
  }
`,G=(0,A.ZP)(D.Z)`
  font-size: ${a=>(0,C.R)("fontSizes.1")(a)}px;
  line-height: ${a=>(0,C.R)("lineHeights.input")(a)}em;
  margin: 10px 0;

  ${a=>(0,C.aK)("large")(a)} {
    margin: 15px 0 0 0;
  }
`,H=A.ZP.span`
  color: ${a=>(0,C.uu)("base")(a)};
  font-size: ${a=>(0,C.R)("fontSizes.1")(a)}px;
  padding-left: 12px;
`,I=(0,A.ZP)(H)`
  color: ${a=>(0,C.uu)("primary")(a)};
  font-size: ${a=>(0,C.R)("fontSizes.4")(a)}px;
  font-weight: ${a=>(0,C.R)("fontWeights.medium")(a)};
  line-height: ${a=>(0,C.R)("lineHeights.fontSize")(a)};
`,J=A.ZP.div`
  border-bottom: 1px solid ${a=>(0,C.ow)("border.light")(a)};
  ${B.Dh}
  &:first-child {
    border-top: 1px solid ${a=>(0,C.ow)("border.light")(a)};
  }

  ${a=>(0,C.aK)("large")(a)} {
    padding: 0 17px;
    border: none;
    &:first-child {
      border: none;
    }
  }
`,K=A.ZP.div`
  display: flex;
  flex-direction: column;

  ${H} {
    margin-bottom: 5px;
  }
`,L=A.ZP.span`
  color: ${a=>(0,C.uu)("primary")(a)};
  font-weight: ${a=>(0,C.R)("fontWeights.bold")(a)};
`;var M=c(87043);let N=({options:a,onChange:b,desktopMode:c,installmentQuantity:d})=>{let[e,g]=(0,f.useState)(new Map),h=(a,c)=>{var d,f;b(c,(null==(d=e.get(null==c?void 0:c.description))?void 0:d.checked)||!1);let{name:h,checked:i}=a.target;null!=(f=e.get(null==c?void 0:c.description))&&f.checked?g(a=>(a.delete(null==c?void 0:c.description),new Map(a))):g(a=>new Map(a).set(h,{checked:i,item:c}))};return a.map(a=>{var b;return f.createElement(J,{key:null==a?void 0:a.id,p:"12px 0"},f.createElement(M.XZ,{onChange:b=>h(b,a),name:null==a?void 0:a.description,checked:(null==(b=e.get(null==a?void 0:a.description))?void 0:b.checked)||!1},c?f.createElement(K,null,f.createElement(I,null,w[0],f.createElement("br",null),w[1]),f.createElement("br",null),f.createElement(H,null,"Por apenas"," ",f.createElement(L,null,x(d,(0,z.Z)({value:(null==a?void 0:a.price)/d}))),y((0,z.Z)({value:null==a?void 0:a.price})))):f.createElement(H,null,"Incluir por apenas"," ",f.createElement("b",{"data-testid":"option-price"},(0,z.Z)({value:null==a?void 0:a.price}))," ",f.createElement("span",{"data-testid":"installment-quantity"},v(d,(0,z.Z)({value:(null==a?void 0:a.price)/d})))),f.createElement("br",null)))})};N.defaultProps={options:[],onChange:()=>({}),desktopMode:!1,installmentQuantity:null};var O=N,P=c(70615);let Q=(0,A.ZP)(P.$)`
  background-color: ${a=>(0,C.dF)("primary")(a)};
  color: ${a=>(0,C.uu)("lightest")(a)};
`,R=(0,A.ZP)(M.xu)`
  padding: 0 12px;
  max-width: 1366px;
  margin: auto;
`,S=(0,A.ZP)(M.kC)`
  align-items: center;
  margin: 10px 0;
`,T=(0,A.ZP)(M.Ee)`
  width: 60px;
  height: 60px;
`,U=(0,A.ZP)(M.X6)`
  color: ${a=>(0,C.uu)("scratched")(a)};
  font-size: ${a=>(0,C.R)("fontSizes.2")(a)}px;
  line-height: ${a=>(0,C.R)("lineHeights.input")(a)}em;
  margin-left: 5px;
  font-weight: ${a=>(0,C.R)("fontWeights.bold")(a)};
`,V=(0,A.ZP)(M.kC)`
  align-items: center;
  color: ${a=>(0,C.uu)("base")(a)};
`,W=(0,A.ZP)(M.X6)`
  font-size: ${a=>(0,C.R)("fontSizes.2")(a)}px;
  margin-left: 5px;
  font-weight: ${a=>(0,C.R)("fontWeights.bold")(a)};
`,X=A.ZP.div`
  padding-bottom: 10px;
  margin-bottom: 5px;
`,Y=(0,A.ZP)(M.kC)`
  padding: 16px 14px;
  justify-content: space-between;
  cursor: pointer;
  p {
    color: ${a=>(0,C.uu)("base")(a)};
    font-size: ${a=>(0,C.R)("fontSizes.2")(a)}px;
  }
`,Z=(0,A.ZP)(M.xv)``,$=(0,A.ZP)(M.xv)`
  text-align: center;
  font-size: ${a=>(0,C.R)("fontSizes.1")(a)}px;
`,_=({service:a,onChange:b,desktopMode:c,installmentQuantity:d})=>null!=a&&a.offers.length?f.createElement(E,null,f.createElement("div",null,f.createElement(V,null,c?f.createElement(g.ggJ,{width:208,height:59}):f.createElement(f.Fragment,null,f.createElement(g.Q4t,{"aria-hidden":!0}),f.createElement(W,{as:"p",mt:"10px"},null==a?void 0:a.description))),f.createElement(G,null,u)),f.createElement(F,null,f.createElement(O,{options:null==a?void 0:a.offers,onChange:b,desktopMode:c,installmentQuantity:d}))):null;_.defaultProps={service:{offers:[]},desktopMode:!1,installmentQuantity:null};var aa=_;let ab=[`- Mais tempo de garantia al\xe9m do fabricante`,`- Consertos utilizando pe\xe7as genu\xednas`,`- Mais de 3 mil assist\xeancias t\xe9cnicas em todo o Brasil`,"- Concorra a R$ 5.000,00 durante 3 meses"],ac=(a,b)=>`${a} por apenas ${b}`,ad=(a,b)=>a?` (${a}x de ${b})`:"";var ae=c(84546);let af=(0,A.ZP)(ae.Z)``,ag=(0,A.ZP)(D.Z)`
  font-size: ${a=>(0,C.R)("fontSizes.1")(a)}px;
  line-height: ${a=>(0,C.R)("lineHeights.input")(a)}em;
`;var ah=c(65055);let ai=({service:a,onChange:b,Icon:c,defaultOption:d,installmentQuantity:e})=>{var g;if(!(null!=a&&a.offers.length))return null;let[h,i]=(0,f.useState)(d[0]),j=(a,c)=>{i(c),b(a,c)},k=null==a?void 0:null==(g=a.offers)?void 0:g.map(a=>({id:null==a?void 0:a.id,value:null==a?void 0:a.id,price:null==a?void 0:a.price,label:`${ac(null==a?void 0:a.description,(0,z.Z)({value:null==a?void 0:a.price}))}${ad(e,(0,z.Z)({value:(null==a?void 0:a.price)/e}))}`,description:null==a?void 0:a.description,treeId:null==a?void 0:a.treeId,wageCompensation:null==a?void 0:a.wageCompensation}));return f.createElement(f.Fragment,null,f.createElement(V,null,f.createElement(c,{"aria-hidden":!0}),f.createElement(W,{as:"p"},null==a?void 0:a.description)),f.createElement(af,{mb:"15px",mt:"10px"},ab.map((a,b)=>f.createElement(ag,{key:`${a}${b}`},a))),f.createElement(af,null,f.createElement(ah.Z,{options:k.concat(d),selectedOption:null==h?void 0:h.value,onChange:j,p:"12px 0"})))};ai.defaultProps={service:{offers:[]},onChange:()=>({}),defaultOption:[],installmentQuantity:null};var aj=ai;let ak=({service:a,onChange:b,installmentQuantity:c})=>f.createElement(f.Fragment,null,f.createElement(aj,{service:a,onChange:b,defaultOption:[{value:null,label:"Sem garantia estendida, somente garantia do fabricante"}],Icon:g.Jpv,installmentQuantity:c}));ak.defaultProps=aj.defaultProps;var al=ak;let am=({service:a,onChange:b,installmentQuantity:c})=>f.createElement(f.Fragment,null,f.createElement(aj,{service:a,onChange:b,Icon:g.Nb3,defaultOption:[{value:null,label:"Sem garantia estendida, somente garantia do fabricante"}],installmentQuantity:c}));am.defaultProps=aj.defaultProps;var an=am,ao=c(40978),ap=c(82753);let aq=a=>!!Object.values(a).find(a=>a.length>0),ar=a=>Object.entries(a).reduce((a,[b,c])=>c.length?Object.assign({},a,{[b]:c}):a,{}),as=a=>Object.values(a).reduce((a,b)=>a.concat(b),[]),at=(0,A.ZP)(M.xu)`
  max-width: 1366px;
  margin: auto;
`,au=(0,A.ZP)(M.X6)`
  text-align: center;
  margin: 15px;
  font-weight: ${a=>(0,C.R)("fontWeights.bold")(a)};
  font-size: ${a=>(0,C.R)("fontSizes.0")(a)};
`,av=(0,A.ZP)(M.xv)`
  padding: 5px 0;
  line-height: ${a=>(0,C.R)("lineHeights.input")(a)}em;
`,aw=(0,A.ZP)(M.xv)`
  text-decoration: underline;
  color: ${a=>(0,C.uu)("base")(a)};
`,ax=a=>{let{terms:b,placeholders:c={}}=a,g=(0,e.Z)(a,["terms","placeholders"]),h=a=>a&&Object.entries(c).reduce((a,[b,c])=>a.replace(`{${b}}`,c),a),i=a=>Object.entries(c).find(([b,c])=>b.startsWith(a)&&c);return b.map(a=>{var b;return f.createElement(at,(0,d.Z)({},g,{key:null==a?void 0:a.id}),f.createElement(au,{as:"p"},h(null==a?void 0:a.title)),(!(null!=a&&a.financialService)||i(a.financialService))&&f.createElement(av,{"data-testid":a.id},null==a?void 0:null==(b=a.content)?void 0:b.map(a=>{var b;return a.link?f.createElement(aw,{as:"a",href:null==a?void 0:a.link,key:null==a?void 0:a.link},h(null==a?void 0:a.text)):null==a?void 0:null==(b=a.text)?void 0:b.map(a=>f.createElement(av,{as:"span",key:a.content},null!=a&&a.bold?f.createElement("b",null,h(null==a?void 0:a.content)):h(null==a?void 0:a.content)))})))})};ax.defaultProps={terms:[]};var ay=ax;let az=({servicesSelected:a,showRobberyTerm:b,setShowRobberyTerm:c,showExtendedWarrantyTerm:d,setShowExtendedWarrantyTerm:e,showPaymentsWay:g,setShowPaymentsWay:h})=>{let i=Object.values(a).reduce((a,b)=>(b.forEach(b=>{a+=b.price}),a),0),o=Object.values(a).reduce((a,b)=>(b.forEach(b=>{a.push(b.description)}),a),[]),p=Object.values(a).reduce((b,c,d)=>{let e=Object.keys(a)[d];return c.forEach(a=>{var c,d;Object.assign(b,{[`${e}Amount`]:null!=(c=a.wageCompensation)&&c.amount?(0,z.Z)({value:a.wageCompensation.amount}):null,[`${e}Percentage`]:null!=(d=a.wageCompensation)&&d.percentage?`${a.wageCompensation.percentage}%`:null})}),b},{});return f.createElement(f.Fragment,null,[{id:"robbery-theft-terms",show:b,terms:m,title:"fechar termos de roubo e furto",label:j,onClick:()=>c(!1)},{id:"extended-warranty-terms",show:d,terms:n,title:"fechar termos de garantia estendida",label:k,onClick:()=>e(!1)},{id:"payments-way-terms",show:g,terms:t,title:"fechar formas de pagamento de servi\xe7o",label:l,onClick:()=>h(!1)}].map(a=>f.createElement(ao.YE,{fullScreen:!0,direction:"right",key:a.id,visible:a.show,"data-testid":a.id},f.createElement(Q,{leftButton:{icon:"back",title:a.title,iconColor:"#fefefe",onClick:a.onClick},label:a.label}),f.createElement(M.D_,null),f.createElement(ay,{terms:a.terms,placeholders:{totalPrice:(0,z.Z)({value:i}),description:(0,ap.zY)(o),extendedWarrantyAmount:p.extendedWarrantyAmount,extendedWarrantyPercentage:p.extendedWarrantyPercentage,certainExchangeAmount:p.certainExchangeAmount,certainExchangePercentage:p.certainExchangePercentage,robberyAndTheftAmount:p.robberyAndTheftAmount,robberyAndTheftPercentage:p.robberyAndTheftPercentage},p:"0 12px"}))))};var aA=az;let aB=a=>{var b;let{installment:c,services:j,servicesPriority:m,onContinueClick:n,visible:t,timeTransition:u,onCloseClick:v,protectLabelAs:w,onChange:x,showCloseButton:y}=a,z=(0,e.Z)(a,["installment","services","servicesPriority","onContinueClick","visible","timeTransition","onCloseClick","protectLabelAs","onChange","showCloseButton"]),A="robberyAndTheft",B="extendedWarranty",C="certainExchange",[D,E]=(0,f.useState)(!1),[F,G]=(0,f.useState)(!1),[H,I]=(0,f.useState)(!1),[J,K]=(0,f.useState)({[A]:[],[B]:[],[C]:[]}),{records:L}=j,N=null!==(b=null==c?void 0:c.quantity)&& void 0!==b?b:null,[O,P,V]=(0,ap.yH)(L,m),W=(a,b)=>{let c=b?J[A].filter(b=>(null==b?void 0:b.id)!==(null==a?void 0:a.id)):J[A].concat(a);x(ar(Object.assign({},J,{[A]:c}))),K(Object.assign({},J,{[A]:c}))},_=(a,b,c)=>{let d=[b];x(ar(Object.assign({},J,{[c]:(null==b?void 0:b.value)===null?[]:d}))),K(Object.assign({},J,{[c]:(null==b?void 0:b.value)===null?[]:d}))},ab=()=>{as(J).length?n(ar(J)):n(null)};return f.createElement(f.Fragment,null,f.createElement(ao.YE,(0,d.Z)({visible:t,direction:"right",timeTransition:u,fullScreen:!0},z),f.createElement(M.D_,null),f.createElement(Q,{leftButton:{icon:"close",title:"fechar servi\xe7os financeiros",onClick:v,iconColor:"#fefefe"},label:h,showCloseButton:y}),f.createElement(R,null,f.createElement(S,null,f.createElement(T,{src:j.image,width:60,height:60,"aria-hidden":!0}),f.createElement(U,{as:w},"Proteja o seu produto por muito mais tempo!")),f.createElement(aa,{service:O,"data-testid":"roubo-furto",onChange:W,installmentQuantity:N}),f.createElement(X,null),f.createElement(an,{service:V,"data-testid":"troca-certa",onChange:(a,b)=>_(a,b,C),installmentQuantity:N}),f.createElement(X,null),f.createElement(al,{service:P,"data-testid":"garantia-estendida",onChange:(a,b)=>_(a,b,B),installmentQuantity:N}),f.createElement(M.zx,{"data-testid":"financial-services-submit",m:"10px 0",color:"secondary",width:"100%",fontSize:1,onClick:ab,full:!0},aq(J)?"Contratar servi\xe7o e ir para sacola":"Ir para sacola"),f.createElement(X,null),!!as(J).length&&f.createElement($,null,r," ",f.createElement("b",null,s)),f.createElement(X,null),f.createElement(Y,{onClick:()=>E(!0),"data-testid":"robbery-theft-term-item"},f.createElement("p",null,i),f.createElement(g.olP,{width:"12px",height:"12px"})),f.createElement(Y,{onClick:()=>G(!0),"data-testid":"extended-warranty-term-item"},f.createElement("p",null,k),f.createElement(g.olP,{width:"12px",height:"12px"})),!!as(J).length&&f.createElement(Y,{onClick:()=>I(!0),"data-testid":"payments-way-term-item"},f.createElement("p",null,l),f.createElement(g.olP,{width:"12px",height:"12px"})),f.createElement(X,null),f.createElement(Z,{fontSize:0,fontWeight:"medium"},o),f.createElement(Z,{fontSize:0,color:"scratched"},q),f.createElement(X,null),f.createElement(Z,{fontSize:0,fontWeight:"medium"},p),f.createElement(Z,{fontSize:0,color:"scratched"},'Seguro Garantia Estendida Original, orientamos a leitura das condi\xe7\xf5es gerais do seguro no link www.luizaseg.com.br. Seguro garantido pela Luizaseg Seguros S/A, CNPJ: 07.746.953/0001-42, Processo Susep N\xba 15414.900276/2014-17. Representante de Seguro: Magazine Luiza S/A, CNPJ 47.960.950/0001-21. Corretora: Viotto Corretora de Seguros e Previd\xeancia LTDA, CNPJ 56.170.061/0001-51, Registro SUSEP 10.0059706. “Ades\xe3o Opcional”. "A  contrata\xe7\xe3o de seguro \xe9 opcional, sendo poss\xedvel a desist\xeancia do contrato em at\xe9 7 (sete) dias corridos com a devolu\xe7\xe3o integral do valor pago." "\xc9 proibido condicionar desconto no pre\xe7o do bem \xe0 aquisi\xe7\xe3o do seguro." T\xedtulo de Capitaliza\xe7\xe3o garantido Capitaliza\xe7\xe3o: Icatu Capitaliza\xe7\xe3o S.A., CNPJ: 74.267.170/0001-73 Processo SUSEP: 15414.900051/2018-86. Ouvidoria Icatu Seguros: 0800 286 0047. Consulte o regulamento do sorteio no site: "http://www.icatuseguros.com.br". Modalidade: Incentivo. Pr\xeamio no valor l\xedquido de R$ 5.062,50. Promo\xe7\xe3o v\xe1lida por 3 meses. Sorteios: Mensais a partir do \xfaltimo s\xe1bado do m\xeas subsequente a ades\xe3o.  Consulte o regulamento no link regulamentos.bnpparibascardif.com.br.  "\xc9 proibida a venda de t\xedtulos de capitaliza\xe7\xe3o a menores de dezesseis ano - Art.3\xba, I do C\xf3digo Civil".  "A comercializa\xe7\xe3o de seguro \xe9 fiscalizada pela Susep. www.susep.gov.br - 0800 021 8484". "A aprova\xe7\xe3o do Plano pela Susep n\xe3o implica, por parte da Autarquia, em incentivo ou recomenda\xe7\xe3o \xe0 sua aquisi\xe7\xe3o. "Caso n\xe3o esteja satisfeito com a resposta fornecida pelo SAC, entre em contato com a Ouvidoria : 0800 727 2482 - Dias \xfateis, das 9h as 18 horas (hor\xe1rio de Brasilia) exceto feriados ou bnpparibascardif.com.br/ouvidoria.'))),f.createElement(aA,{servicesSelected:J,showRobberyTerm:D,setShowRobberyTerm:E,showExtendedWarrantyTerm:F,setShowExtendedWarrantyTerm:G,showPaymentsWay:H,setShowPaymentsWay:I}))};aB.defaultProps={installment:{quantity:null},services:{image:""},visible:!0,timeTransition:.3,servicesPriority:[5,3,4],protectLabelAs:"p",onContinueClick:()=>({}),onCloseClick:()=>({}),onChange:()=>({}),showCloseButton:!0};var aC=aB},49647:function(a,b,c){c.d(b,{Z:function(){return r}});var d=c(31461),e=c(2784),f=c(87043),g=c(99673),h=c(91489),i=c(63825),j=c(10200);let k=g.ZP.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.2;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  overflow: hidden;
  ${h.$_}
`,l=(0,g.ZP)(i.Z)`
  padding: 20px 8px;
  ${h.$_}
`,m=(0,g.ZP)(j.Z)`
  text-decoration: underline;
  font-size: unset;
  ${h.$_}
`,n=(0,g.ZP)(j.Z)`
  margin: 8px;
  text-decoration: underline;
  font-size: unset;
  ${h.$_}
`,o=g.ZP.address`
  padding: 20px 8px;
`,p=(0,g.ZP)(i.Z)`
  ${h.$_}
`;function q(a){let{footerData:b,strip:c,colors:g}=a,h=(0,d.Z)(a,["footerData","strip","colors"]),{rules:i="",address:j=[],policy:q={},links:r=[]}=b;return e.createElement(k,h,c&&e.createElement(f.D_,null),e.createElement(l,{"data-testid":"rules-line",color:g.rules},i),!!(null!=q&&q.label)&&!!(null!=q&&q.link)&&e.createElement(m,{"data-testid":"policy-line",target:"_blank",href:q.link,rel:null==q?void 0:q.rel,color:g.policy},q.label),!!(null!=r&&r.length)&&r.map(a=>e.createElement(n,{key:a.label,"data-testid":"link-line",target:"_blank",href:a.url,rel:null==a?void 0:a.rel,color:g.link},a.label)),e.createElement(o,null,j.map((a,b)=>e.createElement(p,{key:b,"data-testid":"address-line",color:g.address},a))))}q.defaultProps={footerData:{},bg:"background.primary",colors:{rules:"text.white",policy:"text.white",link:"text.white",address:"text.white"},strip:!0};var r=q},46671:function(a,b,c){c.d(b,{Z:function(){return P}});var d=c(7896),e=c(31461),f=c(2784),g=c(34490),h=c(82469),i=c(99673),j=c(91489),k=c(68054),l=c(87043);let m=(0,i.ZP)(l.D_)``,n=i.ZP.div.attrs(a=>Object.assign({bg:"background.primary"},a))`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  ${j.$_}
  ${k.Dh}
`;n.ContentWrapper=i.ZP.div`
  width: 100%;
  /* TODO: USE A THEME SETTING HERE */
  max-width: 1312px;
`,n.Content=i.ZP.div.attrs(a=>Object.assign({pt:"4",pb:"3"},a))`
  background-color: ${(0,j.dF)("primary")};
  ${k.Dh}
`,n.Bottom=i.ZP.div`
  display: flex;
  justify-content: center;
  background-color: ${(0,j.dF)("white")};
  width: 100%;
`,n.BottomContent=i.ZP.div.attrs(a=>Object.assign({maxWidth:"1000px",p:"3",lineHeight:"fontSize"},a))`
  width: 100%;
  text-align: center;

  ${k.cp}
  ${k.bK}
  ${k.Dh}
`;let o=i.ZP.a`
  display: flex;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
`;o.Content=i.ZP.div`
  width: 100%;
  max-width: 990px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${(0,j.R)("baseColors.magablu.light")};
`,o.Title=i.ZP.p.attrs(a=>Object.assign({color:"text.lightest",fontSize:3},a))`
  text-align: center;
  margin-bottom: 20px;
  ${j.$_}
  ${k.cp}
`,o.MethodsContainer=i.ZP.div`
  display: flex;
  justify-content: center;
`,o.MethodsContent=i.ZP.ul.attrs(a=>Object.assign({maxWidth:"620px"},a))`
  list-style: none;
  display: flex;
  justify-content: space-between;
  width: 100%;
  ${k.bK}
`,o.Method=i.ZP.li`
  width: 35px;
`,o.MethodImage=(0,i.ZP)(l.Ee)``;let p=i.ZP.div`
  padding: 10px 0;
`;p.CertificatesContainer=i.ZP.div.attrs(a=>Object.assign({mb:"3"},a))`
  display: flex;
  justify-content: center;
  ${k.Dh}
`,p.CertificatesContent=i.ZP.ul.attrs(a=>Object.assign({maxWidth:"990px",minWidth:"300px"},a))`
  display: flex;
  list-style: none;
  justify-content: space-between;
  align-items: center;
  ${k.bK}
  ${k.cp}
`,p.Title=(0,i.ZP)(l.rU).attrs(a=>Object.assign({color:"text.lightest",p:0},a))`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 120px;

  & > *:not(:first-child) {
    margin-left: ${(0,j.R)("space.2")}px;
  }
`,p.TitleLabel=i.ZP.span.attrs(a=>Object.assign({color:"text.lightest",fontSize:0,maxWidth:"70px"},a))`
  ${k.bK}
  ${k.cp}
  ${j.$_}
`;let q=(0,i.ZP)(l.rU).attrs(a=>Object.assign({color:"text.lightest"},a))``,r=i.ZP.div.attrs(a=>Object.assign({mb:"3"},a))`
  display: flex;
  justify-content: center;
  ${k.Dh}
`;r.Content=i.ZP.div.attrs(a=>Object.assign({maxWidth:"620px"},a))`
  width: 100%;
  ${k.bK}
`;let s=i.ZP.div`
  display: flex;
  justify-content: center;
`;s.SectionsList=i.ZP.ul.attrs(a=>Object.assign({maxWidth:"990px"},a))`
  display: flex;
  justify-content: space-around;
  list-style: none;
  width: 100%;
  ${k.bK}
`,s.Column=i.ZP.li``,s.SectionTitle=i.ZP.p.attrs(a=>Object.assign({color:"text.lightest",fontSize:1,fontWeight:"regular"},a))`
  padding: 10px;
  ${j.$_}
  ${k.cp}
`,s.LinksList=i.ZP.ul`
  display: inline-flex;
  writing-mode: vertical-lr;
  flex-wrap: wrap;
  align-content: flex-start;
  max-height: 270px;
  line-height: ${(0,j.R)("lineHeights.thin")}px;

  ${q} {
    font-size: ${(0,j.R)("fontSizes.0")}px;
    color: ${(0,j.R)("colors.lightBlue")};
  }
`,s.LinkItem=i.ZP.li`
  list-style: none;
  writing-mode: horizontal-tb;
  padding: 1px 0px;
`,s.Content=i.ZP.span.attrs(a=>Object.assign({gap:"12px"},a))`
  &:not(:first-child) {
    margin-left: ${({gap:a})=>a};
  }
`,s.Text=i.ZP.div`
  ${k.bK}
  ${k.cp}
`,s.Image=(0,i.ZP)(l.Ee).attrs(a=>Object.assign({maxHeight:"12px"},a))`
  width: auto;
`;let t=(0,i.ZP)(l.xv).attrs(a=>Object.assign({fontSize:0},a))`
  padding: ${(0,j.R)("space.1")}px ${(0,j.R)("space.3")}px;
  color: ${(0,j.uu)("light")};
  ${k.cp}
  ${j.$_}
`,u=i.ZP.a`
  color: ${(0,j.uu)("light")};
`;var v=c(76635),w=c.n(v);let x=i.ZP.div``,y="text.lightest",z=i.ZP.div.attrs(a=>Object.assign({color:y},a))`
  padding: 10px;
  ${j.$_}
`,A=i.ZP.p.attrs(a=>Object.assign({fontSize:5},a))`
  margin-bottom: 10px;
  line-height: 24px;
  ${k.cp}
`,B=i.ZP.p.attrs(a=>Object.assign({fontSize:0},a))`
  margin-bottom: 10px;
  ${k.cp}
`,C=i.ZP.ul`
  list-style: none;
`,D=i.ZP.li`
  display: flex;
  margin-bottom: 20px;
`,E=(0,i.ZP)(l.rU).attrs(a=>Object.assign({color:y,pl:1},a))``,F=i.ZP.p.attrs(a=>Object.assign({color:y,fontSize:1,fontWeight:"regular"},a))`
  padding: 1rem 0 10px 0;
  ${j.$_}
  ${k.cp}
`,G=i.ZP.ul`
  list-style: none;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 0.7rem;
`,H=(0,i.ZP)(l.Ee).attrs(a=>Object.assign({minHeight:"35px"},a))`
  width: auto;
`,I=i.ZP.div.attrs(a=>Object.assign({},a))`
  ${k.cp}
  margin-bottom: 10px;
`,J=i.ZP.p.attrs(a=>Object.assign({fontSize:3,color:y},a))`
  svg {
    margin-right: 2px;
  }
  ${k.cp}
  display: flex;
  align-items: center;
`,K=({phone:a,salesChannels:b,openingHours:c,accessibility:d,mobileVersion:e,links:h,social:i})=>f.createElement(x,null,f.createElement(z,null,a&&f.createElement(A,null,a),f.createElement(I,{"data-testid":"sales-channels"},null==b?void 0:b.map(a=>f.createElement(J,{key:w().uniqueId("salesChannelsContactSection")},a.icon,f.createElement("span",null,a.label)))),f.createElement(B,null,c),f.createElement(C,null,null==h?void 0:h.map((a,b)=>f.createElement(D,{key:b},f.createElement(E,{href:a.url,title:a.title,p:0},a.label))),d&&f.createElement(D,null,f.createElement(g.yqN,{color:"currentColor"}),f.createElement(E,{href:d.url,title:d.title},d.label)),e&&f.createElement(D,null,f.createElement(g.MPk,{color:"currentColor"}),f.createElement(E,{href:e.url,title:e.title},e.label))),null!=i&&i.links?f.createElement("div",null,f.createElement(F,null,i.title||"Siga para mais conte\xfado:"),f.createElement(G,null,i.links.map(({url:a,img:b,label:c},d)=>f.createElement(D,{key:d},f.createElement(l.rU,{href:a,target:"_blank",title:c},f.createElement(H,{src:b,alt:c})))))):null));var L=K;let M=(a={})=>{let{url:b,title:c,label:h}=a,i=(0,e.Z)(a,["url","title","label"]);return f.createElement("li",null,f.createElement(p.Title,(0,d.Z)({"data-testid":"certificates-title",title:c,href:b},i),f.createElement(g.$LW,{"data-testid":"certificates-title-icon",color:"currentColor"}),h&&f.createElement(p.TitleLabel,{"data-testid":"certificates-title-label"},h)))},N=({url:a,title:b,gap:c,content:g=[],linkAttrs:h={}},i)=>f.createElement(q,(0,d.Z)({"data-testid":"link-item",href:a,title:`Link para: ${b}`,px:"10px",onClick:b=>i(b,{url:a})},h),g.map((g,h)=>{let{label:j,img:k}=g,l=(0,e.Z)(g,["label","img","iconId"]);return f.createElement(s.Content,{key:h,gap:c,onClick:b=>i(b,{url:a})},j&&f.createElement(s.Text,l,j),k&&f.createElement(s.Image,(0,d.Z)({src:k,alt:b},l)))}));function O({data:a,onSubmitSubscriptionForm:b,onMenuItemClick:c}){var e,g,i,j;let{paymentMethods:k={},certificatePartners:l={},linksColumns:q=[],contactSection:v={},bottomInfo:w={},subscriptionForm:x}=a;return f.createElement(n,{"data-testid":"footer-elem"},f.createElement(n.ContentWrapper,null,f.createElement(m,{size:5,position:"relative"}),f.createElement(n.Content,null,k&&f.createElement(o,{"data-testid":"payment-methods-container",href:k.link},f.createElement(o.Content,null,f.createElement(o.Title,null,k.label),f.createElement(o.MethodsContainer,null,f.createElement(o.MethodsContent,null,null==(e=k.list)?void 0:e.map((a,b)=>f.createElement(o.Method,{"data-testid":"payment-option",key:b},f.createElement(o.MethodImage,{src:a.img,alt:a.title}))))))),f.createElement(p,null,f.createElement(p.CertificatesContainer,null,f.createElement(p.CertificatesContent,null,M(l.title),null==l?void 0:null==(g=l.certificates)?void 0:g.map((a,b)=>f.createElement("li",{"data-testid":"certificate-partner",key:b},N(a,c))),f.createElement("li",null,f.createElement("a",{id:"seloEbit",href:"http://www.ebit.com.br/552",rel:"noreferrer",target:"_blank","data-noop":"redir(this.href);"})),f.createElement("li",null,f.createElement("div",{id:"reputation-ra"}))))),x&&f.createElement(r,null,f.createElement(r.Content,null,f.createElement(h.ok,(0,d.Z)({onSubmitForm:b},x)))),f.createElement(s,null,f.createElement(s.SectionsList,null,q.map((a,b)=>f.createElement(s.Column,{"data-testid":"link-column",key:b},a.map((a,b)=>{let d=a.links;return f.createElement("div",{"data-testid":"link-section",key:b},f.createElement(s.SectionTitle,null,a.title),f.createElement(s.LinksList,null,d.map((b,d)=>f.createElement(s.LinkItem,{key:`${a}-${d}`,onClick:a=>c(a,b)},N(b)))))}))),v&&f.createElement(s.Column,{"data-testid":"link-column"},f.createElement(s.SectionTitle,null,v.label),f.createElement(L,v)))))),f.createElement(n.Bottom,null,f.createElement(n.BottomContent,null,null==(i=w.texts)?void 0:i.map((a,b)=>f.createElement(t,{key:b,"data-testid":"bottom-info-text-line"},a)),null==(j=w.links)?void 0:j.map((a,b)=>f.createElement(t,{key:b,"data-testid":"bottom-info-link-line"},a.label,": ",f.createElement(u,{href:a.url},a.url))))))}O.defaultProps={data:{certificatePartners:{},linksColumns:[],contactSection:{},bottomInfo:{}},onMenuItemClick:()=>{}};var P=O},71782:function(a,b,c){c.d(b,{Z:function(){return q}});var d=c(2784),e=c(34490),f=c(99673),g=c(91489);let h=f.ZP.header``,i=f.ZP.div`
  background: ${a=>(0,g.R)("palette.background.primary")(a)};
  height: ${a=>(0,g.R)("sizes.header")(a)};
  color: #fff;
  padding: 5px 9px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    [id='logo'] {
      margin-top: 5px;
      width: 98px;
      height: 21px;
    }

    [id='button-burger'] {
      width: 22px;
      height: 22px;
    }
  }

  [id='search-container'] {
    margin-bottom: 5px;
  }
`,j=f.ZP.div`
  > a {
    position: absolute;
    right: 0px;
    top: 50%;
    transform: translateY(-50%);
  }
`,k=f.ZP.a`
  text-decoration: none;
`;f.ZP.input`
  width: 100%;
  border: 0px;
  height: 30px;
  background-color: #fff;
  color: #9b9b9b;
  font-size: 16px;
  padding-left: 10px;
  box-sizing: border-box;

  ::-webkit-search-cancel-button {
    background-color: #818181;
    position: relative;
    right: 10px;
  }
`;var l=c(87043),m=c(1756),n=c(82469),o=c(40978);function p({isRendered:a,customSidebar:b,onMenuHeaderClick:c,onLogoClick:f,onMenuItemClick:g,onLogout:p,onSearch:q,onShoppingBagClick:r,onTypeChange:s,onHeaderSuggestionLinkClick:t,onSuggestItemClick:u,onProductItemClick:v,onTopTermItemClick:w,onInputClear:x,onInputClose:y,onInputOpen:z,initialValue:A,data:B,linksSuggestions:C,suggestData:D,logoProps:E,sideMenuOpen:F,topTermsData:G}){var H,I,J,K,L,M;let[N,O]=(0,d.useState)(F),{menuData:P,headerData:Q}=B,R=(a,b)=>{O(!1),c(a,b)},S=(a,b,c)=>{O(!1),g(a,b,c)};return d.createElement(h,null,d.createElement(i,null,d.createElement("header",null,d.createElement(n.hU,{name:"Burger",onClick:()=>O(!N)},d.createElement(e.OWX,{role:"button","aria-label":(null==Q?void 0:null==(H=Q.menu)?void 0:H.ariaLabel)||"abrir o menu","data-testid":"button-burger",id:"button-burger",color:"#fff"})),d.createElement(k,{onClick:a=>{var b;return f(a,{url:(null==Q?void 0:null==(b=Q.logo)?void 0:b.url)||"/"})},href:(null==Q?void 0:null==(I=Q.logo)?void 0:I.url)||"/",role:"link","data-testid":"logo","aria-label":(null==Q?void 0:null==(J=Q.logo)?void 0:J.ariaLabel)||"ir para p\xe1gina inicial"},d.createElement(l.TR,E)),d.createElement(j,null,d.createElement(k,{href:null==Q?void 0:null==(K=Q.shoppingBag)?void 0:K.url,onClick:r,role:"link","aria-label":(null==Q?void 0:null==(L=Q.shoppingBag)?void 0:L.ariaLabel)||"ir para sacola"},d.createElement(e.CKR,{id:"shoppingBag",color:"#fff",width:24,height:24})))),d.createElement(n.Mj,{onSearch:q,onInputClear:x,onSuggestItemClick:u,onProductItemClick:v,onTopTermItemClick:w,onTypeChange:s,onInputClose:y,onInputOpen:z,placeholder:null==Q?void 0:null==(M=Q.search)?void 0:M.placeholder,initialValue:A,list:D,topTerms:G})),d.createElement(o.f4,{isRendered:a,data:C,onClick:t,isMobile:!0}),d.createElement(l.D_,{position:"relative"}),d.createElement(o.YE,{visible:N,bg:"base",onClickOutside:()=>O(!1)},b?(0,d.cloneElement)(b,{data:null==P?void 0:P.data}):d.createElement(m.Z,{data:null==P?void 0:P.data,onMenuHeaderClick:R,onLogout:p,onMenuItemClick:S})))}p.defaultProps={customSidebar:void 0,suggestData:[],initialValue:"",logoProps:{},data:{headerData:{},menuData:{data:{header:{label:"",url:"",helpers:[]},moreInformation:[]}}},linksSuggestions:{links:[],title:""},isRendered:!1,sideMenuOpen:!1,onCollapsedClick:()=>{},onMenuHeaderClick:()=>{},onMenuItemClick:()=>{},onLogoClick:()=>{},onLogout:()=>{},onInputClear:()=>{},onShoppingBagClick:()=>{},onSuggestItemClick:()=>{},onProductItemClick:()=>{},onInputClose:()=>{},onInputOpen:()=>{}};var q=p},42887:function(a,b,c){c.d(b,{Z:function(){return R}});var d=c(7896),e=c(2784),f=c(13980),g=c(34490),h=c(99673),i=c(91489),j=c(68054),k=c(15566),l=c(82469),m=c(87043);let n=h.ZP.header.attrs(a=>Object.assign({bg:"background.primary",px:2},a))`
  display: flex;
  justify-content: center;
  width: 100%;
  ${i.$_}
  ${j.Dh}
`,o=h.ZP.div`
  width: 100%;
  /* TODO: USE A THEME SETTING HERE */
  max-width: 1366px;
  position: relative;
  display: grid;
  grid-template-columns: 95px 140px 1fr;
  grid-template-areas:
    '. . links'
    'lu logo widgets'
    'lu menus menus'
    'strip strip strip';
`,p=(0,h.ZP)(m.rU)`
  grid-area: lu;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`,q=(0,h.ZP)(m.rU).attrs(a=>Object.assign({mr:3},a))`
  grid-area: logo;
  display: flex;
  align-items: center;
  cursor: pointer;

  /* Fine tuning: this padding aligns the logo with the search bar vertically */
  padding-bottom: 8px;

  ${j.Dh}
`,r=(0,h.ZP)(k.Z).attrs(()=>({width:138,height:30}))``,s=h.ZP.div.attrs(a=>Object.assign({my:3},a))`
  grid-area: links;
  display: flex;
  justify-content: space-between;
  ${j.Dh}
`,t=h.ZP.div.attrs(a=>Object.assign({mb:3},a))`
  grid-area: widgets;
  display: flex;
  align-items: center;

  ${j.Dh}
`,u=h.ZP.div`
  flex-grow: 1;
  margin-top: ${a=>a.hasSibling?"25px;":"0px;"};
`,v=(0,h.ZP)(l.Rs).attrs(a=>Object.assign({backgroundColor:(0,i.dF)("primary")(a),iconColor:(0,i.uu)("white")(a),fontColor:(0,i.uu)("white")(a),counterColor:"#db44a7"},a))``,w=(0,h.ZP)(l.kV).attrs(a=>Object.assign({backgroundColor:(0,i.dF)("primary")(a),iconColor:(0,i.uu)("white")(a),fontColor:(0,i.uu)("white")(a),counterColor:"#58c22e"},a))``,x=h.ZP.div`
  width: 100%;
  grid-area: menus;
`,y=h.ZP.div.attrs(a=>Object.assign({mx:3},a))`
  width: 150px;
  ${j.Dh}
`,z=(0,h.ZP)(m.rU).attrs(a=>Object.assign({mx:1},a))`
  height: 45px;
  width: 60px;
  ${j.Dh}
`,A=(0,h.ZP)(m.D_).attrs(a=>Object.assign({},a))`
  grid-area: strip;
`;var B=c(40978),C=c(31461),D=c(82753);let E=(0,h.ZP)(m.rD).attrs(a=>Object.assign({backgroundColor:"#fffce6"},a))`
  z-index: ${(0,i.R)("zIndices.0")};
`,F=(0,h.ZP)(m.xv).attrs(a=>Object.assign({fontSize:2,fontWeight:"bold",lineHeight:"display",mb:2},a))`
  color: ${a=>(0,i.ow)("primary.dark")(a)};

  ${j.cp}
`,G=(0,h.ZP)(m.xv).attrs(a=>Object.assign({fontSize:1,lineHeight:"display"},a))`
  color: ${a=>(0,i.ow)("primary.dark")(a)};

  ${j.cp}
`,H=(0,h.ZP)(g.JO$).attrs(a=>Object.assign({fill:"primary.dark"},a))``,I=(0,h.ZP)(m.xv).attrs(a=>Object.assign({fontSize:2,fontWeight:"bold",justifySelf:"flex-end",mb:2,mt:3,mr:2},a))`
  color: ${a=>(0,i.ow)("primary.dark")(a)};

  cursor: pointer;
`,J=(0,h.ZP)(m.rj).attrs(a=>Object.assign({pl:2},a))`
  max-width: 364px;
`,K=(0,h.ZP)(m.kC).attrs(a=>Object.assign({alignItems:"center",gap:2,px:2,py:3},a))`
  color: ${a=>(0,i.ow)("primary.dark")(a)};

  max-width: 384px;
`,L=(0,h.ZP)(m.xu).attrs(a=>Object.assign({width:"fit-content"},a))`
  align-self: baseline;
  justify-self: end;
`,M=h.ZP.div.attrs(a=>Object.assign({ml:1,mr:3},a))`
  width: 200px;
  transition: all 0.2s ease-in-out;
  &:hover:not(:disabled) {
    transform: scale(1.1);
  }
  ${j.Dh}
`;function N({onClick:a}){return e.createElement(L,{"data-testid":"close-btn",onClick:a},e.createElement(H,{name:"Close",width:24,height:24,cursor:"pointer","data-testid":"close"}))}let O=a=>{let{onZipCodeClick:b,onClickPopperBtn:c,onClosePopper:f,popperDisplay:g,popper:h}=a,i=(0,C.Z)(a,["onZipCodeClick","onClickPopperBtn","onClosePopper","popperDisplay","popper"]),j=(0,e.useRef)(null),{enabled:k,info:{title:n,content:o,buttonLabel:p}={},success:{title:q,content:r}={}}=h;return e.createElement(e.Fragment,null,e.createElement(M,{"data-testid":"zipcode-text-container",onClick:b,ref:j},e.createElement(l.YQ,(0,d.Z)({},i,{formatter:D.kC}))),k&&e.createElement(E,{visible:!!g,parentRef:j},"success"===g?e.createElement(K,{"data-testid":"popper-success-container"},e.createElement(H,{name:"DoneCircle",width:32,height:32,fill:"alert.success.text","data-testid":"DoneCircle"}),e.createElement(m.xu,null,e.createElement(F,null,q),e.createElement(G,null,r)),e.createElement(N,{onClick:f})):e.createElement(J,{"data-testid":"popper-info-container"},e.createElement(N,{onClick:f}),e.createElement(F,null,n),e.createElement(G,null,o),e.createElement(I,{"data-testid":"popper-btn",onClick:c},p))))};O.defaultProps={popper:{enabled:!1}};var P=O;let Q=({data:a,searchSuggestions:b,topTermsData:c,isRendered:f,initialValue:h,linksSuggestions:i,logoProps:j,logoLuProps:k,onInputClose:m,onInputOpen:C,onSuggestItemClick:D,onProductItemClick:E,onTopTermItemClick:F,onHeaderSuggestionLinkClick:G,onZipCodeClick:H,onClickPopperBtn:I,popperDisplay:J,onClosePopper:K,onSearch:L,onTypeSearch:M,onLogout:N,onLogoClick:O,onMenuItemClick:Q,customLoginMenu:R})=>{var S,T,U,V,W,X;let{account:Y,headerData:Z,companyLinks:$,contactLinks:_,login:aa,wishlist:ab,bag:ac,zipcode:ad}=a,ae=(a,b)=>{Q(a,b)};return e.createElement(n,{"data-testid":"header-elem"},e.createElement(o,null,e.createElement(p,{href:(null==Z?void 0:null==(S=Z.logo)?void 0:S.url)||"/",role:"link","aria-label":(null==Z?void 0:null==(T=Z.logo)?void 0:T.ariaLabel)||"ir para p\xe1gina inicial",onClick:O,"data-testid":"logo-lu-magalu"},k?e.createElement(g.RdR,k):e.createElement(g.he$,{titleAccess:"Logo Lu",width:95,height:113})),e.createElement(q,{href:(null==Z?void 0:null==(U=Z.logo)?void 0:U.url)||"/",role:"link","aria-label":(null==Z?void 0:null==(V=Z.logo)?void 0:V.ariaLabel)||"ir para p\xe1gina inicial",onClick:O,"data-testid":"logo-magalu"},e.createElement(r,j)),e.createElement(s,null,e.createElement(l.pl,{data:$}),e.createElement(l.pl,{data:_})),e.createElement(t,null,e.createElement(u,{hasSibling:(null==i?void 0:null==(W=i.links)?void 0:W.length)>1},e.createElement(l.Mj,{initialValue:h,onSearch:L,onTypeChange:M,onSuggestItemClick:D,onProductItemClick:E,onTopTermItemClick:F,onInputClose:m,onInputOpen:C,placeholder:null==Z?void 0:null==(X=Z.search)?void 0:X.placeholder,list:b.terms,products:b.products,desktopMode:!0,topTerms:c,onMenuItemClick:ae}),e.createElement(B.f4,{isRendered:f,data:i,onClick:G})),e.createElement(y,null,R?e.createElement(e.Fragment,null,R):e.createElement(l.RG,(0,d.Z)({},aa,Y,{onLogout:N}))),(null==ad?void 0:ad.showZipcode)&&e.createElement(P,(0,d.Z)({},ad,{popperDisplay:J,onZipCodeClick:H,onClickPopperBtn:I,onClosePopper:K})),(null==ab?void 0:ab.href)&&e.createElement(z,{href:null==ab?void 0:ab.href,"data-testid":"wishlist-button-container"},e.createElement(v,(0,d.Z)({truncateAmountThreshold:99},ab))),e.createElement(z,{href:null==ac?void 0:ac.href,"data-testid":"bag-button-container"},e.createElement(w,(0,d.Z)({truncateAmountThreshold:99},ac)))),e.createElement(x,null,e.createElement(B.DH,{data:a,onMenuItemClick:ae})),e.createElement(A,{size:5,position:"relative"})))};Q.defaultProps={customLoginMenu:null,data:{account:{},headerData:{},companyLinks:{},contactLinks:{},categoryList:{},specialLinks:[],externalLinks:[],allCategories:{},login:{},wishlist:{},bag:{}},searchSuggestions:{terms:[],products:[]},linksSuggestions:{links:[],title:""},logoProps:{},isRendered:f.bool,initialValue:"",onInputClose:()=>{},onInputOpen:()=>{},onLogout:()=>{},onSuggestItemClick:()=>{},onProductItemClick:()=>{},onTopTermItemClick:()=>{},onZipCodeClick:()=>{},onMenuItemClick:()=>{},onHeaderSuggestionLinkClick:()=>{}};var R=Q},95949:function(a,b,c){c.d(b,{fh:function(){return m},X6:function(){return W},ZP:function(){return aw}});var d=c(2784),e=c(66762),f=c(70615),g=c(7896),h=c(31461),i=c(34490);let j=(0,d.createContext)(),k=a=>{let{children:b}=a,c=Object.assign({},a.value);return d.createElement(j.Provider,{value:Object.assign({},c)},b)},l=()=>(0,d.useContext)(j);var m=k,n=c(99673),o=c(68054),p=c(91489),q=c(7029),r=c(87043);let s=n.ZP.footer`
  background-color: ${a=>(0,p.dF)("luContentPrimary")(a)};
`,t=n.ZP.p`
  color: ${a=>(0,p.uu)("lightest")(a)};
  font-size: ${a=>(0,p.R)("fontSizes.0")(a)}px;
  text-align: center;
  padding-top: 12px;
`,u=n.ZP.div``,v=n.ZP.a`
  cursor: pointer;
`,w=n.ZP.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: 16px 2em;
`,x=(0,n.ZP)(q.Z)`
  max-width: 109px;
  max-height: 20px;
`,y=(0,n.ZP)(i.s1S).attrs(a=>({color:(0,p.dF)("luContentPrimary")(a)}))``,z=(0,n.ZP)(i.tLe).attrs(a=>({color:(0,p.dF)("luContentPrimary")(a)}))``,A=(0,n.ZP)(i.mre).attrs(a=>({color:(0,p.dF)("luContentPrimary")(a)}))``,B=(0,n.ZP)(i.nzZ).attrs(a=>({color:(0,p.dF)("luContentPrimary")(a)}))``,C=n.ZP.div`
  background-color: ${a=>(0,p.dF)("base")(a)};
  width: 20px;
  height: 20px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  > svg {
    width: 12px;
  }
`,D=a=>{let{onBlogClick:b,onSocialMediaClick:c}=a,e=(0,h.Z)(a,["onBlogClick","onSocialMediaClick"]),{images:{blogImage:f}={},links:{blog:g,facebook:i,twitter:j,instagram:k,pinterest:m}}=l();return d.createElement(s,e,d.createElement(t,null,d.createElement("strong",null,"Lu do Magalu")," ","nas redes sociais"," ",""),d.createElement(w,null,f&&d.createElement(u,{onClick:b},d.createElement(v,{href:g},d.createElement(x,{src:f,alt:"Blog da Lu",lazy:!0}))),d.createElement(d.Fragment,null,[{id:"facebook",icon:y,link:i},{id:"twitter",icon:z,link:j},{id:"instagram",icon:A,link:k},{id:"pinterest",icon:B,link:m}].filter(({link:a})=>Boolean(a)).map(({icon:a,link:b,id:e})=>d.createElement(u,{key:e},d.createElement(v,{"data-testid":"social-links",href:b,onClick:a=>c(a,{id:e,link:b})},d.createElement(C,null,d.createElement(a,{titleAccess:`${e} logo`}))))))))};D.defaultProps={blogImage:"",blogLabel:"Blog da Lu",onBlogClick:()=>{},onSocialMediaClick:()=>{}};var E=D;let F=n.iv`
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  ${(0,p.aK)("medium")} {
    border-radius: 4px;
  }
`,G=(0,n.ZP)(r.rj).attrs(()=>({bg:"background.luContentPrimary",w:1}))`
  min-height: 83px;
  ${a=>!a.showBackButton&&!a.borderRadius&&F}
  grid-template-columns: 1fr 4fr 1fr;

  ${(0,p.aK)("medium")} {
    display: flex;
    align-items: center;
    min-height: 80px;
  }

  ${o.Cg}
  ${o.E0}
`,H=(0,n.ZP)(r.xu)`
  margin-top: 14px;
  margin-left: 10px;

  ${(0,p.aK)("large")} {
    margin-top: 0;
  }
`,I=(0,n.ZP)(r.kC).attrs(()=>({pl:[null,null,null,3]}))`
  ${(0,p.aK)("small")} {
    align-items: flex-end;
    align-self: flex-end;
    width: 100%;
  }
`,J=(0,n.ZP)(E)`
  ${(0,p.aK)("medium")} {
    margin: 1em ${(0,p.R)("space.3")}px 1em auto;
    min-width: 269px;

    > p {
      display: none;
    }

    > div {
      padding: unset;
    }
  }
`,K=(0,n.ZP)(q.Z)`
  width: 75px;
  max-height: 87px;
  margin-top: -5px;
`,L=(0,n.ZP)(r.kC).attrs({flexDirection:"column",justifyContent:"center",ml:"10px"})`
  ${(0,p.aK)("medium")} {
    align-self: center;
  }
`,M=(0,n.ZP)(q.Z)`
  ${(0,p.aK)("medium")} {
    height: 32px;
    width: auto;
  }
`,N=(0,n.ZP)(r.xv).attrs(()=>({color:"text.lightest",fontWeight:"bold",fontSize:3,lineHeight:"display",forwardedAs:"h2"}))`
  text-align: center;
  margin-top: 8px;

  ${a=>a.tiny&&n.iv`
      font-size: ${(0,p.R)("fontSizes.0")(a)}px;
      text-align: left;
      width: 190px;
      ${(0,p.aK)("medium")} {
        font-size: ${(0,p.R)("fontSizes.2")(a)}px;
        width: 100%;
      }
    `}
`,O=(0,n.ZP)(r.rU).attrs(()=>({color:"text.lightest",fontSize:0}))`
  margin-top: 10px;
  text-decoration: underline;
`,P=a=>{let{title:b,subtitle:c,showBackButton:e,onBackButtonClick:f,linkToMoreContentLabel:j,showLinkToMoreContent:k,showSocialMedias:m,onSocialMediaClick:n,iconName:o}=a,p=(0,h.Z)(a,["title","subtitle","showBackButton","onBackButtonClick","linkToMoreContentLabel","showLinkToMoreContent","showSocialMedias","onSocialMediaClick","iconName"]),q=c||b,{images:{luImage:r,luExplainImage:s}={},linkToMoreContent:t}=l()||{};return d.createElement(d.Fragment,null,d.createElement(G,(0,g.Z)({showBackButton:e,"data-testid":"lu-explain-header-container"},p),d.createElement(H,null,e&&d.createElement(i.JO$,{name:o,color:"#ffffff","data-testid":"lu-header-close",role:"button",title:"Voltar",tabIndex:"1",onClick:f,cursor:"pointer"})),d.createElement(I,null,d.createElement(K,{src:r,alt:"personagem Lu do magazineluiza apontando para o logo lu explica",width:60,height:80,lazy:!0}),d.createElement(L,null,d.createElement(M,{src:s,alt:"Lu Explica",width:127,height:24,lazy:!0}),q&&d.createElement(N,{tiny:!!c},q),k&&d.createElement(O,{"data-testid":"lu-explain-more-content",href:t},j)),m&&d.createElement(J,{onSocialMediaClick:n}))))};P.defaultProps={title:"",subtitle:null,showBackButton:!1,onBackButtonClick:()=>{},linkToMoreContentLabel:"+ Veja outros conte\xfados",showLinkToMoreContent:!1,showSocialMedias:!1,onSocialMediaClick:()=>{},iconName:"ArrowBack"};var Q=P,R=c(84546);let S=R.Z,T=(0,n.ZP)(R.Z)`
  padding: 0 14px 14px 14px;
  img {
    width: 100% !important;
    height: auto !important;
  }
  p {
    margin-block-start: 1em;
    margin-block-end: 1em;
    line-height: 20px;
  }
  a {
    color: ${a=>(0,p.uu)("primary")(a)};
    text-decoration: none;
  }
`,U=({children:a,title:b,visible:c,onBackButtonClick:g,direction:h})=>"center"===h?d.createElement(e.Z,{title:b,visible:c,onClickOutside:g,position:"center",p:"unset",my:"4em"},d.createElement("div",{style:{width:"100%"}},a)):d.createElement(f.Z,{direction:h,title:b,visible:c,onClickOutside:g,fullScreen:!0},a),V=({direction:a,title:b,subtitle:c,content:e,onBackButtonClick:f,images:g,visible:h,iconHeaderClose:i})=>d.createElement(m,{value:{images:g}},d.createElement(U,{direction:a,title:b,visible:h,onBackButtonClick:f},d.createElement(Q,{title:b,subtitle:c,showBackButton:!0,onBackButtonClick:f,iconName:i}),d.createElement(T,{"data-testid":"lu-detail-content"},d.createElement(S,{dangerouslySetInnerHTML:{__html:e}}))));V.defaultProps={direction:"right",content:"",images:{},onBackButtonClick:()=>{},subtitle:null,title:"",visible:!1,iconHeaderClose:"ArrowBack"};var W=V,X=c(19527);let Y=n.ZP.div`
  ${({isVerticalView:a})=>a&&n.iv`
      margin: 36px 8px 20px;
      box-shadow: rgb(0 0 0 / 11%) 0px 1px 10px 0px;
    `}
`,Z=(0,n.ZP)(X.Z).attrs(a=>Object.assign({bg:"background.white"},a))``;var $=c(82469),_=c(63825),aa=c(25610);let ab=n.ZP.a`
  text-decoration: none;
  cursor: pointer;
  ${a=>a.hide&&"display: none;"}
  ${(0,p.aK)("medium")} {
    width: calc(25% - ${7}px);
    &:not(:last-child) {
      margin-right: ${28}px;
    }
  }
`,ac=n.ZP.article`
  background-color: ${a=>(0,p.dF)("lighter")(a)};
  border-top: 1px solid ${a=>(0,p.dF)("darker")(a)};
  display: grid;
  padding: 16px;
  width: 100%;
  ${({vertical:a})=>!a&&"grid-template-columns: auto 1fr;"}
  ${({vertical:a})=>a&&n.iv`
      justify-items: left;
      padding: 16px 0px;
    `}
`,ad=n.ZP.div`
  width: 100%;
  ${({vertical:a})=>!a&&"margin-right: 20px;"}
`,ae=(0,n.ZP)(q.Z)`
  width: 77px;
  border-radius: 4px;
  border: 1px solid ${a=>(0,p.uu)("lighter")(a)};

  ${({cover:a})=>a&&n.iv`
      object-fit: cover;
      height: 77px;
    `}

  ${({vertical:a})=>a&&n.iv`
      min-width: 300px;
      width: 100%;
      height: auto;
      max-height: 500px;
      object-fit: fill;

      ${(0,p.aK)("medium")} {
        max-height: 500px;
        min-height: 168px;
        min-width: 224px;
        height: calc(
          900px /
            ${({variation:a,itemsSize:b})=>"horizontal-highlight"===a?b:4}
        );
        border-radius: 8px;
        object-fit: cover;
      }
    `}
`,af=n.iv`
  margin-top: 10px;
  width: 250px;

  ${(0,p.aK)("large")} {
    max-width: 224px;
  }
`,ag=n.ZP.div`
  display: grid;
  grid-template-columns: auto 1fr;
  margin-top: ${({cover:a})=>a?"8px":"0px"};
  ${({vertical:a})=>a&&af}
`,ah=n.ZP.div``,ai=(0,n.ZP)(aa.Z).attrs(()=>({fontSize:[1,1,3,3]}))`
  color: ${a=>(0,p.uu)("luContentLink")(a)};
  font-weight: ${a=>(0,p.R)("fontWeights.medium")(a)};
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
`,aj=(0,n.ZP)(_.Z).attrs(()=>({fontSize:[0,0,1,1]}))`
  margin-top: 8px;
  color: ${a=>(0,p.uu)("base")(a)};
  line-height: ${a=>(0,p.R)("lineHeights.plus")(a)}px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  ${o.cp}
`,ak={article:"Blog",video:"Video",podcast:"Podcast"},al=({data:a,cover:b,vertical:c,hide:e,onItemClick:f,dataTestId:g,itemsSize:h,variation:j})=>{let{type:k="article",title:l,subtitle:m,image:n,url:o}=a;if(!l||!m)return d.createElement(d.Fragment,null);let p=ak[k]||"Blog";return d.createElement(ab,{role:"button",href:o,target:o&&"_blank","data-testid":g||"lu-item",onClick:b=>f(b,a),"aria-label":`Abre o conte\xfado do post ${l}`,hide:e},d.createElement(ac,{"data-testid":"lu-item-content",vertical:c},d.createElement(ad,{vertical:c},d.createElement(ae,{src:n,alt:l,vertical:c,cover:b,itemsSize:h,variation:j,lazy:!0})),d.createElement(ag,{vertical:c,cover:b,"data-testid":"article-content"},d.createElement(i.JO$,{title:`logo ${k}`,name:p}),d.createElement(ah,null,d.createElement(ai,{as:"h3"},l),d.createElement(aj,null,m)))))};al.defaultProps={data:{},vertical:!1,cover:null,onItemClick:()=>{},hide:!1,dataTestId:"",itemsSize:1};var am=al;let an=(a=[])=>Array.isArray(a)&&0!==a.length?a.reduce((a,b=[],c)=>[...a,...b.map((a,b)=>Object.assign({},a,{parentIdx:c,idx:b}))],[]):[],ao=({onItemClick:a})=>{let[b,c]=d.useState(0),{data:e}=l(),f=an(e),g=f.filter(a=>0===a.idx);return d.createElement(d.Fragment,null,d.createElement($.lr,{bg:"background.lighter",slidesPerView:1,showPartial:!0,transitionDuration:700,auto:!1,showControls:!1,gutter:16,onChange:a=>c(a)},g.map(b=>d.createElement(am,{key:b.id,vertical:!0,data:b,onItemClick:a}))),f.filter(a=>0!==a.idx).map(c=>{let e=c.parentIdx!==b;return d.createElement(am,{key:c.id,data:c,hide:e,dataTestId:e?"item-hidden":"",cover:!0,onItemClick:a})}))};var ap=c(60861);let aq=({onItemClick:a,onLoadMoreClick:b})=>{let{data:c,linkToMoreContent:e}=l(),f=an(c),g=f.filter(a=>0===a.idx),h=f.filter(a=>0!==a.idx),i=a=>h.filter(b=>b.parentIdx===a.parentIdx);return d.createElement(R.Z,{bg:"background.lighter"},d.createElement(Z,{itemsSize:g.length,padding:"0 10px"},g.map((b,c)=>d.createElement(R.Z,{key:b.id,marginRight:g.length-1===c?"0px":"28px",width:"100%"},d.createElement(am,{vertical:!0,itemsSize:g.length,data:b,onItemClick:a,variation:"horizontal-highlight"}),i(b).map(b=>d.createElement(am,{key:b.id,data:b,cover:!0,onItemClick:a,variation:"horizontal-highlight"}))))),d.createElement(X.Z,{justifyContent:"center",p:3},d.createElement(ap.Z,{as:"a",variation:"outline",color:"luContent",centered:!0,uppercase:!1,href:e,onClick:b},"Veja outros conte\xfados")))},ar=({onItemClick:a,onLoadMoreClick:b})=>{let{data:c,linkToMoreContent:e,hide:f}=l(),g=an(c);return d.createElement(d.Fragment,null,d.createElement(Z,{itemsSize:g.length},g.map(b=>d.createElement(am,{key:b.id,vertical:!0,data:b,onItemClick:a,itemsSize:g.length}))),d.createElement(X.Z,{justifyContent:"center",p:3},d.createElement(ap.Z,{as:"a",variation:"outline",color:"luContent",centered:!0,uppercase:!1,href:e,onClick:b,hide:f},"Veja outros conte\xfados")))},as=({onItemClick:a})=>{let{data:b}=l(),c=an(b);return d.createElement(d.Fragment,null,null==c?void 0:c.map(b=>d.createElement(am,{key:b.id,data:b,onItemClick:a})))};var at=as;let au={carousel:ao,horizontal:ar,"horizontal-highlight":aq,vertical:at},av=({variation:a,title:b,linkToMoreContent:c,showLinkToMoreContent:e,data:f,assets:h,onItemClick:i,onSocialMediaClick:j,onLoadMoreClick:k,showHeaderSocialMedia:l})=>{let n="carousel"===a,{links:o,images:p}=h,q=(null==au?void 0:au[a])||at;return d.createElement(m,{value:{images:p,data:f,links:o,linkToMoreContent:c}},d.createElement(Y,{isVerticalView:"vertical"===a},d.createElement(Q,(0,g.Z)({},n?{subtitle:b,borderRadius:0}:{title:b},{showLinkToMoreContent:e,onSocialMediaClick:j,showSocialMedias:l})),d.createElement(q,{onItemClick:i,onLoadMoreClick:k,variation:a}),n&&d.createElement(E,{onSocialMediaClick:j})))};av.defaultProps={showDetailModal:!0,showLinkToMoreContent:!1,data:{articles:[],videos:[],podcasts:[]},detailDirection:"right",assets:{images:{luImage:"",luExplainImage:"",blogImage:""}},onSocialMediaClick:()=>{},showHeaderSocialMedia:!1};var aw=av},4294:function(a,b,c){c.d(b,{Z:function(){return w}});var d=c(7896),e=c(2784),f=c(87043),g=c(40978),h=c(99673),i=c(91489),j=c(84546),k=c(7029),l=c(63825);let m=h.ZP.div`
  background-color: ${a=>(0,i.dF)("white")(a)};
  padding: 16px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${(0,i.aK)("large")} {
    padding: 0;
  }
`,n=(0,h.ZP)(j.Z)`
  border-bottom: 3px solid ${a=>(0,i.kJ)("light")(a)};
  width: 100%;
`,o=(0,h.ZP)(j.Z)`
  display: flex;
  align-items: center;

  ${(0,i.aK)("large")} {
    &,
    & + div {
      display: none;
    }
  }
`,p=(0,h.ZP)(l.Z)`
  margin-bottom: 16px;
  font-size: ${a=>(0,i.R)("fontSizes.3")(a)}px;
  font-weight: ${a=>(0,i.R)("fontWeights.medium")(a)};

  ${(0,i.aK)("large")} {
    align-self: self-start;
  }
`,q=(0,h.ZP)(j.Z)`
  ${(0,i.aK)("large")} {
    align-self: self-end;
    padding: 12px;
  }
`,r=h.ZP.ul`
  width: 100%;
`,s=h.ZP.button`
  outline: none;
  border-radius: 2px;
  padding: 10px 15px;
  height: 48px;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  line-height: 1.5;
  width: 250px;
  margin-bottom: 10px;

  font-size: ${a=>(0,i.R)("fontSizes.1")(a)}px;
  background-color: ${a=>(0,i.dF)("white")(a)};
  border-color: ${a=>(0,i.kJ)("base")(a)};
  color: ${a=>(0,i.uu)("base")(a)};
  text-transform: uppercase;
  border: 1px solid ${a=>(0,i.kJ)("light")(a)};
`,t=(0,h.ZP)(l.Z)`
  max-width: 200px;
  margin-left: 10px;
  font-size: ${a=>(0,i.R)("fontSizes.1")(a)}px;
  color: ${a=>(0,i.uu)("base")(a)};
  line-height: ${a=>(0,i.R)("lineHeights.plus")(a)}px;

  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
`,u=(0,h.ZP)(k.Z)`
  width: ${a=>a.width}px;
  height: ${a=>a.height}px;
`;function v({productData:a,reviewsData:b,onViewMoreClick:c,onChangeSort:h,showDesktop:i}){let{title:j,image:k}=a||{},{stats:l={},reviews:v=[],sorts:w=[],pagination:x={}}=b||{},y=null==w?void 0:w.map(({label:a,type:b,orientation:c,selected:d})=>({label:a,selected:d,value:`${b}-${c}`})),z=a=>{if(a){let[b,c]=a.split("-"),d=null==w?void 0:w.find(({type:a,orientation:d})=>a===b&&d===c);h(d)}};return e.createElement(e.Fragment,null,e.createElement(o,{p:"16px"},e.createElement(u,{src:k,width:50,height:50}),e.createElement(t,null,j)),e.createElement(n,null),e.createElement(m,null,e.createElement(n,{m:"16px 0px",display:["none","block"]}),e.createElement(p,null,"Avalia\xe7\xe3o geral"),e.createElement(g.Ym,l),e.createElement(n,{m:"16px 0px"}),!i&&e.createElement(q,null,e.createElement(f.Ph,{id:"review-result",options:y,onChange:z,mb:20,"data-testid":"review-sort"})),i&&e.createElement(q,null,e.createElement(f.Ph,{id:"review-result",options:y,onChange:z,mb:20,"data-testid":"review-sort",desktopMode:!0,textLabel:"Ordenar avalia\xe7\xf5es:"})),e.createElement(r,null,null==v?void 0:v.map((a,b)=>e.createElement(g.Ak,(0,d.Z)({key:`review-${b}`},a)))),(null==x?void 0:x.page)<(null==x?void 0:x.pages)&&e.createElement(s,{"data-testid":"review-more",onClick:c},"Carregar Mais")))}v.defaultProps={showDesktop:!1};var w=v},1756:function(a,b,c){c.d(b,{Z:function(){return A}});var d=c(2784),e=c(76635),f=c.n(e),g=c(2490),h=c(78012),i=c(87043),j=c(91489),k=c(99673),l=c(68054),m=c(84546),n=c(10200);let o=(0,k.ZP)(m.Z).attrs(()=>({backgroundColor:"background.base",paddingBottom:5}))``,p=k.ZP.nav`
  ${l.e6}
  padding: 0 ${a=>(0,j.R)("space.2")(a)}px;
`,q=(0,k.ZP)(n.Z).attrs(()=>({backgroundColor:"primary.base",color:"text.lightest",paddingTop:3,paddingBottom:5,marginBottom:-5}))``,r=k.ZP.small`
  font-family: ${(0,j.R)("fontFamily")};
  display: block;
  margin: ${a=>(0,j.R)("space.1")(a)}px
    ${a=>(0,j.R)("space.2")(a)}px;
`,s=k.ZP.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30px, max-content));
  justify-content: center;
  grid-gap: ${a=>(0,j.R)("space.4")(a)}px;
`,t=k.ZP.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`,u=k.ZP.p`
  svg {
    margin-right: 2px;
  }
  display: flex;
  align-items: center;
`,v=k.ZP.div`
  padding: 10px 16px;
`;var w=c(93168);let x=({data:a,onMenuHeaderClick:b})=>{var c,e;let f=(null==(c=a.subtitles)?void 0:c.length)>0;return d.createElement(i.xu,{bg:"background.primary","data-testid":"sidebar-header"},d.createElement(i.ck,{scale:"medium",endIcon:"ChevronRight",fontWeight:"medium",variant:"primary",as:"a",ellipsis:null==a?void 0:a.ellipsis,href:null==a?void 0:a.url,rel:null==a?void 0:a.rel,onClick:c=>b(c,{url:null==a?void 0:a.url})},null==a?void 0:a.label),f&&a.subtitles.map(a=>d.createElement(r,{key:a},a)),d.createElement(w.Z,{variant:"primary"},null==a?void 0:null==(e=a.helpers)?void 0:e.map((a,c)=>d.createElement(w.Z.Item,{key:c,href:null==a?void 0:a.url,rel:null==a?void 0:a.rel,startIcon:null==a?void 0:a.id,onClick:c=>b(c,a)},null==a?void 0:a.label))))};x.defaultProps={onMenuHeaderClick:()=>{}};var y=x;let z=a=>{var b,c,e,j,k,l,m;let{account:n,actionButtons:r,categoryList:w,externalLinks:x,header:z,helperText:A,salesChannels:B,moreInformation:C,services:D,showcaseLinks:E,groupedLinks:F,social:G}=(null==a?void 0:a.data)||{},{onCollapsedClick:H,onMenuHeaderClick:I,onMenuItemClick:J,onLogout:K}=a,[L,M]=(()=>{if(Array.isArray(A)){let[a,...b]=A;return[a,b]}return[A||"",[]]})(),[N,O]=(0,d.useState)(!0),P=()=>{H(),O(!N)},[Q,R]=(0,d.useState)([]),S=a=>{Q.includes(a)?R(Q.filter(b=>b!==a)):R([...Q,a])};return d.createElement(o,null,z&&d.createElement(y,{data:z,onMenuHeaderClick:I}),d.createElement(p,null,!!(null!=E&&E.length)&&d.createElement(g.Z,{directionType:"column",items:E}),(null==F?void 0:F.map((a,b)=>d.createElement(i.xu,{bg:"white",borderRadius:4,marginBottom:10,marginTop:10,key:b},d.createElement(h.Z,{divided:!0},a.map((a,b)=>d.createElement(h.Z.Item,{key:b,as:"a",href:null==a?void 0:a.url,rel:null==a?void 0:a.rel,onClick:b=>J(b,a),startIcon:a.startIcon,fill:"background.primary","data-testid":"menu-item"},null==a?void 0:a.label))))))||null,(null==w?void 0:null==(b=w.list)?void 0:b.length)&&d.createElement(i.xu,{bg:"white"},d.createElement(h.Z.Collapse,{trigger:N,bg:"white",fill:"background.primary",collapsedIn:null==w?void 0:w.show,renderAction:N&&d.createElement(h.Z.Action,{endIcon:"ChevronDown",fontWeight:"medium",onClick:P},null==w?void 0:w.collapseText),divided:!0,"data-testid":"category-list"},null==w?void 0:null==(c=w.list)?void 0:c.map((a,b)=>{var c;return d.createElement(i.xu,{key:b,bg:"white",borderRadius:4},(null==a?void 0:a.subcategoriesList)&&d.createElement(i.UQ,{id:null==a?void 0:a.id,title:a.label,closeIcon:"ChevronUp",open:Q.includes(b),onClick:()=>S(b),fontWeight:"regular",openIcon:"ChevronDown",mb:"1px"},d.createElement(i.xu,{bg:"#F4F4F4",borderRadius:4,height:"350px",overflow:"scroll"},null==a?void 0:null==(c=a.subcategoriesList)?void 0:c.map((a,b)=>d.createElement(v,{key:b},d.createElement(i.rU,{as:"a",href:null==a?void 0:a.url,rel:null==a?void 0:a.rel,color:a.highlight?"rgb(164, 0, 225)":null,onClick:b=>J(b,a,"subcategoria:")},null==a?void 0:a.label))))),!(null!=a&&a.subcategoriesList)&&d.createElement(h.Z,{divided:!0},d.createElement(h.Z.Item,{key:b,as:"a",href:null==a?void 0:a.path,rel:null==a?void 0:a.rel,onClick:b=>J(b,a),startIcon:`Category${null==a?void 0:a.id}`,fill:"background.primary","data-testid":"menu-item",mb:"1px"},null==a?void 0:a.label)))}))),(null==x?void 0:null==(e=x.list)?void 0:e.length)&&d.createElement(i.xu,{mt:3},d.createElement(i.xv,{fontWeight:"medium",px:3,py:3},null==x?void 0:x.title),d.createElement(h.Z,{bg:"white",borderRadius:4,divided:!0},null==x?void 0:null==(j=x.list)?void 0:j.map((a,b)=>d.createElement(h.Z.Item,{key:b,as:"a",href:null==a?void 0:a.url,rel:null==a?void 0:a.rel,startIcon:(null==a?void 0:a.id)&&`Logo${null==a?void 0:a.id}`,endIcon:null==a?void 0:a.endIcon,fontWeight:null==a?void 0:a.fontWeight,onClick:b=>J(b,a,"nossas-marcas:")},null==a?void 0:a.label)))),(null==D?void 0:null==(k=D.list)?void 0:k.length)&&d.createElement(i.xu,{mt:3},d.createElement(i.xv,{fontWeight:"medium",px:3,py:3},null==D?void 0:D.title),d.createElement(h.Z,{bg:"white",borderRadius:4,divided:!0},null==D?void 0:null==(l=D.list)?void 0:l.map((a,b)=>d.createElement(h.Z.Item,{key:b,as:"a",href:null==a?void 0:a.url,rel:null==a?void 0:a.rel,startIcon:`Service${null==a?void 0:a.id}`,fill:"gray",onClick:b=>J(b,a,"servicos:")},null==a?void 0:a.label)))),(null==C?void 0:C.length)&&d.createElement(i.xu,{mt:2},d.createElement(h.Z,{bg:"white",borderRadius:4,divided:!0},null==C?void 0:C.map((a,b)=>d.createElement(h.Z.Item,{key:b,as:"a",href:null==a?void 0:a.url,rel:null==a?void 0:a.rel,startIcon:null==a?void 0:a.id,fill:"gray",onClick:b=>J(b,a)},null==a?void 0:a.label)))),(null==r?void 0:r.length)&&d.createElement(i.xu,{mt:3},null==r?void 0:r.map((a,b)=>d.createElement(i.zx,{key:b,href:null==a?void 0:a.url,rel:null==a?void 0:a.rel,as:"a",color:"primary",startIcon:null==a?void 0:a.id,uppercase:!1,mb:2,centered:!0,full:!0,onClick:b=>J(b,a,"contato:")},null==a?void 0:a.label)))),L&&d.createElement(i.xu,{mt:4},d.createElement(i.xv,{fontSize:1,textAlign:"center",color:"darkGray"},L),d.createElement(t,{"data-testid":"sales-channels"},null==B?void 0:B.map(a=>d.createElement(u,{key:f().uniqueId("salesChannelsSideBar")},a.icon,d.createElement(i.xv,{fontSize:3,color:"darkGray"},a.label)))),null==M?void 0:M.map((a,b)=>d.createElement(i.xv,{key:b,fontSize:1,textAlign:"center",color:"darkGray",fontWeight:"medium"},a))),!!(null!=G&&null!=(m=G.links)&&m.length)&&d.createElement(i.xu,{m:3},d.createElement(i.xv,{fontSize:"small",py:2,textAlign:"center"},null==G?void 0:G.title),d.createElement(i.bo,{style:{margin:"0 auto 12px",width:"50%"}}),d.createElement(s,null,G.links.map((a,b)=>d.createElement("a",{key:b,rel:"noreferrer",href:null==a?void 0:a.url,target:"_blank",title:null==a?void 0:a.label},d.createElement(i.Ee,{src:null==a?void 0:a.img,alt:null==a?void 0:a.label}))))),(null==n?void 0:n.name)&&d.createElement(q,{"data-testid":"logout-link",onClick:K,href:null==n?void 0:n.signOutUrl,bg:"primary",underlineOnHover:!1,textAlign:"center",underline:!0,mt:4,py:3},"N\xe3o \xe9 ",null==n?void 0:n.name,"? Sair"))};z.defaultProps={onLogout:()=>{},onMenuHeaderClick:()=>{},onCollapsedClick:()=>{},onMenuItemClick:()=>({}),groupedLinks:[]};var A=z},91061:function(a,b,c){c.d(b,{Z:function(){return q}});var d=c(2784),e=c(34490),f=c(87043),g=c(82469),h=c(40978),i=c(33252),j=c(99673),k=c(91489),l=c(84546),m=c(63825);let n=(0,j.ZP)(l.Z)`
  display: flex;
  height: 40px;
  justify-content: space-around;
  box-shadow: -1px 2px 4px 0 rgba(0, 0, 0, 0.14);
  font-size: ${a=>(0,k.R)("fontSizes.1")(a)}px;
  font-weight: ${a=>(0,k.R)("fontWeights.medium")(a)};
  background-color: ${a=>(0,k.ow)("background.base")(a)};
  color: ${a=>(0,k.ow)("text.scratched")(a)};

  > div {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
  }
`,o=(0,j.ZP)(m.Z).attrs(a=>({color:(0,k.ow)("text.scratched")(a)}))``;var p=c(33359);function q({defaultDisplayMode:a,onChangeDisplayMode:b,onChangeSort:c,onFiltersClear:j,onFilterClick:k,onFilterItemClick:l,onFilterTypeClick:m,sortOptions:q,sortLabel:r,showSelectedOptionLabel:s,filters:t,showFilters:u,filtersCount:v}){var w;let[x,y]=(0,d.useState)(!1),[z,A]=(0,d.useState)(!1),B=()=>{A(!z),j()},C=()=>{k(!z),A(!z)};return d.createElement(d.Fragment,null,d.createElement(n,{fontSize:1},d.createElement(p.Z,{onChange:b,defaultMode:a}),null!=q&&q.length?d.createElement(f.xu,{p:1,onClick:()=>y(!x),"data-testid":"orderby-btn"},d.createElement(o,{"data-testid":"sort-label"},s&&(null==(w=q.find(a=>a.selected))?void 0:w.label)||r),d.createElement(e.rY6,{height:"16"})):d.createElement(d.Fragment,null),u&&d.createElement(i.Z,{visible:z,filters:t,count:v,onItemClick:l,onOpen:C,onClickOutside:C,onClose:C,onClear:B,onShowDetail:m})),null!=q&&q.length?d.createElement(h.YE,{headerTitle:r,visible:x,direction:"right",onClickOutside:()=>y(!1)},d.createElement(g.Ee,{options:q,onChange:function(a,b){c(b),y(!1)},p:"12px 0 12px 20px"})):d.createElement(d.Fragment,null))}q.defaultProps={defaultDisplayMode:"gallery",onFilterTypeClick:()=>{},onChangeSort:()=>{},onFiltersClear:()=>({}),onFilterClick:()=>({}),onFilterItemClick:{},sortLabel:"Ordenar por",sortOptions:[],showSelectedOptionLabel:!0,filters:{},filtersCount:0,showFilters:!1}},82709:function(a,b,c){c(72848),c(33252),c(99852),c(46671),c(49647),c(42887),c(71782),c(95949),c(4294),c(1756),c(91061)},13111:function(a,b){let c=a=>/^[\w-]+(\.[\w-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,20})$/i.test(a);b.Z=c},15312:function(a,b){b.Z=a=>a&&a.trim().split(" ").length>1||!1},98047:function(a,b){let c=(a,b)=>a.find(a=>(null==a?void 0:a.value)===b);b.Z=c},82753:function(a,b,c){c.d(b,{kC:function(){return e},lb:function(){return M},vQ:function(){return f},qJ:function(){return h},Ji:function(){return R},bd:function(){return N},lm:function(){return I},KF:function(){return i.Z},xx:function(){return C.Z},rx:function(){return q},Z4:function(){return p},RZ:function(){return n},zY:function(){return s},az:function(){return S},"$7":function(){return Q},ie:function(){return P},hY:function(){return A},gf:function(){return B.Z},IC:function(){return y},yH:function(){return u},O:function(){return E},"t$":function(){return F},Ay:function(){return G},CK:function(){return l.Z}});let d=a=>"string"!=typeof a?"":a.toLowerCase().charAt(0).toUpperCase()+a.slice(1);var e=d;function f(a){if(navigator.clipboard)return navigator.clipboard.writeText(a);let b=document.createElement("textarea");return b.value=a,b.setAttribute("readonly",""),b.style={position:"absolute",left:"-9999px"},document.body.appendChild(b),b.select(),document.execCommand("copy"),document.body.removeChild(b)}let g=a=>{if(!a||"string"!=typeof a||!a.includes("www.youtube.com/v/"))return a;let b=a.match(/v\/([a-zA-Z0-9_-]+)&?/),c=null!=b&&b.length?b[1]:null;return c?`https://www.youtube.com/embed/${c}`:a};var h=g,i=c(98047);let j=(a,b="")=>{let c=a;return b.length<c?b:(3===c&&(c+=3),`${b.substr(0,c-3)}...`)};var k=j,l=c(7874);let m=({zipCode:a="",zipCodeCity:b="",zipCodeState:c="",maxCityLength:d=24,formatter:e=(a,b)=>`${a.toUpperCase()}, ${b.toUpperCase()}`,includeAddress:f=!0}={})=>{let g=b&&"string"==typeof b?k(d,b):"",h=a&&"string"==typeof a?a:"",i=e(g,c&&"string"==typeof c?c:"");return f?`${i} - ${(0,l.Z)(h)}`:(0,l.Z)(h)};var n=m;c(63113);let o=(a,b,c)=>b<=a&&a<=c,p=(a,b,c,d)=>o(a,c,d)&&a<b,q=(a,b,c,d)=>o(a,c,d)&&a>b,r=a=>{let b=(null==a?void 0:a.length)>1?"dos seguros":"do seguro",c=a.join(", ").replace(/, ([^,]*)$/," e $1").toLowerCase();return`${b} ${c}`};var s=r;let t=(a=[],b=[])=>b.map(b=>a.find(a=>Number(null==a?void 0:a.id)===b));var u=t;let v=(a=[],b=null)=>{if(!b)throw Error("Invalid parameter [key]");return a.length?a.reduce((a,c)=>Object.assign({},a,{[c[b]]:c}),{}):{}};var w=v;let x=(a=[],b=[])=>{if(!b.length||!a.length)return a;if(!b.every(a=>"string"==typeof a))throw Error("Invalid parameter [orderBy]");let c=w(a,"id"),d=Object.keys(c).filter(a=>!b.includes(a)),e=b.map(a=>c[a]).slice(0,a.length),f=d.map(a=>c[a]);return[...e,...f]};var y=x;let z=(a={})=>(b=[])=>{var c;let d=(null==a?void 0:null==(c=a.values)?void 0:c.reduce((a,c)=>{let d=(0,i.Z)(b,c);return Object.assign({},a,{[c]:null==d?void 0:d.available})},{}))||{};return Object.entries(d).sort(([,a],[,b])=>b-a).map(([a])=>a)};var A=z,B=c(41869),C=c(97728),D=c(2784),E=(a,b,c="block")=>{(0,D.useEffect)(()=>{let d=()=>{Object.values(a).forEach(a=>{a.current.style.display=c}),Object.values(a).filter(a=>a.current.offsetLeft+a.current.offsetWidth>b.current.offsetWidth+b.current.offsetLeft).forEach(a=>{a.current.style.display="none"})};return d(),window.addEventListener("resize",d),()=>{window.removeEventListener("resize",d)}},[b.current])},F=(a,b)=>{(0,D.useEffect)(()=>{let c=c=>{!(!a.current||a.current.contains(c.target))&&b(c)};return document.addEventListener("mousedown",c),document.addEventListener("touchstart",c),()=>{document.removeEventListener("mousedown",c),document.removeEventListener("touchstart",c)}},[a,b])},G=(a,b)=>{(0,D.useEffect)(()=>{let c=()=>b(!0),d=()=>b(!1),e=null==a?void 0:a.current;if(e)return e.addEventListener("mouseenter",c),e.addEventListener("mouseleave",d),()=>{e.removeEventListener("mouseenter",c),e.removeEventListener("mouseleave",d)}},[a])};let H=(a,b)=>a.some(a=>(null==a?void 0:a.value)===b&&(null==a?void 0:a.available)=== !0);var I=H;let J=6e4,K=60*J,L=a=>String(a).padStart(2,"0");function M(a,b){if(!a)return{show:!1,timeRemainingFormatted:"00:00:00"};let{timer_start_date:c,timer_end_date:d}=a||{},e=new Date(b).getTime(),f=new Date(c).getTime(),g=new Date(d).getTime();if(!f||!g||e<f||g<=e)return{show:!1,timeRemainingFormatted:"00:00:00"};let{hours:h,minutes:i,seconds:j}=function(a){let b=Math.floor(a/K);a%=K;let c=Math.floor(a/J);a%=J;let d=Math.floor(a/1e3);return{hours:b,minutes:c,seconds:d}}(g-e),k=`${L(h)}:${L(i)}:${L(j)}`;return{show:!0,timeRemainingFormatted:k}}function N(){let a=new Date,b=new Date(a.toLocaleString("en-US",{timeZone:"America/Sao_Paulo"})),c=b.getFullYear(),d=L(b.getMonth()+1),e=L(b.getDate()),f=L(b.getHours()),g=L(b.getMinutes()),h=L(b.getSeconds());return`${c}-${d}-${e}T${f}:${g}:${h}`}var O=c(99673);let P=O.F4`
  from { transform: translateY(-100%); }
  to { transform: translateY(0%); }
`,Q=O.F4`
  from { transform: translateY(100%);}
  to { transform: translateY(0); }
`,R=O.F4`
  from { opacity: 0; }
  to { opacity: 1; }
`,S=O.F4`
  from { opacity: 0.5; -webkit-transform: scale(0.5); transform: scale(0.5); }
  to { opacity: 1; -webkit-transform: scale(0.5); transform: scale(1); }
`},97728:function(a,b,c){var d=c(12468);b.Z=({currency:a=d.wp}={})=>a!==d.wp},63113:function(a,b,c){var d=c(71180);let e=a=>{let b=a;"string"==typeof a&&(b=a.replace(".","").replace(",","").replace(/\D/g,""));let c=Number.isNaN(b)||""===b?0:b,e=(0,d.oB)({value:c,rightFilling:!0});return{amount:c,currency:e}};b.Z=e},41869:function(a,b){let c=(a=[])=>a.sort((a,b)=>(null==b?void 0:b.selected)-(null==a?void 0:a.selected));b.Z=c},82260:function(a,b){let c=(a=[])=>a.sort((a,b)=>parseFloat(a.value)-parseFloat(b.value)).reverse();b.Z=c},7874:function(a,b){let c=a=>a.replace(/\D/g,"").replace(/(\d{5})(\d)/,"$1-$2").replace(/(\d{5})(\d{3})/,"$1-$2").replace(/(-\d{3})\d+?$/,"$1");b.Z=c}}])
//# sourceMappingURL=341-bc817033dfcb336c.js.map