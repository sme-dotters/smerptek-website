import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { verify } from 'jsonwebtoken';

const JWT_SECRET = process.env.NEXTAUTH_SECRET || 'smerptek-super-secret-jwt-key-2025';

function verifyAuth(request: Request) {
  const authHeader = request.headers.get('authorization');
  if (!authHeader) return false;
  const token = authHeader.replace('Bearer ', '');
  try {
    verify(token, JWT_SECRET);
    return true;
  } catch {
    return false;
  }
}

export async function GET(request: Request) {
  try {
    if (!verifyAuth(request)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const plans = await prisma.pricingPlan.findMany({
      orderBy: [{ order: 'asc' }, { createdAt: 'desc' }]
    });

    return NextResponse.json({ plans });
  } catch (error) {
    console.error('Get pricing plans error:', error);
    return NextResponse.json({ error: 'Failed to fetch pricing plans' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    if (!verifyAuth(request)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const data = await request.json();

    const plan = await prisma.pricingPlan.create({
      data: {
        name: data.name,
        slug: data.slug,
        tagline: data.tagline,
        priceMonthly: parseFloat(data.priceMonthly),
        priceAnnual: data.priceAnnual ? parseFloat(data.priceAnnual) : null,
        features: data.features || [],
        addOns: data.addOns || null,
        recommended: data.recommended ?? false,
        ctaLabel: data.ctaLabel,
        order: data.order ?? 0,
        active: data.active ?? true
      }
    });

    return NextResponse.json({ plan }, { status: 201 });
  } catch (error) {
    console.error('Create pricing plan error:', error);
    return NextResponse.json({ error: 'Failed to create pricing plan' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    if (!verifyAuth(request)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const data = await request.json();
    const { id, ...updateData } = data;

    if (!id) {
      return NextResponse.json({ error: 'Plan ID required' }, { status: 400 });
    }

    // Convert prices to float if they exist
    if (updateData.priceMonthly) {
      updateData.priceMonthly = parseFloat(updateData.priceMonthly);
    }
    if (updateData.priceAnnual) {
      updateData.priceAnnual = parseFloat(updateData.priceAnnual);
    }

    const plan = await prisma.pricingPlan.update({
      where: { id },
      data: updateData
    });

    return NextResponse.json({ plan });
  } catch (error) {
    console.error('Update pricing plan error:', error);
    return NextResponse.json({ error: 'Failed to update pricing plan' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    if (!verifyAuth(request)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Plan ID required' }, { status: 400 });
    }

    await prisma.pricingPlan.delete({ where: { id } });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Delete pricing plan error:', error);
    return NextResponse.json({ error: 'Failed to delete pricing plan' }, { status: 500 });
  }
}
