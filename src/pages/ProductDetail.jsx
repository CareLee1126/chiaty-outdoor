import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { getSpecs, getTags, getDescription, DETAIL_NOTE } from '../data/productDetails';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

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

  const specs = getSpecs(product);
  const tags = getTags(product.name);
  const description = getDescription(product);
  const quoteHref = `/contact?product=${encodeURIComponent(product.name)}`;

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
            {/* MEDIA */}
            <div className="detail-media">
              <img src={product.image} alt={product.name} />
            </div>

            {/* INFO */}
            <div className="detail-info">
              <div className="prod-cat" style={{ marginBottom: 10 }}>{product.category}</div>
              <h1 className="detail-title">{product.name}</h1>

              <div className="detail-price">{product.priceLabel}<span className="detail-price-unit"> / piece</span></div>

              <div className="badges" style={{ margin: '18px 0 22px' }}>
                {tags.map((t) => (
                  <span className="badge" key={t}>{t}</span>
                ))}
              </div>

              <p className="detail-desc">{description}</p>

              <div className="detail-actions">
                <Link to={quoteHref} className="btn btn-accent">Request Quote <ArrowUpRight size={16} /></Link>
                <Link to="/contact" className="btn btn-ghost">Contact Sales</Link>
              </div>

              <ul className="detail-assurances">
                <li><Check size={15} /> Direct-factory wholesale pricing</li>
                <li><Check size={15} /> OEM / ODM customization available</li>
                <li><Check size={15} /> 24-hour inquiry response</li>
              </ul>
            </div>
          </div>

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
            <p className="form-note" style={{ marginTop: 14 }}>{DETAIL_NOTE}</p>
          </div>
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
