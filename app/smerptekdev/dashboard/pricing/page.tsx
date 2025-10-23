'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { DollarSign, Plus, Edit, Trash2, ArrowLeft, Save, X, Star } from 'lucide-react';
import { AnimatedBackground } from '@/components/effects/AnimatedBackground';

interface PricingPlan {
  id?: string;
  name: string;
  slug: string;
  tagline?: string;
  priceMonthly: number;
  priceAnnual?: number;
  features: string[];
  addOns?: any;
  recommended: boolean;
  ctaLabel?: string;
  order: number;
  active: boolean;
}

export default function PricingManagement() {
  const router = useRouter();
  const [plans, setPlans] = useState<PricingPlan[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingPlan, setEditingPlan] = useState<PricingPlan | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) { router.push('/smerptekdev'); return; }
    fetchPlans();
  }, [router]);

  const fetchPlans = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('/api/admin/pricing', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await response.json();
      if (response.ok) setPlans(data.plans || []);
    } catch (error) {
      console.error('Failed to fetch plans:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this pricing plan?')) return;
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`/api/admin/pricing?id=${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (response.ok) fetchPlans();
    } catch (error) {
      console.error('Failed to delete plan:', error);
    }
  };

  const handleSave = async (plan: PricingPlan) => {
    try {
      const token = localStorage.getItem('adminToken');
      const method = plan.id ? 'PUT' : 'POST';
      const response = await fetch('/api/admin/pricing', {
        method,
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(plan)
      });
      if (response.ok) {
        fetchPlans();
        setShowForm(false);
        setEditingPlan(null);
      }
    } catch (error) {
      console.error('Failed to save plan:', error);
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
                  <DollarSign className="w-8 h-8 text-green-400" />
                  <div>
                    <h1 className="text-2xl font-bold text-white">Pricing Plans</h1>
                    <p className="text-sm text-gray-400">{plans.length} plan{plans.length !== 1 ? 's' : ''}</p>
                  </div>
                </div>
              </div>
              <button onClick={() => { setEditingPlan(null); setShowForm(true); }}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-green-500/50 transition-all">
                <Plus className="w-5 h-5" />
                Add Plan
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          {!showForm ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {plans.map((plan) => (
                <div key={plan.id} className={`p-6 rounded-2xl border transition-all ${plan.recommended ? 'bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-green-500/50' : 'bg-gradient-to-br from-white/5 to-white/10 border-white/10'}`}>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                        {plan.recommended && <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />}
                      </div>
                      {plan.tagline && <p className="text-sm text-gray-400">{plan.tagline}</p>}
                    </div>
                    <div className="flex gap-1">
                      <button onClick={() => { setEditingPlan(plan); setShowForm(true); }}
                        className="p-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 transition-all">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button onClick={() => plan.id && handleDelete(plan.id)}
                        className="p-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 transition-all">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="text-3xl font-bold text-white">AED {plan.priceMonthly}</div>
                    <div className="text-sm text-gray-400">per month</div>
                    {plan.priceAnnual && <div className="text-sm text-green-400 mt-1">AED {plan.priceAnnual}/year (save {Math.round((1 - plan.priceAnnual / (plan.priceMonthly * 12)) * 100)}%)</div>}
                  </div>
                  <div className="space-y-2">
                    {plan.features.slice(0, 5).map((feature, i) => (
                      <div key={i} className="text-sm text-gray-300">• {feature}</div>
                    ))}
                    {plan.features.length > 5 && <div className="text-sm text-gray-500">+ {plan.features.length - 5} more</div>}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <PricingForm plan={editingPlan} onSave={handleSave} onCancel={() => { setShowForm(false); setEditingPlan(null); }} />
          )}
        </div>
      </div>
    </div>
  );
}

function PricingForm({ plan, onSave, onCancel }: { plan: PricingPlan | null; onSave: (p: PricingPlan) => void; onCancel: () => void }) {
  const [formData, setFormData] = useState<PricingPlan>(plan || {
    name: '',
    slug: '',
    tagline: '',
    priceMonthly: 0,
    priceAnnual: 0,
    features: [],
    recommended: false,
    ctaLabel: 'Get Started',
    order: 0,
    active: true
  });

  const [featureInput, setFeatureInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const addFeature = () => {
    if (featureInput.trim()) {
      setFormData({ ...formData, features: [...formData.features, featureInput.trim()] });
      setFeatureInput('');
    }
  };

  const removeFeature = (index: number) => {
    setFormData({ ...formData, features: formData.features.filter((_, i) => i !== index) });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
      <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10">
        <h2 className="text-2xl font-bold text-white mb-6">{plan ? 'Edit Pricing Plan' : 'Create New Plan'}</h2>

        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-white mb-2">Plan Name*</label>
              <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value, slug: e.target.value.toLowerCase().replace(/\s+/g, '-') })}
                className="w-full h-12 px-4 rounded-xl border border-white/10 bg-white/5 text-white focus:ring-2 focus:ring-green-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">Tagline</label>
              <input type="text" value={formData.tagline} onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                className="w-full h-12 px-4 rounded-xl border border-white/10 bg-white/5 text-white focus:ring-2 focus:ring-green-500" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-white mb-2">Monthly Price (AED)*</label>
              <input type="number" required value={formData.priceMonthly} onChange={(e) => setFormData({ ...formData, priceMonthly: parseFloat(e.target.value) })}
                className="w-full h-12 px-4 rounded-xl border border-white/10 bg-white/5 text-white focus:ring-2 focus:ring-green-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">Annual Price (AED)</label>
              <input type="number" value={formData.priceAnnual} onChange={(e) => setFormData({ ...formData, priceAnnual: parseFloat(e.target.value) })}
                className="w-full h-12 px-4 rounded-xl border border-white/10 bg-white/5 text-white focus:ring-2 focus:ring-green-500" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">Features</label>
            <div className="flex gap-2 mb-2">
              <input type="text" value={featureInput} onChange={(e) => setFeatureInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addFeature())}
                className="flex-1 h-10 px-4 rounded-lg border border-white/10 bg-white/5 text-white text-sm" placeholder="Add feature..." />
              <button type="button" onClick={addFeature} className="px-4 py-2 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30">
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-2">
              {formData.features.map((feature, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <span className="text-white text-sm">{feature}</span>
                  <button type="button" onClick={() => removeFeature(i)} className="text-red-400 hover:text-red-300">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={formData.recommended} onChange={(e) => setFormData({ ...formData, recommended: e.target.checked })}
                className="w-5 h-5 rounded border-white/20 bg-white/5 text-green-500 focus:ring-green-500" />
              <span className="text-white flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400" />
                Mark as Recommended
              </span>
            </label>
          </div>

          <div className="flex gap-4 pt-4">
            <button type="submit" className="flex-1 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-green-500/50 transition-all flex items-center justify-center gap-2">
              <Save className="w-5 h-5" />
              {plan ? 'Update Plan' : 'Create Plan'}
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
