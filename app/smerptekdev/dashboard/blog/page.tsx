'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FileText, Plus, Edit, Trash2, ArrowLeft } from 'lucide-react';
import { AnimatedBackground } from '@/components/effects/AnimatedBackground';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  status: 'draft' | 'published';
}

export default function BlogManagement() {
  const router = useRouter();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/smerptekdev');
    }
  }, [router]);

  const handleCreatePost = () => {
    setEditingPost(null);
    setShowForm(true);
  };

  const handleEditPost = (post: BlogPost) => {
    setEditingPost(post);
    setShowForm(true);
  };

  const handleDeletePost = (id: string) => {
    if (confirm('Are you sure you want to delete this post?')) {
      setPosts(posts.filter(p => p.id !== id));
    }
  };

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
                  <FileText className="w-8 h-8 text-purple-400" />
                  <div>
                    <h1 className="text-2xl font-bold text-white">Blog Posts</h1>
                    <p className="text-sm text-gray-400">Manage your blog content</p>
                  </div>
                </div>
              </div>

              <button
                onClick={handleCreatePost}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300"
              >
                <Plus className="w-5 h-5" />
                New Post
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          {!showForm ? (
            <>
              {/* Posts List */}
              {posts.length === 0 ? (
                <div className="text-center py-16">
                  <FileText className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-white mb-2">No blog posts yet</h2>
                  <p className="text-gray-400 mb-6">Create your first blog post to get started</p>
                  <button
                    onClick={handleCreatePost}
                    className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300"
                  >
                    Create First Post
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-6">
                  {posts.map((post) => (
                    <div
                      key={post.id}
                      className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-white/20 transition-all"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-semibold text-white">{post.title}</h3>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              post.status === 'published'
                                ? 'bg-green-500/20 text-green-400'
                                : 'bg-yellow-500/20 text-yellow-400'
                            }`}>
                              {post.status}
                            </span>
                          </div>
                          <p className="text-gray-400 mb-3">{post.excerpt}</p>
                          <p className="text-sm text-gray-500">Published: {post.publishedAt}</p>
                        </div>

                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEditPost(post)}
                            className="p-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 transition-all"
                          >
                            <Edit className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => handleDeletePost(post.id)}
                            className="p-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 transition-all"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          ) : (
            <BlogPostForm
              post={editingPost}
              onSave={(post) => {
                if (editingPost) {
                  setPosts(posts.map(p => p.id === post.id ? post : p));
                } else {
                  setPosts([...posts, { ...post, id: Date.now().toString() }]);
                }
                setShowForm(false);
              }}
              onCancel={() => setShowForm(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

function BlogPostForm({
  post,
  onSave,
  onCancel
}: {
  post: BlogPost | null;
  onSave: (post: BlogPost) => void;
  onCancel: () => void;
}) {
  const [title, setTitle] = useState(post?.title || '');
  const [excerpt, setExcerpt] = useState(post?.excerpt || '');
  const [content, setContent] = useState('');
  const [status, setStatus] = useState<'draft' | 'published'>(post?.status || 'draft');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      id: post?.id || '',
      title,
      excerpt,
      publishedAt: post?.publishedAt || new Date().toLocaleDateString(),
      status
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
      <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10">
        <h2 className="text-2xl font-bold text-white mb-6">
          {post ? 'Edit Post' : 'Create New Post'}
        </h2>

        <div className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full h-12 px-4 rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              placeholder="Enter post title"
            />
          </div>

          {/* Excerpt */}
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Excerpt
            </label>
            <textarea
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              required
              rows={3}
              className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none"
              placeholder="Brief description of the post"
            />
          </div>

          {/* Content */}
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Content
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={12}
              className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none"
              placeholder="Write your post content here..."
            />
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Status
            </label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as 'draft' | 'published')}
              className="w-full h-12 px-4 rounded-xl border border-white/10 bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              className="flex-1 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300"
            >
              {post ? 'Update Post' : 'Create Post'}
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-semibold transition-all"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
