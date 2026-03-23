import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const res = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setStatus('Message Sent!');
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
      } else {
        setStatus('Error sending message.');
      }
    } catch (err) {
      console.error(err);
      setStatus('Server connection failed.');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px', alignItems: 'center' }}>

          {/* Text Left */}
          <div style={{ flex: '1 1 400px' }}>
            <h2 style={{ fontSize: '3.5rem', marginBottom: '20px', lineHeight: 1.1 }}>
              Ready to <span className="text-neon-blue">Shine?</span>
            </h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '40px', maxWidth: '400px' }}>
              Whether it's a glowing logo for your tech startup or a custom art piece for your living room, we bring your vision to light.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <strong style={{ color: '#fff', display: 'block', marginBottom: '5px' }}>Email Us</strong>
                <a href="mailto:neonds.contact@gmail.com" style={{ color: 'var(--neon-blue)', textDecoration: 'none' }}>neonds.contact@gmail.com</a>
              </div>
              <div>
                <strong style={{ color: '#fff', display: 'block', marginBottom: '5px' }}>Visit Workshop</strong>
                <p style={{ color: 'var(--text-secondary)' }}>80/1 1st Ln, Moratuwa,<br />Sri Lanka</p>
              </div>
              <div>
                <strong style={{ color: '#fff', display: 'block', marginBottom: '5px' }}>Call Us</strong>
                <p style={{ color: 'var(--text-secondary)' }}>075 087 5441</p>
              </div>
            </div>
          </div>

          {/* Form Right */}
          <div style={{ flex: '1 1 400px' }}>
            <div className="glass" style={{ padding: '40px', borderRadius: '24px' }}>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', gap: '20px' }}>
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" style={inputStyle} required />
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" style={inputStyle} required />
                </div>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" style={inputStyle} required />
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your project..." rows={4} style={{ ...inputStyle, resize: 'none' }} required />

                {status && <p style={{ color: status.includes('Sent') ? 'var(--neon-blue)' : 'var(--neon-red)' }}>{status}</p>}

                <button type="submit" className="btn-primary red" style={{
                  marginTop: '10px',
                  display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px'
                }}>
                  Send Request <Send size={18} />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>

      {/* Decorative Blur */}
      <div style={{
        position: 'absolute', bottom: '-10%', left: '-10%', width: '400px', height: '400px',
        background: 'var(--neon-blue)', filter: 'blur(150px)', opacity: 0.1, borderRadius: '50%', zIndex: 0
      }}></div>
    </section>
  );
};

const inputStyle = {
  width: '100%',
  padding: '16px 20px',
  background: 'rgba(0,0,0,0.3)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '12px',
  color: '#fff',
  fontFamily: "'Inter', sans-serif",
  fontSize: '1rem',
  outline: 'none',
  transition: 'border-color 0.3s ease, box-shadow 0.3s ease'
};

// Add CSS to head for focus states since inline styles don't support pseudo-classes
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    input:focus, textarea:focus {
      border-color: var(--neon-red) !important;
      box-shadow: 0 0 15px rgba(255,42,77,0.2) !important;
    }
  `;
  document.head.appendChild(style);
}

export default Contact;
