import React, { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import TopBanner from './TopBanner';
import CardBanner from './CardBanner';
import About from './About';
import ChampionCVPopup from '../Popup/ChampionCVPopup';

import './ChampionCV.css';

function ChampionCV() {
    const [show, setShow] = useState(false);
    return (
        <div>
            {/* <Header /> */}
            <TopBanner show={show} setShow={setShow}/>
            <CardBanner />
            <About show={show} setShow={setShow} />
            <ChampionCVPopup show={show} setShow={setShow}/>
            <Footer />
        </div>
    );
}

export default ChampionCV;