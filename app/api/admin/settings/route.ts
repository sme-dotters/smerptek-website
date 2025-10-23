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

    const { searchParams } = new URL(request.url);
    const key = searchParams.get('key');

    if (key) {
      const setting = await prisma.siteSettings.findUnique({ where: { key } });
      return NextResponse.json({ setting });
    }

    const settings = await prisma.siteSettings.findMany();
    return NextResponse.json({ settings });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch settings' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    if (!verifyAuth(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const data = await request.json();

    const setting = await prisma.siteSettings.upsert({
      where: { key: data.key },
      update: { value: data.value, description: data.description },
      create: { key: data.key, value: data.value, description: data.description }
    });

    return NextResponse.json({ setting });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to save setting' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    if (!verifyAuth(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ error: 'Setting ID required' }, { status: 400 });
    await prisma.siteSettings.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete setting' }, { status: 500 });
  }
}
