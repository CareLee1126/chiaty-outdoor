import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Check, MessageCircle } from 'lucide-react';
import { products } from '../data/products';
import { productOverrides } from '../data/productOverrides';
import { getItemNo } from '../data/itemNumbers';
import ProductCard from '../components/ProductCard';
import ProductInquiryForm from '../components/ProductInquiryForm';
import { getSpecs, getTags, getDescription, DETAIL_NOTE } from '../data/productDetails';
import { productMessage, waHref, trackWhatsAppClick } from '../data/whatsapp';
import useSeo, { SITE_ORIGIN } from '../data/useSeo';
import { CONTACT } from '../data/company';

// New reference product pages — must render byte-identically to their launch.
const LOCKED_IDS = new Set(['ct-311a', 'ct-311b']);

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const override = product ? productOverrides[product.id] : null;
  const isLocked = product ? LOCKED_IDS.has(product.id) : false;

  const gallery = override?.gallery?.length ? override.gallery : product ? [product.image] : [];
  const [active, setActive] = useState(0);
  useEffect(() => { setActive(0); }, [id]);

  // --- Per-product SEO (hook must run unconditionally, before any early return) ---
  const seoTitle = override?.seoTitle || (product ? `${product.name} | Chiaty Outdoor` : 'Product not found | Chiaty Outdoor');
  const seoDesc = override?.seoDescription || (override?.description || (product ? getDescription(product) : '')).slice(0, 320) || undefined;
  const seoPath = product ? `/products/${product.id}` : '/products';
  const jsonLd = product
    ? [
        {
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: product.name,
          sku: getItemNo(product, override) || undefined,
          category: product.category,
          description: override?.description || getDescription(product),
          brand: { '@type': 'Brand', name: 'Chiaty Outdoor' },
          image: override?.imagePending ? undefined : SITE_ORIGIN + gallery[0],
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_ORIGIN + '/' },
            { '@type': 'ListItem', position: 2, name: 'Products', item: SITE_ORIGIN + '/products' },
            { '@type': 'ListItem', position: 3, name: product.name, item: SITE_ORIGIN + seoPath },
          ],
        },
      ]
    : [];
  useSeo({ title: seoTitle, description: seoDesc, path: seoPath, jsonLd });

  if (!product) {
    return (
      <section className="section">
        <div className="container">
          <div className="section-tag">Not found</div>
          <h1 className="section-title">This product could not be found.</h1>
          <p className="section-lede">It may have been moved or renamed.</p>
          <Link to="/products" className="btn btn-accent" style={{ marginTop: 24 }}>
            <ArrowLeft size={16} /> Back to all products
          </Link>
        </div>
      </section>
    );
  }

  const itemNo = getItemNo(product, override);
  const specs = override?.specs?.length ? override.specs : getSpecs(product, itemNo);
  const tags = getTags(product.name);
  const description = override?.shortIntro || override?.description || getDescription(product);
  const detailImages = override?.detailImages || [];
  const sellingPoints = override?.sellingPoints || [];
  const quoteNote = override?.quoteNote;
  const customizationNote = override?.customizationNote;
  const inquiryPrompt = override?.inquiryPrompt;
  const imagePending = override?.imagePending;
  const hasPrice = product.priceMin != null;
  const quoteHref = `/contact?product=${encodeURIComponent(product.name)}`;
  const waMessage = productMessage(product.name, `/products/${product.id}`);
  const productUrl = `${SITE_ORIGIN}/products/${product.id}`;
  const emailSubject = `Quote request — ${product.name}`;
  const emailBody = [
    `Product: ${product.name}`,
    `Product page: ${productUrl}`,
    '',
    'Hello Chiaty Outdoor,',
    'I would like to request a quote for this model. Please send MOQ, pricing, catalogue and lead time.',
    '',
    'My requirements:',
    '- Order quantity:',
    '- Destination country:',
    '- Customization / branding:',
  ].join('\n');
  const emailQuoteHref = `mailto:${CONTACT.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <>
      <section className="page-intro" style={{ paddingBottom: 0 }}>
        <div className="container">
          <Link to="/products" className="mono" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--muted)' }}>
            <ArrowLeft size={14} /> All products
          </Link>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 28 }}>
        <div className="container">
          <div className="detail-grid">
            {/* MEDIA + GALLERY */}
            <div className="detail-gallery">
              <div className="detail-media">
                <img src={gallery[active]} alt={imagePending ? `${product.name} — product image pending` : product.name} />
              </div>
              {gallery.length > 1 && (
                <div className="detail-thumbs">
                  {gallery.map((src, i) => (
                    <button
                      key={src}
                      className={`detail-thumb ${i === active ? 'active' : ''}`}
                      onClick={() => setActive(i)}
                      aria-label={`View image ${i + 1}`}
                    >
                      <img src={src} alt={`${product.name} view ${i + 1}`} loading="lazy" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* INFO */}
            <div className="detail-info">
              <div className="prod-cat" style={{ marginBottom: 10 }}>{product.category}</div>
              {itemNo && isLocked && <div className="detail-itemno mono">Item No. {itemNo}</div>}
              <h1 className="detail-title">{product.name}</h1>
              {itemNo && !isLocked && <div className="detail-modelno mono">Model No.: {itemNo}</div>}

              {hasPrice ? (
                <div className="detail-price">{product.priceLabel}<span className="detail-price-unit"> / piece</span></div>
              ) : isLocked ? (
                <div className="detail-price" style={{ fontSize: 28 }}>Request wholesale quote</div>
              ) : (
                <div className="detail-price" style={{ fontSize: 24 }}>Contact Us for MOQ &amp; Pricing</div>
              )}

              {quoteNote && (
                <div className="detail-quotebox">
                  <div className="detail-quote-facts">
                    {itemNo && <span><strong>MOQ:</strong> 200 pieces</span>}
                    <span>OEM customization available</span>
                  </div>
                  <p>{quoteNote}</p>
                </div>
              )}

              <div className="badges" style={{ margin: '18px 0 22px' }}>
                {tags.map((t) => (
                  <span className="badge" key={t}>{t}</span>
                ))}
              </div>

              <p className="detail-desc">{description}</p>

              <div className="detail-actions">
                {quoteNote ? (
                  <a href={emailQuoteHref} className="btn btn-accent">Email Us for a Quote <ArrowUpRight size={16} /></a>
                ) : (
                  <Link to={quoteHref} className="btn btn-accent">Request Quote <ArrowUpRight size={16} /></Link>
                )}
                <a
                  href={waHref(waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  onClick={() => trackWhatsAppClick('product_detail')}
                >
                  <MessageCircle size={16} /> Get Quote on WhatsApp
                </a>
                <Link to="/contact" className="btn btn-ghost">Contact Sales</Link>
              </div>

              <ul className="detail-assurances">
                <li><Check size={15} /> Direct-factory wholesale pricing</li>
                <li><Check size={15} /> OEM / ODM customization available</li>
                <li><Check size={15} /> 24-hour inquiry response</li>
              </ul>
            </div>
          </div>

          {/* SELLING POINTS */}
          {sellingPoints.length > 0 && (
            <div className="detail-selling">
              <div className="section-tag">Key features</div>
              <h2 className="section-title" style={{ fontSize: 'clamp(26px,4vw,40px)', marginBottom: 24 }}>Product highlights</h2>
              <ul className="selling-list">
                {sellingPoints.map((s) => (
                  <li key={s.h}>
                    <Check size={16} />
                    <div><strong>{s.h}:</strong> {s.p}</div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* SPECS */}
          <div className="detail-specs">
            <div className="section-tag">Specifications</div>
            <h2 className="section-title" style={{ fontSize: 'clamp(26px,4vw,40px)', marginBottom: 24 }}>Product details</h2>
            <table className="spec-table">
              <tbody>
                {specs.map((s) => (
                  <tr key={s.k}>
                    <th>{s.k}</th>
                    <td>{s.v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {!override && <p className="form-note" style={{ marginTop: 14 }}>{DETAIL_NOTE}</p>}
          </div>

          {/* CUSTOMIZATION */}
          {customizationNote && (
            <div className="detail-custom">
              <div className="section-tag">Customization</div>
              <h2 className="section-title" style={{ fontSize: 'clamp(22px,3vw,32px)', marginBottom: 16 }}>OEM / ODM options</h2>
              <p className="detail-desc" style={{ maxWidth: 760 }}>{customizationNote}</p>
            </div>
          )}

          {/* INQUIRY PROMPT + EMAIL CTA */}
          {inquiryPrompt && (
            <div className="detail-inquiry">
              <p>{inquiryPrompt}</p>
              <div className="detail-actions" style={{ marginTop: 18 }}>
                <a
                  href={waHref(waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  onClick={() => trackWhatsAppClick('product_detail')}
                >
                  <MessageCircle size={16} /> Get Quote on WhatsApp
                </a>
              </div>
              <div className="inquiry-form-wrap">
                <ProductInquiryForm productName={product.name} productPath={`/products/${product.id}`} />
              </div>
            </div>
          )}

          {/* INQUIRY FORM for all other products (reuses the same component) */}
          {!inquiryPrompt && (
            <div className="detail-inquiry">
              <p>
                Interested in {product.name}
                {itemNo ? ` (Model No.: ${itemNo})` : ''}? Send us your order quantity,
                destination and customization requirements to request a quote.
              </p>
              <div className="detail-actions" style={{ marginTop: 18 }}>
                <a
                  href={waHref(waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  onClick={() => trackWhatsAppClick('product_detail')}
                >
                  <MessageCircle size={16} /> Get Quote on WhatsApp
                </a>
              </div>
              <div className="inquiry-form-wrap">
                <ProductInquiryForm
                  productName={product.name}
                  productPath={`/products/${product.id}`}
                  modelNo={itemNo}
                />
              </div>
            </div>
          )}

          {/* IN-PAGE DETAIL IMAGES */}
          {detailImages.length > 0 && (
            <div className="detail-images">
              {detailImages.map((src, i) => (
                <img key={src} src={src} alt={`${product.name} detail ${i + 1}`} loading="lazy" />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="section">
          <div className="container">
            <div className="section-head">
              <div className="section-tag">More in {product.category}</div>
              <h2 className="section-title">Related products.</h2>
            </div>
            <div className="prod-grid">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="cta-band">
        <div className="container">
          <h2>Interested in this model?</h2>
          <p>Send us your target quantity and customization needs — we reply within 24 hours with wholesale pricing and lead times.</p>
          <Link to={quoteHref} className="btn btn-accent">Request Quote <ArrowUpRight size={17} /></Link>
        </div>
      </section>
    </>
  );
}
