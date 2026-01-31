import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const OrderModal = ({ isOpen, onClose, order }) => {
  if (!order) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-espresso bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-cream rounded-2xl p-6 max-w-lg w-full max-h-[80vh] overflow-y-auto shadow-italian"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-serif-italian font-bold text-espresso">
                Order Details
              </h2>
              <button
                onClick={onClose}
                className="text-espresso hover:text-terracotta text-2xl"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              <div className="bg-espresso bg-opacity-5 rounded-xl p-4">
                <p className="text-sm font-sans-italian text-espresso text-opacity-70">
                  Order ID
                </p>
                <p className="text-lg font-serif-italian font-bold text-espresso">
                  {order.id}
                </p>
              </div>

              <div className="bg-espresso bg-opacity-5 rounded-xl p-4">
                <p className="text-sm font-sans-italian text-espresso text-opacity-70 mb-3">
                  Items
                </p>
                <div className="space-y-3">
                  {order.items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-3">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div>
                          <p className="font-sans-italian font-semibold text-espresso">
                            {item.name}
                          </p>
                          <p className="text-sm text-espresso text-opacity-70">
                            x{item.quantity}
                          </p>
                        </div>
                      </div>
                      <p className="font-sans-italian font-semibold text-espresso">
                        ₹{item.price * item.quantity}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-terracotta bg-opacity-10 rounded-xl p-4">
                  <p className="text-sm font-sans-italian text-espresso text-opacity-70">
                    Total Amount
                  </p>
                  <p className="text-2xl font-serif-italian font-bold text-terracotta">
                    ₹{order.total}
                  </p>
                </div>
                <div className="bg-olive bg-opacity-10 rounded-xl p-4">
                  <p className="text-sm font-sans-italian text-espresso text-opacity-70">
                    XP Earned
                  </p>
                  <p className="text-2xl font-serif-italian font-bold text-olive flex items-center">
                    <span className="mr-2">⭐</span>
                    {order.xpEarned}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-espresso bg-opacity-5 rounded-xl p-4">
                  <p className="text-sm font-sans-italian text-espresso text-opacity-70">
                    Payment Method
                  </p>
                  <p className="font-sans-italian font-semibold text-espresso">
                    {order.paymentMethod}
                  </p>
                </div>
                <div className="bg-espresso bg-opacity-5 rounded-xl p-4">
                  <p className="text-sm font-sans-italian text-espresso text-opacity-70">
                    Date
                  </p>
                  <p className="font-sans-italian font-semibold text-espresso">
                    {new Date(order.date).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div className="bg-olive text-cream rounded-xl p-4 text-center">
                <p className="font-sans-italian">
                  Status:{' '}
                  <span className="font-bold">{order.status}</span>
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OrderModal;