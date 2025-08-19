# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev --turbopack` - Start development server with Turbo mode (preferred)
- `npm run build` - Build production version
- `npm run start` - Start production server
- `npm run lint` - Run ESLint checks

## Architecture Overview

CasaVlaška is a Next.js 15 real estate landing page built with the App Router pattern for a Zagreb apartment listing. The site features glassmorphic design, bilingual support, and interactive elements for property showcasing and ROI calculation.

### Key Technologies

- **Next.js 15** with App Router
- **TypeScript** with strict configuration
- **TailwindCSS 4** with custom glassmorphic utilities
- **Framer Motion** for animations
- **i18next** for internationalization (English/Croatian)
- **Chart.js** for price visualization
- **Leaflet** for location mapping
- **jsPDF + html2canvas** for ROI report generation

### Component Architecture

The site follows a component-per-section pattern where each major page section is a separate component:

- **Hero** - Main headline and CTA buttons
- **WhyHere** - Feature bullets highlighting property advantages
- **OfferUrgency** - Urgency messaging and pricing
- **PriceCharts** - Interactive market comparison charts
- **RoiCalculator** - Investment calculator with PDF export
- **Gallery** - Image lightbox component
- **LocationMap** - Interactive Leaflet map with walking times
- **Faq** - Expandable FAQ accordion
- **UrgencyStrip** - Final call-to-action strip

### Internationalization

All content is managed through `src/lib/i18n.ts` with extensive English and Croatian translations. Language detection uses browser preferences and localStorage persistence.

### Data Management

Price and comparison data is stored in `public/data/prices.json` including:
- City average price trends
- Kvaternik/Vlaška neighborhood trends  
- Comparable property data
- Current listing details

### Styling System

Custom glassmorphism implemented in `src/app/globals.css` with CSS variables:
- Glass backgrounds with backdrop blur
- Custom animations (float, glow)
- TailwindCSS extensions for glass utilities
- Responsive container classes

### Content Strategy

The site uses urgent, direct sales copy with emotional triggers and social proof. Content focuses on scarcity (sister flying to Canada), location benefits (Zagreb center), and investment potential (ROI calculator).

## File Structure Patterns

- `src/app/` - Next.js App Router files (layout, page, globals)
- `src/components/` - All React components, one per section
- `src/lib/` - Utilities (i18n, analytics, price data helpers)
- `public/data/` - JSON data files for prices and comparables
- `public/gallery/` - Property images (currently SVG placeholders)

## Development Workflow

When making changes:
1. Components use TypeScript interfaces for props
2. All text content should go through i18n translation keys
3. Price/property data changes go in `public/data/prices.json`
4. Analytics events are tracked via `src/lib/analytics.ts`
5. Always test both language versions

## Performance Considerations

- Next.js 15 experimental package optimization enabled for framer-motion and chart.js
- SVG images configured with security policies
- Components use proper React patterns (hooks, memo where needed)
- TailwindCSS purges unused styles automatically

## Deployment

Configured for Vercel deployment with automatic builds on git push. The site includes:
- robots.txt and sitemap.xml
- OpenGraph and Twitter cards
- Structured data for real estate listings
- Performance-optimized images and fonts