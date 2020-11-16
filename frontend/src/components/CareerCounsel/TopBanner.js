import React from 'react';
import { Button } from 'reactstrap';
import careerCounselBanner from '../svg/careerCounselBanner.svg';

function TopBanner() {
    return (
        <section className="topBannerSection side-margin">
        <div>
            <div className="row m-0">
                <div className="col-md-5 mt-5">
                    <h1>Your Career Is Your Life.</h1>
                    <br />
                    <p className="text-grey">
                        Are you stuck in taking a right and informed decision?
                        <br /><br />
                        Counsel with our team of experts consisting of business leaders and career counsellors.
                    </p>
                    <br />
                    <Button color="primary" className="rounded-button button-shadow" href="#services">
                        Learn More &emsp;<i className="fa fa-long-arrow-down" aria-hidden="true"></i>
                    </Button>
                </div>
                <div className="col-md-7">
                    <img src={careerCounselBanner} alt="svg" className="home-right-img" />
                </div>
            </div>
        </div>
        </section>

    );
}

export default TopBanner;