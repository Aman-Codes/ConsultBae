import React from 'react';
import { Button } from 'reactstrap';

import upload from '../svg/upload.svg';
import portfolio from '../svg/portfolio.svg';
import getCV from '../svg/getCV.svg';

function CardBanner() {
  return (
    <section className="mx-5">
        <div className="row m-5">
            <div className="col-md-4 p-3">
                <div className="service-card">
                    <img src={upload} alt="upload svg" className="card-svg-image m-3" />
                    <h3>Upload Resume</h3>
                    <p className="text-grey">
                    Upload your existing resume and relax
                    </p>
                </div>
            </div>

            <div className="col-md-4 p-3">
                <div className="service-card">
                    <img src={portfolio} alt="portfolio svg" className="card-svg-image m-3" />
                    <h3>Chanpion CV</h3>
                    <p className="text-grey">
                        End to End recruitment solution to complement the growth of organisation
                    </p>
                    <br />
                    <Button outline color="primary" className="rounded-button">
                        Learn More <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </Button>{' '}
                </div>
            </div>

            <div className="col-md-4 p-3">
                <div className="service-card">
                    <img src={getCV} alt="getCV svg" className="card-svg-image m-3" />
                    <h3>Career Counsel</h3>
                    <p className="text-grey">
                        End to End recruitment solution to complement the growth of organisation
                    </p>
                    <br />
                    <Button outline color="primary" className="rounded-button">
                        Learn More <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </Button>{' '}
                </div>
            </div>
            <div className="col-md-4 p-3">
            </div>
        </div>
    </section>

  );
};

export default CardBanner;