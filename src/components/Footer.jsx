import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.05)',
      padding: '40px 0 20px',
      background: 'rgba(10,10,12,0.8)',
      position: 'relative',
      zIndex: 10
    }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <a href="#home" style={{
          fontSize: '2rem',
          fontWeight: 900,
          fontFamily: "'Outfit', sans-serif",
          textDecoration: 'none',
          color: '#fff',
          marginBottom: '20px'
        }}>
          Neon<span style={{ color: 'var(--neon-red)' }}>DS</span>
        </a>

        <div style={{ display: 'flex', gap: '30px', marginBottom: '40px' }}>
          {[
            { name: 'Facebook', url: 'https://facebook.com/your-neon-page' },
            { name: 'Instagram', url: 'https://instagram.com/your-neon-page' },
            { name: 'WhatsApp', url: '#' }
          ].map((social) => (
            <a key={social.name}
              href={social.url}
              target={social.name !== 'WhatsApp' ? "_blank" : undefined}
              rel="noopener noreferrer"
              onClick={async (e) => {
                if (social.name === 'WhatsApp') {
                  e.preventDefault();
                  try {
                    await fetch('http://localhost:3001/api/whatsapp/click', { method: 'POST' });
                  } catch (err) {
                    console.error('Failed to log click');
                  }
                  window.open('https://wa.me/+94771338509?text=I%20am%20interested%20in%20a%20NeonDS%20sign!', '_blank');
                }
              }}
              style={{
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}
              onMouseOver={(e) => e.target.style.color = '#fff'}
              onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}>
              {social.name}
            </a>
          ))}
        </div>

        <div style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.9rem', textAlign: 'center' }}>
          &copy; {new Date().getFullYear()} NeonDS. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
