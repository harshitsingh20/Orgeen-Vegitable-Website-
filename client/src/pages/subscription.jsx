import React from "react";
import { FaAngleDown } from 'react-icons/fa';
class Subscription extends React.Component {
    hide1 = () => {
        document.getElementById("first").style.display = "block";
        document.getElementById("second").style.display = "none";
        document.getElementById("third").style.display = "none";
        document.getElementById("fourth").style.display = "none";
        document.getElementById("fifth").style.display = "none";
        document.getElementById("six").style.display = "none";
    }
    hide2 = () => {
        document.getElementById("first").style.display = "none";
        document.getElementById("second").style.display = "block";
        document.getElementById("third").style.display = "none";
        document.getElementById("fourth").style.display = "none";
        document.getElementById("fifth").style.display = "none";
        document.getElementById("six").style.display = "none";
    }
    hide3 = () => {
        document.getElementById("first").style.display = "none";
        document.getElementById("second").style.display = "none";
        document.getElementById("third").style.display = "block";
        document.getElementById("fourth").style.display = "none";
        document.getElementById("fifth").style.display = "none";
        document.getElementById("six").style.display = "none";
    }
    hide4 = () => {
        document.getElementById("first").style.display = "none";
        document.getElementById("second").style.display = "none";
        document.getElementById("third").style.display = "none";
        document.getElementById("fourth").style.display = "block";
        document.getElementById("fifth").style.display = "none";
        document.getElementById("six").style.display = "none";
    }
    hide5 = () => {
        document.getElementById("first").style.display = "none";
        document.getElementById("second").style.display = "none";
        document.getElementById("third").style.display = "none";
        document.getElementById("fourth").style.display = "none";
        document.getElementById("fifth").style.display = "block";
        document.getElementById("six").style.display = "none";
    }
    hide6 = () => {
        document.getElementById("first").style.display = "none";
        document.getElementById("second").style.display = "none";
        document.getElementById("third").style.display = "none";
        document.getElementById("fourth").style.display = "none";
        document.getElementById("fifth").style.display = "none";
        document.getElementById("six").style.display = "block";
    }
    render() {
        return (
            <>
                <div className="container-fluid bg-main">
                    <section className="subscription-main-s">
                        <h1>Monthly Subscription Plans </h1>
                        <hr /><br />
                        <div className="row">
                            <div className="col-lg-12 col-sm-12 col-xs-12 banner">
                                <img className="img-fluid" src="assets/img/uploads/2022/02/Subscription-plans-copy-min-scaled.jpg" alt="subscription-plan" />
                                <h4 className="pt-4 pb-4">Orgeen is here to supply you with your daily dose of nutrition at your doorstep.Choose your monthly subscription plan
                                    according to your consumption and convenience.
                                </h4>
                            </div>
                        </div>
                        <div className="row pb-4">
                            <div className="col-lg-6 col-sm-6 col-xs-12">
                                <img className="img-fluid" src="assets/img/uploads/2022/03/hydroponics-vegetable-farm-2021-09-02-15-15-26-utc-1024x1024.jpg" alt="" />
                            </div>
                            <div className="col-lg-6 col-sm-6 col-xs-12 toggle-section pt-xs-4">
                                <div className="toggle-header">
                                    <h5> <a onClick={this.hide1}>How to subscribe for Monthly Subscription plan?<span className="float-right"><FaAngleDown /></span></a></h5>
                                    <div className="toggle-content mt-n2" id="first">
                                        <p>You can purchase the subscription plan from the Shop page or simply click on the image above to navigate to the subscription plans. </p>
                                    </div>
                                </div>
                                <div className="toggle-header">
                                    <h5><a onClick={this.hide2}>How can I avail discount on Monthly Subscription plan?<span className="float-right"><FaAngleDown /></span></a></h5>
                                    <div className="toggle-content mt-n2" id="second">
                                        <p>Once you buy a subscription plan from the shop page, we would send you an email of your personalized coupon code from which you can avail flat discount and free shipping </p>
                                    </div>
                                </div>
                                <div className="toggle-header">
                                    <h5><a onClick={this.hide3}>Can I discontinue my subscription pack? <span className="float-right"><FaAngleDown /></span></a></h5>
                                    <div className="toggle-content mt-n2 ff" id="third">
                                        <p>No, you cannot discontinue your subscription pack in the middle. The plan will be applicable for the entire 30 days duration.</p>
                                    </div>
                                </div>
                                <div className="toggle-header">
                                    <h5><a onClick={this.hide4}>Can I get a refund on the Monthly Subscription package? <span className="float-right"><FaAngleDown /></span></a></h5>
                                    <div className="toggle-content mt-n2" id="fourth">
                                        <p>No, you cannot get a refund once you subscribe</p>
                                    </div>
                                </div>
                                <div className="toggle-header">
                                    <h5><a onClick={this.hide5}>What can privilege pass get me? <span className="float-right"><FaAngleDown /></span></a></h5>
                                    <div className="toggle-content mt-n2" id="fifth">
                                        <p>Privilege pass is valid for upto 4 people who would be allowed to visit the Orgeen farms and have a great modern farm experience.  </p>
                                    </div>
                                </div>
                                <div className="toggle-header">
                                    <h5><a onClick={this.hide6}>Can I transfer my privilege pass to my friend? <span className="float-right"><FaAngleDown /></span></a></h5>
                                    <div className="toggle-content mt-n2" id="six">
                                        <p>No, the main account holder has to be present to use the privilege pass. This pass is non-transferable. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </>
        )
    }
}
export default Subscription