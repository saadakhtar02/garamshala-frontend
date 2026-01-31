import React from 'react';
import { motion } from 'framer-motion';

const ProductCard = ({ item, onAddToCart }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-cream rounded-2xl overflow-hidden shadow-italian card-hover border border-espresso border-opacity-10"
    >
      <div className="relative overflow-hidden h-48">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-3 right-3 bg-olive text-cream px-3 py-1 rounded-full text-sm font-sans-italian flex items-center space-x-1">
          <span>⭐</span>
          <span>Earn {item.xp} XP</span>
        </div>
        <div className="absolute top-3 left-3 bg-espresso text-cream px-3 py-1 rounded-full text-sm font-sans-italian">
          {item.category}
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-serif-italian font-bold text-espresso mb-2">
          {item.name}
        </h3>
        <p className="text-espresso text-opacity-70 text-sm font-sans-italian mb-4 line-clamp-2">
          {item.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="text-2xl font-serif-italian font-bold text-terracotta">
            ₹{item.price}
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onAddToCart(item)}
            className="bg-espresso text-cream px-5 py-2 rounded-lg font-sans-italian hover:bg-terracotta transition-colors duration-300 flex items-center space-x-2"
          >
            <span>+</span>
            <span>Add</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;