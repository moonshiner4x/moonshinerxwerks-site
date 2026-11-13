/*
 * Filename: showcase-graphics.js
 * App Name: moonshinerXwerks website
 *
 * Created Date: 2026-11-12
 * Last Edited Date: 2026-11-12
 *
 * Copyright: © 2026 Moonshinerxwerks LLC. All rights reserved.
 *
 * Code Description: Sample product graphics (fictional data only) for internal tools on the Work page:
 * Sightline, Shop Sales Manager, Application Tracker. Rendered as HTML/SVG, scaled to container width.
 */

(function () {
  const css = `
  .g { container-type: inline-size; width: 100%; }
  .g-frame { font-size: clamp(6px, 1.08cqw, 15px); border-radius: 1.1em; overflow: hidden; border: 1px solid #2a2a2a; box-shadow: 0 2em 5em rgba(0,0,0,.55); font-family: 'DM Sans', system-ui, sans-serif; line-height: 1.35; }
  .g-chrome { display: flex; align-items: center; gap: .5em; padding: .7em 1em; background: #1d1d1d; border-bottom: 1px solid #2a2a2a; }
  .g-chrome i { width: .8em; height: .8em; border-radius: 50%; background: #3a3a3a; }
  .g-chrome span { margin-left: 1.2em; flex: 1; max-width: 26em; background: #111; color: #777; border-radius: .5em; padding: .3em .9em; font-size: .85em; }
  .g-cap { margin-top: .9em; font-size: .78rem; color: #8A8A8A; }
  .g svg text { font-family: 'DM Sans', system-ui, sans-serif; }

  /* Sightline — dark navy */
  .sm { --bg:#0b1220; --sf:#101929; --sm:#142035; --fg:#e8edf5; --mu:#8b97ab; --bd:#1c2739; --ac:#6c8cff; --gain:#34c08a; --loss:#f26b80; --warn:#f2b93b;
        background: var(--bg); color: var(--fg); display: grid; grid-template-columns: 13em 1fr; min-height: 40em; }
  .sm-side { background: var(--sf); border-right: 1px solid var(--bd); padding: 1.4em 1em; display: flex; flex-direction: column; gap: .3em; }
  .sm-logo { font-weight: 700; margin-bottom: 1.2em; padding-left: .6em; }
  .sm-side a { color: var(--mu); padding: .55em .7em; border-radius: .5em; font-size: .95em; }
  .sm-side a.on { background: var(--sm); color: var(--fg); }
  .sm-ro { margin-top: auto; font-size: .78em; color: var(--mu); border: 1px solid var(--bd); border-radius: .6em; padding: .6em .7em; }
  .sm-main { padding: 1.4em 1.6em; display: grid; gap: 1.1em; align-content: start; }
  .sm-top { display: flex; justify-content: space-between; align-items: baseline; }
  .sm-top h3 { font-size: 1.45em; font-weight: 600; }
  .sm-top span { color: var(--mu); font-size: .85em; }
  .sm-kpis { display: grid; grid-template-columns: repeat(4, 1fr); gap: .8em; }
  .sm-kpi { background: var(--sf); border: 1px solid var(--bd); border-radius: .8em; padding: .9em 1em; height: 6.2em; display: flex; flex-direction: column; justify-content: flex-start; }
  .sm-kpi small { color: var(--mu); font-size: .8em; }
  .sm-kpi b { font-size: 1.55em; font-weight: 600; margin-top: .2em; }
  .sm-kpi em { font-style: normal; font-size: .82em; }
  .up { color: var(--gain); } .dn { color: var(--loss); }
  .sm-row { display: grid; grid-template-columns: 1.7fr 1fr; gap: .9em; }
  .sm-card { background: var(--sf); border: 1px solid var(--bd); border-radius: .8em; padding: 1em 1.1em; }
  .sm-card h4 { font-size: .95em; font-weight: 600; margin-bottom: .6em; display: flex; justify-content: space-between; }
  .sm-card h4 span { color: var(--mu); font-weight: 400; font-size: .85em; }
  .sm-leg { display: flex; gap: 1.2em; font-size: .78em; color: var(--mu); margin-top: .4em; }
  .sm-leg i { display: inline-block; width: 1.2em; height: .25em; border-radius: 1em; vertical-align: middle; margin-right: .4em; }
  .sm-brief li { list-style: none; display: grid; grid-template-columns: 4em 1fr auto; gap: .6em; align-items: center; padding: .55em 0; border-top: 1px solid var(--bd); font-size: .88em; }
  .sm-brief li:first-child { border-top: 0; }
  .sm-brief b { font-weight: 600; }
  .sm-brief p { color: var(--mu); font-size: .92em; }
  .sm-tag { font-size: .78em; padding: .2em .6em; border-radius: 1em; background: rgba(108,140,255,.14); color: var(--ac); }
  .sm-acc { display: grid; grid-template-columns: 1.4fr 1fr 1fr 1fr; font-size: .86em; }
  .sm-acc div { padding: .55em 0; border-top: 1px solid var(--bd); }
  .sm-acc .h { color: var(--mu); border-top: 0; font-size: .9em; }
  .sm-acc .r { text-align: right; }

  /* Shop Sales Manager — light sage, dark bar */
  .ssm { --gr:#f2f3f1; --cd:#fff; --tr:#eef0ed; --ln:#dcdfdb; --ink:#1b1f1d; --mu:#5b625e; --bar:#1b2420; --bt:#d5dcd8; --ac:#2f6b4f; --ac2:#c98a3d;
         background: var(--gr); color: var(--ink); min-height: 40em; }
  .ssm-bar { background: var(--bar); color: var(--bt); display: flex; align-items: center; gap: 1.8em; padding: .9em 1.6em; font-size: .92em; }
  .ssm-bar b { color: #fff; font-weight: 600; margin-right: 1em; }
  .ssm-bar a.on { color: #fff; border-bottom: 2px solid #fff; padding-bottom: .2em; }
  .ssm-bar span { margin-left: auto; font-size: .82em; opacity: .75; }
  .ssm-main { padding: 1.4em 1.6em; display: grid; gap: 1em; }
  .ssm-kpis { display: grid; grid-template-columns: repeat(4, 1fr); gap: .8em; }
  .ssm-kpi { background: var(--cd); border: 1px solid var(--ln); border-radius: .7em; padding: .9em 1em; height: 6.2em; }
  .ssm-kpi small { color: var(--mu); font-size: .8em; }
  .ssm-kpi b { display: block; font-size: 1.55em; font-weight: 600; margin-top: .15em; }
  .ssm-kpi em { font-style: normal; font-size: .8em; color: var(--ac); }
  .ssm-row { display: grid; grid-template-columns: 1.5fr 1fr; gap: .9em; }
  .ssm-card { background: var(--cd); border: 1px solid var(--ln); border-radius: .7em; padding: 1em 1.1em; }
  .ssm-card h4 { font-size: .95em; font-weight: 600; margin-bottom: .7em; display: flex; justify-content: space-between; }
  .ssm-card h4 span { color: var(--mu); font-weight: 400; font-size: .85em; }
  .ssm-inv { display: grid; gap: .7em; }
  .ssm-it { display: grid; grid-template-columns: 1fr auto; gap: .25em .8em; font-size: .86em; }
  .ssm-it .trk { grid-column: 1 / -1; height: .55em; background: var(--tr); border-radius: 1em; position: relative; overflow: hidden; }
  .ssm-it .trk i { position: absolute; inset: 0 auto 0 0; border-radius: 1em; background: var(--ac); }
  .ssm-it .trk i.low { background: var(--ac2); }
  .ssm-it span { color: var(--mu); }
  .ssm-btn { margin-top: .9em; display: inline-block; font-size: .82em; padding: .45em .9em; border: 1px solid var(--ln); border-radius: .5em; }
  .ssm-posts { display: grid; grid-template-columns: repeat(3, 1fr); gap: .7em; }
  .ssm-post { border: 1px solid var(--ln); border-radius: .6em; overflow: hidden; font-size: .78em; }
  .ssm-post .ph { height: 5.5em; }
  .ssm-post p { padding: .5em .6em; color: var(--mu); }

  /* Application Tracker — light, blue accent */
  .apt { --gr:#f2f3f1; --sf:#fff; --sb:#f7f8f6; --tr:#eef0ed; --ln:#dcdfdb; --ink:#1b1f1d; --mu:#5b625e; --ac:#2f4f8a; --al:#e6ecf7; --ok:#2f7a4f;
         background: var(--gr); color: var(--ink); min-height: 40em; display: grid; grid-template-columns: 1fr 22em; }
  .apt-main { padding: 1.3em 1.5em; display: grid; gap: 1em; align-content: start; }
  .apt-top { display: flex; align-items: center; gap: 1.4em; font-size: .92em; }
  .apt-top b { font-size: 1.15em; font-weight: 600; margin-right: .6em; }
  .apt-top a { color: var(--mu); } .apt-top a.on { color: var(--ac); font-weight: 600; }
  .apt-top .add { margin-left: auto; background: var(--ac); color: #fff; padding: .45em .9em; border-radius: .5em; font-size: .9em; }
  .apt-stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: .7em; }
  .apt-stat { background: var(--sf); border: 1px solid var(--ln); border-radius: .7em; padding: .8em .9em; height: 5.6em; }
  .apt-stat small { color: var(--mu); font-size: .8em; }
  .apt-stat b { display: block; font-size: 1.5em; font-weight: 600; }
  .apt-cols { display: grid; grid-template-columns: repeat(4, 1fr); gap: .7em; }
  .apt-col { background: var(--tr); border-radius: .7em; padding: .7em; display: grid; gap: .55em; align-content: start; min-height: 22em; }
  .apt-col h5 { font-size: .8em; color: var(--mu); font-weight: 600; text-transform: uppercase; letter-spacing: .06em; display: flex; justify-content: space-between; }
  .apt-card { background: var(--sf); border: 1px solid var(--ln); border-radius: .6em; padding: .65em .7em; font-size: .82em; }
  .apt-card b { display: block; font-weight: 600; font-size: 1.05em; }
  .apt-card span { color: var(--mu); }
  .apt-card .t { display: inline-block; margin-top: .4em; font-size: .85em; padding: .15em .5em; border-radius: 1em; background: var(--al); color: var(--ac); }
  .apt-card.sel { border-color: var(--ac); box-shadow: 0 0 0 2px var(--al); }
  .apt-side { background: var(--sf); border-left: 1px solid var(--ln); padding: 1.3em 1.2em; display: grid; gap: .9em; align-content: start; font-size: .9em; }
  .apt-side h4 { font-size: 1.15em; font-weight: 600; }
  .apt-side .sub { color: var(--mu); margin-top: -.6em; }
  .apt-sec { border: 1px solid var(--ln); border-radius: .7em; padding: .8em .9em; background: var(--sb); }
  .apt-sec h6 { font-size: .78em; text-transform: uppercase; letter-spacing: .08em; color: var(--mu); margin-bottom: .5em; font-weight: 600; }
  .apt-chk { display: flex; justify-content: space-between; padding: .25em 0; }
  .apt-chk i { font-style: normal; color: var(--ok); font-weight: 600; }
  .apt-meter { height: .55em; background: var(--tr); border-radius: 1em; margin: .35em 0 .2em; overflow: hidden; }
  .apt-meter i { display: block; height: 100%; background: var(--ac); border-radius: 1em; }
  .apt-go { text-align: center; background: var(--ac); color: #fff; border-radius: .6em; padding: .7em; font-weight: 600; }
  `;
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  const frame = (url, body, cap) =>
    '<div class="g"><div class="g-frame"><div class="g-chrome"><i></i><i></i><i></i><span>' + url + '</span></div>' + body + '</div>' +
    '<p class="g-cap">Illustrative graphic · fictional sample data</p></div>';

  /** Line chart path from values, scaled into a w×h box. */
  const path = (vals, w, h, min, max) => vals.map((v, i) =>
    (i ? 'L' : 'M') + (i * w / (vals.length - 1)).toFixed(1) + ' ' + (h - (v - min) / (max - min) * h).toFixed(1)).join(' ');

  function stock() {
    const port = [100, 101.2, 100.6, 102.4, 103.9, 103.1, 105.2, 106.8, 106.1, 107.9, 109.4, 108.7, 110.6, 112.1, 111.4, 113.2, 114.8, 114.1, 116.0, 117.3];
    const bench = [100, 100.8, 100.4, 101.5, 102.3, 101.9, 103.0, 104.1, 103.6, 104.7, 105.6, 105.0, 106.1, 107.0, 106.5, 107.4, 108.3, 107.9, 109.0, 109.8];
    const W = 600, H = 170;
    const grid = [0, 1, 2, 3].map(i => '<line x1="0" x2="' + W + '" y1="' + (i * H / 3) + '" y2="' + (i * H / 3) + '" stroke="#1c2739"/>').join('');
    const chart = '<svg viewBox="0 0 ' + W + ' ' + H + '" width="100%" preserveAspectRatio="none" style="display:block;height:12em">' + grid +
      '<path d="' + path(port, W, H, 98, 119) + ' L' + W + ' ' + H + ' L0 ' + H + 'Z" fill="rgba(108,140,255,.12)"/>' +
      '<path d="' + path(bench, W, H, 98, 119) + '" fill="none" stroke="#8b97ab" stroke-width="2" stroke-dasharray="5 5" vector-effect="non-scaling-stroke"/>' +
      '<path d="' + path(port, W, H, 98, 119) + '" fill="none" stroke="#6c8cff" stroke-width="2.5" vector-effect="non-scaling-stroke"/></svg>';
    const body = '<div class="sm">' +
      '<nav class="sm-side"><div class="sm-logo">Sightline</div><a class="on">Overview</a><a>Accounts</a><a>Trade journal</a><a>Risk</a><a>Nightly scan</a><a>Taxes</a>' +
        '<div class="sm-ro">Read-only · never places orders</div></nav>' +
      '<div class="sm-main">' +
        '<div class="sm-top"><h3>Overview</h3><span>All accounts · Updated 4:02 PM</span></div>' +
        '<div class="sm-kpis">' +
          '<div class="sm-kpi"><small>Total value</small><b>$148,320</b><em class="up">+$612 today</em></div>' +
          '<div class="sm-kpi"><small>Return YTD (net of deposits)</small><b class="up">+17.3%</b><em>Benchmark +9.8%</em></div>' +
          '<div class="sm-kpi"><small>Largest position</small><b>11.4%</b><em style="color:var(--warn)">Near 12% limit</em></div>' +
          '<div class="sm-kpi"><small>Cash</small><b>8.2%</b><em style="color:var(--mu)">Across 3 accounts</em></div>' +
        '</div>' +
        '<div class="sm-row">' +
          '<div class="sm-card"><h4>Portfolio vs benchmark <span>YTD</span></h4>' + chart +
            '<div class="sm-leg"><span><i style="background:#6c8cff"></i>Portfolio</span><span><i style="background:#8b97ab"></i>Benchmark</span></div></div>' +
          '<div class="sm-card sm-brief"><h4>Morning briefing <span>Rules-based</span></h4><ul>' +
            '<li><b>ACME</b><p>Pulled back to its 50-day average; volume steady.</p><span class="sm-tag">Watch</span></li>' +
            '<li><b>NRTH</b><p>Hit its trailing exit rule overnight.</p><span class="sm-tag" style="background:rgba(242,107,128,.14);color:var(--loss)">Exit rule</span></li>' +
            '<li><b>BLUF</b><p>New 3-month high on above-average volume.</p><span class="sm-tag">Watch</span></li>' +
            '<li><b>CDRX</b><p>Earnings in 4 days — outside holding window.</p><span class="sm-tag" style="background:rgba(242,185,59,.14);color:var(--warn)">Skip</span></li>' +
          '</ul></div>' +
        '</div>' +
        '<div class="sm-card"><h4>Accounts <span>Broker sync + CSV import</span></h4><div class="sm-acc">' +
          '<div class="h">Account</div><div class="h r">Value</div><div class="h r">Today</div><div class="h r">YTD</div>' +
          '<div>Brokerage ••01</div><div class="r">$62,140</div><div class="r up">+0.6%</div><div class="r up">+19.1%</div>' +
          '<div>Roth IRA ••02</div><div class="r">$51,880</div><div class="r up">+0.3%</div><div class="r up">+15.6%</div>' +
          '<div>Traditional IRA ••03</div><div class="r">$34,300</div><div class="r dn">−0.1%</div><div class="r up">+16.4%</div>' +
        '</div></div>' +
      '</div></div>';
    return frame('localhost · sightline', body);
  }

  function ssm() {
    const months = ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'];
    const vals = [96, 31, 28, 37, 42, 55, 49, 38, 41, 47, 58, 81];
    const prev = [84, 27, 25, 30, 36, 44, 46, 35, 37, 40, 51, 72];
    const W = 600, H = 190, bw = W / 12;
    const bars = vals.map((v, i) => {
      const h = v / 100 * (H - 22), ph = prev[i] / 100 * (H - 22);
      return '<rect x="' + (i * bw + bw * .18) + '" y="' + (H - 22 - ph) + '" width="' + bw * .3 + '" height="' + ph + '" rx="3" fill="#d5dcd8"/>' +
        '<rect x="' + (i * bw + bw * .5) + '" y="' + (H - 22 - h) + '" width="' + bw * .3 + '" height="' + h + '" rx="3" fill="#2f6b4f"/>' +
        '<text x="' + (i * bw + bw / 2) + '" y="' + (H - 6) + '" font-size="11" fill="#5b625e" text-anchor="middle">' + months[i] + '</text>';
    }).join('');
    const chart = '<svg viewBox="0 0 ' + W + ' ' + H + '" width="100%" style="display:block">' + bars + '</svg>';
    const inv = [['Fly-tying tool station', 4, 12, true], ['Leather fly wallet', 14, 16, false], ['Glue & resin station', 3, 8, true], ['Engraved flask', 9, 10, false]]
      .map(([n, have, target, low]) => '<div class="ssm-it"><b style="font-weight:500">' + n + '</b><span>' + have + ' / ' + target + '</span><div class="trk"><i class="' + (low ? 'low' : '') + '" style="width:' + (have / target * 100) + '%"></i></div></div>').join('');
    const body = '<div class="ssm">' +
      '<div class="ssm-bar"><b>Shop Sales Manager</b><a class="on">Dashboard</a><a>Orders</a><a>Inventory</a><a>Pricing</a><a>Reviews</a><a>Social</a><span>Synced from Etsy · read-only</span></div>' +
      '<div class="ssm-main">' +
        '<div class="ssm-kpis">' +
          '<div class="ssm-kpi"><small>Orders · last 30 days</small><b>58</b><em>+14% vs last year</em></div>' +
          '<div class="ssm-kpi"><small>Average order</small><b>$64</b><em>+$3 vs last year</em></div>' +
          '<div class="ssm-kpi"><small>Repeat buyers</small><b>21%</b><em>+2 pts</em></div>' +
          '<div class="ssm-kpi"><small>Etsy fees · share of sales</small><b>9.4%</b><em style="color:var(--mu)">Fee ledger →</em></div>' +
        '</div>' +
        '<div class="ssm-row">' +
          '<div class="ssm-card"><h4>Orders by month <span><b style="color:#2f6b4f">■</b> This year &nbsp; <b style="color:#c4ccc7">■</b> Last year</span></h4>' + chart + '</div>' +
          '<div class="ssm-card"><h4>Build next <span>Seasonal targets · holiday</span></h4><div class="ssm-inv">' + inv + '</div><span class="ssm-btn">Print build list</span></div>' +
        '</div>' +
        '<div class="ssm-card"><h4>Scheduled posts <span>Instagram · locked to shop account</span></h4><div class="ssm-posts">' +
          '<div class="ssm-post"><div class="ph" style="background:linear-gradient(135deg,#8a5a3b,#c79a6b)"></div><p>Tue 9:00 AM · Tool stations are back in stock…</p></div>' +
          '<div class="ssm-post"><div class="ph" style="background:linear-gradient(135deg,#c9a77c,#ead7b8)"></div><p>Thu 6:30 PM · Behind the bench: engraving a batch of flasks…</p></div>' +
          '<div class="ssm-post"><div class="ph" style="background:linear-gradient(135deg,#6b3f2a,#a8704c)"></div><p>Sat 10:00 AM · Gift guide for anglers…</p></div>' +
        '</div></div>' +
      '</div></div>';
    return frame('localhost · shop-sales-manager', body);
  }

  function apt() {
    const card = (co, role, tag, sel) => '<div class="apt-card' + (sel ? ' sel' : '') + '"><b>' + co + '</b><span>' + role + '</span>' + (tag ? '<br><span class="t">' + tag + '</span>' : '') + '</div>';
    const body = '<div class="apt"><div class="apt-main">' +
      '<div class="apt-top"><b>Application Tracker</b><a class="on">Tracker</a><a>Postings</a><a>Companies</a><a>Insights</a><a>Profile</a><span class="add">+ Add posting</span></div>' +
      '<div class="apt-stats">' +
        '<div class="apt-stat"><small>Active applications</small><b>14</b></div>' +
        '<div class="apt-stat"><small>Response rate</small><b>36%</b></div>' +
        '<div class="apt-stat"><small>Interviews this month</small><b>4</b></div>' +
        '<div class="apt-stat"><small>Packages ready to send</small><b>2</b></div>' +
      '</div>' +
      '<div class="apt-cols">' +
        '<div class="apt-col"><h5>Ready <span>3</span></h5>' + card('Northwind Labs', 'Senior Product Designer', 'Package ready', true) + card('Brightline Health', 'Product Designer, Mobile', 'Package ready') + card('Juniper Studio', 'Design Lead', 'Drafting') + '</div>' +
        '<div class="apt-col"><h5>Applied <span>6</span></h5>' + card('Cedar & Co.', 'Senior UX Designer', 'Day 6') + card('Atlas Mobility', 'Product Designer', 'Day 11') + card('Harbor Analytics', 'Staff Designer', 'Day 13') + '</div>' +
        '<div class="apt-col"><h5>Interview <span>3</span></h5>' + card('Summit Outdoor', 'Senior Product Designer', 'Panel Thu') + card('Lumen Finance', 'Product Design Lead', 'Recruiter call') + '</div>' +
        '<div class="apt-col"><h5>Offer <span>1</span></h5>' + card('Ridgeway Labs', 'Principal Designer', 'Respond by Fri') + '</div>' +
      '</div></div>' +
      '<aside class="apt-side"><h4>Northwind Labs</h4><p class="sub">Senior Product Designer · Remote</p>' +
        '<div class="apt-sec"><h6>Fit check</h6><div class="apt-chk"><span>Must-haves met</span><i>5 / 5</i></div>' +
          '<div class="apt-chk"><span>Preferred with evidence</span><b>78%</b></div><div class="apt-meter"><i style="width:78%"></i></div><span style="color:var(--mu);font-size:.85em">Threshold 70%</span></div>' +
        '<div class="apt-sec"><h6>Package</h6><div class="apt-chk"><span>Tailored resume</span><i>✓</i></div><div class="apt-chk"><span>Cover letter</span><i>✓</i></div><div class="apt-chk"><span>Achievements cited</span><i>6</i></div></div>' +
        '<div class="apt-sec"><h6>Rule checks</h6><div class="apt-chk"><span>Hard rules passed</span><i>12 / 12</i></div><div class="apt-chk"><span>Facts match profile</span><i>✓</i></div></div>' +
        '<div class="apt-go">Mark as sent</div>' +
      '</aside></div>';
    return frame('localhost · application-tracker', body);
  }

  window.GRAPHICS = { stock: stock, ssm: ssm, apt: apt };
})();
