import React, { useEffect, useState } from 'react';

export const SplashScreen: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const timer1 = setTimeout(() => setOpacity(0), 1800);
    const timer2 = setTimeout(() => setVisible(false), 2600);
    return () => { clearTimeout(timer1); clearTimeout(timer2); };
  }, []);

  if (!visible) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black transition-opacity duration-700"
      style={{ opacity }}
    >
      <div className="relative">
        <div className="absolute inset-0 rounded-full border-4 border-primary/30 animate-ping"></div>
        <img 
          src="https://iili.io/fR1nzml.jpg" 
          alt="Jawir Store" 
          className="w-24 h-24 rounded-full border-2 border-primary object-cover shadow-[0_0_30px_rgba(239,68,68,0.5)] z-10 relative"
        />
      </div>
      <h1 className="mt-6 text-2xl font-black tracking-[0.2em] text-white">JAWIR <span className="text-primary">STORE</span></h1>
      <p className="text-xs text-slate-500 mt-2 tracking-widest uppercase">Marketplace V2.3</p>
    </div>
  );
};