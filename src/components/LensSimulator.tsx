import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Eye, Clock, Lightbulb, CheckCircle } from 'lucide-react';
import { products } from '../data/products';
import { Product } from '../types';
import { useAuth } from '../contexts/AuthContext';

const LensSimulator: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({
    screenTime: 0,
    lightSensitivity: '',
    visionCorrection: false,
    primaryUse: '',
    budget: ''
  });
  const [recommendation, setRecommendation] = useState<Product | null>(null);
  const { user, addRecommendation } = useAuth();

  const questions = [
    {
      id: 'screenTime',
      title: 'Quantas horas por dia você usa dispositivos com tela?',
      type: 'range',
      options: {
        min: 0,
        max: 16,
        step: 1,
        label: (value: number) => `${value} horas por dia`
      }
    },
    {
      id: 'lightSensitivity',
      title: 'Como você classifica sua sensibilidade à luz?',
      type: 'radio',
      options: [
        { value: 'low', label: 'Baixa - Raramente incomoda' },
        { value: 'medium', label: 'Média - Às vezes incomoda' },
        { value: 'high', label: 'Alta - Frequentemente incomoda' }
      ]
    },
    {
      id: 'visionCorrection',
      title: 'Você precisa de correção visual (grau)?',
      type: 'radio',
      options: [
        { value: true, label: 'Sim, preciso de grau' },
        { value: false, label: 'Não, minha visão é normal' }
      ]
    },
    {
      id: 'primaryUse',
      title: 'Qual é o seu principal uso das lentes?',
      type: 'radio',
      options: [
        { value: 'work', label: 'Trabalho (computador/escritório)' },
        { value: 'study', label: 'Estudos' },
        { value: 'gaming', label: 'Jogos/Entretenimento' },
        { value: 'general', label: 'Uso geral diário' }
      ]
    },
    {
      id: 'budget',
      title: 'Qual é o seu orçamento aproximado?',
      type: 'radio',
      options: [
        { value: 'basic', label: 'Até R$ 100 - Proteção básica' },
        { value: 'mid', label: 'R$ 100 - R$ 140 - Proteção intermediária' },
        { value: 'premium', label: 'Acima de R$ 140 - Proteção premium' }
      ]
    }
  ];

  const handleAnswer = (value: any) => {
    const question = questions[currentStep];
    setAnswers(prev => ({
      ...prev,
      [question.id]: value
    }));
  };

  const nextStep = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      generateRecommendation();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const generateRecommendation = () => {
    let recommendedProduct = products[0]; // Default
    let score = 0;
    let bestScore = 0;

    for (const product of products) {
      score = 0;

      // Screen time scoring
      if (answers.screenTime >= 8) {
        if (product.type === 'extended') score += 3;
        if (product.protection === 'advanced') score += 3;
      } else if (answers.screenTime >= 4) {
        if (product.type === 'daily' || product.type === 'extended') score += 2;
        if (product.protection === 'advanced') score += 2;
      } else {
        if (product.type === 'daily') score += 2;
        if (product.protection === 'basic') score += 1;
      }

      // Light sensitivity scoring
      if (answers.lightSensitivity === 'high') {
        if (product.protection === 'advanced') score += 3;
      } else if (answers.lightSensitivity === 'medium') {
        if (product.protection === 'advanced') score += 2;
        if (product.protection === 'basic') score += 1;
      } else {
        if (product.protection === 'basic') score += 2;
      }

      // Primary use scoring
      if (answers.primaryUse === 'work' || answers.primaryUse === 'gaming') {
        if (product.type === 'extended') score += 2;
        if (product.protection === 'advanced') score += 2;
      }

      // Budget scoring
      if (answers.budget === 'basic' && product.price <= 100) score += 2;
      if (answers.budget === 'mid' && product.price > 100 && product.price <= 140) score += 2;
      if (answers.budget === 'premium' && product.price > 140) score += 2;

      if (score > bestScore) {
        bestScore = score;
        recommendedProduct = product;
      }
    }

    setRecommendation(recommendedProduct);

    // Save recommendation if user is logged in
    if (user) {
      addRecommendation({
        screenTime: answers.screenTime,
        lightSensitivity: answers.lightSensitivity as 'low' | 'medium' | 'high',
        visionCorrection: answers.visionCorrection,
        recommendedLens: recommendedProduct
      });
    }
  };

  const resetSimulator = () => {
    setCurrentStep(0);
    setAnswers({
      screenTime: 0,
      lightSensitivity: '',
      visionCorrection: false,
      primaryUse: '',
      budget: ''
    });
    setRecommendation(null);
  };

  const currentQuestion = questions[currentStep];
  const isAnswered = answers[currentQuestion?.id as keyof typeof answers] !== '' && 
                     answers[currentQuestion?.id as keyof typeof answers] !== 0 && 
                     answers[currentQuestion?.id as keyof typeof answers] !== false;

  if (recommendation) {
    return (
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h2 className="text-4xl font-bold text-white mb-4">
                Sua Lente Ideal
              </h2>
              <p className="text-xl text-gray-300">
                Baseado em suas respostas, recomendamos:
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 p-8 rounded-2xl border border-blue-800/30 mb-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <img
                    src={recommendation.image}
                    alt={recommendation.name}
                    className="w-full h-64 object-cover rounded-xl"
                  />
                </div>
                
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {recommendation.name}
                  </h3>
                  
                  <p className="text-gray-300 mb-6">
                    {recommendation.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Por que esta lente?</h4>
                    <ul className="space-y-2">
                      {recommendation.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-3 text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-3xl font-bold text-blue-400">
                      R$ {recommendation.price.toFixed(2).replace('.', ',')}
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                      Comprar Agora
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={resetSimulator}
                className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Fazer Nova Simulação
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Eye className="w-16 h-16 text-blue-400 mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Simulador de Lente Ideal
            </h2>
            <p className="text-xl text-gray-300">
              Responda algumas perguntas e descubra qual lente BlueCare é perfeita para você
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-400">Progresso</span>
              <span className="text-sm text-gray-400">
                {currentStep + 1} de {questions.length}
              </span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div
                className="bg-blue-400 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Question */}
          <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 mb-8">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              {currentQuestion.title}
            </h3>

            <div className="space-y-4">
              {currentQuestion.type === 'range' ? (
                <div className="space-y-6">
                  <div className="text-center">
                    <span className="text-3xl font-bold text-blue-400">
                      {currentQuestion.options.label(answers.screenTime)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={currentQuestion.options.min}
                    max={currentQuestion.options.max}
                    step={currentQuestion.options.step}
                    value={answers.screenTime}
                    onChange={(e) => handleAnswer(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>0h</span>
                    <span>8h</span>
                    <span>16h</span>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  {currentQuestion.options.map((option: any, index: number) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(option.value)}
                      className={`w-full p-4 rounded-lg border-2 text-left transition-all duration-200 ${
                        answers[currentQuestion.id as keyof typeof answers] === option.value
                          ? 'border-blue-400 bg-blue-900/20 text-white'
                          : 'border-gray-600 bg-gray-700/50 text-gray-300 hover:border-gray-500 hover:bg-gray-700'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-4 h-4 rounded-full border-2 ${
                          answers[currentQuestion.id as keyof typeof answers] === option.value
                            ? 'border-blue-400 bg-blue-400'
                            : 'border-gray-500'
                        }`}></div>
                        <span className="font-medium">{option.label}</span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                currentStep === 0
                  ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                  : 'bg-gray-700 hover:bg-gray-600 text-white'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Anterior</span>
            </button>

            <button
              onClick={nextStep}
              disabled={!isAnswered}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                !isAnswered
                  ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              <span>
                {currentStep === questions.length - 1 ? 'Finalizar' : 'Próxima'}
              </span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LensSimulator;