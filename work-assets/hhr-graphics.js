/*
 * Filename: hhr-graphics.js
 * App Name: moonshinerXwerks website
 *
 * Created Date: 2026-11-12
 * Last Edited Date: 2026-11-12
 *
 * Copyright: © 2026 Moonshinerxwerks LLC. All rights reserved.
 *
 * Code Description: Sample screens (fictional venues and data) of the Happy Hour Radar Venue Dashboard and
 * admin console, plus the support-request flow diagram. Elements marked data-hl are reel highlight targets.
 */

(function () {
  const css = `
  .hh { --bg:#1A1A1A; --sf:#222; --cd:#2A2A2A; --bd:#333; --tl:#2BA5B5; --gd:#D4A843; --am:#E6A817; --fg:#f2f2f2; --mu:rgba(255,255,255,.55);
        background: var(--bg); color: var(--fg); display: grid; grid-template-columns: 15em 1fr; height: 49.6em; overflow: hidden; }
  .hh-side { background: var(--bg); border-right: 1px solid var(--bd); padding: 1.3em .9em; display: flex; flex-direction: column; gap: .25em; }
  .hh-logo { display: flex; align-items: center; gap: .6em; font-weight: 700; font-size: .95em; margin-bottom: 1.2em; padding-left: .4em; }
  .hh-logo i { width: 1.9em; height: 1.9em; border-radius: .5em; background: linear-gradient(135deg, var(--gd), var(--am)); display: grid; place-items: center; font-style: normal; color: #1a1a1a; font-size: .8em; font-weight: 800; }
  .hh-side small { color: var(--mu); font-size: .7em; letter-spacing: .1em; text-transform: uppercase; margin: .9em 0 .3em .6em; }
  .hh-side a { color: var(--mu); padding: .5em .7em; border-radius: .5em; font-size: .9em; display: flex; justify-content: space-between; }
  .hh-side a.on { background: rgba(43,165,181,.12); color: var(--tl); font-weight: 500; }
  .hh-side a b { font-weight: 600; font-size: .8em; background: var(--am); color: #1a1a1a; border-radius: 1em; padding: 0 .5em; }
  .hh-main { padding: 1.4em 1.6em; display: grid; gap: 1em; align-content: start; overflow: hidden; }
  .hh-head { display: flex; justify-content: space-between; align-items: center; }
  .hh-head h3 { font-size: 1.4em; font-weight: 600; }
  .hh-head p { color: var(--mu); font-size: .85em; }
  .hh-btn { background: var(--tl); color: #0d1f22; font-weight: 600; font-size: .82em; padding: .5em .9em; border-radius: .5em; }
  .hh-btn.ghost { background: transparent; color: var(--fg); border: 1px solid var(--bd); font-weight: 500; }
  .hh-card { background: var(--cd); border: 1px solid var(--bd); border-radius: .8em; padding: 1em 1.1em; }
  .hh-card h4 { font-size: .9em; font-weight: 600; margin-bottom: .7em; display: flex; justify-content: space-between; }
  .hh-card h4 span { color: var(--mu); font-weight: 400; font-size: .9em; }
  .hh-pills { display: grid; grid-template-columns: repeat(6, 1fr); gap: .7em; }
  .hh-pill { background: var(--cd); border: 1px solid var(--bd); border-radius: .7em; padding: .8em .9em; height: 5.2em; }
  .hh-pill small { color: var(--mu); font-size: .76em; }
  .hh-pill b { display: block; font-size: 1.45em; font-weight: 600; margin-top: .1em; }
  .hh-2 { display: grid; grid-template-columns: 1fr 1fr; gap: .9em; }
  .hh-li { display: flex; justify-content: space-between; gap: .8em; padding: .55em 0; border-top: 1px solid var(--bd); font-size: .85em; }
  .hh-li:first-of-type { border-top: 0; }
  .hh-li span { color: var(--mu); }
  .hh-tag { font-size: .74em; padding: .15em .55em; border-radius: 1em; background: rgba(43,165,181,.15); color: var(--tl); white-space: nowrap; }
  .hh-tag.gd { background: rgba(212,168,67,.16); color: var(--gd); }
  .hh-tag.rd { background: rgba(240,112,128,.15); color: #f07080; }
  .hh-tag.mu { background: rgba(255,255,255,.08); color: var(--mu); }
  .hh-stars { color: var(--am); letter-spacing: .05em; }
  .hh-week { display: grid; grid-template-columns: repeat(7, 1fr); gap: .5em; }
  .hh-day { background: var(--sf); border: 1px solid var(--bd); border-radius: .6em; padding: .6em; display: grid; gap: .45em; align-content: start; min-height: 21em; }
  .hh-day h5 { font-size: .78em; color: var(--mu); font-weight: 600; text-transform: uppercase; letter-spacing: .06em; }
  .hh-deal { background: var(--cd); border-left: 3px solid var(--gd); border-radius: .4em; padding: .45em .5em; font-size: .72em; }
  .hh-deal b { display: block; font-weight: 600; }
  .hh-deal span { color: var(--mu); }
  .hh-deal.loc { border-left-color: var(--tl); }
  .hh-notif { background: rgba(240,240,240,.92); color: #1a1a1a; border-radius: 1.1em; padding: .8em .9em; display: grid; grid-template-columns: 2.4em 1fr; gap: .7em; align-items: center; font-size: .82em; box-shadow: 0 1em 2em rgba(0,0,0,.4); }
  .hh-notif i { width: 2.4em; height: 2.4em; border-radius: .6em; background: linear-gradient(135deg, var(--gd), var(--am)); display: grid; place-items: center; font-style: normal; font-weight: 800; font-size: .8em; }
  .hh-notif b { display: block; }
  .hh-phone { background: #0d0d0d; border: 1px solid var(--bd); border-radius: 1.6em; padding: 1.2em .9em; display: grid; gap: .7em; align-content: start; height: 100%; }
  .hh-phone p { text-align: center; color: var(--mu); font-size: .75em; }
  .hh-field { background: var(--sf); border: 1px solid var(--bd); border-radius: .5em; padding: .6em .7em; font-size: .82em; color: var(--mu); }
  .hh-field b { color: var(--fg); font-weight: 500; }
  .hh-seg { display: inline-flex; border: 1px solid var(--bd); border-radius: .5em; overflow: hidden; font-size: .8em; }
  .hh-seg span { padding: .35em .8em; color: var(--mu); }
  .hh-seg span.on { background: rgba(43,165,181,.15); color: var(--tl); }
  .hh-plans { display: grid; grid-template-columns: repeat(3, 1fr); gap: .9em; }
  .hh-plan { background: var(--cd); border: 1px solid var(--bd); border-radius: .8em; padding: 1.1em; display: grid; gap: .5em; align-content: start; }
  .hh-plan.hi { border-color: var(--gd); box-shadow: 0 0 0 1px var(--gd); }
  .hh-plan h5 { font-size: .95em; font-weight: 600; }
  .hh-plan .pr { font-size: 1.8em; font-weight: 700; }
  .hh-plan .pr small { font-size: .45em; color: var(--mu); font-weight: 400; }
  .hh-plan li { list-style: none; font-size: .8em; color: var(--mu); }
  .hh-plan li::before { content: "✓ "; color: var(--tl); }
  .hh-trk { height: .55em; background: var(--sf); border-radius: 1em; overflow: hidden; }
  .hh-trk i { display: block; height: 100%; background: linear-gradient(90deg, var(--gd), var(--am)); border-radius: 1em; }
  .hh-tabs { display: flex; gap: .4em; border-bottom: 1px solid var(--bd); }
  .hh-tabs span { font-size: .84em; color: var(--mu); padding: .5em .8em; }
  .hh-tabs span.on { color: var(--tl); border-bottom: 2px solid var(--tl); }
  .hh-tbl { display: grid; font-size: .82em; }
  .hh-tbl > div { display: grid; align-items: center; gap: .8em; padding: .6em .2em; border-top: 1px solid var(--bd); }
  .hh-tbl > div.h { color: var(--mu); border-top: 0; font-size: .9em; }
  .hh-kpis { display: grid; grid-template-columns: repeat(4, 1fr); gap: .7em; }
  .hh-kan { display: grid; grid-template-columns: repeat(5, 1fr); gap: .6em; }
  .hh-col { background: var(--sf); border: 1px solid var(--bd); border-radius: .6em; padding: .6em; display: grid; gap: .5em; align-content: start; min-height: 25em; }
  .hh-col h5 { font-size: .74em; color: var(--mu); text-transform: uppercase; letter-spacing: .06em; display: flex; justify-content: space-between; }
  .hh-k { background: var(--cd); border: 1px solid var(--bd); border-radius: .5em; padding: .55em .6em; font-size: .74em; display: grid; gap: .2em; }
  .hh-k b { font-weight: 600; font-size: 1.05em; }
  .hh-k span { color: var(--mu); }
  .hh-k em { font-style: normal; color: var(--gd); font-weight: 600; }

  /* Support flow diagram */
  .flow { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 0; position: relative; }
  .flow-step { position: relative; padding: 0 18px; display: flex; flex-direction: column; gap: 10px; }
  .flow-step:not(:last-child)::after { content: ""; position: absolute; top: 31px; right: -8px; width: 16px; height: 2px; background: #333; }
  .flow-ic { width: 64px; height: 64px; border-radius: 18px; border: 1px solid #333; background: #141414; display: grid; place-items: center; font-size: 1.6rem; transition: all .5s; }
  .flow-step.on .flow-ic { border-color: var(--c); box-shadow: 0 0 0 4px color-mix(in srgb, var(--c) 18%, transparent), 0 0 30px color-mix(in srgb, var(--c) 35%, transparent); }
  .flow-step small { font-size: .7rem; letter-spacing: .14em; text-transform: uppercase; color: #8A8A8A; }
  .flow-step h5 { font-family: var(--font-display); font-weight: 400; font-size: 1.45rem; line-height: 1.15; }
  .flow-step p { color: #cfcbc5; font-size: .9rem; }
  .flow-step .who { font-size: .72rem; padding: 3px 10px; border-radius: 100px; border: 1px solid #333; color: #8A8A8A; align-self: flex-start; }
  .flow-step .who.ai { color: var(--c); border-color: color-mix(in srgb, var(--c) 45%, transparent); background: color-mix(in srgb, var(--c) 10%, transparent); }
  .flow-bar { height: 2px; background: #222; margin: 0 18px 26px; position: relative; overflow: hidden; border-radius: 2px; }
  .flow-bar i { position: absolute; inset: 0 auto 0 0; width: 20%; background: var(--c); transition: width .6s ease; }
  @media (max-width: 1100px) { .flow { grid-template-columns: 1fr 1fr; gap: 28px 0; } .flow-step::after { display: none; } }
  @media (max-width: 700px) { .flow { grid-template-columns: 1fr; } }
  `;
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  /** Browser frame filling a fixed 16:9 slide (no caption; the reel adds one). */
  const frame = (url, body) => '<div class="g"><div class="g-frame"><div class="g-chrome"><i></i><i></i><i></i><span>' + url + '</span></div>' + body + '</div></div>';

  const VENUE_NAV = ['Overview', 'Deals', 'Announcements', 'Reviews', 'Visits', 'Subscription', 'Venue Owner Guide'];
  const venueShell = (active, main) => frame('happyhourradar.app · venue portal',
    '<div class="hh"><nav class="hh-side"><div class="hh-logo"><i>HH</i>Venue Portal</div><small>Copper Fox Taproom</small>' +
      VENUE_NAV.map(n => '<a class="' + (n === active ? 'on' : '') + '">' + n + '</a>').join('') +
    '</nav><div class="hh-main">' + main + '</div></div>');

  const ADMIN_NAV = [['Venue management', ['Venues', 'Claims', 'Closures', 'Requests', 'Markets']], ['Customer service', ['App users', 'Submissions']], ['Billing', ['Groups', 'Billing']], ['Sales', ['CRM']]];
  const adminShell = (active, badge, main) => frame('happyhourradar.app · admin console',
    '<div class="hh"><nav class="hh-side"><div class="hh-logo"><i>HH</i>Admin Console</div>' +
      ADMIN_NAV.map(([sec, items]) => '<small>' + sec + '</small>' + items.map(n => '<a class="' + (n === active ? 'on' : '') + '">' + n + (badge[n] ? '<b>' + badge[n] + '</b>' : '') + '</a>').join('')).join('') +
    '</nav><div class="hh-main">' + main + '</div></div>');

  const G = window.GRAPHICS = window.GRAPHICS || {};

  G.hhrOverview = () => venueShell('Overview',
    '<div class="hh-head"><div><h3>Good evening, Copper Fox</h3><p>Here’s how your venue looks in the app today</p></div><span class="hh-btn">+ Add deal</span></div>' +
    '<div class="hh-pills" data-hl="pills">' +
      [['Deals', '9'], ['Announcements', '2'], ['Avg rating', '4.6'], ['Reviews', '38'], ['Favorites', '214'], ['Visits · 7 days', '126']].map(([l, v]) => '<div class="hh-pill"><small>' + l + '</small><b>' + v + '</b></div>').join('') +
    '</div>' +
    '<div class="hh-2">' +
      '<div class="hh-card"><h4>Today’s deals <span>Thursday</span></h4>' +
        '<div class="hh-li"><b style="font-weight:500">$5 house pints</b><span>3–6 PM</span></div>' +
        '<div class="hh-li"><b style="font-weight:500">Half-price flatbreads</b><span>3–6 PM</span></div>' +
        '<div class="hh-li"><b style="font-weight:500">$2 off local cider</b><span class="hh-tag">Locals only</span></div>' +
        '<div class="hh-li"><b style="font-weight:500">Trivia night specials</b><span>8–10 PM</span></div></div>' +
      '<div class="hh-card"><h4>Recent reviews <span>4.6 average</span></h4>' +
        '<div class="hh-li"><span class="hh-stars">★★★★★</span><span>“Best patio for after work.”</span></div>' +
        '<div class="hh-li"><span class="hh-stars">★★★★☆</span><span>“Happy hour pints are a steal.”</span></div>' +
        '<div class="hh-li"><span class="hh-stars">★★★★★</span><span>“Trivia was packed — fun crowd.”</span></div>' +
        '<div class="hh-li"><span class="hh-stars">★★★★☆</span><span>“Flatbread deal is worth it.”</span></div></div>' +
    '</div>');

  G.hhrDeals = () => {
    const days = { Mon: [['$5 house pints', '3–6 PM']], Tue: [['$5 house pints', '3–6 PM'], ['Taco Tuesday', '4–8 PM']], Wed: [['$5 house pints', '3–6 PM'], ['$2 off local cider', 'All day', 1]],
      Thu: [['$5 house pints', '3–6 PM'], ['Half-price flatbreads', '3–6 PM'], ['Trivia specials', '8–10 PM']], Fri: [['$6 well drinks', '3–5 PM']], Sat: [['Brunch mimosas', '10 AM–1 PM']], Sun: [['Industry night', '9 PM–close', 1]] };
    return venueShell('Deals',
      '<div class="hh-head"><div><h3>Deals</h3><p>Repeats every week until you set an end date</p></div><span class="hh-btn">+ Add deal</span></div>' +
      '<div class="hh-week" data-hl="week">' + Object.entries(days).map(([d, list]) => '<div class="hh-day"><h5>' + d + '</h5>' +
        list.map(([n, t, loc]) => '<div class="hh-deal' + (loc ? ' loc' : '') + '"><b>' + n + '</b><span>' + t + '</span>' + (loc ? '<br><span class="hh-tag" style="margin-top:.3em;display:inline-block">Locals only</span>' : '') + '</div>').join('') + '</div>').join('') + '</div>');
  };

  G.hhrAnnounce = () => venueShell('Announcements',
    '<div class="hh-head"><div><h3>Announcements</h3><p>Followers get a push notification</p></div><span class="hh-seg"><span class="on">List</span><span>Calendar</span></span></div>' +
    '<div style="display:grid;grid-template-columns:1.4fr 1fr;gap:.9em">' +
      '<div class="hh-card"><h4>New announcement</h4>' +
        '<div class="hh-field">Title<br><b>Live music on the patio tonight</b></div><div style="height:.6em"></div>' +
        '<div class="hh-field">Repeats<br><b>Every Friday · 6–9 PM</b></div><div style="height:.6em"></div>' +
        '<div style="display:flex;gap:.5em"><span class="hh-btn">Post now</span><span class="hh-btn ghost">Schedule</span></div>' +
        '<div style="height:1em"></div><h4>Scheduled <span>3</span></h4>' +
        '<div class="hh-li"><b style="font-weight:500">Live music on the patio</b><span class="hh-tag">Recurring · Fri</span></div>' +
        '<div class="hh-li"><b style="font-weight:500">New winter seasonal on tap</b><span class="hh-tag gd">One-time</span></div>' +
        '<div class="hh-li"><b style="font-weight:500">Trivia — first Thursday</b><span class="hh-tag">Monthly</span></div></div>' +
      '<div class="hh-phone" data-hl="push"><p>Follower’s phone</p>' +
        '<div class="hh-notif"><i>HH</i><div><b>Copper Fox Taproom</b>Live music on the patio tonight · 6–9 PM</div></div>' +
        '<div class="hh-notif" style="opacity:.55"><i>HH</i><div><b>Copper Fox Taproom</b>New winter seasonal on tap</div></div></div>' +
    '</div>');

  G.hhrVisits = () => {
    const hrs = [2, 3, 2, 4, 9, 16, 22, 18, 12, 9, 7, 5];
    const W = 600, H = 200, bw = W / hrs.length;
    const bars = hrs.map((v, i) => '<rect x="' + (i * bw + bw * .18) + '" y="' + (H - 24 - v / 22 * (H - 34)) + '" width="' + bw * .64 + '" height="' + v / 22 * (H - 34) + '" rx="4" fill="' + (i === 6 ? '#D4A843' : '#2BA5B5') + '" opacity="' + (i === 6 ? 1 : .75) + '"/>' +
      '<text x="' + (i * bw + bw / 2) + '" y="' + (H - 6) + '" font-size="11" fill="rgba(255,255,255,.5)" text-anchor="middle">' + ['12P', '1P', '2P', '3P', '4P', '5P', '6P', '7P', '8P', '9P', '10P', '11P'][i] + '</text>').join('');
    return venueShell('Visits',
      '<div class="hh-head"><div><h3>Visits</h3><p>Check-ins from Happy Hour Radar users</p></div><span class="hh-seg"><span>7 days</span><span class="on">14 days</span><span>30 days</span></span></div>' +
      '<div class="hh-card" data-hl="chart"><h4>By hour of day <span class="hh-tag gd">Peak · 6 PM</span></h4><svg viewBox="0 0 ' + W + ' ' + H + '" width="100%" style="display:block">' + bars + '</svg></div>' +
      '<div class="hh-2"><div class="hh-card"><h4>Visits · 14 days</h4><b style="font-size:1.8em">248</b> <span class="hh-tag">+18% vs prior</span></div>' +
      '<div class="hh-card"><h4>Busiest day</h4><b style="font-size:1.8em">Thursday</b> <span class="hh-tag gd">Trivia night</span></div></div>');
  };

  G.hhrPlans = () => venueShell('Subscription',
    '<div class="hh-head"><div><h3>Subscription</h3><p>No credit card required for the trial</p></div></div>' +
    '<div class="hh-card" data-hl="trial"><h4>Free trial <span>Day 41 of 60</span></h4><div class="hh-trk"><i style="width:68%"></i></div></div>' +
    '<div class="hh-plans">' +
      '<div class="hh-plan"><h5>Free</h5><div class="pr">$0</div><ul><li>Venue profile</li><li>Map listing</li><li>Community-sourced deals</li></ul></div>' +
      '<div class="hh-plan"><h5>Monthly</h5><div class="pr">$59<small> / month</small></div><ul><li>Announcements + push</li><li>Reviews &amp; visits</li><li>Priority placement</li></ul></div>' +
      '<div class="hh-plan hi"><h5>Annual <span class="hh-tag gd">Save $120</span></h5><div class="pr">$49<small> / month</small></div><ul><li>Everything in Monthly</li><li>Billed $588 / year</li><li>+$29 / mo per extra location</li></ul></div>' +
    '</div>');

  G.hhrClaims = () => adminShell('Claims', { Claims: 3, Submissions: 5 },
    '<div class="hh-head"><div><h3>Claims</h3><p>Venue owners asking to manage their listing</p></div><span class="hh-btn ghost">Import venues CSV</span></div>' +
    '<div class="hh-card" data-hl="claims"><div class="hh-tbl">' +
      '<div class="h" style="grid-template-columns:1.4fr 1fr .9fr 1.2fr">Venue<span>Requested by</span><span>Source</span><span></span></div>' +
      [['Riverbend Cantina', 'Owner', 'iOS app'], ['Juniper & Pine', 'General manager', 'Get Started form'], ['Lantern Alehouse', 'Owner', 'Web dashboard']].map(([v, r, s]) =>
        '<div style="grid-template-columns:1.4fr 1fr .9fr 1.2fr"><b style="font-weight:500">' + v + '</b><span style="color:var(--mu)">' + r + '</span><span class="hh-tag mu">' + s + '</span><span style="display:flex;gap:.4em;justify-content:flex-end"><span class="hh-btn">Approve</span><span class="hh-btn ghost">Deny</span></span></div>').join('') +
    '</div></div>' +
    '<div class="hh-2"><div class="hh-card"><h4>Markets <span>Launch coverage</span></h4>' +
      '<div class="hh-li"><b style="font-weight:500">Central Oregon</b><span>412 venues · 71% with deals</span></div>' +
      '<div class="hh-li"><b style="font-weight:500">Willamette Valley</b><span>288 venues · 46% with deals</span></div>' +
      '<div class="hh-li"><b style="font-weight:500">Puget Sound</b><span>Sourcing…</span></div></div>' +
    '<div class="hh-card"><h4>Data quality</h4><div class="hh-li"><span>Possible duplicates</span><b>7</b></div><div class="hh-li"><span>Closure reports</span><b>2</b></div><div class="hh-li"><span>Venue requests from app</span><b>4</b></div></div></div>');

  G.hhrInbox = () => adminShell('Submissions', { Claims: 3, Submissions: 5 },
    '<div class="hh-head"><div><h3>Submissions</h3><p>Every request from the website and apps, in one inbox</p></div><span class="hh-seg"><span class="on">New</span><span>Read</span><span>Resolved</span></span></div>' +
    '<div class="hh-card" data-hl="inbox"><div class="hh-tbl">' +
      '<div class="h" style="grid-template-columns:1.1fr 2fr 1.2fr .8fr">Type<span>Request</span><span>Routed to</span><span>Status</span></div>' +
      [['App crash or bug', 'Map won’t load after the latest update', '<span class="hh-tag gd">Notion · Issue Tracking</span>', 'New'],
       ['Feature request', 'Filter deals by dog-friendly patios', '<span class="hh-tag gd">Notion · Feature Requests</span>', 'New'],
       ['Area request', 'Please add Boise, Idaho', '<span class="hh-tag mu">Markets</span>', 'New'],
       ['Venue suggestion', 'Ember Wine Bar has a 4–6 PM happy hour', '<span class="hh-tag mu">Venues</span>', 'Read'],
       ['Contact', 'Partnership question from a brewery group', '<span class="hh-tag mu">Sales CRM</span>', 'Read']].map(([t, r, to, st]) =>
        '<div style="grid-template-columns:1.1fr 2fr 1.2fr .8fr"><span class="hh-tag ' + (t.startsWith('App') ? 'rd' : '') + '" style="justify-self:start">' + t + '</span><span>' + r + '</span>' + to + '<span style="color:var(--mu)">' + st + '</span></div>').join('') +
    '</div></div>' +
    '<div class="hh-2"><div class="hh-card"><h4>Last 30 days</h4><div class="hh-li"><span>Requests received</span><b>46</b></div><div class="hh-li"><span>Filed to Notion automatically</span><b>19</b></div></div>' +
    '<div class="hh-card"><h4>Public status page</h4><div class="hh-li"><span>Map won’t load</span><span class="hh-tag">Monitoring</span></div><div class="hh-li"><span>Deal times off by an hour</span><span class="hh-tag gd">Resolved</span></div></div></div>');

  G.hhrBilling = () => adminShell('Billing', { Claims: 3, Submissions: 5 },
    '<div class="hh-head"><div><h3>Billing</h3><p>Invoices, payments and renewals</p></div><span class="hh-btn">+ New invoice</span></div>' +
    '<div class="hh-kpis" data-hl="kpis">' + [['Accounts receivable', '$1,180'], ['Total collected', '$14,640'], ['This month', '$2,360'], ['Invoices', '64']].map(([l, v]) => '<div class="hh-pill"><small>' + l + '</small><b>' + v + '</b></div>').join('') + '</div>' +
    '<div class="hh-2"><div class="hh-card"><h4>Recent invoices <span>Printable · PDF</span></h4>' +
      [['Copper Fox Taproom', '$588 · Annual', 'Paid', ''], ['Basalt Grill group (3)', '$117 · Monthly', 'Unpaid', 'rd'], ['Sagebrush Social', '$59 · Monthly', 'Paid', ''], ['Harbor House', '$59 · Monthly', 'Paid', '']].map(([v, a, s, c]) =>
        '<div class="hh-li"><b style="font-weight:500">' + v + '</b><span>' + a + '</span><span class="hh-tag ' + c + '">' + s + '</span></div>').join('') + '</div>' +
    '<div class="hh-card"><h4>Renewing in 30 days</h4><div class="hh-li"><b style="font-weight:500">Juniper &amp; Pine</b><span>Trial ends Dec 4</span></div><div class="hh-li"><b style="font-weight:500">Lantern Alehouse</b><span>Renews Dec 9</span></div><div class="hh-li"><b style="font-weight:500">Riverbend Cantina</b><span>Trial ends Dec 12</span></div></div></div>');

  G.hhrCrm = () => {
    const cols = [['Unclaimed', [['Ember Wine Bar', 'Next: intro visit · Thu']]], ['Contacted', [['Harbor House', 'Called · follow up Mon'], ['Old Mill Pub', 'Emailed · demo Tue']]],
      ['Claimed · free', [['Lantern Alehouse', 'Offer trial · Fri']]], ['Trial', [['Juniper & Pine', '$59/mo · trial ends Dec 4'], ['Riverbend Cantina', '$59/mo · day 18 of 60']]],
      ['Subscribed', [['Copper Fox Taproom', '$49/mo · annual'], ['Basalt Grill (3)', '$117/mo · group']]]];
    return adminShell('CRM', { Claims: 3, Submissions: 5 },
      '<div class="hh-head"><div><h3>Sales CRM</h3><p>Every venue from first contact to paying partner</p></div><span class="hh-btn">Log activity</span></div>' +
      '<div class="hh-tabs"><span>Home</span><span>Venues</span><span class="on">Pipeline</span><span>Contacts</span><span>Activity log</span></div>' +
      '<div class="hh-kan" data-hl="pipe">' + cols.map(([t, cards]) => '<div class="hh-col"><h5>' + t + '<span>' + cards.length + '</span></h5>' +
        cards.map(([n, s]) => '<div class="hh-k"><b>' + n + '</b><span>' + s.replace(/(\$\d+\/mo)/, '<em>$1</em>') + '</span></div>').join('') + '</div>').join('') + '</div>');
  };

  /** Support-request flow diagram with an auto-advancing highlight. */
  window.mountFlow = function (el, color) {
    const steps = [
      ['📨', 'Request', 'A user reports a bug or idea', 'From the website support form or the app’s Contact Support.', 'User'],
      ['🗂️', 'Auto-filed', 'Filed to Notion automatically', 'Bugs go to Issue Tracking and ideas to Feature Requests — no copy-paste, nothing lost.', 'Automatic'],
      ['📥', 'Triage', 'Reviewed in one inbox', 'The admin console marks it New, Read or Resolved alongside every other request.', 'Admin'],
      ['🤖', 'Fix', 'Fix built with Claude Code', 'An AI coding agent picks up the open Notion issue, builds and tests the fix, and moves it to Testing.', 'AI-assisted'],
      ['📣', 'Close the loop', 'Public status page updates', 'The status page reads from Notion every 5 minutes, so users see “monitoring” then “resolved” — no manual update.', 'Automatic'],
    ];
    el.innerHTML = '<div style="--c:' + color + '"><div class="flow-bar"><i></i></div><div class="flow">' + steps.map(([ic, k, h, p, who]) =>
      '<div class="flow-step"><div class="flow-ic">' + ic + '</div><small>' + k + '</small><h5>' + h + '</h5><p>' + p + '</p><span class="who' + (who === 'AI-assisted' ? ' ai' : '') + '">' + who + '</span></div>').join('') + '</div></div>';
    const items = [...el.querySelectorAll('.flow-step')], bar = el.querySelector('.flow-bar i');
    let i = 0;
    const tick = () => { items.forEach((s, j) => s.classList.toggle('on', j === i)); bar.style.width = ((i + 1) / items.length * 100) + '%'; i = (i + 1) % items.length; };
    tick(); setInterval(tick, 2600);
  };
})();
