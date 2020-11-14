import React from 'react';
import { Button } from 'reactstrap';

import recruitment from '../svg/recruitment.svg';
import championCV from '../svg/championCV.svg';
import careerCounsel from '../svg/careerCounsel.svg';

function CardBanner() {
  return (
    <section className="mx-md-5">
        <div className="row m-md-5">
            <div className="col-md-4 p-3">
                <div className="service-card">
                    <img src={recruitment} alt="recruitment svg" className="card-svg-image m-md-3" />
                    <h3>Recruitment</h3>
                    <p className="text-grey mt-3">
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
                    <img src={championCV} alt="championCV svg" className="card-svg-image m-md-3" />
                    <h3>Champion CV</h3>
                    <p className="text-grey mt-3">
                        Transform your resume into an impressive portfolio
                    </p>
                    <br />
                    <Button outline color="primary" className="rounded-button">
                        Learn More <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </Button>{' '}
                </div>
            </div>

            <div className="col-md-4 p-3">
                <div className="service-card">
                    <img src={careerCounsel} alt="careerCounsel svg" className="card-svg-image m-md-3" />
                    <h3>Career Counsel</h3>
                    <p className="text-grey mt-3">
                        Scientifically plan your career with the help of Industry Veterans & AI enabled Technologies
                    </p>
                    <br />
                    <Button outline color="primary" className="rounded-button">
                        Learn More <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </Button>{' '}
                </div>
            </div>
        </div>
    </section>

  );
};

export default CardBanner;