import React from "react";
import BackgroundSlider from 'react-background-slider';
import { FaAngleRight, FaNutritionix, FaHeart, FaSpinner, FaUtensils, FaLeaf, FaBiohazard, FaHome, FaStop, FaRedo, FaPagelines, FaHandHoldingHeart } from 'react-icons/fa';
class Our_Farms extends React.Component {
    render() {
        return (
            <>
                <div className="container-fluid bg-main">
                    <section className="our-farms-s">
                        <div className="row pt-5 pb-5">
                            <div className="col-lg-6 col-sm-6 col-xs-12">
                                <img className="img-fluid backend-img" src="assets/img/uploads/2022/02/C86A3399-min.jpg" alt="" />
                            </div>
                            <div className="col-lg-6 col-sm-6 col-xs-12 backend-para">
                                <h1 className="font-weight-bold pt-5">What happens at the backend?</h1>
                                <h3 className="font-weight-bold pt-4">From <i>the farm </i>to your table</h3>
                                <p className="pt-3">We all know that plants grow in soil but, what is soil ?</p>
                                <p className="text-justify">Well, it is certainly our most abundant growing medium, but it also contains the typical macro and micro-nutrients needed for plant growth. When water travels through soil, it takes those nutrients with it to the plant roots. In soil-less agriculture, such as Hydroponics, we simply deliver these same nutrients that have been
                                    pre-mixed into a water reservoir, along with high levels of oxygen, efficiently to the plant roots.</p>
                            </div>
                        </div>
                        <div className="row hydroponics">
                            <h1 className="font-weight-bold pb-4">What is <span className="text-dark">Hydroponics</span>?</h1>
                            <div className="col-lg-12 col-sm-12 col-xs-12 pt-4 pb-4">
                                <div className="card">
                                    <div className="card-body bg-slider">
                                        <BackgroundSlider
                                            images={["assets/img/uploads/2022/02/C86A3437-min.jpg", "assets/img/uploads/2022/02/C86A3262-min.jpg", "assets/img/uploads/2022/02/C86A3239-min.jpg", "assets/img/uploads/2022/02/C86A3354-min.jpg", "assets/img/uploads/2022/02/C86A3411-min.jpg"]}
                                            duration={10} transition={2} />
                                    </div>
                                </div>
                                <p className="pt-4">Hydroponics is the art of gardening without soil. Hydroponics is a Latin word meaning 'working water'. Hydroponics is a way to skip the soil. It is a process that utilizes nutrient-laden water rather than soil for plant nourishment. There are multiple approaches to designing hydroponic systems, but the core elements are essentially the same.</p>
                                <p><b>Hydroponics is a tool for change:</b> The promise that what you do today will not endanger future generations. Hydroponics farming offers a solution to many of the detriments of our world’s current agricultural problems. Hydroponics addresses several issues within the food system—water scarcity and land shortages predominantly.</p>
                                <p>One of the most significant advantages of hydroponic farming is the ability to grow crops in near-optimal conditions via controlled environment agriculture (CEA) technology. Indoor and hydroponically grown crops can be grown anywhere on the planet at any time of year, regardless of weather conditions, availability of cultivable land, or soil quality.</p>
                                <p>Hydroponic farms reduce the carbon footprint of food and ensure a supply of fresh food throughout the year. Hydroponically grown food has the potential to be equally nutritious to soil-grown.  Hydroponics uses up to 90% less water than traditional farming.</p>
                            </div>
                        </div>

                        <div className="row pb-5 microgreen">
                            <div className="col-lg-6 col-sm-6 col-xs-12">
                                <h2 className="font-weight-bold pb-2 pt-3">Microgreens : 'The wondrous Superfoods'​</h2>
                                <div className="border-bottom mb-3"></div>
                                <p>A seed goes through various growth stages before it becomes a mature plant. One of these stages is the ‘microgreens’ stage, in which the seed develops into tiny plants that are bigger than sprouts but smaller than baby greens.</p>
                                <p>These seedlings of vegetables, herbs and grains are harvested seven to 14 days after germination and are packed with a wealth of minerals, vitamins and health-promoting nutrients that make them the superfood that they are.</p>
                            </div>
                            <div className="col-lg-6 col-sm-6 col-xs-12">
                                <img className="img-fluid" src="assets/img/uploads/2022/02/C86A3332-min.jpg" alt="" />
                            </div>
                        </div>
                        <h1 className="text-center font-weight-bold pb-5">Why <span className="why-micro">Microgreens?</span> </h1>
                        <div className="row">
                            <div className="col-lg-6 col-sm-6 col-xs-12">
                                <ul>
                                    <li className="pb-2"><FaAngleRight /> <span className="pl-2 pb-2">40 times more nutritious than fully grown vegetables</span></li>
                                    <li className="pb-2"><FaNutritionix /><span className="pl-2 pb-2">Packed with antioxidants and healthy nutrients</span></li>
                                </ul>
                            </div>
                            <div className="col-lg-6 col-sm-6 col-xs-12">
                                <ul>
                                    <li className="pb-2"><FaHeart /><span className="pl-2 pb-2">Rich source of vitamin A,B,C, E and K</span></li>
                                    <li className="pb-2"><FaSpinner /><span className="pl-2 pb-2">Abundant in phytonutrients that prevent diseases and infections</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="row pb-5">
                            <div className="col-lg-6 col-sm-6 col-xs-12">
                                <h2 className="why-micro font-weight-bold pt-4 pb-1 lets-h">Let's talk Sustainability </h2>
                                <div className="border-bottom mb-3"></div>
                                <p>As the world population continues to grow, the challenge is to produce more food whilst being more sustainable. Hydroponic farms offer a pathway towards a more sustainable food ethics that prioritizes the health of our food, bodies and environment without the heavy use of chemicals. Soil-less farming techniques, in general, are typically more resource-efficient and long term than traditional methods. Start-up costs are typically greater than for traditional farming. But overall, it produces far greater output with fewer resources. It can be grown anywhere in the world. Thereby, helps in reducing the carbon emissions generated through transportation, and allowing for year-round production in even inhospitable environment
                                    or weather conditions. Let's have a look at some major benefits this method of farming brings along with it. </p>
                            </div>
                            <div className="col-lg-6 col-sm-6 col-xs-12 lets-talk">
                                <img className="img-fluid" src="assets/img/uploads/2022/02/C86A3490-min.jpg" alt="" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-sm-6 col-xs-12">
                                <ul>
                                    <li className="pb-2"><FaUtensils /><span className="pl-2 pb-2">Supply enough food in a sustainable fashion to comfortably feed all of humankind for the foreseeable future</span></li>
                                    <li className="pb-2"><FaLeaf /><span className="pl-2 pb-2">Allow large tracts of land to revert to the natural landscape restoring ecosystem functions and service</span></li>
                                    <li className="pb-2"><FaBiohazard /><span className="pl-2 pb-2">Safely and efficiently use the organic portion of human and agricultural waste to produce energy through methane generation</span></li>
                                    <li className="pb-2"><FaHome /><span className="pl-2 pb-2">Take advantage of abandoned and unused urban spaces</span></li>

                                </ul>
                            </div>
                            <div className="col-lg-6 col-sm-6 col-xs-12">
                                <ul>
                                    <li className="pb-2"><FaStop /><span className="pl-2 pb-2">Break the transmission cycle of agents of disease associated with a fecally-contaminated environment</span></li>
                                    <li className="pb-2"><FaRedo /><span className="pl-2 pb-2">Allow year-round food production without loss of yields due to climate change or weather-related events</span></li>
                                    <li className="pb-2"><FaPagelines /><span className="pl-2 pb-2">Eliminate the need for large-scale use of pesticides and herbicides</span></li>
                                    <li className="pb-2"><FaHandHoldingHeart /> <span className="pl-2 pb-2">Create an environment that encourages sustainable urban life, promoting a state of good health for all those who choose to live in cities</span></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </>
        )
    }
}
export default Our_Farms