import React from 'react';
import { Home, Crown, Rocket, Search } from 'lucide-react';
import { PageView } from '../types';

interface NavbarProps {
  setPage: (page: PageView) => void;
  currentPage: PageView;
}

export const Navbar: React.FC<NavbarProps> = ({ setPage, currentPage }) => {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'apps', icon: Crown, label: 'Apps' },
    { id: 'sosmed', icon: Rocket, label: 'Sosmed' },
    { id: 'products', icon: Search, label: 'Cari' },
  ];

  return (
    <>
      {/* Desktop Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-xl border-b border-gray-200 transition-all duration-300">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setPage('home')}>
             <div className="relative transform group-hover:scale-105 transition-transform">
                <div className="absolute inset-0 bg-primary rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <img 
                    src="https://iili.io/fR1nzml.jpg" 
                    alt="Logo" 
                    className="w-10 h-10 rounded-full border-2 border-white shadow-lg object-cover relative z-10" 
                />
             </div>
            <div>
              <h1 className="font-black text-xl leading-none tracking-tight text-txtPrimary">JAWIR <span className="text-primary">STORE</span></h1>
              <span className="text-[10px] font-bold text-txtSecondary tracking-[0.2em] uppercase block mt-1">Marketplace V2.3</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => setPage(item.id as PageView)}
                className={`relative px-5 py-2.5 rounded-xl text-sm font-bold transition-all border-b-4 active:border-b-0 active:translate-y-1 ${
                    currentPage === item.id 
                    ? 'bg-primary border-primaryDark text-white shadow-lg shadow-primary/30' 
                    : 'bg-white border-gray-200 text-txtSecondary hover:text-txtPrimary hover:border-gray-300'
                }`}
              >
                 <span className="flex items-center gap-2">
                    <item.icon size={16} className={currentPage === item.id ? 'animate-bounce' : ''} />
                    {item.label}
                 </span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
             <button className="bg-txtPrimary text-white px-5 py-2.5 rounded-xl text-xs font-bold border-b-4 border-gray-900 active:border-b-0 active:translate-y-1 hover:shadow-xl transition-all hidden md:block">
                Hubungi Admin
             </button>
          </div>
        </div>
      </header>

      {/* Mobile Floating Dock */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm">
        <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-2 flex justify-between items-center shadow-2xl shadow-black/10 border border-white/50 ring-1 ring-black/5">
           {navItems.map((item) => (
             <button
               key={item.id}
               onClick={() => setPage(item.id as PageView)}
               className={`flex flex-col items-center justify-center w-14 h-14 rounded-xl transition-all duration-300 ${
                 currentPage === item.id 
                 ? 'bg-primary text-white -translate-y-4 shadow-xl shadow-primary/30 scale-110' 
                 : 'text-gray-400 hover:text-gray-800'
               }`}
             >
               <item.icon size={20} className={currentPage === item.id ? 'animate-bounce' : ''} />
               <span className={`text-[9px] mt-1 font-bold ${currentPage === item.id ? 'block' : 'hidden'}`}>{item.label}</span>
             </button>
           ))}
        </div>
      </div>
    </>
  );
};