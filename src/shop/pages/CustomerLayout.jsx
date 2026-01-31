import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomerNavbar from '../components/CustomerNavbar';

function CustomerLayout() {
    return (
        <>
            <section className='flex flex-col min-h-screen'>
                <CustomerNavbar />
                <div className="">
                    <Outlet />
                </div>
            </section>
        </>
    );
}

export default CustomerLayout;
