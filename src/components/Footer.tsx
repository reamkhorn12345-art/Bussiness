import React from 'react';
import { ShoppingBag, Instagram, Twitter, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
                <ShoppingBag size={16} />
              </div>
              <span className="text-lg font-extrabold tracking-tight">Ream's Store</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Providing high-quality essentials for the modern lifestyle at prices that make sense.
            </p>
            <div className="flex gap-4">
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-primary">Shop</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">All Products</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Featured</a></li>
              <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sale</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-primary">Company</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-primary">Newsletter</h4>
            <p className="text-slate-400 text-sm mb-4">Subscribe for early access and exclusive offers.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                className="flex-1 rounded-lg bg-white/5 border-white/10 py-2 px-3 text-sm focus:ring-primary focus:border-primary" 
                placeholder="Your email" 
                type="email"
              />
              <button className="bg-primary px-4 py-2 rounded-lg font-bold text-sm">Join</button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2024 Ream's Store. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Ships from Los Angeles</span>
            <span>Secure Payments via Stripe</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
