import { useEffect, useRef, useState } from 'react';

export const LazyIframe = ({ children }) => {
  const iframeRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsLoaded(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '200px',
      }
    );

    if (iframeRef.current) {
      observer.observe(iframeRef.current);
    }

    return () => {
      if (iframeRef.current) {
        observer.unobserve(iframeRef.current);
      }
    };
  }, []);

  return (
    <div style={{ height: '100%', width: '100%' }} ref={iframeRef}>
      {isLoaded ? (
        children
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
