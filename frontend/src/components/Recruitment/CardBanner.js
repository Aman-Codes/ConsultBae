import React from 'react';

import expert from '../svg/expert.svg';
import portfolio from '../svg/portfolio.svg';
import handshake from '../svg/handshake.svg';


function CardBanner() {
  return (
    <section className="m-0 p-0">
        <div className="text-center">
            <h1> How it works ?</h1>
            <div className="stroke-line mx-auto"></div>
            <br />
        </div>
        <div className="row mx-md-5">
            <div className="col-md-4 p-3 ">
                <div className="service-card minh-300">
                    <img src={expert} alt="expert svg" className="card-svg-image m-3" />
                    <h3>What’s your story </h3>
                    <p className="text-grey mt-3">
                        Discussion with client for better understanding of company and refining the job description
                    </p>
                </div>
            </div>

            <div className="col-md-4 p-3">
                <div className="service-card minh-300">
                    <img src={portfolio} alt="portfolio svg" className="card-svg-image m-3" />
                    <h3>Screening</h3>
                    <p className="text-grey mt-3">
                        Sourcing right resumes via technology and shortlisting candidates with industry veterans
                    </p>
                </div>
            </div>

            <div className="col-md-4 p-3">
                <div className="service-card minh-300">
                    <img src={handshake} alt="handshake svg" className="card-svg-image m-3" />
                    <h3>Swift Closure</h3>
                    <p className="text-grey mt-3">
                        You got the right talent and Let’s onboard together
                    </p>
                </div>
            </div>
        </div>
    </section>

  );
};

export default CardBanner;