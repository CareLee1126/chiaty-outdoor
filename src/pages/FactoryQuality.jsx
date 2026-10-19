import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check, MessageCircle, Play } from 'lucide-react';
import ProductInquiryForm from '../components/ProductInquiryForm';
import useSeo, { SITE_ORIGIN } from '../data/useSeo';
import { GENERIC_MESSAGE, waHref, trackWhatsAppClick } from '../data/whatsapp';
import { factoryVideo, capabilityImage, productionSteps, qualityCustomization } from '../data/factory';

export default function FactoryQuality() {
  const [playing, setPlaying] = useState(false);
  const hasVideo = Boolean(factoryVideo.src);
  const hasPoster = Boolean(factoryVideo.poster);

  useSeo({
    title: 'Factory & Quality — Inside Our Outdoor Furniture Factory | Chiaty Outdoor',
    description:
      'See how Chiaty Outdoor manufactures camping chairs, beach chairs and outdoor furniture — from material inspection and frame production to sewing, assembly, quality inspection and packaging. OEM/ODM factory in Jinhua, China.',
    path: '/factory-quality',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_ORIGIN + '/' },
          { '@type': 'ListItem', position: 2, name: 'Factory & Quality', item: SITE_ORIGIN + '/factory-quality' },
        ],
      },
    ],
  });

  return (
    <>
      {/* HERO + VIDEO */}
      <section className="page-intro" style={{ paddingBottom: 0 }}>
        <div className="container">
          <nav className="breadcrumb mono" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true"> / </span>
            <span>Factory &amp; Quality</span>
          </nav>
          <div className="section-tag">Factory &amp; Quality</div>
          <h1 className="section-title">Inside Jinhua Jiading Leisure Factory</h1>
          <p className="section-lede" style={{ maxWidth: 760 }}>
            From material inspection to final packaging, see how we produce reliable outdoor
            furniture for wholesale and OEM/ODM projects.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 28 }}>
        <div className="container">
          {hasVideo ? (
            <div className="factory-video">
              {playing ? (
                <video
                  className="factory-video-el"
                  src={factoryVideo.src}
                  poster={hasPoster ? factoryVideo.poster : undefined}
                  controls
                  autoPlay
                  playsInline
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <button
                  type="button"
                  className="factory-video-cover"
                  onClick={() => setPlaying(true)}
                  aria-label="Play factory tour video"
                >
                  {hasPoster && <img src={factoryVideo.poster} alt={factoryVideo.alt} />}
                  <span className="factory-video-play">
                    <Play size={30} fill="currentColor" />
                  </span>
                </button>
              )}
            </div>
          ) : null}
        </div>
      </section>

      {/* FACTORY CAPABILITY INTRO */}
      <section className="section" style={{ paddingTop: 8 }}>
        <div className="container">
          <div className="section-head">
            <div className="section-tag">Our Capability</div>
            <h2 className="section-title">Built for Wholesale &amp; Custom Projects</h2>
          </div>
          <div className="factory-capability">
            <div className="factory-capability-text">
              <p className="section-lede" style={{ maxWidth: 620 }}>
                We manufacture outdoor camping chairs, beach chairs and related outdoor furniture,
                with full OEM/ODM support for wholesale and custom projects. We can customize colors,
                logos, labels and packaging to match your brand and market requirements. Share your
                target models, quantities and branding needs, and our team will advise on options and
                MOQ.
              </p>
            </div>
            {capabilityImage.img && (
              <div className="factory-capability-media">
                <img src={capabilityImage.img} alt={capabilityImage.alt} loading="lazy" />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* PRODUCTION PROCESS */}
      {productionSteps.length > 0 && (
        <section className="section" style={{ paddingTop: 8 }}>
          <div className="container">
            <div className="section-head">
              <div className="section-tag">Step by Step</div>
              <h2 className="section-title">Our Production Process</h2>
            </div>
            <div className="factory-steps">
              {productionSteps.map((s, i) => (
                <article className="factory-step" key={s.title}>
                  <div className="factory-step-imgs">
                    {s.images.map((im) => (
                      <div className="factory-step-media" key={im.src}>
                        <img src={im.src} alt={im.alt} loading="lazy" />
                      </div>
                    ))}
                  </div>
                  <div className="factory-step-body">
                    <span className="factory-step-no mono">{String(i + 1).padStart(2, '0')}</span>
                    <h3 className="factory-step-title">{s.title}</h3>
                    <p>{s.caption}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* QUALITY CONTROL & OEM CUSTOMIZATION */}
      {qualityCustomization.length > 0 && (
        <section className="section" style={{ paddingTop: 8 }}>
          <div className="container">
            <div className="section-head">
              <div className="section-tag">Quality &amp; Customization</div>
              <h2 className="section-title">Quality Control &amp; OEM Customization</h2>
            </div>
            <div className="factory-qc-grid">
              {qualityCustomization.map((q) => (
                <figure className="factory-qc-item" key={q.img}>
                  <img src={q.img} alt={q.alt} loading="lazy" />
                  {q.caption && <figcaption>{q.caption}</figcaption>}
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* INQUIRY */}
      <section className="section" style={{ paddingTop: 8 }}>
        <div className="container">
          <div className="detail-inquiry">
            <div className="section-tag">Get in Touch</div>
            <h2 className="section-title" style={{ fontSize: 'clamp(26px,4vw,40px)', margin: '6px 0 10px' }}>
              Request Factory Information &amp; Quotation
            </h2>
            <p>
              Contact us for product catalogues, MOQ, customization options and quotations.
            </p>
            <div className="detail-actions" style={{ marginTop: 18 }}>
              <a
                href={waHref(GENERIC_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                onClick={() => trackWhatsAppClick('factory_quality')}
              >
                <MessageCircle size={16} /> Get Quote on WhatsApp
              </a>
            </div>
            <div className="inquiry-form-wrap">
              <ProductInquiryForm
                productName="Factory Information & Quotation"
                productPath="/factory-quality"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="container">
          <h2>Source direct from a real factory.</h2>
          <p>Send us your target models, quantities and customization needs — we reply within 24 hours.</p>
          <Link to="/products" className="btn btn-accent">Browse Products <ArrowUpRight size={17} /></Link>
        </div>
      </section>
    </>
  );
}
