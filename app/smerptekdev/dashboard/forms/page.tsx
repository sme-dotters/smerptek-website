'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { MessageSquare, ArrowLeft, Mail, Phone, Building, Calendar, Trash2 } from 'lucide-react';
import { AnimatedBackground } from '@/components/effects/AnimatedBackground';

interface FormSubmission {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  submittedAt: string;
  status: 'new' | 'read' | 'responded';
}

export default function FormsManagement() {
  const router = useRouter();
  const [submissions, setSubmissions] = useState<FormSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedSubmission, setSelectedSubmission] = useState<FormSubmission | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/smerptekdev');
      return;
    }
    fetchSubmissions();
  }, [router]);

  const fetchSubmissions = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('/api/admin/forms', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await response.json();
      if (response.ok) {
        // Map database submissions to UI format
        const mapped = (data.submissions || []).map((s: any) => ({
          id: s.id,
          name: s.data.name || 'N/A',
          email: s.email,
          phone: s.data.phone,
          company: s.data.company,
          message: s.data.message || '',
          submittedAt: new Date(s.createdAt).toLocaleString(),
          status: s.read ? 'read' : 'new'
        }));
        setSubmissions(mapped);
      }
    } catch (error) {
      console.error('Failed to fetch submissions:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleViewSubmission = async (submission: FormSubmission) => {
    setSelectedSubmission(submission);
    if (submission.status === 'new') {
      try {
        const token = localStorage.getItem('adminToken');
        await fetch('/api/admin/forms', {
          method: 'PUT',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ id: submission.id, read: true })
        });
        setSubmissions(submissions.map(s =>
          s.id === submission.id ? { ...s, status: 'read' as const } : s
        ));
      } catch (error) {
        console.error('Failed to mark as read:', error);
      }
    }
  };

  const handleDeleteSubmission = async (id: string) => {
    if (!confirm('Are you sure you want to delete this submission?')) return;
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`/api/admin/forms?id=${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (response.ok) {
        setSubmissions(submissions.filter(s => s.id !== id));
        if (selectedSubmission?.id === id) {
          setSelectedSubmission(null);
        }
      }
    } catch (error) {
      console.error('Failed to delete submission:', error);
    }
  };

  const handleMarkAsResponded = (id: string) => {
    setSubmissions(submissions.map(s =>
      s.id === id ? { ...s, status: 'responded' as const } : s
    ));
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center"><div className="text-white">Loading...</div></div>;
  }

  const newCount = submissions.filter(s => s.status === 'new').length;

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
              <div className="flex items-center gap-4">
                <a
                  href="/smerptekdev/dashboard"
                  className="p-2 rounded-lg hover:bg-white/10 transition-all"
                >
                  <ArrowLeft className="w-6 h-6 text-white" />
                </a>
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-8 h-8 text-pink-400" />
                  <div>
                    <h1 className="text-2xl font-bold text-white">Form Submissions</h1>
                    <p className="text-sm text-gray-400">
                      {newCount} new submission{newCount !== 1 ? 's' : ''}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Submissions List */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-white mb-4">
                All Submissions ({submissions.length})
              </h2>
              {submissions.length === 0 ? (
                <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 text-center">
                  <MessageSquare className="w-12 h-12 text-gray-600 mx-auto mb-3" />
                  <p className="text-gray-400">No form submissions yet</p>
                </div>
              ) : (
                submissions.map((submission) => (
                  <div
                    key={submission.id}
                    onClick={() => handleViewSubmission(submission)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all ${
                      selectedSubmission?.id === submission.id
                        ? 'bg-gradient-to-br from-purple-500/20 to-blue-500/20 border-purple-500/50'
                        : 'bg-gradient-to-br from-white/5 to-white/10 border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-white">{submission.name}</h3>
                          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                            submission.status === 'new'
                              ? 'bg-green-500/20 text-green-400'
                              : submission.status === 'responded'
                              ? 'bg-blue-500/20 text-blue-400'
                              : 'bg-gray-500/20 text-gray-400'
                          }`}>
                            {submission.status}
                          </span>
                        </div>
                        <p className="text-sm text-gray-400">{submission.email}</p>
                        {submission.company && (
                          <p className="text-xs text-gray-500 mt-1">{submission.company}</p>
                        )}
                      </div>
                      <p className="text-xs text-gray-500">{submission.submittedAt}</p>
                    </div>
                    <p className="text-sm text-gray-300 line-clamp-2">{submission.message}</p>
                  </div>
                ))
              )}
            </div>

            {/* Submission Detail */}
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Details</h2>
              {selectedSubmission ? (
                <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10">
                  <div className="space-y-6">
                    {/* Contact Info */}
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4">Contact Information</h3>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-purple-500/10">
                            <Mail className="w-4 h-4 text-purple-400" />
                          </div>
                          <div>
                            <p className="text-xs text-gray-400">Email</p>
                            <a href={`mailto:${selectedSubmission.email}`} className="text-white hover:text-purple-400">
                              {selectedSubmission.email}
                            </a>
                          </div>
                        </div>

                        {selectedSubmission.phone && (
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-blue-500/10">
                              <Phone className="w-4 h-4 text-blue-400" />
                            </div>
                            <div>
                              <p className="text-xs text-gray-400">Phone</p>
                              <a href={`tel:${selectedSubmission.phone}`} className="text-white hover:text-blue-400">
                                {selectedSubmission.phone}
                              </a>
                            </div>
                          </div>
                        )}

                        {selectedSubmission.company && (
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-green-500/10">
                              <Building className="w-4 h-4 text-green-400" />
                            </div>
                            <div>
                              <p className="text-xs text-gray-400">Company</p>
                              <p className="text-white">{selectedSubmission.company}</p>
                            </div>
                          </div>
                        )}

                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-pink-500/10">
                            <Calendar className="w-4 h-4 text-pink-400" />
                          </div>
                          <div>
                            <p className="text-xs text-gray-400">Submitted</p>
                            <p className="text-white">{selectedSubmission.submittedAt}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3">Message</h3>
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                        <p className="text-white whitespace-pre-wrap">{selectedSubmission.message}</p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 pt-4">
                      {selectedSubmission.status !== 'responded' && (
                        <button
                          onClick={() => handleMarkAsResponded(selectedSubmission.id)}
                          className="flex-1 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-green-500/50 transition-all"
                        >
                          Mark as Responded
                        </button>
                      )}
                      <button
                        onClick={() => handleDeleteSubmission(selectedSubmission.id)}
                        className="px-6 py-3 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-xl font-semibold transition-all flex items-center gap-2"
                      >
                        <Trash2 className="w-4 h-4" />
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-12 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 text-center">
                  <MessageSquare className="w-12 h-12 text-gray-600 mx-auto mb-3" />
                  <p className="text-gray-400">Select a submission to view details</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
