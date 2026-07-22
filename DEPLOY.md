# Chiaty Outdoor — Deployment Guide (GitHub + Vercel + Cloudflare R2 + Namecheap)

The site is built and verified locally. The GitHub repo is already created:
**https://github.com/CareLee1126/chiaty-outdoor** (currently empty).

Follow the steps below to go live. Steps 1–3 get you a working public URL; steps 4–5 add your domain and R2.

---

## 1. Push the code to GitHub

The code is committed locally. From this project folder, run **one** of these:

**Option A — GitHub CLI (easiest):**
```bash
gh auth login          # authenticate once (choose GitHub.com → HTTPS)
git remote add origin https://github.com/CareLee1126/chiaty-outdoor.git
git push -u origin main
```

**Option B — Personal Access Token (HTTPS):**
Create a token at https://github.com/settings/tokens (scope: `repo`), then:
```bash
git remote add origin https://github.com/CareLee1126/chiaty-outdoor.git
git push -u origin main
# when prompted: username = CareLee1126, password = <your token>
```

---

## 2. Import the repo into Vercel

1. Go to https://vercel.com/new
2. Select **CareLee1126/chiaty-outdoor**.
3. Vercel auto-detects **Vite**. Confirm settings:
   - Framework preset: **Vite**
   - Build command: `npm run build`
   - Output directory: `dist`
4. Click **Deploy**. In ~1 minute you'll get a live URL like `chiaty-outdoor.vercel.app`.

`vercel.json` (already in the repo) rewrites all routes to `index.html` so the
React Router pages (`/products`, `/about`, `/contact`) work on refresh/deep links.

Every future `git push` to `main` auto-deploys.

---

## 3. Verify

Open the Vercel URL, check the homepage, Products (50 products + filters), Factory, and Contact pages.

---

## 4. Connect your Namecheap domain

1. In Vercel: **Project → Settings → Domains → Add** both `www.chiatyoutdoor.com` and `chiatyoutdoor.com` (set `www` as primary and redirect the apex to it, or vice-versa).
2. Vercel shows the DNS records to set. In **Namecheap → Domain List → Manage → Advanced DNS**:
   - **www** (primary): add a **CNAME record** → Host `www` → Value `cname.vercel-dns.com`
   - **Apex domain** (`chiatyoutdoor.com`): add an **A record** → Host `@` → Value `76.76.21.21`
   - (Use the exact values Vercel shows you — they can vary.)
3. Wait for DNS to propagate (minutes to a few hours). Vercel auto-issues HTTPS for `www.chiatyoutdoor.com`.

> Alternatively, change the Namecheap nameservers to Vercel's and let Vercel manage DNS.

---

## 5. (Optional) Cloudflare R2 for image hosting

Currently all images (50 product photos + hero/factory/QC) are bundled in the
repo under `public/assets/images/` and served by Vercel's CDN — this already
works and is fast. Move to R2 only if you want to offload large media or manage
images separately.

1. Cloudflare dashboard → **R2** → create a bucket, e.g. `chiaty-assets`.
2. Upload the contents of `public/assets/images/` to the bucket.
3. Enable a public access domain (R2 public bucket or a custom `cdn.chiaty.com`
   via Cloudflare).
4. In the code, replace `/assets/images/...` paths with your R2 base URL. The
   product image paths live in `src/data/products.js`; hero/factory/QC paths are
   in `src/pages/Home.jsx` and `src/pages/About.jsx`.

---

## Before you go live — update these

Edit `src/data/company.js` with your real details:
- `CONTACT.email`, `CONTACT.phone`, `CONTACT.whatsapp` (already set)
- Factory stats / certifications if your real figures differ

The inquiry form uses a `mailto:` link to `CONTACT.email`. To capture leads in a
database or send to a CRM instead, that can be wired up later.
