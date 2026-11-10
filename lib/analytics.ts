declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export type PageLanguage = 'en' | 'ta' | 'si';

export function getPageLanguage(pathname = window.location.pathname): PageLanguage {
  if (pathname === '/ta' || pathname.startsWith('/ta/')) return 'ta';
  if (pathname === '/si' || pathname.startsWith('/si/')) return 'si';
  return 'en';
}

export function getLinkLocation(el: Element | null): string {
  if (!el) return 'body';
  const explicit = el.closest('[data-track-location]')?.getAttribute('data-track-location');
  if (explicit) return explicit;
  if (el.closest('header')) return 'header';
  if (el.closest('footer')) return 'footer';
  if (el.closest('#contact')) return 'contact_section';
  if (el.closest('#hero')) return 'hero';
  return 'body';
}

function sendGtagEvent(eventName: string, params: Record<string, any>) {
  if (typeof window === 'undefined') return;
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  } else if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push(['event', eventName, params]);
  }
}

export function trackFormSubmit(serviceSelected: string) {
  const language = getPageLanguage();
  const page_path = window.location.pathname;
  sendGtagEvent('form_submit', {
    language,
    service_selected: serviceSelected,
  });
  sendGtagEvent('generate_lead', {
    language,
    page_path,
    lead_source: 'contact_form',
  });
}

export function initLeadClickTracking(): () => void {
  const handleClick = (e: MouseEvent) => {
    const target = e.target as Element | null;
    const anchor = target?.closest('a[href]') as HTMLAnchorElement | null;
    if (!anchor) return;

    const href = anchor.getAttribute('href') || '';
    const resolvedHref = anchor.href || href;
    const base = {
      language: getPageLanguage(),
      page_path: window.location.pathname,
      link_location: getLinkLocation(anchor),
    };

    if (resolvedHref.startsWith('https://wa.me/') || resolvedHref.includes('wa.me/')) {
      sendGtagEvent('click_whatsapp', {
        ...base,
        has_prefilled_text: resolvedHref.includes('?text=') ? 'yes' : 'no',
      });
      sendGtagEvent('generate_lead', {
        ...base,
        lead_source: 'whatsapp',
      });
    } else if (href.startsWith('tel:') || resolvedHref.startsWith('tel:')) {
      sendGtagEvent('click_phone', base);
    } else if (href.startsWith('mailto:') || resolvedHref.startsWith('mailto:')) {
      sendGtagEvent('click_email', base);
    } else if (resolvedHref.includes('whatsapp.com/channel')) {
      sendGtagEvent('click_whatsapp_channel', base);
    } else if (resolvedHref.includes('play.google.com')) {
      sendGtagEvent('click_play_store', base);
    }
  };

  document.addEventListener('click', handleClick);
  return () => document.removeEventListener('click', handleClick);
}

