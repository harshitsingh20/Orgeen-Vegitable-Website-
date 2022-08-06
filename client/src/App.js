import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Header from "./pages/header";
import Footer from "./pages/footer";
import Home from "./pages/home";
import Shop from "./pages/shop";
import Shop_Sidebar from "./pages/shop-sidebar";
import Single_Product from "./pages/single-product";
import Terms_And_Conditions from "./pages/terms-and-conditions";
import Privacy_Policy from "./pages/privacy-policy";
import Refund_Cancellation from "./pages/refund-cancellation";
import My_Account from "./pages/my-account";
import Subscription from "./pages/subscription";
import Our_Farms from "./pages/our-farms";
import About from "./pages/about";
import Contact from "./pages/contact";
// import Login from "./pages/login";
import Signup from "./pages/signup";
import Login from "./components/Login";
import Register from "./components/Register";
// import Dashboard from "./components/Dashboard";
/* Dashboard */
import DashHeader from "./dashboard/header";
import DashFooter from "./dashboard/footer";
import Dashboard from "./dashboard/home"; 
import Products from "./dashboard/products";
import Categories from "./dashboard/categories";
import Orders from "./dashboard/orders";
import Category_Form from "./dashboard/category-form";
import Product_Form from "./dashboard/product-form";
import CardDetails from "./pages/CardDetails";


const App = () => {
  
  return (
    
    <>

      {/* <Header/> */}
      <BrowserRouter>
        <Switch>
        {/* Pages */}

          {/* <Route exact path="/" ><Header /><Home /> <Footer /></Route> */}

          {/* <Route path="/" element={<Home />} />      
          <Route path="/login" element={<Login />} />       */}
          <Route exact path="/" ><Header /><Home /> <Footer /></Route>
          <Route exact path="/shop" ><Header /><Shop /> <Footer /></Route>

          <Route exact path="/card-details"><Header />  <CardDetails/> <Footer /> </Route>

          <Route exact path="/login"><Login /></Route>
          <Route path="/register"><Register /></Route>

          {/* Dashboard Start */}
          {/* <Route  path="/dashboard"> <Navbar/> <Dashboard /> </Route> */}
          {/* <DashHeader /> */}
          <Route  path="/dashboard" > <DashHeader/>  <Dashboard /> <DashFooter /></Route>
          <Route  path="/products"> <DashHeader/> <Products /> <DashFooter /> </Route>
          <Route  path="/categories"> <DashHeader/> <Categories/> <DashFooter /> </Route>
          <Route  path="/orders"> <DashHeader/> <Orders/> <DashFooter /> </Route>
          <Route  path="/category-form"> <DashHeader/> <Category_Form/> <DashFooter /> </Route>
          <Route  path="/product-form"> <DashHeader/> <Product_Form/> <DashFooter /> </Route>

          
          {/* <DashFooter /> */}

          {/* Dashboard Stop */}
           
           
         

          {/* <Route path="/shop" element={<Shop />} />   
          <Route path="/single-product" element={<Single_Product />} /> 
          <Route path="/terms-and-conditions" element={<Terms_And_Conditions />} />   
          <Route path="/privacy-policy" element={<Privacy_Policy />} />  
          <Route path="/refund-cancellation" element={<Refund_Cancellation />} />  
          <Route path="/my-account" element={<My_Account />} />  
          <Route path="/subscription" element={<Subscription />} />  
          <Route path="/our-farms" element={<Our_Farms />} />  
          <Route path="/about" element={<About />} /> 
          <Route path="/contact" element={<Contact />} />   */}
        </Switch>
      </BrowserRouter>
      {/* <Footer/>  */}

    </>
  );

};
export default App;
