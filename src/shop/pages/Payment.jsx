import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Wallet, CheckCircle, X } from 'lucide-react';

function Payment() {
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);

  const cart = [
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
      name: 'Margherita Pizza',
      price: 350,
      quantity: 1,
      xp: 35,
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400'
    },
    {
      id: 3,
      name: 'Chocolate Cake',
      price: 160,
      quantity: 1,
      xp: 16,
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400'
    }
  ];

  const totalAmount = 810;
  const totalXP = 81;

  function handlePayment() {
    if (!selectedMethod) {
      alert('Please select a payment method');
      return;
    }

    const order = {
      orderId: 'ORD1234567890',
      items: cart,
      totalAmount: totalAmount,
      xpEarned: totalXP,
      paymentMethod: selectedMethod,
      date: '16 Jan 2025, 12:30 PM',
      status: 'Completed'
    };

    setOrderDetails(order);
    setShowSuccessModal(true);
  }

  function closeModalAndRedirect() {
    setShowSuccessModal(false);
    navigate('/orders');
  }

  return (
    <div className="min-h-screen bg-[#FAF7F2]">

      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-[#3D2817] mb-8">Payment Method</h1>

        <div className="bg-white rounded-lg shadow-lg p-6 border border-[#E8DCC4] mb-6">
          <h2 className="text-xl font-bold text-[#3D2817] mb-4">Select Payment Option</h2>
          
          <div className="space-y-4">
            <div
              onClick={() => setSelectedMethod('UPI')}
              className={`flex items-center space-x-4 p-4 rounded-lg border-2 cursor-pointer transition ${
                selectedMethod === 'UPI'
                  ? 'border-[#6B4423] bg-[#E8DCC4]'
                  : 'border-[#E8DCC4] hover:border-[#6B4423]'
              }`}
            >
              <Wallet className="w-8 h-8 text-[#6B4423]" />
              <div className="flex-1">
                <h3 className="font-bold text-[#3D2817]">UPI Payment</h3>
                <p className="text-sm text-[#6B4423]">Pay using UPI apps</p>
              </div>
              {selectedMethod === 'UPI' && (
                <CheckCircle className="w-6 h-6 text-[#6B4423]" />
              )}
            </div>

            <div
              onClick={() => setSelectedMethod('Cash')}
              className={`flex items-center space-x-4 p-4 rounded-lg border-2 cursor-pointer transition ${
                selectedMethod === 'Cash'
                  ? 'border-[#6B4423] bg-[#E8DCC4]'
                  : 'border-[#E8DCC4] hover:border-[#6B4423]'
              }`}
            >
              <CreditCard className="w-8 h-8 text-[#6B4423]" />
              <div className="flex-1">
                <h3 className="font-bold text-[#3D2817]">Cash on Delivery</h3>
                <p className="text-sm text-[#6B4423]">Pay with cash at delivery</p>
              </div>
              {selectedMethod === 'Cash' && (
                <CheckCircle className="w-6 h-6 text-[#6B4423]" />
              )}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 border border-[#E8DCC4] mb-6">
          <h2 className="text-xl font-bold text-[#3D2817] mb-4">Order Summary</h2>
          
          <div className="space-y-2 mb-4">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between text-[#6B4423]">
                <span>{item.name} × {item.quantity}</span>
                <span>₹{item.price * item.quantity}</span>
              </div>
            ))}
          </div>

          <div className="border-t border-[#E8DCC4] pt-4">
            <div className="flex justify-between text-xl font-bold text-[#3D2817] mb-2">
              <span>Total Amount</span>
              <span>₹{totalAmount}</span>
            </div>
            <div className="flex justify-between text-[#6B4423]">
              <span>XP to be earned</span>
              <span className="font-bold">{totalXP} XP</span>
            </div>
          </div>
        </div>

        <button
          onClick={handlePayment}
          className="w-full bg-[#6B4423] text-white py-3 rounded-lg hover:bg-[#3D2817] transition font-semibold text-lg"
        >
          Complete Payment
        </button>
      </div>

      {showSuccessModal && orderDetails && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">

          <div className="bg-white rounded-lg max-w-md w-full p-8 relative">
            <button
              onClick={closeModalAndRedirect}
              className="absolute top-4 right-4 text-[#6B4423] hover:text-[#3D2817]"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center mb-6">
              <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-[#3D2817] mb-2">
                Order Successful!
              </h2>
              <p className="text-[#6B4423]">Your order has been placed successfully</p>
            </div>

            <div className="bg-[#E8DCC4] rounded-lg p-4 mb-6">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#6B4423]">Order ID:</span>
                  <span className="text-[#3D2817] font-bold">{orderDetails.orderId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6B4423]">Total Amount:</span>
                  <span className="text-[#3D2817] font-bold">₹{orderDetails.totalAmount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6B4423]">XP Earned:</span>
                  <span className="text-[#3D2817] font-bold">{orderDetails.xpEarned} XP</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6B4423]">Payment Method:</span>
                  <span className="text-[#3D2817] font-bold">{orderDetails.paymentMethod}</span>
                </div>
              </div>
            </div>

            <div className="text-center text-sm text-[#6B4423] mb-6">
              <p>Your XP has been credited to your profile!</p>
              <p>Receipt has been generated.</p>
            </div>

            <button
              onClick={closeModalAndRedirect}
              className="w-full bg-[#6B4423] text-white py-3 rounded-lg hover:bg-[#3D2817] transition font-semibold"
            >
              View Orders
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Payment;