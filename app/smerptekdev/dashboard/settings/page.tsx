'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Settings as SettingsIcon, ArrowLeft, Save, Globe, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { AnimatedBackground } from '@/components/effects/AnimatedBackground';

export default function SiteSettings() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [settings, setSettings] = useState({
    siteName: 'SMERP TEK',
    siteTagline: 'Empowering Businesses with Smart ERP Solutions',
    contactEmail: 'info@smerptek.com',
    contactPhone: '+971 50 123 4567',
    contactAddress: 'Dubai, UAE',
    socialFacebook: '',
    socialTwitter: '',
    socialLinkedin: 'https://linkedin.com/company/smerptek',
    socialInstagram: '',
    metaDescription: 'SMERP TEK provides cutting-edge ERP solutions including SMERP EDU, SMERP Crew, SMERP Automate, and SMERP Analytics.',
    metaKeywords: 'ERP, education management, workforce management, business automation, analytics',
    googleAnalyticsId: '',
    enableMaintenance: false
  });

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) { router.push('/smerptekdev'); return; }
    fetchSettings();
  }, [router]);

  const fetchSettings = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('/api/admin/settings', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await response.json();
      if (response.ok && data.settings) {
        // Map settings from database
        const settingsMap: any = {};
        data.settings.forEach((s: any) => {
          settingsMap[s.key] = s.value;
        });
        setSettings({ ...settings, ...settingsMap });
      }
    } catch (error) {
      console.error('Failed to fetch settings:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const token = localStorage.getItem('adminToken');

      // Save each setting
      const promises = Object.entries(settings).map(([key, value]) =>
        fetch('/api/admin/settings', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ key, value, description: `Site ${key}` })
        })
      );

      await Promise.all(promises);
      alert('Settings saved successfully!');
    } catch (error) {
      console.error('Failed to save settings:', error);
      alert('Failed to save settings');
    } finally {
      setSaving(false);
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
                  <SettingsIcon className="w-8 h-8 text-purple-400" />
                  <div>
                    <h1 className="text-2xl font-bold text-white">Site Settings</h1>
                    <p className="text-sm text-gray-400">Configure your website</p>
                  </div>
                </div>
              </div>
              <button onClick={handleSave} disabled={saving}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all disabled:opacity-50">
                <Save className="w-5 h-5" />
                {saving ? 'Saving...' : 'Save Settings'}
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* General Settings */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10">
              <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <Globe className="w-5 h-5" />
                General Information
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Site Name</label>
                  <input type="text" value={settings.siteName} onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
                    className="w-full h-12 px-4 rounded-xl border border-white/10 bg-white/5 text-white focus:ring-2 focus:ring-purple-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Site Tagline</label>
                  <input type="text" value={settings.siteTagline} onChange={(e) => setSettings({ ...settings, siteTagline: e.target.value })}
                    className="w-full h-12 px-4 rounded-xl border border-white/10 bg-white/5 text-white focus:ring-2 focus:ring-purple-500" />
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10">
              <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Contact Information
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Email</label>
                  <input type="email" value={settings.contactEmail} onChange={(e) => setSettings({ ...settings, contactEmail: e.target.value })}
                    className="w-full h-12 px-4 rounded-xl border border-white/10 bg-white/5 text-white focus:ring-2 focus:ring-purple-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Phone</label>
                  <input type="text" value={settings.contactPhone} onChange={(e) => setSettings({ ...settings, contactPhone: e.target.value })}
                    className="w-full h-12 px-4 rounded-xl border border-white/10 bg-white/5 text-white focus:ring-2 focus:ring-purple-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Address</label>
                  <input type="text" value={settings.contactAddress} onChange={(e) => setSettings({ ...settings, contactAddress: e.target.value })}
                    className="w-full h-12 px-4 rounded-xl border border-white/10 bg-white/5 text-white focus:ring-2 focus:ring-purple-500" />
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10">
              <h2 className="text-xl font-semibold text-white mb-6">Social Media Links</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-white mb-2 flex items-center gap-2">
                    <Facebook className="w-4 h-4" /> Facebook
                  </label>
                  <input type="url" value={settings.socialFacebook} onChange={(e) => setSettings({ ...settings, socialFacebook: e.target.value })}
                    className="w-full h-12 px-4 rounded-xl border border-white/10 bg-white/5 text-white focus:ring-2 focus:ring-purple-500" placeholder="https://facebook.com/..." />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2 flex items-center gap-2">
                    <Twitter className="w-4 h-4" /> Twitter
                  </label>
                  <input type="url" value={settings.socialTwitter} onChange={(e) => setSettings({ ...settings, socialTwitter: e.target.value })}
                    className="w-full h-12 px-4 rounded-xl border border-white/10 bg-white/5 text-white focus:ring-2 focus:ring-purple-500" placeholder="https://twitter.com/..." />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2 flex items-center gap-2">
                    <Linkedin className="w-4 h-4" /> LinkedIn
                  </label>
                  <input type="url" value={settings.socialLinkedin} onChange={(e) => setSettings({ ...settings, socialLinkedin: e.target.value })}
                    className="w-full h-12 px-4 rounded-xl border border-white/10 bg-white/5 text-white focus:ring-2 focus:ring-purple-500" placeholder="https://linkedin.com/company/..." />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2 flex items-center gap-2">
                    <Instagram className="w-4 h-4" /> Instagram
                  </label>
                  <input type="url" value={settings.socialInstagram} onChange={(e) => setSettings({ ...settings, socialInstagram: e.target.value })}
                    className="w-full h-12 px-4 rounded-xl border border-white/10 bg-white/5 text-white focus:ring-2 focus:ring-purple-500" placeholder="https://instagram.com/..." />
                </div>
              </div>
            </div>

            {/* SEO Settings */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10">
              <h2 className="text-xl font-semibold text-white mb-6">SEO Settings</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Meta Description</label>
                  <textarea value={settings.metaDescription} onChange={(e) => setSettings({ ...settings, metaDescription: e.target.value })} rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white focus:ring-2 focus:ring-purple-500 resize-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Meta Keywords</label>
                  <input type="text" value={settings.metaKeywords} onChange={(e) => setSettings({ ...settings, metaKeywords: e.target.value })}
                    className="w-full h-12 px-4 rounded-xl border border-white/10 bg-white/5 text-white focus:ring-2 focus:ring-purple-500" placeholder="keyword1, keyword2, keyword3" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Google Analytics ID</label>
                  <input type="text" value={settings.googleAnalyticsId} onChange={(e) => setSettings({ ...settings, googleAnalyticsId: e.target.value })}
                    className="w-full h-12 px-4 rounded-xl border border-white/10 bg-white/5 text-white focus:ring-2 focus:ring-purple-500" placeholder="G-XXXXXXXXXX" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
