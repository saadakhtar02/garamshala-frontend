// pages/Dashboard.jsx
import React from 'react';

const AdminDashboard = () => {
  // Static Data
  const stats = {
    totalOrdersToday: 47,
    totalRevenue: 28450,
    totalCustomers: 1256,
    totalXPGiven: 85420,
  };

  const recentOrders = [
    { id: 'ORD-2024-001', customer: 'Amit Sharma', amount: 650, time: '2 mins ago', status: 'Completed' },
    { id: 'ORD-2024-002', customer: 'Priya Patel', amount: 420, time: '15 mins ago', status: 'Completed' },
    { id: 'ORD-2024-003', customer: 'Rahul Verma', amount: 890, time: '32 mins ago', status: 'Completed' },
    { id: 'ORD-2024-004', customer: 'Sneha Gupta', amount: 350, time: '45 mins ago', status: 'Cancelled' },
    { id: 'ORD-2024-005', customer: 'Vikram Singh', amount: 1200, time: '1 hour ago', status: 'Completed' },
  ];

  const topSellingProducts = [
    { name: 'Masala Chai', category: 'Hot Beverages', sold: 245, revenue: 7350 },
    { name: 'Cold Coffee', category: 'Cold Beverages', sold: 189, revenue: 9450 },
    { name: 'Samosa', category: 'Snacks', sold: 156, revenue: 3120 },
    { name: 'Cappuccino', category: 'Hot Beverages', sold: 134, revenue: 8040 },
    { name: 'Vada Pav', category: 'Snacks', sold: 128, revenue: 3840 },
  ];

  const topCustomers = [
    { name: 'Rajesh Mehta', phone: '9876543210', totalXP: 4520, orders: 45, avatar: '👨‍💼' },
    { name: 'Anita Desai', phone: '9876543211', totalXP: 3890, orders: 38, avatar: '👩‍💼' },
    { name: 'Suresh Kumar', phone: '9876543212', totalXP: 3450, orders: 34, avatar: '👨' },
    { name: 'Meena Kapoor', phone: '9876543213', totalXP: 3120, orders: 31, avatar: '👩' },
    { name: 'Arun Joshi', phone: '9876543214', totalXP: 2890, orders: 28, avatar: '👴' },
  ];

  return (
    <div className="p-6 bg-[#FAF7F2] min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#3D2817]">Dashboard</h1>
        <p className="text-[#6B4423] mt-1">Welcome back! Here's what's happening today.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Total Orders Today */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-[#E8DCC4] hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-[#6B4423] font-medium">Today's Orders</p>
              <p className="text-3xl font-bold text-[#3D2817] mt-2">{stats.totalOrdersToday}</p>
              <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
                <span>↑</span> 12% from yesterday
              </p>
            </div>
            <div className="w-14 h-14 bg-[#E8DCC4] rounded-full flex items-center justify-center">
              <span className="text-2xl">📦</span>
            </div>
          </div>
        </div>

        {/* Total Revenue */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-[#E8DCC4] hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-[#6B4423] font-medium">Today's Revenue</p>
              <p className="text-3xl font-bold text-[#3D2817] mt-2">₹{stats.totalRevenue.toLocaleString()}</p>
              <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
                <span>↑</span> 8% from yesterday
              </p>
            </div>
            <div className="w-14 h-14 bg-[#E8DCC4] rounded-full flex items-center justify-center">
              <span className="text-2xl">💰</span>
            </div>
          </div>
        </div>

        {/* Total Customers */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-[#E8DCC4] hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-[#6B4423] font-medium">Total Customers</p>
              <p className="text-3xl font-bold text-[#3D2817] mt-2">{stats.totalCustomers.toLocaleString()}</p>
              <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
                <span>↑</span> 23 new today
              </p>
            </div>
            <div className="w-14 h-14 bg-[#E8DCC4] rounded-full flex items-center justify-center">
              <span className="text-2xl">👥</span>
            </div>
          </div>
        </div>

        {/* Total XP Given */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-[#E8DCC4] hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-[#6B4423] font-medium">Total XP Given</p>
              <p className="text-3xl font-bold text-[#3D2817] mt-2">{stats.totalXPGiven.toLocaleString()}</p>
              <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
                <span>↑</span> 2,845 today
              </p>
            </div>
            <div className="w-14 h-14 bg-[#E8DCC4] rounded-full flex items-center justify-center">
              <span className="text-2xl">⭐</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <div className="bg-white rounded-xl shadow-md border border-[#E8DCC4]">
          <div className="p-6 border-b border-[#E8DCC4]">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-[#3D2817]">Recent Orders</h2>
              <span className="text-xs bg-[#E8DCC4] text-[#3D2817] px-3 py-1 rounded-full font-medium">Today</span>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentOrders.map((order, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-[#FAF7F2] rounded-lg hover:bg-[#E8DCC4] transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#3D2817] rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {order.customer.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-[#3D2817]">{order.customer}</p>
                      <p className="text-xs text-[#6B4423]">{order.id} • {order.time}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-[#3D2817]">₹{order.amount}</p>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      order.status === 'Completed' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Selling Products */}
        <div className="bg-white rounded-xl shadow-md border border-[#E8DCC4]">
          <div className="p-6 border-b border-[#E8DCC4]">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-[#3D2817]">Top Selling Products</h2>
              <span className="text-xs bg-[#E8DCC4] text-[#3D2817] px-3 py-1 rounded-full font-medium">This Month</span>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {topSellingProducts.map((product, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-[#FAF7F2] rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#6B4423] rounded-lg flex items-center justify-center text-white font-bold">
                      #{index + 1}
                    </div>
                    <div>
                      <p className="font-semibold text-[#3D2817]">{product.name}</p>
                      <p className="text-xs text-[#6B4423]">{product.category}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-[#3D2817]">₹{product.revenue.toLocaleString()}</p>
                    <p className="text-xs text-[#6B4423]">{product.sold} sold</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Top Customers */}
      <div className="mt-6 bg-white rounded-xl shadow-md border border-[#E8DCC4]">
        <div className="p-6 border-b border-[#E8DCC4]">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-[#3D2817]">Top Customers (Highest XP)</h2>
            <span className="text-xs bg-[#E8DCC4] text-[#3D2817] px-3 py-1 rounded-full font-medium">All Time</span>
          </div>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {topCustomers.map((customer, index) => (
              <div key={index} className="bg-[#FAF7F2] rounded-xl p-4 text-center hover:bg-[#E8DCC4] transition-colors">
                <div className="w-16 h-16 bg-[#3D2817] rounded-full flex items-center justify-center mx-auto mb-3 text-3xl">
                  {customer.avatar}
                </div>
                <p className="font-bold text-[#3D2817]">{customer.name}</p>
                <p className="text-xs text-[#6B4423] mb-2">{customer.phone}</p>
                <div className="flex justify-center gap-4 text-xs">
                  <div>
                    <p className="font-bold text-[#3D2817]">{customer.totalXP.toLocaleString()}</p>
                    <p className="text-[#6B4423]">XP</p>
                  </div>
                  <div>
                    <p className="font-bold text-[#3D2817]">{customer.orders}</p>
                    <p className="text-[#6B4423]">Orders</p>
                  </div>
                </div>
                <div className="mt-3">
                  <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                    index === 0 ? 'bg-yellow-100 text-yellow-700' :
                    index === 1 ? 'bg-gray-200 text-gray-700' :
                    index === 2 ? 'bg-orange-100 text-orange-700' :
                    'bg-[#E8DCC4] text-[#6B4423]'
                  }`}>
                    {index === 0 ? '🥇 Gold' : index === 1 ? '🥈 Silver' : index === 2 ? '🥉 Bronze' : `#${index + 1}`}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;