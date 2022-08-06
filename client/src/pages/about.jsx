import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
class About extends React.Component {
    render() {
        return (
            <>
                            <div className="container-fluid bg-main pt-5">
                    <section className="about-s">
                        <div className="row pt-5 pb-5">
                            <div className="col-lg-7 col-xs-12 col-sm-7">
                                <div className="img-a-f">
                                    <div className="the-shape mt-5"></div>
                                    <img className="img-f" src="assets/img/uploads/2021/01/scott-evans-ScoYEG5LEgc-unsplash.jpg" alt="" />
                                    <img className="img-s" src="assets/img/uploads/2021/01/DSC_9421copy-38751-original-protected.jpg" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-5 col-xs-12 col-sm-5 pt-xs-4">
                                <h6 className="heading-primary w-133 m-lr-xs-auto">Our Story </h6>
                                <h2>Who are we ?</h2>
                                <p className="text-justify">With the challenges of growing population leading to increase in urbanization and industrialization there’s an alarming impact on food producers to food consumers ratio which often leads to compromise in the nutritional efficacy of the produce ‘Quantity over Quality’ and the add on pressure on the natural resources. The future of food and agriculture is influenced by a number of global trends that lays much emphasis on the need for an innovative
                                    systems that protect and enhance the natural resource base, while increasing productivity.</p>
                                <p className="text-justify">We at Orgeen are here to bring you the experience and the future of farming. We specialize in Hydroponics, a system of agriculture that utilizes nutrient-laden water rather than soil for plant nourishment, alongside soil-less cultivation and Microgreens. We aim to focus on producing top quality pesticide-free vegetables in a soil-less cultivation process and large- scale microgreens production.
                                    Orgeen aims to build a healthy and a greener future and promote the well-being, health, and quality of life. </p>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <h4>Guaranteed & Trusted </h4>
                                        <p className="pb-4">Freshness and Quality</p>
                                        <a href="#" className="button-g mt-4 font-weight-bold">READ MORE</a>
                                    </div>
                                    <div className="col-lg-6 best-service">
                                        <h4>Best Services</h4>
                                        <p>Directly from FARM to HOME</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h6 className="heading-primary m-lr-auto w-133">Our Team </h6>
                        <h2 className="text-center">Meet Our Team</h2>
                        <div className="row our-team pt-5 pb-5">
                            <div className="col-lg-4 col-sm-6 col-xs-12 staff-div sd">
                                <img className="img-fluid" src="assets/img/uploads/2022/02/Alok-1.jpg" alt="" />
                                <div className="staff-content">
                                    <h5 className="title">Alok Bindal</h5>
                                    <h6 className="sub-title">CEO & Founder
                                        <ul className="d-flex social-icon-staff float-right">
                                            <li className="pr-3"><a href="#"><FaFacebookF /></a></li>
                                            <li className="pr-3"><a href="#"><FaLinkedinIn /></a></li>
                                            <li className="pr-3"><a href="#"><FaTwitter /></a></li>
                                        </ul>
                                    </h6>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-xs-12 staff-div sd">
                                <img className="img-fluid" src="assets/img/uploads/2022/02/Pawan-1.jpg" alt="" />
                                <div className="staff-content">
                                    <h5 className="title">Pawan Agarwal</h5>
                                    <h6 className="sub-title">COO
                                        <ul className="d-flex social-icon-staff float-right">
                                            <li className="pr-3"><a href="#"><FaFacebookF /></a></li>
                                            <li className="pr-3"><a href="#"><FaLinkedinIn /></a></li>
                                            <li className="pr-3"><a href="#"><FaTwitter /></a></li>
                                        </ul>
                                    </h6>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-xs-12  ayush-div">
                                <img className="img-fluid" src="assets/img/uploads/2022/03/IMG_0149-1-e1646385180909.jpg" alt="" />
                                <div className="staff-content ayush">
                                    <h5 className="title">Ayush Srivastava</h5>
                                    <h6 className="sub-title">CTO & CMO
                                        <ul className="d-flex social-icon-staff float-right">
                                            <li className="pr-3"><a href="#"><FaFacebookF /></a></li>
                                            <li className="pr-3"><a href="#"><FaLinkedinIn /></a></li>
                                            <li className="pr-3"><a href="#"><FaTwitter /></a></li>
                                        </ul>
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="row pt-5 pb-5">
                            <div className="col-lg-12">
                                <h6 className="heading-primary m-lr-auto w-143">We care for you</h6>
                                <h1 className="text-center pt-3 pb-3">Why us?</h1>
                                <p className="ml-lg-5 mr-lg-5 text-center text-dark">We are working to create a sustainable and nutrient rich environment to produce a large varieties of both exotic and local vegetables and other produce.
                                    Our goal is to nourish every nook and corner to promote healthy and sustainable living across India</p>
                            </div>
                        </div>
                        <div className="row why-us-l pb-4">
                            <div className="col-lg-6 col-sm-6 col-xs-12">
                                <img className="img-fluid" src="assets/img/uploads/2022/03/C86A3359-scaled.jpg" alt="" />
                            </div>
                            <div className="col-lg-6 col-sm-6 col-xs-12">
                                <img className="img-fluid" src="assets/img/uploads/2022/03/C86A3526-scaled.jpg" alt="" />
                            </div>
                        </div>
                    </section>
                </div>
            </>
        )
    }
}
export default About 