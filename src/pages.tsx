import React, { useState } from 'react';
import { ArrowRight, Star, ChevronLeft, ChevronRight, Grid, Monitor, Shirt, Home, Sparkles, Watch, Filter, Send, Users, CreditCard, ShoppingBag, TrendingUp, LayoutDashboard, Mail, Phone, MapPin, Instagram, Twitter, Facebook } from 'lucide-react';
import { ProductCard } from './components/ProductCard';
import { ReviewCard } from './components/ReviewCard';
import { PRODUCTS, REVIEWS, CATEGORIES, FAKE_USERS, FAKE_STATS } from './constants';
import { motion } from 'motion/react';

export const HomePage: React.FC<{ onShopClick: () => void; onAddToCart: () => void }> = ({ onShopClick, onAddToCart }) => {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="px-6 py-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl bg-slate-900 aspect-[21/9] flex items-center">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/40 to-transparent z-10"></div>
              <img 
                alt="Hero background" 
                className="h-full w-full object-cover opacity-80" 
                src="https://picsum.photos/seed/store-hero/1920/1080"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="relative z-20 px-12 md:px-20 max-w-2xl">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-block px-3 py-1 mb-6 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-widest"
              >
                Summer Collection 2024
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tight mb-6"
              >
                Quality Products at <span className="text-primary">Affordable</span> Prices
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-slate-300 mb-8 max-w-lg leading-relaxed"
              >
                Welcome to Ream's Store. Discover curated items designed for your modern lifestyle without breaking the bank.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <button onClick={onShopClick} className="btn-primary">Shop Collection</button>
                <button className="btn-secondary">Learn More</button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-6 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">Featured Products</h2>
              <p className="mt-2 text-slate-500">Handpicked essentials for your everyday life.</p>
            </div>
            <button onClick={onShopClick} className="group flex items-center gap-2 text-sm font-bold text-primary">
              View All <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.slice(0, 4).map(product => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">What Our Customers Say</h2>
            <div className="mt-4 flex justify-center gap-1 text-primary">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map(review => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};


export const ProductsPage: React.FC<{ onAddToCart: () => void }> = ({ onAddToCart }) => {
  const [loadingPage, setLoadingPage] = useState<number | null>(null);

  const handlePageClick = (page: number) => {
    setLoadingPage(page);
    setTimeout(() => setLoadingPage(null), 800);
  };

  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'grid_view': return <Grid size={18} />;
      case 'devices': return <Monitor size={18} />;
      case 'apparel': return <Shirt size={18} />;
      case 'home': return <Home size={18} />;
      case 'auto_fix_high': return <Sparkles size={18} />;
      case 'watch': return <Watch size={18} />;
      default: return <Grid size={18} />;
    }
  };

  return (
    <main className="mx-auto max-w-7xl px-6 py-8">
      {/* Breadcrumbs */}
      <nav className="mb-8 flex items-center gap-2 text-sm font-medium text-slate-500">
        <a href="#" className="hover:text-primary transition-colors">Home</a>
        <ChevronRight size={14} />
        <span className="text-slate-900">All Products</span>
      </nav>

      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-64 flex-shrink-0">
          <div className="sticky top-24 space-y-8">
            {/* Categories */}
            <div>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-400">Categories</h3>
              <div className="space-y-1">
                {CATEGORIES.map(cat => (
                  <button 
                    key={cat.id}
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${cat.id === 'all' ? 'bg-primary/10 font-bold text-primary' : 'font-medium text-slate-600 hover:bg-slate-100'}`}
                  >
                    {getIcon(cat.icon)} {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-400">Price Range</h3>
              <div className="px-2">
                <input className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-primary" type="range" />
                <div className="mt-4 flex items-center justify-between text-sm font-semibold text-slate-700">
                  <span>$0</span>
                  <span>$1,000+</span>
                </div>
              </div>
            </div>

            {/* Ratings */}
            <div>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-400">Minimum Rating</h3>
              <div className="space-y-2">
                {[4, 3].map(rating => (
                  <label key={rating} className="flex items-center gap-2 cursor-pointer group">
                    <input className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary" type="checkbox" />
                    <div className="flex items-center text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill={i < rating ? "currentColor" : "none"} />
                      ))}
                      <span className="ml-1 text-sm font-medium text-slate-600">& up</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <button className="w-full rounded-xl bg-primary py-3 text-sm font-bold text-white shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
              <Filter size={16} className="inline mr-2" />
              Apply Filters
            </button>
          </div>
        </aside>

        {/* Product Grid Area */}
        <section className="flex-1">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-3xl font-black tracking-tight text-slate-900">All Products</h1>
              <p className="text-slate-500">Showing 1-12 of 48 quality products</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-slate-500">Sort by:</span>
              <select className="rounded-lg border-none bg-white px-4 py-2 text-sm font-semibold shadow-sm focus:ring-2 focus:ring-primary">
                <option>Newest Arrivals</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Best Rating</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {PRODUCTS.map(product => (
              <ProductCard key={product.id} product={product} variant="compact" onAddToCart={onAddToCart} />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex items-center justify-center gap-2">
            <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm text-slate-600 hover:text-primary transition-colors">
              <ChevronLeft size={20} />
            </button>
            {[1, 2, 3].map(num => (
              <button 
                key={num}
                onClick={() => handlePageClick(num)}
                className={`flex h-10 w-10 items-center justify-center rounded-lg transition-all ${loadingPage === num ? 'bg-primary/20 animate-pulse' : num === 1 ? 'bg-primary font-bold text-white shadow-lg shadow-primary/20' : 'bg-white shadow-sm text-slate-600 hover:text-primary'}`}
              >
                {loadingPage === num ? <div className="h-4 w-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></div> : num}
              </button>
            ))}
            <span className="px-2 text-slate-400">...</span>
            <button 
              onClick={() => handlePageClick(8)}
              className={`flex h-10 w-10 items-center justify-center rounded-lg transition-all ${loadingPage === 8 ? 'bg-primary/20 animate-pulse' : 'bg-white shadow-sm text-slate-600 hover:text-primary'}`}
            >
              {loadingPage === 8 ? <div className="h-4 w-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></div> : 8}
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm text-slate-600 hover:text-primary transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};


export const AboutPage: React.FC = () => (
  <main className="mx-auto max-w-7xl px-6 py-20">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
      <div className="relative">
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
        <img 
          src="/R1.png" 
          alt="About Me" 
          className="relative z-10 rounded-3xl shadow-2xl w-full aspect-[4/5] object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <div>
        <h1 className="text-5xl font-black mb-6 tracking-tight">About <span className="text-primary">Ream's Store</span></h1>
        <p className="text-xl text-slate-600 mb-6 leading-relaxed">
          Hi, I'm the founder of Ream's Store. We started with a simple mission: to bring high-quality, minimalist design to your everyday life.
        </p>
        <p className="text-lg text-slate-500 mb-8 leading-relaxed">
          Every product in our collection is hand-selected for its craftsmanship and timeless appeal. We believe that the items you surround yourself with should be both beautiful and functional.
        </p>
        <div className="flex gap-4">
          <div className="text-center p-4 rounded-2xl bg-slate-50 border border-slate-100 flex-1">
            <div className="text-2xl font-black text-primary">10k+</div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Happy Users</div>
          </div>
          <div className="text-center p-4 rounded-2xl bg-slate-50 border border-slate-100 flex-1">
            <div className="text-2xl font-black text-primary">500+</div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Products</div>
          </div>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="p-8 rounded-2xl bg-white shadow-sm border border-slate-100">
        <div className="text-primary mb-4 flex justify-center"><Sparkles size={32} /></div>
        <h3 className="font-bold mb-2 text-center">Quality First</h3>
        <p className="text-sm text-slate-500 text-center">Every item is handpicked and tested for durability.</p>
      </div>
      <div className="p-8 rounded-2xl bg-white shadow-sm border border-slate-100">
        <div className="text-primary mb-4 flex justify-center"><Watch size={32} /></div>
        <h3 className="font-bold mb-2 text-center">Timeless Design</h3>
        <p className="text-sm text-slate-500 text-center">Minimalist aesthetics that never go out of style.</p>
      </div>
      <div className="p-8 rounded-2xl bg-white shadow-sm border border-slate-100">
        <div className="text-primary mb-4 flex justify-center"><Home size={32} /></div>
        <h3 className="font-bold mb-2 text-center">Modern Living</h3>
        <p className="text-sm text-slate-500 text-center">Curated for the contemporary home and lifestyle.</p>
      </div>
    </div>
  </main>
);

export const ContactPage: React.FC = () => (
  <main className="mx-auto max-w-7xl px-6 py-20">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      {/* Contact Information */}
      <div>
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="inline-block px-3 py-1 mb-6 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest"
        >
          Contact Us
        </motion.span>
        <h1 className="text-5xl font-black mb-6 tracking-tight">Let's <span className="text-primary">Connect</span></h1>
        <p className="text-xl text-slate-600 mb-12 leading-relaxed">
          Have a question about our products or an order? Our team is here to help you find exactly what you need.
        </p>

        <div className="space-y-8">
          <div className="flex items-start gap-6">
            <div className="h-12 w-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-primary flex-shrink-0">
              <Mail size={24} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-1">Email Us</h3>
              <p className="text-slate-500">support@reamstore.com</p>
              <p className="text-slate-500">hello@reamstore.com</p>
            </div>
          </div>

          <div className="flex items-start gap-6">
            <div className="h-12 w-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-primary flex-shrink-0">
              <Phone size={24} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-1">Call Us</h3>
              <p className="text-slate-500">+1 (555) 000-REAMS</p>
              <p className="text-slate-500">Mon - Fri, 9am - 6pm EST</p>
            </div>
          </div>

          <div className="flex items-start gap-6">
            <div className="h-12 w-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-primary flex-shrink-0">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-1">Visit Us</h3>
              <p className="text-slate-500">123 Minimalist Way, Design District</p>
              <p className="text-slate-500">New York, NY 10001</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-12 border-t border-slate-100">
          <h3 className="font-bold text-slate-900 mb-4">Follow Our Journey</h3>
          <div className="flex gap-4">
            {[Instagram, Twitter, Facebook].map((Icon, i) => (
              <button key={i} className="h-10 w-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/20 transition-all">
                <Icon size={20} />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl shadow-slate-200/50 border border-slate-100"
      >
        <h2 className="text-2xl font-bold text-slate-900 mb-8">Send a Message</h2>
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Full Name</label>
              <input 
                className="w-full rounded-xl border-slate-200 bg-slate-50/50 px-4 py-3 text-sm focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all" 
                type="text" 
                placeholder="John Doe" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Email Address</label>
              <input 
                className="w-full rounded-xl border-slate-200 bg-slate-50/50 px-4 py-3 text-sm focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all" 
                type="email" 
                placeholder="john@example.com" 
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Subject</label>
            <select className="w-full rounded-xl border-slate-200 bg-slate-50/50 px-4 py-3 text-sm focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all">
              <option>General Inquiry</option>
              <option>Order Support</option>
              <option>Product Question</option>
              <option>Partnership</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Your Message</label>
            <textarea 
              className="w-full rounded-xl border-slate-200 bg-slate-50/50 px-4 py-3 text-sm focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all h-32" 
              placeholder="Tell us how we can help..."
            ></textarea>
          </div>
          <button className="w-full btn-primary flex items-center justify-center gap-2 py-4 shadow-lg shadow-primary/20">
            <Send size={18} /> Send Message
          </button>
        </form>
      </motion.div>
    </div>
  </main>
);

export const CartPage: React.FC = () => (
  <main className="mx-auto max-w-7xl px-6 py-20 text-center">
    <div className="flex flex-col items-center">
      <div className="h-20 w-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
        <Watch size={40} />
      </div>
      <h1 className="text-3xl font-black mb-4">Your Cart is Empty</h1>
      <p className="text-slate-600 mb-8">Looks like you haven't added anything to your cart yet.</p>
      <button className="btn-primary">Start Shopping</button>
    </div>
  </main>
);

export const ProfilePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'users'>('overview');

  const getStatIcon = (icon: string) => {
    switch(icon) {
      case 'payments': return <CreditCard size={20} />;
      case 'group': return <Users size={20} />;
      case 'shopping_cart': return <ShoppingBag size={20} />;
      case 'trending_up': return <TrendingUp size={20} />;
      default: return <TrendingUp size={20} />;
    }
  };

  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <aside className="w-full lg:w-64 space-y-2">
          <div className="mb-6 px-4">
            <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Admin Panel</h2>
          </div>
          <button 
            onClick={() => setActiveTab('overview')}
            className={`flex w-full items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === 'overview' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-slate-600 hover:bg-slate-100'}`}
          >
            <LayoutDashboard size={18} /> Dashboard
          </button>
          <button 
            onClick={() => setActiveTab('users')}
            className={`flex w-full items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === 'users' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-slate-600 hover:bg-slate-100'}`}
          >
            <Users size={18} /> Users List
          </button>
          <div className="pt-8 mt-8 border-t border-slate-100 px-4">
            <button className="text-sm font-bold text-red-500 hover:text-red-600 transition-colors">Sign Out</button>
          </div>
        </aside>

        {/* Content Area */}
        <div className="flex-1">
          {activeTab === 'overview' ? (
            <div className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                {FAKE_STATS.map(stat => (
                  <div key={stat.label} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                        {getStatIcon(stat.icon)}
                      </div>
                      <span className="text-xs font-bold text-emerald-500 bg-emerald-50 px-2 py-1 rounded-lg">+12%</span>
                    </div>
                    <div className="text-2xl font-black text-slate-900">{stat.value}</div>
                    <div className="text-sm font-bold text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                  <h3 className="font-bold text-slate-900">Recent Activity</h3>
                  <button className="text-xs font-bold text-primary">View All</button>
                </div>
                <div className="p-6 space-y-6">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                        <ShoppingBag size={18} />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-bold text-slate-900">New order placed #ORD-72{i}</div>
                        <div className="text-xs text-slate-400">2 minutes ago</div>
                      </div>
                      <div className="text-sm font-bold text-slate-900">$124.00</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                <h3 className="font-bold text-slate-900">Users List</h3>
                <button className="btn-primary text-xs py-2 px-4">Add User</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-slate-50 text-xs font-bold text-slate-400 uppercase tracking-widest">
                      <th className="px-6 py-4">User</th>
                      <th className="px-6 py-4">Role</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {FAKE_USERS.map(user => (
                      <tr key={user.id} className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                              {user.name.charAt(0)}
                            </div>
                            <div>
                              <div className="text-sm font-bold text-slate-900">{user.name}</div>
                              <div className="text-xs text-slate-400">{user.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`text-xs font-bold px-2 py-1 rounded-lg ${user.role === 'Admin' ? 'bg-purple-50 text-purple-600' : 'bg-blue-50 text-blue-600'}`}>
                            {user.role}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`flex items-center gap-1.5 text-xs font-bold ${user.status === 'Active' ? 'text-emerald-500' : 'text-slate-400'}`}>
                            <div className={`h-1.5 w-1.5 rounded-full ${user.status === 'Active' ? 'bg-emerald-500' : 'bg-slate-400'}`}></div>
                            {user.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <button className="text-xs font-bold text-primary hover:underline">Edit</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};
