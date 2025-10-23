# Railway Deployment Guide for SMERP TEK

## Project Created
✅ Railway Project: **smerptek-website**
🔗 URL: https://railway.com/project/bf11a721-7920-4940-bd78-e51ce48b9270

## Step 1: Add PostgreSQL Database (Via Dashboard)

1. Go to your Railway project: https://railway.com/project/bf11a721-7920-4940-bd78-e51ce48b9270
2. Click **"New"** button
3. Select **"Database"**
4. Choose **"Add PostgreSQL"**
5. Railway will automatically provision the database and set `DATABASE_URL` environment variable

## Step 2: Add Next.js Service (Via Dashboard)

### Option A: Deploy from Local (Recommended)
1. In your project dashboard, click **"New"**
2. Select **"Empty Service"**
3. Name it "smerptek-website-app"
4. We'll deploy via CLI (instructions below)

### Option B: Deploy from GitHub
1. In your project dashboard, click **"New"**
2. Select **"GitHub Repo"**
3. Connect and select your repository
4. Railway will auto-detect Next.js and deploy

## Step 3: Configure Environment Variables

After creating the service, add these variables in the Railway dashboard under your service settings:

```bash
# NextAuth Configuration
NEXTAUTH_URL=https://smerptek-website-production.up.railway.app
NEXTAUTH_SECRET=<generated-secret-will-be-set-automatically>

# Admin Credentials
ADMIN_EMAIL=salehelhalik@gmail.com
ADMIN_PASSWORD=<your-secure-password>

# Node Environment
NODE_ENV=production

# Database URL (automatically set by Railway when you add PostgreSQL)
DATABASE_URL=<automatically-set-by-railway>
```

## Step 4: Deploy Application

### Using CLI (After completing Steps 1-2):

```bash
# From project root
cd C:\Development\smerptek-website\smerp-tek

# Link to the service you created
railway service

# Deploy
railway up
```

### Or use our deployment script:

```bash
bash deploy-railway.sh
```

## Step 5: Run Database Migrations

After successful deployment:

```bash
# Run migrations on Railway
railway run npx prisma migrate deploy

# Or connect to Railway shell
railway run bash
# Then inside the shell:
npx prisma migrate deploy
```

## Step 6: Verify Deployment

1. Check deployment status:
   ```bash
   railway status
   ```

2. View logs:
   ```bash
   railway logs
   ```

3. Access your application:
   - Railway will provide a public URL
   - Check your service settings for the generated URL

## Quick Deploy Checklist

- [ ] PostgreSQL database added via Railway dashboard
- [ ] Empty service or GitHub repo connected
- [ ] Environment variables configured
- [ ] Application deployed (`railway up`)
- [ ] Database migrations run (`railway run npx prisma migrate deploy`)
- [ ] Application accessible via public URL

## Troubleshooting

### Build Fails
- Ensure `nixpacks.toml` is present (already created)
- Check Railway logs: `railway logs`

### Database Connection Issues
- Verify `DATABASE_URL` is set in environment variables
- Check PostgreSQL service is running

### Environment Variables Not Working
- Make sure variables are set in the correct service (not the database service)
- Redeploy after changing variables: `railway up`

## Useful Commands

```bash
# View all variables
railway variables

# Set a variable
railway variables --set KEY=value

# Open Railway dashboard
railway open

# Connect to database
railway connect postgres

# Run command in Railway environment
railway run <command>

# View service logs
railway logs --follow
```

## Next Steps After Deployment

1. **Set up Custom Domain** (Optional)
   - Go to service settings → Domains
   - Add your custom domain

2. **Enable Auto-Deploy from GitHub**
   - Connect GitHub repository
   - Enable auto-deploy on push

3. **Set up Database Backups**
   - Railway automatically backs up PostgreSQL
   - Check backup settings in database service

4. **Monitor Application**
   - Use Railway's built-in monitoring
   - Set up alerts for errors

## Support

- Railway Docs: https://docs.railway.com
- Railway Discord: https://discord.gg/railway
- Project Dashboard: https://railway.com/project/bf11a721-7920-4940-bd78-e51ce48b9270
