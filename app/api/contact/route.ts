import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  company: z.string().optional(),
  phone: z.string().optional(),
  interest: z.string().min(1, 'Please select an interest area'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  consent: z.boolean().refine((val) => val === true, {
    message: 'You must agree to the Privacy Policy',
  }),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    // Save to database (if DATABASE_URL is configured)
    try {
      await prisma.formSubmission.create({
        data: {
          type: 'contact',
          email: data.email,
          data: {
            name: data.name,
            company: data.company || '',
            phone: data.phone || '',
            interest: data.interest,
            message: data.message,
          },
          read: false,
        },
      });
    } catch (dbError) {
      // If database is not configured, log to console
      console.log('Database not configured. Form submission:', data);
    }

    // TODO: Send email notification (integrate Resend or SendGrid)
    // await sendEmail({
    //   to: 'hello@smerptek.com',
    //   subject: `New Contact Form Submission from ${data.name}`,
    //   body: JSON.stringify(data, null, 2),
    // });

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you! We\'ll respond within 24 hours.'
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors[0].message },
        { status: 400 }
      );
    }

    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
