import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import bg1 from '../svg/bg1.svg';
import bg2 from '../svg/bg2.svg';

function Contact() {
    return (
        <section className="home-services">
        <div >
            {/* <img src={bg1} alt="background svg" className="background-svg-1"/> */}
            <h1 className="text-center"> Contact Us</h1>            
            <div className="stroke-line mx-auto"></div>
            <br />
            <div className="contact-form">
                <div className="row m-0 text-left">
                    <div className="col-md-6 p-5">
                        <p>
                            Leave us a message
                        </p>
                        <Form>
                            <FormGroup>
                                {/* <Label for="name">Name</Label> */}
                                <Input type="text" name="name" id="name" placeholder="Name" />
                            </FormGroup>
                            <FormGroup>
                                {/* <Label for="email">Email Address</Label> */}
                                <Input type="email" name="email" id="email" placeholder="Email Address" />
                            </FormGroup>
                            <FormGroup>
                                {/* <Label for="message">Message</Label> */}
                                {/* <Input type="text" name="message" id="message" placeholder="Your Message" /> */}
                                <Input type="textarea" name="message" id="message" placeholder="Your Message"/>
                            </FormGroup>
                        </Form>
                        <br />
                        <Button outline color="primary" className="rounded-button">
                            Send
                        </Button>{' '}
                        
                    </div>
                    <div className="col-md-6 p-5 my-md-5">
                        <div>
                            <i className="fa fa-map-marker" aria-hidden="true"></i> &emsp;
                            Gurgaon, Haryana, India
                            <br /> <br />
                            <i className="fa fa-phone" aria-hidden="true"></i> &emsp;
                            +91-9310575687
                            <br /> <br />
                            <i className="fa fa-envelope" aria-hidden="true"></i>  &emsp;
                            contact@consultbae.com
                            <br /> <br />
                            <i className="fa fa-youtube-play" aria-hidden="true"></i> &emsp;
                            <i className="fa fa-instagram" aria-hidden="true"></i> &emsp;
                            <i className="fa fa-facebook" aria-hidden="true"></i> &emsp;
                            <i className="fa fa-twitter" aria-hidden="true"></i> &emsp;
                        </div>                    
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
}

export default Contact;