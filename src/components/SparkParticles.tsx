import React, { useEffect } from 'react';

// Assuming particles.js exports a global variable when imported
import 'particles.js';

const SparkParticles = () => {
  useEffect(() => {
    // Access particlesJS directly if it's attached to the window object
    if ((window as any).particlesJS) {
      (window as any).particlesJS('spark-particles', {
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: '#FFD700',
            
          },
          size: {
            value: 3, // Smaller particle size
            random: false,
            anim: {
              enable: false,
              speed: 90,
              size_min: 0.5,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
          }
        },
        
      });
    }
  }, []);

  return <div id="spark-particles" style={{ position: 'absolute', width: '100%', height: '100%' }} />;
};

export default SparkParticles;
