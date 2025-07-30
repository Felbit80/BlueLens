import React from 'react';
import { Eye, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Eye className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold text-white">BlueLens</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Revolucionando a proteção ocular com tecnologia BlueCare. 
              Proteja seus olhos da luz azul com estilo e conforto.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-gray-400 hover:text-white" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-gray-400 hover:text-white" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-gray-400 hover:text-white" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Produtos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('faq')}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-white font-semibold mb-4">Ferramentas</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('simulator')}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Simulador de Lentes
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('calculator')}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Calculadora de Proteção
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">contato@bluelens.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">(11) 9999-9999</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <div className="text-gray-400 text-sm">
                  <p>Av. Paulista, 1000</p>
                  <p>São Paulo - SP</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} BlueLens. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;