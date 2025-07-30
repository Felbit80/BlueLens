import React from 'react';
import { User, Calendar, Eye, Calculator, LogOut, Trash2 } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface ProfileProps {
  onNavigate: (section: string) => void;
}

const Profile: React.FC<ProfileProps> = ({ onNavigate }) => {
  const { user, logout } = useAuth();

  if (!user) {
    return (
      <section className="bg-gray-900 py-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <User className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-4">Acesso Necessário</h2>
          <p className="text-gray-400 mb-6">Você precisa estar logado para ver seu perfil</p>
          <button
            onClick={() => onNavigate('auth')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Fazer Login
          </button>
        </div>
      </section>
    );
  }

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'low': return 'text-green-400 bg-green-900/20';
      case 'medium': return 'text-yellow-400 bg-yellow-900/20';
      case 'high': return 'text-red-400 bg-red-900/20';
      default: return 'text-gray-400 bg-gray-900/20';
    }
  };

  const getRiskLabel = (level: string) => {
    switch (level) {
      case 'low': return 'Baixo';
      case 'medium': return 'Moderado';
      case 'high': return 'Alto';
      default: return 'Desconhecido';
    }
  };

  return (
    <section className="bg-gray-900 py-20 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Profile Header */}
          <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 mb-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-600/20 w-16 h-16 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-blue-400" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-white">{user.name}</h1>
                  <p className="text-gray-400">{user.email}</p>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                    <span>{user.recommendations.length} simulações</span>
                    <span>{user.protectionCalculations.length} cálculos</span>
                  </div>
                </div>
              </div>
              
              <button
                onClick={logout}
                className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span>Sair</span>
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Lens Recommendations */}
            <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700">
              <div className="flex items-center space-x-3 mb-6">
                <Eye className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Simulações de Lentes</h2>
              </div>

              {user.recommendations.length > 0 ? (
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {user.recommendations.map((recommendation) => (
                    <div
                      key={recommendation.id}
                      className="bg-gray-900/50 p-4 rounded-lg border border-gray-700"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-semibold text-white">
                          {recommendation.recommendedLens.name}
                        </h3>
                        <span className="text-blue-400 font-bold">
                          R$ {recommendation.recommendedLens.price.toFixed(2).replace('.', ',')}
                        </span>
                      </div>
                      
                      <div className="space-y-2 text-sm text-gray-300">
                        <div className="flex justify-between">
                          <span>Tempo de tela:</span>
                          <span>{recommendation.screenTime}h/dia</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Sensibilidade à luz:</span>
                          <span className="capitalize">{recommendation.lightSensitivity}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Correção visual:</span>
                          <span>{recommendation.visionCorrection ? 'Sim' : 'Não'}</span>
                        </div>
                      </div>
                      
                      <div className="mt-3 pt-3 border-t border-gray-700 flex items-center justify-between">
                        <span className="text-xs text-gray-500">
                          <Calendar className="w-3 h-3 inline mr-1" />
                          {formatDate(recommendation.createdAt)}
                        </span>
                        <button className="text-xs text-blue-400 hover:text-blue-300">
                          Ver detalhes
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Eye className="w-12 h-12 text-gray-600 mx-auto mb-3" />
                  <p className="text-gray-400 mb-4">Nenhuma simulação ainda</p>
                  <button
                    onClick={() => onNavigate('simulator')}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors"
                  >
                    Fazer Simulação
                  </button>
                </div>
              )}
            </div>

            {/* Protection Calculations */}
            <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700">
              <div className="flex items-center space-x-3 mb-6">
                <Calculator className="w-6 h-6 text-green-400" />
                <h2 className="text-2xl font-bold text-white">Cálculos de Proteção</h2>
              </div>

              {user.protectionCalculations.length > 0 ? (
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {user.protectionCalculations.map((calculation) => (
                    <div
                      key={calculation.id}
                      className="bg-gray-900/50 p-4 rounded-lg border border-gray-700"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold text-white">
                          Cálculo de Risco
                        </h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRiskColor(calculation.riskLevel)}`}>
                          {getRiskLabel(calculation.riskLevel)}
                        </span>
                      </div>
                      
                      <div className="space-y-2 text-sm text-gray-300">
                        <div className="flex justify-between">
                          <span>Tempo de tela:</span>
                          <span>{calculation.dailyScreenTime}h/dia</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Dispositivo principal:</span>
                          <span>{calculation.primaryDevice}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Benefício da proteção:</span>
                          <span className="text-green-400">{calculation.protectionBenefit}%</span>
                        </div>
                      </div>
                      
                      <div className="mt-3 pt-3 border-t border-gray-700 flex items-center justify-between">
                        <span className="text-xs text-gray-500">
                          <Calendar className="w-3 h-3 inline mr-1" />
                          {formatDate(calculation.createdAt)}
                        </span>
                        <button className="text-xs text-blue-400 hover:text-blue-300">
                          Ver detalhes
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Calculator className="w-12 h-12 text-gray-600 mx-auto mb-3" />
                  <p className="text-gray-400 mb-4">Nenhum cálculo ainda</p>
                  <button
                    onClick={() => onNavigate('calculator')}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm transition-colors"
                  >
                    Fazer Cálculo
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-8 bg-gray-800/50 p-6 rounded-2xl border border-gray-700">
            <h2 className="text-xl font-bold text-white mb-4">Ações Rápidas</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <button
                onClick={() => onNavigate('simulator')}
                className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-lg text-center transition-colors"
              >
                <Eye className="w-6 h-6 mx-auto mb-2" />
                <span className="text-sm font-medium">Nova Simulação</span>
              </button>
              
              <button
                onClick={() => onNavigate('calculator')}
                className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-lg text-center transition-colors"
              >
                <Calculator className="w-6 h-6 mx-auto mb-2" />
                <span className="text-sm font-medium">Novo Cálculo</span>
              </button>
              
              <button
                onClick={() => onNavigate('products')}
                className="bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-lg text-center transition-colors"
              >
                <Eye className="w-6 h-6 mx-auto mb-2" />
                <span className="text-sm font-medium">Ver Produtos</span>
              </button>
              
              <button
                onClick={() => onNavigate('contact')}
                className="bg-gray-600 hover:bg-gray-700 text-white p-4 rounded-lg text-center transition-colors"
              >
                <User className="w-6 h-6 mx-auto mb-2" />
                <span className="text-sm font-medium">Contato</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;