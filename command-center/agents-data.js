/*
 * Filename: agents-data.js
 * App Name: moonshinerxwerks.com
 *
 * Created Date: 2026-11-16
 * Last Edited Date: 2026-11-16
 *
 * Copyright: © 2026 Moonshinerxwerks LLC. All rights reserved.
 *
 * Code Description: Invented sample data for the replica Agent Status page, the Dashboard's "Waiting on you" and "Working now", and the usage popup. Times, token counts per model and estimated costs are computed in the browser from the sample values below.
 */
(function () {
  const now = Date.now(), min = 6e4;
  // Sample prices per million tokens [new input, cached reads, output], used only to make the estimated costs look plausible.
  const PRICE = { opus: [4, 0.2, 20], sonnet: [2.4, 0.12, 12] };
  // Split a day's new+output tokens into [new input, cached reads, output, est. cost] (sample ratios).
  const tok = (t, f) => { const p = PRICE[f] || PRICE.opus, n = Math.round(t * 0.86), o = t - n, c = Math.round(t * 38);
    return [n, c, o, Math.round((n * p[0] + c * p[1] + o * p[2]) / 1e4) / 100]; };
  const add = (a, b) => a.map((v, i) => i === 3 ? Math.round((v + b[i]) * 100) / 100 : v + b[i]);
  const src = [
 {
  "name": "Moonshinerxwerks Program Manager",
  "file": "moonshinerxwerks-program-manager.md",
  "state": "working",
  "kind": "Background",
  "ago": 0,
  "context": 782000,
  "today": 1180000,
  "week": 6900000,
  "waiting": [],
  "note": "",
  "model": "opus",
  "set": "opus",
  "util": [
   11760,
   32400
  ],
  "report": null,
  "since": 6,
  "brief": "Morning summary for the Studio Owner",
  "frm": "the Studio Owner",
  "step": "Merging three agent reports into the Dashboard"
 },
 {
  "name": "Product A - Engineer",
  "file": "product-a-engineer.md",
  "state": "working",
  "kind": "Background",
  "ago": 1,
  "context": 412000,
  "today": 640000,
  "week": 4100000,
  "waiting": [],
  "note": "",
  "model": "opus",
  "set": "opus",
  "util": [
   10080,
   31200
  ],
  "report": {
   "ago": 40,
   "text": "Product A 2.1 build 4 is archived and checked. Release notes are on the Ops Board and the QA Analyst has the checklist."
  },
  "since": 22,
  "brief": "Product A 2.1: final build checks",
  "frm": "Product A - Advisor",
  "step": "Running the release checklist on the Android bundle"
 },
 {
  "name": "Product C - Engineer",
  "file": "product-c-engineer.md",
  "state": "working",
  "kind": "Background",
  "ago": 2,
  "context": 389000,
  "today": 450000,
  "week": 2900000,
  "waiting": [],
  "note": "",
  "model": "opus",
  "set": "opus",
  "util": [
   8460,
   28800
  ],
  "report": {
   "ago": 70,
   "text": "Export crash reproduced with a 40 MB project. Fix in progress; expect a test build tomorrow morning."
  },
  "since": 35,
  "brief": "Export fix for very large files",
  "frm": "Product C - Advisor",
  "step": "Testing a 40 MB project export"
 },
 {
  "name": "Product B - Engineer",
  "file": "product-b-engineer.md",
  "state": "blocked",
  "kind": "Background",
  "ago": 15,
  "context": 207000,
  "today": 290000,
  "week": 1600000,
  "waiting": [
   "Create the new sign-in key (urgent, before Thursday)"
  ],
  "note": "",
  "model": "opus",
  "set": "opus",
  "util": [
   4440,
   28200
  ],
  "report": {
   "ago": 16,
   "text": "Offline mode merged and tested on both platforms. The config change and sign-in test are ready as soon as the new key arrives."
  },
  "needs": "A new sign-in key from the developer account, before Thursday",
  "since": 15,
  "urg": [
   0,
   "P0",
   "Deadline within 48 hours: the sign-in key expires Thursday"
  ]
 },
 {
  "name": "Product A - Advisor",
  "file": "product-a-advisor.md",
  "state": "blocked",
  "kind": "Background",
  "ago": 8,
  "context": 268000,
  "today": 310000,
  "week": 2200000,
  "waiting": [
   "Upload the iPhone build (release step 2)",
   "Sign the Android bundle (release step 3)"
  ],
  "note": "",
  "model": "opus",
  "set": "opus",
  "util": [
   5280,
   30000
  ],
  "report": {
   "ago": 9,
   "text": "Product A check-in: 2.1 is on track for the release target. Your release steps are on the Dashboard under Actions 2, in order."
  },
  "needs": "Upload the iPhone build, then sign the Android bundle (release steps 2 and 3)",
  "since": 48,
  "urg": [
   1,
   "P1",
   "Blocks a release: 2.1 ships this week"
  ]
 },
 {
  "name": "QA Analyst",
  "file": "qa-analyst.md",
  "state": "blocked",
  "kind": "Background",
  "ago": 12,
  "context": 331000,
  "today": 520000,
  "week": 1900000,
  "waiting": [
   "Approve the UI rules proposal (Decision 4)"
  ],
  "note": "",
  "model": "opus",
  "set": "opus",
  "util": [
   7920,
   30600
  ],
  "report": {
   "ago": 14,
   "text": "Accessibility pass on Product A closed: 14 fixes verified on both platforms. The UI rules proposal has 9 changes, each with the screens it touches."
  },
  "needs": "Approve the 9 UI rule changes (Decision 4)",
  "since": 64,
  "urg": [
   2,
   "P2",
   "Next planned step: consistency fixes before the next releases"
  ]
 },
 {
  "name": "Store Consultant",
  "file": "store-consultant.md",
  "state": "blocked",
  "kind": "Background",
  "ago": 22,
  "context": 174000,
  "today": 180000,
  "week": 1300000,
  "waiting": [
   "OK the two store-review answers for Product A"
  ],
  "note": "",
  "model": "sonnet",
  "set": "sonnet",
  "util": [
   2820,
   27000
  ],
  "report": {
   "ago": 23,
   "text": "Holding the store-review answers for Product A until the Studio Owner OKs them. The store policy deadline in 9 days is on the Dashboard."
  },
  "needs": "OK the two drafted store-review answers for Product A",
  "since": 22,
  "urg": [
   2,
   "P2",
   "Next planned step: answers go in with the 2.1 submission"
  ]
 },
 {
  "name": "Product C - Advisor",
  "file": "product-c-advisor.md",
  "state": "blocked",
  "kind": "Background",
  "ago": 27,
  "context": 246000,
  "today": 210000,
  "week": 1500000,
  "waiting": [
   "Pick an onboarding option (Decision 2)"
  ],
  "note": "",
  "model": "opus",
  "set": "opus",
  "util": [
   3120,
   25800
  ],
  "report": {
   "ago": 28,
   "text": "Onboarding redesign: two options mocked up. The QA Analyst prefers one screen and so do I; it is Decision 2 on the Dashboard."
  },
  "needs": "Pick one or two onboarding screens (Decision 2)",
  "since": 95,
  "urg": [
   3,
   "P3",
   "Can wait: the build starts next week"
  ]
 },
 {
  "name": "Product B - Advisor",
  "file": "product-b-advisor.md",
  "state": "idle",
  "kind": "Background",
  "ago": 19,
  "context": 583000,
  "today": 240000,
  "week": 2600000,
  "waiting": [],
  "note": "",
  "model": "opus",
  "set": "opus",
  "util": [
   3660,
   27600
  ],
  "report": {
   "ago": 21,
   "text": "Product B 1.3 is in store review, day 2. The reviewer asked about the data-use label; the Store Consultant drafted the answer."
  }
 },
 {
  "name": "Research Analyst",
  "file": "research-analyst.md",
  "state": "idle",
  "kind": "Background",
  "ago": 38,
  "context": 301000,
  "today": 370000,
  "week": 2400000,
  "waiting": [],
  "note": "",
  "model": "sonnet",
  "set": "sonnet",
  "util": [
   5760,
   26400
  ],
  "report": {
   "ago": 40,
   "text": "Competitor pricing scan done: 12 apps, free tiers range from 2 to 5 projects. Two items marked Unclear with what was and wasn't checked."
  }
 },
 {
  "name": "Marketing Manager",
  "file": "marketing-manager.md",
  "state": "idle",
  "kind": "Background",
  "ago": 46,
  "context": 152000,
  "today": 160000,
  "week": 900000,
  "waiting": [],
  "note": "",
  "model": "sonnet",
  "set": "sonnet",
  "util": [
   2520,
   25200
  ],
  "report": {
   "ago": 48,
   "text": "Six-week launch calendar drafted. The Product A post moves to Thursday if Decision 7 goes that way."
  }
 },
 {
  "name": "Product A - Campaign Manager",
  "file": "product-a-campaign-manager.md",
  "state": "idle",
  "kind": "Background",
  "ago": 52,
  "context": 118000,
  "today": 140000,
  "week": 700000,
  "waiting": [],
  "note": "",
  "model": "sonnet",
  "set": "sonnet",
  "util": [
   2160,
   24600
  ],
  "report": {
   "ago": 55,
   "text": "Launch post and 5 store screenshots drafted; two screenshots get retaken from the final 2.1 build."
  }
 },
 {
  "name": "Ops Board - Engineer",
  "file": "ops-board-engineer.md",
  "state": "idle",
  "kind": "Background",
  "ago": 64,
  "context": 96000,
  "today": 120000,
  "week": 1100000,
  "waiting": [],
  "note": "",
  "model": "sonnet",
  "set": "sonnet",
  "util": [
   1860,
   24000
  ],
  "report": {
   "ago": 66,
   "text": "Board view done. The archive tab is next (Decision 6); the board slows down above 500 cards, logged as an issue."
  }
 },
 {
  "name": "Legal Analyst",
  "file": "legal-analyst.md",
  "state": "idle",
  "kind": "Background",
  "ago": 95,
  "context": 88000,
  "today": 60000,
  "week": 600000,
  "waiting": [],
  "note": "",
  "model": "opus",
  "set": "sonnet",
  "util": [
   1080,
   22800
  ],
  "report": {
   "ago": 98,
   "text": "Privacy policy updated for the new analytics events. Plain-language summary and changelog are ready for review."
  }
 },
 {
  "name": "Product D - Advisor",
  "file": "product-d-advisor.md",
  "state": "stopped",
  "kind": "Window",
  "ago": 1560,
  "context": 143000,
  "today": 0,
  "week": 420000,
  "waiting": [
   "Three small questions on the Dashboard"
  ],
  "note": "Paused until Product A ships (Decision 5).",
  "model": "opus",
  "set": "opus",
  "util": null,
  "report": {
   "ago": 1560,
   "text": "Prototype review done. Three small questions for the Studio Owner are on the Dashboard; nothing else blocked."
  }
 },
 {
  "name": "Product D - Engineer",
  "file": "product-d-engineer.md",
  "state": "stopped",
  "kind": "Window",
  "ago": 1620,
  "context": 121000,
  "today": 0,
  "week": 380000,
  "waiting": [],
  "note": "",
  "model": "opus",
  "set": "opus",
  "util": null,
  "report": {
   "ago": 1620,
   "text": "Prototype screens committed locally; nothing pushed. Standing by."
  }
 },
 {
  "name": "Product B - Campaign Manager",
  "file": "product-b-campaign-manager.md",
  "state": "stopped",
  "kind": "",
  "ago": null,
  "context": null,
  "today": 0,
  "week": 0,
  "waiting": [],
  "note": "Starts after Product B 1.3 is approved.",
  "model": "sonnet",
  "set": "sonnet",
  "util": null,
  "report": null
 }
];
  const agents = src.map(a => { const x = { name: a.name, file: a.file, state: a.state, kind: a.kind,
    model: 'claude-' + a.model + '-5-5', modelSet: a.set, fam: a.model,
    lastActive: a.ago == null ? null : now - a.ago * min - 20000, context: a.context, tokToday: tok(a.today, a.model), tokWeek: tok(a.week, a.model),
    report: a.report ? { at: now - a.report.ago * min, text: a.report.text } : null, waiting: a.waiting, note: a.note, util: a.util };
    if (a.needs) x.needs = a.needs;
    if (a.urg) x.urgency = a.urg;
    if (a.since != null) x.since = now - a.since * min;
    if (a.brief) { x.brief = a.brief; x.task = a.brief; x.from = a.frm; x.step = a.step; }
    return x; });
  const sum = (key, f) => agents.filter(a => !f || a.fam === f).reduce((s, a) => add(s, a[key]), [0, 0, 0, 0]);
  const today = sum('tokToday'), week = sum('tokWeek');
  const early = [420000, 980000, 0, 1150000, 760000, 0, 1430000], w = [0.7, 1.0, 0.8, 1.3, 1.1, 1.5], sh = [0.12, 0.18, 0, 0.15, 0.2, 0, 0.22, 0.25, 0.21, 0.28, 0.24, 0.3, 0.27], rest = (week[0] + week[2]) - (today[0] + today[2]), ws = w.reduce((x, y) => x + y, 0);
  const totals = early.concat(w.map(x => Math.round(rest * x / ws)));
  const day = n => { const t = new Date(now - n * 864e5); return t.getFullYear() + '-' + String(t.getMonth() + 1).padStart(2, '0') + '-' + String(t.getDate()).padStart(2, '0'); };
  // studio.daily: [date, [new input, cached reads, output, est. cost], { model family: [same four] }], oldest first.
  const split = (t, s) => { const so = Math.round(t * s), op = t - so, m = {}; if (op) m.opus = tok(op, 'opus'); if (so) m.sonnet = tok(so, 'sonnet');
    return [Object.values(m).reduce(add, [0, 0, 0, 0]), m]; };
  const daily = totals.map((t, i) => { const [all, m] = split(t, sh[i]); return [day(13 - i), all, m]; })
    .concat([[day(0), today, { opus: sum('tokToday', 'opus'), sonnet: sum('tokToday', 'sonnet') }]]);
  const week7 = daily.slice(-7).reduce((s, x) => add(s, x[1]), [0, 0, 0, 0]);
  const work = agents.reduce((s, a) => s + (a.util ? a.util[0] : 0), 0), avail = agents.reduce((s, a) => s + (a.util ? a.util[1] : 0), 0);
  const WT = {"today": [244, 9, 6], "week": [1310, 41, 11]};
  agents.forEach(a => delete a.fam);
  window.AGENT_STATUS = { built: now - 3000, agents, contextLimit: 1000000,
    others: [{"name": "studio-scratch", "state": "idle", "kind": "interactive", "started_min": 55, "today": 90000}].map(o => ({ name: o.name, state: o.state, kind: o.kind, started: now - o.started_min * min, tokToday: tok(o.today, 'opus') })),
    studio: { today, week: week7, daily,
      wait: { today: [WT.today[0] * 60, WT.today[1]], week: [WT.week[0] * 60, WT.week[1]], agentsToday: WT.today[2], agentsWeek: WT.week[2], util: [work, avail] },
      work: { today: work, week: Math.round(work * 5.4) } } };
})();
