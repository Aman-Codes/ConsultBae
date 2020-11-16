import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import {Button, Form, FormGroup, Input} from 'reactstrap';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

import './Popup.css';

function CareerCounselPopup(props) {
    const [values, setValues] = useState({
        name: '',
        email:'',
        phone: '',
        query: '',
    });

    const {
        name,
        email,
        phone,
        query
    } = values;

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        axios({
            method: 'POST',
            url: `${process.env.REACT_APP_API}/api/careercounsel`,
            data: {        
                name,
                email,
                phone,
                query
            }
        })
            .then(response => {
                console.log('Respone fron server ', response);
                toast.success('Successfully submitted form');
            })
            .catch(error => {
                console.log('Respone fron server ', error);
                toast.error("An Error occured");
            });
    };
  
    return (
        <div>
            <ToastContainer />
            {/* <Button color="primary" onClick={() => props.setShow(true)}>
                Click to Open Modal
            </Button>         */}
            <Modal
                show={props.show}
                onHide={() => props.setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Fill in the details
                    </Modal.Title>
                </Modal.Header>
                <div className="row m-0">
                    <div className="col-md-6">
                        <div className="m-3">
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
                                        type="tel" 
                                        name="phone" 
                                        id="phone" 
                                        placeholder="Phone Number" 
                                        defaultValue={phone}
                                        onChange={handleChange('phone')}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Input 
                                        type="textarea" 
                                        name="query" 
                                        id="query" 
                                        placeholder="Your Query"
                                        defaultValue={query}
                                        onChange={handleChange('query')}
                                    />
                                </FormGroup>
                            </Form>
                            <br />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="m-3 p-3">
                            <p className="text-grey">
                            Our experts will get back to you to have basic understanding on call of 20 to 30 mins.
                            </p>
                            <Button outline color="primary" className="rounded-button" onClick={clickSubmit}>
                                Submit &nbsp; <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                            </Button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
  
export default CareerCounselPopup;