import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, MessageCircle, Filter } from 'lucide-react';
import { faqData } from '../data/faq';

const FAQ: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const categories = [
    { id: 'all', label: 'Todas', count: faqData.length },
    { id: 'geral', label: 'Geral', count: faqData.filter(item => item.category === 'geral').length },
    { id: 'tecnologia', label: 'Tecnologia', count: faqData.filter(item => item.category === 'tecnologia').length },
    { id: 'uso', label: 'Uso', count: faqData.filter(item => item.category === 'uso').length },
    { id: 'manutencao', label: 'Manutenção', count: faqData.filter(item => item.category === 'manutencao').length }
  ];

  const filteredFAQ = faqData.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleExpanded = (id: string) => {
    setExpandedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'geral': return 'bg-blue-500/20 text-blue-400 border border-blue-400/30';
      case 'tecnologia': return 'bg-purple-500/20 text-purple-400 border border-purple-400/30';
      case 'uso': return 'bg-green-500/20 text-green-400 border border-green-400/30';
      case 'manutencao': return 'bg-orange-500/20 text-orange-400 border border-orange-400/30';
      default: return 'bg-gray-500/20 text-gray-400 border border-gray-400/30';
    }
  };

  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <MessageCircle className="w-16 h-16 text-blue-400 mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-300">
              Tire suas dúvidas sobre as lentes BlueCare e nossa tecnologia
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-8 space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar por pergunta ou palavra-chave..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-800 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors"
              />
            </div>

            {/* Category Filters */}
            <div className="flex items-center space-x-2 mb-4">
              <Filter className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-medium text-gray-300">Categorias:</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {category.label} ({category.count})
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {filteredFAQ.length > 0 ? (
              filteredFAQ.map((item) => (
                <div
                  key={item.id}
                  className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden hover:border-gray-600 transition-colors"
                >
                  <button
                    onClick={() => toggleExpanded(item.id)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-800/30 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                          {item.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-white">
                        {item.question}
                      </h3>
                    </div>
                    <div className="ml-4">
                      {expandedItems.includes(item.id) ? (
                        <ChevronUp className="w-5 h-5 text-gray-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                  </button>
                  
                  {expandedItems.includes(item.id) && (
                    <div className="px-6 pb-6">
                      <div className="border-t border-gray-700 pt-4">
                        <p className="text-gray-300 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <MessageCircle className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  Nenhuma pergunta encontrada
                </h3>
                <p className="text-gray-400">
                  Tente ajustar sua busca ou categoria selecionada
                </p>
              </div>
            )}
          </div>

          {/* Contact Section */}
          <div className="mt-12 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 p-8 rounded-2xl border border-blue-800/30 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Não encontrou sua resposta?
            </h3>
            <p className="text-gray-300 mb-6">
              Nossa equipe de especialistas está pronta para ajudar você
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:contato@bluelens.com"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Enviar Email
              </a>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;