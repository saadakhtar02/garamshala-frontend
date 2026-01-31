import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from '../component/AdminSidebar';

function AdminLayout() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <section className='flex min-h-screen bg-[#FAF7F2]'>
      {/* Sidebar */}
      <AdminSidebar 
        isCollapsed={isSidebarCollapsed} 
        setIsCollapsed={setIsSidebarCollapsed} 
      />
      
      {/* Main Content */}
      <div 
        className={`flex-1 transition-all duration-300 ${
          isSidebarCollapsed ? 'ml-20' : 'ml-64'
        }`}
      >
        <Outlet />
      </div>
    </section>
  );
}

export default AdminLayout;