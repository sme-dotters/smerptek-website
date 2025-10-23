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
    const faqs = await prisma.fAQ.findMany({ orderBy: [{ order: 'asc' }, { createdAt: 'desc' }] });
    return NextResponse.json({ faqs });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch FAQs' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    if (!verifyAuth(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const data = await request.json();
    const faq = await prisma.fAQ.create({ data });
    return NextResponse.json({ faq }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create FAQ' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    if (!verifyAuth(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const { id, ...data } = await request.json();
    if (!id) return NextResponse.json({ error: 'FAQ ID required' }, { status: 400 });
    const faq = await prisma.fAQ.update({ where: { id }, data });
    return NextResponse.json({ faq });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update FAQ' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    if (!verifyAuth(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ error: 'FAQ ID required' }, { status: 400 });
    await prisma.fAQ.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete FAQ' }, { status: 500 });
  }
}
