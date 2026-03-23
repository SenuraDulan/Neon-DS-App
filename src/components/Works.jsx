import React from 'react';


const worksData = [
  { id: 1, image: '/works-1.jpg' },
  { id: 2, image: '/works-2.jpg' },
  { id: 3, image: '/works-3.jpg' },
  { id: 4, image: '/works-4.jpg' },
  { id: 5, image: '/works-8.jpg' },
  { id: 6, image: '/works-6.jpg' },
  { id: 7, image: '/works-7.jpg' },
  { id: 8, image: '/works-5.jpg' },
  { id: 9, image: '/works-9.jpg' },
  { id: 10, image: '/works-10.jpg' },
  { id: 11, image: '/works-11.jpg' },
  { id: 12, image: '/works-12.jpg' },
  { id: 13, image: '/works-13.jpg' },
  { id: 14, image: '/works-14.jpg' },
  { id: 15, image: '/works-15.jpg' },
  { id: 16, image: '/works-16.jpg' },
  { id: 17, image: '/works-17.jpg' }
];

const Works = () => {
  // Divide into 3 roughly equal parts
  const cut1 = Math.floor(worksData.length / 3);
  const cut2 = cut1 * 2;
  const row1 = worksData.slice(0, cut1);
  const row2 = worksData.slice(cut1, cut2);
  const row3 = worksData.slice(cut2);

  const CarouselRow = ({ items, reverse }) => {
    // Duplicate enough times to seamlessly scroll
    const loopedItems = [...items, ...items, ...items, ...items];

    return (
      <div className="marquee-container" style={{ marginBottom: '10px', width: '100vw', overflow: 'hidden', padding: '5px 0' }}>
        <div className="marquee-content" style={{
          animationDuration: '60s',
          animationDirection: reverse ? 'reverse' : 'normal',
          animationPlayState: 'running'
        }}>
          {loopedItems.map((item, idx) => (
            <div key={idx}
              className="glass"
              style={{
                flex: '0 0 auto',
                width: '320px',
                height: '240px',
                margin: '0 5px',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.4)',
                overflow: 'hidden',
                position: 'relative'
              }}>
              <img src={item.image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Neon Work" />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <section id="works" style={{ position: 'relative', overflowX: 'hidden' }}>
        <div className="container">
          <h2 style={{ fontSize: '3rem', marginBottom: '60px', textAlign: 'center' }}>
            Our <span className="text-neon-blue">Works</span>
          </h2>
        </div>

        {/* Fullwidth Carousel Rows */}
        <CarouselRow items={row1} />
        <CarouselRow items={row2} reverse />
        <CarouselRow items={row3} />
      </section>

    </>
  );
};

export default Works;
