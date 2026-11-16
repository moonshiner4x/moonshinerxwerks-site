/*
 * Filename: ops-brand.js
 * App Name: moonshinerxwerks.com
 *
 * Created Date: 2026-11-16
 * Last Edited Date: 2026-11-16
 *
 * Copyright: © 2026 Moonshinerxwerks LLC. All rights reserved.
 *
 * Code Description: Brand bar for the Operations Command Center replica (copied from the real one): logo, page navigation, a "Sample data" badge and the PM button. The PM button docks a static sample conversation with the Program Manager (right side on wide screens, bottom on narrow ones) instead of the live terminal.
 */
(function () {
  const NAV = [
    ['Dashboard', 'index.html'],
    ['Agent Status', 'agents.html'],
    ['Briefing', ''],
    ['Roadmap', ''],
    ['Organization', 'agent-roster.html'],
  ];
  const head = document.head;
  const add = (tag, attrs) => { const e = document.createElement(tag); Object.assign(e, attrs); head.appendChild(e); return e; };
  add('link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' });
  add('link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=Instrument+Serif:ital@0;1&display=swap' });
  add('link', { rel: 'icon', href: 'favicon.ico' });
  add('style', { textContent: `
    :root{--bg:#050505;--card:#111111;--panel:#111111;--line:#262626;--text:#F0EDE8;--mute:#8f8f8f}
    body{background:var(--bg)!important;font-family:'DM Sans',system-ui,sans-serif!important}
    h1{font-family:'Instrument Serif',Georgia,serif!important;font-weight:400!important;font-size:clamp(30px,3.2vw,40px)!important;letter-spacing:.005em}
    .ops{display:none!important}
    .mx-bar{position:sticky;top:0;z-index:50;background:rgba(0,0,0,.92);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border-bottom:1px solid #222}
    .mx-in{max-width:1800px;margin:0 auto;padding:10px 24px;display:flex;align-items:center;gap:22px;flex-wrap:wrap}
    .mx-brand{display:flex;align-items:center;gap:12px;text-decoration:none;color:#F0EDE8}
    .mx-brand img{height:48px;width:auto;display:block;margin:-4px 0}
    .mx-brand span{font-family:'Instrument Serif',Georgia,serif;font-size:24px;line-height:1;padding-left:12px;border-left:1px solid #333}
    .mx-nav{display:flex;gap:4px;flex-wrap:wrap;margin-left:auto}
    .mx-nav a{color:#8f8f8f;text-decoration:none;font-size:13.5px;padding:6px 11px;border-radius:999px;transition:color .15s,background .15s}
    .mx-nav a:hover{color:#F0EDE8;background:rgba(255,255,255,.06)}
    .mx-nav a.on{color:#000;background:#F0EDE8}
    .mx-in{padding-right:84px!important}
    .mx-av{position:fixed;top:9px;right:20px;z-index:70;width:44px;height:44px;border-radius:50%;border:2px solid #7ee2a8;background:radial-gradient(circle at 30% 25%,#2a2a2a,#0b0b0b 70%);color:#F0EDE8;font:400 19px 'Instrument Serif',Georgia,serif;letter-spacing:.02em;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 4px 18px rgba(0,0,0,.55);transition:transform .15s,box-shadow .15s,right .22s ease}
    .mx-av:hover{transform:scale(1.06);box-shadow:0 0 0 4px rgba(126,226,168,.18),0 4px 18px rgba(0,0,0,.55)}
    .mx-av .pd{position:absolute;right:-1px;bottom:-1px;width:12px;height:12px;border-radius:50%;background:#5a626d;border:2px solid #000}
    .mx-av.live .pd{background:#3fb27f}.mx-av.busy .pd{background:#3fb27f;animation:mxp 1.6s infinite}
    @keyframes mxp{0%{box-shadow:0 0 0 0 rgba(63,178,127,.7)}70%{box-shadow:0 0 0 7px rgba(63,178,127,0)}100%{box-shadow:0 0 0 0 rgba(63,178,127,0)}}
    .mx-av.on{background:#7ee2a8;color:#000}
    body.mx-docked .mx-av{right:calc(var(--mxw,560px) + 20px)}
    .mx-tip{position:fixed;top:60px;right:14px;z-index:70;background:#161616;border:1px solid #2a2a2a;color:#ccc;font:12px 'DM Sans',sans-serif;padding:4px 9px;border-radius:6px;opacity:0;pointer-events:none;transition:opacity .15s}
    .mx-av:hover+.mx-tip{opacity:1}
    .mx-drawer{position:fixed;top:0;right:0;bottom:0;width:var(--mxw,560px);max-width:100vw;background:#0b0b0b;border-left:1px solid #262626;z-index:60;transform:translateX(100%);transition:transform .22s ease;display:flex;flex-direction:column}
    body.mx-docked{margin-right:var(--mxw,560px)!important;transition:margin-right .22s ease}
    .mx-grip{position:absolute;left:-4px;top:0;bottom:0;width:8px;cursor:col-resize;z-index:2}.mx-grip:hover,.mx-grip.on{background:rgba(126,226,168,.35)}
    @media(max-width:1399px){
      body.mx-docked .mx-av{right:20px}
      .mx-drawer{top:auto;left:0;width:auto;height:var(--mxh,42vh);border-left:0;border-top:1px solid #262626;transform:translateY(100%)}
      .mx-drawer.open{transform:none}
      body.mx-docked{margin-right:0!important;margin-bottom:var(--mxh,42vh)!important}
      .mx-grip{left:0;right:0;top:-4px;bottom:auto;width:auto;height:8px;cursor:row-resize}
    }
    .mx-drawer.open{transform:none}
    .mx-dh{display:flex;align-items:center;justify-content:space-between;padding:10px 14px;border-bottom:1px solid #262626;color:#F0EDE8;font-family:'Instrument Serif',Georgia,serif;font-size:20px}
    .mx-dh small{display:block;font:12px 'DM Sans',sans-serif;color:#8f8f8f}
    .mx-dh button{background:none;border:1px solid #333;color:#F0EDE8;border-radius:8px;width:32px;height:32px;cursor:pointer}
    .mx-drawer iframe{flex:1;border:0;width:100%;background:#0b0b0b}
    .mx-org{border-bottom:1px solid #222;background:#070707}
    .mx-oi{max-width:1800px;margin:0 auto;padding:0 24px;display:flex;align-items:flex-end;gap:4px}
    .mx-ot{font-family:'Instrument Serif',Georgia,serif;font-size:22px;color:#F0EDE8;margin-right:18px;padding:10px 0 8px}
    .mx-oi a{color:#8f8f8f;text-decoration:none;font-size:14px;padding:12px 14px 10px;border-bottom:2px solid transparent}
    .mx-oi a:hover{color:#F0EDE8}.mx-oi a.on{color:#F0EDE8;border-bottom-color:#7ee2a8}
    .mx-sample{font:600 10.5px 'DM Sans',sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#e0b83a;border:1px solid #5a4c17;background:#1a1607;border-radius:999px;padding:3px 10px;white-space:nowrap}.mx-nav a.mx-off{opacity:.45;cursor:default}.mx-nav a.mx-off:hover{background:none;color:#8f8f8f}.mx-chat{flex:1;display:flex;flex-direction:column;min-height:0;background:#0b0b0b;font:13px/1.55 ui-monospace,'SF Mono',Menlo,Consolas,monospace;color:#d6d3cd}.mx-log{flex:1;overflow:auto;padding:14px 16px 6px}.mx-log .u{background:#1d1d1d;color:#F0EDE8;border-radius:4px;padding:4px 10px;margin:12px 0 8px;white-space:pre-wrap}.mx-log .u:before{content:'> ';color:#8f8f8f}.mx-log .a{position:relative;padding-left:18px;white-space:pre-wrap;margin:0 0 6px}.mx-log .a:before{content:'●';position:absolute;left:0;top:0;color:#7ee2a8;font-size:11px}.mx-log .who{color:#8f8f8f;font-size:11.5px;margin:0 0 10px}.mx-in2{display:flex;align-items:center;gap:8px;margin:6px 12px 12px;border:1px solid #333;border-radius:6px;padding:7px 10px}.mx-in2 b{color:#8f8f8f;font-weight:400}.mx-in2 input{flex:1;background:none;border:0;outline:none;color:#F0EDE8;font:inherit;caret-color:#7ee2a8}.mx-hint{color:#5f5f5f;font-size:11px;margin:0 14px 10px}@media(max-width:1399px){body.mx-docked .mx-av{right:20px}}@media(max-width:760px){.mx-sample{order:3}}
    @media print{.mx-bar,.mx-drawer{display:none}}
    @media(max-width:760px){.mx-in{padding:10px 16px;gap:10px}.mx-nav{margin-left:0}}
  `});

  /* Sample conversation shown in the PM drawer (the real Command Center shows a live terminal here). */
  const CHAT = [["Studio Owner", "what's ready to commit?"], ["Program Manager", "Three changes are checked and ready:\n\u00b7 Product A 2.1: release notes and the settings fix (QA Analyst passed it)\n\u00b7 Product B 1.3: sign-in key config\n\u00b7 Tracker: board archive tab\nNothing is pushed until you say so."], ["Studio Owner", "commit all three"], ["Program Manager", "Committed Product A 2.1, Product B 1.3 and the Tracker board; nothing pushed.\nMarked Decision 1 done on the Dashboard."], ["Studio Owner", "what's next for me?"], ["Program Manager", "One urgent action: renew the Product B sign-in key before Thursday. The four steps are on the Dashboard under Actions 1; Product B - Engineer is ready to test as soon as you hand it the key."]];
  const CHAT_REPLY = "Got it. In the real Command Center I would route that to the right lead and confirm here when it is done. This is a demo with sample data, so nothing is sent.";
  function fakeChat() {
    const E = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
    const c = document.createElement('div'); c.className = 'mx-chat';
    const line = ([who, text]) => who === 'Studio Owner' ? `<div class="u">${E(text)}</div>` : `<div class="a">${E(text)}</div>`;
    c.innerHTML = '<div class="mx-log"><div class="who">Program Manager · sample session</div>' + CHAT.map(line).join('') + '</div>'
      + '<form class="mx-in2"><b>&gt;</b><input aria-label="Message the Program Manager" placeholder="Message the Program Manager" autocomplete="off"></form>'
      + '<div class="mx-hint">Demo with sample data: nothing you type is sent anywhere.</div>';
    const log = c.querySelector('.mx-log');
    c.querySelector('form').addEventListener('submit', ev => {
      ev.preventDefault(); const i = c.querySelector('input'); const t = i.value.trim(); if (!t) return;
      i.value = ''; log.insertAdjacentHTML('beforeend', line(['Studio Owner', t])); log.scrollTop = log.scrollHeight;
      setTimeout(() => { log.insertAdjacentHTML('beforeend', line(['Program Manager', CHAT_REPLY])); log.scrollTop = log.scrollHeight; }, 700);
    });
    setTimeout(() => { log.scrollTop = log.scrollHeight; }, 0);
    return c;
  }
  function bar() {
    if (document.querySelector('.mx-bar')) return;
    const here = location.pathname.split('/').pop() || 'index.html';
    const ORG = ['agent-roster.html', 'raci.html'];
    const on = ([l, h]) => h === here || (h === '/briefing' && /\/briefing-[^/]+\.html$/.test(here)) || (l === 'Organization' && ORG.includes(here));
    const b = document.createElement('div');
    b.className = 'mx-bar';
    b.innerHTML = '<div class="mx-in"><a class="mx-brand" href="index.html"><img src="moonshinerXwerks_dark.png" alt="MoonshinerXwerks"><span>Operations Command Center</span></a><b class="mx-sample">Sample data</b><nav class="mx-nav">'
      + NAV.map(n => n[1] ? `<a href="${n[1]}"${on(n) ? ' class="on"' : ''}>${n[0]}</a>` : `<a class="mx-off" aria-disabled="true" title="Not included in the sample">${n[0]}</a>`).join('') + '</nav></div>';
    document.body.prepend(b);
    if (ORG.includes(here)) {
      const o = document.createElement('div');
      o.className = 'mx-org';
      o.innerHTML = '<div class="mx-oi"><span class="mx-ot">Organization</span>'
        + [['Agent roster', ORG[0]], ['RACI', ORG[1]]].map(([l, h]) => `<a href="${h}"${h === here ? ' class="on"' : ''}>${l}</a>`).join('') + '</div>';
      b.after(o);
    }
    const d = document.createElement('div');
    d.className = 'mx-drawer';
    d.innerHTML = '<div class="mx-dh"><div>Program Manager<small>Sample conversation with invented data. Drag the edge to resize; ✕ to close.</small></div><button type="button" aria-label="Close">✕</button></div>';
    document.body.appendChild(d);
    const root = document.documentElement;
    try { const w = +localStorage.getItem('mxW'); if (w >= 360) root.style.setProperty('--mxw', w + 'px'); const h = +localStorage.getItem('mxH'); if (h >= 200) root.style.setProperty('--mxh', h + 'px'); } catch (e) {}
    const grip = document.createElement('div'); grip.className = 'mx-grip'; d.appendChild(grip);
    grip.addEventListener('mousedown', ev => {
      ev.preventDefault(); grip.classList.add('on');
      const f = d.querySelector('iframe'); if (f) f.style.pointerEvents = 'none';
      const bottom = window.innerWidth < 1400;
      const move = m => {
        if (bottom) { const h = Math.max(200, Math.min(window.innerHeight - 220, window.innerHeight - m.clientY)); root.style.setProperty('--mxh', h + 'px'); }
        else { const w = Math.max(360, Math.min(window.innerWidth - 480, window.innerWidth - m.clientX)); root.style.setProperty('--mxw', w + 'px'); }
      };
      const up = () => { grip.classList.remove('on'); if (f) f.style.pointerEvents = ''; document.removeEventListener('mousemove', move); document.removeEventListener('mouseup', up);
        try { const v = getComputedStyle(root); localStorage.setItem('mxW', parseInt(v.getPropertyValue('--mxw')) || ''); localStorage.setItem('mxH', parseInt(v.getPropertyValue('--mxh')) || ''); } catch (e) {} };
      document.addEventListener('mousemove', move); document.addEventListener('mouseup', up);
    });
    const open = () => { if (!d.querySelector('.mx-chat')) d.appendChild(fakeChat()); d.classList.add('open'); document.body.classList.add('mx-docked'); setTimeout(() => { const i = d.querySelector('.mx-chat input'); if (i) i.focus({ preventScroll: true }); }, 250); try { sessionStorage.setItem('mxChat', '1'); } catch (e) {} };
    const close = () => { d.classList.remove('open'); document.body.classList.remove('mx-docked'); try { sessionStorage.removeItem('mxChat'); } catch (e) {} };
    const av = document.createElement('button');
    av.className = 'mx-av'; av.type = 'button'; av.setAttribute('aria-label', 'Message the Program Manager');
    av.innerHTML = 'PM<i class="pd"></i>';
    const tip = document.createElement('div'); tip.className = 'mx-tip'; tip.textContent = 'Message the Program Manager';
    document.body.append(av, tip);
    av.onclick = () => d.classList.contains('open') ? close() : open();
    /* Open the PM chat with a reply already typed (from Dashboard item panels); the Studio Owner presses Enter to send it. */
    window.mxSendToPM = (text) => { open(); const i = d.querySelector('.mx-chat input'); i.value = text; setTimeout(() => { i.focus({ preventScroll: true }); i.setSelectionRange(text.length, text.length); }, 260); };
    new MutationObserver(() => av.classList.toggle('on', d.classList.contains('open'))).observe(d, { attributes: true, attributeFilter: ['class'] });
    const presence = () => { const sc = document.createElement('script'); sc.src = 'agents-data.js?' + Date.now();
      sc.onload = () => { const pm = ((window.AGENT_STATUS || {})['agents'] || []).find(a => a.name === 'Moonshinerxwerks Program Manager');
        av.classList.toggle('live', !!pm && pm.state !== 'stopped'); av.classList.toggle('busy', !!pm && pm.state === 'working');
        tip.textContent = 'Message the Program Manager' + (pm ? (pm.state === 'working' ? ' (working)' : pm.state === 'idle' ? ' (ready)' : ' (not running)') : ''); sc.remove(); };
      sc.onerror = () => sc.remove(); document.head.appendChild(sc); };
    presence(); setInterval(presence, 20000);
    d.querySelector('.mx-dh button').onclick = close;
    try { if (sessionStorage.getItem('mxChat') || location.hash === '#chat') open(); } catch (e) {}
  }
  if (document.body) bar(); else document.addEventListener('DOMContentLoaded', bar);
})();
