import React, { useEffect, useRef } from 'react';

interface EnergyBeamProps {
  projectId?: string;
  className?: string;
}

declare global {
  interface Window {
    UnicornStudio?: any;
  }
}

const EnergyBeam: React.FC<EnergyBeamProps> = ({ projectId = 'hRFfUymDGOHwtFe7evR2', className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const initializedRef = useRef(false);

  useEffect(() => {
    if (initializedRef.current) return;

    const initUnicorn = () => {
      if (!window.UnicornStudio || !containerRef.current) return;

      window.UnicornStudio.init();
      initializedRef.current = true;
    };

    if (window.UnicornStudio) {
      initUnicorn();
    } else {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.5.2/dist/unicornStudio.umd.js';
      script.async = true;

      script.onload = initUnicorn;
      document.head.appendChild(script);
    }

    return () => {
      // 🚨 IMPORTANT: stop animation when leaving page
      if (window.UnicornStudio?.destroy) {
        window.UnicornStudio.destroy();
        initializedRef.current = false;
      }
    };
  }, [projectId]);

  return (
    <div className={`relative h-screen w-full overflow-hidden ${className}`}>
      <div ref={containerRef} data-us-project={projectId} className='absolute inset-0' />
    </div>
  );
};

export default EnergyBeam;
