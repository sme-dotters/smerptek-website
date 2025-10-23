# SMERP TEK - Simple Automated Railway Deployment
# No manual steps required!

Write-Host "`n🤖 SMERP TEK - Automated Railway Deployment`n" -ForegroundColor Cyan

Set-Location "C:\Development\smerptek-website\smerp-tek"

# Set project ID
$env:RAILWAY_PROJECT_ID = "bf11a721-7920-4940-bd78-e51ce48b9270"

Write-Host "🚀 Deploying to Railway..." -ForegroundColor Yellow
railway up --detach

Write-Host "`n⏳ Waiting for deployment..." -ForegroundColor Yellow
Start-Sleep -Seconds 20

Write-Host "`n🔧 Setting environment variables..." -ForegroundColor Yellow
$NEXTAUTH_SECRET = -join ((65..90) + (97..122) + (48..57) | Get-Random -Count 32 | ForEach-Object {[char]$_})

railway variables set NEXTAUTH_SECRET="$NEXTAUTH_SECRET"
railway variables set NODE_ENV="production"
railway variables set ADMIN_EMAIL="salehelhalik@gmail.com"
railway variables set ADMIN_PASSWORD="Smerptek03554939!"

Write-Host "`n🗄️  Running migrations..." -ForegroundColor Yellow
railway run npx prisma migrate deploy

Write-Host "`n✅ Deployment Complete!`n" -ForegroundColor Green
Write-Host "View status: railway status" -ForegroundColor Gray
Write-Host "View logs: railway logs`n" -ForegroundColor Gray
