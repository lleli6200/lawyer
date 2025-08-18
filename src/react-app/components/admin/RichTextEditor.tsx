import { useState } from 'react';
import { Bold, Italic, List, Link, Quote, Code, Eye, Edit } from 'lucide-react';

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
}

export default function RichTextEditor({ 
  value, 
  onChange, 
  label = "Conteúdo",
  placeholder = "Digite o conteúdo do post..."
}: RichTextEditorProps) {
  const [isPreview, setIsPreview] = useState(false);

  const insertMarkdown = (before: string, after: string = '') => {
    const textarea = document.querySelector('textarea') as HTMLTextAreaElement;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = value.substring(start, end);
    
    const newText = value.substring(0, start) + before + selectedText + after + value.substring(end);
    onChange(newText);
    
    // Restore cursor position
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + before.length, start + before.length + selectedText.length);
    }, 0);
  };

  const formatButtons = [
    { icon: Bold, label: 'Negrito', action: () => insertMarkdown('**', '**') },
    { icon: Italic, label: 'Itálico', action: () => insertMarkdown('*', '*') },
    { icon: List, label: 'Lista', action: () => insertMarkdown('\n- ') },
    { icon: Link, label: 'Link', action: () => insertMarkdown('[', '](url)') },
    { icon: Quote, label: 'Citação', action: () => insertMarkdown('\n> ') },
    { icon: Code, label: 'Código', action: () => insertMarkdown('`', '`') },
  ];

  const renderPreview = (text: string) => {
    return text.split('\n').map((paragraph, index) => {
      if (paragraph.startsWith('## ')) {
        return (
          <h2 key={index} className="text-2xl font-bold text-gray-900 mt-6 mb-3">
            {paragraph.replace('## ', '')}
          </h2>
        );
      }
      if (paragraph.startsWith('### ')) {
        return (
          <h3 key={index} className="text-xl font-bold text-gray-900 mt-4 mb-2">
            {paragraph.replace('### ', '')}
          </h3>
        );
      }
      if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
        return (
          <p key={index} className="font-semibold text-gray-900 mb-3">
            {paragraph.replace(/\*\*/g, '')}
          </p>
        );
      }
      if (paragraph.startsWith('- ')) {
        return (
          <li key={index} className="text-gray-700 mb-1 ml-4">
            {paragraph.replace('- ', '')}
          </li>
        );
      }
      if (paragraph.startsWith('> ')) {
        return (
          <blockquote key={index} className="border-l-4 border-blue-500 pl-4 italic text-gray-600 mb-3">
            {paragraph.replace('> ', '')}
          </blockquote>
        );
      }
      if (paragraph.trim() === '') {
        return <br key={index} />;
      }
      if (paragraph.startsWith('---')) {
        return <hr key={index} className="my-6 border-gray-200" />;
      }
      
      // Handle inline formatting
      let formattedText = paragraph
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/`(.*?)`/g, '<code class="bg-gray-100 px-1 rounded">$1</code>')
        .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-blue-600 hover:underline">$1</a>');
      
      return (
        <p key={index} className="text-gray-700 mb-3 leading-relaxed" dangerouslySetInnerHTML={{ __html: formattedText }} />
      );
    });
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        <div className="flex items-center space-x-2">
          <button
            type="button"
            onClick={() => setIsPreview(false)}
            className={`px-3 py-1 text-sm rounded ${
              !isPreview ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            <Edit className="w-4 h-4 inline mr-1" />
            Editar
          </button>
          <button
            type="button"
            onClick={() => setIsPreview(true)}
            className={`px-3 py-1 text-sm rounded ${
              isPreview ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            <Eye className="w-4 h-4 inline mr-1" />
            Preview
          </button>
        </div>
      </div>

      {!isPreview && (
        <div className="border border-gray-300 rounded-md">
          <div className="flex items-center space-x-1 p-2 border-b border-gray-200 bg-gray-50">
            {formatButtons.map((button, index) => (
              <button
                key={index}
                type="button"
                onClick={button.action}
                className="p-2 hover:bg-gray-200 rounded transition-colors"
                title={button.label}
              >
                <button.icon className="w-4 h-4 text-gray-600" />
              </button>
            ))}
          </div>
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            rows={15}
            className="w-full p-3 border-0 focus:ring-0 focus:outline-none resize-none"
          />
        </div>
      )}

      {isPreview && (
        <div className="border border-gray-300 rounded-md p-4 bg-white min-h-[400px]">
          <div className="prose max-w-none">
            {value ? renderPreview(value) : (
              <p className="text-gray-500 italic">Nenhum conteúdo para visualizar</p>
            )}
          </div>
        </div>
      )}

      <div className="text-xs text-gray-500">
        <p className="mb-1"><strong>Dicas de formatação:</strong></p>
        <div className="grid grid-cols-2 gap-2">
          <span>**negrito** - <strong>negrito</strong></span>
          <span>*itálico* - <em>itálico</em></span>
          <span>## Título 2</span>
          <span>### Título 3</span>
          <span>- Lista</span>
          <span>[link](url)</span>
          <span>&gt; Citação</span>
          <span>`código`</span>
        </div>
      </div>
    </div>
  );
}