'use strict';

/* ═══════════════════════════════════════════════════════════
   TABELAS SIMPLES NACIONAL
═══════════════════════════════════════════════════════════ */
const ANEXO_I = [   // Comércio
  { max: 180000,  aliq: 0.040, pd: 0 },
  { max: 360000,  aliq: 0.073, pd: 5940 },
  { max: 720000,  aliq: 0.095, pd: 13860 },
  { max: 1800000, aliq: 0.107, pd: 22500 },
  { max: 3600000, aliq: 0.143, pd: 87300 },
  { max: 4800000, aliq: 0.190, pd: 378000 },
];

const ANEXO_III = [ // Serviços
  { max: 180000,  aliq: 0.060, pd: 0 },
  { max: 360000,  aliq: 0.112, pd: 9360 },
  { max: 720000,  aliq: 0.135, pd: 17640 },
  { max: 1800000, aliq: 0.160, pd: 35640 },
  { max: 3600000, aliq: 0.210, pd: 125640 },
  { max: 4800000, aliq: 0.330, pd: 648000 },
];

/* ═══════════════════════════════════════════════════════════
   FORMATADORES
═══════════════════════════════════════════════════════════ */
const fmtBRL = v => 'R$ ' + Math.round(v).toLocaleString('pt-BR');
const fmtPct = v => (v * 100).toFixed(2).replace('.', ',') + '%';
const fmtInt = n => Math.round(n).toLocaleString('pt-BR');

const parseBRL = str => {
  if (!str) return 0;
  return parseFloat(String(str).replace(/\./g, '').replace(',', '.').replace(/[^\d.]/g, '')) || 0;
};

const fmtDisplay = val => Math.round(val).toLocaleString('pt-BR');

/* ═══════════════════════════════════════════════════════════
   CÁLCULOS
═══════════════════════════════════════════════════════════ */
function calcSimples(revenue, tipo, prolabore, accountant) {
  if (revenue > 4800000) return { eligible: false };

  const table = tipo === 'comercio' ? ANEXO_I : ANEXO_III;
  const idx = table.findIndex(f => revenue <= f.max);
  const fi  = idx === -1 ? table.length - 1 : idx;
  const f   = table[fi];

  const aliqEfetiva = (revenue * f.aliq - f.pd) / revenue;
  const das         = revenue * aliqEfetiva;
  const inss        = prolabore * 12 * 0.11;
  const cont        = accountant * 12;
  const custoTotal  = das + inss + cont;

  return {
    eligible: true,
    das, inss, cont,
    total: das, custoTotal,
    aliqEfetiva,
    faixaIdx: fi,
    faixaNome: `${tipo === 'comercio' ? 'Anexo I' : 'Anexo III'} · ${fi + 1}ª faixa`,
    aliqNominal: f.aliq,
  };
}

function calcPresumido(revenue, tipo, prolabore, accountant) {
  const mIRPJ = tipo === 'comercio' ? 0.08 : 0.32;
  const mCSLL = tipo === 'comercio' ? 0.12 : 0.32;

  const baseIRPJ  = revenue * mIRPJ;
  const baseCSLL  = revenue * mCSLL;
  const irpj      = baseIRPJ * 0.15 + Math.max(0, baseIRPJ - 240000) * 0.10;
  const csll      = baseCSLL * 0.09;
  const pis       = revenue * 0.0065;
  const cofins    = revenue * 0.03;
  const iss       = tipo === 'servicos' ? revenue * 0.03 : 0;

  const total     = irpj + csll + pis + cofins + iss;
  const inss      = prolabore * 12 * 0.31;
  const cont      = accountant * 12;
  const custoTotal = total + inss + cont;

  return {
    irpj, csll, pis, cofins, iss, inss, cont,
    total, custoTotal,
    aliqEfetiva: total / revenue,
    baseIRPJ, baseCSLL,
  };
}

function calcReal(revenue, expenses, purchases, tipo, prolabore, accountant) {
  const lucro  = Math.max(0, revenue - expenses);
  const irpj   = lucro * 0.15 + Math.max(0, lucro - 240000) * 0.10;
  const csll   = lucro * 0.09;
  const picred = purchases * 0.0165;
  const crcred = purchases * 0.076;
  const pis    = Math.max(0, revenue * 0.0165 - picred);
  const cofins = Math.max(0, revenue * 0.076  - crcred);
  const iss    = tipo === 'servicos' ? revenue * 0.03 : 0;

  const total  = irpj + csll + pis + cofins + iss;
  const inss   = prolabore * 12 * 0.31;
  const cont   = accountant * 12;
  const custoTotal = total + inss + cont;

  return {
    irpj, csll, pis, cofins, iss, inss, cont,
    total, custoTotal,
    aliqEfetiva: total / revenue,
    lucro, picred, crcred,
  };
}

