# Development Workflow

## How to Add New Pages

### 1. Create Page File

Next.js 14 App Router uses file-system routing. Create a `page.tsx` file in the appropriate directory:

```bash
# Example: Create pricing page
app/pricing/page.tsx
```

### 2. Page Template

Use this template for new pages:

```typescript
import { Metadata } from 'next';
import { Navbar } from '@/components/navigation/navbar';
import { Footer } from '@/components/navigation/footer';

export const metadata: Metadata = {
  title: 'Page Title | SMERP TEK',
  description: 'Page description for SEO (150-160 characters)',
};

export default function PageName() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container-custom">
          {/* Page content here */}
          <h1 className="text-h1 font-bold text-text-primary mb-6">
            Page Heading
          </h1>
        </div>
      </main>
      <Footer />
    </>
  );
}
```

### 3. Key Points

- **Always include Navbar and Footer** for public pages
- **Add `pt-24`** to main element (accounts for fixed navbar)
- **Use `container-custom`** class for content width
- **Export metadata** for SEO
- **Use design system classes** from Tailwind config

## How to Add Components

### 1. Component File Structure

```bash
# UI Components (reusable primitives)
components/ui/component-name.tsx

# Feature Components (page-specific)
components/features/feature-name.tsx

# Section Components (large page sections)
components/sections/section-name.tsx
```

### 2. Component Template

```typescript
import { cn } from '@/lib/utils';

interface ComponentNameProps {
  className?: string;
  children?: React.ReactNode;
  // Add other props
}

export function ComponentName({ className, children }: ComponentNameProps) {
  return (
    <div className={cn('base-styles-here', className)}>
      {children}
    </div>
  );
}
```

### 3. Using `cn()` Helper

The `cn()` function merges Tailwind classes correctly:

```typescript
import { cn } from '@/lib/utils';

<div className={cn(
  'base-classes',
  isActive && 'active-classes',
  className // Always allow overrides
)} />
```

## Working with the Database

### 1. Query Data in Server Components

```typescript
import { prisma } from '@/lib/prisma';

export default async function BlogPage() {
  const posts = await prisma.blogPost.findMany({
    where: { published: true },
    orderBy: { publishedAt: 'desc' },
    take: 10,
  });

  return (
    <div>
      {posts.map((post) => (
        <article key={post.id}>{post.title}</article>
      ))}
    </div>
  );
}
```

### 2. Create API Routes

Create files in `app/api/`:

```typescript
// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    await prisma.formSubmission.create({
      data: {
        type: 'contact',
        email: data.email,
        data: data,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid data' },
      { status: 400 }
    );
  }
}
```

### 3. Handle Forms with Server Actions

```typescript
'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function submitContactForm(formData: FormData) {
  const data = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    message: formData.get('message') as string,
  };

  // Validate data
  if (!data.name || !data.email || !data.message) {
    return { error: 'All fields required' };
  }

  // Save to database
  await prisma.formSubmission.create({
    data: {
      type: 'contact',
      email: data.email,
      data,
    },
  });

  revalidatePath('/contact');
  return { success: true };
}
```

## Styling Guidelines

### 1. Use Design Tokens

Always use the predefined design tokens:

```typescript
// ✅ Good
<div className="bg-primary text-text-inverse" />

// ❌ Bad
<div className="bg-[#646CFF] text-white" />
```

### 2. Responsive Design

Mobile-first approach:

```typescript
<div className={cn(
  'grid grid-cols-1',        // Mobile (default)
  'md:grid-cols-2',          // Tablet (768px+)
  'lg:grid-cols-3',          // Desktop (1024px+)
)} />
```

### 3. Spacing Scale

Use consistent spacing:

```typescript
// Padding/Margin
p-4   // 1rem = 16px
p-6   // 1.5rem = 24px
p-8   // 2rem = 32px
py-20 // Vertical: 5rem = 80px
```

### 4. Typography

