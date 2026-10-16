import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Clock } from 'lucide-react';
import { guides } from '../data/guides';
import useSeo, { SITE_ORIGIN } from '../data/useSeo';

export default function BuyerGuides() {
  useSeo({
    title: 'Buyer Guides — Sourcing Camping & Beach Chairs | Chiaty Outdoor',
    description:
      'Practical buyer guides for importing folding camping and beach chairs from China: how to choose a supplier, MOQ and lead time, OEM customization, and steel vs aluminum frames.',
    path: '/buyer-guides',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_ORIGIN + '/' },
          { '@type': 'ListItem', position: 2, name: 'Buyer Guides', item: SITE_ORIGIN + '/buyer-guides' },
        ],
      },
      {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        itemListElement: guides.map((g, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: g.title,
          url: `${SITE_ORIGIN}/buyer-guides/${g.slug}`,
        })),
      },
    ],
  });

  return (
    <>
      <section className="page-intro">
        <div className="container">
          <nav className="breadcrumb mono" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true"> / </span>
            <span>Buyer Guides</span>
          </nav>
          <div className="section-tag">Resources</div>
          <h1 className="section-title">Buyer Guides.</h1>
          <p className="section-lede">
            Practical sourcing guides for overseas buyers importing folding camping and beach
            chairs — supplier selection, MOQ and lead time, OEM customization, and frame materials.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 30 }}>
        <div className="container">
          <div className="guide-grid">
            {guides.map((g) => (
              <article className="guide-card" key={g.slug}>
                <Link to={`/buyer-guides/${g.slug}`} className="guide-card-media">
                  <img src={g.cover} alt={g.title} loading="lazy" />
                </Link>
                <div className="guide-card-body">
                  <div className="guide-card-meta mono">
                    <Clock size={13} /> {g.readMins} min read
                  </div>
                  <h2 className="guide-card-title">
                    <Link to={`/buyer-guides/${g.slug}`}>{g.title}</Link>
                  </h2>
                  <p className="guide-card-excerpt">{g.excerpt}</p>
                  <Link to={`/buyer-guides/${g.slug}`} className="btn btn-accent guide-card-btn">
                    Read Guide <ArrowUpRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
