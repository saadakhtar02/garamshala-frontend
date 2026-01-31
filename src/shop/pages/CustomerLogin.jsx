import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Coffee, Mail, Lock } from 'lucide-react';

function CustomerLogin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setErrors({
      ...errors,
      [e.target.name]: ''
    });
  }

  function validateForm() {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    if (validateForm()) {
      const storedData = localStorage.getItem('customerData');
      
      if (storedData) {
        const customer = JSON.parse(storedData);
        
        if (customer.email === formData.email && customer.password === formData.password) {
          localStorage.setItem('isLoggedIn', 'true');
          navigate('/menu');
        } else {
          alert('Invalid email or password');
        }
      } else {
        alert('No account found. Please register first.');
      }
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-[#FAF7F2]">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Coffee className="w-12 h-12 text-[#6B4423]" />
          </div>
          <h1 className="text-4xl font-bold text-[#3D2817] mb-2">GaramShala</h1>
          <p className="text-[#6B4423] text-lg">Welcome Back to Your Italian Escape</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 border border-[#E8DCC4]">
          <h2 className="text-2xl font-semibold text-[#3D2817] mb-6">Login</h2>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-[#6B4423] font-medium mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#6B4423]" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 border border-[#E8DCC4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B6F47] bg-[#FAF7F2] text-[#3D2817]"
                  placeholder="your@email.com"
                />
              </div>
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-[#6B4423] font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#6B4423]" />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 border border-[#E8DCC4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B6F47] bg-[#FAF7F2] text-[#3D2817]"
                  placeholder="••••••••"
                />
              </div>
              {errors.password && (
                <p className="text-red-600 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-[#6B4423] hover:bg-[#3D2817] text-white font-semibold py-3 rounded-lg transition duration-300 shadow-md"
            >
              Login
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-[#6B4423]">
              Don't have an account?{' '}
              <button
                onClick={() => navigate('/register')}
                className="text-[#3D2817] font-semibold hover:underline"
              >
                Register here
              </button>
            </p>
          </div>
        </div>

        <div className="mt-6 bg-[#E8DCC4] rounded-lg p-4 text-center">
          <p className="text-[#6B4423] text-sm">
            ☕ Earn XP with every purchase and unlock exclusive rewards!
          </p>
        </div>
      </div>
    </div>
  );
}

export default CustomerLogin;