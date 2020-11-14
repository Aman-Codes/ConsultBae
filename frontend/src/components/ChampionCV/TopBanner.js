import React from 'react';
import { Button } from 'reactstrap';
import ChampionCVBanner from '../svg/ChampionCVBanner.svg';

function TopBanner() {
    return (
        <section>
        <div className="mx-5 mt-3">
            <div className="row m-0">
                <div className="offset-md-1 col-md-5 p-5 mt-5">
                    <h1>Champion CV</h1>
                    <br />
                    <p className="text-grey">
                        Does your CV tell your story?
                        <br /><br />
                        Connect with our industry experts and get your amazing portfolio built
                    </p>
                    <br />
                    <Button color="primary" className="rounded-button">
                        Learn More &emsp;<i className="fa fa-long-arrow-down" aria-hidden="true"></i>
                    </Button>
                </div>
                <div className="ccol-md-6 p-md-5">
                    <img src={ChampionCVBanner} alt="svg" className="home-right-img" />
                </div>
            </div>
        </div>
        </section>

    );
}

export default TopBanner;