'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  LayoutDashboard, FileText, Package, DollarSign, MessageSquare, Globe,
  Settings, LogOut, TrendingUp, Eye, Briefcase, Users, HelpCircle, Star,
  AlertCircle, CheckCircle, Clock
} from 'lucide-react';
import { AnimatedBackground } from '@/components/effects/AnimatedBackground';

export default function AdminDashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/smerptekdev');
      return;
    }
    fetchStats();
  }, [router]);

  const fetchStats = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('/api/admin/stats', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await response.json();
      if (response.ok) {
        setStats(data.stats);
      }
    } catch (error) {
      console.error('Failed to fetch stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    router.push('/smerptekdev');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white text-xl">Loading dashboard...</div>
      </div>
    );
  }

  const menuItems = [
    {
      title: 'Blog Posts',
      icon: FileText,
      description: 'Manage blog articles',
      href: '/smerptekdev/dashboard/blog',
      color: 'from-purple-500 to-blue-500',
      count: stats?.overview?.totalBlogPosts || 0,
      badge: stats?.overview?.publishedBlogs || 0
    },
    {
      title: 'Products',
      icon: Package,
      description: 'Manage products',
      href: '/smerptekdev/dashboard/products',
      color: 'from-cyan-500 to-blue-500',
      count: stats?.overview?.totalProducts || 0
    },
    {
      title: 'Pricing Plans',
      icon: DollarSign,
      description: 'Manage pricing tiers',
      href: '/smerptekdev/dashboard/pricing',
      color: 'from-green-500 to-emerald-500',
      count: stats?.overview?.activePricingPlans || 0
    },
    {
      title: 'Services',
      icon: Briefcase,
      description: 'Manage services',
      href: '/smerptekdev/dashboard/services',
      color: 'from-orange-500 to-pink-500',
      count: stats?.overview?.activeServices || 0
    },
    {
      title: 'Pages',
      icon: Globe,
      description: 'Manage website pages',
      href: '/smerptekdev/dashboard/pages',
      color: 'from-blue-500 to-indigo-500',
      count: stats?.overview?.totalPages || 0,
      badge: stats?.overview?.publishedPages || 0
    },
    {
      title: 'Form Submissions',
      icon: MessageSquare,
      description: 'View contact forms',
      href: '/smerptekdev/dashboard/forms',
      color: 'from-pink-500 to-rose-500',
      count: stats?.overview?.totalFormSubmissions || 0,
      badge: stats?.overview?.unreadForms || 0,
      alert: (stats?.overview?.unreadForms || 0) > 0
    },
    {
      title: 'Testimonials',
      icon: Star,
      description: 'Manage testimonials',
      href: '/smerptekdev/dashboard/testimonials',
      color: 'from-yellow-500 to-orange-500',
      count: stats?.overview?.testimonials || 0
    },
    {
      title: 'FAQs',
      icon: HelpCircle,
      description: 'Manage FAQ content',
      href: '/smerptekdev/dashboard/faqs',
      color: 'from-indigo-500 to-purple-500',
      count: stats?.overview?.faqs || 0
    },
    {
      title: 'Site Settings',
      icon: Settings,
      description: 'Configure website',
      href: '/smerptekdev/dashboard/settings',
      color: 'from-gray-500 to-slate-500'
    }
  ];

  return (
    <div className="relative min-h-screen">
      <div className="opacity-30"><AnimatedBackground /></div>

      <div className="relative z-10">
        {/* Header */}
        <div className="border-b border-white/10 bg-black/20 backdrop-blur-sm sticky top-0 z-20">
          <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <LayoutDashboard className="w-8 h-8 text-purple-400" />
                <div>
                  <h1 className="text-2xl font-bold text-white">SMERP TEK Admin</h1>
                  <p className="text-sm text-gray-400">Content Management System</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <a href="/" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-all">
                  <Eye className="w-4 h-4" />
                  <span className="hidden sm:inline">View Site</span>
                </a>
                <button onClick={handleLogout}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 transition-all">
                  <LogOut className="w-4 h-4" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          {/* Welcome */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">Welcome back, Saleh! 👋</h2>
            <p className="text-gray-400">Here's what's happening with your website</p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-gray-400">Total Content</p>
                <TrendingUp className="w-5 h-5 text-purple-400" />
              </div>
              <p className="text-3xl font-bold text-white">
                {(stats?.overview?.totalProducts || 0) + (stats?.overview?.totalBlogPosts || 0) + (stats?.overview?.totalPages || 0)}
              </p>
              <p className="text-xs text-gray-500 mt-1">Items published</p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-gray-400">Form Submissions</p>
                <MessageSquare className="w-5 h-5 text-green-400" />
              </div>
              <p className="text-3xl font-bold text-white">{stats?.overview?.totalFormSubmissions || 0}</p>
              <p className="text-xs text-orange-400 mt-1">{stats?.overview?.unreadForms || 0} unread</p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-gray-400">Active Products</p>
                <Package className="w-5 h-5 text-cyan-400" />
              </div>
              <p className="text-3xl font-bold text-white">{stats?.overview?.totalProducts || 0}</p>
              <p className="text-xs text-gray-500 mt-1">SMERP products</p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-500/10 to-rose-500/10 border border-pink-500/20">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-gray-400">Pricing Plans</p>
                <DollarSign className="w-5 h-5 text-pink-400" />
              </div>
              <p className="text-3xl font-bold text-white">{stats?.overview?.activePricingPlans || 0}</p>
              <p className="text-xs text-gray-500 mt-1">Active plans</p>
            </div>
          </div>

          {/* Recent Activity */}
          {stats?.recentActivity?.forms && stats.recentActivity.forms.length > 0 && (
            <div className="mb-8 p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-400" />
                Recent Form Submissions
              </h3>
              <div className="space-y-3">
                {stats.recentActivity.forms.slice(0, 5).map((form: any) => (
                  <div key={form.id} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
                    <div>
                      <p className="text-white font-medium">{form.data.name || form.email}</p>
                      <p className="text-sm text-gray-400">{form.email}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-gray-500">{new Date(form.createdAt).toLocaleDateString()}</span>
                      {!form.read && (
                        <span className="px-2 py-1 bg-orange-500/20 text-orange-400 text-xs rounded-full">New</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <a href="/smerptekdev/dashboard/forms"
                className="mt-4 inline-block text-sm text-purple-400 hover:text-purple-300 transition-colors">
                View all submissions →
              </a>
            </div>
          )}

          {/* Management Grid */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">Content Management</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a key={item.title} href={item.href}
                    className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                    <div className="relative">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color}`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex flex-col items-end gap-1">
                          {item.count !== undefined && (
                            <span className="text-2xl font-bold text-white/50">{item.count}</span>
                          )}
                          {item.badge !== undefined && item.badge !== item.count && (
                            <span className="text-xs text-green-400">{item.badge} active</span>
                          )}
                          {item.alert && (
                            <AlertCircle className="w-4 h-4 text-orange-400" />
                          )}
                        </div>
                      </div>

                      <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-400">{item.description}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Status Footer */}
          <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-8 h-8 text-green-400" />
                <div>
                  <h4 className="text-lg font-semibold text-white">System Status: Operational</h4>
                  <p className="text-sm text-gray-400">All systems running smoothly</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-400">Last updated</p>
                <p className="text-white font-medium">{new Date().toLocaleTimeString()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
