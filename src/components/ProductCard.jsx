import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { productOverrides } from '../data/productOverrides';
import { getItemNo } from '../data/itemNumbers';
import { productMessage, waHref, trackWhatsAppClick } from '../data/whatsapp';

export default function ProductCard({ product }) {
  const detailHref = `/products/${product.id}`;
  const quoteHref = `/contact?product=${encodeURIComponent(product.name)}`;
  const waMessage = productMessage(product.name, detailHref);
  const itemNo = getItemNo(product, productOverrides[product.id]);
  return (
    <article className="prod-card">
      <Link to={detailHref} className="prod-media" aria-label={product.name}>
        <img src={product.image} alt={product.name} loading="lazy" />
      </Link>
      <div className="prod-body">
        <div className="prod-cat-row">
          <span className="prod-cat">{product.category}</span>
          {itemNo && <span className="prod-itemno">{itemNo}</span>}
        </div>
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
        <a
          className="btn btn-whatsapp prod-wa"
          href={waHref(waMessage)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick('product_card')}
        >
          <MessageCircle size={15} /> Get Quote on WhatsApp
        </a>
      </div>
    </article>
  );
}
