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
    const pages = await prisma.page.findMany({ orderBy: { createdAt: 'desc' } });
    return NextResponse.json({ pages });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch pages' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    if (!verifyAuth(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const data = await request.json();
    const page = await prisma.page.create({ data });
    return NextResponse.json({ page }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create page' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    if (!verifyAuth(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const { id, ...data } = await request.json();
    if (!id) return NextResponse.json({ error: 'Page ID required' }, { status: 400 });
    const page = await prisma.page.update({ where: { id }, data });
    return NextResponse.json({ page });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update page' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    if (!verifyAuth(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ error: 'Page ID required' }, { status: 400 });
    await prisma.page.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete page' }, { status: 500 });
  }
}
