import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Coffee, User, Mail, Star, Award, LogOut } from 'lucide-react';

function CustomerProfile() {
  const navigate = useNavigate();
  const [customerData, setCustomerData] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem('customerData');
    if (storedData) {
      setCustomerData(JSON.parse(storedData));
    } else {
      navigate('/login');
    }
  }, [navigate]);

  function handleLogout() {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  }

  if (!customerData) {
    return null;
  }

  const xp = customerData.xp || 0;
  const level = Math.floor(xp / 100) + 1;
  const nextLevelXP = level * 100;
  const progressPercentage = ((xp % 100) / 100) * 100;

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8 border border-[#E8DCC4] mb-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
            <div className="w-24 h-24 bg-[#E8DCC4] rounded-full flex items-center justify-center">
              <User className="w-12 h-12 text-[#6B4423]" />
            </div>
            
            <div className="flex-1 text-center sm:text-left">
              <h1 className="text-3xl font-bold text-[#3D2817] mb-2">
                {customerData.name}
              </h1>
              <div className="flex items-center justify-center sm:justify-start space-x-2 text-[#6B4423]">
                <Mail className="w-4 h-4" />
                <span>{customerData.email}</span>
              </div>
            </div>
            
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 text-red-600 hover:text-red-700 transition"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-[#6B4423] to-[#3D2817] rounded-lg p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Loyalty Level</h3>
                <Award className="w-8 h-8" />
              </div>
              <p className="text-4xl font-bold mb-2">Level {level}</p>
              <p className="text-sm opacity-90">Keep earning to level up!</p>
            </div>

            <div className="bg-[#E8DCC4] rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-[#3D2817]">Total XP</h3>
                <Star className="w-8 h-8 text-[#6B4423] fill-current" />
              </div>
              <p className="text-4xl font-bold text-[#3D2817] mb-2">{xp} XP</p>
              <p className="text-sm text-[#6B4423]">Lifetime earnings</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 border border-[#E8DCC4]">
          <h2 className="text-2xl font-bold text-[#3D2817] mb-6">XP Progress</h2>
          
          <div className="mb-6">
            <div className="flex justify-between mb-2">
              <span className="text-[#6B4423] font-medium">Current Level: {level}</span>
              <span className="text-[#6B4423] font-medium">Next Level: {level + 1}</span>
            </div>
            
            <div className="w-full bg-[#E8DCC4] rounded-full h-6 overflow-hidden">
              <div
                className="bg-gradient-to-r from-[#6B4423] to-[#3D2817] h-full flex items-center justify-center text-white text-sm font-bold transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              >
                {progressPercentage > 20 && `${Math.round(progressPercentage)}%`}
              </div>
            </div>
            
            <div className="flex justify-between mt-2 text-sm text-[#6B4423]">
              <span>{xp % 100} XP</span>
              <span>{100 - (xp % 100)} XP to next level</span>
            </div>
          </div>

          <div className="bg-[#FAF7F2] rounded-lg p-6 border border-[#E8DCC4]">
            <h3 className="font-bold text-[#3D2817] mb-3 flex items-center space-x-2">
              <Star className="w-5 h-5 text-[#6B4423] fill-current" />
              <span>How to Earn XP</span>
            </h3>
            <ul className="space-y-2 text-[#6B4423]">
              <li className="flex items-start space-x-2">
                <span>•</span>
                <span>Earn 10% of your order value as XP (₹100 = 10 XP)</span>
              </li>
              <li className="flex items-start space-x-2">
                <span>•</span>
                <span>Each item shows XP value on the menu</span>
              </li>
              <li className="flex items-start space-x-2">
                <span>•</span>
                <span>Level up every 100 XP for exclusive rewards</span>
              </li>
              <li className="flex items-start space-x-2">
                <span>•</span>
                <span>Track your progress and compete with friends</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          <button
            onClick={() => navigate('/orders')}
            className="bg-[#6B4423] text-white py-3 rounded-lg hover:bg-[#3D2817] transition font-semibold"
          >
            View Order History
          </button>
          <button
            onClick={() => navigate('/menu')}
            className="bg-white text-[#6B4423] py-3 rounded-lg border-2 border-[#6B4423] hover:bg-[#E8DCC4] transition font-semibold"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}

export default CustomerProfile;