import React, { useState, useMemo, useEffect } from 'react';
import { Search, Rocket, Sparkles } from 'lucide-react';
import { SplashScreen } from './components/SplashScreen';
import { Navbar } from './components/Navbar';
import { ProductCard } from './components/ProductCard';
import { ProductModal } from './components/ProductModal';
import { Footer } from './components/Footer';
import { APPS_DATA } from './constants';
import { Product, PageView, FilterType } from './types';

function App() {
  const [page, setPage] = useState<PageView>('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<FilterType>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // SFX Logic
  useEffect(() => {
    const playClick = () => {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.frequency.setValueAtTime(800, audioCtx.currentTime);
      osc.type = 'sine';
      gain.gain.setValueAtTime(0.05, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.1);
    };

    const handleClick = () => playClick();
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  const filteredProducts = useMemo(() => {
    let data = APPS_DATA;
    if (page === 'home' && activeCategory === 'populer') {
       const popIds = ['capcut', 'canva', 'am', 'gpt'];
       data = data.filter(d => popIds.includes(d.id));
    } else if (activeCategory !== 'all') {
       data = data.filter(d => d.cat.includes(activeCategory));
    }
    if (searchQuery) {
      data = data.filter(d => d.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    return data.sort((a, b) => a.name.localeCompare(b.name));
  }, [page, activeCategory, searchQuery]);

  return (
    <div className="min-h-screen pb-24 md:pb-10 pt-24 transition-colors duration-300">
      <SplashScreen />
      <Navbar setPage={setPage} currentPage={page} />

      <main className="container mx-auto px-4 md:px-6">
        
        {/* HERO SECTION 3D */}
        {page === 'home' && (
           <div className="mb-12 animate-pop">
             <div className="relative rounded-[2rem] overflow-hidden bg-gradient-to-r from-[#111] to-[#222] h-[300px] md:h-[350px] flex items-center px-6 md:px-16 shadow-2xl group border-b-8 border-gray-800">
                {/* 3D Background Elements */}
                <div className="absolute right-0 top-0 h-full w-1/2 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent animate-pulse"></div>
                <div className="absolute -right-10 top-10 text-[12rem] font-black text-white/5 rotate-12 select-none z-0 transform transition-transform group-hover:rotate-6 duration-1000">
                    2026
                </div>
                
                <div className="relative z-10 text-white max-w-2xl">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2 mb-6 shadow-lg animate-float">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                        <span className="text-xs font-bold uppercase tracking-widest text-green-300">New Era 2026</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black leading-none mb-4 drop-shadow-2xl">
                        DIGITAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">REVOLUTION</span>
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base font-medium leading-relaxed max-w-md mb-8">
                       Platform top-up aplikasi premium #1 di Indonesia dengan tampilan baru yang lebih fresh, 3D interaktif, dan experience terbaik.
                    </p>
                    <button onClick={() => window.scrollTo({top: 500, behavior: 'smooth'})} className="bg-white text-black px-8 py-3 rounded-xl font-black text-sm border-b-4 border-gray-300 active:border-b-0 active:translate-y-1 hover:bg-gray-100 transition-all">
                        EXPLORE NOW
                    </button>
                </div>
             </div>
           </div>
        )}

        {/* FILTERS & SEARCH */}
        {(page === 'home' || page === 'apps' || page === 'products') && (
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 sticky top-[4.5rem] z-30 py-4 bg-bgMain/90 backdrop-blur-md -mx-4 px-4 md:mx-0 md:px-0">
             <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full md:w-auto pb-2">
                 {[
                     {id: 'all', label: 'Semua'},
                     {id: 'populer', label: '🔥 Populer'},
                     {id: 'new', label: '✨ New'},
                     {id: 'editing', label: '🎬 Editing'},
                     {id: 'movie', label: '🍿 Movie'},
                     {id: 'music', label: '🎵 Music'}
                 ].map(cat => (
                     <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id as FilterType)}
                        className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all border-b-4 active:border-b-0 active:translate-y-1 ${
                            activeCategory === cat.id 
                            ? 'bg-primary border-primaryDark text-white shadow-lg shadow-primary/20' 
                            : 'bg-white border-gray-200 text-txtSecondary hover:text-txtPrimary hover:bg-gray-50'
                        }`}
                     >
                        {cat.label}
                     </button>
                 ))}
             </div>
             
             <div className="relative w-full md:w-72">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <input 
                    type="text" 
                    placeholder="Cari produk..." 
                    className="w-full bg-white border-2 border-gray-200 focus:border-primary rounded-xl pl-10 pr-4 py-3 text-sm font-bold text-txtPrimary outline-none transition-all shadow-sm focus:shadow-xl placeholder:font-normal"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
             </div>
          </div>
        )}

        {/* MAIN CONTENT */}
        {page === 'sosmed' ? (
           <div className="min-h-[50vh] flex flex-col items-center justify-center text-center p-8 border-4 border-dashed border-gray-200 rounded-3xl bg-white animate-pop">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6 animate-float">
                 <Rocket size={48} className="text-primary drop-shadow-md" />
              </div>
              <h2 className="text-3xl font-black text-txtPrimary mb-2">Coming Soon 2026</h2>
              <p className="text-txtSecondary max-w-xs mx-auto font-medium">Fitur Suntik Sosmed sedang disiapkan dengan teknologi API terbaru.</p>
           </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 pb-10">
             {filteredProducts.map((item) => (
               <ProductCard key={item.id} product={item} onClick={() => setSelectedProduct(item)} />
             ))}
             {filteredProducts.length === 0 && (
                 <div className="col-span-full py-20 text-center text-txtSecondary font-bold">
                     Produk tidak ditemukan.
                 </div>
             )}
          </div>
        )}
      </main>

      <Footer />
      {selectedProduct && <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
    </div>
  );
}

export default App;