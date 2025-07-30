import React from 'react';
import { Monitor, Smartphone, Tv, Shield } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Tecnologia <span className="text-blue-400">BlueCare</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Nossa tecnologia patenteada filtra a luz azul nociva de dispositivos digitais, 
              oferecendo proteção superior sem comprometer a qualidade visual.
            </p>
          </div>

          {/* Problem Section */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 p-8 rounded-2xl border border-red-800/30">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                O Problema da Luz Azul
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300">
                        <strong className="text-white">Fadiga Visual:</strong> Olhos cansados após uso prolongado de telas
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300">
                        <strong className="text-white">Ressecamento:</strong> Diminuição natural do piscar durante o uso
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300">
                        <strong className="text-white">Distúrbios do Sono:</strong> Luz azul interfere na produção de melatonina
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300">
                        <strong className="text-white">Danos Celulares:</strong> Exposição excessiva pode causar danos à retina
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-800/50 p-4 rounded-lg text-center">
                    <Monitor className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                    <p className="text-white text-sm font-semibold">Computadores</p>
                    <p className="text-gray-400 text-xs">Alta emissão</p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg text-center">
                    <Smartphone className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                    <p className="text-white text-sm font-semibold">Smartphones</p>
                    <p className="text-gray-400 text-xs">Uso frequente</p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg text-center">
                    <Tv className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                    <p className="text-white text-sm font-semibold">Tablets/TVs</p>
                    <p className="text-gray-400 text-xs">Exposição prolongada</p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg text-center">
                    <Shield className="w-8 h-8 text-red-400 mx-auto mb-2" />
                    <p className="text-white text-sm font-semibold">LED</p>
                    <p className="text-gray-400 text-xs">Sem proteção</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Solution Section */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 p-8 rounded-2xl border border-blue-800/30">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Nossa Solução: Tecnologia BlueCare
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-blue-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-400">1</span>
                  </div>
                  <h4 className="font-semibold text-white mb-2">Filtro Seletivo</h4>
                  <p className="text-gray-300 text-sm">
                    Bloqueia apenas a luz azul nociva (400-455nm), preservando a luz azul benéfica
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-blue-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-400">2</span>
                  </div>
                  <h4 className="font-semibold text-white mb-2">Absorção Avançada</h4>
                  <p className="text-gray-300 text-sm">
                    Materiais especiais absorvem a luz azul sem distorcer cores naturais
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-blue-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-400">3</span>
                  </div>
                  <h4 className="font-semibold text-white mb-2">Conforto Total</h4>
                  <p className="text-gray-300 text-sm">
                    Hidratação prolongada e material biocompatível para uso diário
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Benefícios Comprovados</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-300">Redução de 70% na fadiga visual</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-300">Melhora na qualidade do sono</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-300">Proteção contra danos celulares</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-300">Maior produtividade digital</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Especificações Técnicas</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-700">
                  <span className="text-gray-300">Filtro de Luz Azul</span>
                  <span className="text-blue-400 font-semibold">25% - 50%</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-700">
                  <span className="text-gray-300">Proteção UV</span>
                  <span className="text-blue-400 font-semibold">100%</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-700">
                  <span className="text-gray-300">Hidratação</span>
                  <span className="text-blue-400 font-semibold">58% - 75%</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-700">
                  <span className="text-gray-300">Material</span>
                  <span className="text-blue-400 font-semibold">Silicone hidrogel</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-300">Durabilidade</span>
                  <span className="text-blue-400 font-semibold">1 - 30 dias</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;