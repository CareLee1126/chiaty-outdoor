import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/products', label: 'Products' },
  { to: '/factory-quality', label: 'Factory & Quality' },
  { to: '/buyer-guides', label: 'Buyer Guides' },
  { to: '/about', label: 'Factory' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-name">Chiaty</span>
          <span className="brand-loc mono">Outdoor · Jinhua, CN</span>
        </Link>

        <nav className={`nav ${open ? 'open' : ''}`}>
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn-accent nav-cta" onClick={() => setOpen(false)}>
            Request Quote
          </Link>
        </nav>

        <button className="menu-toggle" aria-label="Menu" onClick={() => setOpen((v) => !v)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
