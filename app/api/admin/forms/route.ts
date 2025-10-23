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

    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');
    const read = searchParams.get('read');

    const where: any = {};
    if (type) where.type = type;
    if (read !== null) where.read = read === 'true';

    const submissions = await prisma.formSubmission.findMany({
      where,
      orderBy: { createdAt: 'desc' }
    });

    return NextResponse.json({ submissions });
  } catch (error) {
    console.error('Get form submissions error:', error);
    return NextResponse.json({ error: 'Failed to fetch submissions' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    if (!verifyAuth(request)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const data = await request.json();
    const { id, read } = data;

    if (!id) {
      return NextResponse.json({ error: 'Submission ID required' }, { status: 400 });
    }

    const submission = await prisma.formSubmission.update({
      where: { id },
      data: { read }
    });

    return NextResponse.json({ submission });
  } catch (error) {
    console.error('Update form submission error:', error);
    return NextResponse.json({ error: 'Failed to update submission' }, { status: 500 });
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
      return NextResponse.json({ error: 'Submission ID required' }, { status: 400 });
    }

    await prisma.formSubmission.delete({ where: { id } });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Delete form submission error:', error);
    return NextResponse.json({ error: 'Failed to delete submission' }, { status: 500 });
  }
}
