import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { FACTORY_STATS, QC_STEPS, TIMELINE, CERTS } from '../data/company';

export default function About() {
  return (
    <>
      <section className="page-intro">
        <div className="container">
          <div className="section-tag">The Factory</div>
          <h1 className="section-title">Seven years building outdoor seating for the world.</h1>
          <p className="section-lede">
            Chiaty Outdoor is a direct manufacturer of folding metal-frame camping chairs,
            beach chairs, loungers, and outdoor tables — supplying wholesale buyers, importers,
            and retail chains with factory-direct pricing and full customization.
          </p>
        </div>
      </section>

      {/* STORY + STATS */}
      <section className="section" style={{ paddingTop: '48px' }}>
        <div className="container">
          <div className="split">
            <div className="split-media">
              <img src="/assets/images/factory.png" alt="Chiaty manufacturing floor" loading="lazy" />
            </div>
            <div className="split-body">
              <div className="section-tag">Capabilities</div>
              <h2 className="section-title" style={{ fontSize: 'clamp(28px,4vw,44px)' }}>
                Focused production, wholesale scale.
              </h2>
              <p className="section-lede" style={{ fontSize: '16px', marginTop: '14px' }}>
                We specialize in one thing — portable outdoor seating — and do it at volume.
                Aluminum and steel frames, high-strength oxford fabric, and repeatable quality
                across every batch.
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

      {/* QC PROCESS */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="section-tag">Quality Control</div>
            <h2 className="section-title">Four checkpoints, every order.</h2>
          </div>
          <div className="steps">
            {QC_STEPS.map((s) => (
              <div className="step" key={s.n}>
                <div className="step-n mono">STEP {s.n}</div>
                <h4>{s.t}</h4>
                <p>{s.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QC IMAGE + CERTS */}
      <section className="section">
        <div className="container">
          <div className="split">
            <div className="split-body">
              <div className="section-tag">Standards</div>
              <h2 className="section-title" style={{ fontSize: 'clamp(28px,4vw,44px)' }}>
                Built to pass buyer audits.
              </h2>
              <p className="section-lede" style={{ fontSize: '16px', marginTop: '14px' }}>
                Precision-welded joints and load-tested hinges keep our chairs durable through
                repeated fold cycles. We support third-party inspection and factory audits.
              </p>
              <div className="certs" style={{ marginTop: '26px' }}>
                {CERTS.map((c) => (
                  <span className="cert" key={c}>{c}</span>
                ))}
              </div>
            </div>
            <div className="split-media">
              <img src="/assets/images/qc.png" alt="Close-up of a welded chair frame joint" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="section-tag">Milestones</div>
            <h2 className="section-title">Our growth.</h2>
          </div>
          <div className="timeline">
            {TIMELINE.map((t) => (
              <div className="tl-row" key={t.year}>
                <div className="tl-year">{t.year}</div>
                <p>{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="container">
          <h2>Ready to audit our factory or place a trial order?</h2>
          <p>Tell us your requirements and we will arrange samples, pricing, and lead times.</p>
          <Link to="/contact" className="btn btn-accent">Contact Sales <ArrowUpRight size={17} /></Link>
        </div>
      </section>
    </>
  );
}
