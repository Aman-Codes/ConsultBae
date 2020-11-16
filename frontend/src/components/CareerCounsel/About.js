import React from 'react';
import { Button } from 'reactstrap';

function About(props) {
    return (
        <section>
            <div className="row m-0">
                <div className="offset-md-1 col-md-6"> 
                    <div className="p-md-5 m-md-5 my-5">
                        <h1>What’s make ConsultBae super effective?</h1>
                        <div className="stroke-line"></div>
                        <br />
                        <p className="text-grey">
                            We at ConsultBae assess a wide set of psychological and behavioral traits along with you to make the right and informed decision about your career.
                        </p>
                        <br />
                        <Button outline color="primary" className="rounded-button" onClick={() => props.setShow(true)}>
                            Try ConsultBae <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </Button>{' '}
                        <br />
                    </div>                    
                </div>
                <div className="col-md-5"> 
                    <div className="my-5 my-md-5 px-md-0 mr-md-5 py-md-5">
                        <div className="service-card">
                            <h3 className="text-blue">We,</h3>
                            <div className="m-2">
                                <i className="fa fa-check" aria-hidden="true"></i>&emsp;
                                Evaluate career aspirations.
                            </div>
                            <div className="m-2">
                                <i className="fa fa-check" aria-hidden="true"></i>&emsp;
                                Connect with experienced career experts
                            </div>
                            <div className="m-2">
                                <i className="fa fa-check" aria-hidden="true"></i>&emsp;
                                Follow analytical driven approach
                            </div>
                            <div className="m-2">
                                <i className="fa fa-check" aria-hidden="true"></i>&emsp;
                                Do career strategy planning
                            </div>
                            <div className="m-2">
                                <i className="fa fa-check" aria-hidden="true"></i>&emsp;
                                Provide a milestone tracking sheet
                            </div>
                            <div className="m-2">
                                <i className="fa fa-check" aria-hidden="true"></i>&emsp;
                                Build career report (at a premium)
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default About;