/* ═══════════════════════════════════════════════════════════
   ESTADO
═══════════════════════════════════════════════════════════ */
let state = {
  revenue: 200000, tipo: 'comercio',
  expenses: 60000, purchases: 30000,
  prolabore: 1412, accountant: 350,
};

/* ═══════════════════════════════════════════════════════════
   DOM HELPERS
═══════════════════════════════════════════════════════════ */
const $ = id => document.getElementById(id);
const set = (id, txt) => { const e = $(id); if (e) e.textContent = txt; };

function flash(id) {
  const e = $(id); if (!e) return;
  e.classList.remove('flash');
  void e.offsetWidth;
  e.classList.add('flash');
}

/* ═══════════════════════════════════════════════════════════
   UPDATE
═══════════════════════════════════════════════════════════ */
function update() {
  const { revenue, tipo, expenses, purchases, prolabore, accountant } = state;

  const S = calcSimples(revenue, tipo, prolabore, accountant);
  const P = calcPresumido(revenue, tipo, prolabore, accountant);
  const R = calcReal(revenue, expenses, purchases, tipo, prolabore, accountant);

  const sCost = S.eligible ? S.custoTotal : Infinity;
  const items = [
    { key:'simples',   cost: sCost },
    { key:'presumido', cost: P.custoTotal },
    { key:'real',      cost: R.custoTotal },
  ].sort((a,b) => a.cost - b.cost);

  const rankOf = { [items[0].key]:'best', [items[1].key]:'mid', [items[2].key]:'worst' };

  const clrOf = { best: 'var(--green)', mid: 'var(--gold)', worst: 'var(--red)' };
  const clsOf = { best: 'rank-best',   mid: 'rank-mid',    worst: 'rank-worst' };
  const lblOf = { best: '★ Melhor opção', mid: '↔ Intermediária', worst: '↑ Maior custo' };

  // ── Simples ──
  if (S.eligible) {
    ['simples-total'].forEach(flash);
    set('simples-total',  fmtBRL(S.total));
    set('simples-aliq',   fmtPct(S.aliqEfetiva));
    set('simples-mensal', fmtBRL(S.total/12)+'/mês');
    set('simples-faixa',  S.faixaNome);
    set('s-das',   fmtBRL(S.das));
    set('s-inss',  fmtBRL(S.inss));
    set('s-cont',  fmtBRL(S.cont));
    set('s-custo', fmtBRL(S.custoTotal));
  } else {
    set('simples-total','Inelegível'); set('simples-aliq','—');
    set('simples-mensal','> R$ 4,8M'); set('simples-faixa','Fora do Simples');
    ['s-das','s-inss','s-cont','s-custo'].forEach(id => set(id,'—'));
  }

  // ── Presumido ──
  flash('presumido-total');
  set('presumido-total',  fmtBRL(P.total));
  set('presumido-aliq',   fmtPct(P.aliqEfetiva));
  set('presumido-mensal', fmtBRL(P.total/12)+'/mês');
  set('presumido-base',   fmtBRL(P.baseIRPJ));
  set('p-irpj',   fmtBRL(P.irpj)); set('p-csll',  fmtBRL(P.csll));
  set('p-pis',    fmtBRL(P.pis));  set('p-cofins', fmtBRL(P.cofins));
  set('p-iss',    tipo === 'servicos' ? fmtBRL(P.iss) : 'N/A');
  set('p-inss',   fmtBRL(P.inss)); set('p-cont',  fmtBRL(P.cont));
  set('p-custo',  fmtBRL(P.custoTotal));

  // ── Real ──
  flash('real-total');
  set('real-total',  fmtBRL(R.total));
  set('real-aliq',   fmtPct(R.aliqEfetiva));
  set('real-mensal', fmtBRL(R.total/12)+'/mês');
  set('real-lucro',  fmtBRL(R.lucro));
  set('r-irpj',   fmtBRL(R.irpj)); set('r-csll',  fmtBRL(R.csll));
  set('r-pis',    fmtBRL(R.pis) + (R.picred>0 ? ` (−${fmtBRL(R.picred)} cr.)` : ''));
  set('r-cofins', fmtBRL(R.cofins) + (R.crcred>0 ? ` (−${fmtBRL(R.crcred)} cr.)` : ''));
  set('r-iss',    tipo === 'servicos' ? fmtBRL(R.iss) : 'N/A');
  set('r-inss',   fmtBRL(R.inss)); set('r-cont',  fmtBRL(R.cont));
  set('r-custo',  fmtBRL(R.custoTotal));

  // ISS row visibility
  ['p-iss-row','r-iss-row'].forEach(id => {
    const el = $(id); if (el) el.style.display = tipo === 'servicos' ? '' : 'none';
  });

  // ── Rank styles ──
  ['simples','presumido','real'].forEach(k => {
    const card = $(`card-${k}`);
    const topBar = $(`ctb-${k}`);
    const rank   = $(`rank-${k}`);
    const eco    = $(`eco-${k}`);
    const rk = rankOf[k];

    card.className = `card card-${rk}`;
    topBar.style.background = clrOf[rk];

    rank.className = `card-rank ${clsOf[rk]}`;
    rank.textContent = lblOf[rk];

    const kCost = k === 'simples' ? sCost : k === 'presumido' ? P.custoTotal : R.custoTotal;
    eco.style.color = clrOf[rk];
    if (rk === 'best') {
      eco.textContent = `✓ Economia de ${fmtBRL(items[2].cost - items[0].cost)} vs. a mais cara`;
    } else {
      eco.textContent = `${fmtBRL(kCost - items[0].cost)} a mais que a melhor opção`;
    }
  });

  // ── Recommendation ──
  const names = { simples:'Simples Nacional', presumido:'Lucro Presumido', real:'Lucro Real' };
  const best  = items[0].key;
  const recEl = $('recBanner');
  const clsCls = { simples:'', presumido:'rec-gold', real:'rec-red' };
  recEl.className = 'rec ' + (clsCls[best]||'');

  set('recTitle', `${names[best]} é a melhor escolha neste cenário`);
  const savings = items[2].cost - items[0].cost;
  set('recSave', fmtBRL(savings));

  let sub = '';
  if (best==='simples')   sub = `DAS unificado resulta em menor carga. ${S.eligible?S.faixaNome:''}`;
  if (best==='presumido') sub = `Margem de presunção (${tipo==='comercio'?'8%':'32%'}) gera base menor que o lucro apurado.`;
  if (best==='real')      sub = `Com ${fmtPct(expenses/revenue)} de despesas, o lucro real (${fmtBRL(R.lucro)}) reduz IRPJ/CSLL.`;
  set('recSub', sub);

  // ── Hero savings ──
  set('heroSavings', fmtBRL(savings));

  // ── Bar chart ──
  const costs = [
    { key:'simples',   val: sCost },
    { key:'presumido', val: P.custoTotal },
    { key:'real',      val: R.custoTotal },
  ];
  const maxC = Math.max(...costs.map(c=>c.val));
  const fillCls = { [items[0].key]:'fill-best', [items[1].key]:'fill-mid', [items[2].key]:'fill-worst' };

  costs.forEach(({key, val}) => {
    const fill = $(`brf-${key}`);
    const valEl = $(`brv-${key}`);
    if (fill) { fill.style.width = (val===Infinity?0:val/maxC*100)+'%'; fill.className='br-fill '+fillCls[key]; }
    if (valEl) valEl.textContent = val===Infinity ? 'Inelegível' : fmtBRL(val);
  });

  // ── Faixa indicator ──
  const fi = $('faixaIndicator');
  if (fi) {
    if (S.eligible) {
      fi.textContent = `↳ ${S.faixaNome} · Alíquota nominal ${(S.aliqNominal*100).toFixed(1).replace('.',',')}% → efetiva ${fmtPct(S.aliqEfetiva)}`;
    } else {
      fi.textContent = '↳ Receita acima do teto do Simples (R$ 4,8M)';
    }
  }

  // ── Margin widget ──
  const margin = expenses > 0 ? Math.max(0, (revenue - expenses) / revenue) : null;
  const mval  = $('marginValue');
  const mfill = $('marginFill');
  const mhint = $('marginHint');
  if (mval && margin !== null) {
    mval.textContent  = fmtPct(margin);
    mfill.style.width = Math.min(margin * 100, 100) + '%';
    const hint = margin < 0.1 ? 'Margem baixa → favorece Lucro Real'
               : margin < 0.25 ? 'Margem moderada'
               : 'Margem elevada → reveja Lucro Real';
    if (mhint) mhint.textContent = hint;
    mfill.style.background = margin < 0.1
      ? 'linear-gradient(90deg, var(--red), rgba(255,79,109,.5))'
      : margin < 0.3
      ? 'linear-gradient(90deg, var(--gold), rgba(240,184,64,.5))'
      : 'linear-gradient(90deg, var(--green), rgba(0,200,120,.5))';
  }

  // ── Curve ──
  drawCurve(revenue, tipo);
}

