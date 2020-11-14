
import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import TopBanner from './TopBanner';
import CardBanner from './CardBanner';
import About from './About';

import './CareerCounsel.css';

function CareerCounsel() {
    return (
        <div>
            <Header />
            <TopBanner />
            <CardBanner />
            <About />
            {/* <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br /> */}
            <Footer />
        </div>
    );
}

export default CareerCounsel;