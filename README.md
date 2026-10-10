# Zomi Dictionary — Free GitHub Pages Edition

A **static**, public, read-only dictionary site. No paid hosting, no Python runtime, no SQLite, no reviewer login, no secret credentials. **Initially 0 approved entries**, because the existing 1,366 research candidates have not passed independent editorial review. This is intentional.

## Important: your existing GitHub repository is Private

On a personal **GitHub Free** account, GitHub Pages generally requires a **public repository**. **Do not make your existing `zomilexicon` repository public**: it may contain candidate data and server files not meant for publication. Instead, create a *new* public repository named `zomidictionary-site`, and upload ONLY the six site files in this ZIP (`index.html`, `style.css`, `app.js`, `approved.json`, `CNAME`, `README.md`). The repository is public, so never add passwords, personal data, or unpublished review data. GitHub Pages availability and pricing can change; check GitHub's current documentation.

## Publish

1. GitHub → New repository → `zomidictionary-site` → **Public** → Create.
2. On its empty repository page choose **uploading an existing file** and upload the six files from this folder at the repository root. Commit.
3. Repository → **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**; branch **main**, folder **/(root)** → Save.
4. Wait for GitHub Pages to build. First test the GitHub-provided Pages URL in Settings → Pages. The `CNAME` file already requests `zomidictionary.singkhai.com`; GitHub may require domain verification or other account actions.
5. In Squarespace: **Settings → Domains → singkhai.com → DNS Settings** (menus vary by Squarespace version). Add a **CNAME** record: Host/Name `zomidictionary`, Points to/Value `<your-github-username>.github.io` (replace with your actual GitHub username; do NOT add `https://` or a path). If GitHub Pages provides an account-specific target, follow its current instructions. Do NOT modify existing `@` or `www` records.
6. In GitHub → Settings → Pages, verify the custom domain is `zomidictionary.singkhai.com`; wait for DNS and certificate provisioning; then enable **Enforce HTTPS** once available.
7. Visit `https://zomidictionary.singkhai.com` and confirm it loads securely. Add a navigation link to it in Squarespace.

**DNS safety:** Before modifying records, confirm the domain DNS is actually managed in Squarespace. If the nameservers are elsewhere, change DNS with the actual DNS host. Do not create an A record for this subdomain unless GitHub specifically requires it.

## How to add approved words

Only after a qualified reviewer checks a word and its meaning against reliable sources, edit `approved.json` in the public site repository, adding entries in this format:

```json
[
  {"zomi": "REVIEWED_ZOMI_WORD", "english": "REVIEWED_ENGLISH_MEANING", "status": "approved"}
]
```

The placeholders above are NOT real entries. Every published entry must include `"status":"approved"`. All 1,366 legacy candidate pairs remain unpublished. The original private `zomilexicon` repository can continue to hold the review application and candidate data. Never copy `seed.json`, `ZomiLexicon_Review_Database.json`, or an SQLite database into the public site.

## Limitations

- No secure reviewer dashboard, user accounts, collaborative editing, or database on GitHub Pages.
- Anyone can see the approved vocabulary JSON and public website code.
- This static search loads the approved dataset in a visitor's browser; for a very large lexicon, use precomputed indexes or a hosted search service later.
- A public site does not itself verify the accuracy of any entry; editorial checks remain essential.
