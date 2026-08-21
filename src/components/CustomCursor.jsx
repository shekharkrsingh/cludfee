import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    // Only run on desktop where hover is supported
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const onMouseMove = (e) => {
      // Use requestAnimationFrame for smoother performance, or just state updates
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      // Check if we are hovering over something interactive
      const isInteractive = e.target.tagName.toLowerCase() === 'a' || 
                            e.target.tagName.toLowerCase() === 'button' ||
                            e.target.closest('a') ||
                            e.target.closest('button') ||
                            e.target.classList.contains('interactive');
      setHovering(isInteractive);
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Don't render cursor on mobile
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <div 
      className={`custom-cursor ${hovering ? 'hovering' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`
      }}
    />
  );
};

export default CustomCursor;
