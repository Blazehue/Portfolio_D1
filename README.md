# Rajat Pandey - Portfolio Website

*Built with Next.js, Tailwind CSS v4, and the Notebook Theme*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/pandrajat123-4897s-projects/v0-portfolio-design-from-image)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/projects/jHOHfsLTnVP)

## Overview

This is a modern portfolio website for Rajat Pandey, a Full Stack Developer and GSSoC Contributor. The site features a unique **Notebook Theme** with handwritten-style typography and interactive elements.

## 🎨 Theme System

### Notebook Theme
The website uses a custom "Notebook" theme with:
- **Color System**: OKLCH color space with neutral grayscale palette
- **Typography**: "Architects Daughter" handwritten font for headings and body text
- **Design**: Paper-like aesthetic with subtle shadows and 0.625rem border radius
- **Letter Spacing**: 0.5px for authentic notebook feel

### Theme Configuration
The theme is configured in `app/globals.css` with CSS custom properties:

\`\`\`css
:root {
  --font-sans: Architects Daughter, sans-serif;
  --font-serif: "Times New Roman", Times, serif;
  --font-mono: "Courier New", Courier, monospace;
  --radius: 0.625rem;
  --tracking-normal: 0.5px;
  /* OKLCH color variables... */
}
\`\`\`

## 🚀 Local Development Setup

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation
\`\`\`bash
# Clone the repository
git clone <your-repo-url>
cd portfolio-website

# Install dependencies
pnpm install

# Start development server
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

\`\`\`
├── app/
│   ├── globals.css          # Theme configuration & Tailwind CSS
│   ├── layout.tsx           # Root layout with font setup
│   └── page.tsx             # Main portfolio page
├── components/
│   ├── about-section.tsx    # About section with social links
│   ├── clock.tsx            # Live clock widget
│   ├── contact-me.tsx       # Contact form section
│   ├── experience-timeline.tsx # Experience & education timeline
│   ├── MagicBento.tsx       # Interactive card effects
│   ├── project-card.tsx     # Project showcase cards
│   └── ui/                  # shadcn/ui components
└── public/                  # Static assets
\`\`\`

## 🎯 Key Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Interactive Elements**: MagicBento effects with hover animations
- **Custom Cursor**: Target cursor for enhanced UX
- **Dark Theme**: Notebook-style dark theme as default
- **Typography**: Handwritten Architects Daughter font
- **Performance**: Optimized with Next.js 15 and Vercel Analytics

## 🔍 GitHub Copilot Instructions

When working with this codebase:

1. **Theme System**: Uses OKLCH colors in CSS custom properties, not standard hex/rgb
2. **Font System**: Primary font is "Architects Daughter" loaded via next/font/google
3. **Styling**: Tailwind CSS v4 with @theme inline configuration
4. **Components**: All cards should be wrapped with MagicBento for effects
5. **Cursor**: Interactive elements need `cursor-target` class
6. **Colors**: Use semantic tokens (bg-background, text-foreground) not direct colors

## 📞 Support

If you encounter issues:
1. Check this README for common solutions
2. Verify all dependencies are installed: `pnpm install`
3. Clear Next.js cache: `pnpm dev --turbo`
4. Check browser console for font loading errors

## 🚀 Deployment

Your project is live at:
**[https://vercel.com/pandrajat123-4897s-projects/v0-portfolio-design-from-image](https://vercel.com/pandrajat123-4897s-projects/v0-portfolio-design-from-image)**

Continue building on:
**[https://v0.app/chat/projects/jHOHfsLTnVP](https://v0.app/chat/projects/jHOHfsLTnVP)**
