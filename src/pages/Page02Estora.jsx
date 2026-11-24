import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Heart, Sun, Moon, Plus, Trash2, Star, Sparkles } from 'lucide-react';

const PRODUCTS = [
  { id: 1, name: 'AeroPulse Headphones', category: 'Audio', price: 249, rating: 4.9, badge: 'Best Seller' },
  { id: 2, name: 'ChronoMinimal Watch', category: 'Accessories', price: 189, rating: 4.8, badge: 'New' },
  { id: 3, name: 'Veloce Knit Sneakers', category: 'Footwear', price: 135, rating: 4.7, badge: 'Trending' },
  { id: 4, name: 'Lumina Desk Lamp', category: 'Home', price: 95, rating: 4.9, badge: 'Editor Pick' },
  { id: 5, name: 'Nomad Tech Backpack', category: 'Accessories', price: 160, rating: 4.8, badge: 'Waterproof' },
  { id: 6, name: 'SonicMini Speaker', category: 'Audio', price: 119, rating: 4.6, badge: 'Compact' },
];

export default function Page02Estora() {
  const [dark, setDark] = useState(false);
  const [category, setCategory] = useState('All');
  const [likes, setLikes] = useState([1, 4]);
  const [cart, setCart] = useState([{ id: 1, name: 'AeroPulse Headphones', price: 249, qty: 1 }]);
  const [cartOpen, setCartOpen] = useState(false);

  const toggleLike = (id) => {
    setLikes(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const addToCart = (prod) => {
    setCart(prev => {
      const found = prev.find(i => i.id === prod.id);
      if (found) return prev.map(i => i.id === prod.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { id: prod.id, name: prod.name, price: prod.price, qty: 1 }];
    });
  };

  const removeFromCart = (id) => setCart(prev => prev.filter(i => i.id !== id));

  const visible = category === 'All' ? PRODUCTS : PRODUCTS.filter(p => p.category === category);
  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className={`min-h-screen font-poppins transition-colors duration-300 ${dark ? 'bg-slate-950 text-white' : 'bg-[#F3F4F6] text-slate-900'}`}>
      {/* Top Navbar */}
      <header className={`sticky top-0 z-30 border-b backdrop-blur-md ${dark ? 'bg-slate-900/90 border-slate-800' : 'bg-white/90 border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-[#4F46E5] text-white flex items-center justify-center font-bold">E</div>
            <span className="text-xl font-bold tracking-tight">ESTORA</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setDark(!dark)}
              className={`p-2.5 rounded-xl border transition ${dark ? 'bg-slate-800 border-slate-700 text-amber-400' : 'bg-slate-100 border-slate-200 text-slate-700'}`}
              aria-label="Toggle theme"
            >
              {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <div className={`px-3 py-2 rounded-xl border flex items-center gap-1.5 text-sm font-medium ${dark ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'}`}>
              <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
              <span>{likes.length}</span>
            </div>

            <button
              onClick={() => setCartOpen(!cartOpen)}
              className="px-4 py-2 rounded-xl bg-[#4F46E5] hover:bg-indigo-700 text-white text-sm font-semibold flex items-center gap-2 transition shadow-md shadow-indigo-500/20"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Cart ({cart.reduce((s, i) => s + i.qty, 0)})</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="max-w-7xl mx-auto px-6 pt-10">
        <div className="rounded-3xl bg-gradient-to-r from-[#4F46E5] to-indigo-700 text-white p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F59E0B] text-slate-950 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> Season Drop
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold mt-3 leading-tight">
              Curated Gear for Modern Living.
            </h1>
            <p className="mt-2 text-indigo-100 max-w-lg text-sm sm:text-base">
              Minimalist hardware, everyday carry, and studio essentials with express worldwide shipping.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 text-center shrink-0">
            <p className="text-xs uppercase tracking-widest text-indigo-200">Promo Code</p>
            <p className="text-2xl font-bold text-[#F59E0B] mt-1">ESTORA20</p>
            <p className="text-xs text-indigo-100 mt-1">20% off first order</p>
          </div>
        </div>
      </section>

      {/* Filter & Catalog */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <h2 className="text-2xl font-bold">Featured Catalog</h2>
          <div className="flex flex-wrap gap-2">
            {['All', 'Audio', 'Accessories', 'Footwear', 'Home'].map(cat => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition ${
                  category === cat
                    ? 'bg-[#4F46E5] text-white shadow-md'
                    : dark ? 'bg-slate-900 text-slate-300 hover:bg-slate-800' : 'bg-white text-slate-700 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map(prod => {
            const isLiked = likes.includes(prod.id);
            return (
              <motion.div
                key={prod.id}
                layout
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className={`rounded-2xl p-5 border shadow-sm transition-shadow hover:shadow-xl ${
                  dark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200/80'
                }`}
              >
                <div className={`h-48 rounded-xl mb-4 p-4 flex flex-col justify-between relative ${dark ? 'bg-slate-800' : 'bg-[#F3F4F6]'}`}>
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-lg bg-[#F59E0B] text-slate-950 text-xs font-bold">
                      {prod.badge}
                    </span>
                    <button
                      onClick={() => toggleLike(prod.id)}
                      className={`p-2 rounded-full transition ${dark ? 'bg-slate-900/80' : 'bg-white shadow-sm'}`}
                    >
                      <Heart className={`w-4 h-4 ${isLiked ? 'fill-rose-500 text-rose-500' : 'text-slate-400'}`} />
                    </button>
                  </div>
                  <div className="mx-auto w-20 h-20 rounded-2xl bg-[#4F46E5]/15 border border-[#4F46E5]/30 flex items-center justify-center text-[#4F46E5] font-bold text-xl">
                    {prod.category[0]}
                  </div>
                  <span className="text-xs text-slate-400">{prod.category}</span>
                </div>

                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">{prod.name}</h3>
                    <div className="flex items-center gap-1 text-xs text-[#F59E0B] mt-1">
                      <Star className="w-3.5 h-3.5 fill-[#F59E0B]" />
                      <span className="font-semibold">{prod.rating}</span>
                    </div>
                  </div>
                  <span className="text-xl font-bold text-[#4F46E5]">${prod.price}</span>
                </div>

                <button
                  onClick={() => addToCart(prod)}
                  className="mt-5 w-full py-2.5 rounded-xl bg-[#4F46E5] hover:bg-indigo-700 text-white text-sm font-semibold flex items-center justify-center gap-2 transition"
                >
                  <Plus className="w-4 h-4" /> Add to Cart
                </button>
              </motion.div>
            );
          })}
        </div>
      </main>

      {/* Cart Drawer */}
      <AnimatePresence>
        {cartOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-xs flex justify-end"
            onClick={() => setCartOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25 }}
              onClick={e => e.stopPropagation()}
              className={`w-full max-w-md h-full p-6 flex flex-col justify-between shadow-2xl ${dark ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}`}
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
                  <h3 className="text-xl font-bold">Shopping Bag</h3>
                  <button onClick={() => setCartOpen(false)} className="text-sm text-slate-400 hover:text-indigo-500">Close</button>
                </div>

                <div className="mt-6 space-y-4">
                  {cart.length === 0 && <p className="text-sm text-slate-400">Your cart is empty.</p>}
                  {cart.map(item => (
                    <div key={item.id} className="flex items-center justify-between p-3 rounded-xl bg-slate-500/10">
                      <div>
                        <p className="font-semibold text-sm">{item.name}</p>
                        <p className="text-xs text-slate-400">${item.price} × {item.qty}</p>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="p-2 text-rose-500 hover:bg-rose-500/10 rounded-lg">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                <div className="flex justify-between font-bold text-lg mb-4">
                  <span>Total</span>
                  <span className="text-[#4F46E5]">${total}</span>
                </div>
                <button
                  onClick={() => setCartOpen(false)}
                  className="w-full py-3 rounded-xl bg-[#F59E0B] text-slate-950 font-bold hover:brightness-105 transition"
                >
                  Checkout Now
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
