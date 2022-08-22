import React from 'react';
import Shop_Sidebar from "./shop-sidebar";
import { FaAngleRight, FaAngleDown, FaShoppingCart, FaEye } from 'react-icons/fa';

class ProductDetail extends React.Component {
    render() {
        return (
            <>
                <div className="container-fluid shop-main">
                    <section className='shop-main-section'>
                        <div className="row">
                            
                            <div className="col-lg-8 col-md-7">
                                <section className='breadcrumb-section'>
                                    <div className="row">
                                        <div className="col-lg-8 col-md-12">
                                            <ul class="breadcrumb">
                                                <li><a href="/">Home </a><FaAngleRight /></li>
                                                <li>Products</li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-4 col-md-12">
                                            <div className='short-by'>
                                                <span className='text-light'>SHORT BY:DEFAULT</span><a className='float-right text-light angled'><FaAngleDown /></a>

                                            </div>
                                            <div className="card short-by-li" id='lists'>
                                                <div className="card-body">
                                                    <div>
                                                        <ul>
                                                            <li><a href="#"><span>Default</span></a></li>
                                                            <li><a href="#"><span>Popularity</span></a></li>
                                                            <li><a href="#"><span>Newness</span></a></li>
                                                            <li><a href="#"><span>Low Price</span></a></li>
                                                            <li><a href="#"><span>High Price</span></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section className='shop-product-s'>
                                    <div className="row">
                                        <div className="col-lg-3 col-md-6 text-center">
                                            <a href="/single-product"> <img src="assets/img/uploads/2022/02/healthy-food-2-300x300.png" alt="" />
                                                <h6>Monthly Subscription</h6>
                                                <h4>Premium Monthly Subscription</h4></a>
                                            <h5>₹10000.00</h5>
                                            <div className='product-tool'>
                                                <a href="#" className='tool-button'><FaShoppingCart className='tool' /></a>
                                                <a href="#" className='tool-button'><FaEye className='tool' /></a>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 text-center">
                                            <img src="assets/img/uploads/2022/02/healthy-food-1-300x300.png" alt="" />
                                            <h6>Monthly Subscription</h6>
                                            <h4>Standard Monthly Subscription</h4>
                                            <h5>₹7500.00</h5>
                                            <div className='product-tool'>
                                                <a href="#" className='tool-button'><FaShoppingCart className='tool' /></a>
                                                <a href="#" className='tool-button'><FaEye className='tool' /></a>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 text-center">
                                            <img src="assets/img/uploads/2022/02/healthy-food-300x300.png" alt="" />
                                            <h6>Monthly Subscription</h6>
                                            <h4>Basic Monthly Subscription</h4>
                                            <h5>₹5000.00</h5>
                                            <div className='product-tool'>
                                                <a href="#" className='tool-button'><FaShoppingCart className='tool' /></a>
                                                <a href="#" className='tool-button'><FaEye className='tool' /></a>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 text-center">
                                            <img src="assets/img/uploads/2022/03/Karaoke-1-295x322.png" alt="" />
                                            <h6>Vegetables</h6>
                                            <h4>Gawar Phali (1kg)</h4>
                                            <h5>₹96.00</h5>
                                            <div className='product-tool'>
                                                <a href="#" className='tool-button'><FaShoppingCart className='tool' /></a>
                                                <a href="#" className='tool-button'><FaEye className='tool' /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-3  col-md-6 text-center">
                                            <img src="assets/img/uploads/2022/03/Karaoke-2-295x322.png" alt="" />
                                            <h6>Vegetables</h6>
                                            <h4>Lobia (1kg)</h4>
                                            <h5>₹96.00</h5>
                                            <div className='product-tool'>
                                                <a href="#" className='tool-button'><FaShoppingCart className='tool' /></a>
                                                <a href="#" className='tool-button'><FaEye className='tool' /></a>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 text-center">
                                            <img src="assets/img/uploads/2022/02/cucumbre-295x322.png" alt="" />
                                            <h6>Soil Less</h6>
                                            <h4>Cucumber (1kg)</h4>
                                            <h5>₹60.00</h5>
                                            <div className='product-tool'>
                                                <a href="#" className='tool-button'><FaShoppingCart className='tool' /></a>
                                                <a href="#" className='tool-button'><FaEye className='tool' /></a>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 text-center">
                                            <img src="assets/img/uploads/2022/02/capsi-295x322.png" alt="" />
                                            <h6>Soil Less</h6>
                                            <h4>Capiscum (1kg)</h4>
                                            <h5>₹120.00</h5>
                                            <div className='product-tool'>
                                                <a href="#" className='tool-button'><FaShoppingCart className='tool' /></a>
                                                <a href="#" className='tool-button'><FaEye className='tool' /></a>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 text-center">
                                            <img src="assets/img/uploads/2022//01/88-295x322.png" alt="" />
                                            <h6>Fruits</h6>
                                            <h4>Muskmelon (1kg)</h4>
                                            <h5>₹60.00</h5>
                                            <div className='product-tool'>
                                                <a href="#" className='tool-button'><FaShoppingCart className='tool' /></a>
                                                <a href="#" className='tool-button'><FaEye className='tool' /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-3 col-md-6 text-center">
                                            <img src="assets/img/uploads/2022/01/67-295x322.png" alt="" />
                                            <h6>Vegetables</h6>
                                            <h4>Baby Potato (1kg)</h4>
                                            <h5>₹50.00</h5>
                                            <div className='product-tool'>
                                                <a href="#" className='tool-button'><FaShoppingCart className='tool' /></a>
                                                <a href="#" className='tool-button'><FaEye className='tool' /></a>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 text-center">
                                            <img src="assets/img/uploads/2022/01/72-295x322.png" alt="" />
                                            <h6>Soil Less</h6>
                                            <h4>Zucchini (Green) (1kg)</h4>
                                            <h5>₹200.00</h5>
                                            <div className='product-tool'>
                                                <a href="#" className='tool-button'><FaShoppingCart className='tool' /></a>
                                                <a href="#" className='tool-button'><FaEye className='tool' /></a>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 text-center">
                                            <img src="assets/img/uploads/2022/01/73-295x322.png" alt="" />
                                            <h6>Vegetables</h6>
                                            <h4>Zucchini (yellow) (1kg)</h4>
                                            <h5>₹200.00</h5>
                                            <div className='product-tool'>
                                                <a href="#" className='tool-button'><FaShoppingCart className='tool' /></a>
                                                <a href="#" className='tool-button'><FaEye className='tool' /></a>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 text-center">
                                            <img src="assets/img/uploads/2022/01/75-295x322.png" alt="" />
                                            <h6>Vegetables</h6>
                                            <h4>LadyFinger (250g)</h4>
                                            <h5>₹54.00</h5>
                                            <div className='product-tool'>
                                                <a href="#" className='tool-button'><FaShoppingCart className='tool' /></a>
                                                <a href="#" className='tool-button'><FaEye className='tool' /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <ul class="pagination justify-content-center mt-5">
                                        <li class="page-item active"><a class="page-link" href="/shop">1</a></li>
                                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                                        <li class="page-item"><a class="page-link" href="#"><FaAngleRight /></a></li>
                                        <li class="page-item"><a class="page-link" href="#">Last</a></li>
                                    </ul>
                                </section>
                            </div>
                        </div>
                    </section>
                </div>
            </>
        )
    }
}
export default ProductDetail