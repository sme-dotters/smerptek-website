# Setup Guide

## Prerequisites

### Required Software
- **Node.js:** 18.17 or higher (LTS recommended)
- **npm:** 9.x or higher (comes with Node.js)
- **Git:** 2.x or higher
- **PostgreSQL:** 14+ (local or Railway)
- **Code Editor:** VS Code recommended

### Optional Tools
- **Railway CLI:** For database management
- **Vercel CLI:** For deployment
- **Prisma Studio:** GUI for database (included via npm script)

## Installation Steps

### 1. Clone the Repository

```bash
cd C:\Development
# If from GitHub
git clone https://github.com/yourusername/smerp-tek-website.git smerp-tek
cd smerp-tek

# If starting fresh with this codebase
# Already in C:\Development\smerp-tek
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required packages:
- Next.js 14.2.18
- React 18.3.1
- TypeScript 5.6.3
- Tailwind CSS 3.4.15
- Prisma 6.1.0
- NextAuth v5 (beta)
- Radix UI components
- Framer Motion
- Lucide React icons
- And more (see package.json)

### 3. Environment Variables

Copy the example environment file:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your actual values:

```env
# Database - Required for production, optional for development
DATABASE_URL="postgresql://username:password@localhost:5432/smerptek"

# NextAuth - Required for admin authentication
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="generate-with-openssl-rand-base64-32"

# Admin Credentials - Required
ADMIN_EMAIL="salehelhalik@gmail.com"
ADMIN_PASSWORD="Smerptek03554939!"

# Optional: Email service (for form notifications)
# RESEND_API_KEY="re_xxxxx"
# EMAIL_FROM="hello@smerptek.com"

# Optional: File uploads
# UPLOADTHING_SECRET="sk_xxxxx"
# UPLOADTHING_APP_ID="xxxxx"
```

#### Generate NEXTAUTH_SECRET

On macOS/Linux:
```bash
openssl rand -base64 32
```

On Windows (PowerShell):
```powershell
[Convert]::ToBase64String((1..32 | ForEach-Object { Get-Random -Minimum 0 -Maximum 256 }))
```

Or use an online generator: https://generate-secret.vercel.app/32

### 4. Database Setup

#### Option A: Railway (Recommended for Production)

1. Install Railway CLI:
```bash
npm install -g @railway/cli
```

2. Login to Railway:
```bash
railway login
```

3. Create new project:
```bash
railway init
```

4. Add PostgreSQL:
```bash
railway add
# Select PostgreSQL from the list
```

5. Get connection string:
```bash
railway variables
# Copy the DATABASE_URL value to your .env.local
```

#### Option B: Local PostgreSQL (Development)

1. Install PostgreSQL from https://www.postgresql.org/download/

2. Create database:
```bash
psql -U postgres
CREATE DATABASE smerptek;
\q
```

3. Update `.env.local`:
```env
DATABASE_URL="postgresql://postgres:yourpassword@localhost:5432/smerptek"
```

### 5. Generate Prisma Client

```bash
npm run prisma:generate
```

### 6. Run Database Migrations

```bash
npm run prisma:migrate
```

This will create all tables defined in `prisma/schema.prisma`.

### 7. Seed Initial Data (Optional)

Create a seed file `prisma/seed.ts` (example provided in next section) and run:

```bash
npx prisma db seed
```

### 8. Start Development Server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Verification Checklist

After setup, verify:

- [ ] Development server runs without errors
- [ ] Home page loads at http://localhost:3000
- [ ] Navbar and footer render correctly
- [ ] Mobile menu works (resize browser)
- [ ] Contact page loads at http://localhost:3000/contact
- [ ] Tailwind styles apply (check button colors, shadows)
- [ ] No console errors in browser
- [ ] Database connection successful (check terminal output)

## Common Issues & Solutions

### Issue: "Module not found" errors

**Solution:**
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue: Prisma client not generated

**Solution:**
```bash
npm run prisma:generate
```

### Issue: Database connection fails

**Solution:**
- Verify DATABASE_URL in .env.local
- Check PostgreSQL is running
- Test connection:
```bash
npx prisma db pull
```

### Issue: Port 3000 already in use

**Solution:**
```bash
# Kill process on port 3000
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux
lsof -ti:3000 | xargs kill -9

# Or use different port
PORT=3001 npm run dev
```

### Issue: Tailwind styles not applying

**Solution:**
- Restart dev server
- Clear .next folder:
```bash
rm -rf .next
npm run dev
```

## Optional: Prisma Studio

To view and edit database records visually:

```bash
npm run prisma:studio
```

Opens at http://localhost:5555

## Scripts Reference

```json
{
  "dev": "next dev",                     // Start dev server
  "build": "next build",                 // Build for production
  "start": "next start",                 // Start production server
  "lint": "next lint",                   // Run ESLint
  "prisma:generate": "prisma generate",  // Generate Prisma client
  "prisma:migrate": "prisma migrate dev",// Run migrations
  "prisma:studio": "prisma studio"       // Open Prisma Studio
}
```

## Example Seed File

Create `prisma/seed.ts`:

```typescript
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // Create admin user
  const hashedPassword = await bcrypt.hash('Smerptek03554939!', 10);

  const admin = await prisma.user.upsert({
    where: { email: 'salehelhalik@gmail.com' },
    update: {},
    create: {
      email: 'salehelhalik@gmail.com',
      password: hashedPassword,
      name: 'Admin User',
      role: 'admin',
    },
  });

  // Create sample products
  const products = [
    {
      name: 'SMERP EDU',
      slug: 'smerp-edu',
      description: 'Unified ERP for education and training institutes.',
      tagline: 'One platform for your entire institute',
      startingPrice: 1500,
      features: [
        { title: 'Student Management', description: 'Complete lifecycle tracking' },
        { title: 'Billing & Invoicing', description: 'Automated fee generation' },
      ],
      useCases: ['Schools', 'Training Centers', 'Universities'],
      integrations: ['QuickBooks', 'Zoom', 'Google Workspace'],
      ctaLabel: 'Learn More',
      ctaUrl: '/products/smerp-edu',
      active: true,
    },
    // Add more products...
  ];

  for (const product of products) {
    await prisma.product.upsert({
      where: { slug: product.slug },
      update: {},
      create: product,
    });
  }

  console.log('Seed data created successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
```

Add to `package.json`:

```json
{
  "prisma": {
    "seed": "ts-node --compiler-options {\"module\":\"CommonJS\"} prisma/seed.ts"
  }
}
```

Install ts-node:
```bash
npm install -D ts-node
```

## Next Steps

1. ✅ Complete setup (you are here)
2. → Read [02-ARCHITECTURE.md](./02-ARCHITECTURE.md) to understand project structure
3. → Follow [05-DEVELOPMENT-WORKFLOW.md](./05-DEVELOPMENT-WORKFLOW.md) to add new pages
4. → Review [03-COMPONENT-LIBRARY.md](./03-COMPONENT-LIBRARY.md) for available components

---

**Having issues?** Check the troubleshooting section or create an issue in the repository.
