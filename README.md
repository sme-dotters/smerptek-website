# SMERP TEK Website

**Production-ready Next.js 14 website for SMERP TEK** - Modernizing digital operations for startups and SMEs across the UAE and GCC.

![Version](https://img.shields.io/badge/version-0.4.0-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-14.2-black.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue.svg)
![License](https://img.shields.io/badge/license-Proprietary-red.svg)

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your configuration

# Generate Prisma client
npm run prisma:generate

# Run database migrations (requires DATABASE_URL)
npm run prisma:migrate

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the website.

## ✨ What's Built

### Infrastructure ✅
- Next.js 14 with App Router
- TypeScript with strict mode
- Tailwind CSS with SMERP TEK design tokens
- Prisma ORM with complete schema
- Git repository

### Design System ✅
- Custom color palette (Primary #646CFF, Accent #FFC857)
- Typography system (Inter, Manrope, JetBrains Mono)
- Responsive breakpoints
- Accessible components (WCAG 2.2 AA)
- Reduced motion support

### Components ✅
- Button (4 variants)
- Card system
- Form inputs
- Navigation (Navbar + Footer)
- Responsive mobile menu

### Pages ✅
- **Home** - Fully implemented with 6 sections
- **Contact** - Form with validation structure

## 🚧 Still To Build

Priority roadmap for completion:

### Phase 1: Public Pages (2-3 weeks)
- [ ] Solutions page
- [ ] Products pages (4 products)
- [ ] Pricing page with comparison
- [ ] About page
- [ ] Resources (Blog, Guides, Templates)
- [ ] Legal pages (Privacy, Terms, Cookies)

### Phase 2: Admin CMS (2-3 weeks)
- [ ] NextAuth v5 authentication
- [ ] Admin dashboard
- [ ] Content management (Pages, Blog, Products)
- [ ] Form submissions viewer
- [ ] Rich text editor integration

### Phase 3: API & Features (1-2 weeks)
- [ ] Form submission handlers
- [ ] Newsletter signup
- [ ] File uploads
- [ ] Email notifications

### Phase 4: SEO & Deployment (1 week)
- [ ] Structured data (JSON-LD)
- [ ] Sitemap.xml
- [ ] robots.txt
- [ ] Vercel deployment
- [ ] Railway database setup
- [ ] Custom domain configuration

## 📚 Documentation

Comprehensive documentation in `/README_DOCUMENTATION/`:

1. **[00-PROJECT-OVERVIEW.md](./README_DOCUMENTATION/00-PROJECT-OVERVIEW.md)** - Project purpose, features, tech stack
2. **[01-SETUP-GUIDE.md](./README_DOCUMENTATION/01-SETUP-GUIDE.md)** - Installation, database setup, troubleshooting
3. **[05-DEVELOPMENT-WORKFLOW.md](./README_DOCUMENTATION/05-DEVELOPMENT-WORKFLOW.md)** - How to add pages, components, work with database

## 🛠️ Tech Stack

- **Framework:** Next.js 14.2 (App Router)
- **Language:** TypeScript 5.6
- **Styling:** Tailwind CSS 3.4
- **Database:** PostgreSQL + Prisma ORM
- **Auth:** NextAuth v5 (beta)
- **UI:** Radix UI primitives
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod
- **Animations:** Framer Motion

## 📂 Project Structure

```
smerp-tek/
├── app/                    # Next.js pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── contact/           # Contact page
│   └── ...                # Other pages
├── components/
│   ├── ui/                # Reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── label.tsx
│   └── navigation/        # Navbar & Footer
├── lib/
│   ├── utils.ts           # Helper functions
│   └── prisma.ts          # Database client
├── prisma/
│   └── schema.prisma      # Database schema
├── public/                # Static assets
├── styles/
│   └── globals.css        # Global styles + CSS variables
├── README_DOCUMENTATION/  # Detailed docs
└── .env.example           # Environment template
```

## 🎨 Design Tokens

Key colors from the design system:

```css
--color-primary: #646CFF       /* Primary brand color */
--color-accent: #FFC857        /* Accent/highlight color */
--color-text-primary: #0F1226  /* Main text */
--color-bg-primary: #F6F7FB    /* Page background */
--color-success: #2EC4B6       /* Success states */
--color-warning: #FF7A59       /* Warning states */
```

Typography scale:
- `display-xl`: 4.5rem (Hero headlines)
- `h1`: 2.75rem (Page titles)
- `h2`: 2.25rem (Section headers)
- `body`: 1rem (Standard text)

## 🔧 Available Scripts

```bash
npm run dev          # Start development server (http://localhost:3000)
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run prisma:generate  # Generate Prisma client
npm run prisma:migrate   # Run database migrations
npm run prisma:studio    # Open Prisma Studio (database GUI)
```

## 🌍 Environment Variables

Required variables (see `.env.example`):

```env
# Database (PostgreSQL)
DATABASE_URL="postgresql://..."

# Authentication
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="generated-secret"

# Admin Credentials
ADMIN_EMAIL="salehelhalik@gmail.com"
ADMIN_PASSWORD="Smerptek03554939!"
```

## 🚀 Deployment

### Vercel (Frontend)

1. Push to GitHub
2. Import to Vercel
3. Add environment variables
4. Deploy

### Railway (Database)

1. Create Railway account
2. New project → Add PostgreSQL
3. Copy DATABASE_URL
4. Add to Vercel env vars

Detailed guide: [04-DEPLOYMENT.md](./README_DOCUMENTATION/04-DEPLOYMENT.md) (to be created)

## 📊 Project Status

**Current Progress:** ~40% complete

✅ Complete:
- Infrastructure & build setup
- Design system implementation
- Core UI components
- Navigation (Navbar + Footer)
- Home page (6 sections)
- Contact page
- Database schema
- Git repository

🚧 In Progress:
- Additional public pages
- Content population

⏳ Not Started:
- Admin CMS
- API routes
- Authentication
- File uploads
- Deployment

## 🤝 Development

### Adding a New Page

1. Create file: `app/your-page/page.tsx`
2. Use page template from [05-DEVELOPMENT-WORKFLOW.md](./README_DOCUMENTATION/05-DEVELOPMENT-WORKFLOW.md)
3. Include Navbar and Footer
4. Add to navbar links if needed
5. Test locally

### Adding Components

1. Create in `components/ui/` or `components/features/`
2. Export from component file
3. Import with `@/components/...`
4. Use `cn()` helper for className merging

### Database Changes

1. Edit `prisma/schema.prisma`
2. Run `npm run prisma:migrate`
3. Prisma client auto-updates

## 🔐 Security Notes

- Never commit `.env.local`
- Use environment variables for secrets
- Admin credentials hardcoded for initial development (migrate to database later)
- HTTPS required in production
- PDPL-compliant data handling

## 📝 License

Proprietary - © 2025 SMERP TEK. All rights reserved.

This project is private and confidential. Unauthorized copying, distribution, or use is strictly prohibited.

## 📧 Contact

- **Email:** hello@smerptek.com
- **Website:** www.smerptek.com (in development)
- **Location:** Dubai, UAE

---

## 🎯 Next Steps for Development

**Immediate priorities:**

1. **Complete Solutions page** - Service packages section
2. **Build Products pages** - Individual pages for each product
3. **Implement Pricing page** - With monthly/annual toggle
4. **Set up Railway database** - Connect production database
5. **Begin Admin CMS** - Authentication and dashboard

**Resources:**
- Review [05-DEVELOPMENT-WORKFLOW.md](./README_DOCUMENTATION/05-DEVELOPMENT-WORKFLOW.md) for development patterns
- Check brand package (original brief) for exact copy and sections
- Use existing components from `components/ui/`
- Follow design tokens in `tailwind.config.ts`

**Questions?** Refer to documentation in `README_DOCUMENTATION/` folder.

---

**Last Updated:** January 2025
**Version:** 0.4.0 (Foundation Complete)
**Next Milestone:** v0.6.0 (All public pages complete)
