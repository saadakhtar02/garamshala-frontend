import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import GaramShalaWelcome from '../components/GaramShalaWelcome';

function CustomerMenu() {
  const menuItems = [
    {
      id: 1,
      name: 'Espresso',
      category: 'Coffee',
      price: 120,
      xp: 12,
      description: 'A strong and bold coffee made by forcing hot water through finely ground coffee beans. Perfect for coffee lovers who enjoy an intense flavor.',
      ingredients: ['Coffee Beans', 'Hot Water'],
      image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400'
    },
    {
      id: 2,
      name: 'Cappuccino',
      category: 'Coffee',
      price: 150,
      xp: 15,
      description: 'Classic Italian coffee drink with equal parts espresso, steamed milk, and milk foam. Topped with a sprinkle of cocoa powder.',
      ingredients: ['Espresso', 'Steamed Milk', 'Milk Foam', 'Cocoa Powder'],
      image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400'
    },
    {
      id: 3,
      name: 'Latte',
      category: 'Coffee',
      price: 160,
      xp: 16,
      description: 'Smooth and creamy coffee made with espresso and steamed milk. A milder option for those who prefer less intense coffee.',
      ingredients: ['Espresso', 'Steamed Milk', 'Light Foam'],
      image: 'https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=400'
    },
    {
      id: 4,
      name: 'Margherita Pizza',
      category: 'Pizza',
      price: 350,
      xp: 35,
      description: 'Traditional Italian pizza with fresh tomato sauce, mozzarella cheese, and basil leaves on a crispy thin crust. Baked in wood-fired oven.',
      ingredients: ['Pizza Dough', 'Tomato Sauce', 'Mozzarella', 'Fresh Basil', 'Olive Oil'],
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400'
    },
    {
      id: 5,
      name: 'Pepperoni Pizza',
      category: 'Pizza',
      price: 400,
      xp: 40,
      description: 'American favorite topped with spicy pepperoni slices and extra cheese. Crispy edges with a soft, chewy center.',
      ingredients: ['Pizza Dough', 'Tomato Sauce', 'Mozzarella', 'Pepperoni', 'Italian Herbs'],
      image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400'
    },
    {
      id: 6,
      name: 'Pasta Carbonara',
      category: 'Food',
      price: 280,
      xp: 28,
      description: 'Creamy Italian pasta made with eggs, parmesan cheese, crispy bacon, and black pepper. A Roman classic that melts in your mouth.',
      ingredients: ['Spaghetti', 'Eggs', 'Parmesan', 'Bacon', 'Black Pepper', 'Garlic'],
      image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400'
    },
    {
      id: 7,
      name: 'Burger',
      category: 'Food',
      price: 220,
      xp: 22,
      description: 'Juicy beef patty with fresh lettuce, tomatoes, onions, and our special sauce. Served in a toasted brioche bun with crispy fries.',
      ingredients: ['Beef Patty', 'Brioche Bun', 'Lettuce', 'Tomato', 'Onion', 'Special Sauce', 'Cheese'],
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400'
    },
    {
      id: 8,
      name: 'Tiramisu',
      category: 'Dessert',
      price: 180,
      xp: 18,
      description: 'Classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cream. Dusted with premium cocoa powder.',
      ingredients: ['Ladyfingers', 'Mascarpone', 'Espresso', 'Cocoa', 'Eggs', 'Sugar'],
      image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400'
    },
    {
      id: 9,
      name: 'Chocolate Cake',
      category: 'Dessert',
      price: 160,
      xp: 16,
      description: 'Rich and moist chocolate cake with layers of chocolate ganache. Made with premium Belgian chocolate for the ultimate indulgence.',
      ingredients: ['Dark Chocolate', 'Flour', 'Butter', 'Eggs', 'Sugar', 'Cocoa', 'Cream'],
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400'
    },
    {
      id: 10,
      name: 'Croissant',
      category: 'Pastry',
      price: 100,
      xp: 10,
      description: 'Buttery, flaky French pastry made with layers of laminated dough. Freshly baked every morning for the perfect golden crust.',
      ingredients: ['Flour', 'Butter', 'Yeast', 'Milk', 'Sugar', 'Salt'],
      image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400'
    },
    {
      id: 11,
      name: 'Americano',
      category: 'Coffee',
      price: 130,
      xp: 13,
      description: 'Espresso diluted with hot water, creating a similar strength to regular coffee but with a different flavor profile. Smooth and satisfying.',
      ingredients: ['Espresso', 'Hot Water'],
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400'
    }
  ];

  // State to control welcome screen visibility
  const [showWelcome, setShowWelcome] = useState(true);
  const [showCategoryPopup, setShowCategoryPopup] = useState(false);
  const [cartItems, setCartItems] = useState({});

  const categories = ['All', ...new Set(menuItems.map(item => item.category))];
  const categoryRefs = useRef({});

  const groupedItems = categories.slice(1).reduce((acc, category) => {
    acc[category] = menuItems.filter(item => item.category === category);
    return acc;
  }, {});

  function handleWelcomeComplete() {
    setShowWelcome(false);
  }

  function scrollToCategory(category) {
    setShowCategoryPopup(false);
    if (category === 'All') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (categoryRefs.current[category]) {
      categoryRefs.current[category].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  function addToCart(itemId) {
    setCartItems(prev => ({ ...prev, [itemId]: 1 }));
  }

  function increaseQuantity(itemId) {
    setCartItems(prev => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
  }

  function decreaseQuantity(itemId) {
    setCartItems(prev => {
      const newQuantity = (prev[itemId] || 0) - 1;
      if (newQuantity <= 0) {
        const { [itemId]: removed, ...rest } = prev;
        return rest;
      }
      return { ...prev, [itemId]: newQuantity };
    });
  }

  function getQuantity(itemId) {
    return cartItems[itemId] || 0;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    }
  };

  const categoryPopupVariants = {
    hidden: { opacity: 0, scale: 0.75, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 400, damping: 25 }
    },
    exit: {
      opacity: 0,
      scale: 0.75,
      y: 20,
      transition: { duration: 0.2 }
    }
  };

  const menuVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <AnimatePresence mode="wait">
        {showWelcome ? (
          <AnimatePresence>
            {showWelcome && (
              <motion.div
                className="fixed inset-0 z-[9999]"
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <GaramShalaWelcome onComplete={handleWelcomeComplete} />
              </motion.div>
            )}
          </AnimatePresence>
        ) : (
          <motion.div
            key="menu"
            initial="hidden"
            animate="visible"
            variants={menuVariants}
          >
            <div className="max-w-7xl mx-auto px-4 py-8">
              {/* Header */}
              <motion.div
                className="mb-8"
                initial="hidden"
                animate="visible"
                variants={headerVariants}
              >
                <h2 className="text-3xl font-bold text-[#3D2817] mb-2">Our Menu</h2>
                <p className="text-[#6B4423]">Authentic flavors, crafted with love</p>
              </motion.div>

              {/* Menu Categories & Items */}
              {Object.entries(groupedItems).map(([category, items]) => (
                <motion.div
                  key={category}
                  ref={el => (categoryRefs.current[category] = el)}
                  className="mb-12 scroll-mt-24"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, margin: "-100px" }}
                  variants={containerVariants}
                >
                  {/* Category Header */}
                  <motion.div
                    className="flex items-center mb-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    variants={headerVariants}
                  >
                    <div className="flex-1 h-px bg-[#E8DCC4]"></div>
                    <h3 className="px-4 text-2xl font-bold text-[#3D2817] bg-[#FAF7F2]">{category}</h3>
                    <div className="flex-1 h-px bg-[#E8DCC4]"></div>
                  </motion.div>

                  {/* Items Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {items.map((item) => (
                      <ProductCard
                        key={item.id}
                        item={item}
                        cartQuantity={getQuantity(item.id)}
                        onAddToCart={addToCart}
                        onIncrease={increaseQuantity}
                        onDecrease={decreaseQuantity}
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="fixed bottom-6 right-6 z-70">
              <AnimatePresence>
                {showCategoryPopup && (
                  <motion.div
                    className="absolute bottom-16 right-0 bg-white rounded-lg shadow-2xl border border-[#E8DCC4] w-48 overflow-hidden"
                    style={{ maxHeight: '250px', overflowY: 'auto' }}
                    variants={categoryPopupVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <div className="p-2">
                      <div className="px-3 py-2 border-b border-[#E8DCC4] mb-2">
                        <span className="font-semibold text-[#3D2817]">Jump to</span>
                      </div>
                      {categories.map((category, index) => (
                        <motion.button
                          key={category}
                          onClick={() => scrollToCategory(category)}
                          className="w-full text-left px-3 py-2 rounded-lg transition text-[#3D2817] hover:bg-[#6B4423] hover:text-white"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          whileHover={{ x: 5 }}
                        >
                          {category}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button
                onClick={() => setShowCategoryPopup(!showCategoryPopup)}
                className="bg-[#6B4423] text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:bg-[#3D2817]"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={{ rotate: showCategoryPopup ? 90 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {showCategoryPopup ? <X className="w-6 h-6" /> : <span className="text-xs font-semibold">Menu</span>}
              </motion.button>
            </div>

            <AnimatePresence>
              {showCategoryPopup && (
                <motion.div
                  className="fixed inset-0 z-40"
                  onClick={() => setShowCategoryPopup(false)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default CustomerMenu;