```typescript
<h1 className="text-h1 font-heading font-bold">
<h2 className="text-h2 font-heading font-bold">
<p className="text-body text-text-secondary">
```

## Git Workflow

### 1. Conventional Commits

Format: `type(scope): description`

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only
- `style`: Code style (formatting, no logic change)
- `refactor`: Code refactoring
- `test`: Add tests
- `chore`: Build/config changes

Examples:
```bash
git commit -m "feat(home): add testimonials section"
git commit -m "fix(navbar): mobile menu not closing on link click"
git commit -m "docs(setup): add Railway database instructions"
```

### 2. Branch Strategy

```bash
# Create feature branch
git checkout -b feature/pricing-page

# Make changes and commit
git add .
git commit -m "feat(pricing): add pricing page with toggle"

# Push to remote
git push origin feature/pricing-page

# Merge to main (or create PR)
git checkout main
git merge feature/pricing-page
```

### 3. Before Committing

```bash
# Check status
git status

# Review changes
git diff

# Run linter
npm run lint

# Test build
npm run build
```

## Testing Pages Locally

### 1. Development Server

```bash
npm run dev
```

- Hot reload enabled
- Changes reflect immediately
- Check terminal for errors

### 2. Production Build

```bash
npm run build
npm start
```

- Tests production optimizations
- Catches build errors
- Slower, use before deployment

### 3. Browser Testing

Test in:
- Chrome/Edge (primary)
- Firefox
- Safari (if on macOS)
- Mobile responsive view (DevTools)

### 4. Accessibility Testing

- Use keyboard navigation (Tab, Enter, Escape)
- Test with screen reader (NVDA/JAWS on Windows, VoiceOver on macOS)
- Check color contrast (Chrome DevTools Lighthouse)

## Performance Optimization

### 1. Image Optimization

Always use Next.js Image component:

```typescript
import Image from 'next/image';

<Image
  src="/images/hero.jpg"
  alt="Descriptive alt text"
  width={1200}
  height={600}
  priority={true} // For above-fold images
/>
```

### 2. Code Splitting

Dynamic imports for heavy components:

```typescript
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <div>Loading...</div>,
});
```

### 3. Lazy Loading

```typescript
// For images below fold
<Image
  src="/images/product.jpg"
  alt="Product"
  loading="lazy"
/>
```

## Debugging Tips

### 1. Console Logging

```typescript
console.log('Debug:', { variable, anotherVar });

// Server components (check terminal)
// Client components (check browser console)
```

### 2. TypeScript Errors

```bash
# Check for type errors
npx tsc --noEmit
```

### 3. Prisma Issues

```bash
# Reset database (warning: deletes all data)
npx prisma migrate reset

# View database
npm run prisma:studio
```

### 4. Clear Caches

```bash
# Delete build cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

## Common Tasks

### Add a New Product

1. Add entry in Prisma Studio or via seed
2. Create page: `app/products/product-slug/page.tsx`
3. Update products array in home page
4. Add to navbar mega menu (if implemented)

### Add a Blog Post

1. Create entry in database
2. Blog listing pulls from database automatically
3. Dynamic route: `app/resources/blog/[slug]/page.tsx`

### Update Styling

1. Edit `tailwind.config.ts` for design tokens
2. Edit `styles/globals.css` for global styles
3. Restart dev server to apply changes

## Getting Help

### Documentation
1. Next.js: https://nextjs.org/docs
2. Tailwind CSS: https://tailwindcss.com/docs
3. Prisma: https://www.prisma.io/docs
4. Radix UI: https://www.radix-ui.com/

### Project Docs
- [00-PROJECT-OVERVIEW.md](./00-PROJECT-OVERVIEW.md)
- [03-COMPONENT-LIBRARY.md](./03-COMPONENT-LIBRARY.md)
- [07-API-ROUTES.md](./07-API-ROUTES.md)

---

**Quick Reference:**
- `npm run dev` - Start development
- `npm run build` - Build for production
- `npm run prisma:studio` - View database
- `git status` - Check changes
