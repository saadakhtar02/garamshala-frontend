import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Star, Info, X } from 'lucide-react';

function ProductCard({ item, cartQuantity, onAddToCart, onIncrease, onDecrease }) {
  const [showDetails, setShowDetails] = useState(false);
  const isInCart = cartQuantity > 0;

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const popupVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 20,
      transition: { duration: 0.2 }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-50px" }}
        variants={cardVariants}
        className="bg-white rounded-lg shadow-lg overflow-hidden border border-[#E8DCC4]"
      >
        <motion.div
          className="relative h-48 overflow-hidden"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
          <motion.div
            className="absolute top-3 right-3 bg-[#E8DCC4] text-[#3D2817] px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <Star className="w-4 h-4 fill-current" />
            <span>{item.xp} XP</span>
          </motion.div>
        </motion.div>

        <div className="p-4">
          <h3 className="text-xl font-bold text-[#3D2817] mb-2">{item.name}</h3>
          <p className="text-sm text-[#6B4423] mb-2 line-clamp-2">{item.description}</p>

          <button
            onClick={() => setShowDetails(true)}
            className="flex w-full flex-row-reverse items-center text-sm text-[#6B4423] hover:text-[#3D2817] mb-3 transition"
          >
            <span className="underline">More Details</span>
            <Info className="w-4 h-4 mr-1" />
          </button>

          <div className="flex items-center justify-between mb-4">
            <motion.span
              className="text-2xl font-bold text-[#6B4423]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              ₹{item.price}
            </motion.span>
          </div>

          <AnimatePresence mode="wait">
            {isInCart ? (
              <motion.div
                key="quantity"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex items-center justify-between bg-[#E8DCC4] rounded-lg p-2"
              >
                <motion.button
                  onClick={() => onDecrease(item.id)}
                  className="bg-white text-[#6B4423] w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#6B4423] hover:text-white transition"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Minus className="w-4 h-4" />
                </motion.button>
                <motion.span
                  key={cartQuantity}
                  initial={{ scale: 1.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-[#3D2817] font-bold text-lg"
                >
                  {cartQuantity}
                </motion.span>
                <motion.button
                  onClick={() => onIncrease(item.id)}
                  className="bg-white text-[#6B4423] w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#6B4423] hover:text-white transition"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Plus className="w-4 h-4" />
                </motion.button>
              </motion.div>
            ) : (
              <motion.button
                key="addtocart"
                onClick={() => onAddToCart(item.id)}
                className="w-full bg-[#6B4423] text-white py-2 rounded-lg hover:bg-[#3D2817] transition font-semibold"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Add to Cart
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      <AnimatePresence>
        {showDetails && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center p-4"
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              className="absolute inset-0 bg-black/70"
              onClick={() => setShowDetails(false)}
              variants={overlayVariants}
            />

            <motion.div
              className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-hidden"
              variants={popupVariants}
            >
              <motion.button
                onClick={() => setShowDetails(false)}
                className="absolute top-4 right-4 z-10 bg-white/90 text-[#3D2817] w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-[#6B4423] hover:text-white transition"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-5 h-5" />
              </motion.button>

              <motion.div
                className="relative h-56 overflow-hidden"
                initial={{ opacity: 0, scale: 1.2 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <motion.div
                  className="absolute bottom-4 left-4 right-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="inline-block bg-[#E8DCC4] text-[#3D2817] px-3 py-1 rounded-full text-sm font-semibold mb-2">
                    {item.category}
                  </span>
                  <h2 className="text-2xl font-bold text-white">{item.name}</h2>
                </motion.div>
              </motion.div>

              <div className="p-6 max-h-[50vh] overflow-y-auto">
                <motion.div
                  className="flex items-center justify-between mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex items-center space-x-2 bg-[#E8DCC4] px-3 py-2 rounded-full">
                    <Star className="w-5 h-5 text-[#6B4423] fill-current" />
                    <span className="font-semibold text-[#3D2817]">{item.xp} XP</span>
                  </div>
                  <span className="text-3xl font-bold text-[#6B4423]">₹{item.price}</span>
                </motion.div>

                <motion.div
                  className="mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3 className="text-lg font-semibold text-[#3D2817] mb-2">Description</h3>
                  <p className="text-[#6B4423] leading-relaxed">{item.description}</p>
                </motion.div>

                {item.ingredients && (
                  <motion.div
                    className="mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <h3 className="text-lg font-semibold text-[#3D2817] mb-2">Ingredients</h3>
                    <div className="flex flex-wrap gap-2">
                      {item.ingredients.map((ingredient, index) => (
                        <motion.span
                          key={index}
                          className="bg-[#FAF7F2] text-[#6B4423] px-3 py-1 rounded-full text-sm border border-[#E8DCC4]"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + index * 0.05, type: "spring" }}
                          whileHover={{ scale: 1.1 }}
                        >
                          {ingredient}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                )}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <AnimatePresence mode="wait">
                    {isInCart ? (
                      <motion.div
                        key="popup-quantity"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="flex items-center justify-between bg-[#E8DCC4] rounded-lg p-3"
                      >
                        <motion.button
                          onClick={() => onDecrease(item.id)}
                          className="bg-white text-[#6B4423] w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#6B4423] hover:text-white transition"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Minus className="w-5 h-5" />
                        </motion.button>
                        <div className="text-center">
                          <motion.span
                            key={cartQuantity}
                            initial={{ scale: 1.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="text-[#3D2817] font-bold text-xl block"
                          >
                            {cartQuantity}
                          </motion.span>
                          <span className="text-[#6B4423] text-sm">in cart</span>
                        </div>
                        <motion.button
                          onClick={() => onIncrease(item.id)}
                          className="bg-white text-[#6B4423] w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#6B4423] hover:text-white transition"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Plus className="w-5 h-5" />
                        </motion.button>
                      </motion.div>
                    ) : (
                      <motion.button
                        key="popup-addtocart"
                        onClick={() => onAddToCart(item.id)}
                        className="w-full bg-[#6B4423] text-white py-3 rounded-lg hover:bg-[#3D2817] transition font-semibold text-lg"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Add to Cart - ₹{item.price}
                      </motion.button>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ProductCard;