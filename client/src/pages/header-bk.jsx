import React, { component } from 'react';
import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap';
import {FaTimes,FaSearch,FaUser,FaKey} from 'react-icons/fa';



class Header extends React.Component {

    hideButton = () =>
    {
        document.getElementById('top').style.display="none";     
    }
    hidePop = () =>
    {
        document.getElementById('popup').style.display="none";  
        document.getElementsByClassName('popup-overlay').style.display="none";       
    }

    
    render() {      
       
       

        return (
            <>
                <style>
                    {`
                    .nav-section
                    {
                      padding: 1em 3em;
                    }                 
                    
                    
                    
                    .pop > .close {
                      cursor: pointer;
                      position: absolute;
                      display: block;
                      padding: 2px 5px;
                      line-height: 20px;
                      right: -10px;
                      top: -36px;
                      font-size: 33px;                      
                      border-radius: 18px;
                      color:#ffffff;
                     
                    }
            
                    `}
                    </style>
                   <header className='container-fluid header-main'>
                       <section className='top-section row' id="top">

                       <div className='top-text text-center col-md-12'>
                       <p>Free Shipping on orders above 250 INR <a className='remove-btn pr-4 float-right mt-n1' type='button' onClick={this.hideButton}><FaTimes /></a> </p>
                        </div>
                       </section>
                      {/* <section className='second-section'>
                        <div className='container'>
                           <div className="row mt-md-n4">
                               <div className="col-md-3 logo">
                                   <a href="/"> <img src='assets/img/uploads/2021/10/Asset-1%408x.png' alt='logo' className='mt-n3'/> </a>                                                                </div>
                               <div className="col-md-7 form"> */}
                                
                                {/* <form>
                              <div className="search-input-form">
                            <input type="text" className="search-field"  placeholder="Search..." name="s" autocomplete="off" />
                        <select  name='cat' id='cat' className='postform' >
	                <option value='0' selected='selected'>All Categories</option>
	               <option className="level-0" value="vegetables">Vegetables</option>
	                <option className="level-0" value="hydroponics-2">Hydroponics</option>
	             <option className="level-0" value="soil-less-2">Soil Less</option>
	           <option className="level-0" value="microgreens">Microgreens</option>
	           <option className="level-0" value="fruits">Fruits</option>
	              <option className="level-0" value="monthly-subscription">Monthly Subscription</option>
</select>
<a type="submit" className="iconic-search-submit" href='#'><FontAwesomeIcon className='search-icon' icon={faSearch}/></a>
 */}

{/* <h5 className='login float-right'><a href="#">Login</a></h5>  */}
            {/* </div>
                           
           
               
                        </form> */}
                        
                               {/* </div>
                               <div className="col-md-2">
                                  
                               <div class="shopping-basket aux-phone-off aux-action-on-hover">
                    <a class="cart-contents shopping-bag-4" href="#" title="View your shopping cart">
            <span className='count-item'>0</span> <FontAwesomeIcon icon={faShoppingBag}/> </a>
       
                <div class="shopping-cart-info phone-off float-right">
            <span className="shopping-title">Shopping <br/> Basket</span><br/>
            <span className="shopping-amount cart-subtotal"><span className="Price-amount amount"><bdi><span className="Price-currencySymbol">₹</span>0.00</bdi></span></span>
        </div>
                    </div>
                               </div>
                           </div>
                        </div>

                      </section> */}

<section className="row nav-section">

<div className="col-md-10">
  <div className="container-nav">
<Navbar expand="lg">
  <Container>
    <Navbar.Brand href="/"><img src='assets/img/uploads/2021/10/Asset-1%408x.png' alt='logo' className=' img-fluid'/></Navbar.Brand> 
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto first-nav">
        <Nav.Link href="/" className={window.location.href.split('/')[3] == "" ? "nav-link active" : "nav-link"}>Home</Nav.Link>
        <Nav.Link href="/shop" className={window.location.href.split('/')[3] == "shop" ? "nav-link active" : "nav-link"}>Shop</Nav.Link>
        <Nav.Link href="#" className={window.location.href.split('/')[3] == "subscription" ? "nav-link active" : "nav-link"}>Subscription</Nav.Link>
        <NavDropdown title="Shop By Category" id="basic-nav-dropdown">
          <NavDropdown.Item href="#">Vegetables</NavDropdown.Item>
          <NavDropdown.Item href="#">Fruits</NavDropdown.Item>
          <NavDropdown.Item href="#">Hydroponics</NavDropdown.Item>     
          <NavDropdown.Item href="#">Microgreens</NavDropdown.Item>
          <NavDropdown.Item href="#">Soil Less</NavDropdown.Item>         
        </NavDropdown>
        <Nav.Link href="#" className={window.location.href.split('/')[3] == "our-forms" ? "nav-link active" : "nav-link"}>Our Forms</Nav.Link>
        <Nav.Link href="#" className={window.location.href.split('/')[3] == "about" ? "nav-link active" : "nav-link"}>About</Nav.Link>
        <Nav.Link href="#" className={window.location.href.split('/')[3] == "contact" ? "nav-link active" : "nav-link"}>Contact</Nav.Link>
      
      
        </Nav>
       
    </Navbar.Collapse>
     <Nav className='header-social'>
     <Nav.Link href="#" class="btn btn-default btn-rounded mb-4" data-toggle="modal" data-target="#modalRegisterForm">Login</Nav.Link>
    

{/* <div class="text-center">
  <a href="" class="btn btn-default btn-rounded mb-4" data-toggle="modal" data-target="#modalRegisterForm">Launch
    Modal Register Form</a>
</div> */}
      <Nav.Link href="#" data-toggle="modal" data-target="#myModal"><FaSearch/></Nav.Link> </Nav>
      
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
  

      
  </Container>
</Navbar>
</div>
</div> 
<div className="col-md-2">
<div class="shopping-basket aux-phone-off aux-action-on-hover">
                    {/* <a class="cart-contents shopping-bag-4" href="#" title="View your shopping cart">
            <span className='count-item'>0</span> <FontAwesomeIcon icon={faShoppingBag}/> </a>
        */}
                <div class="shopping-cart-info phone-off">
            <span className="shopping-title">Shopping Basket</span><br/>
            <span className="shopping-amount cart-subtotal"><span className="Price-amount amount"><bdi><span className="Price-currencySymbol">₹</span>0.00</bdi></span></span>
        </div>
                    </div>
                              
</div>
</section>
{/* login and Signup form start */}
<div class="modal fade" id="modalRegisterForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
  aria-hidden="true">
  <div class="modal-dialog md-lg" role="document">
  <div className="row">
  <div className="col-lg-5 col-md-5 bg-lg"></div>
  <div className="col-lg-7 p-lg col-md-7">
    <div class="modal-content pb-5">
      <div class="modal-header text-center login-form ml-3">
     
       <ul className='nav nav-tabs mt-5'>
         <li class="nav-item"> <a className="nav-link active" data-toggle="tab" href="#login">Login</a></li>
         <li class="nav-item"> <a className="nav-link" data-toggle="tab" href="#signup">Signup</a></li>
       </ul>
        <button type="button" class="close lg-close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body mx-3 tab-content" >
        <form id='login' className='tab-pane active'>
      <div class="input-group mb-3">
    <div class="input-group-prepend">
      <span class="input-group-text"><FaUser/></span>
    </div>
    <input type="text" class="form-control" placeholder="Username/Email"/>
  </div>
  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <span class="input-group-text"><FaKey/></span>
    </div>
    <input type="password" class="form-control" placeholder="Password"/>
  </div>
  <div>
    <ul className='d-flex'>
      <li><input type="checkbox" />Remember me</li>
     <a href="#" className='ml-5'> <li>Forget password?</li></a>
    </ul>
  </div>
  <button className='login-a-btn'>SIGN IN</button>
  </form>
  
    <form  id='signup' className='tab-pane fade'>
      <div class="input-group mb-3">
    <div class="input-group-prepend">
      <span class="input-group-text">@</span>
    </div>
    <input type="text" class="form-control" placeholder="Username/Email"/>
  </div>
  <div class="input-group mb-3">
  <div class="input-group-prepend">
      <span class="input-group-text"><FaUser/></span>
    </div>
  <input type="text" class="form-control" placeholder="First Name"/>
  <div class="input-group-prepend">
      <span class="input-group-text"><FaUser/></span>
    </div>
    <input type="text" class="form-control" placeholder="Last Name"/>
  </div>
  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <span class="input-group-text"><FaKey/></span>
    </div>
    <input type="password" class="form-control" placeholder="Password"/>
  </div>
  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <span class="input-group-text"><FaKey/></span>
    </div>
    <input type="password" class="form-control" placeholder="Confirm Password"/>
  </div>
  <div>
     <ul>
      <li><input type="checkbox" /> Subscribe to our newsletter</li>
     <li><input type="checkbox" /> I accept the Terms of Service and Privacy Policy</li>
    </ul>
  </div>
  <button className='login-a-btn'>SIGN UP</button>
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