import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import bg1 from '../svg/bg1.svg';
import bg2 from '../svg/bg2.svg';

function Contact() {
    const [values, setValues] = useState({
        name: '',
        email:'',
        message: '',
    });

    const {
        name,
        email,
        message,
    } = values;

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        axios({
            method: 'POST',
            url: `https://formspree.io/f/mwkwreke`,
            data: {        
                name,
                email,
                message,
            }
        })
            .then(response => {
                //console.log('Respone fron server ', response);
                toast.success('Successfully submitted form');
            })
            .catch(error => {
                //console.log('Respone fron server ', error);
                toast.error("An Error occured");
            });
    };

    return (
        <section className="home-services">
        <div>
            <ToastContainer />
            <div>
            <img src={bg1} alt="background svg" className="background-svg-1"/>
            </div>      
            <div>
            <img src={bg2} alt="background svg" className="background-svg-2"/>
            </div>       
            <h1 className="text-center"> Contact Us</h1>            
            <div className="stroke-line mx-auto"></div>
            <br />
            <div className="contact-form m-2">
                <div className="row m-0 text-left">
                    <div className="col-md-6 p-5">
                        <p>
                            Leave us a message
                        </p>
                        <Form>
                            <FormGroup>
                                <Input 
                                    type="text" 
                                    name="name" 
                                    id="name" 
                                    placeholder="Name" 
                                    defaultValue={name}
                                    onChange={handleChange('name')}  
                                />
                            </FormGroup>
                            <FormGroup>
                                <Input 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    placeholder="Email Address" 
                                    defaultValue={email}
                                    onChange={handleChange('email')}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Input 
                                    type="textarea" 
                                    name="message" 
                                    id="message" 
                                    placeholder="Your Message"
                                    defaultValue={message}
                                    onChange={handleChange('message')}
                                />
                            </FormGroup>
                        </Form>
                        <br />
                        <Button outline color="primary" className="rounded-button" onClick={clickSubmit}>
                            Send
                        </Button>{' '}
                        
                    </div>
                    <div className="col-md-6 p-5 my-md-5">
                        <div>
                            <i className="fa fa-map-marker" aria-hidden="true"></i> &emsp;
                            Gurgaon, Haryana, India
                            <br /> <br />
                            <i className="fa fa-phone" aria-hidden="true"></i> &emsp;
                            91-9310705018 
                            <br /> <br />
                            <i className="fa fa-envelope" aria-hidden="true"></i>  &emsp;
                            contact@consultbae.com
                            <br /> <br />
                            <div className="black-link">
                                <a href="https://www.linkedin.com/company/consultbae/">
                                <i className="fa fa-linkedin" aria-hidden="true"></i>
                                </a> &emsp;
                                <a href="https://www.instagram.com/consultbae.official/">
                                    <i className="fa fa-instagram" aria-hidden="true"></i>
                                </a> &emsp;
                                <a href="https://www.facebook.com/ConsultBae">
                                    <i className="fa fa-facebook" aria-hidden="true"></i>
                                </a> &emsp;
                                <i className="fa fa-twitter" aria-hidden="true"></i> &emsp;
                            </div>

                        </div>                    
                    </div>
                </div>
            </div>            
        </div>
        </section>
    );
}

export default Contact;