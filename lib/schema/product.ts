import { SoftwareApplication, WithContext } from 'schema-dts';

interface ProductSchemaProps {
  name: string;
  description: string;
  url: string;
  features: string[];
}

export function getProductSchema(props: ProductSchemaProps): WithContext<SoftwareApplication> {
  const { name, description, url, features } = props;

  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    description,
    url,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'AED',
      availability: 'https://schema.org/InStock',
    },
    provider: {
      '@type': 'Organization',
      name: 'SMERP TEK',
      url: 'https://smerptek.com',
    },
    featureList: features,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '0',
      bestRating: '5',
      worstRating: '1',
    },
  };
}

export const smerpEduSchema = getProductSchema({
  name: 'SMERP EDU',
  description:
    'Comprehensive educational ERP solution for schools, universities, and training centers. Streamline admissions, attendance, grading, and student management.',
  url: 'https://smerptek.com/products/smerp-edu',
  features: [
    'Student Information Management',
    'Admissions & Enrollment',
    'Attendance Tracking',
    'Grade Management',
    'Parent Portal',
    'Staff Management',
    'Timetable Scheduling',
    'Fee Management',
  ],
});

export const smerpsCrewSchema = getProductSchema({
  name: 'SMERPS CREW',
  description:
    'Advanced workforce management platform for attendance, leave, performance tracking, and HR operations. Built for modern GCC enterprises.',
  url: 'https://smerptek.com/products/smerps-crew',
  features: [
    'Biometric Attendance',
    'Leave Management',
    'Performance Tracking',
    'Payroll Integration',
    'Shift Scheduling',
    'Employee Self-Service',
    'Compliance Reporting',
    'Mobile Access',
  ],
});

export const smerpAutomateSchema = getProductSchema({
  name: 'SMERP Automate',
  description:
    'Business process automation platform powered by AI. Streamline workflows, reduce manual tasks, and increase operational efficiency.',
  url: 'https://smerptek.com/products/smerp-automate',
  features: [
    'Workflow Automation',
    'AI-Powered Processes',
    'Document Processing',
    'Approval Workflows',
    'Integration Hub',
    'Custom Automation',
    'Analytics Dashboard',
    'ROI Tracking',
  ],
});

export const smerpsAnalyticsSchema = getProductSchema({
  name: 'SMERPS Analytics',
  description:
    'Enterprise analytics and business intelligence platform. Transform data into actionable insights with advanced reporting and visualization.',
  url: 'https://smerptek.com/products/smerps-analytics',
  features: [
    'Real-time Dashboards',
    'Custom Reports',
    'Predictive Analytics',
    'Data Visualization',
    'KPI Tracking',
    'Export Capabilities',
    'Mobile Analytics',
    'Multi-tenant Support',
  ],
});
