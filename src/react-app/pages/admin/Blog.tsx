import { useState } from 'react';
import AdminLayout from '@/react-app/components/admin/AdminLayout';
import { Plus, Edit, Trash2, Eye, EyeOff, Search, Filter, Settings, X } from 'lucide-react';
import ImageUpload from '@/react-app/components/admin/ImageUpload';
import RichTextEditor from '@/react-app/components/admin/RichTextEditor';
import CategoryManager from '@/react-app/components/admin/CategoryManager';
import { useBlogPosts } from '@/react-app/hooks/useBlogPosts';
import { BlogPost, mockCategories } from '@/react-app/data/mockData';

export default function AdminBlog() {
  const { posts: initialPosts, loading: postsLoading } = useBlogPosts();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState(mockCategories);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [activeTab, setActiveTab] = useState('posts');
  const [showModal, setShowModal] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [formData, setFormData] = useState({
    title: '', slug: '', excerpt: '', content: '', author: '', category: '',
    image_url: '', tags: '', is_published: true, read_time: ''
  });

  useState(() => {
    if (!postsLoading && initialPosts.length > 0) {
      setPosts(initialPosts);
    }
  }, [initialPosts, postsLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title.trim() || !formData.content.trim()) {
      alert('Título e conteúdo são obrigatórios');
      return;
    }

    const postData = {
      ...formData,
      slug: formData.slug || generateSlug(formData.title),
      tags: formData.tags ? formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag) : []
    };

    if (editingPost) {
      const updatedPosts = posts.map(post => 
        post.id === editingPost.id 
          ? { ...post, ...postData, updated_at: new Date().toISOString() }
          : post
      );
      setPosts(updatedPosts);
    } else {
      const newPost: BlogPost = {
        id: Date.now(),
        ...postData,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };
      setPosts([newPost, ...posts]);
    }
    
    alert(editingPost ? 'Post atualizado!' : 'Post criado!');
    setShowModal(false);
    resetForm();
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Tem certeza que deseja excluir este post?')) return;
    setPosts(posts.filter(post => post.id !== id));
    alert('Post excluído!');
  };

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post);
    setFormData({
      title: post.title, slug: post.slug, excerpt: post.excerpt, content: post.content,
      author: post.author, category: post.category, image_url: post.image_url,
      tags: post.tags.join(', '), is_published: post.is_published, read_time: post.read_time
    });
    setShowModal(true);
  };

  const resetForm = () => {
    setFormData({
      title: '', slug: '', excerpt: '', content: '', author: '', category: '',
      image_url: '', tags: '', is_published: true, read_time: ''
    });
    setEditingPost(null);
  };

  const generateSlug = (title: string) => {
    return title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').trim();
  };

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || post.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const tabs = [
    { id: 'posts', label: 'Posts', icon: Edit },
    { id: 'categories', label: 'Categorias', icon: Settings }
  ];

  return (
    <AdminLayout title="Gerenciar Blog">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Posts do Blog</h2>
            <p className="text-gray-600">Gerencie os artigos do seu blog</p>
          </div>
          {activeTab === 'posts' && (
            <button
              onClick={() => { resetForm(); setShowModal(true); }}
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-4 py-2 rounded-lg font-medium flex items-center space-x-2"
            >
              <Plus className="w-4 h-4" />
              <span>Novo Post</span>
            </button>
          )}
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id ? 'border-yellow-500 text-yellow-600' : 'border-transparent text-gray-500'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'posts' && (
              <div className="space-y-6">
                {/* Filters */}
                <div className="flex gap-4">
                  <div className="flex-1 relative">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Buscar posts..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
                    />
                  </div>
                  <select
                    value={filterCategory}
                    onChange={(e) => setFilterCategory(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
                  >
                    <option value="all">Todas as categorias</option>
                    {categories.map(cat => (
                      <option key={cat.name} value={cat.name}>{cat.name}</option>
                    ))}
                  </select>
                </div>

                {/* Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredPosts.map((post) => (
                    <div key={post.id} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium text-gray-900 truncate">{post.title}</h3>
                        <div className="flex space-x-1">
                          <button onClick={() => handleEdit(post)} className="text-blue-600 p-1">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button onClick={() => handleDelete(post.id)} className="text-red-600 p-1">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      <div className="text-sm text-gray-500 space-y-1">
                        <p>{post.author} • {post.category}</p>
                        <p>{new Date(post.created_at).toLocaleDateString('pt-BR')}</p>
                        <span className={`inline-flex items-center px-2 py-1 text-xs rounded-full ${
                          post.is_published ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {post.is_published ? 'Publicado' : 'Rascunho'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'categories' && (
              <CategoryManager 
                categories={categories}
                onCategoriesChange={setCategories}
              />
            )}
          </div>
        </div>

        {/* Simplified Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
            <div className="relative top-10 mx-auto p-5 border w-11/12 max-w-4xl shadow-lg rounded-md bg-white">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-medium">{editingPost ? 'Editar Post' : 'Novo Post'}</h3>
                <button onClick={() => setShowModal(false)} className="text-gray-400">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value, slug: prev.slug || generateSlug(e.target.value) }))}
                    placeholder="Título *"
                    className="px-3 py-2 border rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                  />
                  <input
                    type="text"
                    value={formData.author}
                    onChange={(e) => setFormData(prev => ({ ...prev, author: e.target.value }))}
                    placeholder="Autor *"
                    className="px-3 py-2 border rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                    className="px-3 py-2 border rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                  >
                    <option value="">Categoria *</option>
                    {categories.map(cat => (
                      <option key={cat.name} value={cat.name}>{cat.name}</option>
                    ))}
                  </select>
                  <input
                    type="text"
                    value={formData.read_time}
                    onChange={(e) => setFormData(prev => ({ ...prev, read_time: e.target.value }))}
                    placeholder="Tempo de leitura (ex: 5 min)"
                    className="px-3 py-2 border rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                  />
                </div>

                <textarea
                  rows={2}
                  value={formData.excerpt}
                  onChange={(e) => setFormData(prev => ({ ...prev, excerpt: e.target.value }))}
                  placeholder="Resumo do post"
                  className="w-full px-3 py-2 border rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                />

                <input
                  type="text"
                  value={formData.tags}
                  onChange={(e) => setFormData(prev => ({ ...prev, tags: e.target.value }))}
                  placeholder="Tags (separadas por vírgula)"
                  className="w-full px-3 py-2 border rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                />

                <ImageUpload
                  value={formData.image_url}
                  onChange={(url) => setFormData(prev => ({ ...prev, image_url: url }))}
                />

                <RichTextEditor
                  value={formData.content}
                  onChange={(content) => setFormData(prev => ({ ...prev, content }))}
                />

                <div className="flex justify-between items-center pt-4 border-t">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.is_published}
                      onChange={(e) => setFormData(prev => ({ ...prev, is_published: e.target.checked }))}
                      className="mr-2"
                    />
                    Publicar imediatamente
                  </label>

                  <div className="flex space-x-3">
                    <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 border rounded-md">
                      Cancelar
                    </button>
                    <button type="submit" className="px-4 py-2 bg-yellow-500 text-gray-900 rounded-md">
                      {editingPost ? 'Salvar' : 'Criar'}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}