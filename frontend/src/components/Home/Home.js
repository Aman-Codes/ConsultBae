import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import TopBanner from './TopBanner';
import Services from './Services';
import CardBanner from './CardBanner';
import About from './About';
import Contact from './Contact';

import './Home.css';

function Home() {
    return (
        <div>
            <Header />
            <TopBanner />
            <Services />
            <CardBanner />
            <About />
            <Contact />
            <Footer />
        </div>
    );
}

export default Home;