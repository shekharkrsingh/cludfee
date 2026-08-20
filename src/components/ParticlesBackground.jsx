import React, { useCallback, useEffect, useState } from 'react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
  const [theme, setTheme] = useState('dark');

  // Detect theme for particles color
  useEffect(() => {
      const observer = new MutationObserver(() => {
          const isLight = document.querySelector('.App.light-theme');
          setTheme(isLight ? 'light' : 'dark');
      });
      observer.observe(document.body, { childList: true, subtree: true, attributes: true });
      
      const isLight = document.querySelector('.App.light-theme');
      if (isLight) setTheme('light');
      
      return () => observer.disconnect();
  }, []);

  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "grab",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            grab: {
              distance: 150,
              links: {
                opacity: 0.5,
              },
            },
          },
        },
        particles: {
          color: {
            value: theme === 'light' ? "#7a1f2b" : "#b08d57",
          },
          links: {
            color: theme === 'light' ? "#7a1f2b" : "#b08d57",
            distance: 140,
            enable: true,
            opacity: 0.35,
            width: 1.5,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 0.8,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 40,
          },
          opacity: {
            value: 0.45,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'auto'
      }}
    />
  );
};

export default ParticlesBackground;
