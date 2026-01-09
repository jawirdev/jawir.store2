import React from 'react';
import { Product } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  const lowestPrice = Math.min(...product.packages.map(p => p.priceVal));
  const priceDisplay = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(lowestPrice);
  
  const isBestSeller = product.id === 'capcut';
  const isNew = product.cat.includes('new');
  const isPopular = product.cat.includes('populer') && !isBestSeller;

  return (
    <div 
      onClick={onClick}
      className="card-3d group relative overflow-hidden cursor-pointer bg-white"
    >
      {/* 3D Labels */}
      <div className="absolute top-3 right-3 z-20 flex flex-col items-end gap-2">
        {isBestSeller && (
            <div className="bg-primary text-white text-[10px] font-black px-3 py-1 rounded-lg shadow-lg shadow-primary/30 border-b-2 border-primaryDark animate-float">
            BEST SELLER
            </div>
        )}
        {isNew && !isBestSeller && (
            <div className="bg-blue-500 text-white text-[10px] font-black px-3 py-1 rounded-lg shadow-lg shadow-blue-500/30 border-b-2 border-blue-700">
            NEW
            </div>
        )}
        {isPopular && !isNew && (
            <div className="bg-yellow-400 text-black text-[10px] font-black px-3 py-1 rounded-lg shadow-lg shadow-yellow-400/30 border-b-2 border-yellow-600">
            POPULER
            </div>
        )}
      </div>

      {/* Image Section */}
      <div className="relative h-40 w-full overflow-hidden p-6 bg-gray-50 flex items-center justify-center group-hover:bg-primary/5 transition-colors">
        <div className="w-24 h-24 rounded-2xl shadow-2xl transform rotate-3 group-hover:rotate-0 group-hover:scale-110 transition-all duration-500 bg-white p-1 border border-gray-100">
            <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover rounded-xl" 
            />
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        <div className="flex justify-between items-end">
            <div>
                <h3 className="text-base font-black text-txtPrimary leading-tight group-hover:text-primary transition-colors line-clamp-1">{product.name}</h3>
                <p className="text-[10px] text-txtSecondary font-bold uppercase tracking-wider mt-1">Mulai dari</p>
                <div className="text-primary font-black text-lg">{priceDisplay}</div>
            </div>
            <div className="w-8 h-8 rounded-lg bg-gray-100 border-b-2 border-gray-300 flex items-center justify-center text-txtPrimary group-hover:bg-primary group-hover:text-white group-hover:border-primaryDark transition-all group-active:border-b-0 group-active:translate-y-0.5">
                <ArrowUpRight size={16} />
            </div>
        </div>
      </div>
    </div>
  );
};