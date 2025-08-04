# Intesa Global - Company Website

Modern, responsive company website for **Intesa Global** (Integra Tekno Nusa), a software development company focused on Climate, Environment, and Compliance solutions.

## 🌿 About the Project

This website showcases Intesa Global's expertise in developing sustainable technology solutions, featuring our flagship **Global Climate Solution** platform for geospatial analysis and deforestation compliance monitoring. Built with modern web technologies to deliver a fast, accessible, and engaging user experience.

## 🚀 Tech Stack

- **React 18** - Modern UI library
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Lucide React** - Beautiful icons
- **CSS3** - Custom styling with modern features

## 🎯 Features

- **Responsive Design** - Optimized for all devices
- **Modern UI/UX** - Clean, professional design
- **Performance Optimized** - Fast loading and smooth animations
- **Accessibility** - WCAG compliant
- **SEO Friendly** - Optimized meta tags and structure
- **Product Showcase** - Live portfolio featuring Global Compliance Platform

## 🌍 Featured Product: Global Climate Solution

Our flagship product is a comprehensive geospatial analysis tool designed to support zero-deforestation regulation claims and compliance monitoring:

- **🗺️ Interactive Mapping**: Leaflet.js integration with multiple forest coverage layers
- **📊 Compliance Standards**: EUDR, Rainforest Alliance, FSC monitoring
- **🔍 Real-time Analysis**: GLAD, JRC, and SBTN deforestation data
- **💾 Data Management**: GeoJSON, CSV, WKT format support
- **🔐 Secure Authentication**: Professional glass morphism design
- **📱 Responsive Design**: Mobile-friendly interface

**Live Platform**: [global-comp.vercel.app](https://global-comp.vercel.app/)

## 📦 Installation & Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd company_profile
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About company
│   ├── Services.tsx    # Services showcase
│   ├── Portfolio.tsx   # Products portfolio
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer
├── App.tsx             # Main application
├── main.tsx           # Application entry point
└── index.css          # Global styles
```

## 🎨 Design System

### Color Palette
- **Primary Green**: #10b981 (Sustainability theme)
- **Secondary Green**: #059669
- **Accent Blue**: #3b82f6
- **Neutral Gray**: #6b7280
- **Dark Gray**: #1f2937

### Typography
- **Primary Font**: Inter (system fallbacks)
- **Responsive**: Fluid typography scale
- **Accessibility**: High contrast ratios

## 🌍 Company Information

**Intesa Global** (Brand name for Integra Tekno Nusa)
- **Industry**: Software Development
- **Specialization**: Climate, Environment & Compliance Solutions
- **Location**: Jakarta, Indonesia

## 📞 Contact

- **Email**: info@intesaglobal.com
- **Phone**: +62 21 1234 5678
- **Business Hours**: Monday-Friday 9AM-6PM WIB

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📝 License

© 2025 Intesa Global (Integra Tekno Nusa). All rights reserved.
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
