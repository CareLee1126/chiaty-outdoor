import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

export default function ProductCard({ product }) {
  const quoteHref = `/contact?product=${encodeURIComponent(product.name)}`;
  return (
    <article className="prod-card">
      <div className="prod-media">
        <img src={product.image} alt={product.name} loading="lazy" />
      </div>
      <div className="prod-body">
        <span className="prod-cat">{product.category}</span>
        <h3 className="prod-name">{product.name}</h3>
        <div className="badges">
          <span className="badge">Foldable</span>
          <span className="badge">Wholesale</span>
        </div>
        <div className="prod-meta">
          <span className="prod-price">{product.priceLabel}</span>
        </div>
        <div className="prod-actions">
          <Link className="btn btn-accent" to={quoteHref}>Request Quote</Link>
          <a className="btn btn-ghost" href={product.alibabaUrl} target="_blank" rel="noreferrer" aria-label="View on Alibaba">
            <ExternalLink size={15} />
          </a>
        </div>
      </div>
    </article>
  );
}
