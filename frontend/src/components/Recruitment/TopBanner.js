import React from 'react';
import { Button } from 'reactstrap';
import recruitmentBanner from '../svg/recruitmentBanner.svg';

function TopBanner() {
    return (
        <section className="topBannerSection side-margin">
        <div>
            <div className="row m-0">
                <div className="col-md-5 mt-5">
                    <h1>Accelerating Recruitment</h1>
                    <br />
                    <p className="text-grey">
                        Are you facing the prime challenge of delayed hiring closures and wrong cultural fit candidates? 
                        Let’s decode it together with ConsultBae.
                        <br /><br />
                        Connect with our recruitment specialists. 
                    </p>
                    <br />
                    <Button color="primary" className="rounded-button button-shadow" href="#services">
                        Learn More &emsp;<i className="fa fa-long-arrow-down" aria-hidden="true"></i>
                    </Button>
                </div>
                <div className="col-md-7">
                    <img src={recruitmentBanner} alt="svg" className="home-right-img" />
                </div>
            </div>
        </div>
        </section>

    );
}

export default TopBanner;