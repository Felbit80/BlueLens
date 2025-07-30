export interface User {
  id: string;
  name: string;
  email: string;
  recommendations: LensRecommendation[];
  protectionCalculations: ProtectionCalculation[];
}

export interface LensRecommendation {
  id: string;
  userId: string;
  screenTime: number;
  lightSensitivity: 'low' | 'medium' | 'high';
  visionCorrection: boolean;
  recommendedLens: Product;
  createdAt: Date;
}

export interface ProtectionCalculation {
  id: string;
  userId: string;
  dailyScreenTime: number;
  primaryDevice: string;
  riskLevel: 'low' | 'medium' | 'high';
  protectionBenefit: number;
  createdAt: Date;
}

export interface Product {
  id: string;
  name: string;
  type: 'daily' | 'extended' | 'colored';
  protection: 'basic' | 'advanced';
  price: number;
  description: string;
  features: string[];
  image: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'geral' | 'tecnologia' | 'uso' | 'manutencao';
}