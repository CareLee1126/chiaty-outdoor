import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, MessageCircle, Clock } from 'lucide-react';
import { guides, PLACEHOLDER } from '../data/guides';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { waHref, trackWhatsAppClick, GENERIC_MESSAGE } from '../data/whatsapp';
import useSeo, { SITE_ORIGIN } from '../data/useSeo';

export default function GuideArticle() {
  const { slug } = useParams();
  const guide = guides.find((g) => g.slug === slug);

  if (!guide) {
    return (
      <section className="section">
        <div className="container">
          <div className="section-tag">Not found</div>
          <h1 className="section-title">This guide could not be found.</h1>
          <Link to="/buyer-guides" className="btn btn-accent" style={{ marginTop: 24 }}>
            <ArrowLeft size={16} /> All buyer guides
          </Link>
        </div>
      </section>
    );
  }

  const url = `${SITE_ORIGIN}/buyer-guides/${guide.slug}`;
  const waMessage = `Hello Chiaty Outdoor, I read your guide "${guide.title}" and I'm interested in your outdoor furniture. Please send your catalogue, MOQ and pricing. Guide: ${url}`;

  const related = products
    .filter((p) => p.category === guide.relatedCategory)
    .slice(0, 4);

  useSeo({
    title: guide.seoTitle,
    description: guide.seoDescription,
    path: `/buyer-guides/${guide.slug}`,
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: guide.title,
        description: guide.seoDescription,
        image: SITE_ORIGIN + guide.cover,
        author: { '@type': 'Organization', name: 'Chiaty Outdoor' },
        publisher: {
          '@type': 'Organization',
          name: 'Chiaty Outdoor',
          url: SITE_ORIGIN + '/',
        },
        mainEntityOfPage: url,
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_ORIGIN + '/' },
          { '@type': 'ListItem', position: 2, name: 'Buyer Guides', item: SITE_ORIGIN + '/buyer-guides' },
          { '@type': 'ListItem', position: 3, name: guide.breadcrumbLabel, item: url },
        ],
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: guide.faq.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  });

  return (
    <>
      <section className="page-intro" style={{ paddingBottom: 0 }}>
        <div className="container">
          <nav className="breadcrumb mono" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true"> / </span>
            <Link to="/buyer-guides">Buyer Guides</Link>
            <span aria-hidden="true"> / </span>
            <span>{guide.breadcrumbLabel}</span>
          </nav>
        </div>
      </section>

      <article className="section guide-article" style={{ paddingTop: 24 }}>
        <div className="container container-narrow">
          <div className="guide-card-meta mono" style={{ marginBottom: 14 }}>
            <Clock size={13} /> {guide.readMins} min read · Updated {guide.updated}
          </div>
          <h1 className="guide-article-title">{guide.title}</h1>

          {guide.intro.map((p, i) => (
            <p className="guide-lede" key={i}>{p}</p>
          ))}

          <img className="guide-hero-img" src={guide.cover} alt={guide.title} loading="lazy" />

          {guide.sections.map((s) => (
            <section className="guide-section" key={s.h}>
              <h2>{s.h}</h2>
              {s.p.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </section>
          ))}

          {guide.checklist && (
            <section className="guide-section">
              <h2>Quick checklist</h2>
              <ul className="guide-checklist">
                {guide.checklist.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </section>
          )}

          {/* FAQ */}
          <section className="guide-section guide-faq">
            <h2>Frequently asked questions</h2>
            {guide.faq.map((f) => (
              <div className="faq-item" key={f.q}>
                <h3 className="faq-q">{f.q}</h3>
                <p className="faq-a">{f.a}</p>
              </div>
            ))}
          </section>

          {/* INQUIRY CTA */}
          <div className="guide-cta">
            <h2>Ready to source from the factory?</h2>
            <p>Send your target models, quantity and customization needs — we reply within 24 hours with wholesale pricing and lead times.</p>
            <div className="guide-cta-actions">
              <a
                href={waHref(waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                onClick={() => trackWhatsAppClick('buyer_guide')}
              >
                <MessageCircle size={16} /> Request a Quote on WhatsApp
              </a>
              <Link to="/contact" className="btn btn-accent">
                Contact Us <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* RELATED PRODUCTS */}
      {related.length > 0 && (
        <section className="section">
          <div className="container">
            <div className="section-head">
              <div className="section-tag">Related products</div>
              <h2 className="section-title">Recommended {guide.relatedCategory.toLowerCase()}s.</h2>
            </div>
            <div className="prod-grid">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
