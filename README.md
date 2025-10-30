# 🚀 Rajat Pandey - Portfolio Website

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-06B6D4?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

> A modern, interactive portfolio website showcasing full-stack development projects and creative work. Built with Next.js, TypeScript, and featuring custom animations with Framer Motion and GSAP.

**Live Demo:** [Your Deployed URL]

## 📋 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Key Components](#key-components)
- [Customization](#customization)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Contact](#contact)
- [License](#license)

## 🎯 Overview

Modern portfolio website for **Rajat Pandey** - Full Stack Developer & B.Tech CSE Student at SRMIST '28, based in Delhi, India. The site features a clean, interactive design with smooth animations, dark mode support, and comprehensive project showcases.

## ✨ Features

### 🎨 Interactive UI
- **Custom Cursor Effects** - Magnetic target cursor with GSAP animations
- **Welcome Animation** - Pop-in greeting screen with Framer Motion
- **Magic Bento Cards** - Interactive cards with spotlight, tilt, and magnetism effects
- **Smooth Animations** - Transitions and hover effects throughout

### 🌙 Theme System
- **Dark Mode** - Toggle between light and dark themes
- **Responsive Design** - Optimized for mobile, tablet, and desktop
- **Modern Typography** - Clean, readable font hierarchy
- **Custom Color Palette** - Carefully crafted color scheme

### 📱 Sections
- **Hero/About** - Introduction with social links (LinkedIn, GitHub, Instagram)
- **Projects** - Showcase of 12+ GitHub repositories with descriptions
- **Side Projects** - Featured projects: J.A.R.V.I.S, TaskMaster, KNBN, Crowd Detection
- **Latest Work** - BLOG platform with live demo link
- **Experience Timeline** - Education and work history
- **Contact** - Email integration and location info
- **Live Clock** - Real-time clock widget

### 🚀 Performance
- **Server Components** - Optimized with Next.js 14 App Router
- **Bundle Optimization** - Code splitting and lazy loading
- **SEO Optimized** - Meta tags and structured data
- **Fast Load Times** - Optimized assets and caching

## 🛠️ Tech Stack

### Core Framework
- **Next.js 14.2** - React framework with App Router
- **React 18** - UI library
- **TypeScript 5** - Type-safe JavaScript

### Styling
- **Tailwind CSS 4.1** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **class-variance-authority** - Component variant management
- **tailwind-merge** - Merge Tailwind classes
- **tailwindcss-animate** - Pre-built animations

### UI Components
- **Radix UI** - Headless accessible components
  - Avatar, Button, Card, Badge, and more
- **Lucide React** - Icon library
- **next-themes** - Theme management

### Animation Libraries
- **Framer Motion 12.23** - React animation library
- **GSAP 3.13** - Professional-grade animations

### Forms & Validation
- **React Hook Form 7.60** - Form state management
- **Zod 3.25** - Schema validation
- **@hookform/resolvers** - Form validation resolver

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Git** - Version control

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18.x or higher
- **npm** or **pnpm** (recommended)
- **Git** for version control

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Blazehue/Portfolio_D1.git
cd Portfolio_D1
```

2. **Install dependencies**
```bash
# Using npm
npm install

# Or using pnpm (recommended)
pnpm install
```

3. **Run development server**
```bash
npm run dev
# or
pnpm dev
```

4. **Open in browser**
```
http://localhost:3000
```

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Alternative with pnpm
pnpm dev
pnpm build
pnpm start
pnpm lint
```

## 📁 Project Structure

```
PORTFOL-main/
├── app/                      # Next.js App Router
│   ├── globals.css          # Global styles and Tailwind config
│   ├── layout.tsx           # Root layout with theme provider
│   └── page.tsx             # Main homepage
├── components/              # React components
│   ├── ui/                  # Reusable UI components
│   │   ├── avatar.tsx       # Avatar component
│   │   ├── badge.tsx        # Badge for labels/tags
│   │   ├── button.tsx       # Button component
│   │   └── card.tsx         # Card container
│   ├── about-section.tsx    # About me with social links
│   ├── clock.tsx            # Real-time clock widget
│   ├── contact.tsx          # Full contact form
│   ├── contact-me.tsx       # Contact widget
│   ├── experience-counter.tsx  # Years counter
│   ├── experience-timeline.tsx # Education/work timeline
│   ├── hero.tsx             # Hero section
│   ├── latest-work.tsx      # Featured work showcase
│   ├── MagicBento.tsx       # Interactive bento card wrapper
│   ├── project-card.tsx     # Individual project card
│   ├── projects.tsx         # Projects showcase
│   ├── side-projects.tsx    # Featured side projects
│   ├── TargetCursor.tsx     # Custom cursor effect
│   ├── theme-provider.tsx   # Dark mode provider
│   └── welcome-animation.tsx # Welcome screen animation
├── lib/                     # Utility functions
│   └── utils.ts            # className merger
├── public/                  # Static assets
│   ├── rajat-profile.png   # Profile picture
│   ├── blog-thumbnail.jpg  # BLOG project thumbnail
│   └── *.jpg               # Project images
├── components.json          # UI components config
├── next.config.mjs          # Next.js configuration
├── package.json             # Dependencies
├── postcss.config.mjs       # PostCSS config
├── tailwind.config.ts       # Tailwind configuration
└── tsconfig.json            # TypeScript config
```

## 🔑 Key Components

### WelcomeAnimation
Pop-in welcome screen with "Hey! Welcome to my portfolio" message.
- Auto-dismisses after 3 seconds
- Session storage to show once per visit
- Smooth Framer Motion animations

### TargetCursor
Custom cursor with magnetic effect using GSAP.
- Follows cursor with smooth easing
- Magnetic attraction to interactive elements
- Configurable spin duration

### MagicBento
Interactive card wrapper with multiple effects:
- Spotlight effect following cursor
- Tilt animation on hover
- Border glow effect
- Particle animations
- Magnetic pull effect

### AboutSection
Personal introduction with:
- Profile description
- Social media links (LinkedIn, GitHub, Instagram)
- Interactive hover effects

### Projects & Side Projects
Showcase of GitHub repositories:
- **J.A.R.V.I.S** - AI Desktop Assistant (Python)
- **TaskMaster** - Task Management App
- **KNBN** - Kanban Board
- **Crowd Detection** - OpenCV ML Project
- And 8+ more projects

### LatestWork
Featured work section:
- BLOG platform showcase
- Live demo link: https://blog-umber-six.vercel.app/
- Project thumbnail and description

## 🎨 Customization

### Update Personal Information

**Profile Picture** (`public/rajat-profile.png`)
```tsx
// app/page.tsx
<AvatarImage src="/your-image.png" alt="Your Name" />
```

**Social Links** (`components/about-section.tsx`)
```tsx
<a href="https://linkedin.com/in/your-profile">
<a href="https://github.com/yourusername">
<a href="https://instagram.com/yourusername">
```

**Location** (`components/contact.tsx`, `app/page.tsx`)
```tsx
<span>Your City</span>
<p>Your City, Your Country</p>
```

### Add/Update Projects

**Side Projects** (`components/side-projects.tsx`)
```tsx
const projects = [
  { 
    name: "Project Name", 
    year: "2025", 
    link: "https://github.com/username/repo" 
  },
  // Add more projects...
]
```

**Full Projects** (`components/projects.tsx`)
```tsx
const projects = [
  {
    title: "Project Title",
    description: "Project description...",
    image: "/project-image.jpg",
    technologies: ["Tech1", "Tech2"],
    github: "https://github.com/username/repo",
    demo: "#",
    featured: true,
    date: "Oct 2025",
  },
]
```

### Customize Theme

**Colors** (`app/globals.css`)
```css
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 3.9%;
  --primary: 271 91% 65%;
  /* Customize colors */
}
```

**Fonts** (`app/layout.tsx`)
```tsx
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
```

### Animation Settings

**Welcome Animation Duration** (`components/welcome-animation.tsx`)
```tsx
const timer = setTimeout(() => {
  setIsVisible(false)
}, 3000) // Change duration (milliseconds)
```

**Cursor Spin Speed** (`app/page.tsx`)
```tsx
<TargetCursor spinDuration={2} /> // Change spin duration
```
pnpm dev
\`\`\`

### Dependencies Used
\`\`\`json
{
  "next": "^15.0.0",
  "@vercel/analytics": "^1.0.0",
  "tailwindcss": "^4.0.0",
  "tw-animate-css": "^1.0.0",
  "lucide-react": "^0.400.0",
  "class-variance-authority": "^0.7.0",
  "clsx": "^2.0.0",
  "tailwind-merge": "^2.0.0"
}
\`\`\`

## 🔧 Troubleshooting Theme Issues

### Issue: Theme Not Appearing Locally

**Symptoms:**
- Colors appear as default instead of notebook theme
- Fonts not loading (Architects Daughter missing)
- Styling looks broken or unstyled

**Solutions:**

1. **Font Loading Issue**
   \`\`\`tsx
   // Check app/layout.tsx has correct font import
   import { Architects_Daughter } from 'next/font/google'
   
   const architectsDaughter = Architects_Daughter({
     subsets: ["latin"],
     weight: "400",
     variable: "--font-architects-daughter",
   })
   \`\`\`

2. **Tailwind CSS v4 Configuration**
   \`\`\`css
   /* Ensure app/globals.css has @theme inline block */
   @theme inline {
     --font-sans: var(--font-sans);
     --color-background: var(--background);
     /* ... other theme variables */
   }
   \`\`\`

3. **CSS Variables Not Applied**
   - Verify `app/globals.css` contains all OKLCH color definitions
   - Check that `:root` and `.dark` selectors have complete variable sets
   - Ensure `@import "tailwindcss"` is at the top of globals.css

4. **Dark Mode Default**
   \`\`\`tsx
   // app/layout.tsx should have dark class
   <html lang="en" className="dark">
   \`\`\`

### Issue: Interactive Effects Not Working

**Symptoms:**
- MagicBento effects not visible
- Custom cursor not appearing
- Cards lack hover effects

**Solutions:**

1. **MagicBento Component**
   \`\`\`tsx
   // Ensure components/MagicBento.tsx is properly imported
   import { MagicBento } from "./MagicBento"
   
   // Wrap cards with MagicBento
   <MagicBento className="cursor-target">
     {children}
   </MagicBento>
   \`\`\`

2. **Custom Cursor**
   - Check if `cursor-target` classes are applied to interactive elements
   - Verify TargetCursor component is imported in main page

## 📁 Project Structure

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub** (Already done! ✅)
```bash
git push origin main
```

2. **Import to Vercel**
- Go to [vercel.com](https://vercel.com)
- Click "New Project"
- Import `Blazehue/Portfolio_D1`
- Vercel will auto-detect Next.js settings
- Click "Deploy"

3. **Environment Variables** (if needed)
- Add any required env vars in Vercel dashboard
- Redeploy if changes made

### Deploy to Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Deploy
netlify deploy --prod
```

### Manual Build

```bash
# Build for production
npm run build

# Test production build locally
npm run start

# Output will be in .next/ folder
```

## 🐛 Troubleshooting

### ENOENT Error (npm install)
**Issue:** `npm error code ENOENT - Could not read package.json`

**Solution:** Ensure you're in the project root directory
```bash
cd C:\Users\pandr\Downloads\PORTFOL\PORTFOL-main
npm install
```

### Module Not Found Errors
**Issue:** Cannot find module '@/components/...'

**Solution:** 
1. Check `tsconfig.json` has correct path aliases
2. Restart TypeScript server in VS Code
3. Clear `.next` cache: `rm -rf .next`

### Animation Not Working
**Issue:** Welcome animation or cursor effects not working

**Solution:**
1. Verify Framer Motion installed: `npm list framer-motion`
2. Check browser console for errors
3. Clear browser cache and reload

### Dark Mode Issues
**Issue:** Theme not persisting or switching incorrectly

**Solution:**
1. Check `next-themes` is installed
2. Clear browser localStorage
3. Verify `theme-provider.tsx` is wrapped in layout

## 🤝 Contributing

Contributions are welcome! To contribute:

1. **Fork the repository**
```bash
gh repo fork Blazehue/Portfolio_D1
```

2. **Create a feature branch**
```bash
git checkout -b feature/amazing-feature
```

3. **Make your changes**
- Follow existing code style
- Add comments for complex logic
- Test thoroughly

4. **Commit your changes**
```bash
git add .
git commit -m "feat: add amazing feature"
```

5. **Push to your fork**
```bash
git push origin feature/amazing-feature
```

6. **Open a Pull Request**
- Describe your changes
- Link any related issues
- Wait for review

### Commit Convention
Follow [Conventional Commits](https://www.conventionalcommits.org/):
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `perf:` - Performance improvements
- `test:` - Adding tests
- `chore:` - Maintenance tasks

## � License

This project is open source and available under the [MIT License](LICENSE).

```
MIT License

Copyright (c) 2025 Rajat Pandey

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 📞 Contact

**Rajat Pandey**

- 🌐 Portfolio: [Your Live URL]
- 💼 LinkedIn: [linkedin.com/in/rajat-pandey-58a949257](https://www.linkedin.com/in/rajat-pandey-58a949257/)
- 🐱 GitHub: [@Blazehue](https://github.com/Blazehue)
- 📸 Instagram: [@zeber356](https://instagram.com/zeber356)
- 📧 Email: pandrajat123@gmail.com
- 📍 Location: Delhi, India

## � Acknowledgments

- **Next.js Team** - Amazing React framework
- **Vercel** - Hosting and deployment
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Framer Motion** - Animation library
- **GSAP** - Professional animations
- **Lucide** - Beautiful icon set
- **shadcn/ui** - Component design inspiration

## � Project Stats

![GitHub repo size](https://img.shields.io/github/repo-size/Blazehue/Portfolio_D1)
![GitHub language count](https://img.shields.io/github/languages/count/Blazehue/Portfolio_D1)
![GitHub top language](https://img.shields.io/github/languages/top/Blazehue/Portfolio_D1)
![GitHub last commit](https://img.shields.io/github/last-commit/Blazehue/Portfolio_D1)
![GitHub issues](https://img.shields.io/github/issues/Blazehue/Portfolio_D1)
![GitHub pull requests](https://img.shields.io/github/issues-pr/Blazehue/Portfolio_D1)

---

<div align="center">
  
### ⭐ Star this repo if you found it helpful!

**Built with ❤️ by Rajat Pandey**

[Report Bug](https://github.com/Blazehue/Portfolio_D1/issues) · [Request Feature](https://github.com/Blazehue/Portfolio_D1/issues)

</div>
