# Jiayu Tang – Personal Website

A clean, academic personal website built with plain HTML, CSS, and JavaScript.
No frameworks, no build tools — works by opening `index.html` in a browser.

---

## Files

| File | Description |
|------|-------------|
| `index.html` | All page content |
| `style.css` | Styling (colors, layout, responsive) |
| `script.js` | Mobile nav, scroll effects |
| `CV_Jiayu_Tang.pdf` | CV download link **(you must add this file)** |
| `photo.jpg` | Profile photo **(you must add this file, optional)** |

---

## Add Your Profile Photo

1. Save your photo as **`photo.jpg`** in this folder
2. Open `index.html` and find this block (around line 65):
   ```html
   <!-- <img src="photo.jpg" alt="Jiayu Tang" class="avatar-img"> -->
   <div class="avatar-placeholder" ...>JT</div>
   ```
3. Delete the `<div class="avatar-placeholder">` line
4. Uncomment the `<img>` line (remove `<!--` and `-->`)

---

## Add Your Google Scholar Link

1. Go to [scholar.google.com](https://scholar.google.com) and search your name
2. Click your profile — copy the URL from your browser
3. Open `index.html` and find:
   ```html
   <a href="#" class="chip chip-outline" ...>Google Scholar</a>
   ```
4. Replace `#` with your Google Scholar URL

---

## Deploy to GitHub Pages (Free Hosting)

### Step 1 — Create a GitHub account
Visit [github.com](https://github.com) and sign up (free).

### Step 2 — Create a repository
- Click **New repository**
- Name it **exactly**: `[your-username].github.io`
  *(e.g. if your username is `jiayutang`, name it `jiayutang.github.io`)*
- Set visibility to **Public**
- Click **Create repository**

### Step 3 — Upload your files
In the repository, click **"Add file" → "Upload files"** and upload:
- `index.html`
- `style.css`
- `script.js`
- `CV_Jiayu_Tang.pdf`
- `photo.jpg` (if you have one)

Click **Commit changes**.

### Step 4 — Enable GitHub Pages
- Go to your repository **Settings** tab
- Scroll down to **Pages** (left sidebar)
- Under "Source", select **Deploy from a branch**
- Set branch to `main`, folder to `/ (root)`
- Click **Save**

### Step 5 — Your site is live!
Within 1–2 minutes, your website will be available at:
```
https://[your-username].github.io
```

---

## Get Indexed on Google

After your site is live:

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click **"Add property"** → enter your URL (`https://[username].github.io`)
3. Verify ownership (Google provides a few methods — the HTML file method is easiest)
4. Click **"Request Indexing"** on your URL

Google will crawl and index your site within days to a few weeks.
The site already includes SEO meta tags and structured data (JSON-LD) to help Google understand your page.

---

## Updating the Website

To update any content, edit `index.html` locally, then:
1. Go to your GitHub repository
2. Click the `index.html` file → click the **pencil icon** (Edit)
3. Paste your updated content and click **Commit changes**

Changes go live automatically within ~30 seconds.

---

## Customize Colors

Open `style.css` and edit the CSS variables at the top:

```css
:root {
  --navy:  #1e3a5f;   /* main dark color (navbar, headings) */
  --blue:  #2563eb;   /* accent color (links, badges, borders) */
  ...
}
```

Change `#2563eb` to any color you prefer — for example:
- Green: `#16a34a`
- Teal: `#0f766e`
- Purple: `#7c3aed`
