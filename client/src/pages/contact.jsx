import React from "react";
class Contact extends React.Component {
    render() {
        return (
            <>
                <div className="container-fluid bg-main">
                    <section className="contact-s pt-5 pb-5">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12">
                                <iframe id="maps" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d913060.6287395792!2d80.926651!3d26.627885!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd5fd680f1c9195fc!2sSisendi%20bazar%20ground!5e0!3m2!1sen!2sus!4v1654326776700!5m2!1sen!2sus" width="100%" height="350" allowfullscreen="" loading="lazy" class="border-3"></iframe>
                            </div>
                        </div>
                        <div className="row pt-5 pb-5">
                            <div className="col-lg-8 col-md-8 col-sm-12 contact-form text-center">
                                <h6 className="heading-primary w-143">Please Get in Touch</h6>
                                <h1>Contact Us</h1>
                                <form className="pt-xs-4">                                    
                                    <input type="text" id="name" name="name" placeholder="Enter your Name *" />
                                    <input type="email" id="email" name="email" placeholder="Please insert Your Email" /><br />
                                    <textarea name="detail" id="review" cols="30" rows="3" placeholder="Your Review *"></textarea><br />
                                    <a href="#" className="button-g float-right sub">Submit</a>
                                </form>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12 mt-4">
                                <div className="container-address">
                                    <section className="text-center text-light">
                                        <h2 className="font-weight-bold letter-s1">Lucknow</h2>
                                        <div className="border border-bottom pl-3 pr-3 m-lr-auto mt-4"></div>
                                        <p>3/306 Vinamra Khand <br />Gomti Nagar, Lucknow <br />
                                            Tel: +91 96 4881 4881</p>
                                    </section>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12">
                                <iframe id="maps2" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d455721.65006169135!2d81.051521!3d26.829601!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be2f2a409a6df%3A0x4c92283beae0e184!2sVibhav%20Khand%2C%20Gomti%20Nagar%2C%20Lucknow%2C%20Uttar%20Pradesh%20226010%2C%20India!5e0!3m2!1sen!2sus!4v1654490870837!5m2!1sen!2sus" width="100%" height="350" allowfullscreen="" loading="lazy" class="border-3"></iframe>
                            </div>
                        </div>
                    </section>
                </div>
            </>
        )
    }
}
export default Contact