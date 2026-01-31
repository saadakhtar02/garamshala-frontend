import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, ShoppingCart, User, History } from 'lucide-react';

function CustomerNavbar() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b border-[#E8DCC4]">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Coffee className="w-8 h-8 text-[#6B4423]" />
            <h1 className="text-3xl font-bold text-[#3D2817]">GaramShala</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link
              to="/menu/orders"
              className="flex items-center space-x-2 text-[#6B4423] hover:text-[#3D2817] transition"
            >
              <History className="w-5 h-5" />
              <span className="hidden sm:inline">Orders</span>
            </Link>
            
            <Link
              to="/menu/cart"
              className="flex items-center space-x-2 text-[#6B4423] hover:text-[#3D2817] transition"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="hidden sm:inline">Cart</span>
            </Link>
            
            <Link
              to="/menu/profile"
             className="relative flex items-center space-x-2 bg-[#6B4423] text-white px-4 py-2 rounded-lg hover:bg-[#3D2817] transition"
            >
              <User className="w-5 h-5" />
              <span className="hidden sm:inline">Profile</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default CustomerNavbar;