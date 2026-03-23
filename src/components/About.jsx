import React from 'react';
import { Sparkles, Layers, Zap } from 'lucide-react';

const About = () => {
  const cards = [
    {
      icon: <Sparkles size={32} color="var(--neon-blue)" />,
      title: 'Antigravity Design',
      desc: 'Our pieces appear to float effortlessly, using state of the art mounting tech to create true depth.',
    },
    {
      icon: <Zap size={32} color="var(--neon-red)" />,
      title: 'Bold Illumination',
      desc: 'Sourced from the finest LED neon flex for colors that pierce through the darkest rooms.',
    },
    {
      icon: <Layers size={32} color="#fff" />,
      title: 'Luxurious Finish',
      desc: 'Mounted on frosted acrylic glass that softly bends and blurs light for a premium look.',
    }
  ];

  return (
    <>
      {/* NeonDS Standard Section (Cards) */}
      <section id="features" style={{ zIndex: 10, paddingBottom: '60px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '20px' }}>
              The <span className="text-neon-blue">Neon</span><span className="text-neon-red">DS</span> Standard
            </h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem' }}>
              We do more than make signs. We craft luminous sculptures that define modern spaces.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            {cards.map((card, idx) => (
              <div key={idx} className="glass" style={{
                padding: '40px',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer'
              }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-20px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-blue)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                <div style={{
                  width: '64px', height: '64px',
                  background: 'rgba(255,255,255,0.05)',
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '24px'
                }}>
                  {card.icon}
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>{card.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expanded About Us Section */}
      <section id="about" style={{
        background: 'linear-gradient(180deg, rgba(10,10,12,0) 0%, rgba(20,20,25,0.6) 100%)',
        paddingTop: '60px',
        paddingBottom: '100px',
        borderTop: '1px solid rgba(255,255,255,0.02)'
      }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px', alignItems: 'center' }}>

            {/* Workshop Photo */}
            <div style={{ flex: '1 1 100px', position: 'relative' }}>
              <div style={{
                position: 'absolute', top: '-1px', left: '-1px', right: '-1px', bottom: '2px',
                border: '2px solid var(--neon-red)', borderRadius: '24px', zIndex: 0
              }}></div>
              <img
                src="/workshop.jpg"
                alt="NeonDS Workshop"
                style={{
                  width: '100%',
                  height: '450px',
                  objectFit: 'cover',
                  borderRadius: '24px',
                  position: 'relative',
                  zIndex: 1,
                  boxShadow: 'var(--shadow-red)'
                }}
              />
            </div>

            {/* Company Details */}
            <div style={{ flex: '1 1 400px' }}>
              <h2 style={{ fontSize: '3.5rem', marginBottom: '30px', lineHeight: 1.1 }}>
                Crafting <span className="text-neon-blue">Light</span> Since 2018
              </h2>

              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: 1.8 }}>
                Founded by visionary designer Dhammika Ranathunga, NeonDS started as a small underground studio in Moratuwa, Sri Lanka. Dissatisfied with standard commercial lighting, Dhammika set out to create glass signs that felt like weightless, glowing sculptures rather than mere fixtures.
              </p>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '40px', lineHeight: 1.8 }}>
                Today, our workshop houses elite glassbenders and LED technicians who assemble each piece by hand. We've transformed spaces ranging from cyber-cafes and ultra-modern corporate lobbies to private luxury lounges worldwide.
              </p>

              {/* Stats / Info Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px' }}>
                <div>
                  <h4 style={{ color: 'var(--neon-blue)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '5px' }}>Started</h4>
                  <p style={{ fontSize: '1.3rem', fontWeight: 600 }}>2018</p>
                </div>
                <div>
                  <h4 style={{ color: 'var(--neon-red)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '5px' }}>Founder & Lead Designer</h4>
                  <p style={{ fontSize: '1.3rem', fontWeight: 600 }}>Dhammika Ranathunga</p>
                </div>
                <div>
                  <h4 style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '5px' }}>Installations</h4>
                  <p style={{ fontSize: '1.3rem', fontWeight: 600 }}>1,000+ Island wide</p>
                </div>
                <div>
                  <h4 style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '5px' }}>Workshop Location</h4>
                  <p style={{ fontSize: '1.3rem', fontWeight: 600 }}>Moratuwa, Sri Lanka</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default About;
