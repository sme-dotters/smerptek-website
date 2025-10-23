# SMERP TEK - Deployment Guide

## 🚀 Ready to Deploy

Your SMERP TEK website is now complete with all public pages! Here's how to deploy to production.

## ✅ Pre-Deployment Checklist

Before deploying, verify:

- [ ] All pages load locally (`npm run dev`)
- [ ] Production build succeeds (`npm run build`)
- [ ] No TypeScript errors (`npx tsc --noEmit`)
- [ ] Environment variables documented
- [ ] Git repository pushed to GitHub

## 📋 What's Deployed

### Public Pages (13 pages - 100% Complete)
✅ Home
✅ Solutions
✅ Products Overview
✅ SMERP EDU
✅ SMERPs Crew
✅ SMERP Automate
✅ SMERPs Analytics
✅ Pricing (with monthly/annual toggle)
✅ About
✅ Contact
✅ Blog (listing page)
✅ Privacy Policy
✅ Terms of Service

### Technical Features
✅ Responsive navigation with mobile menu
✅ SEO metadata on all pages
✅ Sitemap.xml (auto-generated)
✅ Robots.txt
✅ Contact form API route
✅ Complete design system
✅ Prisma database schema

## 🌐 Step 1: Push to GitHub

If you haven't already pushed to GitHub:

```bash
# Create repository on GitHub (https://github.com/new)
# Name it: smerp-tek-website

# In your local project:
cd C:\Development\smerp-tek

# Add remote
git remote add origin https://github.com/yourusername/smerp-tek-website.git

# Push
git branch -M main
git push -u origin main
```

## ☁️ Step 2: Deploy to Vercel

### Option A: Vercel Dashboard (Easiest)

1. Go to https://vercel.com/new
2. Sign in with GitHub
3. Click "Import Project"
4. Select your `smerp-tek-website` repository
5. Configure:
   - **Framework Preset:** Next.js
   - **Root Directory:** `./`
   - **Build Command:** `next build`
   - **Output Directory:** `.next`
6. Click "Deploy"

### Option B: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
cd C:\Development\smerp-tek
vercel

# Follow prompts:
# - Link to existing project? No
# - Project name: smerp-tek
# - Directory: ./
# - Override settings? No

# Production deployment
vercel --prod
```

## 🗄️ Step 3: Set Up Database (Railway)

### Why Railway?
- Free tier available
- PostgreSQL optimized for production
- Easy Vercel integration
- Auto-backups

### Setup Steps

1. **Create Railway Account**
   - Go to https://railway.app
   - Sign up with GitHub

2. **Create New Project**
   ```bash
   # Install Railway CLI
   npm install -g @railway/cli

   # Login
   railway login

   # Create project
   railway init

   # Add PostgreSQL
   railway add
   # Select: PostgreSQL
   ```

3. **Get Database URL**
   ```bash
   railway variables
   ```
   Copy the `DATABASE_URL` value

4. **Add to Vercel**
   - Go to Vercel Dashboard → Your Project → Settings → Environment Variables
   - Add variable:
     - **Name:** `DATABASE_URL`
     - **Value:** (paste Railway DATABASE_URL)
     - **Environments:** Production, Preview, Development

## 🔐 Step 4: Configure Environment Variables

In Vercel Dashboard → Settings → Environment Variables, add:

### Required Variables

```env
# Database
DATABASE_URL=postgresql://... (from Railway)

# NextAuth (generate secret first)
NEXTAUTH_URL=https://www.smerptek.com
NEXTAUTH_SECRET=<generate-with-command-below>

# Admin Credentials
ADMIN_EMAIL=salehelhalik@gmail.com
ADMIN_PASSWORD=Smerptek03554939!
```

### Generate NEXTAUTH_SECRET

**Windows PowerShell:**
```powershell
[Convert]::ToBase64String((1..32 | ForEach-Object { Get-Random -Minimum 0 -Maximum 256 }))
```

**macOS/Linux:**
```bash
openssl rand -base64 32
```

**Or use:** https://generate-secret.vercel.app/32

### Optional Variables (Add Later)

```env
# Email Service (for form notifications)
RESEND_API_KEY=re_xxxxx
EMAIL_FROM=hello@smerptek.com

# File Uploads (if adding file upload feature)
UPLOADTHING_SECRET=sk_xxxxx
UPLOADTHING_APP_ID=xxxxx
```

## 🏗️ Step 5: Run Database Migrations

After deploying and adding DATABASE_URL:

```bash
# Generate Prisma client
npm run prisma:generate

# Run migrations (creates tables)
npm run prisma:migrate

