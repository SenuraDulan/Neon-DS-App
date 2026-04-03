import React from 'react';

const Hero = () => {
  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      paddingTop: '80px', // offset for navbar
      overflow: 'hidden',
      position: 'relative',
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url("/hero-img.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>

        {/* Floating 3D text */}
        <div className="floating" style={{ marginBottom: '10px' }}>
          <h1 style={{
            fontSize: 'clamp(4rem, 10vw, 8rem)',
            fontWeight: 900,
            lineHeight: 1,
            letterSpacing: '-0.02em',
            margin: 0,
            color: '#ffffff',
            textShadow: `
              0 0 10px rgba(255, 42, 77, 0.4),
              0 20px 40px rgba(0, 0, 0, 0.5)
            `,
            transformStyle: 'preserve-3d',
            perspective: '1000px'
          }}>
            <span style={{ color: 'var(--neon-red)', textShadow: '0 0 15px var(--neon-red)' }}>Neon</span>
            <span style={{ color: 'var(--neon-blue)', textShadow: '0 0 15px var(--neon-blue)' }}>DS</span>
          </h1>

          {/* Subtle reflection underneath */}
          <div style={{
            height: '20px',
            width: '60%',
            margin: '0 auto',
            background: 'radial-gradient(ellipse at center, rgba(255,42,77,0.15) 0%, transparent 70%)',
            filter: 'blur(10px)',
            borderRadius: '50%'
          }}></div>
        </div>

        <p className="floating-delay" style={{
          fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
          color: 'var(--text-secondary)',
          maxWidth: '600px',
          margin: '0 auto 40px',
          fontWeight: 300,
          letterSpacing: '0.05em'
        }}>
          Elegant Neon Lighting for Modern Brands and Bold Spaces.
        </p>

        <div className="hero-buttons-container floating" style={{ animationDelay: '0.5s' }}>
          <a href="#works" className="btn-primary" style={{ padding: '16px 36px', fontSize: '1.1rem' }}>Explore Works</a>
          <a href="#contact" className="btn-primary red" style={{ padding: '16px 36px', fontSize: '1.1rem' }}>Get Custom Light</a>
        </div>
      </div>

      {/* Background glow effects */}
      <div style={{
        position: 'absolute',
        top: '30%',
        left: '20%',
        width: '400px',
        height: '400px',
        background: 'var(--neon-red)',
        filter: 'blur(150px)',
        opacity: 0.15,
        borderRadius: '50%',
        zIndex: 0
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '20%',
        right: '20%',
        width: '300px',
        height: '300px',
        background: 'var(--neon-blue)',
        filter: 'blur(150px)',
        opacity: 0.15,
        borderRadius: '50%',
        zIndex: 0
      }}></div>
    </section>
  );
};

export default Hero;
