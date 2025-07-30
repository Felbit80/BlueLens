import React, { useState, useEffect } from 'react';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import LensSimulator from './components/LensSimulator';
import ProtectionCalculator from './components/ProtectionCalculator';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Auth from './components/Auth';
import Profile from './components/Profile';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Update page title based on active section
  useEffect(() => {
    const titles = {
      home: 'BlueLens - Proteção Avançada contra Luz Azul',
      about: 'Sobre - BlueLens',
      products: 'Produtos - BlueLens',
      simulator: 'Simulador - BlueLens',
      calculator: 'Calculadora - BlueLens',
      faq: 'FAQ - BlueLens',
      contact: 'Contato - BlueLens',
      auth: 'Login - BlueLens',
      profile: 'Perfil - BlueLens'
    };

    document.title = titles[activeSection as keyof typeof titles] || 'BlueLens';
  }, [activeSection]);

  const handleNavigation = (section: string) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Hero onNavigate={handleNavigation} />;
      case 'about':
        return <About />;
      case 'products':
        return <Products />;
      case 'simulator':
        return <LensSimulator />;
      case 'calculator':
        return <ProtectionCalculator />;
      case 'faq':
        return <FAQ />;
      case 'contact':
        return <Contact />;
      case 'auth':
        return <Auth onNavigate={handleNavigation} />;
      case 'profile':
        return <Profile onNavigate={handleNavigation} />;
      default:
        return <Hero onNavigate={handleNavigation} />;
    }
  };

  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-900">
        <Header activeSection={activeSection} onNavigate={handleNavigation} />
        <main>
          {renderSection()}
        </main>
        <Footer onNavigate={handleNavigation} />
      </div>
    </AuthProvider>
  );
}

export default App;