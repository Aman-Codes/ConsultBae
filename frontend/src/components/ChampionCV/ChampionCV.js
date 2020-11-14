import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import TopBanner from './TopBanner';
import CardBanner from './CardBanner';
import About from './About';
import ChampionCVPopup from '../Popup/ChampionCVPopup';

import './ChampionCV.css';

function ChampionCV() {
    return (
        <div>
            <Header />
            <TopBanner />
            <CardBanner />
            <About />
            <ChampionCVPopup />
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

export default ChampionCV;