import React from 'react';

import reachOut from '../svg/reachOut.svg';
import connect from '../svg/connect.svg';
import expert from '../svg/expert.svg';

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
                    <img src={reachOut} alt="reachOut svg" className="card-svg-image m-3" />
                    <h3>Reach Out</h3>
                    <p className="text-grey mt-3">
                        Fill in your details and relax
                    </p>
                </div>
            </div>

            <div className="col-md-4 p-3">
                <div className="service-card minh-300">
                    <img src={connect} alt="connect svg" className="card-svg-image m-3" />
                    <h3>Understand and Connect</h3>
                    <p className="text-grey mt-3">
                        Basic discussion on your story and directing you to our right expert
                    </p>
                </div>
            </div>

            <div className="col-md-4 p-3">
                <div className="service-card minh-300">
                    <img src={expert} alt="expert svg" className="card-svg-image m-3" />
                    <h3>Counsel with Expert</h3>
                    <p className="text-grey mt-3">
                        Detailed discussion with our experts
                    </p>
                </div>
            </div>
        </div>
    </section>

  );
};

export default CardBanner;