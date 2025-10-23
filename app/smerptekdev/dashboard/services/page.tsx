'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Briefcase, Plus, Edit, Trash2, ArrowLeft, Save, X } from 'lucide-react';
import { AnimatedBackground } from '@/components/effects/AnimatedBackground';

interface Service {
  id?: string;
  name: string;
  slug: string;
  description: string;
  duration?: string;
  price?: string;
  features: string[];
  deliverables: string[];
  icon?: string;
  category: string;
  active: boolean;
  order: number;
}

export default function ServicesManagement() {
  const router = useRouter();
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingService, setEditingService] = useState<Service | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) { router.push('/smerptekdev'); return; }
    fetchServices();
  }, [router]);

  const fetchServices = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('/api/admin/services', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await response.json();
      if (response.ok) setServices(data.services || []);
    } catch (error) {
      console.error('Failed to fetch services:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this service?')) return;
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`/api/admin/services?id=${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (response.ok) fetchServices();
    } catch (error) {
      console.error('Failed to delete service:', error);
    }
  };

  const handleSave = async (service: Service) => {
    try {
      const token = localStorage.getItem('adminToken');
      const method = service.id ? 'PUT' : 'POST';
      const response = await fetch('/api/admin/services', {
        method,
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(service)
      });
      if (response.ok) {
        fetchServices();
        setShowForm(false);
        setEditingService(null);
      }
    } catch (error) {
      console.error('Failed to save service:', error);
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
                  <Briefcase className="w-8 h-8 text-orange-400" />
                  <div>
                    <h1 className="text-2xl font-bold text-white">Services</h1>
                    <p className="text-sm text-gray-400">{services.length} service{services.length !== 1 ? 's' : ''}</p>
                  </div>
                </div>
              </div>
              <button onClick={() => { setEditingService(null); setShowForm(true); }}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-orange-500/50 transition-all">
                <Plus className="w-5 h-5" />
                Add Service
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          {!showForm ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service) => (
                <div key={service.id} className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-white/20 transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">{service.name}</h3>
                      <div className="flex gap-2 items-center text-sm">
                        <span className="px-2 py-1 bg-orange-500/20 text-orange-400 rounded">{service.category}</span>
                        {service.duration && <span className="text-gray-400">{service.duration}</span>}
                        {service.price && <span className="text-green-400">{service.price}</span>}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button onClick={() => { setEditingService(service); setShowForm(true); }}
                        className="p-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 transition-all">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button onClick={() => service.id && handleDelete(service.id)}
                        className="p-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 transition-all">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm mb-3 line-clamp-2">{service.description}</p>
                  <div className="text-xs text-gray-500">
                    {service.features.length} features • {service.deliverables.length} deliverables
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <ServiceForm service={editingService} onSave={handleSave} onCancel={() => { setShowForm(false); setEditingService(null); }} />
          )}
        </div>
      </div>
    </div>
  );
}

function ServiceForm({ service, onSave, onCancel }: { service: Service | null; onSave: (s: Service) => void; onCancel: () => void }) {
  const [formData, setFormData] = useState<Service>(service || {
    name: '',
    slug: '',
    description: '',
    duration: '',
    price: '',
    features: [],
    deliverables: [],
    category: 'consultancy',
    active: true,
    order: 0
  });

  const [featureInput, setFeatureInput] = useState('');
  const [deliverableInput, setDeliverableInput] = useState('');

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

  const addDeliverable = () => {
    if (deliverableInput.trim()) {
      setFormData({ ...formData, deliverables: [...formData.deliverables, deliverableInput.trim()] });
      setDeliverableInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
      <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10">
        <h2 className="text-2xl font-bold text-white mb-6">{service ? 'Edit Service' : 'Create New Service'}</h2>

        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-white mb-2">Service Name*</label>
              <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value, slug: e.target.value.toLowerCase().replace(/\s+/g, '-') })}
                className="w-full h-12 px-4 rounded-xl border border-white/10 bg-white/5 text-white focus:ring-2 focus:ring-orange-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">Category*</label>
              <select required value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full h-12 px-4 rounded-xl border border-white/10 bg-white/5 text-white focus:ring-2 focus:ring-orange-500">
                <option value="consultancy">Consultancy</option>
                <option value="implementation">Implementation</option>
                <option value="support">Support</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">Description*</label>
            <textarea required value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} rows={4}
              className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white focus:ring-2 focus:ring-orange-500 resize-none" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-white mb-2">Duration</label>
              <input type="text" value={formData.duration} onChange={(e) => setFormData({ ...formData, duration: e.target.value })} placeholder="e.g., 2 weeks"
                className="w-full h-12 px-4 rounded-xl border border-white/10 bg-white/5 text-white focus:ring-2 focus:ring-orange-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">Price</label>
              <input type="text" value={formData.price} onChange={(e) => setFormData({ ...formData, price: e.target.value })} placeholder="e.g., From AED 15,000"
                className="w-full h-12 px-4 rounded-xl border border-white/10 bg-white/5 text-white focus:ring-2 focus:ring-orange-500" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">Features</label>
            <div className="flex gap-2 mb-2">
              <input type="text" value={featureInput} onChange={(e) => setFeatureInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addFeature())}
                className="flex-1 h-10 px-4 rounded-lg border border-white/10 bg-white/5 text-white text-sm" placeholder="Add feature..." />
              <button type="button" onClick={addFeature} className="px-4 py-2 bg-orange-500/20 text-orange-400 rounded-lg">
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-2">
              {formData.features.map((feature, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <span className="text-white text-sm">{feature}</span>
                  <button type="button" onClick={() => setFormData({ ...formData, features: formData.features.filter((_, idx) => idx !== i) })} className="text-red-400">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">Deliverables</label>
            <div className="flex gap-2 mb-2">
              <input type="text" value={deliverableInput} onChange={(e) => setDeliverableInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addDeliverable())}
                className="flex-1 h-10 px-4 rounded-lg border border-white/10 bg-white/5 text-white text-sm" placeholder="Add deliverable..." />
              <button type="button" onClick={addDeliverable} className="px-4 py-2 bg-pink-500/20 text-pink-400 rounded-lg">
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-2">
              {formData.deliverables.map((deliverable, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <span className="text-white text-sm">{deliverable}</span>
                  <button type="button" onClick={() => setFormData({ ...formData, deliverables: formData.deliverables.filter((_, idx) => idx !== i) })} className="text-red-400">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <button type="submit" className="flex-1 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-orange-500/50 transition-all flex items-center justify-center gap-2">
              <Save className="w-5 h-5" />
              {service ? 'Update Service' : 'Create Service'}
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
