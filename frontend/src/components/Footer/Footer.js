import React from 'react';
import './Footer.css'

function Footer() {
    return (
        <div>
            <div className="row footer-bg p-5" style={{ "backgroundColor": "2B99F2" }}>
                <div className="col-md-4">
                    <h1>ConsultBae</h1>
                    <p>
                        Blending Technology with human intelligence for placing the right talent
                    </p>
                    <p>@ ConsultBae LLP 2020. All rights reserved</p>
                </div>
                <div className="col-md-4">
                <h1 className="footer-heading">Consultbae</h1>
                    <p>
                        Home <br/>
                        Recruitment <br/>
                        Champion CV <br/>
                        Career Counsel <br/>
                    </p>
                </div>
                <div className="col-md-4">
                    <h1 className="footer-heading">Contact us</h1>
                    <i className="fa fa-phone" aria-hidden="true"></i> +91-9310575687 
                    <br />
                    <i className="fa fa-envelope-o" aria-hidden="true"></i> contact@consultbae.com
                    <br />
                    <h1 className="footer-heading">Follow us</h1>
                    <i className="fa fa-youtube-play" aria-hidden="true"></i> &emsp;
                    <i className="fa fa-instagram" aria-hidden="true"></i> &emsp;
                    <i className="fa fa-facebook" aria-hidden="true"></i> &emsp;
                    <i className="fa fa-twitter" aria-hidden="true"></i> &emsp;
                </div>
                
            </div>
        </div>
    );
}

export default Footer;