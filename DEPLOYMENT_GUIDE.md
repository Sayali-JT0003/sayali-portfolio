# 🚀 Sayali Thombare — Portfolio Deployment Guide
### From Zero to Live on Netlify

---

## 📁 Project Structure

```
sayali-portfolio/
├── public/
│   └── index.html
├── src/
│   ├── App.jsx       ← Main portfolio component
│   ├── App.css       ← All styles
│   └── index.js      ← React entry point
├── package.json
└── .gitignore
```

---

## 🛠️ Step 1 — Install Node.js

1. Go to **https://nodejs.org** → Download **LTS version**
2. Install it (just click Next → Next → Finish)
3. Verify installation — open **Terminal / Command Prompt** and type:

```bash
node -v   # Should show v18.x.x or higher
npm -v    # Should show 9.x.x or higher
```

---

## 📦 Step 2 — Set Up the Project

1. Create a folder called `sayali-portfolio` on your Desktop or anywhere
2. Copy all provided files into it (keeping the folder structure above)
3. Open **Terminal** and navigate to the project:

```bash
cd Desktop/sayali-portfolio
```

4. Install all dependencies:

```bash
npm install
```

This will take 1–2 minutes and create a `node_modules/` folder.

---

## 👀 Step 3 — Run Locally (Preview)

```bash
npm start
```

Your browser will automatically open **http://localhost:3000**
You'll see your portfolio live! Any changes you save will auto-refresh.

To stop the server: Press `Ctrl + C` in the terminal.

---

## 🏗️ Step 4 — Build for Production

```bash
npm run build
```

This creates an optimized `build/` folder — this is what Netlify will deploy.

---

## 🐙 Step 5 — Push to GitHub

### 5a. Create a GitHub account
Go to **https://github.com** → Sign up (free)

### 5b. Install Git
Download from **https://git-scm.com** → Install with defaults

### 5c. Configure Git (one-time setup)
```bash
git config --global user.name "Sayali Thombare"
git config --global user.email "thombare.sayali16@gmail.com"
```

### 5d. Create a new GitHub repository
1. Go to **github.com** → Click **"New"** (green button)
2. Name it: `sayali-portfolio`
3. Keep it **Public**
4. **Do NOT** add README or .gitignore
5. Click **"Create repository"**

### 5e. Push your code
In your terminal (inside the project folder):

```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/sayali-portfolio.git
git push -u origin main
```

> ⚠️ Replace `YOUR_USERNAME` with your actual GitHub username

---

## 🌐 Step 6 — Deploy on Netlify

### 6a. Create Netlify account
Go to **https://netlify.com** → Sign up with GitHub (recommended)

### 6b. Connect your repository
1. In Netlify Dashboard → Click **"Add new site"** → **"Import an existing project"**
2. Choose **GitHub** → Authorize Netlify
3. Select your `sayali-portfolio` repository

### 6c. Configure build settings
Netlify will auto-detect these, but verify:

| Setting | Value |
|---------|-------|
| Build command | `npm run build` |
| Publish directory | `build` |
| Node version | `18` (or higher) |

### 6d. Deploy!
Click **"Deploy site"** — Netlify will:
1. Pull your code from GitHub
2. Run `npm run build`
3. Publish the `build/` folder

This takes about **1–2 minutes**.

---

## ✨ Step 7 — Get Your Live URL

After deployment, Netlify gives you a URL like:
```
https://random-name-123abc.netlify.app
https://sayali-jt.netlify.app
```

### Change to a custom name:
1. Site Settings → **"Change site name"**
2. Enter: `sayali-thombare` 
3. Your URL becomes: `https://sayali-thombare.netlify.app`

---

## 🔄 Step 8 — Update Your Portfolio Later

Whenever you want to make changes:

1. Edit files in VS Code
2. Save changes
3. Run these commands:

```bash
git add .
git commit -m "Update: describe what you changed"
git push
```

Netlify **automatically detects** the push and redeploys within 1–2 minutes! 🎉

---

## 🔧 Optional: Add a .gitignore file

Create a file named `.gitignore` in your project root:

```
node_modules/
build/
.env
.DS_Store
```

---

## 🆓 Netlify Free Plan Limits

| Feature | Free Tier |
|---------|-----------|
| Sites | Unlimited |
| Bandwidth | 100 GB/month |
| Build minutes | 300 min/month |
| Custom domain | ✅ Yes (free) |
| HTTPS/SSL | ✅ Auto |
| CDN | ✅ Global |

This is more than enough for a portfolio!

---

## 🌐 Optional: Custom Domain (e.g. sayalitombare.com)

1. Buy a domain from GoDaddy / Namecheap (~₹800–1500/year)
2. In Netlify → Site Settings → **Domain Management** → Add custom domain
3. Update DNS records at your domain registrar as Netlify instructs
4. HTTPS is automatically enabled ✅

---

## ❓ Troubleshooting

| Problem | Solution |
|---------|----------|
| `npm install` fails | Check Node.js version: `node -v` (need v16+) |
| Page blank after deploy | Check build command is `npm run build` |
| Build fails on Netlify | Add `CI=false` as environment variable in Site Settings |
| Git push rejected | Make sure you're on `main` branch: `git branch -M main` |
| Site not updating | Check Netlify deploy logs for errors |

---

## ✅ Final Checklist

- [ ] Node.js installed
- [ ] `npm install` completed successfully
- [ ] `npm start` shows portfolio locally
- [ ] `npm run build` creates a `build/` folder
- [ ] Code pushed to GitHub
- [ ] Site deployed on Netlify
- [ ] Custom site name set
- [ ] Portfolio URL working in browser 🎉

---

**Your portfolio will be live at:** `https://sayali-thombare.netlify.app`

*Built with React 18 · Deployed on Netlify · © Sayali Thombare 2025*
