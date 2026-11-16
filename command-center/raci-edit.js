/*
 * Filename: raci-edit.js
 * App Name: moonshinerxwerks.com
 *
 * Created Date: 2026-11-16
 * Last Edited Date: 2026-11-16
 *
 * Copyright: © 2026 Moonshinerxwerks LLC. All rights reserved.
 *
 * Code Description: In-page RACI editor, copied from the real Command Center. "Edit RACI" turns the table editable: click a cell to cycle blank, R, A, C, I, A/R; click a name or description to retype it; add or remove work; add a group. Rows that break the one-Accountable rule are flagged live. In this sample, Save keeps the changes in the browser tab only.
 */
(function () {
  const CYCLE = ['', 'R', 'A', 'C', 'I', 'A/R'];
  const E = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  let rows = null, dirty = false;
  const css = document.createElement('style');
  css.textContent = `
    .re-bar{display:flex;gap:10px;align-items:center;flex-wrap:wrap;margin:0 0 14px}
    .re-btn{background:#1b222c;border:1px solid #2a313c;color:#e8e6e1;border-radius:8px;padding:7px 14px;font:inherit;font-size:13.5px;cursor:pointer}
    .re-btn:hover{border-color:#6b7a90}.re-btn.pri{background:#7ee2a8;color:#000;border-color:#7ee2a8;font-weight:600}
    .re-btn[disabled]{opacity:.5;cursor:default}
    .re-msg{font-size:13px;color:#9aa3ad}.re-msg.err{color:#ff7b72}.re-msg.ok{color:#7ee2a8}
    body.re-on tbody td:not(.act){cursor:pointer}body.re-on tbody td:not(.act):hover{background:rgba(126,226,168,.08)}
    body.re-on td.act b,body.re-on td.act span{outline:none;border-radius:4px;cursor:text}
    body.re-on td.act b:hover,body.re-on td.act span:hover,body.re-on td.act b:focus,body.re-on td.act span:focus{background:rgba(255,255,255,.06)}
    body.re-on td.act span:empty:before{content:'Add a description';color:#5a626d}
    tr.re-warn td.act{box-shadow:inset 3px 0 0 #e0a83a}tr.re-warn td.act b:after{content:' · needs exactly one A';color:#e0a83a;font-weight:500;font-size:12px}
    .re-del{float:right;background:none;border:0;color:#5a626d;cursor:pointer;font-size:14px;margin-left:8px}.re-del:hover{color:#ff7b72}
    tr.re-add td{padding:6px 12px!important}.re-add button,.re-addg{background:none;border:1px dashed #2a313c;color:#9aa3ad;border-radius:7px;padding:4px 10px;font:inherit;font-size:12.5px;cursor:pointer}
    .re-add button:hover,.re-addg:hover{color:#e8e6e1;border-color:#6b7a90}
    tr.grp td[contenteditable]{outline:none;cursor:text}`;
  document.head.appendChild(css);

  function groups() { const g = []; rows.forEach(r => { if (!g.includes(r.group)) g.push(r.group); }); return g; }
  function accOk(r) { return r.letters.filter(c => c === 'A' || c === 'A/R').length === 1; }
  function cell(c, i) { return `<td${i === 0 ? ' class="col-owner"' : ''} data-c="${i}">${c ? `<i class="k ${c.replace('/', '')}">${E(c)}</i>` : ''}</td>`; }

  function draw() {
    const tb = document.querySelector('tbody');
    let h = '';
    groups().forEach(g => {
      h += `<tr class="grp"><td colspan="${document.querySelectorAll('.card thead th').length}" contenteditable="true" data-g="${E(g)}">${E(g)}</td></tr>`;
      rows.forEach((r, ri) => {
        if (r.group !== g) return;
        h += `<tr data-r="${ri}" class="${accOk(r) ? '' : 're-warn'}"><td class="act"><button class="re-del" title="Remove this work" data-del="${ri}">✕</button><b contenteditable="true" data-f="work">${E(r.work)}</b><span contenteditable="true" data-f="desc">${E(r.desc)}</span></td>${r.letters.map(cell).join('')}</tr>`;
      });
      h += `<tr class="re-add"><td colspan="${document.querySelectorAll('.card thead th').length}"><button data-addto="${E(g)}">+ Add work to ${E(g)}</button></td></tr>`;
    });
    h += `<tr class="re-add"><td colspan="${document.querySelectorAll('.card thead th').length}"><button class="re-addg">+ Add a group</button></td></tr>`;
    tb.innerHTML = h;
    status();
  }

  function status(msg, kind) {
    const bad = rows ? rows.filter(r => !accOk(r)).length : 0;
    const m = document.querySelector('.re-msg');
    m.className = 're-msg' + (kind ? ' ' + kind : '');
    m.textContent = msg || (dirty ? 'Unsaved changes.' : 'No changes yet.') + (bad ? ` ${bad} row${bad > 1 ? 's' : ''} need exactly one A.` : '');
    document.querySelector('.re-save').disabled = !dirty;
  }
  function touch() { dirty = true; status(); }

  async function startEdit() {
    const r = { rows: JSON.parse(JSON.stringify(window.RACI_ROWS)) };
    rows = r.rows; dirty = false;
    document.body.classList.add('re-on');
    document.querySelector('.re-edit').hidden = true;
    document.querySelectorAll('.re-save,.re-cancel').forEach(b => b.hidden = false);
    draw();
  }
  async function save() {
    const bad = rows.filter(r => !accOk(r)).length;
    window.RACI_ROWS = JSON.parse(JSON.stringify(rows));
    dirty = false;
    document.body.classList.remove('re-on');
    document.querySelector('.re-edit').hidden = false;
    document.querySelectorAll('.re-save,.re-cancel').forEach(b => b.hidden = true);
    let h = '', g = null;
    rows.forEach(r => {
      if (r.group !== g) { g = r.group; h += `<tr class="grp"><td colspan="${document.querySelectorAll('.card thead th').length}">${E(g)}</td></tr>`; }
      h += `<tr class="${accOk(r) ? '' : 're-warn'}"><td class="act"><b>${E(r.work)}</b><span>${E(r.desc)}</span></td>${r.letters.map((c, i) => `<td${i === 0 ? ' class="col-owner"' : ''}>${c ? `<i class="k ${c.replace('/', '')}">${E(c)}</i>` : ''}</td>`).join('')}</tr>`;
    });
    document.querySelector('tbody').innerHTML = h;
    const m = document.querySelector('.re-msg');
    m.className = 're-msg ok';
    m.textContent = `Saved ${rows.length} rows in this tab (sample data; nothing is stored).` + (bad ? ` Note: ${bad} row${bad > 1 ? 's' : ''} still need exactly one A.` : '');
  }

  document.addEventListener('click', e => {
    if (!document.body.classList.contains('re-on')) return;
    const td = e.target.closest('tbody td[data-c]');
    if (td) {
      const ri = +td.parentElement.dataset.r, ci = +td.dataset.c, r = rows[ri];
      r.letters[ci] = CYCLE[(CYCLE.indexOf(r.letters[ci]) + 1) % CYCLE.length];
      td.outerHTML = cell(r.letters[ci], ci);
      document.querySelector(`tr[data-r="${ri}"]`).classList.toggle('re-warn', !accOk(r));
      touch(); return;
    }
    const del = e.target.closest('[data-del]');
    if (del) { const r = rows[+del.dataset.del]; if (confirm(`Remove "${r.work}" from the RACI?`)) { rows.splice(+del.dataset.del, 1); draw(); touch(); } return; }
    const add = e.target.closest('[data-addto]');
    if (add) {
      const g = add.dataset.addto, last = rows.map(r => r.group).lastIndexOf(g);
      rows.splice(last + 1, 0, { group: g, work: 'New work', desc: '', letters: Array(document.querySelectorAll('.card thead th').length - 1).fill('') });
      draw(); touch();
      const b = document.querySelector(`tr[data-r="${last + 1}"] b`); if (b) { b.focus(); document.execCommand('selectAll', false, null); }
      return;
    }
    if (e.target.closest('.re-addg')) {
      const name = prompt('Name of the new group:'); if (!name) return;
      rows.push({ group: name.trim(), work: 'New work', desc: '', letters: Array(document.querySelectorAll('.card thead th').length - 1).fill('') }); draw(); touch();
    }
  });
  document.addEventListener('input', e => {
    if (!document.body.classList.contains('re-on')) return;
    const f = e.target.closest('[data-f]');
    if (f) { rows[+f.closest('tr').dataset.r][f.dataset.f] = f.textContent.trim(); touch(); return; }
    const g = e.target.closest('[data-g]');
    if (g) { const old = g.dataset.g, nw = g.textContent.trim(); rows.forEach(r => { if (r.group === old) r.group = nw; }); g.dataset.g = nw; touch(); }
  });
  document.addEventListener('keydown', e => { if (e.key === 'Enter' && e.target.isContentEditable) { e.preventDefault(); e.target.blur(); } });
  window.addEventListener('beforeunload', e => { if (dirty) { e.preventDefault(); e.returnValue = ''; } });

  function bar() {
    const card = document.querySelector('.card'); if (!card || document.querySelector('.re-bar')) return;
    const b = document.createElement('div'); b.className = 're-bar';
    b.innerHTML = '<button class="re-btn re-edit">Edit RACI</button><button class="re-btn pri re-save" hidden disabled>Save changes</button><button class="re-btn re-cancel" hidden>Cancel</button><span class="re-msg"></span>';
    card.parentNode.insertBefore(b, card);
    b.querySelector('.re-edit').onclick = startEdit;
    b.querySelector('.re-save').onclick = save;
    b.querySelector('.re-cancel').onclick = () => { if (!dirty || confirm('Discard your changes?')) { dirty = false; location.reload(); } };
    let saved = null; try { saved = sessionStorage.getItem('reSaved'); sessionStorage.removeItem('reSaved'); } catch (e) {}
    const m = b.querySelector('.re-msg');
    if (saved) { m.className = 're-msg ok'; m.textContent = saved; } else { m.textContent = 'Click Edit RACI to change letters, rename or add work.'; }
    if (location.hash === '#edit') startEdit();
    if (location.hash === '#edit-warn') startEdit().then(() => { rows[1].letters[1] = 'A'; draw(); touch(); });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', bar); else bar();
})();
