/*
 * Filename: dashboard-data.js
 * App Name: moonshinerxwerks.com
 *
 * Created Date: 2026-11-16
 * Last Edited Date: 2026-11-16
 *
 * Copyright: © 2026 Moonshinerxwerks LLC. All rights reserved.
 *
 * Code Description: Invented sample data for the replica Dashboard's executive summary. Dates are computed relative to today in the browser, so deadlines always count down from the day the page is opened.
 */
(function () {
  const day = n => { const t = new Date(Date.now() + n * 864e5); return t.getFullYear() + '-' + String(t.getMonth() + 1).padStart(2, '0') + '-' + String(t.getDate()).padStart(2, '0'); };
  const d = {
 "decisions": [
  {
   "text": "Commit the Product A 2.1 release notes and settings fix",
   "detail": "Recommend yes; the Program Manager runs it, nothing pushed.",
   "why": "Product A - Engineer finished both and the QA Analyst checked them. The release notes describe the new filters; the settings fix stops the theme resetting after an update.",
   "options": [
    "Yes",
    "Not now"
   ],
   "rec": "Yes. Code and release notes as separate commits; nothing is pushed until you say so.",
   "how": "Answer here, or tell the Program Manager \"commit it\" in the chat."
  },
  {
   "text": "Product C onboarding: one screen or two?",
   "detail": "Both mockups are ready; the QA Analyst and Product Advisor lean the same way.",
   "why": "Onboarding is the first thing new people see. The two-screen version explains more; the one-screen version gets people to their first result faster.",
   "options": [
    "One screen",
    "Two screens",
    "Test both"
   ],
   "rec": "One screen. In the QA Analyst's walkthrough, four of five testers skipped the second screen anyway.",
   "links": [
    [
     "Agent Status: Product C",
     "agents.html"
    ]
   ]
  },
  {
   "text": "Product B pricing: keep the free tier at 3 projects?",
   "detail": "Research Analyst compared 12 similar apps.",
   "why": "The free tier limit decides how many people try the paid plan. Peers range from 2 to 5 projects.",
   "options": [
    "Keep 3",
    "Raise to 5",
    "Remove the limit"
   ],
   "rec": "Keep 3 for now and revisit after 30 days of data from the 1.3 release."
  },
  {
   "text": "Approve 9 UI rule changes from the QA Analyst",
   "detail": "Spacing, tap targets and empty states; none changes a flow.",
   "why": "Every product follows the studio UI rules. These changes make the four products consistent before the next round of releases.",
   "options": [
    "Approve all",
    "Approve with edits",
    "Not now"
   ],
   "rec": "Approve all. They are consistency fixes, and each one lists the screens it touches."
  },
  {
   "text": "Product D: pause or keep building?",
   "detail": "Sequencing call; Product A ships this week.",
   "why": "Two products in release at once doubles the steps only you can do. Product D has no deadline.",
   "options": [
    "Keep building",
    "Pause 2 weeks",
    "Pause until Product A ships"
   ],
   "rec": "Pause until Product A ships. One release lane at a time keeps your review load small."
  },
  {
   "text": "Tracker: move done items to an archive tab",
   "detail": "The board is getting slow with 500+ cards.",
   "why": "Archiving keeps the board fast and the history searchable.",
   "options": [
    "Yes",
    "No"
   ],
   "rec": "Yes. Done items older than 14 days move to Archive automatically."
  },
  {
   "text": "Launch post for Product A: Tuesday or Thursday?",
   "detail": "The Campaign Manager has the post and screenshots ready.",
   "why": "The post should land after the store update is live, so links go to the new version.",
   "options": [
    "Tuesday",
    "Thursday"
   ],
   "rec": "Thursday, the day after the release target."
  }
 ],
 "actions": [
  {
   "text": "Renew the Product B sign-in key",
   "urgent": true,
   "app": "Product B",
   "detail": "Before Thursday, or Sign in with Apple stops working.",
   "why": "The key expires in 3 days. Only you can create a new one in the developer account.",
   "steps": [
    "1. Developer account: Keys, create a new sign-in key",
    "2. Download it once and hand it to Product B - Engineer in its window",
    "3. Product Engineer updates the config and runs a sign-in test",
    "4. Delete the old key after the test passes"
   ],
   "how": "Takes about 10 minutes."
  },
  {
   "text": "Product A 2.1: your release steps (9, in order)",
   "app": "Product A",
   "detail": "Step 1 done (backup branch pushed). Next: upload the iPhone build, then sign the Android bundle.",
   "why": "2.1 is releasing this week. These are the steps only you can do; Product A - Advisor tracks them.",
   "steps": [
    "✓ 1. Backup branch pushed (done today)",
    "2. Upload the iPhone build from the archive window",
    "3. Sign the Android bundle and upload it to internal testing",
    "4. QA Analyst runs the release checks",
    "5. Device test, 6 checks",
    "6. Submit for review on both stores",
    "7. Release notes go live",
    "8. Campaign Manager posts the launch",
    "9. Tag the release"
   ],
   "how": "Take them as they come up; the Product Engineer posts each step when it is ready."
  },
  {
   "text": "Publish the Product B help-center update",
   "app": "Product B",
   "detail": "Built and checked; you click Publish.",
   "why": "The new offline mode needs its help article live before 1.3 is approved."
  },
  {
   "text": "Install the Product C test build and try the new export",
   "app": "Product C",
   "detail": "Five minutes on your phone.",
   "how": "Open the test invite, export one project, and tell the Product Advisor if anything looks off."
  },
  {
   "text": "Answer two store-review questions for Product A",
   "app": "Product A",
   "detail": "The Store Consultant drafted both answers; you paste and submit."
  },
  {
   "text": "Confirm the domain for the Product C web app",
   "app": "Product C",
   "detail": "Verification can take 2–3 days, so it gates the launch checklist."
  },
  {
   "text": "Send the Store Consultant the store policy screenshot",
   "detail": "Not urgent."
  },
  {
   "text": "Product D: three small questions from the Product Advisor",
   "app": "Product D",
   "detail": "Naming, an icon pick and one empty-state message."
  }
 ],
 "accomplished": [
  {
   "app": "Studio",
   "text": "Studio RACI approved",
   "detail": "Editable any time on the RACI page.",
   "href": "raci.html"
  },
  {
   "app": "Product A",
   "text": "Product A 2.0.3 live on both stores"
  },
  {
   "app": "Product B",
   "text": "Offline mode merged and tested on both platforms"
  },
  {
   "app": "Product B",
   "text": "Product B 1.3 submitted for review"
  },
  {
   "app": "Product C",
   "text": "New export passed quality review"
  },
  {
   "app": "Tracker",
   "text": "Board view done"
  },
  {
   "app": "Studio",
   "text": "Competitor pricing scan: 12 apps",
   "detail": "Research Analyst; two items marked Unclear with what was checked."
  },
  {
   "app": "Studio",
   "text": "Privacy policy updated for the new analytics events",
   "detail": "Legal Analyst."
  },
  {
   "app": "Studio",
   "text": "Six-week launch calendar drafted",
   "detail": "Marketing Manager."
  },
  {
   "app": "Product A",
   "text": "Accessibility pass: 14 fixes verified",
   "detail": "QA Analyst."
  }
 ],
 "inprogress": [
  {
   "app": "Product A",
   "text": "Product A 2.1: release this week",
   "detail": "Waiting on your upload (Actions 2)."
  },
  {
   "app": "Product B",
   "text": "Product B 1.3 in store review",
   "detail": "Day 2; one data-use question answered."
  },
  {
   "app": "Product C",
   "text": "Onboarding redesign",
   "detail": "Two options mocked up (Decision 2)."
  },
  {
   "app": "Product C",
   "text": "Export fix for very large files",
   "detail": "Crash reproduced; test build tomorrow."
  },
  {
   "app": "Tracker",
   "text": "Archive tab",
   "detail": "Starts after Decision 6."
  },
  {
   "app": "Studio",
   "text": "Launch post and store screenshots for Product A",
   "detail": "Campaign Manager."
  }
 ],
 "risks": [
  {
   "text": "Product A 2.1 slips if the iPhone build isn't uploaded by Wednesday",
   "why": "Store review takes 1–2 days and the launch post is set for Thursday.",
   "rec": "Do Actions 2, step 2 first."
  },
  {
   "text": "Program Manager context is near its limit",
   "why": "At 78% it will compact soon; long threads get summarized.",
   "rec": "Nothing to do; it keeps a running summary in its notes."
  },
  {
   "text": "Store reviewer flagged the Product B data-use label",
   "why": "A mismatch between the label and the app can delay approval.",
   "rec": "The Store Consultant's answer is ready for your OK."
  }
 ],
 "issues": [
  {
   "text": "Product C crashes exporting very large files",
   "detail": "2 reports, both over 40 MB.",
   "how": "Fix in progress; test build tomorrow."
  },
  {
   "text": "Tracker board slow above 500 cards",
   "how": "Archive tab fixes it (Decision 6)."
  },
  {
   "text": "Help-center search shows stale results",
   "detail": "Product B; cache clears nightly.",
   "rec": "Low priority; fix with the next help-center update."
  }
 ],
 "deadlines": [
  {
   "in_days": 3,
   "text": "Product B sign-in key expires",
   "why": "Sign in with Apple stops working after this date."
  },
  {
   "in_days": 4,
   "text": "Product A 2.1 release target"
  },
  {
   "in_days": 9,
   "text": "Store policy update due",
   "why": "New privacy questions for every app on the store."
  },
  {
   "in_days": 16,
   "text": "Product C beta opens"
  },
  {
   "in_days": 30,
   "text": "Quarterly roadmap review"
  }
 ]
};
  d.deadlines.forEach(x => { x.date = day(x.in_days); delete x.in_days; });
  const u = new Date(Date.now() - 24 * 6e4); u.setSeconds(0, 0);
  d.updated = u.toISOString();
  window.DASH_DATA = d;
})();
