import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, MessageCircle } from 'lucide-react';
import Marquee from '../components/Marquee';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';
import { STATS, FACTORY_STATS } from '../data/company';
import { GENERIC_MESSAGE, waHref, trackWhatsAppClick } from '../data/whatsapp';

function catThumb(cat) {
  const p = products.find((x) => x.category === cat);
  return p ? p.image : '/assets/images/products/p1.jpg';
}

const featuredCats = ['Beach Chair', 'Camping Chair', 'Folding Table'];

export default function Home() {
  const featured = products.find((p) => p.priceMax && p.priceMax >= 15) || products[0];
  const topProducts = products.slice(0, 8);

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg">
          <img src="/assets/images/hero.png" alt="Outdoor camping chair on a rugged coastline at golden hour" />
        </div>
        <div className="container hero-inner">
          <span className="hero-eyebrow mono">EST. 2017 · Jinhua, China · OEM / ODM</span>
          <h1>Built for the wild, engineered for the world.</h1>
          <p className="hero-sub">
            Direct-factory manufacturer of outdoor camping chairs, beach chairs, and leisure
            furniture. Wholesale supply for importers, distributors, and retail chains.
          </p>
          <div className="hero-actions">
            <Link to="/products" className="btn btn-accent">Browse Products <ArrowUpRight size={17} /></Link>
            <a
              href={waHref(GENERIC_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              onClick={() => trackWhatsAppClick('home_hero')}
            >
              <MessageCircle size={17} /> Get Quote on WhatsApp
            </a>
            <Link to="/contact" className="btn btn-ghost" style={{ color: 'var(--paper)', borderColor: 'var(--paper)' }}>
              Request a Quote
            </Link>
          </div>
          <div className="hero-stats">
            {STATS.map((s) => (
              <div className="hero-stat" key={s.lbl}>
                <div className="num">{s.num}</div>
                <div className="lbl">{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Marquee />

      {/* CATEGORIES */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="section-tag">Product Range</div>
            <h2 className="section-title">One factory. The full outdoor seating line.</h2>
          </div>
          <div className="cat-grid">
            {featuredCats.map((cat) => {
              const count = products.filter((p) => p.category === cat).length;
              return (
                <Link to={`/products?category=${encodeURIComponent(cat)}`} className="cat-card" key={cat}>
                  <img src={catThumb(cat)} alt={cat} loading="lazy" />
                  <div className="cat-body">
                    <div className="cat-name">{cat}</div>
                    <div className="cat-count">{count} models</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* FACTORY STRENGTH */}
      <section className="section">
        <div className="container">
          <div className="split">
            <div className="split-media">
              <img src="/assets/images/factory.png" alt="Chiaty outdoor furniture assembly line" loading="lazy" />
            </div>
            <div className="split-body">
              <div className="section-tag">Manufacturing Strength</div>
              <h2 className="section-title" style={{ fontSize: 'clamp(30px,4vw,46px)' }}>
                Wholesale efficiency, factory-direct pricing.
              </h2>
              <p className="section-lede" style={{ fontSize: '16px', marginTop: '14px' }}>
                Seven years of focused production on folding metal-frame outdoor seating —
                with full OEM/ODM support for custom logo, fabric, and packaging.
              </p>
              <div className="stat-rows">
                {FACTORY_STATS.map((s) => (
                  <div className="stat-row" key={s.k}>
                    <span className="k">{s.k}</span>
                    <span className="v">{s.v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCT */}
      <section className="section">
        <div className="container">
          <div className="featured">
            <div className="featured-media">
              <img src={featured.image} alt={featured.name} loading="lazy" />
            </div>
            <div className="featured-body">
              <div className="section-tag" style={{ color: '#e8c9b8' }}>Featured Model</div>
              <h3>{featured.name}</h3>
              <p className="lede">
                Durable metal frame, foldable and lightweight — a proven wholesale bestseller.
                Available with custom logo, fabric color, and export packaging.
              </p>
              <div className="hero-actions">
                <Link to={`/contact?product=${encodeURIComponent(featured.name)}`} className="btn btn-accent">
                  Request Bulk Quote <ArrowRight size={16} />
                </Link>
                <Link to="/products" className="btn btn-ghost" style={{ color: 'var(--paper)', borderColor: 'var(--paper)' }}>
                  View All Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TOP PRODUCTS */}
      <section className="section">
        <div className="container">
          <div className="section-head" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <div className="section-tag">Popular Models</div>
              <h2 className="section-title">Ready for wholesale orders.</h2>
            </div>
            <Link to="/products" className="btn btn-ghost">All {products.length} Products <ArrowRight size={16} /></Link>
          </div>
          <div className="prod-grid">
            {topProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="cta-band">
        <div className="container">
          <h2>Source your next container direct from the factory.</h2>
          <p>
            Send us your target models, quantities, and customization needs. Our sales team
            replies within 24 hours with wholesale pricing and lead times.
          </p>
          <Link to="/contact" className="btn btn-accent">Submit Inquiry <ArrowUpRight size={17} /></Link>
        </div>
      </section>
    </>
  );
}
