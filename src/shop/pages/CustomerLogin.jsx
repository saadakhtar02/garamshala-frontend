import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Coffee, Mail, Lock, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import axios from 'axios';
import logo from "../img/logo.png";

function CustomerLogin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await axios.post(`http://localhost:3000/api/customer/customerLogin`, {
        email: formData.email,
        password: formData.password
      });

      localStorage.setItem('token', response.data.token);

      navigate('/Welcome');

    } catch (error) {
      setError(error.response?.data?.message || 'Login failed');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-[#FAF7F2]">
      <div className="max-w-md w-full">
        <div className="text-center mb-3">
          <motion.img
            src={logo}
            alt="GaramShala Logo"
            className="mx-auto w-auto h-20"
            animate={{
              y: [0, -8, 0],
              rotate: [0, 3, -3, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 border border-[#E8DCC4]">
          <h2 className="text-2xl font-semibold text-[#3D2817] mb-6">Login</h2>

          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              {error}
            </div>
          )}

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
                  required
                  className="w-full pl-12 pr-4 py-3 border border-[#E8DCC4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B6F47] bg-[#FAF7F2] text-[#3D2817]"
                  placeholder="your@email.com"
                />
              </div>
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
                  required
                  className="w-full pl-12 pr-4 py-3 border border-[#E8DCC4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B6F47] bg-[#FAF7F2] text-[#3D2817]"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#6B4423] hover:bg-[#3D2817] text-white font-semibold py-3 rounded-lg transition duration-300 shadow-md disabled:opacity-50 flex items-center justify-center"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Logging in...
                </>
              ) : (
                'Login'
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-[#6B4423]">
              Don't have an account?{' '}
              <motion.button
                onClick={() => navigate('/register')}
                className="text-[#3D2817] font-semibold hover:underline"
                whileHover={{
                  scale: 1.1,
                  color: "#8B6F47",
                }}
                whileTap={{
                  scale: 0.95
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 10
                }}
              >
                Register here
              </motion.button>
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