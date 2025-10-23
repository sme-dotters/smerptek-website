#!/bin/bash

# SMERP TEK - Railway Deployment Script
# This script automates the deployment process to Railway

set -e

echo "🚀 Starting Railway Deployment for SMERP TEK"
echo "=============================================="

# Check if Railway CLI is installed
if ! command -v railway &> /dev/null; then
    echo "❌ Railway CLI is not installed"
    echo "Install it with: npm install -g @railway/cli"
    exit 1
fi

echo "✅ Railway CLI found"

# Check if logged in
if ! railway whoami &> /dev/null; then
    echo "❌ Not logged in to Railway"
    echo "Run: railway login"
    exit 1
fi

echo "✅ Logged in to Railway"

# Link to project if not already linked
if ! railway status &> /dev/null; then
    echo "📦 Linking to Railway project..."
    railway link
fi

echo "✅ Project linked"

# Set environment variables
echo "🔐 Setting environment variables..."

# Generate a secure NEXTAUTH_SECRET if not exists
NEXTAUTH_SECRET=$(openssl rand -base64 32 2>/dev/null || echo "change-this-in-production-$(date +%s)")

railway variables --set "NEXTAUTH_SECRET=$NEXTAUTH_SECRET"
railway variables --set "NEXTAUTH_URL=https://smerptek-website-production.up.railway.app"
railway variables --set "NODE_ENV=production"

echo "✅ Environment variables set"

# Generate Prisma Client
echo "🔨 Generating Prisma Client..."
npx prisma generate

# Build the application
echo "🏗️  Building application..."
npm run build

# Deploy to Railway
echo "🚀 Deploying to Railway..."
railway up --detach

echo ""
echo "✅ Deployment initiated!"
echo "📊 Check deployment status: railway status"
echo "🔗 View logs: railway logs"
echo "🌐 View project: https://railway.com/project/bf11a721-7920-4940-bd78-e51ce48b9270"
echo ""
echo "⚠️  Don't forget to run migrations after deployment:"
echo "   railway run npx prisma migrate deploy"
