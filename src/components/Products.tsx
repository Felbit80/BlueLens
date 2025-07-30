import React, { useState } from 'react';
import { Filter, Star, ShoppingCart } from 'lucide-react';
import { products } from '../data/products';
import { Product } from '../types';

const Products: React.FC = () => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [protectionFilter, setProtectionFilter] = useState<string>('all');

  const filterProducts = (type: string, protection: string) => {
    let filtered = products;

    if (type !== 'all') {
      filtered = filtered.filter(product => product.type === type);
    }

    if (protection !== 'all') {
      filtered = filtered.filter(product => product.protection === protection);
    }

    setFilteredProducts(filtered);
  };

  const handleTypeFilter = (type: string) => {
    setTypeFilter(type);
    filterProducts(type, protectionFilter);
  };

  const handleProtectionFilter = (protection: string) => {
    setProtectionFilter(protection);
    filterProducts(typeFilter, protection);
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'daily': return 'Uso Diário';
      case 'extended': return 'Uso Prolongado';
      case 'colored': return 'Colorida';
      default: return type;
    }
  };

  const getProtectionLabel = (protection: string) => {
    return protection === 'basic' ? 'Básica' : 'Avançada';
  };

  return (
    <section className="bg-gray-800 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nossos <span className="text-blue-400">Produtos</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Escolha a lente BlueCare perfeita para suas necessidades. 
              Cada produto é desenvolvido com nossa tecnologia patenteada.
            </p>
          </div>

          {/* Filters */}
          <div className="mb-8 bg-gray-900/50 p-6 rounded-xl border border-gray-700">
            <div className="flex items-center space-x-2 mb-4">
              <Filter className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-semibold text-white">Filtros</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Type Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">Tipo de Uso</label>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => handleTypeFilter('all')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      typeFilter === 'all'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    Todos
                  </button>
                  <button
                    onClick={() => handleTypeFilter('daily')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      typeFilter === 'daily'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    Uso Diário
                  </button>
                  <button
                    onClick={() => handleTypeFilter('extended')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      typeFilter === 'extended'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    Uso Prolongado
                  </button>
                  <button
                    onClick={() => handleTypeFilter('colored')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      typeFilter === 'colored'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    Colorida
                  </button>
                </div>
              </div>

              {/* Protection Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">Nível de Proteção</label>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => handleProtectionFilter('all')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      protectionFilter === 'all'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    Todos
                  </button>
                  <button
                    onClick={() => handleProtectionFilter('basic')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      protectionFilter === 'basic'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    Proteção Básica
                  </button>
                  <button
                    onClick={() => handleProtectionFilter('advanced')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      protectionFilter === 'advanced'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    Proteção Avançada
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-gray-900/50 rounded-2xl border border-gray-700 overflow-hidden hover:border-blue-600/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      product.protection === 'advanced'
                        ? 'bg-gold-500/20 text-yellow-400 border border-yellow-400/30'
                        : 'bg-blue-500/20 text-blue-400 border border-blue-400/30'
                    }`}>
                      {getProtectionLabel(product.protection)}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">{product.name}</h3>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 mb-3">
                    <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                      {getTypeLabel(product.type)}
                    </span>
                  </div>

                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Características:</h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, index) => (
                        <li key={index} className="text-xs text-gray-400 flex items-center space-x-2">
                          <div className="w-1 h-1 bg-blue-400 rounded-full flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-blue-400">
                      R$ {product.price.toFixed(2).replace('.', ',')}
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2">
                      <ShoppingCart className="w-4 h-4" />
                      <span>Comprar</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">
                Nenhum produto encontrado com os filtros selecionados.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;