# Seed initial data (optional)
npx prisma db seed
```

**Note:** You can also run migrations directly in Railway:
```bash
railway run npx prisma migrate deploy
```

## 🌍 Step 6: Configure Custom Domain

### Purchase Domain
- Recommended: Namecheap, GoDaddy, or use existing domain
- Domain: **www.smerptek.com**

### Add to Vercel

1. Vercel Dashboard → Your Project → Settings → Domains
2. Click "Add Domain"
3. Enter: `www.smerptek.com`
4. Follow DNS configuration instructions

### DNS Configuration

Add these records in your domain registrar:

**For www.smerptek.com:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

**For root domain (smerptek.com):**
```
Type: A
Name: @
Value: 76.76.21.21
TTL: 3600
```

**SSL Certificate:** Automatically provisioned by Vercel (takes 1-5 minutes)

## ✅ Step 7: Post-Deployment Verification

### Test Checklist

Visit your live site and verify:

- [ ] **Home page** loads correctly
- [ ] **Navigation** works (all links clickable)
- [ ] **Mobile menu** functions properly (resize browser)
- [ ] **Solutions page** displays service packages
- [ ] **Products pages** all accessible
- [ ] **Pricing toggle** switches between monthly/annual
- [ ] **About page** renders team info
- [ ] **Contact form** shows (backend will work once DB is connected)
- [ ] **Blog page** loads
- [ ] **Legal pages** (Privacy, Terms) accessible
- [ ] **Sitemap** accessible: `https://www.smerptek.com/sitemap.xml`
- [ ] **Robots.txt** accessible: `https://www.smerptek.com/robots.txt`

### Performance Testing

```bash
# Install Lighthouse CLI
npm install -g lighthouse

# Run audit
lighthouse https://www.smerptek.com --view
```

**Target Scores:**
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

## 🔄 Step 8: Set Up Continuous Deployment

Your site now auto-deploys on every push to `main`!

### Workflow

```bash
# Make changes locally
# Edit files...

# Commit and push
git add .
git commit -m "feat: update homepage copy"
git push

# Vercel automatically:
# 1. Detects push
# 2. Runs build
# 3. Deploys to production
# 4. Updates live site (2-3 minutes)
```

### Preview Deployments

Every branch and PR gets a preview URL:
```bash
git checkout -b feature/new-section
# Make changes
git push origin feature/new-section
# Vercel creates preview: https://smerp-tek-abc123.vercel.app
```

## 📊 Step 9: Set Up Analytics (Optional)

### Google Analytics 4

1. Create GA4 property: https://analytics.google.com
2. Get Measurement ID (format: `G-XXXXXXXXXX`)
3. Add to Vercel Environment Variables:
   ```env
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
4. Add to `app/layout.tsx`:
   ```typescript
   <Script
     src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
     strategy="afterInteractive"
   />
   ```

### Vercel Analytics (Recommended)

1. Vercel Dashboard → Your Project → Analytics
2. Click "Enable"
3. Automatic - no code changes needed!

## 🔍 Step 10: Submit to Search Engines

### Google Search Console

1. Go to https://search.google.com/search-console
2. Add property: `www.smerptek.com`
3. Verify ownership (DNS or HTML file)
4. Submit sitemap: `https://www.smerptek.com/sitemap.xml`

### Bing Webmaster Tools

1. Go to https://www.bing.com/webmasters
2. Add site: `www.smerptek.com`
3. Verify ownership
4. Submit sitemap

## 🛠️ Troubleshooting

### Build Fails

```bash
# Check for errors locally first
npm run build

# Common fixes:
npm run lint
npx tsc --noEmit
```

### Database Connection Issues

```bash
# Test connection
npx prisma db pull

# If fails, verify:
# 1. DATABASE_URL is correct
# 2. Railway database is running
# 3. IP whitelist includes Vercel (Railway → Settings → Add 0.0.0.0/0)
```

### Environment Variables Not Working

- Redeploy after adding variables: Vercel Dashboard → Deployments → Latest → Redeploy
- Check variable names (case-sensitive)
- Ensure no trailing spaces

### Domain Not Connecting

- Wait 24-48 hours for DNS propagation
- Verify DNS records: https://dnschecker.org
- Check SSL certificate status in Vercel

## 📈 Monitoring & Maintenance

### Daily
- Check Vercel Dashboard for deployment status
- Monitor error logs (Vercel → Your Project → Logs)

### Weekly
- Review form submissions (once admin CMS is built)
- Check uptime: https://uptimerobot.com (free monitoring)

### Monthly
- Run Lighthouse audit
- Update dependencies: `npm update`
- Review analytics for traffic patterns

## 🎉 You're Live!

Your SMERP TEK website is now deployed and accessible at:
**https://www.smerptek.com**

### What's Next?

**Phase 2: Admin CMS** (Optional)
- Build authentication with NextAuth
- Create admin dashboard at `/superadmindev`
- Implement content managers for Pages, Blog, Products
- Add form submission viewer

**See:** `NEXT-STEPS.md` for detailed Phase 2 roadmap

### Getting Help

- **Vercel Docs:** https://vercel.com/docs
- **Next.js Docs:** https://nextjs.org/docs
- **Railway Docs:** https://docs.railway.app
- **Project Docs:** See `README_DOCUMENTATION/`

---

**Deployment Status:** ✅ Ready
**Estimated Time:** 1-2 hours (first time)
**Cost:** $0/month (using free tiers)

🚀 **Happy Deploying!**
