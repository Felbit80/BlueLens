import React, { useState } from 'react';
import { Menu, X, Eye, User } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface HeaderProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  const menuItems = [
    { id: 'home', label: 'Início' },
    { id: 'about', label: 'Sobre' },
    { id: 'products', label: 'Produtos' },
    { id: 'simulator', label: 'Simulador' },
    { id: 'calculator', label: 'Calculadora' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contato' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm z-50 border-b border-blue-800/30">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <Eye className="w-8 h-8 text-blue-400" />
            <span className="text-2xl font-bold text-white">BlueLens</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                  activeSection === item.id ? 'text-blue-400' : 'text-gray-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-3">
                <span className="text-gray-300 text-sm">Olá, {user.name}</span>
                <button
                  onClick={() => onNavigate('profile')}
                  className="flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <User className="w-4 h-4" />
                  <span className="text-sm">Perfil</span>
                </button>
                <button
                  onClick={logout}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Sair
                </button>
              </div>
            ) : (
              <button
                onClick={() => onNavigate('auth')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Entrar
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900 border-b border-blue-800/30">
            <nav className="px-4 py-4 space-y-3">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left py-2 px-3 rounded-lg transition-colors ${
                    activeSection === item.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:bg-gray-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Mobile User Menu */}
              <div className="border-t border-gray-700 pt-3 mt-3">
                {user ? (
                  <div className="space-y-2">
                    <div className="text-gray-300 text-sm px-3 py-1">Olá, {user.name}</div>
                    <button
                      onClick={() => {
                        onNavigate('profile');
                        setIsMenuOpen(false);
                      }}
                      className="block w-full text-left py-2 px-3 text-blue-400 hover:bg-gray-800 rounded-lg transition-colors"
                    >
                      Perfil
                    </button>
                    <button
                      onClick={() => {
                        logout();
                        setIsMenuOpen(false);
                      }}
                      className="block w-full text-left py-2 px-3 text-gray-400 hover:bg-gray-800 rounded-lg transition-colors"
                    >
                      Sair
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      onNavigate('auth');
                      setIsMenuOpen(false);
                    }}
                    className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors"
                  >
                    Entrar
                  </button>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;