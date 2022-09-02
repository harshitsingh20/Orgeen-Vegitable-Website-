import React from "react";
import Select from 'react-select';
import { FaPlusCircle } from 'react-icons/fa';
const options = [
    { value: 'Uttar Pradesh', label: 'Uttar Pradesh' },
    { value: 'Goa', label: 'Goa' },
    { value: 'Punjab', label: 'Punjab' }
]
class Check_Out extends React.Component {

    calTotalPrice = (cart) => {
        let totalPrice = 0;
        cart.map((item) => {
            let itemPrice = item.count * parseInt(item.price);
            totalPrice += itemPrice;
        });
        return totalPrice;
    };

    constructor(props) {
        super(props);

        this.state = {
            // Get value from localStorage or use default
            cart: localStorage.getItem("cart") ?
                JSON.parse(localStorage.getItem("cart")) :
                [],
            totalPrice: localStorage.getItem("cart") ?
                this.calTotalPrice(JSON.parse(localStorage.getItem("cart"))) :
                0,
        };

        // Listen to storage event
        window.addEventListener("storage", (e) => this.storageChanged(e));

        // Bind this to storageChanged()
        // this.storageChanged = this.storageChanged.bind(this);
    }

    storageChanged(e) {
        console.log("Storage Change");
        if (e.key === "cart") {
            this.setState({
                cart: JSON.parse(e.newValue),
            });
        }
    }

    render() {
        return (
            <>
                <div className="container-fluid check-out-main bg-main">
                    <section className='check-out-section pb-5'>
                        <div className="card-body">
                            <p> Have a coupon?
                                <a className="" data-toggle="collapse" href="#collapseExample" role="button"
                                    aria-expanded="false" aria-controls="collapseExample">
                                    Click here to enter your code
                                </a>
                            </p>
                            <div className="collapse" id="collapseExample">
                                <p>
                                    If you have a coupon code, please apply it below.
                                </p>
                                <form>
                                    <div className="coupon row">
                                        <div className="col-md-4">
                                            <input type="text" placeholder="Coupon Code" className="form-control border-0 mt-2" />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="button" value="APPLY COUPON" className="ac mt-sm-2" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-header ">
                                        <div className="row">
                                            <div className="col-sm-6"><h4 className="text-center text-uppercase text-success font-weight-bold">Billing details</h4></div>
                                            <div className="col-sm-6"><a className="float-right plus-i" data-toggle="collapse" href="#collapseExampleForm" role="button"
                                                aria-expanded="false" aria-controls="collapseExampleForm">
                                                <FaPlusCircle className="text-success" />
                                            </a>  </div>
                                        </div>
                                    </div>
                                    <div className="collapse" id="collapseExampleForm">
                                        <form className="needs-validation" novalidate="">

                                            <div className="card-body">
                                                <div className="form-group row">
                                                    <label className="col-sm-5 col-form-label" for="first">First name
                                                        <abbr className="required" title="required">*</abbr>
                                                    </label>
                                                    <div className="col-sm-7">
                                                        <input type="text" className="form-control" required="" name="first" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-sm-5 col-form-label" for="last">Last name
                                                        <abbr className="required" title="required">*</abbr></label>
                                                    <div className="col-sm-7">
                                                        <input type="text" className="form-control" required="" name="last" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-sm-5 col-form-label" for="company">Company name (optional)</label>
                                                    <div className="col-sm-7">
                                                        <input type="text" className="form-control" name="company" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-sm-5 col-form-label" for="country">Country / Region
                                                        <abbr className="required" title="required">*</abbr></label>
                                                    <div className="col-sm-7">
                                                        <input type="text" className="form-control" name="country" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-sm-5 col-form-label" for="street">Street address
                                                        <abbr className="required" title="required">*</abbr></label>
                                                    <div className="col-sm-7">
                                                        <input type="text" className="form-control" name="street" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-sm-5 col-form-label" for="city">Town / City
                                                        <abbr className="required" title="required">*</abbr></label>
                                                    <div className="col-sm-7">
                                                        <input type="text" className="form-control" name="city" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-sm-5 col-form-label" for="state">State
                                                        <abbr className="required" title="required">*</abbr></label>
                                                    <div className="col-sm-7">
                                                        <Select options={options} />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-sm-5 col-form-label" for="pin">PIN
                                                        <abbr className="required" title="required">*</abbr></label>
                                                    <div className="col-sm-7">
                                                        <input type="text" className="form-control" name="pin" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-sm-5 col-form-label" for="phone">Phone
                                                        <abbr className="required" title="required">*</abbr></label>
                                                    <div className="col-sm-7">
                                                        <input type="text" className="form-control" name="phone" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-sm-5 col-form-label" for="email">Email address
                                                        <abbr className="required" title="required">*</abbr></label>
                                                    <div className="col-sm-7">
                                                        <input type="email" name="email" className="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-footer text-right">
                                                <button className="btn btn-success">Save</button>
                                            </div>
                                        </form>
                                    </div>

                                    <div className="px-2 py-3">
                                        <form >
                                            <input type="radio" id="office" name="Address" value="HTML" />
                                            <label for="office" className="pl-2">Office</label><br />

                                            <br />
                                            <hr />
                                            <input type="radio" id="home" name="Address" value="CSS" />
                                            <label for="home" className="pl-2">Home</label><br /><hr />
                                            <div className="text-center">
                                                <button className="btn btn-success">Place Order</button>
                                            </div>
                                        </form>
                                    </div>

                                </div>
                            </div>
                            {/*Order  */}
                            <div className="col-sm-6 yo">
                                <div className="card yorder">
                                    <div className="card-header bg-success">
                                        <h4 className="text-center text-uppercase text-white font-weight-600">Your Order</h4>
                                    </div>
                                    <div className="card-body">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>PRODUCTS</th>
                                                    <th>SUBTOTALS</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>

                                                    {this.state.cart.map((cartItem, index) => {
                      return (
                        <ul className="d-flex cart-item pt-2 pb-2 pl-2 pr-3">
                          <li>
                            {" "}
                            <img
                              className="cart-img"
                              src={`../assets/img/uploads/${cartItem.img}`}
                              alt=""
                            />
                          </li>
                          <li>
                            <a href="#" className="permalink">
                              <h6>{cartItem.name}</h6>
                            </a>
                            <p>
                              {cartItem.count} × ₹{cartItem.price}
                            </p>
                          </li>
                          <li>
                            <input
                              className="btn-danger px-3 py-1 border-0"
                              type="button"
                              data-id={cartItem.id}
                              value="X"
                              onClick={this.hideCartRemove}
                            />
                          </li>
                        </ul>
                      );
                    })}

                                                    <td>
                                                        <div className="row">
                                                            <div className="col-md-5">
                                                                <img src="assets/img/uploads/2022/01/65-150x150.png" alt="" className='img-fluid w-60' />
                                                            </div>
                                                            <div className="col-md-7">
                                                                <h6 className="mt-5"><a href="#" className="text-decoration-none"><b>Lolo Roso Lettuce (150g-200g)</b></a></h6>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>₹510.00</td>
                                                </tr>
                                                <tr>
                                                    <td className="text-uppercase">Subtotal</td>
                                                    <td>₹700.00</td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={2}>
                                                        <label htmlFor="shipping">  Shipping:</label>
                                                        Free shipping
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>TOTAL</td>
                                                    <td>₹700.00</td>
                                                </tr>
                                            </tbody>
                                        </table>
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
export default Check_Out