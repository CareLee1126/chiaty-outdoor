import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT } from '../data/company';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="brand-name">Chiaty</span>
            <p>
              Direct-factory manufacturer of outdoor camping chairs, beach chairs, and
              leisure furniture. OEM/ODM wholesale for importers, distributors, and retail
              chains worldwide.
            </p>
          </div>
          <div className="footer-col">
            <h5>Navigate</h5>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/about">Factory</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="footer-col">
            <h5>Sourcing</h5>
            <Link to="/contact">Request a Quote</Link>
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="mono">© {new Date().getFullYear()} Chiaty Outdoor. All rights reserved.</span>
          <span className="mono">OEM / ODM · Direct Factory Export</span>
        </div>
      </div>
    </footer>
  );
}
