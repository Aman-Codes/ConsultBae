import React from 'react';
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <div>
            <div className="row footer-bg p-md-5 py-5 px-3 m-0">
                <br/>
                <div className="col-md-4 px-md-5">
                    <h1>ConsultBae</h1>
                    <p>
                        Blending Technology with human intelligence for placing the right talent
                    </p>
                    <p>@ ConsultBae LLP 2020. All rights reserved</p>
                </div>
                <div className="col-md-4 px-md-5">
                <h1 className="footer-heading">ConsultBae</h1>
                    <p className="white-link">
                        <Link to="/">
                            Home
                        </Link><br/>
                        <Link to="/recruitment">
                            Recruitment
                        </Link><br/>
                        <Link to="/championcv">
                            Champion CV 
                        </Link><br/>
                        <Link to="/careercounsel">
                            Career Counsel
                        </Link><br/>
                    </p>
                </div>
                <div className="col-md-4 px-md-5">
                    <h1 className="footer-heading">Contact us</h1>
                    <i className="fa fa-phone" aria-hidden="true"></i> +91-9310575687 
                    <br />
                    <i className="fa fa-envelope-o" aria-hidden="true"></i> contact@consultbae.com
                    <br />
                    <h1 className="footer-heading">Follow us</h1>
                    <div className="white-link">
                        <a href="https://www.linkedin.com/company/consultbae/">
                            <i className="fa fa-linkedin" aria-hidden="true"></i>
                        </a> &emsp;
                        <i className="fa fa-instagram" aria-hidden="true"></i> &emsp;
                        <i className="fa fa-facebook" aria-hidden="true"></i> &emsp;
                        <i className="fa fa-twitter" aria-hidden="true"></i> &emsp;
                    </div>
                </div>   
                <br/>             
            </div>
        </div>
    );
}

export default Footer;