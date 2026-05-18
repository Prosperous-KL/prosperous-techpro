# Prosperous TechPro

A modern, production-ready React (Vite) website for Ghana's leading VTU and digital solutions platform.

## 🚀 Quick Start

### Prerequisites
- Node.js 14+ and npm

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

The application will open automatically at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📋 Project Structure

```
prosperous-techpro/
├── index.html           # Entry HTML file
├── package.json         # Project dependencies
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
├── src/
│   ├── main.jsx         # React entry point
│   ├── App.jsx          # Main app component
│   └── index.css        # Global styles
└── .gitignore
```

## 🛠 Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS transformations
- **Autoprefixer** - Vendor prefixes

## 📄 Pages & Sections

The website is a single-page application (SPA) with the following sections:

1. **Navigation** - Fixed header with smooth scrolling to sections
2. **Hero Section** - Eye-catching intro with CTA button
3. **About Section** - Company mission, vision, and values
4. **Services Section** - VTU services showcase (Data, Airtime, Utilities, SMS API)
5. **Why Choose Us Section** - Key differentiators and features
6. **Contact Section** - Contact information and message form
7. **Footer** - Links, copyright, and social media

## 🎨 Design Features

- Modern fintech UI with gradient colors
- Fully responsive design (mobile-first)
- Smooth scrolling navigation
- Card-based layouts with hover effects
- Professional spacing and typography
- Mobile hamburger menu
- Clean, maintainable Tailwind CSS

## 📱 Responsive

- **Mobile** - Optimized for small screens (320px+)
- **Tablet** - Improved layout for medium screens (768px+)
- **Desktop** - Full-featured layout for large screens (1024px+)

## 🔧 Configuration

### Vite Config
- Port: 3000
- Auto-open in browser
- React plugin enabled

### Tailwind Config
- Custom color theme (primary blues and secondary purples)
- Reusable component classes
- Extended utilities

## 📝 Customization

- **Colors**: Edit `tailwind.config.js` to change color scheme
- **Fonts**: Update in `src/index.css`
- **Content**: Modify text in `src/App.jsx`
- **Images**: Add image assets to `src/` and import as needed

## 🚢 Deployment

The built project can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

Simply run `npm run build` and deploy the `dist/` directory.

## 📞 Support

For questions or support, contact: support@prosperoustechpro.com

## 📄 License

Copyright © 2026 Prosperous TechPro. All rights reserved.
