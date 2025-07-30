# BlueLens - Aplicação React Moderna

Uma aplicação web completa e interativa para a empresa fictícia **BlueLens**, especializada em lentes de contato com tecnologia BlueCare para proteção contra luz azul.

![BlueLens](https://images.pexels.com/photos/5752288/pexels-photo-5752288.jpeg?auto=compress&cs=tinysrgb&w=800)

## 🚀 Características Principais

### ✨ Funcionalidades
- **Landing Page completa** com design moderno e responsivo
- **Simulador de Lente Ideal** - questionário interativo para recomendações personalizadas
- **Calculadora de Proteção Visual** - análise de risco baseada em uso de telas
- **Catálogo de Produtos** com filtros por tipo e proteção
- **FAQ Interativo** com busca e categorização
- **Sistema de Autenticação** local simulado
- **Perfil do Usuário** com histórico de simulações e cálculos
- **Formulário de Contato** completo

### 🎨 Design e UX
- Layout escuro e moderno com paleta azul
- Animações suaves e micro-interações
- Design totalmente responsivo (mobile-first)
- Tipografia otimizada e hierarquia visual clara
- Componentes modulares e reutilizáveis

### 🛠️ Tecnologias
- **React 18** com hooks (useState, useEffect, useContext)
- **TypeScript** para type safety
- **Tailwind CSS** para estilização
- **Lucide React** para ícones
- **Context API** para gerenciamento de estado
- **Local Storage** para persistência de dados

## 📦 Instalação e Uso

### Pré-requisitos
- Node.js 16+ 
- npm ou yarn

### Comandos

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview
```

## 🏗️ Estrutura do Projeto

```
src/
├── components/           # Componentes React
│   ├── Header.tsx       # Cabeçalho com navegação
│   ├── Hero.tsx         # Seção principal
│   ├── About.tsx        # Sobre a tecnologia BlueCare
│   ├── Products.tsx     # Catálogo com filtros
│   ├── LensSimulator.tsx # Simulador interativo
│   ├── ProtectionCalculator.tsx # Calculadora de risco
│   ├── FAQ.tsx          # FAQ com busca
│   ├── Contact.tsx      # Formulário de contato
│   ├── Auth.tsx         # Login/Cadastro
│   ├── Profile.tsx      # Perfil do usuário
│   └── Footer.tsx       # Rodapé
├── contexts/
│   └── AuthContext.tsx  # Context para autenticação
├── data/
│   ├── products.ts      # Dados dos produtos
│   └── faq.ts          # Perguntas frequentes
├── types/
│   └── index.ts        # Definições TypeScript
├── App.tsx             # Componente principal
└── main.tsx           # Entry point
```

## 🔧 Funcionalidades Detalhadas

### 1. Simulador de Lente Ideal
- Questionário de 5 etapas
- Algoritmo de recomendação baseado em:
  - Tempo de uso de telas
  - Sensibilidade à luz
  - Necessidade de correção visual
  - Tipo de uso principal
  - Orçamento
- Salva histórico para usuários logados

### 2. Calculadora de Proteção Visual
- Análise de risco baseada em:
  - Horas diárias de tela
  - Tipo de dispositivo principal
- Calcula benefício da proteção (básica vs avançada)
- Interface visual com gráficos de barras

### 3. Sistema de Autenticação
- Cadastro e login local simulado
- Conta demo: `demo@bluelens.com` / `demo123`
- Persistência via localStorage
- Histórico personalizado de simulações

### 4. Catálogo de Produtos
- 4 produtos com diferentes características
- Filtros por tipo (diário, prolongado, colorida)
- Filtros por proteção (básica, avançada)
- Cards com informações detalhadas

## 🎯 Personas e Casos de Uso

### Usuário Típico
- **Profissionais digitais** (desenvolvedores, designers, escritório)
- **Estudantes** com alto uso de dispositivos
- **Gamers** e entusiastas de tecnologia
- **Pessoas com sensibilidade visual**

### Jornada do Usuário
1. **Descoberta** - Landing page com informações sobre luz azul
2. **Educação** - Seção sobre tecnologia BlueCare
3. **Avaliação** - Simulador personalizado ou calculadora
4. **Decisão** - Catálogo de produtos com recomendações
5. **Contato** - FAQ e formulário para dúvidas

## 🚀 Deploy e Performance

### Otimizações Implementadas
- **Code splitting** automático pelo Vite
- **Lazy loading** de imagens
- **Responsive images** via Pexels
- **Minificação** de CSS/JS na build
- **Tree shaking** para reduzir bundle size

### Deploy Sugerido
- **Netlify** - Deploy contínuo via Git
- **Vercel** - Integração com GitHub
- **GitHub Pages** - Hosting gratuito

## 📱 Responsividade

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

### Features Responsivas
- Menu hamburger no mobile
- Grid layouts adaptáveis
- Tipografia fluida
- Touch-friendly buttons
- Otimização de forms

## 🧪 Funcionalidades Avançadas

### Performance
- Virtual scrolling nas listas grandes
- Debounce na busca do FAQ
- Lazy loading de componentes pesados
- Otimização de re-renders

### Acessibilidade
- Navegação por teclado
- Labels adequados em forms
- Contraste de cores WCAG
- ARIA labels onde necessário

### SEO
- Meta tags dinâmicas
- Títulos de página contextuais
- Estrutura semântica HTML5
- URLs amigáveis (SPA)

## 🎓 Valor Educacional

### Conceitos Demonstrados
- **Component Composition** - Componentes modulares
- **State Management** - Context API + useState
- **TypeScript Integration** - Tipagem forte
- **Responsive Design** - Mobile-first approach
- **User Experience** - Micro-interações e feedback
- **Data Persistence** - localStorage patterns
- **Form Validation** - Validação client-side
- **Conditional Rendering** - Estados da aplicação

### Padrões de Code
- **Custom Hooks** para lógica reutilizável
- **Compound Components** para flexibilidade
- **Provider Pattern** para state global
- **Container/Presenter** separation
- **Error Boundaries** para robustez

## 📈 Possíveis Extensões

### Backend Integration
- API REST para produtos reais
- Banco de dados para usuários
- Sistema de pagamentos (Stripe)
- Dashboard administrativo

### Features Adicionais
- **PWA** - Instalável como app
- **Push Notifications** - Lembretes de uso
- **Geolocalização** - Lojas próximas
- **Chat Support** - Atendimento online
- **Realidade Aumentada** - Try-on virtual

### Analytics
- **Google Analytics** - Comportamento do usuário
- **Heatmaps** - Análise de interação
- **A/B Testing** - Otimização de conversão
- **Performance Monitoring** - Core Web Vitals

## 👥 Contribuição

Este projeto foi desenvolvido como demonstração de habilidades em React/TypeScript. Para contribuir:

1. Fork do projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto é fictício e foi criado para fins educacionais e de demonstração de portfólio.

---

**BlueLens** - *Revolucionando a proteção ocular digital* 👁️✨