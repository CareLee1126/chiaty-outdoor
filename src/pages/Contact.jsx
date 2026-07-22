import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Mail, Phone, MapPin, Building2, MessageCircle } from 'lucide-react';
import { CONTACT } from '../data/company';
import { categories } from '../data/products';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const presetProduct = searchParams.get('product') || '';

  const [form, setForm] = useState({
    name: '', company: '', email: '', country: '',
    interest: presetProduct, quantity: '', message: '',
  });

  useEffect(() => {
    if (presetProduct) setForm((f) => ({ ...f, interest: presetProduct, message: f.message || `I am interested in: ${presetProduct}. Please send wholesale pricing and MOQ.` }));
  }, [presetProduct]);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const subject = `B2B Inquiry — ${form.company || form.name || 'New Buyer'}`;
    const body = [
      `Name: ${form.name}`,
      `Company: ${form.company}`,
      `Email: ${form.email}`,
      `Country: ${form.country}`,
      `Product interest: ${form.interest}`,
      `Target quantity / MOQ: ${form.quantity}`,
      '',
      'Message:',
      form.message,
    ].join('\n');
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <section className="page-intro">
        <div className="container">
          <div className="section-tag">Get a Quote</div>
          <h1 className="section-title">Tell us what you need to source.</h1>
          <p className="section-lede">
            Share your target models, quantities, and customization requirements. Our sales
            team replies within 24 hours with wholesale pricing and lead times.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '44px' }}>
        <div className="container">
          <div className="contact-grid">
            {/* FORM */}
            <form onSubmit={submit}>
              <div className="form-grid">
                <div className="field">
                  <label>Full Name *</label>
                  <input required value={form.name} onChange={update('name')} placeholder="Your name" />
                </div>
                <div className="field">
                  <label>Company</label>
                  <input value={form.company} onChange={update('company')} placeholder="Company name" />
                </div>
                <div className="field">
                  <label>Email *</label>
                  <input required type="email" value={form.email} onChange={update('email')} placeholder="you@company.com" />
                </div>
                <div className="field">
                  <label>Country / Region</label>
                  <input value={form.country} onChange={update('country')} placeholder="e.g. United States" />
                </div>
                <div className="field">
                  <label>Product Interest</label>
                  <select value={form.interest} onChange={update('interest')}>
                    <option value="">Select or type below…</option>
                    {presetProduct && <option value={presetProduct}>{presetProduct}</option>}
                    {categories.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div className="field">
                  <label>Target Quantity / MOQ</label>
                  <input value={form.quantity} onChange={update('quantity')} placeholder="e.g. 1000 pcs" />
                </div>
                <div className="field full">
                  <label>Message</label>
                  <textarea value={form.message} onChange={update('message')} placeholder="Tell us about your requirements, customization, and timeline…" />
                </div>
                <div className="field full">
                  <button type="submit" className="btn btn-accent" style={{ justifyContent: 'center', width: '100%' }}>
                    Submit Inquiry
                  </button>
                  <span className="form-note">Opens your email client addressed to our sales team.</span>
                </div>
              </div>
            </form>

            {/* INFO */}
            <aside className="contact-info">
              <div className="info-row">
                <div className="k"><Building2 size={13} style={{ verticalAlign: '-2px', marginRight: 6 }} />Company</div>
                <div className="v">{CONTACT.company}</div>
              </div>
              <div className="info-row">
                <div className="k"><Mail size={13} style={{ verticalAlign: '-2px', marginRight: 6 }} />Email</div>
                <div className="v"><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></div>
              </div>
              <div className="info-row">
                <div className="k"><Phone size={13} style={{ verticalAlign: '-2px', marginRight: 6 }} />Phone</div>
                <div className="v">{CONTACT.phone}</div>
              </div>
              <div className="info-row">
                <div className="k"><MessageCircle size={13} style={{ verticalAlign: '-2px', marginRight: 6 }} />WhatsApp</div>
                <div className="v">{CONTACT.whatsapp}</div>
              </div>
              <div className="info-row">
                <div className="k"><MapPin size={13} style={{ verticalAlign: '-2px', marginRight: 6 }} />Location</div>
                <div className="v">{CONTACT.address}</div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
