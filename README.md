# Burhanuddin Lokhandwala — Developer Portfolio

A production-grade, dark-theme personal portfolio website built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**, inspired by modern creative developer studios.

---

## 🎨 Design Tokens & Palette

- `--bg`: `#07090F` (Midnight near-black page background)
- `--bg-elevated`: `#0E1220` (Nav on scroll, inputs, raised surfaces)
- `--glass`: `rgba(255, 255, 255, 0.04)` (Card surface fill)
- `--border`: `rgba(255, 255, 255, 0.10)`
- `--border-hover`: `rgba(124, 140, 255, 0.45)`
- `--text`: `#F3F4F8`
- `--text-muted`: `#9AA0B4`
- `--accent`: `#7C8CFF` (Periwinkle: dots, lines, chevrons, glows)
- `--accent-deep`: `#2B3380` (Background glows & isometric depth panels)
- `--btn-light`: `#E9ECFF` (Primary button fill with dark text)

### Typography
- **Headings & Body:** *Plus Jakarta Sans*
- **Monospace Tokens & Labels:** *JetBrains Mono*

---

## 🚀 Quick Start (Local Development)

### 1. Prerequisites
- Node.js (v18 or higher)
- npm or pnpm

### 2. Installation
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for Production
```bash
npm run build
```
Generates production-optimized static assets in the `dist/` directory.

### 5. Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deploy to Vercel

### Option 1: Via Vercel CLI (Recommended)
1. Install Vercel CLI globally (if not already installed):
   ```bash
   npm i -g vercel
   ```
2. Run deployment:
   ```bash
   vercel
   ```
3. For production release:
   ```bash
   vercel --prod
   ```

### Option 2: Via GitHub Integration
1. Push this repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete portfolio implementation"
   git push origin master
   ```
2. Navigate to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Framework Preset will be automatically detected as **Vite**.
5. (Optional) In **Environment Variables**, add:
   - `RESEND_API_KEY` (from [resend.com/api-keys](https://resend.com/api-keys))
   - `CONTACT_RECIPIENT_EMAIL` (`burlokh23@gmail.com`)
6. Click **Deploy**.

---

## 📝 Editing Portfolio Content

All copy, profile information, skills, project case studies, and career journey milestones are centralized in a single file:
```
src/data.js
```
You can update your resume link, projects, or contact details without touching any React component markup.

---

## 🛡️ License
Private © 2026 Burhanuddin Lokhandwala. All rights reserved.

