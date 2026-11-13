/*
 * Filename: showcase-reel.js
 * App Name: moonshinerXwerks website
 *
 * Created Date: 2026-11-12
 * Last Edited Date: 2026-11-12
 *
 * Copyright: © 2026 Moonshinerxwerks LLC. All rights reserved.
 *
 * Code Description: Auto-playing "how it's used" reel for Work page case studies. Each step shows a product
 * screen, zooms toward and highlights one area, and pairs it with a step title and the benefit it delivers.
 * Steps either share one graphic with fixed boxes, or each name their own graphic (`g`) and a highlight target (`hl`).
 */

(function () {
  const STEP_MS = 5600;

  /** Reel definitions. box = [left%, top%, width%, height%]; hl = data-hl value inside the step's graphic. */
  window.REELS = {
    stock: {
      label: 'Sightline · the real app, made-up accounts',
      aspect: '16 / 10',
      steps: [
        { img: 'work-assets/sightline-shots/overview.png', box: [2, 47.8, 96, 52.2], title: 'Every day, measured honestly', benefit: 'Gains and losses by day and week across every account, net of deposits and withdrawals, so a good month means a good month.' },
        { img: 'work-assets/sightline-shots/trading.png', box: [2, 31.5, 96, 10.5], title: 'Discipline, in numbers', benefit: 'Win rate, average win against average loss, and expectancy per trade show whether the rules are working, not how a trade felt.' },
        { img: 'work-assets/sightline-shots/stocks.png', box: [2, 31, 96, 47], title: 'Every holding against its cost', benefit: 'Cost basis, market value, gains and dividends for every position across all three accounts, in one table.' },
        { img: 'work-assets/sightline-shots/trades.png', box: [2, 30, 96, 27], title: 'Every closed trade, on the record', benefit: 'Each trade’s result, return and days held are kept, so decisions are reviewed later instead of forgotten.' },
        { img: 'work-assets/sightline-shots/theses.png', box: [2, 30.5, 96, 17], title: 'Every holding needs a reason', benefit: 'Positions are grouped by the thesis behind them; anything without one is flagged, so nothing is held on autopilot.' },
      ],
    },
    ssm: {
      label: 'Shop Sales Manager · the real app, made-up orders',
      aspect: '16 / 10',
      steps: [
        { img: 'work-assets/ssm-shots/dashboard.png', box: [2.5, 30.5, 95, 69.5], title: 'The day’s work, at a glance', benefit: 'This month against the same month last year, and every order still to ship, with a printable work order. No digging through Etsy’s pages.' },
        { img: 'work-assets/ssm-shots/insights.png', box: [78.4, 21.4, 19.3, 57.5], title: 'Where the year is heading', benefit: 'A year-to-date scorecard against last year, with a year-end forecast, so plans are made on numbers, not hunches.' },
        { img: 'work-assets/ssm-shots/trends.png', box: [2.5, 38, 56.5, 51.5], title: 'What people actually order', benefit: 'Orders broken down by product, material and design show what sells, so the shop makes more of the right thing.' },
        { img: 'work-assets/ssm-shots/inventory.png', box: [83, 27.5, 15, 72.5], title: 'Know exactly what to make next', benefit: 'Targets follow the season and cover the next three weeks, and the build list says how many of each to make.' },
        { img: 'work-assets/ssm-shots/orders.png', box: [2.5, 16, 95, 10.5], title: 'Every order, findable in seconds', benefit: 'Search by buyer, city or order number, filter by product, material, status and date, and export for the books.' },
      ],
    },
    dpm: {
      label: 'Elasticity · the real mockups, placeholder data',
      aspect: '16 / 10',
      steps: [
        { img: 'work-assets/elasticity-shots/catalogue.png', box: [14, 47, 72, 35], title: 'Which companies are mapped, and how fresh', benefit: 'Each map is compiled from filings and shows its age and exactly what would make it wrong, so stale research is never mistaken for current.' },
        { img: 'work-assets/elasticity-shots/mind-map.png', box: [14, 42, 72, 58], title: 'Who is around this company', benefit: 'Suppliers upstream and customers downstream, each marked by how firmly the link is established: filed, reported or only inferred.' },
        { img: 'work-assets/elasticity-shots/peers.png', box: [14, 48, 72, 52], title: 'Who competes, and where', benefit: 'Peers are competitors, not counterparties. The overlap column shows exactly which products they fight over.' },
        { img: 'work-assets/elasticity-shots/ranked-list.png', box: [14, 44, 72, 17], title: 'Which links are worth a trade', benefit: 'Every relationship is sorted by two tests: is it documented, and does the price actually respond? The shortlist passes both.' },
        { img: 'work-assets/elasticity-shots/thesis-rank.png', box: [14, 79, 72, 21], title: 'Ranked by strength of case', benefit: 'Each related company is scored on its own fundamentals and ranked by how well the case holds up, never by a promised chance of profit.' },
      ],
    },
    apt: {
      label: 'Application Tracker · the real app, made-up applications',
      aspect: '16 / 10',
      steps: [
        { img: 'work-assets/apt-shots/board.png', box: [3.8, 57, 92.4, 43], title: 'Every application, stage by stage', benefit: 'A board from package ready to offer shows where every application stands at a glance, with the next step on each card.' },
        { img: 'work-assets/apt-shots/tracker.png', box: [2.5, 14.4, 95, 17.3], title: 'The search, measured', benefit: 'Replies, advances, interviews and follow-ups due are counted the same way every week, so progress is a number, not a feeling.' },
        { img: 'work-assets/apt-shots/insights.png', box: [50.5, 14.5, 47, 25], title: 'What actually works', benefit: 'Results by source, résumé format and summary show which channels and versions lead to interviews, and which waste time.' },
        { img: 'work-assets/apt-shots/review.png', box: [50.5, 14.3, 47, 56.5], title: 'Nothing goes stale', benefit: 'A weekly review surfaces every application that has gone quiet, so statuses stay honest and follow-ups happen on time.' },
        { img: 'work-assets/apt-shots/companies.png', box: [3, 22, 94, 78], title: 'Every company and recruiter in one place', benefit: 'Applications, replies and last contact per company and recruiter, so no conversation is lost between job boards.' },
      ],
    },
    'fishon-portal': {
      label: 'Guide Portal · the real app, a made-up guide service',
      aspect: '16 / 10',
      steps: [
        { img: 'work-assets/fishon-portal-shots/portal-dashboard.png', box: [17, 20, 82, 80], title: 'Decide where to take clients today', benefit: 'Every stretch of river is ranked by live federal flow, water temperature and weather, so the day’s water is picked before the clients arrive.' },
        { img: 'work-assets/fishon-portal-shots/portal-section-conditions.png', box: [72, 12, 27, 33], title: 'Know each stretch the way a guide does', benefit: 'Live flow against the 10-year average, the river traced on a topo map with launches, spots and hazards, plus regulations and permits.' },
        { img: 'work-assets/fishon-portal-shots/portal-trip-catalog.png', box: [17.5, 21, 81, 26], title: 'Package trips as repeatable offerings', benefit: 'Date-free trip templates with prices, length, access and best seasons turn a guide’s best days into products to sell again.' },
        { img: 'work-assets/fishon-portal-shots/portal-catalog-trip-detail.png', box: [17.5, 19, 55, 48], title: 'Every trip mapped before it’s sold', benefit: 'Put-in, take-out and stops on the map, with the description and the notes every client gets before the day.' },
        { img: 'work-assets/fishon-portal-shots/portal-trip-report.png', box: [17.5, 11, 81, 31], title: 'Log every trip with its conditions', benefit: 'Catches, rating, conditions and what worked build a record of the guide’s best days, and it stays in sync with the iPhone app.' },
      ],
    },
    'hhr-venue': {
      label: 'Venue Dashboard · the real app, a made-up venue',
      aspect: '16 / 10',
      steps: [
        { img: 'work-assets/hhr-shots/venue-overview.png', box: [16, 27.5, 83, 13], title: 'The venue’s performance at a glance', benefit: 'Deals, rating, reviews, favorites and visits in one place, so owners see how their venue shows up in the app without opening it.' },
        { img: 'work-assets/hhr-shots/venue-deals.png', box: [16, 25.5, 83, 37], title: 'Schedule deals once, for every day', benefit: 'Deals repeat automatically until an end date, so listings stay accurate with no weekly upkeep. Locals-only deals reward regulars.' },
        { img: 'work-assets/hhr-shots/venue-announcements.png', box: [16, 18, 83, 29], title: 'A direct line to followers', benefit: 'Every announcement sends a push notification to the venue’s followers. Posts can repeat weekly or be scheduled ahead, like a holiday event.' },
        { img: 'work-assets/hhr-shots/venue-visits.png', box: [16, 33, 83, 26], title: 'See when the app brings people in', benefit: 'Visits from app users by day, with the weekend rhythm plain to see: evidence the listing drives real foot traffic.' },
        { img: 'work-assets/hhr-shots/venue-subscription.png', box: [16, 32.5, 75, 40], title: 'Start free, upgrade when it pays off', benefit: 'Claim the listing free, then choose monthly or annual. Groups pay $29 a month per extra location.' },
      ],
    },
    'hhr-admin': {
      label: 'Admin console · the real app, made-up venues and users',
      aspect: '16 / 10',
      steps: [
        { img: 'work-assets/hhr-shots/admin-venues.png', box: [16, 27, 83, 10], title: 'Venue management: trustworthy data', benefit: 'Every venue, who has claimed it and what plan it’s on. Researched venues and deals are bulk-imported and duplicates merged. Accurate listings are the product.' },
        { img: 'work-assets/hhr-shots/admin-claims.png', box: [16, 24.5, 83, 32], title: 'Owner claims, approved in one click', benefit: 'Claims arrive from the app, the website and the get-started form. Approving one creates the owner’s login automatically.' },
        { img: 'work-assets/hhr-shots/admin-app-users.png', box: [16, 37.5, 83, 31], title: 'Customer service: who uses the app', benefit: 'Users by platform and state, and daily active users over 30 days, show where the app is growing and where to launch next.' },
        { img: 'work-assets/hhr-shots/admin-crm-pipeline.png', box: [16, 55, 83, 45], title: 'Sales CRM: cold venue to paying partner', benefit: 'Every venue moves through a pipeline (contacted, claimed, trial, subscribed) with the next step, follow-up date and monthly value on each card.' },
        { img: 'work-assets/hhr-shots/admin-crm-venue.png', box: [16, 69.5, 70, 30.5], title: 'Every conversation on the record', benefit: 'Contacts, the venue’s deal and a log of every call and check-in, so a renewal never depends on memory.' },
      ],
    },
  };

  const css = `
  .reel { display: grid; grid-template-columns: minmax(0, 1.9fr) minmax(300px, 1fr); gap: 56px; align-items: center; width: 100%; }
  .reel-label { font-size: .72rem; letter-spacing: .14em; text-transform: uppercase; color: #8A8A8A; margin-bottom: 18px; display: flex; align-items: center; gap: 10px; }
  .reel-label::before { content: ""; width: 18px; height: 2px; background: var(--c, #fff); }
  .reel-stage { position: relative; min-width: 0; }
  .reel-clip { position: relative; overflow: hidden; border-radius: 14px; box-shadow: 0 30px 80px rgba(0,0,0,.6); }
  .reel-zoom { position: relative; width: 100%; transition: transform 1s cubic-bezier(.3,.7,.2,1); }
  .reel-zoom.multi { aspect-ratio: 16 / 9.03; }
  .reel-slide { position: absolute; inset: 0; opacity: 0; transition: opacity .6s; }
  .reel-slide.on { opacity: 1; }
  .reel-zoom .g-cap { display: none; }
  .reel-zoom .g-frame { box-shadow: none; border-radius: 0; }
  .reel-hl { position: absolute; border: 2px solid var(--c, #fff); border-radius: 12px; box-shadow: 0 0 0 9999px rgba(0,0,0,.5), 0 0 24px var(--c, #fff); transition: all .9s cubic-bezier(.3,.7,.2,1); pointer-events: none; z-index: 3; }
  .reel-text { display: flex; flex-direction: column; gap: 18px; }
  .reel-bars { display: flex; gap: 6px; }
  .reel-bars button { flex: 1; height: 4px; border: 0; border-radius: 4px; background: #2a2a2a; cursor: pointer; position: relative; overflow: hidden; padding: 0; }
  .reel-bars button i { position: absolute; inset: 0; width: 0; background: var(--c, #fff); }
  .reel-bars button.done i { width: 100%; }
  .reel-bars button.cur i { animation: reelfill linear forwards; animation-duration: var(--d); }
  .reel.paused .reel-bars button.cur i { animation-play-state: paused; }
  @keyframes reelfill { to { width: 100%; } }
  .reel-n { font-size: .72rem; letter-spacing: .14em; text-transform: uppercase; color: #8A8A8A; }
  .reel-title { font-family: var(--font-display); font-weight: 400; font-size: clamp(1.8rem, 2.4vw, 2.6rem); line-height: 1.1; min-height: 2.2em; }
  .reel-ben { border-left: 2px solid var(--c, #fff); padding: 4px 0 4px 18px; }
  .reel-ben small { display: block; font-size: .7rem; letter-spacing: .14em; text-transform: uppercase; color: var(--c, #fff); margin-bottom: 6px; }
  .reel-ben p { color: #cfcbc5; font-size: 1.02rem; min-height: 4.8em; }
  .reel-ctl { display: flex; gap: 8px; }
  .reel-ctl button { background: #141414; border: 1px solid #2a2a2a; color: #F0EDE8; border-radius: 100px; padding: 8px 14px; font: inherit; font-size: .85rem; cursor: pointer; }
  .reel-fade { animation: reelin .5s ease; }
  @keyframes reelin { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: none; } }
  .reel-zoom.multi .reel-slide img { cursor: zoom-in; }
  .reel-hint { font-size: .75rem; color: #8A8A8A; margin-top: 10px; }
  @media (min-width: 1800px) { .reel { grid-template-columns: minmax(0, 2.6fr) minmax(320px, 1fr); gap: 64px; } }
  @media (max-width: 1100px) { .reel { grid-template-columns: 1fr; gap: 28px; } }
  `;
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  /** Renders reel `key` into `el` in accent `color`. Plays while at least half of it is on screen. */
  window.mountReel = function (el, key, color) {
    const R = REELS[key];
    const n = R.steps.length;
    const multi = !R.graphic;
    el.innerHTML = (R.label ? '<p class="reel-label" style="--c:' + color + '">' + R.label + '</p>' : '') +
      '<div class="reel" style="--c:' + color + '">' +
        '<div class="reel-stage"><div class="reel-clip"><div class="reel-zoom' + (multi ? ' multi' : '') + '"' + (R.aspect ? ' style="aspect-ratio:' + R.aspect + '"' : '') + '>' +
          (multi ? R.steps.map(s => '<div class="reel-slide">' + (s.img ? '<img src="' + s.img + '" alt="" style="width:100%;height:100%;object-fit:cover;display:block">' : GRAPHICS[s.g]()) + '</div>').join('') : GRAPHICS[R.graphic]()) +
          '<div class="reel-hl"></div>' +
        '</div></div>' + (multi && R.steps.some(s => s.img) ? '<p class="reel-hint">Click the screen to see it full size.</p>' : '') + '</div>' +
        '<div class="reel-text">' +
          '<div class="reel-bars">' + R.steps.map((_, i) => '<button aria-label="Step ' + (i + 1) + '" data-i="' + i + '"><i></i></button>').join('') + '</div>' +
          '<div class="reel-body"></div>' +
          '<div class="reel-ctl"><button data-a="prev" aria-label="Previous">←</button><button data-a="play">Pause</button><button data-a="next" aria-label="Next">→</button></div>' +
        '</div>' +
      '</div>';
    const root = el.querySelector('.reel');
    const zoom = el.querySelector('.reel-zoom');
    const hl = el.querySelector('.reel-hl');
    const slides = [...zoom.querySelectorAll('.reel-slide')];
    const bars = [...el.querySelectorAll('.reel-bars button')];
    const body = el.querySelector('.reel-body');
    const playBtn = el.querySelector('[data-a="play"]');
    let i = 0, timer = null, playing = false;

    /** Highlight box for step k, in % of the zoom area (ratios are unaffected by the current scale). */
    function boxFor(k) {
      const s = R.steps[k];
      if (s.box) return s.box;
      const t = slides[k].querySelector('[data-hl="' + s.hl + '"]');
      const z = zoom.getBoundingClientRect(), r = t.getBoundingClientRect();
      const pad = 0.6;
      return [(r.left - z.left) / z.width * 100 - pad, (r.top - z.top) / z.height * 100 - pad, r.width / z.width * 100 + pad * 2, r.height / z.height * 100 + pad * 2];
    }

    function show(k) {
      i = (k + n) % n;
      const s = R.steps[i];
      slides.forEach((sl, j) => sl.classList.toggle('on', j === i));
      const [x, y, w, h] = boxFor(i);
      hl.style.left = x + '%'; hl.style.top = y + '%'; hl.style.width = w + '%'; hl.style.height = h + '%';
      zoom.style.transformOrigin = (x + w / 2) + '% ' + (y + h / 2) + '%';
      zoom.style.transform = 'none'; // no zoom: the highlight alone guides the eye, and nothing gets cropped
      bars.forEach((b, j) => {
        b.classList.toggle('done', j < i);
        b.classList.remove('cur'); void b.offsetWidth; // restart fill animation
        if (j === i) { b.classList.add('cur'); b.style.setProperty('--d', STEP_MS + 'ms'); }
      });
      body.innerHTML = '<div class="reel-fade"><p class="reel-n">Step ' + (i + 1) + ' of ' + n + '</p><h3 class="reel-title">' + s.title + '</h3>' +
        '<div class="reel-ben"><small>Why it matters</small><p>' + s.benefit + '</p></div></div>';
      clearTimeout(timer);
      if (playing) timer = setTimeout(() => show(i + 1), STEP_MS);
    }
    function setPlaying(p) {
      playing = p; root.classList.toggle('paused', !p); playBtn.textContent = p ? 'Pause' : 'Play';
      clearTimeout(timer);
      if (p) timer = setTimeout(() => show(i + 1), STEP_MS);
    }
    zoom.addEventListener('click', () => {
      const img = slides[i] && slides[i].querySelector('img');
      if (!img) return;
      let v = document.querySelector('.zoomview');
      if (!v) {
        v = document.createElement('div');
        v.className = 'zoomview';
        v.innerHTML = '<img alt=""><p>Click anywhere or press Esc to close</p>';
        v.addEventListener('click', () => v.classList.remove('on'));
        document.addEventListener('keydown', e => { if (e.key === 'Escape' && v.classList.contains('on')) { e.stopImmediatePropagation(); v.classList.remove('on'); } }, true);
        document.body.appendChild(v);
      }
      v.querySelector('img').src = img.src;
      v.classList.add('on');
      setPlaying(false);
    });
    el.querySelector('.reel-bars').addEventListener('click', e => { const b = e.target.closest('button'); if (b) show(+b.dataset.i); });
    el.querySelector('.reel-ctl').addEventListener('click', e => {
      const a = e.target.closest('button')?.dataset.a;
      if (a === 'prev') show(i - 1); else if (a === 'next') show(i + 1); else if (a === 'play') setPlaying(!playing);
    });
    root.classList.add('paused');
    requestAnimationFrame(() => show(0));
    new IntersectionObserver(es => es.forEach(e => setPlaying(e.isIntersecting)), { threshold: 0.5 }).observe(root);
  };
})();
