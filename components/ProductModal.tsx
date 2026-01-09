import React from 'react';
import { X, CheckCircle2, ShieldCheck, Zap, Package } from 'lucide-react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  const handleOrder = (pkgName: string) => {
    const text = `Halo Admin Jawir Store, saya mau order *${pkgName}* (${product.name}). Apakah stok ready?`;
    window.open(`https://wa.me/6282131032770?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-end md:items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity" onClick={onClose} />
      
      <div className="relative bg-white w-full md:w-[600px] rounded-3xl h-[85vh] md:h-[80vh] flex flex-col shadow-2xl animate-pop overflow-hidden border border-gray-200">
        
        {/* Header Image */}
        <div className="relative h-44 shrink-0 overflow-hidden bg-gray-100">
           <img src={product.image} className="w-full h-full object-cover blur-md opacity-60 scale-110" />
           <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" />
           
           <button onClick={onClose} className="absolute top-4 right-4 bg-white/50 hover:bg-white text-black p-2 rounded-full backdrop-blur-md transition-all z-20 shadow-sm border border-white/50">
             <X size={20} />
           </button>
           
           <div className="absolute bottom-0 left-6 transform translate-y-1/4 flex items-end gap-5 z-10">
              <div className="p-1.5 bg-white rounded-2xl shadow-xl border border-gray-100 transform rotate-3">
                  <img src={product.image} className="w-24 h-24 rounded-xl object-cover" />
              </div>
              <div className="pb-4">
                  <h2 className="text-3xl font-black text-txtPrimary drop-shadow-sm">{product.name}</h2>
              </div>
           </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto pt-10 px-6 pb-8 custom-scrollbar bg-white">
          <div className="flex gap-2 mb-6 ml-32">
             {product.cat.map(c => (
                 <span key={c} className="text-[10px] font-bold uppercase px-3 py-1 bg-gray-100 text-txtSecondary rounded-full border border-gray-200 shadow-sm">{c}</span>
             ))}
          </div>

          <h3 className="text-xs font-black text-txtSecondary uppercase tracking-widest mb-4 border-b border-gray-100 pb-2">Pilih Paket Layanan</h3>
          
          <div className="grid gap-4 pb-20">
            {product.packages.map((pkg, idx) => (
              <div key={idx} className="group relative bg-white border-2 border-gray-100 border-b-4 border-b-gray-200 rounded-2xl p-5 transition-all hover:border-primary hover:border-b-primaryDark hover:-translate-y-1">
                {pkg.tag && (
                    <div className={`absolute -top-3 right-4 text-[10px] font-black px-3 py-1 rounded-full shadow-lg border-b-2 transform -rotate-2 ${
                        pkg.tag === 'best' ? 'bg-yellow-400 border-yellow-600 text-black' : 
                        pkg.tag === 'rec' ? 'bg-blue-500 border-blue-700 text-white' : 
                        'bg-green-500 border-green-700 text-white'
                    }`}>
                        {pkg.tagName || pkg.tag.toUpperCase()}
                    </div>
                )}
                
                <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-txtPrimary text-lg">{pkg.name}</h4>
                </div>

                <div className="flex justify-between items-end mb-4 border-b border-dashed border-gray-200 pb-4">
                     <div>
                        {pkg.saveText && (
                            <div className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-md mb-1 inline-block">
                                {pkg.saveText}
                            </div>
                        )}
                        <div className="text-primary font-black text-2xl">{pkg.price}</div>
                     </div>
                     <button 
                        onClick={() => handleOrder(pkg.name)}
                        className="bg-txtPrimary text-white hover:bg-primary px-5 py-2.5 rounded-xl font-bold text-sm transition-all border-b-4 border-black hover:border-primaryDark active:border-b-0 active:translate-y-1 shadow-lg"
                    >
                        ORDER
                    </button>
                </div>

                <div className="space-y-2">
                    {pkg.desc.map((d, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs font-medium text-txtSecondary">
                            <CheckCircle2 size={14} className="text-green-500 mt-0.5 shrink-0" />
                            <span>{d}</span>
                        </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};