# i18n Implementation Guide - SMERP TEK

**Status:** Infrastructure Ready | Content Translation Needed
**Date:** October 23, 2025
**Session:** 5 - Internationalization Setup

---

## Overview

The SMERP TEK website now has **complete internationalization infrastructure** ready for full English/Arabic support. This guide explains what has been set up and how to use it.

## What is Complete

### 1. Core Infrastructure
- next-intl installed and configured
- Middleware set up for locale routing (/ar/* for Arabic, / for English)
- Translation message files created (messages/en.json, messages/ar.json)
- i18n config file (i18n.ts)
- Next.config.js updated with next-intl plugin

### 2. Translation Files
- **English** (messages/en.json): Complete homepage content
  - Hero section (headline, tagline, CTAs, feature tags)
  - Why Choose Us (4 feature cards)
  - Services (3 service cards)
  - Solutions (4 product cards)
  - Stats (4 metrics)
  - Industries (6 sectors)
  - Final CTA section
  - Navigation labels
  - Footer content

- **Arabic** (messages/ar.json): Professional translations for all English content
  - Native Arabic translations
  - Culturally appropriate phrasing for UAE/GCC market

### 3. Functional Components
- **LanguageSwitcher**: Now functionally switches between EN/AR
  - Uses Next.js routing (useRouter, usePathname)
  - Tracks language switches with analytics
  - ARIA labels for accessibility
  - Shows current language, dropdown for other language

## URL Structure

| Page | English URL | Arabic URL |
|------|-------------|------------|
| Home | / | /ar |
| Pricing | /pricing | /ar/pricing |
| Products | /products | /ar/products |
| Contact | /contact | /ar/contact |

**Locale Prefix:** as-needed (English is default, Arabic gets /ar prefix)

## Implementation Checklist

### Pages to Convert (Priority Order)

1. **High Priority** (Customer-facing):
   - app/page.tsx - Homepage (all sections)
   - app/pricing/page.tsx - Pricing page
   - app/products/page.tsx - Products overview
   - app/contact/page.tsx - Contact form
   - app/about/page.tsx - About page

2. **Medium Priority**:
   - app/products/[slug]/page.tsx - Individual product pages
   - app/solutions/page.tsx - Solutions page
   - app/resources/blog/page.tsx - Blog listing
   - components/navigation/Navbar.tsx - Navigation labels
   - components/navigation/Footer.tsx - Footer content

3. **Low Priority** (Admin/Internal):
   - Legal pages (already static, low translation priority)
   - Admin dashboard (internal tool, English-only acceptable)

## Next Steps (Recommended Implementation Order)

1. **Week 1**: Convert homepage (app/page.tsx)
   - Replace all hardcoded strings
   - Test language switching
   - Verify analytics tracking

2. **Week 2**: Convert navigation components
   - Navbar links
   - Footer content
   - Mobile menu

3. **Week 3**: Convert product pages
   - Products overview
   - Individual product pages
   - Add product-specific translations

4. **Week 4**: Convert remaining pages
   - Pricing, Contact, About
   - Solutions page
   - Blog (if applicable)

5. **Week 5**: Polish & Testing
   - RTL layout for Arabic
   - Full QA testing
   - Fix any edge cases

## Status Summary

**Complete**:
- Infrastructure setup
- Translation files with homepage content
- Functional language switcher
- Middleware routing
- Build configuration

**Pending**:
- Converting existing pages to use translations
- RTL layout implementation
- Comprehensive testing
- SEO meta tags in both languages

**Estimated Effort to Complete:** 20-30 hours (full page conversion)

**Current Tier-1 Score Impact:** +3 points (i18n infrastructure ready)

---

**Last Updated:** October 23, 2025
**Next Review:** Session 6
