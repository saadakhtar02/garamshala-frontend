import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Coffee, ShoppingCart, User, History } from 'lucide-react';

function CustomerNavbar() {
  const navigate = useNavigate();
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      const count = cart.reduce((total, item) => total + item.quantity, 0);
      setCartItemCount(count);
    };

    updateCartCount();

    window.addEventListener('storage', updateCartCount);
    
    const interval = setInterval(updateCartCount, 500);

    return () => {
      window.removeEventListener('storage', updateCartCount);
      clearInterval(interval);
    };
  }, []);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b border-[#E8DCC4]">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Coffee className="w-8 h-8 text-[#6B4423]" />
            <h1 className="text-3xl font-bold text-[#3D2817]">GaramShala</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate('/orders')}
              className="flex items-center space-x-2 text-[#6B4423] hover:text-[#3D2817] transition"
            >
              <History className="w-5 h-5" />
              <span className="hidden sm:inline">Orders</span>
            </button>
            
            <button
              onClick={() => navigate('/profile')}
              className="flex items-center space-x-2 text-[#6B4423] hover:text-[#3D2817] transition"
            >
              <User className="w-5 h-5" />
              <span className="hidden sm:inline">Profile</span>
            </button>
            
            <button
              onClick={() => navigate('/cart')}
              className="relative flex items-center space-x-2 bg-[#6B4423] text-white px-4 py-2 rounded-lg hover:bg-[#3D2817] transition"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="hidden sm:inline">Cart</span>
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#3D2817] text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default CustomerNavbar;