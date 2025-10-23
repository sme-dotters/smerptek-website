import { Metadata } from 'next';
import { Navbar } from '@/components/navigation/navbar';
import { Footer } from '@/components/navigation/footer';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

export const metadata: Metadata = {
  title: 'Blog | Insights on Digital Transformation & Automation | SMERP TEK',
  description:
    'Practical guides, case studies, and thought leadership on modernizing operations for startups and SMEs in the UAE and GCC.',
};

export default function BlogPage() {
  // Placeholder blog posts - will be replaced with database queries
  const posts = [
    {
      title: 'How to Audit Your Tech Stack in 2 Hours',
      excerpt:
        'Most SMEs waste time and money on redundant tools. Here\'s a simple framework to identify gaps, overlaps, and integration opportunities.',
      category: 'Digital Transformation',
      date: '2025-01-15',
      readTime: '8 min read',
    },
    {
      title: 'The Hidden Cost of Manual Data Entry',
      excerpt:
        'Beyond the obvious time drain, manual data entry creates compound inefficiencies across your organization.',
      category: 'Automation',
      date: '2025-01-10',
      readTime: '6 min read',
    },
    {
      title: '5 Signs Your Business Needs Process Automation',
      excerpt:
        'Not sure if automation is right for you? These five red flags indicate it\'s time to modernize.',
      category: 'Automation',
      date: '2025-01-05',
      readTime: '5 min read',
    },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        {/* Hero */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container-custom text-center">
            <h1 className="text-h1 lg:text-display-lg font-bold text-text-primary mb-6">
              Insights to modernize your operations
            </h1>
            <p className="text-body-lg text-text-secondary max-w-3xl mx-auto mb-8">
              Practical guides, case studies, and thought leadership on streamlining operations,
              automating workflows, and scaling with confidence.
            </p>
            <div className="max-w-md mx-auto">
              <Input type="search" placeholder="Search articles..." className="h-12" />
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center gap-2 text-xs text-accent mb-2">
                      <span className="font-semibold">{post.category}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <CardTitle className="text-h4 mb-2">{post.title}</CardTitle>
                    <CardDescription className="text-sm">{post.excerpt}</CardDescription>
                    <div className="mt-4 text-xs text-text-tertiary">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-text-secondary">
                More articles coming soon. Subscribe to our newsletter to stay updated.
              </p>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-bg-secondary">
          <div className="container-custom max-w-2xl mx-auto text-center">
            <h2 className="text-h2 font-bold text-text-primary mb-4">Get insights in your inbox</h2>
            <p className="text-text-secondary mb-6">
              Subscribe to our monthly newsletter for actionable tips, product updates, and exclusive
              templates.
            </p>
            <form className="flex gap-2">
              <Input type="email" placeholder="your@email.com" className="flex-1" required />
              <button
                type="submit"
                className="px-6 py-2 bg-primary text-text-inverse rounded-md hover:bg-primary-hover transition-colors font-medium"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-text-tertiary mt-4">
              By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
