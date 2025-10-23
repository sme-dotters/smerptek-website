# SMERP TEK Tier-1 Upgrade - Session 5 Plan

**Date:** October 23, 2025
**Branch:** `feat/tier1-autonomous-upgrade`
**Session:** 5 of 6 (estimated)
**Status:** In Progress

---

## Executive Summary

Session 5 focuses on **internationalization completion, accessibility, performance optimization, and testing infrastructure** to push the site toward production-ready Tier-1 status.

### Target Progress: **82/100 → 90/100** 🎯

**Objectives:**
1. ✅ Complete Arabic i18n integration (full content translation)
2. ✅ Implement accessibility improvements (WCAG 2.2 AA)
3. ✅ Optimize Core Web Vitals (LCP, FID, CLS)
4. ✅ Set up testing infrastructure (Jest + React Testing Library)

---

## Phase 1: Complete i18n Integration

### Current State
- ✅ `next-intl` installed and configured
- ✅ Basic translation files (`en.json`, `ar.json`) exist
- ✅ Middleware configured for locale routing
- ❌ Homepage content is hardcoded (not using translations)
- ❌ Navigation and footer not fully translated
- ❌ LanguageSwitcher not functionally connected

### Implementation Tasks

#### 1.1 Expand Translation Files
**Files:** `messages/en.json`, `messages/ar.json`

Add comprehensive translations for:
- **Homepage sections** (7 major sections):
  - Hero (headline, tagline, CTAs, badges)
  - Why Choose Us (4 feature cards)
  - Services (3 service cards)
  - Solutions (4 product cards)
  - Stats (4 statistics with labels)
  - Industries (6 industry tags)
  - Final CTA (headline, description, buttons)

- **Navigation:**
  - All navbar links
  - Mobile menu labels

- **Footer:**
  - Company description
  - Section headings
  - Footer links

- **UI Components:**
  - CalendlyButton text
  - Form labels and placeholders
  - Error messages

#### 1.2 Convert Homepage to Use Translations
**File:** `app/page.tsx`

- Replace all hardcoded strings with `t('key.path')`
- Use `useTranslations()` hook from `next-intl`
- Ensure all sections pull from translation files
- Test language switching

#### 1.3 Update Navigation Components
**Files:**
- `components/navigation/Navbar.tsx`
- `components/navigation/Footer.tsx`

- Replace hardcoded navigation labels with translation keys
- Update footer content to use translations
- Ensure RTL support for Arabic

#### 1.4 Fix LanguageSwitcher Integration
**File:** `components/ui/LanguageSwitcher.tsx`

- Connect to next-intl routing
- Use `useRouter()` and `usePathname()` for locale switching
- Update URL with locale prefix on change
- Test language persistence across navigation

#### 1.5 Add RTL Support
**Files:** `app/layout.tsx`, `tailwind.config.ts`

- Add `dir="rtl"` for Arabic locale
- Configure Tailwind RTL plugin
- Test Arabic layout (right-to-left text flow)
- Ensure UI components work in both directions

---

## Phase 2: Accessibility Improvements

### Target: WCAG 2.2 AA Compliance

#### 2.1 Keyboard Navigation
- Ensure all interactive elements are keyboard accessible
- Add visible focus indicators
- Test tab navigation flow
- Skip to content link

#### 2.2 ARIA Labels
- Add `aria-label` to icon-only buttons
- Implement `aria-expanded` for dropdowns
- Add `aria-current` for active navigation items
- Screen reader announcements for dynamic content

#### 2.3 Color Contrast
- Audit all text/background combinations
- Ensure 4.5:1 ratio for normal text
- Ensure 3:1 ratio for large text
- Fix any contrast issues in buttons/links

#### 2.4 Semantic HTML
- Ensure proper heading hierarchy (h1 → h2 → h3)
- Use semantic landmarks (`<nav>`, `<main>`, `<footer>`)
- Add `<label>` elements for all form inputs
- Alt text for all images

#### 2.5 Focus Management
- Trap focus in modals when open
- Return focus after modal close
- Skip navigation links
- Logical tab order

---

## Phase 3: Performance Optimization

### Target: Core Web Vitals (Green Scores)

#### 3.1 Largest Contentful Paint (LCP < 2.5s)
- Optimize hero images with Next.js Image component
- Preload critical fonts
- Reduce render-blocking resources
- Lazy load below-the-fold content

#### 3.2 First Input Delay (FID < 100ms)
- Code splitting for heavy components
- Minimize JavaScript execution time
- Defer non-critical scripts
- Optimize third-party scripts (Plausible, Sentry)

#### 3.3 Cumulative Layout Shift (CLS < 0.1)
- Add explicit width/height to images
- Reserve space for dynamic content
- Avoid layout shifts on font load
- Stabilize navigation height

#### 3.4 Bundle Size Optimization
- Analyze bundle with `next build --analyze`
- Remove unused dependencies
- Tree-shake libraries
- Dynamic imports for large components

#### 3.5 Caching Strategy
- Configure proper cache headers
- Implement ISR for static pages
- Edge caching with Vercel
- Browser caching for static assets

---

## Phase 4: Testing Infrastructure

### 4.1 Install Testing Libraries
```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event jest-environment-jsdom
```

