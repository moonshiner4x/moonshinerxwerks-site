/*
 * Filename: fishon-graphics.js
 * App Name: moonshinerXwerks website
 *
 * Created Date: 2026-11-12
 * Last Edited Date: 2026-11-12
 *
 * Copyright: © 2026 Moonshinerxwerks LLC. All rights reserved.
 *
 * Code Description: Sample screens (fictional sections, trips and data) of the FishON! Pro Guide Portal, shown
 * only for features that are live. Elements marked data-hl are reel highlight targets.
 */

(function () {
  const css = `
  .fp { --bg:#0F1419; --cd:#1A2332; --sf:#151D2B; --bd:#243044; --bl:#5B9BF7; --sk:#3DBBEF; --gr:#34D399; --fg:#e9eef6; --mu:#8a98ad;
        --prime:#34D399; --good:#5B9BF7; --fair:#E6A817; --poor:#f07080;
        background: var(--bg); color: var(--fg); display: grid; grid-template-columns: 15em 1fr; height: 49.6em; overflow: hidden; }
  .fp-side { border-right: 1px solid var(--bd); padding: 1.3em .9em; display: flex; flex-direction: column; gap: .25em; background: var(--sf); }
  .fp-logo { font-weight: 700; margin-bottom: 1.2em; padding-left: .4em; display: flex; gap: .5em; align-items: center; }
  .fp-logo i { width: 1.9em; height: 1.9em; border-radius: .5em; background: linear-gradient(135deg, var(--bl), var(--sk)); font-style: normal; display: grid; place-items: center; font-size: .75em; font-weight: 800; color: #0F1419; }
  .fp-side a { color: var(--mu); padding: .5em .7em; border-radius: .5em; font-size: .9em; }
  .fp-side a.on { background: rgba(91,155,247,.14); color: var(--bl); font-weight: 500; }
  .fp-side .tier { margin-top: auto; font-size: .76em; color: var(--mu); border: 1px solid var(--bd); border-radius: .6em; padding: .6em .7em; }
  .fp-main { padding: 1.4em 1.6em; display: grid; gap: 1em; align-content: start; overflow: hidden; position: relative; }
  .fp-head { display: flex; justify-content: space-between; align-items: center; }
  .fp-head h3 { font-size: 1.4em; font-weight: 600; }
  .fp-head p { color: var(--mu); font-size: .85em; }
  .fp-btn { background: var(--bl); color: #0F1419; font-weight: 600; font-size: .82em; padding: .5em .9em; border-radius: .5em; }
  .fp-btn.ghost { background: transparent; color: var(--fg); border: 1px solid var(--bd); font-weight: 500; }
  .fp-card { background: var(--cd); border: 1px solid var(--bd); border-radius: .8em; padding: 1em 1.1em; box-shadow: 0 1px 0 0 rgba(255,255,255,.04) inset; }
  .fp-card h4 { font-size: .9em; font-weight: 600; margin-bottom: .7em; display: flex; justify-content: space-between; }
  .fp-card h4 span { color: var(--mu); font-weight: 400; font-size: .9em; }
  .fp-stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: .7em; }
  .fp-stat { background: var(--cd); border: 1px solid var(--bd); border-radius: .7em; padding: .75em .9em; height: 4.9em; }
  .fp-stat small { color: var(--mu); font-size: .76em; }
  .fp-stat b { display: block; font-size: 1.4em; font-weight: 600; }
  .fp-rank { display: grid; gap: .55em; }
  .fp-row { display: grid; grid-template-columns: 3.6em 1fr auto; gap: .9em; align-items: center; background: var(--cd); border: 1px solid var(--bd); border-radius: .7em; padding: .6em .9em; }
  .fp-sc { width: 3.2em; height: 3.2em; border-radius: .7em; display: grid; place-items: center; font-weight: 700; font-size: 1.1em; color: #0F1419; }
  .fp-row b { font-weight: 600; display: block; }
  .fp-row span { color: var(--mu); font-size: .82em; }
  .fp-chips { display: flex; gap: .4em; }
  .fp-chip { font-size: .74em; padding: .2em .6em; border-radius: 1em; background: var(--sf); border: 1px solid var(--bd); color: var(--mu); white-space: nowrap; }
  .fp-chip.ok { color: var(--gr); border-color: rgba(52,211,153,.35); }
  .fp-chip.warn { color: var(--fair); border-color: rgba(230,168,23,.35); }
  .fp-band { font-size: .74em; font-weight: 600; }
  .fp-map { position: absolute; inset: 0; background: radial-gradient(120% 90% at 30% 40%, #1b2a22 0%, #131c17 55%, #0f1613 100%); }
  .fp-menu { position: absolute; background: var(--cd); border: 1px solid var(--bd); border-radius: .6em; padding: .4em; font-size: .82em; box-shadow: 0 1em 2.5em rgba(0,0,0,.5); display: grid; gap: .1em; min-width: 15em; }
  .fp-menu div { padding: .45em .7em; border-radius: .4em; }
  .fp-menu div.on { background: rgba(91,155,247,.16); color: var(--bl); }
  .fp-menu small { color: var(--mu); padding: .3em .7em; display: block; border-top: 1px solid var(--bd); margin-top: .2em; }
  .fp-list { position: absolute; top: 1.2em; right: 1.2em; bottom: 1.2em; width: 19em; background: rgba(26,35,50,.94); border: 1px solid var(--bd); border-radius: .8em; padding: .9em; display: grid; gap: .5em; align-content: start; }
  .fp-tbl { display: grid; font-size: .82em; }
  .fp-tbl > div { display: grid; grid-template-columns: 1.2fr 1.4fr 1fr 1fr; gap: .8em; align-items: center; padding: .6em .1em; border-top: 1px solid var(--bd); }
  .fp-tbl > div.h { color: var(--mu); border-top: 0; font-size: .9em; }
  .fp-field { background: var(--sf); border: 1px solid var(--bd); border-radius: .5em; padding: .55em .7em; font-size: .82em; color: var(--mu); }
  .fp-field b { display: block; color: var(--fg); font-weight: 500; }
  .fp-g2 { display: grid; grid-template-columns: 1fr 1fr; gap: .6em; }
  .fp-g4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: .6em; }
  .fp-photo { height: 4.6em; border-radius: .5em; }
  .fp-legs { display: grid; gap: .4em; font-size: .8em; }
  .fp-leg { display: flex; align-items: center; gap: .6em; }
  .fp-leg i { width: .7em; height: .7em; border-radius: 50%; background: var(--bl); flex: none; }
  .fp-leg span { color: var(--mu); }
  `;
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  const frame = (url, body) => '<div class="g"><div class="g-frame"><div class="g-chrome"><i></i><i></i><i></i><span>' + url + '</span></div>' + body + '</div></div>';
  const NAV = ['Dashboard', 'My Spots', 'Locations', 'Activity', 'Trip Catalog', 'Settings'];
  const shell = (active, main, bare) => frame('fishonpro.app · guide portal',
    '<div class="fp"><nav class="fp-side"><div class="fp-logo"><i>F!</i>Guide Portal</div>' +
      NAV.map(n => '<a class="' + (n === active ? 'on' : '') + '">' + n + '</a>').join('') +
      '<div class="tier">Guide tier · synced with the iPhone app</div></nav>' +
    '<div class="fp-main"' + (bare ? ' style="padding:0"' : '') + '>' + main + '</div></div>');
  const band = s => s >= 75 ? ['Prime', 'var(--prime)'] : s >= 55 ? ['Good', 'var(--good)'] : s >= 35 ? ['Fair', 'var(--fair)'] : ['Poor', 'var(--poor)'];

  const G = window.GRAPHICS = window.GRAPHICS || {};

  G.fisDash = () => {
    const rows = [[84, 'Canyon Drift', 'Deschutes River', ['Flow 4,650 cfs', 'ok'], ['Water 52°F', 'ok']], [71, 'Bridge Run', 'Nestucca River', ['Flow 1,120 cfs', 'ok'], ['Rising tide 2:40 PM', '']],
      [58, 'Upper Meadows', 'McKenzie River', ['Flow 2,310 cfs', ''], ['Water 49°F', 'ok']], [41, 'Day Stretch', 'Deschutes River', ['Flow 5,900 cfs', 'warn'], ['Wind 18 mph', 'warn']], [27, 'Tailout Bend', 'Clackamas River', ['Flow high · rising', 'warn'], ['Turbid', 'warn']]];
    return shell('Dashboard',
      '<div class="fp-head"><div><h3>Where to fish today</h3><p>Scored from live USGS, NWRFC and NWS data against your ideal ranges</p></div><span class="fp-btn ghost">Trip insights</span></div>' +
      '<div class="fp-stats">' + [['Sections', '12'], ['Trips this season', '46'], ['Fish per trip', '3.4'], ['Top species', 'Steelhead']].map(([l, v]) => '<div class="fp-stat"><small>' + l + '</small><b>' + v + '</b></div>').join('') + '</div>' +
      '<div class="fp-rank" data-hl="rank">' + rows.map(([s, n, r, a, b]) => { const [bn, c] = band(s);
        return '<div class="fp-row"><div class="fp-sc" style="background:' + c + '">' + s + '</div><div><b>' + n + '</b><span>' + r + ' · <span class="fp-band" style="color:' + c + '">' + bn + '</span></span></div>' +
          '<div class="fp-chips"><span class="fp-chip ' + a[1] + '">' + a[0] + '</span><span class="fp-chip ' + b[1] + '">' + b[0] + '</span></div></div>'; }).join('') + '</div>');
  };

  G.fisSpots = () => {
    const map = '<svg class="fp-map" viewBox="0 0 800 520" preserveAspectRatio="xMidYMid slice">' +
      '<path d="M-20 120 C120 160 180 90 300 150 S470 300 560 260 S720 330 840 300" stroke="#2b6f9e" stroke-width="7" fill="none" opacity=".85"/>' +
      '<path d="M120 540 C160 430 260 410 300 330 S330 220 300 150" stroke="#2b6f9e" stroke-width="4" fill="none" opacity=".7"/>' +
      '<path d="M300 150 C380 210 440 290 560 260" stroke="#5B9BF7" stroke-width="9" fill="none" stroke-linecap="round"/>' +
      '<path d="M140 470 C190 420 250 400 290 345" stroke="#34D399" stroke-width="7" fill="none" stroke-linecap="round"/>' +
      '<circle cx="300" cy="150" r="7" fill="#5B9BF7"/><circle cx="560" cy="260" r="7" fill="#5B9BF7"/>' +
      '<g opacity=".35" stroke="#2e4a3a" fill="none"><path d="M0 60 C200 20 400 80 800 40"/><path d="M0 380 C250 350 500 420 800 380"/><path d="M0 460 C200 440 500 490 800 450"/></g></svg>';
    return shell('My Spots', map +
      '<div class="fp-menu" data-hl="menu" style="left:38%;top:58%"><div class="on">＋ Create section here</div><div>Add location</div><div>Measure distance</div><small>River detected: McKenzie River · national river dataset</small></div>' +
      '<div class="fp-list"><b style="font-size:.95em">Sections · 12</b>' +
        [['Canyon Drift', 'Deschutes', 84], ['Bridge Run', 'Nestucca', 71], ['Upper Meadows', 'McKenzie', 58], ['Day Stretch', 'Deschutes', 41]].map(([n, r, s]) => { const [, c] = band(s);
          return '<div class="fp-row" style="grid-template-columns:2.6em 1fr;padding:.45em .6em"><div class="fp-sc" style="width:2.4em;height:2.4em;font-size:.9em;background:' + c + '">' + s + '</div><div><b style="font-size:.88em">' + n + '</b><span>' + r + ' River</span></div></div>'; }).join('') +
      '</div>', true);
  };

  G.fisSection = () => shell('My Spots',
    '<div class="fp-head"><div><h3>Canyon Drift</h3><p>Deschutes River · section settings</p></div><span class="fp-btn">Save</span></div>' +
    '<div class="fp-card" data-hl="sources"><h4>Data sources &amp; ideal ranges <span>Drives this section’s score</span></h4><div class="fp-tbl">' +
      '<div class="h">Source<span>Station</span><span>Ideal flow</span><span>Ideal water temp</span></div>' +
      '<div><b style="font-weight:500">USGS</b><span>River gauge · upstream</span><span>3,800–5,200 cfs</span><span>48–56°F</span></div>' +
      '<div><b style="font-weight:500">NWRFC</b><span>River forecast · 5 day</span><span>Trend: steady</span><span>—</span></div>' +
      '<div><b style="font-weight:500">NWS</b><span>Point forecast</span><span>—</span><span>Wind under 12 mph</span></div>' +
      '<div><b style="font-weight:500">NOAA tides</b><span>Not tidal</span><span>—</span><span>—</span></div>' +
    '</div></div>' +
    '<div class="fp-g2"><div class="fp-card"><h4>Regulations &amp; permits</h4><div class="fp-field">Season<b>Open year-round · barbless hooks</b></div><div style="height:.5em"></div><div class="fp-field">Permit<b>Boater pass required</b></div></div>' +
    '<div class="fp-card"><h4>Species</h4><div class="fp-chips" style="flex-wrap:wrap"><span class="fp-chip ok">Summer steelhead</span><span class="fp-chip ok">Redband trout</span><span class="fp-chip">Whitefish</span></div></div></div>');

  G.fisTrip = () => shell('Activity',
    '<div class="fp-head"><div><h3>Trip report</h3><p>Canyon Drift · Oct 18 · 2 clients</p></div><span class="fp-btn">Save trip</span></div>' +
    '<div class="fp-g2">' +
      '<div class="fp-card" data-hl="cond"><h4>Conditions</h4><div class="fp-g2"><div class="fp-field">Pressure<b>Falling slowly</b></div><div class="fp-field">Clarity<b>3 ft · slight green</b></div><div class="fp-field">Hatch<b>October caddis</b></div><div class="fp-field">Fish behavior<b>Holding in tailouts</b></div></div></div>' +
      '<div class="fp-card"><h4>Catch log <span>Day 1</span></h4>' +
        [['Summer steelhead', 'Wild · 7 lb · swung fly', '10:40 AM'], ['Redband trout', '16 in · dry fly', '1:15 PM'], ['Summer steelhead', 'Hatchery · 5 lb · kept', '3:05 PM']].map(([s, d, t]) =>
          '<div style="display:flex;justify-content:space-between;padding:.45em 0;border-top:1px solid var(--bd);font-size:.82em"><span><b style="font-weight:500">' + s + '</b> <span style="color:var(--mu)">· ' + d + '</span></span><span style="color:var(--mu)">' + t + '</span></div>').join('') + '</div>' +
    '</div>' +
    '<div class="fp-g2"><div class="fp-card"><h4>Rating</h4><span style="color:#E6A817;font-size:1.5em;letter-spacing:.1em">★★★★★</span><p style="color:var(--mu);font-size:.82em;margin-top:.4em">Best day of the month — fish keyed on the swing late afternoon.</p></div>' +
    '<div class="fp-card"><h4>Photos <span>3 of 5</span></h4><div class="fp-g4"><div class="fp-photo" style="background:linear-gradient(135deg,#3b5d4a,#8aa58a)"></div><div class="fp-photo" style="background:linear-gradient(135deg,#59718a,#a9bccb)"></div><div class="fp-photo" style="background:linear-gradient(135deg,#6b5a3d,#b59a6a)"></div><div class="fp-photo" style="border:1px dashed var(--bd)"></div></div></div></div>');

  G.fisCatalog = () => shell('Trip Catalog',
    '<div class="fp-head"><div><h3>Trip catalog</h3><p>Reusable trips you offer, without dates</p></div><span class="fp-btn">+ New trip</span></div>' +
    '<div class="fp-g2" data-hl="catalog">' +
      [['Deschutes Steelhead Swing', 'Full day · drift boat', ['Summer–Fall'], [['Put-in', 'Upper boat launch'], ['Hold', 'Canyon Drift tailouts'], ['Take-out', 'Lower launch']]],
       ['Nestucca Tidewater Trip', 'Half day · walk & wade', ['Winter'], [['Start', 'Bridge Run access'], ['Fish', 'Rising tide seams'], ['End', 'Bridge Run access']]],
       ['McKenzie Dry-Fly Float', 'Full day · drift boat', ['Spring', 'Fall'], [['Put-in', 'Upper Meadows'], ['Fish', 'Riffle edges'], ['Take-out', 'Mid-river ramp']]],
       ['Intro to Spey Casting', '3 hours · lesson', ['Year-round'], [['Meet', 'Day Stretch access'], ['Teach', 'Water-anchored casts'], ['Fish', 'Soft inside seam']]]].map(([t, d, seasons, legs]) =>
        '<div class="fp-card"><h4>' + t + ' <span>' + d + '</span></h4><div class="fp-legs">' + legs.map(([k, v]) => '<div class="fp-leg"><i></i><b style="font-weight:500">' + k + '</b><span>' + v + '</span></div>').join('') + '</div>' +
        '<div class="fp-chips" style="margin-top:.7em">' + seasons.map(s => '<span class="fp-chip">' + s + '</span>').join('') + '</div></div>').join('') +
    '</div>');
})();
