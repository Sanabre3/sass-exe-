# 🔐 Sistema de Login Responsivo

Um sistema de login moderno e responsivo desenvolvido com **HTML5**, **Sass** e **JavaScript**, seguindo as melhores práticas de desenvolvimento frontend.

<!-- Seção de badges no topo -->
<div align="center">

![Status](https://img.shields.io/badge/Status-Concluído-brightgreen?style=for-the-badge)
![Versão](https://img.shields.io/badge/Versão-1.0.0-blue?style=for-the-badge)
![Licença](https://img.shields.io/badge/Licença-MIT-yellow?style=for-the-badge)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

![Responsive](https://img.shields.io/badge/Responsive-✓-brightgreen?style=for-the-badge)
![Performance](https://img.shields.io/badge/Performance-A+-brightgreen?style=for-the-badge)

</div>

---

![Preview do Sistema](https://via.placeholder.com/800x400/4aa4ee/ffffff?text=Sistema+de+Login)

## ✨ Características

- 🎨 **Design Moderno**: Interface limpa e profissional
- 📱 **Totalmente Responsivo**: Funciona em desktop, tablet e mobile
- 🎯 **Sass Organizado**: Arquitetura 7-1 para fácil manutenção
- ⚡ **Performance**: CSS otimizado e carregamento rápido
- 🔒 **Validação**: Validação de formulário em tempo real
- 💾 **Lembrar Usuário**: Funcionalidade "Lembrar de mim"
- ♿ **Acessibilidade**: Semântica HTML correta e navegação por teclado

## 🚀 Demonstração

[Ver Demo Online](https://seu-usuario.github.io/sass-login-project)

## 📋 Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## 🛠️ Instalação

1. **Clone o repositório**
```bash```
git clone https://github.com/seu-usuario/sass-login-project.git
cd sass-login-project
Instale as dependências
bash
Copiar

## 📁 Estrutura do Projeto
sass-login-project/ ├─ dist/ # Arquivos compilados │ └─ css/ │ ├─ main.css # CSS compilado pelo Sass │ └─ main.css.map # Source map para debug ├─ node_modules/ # Dependências do npm ├─ src/ # Código fonte │ ├─ assets/ # Recursos estáticos │ │ └─ images/ # Imagens do projeto │ ├─ js/ # JavaScript │ │ └─ main.js # Script principal │ ├─ scss/ # Arquivos Sass │ │ ├─ abstracts/ # Variáveis e mixins │ │ │ ├─ _variables.scss # Variáveis globais │ │ │ └─ _mixins.scss # Mixins reutilizáveis │ │ ├─ base/ # Estilos base │ │ │ ├─ _reset.scss # Reset CSS │ │ │ └─ _typography.scss # Tipografia │ │ ├─ components/ # Componentes reutilizáveis │ │ │ ├─ _buttons.scss # Estilos de botões │ │ │ ├─ _cards.scss # Estilos de cards │ │ │ └─ _forms.scss # Estilos de formulários │ │ ├─ layout/ # Layout e estrutura │ │ │ └─ _grid.scss # Sistema de grid │ │ ├─ pages/ # Estilos específicos │ │ │ └─ _login.scss # Página de login │ │ └─ main.scss # Arquivo principal Sass ├─ index.html # Página principal ├─ package-lock.json # Lock das dependências ├─ package.json # Configurações do projeto └─ README.md # Documentação


## 🎨 Arquitetura Sass (7-1)

O projeto utiliza a **arquitetura 7-1** para organização do Sass:

### 📂 **abstracts/**
Contém variáveis, mixins e funções que não geram CSS por si só:
- `_variables.scss` - Cores, tipografia, espaçamentos
- `_mixins.scss` - Mixins reutilizáveis

### 📂 **base/**
Estilos fundamentais e reset:
- `_reset.scss` - Reset CSS e estilos base
- `_typography.scss` - Estilos de tipografia

### 📂 **components/**
Componentes reutilizáveis:
- `_buttons.scss` - Estilos de botões
- `_cards.scss` - Estilos de cards
- `_forms.scss` - Formulários e inputs

### 📂 **layout/**
Estrutura e layout:
- `_grid.scss` - Sistema de grid e containers

### 📂 **pages/**
Estilos específicos de páginas:
- `_login.scss` - Página de login

## 📜 Scripts Disponíveis

```bash
# Desenvolvimento (watch mode) - Monitora mudanças
npm run dev

# Build para produção (CSS minificado)
npm run build

# Build para desenvolvimento (CSS expandido)
npm run build:dev
Detalhes dos Scripts:
npm run dev: Compila Sass em modo watch (--watch) com CSS expandido
npm run build: Compila Sass com CSS comprimido para produção
npm run build:dev: Compila Sass com CSS expandido para desenvolvimento
🎯 Funcionalidades
✅ Implementadas
 Layout responsivo com CSS Grid/Flexbox
 Validação de formulário em JavaScript
 Animações e transições suaves
 Funcionalidade "Lembrar de mim" com localStorage
 Design system consistente com variáveis Sass
 Acessibilidade básica (semântica HTML, navegação por teclado)
 Source maps para debug
 Checkbox customizado
🔄 Roadmap
 Autenticação real com backend
 Página de recuperação de senha
 Modo escuro/claro
 Testes automatizados (Jest)
 PWA (Progressive Web App)
 Internacionalização (i18n)
🎨 Customização
🎨 Cores
Edite src/scss/abstracts/_variables.scss:

scss
Copiar

// Cores principais
$primary: #4aa4ee;              // Azul principal
$primary-hover: #3286ca;        // Azul hover
$bg-panel: #b3d5f1;            // Fundo do painel
$bg-light: #f8f9fa;            // Fundo claro
$text-dark: #32324f;           // Texto principal

### **🎯 Pontos Importantes:**

1. **Use exatamente 3 crases** (```) antes e depois do bloco
2. **Não deixe espaços** antes das crases
3. **Mantenha uma linha vazia** antes e depois dos blocos de código
4. **Use `bash` ou `scss`** após as crases para syntax highlighting

### **📝 Dica para Testar:**

1. **Copie exatamente** o texto acima
2. **Cole no seu README.md**
3. **Salve o arquivo**
4. **Visualize no GitHub** ou em um visualizador de Markdown
