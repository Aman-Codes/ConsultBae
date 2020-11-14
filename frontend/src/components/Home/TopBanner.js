import React from 'react';
import { Button } from 'reactstrap';
import homeBanner from '../svg/homeBanner.svg';

function TopBanner() {
    return (
        <section>
        <div className="mx-md-5 mt-3">
            <div className="row m-0">
                <div className="offset-md-1 col-md-5 p-md-5 mt-5">
                    <h1>Decoding Talent and Culture</h1>
                    <br />
                    <p className="text-grey">Blending Technology with human intelligence for placing the right talent</p>
                    <br />
                    <Button color="primary" className="rounded-button">
                        Learn More <i className="fa fa-long-arrow-down" aria-hidden="true"></i>
                    </Button>
                </div>
                <div className="col-md-6 p-5">
                    <img src={homeBanner} alt="svg" className="home-right-img" />
                </div>
            </div>
        </div>
        </section>

    );
}

export default TopBanner;