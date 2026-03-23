import React from 'react';

const Marquee = () => {
  return (
    <div style={{
      padding: '40px 0',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      borderBottom: '1px solid rgba(255,255,255,0.05)',
      background: 'rgba(10, 10, 12, 0.5)',
      position: 'relative',
      zIndex: 10
    }}>
      <div className="marquee-container">
        {/* Wrap in multiple blocks for seamless loop */}
        <div className="marquee-content" style={{ display: 'flex' }}>
          {[...Array(8)].map((_, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', margin: '0 40px' }}>
              <span className="outfit" style={{
                fontSize: '3rem',
                fontWeight: 900,
                color: 'transparent',
                WebkitTextStroke: '1px rgba(255,255,255,0.2)',
                marginRight: '40px',
                whiteSpace: 'nowrap',
                letterSpacing: '0.05em'
              }}>BUILT TO GLOW</span>
              <span style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: i % 2 === 0 ? 'var(--neon-red)' : 'var(--neon-blue)',
                boxShadow: i % 2 === 0 ? 'var(--shadow-red)' : 'var(--shadow-blue)'
              }}></span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
