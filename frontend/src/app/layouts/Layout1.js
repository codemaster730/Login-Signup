import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const Layout = ({ children }) => (
    <React.Fragment>
        <Header />
        <div className="auth-page">
            {children}
        </div>
        <Footer />
    </React.Fragment>
);

export default Layout;