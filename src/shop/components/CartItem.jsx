import React from 'react';
import { motion } from 'framer-motion';

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="bg-cream rounded-xl p-4 shadow-italian border border-espresso border-opacity-10 flex flex-col sm:flex-row items-center gap-4"
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-20 h-20 rounded-lg object-cover"
      />

      <div className="flex-1 text-center sm:text-left">
        <h3 className="text-lg font-serif-italian font-bold text-espresso">
          {item.name}
        </h3>
        <p className="text-terracotta font-sans-italian">₹{item.price} each</p>
        <p className="text-olive text-sm font-sans-italian flex items-center justify-center sm:justify-start space-x-1">
          <span>⭐</span>
          <span>{item.xp} XP per item</span>
        </p>
      </div>

      <div className="flex items-center space-x-3">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => onUpdateQuantity(item.id, -1)}
          className="w-10 h-10 rounded-full bg-espresso text-cream flex items-center justify-center text-xl font-bold hover:bg-terracotta transition-colors"
        >
          -
        </motion.button>
        <span className="text-xl font-serif-italian font-bold text-espresso w-8 text-center">
          {item.quantity}
        </span>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => onUpdateQuantity(item.id, 1)}
          className="w-10 h-10 rounded-full bg-espresso text-cream flex items-center justify-center text-xl font-bold hover:bg-terracotta transition-colors"
        >
          +
        </motion.button>
      </div>

      <div className="text-center sm:text-right">
        <p className="text-xl font-serif-italian font-bold text-espresso">
          ₹{item.price * item.quantity}
        </p>
        <p className="text-olive text-sm font-sans-italian">
          +{item.xp * item.quantity} XP
        </p>
      </div>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => onRemove(item.id)}
        className="text-terracotta hover:text-espresso transition-colors text-2xl"
      >
        ✕
      </motion.button>
    </motion.div>
  );
};

export default CartItem;