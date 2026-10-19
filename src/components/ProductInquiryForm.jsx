import React, { useState } from 'react';
import { CONTACT } from '../data/company';

// Product-scoped inquiry form (CT-311A / CT-311B).
// Uses mailto: the customer fills the form, clicks "Continue in Email", and their
// email client opens pre-filled with their details, the product model and the page
// link, addressed to our sales email. No "submitted" success is shown and the form
// is NOT cleared after opening the email client.
export default function ProductInquiryForm({ productName, productPath }) {
  const productUrl = 'https://www.chiatyoutdoor.com' + productPath;

  const [form, setForm] = useState({
    name: '', company: '', email: '', country: '', quantity: '', message: '',
  });

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const buildMailto = () => {
    const subject = `B2B Inquiry — ${productName}`;
    const body = [
      `Product: ${productName}`,
      `Product page: ${productUrl}`,
      '',
      `Name: ${form.name}`,
      `Company: ${form.company}`,
      `Email: ${form.email}`,
      `Country / Region: ${form.country}`,
      `Target quantity / MOQ: ${form.quantity}`,
      '',
      'Message:',
      form.message,
    ].join('\n');
    return `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const submit = (e) => {
    e.preventDefault();
    // Open the email client with details pre-filled. Do NOT clear the form and do
    // NOT show any "submitted" confirmation — sending is completed by the user.
    window.location.href = buildMailto();
  };

  return (
    <form className="inquiry-form" onSubmit={submit} noValidate>
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
          <label>Target Quantity / MOQ</label>
          <input value={form.quantity} onChange={update('quantity')} placeholder="e.g. 500 pcs" />
        </div>
        <div className="field">
          <label>Product</label>
          <input value={productName} readOnly disabled />
        </div>
        <div className="field full">
          <label>Message</label>
          <textarea value={form.message} onChange={update('message')} placeholder="Tell us about your requirements, customization, and timeline…" />
        </div>
        <div className="field full">
          <button type="submit" className="btn btn-accent" style={{ justifyContent: 'center', width: '100%' }}>
            Continue in Email
          </button>
          <span className="form-note">
            Your email app will open with your inquiry details. Please send the email to complete your inquiry.
          </span>
          <span className="form-note">
            Or email us directly at <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
          </span>
        </div>
      </div>
    </form>
  );
}
