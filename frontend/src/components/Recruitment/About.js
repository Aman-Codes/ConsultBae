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
                            Talent hiring is an intensive and time-taking process. 
                            ConsultBae is your strategic recruitment partner that lets you focus on determining the best course for your business without worrying about execution. 
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
                                Do culture centric sourcing
                            </div>
                            <div className="m-2">
                                <i className="fa fa-check" aria-hidden="true"></i>&emsp;
                                Use advanced new age technology.
                            </div>
                            <div className="m-2">
                                <i className="fa fa-check" aria-hidden="true"></i>&emsp;
                                Reduce the hiring TAT exponentially.
                            </div>
                            <div className="m-2">
                                <i className="fa fa-check" aria-hidden="true"></i>&emsp;
                                Screen via Industry Veterans.
                            </div>
                            <div className="m-2">
                                <i className="fa fa-check" aria-hidden="true"></i>&emsp;
                                Provide quality pre-vetted candidates.
                            </div>
                            <div className="m-2">
                                <i className="fa fa-check" aria-hidden="true"></i>&emsp;
                                Stay together till onboarding is complete
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default About;