/* ═══════════════════════════════════════════════════════════
   CANVAS CURVE
═══════════════════════════════════════════════════════════ */
function drawCurve(currentRev, tipo) {
  const canvas = $('curveCanvas'); if (!canvas) return;

  // Resize to container
  const container = canvas.parentElement;
  const dpr = window.devicePixelRatio || 1;
  const cssW = container.clientWidth || 800;
  const cssH = Math.max(180, cssW * 0.26);
  canvas.style.height = cssH + 'px';
  canvas.width  = cssW * dpr;
  canvas.height = cssH * dpr;
  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);
  const W = cssW, H = cssH;

  const padL=48, padR=16, padT=14, padB=30;
  const iW = W-padL-padR, iH = H-padT-padB;
  const minR=81000, maxR=4800000, maxA=0.40;

  const toX = r => padL + (r-minR)/(maxR-minR)*iW;
  const toY = a => padT + iH - Math.min(a/maxA,1)*iH;

  ctx.clearRect(0,0,W,H);

  // Grid
  [0.05,0.10,0.15,0.20,0.25,0.30,0.35].forEach(a => {
    const y = toY(a);
    ctx.strokeStyle = 'rgba(28,56,38,.7)';
    ctx.lineWidth = 1; ctx.setLineDash([3,4]);
    ctx.beginPath(); ctx.moveTo(padL,y); ctx.lineTo(padL+iW,y); ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle='rgba(61,107,80,.7)'; ctx.font=`10px 'JetBrains Mono'`;
    ctx.fillText((a*100).toFixed(0)+'%', 2, y+4);
  });

  // X-axis labels
  [{r:180000,l:'180k'},{r:360000,l:'360k'},{r:720000,l:'720k'},
   {r:1800000,l:'1,8M'},{r:3600000,l:'3,6M'},{r:4800000,l:'4,8M'}].forEach(({r,l}) => {
    const x = toX(r);
    ctx.strokeStyle='rgba(28,56,38,.4)'; ctx.lineWidth=1; ctx.setLineDash([2,4]);
    ctx.beginPath(); ctx.moveTo(x,padT); ctx.lineTo(x,padT+iH); ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle='rgba(61,107,80,.65)'; ctx.font=`10px 'JetBrains Mono'`;
    ctx.textAlign='center'; ctx.fillText(l, x, H-4);
  });
  ctx.textAlign='left';

  // Curve functions
  const simplesAlq = r => {
    if (r>4800000) return null;
    const tbl = tipo==='comercio'?ANEXO_I:ANEXO_III;
    const f = tbl.find(row=>r<=row.max)||tbl[tbl.length-1];
    return (r*f.aliq - f.pd) / r;
  };

  const mIRPJ = tipo==='comercio'?0.08:0.32;
  const mCSLL = tipo==='comercio'?0.12:0.32;
  const presumidoAlq = r => {
    const bI=r*mIRPJ, bC=r*mCSLL;
    const irpj=bI*.15+Math.max(0,bI-240000)*.10;
    const iss=tipo==='servicos'?r*.03:0;
    return (irpj+bC*.09+r*.0065+r*.03+iss)/r;
  };

  const eRatio = state.expenses/state.revenue||0;
  const pRatio = state.purchases/state.revenue||0;
  const realAlq = r => {
    const lucro=Math.max(0,r*(1-eRatio));
    const irpj=lucro*.15+Math.max(0,lucro-240000)*.10;
    const pis=Math.max(0,r*.0165-r*pRatio*.0165);
    const cof=Math.max(0,r*.076 -r*pRatio*.076);
    const iss=tipo==='servicos'?r*.03:0;
    return (irpj+lucro*.09+pis+cof+iss)/r;
  };

  const drawLine=(color,fn)=>{
    ctx.beginPath(); ctx.strokeStyle=color; ctx.lineWidth=2.5; ctx.lineJoin='round';
    let started=false;
    for(let i=0;i<=100;i++){
      const r=minR+(i/100)*(maxR-minR);
      const a=fn(r);
      if(a==null) continue;
      const x=toX(r), y=toY(Math.min(a,maxA));
      if(!started){ctx.moveTo(x,y);started=true;}else ctx.lineTo(x,y);
    }
    ctx.stroke();
  };

  drawLine('rgba(0,200,120,.85)', simplesAlq);
  drawLine('rgba(240,184,64,.85)', presumidoAlq);
  drawLine('rgba(255,79,109,.8)', realAlq);

  // Current revenue marker
  if (currentRev>=minR && currentRev<=maxR) {
    const cx=toX(currentRev);
    ctx.strokeStyle='rgba(224,240,232,.3)'; ctx.lineWidth=1.5; ctx.setLineDash([5,4]);
    ctx.beginPath(); ctx.moveTo(cx,padT); ctx.lineTo(cx,padT+iH); ctx.stroke();
    ctx.setLineDash([]);

    [[simplesAlq,'#00C878'],[presumidoAlq,'#F0B840'],[realAlq,'#FF4F6D']].forEach(([fn,col])=>{
      const a=fn(currentRev); if(!a||a>maxA) return;
      const dy=toY(a);
      ctx.beginPath(); ctx.arc(cx,dy,5,0,Math.PI*2);
      ctx.fillStyle=col; ctx.fill();
      ctx.strokeStyle='#050E08'; ctx.lineWidth=2; ctx.stroke();
    });
  }
}

