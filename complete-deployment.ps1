# SMERP TEK - Complete Railway Deployment Script (PowerShell)
# Run this after completing manual steps in Railway dashboard

Write-Host "🚀 SMERP TEK - Railway Deployment Automation" -ForegroundColor Cyan
Write-Host "=============================================" -ForegroundColor Cyan
Write-Host ""

# Check prerequisites
Write-Host "📋 Checking prerequisites..." -ForegroundColor Yellow

# Check Railway CLI
try {
    $railwayVersion = railway --version 2>&1
    Write-Host "✅ Railway CLI installed: $railwayVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Railway CLI not found" -ForegroundColor Red
    Write-Host "Install with: npm install -g @railway/cli" -ForegroundColor Yellow
    exit 1
}

# Check if logged in
try {
    $whoami = railway whoami 2>&1
    Write-Host "✅ Logged in as: $whoami" -ForegroundColor Green
} catch {
    Write-Host "❌ Not logged in to Railway" -ForegroundColor Red
    Write-Host "Run: railway login" -ForegroundColor Yellow
    exit 1
}

# Check if project is linked
try {
    railway status 2>&1 | Out-Null
    Write-Host "✅ Railway project linked" -ForegroundColor Green
} catch {
    Write-Host "⚠️  No project linked" -ForegroundColor Yellow
    Write-Host "Linking to project..." -ForegroundColor Yellow
    railway link
}

Write-Host ""
Write-Host "🔍 Verifying manual steps completion..." -ForegroundColor Yellow
Write-Host ""
Write-Host "Please confirm you've completed these steps in Railway dashboard:" -ForegroundColor Cyan
Write-Host "1. ✅ Added PostgreSQL database" -ForegroundColor White
Write-Host "2. ✅ Created application service (Empty Service or GitHub Repo)" -ForegroundColor White
Write-Host "3. ✅ Configured environment variables (NEXTAUTH_URL, NEXTAUTH_SECRET, etc.)" -ForegroundColor White
Write-Host ""

$confirmation = Read-Host "Have you completed all manual steps? (y/N)"
if ($confirmation -ne 'y' -and $confirmation -ne 'Y') {
    Write-Host ""
    Write-Host "⚠️  Please complete the manual steps first!" -ForegroundColor Yellow
    Write-Host "See DEPLOYMENT_STATUS.md for detailed instructions" -ForegroundColor Cyan
    Write-Host "Railway Dashboard: https://railway.com/project/bf11a721-7920-4940-bd78-e51ce48b9270" -ForegroundColor Cyan
    exit 0
}

Write-Host ""
Write-Host "🔨 Generating Prisma Client..." -ForegroundColor Yellow
try {
    npx prisma generate
    Write-Host "✅ Prisma Client generated" -ForegroundColor Green
} catch {
    Write-Host "❌ Failed to generate Prisma Client" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "🏗️  Building application..." -ForegroundColor Yellow
try {
    npm run build
    Write-Host "✅ Application built successfully" -ForegroundColor Green
} catch {
    Write-Host "❌ Build failed" -ForegroundColor Red
    Write-Host "Check the error messages above and fix any issues" -ForegroundColor Yellow
    exit 1
}

Write-Host ""
Write-Host "🚀 Deploying to Railway..." -ForegroundColor Yellow
try {
    railway up --detach
    Write-Host "✅ Deployment initiated!" -ForegroundColor Green
} catch {
    Write-Host "❌ Deployment failed" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "⏳ Waiting for deployment to complete..." -ForegroundColor Yellow
Start-Sleep -Seconds 10

Write-Host ""
Write-Host "🗄️  Running database migrations..." -ForegroundColor Yellow
try {
    railway run npx prisma migrate deploy
    Write-Host "✅ Migrations completed successfully" -ForegroundColor Green
} catch {
    Write-Host "⚠️  Migration might have failed - check logs" -ForegroundColor Yellow
    Write-Host "You can run migrations manually: railway run npx prisma migrate deploy" -ForegroundColor Cyan
}

Write-Host ""
Write-Host "✅ Deployment Complete!" -ForegroundColor Green
Write-Host ""
Write-Host "📊 Next Steps:" -ForegroundColor Cyan
Write-Host "  • Check status: railway status" -ForegroundColor White
Write-Host "  • View logs: railway logs --follow" -ForegroundColor White
Write-Host "  • Open dashboard: start https://railway.com/project/bf11a721-7920-4940-bd78-e51ce48b9270" -ForegroundColor White
Write-Host "  • Test your app at the Railway-provided URL" -ForegroundColor White
Write-Host ""
Write-Host "🎉 Your SMERP TEK website is now deployed!" -ForegroundColor Green
Write-Host ""

# Ask if user wants to view logs
$viewLogs = Read-Host "Would you like to view deployment logs? (y/N)"
if ($viewLogs -eq 'y' -or $viewLogs -eq 'Y') {
    railway logs --follow
}
