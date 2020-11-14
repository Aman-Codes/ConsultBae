import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import {Button, Form, FormGroup, Input} from 'reactstrap';

import './Popup.css';

function RecruitmentPopup() {
    const [show, setShow] = useState(false);
  
    return (
        <div>
            <Button color="primary" onClick={() => setShow(true)}>
                Click to Open Modal
            </Button>
        
            <Modal
                show={show}
                onHide={() => setShow(false)}
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
                                    <Input type="text" name="name" id="name" placeholder="Name" />
                                </FormGroup>
                                <FormGroup>
                                    <Input type="email" name="email" id="email" placeholder="Email Address" />
                                </FormGroup>
                                <FormGroup>
                                    <Input type="text" name="phone" id="phone" placeholder="Phone Number" />
                                </FormGroup>
                                <FormGroup>
                                    <Input type="text" name="company" id="company" placeholder="Company Name"/>
                                </FormGroup>
                            </Form>
                            <br />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="m-3 p-3">
                            <p className="text-grey">
                            We solve the recruitment hassles to get the right cultural and technical fit candidate to the organisation.
                            </p>
                            <Button outline color="primary" className="rounded-button">
                                Submit &nbsp; <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                            </Button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
  
export default RecruitmentPopup;