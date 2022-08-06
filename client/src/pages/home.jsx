import React from "react";
import 'react-toastify/dist/ReactToastify.css';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { FaTruckMoving, FaExchangeAlt, FaShoppingCart, FaCreditCard, FaShareAlt, FaEye, FaStar, FaQuoteLeft } from 'react-icons/fa';
import BackgroundSlider from 'react-background-slider';
import Carousel from 'react-bootstrap/Carousel';


const options = [
    { value: 'Fruits', label: 'Fruits' },
    { value: 'Hypodronics', label: 'Hypodronics' },
    { value: 'Microgreens', label: 'Microgreens' },
    { value: 'Monthly Subscriptions', label: 'Monthly Subscriptions' },
    { value: 'Others', label: 'Others' },
    { value: 'Soil Less', label: 'Soil Less' },
    { value: 'Vegetables', label: 'Vegetables' }
]
class Products extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            img: "",
            id: "",
            name: "",
            slug: "",
            parent_category: "",
            regular: "",
            sale: "",
            image: "",
            description: "",
            value: ""


        };
        this.state = {
            records: []

        };

        this.getSingleProduct = this.getSingleProduct.bind(this);
    }

    //   handleChangeImage = e => {
    //     this.setState({ img: URL.createObjectURL(e.target.files[0]) })

    //   }
    componentDidMount() {
        fetch('http://localhost:5000/all_categories')
            .then(response => response.json())
            .then(records => {
                console.log("records", this.state.records)
                this.setState({
                    records: records

                })

            })
            .catch(error => console.log(error))
    }



    getSingleProduct(event) {

    }


    // 
    // handleParentCategory = (e) => {
    //   this.setState({ parent_category: e.value });
    // } 

    render() {


        return (
            <>
                <div className="container-fluid home-main">
                    <section className='home-first-s mt-n4'>
                        <div className="row">
                            <div className="col-md-8 col-sm-12 background-slide">
                                <div className="card">
                                    <div className="card-body">
                                        <BackgroundSlider
                                            images={["assets/img/uploads/2022/01/farm-field-organic-greenhouse-harvest-vegetables-groceries-wooden-box-fresh-produce_t20_pLJVGe-1.jpg", "assets/img/uploads/2022/01/grocery-delivery-services-online-shopping-home-smart-food-grocery-delivery-woman-customer-receiving_t20_E0J4aK.jpg"]}
                                            duration={10} transition={2} />
                                    </div>
                                </div>

                                <div className='bg-slide-s'>
                                    <span id='fresh'>fresh</span>
                                    <h3 className='mt-3'>100% Organic,</h3>
                                    <p className='mb-3'>No Pesticides & No Herbicides</p>
                                    <a href="/shop" className="float-lg-right mr-lg-5"><span>SHOP NOW</span></a>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-12 bg-img">
                                <div className="bg-inner">
                                    <span id='fresh-veg'>FRESH VEGGIES</span>
                                    <h3><span className='p-inner'>From farm to your table<br /> on the same day</span></h3>
                                    <p>Fresh Veggies</p>
                                    <a href="#"><span>SUBSCRIBE NOW</span></a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className='comapany-usp home-second-s mt-lg-3'>
                        <div className="row">
                            <div className="col-lg-3 col-sm-6 col-xs-12">
                                <div className="row">
                                    <div className="col-lg-6 col-sm-6 ">

                                        <span><FaTruckMoving /></span>
                                    </div>
                                    <div className="col-lg-6 col-sm-6">
                                        <div className='mt-lg-n4 usp-p'>
                                            <h4>Free Shipping</h4>
                                            <p>On all orders above<br /> Rs. 250 </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-xs-12">
                                <div className="row">
                                    <div className="col-lg-6 col-sm-6">
                                        <span> <FaShoppingCart /></span>
                                    </div>
                                    <div className="col-lg-6 col-sm-6">
                                        <div className='mt-lg-n4 usp-p'>
                                            <h4>Best Prices</h4>
                                            <p>Fresh produce at <br />best prices, deals <br />and offers </p>
                                        </div>
                                    </div>
                                </div></div>
                            <div className="col-lg-3 col-sm-6 col-xs-12">
                                <div className="row">
                                    <div className="col-lg-6 col-sm-6">
                                        <span><FaExchangeAlt /></span>
                                    </div>
                                    <div className="col-lg-6 col-sm-6">
                                        <div className='mt-lg-n4 usp-p mr-lg-n3'>
                                            <h4>Quick Support</h4>
                                            <p>Easy and quick <br />support and service </p>
                                        </div></div></div></div>
                            <div className="col-lg-3 col-sm-6 col-xs-12">
                                <div className="row">
                                    <div className="col-lg-6 col-sm-6">
                                        <span><FaCreditCard /></span>
                                    </div>
                                    <div className="col-lg-6 col-sm-6">
                                        <div className='mt-lg-n4 usp-p'>
                                            <h4>Freshness &<br /> Quality </h4>
                                            <p>Guaranteed fresh<br /> produce  </p>
                                        </div></div></div></div>
                        </div>
                    </section>
                    <section className='hydroponics-slider'>
                        <h6 className='heading-primary w-143 m-lr-xs-auto'>From Our Shop</h6><br />
                        <h2 className='slider-heading'>Hydroponics</h2>
                        <Carousel className='desktop'>
                            {/* desktop view */}
                            <Carousel.Item>

                                <div className="row">
                                    {
                                        this.state.records.map((user, index) => (
                                            <div className="col-md-2">

                                                <img src={`assets/img/uploads/${user.image}`} alt="First slide" className='img-fluid' />
                                                <h6>{user.name}</h6>
                                                <h4>{user.slug}</h4>
                                                <h5>₹{user.parent_category}</h5>
                                                <div className='product-tool'>
                                                    <a href="#" className='tool-button'><FaShoppingCart className='tool' /></a>
                                                    <a href="#" className='tool-button'><FaShareAlt className='tool' /></a>
                                                </div>

                                            </div>
                                        ))
                                    }

                                </div>

                            </Carousel.Item>
                       
                        </Carousel>
                        {/* desktop veiw end */}
                        {/* mobile view */}
                        <Carousel className='mobile'>
                            <Carousel.Item>
                                <div className="col-sm-12">
                                    <img src="assets/img/uploads/2022/01/66-370x422.png" alt="First slide" className='img-fluid' />
                                    <h6>Hydroponics</h6>
                                    <h4>Spinach (1kg)</h4>
                                    <h5>₹72.00</h5>
                                    <div className='product-tool'>
                                        <a href="#" className='tool-button'><FaShoppingCart className='tool' /></a>
                                        <a href="#" className='tool-button'><FaShareAlt className='tool' /></a>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="col-sm-12">
                                    <img src="assets/img/uploads/2022/01/64-370x422.png" alt="First slide" className='img-fluid' />
                                    <h6>Hydroponics</h6>
                                    <h4>Pak Choi White (250g)</h4>
                                    <h5>₹120.00</h5>
                                    <div className='product-tool'>
                                        <a href="#" className='tool-button'><FaShoppingCart className='tool' /></a>
                                        <a href="#" className='tool-button'><FaShareAlt className='tool' /></a>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="col-sm-12">
                                    <img src="assets/img/uploads/2022/01/65-370x422.png" alt="First slide" className='img-fluid' />
                                    <h6>Hydroponics</h6>
                                    <h4>Lolo Roso Lettuce (150g-200g)</h4>
                                    <h5>₹168.00</h5>
                                    <div className='product-tool'>
                                        <a href="#" className='tool-button'><FaShoppingCart className='tool' /></a>
                                        <a href="#" className='tool-button'><FaShareAlt className='tool' /></a>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="col-sm-12">
                                    <img src="assets/img/uploads/2022/01/63-370x422.png" alt="First slide" className='img-fluid' />
                                    <h6>Hydroponics</h6>
                                    <h4>OakLeaf Lettuce (Green) (150g-200g)</h4>
                                    <h5>₹168.00</h5>
                                    <div className='product-tool'>
                                        <a href="#" className='tool-button'><FaShoppingCart className='tool' /></a>
                                        <a href="#" className='tool-button'><FaShareAlt className='tool' /></a>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="col-sm-12">
                                    <img src="assets/img/uploads/2022/01/24-1-370x422.png" alt="First slide" className='img-fluid' />
                                    <h6>Hydroponics</h6>
                                    <h4>Kale (100g)</h4>
                                    <h5>₹168.00</h5> <div className='product-tool'>
                                        <a href="#" className='tool-button'><FaShoppingCart className='tool' /></a>
                                        <a href="#" className='tool-button'><FaShareAlt className='tool' /></a>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="col-sm-12">
                                    <img src="assets/img/uploads/2022/01/22-370x422.png" alt="second slide" className='img-fluid' />
                                    <h6>Hydroponics</h6>
                                    <h4>Leaf Lettuce (100g)</h4>
                                    <h5>₹70.00</h5>
                                    <div className='product-tool'>
                                        <a href="#" className='tool-button'><FaShoppingCart className='tool' /></a>
                                        <a href="#" className='tool-button'><FaShareAlt className='tool' /></a>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="col-sm-12">
                                    <img src="assets/img/uploads/2022/01/21-370x422.png" alt="second slide" className='img-fluid' />
                                    <h6>Hydroponics</h6>
                                    <h4>OakLeaf Lettuce (Red) (150g-200g)</h4>
                                    <h5>₹168.00</h5>
                                    <div className='product-tool'>
                                        <a href="#" className='tool-button'><FaShoppingCart className='tool' /></a>
                                        <a href="#" className='tool-button'><FaShareAlt className='tool' /></a>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="col-sm-12">
                                    <img src="assets/img/uploads/2022/01/20-370x422.png" alt="second slide" className='img-fluid' />
                                    <h6>Hydroponics</h6>
                                    <h4>Pak Choi Green (150g-200g)</h4>
                                    <h5>₹168.00</h5>
                                    <div className='product-tool'>
                                        <a href="#" className='tool-button'><FaShoppingCart className='tool' /></a>
                                        <a href="#" className='tool-button'><FaShareAlt className='tool' /></a>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="col-sm-12">
                                    <img src="assets/img/uploads/2022/01/16-370x422.png" alt="second slide" className='img-fluid' />
                                    <h6>Hydroponics</h6>
                                    <h4>Butterhead Lettuce (piece)</h4>
                                    <h5>₹144.00</h5>
                                    <div className='product-tool'>
                                        <a href="#" className='tool-button'><FaShoppingCart className='tool' /></a>
                                        <a href="#" className='tool-button'><FaShareAlt className='tool' /></a>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="col-sm-12">
                                    <img src="assets/img/uploads/2022/01/15-370x422.png" alt="third slide" className='img-fluid' />
                                    <h6>Hydroponics</h6>
                                    <h4>Romaine Lettuce (150g-200g)</h4>
                                    <h5>₹150.00</h5>
                                    <div className='product-tool'>
                                        <a href="#" className='tool-button'><FaShoppingCart className='tool' /></a>
                                        <a href="#" className='tool-button'><FaShareAlt className='tool' /></a>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="col-sm-12">
                                    <img src="assets/img/uploads/2022/01/14-370x422.png" alt="third slide" className='img-fluid' />
                                    <h6>Hydroponics</h6>
                                    <h4>Baby Spinach (100g)</h4>
                                    <h5>₹36.00</h5>
                                    <div className='product-tool'>
                                        <a href="#" className='tool-button'><FaShoppingCart className='tool' /></a>
                                        <a href="#" className='tool-button'><FaShareAlt className='tool' /></a>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="col-sm-12">
                                    <img src="assets/img/uploads/2022/01/23-370x422.png" alt="third slide" className='img-fluid' />
                                    <h6>Hydroponics</h6>
                                    <h4>Iceberg Lettuce (150g-200g)</h4>
                                    <h5>₹150.00</h5>
                                    <div className='product-tool'>
                                        <a href="#" className='tool-button'><FaShoppingCart className='tool' /></a>
                                        <a href="#" className='tool-button'><FaShareAlt className='tool' /></a>
                                    </div>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </section>
                    <section className='banner-usp'>
                        <div className='row'>
                            <div className="col-md-12 col-xs-12 text-center">
                                <img className='img-fluid rounded-lg' src="assets/img/uploads/2022/05/Pluck-copy.png" alt="" />
                            </div>
                        </div>
                    </section>
                    <section className='monthly-subscription'>
                        <h1 className='text-center pb-4'>Monthly Subscription Plans</h1>
                        <div className="row">
                            <div className="col-md-3 col-sm-6">
                                <div className='bg-img1'>
                                    <div className="bg-inner1">
                                        <span id='monthly-h'>monthly subscription plan</span>
                                        <h3><span className='p-inner1'>Save Up to Flat</span></h3>
                                        <p>10%</p>
                                        <a href="#"><span>Susbscribe Now</span></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <img className='msp-img img-fluid' src="assets/img/uploads/2022/02/healthy-food-2-300x300.png" alt="" />
                                <div className='product-tool'>
                                    <a href="#" className='tool-button'><FaShoppingCart className='tool' /></a>
                                    <a href="#" className='tool-button'><FaEye className='tool' /></a>
                                </div>
                                <h6>Monthly Subscription</h6>
                                <h4>Primium Monthly Subscription</h4>
                                <h5>₹10000.00</h5>
                            </div>
                            <div className="col-md-3 col-sm-6 pt-xs-4">
                                <img className='msp-img img-fluid' src="assets/img/uploads/2022/02/healthy-food-1-300x300.png" alt="" />
                                <div className='product-tool'>
                                    <a href="#" className='tool-button'><FaShoppingCart className='tool' /></a>
                                    <a href="#" className='tool-button'><FaEye className='tool' /></a>
                                </div>
                                <h6>Monthly Subscription</h6>
                                <h4>Standard Monthly Subscription</h4>
                                <h5>₹7500.00</h5>
                            </div>
                            <div className="col-md-3 col-sm-6 pt-xs-4 pt-lg-0">
                                <img className='msp-img img-fluid' src="assets/img/uploads/2022/02/healthy-food-300x300.png" alt="" />
                                <div className='product-tool'>
                                    <a href="#" className='tool-button'><FaShoppingCart className='tool' /></a>
                                    <a href="#" className='tool-button'><FaEye className='tool' /></a>
                                </div>
                                <h6>Monthly Subscription</h6>
                                <h4>Basic Monthly Subscription</h4>
                                <h5>₹5000.00</h5>
                            </div>
                        </div>
                    </section>
                    <section className='upcoming-products'>
                        <h6 className='heading-primary w-143 m-lr-xs-auto'>Coming soon</h6><br />
                        <h2 className='slider-heading'>Upcoming Products</h2>
                        <Carousel className='desktop'>
                            <Carousel.Item>
                                <div className="row">
                                    <div className="col-md-2">
                                        <img src="assets/img/uploads/2022/01/84-370x422.png" alt="First slide" className='img-fluid' />
                                        <h6>Fruits</h6>
                                        <h4>Pomegranate (Coming Soon)</h4>
                                    </div>
                                    <div className="col-md-2">
                                        <img src="assets/img/uploads/2022/01/60-370x422.png" alt="First slide" className='img-fluid' />
                                        <h6>Fruits</h6>
                                        <h4>Pineapple (Coming Soon)</h4>
                                    </div>
                                    <div className="col-md-2">
                                        <img src="assets/img/uploads/2022/01/59-370x422.png" alt="First slide" className='img-fluid' />
                                        <h6>Fruits</h6>
                                        <h4>Kiwi (Coming Soon)</h4>
                                    </div>
                                    <div className="col-md-2">
                                        <img src="assets/img/uploads/2022/01/58-370x422.png" alt="First slide" className='img-fluid' />
                                        <h6>Fruits</h6>
                                        <h4>Guava (Coming Soon)</h4>
                                    </div>
                                    <div className="col-md-2">
                                        <img src="assets/img/uploads/2022/01/85-370x422.png" alt="First slide" className='img-fluid' />
                                        <h6>Fruits</h6>
                                        <h4>Orange (Coming Soon)</h4>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="row">
                                    <div className="col-md-2">
                                        <img src="assets/img/uploads/2022/01/56-370x422.png" alt="second slide" className='img-fluid' />
                                        <h6>Fruits</h6>
                                        <h4>Apple (Coming Soon)</h4>
                                    </div>
                                    <div className="col-md-2">
                                        <img src="assets/img/uploads/2022/01/57-370x422.png" alt="second slide" className='img-fluid' />
                                        <h6>Fruits</h6>
                                        <h4>Banana (Coming Soon)</h4>
                                    </div>
                                    <div className="col-md-2">
                                        <img src="assets/img/uploads/2022/01/26-370x422.png" alt="second slide" className='img-fluid' />
                                        <h6>Microgreens</h6>
                                        <h4>Red Beet Microgreen (Coming Soon)</h4>
                                    </div>
                                    <div className="col-md-2">
                                        <img src="assets/img/uploads/2022/01/25-370x422.png" alt="second slide" className='img-fluid' />
                                        <h6>Microgreens</h6>
                                        <h4>Red Cabbage microgreen (Coming Soon)</h4>
                                    </div>
                                    <div className="col-md-2">
                                        <img src="assets/img/uploads/2022/01/31-370x422.png" alt="second slide" className='img-fluid' />
                                        <h6>Microgreens</h6>
                                        <h4>Micro Mustard (Coming Soon)</h4>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="row">
                                    <div className="col-md-2">
                                        <img src="assets/img/uploads/2022/01/30-370x422.png" alt="third slide" className='img-fluid' />
                                        <h6>Microgreens</h6>
                                        <h4>Micro Fennel (Coming Soon)</h4>
                                    </div>
                                    <div className="col-md-2">
                                        <img src="assets/img/uploads/2022/01/29-370x422.png" alt="third slide" className='img-fluid' />
                                        <h6>Microgreens</h6>
                                        <h4>Micro Onion (Coming Soon)</h4>
                                    </div>
                                    <div className="col-md-2">
                                        <img src="assets/img/uploads/2022/01/83-370x422.png" alt="third slide" className='img-fluid' />
                                        <h6>Fruits</h6>
                                        <h4>Chiku (Coming Soon)</h4>
                                    </div>
                                    <div className="col-md-2">
                                        <img src="assets/img/uploads/2022/01/89-370x422.png" alt="third slide" className='img-fluid' />
                                        <h6>Fruits</h6>
                                        <h4>Strawberry (Coming Soon)</h4>
                                    </div>
                                    <div className="col-md-2">
                                        <img src="assets/img/uploads/2022/01/87-370x422.png" alt="third slide" className='img-fluid' />
                                        <h6>Fruits</h6>
                                        <h4>Grapes (Coming Soon)</h4>
                                    </div>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                        {/* desktop view */}
                        {/* mobile view */}
                        <Carousel className='mobile'>
                            <Carousel.Item>
                                <div className="col-sm-12">
                                    <img src="assets/img/uploads/2022/01/84-370x422.png" alt="First slide" className='img-fluid' />
                                    <h6>Fruits</h6>
                                    <h4>Pomegranate (Coming Soon)</h4>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="col-sm-12">
                                    <img src="assets/img/uploads/2022/01/60-370x422.png" alt="First slide" className='img-fluid' />
                                    <h6>Fruits</h6>
                                    <h4>Pineapple (Coming Soon)</h4>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="col-sm-12">
                                    <img src="assets/img/uploads/2022/01/59-370x422.png" alt="First slide" className='img-fluid' />
                                    <h6>Fruits</h6>
                                    <h4>Kiwi (Coming Soon)</h4>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="col-sm-12">
                                    <img src="assets/img/uploads/2022/01/58-370x422.png" alt="First slide" className='img-fluid' />
                                    <h6>Fruits</h6>
                                    <h4>Guava (Coming Soon)</h4>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="col-sm-12">
                                    <img src="assets/img/uploads/2022/01/85-370x422.png" alt="First slide" className='img-fluid' />
                                    <h6>Fruits</h6>
                                    <h4>Orange (Coming Soon)</h4>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </section>
                    <section className='up-hydro-s-banner'>
                        <div className="row">
                            <div className="col-md-6 col-sm-6 pt-xs-4">
                                <div className='bg-Hydroponics'>
                                    <div className="bg-inner-uh float-lg-right">
                                        <img src="assets/img/uploads/2021/01/Asset-4@8x-copy.png" alt="" className='mt-n5 pb-4 img-fluid' /><br />
                                        <span id='hydro'>Hydroponics</span>
                                        <h3><span className='p-inner mr-3'>Nutrient ladden vegetables </span></h3>
                                        <p>Hydroponics</p>
                                        <a href="#"><span>Shop Now</span></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 pt-xs-4">
                                <div className='bg-coming'>
                                    <div className="bg-inner-uh">
                                        <p>Soil Less </p>
                                        <h3><span className='p-inner'>Range of </span></h3>
                                        <p>Exotic veggies</p>
                                        <a href="#"><span>Coming Soon</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className='testimonial'>
                        <div className='text-center'>
                            <h6 className='heading-primary m-lr-auto w-133'>Testimonial</h6><br />
                            <h1>Our Client Say</h1>
                        </div>
                        {/* desktop view */}
                        <Carousel className='desktop'>
                            <Carousel.Item>
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className='client-img'><img className='img-fluid' src="assets/img/uploads/2021/01/82b3217e-5d38-456d-b509-b75e78f30666-150x150.jpg" alt="" /><span className='quoteleft'><FaQuoteLeft /></span></div>
                                                <p>I opted for Orgeen since they had the most exotic vegetables and for the fact that they were grown with
                                                    Hydroponics method. As a customer,
                                                    I feel their veggies are extra fresh than others.
                                                    Recommend you to try it.  </p>
                                                <h6>Aarav Srivastava</h6>
                                                <p>Bussiness Owner</p>
                                                <span className='star'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className='client-img'><img className='img-fluid' src="assets/img/uploads/2021/01/PHOTO-2022-03-02-13-17-13-150x150.jpg" alt="" /><span className='quoteleft'><FaQuoteLeft /></span></div>
                                                <p> We are so happy that we've found Orgeen Only. The produce is fantastic and they are always on time which
                                                    is needed when you're planning to feed a family.
                                                    I highly recommend using their service!  </p>
                                                <h6>Dr Priyank Srivastava</h6>
                                                <p>Anaesthetist</p>
                                                <span className='star'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className='client-img'><img className='img-fluid' src="assets/img/uploads/2021/01/WhatsApp-Image-2022-03-02-at-1.16.04-PM-e1646223934677-150x150.jpg" alt="" /><span className='quoteleft'><FaQuoteLeft /></span></div>
                                                <p>As a doctor, I'd always recommend my patients with Hydro based diet. I saw and ordered from Orgeen
                                                    a week back and my experience has been delightful
                                                    in the way I get fresh vegetables at home. </p>
                                                <h6>Dr Gunjan Bhatnagar</h6>
                                                <p>Gynocologist and Infertility Specialist</p>
                                                <span className='star'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className='client-img'><img className='img-fluid' src="assets/img/uploads/2021/01/WhatsApp-Image-2022-03-06-at-4.47.21-PM-1.jpg" alt="" /><span className='quoteleft'><FaQuoteLeft /></span></div>
                                                <p>I am very happy with the subscription plan by Orgeen.
                                                    With every order, I get discounts that helps me save a lot.          </p>
                                                <h6>Aman Tiwari</h6>
                                                <p>Engineer</p>
                                                <span className='star'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className='client-img'><img src="assets/img/uploads/2021/01/WhatsApp-Image-2022-03-02-at-1.03.41-PM-e1646224159446-150x150.jpg" alt="" /><span className='quoteleft'><FaQuoteLeft /></span></div>
                                                <p> There's nothing better than opting for Hydroponics and I am keen to
                                                    recommend orgeen for the same. Their deliveries
                                                    are on time and they have the freshest produce.  </p>
                                                <h6>Akashat Srivastava</h6>
                                                <p>Engineer, EY India</p>
                                                <span className='star'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className='client-img'><img src="assets/img/uploads/2021/01/PHOTO-2022-03-02-13-17-13-150x150.jpg" alt="" /><span className='quoteleft'><FaQuoteLeft /></span></div>
                                                <p> We are so happy that we've found Orgeen Only. The produce is fantastic and they are always on time which
                                                    is needed when you're planning to feed a family.
                                                    I highly recommend using their service!  </p>
                                                <h6>Dr Priyank Srivastava</h6>
                                                <p>Anaesthetist</p>
                                                <span className='star'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className='client-img'><img src="assets/img/uploads/2021/01/WhatsApp-Image-2022-03-02-at-1.16.04-PM-e1646223934677-150x150.jpg" alt="" /><span className='quoteleft'><FaQuoteLeft /></span></div>
                                                <p>As a doctor, I'd always recommend my patients with Hydro based diet. I saw and ordered from Orgeen
                                                    a week back and my experience has been delightful
                                                    in the way I get fresh vegetables at home. </p>
                                                <h6>Dr Gunjan Bhatnagar</h6>
                                                <p>Gynocologist and Infertility Specialist</p>
                                                <span className='star'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className='client-img'><img src="assets/img/uploads/2021/01/WhatsApp-Image-2022-03-06-at-4.47.21-PM-1.jpg" alt="" /><span className='quoteleft'><FaQuoteLeft /></span></div>
                                                <p>I am very happy with the subscription plan by Orgeen.
                                                    With every order, I get discounts that helps me save a lot.          </p>
                                                <h6>Aman Tiwari</h6>
                                                <p>Engineer</p>
                                                <span className='star'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                        {/* desktop view end */}
                        {/* mobile  view */}
                        <Carousel className='mobile'>
                            <Carousel.Item>
                                <div className="col-md-3 col-sm-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className='client-img'><img className='img-fluid' src="assets/img/uploads/2021/01/82b3217e-5d38-456d-b509-b75e78f30666-150x150.jpg" alt="" /><span className='quoteleft'><FaQuoteLeft /></span></div>
                                            <p>I opted for Orgeen since they had the most exotic vegetables and for the fact that they were grown with
                                                Hydroponics method. As a customer,
                                                I feel their veggies are extra fresh than others.
                                                Recommend you to try it.  </p>
                                            <h6>Aarav Srivastava</h6>
                                            <p>Bussiness Owner</p>
                                            <span className='star'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="col-md-3 col-sm-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className='client-img'><img className='img-fluid' src="assets/img/uploads/2021/01/PHOTO-2022-03-02-13-17-13-150x150.jpg" alt="" /><span className='quoteleft'><FaQuoteLeft /></span></div>
                                            <p> We are so happy that we've found Orgeen Only. The produce is fantastic and they are always on time which
                                                is needed when you're planning to feed a family.
                                                I highly recommend using their service!  </p>
                                            <h6>Dr Priyank Srivastava</h6>
                                            <p>Anaesthetist</p>
                                            <span className='star'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="col-md-3 col-sm-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className='client-img'><img className='img-fluid' src="assets/img/uploads/2021/01/WhatsApp-Image-2022-03-02-at-1.16.04-PM-e1646223934677-150x150.jpg" alt="" /><span className='quoteleft'><FaQuoteLeft /></span></div>
                                            <p>As a doctor, I'd always recommend my patients with Hydro based diet. I saw and ordered from Orgeen
                                                a week back and my experience has been delightful
                                                in the way I get fresh vegetables at home. </p>
                                            <h6>Dr Gunjan Bhatnagar</h6>
                                            <p>Gynocologist and Infertility Specialist</p>
                                            <span className='star'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="col-md-3 col-sm-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className='client-img'><img className='img-fluid' src="assets/img/uploads/2021/01/WhatsApp-Image-2022-03-06-at-4.47.21-PM-1.jpg" alt="" /><span className='quoteleft'><FaQuoteLeft /></span></div>
                                            <p>I am very happy with the subscription plan by Orgeen.
                                                With every order, I get discounts that helps me save a lot.          </p>
                                            <h6>Aman Tiwari</h6>
                                            <p>Engineer</p>
                                            <span className='star'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="col-md-3 col-sm-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className='client-img'><img src="assets/img/uploads/2021/01/WhatsApp-Image-2022-03-02-at-1.03.41-PM-e1646224159446-150x150.jpg" alt="" /><span className='quoteleft'><FaQuoteLeft /></span></div>
                                            <p> There's nothing better than opting for Hydroponics and I am keen to
                                                recommend orgeen for the same. Their deliveries
                                                are on time and they have the freshest produce.  </p>
                                            <h6>Akashat Srivastava</h6>
                                            <p>Engineer, EY India</p>
                                            <span className='star'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </section>
                </div>
            </>


        )
    }
}
export default Products