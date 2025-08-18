// Simple event tracking system
// In production, replace with Google Analytics, Mixpanel, or similar

interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

class Analytics {
  private events: (AnalyticsEvent & { timestamp: number })[] = [];
  private isEnabled: boolean = true;

  constructor() {
    if (typeof window !== 'undefined') {
      // Check if user has opted out of tracking
      this.isEnabled = !localStorage.getItem('analytics-disabled');
    }
  }

  track(event: AnalyticsEvent) {
    if (!this.isEnabled) return;

    // Store event locally
    this.events.push({
      ...event,
      timestamp: Date.now(),
    });

    // Log for development
    if (process.env.NODE_ENV === 'development') {
      console.log('📊 Analytics Event:', event);
    }

    // In production, send to your analytics service
    // Example:
    // if (typeof gtag !== 'undefined') {
    //   gtag('event', event.action, {
    //     event_category: event.category,
    //     event_label: event.label,
    //     value: event.value,
    //   });
    // }
  }

  // Convenience methods for common events
  trackPageView(page: string) {
    this.track({
      action: 'page_view',
      category: 'navigation',
      label: page,
    });
  }

  trackCTAClick(cta: string) {
    this.track({
      action: 'cta_click',
      category: 'engagement',
      label: cta,
    });
  }

  trackPhoneCall() {
    this.track({
      action: 'phone_call',
      category: 'contact',
      label: 'phone_button_click',
    });
  }

  trackWhatsAppClick() {
    this.track({
      action: 'whatsapp_click',
      category: 'contact',
      label: 'whatsapp_button_click',
    });
  }

  trackCalculatorUsage(strategy: string) {
    this.track({
      action: 'calculator_used',
      category: 'tools',
      label: strategy,
    });
  }

  trackGalleryOpen() {
    this.track({
      action: 'gallery_opened',
      category: 'engagement',
      label: 'hero_gallery_button',
    });
  }

  trackPDFDownload() {
    this.track({
      action: 'pdf_download',
      category: 'lead_generation',
      label: 'roi_pdf_export',
    });
  }

  trackSectionView(section: string) {
    this.track({
      action: 'section_viewed',
      category: 'engagement',
      label: section,
    });
  }

  trackLanguageSwitch(language: string) {
    this.track({
      action: 'language_switch',
      category: 'localization',
      label: language,
    });
  }

  // Get analytics data (for debugging or reporting)
  getEvents() {
    return this.events;
  }

  // Clear stored events
  clearEvents() {
    this.events = [];
  }

  // Disable tracking
  disable() {
    this.isEnabled = false;
    if (typeof window !== 'undefined') {
      localStorage.setItem('analytics-disabled', 'true');
    }
  }

  // Enable tracking
  enable() {
    this.isEnabled = true;
    if (typeof window !== 'undefined') {
      localStorage.removeItem('analytics-disabled');
    }
  }
}

// Create singleton instance
export const analytics = new Analytics();

// React hook for analytics
import React, { useEffect } from 'react';

export function useAnalytics() {
  useEffect(() => {
    analytics.trackPageView(window.location.pathname);
  }, []);

  return analytics;
}

// Higher-order component to track section views
export function withSectionTracking<T extends Record<string, unknown>>(
  WrappedComponent: React.ComponentType<T>, 
  sectionName: string
) {
  return function TrackedComponent(props: T) {
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              analytics.trackSectionView(sectionName);
            }
          });
        },
        { threshold: 0.5 }
      );

      const element = document.getElementById(sectionName);
      if (element) {
        observer.observe(element);
      }

      return () => observer.disconnect();
    }, []);

    return React.createElement(WrappedComponent, props);
  };
}