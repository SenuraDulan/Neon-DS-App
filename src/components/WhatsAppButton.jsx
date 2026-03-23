import React from 'react';

const WhatsAppButton = () => {
  const handleClick = async () => {
    try {
      // Log interaction to backend
      await fetch('http://localhost:3001/api/whatsapp', { method: 'POST' });
    } catch (err) {
      console.error('Error logging WhatsApp click:', err);
    }
    window.open('https://wa.me/+94750875441?text=Hello%20NeonDS,%20I%20am%20interested%20in%20a%20custom%20neon%20sign.', '_blank');
  };

  return (
    <button onClick={handleClick} style={buttonStyle} className="glass floating" aria-label="Contact on WhatsApp">
      <img src="/whatsapp-icon.png" alt="whatsapp" style={{ width: '50%', height: '50%', objectFit: 'cover' }} />
    </button>
  );
};

const buttonStyle = {
  position: 'fixed',
  bottom: '40px',
  right: '40px',
  width: '64px',
  height: '64px',
  borderRadius: '50%',
  border: '1px solid rgba(255,255,255,0.1)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
  cursor: 'pointer',
  background: 'rgba(20,20,25,0.8)',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 0 20px rgba(37, 211, 102, 0.4)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
};

export default WhatsAppButton;
