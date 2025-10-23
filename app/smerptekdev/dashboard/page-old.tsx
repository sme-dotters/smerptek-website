'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  LayoutDashboard,
  FileText,
  Package,
  DollarSign,
  MessageSquare,
  Users,
  Settings,
  LogOut,
  TrendingUp,
  Eye
} from 'lucide-react';
import { AnimatedBackground } from '@/components/effects/AnimatedBackground';

export default function AdminDashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is authenticated
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/smerptekdev');
    } else {
      setLoading(false);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    router.push('/smerptekdev');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  const menuItems = [
    {
      title: 'Blog Posts',
      icon: FileText,
      description: 'Manage blog articles and content',
      href: '/smerptekdev/dashboard/blog',
      color: 'from-purple-500 to-blue-500',
      count: '-'
    },
    {
      title: 'Products',
      icon: Package,
      description: 'Update product features and details',
      href: '/smerptekdev/dashboard/products',
      color: 'from-cyan-500 to-blue-500',
      count: '4'
    },
    {
      title: 'Pricing Plans',
      icon: DollarSign,
      description: 'Manage pricing tiers and features',
      href: '/smerptekdev/dashboard/pricing',
      color: 'from-green-500 to-emerald-500',
      count: '3'
    },
    {
      title: 'Form Submissions',
      icon: MessageSquare,
      description: 'View contact form submissions',
      href: '/smerptekdev/dashboard/forms',
      color: 'from-pink-500 to-orange-500',
      count: '-'
    },
    {
      title: 'Analytics',
      icon: TrendingUp,
      description: 'View website statistics',
      href: '/smerptekdev/dashboard/analytics',
      color: 'from-indigo-500 to-purple-500',
      count: '-'
    },
    {
      title: 'Site Settings',
      icon: Settings,
      description: 'Configure global settings',
      href: '/smerptekdev/dashboard/settings',
      color: 'from-gray-500 to-slate-500',
      count: '-'
    }
  ];

  return (
    <div className="relative min-h-screen">
      <div className="opacity-30">
        <AnimatedBackground />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <LayoutDashboard className="w-8 h-8 text-purple-400" />
                <div>
                  <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
                  <p className="text-sm text-gray-400">SMERP TEK Content Management</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-all"
                >
                  <Eye className="w-4 h-4" />
                  <span className="hidden sm:inline">View Site</span>
                </a>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 transition-all"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          {/* Welcome Message */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">Welcome back, Saleh!</h2>
            <p className="text-gray-400">Manage your SMERP TEK website content from here</p>
          </div>

          {/* Dashboard Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.title}
                  href={item.href}
                  className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                  {/* Content */}
                  <div className="relative">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color}`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      {item.count && (
                        <span className="text-2xl font-bold text-white/50">{item.count}</span>
                      )}
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Quick Stats */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20">
              <p className="text-sm text-gray-400 mb-1">Total Products</p>
              <p className="text-3xl font-bold text-white">4</p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20">
              <p className="text-sm text-gray-400 mb-1">Pricing Plans</p>
              <p className="text-3xl font-bold text-white">3</p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-pink-500/10 to-orange-500/10 border border-pink-500/20">
              <p className="text-sm text-gray-400 mb-1">Solutions</p>
              <p className="text-3xl font-bold text-white">4</p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">
              <p className="text-sm text-gray-400 mb-1">Status</p>
              <p className="text-3xl font-bold text-green-400">Live</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
