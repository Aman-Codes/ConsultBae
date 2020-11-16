import React from 'react';
import { Button } from 'reactstrap';
import championCVBanner from '../svg/championCVBanner.svg';

function TopBanner(props) {
    return (
        <section className="topBannerSection side-margin">
        <div>
            <div className="row m-0">
                <div className="col-md-5 mt-5">
                    <h1>Champion CV</h1>
                    <br />
                    <p className="text-grey">
                        Does your CV tell your story?
                        <br /><br />
                        Connect with our industry experts and get your amazing portfolio built
                    </p>
                    <br />
                    <Button color="primary" className="rounded-button button-shadow" href="#services">
                        Learn More &emsp;<i className="fa fa-long-arrow-down" aria-hidden="true"></i>
                    </Button>
                </div>
                <div className="col-md-7">
                    <img src={championCVBanner} alt="svg" className="home-right-img" />
                </div>
            </div>
        </div>
        </section>

    );
}

export default TopBanner;