/* ═══════════════════════════════════════════════════════════
   SLIDER FILL
═══════════════════════════════════════════════════════════ */
function updateSliderFill() {
  const sl = $('revenueSlider'); if (!sl) return;
  const pct = (sl.value-sl.min)/(sl.max-sl.min)*100;
  sl.style.background = `linear-gradient(90deg,var(--green) 0%,var(--green) ${pct}%,var(--border) ${pct}%,var(--border) 100%)`;
}

/* ═══════════════════════════════════════════════════════════
   EVENTS
═══════════════════════════════════════════════════════════ */
function bindEvents() {
  const slider   = $('revenueSlider');
  const revInput = $('revenueInput');

  slider.addEventListener('input', () => {
    state.revenue  = +slider.value;
    revInput.value = fmtDisplay(state.revenue);
    updateSliderFill(); update();
  });

  revInput.addEventListener('input', () => {
    const v = parseBRL(revInput.value);
    if (v>=81000 && v<=4800000) { state.revenue=v; slider.value=v; updateSliderFill(); }
    update();
  });

  revInput.addEventListener('blur', () => {
    const v = Math.min(Math.max(parseBRL(revInput.value),81000),4800000);
    state.revenue  = v; slider.value=v;
    revInput.value = fmtDisplay(v);
    updateSliderFill(); update();
  });

  // Money fields
  [
    ['expensesInput','expenses'],['purchasesInput','purchases'],
    ['prolaboreInput','prolabore'],['accountantInput','accountant'],
  ].forEach(([id, key]) => {
    const inp = $(id); if (!inp) return;
    inp.addEventListener('input', () => { state[key]=parseBRL(inp.value); update(); });
    inp.addEventListener('blur',  () => { const v=parseBRL(inp.value); state[key]=v; inp.value=fmtDisplay(v); update(); });
  });

  // Activity toggle
  document.querySelectorAll('#tipoToggle .act-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#tipoToggle .act-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      state.tipo = btn.dataset.value;
      update();
    });
  });

  // Mobile sidebar toggle
  const tog  = $('mobToggle');
  const body = $('sidebarFields');
  if (tog && body) {
    tog.addEventListener('click', () => {
      const open = body.classList.toggle('open');
      tog.setAttribute('aria-expanded', open);
    });
  }

  // Redraw curve on resize
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => drawCurve(state.revenue, state.tipo), 120);
  });
}

/* ═══════════════════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  bindEvents();
  updateSliderFill();

  // Auto-open sidebar on desktop
  const body = $('sidebarFields');
  if (body && window.innerWidth > 1100) body.classList.add('open');

  // Initial render with slight delay for animation
  setTimeout(update, 80);
});
