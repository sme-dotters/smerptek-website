'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FileText, Plus, Edit, Trash2, ArrowLeft, Save, Globe } from 'lucide-react';
import { AnimatedBackground } from '@/components/effects/AnimatedBackground';

interface Page {
  id?: string;
  slug: string;
  title: string;
  content: string;
  excerpt?: string;
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string;
  published: boolean;
  publishedAt?: string;
}

export default function PagesManagement() {
  const router = useRouter();
  const [pages, setPages] = useState<Page[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingPage, setEditingPage] = useState<Page | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) { router.push('/smerptekdev'); return; }
    fetchPages();
  }, [router]);

  const fetchPages = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('/api/admin/pages', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await response.json();
      if (response.ok) setPages(data.pages || []);
    } catch (error) {
      console.error('Failed to fetch pages:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this page?')) return;
    try {
      const token = localStorage.getItem('adminToken');
      await fetch(`/api/admin/pages?id=${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      fetchPages();
    } catch (error) {
      console.error('Failed to delete page:', error);
    }
  };

  const handleSave = async (page: Page) => {
    try {
      const token = localStorage.getItem('adminToken');
      const method = page.id ? 'PUT' : 'POST';
      await fetch('/api/admin/pages', {
        method,
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(page)
      });
      fetchPages();
      setShowForm(false);
      setEditingPage(null);
    } catch (error) {
      console.error('Failed to save page:', error);
    }
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center"><div className="text-white">Loading...</div></div>;

  return (
    <div className="relative min-h-screen">
      <div className="opacity-30"><AnimatedBackground /></div>
      <div className="relative z-10">
        <div className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <a href="/smerptekdev/dashboard" className="p-2 rounded-lg hover:bg-white/10 transition-all">
                  <ArrowLeft className="w-6 h-6 text-white" />
                </a>
                <div className="flex items-center gap-3">
                  <Globe className="w-8 h-8 text-blue-400" />
                  <div>
                    <h1 className="text-2xl font-bold text-white">Pages</h1>
                    <p className="text-sm text-gray-400">{pages.length} page{pages.length !== 1 ? 's' : ''}</p>
                  </div>
                </div>
              </div>
              <button onClick={() => { setEditingPage(null); setShowForm(true); }}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all">
                <Plus className="w-5 h-5" />
                Add Page
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          {!showForm ? (
            <div className="grid grid-cols-1 gap-4">
              {pages.map((page) => (
                <div key={page.id} className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-white/20 transition-all">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-white">{page.title}</h3>
                        <span className="text-sm text-gray-500">/{page.slug}</span>
                        {page.published ? (
                          <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">Published</span>
                        ) : (
                          <span className="px-2 py-1 bg-gray-500/20 text-gray-400 text-xs rounded-full">Draft</span>
                        )}
                      </div>
                      {page.excerpt && <p className="text-gray-400 text-sm">{page.excerpt}</p>}
                    </div>
                    <div className="flex gap-2">
                      <button onClick={() => { setEditingPage(page); setShowForm(true); }}
                        className="p-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 transition-all">
                        <Edit className="w-5 h-5" />
                      </button>
                      <button onClick={() => page.id && handleDelete(page.id)}
                        className="p-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 transition-all">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <PageForm page={editingPage} onSave={handleSave} onCancel={() => { setShowForm(false); setEditingPage(null); }} />
          )}
        </div>
      </div>
    </div>
  );
}

function PageForm({ page, onSave, onCancel }: { page: Page | null; onSave: (p: Page) => void; onCancel: () => void }) {
  const [formData, setFormData] = useState<Page>(page || {
    slug: '',
    title: '',
    content: '',
    excerpt: '',
    seoTitle: '',
    seoDescription: '',
    seoKeywords: '',
    published: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-5xl mx-auto">
      <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10">
        <h2 className="text-2xl font-bold text-white mb-6">{page ? 'Edit Page' : 'Create New Page'}</h2>

        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-white mb-2">Title*</label>
              <input type="text" required value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value, slug: e.target.value.toLowerCase().replace(/\s+/g, '-') })}
                className="w-full h-12 px-4 rounded-xl border border-white/10 bg-white/5 text-white focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">Slug*</label>
              <input type="text" required value={formData.slug} onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                className="w-full h-12 px-4 rounded-xl border border-white/10 bg-white/5 text-white focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">Content*</label>
            <textarea required value={formData.content} onChange={(e) => setFormData({ ...formData, content: e.target.value })} rows={12}
              className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white focus:ring-2 focus:ring-blue-500 resize-none font-mono text-sm" />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">Excerpt</label>
            <textarea value={formData.excerpt} onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })} rows={2}
              className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white focus:ring-2 focus:ring-blue-500 resize-none" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-white mb-2">SEO Title</label>
              <input type="text" value={formData.seoTitle} onChange={(e) => setFormData({ ...formData, seoTitle: e.target.value })}
                className="w-full h-12 px-4 rounded-xl border border-white/10 bg-white/5 text-white focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">SEO Keywords</label>
              <input type="text" value={formData.seoKeywords} onChange={(e) => setFormData({ ...formData, seoKeywords: e.target.value })}
                className="w-full h-12 px-4 rounded-xl border border-white/10 bg-white/5 text-white focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">SEO Description</label>
            <textarea value={formData.seoDescription} onChange={(e) => setFormData({ ...formData, seoDescription: e.target.value })} rows={2}
              className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white focus:ring-2 focus:ring-blue-500 resize-none" />
          </div>

          <div>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={formData.published} onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                className="w-5 h-5 rounded border-white/20 bg-white/5 text-blue-500 focus:ring-blue-500" />
              <span className="text-white">Publish this page</span>
            </label>
          </div>

          <div className="flex gap-4 pt-4">
            <button type="submit" className="flex-1 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all flex items-center justify-center gap-2">
              <Save className="w-5 h-5" />
              {page ? 'Update Page' : 'Create Page'}
            </button>
            <button type="button" onClick={onCancel} className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-semibold transition-all">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
