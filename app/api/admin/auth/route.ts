import { NextResponse } from 'next/server';
import { sign } from 'jsonwebtoken';

const ADMIN_EMAIL = 'salehelhalik@gmail.com';
const ADMIN_PASSWORD = 'Smerptekdeveloper!2025!';
const JWT_SECRET = process.env.NEXTAUTH_SECRET || 'smerptek-super-secret-jwt-key-2025';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // Validate credentials
    if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Generate JWT token
    const token = sign(
      {
        email: ADMIN_EMAIL,
        role: 'admin',
        iat: Date.now()
      },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    return NextResponse.json({
      success: true,
      token,
      user: { email: ADMIN_EMAIL, role: 'admin' }
    });

  } catch (error) {
    console.error('Admin auth error:', error);
    return NextResponse.json(
      { error: 'Authentication failed' },
      { status: 500 }
    );
  }
}
