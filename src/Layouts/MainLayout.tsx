import React from 'react';
import { Header } from '../Components/Header';
import Footer from '../Components/Footer';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
       <>
        <Header/>
        {children}
        <Footer/>
        </>
    );
}

export default MainLayout;
