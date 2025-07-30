import React from 'react';
import { Shield, Eye, Sparkles } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex items-center justify-center pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Content */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Proteja Seus Olhos da
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent block">
                Luz Azul
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Descubra a tecnologia revolucionária <strong className="text-blue-400">BlueCare</strong> 
              em nossas lentes de contato. Máxima proteção, conforto incomparável.
            </p>
          </div>

          {/* Features Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-blue-800/30 hover:border-blue-600/50 transition-all duration-300 hover:transform hover:scale-105">
              <Shield className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Proteção Avançada</h3>
              <p className="text-gray-400 text-sm">Filtro de até 50% da luz azul nociva</p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-blue-800/30 hover:border-blue-600/50 transition-all duration-300 hover:transform hover:scale-105">
              <Eye className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Conforto Visual</h3>
              <p className="text-gray-400 text-sm">Reduz fadiga e ressecamento ocular</p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-blue-800/30 hover:border-blue-600/50 transition-all duration-300 hover:transform hover:scale-105">
              <Sparkles className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Tecnologia BlueCare</h3>
              <p className="text-gray-400 text-sm">Inovação patenteada para seus olhos</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => onNavigate('simulator')}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
            >
              Encontre Sua Lente Ideal
            </button>
            
            <button
              onClick={() => onNavigate('products')}
              className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:transform hover:scale-105"
            >
              Ver Produtos
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-1">50%</div>
              <div className="text-gray-400 text-sm">Proteção Luz Azul</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-1">12h</div>
              <div className="text-gray-400 text-sm">Conforto Diário</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-1">30 dias</div>
              <div className="text-gray-400 text-sm">Uso Prolongado</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-1">100%</div>
              <div className="text-gray-400 text-sm">Proteção UV</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;