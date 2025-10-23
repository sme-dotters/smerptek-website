import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { verify } from 'jsonwebtoken';

const JWT_SECRET = process.env.NEXTAUTH_SECRET || 'smerptek-super-secret-jwt-key-2025';

function verifyAuth(request: Request) {
  const authHeader = request.headers.get('authorization');
  if (!authHeader) return false;
  const token = authHeader.replace('Bearer ', '');
  try { verify(token, JWT_SECRET); return true; } catch { return false; }
}

export async function GET(request: Request) {
  try {
    if (!verifyAuth(request)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get counts for all content types
    const [
      productsCount,
      pricingPlansCount,
      servicesCount,
      blogPostsCount,
      pagesCount,
      testimonialsCount,
      faqsCount,
      formSubmissionsCount,
      unreadFormsCount,
      publishedBlogsCount,
      publishedPagesCount
    ] = await Promise.all([
      prisma.product.count(),
      prisma.pricingPlan.count({ where: { active: true } }),
      prisma.service.count({ where: { active: true } }),
      prisma.blogPost.count(),
      prisma.page.count(),
      prisma.testimonial.count(),
      prisma.fAQ.count({ where: { published: true } }),
      prisma.formSubmission.count(),
      prisma.formSubmission.count({ where: { read: false } }),
      prisma.blogPost.count({ where: { published: true } }),
      prisma.page.count({ where: { published: true } })
    ]);

    // Get recent form submissions
    const recentForms = await prisma.formSubmission.findMany({
      take: 5,
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        type: true,
        email: true,
        read: true,
        createdAt: true,
        data: true
      }
    });

    const stats = {
      overview: {
        totalProducts: productsCount,
        activePricingPlans: pricingPlansCount,
        activeServices: servicesCount,
        totalBlogPosts: blogPostsCount,
        publishedBlogs: publishedBlogsCount,
        totalPages: pagesCount,
        publishedPages: publishedPagesCount,
        testimonials: testimonialsCount,
        faqs: faqsCount,
        totalFormSubmissions: formSubmissionsCount,
        unreadForms: unreadFormsCount
      },
      recentActivity: {
        forms: recentForms
      }
    };

    return NextResponse.json({ stats });
  } catch (error) {
    console.error('Get stats error:', error);
    return NextResponse.json({ error: 'Failed to fetch stats' }, { status: 500 });
  }
}
