import React, { useState, useRef } from 'react';
import { Plus, Minus, Star, X, Info } from 'lucide-react';

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

  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const [showCategoryPopup, setShowCategoryPopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const categories = ['All', ...new Set(menuItems.map(item => item.category))];
  const categoryRefs = useRef({});

  const groupedItems = categories.slice(1).reduce((acc, category) => {
    acc[category] = menuItems.filter(item => item.category === category);
    return acc;
  }, {});

  function scrollToCategory(category) {
    setShowCategoryPopup(false);
    if (category === 'All') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (categoryRefs.current[category]) {
      categoryRefs.current[category].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  function addToCart(item) {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    let newCart;
    if (existingItem) {
      newCart = cart.map(cartItem =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      );
    } else {
      newCart = [...cart, { ...item, quantity: 1 }];
    }
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  }

  function increaseQuantity(itemId) {
    const newCart = cart.map(item =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  }

  function decreaseQuantity(itemId) {
    const item = cart.find(item => item.id === itemId);
    let newCart;
    if (item.quantity === 1) {
      newCart = cart.filter(item => item.id !== itemId);
    } else {
      newCart = cart.map(item =>
        item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
      );
    }
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  }

  function getItemQuantity(itemId) {
    const item = cart.find(item => item.id === itemId);
    return item ? item.quantity : 0;
  }

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-[#3D2817] mb-2">Our Menu</h2>
          <p className="text-[#6B4423]">Authentic flavors, crafted with love</p>
        </div>

        {/* Category Sections */}
        {Object.entries(groupedItems).map(([category, items]) => (
          <div
            key={category}
            ref={el => (categoryRefs.current[category] = el)}
            className="mb-12 scroll-mt-24"
          >
            {/* Category Header */}
            <div className="flex items-center mb-6">
              <div className="flex-1 h-px bg-[#E8DCC4]"></div>
              <h3 className="px-4 text-2xl font-bold text-[#3D2817] bg-[#FAF7F2]">{category}</h3>
              <div className="flex-1 h-px bg-[#E8DCC4]"></div>
            </div>

            {/* Items Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {items.map(item => {
                const quantity = getItemQuantity(item.id);
                return (
                  <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden border border-[#E8DCC4] hover:shadow-xl transition-all duration-300">

                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      <div className="absolute top-3 right-3 bg-[#E8DCC4] text-[#3D2817] px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-current" />
                        <span>{item.xp} XP</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <h3 className="text-xl font-bold text-[#3D2817] mb-2">{item.name}</h3>

                      {/* Description - 2 lines with ellipsis */}
                      <p className="text-sm text-[#6B4423] mb-2 line-clamp-2">{item.description}</p>

                      {/* More Details Button */}
                      <button
                        onClick={() => setSelectedItem(item)}
                        className="flex w-full flex-row-reverse items-center text-sm text-[#6B4423] hover:text-[#3D2817] mb-3 transition"
                      >
                        <span className="underline">More Details</span>
                        <Info className="w-4 h-4 mr-1" />
                      </button>

                      {/* Price */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-bold text-[#6B4423]">₹{item.price}</span>
                      </div>

                      {/* Add to Cart / Quantity */}
                      {quantity === 0 ? (
                        <button
                          onClick={() => addToCart(item)}
                          className="w-full bg-[#6B4423] text-white py-2 rounded-lg hover:bg-[#3D2817] transition font-semibold"
                        >
                          Add to Cart
                        </button>
                      ) : (
                        <div className="flex items-center justify-between bg-[#E8DCC4] rounded-lg p-2">
                          <button
                            onClick={() => decreaseQuantity(item.id)}
                            className="bg-white text-[#6B4423] w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#6B4423] hover:text-white transition"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="text-[#3D2817] font-bold text-lg">{quantity}</span>
                          <button
                            onClick={() => increaseQuantity(item.id)}
                            className="bg-white text-[#6B4423] w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#6B4423] hover:text-white transition"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Fixed Category Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div
          className={`absolute bottom-16 right-0 bg-white rounded-lg shadow-2xl border border-[#E8DCC4] w-48 overflow-hidden transition-all duration-300 origin-bottom-right ${showCategoryPopup ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-75 translate-y-4 pointer-events-none'
            }`}
          style={{ maxHeight: '250px', overflowY: 'auto' }}
        >
          <div className="p-2">
            <div className="px-3 py-2 border-b border-[#E8DCC4] mb-2">
              <span className="font-semibold text-[#3D2817]">Jump to</span>
            </div>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => scrollToCategory(category)}
                className="w-full text-left px-3 py-2 rounded-lg transition text-[#3D2817] hover:bg-[#6B4423] hover:text-white"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={() => setShowCategoryPopup(!showCategoryPopup)}
          className={`bg-[#6B4423] text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:bg-[#3D2817] transition-all duration-300 ${showCategoryPopup ? 'rotate-90' : ''
            }`}
        >
          {showCategoryPopup ? <X className="w-6 h-6" /> : <span className="text-xs font-semibold">Menu</span>}
        </button>
      </div>

      {showCategoryPopup && (
        <div className="fixed inset-0 z-40" onClick={() => setShowCategoryPopup(false)} />
      )}

      {/* Item Detail Popup */}
      {selectedItem && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/70" onClick={() => setSelectedItem(null)} />

          <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 bg-white/90 text-[#3D2817] w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-[#6B4423] hover:text-white transition"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image */}
            <div className="relative h-56 overflow-hidden">
              <img src={selectedItem.image} alt={selectedItem.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-block bg-[#E8DCC4] text-[#3D2817] px-3 py-1 rounded-full text-sm font-semibold mb-2">
                  {selectedItem.category}
                </span>
                <h2 className="text-2xl font-bold text-white">{selectedItem.name}</h2>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 max-h-[50vh] overflow-y-auto">
              {/* XP and Price */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2 bg-[#E8DCC4] px-3 py-2 rounded-full">
                  <Star className="w-5 h-5 text-[#6B4423] fill-current" />
                  <span className="font-semibold text-[#3D2817]">{selectedItem.xp} XP</span>
                </div>
                <span className="text-3xl font-bold text-[#6B4423]">₹{selectedItem.price}</span>
              </div>

              {/* Description */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-[#3D2817] mb-2">Description</h3>
                <p className="text-[#6B4423] leading-relaxed">{selectedItem.description}</p>
              </div>

              {/* Ingredients */}
              {selectedItem.ingredients && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-[#3D2817] mb-2">Ingredients</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.ingredients.map((ingredient, index) => (
                      <span key={index} className="bg-[#FAF7F2] text-[#6B4423] px-3 py-1 rounded-full text-sm border border-[#E8DCC4]">
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Add to Cart */}
              {getItemQuantity(selectedItem.id) === 0 ? (
                <button
                  onClick={() => addToCart(selectedItem)}
                  className="w-full bg-[#6B4423] text-white py-3 rounded-lg hover:bg-[#3D2817] transition font-semibold text-lg"
                >
                  Add to Cart - ₹{selectedItem.price}
                </button>
              ) : (
                <div className="flex items-center justify-between bg-[#E8DCC4] rounded-lg p-3">
                  <button
                    onClick={() => decreaseQuantity(selectedItem.id)}
                    className="bg-white text-[#6B4423] w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#6B4423] hover:text-white transition"
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                  <div className="text-center">
                    <span className="text-[#3D2817] font-bold text-xl block">{getItemQuantity(selectedItem.id)}</span>
                    <span className="text-[#6B4423] text-sm">in cart</span>
                  </div>
                  <button
                    onClick={() => increaseQuantity(selectedItem.id)}
                    className="bg-white text-[#6B4423] w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#6B4423] hover:text-white transition"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CustomerMenu;