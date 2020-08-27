import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/index.scss';
import layoutStyles from './layout.module.scss';

const Layout = ({ children }) => {
    return (
        <div className={layoutStyles.container}>
            <main className={layoutStyles.main}>
                <Header />
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
