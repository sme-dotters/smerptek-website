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

    const services = await prisma.service.findMany({
      orderBy: [{ order: 'asc' }, { createdAt: 'desc' }]
    });

    return NextResponse.json({ services });
  } catch (error) {
    console.error('Get services error:', error);
    return NextResponse.json({ error: 'Failed to fetch services' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    if (!verifyAuth(request)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const data = await request.json();

    const service = await prisma.service.create({
      data: {
        name: data.name,
        slug: data.slug,
        description: data.description,
        duration: data.duration,
        price: data.price,
        features: data.features || [],
        deliverables: data.deliverables || [],
        icon: data.icon,
        category: data.category,
        active: data.active ?? true,
        order: data.order ?? 0
      }
    });

    return NextResponse.json({ service }, { status: 201 });
  } catch (error) {
    console.error('Create service error:', error);
    return NextResponse.json({ error: 'Failed to create service' }, { status: 500 });
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
      return NextResponse.json({ error: 'Service ID required' }, { status: 400 });
    }

    const service = await prisma.service.update({
      where: { id },
      data: updateData
    });

    return NextResponse.json({ service });
  } catch (error) {
    console.error('Update service error:', error);
    return NextResponse.json({ error: 'Failed to update service' }, { status: 500 });
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
      return NextResponse.json({ error: 'Service ID required' }, { status: 400 });
    }

    await prisma.service.delete({ where: { id } });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Delete service error:', error);
    return NextResponse.json({ error: 'Failed to delete service' }, { status: 500 });
  }
}
