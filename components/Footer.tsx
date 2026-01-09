import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-white pt-16 pb-32 md:pb-12">
      <div className="container mx-auto overflow-hidden px-4">
        
        {/* Testimonial Marquee 3D */}
        <div className="mb-20">
            <div className="text-center mb-10">
                <h3 className="inline-block font-black text-2xl text-txtPrimary uppercase tracking-widest border-b-4 border-primary pb-2 px-4 transform -skew-x-6">
                    Apa Kata Mereka?
                </h3>
            </div>
            
            <div className="relative w-full mask-gradient py-4">
                <div className="marquee-track">
                    {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
                        <div key={i} className="w-80 bg-white border border-gray-100 border-b-4 border-b-gray-200 rounded-2xl p-5 flex-shrink-0 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                             <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center text-white font-bold shadow-lg">
                                    <i className="fas fa-user"></i>
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm text-txtPrimary">{t.u}</h4>
                                    <span className="text-[10px] text-txtSecondary font-bold bg-gray-100 px-2 py-0.5 rounded-full">{t.d}</span>
                                </div>
                             </div>
                             <div className="text-yellow-400 text-xs mb-3 flex gap-0.5">
                                <i className="fas fa-star drop-shadow-sm"></i><i className="fas fa-star drop-shadow-sm"></i><i className="fas fa-star drop-shadow-sm"></i><i className="fas fa-star drop-shadow-sm"></i><i className="fas fa-star drop-shadow-sm"></i>
                             </div>
                             <p className="text-xs text-gray-600 italic leading-relaxed">"{t.c}"</p>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="text-center mt-10">
                 <a href="https://www.instagram.com/p/DJgmx4oRlNR/?igsh=MTk2eXFheTh6cXc3Nw==" target="_blank" className="inline-block text-xs font-bold text-primary border-2 border-primary border-b-4 px-6 py-3 rounded-xl hover:bg-primary hover:text-white hover:border-primaryDark active:border-b-2 active:translate-y-0.5 transition-all uppercase tracking-wide">
                    Lihat Bukti di Instagram <i className="fas fa-external-link-alt ml-1"></i>
                 </a>
            </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-200 pt-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 bg-gray-50 rounded-3xl p-8 border border-gray-100">
                <div className="flex items-center gap-4">
                     <div className="p-1 bg-white rounded-full shadow-lg border border-gray-100">
                        <img src="https://iili.io/fR1nzml.jpg" className="w-12 h-12 rounded-full" alt="Logo"/>
                     </div>
                     <div className="text-left">
                        <h4 className="font-black text-xl leading-none">JAWIR <span className="text-primary">STORE</span></h4>
                        <span className="text-[10px] text-txtSecondary font-bold uppercase tracking-widest">Est. 2026 Professional Marketplace</span>
                     </div>
                </div>

                <div className="flex gap-4">
                    <SocialBtn href="https://wa.me/6282131032770" icon="fa-whatsapp" color="hover:text-green-500 hover:border-green-500" />
                    <SocialBtn href="https://tiktok.com/@jawirdesign" icon="fa-tiktok" color="hover:text-black hover:border-black" />
                    <SocialBtn href="https://instagram.com/jawirdesigner" icon="fa-instagram" color="hover:text-pink-500 hover:border-pink-500" />
                    <SocialBtn href="https://instagram.com/jawir.store" icon="fa-store" color="hover:text-primary hover:border-primary" />
                </div>
            </div>
            <p className="text-center md:text-right text-[10px] font-bold text-txtSecondary mt-6 uppercase tracking-widest opacity-60">
                © 2026 Jawir Store V2.3. All Rights Reserved.
            </p>
        </div>
      </div>
    </footer>
  );
};

const SocialBtn = ({ href, icon, color }: { href: string; icon: string, color: string }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noreferrer"
    className={`w-12 h-12 rounded-xl bg-white border-2 border-gray-200 border-b-4 flex items-center justify-center text-txtPrimary text-xl transition-all duration-200 active:border-b-2 active:translate-y-0.5 ${color}`}
  >
    <i className={`fab ${icon} ${icon === 'fa-store' ? 'fas' : ''}`}></i>
  </a>
);