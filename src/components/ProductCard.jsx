import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  const detailHref = `/products/${product.id}`;
  const quoteHref = `/contact?product=${encodeURIComponent(product.name)}`;
  return (
    <article className="prod-card">
      <Link to={detailHref} className="prod-media" aria-label={product.name}>
        <img src={product.image} alt={product.name} loading="lazy" />
      </Link>
      <div className="prod-body">
        <span className="prod-cat">{product.category}</span>
        <h3 className="prod-name">
          <Link to={detailHref}>{product.name}</Link>
        </h3>
        <div className="badges">
          <span className="badge">Foldable</span>
          <span className="badge">Wholesale</span>
        </div>
        <div className="prod-meta">
          <span className="prod-price">{product.priceLabel}</span>
        </div>
        <div className="prod-actions">
          <Link className="btn btn-ghost" to={detailHref}>View Details</Link>
          <Link className="btn btn-accent" to={quoteHref}>Request Quote</Link>
        </div>
      </div>
    </article>
  );
}
