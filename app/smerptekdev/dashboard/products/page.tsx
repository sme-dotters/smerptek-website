'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Package, Plus, Edit, Trash2, ArrowLeft, Save, X, ToggleLeft, ToggleRight } from 'lucide-react';
import { AnimatedBackground } from '@/components/effects/AnimatedBackground';

interface Product {
  id?: string;
  name: string;
  slug: string;
  description: string;
  tagline?: string;
  icon?: string;
  features: any[];
  useCases: string[];
  integrations: string[];
  startingPrice?: number;
  ctaLabel?: string;
  ctaUrl?: string;
  seoTitle?: string;
  seoDescription?: string;
  active: boolean;
  order: number;
}

export default function ProductsManagement() {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/smerptekdev');
      return;
    }
    fetchProducts();
  }, [router]);

  const fetchProducts = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('/api/admin/products', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await response.json();
      if (response.ok) {
        setProducts(data.products || []);
      }
    } catch (error) {
      console.error('Failed to fetch products:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this product?')) return;

    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`/api/admin/products?id=${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });

      if (response.ok) {
        fetchProducts();
      }
    } catch (error) {
      console.error('Failed to delete product:', error);
      alert('Failed to delete product');
    }
  };

  const handleSave = async (product: Product) => {
    try {
      const token = localStorage.getItem('adminToken');
      const method = product.id ? 'PUT' : 'POST';
      const response = await fetch('/api/admin/products', {
        method,
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
      });

      if (response.ok) {
        fetchProducts();
        setShowForm(false);
        setEditingProduct(null);
      } else {
        alert('Failed to save product');
      }
    } catch (error) {
      console.error('Failed to save product:', error);
      alert('Failed to save product');
    }
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center"><div className="text-white">Loading...</div></div>;
  }

  return (
    <div className="relative min-h-screen">
      <div className="opacity-30"><AnimatedBackground /></div>

      <div className="relative z-10">
        {/* Header */}
        <div className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <a href="/smerptekdev/dashboard" className="p-2 rounded-lg hover:bg-white/10 transition-all">
                  <ArrowLeft className="w-6 h-6 text-white" />
                </a>
                <div className="flex items-center gap-3">
                  <Package className="w-8 h-8 text-cyan-400" />
                  <div>
                    <h1 className="text-2xl font-bold text-white">Products</h1>
                    <p className="text-sm text-gray-400">{products.length} product{products.length !== 1 ? 's' : ''}</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => { setEditingProduct(null); setShowForm(true); }}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all"
              >
                <Plus className="w-5 h-5" />
                Add Product
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          {!showForm ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {products.map((product) => (
                <div key={product.id} className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-white/20 transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold text-white">{product.name}</h3>
                        {product.active ? (
                          <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">Active</span>
                        ) : (
                          <span className="px-2 py-1 bg-gray-500/20 text-gray-400 text-xs rounded-full">Inactive</span>
                        )}
                      </div>
                      {product.tagline && <p className="text-sm text-purple-400 mb-2">{product.tagline}</p>}
                      <p className="text-gray-400 text-sm mb-3 line-clamp-2">{product.description}</p>
                      <div className="flex flex-wrap gap-2 text-xs">
                        {product.useCases?.slice(0, 3).map((use, i) => (
                          <span key={i} className="px-2 py-1 bg-cyan-500/10 text-cyan-400 rounded">{use}</span>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => { setEditingProduct(product); setShowForm(true); }}
                        className="p-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 transition-all"
                      >
                        <Edit className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => product.id && handleDelete(product.id)}
                        className="p-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 transition-all"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <ProductForm product={editingProduct} onSave={handleSave} onCancel={() => { setShowForm(false); setEditingProduct(null); }} />
          )}
        </div>
      </div>
    </div>
  );
}

function ProductForm({ product, onSave, onCancel }: { product: Product | null; onSave: (p: Product) => void; onCancel: () => void }) {
  const [formData, setFormData] = useState<Product>(product || {
    name: '',
    slug: '',
    description: '',
    tagline: '',
    icon: '',
    features: [],
    useCases: [],
    integrations: [],
    startingPrice: 0,
    ctaLabel: 'Learn More',
    ctaUrl: '',
    seoTitle: '',
    seoDescription: '',
    active: true,
    order: 0
  });

  const [useCaseInput, setUseCaseInput] = useState('');
  const [integrationInput, setIntegrationInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const addUseCase = () => {
    if (useCaseInput.trim()) {
      setFormData({ ...formData, useCases: [...formData.useCases, useCaseInput.trim()] });
      setUseCaseInput('');
    }
  };

  const removeUseCase = (index: number) => {
    setFormData({ ...formData, useCases: formData.useCases.filter((_, i) => i !== index) });
  };

  const addIntegration = () => {
    if (integrationInput.trim()) {
      setFormData({ ...formData, integrations: [...formData.integrations, integrationInput.trim()] });
      setIntegrationInput('');
    }
  };

  const removeIntegration = (index: number) => {
    setFormData({ ...formData, integrations: formData.integrations.filter((_, i) => i !== index) });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
      <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10">
        <h2 className="text-2xl font-bold text-white mb-6">{product ? 'Edit Product' : 'Create New Product'}</h2>

        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-white mb-2">Product Name*</label>
              <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value, slug: e.target.value.toLowerCase().replace(/\s+/g, '-') })}
                className="w-full h-12 px-4 rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all" />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">Slug*</label>
              <input type="text" required value={formData.slug} onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                className="w-full h-12 px-4 rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">Tagline</label>
            <input type="text" value={formData.tagline} onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
              className="w-full h-12 px-4 rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all" />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">Description*</label>
            <textarea required value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} rows={4}
              className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all resize-none" />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">Use Cases</label>
            <div className="flex gap-2 mb-2">
              <input type="text" value={useCaseInput} onChange={(e) => setUseCaseInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addUseCase())}
                className="flex-1 h-10 px-4 rounded-lg border border-white/10 bg-white/5 text-white text-sm" placeholder="Add use case..." />
              <button type="button" onClick={addUseCase} className="px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-lg hover:bg-cyan-500/30 transition-all">
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {formData.useCases.map((use, i) => (
                <span key={i} className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm flex items-center gap-2">
                  {use}
                  <button type="button" onClick={() => removeUseCase(i)} className="hover:text-cyan-300">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">Integrations</label>
            <div className="flex gap-2 mb-2">
              <input type="text" value={integrationInput} onChange={(e) => setIntegrationInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addIntegration())}
                className="flex-1 h-10 px-4 rounded-lg border border-white/10 bg-white/5 text-white text-sm" placeholder="Add integration..." />
              <button type="button" onClick={addIntegration} className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-all">
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {formData.integrations.map((integration, i) => (
                <span key={i} className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm flex items-center gap-2">
                  {integration}
                  <button type="button" onClick={() => removeIntegration(i)} className="hover:text-blue-300">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-white mb-2">Starting Price (AED)</label>
              <input type="number" value={formData.startingPrice} onChange={(e) => setFormData({ ...formData, startingPrice: parseFloat(e.target.value) })}
                className="w-full h-12 px-4 rounded-xl border border-white/10 bg-white/5 text-white focus:ring-2 focus:ring-cyan-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">CTA Label</label>
              <input type="text" value={formData.ctaLabel} onChange={(e) => setFormData({ ...formData, ctaLabel: e.target.value })}
                className="w-full h-12 px-4 rounded-xl border border-white/10 bg-white/5 text-white focus:ring-2 focus:ring-cyan-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">CTA URL</label>
              <input type="text" value={formData.ctaUrl} onChange={(e) => setFormData({ ...formData, ctaUrl: e.target.value })}
                className="w-full h-12 px-4 rounded-xl border border-white/10 bg-white/5 text-white focus:ring-2 focus:ring-cyan-500" />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button type="button" onClick={() => setFormData({ ...formData, active: !formData.active })}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${formData.active ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'}`}>
              {formData.active ? <ToggleRight className="w-5 h-5" /> : <ToggleLeft className="w-5 h-5" />}
              {formData.active ? 'Active' : 'Inactive'}
            </button>
          </div>

          <div className="flex gap-4 pt-4">
            <button type="submit" className="flex-1 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all flex items-center justify-center gap-2">
              <Save className="w-5 h-5" />
              {product ? 'Update Product' : 'Create Product'}
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
