# Zomi Dictionary — Studio Edition v3

A refreshed free GitHub Pages website for the Zomi Language Heritage Project.

## Features
- Modern responsive visual design and language heritage presentation.
- 1,366 **unverified** research candidates from the earlier collection, unchanged.
- Tedim Zomi ↔ English search direction, relevance ordering, A–Z browsing, random word.
- Saved words (stored only in the visitor's own browser), copy word and meaning, show-more pagination.
- Approved entries loaded separately from `approved.json` and clearly labeled.
- Community contribution button connected to a **public Google Forms responder URL** via `config.js`.
- No paid hosting or server needed. The site does **not** collect submissions until a Google Form is connected.

## Publish on GitHub Pages
1. Open https://github.com/singkkhai/zomidictionary and select the branch set in **Settings → Pages** (previously `zomilexicon`).
2. Extract this ZIP, then upload/replace these files at the **repository root**: `index.html`, `style.css`, `app.js`, `candidates.json`, `approved.json`, `config.js`, `CNAME`.
3. Commit. GitHub Pages should deploy the new design. Refresh with **Ctrl+Shift+R**.
4. Leave `CNAME` exactly `zomidictionary.singkhai.com`. Do not upload the ZIP itself.

## Enable visitor contributions (free)
1. Create a Google Form at https://forms.google.com named "Contribute a Tedim Zomi Word".
2. Add questions for Zomi word, English meaning, example, spelling/pronunciation notes, and source. Make contributor contact optional; do not require sign-in unless needed to control abuse.
3. Under **Responses**, connect the form to a **private** Google Sheet. Do not expose the private Sheet publicly.
4. Copy the **public responder link**, not the form editing URL.
5. Edit `config.js` in GitHub, setting `window.ZOMI_CONTRIBUTE_FORM_URL = "https://forms.gle/...";` and commit.
6. Review submissions in your private Sheet. After independent verification, manually add approved entries to `approved.json`, using `status: "approved"`. GitHub Pages then displays them.

## Accuracy and privacy
The 1,366 entries are unverified research candidates; do not label them verified without review. The website does not send favorites or search queries to a server; saved words use local browser storage. The external Google Fonts CDN is optional for typography. This is a static site, not a secure administrator dashboard.
