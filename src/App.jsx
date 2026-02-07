import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Payment from './shop/pages/Payment';
import CustomerLayout from './shop/pages/CustomerLayout';
import CustomerMenu from './shop/pages/CustomerMenu';
import CustomerViewCart from './shop/pages/CustomerViewCart';
import CustomerOrderHistory from './shop/pages/CustomerOrderHistory';
import CustomerProfile from './shop/pages/CustomerProfile';
import CustomerRegister from './shop/pages/CustomerRegister';
import CustomerLogin from './shop/pages/CustomerLogin';
import AdminLayout from './admin/pages/AdminLayout';
import AdminDashboard from './admin/pages/AdminDashboard';
import AdminLogin from './admin/pages/AdminLogin';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/register" element={<CustomerRegister />} />
          <Route path="/login" element={<CustomerLogin />} />
          <Route path="/AdminLogin" element={<AdminLogin />} />

          <Route path='/Menu' element={<CustomerLayout />} >
            <Route index element={<CustomerMenu />} />
            <Route path="Cart" element={<CustomerViewCart />} />
            <Route path="Cart/Payment" element={<Payment />} />
            <Route path="Orders" element={<CustomerOrderHistory />} />
            <Route path="Profile" element={<CustomerProfile />} />
          </Route>

          <Route path='/AdminDashboard' element={<AdminLayout />} >
            <Route index element={<AdminDashboard />} />
            {/* <Route path="cart" element={<CustomerViewCart />} /> */}
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;