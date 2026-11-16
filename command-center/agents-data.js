/*
 * Filename: agents-data.js
 * App Name: moonshinerxwerks.com
 *
 * Created Date: 2026-11-16
 * Last Edited Date: 2026-11-16
 *
 * Copyright: © 2026 Moonshinerxwerks LLC. All rights reserved.
 *
 * Code Description: Invented sample data for the replica Agent Status page and the "Working now" list. Times, token counts and estimated costs are computed in the browser from the sample values below.
 */
(function () {
  const now = Date.now(), min = 6e4;
  // Split a day's new+output tokens into [new input, cached reads, output, est. cost] (sample ratios, API list prices).
  const tok = t => { const n = Math.round(t * 0.86), o = t - n, c = Math.round(t * 38); return [n, c, o, Math.round((n * 4 + c * 0.2 + o * 20) / 1e4) / 100]; };
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
  "report": null
 },
 {
  "name": "Product A - Engineer",
  "file": "product-a-engineer.md",
  "state": "working",
  "kind": "Background",
  "ago": 3,
  "context": 412000,
  "today": 640000,
  "week": 4100000,
  "waiting": [],
  "note": "",
  "report": {
   "ago": 4,
   "text": "Product A 2.1 build 4 is archived and checked. Waiting on the Studio Owner: (1) the iPhone upload from the archive window; (2) the Android bundle signature. Release notes are in the Tracker and the QA Analyst has the checklist."
  }
 },
 {
  "name": "Product A - Advisor",
  "file": "product-a-advisor.md",
  "state": "idle",
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
  "report": {
   "ago": 9,
   "text": "Product A check-in: 2.1 is on track for the release target. Nothing blocked on my side; your release steps are on the Dashboard under Actions 2, in order."
  }
 },
 {
  "name": "QA Analyst",
  "file": "qa-analyst.md",
  "state": "idle",
  "kind": "Background",
  "ago": 12,
  "context": 331000,
  "today": 520000,
  "week": 1900000,
  "waiting": [
   "Approve the UI rules proposal (Decision 4)"
  ],
  "note": "",
  "report": {
   "ago": 14,
   "text": "Accessibility pass on Product A closed: 14 fixes verified on both platforms. The UI rules proposal has 9 changes, each with the screens it touches."
  }
 },
 {
  "name": "Product B - Engineer",
  "file": "product-b-engineer.md",
  "state": "idle",
  "kind": "Background",
  "ago": 15,
  "context": 207000,
  "today": 290000,
  "week": 1600000,
  "waiting": [
   "Create the new sign-in key (urgent, before Thursday)"
  ],
  "note": "",
  "report": {
   "ago": 16,
   "text": "Offline mode merged and tested on both platforms. Next is the sign-in key renewal once the Studio Owner creates the new key; config change and test are ready to go."
  }
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
  "report": {
   "ago": 21,
   "text": "Product B 1.3 is in store review, day 2. The reviewer asked about the data-use label; the Store Consultant drafted the answer and it is waiting for an OK."
  }
 },
 {
  "name": "Store Consultant",
  "file": "store-consultant.md",
  "state": "idle",
  "kind": "Background",
  "ago": 22,
  "context": 174000,
  "today": 180000,
  "week": 1300000,
  "waiting": [
   "OK the two store-review answers for Product A"
  ],
  "note": "",
  "report": {
   "ago": 23,
   "text": "Holding the store-review answers for Product A until the Studio Owner OKs them. The store policy deadline in 9 days is on the Dashboard."
  }
 },
 {
  "name": "Product C - Advisor",
  "file": "product-c-advisor.md",
  "state": "idle",
  "kind": "Background",
  "ago": 27,
  "context": 246000,
  "today": 210000,
  "week": 1500000,
  "waiting": [
   "Pick an onboarding option (no rush)"
  ],
  "note": "",
  "report": {
   "ago": 28,
   "text": "Onboarding redesign: two options mocked up. The QA Analyst prefers one screen and so do I; it is Decision 2 on the Dashboard."
  }
 },
 {
  "name": "Product C - Engineer",
  "file": "product-c-engineer.md",
  "state": "idle",
  "kind": "Background",
  "ago": 31,
  "context": 389000,
  "today": 450000,
  "week": 2900000,
  "waiting": [],
  "note": "",
  "report": {
   "ago": 33,
   "text": "Export crash reproduced with a 40 MB project. Fix is in progress; expect a test build tomorrow morning."
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
  "report": {
   "ago": 40,
   "text": "Competitor pricing scan done: 12 apps, free tiers range from 2 to 5 projects. Report filed; two items marked Unclear with what was and wasn't checked."
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
  "report": {
   "ago": 55,
   "text": "Launch post and 5 store screenshots drafted; waiting on the final 2.1 build to retake two of the screenshots."
  }
 },
 {
  "name": "Tracker - Engineer",
  "file": "tracker-engineer.md",
  "state": "idle",
  "kind": "Background",
  "ago": 64,
  "context": 96000,
  "today": 120000,
  "week": 1100000,
  "waiting": [],
  "note": "",
  "report": {
   "ago": 66,
   "text": "Board view done. Archive tab is next (Decision 6); the board slows down above 500 cards, logged as an issue."
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
  "report": null
 }
];
  const agents = src.map(a => ({ name: a.name, file: a.file, state: a.state, kind: a.kind,
    lastActive: a.ago == null ? null : now - a.ago * min - 20000, context: a.context, tokToday: tok(a.today), tokWeek: tok(a.week),
    report: a.report ? { at: now - a.report.ago * min, text: a.report.text } : null, waiting: a.waiting, note: a.note }));
  const today = agents.reduce((s, a) => add(s, a.tokToday), [0, 0, 0, 0]);
  const week = agents.reduce((s, a) => add(s, a.tokWeek), [0, 0, 0, 0]);
  const early = [420000, 980000, 0, 1150000, 760000, 0, 1430000], w = [0.7, 1.0, 0.8, 1.3, 1.1, 1.5], rest = (week[0] + week[2]) - (today[0] + today[2]), ws = w.reduce((x, y) => x + y, 0);
  const totals = early.concat(w.map(x => Math.round(rest * x / ws)));
  const day = n => { const t = new Date(now - n * 864e5); return t.getFullYear() + '-' + String(t.getMonth() + 1).padStart(2, '0') + '-' + String(t.getDate()).padStart(2, '0'); };
  const daily = totals.map((t, i) => [day(13 - i), tok(t)]).concat([[day(0), today]]);
  window.AGENT_STATUS = { built: now - 3000, agents, contextLimit: 1000000,
    others: [{"name": "studio-scratch", "state": "idle", "kind": "interactive", "started_min": 55, "today": 90000}].map(o => ({ name: o.name, state: o.state, kind: o.kind, started: now - o.started_min * min, tokToday: tok(o.today) })),
    studio: { today, week, daily } };
})();
