import React from 'react';
import { Link } from 'react-router-dom';

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
        </div>
      </div>
    </article>
  );
}
