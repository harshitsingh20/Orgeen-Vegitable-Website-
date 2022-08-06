import React from 'react';
import {FaHeart,FaShareAlt,FaShoppingCart,FaEye} from 'react-icons/fa';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
class Single_Product extends React.Component
{    
    render()
    {
        return(
            <>
             <div className="container-fluid bg-main">
                 <section className='single-product-s'>
                     <div className="row">
                         <div className="col-lg-5 pt-5 pb-5 col-sm-12 col-md-5">
                             <div className='single-img'>
                             <InnerImageZoom  src="assets/img/uploads/2022/02/healthy-food-2.png" zoomSrc="assets/img/uploads/2022/02/healthy-food-2.png" zoomType="hover" zoomPreload={true} />
                             </div>
                         </div>
                         <div className="col-lg-1 col-md-1"></div>
                         <div className="col-lg-6 pt-5 pb-lg-5  col-sm-12 col-md-6">
                             <div className='single-details'>
                                 <h2>Premium Monthly Subscription</h2>
                                 <h6 className='mt-3 tags'><span>Tags</span> <a href='#' className='ml-4'>monthly subscription,</a>  <a href='#'>subscribe</a></h6>
                                 <h3 className='mt-4'>₹10,000.00</h3>
                                 <div className='sn-para'>
                                     <h4 className='mt-3'>Subscribe to the Premium Subscription plan with 10% on every order for the entire month along with free shipping throughout the month. Also, get a privilege pass for you and your 3 friends to visit the Orgeen farms and see the process of Hydroponics, Soil less cultivation and how we grow the microgreens.</h4>
                                 </div>
                                 <form className='cart pt-3 pb-3'>                                   
                                 <div className="quantity">
                                    <label for="quantity" className='text-light pl-4 pr-lg-4 quant'>Quantity :</label>
                                    <input type="number" name="quantity" value="1"/>
                                    <a href="#" className='button-g ml-lg-5 ml-3'><span>ADD TO CART</span></a>
                                 </div>                                 
                                 </form>
                                 <div className="share-wish d-flex pt-4">
                                       <a href=""><h3>Share <FaShareAlt className='s-w-ic ml-2'/></h3></a>
                                        <a href="" className='ml-5'><h3>Wishlist <FaHeart className='s-w-ic ml-2'/></h3></a>
                                   </div>                             
                             </div>
                         <h6 className='mt-3 tags'><span>Category</span> <a href='#' className='ml-4'>Monthly Subscription,</a></h6>
                         </div>
                     </div>
                    <div className='product-add-i'>
                   <div className="row mt-5">                       
                           <div className="col-lg-5 col-sm-12 col-md-5">
                              <ul className='add-h float-right'>
                                  <li className='mr-5'><h4>Additional information</h4></li>
                              </ul> 
                           </div>
                           <div className="col-lg-7 mb-5 add-i-t col-sm-12 col-md-7">
                               <table className='table table-striped  table-bordered ml-lg-5 table-responsive'>
                                   <tr className='bg-gr'>
                                       <th>Brand:</th>
                                       <td>Organic Friuts</td>
                                   </tr>
                                   <tr >
                                       <th>Weight:</th>
                                       <td>2.5 kg</td>
                                   </tr>
                                   <tr className='bg-gr'>
                                       <th>Dimensions:</th>
                                       <td>12 × 23 × 56 cm</td>
                                   </tr>
                                   <tr>
                                       <th>Categories:</th>
                                       <td>Vegetables</td>
                                   </tr>
                                   <tr className='bg-gr'>
                                       <th>Size:</th>
                                       <td>Medium</td>
                                   </tr>
                               </table>
                           </div>                      
                       </div> 
                       </div>
                       <div className='related-product pt-5 pb-5'>
                         <h1 className='related-h text-center mt-4 mb-5'>Related Products</h1>
                         <div className="row">
                             <div className="col-lg-3 col-md-3 col-sm-12 text-center">                            
                      <a href=""> <img className='msp-img img-fluid' src="assets/img/uploads/2022/02/healthy-food-1-300x300.png" alt="" />
                          <div className='product-tool'>
                           <a href="#" className='tool-button'><FaShoppingCart className='tool'/></a>
                               <a href="#" className='tool-button'><FaEye className='tool'/></a>
                                </div>
                          <h6>Monthly Subscription</h6>
                        <h4>Standard Monthly Subscription</h4></a>
                        <h5>₹7500.00</h5>
                          </div> 
                             <div className="col-lg-3 col-md-3 col-sm-12 text-center">
                             <a href=""><img className='msp-img img-fluid' src="assets/img/uploads/2022/02/healthy-food-300x300.png" alt="" />
                          <div className='product-tool'>
                           <a href="#" className='tool-button'><FaShoppingCart className='tool'/></a>
                               <a href="#" className='tool-button'><FaEye className='tool'/></a>
                                </div>
                          <h6>Monthly Subscription</h6>
                        <h4>Basic Monthly Subscription</h4></a> 
                        <h5>₹5000.00</h5>                 
                      </div>
                             <div className="col-lg-3 col-md-3 col-sm-12"></div>
                             <div className="col-lg-3 col-md-3 col-sm-12"></div>
                         </div>
                       </div>
                 </section>
             </div>
            </>
        )
    }
}
export default Single_Product