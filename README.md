# Tanzania Gaming Association (TGA) Website

A modern, SEO-friendly informational website for the Tanzania Gaming Association built with React, Vite, and TypeScript.

## 🚀 Quick Start

```bash
# Clone and setup
git clone https://github.com/your-org/tga-website.git
cd tga-website
npm install
npm run dev
```

Visit `http://localhost:5173` to see the website running locally.

## 💻 Development

- **SEO Optimized**: Dynamic meta tags, Open Graph support, and Schema.org markup
- **Responsive Design**: Mobile-first approach using Tailwind CSS
- **Accessibility**: WCAG compliant with semantic HTML and ARIA labels
- **Performance**: Lazy-loaded components and optimized assets
- **Brand Compliant**: Follows TGA brand guidelines for colors, typography, and imagery

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

## 🛠️ Installation

### Option 1: Clone Existing Repository
```bash
git clone https://github.com/your-org/tga-website.git
cd tga-website
npm install
```

### Option 2: Create New Project from Scratch

1. **Create Vite + React + TypeScript project:**
```bash
npm create vite@latest tga-website -- --template react-ts
cd tga-website
```

2. **Install all dependencies:**
```bash
# Core dependencies
npm install

# Tailwind CSS and PostCSS
npm install -D tailwindcss postcss autoprefixer

# UI Components and Icons
npm install lucide-react

# TypeScript types
npm install -D @types/node
```

3. **Initialize Tailwind CSS:**
```bash
npx tailwindcss init -p
```

4. **Setup project files:**
   - Replace `tailwind.config.js` with the provided configuration
   - Replace `src/App.tsx` with the main component
   - Update `src/index.css` with Tailwind imports
   - Update `index.html` with SEO meta tags

5. **Create required directories:**
```bash
mkdir -p public/documents public/images
mkdir -p src/components src/pages src/assets
```

6. **Start development server:**
```bash
npm run dev
```

7. **Build for production:**
```bash
npm run build
```

## 📁 Project Structure

```
tga-website/
├── public/
│   ├── documents/
│   │   ├── gaming-act.pdf
│   │   ├── tga-constitution.pdf
│   │   └── other-regulations.pdf
│   ├── images/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   └── SEO.tsx
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── RegulationsPage.tsx
│   │   ├── PrinciplesPage.tsx
│   │   ├── MembershipPage.tsx
│   │   ├── CSRPage.tsx
│   │   ├── NewsPage.tsx
│   │   ├── EventsPage.tsx
│   │   ├── ContactPage.tsx
│   │   └── ResponsibleGamingPage.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .env
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🎨 Brand Guidelines

### Colors
- **Primary Green**: `#05303c` (TSBA Green)
- **Primary Gold**: `#ecb91e` (TSBA Yellow Gold)
- **Accent Red**: `#af4f41` (TSBA Blossom)
- **White**: `#ffffff`
- **Black**: `#231f20`

### Typography
- **Primary Font**: Ubuntu (300, 400, 500, 700)
- Loaded via Google Fonts

## 📦 Dependencies

### Core Dependencies
- `react` - UI library
- `react-dom` - React DOM renderer
- `lucide-react` - Icon library

### Development Dependencies
- `vite` - Build tool
- `typescript` - Type safety
- `tailwindcss` - Utility-first CSS framework
- `postcss` - CSS processor
- `autoprefixer` - Vendor prefix automation
- `@types/react` - React type definitions
- `@types/react-dom` - React DOM type definitions
- `@types/node` - Node.js type definitions

## 🔧 Configuration

## 🔧 Configuration Files

### package.json
```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0"
  }
}
```

### src/index.css
```css
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap');
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### vite.config.ts
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

### Google Analytics 4
Replace the placeholder GA4 ID in `App.tsx`:
```javascript
gtag('config', 'G-XXXXXXXXXX'); // Replace with your GA4 Measurement ID
```

### Google Search Console
Add your verification meta tag in the `SEO` component:
```javascript
verification.content = 'your-verification-code-here';
```

### Environment Variables
Create a `.env` file in the root directory:
```env
VITE_GA_ID=G-XXXXXXXXXX
VITE_GSC_VERIFICATION=your-verification-code
VITE_API_URL=https://api.tga.co.tz
```

## 📄 Pages Overview

1. **Home** - Landing page with hero section and latest news
2. **About Us** - Organization overview, mission, and vision
3. **Regulations** - Downloadable regulatory documents
4. **Principles** - Core standards and commitments
5. **TGA Membership** - Membership requirements and benefits
6. **CSR** - Corporate social responsibility initiatives
7. **News** - Latest industry news and updates
8. **Events** - Past and upcoming events
9. **Contact Us** - Contact information and inquiry form
10. **Responsible Gaming** - Gaming addiction prevention guidelines

## 🚀 Deployment

### Building for Production
```bash
npm run build
```

The build output will be in the `dist/` directory.

### Hosting Recommendations
- **Netlify**: Drop the `dist` folder into Netlify
- **Vercel**: Connect your GitHub repo
- **AWS S3 + CloudFront**: For static hosting
- **Traditional hosting**: Upload `dist` contents to your web server

### Important Deployment Notes

1. **PDF Documents**: Ensure all PDF files are uploaded to `/public/documents/` directory
2. **SSL Certificate**: Use HTTPS for SEO and security
3. **Redirects**: Set up proper redirects for www/non-www
4. **404 Page**: Configure server to serve index.html for all routes (SPA routing)
5. **Environment Variables**: Set production environment variables on your hosting platform

## 🔍 SEO Checklist

- [ ] Replace GA4 placeholder ID
- [ ] Add Google Search Console verification
- [ ] Submit sitemap.xml
- [ ] Configure robots.txt
- [ ] Set up canonical URLs
- [ ] Add structured data for organization
- [ ] Optimize images (use WebP format)
- [ ] Enable gzip compression
- [ ] Set up proper caching headers

## 🧪 Testing

```bash
# Type checking
npm run build

# Linting (if ESLint is configured)
npm run lint

# Preview production build
npm run preview
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support, email info@tga.co.tz or contact the development team.

## 📄 License

This project is proprietary and confidential. All rights reserved by Tanzania Gaming Association.

## 🙏 Acknowledgments

- React + Vite + TypeScript template
- Tailwind CSS for styling
- Lucide React for icons
- Google Fonts for Ubuntu typeface

---

**Tanzania Gaming Association** - The voice of licensed gaming operators in Tanzania