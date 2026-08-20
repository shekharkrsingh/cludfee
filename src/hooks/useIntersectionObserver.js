import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useIntersectionObserver = () => {
  const location = useLocation();

  useEffect(() => {
    // Add a tiny delay to ensure the DOM has fully rendered
    const timeoutId = setTimeout(() => {
      const observerCallback = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            // Unobserve once revealed to keep it active
            observer.unobserve(entry.target);
          }
        });
      };

      const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px', // Trigger when element is 50px above viewport bottom
        threshold: 0.05,
      };

      const observer = new IntersectionObserver(observerCallback, observerOptions);

      const targetElements = document.querySelectorAll(
        '.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-stagger'
      );
      
      targetElements.forEach((el) => {
        observer.observe(el);
      });

      return () => {
        observer.disconnect();
      };
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [location.pathname]); // Re-run when route changes
};
