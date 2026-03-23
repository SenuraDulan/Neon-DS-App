import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Custom Neon Sign Boards',
      desc: 'Designing personalized neon signs for shops, cafes, events, and branding.'
    },
    {
      title: 'LED Neon Lighting Solutions',
      desc: 'Modern, energy efficient alternatives to traditional neon lights.'
    },
    {
      title: 'Commercial Signage Services',
      desc: 'Creating eye catching signage for businesses, malls, and offices.'
    },
    {
      title: 'Indoor & Outdoor Installations',
      desc: 'Durable designs suitable for both interior décor and exterior advertising.'
    },
    {
      title: 'Logo to Neon Conversion',
      desc: 'Transforming company logos into attractive neon displays.'
    },
    {
      title: 'Event & Wedding Neon Décor',
      desc: 'Custom neon lights for weddings, parties, and special events.'
    },
    {
      title: 'Repair & Maintenance',
      desc: 'Fixing damaged neon tubes, transformers, and wiring.'
    },
    {
      title: 'Architectural Lighting Design',
      desc: 'Enhancing buildings with creative neon lighting concepts.'
    },
    {
      title: 'Neon Art & Wall Decor',
      desc: 'Artistic neon pieces for homes, studios, and creative spaces.'
    },
    {
      title: 'Consultation & Prototyping',
      desc: 'Helping clients visualize designs through mockups before production.'
    }
  ];

  return (
    <section id="services">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '20px' }}>Our <span className="text-neon-blue">Services</span></h2>
          <p style={{ color: 'var(--text-secondary)' }}>Everything you need to illuminate your space.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
          {services.map((svc, idx) => (
            <div key={idx} className="glass" style={{
              padding: '30px',
              borderRadius: '16px',
              border: '1px solid var(--glass-border)',
              display: 'flex',
              flexDirection: 'column',
              gap: '15px',
              transition: 'transform 0.3s ease, border-color 0.3s ease',
              cursor: 'default'
            }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.borderColor = idx % 2 === 0 ? 'var(--neon-blue)' : 'var(--neon-red)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--glass-border)';
              }}>
              <div style={{
                color: idx % 2 === 0 ? 'var(--neon-blue)' : 'var(--neon-red)',
                fontSize: '2rem',
                fontWeight: '900',
                opacity: 0.5,
                fontFamily: "'Outfit', sans-serif"
              }}>
                {(idx + 1).toString().padStart(2, '0')}
              </div>
              <h3 style={{ fontSize: '1.2rem', color: '#fff', fontWeight: 600 }}>{svc.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>{svc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
