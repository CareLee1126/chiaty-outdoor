import React, { useMemo, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Marquee from '../components/Marquee';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initial = searchParams.get('category') || 'All';
  const [active, setActive] = useState(initial);

  useEffect(() => {
    const c = searchParams.get('category') || 'All';
    setActive(c);
  }, [searchParams]);

  const filters = ['All', ...categories];

  const list = useMemo(
    () => (active === 'All' ? products : products.filter((p) => p.category === active)),
    [active]
  );

  const pick = (c) => {
    setActive(c);
    if (c === 'All') setSearchParams({});
    else setSearchParams({ category: c });
  };

  return (
    <>
      <section className="page-intro">
        <div className="container">
          <div className="section-tag">Catalog · {products.length} Models</div>
          <h1 className="section-title">Outdoor seating & leisure furniture, wholesale.</h1>
          <p className="section-lede">
            Every model is manufactured in-house and available for OEM/ODM. Select a category,
            then request a quote on the models you want to source.
          </p>
        </div>
      </section>

      <div style={{ padding: '30px 0 0' }}>
        <div className="container">
          <div className="filter-bar">
            {filters.map((c) => (
              <button
                key={c}
                className={`filter-btn ${active === c ? 'active' : ''}`}
                onClick={() => pick(c)}
              >
                {c}
                {c !== 'All' && (
                  <span style={{ opacity: 0.6, marginLeft: 6 }}>
                    {products.filter((p) => p.category === c).length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="section" style={{ paddingTop: '10px' }}>
        <div className="container">
          <div className="prod-grid">
            {list.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      <Marquee />
    </>
  );
}
