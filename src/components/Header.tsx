import React from 'react';
import { ShoppingBag, Search, ShoppingCart, User, Menu } from 'lucide-react';
import { Page } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  currentPage: Page;
  onPageChange: (page: Page) => void;
  cartCount: number;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onPageChange, cartCount }) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-12">
          <button 
            onClick={() => onPageChange('home')}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white">
              <ShoppingBag size={20} />
            </div>
            <span className="text-xl font-extrabold tracking-tight text-slate-900">Ream's Store</span>
          </button>
          
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => onPageChange('home')}
              className={`text-sm font-semibold transition-colors ${currentPage === 'home' ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}
            >
              Home
            </button>
            <button 
              onClick={() => onPageChange('products')}
              className={`text-sm font-semibold transition-colors ${currentPage === 'products' ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}
            >
              Products
            </button>
            <button 
              onClick={() => onPageChange('about')}
              className={`text-sm font-semibold transition-colors ${currentPage === 'about' ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}
            >
              About
            </button>
            <button 
              onClick={() => onPageChange('contact')}
              className={`text-sm font-semibold transition-colors ${currentPage === 'contact' ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}
            >
              Contact
            </button>
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-end gap-6">
          <div className="relative hidden lg:block w-full max-w-sm">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
              <Search size={18} />
            </span>
            <input 
              className="w-full rounded-full border-none bg-primary/5 py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/20" 
              placeholder="Search curated products..." 
              type="text"
            />
          </div>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={() => onPageChange('cart')}
              className={`relative flex h-10 w-10 items-center justify-center rounded-full transition-colors ${currentPage === 'cart' ? 'bg-primary/10 text-primary' : 'hover:bg-primary/10 text-slate-700'}`}
            >
              <ShoppingCart size={20} />
              <AnimatePresence>
                {cartCount > 0 && (
                  <motion.span 
                    key={cartCount}
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
            <button 
              onClick={() => onPageChange('profile')}
              className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors ${currentPage === 'profile' ? 'bg-primary/10 text-primary' : 'hover:bg-primary/10 text-slate-700'}`}
            >
              <User size={20} />
            </button>
            <button className="md:hidden flex h-10 w-10 items-center justify-center rounded-full hover:bg-primary/10 transition-colors">
              <Menu size={20} className="text-slate-700" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
