import React from 'react';
import { ShoppingCart, Star, Heart } from 'lucide-react';
import { Product } from '../types';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: Product;
  variant?: 'default' | 'compact';
  onAddToCart?: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, variant = 'default', onAddToCart }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group cursor-pointer"
    >
      <div className={`relative mb-4 overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800 ${variant === 'default' ? 'aspect-[4/5]' : 'aspect-square'}`}>
        <img 
          alt={product.name} 
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
          src={product.image}
          referrerPolicy="no-referrer"
        />
        
        {product.tag && (
          <span className={`absolute top-4 left-4 rounded-full px-3 py-1 text-[10px] font-bold text-white uppercase tracking-wider ${product.tag === 'New' ? 'bg-primary' : 'bg-emerald-500'}`}>
            {product.tag}
          </span>
        )}

        <button className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-slate-400 shadow-sm transition-colors hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
          <Heart size={18} />
        </button>

        <div className="absolute bottom-4 right-4 translate-y-12 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart?.();
            }}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-900 shadow-xl hover:bg-primary hover:text-white transition-colors"
          >
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
      
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">{product.category}</span>
            {variant === 'compact' && (
              <div className="flex items-center text-amber-400">
                <Star size={12} fill="currentColor" />
                <span className="text-xs font-bold text-slate-500 ml-1">{product.rating}</span>
              </div>
            )}
          </div>
          <h3 className="text-base font-bold text-slate-900">{product.name}</h3>
          <p className="text-xs text-slate-500 font-medium">{product.status || 'Limited Edition'}</p>
          {variant === 'compact' && (
             <p className="mt-2 line-clamp-2 text-sm text-slate-500 leading-relaxed">{product.description}</p>
          )}
        </div>
        <div className="flex flex-col items-end">
          <span className="text-base font-bold text-primary">${product.price.toFixed(2)}</span>
          {variant === 'compact' && (
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onAddToCart?.();
              }}
              className="mt-4 flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-4 text-sm font-bold text-white transition-all hover:bg-primary/90 active:scale-95"
            >
              <ShoppingCart size={18} />
              Add
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};
