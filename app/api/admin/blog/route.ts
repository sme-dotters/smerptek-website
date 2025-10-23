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
    const posts = await prisma.blogPost.findMany({ orderBy: { createdAt: 'desc' } });
    return NextResponse.json({ posts });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    if (!verifyAuth(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const data = await request.json();
    const post = await prisma.blogPost.create({ data });
    return NextResponse.json({ post }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    if (!verifyAuth(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const { id, ...data } = await request.json();
    if (!id) return NextResponse.json({ error: 'Post ID required' }, { status: 400 });
    const post = await prisma.blogPost.update({ where: { id }, data });
    return NextResponse.json({ post });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update post' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    if (!verifyAuth(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ error: 'Post ID required' }, { status: 400 });
    await prisma.blogPost.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete post' }, { status: 500 });
  }
}
