// pages/AdminLogin.jsx
import React, { useState } from 'react';

const AdminLogin = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Static validation
    if (email === 'admin@garamshala.com' && password === 'admin123') {
      onLogin();
    } else {
      setError('Invalid credentials! Use: admin@garamshala.com / admin123');
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo Card */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-[#3D2817] rounded-full mb-4 shadow-lg">
            <span className="text-4xl">☕</span>
          </div>
          <h1 className="text-3xl font-bold text-[#3D2817]">Garamshala</h1>
          <p className="text-[#6B4423] mt-1">Admin Portal</p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-[#E8DCC4]">
          <h2 className="text-2xl font-bold text-[#3D2817] text-center mb-6">Welcome Back</h2>
          
          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-semibold text-[#3D2817] mb-2">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6B4423]">📧</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@garamshala.com"
                  className="w-full pl-10 pr-4 py-3 border-2 border-[#E8DCC4] rounded-lg focus:border-[#6B4423] focus:outline-none bg-[#FAF7F2] text-[#3D2817] placeholder-[#6B4423]/50"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-semibold text-[#3D2817] mb-2">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6B4423]">🔒</span>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full pl-10 pr-12 py-3 border-2 border-[#E8DCC4] rounded-lg focus:border-[#6B4423] focus:outline-none bg-[#FAF7F2] text-[#3D2817] placeholder-[#6B4423]/50"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B4423] hover:text-[#3D2817]"
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 accent-[#6B4423] rounded"
                />
                <span className="text-sm text-[#6B4423]">Remember me</span>
              </label>
              <button type="button" className="text-sm text-[#6B4423] hover:text-[#3D2817] font-medium">
                Forgot Password?
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-[#3D2817] hover:bg-[#6B4423] text-white font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Sign In
            </button>
          </form>

          {/* Demo Credentials */}
          <div className="mt-6 p-4 bg-[#E8DCC4] rounded-lg">
            <p className="text-xs font-semibold text-[#3D2817] mb-2">Demo Credentials:</p>
            <p className="text-xs text-[#6B4423]">Email: admin@garamshala.com</p>
            <p className="text-xs text-[#6B4423]">Password: admin123</p>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-[#6B4423] mt-6">
          © 2024 Garamshala. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;