### 4.2 Configure Jest
**File:** `jest.config.js`

- Set up Next.js test environment
- Configure module aliases (@/)
- Mock CSS/images
- Setup coverage thresholds

### 4.3 Write Core Tests
**Files:** `__tests__/`

Priority test suites:
1. **Component tests:**
   - Button variants render correctly
   - Navigation links are present
   - Language switcher changes locale
   - Currency switcher updates prices

2. **i18n tests:**
   - Translations load for both locales
   - Missing translation keys handled gracefully
   - RTL layout applied for Arabic

3. **Accessibility tests:**
   - Keyboard navigation works
   - ARIA labels present
   - Focus management in modals

4. **Integration tests:**
   - Homepage renders without errors
   - Form submission validation
   - API route responses

### 4.4 Add Test Scripts
**File:** `package.json`

```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
  }
}
```

---

## Phase 5: Additional Improvements

### 5.1 Error Boundaries
- Wrap app sections in error boundaries
- Graceful error UI
- Log errors to Sentry
- Fallback UI for failed components

### 5.2 Loading States
- Skeleton screens for async content
- Loading spinners for forms
- Suspense boundaries for lazy-loaded components
- Progress indicators for multi-step processes

### 5.3 SEO Enhancements
- Add hreflang tags for locales
- Update sitemap with locale variants
- Structured data for Arabic pages
- Meta tags for both languages

---

## Success Metrics

### Tier-1 Readiness Score: 82 → 90 (+8)

| Category | Before | After | Change |
|----------|--------|-------|--------|
| **Internationalization** | 3/10 | 9/10 | +6 |
| **Accessibility** | 5/10 | 9/10 | +4 |
| **Performance** | 7/10 | 9/10 | +2 |
| **Testing** | 0/10 | 7/10 | +7 |
| **Overall** | 82/100 | 90/100 | +8 |

### Key Metrics
- ✅ 2 languages fully supported (EN/AR)
- ✅ WCAG 2.2 AA compliance
- ✅ Core Web Vitals: All green
- ✅ Test coverage: >70%
- ✅ Build time: <90s
- ✅ Lighthouse score: >90

---

## Implementation Order

1. **Phase 1.1-1.4:** Complete i18n (2-3 hours)
2. **Phase 1.5:** RTL support (30 min)
3. **Phase 2:** Accessibility audit & fixes (1-2 hours)
4. **Phase 3:** Performance optimization (1-2 hours)
5. **Phase 4:** Testing setup (1-2 hours)
6. **Phase 5:** Polish & documentation (1 hour)

**Total Estimated Time:** 6-10 hours

---

## Files to Modify

### High Priority
- `messages/en.json` - Expand translation keys
- `messages/ar.json` - Add Arabic translations
- `app/page.tsx` - Convert to use translations
- `components/navigation/Navbar.tsx` - Use translation keys
- `components/navigation/Footer.tsx` - Use translation keys
- `components/ui/LanguageSwitcher.tsx` - Functional locale switching
- `app/layout.tsx` - Add RTL support, NextIntlClientProvider

### Medium Priority
- `tailwind.config.ts` - RTL plugin
- `next.config.js` - Performance optimizations
- `jest.config.js` - Create test configuration
- `__tests__/` - Create test suite directory

### Low Priority
- `components/ui/ErrorBoundary.tsx` - Create error boundary
- `components/ui/SkeletonLoader.tsx` - Loading states
- Various component files for accessibility improvements

---

## Testing Strategy

### Manual Testing
- [ ] Language switcher works (EN ↔ AR)
- [ ] All content displays in both languages
- [ ] RTL layout correct for Arabic
- [ ] Navigation works in both languages
- [ ] Forms validate in both languages
- [ ] Keyboard navigation functional
- [ ] Screen reader compatibility
- [ ] Mobile responsive in both languages

### Automated Testing
- [ ] Unit tests pass
- [ ] Integration tests pass
- [ ] Accessibility tests pass
- [ ] i18n tests pass
- [ ] Build succeeds
- [ ] No TypeScript errors
- [ ] No ESLint errors

### Performance Testing
- [ ] Lighthouse audit (desktop & mobile)
- [ ] Core Web Vitals check
- [ ] Bundle size analysis
- [ ] Page load times <3s
- [ ] Time to Interactive <5s

---

## Risk Mitigation

### Potential Issues
1. **RTL CSS conflicts** - Test thoroughly, use Tailwind RTL utilities
2. **Translation file size** - Keep lean, avoid duplication
3. **Performance regression** - Monitor bundle size, use code splitting
4. **Accessibility regressions** - Automated tests + manual audit
5. **Test setup complexity** - Use standard Next.js testing patterns

### Rollback Plan
- All changes on feature branch
- Commit after each phase completion
- Can revert individual commits if needed
- Main branch remains stable

---

## Post-Session 5

### Next Steps (Session 6)
1. Final security audit
2. Production deployment preparation
3. Monitoring dashboard setup
4. Documentation completion
5. Handoff preparation

### Blockers
- None identified

### Dependencies
- All required packages installed
- No external API changes needed
- No database migrations required

---

**Status:** ✅ Plan Approved - Beginning Implementation

**Autonomous Mode:** Enabled - Proceeding with full implementation
