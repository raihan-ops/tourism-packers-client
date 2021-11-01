import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="">
            <footer class="w-100 py-4 flex-shrink-0">
                <div class="container py-4">
                    <div class="row gy-4 gx-5">
                        <div class="col-lg-4 col-md-6">
                            <h5 class="h1 text-white">Tourism Packers</h5>
                            <p class="small text-muted">Tourism is the activities of people traveling to and staying in places outside their usual environment for leisure, business or other purposes for not more than one consecutive year..</p>
                            <p class="small text-muted mb-0">&copy; Copyrights. All rights reserved. Tourism</p>
                        </div>
                        <div class="col-lg-2 col-md-6">
                            <h5 class="text-white mb-3">Quick links</h5>
                            <ul class="list-unstyled text-muted">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Get started</a></li>
                                <li><a href="#">FAQ</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-2 col-md-6">
                            <h5 class="text-white mb-3">Quick links</h5>
                            <ul class="list-unstyled text-muted">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Get started</a></li>
                                <li><a href="#">FAQ</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <h5 class="text-white mb-3">Newsletter</h5>
                            <p class="small text-muted">Newsletters give you direct access to your audience's inbox, allowing you to share engaging content, promote sales and drive traffic to your website.</p>
                            <form action="#">
                                <div class="input-group mb-3">
                                    <input class="form-control" type="text" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                    <button class="btn btn-primary" id="button-addon2" type="button"><i class="fas fa-paper-plane"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;