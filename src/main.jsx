import React, { useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import ProductDetail from './pages/ProductDetail';
import Contact from './pages/Contact';
import './styles.css';

function ScrollToTop() {
  const { pathname, search } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, search]);
  return null;
}

function AnalyticsPageView() {
  const { pathname, search } = useLocation();
  const firstLoad = useRef(true);
  useEffect(() => {
    // gtag('config') already sends the initial page_view on hard load.
    // Skip the first render here so it is not counted twice; send a
    // page_view only on subsequent client-side route changes.
    if (firstLoad.current) {
      firstLoad.current = false;
      return;
    }
    if (typeof window.gtag !== 'function') return;
    // Send only non-personal navigation data. Never include inquiry form fields.
    window.gtag('event', 'page_view', {
      page_path: pathname + search,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname, search]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AnalyticsPageView />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
      <FloatingWhatsApp />
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')).render(<App />);
