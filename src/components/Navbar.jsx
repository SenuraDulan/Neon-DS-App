import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Works', href: '#works' },
    { name: 'Services', href: '#services' },
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 50,
      padding: '20px 0',
      transition: 'all 0.3s ease',
      background: scrolled ? 'var(--glass-bg)' : 'transparent',
      backdropFilter: scrolled ? 'var(--glass-blur)' : 'none',
      borderBottom: scrolled ? '1px solid var(--glass-border)' : '1px solid transparent'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '15px', textDecoration: 'none' }}>
          <img src="/logo.png" alt="Neon Logo" style={{ height: '50px', transform: 'translateY(-4px)', filter: 'drop-shadow(0 0 8px rgba(255,42,77,0.5))' }} />
          <span style={{
            fontSize: '1.5rem',
            fontWeight: 900,
            fontFamily: "'Outfit', sans-serif",
            color: '#fff',
            textShadow: '0 0 10px var(--neon-red), 0 0 20px rgba(255,42,77,0.5)'
          }}>
            Neon<span style={{ color: 'var(--neon-blue)', textShadow: '0 0 10px var(--neon-blue)' }}>DS</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }} className="desktop-nav">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} style={{
              color: 'var(--text-primary)',
              textDecoration: 'none',
              fontSize: '0.95rem',
              fontWeight: 500,
              transition: 'color 0.3s ease',
            }}
            onMouseOver={(e) => e.target.style.color = 'var(--neon-blue)'}
            onMouseOut={(e) => e.target.style.color = 'var(--text-primary)'}>
              {link.name}
            </a>
          ))}
          <a href="#contact" className="btn-primary red">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
