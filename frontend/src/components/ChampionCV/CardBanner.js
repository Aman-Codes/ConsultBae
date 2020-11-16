import React from 'react';

import upload from '../svg/upload.svg';
import portfolio from '../svg/portfolio.svg';
import getCV from '../svg/getCV.svg';

function CardBanner() {
  return (
    <section className="text-center top-margin container">
        <div>
            <h1 id="services"> How it works ?</h1>
            <div className="stroke-line mx-auto"></div>
            <br />
        </div>
        <div className="row m-0">

        <div className="col-md-4 p-3 d-flex align-items-stretch">
                <div className="service-card flex-fill">
                    <img src={upload} alt="upload svg" className="card-svg-image m-3" />
                    <h3>Upload Resume</h3>
                    <p className="text-grey mt-3">
                        Upload your existing resume and relax
                    </p>
                </div>
            </div>

            <div className="col-md-4 p-3 d-flex align-items-stretch">
                <div className="service-card flex-fill">
                <img src={portfolio} alt="portfolio svg" className="card-svg-image m-3" />
                    <h3>Champion CV</h3>
                    <p className="text-grey mt-3">
                        Our expert will get in touch with you to work and finalise your portfolio
                    </p>
                </div>
            </div>

            <div className="col-md-4 p-3 d-flex align-items-stretch">
                <div className="service-card flex-fill">
                    <img src={getCV} alt="getCV svg" className="card-svg-image m-3" />
                    <h3>Career Counsel</h3>
                    <p className="text-grey mt-3">
                        Process the payment and check your inbox
                    </p>
                </div>
            </div>
        </div>
    </section>

  );
};

export default CardBanner;