import React, { component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa';
class Footer extends React.Component {
    render() {
        return (
            <>
                <style>
                    {`
                section
                {
                    padding: 0em 3em;
                }
                  
                `}
                </style>

                <div className="footer-hero">
                    <section className="footer-first">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-2 col-sm-2 col-xs-12 text-center"><img src="../assets/img/uploads/2021/01/Asset-1@8x-copy.png" alt="img1" /></div>
                                    <div className="col-lg-2 col-sm-2 col-xs-12 text-center"><img src="../assets/img/uploads/2021/01/Asset-4@8x-copy.png" alt="img2" /></div>
                                    <div className="col-lg-2 col-sm-2 col-xs-12 text-center"><img src="../assets/img/uploads/2021/01/Asset-5@8x-copy.png" alt="img3" /></div>
                                    <div className="col-lg-2 col-sm-2 col-xs-12 text-center"><img src="../assets/img/uploads/2021/01/Asset-2@8x-copy.png" alt="img4" /></div>
                                    <div className="col-lg-2 col-sm-2 col-xs-12 text-center"><img src="../assets/img/uploads/2021/01/Asset-6@8x-copy.png" alt="img5" /></div>
                                    <div className="col-lg-2 col-sm-2 col-xs-12 text-center"><img src="../assets/img/uploads/2021/01/Asset-7@8x-copy.png" alt="img6" /></div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="footer-main mt-5">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-5 col-sm-5">
                                    <a href='/'> <img src='../assets/img/uploads/2021/01/Asset-19@8x.png' alt='logo' className='mt-n3' />     </a>
                                    <p>We are here to make a change. A change to a healthier form of living, with our extensive range of green and fresh products grown with the process of Hydroponics and Soil-less techniques, we aim to provide the quality harvest to promote healthy living.</p>
                                    <ul className='d-flex footer-social'>
                                        <li><a href=""><FaFacebookF /></a></li>
                                        <li><a href=""><FaInstagram /></a></li>
                                        <li><a href=""><FaLinkedin /></a></li>
                                    </ul>
                                </div>
                                <div className="col-lg-3 col-sm-3">
                                    <h2 className='f-head'>Category</h2>
                                    <ul className='footer-cat'>
                                        <li><a href="">Vegetables</a></li>
                                        <li><a href="">Fruits</a></li>
                                        <li><a href="">Soil Less</a></li>
                                        <li><a href="">Microgreens</a></li>
                                        <li><a href="">Hydroponics</a></li>
                                    </ul>
                                </div>

                                <div className="col-lg-4 col-sm-4">
                                    <h2 className='f-head'>Contact</h2>
                                    <ul className='footer-cat contact'>
                                        <li>(+91) 96 4881 4881</li>

                                        <li>3/306 Vinamra Khand, Gomti Nagar, Lucknow</li>
                                        <li>info@Orgeen.com</li>
                                        <li><a href="/terms-and-conditions">Terms and Conditions</a></li>
                                        <li><a href="/privacy-policy">Privacy Policy</a></li>
                                        <li><a href="/refund-cancellation">Refund and Cancellation Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="container">
                            <h6>© 2022 ORGEEN.</h6>
                        </div>

                    </div>
                </div>
            </>
        )
    }

}
export default Footer