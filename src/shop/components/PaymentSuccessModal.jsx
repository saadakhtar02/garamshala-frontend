import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const PaymentSuccessModal = ({ isOpen, onClose, order }) => {
  const navigate = useNavigate();

  if (!order) return null;

  const handleViewOrders = () => {
    onClose();
    navigate('/orders');
  };

  const handleBackToMenu = () => {
    onClose();
    navigate('/menu');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-espresso bg-opacity-50 flex items-center justify-center z-50 p-4"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            className="bg-cream rounded-2xl p-8 max-w-md w-full shadow-italian text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="w-24 h-24 bg-olive rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-5xl text-cream"
              >
                ✓
              </motion.span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl font-serif-italian font-bold text-espresso mb-2"
            >
              Grazie!
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-espresso text-opacity-70 font-sans-italian mb-6"
            >
              Your order has been placed successfully
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-espresso bg-opacity-5 rounded-xl p-4 mb-6"
            >
              <p className="text-sm font-sans-italian text-espresso text-opacity-70">
                Order ID
              </p>
              <p className="text-lg font-serif-italian font-bold text-espresso">
                {order.id}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 gap-4 mb-6"
            >
              <div className="bg-terracotta bg-opacity-10 rounded-xl p-4">
                <p className="text-sm font-sans-italian text-espresso text-opacity-70">
                  Amount Paid
                </p>
                <p className="text-xl font-serif-italian font-bold text-terracotta">
                  ₹{order.total}
                </p>
              </div>
              <div className="bg-olive bg-opacity-10 rounded-xl p-4">
                <p className="text-sm font-sans-italian text-espresso text-opacity-70">
                  XP Earned
                </p>
                <p className="text-xl font-serif-italian font-bold text-olive flex items-center justify-center">
                  <span className="mr-1">⭐</span>
                  +{order.xpEarned}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-olive text-cream rounded-xl p-4 mb-6"
            >
              <p className="font-sans-italian text-sm">
                🎉 XP has been credited to your profile!
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <button
                onClick={handleViewOrders}
                className="flex-1 bg-espresso text-cream py-3 rounded-lg font-sans-italian hover:bg-terracotta transition-colors"
              >
                View Orders
              </button>
              <button
                onClick={handleBackToMenu}
                className="flex-1 bg-terracotta text-cream py-3 rounded-lg font-sans-italian hover:bg-espresso transition-colors"
              >
                Back to Menu
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PaymentSuccessModal;