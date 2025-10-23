# 🚀 Railway Deployment - Quick Start Guide

## ✅ Automated Setup Complete

All configuration files and automation scripts have been created and are ready to use!

### What's Been Done:
- ✅ Railway project created: `smerptek-website`
- ✅ Configuration files created (`railway.json`, `nixpacks.toml`)
- ✅ Deployment scripts prepared
- ✅ Documentation written
- ✅ Prisma migrations structure ready
- ✅ All files committed to git

---

## 🎯 Three Manual Steps Required

### 1️⃣ Add PostgreSQL Database (2 minutes)

**Go to:** https://railway.com/project/bf11a721-7920-4940-bd78-e51ce48b9270

1. Click **"New"** button
2. Select **"Database"**
3. Choose **"Add PostgreSQL"**
4. Done! ✅ (DATABASE_URL is automatically set)

---

### 2️⃣ Create Application Service (2 minutes)

**Choose ONE option:**

**Option A - Deploy from GitHub (Recommended):**
1. Click **"New"** → **"GitHub Repo"**
2. Connect your repository
3. Select `smerptek-website`
4. Railway auto-deploys! ✅

**Option B - Deploy from Local:**
1. Click **"New"** → **"Empty Service"**
2. Name it: `smerptek-website-app`
3. We'll deploy via CLI in step 4

---

### 3️⃣ Set Environment Variables (3 minutes)

In your **application service** (not database):

1. Go to **"Variables"** tab
2. Add these variables:

```bash
NEXTAUTH_URL=https://your-app-url.up.railway.app
NEXTAUTH_SECRET=<click Generate button or use: openssl rand -base64 32>
ADMIN_EMAIL=salehelhalik@gmail.com
ADMIN_PASSWORD=Smerptek03554939!
NODE_ENV=production
```

**Note:** Get your actual Railway URL from service settings → Domains

---

## 🚀 Automated Deployment

After completing steps 1-3 above, run:

```powershell
# Windows PowerShell
.\complete-deployment.ps1
```

Or manually:

```bash
# Generate Prisma Client
npx prisma generate

# Build application
npm run build

# Link to your service (if Option B)
railway service

# Deploy
railway up

# Run migrations
railway run npx prisma migrate deploy
```

---

## 📚 Detailed Documentation

- **DEPLOYMENT_STATUS.md** - Complete step-by-step guide with troubleshooting
- **RAILWAY_SETUP.md** - Comprehensive Railway setup instructions
- **deploy-railway.sh** - Bash deployment script (Linux/Mac)
- **complete-deployment.ps1** - PowerShell deployment script (Windows)

---

## ✅ Verification Checklist

After deployment:

- [ ] Railway shows "Active" status
- [ ] Application loads at Railway URL
- [ ] No errors in logs: `railway logs`
- [ ] Database connected (test contact form)
- [ ] Check Prisma Studio: `railway run npx prisma studio`

---

## 🆘 Quick Troubleshooting

**Build fails?**
```bash
railway logs  # Check error messages
```

**Database connection issues?**
```bash
railway variables  # Verify DATABASE_URL is set
```

**Need to rerun migrations?**
```bash
railway run npx prisma migrate deploy
```

---

## 📞 Support Links

- **Your Railway Project:** https://railway.com/project/bf11a721-7920-4940-bd78-e51ce48b9270
- **Railway Docs:** https://docs.railway.com
- **Railway Discord:** https://discord.gg/railway

---

## 🎉 That's It!

Three manual steps → Run automation script → Your app is live!

**Current Deployments:**
- 🔵 Vercel: https://smerp-78ztsm5vp-sme-dotters-projects.vercel.app
- 🟣 Railway: (URL will be assigned after deployment)

---

**Need Help?** Check DEPLOYMENT_STATUS.md for detailed instructions and troubleshooting!
