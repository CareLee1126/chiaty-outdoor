import { useEffect } from 'react';

const SITE_ORIGIN = 'https://www.chiatyoutdoor.com';
const DEFAULT_TITLE =
  'Chiaty Outdoor — Camping & Beach Chair Manufacturer | OEM/ODM Wholesale';
const DEFAULT_DESC =
  'Chiaty Outdoor is a direct-factory manufacturer of outdoor camping chairs, beach chairs, loungers, and leisure furniture. OEM/ODM wholesale supply for global importers and distributors.';

function setMeta(selector, attr, value) {
  let el = document.head.querySelector(selector);
  if (value == null) return;
  if (!el) {
    el = document.createElement('meta');
    const [, name] = selector.match(/\[(?:name|property)="(.+)"\]/) || [];
    if (selector.includes('property=')) el.setAttribute('property', name);
    else el.setAttribute('name', name);
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

// Inject (or replace) one or more JSON-LD blocks tagged with data-seo="1".
function setJsonLd(blocks) {
  document.head
    .querySelectorAll('script[type="application/ld+json"][data-seo="1"]')
    .forEach((n) => n.remove());
  (blocks || []).forEach((obj) => {
    if (!obj) return;
    const s = document.createElement('script');
    s.type = 'application/ld+json';
    s.setAttribute('data-seo', '1');
    s.textContent = JSON.stringify(obj);
    document.head.appendChild(s);
  });
}

/**
 * Per-page SEO. Pass a path (e.g. "/buyer-guides") to build the canonical URL.
 * jsonLd is an array of structured-data objects. Everything resets to the
 * site default on unmount so other pages are unaffected.
 */
export default function useSeo({ title, description, path, jsonLd } = {}) {
  useEffect(() => {
    const canonical = SITE_ORIGIN + (path || '/');
    if (title) document.title = title;
    setMeta('meta[name="description"]', 'content', description || DEFAULT_DESC);
    setMeta('meta[property="og:title"]', 'content', title || DEFAULT_TITLE);
    setMeta('meta[property="og:description"]', 'content', description || DEFAULT_DESC);
    setMeta('meta[property="og:url"]', 'content', canonical);
    setCanonical(canonical);
    setJsonLd(jsonLd);

    return () => {
      document.title = DEFAULT_TITLE;
      setMeta('meta[name="description"]', 'content', DEFAULT_DESC);
      setMeta('meta[property="og:title"]', 'content', DEFAULT_TITLE);
      setMeta('meta[property="og:description"]', 'content', DEFAULT_DESC);
      setMeta('meta[property="og:url"]', 'content', SITE_ORIGIN + '/');
      setCanonical(SITE_ORIGIN + '/');
      setJsonLd([]);
    };
  }, [title, description, path, JSON.stringify(jsonLd)]);
}

export { SITE_ORIGIN };
