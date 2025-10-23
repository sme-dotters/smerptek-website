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
    if (!verifyAuth(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const testimonials = await prisma.testimonial.findMany({ orderBy: { createdAt: 'desc' } });
    return NextResponse.json({ testimonials });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch testimonials' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    if (!verifyAuth(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const data = await request.json();
    const testimonial = await prisma.testimonial.create({ data });
    return NextResponse.json({ testimonial }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create testimonial' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    if (!verifyAuth(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const { id, ...data } = await request.json();
    if (!id) return NextResponse.json({ error: 'Testimonial ID required' }, { status: 400 });
    const testimonial = await prisma.testimonial.update({ where: { id }, data });
    return NextResponse.json({ testimonial });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update testimonial' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    if (!verifyAuth(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ error: 'Testimonial ID required' }, { status: 400 });
    await prisma.testimonial.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete testimonial' }, { status: 500 });
  }
}
