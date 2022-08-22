import React from "react";
import { FaBoxOpen } from 'react-icons/fa';

class Side_Navbar extends React.Component
{
    render()
    {
        return(
            <>
            
            <div className="main-sidebar sidebar-style-2">
        <aside id="sidebar-wrapper">
          <div className="sidebar-brand">
          {/* <img alt="image" src="assets/img/logo.png" className="header-logo" /> */}
            <a href="/dashboard">  <span
                className="logo-name">ORGEEN</span>
            </a>
          </div>
          <div className="sidebar-user">
            <div className="sidebar-user-picture">
              <img alt="image" src="assets/img/uploads/2021/10/user.jpg"/>
            </div>
            <div className="sidebar-user-details">
              <div className="user-name">Lorem Ipsum</div>
              <div className="user-role">Administrator</div>
            </div>
          </div>
          <ul className="sidebar-menu">
            <li className="menu-header">Main</li>
            <li className="dropdown active">
              <a href="/dashboard" className="nav-link"><i data-feather="monitor"></i><span>Dashboard</span></a>
              {/* <ul className="dropdown-menu">
                <li className="active"><a className="nav-link" href="index.html">Dashboard V1</a></li>
                <li><a className="nav-link" href="index2.html">Dashboard V2</a></li>
              </ul> */}
            </li>
            <li className="dropdown">
              <a href="javascript:void(0)" className="nav-link has-dropdown"><i data-feather="briefcase"></i><span>Products</span></a>
              <ul className="dropdown-menu">
                <li><a className="nav-link" href="/products">All Product</a></li>
                <li><a className="nav-link" href="/product-form">Add Product</a></li>
              </ul>
            </li>
           <li className="dropdown">
              <a href="javascript:void(0)" className="nav-link has-dropdown"><i data-feather="command"></i><span>Category</span></a>
              <ul className="dropdown-menu">
                <li><a className="nav-link" href="/categories">Categories</a></li>
                <li><a className="nav-link" href="/category-form">Add Category</a></li>                
              </ul>
            </li>
              <li className="dropdown">
              <a href="javascript:void(0)" className="nav-link has-dropdown"><i data-feather="mail"></i><span>Order</span></a>
              <ul className="dropdown-menu">
                <li><a className="nav-link" href="/orders">Orders</a></li>
                <li><a className="nav-link" href="email-compose.html">Compose</a></li>
                
              </ul>
            </li>
            {/*<li className="menu-header">UI Elements</li>
            <li className="dropdown">
              <a href="#" className="nav-link has-dropdown"><i data-feather="copy"></i><span>Basic
                  Components</span></a>
              <ul className="dropdown-menu">
                <li><a className="nav-link" href="alert.html">Alert</a></li>
                <li><a className="nav-link" href="badge.html">Badge</a></li>
                <li><a className="nav-link" href="breadcrumb.html">Breadcrumb</a></li>
                <li><a className="nav-link" href="buttons.html">Buttons</a></li>
                <li><a className="nav-link" href="collapse.html">Collapse</a></li>
                <li><a className="nav-link" href="dropdown.html">Dropdown</a></li>
                <li><a className="nav-link" href="checkbox-and-radio.html">Checkbox &amp; Radios</a></li>
                <li><a className="nav-link" href="list-group.html">List Group</a></li>
                <li><a className="nav-link" href="media-object.html">Media Object</a></li>
                <li><a className="nav-link" href="navbar.html">Navbar</a></li>
                <li><a className="nav-link" href="pagination.html">Pagination</a></li>
                <li><a className="nav-link" href="popover.html">Popover</a></li>
                <li><a className="nav-link" href="progress.html">Progress</a></li>
                <li><a className="nav-link" href="tooltip.html">Tooltip</a></li>
                <li><a className="nav-link" href="flags.html">Flag</a></li>
                <li><a className="nav-link" href="typography.html">Typography</a></li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#" className="nav-link has-dropdown"><i data-feather="shopping-bag"></i><span>Advanced</span></a>
              <ul className="dropdown-menu">
                <li><a className="nav-link" href="avatar.html">Avatar</a></li>
                <li><a className="nav-link" href="card.html">Card</a></li>
                <li><a className="nav-link" href="modal.html">Modal</a></li>
                <li><a className="nav-link" href="sweet-alert.html">Sweet Alert</a></li>
                <li><a className="nav-link" href="toastr.html">Toastr</a></li>
                <li><a className="nav-link" href="empty-state.html">Empty State</a></li>
                <li><a className="nav-link" href="multiple-upload.html">Multiple Upload</a></li>
                <li><a className="nav-link" href="pricing.html">Pricing</a></li>
                <li><a className="nav-link" href="tabs.html">Tab</a></li>
              </ul>
            </li>
            <li><a className="nav-link" href="blank.html"><i data-feather="file"></i><span>Blank Page</span></a></li>
            <li className="menu-header">Aegis</li>
            <li className="dropdown">
              <a href="#" className="nav-link has-dropdown"><i data-feather="layout"></i><span>Forms</span></a>
              <ul className="dropdown-menu">
                <li><a className="nav-link" href="basic-form.html">Basic Form</a></li>
                <li><a className="nav-link" href="forms-advanced-form.html">Advanced Form</a></li>
                <li><a className="nav-link" href="forms-editor.html">Editor</a></li>
                <li><a className="nav-link" href="forms-validation.html">Validation</a></li>
                <li><a className="nav-link" href="form-wizard.html">Form Wizard</a></li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#" className="nav-link has-dropdown"><i data-feather="grid"></i><span>Tables</span></a>
              <ul className="dropdown-menu">
                <li><a className="nav-link" href="basic-table.html">Basic Tables</a></li>
                <li><a className="nav-link" href="advance-table.html">Advanced Table</a></li>
                <li><a className="nav-link" href="datatables.html">Datatable</a></li>
                <li><a className="nav-link" href="export-table.html">Export Table</a></li>
                <li><a className="nav-link" href="editable-table.html">Editable Table</a></li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#" className="nav-link has-dropdown"><i data-feather="pie-chart"></i><span>Charts</span></a>
              <ul className="dropdown-menu">
                <li><a className="nav-link" href="chart-amchart.html">amChart</a></li>
                <li><a className="nav-link" href="chart-apexchart.html">apexchart</a></li>
                <li><a className="nav-link" href="chart-echart.html">eChart</a></li>
                <li><a className="nav-link" href="chart-chartjs.html">Chartjs</a></li>
                <li><a className="nav-link" href="chart-sparkline.html">Sparkline</a></li>
                <li><a className="nav-link" href="chart-morris.html">Morris</a></li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#" className="nav-link has-dropdown"><i data-feather="feather"></i><span>Icons</span></a>
              <ul className="dropdown-menu">
                <li><a className="nav-link" href="icon-font-awesome.html">Font Awesome</a></li>
                <li><a className="nav-link" href="icon-material.html">Material Design</a></li>
                <li><a className="nav-link" href="icon-ionicons.html">Ion Icons</a></li>
                <li><a className="nav-link" href="icon-feather.html">Feather Icons</a></li>
                <li><a className="nav-link" href="icon-weather-icon.html">Weather Icon</a></li>
              </ul>
            </li>
            <li className="menu-header">Media</li>
            <li className="dropdown">
              <a href="#" className="nav-link has-dropdown"><i data-feather="image"></i><span>Gallery</span></a>
              <ul className="dropdown-menu">
                <li><a className="nav-link" href="light-gallery.html">Light Gallery</a></li>
                <li><a href="gallery1.html">Gallery 2</a></li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#" className="nav-link has-dropdown"><i data-feather="flag"></i><span>Sliders</span></a>
              <ul className="dropdown-menu">
                <li><a href="carousel.html">Bootstrap Carousel.html</a></li>
                <li><a className="nav-link" href="owl-carousel.html">Owl Carousel</a></li>
              </ul>
            </li>
            <li><a className="nav-link" href="timeline.html"><i data-feather="sliders"></i><span>Timeline</span></a></li>
            <li className="menu-header">Maps</li>
            <li className="dropdown">
              <a href="#" className="nav-link has-dropdown"><i data-feather="map"></i><span>Google
                  Maps</span></a>
              <ul className="dropdown-menu">
                <li><a href="gmaps-advanced-route.html">Advanced Route</a></li>
                <li><a href="gmaps-draggable-marker.html">Draggable Marker</a></li>
                <li><a href="gmaps-geocoding.html">Geocoding</a></li>
                <li><a href="gmaps-geolocation.html">Geolocation</a></li>
                <li><a href="gmaps-marker.html">Marker</a></li>
                <li><a href="gmaps-multiple-marker.html">Multiple Marker</a></li>
                <li><a href="gmaps-route.html">Route</a></li>
                <li><a href="gmaps-simple.html">Simple</a></li>
              </ul>
            </li>
            <li><a className="nav-link" href="vector-map.html"><i data-feather="map-pin"></i><span>Vector
                  Map</span></a></li>
            <li className="menu-header">Pages</li>
            <li className="dropdown">
              <a href="#" className="nav-link has-dropdown"><i data-feather="user-check"></i><span>Auth</span></a>
              <ul className="dropdown-menu">
                <li><a href="auth-login.html">Login</a></li>
                <li><a href="auth-register.html">Register</a></li>
                <li><a href="auth-forgot-password.html">Forgot Password</a></li>
                <li><a href="auth-reset-password.html">Reset Password</a></li>
                <li><a href="subscribe.html">Subscribe</a></li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#" className="nav-link has-dropdown"><i data-feather="alert-triangle"></i><span>Errors</span></a>
              <ul className="dropdown-menu">
                <li><a className="nav-link" href="errors-503.html">503</a></li>
                <li><a className="nav-link" href="errors-403.html">403</a></li>
                <li><a className="nav-link" href="errors-404.html">404</a></li>
                <li><a className="nav-link" href="errors-500.html">500</a></li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#" className="nav-link has-dropdown"><i data-feather="anchor"></i><span>Other
                  Pages</span></a>
              <ul className="dropdown-menu">
                <li><a className="nav-link" href="create-post.html">Create Post</a></li>
                <li><a className="nav-link" href="posts.html">Posts</a></li>
                <li><a className="nav-link" href="profile.html">Profile</a></li>
                <li><a className="nav-link" href="contact.html">Contact</a></li>
                <li><a className="nav-link" href="invoice.html">Invoice</a></li>
              </ul>
            </li> */}
            {/* <li className="dropdown">
              <a href="#" className="nav-link has-dropdown"><i data-feather="chevrons-down"></i><span>Multilevel</span></a>
              <ul className="dropdown-menu">
                <li><a href="#">Menu 1</a></li>
                <li className="dropdown">
                  <a href="#" className="has-dropdown">Menu 2</a>
                  <ul className="dropdown-menu">
                    <li><a href="#">Child Menu 1</a></li>
                    <li className="dropdown">
                      <a href="#" className="has-dropdown">Child Menu 2</a>
                      <ul className="dropdown-menu">
                        <li><a href="#">Child Menu 1</a></li>
                        <li><a href="#">Child Menu 2</a></li>
                      </ul>
                    </li>
                    <li><a href="#"> Child Menu 3</a></li>
                  </ul>
                </li>
              </ul>
            </li> */}
          </ul>
        </aside>
      </div>
            
            
            </>
        )
    }
}
export default Side_Navbar