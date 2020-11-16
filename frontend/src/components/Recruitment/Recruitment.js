
import React, { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import TopBanner from './TopBanner';
import CardBanner from './CardBanner';
import About from './About';
import RecruitmentPopup from '../Popup/RecruitmentPopup';

function Recruitment() {
    const [show, setShow] = useState(false);
    return (
        <div>
            <Header />
            <TopBanner/>
            <CardBanner />
            <About show={show} setShow={setShow}/>
            <RecruitmentPopup show={show} setShow={setShow}/>
            <Footer />
        </div>
    );
}

export default Recruitment;