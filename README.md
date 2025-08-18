# CasaVlaška — Premium Zagreb Real Estate Landing Site

A fast, gorgeous, glassmorphic landing site for CasaVlaška's property at Vlaška 117, Zagreb. Built with Next.js 14, TypeScript, TailwindCSS, and Framer Motion for maximum performance and conversion.

## 🏠 About the Property

- **Address**: Vlaška 117, Zagreb, Croatia
- **Size**: 46 m²
- **Type**: 2 rooms + kitchen + bathroom
- **Price**: €159,900 (or best offer)
- **Features**: High ceilings, original hardwood floors, courtyard views
- **Contact**: Drago - +385 99 343 3344

## ✨ Features

- 🌟 **Glassmorphic Design**: Beautiful glass-morphism UI with backdrop blur effects
- 🌍 **Bilingual Support**: English & Croatian with flag toggle
- 📊 **Interactive Charts**: Real-time price data with Chart.js
- 🧮 **ROI Calculator**: Live profit calculations with PDF export
- 🖼️ **Image Gallery**: Lightbox with keyboard navigation
- 🗺️ **Location Map**: Interactive map with walking times
- ❓ **FAQ Accordion**: Expandable questions and answers
- 📱 **Mobile Optimized**: Responsive design for all devices
- 🔍 **SEO Optimized**: Structured data, meta tags, and performance
- 📈 **Analytics Ready**: Event tracking for conversions

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS + Custom CSS
- **Animation**: Framer Motion
- **Charts**: Chart.js + react-chartjs-2
- **i18n**: i18next + react-i18next
- **PDF Export**: jsPDF + html2canvas
- **SEO**: next-seo + structured data
- **Validation**: Zod

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd vlaska
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with SEO
│   ├── page.tsx           # Main landing page
│   └── globals.css        # Global styles & glassmorphism
├── components/            # React components
│   ├── GlassCard.tsx     # Reusable glass card
│   ├── Hero.tsx          # Hero section
│   ├── WhyHere.tsx       # Feature bullets
│   ├── OfferUrgency.tsx  # Urgency messaging
│   ├── PriceCharts.tsx   # Interactive charts
│   ├── RoiCalculator.tsx # ROI calculator
│   ├── Gallery.tsx       # Image lightbox
│   ├── LocationMap.tsx   # Map component
│   ├── Faq.tsx           # FAQ accordion
│   ├── UrgencyStrip.tsx  # Final CTA
│   ├── Footer.tsx        # Contact footer
│   └── LanguageToggle.tsx # Language switcher
├── lib/                   # Utilities
│   ├── i18n.ts           # Internationalization
│   ├── analytics.ts      # Event tracking
│   └── priceData.ts      # Price utilities
public/
├── data/
│   └── prices.json       # Price & comparables data
└── gallery/              # Property images
    ├── placeholder-1.svg
    ├── placeholder-2.svg
    └── ...
```

## 📊 Data Management

### Price Data (`public/data/prices.json`)

Update market data and comparables:

```json
{
  "city_avg": [
    {"month": "2024-01", "pricePerM2": 3190}
  ],
  "kvaternik_vlaska": [
    {"month": "2024-01", "pricePerM2": 3560}
  ],
  "comps": [
    {
      "address": "Vlaška 115",
      "size": 48,
      "price": 175000,
      "pricePerM2": 3646,
      "renovated": false
    }
  ]
}
```

### Gallery Images

Replace placeholder images in `public/gallery/`:
- Use high-quality photos (min. 1200px width)
- Optimize for web (WebP format recommended)
- Update captions in `src/components/Gallery.tsx`

## 🌍 Content Management

### Translations

Edit content in `src/lib/i18n.ts`:

```typescript
const resources = {
  en: {
    translation: {
      hero: {
        title: "Your English Title",
        subtitle: "Your English Subtitle"
      }
    }
  },
  hr: {
    translation: {
      hero: {
        title: "Vaš Hrvatski Naslov",
        subtitle: "Vaš Hrvatski Podnaslov"
      }
    }
  }
};
```

### Contact Information

Update phone numbers and contact details in:
- `src/lib/i18n.ts` (for translations)
- `src/components/Hero.tsx`
- `src/components/Footer.tsx`
- `src/components/OfferUrgency.tsx`

### Property Details

Update property information in:
- `src/app/layout.tsx` (SEO metadata)
- `public/data/prices.json` (current listing data)
- Translation files for descriptions

## 🎨 Customization

### Colors & Styling

Main glassmorphism variables in `src/app/globals.css`:

```css
:root {
  --glass-bg: rgba(255, 255, 255, 0.1);
  --glass-border: rgba(255, 255, 255, 0.2);
  --glass-shadow: rgba(0, 0, 0, 0.1);
}
```

### Animation Settings

Adjust Framer Motion settings in individual components:

```typescript
// Example in Hero.tsx
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
```

## 📈 Analytics

The site includes a custom analytics system in `src/lib/analytics.ts`.

### Event Tracking

```typescript
import { analytics } from '../lib/analytics';

// Track custom events
analytics.trackCTAClick('hero_booking_button');
analytics.trackPhoneCall();
analytics.trackCalculatorUsage('airbnb');
```

### Google Analytics Integration

To add Google Analytics:

1. Install gtag:
   ```bash
   npm install gtag
   ```

2. Update `src/lib/analytics.ts`:
   ```typescript
   // Replace console.log with:
   if (typeof gtag !== 'undefined') {
     gtag('event', event.action, {
       event_category: event.category,
       event_label: event.label,
       value: event.value,
     });
   }
   ```

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial CasaVlaška site"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js and deploy

3. **Custom Domain** (optional)
   - Add your custom domain in Vercel dashboard
   - Update `metadataBase` in `src/app/layout.tsx` to your domain

**Environment Variables** (if using analytics):
- `NEXT_PUBLIC_GA_ID` - Google Analytics ID
- `NEXT_PUBLIC_SITE_URL` - Your production URL

### Other Platforms

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm start
   ```

## ⚡ Performance Optimization

### Lighthouse Targets

- **Performance**: ≥95
- **Accessibility**: ≥95
- **Best Practices**: ≥95
- **SEO**: ≥95

### Optimization Tips

1. **Images**: Use WebP format, add `loading="lazy"`
2. **Fonts**: Preload critical fonts
3. **Code Splitting**: Use dynamic imports for heavy components
4. **Bundle Analysis**: Run `npm run build && npm run analyze`

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
```

### Environment Variables

Create `.env.local` for local development:

```env
NEXT_PUBLIC_GA_ID=your-google-analytics-id
NEXT_PUBLIC_SITE_URL=https://casavlaska.com
```

## 📞 Support & Contact

- **Property Contact**: Drago - +385 99 343 3344
- **WhatsApp**: [Message directly](https://wa.me/385993433344)
- **Email**: drago@casavlaska.com

## 📝 License

Private property listing site. All rights reserved.

---

**Built with ❤️ for fast sales • Powered by Next.js & Glassmorphism**
