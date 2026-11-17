/*
 * Filename: marketing-data.js
 * App Name: moonshinerxwerks.com
 *
 * Created Date: 2026-11-16
 * Last Edited Date: 2026-11-16
 *
 * Copyright: © 2026 Moonshinerxwerks LLC. All rights reserved.
 *
 * Code Description: Invented sample data for the replica Marketing page: four generic channels, posts at every stage, campaign themes and standing rules. Post dates are computed relative to today in the browser.
 */
(function () {
  const day = n => { const t = new Date(Date.now() + n * 864e5); return t.getFullYear() + '-' + String(t.getMonth() + 1).padStart(2, '0') + '-' + String(t.getDate()).padStart(2, '0'); };
  const d = {
 "channels": [
  {
   "id": "a-ig",
   "product": "Product A",
   "platform": "Instagram",
   "handle": "Product A account (sample)",
   "owner": "Product A - Campaign Manager",
   "status": "active",
   "statusText": "Active: two posts a week",
   "hashtags": "#productivity #appdesign #newfeature"
  },
  {
   "id": "b-ig",
   "product": "Product B",
   "platform": "Instagram",
   "handle": "Product B account (sample)",
   "owner": "Product B - Campaign Manager",
   "status": "standby",
   "statusText": "Standby: starts after 1.3 is approved",
   "hashtags": "#offline #travelapps"
  },
  {
   "id": "c-ig",
   "product": "Product C",
   "platform": "Instagram",
   "handle": "Product C account (sample)",
   "owner": "Marketing Manager",
   "status": "held",
   "statusText": "Held: waits for the beta",
   "hashtags": ""
  },
  {
   "id": "st-nl",
   "product": "Studio",
   "platform": "Newsletter",
   "handle": "Studio newsletter (sample)",
   "owner": "Marketing Manager",
   "status": "active",
   "statusText": "Active: once a month",
   "hashtags": ""
  }
 ],
 "posts": [
  {
   "id": "p1",
   "channel": "a-ig",
   "product": "Product A",
   "title": "2.0.3 is live: smoother sync",
   "stage": "posted",
   "owner": "Product A - Campaign Manager",
   "summary": "Short carousel on the maintenance release.",
   "_d": -9
  },
  {
   "id": "p2",
   "channel": "st-nl",
   "product": "Studio",
   "title": "October studio notes",
   "stage": "posted",
   "owner": "Marketing Manager",
   "summary": "What shipped last month across the four products.",
   "_d": -15
  },
  {
   "id": "p3",
   "channel": "a-ig",
   "product": "Product A",
   "title": "Tip: three filters people miss",
   "stage": "posted",
   "owner": "Product A - Campaign Manager",
   "summary": "One tip, one screenshot, one line of copy.",
   "_d": -4
  },
  {
   "id": "p4",
   "channel": "a-ig",
   "product": "Product A",
   "title": "2.1 launch: new filters",
   "stage": "ready",
   "gate": "the 2.1 store release",
   "owner": "Product A - Campaign Manager",
   "summary": "Launch post with five store screenshots. Goes out the day after the release.",
   "_d": 5
  },
  {
   "id": "p5",
   "channel": "a-ig",
   "product": "Product A",
   "title": "Behind the build: accessibility pass",
   "stage": "qa",
   "owner": "Product A - Campaign Manager",
   "summary": "What the 14 accessibility fixes change for people using larger text.",
   "_d": 7
  },
  {
   "id": "p6",
   "channel": "st-nl",
   "product": "Studio",
   "title": "November studio notes",
   "stage": "drafting",
   "owner": "Marketing Manager",
   "summary": "Product A 2.1, Product B offline mode and what is next.",
   "_d": 14
  },
  {
   "id": "p7",
   "channel": "b-ig",
   "product": "Product B",
   "title": "Offline mode is here",
   "stage": "drafting",
   "gate": "Product B 1.3 approval",
   "owner": "Product B - Campaign Manager",
   "summary": "Launch post for offline mode.",
   "_d": 10
  },
  {
   "id": "p8",
   "channel": "b-ig",
   "product": "Product B",
   "title": "Three trips, zero signal",
   "stage": "idea",
   "owner": "Product B - Campaign Manager",
   "summary": "Short story post showing offline mode in use."
  },
  {
   "id": "p9",
   "channel": "c-ig",
   "product": "Product C",
   "title": "Beta sign-up",
   "stage": "idea",
   "owner": "Marketing Manager",
   "summary": "Invite for the Product C beta, once the date is set."
  },
  {
   "id": "p10",
   "channel": "a-ig",
   "product": "Product A",
   "title": "Widget teaser",
   "stage": "idea",
   "owner": "Product A - Campaign Manager",
   "summary": "Holds until the widget is on the roadmap as Now."
  },
  {
   "id": "p11",
   "channel": "a-ig",
   "product": "Product A",
   "title": "Tip: filters on a schedule",
   "stage": "drafting",
   "owner": "Product A - Campaign Manager",
   "summary": "Follow-up tip after the 2.1 launch.",
   "_d": 17
  }
 ],
 "themes": [
  {
   "product": "Product A",
   "title": "Find it faster",
   "status": "active",
   "text": "Every post shows one thing the new filters make quicker."
  },
  {
   "product": "Product B",
   "title": "Works anywhere",
   "status": "active",
   "text": "Offline mode, shown in real places with no signal."
  },
  {
   "product": "Product C",
   "title": "From draft to done",
   "status": "held",
   "text": "Starts with the beta; held until the date is set."
  },
  {
   "product": "Studio",
   "title": "Built in the open",
   "status": "active",
   "text": "Monthly notes on what shipped and what was learned."
  }
 ],
 "rules": [
  "Agents draft; the Studio Owner posts. Nothing is published without an OK.",
  "Every claim in a post matches what the app does today.",
  "Launch posts go out the day after the store release, never before.",
  "Screenshots come from the release build, not a mockup.",
  "The QA Analyst checks every post for accessibility (alt text, contrast) before it is Ready.",
  "One theme per product at a time."
 ]
};
  d.posts.forEach(p => { if (p._d != null) { if (p.stage === 'posted') p.date = day(p._d); else p.due = day(p._d); } delete p._d; });
  window.MKT_DATA = d;
})();
