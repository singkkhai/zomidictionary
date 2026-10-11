# Zomi Dictionary — Community Contributions (GitHub Pages, free)

## Included
- Searchable **1,366 unverified research candidate** word pairs (unchanged; NOT certified or approved).
- Public **Contribute a Word** section with a Google Forms link configured in `config.js`.
- Review/publishing instructions for a free manual workflow.
- `CNAME` for `zomidictionary.singkhai.com`.

**The contribution button stays disabled until you add your real Google Forms responder link.** GitHub Pages cannot receive or privately store form submissions on its own.

## Step A: Publish website update
1. Open https://github.com/singkkhai/zomidictionary .
2. Select the **branch configured under Settings → Pages** (previously `zomilexicon`; check the current setting).
3. Replace `index.html`, `app.js`, `style.css` with these versions; add `config.js`. Keep `candidates.json` and `CNAME` in the repository root.
4. Commit changes and wait for GitHub Pages deployment.

## Step B: Make a Google Form (free)
1. Visit https://forms.google.com and create a **Blank form** named `Contribute a Tedim Zomi Word`.
2. Add questions (required unless noted):
   - Tedim Zomi word / phrase — Short answer
   - English meaning — Paragraph
   - Example sentence in Tedim Zomi — Paragraph (optional)
   - English example translation — Paragraph (optional)
   - Pronunciation / spelling notes — Short answer (optional)
   - Source or explanation — Paragraph (optional)
   - Contributor name or contact — Short answer (optional; do not require email)
3. In Settings, do **not** restrict to your organization; avoid requiring sign-in if anonymous community contributions are desired. Review spam and abuse risk.
4. Use **Responses → Link to Sheets** to create a private spreadsheet for submissions. Do not publish the sheet or embed its edit link.
5. Copy the form's **responder/public link** (not its editor URL).
6. Edit `config.js` in GitHub, paste the responder link between the quotes in `window.ZOMI_CONTRIBUTE_FORM_URL = "...";` and commit. The Contribute button will then work.

## Step C: Administrator review and publication
1. In your private Google Sheet, add columns `Review status`, `Reviewed by`, `Reviewed on`, and `Evidence`.
2. For each suggestion, check spelling, meaning, examples, duplicate entries, and source rights. Mark `Approved`, `Needs correction`, or `Rejected`.
3. To publish an approved entry, edit `approved.json` in the repository, preserving JSON syntax, e.g.:

```json
[
  {"id":"ZA-00001","zomi":"[verified Zomi word]","english":"[verified meaning]","status":"approved","source":"[source or citation]"}
]
```

4. **Important:** This edition searches `candidates.json` only. For a separate *approved* display, the included `app.js` now also reads `approved.json` if present, and labels approved entries separately. If `approved.json` is missing, search still works with candidates. Never mark unverified candidates approved without checking.
5. Commit `approved.json` changes. GitHub Pages will update after deployment.

## Security and limitations
- This is a static public website, not a private review dashboard. Google Forms and a private Sheet provide the review queue.
- Do not put your private Sheet URL, form editing URL, email credentials, or passwords in the GitHub repository.
- Google Forms can collect user data. Use an appropriate privacy notice and minimize personal data collection.
- Public GitHub repository exposes all word candidates, sources, and approved entries.
- GitHub Pages HTTPS must be active before recommending the public URL.
