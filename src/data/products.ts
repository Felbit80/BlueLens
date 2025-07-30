import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'BlueCare Daily',
    type: 'daily',
    protection: 'basic',
    price: 89.90,
    description: 'Lente de uso diário com proteção básica contra luz azul',
    features: [
      'Filtro de luz azul 25%',
      'Material hidratado',
      'Uso diário confortável',
      'Proteção UV'
    ],
    image: 'https://images.pexels.com/photos/5752288/pexels-photo-5752288.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: '2',
    name: 'BlueCare Pro',
    type: 'extended',
    protection: 'advanced',
    price: 129.90,
    description: 'Lente premium para uso prolongado com máxima proteção',
    features: [
      'Filtro de luz azul 40%',
      'Tecnologia anti-fadiga',
      'Hidratação prolongada',
      'Proteção UV avançada'
    ],
    image: 'https://images.pexels.com/photos/6938558/pexels-photo-6938558.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: '3',
    name: 'BlueCare Color',
    type: 'colored',
    protection: 'basic',
    price: 99.90,
    description: 'Lente colorida com proteção contra luz azul',
    features: [
      'Filtro de luz azul 30%',
      'Cores naturais disponíveis',
      'Conforto visual',
      'Proteção UV'
    ],
    image: 'https://images.pexels.com/photos/6938541/pexels-photo-6938541.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: '4',
    name: 'BlueCare Ultra',
    type: 'extended',
    protection: 'advanced',
    price: 159.90,
    description: 'Topo de linha com tecnologia BlueCare máxima',
    features: [
      'Filtro de luz azul 50%',
      'Tecnologia de ponta',
      'Máximo conforto',
      'Proteção total UV/luz azul'
    ],
    image: 'https://images.pexels.com/photos/5752284/pexels-photo-5752284.jpeg?auto=compress&cs=tinysrgb&w=300'
  }
];