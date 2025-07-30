import React, { useState } from 'react';
import { Calculator, Monitor, Smartphone, AlertTriangle, Shield, BarChart3 } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const ProtectionCalculator: React.FC = () => {
  const [dailyScreenTime, setDailyScreenTime] = useState(8);
  const [primaryDevice, setPrimaryDevice] = useState('computer');
  const [showResults, setShowResults] = useState(false);
  const { user, addProtectionCalculation } = useAuth();

  const deviceMultipliers = {
    computer: { name: 'Computador/Notebook', risk: 1.2, icon: Monitor },
    smartphone: { name: 'Smartphone', risk: 1.0, icon: Smartphone },
    tablet: { name: 'Tablet', risk: 1.1, icon: Monitor },
    tv: { name: 'TV/Monitor Grande', risk: 0.9, icon: Monitor },
    gaming: { name: 'Console/Gaming', risk: 1.3, icon: Monitor }
  };

  const calculateRisk = () => {
    const baseRisk = dailyScreenTime * deviceMultipliers[primaryDevice as keyof typeof deviceMultipliers].risk;
    
    let riskLevel: 'low' | 'medium' | 'high';
    let riskPercentage = Math.min(Math.round((baseRisk / 15) * 100), 100);
    
    if (baseRisk <= 4) {
      riskLevel = 'low';
    } else if (baseRisk <= 8) {
      riskLevel = 'medium';
    } else {
      riskLevel = 'high';
    }

    return { riskLevel, riskPercentage, baseRisk };
  };

  const calculateProtectionBenefit = () => {
    const { baseRisk } = calculateRisk();
    
    // Benefício da proteção (redução estimada da fadiga visual)
    const basicProtection = Math.round(Math.min(baseRisk * 0.4, 85));
    const advancedProtection = Math.round(Math.min(baseRisk * 0.7, 95));
    
    return { basicProtection, advancedProtection };
  };

  const handleCalculate = () => {
    setShowResults(true);
    
    if (user) {
      const { riskLevel } = calculateRisk();
      const { advancedProtection } = calculateProtectionBenefit();
      
      addProtectionCalculation({
        dailyScreenTime,
        primaryDevice: deviceMultipliers[primaryDevice as keyof typeof deviceMultipliers].name,
        riskLevel,
        protectionBenefit: advancedProtection
      });
    }
  };

  const { riskLevel, riskPercentage } = calculateRisk();
  const { basicProtection, advancedProtection } = calculateProtectionBenefit();

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'low': return 'text-green-400 bg-green-900/20 border-green-400/30';
      case 'medium': return 'text-yellow-400 bg-yellow-900/20 border-yellow-400/30';
      case 'high': return 'text-red-400 bg-red-900/20 border-red-400/30';
      default: return 'text-gray-400 bg-gray-900/20 border-gray-400/30';
    }
  };

  const getRiskLabel = (level: string) => {
    switch (level) {
      case 'low': return 'Baixo Risco';
      case 'medium': return 'Risco Moderado';
      case 'high': return 'Alto Risco';
      default: return 'Risco Desconhecido';
    }
  };

  return (
    <section className="bg-gray-800 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Calculator className="w-16 h-16 text-blue-400 mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Calculadora de Proteção Visual
            </h2>
            <p className="text-xl text-gray-300">
              Calcule seu risco de exposição à luz azul e descubra o benefício das lentes BlueCare
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Form */}
            <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Seus Dados</h3>
              
              {/* Screen Time Input */}
              <div className="mb-8">
                <label className="block text-lg font-semibold text-white mb-4">
                  Horas diárias em frente a telas
                </label>
                <div className="space-y-4">
                  <div className="text-center">
                    <span className="text-4xl font-bold text-blue-400">
                      {dailyScreenTime} horas
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="16"
                    step="0.5"
                    value={dailyScreenTime}
                    onChange={(e) => setDailyScreenTime(parseFloat(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>0h</span>
                    <span>8h</span>
                    <span>16h</span>
                  </div>
                </div>
              </div>

              {/* Device Selection */}
              <div className="mb-8">
                <label className="block text-lg font-semibold text-white mb-4">
                  Dispositivo mais utilizado
                </label>
                <div className="space-y-3">
                  {Object.entries(deviceMultipliers).map(([key, device]) => {
                    const IconComponent = device.icon;
                    return (
                      <button
                        key={key}
                        onClick={() => setPrimaryDevice(key)}
                        className={`w-full p-4 rounded-lg border-2 text-left transition-all duration-200 ${
                          primaryDevice === key
                            ? 'border-blue-400 bg-blue-900/20 text-white'
                            : 'border-gray-600 bg-gray-700/50 text-gray-300 hover:border-gray-500'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <IconComponent className="w-6 h-6" />
                          <span className="font-medium">{device.name}</span>
                          <span className="text-sm text-gray-400 ml-auto">
                            Fator de risco: {device.risk}x
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <button
                onClick={handleCalculate}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <Calculator className="w-5 h-5" />
                <span>Calcular Proteção</span>
              </button>
            </div>

            {/* Results */}
            <div className="space-y-6">
              {showResults ? (
                <>
                  {/* Risk Assessment */}
                  <div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-700">
                    <div className="flex items-center space-x-3 mb-4">
                      <AlertTriangle className="w-6 h-6 text-yellow-400" />
                      <h3 className="text-xl font-bold text-white">Avaliação de Risco</h3>
                    </div>
                    
                    <div className="text-center mb-4">
                      <div className={`inline-flex items-center px-4 py-2 rounded-full border text-lg font-semibold ${getRiskColor(riskLevel)}`}>
                        {getRiskLabel(riskLevel)}
                      </div>
                      <div className="mt-2 text-3xl font-bold text-blue-400">
                        {riskPercentage}% de exposição
                      </div>
                    </div>

                    <div className="w-full bg-gray-700 rounded-full h-3 mb-4">
                      <div
                        className={`h-3 rounded-full transition-all duration-1000 ${
                          riskLevel === 'low' ? 'bg-green-400' :
                          riskLevel === 'medium' ? 'bg-yellow-400' : 'bg-red-400'
                        }`}
                        style={{ width: `${riskPercentage}%` }}
                      ></div>
                    </div>

                    <div className="text-sm text-gray-300 space-y-2">
                      <p>• {dailyScreenTime}h diárias de exposição</p>
                      <p>• Dispositivo principal: {deviceMultipliers[primaryDevice as keyof typeof deviceMultipliers].name}</p>
                    </div>
                  </div>

                  {/* Protection Benefits */}
                  <div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-700">
                    <div className="flex items-center space-x-3 mb-4">
                      <Shield className="w-6 h-6 text-blue-400" />
                      <h3 className="text-xl font-bold text-white">Benefícios da Proteção</h3>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-gray-800/50 p-4 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-300">Proteção Básica</span>
                          <span className="text-xl font-bold text-blue-400">{basicProtection}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-blue-400 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${basicProtection}%` }}
                          ></div>
                        </div>
                        <p className="text-sm text-gray-400 mt-2">
                          Redução estimada da fadiga visual
                        </p>
                      </div>

                      <div className="bg-gray-800/50 p-4 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-300">Proteção Avançada</span>
                          <span className="text-xl font-bold text-green-400">{advancedProtection}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-green-400 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${advancedProtection}%` }}
                          ></div>
                        </div>
                        <p className="text-sm text-gray-400 mt-2">
                          Máxima proteção recomendada
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Recommendations */}
                  <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 p-6 rounded-2xl border border-blue-800/30">
                    <div className="flex items-center space-x-3 mb-4">
                      <BarChart3 className="w-6 h-6 text-blue-400" />
                      <h3 className="text-xl font-bold text-white">Recomendações</h3>
                    </div>

                    <div className="space-y-3 text-gray-300">
                      {riskLevel === 'high' && (
                        <>
                          <p className="text-red-400 font-semibold">⚠️ Alto risco de fadiga visual</p>
                          <p>• Recomendamos proteção avançada (BlueCare Pro ou Ultra)</p>
                          <p>• Faça pausas regulares (regra 20-20-20)</p>
                          <p>• Considere reduzir o tempo de tela quando possível</p>
                        </>
                      )}
                      
                      {riskLevel === 'medium' && (
                        <>
                          <p className="text-yellow-400 font-semibold">⚠️ Risco moderado</p>
                          <p>• Proteção básica ou avançada recomendada</p>
                          <p>• Pratique a regra 20-20-20 (20 min de tela, 20 seg olhando 20 pés de distância)</p>
                        </>
                      )}
                      
                      {riskLevel === 'low' && (
                        <>
                          <p className="text-green-400 font-semibold">✅ Baixo risco</p>
                          <p>• Proteção básica pode ser suficiente</p>
                          <p>• Mantenha bons hábitos visuais</p>
                        </>
                      )}
                    </div>
                  </div>
                </>
              ) : (
                <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-700 text-center">
                  <Calculator className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-400 text-lg">
                    Preencha os dados ao lado e clique em "Calcular Proteção" para ver seus resultados
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProtectionCalculator;