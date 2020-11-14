
import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import TopBanner from './TopBanner';
import CardBanner from './CardBanner';
import About from './About';
import RecruitmentPopup from '../Popup/RecruitmentPopup';

import './Recruitment.css';

function Recruitment() {
    return (
        <div>
            <Header />
            <TopBanner />
            <CardBanner />
            <About />
            <RecruitmentPopup />
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

export default Recruitment;