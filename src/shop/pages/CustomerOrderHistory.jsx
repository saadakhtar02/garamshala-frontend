import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingBag, Star, X } from 'lucide-react';

function CustomerOrderHistory() {
  const navigate = useNavigate();
  const [selectedOrder, setSelectedOrder] = useState(null);

  const orders = [
    {
      orderId: 'ORD001',
      date: '15 Jan 2025, 10:30 AM',
      totalAmount: 450,
      xpEarned: 45,
      paymentMethod: 'UPI',
      status: 'Completed',
      items: [
        {
          id: 1,
          name: 'Cappuccino',
          price: 150,
          quantity: 2,
          xp: 15,
          image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400'
        },
        {
          id: 2,
          name: 'Chocolate Cake',
          price: 150,
          quantity: 1,
          xp: 15,
          image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400'
        }
      ]
    },
    {
      orderId: 'ORD002',
      date: '14 Jan 2025, 3:45 PM',
      totalAmount: 620,
      xpEarned: 62,
      paymentMethod: 'Cash',
      status: 'Completed',
      items: [
        {
          id: 3,
          name: 'Margherita Pizza',
          price: 350,
          quantity: 1,
          xp: 35,
          image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400'
        },
        {
          id: 4,
          name: 'Latte',
          price: 160,
          quantity: 1,
          xp: 16,
          image: 'https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=400'
        },
        {
          id: 5,
          name: 'Croissant',
          price: 110,
          quantity: 1,
          xp: 11,
          image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400'
        }
      ]
    },
    {
      orderId: 'ORD003',
      date: '12 Jan 2025, 11:00 AM',
      totalAmount: 280,
      xpEarned: 28,
      paymentMethod: 'Card',
      status: 'Completed',
      items: [
        {
          id: 6,
          name: 'Pasta Carbonara',
          price: 280,
          quantity: 1,
          xp: 28,
          image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400'
        }
      ]
    },
    {
      orderId: 'ORD004',
      date: '10 Jan 2025, 5:20 PM',
      totalAmount: 520,
      xpEarned: 52,
      paymentMethod: 'UPI',
      status: 'Completed',
      items: [
        {
          id: 7,
          name: 'Burger',
          price: 220,
          quantity: 1,
          xp: 22,
          image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400'
        },
        {
          id: 8,
          name: 'Espresso',
          price: 120,
          quantity: 1,
          xp: 12,
          image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400'
        },
        {
          id: 9,
          name: 'Tiramisu',
          price: 180,
          quantity: 1,
          xp: 18,
          image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400'
        }
      ]
    },
    {
      orderId: 'ORD005',
      date: '8 Jan 2025, 9:15 AM',
      totalAmount: 370,
      xpEarned: 37,
      paymentMethod: 'Cash',
      status: 'Completed',
      items: [
        {
          id: 10,
          name: 'Americano',
          price: 130,
          quantity: 2,
          xp: 13,
          image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400'
        },
        {
          id: 11,
          name: 'Croissant',
          price: 110,
          quantity: 1,
          xp: 11,
          image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400'
        }
      ]
    }
  ];

  if (orders.length === 0) {
    return (
      <div className="min-h-screen bg-[#FAF7F2]">
        <header className="bg-white shadow-md border-b border-[#E8DCC4]">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <button
              onClick={() => navigate('/menu')}
              className="flex items-center space-x-2 text-[#6B4423] hover:text-[#3D2817] transition"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Menu</span>
            </button>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <ShoppingBag className="w-24 h-24 text-[#E8DCC4] mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-[#3D2817] mb-4">No Orders Yet</h2>
          <p className="text-[#6B4423] mb-8">Start ordering to see your history here!</p>
          <button
            onClick={() => navigate('/menu')}
            className="bg-[#6B4423] text-white px-8 py-3 rounded-lg hover:bg-[#3D2817] transition font-semibold"
          >
            Browse Menu
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF7F2]">

      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-[#3D2817] mb-2">Order History</h1>
        <p className="text-[#6B4423] mb-8">View all your past orders and their details</p>

        <div className="space-y-4">
          {orders.map((order, index) => (
            <div
              key={order.orderId}
              className="bg-white rounded-lg shadow-md p-6 border border-[#E8DCC4] transition"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div>
                  <div className="flex items-center space-x-3 mb-1">
                    <span className="bg-[#6B4423] text-white text-sm font-bold px-3 py-1 rounded-full">
                      #{index + 1}
                    </span>
                    <h3 className="text-xl font-bold text-[#3D2817]">
                      Order #{order.orderId}
                    </h3>
                  </div>
                  <p className="text-sm text-[#6B4423] ml-12">{order.date}</p>
                </div>
                
                <div className="mt-3 sm:mt-0 flex items-center space-x-4">
                  <div className="text-right">
                    <p className="text-sm text-[#6B4423]">Total Amount</p>
                    <p className="text-xl font-bold text-[#3D2817]">₹{order.totalAmount}</p>
                  </div>
                  
                  <div className="text-right">
                    <p className="text-sm text-[#6B4423]">XP Earned</p>
                    <div className="flex items-center space-x-1 text-[#3D2817] font-bold">
                      <Star className="w-4 h-4 fill-current" />
                      <span>{order.xpEarned}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-[#E8DCC4] text-[#6B4423] px-3 py-1 rounded-full text-sm">
                  {order.paymentMethod}
                </span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                  {order.status}
                </span>
              </div>

              <button
                onClick={() => setSelectedOrder(order)}
                className="text-[#6B4423] hover:text-[#3D2817] font-semibold transition"
              >
                View Details →
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedOrder && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white shadow-[0px_0px_10px_0px_rgba(0,_0,_0,_0.35)] rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 relative">
            <button
              onClick={() => setSelectedOrder(null)}
              className="absolute top-4 right-4 text-[#6B4423] hover:text-[#3D2817]"
            >
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-2xl font-bold text-[#3D2817] mb-6">
              Order Details
            </h2>

            <div className="bg-[#E8DCC4] border border-[#E8DCC4] rounded-lg p-4 mb-6">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-[#6B4423] mb-1">Order ID</p>
                  <p className="text-[#3D2817] font-bold">{selectedOrder.orderId}</p>
                </div>
                <div>
                  <p className="text-[#6B4423] mb-1">Date & Time</p>
                  <p className="text-[#3D2817] font-bold">{selectedOrder.date}</p>
                </div>
                <div>
                  <p className="text-[#6B4423] mb-1">Payment Method</p>
                  <p className="text-[#3D2817] font-bold">{selectedOrder.paymentMethod}</p>
                </div>
                <div>
                  <p className="text-[#6B4423] mb-1">Status</p>
                  <p className="text-green-700 font-bold">{selectedOrder.status}</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-[#3D2817] mb-4">Items Ordered</h3>
            
            <div className="space-y-3 mb-6">
              {selectedOrder.items.map((item, itemIndex) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-4 border border-[#E8DCC4] bg-[#FAF7F2] rounded-lg"
                >
                  <div className="flex items-center space-x-4">
                    <span className="bg-[#6B4423] text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                      {itemIndex + 1}
                    </span>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div>
                      <h4 className="font-bold text-[#3D2817]">{item.name}</h4>
                      <p className="text-sm text-[#6B4423]">Quantity: {item.quantity}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-[#3D2817]">₹{item.price * item.quantity}</p>
                    <p className="text-sm text-[#6B4423]">{item.xp * item.quantity} XP</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-[#6B4423] pt-4">
              <div className="flex justify-between text-xl font-bold text-[#3D2817] mb-2">
                <span>Total Amount</span>
                <span>₹{selectedOrder.totalAmount}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#6B4423]">Total XP Earned</span>
                <div className="flex items-center space-x-1 text-[#3D2817] font-bold">
                  <Star className="w-5 h-5 fill-current" />
                  <span>{selectedOrder.xpEarned} XP</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setSelectedOrder(null)}
              className="w-full mt-6 bg-[#6B4423] text-white py-3 rounded-lg hover:bg-[#3D2817] transition font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CustomerOrderHistory;