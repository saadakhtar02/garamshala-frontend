import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Trash2, X, Star, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';


function CustomerViewCart() {
    const navigate = useNavigate();

    const cart = [
        {
            id: 1,
            name: 'Espresso',
            category: 'Coffee',
            price: 120,
            xp: 12,
            quantity: 2,
            image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400'
        },
        {
            id: 2,
            name: 'Cappuccino',
            category: 'Coffee',
            price: 150,
            xp: 15,
            quantity: 1,
            image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400'
        },
        {
            id: 4,
            name: 'Margherita Pizza',
            category: 'Pizza',
            price: 350,
            xp: 35,
            quantity: 1,
            image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400'
        },
        {
            id: 8,
            name: 'Tiramisu',
            category: 'Dessert',
            price: 180,
            xp: 18,
            quantity: 2,
            image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400'
        }
    ];

    const totalAmount = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const totalXP = cart.reduce(
        (total, item) => total + item.xp * item.quantity,
        0
    );

    return (
        <div className="min-h-screen bg-[#FAF7F2]">
            <div className="max-w-5xl mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-[#3D2817] mb-8">Your Cart</h1>

                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-4">
                        {cart.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, margin: "-50px" }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 12
                                }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-white rounded-lg shadow-md p-6 border border-[#E8DCC4]"
                            >
                                <div className="flex items-center space-x-4">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-24 h-24 object-cover rounded-lg"
                                    />

                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-[#3D2817] mb-1">
                                            {item.name}
                                        </h3>
                                        <p className="text-[#6B4423] mb-2">₹{item.price} each</p>
                                        <div className="flex items-center space-x-1 text-sm text-[#6B4423]">
                                            <Star className="w-4 h-4 fill-current" />
                                            <span>{item.xp} XP per item</span>
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-end space-y-3">
                                        <button className="text-red-600 hover:text-red-700 transition">
                                            <X className="w-5 h-5" />
                                        </button>

                                        <div className="flex items-center space-x-3 bg-[#E8DCC4] rounded-lg px-3 py-2">
                                            <button className="text-[#6B4423] hover:text-[#3D2817] font-bold">
                                                −
                                            </button>
                                            <span className="text-[#3D2817] font-bold w-8 text-center">
                                                {item.quantity}
                                            </span>
                                            <button className="text-[#6B4423] hover:text-[#3D2817] font-bold">
                                                +
                                            </button>
                                        </div>

                                        <p className="text-[#3D2817] font-bold text-lg">
                                            ₹{item.price * item.quantity}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg shadow-lg p-6 border border-[#E8DCC4] sticky top-4">
                            <h2 className="text-2xl font-bold text-[#3D2817] mb-6">Order Summary</h2>

                            <div className="space-y-3 mb-6">
                                <div className="flex justify-between text-[#6B4423]">
                                    <span>Subtotal</span>
                                    <span>₹{totalAmount}</span>
                                </div>

                                <div className="border-t border-[#E8DCC4] pt-3">
                                    <div className="flex justify-between text-xl font-bold text-[#3D2817]">
                                        <span>Total</span>
                                        <span>₹{totalAmount}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#E8DCC4] rounded-lg p-4 mb-6">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-[#6B4423] font-medium">You will earn:</span>
                                    <div className="flex items-center space-x-1 text-[#3D2817] font-bold text-xl">
                                        <Star className="w-5 h-5 fill-current" />
                                        <span>{totalXP} XP</span>
                                    </div>
                                </div>
                                <p className="text-sm text-[#6B4423]">
                                    Earn loyalty points with every purchase!
                                </p>
                            </div>

                            <button
                                onClick={() => navigate('/menu/cart/payment')}
                                className="w-full bg-[#6B4423] text-white py-3 rounded-lg hover:bg-[#3D2817] transition font-semibold text-lg"
                            >
                                Proceed to Payment
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CustomerViewCart;