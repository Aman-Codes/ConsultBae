import React from 'react';
import { Button } from 'reactstrap';
import homeBanner from '../svg/homeBanner.svg';

function TopBanner() {
    return (
        <section className="topBannerSection side-margin">
        <div>
            <div className="row m-0">
                <div className="col-md-5 mt-5">
                    <h1>Decoding Talent and Culture</h1>
                    <br />
                    <p className="text-grey">Blending Technology with human intelligence for placing the right talent</p>
                    <br />
                    <Button color="primary" className="rounded-button button-shadow" href="#services">
                        Learn More <i className="fa fa-long-arrow-down" aria-hidden="true"></i>
                    </Button>
                </div>
                <div className="col-md-6">
                    <img src={homeBanner} alt="svg" className="home-right-img" />
                </div>
            </div>
        </div>
        </section>

    );
}

export default TopBanner;