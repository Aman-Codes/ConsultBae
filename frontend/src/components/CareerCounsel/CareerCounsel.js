
import React, { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import TopBanner from './TopBanner';
import CardBanner from './CardBanner';
import About from './About';
import CareerCounselPopup from '../Popup/CareerCounselPopup';

function CareerCounsel() {
    const [show, setShow] = useState(false);
    return (
        <div>
            <Header />
            <TopBanner/>
            <CardBanner />
            <About show={show} setShow={setShow}/>
            <CareerCounselPopup show={show} setShow={setShow}/>
            <Footer />
        </div>
    );
}

export default CareerCounsel;