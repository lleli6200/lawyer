import { useState } from 'react';
import { Plus, Edit, Trash2, X, Check } from 'lucide-react';

interface Category {
  id: number;
  name: string;
  slug: string;
  description?: string;
  color: string;
  post_count: number;
}

interface CategoryManagerProps {
  categories: Category[];
  onCategoriesChange: (categories: Category[]) => void;
}

export default function CategoryManager({ categories, onCategoriesChange }: CategoryManagerProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    color: '#3b82f6'
  });

  const colors = [
    '#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6',
    '#06b6d4', '#84cc16', '#f97316', '#ec4899', '#6b7280'
  ];

  const generateSlug = (name: string) => {
    return name
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const categoryData = {
      id: editingCategory?.id || Date.now(),
      name: formData.name,
      slug: generateSlug(formData.name),
      description: formData.description,
      color: formData.color,
      post_count: editingCategory?.post_count || 0
    };

    if (editingCategory) {
      const updatedCategories = categories.map(cat => 
        cat.id === editingCategory.id ? categoryData : cat
      );
      onCategoriesChange(updatedCategories);
    } else {
      onCategoriesChange([...categories, categoryData]);
    }

    resetForm();
    setIsModalOpen(false);
  };

  const handleEdit = (category: Category) => {
    setEditingCategory(category);
    setFormData({
      name: category.name,
      description: category.description || '',
      color: category.color
    });
    setIsModalOpen(true);
  };

  const handleDelete = (id: number) => {
    const category = categories.find(cat => cat.id === id);
    if (category && category.post_count > 0) {
      if (!confirm(`A categoria "${category.name}" possui ${category.post_count} posts. Tem certeza que deseja excluí-la?`)) {
        return;
      }
    }
    
    const updatedCategories = categories.filter(cat => cat.id !== id);
    onCategoriesChange(updatedCategories);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      color: '#3b82f6'
    });
    setEditingCategory(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-gray-900">Gerenciar Categorias</h3>
        <button
          onClick={() => {
            resetForm();
            setIsModalOpen(true);
          }}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Nova Categoria</span>
        </button>
      </div>

      {/* Categories List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category) => (
          <div key={category.id} className="bg-white border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <div 
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: category.color }}
                ></div>
                <h4 className="font-medium text-gray-900">{category.name}</h4>
              </div>
              <div className="flex items-center space-x-1">
                <button
                  onClick={() => handleEdit(category)}
                  className="text-blue-600 hover:text-blue-800 p-1"
                >
                  <Edit className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDelete(category.id)}
                  className="text-red-600 hover:text-red-800 p-1"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            {category.description && (
              <p className="text-sm text-gray-600 mb-2">{category.description}</p>
            )}
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>Slug: {category.slug}</span>
              <span>{category.post_count} posts</span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-11/12 max-w-md shadow-lg rounded-md bg-white">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-900">
                {editingCategory ? 'Editar Categoria' : 'Nova Categoria'}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nome da Categoria *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Descrição
                </label>
                <textarea
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cor da Categoria
                </label>
                <div className="flex flex-wrap gap-2">
                  {colors.map((color) => (
                    <button
                      key={color}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, color }))}
                      className={`w-8 h-8 rounded-full border-2 ${
                        formData.color === color ? 'border-gray-800' : 'border-gray-300'
                      }`}
                      style={{ backgroundColor: color }}
                    >
                      {formData.color === color && (
                        <Check className="w-4 h-4 text-white mx-auto" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md font-medium"
                >
                  {editingCategory ? 'Salvar' : 'Criar'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}