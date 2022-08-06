import React, { component } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { FaTimes, FaSearch, FaUser, FaKey, FaShoppingBag } from 'react-icons/fa';
import Login from './login';
import Signup from './signup';
class Header extends React.Component {
  hideButton = () => {
    document.getElementById('top').style.display = "none";
  }
  hideCart = () => {
    document.getElementById('cart').style.display = "none";
    document.getElementById('cr').style.display = "block";
  }
  render() {
    return (
      <>
        <style>
          {`
                    .nav-section
                    {
                      padding: 1em 2em;
                    }              
                    `}
        </style>
        <header className='container-fluid header-main'>
          <div className='top-section row' id="top">
            <div className='top-text text-center col-md-12'>
              <p>Free Shipping on orders above 250 INR <a className='remove-btn pr-4 float-right mt-n1' type='button' onClick={this.hideButton}><FaTimes /></a> </p>
            </div>
          </div>
          <section className="row nav-section">
            <div className="col-md-12">
              <div className="container-nav">
                <Navbar expand="lg">
                  <Container className="mt-n3 mb-n2">
                    <Navbar.Brand href="/"><img src='assets/img/uploads/2021/10/Asset-1%408x.png' alt='logo' className=' img-fluid' /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="me-auto first-nav">
                        <Nav.Link href="/" className={window.location.href.split('/')[3] == "" ? "nav-link active" : "nav-link"}>Home</Nav.Link>
                        <Nav.Link href="/shop" className={window.location.href.split('/')[3] == "shop" ? "nav-link active" : "nav-link"}>Shop</Nav.Link>
                        <Nav.Link href="/subscription" className={window.location.href.split('/')[3] == "subscription" ? "nav-link active" : "nav-link"}>Subscription</Nav.Link>
                        <NavDropdown title="Shop By Category" id="basic-nav-dropdown">
                          <NavDropdown.Item href="#">Vegetables</NavDropdown.Item>
                          <NavDropdown.Item href="#">Fruits</NavDropdown.Item>
                          <NavDropdown.Item href="#">Hydroponics</NavDropdown.Item>
                          <NavDropdown.Item href="#">Microgreens</NavDropdown.Item>
                          <NavDropdown.Item href="#">Soil Less</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/our-farms" className={window.location.href.split('/')[3] == "our-farms" ? "nav-link active" : "nav-link"}>Our Farms</Nav.Link>
                        <Nav.Link href="/about" className={window.location.href.split('/')[3] == "about" ? "nav-link active" : "nav-link"}>About</Nav.Link>
                        <Nav.Link href="/contact" className={window.location.href.split('/')[3] == "contact" ? "nav-link active" : "nav-link"}>Contact</Nav.Link>
                        <Nav.Link href="/my-account" className={window.location.href.split('/')[3] == "my-account" ? "nav-link active" : "nav-link"}>Account</Nav.Link>
                      </Nav>
                    </Navbar.Collapse>
                    <Nav className='header-social'>
                      <Nav.Link href="#" class="btn btn-default btn-rounded mb-4" data-toggle="modal" data-target="#modalRegisterForm">Login</Nav.Link>
                      <Nav.Link href="#" data-toggle="modal" data-target="#myModal"><FaSearch /></Nav.Link>
                      <Nav.Link href="#"> <FaShoppingBag id='shopping-nav' />  </Nav.Link>
                    </Nav>
                    {/* search form  start*/}
                    <div class="modal fade" id="myModal">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <button type="button" className='close text-dark' data-dismiss="modal">&times;</button>
                          </div>
                          <div class="modal-body">
                            <form className='row text-center'>
                              <div className="col-md-12">
                                <input type="text" id='search' name="search" placeholder="Search...."></input>
                              </div>
                              <div className="col-md-12 mt-2">
                                <select name="category" id="category">
                                  <option value="all">All Categories</option>
                                  <option value="vegetables">Vegetables</option>
                                  <option value="fruits">Fruits</option>
                                  <option value="soil less">Soil Less</option>
                                  <option value="microgreens">Microgreens</option>
                                  <option value="hydroponics">Hydroponics</option>
                                </select>
                              </div>
                            </form>
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-s btn-success">Search</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* search form  end */}
                  </Container>
                </Navbar>
              </div>
            </div>
          </section>
          {/* shopping-cart */}
          <div className="row">
            <div className="col-lg-8 col-sm-6"></div>
            <div className="col-lg-4 col-sm-5 shopping-b pr-md-5">
              <div className="card cart-box mt-n3">
                <div className="card-body">
                  <div className='empty text-center pt-5 pb-5' id="cr">
                    <img src="assets/img/uploads/2022/06/empty-cart.svg" alt="" />
                  </div>
                  <div id='cart'>
                    <ul className='d-flex cart-item pt-2 pb-2 pl-2 pr-3' >
                      <li> <img className='cart-img' src="assets/img/uploads/2022/02/cucumbre-150x150.png" alt="" /></li>
                      <li><a href="#" className='permalink'><h6>Baby Cucumber (250 gm)</h6></a>
                        <p>1 × ₹120.00</p></li>
                      <li><a className='mt-n2 close-cart' type='button' onClick={this.hideCart}>&times;</a></li>
                    </ul>
                    <hr />
                    <p className='text-center'><b>Sub Total</b> ₹120</p>
                    <hr />
                    <ul className='d-flex text-center mt-3'>
                      <li> <a href="#" className="checkout hover-cart">CHECKOUT</a></li>
                      <li><a href="#" className='viewcart hover-cart ml-lg-4'>VIEW CART</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className=""></div>
          </div>
          {/* shopping-cart end*/}
          {/* login and Signup form start */}
          <div class="modal fade" id="modalRegisterForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
            aria-hidden="true">
            <div class="modal-dialog md-lg" role="document">
              <div className="row">
                <div className="col-lg-5 col-md-5 col-sm-12 bg-login">
                </div>
                <div className="col-lg-7 p-lg col-md-7 col-sm-12 lg-sup">
                  <div class="modal-content pb-5">
                    <div class="modal-header text-center login-form ml-3">
                      <ul className='nav nav-tabs mt-5'>
                        <li class="nav-item"> <a className="nav-link active" data-toggle="tab" href="#login">Login</a></li>
                        <li class="nav-item"> <a className="nav-link" data-toggle="tab" href="#signup">Signup</a></li>
                      </ul>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body mx-3 tab-content" >
                    <form id='login' className='tab-pane active'>
                     <Login/>
                     </form>
                      <form id='signup' className='tab-pane fade'>
                       <Signup/>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* login and Signup form end */}

        </header>
      </>
    )
  }

}
export default Header