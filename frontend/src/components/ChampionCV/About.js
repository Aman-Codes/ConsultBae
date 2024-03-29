import React from 'react';
import { Button } from 'reactstrap';
import bg3 from '../svg/bg3.svg';

function About(props) {
    return (
        <section className="side-margin top-margin">
            <div>
            <img src={bg3} alt="background svg" className="background-svg-3"/>
            </div>
            <div className="row m-0">
                <div className="col-md-7"> 
                    <div className="p-md-5 my-5">
                        <h1>What’s make ConsultBae super effective?</h1>
                        <div className="stroke-line"></div>
                        <br />
                        <p className="text-grey">
                            ConsultBae’s specially designed portfolio helps you to grab the attention of employers and open doors for new opportunities. 
                            Most importantly, we guide you in selling your strongest skills.
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
                                Quickly separate wheat from chaff
                            </div>
                            <div className="m-2">
                                <i className="fa fa-check" aria-hidden="true"></i>&emsp;
                                Watch for potential red flags
                            </div>
                            <div className="m-2">
                                <i className="fa fa-check" aria-hidden="true"></i>&emsp;
                                Tailored portfolio by experts
                            </div>
                            <div className="m-2">
                                <i className="fa fa-check" aria-hidden="true"></i>&emsp;
                                Pay attention to word choice
                            </div>
                            <div className="m-2">
                                <i className="fa fa-check" aria-hidden="true"></i>&emsp;
                                Get the right content in place
                            </div>
                            <div className="m-2">
                                <i className="fa fa-check" aria-hidden="true"></i>&emsp;
                                Take the current hiring market into account
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default About;