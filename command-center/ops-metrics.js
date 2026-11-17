/*
 * Filename: ops-metrics.js
 * App Name: moonshinerxwerks.com
 *
 * Created Date: 2026-11-16
 * Last Edited Date: 2026-11-16
 *
 * Copyright: © 2026 Moonshinerxwerks LLC. All rights reserved.
 *
 * Code Description: Shared Studio usage popup (tokens and estimated cost per day by model, plus the By model table) and the Utilization popup, copied from the real Command Center. Used by the Dashboard and Agent Status. Reads the sample window.AGENT_STATUS (agents-data.js) and util-data.js. Exposes window.mxOpenUsage(metric) and window.mxOpenUtil().
 */
(function(){
const st=document.createElement('style');st.textContent=".tog{display:inline-flex;border:1px solid var(--line);border-radius:8px;overflow:hidden;margin-left:10px;vertical-align:middle}.tog button{background:none;border:0;color:var(--mute);font:inherit;font-size:11.5px;padding:2px 10px;cursor:pointer;letter-spacing:.06em}.tog button.on{background:#2a313c;color:var(--text)}\n.th h2{display:inline}\n.trend{background:var(--card);border:1px solid var(--line);border-radius:10px;padding:12px 16px;margin-bottom:22px}\n.trend h2{margin:0 0 8px}.chart{display:grid;grid-template-columns:52px 1fr;gap:0 8px}\n.yax{position:relative;height:120px;font-size:11px;color:var(--mute);font-variant-numeric:tabular-nums}.yax span{position:absolute;right:0;transform:translateY(50%)}\n.plot{position:relative;height:120px;border-left:1px solid var(--line);border-bottom:1px solid var(--line)}\n.grid{position:absolute;left:0;right:0;border-top:1px dashed #2a313c}\n.bars{position:absolute;inset:0 0 0 6px;display:grid;grid-template-columns:repeat(14,1fr);gap:6px;align-items:end}\n.bar .v{position:absolute;bottom:100%;left:50%;transform:translateX(-50%);font-size:10.5px;color:var(--mute);white-space:nowrap;margin-bottom:2px}\n.bar{background:#2f6b52;border-radius:4px 4px 0 0;min-height:2px;position:relative;display:flex;flex-direction:column-reverse;overflow:visible}.bar i{display:block;min-height:1px}.bar i:last-of-type{border-radius:4px 4px 0 0}.bar.today{box-shadow:0 0 0 1.5px var(--text)}.sg-opus{background:#3fb27f}.sg-sonnet{background:#5b9bf7}.sg-haiku{background:#c9ced6}.sg-fable,.sg-mythos{background:#b07ef0}.sg-other{background:#6b7480}.mlg{margin-top:14px;overflow-x:auto}.mtab{width:100%;border-collapse:collapse;table-layout:auto;font-size:13px;font-variant-numeric:tabular-nums}.mtab th{color:var(--mute);font-weight:600;font-size:11px;letter-spacing:.05em;text-transform:uppercase;text-align:right;padding:4px 10px;border-bottom:1px solid var(--line)}.mtab th:first-child,.mtab td:first-child{text-align:left}.mtab tr.sub th{text-transform:none;letter-spacing:0;font-weight:500}.mtab td{text-align:right;padding:6px 10px;border-bottom:1px solid var(--line);white-space:nowrap}.mtab td small{color:var(--mute);margin-left:6px;font-size:11px}.mtab td i{width:10px;height:10px;border-radius:2px;display:inline-block;margin-right:8px}.mtab tr.tt td{border-bottom:0}\n.bl{display:grid;grid-template-columns:repeat(14,1fr);gap:6px;margin:4px 0 0 66px;color:var(--mute);font-size:11px;text-align:center}\n.avg{position:absolute;left:0;right:0;border-top:2px dashed #e6aa28;z-index:2;pointer-events:auto}.avg span{position:absolute;right:0;top:-20px;font-size:11.5px;font-weight:600;color:#e6aa28;background:var(--bg,#0b0b0b);padding:0 6px;border-radius:4px}\ndialog.udlg{width:min(900px,94vw);max-height:88vh;padding:0;border:1px solid #4a4a4a;border-top:3px solid #7ee2a8;border-radius:14px;background:#1e1e1e;color:var(--text);box-shadow:0 0 0 1px rgba(255,255,255,.04),0 24px 80px rgba(0,0,0,.85)}\ndialog.tdlg{width:min(1100px,95vw)}.tdlg .tbd{padding:6px 20px 18px}.tdlg .trend{border:0;background:none;padding:0;margin:0}\ndialog.udlg::backdrop{background:rgba(0,0,0,.78);backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px)}\n.udlg .uh{display:flex;justify-content:space-between;gap:14px;padding:16px 20px;background:#262626;border-bottom:1px solid #383838;position:sticky;top:0}\n.udlg .uh small{color:var(--mute);letter-spacing:.1em;font-size:11.5px}.udlg .uh h3{margin:2px 0;font-size:20px}.udlg .uh p{margin:0;color:var(--mute);font-size:13.5px}\n.udlg .ux,.udlg .uback{background:none;border:1px solid #444;color:var(--text);border-radius:8px;cursor:pointer}.udlg .ux{width:32px;height:32px;flex:none}.udlg .uback{padding:1px 8px;font-size:11.5px;letter-spacing:0}\n.udlg .utabs{display:flex;gap:6px;padding:12px 20px 0}.udlg .utabs button{background:#2a2a2a;border:1px solid #444;color:var(--text);border-radius:999px;padding:5px 14px;cursor:pointer;font:500 13px 'DM Sans',sans-serif}.udlg .utabs button.on{background:#7ee2a8;color:#000;border-color:#7ee2a8}\n.udlg .ul{padding:10px 20px}.udlg .ur{display:grid;grid-template-columns:320px minmax(0,1fr) 52px 190px;gap:12px;align-items:center;width:100%;background:none;border:0;border-bottom:1px solid #2e2e2e;color:var(--text);padding:9px 4px;cursor:pointer;text-align:left;font:inherit}.udlg .ur:hover{background:#262626}\n.udlg .ur b{text-align:right}.udlg .ur small{color:var(--mute);text-align:right;white-space:nowrap}.udlg .ur .un{white-space:normal;overflow-wrap:normal}\n.udlg .ub{height:8px;border-radius:4px;background:#2c2c2c;overflow:hidden}.udlg .ub i{display:block;height:100%;background:#3fb27f}\n.udlg .uc{display:flex;gap:4px;align-items:flex-end;height:220px;padding:18px 20px 6px}.udlg .ucol{flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;height:100%;min-width:0}\n.udlg .ucb{flex:1;width:100%;max-width:38px;background:#262626;border-radius:4px 4px 0 0;display:flex;align-items:flex-end}.udlg .ucb i{display:block;width:100%;background:#3fb27f;border-radius:4px 4px 0 0}\n.udlg .uv{font-size:11px;color:var(--mute);height:14px}.udlg .uk{font-size:10.5px;color:var(--mute);white-space:nowrap;overflow:hidden;max-width:100%}\n.udlg .unote{color:var(--mute);font-size:12.5px;padding:0 20px 16px;margin:6px 0 0}.udlg .none{color:var(--mute)}\n.udlg .usec{padding:14px 20px 0;color:var(--mute);font-size:11.5px;letter-spacing:.1em;text-transform:uppercase}.udlg .ur.ap .ub i{background:#5b9bf7}.udlg .ur.ap:hover{background:none}.udlg .ur.ap{cursor:default}";document.head.appendChild(st);
const E=s=>String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const $=n=>'$'+(n>=1000?Math.round(n).toLocaleString():n>=100?Math.round(n):n.toFixed(2));
const K=n=>n>=1e9?(n/1e9).toFixed(1)+'B':n>=1e6?(n/1e6).toFixed(1)+'M':n>=1e3?Math.round(n/1e3)+'K':String(n);
const hm=s=>{const m=Math.floor(s/60);return m<1?'0 min':m<60?m+' min':Math.floor(m/60)+' hr'+(m%60?' '+m%60+' min':'');};
let METRIC='tok';
document.body.insertAdjacentHTML('beforeend',"<dialog class=\"udlg tdlg\" id=\"tdlg\"><div class=\"uh\"><div><small>STUDIO USAGE</small><h3>Tokens and estimated cost</h3><p>Per day by model, last 14 days. Estimated at API list prices.</p></div><button class=\"ux tx\" aria-label=\"Close\">\u2715</button></div><div class=\"tbd\"><div class=\"trend\"><div class=\"th\"><h2 id=\"ttl\">Studio tokens per day, last 14 days</h2><span class=\"tog\"><button data-m=\"tok\" class=\"on\">Tokens</button><button data-m=\"usd\">Est. cost</button></span></div><div style=\"height:8px\"></div><div class=\"chart\"><div class=\"yax\" id=\"yax\"></div><div class=\"plot\" id=\"plot\"><div class=\"bars\" id=\"bars\"></div></div></div><div class=\"bl\" id=\"bl\"></div><div class=\"mlg\" id=\"mlg\"></div></div></div></dialog>");
const tdlg=document.getElementById('tdlg');
function chart(){const d=window.AGENT_STATUS;if(!d)return;
  const val=x=>METRIC==='usd'?x[1][3]:x[1][0]+x[1][2], F=METRIC==='usd'?$:K;
  document.getElementById('ttl').textContent=METRIC==='usd'?'Studio estimated cost per day, last 14 days (API list prices)':'Studio tokens per day, last 14 days (new input + output)';
  const raw=Math.max(1,...d.studio.daily.map(val));
  const p10=Math.pow(10,Math.floor(Math.log10(raw))), mx=[1,2,2.5,5,10].map(m=>m*p10).find(m=>m>=raw);
  const ticks=[0,.25,.5,.75,1];
  document.getElementById('yax').innerHTML=ticks.map(t=>`<span style="bottom:${t*100}%">${F(mx*t)}</span>`).join('');
  document.querySelectorAll('#plot .grid,#plot .avg').forEach(g=>g.remove());
  document.getElementById('plot').insertAdjacentHTML('afterbegin',ticks.slice(1).map(t=>`<div class="grid" style="bottom:${t*100}%"></div>`).join(''));
  const MF=[['fable','Fable'],['mythos','Mythos'],['opus','Opus'],['sonnet','Sonnet'],['haiku','Haiku'],['other','Other']],mv=v=>METRIC==='usd'?v[3]:v[0]+v[2];
  document.getElementById('bars').innerHTML=d.studio.daily.map((x,i)=>{const v=val(x),m=x[2]||{},tot=MF.reduce((t,[k])=>t+(m[k]?mv(m[k]):0),0)||1;
   const segs=MF.filter(([k])=>m[k]&&mv(m[k])>0).map(([k,l])=>`<i class="sg-${k}" style="flex:${mv(m[k])/tot}"></i>`).join('');
   const tip=`${x[0]}: ${K(x[1][0])} new input, ${K(x[1][2])} output, ${K(x[1][1])} cached reads · est. ${$(x[1][3])}`+MF.filter(([k])=>m[k]).map(([k,l])=>`\n${l}: ${METRIC==='usd'?$(m[k][3]):K(m[k][0]+m[k][2])} (${Math.round(100*mv(m[k])/tot)}%)`).join('');
   return `<div class="bar${i===13?' today':''}" style="height:${Math.max(1,v/mx*100)}%" title="${tip}">${v?`<span class="v">${F(v)}</span>`:''}${segs}</div>`}).join('');
  { const used=MF.filter(([k])=>d.studio.daily.some(x=>(x[2]||{})[k]));
    const sum=(xs,k)=>xs.reduce((t,x)=>{const v=(x[2]||{})[k];if(v)for(let j=0;j<4;j++)t[j]+=v[j];return t;},[0,0,0,0]);
    const D=d.studio.daily,T=D.slice(-1),W=D.slice(-7),A=D;
    const tot=xs=>used.reduce((t,[k])=>{const v=sum(xs,k);return [t[0]+v[0]+v[2],t[1]+v[3]];},[0,0]);
    const cell=(xs,k)=>{const v=sum(xs,k),t=tot(xs);return `<td>${K(v[0]+v[2])}<small>${t[0]?Math.round(100*(v[0]+v[2])/t[0]):0}%</small></td><td>${$(v[3])}<small>${t[1]?Math.round(100*v[3]/t[1]):0}%</small></td>`;};
    const tc=xs=>{const t=tot(xs);return `<td><b>${K(t[0])}</b></td><td><b>${$(t[1])}</b></td>`;};
    document.getElementById('mlg').innerHTML=`<table class="mtab"><thead><tr><th>By model</th><th colspan="2">Today</th><th colspan="2">Last 7 days</th><th colspan="2">Last 14 days</th></tr><tr class="sub"><th></th>${'<th>Tokens</th><th>Est. cost</th>'.repeat(3)}</tr></thead><tbody>`
     +used.map(([k,l])=>`<tr><td><i class="sg-${k}"></i>${l}</td>${cell(T,k)}${cell(W,k)}${cell(A,k)}</tr>`).join('')
     +`<tr class="tt"><td>All models</td>${tc(T)}${tc(W)}${tc(A)}</tr></tbody></table>`; }
  { const act=d.studio.daily.map(val).filter(v=>v>0); if(act.length){ const avg=act.reduce((x,y)=>x+y,0)/act.length;
    document.getElementById('plot').insertAdjacentHTML('beforeend',`<div class="avg" style="bottom:${avg/mx*100}%" title="Average of the ${act.length} days with activity in the last 14"><span>Avg ${F(avg)}/day</span></div>`); } }
  document.getElementById('bl').innerHTML=d.studio.daily.map(x=>`<span>${x[0].slice(5).replace('-','/')}</span>`).join('');
}
/* Utilization drill-down: all agents for a period, then one agent over week / month / quarter / year. */
const UP=[['day','Today',1],['week','WTD',7],['month','MTD',30],['quarter','QTD',91],['year','YTD',365]];
let UTIL={per:'day',agent:null};
const udlg=document.createElement('dialog');udlg.className='udlg';document.body.appendChild(udlg);
function dkey(off){const t=new Date(Date.now()-off*864e5);return t.getFullYear()+'-'+String(t.getMonth()+1).padStart(2,'0')+'-'+String(t.getDate()).padStart(2,'0');}
const wtd=()=>((new Date().getDay()+6)%7)+1; /* days so far this week, Monday first */
const since=d=>Math.floor((new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate())-d)/864e5)+1; /* days from d through today */
const qStart=()=>{const t=new Date();return new Date(t.getFullYear(),Math.floor(t.getMonth()/3)*3,1);};
const nd=per=>per==='week'?wtd():per==='month'?new Date().getDate():per==='quarter'?since(qStart()):per==='year'?since(new Date(new Date().getFullYear(),0,1)):1;
function usum(h,n){let w=0,a=0;for(let i=0;i<n;i++){const v=(h||{})[dkey(i)];if(v){w+=v[0];a+=v[1];}}return [w,a];}
const pct=(w,a)=>a>0?Math.round(100*w/a):null;
function ubar(p){return `<div class="ub"><i style="width:${Math.max(0,Math.min(100,p||0))}%"></i></div>`;}
function utabs(){return `<div class="utabs">${UP.map(([k,l])=>`<button type="button" data-up="${k}" class="${UTIL.per===k?'on':''}">${l}</button>`).join('')}</div>`;}
function buckets(h,per){const out=[];
  if(per==='day'||per==='week'||per==='month'){const n=per==='month'?new Date().getDate():wtd();for(let i=n-1;i>=0;i--){const k=dkey(i),v=(h||{})[k]||[0,0];out.push([k.slice(5).replace('-','/'),v[0],v[1]]);}}
  else if(per==='quarter'){const n=nd('quarter');for(let s=n-1;s>=0;s-=7){let w=0,a=0;const e=Math.max(s-6,0);for(let i=s;i>=e;i--){const v=(h||{})[dkey(i)];if(v){w+=v[0];a+=v[1];}}out.push(['wk of '+dkey(s).slice(5).replace('-','/'),w,a]);}}
  else{const now=new Date();for(let m=0;m<=now.getMonth();m++){const pre=now.getFullYear()+'-'+String(m+1).padStart(2,'0');let w=0,a=0;Object.entries(h||{}).forEach(([k,v])=>{if(k.startsWith(pre)){w+=v[0];a+=v[1];}});out.push([new Date(now.getFullYear(),m,1).toLocaleString([], {month:'short'}),w,a]);}}
  return out;}
function urender(){const H=window.UTIL_HISTORY||{};const n=nd(UTIL.per);const lbl=UP.find(x=>x[0]===UTIL.per)[1];
  if(!UTIL.agent){
    const rows=Object.keys(H).filter(nm=>nm[0]!=='_').map(nm=>{const [w,a]=usum(H[nm],n);return {nm,w,a,p:pct(w,a)};}).filter(r=>r.a>0).sort((x,y)=>(y.p??-1)-(x.p??-1)||y.w-x.w);
    const T=rows.reduce((t,r)=>[t[0]+r.w,t[1]+r.a],[0,0]);
    udlg.innerHTML=`<div class="uh"><div><small>UTILIZATION · ${lbl.toUpperCase()}</small><h3>All agents: ${pct(T[0],T[1])??0}%</h3><p>${hm(T[0])} working of ${hm(T[1])} available. Click an agent for its history.</p></div><button type="button" class="ux" aria-label="Close">✕</button></div>${utabs()}
    ${(()=>{const A={};for(let i=0;i<n;i++){const v=(H._alloc||{})[dkey(i)];if(v)Object.entries(v).forEach(([k,s])=>A[k]=(A[k]||0)+s);}
      const tot=Object.values(A).reduce((a,b)=>a+b,0);if(!tot)return '';
      const pr=Object.entries(A).sort((a,b)=>(a[0]==='Studio administration')-(b[0]==='Studio administration')||b[1]-a[1]);
      return `<div class="usec">Where the working time went</div><div class="ul">${pr.map(([k,s])=>`<div class="ur ap"><span class="un">${E(k)}</span>${ubar(100*s/tot)}<b>${Math.round(100*s/tot)}%</b><small>${hm(s)}</small></div>`).join('')}</div><div class="usec">By agent</div>`;})()}
    <div class="ul">${rows.map(r=>`<button type="button" class="ur" data-ua="${E(r.nm)}"><span class="un">${E(r.nm)}</span>${ubar(r.p)}<b>${r.p}%</b><small>${hm(r.w)} of ${hm(r.a)}</small></button>`).join('')||'<p class="none">No recorded time in this period.</p>'}</div>
    <p class="unote">Products: product agents count toward their own product; shared agents (PM, QA, Legal, Store, Research, Marketing) count toward the product a request was about, else Studio administration. Available = time the agent's session was running. Sample data: the history is invented.</p>`;
  } else {
    const h=H[UTIL.agent]||{};const [w,a]=usum(h,n);const B=buckets(h,UTIL.per==='day'?'week':UTIL.per);
    udlg.innerHTML=`<div class="uh"><div><small><button type="button" class="uback">← All agents</button> · ${lbl.toUpperCase()}</small><h3>${E(UTIL.agent)}: ${pct(w,a)??0}%</h3><p>${hm(w)} working of ${hm(a)} available.</p></div><button type="button" class="ux" aria-label="Close">✕</button></div>${utabs()}
    <div class="uc">${B.map(([k,bw,ba])=>{const p=pct(bw,ba);return `<div class="ucol" title="${k}: ${p??'–'}% (${hm(bw)} of ${hm(ba)})"><span class="uv">${p!=null?p+'%':''}</span><div class="ucb"><i style="height:${p||0}%"></i></div><span class="uk">${k}</span></div>`;}).join('')}</div>
    <p class="unote">${({week:'Week to date, Monday through today. ',month:'Month to date. ',quarter:'Quarter to date. ',year:'Year to date. '})[UTIL.per]||''}${UTIL.per==='quarter'?'Bars are weeks.':UTIL.per==='year'?'Bars are months.':'Bars are days.'} Empty bars mean the agent wasn't running or no history yet.</p>`;
  }}
function uopen(){const go=()=>{urender();if(!udlg.open)udlg.showModal();};const s=document.createElement('script');s.src='util-data.js?'+Date.now();s.onload=()=>{s.remove();go();};s.onerror=()=>{s.remove();go();};document.head.appendChild(s);}
window.mxOpenUsage=m=>{METRIC=m||'tok';tdlg.querySelectorAll('.tog button').forEach(x=>x.classList.toggle('on',x.dataset.m===METRIC));chart();if(!tdlg.open)tdlg.showModal();};
window.mxOpenUtil=()=>{UTIL={per:'day',agent:null};uopen();};
window.mxUsageRefresh=()=>{if(tdlg.open)chart();};
tdlg.addEventListener('click',e=>{if(e.target===tdlg)return tdlg.close();if(e.target.closest('.tx'))return tdlg.close();const b=e.target.closest('.tog button');if(b){METRIC=b.dataset.m;tdlg.querySelectorAll('.tog button').forEach(x=>x.classList.toggle('on',x===b));chart();}});
udlg.addEventListener('click',e=>{if(e.target===udlg)return udlg.close();
  const t=e.target.closest('[data-up]');if(t){UTIL.per=t.dataset.up;return urender();}
  const r=e.target.closest('[data-ua]');if(r){UTIL.agent=r.dataset.ua;if(UTIL.per==='day')UTIL.per='week';return urender();}
  if(e.target.closest('.uback')){UTIL.agent=null;return urender();}
  if(e.target.closest('.ux'))udlg.close();});
})();
