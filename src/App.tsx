import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage, ProductsPage, AboutPage, ContactPage, CartPage, ProfilePage } from './pages';
import { Page } from './types';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [cartCount, setCartCount] = useState(0);
  const [showToast, setShowToast] = useState(false);

  const addToCart = () => {
    setCartCount(prev => prev + 1);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage onShopClick={() => setCurrentPage('products')} onAddToCart={addToCart} />;
      case 'products': return <ProductsPage onAddToCart={addToCart} />;
      case 'about': return <AboutPage />;
      case 'contact': return <ContactPage />;
      case 'cart': return <CartPage />;
      case 'profile': return <ProfilePage />;
      default: return <HomePage onShopClick={() => setCurrentPage('products')} onAddToCart={addToCart} />;
    }
  };

  return (
    <div className="relative flex min-h-screen flex-col font-sans">
      <Header 
        currentPage={currentPage} 
        onPageChange={setCurrentPage} 
        cartCount={cartCount}
      />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="flex-1"
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {showToast && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-8 right-8 z-[100] bg-slate-900 text-white px-6 py-3 rounded-xl shadow-2xl flex items-center gap-3"
          >
            <div className="bg-primary rounded-full p-1"><motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 0.3 }}><ShoppingBag size={14} /></motion.div></div>
            <span className="text-sm font-bold">Added to cart!</span>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
