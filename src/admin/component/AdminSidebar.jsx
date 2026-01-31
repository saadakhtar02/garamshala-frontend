import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Package,
  PlusCircle,
  UtensilsCrossed,
  Users,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Coffee
} from 'lucide-react';

const AdminSidebar = ({ isCollapsed, setIsCollapsed }) => {
  const navigate = useNavigate();

  const menuItems = [
    { path: '/AdminDashboard', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/AdminDashboard/orders', label: 'Orders', icon: Package },
    { path: '/AdminDashboard/add-menu', label: 'Add Menu', icon: PlusCircle },
    { path: '/AdminDashboard/menu-management', label: 'Menu', icon: UtensilsCrossed },
    { path: '/AdminDashboard/customers', label: 'Customers', icon: Users },
  ];

  return (
    <aside
      className={`fixed left-0 top-0 h-screen bg-[#FAF7F2] border-r border-[#E8DCC4] overflow-hidden z-50 transition-all duration-300 ease-in-out ${
        isCollapsed ? 'w-20' : 'w-64'
      }`}
    >
      {/* Header */}
      <div className="h-20 flex items-center justify-between px-4 border-b border-[#E8DCC4]">
        <div className="flex items-center gap-3">
          {/* Logo Icon */}
          <div className="w-10 h-10 rounded-full bg-[#3D2817] flex items-center justify-center text-white flex-shrink-0">
            <Coffee size={20} />
          </div>

          {/* Brand Name */}
          <div
            className={`overflow-hidden transition-all duration-300 ${
              isCollapsed ? 'w-0 opacity-0' : 'w-auto opacity-100'
            }`}
          >
            <h1 className="font-bold text-[#3D2817] whitespace-nowrap">
              Garamshala
            </h1>
            <p className="text-xs text-[#6B4423] whitespace-nowrap">
              Admin Panel
            </p>
          </div>
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setIsCollapsed(prev => !prev)}
          className="w-8 h-8 flex items-center justify-center text-[#3D2817] hover:bg-[#E8DCC4] rounded-lg transition-colors"
        >
          {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className="p-3 space-y-1">
        {menuItems.map(item => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              end
              className={({ isActive }) =>
                `flex items-center rounded-lg px-3 py-2 transition-all duration-300 ${
                  isCollapsed ? 'justify-center' : 'justify-start'
                } ${
                  isActive
                    ? 'bg-[#3D2817] text-white'
                    : 'text-[#6B4423] hover:bg-[#E8DCC4]'
                }`
              }
            >
              <Icon size={20} className="flex-shrink-0" />

              <span
                className={`ml-3 whitespace-nowrap overflow-hidden transition-all duration-300 ${
                  isCollapsed ? 'w-0 opacity-0' : 'w-auto opacity-100'
                }`}
              >
                {item.label}
              </span>
            </NavLink>
          );
        })}
      </nav>

      {/* Logout Button */}
      <div className="absolute bottom-0 w-full p-3 border-t border-[#E8DCC4]">
        <button
          onClick={() => navigate('/AdminLogin')}
          className={`w-full flex items-center rounded-lg px-3 py-2 transition-all duration-300 text-red-600 ${
            isCollapsed ? 'justify-center' : 'justify-start'
          }`}
        >
          <LogOut size={20} className="flex-shrink-0" />
          
          <span
            className={`ml-3 overflow-hidden whitespace-nowrap transition-all duration-300 ${
              isCollapsed ? 'w-0 opacity-0' : 'w-auto opacity-100'
            }`}
          >
            Logout
          </span>
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;